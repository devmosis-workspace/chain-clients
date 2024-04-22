import * as _14 from "./app/module/v1alpha1/module";
import * as _15 from "./app/v1alpha1/config";
import * as _16 from "./app/v1alpha1/module";
import * as _17 from "./app/v1alpha1/query";
import * as _18 from "./auth/v1beta1/auth";
import * as _19 from "./auth/v1beta1/genesis";
import * as _20 from "./auth/v1beta1/query";
import * as _21 from "./authz/v1beta1/authz";
import * as _22 from "./authz/v1beta1/event";
import * as _23 from "./authz/v1beta1/genesis";
import * as _24 from "./authz/v1beta1/query";
import * as _25 from "./authz/v1beta1/tx";
import * as _26 from "./bank/v1beta1/authz";
import * as _27 from "./bank/v1beta1/bank";
import * as _28 from "./bank/v1beta1/genesis";
import * as _29 from "./bank/v1beta1/query";
import * as _30 from "./bank/v1beta1/tx";
import * as _31 from "./base/abci/v1beta1/abci";
import * as _32 from "./base/kv/v1beta1/kv";
import * as _33 from "./base/node/v1beta1/query";
import * as _34 from "./base/query/v1beta1/pagination";
import * as _35 from "./base/reflection/v1beta1/reflection";
import * as _36 from "./base/reflection/v2alpha1/reflection";
import * as _37 from "./base/snapshots/v1beta1/snapshot";
import * as _38 from "./base/store/v1beta1/commit_info";
import * as _39 from "./base/store/v1beta1/listening";
import * as _40 from "./base/tendermint/v1beta1/query";
import * as _41 from "./base/tendermint/v1beta1/types";
import * as _42 from "./base/v1beta1/coin";
import * as _43 from "./capability/v1beta1/capability";
import * as _44 from "./capability/v1beta1/genesis";
import * as _45 from "./crisis/v1beta1/genesis";
import * as _46 from "./crisis/v1beta1/tx";
import * as _47 from "./crypto/ed25519/keys";
import * as _48 from "./crypto/hd/v1/hd";
import * as _49 from "./crypto/keyring/v1/record";
import * as _50 from "./crypto/multisig/keys";
import * as _51 from "./crypto/secp256k1/keys";
import * as _52 from "./crypto/secp256r1/keys";
import * as _53 from "./distribution/v1beta1/distribution";
import * as _54 from "./distribution/v1beta1/genesis";
import * as _55 from "./distribution/v1beta1/query";
import * as _56 from "./distribution/v1beta1/tx";
import * as _57 from "./evidence/v1beta1/evidence";
import * as _58 from "./evidence/v1beta1/genesis";
import * as _59 from "./evidence/v1beta1/query";
import * as _60 from "./evidence/v1beta1/tx";
import * as _61 from "./feegrant/v1beta1/feegrant";
import * as _62 from "./feegrant/v1beta1/genesis";
import * as _63 from "./feegrant/v1beta1/query";
import * as _64 from "./feegrant/v1beta1/tx";
import * as _65 from "./genutil/v1beta1/genesis";
import * as _66 from "./gov/v1/genesis";
import * as _67 from "./gov/v1/gov";
import * as _68 from "./gov/v1/query";
import * as _69 from "./gov/v1/tx";
import * as _70 from "./gov/v1beta1/genesis";
import * as _71 from "./gov/v1beta1/gov";
import * as _72 from "./gov/v1beta1/query";
import * as _73 from "./gov/v1beta1/tx";
import * as _74 from "./group/v1/events";
import * as _75 from "./group/v1/genesis";
import * as _76 from "./group/v1/query";
import * as _77 from "./group/v1/tx";
import * as _78 from "./group/v1/types";
import * as _79 from "./mint/v1beta1/genesis";
import * as _80 from "./mint/v1beta1/mint";
import * as _81 from "./mint/v1beta1/query";
import * as _83 from "./nft/v1beta1/event";
import * as _84 from "./nft/v1beta1/genesis";
import * as _85 from "./nft/v1beta1/nft";
import * as _86 from "./nft/v1beta1/query";
import * as _87 from "./nft/v1beta1/tx";
import * as _88 from "./orm/module/v1alpha1/module";
import * as _89 from "./orm/v1/orm";
import * as _90 from "./orm/v1alpha1/schema";
import * as _91 from "./params/v1beta1/params";
import * as _92 from "./params/v1beta1/query";
import * as _93 from "./slashing/v1beta1/genesis";
import * as _94 from "./slashing/v1beta1/query";
import * as _95 from "./slashing/v1beta1/slashing";
import * as _96 from "./slashing/v1beta1/tx";
import * as _97 from "./staking/v1beta1/authz";
import * as _98 from "./staking/v1beta1/genesis";
import * as _99 from "./staking/v1beta1/query";
import * as _100 from "./staking/v1beta1/staking";
import * as _101 from "./staking/v1beta1/tx";
import * as _102 from "./tx/signing/v1beta1/signing";
import * as _103 from "./tx/v1beta1/service";
import * as _104 from "./tx/v1beta1/tx";
import * as _105 from "./upgrade/v1beta1/query";
import * as _106 from "./upgrade/v1beta1/tx";
import * as _107 from "./upgrade/v1beta1/upgrade";
import * as _108 from "./vesting/v1beta1/tx";
import * as _109 from "./vesting/v1beta1/vesting";
import * as _172 from "./auth/v1beta1/query.lcd";
import * as _173 from "./authz/v1beta1/query.lcd";
import * as _174 from "./bank/v1beta1/query.lcd";
import * as _175 from "./base/node/v1beta1/query.lcd";
import * as _176 from "./base/tendermint/v1beta1/query.lcd";
import * as _177 from "./distribution/v1beta1/query.lcd";
import * as _178 from "./evidence/v1beta1/query.lcd";
import * as _179 from "./feegrant/v1beta1/query.lcd";
import * as _180 from "./gov/v1/query.lcd";
import * as _181 from "./gov/v1beta1/query.lcd";
import * as _182 from "./group/v1/query.lcd";
import * as _183 from "./mint/v1beta1/query.lcd";
import * as _184 from "./nft/v1beta1/query.lcd";
import * as _185 from "./params/v1beta1/query.lcd";
import * as _186 from "./slashing/v1beta1/query.lcd";
import * as _187 from "./staking/v1beta1/query.lcd";
import * as _188 from "./tx/v1beta1/service.lcd";
import * as _189 from "./upgrade/v1beta1/query.lcd";
import * as _190 from "./app/v1alpha1/query.rpc.Query";
import * as _191 from "./auth/v1beta1/query.rpc.Query";
import * as _192 from "./authz/v1beta1/query.rpc.Query";
import * as _193 from "./bank/v1beta1/query.rpc.Query";
import * as _194 from "./base/node/v1beta1/query.rpc.Service";
import * as _195 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _196 from "./distribution/v1beta1/query.rpc.Query";
import * as _197 from "./evidence/v1beta1/query.rpc.Query";
import * as _198 from "./feegrant/v1beta1/query.rpc.Query";
import * as _199 from "./gov/v1/query.rpc.Query";
import * as _200 from "./gov/v1beta1/query.rpc.Query";
import * as _201 from "./group/v1/query.rpc.Query";
import * as _202 from "./mint/v1beta1/query.rpc.Query";
import * as _203 from "./nft/v1beta1/query.rpc.Query";
import * as _204 from "./params/v1beta1/query.rpc.Query";
import * as _205 from "./slashing/v1beta1/query.rpc.Query";
import * as _206 from "./staking/v1beta1/query.rpc.Query";
import * as _207 from "./tx/v1beta1/service.rpc.Service";
import * as _208 from "./upgrade/v1beta1/query.rpc.Query";
import * as _209 from "./authz/v1beta1/tx.rpc.msg";
import * as _210 from "./bank/v1beta1/tx.rpc.msg";
import * as _211 from "./crisis/v1beta1/tx.rpc.msg";
import * as _212 from "./distribution/v1beta1/tx.rpc.msg";
import * as _213 from "./evidence/v1beta1/tx.rpc.msg";
import * as _214 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _215 from "./gov/v1/tx.rpc.msg";
import * as _216 from "./gov/v1beta1/tx.rpc.msg";
import * as _217 from "./group/v1/tx.rpc.msg";
import * as _218 from "./nft/v1beta1/tx.rpc.msg";
import * as _219 from "./slashing/v1beta1/tx.rpc.msg";
import * as _220 from "./staking/v1beta1/tx.rpc.msg";
import * as _221 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _222 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _14.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _14.Module;
                    fromPartial(_: Partial<_14.Module>): _14.Module;
                    fromAmino(_: _14.ModuleAmino): _14.Module;
                    toAmino(_: _14.Module): _14.ModuleAmino;
                    fromAminoMsg(object: _14.ModuleAminoMsg): _14.Module;
                    toAminoMsg(message: _14.Module): _14.ModuleAminoMsg;
                    fromProtoMsg(message: _14.ModuleProtoMsg): _14.Module;
                    toProto(message: _14.Module): Uint8Array;
                    toProtoMsg(message: _14.Module): _14.ModuleProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _190.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _17.QueryConfigRequest): Promise<_17.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _17.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.QueryConfigRequest;
                fromPartial(_: Partial<_17.QueryConfigRequest>): _17.QueryConfigRequest;
                fromAmino(_: _17.QueryConfigRequestAmino): _17.QueryConfigRequest;
                toAmino(_: _17.QueryConfigRequest): _17.QueryConfigRequestAmino;
                fromAminoMsg(object: _17.QueryConfigRequestAminoMsg): _17.QueryConfigRequest;
                toAminoMsg(message: _17.QueryConfigRequest): _17.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _17.QueryConfigRequestProtoMsg): _17.QueryConfigRequest;
                toProto(message: _17.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _17.QueryConfigRequest): _17.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _17.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryConfigResponse;
                fromPartial(object: Partial<_17.QueryConfigResponse>): _17.QueryConfigResponse;
                fromAmino(object: _17.QueryConfigResponseAmino): _17.QueryConfigResponse;
                toAmino(message: _17.QueryConfigResponse): _17.QueryConfigResponseAmino;
                fromAminoMsg(object: _17.QueryConfigResponseAminoMsg): _17.QueryConfigResponse;
                toAminoMsg(message: _17.QueryConfigResponse): _17.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _17.QueryConfigResponseProtoMsg): _17.QueryConfigResponse;
                toProto(message: _17.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _17.QueryConfigResponse): _17.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _16.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.ModuleDescriptor;
                fromPartial(object: Partial<_16.ModuleDescriptor>): _16.ModuleDescriptor;
                fromAmino(object: _16.ModuleDescriptorAmino): _16.ModuleDescriptor;
                toAmino(message: _16.ModuleDescriptor): _16.ModuleDescriptorAmino;
                fromAminoMsg(object: _16.ModuleDescriptorAminoMsg): _16.ModuleDescriptor;
                toAminoMsg(message: _16.ModuleDescriptor): _16.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _16.ModuleDescriptorProtoMsg): _16.ModuleDescriptor;
                toProto(message: _16.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _16.ModuleDescriptor): _16.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _16.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.PackageReference;
                fromPartial(object: Partial<_16.PackageReference>): _16.PackageReference;
                fromAmino(object: _16.PackageReferenceAmino): _16.PackageReference;
                toAmino(message: _16.PackageReference): _16.PackageReferenceAmino;
                fromAminoMsg(object: _16.PackageReferenceAminoMsg): _16.PackageReference;
                toAminoMsg(message: _16.PackageReference): _16.PackageReferenceAminoMsg;
                fromProtoMsg(message: _16.PackageReferenceProtoMsg): _16.PackageReference;
                toProto(message: _16.PackageReference): Uint8Array;
                toProtoMsg(message: _16.PackageReference): _16.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _16.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.MigrateFromInfo;
                fromPartial(object: Partial<_16.MigrateFromInfo>): _16.MigrateFromInfo;
                fromAmino(object: _16.MigrateFromInfoAmino): _16.MigrateFromInfo;
                toAmino(message: _16.MigrateFromInfo): _16.MigrateFromInfoAmino;
                fromAminoMsg(object: _16.MigrateFromInfoAminoMsg): _16.MigrateFromInfo;
                toAminoMsg(message: _16.MigrateFromInfo): _16.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _16.MigrateFromInfoProtoMsg): _16.MigrateFromInfo;
                toProto(message: _16.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _16.MigrateFromInfo): _16.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _15.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.Config;
                fromPartial(object: Partial<_15.Config>): _15.Config;
                fromAmino(object: _15.ConfigAmino): _15.Config;
                toAmino(message: _15.Config): _15.ConfigAmino;
                fromAminoMsg(object: _15.ConfigAminoMsg): _15.Config;
                toAminoMsg(message: _15.Config): _15.ConfigAminoMsg;
                fromProtoMsg(message: _15.ConfigProtoMsg): _15.Config;
                toProto(message: _15.Config): Uint8Array;
                toProtoMsg(message: _15.Config): _15.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _15.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.ModuleConfig;
                fromPartial(object: Partial<_15.ModuleConfig>): _15.ModuleConfig;
                fromAmino(object: _15.ModuleConfigAmino): _15.ModuleConfig;
                toAmino(message: _15.ModuleConfig): _15.ModuleConfigAmino;
                fromAminoMsg(object: _15.ModuleConfigAminoMsg): _15.ModuleConfig;
                toAminoMsg(message: _15.ModuleConfig): _15.ModuleConfigAminoMsg;
                fromProtoMsg(message: _15.ModuleConfigProtoMsg): _15.ModuleConfig;
                toProto(message: _15.ModuleConfig): Uint8Array;
                toProtoMsg(message: _15.ModuleConfig): _15.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _191.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _20.QueryAccountsRequest): Promise<_20.QueryAccountsResponse>;
                account(request: _20.QueryAccountRequest): Promise<_20.QueryAccountResponse>;
                accountAddressByID(request: _20.QueryAccountAddressByIDRequest): Promise<_20.QueryAccountAddressByIDResponse>;
                params(request?: _20.QueryParamsRequest): Promise<_20.QueryParamsResponse>;
                moduleAccounts(request?: _20.QueryModuleAccountsRequest): Promise<_20.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _20.QueryModuleAccountByNameRequest): Promise<_20.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _20.Bech32PrefixRequest): Promise<_20.Bech32PrefixResponse>;
                addressBytesToString(request: _20.AddressBytesToStringRequest): Promise<_20.AddressBytesToStringResponse>;
                addressStringToBytes(request: _20.AddressStringToBytesRequest): Promise<_20.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _172.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _20.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryAccountsRequest;
                fromPartial(object: Partial<_20.QueryAccountsRequest>): _20.QueryAccountsRequest;
                fromAmino(object: _20.QueryAccountsRequestAmino): _20.QueryAccountsRequest;
                toAmino(message: _20.QueryAccountsRequest): _20.QueryAccountsRequestAmino;
                fromAminoMsg(object: _20.QueryAccountsRequestAminoMsg): _20.QueryAccountsRequest;
                toAminoMsg(message: _20.QueryAccountsRequest): _20.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _20.QueryAccountsRequestProtoMsg): _20.QueryAccountsRequest;
                toProto(message: _20.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _20.QueryAccountsRequest): _20.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _20.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryAccountsResponse;
                fromPartial(object: Partial<_20.QueryAccountsResponse>): _20.QueryAccountsResponse;
                fromAmino(object: _20.QueryAccountsResponseAmino): _20.QueryAccountsResponse;
                toAmino(message: _20.QueryAccountsResponse): _20.QueryAccountsResponseAmino;
                fromAminoMsg(object: _20.QueryAccountsResponseAminoMsg): _20.QueryAccountsResponse;
                toAminoMsg(message: _20.QueryAccountsResponse): _20.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _20.QueryAccountsResponseProtoMsg): _20.QueryAccountsResponse;
                toProto(message: _20.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _20.QueryAccountsResponse): _20.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _20.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryAccountRequest;
                fromPartial(object: Partial<_20.QueryAccountRequest>): _20.QueryAccountRequest;
                fromAmino(object: _20.QueryAccountRequestAmino): _20.QueryAccountRequest;
                toAmino(message: _20.QueryAccountRequest): _20.QueryAccountRequestAmino;
                fromAminoMsg(object: _20.QueryAccountRequestAminoMsg): _20.QueryAccountRequest;
                toAminoMsg(message: _20.QueryAccountRequest): _20.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _20.QueryAccountRequestProtoMsg): _20.QueryAccountRequest;
                toProto(message: _20.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _20.QueryAccountRequest): _20.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _20.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryAccountResponse;
                fromPartial(object: Partial<_20.QueryAccountResponse>): _20.QueryAccountResponse;
                fromAmino(object: _20.QueryAccountResponseAmino): _20.QueryAccountResponse;
                toAmino(message: _20.QueryAccountResponse): _20.QueryAccountResponseAmino;
                fromAminoMsg(object: _20.QueryAccountResponseAminoMsg): _20.QueryAccountResponse;
                toAminoMsg(message: _20.QueryAccountResponse): _20.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _20.QueryAccountResponseProtoMsg): _20.QueryAccountResponse;
                toProto(message: _20.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _20.QueryAccountResponse): _20.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _20.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.QueryParamsRequest;
                fromPartial(_: Partial<_20.QueryParamsRequest>): _20.QueryParamsRequest;
                fromAmino(_: _20.QueryParamsRequestAmino): _20.QueryParamsRequest;
                toAmino(_: _20.QueryParamsRequest): _20.QueryParamsRequestAmino;
                fromAminoMsg(object: _20.QueryParamsRequestAminoMsg): _20.QueryParamsRequest;
                toAminoMsg(message: _20.QueryParamsRequest): _20.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _20.QueryParamsRequestProtoMsg): _20.QueryParamsRequest;
                toProto(message: _20.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _20.QueryParamsRequest): _20.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _20.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryParamsResponse;
                fromPartial(object: Partial<_20.QueryParamsResponse>): _20.QueryParamsResponse;
                fromAmino(object: _20.QueryParamsResponseAmino): _20.QueryParamsResponse;
                toAmino(message: _20.QueryParamsResponse): _20.QueryParamsResponseAmino;
                fromAminoMsg(object: _20.QueryParamsResponseAminoMsg): _20.QueryParamsResponse;
                toAminoMsg(message: _20.QueryParamsResponse): _20.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _20.QueryParamsResponseProtoMsg): _20.QueryParamsResponse;
                toProto(message: _20.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _20.QueryParamsResponse): _20.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _20.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_20.QueryModuleAccountsRequest>): _20.QueryModuleAccountsRequest;
                fromAmino(_: _20.QueryModuleAccountsRequestAmino): _20.QueryModuleAccountsRequest;
                toAmino(_: _20.QueryModuleAccountsRequest): _20.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _20.QueryModuleAccountsRequestAminoMsg): _20.QueryModuleAccountsRequest;
                toAminoMsg(message: _20.QueryModuleAccountsRequest): _20.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _20.QueryModuleAccountsRequestProtoMsg): _20.QueryModuleAccountsRequest;
                toProto(message: _20.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _20.QueryModuleAccountsRequest): _20.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _20.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_20.QueryModuleAccountsResponse>): _20.QueryModuleAccountsResponse;
                fromAmino(object: _20.QueryModuleAccountsResponseAmino): _20.QueryModuleAccountsResponse;
                toAmino(message: _20.QueryModuleAccountsResponse): _20.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _20.QueryModuleAccountsResponseAminoMsg): _20.QueryModuleAccountsResponse;
                toAminoMsg(message: _20.QueryModuleAccountsResponse): _20.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _20.QueryModuleAccountsResponseProtoMsg): _20.QueryModuleAccountsResponse;
                toProto(message: _20.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _20.QueryModuleAccountsResponse): _20.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _20.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_20.QueryModuleAccountByNameRequest>): _20.QueryModuleAccountByNameRequest;
                fromAmino(object: _20.QueryModuleAccountByNameRequestAmino): _20.QueryModuleAccountByNameRequest;
                toAmino(message: _20.QueryModuleAccountByNameRequest): _20.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _20.QueryModuleAccountByNameRequestAminoMsg): _20.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _20.QueryModuleAccountByNameRequest): _20.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _20.QueryModuleAccountByNameRequestProtoMsg): _20.QueryModuleAccountByNameRequest;
                toProto(message: _20.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _20.QueryModuleAccountByNameRequest): _20.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _20.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_20.QueryModuleAccountByNameResponse>): _20.QueryModuleAccountByNameResponse;
                fromAmino(object: _20.QueryModuleAccountByNameResponseAmino): _20.QueryModuleAccountByNameResponse;
                toAmino(message: _20.QueryModuleAccountByNameResponse): _20.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _20.QueryModuleAccountByNameResponseAminoMsg): _20.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _20.QueryModuleAccountByNameResponse): _20.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _20.QueryModuleAccountByNameResponseProtoMsg): _20.QueryModuleAccountByNameResponse;
                toProto(message: _20.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _20.QueryModuleAccountByNameResponse): _20.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _20.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.Bech32PrefixRequest;
                fromPartial(_: Partial<_20.Bech32PrefixRequest>): _20.Bech32PrefixRequest;
                fromAmino(_: _20.Bech32PrefixRequestAmino): _20.Bech32PrefixRequest;
                toAmino(_: _20.Bech32PrefixRequest): _20.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _20.Bech32PrefixRequestAminoMsg): _20.Bech32PrefixRequest;
                toAminoMsg(message: _20.Bech32PrefixRequest): _20.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _20.Bech32PrefixRequestProtoMsg): _20.Bech32PrefixRequest;
                toProto(message: _20.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _20.Bech32PrefixRequest): _20.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _20.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Bech32PrefixResponse;
                fromPartial(object: Partial<_20.Bech32PrefixResponse>): _20.Bech32PrefixResponse;
                fromAmino(object: _20.Bech32PrefixResponseAmino): _20.Bech32PrefixResponse;
                toAmino(message: _20.Bech32PrefixResponse): _20.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _20.Bech32PrefixResponseAminoMsg): _20.Bech32PrefixResponse;
                toAminoMsg(message: _20.Bech32PrefixResponse): _20.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _20.Bech32PrefixResponseProtoMsg): _20.Bech32PrefixResponse;
                toProto(message: _20.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _20.Bech32PrefixResponse): _20.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _20.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.AddressBytesToStringRequest;
                fromPartial(object: Partial<_20.AddressBytesToStringRequest>): _20.AddressBytesToStringRequest;
                fromAmino(object: _20.AddressBytesToStringRequestAmino): _20.AddressBytesToStringRequest;
                toAmino(message: _20.AddressBytesToStringRequest): _20.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _20.AddressBytesToStringRequestAminoMsg): _20.AddressBytesToStringRequest;
                toAminoMsg(message: _20.AddressBytesToStringRequest): _20.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _20.AddressBytesToStringRequestProtoMsg): _20.AddressBytesToStringRequest;
                toProto(message: _20.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _20.AddressBytesToStringRequest): _20.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _20.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.AddressBytesToStringResponse;
                fromPartial(object: Partial<_20.AddressBytesToStringResponse>): _20.AddressBytesToStringResponse;
                fromAmino(object: _20.AddressBytesToStringResponseAmino): _20.AddressBytesToStringResponse;
                toAmino(message: _20.AddressBytesToStringResponse): _20.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _20.AddressBytesToStringResponseAminoMsg): _20.AddressBytesToStringResponse;
                toAminoMsg(message: _20.AddressBytesToStringResponse): _20.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _20.AddressBytesToStringResponseProtoMsg): _20.AddressBytesToStringResponse;
                toProto(message: _20.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _20.AddressBytesToStringResponse): _20.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _20.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.AddressStringToBytesRequest;
                fromPartial(object: Partial<_20.AddressStringToBytesRequest>): _20.AddressStringToBytesRequest;
                fromAmino(object: _20.AddressStringToBytesRequestAmino): _20.AddressStringToBytesRequest;
                toAmino(message: _20.AddressStringToBytesRequest): _20.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _20.AddressStringToBytesRequestAminoMsg): _20.AddressStringToBytesRequest;
                toAminoMsg(message: _20.AddressStringToBytesRequest): _20.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _20.AddressStringToBytesRequestProtoMsg): _20.AddressStringToBytesRequest;
                toProto(message: _20.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _20.AddressStringToBytesRequest): _20.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _20.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.AddressStringToBytesResponse;
                fromPartial(object: Partial<_20.AddressStringToBytesResponse>): _20.AddressStringToBytesResponse;
                fromAmino(object: _20.AddressStringToBytesResponseAmino): _20.AddressStringToBytesResponse;
                toAmino(message: _20.AddressStringToBytesResponse): _20.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _20.AddressStringToBytesResponseAminoMsg): _20.AddressStringToBytesResponse;
                toAminoMsg(message: _20.AddressStringToBytesResponse): _20.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _20.AddressStringToBytesResponseProtoMsg): _20.AddressStringToBytesResponse;
                toProto(message: _20.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _20.AddressStringToBytesResponse): _20.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _20.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_20.QueryAccountAddressByIDRequest>): _20.QueryAccountAddressByIDRequest;
                fromAmino(object: _20.QueryAccountAddressByIDRequestAmino): _20.QueryAccountAddressByIDRequest;
                toAmino(message: _20.QueryAccountAddressByIDRequest): _20.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _20.QueryAccountAddressByIDRequestAminoMsg): _20.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _20.QueryAccountAddressByIDRequest): _20.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _20.QueryAccountAddressByIDRequestProtoMsg): _20.QueryAccountAddressByIDRequest;
                toProto(message: _20.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _20.QueryAccountAddressByIDRequest): _20.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _20.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_20.QueryAccountAddressByIDResponse>): _20.QueryAccountAddressByIDResponse;
                fromAmino(object: _20.QueryAccountAddressByIDResponseAmino): _20.QueryAccountAddressByIDResponse;
                toAmino(message: _20.QueryAccountAddressByIDResponse): _20.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _20.QueryAccountAddressByIDResponseAminoMsg): _20.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _20.QueryAccountAddressByIDResponse): _20.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _20.QueryAccountAddressByIDResponseProtoMsg): _20.QueryAccountAddressByIDResponse;
                toProto(message: _20.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _20.QueryAccountAddressByIDResponse): _20.QueryAccountAddressByIDResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _18.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _18.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _19.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.GenesisState;
                fromPartial(object: Partial<_19.GenesisState>): _19.GenesisState;
                fromAmino(object: _19.GenesisStateAmino): _19.GenesisState;
                toAmino(message: _19.GenesisState): _19.GenesisStateAmino;
                fromAminoMsg(object: _19.GenesisStateAminoMsg): _19.GenesisState;
                toAminoMsg(message: _19.GenesisState): _19.GenesisStateAminoMsg;
                fromProtoMsg(message: _19.GenesisStateProtoMsg): _19.GenesisState;
                toProto(message: _19.GenesisState): Uint8Array;
                toProtoMsg(message: _19.GenesisState): _19.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _18.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.BaseAccount;
                fromPartial(object: Partial<_18.BaseAccount>): _18.BaseAccount;
                fromAmino(object: _18.BaseAccountAmino): _18.BaseAccount;
                toAmino(message: _18.BaseAccount): _18.BaseAccountAmino;
                fromAminoMsg(object: _18.BaseAccountAminoMsg): _18.BaseAccount;
                toAminoMsg(message: _18.BaseAccount): _18.BaseAccountAminoMsg;
                fromProtoMsg(message: _18.BaseAccountProtoMsg): _18.BaseAccount;
                toProto(message: _18.BaseAccount): Uint8Array;
                toProtoMsg(message: _18.BaseAccount): _18.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _18.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.ModuleAccount;
                fromPartial(object: Partial<_18.ModuleAccount>): _18.ModuleAccount;
                fromAmino(object: _18.ModuleAccountAmino): _18.ModuleAccount;
                toAmino(message: _18.ModuleAccount): _18.ModuleAccountAmino;
                fromAminoMsg(object: _18.ModuleAccountAminoMsg): _18.ModuleAccount;
                toAminoMsg(message: _18.ModuleAccount): _18.ModuleAccountAminoMsg;
                fromProtoMsg(message: _18.ModuleAccountProtoMsg): _18.ModuleAccount;
                toProto(message: _18.ModuleAccount): Uint8Array;
                toProtoMsg(message: _18.ModuleAccount): _18.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _18.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.Params;
                fromPartial(object: Partial<_18.Params>): _18.Params;
                fromAmino(object: _18.ParamsAmino): _18.Params;
                toAmino(message: _18.Params): _18.ParamsAmino;
                fromAminoMsg(object: _18.ParamsAminoMsg): _18.Params;
                toAminoMsg(message: _18.Params): _18.ParamsAminoMsg;
                fromProtoMsg(message: _18.ParamsProtoMsg): _18.Params;
                toProto(message: _18.Params): Uint8Array;
                toProtoMsg(message: _18.Params): _18.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _209.MsgClientImpl;
            QueryClientImpl: typeof _192.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _24.QueryGrantsRequest): Promise<_24.QueryGrantsResponse>;
                granterGrants(request: _24.QueryGranterGrantsRequest): Promise<_24.QueryGranterGrantsResponse>;
                granteeGrants(request: _24.QueryGranteeGrantsRequest): Promise<_24.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _173.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _25.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _25.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _25.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _25.MsgGrant): {
                        typeUrl: string;
                        value: _25.MsgGrant;
                    };
                    exec(value: _25.MsgExec): {
                        typeUrl: string;
                        value: _25.MsgExec;
                    };
                    revoke(value: _25.MsgRevoke): {
                        typeUrl: string;
                        value: _25.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _25.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _25.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _25.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _25.MsgGrant): {
                        typeUrl: string;
                        value: _25.MsgGrant;
                    };
                    exec(value: _25.MsgExec): {
                        typeUrl: string;
                        value: _25.MsgExec;
                    };
                    revoke(value: _25.MsgRevoke): {
                        typeUrl: string;
                        value: _25.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _25.MsgGrant) => _25.MsgGrantAmino;
                    fromAmino: (object: _25.MsgGrantAmino) => _25.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _25.MsgExec) => _25.MsgExecAmino;
                    fromAmino: (object: _25.MsgExecAmino) => _25.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _25.MsgRevoke) => _25.MsgRevokeAmino;
                    fromAmino: (object: _25.MsgRevokeAmino) => _25.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _25.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgGrant;
                fromPartial(object: Partial<_25.MsgGrant>): _25.MsgGrant;
                fromAmino(object: _25.MsgGrantAmino): _25.MsgGrant;
                toAmino(message: _25.MsgGrant): _25.MsgGrantAmino;
                fromAminoMsg(object: _25.MsgGrantAminoMsg): _25.MsgGrant;
                toAminoMsg(message: _25.MsgGrant): _25.MsgGrantAminoMsg;
                fromProtoMsg(message: _25.MsgGrantProtoMsg): _25.MsgGrant;
                toProto(message: _25.MsgGrant): Uint8Array;
                toProtoMsg(message: _25.MsgGrant): _25.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _25.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgExecResponse;
                fromPartial(object: Partial<_25.MsgExecResponse>): _25.MsgExecResponse;
                fromAmino(object: _25.MsgExecResponseAmino): _25.MsgExecResponse;
                toAmino(message: _25.MsgExecResponse): _25.MsgExecResponseAmino;
                fromAminoMsg(object: _25.MsgExecResponseAminoMsg): _25.MsgExecResponse;
                toAminoMsg(message: _25.MsgExecResponse): _25.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _25.MsgExecResponseProtoMsg): _25.MsgExecResponse;
                toProto(message: _25.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _25.MsgExecResponse): _25.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _25.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgExec;
                fromPartial(object: Partial<_25.MsgExec>): _25.MsgExec;
                fromAmino(object: _25.MsgExecAmino): _25.MsgExec;
                toAmino(message: _25.MsgExec): _25.MsgExecAmino;
                fromAminoMsg(object: _25.MsgExecAminoMsg): _25.MsgExec;
                toAminoMsg(message: _25.MsgExec): _25.MsgExecAminoMsg;
                fromProtoMsg(message: _25.MsgExecProtoMsg): _25.MsgExec;
                toProto(message: _25.MsgExec): Uint8Array;
                toProtoMsg(message: _25.MsgExec): _25.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _25.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _25.MsgGrantResponse;
                fromPartial(_: Partial<_25.MsgGrantResponse>): _25.MsgGrantResponse;
                fromAmino(_: _25.MsgGrantResponseAmino): _25.MsgGrantResponse;
                toAmino(_: _25.MsgGrantResponse): _25.MsgGrantResponseAmino;
                fromAminoMsg(object: _25.MsgGrantResponseAminoMsg): _25.MsgGrantResponse;
                toAminoMsg(message: _25.MsgGrantResponse): _25.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _25.MsgGrantResponseProtoMsg): _25.MsgGrantResponse;
                toProto(message: _25.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _25.MsgGrantResponse): _25.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _25.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgRevoke;
                fromPartial(object: Partial<_25.MsgRevoke>): _25.MsgRevoke;
                fromAmino(object: _25.MsgRevokeAmino): _25.MsgRevoke;
                toAmino(message: _25.MsgRevoke): _25.MsgRevokeAmino;
                fromAminoMsg(object: _25.MsgRevokeAminoMsg): _25.MsgRevoke;
                toAminoMsg(message: _25.MsgRevoke): _25.MsgRevokeAminoMsg;
                fromProtoMsg(message: _25.MsgRevokeProtoMsg): _25.MsgRevoke;
                toProto(message: _25.MsgRevoke): Uint8Array;
                toProtoMsg(message: _25.MsgRevoke): _25.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _25.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _25.MsgRevokeResponse;
                fromPartial(_: Partial<_25.MsgRevokeResponse>): _25.MsgRevokeResponse;
                fromAmino(_: _25.MsgRevokeResponseAmino): _25.MsgRevokeResponse;
                toAmino(_: _25.MsgRevokeResponse): _25.MsgRevokeResponseAmino;
                fromAminoMsg(object: _25.MsgRevokeResponseAminoMsg): _25.MsgRevokeResponse;
                toAminoMsg(message: _25.MsgRevokeResponse): _25.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _25.MsgRevokeResponseProtoMsg): _25.MsgRevokeResponse;
                toProto(message: _25.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _25.MsgRevokeResponse): _25.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _24.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryGrantsRequest;
                fromPartial(object: Partial<_24.QueryGrantsRequest>): _24.QueryGrantsRequest;
                fromAmino(object: _24.QueryGrantsRequestAmino): _24.QueryGrantsRequest;
                toAmino(message: _24.QueryGrantsRequest): _24.QueryGrantsRequestAmino;
                fromAminoMsg(object: _24.QueryGrantsRequestAminoMsg): _24.QueryGrantsRequest;
                toAminoMsg(message: _24.QueryGrantsRequest): _24.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _24.QueryGrantsRequestProtoMsg): _24.QueryGrantsRequest;
                toProto(message: _24.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryGrantsRequest): _24.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _24.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryGrantsResponse;
                fromPartial(object: Partial<_24.QueryGrantsResponse>): _24.QueryGrantsResponse;
                fromAmino(object: _24.QueryGrantsResponseAmino): _24.QueryGrantsResponse;
                toAmino(message: _24.QueryGrantsResponse): _24.QueryGrantsResponseAmino;
                fromAminoMsg(object: _24.QueryGrantsResponseAminoMsg): _24.QueryGrantsResponse;
                toAminoMsg(message: _24.QueryGrantsResponse): _24.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _24.QueryGrantsResponseProtoMsg): _24.QueryGrantsResponse;
                toProto(message: _24.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryGrantsResponse): _24.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _24.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_24.QueryGranterGrantsRequest>): _24.QueryGranterGrantsRequest;
                fromAmino(object: _24.QueryGranterGrantsRequestAmino): _24.QueryGranterGrantsRequest;
                toAmino(message: _24.QueryGranterGrantsRequest): _24.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _24.QueryGranterGrantsRequestAminoMsg): _24.QueryGranterGrantsRequest;
                toAminoMsg(message: _24.QueryGranterGrantsRequest): _24.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _24.QueryGranterGrantsRequestProtoMsg): _24.QueryGranterGrantsRequest;
                toProto(message: _24.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryGranterGrantsRequest): _24.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _24.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_24.QueryGranterGrantsResponse>): _24.QueryGranterGrantsResponse;
                fromAmino(object: _24.QueryGranterGrantsResponseAmino): _24.QueryGranterGrantsResponse;
                toAmino(message: _24.QueryGranterGrantsResponse): _24.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _24.QueryGranterGrantsResponseAminoMsg): _24.QueryGranterGrantsResponse;
                toAminoMsg(message: _24.QueryGranterGrantsResponse): _24.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _24.QueryGranterGrantsResponseProtoMsg): _24.QueryGranterGrantsResponse;
                toProto(message: _24.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryGranterGrantsResponse): _24.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _24.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_24.QueryGranteeGrantsRequest>): _24.QueryGranteeGrantsRequest;
                fromAmino(object: _24.QueryGranteeGrantsRequestAmino): _24.QueryGranteeGrantsRequest;
                toAmino(message: _24.QueryGranteeGrantsRequest): _24.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _24.QueryGranteeGrantsRequestAminoMsg): _24.QueryGranteeGrantsRequest;
                toAminoMsg(message: _24.QueryGranteeGrantsRequest): _24.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _24.QueryGranteeGrantsRequestProtoMsg): _24.QueryGranteeGrantsRequest;
                toProto(message: _24.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryGranteeGrantsRequest): _24.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _24.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_24.QueryGranteeGrantsResponse>): _24.QueryGranteeGrantsResponse;
                fromAmino(object: _24.QueryGranteeGrantsResponseAmino): _24.QueryGranteeGrantsResponse;
                toAmino(message: _24.QueryGranteeGrantsResponse): _24.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _24.QueryGranteeGrantsResponseAminoMsg): _24.QueryGranteeGrantsResponse;
                toAminoMsg(message: _24.QueryGranteeGrantsResponse): _24.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _24.QueryGranteeGrantsResponseProtoMsg): _24.QueryGranteeGrantsResponse;
                toProto(message: _24.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryGranteeGrantsResponse): _24.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _23.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.GenesisState;
                fromPartial(object: Partial<_23.GenesisState>): _23.GenesisState;
                fromAmino(object: _23.GenesisStateAmino): _23.GenesisState;
                toAmino(message: _23.GenesisState): _23.GenesisStateAmino;
                fromAminoMsg(object: _23.GenesisStateAminoMsg): _23.GenesisState;
                toAminoMsg(message: _23.GenesisState): _23.GenesisStateAminoMsg;
                fromProtoMsg(message: _23.GenesisStateProtoMsg): _23.GenesisState;
                toProto(message: _23.GenesisState): Uint8Array;
                toProtoMsg(message: _23.GenesisState): _23.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _22.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.EventGrant;
                fromPartial(object: Partial<_22.EventGrant>): _22.EventGrant;
                fromAmino(object: _22.EventGrantAmino): _22.EventGrant;
                toAmino(message: _22.EventGrant): _22.EventGrantAmino;
                fromAminoMsg(object: _22.EventGrantAminoMsg): _22.EventGrant;
                toAminoMsg(message: _22.EventGrant): _22.EventGrantAminoMsg;
                fromProtoMsg(message: _22.EventGrantProtoMsg): _22.EventGrant;
                toProto(message: _22.EventGrant): Uint8Array;
                toProtoMsg(message: _22.EventGrant): _22.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _22.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.EventRevoke;
                fromPartial(object: Partial<_22.EventRevoke>): _22.EventRevoke;
                fromAmino(object: _22.EventRevokeAmino): _22.EventRevoke;
                toAmino(message: _22.EventRevoke): _22.EventRevokeAmino;
                fromAminoMsg(object: _22.EventRevokeAminoMsg): _22.EventRevoke;
                toAminoMsg(message: _22.EventRevoke): _22.EventRevokeAminoMsg;
                fromProtoMsg(message: _22.EventRevokeProtoMsg): _22.EventRevoke;
                toProto(message: _22.EventRevoke): Uint8Array;
                toProtoMsg(message: _22.EventRevoke): _22.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _21.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.GenericAuthorization;
                fromPartial(object: Partial<_21.GenericAuthorization>): _21.GenericAuthorization;
                fromAmino(object: _21.GenericAuthorizationAmino): _21.GenericAuthorization;
                toAmino(message: _21.GenericAuthorization): _21.GenericAuthorizationAmino;
                fromAminoMsg(object: _21.GenericAuthorizationAminoMsg): _21.GenericAuthorization;
                toAminoMsg(message: _21.GenericAuthorization): _21.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _21.GenericAuthorizationProtoMsg): _21.GenericAuthorization;
                toProto(message: _21.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _21.GenericAuthorization): _21.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _21.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.Grant;
                fromPartial(object: Partial<_21.Grant>): _21.Grant;
                fromAmino(object: _21.GrantAmino): _21.Grant;
                toAmino(message: _21.Grant): _21.GrantAmino;
                fromAminoMsg(object: _21.GrantAminoMsg): _21.Grant;
                toAminoMsg(message: _21.Grant): _21.GrantAminoMsg;
                fromProtoMsg(message: _21.GrantProtoMsg): _21.Grant;
                toProto(message: _21.Grant): Uint8Array;
                toProtoMsg(message: _21.Grant): _21.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _21.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.GrantAuthorization;
                fromPartial(object: Partial<_21.GrantAuthorization>): _21.GrantAuthorization;
                fromAmino(object: _21.GrantAuthorizationAmino): _21.GrantAuthorization;
                toAmino(message: _21.GrantAuthorization): _21.GrantAuthorizationAmino;
                fromAminoMsg(object: _21.GrantAuthorizationAminoMsg): _21.GrantAuthorization;
                toAminoMsg(message: _21.GrantAuthorization): _21.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _21.GrantAuthorizationProtoMsg): _21.GrantAuthorization;
                toProto(message: _21.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _21.GrantAuthorization): _21.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _21.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.GrantQueueItem;
                fromPartial(object: Partial<_21.GrantQueueItem>): _21.GrantQueueItem;
                fromAmino(object: _21.GrantQueueItemAmino): _21.GrantQueueItem;
                toAmino(message: _21.GrantQueueItem): _21.GrantQueueItemAmino;
                fromAminoMsg(object: _21.GrantQueueItemAminoMsg): _21.GrantQueueItem;
                toAminoMsg(message: _21.GrantQueueItem): _21.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _21.GrantQueueItemProtoMsg): _21.GrantQueueItem;
                toProto(message: _21.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _21.GrantQueueItem): _21.GrantQueueItemProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _26.SendAuthorization | _97.StakeAuthorization | _21.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _210.MsgClientImpl;
            QueryClientImpl: typeof _193.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _29.QueryBalanceRequest): Promise<_29.QueryBalanceResponse>;
                allBalances(request: _29.QueryAllBalancesRequest): Promise<_29.QueryAllBalancesResponse>;
                spendableBalances(request: _29.QuerySpendableBalancesRequest): Promise<_29.QuerySpendableBalancesResponse>;
                totalSupply(request?: _29.QueryTotalSupplyRequest): Promise<_29.QueryTotalSupplyResponse>;
                supplyOf(request: _29.QuerySupplyOfRequest): Promise<_29.QuerySupplyOfResponse>;
                params(request?: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                denomMetadata(request: _29.QueryDenomMetadataRequest): Promise<_29.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _29.QueryDenomsMetadataRequest): Promise<_29.QueryDenomsMetadataResponse>;
                denomOwners(request: _29.QueryDenomOwnersRequest): Promise<_29.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _174.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _30.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _30.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _30.MsgSend): {
                        typeUrl: string;
                        value: _30.MsgSend;
                    };
                    multiSend(value: _30.MsgMultiSend): {
                        typeUrl: string;
                        value: _30.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _30.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _30.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _30.MsgSend): {
                        typeUrl: string;
                        value: _30.MsgSend;
                    };
                    multiSend(value: _30.MsgMultiSend): {
                        typeUrl: string;
                        value: _30.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _30.MsgSend) => _30.MsgSendAmino;
                    fromAmino: (object: _30.MsgSendAmino) => _30.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _30.MsgMultiSend) => _30.MsgMultiSendAmino;
                    fromAmino: (object: _30.MsgMultiSendAmino) => _30.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _30.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.MsgSend;
                fromPartial(object: Partial<_30.MsgSend>): _30.MsgSend;
                fromAmino(object: _30.MsgSendAmino): _30.MsgSend;
                toAmino(message: _30.MsgSend): _30.MsgSendAmino;
                fromAminoMsg(object: _30.MsgSendAminoMsg): _30.MsgSend;
                toAminoMsg(message: _30.MsgSend): _30.MsgSendAminoMsg;
                fromProtoMsg(message: _30.MsgSendProtoMsg): _30.MsgSend;
                toProto(message: _30.MsgSend): Uint8Array;
                toProtoMsg(message: _30.MsgSend): _30.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _30.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _30.MsgSendResponse;
                fromPartial(_: Partial<_30.MsgSendResponse>): _30.MsgSendResponse;
                fromAmino(_: _30.MsgSendResponseAmino): _30.MsgSendResponse;
                toAmino(_: _30.MsgSendResponse): _30.MsgSendResponseAmino;
                fromAminoMsg(object: _30.MsgSendResponseAminoMsg): _30.MsgSendResponse;
                toAminoMsg(message: _30.MsgSendResponse): _30.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _30.MsgSendResponseProtoMsg): _30.MsgSendResponse;
                toProto(message: _30.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _30.MsgSendResponse): _30.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _30.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.MsgMultiSend;
                fromPartial(object: Partial<_30.MsgMultiSend>): _30.MsgMultiSend;
                fromAmino(object: _30.MsgMultiSendAmino): _30.MsgMultiSend;
                toAmino(message: _30.MsgMultiSend): _30.MsgMultiSendAmino;
                fromAminoMsg(object: _30.MsgMultiSendAminoMsg): _30.MsgMultiSend;
                toAminoMsg(message: _30.MsgMultiSend): _30.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _30.MsgMultiSendProtoMsg): _30.MsgMultiSend;
                toProto(message: _30.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _30.MsgMultiSend): _30.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _30.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _30.MsgMultiSendResponse;
                fromPartial(_: Partial<_30.MsgMultiSendResponse>): _30.MsgMultiSendResponse;
                fromAmino(_: _30.MsgMultiSendResponseAmino): _30.MsgMultiSendResponse;
                toAmino(_: _30.MsgMultiSendResponse): _30.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _30.MsgMultiSendResponseAminoMsg): _30.MsgMultiSendResponse;
                toAminoMsg(message: _30.MsgMultiSendResponse): _30.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _30.MsgMultiSendResponseProtoMsg): _30.MsgMultiSendResponse;
                toProto(message: _30.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _30.MsgMultiSendResponse): _30.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _29.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryBalanceRequest;
                fromPartial(object: Partial<_29.QueryBalanceRequest>): _29.QueryBalanceRequest;
                fromAmino(object: _29.QueryBalanceRequestAmino): _29.QueryBalanceRequest;
                toAmino(message: _29.QueryBalanceRequest): _29.QueryBalanceRequestAmino;
                fromAminoMsg(object: _29.QueryBalanceRequestAminoMsg): _29.QueryBalanceRequest;
                toAminoMsg(message: _29.QueryBalanceRequest): _29.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _29.QueryBalanceRequestProtoMsg): _29.QueryBalanceRequest;
                toProto(message: _29.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _29.QueryBalanceRequest): _29.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _29.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryBalanceResponse;
                fromPartial(object: Partial<_29.QueryBalanceResponse>): _29.QueryBalanceResponse;
                fromAmino(object: _29.QueryBalanceResponseAmino): _29.QueryBalanceResponse;
                toAmino(message: _29.QueryBalanceResponse): _29.QueryBalanceResponseAmino;
                fromAminoMsg(object: _29.QueryBalanceResponseAminoMsg): _29.QueryBalanceResponse;
                toAminoMsg(message: _29.QueryBalanceResponse): _29.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _29.QueryBalanceResponseProtoMsg): _29.QueryBalanceResponse;
                toProto(message: _29.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _29.QueryBalanceResponse): _29.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _29.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryAllBalancesRequest;
                fromPartial(object: Partial<_29.QueryAllBalancesRequest>): _29.QueryAllBalancesRequest;
                fromAmino(object: _29.QueryAllBalancesRequestAmino): _29.QueryAllBalancesRequest;
                toAmino(message: _29.QueryAllBalancesRequest): _29.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _29.QueryAllBalancesRequestAminoMsg): _29.QueryAllBalancesRequest;
                toAminoMsg(message: _29.QueryAllBalancesRequest): _29.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _29.QueryAllBalancesRequestProtoMsg): _29.QueryAllBalancesRequest;
                toProto(message: _29.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _29.QueryAllBalancesRequest): _29.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _29.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryAllBalancesResponse;
                fromPartial(object: Partial<_29.QueryAllBalancesResponse>): _29.QueryAllBalancesResponse;
                fromAmino(object: _29.QueryAllBalancesResponseAmino): _29.QueryAllBalancesResponse;
                toAmino(message: _29.QueryAllBalancesResponse): _29.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _29.QueryAllBalancesResponseAminoMsg): _29.QueryAllBalancesResponse;
                toAminoMsg(message: _29.QueryAllBalancesResponse): _29.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _29.QueryAllBalancesResponseProtoMsg): _29.QueryAllBalancesResponse;
                toProto(message: _29.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _29.QueryAllBalancesResponse): _29.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _29.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_29.QuerySpendableBalancesRequest>): _29.QuerySpendableBalancesRequest;
                fromAmino(object: _29.QuerySpendableBalancesRequestAmino): _29.QuerySpendableBalancesRequest;
                toAmino(message: _29.QuerySpendableBalancesRequest): _29.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _29.QuerySpendableBalancesRequestAminoMsg): _29.QuerySpendableBalancesRequest;
                toAminoMsg(message: _29.QuerySpendableBalancesRequest): _29.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _29.QuerySpendableBalancesRequestProtoMsg): _29.QuerySpendableBalancesRequest;
                toProto(message: _29.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _29.QuerySpendableBalancesRequest): _29.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _29.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_29.QuerySpendableBalancesResponse>): _29.QuerySpendableBalancesResponse;
                fromAmino(object: _29.QuerySpendableBalancesResponseAmino): _29.QuerySpendableBalancesResponse;
                toAmino(message: _29.QuerySpendableBalancesResponse): _29.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _29.QuerySpendableBalancesResponseAminoMsg): _29.QuerySpendableBalancesResponse;
                toAminoMsg(message: _29.QuerySpendableBalancesResponse): _29.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _29.QuerySpendableBalancesResponseProtoMsg): _29.QuerySpendableBalancesResponse;
                toProto(message: _29.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _29.QuerySpendableBalancesResponse): _29.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _29.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_29.QueryTotalSupplyRequest>): _29.QueryTotalSupplyRequest;
                fromAmino(object: _29.QueryTotalSupplyRequestAmino): _29.QueryTotalSupplyRequest;
                toAmino(message: _29.QueryTotalSupplyRequest): _29.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _29.QueryTotalSupplyRequestAminoMsg): _29.QueryTotalSupplyRequest;
                toAminoMsg(message: _29.QueryTotalSupplyRequest): _29.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _29.QueryTotalSupplyRequestProtoMsg): _29.QueryTotalSupplyRequest;
                toProto(message: _29.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _29.QueryTotalSupplyRequest): _29.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _29.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_29.QueryTotalSupplyResponse>): _29.QueryTotalSupplyResponse;
                fromAmino(object: _29.QueryTotalSupplyResponseAmino): _29.QueryTotalSupplyResponse;
                toAmino(message: _29.QueryTotalSupplyResponse): _29.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _29.QueryTotalSupplyResponseAminoMsg): _29.QueryTotalSupplyResponse;
                toAminoMsg(message: _29.QueryTotalSupplyResponse): _29.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _29.QueryTotalSupplyResponseProtoMsg): _29.QueryTotalSupplyResponse;
                toProto(message: _29.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _29.QueryTotalSupplyResponse): _29.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _29.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QuerySupplyOfRequest;
                fromPartial(object: Partial<_29.QuerySupplyOfRequest>): _29.QuerySupplyOfRequest;
                fromAmino(object: _29.QuerySupplyOfRequestAmino): _29.QuerySupplyOfRequest;
                toAmino(message: _29.QuerySupplyOfRequest): _29.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _29.QuerySupplyOfRequestAminoMsg): _29.QuerySupplyOfRequest;
                toAminoMsg(message: _29.QuerySupplyOfRequest): _29.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _29.QuerySupplyOfRequestProtoMsg): _29.QuerySupplyOfRequest;
                toProto(message: _29.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _29.QuerySupplyOfRequest): _29.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _29.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QuerySupplyOfResponse;
                fromPartial(object: Partial<_29.QuerySupplyOfResponse>): _29.QuerySupplyOfResponse;
                fromAmino(object: _29.QuerySupplyOfResponseAmino): _29.QuerySupplyOfResponse;
                toAmino(message: _29.QuerySupplyOfResponse): _29.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _29.QuerySupplyOfResponseAminoMsg): _29.QuerySupplyOfResponse;
                toAminoMsg(message: _29.QuerySupplyOfResponse): _29.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _29.QuerySupplyOfResponseProtoMsg): _29.QuerySupplyOfResponse;
                toProto(message: _29.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _29.QuerySupplyOfResponse): _29.QuerySupplyOfResponseProtoMsg;
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
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _29.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_29.QueryDenomsMetadataRequest>): _29.QueryDenomsMetadataRequest;
                fromAmino(object: _29.QueryDenomsMetadataRequestAmino): _29.QueryDenomsMetadataRequest;
                toAmino(message: _29.QueryDenomsMetadataRequest): _29.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _29.QueryDenomsMetadataRequestAminoMsg): _29.QueryDenomsMetadataRequest;
                toAminoMsg(message: _29.QueryDenomsMetadataRequest): _29.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _29.QueryDenomsMetadataRequestProtoMsg): _29.QueryDenomsMetadataRequest;
                toProto(message: _29.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _29.QueryDenomsMetadataRequest): _29.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _29.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_29.QueryDenomsMetadataResponse>): _29.QueryDenomsMetadataResponse;
                fromAmino(object: _29.QueryDenomsMetadataResponseAmino): _29.QueryDenomsMetadataResponse;
                toAmino(message: _29.QueryDenomsMetadataResponse): _29.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _29.QueryDenomsMetadataResponseAminoMsg): _29.QueryDenomsMetadataResponse;
                toAminoMsg(message: _29.QueryDenomsMetadataResponse): _29.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _29.QueryDenomsMetadataResponseProtoMsg): _29.QueryDenomsMetadataResponse;
                toProto(message: _29.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _29.QueryDenomsMetadataResponse): _29.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _29.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_29.QueryDenomMetadataRequest>): _29.QueryDenomMetadataRequest;
                fromAmino(object: _29.QueryDenomMetadataRequestAmino): _29.QueryDenomMetadataRequest;
                toAmino(message: _29.QueryDenomMetadataRequest): _29.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _29.QueryDenomMetadataRequestAminoMsg): _29.QueryDenomMetadataRequest;
                toAminoMsg(message: _29.QueryDenomMetadataRequest): _29.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _29.QueryDenomMetadataRequestProtoMsg): _29.QueryDenomMetadataRequest;
                toProto(message: _29.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _29.QueryDenomMetadataRequest): _29.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _29.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_29.QueryDenomMetadataResponse>): _29.QueryDenomMetadataResponse;
                fromAmino(object: _29.QueryDenomMetadataResponseAmino): _29.QueryDenomMetadataResponse;
                toAmino(message: _29.QueryDenomMetadataResponse): _29.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _29.QueryDenomMetadataResponseAminoMsg): _29.QueryDenomMetadataResponse;
                toAminoMsg(message: _29.QueryDenomMetadataResponse): _29.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _29.QueryDenomMetadataResponseProtoMsg): _29.QueryDenomMetadataResponse;
                toProto(message: _29.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _29.QueryDenomMetadataResponse): _29.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _29.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_29.QueryDenomOwnersRequest>): _29.QueryDenomOwnersRequest;
                fromAmino(object: _29.QueryDenomOwnersRequestAmino): _29.QueryDenomOwnersRequest;
                toAmino(message: _29.QueryDenomOwnersRequest): _29.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _29.QueryDenomOwnersRequestAminoMsg): _29.QueryDenomOwnersRequest;
                toAminoMsg(message: _29.QueryDenomOwnersRequest): _29.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _29.QueryDenomOwnersRequestProtoMsg): _29.QueryDenomOwnersRequest;
                toProto(message: _29.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _29.QueryDenomOwnersRequest): _29.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _29.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.DenomOwner;
                fromPartial(object: Partial<_29.DenomOwner>): _29.DenomOwner;
                fromAmino(object: _29.DenomOwnerAmino): _29.DenomOwner;
                toAmino(message: _29.DenomOwner): _29.DenomOwnerAmino;
                fromAminoMsg(object: _29.DenomOwnerAminoMsg): _29.DenomOwner;
                toAminoMsg(message: _29.DenomOwner): _29.DenomOwnerAminoMsg;
                fromProtoMsg(message: _29.DenomOwnerProtoMsg): _29.DenomOwner;
                toProto(message: _29.DenomOwner): Uint8Array;
                toProtoMsg(message: _29.DenomOwner): _29.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _29.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_29.QueryDenomOwnersResponse>): _29.QueryDenomOwnersResponse;
                fromAmino(object: _29.QueryDenomOwnersResponseAmino): _29.QueryDenomOwnersResponse;
                toAmino(message: _29.QueryDenomOwnersResponse): _29.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _29.QueryDenomOwnersResponseAminoMsg): _29.QueryDenomOwnersResponse;
                toAminoMsg(message: _29.QueryDenomOwnersResponse): _29.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _29.QueryDenomOwnersResponseProtoMsg): _29.QueryDenomOwnersResponse;
                toProto(message: _29.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _29.QueryDenomOwnersResponse): _29.QueryDenomOwnersResponseProtoMsg;
            };
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
            Balance: {
                typeUrl: string;
                encode(message: _28.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.Balance;
                fromPartial(object: Partial<_28.Balance>): _28.Balance;
                fromAmino(object: _28.BalanceAmino): _28.Balance;
                toAmino(message: _28.Balance): _28.BalanceAmino;
                fromAminoMsg(object: _28.BalanceAminoMsg): _28.Balance;
                toAminoMsg(message: _28.Balance): _28.BalanceAminoMsg;
                fromProtoMsg(message: _28.BalanceProtoMsg): _28.Balance;
                toProto(message: _28.Balance): Uint8Array;
                toProtoMsg(message: _28.Balance): _28.BalanceProtoMsg;
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
            SendEnabled: {
                typeUrl: string;
                encode(message: _27.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.SendEnabled;
                fromPartial(object: Partial<_27.SendEnabled>): _27.SendEnabled;
                fromAmino(object: _27.SendEnabledAmino): _27.SendEnabled;
                toAmino(message: _27.SendEnabled): _27.SendEnabledAmino;
                fromAminoMsg(object: _27.SendEnabledAminoMsg): _27.SendEnabled;
                toAminoMsg(message: _27.SendEnabled): _27.SendEnabledAminoMsg;
                fromProtoMsg(message: _27.SendEnabledProtoMsg): _27.SendEnabled;
                toProto(message: _27.SendEnabled): Uint8Array;
                toProtoMsg(message: _27.SendEnabled): _27.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _27.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.Input;
                fromPartial(object: Partial<_27.Input>): _27.Input;
                fromAmino(object: _27.InputAmino): _27.Input;
                toAmino(message: _27.Input): _27.InputAmino;
                fromAminoMsg(object: _27.InputAminoMsg): _27.Input;
                toAminoMsg(message: _27.Input): _27.InputAminoMsg;
                fromProtoMsg(message: _27.InputProtoMsg): _27.Input;
                toProto(message: _27.Input): Uint8Array;
                toProtoMsg(message: _27.Input): _27.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _27.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.Output;
                fromPartial(object: Partial<_27.Output>): _27.Output;
                fromAmino(object: _27.OutputAmino): _27.Output;
                toAmino(message: _27.Output): _27.OutputAmino;
                fromAminoMsg(object: _27.OutputAminoMsg): _27.Output;
                toAminoMsg(message: _27.Output): _27.OutputAminoMsg;
                fromProtoMsg(message: _27.OutputProtoMsg): _27.Output;
                toProto(message: _27.Output): Uint8Array;
                toProtoMsg(message: _27.Output): _27.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _27.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.Supply;
                fromPartial(object: Partial<_27.Supply>): _27.Supply;
                fromAmino(object: _27.SupplyAmino): _27.Supply;
                toAmino(message: _27.Supply): _27.SupplyAmino;
                fromAminoMsg(object: _27.SupplyAminoMsg): _27.Supply;
                toAminoMsg(message: _27.Supply): _27.SupplyAminoMsg;
                fromProtoMsg(message: _27.SupplyProtoMsg): _27.Supply;
                toProto(message: _27.Supply): Uint8Array;
                toProtoMsg(message: _27.Supply): _27.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _27.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.DenomUnit;
                fromPartial(object: Partial<_27.DenomUnit>): _27.DenomUnit;
                fromAmino(object: _27.DenomUnitAmino): _27.DenomUnit;
                toAmino(message: _27.DenomUnit): _27.DenomUnitAmino;
                fromAminoMsg(object: _27.DenomUnitAminoMsg): _27.DenomUnit;
                toAminoMsg(message: _27.DenomUnit): _27.DenomUnitAminoMsg;
                fromProtoMsg(message: _27.DenomUnitProtoMsg): _27.DenomUnit;
                toProto(message: _27.DenomUnit): Uint8Array;
                toProtoMsg(message: _27.DenomUnit): _27.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _27.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.Metadata;
                fromPartial(object: Partial<_27.Metadata>): _27.Metadata;
                fromAmino(object: _27.MetadataAmino): _27.Metadata;
                toAmino(message: _27.Metadata): _27.MetadataAmino;
                fromAminoMsg(object: _27.MetadataAminoMsg): _27.Metadata;
                toAminoMsg(message: _27.Metadata): _27.MetadataAminoMsg;
                fromProtoMsg(message: _27.MetadataProtoMsg): _27.Metadata;
                toProto(message: _27.Metadata): Uint8Array;
                toProtoMsg(message: _27.Metadata): _27.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _26.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.SendAuthorization;
                fromPartial(object: Partial<_26.SendAuthorization>): _26.SendAuthorization;
                fromAmino(object: _26.SendAuthorizationAmino): _26.SendAuthorization;
                toAmino(message: _26.SendAuthorization): _26.SendAuthorizationAmino;
                fromAminoMsg(object: _26.SendAuthorizationAminoMsg): _26.SendAuthorization;
                toAminoMsg(message: _26.SendAuthorization): _26.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _26.SendAuthorizationProtoMsg): _26.SendAuthorization;
                toProto(message: _26.SendAuthorization): Uint8Array;
                toProtoMsg(message: _26.SendAuthorization): _26.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _31.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.TxResponse;
                    fromPartial(object: Partial<_31.TxResponse>): _31.TxResponse;
                    fromAmino(object: _31.TxResponseAmino): _31.TxResponse;
                    toAmino(message: _31.TxResponse): _31.TxResponseAmino;
                    fromAminoMsg(object: _31.TxResponseAminoMsg): _31.TxResponse;
                    toAminoMsg(message: _31.TxResponse): _31.TxResponseAminoMsg;
                    fromProtoMsg(message: _31.TxResponseProtoMsg): _31.TxResponse;
                    toProto(message: _31.TxResponse): Uint8Array;
                    toProtoMsg(message: _31.TxResponse): _31.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _31.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.ABCIMessageLog;
                    fromPartial(object: Partial<_31.ABCIMessageLog>): _31.ABCIMessageLog;
                    fromAmino(object: _31.ABCIMessageLogAmino): _31.ABCIMessageLog;
                    toAmino(message: _31.ABCIMessageLog): _31.ABCIMessageLogAmino;
                    fromAminoMsg(object: _31.ABCIMessageLogAminoMsg): _31.ABCIMessageLog;
                    toAminoMsg(message: _31.ABCIMessageLog): _31.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _31.ABCIMessageLogProtoMsg): _31.ABCIMessageLog;
                    toProto(message: _31.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _31.ABCIMessageLog): _31.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _31.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.StringEvent;
                    fromPartial(object: Partial<_31.StringEvent>): _31.StringEvent;
                    fromAmino(object: _31.StringEventAmino): _31.StringEvent;
                    toAmino(message: _31.StringEvent): _31.StringEventAmino;
                    fromAminoMsg(object: _31.StringEventAminoMsg): _31.StringEvent;
                    toAminoMsg(message: _31.StringEvent): _31.StringEventAminoMsg;
                    fromProtoMsg(message: _31.StringEventProtoMsg): _31.StringEvent;
                    toProto(message: _31.StringEvent): Uint8Array;
                    toProtoMsg(message: _31.StringEvent): _31.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _31.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.Attribute;
                    fromPartial(object: Partial<_31.Attribute>): _31.Attribute;
                    fromAmino(object: _31.AttributeAmino): _31.Attribute;
                    toAmino(message: _31.Attribute): _31.AttributeAmino;
                    fromAminoMsg(object: _31.AttributeAminoMsg): _31.Attribute;
                    toAminoMsg(message: _31.Attribute): _31.AttributeAminoMsg;
                    fromProtoMsg(message: _31.AttributeProtoMsg): _31.Attribute;
                    toProto(message: _31.Attribute): Uint8Array;
                    toProtoMsg(message: _31.Attribute): _31.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _31.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.GasInfo;
                    fromPartial(object: Partial<_31.GasInfo>): _31.GasInfo;
                    fromAmino(object: _31.GasInfoAmino): _31.GasInfo;
                    toAmino(message: _31.GasInfo): _31.GasInfoAmino;
                    fromAminoMsg(object: _31.GasInfoAminoMsg): _31.GasInfo;
                    toAminoMsg(message: _31.GasInfo): _31.GasInfoAminoMsg;
                    fromProtoMsg(message: _31.GasInfoProtoMsg): _31.GasInfo;
                    toProto(message: _31.GasInfo): Uint8Array;
                    toProtoMsg(message: _31.GasInfo): _31.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _31.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.Result;
                    fromPartial(object: Partial<_31.Result>): _31.Result;
                    fromAmino(object: _31.ResultAmino): _31.Result;
                    toAmino(message: _31.Result): _31.ResultAmino;
                    fromAminoMsg(object: _31.ResultAminoMsg): _31.Result;
                    toAminoMsg(message: _31.Result): _31.ResultAminoMsg;
                    fromProtoMsg(message: _31.ResultProtoMsg): _31.Result;
                    toProto(message: _31.Result): Uint8Array;
                    toProtoMsg(message: _31.Result): _31.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _31.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.SimulationResponse;
                    fromPartial(object: Partial<_31.SimulationResponse>): _31.SimulationResponse;
                    fromAmino(object: _31.SimulationResponseAmino): _31.SimulationResponse;
                    toAmino(message: _31.SimulationResponse): _31.SimulationResponseAmino;
                    fromAminoMsg(object: _31.SimulationResponseAminoMsg): _31.SimulationResponse;
                    toAminoMsg(message: _31.SimulationResponse): _31.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _31.SimulationResponseProtoMsg): _31.SimulationResponse;
                    toProto(message: _31.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _31.SimulationResponse): _31.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _31.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.MsgData;
                    fromPartial(object: Partial<_31.MsgData>): _31.MsgData;
                    fromAmino(object: _31.MsgDataAmino): _31.MsgData;
                    toAmino(message: _31.MsgData): _31.MsgDataAmino;
                    fromAminoMsg(object: _31.MsgDataAminoMsg): _31.MsgData;
                    toAminoMsg(message: _31.MsgData): _31.MsgDataAminoMsg;
                    fromProtoMsg(message: _31.MsgDataProtoMsg): _31.MsgData;
                    toProto(message: _31.MsgData): Uint8Array;
                    toProtoMsg(message: _31.MsgData): _31.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _31.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.TxMsgData;
                    fromPartial(object: Partial<_31.TxMsgData>): _31.TxMsgData;
                    fromAmino(object: _31.TxMsgDataAmino): _31.TxMsgData;
                    toAmino(message: _31.TxMsgData): _31.TxMsgDataAmino;
                    fromAminoMsg(object: _31.TxMsgDataAminoMsg): _31.TxMsgData;
                    toAminoMsg(message: _31.TxMsgData): _31.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _31.TxMsgDataProtoMsg): _31.TxMsgData;
                    toProto(message: _31.TxMsgData): Uint8Array;
                    toProtoMsg(message: _31.TxMsgData): _31.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _31.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.SearchTxsResult;
                    fromPartial(object: Partial<_31.SearchTxsResult>): _31.SearchTxsResult;
                    fromAmino(object: _31.SearchTxsResultAmino): _31.SearchTxsResult;
                    toAmino(message: _31.SearchTxsResult): _31.SearchTxsResultAmino;
                    fromAminoMsg(object: _31.SearchTxsResultAminoMsg): _31.SearchTxsResult;
                    toAminoMsg(message: _31.SearchTxsResult): _31.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _31.SearchTxsResultProtoMsg): _31.SearchTxsResult;
                    toProto(message: _31.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _31.SearchTxsResult): _31.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _32.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.Pairs;
                    fromPartial(object: Partial<_32.Pairs>): _32.Pairs;
                    fromAmino(object: _32.PairsAmino): _32.Pairs;
                    toAmino(message: _32.Pairs): _32.PairsAmino;
                    fromAminoMsg(object: _32.PairsAminoMsg): _32.Pairs;
                    toAminoMsg(message: _32.Pairs): _32.PairsAminoMsg;
                    fromProtoMsg(message: _32.PairsProtoMsg): _32.Pairs;
                    toProto(message: _32.Pairs): Uint8Array;
                    toProtoMsg(message: _32.Pairs): _32.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _32.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.Pair;
                    fromPartial(object: Partial<_32.Pair>): _32.Pair;
                    fromAmino(object: _32.PairAmino): _32.Pair;
                    toAmino(message: _32.Pair): _32.PairAmino;
                    fromAminoMsg(object: _32.PairAminoMsg): _32.Pair;
                    toAminoMsg(message: _32.Pair): _32.PairAminoMsg;
                    fromProtoMsg(message: _32.PairProtoMsg): _32.Pair;
                    toProto(message: _32.Pair): Uint8Array;
                    toProtoMsg(message: _32.Pair): _32.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _194.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _33.ConfigRequest): Promise<_33.ConfigResponse>;
                };
                LCDQueryClient: typeof _175.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _33.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _33.ConfigRequest;
                    fromPartial(_: Partial<_33.ConfigRequest>): _33.ConfigRequest;
                    fromAmino(_: _33.ConfigRequestAmino): _33.ConfigRequest;
                    toAmino(_: _33.ConfigRequest): _33.ConfigRequestAmino;
                    fromAminoMsg(object: _33.ConfigRequestAminoMsg): _33.ConfigRequest;
                    toAminoMsg(message: _33.ConfigRequest): _33.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _33.ConfigRequestProtoMsg): _33.ConfigRequest;
                    toProto(message: _33.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _33.ConfigRequest): _33.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _33.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.ConfigResponse;
                    fromPartial(object: Partial<_33.ConfigResponse>): _33.ConfigResponse;
                    fromAmino(object: _33.ConfigResponseAmino): _33.ConfigResponse;
                    toAmino(message: _33.ConfigResponse): _33.ConfigResponseAmino;
                    fromAminoMsg(object: _33.ConfigResponseAminoMsg): _33.ConfigResponse;
                    toAminoMsg(message: _33.ConfigResponse): _33.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _33.ConfigResponseProtoMsg): _33.ConfigResponse;
                    toProto(message: _33.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _33.ConfigResponse): _33.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _34.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.PageRequest;
                    fromPartial(object: Partial<_34.PageRequest>): _34.PageRequest;
                    fromAmino(object: _34.PageRequestAmino): _34.PageRequest;
                    toAmino(message: _34.PageRequest): _34.PageRequestAmino;
                    fromAminoMsg(object: _34.PageRequestAminoMsg): _34.PageRequest;
                    toAminoMsg(message: _34.PageRequest): _34.PageRequestAminoMsg;
                    fromProtoMsg(message: _34.PageRequestProtoMsg): _34.PageRequest;
                    toProto(message: _34.PageRequest): Uint8Array;
                    toProtoMsg(message: _34.PageRequest): _34.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _34.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.PageResponse;
                    fromPartial(object: Partial<_34.PageResponse>): _34.PageResponse;
                    fromAmino(object: _34.PageResponseAmino): _34.PageResponse;
                    toAmino(message: _34.PageResponse): _34.PageResponseAmino;
                    fromAminoMsg(object: _34.PageResponseAminoMsg): _34.PageResponse;
                    toAminoMsg(message: _34.PageResponse): _34.PageResponseAminoMsg;
                    fromProtoMsg(message: _34.PageResponseProtoMsg): _34.PageResponse;
                    toProto(message: _34.PageResponse): Uint8Array;
                    toProtoMsg(message: _34.PageResponse): _34.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _35.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _35.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_35.ListAllInterfacesRequest>): _35.ListAllInterfacesRequest;
                    fromAmino(_: _35.ListAllInterfacesRequestAmino): _35.ListAllInterfacesRequest;
                    toAmino(_: _35.ListAllInterfacesRequest): _35.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _35.ListAllInterfacesRequestAminoMsg): _35.ListAllInterfacesRequest;
                    toAminoMsg(message: _35.ListAllInterfacesRequest): _35.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _35.ListAllInterfacesRequestProtoMsg): _35.ListAllInterfacesRequest;
                    toProto(message: _35.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _35.ListAllInterfacesRequest): _35.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _35.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_35.ListAllInterfacesResponse>): _35.ListAllInterfacesResponse;
                    fromAmino(object: _35.ListAllInterfacesResponseAmino): _35.ListAllInterfacesResponse;
                    toAmino(message: _35.ListAllInterfacesResponse): _35.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _35.ListAllInterfacesResponseAminoMsg): _35.ListAllInterfacesResponse;
                    toAminoMsg(message: _35.ListAllInterfacesResponse): _35.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _35.ListAllInterfacesResponseProtoMsg): _35.ListAllInterfacesResponse;
                    toProto(message: _35.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _35.ListAllInterfacesResponse): _35.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _35.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.ListImplementationsRequest;
                    fromPartial(object: Partial<_35.ListImplementationsRequest>): _35.ListImplementationsRequest;
                    fromAmino(object: _35.ListImplementationsRequestAmino): _35.ListImplementationsRequest;
                    toAmino(message: _35.ListImplementationsRequest): _35.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _35.ListImplementationsRequestAminoMsg): _35.ListImplementationsRequest;
                    toAminoMsg(message: _35.ListImplementationsRequest): _35.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _35.ListImplementationsRequestProtoMsg): _35.ListImplementationsRequest;
                    toProto(message: _35.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _35.ListImplementationsRequest): _35.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _35.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.ListImplementationsResponse;
                    fromPartial(object: Partial<_35.ListImplementationsResponse>): _35.ListImplementationsResponse;
                    fromAmino(object: _35.ListImplementationsResponseAmino): _35.ListImplementationsResponse;
                    toAmino(message: _35.ListImplementationsResponse): _35.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _35.ListImplementationsResponseAminoMsg): _35.ListImplementationsResponse;
                    toAminoMsg(message: _35.ListImplementationsResponse): _35.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _35.ListImplementationsResponseProtoMsg): _35.ListImplementationsResponse;
                    toProto(message: _35.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _35.ListImplementationsResponse): _35.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _36.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.AppDescriptor;
                    fromPartial(object: Partial<_36.AppDescriptor>): _36.AppDescriptor;
                    fromAmino(object: _36.AppDescriptorAmino): _36.AppDescriptor;
                    toAmino(message: _36.AppDescriptor): _36.AppDescriptorAmino;
                    fromAminoMsg(object: _36.AppDescriptorAminoMsg): _36.AppDescriptor;
                    toAminoMsg(message: _36.AppDescriptor): _36.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _36.AppDescriptorProtoMsg): _36.AppDescriptor;
                    toProto(message: _36.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _36.AppDescriptor): _36.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _36.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.TxDescriptor;
                    fromPartial(object: Partial<_36.TxDescriptor>): _36.TxDescriptor;
                    fromAmino(object: _36.TxDescriptorAmino): _36.TxDescriptor;
                    toAmino(message: _36.TxDescriptor): _36.TxDescriptorAmino;
                    fromAminoMsg(object: _36.TxDescriptorAminoMsg): _36.TxDescriptor;
                    toAminoMsg(message: _36.TxDescriptor): _36.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _36.TxDescriptorProtoMsg): _36.TxDescriptor;
                    toProto(message: _36.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _36.TxDescriptor): _36.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _36.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.AuthnDescriptor;
                    fromPartial(object: Partial<_36.AuthnDescriptor>): _36.AuthnDescriptor;
                    fromAmino(object: _36.AuthnDescriptorAmino): _36.AuthnDescriptor;
                    toAmino(message: _36.AuthnDescriptor): _36.AuthnDescriptorAmino;
                    fromAminoMsg(object: _36.AuthnDescriptorAminoMsg): _36.AuthnDescriptor;
                    toAminoMsg(message: _36.AuthnDescriptor): _36.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _36.AuthnDescriptorProtoMsg): _36.AuthnDescriptor;
                    toProto(message: _36.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _36.AuthnDescriptor): _36.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _36.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.SigningModeDescriptor;
                    fromPartial(object: Partial<_36.SigningModeDescriptor>): _36.SigningModeDescriptor;
                    fromAmino(object: _36.SigningModeDescriptorAmino): _36.SigningModeDescriptor;
                    toAmino(message: _36.SigningModeDescriptor): _36.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _36.SigningModeDescriptorAminoMsg): _36.SigningModeDescriptor;
                    toAminoMsg(message: _36.SigningModeDescriptor): _36.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _36.SigningModeDescriptorProtoMsg): _36.SigningModeDescriptor;
                    toProto(message: _36.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _36.SigningModeDescriptor): _36.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _36.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.ChainDescriptor;
                    fromPartial(object: Partial<_36.ChainDescriptor>): _36.ChainDescriptor;
                    fromAmino(object: _36.ChainDescriptorAmino): _36.ChainDescriptor;
                    toAmino(message: _36.ChainDescriptor): _36.ChainDescriptorAmino;
                    fromAminoMsg(object: _36.ChainDescriptorAminoMsg): _36.ChainDescriptor;
                    toAminoMsg(message: _36.ChainDescriptor): _36.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _36.ChainDescriptorProtoMsg): _36.ChainDescriptor;
                    toProto(message: _36.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _36.ChainDescriptor): _36.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _36.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.CodecDescriptor;
                    fromPartial(object: Partial<_36.CodecDescriptor>): _36.CodecDescriptor;
                    fromAmino(object: _36.CodecDescriptorAmino): _36.CodecDescriptor;
                    toAmino(message: _36.CodecDescriptor): _36.CodecDescriptorAmino;
                    fromAminoMsg(object: _36.CodecDescriptorAminoMsg): _36.CodecDescriptor;
                    toAminoMsg(message: _36.CodecDescriptor): _36.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _36.CodecDescriptorProtoMsg): _36.CodecDescriptor;
                    toProto(message: _36.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _36.CodecDescriptor): _36.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _36.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.InterfaceDescriptor;
                    fromPartial(object: Partial<_36.InterfaceDescriptor>): _36.InterfaceDescriptor;
                    fromAmino(object: _36.InterfaceDescriptorAmino): _36.InterfaceDescriptor;
                    toAmino(message: _36.InterfaceDescriptor): _36.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _36.InterfaceDescriptorAminoMsg): _36.InterfaceDescriptor;
                    toAminoMsg(message: _36.InterfaceDescriptor): _36.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _36.InterfaceDescriptorProtoMsg): _36.InterfaceDescriptor;
                    toProto(message: _36.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _36.InterfaceDescriptor): _36.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _36.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_36.InterfaceImplementerDescriptor>): _36.InterfaceImplementerDescriptor;
                    fromAmino(object: _36.InterfaceImplementerDescriptorAmino): _36.InterfaceImplementerDescriptor;
                    toAmino(message: _36.InterfaceImplementerDescriptor): _36.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _36.InterfaceImplementerDescriptorAminoMsg): _36.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _36.InterfaceImplementerDescriptor): _36.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _36.InterfaceImplementerDescriptorProtoMsg): _36.InterfaceImplementerDescriptor;
                    toProto(message: _36.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _36.InterfaceImplementerDescriptor): _36.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _36.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_36.InterfaceAcceptingMessageDescriptor>): _36.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _36.InterfaceAcceptingMessageDescriptorAmino): _36.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _36.InterfaceAcceptingMessageDescriptor): _36.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _36.InterfaceAcceptingMessageDescriptorAminoMsg): _36.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _36.InterfaceAcceptingMessageDescriptor): _36.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _36.InterfaceAcceptingMessageDescriptorProtoMsg): _36.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _36.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _36.InterfaceAcceptingMessageDescriptor): _36.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _36.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.ConfigurationDescriptor;
                    fromPartial(object: Partial<_36.ConfigurationDescriptor>): _36.ConfigurationDescriptor;
                    fromAmino(object: _36.ConfigurationDescriptorAmino): _36.ConfigurationDescriptor;
                    toAmino(message: _36.ConfigurationDescriptor): _36.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _36.ConfigurationDescriptorAminoMsg): _36.ConfigurationDescriptor;
                    toAminoMsg(message: _36.ConfigurationDescriptor): _36.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _36.ConfigurationDescriptorProtoMsg): _36.ConfigurationDescriptor;
                    toProto(message: _36.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _36.ConfigurationDescriptor): _36.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _36.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.MsgDescriptor;
                    fromPartial(object: Partial<_36.MsgDescriptor>): _36.MsgDescriptor;
                    fromAmino(object: _36.MsgDescriptorAmino): _36.MsgDescriptor;
                    toAmino(message: _36.MsgDescriptor): _36.MsgDescriptorAmino;
                    fromAminoMsg(object: _36.MsgDescriptorAminoMsg): _36.MsgDescriptor;
                    toAminoMsg(message: _36.MsgDescriptor): _36.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _36.MsgDescriptorProtoMsg): _36.MsgDescriptor;
                    toProto(message: _36.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _36.MsgDescriptor): _36.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _36.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _36.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_36.GetAuthnDescriptorRequest>): _36.GetAuthnDescriptorRequest;
                    fromAmino(_: _36.GetAuthnDescriptorRequestAmino): _36.GetAuthnDescriptorRequest;
                    toAmino(_: _36.GetAuthnDescriptorRequest): _36.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _36.GetAuthnDescriptorRequestAminoMsg): _36.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _36.GetAuthnDescriptorRequest): _36.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _36.GetAuthnDescriptorRequestProtoMsg): _36.GetAuthnDescriptorRequest;
                    toProto(message: _36.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _36.GetAuthnDescriptorRequest): _36.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _36.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_36.GetAuthnDescriptorResponse>): _36.GetAuthnDescriptorResponse;
                    fromAmino(object: _36.GetAuthnDescriptorResponseAmino): _36.GetAuthnDescriptorResponse;
                    toAmino(message: _36.GetAuthnDescriptorResponse): _36.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _36.GetAuthnDescriptorResponseAminoMsg): _36.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _36.GetAuthnDescriptorResponse): _36.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _36.GetAuthnDescriptorResponseProtoMsg): _36.GetAuthnDescriptorResponse;
                    toProto(message: _36.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _36.GetAuthnDescriptorResponse): _36.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _36.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _36.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_36.GetChainDescriptorRequest>): _36.GetChainDescriptorRequest;
                    fromAmino(_: _36.GetChainDescriptorRequestAmino): _36.GetChainDescriptorRequest;
                    toAmino(_: _36.GetChainDescriptorRequest): _36.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _36.GetChainDescriptorRequestAminoMsg): _36.GetChainDescriptorRequest;
                    toAminoMsg(message: _36.GetChainDescriptorRequest): _36.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _36.GetChainDescriptorRequestProtoMsg): _36.GetChainDescriptorRequest;
                    toProto(message: _36.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _36.GetChainDescriptorRequest): _36.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _36.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_36.GetChainDescriptorResponse>): _36.GetChainDescriptorResponse;
                    fromAmino(object: _36.GetChainDescriptorResponseAmino): _36.GetChainDescriptorResponse;
                    toAmino(message: _36.GetChainDescriptorResponse): _36.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _36.GetChainDescriptorResponseAminoMsg): _36.GetChainDescriptorResponse;
                    toAminoMsg(message: _36.GetChainDescriptorResponse): _36.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _36.GetChainDescriptorResponseProtoMsg): _36.GetChainDescriptorResponse;
                    toProto(message: _36.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _36.GetChainDescriptorResponse): _36.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _36.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _36.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_36.GetCodecDescriptorRequest>): _36.GetCodecDescriptorRequest;
                    fromAmino(_: _36.GetCodecDescriptorRequestAmino): _36.GetCodecDescriptorRequest;
                    toAmino(_: _36.GetCodecDescriptorRequest): _36.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _36.GetCodecDescriptorRequestAminoMsg): _36.GetCodecDescriptorRequest;
                    toAminoMsg(message: _36.GetCodecDescriptorRequest): _36.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _36.GetCodecDescriptorRequestProtoMsg): _36.GetCodecDescriptorRequest;
                    toProto(message: _36.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _36.GetCodecDescriptorRequest): _36.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _36.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_36.GetCodecDescriptorResponse>): _36.GetCodecDescriptorResponse;
                    fromAmino(object: _36.GetCodecDescriptorResponseAmino): _36.GetCodecDescriptorResponse;
                    toAmino(message: _36.GetCodecDescriptorResponse): _36.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _36.GetCodecDescriptorResponseAminoMsg): _36.GetCodecDescriptorResponse;
                    toAminoMsg(message: _36.GetCodecDescriptorResponse): _36.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _36.GetCodecDescriptorResponseProtoMsg): _36.GetCodecDescriptorResponse;
                    toProto(message: _36.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _36.GetCodecDescriptorResponse): _36.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _36.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _36.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_36.GetConfigurationDescriptorRequest>): _36.GetConfigurationDescriptorRequest;
                    fromAmino(_: _36.GetConfigurationDescriptorRequestAmino): _36.GetConfigurationDescriptorRequest;
                    toAmino(_: _36.GetConfigurationDescriptorRequest): _36.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _36.GetConfigurationDescriptorRequestAminoMsg): _36.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _36.GetConfigurationDescriptorRequest): _36.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _36.GetConfigurationDescriptorRequestProtoMsg): _36.GetConfigurationDescriptorRequest;
                    toProto(message: _36.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _36.GetConfigurationDescriptorRequest): _36.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _36.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_36.GetConfigurationDescriptorResponse>): _36.GetConfigurationDescriptorResponse;
                    fromAmino(object: _36.GetConfigurationDescriptorResponseAmino): _36.GetConfigurationDescriptorResponse;
                    toAmino(message: _36.GetConfigurationDescriptorResponse): _36.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _36.GetConfigurationDescriptorResponseAminoMsg): _36.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _36.GetConfigurationDescriptorResponse): _36.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _36.GetConfigurationDescriptorResponseProtoMsg): _36.GetConfigurationDescriptorResponse;
                    toProto(message: _36.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _36.GetConfigurationDescriptorResponse): _36.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _36.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _36.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_36.GetQueryServicesDescriptorRequest>): _36.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _36.GetQueryServicesDescriptorRequestAmino): _36.GetQueryServicesDescriptorRequest;
                    toAmino(_: _36.GetQueryServicesDescriptorRequest): _36.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _36.GetQueryServicesDescriptorRequestAminoMsg): _36.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _36.GetQueryServicesDescriptorRequest): _36.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _36.GetQueryServicesDescriptorRequestProtoMsg): _36.GetQueryServicesDescriptorRequest;
                    toProto(message: _36.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _36.GetQueryServicesDescriptorRequest): _36.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _36.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_36.GetQueryServicesDescriptorResponse>): _36.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _36.GetQueryServicesDescriptorResponseAmino): _36.GetQueryServicesDescriptorResponse;
                    toAmino(message: _36.GetQueryServicesDescriptorResponse): _36.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _36.GetQueryServicesDescriptorResponseAminoMsg): _36.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _36.GetQueryServicesDescriptorResponse): _36.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _36.GetQueryServicesDescriptorResponseProtoMsg): _36.GetQueryServicesDescriptorResponse;
                    toProto(message: _36.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _36.GetQueryServicesDescriptorResponse): _36.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _36.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _36.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_36.GetTxDescriptorRequest>): _36.GetTxDescriptorRequest;
                    fromAmino(_: _36.GetTxDescriptorRequestAmino): _36.GetTxDescriptorRequest;
                    toAmino(_: _36.GetTxDescriptorRequest): _36.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _36.GetTxDescriptorRequestAminoMsg): _36.GetTxDescriptorRequest;
                    toAminoMsg(message: _36.GetTxDescriptorRequest): _36.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _36.GetTxDescriptorRequestProtoMsg): _36.GetTxDescriptorRequest;
                    toProto(message: _36.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _36.GetTxDescriptorRequest): _36.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _36.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_36.GetTxDescriptorResponse>): _36.GetTxDescriptorResponse;
                    fromAmino(object: _36.GetTxDescriptorResponseAmino): _36.GetTxDescriptorResponse;
                    toAmino(message: _36.GetTxDescriptorResponse): _36.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _36.GetTxDescriptorResponseAminoMsg): _36.GetTxDescriptorResponse;
                    toAminoMsg(message: _36.GetTxDescriptorResponse): _36.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _36.GetTxDescriptorResponseProtoMsg): _36.GetTxDescriptorResponse;
                    toProto(message: _36.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _36.GetTxDescriptorResponse): _36.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _36.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.QueryServicesDescriptor;
                    fromPartial(object: Partial<_36.QueryServicesDescriptor>): _36.QueryServicesDescriptor;
                    fromAmino(object: _36.QueryServicesDescriptorAmino): _36.QueryServicesDescriptor;
                    toAmino(message: _36.QueryServicesDescriptor): _36.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _36.QueryServicesDescriptorAminoMsg): _36.QueryServicesDescriptor;
                    toAminoMsg(message: _36.QueryServicesDescriptor): _36.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _36.QueryServicesDescriptorProtoMsg): _36.QueryServicesDescriptor;
                    toProto(message: _36.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _36.QueryServicesDescriptor): _36.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _36.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.QueryServiceDescriptor;
                    fromPartial(object: Partial<_36.QueryServiceDescriptor>): _36.QueryServiceDescriptor;
                    fromAmino(object: _36.QueryServiceDescriptorAmino): _36.QueryServiceDescriptor;
                    toAmino(message: _36.QueryServiceDescriptor): _36.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _36.QueryServiceDescriptorAminoMsg): _36.QueryServiceDescriptor;
                    toAminoMsg(message: _36.QueryServiceDescriptor): _36.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _36.QueryServiceDescriptorProtoMsg): _36.QueryServiceDescriptor;
                    toProto(message: _36.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _36.QueryServiceDescriptor): _36.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _36.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.QueryMethodDescriptor;
                    fromPartial(object: Partial<_36.QueryMethodDescriptor>): _36.QueryMethodDescriptor;
                    fromAmino(object: _36.QueryMethodDescriptorAmino): _36.QueryMethodDescriptor;
                    toAmino(message: _36.QueryMethodDescriptor): _36.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _36.QueryMethodDescriptorAminoMsg): _36.QueryMethodDescriptor;
                    toAminoMsg(message: _36.QueryMethodDescriptor): _36.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _36.QueryMethodDescriptorProtoMsg): _36.QueryMethodDescriptor;
                    toProto(message: _36.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _36.QueryMethodDescriptor): _36.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _37.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.Snapshot;
                    fromPartial(object: Partial<_37.Snapshot>): _37.Snapshot;
                    fromAmino(object: _37.SnapshotAmino): _37.Snapshot;
                    toAmino(message: _37.Snapshot): _37.SnapshotAmino;
                    fromAminoMsg(object: _37.SnapshotAminoMsg): _37.Snapshot;
                    toAminoMsg(message: _37.Snapshot): _37.SnapshotAminoMsg;
                    fromProtoMsg(message: _37.SnapshotProtoMsg): _37.Snapshot;
                    toProto(message: _37.Snapshot): Uint8Array;
                    toProtoMsg(message: _37.Snapshot): _37.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _37.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.Metadata;
                    fromPartial(object: Partial<_37.Metadata>): _37.Metadata;
                    fromAmino(object: _37.MetadataAmino): _37.Metadata;
                    toAmino(message: _37.Metadata): _37.MetadataAmino;
                    fromAminoMsg(object: _37.MetadataAminoMsg): _37.Metadata;
                    toAminoMsg(message: _37.Metadata): _37.MetadataAminoMsg;
                    fromProtoMsg(message: _37.MetadataProtoMsg): _37.Metadata;
                    toProto(message: _37.Metadata): Uint8Array;
                    toProtoMsg(message: _37.Metadata): _37.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _37.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.SnapshotItem;
                    fromPartial(object: Partial<_37.SnapshotItem>): _37.SnapshotItem;
                    fromAmino(object: _37.SnapshotItemAmino): _37.SnapshotItem;
                    toAmino(message: _37.SnapshotItem): _37.SnapshotItemAmino;
                    fromAminoMsg(object: _37.SnapshotItemAminoMsg): _37.SnapshotItem;
                    toAminoMsg(message: _37.SnapshotItem): _37.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _37.SnapshotItemProtoMsg): _37.SnapshotItem;
                    toProto(message: _37.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _37.SnapshotItem): _37.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _37.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.SnapshotStoreItem;
                    fromPartial(object: Partial<_37.SnapshotStoreItem>): _37.SnapshotStoreItem;
                    fromAmino(object: _37.SnapshotStoreItemAmino): _37.SnapshotStoreItem;
                    toAmino(message: _37.SnapshotStoreItem): _37.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _37.SnapshotStoreItemAminoMsg): _37.SnapshotStoreItem;
                    toAminoMsg(message: _37.SnapshotStoreItem): _37.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _37.SnapshotStoreItemProtoMsg): _37.SnapshotStoreItem;
                    toProto(message: _37.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _37.SnapshotStoreItem): _37.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _37.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.SnapshotIAVLItem;
                    fromPartial(object: Partial<_37.SnapshotIAVLItem>): _37.SnapshotIAVLItem;
                    fromAmino(object: _37.SnapshotIAVLItemAmino): _37.SnapshotIAVLItem;
                    toAmino(message: _37.SnapshotIAVLItem): _37.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _37.SnapshotIAVLItemAminoMsg): _37.SnapshotIAVLItem;
                    toAminoMsg(message: _37.SnapshotIAVLItem): _37.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _37.SnapshotIAVLItemProtoMsg): _37.SnapshotIAVLItem;
                    toProto(message: _37.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _37.SnapshotIAVLItem): _37.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _37.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_37.SnapshotExtensionMeta>): _37.SnapshotExtensionMeta;
                    fromAmino(object: _37.SnapshotExtensionMetaAmino): _37.SnapshotExtensionMeta;
                    toAmino(message: _37.SnapshotExtensionMeta): _37.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _37.SnapshotExtensionMetaAminoMsg): _37.SnapshotExtensionMeta;
                    toAminoMsg(message: _37.SnapshotExtensionMeta): _37.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _37.SnapshotExtensionMetaProtoMsg): _37.SnapshotExtensionMeta;
                    toProto(message: _37.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _37.SnapshotExtensionMeta): _37.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _37.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_37.SnapshotExtensionPayload>): _37.SnapshotExtensionPayload;
                    fromAmino(object: _37.SnapshotExtensionPayloadAmino): _37.SnapshotExtensionPayload;
                    toAmino(message: _37.SnapshotExtensionPayload): _37.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _37.SnapshotExtensionPayloadAminoMsg): _37.SnapshotExtensionPayload;
                    toAminoMsg(message: _37.SnapshotExtensionPayload): _37.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _37.SnapshotExtensionPayloadProtoMsg): _37.SnapshotExtensionPayload;
                    toProto(message: _37.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _37.SnapshotExtensionPayload): _37.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _37.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.SnapshotKVItem;
                    fromPartial(object: Partial<_37.SnapshotKVItem>): _37.SnapshotKVItem;
                    fromAmino(object: _37.SnapshotKVItemAmino): _37.SnapshotKVItem;
                    toAmino(message: _37.SnapshotKVItem): _37.SnapshotKVItemAmino;
                    fromAminoMsg(object: _37.SnapshotKVItemAminoMsg): _37.SnapshotKVItem;
                    toAminoMsg(message: _37.SnapshotKVItem): _37.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _37.SnapshotKVItemProtoMsg): _37.SnapshotKVItem;
                    toProto(message: _37.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _37.SnapshotKVItem): _37.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _37.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.SnapshotSchema;
                    fromPartial(object: Partial<_37.SnapshotSchema>): _37.SnapshotSchema;
                    fromAmino(object: _37.SnapshotSchemaAmino): _37.SnapshotSchema;
                    toAmino(message: _37.SnapshotSchema): _37.SnapshotSchemaAmino;
                    fromAminoMsg(object: _37.SnapshotSchemaAminoMsg): _37.SnapshotSchema;
                    toAminoMsg(message: _37.SnapshotSchema): _37.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _37.SnapshotSchemaProtoMsg): _37.SnapshotSchema;
                    toProto(message: _37.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _37.SnapshotSchema): _37.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _39.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.StoreKVPair;
                    fromPartial(object: Partial<_39.StoreKVPair>): _39.StoreKVPair;
                    fromAmino(object: _39.StoreKVPairAmino): _39.StoreKVPair;
                    toAmino(message: _39.StoreKVPair): _39.StoreKVPairAmino;
                    fromAminoMsg(object: _39.StoreKVPairAminoMsg): _39.StoreKVPair;
                    toAminoMsg(message: _39.StoreKVPair): _39.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _39.StoreKVPairProtoMsg): _39.StoreKVPair;
                    toProto(message: _39.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _39.StoreKVPair): _39.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _39.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.BlockMetadata;
                    fromPartial(object: Partial<_39.BlockMetadata>): _39.BlockMetadata;
                    fromAmino(object: _39.BlockMetadataAmino): _39.BlockMetadata;
                    toAmino(message: _39.BlockMetadata): _39.BlockMetadataAmino;
                    fromAminoMsg(object: _39.BlockMetadataAminoMsg): _39.BlockMetadata;
                    toAminoMsg(message: _39.BlockMetadata): _39.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _39.BlockMetadataProtoMsg): _39.BlockMetadata;
                    toProto(message: _39.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _39.BlockMetadata): _39.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _39.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_39.BlockMetadata_DeliverTx>): _39.BlockMetadata_DeliverTx;
                    fromAmino(object: _39.BlockMetadata_DeliverTxAmino): _39.BlockMetadata_DeliverTx;
                    toAmino(message: _39.BlockMetadata_DeliverTx): _39.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _39.BlockMetadata_DeliverTxAminoMsg): _39.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _39.BlockMetadata_DeliverTx): _39.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _39.BlockMetadata_DeliverTxProtoMsg): _39.BlockMetadata_DeliverTx;
                    toProto(message: _39.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _39.BlockMetadata_DeliverTx): _39.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _38.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.CommitInfo;
                    fromPartial(object: Partial<_38.CommitInfo>): _38.CommitInfo;
                    fromAmino(object: _38.CommitInfoAmino): _38.CommitInfo;
                    toAmino(message: _38.CommitInfo): _38.CommitInfoAmino;
                    fromAminoMsg(object: _38.CommitInfoAminoMsg): _38.CommitInfo;
                    toAminoMsg(message: _38.CommitInfo): _38.CommitInfoAminoMsg;
                    fromProtoMsg(message: _38.CommitInfoProtoMsg): _38.CommitInfo;
                    toProto(message: _38.CommitInfo): Uint8Array;
                    toProtoMsg(message: _38.CommitInfo): _38.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _38.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.StoreInfo;
                    fromPartial(object: Partial<_38.StoreInfo>): _38.StoreInfo;
                    fromAmino(object: _38.StoreInfoAmino): _38.StoreInfo;
                    toAmino(message: _38.StoreInfo): _38.StoreInfoAmino;
                    fromAminoMsg(object: _38.StoreInfoAminoMsg): _38.StoreInfo;
                    toAminoMsg(message: _38.StoreInfo): _38.StoreInfoAminoMsg;
                    fromProtoMsg(message: _38.StoreInfoProtoMsg): _38.StoreInfo;
                    toProto(message: _38.StoreInfo): Uint8Array;
                    toProtoMsg(message: _38.StoreInfo): _38.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _38.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.CommitID;
                    fromPartial(object: Partial<_38.CommitID>): _38.CommitID;
                    fromAmino(object: _38.CommitIDAmino): _38.CommitID;
                    toAmino(message: _38.CommitID): _38.CommitIDAmino;
                    fromAminoMsg(object: _38.CommitIDAminoMsg): _38.CommitID;
                    toAminoMsg(message: _38.CommitID): _38.CommitIDAminoMsg;
                    fromProtoMsg(message: _38.CommitIDProtoMsg): _38.CommitID;
                    toProto(message: _38.CommitID): Uint8Array;
                    toProtoMsg(message: _38.CommitID): _38.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _195.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _40.GetNodeInfoRequest): Promise<_40.GetNodeInfoResponse>;
                    getSyncing(request?: _40.GetSyncingRequest): Promise<_40.GetSyncingResponse>;
                    getLatestBlock(request?: _40.GetLatestBlockRequest): Promise<_40.GetLatestBlockResponse>;
                    getBlockByHeight(request: _40.GetBlockByHeightRequest): Promise<_40.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _40.GetLatestValidatorSetRequest): Promise<_40.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _40.GetValidatorSetByHeightRequest): Promise<_40.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _40.ABCIQueryRequest): Promise<_40.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _176.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _41.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.Block;
                    fromPartial(object: Partial<_41.Block>): _41.Block;
                    fromAmino(object: _41.BlockAmino): _41.Block;
                    toAmino(message: _41.Block): _41.BlockAmino;
                    fromAminoMsg(object: _41.BlockAminoMsg): _41.Block;
                    toAminoMsg(message: _41.Block): _41.BlockAminoMsg;
                    fromProtoMsg(message: _41.BlockProtoMsg): _41.Block;
                    toProto(message: _41.Block): Uint8Array;
                    toProtoMsg(message: _41.Block): _41.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _41.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.Header;
                    fromPartial(object: Partial<_41.Header>): _41.Header;
                    fromAmino(object: _41.HeaderAmino): _41.Header;
                    toAmino(message: _41.Header): _41.HeaderAmino;
                    fromAminoMsg(object: _41.HeaderAminoMsg): _41.Header;
                    toAminoMsg(message: _41.Header): _41.HeaderAminoMsg;
                    fromProtoMsg(message: _41.HeaderProtoMsg): _41.Header;
                    toProto(message: _41.Header): Uint8Array;
                    toProtoMsg(message: _41.Header): _41.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _40.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_40.GetValidatorSetByHeightRequest>): _40.GetValidatorSetByHeightRequest;
                    fromAmino(object: _40.GetValidatorSetByHeightRequestAmino): _40.GetValidatorSetByHeightRequest;
                    toAmino(message: _40.GetValidatorSetByHeightRequest): _40.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _40.GetValidatorSetByHeightRequestAminoMsg): _40.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _40.GetValidatorSetByHeightRequest): _40.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _40.GetValidatorSetByHeightRequestProtoMsg): _40.GetValidatorSetByHeightRequest;
                    toProto(message: _40.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _40.GetValidatorSetByHeightRequest): _40.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _40.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_40.GetValidatorSetByHeightResponse>): _40.GetValidatorSetByHeightResponse;
                    fromAmino(object: _40.GetValidatorSetByHeightResponseAmino): _40.GetValidatorSetByHeightResponse;
                    toAmino(message: _40.GetValidatorSetByHeightResponse): _40.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _40.GetValidatorSetByHeightResponseAminoMsg): _40.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _40.GetValidatorSetByHeightResponse): _40.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _40.GetValidatorSetByHeightResponseProtoMsg): _40.GetValidatorSetByHeightResponse;
                    toProto(message: _40.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _40.GetValidatorSetByHeightResponse): _40.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _40.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_40.GetLatestValidatorSetRequest>): _40.GetLatestValidatorSetRequest;
                    fromAmino(object: _40.GetLatestValidatorSetRequestAmino): _40.GetLatestValidatorSetRequest;
                    toAmino(message: _40.GetLatestValidatorSetRequest): _40.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _40.GetLatestValidatorSetRequestAminoMsg): _40.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _40.GetLatestValidatorSetRequest): _40.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _40.GetLatestValidatorSetRequestProtoMsg): _40.GetLatestValidatorSetRequest;
                    toProto(message: _40.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _40.GetLatestValidatorSetRequest): _40.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _40.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_40.GetLatestValidatorSetResponse>): _40.GetLatestValidatorSetResponse;
                    fromAmino(object: _40.GetLatestValidatorSetResponseAmino): _40.GetLatestValidatorSetResponse;
                    toAmino(message: _40.GetLatestValidatorSetResponse): _40.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _40.GetLatestValidatorSetResponseAminoMsg): _40.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _40.GetLatestValidatorSetResponse): _40.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _40.GetLatestValidatorSetResponseProtoMsg): _40.GetLatestValidatorSetResponse;
                    toProto(message: _40.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _40.GetLatestValidatorSetResponse): _40.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _40.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.Validator;
                    fromPartial(object: Partial<_40.Validator>): _40.Validator;
                    fromAmino(object: _40.ValidatorAmino): _40.Validator;
                    toAmino(message: _40.Validator): _40.ValidatorAmino;
                    fromAminoMsg(object: _40.ValidatorAminoMsg): _40.Validator;
                    toAminoMsg(message: _40.Validator): _40.ValidatorAminoMsg;
                    fromProtoMsg(message: _40.ValidatorProtoMsg): _40.Validator;
                    toProto(message: _40.Validator): Uint8Array;
                    toProtoMsg(message: _40.Validator): _40.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _40.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_40.GetBlockByHeightRequest>): _40.GetBlockByHeightRequest;
                    fromAmino(object: _40.GetBlockByHeightRequestAmino): _40.GetBlockByHeightRequest;
                    toAmino(message: _40.GetBlockByHeightRequest): _40.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _40.GetBlockByHeightRequestAminoMsg): _40.GetBlockByHeightRequest;
                    toAminoMsg(message: _40.GetBlockByHeightRequest): _40.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _40.GetBlockByHeightRequestProtoMsg): _40.GetBlockByHeightRequest;
                    toProto(message: _40.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _40.GetBlockByHeightRequest): _40.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _40.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_40.GetBlockByHeightResponse>): _40.GetBlockByHeightResponse;
                    fromAmino(object: _40.GetBlockByHeightResponseAmino): _40.GetBlockByHeightResponse;
                    toAmino(message: _40.GetBlockByHeightResponse): _40.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _40.GetBlockByHeightResponseAminoMsg): _40.GetBlockByHeightResponse;
                    toAminoMsg(message: _40.GetBlockByHeightResponse): _40.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _40.GetBlockByHeightResponseProtoMsg): _40.GetBlockByHeightResponse;
                    toProto(message: _40.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _40.GetBlockByHeightResponse): _40.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _40.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _40.GetLatestBlockRequest;
                    fromPartial(_: Partial<_40.GetLatestBlockRequest>): _40.GetLatestBlockRequest;
                    fromAmino(_: _40.GetLatestBlockRequestAmino): _40.GetLatestBlockRequest;
                    toAmino(_: _40.GetLatestBlockRequest): _40.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _40.GetLatestBlockRequestAminoMsg): _40.GetLatestBlockRequest;
                    toAminoMsg(message: _40.GetLatestBlockRequest): _40.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _40.GetLatestBlockRequestProtoMsg): _40.GetLatestBlockRequest;
                    toProto(message: _40.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _40.GetLatestBlockRequest): _40.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _40.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.GetLatestBlockResponse;
                    fromPartial(object: Partial<_40.GetLatestBlockResponse>): _40.GetLatestBlockResponse;
                    fromAmino(object: _40.GetLatestBlockResponseAmino): _40.GetLatestBlockResponse;
                    toAmino(message: _40.GetLatestBlockResponse): _40.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _40.GetLatestBlockResponseAminoMsg): _40.GetLatestBlockResponse;
                    toAminoMsg(message: _40.GetLatestBlockResponse): _40.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _40.GetLatestBlockResponseProtoMsg): _40.GetLatestBlockResponse;
                    toProto(message: _40.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _40.GetLatestBlockResponse): _40.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _40.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _40.GetSyncingRequest;
                    fromPartial(_: Partial<_40.GetSyncingRequest>): _40.GetSyncingRequest;
                    fromAmino(_: _40.GetSyncingRequestAmino): _40.GetSyncingRequest;
                    toAmino(_: _40.GetSyncingRequest): _40.GetSyncingRequestAmino;
                    fromAminoMsg(object: _40.GetSyncingRequestAminoMsg): _40.GetSyncingRequest;
                    toAminoMsg(message: _40.GetSyncingRequest): _40.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _40.GetSyncingRequestProtoMsg): _40.GetSyncingRequest;
                    toProto(message: _40.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _40.GetSyncingRequest): _40.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _40.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.GetSyncingResponse;
                    fromPartial(object: Partial<_40.GetSyncingResponse>): _40.GetSyncingResponse;
                    fromAmino(object: _40.GetSyncingResponseAmino): _40.GetSyncingResponse;
                    toAmino(message: _40.GetSyncingResponse): _40.GetSyncingResponseAmino;
                    fromAminoMsg(object: _40.GetSyncingResponseAminoMsg): _40.GetSyncingResponse;
                    toAminoMsg(message: _40.GetSyncingResponse): _40.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _40.GetSyncingResponseProtoMsg): _40.GetSyncingResponse;
                    toProto(message: _40.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _40.GetSyncingResponse): _40.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _40.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _40.GetNodeInfoRequest;
                    fromPartial(_: Partial<_40.GetNodeInfoRequest>): _40.GetNodeInfoRequest;
                    fromAmino(_: _40.GetNodeInfoRequestAmino): _40.GetNodeInfoRequest;
                    toAmino(_: _40.GetNodeInfoRequest): _40.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _40.GetNodeInfoRequestAminoMsg): _40.GetNodeInfoRequest;
                    toAminoMsg(message: _40.GetNodeInfoRequest): _40.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _40.GetNodeInfoRequestProtoMsg): _40.GetNodeInfoRequest;
                    toProto(message: _40.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _40.GetNodeInfoRequest): _40.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _40.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.GetNodeInfoResponse;
                    fromPartial(object: Partial<_40.GetNodeInfoResponse>): _40.GetNodeInfoResponse;
                    fromAmino(object: _40.GetNodeInfoResponseAmino): _40.GetNodeInfoResponse;
                    toAmino(message: _40.GetNodeInfoResponse): _40.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _40.GetNodeInfoResponseAminoMsg): _40.GetNodeInfoResponse;
                    toAminoMsg(message: _40.GetNodeInfoResponse): _40.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _40.GetNodeInfoResponseProtoMsg): _40.GetNodeInfoResponse;
                    toProto(message: _40.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _40.GetNodeInfoResponse): _40.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _40.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.VersionInfo;
                    fromPartial(object: Partial<_40.VersionInfo>): _40.VersionInfo;
                    fromAmino(object: _40.VersionInfoAmino): _40.VersionInfo;
                    toAmino(message: _40.VersionInfo): _40.VersionInfoAmino;
                    fromAminoMsg(object: _40.VersionInfoAminoMsg): _40.VersionInfo;
                    toAminoMsg(message: _40.VersionInfo): _40.VersionInfoAminoMsg;
                    fromProtoMsg(message: _40.VersionInfoProtoMsg): _40.VersionInfo;
                    toProto(message: _40.VersionInfo): Uint8Array;
                    toProtoMsg(message: _40.VersionInfo): _40.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _40.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.Module;
                    fromPartial(object: Partial<_40.Module>): _40.Module;
                    fromAmino(object: _40.ModuleAmino): _40.Module;
                    toAmino(message: _40.Module): _40.ModuleAmino;
                    fromAminoMsg(object: _40.ModuleAminoMsg): _40.Module;
                    toAminoMsg(message: _40.Module): _40.ModuleAminoMsg;
                    fromProtoMsg(message: _40.ModuleProtoMsg): _40.Module;
                    toProto(message: _40.Module): Uint8Array;
                    toProtoMsg(message: _40.Module): _40.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _40.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.ABCIQueryRequest;
                    fromPartial(object: Partial<_40.ABCIQueryRequest>): _40.ABCIQueryRequest;
                    fromAmino(object: _40.ABCIQueryRequestAmino): _40.ABCIQueryRequest;
                    toAmino(message: _40.ABCIQueryRequest): _40.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _40.ABCIQueryRequestAminoMsg): _40.ABCIQueryRequest;
                    toAminoMsg(message: _40.ABCIQueryRequest): _40.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _40.ABCIQueryRequestProtoMsg): _40.ABCIQueryRequest;
                    toProto(message: _40.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _40.ABCIQueryRequest): _40.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _40.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.ABCIQueryResponse;
                    fromPartial(object: Partial<_40.ABCIQueryResponse>): _40.ABCIQueryResponse;
                    fromAmino(object: _40.ABCIQueryResponseAmino): _40.ABCIQueryResponse;
                    toAmino(message: _40.ABCIQueryResponse): _40.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _40.ABCIQueryResponseAminoMsg): _40.ABCIQueryResponse;
                    toAminoMsg(message: _40.ABCIQueryResponse): _40.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _40.ABCIQueryResponseProtoMsg): _40.ABCIQueryResponse;
                    toProto(message: _40.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _40.ABCIQueryResponse): _40.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _40.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.ProofOp;
                    fromPartial(object: Partial<_40.ProofOp>): _40.ProofOp;
                    fromAmino(object: _40.ProofOpAmino): _40.ProofOp;
                    toAmino(message: _40.ProofOp): _40.ProofOpAmino;
                    fromAminoMsg(object: _40.ProofOpAminoMsg): _40.ProofOp;
                    toAminoMsg(message: _40.ProofOp): _40.ProofOpAminoMsg;
                    fromProtoMsg(message: _40.ProofOpProtoMsg): _40.ProofOp;
                    toProto(message: _40.ProofOp): Uint8Array;
                    toProtoMsg(message: _40.ProofOp): _40.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _40.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.ProofOps;
                    fromPartial(object: Partial<_40.ProofOps>): _40.ProofOps;
                    fromAmino(object: _40.ProofOpsAmino): _40.ProofOps;
                    toAmino(message: _40.ProofOps): _40.ProofOpsAmino;
                    fromAminoMsg(object: _40.ProofOpsAminoMsg): _40.ProofOps;
                    toAminoMsg(message: _40.ProofOps): _40.ProofOpsAminoMsg;
                    fromProtoMsg(message: _40.ProofOpsProtoMsg): _40.ProofOps;
                    toProto(message: _40.ProofOps): Uint8Array;
                    toProtoMsg(message: _40.ProofOps): _40.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _42.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.Coin;
                fromPartial(object: Partial<_42.Coin>): _42.Coin;
                fromAmino(object: _42.CoinAmino): _42.Coin;
                toAmino(message: _42.Coin): _42.CoinAmino;
                fromAminoMsg(object: _42.CoinAminoMsg): _42.Coin;
                toAminoMsg(message: _42.Coin): _42.CoinAminoMsg;
                fromProtoMsg(message: _42.CoinProtoMsg): _42.Coin;
                toProto(message: _42.Coin): Uint8Array;
                toProtoMsg(message: _42.Coin): _42.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _42.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.DecCoin;
                fromPartial(object: Partial<_42.DecCoin>): _42.DecCoin;
                fromAmino(object: _42.DecCoinAmino): _42.DecCoin;
                toAmino(message: _42.DecCoin): _42.DecCoinAmino;
                fromAminoMsg(object: _42.DecCoinAminoMsg): _42.DecCoin;
                toAminoMsg(message: _42.DecCoin): _42.DecCoinAminoMsg;
                fromProtoMsg(message: _42.DecCoinProtoMsg): _42.DecCoin;
                toProto(message: _42.DecCoin): Uint8Array;
                toProtoMsg(message: _42.DecCoin): _42.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _42.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.IntProto;
                fromPartial(object: Partial<_42.IntProto>): _42.IntProto;
                fromAmino(object: _42.IntProtoAmino): _42.IntProto;
                toAmino(message: _42.IntProto): _42.IntProtoAmino;
                fromAminoMsg(object: _42.IntProtoAminoMsg): _42.IntProto;
                toAminoMsg(message: _42.IntProto): _42.IntProtoAminoMsg;
                fromProtoMsg(message: _42.IntProtoProtoMsg): _42.IntProto;
                toProto(message: _42.IntProto): Uint8Array;
                toProtoMsg(message: _42.IntProto): _42.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _42.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.DecProto;
                fromPartial(object: Partial<_42.DecProto>): _42.DecProto;
                fromAmino(object: _42.DecProtoAmino): _42.DecProto;
                toAmino(message: _42.DecProto): _42.DecProtoAmino;
                fromAminoMsg(object: _42.DecProtoAminoMsg): _42.DecProto;
                toAminoMsg(message: _42.DecProto): _42.DecProtoAminoMsg;
                fromProtoMsg(message: _42.DecProtoProtoMsg): _42.DecProto;
                toProto(message: _42.DecProto): Uint8Array;
                toProtoMsg(message: _42.DecProto): _42.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _44.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.GenesisOwners;
                fromPartial(object: Partial<_44.GenesisOwners>): _44.GenesisOwners;
                fromAmino(object: _44.GenesisOwnersAmino): _44.GenesisOwners;
                toAmino(message: _44.GenesisOwners): _44.GenesisOwnersAmino;
                fromAminoMsg(object: _44.GenesisOwnersAminoMsg): _44.GenesisOwners;
                toAminoMsg(message: _44.GenesisOwners): _44.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _44.GenesisOwnersProtoMsg): _44.GenesisOwners;
                toProto(message: _44.GenesisOwners): Uint8Array;
                toProtoMsg(message: _44.GenesisOwners): _44.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _44.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.GenesisState;
                fromPartial(object: Partial<_44.GenesisState>): _44.GenesisState;
                fromAmino(object: _44.GenesisStateAmino): _44.GenesisState;
                toAmino(message: _44.GenesisState): _44.GenesisStateAmino;
                fromAminoMsg(object: _44.GenesisStateAminoMsg): _44.GenesisState;
                toAminoMsg(message: _44.GenesisState): _44.GenesisStateAminoMsg;
                fromProtoMsg(message: _44.GenesisStateProtoMsg): _44.GenesisState;
                toProto(message: _44.GenesisState): Uint8Array;
                toProtoMsg(message: _44.GenesisState): _44.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _43.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.Capability;
                fromPartial(object: Partial<_43.Capability>): _43.Capability;
                fromAmino(object: _43.CapabilityAmino): _43.Capability;
                toAmino(message: _43.Capability): _43.CapabilityAmino;
                fromAminoMsg(object: _43.CapabilityAminoMsg): _43.Capability;
                toAminoMsg(message: _43.Capability): _43.CapabilityAminoMsg;
                fromProtoMsg(message: _43.CapabilityProtoMsg): _43.Capability;
                toProto(message: _43.Capability): Uint8Array;
                toProtoMsg(message: _43.Capability): _43.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _43.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.Owner;
                fromPartial(object: Partial<_43.Owner>): _43.Owner;
                fromAmino(object: _43.OwnerAmino): _43.Owner;
                toAmino(message: _43.Owner): _43.OwnerAmino;
                fromAminoMsg(object: _43.OwnerAminoMsg): _43.Owner;
                toAminoMsg(message: _43.Owner): _43.OwnerAminoMsg;
                fromProtoMsg(message: _43.OwnerProtoMsg): _43.Owner;
                toProto(message: _43.Owner): Uint8Array;
                toProtoMsg(message: _43.Owner): _43.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _43.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.CapabilityOwners;
                fromPartial(object: Partial<_43.CapabilityOwners>): _43.CapabilityOwners;
                fromAmino(object: _43.CapabilityOwnersAmino): _43.CapabilityOwners;
                toAmino(message: _43.CapabilityOwners): _43.CapabilityOwnersAmino;
                fromAminoMsg(object: _43.CapabilityOwnersAminoMsg): _43.CapabilityOwners;
                toAminoMsg(message: _43.CapabilityOwners): _43.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _43.CapabilityOwnersProtoMsg): _43.CapabilityOwners;
                toProto(message: _43.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _43.CapabilityOwners): _43.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _211.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _46.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _46.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _46.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _46.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _46.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _46.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _46.MsgVerifyInvariant) => _46.MsgVerifyInvariantAmino;
                    fromAmino: (object: _46.MsgVerifyInvariantAmino) => _46.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _46.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.MsgVerifyInvariant;
                fromPartial(object: Partial<_46.MsgVerifyInvariant>): _46.MsgVerifyInvariant;
                fromAmino(object: _46.MsgVerifyInvariantAmino): _46.MsgVerifyInvariant;
                toAmino(message: _46.MsgVerifyInvariant): _46.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _46.MsgVerifyInvariantAminoMsg): _46.MsgVerifyInvariant;
                toAminoMsg(message: _46.MsgVerifyInvariant): _46.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _46.MsgVerifyInvariantProtoMsg): _46.MsgVerifyInvariant;
                toProto(message: _46.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _46.MsgVerifyInvariant): _46.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _46.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _46.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_46.MsgVerifyInvariantResponse>): _46.MsgVerifyInvariantResponse;
                fromAmino(_: _46.MsgVerifyInvariantResponseAmino): _46.MsgVerifyInvariantResponse;
                toAmino(_: _46.MsgVerifyInvariantResponse): _46.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _46.MsgVerifyInvariantResponseAminoMsg): _46.MsgVerifyInvariantResponse;
                toAminoMsg(message: _46.MsgVerifyInvariantResponse): _46.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _46.MsgVerifyInvariantResponseProtoMsg): _46.MsgVerifyInvariantResponse;
                toProto(message: _46.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _46.MsgVerifyInvariantResponse): _46.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _45.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.GenesisState;
                fromPartial(object: Partial<_45.GenesisState>): _45.GenesisState;
                fromAmino(object: _45.GenesisStateAmino): _45.GenesisState;
                toAmino(message: _45.GenesisState): _45.GenesisStateAmino;
                fromAminoMsg(object: _45.GenesisStateAminoMsg): _45.GenesisState;
                toAminoMsg(message: _45.GenesisState): _45.GenesisStateAminoMsg;
                fromProtoMsg(message: _45.GenesisStateProtoMsg): _45.GenesisState;
                toProto(message: _45.GenesisState): Uint8Array;
                toProtoMsg(message: _45.GenesisState): _45.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _47.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.PubKey;
                fromPartial(object: Partial<_47.PubKey>): _47.PubKey;
                fromAmino(object: _47.PubKeyAmino): _47.PubKey;
                toAmino(message: _47.PubKey): _47.PubKeyAmino;
                fromAminoMsg(object: _47.PubKeyAminoMsg): _47.PubKey;
                toAminoMsg(message: _47.PubKey): _47.PubKeyAminoMsg;
                fromProtoMsg(message: _47.PubKeyProtoMsg): _47.PubKey;
                toProto(message: _47.PubKey): Uint8Array;
                toProtoMsg(message: _47.PubKey): _47.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _47.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.PrivKey;
                fromPartial(object: Partial<_47.PrivKey>): _47.PrivKey;
                fromAmino(object: _47.PrivKeyAmino): _47.PrivKey;
                toAmino(message: _47.PrivKey): _47.PrivKeyAmino;
                fromAminoMsg(object: _47.PrivKeyAminoMsg): _47.PrivKey;
                toAminoMsg(message: _47.PrivKey): _47.PrivKeyAminoMsg;
                fromProtoMsg(message: _47.PrivKeyProtoMsg): _47.PrivKey;
                toProto(message: _47.PrivKey): Uint8Array;
                toProtoMsg(message: _47.PrivKey): _47.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _48.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.BIP44Params;
                    fromPartial(object: Partial<_48.BIP44Params>): _48.BIP44Params;
                    fromAmino(object: _48.BIP44ParamsAmino): _48.BIP44Params;
                    toAmino(message: _48.BIP44Params): _48.BIP44ParamsAmino;
                    fromAminoMsg(object: _48.BIP44ParamsAminoMsg): _48.BIP44Params;
                    toAminoMsg(message: _48.BIP44Params): _48.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _48.BIP44ParamsProtoMsg): _48.BIP44Params;
                    toProto(message: _48.BIP44Params): Uint8Array;
                    toProtoMsg(message: _48.BIP44Params): _48.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _49.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.Record;
                    fromPartial(object: Partial<_49.Record>): _49.Record;
                    fromAmino(object: _49.RecordAmino): _49.Record;
                    toAmino(message: _49.Record): _49.RecordAmino;
                    fromAminoMsg(object: _49.RecordAminoMsg): _49.Record;
                    toAminoMsg(message: _49.Record): _49.RecordAminoMsg;
                    fromProtoMsg(message: _49.RecordProtoMsg): _49.Record;
                    toProto(message: _49.Record): Uint8Array;
                    toProtoMsg(message: _49.Record): _49.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _49.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.Record_Local;
                    fromPartial(object: Partial<_49.Record_Local>): _49.Record_Local;
                    fromAmino(object: _49.Record_LocalAmino): _49.Record_Local;
                    toAmino(message: _49.Record_Local): _49.Record_LocalAmino;
                    fromAminoMsg(object: _49.Record_LocalAminoMsg): _49.Record_Local;
                    toAminoMsg(message: _49.Record_Local): _49.Record_LocalAminoMsg;
                    fromProtoMsg(message: _49.Record_LocalProtoMsg): _49.Record_Local;
                    toProto(message: _49.Record_Local): Uint8Array;
                    toProtoMsg(message: _49.Record_Local): _49.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _49.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.Record_Ledger;
                    fromPartial(object: Partial<_49.Record_Ledger>): _49.Record_Ledger;
                    fromAmino(object: _49.Record_LedgerAmino): _49.Record_Ledger;
                    toAmino(message: _49.Record_Ledger): _49.Record_LedgerAmino;
                    fromAminoMsg(object: _49.Record_LedgerAminoMsg): _49.Record_Ledger;
                    toAminoMsg(message: _49.Record_Ledger): _49.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _49.Record_LedgerProtoMsg): _49.Record_Ledger;
                    toProto(message: _49.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _49.Record_Ledger): _49.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _49.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _49.Record_Multi;
                    fromPartial(_: Partial<_49.Record_Multi>): _49.Record_Multi;
                    fromAmino(_: _49.Record_MultiAmino): _49.Record_Multi;
                    toAmino(_: _49.Record_Multi): _49.Record_MultiAmino;
                    fromAminoMsg(object: _49.Record_MultiAminoMsg): _49.Record_Multi;
                    toAminoMsg(message: _49.Record_Multi): _49.Record_MultiAminoMsg;
                    fromProtoMsg(message: _49.Record_MultiProtoMsg): _49.Record_Multi;
                    toProto(message: _49.Record_Multi): Uint8Array;
                    toProtoMsg(message: _49.Record_Multi): _49.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _49.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _49.Record_Offline;
                    fromPartial(_: Partial<_49.Record_Offline>): _49.Record_Offline;
                    fromAmino(_: _49.Record_OfflineAmino): _49.Record_Offline;
                    toAmino(_: _49.Record_Offline): _49.Record_OfflineAmino;
                    fromAminoMsg(object: _49.Record_OfflineAminoMsg): _49.Record_Offline;
                    toAminoMsg(message: _49.Record_Offline): _49.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _49.Record_OfflineProtoMsg): _49.Record_Offline;
                    toProto(message: _49.Record_Offline): Uint8Array;
                    toProtoMsg(message: _49.Record_Offline): _49.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _50.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.LegacyAminoPubKey;
                fromPartial(object: Partial<_50.LegacyAminoPubKey>): _50.LegacyAminoPubKey;
                fromAmino(object: _50.LegacyAminoPubKeyAmino): _50.LegacyAminoPubKey;
                toAmino(message: _50.LegacyAminoPubKey): _50.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _50.LegacyAminoPubKeyAminoMsg): _50.LegacyAminoPubKey;
                toAminoMsg(message: _50.LegacyAminoPubKey): _50.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _50.LegacyAminoPubKeyProtoMsg): _50.LegacyAminoPubKey;
                toProto(message: _50.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _50.LegacyAminoPubKey): _50.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _51.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.PubKey;
                fromPartial(object: Partial<_51.PubKey>): _51.PubKey;
                fromAmino(object: _51.PubKeyAmino): _51.PubKey;
                toAmino(message: _51.PubKey): _51.PubKeyAmino;
                fromAminoMsg(object: _51.PubKeyAminoMsg): _51.PubKey;
                toAminoMsg(message: _51.PubKey): _51.PubKeyAminoMsg;
                fromProtoMsg(message: _51.PubKeyProtoMsg): _51.PubKey;
                toProto(message: _51.PubKey): Uint8Array;
                toProtoMsg(message: _51.PubKey): _51.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _51.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.PrivKey;
                fromPartial(object: Partial<_51.PrivKey>): _51.PrivKey;
                fromAmino(object: _51.PrivKeyAmino): _51.PrivKey;
                toAmino(message: _51.PrivKey): _51.PrivKeyAmino;
                fromAminoMsg(object: _51.PrivKeyAminoMsg): _51.PrivKey;
                toAminoMsg(message: _51.PrivKey): _51.PrivKeyAminoMsg;
                fromProtoMsg(message: _51.PrivKeyProtoMsg): _51.PrivKey;
                toProto(message: _51.PrivKey): Uint8Array;
                toProtoMsg(message: _51.PrivKey): _51.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _52.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.PubKey;
                fromPartial(object: Partial<_52.PubKey>): _52.PubKey;
                fromAmino(object: _52.PubKeyAmino): _52.PubKey;
                toAmino(message: _52.PubKey): _52.PubKeyAmino;
                fromAminoMsg(object: _52.PubKeyAminoMsg): _52.PubKey;
                toAminoMsg(message: _52.PubKey): _52.PubKeyAminoMsg;
                fromProtoMsg(message: _52.PubKeyProtoMsg): _52.PubKey;
                toProto(message: _52.PubKey): Uint8Array;
                toProtoMsg(message: _52.PubKey): _52.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _52.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.PrivKey;
                fromPartial(object: Partial<_52.PrivKey>): _52.PrivKey;
                fromAmino(object: _52.PrivKeyAmino): _52.PrivKey;
                toAmino(message: _52.PrivKey): _52.PrivKeyAmino;
                fromAminoMsg(object: _52.PrivKeyAminoMsg): _52.PrivKey;
                toAminoMsg(message: _52.PrivKey): _52.PrivKeyAminoMsg;
                fromProtoMsg(message: _52.PrivKeyProtoMsg): _52.PrivKey;
                toProto(message: _52.PrivKey): Uint8Array;
                toProtoMsg(message: _52.PrivKey): _52.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _212.MsgClientImpl;
            QueryClientImpl: typeof _196.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                validatorOutstandingRewards(request: _55.QueryValidatorOutstandingRewardsRequest): Promise<_55.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _55.QueryValidatorCommissionRequest): Promise<_55.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _55.QueryValidatorSlashesRequest): Promise<_55.QueryValidatorSlashesResponse>;
                delegationRewards(request: _55.QueryDelegationRewardsRequest): Promise<_55.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _55.QueryDelegationTotalRewardsRequest): Promise<_55.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _55.QueryDelegatorValidatorsRequest): Promise<_55.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _55.QueryDelegatorWithdrawAddressRequest): Promise<_55.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _55.QueryCommunityPoolRequest): Promise<_55.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _177.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _56.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _56.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _56.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _56.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _56.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _56.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _56.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _56.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _56.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _56.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _56.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _56.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _56.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _56.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _56.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _56.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _56.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _56.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _56.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _56.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _56.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _56.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _56.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _56.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _56.MsgSetWithdrawAddress) => _56.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _56.MsgSetWithdrawAddressAmino) => _56.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _56.MsgWithdrawDelegatorReward) => _56.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _56.MsgWithdrawDelegatorRewardAmino) => _56.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _56.MsgWithdrawValidatorCommission) => _56.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _56.MsgWithdrawValidatorCommissionAmino) => _56.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _56.MsgFundCommunityPool) => _56.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _56.MsgFundCommunityPoolAmino) => _56.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _56.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_56.MsgSetWithdrawAddress>): _56.MsgSetWithdrawAddress;
                fromAmino(object: _56.MsgSetWithdrawAddressAmino): _56.MsgSetWithdrawAddress;
                toAmino(message: _56.MsgSetWithdrawAddress): _56.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _56.MsgSetWithdrawAddressAminoMsg): _56.MsgSetWithdrawAddress;
                toAminoMsg(message: _56.MsgSetWithdrawAddress): _56.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _56.MsgSetWithdrawAddressProtoMsg): _56.MsgSetWithdrawAddress;
                toProto(message: _56.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _56.MsgSetWithdrawAddress): _56.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _56.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _56.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_56.MsgSetWithdrawAddressResponse>): _56.MsgSetWithdrawAddressResponse;
                fromAmino(_: _56.MsgSetWithdrawAddressResponseAmino): _56.MsgSetWithdrawAddressResponse;
                toAmino(_: _56.MsgSetWithdrawAddressResponse): _56.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _56.MsgSetWithdrawAddressResponseAminoMsg): _56.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _56.MsgSetWithdrawAddressResponse): _56.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _56.MsgSetWithdrawAddressResponseProtoMsg): _56.MsgSetWithdrawAddressResponse;
                toProto(message: _56.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _56.MsgSetWithdrawAddressResponse): _56.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _56.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_56.MsgWithdrawDelegatorReward>): _56.MsgWithdrawDelegatorReward;
                fromAmino(object: _56.MsgWithdrawDelegatorRewardAmino): _56.MsgWithdrawDelegatorReward;
                toAmino(message: _56.MsgWithdrawDelegatorReward): _56.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _56.MsgWithdrawDelegatorRewardAminoMsg): _56.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _56.MsgWithdrawDelegatorReward): _56.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _56.MsgWithdrawDelegatorRewardProtoMsg): _56.MsgWithdrawDelegatorReward;
                toProto(message: _56.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _56.MsgWithdrawDelegatorReward): _56.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _56.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_56.MsgWithdrawDelegatorRewardResponse>): _56.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _56.MsgWithdrawDelegatorRewardResponseAmino): _56.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _56.MsgWithdrawDelegatorRewardResponse): _56.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _56.MsgWithdrawDelegatorRewardResponseAminoMsg): _56.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _56.MsgWithdrawDelegatorRewardResponse): _56.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _56.MsgWithdrawDelegatorRewardResponseProtoMsg): _56.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _56.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _56.MsgWithdrawDelegatorRewardResponse): _56.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _56.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_56.MsgWithdrawValidatorCommission>): _56.MsgWithdrawValidatorCommission;
                fromAmino(object: _56.MsgWithdrawValidatorCommissionAmino): _56.MsgWithdrawValidatorCommission;
                toAmino(message: _56.MsgWithdrawValidatorCommission): _56.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _56.MsgWithdrawValidatorCommissionAminoMsg): _56.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _56.MsgWithdrawValidatorCommission): _56.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _56.MsgWithdrawValidatorCommissionProtoMsg): _56.MsgWithdrawValidatorCommission;
                toProto(message: _56.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _56.MsgWithdrawValidatorCommission): _56.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _56.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_56.MsgWithdrawValidatorCommissionResponse>): _56.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _56.MsgWithdrawValidatorCommissionResponseAmino): _56.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _56.MsgWithdrawValidatorCommissionResponse): _56.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _56.MsgWithdrawValidatorCommissionResponseAminoMsg): _56.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _56.MsgWithdrawValidatorCommissionResponse): _56.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _56.MsgWithdrawValidatorCommissionResponseProtoMsg): _56.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _56.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _56.MsgWithdrawValidatorCommissionResponse): _56.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _56.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.MsgFundCommunityPool;
                fromPartial(object: Partial<_56.MsgFundCommunityPool>): _56.MsgFundCommunityPool;
                fromAmino(object: _56.MsgFundCommunityPoolAmino): _56.MsgFundCommunityPool;
                toAmino(message: _56.MsgFundCommunityPool): _56.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _56.MsgFundCommunityPoolAminoMsg): _56.MsgFundCommunityPool;
                toAminoMsg(message: _56.MsgFundCommunityPool): _56.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _56.MsgFundCommunityPoolProtoMsg): _56.MsgFundCommunityPool;
                toProto(message: _56.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _56.MsgFundCommunityPool): _56.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _56.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _56.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_56.MsgFundCommunityPoolResponse>): _56.MsgFundCommunityPoolResponse;
                fromAmino(_: _56.MsgFundCommunityPoolResponseAmino): _56.MsgFundCommunityPoolResponse;
                toAmino(_: _56.MsgFundCommunityPoolResponse): _56.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _56.MsgFundCommunityPoolResponseAminoMsg): _56.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _56.MsgFundCommunityPoolResponse): _56.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _56.MsgFundCommunityPoolResponseProtoMsg): _56.MsgFundCommunityPoolResponse;
                toProto(message: _56.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _56.MsgFundCommunityPoolResponse): _56.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _55.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.QueryParamsRequest;
                fromPartial(_: Partial<_55.QueryParamsRequest>): _55.QueryParamsRequest;
                fromAmino(_: _55.QueryParamsRequestAmino): _55.QueryParamsRequest;
                toAmino(_: _55.QueryParamsRequest): _55.QueryParamsRequestAmino;
                fromAminoMsg(object: _55.QueryParamsRequestAminoMsg): _55.QueryParamsRequest;
                toAminoMsg(message: _55.QueryParamsRequest): _55.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _55.QueryParamsRequestProtoMsg): _55.QueryParamsRequest;
                toProto(message: _55.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _55.QueryParamsRequest): _55.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _55.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryParamsResponse;
                fromPartial(object: Partial<_55.QueryParamsResponse>): _55.QueryParamsResponse;
                fromAmino(object: _55.QueryParamsResponseAmino): _55.QueryParamsResponse;
                toAmino(message: _55.QueryParamsResponse): _55.QueryParamsResponseAmino;
                fromAminoMsg(object: _55.QueryParamsResponseAminoMsg): _55.QueryParamsResponse;
                toAminoMsg(message: _55.QueryParamsResponse): _55.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _55.QueryParamsResponseProtoMsg): _55.QueryParamsResponse;
                toProto(message: _55.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _55.QueryParamsResponse): _55.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _55.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_55.QueryValidatorOutstandingRewardsRequest>): _55.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _55.QueryValidatorOutstandingRewardsRequestAmino): _55.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _55.QueryValidatorOutstandingRewardsRequest): _55.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _55.QueryValidatorOutstandingRewardsRequestAminoMsg): _55.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _55.QueryValidatorOutstandingRewardsRequest): _55.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _55.QueryValidatorOutstandingRewardsRequestProtoMsg): _55.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _55.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _55.QueryValidatorOutstandingRewardsRequest): _55.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _55.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_55.QueryValidatorOutstandingRewardsResponse>): _55.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _55.QueryValidatorOutstandingRewardsResponseAmino): _55.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _55.QueryValidatorOutstandingRewardsResponse): _55.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _55.QueryValidatorOutstandingRewardsResponseAminoMsg): _55.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _55.QueryValidatorOutstandingRewardsResponse): _55.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _55.QueryValidatorOutstandingRewardsResponseProtoMsg): _55.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _55.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _55.QueryValidatorOutstandingRewardsResponse): _55.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _55.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_55.QueryValidatorCommissionRequest>): _55.QueryValidatorCommissionRequest;
                fromAmino(object: _55.QueryValidatorCommissionRequestAmino): _55.QueryValidatorCommissionRequest;
                toAmino(message: _55.QueryValidatorCommissionRequest): _55.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _55.QueryValidatorCommissionRequestAminoMsg): _55.QueryValidatorCommissionRequest;
                toAminoMsg(message: _55.QueryValidatorCommissionRequest): _55.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _55.QueryValidatorCommissionRequestProtoMsg): _55.QueryValidatorCommissionRequest;
                toProto(message: _55.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _55.QueryValidatorCommissionRequest): _55.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _55.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_55.QueryValidatorCommissionResponse>): _55.QueryValidatorCommissionResponse;
                fromAmino(object: _55.QueryValidatorCommissionResponseAmino): _55.QueryValidatorCommissionResponse;
                toAmino(message: _55.QueryValidatorCommissionResponse): _55.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _55.QueryValidatorCommissionResponseAminoMsg): _55.QueryValidatorCommissionResponse;
                toAminoMsg(message: _55.QueryValidatorCommissionResponse): _55.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _55.QueryValidatorCommissionResponseProtoMsg): _55.QueryValidatorCommissionResponse;
                toProto(message: _55.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _55.QueryValidatorCommissionResponse): _55.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _55.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_55.QueryValidatorSlashesRequest>): _55.QueryValidatorSlashesRequest;
                fromAmino(object: _55.QueryValidatorSlashesRequestAmino): _55.QueryValidatorSlashesRequest;
                toAmino(message: _55.QueryValidatorSlashesRequest): _55.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _55.QueryValidatorSlashesRequestAminoMsg): _55.QueryValidatorSlashesRequest;
                toAminoMsg(message: _55.QueryValidatorSlashesRequest): _55.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _55.QueryValidatorSlashesRequestProtoMsg): _55.QueryValidatorSlashesRequest;
                toProto(message: _55.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _55.QueryValidatorSlashesRequest): _55.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _55.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_55.QueryValidatorSlashesResponse>): _55.QueryValidatorSlashesResponse;
                fromAmino(object: _55.QueryValidatorSlashesResponseAmino): _55.QueryValidatorSlashesResponse;
                toAmino(message: _55.QueryValidatorSlashesResponse): _55.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _55.QueryValidatorSlashesResponseAminoMsg): _55.QueryValidatorSlashesResponse;
                toAminoMsg(message: _55.QueryValidatorSlashesResponse): _55.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _55.QueryValidatorSlashesResponseProtoMsg): _55.QueryValidatorSlashesResponse;
                toProto(message: _55.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _55.QueryValidatorSlashesResponse): _55.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _55.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_55.QueryDelegationRewardsRequest>): _55.QueryDelegationRewardsRequest;
                fromAmino(object: _55.QueryDelegationRewardsRequestAmino): _55.QueryDelegationRewardsRequest;
                toAmino(message: _55.QueryDelegationRewardsRequest): _55.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _55.QueryDelegationRewardsRequestAminoMsg): _55.QueryDelegationRewardsRequest;
                toAminoMsg(message: _55.QueryDelegationRewardsRequest): _55.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _55.QueryDelegationRewardsRequestProtoMsg): _55.QueryDelegationRewardsRequest;
                toProto(message: _55.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _55.QueryDelegationRewardsRequest): _55.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _55.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_55.QueryDelegationRewardsResponse>): _55.QueryDelegationRewardsResponse;
                fromAmino(object: _55.QueryDelegationRewardsResponseAmino): _55.QueryDelegationRewardsResponse;
                toAmino(message: _55.QueryDelegationRewardsResponse): _55.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _55.QueryDelegationRewardsResponseAminoMsg): _55.QueryDelegationRewardsResponse;
                toAminoMsg(message: _55.QueryDelegationRewardsResponse): _55.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _55.QueryDelegationRewardsResponseProtoMsg): _55.QueryDelegationRewardsResponse;
                toProto(message: _55.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _55.QueryDelegationRewardsResponse): _55.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _55.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_55.QueryDelegationTotalRewardsRequest>): _55.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _55.QueryDelegationTotalRewardsRequestAmino): _55.QueryDelegationTotalRewardsRequest;
                toAmino(message: _55.QueryDelegationTotalRewardsRequest): _55.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _55.QueryDelegationTotalRewardsRequestAminoMsg): _55.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _55.QueryDelegationTotalRewardsRequest): _55.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _55.QueryDelegationTotalRewardsRequestProtoMsg): _55.QueryDelegationTotalRewardsRequest;
                toProto(message: _55.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _55.QueryDelegationTotalRewardsRequest): _55.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _55.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_55.QueryDelegationTotalRewardsResponse>): _55.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _55.QueryDelegationTotalRewardsResponseAmino): _55.QueryDelegationTotalRewardsResponse;
                toAmino(message: _55.QueryDelegationTotalRewardsResponse): _55.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _55.QueryDelegationTotalRewardsResponseAminoMsg): _55.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _55.QueryDelegationTotalRewardsResponse): _55.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _55.QueryDelegationTotalRewardsResponseProtoMsg): _55.QueryDelegationTotalRewardsResponse;
                toProto(message: _55.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _55.QueryDelegationTotalRewardsResponse): _55.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _55.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_55.QueryDelegatorValidatorsRequest>): _55.QueryDelegatorValidatorsRequest;
                fromAmino(object: _55.QueryDelegatorValidatorsRequestAmino): _55.QueryDelegatorValidatorsRequest;
                toAmino(message: _55.QueryDelegatorValidatorsRequest): _55.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _55.QueryDelegatorValidatorsRequestAminoMsg): _55.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _55.QueryDelegatorValidatorsRequest): _55.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _55.QueryDelegatorValidatorsRequestProtoMsg): _55.QueryDelegatorValidatorsRequest;
                toProto(message: _55.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _55.QueryDelegatorValidatorsRequest): _55.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _55.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_55.QueryDelegatorValidatorsResponse>): _55.QueryDelegatorValidatorsResponse;
                fromAmino(object: _55.QueryDelegatorValidatorsResponseAmino): _55.QueryDelegatorValidatorsResponse;
                toAmino(message: _55.QueryDelegatorValidatorsResponse): _55.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _55.QueryDelegatorValidatorsResponseAminoMsg): _55.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _55.QueryDelegatorValidatorsResponse): _55.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _55.QueryDelegatorValidatorsResponseProtoMsg): _55.QueryDelegatorValidatorsResponse;
                toProto(message: _55.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _55.QueryDelegatorValidatorsResponse): _55.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _55.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_55.QueryDelegatorWithdrawAddressRequest>): _55.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _55.QueryDelegatorWithdrawAddressRequestAmino): _55.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _55.QueryDelegatorWithdrawAddressRequest): _55.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _55.QueryDelegatorWithdrawAddressRequestAminoMsg): _55.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _55.QueryDelegatorWithdrawAddressRequest): _55.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _55.QueryDelegatorWithdrawAddressRequestProtoMsg): _55.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _55.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _55.QueryDelegatorWithdrawAddressRequest): _55.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _55.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_55.QueryDelegatorWithdrawAddressResponse>): _55.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _55.QueryDelegatorWithdrawAddressResponseAmino): _55.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _55.QueryDelegatorWithdrawAddressResponse): _55.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _55.QueryDelegatorWithdrawAddressResponseAminoMsg): _55.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _55.QueryDelegatorWithdrawAddressResponse): _55.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _55.QueryDelegatorWithdrawAddressResponseProtoMsg): _55.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _55.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _55.QueryDelegatorWithdrawAddressResponse): _55.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _55.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_55.QueryCommunityPoolRequest>): _55.QueryCommunityPoolRequest;
                fromAmino(_: _55.QueryCommunityPoolRequestAmino): _55.QueryCommunityPoolRequest;
                toAmino(_: _55.QueryCommunityPoolRequest): _55.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _55.QueryCommunityPoolRequestAminoMsg): _55.QueryCommunityPoolRequest;
                toAminoMsg(message: _55.QueryCommunityPoolRequest): _55.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _55.QueryCommunityPoolRequestProtoMsg): _55.QueryCommunityPoolRequest;
                toProto(message: _55.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _55.QueryCommunityPoolRequest): _55.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _55.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_55.QueryCommunityPoolResponse>): _55.QueryCommunityPoolResponse;
                fromAmino(object: _55.QueryCommunityPoolResponseAmino): _55.QueryCommunityPoolResponse;
                toAmino(message: _55.QueryCommunityPoolResponse): _55.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _55.QueryCommunityPoolResponseAminoMsg): _55.QueryCommunityPoolResponse;
                toAminoMsg(message: _55.QueryCommunityPoolResponse): _55.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _55.QueryCommunityPoolResponseProtoMsg): _55.QueryCommunityPoolResponse;
                toProto(message: _55.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _55.QueryCommunityPoolResponse): _55.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _54.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_54.DelegatorWithdrawInfo>): _54.DelegatorWithdrawInfo;
                fromAmino(object: _54.DelegatorWithdrawInfoAmino): _54.DelegatorWithdrawInfo;
                toAmino(message: _54.DelegatorWithdrawInfo): _54.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _54.DelegatorWithdrawInfoAminoMsg): _54.DelegatorWithdrawInfo;
                toAminoMsg(message: _54.DelegatorWithdrawInfo): _54.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _54.DelegatorWithdrawInfoProtoMsg): _54.DelegatorWithdrawInfo;
                toProto(message: _54.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _54.DelegatorWithdrawInfo): _54.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _54.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_54.ValidatorOutstandingRewardsRecord>): _54.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _54.ValidatorOutstandingRewardsRecordAmino): _54.ValidatorOutstandingRewardsRecord;
                toAmino(message: _54.ValidatorOutstandingRewardsRecord): _54.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _54.ValidatorOutstandingRewardsRecordAminoMsg): _54.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _54.ValidatorOutstandingRewardsRecord): _54.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _54.ValidatorOutstandingRewardsRecordProtoMsg): _54.ValidatorOutstandingRewardsRecord;
                toProto(message: _54.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _54.ValidatorOutstandingRewardsRecord): _54.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _54.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_54.ValidatorAccumulatedCommissionRecord>): _54.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _54.ValidatorAccumulatedCommissionRecordAmino): _54.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _54.ValidatorAccumulatedCommissionRecord): _54.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _54.ValidatorAccumulatedCommissionRecordAminoMsg): _54.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _54.ValidatorAccumulatedCommissionRecord): _54.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _54.ValidatorAccumulatedCommissionRecordProtoMsg): _54.ValidatorAccumulatedCommissionRecord;
                toProto(message: _54.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _54.ValidatorAccumulatedCommissionRecord): _54.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _54.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_54.ValidatorHistoricalRewardsRecord>): _54.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _54.ValidatorHistoricalRewardsRecordAmino): _54.ValidatorHistoricalRewardsRecord;
                toAmino(message: _54.ValidatorHistoricalRewardsRecord): _54.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _54.ValidatorHistoricalRewardsRecordAminoMsg): _54.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _54.ValidatorHistoricalRewardsRecord): _54.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _54.ValidatorHistoricalRewardsRecordProtoMsg): _54.ValidatorHistoricalRewardsRecord;
                toProto(message: _54.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _54.ValidatorHistoricalRewardsRecord): _54.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _54.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_54.ValidatorCurrentRewardsRecord>): _54.ValidatorCurrentRewardsRecord;
                fromAmino(object: _54.ValidatorCurrentRewardsRecordAmino): _54.ValidatorCurrentRewardsRecord;
                toAmino(message: _54.ValidatorCurrentRewardsRecord): _54.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _54.ValidatorCurrentRewardsRecordAminoMsg): _54.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _54.ValidatorCurrentRewardsRecord): _54.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _54.ValidatorCurrentRewardsRecordProtoMsg): _54.ValidatorCurrentRewardsRecord;
                toProto(message: _54.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _54.ValidatorCurrentRewardsRecord): _54.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _54.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_54.DelegatorStartingInfoRecord>): _54.DelegatorStartingInfoRecord;
                fromAmino(object: _54.DelegatorStartingInfoRecordAmino): _54.DelegatorStartingInfoRecord;
                toAmino(message: _54.DelegatorStartingInfoRecord): _54.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _54.DelegatorStartingInfoRecordAminoMsg): _54.DelegatorStartingInfoRecord;
                toAminoMsg(message: _54.DelegatorStartingInfoRecord): _54.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _54.DelegatorStartingInfoRecordProtoMsg): _54.DelegatorStartingInfoRecord;
                toProto(message: _54.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _54.DelegatorStartingInfoRecord): _54.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _54.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_54.ValidatorSlashEventRecord>): _54.ValidatorSlashEventRecord;
                fromAmino(object: _54.ValidatorSlashEventRecordAmino): _54.ValidatorSlashEventRecord;
                toAmino(message: _54.ValidatorSlashEventRecord): _54.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _54.ValidatorSlashEventRecordAminoMsg): _54.ValidatorSlashEventRecord;
                toAminoMsg(message: _54.ValidatorSlashEventRecord): _54.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _54.ValidatorSlashEventRecordProtoMsg): _54.ValidatorSlashEventRecord;
                toProto(message: _54.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _54.ValidatorSlashEventRecord): _54.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _53.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.Params;
                fromPartial(object: Partial<_53.Params>): _53.Params;
                fromAmino(object: _53.ParamsAmino): _53.Params;
                toAmino(message: _53.Params): _53.ParamsAmino;
                fromAminoMsg(object: _53.ParamsAminoMsg): _53.Params;
                toAminoMsg(message: _53.Params): _53.ParamsAminoMsg;
                fromProtoMsg(message: _53.ParamsProtoMsg): _53.Params;
                toProto(message: _53.Params): Uint8Array;
                toProtoMsg(message: _53.Params): _53.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _53.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_53.ValidatorHistoricalRewards>): _53.ValidatorHistoricalRewards;
                fromAmino(object: _53.ValidatorHistoricalRewardsAmino): _53.ValidatorHistoricalRewards;
                toAmino(message: _53.ValidatorHistoricalRewards): _53.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _53.ValidatorHistoricalRewardsAminoMsg): _53.ValidatorHistoricalRewards;
                toAminoMsg(message: _53.ValidatorHistoricalRewards): _53.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _53.ValidatorHistoricalRewardsProtoMsg): _53.ValidatorHistoricalRewards;
                toProto(message: _53.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _53.ValidatorHistoricalRewards): _53.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _53.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ValidatorCurrentRewards;
                fromPartial(object: Partial<_53.ValidatorCurrentRewards>): _53.ValidatorCurrentRewards;
                fromAmino(object: _53.ValidatorCurrentRewardsAmino): _53.ValidatorCurrentRewards;
                toAmino(message: _53.ValidatorCurrentRewards): _53.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _53.ValidatorCurrentRewardsAminoMsg): _53.ValidatorCurrentRewards;
                toAminoMsg(message: _53.ValidatorCurrentRewards): _53.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _53.ValidatorCurrentRewardsProtoMsg): _53.ValidatorCurrentRewards;
                toProto(message: _53.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _53.ValidatorCurrentRewards): _53.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _53.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_53.ValidatorAccumulatedCommission>): _53.ValidatorAccumulatedCommission;
                fromAmino(object: _53.ValidatorAccumulatedCommissionAmino): _53.ValidatorAccumulatedCommission;
                toAmino(message: _53.ValidatorAccumulatedCommission): _53.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _53.ValidatorAccumulatedCommissionAminoMsg): _53.ValidatorAccumulatedCommission;
                toAminoMsg(message: _53.ValidatorAccumulatedCommission): _53.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _53.ValidatorAccumulatedCommissionProtoMsg): _53.ValidatorAccumulatedCommission;
                toProto(message: _53.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _53.ValidatorAccumulatedCommission): _53.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _53.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_53.ValidatorOutstandingRewards>): _53.ValidatorOutstandingRewards;
                fromAmino(object: _53.ValidatorOutstandingRewardsAmino): _53.ValidatorOutstandingRewards;
                toAmino(message: _53.ValidatorOutstandingRewards): _53.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _53.ValidatorOutstandingRewardsAminoMsg): _53.ValidatorOutstandingRewards;
                toAminoMsg(message: _53.ValidatorOutstandingRewards): _53.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _53.ValidatorOutstandingRewardsProtoMsg): _53.ValidatorOutstandingRewards;
                toProto(message: _53.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _53.ValidatorOutstandingRewards): _53.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _53.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ValidatorSlashEvent;
                fromPartial(object: Partial<_53.ValidatorSlashEvent>): _53.ValidatorSlashEvent;
                fromAmino(object: _53.ValidatorSlashEventAmino): _53.ValidatorSlashEvent;
                toAmino(message: _53.ValidatorSlashEvent): _53.ValidatorSlashEventAmino;
                fromAminoMsg(object: _53.ValidatorSlashEventAminoMsg): _53.ValidatorSlashEvent;
                toAminoMsg(message: _53.ValidatorSlashEvent): _53.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _53.ValidatorSlashEventProtoMsg): _53.ValidatorSlashEvent;
                toProto(message: _53.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _53.ValidatorSlashEvent): _53.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _53.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ValidatorSlashEvents;
                fromPartial(object: Partial<_53.ValidatorSlashEvents>): _53.ValidatorSlashEvents;
                fromAmino(object: _53.ValidatorSlashEventsAmino): _53.ValidatorSlashEvents;
                toAmino(message: _53.ValidatorSlashEvents): _53.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _53.ValidatorSlashEventsAminoMsg): _53.ValidatorSlashEvents;
                toAminoMsg(message: _53.ValidatorSlashEvents): _53.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _53.ValidatorSlashEventsProtoMsg): _53.ValidatorSlashEvents;
                toProto(message: _53.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _53.ValidatorSlashEvents): _53.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _53.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.FeePool;
                fromPartial(object: Partial<_53.FeePool>): _53.FeePool;
                fromAmino(object: _53.FeePoolAmino): _53.FeePool;
                toAmino(message: _53.FeePool): _53.FeePoolAmino;
                fromAminoMsg(object: _53.FeePoolAminoMsg): _53.FeePool;
                toAminoMsg(message: _53.FeePool): _53.FeePoolAminoMsg;
                fromProtoMsg(message: _53.FeePoolProtoMsg): _53.FeePool;
                toProto(message: _53.FeePool): Uint8Array;
                toProtoMsg(message: _53.FeePool): _53.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _53.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_53.CommunityPoolSpendProposal>): _53.CommunityPoolSpendProposal;
                fromAmino(object: _53.CommunityPoolSpendProposalAmino): _53.CommunityPoolSpendProposal;
                toAmino(message: _53.CommunityPoolSpendProposal): _53.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _53.CommunityPoolSpendProposalAminoMsg): _53.CommunityPoolSpendProposal;
                toAminoMsg(message: _53.CommunityPoolSpendProposal): _53.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _53.CommunityPoolSpendProposalProtoMsg): _53.CommunityPoolSpendProposal;
                toProto(message: _53.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _53.CommunityPoolSpendProposal): _53.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _53.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.DelegatorStartingInfo;
                fromPartial(object: Partial<_53.DelegatorStartingInfo>): _53.DelegatorStartingInfo;
                fromAmino(object: _53.DelegatorStartingInfoAmino): _53.DelegatorStartingInfo;
                toAmino(message: _53.DelegatorStartingInfo): _53.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _53.DelegatorStartingInfoAminoMsg): _53.DelegatorStartingInfo;
                toAminoMsg(message: _53.DelegatorStartingInfo): _53.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _53.DelegatorStartingInfoProtoMsg): _53.DelegatorStartingInfo;
                toProto(message: _53.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _53.DelegatorStartingInfo): _53.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _53.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.DelegationDelegatorReward;
                fromPartial(object: Partial<_53.DelegationDelegatorReward>): _53.DelegationDelegatorReward;
                fromAmino(object: _53.DelegationDelegatorRewardAmino): _53.DelegationDelegatorReward;
                toAmino(message: _53.DelegationDelegatorReward): _53.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _53.DelegationDelegatorRewardAminoMsg): _53.DelegationDelegatorReward;
                toAminoMsg(message: _53.DelegationDelegatorReward): _53.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _53.DelegationDelegatorRewardProtoMsg): _53.DelegationDelegatorReward;
                toProto(message: _53.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _53.DelegationDelegatorReward): _53.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _53.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_53.CommunityPoolSpendProposalWithDeposit>): _53.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _53.CommunityPoolSpendProposalWithDepositAmino): _53.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _53.CommunityPoolSpendProposalWithDeposit): _53.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _53.CommunityPoolSpendProposalWithDepositAminoMsg): _53.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _53.CommunityPoolSpendProposalWithDeposit): _53.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _53.CommunityPoolSpendProposalWithDepositProtoMsg): _53.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _53.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _53.CommunityPoolSpendProposalWithDeposit): _53.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _213.MsgClientImpl;
            QueryClientImpl: typeof _197.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _59.QueryEvidenceRequest): Promise<_59.QueryEvidenceResponse>;
                allEvidence(request?: _59.QueryAllEvidenceRequest): Promise<_59.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _178.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _60.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _60.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _60.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _60.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _60.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _60.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _60.MsgSubmitEvidence) => _60.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _60.MsgSubmitEvidenceAmino) => _60.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _60.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.MsgSubmitEvidence;
                fromPartial(object: Partial<_60.MsgSubmitEvidence>): _60.MsgSubmitEvidence;
                fromAmino(object: _60.MsgSubmitEvidenceAmino): _60.MsgSubmitEvidence;
                toAmino(message: _60.MsgSubmitEvidence): _60.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _60.MsgSubmitEvidenceAminoMsg): _60.MsgSubmitEvidence;
                toAminoMsg(message: _60.MsgSubmitEvidence): _60.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _60.MsgSubmitEvidenceProtoMsg): _60.MsgSubmitEvidence;
                toProto(message: _60.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _60.MsgSubmitEvidence): _60.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _60.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_60.MsgSubmitEvidenceResponse>): _60.MsgSubmitEvidenceResponse;
                fromAmino(object: _60.MsgSubmitEvidenceResponseAmino): _60.MsgSubmitEvidenceResponse;
                toAmino(message: _60.MsgSubmitEvidenceResponse): _60.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _60.MsgSubmitEvidenceResponseAminoMsg): _60.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _60.MsgSubmitEvidenceResponse): _60.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _60.MsgSubmitEvidenceResponseProtoMsg): _60.MsgSubmitEvidenceResponse;
                toProto(message: _60.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _60.MsgSubmitEvidenceResponse): _60.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _59.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryEvidenceRequest;
                fromPartial(object: Partial<_59.QueryEvidenceRequest>): _59.QueryEvidenceRequest;
                fromAmino(object: _59.QueryEvidenceRequestAmino): _59.QueryEvidenceRequest;
                toAmino(message: _59.QueryEvidenceRequest): _59.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _59.QueryEvidenceRequestAminoMsg): _59.QueryEvidenceRequest;
                toAminoMsg(message: _59.QueryEvidenceRequest): _59.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _59.QueryEvidenceRequestProtoMsg): _59.QueryEvidenceRequest;
                toProto(message: _59.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _59.QueryEvidenceRequest): _59.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _59.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryEvidenceResponse;
                fromPartial(object: Partial<_59.QueryEvidenceResponse>): _59.QueryEvidenceResponse;
                fromAmino(object: _59.QueryEvidenceResponseAmino): _59.QueryEvidenceResponse;
                toAmino(message: _59.QueryEvidenceResponse): _59.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _59.QueryEvidenceResponseAminoMsg): _59.QueryEvidenceResponse;
                toAminoMsg(message: _59.QueryEvidenceResponse): _59.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _59.QueryEvidenceResponseProtoMsg): _59.QueryEvidenceResponse;
                toProto(message: _59.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _59.QueryEvidenceResponse): _59.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _59.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_59.QueryAllEvidenceRequest>): _59.QueryAllEvidenceRequest;
                fromAmino(object: _59.QueryAllEvidenceRequestAmino): _59.QueryAllEvidenceRequest;
                toAmino(message: _59.QueryAllEvidenceRequest): _59.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _59.QueryAllEvidenceRequestAminoMsg): _59.QueryAllEvidenceRequest;
                toAminoMsg(message: _59.QueryAllEvidenceRequest): _59.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _59.QueryAllEvidenceRequestProtoMsg): _59.QueryAllEvidenceRequest;
                toProto(message: _59.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _59.QueryAllEvidenceRequest): _59.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _59.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_59.QueryAllEvidenceResponse>): _59.QueryAllEvidenceResponse;
                fromAmino(object: _59.QueryAllEvidenceResponseAmino): _59.QueryAllEvidenceResponse;
                toAmino(message: _59.QueryAllEvidenceResponse): _59.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _59.QueryAllEvidenceResponseAminoMsg): _59.QueryAllEvidenceResponse;
                toAminoMsg(message: _59.QueryAllEvidenceResponse): _59.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _59.QueryAllEvidenceResponseProtoMsg): _59.QueryAllEvidenceResponse;
                toProto(message: _59.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _59.QueryAllEvidenceResponse): _59.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _57.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.Equivocation;
                fromPartial(object: Partial<_57.Equivocation>): _57.Equivocation;
                fromAmino(object: _57.EquivocationAmino): _57.Equivocation;
                toAmino(message: _57.Equivocation): _57.EquivocationAmino;
                fromAminoMsg(object: _57.EquivocationAminoMsg): _57.Equivocation;
                toAminoMsg(message: _57.Equivocation): _57.EquivocationAminoMsg;
                fromProtoMsg(message: _57.EquivocationProtoMsg): _57.Equivocation;
                toProto(message: _57.Equivocation): Uint8Array;
                toProtoMsg(message: _57.Equivocation): _57.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _214.MsgClientImpl;
            QueryClientImpl: typeof _198.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _63.QueryAllowanceRequest): Promise<_63.QueryAllowanceResponse>;
                allowances(request: _63.QueryAllowancesRequest): Promise<_63.QueryAllowancesResponse>;
                allowancesByGranter(request: _63.QueryAllowancesByGranterRequest): Promise<_63.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _179.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _64.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _64.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _64.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _64.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _64.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _64.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _64.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _64.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _64.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _64.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _64.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _64.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _64.MsgGrantAllowance) => _64.MsgGrantAllowanceAmino;
                    fromAmino: (object: _64.MsgGrantAllowanceAmino) => _64.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _64.MsgRevokeAllowance) => _64.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _64.MsgRevokeAllowanceAmino) => _64.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _64.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgGrantAllowance;
                fromPartial(object: Partial<_64.MsgGrantAllowance>): _64.MsgGrantAllowance;
                fromAmino(object: _64.MsgGrantAllowanceAmino): _64.MsgGrantAllowance;
                toAmino(message: _64.MsgGrantAllowance): _64.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _64.MsgGrantAllowanceAminoMsg): _64.MsgGrantAllowance;
                toAminoMsg(message: _64.MsgGrantAllowance): _64.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _64.MsgGrantAllowanceProtoMsg): _64.MsgGrantAllowance;
                toProto(message: _64.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _64.MsgGrantAllowance): _64.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _64.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_64.MsgGrantAllowanceResponse>): _64.MsgGrantAllowanceResponse;
                fromAmino(_: _64.MsgGrantAllowanceResponseAmino): _64.MsgGrantAllowanceResponse;
                toAmino(_: _64.MsgGrantAllowanceResponse): _64.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _64.MsgGrantAllowanceResponseAminoMsg): _64.MsgGrantAllowanceResponse;
                toAminoMsg(message: _64.MsgGrantAllowanceResponse): _64.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _64.MsgGrantAllowanceResponseProtoMsg): _64.MsgGrantAllowanceResponse;
                toProto(message: _64.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _64.MsgGrantAllowanceResponse): _64.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _64.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgRevokeAllowance;
                fromPartial(object: Partial<_64.MsgRevokeAllowance>): _64.MsgRevokeAllowance;
                fromAmino(object: _64.MsgRevokeAllowanceAmino): _64.MsgRevokeAllowance;
                toAmino(message: _64.MsgRevokeAllowance): _64.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _64.MsgRevokeAllowanceAminoMsg): _64.MsgRevokeAllowance;
                toAminoMsg(message: _64.MsgRevokeAllowance): _64.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _64.MsgRevokeAllowanceProtoMsg): _64.MsgRevokeAllowance;
                toProto(message: _64.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _64.MsgRevokeAllowance): _64.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _64.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_64.MsgRevokeAllowanceResponse>): _64.MsgRevokeAllowanceResponse;
                fromAmino(_: _64.MsgRevokeAllowanceResponseAmino): _64.MsgRevokeAllowanceResponse;
                toAmino(_: _64.MsgRevokeAllowanceResponse): _64.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _64.MsgRevokeAllowanceResponseAminoMsg): _64.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _64.MsgRevokeAllowanceResponse): _64.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _64.MsgRevokeAllowanceResponseProtoMsg): _64.MsgRevokeAllowanceResponse;
                toProto(message: _64.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _64.MsgRevokeAllowanceResponse): _64.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _61.BasicAllowance | _61.PeriodicAllowance | _61.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _63.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryAllowanceRequest;
                fromPartial(object: Partial<_63.QueryAllowanceRequest>): _63.QueryAllowanceRequest;
                fromAmino(object: _63.QueryAllowanceRequestAmino): _63.QueryAllowanceRequest;
                toAmino(message: _63.QueryAllowanceRequest): _63.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _63.QueryAllowanceRequestAminoMsg): _63.QueryAllowanceRequest;
                toAminoMsg(message: _63.QueryAllowanceRequest): _63.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _63.QueryAllowanceRequestProtoMsg): _63.QueryAllowanceRequest;
                toProto(message: _63.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _63.QueryAllowanceRequest): _63.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _63.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryAllowanceResponse;
                fromPartial(object: Partial<_63.QueryAllowanceResponse>): _63.QueryAllowanceResponse;
                fromAmino(object: _63.QueryAllowanceResponseAmino): _63.QueryAllowanceResponse;
                toAmino(message: _63.QueryAllowanceResponse): _63.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _63.QueryAllowanceResponseAminoMsg): _63.QueryAllowanceResponse;
                toAminoMsg(message: _63.QueryAllowanceResponse): _63.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _63.QueryAllowanceResponseProtoMsg): _63.QueryAllowanceResponse;
                toProto(message: _63.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _63.QueryAllowanceResponse): _63.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _63.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryAllowancesRequest;
                fromPartial(object: Partial<_63.QueryAllowancesRequest>): _63.QueryAllowancesRequest;
                fromAmino(object: _63.QueryAllowancesRequestAmino): _63.QueryAllowancesRequest;
                toAmino(message: _63.QueryAllowancesRequest): _63.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _63.QueryAllowancesRequestAminoMsg): _63.QueryAllowancesRequest;
                toAminoMsg(message: _63.QueryAllowancesRequest): _63.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _63.QueryAllowancesRequestProtoMsg): _63.QueryAllowancesRequest;
                toProto(message: _63.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _63.QueryAllowancesRequest): _63.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _63.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryAllowancesResponse;
                fromPartial(object: Partial<_63.QueryAllowancesResponse>): _63.QueryAllowancesResponse;
                fromAmino(object: _63.QueryAllowancesResponseAmino): _63.QueryAllowancesResponse;
                toAmino(message: _63.QueryAllowancesResponse): _63.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _63.QueryAllowancesResponseAminoMsg): _63.QueryAllowancesResponse;
                toAminoMsg(message: _63.QueryAllowancesResponse): _63.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _63.QueryAllowancesResponseProtoMsg): _63.QueryAllowancesResponse;
                toProto(message: _63.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _63.QueryAllowancesResponse): _63.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _63.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_63.QueryAllowancesByGranterRequest>): _63.QueryAllowancesByGranterRequest;
                fromAmino(object: _63.QueryAllowancesByGranterRequestAmino): _63.QueryAllowancesByGranterRequest;
                toAmino(message: _63.QueryAllowancesByGranterRequest): _63.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _63.QueryAllowancesByGranterRequestAminoMsg): _63.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _63.QueryAllowancesByGranterRequest): _63.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _63.QueryAllowancesByGranterRequestProtoMsg): _63.QueryAllowancesByGranterRequest;
                toProto(message: _63.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _63.QueryAllowancesByGranterRequest): _63.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _63.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_63.QueryAllowancesByGranterResponse>): _63.QueryAllowancesByGranterResponse;
                fromAmino(object: _63.QueryAllowancesByGranterResponseAmino): _63.QueryAllowancesByGranterResponse;
                toAmino(message: _63.QueryAllowancesByGranterResponse): _63.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _63.QueryAllowancesByGranterResponseAminoMsg): _63.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _63.QueryAllowancesByGranterResponse): _63.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _63.QueryAllowancesByGranterResponseProtoMsg): _63.QueryAllowancesByGranterResponse;
                toProto(message: _63.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _63.QueryAllowancesByGranterResponse): _63.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _62.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.GenesisState;
                fromPartial(object: Partial<_62.GenesisState>): _62.GenesisState;
                fromAmino(object: _62.GenesisStateAmino): _62.GenesisState;
                toAmino(message: _62.GenesisState): _62.GenesisStateAmino;
                fromAminoMsg(object: _62.GenesisStateAminoMsg): _62.GenesisState;
                toAminoMsg(message: _62.GenesisState): _62.GenesisStateAminoMsg;
                fromProtoMsg(message: _62.GenesisStateProtoMsg): _62.GenesisState;
                toProto(message: _62.GenesisState): Uint8Array;
                toProtoMsg(message: _62.GenesisState): _62.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _61.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.BasicAllowance;
                fromPartial(object: Partial<_61.BasicAllowance>): _61.BasicAllowance;
                fromAmino(object: _61.BasicAllowanceAmino): _61.BasicAllowance;
                toAmino(message: _61.BasicAllowance): _61.BasicAllowanceAmino;
                fromAminoMsg(object: _61.BasicAllowanceAminoMsg): _61.BasicAllowance;
                toAminoMsg(message: _61.BasicAllowance): _61.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _61.BasicAllowanceProtoMsg): _61.BasicAllowance;
                toProto(message: _61.BasicAllowance): Uint8Array;
                toProtoMsg(message: _61.BasicAllowance): _61.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _61.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.PeriodicAllowance;
                fromPartial(object: Partial<_61.PeriodicAllowance>): _61.PeriodicAllowance;
                fromAmino(object: _61.PeriodicAllowanceAmino): _61.PeriodicAllowance;
                toAmino(message: _61.PeriodicAllowance): _61.PeriodicAllowanceAmino;
                fromAminoMsg(object: _61.PeriodicAllowanceAminoMsg): _61.PeriodicAllowance;
                toAminoMsg(message: _61.PeriodicAllowance): _61.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _61.PeriodicAllowanceProtoMsg): _61.PeriodicAllowance;
                toProto(message: _61.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _61.PeriodicAllowance): _61.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _61.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.AllowedMsgAllowance;
                fromPartial(object: Partial<_61.AllowedMsgAllowance>): _61.AllowedMsgAllowance;
                fromAmino(object: _61.AllowedMsgAllowanceAmino): _61.AllowedMsgAllowance;
                toAmino(message: _61.AllowedMsgAllowance): _61.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _61.AllowedMsgAllowanceAminoMsg): _61.AllowedMsgAllowance;
                toAminoMsg(message: _61.AllowedMsgAllowance): _61.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _61.AllowedMsgAllowanceProtoMsg): _61.AllowedMsgAllowance;
                toProto(message: _61.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _61.AllowedMsgAllowance): _61.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _61.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.Grant;
                fromPartial(object: Partial<_61.Grant>): _61.Grant;
                fromAmino(object: _61.GrantAmino): _61.Grant;
                toAmino(message: _61.Grant): _61.GrantAmino;
                fromAminoMsg(object: _61.GrantAminoMsg): _61.Grant;
                toAminoMsg(message: _61.Grant): _61.GrantAminoMsg;
                fromProtoMsg(message: _61.GrantProtoMsg): _61.Grant;
                toProto(message: _61.Grant): Uint8Array;
                toProtoMsg(message: _61.Grant): _61.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _215.MsgClientImpl;
            QueryClientImpl: typeof _199.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _68.QueryProposalRequest): Promise<_68.QueryProposalResponse>;
                proposals(request: _68.QueryProposalsRequest): Promise<_68.QueryProposalsResponse>;
                vote(request: _68.QueryVoteRequest): Promise<_68.QueryVoteResponse>;
                votes(request: _68.QueryVotesRequest): Promise<_68.QueryVotesResponse>;
                params(request: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
                deposit(request: _68.QueryDepositRequest): Promise<_68.QueryDepositResponse>;
                deposits(request: _68.QueryDepositsRequest): Promise<_68.QueryDepositsResponse>;
                tallyResult(request: _68.QueryTallyResultRequest): Promise<_68.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _180.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _69.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _69.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _69.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _69.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _69.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _69.MsgExecLegacyContent;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: _69.MsgVote;
                    };
                    voteWeighted(value: _69.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _69.MsgVoteWeighted;
                    };
                    deposit(value: _69.MsgDeposit): {
                        typeUrl: string;
                        value: _69.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _69.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _69.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _69.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _69.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _69.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _69.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _69.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _69.MsgExecLegacyContent;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: _69.MsgVote;
                    };
                    voteWeighted(value: _69.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _69.MsgVoteWeighted;
                    };
                    deposit(value: _69.MsgDeposit): {
                        typeUrl: string;
                        value: _69.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _69.MsgSubmitProposal) => _69.MsgSubmitProposalAmino;
                    fromAmino: (object: _69.MsgSubmitProposalAmino) => _69.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _69.MsgExecLegacyContent) => _69.MsgExecLegacyContentAmino;
                    fromAmino: (object: _69.MsgExecLegacyContentAmino) => _69.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _69.MsgVote) => _69.MsgVoteAmino;
                    fromAmino: (object: _69.MsgVoteAmino) => _69.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _69.MsgVoteWeighted) => _69.MsgVoteWeightedAmino;
                    fromAmino: (object: _69.MsgVoteWeightedAmino) => _69.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _69.MsgDeposit) => _69.MsgDepositAmino;
                    fromAmino: (object: _69.MsgDepositAmino) => _69.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _69.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgSubmitProposal;
                fromPartial(object: Partial<_69.MsgSubmitProposal>): _69.MsgSubmitProposal;
                fromAmino(object: _69.MsgSubmitProposalAmino): _69.MsgSubmitProposal;
                toAmino(message: _69.MsgSubmitProposal): _69.MsgSubmitProposalAmino;
                fromAminoMsg(object: _69.MsgSubmitProposalAminoMsg): _69.MsgSubmitProposal;
                toAminoMsg(message: _69.MsgSubmitProposal): _69.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _69.MsgSubmitProposalProtoMsg): _69.MsgSubmitProposal;
                toProto(message: _69.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _69.MsgSubmitProposal): _69.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _69.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_69.MsgSubmitProposalResponse>): _69.MsgSubmitProposalResponse;
                fromAmino(object: _69.MsgSubmitProposalResponseAmino): _69.MsgSubmitProposalResponse;
                toAmino(message: _69.MsgSubmitProposalResponse): _69.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _69.MsgSubmitProposalResponseAminoMsg): _69.MsgSubmitProposalResponse;
                toAminoMsg(message: _69.MsgSubmitProposalResponse): _69.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _69.MsgSubmitProposalResponseProtoMsg): _69.MsgSubmitProposalResponse;
                toProto(message: _69.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _69.MsgSubmitProposalResponse): _69.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _69.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgExecLegacyContent;
                fromPartial(object: Partial<_69.MsgExecLegacyContent>): _69.MsgExecLegacyContent;
                fromAmino(object: _69.MsgExecLegacyContentAmino): _69.MsgExecLegacyContent;
                toAmino(message: _69.MsgExecLegacyContent): _69.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _69.MsgExecLegacyContentAminoMsg): _69.MsgExecLegacyContent;
                toAminoMsg(message: _69.MsgExecLegacyContent): _69.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _69.MsgExecLegacyContentProtoMsg): _69.MsgExecLegacyContent;
                toProto(message: _69.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _69.MsgExecLegacyContent): _69.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _69.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _69.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_69.MsgExecLegacyContentResponse>): _69.MsgExecLegacyContentResponse;
                fromAmino(_: _69.MsgExecLegacyContentResponseAmino): _69.MsgExecLegacyContentResponse;
                toAmino(_: _69.MsgExecLegacyContentResponse): _69.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _69.MsgExecLegacyContentResponseAminoMsg): _69.MsgExecLegacyContentResponse;
                toAminoMsg(message: _69.MsgExecLegacyContentResponse): _69.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _69.MsgExecLegacyContentResponseProtoMsg): _69.MsgExecLegacyContentResponse;
                toProto(message: _69.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _69.MsgExecLegacyContentResponse): _69.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _69.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgVote;
                fromPartial(object: Partial<_69.MsgVote>): _69.MsgVote;
                fromAmino(object: _69.MsgVoteAmino): _69.MsgVote;
                toAmino(message: _69.MsgVote): _69.MsgVoteAmino;
                fromAminoMsg(object: _69.MsgVoteAminoMsg): _69.MsgVote;
                toAminoMsg(message: _69.MsgVote): _69.MsgVoteAminoMsg;
                fromProtoMsg(message: _69.MsgVoteProtoMsg): _69.MsgVote;
                toProto(message: _69.MsgVote): Uint8Array;
                toProtoMsg(message: _69.MsgVote): _69.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _69.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _69.MsgVoteResponse;
                fromPartial(_: Partial<_69.MsgVoteResponse>): _69.MsgVoteResponse;
                fromAmino(_: _69.MsgVoteResponseAmino): _69.MsgVoteResponse;
                toAmino(_: _69.MsgVoteResponse): _69.MsgVoteResponseAmino;
                fromAminoMsg(object: _69.MsgVoteResponseAminoMsg): _69.MsgVoteResponse;
                toAminoMsg(message: _69.MsgVoteResponse): _69.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _69.MsgVoteResponseProtoMsg): _69.MsgVoteResponse;
                toProto(message: _69.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _69.MsgVoteResponse): _69.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _69.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgVoteWeighted;
                fromPartial(object: Partial<_69.MsgVoteWeighted>): _69.MsgVoteWeighted;
                fromAmino(object: _69.MsgVoteWeightedAmino): _69.MsgVoteWeighted;
                toAmino(message: _69.MsgVoteWeighted): _69.MsgVoteWeightedAmino;
                fromAminoMsg(object: _69.MsgVoteWeightedAminoMsg): _69.MsgVoteWeighted;
                toAminoMsg(message: _69.MsgVoteWeighted): _69.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _69.MsgVoteWeightedProtoMsg): _69.MsgVoteWeighted;
                toProto(message: _69.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _69.MsgVoteWeighted): _69.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _69.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _69.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_69.MsgVoteWeightedResponse>): _69.MsgVoteWeightedResponse;
                fromAmino(_: _69.MsgVoteWeightedResponseAmino): _69.MsgVoteWeightedResponse;
                toAmino(_: _69.MsgVoteWeightedResponse): _69.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _69.MsgVoteWeightedResponseAminoMsg): _69.MsgVoteWeightedResponse;
                toAminoMsg(message: _69.MsgVoteWeightedResponse): _69.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _69.MsgVoteWeightedResponseProtoMsg): _69.MsgVoteWeightedResponse;
                toProto(message: _69.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _69.MsgVoteWeightedResponse): _69.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _69.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgDeposit;
                fromPartial(object: Partial<_69.MsgDeposit>): _69.MsgDeposit;
                fromAmino(object: _69.MsgDepositAmino): _69.MsgDeposit;
                toAmino(message: _69.MsgDeposit): _69.MsgDepositAmino;
                fromAminoMsg(object: _69.MsgDepositAminoMsg): _69.MsgDeposit;
                toAminoMsg(message: _69.MsgDeposit): _69.MsgDepositAminoMsg;
                fromProtoMsg(message: _69.MsgDepositProtoMsg): _69.MsgDeposit;
                toProto(message: _69.MsgDeposit): Uint8Array;
                toProtoMsg(message: _69.MsgDeposit): _69.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _69.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _69.MsgDepositResponse;
                fromPartial(_: Partial<_69.MsgDepositResponse>): _69.MsgDepositResponse;
                fromAmino(_: _69.MsgDepositResponseAmino): _69.MsgDepositResponse;
                toAmino(_: _69.MsgDepositResponse): _69.MsgDepositResponseAmino;
                fromAminoMsg(object: _69.MsgDepositResponseAminoMsg): _69.MsgDepositResponse;
                toAminoMsg(message: _69.MsgDepositResponse): _69.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _69.MsgDepositResponseProtoMsg): _69.MsgDepositResponse;
                toProto(message: _69.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _69.MsgDepositResponse): _69.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _71.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _68.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryProposalRequest;
                fromPartial(object: Partial<_68.QueryProposalRequest>): _68.QueryProposalRequest;
                fromAmino(object: _68.QueryProposalRequestAmino): _68.QueryProposalRequest;
                toAmino(message: _68.QueryProposalRequest): _68.QueryProposalRequestAmino;
                fromAminoMsg(object: _68.QueryProposalRequestAminoMsg): _68.QueryProposalRequest;
                toAminoMsg(message: _68.QueryProposalRequest): _68.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _68.QueryProposalRequestProtoMsg): _68.QueryProposalRequest;
                toProto(message: _68.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _68.QueryProposalRequest): _68.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _68.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryProposalResponse;
                fromPartial(object: Partial<_68.QueryProposalResponse>): _68.QueryProposalResponse;
                fromAmino(object: _68.QueryProposalResponseAmino): _68.QueryProposalResponse;
                toAmino(message: _68.QueryProposalResponse): _68.QueryProposalResponseAmino;
                fromAminoMsg(object: _68.QueryProposalResponseAminoMsg): _68.QueryProposalResponse;
                toAminoMsg(message: _68.QueryProposalResponse): _68.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _68.QueryProposalResponseProtoMsg): _68.QueryProposalResponse;
                toProto(message: _68.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _68.QueryProposalResponse): _68.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _68.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryProposalsRequest;
                fromPartial(object: Partial<_68.QueryProposalsRequest>): _68.QueryProposalsRequest;
                fromAmino(object: _68.QueryProposalsRequestAmino): _68.QueryProposalsRequest;
                toAmino(message: _68.QueryProposalsRequest): _68.QueryProposalsRequestAmino;
                fromAminoMsg(object: _68.QueryProposalsRequestAminoMsg): _68.QueryProposalsRequest;
                toAminoMsg(message: _68.QueryProposalsRequest): _68.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _68.QueryProposalsRequestProtoMsg): _68.QueryProposalsRequest;
                toProto(message: _68.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _68.QueryProposalsRequest): _68.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _68.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryProposalsResponse;
                fromPartial(object: Partial<_68.QueryProposalsResponse>): _68.QueryProposalsResponse;
                fromAmino(object: _68.QueryProposalsResponseAmino): _68.QueryProposalsResponse;
                toAmino(message: _68.QueryProposalsResponse): _68.QueryProposalsResponseAmino;
                fromAminoMsg(object: _68.QueryProposalsResponseAminoMsg): _68.QueryProposalsResponse;
                toAminoMsg(message: _68.QueryProposalsResponse): _68.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _68.QueryProposalsResponseProtoMsg): _68.QueryProposalsResponse;
                toProto(message: _68.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _68.QueryProposalsResponse): _68.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _68.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryVoteRequest;
                fromPartial(object: Partial<_68.QueryVoteRequest>): _68.QueryVoteRequest;
                fromAmino(object: _68.QueryVoteRequestAmino): _68.QueryVoteRequest;
                toAmino(message: _68.QueryVoteRequest): _68.QueryVoteRequestAmino;
                fromAminoMsg(object: _68.QueryVoteRequestAminoMsg): _68.QueryVoteRequest;
                toAminoMsg(message: _68.QueryVoteRequest): _68.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _68.QueryVoteRequestProtoMsg): _68.QueryVoteRequest;
                toProto(message: _68.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _68.QueryVoteRequest): _68.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _68.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryVoteResponse;
                fromPartial(object: Partial<_68.QueryVoteResponse>): _68.QueryVoteResponse;
                fromAmino(object: _68.QueryVoteResponseAmino): _68.QueryVoteResponse;
                toAmino(message: _68.QueryVoteResponse): _68.QueryVoteResponseAmino;
                fromAminoMsg(object: _68.QueryVoteResponseAminoMsg): _68.QueryVoteResponse;
                toAminoMsg(message: _68.QueryVoteResponse): _68.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _68.QueryVoteResponseProtoMsg): _68.QueryVoteResponse;
                toProto(message: _68.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _68.QueryVoteResponse): _68.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _68.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryVotesRequest;
                fromPartial(object: Partial<_68.QueryVotesRequest>): _68.QueryVotesRequest;
                fromAmino(object: _68.QueryVotesRequestAmino): _68.QueryVotesRequest;
                toAmino(message: _68.QueryVotesRequest): _68.QueryVotesRequestAmino;
                fromAminoMsg(object: _68.QueryVotesRequestAminoMsg): _68.QueryVotesRequest;
                toAminoMsg(message: _68.QueryVotesRequest): _68.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _68.QueryVotesRequestProtoMsg): _68.QueryVotesRequest;
                toProto(message: _68.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _68.QueryVotesRequest): _68.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _68.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryVotesResponse;
                fromPartial(object: Partial<_68.QueryVotesResponse>): _68.QueryVotesResponse;
                fromAmino(object: _68.QueryVotesResponseAmino): _68.QueryVotesResponse;
                toAmino(message: _68.QueryVotesResponse): _68.QueryVotesResponseAmino;
                fromAminoMsg(object: _68.QueryVotesResponseAminoMsg): _68.QueryVotesResponse;
                toAminoMsg(message: _68.QueryVotesResponse): _68.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _68.QueryVotesResponseProtoMsg): _68.QueryVotesResponse;
                toProto(message: _68.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _68.QueryVotesResponse): _68.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _68.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryParamsRequest;
                fromPartial(object: Partial<_68.QueryParamsRequest>): _68.QueryParamsRequest;
                fromAmino(object: _68.QueryParamsRequestAmino): _68.QueryParamsRequest;
                toAmino(message: _68.QueryParamsRequest): _68.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _68.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryDepositRequest;
                fromPartial(object: Partial<_68.QueryDepositRequest>): _68.QueryDepositRequest;
                fromAmino(object: _68.QueryDepositRequestAmino): _68.QueryDepositRequest;
                toAmino(message: _68.QueryDepositRequest): _68.QueryDepositRequestAmino;
                fromAminoMsg(object: _68.QueryDepositRequestAminoMsg): _68.QueryDepositRequest;
                toAminoMsg(message: _68.QueryDepositRequest): _68.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _68.QueryDepositRequestProtoMsg): _68.QueryDepositRequest;
                toProto(message: _68.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _68.QueryDepositRequest): _68.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _68.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryDepositResponse;
                fromPartial(object: Partial<_68.QueryDepositResponse>): _68.QueryDepositResponse;
                fromAmino(object: _68.QueryDepositResponseAmino): _68.QueryDepositResponse;
                toAmino(message: _68.QueryDepositResponse): _68.QueryDepositResponseAmino;
                fromAminoMsg(object: _68.QueryDepositResponseAminoMsg): _68.QueryDepositResponse;
                toAminoMsg(message: _68.QueryDepositResponse): _68.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _68.QueryDepositResponseProtoMsg): _68.QueryDepositResponse;
                toProto(message: _68.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _68.QueryDepositResponse): _68.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _68.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryDepositsRequest;
                fromPartial(object: Partial<_68.QueryDepositsRequest>): _68.QueryDepositsRequest;
                fromAmino(object: _68.QueryDepositsRequestAmino): _68.QueryDepositsRequest;
                toAmino(message: _68.QueryDepositsRequest): _68.QueryDepositsRequestAmino;
                fromAminoMsg(object: _68.QueryDepositsRequestAminoMsg): _68.QueryDepositsRequest;
                toAminoMsg(message: _68.QueryDepositsRequest): _68.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _68.QueryDepositsRequestProtoMsg): _68.QueryDepositsRequest;
                toProto(message: _68.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _68.QueryDepositsRequest): _68.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _68.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryDepositsResponse;
                fromPartial(object: Partial<_68.QueryDepositsResponse>): _68.QueryDepositsResponse;
                fromAmino(object: _68.QueryDepositsResponseAmino): _68.QueryDepositsResponse;
                toAmino(message: _68.QueryDepositsResponse): _68.QueryDepositsResponseAmino;
                fromAminoMsg(object: _68.QueryDepositsResponseAminoMsg): _68.QueryDepositsResponse;
                toAminoMsg(message: _68.QueryDepositsResponse): _68.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _68.QueryDepositsResponseProtoMsg): _68.QueryDepositsResponse;
                toProto(message: _68.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _68.QueryDepositsResponse): _68.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _68.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryTallyResultRequest;
                fromPartial(object: Partial<_68.QueryTallyResultRequest>): _68.QueryTallyResultRequest;
                fromAmino(object: _68.QueryTallyResultRequestAmino): _68.QueryTallyResultRequest;
                toAmino(message: _68.QueryTallyResultRequest): _68.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _68.QueryTallyResultRequestAminoMsg): _68.QueryTallyResultRequest;
                toAminoMsg(message: _68.QueryTallyResultRequest): _68.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _68.QueryTallyResultRequestProtoMsg): _68.QueryTallyResultRequest;
                toProto(message: _68.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _68.QueryTallyResultRequest): _68.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _68.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryTallyResultResponse;
                fromPartial(object: Partial<_68.QueryTallyResultResponse>): _68.QueryTallyResultResponse;
                fromAmino(object: _68.QueryTallyResultResponseAmino): _68.QueryTallyResultResponse;
                toAmino(message: _68.QueryTallyResultResponse): _68.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _68.QueryTallyResultResponseAminoMsg): _68.QueryTallyResultResponse;
                toAminoMsg(message: _68.QueryTallyResultResponse): _68.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _68.QueryTallyResultResponseProtoMsg): _68.QueryTallyResultResponse;
                toProto(message: _68.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _68.QueryTallyResultResponse): _68.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _67.VoteOption;
            voteOptionToJSON(object: _67.VoteOption): string;
            proposalStatusFromJSON(object: any): _67.ProposalStatus;
            proposalStatusToJSON(object: _67.ProposalStatus): string;
            VoteOption: typeof _67.VoteOption;
            VoteOptionSDKType: typeof _67.VoteOption;
            VoteOptionAmino: typeof _67.VoteOption;
            ProposalStatus: typeof _67.ProposalStatus;
            ProposalStatusSDKType: typeof _67.ProposalStatus;
            ProposalStatusAmino: typeof _67.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _67.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.WeightedVoteOption;
                fromPartial(object: Partial<_67.WeightedVoteOption>): _67.WeightedVoteOption;
                fromAmino(object: _67.WeightedVoteOptionAmino): _67.WeightedVoteOption;
                toAmino(message: _67.WeightedVoteOption): _67.WeightedVoteOptionAmino;
                fromAminoMsg(object: _67.WeightedVoteOptionAminoMsg): _67.WeightedVoteOption;
                toAminoMsg(message: _67.WeightedVoteOption): _67.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _67.WeightedVoteOptionProtoMsg): _67.WeightedVoteOption;
                toProto(message: _67.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _67.WeightedVoteOption): _67.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _67.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.Deposit;
                fromPartial(object: Partial<_67.Deposit>): _67.Deposit;
                fromAmino(object: _67.DepositAmino): _67.Deposit;
                toAmino(message: _67.Deposit): _67.DepositAmino;
                fromAminoMsg(object: _67.DepositAminoMsg): _67.Deposit;
                toAminoMsg(message: _67.Deposit): _67.DepositAminoMsg;
                fromProtoMsg(message: _67.DepositProtoMsg): _67.Deposit;
                toProto(message: _67.Deposit): Uint8Array;
                toProtoMsg(message: _67.Deposit): _67.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _67.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.Proposal;
                fromPartial(object: Partial<_67.Proposal>): _67.Proposal;
                fromAmino(object: _67.ProposalAmino): _67.Proposal;
                toAmino(message: _67.Proposal): _67.ProposalAmino;
                fromAminoMsg(object: _67.ProposalAminoMsg): _67.Proposal;
                toAminoMsg(message: _67.Proposal): _67.ProposalAminoMsg;
                fromProtoMsg(message: _67.ProposalProtoMsg): _67.Proposal;
                toProto(message: _67.Proposal): Uint8Array;
                toProtoMsg(message: _67.Proposal): _67.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _67.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.TallyResult;
                fromPartial(object: Partial<_67.TallyResult>): _67.TallyResult;
                fromAmino(object: _67.TallyResultAmino): _67.TallyResult;
                toAmino(message: _67.TallyResult): _67.TallyResultAmino;
                fromAminoMsg(object: _67.TallyResultAminoMsg): _67.TallyResult;
                toAminoMsg(message: _67.TallyResult): _67.TallyResultAminoMsg;
                fromProtoMsg(message: _67.TallyResultProtoMsg): _67.TallyResult;
                toProto(message: _67.TallyResult): Uint8Array;
                toProtoMsg(message: _67.TallyResult): _67.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _67.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.Vote;
                fromPartial(object: Partial<_67.Vote>): _67.Vote;
                fromAmino(object: _67.VoteAmino): _67.Vote;
                toAmino(message: _67.Vote): _67.VoteAmino;
                fromAminoMsg(object: _67.VoteAminoMsg): _67.Vote;
                toAminoMsg(message: _67.Vote): _67.VoteAminoMsg;
                fromProtoMsg(message: _67.VoteProtoMsg): _67.Vote;
                toProto(message: _67.Vote): Uint8Array;
                toProtoMsg(message: _67.Vote): _67.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _67.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.DepositParams;
                fromPartial(object: Partial<_67.DepositParams>): _67.DepositParams;
                fromAmino(object: _67.DepositParamsAmino): _67.DepositParams;
                toAmino(message: _67.DepositParams): _67.DepositParamsAmino;
                fromAminoMsg(object: _67.DepositParamsAminoMsg): _67.DepositParams;
                toAminoMsg(message: _67.DepositParams): _67.DepositParamsAminoMsg;
                fromProtoMsg(message: _67.DepositParamsProtoMsg): _67.DepositParams;
                toProto(message: _67.DepositParams): Uint8Array;
                toProtoMsg(message: _67.DepositParams): _67.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _67.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.VotingParams;
                fromPartial(object: Partial<_67.VotingParams>): _67.VotingParams;
                fromAmino(object: _67.VotingParamsAmino): _67.VotingParams;
                toAmino(message: _67.VotingParams): _67.VotingParamsAmino;
                fromAminoMsg(object: _67.VotingParamsAminoMsg): _67.VotingParams;
                toAminoMsg(message: _67.VotingParams): _67.VotingParamsAminoMsg;
                fromProtoMsg(message: _67.VotingParamsProtoMsg): _67.VotingParams;
                toProto(message: _67.VotingParams): Uint8Array;
                toProtoMsg(message: _67.VotingParams): _67.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _67.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.TallyParams;
                fromPartial(object: Partial<_67.TallyParams>): _67.TallyParams;
                fromAmino(object: _67.TallyParamsAmino): _67.TallyParams;
                toAmino(message: _67.TallyParams): _67.TallyParamsAmino;
                fromAminoMsg(object: _67.TallyParamsAminoMsg): _67.TallyParams;
                toAminoMsg(message: _67.TallyParams): _67.TallyParamsAminoMsg;
                fromProtoMsg(message: _67.TallyParamsProtoMsg): _67.TallyParams;
                toProto(message: _67.TallyParams): Uint8Array;
                toProtoMsg(message: _67.TallyParams): _67.TallyParamsProtoMsg;
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
        };
        const v1beta1: {
            MsgClientImpl: typeof _216.MsgClientImpl;
            QueryClientImpl: typeof _200.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _72.QueryProposalRequest): Promise<_72.QueryProposalResponse>;
                proposals(request: _72.QueryProposalsRequest): Promise<_72.QueryProposalsResponse>;
                vote(request: _72.QueryVoteRequest): Promise<_72.QueryVoteResponse>;
                votes(request: _72.QueryVotesRequest): Promise<_72.QueryVotesResponse>;
                params(request: _72.QueryParamsRequest): Promise<_72.QueryParamsResponse>;
                deposit(request: _72.QueryDepositRequest): Promise<_72.QueryDepositResponse>;
                deposits(request: _72.QueryDepositsRequest): Promise<_72.QueryDepositsResponse>;
                tallyResult(request: _72.QueryTallyResultRequest): Promise<_72.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _181.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _73.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _73.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _73.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _73.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _73.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _73.MsgSubmitProposal;
                    };
                    vote(value: _73.MsgVote): {
                        typeUrl: string;
                        value: _73.MsgVote;
                    };
                    voteWeighted(value: _73.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _73.MsgVoteWeighted;
                    };
                    deposit(value: _73.MsgDeposit): {
                        typeUrl: string;
                        value: _73.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _73.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _73.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _73.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _73.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _73.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _73.MsgSubmitProposal;
                    };
                    vote(value: _73.MsgVote): {
                        typeUrl: string;
                        value: _73.MsgVote;
                    };
                    voteWeighted(value: _73.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _73.MsgVoteWeighted;
                    };
                    deposit(value: _73.MsgDeposit): {
                        typeUrl: string;
                        value: _73.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _73.MsgSubmitProposal) => _73.MsgSubmitProposalAmino;
                    fromAmino: (object: _73.MsgSubmitProposalAmino) => _73.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _73.MsgVote) => _73.MsgVoteAmino;
                    fromAmino: (object: _73.MsgVoteAmino) => _73.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _73.MsgVoteWeighted) => _73.MsgVoteWeightedAmino;
                    fromAmino: (object: _73.MsgVoteWeightedAmino) => _73.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _73.MsgDeposit) => _73.MsgDepositAmino;
                    fromAmino: (object: _73.MsgDepositAmino) => _73.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _73.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.MsgSubmitProposal;
                fromPartial(object: Partial<_73.MsgSubmitProposal>): _73.MsgSubmitProposal;
                fromAmino(object: _73.MsgSubmitProposalAmino): _73.MsgSubmitProposal;
                toAmino(message: _73.MsgSubmitProposal): _73.MsgSubmitProposalAmino;
                fromAminoMsg(object: _73.MsgSubmitProposalAminoMsg): _73.MsgSubmitProposal;
                toAminoMsg(message: _73.MsgSubmitProposal): _73.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _73.MsgSubmitProposalProtoMsg): _73.MsgSubmitProposal;
                toProto(message: _73.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _73.MsgSubmitProposal): _73.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _73.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_73.MsgSubmitProposalResponse>): _73.MsgSubmitProposalResponse;
                fromAmino(object: _73.MsgSubmitProposalResponseAmino): _73.MsgSubmitProposalResponse;
                toAmino(message: _73.MsgSubmitProposalResponse): _73.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _73.MsgSubmitProposalResponseAminoMsg): _73.MsgSubmitProposalResponse;
                toAminoMsg(message: _73.MsgSubmitProposalResponse): _73.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _73.MsgSubmitProposalResponseProtoMsg): _73.MsgSubmitProposalResponse;
                toProto(message: _73.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _73.MsgSubmitProposalResponse): _73.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _73.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.MsgVote;
                fromPartial(object: Partial<_73.MsgVote>): _73.MsgVote;
                fromAmino(object: _73.MsgVoteAmino): _73.MsgVote;
                toAmino(message: _73.MsgVote): _73.MsgVoteAmino;
                fromAminoMsg(object: _73.MsgVoteAminoMsg): _73.MsgVote;
                toAminoMsg(message: _73.MsgVote): _73.MsgVoteAminoMsg;
                fromProtoMsg(message: _73.MsgVoteProtoMsg): _73.MsgVote;
                toProto(message: _73.MsgVote): Uint8Array;
                toProtoMsg(message: _73.MsgVote): _73.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _73.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _73.MsgVoteResponse;
                fromPartial(_: Partial<_73.MsgVoteResponse>): _73.MsgVoteResponse;
                fromAmino(_: _73.MsgVoteResponseAmino): _73.MsgVoteResponse;
                toAmino(_: _73.MsgVoteResponse): _73.MsgVoteResponseAmino;
                fromAminoMsg(object: _73.MsgVoteResponseAminoMsg): _73.MsgVoteResponse;
                toAminoMsg(message: _73.MsgVoteResponse): _73.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _73.MsgVoteResponseProtoMsg): _73.MsgVoteResponse;
                toProto(message: _73.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _73.MsgVoteResponse): _73.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _73.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.MsgVoteWeighted;
                fromPartial(object: Partial<_73.MsgVoteWeighted>): _73.MsgVoteWeighted;
                fromAmino(object: _73.MsgVoteWeightedAmino): _73.MsgVoteWeighted;
                toAmino(message: _73.MsgVoteWeighted): _73.MsgVoteWeightedAmino;
                fromAminoMsg(object: _73.MsgVoteWeightedAminoMsg): _73.MsgVoteWeighted;
                toAminoMsg(message: _73.MsgVoteWeighted): _73.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _73.MsgVoteWeightedProtoMsg): _73.MsgVoteWeighted;
                toProto(message: _73.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _73.MsgVoteWeighted): _73.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _73.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _73.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_73.MsgVoteWeightedResponse>): _73.MsgVoteWeightedResponse;
                fromAmino(_: _73.MsgVoteWeightedResponseAmino): _73.MsgVoteWeightedResponse;
                toAmino(_: _73.MsgVoteWeightedResponse): _73.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _73.MsgVoteWeightedResponseAminoMsg): _73.MsgVoteWeightedResponse;
                toAminoMsg(message: _73.MsgVoteWeightedResponse): _73.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _73.MsgVoteWeightedResponseProtoMsg): _73.MsgVoteWeightedResponse;
                toProto(message: _73.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _73.MsgVoteWeightedResponse): _73.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _73.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.MsgDeposit;
                fromPartial(object: Partial<_73.MsgDeposit>): _73.MsgDeposit;
                fromAmino(object: _73.MsgDepositAmino): _73.MsgDeposit;
                toAmino(message: _73.MsgDeposit): _73.MsgDepositAmino;
                fromAminoMsg(object: _73.MsgDepositAminoMsg): _73.MsgDeposit;
                toAminoMsg(message: _73.MsgDeposit): _73.MsgDepositAminoMsg;
                fromProtoMsg(message: _73.MsgDepositProtoMsg): _73.MsgDeposit;
                toProto(message: _73.MsgDeposit): Uint8Array;
                toProtoMsg(message: _73.MsgDeposit): _73.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _73.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _73.MsgDepositResponse;
                fromPartial(_: Partial<_73.MsgDepositResponse>): _73.MsgDepositResponse;
                fromAmino(_: _73.MsgDepositResponseAmino): _73.MsgDepositResponse;
                toAmino(_: _73.MsgDepositResponse): _73.MsgDepositResponseAmino;
                fromAminoMsg(object: _73.MsgDepositResponseAminoMsg): _73.MsgDepositResponse;
                toAminoMsg(message: _73.MsgDepositResponse): _73.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _73.MsgDepositResponseProtoMsg): _73.MsgDepositResponse;
                toProto(message: _73.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _73.MsgDepositResponse): _73.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _71.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _72.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryProposalRequest;
                fromPartial(object: Partial<_72.QueryProposalRequest>): _72.QueryProposalRequest;
                fromAmino(object: _72.QueryProposalRequestAmino): _72.QueryProposalRequest;
                toAmino(message: _72.QueryProposalRequest): _72.QueryProposalRequestAmino;
                fromAminoMsg(object: _72.QueryProposalRequestAminoMsg): _72.QueryProposalRequest;
                toAminoMsg(message: _72.QueryProposalRequest): _72.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _72.QueryProposalRequestProtoMsg): _72.QueryProposalRequest;
                toProto(message: _72.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _72.QueryProposalRequest): _72.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _72.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryProposalResponse;
                fromPartial(object: Partial<_72.QueryProposalResponse>): _72.QueryProposalResponse;
                fromAmino(object: _72.QueryProposalResponseAmino): _72.QueryProposalResponse;
                toAmino(message: _72.QueryProposalResponse): _72.QueryProposalResponseAmino;
                fromAminoMsg(object: _72.QueryProposalResponseAminoMsg): _72.QueryProposalResponse;
                toAminoMsg(message: _72.QueryProposalResponse): _72.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _72.QueryProposalResponseProtoMsg): _72.QueryProposalResponse;
                toProto(message: _72.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _72.QueryProposalResponse): _72.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _72.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryProposalsRequest;
                fromPartial(object: Partial<_72.QueryProposalsRequest>): _72.QueryProposalsRequest;
                fromAmino(object: _72.QueryProposalsRequestAmino): _72.QueryProposalsRequest;
                toAmino(message: _72.QueryProposalsRequest): _72.QueryProposalsRequestAmino;
                fromAminoMsg(object: _72.QueryProposalsRequestAminoMsg): _72.QueryProposalsRequest;
                toAminoMsg(message: _72.QueryProposalsRequest): _72.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _72.QueryProposalsRequestProtoMsg): _72.QueryProposalsRequest;
                toProto(message: _72.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _72.QueryProposalsRequest): _72.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _72.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryProposalsResponse;
                fromPartial(object: Partial<_72.QueryProposalsResponse>): _72.QueryProposalsResponse;
                fromAmino(object: _72.QueryProposalsResponseAmino): _72.QueryProposalsResponse;
                toAmino(message: _72.QueryProposalsResponse): _72.QueryProposalsResponseAmino;
                fromAminoMsg(object: _72.QueryProposalsResponseAminoMsg): _72.QueryProposalsResponse;
                toAminoMsg(message: _72.QueryProposalsResponse): _72.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _72.QueryProposalsResponseProtoMsg): _72.QueryProposalsResponse;
                toProto(message: _72.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _72.QueryProposalsResponse): _72.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _72.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryVoteRequest;
                fromPartial(object: Partial<_72.QueryVoteRequest>): _72.QueryVoteRequest;
                fromAmino(object: _72.QueryVoteRequestAmino): _72.QueryVoteRequest;
                toAmino(message: _72.QueryVoteRequest): _72.QueryVoteRequestAmino;
                fromAminoMsg(object: _72.QueryVoteRequestAminoMsg): _72.QueryVoteRequest;
                toAminoMsg(message: _72.QueryVoteRequest): _72.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _72.QueryVoteRequestProtoMsg): _72.QueryVoteRequest;
                toProto(message: _72.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _72.QueryVoteRequest): _72.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _72.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryVoteResponse;
                fromPartial(object: Partial<_72.QueryVoteResponse>): _72.QueryVoteResponse;
                fromAmino(object: _72.QueryVoteResponseAmino): _72.QueryVoteResponse;
                toAmino(message: _72.QueryVoteResponse): _72.QueryVoteResponseAmino;
                fromAminoMsg(object: _72.QueryVoteResponseAminoMsg): _72.QueryVoteResponse;
                toAminoMsg(message: _72.QueryVoteResponse): _72.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _72.QueryVoteResponseProtoMsg): _72.QueryVoteResponse;
                toProto(message: _72.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _72.QueryVoteResponse): _72.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _72.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryVotesRequest;
                fromPartial(object: Partial<_72.QueryVotesRequest>): _72.QueryVotesRequest;
                fromAmino(object: _72.QueryVotesRequestAmino): _72.QueryVotesRequest;
                toAmino(message: _72.QueryVotesRequest): _72.QueryVotesRequestAmino;
                fromAminoMsg(object: _72.QueryVotesRequestAminoMsg): _72.QueryVotesRequest;
                toAminoMsg(message: _72.QueryVotesRequest): _72.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _72.QueryVotesRequestProtoMsg): _72.QueryVotesRequest;
                toProto(message: _72.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _72.QueryVotesRequest): _72.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _72.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryVotesResponse;
                fromPartial(object: Partial<_72.QueryVotesResponse>): _72.QueryVotesResponse;
                fromAmino(object: _72.QueryVotesResponseAmino): _72.QueryVotesResponse;
                toAmino(message: _72.QueryVotesResponse): _72.QueryVotesResponseAmino;
                fromAminoMsg(object: _72.QueryVotesResponseAminoMsg): _72.QueryVotesResponse;
                toAminoMsg(message: _72.QueryVotesResponse): _72.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _72.QueryVotesResponseProtoMsg): _72.QueryVotesResponse;
                toProto(message: _72.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _72.QueryVotesResponse): _72.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _72.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryParamsRequest;
                fromPartial(object: Partial<_72.QueryParamsRequest>): _72.QueryParamsRequest;
                fromAmino(object: _72.QueryParamsRequestAmino): _72.QueryParamsRequest;
                toAmino(message: _72.QueryParamsRequest): _72.QueryParamsRequestAmino;
                fromAminoMsg(object: _72.QueryParamsRequestAminoMsg): _72.QueryParamsRequest;
                toAminoMsg(message: _72.QueryParamsRequest): _72.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _72.QueryParamsRequestProtoMsg): _72.QueryParamsRequest;
                toProto(message: _72.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _72.QueryParamsRequest): _72.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _72.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryParamsResponse;
                fromPartial(object: Partial<_72.QueryParamsResponse>): _72.QueryParamsResponse;
                fromAmino(object: _72.QueryParamsResponseAmino): _72.QueryParamsResponse;
                toAmino(message: _72.QueryParamsResponse): _72.QueryParamsResponseAmino;
                fromAminoMsg(object: _72.QueryParamsResponseAminoMsg): _72.QueryParamsResponse;
                toAminoMsg(message: _72.QueryParamsResponse): _72.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _72.QueryParamsResponseProtoMsg): _72.QueryParamsResponse;
                toProto(message: _72.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _72.QueryParamsResponse): _72.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _72.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryDepositRequest;
                fromPartial(object: Partial<_72.QueryDepositRequest>): _72.QueryDepositRequest;
                fromAmino(object: _72.QueryDepositRequestAmino): _72.QueryDepositRequest;
                toAmino(message: _72.QueryDepositRequest): _72.QueryDepositRequestAmino;
                fromAminoMsg(object: _72.QueryDepositRequestAminoMsg): _72.QueryDepositRequest;
                toAminoMsg(message: _72.QueryDepositRequest): _72.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _72.QueryDepositRequestProtoMsg): _72.QueryDepositRequest;
                toProto(message: _72.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _72.QueryDepositRequest): _72.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _72.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryDepositResponse;
                fromPartial(object: Partial<_72.QueryDepositResponse>): _72.QueryDepositResponse;
                fromAmino(object: _72.QueryDepositResponseAmino): _72.QueryDepositResponse;
                toAmino(message: _72.QueryDepositResponse): _72.QueryDepositResponseAmino;
                fromAminoMsg(object: _72.QueryDepositResponseAminoMsg): _72.QueryDepositResponse;
                toAminoMsg(message: _72.QueryDepositResponse): _72.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _72.QueryDepositResponseProtoMsg): _72.QueryDepositResponse;
                toProto(message: _72.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _72.QueryDepositResponse): _72.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _72.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryDepositsRequest;
                fromPartial(object: Partial<_72.QueryDepositsRequest>): _72.QueryDepositsRequest;
                fromAmino(object: _72.QueryDepositsRequestAmino): _72.QueryDepositsRequest;
                toAmino(message: _72.QueryDepositsRequest): _72.QueryDepositsRequestAmino;
                fromAminoMsg(object: _72.QueryDepositsRequestAminoMsg): _72.QueryDepositsRequest;
                toAminoMsg(message: _72.QueryDepositsRequest): _72.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _72.QueryDepositsRequestProtoMsg): _72.QueryDepositsRequest;
                toProto(message: _72.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _72.QueryDepositsRequest): _72.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _72.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryDepositsResponse;
                fromPartial(object: Partial<_72.QueryDepositsResponse>): _72.QueryDepositsResponse;
                fromAmino(object: _72.QueryDepositsResponseAmino): _72.QueryDepositsResponse;
                toAmino(message: _72.QueryDepositsResponse): _72.QueryDepositsResponseAmino;
                fromAminoMsg(object: _72.QueryDepositsResponseAminoMsg): _72.QueryDepositsResponse;
                toAminoMsg(message: _72.QueryDepositsResponse): _72.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _72.QueryDepositsResponseProtoMsg): _72.QueryDepositsResponse;
                toProto(message: _72.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _72.QueryDepositsResponse): _72.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _72.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryTallyResultRequest;
                fromPartial(object: Partial<_72.QueryTallyResultRequest>): _72.QueryTallyResultRequest;
                fromAmino(object: _72.QueryTallyResultRequestAmino): _72.QueryTallyResultRequest;
                toAmino(message: _72.QueryTallyResultRequest): _72.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _72.QueryTallyResultRequestAminoMsg): _72.QueryTallyResultRequest;
                toAminoMsg(message: _72.QueryTallyResultRequest): _72.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _72.QueryTallyResultRequestProtoMsg): _72.QueryTallyResultRequest;
                toProto(message: _72.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _72.QueryTallyResultRequest): _72.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _72.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryTallyResultResponse;
                fromPartial(object: Partial<_72.QueryTallyResultResponse>): _72.QueryTallyResultResponse;
                fromAmino(object: _72.QueryTallyResultResponseAmino): _72.QueryTallyResultResponse;
                toAmino(message: _72.QueryTallyResultResponse): _72.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _72.QueryTallyResultResponseAminoMsg): _72.QueryTallyResultResponse;
                toAminoMsg(message: _72.QueryTallyResultResponse): _72.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _72.QueryTallyResultResponseProtoMsg): _72.QueryTallyResultResponse;
                toProto(message: _72.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _72.QueryTallyResultResponse): _72.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _71.VoteOption;
            voteOptionToJSON(object: _71.VoteOption): string;
            proposalStatusFromJSON(object: any): _71.ProposalStatus;
            proposalStatusToJSON(object: _71.ProposalStatus): string;
            VoteOption: typeof _71.VoteOption;
            VoteOptionSDKType: typeof _71.VoteOption;
            VoteOptionAmino: typeof _71.VoteOption;
            ProposalStatus: typeof _71.ProposalStatus;
            ProposalStatusSDKType: typeof _71.ProposalStatus;
            ProposalStatusAmino: typeof _71.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _71.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.WeightedVoteOption;
                fromPartial(object: Partial<_71.WeightedVoteOption>): _71.WeightedVoteOption;
                fromAmino(object: _71.WeightedVoteOptionAmino): _71.WeightedVoteOption;
                toAmino(message: _71.WeightedVoteOption): _71.WeightedVoteOptionAmino;
                fromAminoMsg(object: _71.WeightedVoteOptionAminoMsg): _71.WeightedVoteOption;
                toAminoMsg(message: _71.WeightedVoteOption): _71.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _71.WeightedVoteOptionProtoMsg): _71.WeightedVoteOption;
                toProto(message: _71.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _71.WeightedVoteOption): _71.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _71.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.TextProposal;
                fromPartial(object: Partial<_71.TextProposal>): _71.TextProposal;
                fromAmino(object: _71.TextProposalAmino): _71.TextProposal;
                toAmino(message: _71.TextProposal): _71.TextProposalAmino;
                fromAminoMsg(object: _71.TextProposalAminoMsg): _71.TextProposal;
                toAminoMsg(message: _71.TextProposal): _71.TextProposalAminoMsg;
                fromProtoMsg(message: _71.TextProposalProtoMsg): _71.TextProposal;
                toProto(message: _71.TextProposal): Uint8Array;
                toProtoMsg(message: _71.TextProposal): _71.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _71.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Deposit;
                fromPartial(object: Partial<_71.Deposit>): _71.Deposit;
                fromAmino(object: _71.DepositAmino): _71.Deposit;
                toAmino(message: _71.Deposit): _71.DepositAmino;
                fromAminoMsg(object: _71.DepositAminoMsg): _71.Deposit;
                toAminoMsg(message: _71.Deposit): _71.DepositAminoMsg;
                fromProtoMsg(message: _71.DepositProtoMsg): _71.Deposit;
                toProto(message: _71.Deposit): Uint8Array;
                toProtoMsg(message: _71.Deposit): _71.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _71.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Proposal;
                fromPartial(object: Partial<_71.Proposal>): _71.Proposal;
                fromAmino(object: _71.ProposalAmino): _71.Proposal;
                toAmino(message: _71.Proposal): _71.ProposalAmino;
                fromAminoMsg(object: _71.ProposalAminoMsg): _71.Proposal;
                toAminoMsg(message: _71.Proposal): _71.ProposalAminoMsg;
                fromProtoMsg(message: _71.ProposalProtoMsg): _71.Proposal;
                toProto(message: _71.Proposal): Uint8Array;
                toProtoMsg(message: _71.Proposal): _71.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _71.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.TallyResult;
                fromPartial(object: Partial<_71.TallyResult>): _71.TallyResult;
                fromAmino(object: _71.TallyResultAmino): _71.TallyResult;
                toAmino(message: _71.TallyResult): _71.TallyResultAmino;
                fromAminoMsg(object: _71.TallyResultAminoMsg): _71.TallyResult;
                toAminoMsg(message: _71.TallyResult): _71.TallyResultAminoMsg;
                fromProtoMsg(message: _71.TallyResultProtoMsg): _71.TallyResult;
                toProto(message: _71.TallyResult): Uint8Array;
                toProtoMsg(message: _71.TallyResult): _71.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _71.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Vote;
                fromPartial(object: Partial<_71.Vote>): _71.Vote;
                fromAmino(object: _71.VoteAmino): _71.Vote;
                toAmino(message: _71.Vote): _71.VoteAmino;
                fromAminoMsg(object: _71.VoteAminoMsg): _71.Vote;
                toAminoMsg(message: _71.Vote): _71.VoteAminoMsg;
                fromProtoMsg(message: _71.VoteProtoMsg): _71.Vote;
                toProto(message: _71.Vote): Uint8Array;
                toProtoMsg(message: _71.Vote): _71.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _71.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.DepositParams;
                fromPartial(object: Partial<_71.DepositParams>): _71.DepositParams;
                fromAmino(object: _71.DepositParamsAmino): _71.DepositParams;
                toAmino(message: _71.DepositParams): _71.DepositParamsAmino;
                fromAminoMsg(object: _71.DepositParamsAminoMsg): _71.DepositParams;
                toAminoMsg(message: _71.DepositParams): _71.DepositParamsAminoMsg;
                fromProtoMsg(message: _71.DepositParamsProtoMsg): _71.DepositParams;
                toProto(message: _71.DepositParams): Uint8Array;
                toProtoMsg(message: _71.DepositParams): _71.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _71.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.VotingParams;
                fromPartial(object: Partial<_71.VotingParams>): _71.VotingParams;
                fromAmino(object: _71.VotingParamsAmino): _71.VotingParams;
                toAmino(message: _71.VotingParams): _71.VotingParamsAmino;
                fromAminoMsg(object: _71.VotingParamsAminoMsg): _71.VotingParams;
                toAminoMsg(message: _71.VotingParams): _71.VotingParamsAminoMsg;
                fromProtoMsg(message: _71.VotingParamsProtoMsg): _71.VotingParams;
                toProto(message: _71.VotingParams): Uint8Array;
                toProtoMsg(message: _71.VotingParams): _71.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _71.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.TallyParams;
                fromPartial(object: Partial<_71.TallyParams>): _71.TallyParams;
                fromAmino(object: _71.TallyParamsAmino): _71.TallyParams;
                toAmino(message: _71.TallyParams): _71.TallyParamsAmino;
                fromAminoMsg(object: _71.TallyParamsAminoMsg): _71.TallyParams;
                toAminoMsg(message: _71.TallyParams): _71.TallyParamsAminoMsg;
                fromProtoMsg(message: _71.TallyParamsProtoMsg): _71.TallyParams;
                toProto(message: _71.TallyParams): Uint8Array;
                toProtoMsg(message: _71.TallyParams): _71.TallyParamsProtoMsg;
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
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _217.MsgClientImpl;
            QueryClientImpl: typeof _201.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _76.QueryGroupInfoRequest): Promise<_76.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _76.QueryGroupPolicyInfoRequest): Promise<_76.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _76.QueryGroupMembersRequest): Promise<_76.QueryGroupMembersResponse>;
                groupsByAdmin(request: _76.QueryGroupsByAdminRequest): Promise<_76.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _76.QueryGroupPoliciesByGroupRequest): Promise<_76.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _76.QueryGroupPoliciesByAdminRequest): Promise<_76.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _76.QueryProposalRequest): Promise<_76.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _76.QueryProposalsByGroupPolicyRequest): Promise<_76.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _76.QueryVoteByProposalVoterRequest): Promise<_76.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _76.QueryVotesByProposalRequest): Promise<_76.QueryVotesByProposalResponse>;
                votesByVoter(request: _76.QueryVotesByVoterRequest): Promise<_76.QueryVotesByVoterResponse>;
                groupsByMember(request: _76.QueryGroupsByMemberRequest): Promise<_76.QueryGroupsByMemberResponse>;
                tallyResult(request: _76.QueryTallyResultRequest): Promise<_76.QueryTallyResultResponse>;
                groups(request?: _76.QueryGroupsRequest): Promise<_76.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _182.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _77.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _77.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _77.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _77.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _77.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _77.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _77.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _77.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _77.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _77.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _77.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _77.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _77.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _77.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _77.MsgCreateGroup): {
                        typeUrl: string;
                        value: _77.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _77.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _77.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _77.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _77.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _77.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _77.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _77.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _77.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _77.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _77.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _77.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _77.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _77.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _77.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _77.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _77.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _77.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _77.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _77.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _77.MsgWithdrawProposal;
                    };
                    vote(value: _77.MsgVote): {
                        typeUrl: string;
                        value: _77.MsgVote;
                    };
                    exec(value: _77.MsgExec): {
                        typeUrl: string;
                        value: _77.MsgExec;
                    };
                    leaveGroup(value: _77.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _77.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _77.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _77.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _77.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _77.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _77.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _77.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _77.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _77.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _77.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _77.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _77.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _77.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _77.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _77.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _77.MsgCreateGroup): {
                        typeUrl: string;
                        value: _77.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _77.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _77.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _77.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _77.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _77.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _77.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _77.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _77.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _77.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _77.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _77.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _77.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _77.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _77.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _77.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _77.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _77.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _77.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _77.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _77.MsgWithdrawProposal;
                    };
                    vote(value: _77.MsgVote): {
                        typeUrl: string;
                        value: _77.MsgVote;
                    };
                    exec(value: _77.MsgExec): {
                        typeUrl: string;
                        value: _77.MsgExec;
                    };
                    leaveGroup(value: _77.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _77.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _77.MsgCreateGroup) => _77.MsgCreateGroupAmino;
                    fromAmino: (object: _77.MsgCreateGroupAmino) => _77.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _77.MsgUpdateGroupMembers) => _77.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _77.MsgUpdateGroupMembersAmino) => _77.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _77.MsgUpdateGroupAdmin) => _77.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _77.MsgUpdateGroupAdminAmino) => _77.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _77.MsgUpdateGroupMetadata) => _77.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _77.MsgUpdateGroupMetadataAmino) => _77.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _77.MsgCreateGroupPolicy) => _77.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _77.MsgCreateGroupPolicyAmino) => _77.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _77.MsgCreateGroupWithPolicy) => _77.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _77.MsgCreateGroupWithPolicyAmino) => _77.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _77.MsgUpdateGroupPolicyAdmin) => _77.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _77.MsgUpdateGroupPolicyAdminAmino) => _77.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _77.MsgUpdateGroupPolicyDecisionPolicy) => _77.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _77.MsgUpdateGroupPolicyDecisionPolicyAmino) => _77.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _77.MsgUpdateGroupPolicyMetadata) => _77.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _77.MsgUpdateGroupPolicyMetadataAmino) => _77.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _77.MsgSubmitProposal) => _77.MsgSubmitProposalAmino;
                    fromAmino: (object: _77.MsgSubmitProposalAmino) => _77.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _77.MsgWithdrawProposal) => _77.MsgWithdrawProposalAmino;
                    fromAmino: (object: _77.MsgWithdrawProposalAmino) => _77.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _77.MsgVote) => _77.MsgVoteAmino;
                    fromAmino: (object: _77.MsgVoteAmino) => _77.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _77.MsgExec) => _77.MsgExecAmino;
                    fromAmino: (object: _77.MsgExecAmino) => _77.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _77.MsgLeaveGroup) => _77.MsgLeaveGroupAmino;
                    fromAmino: (object: _77.MsgLeaveGroupAmino) => _77.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _78.VoteOption;
            voteOptionToJSON(object: _78.VoteOption): string;
            proposalStatusFromJSON(object: any): _78.ProposalStatus;
            proposalStatusToJSON(object: _78.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _78.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _78.ProposalExecutorResult): string;
            VoteOption: typeof _78.VoteOption;
            VoteOptionSDKType: typeof _78.VoteOption;
            VoteOptionAmino: typeof _78.VoteOption;
            ProposalStatus: typeof _78.ProposalStatus;
            ProposalStatusSDKType: typeof _78.ProposalStatus;
            ProposalStatusAmino: typeof _78.ProposalStatus;
            ProposalExecutorResult: typeof _78.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _78.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _78.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _78.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Member;
                fromPartial(object: Partial<_78.Member>): _78.Member;
                fromAmino(object: _78.MemberAmino): _78.Member;
                toAmino(message: _78.Member): _78.MemberAmino;
                fromAminoMsg(object: _78.MemberAminoMsg): _78.Member;
                toAminoMsg(message: _78.Member): _78.MemberAminoMsg;
                fromProtoMsg(message: _78.MemberProtoMsg): _78.Member;
                toProto(message: _78.Member): Uint8Array;
                toProtoMsg(message: _78.Member): _78.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _78.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MemberRequest;
                fromPartial(object: Partial<_78.MemberRequest>): _78.MemberRequest;
                fromAmino(object: _78.MemberRequestAmino): _78.MemberRequest;
                toAmino(message: _78.MemberRequest): _78.MemberRequestAmino;
                fromAminoMsg(object: _78.MemberRequestAminoMsg): _78.MemberRequest;
                toAminoMsg(message: _78.MemberRequest): _78.MemberRequestAminoMsg;
                fromProtoMsg(message: _78.MemberRequestProtoMsg): _78.MemberRequest;
                toProto(message: _78.MemberRequest): Uint8Array;
                toProtoMsg(message: _78.MemberRequest): _78.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _78.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_78.ThresholdDecisionPolicy>): _78.ThresholdDecisionPolicy;
                fromAmino(object: _78.ThresholdDecisionPolicyAmino): _78.ThresholdDecisionPolicy;
                toAmino(message: _78.ThresholdDecisionPolicy): _78.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _78.ThresholdDecisionPolicyAminoMsg): _78.ThresholdDecisionPolicy;
                toAminoMsg(message: _78.ThresholdDecisionPolicy): _78.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _78.ThresholdDecisionPolicyProtoMsg): _78.ThresholdDecisionPolicy;
                toProto(message: _78.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _78.ThresholdDecisionPolicy): _78.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _78.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.PercentageDecisionPolicy;
                fromPartial(object: Partial<_78.PercentageDecisionPolicy>): _78.PercentageDecisionPolicy;
                fromAmino(object: _78.PercentageDecisionPolicyAmino): _78.PercentageDecisionPolicy;
                toAmino(message: _78.PercentageDecisionPolicy): _78.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _78.PercentageDecisionPolicyAminoMsg): _78.PercentageDecisionPolicy;
                toAminoMsg(message: _78.PercentageDecisionPolicy): _78.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _78.PercentageDecisionPolicyProtoMsg): _78.PercentageDecisionPolicy;
                toProto(message: _78.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _78.PercentageDecisionPolicy): _78.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _78.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.DecisionPolicyWindows;
                fromPartial(object: Partial<_78.DecisionPolicyWindows>): _78.DecisionPolicyWindows;
                fromAmino(object: _78.DecisionPolicyWindowsAmino): _78.DecisionPolicyWindows;
                toAmino(message: _78.DecisionPolicyWindows): _78.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _78.DecisionPolicyWindowsAminoMsg): _78.DecisionPolicyWindows;
                toAminoMsg(message: _78.DecisionPolicyWindows): _78.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _78.DecisionPolicyWindowsProtoMsg): _78.DecisionPolicyWindows;
                toProto(message: _78.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _78.DecisionPolicyWindows): _78.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _78.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.GroupInfo;
                fromPartial(object: Partial<_78.GroupInfo>): _78.GroupInfo;
                fromAmino(object: _78.GroupInfoAmino): _78.GroupInfo;
                toAmino(message: _78.GroupInfo): _78.GroupInfoAmino;
                fromAminoMsg(object: _78.GroupInfoAminoMsg): _78.GroupInfo;
                toAminoMsg(message: _78.GroupInfo): _78.GroupInfoAminoMsg;
                fromProtoMsg(message: _78.GroupInfoProtoMsg): _78.GroupInfo;
                toProto(message: _78.GroupInfo): Uint8Array;
                toProtoMsg(message: _78.GroupInfo): _78.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _78.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.GroupMember;
                fromPartial(object: Partial<_78.GroupMember>): _78.GroupMember;
                fromAmino(object: _78.GroupMemberAmino): _78.GroupMember;
                toAmino(message: _78.GroupMember): _78.GroupMemberAmino;
                fromAminoMsg(object: _78.GroupMemberAminoMsg): _78.GroupMember;
                toAminoMsg(message: _78.GroupMember): _78.GroupMemberAminoMsg;
                fromProtoMsg(message: _78.GroupMemberProtoMsg): _78.GroupMember;
                toProto(message: _78.GroupMember): Uint8Array;
                toProtoMsg(message: _78.GroupMember): _78.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _78.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.GroupPolicyInfo;
                fromPartial(object: Partial<_78.GroupPolicyInfo>): _78.GroupPolicyInfo;
                fromAmino(object: _78.GroupPolicyInfoAmino): _78.GroupPolicyInfo;
                toAmino(message: _78.GroupPolicyInfo): _78.GroupPolicyInfoAmino;
                fromAminoMsg(object: _78.GroupPolicyInfoAminoMsg): _78.GroupPolicyInfo;
                toAminoMsg(message: _78.GroupPolicyInfo): _78.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _78.GroupPolicyInfoProtoMsg): _78.GroupPolicyInfo;
                toProto(message: _78.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _78.GroupPolicyInfo): _78.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _78.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Proposal;
                fromPartial(object: Partial<_78.Proposal>): _78.Proposal;
                fromAmino(object: _78.ProposalAmino): _78.Proposal;
                toAmino(message: _78.Proposal): _78.ProposalAmino;
                fromAminoMsg(object: _78.ProposalAminoMsg): _78.Proposal;
                toAminoMsg(message: _78.Proposal): _78.ProposalAminoMsg;
                fromProtoMsg(message: _78.ProposalProtoMsg): _78.Proposal;
                toProto(message: _78.Proposal): Uint8Array;
                toProtoMsg(message: _78.Proposal): _78.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _78.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.TallyResult;
                fromPartial(object: Partial<_78.TallyResult>): _78.TallyResult;
                fromAmino(object: _78.TallyResultAmino): _78.TallyResult;
                toAmino(message: _78.TallyResult): _78.TallyResultAmino;
                fromAminoMsg(object: _78.TallyResultAminoMsg): _78.TallyResult;
                toAminoMsg(message: _78.TallyResult): _78.TallyResultAminoMsg;
                fromProtoMsg(message: _78.TallyResultProtoMsg): _78.TallyResult;
                toProto(message: _78.TallyResult): Uint8Array;
                toProtoMsg(message: _78.TallyResult): _78.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _78.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Vote;
                fromPartial(object: Partial<_78.Vote>): _78.Vote;
                fromAmino(object: _78.VoteAmino): _78.Vote;
                toAmino(message: _78.Vote): _78.VoteAmino;
                fromAminoMsg(object: _78.VoteAminoMsg): _78.Vote;
                toAminoMsg(message: _78.Vote): _78.VoteAminoMsg;
                fromProtoMsg(message: _78.VoteProtoMsg): _78.Vote;
                toProto(message: _78.Vote): Uint8Array;
                toProtoMsg(message: _78.Vote): _78.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _77.Exec;
            execToJSON(object: _77.Exec): string;
            Exec: typeof _77.Exec;
            ExecSDKType: typeof _77.Exec;
            ExecAmino: typeof _77.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _77.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgCreateGroup;
                fromPartial(object: Partial<_77.MsgCreateGroup>): _77.MsgCreateGroup;
                fromAmino(object: _77.MsgCreateGroupAmino): _77.MsgCreateGroup;
                toAmino(message: _77.MsgCreateGroup): _77.MsgCreateGroupAmino;
                fromAminoMsg(object: _77.MsgCreateGroupAminoMsg): _77.MsgCreateGroup;
                toAminoMsg(message: _77.MsgCreateGroup): _77.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _77.MsgCreateGroupProtoMsg): _77.MsgCreateGroup;
                toProto(message: _77.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _77.MsgCreateGroup): _77.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _77.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgCreateGroupResponse;
                fromPartial(object: Partial<_77.MsgCreateGroupResponse>): _77.MsgCreateGroupResponse;
                fromAmino(object: _77.MsgCreateGroupResponseAmino): _77.MsgCreateGroupResponse;
                toAmino(message: _77.MsgCreateGroupResponse): _77.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _77.MsgCreateGroupResponseAminoMsg): _77.MsgCreateGroupResponse;
                toAminoMsg(message: _77.MsgCreateGroupResponse): _77.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _77.MsgCreateGroupResponseProtoMsg): _77.MsgCreateGroupResponse;
                toProto(message: _77.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _77.MsgCreateGroupResponse): _77.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _77.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_77.MsgUpdateGroupMembers>): _77.MsgUpdateGroupMembers;
                fromAmino(object: _77.MsgUpdateGroupMembersAmino): _77.MsgUpdateGroupMembers;
                toAmino(message: _77.MsgUpdateGroupMembers): _77.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _77.MsgUpdateGroupMembersAminoMsg): _77.MsgUpdateGroupMembers;
                toAminoMsg(message: _77.MsgUpdateGroupMembers): _77.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _77.MsgUpdateGroupMembersProtoMsg): _77.MsgUpdateGroupMembers;
                toProto(message: _77.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _77.MsgUpdateGroupMembers): _77.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _77.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_77.MsgUpdateGroupMembersResponse>): _77.MsgUpdateGroupMembersResponse;
                fromAmino(_: _77.MsgUpdateGroupMembersResponseAmino): _77.MsgUpdateGroupMembersResponse;
                toAmino(_: _77.MsgUpdateGroupMembersResponse): _77.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _77.MsgUpdateGroupMembersResponseAminoMsg): _77.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _77.MsgUpdateGroupMembersResponse): _77.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _77.MsgUpdateGroupMembersResponseProtoMsg): _77.MsgUpdateGroupMembersResponse;
                toProto(message: _77.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _77.MsgUpdateGroupMembersResponse): _77.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _77.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_77.MsgUpdateGroupAdmin>): _77.MsgUpdateGroupAdmin;
                fromAmino(object: _77.MsgUpdateGroupAdminAmino): _77.MsgUpdateGroupAdmin;
                toAmino(message: _77.MsgUpdateGroupAdmin): _77.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _77.MsgUpdateGroupAdminAminoMsg): _77.MsgUpdateGroupAdmin;
                toAminoMsg(message: _77.MsgUpdateGroupAdmin): _77.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _77.MsgUpdateGroupAdminProtoMsg): _77.MsgUpdateGroupAdmin;
                toProto(message: _77.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _77.MsgUpdateGroupAdmin): _77.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _77.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_77.MsgUpdateGroupAdminResponse>): _77.MsgUpdateGroupAdminResponse;
                fromAmino(_: _77.MsgUpdateGroupAdminResponseAmino): _77.MsgUpdateGroupAdminResponse;
                toAmino(_: _77.MsgUpdateGroupAdminResponse): _77.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _77.MsgUpdateGroupAdminResponseAminoMsg): _77.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _77.MsgUpdateGroupAdminResponse): _77.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _77.MsgUpdateGroupAdminResponseProtoMsg): _77.MsgUpdateGroupAdminResponse;
                toProto(message: _77.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _77.MsgUpdateGroupAdminResponse): _77.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _77.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_77.MsgUpdateGroupMetadata>): _77.MsgUpdateGroupMetadata;
                fromAmino(object: _77.MsgUpdateGroupMetadataAmino): _77.MsgUpdateGroupMetadata;
                toAmino(message: _77.MsgUpdateGroupMetadata): _77.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _77.MsgUpdateGroupMetadataAminoMsg): _77.MsgUpdateGroupMetadata;
                toAminoMsg(message: _77.MsgUpdateGroupMetadata): _77.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _77.MsgUpdateGroupMetadataProtoMsg): _77.MsgUpdateGroupMetadata;
                toProto(message: _77.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _77.MsgUpdateGroupMetadata): _77.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _77.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_77.MsgUpdateGroupMetadataResponse>): _77.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _77.MsgUpdateGroupMetadataResponseAmino): _77.MsgUpdateGroupMetadataResponse;
                toAmino(_: _77.MsgUpdateGroupMetadataResponse): _77.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _77.MsgUpdateGroupMetadataResponseAminoMsg): _77.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _77.MsgUpdateGroupMetadataResponse): _77.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _77.MsgUpdateGroupMetadataResponseProtoMsg): _77.MsgUpdateGroupMetadataResponse;
                toProto(message: _77.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _77.MsgUpdateGroupMetadataResponse): _77.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _77.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_77.MsgCreateGroupPolicy>): _77.MsgCreateGroupPolicy;
                fromAmino(object: _77.MsgCreateGroupPolicyAmino): _77.MsgCreateGroupPolicy;
                toAmino(message: _77.MsgCreateGroupPolicy): _77.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _77.MsgCreateGroupPolicyAminoMsg): _77.MsgCreateGroupPolicy;
                toAminoMsg(message: _77.MsgCreateGroupPolicy): _77.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _77.MsgCreateGroupPolicyProtoMsg): _77.MsgCreateGroupPolicy;
                toProto(message: _77.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _77.MsgCreateGroupPolicy): _77.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _77.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_77.MsgCreateGroupPolicyResponse>): _77.MsgCreateGroupPolicyResponse;
                fromAmino(object: _77.MsgCreateGroupPolicyResponseAmino): _77.MsgCreateGroupPolicyResponse;
                toAmino(message: _77.MsgCreateGroupPolicyResponse): _77.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _77.MsgCreateGroupPolicyResponseAminoMsg): _77.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _77.MsgCreateGroupPolicyResponse): _77.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _77.MsgCreateGroupPolicyResponseProtoMsg): _77.MsgCreateGroupPolicyResponse;
                toProto(message: _77.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _77.MsgCreateGroupPolicyResponse): _77.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _77.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_77.MsgUpdateGroupPolicyAdmin>): _77.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _77.MsgUpdateGroupPolicyAdminAmino): _77.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _77.MsgUpdateGroupPolicyAdmin): _77.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _77.MsgUpdateGroupPolicyAdminAminoMsg): _77.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _77.MsgUpdateGroupPolicyAdmin): _77.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _77.MsgUpdateGroupPolicyAdminProtoMsg): _77.MsgUpdateGroupPolicyAdmin;
                toProto(message: _77.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _77.MsgUpdateGroupPolicyAdmin): _77.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _77.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_77.MsgCreateGroupWithPolicy>): _77.MsgCreateGroupWithPolicy;
                fromAmino(object: _77.MsgCreateGroupWithPolicyAmino): _77.MsgCreateGroupWithPolicy;
                toAmino(message: _77.MsgCreateGroupWithPolicy): _77.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _77.MsgCreateGroupWithPolicyAminoMsg): _77.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _77.MsgCreateGroupWithPolicy): _77.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _77.MsgCreateGroupWithPolicyProtoMsg): _77.MsgCreateGroupWithPolicy;
                toProto(message: _77.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _77.MsgCreateGroupWithPolicy): _77.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _77.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_77.MsgCreateGroupWithPolicyResponse>): _77.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _77.MsgCreateGroupWithPolicyResponseAmino): _77.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _77.MsgCreateGroupWithPolicyResponse): _77.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _77.MsgCreateGroupWithPolicyResponseAminoMsg): _77.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _77.MsgCreateGroupWithPolicyResponse): _77.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _77.MsgCreateGroupWithPolicyResponseProtoMsg): _77.MsgCreateGroupWithPolicyResponse;
                toProto(message: _77.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _77.MsgCreateGroupWithPolicyResponse): _77.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _77.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_77.MsgUpdateGroupPolicyAdminResponse>): _77.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _77.MsgUpdateGroupPolicyAdminResponseAmino): _77.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _77.MsgUpdateGroupPolicyAdminResponse): _77.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _77.MsgUpdateGroupPolicyAdminResponseAminoMsg): _77.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _77.MsgUpdateGroupPolicyAdminResponse): _77.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _77.MsgUpdateGroupPolicyAdminResponseProtoMsg): _77.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _77.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _77.MsgUpdateGroupPolicyAdminResponse): _77.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _77.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_77.MsgUpdateGroupPolicyDecisionPolicy>): _77.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _77.MsgUpdateGroupPolicyDecisionPolicyAmino): _77.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _77.MsgUpdateGroupPolicyDecisionPolicy): _77.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _77.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _77.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _77.MsgUpdateGroupPolicyDecisionPolicy): _77.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _77.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _77.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _77.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _77.MsgUpdateGroupPolicyDecisionPolicy): _77.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _77.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_77.MsgUpdateGroupPolicyDecisionPolicyResponse>): _77.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _77.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _77.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _77.MsgUpdateGroupPolicyDecisionPolicyResponse): _77.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _77.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _77.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _77.MsgUpdateGroupPolicyDecisionPolicyResponse): _77.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _77.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _77.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _77.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _77.MsgUpdateGroupPolicyDecisionPolicyResponse): _77.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _77.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_77.MsgUpdateGroupPolicyMetadata>): _77.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _77.MsgUpdateGroupPolicyMetadataAmino): _77.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _77.MsgUpdateGroupPolicyMetadata): _77.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _77.MsgUpdateGroupPolicyMetadataAminoMsg): _77.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _77.MsgUpdateGroupPolicyMetadata): _77.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _77.MsgUpdateGroupPolicyMetadataProtoMsg): _77.MsgUpdateGroupPolicyMetadata;
                toProto(message: _77.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _77.MsgUpdateGroupPolicyMetadata): _77.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _77.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_77.MsgUpdateGroupPolicyMetadataResponse>): _77.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _77.MsgUpdateGroupPolicyMetadataResponseAmino): _77.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _77.MsgUpdateGroupPolicyMetadataResponse): _77.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _77.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _77.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _77.MsgUpdateGroupPolicyMetadataResponse): _77.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _77.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _77.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _77.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _77.MsgUpdateGroupPolicyMetadataResponse): _77.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _77.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgSubmitProposal;
                fromPartial(object: Partial<_77.MsgSubmitProposal>): _77.MsgSubmitProposal;
                fromAmino(object: _77.MsgSubmitProposalAmino): _77.MsgSubmitProposal;
                toAmino(message: _77.MsgSubmitProposal): _77.MsgSubmitProposalAmino;
                fromAminoMsg(object: _77.MsgSubmitProposalAminoMsg): _77.MsgSubmitProposal;
                toAminoMsg(message: _77.MsgSubmitProposal): _77.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _77.MsgSubmitProposalProtoMsg): _77.MsgSubmitProposal;
                toProto(message: _77.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _77.MsgSubmitProposal): _77.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _77.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_77.MsgSubmitProposalResponse>): _77.MsgSubmitProposalResponse;
                fromAmino(object: _77.MsgSubmitProposalResponseAmino): _77.MsgSubmitProposalResponse;
                toAmino(message: _77.MsgSubmitProposalResponse): _77.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _77.MsgSubmitProposalResponseAminoMsg): _77.MsgSubmitProposalResponse;
                toAminoMsg(message: _77.MsgSubmitProposalResponse): _77.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _77.MsgSubmitProposalResponseProtoMsg): _77.MsgSubmitProposalResponse;
                toProto(message: _77.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _77.MsgSubmitProposalResponse): _77.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _77.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgWithdrawProposal;
                fromPartial(object: Partial<_77.MsgWithdrawProposal>): _77.MsgWithdrawProposal;
                fromAmino(object: _77.MsgWithdrawProposalAmino): _77.MsgWithdrawProposal;
                toAmino(message: _77.MsgWithdrawProposal): _77.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _77.MsgWithdrawProposalAminoMsg): _77.MsgWithdrawProposal;
                toAminoMsg(message: _77.MsgWithdrawProposal): _77.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _77.MsgWithdrawProposalProtoMsg): _77.MsgWithdrawProposal;
                toProto(message: _77.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _77.MsgWithdrawProposal): _77.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _77.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_77.MsgWithdrawProposalResponse>): _77.MsgWithdrawProposalResponse;
                fromAmino(_: _77.MsgWithdrawProposalResponseAmino): _77.MsgWithdrawProposalResponse;
                toAmino(_: _77.MsgWithdrawProposalResponse): _77.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _77.MsgWithdrawProposalResponseAminoMsg): _77.MsgWithdrawProposalResponse;
                toAminoMsg(message: _77.MsgWithdrawProposalResponse): _77.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _77.MsgWithdrawProposalResponseProtoMsg): _77.MsgWithdrawProposalResponse;
                toProto(message: _77.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _77.MsgWithdrawProposalResponse): _77.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _77.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgVote;
                fromPartial(object: Partial<_77.MsgVote>): _77.MsgVote;
                fromAmino(object: _77.MsgVoteAmino): _77.MsgVote;
                toAmino(message: _77.MsgVote): _77.MsgVoteAmino;
                fromAminoMsg(object: _77.MsgVoteAminoMsg): _77.MsgVote;
                toAminoMsg(message: _77.MsgVote): _77.MsgVoteAminoMsg;
                fromProtoMsg(message: _77.MsgVoteProtoMsg): _77.MsgVote;
                toProto(message: _77.MsgVote): Uint8Array;
                toProtoMsg(message: _77.MsgVote): _77.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _77.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.MsgVoteResponse;
                fromPartial(_: Partial<_77.MsgVoteResponse>): _77.MsgVoteResponse;
                fromAmino(_: _77.MsgVoteResponseAmino): _77.MsgVoteResponse;
                toAmino(_: _77.MsgVoteResponse): _77.MsgVoteResponseAmino;
                fromAminoMsg(object: _77.MsgVoteResponseAminoMsg): _77.MsgVoteResponse;
                toAminoMsg(message: _77.MsgVoteResponse): _77.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _77.MsgVoteResponseProtoMsg): _77.MsgVoteResponse;
                toProto(message: _77.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _77.MsgVoteResponse): _77.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _77.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgExec;
                fromPartial(object: Partial<_77.MsgExec>): _77.MsgExec;
                fromAmino(object: _77.MsgExecAmino): _77.MsgExec;
                toAmino(message: _77.MsgExec): _77.MsgExecAmino;
                fromAminoMsg(object: _77.MsgExecAminoMsg): _77.MsgExec;
                toAminoMsg(message: _77.MsgExec): _77.MsgExecAminoMsg;
                fromProtoMsg(message: _77.MsgExecProtoMsg): _77.MsgExec;
                toProto(message: _77.MsgExec): Uint8Array;
                toProtoMsg(message: _77.MsgExec): _77.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _77.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgExecResponse;
                fromPartial(object: Partial<_77.MsgExecResponse>): _77.MsgExecResponse;
                fromAmino(object: _77.MsgExecResponseAmino): _77.MsgExecResponse;
                toAmino(message: _77.MsgExecResponse): _77.MsgExecResponseAmino;
                fromAminoMsg(object: _77.MsgExecResponseAminoMsg): _77.MsgExecResponse;
                toAminoMsg(message: _77.MsgExecResponse): _77.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _77.MsgExecResponseProtoMsg): _77.MsgExecResponse;
                toProto(message: _77.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _77.MsgExecResponse): _77.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _77.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgLeaveGroup;
                fromPartial(object: Partial<_77.MsgLeaveGroup>): _77.MsgLeaveGroup;
                fromAmino(object: _77.MsgLeaveGroupAmino): _77.MsgLeaveGroup;
                toAmino(message: _77.MsgLeaveGroup): _77.MsgLeaveGroupAmino;
                fromAminoMsg(object: _77.MsgLeaveGroupAminoMsg): _77.MsgLeaveGroup;
                toAminoMsg(message: _77.MsgLeaveGroup): _77.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _77.MsgLeaveGroupProtoMsg): _77.MsgLeaveGroup;
                toProto(message: _77.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _77.MsgLeaveGroup): _77.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _77.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_77.MsgLeaveGroupResponse>): _77.MsgLeaveGroupResponse;
                fromAmino(_: _77.MsgLeaveGroupResponseAmino): _77.MsgLeaveGroupResponse;
                toAmino(_: _77.MsgLeaveGroupResponse): _77.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _77.MsgLeaveGroupResponseAminoMsg): _77.MsgLeaveGroupResponse;
                toAminoMsg(message: _77.MsgLeaveGroupResponse): _77.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _77.MsgLeaveGroupResponseProtoMsg): _77.MsgLeaveGroupResponse;
                toProto(message: _77.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _77.MsgLeaveGroupResponse): _77.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _76.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryGroupInfoRequest;
                fromPartial(object: Partial<_76.QueryGroupInfoRequest>): _76.QueryGroupInfoRequest;
                fromAmino(object: _76.QueryGroupInfoRequestAmino): _76.QueryGroupInfoRequest;
                toAmino(message: _76.QueryGroupInfoRequest): _76.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _76.QueryGroupInfoRequestAminoMsg): _76.QueryGroupInfoRequest;
                toAminoMsg(message: _76.QueryGroupInfoRequest): _76.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _76.QueryGroupInfoRequestProtoMsg): _76.QueryGroupInfoRequest;
                toProto(message: _76.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _76.QueryGroupInfoRequest): _76.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _76.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryGroupInfoResponse;
                fromPartial(object: Partial<_76.QueryGroupInfoResponse>): _76.QueryGroupInfoResponse;
                fromAmino(object: _76.QueryGroupInfoResponseAmino): _76.QueryGroupInfoResponse;
                toAmino(message: _76.QueryGroupInfoResponse): _76.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _76.QueryGroupInfoResponseAminoMsg): _76.QueryGroupInfoResponse;
                toAminoMsg(message: _76.QueryGroupInfoResponse): _76.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _76.QueryGroupInfoResponseProtoMsg): _76.QueryGroupInfoResponse;
                toProto(message: _76.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _76.QueryGroupInfoResponse): _76.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _76.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_76.QueryGroupPolicyInfoRequest>): _76.QueryGroupPolicyInfoRequest;
                fromAmino(object: _76.QueryGroupPolicyInfoRequestAmino): _76.QueryGroupPolicyInfoRequest;
                toAmino(message: _76.QueryGroupPolicyInfoRequest): _76.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _76.QueryGroupPolicyInfoRequestAminoMsg): _76.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _76.QueryGroupPolicyInfoRequest): _76.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _76.QueryGroupPolicyInfoRequestProtoMsg): _76.QueryGroupPolicyInfoRequest;
                toProto(message: _76.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _76.QueryGroupPolicyInfoRequest): _76.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _76.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_76.QueryGroupPolicyInfoResponse>): _76.QueryGroupPolicyInfoResponse;
                fromAmino(object: _76.QueryGroupPolicyInfoResponseAmino): _76.QueryGroupPolicyInfoResponse;
                toAmino(message: _76.QueryGroupPolicyInfoResponse): _76.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _76.QueryGroupPolicyInfoResponseAminoMsg): _76.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _76.QueryGroupPolicyInfoResponse): _76.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _76.QueryGroupPolicyInfoResponseProtoMsg): _76.QueryGroupPolicyInfoResponse;
                toProto(message: _76.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _76.QueryGroupPolicyInfoResponse): _76.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _76.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryGroupMembersRequest;
                fromPartial(object: Partial<_76.QueryGroupMembersRequest>): _76.QueryGroupMembersRequest;
                fromAmino(object: _76.QueryGroupMembersRequestAmino): _76.QueryGroupMembersRequest;
                toAmino(message: _76.QueryGroupMembersRequest): _76.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _76.QueryGroupMembersRequestAminoMsg): _76.QueryGroupMembersRequest;
                toAminoMsg(message: _76.QueryGroupMembersRequest): _76.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _76.QueryGroupMembersRequestProtoMsg): _76.QueryGroupMembersRequest;
                toProto(message: _76.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _76.QueryGroupMembersRequest): _76.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _76.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryGroupMembersResponse;
                fromPartial(object: Partial<_76.QueryGroupMembersResponse>): _76.QueryGroupMembersResponse;
                fromAmino(object: _76.QueryGroupMembersResponseAmino): _76.QueryGroupMembersResponse;
                toAmino(message: _76.QueryGroupMembersResponse): _76.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _76.QueryGroupMembersResponseAminoMsg): _76.QueryGroupMembersResponse;
                toAminoMsg(message: _76.QueryGroupMembersResponse): _76.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _76.QueryGroupMembersResponseProtoMsg): _76.QueryGroupMembersResponse;
                toProto(message: _76.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _76.QueryGroupMembersResponse): _76.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _76.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_76.QueryGroupsByAdminRequest>): _76.QueryGroupsByAdminRequest;
                fromAmino(object: _76.QueryGroupsByAdminRequestAmino): _76.QueryGroupsByAdminRequest;
                toAmino(message: _76.QueryGroupsByAdminRequest): _76.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _76.QueryGroupsByAdminRequestAminoMsg): _76.QueryGroupsByAdminRequest;
                toAminoMsg(message: _76.QueryGroupsByAdminRequest): _76.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _76.QueryGroupsByAdminRequestProtoMsg): _76.QueryGroupsByAdminRequest;
                toProto(message: _76.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _76.QueryGroupsByAdminRequest): _76.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _76.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_76.QueryGroupsByAdminResponse>): _76.QueryGroupsByAdminResponse;
                fromAmino(object: _76.QueryGroupsByAdminResponseAmino): _76.QueryGroupsByAdminResponse;
                toAmino(message: _76.QueryGroupsByAdminResponse): _76.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _76.QueryGroupsByAdminResponseAminoMsg): _76.QueryGroupsByAdminResponse;
                toAminoMsg(message: _76.QueryGroupsByAdminResponse): _76.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _76.QueryGroupsByAdminResponseProtoMsg): _76.QueryGroupsByAdminResponse;
                toProto(message: _76.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _76.QueryGroupsByAdminResponse): _76.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _76.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_76.QueryGroupPoliciesByGroupRequest>): _76.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _76.QueryGroupPoliciesByGroupRequestAmino): _76.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _76.QueryGroupPoliciesByGroupRequest): _76.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _76.QueryGroupPoliciesByGroupRequestAminoMsg): _76.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _76.QueryGroupPoliciesByGroupRequest): _76.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _76.QueryGroupPoliciesByGroupRequestProtoMsg): _76.QueryGroupPoliciesByGroupRequest;
                toProto(message: _76.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _76.QueryGroupPoliciesByGroupRequest): _76.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _76.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_76.QueryGroupPoliciesByGroupResponse>): _76.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _76.QueryGroupPoliciesByGroupResponseAmino): _76.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _76.QueryGroupPoliciesByGroupResponse): _76.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _76.QueryGroupPoliciesByGroupResponseAminoMsg): _76.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _76.QueryGroupPoliciesByGroupResponse): _76.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _76.QueryGroupPoliciesByGroupResponseProtoMsg): _76.QueryGroupPoliciesByGroupResponse;
                toProto(message: _76.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _76.QueryGroupPoliciesByGroupResponse): _76.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _76.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_76.QueryGroupPoliciesByAdminRequest>): _76.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _76.QueryGroupPoliciesByAdminRequestAmino): _76.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _76.QueryGroupPoliciesByAdminRequest): _76.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _76.QueryGroupPoliciesByAdminRequestAminoMsg): _76.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _76.QueryGroupPoliciesByAdminRequest): _76.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _76.QueryGroupPoliciesByAdminRequestProtoMsg): _76.QueryGroupPoliciesByAdminRequest;
                toProto(message: _76.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _76.QueryGroupPoliciesByAdminRequest): _76.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _76.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_76.QueryGroupPoliciesByAdminResponse>): _76.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _76.QueryGroupPoliciesByAdminResponseAmino): _76.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _76.QueryGroupPoliciesByAdminResponse): _76.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _76.QueryGroupPoliciesByAdminResponseAminoMsg): _76.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _76.QueryGroupPoliciesByAdminResponse): _76.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _76.QueryGroupPoliciesByAdminResponseProtoMsg): _76.QueryGroupPoliciesByAdminResponse;
                toProto(message: _76.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _76.QueryGroupPoliciesByAdminResponse): _76.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _76.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryProposalRequest;
                fromPartial(object: Partial<_76.QueryProposalRequest>): _76.QueryProposalRequest;
                fromAmino(object: _76.QueryProposalRequestAmino): _76.QueryProposalRequest;
                toAmino(message: _76.QueryProposalRequest): _76.QueryProposalRequestAmino;
                fromAminoMsg(object: _76.QueryProposalRequestAminoMsg): _76.QueryProposalRequest;
                toAminoMsg(message: _76.QueryProposalRequest): _76.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _76.QueryProposalRequestProtoMsg): _76.QueryProposalRequest;
                toProto(message: _76.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _76.QueryProposalRequest): _76.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _76.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryProposalResponse;
                fromPartial(object: Partial<_76.QueryProposalResponse>): _76.QueryProposalResponse;
                fromAmino(object: _76.QueryProposalResponseAmino): _76.QueryProposalResponse;
                toAmino(message: _76.QueryProposalResponse): _76.QueryProposalResponseAmino;
                fromAminoMsg(object: _76.QueryProposalResponseAminoMsg): _76.QueryProposalResponse;
                toAminoMsg(message: _76.QueryProposalResponse): _76.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _76.QueryProposalResponseProtoMsg): _76.QueryProposalResponse;
                toProto(message: _76.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _76.QueryProposalResponse): _76.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _76.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_76.QueryProposalsByGroupPolicyRequest>): _76.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _76.QueryProposalsByGroupPolicyRequestAmino): _76.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _76.QueryProposalsByGroupPolicyRequest): _76.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _76.QueryProposalsByGroupPolicyRequestAminoMsg): _76.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _76.QueryProposalsByGroupPolicyRequest): _76.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _76.QueryProposalsByGroupPolicyRequestProtoMsg): _76.QueryProposalsByGroupPolicyRequest;
                toProto(message: _76.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _76.QueryProposalsByGroupPolicyRequest): _76.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _76.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_76.QueryProposalsByGroupPolicyResponse>): _76.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _76.QueryProposalsByGroupPolicyResponseAmino): _76.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _76.QueryProposalsByGroupPolicyResponse): _76.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _76.QueryProposalsByGroupPolicyResponseAminoMsg): _76.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _76.QueryProposalsByGroupPolicyResponse): _76.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _76.QueryProposalsByGroupPolicyResponseProtoMsg): _76.QueryProposalsByGroupPolicyResponse;
                toProto(message: _76.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _76.QueryProposalsByGroupPolicyResponse): _76.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _76.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_76.QueryVoteByProposalVoterRequest>): _76.QueryVoteByProposalVoterRequest;
                fromAmino(object: _76.QueryVoteByProposalVoterRequestAmino): _76.QueryVoteByProposalVoterRequest;
                toAmino(message: _76.QueryVoteByProposalVoterRequest): _76.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _76.QueryVoteByProposalVoterRequestAminoMsg): _76.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _76.QueryVoteByProposalVoterRequest): _76.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _76.QueryVoteByProposalVoterRequestProtoMsg): _76.QueryVoteByProposalVoterRequest;
                toProto(message: _76.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _76.QueryVoteByProposalVoterRequest): _76.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _76.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_76.QueryVoteByProposalVoterResponse>): _76.QueryVoteByProposalVoterResponse;
                fromAmino(object: _76.QueryVoteByProposalVoterResponseAmino): _76.QueryVoteByProposalVoterResponse;
                toAmino(message: _76.QueryVoteByProposalVoterResponse): _76.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _76.QueryVoteByProposalVoterResponseAminoMsg): _76.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _76.QueryVoteByProposalVoterResponse): _76.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _76.QueryVoteByProposalVoterResponseProtoMsg): _76.QueryVoteByProposalVoterResponse;
                toProto(message: _76.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _76.QueryVoteByProposalVoterResponse): _76.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _76.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_76.QueryVotesByProposalRequest>): _76.QueryVotesByProposalRequest;
                fromAmino(object: _76.QueryVotesByProposalRequestAmino): _76.QueryVotesByProposalRequest;
                toAmino(message: _76.QueryVotesByProposalRequest): _76.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _76.QueryVotesByProposalRequestAminoMsg): _76.QueryVotesByProposalRequest;
                toAminoMsg(message: _76.QueryVotesByProposalRequest): _76.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _76.QueryVotesByProposalRequestProtoMsg): _76.QueryVotesByProposalRequest;
                toProto(message: _76.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _76.QueryVotesByProposalRequest): _76.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _76.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_76.QueryVotesByProposalResponse>): _76.QueryVotesByProposalResponse;
                fromAmino(object: _76.QueryVotesByProposalResponseAmino): _76.QueryVotesByProposalResponse;
                toAmino(message: _76.QueryVotesByProposalResponse): _76.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _76.QueryVotesByProposalResponseAminoMsg): _76.QueryVotesByProposalResponse;
                toAminoMsg(message: _76.QueryVotesByProposalResponse): _76.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _76.QueryVotesByProposalResponseProtoMsg): _76.QueryVotesByProposalResponse;
                toProto(message: _76.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _76.QueryVotesByProposalResponse): _76.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _76.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_76.QueryVotesByVoterRequest>): _76.QueryVotesByVoterRequest;
                fromAmino(object: _76.QueryVotesByVoterRequestAmino): _76.QueryVotesByVoterRequest;
                toAmino(message: _76.QueryVotesByVoterRequest): _76.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _76.QueryVotesByVoterRequestAminoMsg): _76.QueryVotesByVoterRequest;
                toAminoMsg(message: _76.QueryVotesByVoterRequest): _76.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _76.QueryVotesByVoterRequestProtoMsg): _76.QueryVotesByVoterRequest;
                toProto(message: _76.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _76.QueryVotesByVoterRequest): _76.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _76.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_76.QueryVotesByVoterResponse>): _76.QueryVotesByVoterResponse;
                fromAmino(object: _76.QueryVotesByVoterResponseAmino): _76.QueryVotesByVoterResponse;
                toAmino(message: _76.QueryVotesByVoterResponse): _76.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _76.QueryVotesByVoterResponseAminoMsg): _76.QueryVotesByVoterResponse;
                toAminoMsg(message: _76.QueryVotesByVoterResponse): _76.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _76.QueryVotesByVoterResponseProtoMsg): _76.QueryVotesByVoterResponse;
                toProto(message: _76.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _76.QueryVotesByVoterResponse): _76.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _76.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_76.QueryGroupsByMemberRequest>): _76.QueryGroupsByMemberRequest;
                fromAmino(object: _76.QueryGroupsByMemberRequestAmino): _76.QueryGroupsByMemberRequest;
                toAmino(message: _76.QueryGroupsByMemberRequest): _76.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _76.QueryGroupsByMemberRequestAminoMsg): _76.QueryGroupsByMemberRequest;
                toAminoMsg(message: _76.QueryGroupsByMemberRequest): _76.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _76.QueryGroupsByMemberRequestProtoMsg): _76.QueryGroupsByMemberRequest;
                toProto(message: _76.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _76.QueryGroupsByMemberRequest): _76.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _76.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_76.QueryGroupsByMemberResponse>): _76.QueryGroupsByMemberResponse;
                fromAmino(object: _76.QueryGroupsByMemberResponseAmino): _76.QueryGroupsByMemberResponse;
                toAmino(message: _76.QueryGroupsByMemberResponse): _76.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _76.QueryGroupsByMemberResponseAminoMsg): _76.QueryGroupsByMemberResponse;
                toAminoMsg(message: _76.QueryGroupsByMemberResponse): _76.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _76.QueryGroupsByMemberResponseProtoMsg): _76.QueryGroupsByMemberResponse;
                toProto(message: _76.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _76.QueryGroupsByMemberResponse): _76.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _76.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryTallyResultRequest;
                fromPartial(object: Partial<_76.QueryTallyResultRequest>): _76.QueryTallyResultRequest;
                fromAmino(object: _76.QueryTallyResultRequestAmino): _76.QueryTallyResultRequest;
                toAmino(message: _76.QueryTallyResultRequest): _76.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _76.QueryTallyResultRequestAminoMsg): _76.QueryTallyResultRequest;
                toAminoMsg(message: _76.QueryTallyResultRequest): _76.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _76.QueryTallyResultRequestProtoMsg): _76.QueryTallyResultRequest;
                toProto(message: _76.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _76.QueryTallyResultRequest): _76.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _76.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryTallyResultResponse;
                fromPartial(object: Partial<_76.QueryTallyResultResponse>): _76.QueryTallyResultResponse;
                fromAmino(object: _76.QueryTallyResultResponseAmino): _76.QueryTallyResultResponse;
                toAmino(message: _76.QueryTallyResultResponse): _76.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _76.QueryTallyResultResponseAminoMsg): _76.QueryTallyResultResponse;
                toAminoMsg(message: _76.QueryTallyResultResponse): _76.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _76.QueryTallyResultResponseProtoMsg): _76.QueryTallyResultResponse;
                toProto(message: _76.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _76.QueryTallyResultResponse): _76.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _76.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryGroupsRequest;
                fromPartial(object: Partial<_76.QueryGroupsRequest>): _76.QueryGroupsRequest;
                fromAmino(object: _76.QueryGroupsRequestAmino): _76.QueryGroupsRequest;
                toAmino(message: _76.QueryGroupsRequest): _76.QueryGroupsRequestAmino;
                fromAminoMsg(object: _76.QueryGroupsRequestAminoMsg): _76.QueryGroupsRequest;
                toAminoMsg(message: _76.QueryGroupsRequest): _76.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _76.QueryGroupsRequestProtoMsg): _76.QueryGroupsRequest;
                toProto(message: _76.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _76.QueryGroupsRequest): _76.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _76.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryGroupsResponse;
                fromPartial(object: Partial<_76.QueryGroupsResponse>): _76.QueryGroupsResponse;
                fromAmino(object: _76.QueryGroupsResponseAmino): _76.QueryGroupsResponse;
                toAmino(message: _76.QueryGroupsResponse): _76.QueryGroupsResponseAmino;
                fromAminoMsg(object: _76.QueryGroupsResponseAminoMsg): _76.QueryGroupsResponse;
                toAminoMsg(message: _76.QueryGroupsResponse): _76.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _76.QueryGroupsResponseProtoMsg): _76.QueryGroupsResponse;
                toProto(message: _76.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _76.QueryGroupsResponse): _76.QueryGroupsResponseProtoMsg;
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
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _74.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.EventCreateGroup;
                fromPartial(object: Partial<_74.EventCreateGroup>): _74.EventCreateGroup;
                fromAmino(object: _74.EventCreateGroupAmino): _74.EventCreateGroup;
                toAmino(message: _74.EventCreateGroup): _74.EventCreateGroupAmino;
                fromAminoMsg(object: _74.EventCreateGroupAminoMsg): _74.EventCreateGroup;
                toAminoMsg(message: _74.EventCreateGroup): _74.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _74.EventCreateGroupProtoMsg): _74.EventCreateGroup;
                toProto(message: _74.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _74.EventCreateGroup): _74.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _74.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.EventUpdateGroup;
                fromPartial(object: Partial<_74.EventUpdateGroup>): _74.EventUpdateGroup;
                fromAmino(object: _74.EventUpdateGroupAmino): _74.EventUpdateGroup;
                toAmino(message: _74.EventUpdateGroup): _74.EventUpdateGroupAmino;
                fromAminoMsg(object: _74.EventUpdateGroupAminoMsg): _74.EventUpdateGroup;
                toAminoMsg(message: _74.EventUpdateGroup): _74.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _74.EventUpdateGroupProtoMsg): _74.EventUpdateGroup;
                toProto(message: _74.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _74.EventUpdateGroup): _74.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _74.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.EventCreateGroupPolicy;
                fromPartial(object: Partial<_74.EventCreateGroupPolicy>): _74.EventCreateGroupPolicy;
                fromAmino(object: _74.EventCreateGroupPolicyAmino): _74.EventCreateGroupPolicy;
                toAmino(message: _74.EventCreateGroupPolicy): _74.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _74.EventCreateGroupPolicyAminoMsg): _74.EventCreateGroupPolicy;
                toAminoMsg(message: _74.EventCreateGroupPolicy): _74.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _74.EventCreateGroupPolicyProtoMsg): _74.EventCreateGroupPolicy;
                toProto(message: _74.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _74.EventCreateGroupPolicy): _74.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _74.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_74.EventUpdateGroupPolicy>): _74.EventUpdateGroupPolicy;
                fromAmino(object: _74.EventUpdateGroupPolicyAmino): _74.EventUpdateGroupPolicy;
                toAmino(message: _74.EventUpdateGroupPolicy): _74.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _74.EventUpdateGroupPolicyAminoMsg): _74.EventUpdateGroupPolicy;
                toAminoMsg(message: _74.EventUpdateGroupPolicy): _74.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _74.EventUpdateGroupPolicyProtoMsg): _74.EventUpdateGroupPolicy;
                toProto(message: _74.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _74.EventUpdateGroupPolicy): _74.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _74.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.EventSubmitProposal;
                fromPartial(object: Partial<_74.EventSubmitProposal>): _74.EventSubmitProposal;
                fromAmino(object: _74.EventSubmitProposalAmino): _74.EventSubmitProposal;
                toAmino(message: _74.EventSubmitProposal): _74.EventSubmitProposalAmino;
                fromAminoMsg(object: _74.EventSubmitProposalAminoMsg): _74.EventSubmitProposal;
                toAminoMsg(message: _74.EventSubmitProposal): _74.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _74.EventSubmitProposalProtoMsg): _74.EventSubmitProposal;
                toProto(message: _74.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _74.EventSubmitProposal): _74.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _74.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.EventWithdrawProposal;
                fromPartial(object: Partial<_74.EventWithdrawProposal>): _74.EventWithdrawProposal;
                fromAmino(object: _74.EventWithdrawProposalAmino): _74.EventWithdrawProposal;
                toAmino(message: _74.EventWithdrawProposal): _74.EventWithdrawProposalAmino;
                fromAminoMsg(object: _74.EventWithdrawProposalAminoMsg): _74.EventWithdrawProposal;
                toAminoMsg(message: _74.EventWithdrawProposal): _74.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _74.EventWithdrawProposalProtoMsg): _74.EventWithdrawProposal;
                toProto(message: _74.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _74.EventWithdrawProposal): _74.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _74.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.EventVote;
                fromPartial(object: Partial<_74.EventVote>): _74.EventVote;
                fromAmino(object: _74.EventVoteAmino): _74.EventVote;
                toAmino(message: _74.EventVote): _74.EventVoteAmino;
                fromAminoMsg(object: _74.EventVoteAminoMsg): _74.EventVote;
                toAminoMsg(message: _74.EventVote): _74.EventVoteAminoMsg;
                fromProtoMsg(message: _74.EventVoteProtoMsg): _74.EventVote;
                toProto(message: _74.EventVote): Uint8Array;
                toProtoMsg(message: _74.EventVote): _74.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _74.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.EventExec;
                fromPartial(object: Partial<_74.EventExec>): _74.EventExec;
                fromAmino(object: _74.EventExecAmino): _74.EventExec;
                toAmino(message: _74.EventExec): _74.EventExecAmino;
                fromAminoMsg(object: _74.EventExecAminoMsg): _74.EventExec;
                toAminoMsg(message: _74.EventExec): _74.EventExecAminoMsg;
                fromProtoMsg(message: _74.EventExecProtoMsg): _74.EventExec;
                toProto(message: _74.EventExec): Uint8Array;
                toProtoMsg(message: _74.EventExec): _74.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _74.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.EventLeaveGroup;
                fromPartial(object: Partial<_74.EventLeaveGroup>): _74.EventLeaveGroup;
                fromAmino(object: _74.EventLeaveGroupAmino): _74.EventLeaveGroup;
                toAmino(message: _74.EventLeaveGroup): _74.EventLeaveGroupAmino;
                fromAminoMsg(object: _74.EventLeaveGroupAminoMsg): _74.EventLeaveGroup;
                toAminoMsg(message: _74.EventLeaveGroup): _74.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _74.EventLeaveGroupProtoMsg): _74.EventLeaveGroup;
                toProto(message: _74.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _74.EventLeaveGroup): _74.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _74.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.EventProposalPruned;
                fromPartial(object: Partial<_74.EventProposalPruned>): _74.EventProposalPruned;
                fromAmino(object: _74.EventProposalPrunedAmino): _74.EventProposalPruned;
                toAmino(message: _74.EventProposalPruned): _74.EventProposalPrunedAmino;
                fromAminoMsg(object: _74.EventProposalPrunedAminoMsg): _74.EventProposalPruned;
                toAminoMsg(message: _74.EventProposalPruned): _74.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _74.EventProposalPrunedProtoMsg): _74.EventProposalPruned;
                toProto(message: _74.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _74.EventProposalPruned): _74.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _202.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                inflation(request?: _81.QueryInflationRequest): Promise<_81.QueryInflationResponse>;
                annualProvisions(request?: _81.QueryAnnualProvisionsRequest): Promise<_81.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _183.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _81.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.QueryParamsRequest;
                fromPartial(_: Partial<_81.QueryParamsRequest>): _81.QueryParamsRequest;
                fromAmino(_: _81.QueryParamsRequestAmino): _81.QueryParamsRequest;
                toAmino(_: _81.QueryParamsRequest): _81.QueryParamsRequestAmino;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _81.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.QueryInflationRequest;
                fromPartial(_: Partial<_81.QueryInflationRequest>): _81.QueryInflationRequest;
                fromAmino(_: _81.QueryInflationRequestAmino): _81.QueryInflationRequest;
                toAmino(_: _81.QueryInflationRequest): _81.QueryInflationRequestAmino;
                fromAminoMsg(object: _81.QueryInflationRequestAminoMsg): _81.QueryInflationRequest;
                toAminoMsg(message: _81.QueryInflationRequest): _81.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _81.QueryInflationRequestProtoMsg): _81.QueryInflationRequest;
                toProto(message: _81.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _81.QueryInflationRequest): _81.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _81.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryInflationResponse;
                fromPartial(object: Partial<_81.QueryInflationResponse>): _81.QueryInflationResponse;
                fromAmino(object: _81.QueryInflationResponseAmino): _81.QueryInflationResponse;
                toAmino(message: _81.QueryInflationResponse): _81.QueryInflationResponseAmino;
                fromAminoMsg(object: _81.QueryInflationResponseAminoMsg): _81.QueryInflationResponse;
                toAminoMsg(message: _81.QueryInflationResponse): _81.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _81.QueryInflationResponseProtoMsg): _81.QueryInflationResponse;
                toProto(message: _81.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _81.QueryInflationResponse): _81.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _81.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_81.QueryAnnualProvisionsRequest>): _81.QueryAnnualProvisionsRequest;
                fromAmino(_: _81.QueryAnnualProvisionsRequestAmino): _81.QueryAnnualProvisionsRequest;
                toAmino(_: _81.QueryAnnualProvisionsRequest): _81.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _81.QueryAnnualProvisionsRequestAminoMsg): _81.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _81.QueryAnnualProvisionsRequest): _81.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryAnnualProvisionsRequestProtoMsg): _81.QueryAnnualProvisionsRequest;
                toProto(message: _81.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryAnnualProvisionsRequest): _81.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _81.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_81.QueryAnnualProvisionsResponse>): _81.QueryAnnualProvisionsResponse;
                fromAmino(object: _81.QueryAnnualProvisionsResponseAmino): _81.QueryAnnualProvisionsResponse;
                toAmino(message: _81.QueryAnnualProvisionsResponse): _81.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _81.QueryAnnualProvisionsResponseAminoMsg): _81.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _81.QueryAnnualProvisionsResponse): _81.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryAnnualProvisionsResponseProtoMsg): _81.QueryAnnualProvisionsResponse;
                toProto(message: _81.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryAnnualProvisionsResponse): _81.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _80.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.Minter;
                fromPartial(object: Partial<_80.Minter>): _80.Minter;
                fromAmino(object: _80.MinterAmino): _80.Minter;
                toAmino(message: _80.Minter): _80.MinterAmino;
                fromAminoMsg(object: _80.MinterAminoMsg): _80.Minter;
                toAminoMsg(message: _80.Minter): _80.MinterAminoMsg;
                fromProtoMsg(message: _80.MinterProtoMsg): _80.Minter;
                toProto(message: _80.Minter): Uint8Array;
                toProtoMsg(message: _80.Minter): _80.MinterProtoMsg;
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
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _218.MsgClientImpl;
            QueryClientImpl: typeof _203.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _86.QueryBalanceRequest): Promise<_86.QueryBalanceResponse>;
                owner(request: _86.QueryOwnerRequest): Promise<_86.QueryOwnerResponse>;
                supply(request: _86.QuerySupplyRequest): Promise<_86.QuerySupplyResponse>;
                nFTs(request: _86.QueryNFTsRequest): Promise<_86.QueryNFTsResponse>;
                nFT(request: _86.QueryNFTRequest): Promise<_86.QueryNFTResponse>;
                class(request: _86.QueryClassRequest): Promise<_86.QueryClassResponse>;
                classes(request?: _86.QueryClassesRequest): Promise<_86.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _184.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _87.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _87.MsgSend): {
                        typeUrl: string;
                        value: _87.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _87.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _87.MsgSend): {
                        typeUrl: string;
                        value: _87.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _87.MsgSend) => _87.MsgSendAmino;
                    fromAmino: (object: _87.MsgSendAmino) => _87.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _87.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgSend;
                fromPartial(object: Partial<_87.MsgSend>): _87.MsgSend;
                fromAmino(object: _87.MsgSendAmino): _87.MsgSend;
                toAmino(message: _87.MsgSend): _87.MsgSendAmino;
                fromAminoMsg(object: _87.MsgSendAminoMsg): _87.MsgSend;
                toAminoMsg(message: _87.MsgSend): _87.MsgSendAminoMsg;
                fromProtoMsg(message: _87.MsgSendProtoMsg): _87.MsgSend;
                toProto(message: _87.MsgSend): Uint8Array;
                toProtoMsg(message: _87.MsgSend): _87.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _87.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgSendResponse;
                fromPartial(_: Partial<_87.MsgSendResponse>): _87.MsgSendResponse;
                fromAmino(_: _87.MsgSendResponseAmino): _87.MsgSendResponse;
                toAmino(_: _87.MsgSendResponse): _87.MsgSendResponseAmino;
                fromAminoMsg(object: _87.MsgSendResponseAminoMsg): _87.MsgSendResponse;
                toAminoMsg(message: _87.MsgSendResponse): _87.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _87.MsgSendResponseProtoMsg): _87.MsgSendResponse;
                toProto(message: _87.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _87.MsgSendResponse): _87.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _86.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryBalanceRequest;
                fromPartial(object: Partial<_86.QueryBalanceRequest>): _86.QueryBalanceRequest;
                fromAmino(object: _86.QueryBalanceRequestAmino): _86.QueryBalanceRequest;
                toAmino(message: _86.QueryBalanceRequest): _86.QueryBalanceRequestAmino;
                fromAminoMsg(object: _86.QueryBalanceRequestAminoMsg): _86.QueryBalanceRequest;
                toAminoMsg(message: _86.QueryBalanceRequest): _86.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _86.QueryBalanceRequestProtoMsg): _86.QueryBalanceRequest;
                toProto(message: _86.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _86.QueryBalanceRequest): _86.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _86.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryBalanceResponse;
                fromPartial(object: Partial<_86.QueryBalanceResponse>): _86.QueryBalanceResponse;
                fromAmino(object: _86.QueryBalanceResponseAmino): _86.QueryBalanceResponse;
                toAmino(message: _86.QueryBalanceResponse): _86.QueryBalanceResponseAmino;
                fromAminoMsg(object: _86.QueryBalanceResponseAminoMsg): _86.QueryBalanceResponse;
                toAminoMsg(message: _86.QueryBalanceResponse): _86.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _86.QueryBalanceResponseProtoMsg): _86.QueryBalanceResponse;
                toProto(message: _86.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _86.QueryBalanceResponse): _86.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _86.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryOwnerRequest;
                fromPartial(object: Partial<_86.QueryOwnerRequest>): _86.QueryOwnerRequest;
                fromAmino(object: _86.QueryOwnerRequestAmino): _86.QueryOwnerRequest;
                toAmino(message: _86.QueryOwnerRequest): _86.QueryOwnerRequestAmino;
                fromAminoMsg(object: _86.QueryOwnerRequestAminoMsg): _86.QueryOwnerRequest;
                toAminoMsg(message: _86.QueryOwnerRequest): _86.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _86.QueryOwnerRequestProtoMsg): _86.QueryOwnerRequest;
                toProto(message: _86.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _86.QueryOwnerRequest): _86.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _86.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryOwnerResponse;
                fromPartial(object: Partial<_86.QueryOwnerResponse>): _86.QueryOwnerResponse;
                fromAmino(object: _86.QueryOwnerResponseAmino): _86.QueryOwnerResponse;
                toAmino(message: _86.QueryOwnerResponse): _86.QueryOwnerResponseAmino;
                fromAminoMsg(object: _86.QueryOwnerResponseAminoMsg): _86.QueryOwnerResponse;
                toAminoMsg(message: _86.QueryOwnerResponse): _86.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _86.QueryOwnerResponseProtoMsg): _86.QueryOwnerResponse;
                toProto(message: _86.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _86.QueryOwnerResponse): _86.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _86.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QuerySupplyRequest;
                fromPartial(object: Partial<_86.QuerySupplyRequest>): _86.QuerySupplyRequest;
                fromAmino(object: _86.QuerySupplyRequestAmino): _86.QuerySupplyRequest;
                toAmino(message: _86.QuerySupplyRequest): _86.QuerySupplyRequestAmino;
                fromAminoMsg(object: _86.QuerySupplyRequestAminoMsg): _86.QuerySupplyRequest;
                toAminoMsg(message: _86.QuerySupplyRequest): _86.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _86.QuerySupplyRequestProtoMsg): _86.QuerySupplyRequest;
                toProto(message: _86.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _86.QuerySupplyRequest): _86.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _86.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QuerySupplyResponse;
                fromPartial(object: Partial<_86.QuerySupplyResponse>): _86.QuerySupplyResponse;
                fromAmino(object: _86.QuerySupplyResponseAmino): _86.QuerySupplyResponse;
                toAmino(message: _86.QuerySupplyResponse): _86.QuerySupplyResponseAmino;
                fromAminoMsg(object: _86.QuerySupplyResponseAminoMsg): _86.QuerySupplyResponse;
                toAminoMsg(message: _86.QuerySupplyResponse): _86.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _86.QuerySupplyResponseProtoMsg): _86.QuerySupplyResponse;
                toProto(message: _86.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _86.QuerySupplyResponse): _86.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _86.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryNFTsRequest;
                fromPartial(object: Partial<_86.QueryNFTsRequest>): _86.QueryNFTsRequest;
                fromAmino(object: _86.QueryNFTsRequestAmino): _86.QueryNFTsRequest;
                toAmino(message: _86.QueryNFTsRequest): _86.QueryNFTsRequestAmino;
                fromAminoMsg(object: _86.QueryNFTsRequestAminoMsg): _86.QueryNFTsRequest;
                toAminoMsg(message: _86.QueryNFTsRequest): _86.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryNFTsRequestProtoMsg): _86.QueryNFTsRequest;
                toProto(message: _86.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryNFTsRequest): _86.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _86.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryNFTsResponse;
                fromPartial(object: Partial<_86.QueryNFTsResponse>): _86.QueryNFTsResponse;
                fromAmino(object: _86.QueryNFTsResponseAmino): _86.QueryNFTsResponse;
                toAmino(message: _86.QueryNFTsResponse): _86.QueryNFTsResponseAmino;
                fromAminoMsg(object: _86.QueryNFTsResponseAminoMsg): _86.QueryNFTsResponse;
                toAminoMsg(message: _86.QueryNFTsResponse): _86.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryNFTsResponseProtoMsg): _86.QueryNFTsResponse;
                toProto(message: _86.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryNFTsResponse): _86.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _86.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryNFTRequest;
                fromPartial(object: Partial<_86.QueryNFTRequest>): _86.QueryNFTRequest;
                fromAmino(object: _86.QueryNFTRequestAmino): _86.QueryNFTRequest;
                toAmino(message: _86.QueryNFTRequest): _86.QueryNFTRequestAmino;
                fromAminoMsg(object: _86.QueryNFTRequestAminoMsg): _86.QueryNFTRequest;
                toAminoMsg(message: _86.QueryNFTRequest): _86.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _86.QueryNFTRequestProtoMsg): _86.QueryNFTRequest;
                toProto(message: _86.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _86.QueryNFTRequest): _86.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _86.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryNFTResponse;
                fromPartial(object: Partial<_86.QueryNFTResponse>): _86.QueryNFTResponse;
                fromAmino(object: _86.QueryNFTResponseAmino): _86.QueryNFTResponse;
                toAmino(message: _86.QueryNFTResponse): _86.QueryNFTResponseAmino;
                fromAminoMsg(object: _86.QueryNFTResponseAminoMsg): _86.QueryNFTResponse;
                toAminoMsg(message: _86.QueryNFTResponse): _86.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _86.QueryNFTResponseProtoMsg): _86.QueryNFTResponse;
                toProto(message: _86.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _86.QueryNFTResponse): _86.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _86.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryClassRequest;
                fromPartial(object: Partial<_86.QueryClassRequest>): _86.QueryClassRequest;
                fromAmino(object: _86.QueryClassRequestAmino): _86.QueryClassRequest;
                toAmino(message: _86.QueryClassRequest): _86.QueryClassRequestAmino;
                fromAminoMsg(object: _86.QueryClassRequestAminoMsg): _86.QueryClassRequest;
                toAminoMsg(message: _86.QueryClassRequest): _86.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _86.QueryClassRequestProtoMsg): _86.QueryClassRequest;
                toProto(message: _86.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _86.QueryClassRequest): _86.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _86.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryClassResponse;
                fromPartial(object: Partial<_86.QueryClassResponse>): _86.QueryClassResponse;
                fromAmino(object: _86.QueryClassResponseAmino): _86.QueryClassResponse;
                toAmino(message: _86.QueryClassResponse): _86.QueryClassResponseAmino;
                fromAminoMsg(object: _86.QueryClassResponseAminoMsg): _86.QueryClassResponse;
                toAminoMsg(message: _86.QueryClassResponse): _86.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _86.QueryClassResponseProtoMsg): _86.QueryClassResponse;
                toProto(message: _86.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _86.QueryClassResponse): _86.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _86.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryClassesRequest;
                fromPartial(object: Partial<_86.QueryClassesRequest>): _86.QueryClassesRequest;
                fromAmino(object: _86.QueryClassesRequestAmino): _86.QueryClassesRequest;
                toAmino(message: _86.QueryClassesRequest): _86.QueryClassesRequestAmino;
                fromAminoMsg(object: _86.QueryClassesRequestAminoMsg): _86.QueryClassesRequest;
                toAminoMsg(message: _86.QueryClassesRequest): _86.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _86.QueryClassesRequestProtoMsg): _86.QueryClassesRequest;
                toProto(message: _86.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _86.QueryClassesRequest): _86.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _86.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryClassesResponse;
                fromPartial(object: Partial<_86.QueryClassesResponse>): _86.QueryClassesResponse;
                fromAmino(object: _86.QueryClassesResponseAmino): _86.QueryClassesResponse;
                toAmino(message: _86.QueryClassesResponse): _86.QueryClassesResponseAmino;
                fromAminoMsg(object: _86.QueryClassesResponseAminoMsg): _86.QueryClassesResponse;
                toAminoMsg(message: _86.QueryClassesResponse): _86.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _86.QueryClassesResponseProtoMsg): _86.QueryClassesResponse;
                toProto(message: _86.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _86.QueryClassesResponse): _86.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _85.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.Class;
                fromPartial(object: Partial<_85.Class>): _85.Class;
                fromAmino(object: _85.ClassAmino): _85.Class;
                toAmino(message: _85.Class): _85.ClassAmino;
                fromAminoMsg(object: _85.ClassAminoMsg): _85.Class;
                toAminoMsg(message: _85.Class): _85.ClassAminoMsg;
                fromProtoMsg(message: _85.ClassProtoMsg): _85.Class;
                toProto(message: _85.Class): Uint8Array;
                toProtoMsg(message: _85.Class): _85.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _85.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.NFT;
                fromPartial(object: Partial<_85.NFT>): _85.NFT;
                fromAmino(object: _85.NFTAmino): _85.NFT;
                toAmino(message: _85.NFT): _85.NFTAmino;
                fromAminoMsg(object: _85.NFTAminoMsg): _85.NFT;
                toAminoMsg(message: _85.NFT): _85.NFTAminoMsg;
                fromProtoMsg(message: _85.NFTProtoMsg): _85.NFT;
                toProto(message: _85.NFT): Uint8Array;
                toProtoMsg(message: _85.NFT): _85.NFTProtoMsg;
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
            Entry: {
                typeUrl: string;
                encode(message: _84.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.Entry;
                fromPartial(object: Partial<_84.Entry>): _84.Entry;
                fromAmino(object: _84.EntryAmino): _84.Entry;
                toAmino(message: _84.Entry): _84.EntryAmino;
                fromAminoMsg(object: _84.EntryAminoMsg): _84.Entry;
                toAminoMsg(message: _84.Entry): _84.EntryAminoMsg;
                fromProtoMsg(message: _84.EntryProtoMsg): _84.Entry;
                toProto(message: _84.Entry): Uint8Array;
                toProtoMsg(message: _84.Entry): _84.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _83.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.EventSend;
                fromPartial(object: Partial<_83.EventSend>): _83.EventSend;
                fromAmino(object: _83.EventSendAmino): _83.EventSend;
                toAmino(message: _83.EventSend): _83.EventSendAmino;
                fromAminoMsg(object: _83.EventSendAminoMsg): _83.EventSend;
                toAminoMsg(message: _83.EventSend): _83.EventSendAminoMsg;
                fromProtoMsg(message: _83.EventSendProtoMsg): _83.EventSend;
                toProto(message: _83.EventSend): Uint8Array;
                toProtoMsg(message: _83.EventSend): _83.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _83.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.EventMint;
                fromPartial(object: Partial<_83.EventMint>): _83.EventMint;
                fromAmino(object: _83.EventMintAmino): _83.EventMint;
                toAmino(message: _83.EventMint): _83.EventMintAmino;
                fromAminoMsg(object: _83.EventMintAminoMsg): _83.EventMint;
                toAminoMsg(message: _83.EventMint): _83.EventMintAminoMsg;
                fromProtoMsg(message: _83.EventMintProtoMsg): _83.EventMint;
                toProto(message: _83.EventMint): Uint8Array;
                toProtoMsg(message: _83.EventMint): _83.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _83.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.EventBurn;
                fromPartial(object: Partial<_83.EventBurn>): _83.EventBurn;
                fromAmino(object: _83.EventBurnAmino): _83.EventBurn;
                toAmino(message: _83.EventBurn): _83.EventBurnAmino;
                fromAminoMsg(object: _83.EventBurnAminoMsg): _83.EventBurn;
                toAminoMsg(message: _83.EventBurn): _83.EventBurnAminoMsg;
                fromProtoMsg(message: _83.EventBurnProtoMsg): _83.EventBurn;
                toProto(message: _83.EventBurn): Uint8Array;
                toProtoMsg(message: _83.EventBurn): _83.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _88.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _88.Module;
                    fromPartial(_: Partial<_88.Module>): _88.Module;
                    fromAmino(_: _88.ModuleAmino): _88.Module;
                    toAmino(_: _88.Module): _88.ModuleAmino;
                    fromAminoMsg(object: _88.ModuleAminoMsg): _88.Module;
                    toAminoMsg(message: _88.Module): _88.ModuleAminoMsg;
                    fromProtoMsg(message: _88.ModuleProtoMsg): _88.Module;
                    toProto(message: _88.Module): Uint8Array;
                    toProtoMsg(message: _88.Module): _88.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _89.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.TableDescriptor;
                fromPartial(object: Partial<_89.TableDescriptor>): _89.TableDescriptor;
                fromAmino(object: _89.TableDescriptorAmino): _89.TableDescriptor;
                toAmino(message: _89.TableDescriptor): _89.TableDescriptorAmino;
                fromAminoMsg(object: _89.TableDescriptorAminoMsg): _89.TableDescriptor;
                toAminoMsg(message: _89.TableDescriptor): _89.TableDescriptorAminoMsg;
                fromProtoMsg(message: _89.TableDescriptorProtoMsg): _89.TableDescriptor;
                toProto(message: _89.TableDescriptor): Uint8Array;
                toProtoMsg(message: _89.TableDescriptor): _89.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _89.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_89.PrimaryKeyDescriptor>): _89.PrimaryKeyDescriptor;
                fromAmino(object: _89.PrimaryKeyDescriptorAmino): _89.PrimaryKeyDescriptor;
                toAmino(message: _89.PrimaryKeyDescriptor): _89.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _89.PrimaryKeyDescriptorAminoMsg): _89.PrimaryKeyDescriptor;
                toAminoMsg(message: _89.PrimaryKeyDescriptor): _89.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _89.PrimaryKeyDescriptorProtoMsg): _89.PrimaryKeyDescriptor;
                toProto(message: _89.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _89.PrimaryKeyDescriptor): _89.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _89.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_89.SecondaryIndexDescriptor>): _89.SecondaryIndexDescriptor;
                fromAmino(object: _89.SecondaryIndexDescriptorAmino): _89.SecondaryIndexDescriptor;
                toAmino(message: _89.SecondaryIndexDescriptor): _89.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _89.SecondaryIndexDescriptorAminoMsg): _89.SecondaryIndexDescriptor;
                toAminoMsg(message: _89.SecondaryIndexDescriptor): _89.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _89.SecondaryIndexDescriptorProtoMsg): _89.SecondaryIndexDescriptor;
                toProto(message: _89.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _89.SecondaryIndexDescriptor): _89.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _89.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.SingletonDescriptor;
                fromPartial(object: Partial<_89.SingletonDescriptor>): _89.SingletonDescriptor;
                fromAmino(object: _89.SingletonDescriptorAmino): _89.SingletonDescriptor;
                toAmino(message: _89.SingletonDescriptor): _89.SingletonDescriptorAmino;
                fromAminoMsg(object: _89.SingletonDescriptorAminoMsg): _89.SingletonDescriptor;
                toAminoMsg(message: _89.SingletonDescriptor): _89.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _89.SingletonDescriptorProtoMsg): _89.SingletonDescriptor;
                toProto(message: _89.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _89.SingletonDescriptor): _89.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _90.StorageType;
            storageTypeToJSON(object: _90.StorageType): string;
            StorageType: typeof _90.StorageType;
            StorageTypeSDKType: typeof _90.StorageType;
            StorageTypeAmino: typeof _90.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _90.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_90.ModuleSchemaDescriptor>): _90.ModuleSchemaDescriptor;
                fromAmino(object: _90.ModuleSchemaDescriptorAmino): _90.ModuleSchemaDescriptor;
                toAmino(message: _90.ModuleSchemaDescriptor): _90.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _90.ModuleSchemaDescriptorAminoMsg): _90.ModuleSchemaDescriptor;
                toAminoMsg(message: _90.ModuleSchemaDescriptor): _90.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _90.ModuleSchemaDescriptorProtoMsg): _90.ModuleSchemaDescriptor;
                toProto(message: _90.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _90.ModuleSchemaDescriptor): _90.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _90.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_90.ModuleSchemaDescriptor_FileEntry>): _90.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _90.ModuleSchemaDescriptor_FileEntryAmino): _90.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _90.ModuleSchemaDescriptor_FileEntry): _90.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _90.ModuleSchemaDescriptor_FileEntryAminoMsg): _90.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _90.ModuleSchemaDescriptor_FileEntry): _90.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _90.ModuleSchemaDescriptor_FileEntryProtoMsg): _90.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _90.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _90.ModuleSchemaDescriptor_FileEntry): _90.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _204.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
                subspaces(request?: _92.QuerySubspacesRequest): Promise<_92.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _185.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _92.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryParamsRequest;
                fromPartial(object: Partial<_92.QueryParamsRequest>): _92.QueryParamsRequest;
                fromAmino(object: _92.QueryParamsRequestAmino): _92.QueryParamsRequest;
                toAmino(message: _92.QueryParamsRequest): _92.QueryParamsRequestAmino;
                fromAminoMsg(object: _92.QueryParamsRequestAminoMsg): _92.QueryParamsRequest;
                toAminoMsg(message: _92.QueryParamsRequest): _92.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryParamsRequestProtoMsg): _92.QueryParamsRequest;
                toProto(message: _92.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryParamsRequest): _92.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _92.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryParamsResponse;
                fromPartial(object: Partial<_92.QueryParamsResponse>): _92.QueryParamsResponse;
                fromAmino(object: _92.QueryParamsResponseAmino): _92.QueryParamsResponse;
                toAmino(message: _92.QueryParamsResponse): _92.QueryParamsResponseAmino;
                fromAminoMsg(object: _92.QueryParamsResponseAminoMsg): _92.QueryParamsResponse;
                toAminoMsg(message: _92.QueryParamsResponse): _92.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryParamsResponseProtoMsg): _92.QueryParamsResponse;
                toProto(message: _92.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryParamsResponse): _92.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _92.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.QuerySubspacesRequest;
                fromPartial(_: Partial<_92.QuerySubspacesRequest>): _92.QuerySubspacesRequest;
                fromAmino(_: _92.QuerySubspacesRequestAmino): _92.QuerySubspacesRequest;
                toAmino(_: _92.QuerySubspacesRequest): _92.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _92.QuerySubspacesRequestAminoMsg): _92.QuerySubspacesRequest;
                toAminoMsg(message: _92.QuerySubspacesRequest): _92.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _92.QuerySubspacesRequestProtoMsg): _92.QuerySubspacesRequest;
                toProto(message: _92.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _92.QuerySubspacesRequest): _92.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _92.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QuerySubspacesResponse;
                fromPartial(object: Partial<_92.QuerySubspacesResponse>): _92.QuerySubspacesResponse;
                fromAmino(object: _92.QuerySubspacesResponseAmino): _92.QuerySubspacesResponse;
                toAmino(message: _92.QuerySubspacesResponse): _92.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _92.QuerySubspacesResponseAminoMsg): _92.QuerySubspacesResponse;
                toAminoMsg(message: _92.QuerySubspacesResponse): _92.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _92.QuerySubspacesResponseProtoMsg): _92.QuerySubspacesResponse;
                toProto(message: _92.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _92.QuerySubspacesResponse): _92.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _92.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.Subspace;
                fromPartial(object: Partial<_92.Subspace>): _92.Subspace;
                fromAmino(object: _92.SubspaceAmino): _92.Subspace;
                toAmino(message: _92.Subspace): _92.SubspaceAmino;
                fromAminoMsg(object: _92.SubspaceAminoMsg): _92.Subspace;
                toAminoMsg(message: _92.Subspace): _92.SubspaceAminoMsg;
                fromProtoMsg(message: _92.SubspaceProtoMsg): _92.Subspace;
                toProto(message: _92.Subspace): Uint8Array;
                toProtoMsg(message: _92.Subspace): _92.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _91.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.ParameterChangeProposal;
                fromPartial(object: Partial<_91.ParameterChangeProposal>): _91.ParameterChangeProposal;
                fromAmino(object: _91.ParameterChangeProposalAmino): _91.ParameterChangeProposal;
                toAmino(message: _91.ParameterChangeProposal): _91.ParameterChangeProposalAmino;
                fromAminoMsg(object: _91.ParameterChangeProposalAminoMsg): _91.ParameterChangeProposal;
                toAminoMsg(message: _91.ParameterChangeProposal): _91.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _91.ParameterChangeProposalProtoMsg): _91.ParameterChangeProposal;
                toProto(message: _91.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _91.ParameterChangeProposal): _91.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _91.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.ParamChange;
                fromPartial(object: Partial<_91.ParamChange>): _91.ParamChange;
                fromAmino(object: _91.ParamChangeAmino): _91.ParamChange;
                toAmino(message: _91.ParamChange): _91.ParamChangeAmino;
                fromAminoMsg(object: _91.ParamChangeAminoMsg): _91.ParamChange;
                toAminoMsg(message: _91.ParamChange): _91.ParamChangeAminoMsg;
                fromProtoMsg(message: _91.ParamChangeProtoMsg): _91.ParamChange;
                toProto(message: _91.ParamChange): Uint8Array;
                toProtoMsg(message: _91.ParamChange): _91.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _219.MsgClientImpl;
            QueryClientImpl: typeof _205.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _94.QueryParamsRequest): Promise<_94.QueryParamsResponse>;
                signingInfo(request: _94.QuerySigningInfoRequest): Promise<_94.QuerySigningInfoResponse>;
                signingInfos(request?: _94.QuerySigningInfosRequest): Promise<_94.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _186.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _96.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _96.MsgUnjail): {
                        typeUrl: string;
                        value: _96.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _96.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _96.MsgUnjail): {
                        typeUrl: string;
                        value: _96.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _96.MsgUnjail) => _96.MsgUnjailAmino;
                    fromAmino: (object: _96.MsgUnjailAmino) => _96.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _96.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgUnjail;
                fromPartial(object: Partial<_96.MsgUnjail>): _96.MsgUnjail;
                fromAmino(object: _96.MsgUnjailAmino): _96.MsgUnjail;
                toAmino(message: _96.MsgUnjail): _96.MsgUnjailAmino;
                fromAminoMsg(object: _96.MsgUnjailAminoMsg): _96.MsgUnjail;
                toAminoMsg(message: _96.MsgUnjail): _96.MsgUnjailAminoMsg;
                fromProtoMsg(message: _96.MsgUnjailProtoMsg): _96.MsgUnjail;
                toProto(message: _96.MsgUnjail): Uint8Array;
                toProtoMsg(message: _96.MsgUnjail): _96.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _96.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _96.MsgUnjailResponse;
                fromPartial(_: Partial<_96.MsgUnjailResponse>): _96.MsgUnjailResponse;
                fromAmino(_: _96.MsgUnjailResponseAmino): _96.MsgUnjailResponse;
                toAmino(_: _96.MsgUnjailResponse): _96.MsgUnjailResponseAmino;
                fromAminoMsg(object: _96.MsgUnjailResponseAminoMsg): _96.MsgUnjailResponse;
                toAminoMsg(message: _96.MsgUnjailResponse): _96.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _96.MsgUnjailResponseProtoMsg): _96.MsgUnjailResponse;
                toProto(message: _96.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _96.MsgUnjailResponse): _96.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _95.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.ValidatorSigningInfo;
                fromPartial(object: Partial<_95.ValidatorSigningInfo>): _95.ValidatorSigningInfo;
                fromAmino(object: _95.ValidatorSigningInfoAmino): _95.ValidatorSigningInfo;
                toAmino(message: _95.ValidatorSigningInfo): _95.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _95.ValidatorSigningInfoAminoMsg): _95.ValidatorSigningInfo;
                toAminoMsg(message: _95.ValidatorSigningInfo): _95.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _95.ValidatorSigningInfoProtoMsg): _95.ValidatorSigningInfo;
                toProto(message: _95.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _95.ValidatorSigningInfo): _95.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _95.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.Params;
                fromPartial(object: Partial<_95.Params>): _95.Params;
                fromAmino(object: _95.ParamsAmino): _95.Params;
                toAmino(message: _95.Params): _95.ParamsAmino;
                fromAminoMsg(object: _95.ParamsAminoMsg): _95.Params;
                toAminoMsg(message: _95.Params): _95.ParamsAminoMsg;
                fromProtoMsg(message: _95.ParamsProtoMsg): _95.Params;
                toProto(message: _95.Params): Uint8Array;
                toProtoMsg(message: _95.Params): _95.ParamsProtoMsg;
            };
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
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _94.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QuerySigningInfoRequest;
                fromPartial(object: Partial<_94.QuerySigningInfoRequest>): _94.QuerySigningInfoRequest;
                fromAmino(object: _94.QuerySigningInfoRequestAmino): _94.QuerySigningInfoRequest;
                toAmino(message: _94.QuerySigningInfoRequest): _94.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _94.QuerySigningInfoRequestAminoMsg): _94.QuerySigningInfoRequest;
                toAminoMsg(message: _94.QuerySigningInfoRequest): _94.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _94.QuerySigningInfoRequestProtoMsg): _94.QuerySigningInfoRequest;
                toProto(message: _94.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _94.QuerySigningInfoRequest): _94.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _94.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QuerySigningInfoResponse;
                fromPartial(object: Partial<_94.QuerySigningInfoResponse>): _94.QuerySigningInfoResponse;
                fromAmino(object: _94.QuerySigningInfoResponseAmino): _94.QuerySigningInfoResponse;
                toAmino(message: _94.QuerySigningInfoResponse): _94.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _94.QuerySigningInfoResponseAminoMsg): _94.QuerySigningInfoResponse;
                toAminoMsg(message: _94.QuerySigningInfoResponse): _94.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _94.QuerySigningInfoResponseProtoMsg): _94.QuerySigningInfoResponse;
                toProto(message: _94.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _94.QuerySigningInfoResponse): _94.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _94.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QuerySigningInfosRequest;
                fromPartial(object: Partial<_94.QuerySigningInfosRequest>): _94.QuerySigningInfosRequest;
                fromAmino(object: _94.QuerySigningInfosRequestAmino): _94.QuerySigningInfosRequest;
                toAmino(message: _94.QuerySigningInfosRequest): _94.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _94.QuerySigningInfosRequestAminoMsg): _94.QuerySigningInfosRequest;
                toAminoMsg(message: _94.QuerySigningInfosRequest): _94.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _94.QuerySigningInfosRequestProtoMsg): _94.QuerySigningInfosRequest;
                toProto(message: _94.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _94.QuerySigningInfosRequest): _94.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _94.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QuerySigningInfosResponse;
                fromPartial(object: Partial<_94.QuerySigningInfosResponse>): _94.QuerySigningInfosResponse;
                fromAmino(object: _94.QuerySigningInfosResponseAmino): _94.QuerySigningInfosResponse;
                toAmino(message: _94.QuerySigningInfosResponse): _94.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _94.QuerySigningInfosResponseAminoMsg): _94.QuerySigningInfosResponse;
                toAminoMsg(message: _94.QuerySigningInfosResponse): _94.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _94.QuerySigningInfosResponseProtoMsg): _94.QuerySigningInfosResponse;
                toProto(message: _94.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _94.QuerySigningInfosResponse): _94.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _93.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.SigningInfo;
                fromPartial(object: Partial<_93.SigningInfo>): _93.SigningInfo;
                fromAmino(object: _93.SigningInfoAmino): _93.SigningInfo;
                toAmino(message: _93.SigningInfo): _93.SigningInfoAmino;
                fromAminoMsg(object: _93.SigningInfoAminoMsg): _93.SigningInfo;
                toAminoMsg(message: _93.SigningInfo): _93.SigningInfoAminoMsg;
                fromProtoMsg(message: _93.SigningInfoProtoMsg): _93.SigningInfo;
                toProto(message: _93.SigningInfo): Uint8Array;
                toProtoMsg(message: _93.SigningInfo): _93.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _93.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.ValidatorMissedBlocks;
                fromPartial(object: Partial<_93.ValidatorMissedBlocks>): _93.ValidatorMissedBlocks;
                fromAmino(object: _93.ValidatorMissedBlocksAmino): _93.ValidatorMissedBlocks;
                toAmino(message: _93.ValidatorMissedBlocks): _93.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _93.ValidatorMissedBlocksAminoMsg): _93.ValidatorMissedBlocks;
                toAminoMsg(message: _93.ValidatorMissedBlocks): _93.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _93.ValidatorMissedBlocksProtoMsg): _93.ValidatorMissedBlocks;
                toProto(message: _93.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _93.ValidatorMissedBlocks): _93.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _93.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.MissedBlock;
                fromPartial(object: Partial<_93.MissedBlock>): _93.MissedBlock;
                fromAmino(object: _93.MissedBlockAmino): _93.MissedBlock;
                toAmino(message: _93.MissedBlock): _93.MissedBlockAmino;
                fromAminoMsg(object: _93.MissedBlockAminoMsg): _93.MissedBlock;
                toAminoMsg(message: _93.MissedBlock): _93.MissedBlockAminoMsg;
                fromProtoMsg(message: _93.MissedBlockProtoMsg): _93.MissedBlock;
                toProto(message: _93.MissedBlock): Uint8Array;
                toProtoMsg(message: _93.MissedBlock): _93.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _220.MsgClientImpl;
            QueryClientImpl: typeof _206.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _99.QueryValidatorsRequest): Promise<_99.QueryValidatorsResponse>;
                validator(request: _99.QueryValidatorRequest): Promise<_99.QueryValidatorResponse>;
                validatorDelegations(request: _99.QueryValidatorDelegationsRequest): Promise<_99.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _99.QueryValidatorUnbondingDelegationsRequest): Promise<_99.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _99.QueryDelegationRequest): Promise<_99.QueryDelegationResponse>;
                unbondingDelegation(request: _99.QueryUnbondingDelegationRequest): Promise<_99.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _99.QueryDelegatorDelegationsRequest): Promise<_99.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _99.QueryDelegatorUnbondingDelegationsRequest): Promise<_99.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _99.QueryRedelegationsRequest): Promise<_99.QueryRedelegationsResponse>;
                delegatorValidators(request: _99.QueryDelegatorValidatorsRequest): Promise<_99.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _99.QueryDelegatorValidatorRequest): Promise<_99.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _99.QueryHistoricalInfoRequest): Promise<_99.QueryHistoricalInfoResponse>;
                pool(request?: _99.QueryPoolRequest): Promise<_99.QueryPoolResponse>;
                params(request?: _99.QueryParamsRequest): Promise<_99.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _187.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _101.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _101.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _101.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _101.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _101.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _101.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _101.MsgCreateValidator): {
                        typeUrl: string;
                        value: _101.MsgCreateValidator;
                    };
                    editValidator(value: _101.MsgEditValidator): {
                        typeUrl: string;
                        value: _101.MsgEditValidator;
                    };
                    delegate(value: _101.MsgDelegate): {
                        typeUrl: string;
                        value: _101.MsgDelegate;
                    };
                    beginRedelegate(value: _101.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _101.MsgBeginRedelegate;
                    };
                    undelegate(value: _101.MsgUndelegate): {
                        typeUrl: string;
                        value: _101.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _101.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _101.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _101.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _101.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _101.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _101.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _101.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _101.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _101.MsgCreateValidator): {
                        typeUrl: string;
                        value: _101.MsgCreateValidator;
                    };
                    editValidator(value: _101.MsgEditValidator): {
                        typeUrl: string;
                        value: _101.MsgEditValidator;
                    };
                    delegate(value: _101.MsgDelegate): {
                        typeUrl: string;
                        value: _101.MsgDelegate;
                    };
                    beginRedelegate(value: _101.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _101.MsgBeginRedelegate;
                    };
                    undelegate(value: _101.MsgUndelegate): {
                        typeUrl: string;
                        value: _101.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _101.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _101.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _101.MsgCreateValidator) => _101.MsgCreateValidatorAmino;
                    fromAmino: (object: _101.MsgCreateValidatorAmino) => _101.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _101.MsgEditValidator) => _101.MsgEditValidatorAmino;
                    fromAmino: (object: _101.MsgEditValidatorAmino) => _101.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _101.MsgDelegate) => _101.MsgDelegateAmino;
                    fromAmino: (object: _101.MsgDelegateAmino) => _101.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _101.MsgBeginRedelegate) => _101.MsgBeginRedelegateAmino;
                    fromAmino: (object: _101.MsgBeginRedelegateAmino) => _101.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _101.MsgUndelegate) => _101.MsgUndelegateAmino;
                    fromAmino: (object: _101.MsgUndelegateAmino) => _101.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _101.MsgCancelUnbondingDelegation) => _101.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _101.MsgCancelUnbondingDelegationAmino) => _101.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _101.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgCreateValidator;
                fromPartial(object: Partial<_101.MsgCreateValidator>): _101.MsgCreateValidator;
                fromAmino(object: _101.MsgCreateValidatorAmino): _101.MsgCreateValidator;
                toAmino(message: _101.MsgCreateValidator): _101.MsgCreateValidatorAmino;
                fromAminoMsg(object: _101.MsgCreateValidatorAminoMsg): _101.MsgCreateValidator;
                toAminoMsg(message: _101.MsgCreateValidator): _101.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _101.MsgCreateValidatorProtoMsg): _101.MsgCreateValidator;
                toProto(message: _101.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _101.MsgCreateValidator): _101.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _101.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _101.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_101.MsgCreateValidatorResponse>): _101.MsgCreateValidatorResponse;
                fromAmino(_: _101.MsgCreateValidatorResponseAmino): _101.MsgCreateValidatorResponse;
                toAmino(_: _101.MsgCreateValidatorResponse): _101.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _101.MsgCreateValidatorResponseAminoMsg): _101.MsgCreateValidatorResponse;
                toAminoMsg(message: _101.MsgCreateValidatorResponse): _101.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _101.MsgCreateValidatorResponseProtoMsg): _101.MsgCreateValidatorResponse;
                toProto(message: _101.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _101.MsgCreateValidatorResponse): _101.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _101.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgEditValidator;
                fromPartial(object: Partial<_101.MsgEditValidator>): _101.MsgEditValidator;
                fromAmino(object: _101.MsgEditValidatorAmino): _101.MsgEditValidator;
                toAmino(message: _101.MsgEditValidator): _101.MsgEditValidatorAmino;
                fromAminoMsg(object: _101.MsgEditValidatorAminoMsg): _101.MsgEditValidator;
                toAminoMsg(message: _101.MsgEditValidator): _101.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _101.MsgEditValidatorProtoMsg): _101.MsgEditValidator;
                toProto(message: _101.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _101.MsgEditValidator): _101.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _101.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _101.MsgEditValidatorResponse;
                fromPartial(_: Partial<_101.MsgEditValidatorResponse>): _101.MsgEditValidatorResponse;
                fromAmino(_: _101.MsgEditValidatorResponseAmino): _101.MsgEditValidatorResponse;
                toAmino(_: _101.MsgEditValidatorResponse): _101.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _101.MsgEditValidatorResponseAminoMsg): _101.MsgEditValidatorResponse;
                toAminoMsg(message: _101.MsgEditValidatorResponse): _101.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _101.MsgEditValidatorResponseProtoMsg): _101.MsgEditValidatorResponse;
                toProto(message: _101.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _101.MsgEditValidatorResponse): _101.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _101.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgDelegate;
                fromPartial(object: Partial<_101.MsgDelegate>): _101.MsgDelegate;
                fromAmino(object: _101.MsgDelegateAmino): _101.MsgDelegate;
                toAmino(message: _101.MsgDelegate): _101.MsgDelegateAmino;
                fromAminoMsg(object: _101.MsgDelegateAminoMsg): _101.MsgDelegate;
                toAminoMsg(message: _101.MsgDelegate): _101.MsgDelegateAminoMsg;
                fromProtoMsg(message: _101.MsgDelegateProtoMsg): _101.MsgDelegate;
                toProto(message: _101.MsgDelegate): Uint8Array;
                toProtoMsg(message: _101.MsgDelegate): _101.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _101.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _101.MsgDelegateResponse;
                fromPartial(_: Partial<_101.MsgDelegateResponse>): _101.MsgDelegateResponse;
                fromAmino(_: _101.MsgDelegateResponseAmino): _101.MsgDelegateResponse;
                toAmino(_: _101.MsgDelegateResponse): _101.MsgDelegateResponseAmino;
                fromAminoMsg(object: _101.MsgDelegateResponseAminoMsg): _101.MsgDelegateResponse;
                toAminoMsg(message: _101.MsgDelegateResponse): _101.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _101.MsgDelegateResponseProtoMsg): _101.MsgDelegateResponse;
                toProto(message: _101.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _101.MsgDelegateResponse): _101.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _101.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgBeginRedelegate;
                fromPartial(object: Partial<_101.MsgBeginRedelegate>): _101.MsgBeginRedelegate;
                fromAmino(object: _101.MsgBeginRedelegateAmino): _101.MsgBeginRedelegate;
                toAmino(message: _101.MsgBeginRedelegate): _101.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _101.MsgBeginRedelegateAminoMsg): _101.MsgBeginRedelegate;
                toAminoMsg(message: _101.MsgBeginRedelegate): _101.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _101.MsgBeginRedelegateProtoMsg): _101.MsgBeginRedelegate;
                toProto(message: _101.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _101.MsgBeginRedelegate): _101.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _101.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_101.MsgBeginRedelegateResponse>): _101.MsgBeginRedelegateResponse;
                fromAmino(object: _101.MsgBeginRedelegateResponseAmino): _101.MsgBeginRedelegateResponse;
                toAmino(message: _101.MsgBeginRedelegateResponse): _101.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _101.MsgBeginRedelegateResponseAminoMsg): _101.MsgBeginRedelegateResponse;
                toAminoMsg(message: _101.MsgBeginRedelegateResponse): _101.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _101.MsgBeginRedelegateResponseProtoMsg): _101.MsgBeginRedelegateResponse;
                toProto(message: _101.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _101.MsgBeginRedelegateResponse): _101.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _101.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgUndelegate;
                fromPartial(object: Partial<_101.MsgUndelegate>): _101.MsgUndelegate;
                fromAmino(object: _101.MsgUndelegateAmino): _101.MsgUndelegate;
                toAmino(message: _101.MsgUndelegate): _101.MsgUndelegateAmino;
                fromAminoMsg(object: _101.MsgUndelegateAminoMsg): _101.MsgUndelegate;
                toAminoMsg(message: _101.MsgUndelegate): _101.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _101.MsgUndelegateProtoMsg): _101.MsgUndelegate;
                toProto(message: _101.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _101.MsgUndelegate): _101.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _101.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgUndelegateResponse;
                fromPartial(object: Partial<_101.MsgUndelegateResponse>): _101.MsgUndelegateResponse;
                fromAmino(object: _101.MsgUndelegateResponseAmino): _101.MsgUndelegateResponse;
                toAmino(message: _101.MsgUndelegateResponse): _101.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _101.MsgUndelegateResponseAminoMsg): _101.MsgUndelegateResponse;
                toAminoMsg(message: _101.MsgUndelegateResponse): _101.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _101.MsgUndelegateResponseProtoMsg): _101.MsgUndelegateResponse;
                toProto(message: _101.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _101.MsgUndelegateResponse): _101.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _101.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_101.MsgCancelUnbondingDelegation>): _101.MsgCancelUnbondingDelegation;
                fromAmino(object: _101.MsgCancelUnbondingDelegationAmino): _101.MsgCancelUnbondingDelegation;
                toAmino(message: _101.MsgCancelUnbondingDelegation): _101.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _101.MsgCancelUnbondingDelegationAminoMsg): _101.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _101.MsgCancelUnbondingDelegation): _101.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _101.MsgCancelUnbondingDelegationProtoMsg): _101.MsgCancelUnbondingDelegation;
                toProto(message: _101.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _101.MsgCancelUnbondingDelegation): _101.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _101.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _101.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_101.MsgCancelUnbondingDelegationResponse>): _101.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _101.MsgCancelUnbondingDelegationResponseAmino): _101.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _101.MsgCancelUnbondingDelegationResponse): _101.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _101.MsgCancelUnbondingDelegationResponseAminoMsg): _101.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _101.MsgCancelUnbondingDelegationResponse): _101.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _101.MsgCancelUnbondingDelegationResponseProtoMsg): _101.MsgCancelUnbondingDelegationResponse;
                toProto(message: _101.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _101.MsgCancelUnbondingDelegationResponse): _101.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _100.BondStatus;
            bondStatusToJSON(object: _100.BondStatus): string;
            BondStatus: typeof _100.BondStatus;
            BondStatusSDKType: typeof _100.BondStatus;
            BondStatusAmino: typeof _100.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _100.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.HistoricalInfo;
                fromPartial(object: Partial<_100.HistoricalInfo>): _100.HistoricalInfo;
                fromAmino(object: _100.HistoricalInfoAmino): _100.HistoricalInfo;
                toAmino(message: _100.HistoricalInfo): _100.HistoricalInfoAmino;
                fromAminoMsg(object: _100.HistoricalInfoAminoMsg): _100.HistoricalInfo;
                toAminoMsg(message: _100.HistoricalInfo): _100.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _100.HistoricalInfoProtoMsg): _100.HistoricalInfo;
                toProto(message: _100.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _100.HistoricalInfo): _100.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _100.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.CommissionRates;
                fromPartial(object: Partial<_100.CommissionRates>): _100.CommissionRates;
                fromAmino(object: _100.CommissionRatesAmino): _100.CommissionRates;
                toAmino(message: _100.CommissionRates): _100.CommissionRatesAmino;
                fromAminoMsg(object: _100.CommissionRatesAminoMsg): _100.CommissionRates;
                toAminoMsg(message: _100.CommissionRates): _100.CommissionRatesAminoMsg;
                fromProtoMsg(message: _100.CommissionRatesProtoMsg): _100.CommissionRates;
                toProto(message: _100.CommissionRates): Uint8Array;
                toProtoMsg(message: _100.CommissionRates): _100.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _100.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.Commission;
                fromPartial(object: Partial<_100.Commission>): _100.Commission;
                fromAmino(object: _100.CommissionAmino): _100.Commission;
                toAmino(message: _100.Commission): _100.CommissionAmino;
                fromAminoMsg(object: _100.CommissionAminoMsg): _100.Commission;
                toAminoMsg(message: _100.Commission): _100.CommissionAminoMsg;
                fromProtoMsg(message: _100.CommissionProtoMsg): _100.Commission;
                toProto(message: _100.Commission): Uint8Array;
                toProtoMsg(message: _100.Commission): _100.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _100.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.Description;
                fromPartial(object: Partial<_100.Description>): _100.Description;
                fromAmino(object: _100.DescriptionAmino): _100.Description;
                toAmino(message: _100.Description): _100.DescriptionAmino;
                fromAminoMsg(object: _100.DescriptionAminoMsg): _100.Description;
                toAminoMsg(message: _100.Description): _100.DescriptionAminoMsg;
                fromProtoMsg(message: _100.DescriptionProtoMsg): _100.Description;
                toProto(message: _100.Description): Uint8Array;
                toProtoMsg(message: _100.Description): _100.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _100.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.Validator;
                fromPartial(object: Partial<_100.Validator>): _100.Validator;
                fromAmino(object: _100.ValidatorAmino): _100.Validator;
                toAmino(message: _100.Validator): _100.ValidatorAmino;
                fromAminoMsg(object: _100.ValidatorAminoMsg): _100.Validator;
                toAminoMsg(message: _100.Validator): _100.ValidatorAminoMsg;
                fromProtoMsg(message: _100.ValidatorProtoMsg): _100.Validator;
                toProto(message: _100.Validator): Uint8Array;
                toProtoMsg(message: _100.Validator): _100.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _100.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.ValAddresses;
                fromPartial(object: Partial<_100.ValAddresses>): _100.ValAddresses;
                fromAmino(object: _100.ValAddressesAmino): _100.ValAddresses;
                toAmino(message: _100.ValAddresses): _100.ValAddressesAmino;
                fromAminoMsg(object: _100.ValAddressesAminoMsg): _100.ValAddresses;
                toAminoMsg(message: _100.ValAddresses): _100.ValAddressesAminoMsg;
                fromProtoMsg(message: _100.ValAddressesProtoMsg): _100.ValAddresses;
                toProto(message: _100.ValAddresses): Uint8Array;
                toProtoMsg(message: _100.ValAddresses): _100.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _100.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.DVPair;
                fromPartial(object: Partial<_100.DVPair>): _100.DVPair;
                fromAmino(object: _100.DVPairAmino): _100.DVPair;
                toAmino(message: _100.DVPair): _100.DVPairAmino;
                fromAminoMsg(object: _100.DVPairAminoMsg): _100.DVPair;
                toAminoMsg(message: _100.DVPair): _100.DVPairAminoMsg;
                fromProtoMsg(message: _100.DVPairProtoMsg): _100.DVPair;
                toProto(message: _100.DVPair): Uint8Array;
                toProtoMsg(message: _100.DVPair): _100.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _100.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.DVPairs;
                fromPartial(object: Partial<_100.DVPairs>): _100.DVPairs;
                fromAmino(object: _100.DVPairsAmino): _100.DVPairs;
                toAmino(message: _100.DVPairs): _100.DVPairsAmino;
                fromAminoMsg(object: _100.DVPairsAminoMsg): _100.DVPairs;
                toAminoMsg(message: _100.DVPairs): _100.DVPairsAminoMsg;
                fromProtoMsg(message: _100.DVPairsProtoMsg): _100.DVPairs;
                toProto(message: _100.DVPairs): Uint8Array;
                toProtoMsg(message: _100.DVPairs): _100.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _100.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.DVVTriplet;
                fromPartial(object: Partial<_100.DVVTriplet>): _100.DVVTriplet;
                fromAmino(object: _100.DVVTripletAmino): _100.DVVTriplet;
                toAmino(message: _100.DVVTriplet): _100.DVVTripletAmino;
                fromAminoMsg(object: _100.DVVTripletAminoMsg): _100.DVVTriplet;
                toAminoMsg(message: _100.DVVTriplet): _100.DVVTripletAminoMsg;
                fromProtoMsg(message: _100.DVVTripletProtoMsg): _100.DVVTriplet;
                toProto(message: _100.DVVTriplet): Uint8Array;
                toProtoMsg(message: _100.DVVTriplet): _100.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _100.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.DVVTriplets;
                fromPartial(object: Partial<_100.DVVTriplets>): _100.DVVTriplets;
                fromAmino(object: _100.DVVTripletsAmino): _100.DVVTriplets;
                toAmino(message: _100.DVVTriplets): _100.DVVTripletsAmino;
                fromAminoMsg(object: _100.DVVTripletsAminoMsg): _100.DVVTriplets;
                toAminoMsg(message: _100.DVVTriplets): _100.DVVTripletsAminoMsg;
                fromProtoMsg(message: _100.DVVTripletsProtoMsg): _100.DVVTriplets;
                toProto(message: _100.DVVTriplets): Uint8Array;
                toProtoMsg(message: _100.DVVTriplets): _100.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _100.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.Delegation;
                fromPartial(object: Partial<_100.Delegation>): _100.Delegation;
                fromAmino(object: _100.DelegationAmino): _100.Delegation;
                toAmino(message: _100.Delegation): _100.DelegationAmino;
                fromAminoMsg(object: _100.DelegationAminoMsg): _100.Delegation;
                toAminoMsg(message: _100.Delegation): _100.DelegationAminoMsg;
                fromProtoMsg(message: _100.DelegationProtoMsg): _100.Delegation;
                toProto(message: _100.Delegation): Uint8Array;
                toProtoMsg(message: _100.Delegation): _100.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _100.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.UnbondingDelegation;
                fromPartial(object: Partial<_100.UnbondingDelegation>): _100.UnbondingDelegation;
                fromAmino(object: _100.UnbondingDelegationAmino): _100.UnbondingDelegation;
                toAmino(message: _100.UnbondingDelegation): _100.UnbondingDelegationAmino;
                fromAminoMsg(object: _100.UnbondingDelegationAminoMsg): _100.UnbondingDelegation;
                toAminoMsg(message: _100.UnbondingDelegation): _100.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _100.UnbondingDelegationProtoMsg): _100.UnbondingDelegation;
                toProto(message: _100.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _100.UnbondingDelegation): _100.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _100.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.UnbondingDelegationEntry;
                fromPartial(object: Partial<_100.UnbondingDelegationEntry>): _100.UnbondingDelegationEntry;
                fromAmino(object: _100.UnbondingDelegationEntryAmino): _100.UnbondingDelegationEntry;
                toAmino(message: _100.UnbondingDelegationEntry): _100.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _100.UnbondingDelegationEntryAminoMsg): _100.UnbondingDelegationEntry;
                toAminoMsg(message: _100.UnbondingDelegationEntry): _100.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _100.UnbondingDelegationEntryProtoMsg): _100.UnbondingDelegationEntry;
                toProto(message: _100.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _100.UnbondingDelegationEntry): _100.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _100.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.RedelegationEntry;
                fromPartial(object: Partial<_100.RedelegationEntry>): _100.RedelegationEntry;
                fromAmino(object: _100.RedelegationEntryAmino): _100.RedelegationEntry;
                toAmino(message: _100.RedelegationEntry): _100.RedelegationEntryAmino;
                fromAminoMsg(object: _100.RedelegationEntryAminoMsg): _100.RedelegationEntry;
                toAminoMsg(message: _100.RedelegationEntry): _100.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _100.RedelegationEntryProtoMsg): _100.RedelegationEntry;
                toProto(message: _100.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _100.RedelegationEntry): _100.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _100.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.Redelegation;
                fromPartial(object: Partial<_100.Redelegation>): _100.Redelegation;
                fromAmino(object: _100.RedelegationAmino): _100.Redelegation;
                toAmino(message: _100.Redelegation): _100.RedelegationAmino;
                fromAminoMsg(object: _100.RedelegationAminoMsg): _100.Redelegation;
                toAminoMsg(message: _100.Redelegation): _100.RedelegationAminoMsg;
                fromProtoMsg(message: _100.RedelegationProtoMsg): _100.Redelegation;
                toProto(message: _100.Redelegation): Uint8Array;
                toProtoMsg(message: _100.Redelegation): _100.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _100.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.Params;
                fromPartial(object: Partial<_100.Params>): _100.Params;
                fromAmino(object: _100.ParamsAmino): _100.Params;
                toAmino(message: _100.Params): _100.ParamsAmino;
                fromAminoMsg(object: _100.ParamsAminoMsg): _100.Params;
                toAminoMsg(message: _100.Params): _100.ParamsAminoMsg;
                fromProtoMsg(message: _100.ParamsProtoMsg): _100.Params;
                toProto(message: _100.Params): Uint8Array;
                toProtoMsg(message: _100.Params): _100.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _100.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.DelegationResponse;
                fromPartial(object: Partial<_100.DelegationResponse>): _100.DelegationResponse;
                fromAmino(object: _100.DelegationResponseAmino): _100.DelegationResponse;
                toAmino(message: _100.DelegationResponse): _100.DelegationResponseAmino;
                fromAminoMsg(object: _100.DelegationResponseAminoMsg): _100.DelegationResponse;
                toAminoMsg(message: _100.DelegationResponse): _100.DelegationResponseAminoMsg;
                fromProtoMsg(message: _100.DelegationResponseProtoMsg): _100.DelegationResponse;
                toProto(message: _100.DelegationResponse): Uint8Array;
                toProtoMsg(message: _100.DelegationResponse): _100.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _100.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.RedelegationEntryResponse;
                fromPartial(object: Partial<_100.RedelegationEntryResponse>): _100.RedelegationEntryResponse;
                fromAmino(object: _100.RedelegationEntryResponseAmino): _100.RedelegationEntryResponse;
                toAmino(message: _100.RedelegationEntryResponse): _100.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _100.RedelegationEntryResponseAminoMsg): _100.RedelegationEntryResponse;
                toAminoMsg(message: _100.RedelegationEntryResponse): _100.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _100.RedelegationEntryResponseProtoMsg): _100.RedelegationEntryResponse;
                toProto(message: _100.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _100.RedelegationEntryResponse): _100.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _100.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.RedelegationResponse;
                fromPartial(object: Partial<_100.RedelegationResponse>): _100.RedelegationResponse;
                fromAmino(object: _100.RedelegationResponseAmino): _100.RedelegationResponse;
                toAmino(message: _100.RedelegationResponse): _100.RedelegationResponseAmino;
                fromAminoMsg(object: _100.RedelegationResponseAminoMsg): _100.RedelegationResponse;
                toAminoMsg(message: _100.RedelegationResponse): _100.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _100.RedelegationResponseProtoMsg): _100.RedelegationResponse;
                toProto(message: _100.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _100.RedelegationResponse): _100.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _100.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.Pool;
                fromPartial(object: Partial<_100.Pool>): _100.Pool;
                fromAmino(object: _100.PoolAmino): _100.Pool;
                toAmino(message: _100.Pool): _100.PoolAmino;
                fromAminoMsg(object: _100.PoolAminoMsg): _100.Pool;
                toAminoMsg(message: _100.Pool): _100.PoolAminoMsg;
                fromProtoMsg(message: _100.PoolProtoMsg): _100.Pool;
                toProto(message: _100.Pool): Uint8Array;
                toProtoMsg(message: _100.Pool): _100.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _99.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryValidatorsRequest;
                fromPartial(object: Partial<_99.QueryValidatorsRequest>): _99.QueryValidatorsRequest;
                fromAmino(object: _99.QueryValidatorsRequestAmino): _99.QueryValidatorsRequest;
                toAmino(message: _99.QueryValidatorsRequest): _99.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _99.QueryValidatorsRequestAminoMsg): _99.QueryValidatorsRequest;
                toAminoMsg(message: _99.QueryValidatorsRequest): _99.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _99.QueryValidatorsRequestProtoMsg): _99.QueryValidatorsRequest;
                toProto(message: _99.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _99.QueryValidatorsRequest): _99.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _99.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryValidatorsResponse;
                fromPartial(object: Partial<_99.QueryValidatorsResponse>): _99.QueryValidatorsResponse;
                fromAmino(object: _99.QueryValidatorsResponseAmino): _99.QueryValidatorsResponse;
                toAmino(message: _99.QueryValidatorsResponse): _99.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _99.QueryValidatorsResponseAminoMsg): _99.QueryValidatorsResponse;
                toAminoMsg(message: _99.QueryValidatorsResponse): _99.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _99.QueryValidatorsResponseProtoMsg): _99.QueryValidatorsResponse;
                toProto(message: _99.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _99.QueryValidatorsResponse): _99.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _99.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryValidatorRequest;
                fromPartial(object: Partial<_99.QueryValidatorRequest>): _99.QueryValidatorRequest;
                fromAmino(object: _99.QueryValidatorRequestAmino): _99.QueryValidatorRequest;
                toAmino(message: _99.QueryValidatorRequest): _99.QueryValidatorRequestAmino;
                fromAminoMsg(object: _99.QueryValidatorRequestAminoMsg): _99.QueryValidatorRequest;
                toAminoMsg(message: _99.QueryValidatorRequest): _99.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _99.QueryValidatorRequestProtoMsg): _99.QueryValidatorRequest;
                toProto(message: _99.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _99.QueryValidatorRequest): _99.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _99.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryValidatorResponse;
                fromPartial(object: Partial<_99.QueryValidatorResponse>): _99.QueryValidatorResponse;
                fromAmino(object: _99.QueryValidatorResponseAmino): _99.QueryValidatorResponse;
                toAmino(message: _99.QueryValidatorResponse): _99.QueryValidatorResponseAmino;
                fromAminoMsg(object: _99.QueryValidatorResponseAminoMsg): _99.QueryValidatorResponse;
                toAminoMsg(message: _99.QueryValidatorResponse): _99.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _99.QueryValidatorResponseProtoMsg): _99.QueryValidatorResponse;
                toProto(message: _99.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _99.QueryValidatorResponse): _99.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _99.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_99.QueryValidatorDelegationsRequest>): _99.QueryValidatorDelegationsRequest;
                fromAmino(object: _99.QueryValidatorDelegationsRequestAmino): _99.QueryValidatorDelegationsRequest;
                toAmino(message: _99.QueryValidatorDelegationsRequest): _99.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _99.QueryValidatorDelegationsRequestAminoMsg): _99.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _99.QueryValidatorDelegationsRequest): _99.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _99.QueryValidatorDelegationsRequestProtoMsg): _99.QueryValidatorDelegationsRequest;
                toProto(message: _99.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _99.QueryValidatorDelegationsRequest): _99.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _99.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_99.QueryValidatorDelegationsResponse>): _99.QueryValidatorDelegationsResponse;
                fromAmino(object: _99.QueryValidatorDelegationsResponseAmino): _99.QueryValidatorDelegationsResponse;
                toAmino(message: _99.QueryValidatorDelegationsResponse): _99.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _99.QueryValidatorDelegationsResponseAminoMsg): _99.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _99.QueryValidatorDelegationsResponse): _99.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _99.QueryValidatorDelegationsResponseProtoMsg): _99.QueryValidatorDelegationsResponse;
                toProto(message: _99.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _99.QueryValidatorDelegationsResponse): _99.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _99.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_99.QueryValidatorUnbondingDelegationsRequest>): _99.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _99.QueryValidatorUnbondingDelegationsRequestAmino): _99.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _99.QueryValidatorUnbondingDelegationsRequest): _99.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _99.QueryValidatorUnbondingDelegationsRequestAminoMsg): _99.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _99.QueryValidatorUnbondingDelegationsRequest): _99.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _99.QueryValidatorUnbondingDelegationsRequestProtoMsg): _99.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _99.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _99.QueryValidatorUnbondingDelegationsRequest): _99.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _99.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_99.QueryValidatorUnbondingDelegationsResponse>): _99.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _99.QueryValidatorUnbondingDelegationsResponseAmino): _99.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _99.QueryValidatorUnbondingDelegationsResponse): _99.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _99.QueryValidatorUnbondingDelegationsResponseAminoMsg): _99.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _99.QueryValidatorUnbondingDelegationsResponse): _99.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _99.QueryValidatorUnbondingDelegationsResponseProtoMsg): _99.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _99.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _99.QueryValidatorUnbondingDelegationsResponse): _99.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _99.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryDelegationRequest;
                fromPartial(object: Partial<_99.QueryDelegationRequest>): _99.QueryDelegationRequest;
                fromAmino(object: _99.QueryDelegationRequestAmino): _99.QueryDelegationRequest;
                toAmino(message: _99.QueryDelegationRequest): _99.QueryDelegationRequestAmino;
                fromAminoMsg(object: _99.QueryDelegationRequestAminoMsg): _99.QueryDelegationRequest;
                toAminoMsg(message: _99.QueryDelegationRequest): _99.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _99.QueryDelegationRequestProtoMsg): _99.QueryDelegationRequest;
                toProto(message: _99.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _99.QueryDelegationRequest): _99.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _99.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryDelegationResponse;
                fromPartial(object: Partial<_99.QueryDelegationResponse>): _99.QueryDelegationResponse;
                fromAmino(object: _99.QueryDelegationResponseAmino): _99.QueryDelegationResponse;
                toAmino(message: _99.QueryDelegationResponse): _99.QueryDelegationResponseAmino;
                fromAminoMsg(object: _99.QueryDelegationResponseAminoMsg): _99.QueryDelegationResponse;
                toAminoMsg(message: _99.QueryDelegationResponse): _99.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _99.QueryDelegationResponseProtoMsg): _99.QueryDelegationResponse;
                toProto(message: _99.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _99.QueryDelegationResponse): _99.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _99.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_99.QueryUnbondingDelegationRequest>): _99.QueryUnbondingDelegationRequest;
                fromAmino(object: _99.QueryUnbondingDelegationRequestAmino): _99.QueryUnbondingDelegationRequest;
                toAmino(message: _99.QueryUnbondingDelegationRequest): _99.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _99.QueryUnbondingDelegationRequestAminoMsg): _99.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _99.QueryUnbondingDelegationRequest): _99.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _99.QueryUnbondingDelegationRequestProtoMsg): _99.QueryUnbondingDelegationRequest;
                toProto(message: _99.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _99.QueryUnbondingDelegationRequest): _99.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _99.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_99.QueryUnbondingDelegationResponse>): _99.QueryUnbondingDelegationResponse;
                fromAmino(object: _99.QueryUnbondingDelegationResponseAmino): _99.QueryUnbondingDelegationResponse;
                toAmino(message: _99.QueryUnbondingDelegationResponse): _99.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _99.QueryUnbondingDelegationResponseAminoMsg): _99.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _99.QueryUnbondingDelegationResponse): _99.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _99.QueryUnbondingDelegationResponseProtoMsg): _99.QueryUnbondingDelegationResponse;
                toProto(message: _99.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _99.QueryUnbondingDelegationResponse): _99.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _99.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_99.QueryDelegatorDelegationsRequest>): _99.QueryDelegatorDelegationsRequest;
                fromAmino(object: _99.QueryDelegatorDelegationsRequestAmino): _99.QueryDelegatorDelegationsRequest;
                toAmino(message: _99.QueryDelegatorDelegationsRequest): _99.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _99.QueryDelegatorDelegationsRequestAminoMsg): _99.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _99.QueryDelegatorDelegationsRequest): _99.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _99.QueryDelegatorDelegationsRequestProtoMsg): _99.QueryDelegatorDelegationsRequest;
                toProto(message: _99.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _99.QueryDelegatorDelegationsRequest): _99.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _99.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_99.QueryDelegatorDelegationsResponse>): _99.QueryDelegatorDelegationsResponse;
                fromAmino(object: _99.QueryDelegatorDelegationsResponseAmino): _99.QueryDelegatorDelegationsResponse;
                toAmino(message: _99.QueryDelegatorDelegationsResponse): _99.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _99.QueryDelegatorDelegationsResponseAminoMsg): _99.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _99.QueryDelegatorDelegationsResponse): _99.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _99.QueryDelegatorDelegationsResponseProtoMsg): _99.QueryDelegatorDelegationsResponse;
                toProto(message: _99.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _99.QueryDelegatorDelegationsResponse): _99.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _99.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_99.QueryDelegatorUnbondingDelegationsRequest>): _99.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _99.QueryDelegatorUnbondingDelegationsRequestAmino): _99.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _99.QueryDelegatorUnbondingDelegationsRequest): _99.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _99.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _99.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _99.QueryDelegatorUnbondingDelegationsRequest): _99.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _99.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _99.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _99.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _99.QueryDelegatorUnbondingDelegationsRequest): _99.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _99.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_99.QueryDelegatorUnbondingDelegationsResponse>): _99.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _99.QueryDelegatorUnbondingDelegationsResponseAmino): _99.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _99.QueryDelegatorUnbondingDelegationsResponse): _99.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _99.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _99.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _99.QueryDelegatorUnbondingDelegationsResponse): _99.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _99.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _99.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _99.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _99.QueryDelegatorUnbondingDelegationsResponse): _99.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _99.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryRedelegationsRequest;
                fromPartial(object: Partial<_99.QueryRedelegationsRequest>): _99.QueryRedelegationsRequest;
                fromAmino(object: _99.QueryRedelegationsRequestAmino): _99.QueryRedelegationsRequest;
                toAmino(message: _99.QueryRedelegationsRequest): _99.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _99.QueryRedelegationsRequestAminoMsg): _99.QueryRedelegationsRequest;
                toAminoMsg(message: _99.QueryRedelegationsRequest): _99.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _99.QueryRedelegationsRequestProtoMsg): _99.QueryRedelegationsRequest;
                toProto(message: _99.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _99.QueryRedelegationsRequest): _99.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _99.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryRedelegationsResponse;
                fromPartial(object: Partial<_99.QueryRedelegationsResponse>): _99.QueryRedelegationsResponse;
                fromAmino(object: _99.QueryRedelegationsResponseAmino): _99.QueryRedelegationsResponse;
                toAmino(message: _99.QueryRedelegationsResponse): _99.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _99.QueryRedelegationsResponseAminoMsg): _99.QueryRedelegationsResponse;
                toAminoMsg(message: _99.QueryRedelegationsResponse): _99.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _99.QueryRedelegationsResponseProtoMsg): _99.QueryRedelegationsResponse;
                toProto(message: _99.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _99.QueryRedelegationsResponse): _99.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _99.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_99.QueryDelegatorValidatorsRequest>): _99.QueryDelegatorValidatorsRequest;
                fromAmino(object: _99.QueryDelegatorValidatorsRequestAmino): _99.QueryDelegatorValidatorsRequest;
                toAmino(message: _99.QueryDelegatorValidatorsRequest): _99.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _99.QueryDelegatorValidatorsRequestAminoMsg): _99.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _99.QueryDelegatorValidatorsRequest): _99.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _99.QueryDelegatorValidatorsRequestProtoMsg): _99.QueryDelegatorValidatorsRequest;
                toProto(message: _99.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _99.QueryDelegatorValidatorsRequest): _99.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _99.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_99.QueryDelegatorValidatorsResponse>): _99.QueryDelegatorValidatorsResponse;
                fromAmino(object: _99.QueryDelegatorValidatorsResponseAmino): _99.QueryDelegatorValidatorsResponse;
                toAmino(message: _99.QueryDelegatorValidatorsResponse): _99.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _99.QueryDelegatorValidatorsResponseAminoMsg): _99.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _99.QueryDelegatorValidatorsResponse): _99.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _99.QueryDelegatorValidatorsResponseProtoMsg): _99.QueryDelegatorValidatorsResponse;
                toProto(message: _99.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _99.QueryDelegatorValidatorsResponse): _99.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _99.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_99.QueryDelegatorValidatorRequest>): _99.QueryDelegatorValidatorRequest;
                fromAmino(object: _99.QueryDelegatorValidatorRequestAmino): _99.QueryDelegatorValidatorRequest;
                toAmino(message: _99.QueryDelegatorValidatorRequest): _99.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _99.QueryDelegatorValidatorRequestAminoMsg): _99.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _99.QueryDelegatorValidatorRequest): _99.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _99.QueryDelegatorValidatorRequestProtoMsg): _99.QueryDelegatorValidatorRequest;
                toProto(message: _99.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _99.QueryDelegatorValidatorRequest): _99.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _99.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_99.QueryDelegatorValidatorResponse>): _99.QueryDelegatorValidatorResponse;
                fromAmino(object: _99.QueryDelegatorValidatorResponseAmino): _99.QueryDelegatorValidatorResponse;
                toAmino(message: _99.QueryDelegatorValidatorResponse): _99.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _99.QueryDelegatorValidatorResponseAminoMsg): _99.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _99.QueryDelegatorValidatorResponse): _99.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _99.QueryDelegatorValidatorResponseProtoMsg): _99.QueryDelegatorValidatorResponse;
                toProto(message: _99.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _99.QueryDelegatorValidatorResponse): _99.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _99.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_99.QueryHistoricalInfoRequest>): _99.QueryHistoricalInfoRequest;
                fromAmino(object: _99.QueryHistoricalInfoRequestAmino): _99.QueryHistoricalInfoRequest;
                toAmino(message: _99.QueryHistoricalInfoRequest): _99.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _99.QueryHistoricalInfoRequestAminoMsg): _99.QueryHistoricalInfoRequest;
                toAminoMsg(message: _99.QueryHistoricalInfoRequest): _99.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _99.QueryHistoricalInfoRequestProtoMsg): _99.QueryHistoricalInfoRequest;
                toProto(message: _99.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _99.QueryHistoricalInfoRequest): _99.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _99.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_99.QueryHistoricalInfoResponse>): _99.QueryHistoricalInfoResponse;
                fromAmino(object: _99.QueryHistoricalInfoResponseAmino): _99.QueryHistoricalInfoResponse;
                toAmino(message: _99.QueryHistoricalInfoResponse): _99.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _99.QueryHistoricalInfoResponseAminoMsg): _99.QueryHistoricalInfoResponse;
                toAminoMsg(message: _99.QueryHistoricalInfoResponse): _99.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _99.QueryHistoricalInfoResponseProtoMsg): _99.QueryHistoricalInfoResponse;
                toProto(message: _99.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _99.QueryHistoricalInfoResponse): _99.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _99.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _99.QueryPoolRequest;
                fromPartial(_: Partial<_99.QueryPoolRequest>): _99.QueryPoolRequest;
                fromAmino(_: _99.QueryPoolRequestAmino): _99.QueryPoolRequest;
                toAmino(_: _99.QueryPoolRequest): _99.QueryPoolRequestAmino;
                fromAminoMsg(object: _99.QueryPoolRequestAminoMsg): _99.QueryPoolRequest;
                toAminoMsg(message: _99.QueryPoolRequest): _99.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _99.QueryPoolRequestProtoMsg): _99.QueryPoolRequest;
                toProto(message: _99.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _99.QueryPoolRequest): _99.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _99.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryPoolResponse;
                fromPartial(object: Partial<_99.QueryPoolResponse>): _99.QueryPoolResponse;
                fromAmino(object: _99.QueryPoolResponseAmino): _99.QueryPoolResponse;
                toAmino(message: _99.QueryPoolResponse): _99.QueryPoolResponseAmino;
                fromAminoMsg(object: _99.QueryPoolResponseAminoMsg): _99.QueryPoolResponse;
                toAminoMsg(message: _99.QueryPoolResponse): _99.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _99.QueryPoolResponseProtoMsg): _99.QueryPoolResponse;
                toProto(message: _99.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _99.QueryPoolResponse): _99.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _99.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _99.QueryParamsRequest;
                fromPartial(_: Partial<_99.QueryParamsRequest>): _99.QueryParamsRequest;
                fromAmino(_: _99.QueryParamsRequestAmino): _99.QueryParamsRequest;
                toAmino(_: _99.QueryParamsRequest): _99.QueryParamsRequestAmino;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _98.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.LastValidatorPower;
                fromPartial(object: Partial<_98.LastValidatorPower>): _98.LastValidatorPower;
                fromAmino(object: _98.LastValidatorPowerAmino): _98.LastValidatorPower;
                toAmino(message: _98.LastValidatorPower): _98.LastValidatorPowerAmino;
                fromAminoMsg(object: _98.LastValidatorPowerAminoMsg): _98.LastValidatorPower;
                toAminoMsg(message: _98.LastValidatorPower): _98.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _98.LastValidatorPowerProtoMsg): _98.LastValidatorPower;
                toProto(message: _98.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _98.LastValidatorPower): _98.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _97.AuthorizationType;
            authorizationTypeToJSON(object: _97.AuthorizationType): string;
            AuthorizationType: typeof _97.AuthorizationType;
            AuthorizationTypeSDKType: typeof _97.AuthorizationType;
            AuthorizationTypeAmino: typeof _97.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _97.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.StakeAuthorization;
                fromPartial(object: Partial<_97.StakeAuthorization>): _97.StakeAuthorization;
                fromAmino(object: _97.StakeAuthorizationAmino): _97.StakeAuthorization;
                toAmino(message: _97.StakeAuthorization): _97.StakeAuthorizationAmino;
                fromAminoMsg(object: _97.StakeAuthorizationAminoMsg): _97.StakeAuthorization;
                toAminoMsg(message: _97.StakeAuthorization): _97.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _97.StakeAuthorizationProtoMsg): _97.StakeAuthorization;
                toProto(message: _97.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _97.StakeAuthorization): _97.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _97.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.StakeAuthorization_Validators;
                fromPartial(object: Partial<_97.StakeAuthorization_Validators>): _97.StakeAuthorization_Validators;
                fromAmino(object: _97.StakeAuthorization_ValidatorsAmino): _97.StakeAuthorization_Validators;
                toAmino(message: _97.StakeAuthorization_Validators): _97.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _97.StakeAuthorization_ValidatorsAminoMsg): _97.StakeAuthorization_Validators;
                toAminoMsg(message: _97.StakeAuthorization_Validators): _97.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _97.StakeAuthorization_ValidatorsProtoMsg): _97.StakeAuthorization_Validators;
                toProto(message: _97.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _97.StakeAuthorization_Validators): _97.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _102.SignMode;
                signModeToJSON(object: _102.SignMode): string;
                SignMode: typeof _102.SignMode;
                SignModeSDKType: typeof _102.SignMode;
                SignModeAmino: typeof _102.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _102.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.SignatureDescriptors;
                    fromPartial(object: Partial<_102.SignatureDescriptors>): _102.SignatureDescriptors;
                    fromAmino(object: _102.SignatureDescriptorsAmino): _102.SignatureDescriptors;
                    toAmino(message: _102.SignatureDescriptors): _102.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _102.SignatureDescriptorsAminoMsg): _102.SignatureDescriptors;
                    toAminoMsg(message: _102.SignatureDescriptors): _102.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _102.SignatureDescriptorsProtoMsg): _102.SignatureDescriptors;
                    toProto(message: _102.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _102.SignatureDescriptors): _102.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _102.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.SignatureDescriptor;
                    fromPartial(object: Partial<_102.SignatureDescriptor>): _102.SignatureDescriptor;
                    fromAmino(object: _102.SignatureDescriptorAmino): _102.SignatureDescriptor;
                    toAmino(message: _102.SignatureDescriptor): _102.SignatureDescriptorAmino;
                    fromAminoMsg(object: _102.SignatureDescriptorAminoMsg): _102.SignatureDescriptor;
                    toAminoMsg(message: _102.SignatureDescriptor): _102.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _102.SignatureDescriptorProtoMsg): _102.SignatureDescriptor;
                    toProto(message: _102.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _102.SignatureDescriptor): _102.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _102.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_102.SignatureDescriptor_Data>): _102.SignatureDescriptor_Data;
                    fromAmino(object: _102.SignatureDescriptor_DataAmino): _102.SignatureDescriptor_Data;
                    toAmino(message: _102.SignatureDescriptor_Data): _102.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _102.SignatureDescriptor_DataAminoMsg): _102.SignatureDescriptor_Data;
                    toAminoMsg(message: _102.SignatureDescriptor_Data): _102.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _102.SignatureDescriptor_DataProtoMsg): _102.SignatureDescriptor_Data;
                    toProto(message: _102.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _102.SignatureDescriptor_Data): _102.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _102.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_102.SignatureDescriptor_Data_Single>): _102.SignatureDescriptor_Data_Single;
                    fromAmino(object: _102.SignatureDescriptor_Data_SingleAmino): _102.SignatureDescriptor_Data_Single;
                    toAmino(message: _102.SignatureDescriptor_Data_Single): _102.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _102.SignatureDescriptor_Data_SingleAminoMsg): _102.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _102.SignatureDescriptor_Data_Single): _102.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _102.SignatureDescriptor_Data_SingleProtoMsg): _102.SignatureDescriptor_Data_Single;
                    toProto(message: _102.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _102.SignatureDescriptor_Data_Single): _102.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _102.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_102.SignatureDescriptor_Data_Multi>): _102.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _102.SignatureDescriptor_Data_MultiAmino): _102.SignatureDescriptor_Data_Multi;
                    toAmino(message: _102.SignatureDescriptor_Data_Multi): _102.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _102.SignatureDescriptor_Data_MultiAminoMsg): _102.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _102.SignatureDescriptor_Data_Multi): _102.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _102.SignatureDescriptor_Data_MultiProtoMsg): _102.SignatureDescriptor_Data_Multi;
                    toProto(message: _102.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _102.SignatureDescriptor_Data_Multi): _102.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _207.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _103.SimulateRequest): Promise<_103.SimulateResponse>;
                getTx(request: _103.GetTxRequest): Promise<_103.GetTxResponse>;
                broadcastTx(request: _103.BroadcastTxRequest): Promise<_103.BroadcastTxResponse>;
                getTxsEvent(request: _103.GetTxsEventRequest): Promise<_103.GetTxsEventResponse>;
                getBlockWithTxs(request: _103.GetBlockWithTxsRequest): Promise<_103.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _188.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _104.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.Tx;
                fromPartial(object: Partial<_104.Tx>): _104.Tx;
                fromAmino(object: _104.TxAmino): _104.Tx;
                toAmino(message: _104.Tx): _104.TxAmino;
                fromAminoMsg(object: _104.TxAminoMsg): _104.Tx;
                toAminoMsg(message: _104.Tx): _104.TxAminoMsg;
                fromProtoMsg(message: _104.TxProtoMsg): _104.Tx;
                toProto(message: _104.Tx): Uint8Array;
                toProtoMsg(message: _104.Tx): _104.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _104.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.TxRaw;
                fromPartial(object: Partial<_104.TxRaw>): _104.TxRaw;
                fromAmino(object: _104.TxRawAmino): _104.TxRaw;
                toAmino(message: _104.TxRaw): _104.TxRawAmino;
                fromAminoMsg(object: _104.TxRawAminoMsg): _104.TxRaw;
                toAminoMsg(message: _104.TxRaw): _104.TxRawAminoMsg;
                fromProtoMsg(message: _104.TxRawProtoMsg): _104.TxRaw;
                toProto(message: _104.TxRaw): Uint8Array;
                toProtoMsg(message: _104.TxRaw): _104.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _104.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.SignDoc;
                fromPartial(object: Partial<_104.SignDoc>): _104.SignDoc;
                fromAmino(object: _104.SignDocAmino): _104.SignDoc;
                toAmino(message: _104.SignDoc): _104.SignDocAmino;
                fromAminoMsg(object: _104.SignDocAminoMsg): _104.SignDoc;
                toAminoMsg(message: _104.SignDoc): _104.SignDocAminoMsg;
                fromProtoMsg(message: _104.SignDocProtoMsg): _104.SignDoc;
                toProto(message: _104.SignDoc): Uint8Array;
                toProtoMsg(message: _104.SignDoc): _104.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _104.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.SignDocDirectAux;
                fromPartial(object: Partial<_104.SignDocDirectAux>): _104.SignDocDirectAux;
                fromAmino(object: _104.SignDocDirectAuxAmino): _104.SignDocDirectAux;
                toAmino(message: _104.SignDocDirectAux): _104.SignDocDirectAuxAmino;
                fromAminoMsg(object: _104.SignDocDirectAuxAminoMsg): _104.SignDocDirectAux;
                toAminoMsg(message: _104.SignDocDirectAux): _104.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _104.SignDocDirectAuxProtoMsg): _104.SignDocDirectAux;
                toProto(message: _104.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _104.SignDocDirectAux): _104.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _104.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.TxBody;
                fromPartial(object: Partial<_104.TxBody>): _104.TxBody;
                fromAmino(object: _104.TxBodyAmino): _104.TxBody;
                toAmino(message: _104.TxBody): _104.TxBodyAmino;
                fromAminoMsg(object: _104.TxBodyAminoMsg): _104.TxBody;
                toAminoMsg(message: _104.TxBody): _104.TxBodyAminoMsg;
                fromProtoMsg(message: _104.TxBodyProtoMsg): _104.TxBody;
                toProto(message: _104.TxBody): Uint8Array;
                toProtoMsg(message: _104.TxBody): _104.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _104.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.AuthInfo;
                fromPartial(object: Partial<_104.AuthInfo>): _104.AuthInfo;
                fromAmino(object: _104.AuthInfoAmino): _104.AuthInfo;
                toAmino(message: _104.AuthInfo): _104.AuthInfoAmino;
                fromAminoMsg(object: _104.AuthInfoAminoMsg): _104.AuthInfo;
                toAminoMsg(message: _104.AuthInfo): _104.AuthInfoAminoMsg;
                fromProtoMsg(message: _104.AuthInfoProtoMsg): _104.AuthInfo;
                toProto(message: _104.AuthInfo): Uint8Array;
                toProtoMsg(message: _104.AuthInfo): _104.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _104.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.SignerInfo;
                fromPartial(object: Partial<_104.SignerInfo>): _104.SignerInfo;
                fromAmino(object: _104.SignerInfoAmino): _104.SignerInfo;
                toAmino(message: _104.SignerInfo): _104.SignerInfoAmino;
                fromAminoMsg(object: _104.SignerInfoAminoMsg): _104.SignerInfo;
                toAminoMsg(message: _104.SignerInfo): _104.SignerInfoAminoMsg;
                fromProtoMsg(message: _104.SignerInfoProtoMsg): _104.SignerInfo;
                toProto(message: _104.SignerInfo): Uint8Array;
                toProtoMsg(message: _104.SignerInfo): _104.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _104.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ModeInfo;
                fromPartial(object: Partial<_104.ModeInfo>): _104.ModeInfo;
                fromAmino(object: _104.ModeInfoAmino): _104.ModeInfo;
                toAmino(message: _104.ModeInfo): _104.ModeInfoAmino;
                fromAminoMsg(object: _104.ModeInfoAminoMsg): _104.ModeInfo;
                toAminoMsg(message: _104.ModeInfo): _104.ModeInfoAminoMsg;
                fromProtoMsg(message: _104.ModeInfoProtoMsg): _104.ModeInfo;
                toProto(message: _104.ModeInfo): Uint8Array;
                toProtoMsg(message: _104.ModeInfo): _104.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _104.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ModeInfo_Single;
                fromPartial(object: Partial<_104.ModeInfo_Single>): _104.ModeInfo_Single;
                fromAmino(object: _104.ModeInfo_SingleAmino): _104.ModeInfo_Single;
                toAmino(message: _104.ModeInfo_Single): _104.ModeInfo_SingleAmino;
                fromAminoMsg(object: _104.ModeInfo_SingleAminoMsg): _104.ModeInfo_Single;
                toAminoMsg(message: _104.ModeInfo_Single): _104.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _104.ModeInfo_SingleProtoMsg): _104.ModeInfo_Single;
                toProto(message: _104.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _104.ModeInfo_Single): _104.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _104.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ModeInfo_Multi;
                fromPartial(object: Partial<_104.ModeInfo_Multi>): _104.ModeInfo_Multi;
                fromAmino(object: _104.ModeInfo_MultiAmino): _104.ModeInfo_Multi;
                toAmino(message: _104.ModeInfo_Multi): _104.ModeInfo_MultiAmino;
                fromAminoMsg(object: _104.ModeInfo_MultiAminoMsg): _104.ModeInfo_Multi;
                toAminoMsg(message: _104.ModeInfo_Multi): _104.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _104.ModeInfo_MultiProtoMsg): _104.ModeInfo_Multi;
                toProto(message: _104.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _104.ModeInfo_Multi): _104.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _104.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.Fee;
                fromPartial(object: Partial<_104.Fee>): _104.Fee;
                fromAmino(object: _104.FeeAmino): _104.Fee;
                toAmino(message: _104.Fee): _104.FeeAmino;
                fromAminoMsg(object: _104.FeeAminoMsg): _104.Fee;
                toAminoMsg(message: _104.Fee): _104.FeeAminoMsg;
                fromProtoMsg(message: _104.FeeProtoMsg): _104.Fee;
                toProto(message: _104.Fee): Uint8Array;
                toProtoMsg(message: _104.Fee): _104.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _104.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.Tip;
                fromPartial(object: Partial<_104.Tip>): _104.Tip;
                fromAmino(object: _104.TipAmino): _104.Tip;
                toAmino(message: _104.Tip): _104.TipAmino;
                fromAminoMsg(object: _104.TipAminoMsg): _104.Tip;
                toAminoMsg(message: _104.Tip): _104.TipAminoMsg;
                fromProtoMsg(message: _104.TipProtoMsg): _104.Tip;
                toProto(message: _104.Tip): Uint8Array;
                toProtoMsg(message: _104.Tip): _104.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _104.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.AuxSignerData;
                fromPartial(object: Partial<_104.AuxSignerData>): _104.AuxSignerData;
                fromAmino(object: _104.AuxSignerDataAmino): _104.AuxSignerData;
                toAmino(message: _104.AuxSignerData): _104.AuxSignerDataAmino;
                fromAminoMsg(object: _104.AuxSignerDataAminoMsg): _104.AuxSignerData;
                toAminoMsg(message: _104.AuxSignerData): _104.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _104.AuxSignerDataProtoMsg): _104.AuxSignerData;
                toProto(message: _104.AuxSignerData): Uint8Array;
                toProtoMsg(message: _104.AuxSignerData): _104.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _103.OrderBy;
            orderByToJSON(object: _103.OrderBy): string;
            broadcastModeFromJSON(object: any): _103.BroadcastMode;
            broadcastModeToJSON(object: _103.BroadcastMode): string;
            OrderBy: typeof _103.OrderBy;
            OrderBySDKType: typeof _103.OrderBy;
            OrderByAmino: typeof _103.OrderBy;
            BroadcastMode: typeof _103.BroadcastMode;
            BroadcastModeSDKType: typeof _103.BroadcastMode;
            BroadcastModeAmino: typeof _103.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _103.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.GetTxsEventRequest;
                fromPartial(object: Partial<_103.GetTxsEventRequest>): _103.GetTxsEventRequest;
                fromAmino(object: _103.GetTxsEventRequestAmino): _103.GetTxsEventRequest;
                toAmino(message: _103.GetTxsEventRequest): _103.GetTxsEventRequestAmino;
                fromAminoMsg(object: _103.GetTxsEventRequestAminoMsg): _103.GetTxsEventRequest;
                toAminoMsg(message: _103.GetTxsEventRequest): _103.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _103.GetTxsEventRequestProtoMsg): _103.GetTxsEventRequest;
                toProto(message: _103.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _103.GetTxsEventRequest): _103.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _103.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.GetTxsEventResponse;
                fromPartial(object: Partial<_103.GetTxsEventResponse>): _103.GetTxsEventResponse;
                fromAmino(object: _103.GetTxsEventResponseAmino): _103.GetTxsEventResponse;
                toAmino(message: _103.GetTxsEventResponse): _103.GetTxsEventResponseAmino;
                fromAminoMsg(object: _103.GetTxsEventResponseAminoMsg): _103.GetTxsEventResponse;
                toAminoMsg(message: _103.GetTxsEventResponse): _103.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _103.GetTxsEventResponseProtoMsg): _103.GetTxsEventResponse;
                toProto(message: _103.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _103.GetTxsEventResponse): _103.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _103.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.BroadcastTxRequest;
                fromPartial(object: Partial<_103.BroadcastTxRequest>): _103.BroadcastTxRequest;
                fromAmino(object: _103.BroadcastTxRequestAmino): _103.BroadcastTxRequest;
                toAmino(message: _103.BroadcastTxRequest): _103.BroadcastTxRequestAmino;
                fromAminoMsg(object: _103.BroadcastTxRequestAminoMsg): _103.BroadcastTxRequest;
                toAminoMsg(message: _103.BroadcastTxRequest): _103.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _103.BroadcastTxRequestProtoMsg): _103.BroadcastTxRequest;
                toProto(message: _103.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _103.BroadcastTxRequest): _103.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _103.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.BroadcastTxResponse;
                fromPartial(object: Partial<_103.BroadcastTxResponse>): _103.BroadcastTxResponse;
                fromAmino(object: _103.BroadcastTxResponseAmino): _103.BroadcastTxResponse;
                toAmino(message: _103.BroadcastTxResponse): _103.BroadcastTxResponseAmino;
                fromAminoMsg(object: _103.BroadcastTxResponseAminoMsg): _103.BroadcastTxResponse;
                toAminoMsg(message: _103.BroadcastTxResponse): _103.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _103.BroadcastTxResponseProtoMsg): _103.BroadcastTxResponse;
                toProto(message: _103.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _103.BroadcastTxResponse): _103.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _103.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.SimulateRequest;
                fromPartial(object: Partial<_103.SimulateRequest>): _103.SimulateRequest;
                fromAmino(object: _103.SimulateRequestAmino): _103.SimulateRequest;
                toAmino(message: _103.SimulateRequest): _103.SimulateRequestAmino;
                fromAminoMsg(object: _103.SimulateRequestAminoMsg): _103.SimulateRequest;
                toAminoMsg(message: _103.SimulateRequest): _103.SimulateRequestAminoMsg;
                fromProtoMsg(message: _103.SimulateRequestProtoMsg): _103.SimulateRequest;
                toProto(message: _103.SimulateRequest): Uint8Array;
                toProtoMsg(message: _103.SimulateRequest): _103.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _103.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.SimulateResponse;
                fromPartial(object: Partial<_103.SimulateResponse>): _103.SimulateResponse;
                fromAmino(object: _103.SimulateResponseAmino): _103.SimulateResponse;
                toAmino(message: _103.SimulateResponse): _103.SimulateResponseAmino;
                fromAminoMsg(object: _103.SimulateResponseAminoMsg): _103.SimulateResponse;
                toAminoMsg(message: _103.SimulateResponse): _103.SimulateResponseAminoMsg;
                fromProtoMsg(message: _103.SimulateResponseProtoMsg): _103.SimulateResponse;
                toProto(message: _103.SimulateResponse): Uint8Array;
                toProtoMsg(message: _103.SimulateResponse): _103.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _103.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.GetTxRequest;
                fromPartial(object: Partial<_103.GetTxRequest>): _103.GetTxRequest;
                fromAmino(object: _103.GetTxRequestAmino): _103.GetTxRequest;
                toAmino(message: _103.GetTxRequest): _103.GetTxRequestAmino;
                fromAminoMsg(object: _103.GetTxRequestAminoMsg): _103.GetTxRequest;
                toAminoMsg(message: _103.GetTxRequest): _103.GetTxRequestAminoMsg;
                fromProtoMsg(message: _103.GetTxRequestProtoMsg): _103.GetTxRequest;
                toProto(message: _103.GetTxRequest): Uint8Array;
                toProtoMsg(message: _103.GetTxRequest): _103.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _103.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.GetTxResponse;
                fromPartial(object: Partial<_103.GetTxResponse>): _103.GetTxResponse;
                fromAmino(object: _103.GetTxResponseAmino): _103.GetTxResponse;
                toAmino(message: _103.GetTxResponse): _103.GetTxResponseAmino;
                fromAminoMsg(object: _103.GetTxResponseAminoMsg): _103.GetTxResponse;
                toAminoMsg(message: _103.GetTxResponse): _103.GetTxResponseAminoMsg;
                fromProtoMsg(message: _103.GetTxResponseProtoMsg): _103.GetTxResponse;
                toProto(message: _103.GetTxResponse): Uint8Array;
                toProtoMsg(message: _103.GetTxResponse): _103.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _103.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_103.GetBlockWithTxsRequest>): _103.GetBlockWithTxsRequest;
                fromAmino(object: _103.GetBlockWithTxsRequestAmino): _103.GetBlockWithTxsRequest;
                toAmino(message: _103.GetBlockWithTxsRequest): _103.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _103.GetBlockWithTxsRequestAminoMsg): _103.GetBlockWithTxsRequest;
                toAminoMsg(message: _103.GetBlockWithTxsRequest): _103.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _103.GetBlockWithTxsRequestProtoMsg): _103.GetBlockWithTxsRequest;
                toProto(message: _103.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _103.GetBlockWithTxsRequest): _103.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _103.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_103.GetBlockWithTxsResponse>): _103.GetBlockWithTxsResponse;
                fromAmino(object: _103.GetBlockWithTxsResponseAmino): _103.GetBlockWithTxsResponse;
                toAmino(message: _103.GetBlockWithTxsResponse): _103.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _103.GetBlockWithTxsResponseAminoMsg): _103.GetBlockWithTxsResponse;
                toAminoMsg(message: _103.GetBlockWithTxsResponse): _103.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _103.GetBlockWithTxsResponseProtoMsg): _103.GetBlockWithTxsResponse;
                toProto(message: _103.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _103.GetBlockWithTxsResponse): _103.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _221.MsgClientImpl;
            QueryClientImpl: typeof _208.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _105.QueryCurrentPlanRequest): Promise<_105.QueryCurrentPlanResponse>;
                appliedPlan(request: _105.QueryAppliedPlanRequest): Promise<_105.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _105.QueryUpgradedConsensusStateRequest): Promise<_105.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _105.QueryModuleVersionsRequest): Promise<_105.QueryModuleVersionsResponse>;
                authority(request?: _105.QueryAuthorityRequest): Promise<_105.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _189.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _106.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _106.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _106.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _106.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _106.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _106.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _106.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _106.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _106.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _106.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _106.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _106.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _106.MsgSoftwareUpgrade) => _106.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _106.MsgSoftwareUpgradeAmino) => _106.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _106.MsgCancelUpgrade) => _106.MsgCancelUpgradeAmino;
                    fromAmino: (object: _106.MsgCancelUpgradeAmino) => _106.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _107.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.Plan;
                fromPartial(object: Partial<_107.Plan>): _107.Plan;
                fromAmino(object: _107.PlanAmino): _107.Plan;
                toAmino(message: _107.Plan): _107.PlanAmino;
                fromAminoMsg(object: _107.PlanAminoMsg): _107.Plan;
                toAminoMsg(message: _107.Plan): _107.PlanAminoMsg;
                fromProtoMsg(message: _107.PlanProtoMsg): _107.Plan;
                toProto(message: _107.Plan): Uint8Array;
                toProtoMsg(message: _107.Plan): _107.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _107.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_107.SoftwareUpgradeProposal>): _107.SoftwareUpgradeProposal;
                fromAmino(object: _107.SoftwareUpgradeProposalAmino): _107.SoftwareUpgradeProposal;
                toAmino(message: _107.SoftwareUpgradeProposal): _107.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _107.SoftwareUpgradeProposalAminoMsg): _107.SoftwareUpgradeProposal;
                toAminoMsg(message: _107.SoftwareUpgradeProposal): _107.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _107.SoftwareUpgradeProposalProtoMsg): _107.SoftwareUpgradeProposal;
                toProto(message: _107.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _107.SoftwareUpgradeProposal): _107.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _107.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_107.CancelSoftwareUpgradeProposal>): _107.CancelSoftwareUpgradeProposal;
                fromAmino(object: _107.CancelSoftwareUpgradeProposalAmino): _107.CancelSoftwareUpgradeProposal;
                toAmino(message: _107.CancelSoftwareUpgradeProposal): _107.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _107.CancelSoftwareUpgradeProposalAminoMsg): _107.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _107.CancelSoftwareUpgradeProposal): _107.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _107.CancelSoftwareUpgradeProposalProtoMsg): _107.CancelSoftwareUpgradeProposal;
                toProto(message: _107.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _107.CancelSoftwareUpgradeProposal): _107.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _107.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.ModuleVersion;
                fromPartial(object: Partial<_107.ModuleVersion>): _107.ModuleVersion;
                fromAmino(object: _107.ModuleVersionAmino): _107.ModuleVersion;
                toAmino(message: _107.ModuleVersion): _107.ModuleVersionAmino;
                fromAminoMsg(object: _107.ModuleVersionAminoMsg): _107.ModuleVersion;
                toAminoMsg(message: _107.ModuleVersion): _107.ModuleVersionAminoMsg;
                fromProtoMsg(message: _107.ModuleVersionProtoMsg): _107.ModuleVersion;
                toProto(message: _107.ModuleVersion): Uint8Array;
                toProtoMsg(message: _107.ModuleVersion): _107.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _106.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_106.MsgSoftwareUpgrade>): _106.MsgSoftwareUpgrade;
                fromAmino(object: _106.MsgSoftwareUpgradeAmino): _106.MsgSoftwareUpgrade;
                toAmino(message: _106.MsgSoftwareUpgrade): _106.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _106.MsgSoftwareUpgradeAminoMsg): _106.MsgSoftwareUpgrade;
                toAminoMsg(message: _106.MsgSoftwareUpgrade): _106.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _106.MsgSoftwareUpgradeProtoMsg): _106.MsgSoftwareUpgrade;
                toProto(message: _106.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _106.MsgSoftwareUpgrade): _106.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _106.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _106.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_106.MsgSoftwareUpgradeResponse>): _106.MsgSoftwareUpgradeResponse;
                fromAmino(_: _106.MsgSoftwareUpgradeResponseAmino): _106.MsgSoftwareUpgradeResponse;
                toAmino(_: _106.MsgSoftwareUpgradeResponse): _106.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _106.MsgSoftwareUpgradeResponseAminoMsg): _106.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _106.MsgSoftwareUpgradeResponse): _106.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _106.MsgSoftwareUpgradeResponseProtoMsg): _106.MsgSoftwareUpgradeResponse;
                toProto(message: _106.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _106.MsgSoftwareUpgradeResponse): _106.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _106.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.MsgCancelUpgrade;
                fromPartial(object: Partial<_106.MsgCancelUpgrade>): _106.MsgCancelUpgrade;
                fromAmino(object: _106.MsgCancelUpgradeAmino): _106.MsgCancelUpgrade;
                toAmino(message: _106.MsgCancelUpgrade): _106.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _106.MsgCancelUpgradeAminoMsg): _106.MsgCancelUpgrade;
                toAminoMsg(message: _106.MsgCancelUpgrade): _106.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _106.MsgCancelUpgradeProtoMsg): _106.MsgCancelUpgrade;
                toProto(message: _106.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _106.MsgCancelUpgrade): _106.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _106.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _106.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_106.MsgCancelUpgradeResponse>): _106.MsgCancelUpgradeResponse;
                fromAmino(_: _106.MsgCancelUpgradeResponseAmino): _106.MsgCancelUpgradeResponse;
                toAmino(_: _106.MsgCancelUpgradeResponse): _106.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _106.MsgCancelUpgradeResponseAminoMsg): _106.MsgCancelUpgradeResponse;
                toAminoMsg(message: _106.MsgCancelUpgradeResponse): _106.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _106.MsgCancelUpgradeResponseProtoMsg): _106.MsgCancelUpgradeResponse;
                toProto(message: _106.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _106.MsgCancelUpgradeResponse): _106.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _105.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_105.QueryCurrentPlanRequest>): _105.QueryCurrentPlanRequest;
                fromAmino(_: _105.QueryCurrentPlanRequestAmino): _105.QueryCurrentPlanRequest;
                toAmino(_: _105.QueryCurrentPlanRequest): _105.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _105.QueryCurrentPlanRequestAminoMsg): _105.QueryCurrentPlanRequest;
                toAminoMsg(message: _105.QueryCurrentPlanRequest): _105.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _105.QueryCurrentPlanRequestProtoMsg): _105.QueryCurrentPlanRequest;
                toProto(message: _105.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _105.QueryCurrentPlanRequest): _105.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _105.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_105.QueryCurrentPlanResponse>): _105.QueryCurrentPlanResponse;
                fromAmino(object: _105.QueryCurrentPlanResponseAmino): _105.QueryCurrentPlanResponse;
                toAmino(message: _105.QueryCurrentPlanResponse): _105.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _105.QueryCurrentPlanResponseAminoMsg): _105.QueryCurrentPlanResponse;
                toAminoMsg(message: _105.QueryCurrentPlanResponse): _105.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _105.QueryCurrentPlanResponseProtoMsg): _105.QueryCurrentPlanResponse;
                toProto(message: _105.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _105.QueryCurrentPlanResponse): _105.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _105.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_105.QueryAppliedPlanRequest>): _105.QueryAppliedPlanRequest;
                fromAmino(object: _105.QueryAppliedPlanRequestAmino): _105.QueryAppliedPlanRequest;
                toAmino(message: _105.QueryAppliedPlanRequest): _105.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _105.QueryAppliedPlanRequestAminoMsg): _105.QueryAppliedPlanRequest;
                toAminoMsg(message: _105.QueryAppliedPlanRequest): _105.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _105.QueryAppliedPlanRequestProtoMsg): _105.QueryAppliedPlanRequest;
                toProto(message: _105.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _105.QueryAppliedPlanRequest): _105.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _105.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_105.QueryAppliedPlanResponse>): _105.QueryAppliedPlanResponse;
                fromAmino(object: _105.QueryAppliedPlanResponseAmino): _105.QueryAppliedPlanResponse;
                toAmino(message: _105.QueryAppliedPlanResponse): _105.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _105.QueryAppliedPlanResponseAminoMsg): _105.QueryAppliedPlanResponse;
                toAminoMsg(message: _105.QueryAppliedPlanResponse): _105.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _105.QueryAppliedPlanResponseProtoMsg): _105.QueryAppliedPlanResponse;
                toProto(message: _105.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _105.QueryAppliedPlanResponse): _105.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _105.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_105.QueryUpgradedConsensusStateRequest>): _105.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _105.QueryUpgradedConsensusStateRequestAmino): _105.QueryUpgradedConsensusStateRequest;
                toAmino(message: _105.QueryUpgradedConsensusStateRequest): _105.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _105.QueryUpgradedConsensusStateRequestAminoMsg): _105.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _105.QueryUpgradedConsensusStateRequest): _105.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _105.QueryUpgradedConsensusStateRequestProtoMsg): _105.QueryUpgradedConsensusStateRequest;
                toProto(message: _105.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _105.QueryUpgradedConsensusStateRequest): _105.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _105.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_105.QueryUpgradedConsensusStateResponse>): _105.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _105.QueryUpgradedConsensusStateResponseAmino): _105.QueryUpgradedConsensusStateResponse;
                toAmino(message: _105.QueryUpgradedConsensusStateResponse): _105.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _105.QueryUpgradedConsensusStateResponseAminoMsg): _105.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _105.QueryUpgradedConsensusStateResponse): _105.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _105.QueryUpgradedConsensusStateResponseProtoMsg): _105.QueryUpgradedConsensusStateResponse;
                toProto(message: _105.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _105.QueryUpgradedConsensusStateResponse): _105.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _105.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_105.QueryModuleVersionsRequest>): _105.QueryModuleVersionsRequest;
                fromAmino(object: _105.QueryModuleVersionsRequestAmino): _105.QueryModuleVersionsRequest;
                toAmino(message: _105.QueryModuleVersionsRequest): _105.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _105.QueryModuleVersionsRequestAminoMsg): _105.QueryModuleVersionsRequest;
                toAminoMsg(message: _105.QueryModuleVersionsRequest): _105.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _105.QueryModuleVersionsRequestProtoMsg): _105.QueryModuleVersionsRequest;
                toProto(message: _105.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryModuleVersionsRequest): _105.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _105.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_105.QueryModuleVersionsResponse>): _105.QueryModuleVersionsResponse;
                fromAmino(object: _105.QueryModuleVersionsResponseAmino): _105.QueryModuleVersionsResponse;
                toAmino(message: _105.QueryModuleVersionsResponse): _105.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _105.QueryModuleVersionsResponseAminoMsg): _105.QueryModuleVersionsResponse;
                toAminoMsg(message: _105.QueryModuleVersionsResponse): _105.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _105.QueryModuleVersionsResponseProtoMsg): _105.QueryModuleVersionsResponse;
                toProto(message: _105.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryModuleVersionsResponse): _105.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _105.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.QueryAuthorityRequest;
                fromPartial(_: Partial<_105.QueryAuthorityRequest>): _105.QueryAuthorityRequest;
                fromAmino(_: _105.QueryAuthorityRequestAmino): _105.QueryAuthorityRequest;
                toAmino(_: _105.QueryAuthorityRequest): _105.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _105.QueryAuthorityRequestAminoMsg): _105.QueryAuthorityRequest;
                toAminoMsg(message: _105.QueryAuthorityRequest): _105.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _105.QueryAuthorityRequestProtoMsg): _105.QueryAuthorityRequest;
                toProto(message: _105.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _105.QueryAuthorityRequest): _105.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _105.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryAuthorityResponse;
                fromPartial(object: Partial<_105.QueryAuthorityResponse>): _105.QueryAuthorityResponse;
                fromAmino(object: _105.QueryAuthorityResponseAmino): _105.QueryAuthorityResponse;
                toAmino(message: _105.QueryAuthorityResponse): _105.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _105.QueryAuthorityResponseAminoMsg): _105.QueryAuthorityResponse;
                toAminoMsg(message: _105.QueryAuthorityResponse): _105.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _105.QueryAuthorityResponseProtoMsg): _105.QueryAuthorityResponse;
                toProto(message: _105.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _105.QueryAuthorityResponse): _105.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _222.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _108.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _108.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _108.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createClawbackVestingAccount(value: _108.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clawback(value: _108.MsgClawback): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    returnGrants(value: _108.MsgReturnGrants): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _108.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _108.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _108.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _108.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _108.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _108.MsgCreatePeriodicVestingAccount;
                    };
                    createClawbackVestingAccount(value: _108.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _108.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _108.MsgClawback): {
                        typeUrl: string;
                        value: _108.MsgClawback;
                    };
                    returnGrants(value: _108.MsgReturnGrants): {
                        typeUrl: string;
                        value: _108.MsgReturnGrants;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _108.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _108.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _108.MsgCreatePeriodicVestingAccount;
                    };
                    createClawbackVestingAccount(value: any): {
                        typeUrl: string;
                        value: _108.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: any): {
                        typeUrl: string;
                        value: _108.MsgClawback;
                    };
                    returnGrants(value: any): {
                        typeUrl: string;
                        value: _108.MsgReturnGrants;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _108.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _108.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _108.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _108.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _108.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _108.MsgCreatePeriodicVestingAccount;
                    };
                    createClawbackVestingAccount(value: _108.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _108.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _108.MsgClawback): {
                        typeUrl: string;
                        value: _108.MsgClawback;
                    };
                    returnGrants(value: _108.MsgReturnGrants): {
                        typeUrl: string;
                        value: _108.MsgReturnGrants;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _108.MsgCreateVestingAccount) => _108.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _108.MsgCreateVestingAccountAmino) => _108.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _108.MsgCreatePermanentLockedAccount) => _108.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _108.MsgCreatePermanentLockedAccountAmino) => _108.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _108.MsgCreatePeriodicVestingAccount) => _108.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _108.MsgCreatePeriodicVestingAccountAmino) => _108.MsgCreatePeriodicVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _108.MsgCreateClawbackVestingAccount) => _108.MsgCreateClawbackVestingAccountAmino;
                    fromAmino: (object: _108.MsgCreateClawbackVestingAccountAmino) => _108.MsgCreateClawbackVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgClawback": {
                    aminoType: string;
                    toAmino: (message: _108.MsgClawback) => _108.MsgClawbackAmino;
                    fromAmino: (object: _108.MsgClawbackAmino) => _108.MsgClawback;
                };
                "/cosmos.vesting.v1beta1.MsgReturnGrants": {
                    aminoType: string;
                    toAmino: (message: _108.MsgReturnGrants) => _108.MsgReturnGrantsAmino;
                    fromAmino: (object: _108.MsgReturnGrantsAmino) => _108.MsgReturnGrants;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _109.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.BaseVestingAccount;
                fromPartial(object: Partial<_109.BaseVestingAccount>): _109.BaseVestingAccount;
                fromAmino(object: _109.BaseVestingAccountAmino): _109.BaseVestingAccount;
                toAmino(message: _109.BaseVestingAccount): _109.BaseVestingAccountAmino;
                fromAminoMsg(object: _109.BaseVestingAccountAminoMsg): _109.BaseVestingAccount;
                toAminoMsg(message: _109.BaseVestingAccount): _109.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _109.BaseVestingAccountProtoMsg): _109.BaseVestingAccount;
                toProto(message: _109.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _109.BaseVestingAccount): _109.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _109.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.ContinuousVestingAccount;
                fromPartial(object: Partial<_109.ContinuousVestingAccount>): _109.ContinuousVestingAccount;
                fromAmino(object: _109.ContinuousVestingAccountAmino): _109.ContinuousVestingAccount;
                toAmino(message: _109.ContinuousVestingAccount): _109.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _109.ContinuousVestingAccountAminoMsg): _109.ContinuousVestingAccount;
                toAminoMsg(message: _109.ContinuousVestingAccount): _109.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _109.ContinuousVestingAccountProtoMsg): _109.ContinuousVestingAccount;
                toProto(message: _109.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _109.ContinuousVestingAccount): _109.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _109.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.DelayedVestingAccount;
                fromPartial(object: Partial<_109.DelayedVestingAccount>): _109.DelayedVestingAccount;
                fromAmino(object: _109.DelayedVestingAccountAmino): _109.DelayedVestingAccount;
                toAmino(message: _109.DelayedVestingAccount): _109.DelayedVestingAccountAmino;
                fromAminoMsg(object: _109.DelayedVestingAccountAminoMsg): _109.DelayedVestingAccount;
                toAminoMsg(message: _109.DelayedVestingAccount): _109.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _109.DelayedVestingAccountProtoMsg): _109.DelayedVestingAccount;
                toProto(message: _109.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _109.DelayedVestingAccount): _109.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _109.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.Period;
                fromPartial(object: Partial<_109.Period>): _109.Period;
                fromAmino(object: _109.PeriodAmino): _109.Period;
                toAmino(message: _109.Period): _109.PeriodAmino;
                fromAminoMsg(object: _109.PeriodAminoMsg): _109.Period;
                toAminoMsg(message: _109.Period): _109.PeriodAminoMsg;
                fromProtoMsg(message: _109.PeriodProtoMsg): _109.Period;
                toProto(message: _109.Period): Uint8Array;
                toProtoMsg(message: _109.Period): _109.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _109.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.PeriodicVestingAccount;
                fromPartial(object: Partial<_109.PeriodicVestingAccount>): _109.PeriodicVestingAccount;
                fromAmino(object: _109.PeriodicVestingAccountAmino): _109.PeriodicVestingAccount;
                toAmino(message: _109.PeriodicVestingAccount): _109.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _109.PeriodicVestingAccountAminoMsg): _109.PeriodicVestingAccount;
                toAminoMsg(message: _109.PeriodicVestingAccount): _109.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _109.PeriodicVestingAccountProtoMsg): _109.PeriodicVestingAccount;
                toProto(message: _109.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _109.PeriodicVestingAccount): _109.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _109.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.PermanentLockedAccount;
                fromPartial(object: Partial<_109.PermanentLockedAccount>): _109.PermanentLockedAccount;
                fromAmino(object: _109.PermanentLockedAccountAmino): _109.PermanentLockedAccount;
                toAmino(message: _109.PermanentLockedAccount): _109.PermanentLockedAccountAmino;
                fromAminoMsg(object: _109.PermanentLockedAccountAminoMsg): _109.PermanentLockedAccount;
                toAminoMsg(message: _109.PermanentLockedAccount): _109.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _109.PermanentLockedAccountProtoMsg): _109.PermanentLockedAccount;
                toProto(message: _109.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _109.PermanentLockedAccount): _109.PermanentLockedAccountProtoMsg;
            };
            ClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _109.ClawbackVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.ClawbackVestingAccount;
                fromPartial(object: Partial<_109.ClawbackVestingAccount>): _109.ClawbackVestingAccount;
                fromAmino(object: _109.ClawbackVestingAccountAmino): _109.ClawbackVestingAccount;
                toAmino(message: _109.ClawbackVestingAccount): _109.ClawbackVestingAccountAmino;
                fromAminoMsg(object: _109.ClawbackVestingAccountAminoMsg): _109.ClawbackVestingAccount;
                toAminoMsg(message: _109.ClawbackVestingAccount): _109.ClawbackVestingAccountAminoMsg;
                fromProtoMsg(message: _109.ClawbackVestingAccountProtoMsg): _109.ClawbackVestingAccount;
                toProto(message: _109.ClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _109.ClawbackVestingAccount): _109.ClawbackVestingAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _108.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.MsgCreateVestingAccount;
                fromPartial(object: Partial<_108.MsgCreateVestingAccount>): _108.MsgCreateVestingAccount;
                fromAmino(object: _108.MsgCreateVestingAccountAmino): _108.MsgCreateVestingAccount;
                toAmino(message: _108.MsgCreateVestingAccount): _108.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _108.MsgCreateVestingAccountAminoMsg): _108.MsgCreateVestingAccount;
                toAminoMsg(message: _108.MsgCreateVestingAccount): _108.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _108.MsgCreateVestingAccountProtoMsg): _108.MsgCreateVestingAccount;
                toProto(message: _108.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _108.MsgCreateVestingAccount): _108.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _108.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _108.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_108.MsgCreateVestingAccountResponse>): _108.MsgCreateVestingAccountResponse;
                fromAmino(_: _108.MsgCreateVestingAccountResponseAmino): _108.MsgCreateVestingAccountResponse;
                toAmino(_: _108.MsgCreateVestingAccountResponse): _108.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _108.MsgCreateVestingAccountResponseAminoMsg): _108.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _108.MsgCreateVestingAccountResponse): _108.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _108.MsgCreateVestingAccountResponseProtoMsg): _108.MsgCreateVestingAccountResponse;
                toProto(message: _108.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _108.MsgCreateVestingAccountResponse): _108.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _108.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_108.MsgCreatePermanentLockedAccount>): _108.MsgCreatePermanentLockedAccount;
                fromAmino(object: _108.MsgCreatePermanentLockedAccountAmino): _108.MsgCreatePermanentLockedAccount;
                toAmino(message: _108.MsgCreatePermanentLockedAccount): _108.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _108.MsgCreatePermanentLockedAccountAminoMsg): _108.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _108.MsgCreatePermanentLockedAccount): _108.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _108.MsgCreatePermanentLockedAccountProtoMsg): _108.MsgCreatePermanentLockedAccount;
                toProto(message: _108.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _108.MsgCreatePermanentLockedAccount): _108.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _108.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _108.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_108.MsgCreatePermanentLockedAccountResponse>): _108.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _108.MsgCreatePermanentLockedAccountResponseAmino): _108.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _108.MsgCreatePermanentLockedAccountResponse): _108.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _108.MsgCreatePermanentLockedAccountResponseAminoMsg): _108.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _108.MsgCreatePermanentLockedAccountResponse): _108.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _108.MsgCreatePermanentLockedAccountResponseProtoMsg): _108.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _108.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _108.MsgCreatePermanentLockedAccountResponse): _108.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _108.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_108.MsgCreatePeriodicVestingAccount>): _108.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _108.MsgCreatePeriodicVestingAccountAmino): _108.MsgCreatePeriodicVestingAccount;
                toAmino(message: _108.MsgCreatePeriodicVestingAccount): _108.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _108.MsgCreatePeriodicVestingAccountAminoMsg): _108.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _108.MsgCreatePeriodicVestingAccount): _108.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _108.MsgCreatePeriodicVestingAccountProtoMsg): _108.MsgCreatePeriodicVestingAccount;
                toProto(message: _108.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _108.MsgCreatePeriodicVestingAccount): _108.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _108.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _108.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_108.MsgCreatePeriodicVestingAccountResponse>): _108.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _108.MsgCreatePeriodicVestingAccountResponseAmino): _108.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _108.MsgCreatePeriodicVestingAccountResponse): _108.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _108.MsgCreatePeriodicVestingAccountResponseAminoMsg): _108.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _108.MsgCreatePeriodicVestingAccountResponse): _108.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _108.MsgCreatePeriodicVestingAccountResponseProtoMsg): _108.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _108.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _108.MsgCreatePeriodicVestingAccountResponse): _108.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
            MsgCreateClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _108.MsgCreateClawbackVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.MsgCreateClawbackVestingAccount;
                fromPartial(object: Partial<_108.MsgCreateClawbackVestingAccount>): _108.MsgCreateClawbackVestingAccount;
                fromAmino(object: _108.MsgCreateClawbackVestingAccountAmino): _108.MsgCreateClawbackVestingAccount;
                toAmino(message: _108.MsgCreateClawbackVestingAccount): _108.MsgCreateClawbackVestingAccountAmino;
                fromAminoMsg(object: _108.MsgCreateClawbackVestingAccountAminoMsg): _108.MsgCreateClawbackVestingAccount;
                toAminoMsg(message: _108.MsgCreateClawbackVestingAccount): _108.MsgCreateClawbackVestingAccountAminoMsg;
                fromProtoMsg(message: _108.MsgCreateClawbackVestingAccountProtoMsg): _108.MsgCreateClawbackVestingAccount;
                toProto(message: _108.MsgCreateClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _108.MsgCreateClawbackVestingAccount): _108.MsgCreateClawbackVestingAccountProtoMsg;
            };
            MsgCreateClawbackVestingAccountResponse: {
                typeUrl: string;
                encode(_: _108.MsgCreateClawbackVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _108.MsgCreateClawbackVestingAccountResponse;
                fromPartial(_: Partial<_108.MsgCreateClawbackVestingAccountResponse>): _108.MsgCreateClawbackVestingAccountResponse;
                fromAmino(_: _108.MsgCreateClawbackVestingAccountResponseAmino): _108.MsgCreateClawbackVestingAccountResponse;
                toAmino(_: _108.MsgCreateClawbackVestingAccountResponse): _108.MsgCreateClawbackVestingAccountResponseAmino;
                fromAminoMsg(object: _108.MsgCreateClawbackVestingAccountResponseAminoMsg): _108.MsgCreateClawbackVestingAccountResponse;
                toAminoMsg(message: _108.MsgCreateClawbackVestingAccountResponse): _108.MsgCreateClawbackVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _108.MsgCreateClawbackVestingAccountResponseProtoMsg): _108.MsgCreateClawbackVestingAccountResponse;
                toProto(message: _108.MsgCreateClawbackVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _108.MsgCreateClawbackVestingAccountResponse): _108.MsgCreateClawbackVestingAccountResponseProtoMsg;
            };
            MsgClawback: {
                typeUrl: string;
                encode(message: _108.MsgClawback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.MsgClawback;
                fromPartial(object: Partial<_108.MsgClawback>): _108.MsgClawback;
                fromAmino(object: _108.MsgClawbackAmino): _108.MsgClawback;
                toAmino(message: _108.MsgClawback): _108.MsgClawbackAmino;
                fromAminoMsg(object: _108.MsgClawbackAminoMsg): _108.MsgClawback;
                toAminoMsg(message: _108.MsgClawback): _108.MsgClawbackAminoMsg;
                fromProtoMsg(message: _108.MsgClawbackProtoMsg): _108.MsgClawback;
                toProto(message: _108.MsgClawback): Uint8Array;
                toProtoMsg(message: _108.MsgClawback): _108.MsgClawbackProtoMsg;
            };
            MsgClawbackResponse: {
                typeUrl: string;
                encode(_: _108.MsgClawbackResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _108.MsgClawbackResponse;
                fromPartial(_: Partial<_108.MsgClawbackResponse>): _108.MsgClawbackResponse;
                fromAmino(_: _108.MsgClawbackResponseAmino): _108.MsgClawbackResponse;
                toAmino(_: _108.MsgClawbackResponse): _108.MsgClawbackResponseAmino;
                fromAminoMsg(object: _108.MsgClawbackResponseAminoMsg): _108.MsgClawbackResponse;
                toAminoMsg(message: _108.MsgClawbackResponse): _108.MsgClawbackResponseAminoMsg;
                fromProtoMsg(message: _108.MsgClawbackResponseProtoMsg): _108.MsgClawbackResponse;
                toProto(message: _108.MsgClawbackResponse): Uint8Array;
                toProtoMsg(message: _108.MsgClawbackResponse): _108.MsgClawbackResponseProtoMsg;
            };
            MsgReturnGrants: {
                typeUrl: string;
                encode(message: _108.MsgReturnGrants, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.MsgReturnGrants;
                fromPartial(object: Partial<_108.MsgReturnGrants>): _108.MsgReturnGrants;
                fromAmino(object: _108.MsgReturnGrantsAmino): _108.MsgReturnGrants;
                toAmino(message: _108.MsgReturnGrants): _108.MsgReturnGrantsAmino;
                fromAminoMsg(object: _108.MsgReturnGrantsAminoMsg): _108.MsgReturnGrants;
                toAminoMsg(message: _108.MsgReturnGrants): _108.MsgReturnGrantsAminoMsg;
                fromProtoMsg(message: _108.MsgReturnGrantsProtoMsg): _108.MsgReturnGrants;
                toProto(message: _108.MsgReturnGrants): Uint8Array;
                toProtoMsg(message: _108.MsgReturnGrants): _108.MsgReturnGrantsProtoMsg;
            };
            MsgReturnGrantsResponse: {
                typeUrl: string;
                encode(_: _108.MsgReturnGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _108.MsgReturnGrantsResponse;
                fromPartial(_: Partial<_108.MsgReturnGrantsResponse>): _108.MsgReturnGrantsResponse;
                fromAmino(_: _108.MsgReturnGrantsResponseAmino): _108.MsgReturnGrantsResponse;
                toAmino(_: _108.MsgReturnGrantsResponse): _108.MsgReturnGrantsResponseAmino;
                fromAminoMsg(object: _108.MsgReturnGrantsResponseAminoMsg): _108.MsgReturnGrantsResponse;
                toAminoMsg(message: _108.MsgReturnGrantsResponse): _108.MsgReturnGrantsResponseAminoMsg;
                fromProtoMsg(message: _108.MsgReturnGrantsResponseProtoMsg): _108.MsgReturnGrantsResponse;
                toProto(message: _108.MsgReturnGrantsResponse): Uint8Array;
                toProtoMsg(message: _108.MsgReturnGrantsResponse): _108.MsgReturnGrantsResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _209.MsgClientImpl;
                };
                bank: {
                    v1beta1: _210.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _211.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _212.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _213.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _214.MsgClientImpl;
                };
                gov: {
                    v1: _215.MsgClientImpl;
                    v1beta1: _216.MsgClientImpl;
                };
                group: {
                    v1: _217.MsgClientImpl;
                };
                nft: {
                    v1beta1: _218.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _219.MsgClientImpl;
                };
                staking: {
                    v1beta1: _220.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _221.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _222.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _17.QueryConfigRequest): Promise<_17.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _20.QueryAccountsRequest): Promise<_20.QueryAccountsResponse>;
                        account(request: _20.QueryAccountRequest): Promise<_20.QueryAccountResponse>;
                        accountAddressByID(request: _20.QueryAccountAddressByIDRequest): Promise<_20.QueryAccountAddressByIDResponse>;
                        params(request?: _20.QueryParamsRequest): Promise<_20.QueryParamsResponse>;
                        moduleAccounts(request?: _20.QueryModuleAccountsRequest): Promise<_20.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _20.QueryModuleAccountByNameRequest): Promise<_20.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _20.Bech32PrefixRequest): Promise<_20.Bech32PrefixResponse>;
                        addressBytesToString(request: _20.AddressBytesToStringRequest): Promise<_20.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _20.AddressStringToBytesRequest): Promise<_20.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _24.QueryGrantsRequest): Promise<_24.QueryGrantsResponse>;
                        granterGrants(request: _24.QueryGranterGrantsRequest): Promise<_24.QueryGranterGrantsResponse>;
                        granteeGrants(request: _24.QueryGranteeGrantsRequest): Promise<_24.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _29.QueryBalanceRequest): Promise<_29.QueryBalanceResponse>;
                        allBalances(request: _29.QueryAllBalancesRequest): Promise<_29.QueryAllBalancesResponse>;
                        spendableBalances(request: _29.QuerySpendableBalancesRequest): Promise<_29.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _29.QueryTotalSupplyRequest): Promise<_29.QueryTotalSupplyResponse>;
                        supplyOf(request: _29.QuerySupplyOfRequest): Promise<_29.QuerySupplyOfResponse>;
                        params(request?: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                        denomMetadata(request: _29.QueryDenomMetadataRequest): Promise<_29.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _29.QueryDenomsMetadataRequest): Promise<_29.QueryDenomsMetadataResponse>;
                        denomOwners(request: _29.QueryDenomOwnersRequest): Promise<_29.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _33.ConfigRequest): Promise<_33.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _40.GetNodeInfoRequest): Promise<_40.GetNodeInfoResponse>;
                            getSyncing(request?: _40.GetSyncingRequest): Promise<_40.GetSyncingResponse>;
                            getLatestBlock(request?: _40.GetLatestBlockRequest): Promise<_40.GetLatestBlockResponse>;
                            getBlockByHeight(request: _40.GetBlockByHeightRequest): Promise<_40.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _40.GetLatestValidatorSetRequest): Promise<_40.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _40.GetValidatorSetByHeightRequest): Promise<_40.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _40.ABCIQueryRequest): Promise<_40.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _55.QueryValidatorOutstandingRewardsRequest): Promise<_55.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _55.QueryValidatorCommissionRequest): Promise<_55.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _55.QueryValidatorSlashesRequest): Promise<_55.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _55.QueryDelegationRewardsRequest): Promise<_55.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _55.QueryDelegationTotalRewardsRequest): Promise<_55.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _55.QueryDelegatorValidatorsRequest): Promise<_55.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _55.QueryDelegatorWithdrawAddressRequest): Promise<_55.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _55.QueryCommunityPoolRequest): Promise<_55.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _59.QueryEvidenceRequest): Promise<_59.QueryEvidenceResponse>;
                        allEvidence(request?: _59.QueryAllEvidenceRequest): Promise<_59.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _63.QueryAllowanceRequest): Promise<_63.QueryAllowanceResponse>;
                        allowances(request: _63.QueryAllowancesRequest): Promise<_63.QueryAllowancesResponse>;
                        allowancesByGranter(request: _63.QueryAllowancesByGranterRequest): Promise<_63.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _68.QueryProposalRequest): Promise<_68.QueryProposalResponse>;
                        proposals(request: _68.QueryProposalsRequest): Promise<_68.QueryProposalsResponse>;
                        vote(request: _68.QueryVoteRequest): Promise<_68.QueryVoteResponse>;
                        votes(request: _68.QueryVotesRequest): Promise<_68.QueryVotesResponse>;
                        params(request: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
                        deposit(request: _68.QueryDepositRequest): Promise<_68.QueryDepositResponse>;
                        deposits(request: _68.QueryDepositsRequest): Promise<_68.QueryDepositsResponse>;
                        tallyResult(request: _68.QueryTallyResultRequest): Promise<_68.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _72.QueryProposalRequest): Promise<_72.QueryProposalResponse>;
                        proposals(request: _72.QueryProposalsRequest): Promise<_72.QueryProposalsResponse>;
                        vote(request: _72.QueryVoteRequest): Promise<_72.QueryVoteResponse>;
                        votes(request: _72.QueryVotesRequest): Promise<_72.QueryVotesResponse>;
                        params(request: _72.QueryParamsRequest): Promise<_72.QueryParamsResponse>;
                        deposit(request: _72.QueryDepositRequest): Promise<_72.QueryDepositResponse>;
                        deposits(request: _72.QueryDepositsRequest): Promise<_72.QueryDepositsResponse>;
                        tallyResult(request: _72.QueryTallyResultRequest): Promise<_72.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _76.QueryGroupInfoRequest): Promise<_76.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _76.QueryGroupPolicyInfoRequest): Promise<_76.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _76.QueryGroupMembersRequest): Promise<_76.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _76.QueryGroupsByAdminRequest): Promise<_76.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _76.QueryGroupPoliciesByGroupRequest): Promise<_76.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _76.QueryGroupPoliciesByAdminRequest): Promise<_76.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _76.QueryProposalRequest): Promise<_76.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _76.QueryProposalsByGroupPolicyRequest): Promise<_76.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _76.QueryVoteByProposalVoterRequest): Promise<_76.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _76.QueryVotesByProposalRequest): Promise<_76.QueryVotesByProposalResponse>;
                        votesByVoter(request: _76.QueryVotesByVoterRequest): Promise<_76.QueryVotesByVoterResponse>;
                        groupsByMember(request: _76.QueryGroupsByMemberRequest): Promise<_76.QueryGroupsByMemberResponse>;
                        tallyResult(request: _76.QueryTallyResultRequest): Promise<_76.QueryTallyResultResponse>;
                        groups(request?: _76.QueryGroupsRequest): Promise<_76.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                        inflation(request?: _81.QueryInflationRequest): Promise<_81.QueryInflationResponse>;
                        annualProvisions(request?: _81.QueryAnnualProvisionsRequest): Promise<_81.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _86.QueryBalanceRequest): Promise<_86.QueryBalanceResponse>;
                        owner(request: _86.QueryOwnerRequest): Promise<_86.QueryOwnerResponse>;
                        supply(request: _86.QuerySupplyRequest): Promise<_86.QuerySupplyResponse>;
                        nFTs(request: _86.QueryNFTsRequest): Promise<_86.QueryNFTsResponse>;
                        nFT(request: _86.QueryNFTRequest): Promise<_86.QueryNFTResponse>;
                        class(request: _86.QueryClassRequest): Promise<_86.QueryClassResponse>;
                        classes(request?: _86.QueryClassesRequest): Promise<_86.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
                        subspaces(request?: _92.QuerySubspacesRequest): Promise<_92.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _94.QueryParamsRequest): Promise<_94.QueryParamsResponse>;
                        signingInfo(request: _94.QuerySigningInfoRequest): Promise<_94.QuerySigningInfoResponse>;
                        signingInfos(request?: _94.QuerySigningInfosRequest): Promise<_94.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _99.QueryValidatorsRequest): Promise<_99.QueryValidatorsResponse>;
                        validator(request: _99.QueryValidatorRequest): Promise<_99.QueryValidatorResponse>;
                        validatorDelegations(request: _99.QueryValidatorDelegationsRequest): Promise<_99.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _99.QueryValidatorUnbondingDelegationsRequest): Promise<_99.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _99.QueryDelegationRequest): Promise<_99.QueryDelegationResponse>;
                        unbondingDelegation(request: _99.QueryUnbondingDelegationRequest): Promise<_99.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _99.QueryDelegatorDelegationsRequest): Promise<_99.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _99.QueryDelegatorUnbondingDelegationsRequest): Promise<_99.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _99.QueryRedelegationsRequest): Promise<_99.QueryRedelegationsResponse>;
                        delegatorValidators(request: _99.QueryDelegatorValidatorsRequest): Promise<_99.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _99.QueryDelegatorValidatorRequest): Promise<_99.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _99.QueryHistoricalInfoRequest): Promise<_99.QueryHistoricalInfoResponse>;
                        pool(request?: _99.QueryPoolRequest): Promise<_99.QueryPoolResponse>;
                        params(request?: _99.QueryParamsRequest): Promise<_99.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _103.SimulateRequest): Promise<_103.SimulateResponse>;
                        getTx(request: _103.GetTxRequest): Promise<_103.GetTxResponse>;
                        broadcastTx(request: _103.BroadcastTxRequest): Promise<_103.BroadcastTxResponse>;
                        getTxsEvent(request: _103.GetTxsEventRequest): Promise<_103.GetTxsEventResponse>;
                        getBlockWithTxs(request: _103.GetBlockWithTxsRequest): Promise<_103.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _105.QueryCurrentPlanRequest): Promise<_105.QueryCurrentPlanResponse>;
                        appliedPlan(request: _105.QueryAppliedPlanRequest): Promise<_105.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _105.QueryUpgradedConsensusStateRequest): Promise<_105.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _105.QueryModuleVersionsRequest): Promise<_105.QueryModuleVersionsResponse>;
                        authority(request?: _105.QueryAuthorityRequest): Promise<_105.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _172.LCDQueryClient;
                };
                authz: {
                    v1beta1: _173.LCDQueryClient;
                };
                bank: {
                    v1beta1: _174.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _175.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _176.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _177.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _178.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _179.LCDQueryClient;
                };
                gov: {
                    v1: _180.LCDQueryClient;
                    v1beta1: _181.LCDQueryClient;
                };
                group: {
                    v1: _182.LCDQueryClient;
                };
                mint: {
                    v1beta1: _183.LCDQueryClient;
                };
                nft: {
                    v1beta1: _184.LCDQueryClient;
                };
                params: {
                    v1beta1: _185.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _186.LCDQueryClient;
                };
                staking: {
                    v1beta1: _187.LCDQueryClient;
                };
                tx: {
                    v1beta1: _188.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _189.LCDQueryClient;
                };
            };
        }>;
    };
}
