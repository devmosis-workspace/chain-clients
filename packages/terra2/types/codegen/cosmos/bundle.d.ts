import * as _0 from "./app/module/v1alpha1/module";
import * as _1 from "./app/v1alpha1/config";
import * as _2 from "./app/v1alpha1/module";
import * as _3 from "./app/v1alpha1/query";
import * as _4 from "./auth/v1beta1/auth";
import * as _5 from "./auth/v1beta1/genesis";
import * as _6 from "./auth/v1beta1/query";
import * as _7 from "./authz/v1beta1/authz";
import * as _8 from "./authz/v1beta1/event";
import * as _9 from "./authz/v1beta1/genesis";
import * as _10 from "./authz/v1beta1/query";
import * as _11 from "./authz/v1beta1/tx";
import * as _12 from "./bank/v1beta1/authz";
import * as _13 from "./bank/v1beta1/bank";
import * as _14 from "./bank/v1beta1/genesis";
import * as _15 from "./bank/v1beta1/query";
import * as _16 from "./bank/v1beta1/tx";
import * as _17 from "./base/abci/v1beta1/abci";
import * as _18 from "./base/kv/v1beta1/kv";
import * as _19 from "./base/node/v1beta1/query";
import * as _20 from "./base/query/v1beta1/pagination";
import * as _21 from "./base/reflection/v1beta1/reflection";
import * as _22 from "./base/reflection/v2alpha1/reflection";
import * as _23 from "./base/snapshots/v1beta1/snapshot";
import * as _24 from "./base/store/v1beta1/commit_info";
import * as _25 from "./base/store/v1beta1/listening";
import * as _26 from "./base/tendermint/v1beta1/query";
import * as _27 from "./base/tendermint/v1beta1/types";
import * as _28 from "./base/v1beta1/coin";
import * as _29 from "./capability/v1beta1/capability";
import * as _30 from "./capability/v1beta1/genesis";
import * as _31 from "./crisis/v1beta1/genesis";
import * as _32 from "./crisis/v1beta1/tx";
import * as _33 from "./crypto/ed25519/keys";
import * as _34 from "./crypto/hd/v1/hd";
import * as _35 from "./crypto/keyring/v1/record";
import * as _36 from "./crypto/multisig/keys";
import * as _37 from "./crypto/secp256k1/keys";
import * as _38 from "./crypto/secp256r1/keys";
import * as _39 from "./distribution/v1beta1/distribution";
import * as _40 from "./distribution/v1beta1/genesis";
import * as _41 from "./distribution/v1beta1/query";
import * as _42 from "./distribution/v1beta1/tx";
import * as _43 from "./evidence/v1beta1/evidence";
import * as _44 from "./evidence/v1beta1/genesis";
import * as _45 from "./evidence/v1beta1/query";
import * as _46 from "./evidence/v1beta1/tx";
import * as _47 from "./feegrant/v1beta1/feegrant";
import * as _48 from "./feegrant/v1beta1/genesis";
import * as _49 from "./feegrant/v1beta1/query";
import * as _50 from "./feegrant/v1beta1/tx";
import * as _51 from "./genutil/v1beta1/genesis";
import * as _52 from "./gov/v1/genesis";
import * as _53 from "./gov/v1/gov";
import * as _54 from "./gov/v1/query";
import * as _55 from "./gov/v1/tx";
import * as _56 from "./gov/v1beta1/genesis";
import * as _57 from "./gov/v1beta1/gov";
import * as _58 from "./gov/v1beta1/query";
import * as _59 from "./gov/v1beta1/tx";
import * as _60 from "./group/v1/events";
import * as _61 from "./group/v1/genesis";
import * as _62 from "./group/v1/query";
import * as _63 from "./group/v1/tx";
import * as _64 from "./group/v1/types";
import * as _65 from "./mint/v1beta1/genesis";
import * as _66 from "./mint/v1beta1/mint";
import * as _67 from "./mint/v1beta1/query";
import * as _69 from "./nft/v1beta1/event";
import * as _70 from "./nft/v1beta1/genesis";
import * as _71 from "./nft/v1beta1/nft";
import * as _72 from "./nft/v1beta1/query";
import * as _73 from "./nft/v1beta1/tx";
import * as _74 from "./orm/module/v1alpha1/module";
import * as _75 from "./orm/v1/orm";
import * as _76 from "./orm/v1alpha1/schema";
import * as _77 from "./params/v1beta1/params";
import * as _78 from "./params/v1beta1/query";
import * as _79 from "./slashing/v1beta1/genesis";
import * as _80 from "./slashing/v1beta1/query";
import * as _81 from "./slashing/v1beta1/slashing";
import * as _82 from "./slashing/v1beta1/tx";
import * as _83 from "./staking/v1beta1/authz";
import * as _84 from "./staking/v1beta1/genesis";
import * as _85 from "./staking/v1beta1/query";
import * as _86 from "./staking/v1beta1/staking";
import * as _87 from "./staking/v1beta1/tx";
import * as _88 from "./tx/signing/v1beta1/signing";
import * as _89 from "./tx/v1beta1/service";
import * as _90 from "./tx/v1beta1/tx";
import * as _91 from "./upgrade/v1beta1/query";
import * as _92 from "./upgrade/v1beta1/tx";
import * as _93 from "./upgrade/v1beta1/upgrade";
import * as _94 from "./vesting/v1beta1/tx";
import * as _95 from "./vesting/v1beta1/vesting";
import * as _143 from "./auth/v1beta1/query.lcd";
import * as _144 from "./authz/v1beta1/query.lcd";
import * as _145 from "./bank/v1beta1/query.lcd";
import * as _146 from "./base/node/v1beta1/query.lcd";
import * as _147 from "./base/tendermint/v1beta1/query.lcd";
import * as _148 from "./distribution/v1beta1/query.lcd";
import * as _149 from "./evidence/v1beta1/query.lcd";
import * as _150 from "./feegrant/v1beta1/query.lcd";
import * as _151 from "./gov/v1/query.lcd";
import * as _152 from "./gov/v1beta1/query.lcd";
import * as _153 from "./group/v1/query.lcd";
import * as _154 from "./mint/v1beta1/query.lcd";
import * as _155 from "./nft/v1beta1/query.lcd";
import * as _156 from "./params/v1beta1/query.lcd";
import * as _157 from "./slashing/v1beta1/query.lcd";
import * as _158 from "./staking/v1beta1/query.lcd";
import * as _159 from "./tx/v1beta1/service.lcd";
import * as _160 from "./upgrade/v1beta1/query.lcd";
import * as _161 from "./app/v1alpha1/query.rpc.Query";
import * as _162 from "./auth/v1beta1/query.rpc.Query";
import * as _163 from "./authz/v1beta1/query.rpc.Query";
import * as _164 from "./bank/v1beta1/query.rpc.Query";
import * as _165 from "./base/node/v1beta1/query.rpc.Service";
import * as _166 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _167 from "./distribution/v1beta1/query.rpc.Query";
import * as _168 from "./evidence/v1beta1/query.rpc.Query";
import * as _169 from "./feegrant/v1beta1/query.rpc.Query";
import * as _170 from "./gov/v1/query.rpc.Query";
import * as _171 from "./gov/v1beta1/query.rpc.Query";
import * as _172 from "./group/v1/query.rpc.Query";
import * as _173 from "./mint/v1beta1/query.rpc.Query";
import * as _174 from "./nft/v1beta1/query.rpc.Query";
import * as _175 from "./params/v1beta1/query.rpc.Query";
import * as _176 from "./slashing/v1beta1/query.rpc.Query";
import * as _177 from "./staking/v1beta1/query.rpc.Query";
import * as _178 from "./tx/v1beta1/service.rpc.Service";
import * as _179 from "./upgrade/v1beta1/query.rpc.Query";
import * as _180 from "./authz/v1beta1/tx.rpc.msg";
import * as _181 from "./bank/v1beta1/tx.rpc.msg";
import * as _182 from "./crisis/v1beta1/tx.rpc.msg";
import * as _183 from "./distribution/v1beta1/tx.rpc.msg";
import * as _184 from "./evidence/v1beta1/tx.rpc.msg";
import * as _185 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _186 from "./gov/v1/tx.rpc.msg";
import * as _187 from "./gov/v1beta1/tx.rpc.msg";
import * as _188 from "./group/v1/tx.rpc.msg";
import * as _189 from "./nft/v1beta1/tx.rpc.msg";
import * as _190 from "./slashing/v1beta1/tx.rpc.msg";
import * as _191 from "./staking/v1beta1/tx.rpc.msg";
import * as _192 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _193 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _0.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _0.Module;
                    fromPartial(_: Partial<_0.Module>): _0.Module;
                    fromAmino(_: _0.ModuleAmino): _0.Module;
                    toAmino(_: _0.Module): _0.ModuleAmino;
                    fromAminoMsg(object: _0.ModuleAminoMsg): _0.Module;
                    toAminoMsg(message: _0.Module): _0.ModuleAminoMsg;
                    fromProtoMsg(message: _0.ModuleProtoMsg): _0.Module;
                    toProto(message: _0.Module): Uint8Array;
                    toProtoMsg(message: _0.Module): _0.ModuleProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _161.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _3.QueryConfigRequest): Promise<_3.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _3.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.QueryConfigRequest;
                fromPartial(_: Partial<_3.QueryConfigRequest>): _3.QueryConfigRequest;
                fromAmino(_: _3.QueryConfigRequestAmino): _3.QueryConfigRequest;
                toAmino(_: _3.QueryConfigRequest): _3.QueryConfigRequestAmino;
                fromAminoMsg(object: _3.QueryConfigRequestAminoMsg): _3.QueryConfigRequest;
                toAminoMsg(message: _3.QueryConfigRequest): _3.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _3.QueryConfigRequestProtoMsg): _3.QueryConfigRequest;
                toProto(message: _3.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _3.QueryConfigRequest): _3.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _3.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryConfigResponse;
                fromPartial(object: Partial<_3.QueryConfigResponse>): _3.QueryConfigResponse;
                fromAmino(object: _3.QueryConfigResponseAmino): _3.QueryConfigResponse;
                toAmino(message: _3.QueryConfigResponse): _3.QueryConfigResponseAmino;
                fromAminoMsg(object: _3.QueryConfigResponseAminoMsg): _3.QueryConfigResponse;
                toAminoMsg(message: _3.QueryConfigResponse): _3.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _3.QueryConfigResponseProtoMsg): _3.QueryConfigResponse;
                toProto(message: _3.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _3.QueryConfigResponse): _3.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _2.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.ModuleDescriptor;
                fromPartial(object: Partial<_2.ModuleDescriptor>): _2.ModuleDescriptor;
                fromAmino(object: _2.ModuleDescriptorAmino): _2.ModuleDescriptor;
                toAmino(message: _2.ModuleDescriptor): _2.ModuleDescriptorAmino;
                fromAminoMsg(object: _2.ModuleDescriptorAminoMsg): _2.ModuleDescriptor;
                toAminoMsg(message: _2.ModuleDescriptor): _2.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _2.ModuleDescriptorProtoMsg): _2.ModuleDescriptor;
                toProto(message: _2.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _2.ModuleDescriptor): _2.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _2.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.PackageReference;
                fromPartial(object: Partial<_2.PackageReference>): _2.PackageReference;
                fromAmino(object: _2.PackageReferenceAmino): _2.PackageReference;
                toAmino(message: _2.PackageReference): _2.PackageReferenceAmino;
                fromAminoMsg(object: _2.PackageReferenceAminoMsg): _2.PackageReference;
                toAminoMsg(message: _2.PackageReference): _2.PackageReferenceAminoMsg;
                fromProtoMsg(message: _2.PackageReferenceProtoMsg): _2.PackageReference;
                toProto(message: _2.PackageReference): Uint8Array;
                toProtoMsg(message: _2.PackageReference): _2.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _2.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.MigrateFromInfo;
                fromPartial(object: Partial<_2.MigrateFromInfo>): _2.MigrateFromInfo;
                fromAmino(object: _2.MigrateFromInfoAmino): _2.MigrateFromInfo;
                toAmino(message: _2.MigrateFromInfo): _2.MigrateFromInfoAmino;
                fromAminoMsg(object: _2.MigrateFromInfoAminoMsg): _2.MigrateFromInfo;
                toAminoMsg(message: _2.MigrateFromInfo): _2.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _2.MigrateFromInfoProtoMsg): _2.MigrateFromInfo;
                toProto(message: _2.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _2.MigrateFromInfo): _2.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _1.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.Config;
                fromPartial(object: Partial<_1.Config>): _1.Config;
                fromAmino(object: _1.ConfigAmino): _1.Config;
                toAmino(message: _1.Config): _1.ConfigAmino;
                fromAminoMsg(object: _1.ConfigAminoMsg): _1.Config;
                toAminoMsg(message: _1.Config): _1.ConfigAminoMsg;
                fromProtoMsg(message: _1.ConfigProtoMsg): _1.Config;
                toProto(message: _1.Config): Uint8Array;
                toProtoMsg(message: _1.Config): _1.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _1.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.ModuleConfig;
                fromPartial(object: Partial<_1.ModuleConfig>): _1.ModuleConfig;
                fromAmino(object: _1.ModuleConfigAmino): _1.ModuleConfig;
                toAmino(message: _1.ModuleConfig): _1.ModuleConfigAmino;
                fromAminoMsg(object: _1.ModuleConfigAminoMsg): _1.ModuleConfig;
                toAminoMsg(message: _1.ModuleConfig): _1.ModuleConfigAminoMsg;
                fromProtoMsg(message: _1.ModuleConfigProtoMsg): _1.ModuleConfig;
                toProto(message: _1.ModuleConfig): Uint8Array;
                toProtoMsg(message: _1.ModuleConfig): _1.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _162.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _6.QueryAccountsRequest): Promise<_6.QueryAccountsResponse>;
                account(request: _6.QueryAccountRequest): Promise<_6.QueryAccountResponse>;
                accountAddressByID(request: _6.QueryAccountAddressByIDRequest): Promise<_6.QueryAccountAddressByIDResponse>;
                params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                moduleAccounts(request?: _6.QueryModuleAccountsRequest): Promise<_6.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _6.QueryModuleAccountByNameRequest): Promise<_6.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _6.Bech32PrefixRequest): Promise<_6.Bech32PrefixResponse>;
                addressBytesToString(request: _6.AddressBytesToStringRequest): Promise<_6.AddressBytesToStringResponse>;
                addressStringToBytes(request: _6.AddressStringToBytesRequest): Promise<_6.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _143.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _6.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryAccountsRequest;
                fromPartial(object: Partial<_6.QueryAccountsRequest>): _6.QueryAccountsRequest;
                fromAmino(object: _6.QueryAccountsRequestAmino): _6.QueryAccountsRequest;
                toAmino(message: _6.QueryAccountsRequest): _6.QueryAccountsRequestAmino;
                fromAminoMsg(object: _6.QueryAccountsRequestAminoMsg): _6.QueryAccountsRequest;
                toAminoMsg(message: _6.QueryAccountsRequest): _6.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _6.QueryAccountsRequestProtoMsg): _6.QueryAccountsRequest;
                toProto(message: _6.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _6.QueryAccountsRequest): _6.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _6.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryAccountsResponse;
                fromPartial(object: Partial<_6.QueryAccountsResponse>): _6.QueryAccountsResponse;
                fromAmino(object: _6.QueryAccountsResponseAmino): _6.QueryAccountsResponse;
                toAmino(message: _6.QueryAccountsResponse): _6.QueryAccountsResponseAmino;
                fromAminoMsg(object: _6.QueryAccountsResponseAminoMsg): _6.QueryAccountsResponse;
                toAminoMsg(message: _6.QueryAccountsResponse): _6.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _6.QueryAccountsResponseProtoMsg): _6.QueryAccountsResponse;
                toProto(message: _6.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _6.QueryAccountsResponse): _6.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _6.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryAccountRequest;
                fromPartial(object: Partial<_6.QueryAccountRequest>): _6.QueryAccountRequest;
                fromAmino(object: _6.QueryAccountRequestAmino): _6.QueryAccountRequest;
                toAmino(message: _6.QueryAccountRequest): _6.QueryAccountRequestAmino;
                fromAminoMsg(object: _6.QueryAccountRequestAminoMsg): _6.QueryAccountRequest;
                toAminoMsg(message: _6.QueryAccountRequest): _6.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _6.QueryAccountRequestProtoMsg): _6.QueryAccountRequest;
                toProto(message: _6.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _6.QueryAccountRequest): _6.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _6.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryAccountResponse;
                fromPartial(object: Partial<_6.QueryAccountResponse>): _6.QueryAccountResponse;
                fromAmino(object: _6.QueryAccountResponseAmino): _6.QueryAccountResponse;
                toAmino(message: _6.QueryAccountResponse): _6.QueryAccountResponseAmino;
                fromAminoMsg(object: _6.QueryAccountResponseAminoMsg): _6.QueryAccountResponse;
                toAminoMsg(message: _6.QueryAccountResponse): _6.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _6.QueryAccountResponseProtoMsg): _6.QueryAccountResponse;
                toProto(message: _6.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _6.QueryAccountResponse): _6.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _6.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.QueryParamsRequest;
                fromPartial(_: Partial<_6.QueryParamsRequest>): _6.QueryParamsRequest;
                fromAmino(_: _6.QueryParamsRequestAmino): _6.QueryParamsRequest;
                toAmino(_: _6.QueryParamsRequest): _6.QueryParamsRequestAmino;
                fromAminoMsg(object: _6.QueryParamsRequestAminoMsg): _6.QueryParamsRequest;
                toAminoMsg(message: _6.QueryParamsRequest): _6.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _6.QueryParamsRequestProtoMsg): _6.QueryParamsRequest;
                toProto(message: _6.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _6.QueryParamsRequest): _6.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _6.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryParamsResponse;
                fromPartial(object: Partial<_6.QueryParamsResponse>): _6.QueryParamsResponse;
                fromAmino(object: _6.QueryParamsResponseAmino): _6.QueryParamsResponse;
                toAmino(message: _6.QueryParamsResponse): _6.QueryParamsResponseAmino;
                fromAminoMsg(object: _6.QueryParamsResponseAminoMsg): _6.QueryParamsResponse;
                toAminoMsg(message: _6.QueryParamsResponse): _6.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _6.QueryParamsResponseProtoMsg): _6.QueryParamsResponse;
                toProto(message: _6.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _6.QueryParamsResponse): _6.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _6.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_6.QueryModuleAccountsRequest>): _6.QueryModuleAccountsRequest;
                fromAmino(_: _6.QueryModuleAccountsRequestAmino): _6.QueryModuleAccountsRequest;
                toAmino(_: _6.QueryModuleAccountsRequest): _6.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _6.QueryModuleAccountsRequestAminoMsg): _6.QueryModuleAccountsRequest;
                toAminoMsg(message: _6.QueryModuleAccountsRequest): _6.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _6.QueryModuleAccountsRequestProtoMsg): _6.QueryModuleAccountsRequest;
                toProto(message: _6.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _6.QueryModuleAccountsRequest): _6.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _6.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_6.QueryModuleAccountsResponse>): _6.QueryModuleAccountsResponse;
                fromAmino(object: _6.QueryModuleAccountsResponseAmino): _6.QueryModuleAccountsResponse;
                toAmino(message: _6.QueryModuleAccountsResponse): _6.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _6.QueryModuleAccountsResponseAminoMsg): _6.QueryModuleAccountsResponse;
                toAminoMsg(message: _6.QueryModuleAccountsResponse): _6.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _6.QueryModuleAccountsResponseProtoMsg): _6.QueryModuleAccountsResponse;
                toProto(message: _6.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _6.QueryModuleAccountsResponse): _6.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _6.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_6.QueryModuleAccountByNameRequest>): _6.QueryModuleAccountByNameRequest;
                fromAmino(object: _6.QueryModuleAccountByNameRequestAmino): _6.QueryModuleAccountByNameRequest;
                toAmino(message: _6.QueryModuleAccountByNameRequest): _6.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _6.QueryModuleAccountByNameRequestAminoMsg): _6.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _6.QueryModuleAccountByNameRequest): _6.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _6.QueryModuleAccountByNameRequestProtoMsg): _6.QueryModuleAccountByNameRequest;
                toProto(message: _6.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _6.QueryModuleAccountByNameRequest): _6.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _6.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_6.QueryModuleAccountByNameResponse>): _6.QueryModuleAccountByNameResponse;
                fromAmino(object: _6.QueryModuleAccountByNameResponseAmino): _6.QueryModuleAccountByNameResponse;
                toAmino(message: _6.QueryModuleAccountByNameResponse): _6.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _6.QueryModuleAccountByNameResponseAminoMsg): _6.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _6.QueryModuleAccountByNameResponse): _6.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _6.QueryModuleAccountByNameResponseProtoMsg): _6.QueryModuleAccountByNameResponse;
                toProto(message: _6.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _6.QueryModuleAccountByNameResponse): _6.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _6.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.Bech32PrefixRequest;
                fromPartial(_: Partial<_6.Bech32PrefixRequest>): _6.Bech32PrefixRequest;
                fromAmino(_: _6.Bech32PrefixRequestAmino): _6.Bech32PrefixRequest;
                toAmino(_: _6.Bech32PrefixRequest): _6.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _6.Bech32PrefixRequestAminoMsg): _6.Bech32PrefixRequest;
                toAminoMsg(message: _6.Bech32PrefixRequest): _6.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _6.Bech32PrefixRequestProtoMsg): _6.Bech32PrefixRequest;
                toProto(message: _6.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _6.Bech32PrefixRequest): _6.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _6.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.Bech32PrefixResponse;
                fromPartial(object: Partial<_6.Bech32PrefixResponse>): _6.Bech32PrefixResponse;
                fromAmino(object: _6.Bech32PrefixResponseAmino): _6.Bech32PrefixResponse;
                toAmino(message: _6.Bech32PrefixResponse): _6.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _6.Bech32PrefixResponseAminoMsg): _6.Bech32PrefixResponse;
                toAminoMsg(message: _6.Bech32PrefixResponse): _6.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _6.Bech32PrefixResponseProtoMsg): _6.Bech32PrefixResponse;
                toProto(message: _6.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _6.Bech32PrefixResponse): _6.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _6.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.AddressBytesToStringRequest;
                fromPartial(object: Partial<_6.AddressBytesToStringRequest>): _6.AddressBytesToStringRequest;
                fromAmino(object: _6.AddressBytesToStringRequestAmino): _6.AddressBytesToStringRequest;
                toAmino(message: _6.AddressBytesToStringRequest): _6.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _6.AddressBytesToStringRequestAminoMsg): _6.AddressBytesToStringRequest;
                toAminoMsg(message: _6.AddressBytesToStringRequest): _6.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _6.AddressBytesToStringRequestProtoMsg): _6.AddressBytesToStringRequest;
                toProto(message: _6.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _6.AddressBytesToStringRequest): _6.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _6.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.AddressBytesToStringResponse;
                fromPartial(object: Partial<_6.AddressBytesToStringResponse>): _6.AddressBytesToStringResponse;
                fromAmino(object: _6.AddressBytesToStringResponseAmino): _6.AddressBytesToStringResponse;
                toAmino(message: _6.AddressBytesToStringResponse): _6.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _6.AddressBytesToStringResponseAminoMsg): _6.AddressBytesToStringResponse;
                toAminoMsg(message: _6.AddressBytesToStringResponse): _6.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _6.AddressBytesToStringResponseProtoMsg): _6.AddressBytesToStringResponse;
                toProto(message: _6.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _6.AddressBytesToStringResponse): _6.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _6.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.AddressStringToBytesRequest;
                fromPartial(object: Partial<_6.AddressStringToBytesRequest>): _6.AddressStringToBytesRequest;
                fromAmino(object: _6.AddressStringToBytesRequestAmino): _6.AddressStringToBytesRequest;
                toAmino(message: _6.AddressStringToBytesRequest): _6.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _6.AddressStringToBytesRequestAminoMsg): _6.AddressStringToBytesRequest;
                toAminoMsg(message: _6.AddressStringToBytesRequest): _6.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _6.AddressStringToBytesRequestProtoMsg): _6.AddressStringToBytesRequest;
                toProto(message: _6.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _6.AddressStringToBytesRequest): _6.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _6.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.AddressStringToBytesResponse;
                fromPartial(object: Partial<_6.AddressStringToBytesResponse>): _6.AddressStringToBytesResponse;
                fromAmino(object: _6.AddressStringToBytesResponseAmino): _6.AddressStringToBytesResponse;
                toAmino(message: _6.AddressStringToBytesResponse): _6.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _6.AddressStringToBytesResponseAminoMsg): _6.AddressStringToBytesResponse;
                toAminoMsg(message: _6.AddressStringToBytesResponse): _6.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _6.AddressStringToBytesResponseProtoMsg): _6.AddressStringToBytesResponse;
                toProto(message: _6.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _6.AddressStringToBytesResponse): _6.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _6.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_6.QueryAccountAddressByIDRequest>): _6.QueryAccountAddressByIDRequest;
                fromAmino(object: _6.QueryAccountAddressByIDRequestAmino): _6.QueryAccountAddressByIDRequest;
                toAmino(message: _6.QueryAccountAddressByIDRequest): _6.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _6.QueryAccountAddressByIDRequestAminoMsg): _6.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _6.QueryAccountAddressByIDRequest): _6.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _6.QueryAccountAddressByIDRequestProtoMsg): _6.QueryAccountAddressByIDRequest;
                toProto(message: _6.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _6.QueryAccountAddressByIDRequest): _6.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _6.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_6.QueryAccountAddressByIDResponse>): _6.QueryAccountAddressByIDResponse;
                fromAmino(object: _6.QueryAccountAddressByIDResponseAmino): _6.QueryAccountAddressByIDResponse;
                toAmino(message: _6.QueryAccountAddressByIDResponse): _6.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _6.QueryAccountAddressByIDResponseAminoMsg): _6.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _6.QueryAccountAddressByIDResponse): _6.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _6.QueryAccountAddressByIDResponseProtoMsg): _6.QueryAccountAddressByIDResponse;
                toProto(message: _6.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _6.QueryAccountAddressByIDResponse): _6.QueryAccountAddressByIDResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _4.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _4.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _5.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.GenesisState;
                fromPartial(object: Partial<_5.GenesisState>): _5.GenesisState;
                fromAmino(object: _5.GenesisStateAmino): _5.GenesisState;
                toAmino(message: _5.GenesisState): _5.GenesisStateAmino;
                fromAminoMsg(object: _5.GenesisStateAminoMsg): _5.GenesisState;
                toAminoMsg(message: _5.GenesisState): _5.GenesisStateAminoMsg;
                fromProtoMsg(message: _5.GenesisStateProtoMsg): _5.GenesisState;
                toProto(message: _5.GenesisState): Uint8Array;
                toProtoMsg(message: _5.GenesisState): _5.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _4.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.BaseAccount;
                fromPartial(object: Partial<_4.BaseAccount>): _4.BaseAccount;
                fromAmino(object: _4.BaseAccountAmino): _4.BaseAccount;
                toAmino(message: _4.BaseAccount): _4.BaseAccountAmino;
                fromAminoMsg(object: _4.BaseAccountAminoMsg): _4.BaseAccount;
                toAminoMsg(message: _4.BaseAccount): _4.BaseAccountAminoMsg;
                fromProtoMsg(message: _4.BaseAccountProtoMsg): _4.BaseAccount;
                toProto(message: _4.BaseAccount): Uint8Array;
                toProtoMsg(message: _4.BaseAccount): _4.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _4.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.ModuleAccount;
                fromPartial(object: Partial<_4.ModuleAccount>): _4.ModuleAccount;
                fromAmino(object: _4.ModuleAccountAmino): _4.ModuleAccount;
                toAmino(message: _4.ModuleAccount): _4.ModuleAccountAmino;
                fromAminoMsg(object: _4.ModuleAccountAminoMsg): _4.ModuleAccount;
                toAminoMsg(message: _4.ModuleAccount): _4.ModuleAccountAminoMsg;
                fromProtoMsg(message: _4.ModuleAccountProtoMsg): _4.ModuleAccount;
                toProto(message: _4.ModuleAccount): Uint8Array;
                toProtoMsg(message: _4.ModuleAccount): _4.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _4.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.Params;
                fromPartial(object: Partial<_4.Params>): _4.Params;
                fromAmino(object: _4.ParamsAmino): _4.Params;
                toAmino(message: _4.Params): _4.ParamsAmino;
                fromAminoMsg(object: _4.ParamsAminoMsg): _4.Params;
                toAminoMsg(message: _4.Params): _4.ParamsAminoMsg;
                fromProtoMsg(message: _4.ParamsProtoMsg): _4.Params;
                toProto(message: _4.Params): Uint8Array;
                toProtoMsg(message: _4.Params): _4.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _180.MsgClientImpl;
            QueryClientImpl: typeof _163.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _10.QueryGrantsRequest): Promise<_10.QueryGrantsResponse>;
                granterGrants(request: _10.QueryGranterGrantsRequest): Promise<_10.QueryGranterGrantsResponse>;
                granteeGrants(request: _10.QueryGranteeGrantsRequest): Promise<_10.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _144.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _11.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _11.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _11.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _11.MsgGrant): {
                        typeUrl: string;
                        value: _11.MsgGrant;
                    };
                    exec(value: _11.MsgExec): {
                        typeUrl: string;
                        value: _11.MsgExec;
                    };
                    revoke(value: _11.MsgRevoke): {
                        typeUrl: string;
                        value: _11.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _11.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _11.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _11.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _11.MsgGrant): {
                        typeUrl: string;
                        value: _11.MsgGrant;
                    };
                    exec(value: _11.MsgExec): {
                        typeUrl: string;
                        value: _11.MsgExec;
                    };
                    revoke(value: _11.MsgRevoke): {
                        typeUrl: string;
                        value: _11.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _11.MsgGrant) => _11.MsgGrantAmino;
                    fromAmino: (object: _11.MsgGrantAmino) => _11.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _11.MsgExec) => _11.MsgExecAmino;
                    fromAmino: (object: _11.MsgExecAmino) => _11.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _11.MsgRevoke) => _11.MsgRevokeAmino;
                    fromAmino: (object: _11.MsgRevokeAmino) => _11.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _11.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgGrant;
                fromPartial(object: Partial<_11.MsgGrant>): _11.MsgGrant;
                fromAmino(object: _11.MsgGrantAmino): _11.MsgGrant;
                toAmino(message: _11.MsgGrant): _11.MsgGrantAmino;
                fromAminoMsg(object: _11.MsgGrantAminoMsg): _11.MsgGrant;
                toAminoMsg(message: _11.MsgGrant): _11.MsgGrantAminoMsg;
                fromProtoMsg(message: _11.MsgGrantProtoMsg): _11.MsgGrant;
                toProto(message: _11.MsgGrant): Uint8Array;
                toProtoMsg(message: _11.MsgGrant): _11.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _11.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgExecResponse;
                fromPartial(object: Partial<_11.MsgExecResponse>): _11.MsgExecResponse;
                fromAmino(object: _11.MsgExecResponseAmino): _11.MsgExecResponse;
                toAmino(message: _11.MsgExecResponse): _11.MsgExecResponseAmino;
                fromAminoMsg(object: _11.MsgExecResponseAminoMsg): _11.MsgExecResponse;
                toAminoMsg(message: _11.MsgExecResponse): _11.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _11.MsgExecResponseProtoMsg): _11.MsgExecResponse;
                toProto(message: _11.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _11.MsgExecResponse): _11.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _11.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgExec;
                fromPartial(object: Partial<_11.MsgExec>): _11.MsgExec;
                fromAmino(object: _11.MsgExecAmino): _11.MsgExec;
                toAmino(message: _11.MsgExec): _11.MsgExecAmino;
                fromAminoMsg(object: _11.MsgExecAminoMsg): _11.MsgExec;
                toAminoMsg(message: _11.MsgExec): _11.MsgExecAminoMsg;
                fromProtoMsg(message: _11.MsgExecProtoMsg): _11.MsgExec;
                toProto(message: _11.MsgExec): Uint8Array;
                toProtoMsg(message: _11.MsgExec): _11.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _11.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.MsgGrantResponse;
                fromPartial(_: Partial<_11.MsgGrantResponse>): _11.MsgGrantResponse;
                fromAmino(_: _11.MsgGrantResponseAmino): _11.MsgGrantResponse;
                toAmino(_: _11.MsgGrantResponse): _11.MsgGrantResponseAmino;
                fromAminoMsg(object: _11.MsgGrantResponseAminoMsg): _11.MsgGrantResponse;
                toAminoMsg(message: _11.MsgGrantResponse): _11.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _11.MsgGrantResponseProtoMsg): _11.MsgGrantResponse;
                toProto(message: _11.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _11.MsgGrantResponse): _11.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _11.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgRevoke;
                fromPartial(object: Partial<_11.MsgRevoke>): _11.MsgRevoke;
                fromAmino(object: _11.MsgRevokeAmino): _11.MsgRevoke;
                toAmino(message: _11.MsgRevoke): _11.MsgRevokeAmino;
                fromAminoMsg(object: _11.MsgRevokeAminoMsg): _11.MsgRevoke;
                toAminoMsg(message: _11.MsgRevoke): _11.MsgRevokeAminoMsg;
                fromProtoMsg(message: _11.MsgRevokeProtoMsg): _11.MsgRevoke;
                toProto(message: _11.MsgRevoke): Uint8Array;
                toProtoMsg(message: _11.MsgRevoke): _11.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _11.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.MsgRevokeResponse;
                fromPartial(_: Partial<_11.MsgRevokeResponse>): _11.MsgRevokeResponse;
                fromAmino(_: _11.MsgRevokeResponseAmino): _11.MsgRevokeResponse;
                toAmino(_: _11.MsgRevokeResponse): _11.MsgRevokeResponseAmino;
                fromAminoMsg(object: _11.MsgRevokeResponseAminoMsg): _11.MsgRevokeResponse;
                toAminoMsg(message: _11.MsgRevokeResponse): _11.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _11.MsgRevokeResponseProtoMsg): _11.MsgRevokeResponse;
                toProto(message: _11.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _11.MsgRevokeResponse): _11.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _10.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryGrantsRequest;
                fromPartial(object: Partial<_10.QueryGrantsRequest>): _10.QueryGrantsRequest;
                fromAmino(object: _10.QueryGrantsRequestAmino): _10.QueryGrantsRequest;
                toAmino(message: _10.QueryGrantsRequest): _10.QueryGrantsRequestAmino;
                fromAminoMsg(object: _10.QueryGrantsRequestAminoMsg): _10.QueryGrantsRequest;
                toAminoMsg(message: _10.QueryGrantsRequest): _10.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _10.QueryGrantsRequestProtoMsg): _10.QueryGrantsRequest;
                toProto(message: _10.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _10.QueryGrantsRequest): _10.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _10.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryGrantsResponse;
                fromPartial(object: Partial<_10.QueryGrantsResponse>): _10.QueryGrantsResponse;
                fromAmino(object: _10.QueryGrantsResponseAmino): _10.QueryGrantsResponse;
                toAmino(message: _10.QueryGrantsResponse): _10.QueryGrantsResponseAmino;
                fromAminoMsg(object: _10.QueryGrantsResponseAminoMsg): _10.QueryGrantsResponse;
                toAminoMsg(message: _10.QueryGrantsResponse): _10.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _10.QueryGrantsResponseProtoMsg): _10.QueryGrantsResponse;
                toProto(message: _10.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _10.QueryGrantsResponse): _10.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _10.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_10.QueryGranterGrantsRequest>): _10.QueryGranterGrantsRequest;
                fromAmino(object: _10.QueryGranterGrantsRequestAmino): _10.QueryGranterGrantsRequest;
                toAmino(message: _10.QueryGranterGrantsRequest): _10.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _10.QueryGranterGrantsRequestAminoMsg): _10.QueryGranterGrantsRequest;
                toAminoMsg(message: _10.QueryGranterGrantsRequest): _10.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _10.QueryGranterGrantsRequestProtoMsg): _10.QueryGranterGrantsRequest;
                toProto(message: _10.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _10.QueryGranterGrantsRequest): _10.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _10.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_10.QueryGranterGrantsResponse>): _10.QueryGranterGrantsResponse;
                fromAmino(object: _10.QueryGranterGrantsResponseAmino): _10.QueryGranterGrantsResponse;
                toAmino(message: _10.QueryGranterGrantsResponse): _10.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _10.QueryGranterGrantsResponseAminoMsg): _10.QueryGranterGrantsResponse;
                toAminoMsg(message: _10.QueryGranterGrantsResponse): _10.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _10.QueryGranterGrantsResponseProtoMsg): _10.QueryGranterGrantsResponse;
                toProto(message: _10.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _10.QueryGranterGrantsResponse): _10.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _10.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_10.QueryGranteeGrantsRequest>): _10.QueryGranteeGrantsRequest;
                fromAmino(object: _10.QueryGranteeGrantsRequestAmino): _10.QueryGranteeGrantsRequest;
                toAmino(message: _10.QueryGranteeGrantsRequest): _10.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _10.QueryGranteeGrantsRequestAminoMsg): _10.QueryGranteeGrantsRequest;
                toAminoMsg(message: _10.QueryGranteeGrantsRequest): _10.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _10.QueryGranteeGrantsRequestProtoMsg): _10.QueryGranteeGrantsRequest;
                toProto(message: _10.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _10.QueryGranteeGrantsRequest): _10.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _10.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_10.QueryGranteeGrantsResponse>): _10.QueryGranteeGrantsResponse;
                fromAmino(object: _10.QueryGranteeGrantsResponseAmino): _10.QueryGranteeGrantsResponse;
                toAmino(message: _10.QueryGranteeGrantsResponse): _10.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _10.QueryGranteeGrantsResponseAminoMsg): _10.QueryGranteeGrantsResponse;
                toAminoMsg(message: _10.QueryGranteeGrantsResponse): _10.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _10.QueryGranteeGrantsResponseProtoMsg): _10.QueryGranteeGrantsResponse;
                toProto(message: _10.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _10.QueryGranteeGrantsResponse): _10.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _9.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.GenesisState;
                fromPartial(object: Partial<_9.GenesisState>): _9.GenesisState;
                fromAmino(object: _9.GenesisStateAmino): _9.GenesisState;
                toAmino(message: _9.GenesisState): _9.GenesisStateAmino;
                fromAminoMsg(object: _9.GenesisStateAminoMsg): _9.GenesisState;
                toAminoMsg(message: _9.GenesisState): _9.GenesisStateAminoMsg;
                fromProtoMsg(message: _9.GenesisStateProtoMsg): _9.GenesisState;
                toProto(message: _9.GenesisState): Uint8Array;
                toProtoMsg(message: _9.GenesisState): _9.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _8.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.EventGrant;
                fromPartial(object: Partial<_8.EventGrant>): _8.EventGrant;
                fromAmino(object: _8.EventGrantAmino): _8.EventGrant;
                toAmino(message: _8.EventGrant): _8.EventGrantAmino;
                fromAminoMsg(object: _8.EventGrantAminoMsg): _8.EventGrant;
                toAminoMsg(message: _8.EventGrant): _8.EventGrantAminoMsg;
                fromProtoMsg(message: _8.EventGrantProtoMsg): _8.EventGrant;
                toProto(message: _8.EventGrant): Uint8Array;
                toProtoMsg(message: _8.EventGrant): _8.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _8.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.EventRevoke;
                fromPartial(object: Partial<_8.EventRevoke>): _8.EventRevoke;
                fromAmino(object: _8.EventRevokeAmino): _8.EventRevoke;
                toAmino(message: _8.EventRevoke): _8.EventRevokeAmino;
                fromAminoMsg(object: _8.EventRevokeAminoMsg): _8.EventRevoke;
                toAminoMsg(message: _8.EventRevoke): _8.EventRevokeAminoMsg;
                fromProtoMsg(message: _8.EventRevokeProtoMsg): _8.EventRevoke;
                toProto(message: _8.EventRevoke): Uint8Array;
                toProtoMsg(message: _8.EventRevoke): _8.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _7.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.GenericAuthorization;
                fromPartial(object: Partial<_7.GenericAuthorization>): _7.GenericAuthorization;
                fromAmino(object: _7.GenericAuthorizationAmino): _7.GenericAuthorization;
                toAmino(message: _7.GenericAuthorization): _7.GenericAuthorizationAmino;
                fromAminoMsg(object: _7.GenericAuthorizationAminoMsg): _7.GenericAuthorization;
                toAminoMsg(message: _7.GenericAuthorization): _7.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _7.GenericAuthorizationProtoMsg): _7.GenericAuthorization;
                toProto(message: _7.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _7.GenericAuthorization): _7.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _7.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.Grant;
                fromPartial(object: Partial<_7.Grant>): _7.Grant;
                fromAmino(object: _7.GrantAmino): _7.Grant;
                toAmino(message: _7.Grant): _7.GrantAmino;
                fromAminoMsg(object: _7.GrantAminoMsg): _7.Grant;
                toAminoMsg(message: _7.Grant): _7.GrantAminoMsg;
                fromProtoMsg(message: _7.GrantProtoMsg): _7.Grant;
                toProto(message: _7.Grant): Uint8Array;
                toProtoMsg(message: _7.Grant): _7.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _7.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.GrantAuthorization;
                fromPartial(object: Partial<_7.GrantAuthorization>): _7.GrantAuthorization;
                fromAmino(object: _7.GrantAuthorizationAmino): _7.GrantAuthorization;
                toAmino(message: _7.GrantAuthorization): _7.GrantAuthorizationAmino;
                fromAminoMsg(object: _7.GrantAuthorizationAminoMsg): _7.GrantAuthorization;
                toAminoMsg(message: _7.GrantAuthorization): _7.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _7.GrantAuthorizationProtoMsg): _7.GrantAuthorization;
                toProto(message: _7.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _7.GrantAuthorization): _7.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _7.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.GrantQueueItem;
                fromPartial(object: Partial<_7.GrantQueueItem>): _7.GrantQueueItem;
                fromAmino(object: _7.GrantQueueItemAmino): _7.GrantQueueItem;
                toAmino(message: _7.GrantQueueItem): _7.GrantQueueItemAmino;
                fromAminoMsg(object: _7.GrantQueueItemAminoMsg): _7.GrantQueueItem;
                toAminoMsg(message: _7.GrantQueueItem): _7.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _7.GrantQueueItemProtoMsg): _7.GrantQueueItem;
                toProto(message: _7.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _7.GrantQueueItem): _7.GrantQueueItemProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _12.SendAuthorization | _83.StakeAuthorization | _7.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _181.MsgClientImpl;
            QueryClientImpl: typeof _164.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _15.QueryBalanceRequest): Promise<_15.QueryBalanceResponse>;
                allBalances(request: _15.QueryAllBalancesRequest): Promise<_15.QueryAllBalancesResponse>;
                spendableBalances(request: _15.QuerySpendableBalancesRequest): Promise<_15.QuerySpendableBalancesResponse>;
                totalSupply(request?: _15.QueryTotalSupplyRequest): Promise<_15.QueryTotalSupplyResponse>;
                supplyOf(request: _15.QuerySupplyOfRequest): Promise<_15.QuerySupplyOfResponse>;
                params(request?: _15.QueryParamsRequest): Promise<_15.QueryParamsResponse>;
                denomMetadata(request: _15.QueryDenomMetadataRequest): Promise<_15.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _15.QueryDenomsMetadataRequest): Promise<_15.QueryDenomsMetadataResponse>;
                denomOwners(request: _15.QueryDenomOwnersRequest): Promise<_15.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _145.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _16.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _16.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _16.MsgSend): {
                        typeUrl: string;
                        value: _16.MsgSend;
                    };
                    multiSend(value: _16.MsgMultiSend): {
                        typeUrl: string;
                        value: _16.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _16.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _16.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _16.MsgSend): {
                        typeUrl: string;
                        value: _16.MsgSend;
                    };
                    multiSend(value: _16.MsgMultiSend): {
                        typeUrl: string;
                        value: _16.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _16.MsgSend) => _16.MsgSendAmino;
                    fromAmino: (object: _16.MsgSendAmino) => _16.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _16.MsgMultiSend) => _16.MsgMultiSendAmino;
                    fromAmino: (object: _16.MsgMultiSendAmino) => _16.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _16.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.MsgSend;
                fromPartial(object: Partial<_16.MsgSend>): _16.MsgSend;
                fromAmino(object: _16.MsgSendAmino): _16.MsgSend;
                toAmino(message: _16.MsgSend): _16.MsgSendAmino;
                fromAminoMsg(object: _16.MsgSendAminoMsg): _16.MsgSend;
                toAminoMsg(message: _16.MsgSend): _16.MsgSendAminoMsg;
                fromProtoMsg(message: _16.MsgSendProtoMsg): _16.MsgSend;
                toProto(message: _16.MsgSend): Uint8Array;
                toProtoMsg(message: _16.MsgSend): _16.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _16.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.MsgSendResponse;
                fromPartial(_: Partial<_16.MsgSendResponse>): _16.MsgSendResponse;
                fromAmino(_: _16.MsgSendResponseAmino): _16.MsgSendResponse;
                toAmino(_: _16.MsgSendResponse): _16.MsgSendResponseAmino;
                fromAminoMsg(object: _16.MsgSendResponseAminoMsg): _16.MsgSendResponse;
                toAminoMsg(message: _16.MsgSendResponse): _16.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _16.MsgSendResponseProtoMsg): _16.MsgSendResponse;
                toProto(message: _16.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _16.MsgSendResponse): _16.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _16.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.MsgMultiSend;
                fromPartial(object: Partial<_16.MsgMultiSend>): _16.MsgMultiSend;
                fromAmino(object: _16.MsgMultiSendAmino): _16.MsgMultiSend;
                toAmino(message: _16.MsgMultiSend): _16.MsgMultiSendAmino;
                fromAminoMsg(object: _16.MsgMultiSendAminoMsg): _16.MsgMultiSend;
                toAminoMsg(message: _16.MsgMultiSend): _16.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _16.MsgMultiSendProtoMsg): _16.MsgMultiSend;
                toProto(message: _16.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _16.MsgMultiSend): _16.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _16.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.MsgMultiSendResponse;
                fromPartial(_: Partial<_16.MsgMultiSendResponse>): _16.MsgMultiSendResponse;
                fromAmino(_: _16.MsgMultiSendResponseAmino): _16.MsgMultiSendResponse;
                toAmino(_: _16.MsgMultiSendResponse): _16.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _16.MsgMultiSendResponseAminoMsg): _16.MsgMultiSendResponse;
                toAminoMsg(message: _16.MsgMultiSendResponse): _16.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _16.MsgMultiSendResponseProtoMsg): _16.MsgMultiSendResponse;
                toProto(message: _16.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _16.MsgMultiSendResponse): _16.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _15.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryBalanceRequest;
                fromPartial(object: Partial<_15.QueryBalanceRequest>): _15.QueryBalanceRequest;
                fromAmino(object: _15.QueryBalanceRequestAmino): _15.QueryBalanceRequest;
                toAmino(message: _15.QueryBalanceRequest): _15.QueryBalanceRequestAmino;
                fromAminoMsg(object: _15.QueryBalanceRequestAminoMsg): _15.QueryBalanceRequest;
                toAminoMsg(message: _15.QueryBalanceRequest): _15.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _15.QueryBalanceRequestProtoMsg): _15.QueryBalanceRequest;
                toProto(message: _15.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _15.QueryBalanceRequest): _15.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _15.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryBalanceResponse;
                fromPartial(object: Partial<_15.QueryBalanceResponse>): _15.QueryBalanceResponse;
                fromAmino(object: _15.QueryBalanceResponseAmino): _15.QueryBalanceResponse;
                toAmino(message: _15.QueryBalanceResponse): _15.QueryBalanceResponseAmino;
                fromAminoMsg(object: _15.QueryBalanceResponseAminoMsg): _15.QueryBalanceResponse;
                toAminoMsg(message: _15.QueryBalanceResponse): _15.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _15.QueryBalanceResponseProtoMsg): _15.QueryBalanceResponse;
                toProto(message: _15.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _15.QueryBalanceResponse): _15.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _15.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryAllBalancesRequest;
                fromPartial(object: Partial<_15.QueryAllBalancesRequest>): _15.QueryAllBalancesRequest;
                fromAmino(object: _15.QueryAllBalancesRequestAmino): _15.QueryAllBalancesRequest;
                toAmino(message: _15.QueryAllBalancesRequest): _15.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _15.QueryAllBalancesRequestAminoMsg): _15.QueryAllBalancesRequest;
                toAminoMsg(message: _15.QueryAllBalancesRequest): _15.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _15.QueryAllBalancesRequestProtoMsg): _15.QueryAllBalancesRequest;
                toProto(message: _15.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _15.QueryAllBalancesRequest): _15.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _15.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryAllBalancesResponse;
                fromPartial(object: Partial<_15.QueryAllBalancesResponse>): _15.QueryAllBalancesResponse;
                fromAmino(object: _15.QueryAllBalancesResponseAmino): _15.QueryAllBalancesResponse;
                toAmino(message: _15.QueryAllBalancesResponse): _15.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _15.QueryAllBalancesResponseAminoMsg): _15.QueryAllBalancesResponse;
                toAminoMsg(message: _15.QueryAllBalancesResponse): _15.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _15.QueryAllBalancesResponseProtoMsg): _15.QueryAllBalancesResponse;
                toProto(message: _15.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _15.QueryAllBalancesResponse): _15.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _15.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_15.QuerySpendableBalancesRequest>): _15.QuerySpendableBalancesRequest;
                fromAmino(object: _15.QuerySpendableBalancesRequestAmino): _15.QuerySpendableBalancesRequest;
                toAmino(message: _15.QuerySpendableBalancesRequest): _15.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _15.QuerySpendableBalancesRequestAminoMsg): _15.QuerySpendableBalancesRequest;
                toAminoMsg(message: _15.QuerySpendableBalancesRequest): _15.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _15.QuerySpendableBalancesRequestProtoMsg): _15.QuerySpendableBalancesRequest;
                toProto(message: _15.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _15.QuerySpendableBalancesRequest): _15.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _15.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_15.QuerySpendableBalancesResponse>): _15.QuerySpendableBalancesResponse;
                fromAmino(object: _15.QuerySpendableBalancesResponseAmino): _15.QuerySpendableBalancesResponse;
                toAmino(message: _15.QuerySpendableBalancesResponse): _15.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _15.QuerySpendableBalancesResponseAminoMsg): _15.QuerySpendableBalancesResponse;
                toAminoMsg(message: _15.QuerySpendableBalancesResponse): _15.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _15.QuerySpendableBalancesResponseProtoMsg): _15.QuerySpendableBalancesResponse;
                toProto(message: _15.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _15.QuerySpendableBalancesResponse): _15.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _15.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_15.QueryTotalSupplyRequest>): _15.QueryTotalSupplyRequest;
                fromAmino(object: _15.QueryTotalSupplyRequestAmino): _15.QueryTotalSupplyRequest;
                toAmino(message: _15.QueryTotalSupplyRequest): _15.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _15.QueryTotalSupplyRequestAminoMsg): _15.QueryTotalSupplyRequest;
                toAminoMsg(message: _15.QueryTotalSupplyRequest): _15.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _15.QueryTotalSupplyRequestProtoMsg): _15.QueryTotalSupplyRequest;
                toProto(message: _15.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _15.QueryTotalSupplyRequest): _15.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _15.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_15.QueryTotalSupplyResponse>): _15.QueryTotalSupplyResponse;
                fromAmino(object: _15.QueryTotalSupplyResponseAmino): _15.QueryTotalSupplyResponse;
                toAmino(message: _15.QueryTotalSupplyResponse): _15.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _15.QueryTotalSupplyResponseAminoMsg): _15.QueryTotalSupplyResponse;
                toAminoMsg(message: _15.QueryTotalSupplyResponse): _15.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _15.QueryTotalSupplyResponseProtoMsg): _15.QueryTotalSupplyResponse;
                toProto(message: _15.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _15.QueryTotalSupplyResponse): _15.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _15.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QuerySupplyOfRequest;
                fromPartial(object: Partial<_15.QuerySupplyOfRequest>): _15.QuerySupplyOfRequest;
                fromAmino(object: _15.QuerySupplyOfRequestAmino): _15.QuerySupplyOfRequest;
                toAmino(message: _15.QuerySupplyOfRequest): _15.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _15.QuerySupplyOfRequestAminoMsg): _15.QuerySupplyOfRequest;
                toAminoMsg(message: _15.QuerySupplyOfRequest): _15.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _15.QuerySupplyOfRequestProtoMsg): _15.QuerySupplyOfRequest;
                toProto(message: _15.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _15.QuerySupplyOfRequest): _15.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _15.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QuerySupplyOfResponse;
                fromPartial(object: Partial<_15.QuerySupplyOfResponse>): _15.QuerySupplyOfResponse;
                fromAmino(object: _15.QuerySupplyOfResponseAmino): _15.QuerySupplyOfResponse;
                toAmino(message: _15.QuerySupplyOfResponse): _15.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _15.QuerySupplyOfResponseAminoMsg): _15.QuerySupplyOfResponse;
                toAminoMsg(message: _15.QuerySupplyOfResponse): _15.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _15.QuerySupplyOfResponseProtoMsg): _15.QuerySupplyOfResponse;
                toProto(message: _15.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _15.QuerySupplyOfResponse): _15.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _15.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _15.QueryParamsRequest;
                fromPartial(_: Partial<_15.QueryParamsRequest>): _15.QueryParamsRequest;
                fromAmino(_: _15.QueryParamsRequestAmino): _15.QueryParamsRequest;
                toAmino(_: _15.QueryParamsRequest): _15.QueryParamsRequestAmino;
                fromAminoMsg(object: _15.QueryParamsRequestAminoMsg): _15.QueryParamsRequest;
                toAminoMsg(message: _15.QueryParamsRequest): _15.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _15.QueryParamsRequestProtoMsg): _15.QueryParamsRequest;
                toProto(message: _15.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _15.QueryParamsRequest): _15.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _15.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryParamsResponse;
                fromPartial(object: Partial<_15.QueryParamsResponse>): _15.QueryParamsResponse;
                fromAmino(object: _15.QueryParamsResponseAmino): _15.QueryParamsResponse;
                toAmino(message: _15.QueryParamsResponse): _15.QueryParamsResponseAmino;
                fromAminoMsg(object: _15.QueryParamsResponseAminoMsg): _15.QueryParamsResponse;
                toAminoMsg(message: _15.QueryParamsResponse): _15.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _15.QueryParamsResponseProtoMsg): _15.QueryParamsResponse;
                toProto(message: _15.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _15.QueryParamsResponse): _15.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _15.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_15.QueryDenomsMetadataRequest>): _15.QueryDenomsMetadataRequest;
                fromAmino(object: _15.QueryDenomsMetadataRequestAmino): _15.QueryDenomsMetadataRequest;
                toAmino(message: _15.QueryDenomsMetadataRequest): _15.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _15.QueryDenomsMetadataRequestAminoMsg): _15.QueryDenomsMetadataRequest;
                toAminoMsg(message: _15.QueryDenomsMetadataRequest): _15.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _15.QueryDenomsMetadataRequestProtoMsg): _15.QueryDenomsMetadataRequest;
                toProto(message: _15.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _15.QueryDenomsMetadataRequest): _15.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _15.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_15.QueryDenomsMetadataResponse>): _15.QueryDenomsMetadataResponse;
                fromAmino(object: _15.QueryDenomsMetadataResponseAmino): _15.QueryDenomsMetadataResponse;
                toAmino(message: _15.QueryDenomsMetadataResponse): _15.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _15.QueryDenomsMetadataResponseAminoMsg): _15.QueryDenomsMetadataResponse;
                toAminoMsg(message: _15.QueryDenomsMetadataResponse): _15.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _15.QueryDenomsMetadataResponseProtoMsg): _15.QueryDenomsMetadataResponse;
                toProto(message: _15.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _15.QueryDenomsMetadataResponse): _15.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _15.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_15.QueryDenomMetadataRequest>): _15.QueryDenomMetadataRequest;
                fromAmino(object: _15.QueryDenomMetadataRequestAmino): _15.QueryDenomMetadataRequest;
                toAmino(message: _15.QueryDenomMetadataRequest): _15.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _15.QueryDenomMetadataRequestAminoMsg): _15.QueryDenomMetadataRequest;
                toAminoMsg(message: _15.QueryDenomMetadataRequest): _15.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _15.QueryDenomMetadataRequestProtoMsg): _15.QueryDenomMetadataRequest;
                toProto(message: _15.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _15.QueryDenomMetadataRequest): _15.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _15.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_15.QueryDenomMetadataResponse>): _15.QueryDenomMetadataResponse;
                fromAmino(object: _15.QueryDenomMetadataResponseAmino): _15.QueryDenomMetadataResponse;
                toAmino(message: _15.QueryDenomMetadataResponse): _15.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _15.QueryDenomMetadataResponseAminoMsg): _15.QueryDenomMetadataResponse;
                toAminoMsg(message: _15.QueryDenomMetadataResponse): _15.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _15.QueryDenomMetadataResponseProtoMsg): _15.QueryDenomMetadataResponse;
                toProto(message: _15.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _15.QueryDenomMetadataResponse): _15.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _15.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_15.QueryDenomOwnersRequest>): _15.QueryDenomOwnersRequest;
                fromAmino(object: _15.QueryDenomOwnersRequestAmino): _15.QueryDenomOwnersRequest;
                toAmino(message: _15.QueryDenomOwnersRequest): _15.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _15.QueryDenomOwnersRequestAminoMsg): _15.QueryDenomOwnersRequest;
                toAminoMsg(message: _15.QueryDenomOwnersRequest): _15.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _15.QueryDenomOwnersRequestProtoMsg): _15.QueryDenomOwnersRequest;
                toProto(message: _15.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _15.QueryDenomOwnersRequest): _15.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _15.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.DenomOwner;
                fromPartial(object: Partial<_15.DenomOwner>): _15.DenomOwner;
                fromAmino(object: _15.DenomOwnerAmino): _15.DenomOwner;
                toAmino(message: _15.DenomOwner): _15.DenomOwnerAmino;
                fromAminoMsg(object: _15.DenomOwnerAminoMsg): _15.DenomOwner;
                toAminoMsg(message: _15.DenomOwner): _15.DenomOwnerAminoMsg;
                fromProtoMsg(message: _15.DenomOwnerProtoMsg): _15.DenomOwner;
                toProto(message: _15.DenomOwner): Uint8Array;
                toProtoMsg(message: _15.DenomOwner): _15.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _15.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_15.QueryDenomOwnersResponse>): _15.QueryDenomOwnersResponse;
                fromAmino(object: _15.QueryDenomOwnersResponseAmino): _15.QueryDenomOwnersResponse;
                toAmino(message: _15.QueryDenomOwnersResponse): _15.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _15.QueryDenomOwnersResponseAminoMsg): _15.QueryDenomOwnersResponse;
                toAminoMsg(message: _15.QueryDenomOwnersResponse): _15.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _15.QueryDenomOwnersResponseProtoMsg): _15.QueryDenomOwnersResponse;
                toProto(message: _15.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _15.QueryDenomOwnersResponse): _15.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _14.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.GenesisState;
                fromPartial(object: Partial<_14.GenesisState>): _14.GenesisState;
                fromAmino(object: _14.GenesisStateAmino): _14.GenesisState;
                toAmino(message: _14.GenesisState): _14.GenesisStateAmino;
                fromAminoMsg(object: _14.GenesisStateAminoMsg): _14.GenesisState;
                toAminoMsg(message: _14.GenesisState): _14.GenesisStateAminoMsg;
                fromProtoMsg(message: _14.GenesisStateProtoMsg): _14.GenesisState;
                toProto(message: _14.GenesisState): Uint8Array;
                toProtoMsg(message: _14.GenesisState): _14.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _14.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.Balance;
                fromPartial(object: Partial<_14.Balance>): _14.Balance;
                fromAmino(object: _14.BalanceAmino): _14.Balance;
                toAmino(message: _14.Balance): _14.BalanceAmino;
                fromAminoMsg(object: _14.BalanceAminoMsg): _14.Balance;
                toAminoMsg(message: _14.Balance): _14.BalanceAminoMsg;
                fromProtoMsg(message: _14.BalanceProtoMsg): _14.Balance;
                toProto(message: _14.Balance): Uint8Array;
                toProtoMsg(message: _14.Balance): _14.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _13.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.Params;
                fromPartial(object: Partial<_13.Params>): _13.Params;
                fromAmino(object: _13.ParamsAmino): _13.Params;
                toAmino(message: _13.Params): _13.ParamsAmino;
                fromAminoMsg(object: _13.ParamsAminoMsg): _13.Params;
                toAminoMsg(message: _13.Params): _13.ParamsAminoMsg;
                fromProtoMsg(message: _13.ParamsProtoMsg): _13.Params;
                toProto(message: _13.Params): Uint8Array;
                toProtoMsg(message: _13.Params): _13.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _13.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.SendEnabled;
                fromPartial(object: Partial<_13.SendEnabled>): _13.SendEnabled;
                fromAmino(object: _13.SendEnabledAmino): _13.SendEnabled;
                toAmino(message: _13.SendEnabled): _13.SendEnabledAmino;
                fromAminoMsg(object: _13.SendEnabledAminoMsg): _13.SendEnabled;
                toAminoMsg(message: _13.SendEnabled): _13.SendEnabledAminoMsg;
                fromProtoMsg(message: _13.SendEnabledProtoMsg): _13.SendEnabled;
                toProto(message: _13.SendEnabled): Uint8Array;
                toProtoMsg(message: _13.SendEnabled): _13.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _13.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.Input;
                fromPartial(object: Partial<_13.Input>): _13.Input;
                fromAmino(object: _13.InputAmino): _13.Input;
                toAmino(message: _13.Input): _13.InputAmino;
                fromAminoMsg(object: _13.InputAminoMsg): _13.Input;
                toAminoMsg(message: _13.Input): _13.InputAminoMsg;
                fromProtoMsg(message: _13.InputProtoMsg): _13.Input;
                toProto(message: _13.Input): Uint8Array;
                toProtoMsg(message: _13.Input): _13.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _13.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.Output;
                fromPartial(object: Partial<_13.Output>): _13.Output;
                fromAmino(object: _13.OutputAmino): _13.Output;
                toAmino(message: _13.Output): _13.OutputAmino;
                fromAminoMsg(object: _13.OutputAminoMsg): _13.Output;
                toAminoMsg(message: _13.Output): _13.OutputAminoMsg;
                fromProtoMsg(message: _13.OutputProtoMsg): _13.Output;
                toProto(message: _13.Output): Uint8Array;
                toProtoMsg(message: _13.Output): _13.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _13.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.Supply;
                fromPartial(object: Partial<_13.Supply>): _13.Supply;
                fromAmino(object: _13.SupplyAmino): _13.Supply;
                toAmino(message: _13.Supply): _13.SupplyAmino;
                fromAminoMsg(object: _13.SupplyAminoMsg): _13.Supply;
                toAminoMsg(message: _13.Supply): _13.SupplyAminoMsg;
                fromProtoMsg(message: _13.SupplyProtoMsg): _13.Supply;
                toProto(message: _13.Supply): Uint8Array;
                toProtoMsg(message: _13.Supply): _13.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _13.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.DenomUnit;
                fromPartial(object: Partial<_13.DenomUnit>): _13.DenomUnit;
                fromAmino(object: _13.DenomUnitAmino): _13.DenomUnit;
                toAmino(message: _13.DenomUnit): _13.DenomUnitAmino;
                fromAminoMsg(object: _13.DenomUnitAminoMsg): _13.DenomUnit;
                toAminoMsg(message: _13.DenomUnit): _13.DenomUnitAminoMsg;
                fromProtoMsg(message: _13.DenomUnitProtoMsg): _13.DenomUnit;
                toProto(message: _13.DenomUnit): Uint8Array;
                toProtoMsg(message: _13.DenomUnit): _13.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _13.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.Metadata;
                fromPartial(object: Partial<_13.Metadata>): _13.Metadata;
                fromAmino(object: _13.MetadataAmino): _13.Metadata;
                toAmino(message: _13.Metadata): _13.MetadataAmino;
                fromAminoMsg(object: _13.MetadataAminoMsg): _13.Metadata;
                toAminoMsg(message: _13.Metadata): _13.MetadataAminoMsg;
                fromProtoMsg(message: _13.MetadataProtoMsg): _13.Metadata;
                toProto(message: _13.Metadata): Uint8Array;
                toProtoMsg(message: _13.Metadata): _13.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _12.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.SendAuthorization;
                fromPartial(object: Partial<_12.SendAuthorization>): _12.SendAuthorization;
                fromAmino(object: _12.SendAuthorizationAmino): _12.SendAuthorization;
                toAmino(message: _12.SendAuthorization): _12.SendAuthorizationAmino;
                fromAminoMsg(object: _12.SendAuthorizationAminoMsg): _12.SendAuthorization;
                toAminoMsg(message: _12.SendAuthorization): _12.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _12.SendAuthorizationProtoMsg): _12.SendAuthorization;
                toProto(message: _12.SendAuthorization): Uint8Array;
                toProtoMsg(message: _12.SendAuthorization): _12.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _17.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.TxResponse;
                    fromPartial(object: Partial<_17.TxResponse>): _17.TxResponse;
                    fromAmino(object: _17.TxResponseAmino): _17.TxResponse;
                    toAmino(message: _17.TxResponse): _17.TxResponseAmino;
                    fromAminoMsg(object: _17.TxResponseAminoMsg): _17.TxResponse;
                    toAminoMsg(message: _17.TxResponse): _17.TxResponseAminoMsg;
                    fromProtoMsg(message: _17.TxResponseProtoMsg): _17.TxResponse;
                    toProto(message: _17.TxResponse): Uint8Array;
                    toProtoMsg(message: _17.TxResponse): _17.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _17.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.ABCIMessageLog;
                    fromPartial(object: Partial<_17.ABCIMessageLog>): _17.ABCIMessageLog;
                    fromAmino(object: _17.ABCIMessageLogAmino): _17.ABCIMessageLog;
                    toAmino(message: _17.ABCIMessageLog): _17.ABCIMessageLogAmino;
                    fromAminoMsg(object: _17.ABCIMessageLogAminoMsg): _17.ABCIMessageLog;
                    toAminoMsg(message: _17.ABCIMessageLog): _17.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _17.ABCIMessageLogProtoMsg): _17.ABCIMessageLog;
                    toProto(message: _17.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _17.ABCIMessageLog): _17.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _17.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.StringEvent;
                    fromPartial(object: Partial<_17.StringEvent>): _17.StringEvent;
                    fromAmino(object: _17.StringEventAmino): _17.StringEvent;
                    toAmino(message: _17.StringEvent): _17.StringEventAmino;
                    fromAminoMsg(object: _17.StringEventAminoMsg): _17.StringEvent;
                    toAminoMsg(message: _17.StringEvent): _17.StringEventAminoMsg;
                    fromProtoMsg(message: _17.StringEventProtoMsg): _17.StringEvent;
                    toProto(message: _17.StringEvent): Uint8Array;
                    toProtoMsg(message: _17.StringEvent): _17.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _17.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.Attribute;
                    fromPartial(object: Partial<_17.Attribute>): _17.Attribute;
                    fromAmino(object: _17.AttributeAmino): _17.Attribute;
                    toAmino(message: _17.Attribute): _17.AttributeAmino;
                    fromAminoMsg(object: _17.AttributeAminoMsg): _17.Attribute;
                    toAminoMsg(message: _17.Attribute): _17.AttributeAminoMsg;
                    fromProtoMsg(message: _17.AttributeProtoMsg): _17.Attribute;
                    toProto(message: _17.Attribute): Uint8Array;
                    toProtoMsg(message: _17.Attribute): _17.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _17.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.GasInfo;
                    fromPartial(object: Partial<_17.GasInfo>): _17.GasInfo;
                    fromAmino(object: _17.GasInfoAmino): _17.GasInfo;
                    toAmino(message: _17.GasInfo): _17.GasInfoAmino;
                    fromAminoMsg(object: _17.GasInfoAminoMsg): _17.GasInfo;
                    toAminoMsg(message: _17.GasInfo): _17.GasInfoAminoMsg;
                    fromProtoMsg(message: _17.GasInfoProtoMsg): _17.GasInfo;
                    toProto(message: _17.GasInfo): Uint8Array;
                    toProtoMsg(message: _17.GasInfo): _17.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _17.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.Result;
                    fromPartial(object: Partial<_17.Result>): _17.Result;
                    fromAmino(object: _17.ResultAmino): _17.Result;
                    toAmino(message: _17.Result): _17.ResultAmino;
                    fromAminoMsg(object: _17.ResultAminoMsg): _17.Result;
                    toAminoMsg(message: _17.Result): _17.ResultAminoMsg;
                    fromProtoMsg(message: _17.ResultProtoMsg): _17.Result;
                    toProto(message: _17.Result): Uint8Array;
                    toProtoMsg(message: _17.Result): _17.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _17.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.SimulationResponse;
                    fromPartial(object: Partial<_17.SimulationResponse>): _17.SimulationResponse;
                    fromAmino(object: _17.SimulationResponseAmino): _17.SimulationResponse;
                    toAmino(message: _17.SimulationResponse): _17.SimulationResponseAmino;
                    fromAminoMsg(object: _17.SimulationResponseAminoMsg): _17.SimulationResponse;
                    toAminoMsg(message: _17.SimulationResponse): _17.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _17.SimulationResponseProtoMsg): _17.SimulationResponse;
                    toProto(message: _17.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _17.SimulationResponse): _17.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _17.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.MsgData;
                    fromPartial(object: Partial<_17.MsgData>): _17.MsgData;
                    fromAmino(object: _17.MsgDataAmino): _17.MsgData;
                    toAmino(message: _17.MsgData): _17.MsgDataAmino;
                    fromAminoMsg(object: _17.MsgDataAminoMsg): _17.MsgData;
                    toAminoMsg(message: _17.MsgData): _17.MsgDataAminoMsg;
                    fromProtoMsg(message: _17.MsgDataProtoMsg): _17.MsgData;
                    toProto(message: _17.MsgData): Uint8Array;
                    toProtoMsg(message: _17.MsgData): _17.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _17.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.TxMsgData;
                    fromPartial(object: Partial<_17.TxMsgData>): _17.TxMsgData;
                    fromAmino(object: _17.TxMsgDataAmino): _17.TxMsgData;
                    toAmino(message: _17.TxMsgData): _17.TxMsgDataAmino;
                    fromAminoMsg(object: _17.TxMsgDataAminoMsg): _17.TxMsgData;
                    toAminoMsg(message: _17.TxMsgData): _17.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _17.TxMsgDataProtoMsg): _17.TxMsgData;
                    toProto(message: _17.TxMsgData): Uint8Array;
                    toProtoMsg(message: _17.TxMsgData): _17.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _17.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.SearchTxsResult;
                    fromPartial(object: Partial<_17.SearchTxsResult>): _17.SearchTxsResult;
                    fromAmino(object: _17.SearchTxsResultAmino): _17.SearchTxsResult;
                    toAmino(message: _17.SearchTxsResult): _17.SearchTxsResultAmino;
                    fromAminoMsg(object: _17.SearchTxsResultAminoMsg): _17.SearchTxsResult;
                    toAminoMsg(message: _17.SearchTxsResult): _17.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _17.SearchTxsResultProtoMsg): _17.SearchTxsResult;
                    toProto(message: _17.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _17.SearchTxsResult): _17.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _18.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.Pairs;
                    fromPartial(object: Partial<_18.Pairs>): _18.Pairs;
                    fromAmino(object: _18.PairsAmino): _18.Pairs;
                    toAmino(message: _18.Pairs): _18.PairsAmino;
                    fromAminoMsg(object: _18.PairsAminoMsg): _18.Pairs;
                    toAminoMsg(message: _18.Pairs): _18.PairsAminoMsg;
                    fromProtoMsg(message: _18.PairsProtoMsg): _18.Pairs;
                    toProto(message: _18.Pairs): Uint8Array;
                    toProtoMsg(message: _18.Pairs): _18.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _18.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.Pair;
                    fromPartial(object: Partial<_18.Pair>): _18.Pair;
                    fromAmino(object: _18.PairAmino): _18.Pair;
                    toAmino(message: _18.Pair): _18.PairAmino;
                    fromAminoMsg(object: _18.PairAminoMsg): _18.Pair;
                    toAminoMsg(message: _18.Pair): _18.PairAminoMsg;
                    fromProtoMsg(message: _18.PairProtoMsg): _18.Pair;
                    toProto(message: _18.Pair): Uint8Array;
                    toProtoMsg(message: _18.Pair): _18.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _165.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _19.ConfigRequest): Promise<_19.ConfigResponse>;
                };
                LCDQueryClient: typeof _146.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _19.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _19.ConfigRequest;
                    fromPartial(_: Partial<_19.ConfigRequest>): _19.ConfigRequest;
                    fromAmino(_: _19.ConfigRequestAmino): _19.ConfigRequest;
                    toAmino(_: _19.ConfigRequest): _19.ConfigRequestAmino;
                    fromAminoMsg(object: _19.ConfigRequestAminoMsg): _19.ConfigRequest;
                    toAminoMsg(message: _19.ConfigRequest): _19.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _19.ConfigRequestProtoMsg): _19.ConfigRequest;
                    toProto(message: _19.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _19.ConfigRequest): _19.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _19.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.ConfigResponse;
                    fromPartial(object: Partial<_19.ConfigResponse>): _19.ConfigResponse;
                    fromAmino(object: _19.ConfigResponseAmino): _19.ConfigResponse;
                    toAmino(message: _19.ConfigResponse): _19.ConfigResponseAmino;
                    fromAminoMsg(object: _19.ConfigResponseAminoMsg): _19.ConfigResponse;
                    toAminoMsg(message: _19.ConfigResponse): _19.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _19.ConfigResponseProtoMsg): _19.ConfigResponse;
                    toProto(message: _19.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _19.ConfigResponse): _19.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _20.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.PageRequest;
                    fromPartial(object: Partial<_20.PageRequest>): _20.PageRequest;
                    fromAmino(object: _20.PageRequestAmino): _20.PageRequest;
                    toAmino(message: _20.PageRequest): _20.PageRequestAmino;
                    fromAminoMsg(object: _20.PageRequestAminoMsg): _20.PageRequest;
                    toAminoMsg(message: _20.PageRequest): _20.PageRequestAminoMsg;
                    fromProtoMsg(message: _20.PageRequestProtoMsg): _20.PageRequest;
                    toProto(message: _20.PageRequest): Uint8Array;
                    toProtoMsg(message: _20.PageRequest): _20.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _20.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.PageResponse;
                    fromPartial(object: Partial<_20.PageResponse>): _20.PageResponse;
                    fromAmino(object: _20.PageResponseAmino): _20.PageResponse;
                    toAmino(message: _20.PageResponse): _20.PageResponseAmino;
                    fromAminoMsg(object: _20.PageResponseAminoMsg): _20.PageResponse;
                    toAminoMsg(message: _20.PageResponse): _20.PageResponseAminoMsg;
                    fromProtoMsg(message: _20.PageResponseProtoMsg): _20.PageResponse;
                    toProto(message: _20.PageResponse): Uint8Array;
                    toProtoMsg(message: _20.PageResponse): _20.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _21.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _21.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_21.ListAllInterfacesRequest>): _21.ListAllInterfacesRequest;
                    fromAmino(_: _21.ListAllInterfacesRequestAmino): _21.ListAllInterfacesRequest;
                    toAmino(_: _21.ListAllInterfacesRequest): _21.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _21.ListAllInterfacesRequestAminoMsg): _21.ListAllInterfacesRequest;
                    toAminoMsg(message: _21.ListAllInterfacesRequest): _21.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _21.ListAllInterfacesRequestProtoMsg): _21.ListAllInterfacesRequest;
                    toProto(message: _21.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _21.ListAllInterfacesRequest): _21.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _21.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_21.ListAllInterfacesResponse>): _21.ListAllInterfacesResponse;
                    fromAmino(object: _21.ListAllInterfacesResponseAmino): _21.ListAllInterfacesResponse;
                    toAmino(message: _21.ListAllInterfacesResponse): _21.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _21.ListAllInterfacesResponseAminoMsg): _21.ListAllInterfacesResponse;
                    toAminoMsg(message: _21.ListAllInterfacesResponse): _21.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _21.ListAllInterfacesResponseProtoMsg): _21.ListAllInterfacesResponse;
                    toProto(message: _21.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _21.ListAllInterfacesResponse): _21.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _21.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.ListImplementationsRequest;
                    fromPartial(object: Partial<_21.ListImplementationsRequest>): _21.ListImplementationsRequest;
                    fromAmino(object: _21.ListImplementationsRequestAmino): _21.ListImplementationsRequest;
                    toAmino(message: _21.ListImplementationsRequest): _21.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _21.ListImplementationsRequestAminoMsg): _21.ListImplementationsRequest;
                    toAminoMsg(message: _21.ListImplementationsRequest): _21.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _21.ListImplementationsRequestProtoMsg): _21.ListImplementationsRequest;
                    toProto(message: _21.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _21.ListImplementationsRequest): _21.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _21.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.ListImplementationsResponse;
                    fromPartial(object: Partial<_21.ListImplementationsResponse>): _21.ListImplementationsResponse;
                    fromAmino(object: _21.ListImplementationsResponseAmino): _21.ListImplementationsResponse;
                    toAmino(message: _21.ListImplementationsResponse): _21.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _21.ListImplementationsResponseAminoMsg): _21.ListImplementationsResponse;
                    toAminoMsg(message: _21.ListImplementationsResponse): _21.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _21.ListImplementationsResponseProtoMsg): _21.ListImplementationsResponse;
                    toProto(message: _21.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _21.ListImplementationsResponse): _21.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _22.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.AppDescriptor;
                    fromPartial(object: Partial<_22.AppDescriptor>): _22.AppDescriptor;
                    fromAmino(object: _22.AppDescriptorAmino): _22.AppDescriptor;
                    toAmino(message: _22.AppDescriptor): _22.AppDescriptorAmino;
                    fromAminoMsg(object: _22.AppDescriptorAminoMsg): _22.AppDescriptor;
                    toAminoMsg(message: _22.AppDescriptor): _22.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _22.AppDescriptorProtoMsg): _22.AppDescriptor;
                    toProto(message: _22.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _22.AppDescriptor): _22.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _22.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.TxDescriptor;
                    fromPartial(object: Partial<_22.TxDescriptor>): _22.TxDescriptor;
                    fromAmino(object: _22.TxDescriptorAmino): _22.TxDescriptor;
                    toAmino(message: _22.TxDescriptor): _22.TxDescriptorAmino;
                    fromAminoMsg(object: _22.TxDescriptorAminoMsg): _22.TxDescriptor;
                    toAminoMsg(message: _22.TxDescriptor): _22.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _22.TxDescriptorProtoMsg): _22.TxDescriptor;
                    toProto(message: _22.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _22.TxDescriptor): _22.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _22.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.AuthnDescriptor;
                    fromPartial(object: Partial<_22.AuthnDescriptor>): _22.AuthnDescriptor;
                    fromAmino(object: _22.AuthnDescriptorAmino): _22.AuthnDescriptor;
                    toAmino(message: _22.AuthnDescriptor): _22.AuthnDescriptorAmino;
                    fromAminoMsg(object: _22.AuthnDescriptorAminoMsg): _22.AuthnDescriptor;
                    toAminoMsg(message: _22.AuthnDescriptor): _22.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _22.AuthnDescriptorProtoMsg): _22.AuthnDescriptor;
                    toProto(message: _22.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _22.AuthnDescriptor): _22.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _22.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.SigningModeDescriptor;
                    fromPartial(object: Partial<_22.SigningModeDescriptor>): _22.SigningModeDescriptor;
                    fromAmino(object: _22.SigningModeDescriptorAmino): _22.SigningModeDescriptor;
                    toAmino(message: _22.SigningModeDescriptor): _22.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _22.SigningModeDescriptorAminoMsg): _22.SigningModeDescriptor;
                    toAminoMsg(message: _22.SigningModeDescriptor): _22.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _22.SigningModeDescriptorProtoMsg): _22.SigningModeDescriptor;
                    toProto(message: _22.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _22.SigningModeDescriptor): _22.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _22.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.ChainDescriptor;
                    fromPartial(object: Partial<_22.ChainDescriptor>): _22.ChainDescriptor;
                    fromAmino(object: _22.ChainDescriptorAmino): _22.ChainDescriptor;
                    toAmino(message: _22.ChainDescriptor): _22.ChainDescriptorAmino;
                    fromAminoMsg(object: _22.ChainDescriptorAminoMsg): _22.ChainDescriptor;
                    toAminoMsg(message: _22.ChainDescriptor): _22.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _22.ChainDescriptorProtoMsg): _22.ChainDescriptor;
                    toProto(message: _22.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _22.ChainDescriptor): _22.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _22.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.CodecDescriptor;
                    fromPartial(object: Partial<_22.CodecDescriptor>): _22.CodecDescriptor;
                    fromAmino(object: _22.CodecDescriptorAmino): _22.CodecDescriptor;
                    toAmino(message: _22.CodecDescriptor): _22.CodecDescriptorAmino;
                    fromAminoMsg(object: _22.CodecDescriptorAminoMsg): _22.CodecDescriptor;
                    toAminoMsg(message: _22.CodecDescriptor): _22.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _22.CodecDescriptorProtoMsg): _22.CodecDescriptor;
                    toProto(message: _22.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _22.CodecDescriptor): _22.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _22.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.InterfaceDescriptor;
                    fromPartial(object: Partial<_22.InterfaceDescriptor>): _22.InterfaceDescriptor;
                    fromAmino(object: _22.InterfaceDescriptorAmino): _22.InterfaceDescriptor;
                    toAmino(message: _22.InterfaceDescriptor): _22.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _22.InterfaceDescriptorAminoMsg): _22.InterfaceDescriptor;
                    toAminoMsg(message: _22.InterfaceDescriptor): _22.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _22.InterfaceDescriptorProtoMsg): _22.InterfaceDescriptor;
                    toProto(message: _22.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _22.InterfaceDescriptor): _22.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _22.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_22.InterfaceImplementerDescriptor>): _22.InterfaceImplementerDescriptor;
                    fromAmino(object: _22.InterfaceImplementerDescriptorAmino): _22.InterfaceImplementerDescriptor;
                    toAmino(message: _22.InterfaceImplementerDescriptor): _22.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _22.InterfaceImplementerDescriptorAminoMsg): _22.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _22.InterfaceImplementerDescriptor): _22.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _22.InterfaceImplementerDescriptorProtoMsg): _22.InterfaceImplementerDescriptor;
                    toProto(message: _22.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _22.InterfaceImplementerDescriptor): _22.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _22.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_22.InterfaceAcceptingMessageDescriptor>): _22.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _22.InterfaceAcceptingMessageDescriptorAmino): _22.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _22.InterfaceAcceptingMessageDescriptor): _22.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _22.InterfaceAcceptingMessageDescriptorAminoMsg): _22.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _22.InterfaceAcceptingMessageDescriptor): _22.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _22.InterfaceAcceptingMessageDescriptorProtoMsg): _22.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _22.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _22.InterfaceAcceptingMessageDescriptor): _22.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _22.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.ConfigurationDescriptor;
                    fromPartial(object: Partial<_22.ConfigurationDescriptor>): _22.ConfigurationDescriptor;
                    fromAmino(object: _22.ConfigurationDescriptorAmino): _22.ConfigurationDescriptor;
                    toAmino(message: _22.ConfigurationDescriptor): _22.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _22.ConfigurationDescriptorAminoMsg): _22.ConfigurationDescriptor;
                    toAminoMsg(message: _22.ConfigurationDescriptor): _22.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _22.ConfigurationDescriptorProtoMsg): _22.ConfigurationDescriptor;
                    toProto(message: _22.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _22.ConfigurationDescriptor): _22.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _22.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.MsgDescriptor;
                    fromPartial(object: Partial<_22.MsgDescriptor>): _22.MsgDescriptor;
                    fromAmino(object: _22.MsgDescriptorAmino): _22.MsgDescriptor;
                    toAmino(message: _22.MsgDescriptor): _22.MsgDescriptorAmino;
                    fromAminoMsg(object: _22.MsgDescriptorAminoMsg): _22.MsgDescriptor;
                    toAminoMsg(message: _22.MsgDescriptor): _22.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _22.MsgDescriptorProtoMsg): _22.MsgDescriptor;
                    toProto(message: _22.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _22.MsgDescriptor): _22.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _22.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _22.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_22.GetAuthnDescriptorRequest>): _22.GetAuthnDescriptorRequest;
                    fromAmino(_: _22.GetAuthnDescriptorRequestAmino): _22.GetAuthnDescriptorRequest;
                    toAmino(_: _22.GetAuthnDescriptorRequest): _22.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _22.GetAuthnDescriptorRequestAminoMsg): _22.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _22.GetAuthnDescriptorRequest): _22.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _22.GetAuthnDescriptorRequestProtoMsg): _22.GetAuthnDescriptorRequest;
                    toProto(message: _22.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _22.GetAuthnDescriptorRequest): _22.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _22.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_22.GetAuthnDescriptorResponse>): _22.GetAuthnDescriptorResponse;
                    fromAmino(object: _22.GetAuthnDescriptorResponseAmino): _22.GetAuthnDescriptorResponse;
                    toAmino(message: _22.GetAuthnDescriptorResponse): _22.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _22.GetAuthnDescriptorResponseAminoMsg): _22.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _22.GetAuthnDescriptorResponse): _22.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _22.GetAuthnDescriptorResponseProtoMsg): _22.GetAuthnDescriptorResponse;
                    toProto(message: _22.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _22.GetAuthnDescriptorResponse): _22.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _22.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _22.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_22.GetChainDescriptorRequest>): _22.GetChainDescriptorRequest;
                    fromAmino(_: _22.GetChainDescriptorRequestAmino): _22.GetChainDescriptorRequest;
                    toAmino(_: _22.GetChainDescriptorRequest): _22.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _22.GetChainDescriptorRequestAminoMsg): _22.GetChainDescriptorRequest;
                    toAminoMsg(message: _22.GetChainDescriptorRequest): _22.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _22.GetChainDescriptorRequestProtoMsg): _22.GetChainDescriptorRequest;
                    toProto(message: _22.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _22.GetChainDescriptorRequest): _22.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _22.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_22.GetChainDescriptorResponse>): _22.GetChainDescriptorResponse;
                    fromAmino(object: _22.GetChainDescriptorResponseAmino): _22.GetChainDescriptorResponse;
                    toAmino(message: _22.GetChainDescriptorResponse): _22.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _22.GetChainDescriptorResponseAminoMsg): _22.GetChainDescriptorResponse;
                    toAminoMsg(message: _22.GetChainDescriptorResponse): _22.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _22.GetChainDescriptorResponseProtoMsg): _22.GetChainDescriptorResponse;
                    toProto(message: _22.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _22.GetChainDescriptorResponse): _22.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _22.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _22.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_22.GetCodecDescriptorRequest>): _22.GetCodecDescriptorRequest;
                    fromAmino(_: _22.GetCodecDescriptorRequestAmino): _22.GetCodecDescriptorRequest;
                    toAmino(_: _22.GetCodecDescriptorRequest): _22.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _22.GetCodecDescriptorRequestAminoMsg): _22.GetCodecDescriptorRequest;
                    toAminoMsg(message: _22.GetCodecDescriptorRequest): _22.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _22.GetCodecDescriptorRequestProtoMsg): _22.GetCodecDescriptorRequest;
                    toProto(message: _22.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _22.GetCodecDescriptorRequest): _22.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _22.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_22.GetCodecDescriptorResponse>): _22.GetCodecDescriptorResponse;
                    fromAmino(object: _22.GetCodecDescriptorResponseAmino): _22.GetCodecDescriptorResponse;
                    toAmino(message: _22.GetCodecDescriptorResponse): _22.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _22.GetCodecDescriptorResponseAminoMsg): _22.GetCodecDescriptorResponse;
                    toAminoMsg(message: _22.GetCodecDescriptorResponse): _22.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _22.GetCodecDescriptorResponseProtoMsg): _22.GetCodecDescriptorResponse;
                    toProto(message: _22.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _22.GetCodecDescriptorResponse): _22.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _22.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _22.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_22.GetConfigurationDescriptorRequest>): _22.GetConfigurationDescriptorRequest;
                    fromAmino(_: _22.GetConfigurationDescriptorRequestAmino): _22.GetConfigurationDescriptorRequest;
                    toAmino(_: _22.GetConfigurationDescriptorRequest): _22.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _22.GetConfigurationDescriptorRequestAminoMsg): _22.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _22.GetConfigurationDescriptorRequest): _22.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _22.GetConfigurationDescriptorRequestProtoMsg): _22.GetConfigurationDescriptorRequest;
                    toProto(message: _22.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _22.GetConfigurationDescriptorRequest): _22.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _22.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_22.GetConfigurationDescriptorResponse>): _22.GetConfigurationDescriptorResponse;
                    fromAmino(object: _22.GetConfigurationDescriptorResponseAmino): _22.GetConfigurationDescriptorResponse;
                    toAmino(message: _22.GetConfigurationDescriptorResponse): _22.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _22.GetConfigurationDescriptorResponseAminoMsg): _22.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _22.GetConfigurationDescriptorResponse): _22.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _22.GetConfigurationDescriptorResponseProtoMsg): _22.GetConfigurationDescriptorResponse;
                    toProto(message: _22.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _22.GetConfigurationDescriptorResponse): _22.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _22.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _22.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_22.GetQueryServicesDescriptorRequest>): _22.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _22.GetQueryServicesDescriptorRequestAmino): _22.GetQueryServicesDescriptorRequest;
                    toAmino(_: _22.GetQueryServicesDescriptorRequest): _22.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _22.GetQueryServicesDescriptorRequestAminoMsg): _22.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _22.GetQueryServicesDescriptorRequest): _22.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _22.GetQueryServicesDescriptorRequestProtoMsg): _22.GetQueryServicesDescriptorRequest;
                    toProto(message: _22.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _22.GetQueryServicesDescriptorRequest): _22.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _22.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_22.GetQueryServicesDescriptorResponse>): _22.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _22.GetQueryServicesDescriptorResponseAmino): _22.GetQueryServicesDescriptorResponse;
                    toAmino(message: _22.GetQueryServicesDescriptorResponse): _22.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _22.GetQueryServicesDescriptorResponseAminoMsg): _22.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _22.GetQueryServicesDescriptorResponse): _22.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _22.GetQueryServicesDescriptorResponseProtoMsg): _22.GetQueryServicesDescriptorResponse;
                    toProto(message: _22.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _22.GetQueryServicesDescriptorResponse): _22.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _22.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _22.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_22.GetTxDescriptorRequest>): _22.GetTxDescriptorRequest;
                    fromAmino(_: _22.GetTxDescriptorRequestAmino): _22.GetTxDescriptorRequest;
                    toAmino(_: _22.GetTxDescriptorRequest): _22.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _22.GetTxDescriptorRequestAminoMsg): _22.GetTxDescriptorRequest;
                    toAminoMsg(message: _22.GetTxDescriptorRequest): _22.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _22.GetTxDescriptorRequestProtoMsg): _22.GetTxDescriptorRequest;
                    toProto(message: _22.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _22.GetTxDescriptorRequest): _22.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _22.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_22.GetTxDescriptorResponse>): _22.GetTxDescriptorResponse;
                    fromAmino(object: _22.GetTxDescriptorResponseAmino): _22.GetTxDescriptorResponse;
                    toAmino(message: _22.GetTxDescriptorResponse): _22.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _22.GetTxDescriptorResponseAminoMsg): _22.GetTxDescriptorResponse;
                    toAminoMsg(message: _22.GetTxDescriptorResponse): _22.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _22.GetTxDescriptorResponseProtoMsg): _22.GetTxDescriptorResponse;
                    toProto(message: _22.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _22.GetTxDescriptorResponse): _22.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _22.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.QueryServicesDescriptor;
                    fromPartial(object: Partial<_22.QueryServicesDescriptor>): _22.QueryServicesDescriptor;
                    fromAmino(object: _22.QueryServicesDescriptorAmino): _22.QueryServicesDescriptor;
                    toAmino(message: _22.QueryServicesDescriptor): _22.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _22.QueryServicesDescriptorAminoMsg): _22.QueryServicesDescriptor;
                    toAminoMsg(message: _22.QueryServicesDescriptor): _22.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _22.QueryServicesDescriptorProtoMsg): _22.QueryServicesDescriptor;
                    toProto(message: _22.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _22.QueryServicesDescriptor): _22.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _22.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.QueryServiceDescriptor;
                    fromPartial(object: Partial<_22.QueryServiceDescriptor>): _22.QueryServiceDescriptor;
                    fromAmino(object: _22.QueryServiceDescriptorAmino): _22.QueryServiceDescriptor;
                    toAmino(message: _22.QueryServiceDescriptor): _22.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _22.QueryServiceDescriptorAminoMsg): _22.QueryServiceDescriptor;
                    toAminoMsg(message: _22.QueryServiceDescriptor): _22.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _22.QueryServiceDescriptorProtoMsg): _22.QueryServiceDescriptor;
                    toProto(message: _22.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _22.QueryServiceDescriptor): _22.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _22.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.QueryMethodDescriptor;
                    fromPartial(object: Partial<_22.QueryMethodDescriptor>): _22.QueryMethodDescriptor;
                    fromAmino(object: _22.QueryMethodDescriptorAmino): _22.QueryMethodDescriptor;
                    toAmino(message: _22.QueryMethodDescriptor): _22.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _22.QueryMethodDescriptorAminoMsg): _22.QueryMethodDescriptor;
                    toAminoMsg(message: _22.QueryMethodDescriptor): _22.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _22.QueryMethodDescriptorProtoMsg): _22.QueryMethodDescriptor;
                    toProto(message: _22.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _22.QueryMethodDescriptor): _22.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _23.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.Snapshot;
                    fromPartial(object: Partial<_23.Snapshot>): _23.Snapshot;
                    fromAmino(object: _23.SnapshotAmino): _23.Snapshot;
                    toAmino(message: _23.Snapshot): _23.SnapshotAmino;
                    fromAminoMsg(object: _23.SnapshotAminoMsg): _23.Snapshot;
                    toAminoMsg(message: _23.Snapshot): _23.SnapshotAminoMsg;
                    fromProtoMsg(message: _23.SnapshotProtoMsg): _23.Snapshot;
                    toProto(message: _23.Snapshot): Uint8Array;
                    toProtoMsg(message: _23.Snapshot): _23.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _23.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.Metadata;
                    fromPartial(object: Partial<_23.Metadata>): _23.Metadata;
                    fromAmino(object: _23.MetadataAmino): _23.Metadata;
                    toAmino(message: _23.Metadata): _23.MetadataAmino;
                    fromAminoMsg(object: _23.MetadataAminoMsg): _23.Metadata;
                    toAminoMsg(message: _23.Metadata): _23.MetadataAminoMsg;
                    fromProtoMsg(message: _23.MetadataProtoMsg): _23.Metadata;
                    toProto(message: _23.Metadata): Uint8Array;
                    toProtoMsg(message: _23.Metadata): _23.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _23.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.SnapshotItem;
                    fromPartial(object: Partial<_23.SnapshotItem>): _23.SnapshotItem;
                    fromAmino(object: _23.SnapshotItemAmino): _23.SnapshotItem;
                    toAmino(message: _23.SnapshotItem): _23.SnapshotItemAmino;
                    fromAminoMsg(object: _23.SnapshotItemAminoMsg): _23.SnapshotItem;
                    toAminoMsg(message: _23.SnapshotItem): _23.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _23.SnapshotItemProtoMsg): _23.SnapshotItem;
                    toProto(message: _23.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _23.SnapshotItem): _23.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _23.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.SnapshotStoreItem;
                    fromPartial(object: Partial<_23.SnapshotStoreItem>): _23.SnapshotStoreItem;
                    fromAmino(object: _23.SnapshotStoreItemAmino): _23.SnapshotStoreItem;
                    toAmino(message: _23.SnapshotStoreItem): _23.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _23.SnapshotStoreItemAminoMsg): _23.SnapshotStoreItem;
                    toAminoMsg(message: _23.SnapshotStoreItem): _23.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _23.SnapshotStoreItemProtoMsg): _23.SnapshotStoreItem;
                    toProto(message: _23.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _23.SnapshotStoreItem): _23.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _23.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.SnapshotIAVLItem;
                    fromPartial(object: Partial<_23.SnapshotIAVLItem>): _23.SnapshotIAVLItem;
                    fromAmino(object: _23.SnapshotIAVLItemAmino): _23.SnapshotIAVLItem;
                    toAmino(message: _23.SnapshotIAVLItem): _23.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _23.SnapshotIAVLItemAminoMsg): _23.SnapshotIAVLItem;
                    toAminoMsg(message: _23.SnapshotIAVLItem): _23.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _23.SnapshotIAVLItemProtoMsg): _23.SnapshotIAVLItem;
                    toProto(message: _23.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _23.SnapshotIAVLItem): _23.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _23.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_23.SnapshotExtensionMeta>): _23.SnapshotExtensionMeta;
                    fromAmino(object: _23.SnapshotExtensionMetaAmino): _23.SnapshotExtensionMeta;
                    toAmino(message: _23.SnapshotExtensionMeta): _23.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _23.SnapshotExtensionMetaAminoMsg): _23.SnapshotExtensionMeta;
                    toAminoMsg(message: _23.SnapshotExtensionMeta): _23.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _23.SnapshotExtensionMetaProtoMsg): _23.SnapshotExtensionMeta;
                    toProto(message: _23.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _23.SnapshotExtensionMeta): _23.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _23.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_23.SnapshotExtensionPayload>): _23.SnapshotExtensionPayload;
                    fromAmino(object: _23.SnapshotExtensionPayloadAmino): _23.SnapshotExtensionPayload;
                    toAmino(message: _23.SnapshotExtensionPayload): _23.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _23.SnapshotExtensionPayloadAminoMsg): _23.SnapshotExtensionPayload;
                    toAminoMsg(message: _23.SnapshotExtensionPayload): _23.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _23.SnapshotExtensionPayloadProtoMsg): _23.SnapshotExtensionPayload;
                    toProto(message: _23.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _23.SnapshotExtensionPayload): _23.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _23.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.SnapshotKVItem;
                    fromPartial(object: Partial<_23.SnapshotKVItem>): _23.SnapshotKVItem;
                    fromAmino(object: _23.SnapshotKVItemAmino): _23.SnapshotKVItem;
                    toAmino(message: _23.SnapshotKVItem): _23.SnapshotKVItemAmino;
                    fromAminoMsg(object: _23.SnapshotKVItemAminoMsg): _23.SnapshotKVItem;
                    toAminoMsg(message: _23.SnapshotKVItem): _23.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _23.SnapshotKVItemProtoMsg): _23.SnapshotKVItem;
                    toProto(message: _23.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _23.SnapshotKVItem): _23.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _23.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.SnapshotSchema;
                    fromPartial(object: Partial<_23.SnapshotSchema>): _23.SnapshotSchema;
                    fromAmino(object: _23.SnapshotSchemaAmino): _23.SnapshotSchema;
                    toAmino(message: _23.SnapshotSchema): _23.SnapshotSchemaAmino;
                    fromAminoMsg(object: _23.SnapshotSchemaAminoMsg): _23.SnapshotSchema;
                    toAminoMsg(message: _23.SnapshotSchema): _23.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _23.SnapshotSchemaProtoMsg): _23.SnapshotSchema;
                    toProto(message: _23.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _23.SnapshotSchema): _23.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _25.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.StoreKVPair;
                    fromPartial(object: Partial<_25.StoreKVPair>): _25.StoreKVPair;
                    fromAmino(object: _25.StoreKVPairAmino): _25.StoreKVPair;
                    toAmino(message: _25.StoreKVPair): _25.StoreKVPairAmino;
                    fromAminoMsg(object: _25.StoreKVPairAminoMsg): _25.StoreKVPair;
                    toAminoMsg(message: _25.StoreKVPair): _25.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _25.StoreKVPairProtoMsg): _25.StoreKVPair;
                    toProto(message: _25.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _25.StoreKVPair): _25.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _25.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.BlockMetadata;
                    fromPartial(object: Partial<_25.BlockMetadata>): _25.BlockMetadata;
                    fromAmino(object: _25.BlockMetadataAmino): _25.BlockMetadata;
                    toAmino(message: _25.BlockMetadata): _25.BlockMetadataAmino;
                    fromAminoMsg(object: _25.BlockMetadataAminoMsg): _25.BlockMetadata;
                    toAminoMsg(message: _25.BlockMetadata): _25.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _25.BlockMetadataProtoMsg): _25.BlockMetadata;
                    toProto(message: _25.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _25.BlockMetadata): _25.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _25.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_25.BlockMetadata_DeliverTx>): _25.BlockMetadata_DeliverTx;
                    fromAmino(object: _25.BlockMetadata_DeliverTxAmino): _25.BlockMetadata_DeliverTx;
                    toAmino(message: _25.BlockMetadata_DeliverTx): _25.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _25.BlockMetadata_DeliverTxAminoMsg): _25.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _25.BlockMetadata_DeliverTx): _25.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _25.BlockMetadata_DeliverTxProtoMsg): _25.BlockMetadata_DeliverTx;
                    toProto(message: _25.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _25.BlockMetadata_DeliverTx): _25.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _24.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.CommitInfo;
                    fromPartial(object: Partial<_24.CommitInfo>): _24.CommitInfo;
                    fromAmino(object: _24.CommitInfoAmino): _24.CommitInfo;
                    toAmino(message: _24.CommitInfo): _24.CommitInfoAmino;
                    fromAminoMsg(object: _24.CommitInfoAminoMsg): _24.CommitInfo;
                    toAminoMsg(message: _24.CommitInfo): _24.CommitInfoAminoMsg;
                    fromProtoMsg(message: _24.CommitInfoProtoMsg): _24.CommitInfo;
                    toProto(message: _24.CommitInfo): Uint8Array;
                    toProtoMsg(message: _24.CommitInfo): _24.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _24.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.StoreInfo;
                    fromPartial(object: Partial<_24.StoreInfo>): _24.StoreInfo;
                    fromAmino(object: _24.StoreInfoAmino): _24.StoreInfo;
                    toAmino(message: _24.StoreInfo): _24.StoreInfoAmino;
                    fromAminoMsg(object: _24.StoreInfoAminoMsg): _24.StoreInfo;
                    toAminoMsg(message: _24.StoreInfo): _24.StoreInfoAminoMsg;
                    fromProtoMsg(message: _24.StoreInfoProtoMsg): _24.StoreInfo;
                    toProto(message: _24.StoreInfo): Uint8Array;
                    toProtoMsg(message: _24.StoreInfo): _24.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _24.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.CommitID;
                    fromPartial(object: Partial<_24.CommitID>): _24.CommitID;
                    fromAmino(object: _24.CommitIDAmino): _24.CommitID;
                    toAmino(message: _24.CommitID): _24.CommitIDAmino;
                    fromAminoMsg(object: _24.CommitIDAminoMsg): _24.CommitID;
                    toAminoMsg(message: _24.CommitID): _24.CommitIDAminoMsg;
                    fromProtoMsg(message: _24.CommitIDProtoMsg): _24.CommitID;
                    toProto(message: _24.CommitID): Uint8Array;
                    toProtoMsg(message: _24.CommitID): _24.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _166.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _26.GetNodeInfoRequest): Promise<_26.GetNodeInfoResponse>;
                    getSyncing(request?: _26.GetSyncingRequest): Promise<_26.GetSyncingResponse>;
                    getLatestBlock(request?: _26.GetLatestBlockRequest): Promise<_26.GetLatestBlockResponse>;
                    getBlockByHeight(request: _26.GetBlockByHeightRequest): Promise<_26.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _26.GetLatestValidatorSetRequest): Promise<_26.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _26.GetValidatorSetByHeightRequest): Promise<_26.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _26.ABCIQueryRequest): Promise<_26.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _147.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _27.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.Block;
                    fromPartial(object: Partial<_27.Block>): _27.Block;
                    fromAmino(object: _27.BlockAmino): _27.Block;
                    toAmino(message: _27.Block): _27.BlockAmino;
                    fromAminoMsg(object: _27.BlockAminoMsg): _27.Block;
                    toAminoMsg(message: _27.Block): _27.BlockAminoMsg;
                    fromProtoMsg(message: _27.BlockProtoMsg): _27.Block;
                    toProto(message: _27.Block): Uint8Array;
                    toProtoMsg(message: _27.Block): _27.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _27.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.Header;
                    fromPartial(object: Partial<_27.Header>): _27.Header;
                    fromAmino(object: _27.HeaderAmino): _27.Header;
                    toAmino(message: _27.Header): _27.HeaderAmino;
                    fromAminoMsg(object: _27.HeaderAminoMsg): _27.Header;
                    toAminoMsg(message: _27.Header): _27.HeaderAminoMsg;
                    fromProtoMsg(message: _27.HeaderProtoMsg): _27.Header;
                    toProto(message: _27.Header): Uint8Array;
                    toProtoMsg(message: _27.Header): _27.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _26.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_26.GetValidatorSetByHeightRequest>): _26.GetValidatorSetByHeightRequest;
                    fromAmino(object: _26.GetValidatorSetByHeightRequestAmino): _26.GetValidatorSetByHeightRequest;
                    toAmino(message: _26.GetValidatorSetByHeightRequest): _26.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _26.GetValidatorSetByHeightRequestAminoMsg): _26.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _26.GetValidatorSetByHeightRequest): _26.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _26.GetValidatorSetByHeightRequestProtoMsg): _26.GetValidatorSetByHeightRequest;
                    toProto(message: _26.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _26.GetValidatorSetByHeightRequest): _26.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _26.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_26.GetValidatorSetByHeightResponse>): _26.GetValidatorSetByHeightResponse;
                    fromAmino(object: _26.GetValidatorSetByHeightResponseAmino): _26.GetValidatorSetByHeightResponse;
                    toAmino(message: _26.GetValidatorSetByHeightResponse): _26.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _26.GetValidatorSetByHeightResponseAminoMsg): _26.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _26.GetValidatorSetByHeightResponse): _26.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _26.GetValidatorSetByHeightResponseProtoMsg): _26.GetValidatorSetByHeightResponse;
                    toProto(message: _26.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _26.GetValidatorSetByHeightResponse): _26.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _26.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_26.GetLatestValidatorSetRequest>): _26.GetLatestValidatorSetRequest;
                    fromAmino(object: _26.GetLatestValidatorSetRequestAmino): _26.GetLatestValidatorSetRequest;
                    toAmino(message: _26.GetLatestValidatorSetRequest): _26.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _26.GetLatestValidatorSetRequestAminoMsg): _26.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _26.GetLatestValidatorSetRequest): _26.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _26.GetLatestValidatorSetRequestProtoMsg): _26.GetLatestValidatorSetRequest;
                    toProto(message: _26.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _26.GetLatestValidatorSetRequest): _26.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _26.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_26.GetLatestValidatorSetResponse>): _26.GetLatestValidatorSetResponse;
                    fromAmino(object: _26.GetLatestValidatorSetResponseAmino): _26.GetLatestValidatorSetResponse;
                    toAmino(message: _26.GetLatestValidatorSetResponse): _26.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _26.GetLatestValidatorSetResponseAminoMsg): _26.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _26.GetLatestValidatorSetResponse): _26.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _26.GetLatestValidatorSetResponseProtoMsg): _26.GetLatestValidatorSetResponse;
                    toProto(message: _26.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _26.GetLatestValidatorSetResponse): _26.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _26.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.Validator;
                    fromPartial(object: Partial<_26.Validator>): _26.Validator;
                    fromAmino(object: _26.ValidatorAmino): _26.Validator;
                    toAmino(message: _26.Validator): _26.ValidatorAmino;
                    fromAminoMsg(object: _26.ValidatorAminoMsg): _26.Validator;
                    toAminoMsg(message: _26.Validator): _26.ValidatorAminoMsg;
                    fromProtoMsg(message: _26.ValidatorProtoMsg): _26.Validator;
                    toProto(message: _26.Validator): Uint8Array;
                    toProtoMsg(message: _26.Validator): _26.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _26.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_26.GetBlockByHeightRequest>): _26.GetBlockByHeightRequest;
                    fromAmino(object: _26.GetBlockByHeightRequestAmino): _26.GetBlockByHeightRequest;
                    toAmino(message: _26.GetBlockByHeightRequest): _26.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _26.GetBlockByHeightRequestAminoMsg): _26.GetBlockByHeightRequest;
                    toAminoMsg(message: _26.GetBlockByHeightRequest): _26.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _26.GetBlockByHeightRequestProtoMsg): _26.GetBlockByHeightRequest;
                    toProto(message: _26.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _26.GetBlockByHeightRequest): _26.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _26.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_26.GetBlockByHeightResponse>): _26.GetBlockByHeightResponse;
                    fromAmino(object: _26.GetBlockByHeightResponseAmino): _26.GetBlockByHeightResponse;
                    toAmino(message: _26.GetBlockByHeightResponse): _26.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _26.GetBlockByHeightResponseAminoMsg): _26.GetBlockByHeightResponse;
                    toAminoMsg(message: _26.GetBlockByHeightResponse): _26.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _26.GetBlockByHeightResponseProtoMsg): _26.GetBlockByHeightResponse;
                    toProto(message: _26.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _26.GetBlockByHeightResponse): _26.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _26.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _26.GetLatestBlockRequest;
                    fromPartial(_: Partial<_26.GetLatestBlockRequest>): _26.GetLatestBlockRequest;
                    fromAmino(_: _26.GetLatestBlockRequestAmino): _26.GetLatestBlockRequest;
                    toAmino(_: _26.GetLatestBlockRequest): _26.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _26.GetLatestBlockRequestAminoMsg): _26.GetLatestBlockRequest;
                    toAminoMsg(message: _26.GetLatestBlockRequest): _26.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _26.GetLatestBlockRequestProtoMsg): _26.GetLatestBlockRequest;
                    toProto(message: _26.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _26.GetLatestBlockRequest): _26.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _26.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.GetLatestBlockResponse;
                    fromPartial(object: Partial<_26.GetLatestBlockResponse>): _26.GetLatestBlockResponse;
                    fromAmino(object: _26.GetLatestBlockResponseAmino): _26.GetLatestBlockResponse;
                    toAmino(message: _26.GetLatestBlockResponse): _26.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _26.GetLatestBlockResponseAminoMsg): _26.GetLatestBlockResponse;
                    toAminoMsg(message: _26.GetLatestBlockResponse): _26.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _26.GetLatestBlockResponseProtoMsg): _26.GetLatestBlockResponse;
                    toProto(message: _26.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _26.GetLatestBlockResponse): _26.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _26.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _26.GetSyncingRequest;
                    fromPartial(_: Partial<_26.GetSyncingRequest>): _26.GetSyncingRequest;
                    fromAmino(_: _26.GetSyncingRequestAmino): _26.GetSyncingRequest;
                    toAmino(_: _26.GetSyncingRequest): _26.GetSyncingRequestAmino;
                    fromAminoMsg(object: _26.GetSyncingRequestAminoMsg): _26.GetSyncingRequest;
                    toAminoMsg(message: _26.GetSyncingRequest): _26.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _26.GetSyncingRequestProtoMsg): _26.GetSyncingRequest;
                    toProto(message: _26.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _26.GetSyncingRequest): _26.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _26.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.GetSyncingResponse;
                    fromPartial(object: Partial<_26.GetSyncingResponse>): _26.GetSyncingResponse;
                    fromAmino(object: _26.GetSyncingResponseAmino): _26.GetSyncingResponse;
                    toAmino(message: _26.GetSyncingResponse): _26.GetSyncingResponseAmino;
                    fromAminoMsg(object: _26.GetSyncingResponseAminoMsg): _26.GetSyncingResponse;
                    toAminoMsg(message: _26.GetSyncingResponse): _26.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _26.GetSyncingResponseProtoMsg): _26.GetSyncingResponse;
                    toProto(message: _26.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _26.GetSyncingResponse): _26.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _26.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _26.GetNodeInfoRequest;
                    fromPartial(_: Partial<_26.GetNodeInfoRequest>): _26.GetNodeInfoRequest;
                    fromAmino(_: _26.GetNodeInfoRequestAmino): _26.GetNodeInfoRequest;
                    toAmino(_: _26.GetNodeInfoRequest): _26.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _26.GetNodeInfoRequestAminoMsg): _26.GetNodeInfoRequest;
                    toAminoMsg(message: _26.GetNodeInfoRequest): _26.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _26.GetNodeInfoRequestProtoMsg): _26.GetNodeInfoRequest;
                    toProto(message: _26.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _26.GetNodeInfoRequest): _26.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _26.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.GetNodeInfoResponse;
                    fromPartial(object: Partial<_26.GetNodeInfoResponse>): _26.GetNodeInfoResponse;
                    fromAmino(object: _26.GetNodeInfoResponseAmino): _26.GetNodeInfoResponse;
                    toAmino(message: _26.GetNodeInfoResponse): _26.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _26.GetNodeInfoResponseAminoMsg): _26.GetNodeInfoResponse;
                    toAminoMsg(message: _26.GetNodeInfoResponse): _26.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _26.GetNodeInfoResponseProtoMsg): _26.GetNodeInfoResponse;
                    toProto(message: _26.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _26.GetNodeInfoResponse): _26.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _26.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.VersionInfo;
                    fromPartial(object: Partial<_26.VersionInfo>): _26.VersionInfo;
                    fromAmino(object: _26.VersionInfoAmino): _26.VersionInfo;
                    toAmino(message: _26.VersionInfo): _26.VersionInfoAmino;
                    fromAminoMsg(object: _26.VersionInfoAminoMsg): _26.VersionInfo;
                    toAminoMsg(message: _26.VersionInfo): _26.VersionInfoAminoMsg;
                    fromProtoMsg(message: _26.VersionInfoProtoMsg): _26.VersionInfo;
                    toProto(message: _26.VersionInfo): Uint8Array;
                    toProtoMsg(message: _26.VersionInfo): _26.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _26.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.Module;
                    fromPartial(object: Partial<_26.Module>): _26.Module;
                    fromAmino(object: _26.ModuleAmino): _26.Module;
                    toAmino(message: _26.Module): _26.ModuleAmino;
                    fromAminoMsg(object: _26.ModuleAminoMsg): _26.Module;
                    toAminoMsg(message: _26.Module): _26.ModuleAminoMsg;
                    fromProtoMsg(message: _26.ModuleProtoMsg): _26.Module;
                    toProto(message: _26.Module): Uint8Array;
                    toProtoMsg(message: _26.Module): _26.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _26.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.ABCIQueryRequest;
                    fromPartial(object: Partial<_26.ABCIQueryRequest>): _26.ABCIQueryRequest;
                    fromAmino(object: _26.ABCIQueryRequestAmino): _26.ABCIQueryRequest;
                    toAmino(message: _26.ABCIQueryRequest): _26.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _26.ABCIQueryRequestAminoMsg): _26.ABCIQueryRequest;
                    toAminoMsg(message: _26.ABCIQueryRequest): _26.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _26.ABCIQueryRequestProtoMsg): _26.ABCIQueryRequest;
                    toProto(message: _26.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _26.ABCIQueryRequest): _26.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _26.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.ABCIQueryResponse;
                    fromPartial(object: Partial<_26.ABCIQueryResponse>): _26.ABCIQueryResponse;
                    fromAmino(object: _26.ABCIQueryResponseAmino): _26.ABCIQueryResponse;
                    toAmino(message: _26.ABCIQueryResponse): _26.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _26.ABCIQueryResponseAminoMsg): _26.ABCIQueryResponse;
                    toAminoMsg(message: _26.ABCIQueryResponse): _26.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _26.ABCIQueryResponseProtoMsg): _26.ABCIQueryResponse;
                    toProto(message: _26.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _26.ABCIQueryResponse): _26.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _26.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.ProofOp;
                    fromPartial(object: Partial<_26.ProofOp>): _26.ProofOp;
                    fromAmino(object: _26.ProofOpAmino): _26.ProofOp;
                    toAmino(message: _26.ProofOp): _26.ProofOpAmino;
                    fromAminoMsg(object: _26.ProofOpAminoMsg): _26.ProofOp;
                    toAminoMsg(message: _26.ProofOp): _26.ProofOpAminoMsg;
                    fromProtoMsg(message: _26.ProofOpProtoMsg): _26.ProofOp;
                    toProto(message: _26.ProofOp): Uint8Array;
                    toProtoMsg(message: _26.ProofOp): _26.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _26.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.ProofOps;
                    fromPartial(object: Partial<_26.ProofOps>): _26.ProofOps;
                    fromAmino(object: _26.ProofOpsAmino): _26.ProofOps;
                    toAmino(message: _26.ProofOps): _26.ProofOpsAmino;
                    fromAminoMsg(object: _26.ProofOpsAminoMsg): _26.ProofOps;
                    toAminoMsg(message: _26.ProofOps): _26.ProofOpsAminoMsg;
                    fromProtoMsg(message: _26.ProofOpsProtoMsg): _26.ProofOps;
                    toProto(message: _26.ProofOps): Uint8Array;
                    toProtoMsg(message: _26.ProofOps): _26.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _28.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.Coin;
                fromPartial(object: Partial<_28.Coin>): _28.Coin;
                fromAmino(object: _28.CoinAmino): _28.Coin;
                toAmino(message: _28.Coin): _28.CoinAmino;
                fromAminoMsg(object: _28.CoinAminoMsg): _28.Coin;
                toAminoMsg(message: _28.Coin): _28.CoinAminoMsg;
                fromProtoMsg(message: _28.CoinProtoMsg): _28.Coin;
                toProto(message: _28.Coin): Uint8Array;
                toProtoMsg(message: _28.Coin): _28.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _28.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.DecCoin;
                fromPartial(object: Partial<_28.DecCoin>): _28.DecCoin;
                fromAmino(object: _28.DecCoinAmino): _28.DecCoin;
                toAmino(message: _28.DecCoin): _28.DecCoinAmino;
                fromAminoMsg(object: _28.DecCoinAminoMsg): _28.DecCoin;
                toAminoMsg(message: _28.DecCoin): _28.DecCoinAminoMsg;
                fromProtoMsg(message: _28.DecCoinProtoMsg): _28.DecCoin;
                toProto(message: _28.DecCoin): Uint8Array;
                toProtoMsg(message: _28.DecCoin): _28.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _28.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.IntProto;
                fromPartial(object: Partial<_28.IntProto>): _28.IntProto;
                fromAmino(object: _28.IntProtoAmino): _28.IntProto;
                toAmino(message: _28.IntProto): _28.IntProtoAmino;
                fromAminoMsg(object: _28.IntProtoAminoMsg): _28.IntProto;
                toAminoMsg(message: _28.IntProto): _28.IntProtoAminoMsg;
                fromProtoMsg(message: _28.IntProtoProtoMsg): _28.IntProto;
                toProto(message: _28.IntProto): Uint8Array;
                toProtoMsg(message: _28.IntProto): _28.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _28.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.DecProto;
                fromPartial(object: Partial<_28.DecProto>): _28.DecProto;
                fromAmino(object: _28.DecProtoAmino): _28.DecProto;
                toAmino(message: _28.DecProto): _28.DecProtoAmino;
                fromAminoMsg(object: _28.DecProtoAminoMsg): _28.DecProto;
                toAminoMsg(message: _28.DecProto): _28.DecProtoAminoMsg;
                fromProtoMsg(message: _28.DecProtoProtoMsg): _28.DecProto;
                toProto(message: _28.DecProto): Uint8Array;
                toProtoMsg(message: _28.DecProto): _28.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _30.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.GenesisOwners;
                fromPartial(object: Partial<_30.GenesisOwners>): _30.GenesisOwners;
                fromAmino(object: _30.GenesisOwnersAmino): _30.GenesisOwners;
                toAmino(message: _30.GenesisOwners): _30.GenesisOwnersAmino;
                fromAminoMsg(object: _30.GenesisOwnersAminoMsg): _30.GenesisOwners;
                toAminoMsg(message: _30.GenesisOwners): _30.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _30.GenesisOwnersProtoMsg): _30.GenesisOwners;
                toProto(message: _30.GenesisOwners): Uint8Array;
                toProtoMsg(message: _30.GenesisOwners): _30.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _30.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.GenesisState;
                fromPartial(object: Partial<_30.GenesisState>): _30.GenesisState;
                fromAmino(object: _30.GenesisStateAmino): _30.GenesisState;
                toAmino(message: _30.GenesisState): _30.GenesisStateAmino;
                fromAminoMsg(object: _30.GenesisStateAminoMsg): _30.GenesisState;
                toAminoMsg(message: _30.GenesisState): _30.GenesisStateAminoMsg;
                fromProtoMsg(message: _30.GenesisStateProtoMsg): _30.GenesisState;
                toProto(message: _30.GenesisState): Uint8Array;
                toProtoMsg(message: _30.GenesisState): _30.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _29.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.Capability;
                fromPartial(object: Partial<_29.Capability>): _29.Capability;
                fromAmino(object: _29.CapabilityAmino): _29.Capability;
                toAmino(message: _29.Capability): _29.CapabilityAmino;
                fromAminoMsg(object: _29.CapabilityAminoMsg): _29.Capability;
                toAminoMsg(message: _29.Capability): _29.CapabilityAminoMsg;
                fromProtoMsg(message: _29.CapabilityProtoMsg): _29.Capability;
                toProto(message: _29.Capability): Uint8Array;
                toProtoMsg(message: _29.Capability): _29.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _29.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.Owner;
                fromPartial(object: Partial<_29.Owner>): _29.Owner;
                fromAmino(object: _29.OwnerAmino): _29.Owner;
                toAmino(message: _29.Owner): _29.OwnerAmino;
                fromAminoMsg(object: _29.OwnerAminoMsg): _29.Owner;
                toAminoMsg(message: _29.Owner): _29.OwnerAminoMsg;
                fromProtoMsg(message: _29.OwnerProtoMsg): _29.Owner;
                toProto(message: _29.Owner): Uint8Array;
                toProtoMsg(message: _29.Owner): _29.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _29.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.CapabilityOwners;
                fromPartial(object: Partial<_29.CapabilityOwners>): _29.CapabilityOwners;
                fromAmino(object: _29.CapabilityOwnersAmino): _29.CapabilityOwners;
                toAmino(message: _29.CapabilityOwners): _29.CapabilityOwnersAmino;
                fromAminoMsg(object: _29.CapabilityOwnersAminoMsg): _29.CapabilityOwners;
                toAminoMsg(message: _29.CapabilityOwners): _29.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _29.CapabilityOwnersProtoMsg): _29.CapabilityOwners;
                toProto(message: _29.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _29.CapabilityOwners): _29.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _182.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _32.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _32.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _32.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _32.MsgVerifyInvariant) => _32.MsgVerifyInvariantAmino;
                    fromAmino: (object: _32.MsgVerifyInvariantAmino) => _32.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _32.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.MsgVerifyInvariant;
                fromPartial(object: Partial<_32.MsgVerifyInvariant>): _32.MsgVerifyInvariant;
                fromAmino(object: _32.MsgVerifyInvariantAmino): _32.MsgVerifyInvariant;
                toAmino(message: _32.MsgVerifyInvariant): _32.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _32.MsgVerifyInvariantAminoMsg): _32.MsgVerifyInvariant;
                toAminoMsg(message: _32.MsgVerifyInvariant): _32.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _32.MsgVerifyInvariantProtoMsg): _32.MsgVerifyInvariant;
                toProto(message: _32.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _32.MsgVerifyInvariant): _32.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _32.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _32.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_32.MsgVerifyInvariantResponse>): _32.MsgVerifyInvariantResponse;
                fromAmino(_: _32.MsgVerifyInvariantResponseAmino): _32.MsgVerifyInvariantResponse;
                toAmino(_: _32.MsgVerifyInvariantResponse): _32.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _32.MsgVerifyInvariantResponseAminoMsg): _32.MsgVerifyInvariantResponse;
                toAminoMsg(message: _32.MsgVerifyInvariantResponse): _32.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _32.MsgVerifyInvariantResponseProtoMsg): _32.MsgVerifyInvariantResponse;
                toProto(message: _32.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _32.MsgVerifyInvariantResponse): _32.MsgVerifyInvariantResponseProtoMsg;
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
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _33.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.PubKey;
                fromPartial(object: Partial<_33.PubKey>): _33.PubKey;
                fromAmino(object: _33.PubKeyAmino): _33.PubKey;
                toAmino(message: _33.PubKey): _33.PubKeyAmino;
                fromAminoMsg(object: _33.PubKeyAminoMsg): _33.PubKey;
                toAminoMsg(message: _33.PubKey): _33.PubKeyAminoMsg;
                fromProtoMsg(message: _33.PubKeyProtoMsg): _33.PubKey;
                toProto(message: _33.PubKey): Uint8Array;
                toProtoMsg(message: _33.PubKey): _33.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _33.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.PrivKey;
                fromPartial(object: Partial<_33.PrivKey>): _33.PrivKey;
                fromAmino(object: _33.PrivKeyAmino): _33.PrivKey;
                toAmino(message: _33.PrivKey): _33.PrivKeyAmino;
                fromAminoMsg(object: _33.PrivKeyAminoMsg): _33.PrivKey;
                toAminoMsg(message: _33.PrivKey): _33.PrivKeyAminoMsg;
                fromProtoMsg(message: _33.PrivKeyProtoMsg): _33.PrivKey;
                toProto(message: _33.PrivKey): Uint8Array;
                toProtoMsg(message: _33.PrivKey): _33.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _34.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.BIP44Params;
                    fromPartial(object: Partial<_34.BIP44Params>): _34.BIP44Params;
                    fromAmino(object: _34.BIP44ParamsAmino): _34.BIP44Params;
                    toAmino(message: _34.BIP44Params): _34.BIP44ParamsAmino;
                    fromAminoMsg(object: _34.BIP44ParamsAminoMsg): _34.BIP44Params;
                    toAminoMsg(message: _34.BIP44Params): _34.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _34.BIP44ParamsProtoMsg): _34.BIP44Params;
                    toProto(message: _34.BIP44Params): Uint8Array;
                    toProtoMsg(message: _34.BIP44Params): _34.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _35.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.Record;
                    fromPartial(object: Partial<_35.Record>): _35.Record;
                    fromAmino(object: _35.RecordAmino): _35.Record;
                    toAmino(message: _35.Record): _35.RecordAmino;
                    fromAminoMsg(object: _35.RecordAminoMsg): _35.Record;
                    toAminoMsg(message: _35.Record): _35.RecordAminoMsg;
                    fromProtoMsg(message: _35.RecordProtoMsg): _35.Record;
                    toProto(message: _35.Record): Uint8Array;
                    toProtoMsg(message: _35.Record): _35.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _35.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.Record_Local;
                    fromPartial(object: Partial<_35.Record_Local>): _35.Record_Local;
                    fromAmino(object: _35.Record_LocalAmino): _35.Record_Local;
                    toAmino(message: _35.Record_Local): _35.Record_LocalAmino;
                    fromAminoMsg(object: _35.Record_LocalAminoMsg): _35.Record_Local;
                    toAminoMsg(message: _35.Record_Local): _35.Record_LocalAminoMsg;
                    fromProtoMsg(message: _35.Record_LocalProtoMsg): _35.Record_Local;
                    toProto(message: _35.Record_Local): Uint8Array;
                    toProtoMsg(message: _35.Record_Local): _35.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _35.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.Record_Ledger;
                    fromPartial(object: Partial<_35.Record_Ledger>): _35.Record_Ledger;
                    fromAmino(object: _35.Record_LedgerAmino): _35.Record_Ledger;
                    toAmino(message: _35.Record_Ledger): _35.Record_LedgerAmino;
                    fromAminoMsg(object: _35.Record_LedgerAminoMsg): _35.Record_Ledger;
                    toAminoMsg(message: _35.Record_Ledger): _35.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _35.Record_LedgerProtoMsg): _35.Record_Ledger;
                    toProto(message: _35.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _35.Record_Ledger): _35.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _35.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _35.Record_Multi;
                    fromPartial(_: Partial<_35.Record_Multi>): _35.Record_Multi;
                    fromAmino(_: _35.Record_MultiAmino): _35.Record_Multi;
                    toAmino(_: _35.Record_Multi): _35.Record_MultiAmino;
                    fromAminoMsg(object: _35.Record_MultiAminoMsg): _35.Record_Multi;
                    toAminoMsg(message: _35.Record_Multi): _35.Record_MultiAminoMsg;
                    fromProtoMsg(message: _35.Record_MultiProtoMsg): _35.Record_Multi;
                    toProto(message: _35.Record_Multi): Uint8Array;
                    toProtoMsg(message: _35.Record_Multi): _35.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _35.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _35.Record_Offline;
                    fromPartial(_: Partial<_35.Record_Offline>): _35.Record_Offline;
                    fromAmino(_: _35.Record_OfflineAmino): _35.Record_Offline;
                    toAmino(_: _35.Record_Offline): _35.Record_OfflineAmino;
                    fromAminoMsg(object: _35.Record_OfflineAminoMsg): _35.Record_Offline;
                    toAminoMsg(message: _35.Record_Offline): _35.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _35.Record_OfflineProtoMsg): _35.Record_Offline;
                    toProto(message: _35.Record_Offline): Uint8Array;
                    toProtoMsg(message: _35.Record_Offline): _35.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _36.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.LegacyAminoPubKey;
                fromPartial(object: Partial<_36.LegacyAminoPubKey>): _36.LegacyAminoPubKey;
                fromAmino(object: _36.LegacyAminoPubKeyAmino): _36.LegacyAminoPubKey;
                toAmino(message: _36.LegacyAminoPubKey): _36.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _36.LegacyAminoPubKeyAminoMsg): _36.LegacyAminoPubKey;
                toAminoMsg(message: _36.LegacyAminoPubKey): _36.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _36.LegacyAminoPubKeyProtoMsg): _36.LegacyAminoPubKey;
                toProto(message: _36.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _36.LegacyAminoPubKey): _36.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _37.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.PubKey;
                fromPartial(object: Partial<_37.PubKey>): _37.PubKey;
                fromAmino(object: _37.PubKeyAmino): _37.PubKey;
                toAmino(message: _37.PubKey): _37.PubKeyAmino;
                fromAminoMsg(object: _37.PubKeyAminoMsg): _37.PubKey;
                toAminoMsg(message: _37.PubKey): _37.PubKeyAminoMsg;
                fromProtoMsg(message: _37.PubKeyProtoMsg): _37.PubKey;
                toProto(message: _37.PubKey): Uint8Array;
                toProtoMsg(message: _37.PubKey): _37.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _37.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.PrivKey;
                fromPartial(object: Partial<_37.PrivKey>): _37.PrivKey;
                fromAmino(object: _37.PrivKeyAmino): _37.PrivKey;
                toAmino(message: _37.PrivKey): _37.PrivKeyAmino;
                fromAminoMsg(object: _37.PrivKeyAminoMsg): _37.PrivKey;
                toAminoMsg(message: _37.PrivKey): _37.PrivKeyAminoMsg;
                fromProtoMsg(message: _37.PrivKeyProtoMsg): _37.PrivKey;
                toProto(message: _37.PrivKey): Uint8Array;
                toProtoMsg(message: _37.PrivKey): _37.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _38.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.PubKey;
                fromPartial(object: Partial<_38.PubKey>): _38.PubKey;
                fromAmino(object: _38.PubKeyAmino): _38.PubKey;
                toAmino(message: _38.PubKey): _38.PubKeyAmino;
                fromAminoMsg(object: _38.PubKeyAminoMsg): _38.PubKey;
                toAminoMsg(message: _38.PubKey): _38.PubKeyAminoMsg;
                fromProtoMsg(message: _38.PubKeyProtoMsg): _38.PubKey;
                toProto(message: _38.PubKey): Uint8Array;
                toProtoMsg(message: _38.PubKey): _38.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _38.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.PrivKey;
                fromPartial(object: Partial<_38.PrivKey>): _38.PrivKey;
                fromAmino(object: _38.PrivKeyAmino): _38.PrivKey;
                toAmino(message: _38.PrivKey): _38.PrivKeyAmino;
                fromAminoMsg(object: _38.PrivKeyAminoMsg): _38.PrivKey;
                toAminoMsg(message: _38.PrivKey): _38.PrivKeyAminoMsg;
                fromProtoMsg(message: _38.PrivKeyProtoMsg): _38.PrivKey;
                toProto(message: _38.PrivKey): Uint8Array;
                toProtoMsg(message: _38.PrivKey): _38.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _183.MsgClientImpl;
            QueryClientImpl: typeof _167.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                validatorOutstandingRewards(request: _41.QueryValidatorOutstandingRewardsRequest): Promise<_41.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _41.QueryValidatorCommissionRequest): Promise<_41.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _41.QueryValidatorSlashesRequest): Promise<_41.QueryValidatorSlashesResponse>;
                delegationRewards(request: _41.QueryDelegationRewardsRequest): Promise<_41.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _41.QueryDelegationTotalRewardsRequest): Promise<_41.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _41.QueryDelegatorValidatorsRequest): Promise<_41.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _41.QueryDelegatorWithdrawAddressRequest): Promise<_41.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _41.QueryCommunityPoolRequest): Promise<_41.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _148.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _42.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _42.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _42.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _42.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _42.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _42.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _42.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _42.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _42.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _42.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _42.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _42.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _42.MsgSetWithdrawAddress) => _42.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _42.MsgSetWithdrawAddressAmino) => _42.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _42.MsgWithdrawDelegatorReward) => _42.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _42.MsgWithdrawDelegatorRewardAmino) => _42.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _42.MsgWithdrawValidatorCommission) => _42.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _42.MsgWithdrawValidatorCommissionAmino) => _42.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _42.MsgFundCommunityPool) => _42.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _42.MsgFundCommunityPoolAmino) => _42.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _42.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_42.MsgSetWithdrawAddress>): _42.MsgSetWithdrawAddress;
                fromAmino(object: _42.MsgSetWithdrawAddressAmino): _42.MsgSetWithdrawAddress;
                toAmino(message: _42.MsgSetWithdrawAddress): _42.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _42.MsgSetWithdrawAddressAminoMsg): _42.MsgSetWithdrawAddress;
                toAminoMsg(message: _42.MsgSetWithdrawAddress): _42.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _42.MsgSetWithdrawAddressProtoMsg): _42.MsgSetWithdrawAddress;
                toProto(message: _42.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _42.MsgSetWithdrawAddress): _42.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _42.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _42.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_42.MsgSetWithdrawAddressResponse>): _42.MsgSetWithdrawAddressResponse;
                fromAmino(_: _42.MsgSetWithdrawAddressResponseAmino): _42.MsgSetWithdrawAddressResponse;
                toAmino(_: _42.MsgSetWithdrawAddressResponse): _42.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _42.MsgSetWithdrawAddressResponseAminoMsg): _42.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _42.MsgSetWithdrawAddressResponse): _42.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _42.MsgSetWithdrawAddressResponseProtoMsg): _42.MsgSetWithdrawAddressResponse;
                toProto(message: _42.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _42.MsgSetWithdrawAddressResponse): _42.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _42.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_42.MsgWithdrawDelegatorReward>): _42.MsgWithdrawDelegatorReward;
                fromAmino(object: _42.MsgWithdrawDelegatorRewardAmino): _42.MsgWithdrawDelegatorReward;
                toAmino(message: _42.MsgWithdrawDelegatorReward): _42.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _42.MsgWithdrawDelegatorRewardAminoMsg): _42.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _42.MsgWithdrawDelegatorReward): _42.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _42.MsgWithdrawDelegatorRewardProtoMsg): _42.MsgWithdrawDelegatorReward;
                toProto(message: _42.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _42.MsgWithdrawDelegatorReward): _42.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _42.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_42.MsgWithdrawDelegatorRewardResponse>): _42.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _42.MsgWithdrawDelegatorRewardResponseAmino): _42.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _42.MsgWithdrawDelegatorRewardResponse): _42.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _42.MsgWithdrawDelegatorRewardResponseAminoMsg): _42.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _42.MsgWithdrawDelegatorRewardResponse): _42.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _42.MsgWithdrawDelegatorRewardResponseProtoMsg): _42.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _42.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _42.MsgWithdrawDelegatorRewardResponse): _42.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _42.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_42.MsgWithdrawValidatorCommission>): _42.MsgWithdrawValidatorCommission;
                fromAmino(object: _42.MsgWithdrawValidatorCommissionAmino): _42.MsgWithdrawValidatorCommission;
                toAmino(message: _42.MsgWithdrawValidatorCommission): _42.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _42.MsgWithdrawValidatorCommissionAminoMsg): _42.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _42.MsgWithdrawValidatorCommission): _42.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _42.MsgWithdrawValidatorCommissionProtoMsg): _42.MsgWithdrawValidatorCommission;
                toProto(message: _42.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _42.MsgWithdrawValidatorCommission): _42.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _42.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_42.MsgWithdrawValidatorCommissionResponse>): _42.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _42.MsgWithdrawValidatorCommissionResponseAmino): _42.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _42.MsgWithdrawValidatorCommissionResponse): _42.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _42.MsgWithdrawValidatorCommissionResponseAminoMsg): _42.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _42.MsgWithdrawValidatorCommissionResponse): _42.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _42.MsgWithdrawValidatorCommissionResponseProtoMsg): _42.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _42.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _42.MsgWithdrawValidatorCommissionResponse): _42.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _42.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MsgFundCommunityPool;
                fromPartial(object: Partial<_42.MsgFundCommunityPool>): _42.MsgFundCommunityPool;
                fromAmino(object: _42.MsgFundCommunityPoolAmino): _42.MsgFundCommunityPool;
                toAmino(message: _42.MsgFundCommunityPool): _42.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _42.MsgFundCommunityPoolAminoMsg): _42.MsgFundCommunityPool;
                toAminoMsg(message: _42.MsgFundCommunityPool): _42.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _42.MsgFundCommunityPoolProtoMsg): _42.MsgFundCommunityPool;
                toProto(message: _42.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _42.MsgFundCommunityPool): _42.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _42.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _42.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_42.MsgFundCommunityPoolResponse>): _42.MsgFundCommunityPoolResponse;
                fromAmino(_: _42.MsgFundCommunityPoolResponseAmino): _42.MsgFundCommunityPoolResponse;
                toAmino(_: _42.MsgFundCommunityPoolResponse): _42.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _42.MsgFundCommunityPoolResponseAminoMsg): _42.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _42.MsgFundCommunityPoolResponse): _42.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _42.MsgFundCommunityPoolResponseProtoMsg): _42.MsgFundCommunityPoolResponse;
                toProto(message: _42.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _42.MsgFundCommunityPoolResponse): _42.MsgFundCommunityPoolResponseProtoMsg;
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
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _41.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_41.QueryValidatorOutstandingRewardsRequest>): _41.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _41.QueryValidatorOutstandingRewardsRequestAmino): _41.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _41.QueryValidatorOutstandingRewardsRequest): _41.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _41.QueryValidatorOutstandingRewardsRequestAminoMsg): _41.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _41.QueryValidatorOutstandingRewardsRequest): _41.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _41.QueryValidatorOutstandingRewardsRequestProtoMsg): _41.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _41.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _41.QueryValidatorOutstandingRewardsRequest): _41.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _41.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_41.QueryValidatorOutstandingRewardsResponse>): _41.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _41.QueryValidatorOutstandingRewardsResponseAmino): _41.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _41.QueryValidatorOutstandingRewardsResponse): _41.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _41.QueryValidatorOutstandingRewardsResponseAminoMsg): _41.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _41.QueryValidatorOutstandingRewardsResponse): _41.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _41.QueryValidatorOutstandingRewardsResponseProtoMsg): _41.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _41.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _41.QueryValidatorOutstandingRewardsResponse): _41.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _41.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_41.QueryValidatorCommissionRequest>): _41.QueryValidatorCommissionRequest;
                fromAmino(object: _41.QueryValidatorCommissionRequestAmino): _41.QueryValidatorCommissionRequest;
                toAmino(message: _41.QueryValidatorCommissionRequest): _41.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _41.QueryValidatorCommissionRequestAminoMsg): _41.QueryValidatorCommissionRequest;
                toAminoMsg(message: _41.QueryValidatorCommissionRequest): _41.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _41.QueryValidatorCommissionRequestProtoMsg): _41.QueryValidatorCommissionRequest;
                toProto(message: _41.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _41.QueryValidatorCommissionRequest): _41.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _41.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_41.QueryValidatorCommissionResponse>): _41.QueryValidatorCommissionResponse;
                fromAmino(object: _41.QueryValidatorCommissionResponseAmino): _41.QueryValidatorCommissionResponse;
                toAmino(message: _41.QueryValidatorCommissionResponse): _41.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _41.QueryValidatorCommissionResponseAminoMsg): _41.QueryValidatorCommissionResponse;
                toAminoMsg(message: _41.QueryValidatorCommissionResponse): _41.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _41.QueryValidatorCommissionResponseProtoMsg): _41.QueryValidatorCommissionResponse;
                toProto(message: _41.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _41.QueryValidatorCommissionResponse): _41.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _41.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_41.QueryValidatorSlashesRequest>): _41.QueryValidatorSlashesRequest;
                fromAmino(object: _41.QueryValidatorSlashesRequestAmino): _41.QueryValidatorSlashesRequest;
                toAmino(message: _41.QueryValidatorSlashesRequest): _41.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _41.QueryValidatorSlashesRequestAminoMsg): _41.QueryValidatorSlashesRequest;
                toAminoMsg(message: _41.QueryValidatorSlashesRequest): _41.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _41.QueryValidatorSlashesRequestProtoMsg): _41.QueryValidatorSlashesRequest;
                toProto(message: _41.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _41.QueryValidatorSlashesRequest): _41.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _41.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_41.QueryValidatorSlashesResponse>): _41.QueryValidatorSlashesResponse;
                fromAmino(object: _41.QueryValidatorSlashesResponseAmino): _41.QueryValidatorSlashesResponse;
                toAmino(message: _41.QueryValidatorSlashesResponse): _41.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _41.QueryValidatorSlashesResponseAminoMsg): _41.QueryValidatorSlashesResponse;
                toAminoMsg(message: _41.QueryValidatorSlashesResponse): _41.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _41.QueryValidatorSlashesResponseProtoMsg): _41.QueryValidatorSlashesResponse;
                toProto(message: _41.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _41.QueryValidatorSlashesResponse): _41.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _41.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_41.QueryDelegationRewardsRequest>): _41.QueryDelegationRewardsRequest;
                fromAmino(object: _41.QueryDelegationRewardsRequestAmino): _41.QueryDelegationRewardsRequest;
                toAmino(message: _41.QueryDelegationRewardsRequest): _41.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _41.QueryDelegationRewardsRequestAminoMsg): _41.QueryDelegationRewardsRequest;
                toAminoMsg(message: _41.QueryDelegationRewardsRequest): _41.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _41.QueryDelegationRewardsRequestProtoMsg): _41.QueryDelegationRewardsRequest;
                toProto(message: _41.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _41.QueryDelegationRewardsRequest): _41.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _41.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_41.QueryDelegationRewardsResponse>): _41.QueryDelegationRewardsResponse;
                fromAmino(object: _41.QueryDelegationRewardsResponseAmino): _41.QueryDelegationRewardsResponse;
                toAmino(message: _41.QueryDelegationRewardsResponse): _41.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _41.QueryDelegationRewardsResponseAminoMsg): _41.QueryDelegationRewardsResponse;
                toAminoMsg(message: _41.QueryDelegationRewardsResponse): _41.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _41.QueryDelegationRewardsResponseProtoMsg): _41.QueryDelegationRewardsResponse;
                toProto(message: _41.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _41.QueryDelegationRewardsResponse): _41.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _41.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_41.QueryDelegationTotalRewardsRequest>): _41.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _41.QueryDelegationTotalRewardsRequestAmino): _41.QueryDelegationTotalRewardsRequest;
                toAmino(message: _41.QueryDelegationTotalRewardsRequest): _41.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _41.QueryDelegationTotalRewardsRequestAminoMsg): _41.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _41.QueryDelegationTotalRewardsRequest): _41.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _41.QueryDelegationTotalRewardsRequestProtoMsg): _41.QueryDelegationTotalRewardsRequest;
                toProto(message: _41.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _41.QueryDelegationTotalRewardsRequest): _41.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _41.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_41.QueryDelegationTotalRewardsResponse>): _41.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _41.QueryDelegationTotalRewardsResponseAmino): _41.QueryDelegationTotalRewardsResponse;
                toAmino(message: _41.QueryDelegationTotalRewardsResponse): _41.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _41.QueryDelegationTotalRewardsResponseAminoMsg): _41.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _41.QueryDelegationTotalRewardsResponse): _41.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _41.QueryDelegationTotalRewardsResponseProtoMsg): _41.QueryDelegationTotalRewardsResponse;
                toProto(message: _41.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _41.QueryDelegationTotalRewardsResponse): _41.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _41.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_41.QueryDelegatorValidatorsRequest>): _41.QueryDelegatorValidatorsRequest;
                fromAmino(object: _41.QueryDelegatorValidatorsRequestAmino): _41.QueryDelegatorValidatorsRequest;
                toAmino(message: _41.QueryDelegatorValidatorsRequest): _41.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _41.QueryDelegatorValidatorsRequestAminoMsg): _41.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _41.QueryDelegatorValidatorsRequest): _41.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _41.QueryDelegatorValidatorsRequestProtoMsg): _41.QueryDelegatorValidatorsRequest;
                toProto(message: _41.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _41.QueryDelegatorValidatorsRequest): _41.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _41.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_41.QueryDelegatorValidatorsResponse>): _41.QueryDelegatorValidatorsResponse;
                fromAmino(object: _41.QueryDelegatorValidatorsResponseAmino): _41.QueryDelegatorValidatorsResponse;
                toAmino(message: _41.QueryDelegatorValidatorsResponse): _41.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _41.QueryDelegatorValidatorsResponseAminoMsg): _41.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _41.QueryDelegatorValidatorsResponse): _41.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _41.QueryDelegatorValidatorsResponseProtoMsg): _41.QueryDelegatorValidatorsResponse;
                toProto(message: _41.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _41.QueryDelegatorValidatorsResponse): _41.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _41.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_41.QueryDelegatorWithdrawAddressRequest>): _41.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _41.QueryDelegatorWithdrawAddressRequestAmino): _41.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _41.QueryDelegatorWithdrawAddressRequest): _41.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _41.QueryDelegatorWithdrawAddressRequestAminoMsg): _41.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _41.QueryDelegatorWithdrawAddressRequest): _41.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _41.QueryDelegatorWithdrawAddressRequestProtoMsg): _41.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _41.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _41.QueryDelegatorWithdrawAddressRequest): _41.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _41.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_41.QueryDelegatorWithdrawAddressResponse>): _41.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _41.QueryDelegatorWithdrawAddressResponseAmino): _41.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _41.QueryDelegatorWithdrawAddressResponse): _41.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _41.QueryDelegatorWithdrawAddressResponseAminoMsg): _41.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _41.QueryDelegatorWithdrawAddressResponse): _41.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _41.QueryDelegatorWithdrawAddressResponseProtoMsg): _41.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _41.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _41.QueryDelegatorWithdrawAddressResponse): _41.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _41.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_41.QueryCommunityPoolRequest>): _41.QueryCommunityPoolRequest;
                fromAmino(_: _41.QueryCommunityPoolRequestAmino): _41.QueryCommunityPoolRequest;
                toAmino(_: _41.QueryCommunityPoolRequest): _41.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _41.QueryCommunityPoolRequestAminoMsg): _41.QueryCommunityPoolRequest;
                toAminoMsg(message: _41.QueryCommunityPoolRequest): _41.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _41.QueryCommunityPoolRequestProtoMsg): _41.QueryCommunityPoolRequest;
                toProto(message: _41.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _41.QueryCommunityPoolRequest): _41.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _41.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_41.QueryCommunityPoolResponse>): _41.QueryCommunityPoolResponse;
                fromAmino(object: _41.QueryCommunityPoolResponseAmino): _41.QueryCommunityPoolResponse;
                toAmino(message: _41.QueryCommunityPoolResponse): _41.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _41.QueryCommunityPoolResponseAminoMsg): _41.QueryCommunityPoolResponse;
                toAminoMsg(message: _41.QueryCommunityPoolResponse): _41.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _41.QueryCommunityPoolResponseProtoMsg): _41.QueryCommunityPoolResponse;
                toProto(message: _41.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _41.QueryCommunityPoolResponse): _41.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _40.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_40.DelegatorWithdrawInfo>): _40.DelegatorWithdrawInfo;
                fromAmino(object: _40.DelegatorWithdrawInfoAmino): _40.DelegatorWithdrawInfo;
                toAmino(message: _40.DelegatorWithdrawInfo): _40.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _40.DelegatorWithdrawInfoAminoMsg): _40.DelegatorWithdrawInfo;
                toAminoMsg(message: _40.DelegatorWithdrawInfo): _40.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _40.DelegatorWithdrawInfoProtoMsg): _40.DelegatorWithdrawInfo;
                toProto(message: _40.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _40.DelegatorWithdrawInfo): _40.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _40.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_40.ValidatorOutstandingRewardsRecord>): _40.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _40.ValidatorOutstandingRewardsRecordAmino): _40.ValidatorOutstandingRewardsRecord;
                toAmino(message: _40.ValidatorOutstandingRewardsRecord): _40.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _40.ValidatorOutstandingRewardsRecordAminoMsg): _40.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _40.ValidatorOutstandingRewardsRecord): _40.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _40.ValidatorOutstandingRewardsRecordProtoMsg): _40.ValidatorOutstandingRewardsRecord;
                toProto(message: _40.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _40.ValidatorOutstandingRewardsRecord): _40.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _40.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_40.ValidatorAccumulatedCommissionRecord>): _40.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _40.ValidatorAccumulatedCommissionRecordAmino): _40.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _40.ValidatorAccumulatedCommissionRecord): _40.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _40.ValidatorAccumulatedCommissionRecordAminoMsg): _40.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _40.ValidatorAccumulatedCommissionRecord): _40.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _40.ValidatorAccumulatedCommissionRecordProtoMsg): _40.ValidatorAccumulatedCommissionRecord;
                toProto(message: _40.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _40.ValidatorAccumulatedCommissionRecord): _40.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _40.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_40.ValidatorHistoricalRewardsRecord>): _40.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _40.ValidatorHistoricalRewardsRecordAmino): _40.ValidatorHistoricalRewardsRecord;
                toAmino(message: _40.ValidatorHistoricalRewardsRecord): _40.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _40.ValidatorHistoricalRewardsRecordAminoMsg): _40.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _40.ValidatorHistoricalRewardsRecord): _40.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _40.ValidatorHistoricalRewardsRecordProtoMsg): _40.ValidatorHistoricalRewardsRecord;
                toProto(message: _40.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _40.ValidatorHistoricalRewardsRecord): _40.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _40.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_40.ValidatorCurrentRewardsRecord>): _40.ValidatorCurrentRewardsRecord;
                fromAmino(object: _40.ValidatorCurrentRewardsRecordAmino): _40.ValidatorCurrentRewardsRecord;
                toAmino(message: _40.ValidatorCurrentRewardsRecord): _40.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _40.ValidatorCurrentRewardsRecordAminoMsg): _40.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _40.ValidatorCurrentRewardsRecord): _40.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _40.ValidatorCurrentRewardsRecordProtoMsg): _40.ValidatorCurrentRewardsRecord;
                toProto(message: _40.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _40.ValidatorCurrentRewardsRecord): _40.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _40.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_40.DelegatorStartingInfoRecord>): _40.DelegatorStartingInfoRecord;
                fromAmino(object: _40.DelegatorStartingInfoRecordAmino): _40.DelegatorStartingInfoRecord;
                toAmino(message: _40.DelegatorStartingInfoRecord): _40.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _40.DelegatorStartingInfoRecordAminoMsg): _40.DelegatorStartingInfoRecord;
                toAminoMsg(message: _40.DelegatorStartingInfoRecord): _40.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _40.DelegatorStartingInfoRecordProtoMsg): _40.DelegatorStartingInfoRecord;
                toProto(message: _40.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _40.DelegatorStartingInfoRecord): _40.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _40.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_40.ValidatorSlashEventRecord>): _40.ValidatorSlashEventRecord;
                fromAmino(object: _40.ValidatorSlashEventRecordAmino): _40.ValidatorSlashEventRecord;
                toAmino(message: _40.ValidatorSlashEventRecord): _40.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _40.ValidatorSlashEventRecordAminoMsg): _40.ValidatorSlashEventRecord;
                toAminoMsg(message: _40.ValidatorSlashEventRecord): _40.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _40.ValidatorSlashEventRecordProtoMsg): _40.ValidatorSlashEventRecord;
                toProto(message: _40.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _40.ValidatorSlashEventRecord): _40.ValidatorSlashEventRecordProtoMsg;
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
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _39.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_39.ValidatorHistoricalRewards>): _39.ValidatorHistoricalRewards;
                fromAmino(object: _39.ValidatorHistoricalRewardsAmino): _39.ValidatorHistoricalRewards;
                toAmino(message: _39.ValidatorHistoricalRewards): _39.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _39.ValidatorHistoricalRewardsAminoMsg): _39.ValidatorHistoricalRewards;
                toAminoMsg(message: _39.ValidatorHistoricalRewards): _39.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _39.ValidatorHistoricalRewardsProtoMsg): _39.ValidatorHistoricalRewards;
                toProto(message: _39.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _39.ValidatorHistoricalRewards): _39.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _39.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.ValidatorCurrentRewards;
                fromPartial(object: Partial<_39.ValidatorCurrentRewards>): _39.ValidatorCurrentRewards;
                fromAmino(object: _39.ValidatorCurrentRewardsAmino): _39.ValidatorCurrentRewards;
                toAmino(message: _39.ValidatorCurrentRewards): _39.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _39.ValidatorCurrentRewardsAminoMsg): _39.ValidatorCurrentRewards;
                toAminoMsg(message: _39.ValidatorCurrentRewards): _39.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _39.ValidatorCurrentRewardsProtoMsg): _39.ValidatorCurrentRewards;
                toProto(message: _39.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _39.ValidatorCurrentRewards): _39.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _39.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_39.ValidatorAccumulatedCommission>): _39.ValidatorAccumulatedCommission;
                fromAmino(object: _39.ValidatorAccumulatedCommissionAmino): _39.ValidatorAccumulatedCommission;
                toAmino(message: _39.ValidatorAccumulatedCommission): _39.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _39.ValidatorAccumulatedCommissionAminoMsg): _39.ValidatorAccumulatedCommission;
                toAminoMsg(message: _39.ValidatorAccumulatedCommission): _39.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _39.ValidatorAccumulatedCommissionProtoMsg): _39.ValidatorAccumulatedCommission;
                toProto(message: _39.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _39.ValidatorAccumulatedCommission): _39.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _39.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_39.ValidatorOutstandingRewards>): _39.ValidatorOutstandingRewards;
                fromAmino(object: _39.ValidatorOutstandingRewardsAmino): _39.ValidatorOutstandingRewards;
                toAmino(message: _39.ValidatorOutstandingRewards): _39.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _39.ValidatorOutstandingRewardsAminoMsg): _39.ValidatorOutstandingRewards;
                toAminoMsg(message: _39.ValidatorOutstandingRewards): _39.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _39.ValidatorOutstandingRewardsProtoMsg): _39.ValidatorOutstandingRewards;
                toProto(message: _39.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _39.ValidatorOutstandingRewards): _39.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _39.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.ValidatorSlashEvent;
                fromPartial(object: Partial<_39.ValidatorSlashEvent>): _39.ValidatorSlashEvent;
                fromAmino(object: _39.ValidatorSlashEventAmino): _39.ValidatorSlashEvent;
                toAmino(message: _39.ValidatorSlashEvent): _39.ValidatorSlashEventAmino;
                fromAminoMsg(object: _39.ValidatorSlashEventAminoMsg): _39.ValidatorSlashEvent;
                toAminoMsg(message: _39.ValidatorSlashEvent): _39.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _39.ValidatorSlashEventProtoMsg): _39.ValidatorSlashEvent;
                toProto(message: _39.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _39.ValidatorSlashEvent): _39.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _39.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.ValidatorSlashEvents;
                fromPartial(object: Partial<_39.ValidatorSlashEvents>): _39.ValidatorSlashEvents;
                fromAmino(object: _39.ValidatorSlashEventsAmino): _39.ValidatorSlashEvents;
                toAmino(message: _39.ValidatorSlashEvents): _39.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _39.ValidatorSlashEventsAminoMsg): _39.ValidatorSlashEvents;
                toAminoMsg(message: _39.ValidatorSlashEvents): _39.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _39.ValidatorSlashEventsProtoMsg): _39.ValidatorSlashEvents;
                toProto(message: _39.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _39.ValidatorSlashEvents): _39.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _39.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.FeePool;
                fromPartial(object: Partial<_39.FeePool>): _39.FeePool;
                fromAmino(object: _39.FeePoolAmino): _39.FeePool;
                toAmino(message: _39.FeePool): _39.FeePoolAmino;
                fromAminoMsg(object: _39.FeePoolAminoMsg): _39.FeePool;
                toAminoMsg(message: _39.FeePool): _39.FeePoolAminoMsg;
                fromProtoMsg(message: _39.FeePoolProtoMsg): _39.FeePool;
                toProto(message: _39.FeePool): Uint8Array;
                toProtoMsg(message: _39.FeePool): _39.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _39.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_39.CommunityPoolSpendProposal>): _39.CommunityPoolSpendProposal;
                fromAmino(object: _39.CommunityPoolSpendProposalAmino): _39.CommunityPoolSpendProposal;
                toAmino(message: _39.CommunityPoolSpendProposal): _39.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _39.CommunityPoolSpendProposalAminoMsg): _39.CommunityPoolSpendProposal;
                toAminoMsg(message: _39.CommunityPoolSpendProposal): _39.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _39.CommunityPoolSpendProposalProtoMsg): _39.CommunityPoolSpendProposal;
                toProto(message: _39.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _39.CommunityPoolSpendProposal): _39.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _39.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.DelegatorStartingInfo;
                fromPartial(object: Partial<_39.DelegatorStartingInfo>): _39.DelegatorStartingInfo;
                fromAmino(object: _39.DelegatorStartingInfoAmino): _39.DelegatorStartingInfo;
                toAmino(message: _39.DelegatorStartingInfo): _39.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _39.DelegatorStartingInfoAminoMsg): _39.DelegatorStartingInfo;
                toAminoMsg(message: _39.DelegatorStartingInfo): _39.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _39.DelegatorStartingInfoProtoMsg): _39.DelegatorStartingInfo;
                toProto(message: _39.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _39.DelegatorStartingInfo): _39.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _39.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.DelegationDelegatorReward;
                fromPartial(object: Partial<_39.DelegationDelegatorReward>): _39.DelegationDelegatorReward;
                fromAmino(object: _39.DelegationDelegatorRewardAmino): _39.DelegationDelegatorReward;
                toAmino(message: _39.DelegationDelegatorReward): _39.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _39.DelegationDelegatorRewardAminoMsg): _39.DelegationDelegatorReward;
                toAminoMsg(message: _39.DelegationDelegatorReward): _39.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _39.DelegationDelegatorRewardProtoMsg): _39.DelegationDelegatorReward;
                toProto(message: _39.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _39.DelegationDelegatorReward): _39.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _39.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_39.CommunityPoolSpendProposalWithDeposit>): _39.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _39.CommunityPoolSpendProposalWithDepositAmino): _39.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _39.CommunityPoolSpendProposalWithDeposit): _39.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _39.CommunityPoolSpendProposalWithDepositAminoMsg): _39.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _39.CommunityPoolSpendProposalWithDeposit): _39.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _39.CommunityPoolSpendProposalWithDepositProtoMsg): _39.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _39.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _39.CommunityPoolSpendProposalWithDeposit): _39.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _184.MsgClientImpl;
            QueryClientImpl: typeof _168.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _45.QueryEvidenceRequest): Promise<_45.QueryEvidenceResponse>;
                allEvidence(request?: _45.QueryAllEvidenceRequest): Promise<_45.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _149.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _46.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _46.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _46.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _46.MsgSubmitEvidence) => _46.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _46.MsgSubmitEvidenceAmino) => _46.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _46.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.MsgSubmitEvidence;
                fromPartial(object: Partial<_46.MsgSubmitEvidence>): _46.MsgSubmitEvidence;
                fromAmino(object: _46.MsgSubmitEvidenceAmino): _46.MsgSubmitEvidence;
                toAmino(message: _46.MsgSubmitEvidence): _46.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _46.MsgSubmitEvidenceAminoMsg): _46.MsgSubmitEvidence;
                toAminoMsg(message: _46.MsgSubmitEvidence): _46.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _46.MsgSubmitEvidenceProtoMsg): _46.MsgSubmitEvidence;
                toProto(message: _46.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _46.MsgSubmitEvidence): _46.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _46.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_46.MsgSubmitEvidenceResponse>): _46.MsgSubmitEvidenceResponse;
                fromAmino(object: _46.MsgSubmitEvidenceResponseAmino): _46.MsgSubmitEvidenceResponse;
                toAmino(message: _46.MsgSubmitEvidenceResponse): _46.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _46.MsgSubmitEvidenceResponseAminoMsg): _46.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _46.MsgSubmitEvidenceResponse): _46.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _46.MsgSubmitEvidenceResponseProtoMsg): _46.MsgSubmitEvidenceResponse;
                toProto(message: _46.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _46.MsgSubmitEvidenceResponse): _46.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _45.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryEvidenceRequest;
                fromPartial(object: Partial<_45.QueryEvidenceRequest>): _45.QueryEvidenceRequest;
                fromAmino(object: _45.QueryEvidenceRequestAmino): _45.QueryEvidenceRequest;
                toAmino(message: _45.QueryEvidenceRequest): _45.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _45.QueryEvidenceRequestAminoMsg): _45.QueryEvidenceRequest;
                toAminoMsg(message: _45.QueryEvidenceRequest): _45.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _45.QueryEvidenceRequestProtoMsg): _45.QueryEvidenceRequest;
                toProto(message: _45.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _45.QueryEvidenceRequest): _45.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _45.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryEvidenceResponse;
                fromPartial(object: Partial<_45.QueryEvidenceResponse>): _45.QueryEvidenceResponse;
                fromAmino(object: _45.QueryEvidenceResponseAmino): _45.QueryEvidenceResponse;
                toAmino(message: _45.QueryEvidenceResponse): _45.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _45.QueryEvidenceResponseAminoMsg): _45.QueryEvidenceResponse;
                toAminoMsg(message: _45.QueryEvidenceResponse): _45.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _45.QueryEvidenceResponseProtoMsg): _45.QueryEvidenceResponse;
                toProto(message: _45.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _45.QueryEvidenceResponse): _45.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _45.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_45.QueryAllEvidenceRequest>): _45.QueryAllEvidenceRequest;
                fromAmino(object: _45.QueryAllEvidenceRequestAmino): _45.QueryAllEvidenceRequest;
                toAmino(message: _45.QueryAllEvidenceRequest): _45.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _45.QueryAllEvidenceRequestAminoMsg): _45.QueryAllEvidenceRequest;
                toAminoMsg(message: _45.QueryAllEvidenceRequest): _45.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _45.QueryAllEvidenceRequestProtoMsg): _45.QueryAllEvidenceRequest;
                toProto(message: _45.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _45.QueryAllEvidenceRequest): _45.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _45.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_45.QueryAllEvidenceResponse>): _45.QueryAllEvidenceResponse;
                fromAmino(object: _45.QueryAllEvidenceResponseAmino): _45.QueryAllEvidenceResponse;
                toAmino(message: _45.QueryAllEvidenceResponse): _45.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _45.QueryAllEvidenceResponseAminoMsg): _45.QueryAllEvidenceResponse;
                toAminoMsg(message: _45.QueryAllEvidenceResponse): _45.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _45.QueryAllEvidenceResponseProtoMsg): _45.QueryAllEvidenceResponse;
                toProto(message: _45.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _45.QueryAllEvidenceResponse): _45.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _43.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.Equivocation;
                fromPartial(object: Partial<_43.Equivocation>): _43.Equivocation;
                fromAmino(object: _43.EquivocationAmino): _43.Equivocation;
                toAmino(message: _43.Equivocation): _43.EquivocationAmino;
                fromAminoMsg(object: _43.EquivocationAminoMsg): _43.Equivocation;
                toAminoMsg(message: _43.Equivocation): _43.EquivocationAminoMsg;
                fromProtoMsg(message: _43.EquivocationProtoMsg): _43.Equivocation;
                toProto(message: _43.Equivocation): Uint8Array;
                toProtoMsg(message: _43.Equivocation): _43.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _185.MsgClientImpl;
            QueryClientImpl: typeof _169.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _49.QueryAllowanceRequest): Promise<_49.QueryAllowanceResponse>;
                allowances(request: _49.QueryAllowancesRequest): Promise<_49.QueryAllowancesResponse>;
                allowancesByGranter(request: _49.QueryAllowancesByGranterRequest): Promise<_49.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _150.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _50.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _50.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _50.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _50.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _50.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _50.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _50.MsgGrantAllowance) => _50.MsgGrantAllowanceAmino;
                    fromAmino: (object: _50.MsgGrantAllowanceAmino) => _50.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _50.MsgRevokeAllowance) => _50.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _50.MsgRevokeAllowanceAmino) => _50.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _50.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgGrantAllowance;
                fromPartial(object: Partial<_50.MsgGrantAllowance>): _50.MsgGrantAllowance;
                fromAmino(object: _50.MsgGrantAllowanceAmino): _50.MsgGrantAllowance;
                toAmino(message: _50.MsgGrantAllowance): _50.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _50.MsgGrantAllowanceAminoMsg): _50.MsgGrantAllowance;
                toAminoMsg(message: _50.MsgGrantAllowance): _50.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _50.MsgGrantAllowanceProtoMsg): _50.MsgGrantAllowance;
                toProto(message: _50.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _50.MsgGrantAllowance): _50.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _50.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _50.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_50.MsgGrantAllowanceResponse>): _50.MsgGrantAllowanceResponse;
                fromAmino(_: _50.MsgGrantAllowanceResponseAmino): _50.MsgGrantAllowanceResponse;
                toAmino(_: _50.MsgGrantAllowanceResponse): _50.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _50.MsgGrantAllowanceResponseAminoMsg): _50.MsgGrantAllowanceResponse;
                toAminoMsg(message: _50.MsgGrantAllowanceResponse): _50.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _50.MsgGrantAllowanceResponseProtoMsg): _50.MsgGrantAllowanceResponse;
                toProto(message: _50.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _50.MsgGrantAllowanceResponse): _50.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _50.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgRevokeAllowance;
                fromPartial(object: Partial<_50.MsgRevokeAllowance>): _50.MsgRevokeAllowance;
                fromAmino(object: _50.MsgRevokeAllowanceAmino): _50.MsgRevokeAllowance;
                toAmino(message: _50.MsgRevokeAllowance): _50.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _50.MsgRevokeAllowanceAminoMsg): _50.MsgRevokeAllowance;
                toAminoMsg(message: _50.MsgRevokeAllowance): _50.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _50.MsgRevokeAllowanceProtoMsg): _50.MsgRevokeAllowance;
                toProto(message: _50.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _50.MsgRevokeAllowance): _50.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _50.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _50.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_50.MsgRevokeAllowanceResponse>): _50.MsgRevokeAllowanceResponse;
                fromAmino(_: _50.MsgRevokeAllowanceResponseAmino): _50.MsgRevokeAllowanceResponse;
                toAmino(_: _50.MsgRevokeAllowanceResponse): _50.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _50.MsgRevokeAllowanceResponseAminoMsg): _50.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _50.MsgRevokeAllowanceResponse): _50.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _50.MsgRevokeAllowanceResponseProtoMsg): _50.MsgRevokeAllowanceResponse;
                toProto(message: _50.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _50.MsgRevokeAllowanceResponse): _50.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _47.BasicAllowance | _47.PeriodicAllowance | _47.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _49.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryAllowanceRequest;
                fromPartial(object: Partial<_49.QueryAllowanceRequest>): _49.QueryAllowanceRequest;
                fromAmino(object: _49.QueryAllowanceRequestAmino): _49.QueryAllowanceRequest;
                toAmino(message: _49.QueryAllowanceRequest): _49.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _49.QueryAllowanceRequestAminoMsg): _49.QueryAllowanceRequest;
                toAminoMsg(message: _49.QueryAllowanceRequest): _49.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _49.QueryAllowanceRequestProtoMsg): _49.QueryAllowanceRequest;
                toProto(message: _49.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _49.QueryAllowanceRequest): _49.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _49.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryAllowanceResponse;
                fromPartial(object: Partial<_49.QueryAllowanceResponse>): _49.QueryAllowanceResponse;
                fromAmino(object: _49.QueryAllowanceResponseAmino): _49.QueryAllowanceResponse;
                toAmino(message: _49.QueryAllowanceResponse): _49.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _49.QueryAllowanceResponseAminoMsg): _49.QueryAllowanceResponse;
                toAminoMsg(message: _49.QueryAllowanceResponse): _49.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _49.QueryAllowanceResponseProtoMsg): _49.QueryAllowanceResponse;
                toProto(message: _49.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _49.QueryAllowanceResponse): _49.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _49.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryAllowancesRequest;
                fromPartial(object: Partial<_49.QueryAllowancesRequest>): _49.QueryAllowancesRequest;
                fromAmino(object: _49.QueryAllowancesRequestAmino): _49.QueryAllowancesRequest;
                toAmino(message: _49.QueryAllowancesRequest): _49.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _49.QueryAllowancesRequestAminoMsg): _49.QueryAllowancesRequest;
                toAminoMsg(message: _49.QueryAllowancesRequest): _49.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _49.QueryAllowancesRequestProtoMsg): _49.QueryAllowancesRequest;
                toProto(message: _49.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _49.QueryAllowancesRequest): _49.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _49.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryAllowancesResponse;
                fromPartial(object: Partial<_49.QueryAllowancesResponse>): _49.QueryAllowancesResponse;
                fromAmino(object: _49.QueryAllowancesResponseAmino): _49.QueryAllowancesResponse;
                toAmino(message: _49.QueryAllowancesResponse): _49.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _49.QueryAllowancesResponseAminoMsg): _49.QueryAllowancesResponse;
                toAminoMsg(message: _49.QueryAllowancesResponse): _49.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _49.QueryAllowancesResponseProtoMsg): _49.QueryAllowancesResponse;
                toProto(message: _49.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _49.QueryAllowancesResponse): _49.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _49.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_49.QueryAllowancesByGranterRequest>): _49.QueryAllowancesByGranterRequest;
                fromAmino(object: _49.QueryAllowancesByGranterRequestAmino): _49.QueryAllowancesByGranterRequest;
                toAmino(message: _49.QueryAllowancesByGranterRequest): _49.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _49.QueryAllowancesByGranterRequestAminoMsg): _49.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _49.QueryAllowancesByGranterRequest): _49.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _49.QueryAllowancesByGranterRequestProtoMsg): _49.QueryAllowancesByGranterRequest;
                toProto(message: _49.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _49.QueryAllowancesByGranterRequest): _49.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _49.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_49.QueryAllowancesByGranterResponse>): _49.QueryAllowancesByGranterResponse;
                fromAmino(object: _49.QueryAllowancesByGranterResponseAmino): _49.QueryAllowancesByGranterResponse;
                toAmino(message: _49.QueryAllowancesByGranterResponse): _49.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _49.QueryAllowancesByGranterResponseAminoMsg): _49.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _49.QueryAllowancesByGranterResponse): _49.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _49.QueryAllowancesByGranterResponseProtoMsg): _49.QueryAllowancesByGranterResponse;
                toProto(message: _49.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _49.QueryAllowancesByGranterResponse): _49.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _47.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.BasicAllowance;
                fromPartial(object: Partial<_47.BasicAllowance>): _47.BasicAllowance;
                fromAmino(object: _47.BasicAllowanceAmino): _47.BasicAllowance;
                toAmino(message: _47.BasicAllowance): _47.BasicAllowanceAmino;
                fromAminoMsg(object: _47.BasicAllowanceAminoMsg): _47.BasicAllowance;
                toAminoMsg(message: _47.BasicAllowance): _47.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _47.BasicAllowanceProtoMsg): _47.BasicAllowance;
                toProto(message: _47.BasicAllowance): Uint8Array;
                toProtoMsg(message: _47.BasicAllowance): _47.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _47.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.PeriodicAllowance;
                fromPartial(object: Partial<_47.PeriodicAllowance>): _47.PeriodicAllowance;
                fromAmino(object: _47.PeriodicAllowanceAmino): _47.PeriodicAllowance;
                toAmino(message: _47.PeriodicAllowance): _47.PeriodicAllowanceAmino;
                fromAminoMsg(object: _47.PeriodicAllowanceAminoMsg): _47.PeriodicAllowance;
                toAminoMsg(message: _47.PeriodicAllowance): _47.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _47.PeriodicAllowanceProtoMsg): _47.PeriodicAllowance;
                toProto(message: _47.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _47.PeriodicAllowance): _47.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _47.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.AllowedMsgAllowance;
                fromPartial(object: Partial<_47.AllowedMsgAllowance>): _47.AllowedMsgAllowance;
                fromAmino(object: _47.AllowedMsgAllowanceAmino): _47.AllowedMsgAllowance;
                toAmino(message: _47.AllowedMsgAllowance): _47.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _47.AllowedMsgAllowanceAminoMsg): _47.AllowedMsgAllowance;
                toAminoMsg(message: _47.AllowedMsgAllowance): _47.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _47.AllowedMsgAllowanceProtoMsg): _47.AllowedMsgAllowance;
                toProto(message: _47.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _47.AllowedMsgAllowance): _47.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _47.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.Grant;
                fromPartial(object: Partial<_47.Grant>): _47.Grant;
                fromAmino(object: _47.GrantAmino): _47.Grant;
                toAmino(message: _47.Grant): _47.GrantAmino;
                fromAminoMsg(object: _47.GrantAminoMsg): _47.Grant;
                toAminoMsg(message: _47.Grant): _47.GrantAminoMsg;
                fromProtoMsg(message: _47.GrantProtoMsg): _47.Grant;
                toProto(message: _47.Grant): Uint8Array;
                toProtoMsg(message: _47.Grant): _47.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _186.MsgClientImpl;
            QueryClientImpl: typeof _170.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _54.QueryProposalRequest): Promise<_54.QueryProposalResponse>;
                proposals(request: _54.QueryProposalsRequest): Promise<_54.QueryProposalsResponse>;
                vote(request: _54.QueryVoteRequest): Promise<_54.QueryVoteResponse>;
                votes(request: _54.QueryVotesRequest): Promise<_54.QueryVotesResponse>;
                params(request: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                deposit(request: _54.QueryDepositRequest): Promise<_54.QueryDepositResponse>;
                deposits(request: _54.QueryDepositsRequest): Promise<_54.QueryDepositsResponse>;
                tallyResult(request: _54.QueryTallyResultRequest): Promise<_54.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _151.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _55.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _55.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _55.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _55.MsgExecLegacyContent;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: _55.MsgVote;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _55.MsgVoteWeighted;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: _55.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _55.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _55.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _55.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _55.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _55.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _55.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _55.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _55.MsgExecLegacyContent;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: _55.MsgVote;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _55.MsgVoteWeighted;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: _55.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _55.MsgSubmitProposal) => _55.MsgSubmitProposalAmino;
                    fromAmino: (object: _55.MsgSubmitProposalAmino) => _55.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _55.MsgExecLegacyContent) => _55.MsgExecLegacyContentAmino;
                    fromAmino: (object: _55.MsgExecLegacyContentAmino) => _55.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _55.MsgVote) => _55.MsgVoteAmino;
                    fromAmino: (object: _55.MsgVoteAmino) => _55.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _55.MsgVoteWeighted) => _55.MsgVoteWeightedAmino;
                    fromAmino: (object: _55.MsgVoteWeightedAmino) => _55.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _55.MsgDeposit) => _55.MsgDepositAmino;
                    fromAmino: (object: _55.MsgDepositAmino) => _55.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _55.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgSubmitProposal;
                fromPartial(object: Partial<_55.MsgSubmitProposal>): _55.MsgSubmitProposal;
                fromAmino(object: _55.MsgSubmitProposalAmino): _55.MsgSubmitProposal;
                toAmino(message: _55.MsgSubmitProposal): _55.MsgSubmitProposalAmino;
                fromAminoMsg(object: _55.MsgSubmitProposalAminoMsg): _55.MsgSubmitProposal;
                toAminoMsg(message: _55.MsgSubmitProposal): _55.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _55.MsgSubmitProposalProtoMsg): _55.MsgSubmitProposal;
                toProto(message: _55.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _55.MsgSubmitProposal): _55.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _55.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_55.MsgSubmitProposalResponse>): _55.MsgSubmitProposalResponse;
                fromAmino(object: _55.MsgSubmitProposalResponseAmino): _55.MsgSubmitProposalResponse;
                toAmino(message: _55.MsgSubmitProposalResponse): _55.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _55.MsgSubmitProposalResponseAminoMsg): _55.MsgSubmitProposalResponse;
                toAminoMsg(message: _55.MsgSubmitProposalResponse): _55.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _55.MsgSubmitProposalResponseProtoMsg): _55.MsgSubmitProposalResponse;
                toProto(message: _55.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _55.MsgSubmitProposalResponse): _55.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _55.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgExecLegacyContent;
                fromPartial(object: Partial<_55.MsgExecLegacyContent>): _55.MsgExecLegacyContent;
                fromAmino(object: _55.MsgExecLegacyContentAmino): _55.MsgExecLegacyContent;
                toAmino(message: _55.MsgExecLegacyContent): _55.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _55.MsgExecLegacyContentAminoMsg): _55.MsgExecLegacyContent;
                toAminoMsg(message: _55.MsgExecLegacyContent): _55.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _55.MsgExecLegacyContentProtoMsg): _55.MsgExecLegacyContent;
                toProto(message: _55.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _55.MsgExecLegacyContent): _55.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _55.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_55.MsgExecLegacyContentResponse>): _55.MsgExecLegacyContentResponse;
                fromAmino(_: _55.MsgExecLegacyContentResponseAmino): _55.MsgExecLegacyContentResponse;
                toAmino(_: _55.MsgExecLegacyContentResponse): _55.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _55.MsgExecLegacyContentResponseAminoMsg): _55.MsgExecLegacyContentResponse;
                toAminoMsg(message: _55.MsgExecLegacyContentResponse): _55.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _55.MsgExecLegacyContentResponseProtoMsg): _55.MsgExecLegacyContentResponse;
                toProto(message: _55.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _55.MsgExecLegacyContentResponse): _55.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _55.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgVote;
                fromPartial(object: Partial<_55.MsgVote>): _55.MsgVote;
                fromAmino(object: _55.MsgVoteAmino): _55.MsgVote;
                toAmino(message: _55.MsgVote): _55.MsgVoteAmino;
                fromAminoMsg(object: _55.MsgVoteAminoMsg): _55.MsgVote;
                toAminoMsg(message: _55.MsgVote): _55.MsgVoteAminoMsg;
                fromProtoMsg(message: _55.MsgVoteProtoMsg): _55.MsgVote;
                toProto(message: _55.MsgVote): Uint8Array;
                toProtoMsg(message: _55.MsgVote): _55.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _55.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.MsgVoteResponse;
                fromPartial(_: Partial<_55.MsgVoteResponse>): _55.MsgVoteResponse;
                fromAmino(_: _55.MsgVoteResponseAmino): _55.MsgVoteResponse;
                toAmino(_: _55.MsgVoteResponse): _55.MsgVoteResponseAmino;
                fromAminoMsg(object: _55.MsgVoteResponseAminoMsg): _55.MsgVoteResponse;
                toAminoMsg(message: _55.MsgVoteResponse): _55.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _55.MsgVoteResponseProtoMsg): _55.MsgVoteResponse;
                toProto(message: _55.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _55.MsgVoteResponse): _55.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _55.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgVoteWeighted;
                fromPartial(object: Partial<_55.MsgVoteWeighted>): _55.MsgVoteWeighted;
                fromAmino(object: _55.MsgVoteWeightedAmino): _55.MsgVoteWeighted;
                toAmino(message: _55.MsgVoteWeighted): _55.MsgVoteWeightedAmino;
                fromAminoMsg(object: _55.MsgVoteWeightedAminoMsg): _55.MsgVoteWeighted;
                toAminoMsg(message: _55.MsgVoteWeighted): _55.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _55.MsgVoteWeightedProtoMsg): _55.MsgVoteWeighted;
                toProto(message: _55.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _55.MsgVoteWeighted): _55.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _55.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_55.MsgVoteWeightedResponse>): _55.MsgVoteWeightedResponse;
                fromAmino(_: _55.MsgVoteWeightedResponseAmino): _55.MsgVoteWeightedResponse;
                toAmino(_: _55.MsgVoteWeightedResponse): _55.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _55.MsgVoteWeightedResponseAminoMsg): _55.MsgVoteWeightedResponse;
                toAminoMsg(message: _55.MsgVoteWeightedResponse): _55.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _55.MsgVoteWeightedResponseProtoMsg): _55.MsgVoteWeightedResponse;
                toProto(message: _55.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _55.MsgVoteWeightedResponse): _55.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _55.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgDeposit;
                fromPartial(object: Partial<_55.MsgDeposit>): _55.MsgDeposit;
                fromAmino(object: _55.MsgDepositAmino): _55.MsgDeposit;
                toAmino(message: _55.MsgDeposit): _55.MsgDepositAmino;
                fromAminoMsg(object: _55.MsgDepositAminoMsg): _55.MsgDeposit;
                toAminoMsg(message: _55.MsgDeposit): _55.MsgDepositAminoMsg;
                fromProtoMsg(message: _55.MsgDepositProtoMsg): _55.MsgDeposit;
                toProto(message: _55.MsgDeposit): Uint8Array;
                toProtoMsg(message: _55.MsgDeposit): _55.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _55.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.MsgDepositResponse;
                fromPartial(_: Partial<_55.MsgDepositResponse>): _55.MsgDepositResponse;
                fromAmino(_: _55.MsgDepositResponseAmino): _55.MsgDepositResponse;
                toAmino(_: _55.MsgDepositResponse): _55.MsgDepositResponseAmino;
                fromAminoMsg(object: _55.MsgDepositResponseAminoMsg): _55.MsgDepositResponse;
                toAminoMsg(message: _55.MsgDepositResponse): _55.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _55.MsgDepositResponseProtoMsg): _55.MsgDepositResponse;
                toProto(message: _55.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _55.MsgDepositResponse): _55.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _57.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _54.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryProposalRequest;
                fromPartial(object: Partial<_54.QueryProposalRequest>): _54.QueryProposalRequest;
                fromAmino(object: _54.QueryProposalRequestAmino): _54.QueryProposalRequest;
                toAmino(message: _54.QueryProposalRequest): _54.QueryProposalRequestAmino;
                fromAminoMsg(object: _54.QueryProposalRequestAminoMsg): _54.QueryProposalRequest;
                toAminoMsg(message: _54.QueryProposalRequest): _54.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _54.QueryProposalRequestProtoMsg): _54.QueryProposalRequest;
                toProto(message: _54.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _54.QueryProposalRequest): _54.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _54.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryProposalResponse;
                fromPartial(object: Partial<_54.QueryProposalResponse>): _54.QueryProposalResponse;
                fromAmino(object: _54.QueryProposalResponseAmino): _54.QueryProposalResponse;
                toAmino(message: _54.QueryProposalResponse): _54.QueryProposalResponseAmino;
                fromAminoMsg(object: _54.QueryProposalResponseAminoMsg): _54.QueryProposalResponse;
                toAminoMsg(message: _54.QueryProposalResponse): _54.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _54.QueryProposalResponseProtoMsg): _54.QueryProposalResponse;
                toProto(message: _54.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _54.QueryProposalResponse): _54.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _54.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryProposalsRequest;
                fromPartial(object: Partial<_54.QueryProposalsRequest>): _54.QueryProposalsRequest;
                fromAmino(object: _54.QueryProposalsRequestAmino): _54.QueryProposalsRequest;
                toAmino(message: _54.QueryProposalsRequest): _54.QueryProposalsRequestAmino;
                fromAminoMsg(object: _54.QueryProposalsRequestAminoMsg): _54.QueryProposalsRequest;
                toAminoMsg(message: _54.QueryProposalsRequest): _54.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _54.QueryProposalsRequestProtoMsg): _54.QueryProposalsRequest;
                toProto(message: _54.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _54.QueryProposalsRequest): _54.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _54.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryProposalsResponse;
                fromPartial(object: Partial<_54.QueryProposalsResponse>): _54.QueryProposalsResponse;
                fromAmino(object: _54.QueryProposalsResponseAmino): _54.QueryProposalsResponse;
                toAmino(message: _54.QueryProposalsResponse): _54.QueryProposalsResponseAmino;
                fromAminoMsg(object: _54.QueryProposalsResponseAminoMsg): _54.QueryProposalsResponse;
                toAminoMsg(message: _54.QueryProposalsResponse): _54.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _54.QueryProposalsResponseProtoMsg): _54.QueryProposalsResponse;
                toProto(message: _54.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _54.QueryProposalsResponse): _54.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _54.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryVoteRequest;
                fromPartial(object: Partial<_54.QueryVoteRequest>): _54.QueryVoteRequest;
                fromAmino(object: _54.QueryVoteRequestAmino): _54.QueryVoteRequest;
                toAmino(message: _54.QueryVoteRequest): _54.QueryVoteRequestAmino;
                fromAminoMsg(object: _54.QueryVoteRequestAminoMsg): _54.QueryVoteRequest;
                toAminoMsg(message: _54.QueryVoteRequest): _54.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _54.QueryVoteRequestProtoMsg): _54.QueryVoteRequest;
                toProto(message: _54.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _54.QueryVoteRequest): _54.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _54.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryVoteResponse;
                fromPartial(object: Partial<_54.QueryVoteResponse>): _54.QueryVoteResponse;
                fromAmino(object: _54.QueryVoteResponseAmino): _54.QueryVoteResponse;
                toAmino(message: _54.QueryVoteResponse): _54.QueryVoteResponseAmino;
                fromAminoMsg(object: _54.QueryVoteResponseAminoMsg): _54.QueryVoteResponse;
                toAminoMsg(message: _54.QueryVoteResponse): _54.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _54.QueryVoteResponseProtoMsg): _54.QueryVoteResponse;
                toProto(message: _54.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _54.QueryVoteResponse): _54.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _54.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryVotesRequest;
                fromPartial(object: Partial<_54.QueryVotesRequest>): _54.QueryVotesRequest;
                fromAmino(object: _54.QueryVotesRequestAmino): _54.QueryVotesRequest;
                toAmino(message: _54.QueryVotesRequest): _54.QueryVotesRequestAmino;
                fromAminoMsg(object: _54.QueryVotesRequestAminoMsg): _54.QueryVotesRequest;
                toAminoMsg(message: _54.QueryVotesRequest): _54.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _54.QueryVotesRequestProtoMsg): _54.QueryVotesRequest;
                toProto(message: _54.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _54.QueryVotesRequest): _54.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _54.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryVotesResponse;
                fromPartial(object: Partial<_54.QueryVotesResponse>): _54.QueryVotesResponse;
                fromAmino(object: _54.QueryVotesResponseAmino): _54.QueryVotesResponse;
                toAmino(message: _54.QueryVotesResponse): _54.QueryVotesResponseAmino;
                fromAminoMsg(object: _54.QueryVotesResponseAminoMsg): _54.QueryVotesResponse;
                toAminoMsg(message: _54.QueryVotesResponse): _54.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _54.QueryVotesResponseProtoMsg): _54.QueryVotesResponse;
                toProto(message: _54.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _54.QueryVotesResponse): _54.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _54.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryParamsRequest;
                fromPartial(object: Partial<_54.QueryParamsRequest>): _54.QueryParamsRequest;
                fromAmino(object: _54.QueryParamsRequestAmino): _54.QueryParamsRequest;
                toAmino(message: _54.QueryParamsRequest): _54.QueryParamsRequestAmino;
                fromAminoMsg(object: _54.QueryParamsRequestAminoMsg): _54.QueryParamsRequest;
                toAminoMsg(message: _54.QueryParamsRequest): _54.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _54.QueryParamsRequestProtoMsg): _54.QueryParamsRequest;
                toProto(message: _54.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _54.QueryParamsRequest): _54.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _54.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryParamsResponse;
                fromPartial(object: Partial<_54.QueryParamsResponse>): _54.QueryParamsResponse;
                fromAmino(object: _54.QueryParamsResponseAmino): _54.QueryParamsResponse;
                toAmino(message: _54.QueryParamsResponse): _54.QueryParamsResponseAmino;
                fromAminoMsg(object: _54.QueryParamsResponseAminoMsg): _54.QueryParamsResponse;
                toAminoMsg(message: _54.QueryParamsResponse): _54.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _54.QueryParamsResponseProtoMsg): _54.QueryParamsResponse;
                toProto(message: _54.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _54.QueryParamsResponse): _54.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _54.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDepositRequest;
                fromPartial(object: Partial<_54.QueryDepositRequest>): _54.QueryDepositRequest;
                fromAmino(object: _54.QueryDepositRequestAmino): _54.QueryDepositRequest;
                toAmino(message: _54.QueryDepositRequest): _54.QueryDepositRequestAmino;
                fromAminoMsg(object: _54.QueryDepositRequestAminoMsg): _54.QueryDepositRequest;
                toAminoMsg(message: _54.QueryDepositRequest): _54.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _54.QueryDepositRequestProtoMsg): _54.QueryDepositRequest;
                toProto(message: _54.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _54.QueryDepositRequest): _54.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _54.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDepositResponse;
                fromPartial(object: Partial<_54.QueryDepositResponse>): _54.QueryDepositResponse;
                fromAmino(object: _54.QueryDepositResponseAmino): _54.QueryDepositResponse;
                toAmino(message: _54.QueryDepositResponse): _54.QueryDepositResponseAmino;
                fromAminoMsg(object: _54.QueryDepositResponseAminoMsg): _54.QueryDepositResponse;
                toAminoMsg(message: _54.QueryDepositResponse): _54.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _54.QueryDepositResponseProtoMsg): _54.QueryDepositResponse;
                toProto(message: _54.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _54.QueryDepositResponse): _54.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _54.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDepositsRequest;
                fromPartial(object: Partial<_54.QueryDepositsRequest>): _54.QueryDepositsRequest;
                fromAmino(object: _54.QueryDepositsRequestAmino): _54.QueryDepositsRequest;
                toAmino(message: _54.QueryDepositsRequest): _54.QueryDepositsRequestAmino;
                fromAminoMsg(object: _54.QueryDepositsRequestAminoMsg): _54.QueryDepositsRequest;
                toAminoMsg(message: _54.QueryDepositsRequest): _54.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _54.QueryDepositsRequestProtoMsg): _54.QueryDepositsRequest;
                toProto(message: _54.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _54.QueryDepositsRequest): _54.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _54.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDepositsResponse;
                fromPartial(object: Partial<_54.QueryDepositsResponse>): _54.QueryDepositsResponse;
                fromAmino(object: _54.QueryDepositsResponseAmino): _54.QueryDepositsResponse;
                toAmino(message: _54.QueryDepositsResponse): _54.QueryDepositsResponseAmino;
                fromAminoMsg(object: _54.QueryDepositsResponseAminoMsg): _54.QueryDepositsResponse;
                toAminoMsg(message: _54.QueryDepositsResponse): _54.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _54.QueryDepositsResponseProtoMsg): _54.QueryDepositsResponse;
                toProto(message: _54.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _54.QueryDepositsResponse): _54.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _54.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryTallyResultRequest;
                fromPartial(object: Partial<_54.QueryTallyResultRequest>): _54.QueryTallyResultRequest;
                fromAmino(object: _54.QueryTallyResultRequestAmino): _54.QueryTallyResultRequest;
                toAmino(message: _54.QueryTallyResultRequest): _54.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _54.QueryTallyResultRequestAminoMsg): _54.QueryTallyResultRequest;
                toAminoMsg(message: _54.QueryTallyResultRequest): _54.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _54.QueryTallyResultRequestProtoMsg): _54.QueryTallyResultRequest;
                toProto(message: _54.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _54.QueryTallyResultRequest): _54.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _54.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryTallyResultResponse;
                fromPartial(object: Partial<_54.QueryTallyResultResponse>): _54.QueryTallyResultResponse;
                fromAmino(object: _54.QueryTallyResultResponseAmino): _54.QueryTallyResultResponse;
                toAmino(message: _54.QueryTallyResultResponse): _54.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _54.QueryTallyResultResponseAminoMsg): _54.QueryTallyResultResponse;
                toAminoMsg(message: _54.QueryTallyResultResponse): _54.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _54.QueryTallyResultResponseProtoMsg): _54.QueryTallyResultResponse;
                toProto(message: _54.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _54.QueryTallyResultResponse): _54.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _53.VoteOption;
            voteOptionToJSON(object: _53.VoteOption): string;
            proposalStatusFromJSON(object: any): _53.ProposalStatus;
            proposalStatusToJSON(object: _53.ProposalStatus): string;
            VoteOption: typeof _53.VoteOption;
            VoteOptionSDKType: typeof _53.VoteOption;
            VoteOptionAmino: typeof _53.VoteOption;
            ProposalStatus: typeof _53.ProposalStatus;
            ProposalStatusSDKType: typeof _53.ProposalStatus;
            ProposalStatusAmino: typeof _53.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _53.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.WeightedVoteOption;
                fromPartial(object: Partial<_53.WeightedVoteOption>): _53.WeightedVoteOption;
                fromAmino(object: _53.WeightedVoteOptionAmino): _53.WeightedVoteOption;
                toAmino(message: _53.WeightedVoteOption): _53.WeightedVoteOptionAmino;
                fromAminoMsg(object: _53.WeightedVoteOptionAminoMsg): _53.WeightedVoteOption;
                toAminoMsg(message: _53.WeightedVoteOption): _53.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _53.WeightedVoteOptionProtoMsg): _53.WeightedVoteOption;
                toProto(message: _53.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _53.WeightedVoteOption): _53.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _53.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.Deposit;
                fromPartial(object: Partial<_53.Deposit>): _53.Deposit;
                fromAmino(object: _53.DepositAmino): _53.Deposit;
                toAmino(message: _53.Deposit): _53.DepositAmino;
                fromAminoMsg(object: _53.DepositAminoMsg): _53.Deposit;
                toAminoMsg(message: _53.Deposit): _53.DepositAminoMsg;
                fromProtoMsg(message: _53.DepositProtoMsg): _53.Deposit;
                toProto(message: _53.Deposit): Uint8Array;
                toProtoMsg(message: _53.Deposit): _53.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _53.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.Proposal;
                fromPartial(object: Partial<_53.Proposal>): _53.Proposal;
                fromAmino(object: _53.ProposalAmino): _53.Proposal;
                toAmino(message: _53.Proposal): _53.ProposalAmino;
                fromAminoMsg(object: _53.ProposalAminoMsg): _53.Proposal;
                toAminoMsg(message: _53.Proposal): _53.ProposalAminoMsg;
                fromProtoMsg(message: _53.ProposalProtoMsg): _53.Proposal;
                toProto(message: _53.Proposal): Uint8Array;
                toProtoMsg(message: _53.Proposal): _53.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _53.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.TallyResult;
                fromPartial(object: Partial<_53.TallyResult>): _53.TallyResult;
                fromAmino(object: _53.TallyResultAmino): _53.TallyResult;
                toAmino(message: _53.TallyResult): _53.TallyResultAmino;
                fromAminoMsg(object: _53.TallyResultAminoMsg): _53.TallyResult;
                toAminoMsg(message: _53.TallyResult): _53.TallyResultAminoMsg;
                fromProtoMsg(message: _53.TallyResultProtoMsg): _53.TallyResult;
                toProto(message: _53.TallyResult): Uint8Array;
                toProtoMsg(message: _53.TallyResult): _53.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _53.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.Vote;
                fromPartial(object: Partial<_53.Vote>): _53.Vote;
                fromAmino(object: _53.VoteAmino): _53.Vote;
                toAmino(message: _53.Vote): _53.VoteAmino;
                fromAminoMsg(object: _53.VoteAminoMsg): _53.Vote;
                toAminoMsg(message: _53.Vote): _53.VoteAminoMsg;
                fromProtoMsg(message: _53.VoteProtoMsg): _53.Vote;
                toProto(message: _53.Vote): Uint8Array;
                toProtoMsg(message: _53.Vote): _53.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _53.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.DepositParams;
                fromPartial(object: Partial<_53.DepositParams>): _53.DepositParams;
                fromAmino(object: _53.DepositParamsAmino): _53.DepositParams;
                toAmino(message: _53.DepositParams): _53.DepositParamsAmino;
                fromAminoMsg(object: _53.DepositParamsAminoMsg): _53.DepositParams;
                toAminoMsg(message: _53.DepositParams): _53.DepositParamsAminoMsg;
                fromProtoMsg(message: _53.DepositParamsProtoMsg): _53.DepositParams;
                toProto(message: _53.DepositParams): Uint8Array;
                toProtoMsg(message: _53.DepositParams): _53.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _53.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.VotingParams;
                fromPartial(object: Partial<_53.VotingParams>): _53.VotingParams;
                fromAmino(object: _53.VotingParamsAmino): _53.VotingParams;
                toAmino(message: _53.VotingParams): _53.VotingParamsAmino;
                fromAminoMsg(object: _53.VotingParamsAminoMsg): _53.VotingParams;
                toAminoMsg(message: _53.VotingParams): _53.VotingParamsAminoMsg;
                fromProtoMsg(message: _53.VotingParamsProtoMsg): _53.VotingParams;
                toProto(message: _53.VotingParams): Uint8Array;
                toProtoMsg(message: _53.VotingParams): _53.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _53.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.TallyParams;
                fromPartial(object: Partial<_53.TallyParams>): _53.TallyParams;
                fromAmino(object: _53.TallyParamsAmino): _53.TallyParams;
                toAmino(message: _53.TallyParams): _53.TallyParamsAmino;
                fromAminoMsg(object: _53.TallyParamsAminoMsg): _53.TallyParams;
                toAminoMsg(message: _53.TallyParams): _53.TallyParamsAminoMsg;
                fromProtoMsg(message: _53.TallyParamsProtoMsg): _53.TallyParams;
                toProto(message: _53.TallyParams): Uint8Array;
                toProtoMsg(message: _53.TallyParams): _53.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _52.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.GenesisState;
                fromPartial(object: Partial<_52.GenesisState>): _52.GenesisState;
                fromAmino(object: _52.GenesisStateAmino): _52.GenesisState;
                toAmino(message: _52.GenesisState): _52.GenesisStateAmino;
                fromAminoMsg(object: _52.GenesisStateAminoMsg): _52.GenesisState;
                toAminoMsg(message: _52.GenesisState): _52.GenesisStateAminoMsg;
                fromProtoMsg(message: _52.GenesisStateProtoMsg): _52.GenesisState;
                toProto(message: _52.GenesisState): Uint8Array;
                toProtoMsg(message: _52.GenesisState): _52.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _187.MsgClientImpl;
            QueryClientImpl: typeof _171.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _58.QueryProposalRequest): Promise<_58.QueryProposalResponse>;
                proposals(request: _58.QueryProposalsRequest): Promise<_58.QueryProposalsResponse>;
                vote(request: _58.QueryVoteRequest): Promise<_58.QueryVoteResponse>;
                votes(request: _58.QueryVotesRequest): Promise<_58.QueryVotesResponse>;
                params(request: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                deposit(request: _58.QueryDepositRequest): Promise<_58.QueryDepositResponse>;
                deposits(request: _58.QueryDepositsRequest): Promise<_58.QueryDepositsResponse>;
                tallyResult(request: _58.QueryTallyResultRequest): Promise<_58.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _152.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _59.MsgSubmitProposal;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: _59.MsgVote;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _59.MsgVoteWeighted;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _59.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _59.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _59.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _59.MsgSubmitProposal;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: _59.MsgVote;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _59.MsgVoteWeighted;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _59.MsgSubmitProposal) => _59.MsgSubmitProposalAmino;
                    fromAmino: (object: _59.MsgSubmitProposalAmino) => _59.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _59.MsgVote) => _59.MsgVoteAmino;
                    fromAmino: (object: _59.MsgVoteAmino) => _59.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _59.MsgVoteWeighted) => _59.MsgVoteWeightedAmino;
                    fromAmino: (object: _59.MsgVoteWeightedAmino) => _59.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _59.MsgDeposit) => _59.MsgDepositAmino;
                    fromAmino: (object: _59.MsgDepositAmino) => _59.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _59.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgSubmitProposal;
                fromPartial(object: Partial<_59.MsgSubmitProposal>): _59.MsgSubmitProposal;
                fromAmino(object: _59.MsgSubmitProposalAmino): _59.MsgSubmitProposal;
                toAmino(message: _59.MsgSubmitProposal): _59.MsgSubmitProposalAmino;
                fromAminoMsg(object: _59.MsgSubmitProposalAminoMsg): _59.MsgSubmitProposal;
                toAminoMsg(message: _59.MsgSubmitProposal): _59.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _59.MsgSubmitProposalProtoMsg): _59.MsgSubmitProposal;
                toProto(message: _59.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _59.MsgSubmitProposal): _59.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _59.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_59.MsgSubmitProposalResponse>): _59.MsgSubmitProposalResponse;
                fromAmino(object: _59.MsgSubmitProposalResponseAmino): _59.MsgSubmitProposalResponse;
                toAmino(message: _59.MsgSubmitProposalResponse): _59.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _59.MsgSubmitProposalResponseAminoMsg): _59.MsgSubmitProposalResponse;
                toAminoMsg(message: _59.MsgSubmitProposalResponse): _59.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _59.MsgSubmitProposalResponseProtoMsg): _59.MsgSubmitProposalResponse;
                toProto(message: _59.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _59.MsgSubmitProposalResponse): _59.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _59.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgVote;
                fromPartial(object: Partial<_59.MsgVote>): _59.MsgVote;
                fromAmino(object: _59.MsgVoteAmino): _59.MsgVote;
                toAmino(message: _59.MsgVote): _59.MsgVoteAmino;
                fromAminoMsg(object: _59.MsgVoteAminoMsg): _59.MsgVote;
                toAminoMsg(message: _59.MsgVote): _59.MsgVoteAminoMsg;
                fromProtoMsg(message: _59.MsgVoteProtoMsg): _59.MsgVote;
                toProto(message: _59.MsgVote): Uint8Array;
                toProtoMsg(message: _59.MsgVote): _59.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _59.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgVoteResponse;
                fromPartial(_: Partial<_59.MsgVoteResponse>): _59.MsgVoteResponse;
                fromAmino(_: _59.MsgVoteResponseAmino): _59.MsgVoteResponse;
                toAmino(_: _59.MsgVoteResponse): _59.MsgVoteResponseAmino;
                fromAminoMsg(object: _59.MsgVoteResponseAminoMsg): _59.MsgVoteResponse;
                toAminoMsg(message: _59.MsgVoteResponse): _59.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _59.MsgVoteResponseProtoMsg): _59.MsgVoteResponse;
                toProto(message: _59.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _59.MsgVoteResponse): _59.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _59.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgVoteWeighted;
                fromPartial(object: Partial<_59.MsgVoteWeighted>): _59.MsgVoteWeighted;
                fromAmino(object: _59.MsgVoteWeightedAmino): _59.MsgVoteWeighted;
                toAmino(message: _59.MsgVoteWeighted): _59.MsgVoteWeightedAmino;
                fromAminoMsg(object: _59.MsgVoteWeightedAminoMsg): _59.MsgVoteWeighted;
                toAminoMsg(message: _59.MsgVoteWeighted): _59.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _59.MsgVoteWeightedProtoMsg): _59.MsgVoteWeighted;
                toProto(message: _59.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _59.MsgVoteWeighted): _59.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _59.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_59.MsgVoteWeightedResponse>): _59.MsgVoteWeightedResponse;
                fromAmino(_: _59.MsgVoteWeightedResponseAmino): _59.MsgVoteWeightedResponse;
                toAmino(_: _59.MsgVoteWeightedResponse): _59.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _59.MsgVoteWeightedResponseAminoMsg): _59.MsgVoteWeightedResponse;
                toAminoMsg(message: _59.MsgVoteWeightedResponse): _59.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _59.MsgVoteWeightedResponseProtoMsg): _59.MsgVoteWeightedResponse;
                toProto(message: _59.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _59.MsgVoteWeightedResponse): _59.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _59.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgDeposit;
                fromPartial(object: Partial<_59.MsgDeposit>): _59.MsgDeposit;
                fromAmino(object: _59.MsgDepositAmino): _59.MsgDeposit;
                toAmino(message: _59.MsgDeposit): _59.MsgDepositAmino;
                fromAminoMsg(object: _59.MsgDepositAminoMsg): _59.MsgDeposit;
                toAminoMsg(message: _59.MsgDeposit): _59.MsgDepositAminoMsg;
                fromProtoMsg(message: _59.MsgDepositProtoMsg): _59.MsgDeposit;
                toProto(message: _59.MsgDeposit): Uint8Array;
                toProtoMsg(message: _59.MsgDeposit): _59.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _59.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgDepositResponse;
                fromPartial(_: Partial<_59.MsgDepositResponse>): _59.MsgDepositResponse;
                fromAmino(_: _59.MsgDepositResponseAmino): _59.MsgDepositResponse;
                toAmino(_: _59.MsgDepositResponse): _59.MsgDepositResponseAmino;
                fromAminoMsg(object: _59.MsgDepositResponseAminoMsg): _59.MsgDepositResponse;
                toAminoMsg(message: _59.MsgDepositResponse): _59.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _59.MsgDepositResponseProtoMsg): _59.MsgDepositResponse;
                toProto(message: _59.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _59.MsgDepositResponse): _59.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _57.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _58.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryProposalRequest;
                fromPartial(object: Partial<_58.QueryProposalRequest>): _58.QueryProposalRequest;
                fromAmino(object: _58.QueryProposalRequestAmino): _58.QueryProposalRequest;
                toAmino(message: _58.QueryProposalRequest): _58.QueryProposalRequestAmino;
                fromAminoMsg(object: _58.QueryProposalRequestAminoMsg): _58.QueryProposalRequest;
                toAminoMsg(message: _58.QueryProposalRequest): _58.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _58.QueryProposalRequestProtoMsg): _58.QueryProposalRequest;
                toProto(message: _58.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _58.QueryProposalRequest): _58.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _58.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryProposalResponse;
                fromPartial(object: Partial<_58.QueryProposalResponse>): _58.QueryProposalResponse;
                fromAmino(object: _58.QueryProposalResponseAmino): _58.QueryProposalResponse;
                toAmino(message: _58.QueryProposalResponse): _58.QueryProposalResponseAmino;
                fromAminoMsg(object: _58.QueryProposalResponseAminoMsg): _58.QueryProposalResponse;
                toAminoMsg(message: _58.QueryProposalResponse): _58.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _58.QueryProposalResponseProtoMsg): _58.QueryProposalResponse;
                toProto(message: _58.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _58.QueryProposalResponse): _58.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _58.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryProposalsRequest;
                fromPartial(object: Partial<_58.QueryProposalsRequest>): _58.QueryProposalsRequest;
                fromAmino(object: _58.QueryProposalsRequestAmino): _58.QueryProposalsRequest;
                toAmino(message: _58.QueryProposalsRequest): _58.QueryProposalsRequestAmino;
                fromAminoMsg(object: _58.QueryProposalsRequestAminoMsg): _58.QueryProposalsRequest;
                toAminoMsg(message: _58.QueryProposalsRequest): _58.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryProposalsRequestProtoMsg): _58.QueryProposalsRequest;
                toProto(message: _58.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryProposalsRequest): _58.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _58.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryProposalsResponse;
                fromPartial(object: Partial<_58.QueryProposalsResponse>): _58.QueryProposalsResponse;
                fromAmino(object: _58.QueryProposalsResponseAmino): _58.QueryProposalsResponse;
                toAmino(message: _58.QueryProposalsResponse): _58.QueryProposalsResponseAmino;
                fromAminoMsg(object: _58.QueryProposalsResponseAminoMsg): _58.QueryProposalsResponse;
                toAminoMsg(message: _58.QueryProposalsResponse): _58.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryProposalsResponseProtoMsg): _58.QueryProposalsResponse;
                toProto(message: _58.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryProposalsResponse): _58.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _58.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryVoteRequest;
                fromPartial(object: Partial<_58.QueryVoteRequest>): _58.QueryVoteRequest;
                fromAmino(object: _58.QueryVoteRequestAmino): _58.QueryVoteRequest;
                toAmino(message: _58.QueryVoteRequest): _58.QueryVoteRequestAmino;
                fromAminoMsg(object: _58.QueryVoteRequestAminoMsg): _58.QueryVoteRequest;
                toAminoMsg(message: _58.QueryVoteRequest): _58.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _58.QueryVoteRequestProtoMsg): _58.QueryVoteRequest;
                toProto(message: _58.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _58.QueryVoteRequest): _58.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _58.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryVoteResponse;
                fromPartial(object: Partial<_58.QueryVoteResponse>): _58.QueryVoteResponse;
                fromAmino(object: _58.QueryVoteResponseAmino): _58.QueryVoteResponse;
                toAmino(message: _58.QueryVoteResponse): _58.QueryVoteResponseAmino;
                fromAminoMsg(object: _58.QueryVoteResponseAminoMsg): _58.QueryVoteResponse;
                toAminoMsg(message: _58.QueryVoteResponse): _58.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _58.QueryVoteResponseProtoMsg): _58.QueryVoteResponse;
                toProto(message: _58.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _58.QueryVoteResponse): _58.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _58.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryVotesRequest;
                fromPartial(object: Partial<_58.QueryVotesRequest>): _58.QueryVotesRequest;
                fromAmino(object: _58.QueryVotesRequestAmino): _58.QueryVotesRequest;
                toAmino(message: _58.QueryVotesRequest): _58.QueryVotesRequestAmino;
                fromAminoMsg(object: _58.QueryVotesRequestAminoMsg): _58.QueryVotesRequest;
                toAminoMsg(message: _58.QueryVotesRequest): _58.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _58.QueryVotesRequestProtoMsg): _58.QueryVotesRequest;
                toProto(message: _58.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _58.QueryVotesRequest): _58.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _58.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryVotesResponse;
                fromPartial(object: Partial<_58.QueryVotesResponse>): _58.QueryVotesResponse;
                fromAmino(object: _58.QueryVotesResponseAmino): _58.QueryVotesResponse;
                toAmino(message: _58.QueryVotesResponse): _58.QueryVotesResponseAmino;
                fromAminoMsg(object: _58.QueryVotesResponseAminoMsg): _58.QueryVotesResponse;
                toAminoMsg(message: _58.QueryVotesResponse): _58.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _58.QueryVotesResponseProtoMsg): _58.QueryVotesResponse;
                toProto(message: _58.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _58.QueryVotesResponse): _58.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _58.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryParamsRequest;
                fromPartial(object: Partial<_58.QueryParamsRequest>): _58.QueryParamsRequest;
                fromAmino(object: _58.QueryParamsRequestAmino): _58.QueryParamsRequest;
                toAmino(message: _58.QueryParamsRequest): _58.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _58.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDepositRequest;
                fromPartial(object: Partial<_58.QueryDepositRequest>): _58.QueryDepositRequest;
                fromAmino(object: _58.QueryDepositRequestAmino): _58.QueryDepositRequest;
                toAmino(message: _58.QueryDepositRequest): _58.QueryDepositRequestAmino;
                fromAminoMsg(object: _58.QueryDepositRequestAminoMsg): _58.QueryDepositRequest;
                toAminoMsg(message: _58.QueryDepositRequest): _58.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _58.QueryDepositRequestProtoMsg): _58.QueryDepositRequest;
                toProto(message: _58.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _58.QueryDepositRequest): _58.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _58.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDepositResponse;
                fromPartial(object: Partial<_58.QueryDepositResponse>): _58.QueryDepositResponse;
                fromAmino(object: _58.QueryDepositResponseAmino): _58.QueryDepositResponse;
                toAmino(message: _58.QueryDepositResponse): _58.QueryDepositResponseAmino;
                fromAminoMsg(object: _58.QueryDepositResponseAminoMsg): _58.QueryDepositResponse;
                toAminoMsg(message: _58.QueryDepositResponse): _58.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _58.QueryDepositResponseProtoMsg): _58.QueryDepositResponse;
                toProto(message: _58.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _58.QueryDepositResponse): _58.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _58.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDepositsRequest;
                fromPartial(object: Partial<_58.QueryDepositsRequest>): _58.QueryDepositsRequest;
                fromAmino(object: _58.QueryDepositsRequestAmino): _58.QueryDepositsRequest;
                toAmino(message: _58.QueryDepositsRequest): _58.QueryDepositsRequestAmino;
                fromAminoMsg(object: _58.QueryDepositsRequestAminoMsg): _58.QueryDepositsRequest;
                toAminoMsg(message: _58.QueryDepositsRequest): _58.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryDepositsRequestProtoMsg): _58.QueryDepositsRequest;
                toProto(message: _58.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryDepositsRequest): _58.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _58.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDepositsResponse;
                fromPartial(object: Partial<_58.QueryDepositsResponse>): _58.QueryDepositsResponse;
                fromAmino(object: _58.QueryDepositsResponseAmino): _58.QueryDepositsResponse;
                toAmino(message: _58.QueryDepositsResponse): _58.QueryDepositsResponseAmino;
                fromAminoMsg(object: _58.QueryDepositsResponseAminoMsg): _58.QueryDepositsResponse;
                toAminoMsg(message: _58.QueryDepositsResponse): _58.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryDepositsResponseProtoMsg): _58.QueryDepositsResponse;
                toProto(message: _58.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryDepositsResponse): _58.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _58.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryTallyResultRequest;
                fromPartial(object: Partial<_58.QueryTallyResultRequest>): _58.QueryTallyResultRequest;
                fromAmino(object: _58.QueryTallyResultRequestAmino): _58.QueryTallyResultRequest;
                toAmino(message: _58.QueryTallyResultRequest): _58.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _58.QueryTallyResultRequestAminoMsg): _58.QueryTallyResultRequest;
                toAminoMsg(message: _58.QueryTallyResultRequest): _58.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _58.QueryTallyResultRequestProtoMsg): _58.QueryTallyResultRequest;
                toProto(message: _58.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _58.QueryTallyResultRequest): _58.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _58.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryTallyResultResponse;
                fromPartial(object: Partial<_58.QueryTallyResultResponse>): _58.QueryTallyResultResponse;
                fromAmino(object: _58.QueryTallyResultResponseAmino): _58.QueryTallyResultResponse;
                toAmino(message: _58.QueryTallyResultResponse): _58.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _58.QueryTallyResultResponseAminoMsg): _58.QueryTallyResultResponse;
                toAminoMsg(message: _58.QueryTallyResultResponse): _58.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _58.QueryTallyResultResponseProtoMsg): _58.QueryTallyResultResponse;
                toProto(message: _58.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _58.QueryTallyResultResponse): _58.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _57.VoteOption;
            voteOptionToJSON(object: _57.VoteOption): string;
            proposalStatusFromJSON(object: any): _57.ProposalStatus;
            proposalStatusToJSON(object: _57.ProposalStatus): string;
            VoteOption: typeof _57.VoteOption;
            VoteOptionSDKType: typeof _57.VoteOption;
            VoteOptionAmino: typeof _57.VoteOption;
            ProposalStatus: typeof _57.ProposalStatus;
            ProposalStatusSDKType: typeof _57.ProposalStatus;
            ProposalStatusAmino: typeof _57.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _57.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.WeightedVoteOption;
                fromPartial(object: Partial<_57.WeightedVoteOption>): _57.WeightedVoteOption;
                fromAmino(object: _57.WeightedVoteOptionAmino): _57.WeightedVoteOption;
                toAmino(message: _57.WeightedVoteOption): _57.WeightedVoteOptionAmino;
                fromAminoMsg(object: _57.WeightedVoteOptionAminoMsg): _57.WeightedVoteOption;
                toAminoMsg(message: _57.WeightedVoteOption): _57.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _57.WeightedVoteOptionProtoMsg): _57.WeightedVoteOption;
                toProto(message: _57.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _57.WeightedVoteOption): _57.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _57.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.TextProposal;
                fromPartial(object: Partial<_57.TextProposal>): _57.TextProposal;
                fromAmino(object: _57.TextProposalAmino): _57.TextProposal;
                toAmino(message: _57.TextProposal): _57.TextProposalAmino;
                fromAminoMsg(object: _57.TextProposalAminoMsg): _57.TextProposal;
                toAminoMsg(message: _57.TextProposal): _57.TextProposalAminoMsg;
                fromProtoMsg(message: _57.TextProposalProtoMsg): _57.TextProposal;
                toProto(message: _57.TextProposal): Uint8Array;
                toProtoMsg(message: _57.TextProposal): _57.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _57.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.Deposit;
                fromPartial(object: Partial<_57.Deposit>): _57.Deposit;
                fromAmino(object: _57.DepositAmino): _57.Deposit;
                toAmino(message: _57.Deposit): _57.DepositAmino;
                fromAminoMsg(object: _57.DepositAminoMsg): _57.Deposit;
                toAminoMsg(message: _57.Deposit): _57.DepositAminoMsg;
                fromProtoMsg(message: _57.DepositProtoMsg): _57.Deposit;
                toProto(message: _57.Deposit): Uint8Array;
                toProtoMsg(message: _57.Deposit): _57.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _57.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.Proposal;
                fromPartial(object: Partial<_57.Proposal>): _57.Proposal;
                fromAmino(object: _57.ProposalAmino): _57.Proposal;
                toAmino(message: _57.Proposal): _57.ProposalAmino;
                fromAminoMsg(object: _57.ProposalAminoMsg): _57.Proposal;
                toAminoMsg(message: _57.Proposal): _57.ProposalAminoMsg;
                fromProtoMsg(message: _57.ProposalProtoMsg): _57.Proposal;
                toProto(message: _57.Proposal): Uint8Array;
                toProtoMsg(message: _57.Proposal): _57.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _57.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.TallyResult;
                fromPartial(object: Partial<_57.TallyResult>): _57.TallyResult;
                fromAmino(object: _57.TallyResultAmino): _57.TallyResult;
                toAmino(message: _57.TallyResult): _57.TallyResultAmino;
                fromAminoMsg(object: _57.TallyResultAminoMsg): _57.TallyResult;
                toAminoMsg(message: _57.TallyResult): _57.TallyResultAminoMsg;
                fromProtoMsg(message: _57.TallyResultProtoMsg): _57.TallyResult;
                toProto(message: _57.TallyResult): Uint8Array;
                toProtoMsg(message: _57.TallyResult): _57.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _57.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.Vote;
                fromPartial(object: Partial<_57.Vote>): _57.Vote;
                fromAmino(object: _57.VoteAmino): _57.Vote;
                toAmino(message: _57.Vote): _57.VoteAmino;
                fromAminoMsg(object: _57.VoteAminoMsg): _57.Vote;
                toAminoMsg(message: _57.Vote): _57.VoteAminoMsg;
                fromProtoMsg(message: _57.VoteProtoMsg): _57.Vote;
                toProto(message: _57.Vote): Uint8Array;
                toProtoMsg(message: _57.Vote): _57.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _57.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.DepositParams;
                fromPartial(object: Partial<_57.DepositParams>): _57.DepositParams;
                fromAmino(object: _57.DepositParamsAmino): _57.DepositParams;
                toAmino(message: _57.DepositParams): _57.DepositParamsAmino;
                fromAminoMsg(object: _57.DepositParamsAminoMsg): _57.DepositParams;
                toAminoMsg(message: _57.DepositParams): _57.DepositParamsAminoMsg;
                fromProtoMsg(message: _57.DepositParamsProtoMsg): _57.DepositParams;
                toProto(message: _57.DepositParams): Uint8Array;
                toProtoMsg(message: _57.DepositParams): _57.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _57.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.VotingParams;
                fromPartial(object: Partial<_57.VotingParams>): _57.VotingParams;
                fromAmino(object: _57.VotingParamsAmino): _57.VotingParams;
                toAmino(message: _57.VotingParams): _57.VotingParamsAmino;
                fromAminoMsg(object: _57.VotingParamsAminoMsg): _57.VotingParams;
                toAminoMsg(message: _57.VotingParams): _57.VotingParamsAminoMsg;
                fromProtoMsg(message: _57.VotingParamsProtoMsg): _57.VotingParams;
                toProto(message: _57.VotingParams): Uint8Array;
                toProtoMsg(message: _57.VotingParams): _57.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _57.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.TallyParams;
                fromPartial(object: Partial<_57.TallyParams>): _57.TallyParams;
                fromAmino(object: _57.TallyParamsAmino): _57.TallyParams;
                toAmino(message: _57.TallyParams): _57.TallyParamsAmino;
                fromAminoMsg(object: _57.TallyParamsAminoMsg): _57.TallyParams;
                toAminoMsg(message: _57.TallyParams): _57.TallyParamsAminoMsg;
                fromProtoMsg(message: _57.TallyParamsProtoMsg): _57.TallyParams;
                toProto(message: _57.TallyParams): Uint8Array;
                toProtoMsg(message: _57.TallyParams): _57.TallyParamsProtoMsg;
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
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _188.MsgClientImpl;
            QueryClientImpl: typeof _172.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _62.QueryGroupInfoRequest): Promise<_62.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _62.QueryGroupPolicyInfoRequest): Promise<_62.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _62.QueryGroupMembersRequest): Promise<_62.QueryGroupMembersResponse>;
                groupsByAdmin(request: _62.QueryGroupsByAdminRequest): Promise<_62.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _62.QueryGroupPoliciesByGroupRequest): Promise<_62.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _62.QueryGroupPoliciesByAdminRequest): Promise<_62.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _62.QueryProposalRequest): Promise<_62.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _62.QueryProposalsByGroupPolicyRequest): Promise<_62.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _62.QueryVoteByProposalVoterRequest): Promise<_62.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _62.QueryVotesByProposalRequest): Promise<_62.QueryVotesByProposalResponse>;
                votesByVoter(request: _62.QueryVotesByVoterRequest): Promise<_62.QueryVotesByVoterResponse>;
                groupsByMember(request: _62.QueryGroupsByMemberRequest): Promise<_62.QueryGroupsByMemberResponse>;
                tallyResult(request: _62.QueryTallyResultRequest): Promise<_62.QueryTallyResultResponse>;
                groups(request?: _62.QueryGroupsRequest): Promise<_62.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _153.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _63.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _63.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _63.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _63.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _63.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _63.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _63.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _63.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _63.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _63.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _63.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _63.MsgCreateGroup): {
                        typeUrl: string;
                        value: _63.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _63.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _63.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _63.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _63.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _63.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _63.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _63.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _63.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _63.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _63.MsgWithdrawProposal;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: _63.MsgExec;
                    };
                    leaveGroup(value: _63.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _63.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _63.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _63.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _63.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _63.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _63.MsgCreateGroup): {
                        typeUrl: string;
                        value: _63.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _63.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _63.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _63.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _63.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _63.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _63.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _63.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _63.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _63.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _63.MsgWithdrawProposal;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: _63.MsgExec;
                    };
                    leaveGroup(value: _63.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _63.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _63.MsgCreateGroup) => _63.MsgCreateGroupAmino;
                    fromAmino: (object: _63.MsgCreateGroupAmino) => _63.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _63.MsgUpdateGroupMembers) => _63.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _63.MsgUpdateGroupMembersAmino) => _63.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _63.MsgUpdateGroupAdmin) => _63.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _63.MsgUpdateGroupAdminAmino) => _63.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _63.MsgUpdateGroupMetadata) => _63.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _63.MsgUpdateGroupMetadataAmino) => _63.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _63.MsgCreateGroupPolicy) => _63.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _63.MsgCreateGroupPolicyAmino) => _63.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _63.MsgCreateGroupWithPolicy) => _63.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _63.MsgCreateGroupWithPolicyAmino) => _63.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _63.MsgUpdateGroupPolicyAdmin) => _63.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _63.MsgUpdateGroupPolicyAdminAmino) => _63.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _63.MsgUpdateGroupPolicyDecisionPolicy) => _63.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _63.MsgUpdateGroupPolicyDecisionPolicyAmino) => _63.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _63.MsgUpdateGroupPolicyMetadata) => _63.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _63.MsgUpdateGroupPolicyMetadataAmino) => _63.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _63.MsgSubmitProposal) => _63.MsgSubmitProposalAmino;
                    fromAmino: (object: _63.MsgSubmitProposalAmino) => _63.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _63.MsgWithdrawProposal) => _63.MsgWithdrawProposalAmino;
                    fromAmino: (object: _63.MsgWithdrawProposalAmino) => _63.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _63.MsgVote) => _63.MsgVoteAmino;
                    fromAmino: (object: _63.MsgVoteAmino) => _63.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _63.MsgExec) => _63.MsgExecAmino;
                    fromAmino: (object: _63.MsgExecAmino) => _63.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _63.MsgLeaveGroup) => _63.MsgLeaveGroupAmino;
                    fromAmino: (object: _63.MsgLeaveGroupAmino) => _63.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _64.VoteOption;
            voteOptionToJSON(object: _64.VoteOption): string;
            proposalStatusFromJSON(object: any): _64.ProposalStatus;
            proposalStatusToJSON(object: _64.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _64.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _64.ProposalExecutorResult): string;
            VoteOption: typeof _64.VoteOption;
            VoteOptionSDKType: typeof _64.VoteOption;
            VoteOptionAmino: typeof _64.VoteOption;
            ProposalStatus: typeof _64.ProposalStatus;
            ProposalStatusSDKType: typeof _64.ProposalStatus;
            ProposalStatusAmino: typeof _64.ProposalStatus;
            ProposalExecutorResult: typeof _64.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _64.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _64.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _64.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.Member;
                fromPartial(object: Partial<_64.Member>): _64.Member;
                fromAmino(object: _64.MemberAmino): _64.Member;
                toAmino(message: _64.Member): _64.MemberAmino;
                fromAminoMsg(object: _64.MemberAminoMsg): _64.Member;
                toAminoMsg(message: _64.Member): _64.MemberAminoMsg;
                fromProtoMsg(message: _64.MemberProtoMsg): _64.Member;
                toProto(message: _64.Member): Uint8Array;
                toProtoMsg(message: _64.Member): _64.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _64.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MemberRequest;
                fromPartial(object: Partial<_64.MemberRequest>): _64.MemberRequest;
                fromAmino(object: _64.MemberRequestAmino): _64.MemberRequest;
                toAmino(message: _64.MemberRequest): _64.MemberRequestAmino;
                fromAminoMsg(object: _64.MemberRequestAminoMsg): _64.MemberRequest;
                toAminoMsg(message: _64.MemberRequest): _64.MemberRequestAminoMsg;
                fromProtoMsg(message: _64.MemberRequestProtoMsg): _64.MemberRequest;
                toProto(message: _64.MemberRequest): Uint8Array;
                toProtoMsg(message: _64.MemberRequest): _64.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _64.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_64.ThresholdDecisionPolicy>): _64.ThresholdDecisionPolicy;
                fromAmino(object: _64.ThresholdDecisionPolicyAmino): _64.ThresholdDecisionPolicy;
                toAmino(message: _64.ThresholdDecisionPolicy): _64.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _64.ThresholdDecisionPolicyAminoMsg): _64.ThresholdDecisionPolicy;
                toAminoMsg(message: _64.ThresholdDecisionPolicy): _64.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _64.ThresholdDecisionPolicyProtoMsg): _64.ThresholdDecisionPolicy;
                toProto(message: _64.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _64.ThresholdDecisionPolicy): _64.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _64.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.PercentageDecisionPolicy;
                fromPartial(object: Partial<_64.PercentageDecisionPolicy>): _64.PercentageDecisionPolicy;
                fromAmino(object: _64.PercentageDecisionPolicyAmino): _64.PercentageDecisionPolicy;
                toAmino(message: _64.PercentageDecisionPolicy): _64.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _64.PercentageDecisionPolicyAminoMsg): _64.PercentageDecisionPolicy;
                toAminoMsg(message: _64.PercentageDecisionPolicy): _64.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _64.PercentageDecisionPolicyProtoMsg): _64.PercentageDecisionPolicy;
                toProto(message: _64.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _64.PercentageDecisionPolicy): _64.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _64.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.DecisionPolicyWindows;
                fromPartial(object: Partial<_64.DecisionPolicyWindows>): _64.DecisionPolicyWindows;
                fromAmino(object: _64.DecisionPolicyWindowsAmino): _64.DecisionPolicyWindows;
                toAmino(message: _64.DecisionPolicyWindows): _64.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _64.DecisionPolicyWindowsAminoMsg): _64.DecisionPolicyWindows;
                toAminoMsg(message: _64.DecisionPolicyWindows): _64.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _64.DecisionPolicyWindowsProtoMsg): _64.DecisionPolicyWindows;
                toProto(message: _64.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _64.DecisionPolicyWindows): _64.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _64.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.GroupInfo;
                fromPartial(object: Partial<_64.GroupInfo>): _64.GroupInfo;
                fromAmino(object: _64.GroupInfoAmino): _64.GroupInfo;
                toAmino(message: _64.GroupInfo): _64.GroupInfoAmino;
                fromAminoMsg(object: _64.GroupInfoAminoMsg): _64.GroupInfo;
                toAminoMsg(message: _64.GroupInfo): _64.GroupInfoAminoMsg;
                fromProtoMsg(message: _64.GroupInfoProtoMsg): _64.GroupInfo;
                toProto(message: _64.GroupInfo): Uint8Array;
                toProtoMsg(message: _64.GroupInfo): _64.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _64.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.GroupMember;
                fromPartial(object: Partial<_64.GroupMember>): _64.GroupMember;
                fromAmino(object: _64.GroupMemberAmino): _64.GroupMember;
                toAmino(message: _64.GroupMember): _64.GroupMemberAmino;
                fromAminoMsg(object: _64.GroupMemberAminoMsg): _64.GroupMember;
                toAminoMsg(message: _64.GroupMember): _64.GroupMemberAminoMsg;
                fromProtoMsg(message: _64.GroupMemberProtoMsg): _64.GroupMember;
                toProto(message: _64.GroupMember): Uint8Array;
                toProtoMsg(message: _64.GroupMember): _64.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _64.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.GroupPolicyInfo;
                fromPartial(object: Partial<_64.GroupPolicyInfo>): _64.GroupPolicyInfo;
                fromAmino(object: _64.GroupPolicyInfoAmino): _64.GroupPolicyInfo;
                toAmino(message: _64.GroupPolicyInfo): _64.GroupPolicyInfoAmino;
                fromAminoMsg(object: _64.GroupPolicyInfoAminoMsg): _64.GroupPolicyInfo;
                toAminoMsg(message: _64.GroupPolicyInfo): _64.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _64.GroupPolicyInfoProtoMsg): _64.GroupPolicyInfo;
                toProto(message: _64.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _64.GroupPolicyInfo): _64.GroupPolicyInfoProtoMsg;
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
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _63.Exec;
            execToJSON(object: _63.Exec): string;
            Exec: typeof _63.Exec;
            ExecSDKType: typeof _63.Exec;
            ExecAmino: typeof _63.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _63.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgCreateGroup;
                fromPartial(object: Partial<_63.MsgCreateGroup>): _63.MsgCreateGroup;
                fromAmino(object: _63.MsgCreateGroupAmino): _63.MsgCreateGroup;
                toAmino(message: _63.MsgCreateGroup): _63.MsgCreateGroupAmino;
                fromAminoMsg(object: _63.MsgCreateGroupAminoMsg): _63.MsgCreateGroup;
                toAminoMsg(message: _63.MsgCreateGroup): _63.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _63.MsgCreateGroupProtoMsg): _63.MsgCreateGroup;
                toProto(message: _63.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _63.MsgCreateGroup): _63.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _63.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgCreateGroupResponse;
                fromPartial(object: Partial<_63.MsgCreateGroupResponse>): _63.MsgCreateGroupResponse;
                fromAmino(object: _63.MsgCreateGroupResponseAmino): _63.MsgCreateGroupResponse;
                toAmino(message: _63.MsgCreateGroupResponse): _63.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _63.MsgCreateGroupResponseAminoMsg): _63.MsgCreateGroupResponse;
                toAminoMsg(message: _63.MsgCreateGroupResponse): _63.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _63.MsgCreateGroupResponseProtoMsg): _63.MsgCreateGroupResponse;
                toProto(message: _63.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _63.MsgCreateGroupResponse): _63.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _63.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_63.MsgUpdateGroupMembers>): _63.MsgUpdateGroupMembers;
                fromAmino(object: _63.MsgUpdateGroupMembersAmino): _63.MsgUpdateGroupMembers;
                toAmino(message: _63.MsgUpdateGroupMembers): _63.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupMembersAminoMsg): _63.MsgUpdateGroupMembers;
                toAminoMsg(message: _63.MsgUpdateGroupMembers): _63.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupMembersProtoMsg): _63.MsgUpdateGroupMembers;
                toProto(message: _63.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupMembers): _63.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _63.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _63.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_63.MsgUpdateGroupMembersResponse>): _63.MsgUpdateGroupMembersResponse;
                fromAmino(_: _63.MsgUpdateGroupMembersResponseAmino): _63.MsgUpdateGroupMembersResponse;
                toAmino(_: _63.MsgUpdateGroupMembersResponse): _63.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupMembersResponseAminoMsg): _63.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _63.MsgUpdateGroupMembersResponse): _63.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupMembersResponseProtoMsg): _63.MsgUpdateGroupMembersResponse;
                toProto(message: _63.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupMembersResponse): _63.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _63.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_63.MsgUpdateGroupAdmin>): _63.MsgUpdateGroupAdmin;
                fromAmino(object: _63.MsgUpdateGroupAdminAmino): _63.MsgUpdateGroupAdmin;
                toAmino(message: _63.MsgUpdateGroupAdmin): _63.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupAdminAminoMsg): _63.MsgUpdateGroupAdmin;
                toAminoMsg(message: _63.MsgUpdateGroupAdmin): _63.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupAdminProtoMsg): _63.MsgUpdateGroupAdmin;
                toProto(message: _63.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupAdmin): _63.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _63.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _63.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_63.MsgUpdateGroupAdminResponse>): _63.MsgUpdateGroupAdminResponse;
                fromAmino(_: _63.MsgUpdateGroupAdminResponseAmino): _63.MsgUpdateGroupAdminResponse;
                toAmino(_: _63.MsgUpdateGroupAdminResponse): _63.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupAdminResponseAminoMsg): _63.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _63.MsgUpdateGroupAdminResponse): _63.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupAdminResponseProtoMsg): _63.MsgUpdateGroupAdminResponse;
                toProto(message: _63.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupAdminResponse): _63.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _63.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_63.MsgUpdateGroupMetadata>): _63.MsgUpdateGroupMetadata;
                fromAmino(object: _63.MsgUpdateGroupMetadataAmino): _63.MsgUpdateGroupMetadata;
                toAmino(message: _63.MsgUpdateGroupMetadata): _63.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupMetadataAminoMsg): _63.MsgUpdateGroupMetadata;
                toAminoMsg(message: _63.MsgUpdateGroupMetadata): _63.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupMetadataProtoMsg): _63.MsgUpdateGroupMetadata;
                toProto(message: _63.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupMetadata): _63.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _63.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _63.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_63.MsgUpdateGroupMetadataResponse>): _63.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _63.MsgUpdateGroupMetadataResponseAmino): _63.MsgUpdateGroupMetadataResponse;
                toAmino(_: _63.MsgUpdateGroupMetadataResponse): _63.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupMetadataResponseAminoMsg): _63.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _63.MsgUpdateGroupMetadataResponse): _63.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupMetadataResponseProtoMsg): _63.MsgUpdateGroupMetadataResponse;
                toProto(message: _63.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupMetadataResponse): _63.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _63.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_63.MsgCreateGroupPolicy>): _63.MsgCreateGroupPolicy;
                fromAmino(object: _63.MsgCreateGroupPolicyAmino): _63.MsgCreateGroupPolicy;
                toAmino(message: _63.MsgCreateGroupPolicy): _63.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _63.MsgCreateGroupPolicyAminoMsg): _63.MsgCreateGroupPolicy;
                toAminoMsg(message: _63.MsgCreateGroupPolicy): _63.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _63.MsgCreateGroupPolicyProtoMsg): _63.MsgCreateGroupPolicy;
                toProto(message: _63.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _63.MsgCreateGroupPolicy): _63.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _63.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_63.MsgCreateGroupPolicyResponse>): _63.MsgCreateGroupPolicyResponse;
                fromAmino(object: _63.MsgCreateGroupPolicyResponseAmino): _63.MsgCreateGroupPolicyResponse;
                toAmino(message: _63.MsgCreateGroupPolicyResponse): _63.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _63.MsgCreateGroupPolicyResponseAminoMsg): _63.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _63.MsgCreateGroupPolicyResponse): _63.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _63.MsgCreateGroupPolicyResponseProtoMsg): _63.MsgCreateGroupPolicyResponse;
                toProto(message: _63.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _63.MsgCreateGroupPolicyResponse): _63.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _63.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_63.MsgUpdateGroupPolicyAdmin>): _63.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _63.MsgUpdateGroupPolicyAdminAmino): _63.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _63.MsgUpdateGroupPolicyAdmin): _63.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupPolicyAdminAminoMsg): _63.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _63.MsgUpdateGroupPolicyAdmin): _63.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupPolicyAdminProtoMsg): _63.MsgUpdateGroupPolicyAdmin;
                toProto(message: _63.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupPolicyAdmin): _63.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _63.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_63.MsgCreateGroupWithPolicy>): _63.MsgCreateGroupWithPolicy;
                fromAmino(object: _63.MsgCreateGroupWithPolicyAmino): _63.MsgCreateGroupWithPolicy;
                toAmino(message: _63.MsgCreateGroupWithPolicy): _63.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _63.MsgCreateGroupWithPolicyAminoMsg): _63.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _63.MsgCreateGroupWithPolicy): _63.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _63.MsgCreateGroupWithPolicyProtoMsg): _63.MsgCreateGroupWithPolicy;
                toProto(message: _63.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _63.MsgCreateGroupWithPolicy): _63.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _63.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_63.MsgCreateGroupWithPolicyResponse>): _63.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _63.MsgCreateGroupWithPolicyResponseAmino): _63.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _63.MsgCreateGroupWithPolicyResponse): _63.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _63.MsgCreateGroupWithPolicyResponseAminoMsg): _63.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _63.MsgCreateGroupWithPolicyResponse): _63.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _63.MsgCreateGroupWithPolicyResponseProtoMsg): _63.MsgCreateGroupWithPolicyResponse;
                toProto(message: _63.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _63.MsgCreateGroupWithPolicyResponse): _63.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _63.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _63.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_63.MsgUpdateGroupPolicyAdminResponse>): _63.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _63.MsgUpdateGroupPolicyAdminResponseAmino): _63.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _63.MsgUpdateGroupPolicyAdminResponse): _63.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupPolicyAdminResponseAminoMsg): _63.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _63.MsgUpdateGroupPolicyAdminResponse): _63.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupPolicyAdminResponseProtoMsg): _63.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _63.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupPolicyAdminResponse): _63.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _63.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_63.MsgUpdateGroupPolicyDecisionPolicy>): _63.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _63.MsgUpdateGroupPolicyDecisionPolicyAmino): _63.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _63.MsgUpdateGroupPolicyDecisionPolicy): _63.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _63.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _63.MsgUpdateGroupPolicyDecisionPolicy): _63.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _63.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _63.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupPolicyDecisionPolicy): _63.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _63.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _63.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_63.MsgUpdateGroupPolicyDecisionPolicyResponse>): _63.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _63.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _63.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _63.MsgUpdateGroupPolicyDecisionPolicyResponse): _63.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _63.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _63.MsgUpdateGroupPolicyDecisionPolicyResponse): _63.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _63.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _63.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupPolicyDecisionPolicyResponse): _63.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _63.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_63.MsgUpdateGroupPolicyMetadata>): _63.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _63.MsgUpdateGroupPolicyMetadataAmino): _63.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _63.MsgUpdateGroupPolicyMetadata): _63.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupPolicyMetadataAminoMsg): _63.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _63.MsgUpdateGroupPolicyMetadata): _63.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupPolicyMetadataProtoMsg): _63.MsgUpdateGroupPolicyMetadata;
                toProto(message: _63.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupPolicyMetadata): _63.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _63.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _63.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_63.MsgUpdateGroupPolicyMetadataResponse>): _63.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _63.MsgUpdateGroupPolicyMetadataResponseAmino): _63.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _63.MsgUpdateGroupPolicyMetadataResponse): _63.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _63.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _63.MsgUpdateGroupPolicyMetadataResponse): _63.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _63.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _63.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupPolicyMetadataResponse): _63.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _63.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgSubmitProposal;
                fromPartial(object: Partial<_63.MsgSubmitProposal>): _63.MsgSubmitProposal;
                fromAmino(object: _63.MsgSubmitProposalAmino): _63.MsgSubmitProposal;
                toAmino(message: _63.MsgSubmitProposal): _63.MsgSubmitProposalAmino;
                fromAminoMsg(object: _63.MsgSubmitProposalAminoMsg): _63.MsgSubmitProposal;
                toAminoMsg(message: _63.MsgSubmitProposal): _63.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _63.MsgSubmitProposalProtoMsg): _63.MsgSubmitProposal;
                toProto(message: _63.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _63.MsgSubmitProposal): _63.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _63.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_63.MsgSubmitProposalResponse>): _63.MsgSubmitProposalResponse;
                fromAmino(object: _63.MsgSubmitProposalResponseAmino): _63.MsgSubmitProposalResponse;
                toAmino(message: _63.MsgSubmitProposalResponse): _63.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _63.MsgSubmitProposalResponseAminoMsg): _63.MsgSubmitProposalResponse;
                toAminoMsg(message: _63.MsgSubmitProposalResponse): _63.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _63.MsgSubmitProposalResponseProtoMsg): _63.MsgSubmitProposalResponse;
                toProto(message: _63.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _63.MsgSubmitProposalResponse): _63.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _63.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgWithdrawProposal;
                fromPartial(object: Partial<_63.MsgWithdrawProposal>): _63.MsgWithdrawProposal;
                fromAmino(object: _63.MsgWithdrawProposalAmino): _63.MsgWithdrawProposal;
                toAmino(message: _63.MsgWithdrawProposal): _63.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _63.MsgWithdrawProposalAminoMsg): _63.MsgWithdrawProposal;
                toAminoMsg(message: _63.MsgWithdrawProposal): _63.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _63.MsgWithdrawProposalProtoMsg): _63.MsgWithdrawProposal;
                toProto(message: _63.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _63.MsgWithdrawProposal): _63.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _63.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _63.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_63.MsgWithdrawProposalResponse>): _63.MsgWithdrawProposalResponse;
                fromAmino(_: _63.MsgWithdrawProposalResponseAmino): _63.MsgWithdrawProposalResponse;
                toAmino(_: _63.MsgWithdrawProposalResponse): _63.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _63.MsgWithdrawProposalResponseAminoMsg): _63.MsgWithdrawProposalResponse;
                toAminoMsg(message: _63.MsgWithdrawProposalResponse): _63.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _63.MsgWithdrawProposalResponseProtoMsg): _63.MsgWithdrawProposalResponse;
                toProto(message: _63.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _63.MsgWithdrawProposalResponse): _63.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _63.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgVote;
                fromPartial(object: Partial<_63.MsgVote>): _63.MsgVote;
                fromAmino(object: _63.MsgVoteAmino): _63.MsgVote;
                toAmino(message: _63.MsgVote): _63.MsgVoteAmino;
                fromAminoMsg(object: _63.MsgVoteAminoMsg): _63.MsgVote;
                toAminoMsg(message: _63.MsgVote): _63.MsgVoteAminoMsg;
                fromProtoMsg(message: _63.MsgVoteProtoMsg): _63.MsgVote;
                toProto(message: _63.MsgVote): Uint8Array;
                toProtoMsg(message: _63.MsgVote): _63.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _63.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _63.MsgVoteResponse;
                fromPartial(_: Partial<_63.MsgVoteResponse>): _63.MsgVoteResponse;
                fromAmino(_: _63.MsgVoteResponseAmino): _63.MsgVoteResponse;
                toAmino(_: _63.MsgVoteResponse): _63.MsgVoteResponseAmino;
                fromAminoMsg(object: _63.MsgVoteResponseAminoMsg): _63.MsgVoteResponse;
                toAminoMsg(message: _63.MsgVoteResponse): _63.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _63.MsgVoteResponseProtoMsg): _63.MsgVoteResponse;
                toProto(message: _63.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _63.MsgVoteResponse): _63.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _63.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgExec;
                fromPartial(object: Partial<_63.MsgExec>): _63.MsgExec;
                fromAmino(object: _63.MsgExecAmino): _63.MsgExec;
                toAmino(message: _63.MsgExec): _63.MsgExecAmino;
                fromAminoMsg(object: _63.MsgExecAminoMsg): _63.MsgExec;
                toAminoMsg(message: _63.MsgExec): _63.MsgExecAminoMsg;
                fromProtoMsg(message: _63.MsgExecProtoMsg): _63.MsgExec;
                toProto(message: _63.MsgExec): Uint8Array;
                toProtoMsg(message: _63.MsgExec): _63.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _63.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgExecResponse;
                fromPartial(object: Partial<_63.MsgExecResponse>): _63.MsgExecResponse;
                fromAmino(object: _63.MsgExecResponseAmino): _63.MsgExecResponse;
                toAmino(message: _63.MsgExecResponse): _63.MsgExecResponseAmino;
                fromAminoMsg(object: _63.MsgExecResponseAminoMsg): _63.MsgExecResponse;
                toAminoMsg(message: _63.MsgExecResponse): _63.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _63.MsgExecResponseProtoMsg): _63.MsgExecResponse;
                toProto(message: _63.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _63.MsgExecResponse): _63.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _63.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgLeaveGroup;
                fromPartial(object: Partial<_63.MsgLeaveGroup>): _63.MsgLeaveGroup;
                fromAmino(object: _63.MsgLeaveGroupAmino): _63.MsgLeaveGroup;
                toAmino(message: _63.MsgLeaveGroup): _63.MsgLeaveGroupAmino;
                fromAminoMsg(object: _63.MsgLeaveGroupAminoMsg): _63.MsgLeaveGroup;
                toAminoMsg(message: _63.MsgLeaveGroup): _63.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _63.MsgLeaveGroupProtoMsg): _63.MsgLeaveGroup;
                toProto(message: _63.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _63.MsgLeaveGroup): _63.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _63.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _63.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_63.MsgLeaveGroupResponse>): _63.MsgLeaveGroupResponse;
                fromAmino(_: _63.MsgLeaveGroupResponseAmino): _63.MsgLeaveGroupResponse;
                toAmino(_: _63.MsgLeaveGroupResponse): _63.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _63.MsgLeaveGroupResponseAminoMsg): _63.MsgLeaveGroupResponse;
                toAminoMsg(message: _63.MsgLeaveGroupResponse): _63.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _63.MsgLeaveGroupResponseProtoMsg): _63.MsgLeaveGroupResponse;
                toProto(message: _63.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _63.MsgLeaveGroupResponse): _63.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _62.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryGroupInfoRequest;
                fromPartial(object: Partial<_62.QueryGroupInfoRequest>): _62.QueryGroupInfoRequest;
                fromAmino(object: _62.QueryGroupInfoRequestAmino): _62.QueryGroupInfoRequest;
                toAmino(message: _62.QueryGroupInfoRequest): _62.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _62.QueryGroupInfoRequestAminoMsg): _62.QueryGroupInfoRequest;
                toAminoMsg(message: _62.QueryGroupInfoRequest): _62.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _62.QueryGroupInfoRequestProtoMsg): _62.QueryGroupInfoRequest;
                toProto(message: _62.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _62.QueryGroupInfoRequest): _62.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _62.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryGroupInfoResponse;
                fromPartial(object: Partial<_62.QueryGroupInfoResponse>): _62.QueryGroupInfoResponse;
                fromAmino(object: _62.QueryGroupInfoResponseAmino): _62.QueryGroupInfoResponse;
                toAmino(message: _62.QueryGroupInfoResponse): _62.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _62.QueryGroupInfoResponseAminoMsg): _62.QueryGroupInfoResponse;
                toAminoMsg(message: _62.QueryGroupInfoResponse): _62.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _62.QueryGroupInfoResponseProtoMsg): _62.QueryGroupInfoResponse;
                toProto(message: _62.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _62.QueryGroupInfoResponse): _62.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _62.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_62.QueryGroupPolicyInfoRequest>): _62.QueryGroupPolicyInfoRequest;
                fromAmino(object: _62.QueryGroupPolicyInfoRequestAmino): _62.QueryGroupPolicyInfoRequest;
                toAmino(message: _62.QueryGroupPolicyInfoRequest): _62.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _62.QueryGroupPolicyInfoRequestAminoMsg): _62.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _62.QueryGroupPolicyInfoRequest): _62.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _62.QueryGroupPolicyInfoRequestProtoMsg): _62.QueryGroupPolicyInfoRequest;
                toProto(message: _62.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _62.QueryGroupPolicyInfoRequest): _62.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _62.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_62.QueryGroupPolicyInfoResponse>): _62.QueryGroupPolicyInfoResponse;
                fromAmino(object: _62.QueryGroupPolicyInfoResponseAmino): _62.QueryGroupPolicyInfoResponse;
                toAmino(message: _62.QueryGroupPolicyInfoResponse): _62.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _62.QueryGroupPolicyInfoResponseAminoMsg): _62.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _62.QueryGroupPolicyInfoResponse): _62.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _62.QueryGroupPolicyInfoResponseProtoMsg): _62.QueryGroupPolicyInfoResponse;
                toProto(message: _62.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _62.QueryGroupPolicyInfoResponse): _62.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _62.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryGroupMembersRequest;
                fromPartial(object: Partial<_62.QueryGroupMembersRequest>): _62.QueryGroupMembersRequest;
                fromAmino(object: _62.QueryGroupMembersRequestAmino): _62.QueryGroupMembersRequest;
                toAmino(message: _62.QueryGroupMembersRequest): _62.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _62.QueryGroupMembersRequestAminoMsg): _62.QueryGroupMembersRequest;
                toAminoMsg(message: _62.QueryGroupMembersRequest): _62.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _62.QueryGroupMembersRequestProtoMsg): _62.QueryGroupMembersRequest;
                toProto(message: _62.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _62.QueryGroupMembersRequest): _62.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _62.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryGroupMembersResponse;
                fromPartial(object: Partial<_62.QueryGroupMembersResponse>): _62.QueryGroupMembersResponse;
                fromAmino(object: _62.QueryGroupMembersResponseAmino): _62.QueryGroupMembersResponse;
                toAmino(message: _62.QueryGroupMembersResponse): _62.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _62.QueryGroupMembersResponseAminoMsg): _62.QueryGroupMembersResponse;
                toAminoMsg(message: _62.QueryGroupMembersResponse): _62.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _62.QueryGroupMembersResponseProtoMsg): _62.QueryGroupMembersResponse;
                toProto(message: _62.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _62.QueryGroupMembersResponse): _62.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _62.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_62.QueryGroupsByAdminRequest>): _62.QueryGroupsByAdminRequest;
                fromAmino(object: _62.QueryGroupsByAdminRequestAmino): _62.QueryGroupsByAdminRequest;
                toAmino(message: _62.QueryGroupsByAdminRequest): _62.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _62.QueryGroupsByAdminRequestAminoMsg): _62.QueryGroupsByAdminRequest;
                toAminoMsg(message: _62.QueryGroupsByAdminRequest): _62.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _62.QueryGroupsByAdminRequestProtoMsg): _62.QueryGroupsByAdminRequest;
                toProto(message: _62.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _62.QueryGroupsByAdminRequest): _62.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _62.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_62.QueryGroupsByAdminResponse>): _62.QueryGroupsByAdminResponse;
                fromAmino(object: _62.QueryGroupsByAdminResponseAmino): _62.QueryGroupsByAdminResponse;
                toAmino(message: _62.QueryGroupsByAdminResponse): _62.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _62.QueryGroupsByAdminResponseAminoMsg): _62.QueryGroupsByAdminResponse;
                toAminoMsg(message: _62.QueryGroupsByAdminResponse): _62.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _62.QueryGroupsByAdminResponseProtoMsg): _62.QueryGroupsByAdminResponse;
                toProto(message: _62.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _62.QueryGroupsByAdminResponse): _62.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _62.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_62.QueryGroupPoliciesByGroupRequest>): _62.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _62.QueryGroupPoliciesByGroupRequestAmino): _62.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _62.QueryGroupPoliciesByGroupRequest): _62.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _62.QueryGroupPoliciesByGroupRequestAminoMsg): _62.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _62.QueryGroupPoliciesByGroupRequest): _62.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _62.QueryGroupPoliciesByGroupRequestProtoMsg): _62.QueryGroupPoliciesByGroupRequest;
                toProto(message: _62.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _62.QueryGroupPoliciesByGroupRequest): _62.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _62.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_62.QueryGroupPoliciesByGroupResponse>): _62.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _62.QueryGroupPoliciesByGroupResponseAmino): _62.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _62.QueryGroupPoliciesByGroupResponse): _62.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _62.QueryGroupPoliciesByGroupResponseAminoMsg): _62.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _62.QueryGroupPoliciesByGroupResponse): _62.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _62.QueryGroupPoliciesByGroupResponseProtoMsg): _62.QueryGroupPoliciesByGroupResponse;
                toProto(message: _62.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _62.QueryGroupPoliciesByGroupResponse): _62.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _62.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_62.QueryGroupPoliciesByAdminRequest>): _62.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _62.QueryGroupPoliciesByAdminRequestAmino): _62.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _62.QueryGroupPoliciesByAdminRequest): _62.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _62.QueryGroupPoliciesByAdminRequestAminoMsg): _62.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _62.QueryGroupPoliciesByAdminRequest): _62.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _62.QueryGroupPoliciesByAdminRequestProtoMsg): _62.QueryGroupPoliciesByAdminRequest;
                toProto(message: _62.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _62.QueryGroupPoliciesByAdminRequest): _62.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _62.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_62.QueryGroupPoliciesByAdminResponse>): _62.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _62.QueryGroupPoliciesByAdminResponseAmino): _62.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _62.QueryGroupPoliciesByAdminResponse): _62.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _62.QueryGroupPoliciesByAdminResponseAminoMsg): _62.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _62.QueryGroupPoliciesByAdminResponse): _62.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _62.QueryGroupPoliciesByAdminResponseProtoMsg): _62.QueryGroupPoliciesByAdminResponse;
                toProto(message: _62.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _62.QueryGroupPoliciesByAdminResponse): _62.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _62.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryProposalRequest;
                fromPartial(object: Partial<_62.QueryProposalRequest>): _62.QueryProposalRequest;
                fromAmino(object: _62.QueryProposalRequestAmino): _62.QueryProposalRequest;
                toAmino(message: _62.QueryProposalRequest): _62.QueryProposalRequestAmino;
                fromAminoMsg(object: _62.QueryProposalRequestAminoMsg): _62.QueryProposalRequest;
                toAminoMsg(message: _62.QueryProposalRequest): _62.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _62.QueryProposalRequestProtoMsg): _62.QueryProposalRequest;
                toProto(message: _62.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _62.QueryProposalRequest): _62.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _62.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryProposalResponse;
                fromPartial(object: Partial<_62.QueryProposalResponse>): _62.QueryProposalResponse;
                fromAmino(object: _62.QueryProposalResponseAmino): _62.QueryProposalResponse;
                toAmino(message: _62.QueryProposalResponse): _62.QueryProposalResponseAmino;
                fromAminoMsg(object: _62.QueryProposalResponseAminoMsg): _62.QueryProposalResponse;
                toAminoMsg(message: _62.QueryProposalResponse): _62.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _62.QueryProposalResponseProtoMsg): _62.QueryProposalResponse;
                toProto(message: _62.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _62.QueryProposalResponse): _62.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _62.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_62.QueryProposalsByGroupPolicyRequest>): _62.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _62.QueryProposalsByGroupPolicyRequestAmino): _62.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _62.QueryProposalsByGroupPolicyRequest): _62.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _62.QueryProposalsByGroupPolicyRequestAminoMsg): _62.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _62.QueryProposalsByGroupPolicyRequest): _62.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _62.QueryProposalsByGroupPolicyRequestProtoMsg): _62.QueryProposalsByGroupPolicyRequest;
                toProto(message: _62.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _62.QueryProposalsByGroupPolicyRequest): _62.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _62.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_62.QueryProposalsByGroupPolicyResponse>): _62.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _62.QueryProposalsByGroupPolicyResponseAmino): _62.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _62.QueryProposalsByGroupPolicyResponse): _62.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _62.QueryProposalsByGroupPolicyResponseAminoMsg): _62.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _62.QueryProposalsByGroupPolicyResponse): _62.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _62.QueryProposalsByGroupPolicyResponseProtoMsg): _62.QueryProposalsByGroupPolicyResponse;
                toProto(message: _62.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _62.QueryProposalsByGroupPolicyResponse): _62.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _62.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_62.QueryVoteByProposalVoterRequest>): _62.QueryVoteByProposalVoterRequest;
                fromAmino(object: _62.QueryVoteByProposalVoterRequestAmino): _62.QueryVoteByProposalVoterRequest;
                toAmino(message: _62.QueryVoteByProposalVoterRequest): _62.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _62.QueryVoteByProposalVoterRequestAminoMsg): _62.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _62.QueryVoteByProposalVoterRequest): _62.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _62.QueryVoteByProposalVoterRequestProtoMsg): _62.QueryVoteByProposalVoterRequest;
                toProto(message: _62.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _62.QueryVoteByProposalVoterRequest): _62.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _62.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_62.QueryVoteByProposalVoterResponse>): _62.QueryVoteByProposalVoterResponse;
                fromAmino(object: _62.QueryVoteByProposalVoterResponseAmino): _62.QueryVoteByProposalVoterResponse;
                toAmino(message: _62.QueryVoteByProposalVoterResponse): _62.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _62.QueryVoteByProposalVoterResponseAminoMsg): _62.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _62.QueryVoteByProposalVoterResponse): _62.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _62.QueryVoteByProposalVoterResponseProtoMsg): _62.QueryVoteByProposalVoterResponse;
                toProto(message: _62.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _62.QueryVoteByProposalVoterResponse): _62.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _62.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_62.QueryVotesByProposalRequest>): _62.QueryVotesByProposalRequest;
                fromAmino(object: _62.QueryVotesByProposalRequestAmino): _62.QueryVotesByProposalRequest;
                toAmino(message: _62.QueryVotesByProposalRequest): _62.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _62.QueryVotesByProposalRequestAminoMsg): _62.QueryVotesByProposalRequest;
                toAminoMsg(message: _62.QueryVotesByProposalRequest): _62.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _62.QueryVotesByProposalRequestProtoMsg): _62.QueryVotesByProposalRequest;
                toProto(message: _62.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _62.QueryVotesByProposalRequest): _62.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _62.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_62.QueryVotesByProposalResponse>): _62.QueryVotesByProposalResponse;
                fromAmino(object: _62.QueryVotesByProposalResponseAmino): _62.QueryVotesByProposalResponse;
                toAmino(message: _62.QueryVotesByProposalResponse): _62.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _62.QueryVotesByProposalResponseAminoMsg): _62.QueryVotesByProposalResponse;
                toAminoMsg(message: _62.QueryVotesByProposalResponse): _62.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _62.QueryVotesByProposalResponseProtoMsg): _62.QueryVotesByProposalResponse;
                toProto(message: _62.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _62.QueryVotesByProposalResponse): _62.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _62.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_62.QueryVotesByVoterRequest>): _62.QueryVotesByVoterRequest;
                fromAmino(object: _62.QueryVotesByVoterRequestAmino): _62.QueryVotesByVoterRequest;
                toAmino(message: _62.QueryVotesByVoterRequest): _62.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _62.QueryVotesByVoterRequestAminoMsg): _62.QueryVotesByVoterRequest;
                toAminoMsg(message: _62.QueryVotesByVoterRequest): _62.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _62.QueryVotesByVoterRequestProtoMsg): _62.QueryVotesByVoterRequest;
                toProto(message: _62.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _62.QueryVotesByVoterRequest): _62.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _62.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_62.QueryVotesByVoterResponse>): _62.QueryVotesByVoterResponse;
                fromAmino(object: _62.QueryVotesByVoterResponseAmino): _62.QueryVotesByVoterResponse;
                toAmino(message: _62.QueryVotesByVoterResponse): _62.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _62.QueryVotesByVoterResponseAminoMsg): _62.QueryVotesByVoterResponse;
                toAminoMsg(message: _62.QueryVotesByVoterResponse): _62.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _62.QueryVotesByVoterResponseProtoMsg): _62.QueryVotesByVoterResponse;
                toProto(message: _62.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _62.QueryVotesByVoterResponse): _62.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _62.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_62.QueryGroupsByMemberRequest>): _62.QueryGroupsByMemberRequest;
                fromAmino(object: _62.QueryGroupsByMemberRequestAmino): _62.QueryGroupsByMemberRequest;
                toAmino(message: _62.QueryGroupsByMemberRequest): _62.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _62.QueryGroupsByMemberRequestAminoMsg): _62.QueryGroupsByMemberRequest;
                toAminoMsg(message: _62.QueryGroupsByMemberRequest): _62.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _62.QueryGroupsByMemberRequestProtoMsg): _62.QueryGroupsByMemberRequest;
                toProto(message: _62.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _62.QueryGroupsByMemberRequest): _62.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _62.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_62.QueryGroupsByMemberResponse>): _62.QueryGroupsByMemberResponse;
                fromAmino(object: _62.QueryGroupsByMemberResponseAmino): _62.QueryGroupsByMemberResponse;
                toAmino(message: _62.QueryGroupsByMemberResponse): _62.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _62.QueryGroupsByMemberResponseAminoMsg): _62.QueryGroupsByMemberResponse;
                toAminoMsg(message: _62.QueryGroupsByMemberResponse): _62.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _62.QueryGroupsByMemberResponseProtoMsg): _62.QueryGroupsByMemberResponse;
                toProto(message: _62.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _62.QueryGroupsByMemberResponse): _62.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _62.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryTallyResultRequest;
                fromPartial(object: Partial<_62.QueryTallyResultRequest>): _62.QueryTallyResultRequest;
                fromAmino(object: _62.QueryTallyResultRequestAmino): _62.QueryTallyResultRequest;
                toAmino(message: _62.QueryTallyResultRequest): _62.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _62.QueryTallyResultRequestAminoMsg): _62.QueryTallyResultRequest;
                toAminoMsg(message: _62.QueryTallyResultRequest): _62.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _62.QueryTallyResultRequestProtoMsg): _62.QueryTallyResultRequest;
                toProto(message: _62.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _62.QueryTallyResultRequest): _62.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _62.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryTallyResultResponse;
                fromPartial(object: Partial<_62.QueryTallyResultResponse>): _62.QueryTallyResultResponse;
                fromAmino(object: _62.QueryTallyResultResponseAmino): _62.QueryTallyResultResponse;
                toAmino(message: _62.QueryTallyResultResponse): _62.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _62.QueryTallyResultResponseAminoMsg): _62.QueryTallyResultResponse;
                toAminoMsg(message: _62.QueryTallyResultResponse): _62.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _62.QueryTallyResultResponseProtoMsg): _62.QueryTallyResultResponse;
                toProto(message: _62.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _62.QueryTallyResultResponse): _62.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _62.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryGroupsRequest;
                fromPartial(object: Partial<_62.QueryGroupsRequest>): _62.QueryGroupsRequest;
                fromAmino(object: _62.QueryGroupsRequestAmino): _62.QueryGroupsRequest;
                toAmino(message: _62.QueryGroupsRequest): _62.QueryGroupsRequestAmino;
                fromAminoMsg(object: _62.QueryGroupsRequestAminoMsg): _62.QueryGroupsRequest;
                toAminoMsg(message: _62.QueryGroupsRequest): _62.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _62.QueryGroupsRequestProtoMsg): _62.QueryGroupsRequest;
                toProto(message: _62.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _62.QueryGroupsRequest): _62.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _62.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryGroupsResponse;
                fromPartial(object: Partial<_62.QueryGroupsResponse>): _62.QueryGroupsResponse;
                fromAmino(object: _62.QueryGroupsResponseAmino): _62.QueryGroupsResponse;
                toAmino(message: _62.QueryGroupsResponse): _62.QueryGroupsResponseAmino;
                fromAminoMsg(object: _62.QueryGroupsResponseAminoMsg): _62.QueryGroupsResponse;
                toAminoMsg(message: _62.QueryGroupsResponse): _62.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _62.QueryGroupsResponseProtoMsg): _62.QueryGroupsResponse;
                toProto(message: _62.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _62.QueryGroupsResponse): _62.QueryGroupsResponseProtoMsg;
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
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _60.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.EventCreateGroup;
                fromPartial(object: Partial<_60.EventCreateGroup>): _60.EventCreateGroup;
                fromAmino(object: _60.EventCreateGroupAmino): _60.EventCreateGroup;
                toAmino(message: _60.EventCreateGroup): _60.EventCreateGroupAmino;
                fromAminoMsg(object: _60.EventCreateGroupAminoMsg): _60.EventCreateGroup;
                toAminoMsg(message: _60.EventCreateGroup): _60.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _60.EventCreateGroupProtoMsg): _60.EventCreateGroup;
                toProto(message: _60.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _60.EventCreateGroup): _60.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _60.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.EventUpdateGroup;
                fromPartial(object: Partial<_60.EventUpdateGroup>): _60.EventUpdateGroup;
                fromAmino(object: _60.EventUpdateGroupAmino): _60.EventUpdateGroup;
                toAmino(message: _60.EventUpdateGroup): _60.EventUpdateGroupAmino;
                fromAminoMsg(object: _60.EventUpdateGroupAminoMsg): _60.EventUpdateGroup;
                toAminoMsg(message: _60.EventUpdateGroup): _60.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _60.EventUpdateGroupProtoMsg): _60.EventUpdateGroup;
                toProto(message: _60.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _60.EventUpdateGroup): _60.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _60.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.EventCreateGroupPolicy;
                fromPartial(object: Partial<_60.EventCreateGroupPolicy>): _60.EventCreateGroupPolicy;
                fromAmino(object: _60.EventCreateGroupPolicyAmino): _60.EventCreateGroupPolicy;
                toAmino(message: _60.EventCreateGroupPolicy): _60.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _60.EventCreateGroupPolicyAminoMsg): _60.EventCreateGroupPolicy;
                toAminoMsg(message: _60.EventCreateGroupPolicy): _60.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _60.EventCreateGroupPolicyProtoMsg): _60.EventCreateGroupPolicy;
                toProto(message: _60.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _60.EventCreateGroupPolicy): _60.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _60.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_60.EventUpdateGroupPolicy>): _60.EventUpdateGroupPolicy;
                fromAmino(object: _60.EventUpdateGroupPolicyAmino): _60.EventUpdateGroupPolicy;
                toAmino(message: _60.EventUpdateGroupPolicy): _60.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _60.EventUpdateGroupPolicyAminoMsg): _60.EventUpdateGroupPolicy;
                toAminoMsg(message: _60.EventUpdateGroupPolicy): _60.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _60.EventUpdateGroupPolicyProtoMsg): _60.EventUpdateGroupPolicy;
                toProto(message: _60.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _60.EventUpdateGroupPolicy): _60.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _60.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.EventSubmitProposal;
                fromPartial(object: Partial<_60.EventSubmitProposal>): _60.EventSubmitProposal;
                fromAmino(object: _60.EventSubmitProposalAmino): _60.EventSubmitProposal;
                toAmino(message: _60.EventSubmitProposal): _60.EventSubmitProposalAmino;
                fromAminoMsg(object: _60.EventSubmitProposalAminoMsg): _60.EventSubmitProposal;
                toAminoMsg(message: _60.EventSubmitProposal): _60.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _60.EventSubmitProposalProtoMsg): _60.EventSubmitProposal;
                toProto(message: _60.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _60.EventSubmitProposal): _60.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _60.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.EventWithdrawProposal;
                fromPartial(object: Partial<_60.EventWithdrawProposal>): _60.EventWithdrawProposal;
                fromAmino(object: _60.EventWithdrawProposalAmino): _60.EventWithdrawProposal;
                toAmino(message: _60.EventWithdrawProposal): _60.EventWithdrawProposalAmino;
                fromAminoMsg(object: _60.EventWithdrawProposalAminoMsg): _60.EventWithdrawProposal;
                toAminoMsg(message: _60.EventWithdrawProposal): _60.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _60.EventWithdrawProposalProtoMsg): _60.EventWithdrawProposal;
                toProto(message: _60.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _60.EventWithdrawProposal): _60.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _60.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.EventVote;
                fromPartial(object: Partial<_60.EventVote>): _60.EventVote;
                fromAmino(object: _60.EventVoteAmino): _60.EventVote;
                toAmino(message: _60.EventVote): _60.EventVoteAmino;
                fromAminoMsg(object: _60.EventVoteAminoMsg): _60.EventVote;
                toAminoMsg(message: _60.EventVote): _60.EventVoteAminoMsg;
                fromProtoMsg(message: _60.EventVoteProtoMsg): _60.EventVote;
                toProto(message: _60.EventVote): Uint8Array;
                toProtoMsg(message: _60.EventVote): _60.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _60.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.EventExec;
                fromPartial(object: Partial<_60.EventExec>): _60.EventExec;
                fromAmino(object: _60.EventExecAmino): _60.EventExec;
                toAmino(message: _60.EventExec): _60.EventExecAmino;
                fromAminoMsg(object: _60.EventExecAminoMsg): _60.EventExec;
                toAminoMsg(message: _60.EventExec): _60.EventExecAminoMsg;
                fromProtoMsg(message: _60.EventExecProtoMsg): _60.EventExec;
                toProto(message: _60.EventExec): Uint8Array;
                toProtoMsg(message: _60.EventExec): _60.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _60.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.EventLeaveGroup;
                fromPartial(object: Partial<_60.EventLeaveGroup>): _60.EventLeaveGroup;
                fromAmino(object: _60.EventLeaveGroupAmino): _60.EventLeaveGroup;
                toAmino(message: _60.EventLeaveGroup): _60.EventLeaveGroupAmino;
                fromAminoMsg(object: _60.EventLeaveGroupAminoMsg): _60.EventLeaveGroup;
                toAminoMsg(message: _60.EventLeaveGroup): _60.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _60.EventLeaveGroupProtoMsg): _60.EventLeaveGroup;
                toProto(message: _60.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _60.EventLeaveGroup): _60.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _60.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.EventProposalPruned;
                fromPartial(object: Partial<_60.EventProposalPruned>): _60.EventProposalPruned;
                fromAmino(object: _60.EventProposalPrunedAmino): _60.EventProposalPruned;
                toAmino(message: _60.EventProposalPruned): _60.EventProposalPrunedAmino;
                fromAminoMsg(object: _60.EventProposalPrunedAminoMsg): _60.EventProposalPruned;
                toAminoMsg(message: _60.EventProposalPruned): _60.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _60.EventProposalPrunedProtoMsg): _60.EventProposalPruned;
                toProto(message: _60.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _60.EventProposalPruned): _60.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _173.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                inflation(request?: _67.QueryInflationRequest): Promise<_67.QueryInflationResponse>;
                annualProvisions(request?: _67.QueryAnnualProvisionsRequest): Promise<_67.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _154.LCDQueryClient;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _67.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryInflationRequest;
                fromPartial(_: Partial<_67.QueryInflationRequest>): _67.QueryInflationRequest;
                fromAmino(_: _67.QueryInflationRequestAmino): _67.QueryInflationRequest;
                toAmino(_: _67.QueryInflationRequest): _67.QueryInflationRequestAmino;
                fromAminoMsg(object: _67.QueryInflationRequestAminoMsg): _67.QueryInflationRequest;
                toAminoMsg(message: _67.QueryInflationRequest): _67.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _67.QueryInflationRequestProtoMsg): _67.QueryInflationRequest;
                toProto(message: _67.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _67.QueryInflationRequest): _67.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _67.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryInflationResponse;
                fromPartial(object: Partial<_67.QueryInflationResponse>): _67.QueryInflationResponse;
                fromAmino(object: _67.QueryInflationResponseAmino): _67.QueryInflationResponse;
                toAmino(message: _67.QueryInflationResponse): _67.QueryInflationResponseAmino;
                fromAminoMsg(object: _67.QueryInflationResponseAminoMsg): _67.QueryInflationResponse;
                toAminoMsg(message: _67.QueryInflationResponse): _67.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _67.QueryInflationResponseProtoMsg): _67.QueryInflationResponse;
                toProto(message: _67.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _67.QueryInflationResponse): _67.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _67.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_67.QueryAnnualProvisionsRequest>): _67.QueryAnnualProvisionsRequest;
                fromAmino(_: _67.QueryAnnualProvisionsRequestAmino): _67.QueryAnnualProvisionsRequest;
                toAmino(_: _67.QueryAnnualProvisionsRequest): _67.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _67.QueryAnnualProvisionsRequestAminoMsg): _67.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _67.QueryAnnualProvisionsRequest): _67.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryAnnualProvisionsRequestProtoMsg): _67.QueryAnnualProvisionsRequest;
                toProto(message: _67.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryAnnualProvisionsRequest): _67.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _67.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_67.QueryAnnualProvisionsResponse>): _67.QueryAnnualProvisionsResponse;
                fromAmino(object: _67.QueryAnnualProvisionsResponseAmino): _67.QueryAnnualProvisionsResponse;
                toAmino(message: _67.QueryAnnualProvisionsResponse): _67.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _67.QueryAnnualProvisionsResponseAminoMsg): _67.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _67.QueryAnnualProvisionsResponse): _67.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryAnnualProvisionsResponseProtoMsg): _67.QueryAnnualProvisionsResponse;
                toProto(message: _67.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryAnnualProvisionsResponse): _67.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _66.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Minter;
                fromPartial(object: Partial<_66.Minter>): _66.Minter;
                fromAmino(object: _66.MinterAmino): _66.Minter;
                toAmino(message: _66.Minter): _66.MinterAmino;
                fromAminoMsg(object: _66.MinterAminoMsg): _66.Minter;
                toAminoMsg(message: _66.Minter): _66.MinterAminoMsg;
                fromProtoMsg(message: _66.MinterProtoMsg): _66.Minter;
                toProto(message: _66.Minter): Uint8Array;
                toProtoMsg(message: _66.Minter): _66.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _66.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Params;
                fromPartial(object: Partial<_66.Params>): _66.Params;
                fromAmino(object: _66.ParamsAmino): _66.Params;
                toAmino(message: _66.Params): _66.ParamsAmino;
                fromAminoMsg(object: _66.ParamsAminoMsg): _66.Params;
                toAminoMsg(message: _66.Params): _66.ParamsAminoMsg;
                fromProtoMsg(message: _66.ParamsProtoMsg): _66.Params;
                toProto(message: _66.Params): Uint8Array;
                toProtoMsg(message: _66.Params): _66.ParamsProtoMsg;
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
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _189.MsgClientImpl;
            QueryClientImpl: typeof _174.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _72.QueryBalanceRequest): Promise<_72.QueryBalanceResponse>;
                owner(request: _72.QueryOwnerRequest): Promise<_72.QueryOwnerResponse>;
                supply(request: _72.QuerySupplyRequest): Promise<_72.QuerySupplyResponse>;
                nFTs(request: _72.QueryNFTsRequest): Promise<_72.QueryNFTsResponse>;
                nFT(request: _72.QueryNFTRequest): Promise<_72.QueryNFTResponse>;
                class(request: _72.QueryClassRequest): Promise<_72.QueryClassResponse>;
                classes(request?: _72.QueryClassesRequest): Promise<_72.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _155.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: _73.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _73.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: _73.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _73.MsgSend) => _73.MsgSendAmino;
                    fromAmino: (object: _73.MsgSendAmino) => _73.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _73.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.MsgSend;
                fromPartial(object: Partial<_73.MsgSend>): _73.MsgSend;
                fromAmino(object: _73.MsgSendAmino): _73.MsgSend;
                toAmino(message: _73.MsgSend): _73.MsgSendAmino;
                fromAminoMsg(object: _73.MsgSendAminoMsg): _73.MsgSend;
                toAminoMsg(message: _73.MsgSend): _73.MsgSendAminoMsg;
                fromProtoMsg(message: _73.MsgSendProtoMsg): _73.MsgSend;
                toProto(message: _73.MsgSend): Uint8Array;
                toProtoMsg(message: _73.MsgSend): _73.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _73.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _73.MsgSendResponse;
                fromPartial(_: Partial<_73.MsgSendResponse>): _73.MsgSendResponse;
                fromAmino(_: _73.MsgSendResponseAmino): _73.MsgSendResponse;
                toAmino(_: _73.MsgSendResponse): _73.MsgSendResponseAmino;
                fromAminoMsg(object: _73.MsgSendResponseAminoMsg): _73.MsgSendResponse;
                toAminoMsg(message: _73.MsgSendResponse): _73.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _73.MsgSendResponseProtoMsg): _73.MsgSendResponse;
                toProto(message: _73.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _73.MsgSendResponse): _73.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _72.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryBalanceRequest;
                fromPartial(object: Partial<_72.QueryBalanceRequest>): _72.QueryBalanceRequest;
                fromAmino(object: _72.QueryBalanceRequestAmino): _72.QueryBalanceRequest;
                toAmino(message: _72.QueryBalanceRequest): _72.QueryBalanceRequestAmino;
                fromAminoMsg(object: _72.QueryBalanceRequestAminoMsg): _72.QueryBalanceRequest;
                toAminoMsg(message: _72.QueryBalanceRequest): _72.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _72.QueryBalanceRequestProtoMsg): _72.QueryBalanceRequest;
                toProto(message: _72.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _72.QueryBalanceRequest): _72.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _72.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryBalanceResponse;
                fromPartial(object: Partial<_72.QueryBalanceResponse>): _72.QueryBalanceResponse;
                fromAmino(object: _72.QueryBalanceResponseAmino): _72.QueryBalanceResponse;
                toAmino(message: _72.QueryBalanceResponse): _72.QueryBalanceResponseAmino;
                fromAminoMsg(object: _72.QueryBalanceResponseAminoMsg): _72.QueryBalanceResponse;
                toAminoMsg(message: _72.QueryBalanceResponse): _72.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _72.QueryBalanceResponseProtoMsg): _72.QueryBalanceResponse;
                toProto(message: _72.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _72.QueryBalanceResponse): _72.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _72.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryOwnerRequest;
                fromPartial(object: Partial<_72.QueryOwnerRequest>): _72.QueryOwnerRequest;
                fromAmino(object: _72.QueryOwnerRequestAmino): _72.QueryOwnerRequest;
                toAmino(message: _72.QueryOwnerRequest): _72.QueryOwnerRequestAmino;
                fromAminoMsg(object: _72.QueryOwnerRequestAminoMsg): _72.QueryOwnerRequest;
                toAminoMsg(message: _72.QueryOwnerRequest): _72.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _72.QueryOwnerRequestProtoMsg): _72.QueryOwnerRequest;
                toProto(message: _72.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _72.QueryOwnerRequest): _72.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _72.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryOwnerResponse;
                fromPartial(object: Partial<_72.QueryOwnerResponse>): _72.QueryOwnerResponse;
                fromAmino(object: _72.QueryOwnerResponseAmino): _72.QueryOwnerResponse;
                toAmino(message: _72.QueryOwnerResponse): _72.QueryOwnerResponseAmino;
                fromAminoMsg(object: _72.QueryOwnerResponseAminoMsg): _72.QueryOwnerResponse;
                toAminoMsg(message: _72.QueryOwnerResponse): _72.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _72.QueryOwnerResponseProtoMsg): _72.QueryOwnerResponse;
                toProto(message: _72.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _72.QueryOwnerResponse): _72.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _72.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QuerySupplyRequest;
                fromPartial(object: Partial<_72.QuerySupplyRequest>): _72.QuerySupplyRequest;
                fromAmino(object: _72.QuerySupplyRequestAmino): _72.QuerySupplyRequest;
                toAmino(message: _72.QuerySupplyRequest): _72.QuerySupplyRequestAmino;
                fromAminoMsg(object: _72.QuerySupplyRequestAminoMsg): _72.QuerySupplyRequest;
                toAminoMsg(message: _72.QuerySupplyRequest): _72.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _72.QuerySupplyRequestProtoMsg): _72.QuerySupplyRequest;
                toProto(message: _72.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _72.QuerySupplyRequest): _72.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _72.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QuerySupplyResponse;
                fromPartial(object: Partial<_72.QuerySupplyResponse>): _72.QuerySupplyResponse;
                fromAmino(object: _72.QuerySupplyResponseAmino): _72.QuerySupplyResponse;
                toAmino(message: _72.QuerySupplyResponse): _72.QuerySupplyResponseAmino;
                fromAminoMsg(object: _72.QuerySupplyResponseAminoMsg): _72.QuerySupplyResponse;
                toAminoMsg(message: _72.QuerySupplyResponse): _72.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _72.QuerySupplyResponseProtoMsg): _72.QuerySupplyResponse;
                toProto(message: _72.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _72.QuerySupplyResponse): _72.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _72.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryNFTsRequest;
                fromPartial(object: Partial<_72.QueryNFTsRequest>): _72.QueryNFTsRequest;
                fromAmino(object: _72.QueryNFTsRequestAmino): _72.QueryNFTsRequest;
                toAmino(message: _72.QueryNFTsRequest): _72.QueryNFTsRequestAmino;
                fromAminoMsg(object: _72.QueryNFTsRequestAminoMsg): _72.QueryNFTsRequest;
                toAminoMsg(message: _72.QueryNFTsRequest): _72.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _72.QueryNFTsRequestProtoMsg): _72.QueryNFTsRequest;
                toProto(message: _72.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _72.QueryNFTsRequest): _72.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _72.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryNFTsResponse;
                fromPartial(object: Partial<_72.QueryNFTsResponse>): _72.QueryNFTsResponse;
                fromAmino(object: _72.QueryNFTsResponseAmino): _72.QueryNFTsResponse;
                toAmino(message: _72.QueryNFTsResponse): _72.QueryNFTsResponseAmino;
                fromAminoMsg(object: _72.QueryNFTsResponseAminoMsg): _72.QueryNFTsResponse;
                toAminoMsg(message: _72.QueryNFTsResponse): _72.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _72.QueryNFTsResponseProtoMsg): _72.QueryNFTsResponse;
                toProto(message: _72.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _72.QueryNFTsResponse): _72.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _72.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryNFTRequest;
                fromPartial(object: Partial<_72.QueryNFTRequest>): _72.QueryNFTRequest;
                fromAmino(object: _72.QueryNFTRequestAmino): _72.QueryNFTRequest;
                toAmino(message: _72.QueryNFTRequest): _72.QueryNFTRequestAmino;
                fromAminoMsg(object: _72.QueryNFTRequestAminoMsg): _72.QueryNFTRequest;
                toAminoMsg(message: _72.QueryNFTRequest): _72.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _72.QueryNFTRequestProtoMsg): _72.QueryNFTRequest;
                toProto(message: _72.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _72.QueryNFTRequest): _72.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _72.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryNFTResponse;
                fromPartial(object: Partial<_72.QueryNFTResponse>): _72.QueryNFTResponse;
                fromAmino(object: _72.QueryNFTResponseAmino): _72.QueryNFTResponse;
                toAmino(message: _72.QueryNFTResponse): _72.QueryNFTResponseAmino;
                fromAminoMsg(object: _72.QueryNFTResponseAminoMsg): _72.QueryNFTResponse;
                toAminoMsg(message: _72.QueryNFTResponse): _72.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _72.QueryNFTResponseProtoMsg): _72.QueryNFTResponse;
                toProto(message: _72.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _72.QueryNFTResponse): _72.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _72.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryClassRequest;
                fromPartial(object: Partial<_72.QueryClassRequest>): _72.QueryClassRequest;
                fromAmino(object: _72.QueryClassRequestAmino): _72.QueryClassRequest;
                toAmino(message: _72.QueryClassRequest): _72.QueryClassRequestAmino;
                fromAminoMsg(object: _72.QueryClassRequestAminoMsg): _72.QueryClassRequest;
                toAminoMsg(message: _72.QueryClassRequest): _72.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _72.QueryClassRequestProtoMsg): _72.QueryClassRequest;
                toProto(message: _72.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _72.QueryClassRequest): _72.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _72.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryClassResponse;
                fromPartial(object: Partial<_72.QueryClassResponse>): _72.QueryClassResponse;
                fromAmino(object: _72.QueryClassResponseAmino): _72.QueryClassResponse;
                toAmino(message: _72.QueryClassResponse): _72.QueryClassResponseAmino;
                fromAminoMsg(object: _72.QueryClassResponseAminoMsg): _72.QueryClassResponse;
                toAminoMsg(message: _72.QueryClassResponse): _72.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _72.QueryClassResponseProtoMsg): _72.QueryClassResponse;
                toProto(message: _72.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _72.QueryClassResponse): _72.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _72.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryClassesRequest;
                fromPartial(object: Partial<_72.QueryClassesRequest>): _72.QueryClassesRequest;
                fromAmino(object: _72.QueryClassesRequestAmino): _72.QueryClassesRequest;
                toAmino(message: _72.QueryClassesRequest): _72.QueryClassesRequestAmino;
                fromAminoMsg(object: _72.QueryClassesRequestAminoMsg): _72.QueryClassesRequest;
                toAminoMsg(message: _72.QueryClassesRequest): _72.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _72.QueryClassesRequestProtoMsg): _72.QueryClassesRequest;
                toProto(message: _72.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _72.QueryClassesRequest): _72.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _72.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryClassesResponse;
                fromPartial(object: Partial<_72.QueryClassesResponse>): _72.QueryClassesResponse;
                fromAmino(object: _72.QueryClassesResponseAmino): _72.QueryClassesResponse;
                toAmino(message: _72.QueryClassesResponse): _72.QueryClassesResponseAmino;
                fromAminoMsg(object: _72.QueryClassesResponseAminoMsg): _72.QueryClassesResponse;
                toAminoMsg(message: _72.QueryClassesResponse): _72.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _72.QueryClassesResponseProtoMsg): _72.QueryClassesResponse;
                toProto(message: _72.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _72.QueryClassesResponse): _72.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _71.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Class;
                fromPartial(object: Partial<_71.Class>): _71.Class;
                fromAmino(object: _71.ClassAmino): _71.Class;
                toAmino(message: _71.Class): _71.ClassAmino;
                fromAminoMsg(object: _71.ClassAminoMsg): _71.Class;
                toAminoMsg(message: _71.Class): _71.ClassAminoMsg;
                fromProtoMsg(message: _71.ClassProtoMsg): _71.Class;
                toProto(message: _71.Class): Uint8Array;
                toProtoMsg(message: _71.Class): _71.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _71.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.NFT;
                fromPartial(object: Partial<_71.NFT>): _71.NFT;
                fromAmino(object: _71.NFTAmino): _71.NFT;
                toAmino(message: _71.NFT): _71.NFTAmino;
                fromAminoMsg(object: _71.NFTAminoMsg): _71.NFT;
                toAminoMsg(message: _71.NFT): _71.NFTAminoMsg;
                fromProtoMsg(message: _71.NFTProtoMsg): _71.NFT;
                toProto(message: _71.NFT): Uint8Array;
                toProtoMsg(message: _71.NFT): _71.NFTProtoMsg;
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
            Entry: {
                typeUrl: string;
                encode(message: _70.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Entry;
                fromPartial(object: Partial<_70.Entry>): _70.Entry;
                fromAmino(object: _70.EntryAmino): _70.Entry;
                toAmino(message: _70.Entry): _70.EntryAmino;
                fromAminoMsg(object: _70.EntryAminoMsg): _70.Entry;
                toAminoMsg(message: _70.Entry): _70.EntryAminoMsg;
                fromProtoMsg(message: _70.EntryProtoMsg): _70.Entry;
                toProto(message: _70.Entry): Uint8Array;
                toProtoMsg(message: _70.Entry): _70.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _69.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.EventSend;
                fromPartial(object: Partial<_69.EventSend>): _69.EventSend;
                fromAmino(object: _69.EventSendAmino): _69.EventSend;
                toAmino(message: _69.EventSend): _69.EventSendAmino;
                fromAminoMsg(object: _69.EventSendAminoMsg): _69.EventSend;
                toAminoMsg(message: _69.EventSend): _69.EventSendAminoMsg;
                fromProtoMsg(message: _69.EventSendProtoMsg): _69.EventSend;
                toProto(message: _69.EventSend): Uint8Array;
                toProtoMsg(message: _69.EventSend): _69.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _69.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.EventMint;
                fromPartial(object: Partial<_69.EventMint>): _69.EventMint;
                fromAmino(object: _69.EventMintAmino): _69.EventMint;
                toAmino(message: _69.EventMint): _69.EventMintAmino;
                fromAminoMsg(object: _69.EventMintAminoMsg): _69.EventMint;
                toAminoMsg(message: _69.EventMint): _69.EventMintAminoMsg;
                fromProtoMsg(message: _69.EventMintProtoMsg): _69.EventMint;
                toProto(message: _69.EventMint): Uint8Array;
                toProtoMsg(message: _69.EventMint): _69.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _69.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.EventBurn;
                fromPartial(object: Partial<_69.EventBurn>): _69.EventBurn;
                fromAmino(object: _69.EventBurnAmino): _69.EventBurn;
                toAmino(message: _69.EventBurn): _69.EventBurnAmino;
                fromAminoMsg(object: _69.EventBurnAminoMsg): _69.EventBurn;
                toAminoMsg(message: _69.EventBurn): _69.EventBurnAminoMsg;
                fromProtoMsg(message: _69.EventBurnProtoMsg): _69.EventBurn;
                toProto(message: _69.EventBurn): Uint8Array;
                toProtoMsg(message: _69.EventBurn): _69.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _74.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _74.Module;
                    fromPartial(_: Partial<_74.Module>): _74.Module;
                    fromAmino(_: _74.ModuleAmino): _74.Module;
                    toAmino(_: _74.Module): _74.ModuleAmino;
                    fromAminoMsg(object: _74.ModuleAminoMsg): _74.Module;
                    toAminoMsg(message: _74.Module): _74.ModuleAminoMsg;
                    fromProtoMsg(message: _74.ModuleProtoMsg): _74.Module;
                    toProto(message: _74.Module): Uint8Array;
                    toProtoMsg(message: _74.Module): _74.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _75.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.TableDescriptor;
                fromPartial(object: Partial<_75.TableDescriptor>): _75.TableDescriptor;
                fromAmino(object: _75.TableDescriptorAmino): _75.TableDescriptor;
                toAmino(message: _75.TableDescriptor): _75.TableDescriptorAmino;
                fromAminoMsg(object: _75.TableDescriptorAminoMsg): _75.TableDescriptor;
                toAminoMsg(message: _75.TableDescriptor): _75.TableDescriptorAminoMsg;
                fromProtoMsg(message: _75.TableDescriptorProtoMsg): _75.TableDescriptor;
                toProto(message: _75.TableDescriptor): Uint8Array;
                toProtoMsg(message: _75.TableDescriptor): _75.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _75.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_75.PrimaryKeyDescriptor>): _75.PrimaryKeyDescriptor;
                fromAmino(object: _75.PrimaryKeyDescriptorAmino): _75.PrimaryKeyDescriptor;
                toAmino(message: _75.PrimaryKeyDescriptor): _75.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _75.PrimaryKeyDescriptorAminoMsg): _75.PrimaryKeyDescriptor;
                toAminoMsg(message: _75.PrimaryKeyDescriptor): _75.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _75.PrimaryKeyDescriptorProtoMsg): _75.PrimaryKeyDescriptor;
                toProto(message: _75.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _75.PrimaryKeyDescriptor): _75.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _75.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_75.SecondaryIndexDescriptor>): _75.SecondaryIndexDescriptor;
                fromAmino(object: _75.SecondaryIndexDescriptorAmino): _75.SecondaryIndexDescriptor;
                toAmino(message: _75.SecondaryIndexDescriptor): _75.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _75.SecondaryIndexDescriptorAminoMsg): _75.SecondaryIndexDescriptor;
                toAminoMsg(message: _75.SecondaryIndexDescriptor): _75.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _75.SecondaryIndexDescriptorProtoMsg): _75.SecondaryIndexDescriptor;
                toProto(message: _75.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _75.SecondaryIndexDescriptor): _75.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _75.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.SingletonDescriptor;
                fromPartial(object: Partial<_75.SingletonDescriptor>): _75.SingletonDescriptor;
                fromAmino(object: _75.SingletonDescriptorAmino): _75.SingletonDescriptor;
                toAmino(message: _75.SingletonDescriptor): _75.SingletonDescriptorAmino;
                fromAminoMsg(object: _75.SingletonDescriptorAminoMsg): _75.SingletonDescriptor;
                toAminoMsg(message: _75.SingletonDescriptor): _75.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _75.SingletonDescriptorProtoMsg): _75.SingletonDescriptor;
                toProto(message: _75.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _75.SingletonDescriptor): _75.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _76.StorageType;
            storageTypeToJSON(object: _76.StorageType): string;
            StorageType: typeof _76.StorageType;
            StorageTypeSDKType: typeof _76.StorageType;
            StorageTypeAmino: typeof _76.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _76.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_76.ModuleSchemaDescriptor>): _76.ModuleSchemaDescriptor;
                fromAmino(object: _76.ModuleSchemaDescriptorAmino): _76.ModuleSchemaDescriptor;
                toAmino(message: _76.ModuleSchemaDescriptor): _76.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _76.ModuleSchemaDescriptorAminoMsg): _76.ModuleSchemaDescriptor;
                toAminoMsg(message: _76.ModuleSchemaDescriptor): _76.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _76.ModuleSchemaDescriptorProtoMsg): _76.ModuleSchemaDescriptor;
                toProto(message: _76.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _76.ModuleSchemaDescriptor): _76.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _76.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_76.ModuleSchemaDescriptor_FileEntry>): _76.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _76.ModuleSchemaDescriptor_FileEntryAmino): _76.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _76.ModuleSchemaDescriptor_FileEntry): _76.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _76.ModuleSchemaDescriptor_FileEntryAminoMsg): _76.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _76.ModuleSchemaDescriptor_FileEntry): _76.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _76.ModuleSchemaDescriptor_FileEntryProtoMsg): _76.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _76.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _76.ModuleSchemaDescriptor_FileEntry): _76.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _175.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _78.QueryParamsRequest): Promise<_78.QueryParamsResponse>;
                subspaces(request?: _78.QuerySubspacesRequest): Promise<_78.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _156.LCDQueryClient;
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
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _78.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _78.QuerySubspacesRequest;
                fromPartial(_: Partial<_78.QuerySubspacesRequest>): _78.QuerySubspacesRequest;
                fromAmino(_: _78.QuerySubspacesRequestAmino): _78.QuerySubspacesRequest;
                toAmino(_: _78.QuerySubspacesRequest): _78.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _78.QuerySubspacesRequestAminoMsg): _78.QuerySubspacesRequest;
                toAminoMsg(message: _78.QuerySubspacesRequest): _78.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _78.QuerySubspacesRequestProtoMsg): _78.QuerySubspacesRequest;
                toProto(message: _78.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _78.QuerySubspacesRequest): _78.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _78.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QuerySubspacesResponse;
                fromPartial(object: Partial<_78.QuerySubspacesResponse>): _78.QuerySubspacesResponse;
                fromAmino(object: _78.QuerySubspacesResponseAmino): _78.QuerySubspacesResponse;
                toAmino(message: _78.QuerySubspacesResponse): _78.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _78.QuerySubspacesResponseAminoMsg): _78.QuerySubspacesResponse;
                toAminoMsg(message: _78.QuerySubspacesResponse): _78.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _78.QuerySubspacesResponseProtoMsg): _78.QuerySubspacesResponse;
                toProto(message: _78.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _78.QuerySubspacesResponse): _78.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _78.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Subspace;
                fromPartial(object: Partial<_78.Subspace>): _78.Subspace;
                fromAmino(object: _78.SubspaceAmino): _78.Subspace;
                toAmino(message: _78.Subspace): _78.SubspaceAmino;
                fromAminoMsg(object: _78.SubspaceAminoMsg): _78.Subspace;
                toAminoMsg(message: _78.Subspace): _78.SubspaceAminoMsg;
                fromProtoMsg(message: _78.SubspaceProtoMsg): _78.Subspace;
                toProto(message: _78.Subspace): Uint8Array;
                toProtoMsg(message: _78.Subspace): _78.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _77.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.ParameterChangeProposal;
                fromPartial(object: Partial<_77.ParameterChangeProposal>): _77.ParameterChangeProposal;
                fromAmino(object: _77.ParameterChangeProposalAmino): _77.ParameterChangeProposal;
                toAmino(message: _77.ParameterChangeProposal): _77.ParameterChangeProposalAmino;
                fromAminoMsg(object: _77.ParameterChangeProposalAminoMsg): _77.ParameterChangeProposal;
                toAminoMsg(message: _77.ParameterChangeProposal): _77.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _77.ParameterChangeProposalProtoMsg): _77.ParameterChangeProposal;
                toProto(message: _77.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _77.ParameterChangeProposal): _77.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _77.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.ParamChange;
                fromPartial(object: Partial<_77.ParamChange>): _77.ParamChange;
                fromAmino(object: _77.ParamChangeAmino): _77.ParamChange;
                toAmino(message: _77.ParamChange): _77.ParamChangeAmino;
                fromAminoMsg(object: _77.ParamChangeAminoMsg): _77.ParamChange;
                toAminoMsg(message: _77.ParamChange): _77.ParamChangeAminoMsg;
                fromProtoMsg(message: _77.ParamChangeProtoMsg): _77.ParamChange;
                toProto(message: _77.ParamChange): Uint8Array;
                toProtoMsg(message: _77.ParamChange): _77.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _190.MsgClientImpl;
            QueryClientImpl: typeof _176.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _80.QueryParamsRequest): Promise<_80.QueryParamsResponse>;
                signingInfo(request: _80.QuerySigningInfoRequest): Promise<_80.QuerySigningInfoResponse>;
                signingInfos(request?: _80.QuerySigningInfosRequest): Promise<_80.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _157.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _82.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _82.MsgUnjail): {
                        typeUrl: string;
                        value: _82.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _82.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _82.MsgUnjail): {
                        typeUrl: string;
                        value: _82.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _82.MsgUnjail) => _82.MsgUnjailAmino;
                    fromAmino: (object: _82.MsgUnjailAmino) => _82.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _82.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MsgUnjail;
                fromPartial(object: Partial<_82.MsgUnjail>): _82.MsgUnjail;
                fromAmino(object: _82.MsgUnjailAmino): _82.MsgUnjail;
                toAmino(message: _82.MsgUnjail): _82.MsgUnjailAmino;
                fromAminoMsg(object: _82.MsgUnjailAminoMsg): _82.MsgUnjail;
                toAminoMsg(message: _82.MsgUnjail): _82.MsgUnjailAminoMsg;
                fromProtoMsg(message: _82.MsgUnjailProtoMsg): _82.MsgUnjail;
                toProto(message: _82.MsgUnjail): Uint8Array;
                toProtoMsg(message: _82.MsgUnjail): _82.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _82.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _82.MsgUnjailResponse;
                fromPartial(_: Partial<_82.MsgUnjailResponse>): _82.MsgUnjailResponse;
                fromAmino(_: _82.MsgUnjailResponseAmino): _82.MsgUnjailResponse;
                toAmino(_: _82.MsgUnjailResponse): _82.MsgUnjailResponseAmino;
                fromAminoMsg(object: _82.MsgUnjailResponseAminoMsg): _82.MsgUnjailResponse;
                toAminoMsg(message: _82.MsgUnjailResponse): _82.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _82.MsgUnjailResponseProtoMsg): _82.MsgUnjailResponse;
                toProto(message: _82.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _82.MsgUnjailResponse): _82.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _81.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ValidatorSigningInfo;
                fromPartial(object: Partial<_81.ValidatorSigningInfo>): _81.ValidatorSigningInfo;
                fromAmino(object: _81.ValidatorSigningInfoAmino): _81.ValidatorSigningInfo;
                toAmino(message: _81.ValidatorSigningInfo): _81.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _81.ValidatorSigningInfoAminoMsg): _81.ValidatorSigningInfo;
                toAminoMsg(message: _81.ValidatorSigningInfo): _81.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _81.ValidatorSigningInfoProtoMsg): _81.ValidatorSigningInfo;
                toProto(message: _81.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _81.ValidatorSigningInfo): _81.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _81.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.Params;
                fromPartial(object: Partial<_81.Params>): _81.Params;
                fromAmino(object: _81.ParamsAmino): _81.Params;
                toAmino(message: _81.Params): _81.ParamsAmino;
                fromAminoMsg(object: _81.ParamsAminoMsg): _81.Params;
                toAminoMsg(message: _81.Params): _81.ParamsAminoMsg;
                fromProtoMsg(message: _81.ParamsProtoMsg): _81.Params;
                toProto(message: _81.Params): Uint8Array;
                toProtoMsg(message: _81.Params): _81.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _80.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.QueryParamsRequest;
                fromPartial(_: Partial<_80.QueryParamsRequest>): _80.QueryParamsRequest;
                fromAmino(_: _80.QueryParamsRequestAmino): _80.QueryParamsRequest;
                toAmino(_: _80.QueryParamsRequest): _80.QueryParamsRequestAmino;
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
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _80.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QuerySigningInfoRequest;
                fromPartial(object: Partial<_80.QuerySigningInfoRequest>): _80.QuerySigningInfoRequest;
                fromAmino(object: _80.QuerySigningInfoRequestAmino): _80.QuerySigningInfoRequest;
                toAmino(message: _80.QuerySigningInfoRequest): _80.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _80.QuerySigningInfoRequestAminoMsg): _80.QuerySigningInfoRequest;
                toAminoMsg(message: _80.QuerySigningInfoRequest): _80.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _80.QuerySigningInfoRequestProtoMsg): _80.QuerySigningInfoRequest;
                toProto(message: _80.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _80.QuerySigningInfoRequest): _80.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _80.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QuerySigningInfoResponse;
                fromPartial(object: Partial<_80.QuerySigningInfoResponse>): _80.QuerySigningInfoResponse;
                fromAmino(object: _80.QuerySigningInfoResponseAmino): _80.QuerySigningInfoResponse;
                toAmino(message: _80.QuerySigningInfoResponse): _80.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _80.QuerySigningInfoResponseAminoMsg): _80.QuerySigningInfoResponse;
                toAminoMsg(message: _80.QuerySigningInfoResponse): _80.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _80.QuerySigningInfoResponseProtoMsg): _80.QuerySigningInfoResponse;
                toProto(message: _80.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _80.QuerySigningInfoResponse): _80.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _80.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QuerySigningInfosRequest;
                fromPartial(object: Partial<_80.QuerySigningInfosRequest>): _80.QuerySigningInfosRequest;
                fromAmino(object: _80.QuerySigningInfosRequestAmino): _80.QuerySigningInfosRequest;
                toAmino(message: _80.QuerySigningInfosRequest): _80.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _80.QuerySigningInfosRequestAminoMsg): _80.QuerySigningInfosRequest;
                toAminoMsg(message: _80.QuerySigningInfosRequest): _80.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _80.QuerySigningInfosRequestProtoMsg): _80.QuerySigningInfosRequest;
                toProto(message: _80.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _80.QuerySigningInfosRequest): _80.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _80.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QuerySigningInfosResponse;
                fromPartial(object: Partial<_80.QuerySigningInfosResponse>): _80.QuerySigningInfosResponse;
                fromAmino(object: _80.QuerySigningInfosResponseAmino): _80.QuerySigningInfosResponse;
                toAmino(message: _80.QuerySigningInfosResponse): _80.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _80.QuerySigningInfosResponseAminoMsg): _80.QuerySigningInfosResponse;
                toAminoMsg(message: _80.QuerySigningInfosResponse): _80.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _80.QuerySigningInfosResponseProtoMsg): _80.QuerySigningInfosResponse;
                toProto(message: _80.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _80.QuerySigningInfosResponse): _80.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _79.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.SigningInfo;
                fromPartial(object: Partial<_79.SigningInfo>): _79.SigningInfo;
                fromAmino(object: _79.SigningInfoAmino): _79.SigningInfo;
                toAmino(message: _79.SigningInfo): _79.SigningInfoAmino;
                fromAminoMsg(object: _79.SigningInfoAminoMsg): _79.SigningInfo;
                toAminoMsg(message: _79.SigningInfo): _79.SigningInfoAminoMsg;
                fromProtoMsg(message: _79.SigningInfoProtoMsg): _79.SigningInfo;
                toProto(message: _79.SigningInfo): Uint8Array;
                toProtoMsg(message: _79.SigningInfo): _79.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _79.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.ValidatorMissedBlocks;
                fromPartial(object: Partial<_79.ValidatorMissedBlocks>): _79.ValidatorMissedBlocks;
                fromAmino(object: _79.ValidatorMissedBlocksAmino): _79.ValidatorMissedBlocks;
                toAmino(message: _79.ValidatorMissedBlocks): _79.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _79.ValidatorMissedBlocksAminoMsg): _79.ValidatorMissedBlocks;
                toAminoMsg(message: _79.ValidatorMissedBlocks): _79.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _79.ValidatorMissedBlocksProtoMsg): _79.ValidatorMissedBlocks;
                toProto(message: _79.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _79.ValidatorMissedBlocks): _79.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _79.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MissedBlock;
                fromPartial(object: Partial<_79.MissedBlock>): _79.MissedBlock;
                fromAmino(object: _79.MissedBlockAmino): _79.MissedBlock;
                toAmino(message: _79.MissedBlock): _79.MissedBlockAmino;
                fromAminoMsg(object: _79.MissedBlockAminoMsg): _79.MissedBlock;
                toAminoMsg(message: _79.MissedBlock): _79.MissedBlockAminoMsg;
                fromProtoMsg(message: _79.MissedBlockProtoMsg): _79.MissedBlock;
                toProto(message: _79.MissedBlock): Uint8Array;
                toProtoMsg(message: _79.MissedBlock): _79.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _191.MsgClientImpl;
            QueryClientImpl: typeof _177.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _85.QueryValidatorsRequest): Promise<_85.QueryValidatorsResponse>;
                validator(request: _85.QueryValidatorRequest): Promise<_85.QueryValidatorResponse>;
                validatorDelegations(request: _85.QueryValidatorDelegationsRequest): Promise<_85.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _85.QueryValidatorUnbondingDelegationsRequest): Promise<_85.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _85.QueryDelegationRequest): Promise<_85.QueryDelegationResponse>;
                unbondingDelegation(request: _85.QueryUnbondingDelegationRequest): Promise<_85.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _85.QueryDelegatorDelegationsRequest): Promise<_85.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _85.QueryDelegatorUnbondingDelegationsRequest): Promise<_85.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _85.QueryRedelegationsRequest): Promise<_85.QueryRedelegationsResponse>;
                delegatorValidators(request: _85.QueryDelegatorValidatorsRequest): Promise<_85.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _85.QueryDelegatorValidatorRequest): Promise<_85.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _85.QueryHistoricalInfoRequest): Promise<_85.QueryHistoricalInfoResponse>;
                pool(request?: _85.QueryPoolRequest): Promise<_85.QueryPoolResponse>;
                params(request?: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _158.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _87.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _87.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _87.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _87.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _87.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _87.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _87.MsgCreateValidator): {
                        typeUrl: string;
                        value: _87.MsgCreateValidator;
                    };
                    editValidator(value: _87.MsgEditValidator): {
                        typeUrl: string;
                        value: _87.MsgEditValidator;
                    };
                    delegate(value: _87.MsgDelegate): {
                        typeUrl: string;
                        value: _87.MsgDelegate;
                    };
                    beginRedelegate(value: _87.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _87.MsgBeginRedelegate;
                    };
                    undelegate(value: _87.MsgUndelegate): {
                        typeUrl: string;
                        value: _87.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _87.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _87.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _87.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _87.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _87.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _87.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _87.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _87.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _87.MsgCreateValidator): {
                        typeUrl: string;
                        value: _87.MsgCreateValidator;
                    };
                    editValidator(value: _87.MsgEditValidator): {
                        typeUrl: string;
                        value: _87.MsgEditValidator;
                    };
                    delegate(value: _87.MsgDelegate): {
                        typeUrl: string;
                        value: _87.MsgDelegate;
                    };
                    beginRedelegate(value: _87.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _87.MsgBeginRedelegate;
                    };
                    undelegate(value: _87.MsgUndelegate): {
                        typeUrl: string;
                        value: _87.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _87.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _87.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _87.MsgCreateValidator) => _87.MsgCreateValidatorAmino;
                    fromAmino: (object: _87.MsgCreateValidatorAmino) => _87.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _87.MsgEditValidator) => _87.MsgEditValidatorAmino;
                    fromAmino: (object: _87.MsgEditValidatorAmino) => _87.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _87.MsgDelegate) => _87.MsgDelegateAmino;
                    fromAmino: (object: _87.MsgDelegateAmino) => _87.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _87.MsgBeginRedelegate) => _87.MsgBeginRedelegateAmino;
                    fromAmino: (object: _87.MsgBeginRedelegateAmino) => _87.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _87.MsgUndelegate) => _87.MsgUndelegateAmino;
                    fromAmino: (object: _87.MsgUndelegateAmino) => _87.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _87.MsgCancelUnbondingDelegation) => _87.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _87.MsgCancelUnbondingDelegationAmino) => _87.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _87.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgCreateValidator;
                fromPartial(object: Partial<_87.MsgCreateValidator>): _87.MsgCreateValidator;
                fromAmino(object: _87.MsgCreateValidatorAmino): _87.MsgCreateValidator;
                toAmino(message: _87.MsgCreateValidator): _87.MsgCreateValidatorAmino;
                fromAminoMsg(object: _87.MsgCreateValidatorAminoMsg): _87.MsgCreateValidator;
                toAminoMsg(message: _87.MsgCreateValidator): _87.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _87.MsgCreateValidatorProtoMsg): _87.MsgCreateValidator;
                toProto(message: _87.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _87.MsgCreateValidator): _87.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _87.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_87.MsgCreateValidatorResponse>): _87.MsgCreateValidatorResponse;
                fromAmino(_: _87.MsgCreateValidatorResponseAmino): _87.MsgCreateValidatorResponse;
                toAmino(_: _87.MsgCreateValidatorResponse): _87.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _87.MsgCreateValidatorResponseAminoMsg): _87.MsgCreateValidatorResponse;
                toAminoMsg(message: _87.MsgCreateValidatorResponse): _87.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _87.MsgCreateValidatorResponseProtoMsg): _87.MsgCreateValidatorResponse;
                toProto(message: _87.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _87.MsgCreateValidatorResponse): _87.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _87.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgEditValidator;
                fromPartial(object: Partial<_87.MsgEditValidator>): _87.MsgEditValidator;
                fromAmino(object: _87.MsgEditValidatorAmino): _87.MsgEditValidator;
                toAmino(message: _87.MsgEditValidator): _87.MsgEditValidatorAmino;
                fromAminoMsg(object: _87.MsgEditValidatorAminoMsg): _87.MsgEditValidator;
                toAminoMsg(message: _87.MsgEditValidator): _87.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _87.MsgEditValidatorProtoMsg): _87.MsgEditValidator;
                toProto(message: _87.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _87.MsgEditValidator): _87.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _87.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgEditValidatorResponse;
                fromPartial(_: Partial<_87.MsgEditValidatorResponse>): _87.MsgEditValidatorResponse;
                fromAmino(_: _87.MsgEditValidatorResponseAmino): _87.MsgEditValidatorResponse;
                toAmino(_: _87.MsgEditValidatorResponse): _87.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _87.MsgEditValidatorResponseAminoMsg): _87.MsgEditValidatorResponse;
                toAminoMsg(message: _87.MsgEditValidatorResponse): _87.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _87.MsgEditValidatorResponseProtoMsg): _87.MsgEditValidatorResponse;
                toProto(message: _87.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _87.MsgEditValidatorResponse): _87.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _87.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgDelegate;
                fromPartial(object: Partial<_87.MsgDelegate>): _87.MsgDelegate;
                fromAmino(object: _87.MsgDelegateAmino): _87.MsgDelegate;
                toAmino(message: _87.MsgDelegate): _87.MsgDelegateAmino;
                fromAminoMsg(object: _87.MsgDelegateAminoMsg): _87.MsgDelegate;
                toAminoMsg(message: _87.MsgDelegate): _87.MsgDelegateAminoMsg;
                fromProtoMsg(message: _87.MsgDelegateProtoMsg): _87.MsgDelegate;
                toProto(message: _87.MsgDelegate): Uint8Array;
                toProtoMsg(message: _87.MsgDelegate): _87.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _87.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgDelegateResponse;
                fromPartial(_: Partial<_87.MsgDelegateResponse>): _87.MsgDelegateResponse;
                fromAmino(_: _87.MsgDelegateResponseAmino): _87.MsgDelegateResponse;
                toAmino(_: _87.MsgDelegateResponse): _87.MsgDelegateResponseAmino;
                fromAminoMsg(object: _87.MsgDelegateResponseAminoMsg): _87.MsgDelegateResponse;
                toAminoMsg(message: _87.MsgDelegateResponse): _87.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _87.MsgDelegateResponseProtoMsg): _87.MsgDelegateResponse;
                toProto(message: _87.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _87.MsgDelegateResponse): _87.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _87.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgBeginRedelegate;
                fromPartial(object: Partial<_87.MsgBeginRedelegate>): _87.MsgBeginRedelegate;
                fromAmino(object: _87.MsgBeginRedelegateAmino): _87.MsgBeginRedelegate;
                toAmino(message: _87.MsgBeginRedelegate): _87.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _87.MsgBeginRedelegateAminoMsg): _87.MsgBeginRedelegate;
                toAminoMsg(message: _87.MsgBeginRedelegate): _87.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _87.MsgBeginRedelegateProtoMsg): _87.MsgBeginRedelegate;
                toProto(message: _87.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _87.MsgBeginRedelegate): _87.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _87.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_87.MsgBeginRedelegateResponse>): _87.MsgBeginRedelegateResponse;
                fromAmino(object: _87.MsgBeginRedelegateResponseAmino): _87.MsgBeginRedelegateResponse;
                toAmino(message: _87.MsgBeginRedelegateResponse): _87.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _87.MsgBeginRedelegateResponseAminoMsg): _87.MsgBeginRedelegateResponse;
                toAminoMsg(message: _87.MsgBeginRedelegateResponse): _87.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _87.MsgBeginRedelegateResponseProtoMsg): _87.MsgBeginRedelegateResponse;
                toProto(message: _87.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _87.MsgBeginRedelegateResponse): _87.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _87.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgUndelegate;
                fromPartial(object: Partial<_87.MsgUndelegate>): _87.MsgUndelegate;
                fromAmino(object: _87.MsgUndelegateAmino): _87.MsgUndelegate;
                toAmino(message: _87.MsgUndelegate): _87.MsgUndelegateAmino;
                fromAminoMsg(object: _87.MsgUndelegateAminoMsg): _87.MsgUndelegate;
                toAminoMsg(message: _87.MsgUndelegate): _87.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _87.MsgUndelegateProtoMsg): _87.MsgUndelegate;
                toProto(message: _87.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _87.MsgUndelegate): _87.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _87.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgUndelegateResponse;
                fromPartial(object: Partial<_87.MsgUndelegateResponse>): _87.MsgUndelegateResponse;
                fromAmino(object: _87.MsgUndelegateResponseAmino): _87.MsgUndelegateResponse;
                toAmino(message: _87.MsgUndelegateResponse): _87.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _87.MsgUndelegateResponseAminoMsg): _87.MsgUndelegateResponse;
                toAminoMsg(message: _87.MsgUndelegateResponse): _87.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _87.MsgUndelegateResponseProtoMsg): _87.MsgUndelegateResponse;
                toProto(message: _87.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _87.MsgUndelegateResponse): _87.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _87.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_87.MsgCancelUnbondingDelegation>): _87.MsgCancelUnbondingDelegation;
                fromAmino(object: _87.MsgCancelUnbondingDelegationAmino): _87.MsgCancelUnbondingDelegation;
                toAmino(message: _87.MsgCancelUnbondingDelegation): _87.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _87.MsgCancelUnbondingDelegationAminoMsg): _87.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _87.MsgCancelUnbondingDelegation): _87.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _87.MsgCancelUnbondingDelegationProtoMsg): _87.MsgCancelUnbondingDelegation;
                toProto(message: _87.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _87.MsgCancelUnbondingDelegation): _87.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _87.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_87.MsgCancelUnbondingDelegationResponse>): _87.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _87.MsgCancelUnbondingDelegationResponseAmino): _87.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _87.MsgCancelUnbondingDelegationResponse): _87.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _87.MsgCancelUnbondingDelegationResponseAminoMsg): _87.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _87.MsgCancelUnbondingDelegationResponse): _87.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _87.MsgCancelUnbondingDelegationResponseProtoMsg): _87.MsgCancelUnbondingDelegationResponse;
                toProto(message: _87.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _87.MsgCancelUnbondingDelegationResponse): _87.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _86.BondStatus;
            bondStatusToJSON(object: _86.BondStatus): string;
            BondStatus: typeof _86.BondStatus;
            BondStatusSDKType: typeof _86.BondStatus;
            BondStatusAmino: typeof _86.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _86.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.HistoricalInfo;
                fromPartial(object: Partial<_86.HistoricalInfo>): _86.HistoricalInfo;
                fromAmino(object: _86.HistoricalInfoAmino): _86.HistoricalInfo;
                toAmino(message: _86.HistoricalInfo): _86.HistoricalInfoAmino;
                fromAminoMsg(object: _86.HistoricalInfoAminoMsg): _86.HistoricalInfo;
                toAminoMsg(message: _86.HistoricalInfo): _86.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _86.HistoricalInfoProtoMsg): _86.HistoricalInfo;
                toProto(message: _86.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _86.HistoricalInfo): _86.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _86.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.CommissionRates;
                fromPartial(object: Partial<_86.CommissionRates>): _86.CommissionRates;
                fromAmino(object: _86.CommissionRatesAmino): _86.CommissionRates;
                toAmino(message: _86.CommissionRates): _86.CommissionRatesAmino;
                fromAminoMsg(object: _86.CommissionRatesAminoMsg): _86.CommissionRates;
                toAminoMsg(message: _86.CommissionRates): _86.CommissionRatesAminoMsg;
                fromProtoMsg(message: _86.CommissionRatesProtoMsg): _86.CommissionRates;
                toProto(message: _86.CommissionRates): Uint8Array;
                toProtoMsg(message: _86.CommissionRates): _86.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _86.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.Commission;
                fromPartial(object: Partial<_86.Commission>): _86.Commission;
                fromAmino(object: _86.CommissionAmino): _86.Commission;
                toAmino(message: _86.Commission): _86.CommissionAmino;
                fromAminoMsg(object: _86.CommissionAminoMsg): _86.Commission;
                toAminoMsg(message: _86.Commission): _86.CommissionAminoMsg;
                fromProtoMsg(message: _86.CommissionProtoMsg): _86.Commission;
                toProto(message: _86.Commission): Uint8Array;
                toProtoMsg(message: _86.Commission): _86.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _86.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.Description;
                fromPartial(object: Partial<_86.Description>): _86.Description;
                fromAmino(object: _86.DescriptionAmino): _86.Description;
                toAmino(message: _86.Description): _86.DescriptionAmino;
                fromAminoMsg(object: _86.DescriptionAminoMsg): _86.Description;
                toAminoMsg(message: _86.Description): _86.DescriptionAminoMsg;
                fromProtoMsg(message: _86.DescriptionProtoMsg): _86.Description;
                toProto(message: _86.Description): Uint8Array;
                toProtoMsg(message: _86.Description): _86.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _86.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.Validator;
                fromPartial(object: Partial<_86.Validator>): _86.Validator;
                fromAmino(object: _86.ValidatorAmino): _86.Validator;
                toAmino(message: _86.Validator): _86.ValidatorAmino;
                fromAminoMsg(object: _86.ValidatorAminoMsg): _86.Validator;
                toAminoMsg(message: _86.Validator): _86.ValidatorAminoMsg;
                fromProtoMsg(message: _86.ValidatorProtoMsg): _86.Validator;
                toProto(message: _86.Validator): Uint8Array;
                toProtoMsg(message: _86.Validator): _86.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _86.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.ValAddresses;
                fromPartial(object: Partial<_86.ValAddresses>): _86.ValAddresses;
                fromAmino(object: _86.ValAddressesAmino): _86.ValAddresses;
                toAmino(message: _86.ValAddresses): _86.ValAddressesAmino;
                fromAminoMsg(object: _86.ValAddressesAminoMsg): _86.ValAddresses;
                toAminoMsg(message: _86.ValAddresses): _86.ValAddressesAminoMsg;
                fromProtoMsg(message: _86.ValAddressesProtoMsg): _86.ValAddresses;
                toProto(message: _86.ValAddresses): Uint8Array;
                toProtoMsg(message: _86.ValAddresses): _86.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _86.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.DVPair;
                fromPartial(object: Partial<_86.DVPair>): _86.DVPair;
                fromAmino(object: _86.DVPairAmino): _86.DVPair;
                toAmino(message: _86.DVPair): _86.DVPairAmino;
                fromAminoMsg(object: _86.DVPairAminoMsg): _86.DVPair;
                toAminoMsg(message: _86.DVPair): _86.DVPairAminoMsg;
                fromProtoMsg(message: _86.DVPairProtoMsg): _86.DVPair;
                toProto(message: _86.DVPair): Uint8Array;
                toProtoMsg(message: _86.DVPair): _86.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _86.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.DVPairs;
                fromPartial(object: Partial<_86.DVPairs>): _86.DVPairs;
                fromAmino(object: _86.DVPairsAmino): _86.DVPairs;
                toAmino(message: _86.DVPairs): _86.DVPairsAmino;
                fromAminoMsg(object: _86.DVPairsAminoMsg): _86.DVPairs;
                toAminoMsg(message: _86.DVPairs): _86.DVPairsAminoMsg;
                fromProtoMsg(message: _86.DVPairsProtoMsg): _86.DVPairs;
                toProto(message: _86.DVPairs): Uint8Array;
                toProtoMsg(message: _86.DVPairs): _86.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _86.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.DVVTriplet;
                fromPartial(object: Partial<_86.DVVTriplet>): _86.DVVTriplet;
                fromAmino(object: _86.DVVTripletAmino): _86.DVVTriplet;
                toAmino(message: _86.DVVTriplet): _86.DVVTripletAmino;
                fromAminoMsg(object: _86.DVVTripletAminoMsg): _86.DVVTriplet;
                toAminoMsg(message: _86.DVVTriplet): _86.DVVTripletAminoMsg;
                fromProtoMsg(message: _86.DVVTripletProtoMsg): _86.DVVTriplet;
                toProto(message: _86.DVVTriplet): Uint8Array;
                toProtoMsg(message: _86.DVVTriplet): _86.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _86.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.DVVTriplets;
                fromPartial(object: Partial<_86.DVVTriplets>): _86.DVVTriplets;
                fromAmino(object: _86.DVVTripletsAmino): _86.DVVTriplets;
                toAmino(message: _86.DVVTriplets): _86.DVVTripletsAmino;
                fromAminoMsg(object: _86.DVVTripletsAminoMsg): _86.DVVTriplets;
                toAminoMsg(message: _86.DVVTriplets): _86.DVVTripletsAminoMsg;
                fromProtoMsg(message: _86.DVVTripletsProtoMsg): _86.DVVTriplets;
                toProto(message: _86.DVVTriplets): Uint8Array;
                toProtoMsg(message: _86.DVVTriplets): _86.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _86.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.Delegation;
                fromPartial(object: Partial<_86.Delegation>): _86.Delegation;
                fromAmino(object: _86.DelegationAmino): _86.Delegation;
                toAmino(message: _86.Delegation): _86.DelegationAmino;
                fromAminoMsg(object: _86.DelegationAminoMsg): _86.Delegation;
                toAminoMsg(message: _86.Delegation): _86.DelegationAminoMsg;
                fromProtoMsg(message: _86.DelegationProtoMsg): _86.Delegation;
                toProto(message: _86.Delegation): Uint8Array;
                toProtoMsg(message: _86.Delegation): _86.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _86.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.UnbondingDelegation;
                fromPartial(object: Partial<_86.UnbondingDelegation>): _86.UnbondingDelegation;
                fromAmino(object: _86.UnbondingDelegationAmino): _86.UnbondingDelegation;
                toAmino(message: _86.UnbondingDelegation): _86.UnbondingDelegationAmino;
                fromAminoMsg(object: _86.UnbondingDelegationAminoMsg): _86.UnbondingDelegation;
                toAminoMsg(message: _86.UnbondingDelegation): _86.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _86.UnbondingDelegationProtoMsg): _86.UnbondingDelegation;
                toProto(message: _86.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _86.UnbondingDelegation): _86.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _86.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.UnbondingDelegationEntry;
                fromPartial(object: Partial<_86.UnbondingDelegationEntry>): _86.UnbondingDelegationEntry;
                fromAmino(object: _86.UnbondingDelegationEntryAmino): _86.UnbondingDelegationEntry;
                toAmino(message: _86.UnbondingDelegationEntry): _86.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _86.UnbondingDelegationEntryAminoMsg): _86.UnbondingDelegationEntry;
                toAminoMsg(message: _86.UnbondingDelegationEntry): _86.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _86.UnbondingDelegationEntryProtoMsg): _86.UnbondingDelegationEntry;
                toProto(message: _86.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _86.UnbondingDelegationEntry): _86.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _86.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.RedelegationEntry;
                fromPartial(object: Partial<_86.RedelegationEntry>): _86.RedelegationEntry;
                fromAmino(object: _86.RedelegationEntryAmino): _86.RedelegationEntry;
                toAmino(message: _86.RedelegationEntry): _86.RedelegationEntryAmino;
                fromAminoMsg(object: _86.RedelegationEntryAminoMsg): _86.RedelegationEntry;
                toAminoMsg(message: _86.RedelegationEntry): _86.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _86.RedelegationEntryProtoMsg): _86.RedelegationEntry;
                toProto(message: _86.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _86.RedelegationEntry): _86.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _86.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.Redelegation;
                fromPartial(object: Partial<_86.Redelegation>): _86.Redelegation;
                fromAmino(object: _86.RedelegationAmino): _86.Redelegation;
                toAmino(message: _86.Redelegation): _86.RedelegationAmino;
                fromAminoMsg(object: _86.RedelegationAminoMsg): _86.Redelegation;
                toAminoMsg(message: _86.Redelegation): _86.RedelegationAminoMsg;
                fromProtoMsg(message: _86.RedelegationProtoMsg): _86.Redelegation;
                toProto(message: _86.Redelegation): Uint8Array;
                toProtoMsg(message: _86.Redelegation): _86.RedelegationProtoMsg;
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
            DelegationResponse: {
                typeUrl: string;
                encode(message: _86.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.DelegationResponse;
                fromPartial(object: Partial<_86.DelegationResponse>): _86.DelegationResponse;
                fromAmino(object: _86.DelegationResponseAmino): _86.DelegationResponse;
                toAmino(message: _86.DelegationResponse): _86.DelegationResponseAmino;
                fromAminoMsg(object: _86.DelegationResponseAminoMsg): _86.DelegationResponse;
                toAminoMsg(message: _86.DelegationResponse): _86.DelegationResponseAminoMsg;
                fromProtoMsg(message: _86.DelegationResponseProtoMsg): _86.DelegationResponse;
                toProto(message: _86.DelegationResponse): Uint8Array;
                toProtoMsg(message: _86.DelegationResponse): _86.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _86.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.RedelegationEntryResponse;
                fromPartial(object: Partial<_86.RedelegationEntryResponse>): _86.RedelegationEntryResponse;
                fromAmino(object: _86.RedelegationEntryResponseAmino): _86.RedelegationEntryResponse;
                toAmino(message: _86.RedelegationEntryResponse): _86.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _86.RedelegationEntryResponseAminoMsg): _86.RedelegationEntryResponse;
                toAminoMsg(message: _86.RedelegationEntryResponse): _86.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _86.RedelegationEntryResponseProtoMsg): _86.RedelegationEntryResponse;
                toProto(message: _86.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _86.RedelegationEntryResponse): _86.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _86.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.RedelegationResponse;
                fromPartial(object: Partial<_86.RedelegationResponse>): _86.RedelegationResponse;
                fromAmino(object: _86.RedelegationResponseAmino): _86.RedelegationResponse;
                toAmino(message: _86.RedelegationResponse): _86.RedelegationResponseAmino;
                fromAminoMsg(object: _86.RedelegationResponseAminoMsg): _86.RedelegationResponse;
                toAminoMsg(message: _86.RedelegationResponse): _86.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _86.RedelegationResponseProtoMsg): _86.RedelegationResponse;
                toProto(message: _86.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _86.RedelegationResponse): _86.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _86.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.Pool;
                fromPartial(object: Partial<_86.Pool>): _86.Pool;
                fromAmino(object: _86.PoolAmino): _86.Pool;
                toAmino(message: _86.Pool): _86.PoolAmino;
                fromAminoMsg(object: _86.PoolAminoMsg): _86.Pool;
                toAminoMsg(message: _86.Pool): _86.PoolAminoMsg;
                fromProtoMsg(message: _86.PoolProtoMsg): _86.Pool;
                toProto(message: _86.Pool): Uint8Array;
                toProtoMsg(message: _86.Pool): _86.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _85.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryValidatorsRequest;
                fromPartial(object: Partial<_85.QueryValidatorsRequest>): _85.QueryValidatorsRequest;
                fromAmino(object: _85.QueryValidatorsRequestAmino): _85.QueryValidatorsRequest;
                toAmino(message: _85.QueryValidatorsRequest): _85.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _85.QueryValidatorsRequestAminoMsg): _85.QueryValidatorsRequest;
                toAminoMsg(message: _85.QueryValidatorsRequest): _85.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _85.QueryValidatorsRequestProtoMsg): _85.QueryValidatorsRequest;
                toProto(message: _85.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _85.QueryValidatorsRequest): _85.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _85.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryValidatorsResponse;
                fromPartial(object: Partial<_85.QueryValidatorsResponse>): _85.QueryValidatorsResponse;
                fromAmino(object: _85.QueryValidatorsResponseAmino): _85.QueryValidatorsResponse;
                toAmino(message: _85.QueryValidatorsResponse): _85.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _85.QueryValidatorsResponseAminoMsg): _85.QueryValidatorsResponse;
                toAminoMsg(message: _85.QueryValidatorsResponse): _85.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _85.QueryValidatorsResponseProtoMsg): _85.QueryValidatorsResponse;
                toProto(message: _85.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _85.QueryValidatorsResponse): _85.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _85.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryValidatorRequest;
                fromPartial(object: Partial<_85.QueryValidatorRequest>): _85.QueryValidatorRequest;
                fromAmino(object: _85.QueryValidatorRequestAmino): _85.QueryValidatorRequest;
                toAmino(message: _85.QueryValidatorRequest): _85.QueryValidatorRequestAmino;
                fromAminoMsg(object: _85.QueryValidatorRequestAminoMsg): _85.QueryValidatorRequest;
                toAminoMsg(message: _85.QueryValidatorRequest): _85.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _85.QueryValidatorRequestProtoMsg): _85.QueryValidatorRequest;
                toProto(message: _85.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _85.QueryValidatorRequest): _85.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _85.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryValidatorResponse;
                fromPartial(object: Partial<_85.QueryValidatorResponse>): _85.QueryValidatorResponse;
                fromAmino(object: _85.QueryValidatorResponseAmino): _85.QueryValidatorResponse;
                toAmino(message: _85.QueryValidatorResponse): _85.QueryValidatorResponseAmino;
                fromAminoMsg(object: _85.QueryValidatorResponseAminoMsg): _85.QueryValidatorResponse;
                toAminoMsg(message: _85.QueryValidatorResponse): _85.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _85.QueryValidatorResponseProtoMsg): _85.QueryValidatorResponse;
                toProto(message: _85.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _85.QueryValidatorResponse): _85.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _85.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_85.QueryValidatorDelegationsRequest>): _85.QueryValidatorDelegationsRequest;
                fromAmino(object: _85.QueryValidatorDelegationsRequestAmino): _85.QueryValidatorDelegationsRequest;
                toAmino(message: _85.QueryValidatorDelegationsRequest): _85.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _85.QueryValidatorDelegationsRequestAminoMsg): _85.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _85.QueryValidatorDelegationsRequest): _85.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _85.QueryValidatorDelegationsRequestProtoMsg): _85.QueryValidatorDelegationsRequest;
                toProto(message: _85.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _85.QueryValidatorDelegationsRequest): _85.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _85.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_85.QueryValidatorDelegationsResponse>): _85.QueryValidatorDelegationsResponse;
                fromAmino(object: _85.QueryValidatorDelegationsResponseAmino): _85.QueryValidatorDelegationsResponse;
                toAmino(message: _85.QueryValidatorDelegationsResponse): _85.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _85.QueryValidatorDelegationsResponseAminoMsg): _85.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _85.QueryValidatorDelegationsResponse): _85.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _85.QueryValidatorDelegationsResponseProtoMsg): _85.QueryValidatorDelegationsResponse;
                toProto(message: _85.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _85.QueryValidatorDelegationsResponse): _85.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _85.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_85.QueryValidatorUnbondingDelegationsRequest>): _85.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _85.QueryValidatorUnbondingDelegationsRequestAmino): _85.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _85.QueryValidatorUnbondingDelegationsRequest): _85.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _85.QueryValidatorUnbondingDelegationsRequestAminoMsg): _85.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _85.QueryValidatorUnbondingDelegationsRequest): _85.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _85.QueryValidatorUnbondingDelegationsRequestProtoMsg): _85.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _85.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _85.QueryValidatorUnbondingDelegationsRequest): _85.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _85.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_85.QueryValidatorUnbondingDelegationsResponse>): _85.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _85.QueryValidatorUnbondingDelegationsResponseAmino): _85.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _85.QueryValidatorUnbondingDelegationsResponse): _85.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _85.QueryValidatorUnbondingDelegationsResponseAminoMsg): _85.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _85.QueryValidatorUnbondingDelegationsResponse): _85.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _85.QueryValidatorUnbondingDelegationsResponseProtoMsg): _85.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _85.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _85.QueryValidatorUnbondingDelegationsResponse): _85.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _85.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryDelegationRequest;
                fromPartial(object: Partial<_85.QueryDelegationRequest>): _85.QueryDelegationRequest;
                fromAmino(object: _85.QueryDelegationRequestAmino): _85.QueryDelegationRequest;
                toAmino(message: _85.QueryDelegationRequest): _85.QueryDelegationRequestAmino;
                fromAminoMsg(object: _85.QueryDelegationRequestAminoMsg): _85.QueryDelegationRequest;
                toAminoMsg(message: _85.QueryDelegationRequest): _85.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _85.QueryDelegationRequestProtoMsg): _85.QueryDelegationRequest;
                toProto(message: _85.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _85.QueryDelegationRequest): _85.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _85.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryDelegationResponse;
                fromPartial(object: Partial<_85.QueryDelegationResponse>): _85.QueryDelegationResponse;
                fromAmino(object: _85.QueryDelegationResponseAmino): _85.QueryDelegationResponse;
                toAmino(message: _85.QueryDelegationResponse): _85.QueryDelegationResponseAmino;
                fromAminoMsg(object: _85.QueryDelegationResponseAminoMsg): _85.QueryDelegationResponse;
                toAminoMsg(message: _85.QueryDelegationResponse): _85.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _85.QueryDelegationResponseProtoMsg): _85.QueryDelegationResponse;
                toProto(message: _85.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _85.QueryDelegationResponse): _85.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _85.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_85.QueryUnbondingDelegationRequest>): _85.QueryUnbondingDelegationRequest;
                fromAmino(object: _85.QueryUnbondingDelegationRequestAmino): _85.QueryUnbondingDelegationRequest;
                toAmino(message: _85.QueryUnbondingDelegationRequest): _85.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _85.QueryUnbondingDelegationRequestAminoMsg): _85.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _85.QueryUnbondingDelegationRequest): _85.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _85.QueryUnbondingDelegationRequestProtoMsg): _85.QueryUnbondingDelegationRequest;
                toProto(message: _85.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _85.QueryUnbondingDelegationRequest): _85.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _85.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_85.QueryUnbondingDelegationResponse>): _85.QueryUnbondingDelegationResponse;
                fromAmino(object: _85.QueryUnbondingDelegationResponseAmino): _85.QueryUnbondingDelegationResponse;
                toAmino(message: _85.QueryUnbondingDelegationResponse): _85.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _85.QueryUnbondingDelegationResponseAminoMsg): _85.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _85.QueryUnbondingDelegationResponse): _85.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _85.QueryUnbondingDelegationResponseProtoMsg): _85.QueryUnbondingDelegationResponse;
                toProto(message: _85.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _85.QueryUnbondingDelegationResponse): _85.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _85.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_85.QueryDelegatorDelegationsRequest>): _85.QueryDelegatorDelegationsRequest;
                fromAmino(object: _85.QueryDelegatorDelegationsRequestAmino): _85.QueryDelegatorDelegationsRequest;
                toAmino(message: _85.QueryDelegatorDelegationsRequest): _85.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _85.QueryDelegatorDelegationsRequestAminoMsg): _85.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _85.QueryDelegatorDelegationsRequest): _85.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _85.QueryDelegatorDelegationsRequestProtoMsg): _85.QueryDelegatorDelegationsRequest;
                toProto(message: _85.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _85.QueryDelegatorDelegationsRequest): _85.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _85.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_85.QueryDelegatorDelegationsResponse>): _85.QueryDelegatorDelegationsResponse;
                fromAmino(object: _85.QueryDelegatorDelegationsResponseAmino): _85.QueryDelegatorDelegationsResponse;
                toAmino(message: _85.QueryDelegatorDelegationsResponse): _85.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _85.QueryDelegatorDelegationsResponseAminoMsg): _85.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _85.QueryDelegatorDelegationsResponse): _85.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _85.QueryDelegatorDelegationsResponseProtoMsg): _85.QueryDelegatorDelegationsResponse;
                toProto(message: _85.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _85.QueryDelegatorDelegationsResponse): _85.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _85.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_85.QueryDelegatorUnbondingDelegationsRequest>): _85.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _85.QueryDelegatorUnbondingDelegationsRequestAmino): _85.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _85.QueryDelegatorUnbondingDelegationsRequest): _85.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _85.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _85.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _85.QueryDelegatorUnbondingDelegationsRequest): _85.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _85.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _85.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _85.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _85.QueryDelegatorUnbondingDelegationsRequest): _85.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _85.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_85.QueryDelegatorUnbondingDelegationsResponse>): _85.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _85.QueryDelegatorUnbondingDelegationsResponseAmino): _85.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _85.QueryDelegatorUnbondingDelegationsResponse): _85.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _85.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _85.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _85.QueryDelegatorUnbondingDelegationsResponse): _85.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _85.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _85.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _85.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _85.QueryDelegatorUnbondingDelegationsResponse): _85.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _85.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryRedelegationsRequest;
                fromPartial(object: Partial<_85.QueryRedelegationsRequest>): _85.QueryRedelegationsRequest;
                fromAmino(object: _85.QueryRedelegationsRequestAmino): _85.QueryRedelegationsRequest;
                toAmino(message: _85.QueryRedelegationsRequest): _85.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _85.QueryRedelegationsRequestAminoMsg): _85.QueryRedelegationsRequest;
                toAminoMsg(message: _85.QueryRedelegationsRequest): _85.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _85.QueryRedelegationsRequestProtoMsg): _85.QueryRedelegationsRequest;
                toProto(message: _85.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _85.QueryRedelegationsRequest): _85.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _85.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryRedelegationsResponse;
                fromPartial(object: Partial<_85.QueryRedelegationsResponse>): _85.QueryRedelegationsResponse;
                fromAmino(object: _85.QueryRedelegationsResponseAmino): _85.QueryRedelegationsResponse;
                toAmino(message: _85.QueryRedelegationsResponse): _85.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _85.QueryRedelegationsResponseAminoMsg): _85.QueryRedelegationsResponse;
                toAminoMsg(message: _85.QueryRedelegationsResponse): _85.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _85.QueryRedelegationsResponseProtoMsg): _85.QueryRedelegationsResponse;
                toProto(message: _85.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _85.QueryRedelegationsResponse): _85.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _85.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_85.QueryDelegatorValidatorsRequest>): _85.QueryDelegatorValidatorsRequest;
                fromAmino(object: _85.QueryDelegatorValidatorsRequestAmino): _85.QueryDelegatorValidatorsRequest;
                toAmino(message: _85.QueryDelegatorValidatorsRequest): _85.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _85.QueryDelegatorValidatorsRequestAminoMsg): _85.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _85.QueryDelegatorValidatorsRequest): _85.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _85.QueryDelegatorValidatorsRequestProtoMsg): _85.QueryDelegatorValidatorsRequest;
                toProto(message: _85.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _85.QueryDelegatorValidatorsRequest): _85.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _85.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_85.QueryDelegatorValidatorsResponse>): _85.QueryDelegatorValidatorsResponse;
                fromAmino(object: _85.QueryDelegatorValidatorsResponseAmino): _85.QueryDelegatorValidatorsResponse;
                toAmino(message: _85.QueryDelegatorValidatorsResponse): _85.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _85.QueryDelegatorValidatorsResponseAminoMsg): _85.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _85.QueryDelegatorValidatorsResponse): _85.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _85.QueryDelegatorValidatorsResponseProtoMsg): _85.QueryDelegatorValidatorsResponse;
                toProto(message: _85.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _85.QueryDelegatorValidatorsResponse): _85.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _85.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_85.QueryDelegatorValidatorRequest>): _85.QueryDelegatorValidatorRequest;
                fromAmino(object: _85.QueryDelegatorValidatorRequestAmino): _85.QueryDelegatorValidatorRequest;
                toAmino(message: _85.QueryDelegatorValidatorRequest): _85.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _85.QueryDelegatorValidatorRequestAminoMsg): _85.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _85.QueryDelegatorValidatorRequest): _85.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _85.QueryDelegatorValidatorRequestProtoMsg): _85.QueryDelegatorValidatorRequest;
                toProto(message: _85.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _85.QueryDelegatorValidatorRequest): _85.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _85.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_85.QueryDelegatorValidatorResponse>): _85.QueryDelegatorValidatorResponse;
                fromAmino(object: _85.QueryDelegatorValidatorResponseAmino): _85.QueryDelegatorValidatorResponse;
                toAmino(message: _85.QueryDelegatorValidatorResponse): _85.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _85.QueryDelegatorValidatorResponseAminoMsg): _85.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _85.QueryDelegatorValidatorResponse): _85.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _85.QueryDelegatorValidatorResponseProtoMsg): _85.QueryDelegatorValidatorResponse;
                toProto(message: _85.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _85.QueryDelegatorValidatorResponse): _85.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _85.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_85.QueryHistoricalInfoRequest>): _85.QueryHistoricalInfoRequest;
                fromAmino(object: _85.QueryHistoricalInfoRequestAmino): _85.QueryHistoricalInfoRequest;
                toAmino(message: _85.QueryHistoricalInfoRequest): _85.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _85.QueryHistoricalInfoRequestAminoMsg): _85.QueryHistoricalInfoRequest;
                toAminoMsg(message: _85.QueryHistoricalInfoRequest): _85.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _85.QueryHistoricalInfoRequestProtoMsg): _85.QueryHistoricalInfoRequest;
                toProto(message: _85.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _85.QueryHistoricalInfoRequest): _85.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _85.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_85.QueryHistoricalInfoResponse>): _85.QueryHistoricalInfoResponse;
                fromAmino(object: _85.QueryHistoricalInfoResponseAmino): _85.QueryHistoricalInfoResponse;
                toAmino(message: _85.QueryHistoricalInfoResponse): _85.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _85.QueryHistoricalInfoResponseAminoMsg): _85.QueryHistoricalInfoResponse;
                toAminoMsg(message: _85.QueryHistoricalInfoResponse): _85.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _85.QueryHistoricalInfoResponseProtoMsg): _85.QueryHistoricalInfoResponse;
                toProto(message: _85.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _85.QueryHistoricalInfoResponse): _85.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _85.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.QueryPoolRequest;
                fromPartial(_: Partial<_85.QueryPoolRequest>): _85.QueryPoolRequest;
                fromAmino(_: _85.QueryPoolRequestAmino): _85.QueryPoolRequest;
                toAmino(_: _85.QueryPoolRequest): _85.QueryPoolRequestAmino;
                fromAminoMsg(object: _85.QueryPoolRequestAminoMsg): _85.QueryPoolRequest;
                toAminoMsg(message: _85.QueryPoolRequest): _85.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _85.QueryPoolRequestProtoMsg): _85.QueryPoolRequest;
                toProto(message: _85.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _85.QueryPoolRequest): _85.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _85.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryPoolResponse;
                fromPartial(object: Partial<_85.QueryPoolResponse>): _85.QueryPoolResponse;
                fromAmino(object: _85.QueryPoolResponseAmino): _85.QueryPoolResponse;
                toAmino(message: _85.QueryPoolResponse): _85.QueryPoolResponseAmino;
                fromAminoMsg(object: _85.QueryPoolResponseAminoMsg): _85.QueryPoolResponse;
                toAminoMsg(message: _85.QueryPoolResponse): _85.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _85.QueryPoolResponseProtoMsg): _85.QueryPoolResponse;
                toProto(message: _85.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _85.QueryPoolResponse): _85.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _85.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.QueryParamsRequest;
                fromPartial(_: Partial<_85.QueryParamsRequest>): _85.QueryParamsRequest;
                fromAmino(_: _85.QueryParamsRequestAmino): _85.QueryParamsRequest;
                toAmino(_: _85.QueryParamsRequest): _85.QueryParamsRequestAmino;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _84.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.LastValidatorPower;
                fromPartial(object: Partial<_84.LastValidatorPower>): _84.LastValidatorPower;
                fromAmino(object: _84.LastValidatorPowerAmino): _84.LastValidatorPower;
                toAmino(message: _84.LastValidatorPower): _84.LastValidatorPowerAmino;
                fromAminoMsg(object: _84.LastValidatorPowerAminoMsg): _84.LastValidatorPower;
                toAminoMsg(message: _84.LastValidatorPower): _84.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _84.LastValidatorPowerProtoMsg): _84.LastValidatorPower;
                toProto(message: _84.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _84.LastValidatorPower): _84.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _83.AuthorizationType;
            authorizationTypeToJSON(object: _83.AuthorizationType): string;
            AuthorizationType: typeof _83.AuthorizationType;
            AuthorizationTypeSDKType: typeof _83.AuthorizationType;
            AuthorizationTypeAmino: typeof _83.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _83.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.StakeAuthorization;
                fromPartial(object: Partial<_83.StakeAuthorization>): _83.StakeAuthorization;
                fromAmino(object: _83.StakeAuthorizationAmino): _83.StakeAuthorization;
                toAmino(message: _83.StakeAuthorization): _83.StakeAuthorizationAmino;
                fromAminoMsg(object: _83.StakeAuthorizationAminoMsg): _83.StakeAuthorization;
                toAminoMsg(message: _83.StakeAuthorization): _83.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _83.StakeAuthorizationProtoMsg): _83.StakeAuthorization;
                toProto(message: _83.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _83.StakeAuthorization): _83.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _83.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.StakeAuthorization_Validators;
                fromPartial(object: Partial<_83.StakeAuthorization_Validators>): _83.StakeAuthorization_Validators;
                fromAmino(object: _83.StakeAuthorization_ValidatorsAmino): _83.StakeAuthorization_Validators;
                toAmino(message: _83.StakeAuthorization_Validators): _83.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _83.StakeAuthorization_ValidatorsAminoMsg): _83.StakeAuthorization_Validators;
                toAminoMsg(message: _83.StakeAuthorization_Validators): _83.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _83.StakeAuthorization_ValidatorsProtoMsg): _83.StakeAuthorization_Validators;
                toProto(message: _83.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _83.StakeAuthorization_Validators): _83.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _88.SignMode;
                signModeToJSON(object: _88.SignMode): string;
                SignMode: typeof _88.SignMode;
                SignModeSDKType: typeof _88.SignMode;
                SignModeAmino: typeof _88.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _88.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.SignatureDescriptors;
                    fromPartial(object: Partial<_88.SignatureDescriptors>): _88.SignatureDescriptors;
                    fromAmino(object: _88.SignatureDescriptorsAmino): _88.SignatureDescriptors;
                    toAmino(message: _88.SignatureDescriptors): _88.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _88.SignatureDescriptorsAminoMsg): _88.SignatureDescriptors;
                    toAminoMsg(message: _88.SignatureDescriptors): _88.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _88.SignatureDescriptorsProtoMsg): _88.SignatureDescriptors;
                    toProto(message: _88.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _88.SignatureDescriptors): _88.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _88.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.SignatureDescriptor;
                    fromPartial(object: Partial<_88.SignatureDescriptor>): _88.SignatureDescriptor;
                    fromAmino(object: _88.SignatureDescriptorAmino): _88.SignatureDescriptor;
                    toAmino(message: _88.SignatureDescriptor): _88.SignatureDescriptorAmino;
                    fromAminoMsg(object: _88.SignatureDescriptorAminoMsg): _88.SignatureDescriptor;
                    toAminoMsg(message: _88.SignatureDescriptor): _88.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _88.SignatureDescriptorProtoMsg): _88.SignatureDescriptor;
                    toProto(message: _88.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _88.SignatureDescriptor): _88.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _88.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_88.SignatureDescriptor_Data>): _88.SignatureDescriptor_Data;
                    fromAmino(object: _88.SignatureDescriptor_DataAmino): _88.SignatureDescriptor_Data;
                    toAmino(message: _88.SignatureDescriptor_Data): _88.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _88.SignatureDescriptor_DataAminoMsg): _88.SignatureDescriptor_Data;
                    toAminoMsg(message: _88.SignatureDescriptor_Data): _88.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _88.SignatureDescriptor_DataProtoMsg): _88.SignatureDescriptor_Data;
                    toProto(message: _88.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _88.SignatureDescriptor_Data): _88.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _88.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_88.SignatureDescriptor_Data_Single>): _88.SignatureDescriptor_Data_Single;
                    fromAmino(object: _88.SignatureDescriptor_Data_SingleAmino): _88.SignatureDescriptor_Data_Single;
                    toAmino(message: _88.SignatureDescriptor_Data_Single): _88.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _88.SignatureDescriptor_Data_SingleAminoMsg): _88.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _88.SignatureDescriptor_Data_Single): _88.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _88.SignatureDescriptor_Data_SingleProtoMsg): _88.SignatureDescriptor_Data_Single;
                    toProto(message: _88.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _88.SignatureDescriptor_Data_Single): _88.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _88.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_88.SignatureDescriptor_Data_Multi>): _88.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _88.SignatureDescriptor_Data_MultiAmino): _88.SignatureDescriptor_Data_Multi;
                    toAmino(message: _88.SignatureDescriptor_Data_Multi): _88.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _88.SignatureDescriptor_Data_MultiAminoMsg): _88.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _88.SignatureDescriptor_Data_Multi): _88.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _88.SignatureDescriptor_Data_MultiProtoMsg): _88.SignatureDescriptor_Data_Multi;
                    toProto(message: _88.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _88.SignatureDescriptor_Data_Multi): _88.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _178.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _89.SimulateRequest): Promise<_89.SimulateResponse>;
                getTx(request: _89.GetTxRequest): Promise<_89.GetTxResponse>;
                broadcastTx(request: _89.BroadcastTxRequest): Promise<_89.BroadcastTxResponse>;
                getTxsEvent(request: _89.GetTxsEventRequest): Promise<_89.GetTxsEventResponse>;
                getBlockWithTxs(request: _89.GetBlockWithTxsRequest): Promise<_89.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _159.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _90.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.Tx;
                fromPartial(object: Partial<_90.Tx>): _90.Tx;
                fromAmino(object: _90.TxAmino): _90.Tx;
                toAmino(message: _90.Tx): _90.TxAmino;
                fromAminoMsg(object: _90.TxAminoMsg): _90.Tx;
                toAminoMsg(message: _90.Tx): _90.TxAminoMsg;
                fromProtoMsg(message: _90.TxProtoMsg): _90.Tx;
                toProto(message: _90.Tx): Uint8Array;
                toProtoMsg(message: _90.Tx): _90.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _90.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.TxRaw;
                fromPartial(object: Partial<_90.TxRaw>): _90.TxRaw;
                fromAmino(object: _90.TxRawAmino): _90.TxRaw;
                toAmino(message: _90.TxRaw): _90.TxRawAmino;
                fromAminoMsg(object: _90.TxRawAminoMsg): _90.TxRaw;
                toAminoMsg(message: _90.TxRaw): _90.TxRawAminoMsg;
                fromProtoMsg(message: _90.TxRawProtoMsg): _90.TxRaw;
                toProto(message: _90.TxRaw): Uint8Array;
                toProtoMsg(message: _90.TxRaw): _90.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _90.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.SignDoc;
                fromPartial(object: Partial<_90.SignDoc>): _90.SignDoc;
                fromAmino(object: _90.SignDocAmino): _90.SignDoc;
                toAmino(message: _90.SignDoc): _90.SignDocAmino;
                fromAminoMsg(object: _90.SignDocAminoMsg): _90.SignDoc;
                toAminoMsg(message: _90.SignDoc): _90.SignDocAminoMsg;
                fromProtoMsg(message: _90.SignDocProtoMsg): _90.SignDoc;
                toProto(message: _90.SignDoc): Uint8Array;
                toProtoMsg(message: _90.SignDoc): _90.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _90.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.SignDocDirectAux;
                fromPartial(object: Partial<_90.SignDocDirectAux>): _90.SignDocDirectAux;
                fromAmino(object: _90.SignDocDirectAuxAmino): _90.SignDocDirectAux;
                toAmino(message: _90.SignDocDirectAux): _90.SignDocDirectAuxAmino;
                fromAminoMsg(object: _90.SignDocDirectAuxAminoMsg): _90.SignDocDirectAux;
                toAminoMsg(message: _90.SignDocDirectAux): _90.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _90.SignDocDirectAuxProtoMsg): _90.SignDocDirectAux;
                toProto(message: _90.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _90.SignDocDirectAux): _90.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _90.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.TxBody;
                fromPartial(object: Partial<_90.TxBody>): _90.TxBody;
                fromAmino(object: _90.TxBodyAmino): _90.TxBody;
                toAmino(message: _90.TxBody): _90.TxBodyAmino;
                fromAminoMsg(object: _90.TxBodyAminoMsg): _90.TxBody;
                toAminoMsg(message: _90.TxBody): _90.TxBodyAminoMsg;
                fromProtoMsg(message: _90.TxBodyProtoMsg): _90.TxBody;
                toProto(message: _90.TxBody): Uint8Array;
                toProtoMsg(message: _90.TxBody): _90.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _90.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.AuthInfo;
                fromPartial(object: Partial<_90.AuthInfo>): _90.AuthInfo;
                fromAmino(object: _90.AuthInfoAmino): _90.AuthInfo;
                toAmino(message: _90.AuthInfo): _90.AuthInfoAmino;
                fromAminoMsg(object: _90.AuthInfoAminoMsg): _90.AuthInfo;
                toAminoMsg(message: _90.AuthInfo): _90.AuthInfoAminoMsg;
                fromProtoMsg(message: _90.AuthInfoProtoMsg): _90.AuthInfo;
                toProto(message: _90.AuthInfo): Uint8Array;
                toProtoMsg(message: _90.AuthInfo): _90.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _90.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.SignerInfo;
                fromPartial(object: Partial<_90.SignerInfo>): _90.SignerInfo;
                fromAmino(object: _90.SignerInfoAmino): _90.SignerInfo;
                toAmino(message: _90.SignerInfo): _90.SignerInfoAmino;
                fromAminoMsg(object: _90.SignerInfoAminoMsg): _90.SignerInfo;
                toAminoMsg(message: _90.SignerInfo): _90.SignerInfoAminoMsg;
                fromProtoMsg(message: _90.SignerInfoProtoMsg): _90.SignerInfo;
                toProto(message: _90.SignerInfo): Uint8Array;
                toProtoMsg(message: _90.SignerInfo): _90.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _90.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.ModeInfo;
                fromPartial(object: Partial<_90.ModeInfo>): _90.ModeInfo;
                fromAmino(object: _90.ModeInfoAmino): _90.ModeInfo;
                toAmino(message: _90.ModeInfo): _90.ModeInfoAmino;
                fromAminoMsg(object: _90.ModeInfoAminoMsg): _90.ModeInfo;
                toAminoMsg(message: _90.ModeInfo): _90.ModeInfoAminoMsg;
                fromProtoMsg(message: _90.ModeInfoProtoMsg): _90.ModeInfo;
                toProto(message: _90.ModeInfo): Uint8Array;
                toProtoMsg(message: _90.ModeInfo): _90.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _90.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.ModeInfo_Single;
                fromPartial(object: Partial<_90.ModeInfo_Single>): _90.ModeInfo_Single;
                fromAmino(object: _90.ModeInfo_SingleAmino): _90.ModeInfo_Single;
                toAmino(message: _90.ModeInfo_Single): _90.ModeInfo_SingleAmino;
                fromAminoMsg(object: _90.ModeInfo_SingleAminoMsg): _90.ModeInfo_Single;
                toAminoMsg(message: _90.ModeInfo_Single): _90.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _90.ModeInfo_SingleProtoMsg): _90.ModeInfo_Single;
                toProto(message: _90.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _90.ModeInfo_Single): _90.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _90.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.ModeInfo_Multi;
                fromPartial(object: Partial<_90.ModeInfo_Multi>): _90.ModeInfo_Multi;
                fromAmino(object: _90.ModeInfo_MultiAmino): _90.ModeInfo_Multi;
                toAmino(message: _90.ModeInfo_Multi): _90.ModeInfo_MultiAmino;
                fromAminoMsg(object: _90.ModeInfo_MultiAminoMsg): _90.ModeInfo_Multi;
                toAminoMsg(message: _90.ModeInfo_Multi): _90.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _90.ModeInfo_MultiProtoMsg): _90.ModeInfo_Multi;
                toProto(message: _90.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _90.ModeInfo_Multi): _90.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _90.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.Fee;
                fromPartial(object: Partial<_90.Fee>): _90.Fee;
                fromAmino(object: _90.FeeAmino): _90.Fee;
                toAmino(message: _90.Fee): _90.FeeAmino;
                fromAminoMsg(object: _90.FeeAminoMsg): _90.Fee;
                toAminoMsg(message: _90.Fee): _90.FeeAminoMsg;
                fromProtoMsg(message: _90.FeeProtoMsg): _90.Fee;
                toProto(message: _90.Fee): Uint8Array;
                toProtoMsg(message: _90.Fee): _90.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _90.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.Tip;
                fromPartial(object: Partial<_90.Tip>): _90.Tip;
                fromAmino(object: _90.TipAmino): _90.Tip;
                toAmino(message: _90.Tip): _90.TipAmino;
                fromAminoMsg(object: _90.TipAminoMsg): _90.Tip;
                toAminoMsg(message: _90.Tip): _90.TipAminoMsg;
                fromProtoMsg(message: _90.TipProtoMsg): _90.Tip;
                toProto(message: _90.Tip): Uint8Array;
                toProtoMsg(message: _90.Tip): _90.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _90.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.AuxSignerData;
                fromPartial(object: Partial<_90.AuxSignerData>): _90.AuxSignerData;
                fromAmino(object: _90.AuxSignerDataAmino): _90.AuxSignerData;
                toAmino(message: _90.AuxSignerData): _90.AuxSignerDataAmino;
                fromAminoMsg(object: _90.AuxSignerDataAminoMsg): _90.AuxSignerData;
                toAminoMsg(message: _90.AuxSignerData): _90.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _90.AuxSignerDataProtoMsg): _90.AuxSignerData;
                toProto(message: _90.AuxSignerData): Uint8Array;
                toProtoMsg(message: _90.AuxSignerData): _90.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _89.OrderBy;
            orderByToJSON(object: _89.OrderBy): string;
            broadcastModeFromJSON(object: any): _89.BroadcastMode;
            broadcastModeToJSON(object: _89.BroadcastMode): string;
            OrderBy: typeof _89.OrderBy;
            OrderBySDKType: typeof _89.OrderBy;
            OrderByAmino: typeof _89.OrderBy;
            BroadcastMode: typeof _89.BroadcastMode;
            BroadcastModeSDKType: typeof _89.BroadcastMode;
            BroadcastModeAmino: typeof _89.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _89.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.GetTxsEventRequest;
                fromPartial(object: Partial<_89.GetTxsEventRequest>): _89.GetTxsEventRequest;
                fromAmino(object: _89.GetTxsEventRequestAmino): _89.GetTxsEventRequest;
                toAmino(message: _89.GetTxsEventRequest): _89.GetTxsEventRequestAmino;
                fromAminoMsg(object: _89.GetTxsEventRequestAminoMsg): _89.GetTxsEventRequest;
                toAminoMsg(message: _89.GetTxsEventRequest): _89.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _89.GetTxsEventRequestProtoMsg): _89.GetTxsEventRequest;
                toProto(message: _89.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _89.GetTxsEventRequest): _89.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _89.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.GetTxsEventResponse;
                fromPartial(object: Partial<_89.GetTxsEventResponse>): _89.GetTxsEventResponse;
                fromAmino(object: _89.GetTxsEventResponseAmino): _89.GetTxsEventResponse;
                toAmino(message: _89.GetTxsEventResponse): _89.GetTxsEventResponseAmino;
                fromAminoMsg(object: _89.GetTxsEventResponseAminoMsg): _89.GetTxsEventResponse;
                toAminoMsg(message: _89.GetTxsEventResponse): _89.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _89.GetTxsEventResponseProtoMsg): _89.GetTxsEventResponse;
                toProto(message: _89.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _89.GetTxsEventResponse): _89.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _89.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.BroadcastTxRequest;
                fromPartial(object: Partial<_89.BroadcastTxRequest>): _89.BroadcastTxRequest;
                fromAmino(object: _89.BroadcastTxRequestAmino): _89.BroadcastTxRequest;
                toAmino(message: _89.BroadcastTxRequest): _89.BroadcastTxRequestAmino;
                fromAminoMsg(object: _89.BroadcastTxRequestAminoMsg): _89.BroadcastTxRequest;
                toAminoMsg(message: _89.BroadcastTxRequest): _89.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _89.BroadcastTxRequestProtoMsg): _89.BroadcastTxRequest;
                toProto(message: _89.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _89.BroadcastTxRequest): _89.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _89.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.BroadcastTxResponse;
                fromPartial(object: Partial<_89.BroadcastTxResponse>): _89.BroadcastTxResponse;
                fromAmino(object: _89.BroadcastTxResponseAmino): _89.BroadcastTxResponse;
                toAmino(message: _89.BroadcastTxResponse): _89.BroadcastTxResponseAmino;
                fromAminoMsg(object: _89.BroadcastTxResponseAminoMsg): _89.BroadcastTxResponse;
                toAminoMsg(message: _89.BroadcastTxResponse): _89.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _89.BroadcastTxResponseProtoMsg): _89.BroadcastTxResponse;
                toProto(message: _89.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _89.BroadcastTxResponse): _89.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _89.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.SimulateRequest;
                fromPartial(object: Partial<_89.SimulateRequest>): _89.SimulateRequest;
                fromAmino(object: _89.SimulateRequestAmino): _89.SimulateRequest;
                toAmino(message: _89.SimulateRequest): _89.SimulateRequestAmino;
                fromAminoMsg(object: _89.SimulateRequestAminoMsg): _89.SimulateRequest;
                toAminoMsg(message: _89.SimulateRequest): _89.SimulateRequestAminoMsg;
                fromProtoMsg(message: _89.SimulateRequestProtoMsg): _89.SimulateRequest;
                toProto(message: _89.SimulateRequest): Uint8Array;
                toProtoMsg(message: _89.SimulateRequest): _89.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _89.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.SimulateResponse;
                fromPartial(object: Partial<_89.SimulateResponse>): _89.SimulateResponse;
                fromAmino(object: _89.SimulateResponseAmino): _89.SimulateResponse;
                toAmino(message: _89.SimulateResponse): _89.SimulateResponseAmino;
                fromAminoMsg(object: _89.SimulateResponseAminoMsg): _89.SimulateResponse;
                toAminoMsg(message: _89.SimulateResponse): _89.SimulateResponseAminoMsg;
                fromProtoMsg(message: _89.SimulateResponseProtoMsg): _89.SimulateResponse;
                toProto(message: _89.SimulateResponse): Uint8Array;
                toProtoMsg(message: _89.SimulateResponse): _89.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _89.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.GetTxRequest;
                fromPartial(object: Partial<_89.GetTxRequest>): _89.GetTxRequest;
                fromAmino(object: _89.GetTxRequestAmino): _89.GetTxRequest;
                toAmino(message: _89.GetTxRequest): _89.GetTxRequestAmino;
                fromAminoMsg(object: _89.GetTxRequestAminoMsg): _89.GetTxRequest;
                toAminoMsg(message: _89.GetTxRequest): _89.GetTxRequestAminoMsg;
                fromProtoMsg(message: _89.GetTxRequestProtoMsg): _89.GetTxRequest;
                toProto(message: _89.GetTxRequest): Uint8Array;
                toProtoMsg(message: _89.GetTxRequest): _89.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _89.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.GetTxResponse;
                fromPartial(object: Partial<_89.GetTxResponse>): _89.GetTxResponse;
                fromAmino(object: _89.GetTxResponseAmino): _89.GetTxResponse;
                toAmino(message: _89.GetTxResponse): _89.GetTxResponseAmino;
                fromAminoMsg(object: _89.GetTxResponseAminoMsg): _89.GetTxResponse;
                toAminoMsg(message: _89.GetTxResponse): _89.GetTxResponseAminoMsg;
                fromProtoMsg(message: _89.GetTxResponseProtoMsg): _89.GetTxResponse;
                toProto(message: _89.GetTxResponse): Uint8Array;
                toProtoMsg(message: _89.GetTxResponse): _89.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _89.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_89.GetBlockWithTxsRequest>): _89.GetBlockWithTxsRequest;
                fromAmino(object: _89.GetBlockWithTxsRequestAmino): _89.GetBlockWithTxsRequest;
                toAmino(message: _89.GetBlockWithTxsRequest): _89.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _89.GetBlockWithTxsRequestAminoMsg): _89.GetBlockWithTxsRequest;
                toAminoMsg(message: _89.GetBlockWithTxsRequest): _89.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _89.GetBlockWithTxsRequestProtoMsg): _89.GetBlockWithTxsRequest;
                toProto(message: _89.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _89.GetBlockWithTxsRequest): _89.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _89.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_89.GetBlockWithTxsResponse>): _89.GetBlockWithTxsResponse;
                fromAmino(object: _89.GetBlockWithTxsResponseAmino): _89.GetBlockWithTxsResponse;
                toAmino(message: _89.GetBlockWithTxsResponse): _89.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _89.GetBlockWithTxsResponseAminoMsg): _89.GetBlockWithTxsResponse;
                toAminoMsg(message: _89.GetBlockWithTxsResponse): _89.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _89.GetBlockWithTxsResponseProtoMsg): _89.GetBlockWithTxsResponse;
                toProto(message: _89.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _89.GetBlockWithTxsResponse): _89.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _192.MsgClientImpl;
            QueryClientImpl: typeof _179.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _91.QueryCurrentPlanRequest): Promise<_91.QueryCurrentPlanResponse>;
                appliedPlan(request: _91.QueryAppliedPlanRequest): Promise<_91.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _91.QueryUpgradedConsensusStateRequest): Promise<_91.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _91.QueryModuleVersionsRequest): Promise<_91.QueryModuleVersionsResponse>;
                authority(request?: _91.QueryAuthorityRequest): Promise<_91.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _160.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _92.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _92.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _92.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _92.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _92.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _92.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _92.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _92.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _92.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _92.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _92.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _92.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _92.MsgSoftwareUpgrade) => _92.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _92.MsgSoftwareUpgradeAmino) => _92.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _92.MsgCancelUpgrade) => _92.MsgCancelUpgradeAmino;
                    fromAmino: (object: _92.MsgCancelUpgradeAmino) => _92.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _93.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Plan;
                fromPartial(object: Partial<_93.Plan>): _93.Plan;
                fromAmino(object: _93.PlanAmino): _93.Plan;
                toAmino(message: _93.Plan): _93.PlanAmino;
                fromAminoMsg(object: _93.PlanAminoMsg): _93.Plan;
                toAminoMsg(message: _93.Plan): _93.PlanAminoMsg;
                fromProtoMsg(message: _93.PlanProtoMsg): _93.Plan;
                toProto(message: _93.Plan): Uint8Array;
                toProtoMsg(message: _93.Plan): _93.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _93.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_93.SoftwareUpgradeProposal>): _93.SoftwareUpgradeProposal;
                fromAmino(object: _93.SoftwareUpgradeProposalAmino): _93.SoftwareUpgradeProposal;
                toAmino(message: _93.SoftwareUpgradeProposal): _93.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _93.SoftwareUpgradeProposalAminoMsg): _93.SoftwareUpgradeProposal;
                toAminoMsg(message: _93.SoftwareUpgradeProposal): _93.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _93.SoftwareUpgradeProposalProtoMsg): _93.SoftwareUpgradeProposal;
                toProto(message: _93.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _93.SoftwareUpgradeProposal): _93.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _93.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_93.CancelSoftwareUpgradeProposal>): _93.CancelSoftwareUpgradeProposal;
                fromAmino(object: _93.CancelSoftwareUpgradeProposalAmino): _93.CancelSoftwareUpgradeProposal;
                toAmino(message: _93.CancelSoftwareUpgradeProposal): _93.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _93.CancelSoftwareUpgradeProposalAminoMsg): _93.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _93.CancelSoftwareUpgradeProposal): _93.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _93.CancelSoftwareUpgradeProposalProtoMsg): _93.CancelSoftwareUpgradeProposal;
                toProto(message: _93.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _93.CancelSoftwareUpgradeProposal): _93.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _93.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.ModuleVersion;
                fromPartial(object: Partial<_93.ModuleVersion>): _93.ModuleVersion;
                fromAmino(object: _93.ModuleVersionAmino): _93.ModuleVersion;
                toAmino(message: _93.ModuleVersion): _93.ModuleVersionAmino;
                fromAminoMsg(object: _93.ModuleVersionAminoMsg): _93.ModuleVersion;
                toAminoMsg(message: _93.ModuleVersion): _93.ModuleVersionAminoMsg;
                fromProtoMsg(message: _93.ModuleVersionProtoMsg): _93.ModuleVersion;
                toProto(message: _93.ModuleVersion): Uint8Array;
                toProtoMsg(message: _93.ModuleVersion): _93.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _92.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_92.MsgSoftwareUpgrade>): _92.MsgSoftwareUpgrade;
                fromAmino(object: _92.MsgSoftwareUpgradeAmino): _92.MsgSoftwareUpgrade;
                toAmino(message: _92.MsgSoftwareUpgrade): _92.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _92.MsgSoftwareUpgradeAminoMsg): _92.MsgSoftwareUpgrade;
                toAminoMsg(message: _92.MsgSoftwareUpgrade): _92.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _92.MsgSoftwareUpgradeProtoMsg): _92.MsgSoftwareUpgrade;
                toProto(message: _92.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _92.MsgSoftwareUpgrade): _92.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _92.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_92.MsgSoftwareUpgradeResponse>): _92.MsgSoftwareUpgradeResponse;
                fromAmino(_: _92.MsgSoftwareUpgradeResponseAmino): _92.MsgSoftwareUpgradeResponse;
                toAmino(_: _92.MsgSoftwareUpgradeResponse): _92.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _92.MsgSoftwareUpgradeResponseAminoMsg): _92.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _92.MsgSoftwareUpgradeResponse): _92.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _92.MsgSoftwareUpgradeResponseProtoMsg): _92.MsgSoftwareUpgradeResponse;
                toProto(message: _92.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _92.MsgSoftwareUpgradeResponse): _92.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _92.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MsgCancelUpgrade;
                fromPartial(object: Partial<_92.MsgCancelUpgrade>): _92.MsgCancelUpgrade;
                fromAmino(object: _92.MsgCancelUpgradeAmino): _92.MsgCancelUpgrade;
                toAmino(message: _92.MsgCancelUpgrade): _92.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _92.MsgCancelUpgradeAminoMsg): _92.MsgCancelUpgrade;
                toAminoMsg(message: _92.MsgCancelUpgrade): _92.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _92.MsgCancelUpgradeProtoMsg): _92.MsgCancelUpgrade;
                toProto(message: _92.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _92.MsgCancelUpgrade): _92.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _92.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_92.MsgCancelUpgradeResponse>): _92.MsgCancelUpgradeResponse;
                fromAmino(_: _92.MsgCancelUpgradeResponseAmino): _92.MsgCancelUpgradeResponse;
                toAmino(_: _92.MsgCancelUpgradeResponse): _92.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _92.MsgCancelUpgradeResponseAminoMsg): _92.MsgCancelUpgradeResponse;
                toAminoMsg(message: _92.MsgCancelUpgradeResponse): _92.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _92.MsgCancelUpgradeResponseProtoMsg): _92.MsgCancelUpgradeResponse;
                toProto(message: _92.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _92.MsgCancelUpgradeResponse): _92.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _91.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _91.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_91.QueryCurrentPlanRequest>): _91.QueryCurrentPlanRequest;
                fromAmino(_: _91.QueryCurrentPlanRequestAmino): _91.QueryCurrentPlanRequest;
                toAmino(_: _91.QueryCurrentPlanRequest): _91.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _91.QueryCurrentPlanRequestAminoMsg): _91.QueryCurrentPlanRequest;
                toAminoMsg(message: _91.QueryCurrentPlanRequest): _91.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _91.QueryCurrentPlanRequestProtoMsg): _91.QueryCurrentPlanRequest;
                toProto(message: _91.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _91.QueryCurrentPlanRequest): _91.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _91.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_91.QueryCurrentPlanResponse>): _91.QueryCurrentPlanResponse;
                fromAmino(object: _91.QueryCurrentPlanResponseAmino): _91.QueryCurrentPlanResponse;
                toAmino(message: _91.QueryCurrentPlanResponse): _91.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _91.QueryCurrentPlanResponseAminoMsg): _91.QueryCurrentPlanResponse;
                toAminoMsg(message: _91.QueryCurrentPlanResponse): _91.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _91.QueryCurrentPlanResponseProtoMsg): _91.QueryCurrentPlanResponse;
                toProto(message: _91.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _91.QueryCurrentPlanResponse): _91.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _91.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_91.QueryAppliedPlanRequest>): _91.QueryAppliedPlanRequest;
                fromAmino(object: _91.QueryAppliedPlanRequestAmino): _91.QueryAppliedPlanRequest;
                toAmino(message: _91.QueryAppliedPlanRequest): _91.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _91.QueryAppliedPlanRequestAminoMsg): _91.QueryAppliedPlanRequest;
                toAminoMsg(message: _91.QueryAppliedPlanRequest): _91.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _91.QueryAppliedPlanRequestProtoMsg): _91.QueryAppliedPlanRequest;
                toProto(message: _91.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _91.QueryAppliedPlanRequest): _91.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _91.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_91.QueryAppliedPlanResponse>): _91.QueryAppliedPlanResponse;
                fromAmino(object: _91.QueryAppliedPlanResponseAmino): _91.QueryAppliedPlanResponse;
                toAmino(message: _91.QueryAppliedPlanResponse): _91.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _91.QueryAppliedPlanResponseAminoMsg): _91.QueryAppliedPlanResponse;
                toAminoMsg(message: _91.QueryAppliedPlanResponse): _91.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _91.QueryAppliedPlanResponseProtoMsg): _91.QueryAppliedPlanResponse;
                toProto(message: _91.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _91.QueryAppliedPlanResponse): _91.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _91.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_91.QueryUpgradedConsensusStateRequest>): _91.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _91.QueryUpgradedConsensusStateRequestAmino): _91.QueryUpgradedConsensusStateRequest;
                toAmino(message: _91.QueryUpgradedConsensusStateRequest): _91.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _91.QueryUpgradedConsensusStateRequestAminoMsg): _91.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _91.QueryUpgradedConsensusStateRequest): _91.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _91.QueryUpgradedConsensusStateRequestProtoMsg): _91.QueryUpgradedConsensusStateRequest;
                toProto(message: _91.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _91.QueryUpgradedConsensusStateRequest): _91.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _91.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_91.QueryUpgradedConsensusStateResponse>): _91.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _91.QueryUpgradedConsensusStateResponseAmino): _91.QueryUpgradedConsensusStateResponse;
                toAmino(message: _91.QueryUpgradedConsensusStateResponse): _91.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _91.QueryUpgradedConsensusStateResponseAminoMsg): _91.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _91.QueryUpgradedConsensusStateResponse): _91.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _91.QueryUpgradedConsensusStateResponseProtoMsg): _91.QueryUpgradedConsensusStateResponse;
                toProto(message: _91.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _91.QueryUpgradedConsensusStateResponse): _91.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _91.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_91.QueryModuleVersionsRequest>): _91.QueryModuleVersionsRequest;
                fromAmino(object: _91.QueryModuleVersionsRequestAmino): _91.QueryModuleVersionsRequest;
                toAmino(message: _91.QueryModuleVersionsRequest): _91.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _91.QueryModuleVersionsRequestAminoMsg): _91.QueryModuleVersionsRequest;
                toAminoMsg(message: _91.QueryModuleVersionsRequest): _91.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _91.QueryModuleVersionsRequestProtoMsg): _91.QueryModuleVersionsRequest;
                toProto(message: _91.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _91.QueryModuleVersionsRequest): _91.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _91.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_91.QueryModuleVersionsResponse>): _91.QueryModuleVersionsResponse;
                fromAmino(object: _91.QueryModuleVersionsResponseAmino): _91.QueryModuleVersionsResponse;
                toAmino(message: _91.QueryModuleVersionsResponse): _91.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _91.QueryModuleVersionsResponseAminoMsg): _91.QueryModuleVersionsResponse;
                toAminoMsg(message: _91.QueryModuleVersionsResponse): _91.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _91.QueryModuleVersionsResponseProtoMsg): _91.QueryModuleVersionsResponse;
                toProto(message: _91.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _91.QueryModuleVersionsResponse): _91.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _91.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _91.QueryAuthorityRequest;
                fromPartial(_: Partial<_91.QueryAuthorityRequest>): _91.QueryAuthorityRequest;
                fromAmino(_: _91.QueryAuthorityRequestAmino): _91.QueryAuthorityRequest;
                toAmino(_: _91.QueryAuthorityRequest): _91.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _91.QueryAuthorityRequestAminoMsg): _91.QueryAuthorityRequest;
                toAminoMsg(message: _91.QueryAuthorityRequest): _91.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _91.QueryAuthorityRequestProtoMsg): _91.QueryAuthorityRequest;
                toProto(message: _91.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _91.QueryAuthorityRequest): _91.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _91.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryAuthorityResponse;
                fromPartial(object: Partial<_91.QueryAuthorityResponse>): _91.QueryAuthorityResponse;
                fromAmino(object: _91.QueryAuthorityResponseAmino): _91.QueryAuthorityResponse;
                toAmino(message: _91.QueryAuthorityResponse): _91.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _91.QueryAuthorityResponseAminoMsg): _91.QueryAuthorityResponse;
                toAminoMsg(message: _91.QueryAuthorityResponse): _91.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _91.QueryAuthorityResponseProtoMsg): _91.QueryAuthorityResponse;
                toProto(message: _91.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _91.QueryAuthorityResponse): _91.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _193.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _94.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _94.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _94.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    donateAllVestingTokens(value: _94.MsgDonateAllVestingTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _94.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _94.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _94.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _94.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _94.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _94.MsgCreatePeriodicVestingAccount;
                    };
                    donateAllVestingTokens(value: _94.MsgDonateAllVestingTokens): {
                        typeUrl: string;
                        value: _94.MsgDonateAllVestingTokens;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _94.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _94.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _94.MsgCreatePeriodicVestingAccount;
                    };
                    donateAllVestingTokens(value: any): {
                        typeUrl: string;
                        value: _94.MsgDonateAllVestingTokens;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _94.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _94.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _94.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _94.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _94.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _94.MsgCreatePeriodicVestingAccount;
                    };
                    donateAllVestingTokens(value: _94.MsgDonateAllVestingTokens): {
                        typeUrl: string;
                        value: _94.MsgDonateAllVestingTokens;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _94.MsgCreateVestingAccount) => _94.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _94.MsgCreateVestingAccountAmino) => _94.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _94.MsgCreatePermanentLockedAccount) => _94.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _94.MsgCreatePermanentLockedAccountAmino) => _94.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _94.MsgCreatePeriodicVestingAccount) => _94.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _94.MsgCreatePeriodicVestingAccountAmino) => _94.MsgCreatePeriodicVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgDonateAllVestingTokens": {
                    aminoType: string;
                    toAmino: (message: _94.MsgDonateAllVestingTokens) => _94.MsgDonateAllVestingTokensAmino;
                    fromAmino: (object: _94.MsgDonateAllVestingTokensAmino) => _94.MsgDonateAllVestingTokens;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _95.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.BaseVestingAccount;
                fromPartial(object: Partial<_95.BaseVestingAccount>): _95.BaseVestingAccount;
                fromAmino(object: _95.BaseVestingAccountAmino): _95.BaseVestingAccount;
                toAmino(message: _95.BaseVestingAccount): _95.BaseVestingAccountAmino;
                fromAminoMsg(object: _95.BaseVestingAccountAminoMsg): _95.BaseVestingAccount;
                toAminoMsg(message: _95.BaseVestingAccount): _95.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _95.BaseVestingAccountProtoMsg): _95.BaseVestingAccount;
                toProto(message: _95.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _95.BaseVestingAccount): _95.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _95.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.ContinuousVestingAccount;
                fromPartial(object: Partial<_95.ContinuousVestingAccount>): _95.ContinuousVestingAccount;
                fromAmino(object: _95.ContinuousVestingAccountAmino): _95.ContinuousVestingAccount;
                toAmino(message: _95.ContinuousVestingAccount): _95.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _95.ContinuousVestingAccountAminoMsg): _95.ContinuousVestingAccount;
                toAminoMsg(message: _95.ContinuousVestingAccount): _95.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _95.ContinuousVestingAccountProtoMsg): _95.ContinuousVestingAccount;
                toProto(message: _95.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _95.ContinuousVestingAccount): _95.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _95.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.DelayedVestingAccount;
                fromPartial(object: Partial<_95.DelayedVestingAccount>): _95.DelayedVestingAccount;
                fromAmino(object: _95.DelayedVestingAccountAmino): _95.DelayedVestingAccount;
                toAmino(message: _95.DelayedVestingAccount): _95.DelayedVestingAccountAmino;
                fromAminoMsg(object: _95.DelayedVestingAccountAminoMsg): _95.DelayedVestingAccount;
                toAminoMsg(message: _95.DelayedVestingAccount): _95.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _95.DelayedVestingAccountProtoMsg): _95.DelayedVestingAccount;
                toProto(message: _95.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _95.DelayedVestingAccount): _95.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _95.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.Period;
                fromPartial(object: Partial<_95.Period>): _95.Period;
                fromAmino(object: _95.PeriodAmino): _95.Period;
                toAmino(message: _95.Period): _95.PeriodAmino;
                fromAminoMsg(object: _95.PeriodAminoMsg): _95.Period;
                toAminoMsg(message: _95.Period): _95.PeriodAminoMsg;
                fromProtoMsg(message: _95.PeriodProtoMsg): _95.Period;
                toProto(message: _95.Period): Uint8Array;
                toProtoMsg(message: _95.Period): _95.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _95.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.PeriodicVestingAccount;
                fromPartial(object: Partial<_95.PeriodicVestingAccount>): _95.PeriodicVestingAccount;
                fromAmino(object: _95.PeriodicVestingAccountAmino): _95.PeriodicVestingAccount;
                toAmino(message: _95.PeriodicVestingAccount): _95.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _95.PeriodicVestingAccountAminoMsg): _95.PeriodicVestingAccount;
                toAminoMsg(message: _95.PeriodicVestingAccount): _95.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _95.PeriodicVestingAccountProtoMsg): _95.PeriodicVestingAccount;
                toProto(message: _95.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _95.PeriodicVestingAccount): _95.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _95.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.PermanentLockedAccount;
                fromPartial(object: Partial<_95.PermanentLockedAccount>): _95.PermanentLockedAccount;
                fromAmino(object: _95.PermanentLockedAccountAmino): _95.PermanentLockedAccount;
                toAmino(message: _95.PermanentLockedAccount): _95.PermanentLockedAccountAmino;
                fromAminoMsg(object: _95.PermanentLockedAccountAminoMsg): _95.PermanentLockedAccount;
                toAminoMsg(message: _95.PermanentLockedAccount): _95.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _95.PermanentLockedAccountProtoMsg): _95.PermanentLockedAccount;
                toProto(message: _95.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _95.PermanentLockedAccount): _95.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _94.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgCreateVestingAccount;
                fromPartial(object: Partial<_94.MsgCreateVestingAccount>): _94.MsgCreateVestingAccount;
                fromAmino(object: _94.MsgCreateVestingAccountAmino): _94.MsgCreateVestingAccount;
                toAmino(message: _94.MsgCreateVestingAccount): _94.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _94.MsgCreateVestingAccountAminoMsg): _94.MsgCreateVestingAccount;
                toAminoMsg(message: _94.MsgCreateVestingAccount): _94.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _94.MsgCreateVestingAccountProtoMsg): _94.MsgCreateVestingAccount;
                toProto(message: _94.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _94.MsgCreateVestingAccount): _94.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _94.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_94.MsgCreateVestingAccountResponse>): _94.MsgCreateVestingAccountResponse;
                fromAmino(_: _94.MsgCreateVestingAccountResponseAmino): _94.MsgCreateVestingAccountResponse;
                toAmino(_: _94.MsgCreateVestingAccountResponse): _94.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _94.MsgCreateVestingAccountResponseAminoMsg): _94.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _94.MsgCreateVestingAccountResponse): _94.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _94.MsgCreateVestingAccountResponseProtoMsg): _94.MsgCreateVestingAccountResponse;
                toProto(message: _94.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _94.MsgCreateVestingAccountResponse): _94.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _94.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_94.MsgCreatePermanentLockedAccount>): _94.MsgCreatePermanentLockedAccount;
                fromAmino(object: _94.MsgCreatePermanentLockedAccountAmino): _94.MsgCreatePermanentLockedAccount;
                toAmino(message: _94.MsgCreatePermanentLockedAccount): _94.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _94.MsgCreatePermanentLockedAccountAminoMsg): _94.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _94.MsgCreatePermanentLockedAccount): _94.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _94.MsgCreatePermanentLockedAccountProtoMsg): _94.MsgCreatePermanentLockedAccount;
                toProto(message: _94.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _94.MsgCreatePermanentLockedAccount): _94.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _94.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_94.MsgCreatePermanentLockedAccountResponse>): _94.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _94.MsgCreatePermanentLockedAccountResponseAmino): _94.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _94.MsgCreatePermanentLockedAccountResponse): _94.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _94.MsgCreatePermanentLockedAccountResponseAminoMsg): _94.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _94.MsgCreatePermanentLockedAccountResponse): _94.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _94.MsgCreatePermanentLockedAccountResponseProtoMsg): _94.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _94.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _94.MsgCreatePermanentLockedAccountResponse): _94.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _94.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_94.MsgCreatePeriodicVestingAccount>): _94.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _94.MsgCreatePeriodicVestingAccountAmino): _94.MsgCreatePeriodicVestingAccount;
                toAmino(message: _94.MsgCreatePeriodicVestingAccount): _94.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _94.MsgCreatePeriodicVestingAccountAminoMsg): _94.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _94.MsgCreatePeriodicVestingAccount): _94.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _94.MsgCreatePeriodicVestingAccountProtoMsg): _94.MsgCreatePeriodicVestingAccount;
                toProto(message: _94.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _94.MsgCreatePeriodicVestingAccount): _94.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _94.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_94.MsgCreatePeriodicVestingAccountResponse>): _94.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _94.MsgCreatePeriodicVestingAccountResponseAmino): _94.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _94.MsgCreatePeriodicVestingAccountResponse): _94.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _94.MsgCreatePeriodicVestingAccountResponseAminoMsg): _94.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _94.MsgCreatePeriodicVestingAccountResponse): _94.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _94.MsgCreatePeriodicVestingAccountResponseProtoMsg): _94.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _94.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _94.MsgCreatePeriodicVestingAccountResponse): _94.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
            MsgDonateAllVestingTokens: {
                typeUrl: string;
                encode(message: _94.MsgDonateAllVestingTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgDonateAllVestingTokens;
                fromPartial(object: Partial<_94.MsgDonateAllVestingTokens>): _94.MsgDonateAllVestingTokens;
                fromAmino(object: _94.MsgDonateAllVestingTokensAmino): _94.MsgDonateAllVestingTokens;
                toAmino(message: _94.MsgDonateAllVestingTokens): _94.MsgDonateAllVestingTokensAmino;
                fromAminoMsg(object: _94.MsgDonateAllVestingTokensAminoMsg): _94.MsgDonateAllVestingTokens;
                toAminoMsg(message: _94.MsgDonateAllVestingTokens): _94.MsgDonateAllVestingTokensAminoMsg;
                fromProtoMsg(message: _94.MsgDonateAllVestingTokensProtoMsg): _94.MsgDonateAllVestingTokens;
                toProto(message: _94.MsgDonateAllVestingTokens): Uint8Array;
                toProtoMsg(message: _94.MsgDonateAllVestingTokens): _94.MsgDonateAllVestingTokensProtoMsg;
            };
            MsgDonateAllVestingTokensResponse: {
                typeUrl: string;
                encode(_: _94.MsgDonateAllVestingTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgDonateAllVestingTokensResponse;
                fromPartial(_: Partial<_94.MsgDonateAllVestingTokensResponse>): _94.MsgDonateAllVestingTokensResponse;
                fromAmino(_: _94.MsgDonateAllVestingTokensResponseAmino): _94.MsgDonateAllVestingTokensResponse;
                toAmino(_: _94.MsgDonateAllVestingTokensResponse): _94.MsgDonateAllVestingTokensResponseAmino;
                fromAminoMsg(object: _94.MsgDonateAllVestingTokensResponseAminoMsg): _94.MsgDonateAllVestingTokensResponse;
                toAminoMsg(message: _94.MsgDonateAllVestingTokensResponse): _94.MsgDonateAllVestingTokensResponseAminoMsg;
                fromProtoMsg(message: _94.MsgDonateAllVestingTokensResponseProtoMsg): _94.MsgDonateAllVestingTokensResponse;
                toProto(message: _94.MsgDonateAllVestingTokensResponse): Uint8Array;
                toProtoMsg(message: _94.MsgDonateAllVestingTokensResponse): _94.MsgDonateAllVestingTokensResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _180.MsgClientImpl;
                };
                bank: {
                    v1beta1: _181.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _182.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _183.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _184.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _185.MsgClientImpl;
                };
                gov: {
                    v1: _186.MsgClientImpl;
                    v1beta1: _187.MsgClientImpl;
                };
                group: {
                    v1: _188.MsgClientImpl;
                };
                nft: {
                    v1beta1: _189.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _190.MsgClientImpl;
                };
                staking: {
                    v1beta1: _191.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _192.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _193.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _3.QueryConfigRequest): Promise<_3.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _6.QueryAccountsRequest): Promise<_6.QueryAccountsResponse>;
                        account(request: _6.QueryAccountRequest): Promise<_6.QueryAccountResponse>;
                        accountAddressByID(request: _6.QueryAccountAddressByIDRequest): Promise<_6.QueryAccountAddressByIDResponse>;
                        params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                        moduleAccounts(request?: _6.QueryModuleAccountsRequest): Promise<_6.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _6.QueryModuleAccountByNameRequest): Promise<_6.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _6.Bech32PrefixRequest): Promise<_6.Bech32PrefixResponse>;
                        addressBytesToString(request: _6.AddressBytesToStringRequest): Promise<_6.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _6.AddressStringToBytesRequest): Promise<_6.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _10.QueryGrantsRequest): Promise<_10.QueryGrantsResponse>;
                        granterGrants(request: _10.QueryGranterGrantsRequest): Promise<_10.QueryGranterGrantsResponse>;
                        granteeGrants(request: _10.QueryGranteeGrantsRequest): Promise<_10.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _15.QueryBalanceRequest): Promise<_15.QueryBalanceResponse>;
                        allBalances(request: _15.QueryAllBalancesRequest): Promise<_15.QueryAllBalancesResponse>;
                        spendableBalances(request: _15.QuerySpendableBalancesRequest): Promise<_15.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _15.QueryTotalSupplyRequest): Promise<_15.QueryTotalSupplyResponse>;
                        supplyOf(request: _15.QuerySupplyOfRequest): Promise<_15.QuerySupplyOfResponse>;
                        params(request?: _15.QueryParamsRequest): Promise<_15.QueryParamsResponse>;
                        denomMetadata(request: _15.QueryDenomMetadataRequest): Promise<_15.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _15.QueryDenomsMetadataRequest): Promise<_15.QueryDenomsMetadataResponse>;
                        denomOwners(request: _15.QueryDenomOwnersRequest): Promise<_15.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _19.ConfigRequest): Promise<_19.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _26.GetNodeInfoRequest): Promise<_26.GetNodeInfoResponse>;
                            getSyncing(request?: _26.GetSyncingRequest): Promise<_26.GetSyncingResponse>;
                            getLatestBlock(request?: _26.GetLatestBlockRequest): Promise<_26.GetLatestBlockResponse>;
                            getBlockByHeight(request: _26.GetBlockByHeightRequest): Promise<_26.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _26.GetLatestValidatorSetRequest): Promise<_26.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _26.GetValidatorSetByHeightRequest): Promise<_26.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _26.ABCIQueryRequest): Promise<_26.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _41.QueryValidatorOutstandingRewardsRequest): Promise<_41.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _41.QueryValidatorCommissionRequest): Promise<_41.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _41.QueryValidatorSlashesRequest): Promise<_41.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _41.QueryDelegationRewardsRequest): Promise<_41.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _41.QueryDelegationTotalRewardsRequest): Promise<_41.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _41.QueryDelegatorValidatorsRequest): Promise<_41.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _41.QueryDelegatorWithdrawAddressRequest): Promise<_41.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _41.QueryCommunityPoolRequest): Promise<_41.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _45.QueryEvidenceRequest): Promise<_45.QueryEvidenceResponse>;
                        allEvidence(request?: _45.QueryAllEvidenceRequest): Promise<_45.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _49.QueryAllowanceRequest): Promise<_49.QueryAllowanceResponse>;
                        allowances(request: _49.QueryAllowancesRequest): Promise<_49.QueryAllowancesResponse>;
                        allowancesByGranter(request: _49.QueryAllowancesByGranterRequest): Promise<_49.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _54.QueryProposalRequest): Promise<_54.QueryProposalResponse>;
                        proposals(request: _54.QueryProposalsRequest): Promise<_54.QueryProposalsResponse>;
                        vote(request: _54.QueryVoteRequest): Promise<_54.QueryVoteResponse>;
                        votes(request: _54.QueryVotesRequest): Promise<_54.QueryVotesResponse>;
                        params(request: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                        deposit(request: _54.QueryDepositRequest): Promise<_54.QueryDepositResponse>;
                        deposits(request: _54.QueryDepositsRequest): Promise<_54.QueryDepositsResponse>;
                        tallyResult(request: _54.QueryTallyResultRequest): Promise<_54.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _58.QueryProposalRequest): Promise<_58.QueryProposalResponse>;
                        proposals(request: _58.QueryProposalsRequest): Promise<_58.QueryProposalsResponse>;
                        vote(request: _58.QueryVoteRequest): Promise<_58.QueryVoteResponse>;
                        votes(request: _58.QueryVotesRequest): Promise<_58.QueryVotesResponse>;
                        params(request: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                        deposit(request: _58.QueryDepositRequest): Promise<_58.QueryDepositResponse>;
                        deposits(request: _58.QueryDepositsRequest): Promise<_58.QueryDepositsResponse>;
                        tallyResult(request: _58.QueryTallyResultRequest): Promise<_58.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _62.QueryGroupInfoRequest): Promise<_62.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _62.QueryGroupPolicyInfoRequest): Promise<_62.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _62.QueryGroupMembersRequest): Promise<_62.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _62.QueryGroupsByAdminRequest): Promise<_62.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _62.QueryGroupPoliciesByGroupRequest): Promise<_62.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _62.QueryGroupPoliciesByAdminRequest): Promise<_62.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _62.QueryProposalRequest): Promise<_62.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _62.QueryProposalsByGroupPolicyRequest): Promise<_62.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _62.QueryVoteByProposalVoterRequest): Promise<_62.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _62.QueryVotesByProposalRequest): Promise<_62.QueryVotesByProposalResponse>;
                        votesByVoter(request: _62.QueryVotesByVoterRequest): Promise<_62.QueryVotesByVoterResponse>;
                        groupsByMember(request: _62.QueryGroupsByMemberRequest): Promise<_62.QueryGroupsByMemberResponse>;
                        tallyResult(request: _62.QueryTallyResultRequest): Promise<_62.QueryTallyResultResponse>;
                        groups(request?: _62.QueryGroupsRequest): Promise<_62.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                        inflation(request?: _67.QueryInflationRequest): Promise<_67.QueryInflationResponse>;
                        annualProvisions(request?: _67.QueryAnnualProvisionsRequest): Promise<_67.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _72.QueryBalanceRequest): Promise<_72.QueryBalanceResponse>;
                        owner(request: _72.QueryOwnerRequest): Promise<_72.QueryOwnerResponse>;
                        supply(request: _72.QuerySupplyRequest): Promise<_72.QuerySupplyResponse>;
                        nFTs(request: _72.QueryNFTsRequest): Promise<_72.QueryNFTsResponse>;
                        nFT(request: _72.QueryNFTRequest): Promise<_72.QueryNFTResponse>;
                        class(request: _72.QueryClassRequest): Promise<_72.QueryClassResponse>;
                        classes(request?: _72.QueryClassesRequest): Promise<_72.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _78.QueryParamsRequest): Promise<_78.QueryParamsResponse>;
                        subspaces(request?: _78.QuerySubspacesRequest): Promise<_78.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _80.QueryParamsRequest): Promise<_80.QueryParamsResponse>;
                        signingInfo(request: _80.QuerySigningInfoRequest): Promise<_80.QuerySigningInfoResponse>;
                        signingInfos(request?: _80.QuerySigningInfosRequest): Promise<_80.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _85.QueryValidatorsRequest): Promise<_85.QueryValidatorsResponse>;
                        validator(request: _85.QueryValidatorRequest): Promise<_85.QueryValidatorResponse>;
                        validatorDelegations(request: _85.QueryValidatorDelegationsRequest): Promise<_85.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _85.QueryValidatorUnbondingDelegationsRequest): Promise<_85.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _85.QueryDelegationRequest): Promise<_85.QueryDelegationResponse>;
                        unbondingDelegation(request: _85.QueryUnbondingDelegationRequest): Promise<_85.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _85.QueryDelegatorDelegationsRequest): Promise<_85.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _85.QueryDelegatorUnbondingDelegationsRequest): Promise<_85.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _85.QueryRedelegationsRequest): Promise<_85.QueryRedelegationsResponse>;
                        delegatorValidators(request: _85.QueryDelegatorValidatorsRequest): Promise<_85.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _85.QueryDelegatorValidatorRequest): Promise<_85.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _85.QueryHistoricalInfoRequest): Promise<_85.QueryHistoricalInfoResponse>;
                        pool(request?: _85.QueryPoolRequest): Promise<_85.QueryPoolResponse>;
                        params(request?: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _89.SimulateRequest): Promise<_89.SimulateResponse>;
                        getTx(request: _89.GetTxRequest): Promise<_89.GetTxResponse>;
                        broadcastTx(request: _89.BroadcastTxRequest): Promise<_89.BroadcastTxResponse>;
                        getTxsEvent(request: _89.GetTxsEventRequest): Promise<_89.GetTxsEventResponse>;
                        getBlockWithTxs(request: _89.GetBlockWithTxsRequest): Promise<_89.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _91.QueryCurrentPlanRequest): Promise<_91.QueryCurrentPlanResponse>;
                        appliedPlan(request: _91.QueryAppliedPlanRequest): Promise<_91.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _91.QueryUpgradedConsensusStateRequest): Promise<_91.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _91.QueryModuleVersionsRequest): Promise<_91.QueryModuleVersionsResponse>;
                        authority(request?: _91.QueryAuthorityRequest): Promise<_91.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _143.LCDQueryClient;
                };
                authz: {
                    v1beta1: _144.LCDQueryClient;
                };
                bank: {
                    v1beta1: _145.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _146.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _147.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _148.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _149.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _150.LCDQueryClient;
                };
                gov: {
                    v1: _151.LCDQueryClient;
                    v1beta1: _152.LCDQueryClient;
                };
                group: {
                    v1: _153.LCDQueryClient;
                };
                mint: {
                    v1beta1: _154.LCDQueryClient;
                };
                nft: {
                    v1beta1: _155.LCDQueryClient;
                };
                params: {
                    v1beta1: _156.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _157.LCDQueryClient;
                };
                staking: {
                    v1beta1: _158.LCDQueryClient;
                };
                tx: {
                    v1beta1: _159.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _160.LCDQueryClient;
                };
            };
        }>;
    };
}
