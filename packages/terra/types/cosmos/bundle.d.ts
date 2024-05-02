import * as _20 from "./app/module/v1alpha1/module";
import * as _21 from "./app/v1alpha1/config";
import * as _22 from "./app/v1alpha1/module";
import * as _23 from "./app/v1alpha1/query";
import * as _24 from "./auth/v1beta1/auth";
import * as _25 from "./auth/v1beta1/genesis";
import * as _26 from "./auth/v1beta1/query";
import * as _27 from "./authz/v1beta1/authz";
import * as _28 from "./authz/v1beta1/event";
import * as _29 from "./authz/v1beta1/genesis";
import * as _30 from "./authz/v1beta1/query";
import * as _31 from "./authz/v1beta1/tx";
import * as _32 from "./bank/v1beta1/authz";
import * as _33 from "./bank/v1beta1/bank";
import * as _34 from "./bank/v1beta1/genesis";
import * as _35 from "./bank/v1beta1/query";
import * as _36 from "./bank/v1beta1/tx";
import * as _37 from "./base/abci/v1beta1/abci";
import * as _38 from "./base/kv/v1beta1/kv";
import * as _39 from "./base/node/v1beta1/query";
import * as _40 from "./base/query/v1beta1/pagination";
import * as _41 from "./base/reflection/v1beta1/reflection";
import * as _42 from "./base/reflection/v2alpha1/reflection";
import * as _43 from "./base/snapshots/v1beta1/snapshot";
import * as _44 from "./base/store/v1beta1/commit_info";
import * as _45 from "./base/store/v1beta1/listening";
import * as _46 from "./base/tendermint/v1beta1/query";
import * as _47 from "./base/tendermint/v1beta1/types";
import * as _48 from "./base/v1beta1/coin";
import * as _49 from "./capability/v1beta1/capability";
import * as _50 from "./capability/v1beta1/genesis";
import * as _51 from "./crisis/v1beta1/genesis";
import * as _52 from "./crisis/v1beta1/tx";
import * as _53 from "./crypto/ed25519/keys";
import * as _54 from "./crypto/hd/v1/hd";
import * as _55 from "./crypto/keyring/v1/record";
import * as _56 from "./crypto/multisig/keys";
import * as _57 from "./crypto/secp256k1/keys";
import * as _58 from "./crypto/secp256r1/keys";
import * as _59 from "./distribution/v1beta1/distribution";
import * as _60 from "./distribution/v1beta1/genesis";
import * as _61 from "./distribution/v1beta1/query";
import * as _62 from "./distribution/v1beta1/tx";
import * as _63 from "./evidence/v1beta1/evidence";
import * as _64 from "./evidence/v1beta1/genesis";
import * as _65 from "./evidence/v1beta1/query";
import * as _66 from "./evidence/v1beta1/tx";
import * as _67 from "./feegrant/v1beta1/feegrant";
import * as _68 from "./feegrant/v1beta1/genesis";
import * as _69 from "./feegrant/v1beta1/query";
import * as _70 from "./feegrant/v1beta1/tx";
import * as _71 from "./genutil/v1beta1/genesis";
import * as _72 from "./gov/v1/genesis";
import * as _73 from "./gov/v1/gov";
import * as _74 from "./gov/v1/query";
import * as _75 from "./gov/v1/tx";
import * as _76 from "./gov/v1beta1/genesis";
import * as _77 from "./gov/v1beta1/gov";
import * as _78 from "./gov/v1beta1/query";
import * as _79 from "./gov/v1beta1/tx";
import * as _80 from "./group/v1/events";
import * as _81 from "./group/v1/genesis";
import * as _82 from "./group/v1/query";
import * as _83 from "./group/v1/tx";
import * as _84 from "./group/v1/types";
import * as _85 from "./mint/v1beta1/genesis";
import * as _86 from "./mint/v1beta1/mint";
import * as _87 from "./mint/v1beta1/query";
import * as _89 from "./nft/v1beta1/event";
import * as _90 from "./nft/v1beta1/genesis";
import * as _91 from "./nft/v1beta1/nft";
import * as _92 from "./nft/v1beta1/query";
import * as _93 from "./nft/v1beta1/tx";
import * as _94 from "./orm/module/v1alpha1/module";
import * as _95 from "./orm/v1/orm";
import * as _96 from "./orm/v1alpha1/schema";
import * as _97 from "./params/v1beta1/params";
import * as _98 from "./params/v1beta1/query";
import * as _99 from "./slashing/v1beta1/genesis";
import * as _100 from "./slashing/v1beta1/query";
import * as _101 from "./slashing/v1beta1/slashing";
import * as _102 from "./slashing/v1beta1/tx";
import * as _103 from "./staking/v1beta1/authz";
import * as _104 from "./staking/v1beta1/genesis";
import * as _105 from "./staking/v1beta1/query";
import * as _106 from "./staking/v1beta1/staking";
import * as _107 from "./staking/v1beta1/tx";
import * as _108 from "./tx/signing/v1beta1/signing";
import * as _109 from "./tx/v1beta1/service";
import * as _110 from "./tx/v1beta1/tx";
import * as _111 from "./upgrade/v1beta1/query";
import * as _112 from "./upgrade/v1beta1/tx";
import * as _113 from "./upgrade/v1beta1/upgrade";
import * as _114 from "./vesting/v1beta1/tx";
import * as _115 from "./vesting/v1beta1/vesting";
import * as _188 from "./auth/v1beta1/query.lcd";
import * as _189 from "./authz/v1beta1/query.lcd";
import * as _190 from "./bank/v1beta1/query.lcd";
import * as _191 from "./base/node/v1beta1/query.lcd";
import * as _192 from "./base/tendermint/v1beta1/query.lcd";
import * as _193 from "./distribution/v1beta1/query.lcd";
import * as _194 from "./evidence/v1beta1/query.lcd";
import * as _195 from "./feegrant/v1beta1/query.lcd";
import * as _196 from "./gov/v1/query.lcd";
import * as _197 from "./gov/v1beta1/query.lcd";
import * as _198 from "./group/v1/query.lcd";
import * as _199 from "./mint/v1beta1/query.lcd";
import * as _200 from "./nft/v1beta1/query.lcd";
import * as _201 from "./params/v1beta1/query.lcd";
import * as _202 from "./slashing/v1beta1/query.lcd";
import * as _203 from "./staking/v1beta1/query.lcd";
import * as _204 from "./tx/v1beta1/service.lcd";
import * as _205 from "./upgrade/v1beta1/query.lcd";
import * as _206 from "./app/v1alpha1/query.rpc.Query";
import * as _207 from "./auth/v1beta1/query.rpc.Query";
import * as _208 from "./authz/v1beta1/query.rpc.Query";
import * as _209 from "./bank/v1beta1/query.rpc.Query";
import * as _210 from "./base/node/v1beta1/query.rpc.Service";
import * as _211 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _212 from "./distribution/v1beta1/query.rpc.Query";
import * as _213 from "./evidence/v1beta1/query.rpc.Query";
import * as _214 from "./feegrant/v1beta1/query.rpc.Query";
import * as _215 from "./gov/v1/query.rpc.Query";
import * as _216 from "./gov/v1beta1/query.rpc.Query";
import * as _217 from "./group/v1/query.rpc.Query";
import * as _218 from "./mint/v1beta1/query.rpc.Query";
import * as _219 from "./nft/v1beta1/query.rpc.Query";
import * as _220 from "./params/v1beta1/query.rpc.Query";
import * as _221 from "./slashing/v1beta1/query.rpc.Query";
import * as _222 from "./staking/v1beta1/query.rpc.Query";
import * as _223 from "./tx/v1beta1/service.rpc.Service";
import * as _224 from "./upgrade/v1beta1/query.rpc.Query";
import * as _225 from "./authz/v1beta1/tx.rpc.msg";
import * as _226 from "./bank/v1beta1/tx.rpc.msg";
import * as _227 from "./crisis/v1beta1/tx.rpc.msg";
import * as _228 from "./distribution/v1beta1/tx.rpc.msg";
import * as _229 from "./evidence/v1beta1/tx.rpc.msg";
import * as _230 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _231 from "./gov/v1/tx.rpc.msg";
import * as _232 from "./gov/v1beta1/tx.rpc.msg";
import * as _233 from "./group/v1/tx.rpc.msg";
import * as _234 from "./nft/v1beta1/tx.rpc.msg";
import * as _235 from "./slashing/v1beta1/tx.rpc.msg";
import * as _236 from "./staking/v1beta1/tx.rpc.msg";
import * as _237 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _238 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _20.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _20.Module;
                    fromPartial(_: Partial<_20.Module>): _20.Module;
                    fromAmino(_: _20.ModuleAmino): _20.Module;
                    toAmino(_: _20.Module): _20.ModuleAmino;
                    fromAminoMsg(object: _20.ModuleAminoMsg): _20.Module;
                    toAminoMsg(message: _20.Module): _20.ModuleAminoMsg;
                    fromProtoMsg(message: _20.ModuleProtoMsg): _20.Module;
                    toProto(message: _20.Module): Uint8Array;
                    toProtoMsg(message: _20.Module): _20.ModuleProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _206.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                config(request?: _23.QueryConfigRequest): Promise<_23.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _23.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.QueryConfigRequest;
                fromPartial(_: Partial<_23.QueryConfigRequest>): _23.QueryConfigRequest;
                fromAmino(_: _23.QueryConfigRequestAmino): _23.QueryConfigRequest;
                toAmino(_: _23.QueryConfigRequest): _23.QueryConfigRequestAmino;
                fromAminoMsg(object: _23.QueryConfigRequestAminoMsg): _23.QueryConfigRequest;
                toAminoMsg(message: _23.QueryConfigRequest): _23.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _23.QueryConfigRequestProtoMsg): _23.QueryConfigRequest;
                toProto(message: _23.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _23.QueryConfigRequest): _23.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _23.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryConfigResponse;
                fromPartial(object: Partial<_23.QueryConfigResponse>): _23.QueryConfigResponse;
                fromAmino(object: _23.QueryConfigResponseAmino): _23.QueryConfigResponse;
                toAmino(message: _23.QueryConfigResponse): _23.QueryConfigResponseAmino;
                fromAminoMsg(object: _23.QueryConfigResponseAminoMsg): _23.QueryConfigResponse;
                toAminoMsg(message: _23.QueryConfigResponse): _23.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _23.QueryConfigResponseProtoMsg): _23.QueryConfigResponse;
                toProto(message: _23.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _23.QueryConfigResponse): _23.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _22.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.ModuleDescriptor;
                fromPartial(object: Partial<_22.ModuleDescriptor>): _22.ModuleDescriptor;
                fromAmino(object: _22.ModuleDescriptorAmino): _22.ModuleDescriptor;
                toAmino(message: _22.ModuleDescriptor): _22.ModuleDescriptorAmino;
                fromAminoMsg(object: _22.ModuleDescriptorAminoMsg): _22.ModuleDescriptor;
                toAminoMsg(message: _22.ModuleDescriptor): _22.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _22.ModuleDescriptorProtoMsg): _22.ModuleDescriptor;
                toProto(message: _22.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _22.ModuleDescriptor): _22.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _22.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.PackageReference;
                fromPartial(object: Partial<_22.PackageReference>): _22.PackageReference;
                fromAmino(object: _22.PackageReferenceAmino): _22.PackageReference;
                toAmino(message: _22.PackageReference): _22.PackageReferenceAmino;
                fromAminoMsg(object: _22.PackageReferenceAminoMsg): _22.PackageReference;
                toAminoMsg(message: _22.PackageReference): _22.PackageReferenceAminoMsg;
                fromProtoMsg(message: _22.PackageReferenceProtoMsg): _22.PackageReference;
                toProto(message: _22.PackageReference): Uint8Array;
                toProtoMsg(message: _22.PackageReference): _22.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _22.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MigrateFromInfo;
                fromPartial(object: Partial<_22.MigrateFromInfo>): _22.MigrateFromInfo;
                fromAmino(object: _22.MigrateFromInfoAmino): _22.MigrateFromInfo;
                toAmino(message: _22.MigrateFromInfo): _22.MigrateFromInfoAmino;
                fromAminoMsg(object: _22.MigrateFromInfoAminoMsg): _22.MigrateFromInfo;
                toAminoMsg(message: _22.MigrateFromInfo): _22.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _22.MigrateFromInfoProtoMsg): _22.MigrateFromInfo;
                toProto(message: _22.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _22.MigrateFromInfo): _22.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _21.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.Config;
                fromPartial(object: Partial<_21.Config>): _21.Config;
                fromAmino(object: _21.ConfigAmino): _21.Config;
                toAmino(message: _21.Config): _21.ConfigAmino;
                fromAminoMsg(object: _21.ConfigAminoMsg): _21.Config;
                toAminoMsg(message: _21.Config): _21.ConfigAminoMsg;
                fromProtoMsg(message: _21.ConfigProtoMsg): _21.Config;
                toProto(message: _21.Config): Uint8Array;
                toProtoMsg(message: _21.Config): _21.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _21.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.ModuleConfig;
                fromPartial(object: Partial<_21.ModuleConfig>): _21.ModuleConfig;
                fromAmino(object: _21.ModuleConfigAmino): _21.ModuleConfig;
                toAmino(message: _21.ModuleConfig): _21.ModuleConfigAmino;
                fromAminoMsg(object: _21.ModuleConfigAminoMsg): _21.ModuleConfig;
                toAminoMsg(message: _21.ModuleConfig): _21.ModuleConfigAminoMsg;
                fromProtoMsg(message: _21.ModuleConfigProtoMsg): _21.ModuleConfig;
                toProto(message: _21.ModuleConfig): Uint8Array;
                toProtoMsg(message: _21.ModuleConfig): _21.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _207.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                accounts(request?: _26.QueryAccountsRequest): Promise<_26.QueryAccountsResponse>;
                account(request: _26.QueryAccountRequest): Promise<_26.QueryAccountResponse>;
                accountAddressByID(request: _26.QueryAccountAddressByIDRequest): Promise<_26.QueryAccountAddressByIDResponse>;
                params(request?: _26.QueryParamsRequest): Promise<_26.QueryParamsResponse>;
                moduleAccounts(request?: _26.QueryModuleAccountsRequest): Promise<_26.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _26.QueryModuleAccountByNameRequest): Promise<_26.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _26.Bech32PrefixRequest): Promise<_26.Bech32PrefixResponse>;
                addressBytesToString(request: _26.AddressBytesToStringRequest): Promise<_26.AddressBytesToStringResponse>;
                addressStringToBytes(request: _26.AddressStringToBytesRequest): Promise<_26.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _188.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _26.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryAccountsRequest;
                fromPartial(object: Partial<_26.QueryAccountsRequest>): _26.QueryAccountsRequest;
                fromAmino(object: _26.QueryAccountsRequestAmino): _26.QueryAccountsRequest;
                toAmino(message: _26.QueryAccountsRequest): _26.QueryAccountsRequestAmino;
                fromAminoMsg(object: _26.QueryAccountsRequestAminoMsg): _26.QueryAccountsRequest;
                toAminoMsg(message: _26.QueryAccountsRequest): _26.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _26.QueryAccountsRequestProtoMsg): _26.QueryAccountsRequest;
                toProto(message: _26.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _26.QueryAccountsRequest): _26.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _26.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryAccountsResponse;
                fromPartial(object: Partial<_26.QueryAccountsResponse>): _26.QueryAccountsResponse;
                fromAmino(object: _26.QueryAccountsResponseAmino): _26.QueryAccountsResponse;
                toAmino(message: _26.QueryAccountsResponse): _26.QueryAccountsResponseAmino;
                fromAminoMsg(object: _26.QueryAccountsResponseAminoMsg): _26.QueryAccountsResponse;
                toAminoMsg(message: _26.QueryAccountsResponse): _26.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _26.QueryAccountsResponseProtoMsg): _26.QueryAccountsResponse;
                toProto(message: _26.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _26.QueryAccountsResponse): _26.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _26.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryAccountRequest;
                fromPartial(object: Partial<_26.QueryAccountRequest>): _26.QueryAccountRequest;
                fromAmino(object: _26.QueryAccountRequestAmino): _26.QueryAccountRequest;
                toAmino(message: _26.QueryAccountRequest): _26.QueryAccountRequestAmino;
                fromAminoMsg(object: _26.QueryAccountRequestAminoMsg): _26.QueryAccountRequest;
                toAminoMsg(message: _26.QueryAccountRequest): _26.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _26.QueryAccountRequestProtoMsg): _26.QueryAccountRequest;
                toProto(message: _26.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _26.QueryAccountRequest): _26.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _26.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryAccountResponse;
                fromPartial(object: Partial<_26.QueryAccountResponse>): _26.QueryAccountResponse;
                fromAmino(object: _26.QueryAccountResponseAmino): _26.QueryAccountResponse;
                toAmino(message: _26.QueryAccountResponse): _26.QueryAccountResponseAmino;
                fromAminoMsg(object: _26.QueryAccountResponseAminoMsg): _26.QueryAccountResponse;
                toAminoMsg(message: _26.QueryAccountResponse): _26.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _26.QueryAccountResponseProtoMsg): _26.QueryAccountResponse;
                toProto(message: _26.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _26.QueryAccountResponse): _26.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _26.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _26.QueryParamsRequest;
                fromPartial(_: Partial<_26.QueryParamsRequest>): _26.QueryParamsRequest;
                fromAmino(_: _26.QueryParamsRequestAmino): _26.QueryParamsRequest;
                toAmino(_: _26.QueryParamsRequest): _26.QueryParamsRequestAmino;
                fromAminoMsg(object: _26.QueryParamsRequestAminoMsg): _26.QueryParamsRequest;
                toAminoMsg(message: _26.QueryParamsRequest): _26.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _26.QueryParamsRequestProtoMsg): _26.QueryParamsRequest;
                toProto(message: _26.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _26.QueryParamsRequest): _26.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _26.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryParamsResponse;
                fromPartial(object: Partial<_26.QueryParamsResponse>): _26.QueryParamsResponse;
                fromAmino(object: _26.QueryParamsResponseAmino): _26.QueryParamsResponse;
                toAmino(message: _26.QueryParamsResponse): _26.QueryParamsResponseAmino;
                fromAminoMsg(object: _26.QueryParamsResponseAminoMsg): _26.QueryParamsResponse;
                toAminoMsg(message: _26.QueryParamsResponse): _26.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _26.QueryParamsResponseProtoMsg): _26.QueryParamsResponse;
                toProto(message: _26.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _26.QueryParamsResponse): _26.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _26.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _26.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_26.QueryModuleAccountsRequest>): _26.QueryModuleAccountsRequest;
                fromAmino(_: _26.QueryModuleAccountsRequestAmino): _26.QueryModuleAccountsRequest;
                toAmino(_: _26.QueryModuleAccountsRequest): _26.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _26.QueryModuleAccountsRequestAminoMsg): _26.QueryModuleAccountsRequest;
                toAminoMsg(message: _26.QueryModuleAccountsRequest): _26.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _26.QueryModuleAccountsRequestProtoMsg): _26.QueryModuleAccountsRequest;
                toProto(message: _26.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _26.QueryModuleAccountsRequest): _26.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _26.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_26.QueryModuleAccountsResponse>): _26.QueryModuleAccountsResponse;
                fromAmino(object: _26.QueryModuleAccountsResponseAmino): _26.QueryModuleAccountsResponse;
                toAmino(message: _26.QueryModuleAccountsResponse): _26.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _26.QueryModuleAccountsResponseAminoMsg): _26.QueryModuleAccountsResponse;
                toAminoMsg(message: _26.QueryModuleAccountsResponse): _26.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _26.QueryModuleAccountsResponseProtoMsg): _26.QueryModuleAccountsResponse;
                toProto(message: _26.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _26.QueryModuleAccountsResponse): _26.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _26.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_26.QueryModuleAccountByNameRequest>): _26.QueryModuleAccountByNameRequest;
                fromAmino(object: _26.QueryModuleAccountByNameRequestAmino): _26.QueryModuleAccountByNameRequest;
                toAmino(message: _26.QueryModuleAccountByNameRequest): _26.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _26.QueryModuleAccountByNameRequestAminoMsg): _26.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _26.QueryModuleAccountByNameRequest): _26.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _26.QueryModuleAccountByNameRequestProtoMsg): _26.QueryModuleAccountByNameRequest;
                toProto(message: _26.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _26.QueryModuleAccountByNameRequest): _26.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _26.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_26.QueryModuleAccountByNameResponse>): _26.QueryModuleAccountByNameResponse;
                fromAmino(object: _26.QueryModuleAccountByNameResponseAmino): _26.QueryModuleAccountByNameResponse;
                toAmino(message: _26.QueryModuleAccountByNameResponse): _26.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _26.QueryModuleAccountByNameResponseAminoMsg): _26.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _26.QueryModuleAccountByNameResponse): _26.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _26.QueryModuleAccountByNameResponseProtoMsg): _26.QueryModuleAccountByNameResponse;
                toProto(message: _26.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _26.QueryModuleAccountByNameResponse): _26.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _26.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _26.Bech32PrefixRequest;
                fromPartial(_: Partial<_26.Bech32PrefixRequest>): _26.Bech32PrefixRequest;
                fromAmino(_: _26.Bech32PrefixRequestAmino): _26.Bech32PrefixRequest;
                toAmino(_: _26.Bech32PrefixRequest): _26.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _26.Bech32PrefixRequestAminoMsg): _26.Bech32PrefixRequest;
                toAminoMsg(message: _26.Bech32PrefixRequest): _26.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _26.Bech32PrefixRequestProtoMsg): _26.Bech32PrefixRequest;
                toProto(message: _26.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _26.Bech32PrefixRequest): _26.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _26.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Bech32PrefixResponse;
                fromPartial(object: Partial<_26.Bech32PrefixResponse>): _26.Bech32PrefixResponse;
                fromAmino(object: _26.Bech32PrefixResponseAmino): _26.Bech32PrefixResponse;
                toAmino(message: _26.Bech32PrefixResponse): _26.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _26.Bech32PrefixResponseAminoMsg): _26.Bech32PrefixResponse;
                toAminoMsg(message: _26.Bech32PrefixResponse): _26.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _26.Bech32PrefixResponseProtoMsg): _26.Bech32PrefixResponse;
                toProto(message: _26.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _26.Bech32PrefixResponse): _26.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _26.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.AddressBytesToStringRequest;
                fromPartial(object: Partial<_26.AddressBytesToStringRequest>): _26.AddressBytesToStringRequest;
                fromAmino(object: _26.AddressBytesToStringRequestAmino): _26.AddressBytesToStringRequest;
                toAmino(message: _26.AddressBytesToStringRequest): _26.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _26.AddressBytesToStringRequestAminoMsg): _26.AddressBytesToStringRequest;
                toAminoMsg(message: _26.AddressBytesToStringRequest): _26.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _26.AddressBytesToStringRequestProtoMsg): _26.AddressBytesToStringRequest;
                toProto(message: _26.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _26.AddressBytesToStringRequest): _26.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _26.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.AddressBytesToStringResponse;
                fromPartial(object: Partial<_26.AddressBytesToStringResponse>): _26.AddressBytesToStringResponse;
                fromAmino(object: _26.AddressBytesToStringResponseAmino): _26.AddressBytesToStringResponse;
                toAmino(message: _26.AddressBytesToStringResponse): _26.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _26.AddressBytesToStringResponseAminoMsg): _26.AddressBytesToStringResponse;
                toAminoMsg(message: _26.AddressBytesToStringResponse): _26.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _26.AddressBytesToStringResponseProtoMsg): _26.AddressBytesToStringResponse;
                toProto(message: _26.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _26.AddressBytesToStringResponse): _26.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _26.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.AddressStringToBytesRequest;
                fromPartial(object: Partial<_26.AddressStringToBytesRequest>): _26.AddressStringToBytesRequest;
                fromAmino(object: _26.AddressStringToBytesRequestAmino): _26.AddressStringToBytesRequest;
                toAmino(message: _26.AddressStringToBytesRequest): _26.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _26.AddressStringToBytesRequestAminoMsg): _26.AddressStringToBytesRequest;
                toAminoMsg(message: _26.AddressStringToBytesRequest): _26.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _26.AddressStringToBytesRequestProtoMsg): _26.AddressStringToBytesRequest;
                toProto(message: _26.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _26.AddressStringToBytesRequest): _26.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _26.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.AddressStringToBytesResponse;
                fromPartial(object: Partial<_26.AddressStringToBytesResponse>): _26.AddressStringToBytesResponse;
                fromAmino(object: _26.AddressStringToBytesResponseAmino): _26.AddressStringToBytesResponse;
                toAmino(message: _26.AddressStringToBytesResponse): _26.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _26.AddressStringToBytesResponseAminoMsg): _26.AddressStringToBytesResponse;
                toAminoMsg(message: _26.AddressStringToBytesResponse): _26.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _26.AddressStringToBytesResponseProtoMsg): _26.AddressStringToBytesResponse;
                toProto(message: _26.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _26.AddressStringToBytesResponse): _26.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _26.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_26.QueryAccountAddressByIDRequest>): _26.QueryAccountAddressByIDRequest;
                fromAmino(object: _26.QueryAccountAddressByIDRequestAmino): _26.QueryAccountAddressByIDRequest;
                toAmino(message: _26.QueryAccountAddressByIDRequest): _26.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _26.QueryAccountAddressByIDRequestAminoMsg): _26.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _26.QueryAccountAddressByIDRequest): _26.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _26.QueryAccountAddressByIDRequestProtoMsg): _26.QueryAccountAddressByIDRequest;
                toProto(message: _26.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _26.QueryAccountAddressByIDRequest): _26.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _26.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_26.QueryAccountAddressByIDResponse>): _26.QueryAccountAddressByIDResponse;
                fromAmino(object: _26.QueryAccountAddressByIDResponseAmino): _26.QueryAccountAddressByIDResponse;
                toAmino(message: _26.QueryAccountAddressByIDResponse): _26.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _26.QueryAccountAddressByIDResponseAminoMsg): _26.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _26.QueryAccountAddressByIDResponse): _26.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _26.QueryAccountAddressByIDResponseProtoMsg): _26.QueryAccountAddressByIDResponse;
                toProto(message: _26.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _26.QueryAccountAddressByIDResponse): _26.QueryAccountAddressByIDResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _24.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _24.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _25.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.GenesisState;
                fromPartial(object: Partial<_25.GenesisState>): _25.GenesisState;
                fromAmino(object: _25.GenesisStateAmino): _25.GenesisState;
                toAmino(message: _25.GenesisState): _25.GenesisStateAmino;
                fromAminoMsg(object: _25.GenesisStateAminoMsg): _25.GenesisState;
                toAminoMsg(message: _25.GenesisState): _25.GenesisStateAminoMsg;
                fromProtoMsg(message: _25.GenesisStateProtoMsg): _25.GenesisState;
                toProto(message: _25.GenesisState): Uint8Array;
                toProtoMsg(message: _25.GenesisState): _25.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _24.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.BaseAccount;
                fromPartial(object: Partial<_24.BaseAccount>): _24.BaseAccount;
                fromAmino(object: _24.BaseAccountAmino): _24.BaseAccount;
                toAmino(message: _24.BaseAccount): _24.BaseAccountAmino;
                fromAminoMsg(object: _24.BaseAccountAminoMsg): _24.BaseAccount;
                toAminoMsg(message: _24.BaseAccount): _24.BaseAccountAminoMsg;
                fromProtoMsg(message: _24.BaseAccountProtoMsg): _24.BaseAccount;
                toProto(message: _24.BaseAccount): Uint8Array;
                toProtoMsg(message: _24.BaseAccount): _24.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _24.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.ModuleAccount;
                fromPartial(object: Partial<_24.ModuleAccount>): _24.ModuleAccount;
                fromAmino(object: _24.ModuleAccountAmino): _24.ModuleAccount;
                toAmino(message: _24.ModuleAccount): _24.ModuleAccountAmino;
                fromAminoMsg(object: _24.ModuleAccountAminoMsg): _24.ModuleAccount;
                toAminoMsg(message: _24.ModuleAccount): _24.ModuleAccountAminoMsg;
                fromProtoMsg(message: _24.ModuleAccountProtoMsg): _24.ModuleAccount;
                toProto(message: _24.ModuleAccount): Uint8Array;
                toProtoMsg(message: _24.ModuleAccount): _24.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _24.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.Params;
                fromPartial(object: Partial<_24.Params>): _24.Params;
                fromAmino(object: _24.ParamsAmino): _24.Params;
                toAmino(message: _24.Params): _24.ParamsAmino;
                fromAminoMsg(object: _24.ParamsAminoMsg): _24.Params;
                toAminoMsg(message: _24.Params): _24.ParamsAminoMsg;
                fromProtoMsg(message: _24.ParamsProtoMsg): _24.Params;
                toProto(message: _24.Params): Uint8Array;
                toProtoMsg(message: _24.Params): _24.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _225.MsgClientImpl;
            QueryClientImpl: typeof _208.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                grants(request: _30.QueryGrantsRequest): Promise<_30.QueryGrantsResponse>;
                granterGrants(request: _30.QueryGranterGrantsRequest): Promise<_30.QueryGranterGrantsResponse>;
                granteeGrants(request: _30.QueryGranteeGrantsRequest): Promise<_30.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _189.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _31.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _31.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _31.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _31.MsgGrant): {
                        typeUrl: string;
                        value: _31.MsgGrant;
                    };
                    exec(value: _31.MsgExec): {
                        typeUrl: string;
                        value: _31.MsgExec;
                    };
                    revoke(value: _31.MsgRevoke): {
                        typeUrl: string;
                        value: _31.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _31.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _31.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _31.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _31.MsgGrant): {
                        typeUrl: string;
                        value: _31.MsgGrant;
                    };
                    exec(value: _31.MsgExec): {
                        typeUrl: string;
                        value: _31.MsgExec;
                    };
                    revoke(value: _31.MsgRevoke): {
                        typeUrl: string;
                        value: _31.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _31.MsgGrant) => _31.MsgGrantAmino;
                    fromAmino: (object: _31.MsgGrantAmino) => _31.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _31.MsgExec) => _31.MsgExecAmino;
                    fromAmino: (object: _31.MsgExecAmino) => _31.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _31.MsgRevoke) => _31.MsgRevokeAmino;
                    fromAmino: (object: _31.MsgRevokeAmino) => _31.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _31.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.MsgGrant;
                fromPartial(object: Partial<_31.MsgGrant>): _31.MsgGrant;
                fromAmino(object: _31.MsgGrantAmino): _31.MsgGrant;
                toAmino(message: _31.MsgGrant): _31.MsgGrantAmino;
                fromAminoMsg(object: _31.MsgGrantAminoMsg): _31.MsgGrant;
                toAminoMsg(message: _31.MsgGrant): _31.MsgGrantAminoMsg;
                fromProtoMsg(message: _31.MsgGrantProtoMsg): _31.MsgGrant;
                toProto(message: _31.MsgGrant): Uint8Array;
                toProtoMsg(message: _31.MsgGrant): _31.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _31.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.MsgExecResponse;
                fromPartial(object: Partial<_31.MsgExecResponse>): _31.MsgExecResponse;
                fromAmino(object: _31.MsgExecResponseAmino): _31.MsgExecResponse;
                toAmino(message: _31.MsgExecResponse): _31.MsgExecResponseAmino;
                fromAminoMsg(object: _31.MsgExecResponseAminoMsg): _31.MsgExecResponse;
                toAminoMsg(message: _31.MsgExecResponse): _31.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _31.MsgExecResponseProtoMsg): _31.MsgExecResponse;
                toProto(message: _31.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _31.MsgExecResponse): _31.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _31.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.MsgExec;
                fromPartial(object: Partial<_31.MsgExec>): _31.MsgExec;
                fromAmino(object: _31.MsgExecAmino): _31.MsgExec;
                toAmino(message: _31.MsgExec): _31.MsgExecAmino;
                fromAminoMsg(object: _31.MsgExecAminoMsg): _31.MsgExec;
                toAminoMsg(message: _31.MsgExec): _31.MsgExecAminoMsg;
                fromProtoMsg(message: _31.MsgExecProtoMsg): _31.MsgExec;
                toProto(message: _31.MsgExec): Uint8Array;
                toProtoMsg(message: _31.MsgExec): _31.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _31.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.MsgGrantResponse;
                fromPartial(_: Partial<_31.MsgGrantResponse>): _31.MsgGrantResponse;
                fromAmino(_: _31.MsgGrantResponseAmino): _31.MsgGrantResponse;
                toAmino(_: _31.MsgGrantResponse): _31.MsgGrantResponseAmino;
                fromAminoMsg(object: _31.MsgGrantResponseAminoMsg): _31.MsgGrantResponse;
                toAminoMsg(message: _31.MsgGrantResponse): _31.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _31.MsgGrantResponseProtoMsg): _31.MsgGrantResponse;
                toProto(message: _31.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _31.MsgGrantResponse): _31.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _31.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.MsgRevoke;
                fromPartial(object: Partial<_31.MsgRevoke>): _31.MsgRevoke;
                fromAmino(object: _31.MsgRevokeAmino): _31.MsgRevoke;
                toAmino(message: _31.MsgRevoke): _31.MsgRevokeAmino;
                fromAminoMsg(object: _31.MsgRevokeAminoMsg): _31.MsgRevoke;
                toAminoMsg(message: _31.MsgRevoke): _31.MsgRevokeAminoMsg;
                fromProtoMsg(message: _31.MsgRevokeProtoMsg): _31.MsgRevoke;
                toProto(message: _31.MsgRevoke): Uint8Array;
                toProtoMsg(message: _31.MsgRevoke): _31.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _31.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.MsgRevokeResponse;
                fromPartial(_: Partial<_31.MsgRevokeResponse>): _31.MsgRevokeResponse;
                fromAmino(_: _31.MsgRevokeResponseAmino): _31.MsgRevokeResponse;
                toAmino(_: _31.MsgRevokeResponse): _31.MsgRevokeResponseAmino;
                fromAminoMsg(object: _31.MsgRevokeResponseAminoMsg): _31.MsgRevokeResponse;
                toAminoMsg(message: _31.MsgRevokeResponse): _31.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _31.MsgRevokeResponseProtoMsg): _31.MsgRevokeResponse;
                toProto(message: _31.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _31.MsgRevokeResponse): _31.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _30.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryGrantsRequest;
                fromPartial(object: Partial<_30.QueryGrantsRequest>): _30.QueryGrantsRequest;
                fromAmino(object: _30.QueryGrantsRequestAmino): _30.QueryGrantsRequest;
                toAmino(message: _30.QueryGrantsRequest): _30.QueryGrantsRequestAmino;
                fromAminoMsg(object: _30.QueryGrantsRequestAminoMsg): _30.QueryGrantsRequest;
                toAminoMsg(message: _30.QueryGrantsRequest): _30.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _30.QueryGrantsRequestProtoMsg): _30.QueryGrantsRequest;
                toProto(message: _30.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _30.QueryGrantsRequest): _30.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _30.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryGrantsResponse;
                fromPartial(object: Partial<_30.QueryGrantsResponse>): _30.QueryGrantsResponse;
                fromAmino(object: _30.QueryGrantsResponseAmino): _30.QueryGrantsResponse;
                toAmino(message: _30.QueryGrantsResponse): _30.QueryGrantsResponseAmino;
                fromAminoMsg(object: _30.QueryGrantsResponseAminoMsg): _30.QueryGrantsResponse;
                toAminoMsg(message: _30.QueryGrantsResponse): _30.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _30.QueryGrantsResponseProtoMsg): _30.QueryGrantsResponse;
                toProto(message: _30.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _30.QueryGrantsResponse): _30.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _30.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_30.QueryGranterGrantsRequest>): _30.QueryGranterGrantsRequest;
                fromAmino(object: _30.QueryGranterGrantsRequestAmino): _30.QueryGranterGrantsRequest;
                toAmino(message: _30.QueryGranterGrantsRequest): _30.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _30.QueryGranterGrantsRequestAminoMsg): _30.QueryGranterGrantsRequest;
                toAminoMsg(message: _30.QueryGranterGrantsRequest): _30.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _30.QueryGranterGrantsRequestProtoMsg): _30.QueryGranterGrantsRequest;
                toProto(message: _30.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _30.QueryGranterGrantsRequest): _30.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _30.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_30.QueryGranterGrantsResponse>): _30.QueryGranterGrantsResponse;
                fromAmino(object: _30.QueryGranterGrantsResponseAmino): _30.QueryGranterGrantsResponse;
                toAmino(message: _30.QueryGranterGrantsResponse): _30.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _30.QueryGranterGrantsResponseAminoMsg): _30.QueryGranterGrantsResponse;
                toAminoMsg(message: _30.QueryGranterGrantsResponse): _30.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _30.QueryGranterGrantsResponseProtoMsg): _30.QueryGranterGrantsResponse;
                toProto(message: _30.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _30.QueryGranterGrantsResponse): _30.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _30.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_30.QueryGranteeGrantsRequest>): _30.QueryGranteeGrantsRequest;
                fromAmino(object: _30.QueryGranteeGrantsRequestAmino): _30.QueryGranteeGrantsRequest;
                toAmino(message: _30.QueryGranteeGrantsRequest): _30.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _30.QueryGranteeGrantsRequestAminoMsg): _30.QueryGranteeGrantsRequest;
                toAminoMsg(message: _30.QueryGranteeGrantsRequest): _30.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _30.QueryGranteeGrantsRequestProtoMsg): _30.QueryGranteeGrantsRequest;
                toProto(message: _30.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _30.QueryGranteeGrantsRequest): _30.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _30.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_30.QueryGranteeGrantsResponse>): _30.QueryGranteeGrantsResponse;
                fromAmino(object: _30.QueryGranteeGrantsResponseAmino): _30.QueryGranteeGrantsResponse;
                toAmino(message: _30.QueryGranteeGrantsResponse): _30.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _30.QueryGranteeGrantsResponseAminoMsg): _30.QueryGranteeGrantsResponse;
                toAminoMsg(message: _30.QueryGranteeGrantsResponse): _30.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _30.QueryGranteeGrantsResponseProtoMsg): _30.QueryGranteeGrantsResponse;
                toProto(message: _30.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _30.QueryGranteeGrantsResponse): _30.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _29.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.GenesisState;
                fromPartial(object: Partial<_29.GenesisState>): _29.GenesisState;
                fromAmino(object: _29.GenesisStateAmino): _29.GenesisState;
                toAmino(message: _29.GenesisState): _29.GenesisStateAmino;
                fromAminoMsg(object: _29.GenesisStateAminoMsg): _29.GenesisState;
                toAminoMsg(message: _29.GenesisState): _29.GenesisStateAminoMsg;
                fromProtoMsg(message: _29.GenesisStateProtoMsg): _29.GenesisState;
                toProto(message: _29.GenesisState): Uint8Array;
                toProtoMsg(message: _29.GenesisState): _29.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _28.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.EventGrant;
                fromPartial(object: Partial<_28.EventGrant>): _28.EventGrant;
                fromAmino(object: _28.EventGrantAmino): _28.EventGrant;
                toAmino(message: _28.EventGrant): _28.EventGrantAmino;
                fromAminoMsg(object: _28.EventGrantAminoMsg): _28.EventGrant;
                toAminoMsg(message: _28.EventGrant): _28.EventGrantAminoMsg;
                fromProtoMsg(message: _28.EventGrantProtoMsg): _28.EventGrant;
                toProto(message: _28.EventGrant): Uint8Array;
                toProtoMsg(message: _28.EventGrant): _28.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _28.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.EventRevoke;
                fromPartial(object: Partial<_28.EventRevoke>): _28.EventRevoke;
                fromAmino(object: _28.EventRevokeAmino): _28.EventRevoke;
                toAmino(message: _28.EventRevoke): _28.EventRevokeAmino;
                fromAminoMsg(object: _28.EventRevokeAminoMsg): _28.EventRevoke;
                toAminoMsg(message: _28.EventRevoke): _28.EventRevokeAminoMsg;
                fromProtoMsg(message: _28.EventRevokeProtoMsg): _28.EventRevoke;
                toProto(message: _28.EventRevoke): Uint8Array;
                toProtoMsg(message: _28.EventRevoke): _28.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _27.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.GenericAuthorization;
                fromPartial(object: Partial<_27.GenericAuthorization>): _27.GenericAuthorization;
                fromAmino(object: _27.GenericAuthorizationAmino): _27.GenericAuthorization;
                toAmino(message: _27.GenericAuthorization): _27.GenericAuthorizationAmino;
                fromAminoMsg(object: _27.GenericAuthorizationAminoMsg): _27.GenericAuthorization;
                toAminoMsg(message: _27.GenericAuthorization): _27.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _27.GenericAuthorizationProtoMsg): _27.GenericAuthorization;
                toProto(message: _27.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _27.GenericAuthorization): _27.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _27.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.Grant;
                fromPartial(object: Partial<_27.Grant>): _27.Grant;
                fromAmino(object: _27.GrantAmino): _27.Grant;
                toAmino(message: _27.Grant): _27.GrantAmino;
                fromAminoMsg(object: _27.GrantAminoMsg): _27.Grant;
                toAminoMsg(message: _27.Grant): _27.GrantAminoMsg;
                fromProtoMsg(message: _27.GrantProtoMsg): _27.Grant;
                toProto(message: _27.Grant): Uint8Array;
                toProtoMsg(message: _27.Grant): _27.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _27.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.GrantAuthorization;
                fromPartial(object: Partial<_27.GrantAuthorization>): _27.GrantAuthorization;
                fromAmino(object: _27.GrantAuthorizationAmino): _27.GrantAuthorization;
                toAmino(message: _27.GrantAuthorization): _27.GrantAuthorizationAmino;
                fromAminoMsg(object: _27.GrantAuthorizationAminoMsg): _27.GrantAuthorization;
                toAminoMsg(message: _27.GrantAuthorization): _27.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _27.GrantAuthorizationProtoMsg): _27.GrantAuthorization;
                toProto(message: _27.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _27.GrantAuthorization): _27.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _27.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.GrantQueueItem;
                fromPartial(object: Partial<_27.GrantQueueItem>): _27.GrantQueueItem;
                fromAmino(object: _27.GrantQueueItemAmino): _27.GrantQueueItem;
                toAmino(message: _27.GrantQueueItem): _27.GrantQueueItemAmino;
                fromAminoMsg(object: _27.GrantQueueItemAminoMsg): _27.GrantQueueItem;
                toAminoMsg(message: _27.GrantQueueItem): _27.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _27.GrantQueueItemProtoMsg): _27.GrantQueueItem;
                toProto(message: _27.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _27.GrantQueueItem): _27.GrantQueueItemProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _32.SendAuthorization | _103.StakeAuthorization | import("../cosmwasm/wasm/v1/authz").ContractExecutionAuthorization | import("../cosmwasm/wasm/v1/authz").ContractMigrationAuthorization | _27.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _226.MsgClientImpl;
            QueryClientImpl: typeof _209.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                balance(request: _35.QueryBalanceRequest): Promise<_35.QueryBalanceResponse>;
                allBalances(request: _35.QueryAllBalancesRequest): Promise<_35.QueryAllBalancesResponse>;
                spendableBalances(request: _35.QuerySpendableBalancesRequest): Promise<_35.QuerySpendableBalancesResponse>;
                totalSupply(request?: _35.QueryTotalSupplyRequest): Promise<_35.QueryTotalSupplyResponse>;
                supplyOf(request: _35.QuerySupplyOfRequest): Promise<_35.QuerySupplyOfResponse>;
                params(request?: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
                denomMetadata(request: _35.QueryDenomMetadataRequest): Promise<_35.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _35.QueryDenomsMetadataRequest): Promise<_35.QueryDenomsMetadataResponse>;
                denomOwners(request: _35.QueryDenomOwnersRequest): Promise<_35.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _190.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _36.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _36.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _36.MsgSend): {
                        typeUrl: string;
                        value: _36.MsgSend;
                    };
                    multiSend(value: _36.MsgMultiSend): {
                        typeUrl: string;
                        value: _36.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _36.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _36.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _36.MsgSend): {
                        typeUrl: string;
                        value: _36.MsgSend;
                    };
                    multiSend(value: _36.MsgMultiSend): {
                        typeUrl: string;
                        value: _36.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _36.MsgSend) => _36.MsgSendAmino;
                    fromAmino: (object: _36.MsgSendAmino) => _36.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _36.MsgMultiSend) => _36.MsgMultiSendAmino;
                    fromAmino: (object: _36.MsgMultiSendAmino) => _36.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _36.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.MsgSend;
                fromPartial(object: Partial<_36.MsgSend>): _36.MsgSend;
                fromAmino(object: _36.MsgSendAmino): _36.MsgSend;
                toAmino(message: _36.MsgSend): _36.MsgSendAmino;
                fromAminoMsg(object: _36.MsgSendAminoMsg): _36.MsgSend;
                toAminoMsg(message: _36.MsgSend): _36.MsgSendAminoMsg;
                fromProtoMsg(message: _36.MsgSendProtoMsg): _36.MsgSend;
                toProto(message: _36.MsgSend): Uint8Array;
                toProtoMsg(message: _36.MsgSend): _36.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _36.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _36.MsgSendResponse;
                fromPartial(_: Partial<_36.MsgSendResponse>): _36.MsgSendResponse;
                fromAmino(_: _36.MsgSendResponseAmino): _36.MsgSendResponse;
                toAmino(_: _36.MsgSendResponse): _36.MsgSendResponseAmino;
                fromAminoMsg(object: _36.MsgSendResponseAminoMsg): _36.MsgSendResponse;
                toAminoMsg(message: _36.MsgSendResponse): _36.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _36.MsgSendResponseProtoMsg): _36.MsgSendResponse;
                toProto(message: _36.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _36.MsgSendResponse): _36.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _36.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.MsgMultiSend;
                fromPartial(object: Partial<_36.MsgMultiSend>): _36.MsgMultiSend;
                fromAmino(object: _36.MsgMultiSendAmino): _36.MsgMultiSend;
                toAmino(message: _36.MsgMultiSend): _36.MsgMultiSendAmino;
                fromAminoMsg(object: _36.MsgMultiSendAminoMsg): _36.MsgMultiSend;
                toAminoMsg(message: _36.MsgMultiSend): _36.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _36.MsgMultiSendProtoMsg): _36.MsgMultiSend;
                toProto(message: _36.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _36.MsgMultiSend): _36.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _36.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _36.MsgMultiSendResponse;
                fromPartial(_: Partial<_36.MsgMultiSendResponse>): _36.MsgMultiSendResponse;
                fromAmino(_: _36.MsgMultiSendResponseAmino): _36.MsgMultiSendResponse;
                toAmino(_: _36.MsgMultiSendResponse): _36.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _36.MsgMultiSendResponseAminoMsg): _36.MsgMultiSendResponse;
                toAminoMsg(message: _36.MsgMultiSendResponse): _36.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _36.MsgMultiSendResponseProtoMsg): _36.MsgMultiSendResponse;
                toProto(message: _36.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _36.MsgMultiSendResponse): _36.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _35.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryBalanceRequest;
                fromPartial(object: Partial<_35.QueryBalanceRequest>): _35.QueryBalanceRequest;
                fromAmino(object: _35.QueryBalanceRequestAmino): _35.QueryBalanceRequest;
                toAmino(message: _35.QueryBalanceRequest): _35.QueryBalanceRequestAmino;
                fromAminoMsg(object: _35.QueryBalanceRequestAminoMsg): _35.QueryBalanceRequest;
                toAminoMsg(message: _35.QueryBalanceRequest): _35.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _35.QueryBalanceRequestProtoMsg): _35.QueryBalanceRequest;
                toProto(message: _35.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _35.QueryBalanceRequest): _35.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _35.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryBalanceResponse;
                fromPartial(object: Partial<_35.QueryBalanceResponse>): _35.QueryBalanceResponse;
                fromAmino(object: _35.QueryBalanceResponseAmino): _35.QueryBalanceResponse;
                toAmino(message: _35.QueryBalanceResponse): _35.QueryBalanceResponseAmino;
                fromAminoMsg(object: _35.QueryBalanceResponseAminoMsg): _35.QueryBalanceResponse;
                toAminoMsg(message: _35.QueryBalanceResponse): _35.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _35.QueryBalanceResponseProtoMsg): _35.QueryBalanceResponse;
                toProto(message: _35.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _35.QueryBalanceResponse): _35.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _35.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryAllBalancesRequest;
                fromPartial(object: Partial<_35.QueryAllBalancesRequest>): _35.QueryAllBalancesRequest;
                fromAmino(object: _35.QueryAllBalancesRequestAmino): _35.QueryAllBalancesRequest;
                toAmino(message: _35.QueryAllBalancesRequest): _35.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _35.QueryAllBalancesRequestAminoMsg): _35.QueryAllBalancesRequest;
                toAminoMsg(message: _35.QueryAllBalancesRequest): _35.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _35.QueryAllBalancesRequestProtoMsg): _35.QueryAllBalancesRequest;
                toProto(message: _35.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _35.QueryAllBalancesRequest): _35.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _35.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryAllBalancesResponse;
                fromPartial(object: Partial<_35.QueryAllBalancesResponse>): _35.QueryAllBalancesResponse;
                fromAmino(object: _35.QueryAllBalancesResponseAmino): _35.QueryAllBalancesResponse;
                toAmino(message: _35.QueryAllBalancesResponse): _35.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _35.QueryAllBalancesResponseAminoMsg): _35.QueryAllBalancesResponse;
                toAminoMsg(message: _35.QueryAllBalancesResponse): _35.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _35.QueryAllBalancesResponseProtoMsg): _35.QueryAllBalancesResponse;
                toProto(message: _35.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _35.QueryAllBalancesResponse): _35.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _35.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_35.QuerySpendableBalancesRequest>): _35.QuerySpendableBalancesRequest;
                fromAmino(object: _35.QuerySpendableBalancesRequestAmino): _35.QuerySpendableBalancesRequest;
                toAmino(message: _35.QuerySpendableBalancesRequest): _35.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _35.QuerySpendableBalancesRequestAminoMsg): _35.QuerySpendableBalancesRequest;
                toAminoMsg(message: _35.QuerySpendableBalancesRequest): _35.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _35.QuerySpendableBalancesRequestProtoMsg): _35.QuerySpendableBalancesRequest;
                toProto(message: _35.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _35.QuerySpendableBalancesRequest): _35.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _35.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_35.QuerySpendableBalancesResponse>): _35.QuerySpendableBalancesResponse;
                fromAmino(object: _35.QuerySpendableBalancesResponseAmino): _35.QuerySpendableBalancesResponse;
                toAmino(message: _35.QuerySpendableBalancesResponse): _35.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _35.QuerySpendableBalancesResponseAminoMsg): _35.QuerySpendableBalancesResponse;
                toAminoMsg(message: _35.QuerySpendableBalancesResponse): _35.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _35.QuerySpendableBalancesResponseProtoMsg): _35.QuerySpendableBalancesResponse;
                toProto(message: _35.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _35.QuerySpendableBalancesResponse): _35.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _35.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_35.QueryTotalSupplyRequest>): _35.QueryTotalSupplyRequest;
                fromAmino(object: _35.QueryTotalSupplyRequestAmino): _35.QueryTotalSupplyRequest;
                toAmino(message: _35.QueryTotalSupplyRequest): _35.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _35.QueryTotalSupplyRequestAminoMsg): _35.QueryTotalSupplyRequest;
                toAminoMsg(message: _35.QueryTotalSupplyRequest): _35.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _35.QueryTotalSupplyRequestProtoMsg): _35.QueryTotalSupplyRequest;
                toProto(message: _35.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _35.QueryTotalSupplyRequest): _35.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _35.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_35.QueryTotalSupplyResponse>): _35.QueryTotalSupplyResponse;
                fromAmino(object: _35.QueryTotalSupplyResponseAmino): _35.QueryTotalSupplyResponse;
                toAmino(message: _35.QueryTotalSupplyResponse): _35.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _35.QueryTotalSupplyResponseAminoMsg): _35.QueryTotalSupplyResponse;
                toAminoMsg(message: _35.QueryTotalSupplyResponse): _35.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _35.QueryTotalSupplyResponseProtoMsg): _35.QueryTotalSupplyResponse;
                toProto(message: _35.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _35.QueryTotalSupplyResponse): _35.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _35.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QuerySupplyOfRequest;
                fromPartial(object: Partial<_35.QuerySupplyOfRequest>): _35.QuerySupplyOfRequest;
                fromAmino(object: _35.QuerySupplyOfRequestAmino): _35.QuerySupplyOfRequest;
                toAmino(message: _35.QuerySupplyOfRequest): _35.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _35.QuerySupplyOfRequestAminoMsg): _35.QuerySupplyOfRequest;
                toAminoMsg(message: _35.QuerySupplyOfRequest): _35.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _35.QuerySupplyOfRequestProtoMsg): _35.QuerySupplyOfRequest;
                toProto(message: _35.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _35.QuerySupplyOfRequest): _35.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _35.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QuerySupplyOfResponse;
                fromPartial(object: Partial<_35.QuerySupplyOfResponse>): _35.QuerySupplyOfResponse;
                fromAmino(object: _35.QuerySupplyOfResponseAmino): _35.QuerySupplyOfResponse;
                toAmino(message: _35.QuerySupplyOfResponse): _35.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _35.QuerySupplyOfResponseAminoMsg): _35.QuerySupplyOfResponse;
                toAminoMsg(message: _35.QuerySupplyOfResponse): _35.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _35.QuerySupplyOfResponseProtoMsg): _35.QuerySupplyOfResponse;
                toProto(message: _35.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _35.QuerySupplyOfResponse): _35.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _35.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.QueryParamsRequest;
                fromPartial(_: Partial<_35.QueryParamsRequest>): _35.QueryParamsRequest;
                fromAmino(_: _35.QueryParamsRequestAmino): _35.QueryParamsRequest;
                toAmino(_: _35.QueryParamsRequest): _35.QueryParamsRequestAmino;
                fromAminoMsg(object: _35.QueryParamsRequestAminoMsg): _35.QueryParamsRequest;
                toAminoMsg(message: _35.QueryParamsRequest): _35.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryParamsRequestProtoMsg): _35.QueryParamsRequest;
                toProto(message: _35.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryParamsRequest): _35.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _35.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryParamsResponse;
                fromPartial(object: Partial<_35.QueryParamsResponse>): _35.QueryParamsResponse;
                fromAmino(object: _35.QueryParamsResponseAmino): _35.QueryParamsResponse;
                toAmino(message: _35.QueryParamsResponse): _35.QueryParamsResponseAmino;
                fromAminoMsg(object: _35.QueryParamsResponseAminoMsg): _35.QueryParamsResponse;
                toAminoMsg(message: _35.QueryParamsResponse): _35.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryParamsResponseProtoMsg): _35.QueryParamsResponse;
                toProto(message: _35.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryParamsResponse): _35.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _35.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_35.QueryDenomsMetadataRequest>): _35.QueryDenomsMetadataRequest;
                fromAmino(object: _35.QueryDenomsMetadataRequestAmino): _35.QueryDenomsMetadataRequest;
                toAmino(message: _35.QueryDenomsMetadataRequest): _35.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _35.QueryDenomsMetadataRequestAminoMsg): _35.QueryDenomsMetadataRequest;
                toAminoMsg(message: _35.QueryDenomsMetadataRequest): _35.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _35.QueryDenomsMetadataRequestProtoMsg): _35.QueryDenomsMetadataRequest;
                toProto(message: _35.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _35.QueryDenomsMetadataRequest): _35.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _35.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_35.QueryDenomsMetadataResponse>): _35.QueryDenomsMetadataResponse;
                fromAmino(object: _35.QueryDenomsMetadataResponseAmino): _35.QueryDenomsMetadataResponse;
                toAmino(message: _35.QueryDenomsMetadataResponse): _35.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _35.QueryDenomsMetadataResponseAminoMsg): _35.QueryDenomsMetadataResponse;
                toAminoMsg(message: _35.QueryDenomsMetadataResponse): _35.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _35.QueryDenomsMetadataResponseProtoMsg): _35.QueryDenomsMetadataResponse;
                toProto(message: _35.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _35.QueryDenomsMetadataResponse): _35.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _35.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_35.QueryDenomMetadataRequest>): _35.QueryDenomMetadataRequest;
                fromAmino(object: _35.QueryDenomMetadataRequestAmino): _35.QueryDenomMetadataRequest;
                toAmino(message: _35.QueryDenomMetadataRequest): _35.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _35.QueryDenomMetadataRequestAminoMsg): _35.QueryDenomMetadataRequest;
                toAminoMsg(message: _35.QueryDenomMetadataRequest): _35.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _35.QueryDenomMetadataRequestProtoMsg): _35.QueryDenomMetadataRequest;
                toProto(message: _35.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _35.QueryDenomMetadataRequest): _35.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _35.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_35.QueryDenomMetadataResponse>): _35.QueryDenomMetadataResponse;
                fromAmino(object: _35.QueryDenomMetadataResponseAmino): _35.QueryDenomMetadataResponse;
                toAmino(message: _35.QueryDenomMetadataResponse): _35.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _35.QueryDenomMetadataResponseAminoMsg): _35.QueryDenomMetadataResponse;
                toAminoMsg(message: _35.QueryDenomMetadataResponse): _35.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _35.QueryDenomMetadataResponseProtoMsg): _35.QueryDenomMetadataResponse;
                toProto(message: _35.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _35.QueryDenomMetadataResponse): _35.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _35.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_35.QueryDenomOwnersRequest>): _35.QueryDenomOwnersRequest;
                fromAmino(object: _35.QueryDenomOwnersRequestAmino): _35.QueryDenomOwnersRequest;
                toAmino(message: _35.QueryDenomOwnersRequest): _35.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _35.QueryDenomOwnersRequestAminoMsg): _35.QueryDenomOwnersRequest;
                toAminoMsg(message: _35.QueryDenomOwnersRequest): _35.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _35.QueryDenomOwnersRequestProtoMsg): _35.QueryDenomOwnersRequest;
                toProto(message: _35.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _35.QueryDenomOwnersRequest): _35.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _35.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.DenomOwner;
                fromPartial(object: Partial<_35.DenomOwner>): _35.DenomOwner;
                fromAmino(object: _35.DenomOwnerAmino): _35.DenomOwner;
                toAmino(message: _35.DenomOwner): _35.DenomOwnerAmino;
                fromAminoMsg(object: _35.DenomOwnerAminoMsg): _35.DenomOwner;
                toAminoMsg(message: _35.DenomOwner): _35.DenomOwnerAminoMsg;
                fromProtoMsg(message: _35.DenomOwnerProtoMsg): _35.DenomOwner;
                toProto(message: _35.DenomOwner): Uint8Array;
                toProtoMsg(message: _35.DenomOwner): _35.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _35.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_35.QueryDenomOwnersResponse>): _35.QueryDenomOwnersResponse;
                fromAmino(object: _35.QueryDenomOwnersResponseAmino): _35.QueryDenomOwnersResponse;
                toAmino(message: _35.QueryDenomOwnersResponse): _35.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _35.QueryDenomOwnersResponseAminoMsg): _35.QueryDenomOwnersResponse;
                toAminoMsg(message: _35.QueryDenomOwnersResponse): _35.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _35.QueryDenomOwnersResponseProtoMsg): _35.QueryDenomOwnersResponse;
                toProto(message: _35.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _35.QueryDenomOwnersResponse): _35.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _34.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.GenesisState;
                fromPartial(object: Partial<_34.GenesisState>): _34.GenesisState;
                fromAmino(object: _34.GenesisStateAmino): _34.GenesisState;
                toAmino(message: _34.GenesisState): _34.GenesisStateAmino;
                fromAminoMsg(object: _34.GenesisStateAminoMsg): _34.GenesisState;
                toAminoMsg(message: _34.GenesisState): _34.GenesisStateAminoMsg;
                fromProtoMsg(message: _34.GenesisStateProtoMsg): _34.GenesisState;
                toProto(message: _34.GenesisState): Uint8Array;
                toProtoMsg(message: _34.GenesisState): _34.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _34.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.Balance;
                fromPartial(object: Partial<_34.Balance>): _34.Balance;
                fromAmino(object: _34.BalanceAmino): _34.Balance;
                toAmino(message: _34.Balance): _34.BalanceAmino;
                fromAminoMsg(object: _34.BalanceAminoMsg): _34.Balance;
                toAminoMsg(message: _34.Balance): _34.BalanceAminoMsg;
                fromProtoMsg(message: _34.BalanceProtoMsg): _34.Balance;
                toProto(message: _34.Balance): Uint8Array;
                toProtoMsg(message: _34.Balance): _34.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _33.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Params;
                fromPartial(object: Partial<_33.Params>): _33.Params;
                fromAmino(object: _33.ParamsAmino): _33.Params;
                toAmino(message: _33.Params): _33.ParamsAmino;
                fromAminoMsg(object: _33.ParamsAminoMsg): _33.Params;
                toAminoMsg(message: _33.Params): _33.ParamsAminoMsg;
                fromProtoMsg(message: _33.ParamsProtoMsg): _33.Params;
                toProto(message: _33.Params): Uint8Array;
                toProtoMsg(message: _33.Params): _33.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _33.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.SendEnabled;
                fromPartial(object: Partial<_33.SendEnabled>): _33.SendEnabled;
                fromAmino(object: _33.SendEnabledAmino): _33.SendEnabled;
                toAmino(message: _33.SendEnabled): _33.SendEnabledAmino;
                fromAminoMsg(object: _33.SendEnabledAminoMsg): _33.SendEnabled;
                toAminoMsg(message: _33.SendEnabled): _33.SendEnabledAminoMsg;
                fromProtoMsg(message: _33.SendEnabledProtoMsg): _33.SendEnabled;
                toProto(message: _33.SendEnabled): Uint8Array;
                toProtoMsg(message: _33.SendEnabled): _33.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _33.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Input;
                fromPartial(object: Partial<_33.Input>): _33.Input;
                fromAmino(object: _33.InputAmino): _33.Input;
                toAmino(message: _33.Input): _33.InputAmino;
                fromAminoMsg(object: _33.InputAminoMsg): _33.Input;
                toAminoMsg(message: _33.Input): _33.InputAminoMsg;
                fromProtoMsg(message: _33.InputProtoMsg): _33.Input;
                toProto(message: _33.Input): Uint8Array;
                toProtoMsg(message: _33.Input): _33.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _33.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Output;
                fromPartial(object: Partial<_33.Output>): _33.Output;
                fromAmino(object: _33.OutputAmino): _33.Output;
                toAmino(message: _33.Output): _33.OutputAmino;
                fromAminoMsg(object: _33.OutputAminoMsg): _33.Output;
                toAminoMsg(message: _33.Output): _33.OutputAminoMsg;
                fromProtoMsg(message: _33.OutputProtoMsg): _33.Output;
                toProto(message: _33.Output): Uint8Array;
                toProtoMsg(message: _33.Output): _33.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _33.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Supply;
                fromPartial(object: Partial<_33.Supply>): _33.Supply;
                fromAmino(object: _33.SupplyAmino): _33.Supply;
                toAmino(message: _33.Supply): _33.SupplyAmino;
                fromAminoMsg(object: _33.SupplyAminoMsg): _33.Supply;
                toAminoMsg(message: _33.Supply): _33.SupplyAminoMsg;
                fromProtoMsg(message: _33.SupplyProtoMsg): _33.Supply;
                toProto(message: _33.Supply): Uint8Array;
                toProtoMsg(message: _33.Supply): _33.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _33.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.DenomUnit;
                fromPartial(object: Partial<_33.DenomUnit>): _33.DenomUnit;
                fromAmino(object: _33.DenomUnitAmino): _33.DenomUnit;
                toAmino(message: _33.DenomUnit): _33.DenomUnitAmino;
                fromAminoMsg(object: _33.DenomUnitAminoMsg): _33.DenomUnit;
                toAminoMsg(message: _33.DenomUnit): _33.DenomUnitAminoMsg;
                fromProtoMsg(message: _33.DenomUnitProtoMsg): _33.DenomUnit;
                toProto(message: _33.DenomUnit): Uint8Array;
                toProtoMsg(message: _33.DenomUnit): _33.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _33.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Metadata;
                fromPartial(object: Partial<_33.Metadata>): _33.Metadata;
                fromAmino(object: _33.MetadataAmino): _33.Metadata;
                toAmino(message: _33.Metadata): _33.MetadataAmino;
                fromAminoMsg(object: _33.MetadataAminoMsg): _33.Metadata;
                toAminoMsg(message: _33.Metadata): _33.MetadataAminoMsg;
                fromProtoMsg(message: _33.MetadataProtoMsg): _33.Metadata;
                toProto(message: _33.Metadata): Uint8Array;
                toProtoMsg(message: _33.Metadata): _33.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _32.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.SendAuthorization;
                fromPartial(object: Partial<_32.SendAuthorization>): _32.SendAuthorization;
                fromAmino(object: _32.SendAuthorizationAmino): _32.SendAuthorization;
                toAmino(message: _32.SendAuthorization): _32.SendAuthorizationAmino;
                fromAminoMsg(object: _32.SendAuthorizationAminoMsg): _32.SendAuthorization;
                toAminoMsg(message: _32.SendAuthorization): _32.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _32.SendAuthorizationProtoMsg): _32.SendAuthorization;
                toProto(message: _32.SendAuthorization): Uint8Array;
                toProtoMsg(message: _32.SendAuthorization): _32.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _37.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.TxResponse;
                    fromPartial(object: Partial<_37.TxResponse>): _37.TxResponse;
                    fromAmino(object: _37.TxResponseAmino): _37.TxResponse;
                    toAmino(message: _37.TxResponse): _37.TxResponseAmino;
                    fromAminoMsg(object: _37.TxResponseAminoMsg): _37.TxResponse;
                    toAminoMsg(message: _37.TxResponse): _37.TxResponseAminoMsg;
                    fromProtoMsg(message: _37.TxResponseProtoMsg): _37.TxResponse;
                    toProto(message: _37.TxResponse): Uint8Array;
                    toProtoMsg(message: _37.TxResponse): _37.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _37.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.ABCIMessageLog;
                    fromPartial(object: Partial<_37.ABCIMessageLog>): _37.ABCIMessageLog;
                    fromAmino(object: _37.ABCIMessageLogAmino): _37.ABCIMessageLog;
                    toAmino(message: _37.ABCIMessageLog): _37.ABCIMessageLogAmino;
                    fromAminoMsg(object: _37.ABCIMessageLogAminoMsg): _37.ABCIMessageLog;
                    toAminoMsg(message: _37.ABCIMessageLog): _37.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _37.ABCIMessageLogProtoMsg): _37.ABCIMessageLog;
                    toProto(message: _37.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _37.ABCIMessageLog): _37.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _37.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.StringEvent;
                    fromPartial(object: Partial<_37.StringEvent>): _37.StringEvent;
                    fromAmino(object: _37.StringEventAmino): _37.StringEvent;
                    toAmino(message: _37.StringEvent): _37.StringEventAmino;
                    fromAminoMsg(object: _37.StringEventAminoMsg): _37.StringEvent;
                    toAminoMsg(message: _37.StringEvent): _37.StringEventAminoMsg;
                    fromProtoMsg(message: _37.StringEventProtoMsg): _37.StringEvent;
                    toProto(message: _37.StringEvent): Uint8Array;
                    toProtoMsg(message: _37.StringEvent): _37.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _37.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.Attribute;
                    fromPartial(object: Partial<_37.Attribute>): _37.Attribute;
                    fromAmino(object: _37.AttributeAmino): _37.Attribute;
                    toAmino(message: _37.Attribute): _37.AttributeAmino;
                    fromAminoMsg(object: _37.AttributeAminoMsg): _37.Attribute;
                    toAminoMsg(message: _37.Attribute): _37.AttributeAminoMsg;
                    fromProtoMsg(message: _37.AttributeProtoMsg): _37.Attribute;
                    toProto(message: _37.Attribute): Uint8Array;
                    toProtoMsg(message: _37.Attribute): _37.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _37.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GasInfo;
                    fromPartial(object: Partial<_37.GasInfo>): _37.GasInfo;
                    fromAmino(object: _37.GasInfoAmino): _37.GasInfo;
                    toAmino(message: _37.GasInfo): _37.GasInfoAmino;
                    fromAminoMsg(object: _37.GasInfoAminoMsg): _37.GasInfo;
                    toAminoMsg(message: _37.GasInfo): _37.GasInfoAminoMsg;
                    fromProtoMsg(message: _37.GasInfoProtoMsg): _37.GasInfo;
                    toProto(message: _37.GasInfo): Uint8Array;
                    toProtoMsg(message: _37.GasInfo): _37.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _37.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.Result;
                    fromPartial(object: Partial<_37.Result>): _37.Result;
                    fromAmino(object: _37.ResultAmino): _37.Result;
                    toAmino(message: _37.Result): _37.ResultAmino;
                    fromAminoMsg(object: _37.ResultAminoMsg): _37.Result;
                    toAminoMsg(message: _37.Result): _37.ResultAminoMsg;
                    fromProtoMsg(message: _37.ResultProtoMsg): _37.Result;
                    toProto(message: _37.Result): Uint8Array;
                    toProtoMsg(message: _37.Result): _37.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _37.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.SimulationResponse;
                    fromPartial(object: Partial<_37.SimulationResponse>): _37.SimulationResponse;
                    fromAmino(object: _37.SimulationResponseAmino): _37.SimulationResponse;
                    toAmino(message: _37.SimulationResponse): _37.SimulationResponseAmino;
                    fromAminoMsg(object: _37.SimulationResponseAminoMsg): _37.SimulationResponse;
                    toAminoMsg(message: _37.SimulationResponse): _37.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _37.SimulationResponseProtoMsg): _37.SimulationResponse;
                    toProto(message: _37.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _37.SimulationResponse): _37.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _37.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.MsgData;
                    fromPartial(object: Partial<_37.MsgData>): _37.MsgData;
                    fromAmino(object: _37.MsgDataAmino): _37.MsgData;
                    toAmino(message: _37.MsgData): _37.MsgDataAmino;
                    fromAminoMsg(object: _37.MsgDataAminoMsg): _37.MsgData;
                    toAminoMsg(message: _37.MsgData): _37.MsgDataAminoMsg;
                    fromProtoMsg(message: _37.MsgDataProtoMsg): _37.MsgData;
                    toProto(message: _37.MsgData): Uint8Array;
                    toProtoMsg(message: _37.MsgData): _37.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _37.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.TxMsgData;
                    fromPartial(object: Partial<_37.TxMsgData>): _37.TxMsgData;
                    fromAmino(object: _37.TxMsgDataAmino): _37.TxMsgData;
                    toAmino(message: _37.TxMsgData): _37.TxMsgDataAmino;
                    fromAminoMsg(object: _37.TxMsgDataAminoMsg): _37.TxMsgData;
                    toAminoMsg(message: _37.TxMsgData): _37.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _37.TxMsgDataProtoMsg): _37.TxMsgData;
                    toProto(message: _37.TxMsgData): Uint8Array;
                    toProtoMsg(message: _37.TxMsgData): _37.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _37.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.SearchTxsResult;
                    fromPartial(object: Partial<_37.SearchTxsResult>): _37.SearchTxsResult;
                    fromAmino(object: _37.SearchTxsResultAmino): _37.SearchTxsResult;
                    toAmino(message: _37.SearchTxsResult): _37.SearchTxsResultAmino;
                    fromAminoMsg(object: _37.SearchTxsResultAminoMsg): _37.SearchTxsResult;
                    toAminoMsg(message: _37.SearchTxsResult): _37.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _37.SearchTxsResultProtoMsg): _37.SearchTxsResult;
                    toProto(message: _37.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _37.SearchTxsResult): _37.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _38.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.Pairs;
                    fromPartial(object: Partial<_38.Pairs>): _38.Pairs;
                    fromAmino(object: _38.PairsAmino): _38.Pairs;
                    toAmino(message: _38.Pairs): _38.PairsAmino;
                    fromAminoMsg(object: _38.PairsAminoMsg): _38.Pairs;
                    toAminoMsg(message: _38.Pairs): _38.PairsAminoMsg;
                    fromProtoMsg(message: _38.PairsProtoMsg): _38.Pairs;
                    toProto(message: _38.Pairs): Uint8Array;
                    toProtoMsg(message: _38.Pairs): _38.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _38.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.Pair;
                    fromPartial(object: Partial<_38.Pair>): _38.Pair;
                    fromAmino(object: _38.PairAmino): _38.Pair;
                    toAmino(message: _38.Pair): _38.PairAmino;
                    fromAminoMsg(object: _38.PairAminoMsg): _38.Pair;
                    toAminoMsg(message: _38.Pair): _38.PairAminoMsg;
                    fromProtoMsg(message: _38.PairProtoMsg): _38.Pair;
                    toProto(message: _38.Pair): Uint8Array;
                    toProtoMsg(message: _38.Pair): _38.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _210.ServiceClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    config(request?: _39.ConfigRequest): Promise<_39.ConfigResponse>;
                };
                LCDQueryClient: typeof _191.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _39.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _39.ConfigRequest;
                    fromPartial(_: Partial<_39.ConfigRequest>): _39.ConfigRequest;
                    fromAmino(_: _39.ConfigRequestAmino): _39.ConfigRequest;
                    toAmino(_: _39.ConfigRequest): _39.ConfigRequestAmino;
                    fromAminoMsg(object: _39.ConfigRequestAminoMsg): _39.ConfigRequest;
                    toAminoMsg(message: _39.ConfigRequest): _39.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _39.ConfigRequestProtoMsg): _39.ConfigRequest;
                    toProto(message: _39.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _39.ConfigRequest): _39.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _39.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.ConfigResponse;
                    fromPartial(object: Partial<_39.ConfigResponse>): _39.ConfigResponse;
                    fromAmino(object: _39.ConfigResponseAmino): _39.ConfigResponse;
                    toAmino(message: _39.ConfigResponse): _39.ConfigResponseAmino;
                    fromAminoMsg(object: _39.ConfigResponseAminoMsg): _39.ConfigResponse;
                    toAminoMsg(message: _39.ConfigResponse): _39.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _39.ConfigResponseProtoMsg): _39.ConfigResponse;
                    toProto(message: _39.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _39.ConfigResponse): _39.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _40.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.PageRequest;
                    fromPartial(object: Partial<_40.PageRequest>): _40.PageRequest;
                    fromAmino(object: _40.PageRequestAmino): _40.PageRequest;
                    toAmino(message: _40.PageRequest): _40.PageRequestAmino;
                    fromAminoMsg(object: _40.PageRequestAminoMsg): _40.PageRequest;
                    toAminoMsg(message: _40.PageRequest): _40.PageRequestAminoMsg;
                    fromProtoMsg(message: _40.PageRequestProtoMsg): _40.PageRequest;
                    toProto(message: _40.PageRequest): Uint8Array;
                    toProtoMsg(message: _40.PageRequest): _40.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _40.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.PageResponse;
                    fromPartial(object: Partial<_40.PageResponse>): _40.PageResponse;
                    fromAmino(object: _40.PageResponseAmino): _40.PageResponse;
                    toAmino(message: _40.PageResponse): _40.PageResponseAmino;
                    fromAminoMsg(object: _40.PageResponseAminoMsg): _40.PageResponse;
                    toAminoMsg(message: _40.PageResponse): _40.PageResponseAminoMsg;
                    fromProtoMsg(message: _40.PageResponseProtoMsg): _40.PageResponse;
                    toProto(message: _40.PageResponse): Uint8Array;
                    toProtoMsg(message: _40.PageResponse): _40.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _41.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _41.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_41.ListAllInterfacesRequest>): _41.ListAllInterfacesRequest;
                    fromAmino(_: _41.ListAllInterfacesRequestAmino): _41.ListAllInterfacesRequest;
                    toAmino(_: _41.ListAllInterfacesRequest): _41.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _41.ListAllInterfacesRequestAminoMsg): _41.ListAllInterfacesRequest;
                    toAminoMsg(message: _41.ListAllInterfacesRequest): _41.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _41.ListAllInterfacesRequestProtoMsg): _41.ListAllInterfacesRequest;
                    toProto(message: _41.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _41.ListAllInterfacesRequest): _41.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _41.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_41.ListAllInterfacesResponse>): _41.ListAllInterfacesResponse;
                    fromAmino(object: _41.ListAllInterfacesResponseAmino): _41.ListAllInterfacesResponse;
                    toAmino(message: _41.ListAllInterfacesResponse): _41.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _41.ListAllInterfacesResponseAminoMsg): _41.ListAllInterfacesResponse;
                    toAminoMsg(message: _41.ListAllInterfacesResponse): _41.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _41.ListAllInterfacesResponseProtoMsg): _41.ListAllInterfacesResponse;
                    toProto(message: _41.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _41.ListAllInterfacesResponse): _41.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _41.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.ListImplementationsRequest;
                    fromPartial(object: Partial<_41.ListImplementationsRequest>): _41.ListImplementationsRequest;
                    fromAmino(object: _41.ListImplementationsRequestAmino): _41.ListImplementationsRequest;
                    toAmino(message: _41.ListImplementationsRequest): _41.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _41.ListImplementationsRequestAminoMsg): _41.ListImplementationsRequest;
                    toAminoMsg(message: _41.ListImplementationsRequest): _41.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _41.ListImplementationsRequestProtoMsg): _41.ListImplementationsRequest;
                    toProto(message: _41.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _41.ListImplementationsRequest): _41.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _41.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.ListImplementationsResponse;
                    fromPartial(object: Partial<_41.ListImplementationsResponse>): _41.ListImplementationsResponse;
                    fromAmino(object: _41.ListImplementationsResponseAmino): _41.ListImplementationsResponse;
                    toAmino(message: _41.ListImplementationsResponse): _41.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _41.ListImplementationsResponseAminoMsg): _41.ListImplementationsResponse;
                    toAminoMsg(message: _41.ListImplementationsResponse): _41.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _41.ListImplementationsResponseProtoMsg): _41.ListImplementationsResponse;
                    toProto(message: _41.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _41.ListImplementationsResponse): _41.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _42.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.AppDescriptor;
                    fromPartial(object: Partial<_42.AppDescriptor>): _42.AppDescriptor;
                    fromAmino(object: _42.AppDescriptorAmino): _42.AppDescriptor;
                    toAmino(message: _42.AppDescriptor): _42.AppDescriptorAmino;
                    fromAminoMsg(object: _42.AppDescriptorAminoMsg): _42.AppDescriptor;
                    toAminoMsg(message: _42.AppDescriptor): _42.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _42.AppDescriptorProtoMsg): _42.AppDescriptor;
                    toProto(message: _42.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _42.AppDescriptor): _42.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _42.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.TxDescriptor;
                    fromPartial(object: Partial<_42.TxDescriptor>): _42.TxDescriptor;
                    fromAmino(object: _42.TxDescriptorAmino): _42.TxDescriptor;
                    toAmino(message: _42.TxDescriptor): _42.TxDescriptorAmino;
                    fromAminoMsg(object: _42.TxDescriptorAminoMsg): _42.TxDescriptor;
                    toAminoMsg(message: _42.TxDescriptor): _42.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _42.TxDescriptorProtoMsg): _42.TxDescriptor;
                    toProto(message: _42.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _42.TxDescriptor): _42.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _42.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.AuthnDescriptor;
                    fromPartial(object: Partial<_42.AuthnDescriptor>): _42.AuthnDescriptor;
                    fromAmino(object: _42.AuthnDescriptorAmino): _42.AuthnDescriptor;
                    toAmino(message: _42.AuthnDescriptor): _42.AuthnDescriptorAmino;
                    fromAminoMsg(object: _42.AuthnDescriptorAminoMsg): _42.AuthnDescriptor;
                    toAminoMsg(message: _42.AuthnDescriptor): _42.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _42.AuthnDescriptorProtoMsg): _42.AuthnDescriptor;
                    toProto(message: _42.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _42.AuthnDescriptor): _42.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _42.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.SigningModeDescriptor;
                    fromPartial(object: Partial<_42.SigningModeDescriptor>): _42.SigningModeDescriptor;
                    fromAmino(object: _42.SigningModeDescriptorAmino): _42.SigningModeDescriptor;
                    toAmino(message: _42.SigningModeDescriptor): _42.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _42.SigningModeDescriptorAminoMsg): _42.SigningModeDescriptor;
                    toAminoMsg(message: _42.SigningModeDescriptor): _42.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _42.SigningModeDescriptorProtoMsg): _42.SigningModeDescriptor;
                    toProto(message: _42.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _42.SigningModeDescriptor): _42.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _42.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.ChainDescriptor;
                    fromPartial(object: Partial<_42.ChainDescriptor>): _42.ChainDescriptor;
                    fromAmino(object: _42.ChainDescriptorAmino): _42.ChainDescriptor;
                    toAmino(message: _42.ChainDescriptor): _42.ChainDescriptorAmino;
                    fromAminoMsg(object: _42.ChainDescriptorAminoMsg): _42.ChainDescriptor;
                    toAminoMsg(message: _42.ChainDescriptor): _42.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _42.ChainDescriptorProtoMsg): _42.ChainDescriptor;
                    toProto(message: _42.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _42.ChainDescriptor): _42.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _42.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.CodecDescriptor;
                    fromPartial(object: Partial<_42.CodecDescriptor>): _42.CodecDescriptor;
                    fromAmino(object: _42.CodecDescriptorAmino): _42.CodecDescriptor;
                    toAmino(message: _42.CodecDescriptor): _42.CodecDescriptorAmino;
                    fromAminoMsg(object: _42.CodecDescriptorAminoMsg): _42.CodecDescriptor;
                    toAminoMsg(message: _42.CodecDescriptor): _42.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _42.CodecDescriptorProtoMsg): _42.CodecDescriptor;
                    toProto(message: _42.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _42.CodecDescriptor): _42.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _42.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.InterfaceDescriptor;
                    fromPartial(object: Partial<_42.InterfaceDescriptor>): _42.InterfaceDescriptor;
                    fromAmino(object: _42.InterfaceDescriptorAmino): _42.InterfaceDescriptor;
                    toAmino(message: _42.InterfaceDescriptor): _42.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _42.InterfaceDescriptorAminoMsg): _42.InterfaceDescriptor;
                    toAminoMsg(message: _42.InterfaceDescriptor): _42.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _42.InterfaceDescriptorProtoMsg): _42.InterfaceDescriptor;
                    toProto(message: _42.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _42.InterfaceDescriptor): _42.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _42.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_42.InterfaceImplementerDescriptor>): _42.InterfaceImplementerDescriptor;
                    fromAmino(object: _42.InterfaceImplementerDescriptorAmino): _42.InterfaceImplementerDescriptor;
                    toAmino(message: _42.InterfaceImplementerDescriptor): _42.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _42.InterfaceImplementerDescriptorAminoMsg): _42.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _42.InterfaceImplementerDescriptor): _42.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _42.InterfaceImplementerDescriptorProtoMsg): _42.InterfaceImplementerDescriptor;
                    toProto(message: _42.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _42.InterfaceImplementerDescriptor): _42.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _42.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_42.InterfaceAcceptingMessageDescriptor>): _42.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _42.InterfaceAcceptingMessageDescriptorAmino): _42.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _42.InterfaceAcceptingMessageDescriptor): _42.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _42.InterfaceAcceptingMessageDescriptorAminoMsg): _42.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _42.InterfaceAcceptingMessageDescriptor): _42.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _42.InterfaceAcceptingMessageDescriptorProtoMsg): _42.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _42.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _42.InterfaceAcceptingMessageDescriptor): _42.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _42.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.ConfigurationDescriptor;
                    fromPartial(object: Partial<_42.ConfigurationDescriptor>): _42.ConfigurationDescriptor;
                    fromAmino(object: _42.ConfigurationDescriptorAmino): _42.ConfigurationDescriptor;
                    toAmino(message: _42.ConfigurationDescriptor): _42.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _42.ConfigurationDescriptorAminoMsg): _42.ConfigurationDescriptor;
                    toAminoMsg(message: _42.ConfigurationDescriptor): _42.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _42.ConfigurationDescriptorProtoMsg): _42.ConfigurationDescriptor;
                    toProto(message: _42.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _42.ConfigurationDescriptor): _42.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _42.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.MsgDescriptor;
                    fromPartial(object: Partial<_42.MsgDescriptor>): _42.MsgDescriptor;
                    fromAmino(object: _42.MsgDescriptorAmino): _42.MsgDescriptor;
                    toAmino(message: _42.MsgDescriptor): _42.MsgDescriptorAmino;
                    fromAminoMsg(object: _42.MsgDescriptorAminoMsg): _42.MsgDescriptor;
                    toAminoMsg(message: _42.MsgDescriptor): _42.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _42.MsgDescriptorProtoMsg): _42.MsgDescriptor;
                    toProto(message: _42.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _42.MsgDescriptor): _42.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _42.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_42.GetAuthnDescriptorRequest>): _42.GetAuthnDescriptorRequest;
                    fromAmino(_: _42.GetAuthnDescriptorRequestAmino): _42.GetAuthnDescriptorRequest;
                    toAmino(_: _42.GetAuthnDescriptorRequest): _42.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _42.GetAuthnDescriptorRequestAminoMsg): _42.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _42.GetAuthnDescriptorRequest): _42.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _42.GetAuthnDescriptorRequestProtoMsg): _42.GetAuthnDescriptorRequest;
                    toProto(message: _42.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _42.GetAuthnDescriptorRequest): _42.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _42.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_42.GetAuthnDescriptorResponse>): _42.GetAuthnDescriptorResponse;
                    fromAmino(object: _42.GetAuthnDescriptorResponseAmino): _42.GetAuthnDescriptorResponse;
                    toAmino(message: _42.GetAuthnDescriptorResponse): _42.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _42.GetAuthnDescriptorResponseAminoMsg): _42.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _42.GetAuthnDescriptorResponse): _42.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _42.GetAuthnDescriptorResponseProtoMsg): _42.GetAuthnDescriptorResponse;
                    toProto(message: _42.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _42.GetAuthnDescriptorResponse): _42.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _42.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_42.GetChainDescriptorRequest>): _42.GetChainDescriptorRequest;
                    fromAmino(_: _42.GetChainDescriptorRequestAmino): _42.GetChainDescriptorRequest;
                    toAmino(_: _42.GetChainDescriptorRequest): _42.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _42.GetChainDescriptorRequestAminoMsg): _42.GetChainDescriptorRequest;
                    toAminoMsg(message: _42.GetChainDescriptorRequest): _42.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _42.GetChainDescriptorRequestProtoMsg): _42.GetChainDescriptorRequest;
                    toProto(message: _42.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _42.GetChainDescriptorRequest): _42.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _42.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_42.GetChainDescriptorResponse>): _42.GetChainDescriptorResponse;
                    fromAmino(object: _42.GetChainDescriptorResponseAmino): _42.GetChainDescriptorResponse;
                    toAmino(message: _42.GetChainDescriptorResponse): _42.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _42.GetChainDescriptorResponseAminoMsg): _42.GetChainDescriptorResponse;
                    toAminoMsg(message: _42.GetChainDescriptorResponse): _42.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _42.GetChainDescriptorResponseProtoMsg): _42.GetChainDescriptorResponse;
                    toProto(message: _42.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _42.GetChainDescriptorResponse): _42.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _42.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_42.GetCodecDescriptorRequest>): _42.GetCodecDescriptorRequest;
                    fromAmino(_: _42.GetCodecDescriptorRequestAmino): _42.GetCodecDescriptorRequest;
                    toAmino(_: _42.GetCodecDescriptorRequest): _42.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _42.GetCodecDescriptorRequestAminoMsg): _42.GetCodecDescriptorRequest;
                    toAminoMsg(message: _42.GetCodecDescriptorRequest): _42.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _42.GetCodecDescriptorRequestProtoMsg): _42.GetCodecDescriptorRequest;
                    toProto(message: _42.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _42.GetCodecDescriptorRequest): _42.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _42.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_42.GetCodecDescriptorResponse>): _42.GetCodecDescriptorResponse;
                    fromAmino(object: _42.GetCodecDescriptorResponseAmino): _42.GetCodecDescriptorResponse;
                    toAmino(message: _42.GetCodecDescriptorResponse): _42.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _42.GetCodecDescriptorResponseAminoMsg): _42.GetCodecDescriptorResponse;
                    toAminoMsg(message: _42.GetCodecDescriptorResponse): _42.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _42.GetCodecDescriptorResponseProtoMsg): _42.GetCodecDescriptorResponse;
                    toProto(message: _42.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _42.GetCodecDescriptorResponse): _42.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _42.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_42.GetConfigurationDescriptorRequest>): _42.GetConfigurationDescriptorRequest;
                    fromAmino(_: _42.GetConfigurationDescriptorRequestAmino): _42.GetConfigurationDescriptorRequest;
                    toAmino(_: _42.GetConfigurationDescriptorRequest): _42.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _42.GetConfigurationDescriptorRequestAminoMsg): _42.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _42.GetConfigurationDescriptorRequest): _42.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _42.GetConfigurationDescriptorRequestProtoMsg): _42.GetConfigurationDescriptorRequest;
                    toProto(message: _42.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _42.GetConfigurationDescriptorRequest): _42.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _42.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_42.GetConfigurationDescriptorResponse>): _42.GetConfigurationDescriptorResponse;
                    fromAmino(object: _42.GetConfigurationDescriptorResponseAmino): _42.GetConfigurationDescriptorResponse;
                    toAmino(message: _42.GetConfigurationDescriptorResponse): _42.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _42.GetConfigurationDescriptorResponseAminoMsg): _42.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _42.GetConfigurationDescriptorResponse): _42.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _42.GetConfigurationDescriptorResponseProtoMsg): _42.GetConfigurationDescriptorResponse;
                    toProto(message: _42.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _42.GetConfigurationDescriptorResponse): _42.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _42.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_42.GetQueryServicesDescriptorRequest>): _42.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _42.GetQueryServicesDescriptorRequestAmino): _42.GetQueryServicesDescriptorRequest;
                    toAmino(_: _42.GetQueryServicesDescriptorRequest): _42.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _42.GetQueryServicesDescriptorRequestAminoMsg): _42.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _42.GetQueryServicesDescriptorRequest): _42.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _42.GetQueryServicesDescriptorRequestProtoMsg): _42.GetQueryServicesDescriptorRequest;
                    toProto(message: _42.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _42.GetQueryServicesDescriptorRequest): _42.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _42.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_42.GetQueryServicesDescriptorResponse>): _42.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _42.GetQueryServicesDescriptorResponseAmino): _42.GetQueryServicesDescriptorResponse;
                    toAmino(message: _42.GetQueryServicesDescriptorResponse): _42.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _42.GetQueryServicesDescriptorResponseAminoMsg): _42.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _42.GetQueryServicesDescriptorResponse): _42.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _42.GetQueryServicesDescriptorResponseProtoMsg): _42.GetQueryServicesDescriptorResponse;
                    toProto(message: _42.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _42.GetQueryServicesDescriptorResponse): _42.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _42.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_42.GetTxDescriptorRequest>): _42.GetTxDescriptorRequest;
                    fromAmino(_: _42.GetTxDescriptorRequestAmino): _42.GetTxDescriptorRequest;
                    toAmino(_: _42.GetTxDescriptorRequest): _42.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _42.GetTxDescriptorRequestAminoMsg): _42.GetTxDescriptorRequest;
                    toAminoMsg(message: _42.GetTxDescriptorRequest): _42.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _42.GetTxDescriptorRequestProtoMsg): _42.GetTxDescriptorRequest;
                    toProto(message: _42.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _42.GetTxDescriptorRequest): _42.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _42.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_42.GetTxDescriptorResponse>): _42.GetTxDescriptorResponse;
                    fromAmino(object: _42.GetTxDescriptorResponseAmino): _42.GetTxDescriptorResponse;
                    toAmino(message: _42.GetTxDescriptorResponse): _42.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _42.GetTxDescriptorResponseAminoMsg): _42.GetTxDescriptorResponse;
                    toAminoMsg(message: _42.GetTxDescriptorResponse): _42.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _42.GetTxDescriptorResponseProtoMsg): _42.GetTxDescriptorResponse;
                    toProto(message: _42.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _42.GetTxDescriptorResponse): _42.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _42.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.QueryServicesDescriptor;
                    fromPartial(object: Partial<_42.QueryServicesDescriptor>): _42.QueryServicesDescriptor;
                    fromAmino(object: _42.QueryServicesDescriptorAmino): _42.QueryServicesDescriptor;
                    toAmino(message: _42.QueryServicesDescriptor): _42.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _42.QueryServicesDescriptorAminoMsg): _42.QueryServicesDescriptor;
                    toAminoMsg(message: _42.QueryServicesDescriptor): _42.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _42.QueryServicesDescriptorProtoMsg): _42.QueryServicesDescriptor;
                    toProto(message: _42.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _42.QueryServicesDescriptor): _42.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _42.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.QueryServiceDescriptor;
                    fromPartial(object: Partial<_42.QueryServiceDescriptor>): _42.QueryServiceDescriptor;
                    fromAmino(object: _42.QueryServiceDescriptorAmino): _42.QueryServiceDescriptor;
                    toAmino(message: _42.QueryServiceDescriptor): _42.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _42.QueryServiceDescriptorAminoMsg): _42.QueryServiceDescriptor;
                    toAminoMsg(message: _42.QueryServiceDescriptor): _42.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _42.QueryServiceDescriptorProtoMsg): _42.QueryServiceDescriptor;
                    toProto(message: _42.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _42.QueryServiceDescriptor): _42.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _42.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.QueryMethodDescriptor;
                    fromPartial(object: Partial<_42.QueryMethodDescriptor>): _42.QueryMethodDescriptor;
                    fromAmino(object: _42.QueryMethodDescriptorAmino): _42.QueryMethodDescriptor;
                    toAmino(message: _42.QueryMethodDescriptor): _42.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _42.QueryMethodDescriptorAminoMsg): _42.QueryMethodDescriptor;
                    toAminoMsg(message: _42.QueryMethodDescriptor): _42.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _42.QueryMethodDescriptorProtoMsg): _42.QueryMethodDescriptor;
                    toProto(message: _42.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _42.QueryMethodDescriptor): _42.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _43.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.Snapshot;
                    fromPartial(object: Partial<_43.Snapshot>): _43.Snapshot;
                    fromAmino(object: _43.SnapshotAmino): _43.Snapshot;
                    toAmino(message: _43.Snapshot): _43.SnapshotAmino;
                    fromAminoMsg(object: _43.SnapshotAminoMsg): _43.Snapshot;
                    toAminoMsg(message: _43.Snapshot): _43.SnapshotAminoMsg;
                    fromProtoMsg(message: _43.SnapshotProtoMsg): _43.Snapshot;
                    toProto(message: _43.Snapshot): Uint8Array;
                    toProtoMsg(message: _43.Snapshot): _43.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _43.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.Metadata;
                    fromPartial(object: Partial<_43.Metadata>): _43.Metadata;
                    fromAmino(object: _43.MetadataAmino): _43.Metadata;
                    toAmino(message: _43.Metadata): _43.MetadataAmino;
                    fromAminoMsg(object: _43.MetadataAminoMsg): _43.Metadata;
                    toAminoMsg(message: _43.Metadata): _43.MetadataAminoMsg;
                    fromProtoMsg(message: _43.MetadataProtoMsg): _43.Metadata;
                    toProto(message: _43.Metadata): Uint8Array;
                    toProtoMsg(message: _43.Metadata): _43.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _43.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.SnapshotItem;
                    fromPartial(object: Partial<_43.SnapshotItem>): _43.SnapshotItem;
                    fromAmino(object: _43.SnapshotItemAmino): _43.SnapshotItem;
                    toAmino(message: _43.SnapshotItem): _43.SnapshotItemAmino;
                    fromAminoMsg(object: _43.SnapshotItemAminoMsg): _43.SnapshotItem;
                    toAminoMsg(message: _43.SnapshotItem): _43.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _43.SnapshotItemProtoMsg): _43.SnapshotItem;
                    toProto(message: _43.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _43.SnapshotItem): _43.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _43.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.SnapshotStoreItem;
                    fromPartial(object: Partial<_43.SnapshotStoreItem>): _43.SnapshotStoreItem;
                    fromAmino(object: _43.SnapshotStoreItemAmino): _43.SnapshotStoreItem;
                    toAmino(message: _43.SnapshotStoreItem): _43.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _43.SnapshotStoreItemAminoMsg): _43.SnapshotStoreItem;
                    toAminoMsg(message: _43.SnapshotStoreItem): _43.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _43.SnapshotStoreItemProtoMsg): _43.SnapshotStoreItem;
                    toProto(message: _43.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _43.SnapshotStoreItem): _43.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _43.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.SnapshotIAVLItem;
                    fromPartial(object: Partial<_43.SnapshotIAVLItem>): _43.SnapshotIAVLItem;
                    fromAmino(object: _43.SnapshotIAVLItemAmino): _43.SnapshotIAVLItem;
                    toAmino(message: _43.SnapshotIAVLItem): _43.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _43.SnapshotIAVLItemAminoMsg): _43.SnapshotIAVLItem;
                    toAminoMsg(message: _43.SnapshotIAVLItem): _43.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _43.SnapshotIAVLItemProtoMsg): _43.SnapshotIAVLItem;
                    toProto(message: _43.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _43.SnapshotIAVLItem): _43.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _43.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_43.SnapshotExtensionMeta>): _43.SnapshotExtensionMeta;
                    fromAmino(object: _43.SnapshotExtensionMetaAmino): _43.SnapshotExtensionMeta;
                    toAmino(message: _43.SnapshotExtensionMeta): _43.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _43.SnapshotExtensionMetaAminoMsg): _43.SnapshotExtensionMeta;
                    toAminoMsg(message: _43.SnapshotExtensionMeta): _43.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _43.SnapshotExtensionMetaProtoMsg): _43.SnapshotExtensionMeta;
                    toProto(message: _43.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _43.SnapshotExtensionMeta): _43.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _43.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_43.SnapshotExtensionPayload>): _43.SnapshotExtensionPayload;
                    fromAmino(object: _43.SnapshotExtensionPayloadAmino): _43.SnapshotExtensionPayload;
                    toAmino(message: _43.SnapshotExtensionPayload): _43.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _43.SnapshotExtensionPayloadAminoMsg): _43.SnapshotExtensionPayload;
                    toAminoMsg(message: _43.SnapshotExtensionPayload): _43.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _43.SnapshotExtensionPayloadProtoMsg): _43.SnapshotExtensionPayload;
                    toProto(message: _43.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _43.SnapshotExtensionPayload): _43.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _43.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.SnapshotKVItem;
                    fromPartial(object: Partial<_43.SnapshotKVItem>): _43.SnapshotKVItem;
                    fromAmino(object: _43.SnapshotKVItemAmino): _43.SnapshotKVItem;
                    toAmino(message: _43.SnapshotKVItem): _43.SnapshotKVItemAmino;
                    fromAminoMsg(object: _43.SnapshotKVItemAminoMsg): _43.SnapshotKVItem;
                    toAminoMsg(message: _43.SnapshotKVItem): _43.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _43.SnapshotKVItemProtoMsg): _43.SnapshotKVItem;
                    toProto(message: _43.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _43.SnapshotKVItem): _43.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _43.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.SnapshotSchema;
                    fromPartial(object: Partial<_43.SnapshotSchema>): _43.SnapshotSchema;
                    fromAmino(object: _43.SnapshotSchemaAmino): _43.SnapshotSchema;
                    toAmino(message: _43.SnapshotSchema): _43.SnapshotSchemaAmino;
                    fromAminoMsg(object: _43.SnapshotSchemaAminoMsg): _43.SnapshotSchema;
                    toAminoMsg(message: _43.SnapshotSchema): _43.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _43.SnapshotSchemaProtoMsg): _43.SnapshotSchema;
                    toProto(message: _43.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _43.SnapshotSchema): _43.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _45.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.StoreKVPair;
                    fromPartial(object: Partial<_45.StoreKVPair>): _45.StoreKVPair;
                    fromAmino(object: _45.StoreKVPairAmino): _45.StoreKVPair;
                    toAmino(message: _45.StoreKVPair): _45.StoreKVPairAmino;
                    fromAminoMsg(object: _45.StoreKVPairAminoMsg): _45.StoreKVPair;
                    toAminoMsg(message: _45.StoreKVPair): _45.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _45.StoreKVPairProtoMsg): _45.StoreKVPair;
                    toProto(message: _45.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _45.StoreKVPair): _45.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _45.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.BlockMetadata;
                    fromPartial(object: Partial<_45.BlockMetadata>): _45.BlockMetadata;
                    fromAmino(object: _45.BlockMetadataAmino): _45.BlockMetadata;
                    toAmino(message: _45.BlockMetadata): _45.BlockMetadataAmino;
                    fromAminoMsg(object: _45.BlockMetadataAminoMsg): _45.BlockMetadata;
                    toAminoMsg(message: _45.BlockMetadata): _45.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _45.BlockMetadataProtoMsg): _45.BlockMetadata;
                    toProto(message: _45.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _45.BlockMetadata): _45.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _45.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_45.BlockMetadata_DeliverTx>): _45.BlockMetadata_DeliverTx;
                    fromAmino(object: _45.BlockMetadata_DeliverTxAmino): _45.BlockMetadata_DeliverTx;
                    toAmino(message: _45.BlockMetadata_DeliverTx): _45.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _45.BlockMetadata_DeliverTxAminoMsg): _45.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _45.BlockMetadata_DeliverTx): _45.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _45.BlockMetadata_DeliverTxProtoMsg): _45.BlockMetadata_DeliverTx;
                    toProto(message: _45.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _45.BlockMetadata_DeliverTx): _45.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _44.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.CommitInfo;
                    fromPartial(object: Partial<_44.CommitInfo>): _44.CommitInfo;
                    fromAmino(object: _44.CommitInfoAmino): _44.CommitInfo;
                    toAmino(message: _44.CommitInfo): _44.CommitInfoAmino;
                    fromAminoMsg(object: _44.CommitInfoAminoMsg): _44.CommitInfo;
                    toAminoMsg(message: _44.CommitInfo): _44.CommitInfoAminoMsg;
                    fromProtoMsg(message: _44.CommitInfoProtoMsg): _44.CommitInfo;
                    toProto(message: _44.CommitInfo): Uint8Array;
                    toProtoMsg(message: _44.CommitInfo): _44.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _44.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.StoreInfo;
                    fromPartial(object: Partial<_44.StoreInfo>): _44.StoreInfo;
                    fromAmino(object: _44.StoreInfoAmino): _44.StoreInfo;
                    toAmino(message: _44.StoreInfo): _44.StoreInfoAmino;
                    fromAminoMsg(object: _44.StoreInfoAminoMsg): _44.StoreInfo;
                    toAminoMsg(message: _44.StoreInfo): _44.StoreInfoAminoMsg;
                    fromProtoMsg(message: _44.StoreInfoProtoMsg): _44.StoreInfo;
                    toProto(message: _44.StoreInfo): Uint8Array;
                    toProtoMsg(message: _44.StoreInfo): _44.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _44.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.CommitID;
                    fromPartial(object: Partial<_44.CommitID>): _44.CommitID;
                    fromAmino(object: _44.CommitIDAmino): _44.CommitID;
                    toAmino(message: _44.CommitID): _44.CommitIDAmino;
                    fromAminoMsg(object: _44.CommitIDAminoMsg): _44.CommitID;
                    toAminoMsg(message: _44.CommitID): _44.CommitIDAminoMsg;
                    fromProtoMsg(message: _44.CommitIDProtoMsg): _44.CommitID;
                    toProto(message: _44.CommitID): Uint8Array;
                    toProtoMsg(message: _44.CommitID): _44.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _211.ServiceClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    getNodeInfo(request?: _46.GetNodeInfoRequest): Promise<_46.GetNodeInfoResponse>;
                    getSyncing(request?: _46.GetSyncingRequest): Promise<_46.GetSyncingResponse>;
                    getLatestBlock(request?: _46.GetLatestBlockRequest): Promise<_46.GetLatestBlockResponse>;
                    getBlockByHeight(request: _46.GetBlockByHeightRequest): Promise<_46.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _46.GetLatestValidatorSetRequest): Promise<_46.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _46.GetValidatorSetByHeightRequest): Promise<_46.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _46.ABCIQueryRequest): Promise<_46.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _192.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _47.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.Block;
                    fromPartial(object: Partial<_47.Block>): _47.Block;
                    fromAmino(object: _47.BlockAmino): _47.Block;
                    toAmino(message: _47.Block): _47.BlockAmino;
                    fromAminoMsg(object: _47.BlockAminoMsg): _47.Block;
                    toAminoMsg(message: _47.Block): _47.BlockAminoMsg;
                    fromProtoMsg(message: _47.BlockProtoMsg): _47.Block;
                    toProto(message: _47.Block): Uint8Array;
                    toProtoMsg(message: _47.Block): _47.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _47.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.Header;
                    fromPartial(object: Partial<_47.Header>): _47.Header;
                    fromAmino(object: _47.HeaderAmino): _47.Header;
                    toAmino(message: _47.Header): _47.HeaderAmino;
                    fromAminoMsg(object: _47.HeaderAminoMsg): _47.Header;
                    toAminoMsg(message: _47.Header): _47.HeaderAminoMsg;
                    fromProtoMsg(message: _47.HeaderProtoMsg): _47.Header;
                    toProto(message: _47.Header): Uint8Array;
                    toProtoMsg(message: _47.Header): _47.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _46.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_46.GetValidatorSetByHeightRequest>): _46.GetValidatorSetByHeightRequest;
                    fromAmino(object: _46.GetValidatorSetByHeightRequestAmino): _46.GetValidatorSetByHeightRequest;
                    toAmino(message: _46.GetValidatorSetByHeightRequest): _46.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _46.GetValidatorSetByHeightRequestAminoMsg): _46.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _46.GetValidatorSetByHeightRequest): _46.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _46.GetValidatorSetByHeightRequestProtoMsg): _46.GetValidatorSetByHeightRequest;
                    toProto(message: _46.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _46.GetValidatorSetByHeightRequest): _46.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _46.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_46.GetValidatorSetByHeightResponse>): _46.GetValidatorSetByHeightResponse;
                    fromAmino(object: _46.GetValidatorSetByHeightResponseAmino): _46.GetValidatorSetByHeightResponse;
                    toAmino(message: _46.GetValidatorSetByHeightResponse): _46.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _46.GetValidatorSetByHeightResponseAminoMsg): _46.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _46.GetValidatorSetByHeightResponse): _46.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _46.GetValidatorSetByHeightResponseProtoMsg): _46.GetValidatorSetByHeightResponse;
                    toProto(message: _46.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _46.GetValidatorSetByHeightResponse): _46.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _46.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_46.GetLatestValidatorSetRequest>): _46.GetLatestValidatorSetRequest;
                    fromAmino(object: _46.GetLatestValidatorSetRequestAmino): _46.GetLatestValidatorSetRequest;
                    toAmino(message: _46.GetLatestValidatorSetRequest): _46.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _46.GetLatestValidatorSetRequestAminoMsg): _46.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _46.GetLatestValidatorSetRequest): _46.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _46.GetLatestValidatorSetRequestProtoMsg): _46.GetLatestValidatorSetRequest;
                    toProto(message: _46.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _46.GetLatestValidatorSetRequest): _46.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _46.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_46.GetLatestValidatorSetResponse>): _46.GetLatestValidatorSetResponse;
                    fromAmino(object: _46.GetLatestValidatorSetResponseAmino): _46.GetLatestValidatorSetResponse;
                    toAmino(message: _46.GetLatestValidatorSetResponse): _46.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _46.GetLatestValidatorSetResponseAminoMsg): _46.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _46.GetLatestValidatorSetResponse): _46.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _46.GetLatestValidatorSetResponseProtoMsg): _46.GetLatestValidatorSetResponse;
                    toProto(message: _46.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _46.GetLatestValidatorSetResponse): _46.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _46.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.Validator;
                    fromPartial(object: Partial<_46.Validator>): _46.Validator;
                    fromAmino(object: _46.ValidatorAmino): _46.Validator;
                    toAmino(message: _46.Validator): _46.ValidatorAmino;
                    fromAminoMsg(object: _46.ValidatorAminoMsg): _46.Validator;
                    toAminoMsg(message: _46.Validator): _46.ValidatorAminoMsg;
                    fromProtoMsg(message: _46.ValidatorProtoMsg): _46.Validator;
                    toProto(message: _46.Validator): Uint8Array;
                    toProtoMsg(message: _46.Validator): _46.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _46.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_46.GetBlockByHeightRequest>): _46.GetBlockByHeightRequest;
                    fromAmino(object: _46.GetBlockByHeightRequestAmino): _46.GetBlockByHeightRequest;
                    toAmino(message: _46.GetBlockByHeightRequest): _46.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _46.GetBlockByHeightRequestAminoMsg): _46.GetBlockByHeightRequest;
                    toAminoMsg(message: _46.GetBlockByHeightRequest): _46.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _46.GetBlockByHeightRequestProtoMsg): _46.GetBlockByHeightRequest;
                    toProto(message: _46.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _46.GetBlockByHeightRequest): _46.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _46.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_46.GetBlockByHeightResponse>): _46.GetBlockByHeightResponse;
                    fromAmino(object: _46.GetBlockByHeightResponseAmino): _46.GetBlockByHeightResponse;
                    toAmino(message: _46.GetBlockByHeightResponse): _46.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _46.GetBlockByHeightResponseAminoMsg): _46.GetBlockByHeightResponse;
                    toAminoMsg(message: _46.GetBlockByHeightResponse): _46.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _46.GetBlockByHeightResponseProtoMsg): _46.GetBlockByHeightResponse;
                    toProto(message: _46.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _46.GetBlockByHeightResponse): _46.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _46.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _46.GetLatestBlockRequest;
                    fromPartial(_: Partial<_46.GetLatestBlockRequest>): _46.GetLatestBlockRequest;
                    fromAmino(_: _46.GetLatestBlockRequestAmino): _46.GetLatestBlockRequest;
                    toAmino(_: _46.GetLatestBlockRequest): _46.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _46.GetLatestBlockRequestAminoMsg): _46.GetLatestBlockRequest;
                    toAminoMsg(message: _46.GetLatestBlockRequest): _46.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _46.GetLatestBlockRequestProtoMsg): _46.GetLatestBlockRequest;
                    toProto(message: _46.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _46.GetLatestBlockRequest): _46.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _46.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetLatestBlockResponse;
                    fromPartial(object: Partial<_46.GetLatestBlockResponse>): _46.GetLatestBlockResponse;
                    fromAmino(object: _46.GetLatestBlockResponseAmino): _46.GetLatestBlockResponse;
                    toAmino(message: _46.GetLatestBlockResponse): _46.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _46.GetLatestBlockResponseAminoMsg): _46.GetLatestBlockResponse;
                    toAminoMsg(message: _46.GetLatestBlockResponse): _46.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _46.GetLatestBlockResponseProtoMsg): _46.GetLatestBlockResponse;
                    toProto(message: _46.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _46.GetLatestBlockResponse): _46.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _46.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _46.GetSyncingRequest;
                    fromPartial(_: Partial<_46.GetSyncingRequest>): _46.GetSyncingRequest;
                    fromAmino(_: _46.GetSyncingRequestAmino): _46.GetSyncingRequest;
                    toAmino(_: _46.GetSyncingRequest): _46.GetSyncingRequestAmino;
                    fromAminoMsg(object: _46.GetSyncingRequestAminoMsg): _46.GetSyncingRequest;
                    toAminoMsg(message: _46.GetSyncingRequest): _46.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _46.GetSyncingRequestProtoMsg): _46.GetSyncingRequest;
                    toProto(message: _46.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _46.GetSyncingRequest): _46.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _46.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetSyncingResponse;
                    fromPartial(object: Partial<_46.GetSyncingResponse>): _46.GetSyncingResponse;
                    fromAmino(object: _46.GetSyncingResponseAmino): _46.GetSyncingResponse;
                    toAmino(message: _46.GetSyncingResponse): _46.GetSyncingResponseAmino;
                    fromAminoMsg(object: _46.GetSyncingResponseAminoMsg): _46.GetSyncingResponse;
                    toAminoMsg(message: _46.GetSyncingResponse): _46.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _46.GetSyncingResponseProtoMsg): _46.GetSyncingResponse;
                    toProto(message: _46.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _46.GetSyncingResponse): _46.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _46.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _46.GetNodeInfoRequest;
                    fromPartial(_: Partial<_46.GetNodeInfoRequest>): _46.GetNodeInfoRequest;
                    fromAmino(_: _46.GetNodeInfoRequestAmino): _46.GetNodeInfoRequest;
                    toAmino(_: _46.GetNodeInfoRequest): _46.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _46.GetNodeInfoRequestAminoMsg): _46.GetNodeInfoRequest;
                    toAminoMsg(message: _46.GetNodeInfoRequest): _46.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _46.GetNodeInfoRequestProtoMsg): _46.GetNodeInfoRequest;
                    toProto(message: _46.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _46.GetNodeInfoRequest): _46.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _46.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetNodeInfoResponse;
                    fromPartial(object: Partial<_46.GetNodeInfoResponse>): _46.GetNodeInfoResponse;
                    fromAmino(object: _46.GetNodeInfoResponseAmino): _46.GetNodeInfoResponse;
                    toAmino(message: _46.GetNodeInfoResponse): _46.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _46.GetNodeInfoResponseAminoMsg): _46.GetNodeInfoResponse;
                    toAminoMsg(message: _46.GetNodeInfoResponse): _46.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _46.GetNodeInfoResponseProtoMsg): _46.GetNodeInfoResponse;
                    toProto(message: _46.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _46.GetNodeInfoResponse): _46.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _46.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.VersionInfo;
                    fromPartial(object: Partial<_46.VersionInfo>): _46.VersionInfo;
                    fromAmino(object: _46.VersionInfoAmino): _46.VersionInfo;
                    toAmino(message: _46.VersionInfo): _46.VersionInfoAmino;
                    fromAminoMsg(object: _46.VersionInfoAminoMsg): _46.VersionInfo;
                    toAminoMsg(message: _46.VersionInfo): _46.VersionInfoAminoMsg;
                    fromProtoMsg(message: _46.VersionInfoProtoMsg): _46.VersionInfo;
                    toProto(message: _46.VersionInfo): Uint8Array;
                    toProtoMsg(message: _46.VersionInfo): _46.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _46.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.Module;
                    fromPartial(object: Partial<_46.Module>): _46.Module;
                    fromAmino(object: _46.ModuleAmino): _46.Module;
                    toAmino(message: _46.Module): _46.ModuleAmino;
                    fromAminoMsg(object: _46.ModuleAminoMsg): _46.Module;
                    toAminoMsg(message: _46.Module): _46.ModuleAminoMsg;
                    fromProtoMsg(message: _46.ModuleProtoMsg): _46.Module;
                    toProto(message: _46.Module): Uint8Array;
                    toProtoMsg(message: _46.Module): _46.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _46.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.ABCIQueryRequest;
                    fromPartial(object: Partial<_46.ABCIQueryRequest>): _46.ABCIQueryRequest;
                    fromAmino(object: _46.ABCIQueryRequestAmino): _46.ABCIQueryRequest;
                    toAmino(message: _46.ABCIQueryRequest): _46.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _46.ABCIQueryRequestAminoMsg): _46.ABCIQueryRequest;
                    toAminoMsg(message: _46.ABCIQueryRequest): _46.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _46.ABCIQueryRequestProtoMsg): _46.ABCIQueryRequest;
                    toProto(message: _46.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _46.ABCIQueryRequest): _46.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _46.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.ABCIQueryResponse;
                    fromPartial(object: Partial<_46.ABCIQueryResponse>): _46.ABCIQueryResponse;
                    fromAmino(object: _46.ABCIQueryResponseAmino): _46.ABCIQueryResponse;
                    toAmino(message: _46.ABCIQueryResponse): _46.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _46.ABCIQueryResponseAminoMsg): _46.ABCIQueryResponse;
                    toAminoMsg(message: _46.ABCIQueryResponse): _46.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _46.ABCIQueryResponseProtoMsg): _46.ABCIQueryResponse;
                    toProto(message: _46.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _46.ABCIQueryResponse): _46.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _46.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.ProofOp;
                    fromPartial(object: Partial<_46.ProofOp>): _46.ProofOp;
                    fromAmino(object: _46.ProofOpAmino): _46.ProofOp;
                    toAmino(message: _46.ProofOp): _46.ProofOpAmino;
                    fromAminoMsg(object: _46.ProofOpAminoMsg): _46.ProofOp;
                    toAminoMsg(message: _46.ProofOp): _46.ProofOpAminoMsg;
                    fromProtoMsg(message: _46.ProofOpProtoMsg): _46.ProofOp;
                    toProto(message: _46.ProofOp): Uint8Array;
                    toProtoMsg(message: _46.ProofOp): _46.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _46.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.ProofOps;
                    fromPartial(object: Partial<_46.ProofOps>): _46.ProofOps;
                    fromAmino(object: _46.ProofOpsAmino): _46.ProofOps;
                    toAmino(message: _46.ProofOps): _46.ProofOpsAmino;
                    fromAminoMsg(object: _46.ProofOpsAminoMsg): _46.ProofOps;
                    toAminoMsg(message: _46.ProofOps): _46.ProofOpsAminoMsg;
                    fromProtoMsg(message: _46.ProofOpsProtoMsg): _46.ProofOps;
                    toProto(message: _46.ProofOps): Uint8Array;
                    toProtoMsg(message: _46.ProofOps): _46.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _48.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.Coin;
                fromPartial(object: Partial<_48.Coin>): _48.Coin;
                fromAmino(object: _48.CoinAmino): _48.Coin;
                toAmino(message: _48.Coin): _48.CoinAmino;
                fromAminoMsg(object: _48.CoinAminoMsg): _48.Coin;
                toAminoMsg(message: _48.Coin): _48.CoinAminoMsg;
                fromProtoMsg(message: _48.CoinProtoMsg): _48.Coin;
                toProto(message: _48.Coin): Uint8Array;
                toProtoMsg(message: _48.Coin): _48.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _48.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.DecCoin;
                fromPartial(object: Partial<_48.DecCoin>): _48.DecCoin;
                fromAmino(object: _48.DecCoinAmino): _48.DecCoin;
                toAmino(message: _48.DecCoin): _48.DecCoinAmino;
                fromAminoMsg(object: _48.DecCoinAminoMsg): _48.DecCoin;
                toAminoMsg(message: _48.DecCoin): _48.DecCoinAminoMsg;
                fromProtoMsg(message: _48.DecCoinProtoMsg): _48.DecCoin;
                toProto(message: _48.DecCoin): Uint8Array;
                toProtoMsg(message: _48.DecCoin): _48.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _48.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.IntProto;
                fromPartial(object: Partial<_48.IntProto>): _48.IntProto;
                fromAmino(object: _48.IntProtoAmino): _48.IntProto;
                toAmino(message: _48.IntProto): _48.IntProtoAmino;
                fromAminoMsg(object: _48.IntProtoAminoMsg): _48.IntProto;
                toAminoMsg(message: _48.IntProto): _48.IntProtoAminoMsg;
                fromProtoMsg(message: _48.IntProtoProtoMsg): _48.IntProto;
                toProto(message: _48.IntProto): Uint8Array;
                toProtoMsg(message: _48.IntProto): _48.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _48.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.DecProto;
                fromPartial(object: Partial<_48.DecProto>): _48.DecProto;
                fromAmino(object: _48.DecProtoAmino): _48.DecProto;
                toAmino(message: _48.DecProto): _48.DecProtoAmino;
                fromAminoMsg(object: _48.DecProtoAminoMsg): _48.DecProto;
                toAminoMsg(message: _48.DecProto): _48.DecProtoAminoMsg;
                fromProtoMsg(message: _48.DecProtoProtoMsg): _48.DecProto;
                toProto(message: _48.DecProto): Uint8Array;
                toProtoMsg(message: _48.DecProto): _48.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _50.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.GenesisOwners;
                fromPartial(object: Partial<_50.GenesisOwners>): _50.GenesisOwners;
                fromAmino(object: _50.GenesisOwnersAmino): _50.GenesisOwners;
                toAmino(message: _50.GenesisOwners): _50.GenesisOwnersAmino;
                fromAminoMsg(object: _50.GenesisOwnersAminoMsg): _50.GenesisOwners;
                toAminoMsg(message: _50.GenesisOwners): _50.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _50.GenesisOwnersProtoMsg): _50.GenesisOwners;
                toProto(message: _50.GenesisOwners): Uint8Array;
                toProtoMsg(message: _50.GenesisOwners): _50.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _49.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.Capability;
                fromPartial(object: Partial<_49.Capability>): _49.Capability;
                fromAmino(object: _49.CapabilityAmino): _49.Capability;
                toAmino(message: _49.Capability): _49.CapabilityAmino;
                fromAminoMsg(object: _49.CapabilityAminoMsg): _49.Capability;
                toAminoMsg(message: _49.Capability): _49.CapabilityAminoMsg;
                fromProtoMsg(message: _49.CapabilityProtoMsg): _49.Capability;
                toProto(message: _49.Capability): Uint8Array;
                toProtoMsg(message: _49.Capability): _49.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _49.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.Owner;
                fromPartial(object: Partial<_49.Owner>): _49.Owner;
                fromAmino(object: _49.OwnerAmino): _49.Owner;
                toAmino(message: _49.Owner): _49.OwnerAmino;
                fromAminoMsg(object: _49.OwnerAminoMsg): _49.Owner;
                toAminoMsg(message: _49.Owner): _49.OwnerAminoMsg;
                fromProtoMsg(message: _49.OwnerProtoMsg): _49.Owner;
                toProto(message: _49.Owner): Uint8Array;
                toProtoMsg(message: _49.Owner): _49.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _49.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.CapabilityOwners;
                fromPartial(object: Partial<_49.CapabilityOwners>): _49.CapabilityOwners;
                fromAmino(object: _49.CapabilityOwnersAmino): _49.CapabilityOwners;
                toAmino(message: _49.CapabilityOwners): _49.CapabilityOwnersAmino;
                fromAminoMsg(object: _49.CapabilityOwnersAminoMsg): _49.CapabilityOwners;
                toAminoMsg(message: _49.CapabilityOwners): _49.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _49.CapabilityOwnersProtoMsg): _49.CapabilityOwners;
                toProto(message: _49.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _49.CapabilityOwners): _49.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _227.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _52.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _52.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _52.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _52.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _52.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _52.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _52.MsgVerifyInvariant) => _52.MsgVerifyInvariantAmino;
                    fromAmino: (object: _52.MsgVerifyInvariantAmino) => _52.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _52.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.MsgVerifyInvariant;
                fromPartial(object: Partial<_52.MsgVerifyInvariant>): _52.MsgVerifyInvariant;
                fromAmino(object: _52.MsgVerifyInvariantAmino): _52.MsgVerifyInvariant;
                toAmino(message: _52.MsgVerifyInvariant): _52.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _52.MsgVerifyInvariantAminoMsg): _52.MsgVerifyInvariant;
                toAminoMsg(message: _52.MsgVerifyInvariant): _52.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _52.MsgVerifyInvariantProtoMsg): _52.MsgVerifyInvariant;
                toProto(message: _52.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _52.MsgVerifyInvariant): _52.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _52.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_52.MsgVerifyInvariantResponse>): _52.MsgVerifyInvariantResponse;
                fromAmino(_: _52.MsgVerifyInvariantResponseAmino): _52.MsgVerifyInvariantResponse;
                toAmino(_: _52.MsgVerifyInvariantResponse): _52.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _52.MsgVerifyInvariantResponseAminoMsg): _52.MsgVerifyInvariantResponse;
                toAminoMsg(message: _52.MsgVerifyInvariantResponse): _52.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _52.MsgVerifyInvariantResponseProtoMsg): _52.MsgVerifyInvariantResponse;
                toProto(message: _52.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _52.MsgVerifyInvariantResponse): _52.MsgVerifyInvariantResponseProtoMsg;
            };
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
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _53.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.PubKey;
                fromPartial(object: Partial<_53.PubKey>): _53.PubKey;
                fromAmino(object: _53.PubKeyAmino): _53.PubKey;
                toAmino(message: _53.PubKey): _53.PubKeyAmino;
                fromAminoMsg(object: _53.PubKeyAminoMsg): _53.PubKey;
                toAminoMsg(message: _53.PubKey): _53.PubKeyAminoMsg;
                fromProtoMsg(message: _53.PubKeyProtoMsg): _53.PubKey;
                toProto(message: _53.PubKey): Uint8Array;
                toProtoMsg(message: _53.PubKey): _53.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _53.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.PrivKey;
                fromPartial(object: Partial<_53.PrivKey>): _53.PrivKey;
                fromAmino(object: _53.PrivKeyAmino): _53.PrivKey;
                toAmino(message: _53.PrivKey): _53.PrivKeyAmino;
                fromAminoMsg(object: _53.PrivKeyAminoMsg): _53.PrivKey;
                toAminoMsg(message: _53.PrivKey): _53.PrivKeyAminoMsg;
                fromProtoMsg(message: _53.PrivKeyProtoMsg): _53.PrivKey;
                toProto(message: _53.PrivKey): Uint8Array;
                toProtoMsg(message: _53.PrivKey): _53.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _54.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.BIP44Params;
                    fromPartial(object: Partial<_54.BIP44Params>): _54.BIP44Params;
                    fromAmino(object: _54.BIP44ParamsAmino): _54.BIP44Params;
                    toAmino(message: _54.BIP44Params): _54.BIP44ParamsAmino;
                    fromAminoMsg(object: _54.BIP44ParamsAminoMsg): _54.BIP44Params;
                    toAminoMsg(message: _54.BIP44Params): _54.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _54.BIP44ParamsProtoMsg): _54.BIP44Params;
                    toProto(message: _54.BIP44Params): Uint8Array;
                    toProtoMsg(message: _54.BIP44Params): _54.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _55.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.Record;
                    fromPartial(object: Partial<_55.Record>): _55.Record;
                    fromAmino(object: _55.RecordAmino): _55.Record;
                    toAmino(message: _55.Record): _55.RecordAmino;
                    fromAminoMsg(object: _55.RecordAminoMsg): _55.Record;
                    toAminoMsg(message: _55.Record): _55.RecordAminoMsg;
                    fromProtoMsg(message: _55.RecordProtoMsg): _55.Record;
                    toProto(message: _55.Record): Uint8Array;
                    toProtoMsg(message: _55.Record): _55.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _55.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.Record_Local;
                    fromPartial(object: Partial<_55.Record_Local>): _55.Record_Local;
                    fromAmino(object: _55.Record_LocalAmino): _55.Record_Local;
                    toAmino(message: _55.Record_Local): _55.Record_LocalAmino;
                    fromAminoMsg(object: _55.Record_LocalAminoMsg): _55.Record_Local;
                    toAminoMsg(message: _55.Record_Local): _55.Record_LocalAminoMsg;
                    fromProtoMsg(message: _55.Record_LocalProtoMsg): _55.Record_Local;
                    toProto(message: _55.Record_Local): Uint8Array;
                    toProtoMsg(message: _55.Record_Local): _55.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _55.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.Record_Ledger;
                    fromPartial(object: Partial<_55.Record_Ledger>): _55.Record_Ledger;
                    fromAmino(object: _55.Record_LedgerAmino): _55.Record_Ledger;
                    toAmino(message: _55.Record_Ledger): _55.Record_LedgerAmino;
                    fromAminoMsg(object: _55.Record_LedgerAminoMsg): _55.Record_Ledger;
                    toAminoMsg(message: _55.Record_Ledger): _55.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _55.Record_LedgerProtoMsg): _55.Record_Ledger;
                    toProto(message: _55.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _55.Record_Ledger): _55.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _55.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _55.Record_Multi;
                    fromPartial(_: Partial<_55.Record_Multi>): _55.Record_Multi;
                    fromAmino(_: _55.Record_MultiAmino): _55.Record_Multi;
                    toAmino(_: _55.Record_Multi): _55.Record_MultiAmino;
                    fromAminoMsg(object: _55.Record_MultiAminoMsg): _55.Record_Multi;
                    toAminoMsg(message: _55.Record_Multi): _55.Record_MultiAminoMsg;
                    fromProtoMsg(message: _55.Record_MultiProtoMsg): _55.Record_Multi;
                    toProto(message: _55.Record_Multi): Uint8Array;
                    toProtoMsg(message: _55.Record_Multi): _55.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _55.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _55.Record_Offline;
                    fromPartial(_: Partial<_55.Record_Offline>): _55.Record_Offline;
                    fromAmino(_: _55.Record_OfflineAmino): _55.Record_Offline;
                    toAmino(_: _55.Record_Offline): _55.Record_OfflineAmino;
                    fromAminoMsg(object: _55.Record_OfflineAminoMsg): _55.Record_Offline;
                    toAminoMsg(message: _55.Record_Offline): _55.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _55.Record_OfflineProtoMsg): _55.Record_Offline;
                    toProto(message: _55.Record_Offline): Uint8Array;
                    toProtoMsg(message: _55.Record_Offline): _55.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _56.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.LegacyAminoPubKey;
                fromPartial(object: Partial<_56.LegacyAminoPubKey>): _56.LegacyAminoPubKey;
                fromAmino(object: _56.LegacyAminoPubKeyAmino): _56.LegacyAminoPubKey;
                toAmino(message: _56.LegacyAminoPubKey): _56.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _56.LegacyAminoPubKeyAminoMsg): _56.LegacyAminoPubKey;
                toAminoMsg(message: _56.LegacyAminoPubKey): _56.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _56.LegacyAminoPubKeyProtoMsg): _56.LegacyAminoPubKey;
                toProto(message: _56.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _56.LegacyAminoPubKey): _56.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _57.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.PubKey;
                fromPartial(object: Partial<_57.PubKey>): _57.PubKey;
                fromAmino(object: _57.PubKeyAmino): _57.PubKey;
                toAmino(message: _57.PubKey): _57.PubKeyAmino;
                fromAminoMsg(object: _57.PubKeyAminoMsg): _57.PubKey;
                toAminoMsg(message: _57.PubKey): _57.PubKeyAminoMsg;
                fromProtoMsg(message: _57.PubKeyProtoMsg): _57.PubKey;
                toProto(message: _57.PubKey): Uint8Array;
                toProtoMsg(message: _57.PubKey): _57.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _57.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.PrivKey;
                fromPartial(object: Partial<_57.PrivKey>): _57.PrivKey;
                fromAmino(object: _57.PrivKeyAmino): _57.PrivKey;
                toAmino(message: _57.PrivKey): _57.PrivKeyAmino;
                fromAminoMsg(object: _57.PrivKeyAminoMsg): _57.PrivKey;
                toAminoMsg(message: _57.PrivKey): _57.PrivKeyAminoMsg;
                fromProtoMsg(message: _57.PrivKeyProtoMsg): _57.PrivKey;
                toProto(message: _57.PrivKey): Uint8Array;
                toProtoMsg(message: _57.PrivKey): _57.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _58.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.PubKey;
                fromPartial(object: Partial<_58.PubKey>): _58.PubKey;
                fromAmino(object: _58.PubKeyAmino): _58.PubKey;
                toAmino(message: _58.PubKey): _58.PubKeyAmino;
                fromAminoMsg(object: _58.PubKeyAminoMsg): _58.PubKey;
                toAminoMsg(message: _58.PubKey): _58.PubKeyAminoMsg;
                fromProtoMsg(message: _58.PubKeyProtoMsg): _58.PubKey;
                toProto(message: _58.PubKey): Uint8Array;
                toProtoMsg(message: _58.PubKey): _58.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _58.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.PrivKey;
                fromPartial(object: Partial<_58.PrivKey>): _58.PrivKey;
                fromAmino(object: _58.PrivKeyAmino): _58.PrivKey;
                toAmino(message: _58.PrivKey): _58.PrivKeyAmino;
                fromAminoMsg(object: _58.PrivKeyAminoMsg): _58.PrivKey;
                toAminoMsg(message: _58.PrivKey): _58.PrivKeyAminoMsg;
                fromProtoMsg(message: _58.PrivKeyProtoMsg): _58.PrivKey;
                toProto(message: _58.PrivKey): Uint8Array;
                toProtoMsg(message: _58.PrivKey): _58.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _228.MsgClientImpl;
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                validatorOutstandingRewards(request: _61.QueryValidatorOutstandingRewardsRequest): Promise<_61.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _61.QueryValidatorCommissionRequest): Promise<_61.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _61.QueryValidatorSlashesRequest): Promise<_61.QueryValidatorSlashesResponse>;
                delegationRewards(request: _61.QueryDelegationRewardsRequest): Promise<_61.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _61.QueryDelegationTotalRewardsRequest): Promise<_61.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _61.QueryDelegatorValidatorsRequest): Promise<_61.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _61.QueryDelegatorWithdrawAddressRequest): Promise<_61.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _61.QueryCommunityPoolRequest): Promise<_61.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _193.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _62.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _62.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _62.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _62.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _62.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _62.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _62.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _62.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _62.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _62.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _62.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _62.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _62.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _62.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _62.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _62.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _62.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _62.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _62.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _62.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _62.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _62.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _62.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _62.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _62.MsgSetWithdrawAddress) => _62.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _62.MsgSetWithdrawAddressAmino) => _62.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _62.MsgWithdrawDelegatorReward) => _62.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _62.MsgWithdrawDelegatorRewardAmino) => _62.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _62.MsgWithdrawValidatorCommission) => _62.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _62.MsgWithdrawValidatorCommissionAmino) => _62.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _62.MsgFundCommunityPool) => _62.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _62.MsgFundCommunityPoolAmino) => _62.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _62.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_62.MsgSetWithdrawAddress>): _62.MsgSetWithdrawAddress;
                fromAmino(object: _62.MsgSetWithdrawAddressAmino): _62.MsgSetWithdrawAddress;
                toAmino(message: _62.MsgSetWithdrawAddress): _62.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _62.MsgSetWithdrawAddressAminoMsg): _62.MsgSetWithdrawAddress;
                toAminoMsg(message: _62.MsgSetWithdrawAddress): _62.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _62.MsgSetWithdrawAddressProtoMsg): _62.MsgSetWithdrawAddress;
                toProto(message: _62.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _62.MsgSetWithdrawAddress): _62.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _62.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_62.MsgSetWithdrawAddressResponse>): _62.MsgSetWithdrawAddressResponse;
                fromAmino(_: _62.MsgSetWithdrawAddressResponseAmino): _62.MsgSetWithdrawAddressResponse;
                toAmino(_: _62.MsgSetWithdrawAddressResponse): _62.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _62.MsgSetWithdrawAddressResponseAminoMsg): _62.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _62.MsgSetWithdrawAddressResponse): _62.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _62.MsgSetWithdrawAddressResponseProtoMsg): _62.MsgSetWithdrawAddressResponse;
                toProto(message: _62.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _62.MsgSetWithdrawAddressResponse): _62.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _62.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_62.MsgWithdrawDelegatorReward>): _62.MsgWithdrawDelegatorReward;
                fromAmino(object: _62.MsgWithdrawDelegatorRewardAmino): _62.MsgWithdrawDelegatorReward;
                toAmino(message: _62.MsgWithdrawDelegatorReward): _62.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _62.MsgWithdrawDelegatorRewardAminoMsg): _62.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _62.MsgWithdrawDelegatorReward): _62.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _62.MsgWithdrawDelegatorRewardProtoMsg): _62.MsgWithdrawDelegatorReward;
                toProto(message: _62.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _62.MsgWithdrawDelegatorReward): _62.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _62.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_62.MsgWithdrawDelegatorRewardResponse>): _62.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _62.MsgWithdrawDelegatorRewardResponseAmino): _62.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _62.MsgWithdrawDelegatorRewardResponse): _62.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _62.MsgWithdrawDelegatorRewardResponseAminoMsg): _62.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _62.MsgWithdrawDelegatorRewardResponse): _62.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _62.MsgWithdrawDelegatorRewardResponseProtoMsg): _62.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _62.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _62.MsgWithdrawDelegatorRewardResponse): _62.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _62.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_62.MsgWithdrawValidatorCommission>): _62.MsgWithdrawValidatorCommission;
                fromAmino(object: _62.MsgWithdrawValidatorCommissionAmino): _62.MsgWithdrawValidatorCommission;
                toAmino(message: _62.MsgWithdrawValidatorCommission): _62.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _62.MsgWithdrawValidatorCommissionAminoMsg): _62.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _62.MsgWithdrawValidatorCommission): _62.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _62.MsgWithdrawValidatorCommissionProtoMsg): _62.MsgWithdrawValidatorCommission;
                toProto(message: _62.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _62.MsgWithdrawValidatorCommission): _62.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _62.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_62.MsgWithdrawValidatorCommissionResponse>): _62.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _62.MsgWithdrawValidatorCommissionResponseAmino): _62.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _62.MsgWithdrawValidatorCommissionResponse): _62.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _62.MsgWithdrawValidatorCommissionResponseAminoMsg): _62.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _62.MsgWithdrawValidatorCommissionResponse): _62.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _62.MsgWithdrawValidatorCommissionResponseProtoMsg): _62.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _62.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _62.MsgWithdrawValidatorCommissionResponse): _62.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _62.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgFundCommunityPool;
                fromPartial(object: Partial<_62.MsgFundCommunityPool>): _62.MsgFundCommunityPool;
                fromAmino(object: _62.MsgFundCommunityPoolAmino): _62.MsgFundCommunityPool;
                toAmino(message: _62.MsgFundCommunityPool): _62.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _62.MsgFundCommunityPoolAminoMsg): _62.MsgFundCommunityPool;
                toAminoMsg(message: _62.MsgFundCommunityPool): _62.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _62.MsgFundCommunityPoolProtoMsg): _62.MsgFundCommunityPool;
                toProto(message: _62.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _62.MsgFundCommunityPool): _62.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _62.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_62.MsgFundCommunityPoolResponse>): _62.MsgFundCommunityPoolResponse;
                fromAmino(_: _62.MsgFundCommunityPoolResponseAmino): _62.MsgFundCommunityPoolResponse;
                toAmino(_: _62.MsgFundCommunityPoolResponse): _62.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _62.MsgFundCommunityPoolResponseAminoMsg): _62.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _62.MsgFundCommunityPoolResponse): _62.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _62.MsgFundCommunityPoolResponseProtoMsg): _62.MsgFundCommunityPoolResponse;
                toProto(message: _62.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _62.MsgFundCommunityPoolResponse): _62.MsgFundCommunityPoolResponseProtoMsg;
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
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _61.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_61.QueryValidatorOutstandingRewardsRequest>): _61.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _61.QueryValidatorOutstandingRewardsRequestAmino): _61.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _61.QueryValidatorOutstandingRewardsRequest): _61.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _61.QueryValidatorOutstandingRewardsRequestAminoMsg): _61.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _61.QueryValidatorOutstandingRewardsRequest): _61.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _61.QueryValidatorOutstandingRewardsRequestProtoMsg): _61.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _61.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _61.QueryValidatorOutstandingRewardsRequest): _61.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _61.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_61.QueryValidatorOutstandingRewardsResponse>): _61.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _61.QueryValidatorOutstandingRewardsResponseAmino): _61.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _61.QueryValidatorOutstandingRewardsResponse): _61.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _61.QueryValidatorOutstandingRewardsResponseAminoMsg): _61.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _61.QueryValidatorOutstandingRewardsResponse): _61.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _61.QueryValidatorOutstandingRewardsResponseProtoMsg): _61.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _61.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _61.QueryValidatorOutstandingRewardsResponse): _61.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _61.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_61.QueryValidatorCommissionRequest>): _61.QueryValidatorCommissionRequest;
                fromAmino(object: _61.QueryValidatorCommissionRequestAmino): _61.QueryValidatorCommissionRequest;
                toAmino(message: _61.QueryValidatorCommissionRequest): _61.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _61.QueryValidatorCommissionRequestAminoMsg): _61.QueryValidatorCommissionRequest;
                toAminoMsg(message: _61.QueryValidatorCommissionRequest): _61.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _61.QueryValidatorCommissionRequestProtoMsg): _61.QueryValidatorCommissionRequest;
                toProto(message: _61.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _61.QueryValidatorCommissionRequest): _61.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _61.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_61.QueryValidatorCommissionResponse>): _61.QueryValidatorCommissionResponse;
                fromAmino(object: _61.QueryValidatorCommissionResponseAmino): _61.QueryValidatorCommissionResponse;
                toAmino(message: _61.QueryValidatorCommissionResponse): _61.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _61.QueryValidatorCommissionResponseAminoMsg): _61.QueryValidatorCommissionResponse;
                toAminoMsg(message: _61.QueryValidatorCommissionResponse): _61.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _61.QueryValidatorCommissionResponseProtoMsg): _61.QueryValidatorCommissionResponse;
                toProto(message: _61.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _61.QueryValidatorCommissionResponse): _61.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _61.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_61.QueryValidatorSlashesRequest>): _61.QueryValidatorSlashesRequest;
                fromAmino(object: _61.QueryValidatorSlashesRequestAmino): _61.QueryValidatorSlashesRequest;
                toAmino(message: _61.QueryValidatorSlashesRequest): _61.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _61.QueryValidatorSlashesRequestAminoMsg): _61.QueryValidatorSlashesRequest;
                toAminoMsg(message: _61.QueryValidatorSlashesRequest): _61.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _61.QueryValidatorSlashesRequestProtoMsg): _61.QueryValidatorSlashesRequest;
                toProto(message: _61.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _61.QueryValidatorSlashesRequest): _61.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _61.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_61.QueryValidatorSlashesResponse>): _61.QueryValidatorSlashesResponse;
                fromAmino(object: _61.QueryValidatorSlashesResponseAmino): _61.QueryValidatorSlashesResponse;
                toAmino(message: _61.QueryValidatorSlashesResponse): _61.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _61.QueryValidatorSlashesResponseAminoMsg): _61.QueryValidatorSlashesResponse;
                toAminoMsg(message: _61.QueryValidatorSlashesResponse): _61.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _61.QueryValidatorSlashesResponseProtoMsg): _61.QueryValidatorSlashesResponse;
                toProto(message: _61.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _61.QueryValidatorSlashesResponse): _61.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _61.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_61.QueryDelegationRewardsRequest>): _61.QueryDelegationRewardsRequest;
                fromAmino(object: _61.QueryDelegationRewardsRequestAmino): _61.QueryDelegationRewardsRequest;
                toAmino(message: _61.QueryDelegationRewardsRequest): _61.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _61.QueryDelegationRewardsRequestAminoMsg): _61.QueryDelegationRewardsRequest;
                toAminoMsg(message: _61.QueryDelegationRewardsRequest): _61.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _61.QueryDelegationRewardsRequestProtoMsg): _61.QueryDelegationRewardsRequest;
                toProto(message: _61.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _61.QueryDelegationRewardsRequest): _61.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _61.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_61.QueryDelegationRewardsResponse>): _61.QueryDelegationRewardsResponse;
                fromAmino(object: _61.QueryDelegationRewardsResponseAmino): _61.QueryDelegationRewardsResponse;
                toAmino(message: _61.QueryDelegationRewardsResponse): _61.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _61.QueryDelegationRewardsResponseAminoMsg): _61.QueryDelegationRewardsResponse;
                toAminoMsg(message: _61.QueryDelegationRewardsResponse): _61.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _61.QueryDelegationRewardsResponseProtoMsg): _61.QueryDelegationRewardsResponse;
                toProto(message: _61.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _61.QueryDelegationRewardsResponse): _61.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _61.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_61.QueryDelegationTotalRewardsRequest>): _61.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _61.QueryDelegationTotalRewardsRequestAmino): _61.QueryDelegationTotalRewardsRequest;
                toAmino(message: _61.QueryDelegationTotalRewardsRequest): _61.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _61.QueryDelegationTotalRewardsRequestAminoMsg): _61.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _61.QueryDelegationTotalRewardsRequest): _61.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _61.QueryDelegationTotalRewardsRequestProtoMsg): _61.QueryDelegationTotalRewardsRequest;
                toProto(message: _61.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _61.QueryDelegationTotalRewardsRequest): _61.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _61.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_61.QueryDelegationTotalRewardsResponse>): _61.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _61.QueryDelegationTotalRewardsResponseAmino): _61.QueryDelegationTotalRewardsResponse;
                toAmino(message: _61.QueryDelegationTotalRewardsResponse): _61.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _61.QueryDelegationTotalRewardsResponseAminoMsg): _61.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _61.QueryDelegationTotalRewardsResponse): _61.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _61.QueryDelegationTotalRewardsResponseProtoMsg): _61.QueryDelegationTotalRewardsResponse;
                toProto(message: _61.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _61.QueryDelegationTotalRewardsResponse): _61.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _61.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_61.QueryDelegatorValidatorsRequest>): _61.QueryDelegatorValidatorsRequest;
                fromAmino(object: _61.QueryDelegatorValidatorsRequestAmino): _61.QueryDelegatorValidatorsRequest;
                toAmino(message: _61.QueryDelegatorValidatorsRequest): _61.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _61.QueryDelegatorValidatorsRequestAminoMsg): _61.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _61.QueryDelegatorValidatorsRequest): _61.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _61.QueryDelegatorValidatorsRequestProtoMsg): _61.QueryDelegatorValidatorsRequest;
                toProto(message: _61.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _61.QueryDelegatorValidatorsRequest): _61.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _61.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_61.QueryDelegatorValidatorsResponse>): _61.QueryDelegatorValidatorsResponse;
                fromAmino(object: _61.QueryDelegatorValidatorsResponseAmino): _61.QueryDelegatorValidatorsResponse;
                toAmino(message: _61.QueryDelegatorValidatorsResponse): _61.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _61.QueryDelegatorValidatorsResponseAminoMsg): _61.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _61.QueryDelegatorValidatorsResponse): _61.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _61.QueryDelegatorValidatorsResponseProtoMsg): _61.QueryDelegatorValidatorsResponse;
                toProto(message: _61.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _61.QueryDelegatorValidatorsResponse): _61.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _61.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_61.QueryDelegatorWithdrawAddressRequest>): _61.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _61.QueryDelegatorWithdrawAddressRequestAmino): _61.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _61.QueryDelegatorWithdrawAddressRequest): _61.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _61.QueryDelegatorWithdrawAddressRequestAminoMsg): _61.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _61.QueryDelegatorWithdrawAddressRequest): _61.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _61.QueryDelegatorWithdrawAddressRequestProtoMsg): _61.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _61.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _61.QueryDelegatorWithdrawAddressRequest): _61.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _61.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_61.QueryDelegatorWithdrawAddressResponse>): _61.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _61.QueryDelegatorWithdrawAddressResponseAmino): _61.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _61.QueryDelegatorWithdrawAddressResponse): _61.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _61.QueryDelegatorWithdrawAddressResponseAminoMsg): _61.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _61.QueryDelegatorWithdrawAddressResponse): _61.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _61.QueryDelegatorWithdrawAddressResponseProtoMsg): _61.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _61.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _61.QueryDelegatorWithdrawAddressResponse): _61.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _61.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _61.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_61.QueryCommunityPoolRequest>): _61.QueryCommunityPoolRequest;
                fromAmino(_: _61.QueryCommunityPoolRequestAmino): _61.QueryCommunityPoolRequest;
                toAmino(_: _61.QueryCommunityPoolRequest): _61.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _61.QueryCommunityPoolRequestAminoMsg): _61.QueryCommunityPoolRequest;
                toAminoMsg(message: _61.QueryCommunityPoolRequest): _61.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _61.QueryCommunityPoolRequestProtoMsg): _61.QueryCommunityPoolRequest;
                toProto(message: _61.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _61.QueryCommunityPoolRequest): _61.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _61.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_61.QueryCommunityPoolResponse>): _61.QueryCommunityPoolResponse;
                fromAmino(object: _61.QueryCommunityPoolResponseAmino): _61.QueryCommunityPoolResponse;
                toAmino(message: _61.QueryCommunityPoolResponse): _61.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _61.QueryCommunityPoolResponseAminoMsg): _61.QueryCommunityPoolResponse;
                toAminoMsg(message: _61.QueryCommunityPoolResponse): _61.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _61.QueryCommunityPoolResponseProtoMsg): _61.QueryCommunityPoolResponse;
                toProto(message: _61.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _61.QueryCommunityPoolResponse): _61.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _60.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_60.DelegatorWithdrawInfo>): _60.DelegatorWithdrawInfo;
                fromAmino(object: _60.DelegatorWithdrawInfoAmino): _60.DelegatorWithdrawInfo;
                toAmino(message: _60.DelegatorWithdrawInfo): _60.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _60.DelegatorWithdrawInfoAminoMsg): _60.DelegatorWithdrawInfo;
                toAminoMsg(message: _60.DelegatorWithdrawInfo): _60.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _60.DelegatorWithdrawInfoProtoMsg): _60.DelegatorWithdrawInfo;
                toProto(message: _60.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _60.DelegatorWithdrawInfo): _60.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _60.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_60.ValidatorOutstandingRewardsRecord>): _60.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _60.ValidatorOutstandingRewardsRecordAmino): _60.ValidatorOutstandingRewardsRecord;
                toAmino(message: _60.ValidatorOutstandingRewardsRecord): _60.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _60.ValidatorOutstandingRewardsRecordAminoMsg): _60.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _60.ValidatorOutstandingRewardsRecord): _60.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _60.ValidatorOutstandingRewardsRecordProtoMsg): _60.ValidatorOutstandingRewardsRecord;
                toProto(message: _60.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _60.ValidatorOutstandingRewardsRecord): _60.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _60.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_60.ValidatorAccumulatedCommissionRecord>): _60.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _60.ValidatorAccumulatedCommissionRecordAmino): _60.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _60.ValidatorAccumulatedCommissionRecord): _60.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _60.ValidatorAccumulatedCommissionRecordAminoMsg): _60.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _60.ValidatorAccumulatedCommissionRecord): _60.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _60.ValidatorAccumulatedCommissionRecordProtoMsg): _60.ValidatorAccumulatedCommissionRecord;
                toProto(message: _60.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _60.ValidatorAccumulatedCommissionRecord): _60.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _60.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_60.ValidatorHistoricalRewardsRecord>): _60.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _60.ValidatorHistoricalRewardsRecordAmino): _60.ValidatorHistoricalRewardsRecord;
                toAmino(message: _60.ValidatorHistoricalRewardsRecord): _60.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _60.ValidatorHistoricalRewardsRecordAminoMsg): _60.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _60.ValidatorHistoricalRewardsRecord): _60.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _60.ValidatorHistoricalRewardsRecordProtoMsg): _60.ValidatorHistoricalRewardsRecord;
                toProto(message: _60.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _60.ValidatorHistoricalRewardsRecord): _60.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _60.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_60.ValidatorCurrentRewardsRecord>): _60.ValidatorCurrentRewardsRecord;
                fromAmino(object: _60.ValidatorCurrentRewardsRecordAmino): _60.ValidatorCurrentRewardsRecord;
                toAmino(message: _60.ValidatorCurrentRewardsRecord): _60.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _60.ValidatorCurrentRewardsRecordAminoMsg): _60.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _60.ValidatorCurrentRewardsRecord): _60.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _60.ValidatorCurrentRewardsRecordProtoMsg): _60.ValidatorCurrentRewardsRecord;
                toProto(message: _60.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _60.ValidatorCurrentRewardsRecord): _60.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _60.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_60.DelegatorStartingInfoRecord>): _60.DelegatorStartingInfoRecord;
                fromAmino(object: _60.DelegatorStartingInfoRecordAmino): _60.DelegatorStartingInfoRecord;
                toAmino(message: _60.DelegatorStartingInfoRecord): _60.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _60.DelegatorStartingInfoRecordAminoMsg): _60.DelegatorStartingInfoRecord;
                toAminoMsg(message: _60.DelegatorStartingInfoRecord): _60.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _60.DelegatorStartingInfoRecordProtoMsg): _60.DelegatorStartingInfoRecord;
                toProto(message: _60.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _60.DelegatorStartingInfoRecord): _60.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _60.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_60.ValidatorSlashEventRecord>): _60.ValidatorSlashEventRecord;
                fromAmino(object: _60.ValidatorSlashEventRecordAmino): _60.ValidatorSlashEventRecord;
                toAmino(message: _60.ValidatorSlashEventRecord): _60.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _60.ValidatorSlashEventRecordAminoMsg): _60.ValidatorSlashEventRecord;
                toAminoMsg(message: _60.ValidatorSlashEventRecord): _60.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _60.ValidatorSlashEventRecordProtoMsg): _60.ValidatorSlashEventRecord;
                toProto(message: _60.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _60.ValidatorSlashEventRecord): _60.ValidatorSlashEventRecordProtoMsg;
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
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _59.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_59.ValidatorHistoricalRewards>): _59.ValidatorHistoricalRewards;
                fromAmino(object: _59.ValidatorHistoricalRewardsAmino): _59.ValidatorHistoricalRewards;
                toAmino(message: _59.ValidatorHistoricalRewards): _59.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _59.ValidatorHistoricalRewardsAminoMsg): _59.ValidatorHistoricalRewards;
                toAminoMsg(message: _59.ValidatorHistoricalRewards): _59.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _59.ValidatorHistoricalRewardsProtoMsg): _59.ValidatorHistoricalRewards;
                toProto(message: _59.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _59.ValidatorHistoricalRewards): _59.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _59.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.ValidatorCurrentRewards;
                fromPartial(object: Partial<_59.ValidatorCurrentRewards>): _59.ValidatorCurrentRewards;
                fromAmino(object: _59.ValidatorCurrentRewardsAmino): _59.ValidatorCurrentRewards;
                toAmino(message: _59.ValidatorCurrentRewards): _59.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _59.ValidatorCurrentRewardsAminoMsg): _59.ValidatorCurrentRewards;
                toAminoMsg(message: _59.ValidatorCurrentRewards): _59.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _59.ValidatorCurrentRewardsProtoMsg): _59.ValidatorCurrentRewards;
                toProto(message: _59.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _59.ValidatorCurrentRewards): _59.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _59.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_59.ValidatorAccumulatedCommission>): _59.ValidatorAccumulatedCommission;
                fromAmino(object: _59.ValidatorAccumulatedCommissionAmino): _59.ValidatorAccumulatedCommission;
                toAmino(message: _59.ValidatorAccumulatedCommission): _59.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _59.ValidatorAccumulatedCommissionAminoMsg): _59.ValidatorAccumulatedCommission;
                toAminoMsg(message: _59.ValidatorAccumulatedCommission): _59.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _59.ValidatorAccumulatedCommissionProtoMsg): _59.ValidatorAccumulatedCommission;
                toProto(message: _59.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _59.ValidatorAccumulatedCommission): _59.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _59.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_59.ValidatorOutstandingRewards>): _59.ValidatorOutstandingRewards;
                fromAmino(object: _59.ValidatorOutstandingRewardsAmino): _59.ValidatorOutstandingRewards;
                toAmino(message: _59.ValidatorOutstandingRewards): _59.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _59.ValidatorOutstandingRewardsAminoMsg): _59.ValidatorOutstandingRewards;
                toAminoMsg(message: _59.ValidatorOutstandingRewards): _59.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _59.ValidatorOutstandingRewardsProtoMsg): _59.ValidatorOutstandingRewards;
                toProto(message: _59.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _59.ValidatorOutstandingRewards): _59.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _59.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.ValidatorSlashEvent;
                fromPartial(object: Partial<_59.ValidatorSlashEvent>): _59.ValidatorSlashEvent;
                fromAmino(object: _59.ValidatorSlashEventAmino): _59.ValidatorSlashEvent;
                toAmino(message: _59.ValidatorSlashEvent): _59.ValidatorSlashEventAmino;
                fromAminoMsg(object: _59.ValidatorSlashEventAminoMsg): _59.ValidatorSlashEvent;
                toAminoMsg(message: _59.ValidatorSlashEvent): _59.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _59.ValidatorSlashEventProtoMsg): _59.ValidatorSlashEvent;
                toProto(message: _59.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _59.ValidatorSlashEvent): _59.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _59.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.ValidatorSlashEvents;
                fromPartial(object: Partial<_59.ValidatorSlashEvents>): _59.ValidatorSlashEvents;
                fromAmino(object: _59.ValidatorSlashEventsAmino): _59.ValidatorSlashEvents;
                toAmino(message: _59.ValidatorSlashEvents): _59.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _59.ValidatorSlashEventsAminoMsg): _59.ValidatorSlashEvents;
                toAminoMsg(message: _59.ValidatorSlashEvents): _59.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _59.ValidatorSlashEventsProtoMsg): _59.ValidatorSlashEvents;
                toProto(message: _59.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _59.ValidatorSlashEvents): _59.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _59.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.FeePool;
                fromPartial(object: Partial<_59.FeePool>): _59.FeePool;
                fromAmino(object: _59.FeePoolAmino): _59.FeePool;
                toAmino(message: _59.FeePool): _59.FeePoolAmino;
                fromAminoMsg(object: _59.FeePoolAminoMsg): _59.FeePool;
                toAminoMsg(message: _59.FeePool): _59.FeePoolAminoMsg;
                fromProtoMsg(message: _59.FeePoolProtoMsg): _59.FeePool;
                toProto(message: _59.FeePool): Uint8Array;
                toProtoMsg(message: _59.FeePool): _59.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _59.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_59.CommunityPoolSpendProposal>): _59.CommunityPoolSpendProposal;
                fromAmino(object: _59.CommunityPoolSpendProposalAmino): _59.CommunityPoolSpendProposal;
                toAmino(message: _59.CommunityPoolSpendProposal): _59.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _59.CommunityPoolSpendProposalAminoMsg): _59.CommunityPoolSpendProposal;
                toAminoMsg(message: _59.CommunityPoolSpendProposal): _59.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _59.CommunityPoolSpendProposalProtoMsg): _59.CommunityPoolSpendProposal;
                toProto(message: _59.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _59.CommunityPoolSpendProposal): _59.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _59.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.DelegatorStartingInfo;
                fromPartial(object: Partial<_59.DelegatorStartingInfo>): _59.DelegatorStartingInfo;
                fromAmino(object: _59.DelegatorStartingInfoAmino): _59.DelegatorStartingInfo;
                toAmino(message: _59.DelegatorStartingInfo): _59.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _59.DelegatorStartingInfoAminoMsg): _59.DelegatorStartingInfo;
                toAminoMsg(message: _59.DelegatorStartingInfo): _59.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _59.DelegatorStartingInfoProtoMsg): _59.DelegatorStartingInfo;
                toProto(message: _59.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _59.DelegatorStartingInfo): _59.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _59.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.DelegationDelegatorReward;
                fromPartial(object: Partial<_59.DelegationDelegatorReward>): _59.DelegationDelegatorReward;
                fromAmino(object: _59.DelegationDelegatorRewardAmino): _59.DelegationDelegatorReward;
                toAmino(message: _59.DelegationDelegatorReward): _59.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _59.DelegationDelegatorRewardAminoMsg): _59.DelegationDelegatorReward;
                toAminoMsg(message: _59.DelegationDelegatorReward): _59.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _59.DelegationDelegatorRewardProtoMsg): _59.DelegationDelegatorReward;
                toProto(message: _59.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _59.DelegationDelegatorReward): _59.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _59.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_59.CommunityPoolSpendProposalWithDeposit>): _59.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _59.CommunityPoolSpendProposalWithDepositAmino): _59.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _59.CommunityPoolSpendProposalWithDeposit): _59.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _59.CommunityPoolSpendProposalWithDepositAminoMsg): _59.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _59.CommunityPoolSpendProposalWithDeposit): _59.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _59.CommunityPoolSpendProposalWithDepositProtoMsg): _59.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _59.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _59.CommunityPoolSpendProposalWithDeposit): _59.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _229.MsgClientImpl;
            QueryClientImpl: typeof _213.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                evidence(request: _65.QueryEvidenceRequest): Promise<_65.QueryEvidenceResponse>;
                allEvidence(request?: _65.QueryAllEvidenceRequest): Promise<_65.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _194.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _66.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _66.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _66.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _66.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _66.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _66.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _66.MsgSubmitEvidence) => _66.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _66.MsgSubmitEvidenceAmino) => _66.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _66.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.MsgSubmitEvidence;
                fromPartial(object: Partial<_66.MsgSubmitEvidence>): _66.MsgSubmitEvidence;
                fromAmino(object: _66.MsgSubmitEvidenceAmino): _66.MsgSubmitEvidence;
                toAmino(message: _66.MsgSubmitEvidence): _66.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _66.MsgSubmitEvidenceAminoMsg): _66.MsgSubmitEvidence;
                toAminoMsg(message: _66.MsgSubmitEvidence): _66.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _66.MsgSubmitEvidenceProtoMsg): _66.MsgSubmitEvidence;
                toProto(message: _66.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _66.MsgSubmitEvidence): _66.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _66.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_66.MsgSubmitEvidenceResponse>): _66.MsgSubmitEvidenceResponse;
                fromAmino(object: _66.MsgSubmitEvidenceResponseAmino): _66.MsgSubmitEvidenceResponse;
                toAmino(message: _66.MsgSubmitEvidenceResponse): _66.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _66.MsgSubmitEvidenceResponseAminoMsg): _66.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _66.MsgSubmitEvidenceResponse): _66.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _66.MsgSubmitEvidenceResponseProtoMsg): _66.MsgSubmitEvidenceResponse;
                toProto(message: _66.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _66.MsgSubmitEvidenceResponse): _66.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _65.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryEvidenceRequest;
                fromPartial(object: Partial<_65.QueryEvidenceRequest>): _65.QueryEvidenceRequest;
                fromAmino(object: _65.QueryEvidenceRequestAmino): _65.QueryEvidenceRequest;
                toAmino(message: _65.QueryEvidenceRequest): _65.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _65.QueryEvidenceRequestAminoMsg): _65.QueryEvidenceRequest;
                toAminoMsg(message: _65.QueryEvidenceRequest): _65.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _65.QueryEvidenceRequestProtoMsg): _65.QueryEvidenceRequest;
                toProto(message: _65.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _65.QueryEvidenceRequest): _65.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _65.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryEvidenceResponse;
                fromPartial(object: Partial<_65.QueryEvidenceResponse>): _65.QueryEvidenceResponse;
                fromAmino(object: _65.QueryEvidenceResponseAmino): _65.QueryEvidenceResponse;
                toAmino(message: _65.QueryEvidenceResponse): _65.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _65.QueryEvidenceResponseAminoMsg): _65.QueryEvidenceResponse;
                toAminoMsg(message: _65.QueryEvidenceResponse): _65.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _65.QueryEvidenceResponseProtoMsg): _65.QueryEvidenceResponse;
                toProto(message: _65.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _65.QueryEvidenceResponse): _65.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _65.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_65.QueryAllEvidenceRequest>): _65.QueryAllEvidenceRequest;
                fromAmino(object: _65.QueryAllEvidenceRequestAmino): _65.QueryAllEvidenceRequest;
                toAmino(message: _65.QueryAllEvidenceRequest): _65.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _65.QueryAllEvidenceRequestAminoMsg): _65.QueryAllEvidenceRequest;
                toAminoMsg(message: _65.QueryAllEvidenceRequest): _65.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _65.QueryAllEvidenceRequestProtoMsg): _65.QueryAllEvidenceRequest;
                toProto(message: _65.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _65.QueryAllEvidenceRequest): _65.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _65.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_65.QueryAllEvidenceResponse>): _65.QueryAllEvidenceResponse;
                fromAmino(object: _65.QueryAllEvidenceResponseAmino): _65.QueryAllEvidenceResponse;
                toAmino(message: _65.QueryAllEvidenceResponse): _65.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _65.QueryAllEvidenceResponseAminoMsg): _65.QueryAllEvidenceResponse;
                toAminoMsg(message: _65.QueryAllEvidenceResponse): _65.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _65.QueryAllEvidenceResponseProtoMsg): _65.QueryAllEvidenceResponse;
                toProto(message: _65.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _65.QueryAllEvidenceResponse): _65.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _63.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.Equivocation;
                fromPartial(object: Partial<_63.Equivocation>): _63.Equivocation;
                fromAmino(object: _63.EquivocationAmino): _63.Equivocation;
                toAmino(message: _63.Equivocation): _63.EquivocationAmino;
                fromAminoMsg(object: _63.EquivocationAminoMsg): _63.Equivocation;
                toAminoMsg(message: _63.Equivocation): _63.EquivocationAminoMsg;
                fromProtoMsg(message: _63.EquivocationProtoMsg): _63.Equivocation;
                toProto(message: _63.Equivocation): Uint8Array;
                toProtoMsg(message: _63.Equivocation): _63.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _230.MsgClientImpl;
            QueryClientImpl: typeof _214.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                allowance(request: _69.QueryAllowanceRequest): Promise<_69.QueryAllowanceResponse>;
                allowances(request: _69.QueryAllowancesRequest): Promise<_69.QueryAllowancesResponse>;
                allowancesByGranter(request: _69.QueryAllowancesByGranterRequest): Promise<_69.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _195.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _70.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _70.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _70.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _70.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _70.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _70.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _70.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _70.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _70.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _70.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _70.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _70.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _70.MsgGrantAllowance) => _70.MsgGrantAllowanceAmino;
                    fromAmino: (object: _70.MsgGrantAllowanceAmino) => _70.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _70.MsgRevokeAllowance) => _70.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _70.MsgRevokeAllowanceAmino) => _70.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _70.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgGrantAllowance;
                fromPartial(object: Partial<_70.MsgGrantAllowance>): _70.MsgGrantAllowance;
                fromAmino(object: _70.MsgGrantAllowanceAmino): _70.MsgGrantAllowance;
                toAmino(message: _70.MsgGrantAllowance): _70.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _70.MsgGrantAllowanceAminoMsg): _70.MsgGrantAllowance;
                toAminoMsg(message: _70.MsgGrantAllowance): _70.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _70.MsgGrantAllowanceProtoMsg): _70.MsgGrantAllowance;
                toProto(message: _70.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _70.MsgGrantAllowance): _70.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _70.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _70.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_70.MsgGrantAllowanceResponse>): _70.MsgGrantAllowanceResponse;
                fromAmino(_: _70.MsgGrantAllowanceResponseAmino): _70.MsgGrantAllowanceResponse;
                toAmino(_: _70.MsgGrantAllowanceResponse): _70.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _70.MsgGrantAllowanceResponseAminoMsg): _70.MsgGrantAllowanceResponse;
                toAminoMsg(message: _70.MsgGrantAllowanceResponse): _70.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _70.MsgGrantAllowanceResponseProtoMsg): _70.MsgGrantAllowanceResponse;
                toProto(message: _70.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _70.MsgGrantAllowanceResponse): _70.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _70.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgRevokeAllowance;
                fromPartial(object: Partial<_70.MsgRevokeAllowance>): _70.MsgRevokeAllowance;
                fromAmino(object: _70.MsgRevokeAllowanceAmino): _70.MsgRevokeAllowance;
                toAmino(message: _70.MsgRevokeAllowance): _70.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _70.MsgRevokeAllowanceAminoMsg): _70.MsgRevokeAllowance;
                toAminoMsg(message: _70.MsgRevokeAllowance): _70.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _70.MsgRevokeAllowanceProtoMsg): _70.MsgRevokeAllowance;
                toProto(message: _70.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _70.MsgRevokeAllowance): _70.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _70.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _70.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_70.MsgRevokeAllowanceResponse>): _70.MsgRevokeAllowanceResponse;
                fromAmino(_: _70.MsgRevokeAllowanceResponseAmino): _70.MsgRevokeAllowanceResponse;
                toAmino(_: _70.MsgRevokeAllowanceResponse): _70.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _70.MsgRevokeAllowanceResponseAminoMsg): _70.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _70.MsgRevokeAllowanceResponse): _70.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _70.MsgRevokeAllowanceResponseProtoMsg): _70.MsgRevokeAllowanceResponse;
                toProto(message: _70.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _70.MsgRevokeAllowanceResponse): _70.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _67.BasicAllowance | _67.PeriodicAllowance | _67.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _69.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryAllowanceRequest;
                fromPartial(object: Partial<_69.QueryAllowanceRequest>): _69.QueryAllowanceRequest;
                fromAmino(object: _69.QueryAllowanceRequestAmino): _69.QueryAllowanceRequest;
                toAmino(message: _69.QueryAllowanceRequest): _69.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _69.QueryAllowanceRequestAminoMsg): _69.QueryAllowanceRequest;
                toAminoMsg(message: _69.QueryAllowanceRequest): _69.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _69.QueryAllowanceRequestProtoMsg): _69.QueryAllowanceRequest;
                toProto(message: _69.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _69.QueryAllowanceRequest): _69.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _69.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryAllowanceResponse;
                fromPartial(object: Partial<_69.QueryAllowanceResponse>): _69.QueryAllowanceResponse;
                fromAmino(object: _69.QueryAllowanceResponseAmino): _69.QueryAllowanceResponse;
                toAmino(message: _69.QueryAllowanceResponse): _69.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _69.QueryAllowanceResponseAminoMsg): _69.QueryAllowanceResponse;
                toAminoMsg(message: _69.QueryAllowanceResponse): _69.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _69.QueryAllowanceResponseProtoMsg): _69.QueryAllowanceResponse;
                toProto(message: _69.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _69.QueryAllowanceResponse): _69.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _69.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryAllowancesRequest;
                fromPartial(object: Partial<_69.QueryAllowancesRequest>): _69.QueryAllowancesRequest;
                fromAmino(object: _69.QueryAllowancesRequestAmino): _69.QueryAllowancesRequest;
                toAmino(message: _69.QueryAllowancesRequest): _69.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _69.QueryAllowancesRequestAminoMsg): _69.QueryAllowancesRequest;
                toAminoMsg(message: _69.QueryAllowancesRequest): _69.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _69.QueryAllowancesRequestProtoMsg): _69.QueryAllowancesRequest;
                toProto(message: _69.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _69.QueryAllowancesRequest): _69.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _69.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryAllowancesResponse;
                fromPartial(object: Partial<_69.QueryAllowancesResponse>): _69.QueryAllowancesResponse;
                fromAmino(object: _69.QueryAllowancesResponseAmino): _69.QueryAllowancesResponse;
                toAmino(message: _69.QueryAllowancesResponse): _69.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _69.QueryAllowancesResponseAminoMsg): _69.QueryAllowancesResponse;
                toAminoMsg(message: _69.QueryAllowancesResponse): _69.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _69.QueryAllowancesResponseProtoMsg): _69.QueryAllowancesResponse;
                toProto(message: _69.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _69.QueryAllowancesResponse): _69.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _69.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_69.QueryAllowancesByGranterRequest>): _69.QueryAllowancesByGranterRequest;
                fromAmino(object: _69.QueryAllowancesByGranterRequestAmino): _69.QueryAllowancesByGranterRequest;
                toAmino(message: _69.QueryAllowancesByGranterRequest): _69.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _69.QueryAllowancesByGranterRequestAminoMsg): _69.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _69.QueryAllowancesByGranterRequest): _69.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _69.QueryAllowancesByGranterRequestProtoMsg): _69.QueryAllowancesByGranterRequest;
                toProto(message: _69.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _69.QueryAllowancesByGranterRequest): _69.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _69.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_69.QueryAllowancesByGranterResponse>): _69.QueryAllowancesByGranterResponse;
                fromAmino(object: _69.QueryAllowancesByGranterResponseAmino): _69.QueryAllowancesByGranterResponse;
                toAmino(message: _69.QueryAllowancesByGranterResponse): _69.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _69.QueryAllowancesByGranterResponseAminoMsg): _69.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _69.QueryAllowancesByGranterResponse): _69.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _69.QueryAllowancesByGranterResponseProtoMsg): _69.QueryAllowancesByGranterResponse;
                toProto(message: _69.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _69.QueryAllowancesByGranterResponse): _69.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _67.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.BasicAllowance;
                fromPartial(object: Partial<_67.BasicAllowance>): _67.BasicAllowance;
                fromAmino(object: _67.BasicAllowanceAmino): _67.BasicAllowance;
                toAmino(message: _67.BasicAllowance): _67.BasicAllowanceAmino;
                fromAminoMsg(object: _67.BasicAllowanceAminoMsg): _67.BasicAllowance;
                toAminoMsg(message: _67.BasicAllowance): _67.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _67.BasicAllowanceProtoMsg): _67.BasicAllowance;
                toProto(message: _67.BasicAllowance): Uint8Array;
                toProtoMsg(message: _67.BasicAllowance): _67.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _67.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.PeriodicAllowance;
                fromPartial(object: Partial<_67.PeriodicAllowance>): _67.PeriodicAllowance;
                fromAmino(object: _67.PeriodicAllowanceAmino): _67.PeriodicAllowance;
                toAmino(message: _67.PeriodicAllowance): _67.PeriodicAllowanceAmino;
                fromAminoMsg(object: _67.PeriodicAllowanceAminoMsg): _67.PeriodicAllowance;
                toAminoMsg(message: _67.PeriodicAllowance): _67.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _67.PeriodicAllowanceProtoMsg): _67.PeriodicAllowance;
                toProto(message: _67.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _67.PeriodicAllowance): _67.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _67.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.AllowedMsgAllowance;
                fromPartial(object: Partial<_67.AllowedMsgAllowance>): _67.AllowedMsgAllowance;
                fromAmino(object: _67.AllowedMsgAllowanceAmino): _67.AllowedMsgAllowance;
                toAmino(message: _67.AllowedMsgAllowance): _67.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _67.AllowedMsgAllowanceAminoMsg): _67.AllowedMsgAllowance;
                toAminoMsg(message: _67.AllowedMsgAllowance): _67.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _67.AllowedMsgAllowanceProtoMsg): _67.AllowedMsgAllowance;
                toProto(message: _67.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _67.AllowedMsgAllowance): _67.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _67.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.Grant;
                fromPartial(object: Partial<_67.Grant>): _67.Grant;
                fromAmino(object: _67.GrantAmino): _67.Grant;
                toAmino(message: _67.Grant): _67.GrantAmino;
                fromAminoMsg(object: _67.GrantAminoMsg): _67.Grant;
                toAminoMsg(message: _67.Grant): _67.GrantAminoMsg;
                fromProtoMsg(message: _67.GrantProtoMsg): _67.Grant;
                toProto(message: _67.Grant): Uint8Array;
                toProtoMsg(message: _67.Grant): _67.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _231.MsgClientImpl;
            QueryClientImpl: typeof _215.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                proposal(request: _74.QueryProposalRequest): Promise<_74.QueryProposalResponse>;
                proposals(request: _74.QueryProposalsRequest): Promise<_74.QueryProposalsResponse>;
                vote(request: _74.QueryVoteRequest): Promise<_74.QueryVoteResponse>;
                votes(request: _74.QueryVotesRequest): Promise<_74.QueryVotesResponse>;
                params(request: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                deposit(request: _74.QueryDepositRequest): Promise<_74.QueryDepositResponse>;
                deposits(request: _74.QueryDepositsRequest): Promise<_74.QueryDepositsResponse>;
                tallyResult(request: _74.QueryTallyResultRequest): Promise<_74.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _196.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _75.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _75.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _75.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _75.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _75.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _75.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _75.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _75.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _75.MsgExecLegacyContent;
                    };
                    vote(value: _75.MsgVote): {
                        typeUrl: string;
                        value: _75.MsgVote;
                    };
                    voteWeighted(value: _75.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _75.MsgVoteWeighted;
                    };
                    deposit(value: _75.MsgDeposit): {
                        typeUrl: string;
                        value: _75.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _75.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _75.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _75.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _75.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _75.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _75.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _75.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _75.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _75.MsgExecLegacyContent;
                    };
                    vote(value: _75.MsgVote): {
                        typeUrl: string;
                        value: _75.MsgVote;
                    };
                    voteWeighted(value: _75.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _75.MsgVoteWeighted;
                    };
                    deposit(value: _75.MsgDeposit): {
                        typeUrl: string;
                        value: _75.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _75.MsgSubmitProposal) => _75.MsgSubmitProposalAmino;
                    fromAmino: (object: _75.MsgSubmitProposalAmino) => _75.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _75.MsgExecLegacyContent) => _75.MsgExecLegacyContentAmino;
                    fromAmino: (object: _75.MsgExecLegacyContentAmino) => _75.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _75.MsgVote) => _75.MsgVoteAmino;
                    fromAmino: (object: _75.MsgVoteAmino) => _75.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _75.MsgVoteWeighted) => _75.MsgVoteWeightedAmino;
                    fromAmino: (object: _75.MsgVoteWeightedAmino) => _75.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _75.MsgDeposit) => _75.MsgDepositAmino;
                    fromAmino: (object: _75.MsgDepositAmino) => _75.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _75.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgSubmitProposal;
                fromPartial(object: Partial<_75.MsgSubmitProposal>): _75.MsgSubmitProposal;
                fromAmino(object: _75.MsgSubmitProposalAmino): _75.MsgSubmitProposal;
                toAmino(message: _75.MsgSubmitProposal): _75.MsgSubmitProposalAmino;
                fromAminoMsg(object: _75.MsgSubmitProposalAminoMsg): _75.MsgSubmitProposal;
                toAminoMsg(message: _75.MsgSubmitProposal): _75.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _75.MsgSubmitProposalProtoMsg): _75.MsgSubmitProposal;
                toProto(message: _75.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _75.MsgSubmitProposal): _75.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _75.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_75.MsgSubmitProposalResponse>): _75.MsgSubmitProposalResponse;
                fromAmino(object: _75.MsgSubmitProposalResponseAmino): _75.MsgSubmitProposalResponse;
                toAmino(message: _75.MsgSubmitProposalResponse): _75.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _75.MsgSubmitProposalResponseAminoMsg): _75.MsgSubmitProposalResponse;
                toAminoMsg(message: _75.MsgSubmitProposalResponse): _75.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _75.MsgSubmitProposalResponseProtoMsg): _75.MsgSubmitProposalResponse;
                toProto(message: _75.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _75.MsgSubmitProposalResponse): _75.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _75.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgExecLegacyContent;
                fromPartial(object: Partial<_75.MsgExecLegacyContent>): _75.MsgExecLegacyContent;
                fromAmino(object: _75.MsgExecLegacyContentAmino): _75.MsgExecLegacyContent;
                toAmino(message: _75.MsgExecLegacyContent): _75.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _75.MsgExecLegacyContentAminoMsg): _75.MsgExecLegacyContent;
                toAminoMsg(message: _75.MsgExecLegacyContent): _75.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _75.MsgExecLegacyContentProtoMsg): _75.MsgExecLegacyContent;
                toProto(message: _75.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _75.MsgExecLegacyContent): _75.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _75.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_75.MsgExecLegacyContentResponse>): _75.MsgExecLegacyContentResponse;
                fromAmino(_: _75.MsgExecLegacyContentResponseAmino): _75.MsgExecLegacyContentResponse;
                toAmino(_: _75.MsgExecLegacyContentResponse): _75.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _75.MsgExecLegacyContentResponseAminoMsg): _75.MsgExecLegacyContentResponse;
                toAminoMsg(message: _75.MsgExecLegacyContentResponse): _75.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _75.MsgExecLegacyContentResponseProtoMsg): _75.MsgExecLegacyContentResponse;
                toProto(message: _75.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _75.MsgExecLegacyContentResponse): _75.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _75.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgVote;
                fromPartial(object: Partial<_75.MsgVote>): _75.MsgVote;
                fromAmino(object: _75.MsgVoteAmino): _75.MsgVote;
                toAmino(message: _75.MsgVote): _75.MsgVoteAmino;
                fromAminoMsg(object: _75.MsgVoteAminoMsg): _75.MsgVote;
                toAminoMsg(message: _75.MsgVote): _75.MsgVoteAminoMsg;
                fromProtoMsg(message: _75.MsgVoteProtoMsg): _75.MsgVote;
                toProto(message: _75.MsgVote): Uint8Array;
                toProtoMsg(message: _75.MsgVote): _75.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _75.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.MsgVoteResponse;
                fromPartial(_: Partial<_75.MsgVoteResponse>): _75.MsgVoteResponse;
                fromAmino(_: _75.MsgVoteResponseAmino): _75.MsgVoteResponse;
                toAmino(_: _75.MsgVoteResponse): _75.MsgVoteResponseAmino;
                fromAminoMsg(object: _75.MsgVoteResponseAminoMsg): _75.MsgVoteResponse;
                toAminoMsg(message: _75.MsgVoteResponse): _75.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _75.MsgVoteResponseProtoMsg): _75.MsgVoteResponse;
                toProto(message: _75.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _75.MsgVoteResponse): _75.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _75.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgVoteWeighted;
                fromPartial(object: Partial<_75.MsgVoteWeighted>): _75.MsgVoteWeighted;
                fromAmino(object: _75.MsgVoteWeightedAmino): _75.MsgVoteWeighted;
                toAmino(message: _75.MsgVoteWeighted): _75.MsgVoteWeightedAmino;
                fromAminoMsg(object: _75.MsgVoteWeightedAminoMsg): _75.MsgVoteWeighted;
                toAminoMsg(message: _75.MsgVoteWeighted): _75.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _75.MsgVoteWeightedProtoMsg): _75.MsgVoteWeighted;
                toProto(message: _75.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _75.MsgVoteWeighted): _75.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _75.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_75.MsgVoteWeightedResponse>): _75.MsgVoteWeightedResponse;
                fromAmino(_: _75.MsgVoteWeightedResponseAmino): _75.MsgVoteWeightedResponse;
                toAmino(_: _75.MsgVoteWeightedResponse): _75.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _75.MsgVoteWeightedResponseAminoMsg): _75.MsgVoteWeightedResponse;
                toAminoMsg(message: _75.MsgVoteWeightedResponse): _75.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _75.MsgVoteWeightedResponseProtoMsg): _75.MsgVoteWeightedResponse;
                toProto(message: _75.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _75.MsgVoteWeightedResponse): _75.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _75.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgDeposit;
                fromPartial(object: Partial<_75.MsgDeposit>): _75.MsgDeposit;
                fromAmino(object: _75.MsgDepositAmino): _75.MsgDeposit;
                toAmino(message: _75.MsgDeposit): _75.MsgDepositAmino;
                fromAminoMsg(object: _75.MsgDepositAminoMsg): _75.MsgDeposit;
                toAminoMsg(message: _75.MsgDeposit): _75.MsgDepositAminoMsg;
                fromProtoMsg(message: _75.MsgDepositProtoMsg): _75.MsgDeposit;
                toProto(message: _75.MsgDeposit): Uint8Array;
                toProtoMsg(message: _75.MsgDeposit): _75.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _75.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.MsgDepositResponse;
                fromPartial(_: Partial<_75.MsgDepositResponse>): _75.MsgDepositResponse;
                fromAmino(_: _75.MsgDepositResponseAmino): _75.MsgDepositResponse;
                toAmino(_: _75.MsgDepositResponse): _75.MsgDepositResponseAmino;
                fromAminoMsg(object: _75.MsgDepositResponseAminoMsg): _75.MsgDepositResponse;
                toAminoMsg(message: _75.MsgDepositResponse): _75.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _75.MsgDepositResponseProtoMsg): _75.MsgDepositResponse;
                toProto(message: _75.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _75.MsgDepositResponse): _75.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _77.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _74.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryProposalRequest;
                fromPartial(object: Partial<_74.QueryProposalRequest>): _74.QueryProposalRequest;
                fromAmino(object: _74.QueryProposalRequestAmino): _74.QueryProposalRequest;
                toAmino(message: _74.QueryProposalRequest): _74.QueryProposalRequestAmino;
                fromAminoMsg(object: _74.QueryProposalRequestAminoMsg): _74.QueryProposalRequest;
                toAminoMsg(message: _74.QueryProposalRequest): _74.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _74.QueryProposalRequestProtoMsg): _74.QueryProposalRequest;
                toProto(message: _74.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _74.QueryProposalRequest): _74.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _74.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryProposalResponse;
                fromPartial(object: Partial<_74.QueryProposalResponse>): _74.QueryProposalResponse;
                fromAmino(object: _74.QueryProposalResponseAmino): _74.QueryProposalResponse;
                toAmino(message: _74.QueryProposalResponse): _74.QueryProposalResponseAmino;
                fromAminoMsg(object: _74.QueryProposalResponseAminoMsg): _74.QueryProposalResponse;
                toAminoMsg(message: _74.QueryProposalResponse): _74.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _74.QueryProposalResponseProtoMsg): _74.QueryProposalResponse;
                toProto(message: _74.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _74.QueryProposalResponse): _74.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _74.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryProposalsRequest;
                fromPartial(object: Partial<_74.QueryProposalsRequest>): _74.QueryProposalsRequest;
                fromAmino(object: _74.QueryProposalsRequestAmino): _74.QueryProposalsRequest;
                toAmino(message: _74.QueryProposalsRequest): _74.QueryProposalsRequestAmino;
                fromAminoMsg(object: _74.QueryProposalsRequestAminoMsg): _74.QueryProposalsRequest;
                toAminoMsg(message: _74.QueryProposalsRequest): _74.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryProposalsRequestProtoMsg): _74.QueryProposalsRequest;
                toProto(message: _74.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryProposalsRequest): _74.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _74.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryProposalsResponse;
                fromPartial(object: Partial<_74.QueryProposalsResponse>): _74.QueryProposalsResponse;
                fromAmino(object: _74.QueryProposalsResponseAmino): _74.QueryProposalsResponse;
                toAmino(message: _74.QueryProposalsResponse): _74.QueryProposalsResponseAmino;
                fromAminoMsg(object: _74.QueryProposalsResponseAminoMsg): _74.QueryProposalsResponse;
                toAminoMsg(message: _74.QueryProposalsResponse): _74.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryProposalsResponseProtoMsg): _74.QueryProposalsResponse;
                toProto(message: _74.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryProposalsResponse): _74.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _74.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryVoteRequest;
                fromPartial(object: Partial<_74.QueryVoteRequest>): _74.QueryVoteRequest;
                fromAmino(object: _74.QueryVoteRequestAmino): _74.QueryVoteRequest;
                toAmino(message: _74.QueryVoteRequest): _74.QueryVoteRequestAmino;
                fromAminoMsg(object: _74.QueryVoteRequestAminoMsg): _74.QueryVoteRequest;
                toAminoMsg(message: _74.QueryVoteRequest): _74.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _74.QueryVoteRequestProtoMsg): _74.QueryVoteRequest;
                toProto(message: _74.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _74.QueryVoteRequest): _74.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _74.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryVoteResponse;
                fromPartial(object: Partial<_74.QueryVoteResponse>): _74.QueryVoteResponse;
                fromAmino(object: _74.QueryVoteResponseAmino): _74.QueryVoteResponse;
                toAmino(message: _74.QueryVoteResponse): _74.QueryVoteResponseAmino;
                fromAminoMsg(object: _74.QueryVoteResponseAminoMsg): _74.QueryVoteResponse;
                toAminoMsg(message: _74.QueryVoteResponse): _74.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _74.QueryVoteResponseProtoMsg): _74.QueryVoteResponse;
                toProto(message: _74.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _74.QueryVoteResponse): _74.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _74.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryVotesRequest;
                fromPartial(object: Partial<_74.QueryVotesRequest>): _74.QueryVotesRequest;
                fromAmino(object: _74.QueryVotesRequestAmino): _74.QueryVotesRequest;
                toAmino(message: _74.QueryVotesRequest): _74.QueryVotesRequestAmino;
                fromAminoMsg(object: _74.QueryVotesRequestAminoMsg): _74.QueryVotesRequest;
                toAminoMsg(message: _74.QueryVotesRequest): _74.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _74.QueryVotesRequestProtoMsg): _74.QueryVotesRequest;
                toProto(message: _74.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _74.QueryVotesRequest): _74.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _74.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryVotesResponse;
                fromPartial(object: Partial<_74.QueryVotesResponse>): _74.QueryVotesResponse;
                fromAmino(object: _74.QueryVotesResponseAmino): _74.QueryVotesResponse;
                toAmino(message: _74.QueryVotesResponse): _74.QueryVotesResponseAmino;
                fromAminoMsg(object: _74.QueryVotesResponseAminoMsg): _74.QueryVotesResponse;
                toAminoMsg(message: _74.QueryVotesResponse): _74.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _74.QueryVotesResponseProtoMsg): _74.QueryVotesResponse;
                toProto(message: _74.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _74.QueryVotesResponse): _74.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _74.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryParamsRequest;
                fromPartial(object: Partial<_74.QueryParamsRequest>): _74.QueryParamsRequest;
                fromAmino(object: _74.QueryParamsRequestAmino): _74.QueryParamsRequest;
                toAmino(message: _74.QueryParamsRequest): _74.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _74.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDepositRequest;
                fromPartial(object: Partial<_74.QueryDepositRequest>): _74.QueryDepositRequest;
                fromAmino(object: _74.QueryDepositRequestAmino): _74.QueryDepositRequest;
                toAmino(message: _74.QueryDepositRequest): _74.QueryDepositRequestAmino;
                fromAminoMsg(object: _74.QueryDepositRequestAminoMsg): _74.QueryDepositRequest;
                toAminoMsg(message: _74.QueryDepositRequest): _74.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _74.QueryDepositRequestProtoMsg): _74.QueryDepositRequest;
                toProto(message: _74.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _74.QueryDepositRequest): _74.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _74.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDepositResponse;
                fromPartial(object: Partial<_74.QueryDepositResponse>): _74.QueryDepositResponse;
                fromAmino(object: _74.QueryDepositResponseAmino): _74.QueryDepositResponse;
                toAmino(message: _74.QueryDepositResponse): _74.QueryDepositResponseAmino;
                fromAminoMsg(object: _74.QueryDepositResponseAminoMsg): _74.QueryDepositResponse;
                toAminoMsg(message: _74.QueryDepositResponse): _74.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _74.QueryDepositResponseProtoMsg): _74.QueryDepositResponse;
                toProto(message: _74.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _74.QueryDepositResponse): _74.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _74.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDepositsRequest;
                fromPartial(object: Partial<_74.QueryDepositsRequest>): _74.QueryDepositsRequest;
                fromAmino(object: _74.QueryDepositsRequestAmino): _74.QueryDepositsRequest;
                toAmino(message: _74.QueryDepositsRequest): _74.QueryDepositsRequestAmino;
                fromAminoMsg(object: _74.QueryDepositsRequestAminoMsg): _74.QueryDepositsRequest;
                toAminoMsg(message: _74.QueryDepositsRequest): _74.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryDepositsRequestProtoMsg): _74.QueryDepositsRequest;
                toProto(message: _74.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryDepositsRequest): _74.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _74.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryDepositsResponse;
                fromPartial(object: Partial<_74.QueryDepositsResponse>): _74.QueryDepositsResponse;
                fromAmino(object: _74.QueryDepositsResponseAmino): _74.QueryDepositsResponse;
                toAmino(message: _74.QueryDepositsResponse): _74.QueryDepositsResponseAmino;
                fromAminoMsg(object: _74.QueryDepositsResponseAminoMsg): _74.QueryDepositsResponse;
                toAminoMsg(message: _74.QueryDepositsResponse): _74.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryDepositsResponseProtoMsg): _74.QueryDepositsResponse;
                toProto(message: _74.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryDepositsResponse): _74.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _74.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryTallyResultRequest;
                fromPartial(object: Partial<_74.QueryTallyResultRequest>): _74.QueryTallyResultRequest;
                fromAmino(object: _74.QueryTallyResultRequestAmino): _74.QueryTallyResultRequest;
                toAmino(message: _74.QueryTallyResultRequest): _74.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _74.QueryTallyResultRequestAminoMsg): _74.QueryTallyResultRequest;
                toAminoMsg(message: _74.QueryTallyResultRequest): _74.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _74.QueryTallyResultRequestProtoMsg): _74.QueryTallyResultRequest;
                toProto(message: _74.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _74.QueryTallyResultRequest): _74.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _74.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryTallyResultResponse;
                fromPartial(object: Partial<_74.QueryTallyResultResponse>): _74.QueryTallyResultResponse;
                fromAmino(object: _74.QueryTallyResultResponseAmino): _74.QueryTallyResultResponse;
                toAmino(message: _74.QueryTallyResultResponse): _74.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _74.QueryTallyResultResponseAminoMsg): _74.QueryTallyResultResponse;
                toAminoMsg(message: _74.QueryTallyResultResponse): _74.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _74.QueryTallyResultResponseProtoMsg): _74.QueryTallyResultResponse;
                toProto(message: _74.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _74.QueryTallyResultResponse): _74.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _73.VoteOption;
            voteOptionToJSON(object: _73.VoteOption): string;
            proposalStatusFromJSON(object: any): _73.ProposalStatus;
            proposalStatusToJSON(object: _73.ProposalStatus): string;
            VoteOption: typeof _73.VoteOption;
            VoteOptionSDKType: typeof _73.VoteOption;
            VoteOptionAmino: typeof _73.VoteOption;
            ProposalStatus: typeof _73.ProposalStatus;
            ProposalStatusSDKType: typeof _73.ProposalStatus;
            ProposalStatusAmino: typeof _73.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _73.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.WeightedVoteOption;
                fromPartial(object: Partial<_73.WeightedVoteOption>): _73.WeightedVoteOption;
                fromAmino(object: _73.WeightedVoteOptionAmino): _73.WeightedVoteOption;
                toAmino(message: _73.WeightedVoteOption): _73.WeightedVoteOptionAmino;
                fromAminoMsg(object: _73.WeightedVoteOptionAminoMsg): _73.WeightedVoteOption;
                toAminoMsg(message: _73.WeightedVoteOption): _73.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _73.WeightedVoteOptionProtoMsg): _73.WeightedVoteOption;
                toProto(message: _73.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _73.WeightedVoteOption): _73.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _73.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.Deposit;
                fromPartial(object: Partial<_73.Deposit>): _73.Deposit;
                fromAmino(object: _73.DepositAmino): _73.Deposit;
                toAmino(message: _73.Deposit): _73.DepositAmino;
                fromAminoMsg(object: _73.DepositAminoMsg): _73.Deposit;
                toAminoMsg(message: _73.Deposit): _73.DepositAminoMsg;
                fromProtoMsg(message: _73.DepositProtoMsg): _73.Deposit;
                toProto(message: _73.Deposit): Uint8Array;
                toProtoMsg(message: _73.Deposit): _73.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _73.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.Proposal;
                fromPartial(object: Partial<_73.Proposal>): _73.Proposal;
                fromAmino(object: _73.ProposalAmino): _73.Proposal;
                toAmino(message: _73.Proposal): _73.ProposalAmino;
                fromAminoMsg(object: _73.ProposalAminoMsg): _73.Proposal;
                toAminoMsg(message: _73.Proposal): _73.ProposalAminoMsg;
                fromProtoMsg(message: _73.ProposalProtoMsg): _73.Proposal;
                toProto(message: _73.Proposal): Uint8Array;
                toProtoMsg(message: _73.Proposal): _73.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _73.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.TallyResult;
                fromPartial(object: Partial<_73.TallyResult>): _73.TallyResult;
                fromAmino(object: _73.TallyResultAmino): _73.TallyResult;
                toAmino(message: _73.TallyResult): _73.TallyResultAmino;
                fromAminoMsg(object: _73.TallyResultAminoMsg): _73.TallyResult;
                toAminoMsg(message: _73.TallyResult): _73.TallyResultAminoMsg;
                fromProtoMsg(message: _73.TallyResultProtoMsg): _73.TallyResult;
                toProto(message: _73.TallyResult): Uint8Array;
                toProtoMsg(message: _73.TallyResult): _73.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _73.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.Vote;
                fromPartial(object: Partial<_73.Vote>): _73.Vote;
                fromAmino(object: _73.VoteAmino): _73.Vote;
                toAmino(message: _73.Vote): _73.VoteAmino;
                fromAminoMsg(object: _73.VoteAminoMsg): _73.Vote;
                toAminoMsg(message: _73.Vote): _73.VoteAminoMsg;
                fromProtoMsg(message: _73.VoteProtoMsg): _73.Vote;
                toProto(message: _73.Vote): Uint8Array;
                toProtoMsg(message: _73.Vote): _73.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _73.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.DepositParams;
                fromPartial(object: Partial<_73.DepositParams>): _73.DepositParams;
                fromAmino(object: _73.DepositParamsAmino): _73.DepositParams;
                toAmino(message: _73.DepositParams): _73.DepositParamsAmino;
                fromAminoMsg(object: _73.DepositParamsAminoMsg): _73.DepositParams;
                toAminoMsg(message: _73.DepositParams): _73.DepositParamsAminoMsg;
                fromProtoMsg(message: _73.DepositParamsProtoMsg): _73.DepositParams;
                toProto(message: _73.DepositParams): Uint8Array;
                toProtoMsg(message: _73.DepositParams): _73.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _73.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.VotingParams;
                fromPartial(object: Partial<_73.VotingParams>): _73.VotingParams;
                fromAmino(object: _73.VotingParamsAmino): _73.VotingParams;
                toAmino(message: _73.VotingParams): _73.VotingParamsAmino;
                fromAminoMsg(object: _73.VotingParamsAminoMsg): _73.VotingParams;
                toAminoMsg(message: _73.VotingParams): _73.VotingParamsAminoMsg;
                fromProtoMsg(message: _73.VotingParamsProtoMsg): _73.VotingParams;
                toProto(message: _73.VotingParams): Uint8Array;
                toProtoMsg(message: _73.VotingParams): _73.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _73.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.TallyParams;
                fromPartial(object: Partial<_73.TallyParams>): _73.TallyParams;
                fromAmino(object: _73.TallyParamsAmino): _73.TallyParams;
                toAmino(message: _73.TallyParams): _73.TallyParamsAmino;
                fromAminoMsg(object: _73.TallyParamsAminoMsg): _73.TallyParams;
                toAminoMsg(message: _73.TallyParams): _73.TallyParamsAminoMsg;
                fromProtoMsg(message: _73.TallyParamsProtoMsg): _73.TallyParams;
                toProto(message: _73.TallyParams): Uint8Array;
                toProtoMsg(message: _73.TallyParams): _73.TallyParamsProtoMsg;
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
        const v1beta1: {
            MsgClientImpl: typeof _232.MsgClientImpl;
            QueryClientImpl: typeof _216.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                proposal(request: _78.QueryProposalRequest): Promise<_78.QueryProposalResponse>;
                proposals(request: _78.QueryProposalsRequest): Promise<_78.QueryProposalsResponse>;
                vote(request: _78.QueryVoteRequest): Promise<_78.QueryVoteResponse>;
                votes(request: _78.QueryVotesRequest): Promise<_78.QueryVotesResponse>;
                params(request: _78.QueryParamsRequest): Promise<_78.QueryParamsResponse>;
                deposit(request: _78.QueryDepositRequest): Promise<_78.QueryDepositResponse>;
                deposits(request: _78.QueryDepositsRequest): Promise<_78.QueryDepositsResponse>;
                tallyResult(request: _78.QueryTallyResultRequest): Promise<_78.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _197.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _79.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _79.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _79.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _79.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _79.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _79.MsgSubmitProposal;
                    };
                    vote(value: _79.MsgVote): {
                        typeUrl: string;
                        value: _79.MsgVote;
                    };
                    voteWeighted(value: _79.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _79.MsgVoteWeighted;
                    };
                    deposit(value: _79.MsgDeposit): {
                        typeUrl: string;
                        value: _79.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _79.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _79.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _79.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _79.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _79.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _79.MsgSubmitProposal;
                    };
                    vote(value: _79.MsgVote): {
                        typeUrl: string;
                        value: _79.MsgVote;
                    };
                    voteWeighted(value: _79.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _79.MsgVoteWeighted;
                    };
                    deposit(value: _79.MsgDeposit): {
                        typeUrl: string;
                        value: _79.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _79.MsgSubmitProposal) => _79.MsgSubmitProposalAmino;
                    fromAmino: (object: _79.MsgSubmitProposalAmino) => _79.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _79.MsgVote) => _79.MsgVoteAmino;
                    fromAmino: (object: _79.MsgVoteAmino) => _79.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _79.MsgVoteWeighted) => _79.MsgVoteWeightedAmino;
                    fromAmino: (object: _79.MsgVoteWeightedAmino) => _79.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _79.MsgDeposit) => _79.MsgDepositAmino;
                    fromAmino: (object: _79.MsgDepositAmino) => _79.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _79.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgSubmitProposal;
                fromPartial(object: Partial<_79.MsgSubmitProposal>): _79.MsgSubmitProposal;
                fromAmino(object: _79.MsgSubmitProposalAmino): _79.MsgSubmitProposal;
                toAmino(message: _79.MsgSubmitProposal): _79.MsgSubmitProposalAmino;
                fromAminoMsg(object: _79.MsgSubmitProposalAminoMsg): _79.MsgSubmitProposal;
                toAminoMsg(message: _79.MsgSubmitProposal): _79.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _79.MsgSubmitProposalProtoMsg): _79.MsgSubmitProposal;
                toProto(message: _79.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _79.MsgSubmitProposal): _79.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _79.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_79.MsgSubmitProposalResponse>): _79.MsgSubmitProposalResponse;
                fromAmino(object: _79.MsgSubmitProposalResponseAmino): _79.MsgSubmitProposalResponse;
                toAmino(message: _79.MsgSubmitProposalResponse): _79.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _79.MsgSubmitProposalResponseAminoMsg): _79.MsgSubmitProposalResponse;
                toAminoMsg(message: _79.MsgSubmitProposalResponse): _79.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _79.MsgSubmitProposalResponseProtoMsg): _79.MsgSubmitProposalResponse;
                toProto(message: _79.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _79.MsgSubmitProposalResponse): _79.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _79.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgVote;
                fromPartial(object: Partial<_79.MsgVote>): _79.MsgVote;
                fromAmino(object: _79.MsgVoteAmino): _79.MsgVote;
                toAmino(message: _79.MsgVote): _79.MsgVoteAmino;
                fromAminoMsg(object: _79.MsgVoteAminoMsg): _79.MsgVote;
                toAminoMsg(message: _79.MsgVote): _79.MsgVoteAminoMsg;
                fromProtoMsg(message: _79.MsgVoteProtoMsg): _79.MsgVote;
                toProto(message: _79.MsgVote): Uint8Array;
                toProtoMsg(message: _79.MsgVote): _79.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _79.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _79.MsgVoteResponse;
                fromPartial(_: Partial<_79.MsgVoteResponse>): _79.MsgVoteResponse;
                fromAmino(_: _79.MsgVoteResponseAmino): _79.MsgVoteResponse;
                toAmino(_: _79.MsgVoteResponse): _79.MsgVoteResponseAmino;
                fromAminoMsg(object: _79.MsgVoteResponseAminoMsg): _79.MsgVoteResponse;
                toAminoMsg(message: _79.MsgVoteResponse): _79.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _79.MsgVoteResponseProtoMsg): _79.MsgVoteResponse;
                toProto(message: _79.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _79.MsgVoteResponse): _79.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _79.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgVoteWeighted;
                fromPartial(object: Partial<_79.MsgVoteWeighted>): _79.MsgVoteWeighted;
                fromAmino(object: _79.MsgVoteWeightedAmino): _79.MsgVoteWeighted;
                toAmino(message: _79.MsgVoteWeighted): _79.MsgVoteWeightedAmino;
                fromAminoMsg(object: _79.MsgVoteWeightedAminoMsg): _79.MsgVoteWeighted;
                toAminoMsg(message: _79.MsgVoteWeighted): _79.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _79.MsgVoteWeightedProtoMsg): _79.MsgVoteWeighted;
                toProto(message: _79.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _79.MsgVoteWeighted): _79.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _79.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _79.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_79.MsgVoteWeightedResponse>): _79.MsgVoteWeightedResponse;
                fromAmino(_: _79.MsgVoteWeightedResponseAmino): _79.MsgVoteWeightedResponse;
                toAmino(_: _79.MsgVoteWeightedResponse): _79.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _79.MsgVoteWeightedResponseAminoMsg): _79.MsgVoteWeightedResponse;
                toAminoMsg(message: _79.MsgVoteWeightedResponse): _79.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _79.MsgVoteWeightedResponseProtoMsg): _79.MsgVoteWeightedResponse;
                toProto(message: _79.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _79.MsgVoteWeightedResponse): _79.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _79.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgDeposit;
                fromPartial(object: Partial<_79.MsgDeposit>): _79.MsgDeposit;
                fromAmino(object: _79.MsgDepositAmino): _79.MsgDeposit;
                toAmino(message: _79.MsgDeposit): _79.MsgDepositAmino;
                fromAminoMsg(object: _79.MsgDepositAminoMsg): _79.MsgDeposit;
                toAminoMsg(message: _79.MsgDeposit): _79.MsgDepositAminoMsg;
                fromProtoMsg(message: _79.MsgDepositProtoMsg): _79.MsgDeposit;
                toProto(message: _79.MsgDeposit): Uint8Array;
                toProtoMsg(message: _79.MsgDeposit): _79.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _79.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _79.MsgDepositResponse;
                fromPartial(_: Partial<_79.MsgDepositResponse>): _79.MsgDepositResponse;
                fromAmino(_: _79.MsgDepositResponseAmino): _79.MsgDepositResponse;
                toAmino(_: _79.MsgDepositResponse): _79.MsgDepositResponseAmino;
                fromAminoMsg(object: _79.MsgDepositResponseAminoMsg): _79.MsgDepositResponse;
                toAminoMsg(message: _79.MsgDepositResponse): _79.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _79.MsgDepositResponseProtoMsg): _79.MsgDepositResponse;
                toProto(message: _79.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _79.MsgDepositResponse): _79.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _77.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _78.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryProposalRequest;
                fromPartial(object: Partial<_78.QueryProposalRequest>): _78.QueryProposalRequest;
                fromAmino(object: _78.QueryProposalRequestAmino): _78.QueryProposalRequest;
                toAmino(message: _78.QueryProposalRequest): _78.QueryProposalRequestAmino;
                fromAminoMsg(object: _78.QueryProposalRequestAminoMsg): _78.QueryProposalRequest;
                toAminoMsg(message: _78.QueryProposalRequest): _78.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _78.QueryProposalRequestProtoMsg): _78.QueryProposalRequest;
                toProto(message: _78.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _78.QueryProposalRequest): _78.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _78.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryProposalResponse;
                fromPartial(object: Partial<_78.QueryProposalResponse>): _78.QueryProposalResponse;
                fromAmino(object: _78.QueryProposalResponseAmino): _78.QueryProposalResponse;
                toAmino(message: _78.QueryProposalResponse): _78.QueryProposalResponseAmino;
                fromAminoMsg(object: _78.QueryProposalResponseAminoMsg): _78.QueryProposalResponse;
                toAminoMsg(message: _78.QueryProposalResponse): _78.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _78.QueryProposalResponseProtoMsg): _78.QueryProposalResponse;
                toProto(message: _78.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _78.QueryProposalResponse): _78.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _78.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryProposalsRequest;
                fromPartial(object: Partial<_78.QueryProposalsRequest>): _78.QueryProposalsRequest;
                fromAmino(object: _78.QueryProposalsRequestAmino): _78.QueryProposalsRequest;
                toAmino(message: _78.QueryProposalsRequest): _78.QueryProposalsRequestAmino;
                fromAminoMsg(object: _78.QueryProposalsRequestAminoMsg): _78.QueryProposalsRequest;
                toAminoMsg(message: _78.QueryProposalsRequest): _78.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _78.QueryProposalsRequestProtoMsg): _78.QueryProposalsRequest;
                toProto(message: _78.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _78.QueryProposalsRequest): _78.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _78.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryProposalsResponse;
                fromPartial(object: Partial<_78.QueryProposalsResponse>): _78.QueryProposalsResponse;
                fromAmino(object: _78.QueryProposalsResponseAmino): _78.QueryProposalsResponse;
                toAmino(message: _78.QueryProposalsResponse): _78.QueryProposalsResponseAmino;
                fromAminoMsg(object: _78.QueryProposalsResponseAminoMsg): _78.QueryProposalsResponse;
                toAminoMsg(message: _78.QueryProposalsResponse): _78.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _78.QueryProposalsResponseProtoMsg): _78.QueryProposalsResponse;
                toProto(message: _78.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _78.QueryProposalsResponse): _78.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _78.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryVoteRequest;
                fromPartial(object: Partial<_78.QueryVoteRequest>): _78.QueryVoteRequest;
                fromAmino(object: _78.QueryVoteRequestAmino): _78.QueryVoteRequest;
                toAmino(message: _78.QueryVoteRequest): _78.QueryVoteRequestAmino;
                fromAminoMsg(object: _78.QueryVoteRequestAminoMsg): _78.QueryVoteRequest;
                toAminoMsg(message: _78.QueryVoteRequest): _78.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _78.QueryVoteRequestProtoMsg): _78.QueryVoteRequest;
                toProto(message: _78.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _78.QueryVoteRequest): _78.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _78.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryVoteResponse;
                fromPartial(object: Partial<_78.QueryVoteResponse>): _78.QueryVoteResponse;
                fromAmino(object: _78.QueryVoteResponseAmino): _78.QueryVoteResponse;
                toAmino(message: _78.QueryVoteResponse): _78.QueryVoteResponseAmino;
                fromAminoMsg(object: _78.QueryVoteResponseAminoMsg): _78.QueryVoteResponse;
                toAminoMsg(message: _78.QueryVoteResponse): _78.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _78.QueryVoteResponseProtoMsg): _78.QueryVoteResponse;
                toProto(message: _78.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _78.QueryVoteResponse): _78.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _78.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryVotesRequest;
                fromPartial(object: Partial<_78.QueryVotesRequest>): _78.QueryVotesRequest;
                fromAmino(object: _78.QueryVotesRequestAmino): _78.QueryVotesRequest;
                toAmino(message: _78.QueryVotesRequest): _78.QueryVotesRequestAmino;
                fromAminoMsg(object: _78.QueryVotesRequestAminoMsg): _78.QueryVotesRequest;
                toAminoMsg(message: _78.QueryVotesRequest): _78.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _78.QueryVotesRequestProtoMsg): _78.QueryVotesRequest;
                toProto(message: _78.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _78.QueryVotesRequest): _78.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _78.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryVotesResponse;
                fromPartial(object: Partial<_78.QueryVotesResponse>): _78.QueryVotesResponse;
                fromAmino(object: _78.QueryVotesResponseAmino): _78.QueryVotesResponse;
                toAmino(message: _78.QueryVotesResponse): _78.QueryVotesResponseAmino;
                fromAminoMsg(object: _78.QueryVotesResponseAminoMsg): _78.QueryVotesResponse;
                toAminoMsg(message: _78.QueryVotesResponse): _78.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _78.QueryVotesResponseProtoMsg): _78.QueryVotesResponse;
                toProto(message: _78.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _78.QueryVotesResponse): _78.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _78.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryParamsRequest;
                fromPartial(object: Partial<_78.QueryParamsRequest>): _78.QueryParamsRequest;
                fromAmino(object: _78.QueryParamsRequestAmino): _78.QueryParamsRequest;
                toAmino(message: _78.QueryParamsRequest): _78.QueryParamsRequestAmino;
                fromAminoMsg(object: _78.QueryParamsRequestAminoMsg): _78.QueryParamsRequest;
                toAminoMsg(message: _78.QueryParamsRequest): _78.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _78.QueryParamsRequestProtoMsg): _78.QueryParamsRequest;
                toProto(message: _78.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _78.QueryParamsRequest): _78.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _78.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryParamsResponse;
                fromPartial(object: Partial<_78.QueryParamsResponse>): _78.QueryParamsResponse;
                fromAmino(object: _78.QueryParamsResponseAmino): _78.QueryParamsResponse;
                toAmino(message: _78.QueryParamsResponse): _78.QueryParamsResponseAmino;
                fromAminoMsg(object: _78.QueryParamsResponseAminoMsg): _78.QueryParamsResponse;
                toAminoMsg(message: _78.QueryParamsResponse): _78.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _78.QueryParamsResponseProtoMsg): _78.QueryParamsResponse;
                toProto(message: _78.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _78.QueryParamsResponse): _78.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _78.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryDepositRequest;
                fromPartial(object: Partial<_78.QueryDepositRequest>): _78.QueryDepositRequest;
                fromAmino(object: _78.QueryDepositRequestAmino): _78.QueryDepositRequest;
                toAmino(message: _78.QueryDepositRequest): _78.QueryDepositRequestAmino;
                fromAminoMsg(object: _78.QueryDepositRequestAminoMsg): _78.QueryDepositRequest;
                toAminoMsg(message: _78.QueryDepositRequest): _78.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _78.QueryDepositRequestProtoMsg): _78.QueryDepositRequest;
                toProto(message: _78.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _78.QueryDepositRequest): _78.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _78.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryDepositResponse;
                fromPartial(object: Partial<_78.QueryDepositResponse>): _78.QueryDepositResponse;
                fromAmino(object: _78.QueryDepositResponseAmino): _78.QueryDepositResponse;
                toAmino(message: _78.QueryDepositResponse): _78.QueryDepositResponseAmino;
                fromAminoMsg(object: _78.QueryDepositResponseAminoMsg): _78.QueryDepositResponse;
                toAminoMsg(message: _78.QueryDepositResponse): _78.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _78.QueryDepositResponseProtoMsg): _78.QueryDepositResponse;
                toProto(message: _78.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _78.QueryDepositResponse): _78.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _78.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryDepositsRequest;
                fromPartial(object: Partial<_78.QueryDepositsRequest>): _78.QueryDepositsRequest;
                fromAmino(object: _78.QueryDepositsRequestAmino): _78.QueryDepositsRequest;
                toAmino(message: _78.QueryDepositsRequest): _78.QueryDepositsRequestAmino;
                fromAminoMsg(object: _78.QueryDepositsRequestAminoMsg): _78.QueryDepositsRequest;
                toAminoMsg(message: _78.QueryDepositsRequest): _78.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _78.QueryDepositsRequestProtoMsg): _78.QueryDepositsRequest;
                toProto(message: _78.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _78.QueryDepositsRequest): _78.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _78.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryDepositsResponse;
                fromPartial(object: Partial<_78.QueryDepositsResponse>): _78.QueryDepositsResponse;
                fromAmino(object: _78.QueryDepositsResponseAmino): _78.QueryDepositsResponse;
                toAmino(message: _78.QueryDepositsResponse): _78.QueryDepositsResponseAmino;
                fromAminoMsg(object: _78.QueryDepositsResponseAminoMsg): _78.QueryDepositsResponse;
                toAminoMsg(message: _78.QueryDepositsResponse): _78.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _78.QueryDepositsResponseProtoMsg): _78.QueryDepositsResponse;
                toProto(message: _78.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _78.QueryDepositsResponse): _78.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _78.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryTallyResultRequest;
                fromPartial(object: Partial<_78.QueryTallyResultRequest>): _78.QueryTallyResultRequest;
                fromAmino(object: _78.QueryTallyResultRequestAmino): _78.QueryTallyResultRequest;
                toAmino(message: _78.QueryTallyResultRequest): _78.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _78.QueryTallyResultRequestAminoMsg): _78.QueryTallyResultRequest;
                toAminoMsg(message: _78.QueryTallyResultRequest): _78.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _78.QueryTallyResultRequestProtoMsg): _78.QueryTallyResultRequest;
                toProto(message: _78.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _78.QueryTallyResultRequest): _78.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _78.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryTallyResultResponse;
                fromPartial(object: Partial<_78.QueryTallyResultResponse>): _78.QueryTallyResultResponse;
                fromAmino(object: _78.QueryTallyResultResponseAmino): _78.QueryTallyResultResponse;
                toAmino(message: _78.QueryTallyResultResponse): _78.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _78.QueryTallyResultResponseAminoMsg): _78.QueryTallyResultResponse;
                toAminoMsg(message: _78.QueryTallyResultResponse): _78.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _78.QueryTallyResultResponseProtoMsg): _78.QueryTallyResultResponse;
                toProto(message: _78.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _78.QueryTallyResultResponse): _78.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _77.VoteOption;
            voteOptionToJSON(object: _77.VoteOption): string;
            proposalStatusFromJSON(object: any): _77.ProposalStatus;
            proposalStatusToJSON(object: _77.ProposalStatus): string;
            VoteOption: typeof _77.VoteOption;
            VoteOptionSDKType: typeof _77.VoteOption;
            VoteOptionAmino: typeof _77.VoteOption;
            ProposalStatus: typeof _77.ProposalStatus;
            ProposalStatusSDKType: typeof _77.ProposalStatus;
            ProposalStatusAmino: typeof _77.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _77.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.WeightedVoteOption;
                fromPartial(object: Partial<_77.WeightedVoteOption>): _77.WeightedVoteOption;
                fromAmino(object: _77.WeightedVoteOptionAmino): _77.WeightedVoteOption;
                toAmino(message: _77.WeightedVoteOption): _77.WeightedVoteOptionAmino;
                fromAminoMsg(object: _77.WeightedVoteOptionAminoMsg): _77.WeightedVoteOption;
                toAminoMsg(message: _77.WeightedVoteOption): _77.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _77.WeightedVoteOptionProtoMsg): _77.WeightedVoteOption;
                toProto(message: _77.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _77.WeightedVoteOption): _77.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _77.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.TextProposal;
                fromPartial(object: Partial<_77.TextProposal>): _77.TextProposal;
                fromAmino(object: _77.TextProposalAmino): _77.TextProposal;
                toAmino(message: _77.TextProposal): _77.TextProposalAmino;
                fromAminoMsg(object: _77.TextProposalAminoMsg): _77.TextProposal;
                toAminoMsg(message: _77.TextProposal): _77.TextProposalAminoMsg;
                fromProtoMsg(message: _77.TextProposalProtoMsg): _77.TextProposal;
                toProto(message: _77.TextProposal): Uint8Array;
                toProtoMsg(message: _77.TextProposal): _77.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _77.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.Deposit;
                fromPartial(object: Partial<_77.Deposit>): _77.Deposit;
                fromAmino(object: _77.DepositAmino): _77.Deposit;
                toAmino(message: _77.Deposit): _77.DepositAmino;
                fromAminoMsg(object: _77.DepositAminoMsg): _77.Deposit;
                toAminoMsg(message: _77.Deposit): _77.DepositAminoMsg;
                fromProtoMsg(message: _77.DepositProtoMsg): _77.Deposit;
                toProto(message: _77.Deposit): Uint8Array;
                toProtoMsg(message: _77.Deposit): _77.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _77.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.Proposal;
                fromPartial(object: Partial<_77.Proposal>): _77.Proposal;
                fromAmino(object: _77.ProposalAmino): _77.Proposal;
                toAmino(message: _77.Proposal): _77.ProposalAmino;
                fromAminoMsg(object: _77.ProposalAminoMsg): _77.Proposal;
                toAminoMsg(message: _77.Proposal): _77.ProposalAminoMsg;
                fromProtoMsg(message: _77.ProposalProtoMsg): _77.Proposal;
                toProto(message: _77.Proposal): Uint8Array;
                toProtoMsg(message: _77.Proposal): _77.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _77.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.TallyResult;
                fromPartial(object: Partial<_77.TallyResult>): _77.TallyResult;
                fromAmino(object: _77.TallyResultAmino): _77.TallyResult;
                toAmino(message: _77.TallyResult): _77.TallyResultAmino;
                fromAminoMsg(object: _77.TallyResultAminoMsg): _77.TallyResult;
                toAminoMsg(message: _77.TallyResult): _77.TallyResultAminoMsg;
                fromProtoMsg(message: _77.TallyResultProtoMsg): _77.TallyResult;
                toProto(message: _77.TallyResult): Uint8Array;
                toProtoMsg(message: _77.TallyResult): _77.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _77.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.Vote;
                fromPartial(object: Partial<_77.Vote>): _77.Vote;
                fromAmino(object: _77.VoteAmino): _77.Vote;
                toAmino(message: _77.Vote): _77.VoteAmino;
                fromAminoMsg(object: _77.VoteAminoMsg): _77.Vote;
                toAminoMsg(message: _77.Vote): _77.VoteAminoMsg;
                fromProtoMsg(message: _77.VoteProtoMsg): _77.Vote;
                toProto(message: _77.Vote): Uint8Array;
                toProtoMsg(message: _77.Vote): _77.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _77.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.DepositParams;
                fromPartial(object: Partial<_77.DepositParams>): _77.DepositParams;
                fromAmino(object: _77.DepositParamsAmino): _77.DepositParams;
                toAmino(message: _77.DepositParams): _77.DepositParamsAmino;
                fromAminoMsg(object: _77.DepositParamsAminoMsg): _77.DepositParams;
                toAminoMsg(message: _77.DepositParams): _77.DepositParamsAminoMsg;
                fromProtoMsg(message: _77.DepositParamsProtoMsg): _77.DepositParams;
                toProto(message: _77.DepositParams): Uint8Array;
                toProtoMsg(message: _77.DepositParams): _77.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _77.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.VotingParams;
                fromPartial(object: Partial<_77.VotingParams>): _77.VotingParams;
                fromAmino(object: _77.VotingParamsAmino): _77.VotingParams;
                toAmino(message: _77.VotingParams): _77.VotingParamsAmino;
                fromAminoMsg(object: _77.VotingParamsAminoMsg): _77.VotingParams;
                toAminoMsg(message: _77.VotingParams): _77.VotingParamsAminoMsg;
                fromProtoMsg(message: _77.VotingParamsProtoMsg): _77.VotingParams;
                toProto(message: _77.VotingParams): Uint8Array;
                toProtoMsg(message: _77.VotingParams): _77.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _77.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.TallyParams;
                fromPartial(object: Partial<_77.TallyParams>): _77.TallyParams;
                fromAmino(object: _77.TallyParamsAmino): _77.TallyParams;
                toAmino(message: _77.TallyParams): _77.TallyParamsAmino;
                fromAminoMsg(object: _77.TallyParamsAminoMsg): _77.TallyParams;
                toAminoMsg(message: _77.TallyParams): _77.TallyParamsAminoMsg;
                fromProtoMsg(message: _77.TallyParamsProtoMsg): _77.TallyParams;
                toProto(message: _77.TallyParams): Uint8Array;
                toProtoMsg(message: _77.TallyParams): _77.TallyParamsProtoMsg;
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
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _233.MsgClientImpl;
            QueryClientImpl: typeof _217.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                groupInfo(request: _82.QueryGroupInfoRequest): Promise<_82.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _82.QueryGroupPolicyInfoRequest): Promise<_82.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _82.QueryGroupMembersRequest): Promise<_82.QueryGroupMembersResponse>;
                groupsByAdmin(request: _82.QueryGroupsByAdminRequest): Promise<_82.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _82.QueryGroupPoliciesByGroupRequest): Promise<_82.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _82.QueryGroupPoliciesByAdminRequest): Promise<_82.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _82.QueryProposalRequest): Promise<_82.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _82.QueryProposalsByGroupPolicyRequest): Promise<_82.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _82.QueryVoteByProposalVoterRequest): Promise<_82.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _82.QueryVotesByProposalRequest): Promise<_82.QueryVotesByProposalResponse>;
                votesByVoter(request: _82.QueryVotesByVoterRequest): Promise<_82.QueryVotesByVoterResponse>;
                groupsByMember(request: _82.QueryGroupsByMemberRequest): Promise<_82.QueryGroupsByMemberResponse>;
                tallyResult(request: _82.QueryTallyResultRequest): Promise<_82.QueryTallyResultResponse>;
                groups(request?: _82.QueryGroupsRequest): Promise<_82.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _198.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _83.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _83.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _83.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _83.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _83.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _83.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _83.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _83.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _83.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _83.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _83.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _83.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _83.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _83.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _83.MsgCreateGroup): {
                        typeUrl: string;
                        value: _83.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _83.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _83.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _83.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _83.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _83.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _83.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _83.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _83.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _83.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _83.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _83.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _83.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _83.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _83.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _83.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _83.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _83.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _83.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _83.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _83.MsgWithdrawProposal;
                    };
                    vote(value: _83.MsgVote): {
                        typeUrl: string;
                        value: _83.MsgVote;
                    };
                    exec(value: _83.MsgExec): {
                        typeUrl: string;
                        value: _83.MsgExec;
                    };
                    leaveGroup(value: _83.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _83.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _83.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _83.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _83.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _83.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _83.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _83.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _83.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _83.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _83.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _83.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _83.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _83.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _83.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _83.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _83.MsgCreateGroup): {
                        typeUrl: string;
                        value: _83.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _83.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _83.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _83.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _83.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _83.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _83.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _83.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _83.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _83.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _83.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _83.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _83.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _83.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _83.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _83.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _83.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _83.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _83.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _83.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _83.MsgWithdrawProposal;
                    };
                    vote(value: _83.MsgVote): {
                        typeUrl: string;
                        value: _83.MsgVote;
                    };
                    exec(value: _83.MsgExec): {
                        typeUrl: string;
                        value: _83.MsgExec;
                    };
                    leaveGroup(value: _83.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _83.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _83.MsgCreateGroup) => _83.MsgCreateGroupAmino;
                    fromAmino: (object: _83.MsgCreateGroupAmino) => _83.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _83.MsgUpdateGroupMembers) => _83.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _83.MsgUpdateGroupMembersAmino) => _83.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _83.MsgUpdateGroupAdmin) => _83.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _83.MsgUpdateGroupAdminAmino) => _83.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _83.MsgUpdateGroupMetadata) => _83.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _83.MsgUpdateGroupMetadataAmino) => _83.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _83.MsgCreateGroupPolicy) => _83.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _83.MsgCreateGroupPolicyAmino) => _83.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _83.MsgCreateGroupWithPolicy) => _83.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _83.MsgCreateGroupWithPolicyAmino) => _83.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _83.MsgUpdateGroupPolicyAdmin) => _83.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _83.MsgUpdateGroupPolicyAdminAmino) => _83.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _83.MsgUpdateGroupPolicyDecisionPolicy) => _83.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _83.MsgUpdateGroupPolicyDecisionPolicyAmino) => _83.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _83.MsgUpdateGroupPolicyMetadata) => _83.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _83.MsgUpdateGroupPolicyMetadataAmino) => _83.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _83.MsgSubmitProposal) => _83.MsgSubmitProposalAmino;
                    fromAmino: (object: _83.MsgSubmitProposalAmino) => _83.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _83.MsgWithdrawProposal) => _83.MsgWithdrawProposalAmino;
                    fromAmino: (object: _83.MsgWithdrawProposalAmino) => _83.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _83.MsgVote) => _83.MsgVoteAmino;
                    fromAmino: (object: _83.MsgVoteAmino) => _83.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _83.MsgExec) => _83.MsgExecAmino;
                    fromAmino: (object: _83.MsgExecAmino) => _83.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _83.MsgLeaveGroup) => _83.MsgLeaveGroupAmino;
                    fromAmino: (object: _83.MsgLeaveGroupAmino) => _83.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _84.VoteOption;
            voteOptionToJSON(object: _84.VoteOption): string;
            proposalStatusFromJSON(object: any): _84.ProposalStatus;
            proposalStatusToJSON(object: _84.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _84.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _84.ProposalExecutorResult): string;
            VoteOption: typeof _84.VoteOption;
            VoteOptionSDKType: typeof _84.VoteOption;
            VoteOptionAmino: typeof _84.VoteOption;
            ProposalStatus: typeof _84.ProposalStatus;
            ProposalStatusSDKType: typeof _84.ProposalStatus;
            ProposalStatusAmino: typeof _84.ProposalStatus;
            ProposalExecutorResult: typeof _84.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _84.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _84.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _84.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.Member;
                fromPartial(object: Partial<_84.Member>): _84.Member;
                fromAmino(object: _84.MemberAmino): _84.Member;
                toAmino(message: _84.Member): _84.MemberAmino;
                fromAminoMsg(object: _84.MemberAminoMsg): _84.Member;
                toAminoMsg(message: _84.Member): _84.MemberAminoMsg;
                fromProtoMsg(message: _84.MemberProtoMsg): _84.Member;
                toProto(message: _84.Member): Uint8Array;
                toProtoMsg(message: _84.Member): _84.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _84.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MemberRequest;
                fromPartial(object: Partial<_84.MemberRequest>): _84.MemberRequest;
                fromAmino(object: _84.MemberRequestAmino): _84.MemberRequest;
                toAmino(message: _84.MemberRequest): _84.MemberRequestAmino;
                fromAminoMsg(object: _84.MemberRequestAminoMsg): _84.MemberRequest;
                toAminoMsg(message: _84.MemberRequest): _84.MemberRequestAminoMsg;
                fromProtoMsg(message: _84.MemberRequestProtoMsg): _84.MemberRequest;
                toProto(message: _84.MemberRequest): Uint8Array;
                toProtoMsg(message: _84.MemberRequest): _84.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _84.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_84.ThresholdDecisionPolicy>): _84.ThresholdDecisionPolicy;
                fromAmino(object: _84.ThresholdDecisionPolicyAmino): _84.ThresholdDecisionPolicy;
                toAmino(message: _84.ThresholdDecisionPolicy): _84.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _84.ThresholdDecisionPolicyAminoMsg): _84.ThresholdDecisionPolicy;
                toAminoMsg(message: _84.ThresholdDecisionPolicy): _84.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _84.ThresholdDecisionPolicyProtoMsg): _84.ThresholdDecisionPolicy;
                toProto(message: _84.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _84.ThresholdDecisionPolicy): _84.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _84.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.PercentageDecisionPolicy;
                fromPartial(object: Partial<_84.PercentageDecisionPolicy>): _84.PercentageDecisionPolicy;
                fromAmino(object: _84.PercentageDecisionPolicyAmino): _84.PercentageDecisionPolicy;
                toAmino(message: _84.PercentageDecisionPolicy): _84.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _84.PercentageDecisionPolicyAminoMsg): _84.PercentageDecisionPolicy;
                toAminoMsg(message: _84.PercentageDecisionPolicy): _84.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _84.PercentageDecisionPolicyProtoMsg): _84.PercentageDecisionPolicy;
                toProto(message: _84.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _84.PercentageDecisionPolicy): _84.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _84.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.DecisionPolicyWindows;
                fromPartial(object: Partial<_84.DecisionPolicyWindows>): _84.DecisionPolicyWindows;
                fromAmino(object: _84.DecisionPolicyWindowsAmino): _84.DecisionPolicyWindows;
                toAmino(message: _84.DecisionPolicyWindows): _84.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _84.DecisionPolicyWindowsAminoMsg): _84.DecisionPolicyWindows;
                toAminoMsg(message: _84.DecisionPolicyWindows): _84.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _84.DecisionPolicyWindowsProtoMsg): _84.DecisionPolicyWindows;
                toProto(message: _84.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _84.DecisionPolicyWindows): _84.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _84.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.GroupInfo;
                fromPartial(object: Partial<_84.GroupInfo>): _84.GroupInfo;
                fromAmino(object: _84.GroupInfoAmino): _84.GroupInfo;
                toAmino(message: _84.GroupInfo): _84.GroupInfoAmino;
                fromAminoMsg(object: _84.GroupInfoAminoMsg): _84.GroupInfo;
                toAminoMsg(message: _84.GroupInfo): _84.GroupInfoAminoMsg;
                fromProtoMsg(message: _84.GroupInfoProtoMsg): _84.GroupInfo;
                toProto(message: _84.GroupInfo): Uint8Array;
                toProtoMsg(message: _84.GroupInfo): _84.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _84.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.GroupMember;
                fromPartial(object: Partial<_84.GroupMember>): _84.GroupMember;
                fromAmino(object: _84.GroupMemberAmino): _84.GroupMember;
                toAmino(message: _84.GroupMember): _84.GroupMemberAmino;
                fromAminoMsg(object: _84.GroupMemberAminoMsg): _84.GroupMember;
                toAminoMsg(message: _84.GroupMember): _84.GroupMemberAminoMsg;
                fromProtoMsg(message: _84.GroupMemberProtoMsg): _84.GroupMember;
                toProto(message: _84.GroupMember): Uint8Array;
                toProtoMsg(message: _84.GroupMember): _84.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _84.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.GroupPolicyInfo;
                fromPartial(object: Partial<_84.GroupPolicyInfo>): _84.GroupPolicyInfo;
                fromAmino(object: _84.GroupPolicyInfoAmino): _84.GroupPolicyInfo;
                toAmino(message: _84.GroupPolicyInfo): _84.GroupPolicyInfoAmino;
                fromAminoMsg(object: _84.GroupPolicyInfoAminoMsg): _84.GroupPolicyInfo;
                toAminoMsg(message: _84.GroupPolicyInfo): _84.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _84.GroupPolicyInfoProtoMsg): _84.GroupPolicyInfo;
                toProto(message: _84.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _84.GroupPolicyInfo): _84.GroupPolicyInfoProtoMsg;
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
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _83.Exec;
            execToJSON(object: _83.Exec): string;
            Exec: typeof _83.Exec;
            ExecSDKType: typeof _83.Exec;
            ExecAmino: typeof _83.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _83.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgCreateGroup;
                fromPartial(object: Partial<_83.MsgCreateGroup>): _83.MsgCreateGroup;
                fromAmino(object: _83.MsgCreateGroupAmino): _83.MsgCreateGroup;
                toAmino(message: _83.MsgCreateGroup): _83.MsgCreateGroupAmino;
                fromAminoMsg(object: _83.MsgCreateGroupAminoMsg): _83.MsgCreateGroup;
                toAminoMsg(message: _83.MsgCreateGroup): _83.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _83.MsgCreateGroupProtoMsg): _83.MsgCreateGroup;
                toProto(message: _83.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _83.MsgCreateGroup): _83.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _83.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgCreateGroupResponse;
                fromPartial(object: Partial<_83.MsgCreateGroupResponse>): _83.MsgCreateGroupResponse;
                fromAmino(object: _83.MsgCreateGroupResponseAmino): _83.MsgCreateGroupResponse;
                toAmino(message: _83.MsgCreateGroupResponse): _83.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _83.MsgCreateGroupResponseAminoMsg): _83.MsgCreateGroupResponse;
                toAminoMsg(message: _83.MsgCreateGroupResponse): _83.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _83.MsgCreateGroupResponseProtoMsg): _83.MsgCreateGroupResponse;
                toProto(message: _83.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _83.MsgCreateGroupResponse): _83.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _83.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_83.MsgUpdateGroupMembers>): _83.MsgUpdateGroupMembers;
                fromAmino(object: _83.MsgUpdateGroupMembersAmino): _83.MsgUpdateGroupMembers;
                toAmino(message: _83.MsgUpdateGroupMembers): _83.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _83.MsgUpdateGroupMembersAminoMsg): _83.MsgUpdateGroupMembers;
                toAminoMsg(message: _83.MsgUpdateGroupMembers): _83.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _83.MsgUpdateGroupMembersProtoMsg): _83.MsgUpdateGroupMembers;
                toProto(message: _83.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _83.MsgUpdateGroupMembers): _83.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _83.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_83.MsgUpdateGroupMembersResponse>): _83.MsgUpdateGroupMembersResponse;
                fromAmino(_: _83.MsgUpdateGroupMembersResponseAmino): _83.MsgUpdateGroupMembersResponse;
                toAmino(_: _83.MsgUpdateGroupMembersResponse): _83.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _83.MsgUpdateGroupMembersResponseAminoMsg): _83.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _83.MsgUpdateGroupMembersResponse): _83.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _83.MsgUpdateGroupMembersResponseProtoMsg): _83.MsgUpdateGroupMembersResponse;
                toProto(message: _83.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _83.MsgUpdateGroupMembersResponse): _83.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _83.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_83.MsgUpdateGroupAdmin>): _83.MsgUpdateGroupAdmin;
                fromAmino(object: _83.MsgUpdateGroupAdminAmino): _83.MsgUpdateGroupAdmin;
                toAmino(message: _83.MsgUpdateGroupAdmin): _83.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _83.MsgUpdateGroupAdminAminoMsg): _83.MsgUpdateGroupAdmin;
                toAminoMsg(message: _83.MsgUpdateGroupAdmin): _83.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _83.MsgUpdateGroupAdminProtoMsg): _83.MsgUpdateGroupAdmin;
                toProto(message: _83.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _83.MsgUpdateGroupAdmin): _83.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _83.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_83.MsgUpdateGroupAdminResponse>): _83.MsgUpdateGroupAdminResponse;
                fromAmino(_: _83.MsgUpdateGroupAdminResponseAmino): _83.MsgUpdateGroupAdminResponse;
                toAmino(_: _83.MsgUpdateGroupAdminResponse): _83.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _83.MsgUpdateGroupAdminResponseAminoMsg): _83.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _83.MsgUpdateGroupAdminResponse): _83.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _83.MsgUpdateGroupAdminResponseProtoMsg): _83.MsgUpdateGroupAdminResponse;
                toProto(message: _83.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _83.MsgUpdateGroupAdminResponse): _83.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _83.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_83.MsgUpdateGroupMetadata>): _83.MsgUpdateGroupMetadata;
                fromAmino(object: _83.MsgUpdateGroupMetadataAmino): _83.MsgUpdateGroupMetadata;
                toAmino(message: _83.MsgUpdateGroupMetadata): _83.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _83.MsgUpdateGroupMetadataAminoMsg): _83.MsgUpdateGroupMetadata;
                toAminoMsg(message: _83.MsgUpdateGroupMetadata): _83.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _83.MsgUpdateGroupMetadataProtoMsg): _83.MsgUpdateGroupMetadata;
                toProto(message: _83.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _83.MsgUpdateGroupMetadata): _83.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _83.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_83.MsgUpdateGroupMetadataResponse>): _83.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _83.MsgUpdateGroupMetadataResponseAmino): _83.MsgUpdateGroupMetadataResponse;
                toAmino(_: _83.MsgUpdateGroupMetadataResponse): _83.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _83.MsgUpdateGroupMetadataResponseAminoMsg): _83.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _83.MsgUpdateGroupMetadataResponse): _83.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _83.MsgUpdateGroupMetadataResponseProtoMsg): _83.MsgUpdateGroupMetadataResponse;
                toProto(message: _83.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _83.MsgUpdateGroupMetadataResponse): _83.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _83.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_83.MsgCreateGroupPolicy>): _83.MsgCreateGroupPolicy;
                fromAmino(object: _83.MsgCreateGroupPolicyAmino): _83.MsgCreateGroupPolicy;
                toAmino(message: _83.MsgCreateGroupPolicy): _83.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _83.MsgCreateGroupPolicyAminoMsg): _83.MsgCreateGroupPolicy;
                toAminoMsg(message: _83.MsgCreateGroupPolicy): _83.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _83.MsgCreateGroupPolicyProtoMsg): _83.MsgCreateGroupPolicy;
                toProto(message: _83.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _83.MsgCreateGroupPolicy): _83.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _83.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_83.MsgCreateGroupPolicyResponse>): _83.MsgCreateGroupPolicyResponse;
                fromAmino(object: _83.MsgCreateGroupPolicyResponseAmino): _83.MsgCreateGroupPolicyResponse;
                toAmino(message: _83.MsgCreateGroupPolicyResponse): _83.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _83.MsgCreateGroupPolicyResponseAminoMsg): _83.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _83.MsgCreateGroupPolicyResponse): _83.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _83.MsgCreateGroupPolicyResponseProtoMsg): _83.MsgCreateGroupPolicyResponse;
                toProto(message: _83.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _83.MsgCreateGroupPolicyResponse): _83.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _83.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_83.MsgUpdateGroupPolicyAdmin>): _83.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _83.MsgUpdateGroupPolicyAdminAmino): _83.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _83.MsgUpdateGroupPolicyAdmin): _83.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _83.MsgUpdateGroupPolicyAdminAminoMsg): _83.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _83.MsgUpdateGroupPolicyAdmin): _83.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _83.MsgUpdateGroupPolicyAdminProtoMsg): _83.MsgUpdateGroupPolicyAdmin;
                toProto(message: _83.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _83.MsgUpdateGroupPolicyAdmin): _83.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _83.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_83.MsgCreateGroupWithPolicy>): _83.MsgCreateGroupWithPolicy;
                fromAmino(object: _83.MsgCreateGroupWithPolicyAmino): _83.MsgCreateGroupWithPolicy;
                toAmino(message: _83.MsgCreateGroupWithPolicy): _83.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _83.MsgCreateGroupWithPolicyAminoMsg): _83.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _83.MsgCreateGroupWithPolicy): _83.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _83.MsgCreateGroupWithPolicyProtoMsg): _83.MsgCreateGroupWithPolicy;
                toProto(message: _83.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _83.MsgCreateGroupWithPolicy): _83.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _83.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_83.MsgCreateGroupWithPolicyResponse>): _83.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _83.MsgCreateGroupWithPolicyResponseAmino): _83.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _83.MsgCreateGroupWithPolicyResponse): _83.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _83.MsgCreateGroupWithPolicyResponseAminoMsg): _83.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _83.MsgCreateGroupWithPolicyResponse): _83.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _83.MsgCreateGroupWithPolicyResponseProtoMsg): _83.MsgCreateGroupWithPolicyResponse;
                toProto(message: _83.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _83.MsgCreateGroupWithPolicyResponse): _83.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _83.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_83.MsgUpdateGroupPolicyAdminResponse>): _83.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _83.MsgUpdateGroupPolicyAdminResponseAmino): _83.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _83.MsgUpdateGroupPolicyAdminResponse): _83.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _83.MsgUpdateGroupPolicyAdminResponseAminoMsg): _83.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _83.MsgUpdateGroupPolicyAdminResponse): _83.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _83.MsgUpdateGroupPolicyAdminResponseProtoMsg): _83.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _83.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _83.MsgUpdateGroupPolicyAdminResponse): _83.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _83.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_83.MsgUpdateGroupPolicyDecisionPolicy>): _83.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _83.MsgUpdateGroupPolicyDecisionPolicyAmino): _83.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _83.MsgUpdateGroupPolicyDecisionPolicy): _83.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _83.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _83.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _83.MsgUpdateGroupPolicyDecisionPolicy): _83.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _83.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _83.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _83.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _83.MsgUpdateGroupPolicyDecisionPolicy): _83.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _83.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_83.MsgUpdateGroupPolicyDecisionPolicyResponse>): _83.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _83.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _83.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _83.MsgUpdateGroupPolicyDecisionPolicyResponse): _83.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _83.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _83.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _83.MsgUpdateGroupPolicyDecisionPolicyResponse): _83.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _83.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _83.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _83.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _83.MsgUpdateGroupPolicyDecisionPolicyResponse): _83.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _83.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_83.MsgUpdateGroupPolicyMetadata>): _83.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _83.MsgUpdateGroupPolicyMetadataAmino): _83.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _83.MsgUpdateGroupPolicyMetadata): _83.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _83.MsgUpdateGroupPolicyMetadataAminoMsg): _83.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _83.MsgUpdateGroupPolicyMetadata): _83.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _83.MsgUpdateGroupPolicyMetadataProtoMsg): _83.MsgUpdateGroupPolicyMetadata;
                toProto(message: _83.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _83.MsgUpdateGroupPolicyMetadata): _83.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _83.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_83.MsgUpdateGroupPolicyMetadataResponse>): _83.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _83.MsgUpdateGroupPolicyMetadataResponseAmino): _83.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _83.MsgUpdateGroupPolicyMetadataResponse): _83.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _83.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _83.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _83.MsgUpdateGroupPolicyMetadataResponse): _83.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _83.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _83.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _83.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _83.MsgUpdateGroupPolicyMetadataResponse): _83.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
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
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _83.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgWithdrawProposal;
                fromPartial(object: Partial<_83.MsgWithdrawProposal>): _83.MsgWithdrawProposal;
                fromAmino(object: _83.MsgWithdrawProposalAmino): _83.MsgWithdrawProposal;
                toAmino(message: _83.MsgWithdrawProposal): _83.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _83.MsgWithdrawProposalAminoMsg): _83.MsgWithdrawProposal;
                toAminoMsg(message: _83.MsgWithdrawProposal): _83.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _83.MsgWithdrawProposalProtoMsg): _83.MsgWithdrawProposal;
                toProto(message: _83.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _83.MsgWithdrawProposal): _83.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _83.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_83.MsgWithdrawProposalResponse>): _83.MsgWithdrawProposalResponse;
                fromAmino(_: _83.MsgWithdrawProposalResponseAmino): _83.MsgWithdrawProposalResponse;
                toAmino(_: _83.MsgWithdrawProposalResponse): _83.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _83.MsgWithdrawProposalResponseAminoMsg): _83.MsgWithdrawProposalResponse;
                toAminoMsg(message: _83.MsgWithdrawProposalResponse): _83.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _83.MsgWithdrawProposalResponseProtoMsg): _83.MsgWithdrawProposalResponse;
                toProto(message: _83.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _83.MsgWithdrawProposalResponse): _83.MsgWithdrawProposalResponseProtoMsg;
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
            MsgExec: {
                typeUrl: string;
                encode(message: _83.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgExec;
                fromPartial(object: Partial<_83.MsgExec>): _83.MsgExec;
                fromAmino(object: _83.MsgExecAmino): _83.MsgExec;
                toAmino(message: _83.MsgExec): _83.MsgExecAmino;
                fromAminoMsg(object: _83.MsgExecAminoMsg): _83.MsgExec;
                toAminoMsg(message: _83.MsgExec): _83.MsgExecAminoMsg;
                fromProtoMsg(message: _83.MsgExecProtoMsg): _83.MsgExec;
                toProto(message: _83.MsgExec): Uint8Array;
                toProtoMsg(message: _83.MsgExec): _83.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _83.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgExecResponse;
                fromPartial(object: Partial<_83.MsgExecResponse>): _83.MsgExecResponse;
                fromAmino(object: _83.MsgExecResponseAmino): _83.MsgExecResponse;
                toAmino(message: _83.MsgExecResponse): _83.MsgExecResponseAmino;
                fromAminoMsg(object: _83.MsgExecResponseAminoMsg): _83.MsgExecResponse;
                toAminoMsg(message: _83.MsgExecResponse): _83.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _83.MsgExecResponseProtoMsg): _83.MsgExecResponse;
                toProto(message: _83.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _83.MsgExecResponse): _83.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _83.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgLeaveGroup;
                fromPartial(object: Partial<_83.MsgLeaveGroup>): _83.MsgLeaveGroup;
                fromAmino(object: _83.MsgLeaveGroupAmino): _83.MsgLeaveGroup;
                toAmino(message: _83.MsgLeaveGroup): _83.MsgLeaveGroupAmino;
                fromAminoMsg(object: _83.MsgLeaveGroupAminoMsg): _83.MsgLeaveGroup;
                toAminoMsg(message: _83.MsgLeaveGroup): _83.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _83.MsgLeaveGroupProtoMsg): _83.MsgLeaveGroup;
                toProto(message: _83.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _83.MsgLeaveGroup): _83.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _83.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_83.MsgLeaveGroupResponse>): _83.MsgLeaveGroupResponse;
                fromAmino(_: _83.MsgLeaveGroupResponseAmino): _83.MsgLeaveGroupResponse;
                toAmino(_: _83.MsgLeaveGroupResponse): _83.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _83.MsgLeaveGroupResponseAminoMsg): _83.MsgLeaveGroupResponse;
                toAminoMsg(message: _83.MsgLeaveGroupResponse): _83.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _83.MsgLeaveGroupResponseProtoMsg): _83.MsgLeaveGroupResponse;
                toProto(message: _83.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _83.MsgLeaveGroupResponse): _83.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _82.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryGroupInfoRequest;
                fromPartial(object: Partial<_82.QueryGroupInfoRequest>): _82.QueryGroupInfoRequest;
                fromAmino(object: _82.QueryGroupInfoRequestAmino): _82.QueryGroupInfoRequest;
                toAmino(message: _82.QueryGroupInfoRequest): _82.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _82.QueryGroupInfoRequestAminoMsg): _82.QueryGroupInfoRequest;
                toAminoMsg(message: _82.QueryGroupInfoRequest): _82.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _82.QueryGroupInfoRequestProtoMsg): _82.QueryGroupInfoRequest;
                toProto(message: _82.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGroupInfoRequest): _82.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _82.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryGroupInfoResponse;
                fromPartial(object: Partial<_82.QueryGroupInfoResponse>): _82.QueryGroupInfoResponse;
                fromAmino(object: _82.QueryGroupInfoResponseAmino): _82.QueryGroupInfoResponse;
                toAmino(message: _82.QueryGroupInfoResponse): _82.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _82.QueryGroupInfoResponseAminoMsg): _82.QueryGroupInfoResponse;
                toAminoMsg(message: _82.QueryGroupInfoResponse): _82.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _82.QueryGroupInfoResponseProtoMsg): _82.QueryGroupInfoResponse;
                toProto(message: _82.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGroupInfoResponse): _82.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _82.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_82.QueryGroupPolicyInfoRequest>): _82.QueryGroupPolicyInfoRequest;
                fromAmino(object: _82.QueryGroupPolicyInfoRequestAmino): _82.QueryGroupPolicyInfoRequest;
                toAmino(message: _82.QueryGroupPolicyInfoRequest): _82.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _82.QueryGroupPolicyInfoRequestAminoMsg): _82.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _82.QueryGroupPolicyInfoRequest): _82.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _82.QueryGroupPolicyInfoRequestProtoMsg): _82.QueryGroupPolicyInfoRequest;
                toProto(message: _82.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGroupPolicyInfoRequest): _82.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _82.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_82.QueryGroupPolicyInfoResponse>): _82.QueryGroupPolicyInfoResponse;
                fromAmino(object: _82.QueryGroupPolicyInfoResponseAmino): _82.QueryGroupPolicyInfoResponse;
                toAmino(message: _82.QueryGroupPolicyInfoResponse): _82.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _82.QueryGroupPolicyInfoResponseAminoMsg): _82.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _82.QueryGroupPolicyInfoResponse): _82.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _82.QueryGroupPolicyInfoResponseProtoMsg): _82.QueryGroupPolicyInfoResponse;
                toProto(message: _82.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGroupPolicyInfoResponse): _82.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _82.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryGroupMembersRequest;
                fromPartial(object: Partial<_82.QueryGroupMembersRequest>): _82.QueryGroupMembersRequest;
                fromAmino(object: _82.QueryGroupMembersRequestAmino): _82.QueryGroupMembersRequest;
                toAmino(message: _82.QueryGroupMembersRequest): _82.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _82.QueryGroupMembersRequestAminoMsg): _82.QueryGroupMembersRequest;
                toAminoMsg(message: _82.QueryGroupMembersRequest): _82.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _82.QueryGroupMembersRequestProtoMsg): _82.QueryGroupMembersRequest;
                toProto(message: _82.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGroupMembersRequest): _82.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _82.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryGroupMembersResponse;
                fromPartial(object: Partial<_82.QueryGroupMembersResponse>): _82.QueryGroupMembersResponse;
                fromAmino(object: _82.QueryGroupMembersResponseAmino): _82.QueryGroupMembersResponse;
                toAmino(message: _82.QueryGroupMembersResponse): _82.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _82.QueryGroupMembersResponseAminoMsg): _82.QueryGroupMembersResponse;
                toAminoMsg(message: _82.QueryGroupMembersResponse): _82.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _82.QueryGroupMembersResponseProtoMsg): _82.QueryGroupMembersResponse;
                toProto(message: _82.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGroupMembersResponse): _82.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _82.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_82.QueryGroupsByAdminRequest>): _82.QueryGroupsByAdminRequest;
                fromAmino(object: _82.QueryGroupsByAdminRequestAmino): _82.QueryGroupsByAdminRequest;
                toAmino(message: _82.QueryGroupsByAdminRequest): _82.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _82.QueryGroupsByAdminRequestAminoMsg): _82.QueryGroupsByAdminRequest;
                toAminoMsg(message: _82.QueryGroupsByAdminRequest): _82.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _82.QueryGroupsByAdminRequestProtoMsg): _82.QueryGroupsByAdminRequest;
                toProto(message: _82.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGroupsByAdminRequest): _82.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _82.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_82.QueryGroupsByAdminResponse>): _82.QueryGroupsByAdminResponse;
                fromAmino(object: _82.QueryGroupsByAdminResponseAmino): _82.QueryGroupsByAdminResponse;
                toAmino(message: _82.QueryGroupsByAdminResponse): _82.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _82.QueryGroupsByAdminResponseAminoMsg): _82.QueryGroupsByAdminResponse;
                toAminoMsg(message: _82.QueryGroupsByAdminResponse): _82.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _82.QueryGroupsByAdminResponseProtoMsg): _82.QueryGroupsByAdminResponse;
                toProto(message: _82.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGroupsByAdminResponse): _82.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _82.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_82.QueryGroupPoliciesByGroupRequest>): _82.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _82.QueryGroupPoliciesByGroupRequestAmino): _82.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _82.QueryGroupPoliciesByGroupRequest): _82.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _82.QueryGroupPoliciesByGroupRequestAminoMsg): _82.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _82.QueryGroupPoliciesByGroupRequest): _82.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _82.QueryGroupPoliciesByGroupRequestProtoMsg): _82.QueryGroupPoliciesByGroupRequest;
                toProto(message: _82.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGroupPoliciesByGroupRequest): _82.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _82.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_82.QueryGroupPoliciesByGroupResponse>): _82.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _82.QueryGroupPoliciesByGroupResponseAmino): _82.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _82.QueryGroupPoliciesByGroupResponse): _82.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _82.QueryGroupPoliciesByGroupResponseAminoMsg): _82.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _82.QueryGroupPoliciesByGroupResponse): _82.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _82.QueryGroupPoliciesByGroupResponseProtoMsg): _82.QueryGroupPoliciesByGroupResponse;
                toProto(message: _82.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGroupPoliciesByGroupResponse): _82.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _82.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_82.QueryGroupPoliciesByAdminRequest>): _82.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _82.QueryGroupPoliciesByAdminRequestAmino): _82.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _82.QueryGroupPoliciesByAdminRequest): _82.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _82.QueryGroupPoliciesByAdminRequestAminoMsg): _82.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _82.QueryGroupPoliciesByAdminRequest): _82.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _82.QueryGroupPoliciesByAdminRequestProtoMsg): _82.QueryGroupPoliciesByAdminRequest;
                toProto(message: _82.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGroupPoliciesByAdminRequest): _82.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _82.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_82.QueryGroupPoliciesByAdminResponse>): _82.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _82.QueryGroupPoliciesByAdminResponseAmino): _82.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _82.QueryGroupPoliciesByAdminResponse): _82.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _82.QueryGroupPoliciesByAdminResponseAminoMsg): _82.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _82.QueryGroupPoliciesByAdminResponse): _82.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _82.QueryGroupPoliciesByAdminResponseProtoMsg): _82.QueryGroupPoliciesByAdminResponse;
                toProto(message: _82.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGroupPoliciesByAdminResponse): _82.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
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
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _82.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_82.QueryProposalsByGroupPolicyRequest>): _82.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _82.QueryProposalsByGroupPolicyRequestAmino): _82.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _82.QueryProposalsByGroupPolicyRequest): _82.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _82.QueryProposalsByGroupPolicyRequestAminoMsg): _82.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _82.QueryProposalsByGroupPolicyRequest): _82.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _82.QueryProposalsByGroupPolicyRequestProtoMsg): _82.QueryProposalsByGroupPolicyRequest;
                toProto(message: _82.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _82.QueryProposalsByGroupPolicyRequest): _82.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _82.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_82.QueryProposalsByGroupPolicyResponse>): _82.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _82.QueryProposalsByGroupPolicyResponseAmino): _82.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _82.QueryProposalsByGroupPolicyResponse): _82.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _82.QueryProposalsByGroupPolicyResponseAminoMsg): _82.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _82.QueryProposalsByGroupPolicyResponse): _82.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _82.QueryProposalsByGroupPolicyResponseProtoMsg): _82.QueryProposalsByGroupPolicyResponse;
                toProto(message: _82.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _82.QueryProposalsByGroupPolicyResponse): _82.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _82.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_82.QueryVoteByProposalVoterRequest>): _82.QueryVoteByProposalVoterRequest;
                fromAmino(object: _82.QueryVoteByProposalVoterRequestAmino): _82.QueryVoteByProposalVoterRequest;
                toAmino(message: _82.QueryVoteByProposalVoterRequest): _82.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _82.QueryVoteByProposalVoterRequestAminoMsg): _82.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _82.QueryVoteByProposalVoterRequest): _82.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _82.QueryVoteByProposalVoterRequestProtoMsg): _82.QueryVoteByProposalVoterRequest;
                toProto(message: _82.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _82.QueryVoteByProposalVoterRequest): _82.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _82.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_82.QueryVoteByProposalVoterResponse>): _82.QueryVoteByProposalVoterResponse;
                fromAmino(object: _82.QueryVoteByProposalVoterResponseAmino): _82.QueryVoteByProposalVoterResponse;
                toAmino(message: _82.QueryVoteByProposalVoterResponse): _82.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _82.QueryVoteByProposalVoterResponseAminoMsg): _82.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _82.QueryVoteByProposalVoterResponse): _82.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _82.QueryVoteByProposalVoterResponseProtoMsg): _82.QueryVoteByProposalVoterResponse;
                toProto(message: _82.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _82.QueryVoteByProposalVoterResponse): _82.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _82.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_82.QueryVotesByProposalRequest>): _82.QueryVotesByProposalRequest;
                fromAmino(object: _82.QueryVotesByProposalRequestAmino): _82.QueryVotesByProposalRequest;
                toAmino(message: _82.QueryVotesByProposalRequest): _82.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _82.QueryVotesByProposalRequestAminoMsg): _82.QueryVotesByProposalRequest;
                toAminoMsg(message: _82.QueryVotesByProposalRequest): _82.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _82.QueryVotesByProposalRequestProtoMsg): _82.QueryVotesByProposalRequest;
                toProto(message: _82.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _82.QueryVotesByProposalRequest): _82.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _82.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_82.QueryVotesByProposalResponse>): _82.QueryVotesByProposalResponse;
                fromAmino(object: _82.QueryVotesByProposalResponseAmino): _82.QueryVotesByProposalResponse;
                toAmino(message: _82.QueryVotesByProposalResponse): _82.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _82.QueryVotesByProposalResponseAminoMsg): _82.QueryVotesByProposalResponse;
                toAminoMsg(message: _82.QueryVotesByProposalResponse): _82.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _82.QueryVotesByProposalResponseProtoMsg): _82.QueryVotesByProposalResponse;
                toProto(message: _82.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _82.QueryVotesByProposalResponse): _82.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _82.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_82.QueryVotesByVoterRequest>): _82.QueryVotesByVoterRequest;
                fromAmino(object: _82.QueryVotesByVoterRequestAmino): _82.QueryVotesByVoterRequest;
                toAmino(message: _82.QueryVotesByVoterRequest): _82.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _82.QueryVotesByVoterRequestAminoMsg): _82.QueryVotesByVoterRequest;
                toAminoMsg(message: _82.QueryVotesByVoterRequest): _82.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _82.QueryVotesByVoterRequestProtoMsg): _82.QueryVotesByVoterRequest;
                toProto(message: _82.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _82.QueryVotesByVoterRequest): _82.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _82.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_82.QueryVotesByVoterResponse>): _82.QueryVotesByVoterResponse;
                fromAmino(object: _82.QueryVotesByVoterResponseAmino): _82.QueryVotesByVoterResponse;
                toAmino(message: _82.QueryVotesByVoterResponse): _82.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _82.QueryVotesByVoterResponseAminoMsg): _82.QueryVotesByVoterResponse;
                toAminoMsg(message: _82.QueryVotesByVoterResponse): _82.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _82.QueryVotesByVoterResponseProtoMsg): _82.QueryVotesByVoterResponse;
                toProto(message: _82.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _82.QueryVotesByVoterResponse): _82.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _82.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_82.QueryGroupsByMemberRequest>): _82.QueryGroupsByMemberRequest;
                fromAmino(object: _82.QueryGroupsByMemberRequestAmino): _82.QueryGroupsByMemberRequest;
                toAmino(message: _82.QueryGroupsByMemberRequest): _82.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _82.QueryGroupsByMemberRequestAminoMsg): _82.QueryGroupsByMemberRequest;
                toAminoMsg(message: _82.QueryGroupsByMemberRequest): _82.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _82.QueryGroupsByMemberRequestProtoMsg): _82.QueryGroupsByMemberRequest;
                toProto(message: _82.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGroupsByMemberRequest): _82.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _82.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_82.QueryGroupsByMemberResponse>): _82.QueryGroupsByMemberResponse;
                fromAmino(object: _82.QueryGroupsByMemberResponseAmino): _82.QueryGroupsByMemberResponse;
                toAmino(message: _82.QueryGroupsByMemberResponse): _82.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _82.QueryGroupsByMemberResponseAminoMsg): _82.QueryGroupsByMemberResponse;
                toAminoMsg(message: _82.QueryGroupsByMemberResponse): _82.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _82.QueryGroupsByMemberResponseProtoMsg): _82.QueryGroupsByMemberResponse;
                toProto(message: _82.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGroupsByMemberResponse): _82.QueryGroupsByMemberResponseProtoMsg;
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
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _82.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryGroupsRequest;
                fromPartial(object: Partial<_82.QueryGroupsRequest>): _82.QueryGroupsRequest;
                fromAmino(object: _82.QueryGroupsRequestAmino): _82.QueryGroupsRequest;
                toAmino(message: _82.QueryGroupsRequest): _82.QueryGroupsRequestAmino;
                fromAminoMsg(object: _82.QueryGroupsRequestAminoMsg): _82.QueryGroupsRequest;
                toAminoMsg(message: _82.QueryGroupsRequest): _82.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _82.QueryGroupsRequestProtoMsg): _82.QueryGroupsRequest;
                toProto(message: _82.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGroupsRequest): _82.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _82.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryGroupsResponse;
                fromPartial(object: Partial<_82.QueryGroupsResponse>): _82.QueryGroupsResponse;
                fromAmino(object: _82.QueryGroupsResponseAmino): _82.QueryGroupsResponse;
                toAmino(message: _82.QueryGroupsResponse): _82.QueryGroupsResponseAmino;
                fromAminoMsg(object: _82.QueryGroupsResponseAminoMsg): _82.QueryGroupsResponse;
                toAminoMsg(message: _82.QueryGroupsResponse): _82.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _82.QueryGroupsResponseProtoMsg): _82.QueryGroupsResponse;
                toProto(message: _82.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGroupsResponse): _82.QueryGroupsResponseProtoMsg;
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
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _80.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.EventCreateGroup;
                fromPartial(object: Partial<_80.EventCreateGroup>): _80.EventCreateGroup;
                fromAmino(object: _80.EventCreateGroupAmino): _80.EventCreateGroup;
                toAmino(message: _80.EventCreateGroup): _80.EventCreateGroupAmino;
                fromAminoMsg(object: _80.EventCreateGroupAminoMsg): _80.EventCreateGroup;
                toAminoMsg(message: _80.EventCreateGroup): _80.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _80.EventCreateGroupProtoMsg): _80.EventCreateGroup;
                toProto(message: _80.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _80.EventCreateGroup): _80.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _80.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.EventUpdateGroup;
                fromPartial(object: Partial<_80.EventUpdateGroup>): _80.EventUpdateGroup;
                fromAmino(object: _80.EventUpdateGroupAmino): _80.EventUpdateGroup;
                toAmino(message: _80.EventUpdateGroup): _80.EventUpdateGroupAmino;
                fromAminoMsg(object: _80.EventUpdateGroupAminoMsg): _80.EventUpdateGroup;
                toAminoMsg(message: _80.EventUpdateGroup): _80.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _80.EventUpdateGroupProtoMsg): _80.EventUpdateGroup;
                toProto(message: _80.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _80.EventUpdateGroup): _80.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _80.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.EventCreateGroupPolicy;
                fromPartial(object: Partial<_80.EventCreateGroupPolicy>): _80.EventCreateGroupPolicy;
                fromAmino(object: _80.EventCreateGroupPolicyAmino): _80.EventCreateGroupPolicy;
                toAmino(message: _80.EventCreateGroupPolicy): _80.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _80.EventCreateGroupPolicyAminoMsg): _80.EventCreateGroupPolicy;
                toAminoMsg(message: _80.EventCreateGroupPolicy): _80.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _80.EventCreateGroupPolicyProtoMsg): _80.EventCreateGroupPolicy;
                toProto(message: _80.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _80.EventCreateGroupPolicy): _80.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _80.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_80.EventUpdateGroupPolicy>): _80.EventUpdateGroupPolicy;
                fromAmino(object: _80.EventUpdateGroupPolicyAmino): _80.EventUpdateGroupPolicy;
                toAmino(message: _80.EventUpdateGroupPolicy): _80.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _80.EventUpdateGroupPolicyAminoMsg): _80.EventUpdateGroupPolicy;
                toAminoMsg(message: _80.EventUpdateGroupPolicy): _80.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _80.EventUpdateGroupPolicyProtoMsg): _80.EventUpdateGroupPolicy;
                toProto(message: _80.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _80.EventUpdateGroupPolicy): _80.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _80.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.EventSubmitProposal;
                fromPartial(object: Partial<_80.EventSubmitProposal>): _80.EventSubmitProposal;
                fromAmino(object: _80.EventSubmitProposalAmino): _80.EventSubmitProposal;
                toAmino(message: _80.EventSubmitProposal): _80.EventSubmitProposalAmino;
                fromAminoMsg(object: _80.EventSubmitProposalAminoMsg): _80.EventSubmitProposal;
                toAminoMsg(message: _80.EventSubmitProposal): _80.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _80.EventSubmitProposalProtoMsg): _80.EventSubmitProposal;
                toProto(message: _80.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _80.EventSubmitProposal): _80.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _80.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.EventWithdrawProposal;
                fromPartial(object: Partial<_80.EventWithdrawProposal>): _80.EventWithdrawProposal;
                fromAmino(object: _80.EventWithdrawProposalAmino): _80.EventWithdrawProposal;
                toAmino(message: _80.EventWithdrawProposal): _80.EventWithdrawProposalAmino;
                fromAminoMsg(object: _80.EventWithdrawProposalAminoMsg): _80.EventWithdrawProposal;
                toAminoMsg(message: _80.EventWithdrawProposal): _80.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _80.EventWithdrawProposalProtoMsg): _80.EventWithdrawProposal;
                toProto(message: _80.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _80.EventWithdrawProposal): _80.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _80.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.EventVote;
                fromPartial(object: Partial<_80.EventVote>): _80.EventVote;
                fromAmino(object: _80.EventVoteAmino): _80.EventVote;
                toAmino(message: _80.EventVote): _80.EventVoteAmino;
                fromAminoMsg(object: _80.EventVoteAminoMsg): _80.EventVote;
                toAminoMsg(message: _80.EventVote): _80.EventVoteAminoMsg;
                fromProtoMsg(message: _80.EventVoteProtoMsg): _80.EventVote;
                toProto(message: _80.EventVote): Uint8Array;
                toProtoMsg(message: _80.EventVote): _80.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _80.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.EventExec;
                fromPartial(object: Partial<_80.EventExec>): _80.EventExec;
                fromAmino(object: _80.EventExecAmino): _80.EventExec;
                toAmino(message: _80.EventExec): _80.EventExecAmino;
                fromAminoMsg(object: _80.EventExecAminoMsg): _80.EventExec;
                toAminoMsg(message: _80.EventExec): _80.EventExecAminoMsg;
                fromProtoMsg(message: _80.EventExecProtoMsg): _80.EventExec;
                toProto(message: _80.EventExec): Uint8Array;
                toProtoMsg(message: _80.EventExec): _80.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _80.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.EventLeaveGroup;
                fromPartial(object: Partial<_80.EventLeaveGroup>): _80.EventLeaveGroup;
                fromAmino(object: _80.EventLeaveGroupAmino): _80.EventLeaveGroup;
                toAmino(message: _80.EventLeaveGroup): _80.EventLeaveGroupAmino;
                fromAminoMsg(object: _80.EventLeaveGroupAminoMsg): _80.EventLeaveGroup;
                toAminoMsg(message: _80.EventLeaveGroup): _80.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _80.EventLeaveGroupProtoMsg): _80.EventLeaveGroup;
                toProto(message: _80.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _80.EventLeaveGroup): _80.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _80.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.EventProposalPruned;
                fromPartial(object: Partial<_80.EventProposalPruned>): _80.EventProposalPruned;
                fromAmino(object: _80.EventProposalPrunedAmino): _80.EventProposalPruned;
                toAmino(message: _80.EventProposalPruned): _80.EventProposalPrunedAmino;
                fromAminoMsg(object: _80.EventProposalPrunedAminoMsg): _80.EventProposalPruned;
                toAminoMsg(message: _80.EventProposalPruned): _80.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _80.EventProposalPrunedProtoMsg): _80.EventProposalPruned;
                toProto(message: _80.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _80.EventProposalPruned): _80.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _218.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                inflation(request?: _87.QueryInflationRequest): Promise<_87.QueryInflationResponse>;
                annualProvisions(request?: _87.QueryAnnualProvisionsRequest): Promise<_87.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _199.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _87.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.QueryParamsRequest;
                fromPartial(_: Partial<_87.QueryParamsRequest>): _87.QueryParamsRequest;
                fromAmino(_: _87.QueryParamsRequestAmino): _87.QueryParamsRequest;
                toAmino(_: _87.QueryParamsRequest): _87.QueryParamsRequestAmino;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _87.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.QueryInflationRequest;
                fromPartial(_: Partial<_87.QueryInflationRequest>): _87.QueryInflationRequest;
                fromAmino(_: _87.QueryInflationRequestAmino): _87.QueryInflationRequest;
                toAmino(_: _87.QueryInflationRequest): _87.QueryInflationRequestAmino;
                fromAminoMsg(object: _87.QueryInflationRequestAminoMsg): _87.QueryInflationRequest;
                toAminoMsg(message: _87.QueryInflationRequest): _87.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _87.QueryInflationRequestProtoMsg): _87.QueryInflationRequest;
                toProto(message: _87.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _87.QueryInflationRequest): _87.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _87.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryInflationResponse;
                fromPartial(object: Partial<_87.QueryInflationResponse>): _87.QueryInflationResponse;
                fromAmino(object: _87.QueryInflationResponseAmino): _87.QueryInflationResponse;
                toAmino(message: _87.QueryInflationResponse): _87.QueryInflationResponseAmino;
                fromAminoMsg(object: _87.QueryInflationResponseAminoMsg): _87.QueryInflationResponse;
                toAminoMsg(message: _87.QueryInflationResponse): _87.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _87.QueryInflationResponseProtoMsg): _87.QueryInflationResponse;
                toProto(message: _87.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _87.QueryInflationResponse): _87.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _87.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_87.QueryAnnualProvisionsRequest>): _87.QueryAnnualProvisionsRequest;
                fromAmino(_: _87.QueryAnnualProvisionsRequestAmino): _87.QueryAnnualProvisionsRequest;
                toAmino(_: _87.QueryAnnualProvisionsRequest): _87.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _87.QueryAnnualProvisionsRequestAminoMsg): _87.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _87.QueryAnnualProvisionsRequest): _87.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryAnnualProvisionsRequestProtoMsg): _87.QueryAnnualProvisionsRequest;
                toProto(message: _87.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryAnnualProvisionsRequest): _87.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _87.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_87.QueryAnnualProvisionsResponse>): _87.QueryAnnualProvisionsResponse;
                fromAmino(object: _87.QueryAnnualProvisionsResponseAmino): _87.QueryAnnualProvisionsResponse;
                toAmino(message: _87.QueryAnnualProvisionsResponse): _87.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _87.QueryAnnualProvisionsResponseAminoMsg): _87.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _87.QueryAnnualProvisionsResponse): _87.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryAnnualProvisionsResponseProtoMsg): _87.QueryAnnualProvisionsResponse;
                toProto(message: _87.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryAnnualProvisionsResponse): _87.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _86.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.Minter;
                fromPartial(object: Partial<_86.Minter>): _86.Minter;
                fromAmino(object: _86.MinterAmino): _86.Minter;
                toAmino(message: _86.Minter): _86.MinterAmino;
                fromAminoMsg(object: _86.MinterAminoMsg): _86.Minter;
                toAminoMsg(message: _86.Minter): _86.MinterAminoMsg;
                fromProtoMsg(message: _86.MinterProtoMsg): _86.Minter;
                toProto(message: _86.Minter): Uint8Array;
                toProtoMsg(message: _86.Minter): _86.MinterProtoMsg;
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
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _234.MsgClientImpl;
            QueryClientImpl: typeof _219.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                balance(request: _92.QueryBalanceRequest): Promise<_92.QueryBalanceResponse>;
                owner(request: _92.QueryOwnerRequest): Promise<_92.QueryOwnerResponse>;
                supply(request: _92.QuerySupplyRequest): Promise<_92.QuerySupplyResponse>;
                nFTs(request: _92.QueryNFTsRequest): Promise<_92.QueryNFTsResponse>;
                nFT(request: _92.QueryNFTRequest): Promise<_92.QueryNFTResponse>;
                class(request: _92.QueryClassRequest): Promise<_92.QueryClassResponse>;
                classes(request?: _92.QueryClassesRequest): Promise<_92.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _200.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _93.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _93.MsgSend): {
                        typeUrl: string;
                        value: _93.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _93.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _93.MsgSend): {
                        typeUrl: string;
                        value: _93.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _93.MsgSend) => _93.MsgSendAmino;
                    fromAmino: (object: _93.MsgSendAmino) => _93.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _93.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.MsgSend;
                fromPartial(object: Partial<_93.MsgSend>): _93.MsgSend;
                fromAmino(object: _93.MsgSendAmino): _93.MsgSend;
                toAmino(message: _93.MsgSend): _93.MsgSendAmino;
                fromAminoMsg(object: _93.MsgSendAminoMsg): _93.MsgSend;
                toAminoMsg(message: _93.MsgSend): _93.MsgSendAminoMsg;
                fromProtoMsg(message: _93.MsgSendProtoMsg): _93.MsgSend;
                toProto(message: _93.MsgSend): Uint8Array;
                toProtoMsg(message: _93.MsgSend): _93.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _93.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _93.MsgSendResponse;
                fromPartial(_: Partial<_93.MsgSendResponse>): _93.MsgSendResponse;
                fromAmino(_: _93.MsgSendResponseAmino): _93.MsgSendResponse;
                toAmino(_: _93.MsgSendResponse): _93.MsgSendResponseAmino;
                fromAminoMsg(object: _93.MsgSendResponseAminoMsg): _93.MsgSendResponse;
                toAminoMsg(message: _93.MsgSendResponse): _93.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _93.MsgSendResponseProtoMsg): _93.MsgSendResponse;
                toProto(message: _93.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _93.MsgSendResponse): _93.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _92.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryBalanceRequest;
                fromPartial(object: Partial<_92.QueryBalanceRequest>): _92.QueryBalanceRequest;
                fromAmino(object: _92.QueryBalanceRequestAmino): _92.QueryBalanceRequest;
                toAmino(message: _92.QueryBalanceRequest): _92.QueryBalanceRequestAmino;
                fromAminoMsg(object: _92.QueryBalanceRequestAminoMsg): _92.QueryBalanceRequest;
                toAminoMsg(message: _92.QueryBalanceRequest): _92.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _92.QueryBalanceRequestProtoMsg): _92.QueryBalanceRequest;
                toProto(message: _92.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _92.QueryBalanceRequest): _92.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _92.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryBalanceResponse;
                fromPartial(object: Partial<_92.QueryBalanceResponse>): _92.QueryBalanceResponse;
                fromAmino(object: _92.QueryBalanceResponseAmino): _92.QueryBalanceResponse;
                toAmino(message: _92.QueryBalanceResponse): _92.QueryBalanceResponseAmino;
                fromAminoMsg(object: _92.QueryBalanceResponseAminoMsg): _92.QueryBalanceResponse;
                toAminoMsg(message: _92.QueryBalanceResponse): _92.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _92.QueryBalanceResponseProtoMsg): _92.QueryBalanceResponse;
                toProto(message: _92.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _92.QueryBalanceResponse): _92.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _92.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryOwnerRequest;
                fromPartial(object: Partial<_92.QueryOwnerRequest>): _92.QueryOwnerRequest;
                fromAmino(object: _92.QueryOwnerRequestAmino): _92.QueryOwnerRequest;
                toAmino(message: _92.QueryOwnerRequest): _92.QueryOwnerRequestAmino;
                fromAminoMsg(object: _92.QueryOwnerRequestAminoMsg): _92.QueryOwnerRequest;
                toAminoMsg(message: _92.QueryOwnerRequest): _92.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _92.QueryOwnerRequestProtoMsg): _92.QueryOwnerRequest;
                toProto(message: _92.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _92.QueryOwnerRequest): _92.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _92.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryOwnerResponse;
                fromPartial(object: Partial<_92.QueryOwnerResponse>): _92.QueryOwnerResponse;
                fromAmino(object: _92.QueryOwnerResponseAmino): _92.QueryOwnerResponse;
                toAmino(message: _92.QueryOwnerResponse): _92.QueryOwnerResponseAmino;
                fromAminoMsg(object: _92.QueryOwnerResponseAminoMsg): _92.QueryOwnerResponse;
                toAminoMsg(message: _92.QueryOwnerResponse): _92.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _92.QueryOwnerResponseProtoMsg): _92.QueryOwnerResponse;
                toProto(message: _92.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _92.QueryOwnerResponse): _92.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _92.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QuerySupplyRequest;
                fromPartial(object: Partial<_92.QuerySupplyRequest>): _92.QuerySupplyRequest;
                fromAmino(object: _92.QuerySupplyRequestAmino): _92.QuerySupplyRequest;
                toAmino(message: _92.QuerySupplyRequest): _92.QuerySupplyRequestAmino;
                fromAminoMsg(object: _92.QuerySupplyRequestAminoMsg): _92.QuerySupplyRequest;
                toAminoMsg(message: _92.QuerySupplyRequest): _92.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _92.QuerySupplyRequestProtoMsg): _92.QuerySupplyRequest;
                toProto(message: _92.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _92.QuerySupplyRequest): _92.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _92.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QuerySupplyResponse;
                fromPartial(object: Partial<_92.QuerySupplyResponse>): _92.QuerySupplyResponse;
                fromAmino(object: _92.QuerySupplyResponseAmino): _92.QuerySupplyResponse;
                toAmino(message: _92.QuerySupplyResponse): _92.QuerySupplyResponseAmino;
                fromAminoMsg(object: _92.QuerySupplyResponseAminoMsg): _92.QuerySupplyResponse;
                toAminoMsg(message: _92.QuerySupplyResponse): _92.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _92.QuerySupplyResponseProtoMsg): _92.QuerySupplyResponse;
                toProto(message: _92.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _92.QuerySupplyResponse): _92.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _92.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryNFTsRequest;
                fromPartial(object: Partial<_92.QueryNFTsRequest>): _92.QueryNFTsRequest;
                fromAmino(object: _92.QueryNFTsRequestAmino): _92.QueryNFTsRequest;
                toAmino(message: _92.QueryNFTsRequest): _92.QueryNFTsRequestAmino;
                fromAminoMsg(object: _92.QueryNFTsRequestAminoMsg): _92.QueryNFTsRequest;
                toAminoMsg(message: _92.QueryNFTsRequest): _92.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryNFTsRequestProtoMsg): _92.QueryNFTsRequest;
                toProto(message: _92.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryNFTsRequest): _92.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _92.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryNFTsResponse;
                fromPartial(object: Partial<_92.QueryNFTsResponse>): _92.QueryNFTsResponse;
                fromAmino(object: _92.QueryNFTsResponseAmino): _92.QueryNFTsResponse;
                toAmino(message: _92.QueryNFTsResponse): _92.QueryNFTsResponseAmino;
                fromAminoMsg(object: _92.QueryNFTsResponseAminoMsg): _92.QueryNFTsResponse;
                toAminoMsg(message: _92.QueryNFTsResponse): _92.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryNFTsResponseProtoMsg): _92.QueryNFTsResponse;
                toProto(message: _92.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryNFTsResponse): _92.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _92.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryNFTRequest;
                fromPartial(object: Partial<_92.QueryNFTRequest>): _92.QueryNFTRequest;
                fromAmino(object: _92.QueryNFTRequestAmino): _92.QueryNFTRequest;
                toAmino(message: _92.QueryNFTRequest): _92.QueryNFTRequestAmino;
                fromAminoMsg(object: _92.QueryNFTRequestAminoMsg): _92.QueryNFTRequest;
                toAminoMsg(message: _92.QueryNFTRequest): _92.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _92.QueryNFTRequestProtoMsg): _92.QueryNFTRequest;
                toProto(message: _92.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _92.QueryNFTRequest): _92.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _92.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryNFTResponse;
                fromPartial(object: Partial<_92.QueryNFTResponse>): _92.QueryNFTResponse;
                fromAmino(object: _92.QueryNFTResponseAmino): _92.QueryNFTResponse;
                toAmino(message: _92.QueryNFTResponse): _92.QueryNFTResponseAmino;
                fromAminoMsg(object: _92.QueryNFTResponseAminoMsg): _92.QueryNFTResponse;
                toAminoMsg(message: _92.QueryNFTResponse): _92.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _92.QueryNFTResponseProtoMsg): _92.QueryNFTResponse;
                toProto(message: _92.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _92.QueryNFTResponse): _92.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _92.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryClassRequest;
                fromPartial(object: Partial<_92.QueryClassRequest>): _92.QueryClassRequest;
                fromAmino(object: _92.QueryClassRequestAmino): _92.QueryClassRequest;
                toAmino(message: _92.QueryClassRequest): _92.QueryClassRequestAmino;
                fromAminoMsg(object: _92.QueryClassRequestAminoMsg): _92.QueryClassRequest;
                toAminoMsg(message: _92.QueryClassRequest): _92.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _92.QueryClassRequestProtoMsg): _92.QueryClassRequest;
                toProto(message: _92.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _92.QueryClassRequest): _92.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _92.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryClassResponse;
                fromPartial(object: Partial<_92.QueryClassResponse>): _92.QueryClassResponse;
                fromAmino(object: _92.QueryClassResponseAmino): _92.QueryClassResponse;
                toAmino(message: _92.QueryClassResponse): _92.QueryClassResponseAmino;
                fromAminoMsg(object: _92.QueryClassResponseAminoMsg): _92.QueryClassResponse;
                toAminoMsg(message: _92.QueryClassResponse): _92.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _92.QueryClassResponseProtoMsg): _92.QueryClassResponse;
                toProto(message: _92.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _92.QueryClassResponse): _92.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _92.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryClassesRequest;
                fromPartial(object: Partial<_92.QueryClassesRequest>): _92.QueryClassesRequest;
                fromAmino(object: _92.QueryClassesRequestAmino): _92.QueryClassesRequest;
                toAmino(message: _92.QueryClassesRequest): _92.QueryClassesRequestAmino;
                fromAminoMsg(object: _92.QueryClassesRequestAminoMsg): _92.QueryClassesRequest;
                toAminoMsg(message: _92.QueryClassesRequest): _92.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _92.QueryClassesRequestProtoMsg): _92.QueryClassesRequest;
                toProto(message: _92.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _92.QueryClassesRequest): _92.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _92.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryClassesResponse;
                fromPartial(object: Partial<_92.QueryClassesResponse>): _92.QueryClassesResponse;
                fromAmino(object: _92.QueryClassesResponseAmino): _92.QueryClassesResponse;
                toAmino(message: _92.QueryClassesResponse): _92.QueryClassesResponseAmino;
                fromAminoMsg(object: _92.QueryClassesResponseAminoMsg): _92.QueryClassesResponse;
                toAminoMsg(message: _92.QueryClassesResponse): _92.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _92.QueryClassesResponseProtoMsg): _92.QueryClassesResponse;
                toProto(message: _92.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _92.QueryClassesResponse): _92.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _91.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.Class;
                fromPartial(object: Partial<_91.Class>): _91.Class;
                fromAmino(object: _91.ClassAmino): _91.Class;
                toAmino(message: _91.Class): _91.ClassAmino;
                fromAminoMsg(object: _91.ClassAminoMsg): _91.Class;
                toAminoMsg(message: _91.Class): _91.ClassAminoMsg;
                fromProtoMsg(message: _91.ClassProtoMsg): _91.Class;
                toProto(message: _91.Class): Uint8Array;
                toProtoMsg(message: _91.Class): _91.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _91.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.NFT;
                fromPartial(object: Partial<_91.NFT>): _91.NFT;
                fromAmino(object: _91.NFTAmino): _91.NFT;
                toAmino(message: _91.NFT): _91.NFTAmino;
                fromAminoMsg(object: _91.NFTAminoMsg): _91.NFT;
                toAminoMsg(message: _91.NFT): _91.NFTAminoMsg;
                fromProtoMsg(message: _91.NFTProtoMsg): _91.NFT;
                toProto(message: _91.NFT): Uint8Array;
                toProtoMsg(message: _91.NFT): _91.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _90.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.GenesisState;
                fromPartial(object: Partial<_90.GenesisState>): _90.GenesisState;
                fromAmino(object: _90.GenesisStateAmino): _90.GenesisState;
                toAmino(message: _90.GenesisState): _90.GenesisStateAmino;
                fromAminoMsg(object: _90.GenesisStateAminoMsg): _90.GenesisState;
                toAminoMsg(message: _90.GenesisState): _90.GenesisStateAminoMsg;
                fromProtoMsg(message: _90.GenesisStateProtoMsg): _90.GenesisState;
                toProto(message: _90.GenesisState): Uint8Array;
                toProtoMsg(message: _90.GenesisState): _90.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _90.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.Entry;
                fromPartial(object: Partial<_90.Entry>): _90.Entry;
                fromAmino(object: _90.EntryAmino): _90.Entry;
                toAmino(message: _90.Entry): _90.EntryAmino;
                fromAminoMsg(object: _90.EntryAminoMsg): _90.Entry;
                toAminoMsg(message: _90.Entry): _90.EntryAminoMsg;
                fromProtoMsg(message: _90.EntryProtoMsg): _90.Entry;
                toProto(message: _90.Entry): Uint8Array;
                toProtoMsg(message: _90.Entry): _90.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _89.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.EventSend;
                fromPartial(object: Partial<_89.EventSend>): _89.EventSend;
                fromAmino(object: _89.EventSendAmino): _89.EventSend;
                toAmino(message: _89.EventSend): _89.EventSendAmino;
                fromAminoMsg(object: _89.EventSendAminoMsg): _89.EventSend;
                toAminoMsg(message: _89.EventSend): _89.EventSendAminoMsg;
                fromProtoMsg(message: _89.EventSendProtoMsg): _89.EventSend;
                toProto(message: _89.EventSend): Uint8Array;
                toProtoMsg(message: _89.EventSend): _89.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _89.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.EventMint;
                fromPartial(object: Partial<_89.EventMint>): _89.EventMint;
                fromAmino(object: _89.EventMintAmino): _89.EventMint;
                toAmino(message: _89.EventMint): _89.EventMintAmino;
                fromAminoMsg(object: _89.EventMintAminoMsg): _89.EventMint;
                toAminoMsg(message: _89.EventMint): _89.EventMintAminoMsg;
                fromProtoMsg(message: _89.EventMintProtoMsg): _89.EventMint;
                toProto(message: _89.EventMint): Uint8Array;
                toProtoMsg(message: _89.EventMint): _89.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _89.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.EventBurn;
                fromPartial(object: Partial<_89.EventBurn>): _89.EventBurn;
                fromAmino(object: _89.EventBurnAmino): _89.EventBurn;
                toAmino(message: _89.EventBurn): _89.EventBurnAmino;
                fromAminoMsg(object: _89.EventBurnAminoMsg): _89.EventBurn;
                toAminoMsg(message: _89.EventBurn): _89.EventBurnAminoMsg;
                fromProtoMsg(message: _89.EventBurnProtoMsg): _89.EventBurn;
                toProto(message: _89.EventBurn): Uint8Array;
                toProtoMsg(message: _89.EventBurn): _89.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _94.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _94.Module;
                    fromPartial(_: Partial<_94.Module>): _94.Module;
                    fromAmino(_: _94.ModuleAmino): _94.Module;
                    toAmino(_: _94.Module): _94.ModuleAmino;
                    fromAminoMsg(object: _94.ModuleAminoMsg): _94.Module;
                    toAminoMsg(message: _94.Module): _94.ModuleAminoMsg;
                    fromProtoMsg(message: _94.ModuleProtoMsg): _94.Module;
                    toProto(message: _94.Module): Uint8Array;
                    toProtoMsg(message: _94.Module): _94.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _95.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.TableDescriptor;
                fromPartial(object: Partial<_95.TableDescriptor>): _95.TableDescriptor;
                fromAmino(object: _95.TableDescriptorAmino): _95.TableDescriptor;
                toAmino(message: _95.TableDescriptor): _95.TableDescriptorAmino;
                fromAminoMsg(object: _95.TableDescriptorAminoMsg): _95.TableDescriptor;
                toAminoMsg(message: _95.TableDescriptor): _95.TableDescriptorAminoMsg;
                fromProtoMsg(message: _95.TableDescriptorProtoMsg): _95.TableDescriptor;
                toProto(message: _95.TableDescriptor): Uint8Array;
                toProtoMsg(message: _95.TableDescriptor): _95.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _95.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_95.PrimaryKeyDescriptor>): _95.PrimaryKeyDescriptor;
                fromAmino(object: _95.PrimaryKeyDescriptorAmino): _95.PrimaryKeyDescriptor;
                toAmino(message: _95.PrimaryKeyDescriptor): _95.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _95.PrimaryKeyDescriptorAminoMsg): _95.PrimaryKeyDescriptor;
                toAminoMsg(message: _95.PrimaryKeyDescriptor): _95.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _95.PrimaryKeyDescriptorProtoMsg): _95.PrimaryKeyDescriptor;
                toProto(message: _95.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _95.PrimaryKeyDescriptor): _95.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _95.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_95.SecondaryIndexDescriptor>): _95.SecondaryIndexDescriptor;
                fromAmino(object: _95.SecondaryIndexDescriptorAmino): _95.SecondaryIndexDescriptor;
                toAmino(message: _95.SecondaryIndexDescriptor): _95.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _95.SecondaryIndexDescriptorAminoMsg): _95.SecondaryIndexDescriptor;
                toAminoMsg(message: _95.SecondaryIndexDescriptor): _95.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _95.SecondaryIndexDescriptorProtoMsg): _95.SecondaryIndexDescriptor;
                toProto(message: _95.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _95.SecondaryIndexDescriptor): _95.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _95.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.SingletonDescriptor;
                fromPartial(object: Partial<_95.SingletonDescriptor>): _95.SingletonDescriptor;
                fromAmino(object: _95.SingletonDescriptorAmino): _95.SingletonDescriptor;
                toAmino(message: _95.SingletonDescriptor): _95.SingletonDescriptorAmino;
                fromAminoMsg(object: _95.SingletonDescriptorAminoMsg): _95.SingletonDescriptor;
                toAminoMsg(message: _95.SingletonDescriptor): _95.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _95.SingletonDescriptorProtoMsg): _95.SingletonDescriptor;
                toProto(message: _95.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _95.SingletonDescriptor): _95.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _96.StorageType;
            storageTypeToJSON(object: _96.StorageType): string;
            StorageType: typeof _96.StorageType;
            StorageTypeSDKType: typeof _96.StorageType;
            StorageTypeAmino: typeof _96.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _96.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_96.ModuleSchemaDescriptor>): _96.ModuleSchemaDescriptor;
                fromAmino(object: _96.ModuleSchemaDescriptorAmino): _96.ModuleSchemaDescriptor;
                toAmino(message: _96.ModuleSchemaDescriptor): _96.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _96.ModuleSchemaDescriptorAminoMsg): _96.ModuleSchemaDescriptor;
                toAminoMsg(message: _96.ModuleSchemaDescriptor): _96.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _96.ModuleSchemaDescriptorProtoMsg): _96.ModuleSchemaDescriptor;
                toProto(message: _96.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _96.ModuleSchemaDescriptor): _96.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _96.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_96.ModuleSchemaDescriptor_FileEntry>): _96.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _96.ModuleSchemaDescriptor_FileEntryAmino): _96.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _96.ModuleSchemaDescriptor_FileEntry): _96.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _96.ModuleSchemaDescriptor_FileEntryAminoMsg): _96.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _96.ModuleSchemaDescriptor_FileEntry): _96.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _96.ModuleSchemaDescriptor_FileEntryProtoMsg): _96.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _96.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _96.ModuleSchemaDescriptor_FileEntry): _96.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _220.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                subspaces(request?: _98.QuerySubspacesRequest): Promise<_98.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _201.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _98.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryParamsRequest;
                fromPartial(object: Partial<_98.QueryParamsRequest>): _98.QueryParamsRequest;
                fromAmino(object: _98.QueryParamsRequestAmino): _98.QueryParamsRequest;
                toAmino(message: _98.QueryParamsRequest): _98.QueryParamsRequestAmino;
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
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _98.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _98.QuerySubspacesRequest;
                fromPartial(_: Partial<_98.QuerySubspacesRequest>): _98.QuerySubspacesRequest;
                fromAmino(_: _98.QuerySubspacesRequestAmino): _98.QuerySubspacesRequest;
                toAmino(_: _98.QuerySubspacesRequest): _98.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _98.QuerySubspacesRequestAminoMsg): _98.QuerySubspacesRequest;
                toAminoMsg(message: _98.QuerySubspacesRequest): _98.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _98.QuerySubspacesRequestProtoMsg): _98.QuerySubspacesRequest;
                toProto(message: _98.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _98.QuerySubspacesRequest): _98.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _98.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QuerySubspacesResponse;
                fromPartial(object: Partial<_98.QuerySubspacesResponse>): _98.QuerySubspacesResponse;
                fromAmino(object: _98.QuerySubspacesResponseAmino): _98.QuerySubspacesResponse;
                toAmino(message: _98.QuerySubspacesResponse): _98.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _98.QuerySubspacesResponseAminoMsg): _98.QuerySubspacesResponse;
                toAminoMsg(message: _98.QuerySubspacesResponse): _98.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _98.QuerySubspacesResponseProtoMsg): _98.QuerySubspacesResponse;
                toProto(message: _98.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _98.QuerySubspacesResponse): _98.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _98.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.Subspace;
                fromPartial(object: Partial<_98.Subspace>): _98.Subspace;
                fromAmino(object: _98.SubspaceAmino): _98.Subspace;
                toAmino(message: _98.Subspace): _98.SubspaceAmino;
                fromAminoMsg(object: _98.SubspaceAminoMsg): _98.Subspace;
                toAminoMsg(message: _98.Subspace): _98.SubspaceAminoMsg;
                fromProtoMsg(message: _98.SubspaceProtoMsg): _98.Subspace;
                toProto(message: _98.Subspace): Uint8Array;
                toProtoMsg(message: _98.Subspace): _98.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _97.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.ParameterChangeProposal;
                fromPartial(object: Partial<_97.ParameterChangeProposal>): _97.ParameterChangeProposal;
                fromAmino(object: _97.ParameterChangeProposalAmino): _97.ParameterChangeProposal;
                toAmino(message: _97.ParameterChangeProposal): _97.ParameterChangeProposalAmino;
                fromAminoMsg(object: _97.ParameterChangeProposalAminoMsg): _97.ParameterChangeProposal;
                toAminoMsg(message: _97.ParameterChangeProposal): _97.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _97.ParameterChangeProposalProtoMsg): _97.ParameterChangeProposal;
                toProto(message: _97.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _97.ParameterChangeProposal): _97.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _97.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.ParamChange;
                fromPartial(object: Partial<_97.ParamChange>): _97.ParamChange;
                fromAmino(object: _97.ParamChangeAmino): _97.ParamChange;
                toAmino(message: _97.ParamChange): _97.ParamChangeAmino;
                fromAminoMsg(object: _97.ParamChangeAminoMsg): _97.ParamChange;
                toAminoMsg(message: _97.ParamChange): _97.ParamChangeAminoMsg;
                fromProtoMsg(message: _97.ParamChangeProtoMsg): _97.ParamChange;
                toProto(message: _97.ParamChange): Uint8Array;
                toProtoMsg(message: _97.ParamChange): _97.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _235.MsgClientImpl;
            QueryClientImpl: typeof _221.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _100.QueryParamsRequest): Promise<_100.QueryParamsResponse>;
                signingInfo(request: _100.QuerySigningInfoRequest): Promise<_100.QuerySigningInfoResponse>;
                signingInfos(request?: _100.QuerySigningInfosRequest): Promise<_100.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _202.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _102.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _102.MsgUnjail): {
                        typeUrl: string;
                        value: _102.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _102.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _102.MsgUnjail): {
                        typeUrl: string;
                        value: _102.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _102.MsgUnjail) => _102.MsgUnjailAmino;
                    fromAmino: (object: _102.MsgUnjailAmino) => _102.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _102.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.MsgUnjail;
                fromPartial(object: Partial<_102.MsgUnjail>): _102.MsgUnjail;
                fromAmino(object: _102.MsgUnjailAmino): _102.MsgUnjail;
                toAmino(message: _102.MsgUnjail): _102.MsgUnjailAmino;
                fromAminoMsg(object: _102.MsgUnjailAminoMsg): _102.MsgUnjail;
                toAminoMsg(message: _102.MsgUnjail): _102.MsgUnjailAminoMsg;
                fromProtoMsg(message: _102.MsgUnjailProtoMsg): _102.MsgUnjail;
                toProto(message: _102.MsgUnjail): Uint8Array;
                toProtoMsg(message: _102.MsgUnjail): _102.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _102.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _102.MsgUnjailResponse;
                fromPartial(_: Partial<_102.MsgUnjailResponse>): _102.MsgUnjailResponse;
                fromAmino(_: _102.MsgUnjailResponseAmino): _102.MsgUnjailResponse;
                toAmino(_: _102.MsgUnjailResponse): _102.MsgUnjailResponseAmino;
                fromAminoMsg(object: _102.MsgUnjailResponseAminoMsg): _102.MsgUnjailResponse;
                toAminoMsg(message: _102.MsgUnjailResponse): _102.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _102.MsgUnjailResponseProtoMsg): _102.MsgUnjailResponse;
                toProto(message: _102.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _102.MsgUnjailResponse): _102.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _101.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.ValidatorSigningInfo;
                fromPartial(object: Partial<_101.ValidatorSigningInfo>): _101.ValidatorSigningInfo;
                fromAmino(object: _101.ValidatorSigningInfoAmino): _101.ValidatorSigningInfo;
                toAmino(message: _101.ValidatorSigningInfo): _101.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _101.ValidatorSigningInfoAminoMsg): _101.ValidatorSigningInfo;
                toAminoMsg(message: _101.ValidatorSigningInfo): _101.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _101.ValidatorSigningInfoProtoMsg): _101.ValidatorSigningInfo;
                toProto(message: _101.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _101.ValidatorSigningInfo): _101.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _101.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.Params;
                fromPartial(object: Partial<_101.Params>): _101.Params;
                fromAmino(object: _101.ParamsAmino): _101.Params;
                toAmino(message: _101.Params): _101.ParamsAmino;
                fromAminoMsg(object: _101.ParamsAminoMsg): _101.Params;
                toAminoMsg(message: _101.Params): _101.ParamsAminoMsg;
                fromProtoMsg(message: _101.ParamsProtoMsg): _101.Params;
                toProto(message: _101.Params): Uint8Array;
                toProtoMsg(message: _101.Params): _101.ParamsProtoMsg;
            };
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
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _100.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QuerySigningInfoRequest;
                fromPartial(object: Partial<_100.QuerySigningInfoRequest>): _100.QuerySigningInfoRequest;
                fromAmino(object: _100.QuerySigningInfoRequestAmino): _100.QuerySigningInfoRequest;
                toAmino(message: _100.QuerySigningInfoRequest): _100.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _100.QuerySigningInfoRequestAminoMsg): _100.QuerySigningInfoRequest;
                toAminoMsg(message: _100.QuerySigningInfoRequest): _100.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _100.QuerySigningInfoRequestProtoMsg): _100.QuerySigningInfoRequest;
                toProto(message: _100.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _100.QuerySigningInfoRequest): _100.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _100.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QuerySigningInfoResponse;
                fromPartial(object: Partial<_100.QuerySigningInfoResponse>): _100.QuerySigningInfoResponse;
                fromAmino(object: _100.QuerySigningInfoResponseAmino): _100.QuerySigningInfoResponse;
                toAmino(message: _100.QuerySigningInfoResponse): _100.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _100.QuerySigningInfoResponseAminoMsg): _100.QuerySigningInfoResponse;
                toAminoMsg(message: _100.QuerySigningInfoResponse): _100.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _100.QuerySigningInfoResponseProtoMsg): _100.QuerySigningInfoResponse;
                toProto(message: _100.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _100.QuerySigningInfoResponse): _100.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _100.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QuerySigningInfosRequest;
                fromPartial(object: Partial<_100.QuerySigningInfosRequest>): _100.QuerySigningInfosRequest;
                fromAmino(object: _100.QuerySigningInfosRequestAmino): _100.QuerySigningInfosRequest;
                toAmino(message: _100.QuerySigningInfosRequest): _100.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _100.QuerySigningInfosRequestAminoMsg): _100.QuerySigningInfosRequest;
                toAminoMsg(message: _100.QuerySigningInfosRequest): _100.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _100.QuerySigningInfosRequestProtoMsg): _100.QuerySigningInfosRequest;
                toProto(message: _100.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _100.QuerySigningInfosRequest): _100.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _100.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QuerySigningInfosResponse;
                fromPartial(object: Partial<_100.QuerySigningInfosResponse>): _100.QuerySigningInfosResponse;
                fromAmino(object: _100.QuerySigningInfosResponseAmino): _100.QuerySigningInfosResponse;
                toAmino(message: _100.QuerySigningInfosResponse): _100.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _100.QuerySigningInfosResponseAminoMsg): _100.QuerySigningInfosResponse;
                toAminoMsg(message: _100.QuerySigningInfosResponse): _100.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _100.QuerySigningInfosResponseProtoMsg): _100.QuerySigningInfosResponse;
                toProto(message: _100.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _100.QuerySigningInfosResponse): _100.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _99.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.SigningInfo;
                fromPartial(object: Partial<_99.SigningInfo>): _99.SigningInfo;
                fromAmino(object: _99.SigningInfoAmino): _99.SigningInfo;
                toAmino(message: _99.SigningInfo): _99.SigningInfoAmino;
                fromAminoMsg(object: _99.SigningInfoAminoMsg): _99.SigningInfo;
                toAminoMsg(message: _99.SigningInfo): _99.SigningInfoAminoMsg;
                fromProtoMsg(message: _99.SigningInfoProtoMsg): _99.SigningInfo;
                toProto(message: _99.SigningInfo): Uint8Array;
                toProtoMsg(message: _99.SigningInfo): _99.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _99.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.ValidatorMissedBlocks;
                fromPartial(object: Partial<_99.ValidatorMissedBlocks>): _99.ValidatorMissedBlocks;
                fromAmino(object: _99.ValidatorMissedBlocksAmino): _99.ValidatorMissedBlocks;
                toAmino(message: _99.ValidatorMissedBlocks): _99.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _99.ValidatorMissedBlocksAminoMsg): _99.ValidatorMissedBlocks;
                toAminoMsg(message: _99.ValidatorMissedBlocks): _99.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _99.ValidatorMissedBlocksProtoMsg): _99.ValidatorMissedBlocks;
                toProto(message: _99.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _99.ValidatorMissedBlocks): _99.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _99.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.MissedBlock;
                fromPartial(object: Partial<_99.MissedBlock>): _99.MissedBlock;
                fromAmino(object: _99.MissedBlockAmino): _99.MissedBlock;
                toAmino(message: _99.MissedBlock): _99.MissedBlockAmino;
                fromAminoMsg(object: _99.MissedBlockAminoMsg): _99.MissedBlock;
                toAminoMsg(message: _99.MissedBlock): _99.MissedBlockAminoMsg;
                fromProtoMsg(message: _99.MissedBlockProtoMsg): _99.MissedBlock;
                toProto(message: _99.MissedBlock): Uint8Array;
                toProtoMsg(message: _99.MissedBlock): _99.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _236.MsgClientImpl;
            QueryClientImpl: typeof _222.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                validators(request: _105.QueryValidatorsRequest): Promise<_105.QueryValidatorsResponse>;
                validator(request: _105.QueryValidatorRequest): Promise<_105.QueryValidatorResponse>;
                validatorDelegations(request: _105.QueryValidatorDelegationsRequest): Promise<_105.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _105.QueryValidatorUnbondingDelegationsRequest): Promise<_105.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _105.QueryDelegationRequest): Promise<_105.QueryDelegationResponse>;
                unbondingDelegation(request: _105.QueryUnbondingDelegationRequest): Promise<_105.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _105.QueryDelegatorDelegationsRequest): Promise<_105.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _105.QueryDelegatorUnbondingDelegationsRequest): Promise<_105.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _105.QueryRedelegationsRequest): Promise<_105.QueryRedelegationsResponse>;
                delegatorValidators(request: _105.QueryDelegatorValidatorsRequest): Promise<_105.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _105.QueryDelegatorValidatorRequest): Promise<_105.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _105.QueryHistoricalInfoRequest): Promise<_105.QueryHistoricalInfoResponse>;
                pool(request?: _105.QueryPoolRequest): Promise<_105.QueryPoolResponse>;
                params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _203.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _107.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _107.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _107.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _107.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _107.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _107.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _107.MsgCreateValidator): {
                        typeUrl: string;
                        value: _107.MsgCreateValidator;
                    };
                    editValidator(value: _107.MsgEditValidator): {
                        typeUrl: string;
                        value: _107.MsgEditValidator;
                    };
                    delegate(value: _107.MsgDelegate): {
                        typeUrl: string;
                        value: _107.MsgDelegate;
                    };
                    beginRedelegate(value: _107.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _107.MsgBeginRedelegate;
                    };
                    undelegate(value: _107.MsgUndelegate): {
                        typeUrl: string;
                        value: _107.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _107.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _107.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _107.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _107.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _107.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _107.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _107.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _107.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _107.MsgCreateValidator): {
                        typeUrl: string;
                        value: _107.MsgCreateValidator;
                    };
                    editValidator(value: _107.MsgEditValidator): {
                        typeUrl: string;
                        value: _107.MsgEditValidator;
                    };
                    delegate(value: _107.MsgDelegate): {
                        typeUrl: string;
                        value: _107.MsgDelegate;
                    };
                    beginRedelegate(value: _107.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _107.MsgBeginRedelegate;
                    };
                    undelegate(value: _107.MsgUndelegate): {
                        typeUrl: string;
                        value: _107.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _107.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _107.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _107.MsgCreateValidator) => _107.MsgCreateValidatorAmino;
                    fromAmino: (object: _107.MsgCreateValidatorAmino) => _107.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _107.MsgEditValidator) => _107.MsgEditValidatorAmino;
                    fromAmino: (object: _107.MsgEditValidatorAmino) => _107.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _107.MsgDelegate) => _107.MsgDelegateAmino;
                    fromAmino: (object: _107.MsgDelegateAmino) => _107.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _107.MsgBeginRedelegate) => _107.MsgBeginRedelegateAmino;
                    fromAmino: (object: _107.MsgBeginRedelegateAmino) => _107.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _107.MsgUndelegate) => _107.MsgUndelegateAmino;
                    fromAmino: (object: _107.MsgUndelegateAmino) => _107.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _107.MsgCancelUnbondingDelegation) => _107.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _107.MsgCancelUnbondingDelegationAmino) => _107.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _107.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgCreateValidator;
                fromPartial(object: Partial<_107.MsgCreateValidator>): _107.MsgCreateValidator;
                fromAmino(object: _107.MsgCreateValidatorAmino): _107.MsgCreateValidator;
                toAmino(message: _107.MsgCreateValidator): _107.MsgCreateValidatorAmino;
                fromAminoMsg(object: _107.MsgCreateValidatorAminoMsg): _107.MsgCreateValidator;
                toAminoMsg(message: _107.MsgCreateValidator): _107.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _107.MsgCreateValidatorProtoMsg): _107.MsgCreateValidator;
                toProto(message: _107.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _107.MsgCreateValidator): _107.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _107.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _107.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_107.MsgCreateValidatorResponse>): _107.MsgCreateValidatorResponse;
                fromAmino(_: _107.MsgCreateValidatorResponseAmino): _107.MsgCreateValidatorResponse;
                toAmino(_: _107.MsgCreateValidatorResponse): _107.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _107.MsgCreateValidatorResponseAminoMsg): _107.MsgCreateValidatorResponse;
                toAminoMsg(message: _107.MsgCreateValidatorResponse): _107.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _107.MsgCreateValidatorResponseProtoMsg): _107.MsgCreateValidatorResponse;
                toProto(message: _107.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _107.MsgCreateValidatorResponse): _107.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _107.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgEditValidator;
                fromPartial(object: Partial<_107.MsgEditValidator>): _107.MsgEditValidator;
                fromAmino(object: _107.MsgEditValidatorAmino): _107.MsgEditValidator;
                toAmino(message: _107.MsgEditValidator): _107.MsgEditValidatorAmino;
                fromAminoMsg(object: _107.MsgEditValidatorAminoMsg): _107.MsgEditValidator;
                toAminoMsg(message: _107.MsgEditValidator): _107.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _107.MsgEditValidatorProtoMsg): _107.MsgEditValidator;
                toProto(message: _107.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _107.MsgEditValidator): _107.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _107.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _107.MsgEditValidatorResponse;
                fromPartial(_: Partial<_107.MsgEditValidatorResponse>): _107.MsgEditValidatorResponse;
                fromAmino(_: _107.MsgEditValidatorResponseAmino): _107.MsgEditValidatorResponse;
                toAmino(_: _107.MsgEditValidatorResponse): _107.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _107.MsgEditValidatorResponseAminoMsg): _107.MsgEditValidatorResponse;
                toAminoMsg(message: _107.MsgEditValidatorResponse): _107.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _107.MsgEditValidatorResponseProtoMsg): _107.MsgEditValidatorResponse;
                toProto(message: _107.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _107.MsgEditValidatorResponse): _107.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _107.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgDelegate;
                fromPartial(object: Partial<_107.MsgDelegate>): _107.MsgDelegate;
                fromAmino(object: _107.MsgDelegateAmino): _107.MsgDelegate;
                toAmino(message: _107.MsgDelegate): _107.MsgDelegateAmino;
                fromAminoMsg(object: _107.MsgDelegateAminoMsg): _107.MsgDelegate;
                toAminoMsg(message: _107.MsgDelegate): _107.MsgDelegateAminoMsg;
                fromProtoMsg(message: _107.MsgDelegateProtoMsg): _107.MsgDelegate;
                toProto(message: _107.MsgDelegate): Uint8Array;
                toProtoMsg(message: _107.MsgDelegate): _107.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _107.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _107.MsgDelegateResponse;
                fromPartial(_: Partial<_107.MsgDelegateResponse>): _107.MsgDelegateResponse;
                fromAmino(_: _107.MsgDelegateResponseAmino): _107.MsgDelegateResponse;
                toAmino(_: _107.MsgDelegateResponse): _107.MsgDelegateResponseAmino;
                fromAminoMsg(object: _107.MsgDelegateResponseAminoMsg): _107.MsgDelegateResponse;
                toAminoMsg(message: _107.MsgDelegateResponse): _107.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _107.MsgDelegateResponseProtoMsg): _107.MsgDelegateResponse;
                toProto(message: _107.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _107.MsgDelegateResponse): _107.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _107.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgBeginRedelegate;
                fromPartial(object: Partial<_107.MsgBeginRedelegate>): _107.MsgBeginRedelegate;
                fromAmino(object: _107.MsgBeginRedelegateAmino): _107.MsgBeginRedelegate;
                toAmino(message: _107.MsgBeginRedelegate): _107.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _107.MsgBeginRedelegateAminoMsg): _107.MsgBeginRedelegate;
                toAminoMsg(message: _107.MsgBeginRedelegate): _107.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _107.MsgBeginRedelegateProtoMsg): _107.MsgBeginRedelegate;
                toProto(message: _107.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _107.MsgBeginRedelegate): _107.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _107.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_107.MsgBeginRedelegateResponse>): _107.MsgBeginRedelegateResponse;
                fromAmino(object: _107.MsgBeginRedelegateResponseAmino): _107.MsgBeginRedelegateResponse;
                toAmino(message: _107.MsgBeginRedelegateResponse): _107.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _107.MsgBeginRedelegateResponseAminoMsg): _107.MsgBeginRedelegateResponse;
                toAminoMsg(message: _107.MsgBeginRedelegateResponse): _107.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _107.MsgBeginRedelegateResponseProtoMsg): _107.MsgBeginRedelegateResponse;
                toProto(message: _107.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _107.MsgBeginRedelegateResponse): _107.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _107.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgUndelegate;
                fromPartial(object: Partial<_107.MsgUndelegate>): _107.MsgUndelegate;
                fromAmino(object: _107.MsgUndelegateAmino): _107.MsgUndelegate;
                toAmino(message: _107.MsgUndelegate): _107.MsgUndelegateAmino;
                fromAminoMsg(object: _107.MsgUndelegateAminoMsg): _107.MsgUndelegate;
                toAminoMsg(message: _107.MsgUndelegate): _107.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _107.MsgUndelegateProtoMsg): _107.MsgUndelegate;
                toProto(message: _107.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _107.MsgUndelegate): _107.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _107.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgUndelegateResponse;
                fromPartial(object: Partial<_107.MsgUndelegateResponse>): _107.MsgUndelegateResponse;
                fromAmino(object: _107.MsgUndelegateResponseAmino): _107.MsgUndelegateResponse;
                toAmino(message: _107.MsgUndelegateResponse): _107.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _107.MsgUndelegateResponseAminoMsg): _107.MsgUndelegateResponse;
                toAminoMsg(message: _107.MsgUndelegateResponse): _107.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _107.MsgUndelegateResponseProtoMsg): _107.MsgUndelegateResponse;
                toProto(message: _107.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _107.MsgUndelegateResponse): _107.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _107.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_107.MsgCancelUnbondingDelegation>): _107.MsgCancelUnbondingDelegation;
                fromAmino(object: _107.MsgCancelUnbondingDelegationAmino): _107.MsgCancelUnbondingDelegation;
                toAmino(message: _107.MsgCancelUnbondingDelegation): _107.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _107.MsgCancelUnbondingDelegationAminoMsg): _107.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _107.MsgCancelUnbondingDelegation): _107.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _107.MsgCancelUnbondingDelegationProtoMsg): _107.MsgCancelUnbondingDelegation;
                toProto(message: _107.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _107.MsgCancelUnbondingDelegation): _107.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _107.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _107.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_107.MsgCancelUnbondingDelegationResponse>): _107.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _107.MsgCancelUnbondingDelegationResponseAmino): _107.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _107.MsgCancelUnbondingDelegationResponse): _107.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _107.MsgCancelUnbondingDelegationResponseAminoMsg): _107.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _107.MsgCancelUnbondingDelegationResponse): _107.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _107.MsgCancelUnbondingDelegationResponseProtoMsg): _107.MsgCancelUnbondingDelegationResponse;
                toProto(message: _107.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _107.MsgCancelUnbondingDelegationResponse): _107.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => any;
            bondStatusFromJSON(object: any): _106.BondStatus;
            bondStatusToJSON(object: _106.BondStatus): string;
            BondStatus: typeof _106.BondStatus;
            BondStatusSDKType: typeof _106.BondStatus;
            BondStatusAmino: typeof _106.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _106.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.HistoricalInfo;
                fromPartial(object: Partial<_106.HistoricalInfo>): _106.HistoricalInfo;
                fromAmino(object: _106.HistoricalInfoAmino): _106.HistoricalInfo;
                toAmino(message: _106.HistoricalInfo): _106.HistoricalInfoAmino;
                fromAminoMsg(object: _106.HistoricalInfoAminoMsg): _106.HistoricalInfo;
                toAminoMsg(message: _106.HistoricalInfo): _106.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _106.HistoricalInfoProtoMsg): _106.HistoricalInfo;
                toProto(message: _106.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _106.HistoricalInfo): _106.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _106.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.CommissionRates;
                fromPartial(object: Partial<_106.CommissionRates>): _106.CommissionRates;
                fromAmino(object: _106.CommissionRatesAmino): _106.CommissionRates;
                toAmino(message: _106.CommissionRates): _106.CommissionRatesAmino;
                fromAminoMsg(object: _106.CommissionRatesAminoMsg): _106.CommissionRates;
                toAminoMsg(message: _106.CommissionRates): _106.CommissionRatesAminoMsg;
                fromProtoMsg(message: _106.CommissionRatesProtoMsg): _106.CommissionRates;
                toProto(message: _106.CommissionRates): Uint8Array;
                toProtoMsg(message: _106.CommissionRates): _106.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _106.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.Commission;
                fromPartial(object: Partial<_106.Commission>): _106.Commission;
                fromAmino(object: _106.CommissionAmino): _106.Commission;
                toAmino(message: _106.Commission): _106.CommissionAmino;
                fromAminoMsg(object: _106.CommissionAminoMsg): _106.Commission;
                toAminoMsg(message: _106.Commission): _106.CommissionAminoMsg;
                fromProtoMsg(message: _106.CommissionProtoMsg): _106.Commission;
                toProto(message: _106.Commission): Uint8Array;
                toProtoMsg(message: _106.Commission): _106.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _106.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.Description;
                fromPartial(object: Partial<_106.Description>): _106.Description;
                fromAmino(object: _106.DescriptionAmino): _106.Description;
                toAmino(message: _106.Description): _106.DescriptionAmino;
                fromAminoMsg(object: _106.DescriptionAminoMsg): _106.Description;
                toAminoMsg(message: _106.Description): _106.DescriptionAminoMsg;
                fromProtoMsg(message: _106.DescriptionProtoMsg): _106.Description;
                toProto(message: _106.Description): Uint8Array;
                toProtoMsg(message: _106.Description): _106.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _106.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.Validator;
                fromPartial(object: Partial<_106.Validator>): _106.Validator;
                fromAmino(object: _106.ValidatorAmino): _106.Validator;
                toAmino(message: _106.Validator): _106.ValidatorAmino;
                fromAminoMsg(object: _106.ValidatorAminoMsg): _106.Validator;
                toAminoMsg(message: _106.Validator): _106.ValidatorAminoMsg;
                fromProtoMsg(message: _106.ValidatorProtoMsg): _106.Validator;
                toProto(message: _106.Validator): Uint8Array;
                toProtoMsg(message: _106.Validator): _106.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _106.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.ValAddresses;
                fromPartial(object: Partial<_106.ValAddresses>): _106.ValAddresses;
                fromAmino(object: _106.ValAddressesAmino): _106.ValAddresses;
                toAmino(message: _106.ValAddresses): _106.ValAddressesAmino;
                fromAminoMsg(object: _106.ValAddressesAminoMsg): _106.ValAddresses;
                toAminoMsg(message: _106.ValAddresses): _106.ValAddressesAminoMsg;
                fromProtoMsg(message: _106.ValAddressesProtoMsg): _106.ValAddresses;
                toProto(message: _106.ValAddresses): Uint8Array;
                toProtoMsg(message: _106.ValAddresses): _106.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _106.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.DVPair;
                fromPartial(object: Partial<_106.DVPair>): _106.DVPair;
                fromAmino(object: _106.DVPairAmino): _106.DVPair;
                toAmino(message: _106.DVPair): _106.DVPairAmino;
                fromAminoMsg(object: _106.DVPairAminoMsg): _106.DVPair;
                toAminoMsg(message: _106.DVPair): _106.DVPairAminoMsg;
                fromProtoMsg(message: _106.DVPairProtoMsg): _106.DVPair;
                toProto(message: _106.DVPair): Uint8Array;
                toProtoMsg(message: _106.DVPair): _106.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _106.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.DVPairs;
                fromPartial(object: Partial<_106.DVPairs>): _106.DVPairs;
                fromAmino(object: _106.DVPairsAmino): _106.DVPairs;
                toAmino(message: _106.DVPairs): _106.DVPairsAmino;
                fromAminoMsg(object: _106.DVPairsAminoMsg): _106.DVPairs;
                toAminoMsg(message: _106.DVPairs): _106.DVPairsAminoMsg;
                fromProtoMsg(message: _106.DVPairsProtoMsg): _106.DVPairs;
                toProto(message: _106.DVPairs): Uint8Array;
                toProtoMsg(message: _106.DVPairs): _106.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _106.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.DVVTriplet;
                fromPartial(object: Partial<_106.DVVTriplet>): _106.DVVTriplet;
                fromAmino(object: _106.DVVTripletAmino): _106.DVVTriplet;
                toAmino(message: _106.DVVTriplet): _106.DVVTripletAmino;
                fromAminoMsg(object: _106.DVVTripletAminoMsg): _106.DVVTriplet;
                toAminoMsg(message: _106.DVVTriplet): _106.DVVTripletAminoMsg;
                fromProtoMsg(message: _106.DVVTripletProtoMsg): _106.DVVTriplet;
                toProto(message: _106.DVVTriplet): Uint8Array;
                toProtoMsg(message: _106.DVVTriplet): _106.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _106.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.DVVTriplets;
                fromPartial(object: Partial<_106.DVVTriplets>): _106.DVVTriplets;
                fromAmino(object: _106.DVVTripletsAmino): _106.DVVTriplets;
                toAmino(message: _106.DVVTriplets): _106.DVVTripletsAmino;
                fromAminoMsg(object: _106.DVVTripletsAminoMsg): _106.DVVTriplets;
                toAminoMsg(message: _106.DVVTriplets): _106.DVVTripletsAminoMsg;
                fromProtoMsg(message: _106.DVVTripletsProtoMsg): _106.DVVTriplets;
                toProto(message: _106.DVVTriplets): Uint8Array;
                toProtoMsg(message: _106.DVVTriplets): _106.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _106.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.Delegation;
                fromPartial(object: Partial<_106.Delegation>): _106.Delegation;
                fromAmino(object: _106.DelegationAmino): _106.Delegation;
                toAmino(message: _106.Delegation): _106.DelegationAmino;
                fromAminoMsg(object: _106.DelegationAminoMsg): _106.Delegation;
                toAminoMsg(message: _106.Delegation): _106.DelegationAminoMsg;
                fromProtoMsg(message: _106.DelegationProtoMsg): _106.Delegation;
                toProto(message: _106.Delegation): Uint8Array;
                toProtoMsg(message: _106.Delegation): _106.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _106.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.UnbondingDelegation;
                fromPartial(object: Partial<_106.UnbondingDelegation>): _106.UnbondingDelegation;
                fromAmino(object: _106.UnbondingDelegationAmino): _106.UnbondingDelegation;
                toAmino(message: _106.UnbondingDelegation): _106.UnbondingDelegationAmino;
                fromAminoMsg(object: _106.UnbondingDelegationAminoMsg): _106.UnbondingDelegation;
                toAminoMsg(message: _106.UnbondingDelegation): _106.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _106.UnbondingDelegationProtoMsg): _106.UnbondingDelegation;
                toProto(message: _106.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _106.UnbondingDelegation): _106.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _106.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.UnbondingDelegationEntry;
                fromPartial(object: Partial<_106.UnbondingDelegationEntry>): _106.UnbondingDelegationEntry;
                fromAmino(object: _106.UnbondingDelegationEntryAmino): _106.UnbondingDelegationEntry;
                toAmino(message: _106.UnbondingDelegationEntry): _106.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _106.UnbondingDelegationEntryAminoMsg): _106.UnbondingDelegationEntry;
                toAminoMsg(message: _106.UnbondingDelegationEntry): _106.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _106.UnbondingDelegationEntryProtoMsg): _106.UnbondingDelegationEntry;
                toProto(message: _106.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _106.UnbondingDelegationEntry): _106.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _106.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.RedelegationEntry;
                fromPartial(object: Partial<_106.RedelegationEntry>): _106.RedelegationEntry;
                fromAmino(object: _106.RedelegationEntryAmino): _106.RedelegationEntry;
                toAmino(message: _106.RedelegationEntry): _106.RedelegationEntryAmino;
                fromAminoMsg(object: _106.RedelegationEntryAminoMsg): _106.RedelegationEntry;
                toAminoMsg(message: _106.RedelegationEntry): _106.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _106.RedelegationEntryProtoMsg): _106.RedelegationEntry;
                toProto(message: _106.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _106.RedelegationEntry): _106.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _106.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.Redelegation;
                fromPartial(object: Partial<_106.Redelegation>): _106.Redelegation;
                fromAmino(object: _106.RedelegationAmino): _106.Redelegation;
                toAmino(message: _106.Redelegation): _106.RedelegationAmino;
                fromAminoMsg(object: _106.RedelegationAminoMsg): _106.Redelegation;
                toAminoMsg(message: _106.Redelegation): _106.RedelegationAminoMsg;
                fromProtoMsg(message: _106.RedelegationProtoMsg): _106.Redelegation;
                toProto(message: _106.Redelegation): Uint8Array;
                toProtoMsg(message: _106.Redelegation): _106.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _106.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.Params;
                fromPartial(object: Partial<_106.Params>): _106.Params;
                fromAmino(object: _106.ParamsAmino): _106.Params;
                toAmino(message: _106.Params): _106.ParamsAmino;
                fromAminoMsg(object: _106.ParamsAminoMsg): _106.Params;
                toAminoMsg(message: _106.Params): _106.ParamsAminoMsg;
                fromProtoMsg(message: _106.ParamsProtoMsg): _106.Params;
                toProto(message: _106.Params): Uint8Array;
                toProtoMsg(message: _106.Params): _106.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _106.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.DelegationResponse;
                fromPartial(object: Partial<_106.DelegationResponse>): _106.DelegationResponse;
                fromAmino(object: _106.DelegationResponseAmino): _106.DelegationResponse;
                toAmino(message: _106.DelegationResponse): _106.DelegationResponseAmino;
                fromAminoMsg(object: _106.DelegationResponseAminoMsg): _106.DelegationResponse;
                toAminoMsg(message: _106.DelegationResponse): _106.DelegationResponseAminoMsg;
                fromProtoMsg(message: _106.DelegationResponseProtoMsg): _106.DelegationResponse;
                toProto(message: _106.DelegationResponse): Uint8Array;
                toProtoMsg(message: _106.DelegationResponse): _106.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _106.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.RedelegationEntryResponse;
                fromPartial(object: Partial<_106.RedelegationEntryResponse>): _106.RedelegationEntryResponse;
                fromAmino(object: _106.RedelegationEntryResponseAmino): _106.RedelegationEntryResponse;
                toAmino(message: _106.RedelegationEntryResponse): _106.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _106.RedelegationEntryResponseAminoMsg): _106.RedelegationEntryResponse;
                toAminoMsg(message: _106.RedelegationEntryResponse): _106.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _106.RedelegationEntryResponseProtoMsg): _106.RedelegationEntryResponse;
                toProto(message: _106.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _106.RedelegationEntryResponse): _106.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _106.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.RedelegationResponse;
                fromPartial(object: Partial<_106.RedelegationResponse>): _106.RedelegationResponse;
                fromAmino(object: _106.RedelegationResponseAmino): _106.RedelegationResponse;
                toAmino(message: _106.RedelegationResponse): _106.RedelegationResponseAmino;
                fromAminoMsg(object: _106.RedelegationResponseAminoMsg): _106.RedelegationResponse;
                toAminoMsg(message: _106.RedelegationResponse): _106.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _106.RedelegationResponseProtoMsg): _106.RedelegationResponse;
                toProto(message: _106.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _106.RedelegationResponse): _106.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _106.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.Pool;
                fromPartial(object: Partial<_106.Pool>): _106.Pool;
                fromAmino(object: _106.PoolAmino): _106.Pool;
                toAmino(message: _106.Pool): _106.PoolAmino;
                fromAminoMsg(object: _106.PoolAminoMsg): _106.Pool;
                toAminoMsg(message: _106.Pool): _106.PoolAminoMsg;
                fromProtoMsg(message: _106.PoolProtoMsg): _106.Pool;
                toProto(message: _106.Pool): Uint8Array;
                toProtoMsg(message: _106.Pool): _106.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _105.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryValidatorsRequest;
                fromPartial(object: Partial<_105.QueryValidatorsRequest>): _105.QueryValidatorsRequest;
                fromAmino(object: _105.QueryValidatorsRequestAmino): _105.QueryValidatorsRequest;
                toAmino(message: _105.QueryValidatorsRequest): _105.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _105.QueryValidatorsRequestAminoMsg): _105.QueryValidatorsRequest;
                toAminoMsg(message: _105.QueryValidatorsRequest): _105.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _105.QueryValidatorsRequestProtoMsg): _105.QueryValidatorsRequest;
                toProto(message: _105.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryValidatorsRequest): _105.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _105.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryValidatorsResponse;
                fromPartial(object: Partial<_105.QueryValidatorsResponse>): _105.QueryValidatorsResponse;
                fromAmino(object: _105.QueryValidatorsResponseAmino): _105.QueryValidatorsResponse;
                toAmino(message: _105.QueryValidatorsResponse): _105.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _105.QueryValidatorsResponseAminoMsg): _105.QueryValidatorsResponse;
                toAminoMsg(message: _105.QueryValidatorsResponse): _105.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _105.QueryValidatorsResponseProtoMsg): _105.QueryValidatorsResponse;
                toProto(message: _105.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryValidatorsResponse): _105.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _105.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryValidatorRequest;
                fromPartial(object: Partial<_105.QueryValidatorRequest>): _105.QueryValidatorRequest;
                fromAmino(object: _105.QueryValidatorRequestAmino): _105.QueryValidatorRequest;
                toAmino(message: _105.QueryValidatorRequest): _105.QueryValidatorRequestAmino;
                fromAminoMsg(object: _105.QueryValidatorRequestAminoMsg): _105.QueryValidatorRequest;
                toAminoMsg(message: _105.QueryValidatorRequest): _105.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _105.QueryValidatorRequestProtoMsg): _105.QueryValidatorRequest;
                toProto(message: _105.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _105.QueryValidatorRequest): _105.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _105.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryValidatorResponse;
                fromPartial(object: Partial<_105.QueryValidatorResponse>): _105.QueryValidatorResponse;
                fromAmino(object: _105.QueryValidatorResponseAmino): _105.QueryValidatorResponse;
                toAmino(message: _105.QueryValidatorResponse): _105.QueryValidatorResponseAmino;
                fromAminoMsg(object: _105.QueryValidatorResponseAminoMsg): _105.QueryValidatorResponse;
                toAminoMsg(message: _105.QueryValidatorResponse): _105.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _105.QueryValidatorResponseProtoMsg): _105.QueryValidatorResponse;
                toProto(message: _105.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _105.QueryValidatorResponse): _105.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _105.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_105.QueryValidatorDelegationsRequest>): _105.QueryValidatorDelegationsRequest;
                fromAmino(object: _105.QueryValidatorDelegationsRequestAmino): _105.QueryValidatorDelegationsRequest;
                toAmino(message: _105.QueryValidatorDelegationsRequest): _105.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _105.QueryValidatorDelegationsRequestAminoMsg): _105.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _105.QueryValidatorDelegationsRequest): _105.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _105.QueryValidatorDelegationsRequestProtoMsg): _105.QueryValidatorDelegationsRequest;
                toProto(message: _105.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryValidatorDelegationsRequest): _105.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _105.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_105.QueryValidatorDelegationsResponse>): _105.QueryValidatorDelegationsResponse;
                fromAmino(object: _105.QueryValidatorDelegationsResponseAmino): _105.QueryValidatorDelegationsResponse;
                toAmino(message: _105.QueryValidatorDelegationsResponse): _105.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _105.QueryValidatorDelegationsResponseAminoMsg): _105.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _105.QueryValidatorDelegationsResponse): _105.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _105.QueryValidatorDelegationsResponseProtoMsg): _105.QueryValidatorDelegationsResponse;
                toProto(message: _105.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryValidatorDelegationsResponse): _105.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _105.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_105.QueryValidatorUnbondingDelegationsRequest>): _105.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _105.QueryValidatorUnbondingDelegationsRequestAmino): _105.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _105.QueryValidatorUnbondingDelegationsRequest): _105.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _105.QueryValidatorUnbondingDelegationsRequestAminoMsg): _105.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _105.QueryValidatorUnbondingDelegationsRequest): _105.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _105.QueryValidatorUnbondingDelegationsRequestProtoMsg): _105.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _105.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryValidatorUnbondingDelegationsRequest): _105.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _105.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_105.QueryValidatorUnbondingDelegationsResponse>): _105.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _105.QueryValidatorUnbondingDelegationsResponseAmino): _105.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _105.QueryValidatorUnbondingDelegationsResponse): _105.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _105.QueryValidatorUnbondingDelegationsResponseAminoMsg): _105.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _105.QueryValidatorUnbondingDelegationsResponse): _105.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _105.QueryValidatorUnbondingDelegationsResponseProtoMsg): _105.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _105.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryValidatorUnbondingDelegationsResponse): _105.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _105.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryDelegationRequest;
                fromPartial(object: Partial<_105.QueryDelegationRequest>): _105.QueryDelegationRequest;
                fromAmino(object: _105.QueryDelegationRequestAmino): _105.QueryDelegationRequest;
                toAmino(message: _105.QueryDelegationRequest): _105.QueryDelegationRequestAmino;
                fromAminoMsg(object: _105.QueryDelegationRequestAminoMsg): _105.QueryDelegationRequest;
                toAminoMsg(message: _105.QueryDelegationRequest): _105.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _105.QueryDelegationRequestProtoMsg): _105.QueryDelegationRequest;
                toProto(message: _105.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _105.QueryDelegationRequest): _105.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _105.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryDelegationResponse;
                fromPartial(object: Partial<_105.QueryDelegationResponse>): _105.QueryDelegationResponse;
                fromAmino(object: _105.QueryDelegationResponseAmino): _105.QueryDelegationResponse;
                toAmino(message: _105.QueryDelegationResponse): _105.QueryDelegationResponseAmino;
                fromAminoMsg(object: _105.QueryDelegationResponseAminoMsg): _105.QueryDelegationResponse;
                toAminoMsg(message: _105.QueryDelegationResponse): _105.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _105.QueryDelegationResponseProtoMsg): _105.QueryDelegationResponse;
                toProto(message: _105.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _105.QueryDelegationResponse): _105.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _105.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_105.QueryUnbondingDelegationRequest>): _105.QueryUnbondingDelegationRequest;
                fromAmino(object: _105.QueryUnbondingDelegationRequestAmino): _105.QueryUnbondingDelegationRequest;
                toAmino(message: _105.QueryUnbondingDelegationRequest): _105.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _105.QueryUnbondingDelegationRequestAminoMsg): _105.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _105.QueryUnbondingDelegationRequest): _105.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _105.QueryUnbondingDelegationRequestProtoMsg): _105.QueryUnbondingDelegationRequest;
                toProto(message: _105.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _105.QueryUnbondingDelegationRequest): _105.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _105.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_105.QueryUnbondingDelegationResponse>): _105.QueryUnbondingDelegationResponse;
                fromAmino(object: _105.QueryUnbondingDelegationResponseAmino): _105.QueryUnbondingDelegationResponse;
                toAmino(message: _105.QueryUnbondingDelegationResponse): _105.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _105.QueryUnbondingDelegationResponseAminoMsg): _105.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _105.QueryUnbondingDelegationResponse): _105.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _105.QueryUnbondingDelegationResponseProtoMsg): _105.QueryUnbondingDelegationResponse;
                toProto(message: _105.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _105.QueryUnbondingDelegationResponse): _105.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _105.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_105.QueryDelegatorDelegationsRequest>): _105.QueryDelegatorDelegationsRequest;
                fromAmino(object: _105.QueryDelegatorDelegationsRequestAmino): _105.QueryDelegatorDelegationsRequest;
                toAmino(message: _105.QueryDelegatorDelegationsRequest): _105.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _105.QueryDelegatorDelegationsRequestAminoMsg): _105.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _105.QueryDelegatorDelegationsRequest): _105.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _105.QueryDelegatorDelegationsRequestProtoMsg): _105.QueryDelegatorDelegationsRequest;
                toProto(message: _105.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryDelegatorDelegationsRequest): _105.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _105.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_105.QueryDelegatorDelegationsResponse>): _105.QueryDelegatorDelegationsResponse;
                fromAmino(object: _105.QueryDelegatorDelegationsResponseAmino): _105.QueryDelegatorDelegationsResponse;
                toAmino(message: _105.QueryDelegatorDelegationsResponse): _105.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _105.QueryDelegatorDelegationsResponseAminoMsg): _105.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _105.QueryDelegatorDelegationsResponse): _105.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _105.QueryDelegatorDelegationsResponseProtoMsg): _105.QueryDelegatorDelegationsResponse;
                toProto(message: _105.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryDelegatorDelegationsResponse): _105.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _105.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_105.QueryDelegatorUnbondingDelegationsRequest>): _105.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _105.QueryDelegatorUnbondingDelegationsRequestAmino): _105.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _105.QueryDelegatorUnbondingDelegationsRequest): _105.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _105.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _105.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _105.QueryDelegatorUnbondingDelegationsRequest): _105.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _105.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _105.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _105.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryDelegatorUnbondingDelegationsRequest): _105.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _105.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_105.QueryDelegatorUnbondingDelegationsResponse>): _105.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _105.QueryDelegatorUnbondingDelegationsResponseAmino): _105.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _105.QueryDelegatorUnbondingDelegationsResponse): _105.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _105.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _105.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _105.QueryDelegatorUnbondingDelegationsResponse): _105.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _105.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _105.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _105.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryDelegatorUnbondingDelegationsResponse): _105.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _105.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryRedelegationsRequest;
                fromPartial(object: Partial<_105.QueryRedelegationsRequest>): _105.QueryRedelegationsRequest;
                fromAmino(object: _105.QueryRedelegationsRequestAmino): _105.QueryRedelegationsRequest;
                toAmino(message: _105.QueryRedelegationsRequest): _105.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _105.QueryRedelegationsRequestAminoMsg): _105.QueryRedelegationsRequest;
                toAminoMsg(message: _105.QueryRedelegationsRequest): _105.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _105.QueryRedelegationsRequestProtoMsg): _105.QueryRedelegationsRequest;
                toProto(message: _105.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryRedelegationsRequest): _105.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _105.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryRedelegationsResponse;
                fromPartial(object: Partial<_105.QueryRedelegationsResponse>): _105.QueryRedelegationsResponse;
                fromAmino(object: _105.QueryRedelegationsResponseAmino): _105.QueryRedelegationsResponse;
                toAmino(message: _105.QueryRedelegationsResponse): _105.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _105.QueryRedelegationsResponseAminoMsg): _105.QueryRedelegationsResponse;
                toAminoMsg(message: _105.QueryRedelegationsResponse): _105.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _105.QueryRedelegationsResponseProtoMsg): _105.QueryRedelegationsResponse;
                toProto(message: _105.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryRedelegationsResponse): _105.QueryRedelegationsResponseProtoMsg;
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
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _105.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_105.QueryDelegatorValidatorRequest>): _105.QueryDelegatorValidatorRequest;
                fromAmino(object: _105.QueryDelegatorValidatorRequestAmino): _105.QueryDelegatorValidatorRequest;
                toAmino(message: _105.QueryDelegatorValidatorRequest): _105.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _105.QueryDelegatorValidatorRequestAminoMsg): _105.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _105.QueryDelegatorValidatorRequest): _105.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _105.QueryDelegatorValidatorRequestProtoMsg): _105.QueryDelegatorValidatorRequest;
                toProto(message: _105.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _105.QueryDelegatorValidatorRequest): _105.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _105.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_105.QueryDelegatorValidatorResponse>): _105.QueryDelegatorValidatorResponse;
                fromAmino(object: _105.QueryDelegatorValidatorResponseAmino): _105.QueryDelegatorValidatorResponse;
                toAmino(message: _105.QueryDelegatorValidatorResponse): _105.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _105.QueryDelegatorValidatorResponseAminoMsg): _105.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _105.QueryDelegatorValidatorResponse): _105.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _105.QueryDelegatorValidatorResponseProtoMsg): _105.QueryDelegatorValidatorResponse;
                toProto(message: _105.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _105.QueryDelegatorValidatorResponse): _105.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _105.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_105.QueryHistoricalInfoRequest>): _105.QueryHistoricalInfoRequest;
                fromAmino(object: _105.QueryHistoricalInfoRequestAmino): _105.QueryHistoricalInfoRequest;
                toAmino(message: _105.QueryHistoricalInfoRequest): _105.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _105.QueryHistoricalInfoRequestAminoMsg): _105.QueryHistoricalInfoRequest;
                toAminoMsg(message: _105.QueryHistoricalInfoRequest): _105.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _105.QueryHistoricalInfoRequestProtoMsg): _105.QueryHistoricalInfoRequest;
                toProto(message: _105.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _105.QueryHistoricalInfoRequest): _105.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _105.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_105.QueryHistoricalInfoResponse>): _105.QueryHistoricalInfoResponse;
                fromAmino(object: _105.QueryHistoricalInfoResponseAmino): _105.QueryHistoricalInfoResponse;
                toAmino(message: _105.QueryHistoricalInfoResponse): _105.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _105.QueryHistoricalInfoResponseAminoMsg): _105.QueryHistoricalInfoResponse;
                toAminoMsg(message: _105.QueryHistoricalInfoResponse): _105.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _105.QueryHistoricalInfoResponseProtoMsg): _105.QueryHistoricalInfoResponse;
                toProto(message: _105.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _105.QueryHistoricalInfoResponse): _105.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _105.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.QueryPoolRequest;
                fromPartial(_: Partial<_105.QueryPoolRequest>): _105.QueryPoolRequest;
                fromAmino(_: _105.QueryPoolRequestAmino): _105.QueryPoolRequest;
                toAmino(_: _105.QueryPoolRequest): _105.QueryPoolRequestAmino;
                fromAminoMsg(object: _105.QueryPoolRequestAminoMsg): _105.QueryPoolRequest;
                toAminoMsg(message: _105.QueryPoolRequest): _105.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _105.QueryPoolRequestProtoMsg): _105.QueryPoolRequest;
                toProto(message: _105.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _105.QueryPoolRequest): _105.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _105.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryPoolResponse;
                fromPartial(object: Partial<_105.QueryPoolResponse>): _105.QueryPoolResponse;
                fromAmino(object: _105.QueryPoolResponseAmino): _105.QueryPoolResponse;
                toAmino(message: _105.QueryPoolResponse): _105.QueryPoolResponseAmino;
                fromAminoMsg(object: _105.QueryPoolResponseAminoMsg): _105.QueryPoolResponse;
                toAminoMsg(message: _105.QueryPoolResponse): _105.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _105.QueryPoolResponseProtoMsg): _105.QueryPoolResponse;
                toProto(message: _105.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _105.QueryPoolResponse): _105.QueryPoolResponseProtoMsg;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _104.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.LastValidatorPower;
                fromPartial(object: Partial<_104.LastValidatorPower>): _104.LastValidatorPower;
                fromAmino(object: _104.LastValidatorPowerAmino): _104.LastValidatorPower;
                toAmino(message: _104.LastValidatorPower): _104.LastValidatorPowerAmino;
                fromAminoMsg(object: _104.LastValidatorPowerAminoMsg): _104.LastValidatorPower;
                toAminoMsg(message: _104.LastValidatorPower): _104.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _104.LastValidatorPowerProtoMsg): _104.LastValidatorPower;
                toProto(message: _104.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _104.LastValidatorPower): _104.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _103.AuthorizationType;
            authorizationTypeToJSON(object: _103.AuthorizationType): string;
            AuthorizationType: typeof _103.AuthorizationType;
            AuthorizationTypeSDKType: typeof _103.AuthorizationType;
            AuthorizationTypeAmino: typeof _103.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _103.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.StakeAuthorization;
                fromPartial(object: Partial<_103.StakeAuthorization>): _103.StakeAuthorization;
                fromAmino(object: _103.StakeAuthorizationAmino): _103.StakeAuthorization;
                toAmino(message: _103.StakeAuthorization): _103.StakeAuthorizationAmino;
                fromAminoMsg(object: _103.StakeAuthorizationAminoMsg): _103.StakeAuthorization;
                toAminoMsg(message: _103.StakeAuthorization): _103.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _103.StakeAuthorizationProtoMsg): _103.StakeAuthorization;
                toProto(message: _103.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _103.StakeAuthorization): _103.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _103.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.StakeAuthorization_Validators;
                fromPartial(object: Partial<_103.StakeAuthorization_Validators>): _103.StakeAuthorization_Validators;
                fromAmino(object: _103.StakeAuthorization_ValidatorsAmino): _103.StakeAuthorization_Validators;
                toAmino(message: _103.StakeAuthorization_Validators): _103.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _103.StakeAuthorization_ValidatorsAminoMsg): _103.StakeAuthorization_Validators;
                toAminoMsg(message: _103.StakeAuthorization_Validators): _103.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _103.StakeAuthorization_ValidatorsProtoMsg): _103.StakeAuthorization_Validators;
                toProto(message: _103.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _103.StakeAuthorization_Validators): _103.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _108.SignMode;
                signModeToJSON(object: _108.SignMode): string;
                SignMode: typeof _108.SignMode;
                SignModeSDKType: typeof _108.SignMode;
                SignModeAmino: typeof _108.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _108.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.SignatureDescriptors;
                    fromPartial(object: Partial<_108.SignatureDescriptors>): _108.SignatureDescriptors;
                    fromAmino(object: _108.SignatureDescriptorsAmino): _108.SignatureDescriptors;
                    toAmino(message: _108.SignatureDescriptors): _108.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _108.SignatureDescriptorsAminoMsg): _108.SignatureDescriptors;
                    toAminoMsg(message: _108.SignatureDescriptors): _108.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _108.SignatureDescriptorsProtoMsg): _108.SignatureDescriptors;
                    toProto(message: _108.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _108.SignatureDescriptors): _108.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _108.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.SignatureDescriptor;
                    fromPartial(object: Partial<_108.SignatureDescriptor>): _108.SignatureDescriptor;
                    fromAmino(object: _108.SignatureDescriptorAmino): _108.SignatureDescriptor;
                    toAmino(message: _108.SignatureDescriptor): _108.SignatureDescriptorAmino;
                    fromAminoMsg(object: _108.SignatureDescriptorAminoMsg): _108.SignatureDescriptor;
                    toAminoMsg(message: _108.SignatureDescriptor): _108.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _108.SignatureDescriptorProtoMsg): _108.SignatureDescriptor;
                    toProto(message: _108.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _108.SignatureDescriptor): _108.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _108.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_108.SignatureDescriptor_Data>): _108.SignatureDescriptor_Data;
                    fromAmino(object: _108.SignatureDescriptor_DataAmino): _108.SignatureDescriptor_Data;
                    toAmino(message: _108.SignatureDescriptor_Data): _108.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _108.SignatureDescriptor_DataAminoMsg): _108.SignatureDescriptor_Data;
                    toAminoMsg(message: _108.SignatureDescriptor_Data): _108.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _108.SignatureDescriptor_DataProtoMsg): _108.SignatureDescriptor_Data;
                    toProto(message: _108.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _108.SignatureDescriptor_Data): _108.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _108.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_108.SignatureDescriptor_Data_Single>): _108.SignatureDescriptor_Data_Single;
                    fromAmino(object: _108.SignatureDescriptor_Data_SingleAmino): _108.SignatureDescriptor_Data_Single;
                    toAmino(message: _108.SignatureDescriptor_Data_Single): _108.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _108.SignatureDescriptor_Data_SingleAminoMsg): _108.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _108.SignatureDescriptor_Data_Single): _108.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _108.SignatureDescriptor_Data_SingleProtoMsg): _108.SignatureDescriptor_Data_Single;
                    toProto(message: _108.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _108.SignatureDescriptor_Data_Single): _108.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _108.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_108.SignatureDescriptor_Data_Multi>): _108.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _108.SignatureDescriptor_Data_MultiAmino): _108.SignatureDescriptor_Data_Multi;
                    toAmino(message: _108.SignatureDescriptor_Data_Multi): _108.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _108.SignatureDescriptor_Data_MultiAminoMsg): _108.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _108.SignatureDescriptor_Data_Multi): _108.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _108.SignatureDescriptor_Data_MultiProtoMsg): _108.SignatureDescriptor_Data_Multi;
                    toProto(message: _108.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _108.SignatureDescriptor_Data_Multi): _108.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _223.ServiceClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                simulate(request: _109.SimulateRequest): Promise<_109.SimulateResponse>;
                getTx(request: _109.GetTxRequest): Promise<_109.GetTxResponse>;
                broadcastTx(request: _109.BroadcastTxRequest): Promise<_109.BroadcastTxResponse>;
                getTxsEvent(request: _109.GetTxsEventRequest): Promise<_109.GetTxsEventResponse>;
                getBlockWithTxs(request: _109.GetBlockWithTxsRequest): Promise<_109.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _204.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _110.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.Tx;
                fromPartial(object: Partial<_110.Tx>): _110.Tx;
                fromAmino(object: _110.TxAmino): _110.Tx;
                toAmino(message: _110.Tx): _110.TxAmino;
                fromAminoMsg(object: _110.TxAminoMsg): _110.Tx;
                toAminoMsg(message: _110.Tx): _110.TxAminoMsg;
                fromProtoMsg(message: _110.TxProtoMsg): _110.Tx;
                toProto(message: _110.Tx): Uint8Array;
                toProtoMsg(message: _110.Tx): _110.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _110.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.TxRaw;
                fromPartial(object: Partial<_110.TxRaw>): _110.TxRaw;
                fromAmino(object: _110.TxRawAmino): _110.TxRaw;
                toAmino(message: _110.TxRaw): _110.TxRawAmino;
                fromAminoMsg(object: _110.TxRawAminoMsg): _110.TxRaw;
                toAminoMsg(message: _110.TxRaw): _110.TxRawAminoMsg;
                fromProtoMsg(message: _110.TxRawProtoMsg): _110.TxRaw;
                toProto(message: _110.TxRaw): Uint8Array;
                toProtoMsg(message: _110.TxRaw): _110.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _110.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.SignDoc;
                fromPartial(object: Partial<_110.SignDoc>): _110.SignDoc;
                fromAmino(object: _110.SignDocAmino): _110.SignDoc;
                toAmino(message: _110.SignDoc): _110.SignDocAmino;
                fromAminoMsg(object: _110.SignDocAminoMsg): _110.SignDoc;
                toAminoMsg(message: _110.SignDoc): _110.SignDocAminoMsg;
                fromProtoMsg(message: _110.SignDocProtoMsg): _110.SignDoc;
                toProto(message: _110.SignDoc): Uint8Array;
                toProtoMsg(message: _110.SignDoc): _110.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _110.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.SignDocDirectAux;
                fromPartial(object: Partial<_110.SignDocDirectAux>): _110.SignDocDirectAux;
                fromAmino(object: _110.SignDocDirectAuxAmino): _110.SignDocDirectAux;
                toAmino(message: _110.SignDocDirectAux): _110.SignDocDirectAuxAmino;
                fromAminoMsg(object: _110.SignDocDirectAuxAminoMsg): _110.SignDocDirectAux;
                toAminoMsg(message: _110.SignDocDirectAux): _110.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _110.SignDocDirectAuxProtoMsg): _110.SignDocDirectAux;
                toProto(message: _110.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _110.SignDocDirectAux): _110.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _110.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.TxBody;
                fromPartial(object: Partial<_110.TxBody>): _110.TxBody;
                fromAmino(object: _110.TxBodyAmino): _110.TxBody;
                toAmino(message: _110.TxBody): _110.TxBodyAmino;
                fromAminoMsg(object: _110.TxBodyAminoMsg): _110.TxBody;
                toAminoMsg(message: _110.TxBody): _110.TxBodyAminoMsg;
                fromProtoMsg(message: _110.TxBodyProtoMsg): _110.TxBody;
                toProto(message: _110.TxBody): Uint8Array;
                toProtoMsg(message: _110.TxBody): _110.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _110.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.AuthInfo;
                fromPartial(object: Partial<_110.AuthInfo>): _110.AuthInfo;
                fromAmino(object: _110.AuthInfoAmino): _110.AuthInfo;
                toAmino(message: _110.AuthInfo): _110.AuthInfoAmino;
                fromAminoMsg(object: _110.AuthInfoAminoMsg): _110.AuthInfo;
                toAminoMsg(message: _110.AuthInfo): _110.AuthInfoAminoMsg;
                fromProtoMsg(message: _110.AuthInfoProtoMsg): _110.AuthInfo;
                toProto(message: _110.AuthInfo): Uint8Array;
                toProtoMsg(message: _110.AuthInfo): _110.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _110.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.SignerInfo;
                fromPartial(object: Partial<_110.SignerInfo>): _110.SignerInfo;
                fromAmino(object: _110.SignerInfoAmino): _110.SignerInfo;
                toAmino(message: _110.SignerInfo): _110.SignerInfoAmino;
                fromAminoMsg(object: _110.SignerInfoAminoMsg): _110.SignerInfo;
                toAminoMsg(message: _110.SignerInfo): _110.SignerInfoAminoMsg;
                fromProtoMsg(message: _110.SignerInfoProtoMsg): _110.SignerInfo;
                toProto(message: _110.SignerInfo): Uint8Array;
                toProtoMsg(message: _110.SignerInfo): _110.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _110.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.ModeInfo;
                fromPartial(object: Partial<_110.ModeInfo>): _110.ModeInfo;
                fromAmino(object: _110.ModeInfoAmino): _110.ModeInfo;
                toAmino(message: _110.ModeInfo): _110.ModeInfoAmino;
                fromAminoMsg(object: _110.ModeInfoAminoMsg): _110.ModeInfo;
                toAminoMsg(message: _110.ModeInfo): _110.ModeInfoAminoMsg;
                fromProtoMsg(message: _110.ModeInfoProtoMsg): _110.ModeInfo;
                toProto(message: _110.ModeInfo): Uint8Array;
                toProtoMsg(message: _110.ModeInfo): _110.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _110.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.ModeInfo_Single;
                fromPartial(object: Partial<_110.ModeInfo_Single>): _110.ModeInfo_Single;
                fromAmino(object: _110.ModeInfo_SingleAmino): _110.ModeInfo_Single;
                toAmino(message: _110.ModeInfo_Single): _110.ModeInfo_SingleAmino;
                fromAminoMsg(object: _110.ModeInfo_SingleAminoMsg): _110.ModeInfo_Single;
                toAminoMsg(message: _110.ModeInfo_Single): _110.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _110.ModeInfo_SingleProtoMsg): _110.ModeInfo_Single;
                toProto(message: _110.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _110.ModeInfo_Single): _110.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _110.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.ModeInfo_Multi;
                fromPartial(object: Partial<_110.ModeInfo_Multi>): _110.ModeInfo_Multi;
                fromAmino(object: _110.ModeInfo_MultiAmino): _110.ModeInfo_Multi;
                toAmino(message: _110.ModeInfo_Multi): _110.ModeInfo_MultiAmino;
                fromAminoMsg(object: _110.ModeInfo_MultiAminoMsg): _110.ModeInfo_Multi;
                toAminoMsg(message: _110.ModeInfo_Multi): _110.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _110.ModeInfo_MultiProtoMsg): _110.ModeInfo_Multi;
                toProto(message: _110.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _110.ModeInfo_Multi): _110.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _110.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.Fee;
                fromPartial(object: Partial<_110.Fee>): _110.Fee;
                fromAmino(object: _110.FeeAmino): _110.Fee;
                toAmino(message: _110.Fee): _110.FeeAmino;
                fromAminoMsg(object: _110.FeeAminoMsg): _110.Fee;
                toAminoMsg(message: _110.Fee): _110.FeeAminoMsg;
                fromProtoMsg(message: _110.FeeProtoMsg): _110.Fee;
                toProto(message: _110.Fee): Uint8Array;
                toProtoMsg(message: _110.Fee): _110.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _110.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.Tip;
                fromPartial(object: Partial<_110.Tip>): _110.Tip;
                fromAmino(object: _110.TipAmino): _110.Tip;
                toAmino(message: _110.Tip): _110.TipAmino;
                fromAminoMsg(object: _110.TipAminoMsg): _110.Tip;
                toAminoMsg(message: _110.Tip): _110.TipAminoMsg;
                fromProtoMsg(message: _110.TipProtoMsg): _110.Tip;
                toProto(message: _110.Tip): Uint8Array;
                toProtoMsg(message: _110.Tip): _110.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _110.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.AuxSignerData;
                fromPartial(object: Partial<_110.AuxSignerData>): _110.AuxSignerData;
                fromAmino(object: _110.AuxSignerDataAmino): _110.AuxSignerData;
                toAmino(message: _110.AuxSignerData): _110.AuxSignerDataAmino;
                fromAminoMsg(object: _110.AuxSignerDataAminoMsg): _110.AuxSignerData;
                toAminoMsg(message: _110.AuxSignerData): _110.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _110.AuxSignerDataProtoMsg): _110.AuxSignerData;
                toProto(message: _110.AuxSignerData): Uint8Array;
                toProtoMsg(message: _110.AuxSignerData): _110.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _109.OrderBy;
            orderByToJSON(object: _109.OrderBy): string;
            broadcastModeFromJSON(object: any): _109.BroadcastMode;
            broadcastModeToJSON(object: _109.BroadcastMode): string;
            OrderBy: typeof _109.OrderBy;
            OrderBySDKType: typeof _109.OrderBy;
            OrderByAmino: typeof _109.OrderBy;
            BroadcastMode: typeof _109.BroadcastMode;
            BroadcastModeSDKType: typeof _109.BroadcastMode;
            BroadcastModeAmino: typeof _109.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _109.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.GetTxsEventRequest;
                fromPartial(object: Partial<_109.GetTxsEventRequest>): _109.GetTxsEventRequest;
                fromAmino(object: _109.GetTxsEventRequestAmino): _109.GetTxsEventRequest;
                toAmino(message: _109.GetTxsEventRequest): _109.GetTxsEventRequestAmino;
                fromAminoMsg(object: _109.GetTxsEventRequestAminoMsg): _109.GetTxsEventRequest;
                toAminoMsg(message: _109.GetTxsEventRequest): _109.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _109.GetTxsEventRequestProtoMsg): _109.GetTxsEventRequest;
                toProto(message: _109.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _109.GetTxsEventRequest): _109.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _109.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.GetTxsEventResponse;
                fromPartial(object: Partial<_109.GetTxsEventResponse>): _109.GetTxsEventResponse;
                fromAmino(object: _109.GetTxsEventResponseAmino): _109.GetTxsEventResponse;
                toAmino(message: _109.GetTxsEventResponse): _109.GetTxsEventResponseAmino;
                fromAminoMsg(object: _109.GetTxsEventResponseAminoMsg): _109.GetTxsEventResponse;
                toAminoMsg(message: _109.GetTxsEventResponse): _109.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _109.GetTxsEventResponseProtoMsg): _109.GetTxsEventResponse;
                toProto(message: _109.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _109.GetTxsEventResponse): _109.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _109.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.BroadcastTxRequest;
                fromPartial(object: Partial<_109.BroadcastTxRequest>): _109.BroadcastTxRequest;
                fromAmino(object: _109.BroadcastTxRequestAmino): _109.BroadcastTxRequest;
                toAmino(message: _109.BroadcastTxRequest): _109.BroadcastTxRequestAmino;
                fromAminoMsg(object: _109.BroadcastTxRequestAminoMsg): _109.BroadcastTxRequest;
                toAminoMsg(message: _109.BroadcastTxRequest): _109.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _109.BroadcastTxRequestProtoMsg): _109.BroadcastTxRequest;
                toProto(message: _109.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _109.BroadcastTxRequest): _109.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _109.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.BroadcastTxResponse;
                fromPartial(object: Partial<_109.BroadcastTxResponse>): _109.BroadcastTxResponse;
                fromAmino(object: _109.BroadcastTxResponseAmino): _109.BroadcastTxResponse;
                toAmino(message: _109.BroadcastTxResponse): _109.BroadcastTxResponseAmino;
                fromAminoMsg(object: _109.BroadcastTxResponseAminoMsg): _109.BroadcastTxResponse;
                toAminoMsg(message: _109.BroadcastTxResponse): _109.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _109.BroadcastTxResponseProtoMsg): _109.BroadcastTxResponse;
                toProto(message: _109.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _109.BroadcastTxResponse): _109.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _109.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.SimulateRequest;
                fromPartial(object: Partial<_109.SimulateRequest>): _109.SimulateRequest;
                fromAmino(object: _109.SimulateRequestAmino): _109.SimulateRequest;
                toAmino(message: _109.SimulateRequest): _109.SimulateRequestAmino;
                fromAminoMsg(object: _109.SimulateRequestAminoMsg): _109.SimulateRequest;
                toAminoMsg(message: _109.SimulateRequest): _109.SimulateRequestAminoMsg;
                fromProtoMsg(message: _109.SimulateRequestProtoMsg): _109.SimulateRequest;
                toProto(message: _109.SimulateRequest): Uint8Array;
                toProtoMsg(message: _109.SimulateRequest): _109.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _109.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.SimulateResponse;
                fromPartial(object: Partial<_109.SimulateResponse>): _109.SimulateResponse;
                fromAmino(object: _109.SimulateResponseAmino): _109.SimulateResponse;
                toAmino(message: _109.SimulateResponse): _109.SimulateResponseAmino;
                fromAminoMsg(object: _109.SimulateResponseAminoMsg): _109.SimulateResponse;
                toAminoMsg(message: _109.SimulateResponse): _109.SimulateResponseAminoMsg;
                fromProtoMsg(message: _109.SimulateResponseProtoMsg): _109.SimulateResponse;
                toProto(message: _109.SimulateResponse): Uint8Array;
                toProtoMsg(message: _109.SimulateResponse): _109.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _109.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.GetTxRequest;
                fromPartial(object: Partial<_109.GetTxRequest>): _109.GetTxRequest;
                fromAmino(object: _109.GetTxRequestAmino): _109.GetTxRequest;
                toAmino(message: _109.GetTxRequest): _109.GetTxRequestAmino;
                fromAminoMsg(object: _109.GetTxRequestAminoMsg): _109.GetTxRequest;
                toAminoMsg(message: _109.GetTxRequest): _109.GetTxRequestAminoMsg;
                fromProtoMsg(message: _109.GetTxRequestProtoMsg): _109.GetTxRequest;
                toProto(message: _109.GetTxRequest): Uint8Array;
                toProtoMsg(message: _109.GetTxRequest): _109.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _109.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.GetTxResponse;
                fromPartial(object: Partial<_109.GetTxResponse>): _109.GetTxResponse;
                fromAmino(object: _109.GetTxResponseAmino): _109.GetTxResponse;
                toAmino(message: _109.GetTxResponse): _109.GetTxResponseAmino;
                fromAminoMsg(object: _109.GetTxResponseAminoMsg): _109.GetTxResponse;
                toAminoMsg(message: _109.GetTxResponse): _109.GetTxResponseAminoMsg;
                fromProtoMsg(message: _109.GetTxResponseProtoMsg): _109.GetTxResponse;
                toProto(message: _109.GetTxResponse): Uint8Array;
                toProtoMsg(message: _109.GetTxResponse): _109.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _109.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_109.GetBlockWithTxsRequest>): _109.GetBlockWithTxsRequest;
                fromAmino(object: _109.GetBlockWithTxsRequestAmino): _109.GetBlockWithTxsRequest;
                toAmino(message: _109.GetBlockWithTxsRequest): _109.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _109.GetBlockWithTxsRequestAminoMsg): _109.GetBlockWithTxsRequest;
                toAminoMsg(message: _109.GetBlockWithTxsRequest): _109.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _109.GetBlockWithTxsRequestProtoMsg): _109.GetBlockWithTxsRequest;
                toProto(message: _109.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _109.GetBlockWithTxsRequest): _109.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _109.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_109.GetBlockWithTxsResponse>): _109.GetBlockWithTxsResponse;
                fromAmino(object: _109.GetBlockWithTxsResponseAmino): _109.GetBlockWithTxsResponse;
                toAmino(message: _109.GetBlockWithTxsResponse): _109.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _109.GetBlockWithTxsResponseAminoMsg): _109.GetBlockWithTxsResponse;
                toAminoMsg(message: _109.GetBlockWithTxsResponse): _109.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _109.GetBlockWithTxsResponseProtoMsg): _109.GetBlockWithTxsResponse;
                toProto(message: _109.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _109.GetBlockWithTxsResponse): _109.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _237.MsgClientImpl;
            QueryClientImpl: typeof _224.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                currentPlan(request?: _111.QueryCurrentPlanRequest): Promise<_111.QueryCurrentPlanResponse>;
                appliedPlan(request: _111.QueryAppliedPlanRequest): Promise<_111.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _111.QueryUpgradedConsensusStateRequest): Promise<_111.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _111.QueryModuleVersionsRequest): Promise<_111.QueryModuleVersionsResponse>;
                authority(request?: _111.QueryAuthorityRequest): Promise<_111.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _205.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _112.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _112.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _112.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _112.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _112.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _112.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _112.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _112.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _112.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _112.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _112.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _112.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _112.MsgSoftwareUpgrade) => _112.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _112.MsgSoftwareUpgradeAmino) => _112.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _112.MsgCancelUpgrade) => _112.MsgCancelUpgradeAmino;
                    fromAmino: (object: _112.MsgCancelUpgradeAmino) => _112.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _113.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.Plan;
                fromPartial(object: Partial<_113.Plan>): _113.Plan;
                fromAmino(object: _113.PlanAmino): _113.Plan;
                toAmino(message: _113.Plan): _113.PlanAmino;
                fromAminoMsg(object: _113.PlanAminoMsg): _113.Plan;
                toAminoMsg(message: _113.Plan): _113.PlanAminoMsg;
                fromProtoMsg(message: _113.PlanProtoMsg): _113.Plan;
                toProto(message: _113.Plan): Uint8Array;
                toProtoMsg(message: _113.Plan): _113.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _113.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_113.SoftwareUpgradeProposal>): _113.SoftwareUpgradeProposal;
                fromAmino(object: _113.SoftwareUpgradeProposalAmino): _113.SoftwareUpgradeProposal;
                toAmino(message: _113.SoftwareUpgradeProposal): _113.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _113.SoftwareUpgradeProposalAminoMsg): _113.SoftwareUpgradeProposal;
                toAminoMsg(message: _113.SoftwareUpgradeProposal): _113.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _113.SoftwareUpgradeProposalProtoMsg): _113.SoftwareUpgradeProposal;
                toProto(message: _113.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _113.SoftwareUpgradeProposal): _113.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _113.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_113.CancelSoftwareUpgradeProposal>): _113.CancelSoftwareUpgradeProposal;
                fromAmino(object: _113.CancelSoftwareUpgradeProposalAmino): _113.CancelSoftwareUpgradeProposal;
                toAmino(message: _113.CancelSoftwareUpgradeProposal): _113.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _113.CancelSoftwareUpgradeProposalAminoMsg): _113.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _113.CancelSoftwareUpgradeProposal): _113.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _113.CancelSoftwareUpgradeProposalProtoMsg): _113.CancelSoftwareUpgradeProposal;
                toProto(message: _113.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _113.CancelSoftwareUpgradeProposal): _113.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _113.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.ModuleVersion;
                fromPartial(object: Partial<_113.ModuleVersion>): _113.ModuleVersion;
                fromAmino(object: _113.ModuleVersionAmino): _113.ModuleVersion;
                toAmino(message: _113.ModuleVersion): _113.ModuleVersionAmino;
                fromAminoMsg(object: _113.ModuleVersionAminoMsg): _113.ModuleVersion;
                toAminoMsg(message: _113.ModuleVersion): _113.ModuleVersionAminoMsg;
                fromProtoMsg(message: _113.ModuleVersionProtoMsg): _113.ModuleVersion;
                toProto(message: _113.ModuleVersion): Uint8Array;
                toProtoMsg(message: _113.ModuleVersion): _113.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _112.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_112.MsgSoftwareUpgrade>): _112.MsgSoftwareUpgrade;
                fromAmino(object: _112.MsgSoftwareUpgradeAmino): _112.MsgSoftwareUpgrade;
                toAmino(message: _112.MsgSoftwareUpgrade): _112.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _112.MsgSoftwareUpgradeAminoMsg): _112.MsgSoftwareUpgrade;
                toAminoMsg(message: _112.MsgSoftwareUpgrade): _112.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _112.MsgSoftwareUpgradeProtoMsg): _112.MsgSoftwareUpgrade;
                toProto(message: _112.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _112.MsgSoftwareUpgrade): _112.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _112.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _112.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_112.MsgSoftwareUpgradeResponse>): _112.MsgSoftwareUpgradeResponse;
                fromAmino(_: _112.MsgSoftwareUpgradeResponseAmino): _112.MsgSoftwareUpgradeResponse;
                toAmino(_: _112.MsgSoftwareUpgradeResponse): _112.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _112.MsgSoftwareUpgradeResponseAminoMsg): _112.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _112.MsgSoftwareUpgradeResponse): _112.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _112.MsgSoftwareUpgradeResponseProtoMsg): _112.MsgSoftwareUpgradeResponse;
                toProto(message: _112.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _112.MsgSoftwareUpgradeResponse): _112.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _112.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.MsgCancelUpgrade;
                fromPartial(object: Partial<_112.MsgCancelUpgrade>): _112.MsgCancelUpgrade;
                fromAmino(object: _112.MsgCancelUpgradeAmino): _112.MsgCancelUpgrade;
                toAmino(message: _112.MsgCancelUpgrade): _112.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _112.MsgCancelUpgradeAminoMsg): _112.MsgCancelUpgrade;
                toAminoMsg(message: _112.MsgCancelUpgrade): _112.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _112.MsgCancelUpgradeProtoMsg): _112.MsgCancelUpgrade;
                toProto(message: _112.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _112.MsgCancelUpgrade): _112.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _112.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _112.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_112.MsgCancelUpgradeResponse>): _112.MsgCancelUpgradeResponse;
                fromAmino(_: _112.MsgCancelUpgradeResponseAmino): _112.MsgCancelUpgradeResponse;
                toAmino(_: _112.MsgCancelUpgradeResponse): _112.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _112.MsgCancelUpgradeResponseAminoMsg): _112.MsgCancelUpgradeResponse;
                toAminoMsg(message: _112.MsgCancelUpgradeResponse): _112.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _112.MsgCancelUpgradeResponseProtoMsg): _112.MsgCancelUpgradeResponse;
                toProto(message: _112.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _112.MsgCancelUpgradeResponse): _112.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _111.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _111.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_111.QueryCurrentPlanRequest>): _111.QueryCurrentPlanRequest;
                fromAmino(_: _111.QueryCurrentPlanRequestAmino): _111.QueryCurrentPlanRequest;
                toAmino(_: _111.QueryCurrentPlanRequest): _111.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _111.QueryCurrentPlanRequestAminoMsg): _111.QueryCurrentPlanRequest;
                toAminoMsg(message: _111.QueryCurrentPlanRequest): _111.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _111.QueryCurrentPlanRequestProtoMsg): _111.QueryCurrentPlanRequest;
                toProto(message: _111.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _111.QueryCurrentPlanRequest): _111.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _111.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_111.QueryCurrentPlanResponse>): _111.QueryCurrentPlanResponse;
                fromAmino(object: _111.QueryCurrentPlanResponseAmino): _111.QueryCurrentPlanResponse;
                toAmino(message: _111.QueryCurrentPlanResponse): _111.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _111.QueryCurrentPlanResponseAminoMsg): _111.QueryCurrentPlanResponse;
                toAminoMsg(message: _111.QueryCurrentPlanResponse): _111.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _111.QueryCurrentPlanResponseProtoMsg): _111.QueryCurrentPlanResponse;
                toProto(message: _111.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _111.QueryCurrentPlanResponse): _111.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _111.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_111.QueryAppliedPlanRequest>): _111.QueryAppliedPlanRequest;
                fromAmino(object: _111.QueryAppliedPlanRequestAmino): _111.QueryAppliedPlanRequest;
                toAmino(message: _111.QueryAppliedPlanRequest): _111.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _111.QueryAppliedPlanRequestAminoMsg): _111.QueryAppliedPlanRequest;
                toAminoMsg(message: _111.QueryAppliedPlanRequest): _111.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _111.QueryAppliedPlanRequestProtoMsg): _111.QueryAppliedPlanRequest;
                toProto(message: _111.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _111.QueryAppliedPlanRequest): _111.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _111.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_111.QueryAppliedPlanResponse>): _111.QueryAppliedPlanResponse;
                fromAmino(object: _111.QueryAppliedPlanResponseAmino): _111.QueryAppliedPlanResponse;
                toAmino(message: _111.QueryAppliedPlanResponse): _111.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _111.QueryAppliedPlanResponseAminoMsg): _111.QueryAppliedPlanResponse;
                toAminoMsg(message: _111.QueryAppliedPlanResponse): _111.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _111.QueryAppliedPlanResponseProtoMsg): _111.QueryAppliedPlanResponse;
                toProto(message: _111.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _111.QueryAppliedPlanResponse): _111.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _111.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_111.QueryUpgradedConsensusStateRequest>): _111.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _111.QueryUpgradedConsensusStateRequestAmino): _111.QueryUpgradedConsensusStateRequest;
                toAmino(message: _111.QueryUpgradedConsensusStateRequest): _111.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _111.QueryUpgradedConsensusStateRequestAminoMsg): _111.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _111.QueryUpgradedConsensusStateRequest): _111.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _111.QueryUpgradedConsensusStateRequestProtoMsg): _111.QueryUpgradedConsensusStateRequest;
                toProto(message: _111.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _111.QueryUpgradedConsensusStateRequest): _111.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _111.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_111.QueryUpgradedConsensusStateResponse>): _111.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _111.QueryUpgradedConsensusStateResponseAmino): _111.QueryUpgradedConsensusStateResponse;
                toAmino(message: _111.QueryUpgradedConsensusStateResponse): _111.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _111.QueryUpgradedConsensusStateResponseAminoMsg): _111.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _111.QueryUpgradedConsensusStateResponse): _111.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _111.QueryUpgradedConsensusStateResponseProtoMsg): _111.QueryUpgradedConsensusStateResponse;
                toProto(message: _111.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _111.QueryUpgradedConsensusStateResponse): _111.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _111.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_111.QueryModuleVersionsRequest>): _111.QueryModuleVersionsRequest;
                fromAmino(object: _111.QueryModuleVersionsRequestAmino): _111.QueryModuleVersionsRequest;
                toAmino(message: _111.QueryModuleVersionsRequest): _111.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _111.QueryModuleVersionsRequestAminoMsg): _111.QueryModuleVersionsRequest;
                toAminoMsg(message: _111.QueryModuleVersionsRequest): _111.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _111.QueryModuleVersionsRequestProtoMsg): _111.QueryModuleVersionsRequest;
                toProto(message: _111.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _111.QueryModuleVersionsRequest): _111.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _111.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_111.QueryModuleVersionsResponse>): _111.QueryModuleVersionsResponse;
                fromAmino(object: _111.QueryModuleVersionsResponseAmino): _111.QueryModuleVersionsResponse;
                toAmino(message: _111.QueryModuleVersionsResponse): _111.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _111.QueryModuleVersionsResponseAminoMsg): _111.QueryModuleVersionsResponse;
                toAminoMsg(message: _111.QueryModuleVersionsResponse): _111.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _111.QueryModuleVersionsResponseProtoMsg): _111.QueryModuleVersionsResponse;
                toProto(message: _111.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _111.QueryModuleVersionsResponse): _111.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _111.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _111.QueryAuthorityRequest;
                fromPartial(_: Partial<_111.QueryAuthorityRequest>): _111.QueryAuthorityRequest;
                fromAmino(_: _111.QueryAuthorityRequestAmino): _111.QueryAuthorityRequest;
                toAmino(_: _111.QueryAuthorityRequest): _111.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _111.QueryAuthorityRequestAminoMsg): _111.QueryAuthorityRequest;
                toAminoMsg(message: _111.QueryAuthorityRequest): _111.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _111.QueryAuthorityRequestProtoMsg): _111.QueryAuthorityRequest;
                toProto(message: _111.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _111.QueryAuthorityRequest): _111.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _111.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryAuthorityResponse;
                fromPartial(object: Partial<_111.QueryAuthorityResponse>): _111.QueryAuthorityResponse;
                fromAmino(object: _111.QueryAuthorityResponseAmino): _111.QueryAuthorityResponse;
                toAmino(message: _111.QueryAuthorityResponse): _111.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _111.QueryAuthorityResponseAminoMsg): _111.QueryAuthorityResponse;
                toAminoMsg(message: _111.QueryAuthorityResponse): _111.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _111.QueryAuthorityResponseProtoMsg): _111.QueryAuthorityResponse;
                toProto(message: _111.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _111.QueryAuthorityResponse): _111.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _238.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _114.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _114.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _114.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _114.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _114.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _114.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _114.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _114.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _114.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _114.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _114.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _114.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _114.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _114.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _114.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _114.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _114.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _114.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _114.MsgCreateVestingAccount) => _114.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _114.MsgCreateVestingAccountAmino) => _114.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _114.MsgCreatePermanentLockedAccount) => _114.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _114.MsgCreatePermanentLockedAccountAmino) => _114.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _114.MsgCreatePeriodicVestingAccount) => _114.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _114.MsgCreatePeriodicVestingAccountAmino) => _114.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _115.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.BaseVestingAccount;
                fromPartial(object: Partial<_115.BaseVestingAccount>): _115.BaseVestingAccount;
                fromAmino(object: _115.BaseVestingAccountAmino): _115.BaseVestingAccount;
                toAmino(message: _115.BaseVestingAccount): _115.BaseVestingAccountAmino;
                fromAminoMsg(object: _115.BaseVestingAccountAminoMsg): _115.BaseVestingAccount;
                toAminoMsg(message: _115.BaseVestingAccount): _115.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _115.BaseVestingAccountProtoMsg): _115.BaseVestingAccount;
                toProto(message: _115.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _115.BaseVestingAccount): _115.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _115.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.ContinuousVestingAccount;
                fromPartial(object: Partial<_115.ContinuousVestingAccount>): _115.ContinuousVestingAccount;
                fromAmino(object: _115.ContinuousVestingAccountAmino): _115.ContinuousVestingAccount;
                toAmino(message: _115.ContinuousVestingAccount): _115.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _115.ContinuousVestingAccountAminoMsg): _115.ContinuousVestingAccount;
                toAminoMsg(message: _115.ContinuousVestingAccount): _115.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _115.ContinuousVestingAccountProtoMsg): _115.ContinuousVestingAccount;
                toProto(message: _115.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _115.ContinuousVestingAccount): _115.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _115.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.DelayedVestingAccount;
                fromPartial(object: Partial<_115.DelayedVestingAccount>): _115.DelayedVestingAccount;
                fromAmino(object: _115.DelayedVestingAccountAmino): _115.DelayedVestingAccount;
                toAmino(message: _115.DelayedVestingAccount): _115.DelayedVestingAccountAmino;
                fromAminoMsg(object: _115.DelayedVestingAccountAminoMsg): _115.DelayedVestingAccount;
                toAminoMsg(message: _115.DelayedVestingAccount): _115.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _115.DelayedVestingAccountProtoMsg): _115.DelayedVestingAccount;
                toProto(message: _115.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _115.DelayedVestingAccount): _115.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _115.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.Period;
                fromPartial(object: Partial<_115.Period>): _115.Period;
                fromAmino(object: _115.PeriodAmino): _115.Period;
                toAmino(message: _115.Period): _115.PeriodAmino;
                fromAminoMsg(object: _115.PeriodAminoMsg): _115.Period;
                toAminoMsg(message: _115.Period): _115.PeriodAminoMsg;
                fromProtoMsg(message: _115.PeriodProtoMsg): _115.Period;
                toProto(message: _115.Period): Uint8Array;
                toProtoMsg(message: _115.Period): _115.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _115.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.PeriodicVestingAccount;
                fromPartial(object: Partial<_115.PeriodicVestingAccount>): _115.PeriodicVestingAccount;
                fromAmino(object: _115.PeriodicVestingAccountAmino): _115.PeriodicVestingAccount;
                toAmino(message: _115.PeriodicVestingAccount): _115.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _115.PeriodicVestingAccountAminoMsg): _115.PeriodicVestingAccount;
                toAminoMsg(message: _115.PeriodicVestingAccount): _115.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _115.PeriodicVestingAccountProtoMsg): _115.PeriodicVestingAccount;
                toProto(message: _115.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _115.PeriodicVestingAccount): _115.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _115.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.PermanentLockedAccount;
                fromPartial(object: Partial<_115.PermanentLockedAccount>): _115.PermanentLockedAccount;
                fromAmino(object: _115.PermanentLockedAccountAmino): _115.PermanentLockedAccount;
                toAmino(message: _115.PermanentLockedAccount): _115.PermanentLockedAccountAmino;
                fromAminoMsg(object: _115.PermanentLockedAccountAminoMsg): _115.PermanentLockedAccount;
                toAminoMsg(message: _115.PermanentLockedAccount): _115.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _115.PermanentLockedAccountProtoMsg): _115.PermanentLockedAccount;
                toProto(message: _115.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _115.PermanentLockedAccount): _115.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _114.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgCreateVestingAccount;
                fromPartial(object: Partial<_114.MsgCreateVestingAccount>): _114.MsgCreateVestingAccount;
                fromAmino(object: _114.MsgCreateVestingAccountAmino): _114.MsgCreateVestingAccount;
                toAmino(message: _114.MsgCreateVestingAccount): _114.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _114.MsgCreateVestingAccountAminoMsg): _114.MsgCreateVestingAccount;
                toAminoMsg(message: _114.MsgCreateVestingAccount): _114.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _114.MsgCreateVestingAccountProtoMsg): _114.MsgCreateVestingAccount;
                toProto(message: _114.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _114.MsgCreateVestingAccount): _114.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _114.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_114.MsgCreateVestingAccountResponse>): _114.MsgCreateVestingAccountResponse;
                fromAmino(_: _114.MsgCreateVestingAccountResponseAmino): _114.MsgCreateVestingAccountResponse;
                toAmino(_: _114.MsgCreateVestingAccountResponse): _114.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _114.MsgCreateVestingAccountResponseAminoMsg): _114.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _114.MsgCreateVestingAccountResponse): _114.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _114.MsgCreateVestingAccountResponseProtoMsg): _114.MsgCreateVestingAccountResponse;
                toProto(message: _114.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _114.MsgCreateVestingAccountResponse): _114.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _114.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_114.MsgCreatePermanentLockedAccount>): _114.MsgCreatePermanentLockedAccount;
                fromAmino(object: _114.MsgCreatePermanentLockedAccountAmino): _114.MsgCreatePermanentLockedAccount;
                toAmino(message: _114.MsgCreatePermanentLockedAccount): _114.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _114.MsgCreatePermanentLockedAccountAminoMsg): _114.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _114.MsgCreatePermanentLockedAccount): _114.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _114.MsgCreatePermanentLockedAccountProtoMsg): _114.MsgCreatePermanentLockedAccount;
                toProto(message: _114.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _114.MsgCreatePermanentLockedAccount): _114.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _114.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_114.MsgCreatePermanentLockedAccountResponse>): _114.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _114.MsgCreatePermanentLockedAccountResponseAmino): _114.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _114.MsgCreatePermanentLockedAccountResponse): _114.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _114.MsgCreatePermanentLockedAccountResponseAminoMsg): _114.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _114.MsgCreatePermanentLockedAccountResponse): _114.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _114.MsgCreatePermanentLockedAccountResponseProtoMsg): _114.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _114.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _114.MsgCreatePermanentLockedAccountResponse): _114.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _114.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_114.MsgCreatePeriodicVestingAccount>): _114.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _114.MsgCreatePeriodicVestingAccountAmino): _114.MsgCreatePeriodicVestingAccount;
                toAmino(message: _114.MsgCreatePeriodicVestingAccount): _114.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _114.MsgCreatePeriodicVestingAccountAminoMsg): _114.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _114.MsgCreatePeriodicVestingAccount): _114.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _114.MsgCreatePeriodicVestingAccountProtoMsg): _114.MsgCreatePeriodicVestingAccount;
                toProto(message: _114.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _114.MsgCreatePeriodicVestingAccount): _114.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _114.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_114.MsgCreatePeriodicVestingAccountResponse>): _114.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _114.MsgCreatePeriodicVestingAccountResponseAmino): _114.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _114.MsgCreatePeriodicVestingAccountResponse): _114.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _114.MsgCreatePeriodicVestingAccountResponseAminoMsg): _114.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _114.MsgCreatePeriodicVestingAccountResponse): _114.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _114.MsgCreatePeriodicVestingAccountResponseProtoMsg): _114.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _114.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _114.MsgCreatePeriodicVestingAccountResponse): _114.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _225.MsgClientImpl;
                };
                bank: {
                    v1beta1: _226.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _227.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _228.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _229.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _230.MsgClientImpl;
                };
                gov: {
                    v1: _231.MsgClientImpl;
                    v1beta1: _232.MsgClientImpl;
                };
                group: {
                    v1: _233.MsgClientImpl;
                };
                nft: {
                    v1beta1: _234.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _235.MsgClientImpl;
                };
                staking: {
                    v1beta1: _236.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _237.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _238.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: any;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _23.QueryConfigRequest): Promise<_23.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _26.QueryAccountsRequest): Promise<_26.QueryAccountsResponse>;
                        account(request: _26.QueryAccountRequest): Promise<_26.QueryAccountResponse>;
                        accountAddressByID(request: _26.QueryAccountAddressByIDRequest): Promise<_26.QueryAccountAddressByIDResponse>;
                        params(request?: _26.QueryParamsRequest): Promise<_26.QueryParamsResponse>;
                        moduleAccounts(request?: _26.QueryModuleAccountsRequest): Promise<_26.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _26.QueryModuleAccountByNameRequest): Promise<_26.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _26.Bech32PrefixRequest): Promise<_26.Bech32PrefixResponse>;
                        addressBytesToString(request: _26.AddressBytesToStringRequest): Promise<_26.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _26.AddressStringToBytesRequest): Promise<_26.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _30.QueryGrantsRequest): Promise<_30.QueryGrantsResponse>;
                        granterGrants(request: _30.QueryGranterGrantsRequest): Promise<_30.QueryGranterGrantsResponse>;
                        granteeGrants(request: _30.QueryGranteeGrantsRequest): Promise<_30.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _35.QueryBalanceRequest): Promise<_35.QueryBalanceResponse>;
                        allBalances(request: _35.QueryAllBalancesRequest): Promise<_35.QueryAllBalancesResponse>;
                        spendableBalances(request: _35.QuerySpendableBalancesRequest): Promise<_35.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _35.QueryTotalSupplyRequest): Promise<_35.QueryTotalSupplyResponse>;
                        supplyOf(request: _35.QuerySupplyOfRequest): Promise<_35.QuerySupplyOfResponse>;
                        params(request?: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
                        denomMetadata(request: _35.QueryDenomMetadataRequest): Promise<_35.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _35.QueryDenomsMetadataRequest): Promise<_35.QueryDenomsMetadataResponse>;
                        denomOwners(request: _35.QueryDenomOwnersRequest): Promise<_35.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _39.ConfigRequest): Promise<_39.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _46.GetNodeInfoRequest): Promise<_46.GetNodeInfoResponse>;
                            getSyncing(request?: _46.GetSyncingRequest): Promise<_46.GetSyncingResponse>;
                            getLatestBlock(request?: _46.GetLatestBlockRequest): Promise<_46.GetLatestBlockResponse>;
                            getBlockByHeight(request: _46.GetBlockByHeightRequest): Promise<_46.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _46.GetLatestValidatorSetRequest): Promise<_46.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _46.GetValidatorSetByHeightRequest): Promise<_46.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _46.ABCIQueryRequest): Promise<_46.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _61.QueryValidatorOutstandingRewardsRequest): Promise<_61.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _61.QueryValidatorCommissionRequest): Promise<_61.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _61.QueryValidatorSlashesRequest): Promise<_61.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _61.QueryDelegationRewardsRequest): Promise<_61.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _61.QueryDelegationTotalRewardsRequest): Promise<_61.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _61.QueryDelegatorValidatorsRequest): Promise<_61.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _61.QueryDelegatorWithdrawAddressRequest): Promise<_61.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _61.QueryCommunityPoolRequest): Promise<_61.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _65.QueryEvidenceRequest): Promise<_65.QueryEvidenceResponse>;
                        allEvidence(request?: _65.QueryAllEvidenceRequest): Promise<_65.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _69.QueryAllowanceRequest): Promise<_69.QueryAllowanceResponse>;
                        allowances(request: _69.QueryAllowancesRequest): Promise<_69.QueryAllowancesResponse>;
                        allowancesByGranter(request: _69.QueryAllowancesByGranterRequest): Promise<_69.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _74.QueryProposalRequest): Promise<_74.QueryProposalResponse>;
                        proposals(request: _74.QueryProposalsRequest): Promise<_74.QueryProposalsResponse>;
                        vote(request: _74.QueryVoteRequest): Promise<_74.QueryVoteResponse>;
                        votes(request: _74.QueryVotesRequest): Promise<_74.QueryVotesResponse>;
                        params(request: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                        deposit(request: _74.QueryDepositRequest): Promise<_74.QueryDepositResponse>;
                        deposits(request: _74.QueryDepositsRequest): Promise<_74.QueryDepositsResponse>;
                        tallyResult(request: _74.QueryTallyResultRequest): Promise<_74.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _78.QueryProposalRequest): Promise<_78.QueryProposalResponse>;
                        proposals(request: _78.QueryProposalsRequest): Promise<_78.QueryProposalsResponse>;
                        vote(request: _78.QueryVoteRequest): Promise<_78.QueryVoteResponse>;
                        votes(request: _78.QueryVotesRequest): Promise<_78.QueryVotesResponse>;
                        params(request: _78.QueryParamsRequest): Promise<_78.QueryParamsResponse>;
                        deposit(request: _78.QueryDepositRequest): Promise<_78.QueryDepositResponse>;
                        deposits(request: _78.QueryDepositsRequest): Promise<_78.QueryDepositsResponse>;
                        tallyResult(request: _78.QueryTallyResultRequest): Promise<_78.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _82.QueryGroupInfoRequest): Promise<_82.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _82.QueryGroupPolicyInfoRequest): Promise<_82.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _82.QueryGroupMembersRequest): Promise<_82.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _82.QueryGroupsByAdminRequest): Promise<_82.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _82.QueryGroupPoliciesByGroupRequest): Promise<_82.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _82.QueryGroupPoliciesByAdminRequest): Promise<_82.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _82.QueryProposalRequest): Promise<_82.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _82.QueryProposalsByGroupPolicyRequest): Promise<_82.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _82.QueryVoteByProposalVoterRequest): Promise<_82.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _82.QueryVotesByProposalRequest): Promise<_82.QueryVotesByProposalResponse>;
                        votesByVoter(request: _82.QueryVotesByVoterRequest): Promise<_82.QueryVotesByVoterResponse>;
                        groupsByMember(request: _82.QueryGroupsByMemberRequest): Promise<_82.QueryGroupsByMemberResponse>;
                        tallyResult(request: _82.QueryTallyResultRequest): Promise<_82.QueryTallyResultResponse>;
                        groups(request?: _82.QueryGroupsRequest): Promise<_82.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                        inflation(request?: _87.QueryInflationRequest): Promise<_87.QueryInflationResponse>;
                        annualProvisions(request?: _87.QueryAnnualProvisionsRequest): Promise<_87.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _92.QueryBalanceRequest): Promise<_92.QueryBalanceResponse>;
                        owner(request: _92.QueryOwnerRequest): Promise<_92.QueryOwnerResponse>;
                        supply(request: _92.QuerySupplyRequest): Promise<_92.QuerySupplyResponse>;
                        nFTs(request: _92.QueryNFTsRequest): Promise<_92.QueryNFTsResponse>;
                        nFT(request: _92.QueryNFTRequest): Promise<_92.QueryNFTResponse>;
                        class(request: _92.QueryClassRequest): Promise<_92.QueryClassResponse>;
                        classes(request?: _92.QueryClassesRequest): Promise<_92.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                        subspaces(request?: _98.QuerySubspacesRequest): Promise<_98.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _100.QueryParamsRequest): Promise<_100.QueryParamsResponse>;
                        signingInfo(request: _100.QuerySigningInfoRequest): Promise<_100.QuerySigningInfoResponse>;
                        signingInfos(request?: _100.QuerySigningInfosRequest): Promise<_100.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _105.QueryValidatorsRequest): Promise<_105.QueryValidatorsResponse>;
                        validator(request: _105.QueryValidatorRequest): Promise<_105.QueryValidatorResponse>;
                        validatorDelegations(request: _105.QueryValidatorDelegationsRequest): Promise<_105.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _105.QueryValidatorUnbondingDelegationsRequest): Promise<_105.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _105.QueryDelegationRequest): Promise<_105.QueryDelegationResponse>;
                        unbondingDelegation(request: _105.QueryUnbondingDelegationRequest): Promise<_105.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _105.QueryDelegatorDelegationsRequest): Promise<_105.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _105.QueryDelegatorUnbondingDelegationsRequest): Promise<_105.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _105.QueryRedelegationsRequest): Promise<_105.QueryRedelegationsResponse>;
                        delegatorValidators(request: _105.QueryDelegatorValidatorsRequest): Promise<_105.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _105.QueryDelegatorValidatorRequest): Promise<_105.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _105.QueryHistoricalInfoRequest): Promise<_105.QueryHistoricalInfoResponse>;
                        pool(request?: _105.QueryPoolRequest): Promise<_105.QueryPoolResponse>;
                        params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _109.SimulateRequest): Promise<_109.SimulateResponse>;
                        getTx(request: _109.GetTxRequest): Promise<_109.GetTxResponse>;
                        broadcastTx(request: _109.BroadcastTxRequest): Promise<_109.BroadcastTxResponse>;
                        getTxsEvent(request: _109.GetTxsEventRequest): Promise<_109.GetTxsEventResponse>;
                        getBlockWithTxs(request: _109.GetBlockWithTxsRequest): Promise<_109.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _111.QueryCurrentPlanRequest): Promise<_111.QueryCurrentPlanResponse>;
                        appliedPlan(request: _111.QueryAppliedPlanRequest): Promise<_111.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _111.QueryUpgradedConsensusStateRequest): Promise<_111.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _111.QueryModuleVersionsRequest): Promise<_111.QueryModuleVersionsResponse>;
                        authority(request?: _111.QueryAuthorityRequest): Promise<_111.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _188.LCDQueryClient;
                };
                authz: {
                    v1beta1: _189.LCDQueryClient;
                };
                bank: {
                    v1beta1: _190.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _191.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _192.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _193.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _194.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _195.LCDQueryClient;
                };
                gov: {
                    v1: _196.LCDQueryClient;
                    v1beta1: _197.LCDQueryClient;
                };
                group: {
                    v1: _198.LCDQueryClient;
                };
                mint: {
                    v1beta1: _199.LCDQueryClient;
                };
                nft: {
                    v1beta1: _200.LCDQueryClient;
                };
                params: {
                    v1beta1: _201.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _202.LCDQueryClient;
                };
                staking: {
                    v1beta1: _203.LCDQueryClient;
                };
                tx: {
                    v1beta1: _204.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _205.LCDQueryClient;
                };
            };
        }>;
    };
}
