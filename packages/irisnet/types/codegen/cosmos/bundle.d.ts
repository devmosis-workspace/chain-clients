import * as _7 from "./app/module/v1alpha1/module";
import * as _8 from "./app/v1alpha1/config";
import * as _9 from "./app/v1alpha1/module";
import * as _10 from "./app/v1alpha1/query";
import * as _11 from "./auth/v1beta1/auth";
import * as _12 from "./auth/v1beta1/genesis";
import * as _13 from "./auth/v1beta1/query";
import * as _14 from "./authz/v1beta1/authz";
import * as _15 from "./authz/v1beta1/event";
import * as _16 from "./authz/v1beta1/genesis";
import * as _17 from "./authz/v1beta1/query";
import * as _18 from "./authz/v1beta1/tx";
import * as _19 from "./bank/v1beta1/authz";
import * as _20 from "./bank/v1beta1/bank";
import * as _21 from "./bank/v1beta1/genesis";
import * as _22 from "./bank/v1beta1/query";
import * as _23 from "./bank/v1beta1/tx";
import * as _24 from "./base/abci/v1beta1/abci";
import * as _25 from "./base/kv/v1beta1/kv";
import * as _26 from "./base/node/v1beta1/query";
import * as _27 from "./base/query/v1beta1/pagination";
import * as _28 from "./base/reflection/v1beta1/reflection";
import * as _29 from "./base/reflection/v2alpha1/reflection";
import * as _30 from "./base/snapshots/v1beta1/snapshot";
import * as _31 from "./base/store/v1beta1/commit_info";
import * as _32 from "./base/store/v1beta1/listening";
import * as _33 from "./base/tendermint/v1beta1/query";
import * as _34 from "./base/tendermint/v1beta1/types";
import * as _35 from "./base/v1beta1/coin";
import * as _36 from "./capability/v1beta1/capability";
import * as _37 from "./capability/v1beta1/genesis";
import * as _38 from "./crisis/v1beta1/genesis";
import * as _39 from "./crisis/v1beta1/tx";
import * as _40 from "./crypto/ed25519/keys";
import * as _41 from "./crypto/hd/v1/hd";
import * as _42 from "./crypto/keyring/v1/record";
import * as _43 from "./crypto/multisig/keys";
import * as _44 from "./crypto/secp256k1/keys";
import * as _45 from "./crypto/secp256r1/keys";
import * as _46 from "./distribution/v1beta1/distribution";
import * as _47 from "./distribution/v1beta1/genesis";
import * as _48 from "./distribution/v1beta1/query";
import * as _49 from "./distribution/v1beta1/tx";
import * as _50 from "./evidence/v1beta1/evidence";
import * as _51 from "./evidence/v1beta1/genesis";
import * as _52 from "./evidence/v1beta1/query";
import * as _53 from "./evidence/v1beta1/tx";
import * as _54 from "./feegrant/v1beta1/feegrant";
import * as _55 from "./feegrant/v1beta1/genesis";
import * as _56 from "./feegrant/v1beta1/query";
import * as _57 from "./feegrant/v1beta1/tx";
import * as _58 from "./genutil/v1beta1/genesis";
import * as _59 from "./gov/v1/genesis";
import * as _60 from "./gov/v1/gov";
import * as _61 from "./gov/v1/query";
import * as _62 from "./gov/v1/tx";
import * as _63 from "./gov/v1beta1/genesis";
import * as _64 from "./gov/v1beta1/gov";
import * as _65 from "./gov/v1beta1/query";
import * as _66 from "./gov/v1beta1/tx";
import * as _67 from "./group/v1/events";
import * as _68 from "./group/v1/genesis";
import * as _69 from "./group/v1/query";
import * as _70 from "./group/v1/tx";
import * as _71 from "./group/v1/types";
import * as _72 from "./mint/v1beta1/genesis";
import * as _73 from "./mint/v1beta1/mint";
import * as _74 from "./mint/v1beta1/query";
import * as _76 from "./nft/v1beta1/event";
import * as _77 from "./nft/v1beta1/genesis";
import * as _78 from "./nft/v1beta1/nft";
import * as _79 from "./nft/v1beta1/query";
import * as _80 from "./nft/v1beta1/tx";
import * as _81 from "./orm/module/v1alpha1/module";
import * as _82 from "./orm/v1/orm";
import * as _83 from "./orm/v1alpha1/schema";
import * as _84 from "./params/v1beta1/params";
import * as _85 from "./params/v1beta1/query";
import * as _86 from "./slashing/v1beta1/genesis";
import * as _87 from "./slashing/v1beta1/query";
import * as _88 from "./slashing/v1beta1/slashing";
import * as _89 from "./slashing/v1beta1/tx";
import * as _90 from "./staking/v1beta1/authz";
import * as _91 from "./staking/v1beta1/genesis";
import * as _92 from "./staking/v1beta1/query";
import * as _93 from "./staking/v1beta1/staking";
import * as _94 from "./staking/v1beta1/tx";
import * as _95 from "./tx/signing/v1beta1/signing";
import * as _96 from "./tx/v1beta1/service";
import * as _97 from "./tx/v1beta1/tx";
import * as _98 from "./upgrade/v1beta1/query";
import * as _99 from "./upgrade/v1beta1/tx";
import * as _100 from "./upgrade/v1beta1/upgrade";
import * as _101 from "./vesting/v1beta1/tx";
import * as _102 from "./vesting/v1beta1/vesting";
import * as _170 from "./auth/v1beta1/query.lcd";
import * as _171 from "./authz/v1beta1/query.lcd";
import * as _172 from "./bank/v1beta1/query.lcd";
import * as _173 from "./base/node/v1beta1/query.lcd";
import * as _174 from "./base/tendermint/v1beta1/query.lcd";
import * as _175 from "./distribution/v1beta1/query.lcd";
import * as _176 from "./evidence/v1beta1/query.lcd";
import * as _177 from "./feegrant/v1beta1/query.lcd";
import * as _178 from "./gov/v1/query.lcd";
import * as _179 from "./gov/v1beta1/query.lcd";
import * as _180 from "./group/v1/query.lcd";
import * as _181 from "./mint/v1beta1/query.lcd";
import * as _182 from "./nft/v1beta1/query.lcd";
import * as _183 from "./params/v1beta1/query.lcd";
import * as _184 from "./slashing/v1beta1/query.lcd";
import * as _185 from "./staking/v1beta1/query.lcd";
import * as _186 from "./tx/v1beta1/service.lcd";
import * as _187 from "./upgrade/v1beta1/query.lcd";
import * as _188 from "./app/v1alpha1/query.rpc.Query";
import * as _189 from "./auth/v1beta1/query.rpc.Query";
import * as _190 from "./authz/v1beta1/query.rpc.Query";
import * as _191 from "./bank/v1beta1/query.rpc.Query";
import * as _192 from "./base/node/v1beta1/query.rpc.Service";
import * as _193 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _194 from "./distribution/v1beta1/query.rpc.Query";
import * as _195 from "./evidence/v1beta1/query.rpc.Query";
import * as _196 from "./feegrant/v1beta1/query.rpc.Query";
import * as _197 from "./gov/v1/query.rpc.Query";
import * as _198 from "./gov/v1beta1/query.rpc.Query";
import * as _199 from "./group/v1/query.rpc.Query";
import * as _200 from "./mint/v1beta1/query.rpc.Query";
import * as _201 from "./nft/v1beta1/query.rpc.Query";
import * as _202 from "./params/v1beta1/query.rpc.Query";
import * as _203 from "./slashing/v1beta1/query.rpc.Query";
import * as _204 from "./staking/v1beta1/query.rpc.Query";
import * as _205 from "./tx/v1beta1/service.rpc.Service";
import * as _206 from "./upgrade/v1beta1/query.rpc.Query";
import * as _207 from "./authz/v1beta1/tx.rpc.msg";
import * as _208 from "./bank/v1beta1/tx.rpc.msg";
import * as _209 from "./crisis/v1beta1/tx.rpc.msg";
import * as _210 from "./distribution/v1beta1/tx.rpc.msg";
import * as _211 from "./evidence/v1beta1/tx.rpc.msg";
import * as _212 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _213 from "./gov/v1/tx.rpc.msg";
import * as _214 from "./gov/v1beta1/tx.rpc.msg";
import * as _215 from "./group/v1/tx.rpc.msg";
import * as _216 from "./nft/v1beta1/tx.rpc.msg";
import * as _217 from "./slashing/v1beta1/tx.rpc.msg";
import * as _218 from "./staking/v1beta1/tx.rpc.msg";
import * as _219 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _220 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _7.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _7.Module;
                    fromPartial(_: Partial<_7.Module>): _7.Module;
                    fromAmino(_: _7.ModuleAmino): _7.Module;
                    toAmino(_: _7.Module): _7.ModuleAmino;
                    fromAminoMsg(object: _7.ModuleAminoMsg): _7.Module;
                    toAminoMsg(message: _7.Module): _7.ModuleAminoMsg;
                    fromProtoMsg(message: _7.ModuleProtoMsg): _7.Module;
                    toProto(message: _7.Module): Uint8Array;
                    toProtoMsg(message: _7.Module): _7.ModuleProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _188.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _10.QueryConfigRequest): Promise<_10.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _10.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.QueryConfigRequest;
                fromPartial(_: Partial<_10.QueryConfigRequest>): _10.QueryConfigRequest;
                fromAmino(_: _10.QueryConfigRequestAmino): _10.QueryConfigRequest;
                toAmino(_: _10.QueryConfigRequest): _10.QueryConfigRequestAmino;
                fromAminoMsg(object: _10.QueryConfigRequestAminoMsg): _10.QueryConfigRequest;
                toAminoMsg(message: _10.QueryConfigRequest): _10.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _10.QueryConfigRequestProtoMsg): _10.QueryConfigRequest;
                toProto(message: _10.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _10.QueryConfigRequest): _10.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _10.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryConfigResponse;
                fromPartial(object: Partial<_10.QueryConfigResponse>): _10.QueryConfigResponse;
                fromAmino(object: _10.QueryConfigResponseAmino): _10.QueryConfigResponse;
                toAmino(message: _10.QueryConfigResponse): _10.QueryConfigResponseAmino;
                fromAminoMsg(object: _10.QueryConfigResponseAminoMsg): _10.QueryConfigResponse;
                toAminoMsg(message: _10.QueryConfigResponse): _10.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _10.QueryConfigResponseProtoMsg): _10.QueryConfigResponse;
                toProto(message: _10.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _10.QueryConfigResponse): _10.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _9.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.ModuleDescriptor;
                fromPartial(object: Partial<_9.ModuleDescriptor>): _9.ModuleDescriptor;
                fromAmino(object: _9.ModuleDescriptorAmino): _9.ModuleDescriptor;
                toAmino(message: _9.ModuleDescriptor): _9.ModuleDescriptorAmino;
                fromAminoMsg(object: _9.ModuleDescriptorAminoMsg): _9.ModuleDescriptor;
                toAminoMsg(message: _9.ModuleDescriptor): _9.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _9.ModuleDescriptorProtoMsg): _9.ModuleDescriptor;
                toProto(message: _9.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _9.ModuleDescriptor): _9.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _9.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.PackageReference;
                fromPartial(object: Partial<_9.PackageReference>): _9.PackageReference;
                fromAmino(object: _9.PackageReferenceAmino): _9.PackageReference;
                toAmino(message: _9.PackageReference): _9.PackageReferenceAmino;
                fromAminoMsg(object: _9.PackageReferenceAminoMsg): _9.PackageReference;
                toAminoMsg(message: _9.PackageReference): _9.PackageReferenceAminoMsg;
                fromProtoMsg(message: _9.PackageReferenceProtoMsg): _9.PackageReference;
                toProto(message: _9.PackageReference): Uint8Array;
                toProtoMsg(message: _9.PackageReference): _9.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _9.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.MigrateFromInfo;
                fromPartial(object: Partial<_9.MigrateFromInfo>): _9.MigrateFromInfo;
                fromAmino(object: _9.MigrateFromInfoAmino): _9.MigrateFromInfo;
                toAmino(message: _9.MigrateFromInfo): _9.MigrateFromInfoAmino;
                fromAminoMsg(object: _9.MigrateFromInfoAminoMsg): _9.MigrateFromInfo;
                toAminoMsg(message: _9.MigrateFromInfo): _9.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _9.MigrateFromInfoProtoMsg): _9.MigrateFromInfo;
                toProto(message: _9.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _9.MigrateFromInfo): _9.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _8.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.Config;
                fromPartial(object: Partial<_8.Config>): _8.Config;
                fromAmino(object: _8.ConfigAmino): _8.Config;
                toAmino(message: _8.Config): _8.ConfigAmino;
                fromAminoMsg(object: _8.ConfigAminoMsg): _8.Config;
                toAminoMsg(message: _8.Config): _8.ConfigAminoMsg;
                fromProtoMsg(message: _8.ConfigProtoMsg): _8.Config;
                toProto(message: _8.Config): Uint8Array;
                toProtoMsg(message: _8.Config): _8.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _8.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.ModuleConfig;
                fromPartial(object: Partial<_8.ModuleConfig>): _8.ModuleConfig;
                fromAmino(object: _8.ModuleConfigAmino): _8.ModuleConfig;
                toAmino(message: _8.ModuleConfig): _8.ModuleConfigAmino;
                fromAminoMsg(object: _8.ModuleConfigAminoMsg): _8.ModuleConfig;
                toAminoMsg(message: _8.ModuleConfig): _8.ModuleConfigAminoMsg;
                fromProtoMsg(message: _8.ModuleConfigProtoMsg): _8.ModuleConfig;
                toProto(message: _8.ModuleConfig): Uint8Array;
                toProtoMsg(message: _8.ModuleConfig): _8.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _189.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _13.QueryAccountsRequest): Promise<_13.QueryAccountsResponse>;
                account(request: _13.QueryAccountRequest): Promise<_13.QueryAccountResponse>;
                accountAddressByID(request: _13.QueryAccountAddressByIDRequest): Promise<_13.QueryAccountAddressByIDResponse>;
                params(request?: _13.QueryParamsRequest): Promise<_13.QueryParamsResponse>;
                moduleAccounts(request?: _13.QueryModuleAccountsRequest): Promise<_13.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _13.QueryModuleAccountByNameRequest): Promise<_13.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _13.Bech32PrefixRequest): Promise<_13.Bech32PrefixResponse>;
                addressBytesToString(request: _13.AddressBytesToStringRequest): Promise<_13.AddressBytesToStringResponse>;
                addressStringToBytes(request: _13.AddressStringToBytesRequest): Promise<_13.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _170.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _13.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryAccountsRequest;
                fromPartial(object: Partial<_13.QueryAccountsRequest>): _13.QueryAccountsRequest;
                fromAmino(object: _13.QueryAccountsRequestAmino): _13.QueryAccountsRequest;
                toAmino(message: _13.QueryAccountsRequest): _13.QueryAccountsRequestAmino;
                fromAminoMsg(object: _13.QueryAccountsRequestAminoMsg): _13.QueryAccountsRequest;
                toAminoMsg(message: _13.QueryAccountsRequest): _13.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _13.QueryAccountsRequestProtoMsg): _13.QueryAccountsRequest;
                toProto(message: _13.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _13.QueryAccountsRequest): _13.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _13.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryAccountsResponse;
                fromPartial(object: Partial<_13.QueryAccountsResponse>): _13.QueryAccountsResponse;
                fromAmino(object: _13.QueryAccountsResponseAmino): _13.QueryAccountsResponse;
                toAmino(message: _13.QueryAccountsResponse): _13.QueryAccountsResponseAmino;
                fromAminoMsg(object: _13.QueryAccountsResponseAminoMsg): _13.QueryAccountsResponse;
                toAminoMsg(message: _13.QueryAccountsResponse): _13.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _13.QueryAccountsResponseProtoMsg): _13.QueryAccountsResponse;
                toProto(message: _13.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _13.QueryAccountsResponse): _13.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _13.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryAccountRequest;
                fromPartial(object: Partial<_13.QueryAccountRequest>): _13.QueryAccountRequest;
                fromAmino(object: _13.QueryAccountRequestAmino): _13.QueryAccountRequest;
                toAmino(message: _13.QueryAccountRequest): _13.QueryAccountRequestAmino;
                fromAminoMsg(object: _13.QueryAccountRequestAminoMsg): _13.QueryAccountRequest;
                toAminoMsg(message: _13.QueryAccountRequest): _13.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _13.QueryAccountRequestProtoMsg): _13.QueryAccountRequest;
                toProto(message: _13.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _13.QueryAccountRequest): _13.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _13.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryAccountResponse;
                fromPartial(object: Partial<_13.QueryAccountResponse>): _13.QueryAccountResponse;
                fromAmino(object: _13.QueryAccountResponseAmino): _13.QueryAccountResponse;
                toAmino(message: _13.QueryAccountResponse): _13.QueryAccountResponseAmino;
                fromAminoMsg(object: _13.QueryAccountResponseAminoMsg): _13.QueryAccountResponse;
                toAminoMsg(message: _13.QueryAccountResponse): _13.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _13.QueryAccountResponseProtoMsg): _13.QueryAccountResponse;
                toProto(message: _13.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _13.QueryAccountResponse): _13.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _13.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.QueryParamsRequest;
                fromPartial(_: Partial<_13.QueryParamsRequest>): _13.QueryParamsRequest;
                fromAmino(_: _13.QueryParamsRequestAmino): _13.QueryParamsRequest;
                toAmino(_: _13.QueryParamsRequest): _13.QueryParamsRequestAmino;
                fromAminoMsg(object: _13.QueryParamsRequestAminoMsg): _13.QueryParamsRequest;
                toAminoMsg(message: _13.QueryParamsRequest): _13.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _13.QueryParamsRequestProtoMsg): _13.QueryParamsRequest;
                toProto(message: _13.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _13.QueryParamsRequest): _13.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _13.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryParamsResponse;
                fromPartial(object: Partial<_13.QueryParamsResponse>): _13.QueryParamsResponse;
                fromAmino(object: _13.QueryParamsResponseAmino): _13.QueryParamsResponse;
                toAmino(message: _13.QueryParamsResponse): _13.QueryParamsResponseAmino;
                fromAminoMsg(object: _13.QueryParamsResponseAminoMsg): _13.QueryParamsResponse;
                toAminoMsg(message: _13.QueryParamsResponse): _13.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _13.QueryParamsResponseProtoMsg): _13.QueryParamsResponse;
                toProto(message: _13.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _13.QueryParamsResponse): _13.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _13.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_13.QueryModuleAccountsRequest>): _13.QueryModuleAccountsRequest;
                fromAmino(_: _13.QueryModuleAccountsRequestAmino): _13.QueryModuleAccountsRequest;
                toAmino(_: _13.QueryModuleAccountsRequest): _13.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _13.QueryModuleAccountsRequestAminoMsg): _13.QueryModuleAccountsRequest;
                toAminoMsg(message: _13.QueryModuleAccountsRequest): _13.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _13.QueryModuleAccountsRequestProtoMsg): _13.QueryModuleAccountsRequest;
                toProto(message: _13.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _13.QueryModuleAccountsRequest): _13.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _13.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_13.QueryModuleAccountsResponse>): _13.QueryModuleAccountsResponse;
                fromAmino(object: _13.QueryModuleAccountsResponseAmino): _13.QueryModuleAccountsResponse;
                toAmino(message: _13.QueryModuleAccountsResponse): _13.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _13.QueryModuleAccountsResponseAminoMsg): _13.QueryModuleAccountsResponse;
                toAminoMsg(message: _13.QueryModuleAccountsResponse): _13.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _13.QueryModuleAccountsResponseProtoMsg): _13.QueryModuleAccountsResponse;
                toProto(message: _13.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _13.QueryModuleAccountsResponse): _13.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _13.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_13.QueryModuleAccountByNameRequest>): _13.QueryModuleAccountByNameRequest;
                fromAmino(object: _13.QueryModuleAccountByNameRequestAmino): _13.QueryModuleAccountByNameRequest;
                toAmino(message: _13.QueryModuleAccountByNameRequest): _13.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _13.QueryModuleAccountByNameRequestAminoMsg): _13.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _13.QueryModuleAccountByNameRequest): _13.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _13.QueryModuleAccountByNameRequestProtoMsg): _13.QueryModuleAccountByNameRequest;
                toProto(message: _13.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _13.QueryModuleAccountByNameRequest): _13.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _13.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_13.QueryModuleAccountByNameResponse>): _13.QueryModuleAccountByNameResponse;
                fromAmino(object: _13.QueryModuleAccountByNameResponseAmino): _13.QueryModuleAccountByNameResponse;
                toAmino(message: _13.QueryModuleAccountByNameResponse): _13.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _13.QueryModuleAccountByNameResponseAminoMsg): _13.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _13.QueryModuleAccountByNameResponse): _13.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _13.QueryModuleAccountByNameResponseProtoMsg): _13.QueryModuleAccountByNameResponse;
                toProto(message: _13.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _13.QueryModuleAccountByNameResponse): _13.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _13.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.Bech32PrefixRequest;
                fromPartial(_: Partial<_13.Bech32PrefixRequest>): _13.Bech32PrefixRequest;
                fromAmino(_: _13.Bech32PrefixRequestAmino): _13.Bech32PrefixRequest;
                toAmino(_: _13.Bech32PrefixRequest): _13.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _13.Bech32PrefixRequestAminoMsg): _13.Bech32PrefixRequest;
                toAminoMsg(message: _13.Bech32PrefixRequest): _13.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _13.Bech32PrefixRequestProtoMsg): _13.Bech32PrefixRequest;
                toProto(message: _13.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _13.Bech32PrefixRequest): _13.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _13.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.Bech32PrefixResponse;
                fromPartial(object: Partial<_13.Bech32PrefixResponse>): _13.Bech32PrefixResponse;
                fromAmino(object: _13.Bech32PrefixResponseAmino): _13.Bech32PrefixResponse;
                toAmino(message: _13.Bech32PrefixResponse): _13.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _13.Bech32PrefixResponseAminoMsg): _13.Bech32PrefixResponse;
                toAminoMsg(message: _13.Bech32PrefixResponse): _13.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _13.Bech32PrefixResponseProtoMsg): _13.Bech32PrefixResponse;
                toProto(message: _13.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _13.Bech32PrefixResponse): _13.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _13.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.AddressBytesToStringRequest;
                fromPartial(object: Partial<_13.AddressBytesToStringRequest>): _13.AddressBytesToStringRequest;
                fromAmino(object: _13.AddressBytesToStringRequestAmino): _13.AddressBytesToStringRequest;
                toAmino(message: _13.AddressBytesToStringRequest): _13.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _13.AddressBytesToStringRequestAminoMsg): _13.AddressBytesToStringRequest;
                toAminoMsg(message: _13.AddressBytesToStringRequest): _13.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _13.AddressBytesToStringRequestProtoMsg): _13.AddressBytesToStringRequest;
                toProto(message: _13.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _13.AddressBytesToStringRequest): _13.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _13.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.AddressBytesToStringResponse;
                fromPartial(object: Partial<_13.AddressBytesToStringResponse>): _13.AddressBytesToStringResponse;
                fromAmino(object: _13.AddressBytesToStringResponseAmino): _13.AddressBytesToStringResponse;
                toAmino(message: _13.AddressBytesToStringResponse): _13.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _13.AddressBytesToStringResponseAminoMsg): _13.AddressBytesToStringResponse;
                toAminoMsg(message: _13.AddressBytesToStringResponse): _13.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _13.AddressBytesToStringResponseProtoMsg): _13.AddressBytesToStringResponse;
                toProto(message: _13.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _13.AddressBytesToStringResponse): _13.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _13.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.AddressStringToBytesRequest;
                fromPartial(object: Partial<_13.AddressStringToBytesRequest>): _13.AddressStringToBytesRequest;
                fromAmino(object: _13.AddressStringToBytesRequestAmino): _13.AddressStringToBytesRequest;
                toAmino(message: _13.AddressStringToBytesRequest): _13.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _13.AddressStringToBytesRequestAminoMsg): _13.AddressStringToBytesRequest;
                toAminoMsg(message: _13.AddressStringToBytesRequest): _13.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _13.AddressStringToBytesRequestProtoMsg): _13.AddressStringToBytesRequest;
                toProto(message: _13.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _13.AddressStringToBytesRequest): _13.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _13.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.AddressStringToBytesResponse;
                fromPartial(object: Partial<_13.AddressStringToBytesResponse>): _13.AddressStringToBytesResponse;
                fromAmino(object: _13.AddressStringToBytesResponseAmino): _13.AddressStringToBytesResponse;
                toAmino(message: _13.AddressStringToBytesResponse): _13.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _13.AddressStringToBytesResponseAminoMsg): _13.AddressStringToBytesResponse;
                toAminoMsg(message: _13.AddressStringToBytesResponse): _13.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _13.AddressStringToBytesResponseProtoMsg): _13.AddressStringToBytesResponse;
                toProto(message: _13.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _13.AddressStringToBytesResponse): _13.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _13.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_13.QueryAccountAddressByIDRequest>): _13.QueryAccountAddressByIDRequest;
                fromAmino(object: _13.QueryAccountAddressByIDRequestAmino): _13.QueryAccountAddressByIDRequest;
                toAmino(message: _13.QueryAccountAddressByIDRequest): _13.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _13.QueryAccountAddressByIDRequestAminoMsg): _13.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _13.QueryAccountAddressByIDRequest): _13.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _13.QueryAccountAddressByIDRequestProtoMsg): _13.QueryAccountAddressByIDRequest;
                toProto(message: _13.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _13.QueryAccountAddressByIDRequest): _13.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _13.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_13.QueryAccountAddressByIDResponse>): _13.QueryAccountAddressByIDResponse;
                fromAmino(object: _13.QueryAccountAddressByIDResponseAmino): _13.QueryAccountAddressByIDResponse;
                toAmino(message: _13.QueryAccountAddressByIDResponse): _13.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _13.QueryAccountAddressByIDResponseAminoMsg): _13.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _13.QueryAccountAddressByIDResponse): _13.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _13.QueryAccountAddressByIDResponseProtoMsg): _13.QueryAccountAddressByIDResponse;
                toProto(message: _13.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _13.QueryAccountAddressByIDResponse): _13.QueryAccountAddressByIDResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _11.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _11.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _12.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.GenesisState;
                fromPartial(object: Partial<_12.GenesisState>): _12.GenesisState;
                fromAmino(object: _12.GenesisStateAmino): _12.GenesisState;
                toAmino(message: _12.GenesisState): _12.GenesisStateAmino;
                fromAminoMsg(object: _12.GenesisStateAminoMsg): _12.GenesisState;
                toAminoMsg(message: _12.GenesisState): _12.GenesisStateAminoMsg;
                fromProtoMsg(message: _12.GenesisStateProtoMsg): _12.GenesisState;
                toProto(message: _12.GenesisState): Uint8Array;
                toProtoMsg(message: _12.GenesisState): _12.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _11.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.BaseAccount;
                fromPartial(object: Partial<_11.BaseAccount>): _11.BaseAccount;
                fromAmino(object: _11.BaseAccountAmino): _11.BaseAccount;
                toAmino(message: _11.BaseAccount): _11.BaseAccountAmino;
                fromAminoMsg(object: _11.BaseAccountAminoMsg): _11.BaseAccount;
                toAminoMsg(message: _11.BaseAccount): _11.BaseAccountAminoMsg;
                fromProtoMsg(message: _11.BaseAccountProtoMsg): _11.BaseAccount;
                toProto(message: _11.BaseAccount): Uint8Array;
                toProtoMsg(message: _11.BaseAccount): _11.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _11.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.ModuleAccount;
                fromPartial(object: Partial<_11.ModuleAccount>): _11.ModuleAccount;
                fromAmino(object: _11.ModuleAccountAmino): _11.ModuleAccount;
                toAmino(message: _11.ModuleAccount): _11.ModuleAccountAmino;
                fromAminoMsg(object: _11.ModuleAccountAminoMsg): _11.ModuleAccount;
                toAminoMsg(message: _11.ModuleAccount): _11.ModuleAccountAminoMsg;
                fromProtoMsg(message: _11.ModuleAccountProtoMsg): _11.ModuleAccount;
                toProto(message: _11.ModuleAccount): Uint8Array;
                toProtoMsg(message: _11.ModuleAccount): _11.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _11.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Params;
                fromPartial(object: Partial<_11.Params>): _11.Params;
                fromAmino(object: _11.ParamsAmino): _11.Params;
                toAmino(message: _11.Params): _11.ParamsAmino;
                fromAminoMsg(object: _11.ParamsAminoMsg): _11.Params;
                toAminoMsg(message: _11.Params): _11.ParamsAminoMsg;
                fromProtoMsg(message: _11.ParamsProtoMsg): _11.Params;
                toProto(message: _11.Params): Uint8Array;
                toProtoMsg(message: _11.Params): _11.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _207.MsgClientImpl;
            QueryClientImpl: typeof _190.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _17.QueryGrantsRequest): Promise<_17.QueryGrantsResponse>;
                granterGrants(request: _17.QueryGranterGrantsRequest): Promise<_17.QueryGranterGrantsResponse>;
                granteeGrants(request: _17.QueryGranteeGrantsRequest): Promise<_17.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _171.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _18.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _18.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _18.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _18.MsgGrant): {
                        typeUrl: string;
                        value: _18.MsgGrant;
                    };
                    exec(value: _18.MsgExec): {
                        typeUrl: string;
                        value: _18.MsgExec;
                    };
                    revoke(value: _18.MsgRevoke): {
                        typeUrl: string;
                        value: _18.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _18.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _18.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _18.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _18.MsgGrant): {
                        typeUrl: string;
                        value: _18.MsgGrant;
                    };
                    exec(value: _18.MsgExec): {
                        typeUrl: string;
                        value: _18.MsgExec;
                    };
                    revoke(value: _18.MsgRevoke): {
                        typeUrl: string;
                        value: _18.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _18.MsgGrant) => _18.MsgGrantAmino;
                    fromAmino: (object: _18.MsgGrantAmino) => _18.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _18.MsgExec) => _18.MsgExecAmino;
                    fromAmino: (object: _18.MsgExecAmino) => _18.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _18.MsgRevoke) => _18.MsgRevokeAmino;
                    fromAmino: (object: _18.MsgRevokeAmino) => _18.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _18.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgGrant;
                fromPartial(object: Partial<_18.MsgGrant>): _18.MsgGrant;
                fromAmino(object: _18.MsgGrantAmino): _18.MsgGrant;
                toAmino(message: _18.MsgGrant): _18.MsgGrantAmino;
                fromAminoMsg(object: _18.MsgGrantAminoMsg): _18.MsgGrant;
                toAminoMsg(message: _18.MsgGrant): _18.MsgGrantAminoMsg;
                fromProtoMsg(message: _18.MsgGrantProtoMsg): _18.MsgGrant;
                toProto(message: _18.MsgGrant): Uint8Array;
                toProtoMsg(message: _18.MsgGrant): _18.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _18.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgExecResponse;
                fromPartial(object: Partial<_18.MsgExecResponse>): _18.MsgExecResponse;
                fromAmino(object: _18.MsgExecResponseAmino): _18.MsgExecResponse;
                toAmino(message: _18.MsgExecResponse): _18.MsgExecResponseAmino;
                fromAminoMsg(object: _18.MsgExecResponseAminoMsg): _18.MsgExecResponse;
                toAminoMsg(message: _18.MsgExecResponse): _18.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _18.MsgExecResponseProtoMsg): _18.MsgExecResponse;
                toProto(message: _18.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _18.MsgExecResponse): _18.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _18.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgExec;
                fromPartial(object: Partial<_18.MsgExec>): _18.MsgExec;
                fromAmino(object: _18.MsgExecAmino): _18.MsgExec;
                toAmino(message: _18.MsgExec): _18.MsgExecAmino;
                fromAminoMsg(object: _18.MsgExecAminoMsg): _18.MsgExec;
                toAminoMsg(message: _18.MsgExec): _18.MsgExecAminoMsg;
                fromProtoMsg(message: _18.MsgExecProtoMsg): _18.MsgExec;
                toProto(message: _18.MsgExec): Uint8Array;
                toProtoMsg(message: _18.MsgExec): _18.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _18.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgGrantResponse;
                fromPartial(_: Partial<_18.MsgGrantResponse>): _18.MsgGrantResponse;
                fromAmino(_: _18.MsgGrantResponseAmino): _18.MsgGrantResponse;
                toAmino(_: _18.MsgGrantResponse): _18.MsgGrantResponseAmino;
                fromAminoMsg(object: _18.MsgGrantResponseAminoMsg): _18.MsgGrantResponse;
                toAminoMsg(message: _18.MsgGrantResponse): _18.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _18.MsgGrantResponseProtoMsg): _18.MsgGrantResponse;
                toProto(message: _18.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _18.MsgGrantResponse): _18.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _18.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgRevoke;
                fromPartial(object: Partial<_18.MsgRevoke>): _18.MsgRevoke;
                fromAmino(object: _18.MsgRevokeAmino): _18.MsgRevoke;
                toAmino(message: _18.MsgRevoke): _18.MsgRevokeAmino;
                fromAminoMsg(object: _18.MsgRevokeAminoMsg): _18.MsgRevoke;
                toAminoMsg(message: _18.MsgRevoke): _18.MsgRevokeAminoMsg;
                fromProtoMsg(message: _18.MsgRevokeProtoMsg): _18.MsgRevoke;
                toProto(message: _18.MsgRevoke): Uint8Array;
                toProtoMsg(message: _18.MsgRevoke): _18.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _18.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgRevokeResponse;
                fromPartial(_: Partial<_18.MsgRevokeResponse>): _18.MsgRevokeResponse;
                fromAmino(_: _18.MsgRevokeResponseAmino): _18.MsgRevokeResponse;
                toAmino(_: _18.MsgRevokeResponse): _18.MsgRevokeResponseAmino;
                fromAminoMsg(object: _18.MsgRevokeResponseAminoMsg): _18.MsgRevokeResponse;
                toAminoMsg(message: _18.MsgRevokeResponse): _18.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _18.MsgRevokeResponseProtoMsg): _18.MsgRevokeResponse;
                toProto(message: _18.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _18.MsgRevokeResponse): _18.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _17.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryGrantsRequest;
                fromPartial(object: Partial<_17.QueryGrantsRequest>): _17.QueryGrantsRequest;
                fromAmino(object: _17.QueryGrantsRequestAmino): _17.QueryGrantsRequest;
                toAmino(message: _17.QueryGrantsRequest): _17.QueryGrantsRequestAmino;
                fromAminoMsg(object: _17.QueryGrantsRequestAminoMsg): _17.QueryGrantsRequest;
                toAminoMsg(message: _17.QueryGrantsRequest): _17.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _17.QueryGrantsRequestProtoMsg): _17.QueryGrantsRequest;
                toProto(message: _17.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryGrantsRequest): _17.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _17.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryGrantsResponse;
                fromPartial(object: Partial<_17.QueryGrantsResponse>): _17.QueryGrantsResponse;
                fromAmino(object: _17.QueryGrantsResponseAmino): _17.QueryGrantsResponse;
                toAmino(message: _17.QueryGrantsResponse): _17.QueryGrantsResponseAmino;
                fromAminoMsg(object: _17.QueryGrantsResponseAminoMsg): _17.QueryGrantsResponse;
                toAminoMsg(message: _17.QueryGrantsResponse): _17.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _17.QueryGrantsResponseProtoMsg): _17.QueryGrantsResponse;
                toProto(message: _17.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryGrantsResponse): _17.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _17.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_17.QueryGranterGrantsRequest>): _17.QueryGranterGrantsRequest;
                fromAmino(object: _17.QueryGranterGrantsRequestAmino): _17.QueryGranterGrantsRequest;
                toAmino(message: _17.QueryGranterGrantsRequest): _17.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _17.QueryGranterGrantsRequestAminoMsg): _17.QueryGranterGrantsRequest;
                toAminoMsg(message: _17.QueryGranterGrantsRequest): _17.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _17.QueryGranterGrantsRequestProtoMsg): _17.QueryGranterGrantsRequest;
                toProto(message: _17.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryGranterGrantsRequest): _17.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _17.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_17.QueryGranterGrantsResponse>): _17.QueryGranterGrantsResponse;
                fromAmino(object: _17.QueryGranterGrantsResponseAmino): _17.QueryGranterGrantsResponse;
                toAmino(message: _17.QueryGranterGrantsResponse): _17.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _17.QueryGranterGrantsResponseAminoMsg): _17.QueryGranterGrantsResponse;
                toAminoMsg(message: _17.QueryGranterGrantsResponse): _17.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _17.QueryGranterGrantsResponseProtoMsg): _17.QueryGranterGrantsResponse;
                toProto(message: _17.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryGranterGrantsResponse): _17.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _17.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_17.QueryGranteeGrantsRequest>): _17.QueryGranteeGrantsRequest;
                fromAmino(object: _17.QueryGranteeGrantsRequestAmino): _17.QueryGranteeGrantsRequest;
                toAmino(message: _17.QueryGranteeGrantsRequest): _17.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _17.QueryGranteeGrantsRequestAminoMsg): _17.QueryGranteeGrantsRequest;
                toAminoMsg(message: _17.QueryGranteeGrantsRequest): _17.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _17.QueryGranteeGrantsRequestProtoMsg): _17.QueryGranteeGrantsRequest;
                toProto(message: _17.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryGranteeGrantsRequest): _17.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _17.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_17.QueryGranteeGrantsResponse>): _17.QueryGranteeGrantsResponse;
                fromAmino(object: _17.QueryGranteeGrantsResponseAmino): _17.QueryGranteeGrantsResponse;
                toAmino(message: _17.QueryGranteeGrantsResponse): _17.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _17.QueryGranteeGrantsResponseAminoMsg): _17.QueryGranteeGrantsResponse;
                toAminoMsg(message: _17.QueryGranteeGrantsResponse): _17.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _17.QueryGranteeGrantsResponseProtoMsg): _17.QueryGranteeGrantsResponse;
                toProto(message: _17.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryGranteeGrantsResponse): _17.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _16.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.GenesisState;
                fromPartial(object: Partial<_16.GenesisState>): _16.GenesisState;
                fromAmino(object: _16.GenesisStateAmino): _16.GenesisState;
                toAmino(message: _16.GenesisState): _16.GenesisStateAmino;
                fromAminoMsg(object: _16.GenesisStateAminoMsg): _16.GenesisState;
                toAminoMsg(message: _16.GenesisState): _16.GenesisStateAminoMsg;
                fromProtoMsg(message: _16.GenesisStateProtoMsg): _16.GenesisState;
                toProto(message: _16.GenesisState): Uint8Array;
                toProtoMsg(message: _16.GenesisState): _16.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _15.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.EventGrant;
                fromPartial(object: Partial<_15.EventGrant>): _15.EventGrant;
                fromAmino(object: _15.EventGrantAmino): _15.EventGrant;
                toAmino(message: _15.EventGrant): _15.EventGrantAmino;
                fromAminoMsg(object: _15.EventGrantAminoMsg): _15.EventGrant;
                toAminoMsg(message: _15.EventGrant): _15.EventGrantAminoMsg;
                fromProtoMsg(message: _15.EventGrantProtoMsg): _15.EventGrant;
                toProto(message: _15.EventGrant): Uint8Array;
                toProtoMsg(message: _15.EventGrant): _15.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _15.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.EventRevoke;
                fromPartial(object: Partial<_15.EventRevoke>): _15.EventRevoke;
                fromAmino(object: _15.EventRevokeAmino): _15.EventRevoke;
                toAmino(message: _15.EventRevoke): _15.EventRevokeAmino;
                fromAminoMsg(object: _15.EventRevokeAminoMsg): _15.EventRevoke;
                toAminoMsg(message: _15.EventRevoke): _15.EventRevokeAminoMsg;
                fromProtoMsg(message: _15.EventRevokeProtoMsg): _15.EventRevoke;
                toProto(message: _15.EventRevoke): Uint8Array;
                toProtoMsg(message: _15.EventRevoke): _15.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _14.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.GenericAuthorization;
                fromPartial(object: Partial<_14.GenericAuthorization>): _14.GenericAuthorization;
                fromAmino(object: _14.GenericAuthorizationAmino): _14.GenericAuthorization;
                toAmino(message: _14.GenericAuthorization): _14.GenericAuthorizationAmino;
                fromAminoMsg(object: _14.GenericAuthorizationAminoMsg): _14.GenericAuthorization;
                toAminoMsg(message: _14.GenericAuthorization): _14.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _14.GenericAuthorizationProtoMsg): _14.GenericAuthorization;
                toProto(message: _14.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _14.GenericAuthorization): _14.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _14.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.Grant;
                fromPartial(object: Partial<_14.Grant>): _14.Grant;
                fromAmino(object: _14.GrantAmino): _14.Grant;
                toAmino(message: _14.Grant): _14.GrantAmino;
                fromAminoMsg(object: _14.GrantAminoMsg): _14.Grant;
                toAminoMsg(message: _14.Grant): _14.GrantAminoMsg;
                fromProtoMsg(message: _14.GrantProtoMsg): _14.Grant;
                toProto(message: _14.Grant): Uint8Array;
                toProtoMsg(message: _14.Grant): _14.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _14.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.GrantAuthorization;
                fromPartial(object: Partial<_14.GrantAuthorization>): _14.GrantAuthorization;
                fromAmino(object: _14.GrantAuthorizationAmino): _14.GrantAuthorization;
                toAmino(message: _14.GrantAuthorization): _14.GrantAuthorizationAmino;
                fromAminoMsg(object: _14.GrantAuthorizationAminoMsg): _14.GrantAuthorization;
                toAminoMsg(message: _14.GrantAuthorization): _14.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _14.GrantAuthorizationProtoMsg): _14.GrantAuthorization;
                toProto(message: _14.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _14.GrantAuthorization): _14.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _14.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.GrantQueueItem;
                fromPartial(object: Partial<_14.GrantQueueItem>): _14.GrantQueueItem;
                fromAmino(object: _14.GrantQueueItemAmino): _14.GrantQueueItem;
                toAmino(message: _14.GrantQueueItem): _14.GrantQueueItemAmino;
                fromAminoMsg(object: _14.GrantQueueItemAminoMsg): _14.GrantQueueItem;
                toAminoMsg(message: _14.GrantQueueItem): _14.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _14.GrantQueueItemProtoMsg): _14.GrantQueueItem;
                toProto(message: _14.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _14.GrantQueueItem): _14.GrantQueueItemProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _19.SendAuthorization | _90.StakeAuthorization | _14.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _208.MsgClientImpl;
            QueryClientImpl: typeof _191.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _22.QueryBalanceRequest): Promise<_22.QueryBalanceResponse>;
                allBalances(request: _22.QueryAllBalancesRequest): Promise<_22.QueryAllBalancesResponse>;
                spendableBalances(request: _22.QuerySpendableBalancesRequest): Promise<_22.QuerySpendableBalancesResponse>;
                totalSupply(request?: _22.QueryTotalSupplyRequest): Promise<_22.QueryTotalSupplyResponse>;
                supplyOf(request: _22.QuerySupplyOfRequest): Promise<_22.QuerySupplyOfResponse>;
                params(request?: _22.QueryParamsRequest): Promise<_22.QueryParamsResponse>;
                denomMetadata(request: _22.QueryDenomMetadataRequest): Promise<_22.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _22.QueryDenomsMetadataRequest): Promise<_22.QueryDenomsMetadataResponse>;
                denomOwners(request: _22.QueryDenomOwnersRequest): Promise<_22.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _172.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _23.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _23.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _23.MsgSend): {
                        typeUrl: string;
                        value: _23.MsgSend;
                    };
                    multiSend(value: _23.MsgMultiSend): {
                        typeUrl: string;
                        value: _23.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _23.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _23.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _23.MsgSend): {
                        typeUrl: string;
                        value: _23.MsgSend;
                    };
                    multiSend(value: _23.MsgMultiSend): {
                        typeUrl: string;
                        value: _23.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _23.MsgSend) => _23.MsgSendAmino;
                    fromAmino: (object: _23.MsgSendAmino) => _23.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _23.MsgMultiSend) => _23.MsgMultiSendAmino;
                    fromAmino: (object: _23.MsgMultiSendAmino) => _23.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _23.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgSend;
                fromPartial(object: Partial<_23.MsgSend>): _23.MsgSend;
                fromAmino(object: _23.MsgSendAmino): _23.MsgSend;
                toAmino(message: _23.MsgSend): _23.MsgSendAmino;
                fromAminoMsg(object: _23.MsgSendAminoMsg): _23.MsgSend;
                toAminoMsg(message: _23.MsgSend): _23.MsgSendAminoMsg;
                fromProtoMsg(message: _23.MsgSendProtoMsg): _23.MsgSend;
                toProto(message: _23.MsgSend): Uint8Array;
                toProtoMsg(message: _23.MsgSend): _23.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _23.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgSendResponse;
                fromPartial(_: Partial<_23.MsgSendResponse>): _23.MsgSendResponse;
                fromAmino(_: _23.MsgSendResponseAmino): _23.MsgSendResponse;
                toAmino(_: _23.MsgSendResponse): _23.MsgSendResponseAmino;
                fromAminoMsg(object: _23.MsgSendResponseAminoMsg): _23.MsgSendResponse;
                toAminoMsg(message: _23.MsgSendResponse): _23.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _23.MsgSendResponseProtoMsg): _23.MsgSendResponse;
                toProto(message: _23.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _23.MsgSendResponse): _23.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _23.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgMultiSend;
                fromPartial(object: Partial<_23.MsgMultiSend>): _23.MsgMultiSend;
                fromAmino(object: _23.MsgMultiSendAmino): _23.MsgMultiSend;
                toAmino(message: _23.MsgMultiSend): _23.MsgMultiSendAmino;
                fromAminoMsg(object: _23.MsgMultiSendAminoMsg): _23.MsgMultiSend;
                toAminoMsg(message: _23.MsgMultiSend): _23.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _23.MsgMultiSendProtoMsg): _23.MsgMultiSend;
                toProto(message: _23.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _23.MsgMultiSend): _23.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _23.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgMultiSendResponse;
                fromPartial(_: Partial<_23.MsgMultiSendResponse>): _23.MsgMultiSendResponse;
                fromAmino(_: _23.MsgMultiSendResponseAmino): _23.MsgMultiSendResponse;
                toAmino(_: _23.MsgMultiSendResponse): _23.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _23.MsgMultiSendResponseAminoMsg): _23.MsgMultiSendResponse;
                toAminoMsg(message: _23.MsgMultiSendResponse): _23.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _23.MsgMultiSendResponseProtoMsg): _23.MsgMultiSendResponse;
                toProto(message: _23.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _23.MsgMultiSendResponse): _23.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _22.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryBalanceRequest;
                fromPartial(object: Partial<_22.QueryBalanceRequest>): _22.QueryBalanceRequest;
                fromAmino(object: _22.QueryBalanceRequestAmino): _22.QueryBalanceRequest;
                toAmino(message: _22.QueryBalanceRequest): _22.QueryBalanceRequestAmino;
                fromAminoMsg(object: _22.QueryBalanceRequestAminoMsg): _22.QueryBalanceRequest;
                toAminoMsg(message: _22.QueryBalanceRequest): _22.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _22.QueryBalanceRequestProtoMsg): _22.QueryBalanceRequest;
                toProto(message: _22.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _22.QueryBalanceRequest): _22.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _22.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryBalanceResponse;
                fromPartial(object: Partial<_22.QueryBalanceResponse>): _22.QueryBalanceResponse;
                fromAmino(object: _22.QueryBalanceResponseAmino): _22.QueryBalanceResponse;
                toAmino(message: _22.QueryBalanceResponse): _22.QueryBalanceResponseAmino;
                fromAminoMsg(object: _22.QueryBalanceResponseAminoMsg): _22.QueryBalanceResponse;
                toAminoMsg(message: _22.QueryBalanceResponse): _22.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _22.QueryBalanceResponseProtoMsg): _22.QueryBalanceResponse;
                toProto(message: _22.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _22.QueryBalanceResponse): _22.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _22.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryAllBalancesRequest;
                fromPartial(object: Partial<_22.QueryAllBalancesRequest>): _22.QueryAllBalancesRequest;
                fromAmino(object: _22.QueryAllBalancesRequestAmino): _22.QueryAllBalancesRequest;
                toAmino(message: _22.QueryAllBalancesRequest): _22.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _22.QueryAllBalancesRequestAminoMsg): _22.QueryAllBalancesRequest;
                toAminoMsg(message: _22.QueryAllBalancesRequest): _22.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _22.QueryAllBalancesRequestProtoMsg): _22.QueryAllBalancesRequest;
                toProto(message: _22.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _22.QueryAllBalancesRequest): _22.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _22.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryAllBalancesResponse;
                fromPartial(object: Partial<_22.QueryAllBalancesResponse>): _22.QueryAllBalancesResponse;
                fromAmino(object: _22.QueryAllBalancesResponseAmino): _22.QueryAllBalancesResponse;
                toAmino(message: _22.QueryAllBalancesResponse): _22.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _22.QueryAllBalancesResponseAminoMsg): _22.QueryAllBalancesResponse;
                toAminoMsg(message: _22.QueryAllBalancesResponse): _22.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _22.QueryAllBalancesResponseProtoMsg): _22.QueryAllBalancesResponse;
                toProto(message: _22.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _22.QueryAllBalancesResponse): _22.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _22.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_22.QuerySpendableBalancesRequest>): _22.QuerySpendableBalancesRequest;
                fromAmino(object: _22.QuerySpendableBalancesRequestAmino): _22.QuerySpendableBalancesRequest;
                toAmino(message: _22.QuerySpendableBalancesRequest): _22.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _22.QuerySpendableBalancesRequestAminoMsg): _22.QuerySpendableBalancesRequest;
                toAminoMsg(message: _22.QuerySpendableBalancesRequest): _22.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _22.QuerySpendableBalancesRequestProtoMsg): _22.QuerySpendableBalancesRequest;
                toProto(message: _22.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _22.QuerySpendableBalancesRequest): _22.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _22.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_22.QuerySpendableBalancesResponse>): _22.QuerySpendableBalancesResponse;
                fromAmino(object: _22.QuerySpendableBalancesResponseAmino): _22.QuerySpendableBalancesResponse;
                toAmino(message: _22.QuerySpendableBalancesResponse): _22.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _22.QuerySpendableBalancesResponseAminoMsg): _22.QuerySpendableBalancesResponse;
                toAminoMsg(message: _22.QuerySpendableBalancesResponse): _22.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _22.QuerySpendableBalancesResponseProtoMsg): _22.QuerySpendableBalancesResponse;
                toProto(message: _22.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _22.QuerySpendableBalancesResponse): _22.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _22.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_22.QueryTotalSupplyRequest>): _22.QueryTotalSupplyRequest;
                fromAmino(object: _22.QueryTotalSupplyRequestAmino): _22.QueryTotalSupplyRequest;
                toAmino(message: _22.QueryTotalSupplyRequest): _22.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _22.QueryTotalSupplyRequestAminoMsg): _22.QueryTotalSupplyRequest;
                toAminoMsg(message: _22.QueryTotalSupplyRequest): _22.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _22.QueryTotalSupplyRequestProtoMsg): _22.QueryTotalSupplyRequest;
                toProto(message: _22.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _22.QueryTotalSupplyRequest): _22.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _22.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_22.QueryTotalSupplyResponse>): _22.QueryTotalSupplyResponse;
                fromAmino(object: _22.QueryTotalSupplyResponseAmino): _22.QueryTotalSupplyResponse;
                toAmino(message: _22.QueryTotalSupplyResponse): _22.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _22.QueryTotalSupplyResponseAminoMsg): _22.QueryTotalSupplyResponse;
                toAminoMsg(message: _22.QueryTotalSupplyResponse): _22.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _22.QueryTotalSupplyResponseProtoMsg): _22.QueryTotalSupplyResponse;
                toProto(message: _22.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _22.QueryTotalSupplyResponse): _22.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _22.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QuerySupplyOfRequest;
                fromPartial(object: Partial<_22.QuerySupplyOfRequest>): _22.QuerySupplyOfRequest;
                fromAmino(object: _22.QuerySupplyOfRequestAmino): _22.QuerySupplyOfRequest;
                toAmino(message: _22.QuerySupplyOfRequest): _22.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _22.QuerySupplyOfRequestAminoMsg): _22.QuerySupplyOfRequest;
                toAminoMsg(message: _22.QuerySupplyOfRequest): _22.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _22.QuerySupplyOfRequestProtoMsg): _22.QuerySupplyOfRequest;
                toProto(message: _22.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _22.QuerySupplyOfRequest): _22.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _22.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QuerySupplyOfResponse;
                fromPartial(object: Partial<_22.QuerySupplyOfResponse>): _22.QuerySupplyOfResponse;
                fromAmino(object: _22.QuerySupplyOfResponseAmino): _22.QuerySupplyOfResponse;
                toAmino(message: _22.QuerySupplyOfResponse): _22.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _22.QuerySupplyOfResponseAminoMsg): _22.QuerySupplyOfResponse;
                toAminoMsg(message: _22.QuerySupplyOfResponse): _22.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _22.QuerySupplyOfResponseProtoMsg): _22.QuerySupplyOfResponse;
                toProto(message: _22.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _22.QuerySupplyOfResponse): _22.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _22.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.QueryParamsRequest;
                fromPartial(_: Partial<_22.QueryParamsRequest>): _22.QueryParamsRequest;
                fromAmino(_: _22.QueryParamsRequestAmino): _22.QueryParamsRequest;
                toAmino(_: _22.QueryParamsRequest): _22.QueryParamsRequestAmino;
                fromAminoMsg(object: _22.QueryParamsRequestAminoMsg): _22.QueryParamsRequest;
                toAminoMsg(message: _22.QueryParamsRequest): _22.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _22.QueryParamsRequestProtoMsg): _22.QueryParamsRequest;
                toProto(message: _22.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _22.QueryParamsRequest): _22.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _22.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryParamsResponse;
                fromPartial(object: Partial<_22.QueryParamsResponse>): _22.QueryParamsResponse;
                fromAmino(object: _22.QueryParamsResponseAmino): _22.QueryParamsResponse;
                toAmino(message: _22.QueryParamsResponse): _22.QueryParamsResponseAmino;
                fromAminoMsg(object: _22.QueryParamsResponseAminoMsg): _22.QueryParamsResponse;
                toAminoMsg(message: _22.QueryParamsResponse): _22.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _22.QueryParamsResponseProtoMsg): _22.QueryParamsResponse;
                toProto(message: _22.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _22.QueryParamsResponse): _22.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _22.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_22.QueryDenomsMetadataRequest>): _22.QueryDenomsMetadataRequest;
                fromAmino(object: _22.QueryDenomsMetadataRequestAmino): _22.QueryDenomsMetadataRequest;
                toAmino(message: _22.QueryDenomsMetadataRequest): _22.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _22.QueryDenomsMetadataRequestAminoMsg): _22.QueryDenomsMetadataRequest;
                toAminoMsg(message: _22.QueryDenomsMetadataRequest): _22.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _22.QueryDenomsMetadataRequestProtoMsg): _22.QueryDenomsMetadataRequest;
                toProto(message: _22.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _22.QueryDenomsMetadataRequest): _22.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _22.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_22.QueryDenomsMetadataResponse>): _22.QueryDenomsMetadataResponse;
                fromAmino(object: _22.QueryDenomsMetadataResponseAmino): _22.QueryDenomsMetadataResponse;
                toAmino(message: _22.QueryDenomsMetadataResponse): _22.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _22.QueryDenomsMetadataResponseAminoMsg): _22.QueryDenomsMetadataResponse;
                toAminoMsg(message: _22.QueryDenomsMetadataResponse): _22.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _22.QueryDenomsMetadataResponseProtoMsg): _22.QueryDenomsMetadataResponse;
                toProto(message: _22.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _22.QueryDenomsMetadataResponse): _22.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _22.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_22.QueryDenomMetadataRequest>): _22.QueryDenomMetadataRequest;
                fromAmino(object: _22.QueryDenomMetadataRequestAmino): _22.QueryDenomMetadataRequest;
                toAmino(message: _22.QueryDenomMetadataRequest): _22.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _22.QueryDenomMetadataRequestAminoMsg): _22.QueryDenomMetadataRequest;
                toAminoMsg(message: _22.QueryDenomMetadataRequest): _22.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _22.QueryDenomMetadataRequestProtoMsg): _22.QueryDenomMetadataRequest;
                toProto(message: _22.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _22.QueryDenomMetadataRequest): _22.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _22.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_22.QueryDenomMetadataResponse>): _22.QueryDenomMetadataResponse;
                fromAmino(object: _22.QueryDenomMetadataResponseAmino): _22.QueryDenomMetadataResponse;
                toAmino(message: _22.QueryDenomMetadataResponse): _22.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _22.QueryDenomMetadataResponseAminoMsg): _22.QueryDenomMetadataResponse;
                toAminoMsg(message: _22.QueryDenomMetadataResponse): _22.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _22.QueryDenomMetadataResponseProtoMsg): _22.QueryDenomMetadataResponse;
                toProto(message: _22.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _22.QueryDenomMetadataResponse): _22.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _22.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_22.QueryDenomOwnersRequest>): _22.QueryDenomOwnersRequest;
                fromAmino(object: _22.QueryDenomOwnersRequestAmino): _22.QueryDenomOwnersRequest;
                toAmino(message: _22.QueryDenomOwnersRequest): _22.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _22.QueryDenomOwnersRequestAminoMsg): _22.QueryDenomOwnersRequest;
                toAminoMsg(message: _22.QueryDenomOwnersRequest): _22.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _22.QueryDenomOwnersRequestProtoMsg): _22.QueryDenomOwnersRequest;
                toProto(message: _22.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _22.QueryDenomOwnersRequest): _22.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _22.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.DenomOwner;
                fromPartial(object: Partial<_22.DenomOwner>): _22.DenomOwner;
                fromAmino(object: _22.DenomOwnerAmino): _22.DenomOwner;
                toAmino(message: _22.DenomOwner): _22.DenomOwnerAmino;
                fromAminoMsg(object: _22.DenomOwnerAminoMsg): _22.DenomOwner;
                toAminoMsg(message: _22.DenomOwner): _22.DenomOwnerAminoMsg;
                fromProtoMsg(message: _22.DenomOwnerProtoMsg): _22.DenomOwner;
                toProto(message: _22.DenomOwner): Uint8Array;
                toProtoMsg(message: _22.DenomOwner): _22.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _22.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_22.QueryDenomOwnersResponse>): _22.QueryDenomOwnersResponse;
                fromAmino(object: _22.QueryDenomOwnersResponseAmino): _22.QueryDenomOwnersResponse;
                toAmino(message: _22.QueryDenomOwnersResponse): _22.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _22.QueryDenomOwnersResponseAminoMsg): _22.QueryDenomOwnersResponse;
                toAminoMsg(message: _22.QueryDenomOwnersResponse): _22.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _22.QueryDenomOwnersResponseProtoMsg): _22.QueryDenomOwnersResponse;
                toProto(message: _22.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _22.QueryDenomOwnersResponse): _22.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _21.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.GenesisState;
                fromPartial(object: Partial<_21.GenesisState>): _21.GenesisState;
                fromAmino(object: _21.GenesisStateAmino): _21.GenesisState;
                toAmino(message: _21.GenesisState): _21.GenesisStateAmino;
                fromAminoMsg(object: _21.GenesisStateAminoMsg): _21.GenesisState;
                toAminoMsg(message: _21.GenesisState): _21.GenesisStateAminoMsg;
                fromProtoMsg(message: _21.GenesisStateProtoMsg): _21.GenesisState;
                toProto(message: _21.GenesisState): Uint8Array;
                toProtoMsg(message: _21.GenesisState): _21.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _21.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.Balance;
                fromPartial(object: Partial<_21.Balance>): _21.Balance;
                fromAmino(object: _21.BalanceAmino): _21.Balance;
                toAmino(message: _21.Balance): _21.BalanceAmino;
                fromAminoMsg(object: _21.BalanceAminoMsg): _21.Balance;
                toAminoMsg(message: _21.Balance): _21.BalanceAminoMsg;
                fromProtoMsg(message: _21.BalanceProtoMsg): _21.Balance;
                toProto(message: _21.Balance): Uint8Array;
                toProtoMsg(message: _21.Balance): _21.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _20.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Params;
                fromPartial(object: Partial<_20.Params>): _20.Params;
                fromAmino(object: _20.ParamsAmino): _20.Params;
                toAmino(message: _20.Params): _20.ParamsAmino;
                fromAminoMsg(object: _20.ParamsAminoMsg): _20.Params;
                toAminoMsg(message: _20.Params): _20.ParamsAminoMsg;
                fromProtoMsg(message: _20.ParamsProtoMsg): _20.Params;
                toProto(message: _20.Params): Uint8Array;
                toProtoMsg(message: _20.Params): _20.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _20.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.SendEnabled;
                fromPartial(object: Partial<_20.SendEnabled>): _20.SendEnabled;
                fromAmino(object: _20.SendEnabledAmino): _20.SendEnabled;
                toAmino(message: _20.SendEnabled): _20.SendEnabledAmino;
                fromAminoMsg(object: _20.SendEnabledAminoMsg): _20.SendEnabled;
                toAminoMsg(message: _20.SendEnabled): _20.SendEnabledAminoMsg;
                fromProtoMsg(message: _20.SendEnabledProtoMsg): _20.SendEnabled;
                toProto(message: _20.SendEnabled): Uint8Array;
                toProtoMsg(message: _20.SendEnabled): _20.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _20.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Input;
                fromPartial(object: Partial<_20.Input>): _20.Input;
                fromAmino(object: _20.InputAmino): _20.Input;
                toAmino(message: _20.Input): _20.InputAmino;
                fromAminoMsg(object: _20.InputAminoMsg): _20.Input;
                toAminoMsg(message: _20.Input): _20.InputAminoMsg;
                fromProtoMsg(message: _20.InputProtoMsg): _20.Input;
                toProto(message: _20.Input): Uint8Array;
                toProtoMsg(message: _20.Input): _20.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _20.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Output;
                fromPartial(object: Partial<_20.Output>): _20.Output;
                fromAmino(object: _20.OutputAmino): _20.Output;
                toAmino(message: _20.Output): _20.OutputAmino;
                fromAminoMsg(object: _20.OutputAminoMsg): _20.Output;
                toAminoMsg(message: _20.Output): _20.OutputAminoMsg;
                fromProtoMsg(message: _20.OutputProtoMsg): _20.Output;
                toProto(message: _20.Output): Uint8Array;
                toProtoMsg(message: _20.Output): _20.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _20.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Supply;
                fromPartial(object: Partial<_20.Supply>): _20.Supply;
                fromAmino(object: _20.SupplyAmino): _20.Supply;
                toAmino(message: _20.Supply): _20.SupplyAmino;
                fromAminoMsg(object: _20.SupplyAminoMsg): _20.Supply;
                toAminoMsg(message: _20.Supply): _20.SupplyAminoMsg;
                fromProtoMsg(message: _20.SupplyProtoMsg): _20.Supply;
                toProto(message: _20.Supply): Uint8Array;
                toProtoMsg(message: _20.Supply): _20.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _20.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.DenomUnit;
                fromPartial(object: Partial<_20.DenomUnit>): _20.DenomUnit;
                fromAmino(object: _20.DenomUnitAmino): _20.DenomUnit;
                toAmino(message: _20.DenomUnit): _20.DenomUnitAmino;
                fromAminoMsg(object: _20.DenomUnitAminoMsg): _20.DenomUnit;
                toAminoMsg(message: _20.DenomUnit): _20.DenomUnitAminoMsg;
                fromProtoMsg(message: _20.DenomUnitProtoMsg): _20.DenomUnit;
                toProto(message: _20.DenomUnit): Uint8Array;
                toProtoMsg(message: _20.DenomUnit): _20.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _20.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Metadata;
                fromPartial(object: Partial<_20.Metadata>): _20.Metadata;
                fromAmino(object: _20.MetadataAmino): _20.Metadata;
                toAmino(message: _20.Metadata): _20.MetadataAmino;
                fromAminoMsg(object: _20.MetadataAminoMsg): _20.Metadata;
                toAminoMsg(message: _20.Metadata): _20.MetadataAminoMsg;
                fromProtoMsg(message: _20.MetadataProtoMsg): _20.Metadata;
                toProto(message: _20.Metadata): Uint8Array;
                toProtoMsg(message: _20.Metadata): _20.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _19.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.SendAuthorization;
                fromPartial(object: Partial<_19.SendAuthorization>): _19.SendAuthorization;
                fromAmino(object: _19.SendAuthorizationAmino): _19.SendAuthorization;
                toAmino(message: _19.SendAuthorization): _19.SendAuthorizationAmino;
                fromAminoMsg(object: _19.SendAuthorizationAminoMsg): _19.SendAuthorization;
                toAminoMsg(message: _19.SendAuthorization): _19.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _19.SendAuthorizationProtoMsg): _19.SendAuthorization;
                toProto(message: _19.SendAuthorization): Uint8Array;
                toProtoMsg(message: _19.SendAuthorization): _19.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _24.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.TxResponse;
                    fromPartial(object: Partial<_24.TxResponse>): _24.TxResponse;
                    fromAmino(object: _24.TxResponseAmino): _24.TxResponse;
                    toAmino(message: _24.TxResponse): _24.TxResponseAmino;
                    fromAminoMsg(object: _24.TxResponseAminoMsg): _24.TxResponse;
                    toAminoMsg(message: _24.TxResponse): _24.TxResponseAminoMsg;
                    fromProtoMsg(message: _24.TxResponseProtoMsg): _24.TxResponse;
                    toProto(message: _24.TxResponse): Uint8Array;
                    toProtoMsg(message: _24.TxResponse): _24.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _24.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.ABCIMessageLog;
                    fromPartial(object: Partial<_24.ABCIMessageLog>): _24.ABCIMessageLog;
                    fromAmino(object: _24.ABCIMessageLogAmino): _24.ABCIMessageLog;
                    toAmino(message: _24.ABCIMessageLog): _24.ABCIMessageLogAmino;
                    fromAminoMsg(object: _24.ABCIMessageLogAminoMsg): _24.ABCIMessageLog;
                    toAminoMsg(message: _24.ABCIMessageLog): _24.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _24.ABCIMessageLogProtoMsg): _24.ABCIMessageLog;
                    toProto(message: _24.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _24.ABCIMessageLog): _24.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _24.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.StringEvent;
                    fromPartial(object: Partial<_24.StringEvent>): _24.StringEvent;
                    fromAmino(object: _24.StringEventAmino): _24.StringEvent;
                    toAmino(message: _24.StringEvent): _24.StringEventAmino;
                    fromAminoMsg(object: _24.StringEventAminoMsg): _24.StringEvent;
                    toAminoMsg(message: _24.StringEvent): _24.StringEventAminoMsg;
                    fromProtoMsg(message: _24.StringEventProtoMsg): _24.StringEvent;
                    toProto(message: _24.StringEvent): Uint8Array;
                    toProtoMsg(message: _24.StringEvent): _24.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _24.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.Attribute;
                    fromPartial(object: Partial<_24.Attribute>): _24.Attribute;
                    fromAmino(object: _24.AttributeAmino): _24.Attribute;
                    toAmino(message: _24.Attribute): _24.AttributeAmino;
                    fromAminoMsg(object: _24.AttributeAminoMsg): _24.Attribute;
                    toAminoMsg(message: _24.Attribute): _24.AttributeAminoMsg;
                    fromProtoMsg(message: _24.AttributeProtoMsg): _24.Attribute;
                    toProto(message: _24.Attribute): Uint8Array;
                    toProtoMsg(message: _24.Attribute): _24.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _24.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.GasInfo;
                    fromPartial(object: Partial<_24.GasInfo>): _24.GasInfo;
                    fromAmino(object: _24.GasInfoAmino): _24.GasInfo;
                    toAmino(message: _24.GasInfo): _24.GasInfoAmino;
                    fromAminoMsg(object: _24.GasInfoAminoMsg): _24.GasInfo;
                    toAminoMsg(message: _24.GasInfo): _24.GasInfoAminoMsg;
                    fromProtoMsg(message: _24.GasInfoProtoMsg): _24.GasInfo;
                    toProto(message: _24.GasInfo): Uint8Array;
                    toProtoMsg(message: _24.GasInfo): _24.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _24.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.Result;
                    fromPartial(object: Partial<_24.Result>): _24.Result;
                    fromAmino(object: _24.ResultAmino): _24.Result;
                    toAmino(message: _24.Result): _24.ResultAmino;
                    fromAminoMsg(object: _24.ResultAminoMsg): _24.Result;
                    toAminoMsg(message: _24.Result): _24.ResultAminoMsg;
                    fromProtoMsg(message: _24.ResultProtoMsg): _24.Result;
                    toProto(message: _24.Result): Uint8Array;
                    toProtoMsg(message: _24.Result): _24.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _24.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.SimulationResponse;
                    fromPartial(object: Partial<_24.SimulationResponse>): _24.SimulationResponse;
                    fromAmino(object: _24.SimulationResponseAmino): _24.SimulationResponse;
                    toAmino(message: _24.SimulationResponse): _24.SimulationResponseAmino;
                    fromAminoMsg(object: _24.SimulationResponseAminoMsg): _24.SimulationResponse;
                    toAminoMsg(message: _24.SimulationResponse): _24.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _24.SimulationResponseProtoMsg): _24.SimulationResponse;
                    toProto(message: _24.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _24.SimulationResponse): _24.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _24.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.MsgData;
                    fromPartial(object: Partial<_24.MsgData>): _24.MsgData;
                    fromAmino(object: _24.MsgDataAmino): _24.MsgData;
                    toAmino(message: _24.MsgData): _24.MsgDataAmino;
                    fromAminoMsg(object: _24.MsgDataAminoMsg): _24.MsgData;
                    toAminoMsg(message: _24.MsgData): _24.MsgDataAminoMsg;
                    fromProtoMsg(message: _24.MsgDataProtoMsg): _24.MsgData;
                    toProto(message: _24.MsgData): Uint8Array;
                    toProtoMsg(message: _24.MsgData): _24.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _24.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.TxMsgData;
                    fromPartial(object: Partial<_24.TxMsgData>): _24.TxMsgData;
                    fromAmino(object: _24.TxMsgDataAmino): _24.TxMsgData;
                    toAmino(message: _24.TxMsgData): _24.TxMsgDataAmino;
                    fromAminoMsg(object: _24.TxMsgDataAminoMsg): _24.TxMsgData;
                    toAminoMsg(message: _24.TxMsgData): _24.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _24.TxMsgDataProtoMsg): _24.TxMsgData;
                    toProto(message: _24.TxMsgData): Uint8Array;
                    toProtoMsg(message: _24.TxMsgData): _24.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _24.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.SearchTxsResult;
                    fromPartial(object: Partial<_24.SearchTxsResult>): _24.SearchTxsResult;
                    fromAmino(object: _24.SearchTxsResultAmino): _24.SearchTxsResult;
                    toAmino(message: _24.SearchTxsResult): _24.SearchTxsResultAmino;
                    fromAminoMsg(object: _24.SearchTxsResultAminoMsg): _24.SearchTxsResult;
                    toAminoMsg(message: _24.SearchTxsResult): _24.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _24.SearchTxsResultProtoMsg): _24.SearchTxsResult;
                    toProto(message: _24.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _24.SearchTxsResult): _24.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _25.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.Pairs;
                    fromPartial(object: Partial<_25.Pairs>): _25.Pairs;
                    fromAmino(object: _25.PairsAmino): _25.Pairs;
                    toAmino(message: _25.Pairs): _25.PairsAmino;
                    fromAminoMsg(object: _25.PairsAminoMsg): _25.Pairs;
                    toAminoMsg(message: _25.Pairs): _25.PairsAminoMsg;
                    fromProtoMsg(message: _25.PairsProtoMsg): _25.Pairs;
                    toProto(message: _25.Pairs): Uint8Array;
                    toProtoMsg(message: _25.Pairs): _25.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _25.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.Pair;
                    fromPartial(object: Partial<_25.Pair>): _25.Pair;
                    fromAmino(object: _25.PairAmino): _25.Pair;
                    toAmino(message: _25.Pair): _25.PairAmino;
                    fromAminoMsg(object: _25.PairAminoMsg): _25.Pair;
                    toAminoMsg(message: _25.Pair): _25.PairAminoMsg;
                    fromProtoMsg(message: _25.PairProtoMsg): _25.Pair;
                    toProto(message: _25.Pair): Uint8Array;
                    toProtoMsg(message: _25.Pair): _25.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _192.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _26.ConfigRequest): Promise<_26.ConfigResponse>;
                };
                LCDQueryClient: typeof _173.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _26.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _26.ConfigRequest;
                    fromPartial(_: Partial<_26.ConfigRequest>): _26.ConfigRequest;
                    fromAmino(_: _26.ConfigRequestAmino): _26.ConfigRequest;
                    toAmino(_: _26.ConfigRequest): _26.ConfigRequestAmino;
                    fromAminoMsg(object: _26.ConfigRequestAminoMsg): _26.ConfigRequest;
                    toAminoMsg(message: _26.ConfigRequest): _26.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _26.ConfigRequestProtoMsg): _26.ConfigRequest;
                    toProto(message: _26.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _26.ConfigRequest): _26.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _26.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.ConfigResponse;
                    fromPartial(object: Partial<_26.ConfigResponse>): _26.ConfigResponse;
                    fromAmino(object: _26.ConfigResponseAmino): _26.ConfigResponse;
                    toAmino(message: _26.ConfigResponse): _26.ConfigResponseAmino;
                    fromAminoMsg(object: _26.ConfigResponseAminoMsg): _26.ConfigResponse;
                    toAminoMsg(message: _26.ConfigResponse): _26.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _26.ConfigResponseProtoMsg): _26.ConfigResponse;
                    toProto(message: _26.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _26.ConfigResponse): _26.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _27.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.PageRequest;
                    fromPartial(object: Partial<_27.PageRequest>): _27.PageRequest;
                    fromAmino(object: _27.PageRequestAmino): _27.PageRequest;
                    toAmino(message: _27.PageRequest): _27.PageRequestAmino;
                    fromAminoMsg(object: _27.PageRequestAminoMsg): _27.PageRequest;
                    toAminoMsg(message: _27.PageRequest): _27.PageRequestAminoMsg;
                    fromProtoMsg(message: _27.PageRequestProtoMsg): _27.PageRequest;
                    toProto(message: _27.PageRequest): Uint8Array;
                    toProtoMsg(message: _27.PageRequest): _27.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _27.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.PageResponse;
                    fromPartial(object: Partial<_27.PageResponse>): _27.PageResponse;
                    fromAmino(object: _27.PageResponseAmino): _27.PageResponse;
                    toAmino(message: _27.PageResponse): _27.PageResponseAmino;
                    fromAminoMsg(object: _27.PageResponseAminoMsg): _27.PageResponse;
                    toAminoMsg(message: _27.PageResponse): _27.PageResponseAminoMsg;
                    fromProtoMsg(message: _27.PageResponseProtoMsg): _27.PageResponse;
                    toProto(message: _27.PageResponse): Uint8Array;
                    toProtoMsg(message: _27.PageResponse): _27.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _28.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _28.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_28.ListAllInterfacesRequest>): _28.ListAllInterfacesRequest;
                    fromAmino(_: _28.ListAllInterfacesRequestAmino): _28.ListAllInterfacesRequest;
                    toAmino(_: _28.ListAllInterfacesRequest): _28.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _28.ListAllInterfacesRequestAminoMsg): _28.ListAllInterfacesRequest;
                    toAminoMsg(message: _28.ListAllInterfacesRequest): _28.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _28.ListAllInterfacesRequestProtoMsg): _28.ListAllInterfacesRequest;
                    toProto(message: _28.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _28.ListAllInterfacesRequest): _28.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _28.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_28.ListAllInterfacesResponse>): _28.ListAllInterfacesResponse;
                    fromAmino(object: _28.ListAllInterfacesResponseAmino): _28.ListAllInterfacesResponse;
                    toAmino(message: _28.ListAllInterfacesResponse): _28.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _28.ListAllInterfacesResponseAminoMsg): _28.ListAllInterfacesResponse;
                    toAminoMsg(message: _28.ListAllInterfacesResponse): _28.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _28.ListAllInterfacesResponseProtoMsg): _28.ListAllInterfacesResponse;
                    toProto(message: _28.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _28.ListAllInterfacesResponse): _28.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _28.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.ListImplementationsRequest;
                    fromPartial(object: Partial<_28.ListImplementationsRequest>): _28.ListImplementationsRequest;
                    fromAmino(object: _28.ListImplementationsRequestAmino): _28.ListImplementationsRequest;
                    toAmino(message: _28.ListImplementationsRequest): _28.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _28.ListImplementationsRequestAminoMsg): _28.ListImplementationsRequest;
                    toAminoMsg(message: _28.ListImplementationsRequest): _28.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _28.ListImplementationsRequestProtoMsg): _28.ListImplementationsRequest;
                    toProto(message: _28.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _28.ListImplementationsRequest): _28.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _28.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.ListImplementationsResponse;
                    fromPartial(object: Partial<_28.ListImplementationsResponse>): _28.ListImplementationsResponse;
                    fromAmino(object: _28.ListImplementationsResponseAmino): _28.ListImplementationsResponse;
                    toAmino(message: _28.ListImplementationsResponse): _28.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _28.ListImplementationsResponseAminoMsg): _28.ListImplementationsResponse;
                    toAminoMsg(message: _28.ListImplementationsResponse): _28.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _28.ListImplementationsResponseProtoMsg): _28.ListImplementationsResponse;
                    toProto(message: _28.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _28.ListImplementationsResponse): _28.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _29.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.AppDescriptor;
                    fromPartial(object: Partial<_29.AppDescriptor>): _29.AppDescriptor;
                    fromAmino(object: _29.AppDescriptorAmino): _29.AppDescriptor;
                    toAmino(message: _29.AppDescriptor): _29.AppDescriptorAmino;
                    fromAminoMsg(object: _29.AppDescriptorAminoMsg): _29.AppDescriptor;
                    toAminoMsg(message: _29.AppDescriptor): _29.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _29.AppDescriptorProtoMsg): _29.AppDescriptor;
                    toProto(message: _29.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _29.AppDescriptor): _29.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _29.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.TxDescriptor;
                    fromPartial(object: Partial<_29.TxDescriptor>): _29.TxDescriptor;
                    fromAmino(object: _29.TxDescriptorAmino): _29.TxDescriptor;
                    toAmino(message: _29.TxDescriptor): _29.TxDescriptorAmino;
                    fromAminoMsg(object: _29.TxDescriptorAminoMsg): _29.TxDescriptor;
                    toAminoMsg(message: _29.TxDescriptor): _29.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _29.TxDescriptorProtoMsg): _29.TxDescriptor;
                    toProto(message: _29.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _29.TxDescriptor): _29.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _29.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.AuthnDescriptor;
                    fromPartial(object: Partial<_29.AuthnDescriptor>): _29.AuthnDescriptor;
                    fromAmino(object: _29.AuthnDescriptorAmino): _29.AuthnDescriptor;
                    toAmino(message: _29.AuthnDescriptor): _29.AuthnDescriptorAmino;
                    fromAminoMsg(object: _29.AuthnDescriptorAminoMsg): _29.AuthnDescriptor;
                    toAminoMsg(message: _29.AuthnDescriptor): _29.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _29.AuthnDescriptorProtoMsg): _29.AuthnDescriptor;
                    toProto(message: _29.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _29.AuthnDescriptor): _29.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _29.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.SigningModeDescriptor;
                    fromPartial(object: Partial<_29.SigningModeDescriptor>): _29.SigningModeDescriptor;
                    fromAmino(object: _29.SigningModeDescriptorAmino): _29.SigningModeDescriptor;
                    toAmino(message: _29.SigningModeDescriptor): _29.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _29.SigningModeDescriptorAminoMsg): _29.SigningModeDescriptor;
                    toAminoMsg(message: _29.SigningModeDescriptor): _29.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _29.SigningModeDescriptorProtoMsg): _29.SigningModeDescriptor;
                    toProto(message: _29.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _29.SigningModeDescriptor): _29.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _29.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.ChainDescriptor;
                    fromPartial(object: Partial<_29.ChainDescriptor>): _29.ChainDescriptor;
                    fromAmino(object: _29.ChainDescriptorAmino): _29.ChainDescriptor;
                    toAmino(message: _29.ChainDescriptor): _29.ChainDescriptorAmino;
                    fromAminoMsg(object: _29.ChainDescriptorAminoMsg): _29.ChainDescriptor;
                    toAminoMsg(message: _29.ChainDescriptor): _29.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _29.ChainDescriptorProtoMsg): _29.ChainDescriptor;
                    toProto(message: _29.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _29.ChainDescriptor): _29.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _29.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.CodecDescriptor;
                    fromPartial(object: Partial<_29.CodecDescriptor>): _29.CodecDescriptor;
                    fromAmino(object: _29.CodecDescriptorAmino): _29.CodecDescriptor;
                    toAmino(message: _29.CodecDescriptor): _29.CodecDescriptorAmino;
                    fromAminoMsg(object: _29.CodecDescriptorAminoMsg): _29.CodecDescriptor;
                    toAminoMsg(message: _29.CodecDescriptor): _29.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _29.CodecDescriptorProtoMsg): _29.CodecDescriptor;
                    toProto(message: _29.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _29.CodecDescriptor): _29.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _29.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.InterfaceDescriptor;
                    fromPartial(object: Partial<_29.InterfaceDescriptor>): _29.InterfaceDescriptor;
                    fromAmino(object: _29.InterfaceDescriptorAmino): _29.InterfaceDescriptor;
                    toAmino(message: _29.InterfaceDescriptor): _29.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _29.InterfaceDescriptorAminoMsg): _29.InterfaceDescriptor;
                    toAminoMsg(message: _29.InterfaceDescriptor): _29.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _29.InterfaceDescriptorProtoMsg): _29.InterfaceDescriptor;
                    toProto(message: _29.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _29.InterfaceDescriptor): _29.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _29.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_29.InterfaceImplementerDescriptor>): _29.InterfaceImplementerDescriptor;
                    fromAmino(object: _29.InterfaceImplementerDescriptorAmino): _29.InterfaceImplementerDescriptor;
                    toAmino(message: _29.InterfaceImplementerDescriptor): _29.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _29.InterfaceImplementerDescriptorAminoMsg): _29.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _29.InterfaceImplementerDescriptor): _29.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _29.InterfaceImplementerDescriptorProtoMsg): _29.InterfaceImplementerDescriptor;
                    toProto(message: _29.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _29.InterfaceImplementerDescriptor): _29.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _29.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_29.InterfaceAcceptingMessageDescriptor>): _29.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _29.InterfaceAcceptingMessageDescriptorAmino): _29.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _29.InterfaceAcceptingMessageDescriptor): _29.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _29.InterfaceAcceptingMessageDescriptorAminoMsg): _29.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _29.InterfaceAcceptingMessageDescriptor): _29.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _29.InterfaceAcceptingMessageDescriptorProtoMsg): _29.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _29.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _29.InterfaceAcceptingMessageDescriptor): _29.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _29.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.ConfigurationDescriptor;
                    fromPartial(object: Partial<_29.ConfigurationDescriptor>): _29.ConfigurationDescriptor;
                    fromAmino(object: _29.ConfigurationDescriptorAmino): _29.ConfigurationDescriptor;
                    toAmino(message: _29.ConfigurationDescriptor): _29.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _29.ConfigurationDescriptorAminoMsg): _29.ConfigurationDescriptor;
                    toAminoMsg(message: _29.ConfigurationDescriptor): _29.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _29.ConfigurationDescriptorProtoMsg): _29.ConfigurationDescriptor;
                    toProto(message: _29.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _29.ConfigurationDescriptor): _29.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _29.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.MsgDescriptor;
                    fromPartial(object: Partial<_29.MsgDescriptor>): _29.MsgDescriptor;
                    fromAmino(object: _29.MsgDescriptorAmino): _29.MsgDescriptor;
                    toAmino(message: _29.MsgDescriptor): _29.MsgDescriptorAmino;
                    fromAminoMsg(object: _29.MsgDescriptorAminoMsg): _29.MsgDescriptor;
                    toAminoMsg(message: _29.MsgDescriptor): _29.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _29.MsgDescriptorProtoMsg): _29.MsgDescriptor;
                    toProto(message: _29.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _29.MsgDescriptor): _29.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _29.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _29.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_29.GetAuthnDescriptorRequest>): _29.GetAuthnDescriptorRequest;
                    fromAmino(_: _29.GetAuthnDescriptorRequestAmino): _29.GetAuthnDescriptorRequest;
                    toAmino(_: _29.GetAuthnDescriptorRequest): _29.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _29.GetAuthnDescriptorRequestAminoMsg): _29.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _29.GetAuthnDescriptorRequest): _29.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _29.GetAuthnDescriptorRequestProtoMsg): _29.GetAuthnDescriptorRequest;
                    toProto(message: _29.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _29.GetAuthnDescriptorRequest): _29.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _29.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_29.GetAuthnDescriptorResponse>): _29.GetAuthnDescriptorResponse;
                    fromAmino(object: _29.GetAuthnDescriptorResponseAmino): _29.GetAuthnDescriptorResponse;
                    toAmino(message: _29.GetAuthnDescriptorResponse): _29.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _29.GetAuthnDescriptorResponseAminoMsg): _29.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _29.GetAuthnDescriptorResponse): _29.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _29.GetAuthnDescriptorResponseProtoMsg): _29.GetAuthnDescriptorResponse;
                    toProto(message: _29.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _29.GetAuthnDescriptorResponse): _29.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _29.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _29.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_29.GetChainDescriptorRequest>): _29.GetChainDescriptorRequest;
                    fromAmino(_: _29.GetChainDescriptorRequestAmino): _29.GetChainDescriptorRequest;
                    toAmino(_: _29.GetChainDescriptorRequest): _29.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _29.GetChainDescriptorRequestAminoMsg): _29.GetChainDescriptorRequest;
                    toAminoMsg(message: _29.GetChainDescriptorRequest): _29.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _29.GetChainDescriptorRequestProtoMsg): _29.GetChainDescriptorRequest;
                    toProto(message: _29.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _29.GetChainDescriptorRequest): _29.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _29.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_29.GetChainDescriptorResponse>): _29.GetChainDescriptorResponse;
                    fromAmino(object: _29.GetChainDescriptorResponseAmino): _29.GetChainDescriptorResponse;
                    toAmino(message: _29.GetChainDescriptorResponse): _29.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _29.GetChainDescriptorResponseAminoMsg): _29.GetChainDescriptorResponse;
                    toAminoMsg(message: _29.GetChainDescriptorResponse): _29.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _29.GetChainDescriptorResponseProtoMsg): _29.GetChainDescriptorResponse;
                    toProto(message: _29.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _29.GetChainDescriptorResponse): _29.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _29.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _29.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_29.GetCodecDescriptorRequest>): _29.GetCodecDescriptorRequest;
                    fromAmino(_: _29.GetCodecDescriptorRequestAmino): _29.GetCodecDescriptorRequest;
                    toAmino(_: _29.GetCodecDescriptorRequest): _29.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _29.GetCodecDescriptorRequestAminoMsg): _29.GetCodecDescriptorRequest;
                    toAminoMsg(message: _29.GetCodecDescriptorRequest): _29.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _29.GetCodecDescriptorRequestProtoMsg): _29.GetCodecDescriptorRequest;
                    toProto(message: _29.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _29.GetCodecDescriptorRequest): _29.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _29.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_29.GetCodecDescriptorResponse>): _29.GetCodecDescriptorResponse;
                    fromAmino(object: _29.GetCodecDescriptorResponseAmino): _29.GetCodecDescriptorResponse;
                    toAmino(message: _29.GetCodecDescriptorResponse): _29.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _29.GetCodecDescriptorResponseAminoMsg): _29.GetCodecDescriptorResponse;
                    toAminoMsg(message: _29.GetCodecDescriptorResponse): _29.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _29.GetCodecDescriptorResponseProtoMsg): _29.GetCodecDescriptorResponse;
                    toProto(message: _29.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _29.GetCodecDescriptorResponse): _29.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _29.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _29.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_29.GetConfigurationDescriptorRequest>): _29.GetConfigurationDescriptorRequest;
                    fromAmino(_: _29.GetConfigurationDescriptorRequestAmino): _29.GetConfigurationDescriptorRequest;
                    toAmino(_: _29.GetConfigurationDescriptorRequest): _29.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _29.GetConfigurationDescriptorRequestAminoMsg): _29.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _29.GetConfigurationDescriptorRequest): _29.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _29.GetConfigurationDescriptorRequestProtoMsg): _29.GetConfigurationDescriptorRequest;
                    toProto(message: _29.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _29.GetConfigurationDescriptorRequest): _29.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _29.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_29.GetConfigurationDescriptorResponse>): _29.GetConfigurationDescriptorResponse;
                    fromAmino(object: _29.GetConfigurationDescriptorResponseAmino): _29.GetConfigurationDescriptorResponse;
                    toAmino(message: _29.GetConfigurationDescriptorResponse): _29.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _29.GetConfigurationDescriptorResponseAminoMsg): _29.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _29.GetConfigurationDescriptorResponse): _29.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _29.GetConfigurationDescriptorResponseProtoMsg): _29.GetConfigurationDescriptorResponse;
                    toProto(message: _29.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _29.GetConfigurationDescriptorResponse): _29.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _29.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _29.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_29.GetQueryServicesDescriptorRequest>): _29.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _29.GetQueryServicesDescriptorRequestAmino): _29.GetQueryServicesDescriptorRequest;
                    toAmino(_: _29.GetQueryServicesDescriptorRequest): _29.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _29.GetQueryServicesDescriptorRequestAminoMsg): _29.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _29.GetQueryServicesDescriptorRequest): _29.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _29.GetQueryServicesDescriptorRequestProtoMsg): _29.GetQueryServicesDescriptorRequest;
                    toProto(message: _29.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _29.GetQueryServicesDescriptorRequest): _29.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _29.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_29.GetQueryServicesDescriptorResponse>): _29.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _29.GetQueryServicesDescriptorResponseAmino): _29.GetQueryServicesDescriptorResponse;
                    toAmino(message: _29.GetQueryServicesDescriptorResponse): _29.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _29.GetQueryServicesDescriptorResponseAminoMsg): _29.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _29.GetQueryServicesDescriptorResponse): _29.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _29.GetQueryServicesDescriptorResponseProtoMsg): _29.GetQueryServicesDescriptorResponse;
                    toProto(message: _29.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _29.GetQueryServicesDescriptorResponse): _29.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _29.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _29.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_29.GetTxDescriptorRequest>): _29.GetTxDescriptorRequest;
                    fromAmino(_: _29.GetTxDescriptorRequestAmino): _29.GetTxDescriptorRequest;
                    toAmino(_: _29.GetTxDescriptorRequest): _29.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _29.GetTxDescriptorRequestAminoMsg): _29.GetTxDescriptorRequest;
                    toAminoMsg(message: _29.GetTxDescriptorRequest): _29.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _29.GetTxDescriptorRequestProtoMsg): _29.GetTxDescriptorRequest;
                    toProto(message: _29.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _29.GetTxDescriptorRequest): _29.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _29.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_29.GetTxDescriptorResponse>): _29.GetTxDescriptorResponse;
                    fromAmino(object: _29.GetTxDescriptorResponseAmino): _29.GetTxDescriptorResponse;
                    toAmino(message: _29.GetTxDescriptorResponse): _29.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _29.GetTxDescriptorResponseAminoMsg): _29.GetTxDescriptorResponse;
                    toAminoMsg(message: _29.GetTxDescriptorResponse): _29.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _29.GetTxDescriptorResponseProtoMsg): _29.GetTxDescriptorResponse;
                    toProto(message: _29.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _29.GetTxDescriptorResponse): _29.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _29.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.QueryServicesDescriptor;
                    fromPartial(object: Partial<_29.QueryServicesDescriptor>): _29.QueryServicesDescriptor;
                    fromAmino(object: _29.QueryServicesDescriptorAmino): _29.QueryServicesDescriptor;
                    toAmino(message: _29.QueryServicesDescriptor): _29.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _29.QueryServicesDescriptorAminoMsg): _29.QueryServicesDescriptor;
                    toAminoMsg(message: _29.QueryServicesDescriptor): _29.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _29.QueryServicesDescriptorProtoMsg): _29.QueryServicesDescriptor;
                    toProto(message: _29.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _29.QueryServicesDescriptor): _29.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _29.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.QueryServiceDescriptor;
                    fromPartial(object: Partial<_29.QueryServiceDescriptor>): _29.QueryServiceDescriptor;
                    fromAmino(object: _29.QueryServiceDescriptorAmino): _29.QueryServiceDescriptor;
                    toAmino(message: _29.QueryServiceDescriptor): _29.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _29.QueryServiceDescriptorAminoMsg): _29.QueryServiceDescriptor;
                    toAminoMsg(message: _29.QueryServiceDescriptor): _29.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _29.QueryServiceDescriptorProtoMsg): _29.QueryServiceDescriptor;
                    toProto(message: _29.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _29.QueryServiceDescriptor): _29.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _29.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.QueryMethodDescriptor;
                    fromPartial(object: Partial<_29.QueryMethodDescriptor>): _29.QueryMethodDescriptor;
                    fromAmino(object: _29.QueryMethodDescriptorAmino): _29.QueryMethodDescriptor;
                    toAmino(message: _29.QueryMethodDescriptor): _29.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _29.QueryMethodDescriptorAminoMsg): _29.QueryMethodDescriptor;
                    toAminoMsg(message: _29.QueryMethodDescriptor): _29.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _29.QueryMethodDescriptorProtoMsg): _29.QueryMethodDescriptor;
                    toProto(message: _29.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _29.QueryMethodDescriptor): _29.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _30.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.Snapshot;
                    fromPartial(object: Partial<_30.Snapshot>): _30.Snapshot;
                    fromAmino(object: _30.SnapshotAmino): _30.Snapshot;
                    toAmino(message: _30.Snapshot): _30.SnapshotAmino;
                    fromAminoMsg(object: _30.SnapshotAminoMsg): _30.Snapshot;
                    toAminoMsg(message: _30.Snapshot): _30.SnapshotAminoMsg;
                    fromProtoMsg(message: _30.SnapshotProtoMsg): _30.Snapshot;
                    toProto(message: _30.Snapshot): Uint8Array;
                    toProtoMsg(message: _30.Snapshot): _30.SnapshotProtoMsg;
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
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _30.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.SnapshotItem;
                    fromPartial(object: Partial<_30.SnapshotItem>): _30.SnapshotItem;
                    fromAmino(object: _30.SnapshotItemAmino): _30.SnapshotItem;
                    toAmino(message: _30.SnapshotItem): _30.SnapshotItemAmino;
                    fromAminoMsg(object: _30.SnapshotItemAminoMsg): _30.SnapshotItem;
                    toAminoMsg(message: _30.SnapshotItem): _30.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _30.SnapshotItemProtoMsg): _30.SnapshotItem;
                    toProto(message: _30.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _30.SnapshotItem): _30.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _30.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.SnapshotStoreItem;
                    fromPartial(object: Partial<_30.SnapshotStoreItem>): _30.SnapshotStoreItem;
                    fromAmino(object: _30.SnapshotStoreItemAmino): _30.SnapshotStoreItem;
                    toAmino(message: _30.SnapshotStoreItem): _30.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _30.SnapshotStoreItemAminoMsg): _30.SnapshotStoreItem;
                    toAminoMsg(message: _30.SnapshotStoreItem): _30.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _30.SnapshotStoreItemProtoMsg): _30.SnapshotStoreItem;
                    toProto(message: _30.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _30.SnapshotStoreItem): _30.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _30.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.SnapshotIAVLItem;
                    fromPartial(object: Partial<_30.SnapshotIAVLItem>): _30.SnapshotIAVLItem;
                    fromAmino(object: _30.SnapshotIAVLItemAmino): _30.SnapshotIAVLItem;
                    toAmino(message: _30.SnapshotIAVLItem): _30.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _30.SnapshotIAVLItemAminoMsg): _30.SnapshotIAVLItem;
                    toAminoMsg(message: _30.SnapshotIAVLItem): _30.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _30.SnapshotIAVLItemProtoMsg): _30.SnapshotIAVLItem;
                    toProto(message: _30.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _30.SnapshotIAVLItem): _30.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _30.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_30.SnapshotExtensionMeta>): _30.SnapshotExtensionMeta;
                    fromAmino(object: _30.SnapshotExtensionMetaAmino): _30.SnapshotExtensionMeta;
                    toAmino(message: _30.SnapshotExtensionMeta): _30.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _30.SnapshotExtensionMetaAminoMsg): _30.SnapshotExtensionMeta;
                    toAminoMsg(message: _30.SnapshotExtensionMeta): _30.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _30.SnapshotExtensionMetaProtoMsg): _30.SnapshotExtensionMeta;
                    toProto(message: _30.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _30.SnapshotExtensionMeta): _30.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _30.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_30.SnapshotExtensionPayload>): _30.SnapshotExtensionPayload;
                    fromAmino(object: _30.SnapshotExtensionPayloadAmino): _30.SnapshotExtensionPayload;
                    toAmino(message: _30.SnapshotExtensionPayload): _30.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _30.SnapshotExtensionPayloadAminoMsg): _30.SnapshotExtensionPayload;
                    toAminoMsg(message: _30.SnapshotExtensionPayload): _30.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _30.SnapshotExtensionPayloadProtoMsg): _30.SnapshotExtensionPayload;
                    toProto(message: _30.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _30.SnapshotExtensionPayload): _30.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _30.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.SnapshotKVItem;
                    fromPartial(object: Partial<_30.SnapshotKVItem>): _30.SnapshotKVItem;
                    fromAmino(object: _30.SnapshotKVItemAmino): _30.SnapshotKVItem;
                    toAmino(message: _30.SnapshotKVItem): _30.SnapshotKVItemAmino;
                    fromAminoMsg(object: _30.SnapshotKVItemAminoMsg): _30.SnapshotKVItem;
                    toAminoMsg(message: _30.SnapshotKVItem): _30.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _30.SnapshotKVItemProtoMsg): _30.SnapshotKVItem;
                    toProto(message: _30.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _30.SnapshotKVItem): _30.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _30.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.SnapshotSchema;
                    fromPartial(object: Partial<_30.SnapshotSchema>): _30.SnapshotSchema;
                    fromAmino(object: _30.SnapshotSchemaAmino): _30.SnapshotSchema;
                    toAmino(message: _30.SnapshotSchema): _30.SnapshotSchemaAmino;
                    fromAminoMsg(object: _30.SnapshotSchemaAminoMsg): _30.SnapshotSchema;
                    toAminoMsg(message: _30.SnapshotSchema): _30.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _30.SnapshotSchemaProtoMsg): _30.SnapshotSchema;
                    toProto(message: _30.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _30.SnapshotSchema): _30.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _32.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.StoreKVPair;
                    fromPartial(object: Partial<_32.StoreKVPair>): _32.StoreKVPair;
                    fromAmino(object: _32.StoreKVPairAmino): _32.StoreKVPair;
                    toAmino(message: _32.StoreKVPair): _32.StoreKVPairAmino;
                    fromAminoMsg(object: _32.StoreKVPairAminoMsg): _32.StoreKVPair;
                    toAminoMsg(message: _32.StoreKVPair): _32.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _32.StoreKVPairProtoMsg): _32.StoreKVPair;
                    toProto(message: _32.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _32.StoreKVPair): _32.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _32.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.BlockMetadata;
                    fromPartial(object: Partial<_32.BlockMetadata>): _32.BlockMetadata;
                    fromAmino(object: _32.BlockMetadataAmino): _32.BlockMetadata;
                    toAmino(message: _32.BlockMetadata): _32.BlockMetadataAmino;
                    fromAminoMsg(object: _32.BlockMetadataAminoMsg): _32.BlockMetadata;
                    toAminoMsg(message: _32.BlockMetadata): _32.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _32.BlockMetadataProtoMsg): _32.BlockMetadata;
                    toProto(message: _32.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _32.BlockMetadata): _32.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _32.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_32.BlockMetadata_DeliverTx>): _32.BlockMetadata_DeliverTx;
                    fromAmino(object: _32.BlockMetadata_DeliverTxAmino): _32.BlockMetadata_DeliverTx;
                    toAmino(message: _32.BlockMetadata_DeliverTx): _32.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _32.BlockMetadata_DeliverTxAminoMsg): _32.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _32.BlockMetadata_DeliverTx): _32.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _32.BlockMetadata_DeliverTxProtoMsg): _32.BlockMetadata_DeliverTx;
                    toProto(message: _32.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _32.BlockMetadata_DeliverTx): _32.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _31.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.CommitInfo;
                    fromPartial(object: Partial<_31.CommitInfo>): _31.CommitInfo;
                    fromAmino(object: _31.CommitInfoAmino): _31.CommitInfo;
                    toAmino(message: _31.CommitInfo): _31.CommitInfoAmino;
                    fromAminoMsg(object: _31.CommitInfoAminoMsg): _31.CommitInfo;
                    toAminoMsg(message: _31.CommitInfo): _31.CommitInfoAminoMsg;
                    fromProtoMsg(message: _31.CommitInfoProtoMsg): _31.CommitInfo;
                    toProto(message: _31.CommitInfo): Uint8Array;
                    toProtoMsg(message: _31.CommitInfo): _31.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _31.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.StoreInfo;
                    fromPartial(object: Partial<_31.StoreInfo>): _31.StoreInfo;
                    fromAmino(object: _31.StoreInfoAmino): _31.StoreInfo;
                    toAmino(message: _31.StoreInfo): _31.StoreInfoAmino;
                    fromAminoMsg(object: _31.StoreInfoAminoMsg): _31.StoreInfo;
                    toAminoMsg(message: _31.StoreInfo): _31.StoreInfoAminoMsg;
                    fromProtoMsg(message: _31.StoreInfoProtoMsg): _31.StoreInfo;
                    toProto(message: _31.StoreInfo): Uint8Array;
                    toProtoMsg(message: _31.StoreInfo): _31.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _31.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.CommitID;
                    fromPartial(object: Partial<_31.CommitID>): _31.CommitID;
                    fromAmino(object: _31.CommitIDAmino): _31.CommitID;
                    toAmino(message: _31.CommitID): _31.CommitIDAmino;
                    fromAminoMsg(object: _31.CommitIDAminoMsg): _31.CommitID;
                    toAminoMsg(message: _31.CommitID): _31.CommitIDAminoMsg;
                    fromProtoMsg(message: _31.CommitIDProtoMsg): _31.CommitID;
                    toProto(message: _31.CommitID): Uint8Array;
                    toProtoMsg(message: _31.CommitID): _31.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _193.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _33.GetNodeInfoRequest): Promise<_33.GetNodeInfoResponse>;
                    getSyncing(request?: _33.GetSyncingRequest): Promise<_33.GetSyncingResponse>;
                    getLatestBlock(request?: _33.GetLatestBlockRequest): Promise<_33.GetLatestBlockResponse>;
                    getBlockByHeight(request: _33.GetBlockByHeightRequest): Promise<_33.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _33.GetLatestValidatorSetRequest): Promise<_33.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _33.GetValidatorSetByHeightRequest): Promise<_33.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _33.ABCIQueryRequest): Promise<_33.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _174.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _34.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.Block;
                    fromPartial(object: Partial<_34.Block>): _34.Block;
                    fromAmino(object: _34.BlockAmino): _34.Block;
                    toAmino(message: _34.Block): _34.BlockAmino;
                    fromAminoMsg(object: _34.BlockAminoMsg): _34.Block;
                    toAminoMsg(message: _34.Block): _34.BlockAminoMsg;
                    fromProtoMsg(message: _34.BlockProtoMsg): _34.Block;
                    toProto(message: _34.Block): Uint8Array;
                    toProtoMsg(message: _34.Block): _34.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _34.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.Header;
                    fromPartial(object: Partial<_34.Header>): _34.Header;
                    fromAmino(object: _34.HeaderAmino): _34.Header;
                    toAmino(message: _34.Header): _34.HeaderAmino;
                    fromAminoMsg(object: _34.HeaderAminoMsg): _34.Header;
                    toAminoMsg(message: _34.Header): _34.HeaderAminoMsg;
                    fromProtoMsg(message: _34.HeaderProtoMsg): _34.Header;
                    toProto(message: _34.Header): Uint8Array;
                    toProtoMsg(message: _34.Header): _34.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _33.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_33.GetValidatorSetByHeightRequest>): _33.GetValidatorSetByHeightRequest;
                    fromAmino(object: _33.GetValidatorSetByHeightRequestAmino): _33.GetValidatorSetByHeightRequest;
                    toAmino(message: _33.GetValidatorSetByHeightRequest): _33.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _33.GetValidatorSetByHeightRequestAminoMsg): _33.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _33.GetValidatorSetByHeightRequest): _33.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _33.GetValidatorSetByHeightRequestProtoMsg): _33.GetValidatorSetByHeightRequest;
                    toProto(message: _33.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _33.GetValidatorSetByHeightRequest): _33.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _33.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_33.GetValidatorSetByHeightResponse>): _33.GetValidatorSetByHeightResponse;
                    fromAmino(object: _33.GetValidatorSetByHeightResponseAmino): _33.GetValidatorSetByHeightResponse;
                    toAmino(message: _33.GetValidatorSetByHeightResponse): _33.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _33.GetValidatorSetByHeightResponseAminoMsg): _33.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _33.GetValidatorSetByHeightResponse): _33.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _33.GetValidatorSetByHeightResponseProtoMsg): _33.GetValidatorSetByHeightResponse;
                    toProto(message: _33.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _33.GetValidatorSetByHeightResponse): _33.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _33.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_33.GetLatestValidatorSetRequest>): _33.GetLatestValidatorSetRequest;
                    fromAmino(object: _33.GetLatestValidatorSetRequestAmino): _33.GetLatestValidatorSetRequest;
                    toAmino(message: _33.GetLatestValidatorSetRequest): _33.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _33.GetLatestValidatorSetRequestAminoMsg): _33.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _33.GetLatestValidatorSetRequest): _33.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _33.GetLatestValidatorSetRequestProtoMsg): _33.GetLatestValidatorSetRequest;
                    toProto(message: _33.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _33.GetLatestValidatorSetRequest): _33.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _33.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_33.GetLatestValidatorSetResponse>): _33.GetLatestValidatorSetResponse;
                    fromAmino(object: _33.GetLatestValidatorSetResponseAmino): _33.GetLatestValidatorSetResponse;
                    toAmino(message: _33.GetLatestValidatorSetResponse): _33.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _33.GetLatestValidatorSetResponseAminoMsg): _33.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _33.GetLatestValidatorSetResponse): _33.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _33.GetLatestValidatorSetResponseProtoMsg): _33.GetLatestValidatorSetResponse;
                    toProto(message: _33.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _33.GetLatestValidatorSetResponse): _33.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _33.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.Validator;
                    fromPartial(object: Partial<_33.Validator>): _33.Validator;
                    fromAmino(object: _33.ValidatorAmino): _33.Validator;
                    toAmino(message: _33.Validator): _33.ValidatorAmino;
                    fromAminoMsg(object: _33.ValidatorAminoMsg): _33.Validator;
                    toAminoMsg(message: _33.Validator): _33.ValidatorAminoMsg;
                    fromProtoMsg(message: _33.ValidatorProtoMsg): _33.Validator;
                    toProto(message: _33.Validator): Uint8Array;
                    toProtoMsg(message: _33.Validator): _33.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _33.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_33.GetBlockByHeightRequest>): _33.GetBlockByHeightRequest;
                    fromAmino(object: _33.GetBlockByHeightRequestAmino): _33.GetBlockByHeightRequest;
                    toAmino(message: _33.GetBlockByHeightRequest): _33.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _33.GetBlockByHeightRequestAminoMsg): _33.GetBlockByHeightRequest;
                    toAminoMsg(message: _33.GetBlockByHeightRequest): _33.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _33.GetBlockByHeightRequestProtoMsg): _33.GetBlockByHeightRequest;
                    toProto(message: _33.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _33.GetBlockByHeightRequest): _33.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _33.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_33.GetBlockByHeightResponse>): _33.GetBlockByHeightResponse;
                    fromAmino(object: _33.GetBlockByHeightResponseAmino): _33.GetBlockByHeightResponse;
                    toAmino(message: _33.GetBlockByHeightResponse): _33.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _33.GetBlockByHeightResponseAminoMsg): _33.GetBlockByHeightResponse;
                    toAminoMsg(message: _33.GetBlockByHeightResponse): _33.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _33.GetBlockByHeightResponseProtoMsg): _33.GetBlockByHeightResponse;
                    toProto(message: _33.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _33.GetBlockByHeightResponse): _33.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _33.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _33.GetLatestBlockRequest;
                    fromPartial(_: Partial<_33.GetLatestBlockRequest>): _33.GetLatestBlockRequest;
                    fromAmino(_: _33.GetLatestBlockRequestAmino): _33.GetLatestBlockRequest;
                    toAmino(_: _33.GetLatestBlockRequest): _33.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _33.GetLatestBlockRequestAminoMsg): _33.GetLatestBlockRequest;
                    toAminoMsg(message: _33.GetLatestBlockRequest): _33.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _33.GetLatestBlockRequestProtoMsg): _33.GetLatestBlockRequest;
                    toProto(message: _33.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _33.GetLatestBlockRequest): _33.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _33.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetLatestBlockResponse;
                    fromPartial(object: Partial<_33.GetLatestBlockResponse>): _33.GetLatestBlockResponse;
                    fromAmino(object: _33.GetLatestBlockResponseAmino): _33.GetLatestBlockResponse;
                    toAmino(message: _33.GetLatestBlockResponse): _33.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _33.GetLatestBlockResponseAminoMsg): _33.GetLatestBlockResponse;
                    toAminoMsg(message: _33.GetLatestBlockResponse): _33.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _33.GetLatestBlockResponseProtoMsg): _33.GetLatestBlockResponse;
                    toProto(message: _33.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _33.GetLatestBlockResponse): _33.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _33.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _33.GetSyncingRequest;
                    fromPartial(_: Partial<_33.GetSyncingRequest>): _33.GetSyncingRequest;
                    fromAmino(_: _33.GetSyncingRequestAmino): _33.GetSyncingRequest;
                    toAmino(_: _33.GetSyncingRequest): _33.GetSyncingRequestAmino;
                    fromAminoMsg(object: _33.GetSyncingRequestAminoMsg): _33.GetSyncingRequest;
                    toAminoMsg(message: _33.GetSyncingRequest): _33.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _33.GetSyncingRequestProtoMsg): _33.GetSyncingRequest;
                    toProto(message: _33.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _33.GetSyncingRequest): _33.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _33.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetSyncingResponse;
                    fromPartial(object: Partial<_33.GetSyncingResponse>): _33.GetSyncingResponse;
                    fromAmino(object: _33.GetSyncingResponseAmino): _33.GetSyncingResponse;
                    toAmino(message: _33.GetSyncingResponse): _33.GetSyncingResponseAmino;
                    fromAminoMsg(object: _33.GetSyncingResponseAminoMsg): _33.GetSyncingResponse;
                    toAminoMsg(message: _33.GetSyncingResponse): _33.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _33.GetSyncingResponseProtoMsg): _33.GetSyncingResponse;
                    toProto(message: _33.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _33.GetSyncingResponse): _33.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _33.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _33.GetNodeInfoRequest;
                    fromPartial(_: Partial<_33.GetNodeInfoRequest>): _33.GetNodeInfoRequest;
                    fromAmino(_: _33.GetNodeInfoRequestAmino): _33.GetNodeInfoRequest;
                    toAmino(_: _33.GetNodeInfoRequest): _33.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _33.GetNodeInfoRequestAminoMsg): _33.GetNodeInfoRequest;
                    toAminoMsg(message: _33.GetNodeInfoRequest): _33.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _33.GetNodeInfoRequestProtoMsg): _33.GetNodeInfoRequest;
                    toProto(message: _33.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _33.GetNodeInfoRequest): _33.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _33.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetNodeInfoResponse;
                    fromPartial(object: Partial<_33.GetNodeInfoResponse>): _33.GetNodeInfoResponse;
                    fromAmino(object: _33.GetNodeInfoResponseAmino): _33.GetNodeInfoResponse;
                    toAmino(message: _33.GetNodeInfoResponse): _33.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _33.GetNodeInfoResponseAminoMsg): _33.GetNodeInfoResponse;
                    toAminoMsg(message: _33.GetNodeInfoResponse): _33.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _33.GetNodeInfoResponseProtoMsg): _33.GetNodeInfoResponse;
                    toProto(message: _33.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _33.GetNodeInfoResponse): _33.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _33.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.VersionInfo;
                    fromPartial(object: Partial<_33.VersionInfo>): _33.VersionInfo;
                    fromAmino(object: _33.VersionInfoAmino): _33.VersionInfo;
                    toAmino(message: _33.VersionInfo): _33.VersionInfoAmino;
                    fromAminoMsg(object: _33.VersionInfoAminoMsg): _33.VersionInfo;
                    toAminoMsg(message: _33.VersionInfo): _33.VersionInfoAminoMsg;
                    fromProtoMsg(message: _33.VersionInfoProtoMsg): _33.VersionInfo;
                    toProto(message: _33.VersionInfo): Uint8Array;
                    toProtoMsg(message: _33.VersionInfo): _33.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _33.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.Module;
                    fromPartial(object: Partial<_33.Module>): _33.Module;
                    fromAmino(object: _33.ModuleAmino): _33.Module;
                    toAmino(message: _33.Module): _33.ModuleAmino;
                    fromAminoMsg(object: _33.ModuleAminoMsg): _33.Module;
                    toAminoMsg(message: _33.Module): _33.ModuleAminoMsg;
                    fromProtoMsg(message: _33.ModuleProtoMsg): _33.Module;
                    toProto(message: _33.Module): Uint8Array;
                    toProtoMsg(message: _33.Module): _33.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _33.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.ABCIQueryRequest;
                    fromPartial(object: Partial<_33.ABCIQueryRequest>): _33.ABCIQueryRequest;
                    fromAmino(object: _33.ABCIQueryRequestAmino): _33.ABCIQueryRequest;
                    toAmino(message: _33.ABCIQueryRequest): _33.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _33.ABCIQueryRequestAminoMsg): _33.ABCIQueryRequest;
                    toAminoMsg(message: _33.ABCIQueryRequest): _33.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _33.ABCIQueryRequestProtoMsg): _33.ABCIQueryRequest;
                    toProto(message: _33.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _33.ABCIQueryRequest): _33.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _33.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.ABCIQueryResponse;
                    fromPartial(object: Partial<_33.ABCIQueryResponse>): _33.ABCIQueryResponse;
                    fromAmino(object: _33.ABCIQueryResponseAmino): _33.ABCIQueryResponse;
                    toAmino(message: _33.ABCIQueryResponse): _33.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _33.ABCIQueryResponseAminoMsg): _33.ABCIQueryResponse;
                    toAminoMsg(message: _33.ABCIQueryResponse): _33.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _33.ABCIQueryResponseProtoMsg): _33.ABCIQueryResponse;
                    toProto(message: _33.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _33.ABCIQueryResponse): _33.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _33.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.ProofOp;
                    fromPartial(object: Partial<_33.ProofOp>): _33.ProofOp;
                    fromAmino(object: _33.ProofOpAmino): _33.ProofOp;
                    toAmino(message: _33.ProofOp): _33.ProofOpAmino;
                    fromAminoMsg(object: _33.ProofOpAminoMsg): _33.ProofOp;
                    toAminoMsg(message: _33.ProofOp): _33.ProofOpAminoMsg;
                    fromProtoMsg(message: _33.ProofOpProtoMsg): _33.ProofOp;
                    toProto(message: _33.ProofOp): Uint8Array;
                    toProtoMsg(message: _33.ProofOp): _33.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _33.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.ProofOps;
                    fromPartial(object: Partial<_33.ProofOps>): _33.ProofOps;
                    fromAmino(object: _33.ProofOpsAmino): _33.ProofOps;
                    toAmino(message: _33.ProofOps): _33.ProofOpsAmino;
                    fromAminoMsg(object: _33.ProofOpsAminoMsg): _33.ProofOps;
                    toAminoMsg(message: _33.ProofOps): _33.ProofOpsAminoMsg;
                    fromProtoMsg(message: _33.ProofOpsProtoMsg): _33.ProofOps;
                    toProto(message: _33.ProofOps): Uint8Array;
                    toProtoMsg(message: _33.ProofOps): _33.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _35.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.Coin;
                fromPartial(object: Partial<_35.Coin>): _35.Coin;
                fromAmino(object: _35.CoinAmino): _35.Coin;
                toAmino(message: _35.Coin): _35.CoinAmino;
                fromAminoMsg(object: _35.CoinAminoMsg): _35.Coin;
                toAminoMsg(message: _35.Coin): _35.CoinAminoMsg;
                fromProtoMsg(message: _35.CoinProtoMsg): _35.Coin;
                toProto(message: _35.Coin): Uint8Array;
                toProtoMsg(message: _35.Coin): _35.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _35.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.DecCoin;
                fromPartial(object: Partial<_35.DecCoin>): _35.DecCoin;
                fromAmino(object: _35.DecCoinAmino): _35.DecCoin;
                toAmino(message: _35.DecCoin): _35.DecCoinAmino;
                fromAminoMsg(object: _35.DecCoinAminoMsg): _35.DecCoin;
                toAminoMsg(message: _35.DecCoin): _35.DecCoinAminoMsg;
                fromProtoMsg(message: _35.DecCoinProtoMsg): _35.DecCoin;
                toProto(message: _35.DecCoin): Uint8Array;
                toProtoMsg(message: _35.DecCoin): _35.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _35.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.IntProto;
                fromPartial(object: Partial<_35.IntProto>): _35.IntProto;
                fromAmino(object: _35.IntProtoAmino): _35.IntProto;
                toAmino(message: _35.IntProto): _35.IntProtoAmino;
                fromAminoMsg(object: _35.IntProtoAminoMsg): _35.IntProto;
                toAminoMsg(message: _35.IntProto): _35.IntProtoAminoMsg;
                fromProtoMsg(message: _35.IntProtoProtoMsg): _35.IntProto;
                toProto(message: _35.IntProto): Uint8Array;
                toProtoMsg(message: _35.IntProto): _35.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _35.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.DecProto;
                fromPartial(object: Partial<_35.DecProto>): _35.DecProto;
                fromAmino(object: _35.DecProtoAmino): _35.DecProto;
                toAmino(message: _35.DecProto): _35.DecProtoAmino;
                fromAminoMsg(object: _35.DecProtoAminoMsg): _35.DecProto;
                toAminoMsg(message: _35.DecProto): _35.DecProtoAminoMsg;
                fromProtoMsg(message: _35.DecProtoProtoMsg): _35.DecProto;
                toProto(message: _35.DecProto): Uint8Array;
                toProtoMsg(message: _35.DecProto): _35.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _37.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.GenesisOwners;
                fromPartial(object: Partial<_37.GenesisOwners>): _37.GenesisOwners;
                fromAmino(object: _37.GenesisOwnersAmino): _37.GenesisOwners;
                toAmino(message: _37.GenesisOwners): _37.GenesisOwnersAmino;
                fromAminoMsg(object: _37.GenesisOwnersAminoMsg): _37.GenesisOwners;
                toAminoMsg(message: _37.GenesisOwners): _37.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _37.GenesisOwnersProtoMsg): _37.GenesisOwners;
                toProto(message: _37.GenesisOwners): Uint8Array;
                toProtoMsg(message: _37.GenesisOwners): _37.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _36.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.Capability;
                fromPartial(object: Partial<_36.Capability>): _36.Capability;
                fromAmino(object: _36.CapabilityAmino): _36.Capability;
                toAmino(message: _36.Capability): _36.CapabilityAmino;
                fromAminoMsg(object: _36.CapabilityAminoMsg): _36.Capability;
                toAminoMsg(message: _36.Capability): _36.CapabilityAminoMsg;
                fromProtoMsg(message: _36.CapabilityProtoMsg): _36.Capability;
                toProto(message: _36.Capability): Uint8Array;
                toProtoMsg(message: _36.Capability): _36.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _36.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.Owner;
                fromPartial(object: Partial<_36.Owner>): _36.Owner;
                fromAmino(object: _36.OwnerAmino): _36.Owner;
                toAmino(message: _36.Owner): _36.OwnerAmino;
                fromAminoMsg(object: _36.OwnerAminoMsg): _36.Owner;
                toAminoMsg(message: _36.Owner): _36.OwnerAminoMsg;
                fromProtoMsg(message: _36.OwnerProtoMsg): _36.Owner;
                toProto(message: _36.Owner): Uint8Array;
                toProtoMsg(message: _36.Owner): _36.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _36.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.CapabilityOwners;
                fromPartial(object: Partial<_36.CapabilityOwners>): _36.CapabilityOwners;
                fromAmino(object: _36.CapabilityOwnersAmino): _36.CapabilityOwners;
                toAmino(message: _36.CapabilityOwners): _36.CapabilityOwnersAmino;
                fromAminoMsg(object: _36.CapabilityOwnersAminoMsg): _36.CapabilityOwners;
                toAminoMsg(message: _36.CapabilityOwners): _36.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _36.CapabilityOwnersProtoMsg): _36.CapabilityOwners;
                toProto(message: _36.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _36.CapabilityOwners): _36.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _209.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _39.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _39.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _39.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _39.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _39.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _39.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _39.MsgVerifyInvariant) => _39.MsgVerifyInvariantAmino;
                    fromAmino: (object: _39.MsgVerifyInvariantAmino) => _39.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _39.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.MsgVerifyInvariant;
                fromPartial(object: Partial<_39.MsgVerifyInvariant>): _39.MsgVerifyInvariant;
                fromAmino(object: _39.MsgVerifyInvariantAmino): _39.MsgVerifyInvariant;
                toAmino(message: _39.MsgVerifyInvariant): _39.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _39.MsgVerifyInvariantAminoMsg): _39.MsgVerifyInvariant;
                toAminoMsg(message: _39.MsgVerifyInvariant): _39.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _39.MsgVerifyInvariantProtoMsg): _39.MsgVerifyInvariant;
                toProto(message: _39.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _39.MsgVerifyInvariant): _39.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _39.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _39.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_39.MsgVerifyInvariantResponse>): _39.MsgVerifyInvariantResponse;
                fromAmino(_: _39.MsgVerifyInvariantResponseAmino): _39.MsgVerifyInvariantResponse;
                toAmino(_: _39.MsgVerifyInvariantResponse): _39.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _39.MsgVerifyInvariantResponseAminoMsg): _39.MsgVerifyInvariantResponse;
                toAminoMsg(message: _39.MsgVerifyInvariantResponse): _39.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _39.MsgVerifyInvariantResponseProtoMsg): _39.MsgVerifyInvariantResponse;
                toProto(message: _39.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _39.MsgVerifyInvariantResponse): _39.MsgVerifyInvariantResponseProtoMsg;
            };
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
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _40.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.PubKey;
                fromPartial(object: Partial<_40.PubKey>): _40.PubKey;
                fromAmino(object: _40.PubKeyAmino): _40.PubKey;
                toAmino(message: _40.PubKey): _40.PubKeyAmino;
                fromAminoMsg(object: _40.PubKeyAminoMsg): _40.PubKey;
                toAminoMsg(message: _40.PubKey): _40.PubKeyAminoMsg;
                fromProtoMsg(message: _40.PubKeyProtoMsg): _40.PubKey;
                toProto(message: _40.PubKey): Uint8Array;
                toProtoMsg(message: _40.PubKey): _40.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _40.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.PrivKey;
                fromPartial(object: Partial<_40.PrivKey>): _40.PrivKey;
                fromAmino(object: _40.PrivKeyAmino): _40.PrivKey;
                toAmino(message: _40.PrivKey): _40.PrivKeyAmino;
                fromAminoMsg(object: _40.PrivKeyAminoMsg): _40.PrivKey;
                toAminoMsg(message: _40.PrivKey): _40.PrivKeyAminoMsg;
                fromProtoMsg(message: _40.PrivKeyProtoMsg): _40.PrivKey;
                toProto(message: _40.PrivKey): Uint8Array;
                toProtoMsg(message: _40.PrivKey): _40.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _41.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.BIP44Params;
                    fromPartial(object: Partial<_41.BIP44Params>): _41.BIP44Params;
                    fromAmino(object: _41.BIP44ParamsAmino): _41.BIP44Params;
                    toAmino(message: _41.BIP44Params): _41.BIP44ParamsAmino;
                    fromAminoMsg(object: _41.BIP44ParamsAminoMsg): _41.BIP44Params;
                    toAminoMsg(message: _41.BIP44Params): _41.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _41.BIP44ParamsProtoMsg): _41.BIP44Params;
                    toProto(message: _41.BIP44Params): Uint8Array;
                    toProtoMsg(message: _41.BIP44Params): _41.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _42.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.Record;
                    fromPartial(object: Partial<_42.Record>): _42.Record;
                    fromAmino(object: _42.RecordAmino): _42.Record;
                    toAmino(message: _42.Record): _42.RecordAmino;
                    fromAminoMsg(object: _42.RecordAminoMsg): _42.Record;
                    toAminoMsg(message: _42.Record): _42.RecordAminoMsg;
                    fromProtoMsg(message: _42.RecordProtoMsg): _42.Record;
                    toProto(message: _42.Record): Uint8Array;
                    toProtoMsg(message: _42.Record): _42.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _42.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.Record_Local;
                    fromPartial(object: Partial<_42.Record_Local>): _42.Record_Local;
                    fromAmino(object: _42.Record_LocalAmino): _42.Record_Local;
                    toAmino(message: _42.Record_Local): _42.Record_LocalAmino;
                    fromAminoMsg(object: _42.Record_LocalAminoMsg): _42.Record_Local;
                    toAminoMsg(message: _42.Record_Local): _42.Record_LocalAminoMsg;
                    fromProtoMsg(message: _42.Record_LocalProtoMsg): _42.Record_Local;
                    toProto(message: _42.Record_Local): Uint8Array;
                    toProtoMsg(message: _42.Record_Local): _42.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _42.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.Record_Ledger;
                    fromPartial(object: Partial<_42.Record_Ledger>): _42.Record_Ledger;
                    fromAmino(object: _42.Record_LedgerAmino): _42.Record_Ledger;
                    toAmino(message: _42.Record_Ledger): _42.Record_LedgerAmino;
                    fromAminoMsg(object: _42.Record_LedgerAminoMsg): _42.Record_Ledger;
                    toAminoMsg(message: _42.Record_Ledger): _42.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _42.Record_LedgerProtoMsg): _42.Record_Ledger;
                    toProto(message: _42.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _42.Record_Ledger): _42.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _42.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.Record_Multi;
                    fromPartial(_: Partial<_42.Record_Multi>): _42.Record_Multi;
                    fromAmino(_: _42.Record_MultiAmino): _42.Record_Multi;
                    toAmino(_: _42.Record_Multi): _42.Record_MultiAmino;
                    fromAminoMsg(object: _42.Record_MultiAminoMsg): _42.Record_Multi;
                    toAminoMsg(message: _42.Record_Multi): _42.Record_MultiAminoMsg;
                    fromProtoMsg(message: _42.Record_MultiProtoMsg): _42.Record_Multi;
                    toProto(message: _42.Record_Multi): Uint8Array;
                    toProtoMsg(message: _42.Record_Multi): _42.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _42.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.Record_Offline;
                    fromPartial(_: Partial<_42.Record_Offline>): _42.Record_Offline;
                    fromAmino(_: _42.Record_OfflineAmino): _42.Record_Offline;
                    toAmino(_: _42.Record_Offline): _42.Record_OfflineAmino;
                    fromAminoMsg(object: _42.Record_OfflineAminoMsg): _42.Record_Offline;
                    toAminoMsg(message: _42.Record_Offline): _42.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _42.Record_OfflineProtoMsg): _42.Record_Offline;
                    toProto(message: _42.Record_Offline): Uint8Array;
                    toProtoMsg(message: _42.Record_Offline): _42.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _43.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.LegacyAminoPubKey;
                fromPartial(object: Partial<_43.LegacyAminoPubKey>): _43.LegacyAminoPubKey;
                fromAmino(object: _43.LegacyAminoPubKeyAmino): _43.LegacyAminoPubKey;
                toAmino(message: _43.LegacyAminoPubKey): _43.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _43.LegacyAminoPubKeyAminoMsg): _43.LegacyAminoPubKey;
                toAminoMsg(message: _43.LegacyAminoPubKey): _43.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _43.LegacyAminoPubKeyProtoMsg): _43.LegacyAminoPubKey;
                toProto(message: _43.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _43.LegacyAminoPubKey): _43.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _44.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.PubKey;
                fromPartial(object: Partial<_44.PubKey>): _44.PubKey;
                fromAmino(object: _44.PubKeyAmino): _44.PubKey;
                toAmino(message: _44.PubKey): _44.PubKeyAmino;
                fromAminoMsg(object: _44.PubKeyAminoMsg): _44.PubKey;
                toAminoMsg(message: _44.PubKey): _44.PubKeyAminoMsg;
                fromProtoMsg(message: _44.PubKeyProtoMsg): _44.PubKey;
                toProto(message: _44.PubKey): Uint8Array;
                toProtoMsg(message: _44.PubKey): _44.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _44.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.PrivKey;
                fromPartial(object: Partial<_44.PrivKey>): _44.PrivKey;
                fromAmino(object: _44.PrivKeyAmino): _44.PrivKey;
                toAmino(message: _44.PrivKey): _44.PrivKeyAmino;
                fromAminoMsg(object: _44.PrivKeyAminoMsg): _44.PrivKey;
                toAminoMsg(message: _44.PrivKey): _44.PrivKeyAminoMsg;
                fromProtoMsg(message: _44.PrivKeyProtoMsg): _44.PrivKey;
                toProto(message: _44.PrivKey): Uint8Array;
                toProtoMsg(message: _44.PrivKey): _44.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _45.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.PubKey;
                fromPartial(object: Partial<_45.PubKey>): _45.PubKey;
                fromAmino(object: _45.PubKeyAmino): _45.PubKey;
                toAmino(message: _45.PubKey): _45.PubKeyAmino;
                fromAminoMsg(object: _45.PubKeyAminoMsg): _45.PubKey;
                toAminoMsg(message: _45.PubKey): _45.PubKeyAminoMsg;
                fromProtoMsg(message: _45.PubKeyProtoMsg): _45.PubKey;
                toProto(message: _45.PubKey): Uint8Array;
                toProtoMsg(message: _45.PubKey): _45.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _45.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.PrivKey;
                fromPartial(object: Partial<_45.PrivKey>): _45.PrivKey;
                fromAmino(object: _45.PrivKeyAmino): _45.PrivKey;
                toAmino(message: _45.PrivKey): _45.PrivKeyAmino;
                fromAminoMsg(object: _45.PrivKeyAminoMsg): _45.PrivKey;
                toAminoMsg(message: _45.PrivKey): _45.PrivKeyAminoMsg;
                fromProtoMsg(message: _45.PrivKeyProtoMsg): _45.PrivKey;
                toProto(message: _45.PrivKey): Uint8Array;
                toProtoMsg(message: _45.PrivKey): _45.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _210.MsgClientImpl;
            QueryClientImpl: typeof _194.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                validatorOutstandingRewards(request: _48.QueryValidatorOutstandingRewardsRequest): Promise<_48.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _48.QueryValidatorCommissionRequest): Promise<_48.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _48.QueryValidatorSlashesRequest): Promise<_48.QueryValidatorSlashesResponse>;
                delegationRewards(request: _48.QueryDelegationRewardsRequest): Promise<_48.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _48.QueryDelegationTotalRewardsRequest): Promise<_48.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _48.QueryDelegatorValidatorsRequest): Promise<_48.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _48.QueryDelegatorWithdrawAddressRequest): Promise<_48.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _48.QueryCommunityPoolRequest): Promise<_48.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _175.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _49.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _49.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _49.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _49.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _49.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _49.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _49.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _49.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _49.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _49.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _49.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _49.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _49.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _49.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _49.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _49.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _49.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _49.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _49.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _49.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _49.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _49.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _49.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _49.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _49.MsgSetWithdrawAddress) => _49.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _49.MsgSetWithdrawAddressAmino) => _49.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _49.MsgWithdrawDelegatorReward) => _49.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _49.MsgWithdrawDelegatorRewardAmino) => _49.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _49.MsgWithdrawValidatorCommission) => _49.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _49.MsgWithdrawValidatorCommissionAmino) => _49.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _49.MsgFundCommunityPool) => _49.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _49.MsgFundCommunityPoolAmino) => _49.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _49.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_49.MsgSetWithdrawAddress>): _49.MsgSetWithdrawAddress;
                fromAmino(object: _49.MsgSetWithdrawAddressAmino): _49.MsgSetWithdrawAddress;
                toAmino(message: _49.MsgSetWithdrawAddress): _49.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _49.MsgSetWithdrawAddressAminoMsg): _49.MsgSetWithdrawAddress;
                toAminoMsg(message: _49.MsgSetWithdrawAddress): _49.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _49.MsgSetWithdrawAddressProtoMsg): _49.MsgSetWithdrawAddress;
                toProto(message: _49.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _49.MsgSetWithdrawAddress): _49.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _49.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_49.MsgSetWithdrawAddressResponse>): _49.MsgSetWithdrawAddressResponse;
                fromAmino(_: _49.MsgSetWithdrawAddressResponseAmino): _49.MsgSetWithdrawAddressResponse;
                toAmino(_: _49.MsgSetWithdrawAddressResponse): _49.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _49.MsgSetWithdrawAddressResponseAminoMsg): _49.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _49.MsgSetWithdrawAddressResponse): _49.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _49.MsgSetWithdrawAddressResponseProtoMsg): _49.MsgSetWithdrawAddressResponse;
                toProto(message: _49.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _49.MsgSetWithdrawAddressResponse): _49.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _49.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_49.MsgWithdrawDelegatorReward>): _49.MsgWithdrawDelegatorReward;
                fromAmino(object: _49.MsgWithdrawDelegatorRewardAmino): _49.MsgWithdrawDelegatorReward;
                toAmino(message: _49.MsgWithdrawDelegatorReward): _49.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _49.MsgWithdrawDelegatorRewardAminoMsg): _49.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _49.MsgWithdrawDelegatorReward): _49.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _49.MsgWithdrawDelegatorRewardProtoMsg): _49.MsgWithdrawDelegatorReward;
                toProto(message: _49.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _49.MsgWithdrawDelegatorReward): _49.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _49.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_49.MsgWithdrawDelegatorRewardResponse>): _49.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _49.MsgWithdrawDelegatorRewardResponseAmino): _49.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _49.MsgWithdrawDelegatorRewardResponse): _49.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _49.MsgWithdrawDelegatorRewardResponseAminoMsg): _49.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _49.MsgWithdrawDelegatorRewardResponse): _49.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _49.MsgWithdrawDelegatorRewardResponseProtoMsg): _49.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _49.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _49.MsgWithdrawDelegatorRewardResponse): _49.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _49.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_49.MsgWithdrawValidatorCommission>): _49.MsgWithdrawValidatorCommission;
                fromAmino(object: _49.MsgWithdrawValidatorCommissionAmino): _49.MsgWithdrawValidatorCommission;
                toAmino(message: _49.MsgWithdrawValidatorCommission): _49.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _49.MsgWithdrawValidatorCommissionAminoMsg): _49.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _49.MsgWithdrawValidatorCommission): _49.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _49.MsgWithdrawValidatorCommissionProtoMsg): _49.MsgWithdrawValidatorCommission;
                toProto(message: _49.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _49.MsgWithdrawValidatorCommission): _49.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _49.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_49.MsgWithdrawValidatorCommissionResponse>): _49.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _49.MsgWithdrawValidatorCommissionResponseAmino): _49.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _49.MsgWithdrawValidatorCommissionResponse): _49.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _49.MsgWithdrawValidatorCommissionResponseAminoMsg): _49.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _49.MsgWithdrawValidatorCommissionResponse): _49.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _49.MsgWithdrawValidatorCommissionResponseProtoMsg): _49.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _49.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _49.MsgWithdrawValidatorCommissionResponse): _49.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _49.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgFundCommunityPool;
                fromPartial(object: Partial<_49.MsgFundCommunityPool>): _49.MsgFundCommunityPool;
                fromAmino(object: _49.MsgFundCommunityPoolAmino): _49.MsgFundCommunityPool;
                toAmino(message: _49.MsgFundCommunityPool): _49.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _49.MsgFundCommunityPoolAminoMsg): _49.MsgFundCommunityPool;
                toAminoMsg(message: _49.MsgFundCommunityPool): _49.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _49.MsgFundCommunityPoolProtoMsg): _49.MsgFundCommunityPool;
                toProto(message: _49.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _49.MsgFundCommunityPool): _49.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _49.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_49.MsgFundCommunityPoolResponse>): _49.MsgFundCommunityPoolResponse;
                fromAmino(_: _49.MsgFundCommunityPoolResponseAmino): _49.MsgFundCommunityPoolResponse;
                toAmino(_: _49.MsgFundCommunityPoolResponse): _49.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _49.MsgFundCommunityPoolResponseAminoMsg): _49.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _49.MsgFundCommunityPoolResponse): _49.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _49.MsgFundCommunityPoolResponseProtoMsg): _49.MsgFundCommunityPoolResponse;
                toProto(message: _49.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _49.MsgFundCommunityPoolResponse): _49.MsgFundCommunityPoolResponseProtoMsg;
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
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _48.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_48.QueryValidatorOutstandingRewardsRequest>): _48.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _48.QueryValidatorOutstandingRewardsRequestAmino): _48.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _48.QueryValidatorOutstandingRewardsRequest): _48.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _48.QueryValidatorOutstandingRewardsRequestAminoMsg): _48.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _48.QueryValidatorOutstandingRewardsRequest): _48.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _48.QueryValidatorOutstandingRewardsRequestProtoMsg): _48.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _48.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryValidatorOutstandingRewardsRequest): _48.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _48.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_48.QueryValidatorOutstandingRewardsResponse>): _48.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _48.QueryValidatorOutstandingRewardsResponseAmino): _48.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _48.QueryValidatorOutstandingRewardsResponse): _48.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _48.QueryValidatorOutstandingRewardsResponseAminoMsg): _48.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _48.QueryValidatorOutstandingRewardsResponse): _48.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _48.QueryValidatorOutstandingRewardsResponseProtoMsg): _48.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _48.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryValidatorOutstandingRewardsResponse): _48.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _48.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_48.QueryValidatorCommissionRequest>): _48.QueryValidatorCommissionRequest;
                fromAmino(object: _48.QueryValidatorCommissionRequestAmino): _48.QueryValidatorCommissionRequest;
                toAmino(message: _48.QueryValidatorCommissionRequest): _48.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _48.QueryValidatorCommissionRequestAminoMsg): _48.QueryValidatorCommissionRequest;
                toAminoMsg(message: _48.QueryValidatorCommissionRequest): _48.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _48.QueryValidatorCommissionRequestProtoMsg): _48.QueryValidatorCommissionRequest;
                toProto(message: _48.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _48.QueryValidatorCommissionRequest): _48.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _48.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_48.QueryValidatorCommissionResponse>): _48.QueryValidatorCommissionResponse;
                fromAmino(object: _48.QueryValidatorCommissionResponseAmino): _48.QueryValidatorCommissionResponse;
                toAmino(message: _48.QueryValidatorCommissionResponse): _48.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _48.QueryValidatorCommissionResponseAminoMsg): _48.QueryValidatorCommissionResponse;
                toAminoMsg(message: _48.QueryValidatorCommissionResponse): _48.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _48.QueryValidatorCommissionResponseProtoMsg): _48.QueryValidatorCommissionResponse;
                toProto(message: _48.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _48.QueryValidatorCommissionResponse): _48.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _48.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_48.QueryValidatorSlashesRequest>): _48.QueryValidatorSlashesRequest;
                fromAmino(object: _48.QueryValidatorSlashesRequestAmino): _48.QueryValidatorSlashesRequest;
                toAmino(message: _48.QueryValidatorSlashesRequest): _48.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _48.QueryValidatorSlashesRequestAminoMsg): _48.QueryValidatorSlashesRequest;
                toAminoMsg(message: _48.QueryValidatorSlashesRequest): _48.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _48.QueryValidatorSlashesRequestProtoMsg): _48.QueryValidatorSlashesRequest;
                toProto(message: _48.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _48.QueryValidatorSlashesRequest): _48.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _48.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_48.QueryValidatorSlashesResponse>): _48.QueryValidatorSlashesResponse;
                fromAmino(object: _48.QueryValidatorSlashesResponseAmino): _48.QueryValidatorSlashesResponse;
                toAmino(message: _48.QueryValidatorSlashesResponse): _48.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _48.QueryValidatorSlashesResponseAminoMsg): _48.QueryValidatorSlashesResponse;
                toAminoMsg(message: _48.QueryValidatorSlashesResponse): _48.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _48.QueryValidatorSlashesResponseProtoMsg): _48.QueryValidatorSlashesResponse;
                toProto(message: _48.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _48.QueryValidatorSlashesResponse): _48.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _48.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_48.QueryDelegationRewardsRequest>): _48.QueryDelegationRewardsRequest;
                fromAmino(object: _48.QueryDelegationRewardsRequestAmino): _48.QueryDelegationRewardsRequest;
                toAmino(message: _48.QueryDelegationRewardsRequest): _48.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _48.QueryDelegationRewardsRequestAminoMsg): _48.QueryDelegationRewardsRequest;
                toAminoMsg(message: _48.QueryDelegationRewardsRequest): _48.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _48.QueryDelegationRewardsRequestProtoMsg): _48.QueryDelegationRewardsRequest;
                toProto(message: _48.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryDelegationRewardsRequest): _48.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _48.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_48.QueryDelegationRewardsResponse>): _48.QueryDelegationRewardsResponse;
                fromAmino(object: _48.QueryDelegationRewardsResponseAmino): _48.QueryDelegationRewardsResponse;
                toAmino(message: _48.QueryDelegationRewardsResponse): _48.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _48.QueryDelegationRewardsResponseAminoMsg): _48.QueryDelegationRewardsResponse;
                toAminoMsg(message: _48.QueryDelegationRewardsResponse): _48.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _48.QueryDelegationRewardsResponseProtoMsg): _48.QueryDelegationRewardsResponse;
                toProto(message: _48.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryDelegationRewardsResponse): _48.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _48.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_48.QueryDelegationTotalRewardsRequest>): _48.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _48.QueryDelegationTotalRewardsRequestAmino): _48.QueryDelegationTotalRewardsRequest;
                toAmino(message: _48.QueryDelegationTotalRewardsRequest): _48.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _48.QueryDelegationTotalRewardsRequestAminoMsg): _48.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _48.QueryDelegationTotalRewardsRequest): _48.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _48.QueryDelegationTotalRewardsRequestProtoMsg): _48.QueryDelegationTotalRewardsRequest;
                toProto(message: _48.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryDelegationTotalRewardsRequest): _48.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _48.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_48.QueryDelegationTotalRewardsResponse>): _48.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _48.QueryDelegationTotalRewardsResponseAmino): _48.QueryDelegationTotalRewardsResponse;
                toAmino(message: _48.QueryDelegationTotalRewardsResponse): _48.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _48.QueryDelegationTotalRewardsResponseAminoMsg): _48.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _48.QueryDelegationTotalRewardsResponse): _48.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _48.QueryDelegationTotalRewardsResponseProtoMsg): _48.QueryDelegationTotalRewardsResponse;
                toProto(message: _48.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryDelegationTotalRewardsResponse): _48.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _48.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_48.QueryDelegatorValidatorsRequest>): _48.QueryDelegatorValidatorsRequest;
                fromAmino(object: _48.QueryDelegatorValidatorsRequestAmino): _48.QueryDelegatorValidatorsRequest;
                toAmino(message: _48.QueryDelegatorValidatorsRequest): _48.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _48.QueryDelegatorValidatorsRequestAminoMsg): _48.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _48.QueryDelegatorValidatorsRequest): _48.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _48.QueryDelegatorValidatorsRequestProtoMsg): _48.QueryDelegatorValidatorsRequest;
                toProto(message: _48.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryDelegatorValidatorsRequest): _48.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _48.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_48.QueryDelegatorValidatorsResponse>): _48.QueryDelegatorValidatorsResponse;
                fromAmino(object: _48.QueryDelegatorValidatorsResponseAmino): _48.QueryDelegatorValidatorsResponse;
                toAmino(message: _48.QueryDelegatorValidatorsResponse): _48.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _48.QueryDelegatorValidatorsResponseAminoMsg): _48.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _48.QueryDelegatorValidatorsResponse): _48.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _48.QueryDelegatorValidatorsResponseProtoMsg): _48.QueryDelegatorValidatorsResponse;
                toProto(message: _48.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryDelegatorValidatorsResponse): _48.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _48.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_48.QueryDelegatorWithdrawAddressRequest>): _48.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _48.QueryDelegatorWithdrawAddressRequestAmino): _48.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _48.QueryDelegatorWithdrawAddressRequest): _48.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _48.QueryDelegatorWithdrawAddressRequestAminoMsg): _48.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _48.QueryDelegatorWithdrawAddressRequest): _48.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _48.QueryDelegatorWithdrawAddressRequestProtoMsg): _48.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _48.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _48.QueryDelegatorWithdrawAddressRequest): _48.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _48.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_48.QueryDelegatorWithdrawAddressResponse>): _48.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _48.QueryDelegatorWithdrawAddressResponseAmino): _48.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _48.QueryDelegatorWithdrawAddressResponse): _48.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _48.QueryDelegatorWithdrawAddressResponseAminoMsg): _48.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _48.QueryDelegatorWithdrawAddressResponse): _48.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _48.QueryDelegatorWithdrawAddressResponseProtoMsg): _48.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _48.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _48.QueryDelegatorWithdrawAddressResponse): _48.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _48.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_48.QueryCommunityPoolRequest>): _48.QueryCommunityPoolRequest;
                fromAmino(_: _48.QueryCommunityPoolRequestAmino): _48.QueryCommunityPoolRequest;
                toAmino(_: _48.QueryCommunityPoolRequest): _48.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _48.QueryCommunityPoolRequestAminoMsg): _48.QueryCommunityPoolRequest;
                toAminoMsg(message: _48.QueryCommunityPoolRequest): _48.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _48.QueryCommunityPoolRequestProtoMsg): _48.QueryCommunityPoolRequest;
                toProto(message: _48.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _48.QueryCommunityPoolRequest): _48.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _48.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_48.QueryCommunityPoolResponse>): _48.QueryCommunityPoolResponse;
                fromAmino(object: _48.QueryCommunityPoolResponseAmino): _48.QueryCommunityPoolResponse;
                toAmino(message: _48.QueryCommunityPoolResponse): _48.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _48.QueryCommunityPoolResponseAminoMsg): _48.QueryCommunityPoolResponse;
                toAminoMsg(message: _48.QueryCommunityPoolResponse): _48.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _48.QueryCommunityPoolResponseProtoMsg): _48.QueryCommunityPoolResponse;
                toProto(message: _48.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _48.QueryCommunityPoolResponse): _48.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _47.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_47.DelegatorWithdrawInfo>): _47.DelegatorWithdrawInfo;
                fromAmino(object: _47.DelegatorWithdrawInfoAmino): _47.DelegatorWithdrawInfo;
                toAmino(message: _47.DelegatorWithdrawInfo): _47.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _47.DelegatorWithdrawInfoAminoMsg): _47.DelegatorWithdrawInfo;
                toAminoMsg(message: _47.DelegatorWithdrawInfo): _47.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _47.DelegatorWithdrawInfoProtoMsg): _47.DelegatorWithdrawInfo;
                toProto(message: _47.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _47.DelegatorWithdrawInfo): _47.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _47.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_47.ValidatorOutstandingRewardsRecord>): _47.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _47.ValidatorOutstandingRewardsRecordAmino): _47.ValidatorOutstandingRewardsRecord;
                toAmino(message: _47.ValidatorOutstandingRewardsRecord): _47.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _47.ValidatorOutstandingRewardsRecordAminoMsg): _47.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _47.ValidatorOutstandingRewardsRecord): _47.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _47.ValidatorOutstandingRewardsRecordProtoMsg): _47.ValidatorOutstandingRewardsRecord;
                toProto(message: _47.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _47.ValidatorOutstandingRewardsRecord): _47.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _47.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_47.ValidatorAccumulatedCommissionRecord>): _47.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _47.ValidatorAccumulatedCommissionRecordAmino): _47.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _47.ValidatorAccumulatedCommissionRecord): _47.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _47.ValidatorAccumulatedCommissionRecordAminoMsg): _47.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _47.ValidatorAccumulatedCommissionRecord): _47.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _47.ValidatorAccumulatedCommissionRecordProtoMsg): _47.ValidatorAccumulatedCommissionRecord;
                toProto(message: _47.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _47.ValidatorAccumulatedCommissionRecord): _47.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _47.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_47.ValidatorHistoricalRewardsRecord>): _47.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _47.ValidatorHistoricalRewardsRecordAmino): _47.ValidatorHistoricalRewardsRecord;
                toAmino(message: _47.ValidatorHistoricalRewardsRecord): _47.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _47.ValidatorHistoricalRewardsRecordAminoMsg): _47.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _47.ValidatorHistoricalRewardsRecord): _47.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _47.ValidatorHistoricalRewardsRecordProtoMsg): _47.ValidatorHistoricalRewardsRecord;
                toProto(message: _47.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _47.ValidatorHistoricalRewardsRecord): _47.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _47.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_47.ValidatorCurrentRewardsRecord>): _47.ValidatorCurrentRewardsRecord;
                fromAmino(object: _47.ValidatorCurrentRewardsRecordAmino): _47.ValidatorCurrentRewardsRecord;
                toAmino(message: _47.ValidatorCurrentRewardsRecord): _47.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _47.ValidatorCurrentRewardsRecordAminoMsg): _47.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _47.ValidatorCurrentRewardsRecord): _47.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _47.ValidatorCurrentRewardsRecordProtoMsg): _47.ValidatorCurrentRewardsRecord;
                toProto(message: _47.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _47.ValidatorCurrentRewardsRecord): _47.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _47.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_47.DelegatorStartingInfoRecord>): _47.DelegatorStartingInfoRecord;
                fromAmino(object: _47.DelegatorStartingInfoRecordAmino): _47.DelegatorStartingInfoRecord;
                toAmino(message: _47.DelegatorStartingInfoRecord): _47.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _47.DelegatorStartingInfoRecordAminoMsg): _47.DelegatorStartingInfoRecord;
                toAminoMsg(message: _47.DelegatorStartingInfoRecord): _47.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _47.DelegatorStartingInfoRecordProtoMsg): _47.DelegatorStartingInfoRecord;
                toProto(message: _47.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _47.DelegatorStartingInfoRecord): _47.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _47.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_47.ValidatorSlashEventRecord>): _47.ValidatorSlashEventRecord;
                fromAmino(object: _47.ValidatorSlashEventRecordAmino): _47.ValidatorSlashEventRecord;
                toAmino(message: _47.ValidatorSlashEventRecord): _47.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _47.ValidatorSlashEventRecordAminoMsg): _47.ValidatorSlashEventRecord;
                toAminoMsg(message: _47.ValidatorSlashEventRecord): _47.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _47.ValidatorSlashEventRecordProtoMsg): _47.ValidatorSlashEventRecord;
                toProto(message: _47.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _47.ValidatorSlashEventRecord): _47.ValidatorSlashEventRecordProtoMsg;
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
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _46.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_46.ValidatorHistoricalRewards>): _46.ValidatorHistoricalRewards;
                fromAmino(object: _46.ValidatorHistoricalRewardsAmino): _46.ValidatorHistoricalRewards;
                toAmino(message: _46.ValidatorHistoricalRewards): _46.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _46.ValidatorHistoricalRewardsAminoMsg): _46.ValidatorHistoricalRewards;
                toAminoMsg(message: _46.ValidatorHistoricalRewards): _46.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _46.ValidatorHistoricalRewardsProtoMsg): _46.ValidatorHistoricalRewards;
                toProto(message: _46.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _46.ValidatorHistoricalRewards): _46.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _46.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.ValidatorCurrentRewards;
                fromPartial(object: Partial<_46.ValidatorCurrentRewards>): _46.ValidatorCurrentRewards;
                fromAmino(object: _46.ValidatorCurrentRewardsAmino): _46.ValidatorCurrentRewards;
                toAmino(message: _46.ValidatorCurrentRewards): _46.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _46.ValidatorCurrentRewardsAminoMsg): _46.ValidatorCurrentRewards;
                toAminoMsg(message: _46.ValidatorCurrentRewards): _46.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _46.ValidatorCurrentRewardsProtoMsg): _46.ValidatorCurrentRewards;
                toProto(message: _46.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _46.ValidatorCurrentRewards): _46.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _46.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_46.ValidatorAccumulatedCommission>): _46.ValidatorAccumulatedCommission;
                fromAmino(object: _46.ValidatorAccumulatedCommissionAmino): _46.ValidatorAccumulatedCommission;
                toAmino(message: _46.ValidatorAccumulatedCommission): _46.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _46.ValidatorAccumulatedCommissionAminoMsg): _46.ValidatorAccumulatedCommission;
                toAminoMsg(message: _46.ValidatorAccumulatedCommission): _46.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _46.ValidatorAccumulatedCommissionProtoMsg): _46.ValidatorAccumulatedCommission;
                toProto(message: _46.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _46.ValidatorAccumulatedCommission): _46.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _46.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_46.ValidatorOutstandingRewards>): _46.ValidatorOutstandingRewards;
                fromAmino(object: _46.ValidatorOutstandingRewardsAmino): _46.ValidatorOutstandingRewards;
                toAmino(message: _46.ValidatorOutstandingRewards): _46.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _46.ValidatorOutstandingRewardsAminoMsg): _46.ValidatorOutstandingRewards;
                toAminoMsg(message: _46.ValidatorOutstandingRewards): _46.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _46.ValidatorOutstandingRewardsProtoMsg): _46.ValidatorOutstandingRewards;
                toProto(message: _46.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _46.ValidatorOutstandingRewards): _46.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _46.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.ValidatorSlashEvent;
                fromPartial(object: Partial<_46.ValidatorSlashEvent>): _46.ValidatorSlashEvent;
                fromAmino(object: _46.ValidatorSlashEventAmino): _46.ValidatorSlashEvent;
                toAmino(message: _46.ValidatorSlashEvent): _46.ValidatorSlashEventAmino;
                fromAminoMsg(object: _46.ValidatorSlashEventAminoMsg): _46.ValidatorSlashEvent;
                toAminoMsg(message: _46.ValidatorSlashEvent): _46.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _46.ValidatorSlashEventProtoMsg): _46.ValidatorSlashEvent;
                toProto(message: _46.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _46.ValidatorSlashEvent): _46.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _46.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.ValidatorSlashEvents;
                fromPartial(object: Partial<_46.ValidatorSlashEvents>): _46.ValidatorSlashEvents;
                fromAmino(object: _46.ValidatorSlashEventsAmino): _46.ValidatorSlashEvents;
                toAmino(message: _46.ValidatorSlashEvents): _46.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _46.ValidatorSlashEventsAminoMsg): _46.ValidatorSlashEvents;
                toAminoMsg(message: _46.ValidatorSlashEvents): _46.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _46.ValidatorSlashEventsProtoMsg): _46.ValidatorSlashEvents;
                toProto(message: _46.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _46.ValidatorSlashEvents): _46.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _46.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.FeePool;
                fromPartial(object: Partial<_46.FeePool>): _46.FeePool;
                fromAmino(object: _46.FeePoolAmino): _46.FeePool;
                toAmino(message: _46.FeePool): _46.FeePoolAmino;
                fromAminoMsg(object: _46.FeePoolAminoMsg): _46.FeePool;
                toAminoMsg(message: _46.FeePool): _46.FeePoolAminoMsg;
                fromProtoMsg(message: _46.FeePoolProtoMsg): _46.FeePool;
                toProto(message: _46.FeePool): Uint8Array;
                toProtoMsg(message: _46.FeePool): _46.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _46.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_46.CommunityPoolSpendProposal>): _46.CommunityPoolSpendProposal;
                fromAmino(object: _46.CommunityPoolSpendProposalAmino): _46.CommunityPoolSpendProposal;
                toAmino(message: _46.CommunityPoolSpendProposal): _46.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _46.CommunityPoolSpendProposalAminoMsg): _46.CommunityPoolSpendProposal;
                toAminoMsg(message: _46.CommunityPoolSpendProposal): _46.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _46.CommunityPoolSpendProposalProtoMsg): _46.CommunityPoolSpendProposal;
                toProto(message: _46.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _46.CommunityPoolSpendProposal): _46.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _46.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.DelegatorStartingInfo;
                fromPartial(object: Partial<_46.DelegatorStartingInfo>): _46.DelegatorStartingInfo;
                fromAmino(object: _46.DelegatorStartingInfoAmino): _46.DelegatorStartingInfo;
                toAmino(message: _46.DelegatorStartingInfo): _46.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _46.DelegatorStartingInfoAminoMsg): _46.DelegatorStartingInfo;
                toAminoMsg(message: _46.DelegatorStartingInfo): _46.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _46.DelegatorStartingInfoProtoMsg): _46.DelegatorStartingInfo;
                toProto(message: _46.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _46.DelegatorStartingInfo): _46.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _46.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.DelegationDelegatorReward;
                fromPartial(object: Partial<_46.DelegationDelegatorReward>): _46.DelegationDelegatorReward;
                fromAmino(object: _46.DelegationDelegatorRewardAmino): _46.DelegationDelegatorReward;
                toAmino(message: _46.DelegationDelegatorReward): _46.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _46.DelegationDelegatorRewardAminoMsg): _46.DelegationDelegatorReward;
                toAminoMsg(message: _46.DelegationDelegatorReward): _46.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _46.DelegationDelegatorRewardProtoMsg): _46.DelegationDelegatorReward;
                toProto(message: _46.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _46.DelegationDelegatorReward): _46.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _46.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_46.CommunityPoolSpendProposalWithDeposit>): _46.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _46.CommunityPoolSpendProposalWithDepositAmino): _46.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _46.CommunityPoolSpendProposalWithDeposit): _46.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _46.CommunityPoolSpendProposalWithDepositAminoMsg): _46.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _46.CommunityPoolSpendProposalWithDeposit): _46.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _46.CommunityPoolSpendProposalWithDepositProtoMsg): _46.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _46.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _46.CommunityPoolSpendProposalWithDeposit): _46.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _211.MsgClientImpl;
            QueryClientImpl: typeof _195.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _52.QueryEvidenceRequest): Promise<_52.QueryEvidenceResponse>;
                allEvidence(request?: _52.QueryAllEvidenceRequest): Promise<_52.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _176.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _53.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _53.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _53.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _53.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _53.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _53.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _53.MsgSubmitEvidence) => _53.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _53.MsgSubmitEvidenceAmino) => _53.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _53.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgSubmitEvidence;
                fromPartial(object: Partial<_53.MsgSubmitEvidence>): _53.MsgSubmitEvidence;
                fromAmino(object: _53.MsgSubmitEvidenceAmino): _53.MsgSubmitEvidence;
                toAmino(message: _53.MsgSubmitEvidence): _53.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _53.MsgSubmitEvidenceAminoMsg): _53.MsgSubmitEvidence;
                toAminoMsg(message: _53.MsgSubmitEvidence): _53.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _53.MsgSubmitEvidenceProtoMsg): _53.MsgSubmitEvidence;
                toProto(message: _53.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _53.MsgSubmitEvidence): _53.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _53.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_53.MsgSubmitEvidenceResponse>): _53.MsgSubmitEvidenceResponse;
                fromAmino(object: _53.MsgSubmitEvidenceResponseAmino): _53.MsgSubmitEvidenceResponse;
                toAmino(message: _53.MsgSubmitEvidenceResponse): _53.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _53.MsgSubmitEvidenceResponseAminoMsg): _53.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _53.MsgSubmitEvidenceResponse): _53.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _53.MsgSubmitEvidenceResponseProtoMsg): _53.MsgSubmitEvidenceResponse;
                toProto(message: _53.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _53.MsgSubmitEvidenceResponse): _53.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _52.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryEvidenceRequest;
                fromPartial(object: Partial<_52.QueryEvidenceRequest>): _52.QueryEvidenceRequest;
                fromAmino(object: _52.QueryEvidenceRequestAmino): _52.QueryEvidenceRequest;
                toAmino(message: _52.QueryEvidenceRequest): _52.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _52.QueryEvidenceRequestAminoMsg): _52.QueryEvidenceRequest;
                toAminoMsg(message: _52.QueryEvidenceRequest): _52.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _52.QueryEvidenceRequestProtoMsg): _52.QueryEvidenceRequest;
                toProto(message: _52.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _52.QueryEvidenceRequest): _52.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _52.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryEvidenceResponse;
                fromPartial(object: Partial<_52.QueryEvidenceResponse>): _52.QueryEvidenceResponse;
                fromAmino(object: _52.QueryEvidenceResponseAmino): _52.QueryEvidenceResponse;
                toAmino(message: _52.QueryEvidenceResponse): _52.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _52.QueryEvidenceResponseAminoMsg): _52.QueryEvidenceResponse;
                toAminoMsg(message: _52.QueryEvidenceResponse): _52.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _52.QueryEvidenceResponseProtoMsg): _52.QueryEvidenceResponse;
                toProto(message: _52.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _52.QueryEvidenceResponse): _52.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _52.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_52.QueryAllEvidenceRequest>): _52.QueryAllEvidenceRequest;
                fromAmino(object: _52.QueryAllEvidenceRequestAmino): _52.QueryAllEvidenceRequest;
                toAmino(message: _52.QueryAllEvidenceRequest): _52.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _52.QueryAllEvidenceRequestAminoMsg): _52.QueryAllEvidenceRequest;
                toAminoMsg(message: _52.QueryAllEvidenceRequest): _52.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _52.QueryAllEvidenceRequestProtoMsg): _52.QueryAllEvidenceRequest;
                toProto(message: _52.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _52.QueryAllEvidenceRequest): _52.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _52.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_52.QueryAllEvidenceResponse>): _52.QueryAllEvidenceResponse;
                fromAmino(object: _52.QueryAllEvidenceResponseAmino): _52.QueryAllEvidenceResponse;
                toAmino(message: _52.QueryAllEvidenceResponse): _52.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _52.QueryAllEvidenceResponseAminoMsg): _52.QueryAllEvidenceResponse;
                toAminoMsg(message: _52.QueryAllEvidenceResponse): _52.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _52.QueryAllEvidenceResponseProtoMsg): _52.QueryAllEvidenceResponse;
                toProto(message: _52.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _52.QueryAllEvidenceResponse): _52.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _50.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.Equivocation;
                fromPartial(object: Partial<_50.Equivocation>): _50.Equivocation;
                fromAmino(object: _50.EquivocationAmino): _50.Equivocation;
                toAmino(message: _50.Equivocation): _50.EquivocationAmino;
                fromAminoMsg(object: _50.EquivocationAminoMsg): _50.Equivocation;
                toAminoMsg(message: _50.Equivocation): _50.EquivocationAminoMsg;
                fromProtoMsg(message: _50.EquivocationProtoMsg): _50.Equivocation;
                toProto(message: _50.Equivocation): Uint8Array;
                toProtoMsg(message: _50.Equivocation): _50.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _212.MsgClientImpl;
            QueryClientImpl: typeof _196.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _56.QueryAllowanceRequest): Promise<_56.QueryAllowanceResponse>;
                allowances(request: _56.QueryAllowancesRequest): Promise<_56.QueryAllowancesResponse>;
                allowancesByGranter(request: _56.QueryAllowancesByGranterRequest): Promise<_56.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _177.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _57.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _57.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _57.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _57.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _57.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _57.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _57.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _57.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _57.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _57.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _57.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _57.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _57.MsgGrantAllowance) => _57.MsgGrantAllowanceAmino;
                    fromAmino: (object: _57.MsgGrantAllowanceAmino) => _57.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _57.MsgRevokeAllowance) => _57.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _57.MsgRevokeAllowanceAmino) => _57.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _57.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgGrantAllowance;
                fromPartial(object: Partial<_57.MsgGrantAllowance>): _57.MsgGrantAllowance;
                fromAmino(object: _57.MsgGrantAllowanceAmino): _57.MsgGrantAllowance;
                toAmino(message: _57.MsgGrantAllowance): _57.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _57.MsgGrantAllowanceAminoMsg): _57.MsgGrantAllowance;
                toAminoMsg(message: _57.MsgGrantAllowance): _57.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _57.MsgGrantAllowanceProtoMsg): _57.MsgGrantAllowance;
                toProto(message: _57.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _57.MsgGrantAllowance): _57.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _57.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_57.MsgGrantAllowanceResponse>): _57.MsgGrantAllowanceResponse;
                fromAmino(_: _57.MsgGrantAllowanceResponseAmino): _57.MsgGrantAllowanceResponse;
                toAmino(_: _57.MsgGrantAllowanceResponse): _57.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _57.MsgGrantAllowanceResponseAminoMsg): _57.MsgGrantAllowanceResponse;
                toAminoMsg(message: _57.MsgGrantAllowanceResponse): _57.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _57.MsgGrantAllowanceResponseProtoMsg): _57.MsgGrantAllowanceResponse;
                toProto(message: _57.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _57.MsgGrantAllowanceResponse): _57.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _57.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgRevokeAllowance;
                fromPartial(object: Partial<_57.MsgRevokeAllowance>): _57.MsgRevokeAllowance;
                fromAmino(object: _57.MsgRevokeAllowanceAmino): _57.MsgRevokeAllowance;
                toAmino(message: _57.MsgRevokeAllowance): _57.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _57.MsgRevokeAllowanceAminoMsg): _57.MsgRevokeAllowance;
                toAminoMsg(message: _57.MsgRevokeAllowance): _57.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _57.MsgRevokeAllowanceProtoMsg): _57.MsgRevokeAllowance;
                toProto(message: _57.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _57.MsgRevokeAllowance): _57.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _57.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_57.MsgRevokeAllowanceResponse>): _57.MsgRevokeAllowanceResponse;
                fromAmino(_: _57.MsgRevokeAllowanceResponseAmino): _57.MsgRevokeAllowanceResponse;
                toAmino(_: _57.MsgRevokeAllowanceResponse): _57.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _57.MsgRevokeAllowanceResponseAminoMsg): _57.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _57.MsgRevokeAllowanceResponse): _57.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _57.MsgRevokeAllowanceResponseProtoMsg): _57.MsgRevokeAllowanceResponse;
                toProto(message: _57.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _57.MsgRevokeAllowanceResponse): _57.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _54.BasicAllowance | _54.PeriodicAllowance | _54.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _56.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAllowanceRequest;
                fromPartial(object: Partial<_56.QueryAllowanceRequest>): _56.QueryAllowanceRequest;
                fromAmino(object: _56.QueryAllowanceRequestAmino): _56.QueryAllowanceRequest;
                toAmino(message: _56.QueryAllowanceRequest): _56.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _56.QueryAllowanceRequestAminoMsg): _56.QueryAllowanceRequest;
                toAminoMsg(message: _56.QueryAllowanceRequest): _56.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _56.QueryAllowanceRequestProtoMsg): _56.QueryAllowanceRequest;
                toProto(message: _56.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _56.QueryAllowanceRequest): _56.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _56.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAllowanceResponse;
                fromPartial(object: Partial<_56.QueryAllowanceResponse>): _56.QueryAllowanceResponse;
                fromAmino(object: _56.QueryAllowanceResponseAmino): _56.QueryAllowanceResponse;
                toAmino(message: _56.QueryAllowanceResponse): _56.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _56.QueryAllowanceResponseAminoMsg): _56.QueryAllowanceResponse;
                toAminoMsg(message: _56.QueryAllowanceResponse): _56.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _56.QueryAllowanceResponseProtoMsg): _56.QueryAllowanceResponse;
                toProto(message: _56.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _56.QueryAllowanceResponse): _56.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _56.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAllowancesRequest;
                fromPartial(object: Partial<_56.QueryAllowancesRequest>): _56.QueryAllowancesRequest;
                fromAmino(object: _56.QueryAllowancesRequestAmino): _56.QueryAllowancesRequest;
                toAmino(message: _56.QueryAllowancesRequest): _56.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _56.QueryAllowancesRequestAminoMsg): _56.QueryAllowancesRequest;
                toAminoMsg(message: _56.QueryAllowancesRequest): _56.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _56.QueryAllowancesRequestProtoMsg): _56.QueryAllowancesRequest;
                toProto(message: _56.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _56.QueryAllowancesRequest): _56.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _56.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAllowancesResponse;
                fromPartial(object: Partial<_56.QueryAllowancesResponse>): _56.QueryAllowancesResponse;
                fromAmino(object: _56.QueryAllowancesResponseAmino): _56.QueryAllowancesResponse;
                toAmino(message: _56.QueryAllowancesResponse): _56.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _56.QueryAllowancesResponseAminoMsg): _56.QueryAllowancesResponse;
                toAminoMsg(message: _56.QueryAllowancesResponse): _56.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _56.QueryAllowancesResponseProtoMsg): _56.QueryAllowancesResponse;
                toProto(message: _56.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _56.QueryAllowancesResponse): _56.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _56.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_56.QueryAllowancesByGranterRequest>): _56.QueryAllowancesByGranterRequest;
                fromAmino(object: _56.QueryAllowancesByGranterRequestAmino): _56.QueryAllowancesByGranterRequest;
                toAmino(message: _56.QueryAllowancesByGranterRequest): _56.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _56.QueryAllowancesByGranterRequestAminoMsg): _56.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _56.QueryAllowancesByGranterRequest): _56.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _56.QueryAllowancesByGranterRequestProtoMsg): _56.QueryAllowancesByGranterRequest;
                toProto(message: _56.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _56.QueryAllowancesByGranterRequest): _56.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _56.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_56.QueryAllowancesByGranterResponse>): _56.QueryAllowancesByGranterResponse;
                fromAmino(object: _56.QueryAllowancesByGranterResponseAmino): _56.QueryAllowancesByGranterResponse;
                toAmino(message: _56.QueryAllowancesByGranterResponse): _56.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _56.QueryAllowancesByGranterResponseAminoMsg): _56.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _56.QueryAllowancesByGranterResponse): _56.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _56.QueryAllowancesByGranterResponseProtoMsg): _56.QueryAllowancesByGranterResponse;
                toProto(message: _56.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _56.QueryAllowancesByGranterResponse): _56.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _54.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.BasicAllowance;
                fromPartial(object: Partial<_54.BasicAllowance>): _54.BasicAllowance;
                fromAmino(object: _54.BasicAllowanceAmino): _54.BasicAllowance;
                toAmino(message: _54.BasicAllowance): _54.BasicAllowanceAmino;
                fromAminoMsg(object: _54.BasicAllowanceAminoMsg): _54.BasicAllowance;
                toAminoMsg(message: _54.BasicAllowance): _54.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _54.BasicAllowanceProtoMsg): _54.BasicAllowance;
                toProto(message: _54.BasicAllowance): Uint8Array;
                toProtoMsg(message: _54.BasicAllowance): _54.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _54.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.PeriodicAllowance;
                fromPartial(object: Partial<_54.PeriodicAllowance>): _54.PeriodicAllowance;
                fromAmino(object: _54.PeriodicAllowanceAmino): _54.PeriodicAllowance;
                toAmino(message: _54.PeriodicAllowance): _54.PeriodicAllowanceAmino;
                fromAminoMsg(object: _54.PeriodicAllowanceAminoMsg): _54.PeriodicAllowance;
                toAminoMsg(message: _54.PeriodicAllowance): _54.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _54.PeriodicAllowanceProtoMsg): _54.PeriodicAllowance;
                toProto(message: _54.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _54.PeriodicAllowance): _54.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _54.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.AllowedMsgAllowance;
                fromPartial(object: Partial<_54.AllowedMsgAllowance>): _54.AllowedMsgAllowance;
                fromAmino(object: _54.AllowedMsgAllowanceAmino): _54.AllowedMsgAllowance;
                toAmino(message: _54.AllowedMsgAllowance): _54.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _54.AllowedMsgAllowanceAminoMsg): _54.AllowedMsgAllowance;
                toAminoMsg(message: _54.AllowedMsgAllowance): _54.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _54.AllowedMsgAllowanceProtoMsg): _54.AllowedMsgAllowance;
                toProto(message: _54.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _54.AllowedMsgAllowance): _54.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _54.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.Grant;
                fromPartial(object: Partial<_54.Grant>): _54.Grant;
                fromAmino(object: _54.GrantAmino): _54.Grant;
                toAmino(message: _54.Grant): _54.GrantAmino;
                fromAminoMsg(object: _54.GrantAminoMsg): _54.Grant;
                toAminoMsg(message: _54.Grant): _54.GrantAminoMsg;
                fromProtoMsg(message: _54.GrantProtoMsg): _54.Grant;
                toProto(message: _54.Grant): Uint8Array;
                toProtoMsg(message: _54.Grant): _54.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _213.MsgClientImpl;
            QueryClientImpl: typeof _197.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _61.QueryProposalRequest): Promise<_61.QueryProposalResponse>;
                proposals(request: _61.QueryProposalsRequest): Promise<_61.QueryProposalsResponse>;
                vote(request: _61.QueryVoteRequest): Promise<_61.QueryVoteResponse>;
                votes(request: _61.QueryVotesRequest): Promise<_61.QueryVotesResponse>;
                params(request: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                deposit(request: _61.QueryDepositRequest): Promise<_61.QueryDepositResponse>;
                deposits(request: _61.QueryDepositsRequest): Promise<_61.QueryDepositsResponse>;
                tallyResult(request: _61.QueryTallyResultRequest): Promise<_61.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _178.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _62.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _62.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _62.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _62.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _62.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _62.MsgExecLegacyContent;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: _62.MsgVote;
                    };
                    voteWeighted(value: _62.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _62.MsgVoteWeighted;
                    };
                    deposit(value: _62.MsgDeposit): {
                        typeUrl: string;
                        value: _62.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _62.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _62.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _62.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _62.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _62.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _62.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _62.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _62.MsgExecLegacyContent;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: _62.MsgVote;
                    };
                    voteWeighted(value: _62.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _62.MsgVoteWeighted;
                    };
                    deposit(value: _62.MsgDeposit): {
                        typeUrl: string;
                        value: _62.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _62.MsgSubmitProposal) => _62.MsgSubmitProposalAmino;
                    fromAmino: (object: _62.MsgSubmitProposalAmino) => _62.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _62.MsgExecLegacyContent) => _62.MsgExecLegacyContentAmino;
                    fromAmino: (object: _62.MsgExecLegacyContentAmino) => _62.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _62.MsgVote) => _62.MsgVoteAmino;
                    fromAmino: (object: _62.MsgVoteAmino) => _62.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _62.MsgVoteWeighted) => _62.MsgVoteWeightedAmino;
                    fromAmino: (object: _62.MsgVoteWeightedAmino) => _62.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _62.MsgDeposit) => _62.MsgDepositAmino;
                    fromAmino: (object: _62.MsgDepositAmino) => _62.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _62.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgSubmitProposal;
                fromPartial(object: Partial<_62.MsgSubmitProposal>): _62.MsgSubmitProposal;
                fromAmino(object: _62.MsgSubmitProposalAmino): _62.MsgSubmitProposal;
                toAmino(message: _62.MsgSubmitProposal): _62.MsgSubmitProposalAmino;
                fromAminoMsg(object: _62.MsgSubmitProposalAminoMsg): _62.MsgSubmitProposal;
                toAminoMsg(message: _62.MsgSubmitProposal): _62.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _62.MsgSubmitProposalProtoMsg): _62.MsgSubmitProposal;
                toProto(message: _62.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _62.MsgSubmitProposal): _62.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _62.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_62.MsgSubmitProposalResponse>): _62.MsgSubmitProposalResponse;
                fromAmino(object: _62.MsgSubmitProposalResponseAmino): _62.MsgSubmitProposalResponse;
                toAmino(message: _62.MsgSubmitProposalResponse): _62.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _62.MsgSubmitProposalResponseAminoMsg): _62.MsgSubmitProposalResponse;
                toAminoMsg(message: _62.MsgSubmitProposalResponse): _62.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _62.MsgSubmitProposalResponseProtoMsg): _62.MsgSubmitProposalResponse;
                toProto(message: _62.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _62.MsgSubmitProposalResponse): _62.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _62.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgExecLegacyContent;
                fromPartial(object: Partial<_62.MsgExecLegacyContent>): _62.MsgExecLegacyContent;
                fromAmino(object: _62.MsgExecLegacyContentAmino): _62.MsgExecLegacyContent;
                toAmino(message: _62.MsgExecLegacyContent): _62.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _62.MsgExecLegacyContentAminoMsg): _62.MsgExecLegacyContent;
                toAminoMsg(message: _62.MsgExecLegacyContent): _62.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _62.MsgExecLegacyContentProtoMsg): _62.MsgExecLegacyContent;
                toProto(message: _62.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _62.MsgExecLegacyContent): _62.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _62.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_62.MsgExecLegacyContentResponse>): _62.MsgExecLegacyContentResponse;
                fromAmino(_: _62.MsgExecLegacyContentResponseAmino): _62.MsgExecLegacyContentResponse;
                toAmino(_: _62.MsgExecLegacyContentResponse): _62.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _62.MsgExecLegacyContentResponseAminoMsg): _62.MsgExecLegacyContentResponse;
                toAminoMsg(message: _62.MsgExecLegacyContentResponse): _62.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _62.MsgExecLegacyContentResponseProtoMsg): _62.MsgExecLegacyContentResponse;
                toProto(message: _62.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _62.MsgExecLegacyContentResponse): _62.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _62.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgVote;
                fromPartial(object: Partial<_62.MsgVote>): _62.MsgVote;
                fromAmino(object: _62.MsgVoteAmino): _62.MsgVote;
                toAmino(message: _62.MsgVote): _62.MsgVoteAmino;
                fromAminoMsg(object: _62.MsgVoteAminoMsg): _62.MsgVote;
                toAminoMsg(message: _62.MsgVote): _62.MsgVoteAminoMsg;
                fromProtoMsg(message: _62.MsgVoteProtoMsg): _62.MsgVote;
                toProto(message: _62.MsgVote): Uint8Array;
                toProtoMsg(message: _62.MsgVote): _62.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _62.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.MsgVoteResponse;
                fromPartial(_: Partial<_62.MsgVoteResponse>): _62.MsgVoteResponse;
                fromAmino(_: _62.MsgVoteResponseAmino): _62.MsgVoteResponse;
                toAmino(_: _62.MsgVoteResponse): _62.MsgVoteResponseAmino;
                fromAminoMsg(object: _62.MsgVoteResponseAminoMsg): _62.MsgVoteResponse;
                toAminoMsg(message: _62.MsgVoteResponse): _62.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _62.MsgVoteResponseProtoMsg): _62.MsgVoteResponse;
                toProto(message: _62.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _62.MsgVoteResponse): _62.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _62.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgVoteWeighted;
                fromPartial(object: Partial<_62.MsgVoteWeighted>): _62.MsgVoteWeighted;
                fromAmino(object: _62.MsgVoteWeightedAmino): _62.MsgVoteWeighted;
                toAmino(message: _62.MsgVoteWeighted): _62.MsgVoteWeightedAmino;
                fromAminoMsg(object: _62.MsgVoteWeightedAminoMsg): _62.MsgVoteWeighted;
                toAminoMsg(message: _62.MsgVoteWeighted): _62.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _62.MsgVoteWeightedProtoMsg): _62.MsgVoteWeighted;
                toProto(message: _62.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _62.MsgVoteWeighted): _62.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _62.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_62.MsgVoteWeightedResponse>): _62.MsgVoteWeightedResponse;
                fromAmino(_: _62.MsgVoteWeightedResponseAmino): _62.MsgVoteWeightedResponse;
                toAmino(_: _62.MsgVoteWeightedResponse): _62.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _62.MsgVoteWeightedResponseAminoMsg): _62.MsgVoteWeightedResponse;
                toAminoMsg(message: _62.MsgVoteWeightedResponse): _62.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _62.MsgVoteWeightedResponseProtoMsg): _62.MsgVoteWeightedResponse;
                toProto(message: _62.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _62.MsgVoteWeightedResponse): _62.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _62.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgDeposit;
                fromPartial(object: Partial<_62.MsgDeposit>): _62.MsgDeposit;
                fromAmino(object: _62.MsgDepositAmino): _62.MsgDeposit;
                toAmino(message: _62.MsgDeposit): _62.MsgDepositAmino;
                fromAminoMsg(object: _62.MsgDepositAminoMsg): _62.MsgDeposit;
                toAminoMsg(message: _62.MsgDeposit): _62.MsgDepositAminoMsg;
                fromProtoMsg(message: _62.MsgDepositProtoMsg): _62.MsgDeposit;
                toProto(message: _62.MsgDeposit): Uint8Array;
                toProtoMsg(message: _62.MsgDeposit): _62.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _62.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.MsgDepositResponse;
                fromPartial(_: Partial<_62.MsgDepositResponse>): _62.MsgDepositResponse;
                fromAmino(_: _62.MsgDepositResponseAmino): _62.MsgDepositResponse;
                toAmino(_: _62.MsgDepositResponse): _62.MsgDepositResponseAmino;
                fromAminoMsg(object: _62.MsgDepositResponseAminoMsg): _62.MsgDepositResponse;
                toAminoMsg(message: _62.MsgDepositResponse): _62.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _62.MsgDepositResponseProtoMsg): _62.MsgDepositResponse;
                toProto(message: _62.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _62.MsgDepositResponse): _62.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _64.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _61.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryProposalRequest;
                fromPartial(object: Partial<_61.QueryProposalRequest>): _61.QueryProposalRequest;
                fromAmino(object: _61.QueryProposalRequestAmino): _61.QueryProposalRequest;
                toAmino(message: _61.QueryProposalRequest): _61.QueryProposalRequestAmino;
                fromAminoMsg(object: _61.QueryProposalRequestAminoMsg): _61.QueryProposalRequest;
                toAminoMsg(message: _61.QueryProposalRequest): _61.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _61.QueryProposalRequestProtoMsg): _61.QueryProposalRequest;
                toProto(message: _61.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _61.QueryProposalRequest): _61.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _61.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryProposalResponse;
                fromPartial(object: Partial<_61.QueryProposalResponse>): _61.QueryProposalResponse;
                fromAmino(object: _61.QueryProposalResponseAmino): _61.QueryProposalResponse;
                toAmino(message: _61.QueryProposalResponse): _61.QueryProposalResponseAmino;
                fromAminoMsg(object: _61.QueryProposalResponseAminoMsg): _61.QueryProposalResponse;
                toAminoMsg(message: _61.QueryProposalResponse): _61.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _61.QueryProposalResponseProtoMsg): _61.QueryProposalResponse;
                toProto(message: _61.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _61.QueryProposalResponse): _61.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _61.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryProposalsRequest;
                fromPartial(object: Partial<_61.QueryProposalsRequest>): _61.QueryProposalsRequest;
                fromAmino(object: _61.QueryProposalsRequestAmino): _61.QueryProposalsRequest;
                toAmino(message: _61.QueryProposalsRequest): _61.QueryProposalsRequestAmino;
                fromAminoMsg(object: _61.QueryProposalsRequestAminoMsg): _61.QueryProposalsRequest;
                toAminoMsg(message: _61.QueryProposalsRequest): _61.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _61.QueryProposalsRequestProtoMsg): _61.QueryProposalsRequest;
                toProto(message: _61.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _61.QueryProposalsRequest): _61.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _61.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryProposalsResponse;
                fromPartial(object: Partial<_61.QueryProposalsResponse>): _61.QueryProposalsResponse;
                fromAmino(object: _61.QueryProposalsResponseAmino): _61.QueryProposalsResponse;
                toAmino(message: _61.QueryProposalsResponse): _61.QueryProposalsResponseAmino;
                fromAminoMsg(object: _61.QueryProposalsResponseAminoMsg): _61.QueryProposalsResponse;
                toAminoMsg(message: _61.QueryProposalsResponse): _61.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _61.QueryProposalsResponseProtoMsg): _61.QueryProposalsResponse;
                toProto(message: _61.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _61.QueryProposalsResponse): _61.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _61.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryVoteRequest;
                fromPartial(object: Partial<_61.QueryVoteRequest>): _61.QueryVoteRequest;
                fromAmino(object: _61.QueryVoteRequestAmino): _61.QueryVoteRequest;
                toAmino(message: _61.QueryVoteRequest): _61.QueryVoteRequestAmino;
                fromAminoMsg(object: _61.QueryVoteRequestAminoMsg): _61.QueryVoteRequest;
                toAminoMsg(message: _61.QueryVoteRequest): _61.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _61.QueryVoteRequestProtoMsg): _61.QueryVoteRequest;
                toProto(message: _61.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _61.QueryVoteRequest): _61.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _61.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryVoteResponse;
                fromPartial(object: Partial<_61.QueryVoteResponse>): _61.QueryVoteResponse;
                fromAmino(object: _61.QueryVoteResponseAmino): _61.QueryVoteResponse;
                toAmino(message: _61.QueryVoteResponse): _61.QueryVoteResponseAmino;
                fromAminoMsg(object: _61.QueryVoteResponseAminoMsg): _61.QueryVoteResponse;
                toAminoMsg(message: _61.QueryVoteResponse): _61.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _61.QueryVoteResponseProtoMsg): _61.QueryVoteResponse;
                toProto(message: _61.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _61.QueryVoteResponse): _61.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _61.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryVotesRequest;
                fromPartial(object: Partial<_61.QueryVotesRequest>): _61.QueryVotesRequest;
                fromAmino(object: _61.QueryVotesRequestAmino): _61.QueryVotesRequest;
                toAmino(message: _61.QueryVotesRequest): _61.QueryVotesRequestAmino;
                fromAminoMsg(object: _61.QueryVotesRequestAminoMsg): _61.QueryVotesRequest;
                toAminoMsg(message: _61.QueryVotesRequest): _61.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _61.QueryVotesRequestProtoMsg): _61.QueryVotesRequest;
                toProto(message: _61.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _61.QueryVotesRequest): _61.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _61.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryVotesResponse;
                fromPartial(object: Partial<_61.QueryVotesResponse>): _61.QueryVotesResponse;
                fromAmino(object: _61.QueryVotesResponseAmino): _61.QueryVotesResponse;
                toAmino(message: _61.QueryVotesResponse): _61.QueryVotesResponseAmino;
                fromAminoMsg(object: _61.QueryVotesResponseAminoMsg): _61.QueryVotesResponse;
                toAminoMsg(message: _61.QueryVotesResponse): _61.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _61.QueryVotesResponseProtoMsg): _61.QueryVotesResponse;
                toProto(message: _61.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _61.QueryVotesResponse): _61.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _61.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryParamsRequest;
                fromPartial(object: Partial<_61.QueryParamsRequest>): _61.QueryParamsRequest;
                fromAmino(object: _61.QueryParamsRequestAmino): _61.QueryParamsRequest;
                toAmino(message: _61.QueryParamsRequest): _61.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _61.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDepositRequest;
                fromPartial(object: Partial<_61.QueryDepositRequest>): _61.QueryDepositRequest;
                fromAmino(object: _61.QueryDepositRequestAmino): _61.QueryDepositRequest;
                toAmino(message: _61.QueryDepositRequest): _61.QueryDepositRequestAmino;
                fromAminoMsg(object: _61.QueryDepositRequestAminoMsg): _61.QueryDepositRequest;
                toAminoMsg(message: _61.QueryDepositRequest): _61.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _61.QueryDepositRequestProtoMsg): _61.QueryDepositRequest;
                toProto(message: _61.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _61.QueryDepositRequest): _61.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _61.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDepositResponse;
                fromPartial(object: Partial<_61.QueryDepositResponse>): _61.QueryDepositResponse;
                fromAmino(object: _61.QueryDepositResponseAmino): _61.QueryDepositResponse;
                toAmino(message: _61.QueryDepositResponse): _61.QueryDepositResponseAmino;
                fromAminoMsg(object: _61.QueryDepositResponseAminoMsg): _61.QueryDepositResponse;
                toAminoMsg(message: _61.QueryDepositResponse): _61.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _61.QueryDepositResponseProtoMsg): _61.QueryDepositResponse;
                toProto(message: _61.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _61.QueryDepositResponse): _61.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _61.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDepositsRequest;
                fromPartial(object: Partial<_61.QueryDepositsRequest>): _61.QueryDepositsRequest;
                fromAmino(object: _61.QueryDepositsRequestAmino): _61.QueryDepositsRequest;
                toAmino(message: _61.QueryDepositsRequest): _61.QueryDepositsRequestAmino;
                fromAminoMsg(object: _61.QueryDepositsRequestAminoMsg): _61.QueryDepositsRequest;
                toAminoMsg(message: _61.QueryDepositsRequest): _61.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _61.QueryDepositsRequestProtoMsg): _61.QueryDepositsRequest;
                toProto(message: _61.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _61.QueryDepositsRequest): _61.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _61.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDepositsResponse;
                fromPartial(object: Partial<_61.QueryDepositsResponse>): _61.QueryDepositsResponse;
                fromAmino(object: _61.QueryDepositsResponseAmino): _61.QueryDepositsResponse;
                toAmino(message: _61.QueryDepositsResponse): _61.QueryDepositsResponseAmino;
                fromAminoMsg(object: _61.QueryDepositsResponseAminoMsg): _61.QueryDepositsResponse;
                toAminoMsg(message: _61.QueryDepositsResponse): _61.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _61.QueryDepositsResponseProtoMsg): _61.QueryDepositsResponse;
                toProto(message: _61.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _61.QueryDepositsResponse): _61.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _61.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryTallyResultRequest;
                fromPartial(object: Partial<_61.QueryTallyResultRequest>): _61.QueryTallyResultRequest;
                fromAmino(object: _61.QueryTallyResultRequestAmino): _61.QueryTallyResultRequest;
                toAmino(message: _61.QueryTallyResultRequest): _61.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _61.QueryTallyResultRequestAminoMsg): _61.QueryTallyResultRequest;
                toAminoMsg(message: _61.QueryTallyResultRequest): _61.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _61.QueryTallyResultRequestProtoMsg): _61.QueryTallyResultRequest;
                toProto(message: _61.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _61.QueryTallyResultRequest): _61.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _61.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryTallyResultResponse;
                fromPartial(object: Partial<_61.QueryTallyResultResponse>): _61.QueryTallyResultResponse;
                fromAmino(object: _61.QueryTallyResultResponseAmino): _61.QueryTallyResultResponse;
                toAmino(message: _61.QueryTallyResultResponse): _61.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _61.QueryTallyResultResponseAminoMsg): _61.QueryTallyResultResponse;
                toAminoMsg(message: _61.QueryTallyResultResponse): _61.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _61.QueryTallyResultResponseProtoMsg): _61.QueryTallyResultResponse;
                toProto(message: _61.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _61.QueryTallyResultResponse): _61.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _60.VoteOption;
            voteOptionToJSON(object: _60.VoteOption): string;
            proposalStatusFromJSON(object: any): _60.ProposalStatus;
            proposalStatusToJSON(object: _60.ProposalStatus): string;
            VoteOption: typeof _60.VoteOption;
            VoteOptionSDKType: typeof _60.VoteOption;
            VoteOptionAmino: typeof _60.VoteOption;
            ProposalStatus: typeof _60.ProposalStatus;
            ProposalStatusSDKType: typeof _60.ProposalStatus;
            ProposalStatusAmino: typeof _60.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _60.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.WeightedVoteOption;
                fromPartial(object: Partial<_60.WeightedVoteOption>): _60.WeightedVoteOption;
                fromAmino(object: _60.WeightedVoteOptionAmino): _60.WeightedVoteOption;
                toAmino(message: _60.WeightedVoteOption): _60.WeightedVoteOptionAmino;
                fromAminoMsg(object: _60.WeightedVoteOptionAminoMsg): _60.WeightedVoteOption;
                toAminoMsg(message: _60.WeightedVoteOption): _60.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _60.WeightedVoteOptionProtoMsg): _60.WeightedVoteOption;
                toProto(message: _60.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _60.WeightedVoteOption): _60.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _60.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.Deposit;
                fromPartial(object: Partial<_60.Deposit>): _60.Deposit;
                fromAmino(object: _60.DepositAmino): _60.Deposit;
                toAmino(message: _60.Deposit): _60.DepositAmino;
                fromAminoMsg(object: _60.DepositAminoMsg): _60.Deposit;
                toAminoMsg(message: _60.Deposit): _60.DepositAminoMsg;
                fromProtoMsg(message: _60.DepositProtoMsg): _60.Deposit;
                toProto(message: _60.Deposit): Uint8Array;
                toProtoMsg(message: _60.Deposit): _60.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _60.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.Proposal;
                fromPartial(object: Partial<_60.Proposal>): _60.Proposal;
                fromAmino(object: _60.ProposalAmino): _60.Proposal;
                toAmino(message: _60.Proposal): _60.ProposalAmino;
                fromAminoMsg(object: _60.ProposalAminoMsg): _60.Proposal;
                toAminoMsg(message: _60.Proposal): _60.ProposalAminoMsg;
                fromProtoMsg(message: _60.ProposalProtoMsg): _60.Proposal;
                toProto(message: _60.Proposal): Uint8Array;
                toProtoMsg(message: _60.Proposal): _60.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _60.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.TallyResult;
                fromPartial(object: Partial<_60.TallyResult>): _60.TallyResult;
                fromAmino(object: _60.TallyResultAmino): _60.TallyResult;
                toAmino(message: _60.TallyResult): _60.TallyResultAmino;
                fromAminoMsg(object: _60.TallyResultAminoMsg): _60.TallyResult;
                toAminoMsg(message: _60.TallyResult): _60.TallyResultAminoMsg;
                fromProtoMsg(message: _60.TallyResultProtoMsg): _60.TallyResult;
                toProto(message: _60.TallyResult): Uint8Array;
                toProtoMsg(message: _60.TallyResult): _60.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _60.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.Vote;
                fromPartial(object: Partial<_60.Vote>): _60.Vote;
                fromAmino(object: _60.VoteAmino): _60.Vote;
                toAmino(message: _60.Vote): _60.VoteAmino;
                fromAminoMsg(object: _60.VoteAminoMsg): _60.Vote;
                toAminoMsg(message: _60.Vote): _60.VoteAminoMsg;
                fromProtoMsg(message: _60.VoteProtoMsg): _60.Vote;
                toProto(message: _60.Vote): Uint8Array;
                toProtoMsg(message: _60.Vote): _60.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _60.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.DepositParams;
                fromPartial(object: Partial<_60.DepositParams>): _60.DepositParams;
                fromAmino(object: _60.DepositParamsAmino): _60.DepositParams;
                toAmino(message: _60.DepositParams): _60.DepositParamsAmino;
                fromAminoMsg(object: _60.DepositParamsAminoMsg): _60.DepositParams;
                toAminoMsg(message: _60.DepositParams): _60.DepositParamsAminoMsg;
                fromProtoMsg(message: _60.DepositParamsProtoMsg): _60.DepositParams;
                toProto(message: _60.DepositParams): Uint8Array;
                toProtoMsg(message: _60.DepositParams): _60.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _60.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.VotingParams;
                fromPartial(object: Partial<_60.VotingParams>): _60.VotingParams;
                fromAmino(object: _60.VotingParamsAmino): _60.VotingParams;
                toAmino(message: _60.VotingParams): _60.VotingParamsAmino;
                fromAminoMsg(object: _60.VotingParamsAminoMsg): _60.VotingParams;
                toAminoMsg(message: _60.VotingParams): _60.VotingParamsAminoMsg;
                fromProtoMsg(message: _60.VotingParamsProtoMsg): _60.VotingParams;
                toProto(message: _60.VotingParams): Uint8Array;
                toProtoMsg(message: _60.VotingParams): _60.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _60.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.TallyParams;
                fromPartial(object: Partial<_60.TallyParams>): _60.TallyParams;
                fromAmino(object: _60.TallyParamsAmino): _60.TallyParams;
                toAmino(message: _60.TallyParams): _60.TallyParamsAmino;
                fromAminoMsg(object: _60.TallyParamsAminoMsg): _60.TallyParams;
                toAminoMsg(message: _60.TallyParams): _60.TallyParamsAminoMsg;
                fromProtoMsg(message: _60.TallyParamsProtoMsg): _60.TallyParams;
                toProto(message: _60.TallyParams): Uint8Array;
                toProtoMsg(message: _60.TallyParams): _60.TallyParamsProtoMsg;
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
        const v1beta1: {
            MsgClientImpl: typeof _214.MsgClientImpl;
            QueryClientImpl: typeof _198.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _65.QueryProposalRequest): Promise<_65.QueryProposalResponse>;
                proposals(request: _65.QueryProposalsRequest): Promise<_65.QueryProposalsResponse>;
                vote(request: _65.QueryVoteRequest): Promise<_65.QueryVoteResponse>;
                votes(request: _65.QueryVotesRequest): Promise<_65.QueryVotesResponse>;
                params(request: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                deposit(request: _65.QueryDepositRequest): Promise<_65.QueryDepositResponse>;
                deposits(request: _65.QueryDepositsRequest): Promise<_65.QueryDepositsResponse>;
                tallyResult(request: _65.QueryTallyResultRequest): Promise<_65.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _179.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _66.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _66.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _66.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _66.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _66.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _66.MsgSubmitProposal;
                    };
                    vote(value: _66.MsgVote): {
                        typeUrl: string;
                        value: _66.MsgVote;
                    };
                    voteWeighted(value: _66.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _66.MsgVoteWeighted;
                    };
                    deposit(value: _66.MsgDeposit): {
                        typeUrl: string;
                        value: _66.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _66.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _66.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _66.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _66.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _66.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _66.MsgSubmitProposal;
                    };
                    vote(value: _66.MsgVote): {
                        typeUrl: string;
                        value: _66.MsgVote;
                    };
                    voteWeighted(value: _66.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _66.MsgVoteWeighted;
                    };
                    deposit(value: _66.MsgDeposit): {
                        typeUrl: string;
                        value: _66.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _66.MsgSubmitProposal) => _66.MsgSubmitProposalAmino;
                    fromAmino: (object: _66.MsgSubmitProposalAmino) => _66.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _66.MsgVote) => _66.MsgVoteAmino;
                    fromAmino: (object: _66.MsgVoteAmino) => _66.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _66.MsgVoteWeighted) => _66.MsgVoteWeightedAmino;
                    fromAmino: (object: _66.MsgVoteWeightedAmino) => _66.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _66.MsgDeposit) => _66.MsgDepositAmino;
                    fromAmino: (object: _66.MsgDepositAmino) => _66.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _66.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.MsgSubmitProposal;
                fromPartial(object: Partial<_66.MsgSubmitProposal>): _66.MsgSubmitProposal;
                fromAmino(object: _66.MsgSubmitProposalAmino): _66.MsgSubmitProposal;
                toAmino(message: _66.MsgSubmitProposal): _66.MsgSubmitProposalAmino;
                fromAminoMsg(object: _66.MsgSubmitProposalAminoMsg): _66.MsgSubmitProposal;
                toAminoMsg(message: _66.MsgSubmitProposal): _66.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _66.MsgSubmitProposalProtoMsg): _66.MsgSubmitProposal;
                toProto(message: _66.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _66.MsgSubmitProposal): _66.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _66.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_66.MsgSubmitProposalResponse>): _66.MsgSubmitProposalResponse;
                fromAmino(object: _66.MsgSubmitProposalResponseAmino): _66.MsgSubmitProposalResponse;
                toAmino(message: _66.MsgSubmitProposalResponse): _66.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _66.MsgSubmitProposalResponseAminoMsg): _66.MsgSubmitProposalResponse;
                toAminoMsg(message: _66.MsgSubmitProposalResponse): _66.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _66.MsgSubmitProposalResponseProtoMsg): _66.MsgSubmitProposalResponse;
                toProto(message: _66.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _66.MsgSubmitProposalResponse): _66.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _66.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.MsgVote;
                fromPartial(object: Partial<_66.MsgVote>): _66.MsgVote;
                fromAmino(object: _66.MsgVoteAmino): _66.MsgVote;
                toAmino(message: _66.MsgVote): _66.MsgVoteAmino;
                fromAminoMsg(object: _66.MsgVoteAminoMsg): _66.MsgVote;
                toAminoMsg(message: _66.MsgVote): _66.MsgVoteAminoMsg;
                fromProtoMsg(message: _66.MsgVoteProtoMsg): _66.MsgVote;
                toProto(message: _66.MsgVote): Uint8Array;
                toProtoMsg(message: _66.MsgVote): _66.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _66.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _66.MsgVoteResponse;
                fromPartial(_: Partial<_66.MsgVoteResponse>): _66.MsgVoteResponse;
                fromAmino(_: _66.MsgVoteResponseAmino): _66.MsgVoteResponse;
                toAmino(_: _66.MsgVoteResponse): _66.MsgVoteResponseAmino;
                fromAminoMsg(object: _66.MsgVoteResponseAminoMsg): _66.MsgVoteResponse;
                toAminoMsg(message: _66.MsgVoteResponse): _66.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _66.MsgVoteResponseProtoMsg): _66.MsgVoteResponse;
                toProto(message: _66.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _66.MsgVoteResponse): _66.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _66.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.MsgVoteWeighted;
                fromPartial(object: Partial<_66.MsgVoteWeighted>): _66.MsgVoteWeighted;
                fromAmino(object: _66.MsgVoteWeightedAmino): _66.MsgVoteWeighted;
                toAmino(message: _66.MsgVoteWeighted): _66.MsgVoteWeightedAmino;
                fromAminoMsg(object: _66.MsgVoteWeightedAminoMsg): _66.MsgVoteWeighted;
                toAminoMsg(message: _66.MsgVoteWeighted): _66.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _66.MsgVoteWeightedProtoMsg): _66.MsgVoteWeighted;
                toProto(message: _66.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _66.MsgVoteWeighted): _66.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _66.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _66.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_66.MsgVoteWeightedResponse>): _66.MsgVoteWeightedResponse;
                fromAmino(_: _66.MsgVoteWeightedResponseAmino): _66.MsgVoteWeightedResponse;
                toAmino(_: _66.MsgVoteWeightedResponse): _66.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _66.MsgVoteWeightedResponseAminoMsg): _66.MsgVoteWeightedResponse;
                toAminoMsg(message: _66.MsgVoteWeightedResponse): _66.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _66.MsgVoteWeightedResponseProtoMsg): _66.MsgVoteWeightedResponse;
                toProto(message: _66.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _66.MsgVoteWeightedResponse): _66.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _66.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.MsgDeposit;
                fromPartial(object: Partial<_66.MsgDeposit>): _66.MsgDeposit;
                fromAmino(object: _66.MsgDepositAmino): _66.MsgDeposit;
                toAmino(message: _66.MsgDeposit): _66.MsgDepositAmino;
                fromAminoMsg(object: _66.MsgDepositAminoMsg): _66.MsgDeposit;
                toAminoMsg(message: _66.MsgDeposit): _66.MsgDepositAminoMsg;
                fromProtoMsg(message: _66.MsgDepositProtoMsg): _66.MsgDeposit;
                toProto(message: _66.MsgDeposit): Uint8Array;
                toProtoMsg(message: _66.MsgDeposit): _66.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _66.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _66.MsgDepositResponse;
                fromPartial(_: Partial<_66.MsgDepositResponse>): _66.MsgDepositResponse;
                fromAmino(_: _66.MsgDepositResponseAmino): _66.MsgDepositResponse;
                toAmino(_: _66.MsgDepositResponse): _66.MsgDepositResponseAmino;
                fromAminoMsg(object: _66.MsgDepositResponseAminoMsg): _66.MsgDepositResponse;
                toAminoMsg(message: _66.MsgDepositResponse): _66.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _66.MsgDepositResponseProtoMsg): _66.MsgDepositResponse;
                toProto(message: _66.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _66.MsgDepositResponse): _66.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _64.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _65.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryProposalRequest;
                fromPartial(object: Partial<_65.QueryProposalRequest>): _65.QueryProposalRequest;
                fromAmino(object: _65.QueryProposalRequestAmino): _65.QueryProposalRequest;
                toAmino(message: _65.QueryProposalRequest): _65.QueryProposalRequestAmino;
                fromAminoMsg(object: _65.QueryProposalRequestAminoMsg): _65.QueryProposalRequest;
                toAminoMsg(message: _65.QueryProposalRequest): _65.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _65.QueryProposalRequestProtoMsg): _65.QueryProposalRequest;
                toProto(message: _65.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _65.QueryProposalRequest): _65.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _65.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryProposalResponse;
                fromPartial(object: Partial<_65.QueryProposalResponse>): _65.QueryProposalResponse;
                fromAmino(object: _65.QueryProposalResponseAmino): _65.QueryProposalResponse;
                toAmino(message: _65.QueryProposalResponse): _65.QueryProposalResponseAmino;
                fromAminoMsg(object: _65.QueryProposalResponseAminoMsg): _65.QueryProposalResponse;
                toAminoMsg(message: _65.QueryProposalResponse): _65.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _65.QueryProposalResponseProtoMsg): _65.QueryProposalResponse;
                toProto(message: _65.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _65.QueryProposalResponse): _65.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _65.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryProposalsRequest;
                fromPartial(object: Partial<_65.QueryProposalsRequest>): _65.QueryProposalsRequest;
                fromAmino(object: _65.QueryProposalsRequestAmino): _65.QueryProposalsRequest;
                toAmino(message: _65.QueryProposalsRequest): _65.QueryProposalsRequestAmino;
                fromAminoMsg(object: _65.QueryProposalsRequestAminoMsg): _65.QueryProposalsRequest;
                toAminoMsg(message: _65.QueryProposalsRequest): _65.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _65.QueryProposalsRequestProtoMsg): _65.QueryProposalsRequest;
                toProto(message: _65.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _65.QueryProposalsRequest): _65.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _65.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryProposalsResponse;
                fromPartial(object: Partial<_65.QueryProposalsResponse>): _65.QueryProposalsResponse;
                fromAmino(object: _65.QueryProposalsResponseAmino): _65.QueryProposalsResponse;
                toAmino(message: _65.QueryProposalsResponse): _65.QueryProposalsResponseAmino;
                fromAminoMsg(object: _65.QueryProposalsResponseAminoMsg): _65.QueryProposalsResponse;
                toAminoMsg(message: _65.QueryProposalsResponse): _65.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _65.QueryProposalsResponseProtoMsg): _65.QueryProposalsResponse;
                toProto(message: _65.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _65.QueryProposalsResponse): _65.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _65.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryVoteRequest;
                fromPartial(object: Partial<_65.QueryVoteRequest>): _65.QueryVoteRequest;
                fromAmino(object: _65.QueryVoteRequestAmino): _65.QueryVoteRequest;
                toAmino(message: _65.QueryVoteRequest): _65.QueryVoteRequestAmino;
                fromAminoMsg(object: _65.QueryVoteRequestAminoMsg): _65.QueryVoteRequest;
                toAminoMsg(message: _65.QueryVoteRequest): _65.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _65.QueryVoteRequestProtoMsg): _65.QueryVoteRequest;
                toProto(message: _65.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _65.QueryVoteRequest): _65.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _65.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryVoteResponse;
                fromPartial(object: Partial<_65.QueryVoteResponse>): _65.QueryVoteResponse;
                fromAmino(object: _65.QueryVoteResponseAmino): _65.QueryVoteResponse;
                toAmino(message: _65.QueryVoteResponse): _65.QueryVoteResponseAmino;
                fromAminoMsg(object: _65.QueryVoteResponseAminoMsg): _65.QueryVoteResponse;
                toAminoMsg(message: _65.QueryVoteResponse): _65.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _65.QueryVoteResponseProtoMsg): _65.QueryVoteResponse;
                toProto(message: _65.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _65.QueryVoteResponse): _65.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _65.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryVotesRequest;
                fromPartial(object: Partial<_65.QueryVotesRequest>): _65.QueryVotesRequest;
                fromAmino(object: _65.QueryVotesRequestAmino): _65.QueryVotesRequest;
                toAmino(message: _65.QueryVotesRequest): _65.QueryVotesRequestAmino;
                fromAminoMsg(object: _65.QueryVotesRequestAminoMsg): _65.QueryVotesRequest;
                toAminoMsg(message: _65.QueryVotesRequest): _65.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _65.QueryVotesRequestProtoMsg): _65.QueryVotesRequest;
                toProto(message: _65.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _65.QueryVotesRequest): _65.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _65.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryVotesResponse;
                fromPartial(object: Partial<_65.QueryVotesResponse>): _65.QueryVotesResponse;
                fromAmino(object: _65.QueryVotesResponseAmino): _65.QueryVotesResponse;
                toAmino(message: _65.QueryVotesResponse): _65.QueryVotesResponseAmino;
                fromAminoMsg(object: _65.QueryVotesResponseAminoMsg): _65.QueryVotesResponse;
                toAminoMsg(message: _65.QueryVotesResponse): _65.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _65.QueryVotesResponseProtoMsg): _65.QueryVotesResponse;
                toProto(message: _65.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _65.QueryVotesResponse): _65.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _65.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryParamsRequest;
                fromPartial(object: Partial<_65.QueryParamsRequest>): _65.QueryParamsRequest;
                fromAmino(object: _65.QueryParamsRequestAmino): _65.QueryParamsRequest;
                toAmino(message: _65.QueryParamsRequest): _65.QueryParamsRequestAmino;
                fromAminoMsg(object: _65.QueryParamsRequestAminoMsg): _65.QueryParamsRequest;
                toAminoMsg(message: _65.QueryParamsRequest): _65.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _65.QueryParamsRequestProtoMsg): _65.QueryParamsRequest;
                toProto(message: _65.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _65.QueryParamsRequest): _65.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _65.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryParamsResponse;
                fromPartial(object: Partial<_65.QueryParamsResponse>): _65.QueryParamsResponse;
                fromAmino(object: _65.QueryParamsResponseAmino): _65.QueryParamsResponse;
                toAmino(message: _65.QueryParamsResponse): _65.QueryParamsResponseAmino;
                fromAminoMsg(object: _65.QueryParamsResponseAminoMsg): _65.QueryParamsResponse;
                toAminoMsg(message: _65.QueryParamsResponse): _65.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _65.QueryParamsResponseProtoMsg): _65.QueryParamsResponse;
                toProto(message: _65.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _65.QueryParamsResponse): _65.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _65.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryDepositRequest;
                fromPartial(object: Partial<_65.QueryDepositRequest>): _65.QueryDepositRequest;
                fromAmino(object: _65.QueryDepositRequestAmino): _65.QueryDepositRequest;
                toAmino(message: _65.QueryDepositRequest): _65.QueryDepositRequestAmino;
                fromAminoMsg(object: _65.QueryDepositRequestAminoMsg): _65.QueryDepositRequest;
                toAminoMsg(message: _65.QueryDepositRequest): _65.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _65.QueryDepositRequestProtoMsg): _65.QueryDepositRequest;
                toProto(message: _65.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _65.QueryDepositRequest): _65.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _65.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryDepositResponse;
                fromPartial(object: Partial<_65.QueryDepositResponse>): _65.QueryDepositResponse;
                fromAmino(object: _65.QueryDepositResponseAmino): _65.QueryDepositResponse;
                toAmino(message: _65.QueryDepositResponse): _65.QueryDepositResponseAmino;
                fromAminoMsg(object: _65.QueryDepositResponseAminoMsg): _65.QueryDepositResponse;
                toAminoMsg(message: _65.QueryDepositResponse): _65.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _65.QueryDepositResponseProtoMsg): _65.QueryDepositResponse;
                toProto(message: _65.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _65.QueryDepositResponse): _65.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _65.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryDepositsRequest;
                fromPartial(object: Partial<_65.QueryDepositsRequest>): _65.QueryDepositsRequest;
                fromAmino(object: _65.QueryDepositsRequestAmino): _65.QueryDepositsRequest;
                toAmino(message: _65.QueryDepositsRequest): _65.QueryDepositsRequestAmino;
                fromAminoMsg(object: _65.QueryDepositsRequestAminoMsg): _65.QueryDepositsRequest;
                toAminoMsg(message: _65.QueryDepositsRequest): _65.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _65.QueryDepositsRequestProtoMsg): _65.QueryDepositsRequest;
                toProto(message: _65.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _65.QueryDepositsRequest): _65.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _65.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryDepositsResponse;
                fromPartial(object: Partial<_65.QueryDepositsResponse>): _65.QueryDepositsResponse;
                fromAmino(object: _65.QueryDepositsResponseAmino): _65.QueryDepositsResponse;
                toAmino(message: _65.QueryDepositsResponse): _65.QueryDepositsResponseAmino;
                fromAminoMsg(object: _65.QueryDepositsResponseAminoMsg): _65.QueryDepositsResponse;
                toAminoMsg(message: _65.QueryDepositsResponse): _65.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _65.QueryDepositsResponseProtoMsg): _65.QueryDepositsResponse;
                toProto(message: _65.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _65.QueryDepositsResponse): _65.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _65.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryTallyResultRequest;
                fromPartial(object: Partial<_65.QueryTallyResultRequest>): _65.QueryTallyResultRequest;
                fromAmino(object: _65.QueryTallyResultRequestAmino): _65.QueryTallyResultRequest;
                toAmino(message: _65.QueryTallyResultRequest): _65.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _65.QueryTallyResultRequestAminoMsg): _65.QueryTallyResultRequest;
                toAminoMsg(message: _65.QueryTallyResultRequest): _65.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _65.QueryTallyResultRequestProtoMsg): _65.QueryTallyResultRequest;
                toProto(message: _65.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _65.QueryTallyResultRequest): _65.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _65.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryTallyResultResponse;
                fromPartial(object: Partial<_65.QueryTallyResultResponse>): _65.QueryTallyResultResponse;
                fromAmino(object: _65.QueryTallyResultResponseAmino): _65.QueryTallyResultResponse;
                toAmino(message: _65.QueryTallyResultResponse): _65.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _65.QueryTallyResultResponseAminoMsg): _65.QueryTallyResultResponse;
                toAminoMsg(message: _65.QueryTallyResultResponse): _65.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _65.QueryTallyResultResponseProtoMsg): _65.QueryTallyResultResponse;
                toProto(message: _65.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _65.QueryTallyResultResponse): _65.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _64.VoteOption;
            voteOptionToJSON(object: _64.VoteOption): string;
            proposalStatusFromJSON(object: any): _64.ProposalStatus;
            proposalStatusToJSON(object: _64.ProposalStatus): string;
            VoteOption: typeof _64.VoteOption;
            VoteOptionSDKType: typeof _64.VoteOption;
            VoteOptionAmino: typeof _64.VoteOption;
            ProposalStatus: typeof _64.ProposalStatus;
            ProposalStatusSDKType: typeof _64.ProposalStatus;
            ProposalStatusAmino: typeof _64.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _64.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.WeightedVoteOption;
                fromPartial(object: Partial<_64.WeightedVoteOption>): _64.WeightedVoteOption;
                fromAmino(object: _64.WeightedVoteOptionAmino): _64.WeightedVoteOption;
                toAmino(message: _64.WeightedVoteOption): _64.WeightedVoteOptionAmino;
                fromAminoMsg(object: _64.WeightedVoteOptionAminoMsg): _64.WeightedVoteOption;
                toAminoMsg(message: _64.WeightedVoteOption): _64.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _64.WeightedVoteOptionProtoMsg): _64.WeightedVoteOption;
                toProto(message: _64.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _64.WeightedVoteOption): _64.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _64.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.TextProposal;
                fromPartial(object: Partial<_64.TextProposal>): _64.TextProposal;
                fromAmino(object: _64.TextProposalAmino): _64.TextProposal;
                toAmino(message: _64.TextProposal): _64.TextProposalAmino;
                fromAminoMsg(object: _64.TextProposalAminoMsg): _64.TextProposal;
                toAminoMsg(message: _64.TextProposal): _64.TextProposalAminoMsg;
                fromProtoMsg(message: _64.TextProposalProtoMsg): _64.TextProposal;
                toProto(message: _64.TextProposal): Uint8Array;
                toProtoMsg(message: _64.TextProposal): _64.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _64.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.Deposit;
                fromPartial(object: Partial<_64.Deposit>): _64.Deposit;
                fromAmino(object: _64.DepositAmino): _64.Deposit;
                toAmino(message: _64.Deposit): _64.DepositAmino;
                fromAminoMsg(object: _64.DepositAminoMsg): _64.Deposit;
                toAminoMsg(message: _64.Deposit): _64.DepositAminoMsg;
                fromProtoMsg(message: _64.DepositProtoMsg): _64.Deposit;
                toProto(message: _64.Deposit): Uint8Array;
                toProtoMsg(message: _64.Deposit): _64.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _64.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.Proposal;
                fromPartial(object: Partial<_64.Proposal>): _64.Proposal;
                fromAmino(object: _64.ProposalAmino): _64.Proposal;
                toAmino(message: _64.Proposal): _64.ProposalAmino;
                fromAminoMsg(object: _64.ProposalAminoMsg): _64.Proposal;
                toAminoMsg(message: _64.Proposal): _64.ProposalAminoMsg;
                fromProtoMsg(message: _64.ProposalProtoMsg): _64.Proposal;
                toProto(message: _64.Proposal): Uint8Array;
                toProtoMsg(message: _64.Proposal): _64.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _64.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.TallyResult;
                fromPartial(object: Partial<_64.TallyResult>): _64.TallyResult;
                fromAmino(object: _64.TallyResultAmino): _64.TallyResult;
                toAmino(message: _64.TallyResult): _64.TallyResultAmino;
                fromAminoMsg(object: _64.TallyResultAminoMsg): _64.TallyResult;
                toAminoMsg(message: _64.TallyResult): _64.TallyResultAminoMsg;
                fromProtoMsg(message: _64.TallyResultProtoMsg): _64.TallyResult;
                toProto(message: _64.TallyResult): Uint8Array;
                toProtoMsg(message: _64.TallyResult): _64.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _64.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.Vote;
                fromPartial(object: Partial<_64.Vote>): _64.Vote;
                fromAmino(object: _64.VoteAmino): _64.Vote;
                toAmino(message: _64.Vote): _64.VoteAmino;
                fromAminoMsg(object: _64.VoteAminoMsg): _64.Vote;
                toAminoMsg(message: _64.Vote): _64.VoteAminoMsg;
                fromProtoMsg(message: _64.VoteProtoMsg): _64.Vote;
                toProto(message: _64.Vote): Uint8Array;
                toProtoMsg(message: _64.Vote): _64.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _64.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.DepositParams;
                fromPartial(object: Partial<_64.DepositParams>): _64.DepositParams;
                fromAmino(object: _64.DepositParamsAmino): _64.DepositParams;
                toAmino(message: _64.DepositParams): _64.DepositParamsAmino;
                fromAminoMsg(object: _64.DepositParamsAminoMsg): _64.DepositParams;
                toAminoMsg(message: _64.DepositParams): _64.DepositParamsAminoMsg;
                fromProtoMsg(message: _64.DepositParamsProtoMsg): _64.DepositParams;
                toProto(message: _64.DepositParams): Uint8Array;
                toProtoMsg(message: _64.DepositParams): _64.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _64.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.VotingParams;
                fromPartial(object: Partial<_64.VotingParams>): _64.VotingParams;
                fromAmino(object: _64.VotingParamsAmino): _64.VotingParams;
                toAmino(message: _64.VotingParams): _64.VotingParamsAmino;
                fromAminoMsg(object: _64.VotingParamsAminoMsg): _64.VotingParams;
                toAminoMsg(message: _64.VotingParams): _64.VotingParamsAminoMsg;
                fromProtoMsg(message: _64.VotingParamsProtoMsg): _64.VotingParams;
                toProto(message: _64.VotingParams): Uint8Array;
                toProtoMsg(message: _64.VotingParams): _64.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _64.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.TallyParams;
                fromPartial(object: Partial<_64.TallyParams>): _64.TallyParams;
                fromAmino(object: _64.TallyParamsAmino): _64.TallyParams;
                toAmino(message: _64.TallyParams): _64.TallyParamsAmino;
                fromAminoMsg(object: _64.TallyParamsAminoMsg): _64.TallyParams;
                toAminoMsg(message: _64.TallyParams): _64.TallyParamsAminoMsg;
                fromProtoMsg(message: _64.TallyParamsProtoMsg): _64.TallyParams;
                toProto(message: _64.TallyParams): Uint8Array;
                toProtoMsg(message: _64.TallyParams): _64.TallyParamsProtoMsg;
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
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _215.MsgClientImpl;
            QueryClientImpl: typeof _199.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _69.QueryGroupInfoRequest): Promise<_69.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _69.QueryGroupPolicyInfoRequest): Promise<_69.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _69.QueryGroupMembersRequest): Promise<_69.QueryGroupMembersResponse>;
                groupsByAdmin(request: _69.QueryGroupsByAdminRequest): Promise<_69.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _69.QueryGroupPoliciesByGroupRequest): Promise<_69.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _69.QueryGroupPoliciesByAdminRequest): Promise<_69.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _69.QueryProposalRequest): Promise<_69.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _69.QueryProposalsByGroupPolicyRequest): Promise<_69.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _69.QueryVoteByProposalVoterRequest): Promise<_69.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _69.QueryVotesByProposalRequest): Promise<_69.QueryVotesByProposalResponse>;
                votesByVoter(request: _69.QueryVotesByVoterRequest): Promise<_69.QueryVotesByVoterResponse>;
                groupsByMember(request: _69.QueryGroupsByMemberRequest): Promise<_69.QueryGroupsByMemberResponse>;
                tallyResult(request: _69.QueryTallyResultRequest): Promise<_69.QueryTallyResultResponse>;
                groups(request?: _69.QueryGroupsRequest): Promise<_69.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _180.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _70.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _70.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _70.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _70.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _70.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _70.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _70.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _70.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _70.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _70.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _70.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _70.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _70.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _70.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _70.MsgCreateGroup): {
                        typeUrl: string;
                        value: _70.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _70.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _70.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _70.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _70.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _70.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _70.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _70.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _70.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _70.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _70.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _70.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _70.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _70.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _70.MsgWithdrawProposal;
                    };
                    vote(value: _70.MsgVote): {
                        typeUrl: string;
                        value: _70.MsgVote;
                    };
                    exec(value: _70.MsgExec): {
                        typeUrl: string;
                        value: _70.MsgExec;
                    };
                    leaveGroup(value: _70.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _70.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _70.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _70.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _70.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _70.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _70.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _70.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _70.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _70.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _70.MsgCreateGroup): {
                        typeUrl: string;
                        value: _70.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _70.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _70.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _70.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _70.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _70.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _70.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _70.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _70.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _70.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _70.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _70.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _70.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _70.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _70.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _70.MsgWithdrawProposal;
                    };
                    vote(value: _70.MsgVote): {
                        typeUrl: string;
                        value: _70.MsgVote;
                    };
                    exec(value: _70.MsgExec): {
                        typeUrl: string;
                        value: _70.MsgExec;
                    };
                    leaveGroup(value: _70.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _70.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _70.MsgCreateGroup) => _70.MsgCreateGroupAmino;
                    fromAmino: (object: _70.MsgCreateGroupAmino) => _70.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _70.MsgUpdateGroupMembers) => _70.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _70.MsgUpdateGroupMembersAmino) => _70.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _70.MsgUpdateGroupAdmin) => _70.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _70.MsgUpdateGroupAdminAmino) => _70.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _70.MsgUpdateGroupMetadata) => _70.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _70.MsgUpdateGroupMetadataAmino) => _70.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _70.MsgCreateGroupPolicy) => _70.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _70.MsgCreateGroupPolicyAmino) => _70.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _70.MsgCreateGroupWithPolicy) => _70.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _70.MsgCreateGroupWithPolicyAmino) => _70.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _70.MsgUpdateGroupPolicyAdmin) => _70.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _70.MsgUpdateGroupPolicyAdminAmino) => _70.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _70.MsgUpdateGroupPolicyDecisionPolicy) => _70.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _70.MsgUpdateGroupPolicyDecisionPolicyAmino) => _70.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _70.MsgUpdateGroupPolicyMetadata) => _70.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _70.MsgUpdateGroupPolicyMetadataAmino) => _70.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _70.MsgSubmitProposal) => _70.MsgSubmitProposalAmino;
                    fromAmino: (object: _70.MsgSubmitProposalAmino) => _70.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _70.MsgWithdrawProposal) => _70.MsgWithdrawProposalAmino;
                    fromAmino: (object: _70.MsgWithdrawProposalAmino) => _70.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _70.MsgVote) => _70.MsgVoteAmino;
                    fromAmino: (object: _70.MsgVoteAmino) => _70.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _70.MsgExec) => _70.MsgExecAmino;
                    fromAmino: (object: _70.MsgExecAmino) => _70.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _70.MsgLeaveGroup) => _70.MsgLeaveGroupAmino;
                    fromAmino: (object: _70.MsgLeaveGroupAmino) => _70.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _71.VoteOption;
            voteOptionToJSON(object: _71.VoteOption): string;
            proposalStatusFromJSON(object: any): _71.ProposalStatus;
            proposalStatusToJSON(object: _71.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _71.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _71.ProposalExecutorResult): string;
            VoteOption: typeof _71.VoteOption;
            VoteOptionSDKType: typeof _71.VoteOption;
            VoteOptionAmino: typeof _71.VoteOption;
            ProposalStatus: typeof _71.ProposalStatus;
            ProposalStatusSDKType: typeof _71.ProposalStatus;
            ProposalStatusAmino: typeof _71.ProposalStatus;
            ProposalExecutorResult: typeof _71.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _71.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _71.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _71.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Member;
                fromPartial(object: Partial<_71.Member>): _71.Member;
                fromAmino(object: _71.MemberAmino): _71.Member;
                toAmino(message: _71.Member): _71.MemberAmino;
                fromAminoMsg(object: _71.MemberAminoMsg): _71.Member;
                toAminoMsg(message: _71.Member): _71.MemberAminoMsg;
                fromProtoMsg(message: _71.MemberProtoMsg): _71.Member;
                toProto(message: _71.Member): Uint8Array;
                toProtoMsg(message: _71.Member): _71.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _71.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.MemberRequest;
                fromPartial(object: Partial<_71.MemberRequest>): _71.MemberRequest;
                fromAmino(object: _71.MemberRequestAmino): _71.MemberRequest;
                toAmino(message: _71.MemberRequest): _71.MemberRequestAmino;
                fromAminoMsg(object: _71.MemberRequestAminoMsg): _71.MemberRequest;
                toAminoMsg(message: _71.MemberRequest): _71.MemberRequestAminoMsg;
                fromProtoMsg(message: _71.MemberRequestProtoMsg): _71.MemberRequest;
                toProto(message: _71.MemberRequest): Uint8Array;
                toProtoMsg(message: _71.MemberRequest): _71.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _71.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_71.ThresholdDecisionPolicy>): _71.ThresholdDecisionPolicy;
                fromAmino(object: _71.ThresholdDecisionPolicyAmino): _71.ThresholdDecisionPolicy;
                toAmino(message: _71.ThresholdDecisionPolicy): _71.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _71.ThresholdDecisionPolicyAminoMsg): _71.ThresholdDecisionPolicy;
                toAminoMsg(message: _71.ThresholdDecisionPolicy): _71.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _71.ThresholdDecisionPolicyProtoMsg): _71.ThresholdDecisionPolicy;
                toProto(message: _71.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _71.ThresholdDecisionPolicy): _71.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _71.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.PercentageDecisionPolicy;
                fromPartial(object: Partial<_71.PercentageDecisionPolicy>): _71.PercentageDecisionPolicy;
                fromAmino(object: _71.PercentageDecisionPolicyAmino): _71.PercentageDecisionPolicy;
                toAmino(message: _71.PercentageDecisionPolicy): _71.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _71.PercentageDecisionPolicyAminoMsg): _71.PercentageDecisionPolicy;
                toAminoMsg(message: _71.PercentageDecisionPolicy): _71.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _71.PercentageDecisionPolicyProtoMsg): _71.PercentageDecisionPolicy;
                toProto(message: _71.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _71.PercentageDecisionPolicy): _71.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _71.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.DecisionPolicyWindows;
                fromPartial(object: Partial<_71.DecisionPolicyWindows>): _71.DecisionPolicyWindows;
                fromAmino(object: _71.DecisionPolicyWindowsAmino): _71.DecisionPolicyWindows;
                toAmino(message: _71.DecisionPolicyWindows): _71.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _71.DecisionPolicyWindowsAminoMsg): _71.DecisionPolicyWindows;
                toAminoMsg(message: _71.DecisionPolicyWindows): _71.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _71.DecisionPolicyWindowsProtoMsg): _71.DecisionPolicyWindows;
                toProto(message: _71.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _71.DecisionPolicyWindows): _71.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _71.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.GroupInfo;
                fromPartial(object: Partial<_71.GroupInfo>): _71.GroupInfo;
                fromAmino(object: _71.GroupInfoAmino): _71.GroupInfo;
                toAmino(message: _71.GroupInfo): _71.GroupInfoAmino;
                fromAminoMsg(object: _71.GroupInfoAminoMsg): _71.GroupInfo;
                toAminoMsg(message: _71.GroupInfo): _71.GroupInfoAminoMsg;
                fromProtoMsg(message: _71.GroupInfoProtoMsg): _71.GroupInfo;
                toProto(message: _71.GroupInfo): Uint8Array;
                toProtoMsg(message: _71.GroupInfo): _71.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _71.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.GroupMember;
                fromPartial(object: Partial<_71.GroupMember>): _71.GroupMember;
                fromAmino(object: _71.GroupMemberAmino): _71.GroupMember;
                toAmino(message: _71.GroupMember): _71.GroupMemberAmino;
                fromAminoMsg(object: _71.GroupMemberAminoMsg): _71.GroupMember;
                toAminoMsg(message: _71.GroupMember): _71.GroupMemberAminoMsg;
                fromProtoMsg(message: _71.GroupMemberProtoMsg): _71.GroupMember;
                toProto(message: _71.GroupMember): Uint8Array;
                toProtoMsg(message: _71.GroupMember): _71.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _71.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.GroupPolicyInfo;
                fromPartial(object: Partial<_71.GroupPolicyInfo>): _71.GroupPolicyInfo;
                fromAmino(object: _71.GroupPolicyInfoAmino): _71.GroupPolicyInfo;
                toAmino(message: _71.GroupPolicyInfo): _71.GroupPolicyInfoAmino;
                fromAminoMsg(object: _71.GroupPolicyInfoAminoMsg): _71.GroupPolicyInfo;
                toAminoMsg(message: _71.GroupPolicyInfo): _71.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _71.GroupPolicyInfoProtoMsg): _71.GroupPolicyInfo;
                toProto(message: _71.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _71.GroupPolicyInfo): _71.GroupPolicyInfoProtoMsg;
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
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _70.Exec;
            execToJSON(object: _70.Exec): string;
            Exec: typeof _70.Exec;
            ExecSDKType: typeof _70.Exec;
            ExecAmino: typeof _70.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _70.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgCreateGroup;
                fromPartial(object: Partial<_70.MsgCreateGroup>): _70.MsgCreateGroup;
                fromAmino(object: _70.MsgCreateGroupAmino): _70.MsgCreateGroup;
                toAmino(message: _70.MsgCreateGroup): _70.MsgCreateGroupAmino;
                fromAminoMsg(object: _70.MsgCreateGroupAminoMsg): _70.MsgCreateGroup;
                toAminoMsg(message: _70.MsgCreateGroup): _70.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _70.MsgCreateGroupProtoMsg): _70.MsgCreateGroup;
                toProto(message: _70.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _70.MsgCreateGroup): _70.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _70.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgCreateGroupResponse;
                fromPartial(object: Partial<_70.MsgCreateGroupResponse>): _70.MsgCreateGroupResponse;
                fromAmino(object: _70.MsgCreateGroupResponseAmino): _70.MsgCreateGroupResponse;
                toAmino(message: _70.MsgCreateGroupResponse): _70.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _70.MsgCreateGroupResponseAminoMsg): _70.MsgCreateGroupResponse;
                toAminoMsg(message: _70.MsgCreateGroupResponse): _70.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _70.MsgCreateGroupResponseProtoMsg): _70.MsgCreateGroupResponse;
                toProto(message: _70.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _70.MsgCreateGroupResponse): _70.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _70.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_70.MsgUpdateGroupMembers>): _70.MsgUpdateGroupMembers;
                fromAmino(object: _70.MsgUpdateGroupMembersAmino): _70.MsgUpdateGroupMembers;
                toAmino(message: _70.MsgUpdateGroupMembers): _70.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupMembersAminoMsg): _70.MsgUpdateGroupMembers;
                toAminoMsg(message: _70.MsgUpdateGroupMembers): _70.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupMembersProtoMsg): _70.MsgUpdateGroupMembers;
                toProto(message: _70.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupMembers): _70.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _70.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _70.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_70.MsgUpdateGroupMembersResponse>): _70.MsgUpdateGroupMembersResponse;
                fromAmino(_: _70.MsgUpdateGroupMembersResponseAmino): _70.MsgUpdateGroupMembersResponse;
                toAmino(_: _70.MsgUpdateGroupMembersResponse): _70.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupMembersResponseAminoMsg): _70.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _70.MsgUpdateGroupMembersResponse): _70.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupMembersResponseProtoMsg): _70.MsgUpdateGroupMembersResponse;
                toProto(message: _70.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupMembersResponse): _70.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _70.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_70.MsgUpdateGroupAdmin>): _70.MsgUpdateGroupAdmin;
                fromAmino(object: _70.MsgUpdateGroupAdminAmino): _70.MsgUpdateGroupAdmin;
                toAmino(message: _70.MsgUpdateGroupAdmin): _70.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupAdminAminoMsg): _70.MsgUpdateGroupAdmin;
                toAminoMsg(message: _70.MsgUpdateGroupAdmin): _70.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupAdminProtoMsg): _70.MsgUpdateGroupAdmin;
                toProto(message: _70.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupAdmin): _70.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _70.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _70.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_70.MsgUpdateGroupAdminResponse>): _70.MsgUpdateGroupAdminResponse;
                fromAmino(_: _70.MsgUpdateGroupAdminResponseAmino): _70.MsgUpdateGroupAdminResponse;
                toAmino(_: _70.MsgUpdateGroupAdminResponse): _70.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupAdminResponseAminoMsg): _70.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _70.MsgUpdateGroupAdminResponse): _70.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupAdminResponseProtoMsg): _70.MsgUpdateGroupAdminResponse;
                toProto(message: _70.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupAdminResponse): _70.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _70.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_70.MsgUpdateGroupMetadata>): _70.MsgUpdateGroupMetadata;
                fromAmino(object: _70.MsgUpdateGroupMetadataAmino): _70.MsgUpdateGroupMetadata;
                toAmino(message: _70.MsgUpdateGroupMetadata): _70.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupMetadataAminoMsg): _70.MsgUpdateGroupMetadata;
                toAminoMsg(message: _70.MsgUpdateGroupMetadata): _70.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupMetadataProtoMsg): _70.MsgUpdateGroupMetadata;
                toProto(message: _70.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupMetadata): _70.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _70.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _70.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_70.MsgUpdateGroupMetadataResponse>): _70.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _70.MsgUpdateGroupMetadataResponseAmino): _70.MsgUpdateGroupMetadataResponse;
                toAmino(_: _70.MsgUpdateGroupMetadataResponse): _70.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupMetadataResponseAminoMsg): _70.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _70.MsgUpdateGroupMetadataResponse): _70.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupMetadataResponseProtoMsg): _70.MsgUpdateGroupMetadataResponse;
                toProto(message: _70.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupMetadataResponse): _70.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _70.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_70.MsgCreateGroupPolicy>): _70.MsgCreateGroupPolicy;
                fromAmino(object: _70.MsgCreateGroupPolicyAmino): _70.MsgCreateGroupPolicy;
                toAmino(message: _70.MsgCreateGroupPolicy): _70.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _70.MsgCreateGroupPolicyAminoMsg): _70.MsgCreateGroupPolicy;
                toAminoMsg(message: _70.MsgCreateGroupPolicy): _70.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _70.MsgCreateGroupPolicyProtoMsg): _70.MsgCreateGroupPolicy;
                toProto(message: _70.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _70.MsgCreateGroupPolicy): _70.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _70.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_70.MsgCreateGroupPolicyResponse>): _70.MsgCreateGroupPolicyResponse;
                fromAmino(object: _70.MsgCreateGroupPolicyResponseAmino): _70.MsgCreateGroupPolicyResponse;
                toAmino(message: _70.MsgCreateGroupPolicyResponse): _70.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _70.MsgCreateGroupPolicyResponseAminoMsg): _70.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _70.MsgCreateGroupPolicyResponse): _70.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _70.MsgCreateGroupPolicyResponseProtoMsg): _70.MsgCreateGroupPolicyResponse;
                toProto(message: _70.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _70.MsgCreateGroupPolicyResponse): _70.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _70.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_70.MsgUpdateGroupPolicyAdmin>): _70.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _70.MsgUpdateGroupPolicyAdminAmino): _70.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _70.MsgUpdateGroupPolicyAdmin): _70.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupPolicyAdminAminoMsg): _70.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _70.MsgUpdateGroupPolicyAdmin): _70.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupPolicyAdminProtoMsg): _70.MsgUpdateGroupPolicyAdmin;
                toProto(message: _70.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupPolicyAdmin): _70.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _70.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_70.MsgCreateGroupWithPolicy>): _70.MsgCreateGroupWithPolicy;
                fromAmino(object: _70.MsgCreateGroupWithPolicyAmino): _70.MsgCreateGroupWithPolicy;
                toAmino(message: _70.MsgCreateGroupWithPolicy): _70.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _70.MsgCreateGroupWithPolicyAminoMsg): _70.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _70.MsgCreateGroupWithPolicy): _70.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _70.MsgCreateGroupWithPolicyProtoMsg): _70.MsgCreateGroupWithPolicy;
                toProto(message: _70.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _70.MsgCreateGroupWithPolicy): _70.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _70.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_70.MsgCreateGroupWithPolicyResponse>): _70.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _70.MsgCreateGroupWithPolicyResponseAmino): _70.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _70.MsgCreateGroupWithPolicyResponse): _70.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _70.MsgCreateGroupWithPolicyResponseAminoMsg): _70.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _70.MsgCreateGroupWithPolicyResponse): _70.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _70.MsgCreateGroupWithPolicyResponseProtoMsg): _70.MsgCreateGroupWithPolicyResponse;
                toProto(message: _70.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _70.MsgCreateGroupWithPolicyResponse): _70.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _70.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _70.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_70.MsgUpdateGroupPolicyAdminResponse>): _70.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _70.MsgUpdateGroupPolicyAdminResponseAmino): _70.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _70.MsgUpdateGroupPolicyAdminResponse): _70.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupPolicyAdminResponseAminoMsg): _70.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _70.MsgUpdateGroupPolicyAdminResponse): _70.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupPolicyAdminResponseProtoMsg): _70.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _70.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupPolicyAdminResponse): _70.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _70.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_70.MsgUpdateGroupPolicyDecisionPolicy>): _70.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _70.MsgUpdateGroupPolicyDecisionPolicyAmino): _70.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _70.MsgUpdateGroupPolicyDecisionPolicy): _70.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _70.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _70.MsgUpdateGroupPolicyDecisionPolicy): _70.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _70.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _70.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupPolicyDecisionPolicy): _70.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _70.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _70.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_70.MsgUpdateGroupPolicyDecisionPolicyResponse>): _70.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _70.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _70.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _70.MsgUpdateGroupPolicyDecisionPolicyResponse): _70.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _70.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _70.MsgUpdateGroupPolicyDecisionPolicyResponse): _70.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _70.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _70.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupPolicyDecisionPolicyResponse): _70.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _70.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_70.MsgUpdateGroupPolicyMetadata>): _70.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _70.MsgUpdateGroupPolicyMetadataAmino): _70.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _70.MsgUpdateGroupPolicyMetadata): _70.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupPolicyMetadataAminoMsg): _70.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _70.MsgUpdateGroupPolicyMetadata): _70.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupPolicyMetadataProtoMsg): _70.MsgUpdateGroupPolicyMetadata;
                toProto(message: _70.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupPolicyMetadata): _70.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _70.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _70.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_70.MsgUpdateGroupPolicyMetadataResponse>): _70.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _70.MsgUpdateGroupPolicyMetadataResponseAmino): _70.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _70.MsgUpdateGroupPolicyMetadataResponse): _70.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _70.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _70.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _70.MsgUpdateGroupPolicyMetadataResponse): _70.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _70.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _70.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateGroupPolicyMetadataResponse): _70.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _70.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgSubmitProposal;
                fromPartial(object: Partial<_70.MsgSubmitProposal>): _70.MsgSubmitProposal;
                fromAmino(object: _70.MsgSubmitProposalAmino): _70.MsgSubmitProposal;
                toAmino(message: _70.MsgSubmitProposal): _70.MsgSubmitProposalAmino;
                fromAminoMsg(object: _70.MsgSubmitProposalAminoMsg): _70.MsgSubmitProposal;
                toAminoMsg(message: _70.MsgSubmitProposal): _70.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _70.MsgSubmitProposalProtoMsg): _70.MsgSubmitProposal;
                toProto(message: _70.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _70.MsgSubmitProposal): _70.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _70.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_70.MsgSubmitProposalResponse>): _70.MsgSubmitProposalResponse;
                fromAmino(object: _70.MsgSubmitProposalResponseAmino): _70.MsgSubmitProposalResponse;
                toAmino(message: _70.MsgSubmitProposalResponse): _70.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _70.MsgSubmitProposalResponseAminoMsg): _70.MsgSubmitProposalResponse;
                toAminoMsg(message: _70.MsgSubmitProposalResponse): _70.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _70.MsgSubmitProposalResponseProtoMsg): _70.MsgSubmitProposalResponse;
                toProto(message: _70.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _70.MsgSubmitProposalResponse): _70.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _70.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgWithdrawProposal;
                fromPartial(object: Partial<_70.MsgWithdrawProposal>): _70.MsgWithdrawProposal;
                fromAmino(object: _70.MsgWithdrawProposalAmino): _70.MsgWithdrawProposal;
                toAmino(message: _70.MsgWithdrawProposal): _70.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _70.MsgWithdrawProposalAminoMsg): _70.MsgWithdrawProposal;
                toAminoMsg(message: _70.MsgWithdrawProposal): _70.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _70.MsgWithdrawProposalProtoMsg): _70.MsgWithdrawProposal;
                toProto(message: _70.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _70.MsgWithdrawProposal): _70.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _70.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _70.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_70.MsgWithdrawProposalResponse>): _70.MsgWithdrawProposalResponse;
                fromAmino(_: _70.MsgWithdrawProposalResponseAmino): _70.MsgWithdrawProposalResponse;
                toAmino(_: _70.MsgWithdrawProposalResponse): _70.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _70.MsgWithdrawProposalResponseAminoMsg): _70.MsgWithdrawProposalResponse;
                toAminoMsg(message: _70.MsgWithdrawProposalResponse): _70.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _70.MsgWithdrawProposalResponseProtoMsg): _70.MsgWithdrawProposalResponse;
                toProto(message: _70.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _70.MsgWithdrawProposalResponse): _70.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _70.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgVote;
                fromPartial(object: Partial<_70.MsgVote>): _70.MsgVote;
                fromAmino(object: _70.MsgVoteAmino): _70.MsgVote;
                toAmino(message: _70.MsgVote): _70.MsgVoteAmino;
                fromAminoMsg(object: _70.MsgVoteAminoMsg): _70.MsgVote;
                toAminoMsg(message: _70.MsgVote): _70.MsgVoteAminoMsg;
                fromProtoMsg(message: _70.MsgVoteProtoMsg): _70.MsgVote;
                toProto(message: _70.MsgVote): Uint8Array;
                toProtoMsg(message: _70.MsgVote): _70.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _70.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _70.MsgVoteResponse;
                fromPartial(_: Partial<_70.MsgVoteResponse>): _70.MsgVoteResponse;
                fromAmino(_: _70.MsgVoteResponseAmino): _70.MsgVoteResponse;
                toAmino(_: _70.MsgVoteResponse): _70.MsgVoteResponseAmino;
                fromAminoMsg(object: _70.MsgVoteResponseAminoMsg): _70.MsgVoteResponse;
                toAminoMsg(message: _70.MsgVoteResponse): _70.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _70.MsgVoteResponseProtoMsg): _70.MsgVoteResponse;
                toProto(message: _70.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _70.MsgVoteResponse): _70.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _70.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgExec;
                fromPartial(object: Partial<_70.MsgExec>): _70.MsgExec;
                fromAmino(object: _70.MsgExecAmino): _70.MsgExec;
                toAmino(message: _70.MsgExec): _70.MsgExecAmino;
                fromAminoMsg(object: _70.MsgExecAminoMsg): _70.MsgExec;
                toAminoMsg(message: _70.MsgExec): _70.MsgExecAminoMsg;
                fromProtoMsg(message: _70.MsgExecProtoMsg): _70.MsgExec;
                toProto(message: _70.MsgExec): Uint8Array;
                toProtoMsg(message: _70.MsgExec): _70.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _70.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgExecResponse;
                fromPartial(object: Partial<_70.MsgExecResponse>): _70.MsgExecResponse;
                fromAmino(object: _70.MsgExecResponseAmino): _70.MsgExecResponse;
                toAmino(message: _70.MsgExecResponse): _70.MsgExecResponseAmino;
                fromAminoMsg(object: _70.MsgExecResponseAminoMsg): _70.MsgExecResponse;
                toAminoMsg(message: _70.MsgExecResponse): _70.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _70.MsgExecResponseProtoMsg): _70.MsgExecResponse;
                toProto(message: _70.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _70.MsgExecResponse): _70.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _70.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgLeaveGroup;
                fromPartial(object: Partial<_70.MsgLeaveGroup>): _70.MsgLeaveGroup;
                fromAmino(object: _70.MsgLeaveGroupAmino): _70.MsgLeaveGroup;
                toAmino(message: _70.MsgLeaveGroup): _70.MsgLeaveGroupAmino;
                fromAminoMsg(object: _70.MsgLeaveGroupAminoMsg): _70.MsgLeaveGroup;
                toAminoMsg(message: _70.MsgLeaveGroup): _70.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _70.MsgLeaveGroupProtoMsg): _70.MsgLeaveGroup;
                toProto(message: _70.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _70.MsgLeaveGroup): _70.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _70.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _70.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_70.MsgLeaveGroupResponse>): _70.MsgLeaveGroupResponse;
                fromAmino(_: _70.MsgLeaveGroupResponseAmino): _70.MsgLeaveGroupResponse;
                toAmino(_: _70.MsgLeaveGroupResponse): _70.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _70.MsgLeaveGroupResponseAminoMsg): _70.MsgLeaveGroupResponse;
                toAminoMsg(message: _70.MsgLeaveGroupResponse): _70.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _70.MsgLeaveGroupResponseProtoMsg): _70.MsgLeaveGroupResponse;
                toProto(message: _70.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _70.MsgLeaveGroupResponse): _70.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _69.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryGroupInfoRequest;
                fromPartial(object: Partial<_69.QueryGroupInfoRequest>): _69.QueryGroupInfoRequest;
                fromAmino(object: _69.QueryGroupInfoRequestAmino): _69.QueryGroupInfoRequest;
                toAmino(message: _69.QueryGroupInfoRequest): _69.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _69.QueryGroupInfoRequestAminoMsg): _69.QueryGroupInfoRequest;
                toAminoMsg(message: _69.QueryGroupInfoRequest): _69.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _69.QueryGroupInfoRequestProtoMsg): _69.QueryGroupInfoRequest;
                toProto(message: _69.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _69.QueryGroupInfoRequest): _69.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _69.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryGroupInfoResponse;
                fromPartial(object: Partial<_69.QueryGroupInfoResponse>): _69.QueryGroupInfoResponse;
                fromAmino(object: _69.QueryGroupInfoResponseAmino): _69.QueryGroupInfoResponse;
                toAmino(message: _69.QueryGroupInfoResponse): _69.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _69.QueryGroupInfoResponseAminoMsg): _69.QueryGroupInfoResponse;
                toAminoMsg(message: _69.QueryGroupInfoResponse): _69.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _69.QueryGroupInfoResponseProtoMsg): _69.QueryGroupInfoResponse;
                toProto(message: _69.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _69.QueryGroupInfoResponse): _69.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _69.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_69.QueryGroupPolicyInfoRequest>): _69.QueryGroupPolicyInfoRequest;
                fromAmino(object: _69.QueryGroupPolicyInfoRequestAmino): _69.QueryGroupPolicyInfoRequest;
                toAmino(message: _69.QueryGroupPolicyInfoRequest): _69.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _69.QueryGroupPolicyInfoRequestAminoMsg): _69.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _69.QueryGroupPolicyInfoRequest): _69.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _69.QueryGroupPolicyInfoRequestProtoMsg): _69.QueryGroupPolicyInfoRequest;
                toProto(message: _69.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _69.QueryGroupPolicyInfoRequest): _69.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _69.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_69.QueryGroupPolicyInfoResponse>): _69.QueryGroupPolicyInfoResponse;
                fromAmino(object: _69.QueryGroupPolicyInfoResponseAmino): _69.QueryGroupPolicyInfoResponse;
                toAmino(message: _69.QueryGroupPolicyInfoResponse): _69.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _69.QueryGroupPolicyInfoResponseAminoMsg): _69.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _69.QueryGroupPolicyInfoResponse): _69.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _69.QueryGroupPolicyInfoResponseProtoMsg): _69.QueryGroupPolicyInfoResponse;
                toProto(message: _69.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _69.QueryGroupPolicyInfoResponse): _69.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _69.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryGroupMembersRequest;
                fromPartial(object: Partial<_69.QueryGroupMembersRequest>): _69.QueryGroupMembersRequest;
                fromAmino(object: _69.QueryGroupMembersRequestAmino): _69.QueryGroupMembersRequest;
                toAmino(message: _69.QueryGroupMembersRequest): _69.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _69.QueryGroupMembersRequestAminoMsg): _69.QueryGroupMembersRequest;
                toAminoMsg(message: _69.QueryGroupMembersRequest): _69.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _69.QueryGroupMembersRequestProtoMsg): _69.QueryGroupMembersRequest;
                toProto(message: _69.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _69.QueryGroupMembersRequest): _69.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _69.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryGroupMembersResponse;
                fromPartial(object: Partial<_69.QueryGroupMembersResponse>): _69.QueryGroupMembersResponse;
                fromAmino(object: _69.QueryGroupMembersResponseAmino): _69.QueryGroupMembersResponse;
                toAmino(message: _69.QueryGroupMembersResponse): _69.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _69.QueryGroupMembersResponseAminoMsg): _69.QueryGroupMembersResponse;
                toAminoMsg(message: _69.QueryGroupMembersResponse): _69.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _69.QueryGroupMembersResponseProtoMsg): _69.QueryGroupMembersResponse;
                toProto(message: _69.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _69.QueryGroupMembersResponse): _69.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _69.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_69.QueryGroupsByAdminRequest>): _69.QueryGroupsByAdminRequest;
                fromAmino(object: _69.QueryGroupsByAdminRequestAmino): _69.QueryGroupsByAdminRequest;
                toAmino(message: _69.QueryGroupsByAdminRequest): _69.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _69.QueryGroupsByAdminRequestAminoMsg): _69.QueryGroupsByAdminRequest;
                toAminoMsg(message: _69.QueryGroupsByAdminRequest): _69.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _69.QueryGroupsByAdminRequestProtoMsg): _69.QueryGroupsByAdminRequest;
                toProto(message: _69.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _69.QueryGroupsByAdminRequest): _69.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _69.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_69.QueryGroupsByAdminResponse>): _69.QueryGroupsByAdminResponse;
                fromAmino(object: _69.QueryGroupsByAdminResponseAmino): _69.QueryGroupsByAdminResponse;
                toAmino(message: _69.QueryGroupsByAdminResponse): _69.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _69.QueryGroupsByAdminResponseAminoMsg): _69.QueryGroupsByAdminResponse;
                toAminoMsg(message: _69.QueryGroupsByAdminResponse): _69.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _69.QueryGroupsByAdminResponseProtoMsg): _69.QueryGroupsByAdminResponse;
                toProto(message: _69.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _69.QueryGroupsByAdminResponse): _69.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _69.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_69.QueryGroupPoliciesByGroupRequest>): _69.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _69.QueryGroupPoliciesByGroupRequestAmino): _69.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _69.QueryGroupPoliciesByGroupRequest): _69.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _69.QueryGroupPoliciesByGroupRequestAminoMsg): _69.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _69.QueryGroupPoliciesByGroupRequest): _69.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _69.QueryGroupPoliciesByGroupRequestProtoMsg): _69.QueryGroupPoliciesByGroupRequest;
                toProto(message: _69.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _69.QueryGroupPoliciesByGroupRequest): _69.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _69.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_69.QueryGroupPoliciesByGroupResponse>): _69.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _69.QueryGroupPoliciesByGroupResponseAmino): _69.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _69.QueryGroupPoliciesByGroupResponse): _69.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _69.QueryGroupPoliciesByGroupResponseAminoMsg): _69.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _69.QueryGroupPoliciesByGroupResponse): _69.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _69.QueryGroupPoliciesByGroupResponseProtoMsg): _69.QueryGroupPoliciesByGroupResponse;
                toProto(message: _69.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _69.QueryGroupPoliciesByGroupResponse): _69.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _69.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_69.QueryGroupPoliciesByAdminRequest>): _69.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _69.QueryGroupPoliciesByAdminRequestAmino): _69.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _69.QueryGroupPoliciesByAdminRequest): _69.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _69.QueryGroupPoliciesByAdminRequestAminoMsg): _69.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _69.QueryGroupPoliciesByAdminRequest): _69.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _69.QueryGroupPoliciesByAdminRequestProtoMsg): _69.QueryGroupPoliciesByAdminRequest;
                toProto(message: _69.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _69.QueryGroupPoliciesByAdminRequest): _69.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _69.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_69.QueryGroupPoliciesByAdminResponse>): _69.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _69.QueryGroupPoliciesByAdminResponseAmino): _69.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _69.QueryGroupPoliciesByAdminResponse): _69.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _69.QueryGroupPoliciesByAdminResponseAminoMsg): _69.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _69.QueryGroupPoliciesByAdminResponse): _69.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _69.QueryGroupPoliciesByAdminResponseProtoMsg): _69.QueryGroupPoliciesByAdminResponse;
                toProto(message: _69.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _69.QueryGroupPoliciesByAdminResponse): _69.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _69.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryProposalRequest;
                fromPartial(object: Partial<_69.QueryProposalRequest>): _69.QueryProposalRequest;
                fromAmino(object: _69.QueryProposalRequestAmino): _69.QueryProposalRequest;
                toAmino(message: _69.QueryProposalRequest): _69.QueryProposalRequestAmino;
                fromAminoMsg(object: _69.QueryProposalRequestAminoMsg): _69.QueryProposalRequest;
                toAminoMsg(message: _69.QueryProposalRequest): _69.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _69.QueryProposalRequestProtoMsg): _69.QueryProposalRequest;
                toProto(message: _69.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _69.QueryProposalRequest): _69.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _69.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryProposalResponse;
                fromPartial(object: Partial<_69.QueryProposalResponse>): _69.QueryProposalResponse;
                fromAmino(object: _69.QueryProposalResponseAmino): _69.QueryProposalResponse;
                toAmino(message: _69.QueryProposalResponse): _69.QueryProposalResponseAmino;
                fromAminoMsg(object: _69.QueryProposalResponseAminoMsg): _69.QueryProposalResponse;
                toAminoMsg(message: _69.QueryProposalResponse): _69.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _69.QueryProposalResponseProtoMsg): _69.QueryProposalResponse;
                toProto(message: _69.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _69.QueryProposalResponse): _69.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _69.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_69.QueryProposalsByGroupPolicyRequest>): _69.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _69.QueryProposalsByGroupPolicyRequestAmino): _69.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _69.QueryProposalsByGroupPolicyRequest): _69.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _69.QueryProposalsByGroupPolicyRequestAminoMsg): _69.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _69.QueryProposalsByGroupPolicyRequest): _69.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _69.QueryProposalsByGroupPolicyRequestProtoMsg): _69.QueryProposalsByGroupPolicyRequest;
                toProto(message: _69.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _69.QueryProposalsByGroupPolicyRequest): _69.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _69.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_69.QueryProposalsByGroupPolicyResponse>): _69.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _69.QueryProposalsByGroupPolicyResponseAmino): _69.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _69.QueryProposalsByGroupPolicyResponse): _69.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _69.QueryProposalsByGroupPolicyResponseAminoMsg): _69.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _69.QueryProposalsByGroupPolicyResponse): _69.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _69.QueryProposalsByGroupPolicyResponseProtoMsg): _69.QueryProposalsByGroupPolicyResponse;
                toProto(message: _69.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _69.QueryProposalsByGroupPolicyResponse): _69.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _69.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_69.QueryVoteByProposalVoterRequest>): _69.QueryVoteByProposalVoterRequest;
                fromAmino(object: _69.QueryVoteByProposalVoterRequestAmino): _69.QueryVoteByProposalVoterRequest;
                toAmino(message: _69.QueryVoteByProposalVoterRequest): _69.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _69.QueryVoteByProposalVoterRequestAminoMsg): _69.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _69.QueryVoteByProposalVoterRequest): _69.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _69.QueryVoteByProposalVoterRequestProtoMsg): _69.QueryVoteByProposalVoterRequest;
                toProto(message: _69.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _69.QueryVoteByProposalVoterRequest): _69.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _69.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_69.QueryVoteByProposalVoterResponse>): _69.QueryVoteByProposalVoterResponse;
                fromAmino(object: _69.QueryVoteByProposalVoterResponseAmino): _69.QueryVoteByProposalVoterResponse;
                toAmino(message: _69.QueryVoteByProposalVoterResponse): _69.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _69.QueryVoteByProposalVoterResponseAminoMsg): _69.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _69.QueryVoteByProposalVoterResponse): _69.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _69.QueryVoteByProposalVoterResponseProtoMsg): _69.QueryVoteByProposalVoterResponse;
                toProto(message: _69.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _69.QueryVoteByProposalVoterResponse): _69.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _69.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_69.QueryVotesByProposalRequest>): _69.QueryVotesByProposalRequest;
                fromAmino(object: _69.QueryVotesByProposalRequestAmino): _69.QueryVotesByProposalRequest;
                toAmino(message: _69.QueryVotesByProposalRequest): _69.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _69.QueryVotesByProposalRequestAminoMsg): _69.QueryVotesByProposalRequest;
                toAminoMsg(message: _69.QueryVotesByProposalRequest): _69.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _69.QueryVotesByProposalRequestProtoMsg): _69.QueryVotesByProposalRequest;
                toProto(message: _69.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _69.QueryVotesByProposalRequest): _69.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _69.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_69.QueryVotesByProposalResponse>): _69.QueryVotesByProposalResponse;
                fromAmino(object: _69.QueryVotesByProposalResponseAmino): _69.QueryVotesByProposalResponse;
                toAmino(message: _69.QueryVotesByProposalResponse): _69.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _69.QueryVotesByProposalResponseAminoMsg): _69.QueryVotesByProposalResponse;
                toAminoMsg(message: _69.QueryVotesByProposalResponse): _69.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _69.QueryVotesByProposalResponseProtoMsg): _69.QueryVotesByProposalResponse;
                toProto(message: _69.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _69.QueryVotesByProposalResponse): _69.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _69.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_69.QueryVotesByVoterRequest>): _69.QueryVotesByVoterRequest;
                fromAmino(object: _69.QueryVotesByVoterRequestAmino): _69.QueryVotesByVoterRequest;
                toAmino(message: _69.QueryVotesByVoterRequest): _69.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _69.QueryVotesByVoterRequestAminoMsg): _69.QueryVotesByVoterRequest;
                toAminoMsg(message: _69.QueryVotesByVoterRequest): _69.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _69.QueryVotesByVoterRequestProtoMsg): _69.QueryVotesByVoterRequest;
                toProto(message: _69.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _69.QueryVotesByVoterRequest): _69.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _69.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_69.QueryVotesByVoterResponse>): _69.QueryVotesByVoterResponse;
                fromAmino(object: _69.QueryVotesByVoterResponseAmino): _69.QueryVotesByVoterResponse;
                toAmino(message: _69.QueryVotesByVoterResponse): _69.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _69.QueryVotesByVoterResponseAminoMsg): _69.QueryVotesByVoterResponse;
                toAminoMsg(message: _69.QueryVotesByVoterResponse): _69.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _69.QueryVotesByVoterResponseProtoMsg): _69.QueryVotesByVoterResponse;
                toProto(message: _69.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _69.QueryVotesByVoterResponse): _69.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _69.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_69.QueryGroupsByMemberRequest>): _69.QueryGroupsByMemberRequest;
                fromAmino(object: _69.QueryGroupsByMemberRequestAmino): _69.QueryGroupsByMemberRequest;
                toAmino(message: _69.QueryGroupsByMemberRequest): _69.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _69.QueryGroupsByMemberRequestAminoMsg): _69.QueryGroupsByMemberRequest;
                toAminoMsg(message: _69.QueryGroupsByMemberRequest): _69.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _69.QueryGroupsByMemberRequestProtoMsg): _69.QueryGroupsByMemberRequest;
                toProto(message: _69.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _69.QueryGroupsByMemberRequest): _69.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _69.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_69.QueryGroupsByMemberResponse>): _69.QueryGroupsByMemberResponse;
                fromAmino(object: _69.QueryGroupsByMemberResponseAmino): _69.QueryGroupsByMemberResponse;
                toAmino(message: _69.QueryGroupsByMemberResponse): _69.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _69.QueryGroupsByMemberResponseAminoMsg): _69.QueryGroupsByMemberResponse;
                toAminoMsg(message: _69.QueryGroupsByMemberResponse): _69.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _69.QueryGroupsByMemberResponseProtoMsg): _69.QueryGroupsByMemberResponse;
                toProto(message: _69.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _69.QueryGroupsByMemberResponse): _69.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _69.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryTallyResultRequest;
                fromPartial(object: Partial<_69.QueryTallyResultRequest>): _69.QueryTallyResultRequest;
                fromAmino(object: _69.QueryTallyResultRequestAmino): _69.QueryTallyResultRequest;
                toAmino(message: _69.QueryTallyResultRequest): _69.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _69.QueryTallyResultRequestAminoMsg): _69.QueryTallyResultRequest;
                toAminoMsg(message: _69.QueryTallyResultRequest): _69.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _69.QueryTallyResultRequestProtoMsg): _69.QueryTallyResultRequest;
                toProto(message: _69.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _69.QueryTallyResultRequest): _69.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _69.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryTallyResultResponse;
                fromPartial(object: Partial<_69.QueryTallyResultResponse>): _69.QueryTallyResultResponse;
                fromAmino(object: _69.QueryTallyResultResponseAmino): _69.QueryTallyResultResponse;
                toAmino(message: _69.QueryTallyResultResponse): _69.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _69.QueryTallyResultResponseAminoMsg): _69.QueryTallyResultResponse;
                toAminoMsg(message: _69.QueryTallyResultResponse): _69.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _69.QueryTallyResultResponseProtoMsg): _69.QueryTallyResultResponse;
                toProto(message: _69.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _69.QueryTallyResultResponse): _69.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _69.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryGroupsRequest;
                fromPartial(object: Partial<_69.QueryGroupsRequest>): _69.QueryGroupsRequest;
                fromAmino(object: _69.QueryGroupsRequestAmino): _69.QueryGroupsRequest;
                toAmino(message: _69.QueryGroupsRequest): _69.QueryGroupsRequestAmino;
                fromAminoMsg(object: _69.QueryGroupsRequestAminoMsg): _69.QueryGroupsRequest;
                toAminoMsg(message: _69.QueryGroupsRequest): _69.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _69.QueryGroupsRequestProtoMsg): _69.QueryGroupsRequest;
                toProto(message: _69.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _69.QueryGroupsRequest): _69.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _69.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryGroupsResponse;
                fromPartial(object: Partial<_69.QueryGroupsResponse>): _69.QueryGroupsResponse;
                fromAmino(object: _69.QueryGroupsResponseAmino): _69.QueryGroupsResponse;
                toAmino(message: _69.QueryGroupsResponse): _69.QueryGroupsResponseAmino;
                fromAminoMsg(object: _69.QueryGroupsResponseAminoMsg): _69.QueryGroupsResponse;
                toAminoMsg(message: _69.QueryGroupsResponse): _69.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _69.QueryGroupsResponseProtoMsg): _69.QueryGroupsResponse;
                toProto(message: _69.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _69.QueryGroupsResponse): _69.QueryGroupsResponseProtoMsg;
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
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _67.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.EventCreateGroup;
                fromPartial(object: Partial<_67.EventCreateGroup>): _67.EventCreateGroup;
                fromAmino(object: _67.EventCreateGroupAmino): _67.EventCreateGroup;
                toAmino(message: _67.EventCreateGroup): _67.EventCreateGroupAmino;
                fromAminoMsg(object: _67.EventCreateGroupAminoMsg): _67.EventCreateGroup;
                toAminoMsg(message: _67.EventCreateGroup): _67.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _67.EventCreateGroupProtoMsg): _67.EventCreateGroup;
                toProto(message: _67.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _67.EventCreateGroup): _67.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _67.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.EventUpdateGroup;
                fromPartial(object: Partial<_67.EventUpdateGroup>): _67.EventUpdateGroup;
                fromAmino(object: _67.EventUpdateGroupAmino): _67.EventUpdateGroup;
                toAmino(message: _67.EventUpdateGroup): _67.EventUpdateGroupAmino;
                fromAminoMsg(object: _67.EventUpdateGroupAminoMsg): _67.EventUpdateGroup;
                toAminoMsg(message: _67.EventUpdateGroup): _67.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _67.EventUpdateGroupProtoMsg): _67.EventUpdateGroup;
                toProto(message: _67.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _67.EventUpdateGroup): _67.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _67.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.EventCreateGroupPolicy;
                fromPartial(object: Partial<_67.EventCreateGroupPolicy>): _67.EventCreateGroupPolicy;
                fromAmino(object: _67.EventCreateGroupPolicyAmino): _67.EventCreateGroupPolicy;
                toAmino(message: _67.EventCreateGroupPolicy): _67.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _67.EventCreateGroupPolicyAminoMsg): _67.EventCreateGroupPolicy;
                toAminoMsg(message: _67.EventCreateGroupPolicy): _67.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _67.EventCreateGroupPolicyProtoMsg): _67.EventCreateGroupPolicy;
                toProto(message: _67.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _67.EventCreateGroupPolicy): _67.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _67.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_67.EventUpdateGroupPolicy>): _67.EventUpdateGroupPolicy;
                fromAmino(object: _67.EventUpdateGroupPolicyAmino): _67.EventUpdateGroupPolicy;
                toAmino(message: _67.EventUpdateGroupPolicy): _67.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _67.EventUpdateGroupPolicyAminoMsg): _67.EventUpdateGroupPolicy;
                toAminoMsg(message: _67.EventUpdateGroupPolicy): _67.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _67.EventUpdateGroupPolicyProtoMsg): _67.EventUpdateGroupPolicy;
                toProto(message: _67.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _67.EventUpdateGroupPolicy): _67.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _67.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.EventSubmitProposal;
                fromPartial(object: Partial<_67.EventSubmitProposal>): _67.EventSubmitProposal;
                fromAmino(object: _67.EventSubmitProposalAmino): _67.EventSubmitProposal;
                toAmino(message: _67.EventSubmitProposal): _67.EventSubmitProposalAmino;
                fromAminoMsg(object: _67.EventSubmitProposalAminoMsg): _67.EventSubmitProposal;
                toAminoMsg(message: _67.EventSubmitProposal): _67.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _67.EventSubmitProposalProtoMsg): _67.EventSubmitProposal;
                toProto(message: _67.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _67.EventSubmitProposal): _67.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _67.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.EventWithdrawProposal;
                fromPartial(object: Partial<_67.EventWithdrawProposal>): _67.EventWithdrawProposal;
                fromAmino(object: _67.EventWithdrawProposalAmino): _67.EventWithdrawProposal;
                toAmino(message: _67.EventWithdrawProposal): _67.EventWithdrawProposalAmino;
                fromAminoMsg(object: _67.EventWithdrawProposalAminoMsg): _67.EventWithdrawProposal;
                toAminoMsg(message: _67.EventWithdrawProposal): _67.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _67.EventWithdrawProposalProtoMsg): _67.EventWithdrawProposal;
                toProto(message: _67.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _67.EventWithdrawProposal): _67.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _67.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.EventVote;
                fromPartial(object: Partial<_67.EventVote>): _67.EventVote;
                fromAmino(object: _67.EventVoteAmino): _67.EventVote;
                toAmino(message: _67.EventVote): _67.EventVoteAmino;
                fromAminoMsg(object: _67.EventVoteAminoMsg): _67.EventVote;
                toAminoMsg(message: _67.EventVote): _67.EventVoteAminoMsg;
                fromProtoMsg(message: _67.EventVoteProtoMsg): _67.EventVote;
                toProto(message: _67.EventVote): Uint8Array;
                toProtoMsg(message: _67.EventVote): _67.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _67.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.EventExec;
                fromPartial(object: Partial<_67.EventExec>): _67.EventExec;
                fromAmino(object: _67.EventExecAmino): _67.EventExec;
                toAmino(message: _67.EventExec): _67.EventExecAmino;
                fromAminoMsg(object: _67.EventExecAminoMsg): _67.EventExec;
                toAminoMsg(message: _67.EventExec): _67.EventExecAminoMsg;
                fromProtoMsg(message: _67.EventExecProtoMsg): _67.EventExec;
                toProto(message: _67.EventExec): Uint8Array;
                toProtoMsg(message: _67.EventExec): _67.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _67.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.EventLeaveGroup;
                fromPartial(object: Partial<_67.EventLeaveGroup>): _67.EventLeaveGroup;
                fromAmino(object: _67.EventLeaveGroupAmino): _67.EventLeaveGroup;
                toAmino(message: _67.EventLeaveGroup): _67.EventLeaveGroupAmino;
                fromAminoMsg(object: _67.EventLeaveGroupAminoMsg): _67.EventLeaveGroup;
                toAminoMsg(message: _67.EventLeaveGroup): _67.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _67.EventLeaveGroupProtoMsg): _67.EventLeaveGroup;
                toProto(message: _67.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _67.EventLeaveGroup): _67.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _67.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.EventProposalPruned;
                fromPartial(object: Partial<_67.EventProposalPruned>): _67.EventProposalPruned;
                fromAmino(object: _67.EventProposalPrunedAmino): _67.EventProposalPruned;
                toAmino(message: _67.EventProposalPruned): _67.EventProposalPrunedAmino;
                fromAminoMsg(object: _67.EventProposalPrunedAminoMsg): _67.EventProposalPruned;
                toAminoMsg(message: _67.EventProposalPruned): _67.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _67.EventProposalPrunedProtoMsg): _67.EventProposalPruned;
                toProto(message: _67.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _67.EventProposalPruned): _67.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _200.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                inflation(request?: _74.QueryInflationRequest): Promise<_74.QueryInflationResponse>;
                annualProvisions(request?: _74.QueryAnnualProvisionsRequest): Promise<_74.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _181.LCDQueryClient;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _74.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _74.QueryInflationRequest;
                fromPartial(_: Partial<_74.QueryInflationRequest>): _74.QueryInflationRequest;
                fromAmino(_: _74.QueryInflationRequestAmino): _74.QueryInflationRequest;
                toAmino(_: _74.QueryInflationRequest): _74.QueryInflationRequestAmino;
                fromAminoMsg(object: _74.QueryInflationRequestAminoMsg): _74.QueryInflationRequest;
                toAminoMsg(message: _74.QueryInflationRequest): _74.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _74.QueryInflationRequestProtoMsg): _74.QueryInflationRequest;
                toProto(message: _74.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _74.QueryInflationRequest): _74.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _74.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryInflationResponse;
                fromPartial(object: Partial<_74.QueryInflationResponse>): _74.QueryInflationResponse;
                fromAmino(object: _74.QueryInflationResponseAmino): _74.QueryInflationResponse;
                toAmino(message: _74.QueryInflationResponse): _74.QueryInflationResponseAmino;
                fromAminoMsg(object: _74.QueryInflationResponseAminoMsg): _74.QueryInflationResponse;
                toAminoMsg(message: _74.QueryInflationResponse): _74.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _74.QueryInflationResponseProtoMsg): _74.QueryInflationResponse;
                toProto(message: _74.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _74.QueryInflationResponse): _74.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _74.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _74.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_74.QueryAnnualProvisionsRequest>): _74.QueryAnnualProvisionsRequest;
                fromAmino(_: _74.QueryAnnualProvisionsRequestAmino): _74.QueryAnnualProvisionsRequest;
                toAmino(_: _74.QueryAnnualProvisionsRequest): _74.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _74.QueryAnnualProvisionsRequestAminoMsg): _74.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _74.QueryAnnualProvisionsRequest): _74.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryAnnualProvisionsRequestProtoMsg): _74.QueryAnnualProvisionsRequest;
                toProto(message: _74.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryAnnualProvisionsRequest): _74.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _74.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_74.QueryAnnualProvisionsResponse>): _74.QueryAnnualProvisionsResponse;
                fromAmino(object: _74.QueryAnnualProvisionsResponseAmino): _74.QueryAnnualProvisionsResponse;
                toAmino(message: _74.QueryAnnualProvisionsResponse): _74.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _74.QueryAnnualProvisionsResponseAminoMsg): _74.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _74.QueryAnnualProvisionsResponse): _74.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryAnnualProvisionsResponseProtoMsg): _74.QueryAnnualProvisionsResponse;
                toProto(message: _74.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryAnnualProvisionsResponse): _74.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _73.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.Minter;
                fromPartial(object: Partial<_73.Minter>): _73.Minter;
                fromAmino(object: _73.MinterAmino): _73.Minter;
                toAmino(message: _73.Minter): _73.MinterAmino;
                fromAminoMsg(object: _73.MinterAminoMsg): _73.Minter;
                toAminoMsg(message: _73.Minter): _73.MinterAminoMsg;
                fromProtoMsg(message: _73.MinterProtoMsg): _73.Minter;
                toProto(message: _73.Minter): Uint8Array;
                toProtoMsg(message: _73.Minter): _73.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _73.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.Params;
                fromPartial(object: Partial<_73.Params>): _73.Params;
                fromAmino(object: _73.ParamsAmino): _73.Params;
                toAmino(message: _73.Params): _73.ParamsAmino;
                fromAminoMsg(object: _73.ParamsAminoMsg): _73.Params;
                toAminoMsg(message: _73.Params): _73.ParamsAminoMsg;
                fromProtoMsg(message: _73.ParamsProtoMsg): _73.Params;
                toProto(message: _73.Params): Uint8Array;
                toProtoMsg(message: _73.Params): _73.ParamsProtoMsg;
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
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _216.MsgClientImpl;
            QueryClientImpl: typeof _201.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _79.QueryBalanceRequest): Promise<_79.QueryBalanceResponse>;
                owner(request: _79.QueryOwnerRequest): Promise<_79.QueryOwnerResponse>;
                supply(request: _79.QuerySupplyRequest): Promise<_79.QuerySupplyResponse>;
                nFTs(request: _79.QueryNFTsRequest): Promise<_79.QueryNFTsResponse>;
                nFT(request: _79.QueryNFTRequest): Promise<_79.QueryNFTResponse>;
                class(request: _79.QueryClassRequest): Promise<_79.QueryClassResponse>;
                classes(request?: _79.QueryClassesRequest): Promise<_79.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _182.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _80.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _80.MsgSend): {
                        typeUrl: string;
                        value: _80.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _80.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _80.MsgSend): {
                        typeUrl: string;
                        value: _80.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _80.MsgSend) => _80.MsgSendAmino;
                    fromAmino: (object: _80.MsgSendAmino) => _80.MsgSend;
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
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _79.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryOwnerRequest;
                fromPartial(object: Partial<_79.QueryOwnerRequest>): _79.QueryOwnerRequest;
                fromAmino(object: _79.QueryOwnerRequestAmino): _79.QueryOwnerRequest;
                toAmino(message: _79.QueryOwnerRequest): _79.QueryOwnerRequestAmino;
                fromAminoMsg(object: _79.QueryOwnerRequestAminoMsg): _79.QueryOwnerRequest;
                toAminoMsg(message: _79.QueryOwnerRequest): _79.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _79.QueryOwnerRequestProtoMsg): _79.QueryOwnerRequest;
                toProto(message: _79.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _79.QueryOwnerRequest): _79.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _79.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryOwnerResponse;
                fromPartial(object: Partial<_79.QueryOwnerResponse>): _79.QueryOwnerResponse;
                fromAmino(object: _79.QueryOwnerResponseAmino): _79.QueryOwnerResponse;
                toAmino(message: _79.QueryOwnerResponse): _79.QueryOwnerResponseAmino;
                fromAminoMsg(object: _79.QueryOwnerResponseAminoMsg): _79.QueryOwnerResponse;
                toAminoMsg(message: _79.QueryOwnerResponse): _79.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _79.QueryOwnerResponseProtoMsg): _79.QueryOwnerResponse;
                toProto(message: _79.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _79.QueryOwnerResponse): _79.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _79.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QuerySupplyRequest;
                fromPartial(object: Partial<_79.QuerySupplyRequest>): _79.QuerySupplyRequest;
                fromAmino(object: _79.QuerySupplyRequestAmino): _79.QuerySupplyRequest;
                toAmino(message: _79.QuerySupplyRequest): _79.QuerySupplyRequestAmino;
                fromAminoMsg(object: _79.QuerySupplyRequestAminoMsg): _79.QuerySupplyRequest;
                toAminoMsg(message: _79.QuerySupplyRequest): _79.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _79.QuerySupplyRequestProtoMsg): _79.QuerySupplyRequest;
                toProto(message: _79.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _79.QuerySupplyRequest): _79.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _79.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QuerySupplyResponse;
                fromPartial(object: Partial<_79.QuerySupplyResponse>): _79.QuerySupplyResponse;
                fromAmino(object: _79.QuerySupplyResponseAmino): _79.QuerySupplyResponse;
                toAmino(message: _79.QuerySupplyResponse): _79.QuerySupplyResponseAmino;
                fromAminoMsg(object: _79.QuerySupplyResponseAminoMsg): _79.QuerySupplyResponse;
                toAminoMsg(message: _79.QuerySupplyResponse): _79.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _79.QuerySupplyResponseProtoMsg): _79.QuerySupplyResponse;
                toProto(message: _79.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _79.QuerySupplyResponse): _79.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _79.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryNFTsRequest;
                fromPartial(object: Partial<_79.QueryNFTsRequest>): _79.QueryNFTsRequest;
                fromAmino(object: _79.QueryNFTsRequestAmino): _79.QueryNFTsRequest;
                toAmino(message: _79.QueryNFTsRequest): _79.QueryNFTsRequestAmino;
                fromAminoMsg(object: _79.QueryNFTsRequestAminoMsg): _79.QueryNFTsRequest;
                toAminoMsg(message: _79.QueryNFTsRequest): _79.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _79.QueryNFTsRequestProtoMsg): _79.QueryNFTsRequest;
                toProto(message: _79.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryNFTsRequest): _79.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _79.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryNFTsResponse;
                fromPartial(object: Partial<_79.QueryNFTsResponse>): _79.QueryNFTsResponse;
                fromAmino(object: _79.QueryNFTsResponseAmino): _79.QueryNFTsResponse;
                toAmino(message: _79.QueryNFTsResponse): _79.QueryNFTsResponseAmino;
                fromAminoMsg(object: _79.QueryNFTsResponseAminoMsg): _79.QueryNFTsResponse;
                toAminoMsg(message: _79.QueryNFTsResponse): _79.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _79.QueryNFTsResponseProtoMsg): _79.QueryNFTsResponse;
                toProto(message: _79.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryNFTsResponse): _79.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _79.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryNFTRequest;
                fromPartial(object: Partial<_79.QueryNFTRequest>): _79.QueryNFTRequest;
                fromAmino(object: _79.QueryNFTRequestAmino): _79.QueryNFTRequest;
                toAmino(message: _79.QueryNFTRequest): _79.QueryNFTRequestAmino;
                fromAminoMsg(object: _79.QueryNFTRequestAminoMsg): _79.QueryNFTRequest;
                toAminoMsg(message: _79.QueryNFTRequest): _79.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _79.QueryNFTRequestProtoMsg): _79.QueryNFTRequest;
                toProto(message: _79.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _79.QueryNFTRequest): _79.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _79.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryNFTResponse;
                fromPartial(object: Partial<_79.QueryNFTResponse>): _79.QueryNFTResponse;
                fromAmino(object: _79.QueryNFTResponseAmino): _79.QueryNFTResponse;
                toAmino(message: _79.QueryNFTResponse): _79.QueryNFTResponseAmino;
                fromAminoMsg(object: _79.QueryNFTResponseAminoMsg): _79.QueryNFTResponse;
                toAminoMsg(message: _79.QueryNFTResponse): _79.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _79.QueryNFTResponseProtoMsg): _79.QueryNFTResponse;
                toProto(message: _79.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _79.QueryNFTResponse): _79.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _79.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryClassRequest;
                fromPartial(object: Partial<_79.QueryClassRequest>): _79.QueryClassRequest;
                fromAmino(object: _79.QueryClassRequestAmino): _79.QueryClassRequest;
                toAmino(message: _79.QueryClassRequest): _79.QueryClassRequestAmino;
                fromAminoMsg(object: _79.QueryClassRequestAminoMsg): _79.QueryClassRequest;
                toAminoMsg(message: _79.QueryClassRequest): _79.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _79.QueryClassRequestProtoMsg): _79.QueryClassRequest;
                toProto(message: _79.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _79.QueryClassRequest): _79.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _79.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryClassResponse;
                fromPartial(object: Partial<_79.QueryClassResponse>): _79.QueryClassResponse;
                fromAmino(object: _79.QueryClassResponseAmino): _79.QueryClassResponse;
                toAmino(message: _79.QueryClassResponse): _79.QueryClassResponseAmino;
                fromAminoMsg(object: _79.QueryClassResponseAminoMsg): _79.QueryClassResponse;
                toAminoMsg(message: _79.QueryClassResponse): _79.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _79.QueryClassResponseProtoMsg): _79.QueryClassResponse;
                toProto(message: _79.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _79.QueryClassResponse): _79.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _79.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryClassesRequest;
                fromPartial(object: Partial<_79.QueryClassesRequest>): _79.QueryClassesRequest;
                fromAmino(object: _79.QueryClassesRequestAmino): _79.QueryClassesRequest;
                toAmino(message: _79.QueryClassesRequest): _79.QueryClassesRequestAmino;
                fromAminoMsg(object: _79.QueryClassesRequestAminoMsg): _79.QueryClassesRequest;
                toAminoMsg(message: _79.QueryClassesRequest): _79.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _79.QueryClassesRequestProtoMsg): _79.QueryClassesRequest;
                toProto(message: _79.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _79.QueryClassesRequest): _79.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _79.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryClassesResponse;
                fromPartial(object: Partial<_79.QueryClassesResponse>): _79.QueryClassesResponse;
                fromAmino(object: _79.QueryClassesResponseAmino): _79.QueryClassesResponse;
                toAmino(message: _79.QueryClassesResponse): _79.QueryClassesResponseAmino;
                fromAminoMsg(object: _79.QueryClassesResponseAminoMsg): _79.QueryClassesResponse;
                toAminoMsg(message: _79.QueryClassesResponse): _79.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _79.QueryClassesResponseProtoMsg): _79.QueryClassesResponse;
                toProto(message: _79.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _79.QueryClassesResponse): _79.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _78.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Class;
                fromPartial(object: Partial<_78.Class>): _78.Class;
                fromAmino(object: _78.ClassAmino): _78.Class;
                toAmino(message: _78.Class): _78.ClassAmino;
                fromAminoMsg(object: _78.ClassAminoMsg): _78.Class;
                toAminoMsg(message: _78.Class): _78.ClassAminoMsg;
                fromProtoMsg(message: _78.ClassProtoMsg): _78.Class;
                toProto(message: _78.Class): Uint8Array;
                toProtoMsg(message: _78.Class): _78.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _78.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.NFT;
                fromPartial(object: Partial<_78.NFT>): _78.NFT;
                fromAmino(object: _78.NFTAmino): _78.NFT;
                toAmino(message: _78.NFT): _78.NFTAmino;
                fromAminoMsg(object: _78.NFTAminoMsg): _78.NFT;
                toAminoMsg(message: _78.NFT): _78.NFTAminoMsg;
                fromProtoMsg(message: _78.NFTProtoMsg): _78.NFT;
                toProto(message: _78.NFT): Uint8Array;
                toProtoMsg(message: _78.NFT): _78.NFTProtoMsg;
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
            Entry: {
                typeUrl: string;
                encode(message: _77.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.Entry;
                fromPartial(object: Partial<_77.Entry>): _77.Entry;
                fromAmino(object: _77.EntryAmino): _77.Entry;
                toAmino(message: _77.Entry): _77.EntryAmino;
                fromAminoMsg(object: _77.EntryAminoMsg): _77.Entry;
                toAminoMsg(message: _77.Entry): _77.EntryAminoMsg;
                fromProtoMsg(message: _77.EntryProtoMsg): _77.Entry;
                toProto(message: _77.Entry): Uint8Array;
                toProtoMsg(message: _77.Entry): _77.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _76.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.EventSend;
                fromPartial(object: Partial<_76.EventSend>): _76.EventSend;
                fromAmino(object: _76.EventSendAmino): _76.EventSend;
                toAmino(message: _76.EventSend): _76.EventSendAmino;
                fromAminoMsg(object: _76.EventSendAminoMsg): _76.EventSend;
                toAminoMsg(message: _76.EventSend): _76.EventSendAminoMsg;
                fromProtoMsg(message: _76.EventSendProtoMsg): _76.EventSend;
                toProto(message: _76.EventSend): Uint8Array;
                toProtoMsg(message: _76.EventSend): _76.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _76.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.EventMint;
                fromPartial(object: Partial<_76.EventMint>): _76.EventMint;
                fromAmino(object: _76.EventMintAmino): _76.EventMint;
                toAmino(message: _76.EventMint): _76.EventMintAmino;
                fromAminoMsg(object: _76.EventMintAminoMsg): _76.EventMint;
                toAminoMsg(message: _76.EventMint): _76.EventMintAminoMsg;
                fromProtoMsg(message: _76.EventMintProtoMsg): _76.EventMint;
                toProto(message: _76.EventMint): Uint8Array;
                toProtoMsg(message: _76.EventMint): _76.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _76.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.EventBurn;
                fromPartial(object: Partial<_76.EventBurn>): _76.EventBurn;
                fromAmino(object: _76.EventBurnAmino): _76.EventBurn;
                toAmino(message: _76.EventBurn): _76.EventBurnAmino;
                fromAminoMsg(object: _76.EventBurnAminoMsg): _76.EventBurn;
                toAminoMsg(message: _76.EventBurn): _76.EventBurnAminoMsg;
                fromProtoMsg(message: _76.EventBurnProtoMsg): _76.EventBurn;
                toProto(message: _76.EventBurn): Uint8Array;
                toProtoMsg(message: _76.EventBurn): _76.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _81.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _81.Module;
                    fromPartial(_: Partial<_81.Module>): _81.Module;
                    fromAmino(_: _81.ModuleAmino): _81.Module;
                    toAmino(_: _81.Module): _81.ModuleAmino;
                    fromAminoMsg(object: _81.ModuleAminoMsg): _81.Module;
                    toAminoMsg(message: _81.Module): _81.ModuleAminoMsg;
                    fromProtoMsg(message: _81.ModuleProtoMsg): _81.Module;
                    toProto(message: _81.Module): Uint8Array;
                    toProtoMsg(message: _81.Module): _81.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _82.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.TableDescriptor;
                fromPartial(object: Partial<_82.TableDescriptor>): _82.TableDescriptor;
                fromAmino(object: _82.TableDescriptorAmino): _82.TableDescriptor;
                toAmino(message: _82.TableDescriptor): _82.TableDescriptorAmino;
                fromAminoMsg(object: _82.TableDescriptorAminoMsg): _82.TableDescriptor;
                toAminoMsg(message: _82.TableDescriptor): _82.TableDescriptorAminoMsg;
                fromProtoMsg(message: _82.TableDescriptorProtoMsg): _82.TableDescriptor;
                toProto(message: _82.TableDescriptor): Uint8Array;
                toProtoMsg(message: _82.TableDescriptor): _82.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _82.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_82.PrimaryKeyDescriptor>): _82.PrimaryKeyDescriptor;
                fromAmino(object: _82.PrimaryKeyDescriptorAmino): _82.PrimaryKeyDescriptor;
                toAmino(message: _82.PrimaryKeyDescriptor): _82.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _82.PrimaryKeyDescriptorAminoMsg): _82.PrimaryKeyDescriptor;
                toAminoMsg(message: _82.PrimaryKeyDescriptor): _82.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _82.PrimaryKeyDescriptorProtoMsg): _82.PrimaryKeyDescriptor;
                toProto(message: _82.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _82.PrimaryKeyDescriptor): _82.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _82.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_82.SecondaryIndexDescriptor>): _82.SecondaryIndexDescriptor;
                fromAmino(object: _82.SecondaryIndexDescriptorAmino): _82.SecondaryIndexDescriptor;
                toAmino(message: _82.SecondaryIndexDescriptor): _82.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _82.SecondaryIndexDescriptorAminoMsg): _82.SecondaryIndexDescriptor;
                toAminoMsg(message: _82.SecondaryIndexDescriptor): _82.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _82.SecondaryIndexDescriptorProtoMsg): _82.SecondaryIndexDescriptor;
                toProto(message: _82.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _82.SecondaryIndexDescriptor): _82.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _82.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.SingletonDescriptor;
                fromPartial(object: Partial<_82.SingletonDescriptor>): _82.SingletonDescriptor;
                fromAmino(object: _82.SingletonDescriptorAmino): _82.SingletonDescriptor;
                toAmino(message: _82.SingletonDescriptor): _82.SingletonDescriptorAmino;
                fromAminoMsg(object: _82.SingletonDescriptorAminoMsg): _82.SingletonDescriptor;
                toAminoMsg(message: _82.SingletonDescriptor): _82.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _82.SingletonDescriptorProtoMsg): _82.SingletonDescriptor;
                toProto(message: _82.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _82.SingletonDescriptor): _82.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _83.StorageType;
            storageTypeToJSON(object: _83.StorageType): string;
            StorageType: typeof _83.StorageType;
            StorageTypeSDKType: typeof _83.StorageType;
            StorageTypeAmino: typeof _83.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _83.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_83.ModuleSchemaDescriptor>): _83.ModuleSchemaDescriptor;
                fromAmino(object: _83.ModuleSchemaDescriptorAmino): _83.ModuleSchemaDescriptor;
                toAmino(message: _83.ModuleSchemaDescriptor): _83.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _83.ModuleSchemaDescriptorAminoMsg): _83.ModuleSchemaDescriptor;
                toAminoMsg(message: _83.ModuleSchemaDescriptor): _83.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _83.ModuleSchemaDescriptorProtoMsg): _83.ModuleSchemaDescriptor;
                toProto(message: _83.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _83.ModuleSchemaDescriptor): _83.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _83.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_83.ModuleSchemaDescriptor_FileEntry>): _83.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _83.ModuleSchemaDescriptor_FileEntryAmino): _83.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _83.ModuleSchemaDescriptor_FileEntry): _83.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _83.ModuleSchemaDescriptor_FileEntryAminoMsg): _83.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _83.ModuleSchemaDescriptor_FileEntry): _83.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _83.ModuleSchemaDescriptor_FileEntryProtoMsg): _83.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _83.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _83.ModuleSchemaDescriptor_FileEntry): _83.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _202.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                subspaces(request?: _85.QuerySubspacesRequest): Promise<_85.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _183.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _85.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryParamsRequest;
                fromPartial(object: Partial<_85.QueryParamsRequest>): _85.QueryParamsRequest;
                fromAmino(object: _85.QueryParamsRequestAmino): _85.QueryParamsRequest;
                toAmino(message: _85.QueryParamsRequest): _85.QueryParamsRequestAmino;
                fromAminoMsg(object: _85.QueryParamsRequestAminoMsg): _85.QueryParamsRequest;
                toAminoMsg(message: _85.QueryParamsRequest): _85.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _85.QueryParamsRequestProtoMsg): _85.QueryParamsRequest;
                toProto(message: _85.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _85.QueryParamsRequest): _85.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _85.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryParamsResponse;
                fromPartial(object: Partial<_85.QueryParamsResponse>): _85.QueryParamsResponse;
                fromAmino(object: _85.QueryParamsResponseAmino): _85.QueryParamsResponse;
                toAmino(message: _85.QueryParamsResponse): _85.QueryParamsResponseAmino;
                fromAminoMsg(object: _85.QueryParamsResponseAminoMsg): _85.QueryParamsResponse;
                toAminoMsg(message: _85.QueryParamsResponse): _85.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _85.QueryParamsResponseProtoMsg): _85.QueryParamsResponse;
                toProto(message: _85.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _85.QueryParamsResponse): _85.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _85.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.QuerySubspacesRequest;
                fromPartial(_: Partial<_85.QuerySubspacesRequest>): _85.QuerySubspacesRequest;
                fromAmino(_: _85.QuerySubspacesRequestAmino): _85.QuerySubspacesRequest;
                toAmino(_: _85.QuerySubspacesRequest): _85.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _85.QuerySubspacesRequestAminoMsg): _85.QuerySubspacesRequest;
                toAminoMsg(message: _85.QuerySubspacesRequest): _85.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _85.QuerySubspacesRequestProtoMsg): _85.QuerySubspacesRequest;
                toProto(message: _85.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _85.QuerySubspacesRequest): _85.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _85.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QuerySubspacesResponse;
                fromPartial(object: Partial<_85.QuerySubspacesResponse>): _85.QuerySubspacesResponse;
                fromAmino(object: _85.QuerySubspacesResponseAmino): _85.QuerySubspacesResponse;
                toAmino(message: _85.QuerySubspacesResponse): _85.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _85.QuerySubspacesResponseAminoMsg): _85.QuerySubspacesResponse;
                toAminoMsg(message: _85.QuerySubspacesResponse): _85.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _85.QuerySubspacesResponseProtoMsg): _85.QuerySubspacesResponse;
                toProto(message: _85.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _85.QuerySubspacesResponse): _85.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _85.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.Subspace;
                fromPartial(object: Partial<_85.Subspace>): _85.Subspace;
                fromAmino(object: _85.SubspaceAmino): _85.Subspace;
                toAmino(message: _85.Subspace): _85.SubspaceAmino;
                fromAminoMsg(object: _85.SubspaceAminoMsg): _85.Subspace;
                toAminoMsg(message: _85.Subspace): _85.SubspaceAminoMsg;
                fromProtoMsg(message: _85.SubspaceProtoMsg): _85.Subspace;
                toProto(message: _85.Subspace): Uint8Array;
                toProtoMsg(message: _85.Subspace): _85.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _84.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.ParameterChangeProposal;
                fromPartial(object: Partial<_84.ParameterChangeProposal>): _84.ParameterChangeProposal;
                fromAmino(object: _84.ParameterChangeProposalAmino): _84.ParameterChangeProposal;
                toAmino(message: _84.ParameterChangeProposal): _84.ParameterChangeProposalAmino;
                fromAminoMsg(object: _84.ParameterChangeProposalAminoMsg): _84.ParameterChangeProposal;
                toAminoMsg(message: _84.ParameterChangeProposal): _84.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _84.ParameterChangeProposalProtoMsg): _84.ParameterChangeProposal;
                toProto(message: _84.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _84.ParameterChangeProposal): _84.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _84.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.ParamChange;
                fromPartial(object: Partial<_84.ParamChange>): _84.ParamChange;
                fromAmino(object: _84.ParamChangeAmino): _84.ParamChange;
                toAmino(message: _84.ParamChange): _84.ParamChangeAmino;
                fromAminoMsg(object: _84.ParamChangeAminoMsg): _84.ParamChange;
                toAminoMsg(message: _84.ParamChange): _84.ParamChangeAminoMsg;
                fromProtoMsg(message: _84.ParamChangeProtoMsg): _84.ParamChange;
                toProto(message: _84.ParamChange): Uint8Array;
                toProtoMsg(message: _84.ParamChange): _84.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _217.MsgClientImpl;
            QueryClientImpl: typeof _203.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                signingInfo(request: _87.QuerySigningInfoRequest): Promise<_87.QuerySigningInfoResponse>;
                signingInfos(request?: _87.QuerySigningInfosRequest): Promise<_87.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _184.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _89.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _89.MsgUnjail): {
                        typeUrl: string;
                        value: _89.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _89.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _89.MsgUnjail): {
                        typeUrl: string;
                        value: _89.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _89.MsgUnjail) => _89.MsgUnjailAmino;
                    fromAmino: (object: _89.MsgUnjailAmino) => _89.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _89.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgUnjail;
                fromPartial(object: Partial<_89.MsgUnjail>): _89.MsgUnjail;
                fromAmino(object: _89.MsgUnjailAmino): _89.MsgUnjail;
                toAmino(message: _89.MsgUnjail): _89.MsgUnjailAmino;
                fromAminoMsg(object: _89.MsgUnjailAminoMsg): _89.MsgUnjail;
                toAminoMsg(message: _89.MsgUnjail): _89.MsgUnjailAminoMsg;
                fromProtoMsg(message: _89.MsgUnjailProtoMsg): _89.MsgUnjail;
                toProto(message: _89.MsgUnjail): Uint8Array;
                toProtoMsg(message: _89.MsgUnjail): _89.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _89.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgUnjailResponse;
                fromPartial(_: Partial<_89.MsgUnjailResponse>): _89.MsgUnjailResponse;
                fromAmino(_: _89.MsgUnjailResponseAmino): _89.MsgUnjailResponse;
                toAmino(_: _89.MsgUnjailResponse): _89.MsgUnjailResponseAmino;
                fromAminoMsg(object: _89.MsgUnjailResponseAminoMsg): _89.MsgUnjailResponse;
                toAminoMsg(message: _89.MsgUnjailResponse): _89.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _89.MsgUnjailResponseProtoMsg): _89.MsgUnjailResponse;
                toProto(message: _89.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _89.MsgUnjailResponse): _89.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _88.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.ValidatorSigningInfo;
                fromPartial(object: Partial<_88.ValidatorSigningInfo>): _88.ValidatorSigningInfo;
                fromAmino(object: _88.ValidatorSigningInfoAmino): _88.ValidatorSigningInfo;
                toAmino(message: _88.ValidatorSigningInfo): _88.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _88.ValidatorSigningInfoAminoMsg): _88.ValidatorSigningInfo;
                toAminoMsg(message: _88.ValidatorSigningInfo): _88.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _88.ValidatorSigningInfoProtoMsg): _88.ValidatorSigningInfo;
                toProto(message: _88.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _88.ValidatorSigningInfo): _88.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _88.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.Params;
                fromPartial(object: Partial<_88.Params>): _88.Params;
                fromAmino(object: _88.ParamsAmino): _88.Params;
                toAmino(message: _88.Params): _88.ParamsAmino;
                fromAminoMsg(object: _88.ParamsAminoMsg): _88.Params;
                toAminoMsg(message: _88.Params): _88.ParamsAminoMsg;
                fromProtoMsg(message: _88.ParamsProtoMsg): _88.Params;
                toProto(message: _88.Params): Uint8Array;
                toProtoMsg(message: _88.Params): _88.ParamsProtoMsg;
            };
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
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _87.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QuerySigningInfoRequest;
                fromPartial(object: Partial<_87.QuerySigningInfoRequest>): _87.QuerySigningInfoRequest;
                fromAmino(object: _87.QuerySigningInfoRequestAmino): _87.QuerySigningInfoRequest;
                toAmino(message: _87.QuerySigningInfoRequest): _87.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _87.QuerySigningInfoRequestAminoMsg): _87.QuerySigningInfoRequest;
                toAminoMsg(message: _87.QuerySigningInfoRequest): _87.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _87.QuerySigningInfoRequestProtoMsg): _87.QuerySigningInfoRequest;
                toProto(message: _87.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _87.QuerySigningInfoRequest): _87.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _87.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QuerySigningInfoResponse;
                fromPartial(object: Partial<_87.QuerySigningInfoResponse>): _87.QuerySigningInfoResponse;
                fromAmino(object: _87.QuerySigningInfoResponseAmino): _87.QuerySigningInfoResponse;
                toAmino(message: _87.QuerySigningInfoResponse): _87.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _87.QuerySigningInfoResponseAminoMsg): _87.QuerySigningInfoResponse;
                toAminoMsg(message: _87.QuerySigningInfoResponse): _87.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _87.QuerySigningInfoResponseProtoMsg): _87.QuerySigningInfoResponse;
                toProto(message: _87.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _87.QuerySigningInfoResponse): _87.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _87.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QuerySigningInfosRequest;
                fromPartial(object: Partial<_87.QuerySigningInfosRequest>): _87.QuerySigningInfosRequest;
                fromAmino(object: _87.QuerySigningInfosRequestAmino): _87.QuerySigningInfosRequest;
                toAmino(message: _87.QuerySigningInfosRequest): _87.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _87.QuerySigningInfosRequestAminoMsg): _87.QuerySigningInfosRequest;
                toAminoMsg(message: _87.QuerySigningInfosRequest): _87.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _87.QuerySigningInfosRequestProtoMsg): _87.QuerySigningInfosRequest;
                toProto(message: _87.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _87.QuerySigningInfosRequest): _87.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _87.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QuerySigningInfosResponse;
                fromPartial(object: Partial<_87.QuerySigningInfosResponse>): _87.QuerySigningInfosResponse;
                fromAmino(object: _87.QuerySigningInfosResponseAmino): _87.QuerySigningInfosResponse;
                toAmino(message: _87.QuerySigningInfosResponse): _87.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _87.QuerySigningInfosResponseAminoMsg): _87.QuerySigningInfosResponse;
                toAminoMsg(message: _87.QuerySigningInfosResponse): _87.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _87.QuerySigningInfosResponseProtoMsg): _87.QuerySigningInfosResponse;
                toProto(message: _87.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _87.QuerySigningInfosResponse): _87.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _86.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.GenesisState;
                fromPartial(object: Partial<_86.GenesisState>): _86.GenesisState;
                fromAmino(object: _86.GenesisStateAmino): _86.GenesisState;
                toAmino(message: _86.GenesisState): _86.GenesisStateAmino;
                fromAminoMsg(object: _86.GenesisStateAminoMsg): _86.GenesisState;
                toAminoMsg(message: _86.GenesisState): _86.GenesisStateAminoMsg;
                fromProtoMsg(message: _86.GenesisStateProtoMsg): _86.GenesisState;
                toProto(message: _86.GenesisState): Uint8Array;
                toProtoMsg(message: _86.GenesisState): _86.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _86.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.SigningInfo;
                fromPartial(object: Partial<_86.SigningInfo>): _86.SigningInfo;
                fromAmino(object: _86.SigningInfoAmino): _86.SigningInfo;
                toAmino(message: _86.SigningInfo): _86.SigningInfoAmino;
                fromAminoMsg(object: _86.SigningInfoAminoMsg): _86.SigningInfo;
                toAminoMsg(message: _86.SigningInfo): _86.SigningInfoAminoMsg;
                fromProtoMsg(message: _86.SigningInfoProtoMsg): _86.SigningInfo;
                toProto(message: _86.SigningInfo): Uint8Array;
                toProtoMsg(message: _86.SigningInfo): _86.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _86.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.ValidatorMissedBlocks;
                fromPartial(object: Partial<_86.ValidatorMissedBlocks>): _86.ValidatorMissedBlocks;
                fromAmino(object: _86.ValidatorMissedBlocksAmino): _86.ValidatorMissedBlocks;
                toAmino(message: _86.ValidatorMissedBlocks): _86.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _86.ValidatorMissedBlocksAminoMsg): _86.ValidatorMissedBlocks;
                toAminoMsg(message: _86.ValidatorMissedBlocks): _86.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _86.ValidatorMissedBlocksProtoMsg): _86.ValidatorMissedBlocks;
                toProto(message: _86.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _86.ValidatorMissedBlocks): _86.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _86.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MissedBlock;
                fromPartial(object: Partial<_86.MissedBlock>): _86.MissedBlock;
                fromAmino(object: _86.MissedBlockAmino): _86.MissedBlock;
                toAmino(message: _86.MissedBlock): _86.MissedBlockAmino;
                fromAminoMsg(object: _86.MissedBlockAminoMsg): _86.MissedBlock;
                toAminoMsg(message: _86.MissedBlock): _86.MissedBlockAminoMsg;
                fromProtoMsg(message: _86.MissedBlockProtoMsg): _86.MissedBlock;
                toProto(message: _86.MissedBlock): Uint8Array;
                toProtoMsg(message: _86.MissedBlock): _86.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _218.MsgClientImpl;
            QueryClientImpl: typeof _204.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _92.QueryValidatorsRequest): Promise<_92.QueryValidatorsResponse>;
                validator(request: _92.QueryValidatorRequest): Promise<_92.QueryValidatorResponse>;
                validatorDelegations(request: _92.QueryValidatorDelegationsRequest): Promise<_92.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _92.QueryValidatorUnbondingDelegationsRequest): Promise<_92.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _92.QueryDelegationRequest): Promise<_92.QueryDelegationResponse>;
                unbondingDelegation(request: _92.QueryUnbondingDelegationRequest): Promise<_92.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _92.QueryDelegatorDelegationsRequest): Promise<_92.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _92.QueryDelegatorUnbondingDelegationsRequest): Promise<_92.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _92.QueryRedelegationsRequest): Promise<_92.QueryRedelegationsResponse>;
                delegatorValidators(request: _92.QueryDelegatorValidatorsRequest): Promise<_92.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _92.QueryDelegatorValidatorRequest): Promise<_92.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _92.QueryHistoricalInfoRequest): Promise<_92.QueryHistoricalInfoResponse>;
                pool(request?: _92.QueryPoolRequest): Promise<_92.QueryPoolResponse>;
                params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _185.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _94.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _94.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _94.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _94.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _94.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _94.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _94.MsgCreateValidator): {
                        typeUrl: string;
                        value: _94.MsgCreateValidator;
                    };
                    editValidator(value: _94.MsgEditValidator): {
                        typeUrl: string;
                        value: _94.MsgEditValidator;
                    };
                    delegate(value: _94.MsgDelegate): {
                        typeUrl: string;
                        value: _94.MsgDelegate;
                    };
                    beginRedelegate(value: _94.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _94.MsgBeginRedelegate;
                    };
                    undelegate(value: _94.MsgUndelegate): {
                        typeUrl: string;
                        value: _94.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _94.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _94.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _94.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _94.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _94.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _94.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _94.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _94.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _94.MsgCreateValidator): {
                        typeUrl: string;
                        value: _94.MsgCreateValidator;
                    };
                    editValidator(value: _94.MsgEditValidator): {
                        typeUrl: string;
                        value: _94.MsgEditValidator;
                    };
                    delegate(value: _94.MsgDelegate): {
                        typeUrl: string;
                        value: _94.MsgDelegate;
                    };
                    beginRedelegate(value: _94.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _94.MsgBeginRedelegate;
                    };
                    undelegate(value: _94.MsgUndelegate): {
                        typeUrl: string;
                        value: _94.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _94.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _94.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _94.MsgCreateValidator) => _94.MsgCreateValidatorAmino;
                    fromAmino: (object: _94.MsgCreateValidatorAmino) => _94.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _94.MsgEditValidator) => _94.MsgEditValidatorAmino;
                    fromAmino: (object: _94.MsgEditValidatorAmino) => _94.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _94.MsgDelegate) => _94.MsgDelegateAmino;
                    fromAmino: (object: _94.MsgDelegateAmino) => _94.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _94.MsgBeginRedelegate) => _94.MsgBeginRedelegateAmino;
                    fromAmino: (object: _94.MsgBeginRedelegateAmino) => _94.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _94.MsgUndelegate) => _94.MsgUndelegateAmino;
                    fromAmino: (object: _94.MsgUndelegateAmino) => _94.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _94.MsgCancelUnbondingDelegation) => _94.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _94.MsgCancelUnbondingDelegationAmino) => _94.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _94.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgCreateValidator;
                fromPartial(object: Partial<_94.MsgCreateValidator>): _94.MsgCreateValidator;
                fromAmino(object: _94.MsgCreateValidatorAmino): _94.MsgCreateValidator;
                toAmino(message: _94.MsgCreateValidator): _94.MsgCreateValidatorAmino;
                fromAminoMsg(object: _94.MsgCreateValidatorAminoMsg): _94.MsgCreateValidator;
                toAminoMsg(message: _94.MsgCreateValidator): _94.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _94.MsgCreateValidatorProtoMsg): _94.MsgCreateValidator;
                toProto(message: _94.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _94.MsgCreateValidator): _94.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _94.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_94.MsgCreateValidatorResponse>): _94.MsgCreateValidatorResponse;
                fromAmino(_: _94.MsgCreateValidatorResponseAmino): _94.MsgCreateValidatorResponse;
                toAmino(_: _94.MsgCreateValidatorResponse): _94.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _94.MsgCreateValidatorResponseAminoMsg): _94.MsgCreateValidatorResponse;
                toAminoMsg(message: _94.MsgCreateValidatorResponse): _94.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _94.MsgCreateValidatorResponseProtoMsg): _94.MsgCreateValidatorResponse;
                toProto(message: _94.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _94.MsgCreateValidatorResponse): _94.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _94.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgEditValidator;
                fromPartial(object: Partial<_94.MsgEditValidator>): _94.MsgEditValidator;
                fromAmino(object: _94.MsgEditValidatorAmino): _94.MsgEditValidator;
                toAmino(message: _94.MsgEditValidator): _94.MsgEditValidatorAmino;
                fromAminoMsg(object: _94.MsgEditValidatorAminoMsg): _94.MsgEditValidator;
                toAminoMsg(message: _94.MsgEditValidator): _94.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _94.MsgEditValidatorProtoMsg): _94.MsgEditValidator;
                toProto(message: _94.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _94.MsgEditValidator): _94.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _94.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgEditValidatorResponse;
                fromPartial(_: Partial<_94.MsgEditValidatorResponse>): _94.MsgEditValidatorResponse;
                fromAmino(_: _94.MsgEditValidatorResponseAmino): _94.MsgEditValidatorResponse;
                toAmino(_: _94.MsgEditValidatorResponse): _94.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _94.MsgEditValidatorResponseAminoMsg): _94.MsgEditValidatorResponse;
                toAminoMsg(message: _94.MsgEditValidatorResponse): _94.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _94.MsgEditValidatorResponseProtoMsg): _94.MsgEditValidatorResponse;
                toProto(message: _94.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _94.MsgEditValidatorResponse): _94.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _94.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgDelegate;
                fromPartial(object: Partial<_94.MsgDelegate>): _94.MsgDelegate;
                fromAmino(object: _94.MsgDelegateAmino): _94.MsgDelegate;
                toAmino(message: _94.MsgDelegate): _94.MsgDelegateAmino;
                fromAminoMsg(object: _94.MsgDelegateAminoMsg): _94.MsgDelegate;
                toAminoMsg(message: _94.MsgDelegate): _94.MsgDelegateAminoMsg;
                fromProtoMsg(message: _94.MsgDelegateProtoMsg): _94.MsgDelegate;
                toProto(message: _94.MsgDelegate): Uint8Array;
                toProtoMsg(message: _94.MsgDelegate): _94.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _94.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgDelegateResponse;
                fromPartial(_: Partial<_94.MsgDelegateResponse>): _94.MsgDelegateResponse;
                fromAmino(_: _94.MsgDelegateResponseAmino): _94.MsgDelegateResponse;
                toAmino(_: _94.MsgDelegateResponse): _94.MsgDelegateResponseAmino;
                fromAminoMsg(object: _94.MsgDelegateResponseAminoMsg): _94.MsgDelegateResponse;
                toAminoMsg(message: _94.MsgDelegateResponse): _94.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _94.MsgDelegateResponseProtoMsg): _94.MsgDelegateResponse;
                toProto(message: _94.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _94.MsgDelegateResponse): _94.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _94.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgBeginRedelegate;
                fromPartial(object: Partial<_94.MsgBeginRedelegate>): _94.MsgBeginRedelegate;
                fromAmino(object: _94.MsgBeginRedelegateAmino): _94.MsgBeginRedelegate;
                toAmino(message: _94.MsgBeginRedelegate): _94.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _94.MsgBeginRedelegateAminoMsg): _94.MsgBeginRedelegate;
                toAminoMsg(message: _94.MsgBeginRedelegate): _94.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _94.MsgBeginRedelegateProtoMsg): _94.MsgBeginRedelegate;
                toProto(message: _94.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _94.MsgBeginRedelegate): _94.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _94.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_94.MsgBeginRedelegateResponse>): _94.MsgBeginRedelegateResponse;
                fromAmino(object: _94.MsgBeginRedelegateResponseAmino): _94.MsgBeginRedelegateResponse;
                toAmino(message: _94.MsgBeginRedelegateResponse): _94.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _94.MsgBeginRedelegateResponseAminoMsg): _94.MsgBeginRedelegateResponse;
                toAminoMsg(message: _94.MsgBeginRedelegateResponse): _94.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _94.MsgBeginRedelegateResponseProtoMsg): _94.MsgBeginRedelegateResponse;
                toProto(message: _94.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _94.MsgBeginRedelegateResponse): _94.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _94.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgUndelegate;
                fromPartial(object: Partial<_94.MsgUndelegate>): _94.MsgUndelegate;
                fromAmino(object: _94.MsgUndelegateAmino): _94.MsgUndelegate;
                toAmino(message: _94.MsgUndelegate): _94.MsgUndelegateAmino;
                fromAminoMsg(object: _94.MsgUndelegateAminoMsg): _94.MsgUndelegate;
                toAminoMsg(message: _94.MsgUndelegate): _94.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _94.MsgUndelegateProtoMsg): _94.MsgUndelegate;
                toProto(message: _94.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _94.MsgUndelegate): _94.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _94.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgUndelegateResponse;
                fromPartial(object: Partial<_94.MsgUndelegateResponse>): _94.MsgUndelegateResponse;
                fromAmino(object: _94.MsgUndelegateResponseAmino): _94.MsgUndelegateResponse;
                toAmino(message: _94.MsgUndelegateResponse): _94.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _94.MsgUndelegateResponseAminoMsg): _94.MsgUndelegateResponse;
                toAminoMsg(message: _94.MsgUndelegateResponse): _94.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _94.MsgUndelegateResponseProtoMsg): _94.MsgUndelegateResponse;
                toProto(message: _94.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _94.MsgUndelegateResponse): _94.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _94.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_94.MsgCancelUnbondingDelegation>): _94.MsgCancelUnbondingDelegation;
                fromAmino(object: _94.MsgCancelUnbondingDelegationAmino): _94.MsgCancelUnbondingDelegation;
                toAmino(message: _94.MsgCancelUnbondingDelegation): _94.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _94.MsgCancelUnbondingDelegationAminoMsg): _94.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _94.MsgCancelUnbondingDelegation): _94.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _94.MsgCancelUnbondingDelegationProtoMsg): _94.MsgCancelUnbondingDelegation;
                toProto(message: _94.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _94.MsgCancelUnbondingDelegation): _94.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _94.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_94.MsgCancelUnbondingDelegationResponse>): _94.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _94.MsgCancelUnbondingDelegationResponseAmino): _94.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _94.MsgCancelUnbondingDelegationResponse): _94.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _94.MsgCancelUnbondingDelegationResponseAminoMsg): _94.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _94.MsgCancelUnbondingDelegationResponse): _94.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _94.MsgCancelUnbondingDelegationResponseProtoMsg): _94.MsgCancelUnbondingDelegationResponse;
                toProto(message: _94.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _94.MsgCancelUnbondingDelegationResponse): _94.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _93.BondStatus;
            bondStatusToJSON(object: _93.BondStatus): string;
            BondStatus: typeof _93.BondStatus;
            BondStatusSDKType: typeof _93.BondStatus;
            BondStatusAmino: typeof _93.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _93.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.HistoricalInfo;
                fromPartial(object: Partial<_93.HistoricalInfo>): _93.HistoricalInfo;
                fromAmino(object: _93.HistoricalInfoAmino): _93.HistoricalInfo;
                toAmino(message: _93.HistoricalInfo): _93.HistoricalInfoAmino;
                fromAminoMsg(object: _93.HistoricalInfoAminoMsg): _93.HistoricalInfo;
                toAminoMsg(message: _93.HistoricalInfo): _93.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _93.HistoricalInfoProtoMsg): _93.HistoricalInfo;
                toProto(message: _93.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _93.HistoricalInfo): _93.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _93.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.CommissionRates;
                fromPartial(object: Partial<_93.CommissionRates>): _93.CommissionRates;
                fromAmino(object: _93.CommissionRatesAmino): _93.CommissionRates;
                toAmino(message: _93.CommissionRates): _93.CommissionRatesAmino;
                fromAminoMsg(object: _93.CommissionRatesAminoMsg): _93.CommissionRates;
                toAminoMsg(message: _93.CommissionRates): _93.CommissionRatesAminoMsg;
                fromProtoMsg(message: _93.CommissionRatesProtoMsg): _93.CommissionRates;
                toProto(message: _93.CommissionRates): Uint8Array;
                toProtoMsg(message: _93.CommissionRates): _93.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _93.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Commission;
                fromPartial(object: Partial<_93.Commission>): _93.Commission;
                fromAmino(object: _93.CommissionAmino): _93.Commission;
                toAmino(message: _93.Commission): _93.CommissionAmino;
                fromAminoMsg(object: _93.CommissionAminoMsg): _93.Commission;
                toAminoMsg(message: _93.Commission): _93.CommissionAminoMsg;
                fromProtoMsg(message: _93.CommissionProtoMsg): _93.Commission;
                toProto(message: _93.Commission): Uint8Array;
                toProtoMsg(message: _93.Commission): _93.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _93.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Description;
                fromPartial(object: Partial<_93.Description>): _93.Description;
                fromAmino(object: _93.DescriptionAmino): _93.Description;
                toAmino(message: _93.Description): _93.DescriptionAmino;
                fromAminoMsg(object: _93.DescriptionAminoMsg): _93.Description;
                toAminoMsg(message: _93.Description): _93.DescriptionAminoMsg;
                fromProtoMsg(message: _93.DescriptionProtoMsg): _93.Description;
                toProto(message: _93.Description): Uint8Array;
                toProtoMsg(message: _93.Description): _93.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _93.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Validator;
                fromPartial(object: Partial<_93.Validator>): _93.Validator;
                fromAmino(object: _93.ValidatorAmino): _93.Validator;
                toAmino(message: _93.Validator): _93.ValidatorAmino;
                fromAminoMsg(object: _93.ValidatorAminoMsg): _93.Validator;
                toAminoMsg(message: _93.Validator): _93.ValidatorAminoMsg;
                fromProtoMsg(message: _93.ValidatorProtoMsg): _93.Validator;
                toProto(message: _93.Validator): Uint8Array;
                toProtoMsg(message: _93.Validator): _93.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _93.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.ValAddresses;
                fromPartial(object: Partial<_93.ValAddresses>): _93.ValAddresses;
                fromAmino(object: _93.ValAddressesAmino): _93.ValAddresses;
                toAmino(message: _93.ValAddresses): _93.ValAddressesAmino;
                fromAminoMsg(object: _93.ValAddressesAminoMsg): _93.ValAddresses;
                toAminoMsg(message: _93.ValAddresses): _93.ValAddressesAminoMsg;
                fromProtoMsg(message: _93.ValAddressesProtoMsg): _93.ValAddresses;
                toProto(message: _93.ValAddresses): Uint8Array;
                toProtoMsg(message: _93.ValAddresses): _93.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _93.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.DVPair;
                fromPartial(object: Partial<_93.DVPair>): _93.DVPair;
                fromAmino(object: _93.DVPairAmino): _93.DVPair;
                toAmino(message: _93.DVPair): _93.DVPairAmino;
                fromAminoMsg(object: _93.DVPairAminoMsg): _93.DVPair;
                toAminoMsg(message: _93.DVPair): _93.DVPairAminoMsg;
                fromProtoMsg(message: _93.DVPairProtoMsg): _93.DVPair;
                toProto(message: _93.DVPair): Uint8Array;
                toProtoMsg(message: _93.DVPair): _93.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _93.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.DVPairs;
                fromPartial(object: Partial<_93.DVPairs>): _93.DVPairs;
                fromAmino(object: _93.DVPairsAmino): _93.DVPairs;
                toAmino(message: _93.DVPairs): _93.DVPairsAmino;
                fromAminoMsg(object: _93.DVPairsAminoMsg): _93.DVPairs;
                toAminoMsg(message: _93.DVPairs): _93.DVPairsAminoMsg;
                fromProtoMsg(message: _93.DVPairsProtoMsg): _93.DVPairs;
                toProto(message: _93.DVPairs): Uint8Array;
                toProtoMsg(message: _93.DVPairs): _93.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _93.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.DVVTriplet;
                fromPartial(object: Partial<_93.DVVTriplet>): _93.DVVTriplet;
                fromAmino(object: _93.DVVTripletAmino): _93.DVVTriplet;
                toAmino(message: _93.DVVTriplet): _93.DVVTripletAmino;
                fromAminoMsg(object: _93.DVVTripletAminoMsg): _93.DVVTriplet;
                toAminoMsg(message: _93.DVVTriplet): _93.DVVTripletAminoMsg;
                fromProtoMsg(message: _93.DVVTripletProtoMsg): _93.DVVTriplet;
                toProto(message: _93.DVVTriplet): Uint8Array;
                toProtoMsg(message: _93.DVVTriplet): _93.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _93.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.DVVTriplets;
                fromPartial(object: Partial<_93.DVVTriplets>): _93.DVVTriplets;
                fromAmino(object: _93.DVVTripletsAmino): _93.DVVTriplets;
                toAmino(message: _93.DVVTriplets): _93.DVVTripletsAmino;
                fromAminoMsg(object: _93.DVVTripletsAminoMsg): _93.DVVTriplets;
                toAminoMsg(message: _93.DVVTriplets): _93.DVVTripletsAminoMsg;
                fromProtoMsg(message: _93.DVVTripletsProtoMsg): _93.DVVTriplets;
                toProto(message: _93.DVVTriplets): Uint8Array;
                toProtoMsg(message: _93.DVVTriplets): _93.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _93.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Delegation;
                fromPartial(object: Partial<_93.Delegation>): _93.Delegation;
                fromAmino(object: _93.DelegationAmino): _93.Delegation;
                toAmino(message: _93.Delegation): _93.DelegationAmino;
                fromAminoMsg(object: _93.DelegationAminoMsg): _93.Delegation;
                toAminoMsg(message: _93.Delegation): _93.DelegationAminoMsg;
                fromProtoMsg(message: _93.DelegationProtoMsg): _93.Delegation;
                toProto(message: _93.Delegation): Uint8Array;
                toProtoMsg(message: _93.Delegation): _93.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _93.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.UnbondingDelegation;
                fromPartial(object: Partial<_93.UnbondingDelegation>): _93.UnbondingDelegation;
                fromAmino(object: _93.UnbondingDelegationAmino): _93.UnbondingDelegation;
                toAmino(message: _93.UnbondingDelegation): _93.UnbondingDelegationAmino;
                fromAminoMsg(object: _93.UnbondingDelegationAminoMsg): _93.UnbondingDelegation;
                toAminoMsg(message: _93.UnbondingDelegation): _93.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _93.UnbondingDelegationProtoMsg): _93.UnbondingDelegation;
                toProto(message: _93.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _93.UnbondingDelegation): _93.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _93.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.UnbondingDelegationEntry;
                fromPartial(object: Partial<_93.UnbondingDelegationEntry>): _93.UnbondingDelegationEntry;
                fromAmino(object: _93.UnbondingDelegationEntryAmino): _93.UnbondingDelegationEntry;
                toAmino(message: _93.UnbondingDelegationEntry): _93.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _93.UnbondingDelegationEntryAminoMsg): _93.UnbondingDelegationEntry;
                toAminoMsg(message: _93.UnbondingDelegationEntry): _93.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _93.UnbondingDelegationEntryProtoMsg): _93.UnbondingDelegationEntry;
                toProto(message: _93.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _93.UnbondingDelegationEntry): _93.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _93.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.RedelegationEntry;
                fromPartial(object: Partial<_93.RedelegationEntry>): _93.RedelegationEntry;
                fromAmino(object: _93.RedelegationEntryAmino): _93.RedelegationEntry;
                toAmino(message: _93.RedelegationEntry): _93.RedelegationEntryAmino;
                fromAminoMsg(object: _93.RedelegationEntryAminoMsg): _93.RedelegationEntry;
                toAminoMsg(message: _93.RedelegationEntry): _93.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _93.RedelegationEntryProtoMsg): _93.RedelegationEntry;
                toProto(message: _93.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _93.RedelegationEntry): _93.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _93.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Redelegation;
                fromPartial(object: Partial<_93.Redelegation>): _93.Redelegation;
                fromAmino(object: _93.RedelegationAmino): _93.Redelegation;
                toAmino(message: _93.Redelegation): _93.RedelegationAmino;
                fromAminoMsg(object: _93.RedelegationAminoMsg): _93.Redelegation;
                toAminoMsg(message: _93.Redelegation): _93.RedelegationAminoMsg;
                fromProtoMsg(message: _93.RedelegationProtoMsg): _93.Redelegation;
                toProto(message: _93.Redelegation): Uint8Array;
                toProtoMsg(message: _93.Redelegation): _93.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _93.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Params;
                fromPartial(object: Partial<_93.Params>): _93.Params;
                fromAmino(object: _93.ParamsAmino): _93.Params;
                toAmino(message: _93.Params): _93.ParamsAmino;
                fromAminoMsg(object: _93.ParamsAminoMsg): _93.Params;
                toAminoMsg(message: _93.Params): _93.ParamsAminoMsg;
                fromProtoMsg(message: _93.ParamsProtoMsg): _93.Params;
                toProto(message: _93.Params): Uint8Array;
                toProtoMsg(message: _93.Params): _93.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _93.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.DelegationResponse;
                fromPartial(object: Partial<_93.DelegationResponse>): _93.DelegationResponse;
                fromAmino(object: _93.DelegationResponseAmino): _93.DelegationResponse;
                toAmino(message: _93.DelegationResponse): _93.DelegationResponseAmino;
                fromAminoMsg(object: _93.DelegationResponseAminoMsg): _93.DelegationResponse;
                toAminoMsg(message: _93.DelegationResponse): _93.DelegationResponseAminoMsg;
                fromProtoMsg(message: _93.DelegationResponseProtoMsg): _93.DelegationResponse;
                toProto(message: _93.DelegationResponse): Uint8Array;
                toProtoMsg(message: _93.DelegationResponse): _93.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _93.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.RedelegationEntryResponse;
                fromPartial(object: Partial<_93.RedelegationEntryResponse>): _93.RedelegationEntryResponse;
                fromAmino(object: _93.RedelegationEntryResponseAmino): _93.RedelegationEntryResponse;
                toAmino(message: _93.RedelegationEntryResponse): _93.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _93.RedelegationEntryResponseAminoMsg): _93.RedelegationEntryResponse;
                toAminoMsg(message: _93.RedelegationEntryResponse): _93.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _93.RedelegationEntryResponseProtoMsg): _93.RedelegationEntryResponse;
                toProto(message: _93.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _93.RedelegationEntryResponse): _93.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _93.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.RedelegationResponse;
                fromPartial(object: Partial<_93.RedelegationResponse>): _93.RedelegationResponse;
                fromAmino(object: _93.RedelegationResponseAmino): _93.RedelegationResponse;
                toAmino(message: _93.RedelegationResponse): _93.RedelegationResponseAmino;
                fromAminoMsg(object: _93.RedelegationResponseAminoMsg): _93.RedelegationResponse;
                toAminoMsg(message: _93.RedelegationResponse): _93.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _93.RedelegationResponseProtoMsg): _93.RedelegationResponse;
                toProto(message: _93.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _93.RedelegationResponse): _93.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _93.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Pool;
                fromPartial(object: Partial<_93.Pool>): _93.Pool;
                fromAmino(object: _93.PoolAmino): _93.Pool;
                toAmino(message: _93.Pool): _93.PoolAmino;
                fromAminoMsg(object: _93.PoolAminoMsg): _93.Pool;
                toAminoMsg(message: _93.Pool): _93.PoolAminoMsg;
                fromProtoMsg(message: _93.PoolProtoMsg): _93.Pool;
                toProto(message: _93.Pool): Uint8Array;
                toProtoMsg(message: _93.Pool): _93.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _92.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryValidatorsRequest;
                fromPartial(object: Partial<_92.QueryValidatorsRequest>): _92.QueryValidatorsRequest;
                fromAmino(object: _92.QueryValidatorsRequestAmino): _92.QueryValidatorsRequest;
                toAmino(message: _92.QueryValidatorsRequest): _92.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _92.QueryValidatorsRequestAminoMsg): _92.QueryValidatorsRequest;
                toAminoMsg(message: _92.QueryValidatorsRequest): _92.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorsRequestProtoMsg): _92.QueryValidatorsRequest;
                toProto(message: _92.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorsRequest): _92.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _92.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryValidatorsResponse;
                fromPartial(object: Partial<_92.QueryValidatorsResponse>): _92.QueryValidatorsResponse;
                fromAmino(object: _92.QueryValidatorsResponseAmino): _92.QueryValidatorsResponse;
                toAmino(message: _92.QueryValidatorsResponse): _92.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _92.QueryValidatorsResponseAminoMsg): _92.QueryValidatorsResponse;
                toAminoMsg(message: _92.QueryValidatorsResponse): _92.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorsResponseProtoMsg): _92.QueryValidatorsResponse;
                toProto(message: _92.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorsResponse): _92.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _92.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryValidatorRequest;
                fromPartial(object: Partial<_92.QueryValidatorRequest>): _92.QueryValidatorRequest;
                fromAmino(object: _92.QueryValidatorRequestAmino): _92.QueryValidatorRequest;
                toAmino(message: _92.QueryValidatorRequest): _92.QueryValidatorRequestAmino;
                fromAminoMsg(object: _92.QueryValidatorRequestAminoMsg): _92.QueryValidatorRequest;
                toAminoMsg(message: _92.QueryValidatorRequest): _92.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorRequestProtoMsg): _92.QueryValidatorRequest;
                toProto(message: _92.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorRequest): _92.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _92.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryValidatorResponse;
                fromPartial(object: Partial<_92.QueryValidatorResponse>): _92.QueryValidatorResponse;
                fromAmino(object: _92.QueryValidatorResponseAmino): _92.QueryValidatorResponse;
                toAmino(message: _92.QueryValidatorResponse): _92.QueryValidatorResponseAmino;
                fromAminoMsg(object: _92.QueryValidatorResponseAminoMsg): _92.QueryValidatorResponse;
                toAminoMsg(message: _92.QueryValidatorResponse): _92.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorResponseProtoMsg): _92.QueryValidatorResponse;
                toProto(message: _92.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorResponse): _92.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _92.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_92.QueryValidatorDelegationsRequest>): _92.QueryValidatorDelegationsRequest;
                fromAmino(object: _92.QueryValidatorDelegationsRequestAmino): _92.QueryValidatorDelegationsRequest;
                toAmino(message: _92.QueryValidatorDelegationsRequest): _92.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _92.QueryValidatorDelegationsRequestAminoMsg): _92.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _92.QueryValidatorDelegationsRequest): _92.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorDelegationsRequestProtoMsg): _92.QueryValidatorDelegationsRequest;
                toProto(message: _92.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorDelegationsRequest): _92.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _92.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_92.QueryValidatorDelegationsResponse>): _92.QueryValidatorDelegationsResponse;
                fromAmino(object: _92.QueryValidatorDelegationsResponseAmino): _92.QueryValidatorDelegationsResponse;
                toAmino(message: _92.QueryValidatorDelegationsResponse): _92.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _92.QueryValidatorDelegationsResponseAminoMsg): _92.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _92.QueryValidatorDelegationsResponse): _92.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorDelegationsResponseProtoMsg): _92.QueryValidatorDelegationsResponse;
                toProto(message: _92.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorDelegationsResponse): _92.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _92.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_92.QueryValidatorUnbondingDelegationsRequest>): _92.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _92.QueryValidatorUnbondingDelegationsRequestAmino): _92.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _92.QueryValidatorUnbondingDelegationsRequest): _92.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _92.QueryValidatorUnbondingDelegationsRequestAminoMsg): _92.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _92.QueryValidatorUnbondingDelegationsRequest): _92.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorUnbondingDelegationsRequestProtoMsg): _92.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _92.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorUnbondingDelegationsRequest): _92.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _92.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_92.QueryValidatorUnbondingDelegationsResponse>): _92.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _92.QueryValidatorUnbondingDelegationsResponseAmino): _92.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _92.QueryValidatorUnbondingDelegationsResponse): _92.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _92.QueryValidatorUnbondingDelegationsResponseAminoMsg): _92.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _92.QueryValidatorUnbondingDelegationsResponse): _92.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorUnbondingDelegationsResponseProtoMsg): _92.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _92.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorUnbondingDelegationsResponse): _92.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _92.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryDelegationRequest;
                fromPartial(object: Partial<_92.QueryDelegationRequest>): _92.QueryDelegationRequest;
                fromAmino(object: _92.QueryDelegationRequestAmino): _92.QueryDelegationRequest;
                toAmino(message: _92.QueryDelegationRequest): _92.QueryDelegationRequestAmino;
                fromAminoMsg(object: _92.QueryDelegationRequestAminoMsg): _92.QueryDelegationRequest;
                toAminoMsg(message: _92.QueryDelegationRequest): _92.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDelegationRequestProtoMsg): _92.QueryDelegationRequest;
                toProto(message: _92.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDelegationRequest): _92.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _92.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryDelegationResponse;
                fromPartial(object: Partial<_92.QueryDelegationResponse>): _92.QueryDelegationResponse;
                fromAmino(object: _92.QueryDelegationResponseAmino): _92.QueryDelegationResponse;
                toAmino(message: _92.QueryDelegationResponse): _92.QueryDelegationResponseAmino;
                fromAminoMsg(object: _92.QueryDelegationResponseAminoMsg): _92.QueryDelegationResponse;
                toAminoMsg(message: _92.QueryDelegationResponse): _92.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDelegationResponseProtoMsg): _92.QueryDelegationResponse;
                toProto(message: _92.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDelegationResponse): _92.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _92.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_92.QueryUnbondingDelegationRequest>): _92.QueryUnbondingDelegationRequest;
                fromAmino(object: _92.QueryUnbondingDelegationRequestAmino): _92.QueryUnbondingDelegationRequest;
                toAmino(message: _92.QueryUnbondingDelegationRequest): _92.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _92.QueryUnbondingDelegationRequestAminoMsg): _92.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _92.QueryUnbondingDelegationRequest): _92.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _92.QueryUnbondingDelegationRequestProtoMsg): _92.QueryUnbondingDelegationRequest;
                toProto(message: _92.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _92.QueryUnbondingDelegationRequest): _92.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _92.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_92.QueryUnbondingDelegationResponse>): _92.QueryUnbondingDelegationResponse;
                fromAmino(object: _92.QueryUnbondingDelegationResponseAmino): _92.QueryUnbondingDelegationResponse;
                toAmino(message: _92.QueryUnbondingDelegationResponse): _92.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _92.QueryUnbondingDelegationResponseAminoMsg): _92.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _92.QueryUnbondingDelegationResponse): _92.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _92.QueryUnbondingDelegationResponseProtoMsg): _92.QueryUnbondingDelegationResponse;
                toProto(message: _92.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _92.QueryUnbondingDelegationResponse): _92.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_92.QueryDelegatorDelegationsRequest>): _92.QueryDelegatorDelegationsRequest;
                fromAmino(object: _92.QueryDelegatorDelegationsRequestAmino): _92.QueryDelegatorDelegationsRequest;
                toAmino(message: _92.QueryDelegatorDelegationsRequest): _92.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _92.QueryDelegatorDelegationsRequestAminoMsg): _92.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _92.QueryDelegatorDelegationsRequest): _92.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorDelegationsRequestProtoMsg): _92.QueryDelegatorDelegationsRequest;
                toProto(message: _92.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorDelegationsRequest): _92.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_92.QueryDelegatorDelegationsResponse>): _92.QueryDelegatorDelegationsResponse;
                fromAmino(object: _92.QueryDelegatorDelegationsResponseAmino): _92.QueryDelegatorDelegationsResponse;
                toAmino(message: _92.QueryDelegatorDelegationsResponse): _92.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _92.QueryDelegatorDelegationsResponseAminoMsg): _92.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _92.QueryDelegatorDelegationsResponse): _92.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorDelegationsResponseProtoMsg): _92.QueryDelegatorDelegationsResponse;
                toProto(message: _92.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorDelegationsResponse): _92.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_92.QueryDelegatorUnbondingDelegationsRequest>): _92.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _92.QueryDelegatorUnbondingDelegationsRequestAmino): _92.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _92.QueryDelegatorUnbondingDelegationsRequest): _92.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _92.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _92.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _92.QueryDelegatorUnbondingDelegationsRequest): _92.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _92.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _92.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorUnbondingDelegationsRequest): _92.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_92.QueryDelegatorUnbondingDelegationsResponse>): _92.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _92.QueryDelegatorUnbondingDelegationsResponseAmino): _92.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _92.QueryDelegatorUnbondingDelegationsResponse): _92.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _92.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _92.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _92.QueryDelegatorUnbondingDelegationsResponse): _92.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _92.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _92.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorUnbondingDelegationsResponse): _92.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _92.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryRedelegationsRequest;
                fromPartial(object: Partial<_92.QueryRedelegationsRequest>): _92.QueryRedelegationsRequest;
                fromAmino(object: _92.QueryRedelegationsRequestAmino): _92.QueryRedelegationsRequest;
                toAmino(message: _92.QueryRedelegationsRequest): _92.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _92.QueryRedelegationsRequestAminoMsg): _92.QueryRedelegationsRequest;
                toAminoMsg(message: _92.QueryRedelegationsRequest): _92.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryRedelegationsRequestProtoMsg): _92.QueryRedelegationsRequest;
                toProto(message: _92.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryRedelegationsRequest): _92.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _92.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryRedelegationsResponse;
                fromPartial(object: Partial<_92.QueryRedelegationsResponse>): _92.QueryRedelegationsResponse;
                fromAmino(object: _92.QueryRedelegationsResponseAmino): _92.QueryRedelegationsResponse;
                toAmino(message: _92.QueryRedelegationsResponse): _92.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _92.QueryRedelegationsResponseAminoMsg): _92.QueryRedelegationsResponse;
                toAminoMsg(message: _92.QueryRedelegationsResponse): _92.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryRedelegationsResponseProtoMsg): _92.QueryRedelegationsResponse;
                toProto(message: _92.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryRedelegationsResponse): _92.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorsRequest>): _92.QueryDelegatorValidatorsRequest;
                fromAmino(object: _92.QueryDelegatorValidatorsRequestAmino): _92.QueryDelegatorValidatorsRequest;
                toAmino(message: _92.QueryDelegatorValidatorsRequest): _92.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _92.QueryDelegatorValidatorsRequestAminoMsg): _92.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _92.QueryDelegatorValidatorsRequest): _92.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorValidatorsRequestProtoMsg): _92.QueryDelegatorValidatorsRequest;
                toProto(message: _92.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorValidatorsRequest): _92.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorsResponse>): _92.QueryDelegatorValidatorsResponse;
                fromAmino(object: _92.QueryDelegatorValidatorsResponseAmino): _92.QueryDelegatorValidatorsResponse;
                toAmino(message: _92.QueryDelegatorValidatorsResponse): _92.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _92.QueryDelegatorValidatorsResponseAminoMsg): _92.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _92.QueryDelegatorValidatorsResponse): _92.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorValidatorsResponseProtoMsg): _92.QueryDelegatorValidatorsResponse;
                toProto(message: _92.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorValidatorsResponse): _92.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorRequest>): _92.QueryDelegatorValidatorRequest;
                fromAmino(object: _92.QueryDelegatorValidatorRequestAmino): _92.QueryDelegatorValidatorRequest;
                toAmino(message: _92.QueryDelegatorValidatorRequest): _92.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _92.QueryDelegatorValidatorRequestAminoMsg): _92.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _92.QueryDelegatorValidatorRequest): _92.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorValidatorRequestProtoMsg): _92.QueryDelegatorValidatorRequest;
                toProto(message: _92.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorValidatorRequest): _92.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorResponse>): _92.QueryDelegatorValidatorResponse;
                fromAmino(object: _92.QueryDelegatorValidatorResponseAmino): _92.QueryDelegatorValidatorResponse;
                toAmino(message: _92.QueryDelegatorValidatorResponse): _92.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _92.QueryDelegatorValidatorResponseAminoMsg): _92.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _92.QueryDelegatorValidatorResponse): _92.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorValidatorResponseProtoMsg): _92.QueryDelegatorValidatorResponse;
                toProto(message: _92.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorValidatorResponse): _92.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _92.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_92.QueryHistoricalInfoRequest>): _92.QueryHistoricalInfoRequest;
                fromAmino(object: _92.QueryHistoricalInfoRequestAmino): _92.QueryHistoricalInfoRequest;
                toAmino(message: _92.QueryHistoricalInfoRequest): _92.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _92.QueryHistoricalInfoRequestAminoMsg): _92.QueryHistoricalInfoRequest;
                toAminoMsg(message: _92.QueryHistoricalInfoRequest): _92.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _92.QueryHistoricalInfoRequestProtoMsg): _92.QueryHistoricalInfoRequest;
                toProto(message: _92.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _92.QueryHistoricalInfoRequest): _92.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _92.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_92.QueryHistoricalInfoResponse>): _92.QueryHistoricalInfoResponse;
                fromAmino(object: _92.QueryHistoricalInfoResponseAmino): _92.QueryHistoricalInfoResponse;
                toAmino(message: _92.QueryHistoricalInfoResponse): _92.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _92.QueryHistoricalInfoResponseAminoMsg): _92.QueryHistoricalInfoResponse;
                toAminoMsg(message: _92.QueryHistoricalInfoResponse): _92.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _92.QueryHistoricalInfoResponseProtoMsg): _92.QueryHistoricalInfoResponse;
                toProto(message: _92.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _92.QueryHistoricalInfoResponse): _92.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _92.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.QueryPoolRequest;
                fromPartial(_: Partial<_92.QueryPoolRequest>): _92.QueryPoolRequest;
                fromAmino(_: _92.QueryPoolRequestAmino): _92.QueryPoolRequest;
                toAmino(_: _92.QueryPoolRequest): _92.QueryPoolRequestAmino;
                fromAminoMsg(object: _92.QueryPoolRequestAminoMsg): _92.QueryPoolRequest;
                toAminoMsg(message: _92.QueryPoolRequest): _92.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _92.QueryPoolRequestProtoMsg): _92.QueryPoolRequest;
                toProto(message: _92.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _92.QueryPoolRequest): _92.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _92.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryPoolResponse;
                fromPartial(object: Partial<_92.QueryPoolResponse>): _92.QueryPoolResponse;
                fromAmino(object: _92.QueryPoolResponseAmino): _92.QueryPoolResponse;
                toAmino(message: _92.QueryPoolResponse): _92.QueryPoolResponseAmino;
                fromAminoMsg(object: _92.QueryPoolResponseAminoMsg): _92.QueryPoolResponse;
                toAminoMsg(message: _92.QueryPoolResponse): _92.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _92.QueryPoolResponseProtoMsg): _92.QueryPoolResponse;
                toProto(message: _92.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _92.QueryPoolResponse): _92.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _92.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.QueryParamsRequest;
                fromPartial(_: Partial<_92.QueryParamsRequest>): _92.QueryParamsRequest;
                fromAmino(_: _92.QueryParamsRequestAmino): _92.QueryParamsRequest;
                toAmino(_: _92.QueryParamsRequest): _92.QueryParamsRequestAmino;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _91.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.LastValidatorPower;
                fromPartial(object: Partial<_91.LastValidatorPower>): _91.LastValidatorPower;
                fromAmino(object: _91.LastValidatorPowerAmino): _91.LastValidatorPower;
                toAmino(message: _91.LastValidatorPower): _91.LastValidatorPowerAmino;
                fromAminoMsg(object: _91.LastValidatorPowerAminoMsg): _91.LastValidatorPower;
                toAminoMsg(message: _91.LastValidatorPower): _91.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _91.LastValidatorPowerProtoMsg): _91.LastValidatorPower;
                toProto(message: _91.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _91.LastValidatorPower): _91.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _90.AuthorizationType;
            authorizationTypeToJSON(object: _90.AuthorizationType): string;
            AuthorizationType: typeof _90.AuthorizationType;
            AuthorizationTypeSDKType: typeof _90.AuthorizationType;
            AuthorizationTypeAmino: typeof _90.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _90.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.StakeAuthorization;
                fromPartial(object: Partial<_90.StakeAuthorization>): _90.StakeAuthorization;
                fromAmino(object: _90.StakeAuthorizationAmino): _90.StakeAuthorization;
                toAmino(message: _90.StakeAuthorization): _90.StakeAuthorizationAmino;
                fromAminoMsg(object: _90.StakeAuthorizationAminoMsg): _90.StakeAuthorization;
                toAminoMsg(message: _90.StakeAuthorization): _90.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _90.StakeAuthorizationProtoMsg): _90.StakeAuthorization;
                toProto(message: _90.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _90.StakeAuthorization): _90.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _90.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.StakeAuthorization_Validators;
                fromPartial(object: Partial<_90.StakeAuthorization_Validators>): _90.StakeAuthorization_Validators;
                fromAmino(object: _90.StakeAuthorization_ValidatorsAmino): _90.StakeAuthorization_Validators;
                toAmino(message: _90.StakeAuthorization_Validators): _90.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _90.StakeAuthorization_ValidatorsAminoMsg): _90.StakeAuthorization_Validators;
                toAminoMsg(message: _90.StakeAuthorization_Validators): _90.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _90.StakeAuthorization_ValidatorsProtoMsg): _90.StakeAuthorization_Validators;
                toProto(message: _90.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _90.StakeAuthorization_Validators): _90.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _95.SignMode;
                signModeToJSON(object: _95.SignMode): string;
                SignMode: typeof _95.SignMode;
                SignModeSDKType: typeof _95.SignMode;
                SignModeAmino: typeof _95.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _95.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.SignatureDescriptors;
                    fromPartial(object: Partial<_95.SignatureDescriptors>): _95.SignatureDescriptors;
                    fromAmino(object: _95.SignatureDescriptorsAmino): _95.SignatureDescriptors;
                    toAmino(message: _95.SignatureDescriptors): _95.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _95.SignatureDescriptorsAminoMsg): _95.SignatureDescriptors;
                    toAminoMsg(message: _95.SignatureDescriptors): _95.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _95.SignatureDescriptorsProtoMsg): _95.SignatureDescriptors;
                    toProto(message: _95.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _95.SignatureDescriptors): _95.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _95.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.SignatureDescriptor;
                    fromPartial(object: Partial<_95.SignatureDescriptor>): _95.SignatureDescriptor;
                    fromAmino(object: _95.SignatureDescriptorAmino): _95.SignatureDescriptor;
                    toAmino(message: _95.SignatureDescriptor): _95.SignatureDescriptorAmino;
                    fromAminoMsg(object: _95.SignatureDescriptorAminoMsg): _95.SignatureDescriptor;
                    toAminoMsg(message: _95.SignatureDescriptor): _95.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _95.SignatureDescriptorProtoMsg): _95.SignatureDescriptor;
                    toProto(message: _95.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _95.SignatureDescriptor): _95.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _95.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_95.SignatureDescriptor_Data>): _95.SignatureDescriptor_Data;
                    fromAmino(object: _95.SignatureDescriptor_DataAmino): _95.SignatureDescriptor_Data;
                    toAmino(message: _95.SignatureDescriptor_Data): _95.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _95.SignatureDescriptor_DataAminoMsg): _95.SignatureDescriptor_Data;
                    toAminoMsg(message: _95.SignatureDescriptor_Data): _95.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _95.SignatureDescriptor_DataProtoMsg): _95.SignatureDescriptor_Data;
                    toProto(message: _95.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _95.SignatureDescriptor_Data): _95.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _95.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_95.SignatureDescriptor_Data_Single>): _95.SignatureDescriptor_Data_Single;
                    fromAmino(object: _95.SignatureDescriptor_Data_SingleAmino): _95.SignatureDescriptor_Data_Single;
                    toAmino(message: _95.SignatureDescriptor_Data_Single): _95.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _95.SignatureDescriptor_Data_SingleAminoMsg): _95.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _95.SignatureDescriptor_Data_Single): _95.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _95.SignatureDescriptor_Data_SingleProtoMsg): _95.SignatureDescriptor_Data_Single;
                    toProto(message: _95.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _95.SignatureDescriptor_Data_Single): _95.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _95.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_95.SignatureDescriptor_Data_Multi>): _95.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _95.SignatureDescriptor_Data_MultiAmino): _95.SignatureDescriptor_Data_Multi;
                    toAmino(message: _95.SignatureDescriptor_Data_Multi): _95.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _95.SignatureDescriptor_Data_MultiAminoMsg): _95.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _95.SignatureDescriptor_Data_Multi): _95.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _95.SignatureDescriptor_Data_MultiProtoMsg): _95.SignatureDescriptor_Data_Multi;
                    toProto(message: _95.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _95.SignatureDescriptor_Data_Multi): _95.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _205.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _96.SimulateRequest): Promise<_96.SimulateResponse>;
                getTx(request: _96.GetTxRequest): Promise<_96.GetTxResponse>;
                broadcastTx(request: _96.BroadcastTxRequest): Promise<_96.BroadcastTxResponse>;
                getTxsEvent(request: _96.GetTxsEventRequest): Promise<_96.GetTxsEventResponse>;
                getBlockWithTxs(request: _96.GetBlockWithTxsRequest): Promise<_96.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _186.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _97.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.Tx;
                fromPartial(object: Partial<_97.Tx>): _97.Tx;
                fromAmino(object: _97.TxAmino): _97.Tx;
                toAmino(message: _97.Tx): _97.TxAmino;
                fromAminoMsg(object: _97.TxAminoMsg): _97.Tx;
                toAminoMsg(message: _97.Tx): _97.TxAminoMsg;
                fromProtoMsg(message: _97.TxProtoMsg): _97.Tx;
                toProto(message: _97.Tx): Uint8Array;
                toProtoMsg(message: _97.Tx): _97.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _97.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.TxRaw;
                fromPartial(object: Partial<_97.TxRaw>): _97.TxRaw;
                fromAmino(object: _97.TxRawAmino): _97.TxRaw;
                toAmino(message: _97.TxRaw): _97.TxRawAmino;
                fromAminoMsg(object: _97.TxRawAminoMsg): _97.TxRaw;
                toAminoMsg(message: _97.TxRaw): _97.TxRawAminoMsg;
                fromProtoMsg(message: _97.TxRawProtoMsg): _97.TxRaw;
                toProto(message: _97.TxRaw): Uint8Array;
                toProtoMsg(message: _97.TxRaw): _97.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _97.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.SignDoc;
                fromPartial(object: Partial<_97.SignDoc>): _97.SignDoc;
                fromAmino(object: _97.SignDocAmino): _97.SignDoc;
                toAmino(message: _97.SignDoc): _97.SignDocAmino;
                fromAminoMsg(object: _97.SignDocAminoMsg): _97.SignDoc;
                toAminoMsg(message: _97.SignDoc): _97.SignDocAminoMsg;
                fromProtoMsg(message: _97.SignDocProtoMsg): _97.SignDoc;
                toProto(message: _97.SignDoc): Uint8Array;
                toProtoMsg(message: _97.SignDoc): _97.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _97.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.SignDocDirectAux;
                fromPartial(object: Partial<_97.SignDocDirectAux>): _97.SignDocDirectAux;
                fromAmino(object: _97.SignDocDirectAuxAmino): _97.SignDocDirectAux;
                toAmino(message: _97.SignDocDirectAux): _97.SignDocDirectAuxAmino;
                fromAminoMsg(object: _97.SignDocDirectAuxAminoMsg): _97.SignDocDirectAux;
                toAminoMsg(message: _97.SignDocDirectAux): _97.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _97.SignDocDirectAuxProtoMsg): _97.SignDocDirectAux;
                toProto(message: _97.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _97.SignDocDirectAux): _97.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _97.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.TxBody;
                fromPartial(object: Partial<_97.TxBody>): _97.TxBody;
                fromAmino(object: _97.TxBodyAmino): _97.TxBody;
                toAmino(message: _97.TxBody): _97.TxBodyAmino;
                fromAminoMsg(object: _97.TxBodyAminoMsg): _97.TxBody;
                toAminoMsg(message: _97.TxBody): _97.TxBodyAminoMsg;
                fromProtoMsg(message: _97.TxBodyProtoMsg): _97.TxBody;
                toProto(message: _97.TxBody): Uint8Array;
                toProtoMsg(message: _97.TxBody): _97.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _97.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.AuthInfo;
                fromPartial(object: Partial<_97.AuthInfo>): _97.AuthInfo;
                fromAmino(object: _97.AuthInfoAmino): _97.AuthInfo;
                toAmino(message: _97.AuthInfo): _97.AuthInfoAmino;
                fromAminoMsg(object: _97.AuthInfoAminoMsg): _97.AuthInfo;
                toAminoMsg(message: _97.AuthInfo): _97.AuthInfoAminoMsg;
                fromProtoMsg(message: _97.AuthInfoProtoMsg): _97.AuthInfo;
                toProto(message: _97.AuthInfo): Uint8Array;
                toProtoMsg(message: _97.AuthInfo): _97.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _97.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.SignerInfo;
                fromPartial(object: Partial<_97.SignerInfo>): _97.SignerInfo;
                fromAmino(object: _97.SignerInfoAmino): _97.SignerInfo;
                toAmino(message: _97.SignerInfo): _97.SignerInfoAmino;
                fromAminoMsg(object: _97.SignerInfoAminoMsg): _97.SignerInfo;
                toAminoMsg(message: _97.SignerInfo): _97.SignerInfoAminoMsg;
                fromProtoMsg(message: _97.SignerInfoProtoMsg): _97.SignerInfo;
                toProto(message: _97.SignerInfo): Uint8Array;
                toProtoMsg(message: _97.SignerInfo): _97.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _97.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.ModeInfo;
                fromPartial(object: Partial<_97.ModeInfo>): _97.ModeInfo;
                fromAmino(object: _97.ModeInfoAmino): _97.ModeInfo;
                toAmino(message: _97.ModeInfo): _97.ModeInfoAmino;
                fromAminoMsg(object: _97.ModeInfoAminoMsg): _97.ModeInfo;
                toAminoMsg(message: _97.ModeInfo): _97.ModeInfoAminoMsg;
                fromProtoMsg(message: _97.ModeInfoProtoMsg): _97.ModeInfo;
                toProto(message: _97.ModeInfo): Uint8Array;
                toProtoMsg(message: _97.ModeInfo): _97.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _97.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.ModeInfo_Single;
                fromPartial(object: Partial<_97.ModeInfo_Single>): _97.ModeInfo_Single;
                fromAmino(object: _97.ModeInfo_SingleAmino): _97.ModeInfo_Single;
                toAmino(message: _97.ModeInfo_Single): _97.ModeInfo_SingleAmino;
                fromAminoMsg(object: _97.ModeInfo_SingleAminoMsg): _97.ModeInfo_Single;
                toAminoMsg(message: _97.ModeInfo_Single): _97.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _97.ModeInfo_SingleProtoMsg): _97.ModeInfo_Single;
                toProto(message: _97.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _97.ModeInfo_Single): _97.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _97.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.ModeInfo_Multi;
                fromPartial(object: Partial<_97.ModeInfo_Multi>): _97.ModeInfo_Multi;
                fromAmino(object: _97.ModeInfo_MultiAmino): _97.ModeInfo_Multi;
                toAmino(message: _97.ModeInfo_Multi): _97.ModeInfo_MultiAmino;
                fromAminoMsg(object: _97.ModeInfo_MultiAminoMsg): _97.ModeInfo_Multi;
                toAminoMsg(message: _97.ModeInfo_Multi): _97.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _97.ModeInfo_MultiProtoMsg): _97.ModeInfo_Multi;
                toProto(message: _97.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _97.ModeInfo_Multi): _97.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _97.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.Fee;
                fromPartial(object: Partial<_97.Fee>): _97.Fee;
                fromAmino(object: _97.FeeAmino): _97.Fee;
                toAmino(message: _97.Fee): _97.FeeAmino;
                fromAminoMsg(object: _97.FeeAminoMsg): _97.Fee;
                toAminoMsg(message: _97.Fee): _97.FeeAminoMsg;
                fromProtoMsg(message: _97.FeeProtoMsg): _97.Fee;
                toProto(message: _97.Fee): Uint8Array;
                toProtoMsg(message: _97.Fee): _97.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _97.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.Tip;
                fromPartial(object: Partial<_97.Tip>): _97.Tip;
                fromAmino(object: _97.TipAmino): _97.Tip;
                toAmino(message: _97.Tip): _97.TipAmino;
                fromAminoMsg(object: _97.TipAminoMsg): _97.Tip;
                toAminoMsg(message: _97.Tip): _97.TipAminoMsg;
                fromProtoMsg(message: _97.TipProtoMsg): _97.Tip;
                toProto(message: _97.Tip): Uint8Array;
                toProtoMsg(message: _97.Tip): _97.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _97.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.AuxSignerData;
                fromPartial(object: Partial<_97.AuxSignerData>): _97.AuxSignerData;
                fromAmino(object: _97.AuxSignerDataAmino): _97.AuxSignerData;
                toAmino(message: _97.AuxSignerData): _97.AuxSignerDataAmino;
                fromAminoMsg(object: _97.AuxSignerDataAminoMsg): _97.AuxSignerData;
                toAminoMsg(message: _97.AuxSignerData): _97.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _97.AuxSignerDataProtoMsg): _97.AuxSignerData;
                toProto(message: _97.AuxSignerData): Uint8Array;
                toProtoMsg(message: _97.AuxSignerData): _97.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _96.OrderBy;
            orderByToJSON(object: _96.OrderBy): string;
            broadcastModeFromJSON(object: any): _96.BroadcastMode;
            broadcastModeToJSON(object: _96.BroadcastMode): string;
            OrderBy: typeof _96.OrderBy;
            OrderBySDKType: typeof _96.OrderBy;
            OrderByAmino: typeof _96.OrderBy;
            BroadcastMode: typeof _96.BroadcastMode;
            BroadcastModeSDKType: typeof _96.BroadcastMode;
            BroadcastModeAmino: typeof _96.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _96.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.GetTxsEventRequest;
                fromPartial(object: Partial<_96.GetTxsEventRequest>): _96.GetTxsEventRequest;
                fromAmino(object: _96.GetTxsEventRequestAmino): _96.GetTxsEventRequest;
                toAmino(message: _96.GetTxsEventRequest): _96.GetTxsEventRequestAmino;
                fromAminoMsg(object: _96.GetTxsEventRequestAminoMsg): _96.GetTxsEventRequest;
                toAminoMsg(message: _96.GetTxsEventRequest): _96.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _96.GetTxsEventRequestProtoMsg): _96.GetTxsEventRequest;
                toProto(message: _96.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _96.GetTxsEventRequest): _96.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _96.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.GetTxsEventResponse;
                fromPartial(object: Partial<_96.GetTxsEventResponse>): _96.GetTxsEventResponse;
                fromAmino(object: _96.GetTxsEventResponseAmino): _96.GetTxsEventResponse;
                toAmino(message: _96.GetTxsEventResponse): _96.GetTxsEventResponseAmino;
                fromAminoMsg(object: _96.GetTxsEventResponseAminoMsg): _96.GetTxsEventResponse;
                toAminoMsg(message: _96.GetTxsEventResponse): _96.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _96.GetTxsEventResponseProtoMsg): _96.GetTxsEventResponse;
                toProto(message: _96.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _96.GetTxsEventResponse): _96.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _96.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.BroadcastTxRequest;
                fromPartial(object: Partial<_96.BroadcastTxRequest>): _96.BroadcastTxRequest;
                fromAmino(object: _96.BroadcastTxRequestAmino): _96.BroadcastTxRequest;
                toAmino(message: _96.BroadcastTxRequest): _96.BroadcastTxRequestAmino;
                fromAminoMsg(object: _96.BroadcastTxRequestAminoMsg): _96.BroadcastTxRequest;
                toAminoMsg(message: _96.BroadcastTxRequest): _96.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _96.BroadcastTxRequestProtoMsg): _96.BroadcastTxRequest;
                toProto(message: _96.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _96.BroadcastTxRequest): _96.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _96.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.BroadcastTxResponse;
                fromPartial(object: Partial<_96.BroadcastTxResponse>): _96.BroadcastTxResponse;
                fromAmino(object: _96.BroadcastTxResponseAmino): _96.BroadcastTxResponse;
                toAmino(message: _96.BroadcastTxResponse): _96.BroadcastTxResponseAmino;
                fromAminoMsg(object: _96.BroadcastTxResponseAminoMsg): _96.BroadcastTxResponse;
                toAminoMsg(message: _96.BroadcastTxResponse): _96.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _96.BroadcastTxResponseProtoMsg): _96.BroadcastTxResponse;
                toProto(message: _96.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _96.BroadcastTxResponse): _96.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _96.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.SimulateRequest;
                fromPartial(object: Partial<_96.SimulateRequest>): _96.SimulateRequest;
                fromAmino(object: _96.SimulateRequestAmino): _96.SimulateRequest;
                toAmino(message: _96.SimulateRequest): _96.SimulateRequestAmino;
                fromAminoMsg(object: _96.SimulateRequestAminoMsg): _96.SimulateRequest;
                toAminoMsg(message: _96.SimulateRequest): _96.SimulateRequestAminoMsg;
                fromProtoMsg(message: _96.SimulateRequestProtoMsg): _96.SimulateRequest;
                toProto(message: _96.SimulateRequest): Uint8Array;
                toProtoMsg(message: _96.SimulateRequest): _96.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _96.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.SimulateResponse;
                fromPartial(object: Partial<_96.SimulateResponse>): _96.SimulateResponse;
                fromAmino(object: _96.SimulateResponseAmino): _96.SimulateResponse;
                toAmino(message: _96.SimulateResponse): _96.SimulateResponseAmino;
                fromAminoMsg(object: _96.SimulateResponseAminoMsg): _96.SimulateResponse;
                toAminoMsg(message: _96.SimulateResponse): _96.SimulateResponseAminoMsg;
                fromProtoMsg(message: _96.SimulateResponseProtoMsg): _96.SimulateResponse;
                toProto(message: _96.SimulateResponse): Uint8Array;
                toProtoMsg(message: _96.SimulateResponse): _96.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _96.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.GetTxRequest;
                fromPartial(object: Partial<_96.GetTxRequest>): _96.GetTxRequest;
                fromAmino(object: _96.GetTxRequestAmino): _96.GetTxRequest;
                toAmino(message: _96.GetTxRequest): _96.GetTxRequestAmino;
                fromAminoMsg(object: _96.GetTxRequestAminoMsg): _96.GetTxRequest;
                toAminoMsg(message: _96.GetTxRequest): _96.GetTxRequestAminoMsg;
                fromProtoMsg(message: _96.GetTxRequestProtoMsg): _96.GetTxRequest;
                toProto(message: _96.GetTxRequest): Uint8Array;
                toProtoMsg(message: _96.GetTxRequest): _96.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _96.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.GetTxResponse;
                fromPartial(object: Partial<_96.GetTxResponse>): _96.GetTxResponse;
                fromAmino(object: _96.GetTxResponseAmino): _96.GetTxResponse;
                toAmino(message: _96.GetTxResponse): _96.GetTxResponseAmino;
                fromAminoMsg(object: _96.GetTxResponseAminoMsg): _96.GetTxResponse;
                toAminoMsg(message: _96.GetTxResponse): _96.GetTxResponseAminoMsg;
                fromProtoMsg(message: _96.GetTxResponseProtoMsg): _96.GetTxResponse;
                toProto(message: _96.GetTxResponse): Uint8Array;
                toProtoMsg(message: _96.GetTxResponse): _96.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _96.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_96.GetBlockWithTxsRequest>): _96.GetBlockWithTxsRequest;
                fromAmino(object: _96.GetBlockWithTxsRequestAmino): _96.GetBlockWithTxsRequest;
                toAmino(message: _96.GetBlockWithTxsRequest): _96.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _96.GetBlockWithTxsRequestAminoMsg): _96.GetBlockWithTxsRequest;
                toAminoMsg(message: _96.GetBlockWithTxsRequest): _96.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _96.GetBlockWithTxsRequestProtoMsg): _96.GetBlockWithTxsRequest;
                toProto(message: _96.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _96.GetBlockWithTxsRequest): _96.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _96.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_96.GetBlockWithTxsResponse>): _96.GetBlockWithTxsResponse;
                fromAmino(object: _96.GetBlockWithTxsResponseAmino): _96.GetBlockWithTxsResponse;
                toAmino(message: _96.GetBlockWithTxsResponse): _96.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _96.GetBlockWithTxsResponseAminoMsg): _96.GetBlockWithTxsResponse;
                toAminoMsg(message: _96.GetBlockWithTxsResponse): _96.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _96.GetBlockWithTxsResponseProtoMsg): _96.GetBlockWithTxsResponse;
                toProto(message: _96.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _96.GetBlockWithTxsResponse): _96.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _219.MsgClientImpl;
            QueryClientImpl: typeof _206.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _98.QueryCurrentPlanRequest): Promise<_98.QueryCurrentPlanResponse>;
                appliedPlan(request: _98.QueryAppliedPlanRequest): Promise<_98.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _98.QueryUpgradedConsensusStateRequest): Promise<_98.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _98.QueryModuleVersionsRequest): Promise<_98.QueryModuleVersionsResponse>;
                authority(request?: _98.QueryAuthorityRequest): Promise<_98.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _187.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _99.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _99.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _99.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _99.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _99.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _99.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _99.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _99.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _99.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _99.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _99.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _99.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _99.MsgSoftwareUpgrade) => _99.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _99.MsgSoftwareUpgradeAmino) => _99.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _99.MsgCancelUpgrade) => _99.MsgCancelUpgradeAmino;
                    fromAmino: (object: _99.MsgCancelUpgradeAmino) => _99.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _100.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.Plan;
                fromPartial(object: Partial<_100.Plan>): _100.Plan;
                fromAmino(object: _100.PlanAmino): _100.Plan;
                toAmino(message: _100.Plan): _100.PlanAmino;
                fromAminoMsg(object: _100.PlanAminoMsg): _100.Plan;
                toAminoMsg(message: _100.Plan): _100.PlanAminoMsg;
                fromProtoMsg(message: _100.PlanProtoMsg): _100.Plan;
                toProto(message: _100.Plan): Uint8Array;
                toProtoMsg(message: _100.Plan): _100.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _100.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_100.SoftwareUpgradeProposal>): _100.SoftwareUpgradeProposal;
                fromAmino(object: _100.SoftwareUpgradeProposalAmino): _100.SoftwareUpgradeProposal;
                toAmino(message: _100.SoftwareUpgradeProposal): _100.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _100.SoftwareUpgradeProposalAminoMsg): _100.SoftwareUpgradeProposal;
                toAminoMsg(message: _100.SoftwareUpgradeProposal): _100.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _100.SoftwareUpgradeProposalProtoMsg): _100.SoftwareUpgradeProposal;
                toProto(message: _100.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _100.SoftwareUpgradeProposal): _100.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _100.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_100.CancelSoftwareUpgradeProposal>): _100.CancelSoftwareUpgradeProposal;
                fromAmino(object: _100.CancelSoftwareUpgradeProposalAmino): _100.CancelSoftwareUpgradeProposal;
                toAmino(message: _100.CancelSoftwareUpgradeProposal): _100.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _100.CancelSoftwareUpgradeProposalAminoMsg): _100.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _100.CancelSoftwareUpgradeProposal): _100.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _100.CancelSoftwareUpgradeProposalProtoMsg): _100.CancelSoftwareUpgradeProposal;
                toProto(message: _100.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _100.CancelSoftwareUpgradeProposal): _100.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _100.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.ModuleVersion;
                fromPartial(object: Partial<_100.ModuleVersion>): _100.ModuleVersion;
                fromAmino(object: _100.ModuleVersionAmino): _100.ModuleVersion;
                toAmino(message: _100.ModuleVersion): _100.ModuleVersionAmino;
                fromAminoMsg(object: _100.ModuleVersionAminoMsg): _100.ModuleVersion;
                toAminoMsg(message: _100.ModuleVersion): _100.ModuleVersionAminoMsg;
                fromProtoMsg(message: _100.ModuleVersionProtoMsg): _100.ModuleVersion;
                toProto(message: _100.ModuleVersion): Uint8Array;
                toProtoMsg(message: _100.ModuleVersion): _100.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _99.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_99.MsgSoftwareUpgrade>): _99.MsgSoftwareUpgrade;
                fromAmino(object: _99.MsgSoftwareUpgradeAmino): _99.MsgSoftwareUpgrade;
                toAmino(message: _99.MsgSoftwareUpgrade): _99.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _99.MsgSoftwareUpgradeAminoMsg): _99.MsgSoftwareUpgrade;
                toAminoMsg(message: _99.MsgSoftwareUpgrade): _99.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _99.MsgSoftwareUpgradeProtoMsg): _99.MsgSoftwareUpgrade;
                toProto(message: _99.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _99.MsgSoftwareUpgrade): _99.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _99.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _99.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_99.MsgSoftwareUpgradeResponse>): _99.MsgSoftwareUpgradeResponse;
                fromAmino(_: _99.MsgSoftwareUpgradeResponseAmino): _99.MsgSoftwareUpgradeResponse;
                toAmino(_: _99.MsgSoftwareUpgradeResponse): _99.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _99.MsgSoftwareUpgradeResponseAminoMsg): _99.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _99.MsgSoftwareUpgradeResponse): _99.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _99.MsgSoftwareUpgradeResponseProtoMsg): _99.MsgSoftwareUpgradeResponse;
                toProto(message: _99.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _99.MsgSoftwareUpgradeResponse): _99.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _99.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.MsgCancelUpgrade;
                fromPartial(object: Partial<_99.MsgCancelUpgrade>): _99.MsgCancelUpgrade;
                fromAmino(object: _99.MsgCancelUpgradeAmino): _99.MsgCancelUpgrade;
                toAmino(message: _99.MsgCancelUpgrade): _99.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _99.MsgCancelUpgradeAminoMsg): _99.MsgCancelUpgrade;
                toAminoMsg(message: _99.MsgCancelUpgrade): _99.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _99.MsgCancelUpgradeProtoMsg): _99.MsgCancelUpgrade;
                toProto(message: _99.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _99.MsgCancelUpgrade): _99.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _99.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _99.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_99.MsgCancelUpgradeResponse>): _99.MsgCancelUpgradeResponse;
                fromAmino(_: _99.MsgCancelUpgradeResponseAmino): _99.MsgCancelUpgradeResponse;
                toAmino(_: _99.MsgCancelUpgradeResponse): _99.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _99.MsgCancelUpgradeResponseAminoMsg): _99.MsgCancelUpgradeResponse;
                toAminoMsg(message: _99.MsgCancelUpgradeResponse): _99.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _99.MsgCancelUpgradeResponseProtoMsg): _99.MsgCancelUpgradeResponse;
                toProto(message: _99.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _99.MsgCancelUpgradeResponse): _99.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _98.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _98.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_98.QueryCurrentPlanRequest>): _98.QueryCurrentPlanRequest;
                fromAmino(_: _98.QueryCurrentPlanRequestAmino): _98.QueryCurrentPlanRequest;
                toAmino(_: _98.QueryCurrentPlanRequest): _98.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _98.QueryCurrentPlanRequestAminoMsg): _98.QueryCurrentPlanRequest;
                toAminoMsg(message: _98.QueryCurrentPlanRequest): _98.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _98.QueryCurrentPlanRequestProtoMsg): _98.QueryCurrentPlanRequest;
                toProto(message: _98.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _98.QueryCurrentPlanRequest): _98.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _98.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_98.QueryCurrentPlanResponse>): _98.QueryCurrentPlanResponse;
                fromAmino(object: _98.QueryCurrentPlanResponseAmino): _98.QueryCurrentPlanResponse;
                toAmino(message: _98.QueryCurrentPlanResponse): _98.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _98.QueryCurrentPlanResponseAminoMsg): _98.QueryCurrentPlanResponse;
                toAminoMsg(message: _98.QueryCurrentPlanResponse): _98.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _98.QueryCurrentPlanResponseProtoMsg): _98.QueryCurrentPlanResponse;
                toProto(message: _98.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _98.QueryCurrentPlanResponse): _98.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _98.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_98.QueryAppliedPlanRequest>): _98.QueryAppliedPlanRequest;
                fromAmino(object: _98.QueryAppliedPlanRequestAmino): _98.QueryAppliedPlanRequest;
                toAmino(message: _98.QueryAppliedPlanRequest): _98.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _98.QueryAppliedPlanRequestAminoMsg): _98.QueryAppliedPlanRequest;
                toAminoMsg(message: _98.QueryAppliedPlanRequest): _98.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _98.QueryAppliedPlanRequestProtoMsg): _98.QueryAppliedPlanRequest;
                toProto(message: _98.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _98.QueryAppliedPlanRequest): _98.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _98.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_98.QueryAppliedPlanResponse>): _98.QueryAppliedPlanResponse;
                fromAmino(object: _98.QueryAppliedPlanResponseAmino): _98.QueryAppliedPlanResponse;
                toAmino(message: _98.QueryAppliedPlanResponse): _98.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _98.QueryAppliedPlanResponseAminoMsg): _98.QueryAppliedPlanResponse;
                toAminoMsg(message: _98.QueryAppliedPlanResponse): _98.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _98.QueryAppliedPlanResponseProtoMsg): _98.QueryAppliedPlanResponse;
                toProto(message: _98.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _98.QueryAppliedPlanResponse): _98.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _98.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_98.QueryUpgradedConsensusStateRequest>): _98.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _98.QueryUpgradedConsensusStateRequestAmino): _98.QueryUpgradedConsensusStateRequest;
                toAmino(message: _98.QueryUpgradedConsensusStateRequest): _98.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _98.QueryUpgradedConsensusStateRequestAminoMsg): _98.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _98.QueryUpgradedConsensusStateRequest): _98.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _98.QueryUpgradedConsensusStateRequestProtoMsg): _98.QueryUpgradedConsensusStateRequest;
                toProto(message: _98.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _98.QueryUpgradedConsensusStateRequest): _98.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _98.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_98.QueryUpgradedConsensusStateResponse>): _98.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _98.QueryUpgradedConsensusStateResponseAmino): _98.QueryUpgradedConsensusStateResponse;
                toAmino(message: _98.QueryUpgradedConsensusStateResponse): _98.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _98.QueryUpgradedConsensusStateResponseAminoMsg): _98.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _98.QueryUpgradedConsensusStateResponse): _98.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _98.QueryUpgradedConsensusStateResponseProtoMsg): _98.QueryUpgradedConsensusStateResponse;
                toProto(message: _98.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _98.QueryUpgradedConsensusStateResponse): _98.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _98.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_98.QueryModuleVersionsRequest>): _98.QueryModuleVersionsRequest;
                fromAmino(object: _98.QueryModuleVersionsRequestAmino): _98.QueryModuleVersionsRequest;
                toAmino(message: _98.QueryModuleVersionsRequest): _98.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _98.QueryModuleVersionsRequestAminoMsg): _98.QueryModuleVersionsRequest;
                toAminoMsg(message: _98.QueryModuleVersionsRequest): _98.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _98.QueryModuleVersionsRequestProtoMsg): _98.QueryModuleVersionsRequest;
                toProto(message: _98.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _98.QueryModuleVersionsRequest): _98.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _98.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_98.QueryModuleVersionsResponse>): _98.QueryModuleVersionsResponse;
                fromAmino(object: _98.QueryModuleVersionsResponseAmino): _98.QueryModuleVersionsResponse;
                toAmino(message: _98.QueryModuleVersionsResponse): _98.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _98.QueryModuleVersionsResponseAminoMsg): _98.QueryModuleVersionsResponse;
                toAminoMsg(message: _98.QueryModuleVersionsResponse): _98.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _98.QueryModuleVersionsResponseProtoMsg): _98.QueryModuleVersionsResponse;
                toProto(message: _98.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _98.QueryModuleVersionsResponse): _98.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _98.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _98.QueryAuthorityRequest;
                fromPartial(_: Partial<_98.QueryAuthorityRequest>): _98.QueryAuthorityRequest;
                fromAmino(_: _98.QueryAuthorityRequestAmino): _98.QueryAuthorityRequest;
                toAmino(_: _98.QueryAuthorityRequest): _98.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _98.QueryAuthorityRequestAminoMsg): _98.QueryAuthorityRequest;
                toAminoMsg(message: _98.QueryAuthorityRequest): _98.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _98.QueryAuthorityRequestProtoMsg): _98.QueryAuthorityRequest;
                toProto(message: _98.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _98.QueryAuthorityRequest): _98.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _98.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryAuthorityResponse;
                fromPartial(object: Partial<_98.QueryAuthorityResponse>): _98.QueryAuthorityResponse;
                fromAmino(object: _98.QueryAuthorityResponseAmino): _98.QueryAuthorityResponse;
                toAmino(message: _98.QueryAuthorityResponse): _98.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _98.QueryAuthorityResponseAminoMsg): _98.QueryAuthorityResponse;
                toAminoMsg(message: _98.QueryAuthorityResponse): _98.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _98.QueryAuthorityResponseProtoMsg): _98.QueryAuthorityResponse;
                toProto(message: _98.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _98.QueryAuthorityResponse): _98.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _220.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _101.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _101.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _101.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _101.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _101.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _101.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _101.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _101.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _101.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _101.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _101.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _101.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _101.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _101.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _101.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _101.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _101.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _101.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _101.MsgCreateVestingAccount) => _101.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _101.MsgCreateVestingAccountAmino) => _101.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _101.MsgCreatePermanentLockedAccount) => _101.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _101.MsgCreatePermanentLockedAccountAmino) => _101.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _101.MsgCreatePeriodicVestingAccount) => _101.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _101.MsgCreatePeriodicVestingAccountAmino) => _101.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _102.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.BaseVestingAccount;
                fromPartial(object: Partial<_102.BaseVestingAccount>): _102.BaseVestingAccount;
                fromAmino(object: _102.BaseVestingAccountAmino): _102.BaseVestingAccount;
                toAmino(message: _102.BaseVestingAccount): _102.BaseVestingAccountAmino;
                fromAminoMsg(object: _102.BaseVestingAccountAminoMsg): _102.BaseVestingAccount;
                toAminoMsg(message: _102.BaseVestingAccount): _102.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _102.BaseVestingAccountProtoMsg): _102.BaseVestingAccount;
                toProto(message: _102.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _102.BaseVestingAccount): _102.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _102.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.ContinuousVestingAccount;
                fromPartial(object: Partial<_102.ContinuousVestingAccount>): _102.ContinuousVestingAccount;
                fromAmino(object: _102.ContinuousVestingAccountAmino): _102.ContinuousVestingAccount;
                toAmino(message: _102.ContinuousVestingAccount): _102.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _102.ContinuousVestingAccountAminoMsg): _102.ContinuousVestingAccount;
                toAminoMsg(message: _102.ContinuousVestingAccount): _102.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _102.ContinuousVestingAccountProtoMsg): _102.ContinuousVestingAccount;
                toProto(message: _102.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _102.ContinuousVestingAccount): _102.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _102.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.DelayedVestingAccount;
                fromPartial(object: Partial<_102.DelayedVestingAccount>): _102.DelayedVestingAccount;
                fromAmino(object: _102.DelayedVestingAccountAmino): _102.DelayedVestingAccount;
                toAmino(message: _102.DelayedVestingAccount): _102.DelayedVestingAccountAmino;
                fromAminoMsg(object: _102.DelayedVestingAccountAminoMsg): _102.DelayedVestingAccount;
                toAminoMsg(message: _102.DelayedVestingAccount): _102.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _102.DelayedVestingAccountProtoMsg): _102.DelayedVestingAccount;
                toProto(message: _102.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _102.DelayedVestingAccount): _102.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _102.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.Period;
                fromPartial(object: Partial<_102.Period>): _102.Period;
                fromAmino(object: _102.PeriodAmino): _102.Period;
                toAmino(message: _102.Period): _102.PeriodAmino;
                fromAminoMsg(object: _102.PeriodAminoMsg): _102.Period;
                toAminoMsg(message: _102.Period): _102.PeriodAminoMsg;
                fromProtoMsg(message: _102.PeriodProtoMsg): _102.Period;
                toProto(message: _102.Period): Uint8Array;
                toProtoMsg(message: _102.Period): _102.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _102.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.PeriodicVestingAccount;
                fromPartial(object: Partial<_102.PeriodicVestingAccount>): _102.PeriodicVestingAccount;
                fromAmino(object: _102.PeriodicVestingAccountAmino): _102.PeriodicVestingAccount;
                toAmino(message: _102.PeriodicVestingAccount): _102.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _102.PeriodicVestingAccountAminoMsg): _102.PeriodicVestingAccount;
                toAminoMsg(message: _102.PeriodicVestingAccount): _102.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _102.PeriodicVestingAccountProtoMsg): _102.PeriodicVestingAccount;
                toProto(message: _102.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _102.PeriodicVestingAccount): _102.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _102.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.PermanentLockedAccount;
                fromPartial(object: Partial<_102.PermanentLockedAccount>): _102.PermanentLockedAccount;
                fromAmino(object: _102.PermanentLockedAccountAmino): _102.PermanentLockedAccount;
                toAmino(message: _102.PermanentLockedAccount): _102.PermanentLockedAccountAmino;
                fromAminoMsg(object: _102.PermanentLockedAccountAminoMsg): _102.PermanentLockedAccount;
                toAminoMsg(message: _102.PermanentLockedAccount): _102.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _102.PermanentLockedAccountProtoMsg): _102.PermanentLockedAccount;
                toProto(message: _102.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _102.PermanentLockedAccount): _102.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _101.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgCreateVestingAccount;
                fromPartial(object: Partial<_101.MsgCreateVestingAccount>): _101.MsgCreateVestingAccount;
                fromAmino(object: _101.MsgCreateVestingAccountAmino): _101.MsgCreateVestingAccount;
                toAmino(message: _101.MsgCreateVestingAccount): _101.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _101.MsgCreateVestingAccountAminoMsg): _101.MsgCreateVestingAccount;
                toAminoMsg(message: _101.MsgCreateVestingAccount): _101.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _101.MsgCreateVestingAccountProtoMsg): _101.MsgCreateVestingAccount;
                toProto(message: _101.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _101.MsgCreateVestingAccount): _101.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _101.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _101.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_101.MsgCreateVestingAccountResponse>): _101.MsgCreateVestingAccountResponse;
                fromAmino(_: _101.MsgCreateVestingAccountResponseAmino): _101.MsgCreateVestingAccountResponse;
                toAmino(_: _101.MsgCreateVestingAccountResponse): _101.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _101.MsgCreateVestingAccountResponseAminoMsg): _101.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _101.MsgCreateVestingAccountResponse): _101.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _101.MsgCreateVestingAccountResponseProtoMsg): _101.MsgCreateVestingAccountResponse;
                toProto(message: _101.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _101.MsgCreateVestingAccountResponse): _101.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _101.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_101.MsgCreatePermanentLockedAccount>): _101.MsgCreatePermanentLockedAccount;
                fromAmino(object: _101.MsgCreatePermanentLockedAccountAmino): _101.MsgCreatePermanentLockedAccount;
                toAmino(message: _101.MsgCreatePermanentLockedAccount): _101.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _101.MsgCreatePermanentLockedAccountAminoMsg): _101.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _101.MsgCreatePermanentLockedAccount): _101.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _101.MsgCreatePermanentLockedAccountProtoMsg): _101.MsgCreatePermanentLockedAccount;
                toProto(message: _101.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _101.MsgCreatePermanentLockedAccount): _101.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _101.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _101.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_101.MsgCreatePermanentLockedAccountResponse>): _101.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _101.MsgCreatePermanentLockedAccountResponseAmino): _101.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _101.MsgCreatePermanentLockedAccountResponse): _101.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _101.MsgCreatePermanentLockedAccountResponseAminoMsg): _101.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _101.MsgCreatePermanentLockedAccountResponse): _101.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _101.MsgCreatePermanentLockedAccountResponseProtoMsg): _101.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _101.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _101.MsgCreatePermanentLockedAccountResponse): _101.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _101.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_101.MsgCreatePeriodicVestingAccount>): _101.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _101.MsgCreatePeriodicVestingAccountAmino): _101.MsgCreatePeriodicVestingAccount;
                toAmino(message: _101.MsgCreatePeriodicVestingAccount): _101.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _101.MsgCreatePeriodicVestingAccountAminoMsg): _101.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _101.MsgCreatePeriodicVestingAccount): _101.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _101.MsgCreatePeriodicVestingAccountProtoMsg): _101.MsgCreatePeriodicVestingAccount;
                toProto(message: _101.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _101.MsgCreatePeriodicVestingAccount): _101.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _101.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _101.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_101.MsgCreatePeriodicVestingAccountResponse>): _101.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _101.MsgCreatePeriodicVestingAccountResponseAmino): _101.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _101.MsgCreatePeriodicVestingAccountResponse): _101.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _101.MsgCreatePeriodicVestingAccountResponseAminoMsg): _101.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _101.MsgCreatePeriodicVestingAccountResponse): _101.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _101.MsgCreatePeriodicVestingAccountResponseProtoMsg): _101.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _101.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _101.MsgCreatePeriodicVestingAccountResponse): _101.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _207.MsgClientImpl;
                };
                bank: {
                    v1beta1: _208.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _209.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _210.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _211.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _212.MsgClientImpl;
                };
                gov: {
                    v1: _213.MsgClientImpl;
                    v1beta1: _214.MsgClientImpl;
                };
                group: {
                    v1: _215.MsgClientImpl;
                };
                nft: {
                    v1beta1: _216.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _217.MsgClientImpl;
                };
                staking: {
                    v1beta1: _218.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _219.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _220.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _10.QueryConfigRequest): Promise<_10.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _13.QueryAccountsRequest): Promise<_13.QueryAccountsResponse>;
                        account(request: _13.QueryAccountRequest): Promise<_13.QueryAccountResponse>;
                        accountAddressByID(request: _13.QueryAccountAddressByIDRequest): Promise<_13.QueryAccountAddressByIDResponse>;
                        params(request?: _13.QueryParamsRequest): Promise<_13.QueryParamsResponse>;
                        moduleAccounts(request?: _13.QueryModuleAccountsRequest): Promise<_13.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _13.QueryModuleAccountByNameRequest): Promise<_13.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _13.Bech32PrefixRequest): Promise<_13.Bech32PrefixResponse>;
                        addressBytesToString(request: _13.AddressBytesToStringRequest): Promise<_13.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _13.AddressStringToBytesRequest): Promise<_13.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _17.QueryGrantsRequest): Promise<_17.QueryGrantsResponse>;
                        granterGrants(request: _17.QueryGranterGrantsRequest): Promise<_17.QueryGranterGrantsResponse>;
                        granteeGrants(request: _17.QueryGranteeGrantsRequest): Promise<_17.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _22.QueryBalanceRequest): Promise<_22.QueryBalanceResponse>;
                        allBalances(request: _22.QueryAllBalancesRequest): Promise<_22.QueryAllBalancesResponse>;
                        spendableBalances(request: _22.QuerySpendableBalancesRequest): Promise<_22.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _22.QueryTotalSupplyRequest): Promise<_22.QueryTotalSupplyResponse>;
                        supplyOf(request: _22.QuerySupplyOfRequest): Promise<_22.QuerySupplyOfResponse>;
                        params(request?: _22.QueryParamsRequest): Promise<_22.QueryParamsResponse>;
                        denomMetadata(request: _22.QueryDenomMetadataRequest): Promise<_22.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _22.QueryDenomsMetadataRequest): Promise<_22.QueryDenomsMetadataResponse>;
                        denomOwners(request: _22.QueryDenomOwnersRequest): Promise<_22.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _26.ConfigRequest): Promise<_26.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _33.GetNodeInfoRequest): Promise<_33.GetNodeInfoResponse>;
                            getSyncing(request?: _33.GetSyncingRequest): Promise<_33.GetSyncingResponse>;
                            getLatestBlock(request?: _33.GetLatestBlockRequest): Promise<_33.GetLatestBlockResponse>;
                            getBlockByHeight(request: _33.GetBlockByHeightRequest): Promise<_33.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _33.GetLatestValidatorSetRequest): Promise<_33.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _33.GetValidatorSetByHeightRequest): Promise<_33.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _33.ABCIQueryRequest): Promise<_33.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _48.QueryValidatorOutstandingRewardsRequest): Promise<_48.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _48.QueryValidatorCommissionRequest): Promise<_48.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _48.QueryValidatorSlashesRequest): Promise<_48.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _48.QueryDelegationRewardsRequest): Promise<_48.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _48.QueryDelegationTotalRewardsRequest): Promise<_48.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _48.QueryDelegatorValidatorsRequest): Promise<_48.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _48.QueryDelegatorWithdrawAddressRequest): Promise<_48.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _48.QueryCommunityPoolRequest): Promise<_48.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _52.QueryEvidenceRequest): Promise<_52.QueryEvidenceResponse>;
                        allEvidence(request?: _52.QueryAllEvidenceRequest): Promise<_52.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _56.QueryAllowanceRequest): Promise<_56.QueryAllowanceResponse>;
                        allowances(request: _56.QueryAllowancesRequest): Promise<_56.QueryAllowancesResponse>;
                        allowancesByGranter(request: _56.QueryAllowancesByGranterRequest): Promise<_56.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _61.QueryProposalRequest): Promise<_61.QueryProposalResponse>;
                        proposals(request: _61.QueryProposalsRequest): Promise<_61.QueryProposalsResponse>;
                        vote(request: _61.QueryVoteRequest): Promise<_61.QueryVoteResponse>;
                        votes(request: _61.QueryVotesRequest): Promise<_61.QueryVotesResponse>;
                        params(request: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                        deposit(request: _61.QueryDepositRequest): Promise<_61.QueryDepositResponse>;
                        deposits(request: _61.QueryDepositsRequest): Promise<_61.QueryDepositsResponse>;
                        tallyResult(request: _61.QueryTallyResultRequest): Promise<_61.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _65.QueryProposalRequest): Promise<_65.QueryProposalResponse>;
                        proposals(request: _65.QueryProposalsRequest): Promise<_65.QueryProposalsResponse>;
                        vote(request: _65.QueryVoteRequest): Promise<_65.QueryVoteResponse>;
                        votes(request: _65.QueryVotesRequest): Promise<_65.QueryVotesResponse>;
                        params(request: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                        deposit(request: _65.QueryDepositRequest): Promise<_65.QueryDepositResponse>;
                        deposits(request: _65.QueryDepositsRequest): Promise<_65.QueryDepositsResponse>;
                        tallyResult(request: _65.QueryTallyResultRequest): Promise<_65.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _69.QueryGroupInfoRequest): Promise<_69.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _69.QueryGroupPolicyInfoRequest): Promise<_69.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _69.QueryGroupMembersRequest): Promise<_69.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _69.QueryGroupsByAdminRequest): Promise<_69.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _69.QueryGroupPoliciesByGroupRequest): Promise<_69.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _69.QueryGroupPoliciesByAdminRequest): Promise<_69.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _69.QueryProposalRequest): Promise<_69.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _69.QueryProposalsByGroupPolicyRequest): Promise<_69.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _69.QueryVoteByProposalVoterRequest): Promise<_69.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _69.QueryVotesByProposalRequest): Promise<_69.QueryVotesByProposalResponse>;
                        votesByVoter(request: _69.QueryVotesByVoterRequest): Promise<_69.QueryVotesByVoterResponse>;
                        groupsByMember(request: _69.QueryGroupsByMemberRequest): Promise<_69.QueryGroupsByMemberResponse>;
                        tallyResult(request: _69.QueryTallyResultRequest): Promise<_69.QueryTallyResultResponse>;
                        groups(request?: _69.QueryGroupsRequest): Promise<_69.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                        inflation(request?: _74.QueryInflationRequest): Promise<_74.QueryInflationResponse>;
                        annualProvisions(request?: _74.QueryAnnualProvisionsRequest): Promise<_74.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _79.QueryBalanceRequest): Promise<_79.QueryBalanceResponse>;
                        owner(request: _79.QueryOwnerRequest): Promise<_79.QueryOwnerResponse>;
                        supply(request: _79.QuerySupplyRequest): Promise<_79.QuerySupplyResponse>;
                        nFTs(request: _79.QueryNFTsRequest): Promise<_79.QueryNFTsResponse>;
                        nFT(request: _79.QueryNFTRequest): Promise<_79.QueryNFTResponse>;
                        class(request: _79.QueryClassRequest): Promise<_79.QueryClassResponse>;
                        classes(request?: _79.QueryClassesRequest): Promise<_79.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                        subspaces(request?: _85.QuerySubspacesRequest): Promise<_85.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                        signingInfo(request: _87.QuerySigningInfoRequest): Promise<_87.QuerySigningInfoResponse>;
                        signingInfos(request?: _87.QuerySigningInfosRequest): Promise<_87.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _92.QueryValidatorsRequest): Promise<_92.QueryValidatorsResponse>;
                        validator(request: _92.QueryValidatorRequest): Promise<_92.QueryValidatorResponse>;
                        validatorDelegations(request: _92.QueryValidatorDelegationsRequest): Promise<_92.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _92.QueryValidatorUnbondingDelegationsRequest): Promise<_92.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _92.QueryDelegationRequest): Promise<_92.QueryDelegationResponse>;
                        unbondingDelegation(request: _92.QueryUnbondingDelegationRequest): Promise<_92.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _92.QueryDelegatorDelegationsRequest): Promise<_92.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _92.QueryDelegatorUnbondingDelegationsRequest): Promise<_92.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _92.QueryRedelegationsRequest): Promise<_92.QueryRedelegationsResponse>;
                        delegatorValidators(request: _92.QueryDelegatorValidatorsRequest): Promise<_92.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _92.QueryDelegatorValidatorRequest): Promise<_92.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _92.QueryHistoricalInfoRequest): Promise<_92.QueryHistoricalInfoResponse>;
                        pool(request?: _92.QueryPoolRequest): Promise<_92.QueryPoolResponse>;
                        params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _96.SimulateRequest): Promise<_96.SimulateResponse>;
                        getTx(request: _96.GetTxRequest): Promise<_96.GetTxResponse>;
                        broadcastTx(request: _96.BroadcastTxRequest): Promise<_96.BroadcastTxResponse>;
                        getTxsEvent(request: _96.GetTxsEventRequest): Promise<_96.GetTxsEventResponse>;
                        getBlockWithTxs(request: _96.GetBlockWithTxsRequest): Promise<_96.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _98.QueryCurrentPlanRequest): Promise<_98.QueryCurrentPlanResponse>;
                        appliedPlan(request: _98.QueryAppliedPlanRequest): Promise<_98.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _98.QueryUpgradedConsensusStateRequest): Promise<_98.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _98.QueryModuleVersionsRequest): Promise<_98.QueryModuleVersionsResponse>;
                        authority(request?: _98.QueryAuthorityRequest): Promise<_98.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _170.LCDQueryClient;
                };
                authz: {
                    v1beta1: _171.LCDQueryClient;
                };
                bank: {
                    v1beta1: _172.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _173.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _174.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _175.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _176.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _177.LCDQueryClient;
                };
                gov: {
                    v1: _178.LCDQueryClient;
                    v1beta1: _179.LCDQueryClient;
                };
                group: {
                    v1: _180.LCDQueryClient;
                };
                mint: {
                    v1beta1: _181.LCDQueryClient;
                };
                nft: {
                    v1beta1: _182.LCDQueryClient;
                };
                params: {
                    v1beta1: _183.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _184.LCDQueryClient;
                };
                staking: {
                    v1beta1: _185.LCDQueryClient;
                };
                tx: {
                    v1beta1: _186.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _187.LCDQueryClient;
                };
            };
        }>;
    };
}
