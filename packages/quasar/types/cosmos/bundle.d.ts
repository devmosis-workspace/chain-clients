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
import * as _55 from "./base/v1beta1/coin";
import * as _56 from "./capability/v1beta1/capability";
import * as _57 from "./capability/v1beta1/genesis";
import * as _58 from "./crisis/v1beta1/genesis";
import * as _59 from "./crisis/v1beta1/tx";
import * as _60 from "./crypto/ed25519/keys";
import * as _61 from "./crypto/multisig/keys";
import * as _62 from "./crypto/secp256k1/keys";
import * as _63 from "./crypto/secp256r1/keys";
import * as _64 from "./distribution/v1beta1/distribution";
import * as _65 from "./distribution/v1beta1/genesis";
import * as _66 from "./distribution/v1beta1/query";
import * as _67 from "./distribution/v1beta1/tx";
import * as _68 from "./evidence/v1beta1/evidence";
import * as _69 from "./evidence/v1beta1/genesis";
import * as _70 from "./evidence/v1beta1/query";
import * as _71 from "./evidence/v1beta1/tx";
import * as _72 from "./feegrant/v1beta1/feegrant";
import * as _73 from "./feegrant/v1beta1/genesis";
import * as _74 from "./feegrant/v1beta1/query";
import * as _75 from "./feegrant/v1beta1/tx";
import * as _76 from "./genutil/v1beta1/genesis";
import * as _77 from "./gov/v1beta1/genesis";
import * as _78 from "./gov/v1beta1/gov";
import * as _79 from "./gov/v1beta1/query";
import * as _80 from "./gov/v1beta1/tx";
import * as _81 from "./mint/v1beta1/genesis";
import * as _82 from "./mint/v1beta1/mint";
import * as _83 from "./mint/v1beta1/query";
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
import * as _99 from "./upgrade/v1beta1/upgrade";
import * as _100 from "./vesting/v1beta1/tx";
import * as _101 from "./vesting/v1beta1/vesting";
import * as _218 from "./auth/v1beta1/query.lcd";
import * as _219 from "./authz/v1beta1/query.lcd";
import * as _220 from "./bank/v1beta1/query.lcd";
import * as _221 from "./base/node/v1beta1/query.lcd";
import * as _222 from "./base/tendermint/v1beta1/query.lcd";
import * as _223 from "./distribution/v1beta1/query.lcd";
import * as _224 from "./evidence/v1beta1/query.lcd";
import * as _225 from "./feegrant/v1beta1/query.lcd";
import * as _226 from "./gov/v1beta1/query.lcd";
import * as _227 from "./mint/v1beta1/query.lcd";
import * as _228 from "./params/v1beta1/query.lcd";
import * as _229 from "./slashing/v1beta1/query.lcd";
import * as _230 from "./staking/v1beta1/query.lcd";
import * as _231 from "./tx/v1beta1/service.lcd";
import * as _232 from "./upgrade/v1beta1/query.lcd";
import * as _233 from "./auth/v1beta1/query.rpc.Query";
import * as _234 from "./authz/v1beta1/query.rpc.Query";
import * as _235 from "./bank/v1beta1/query.rpc.Query";
import * as _236 from "./base/node/v1beta1/query.rpc.Service";
import * as _237 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _238 from "./distribution/v1beta1/query.rpc.Query";
import * as _239 from "./evidence/v1beta1/query.rpc.Query";
import * as _240 from "./feegrant/v1beta1/query.rpc.Query";
import * as _241 from "./gov/v1beta1/query.rpc.Query";
import * as _242 from "./mint/v1beta1/query.rpc.Query";
import * as _243 from "./params/v1beta1/query.rpc.Query";
import * as _244 from "./slashing/v1beta1/query.rpc.Query";
import * as _245 from "./staking/v1beta1/query.rpc.Query";
import * as _246 from "./tx/v1beta1/service.rpc.Service";
import * as _247 from "./upgrade/v1beta1/query.rpc.Query";
import * as _248 from "./authz/v1beta1/tx.rpc.msg";
import * as _249 from "./bank/v1beta1/tx.rpc.msg";
import * as _250 from "./crisis/v1beta1/tx.rpc.msg";
import * as _251 from "./distribution/v1beta1/tx.rpc.msg";
import * as _252 from "./evidence/v1beta1/tx.rpc.msg";
import * as _253 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _254 from "./gov/v1beta1/tx.rpc.msg";
import * as _255 from "./slashing/v1beta1/tx.rpc.msg";
import * as _256 from "./staking/v1beta1/tx.rpc.msg";
import * as _257 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _233.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _34.QueryAccountsRequest): Promise<_34.QueryAccountsResponse>;
                account(request: _34.QueryAccountRequest): Promise<_34.QueryAccountResponse>;
                params(request?: _34.QueryParamsRequest): Promise<_34.QueryParamsResponse>;
                moduleAccountByName(request: _34.QueryModuleAccountByNameRequest): Promise<_34.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _218.LCDQueryClient;
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
            MsgClientImpl: typeof _248.MsgClientImpl;
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _38.QueryGrantsRequest): Promise<_38.QueryGrantsResponse>;
                granterGrants(request: _38.QueryGranterGrantsRequest): Promise<_38.QueryGranterGrantsResponse>;
                granteeGrants(request: _38.QueryGranteeGrantsRequest): Promise<_38.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _219.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
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
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _40.SendAuthorization | _90.StakeAuthorization | _35.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _249.MsgClientImpl;
            QueryClientImpl: typeof _235.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _43.QueryBalanceRequest): Promise<_43.QueryBalanceResponse>;
                allBalances(request: _43.QueryAllBalancesRequest): Promise<_43.QueryAllBalancesResponse>;
                spendableBalances(request: _43.QuerySpendableBalancesRequest): Promise<_43.QuerySpendableBalancesResponse>;
                totalSupply(request?: _43.QueryTotalSupplyRequest): Promise<_43.QueryTotalSupplyResponse>;
                supplyOf(request: _43.QuerySupplyOfRequest): Promise<_43.QuerySupplyOfResponse>;
                params(request?: _43.QueryParamsRequest): Promise<_43.QueryParamsResponse>;
                denomMetadata(request: _43.QueryDenomMetadataRequest): Promise<_43.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _43.QueryDenomsMetadataRequest): Promise<_43.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _220.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
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
                ServiceClientImpl: typeof _236.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _47.ConfigRequest): Promise<_47.ConfigResponse>;
                };
                LCDQueryClient: typeof _221.LCDQueryClient;
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
                ServiceClientImpl: typeof _237.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _54.GetNodeInfoRequest): Promise<_54.GetNodeInfoResponse>;
                    getSyncing(request?: _54.GetSyncingRequest): Promise<_54.GetSyncingResponse>;
                    getLatestBlock(request?: _54.GetLatestBlockRequest): Promise<_54.GetLatestBlockResponse>;
                    getBlockByHeight(request: _54.GetBlockByHeightRequest): Promise<_54.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _54.GetLatestValidatorSetRequest): Promise<_54.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _54.GetValidatorSetByHeightRequest): Promise<_54.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _222.LCDQueryClient;
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
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _55.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.Coin;
                fromPartial(object: Partial<_55.Coin>): _55.Coin;
                fromAmino(object: _55.CoinAmino): _55.Coin;
                toAmino(message: _55.Coin): _55.CoinAmino;
                fromAminoMsg(object: _55.CoinAminoMsg): _55.Coin;
                toAminoMsg(message: _55.Coin): _55.CoinAminoMsg;
                fromProtoMsg(message: _55.CoinProtoMsg): _55.Coin;
                toProto(message: _55.Coin): Uint8Array;
                toProtoMsg(message: _55.Coin): _55.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _55.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.DecCoin;
                fromPartial(object: Partial<_55.DecCoin>): _55.DecCoin;
                fromAmino(object: _55.DecCoinAmino): _55.DecCoin;
                toAmino(message: _55.DecCoin): _55.DecCoinAmino;
                fromAminoMsg(object: _55.DecCoinAminoMsg): _55.DecCoin;
                toAminoMsg(message: _55.DecCoin): _55.DecCoinAminoMsg;
                fromProtoMsg(message: _55.DecCoinProtoMsg): _55.DecCoin;
                toProto(message: _55.DecCoin): Uint8Array;
                toProtoMsg(message: _55.DecCoin): _55.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _55.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.IntProto;
                fromPartial(object: Partial<_55.IntProto>): _55.IntProto;
                fromAmino(object: _55.IntProtoAmino): _55.IntProto;
                toAmino(message: _55.IntProto): _55.IntProtoAmino;
                fromAminoMsg(object: _55.IntProtoAminoMsg): _55.IntProto;
                toAminoMsg(message: _55.IntProto): _55.IntProtoAminoMsg;
                fromProtoMsg(message: _55.IntProtoProtoMsg): _55.IntProto;
                toProto(message: _55.IntProto): Uint8Array;
                toProtoMsg(message: _55.IntProto): _55.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _55.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.DecProto;
                fromPartial(object: Partial<_55.DecProto>): _55.DecProto;
                fromAmino(object: _55.DecProtoAmino): _55.DecProto;
                toAmino(message: _55.DecProto): _55.DecProtoAmino;
                fromAminoMsg(object: _55.DecProtoAminoMsg): _55.DecProto;
                toAminoMsg(message: _55.DecProto): _55.DecProtoAminoMsg;
                fromProtoMsg(message: _55.DecProtoProtoMsg): _55.DecProto;
                toProto(message: _55.DecProto): Uint8Array;
                toProtoMsg(message: _55.DecProto): _55.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _57.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.GenesisOwners;
                fromPartial(object: Partial<_57.GenesisOwners>): _57.GenesisOwners;
                fromAmino(object: _57.GenesisOwnersAmino): _57.GenesisOwners;
                toAmino(message: _57.GenesisOwners): _57.GenesisOwnersAmino;
                fromAminoMsg(object: _57.GenesisOwnersAminoMsg): _57.GenesisOwners;
                toAminoMsg(message: _57.GenesisOwners): _57.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _57.GenesisOwnersProtoMsg): _57.GenesisOwners;
                toProto(message: _57.GenesisOwners): Uint8Array;
                toProtoMsg(message: _57.GenesisOwners): _57.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _56.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Capability;
                fromPartial(object: Partial<_56.Capability>): _56.Capability;
                fromAmino(object: _56.CapabilityAmino): _56.Capability;
                toAmino(message: _56.Capability): _56.CapabilityAmino;
                fromAminoMsg(object: _56.CapabilityAminoMsg): _56.Capability;
                toAminoMsg(message: _56.Capability): _56.CapabilityAminoMsg;
                fromProtoMsg(message: _56.CapabilityProtoMsg): _56.Capability;
                toProto(message: _56.Capability): Uint8Array;
                toProtoMsg(message: _56.Capability): _56.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _56.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Owner;
                fromPartial(object: Partial<_56.Owner>): _56.Owner;
                fromAmino(object: _56.OwnerAmino): _56.Owner;
                toAmino(message: _56.Owner): _56.OwnerAmino;
                fromAminoMsg(object: _56.OwnerAminoMsg): _56.Owner;
                toAminoMsg(message: _56.Owner): _56.OwnerAminoMsg;
                fromProtoMsg(message: _56.OwnerProtoMsg): _56.Owner;
                toProto(message: _56.Owner): Uint8Array;
                toProtoMsg(message: _56.Owner): _56.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _56.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.CapabilityOwners;
                fromPartial(object: Partial<_56.CapabilityOwners>): _56.CapabilityOwners;
                fromAmino(object: _56.CapabilityOwnersAmino): _56.CapabilityOwners;
                toAmino(message: _56.CapabilityOwners): _56.CapabilityOwnersAmino;
                fromAminoMsg(object: _56.CapabilityOwnersAminoMsg): _56.CapabilityOwners;
                toAminoMsg(message: _56.CapabilityOwners): _56.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _56.CapabilityOwnersProtoMsg): _56.CapabilityOwners;
                toProto(message: _56.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _56.CapabilityOwners): _56.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _250.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _59.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _59.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _59.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _59.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _59.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _59.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _59.MsgVerifyInvariant) => _59.MsgVerifyInvariantAmino;
                    fromAmino: (object: _59.MsgVerifyInvariantAmino) => _59.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _59.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgVerifyInvariant;
                fromPartial(object: Partial<_59.MsgVerifyInvariant>): _59.MsgVerifyInvariant;
                fromAmino(object: _59.MsgVerifyInvariantAmino): _59.MsgVerifyInvariant;
                toAmino(message: _59.MsgVerifyInvariant): _59.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _59.MsgVerifyInvariantAminoMsg): _59.MsgVerifyInvariant;
                toAminoMsg(message: _59.MsgVerifyInvariant): _59.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _59.MsgVerifyInvariantProtoMsg): _59.MsgVerifyInvariant;
                toProto(message: _59.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _59.MsgVerifyInvariant): _59.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _59.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_59.MsgVerifyInvariantResponse>): _59.MsgVerifyInvariantResponse;
                fromAmino(_: _59.MsgVerifyInvariantResponseAmino): _59.MsgVerifyInvariantResponse;
                toAmino(_: _59.MsgVerifyInvariantResponse): _59.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _59.MsgVerifyInvariantResponseAminoMsg): _59.MsgVerifyInvariantResponse;
                toAminoMsg(message: _59.MsgVerifyInvariantResponse): _59.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _59.MsgVerifyInvariantResponseProtoMsg): _59.MsgVerifyInvariantResponse;
                toProto(message: _59.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _59.MsgVerifyInvariantResponse): _59.MsgVerifyInvariantResponseProtoMsg;
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
        };
    }
    namespace crypto {
        const ed25519: {
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
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _61.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.LegacyAminoPubKey;
                fromPartial(object: Partial<_61.LegacyAminoPubKey>): _61.LegacyAminoPubKey;
                fromAmino(object: _61.LegacyAminoPubKeyAmino): _61.LegacyAminoPubKey;
                toAmino(message: _61.LegacyAminoPubKey): _61.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _61.LegacyAminoPubKeyAminoMsg): _61.LegacyAminoPubKey;
                toAminoMsg(message: _61.LegacyAminoPubKey): _61.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _61.LegacyAminoPubKeyProtoMsg): _61.LegacyAminoPubKey;
                toProto(message: _61.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _61.LegacyAminoPubKey): _61.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _62.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.PubKey;
                fromPartial(object: Partial<_62.PubKey>): _62.PubKey;
                fromAmino(object: _62.PubKeyAmino): _62.PubKey;
                toAmino(message: _62.PubKey): _62.PubKeyAmino;
                fromAminoMsg(object: _62.PubKeyAminoMsg): _62.PubKey;
                toAminoMsg(message: _62.PubKey): _62.PubKeyAminoMsg;
                fromProtoMsg(message: _62.PubKeyProtoMsg): _62.PubKey;
                toProto(message: _62.PubKey): Uint8Array;
                toProtoMsg(message: _62.PubKey): _62.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _62.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.PrivKey;
                fromPartial(object: Partial<_62.PrivKey>): _62.PrivKey;
                fromAmino(object: _62.PrivKeyAmino): _62.PrivKey;
                toAmino(message: _62.PrivKey): _62.PrivKeyAmino;
                fromAminoMsg(object: _62.PrivKeyAminoMsg): _62.PrivKey;
                toAminoMsg(message: _62.PrivKey): _62.PrivKeyAminoMsg;
                fromProtoMsg(message: _62.PrivKeyProtoMsg): _62.PrivKey;
                toProto(message: _62.PrivKey): Uint8Array;
                toProtoMsg(message: _62.PrivKey): _62.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
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
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _251.MsgClientImpl;
            QueryClientImpl: typeof _238.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                validatorOutstandingRewards(request: _66.QueryValidatorOutstandingRewardsRequest): Promise<_66.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _66.QueryValidatorCommissionRequest): Promise<_66.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _66.QueryValidatorSlashesRequest): Promise<_66.QueryValidatorSlashesResponse>;
                delegationRewards(request: _66.QueryDelegationRewardsRequest): Promise<_66.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _66.QueryDelegationTotalRewardsRequest): Promise<_66.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _66.QueryDelegatorValidatorsRequest): Promise<_66.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _66.QueryDelegatorWithdrawAddressRequest): Promise<_66.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _66.QueryCommunityPoolRequest): Promise<_66.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _223.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _67.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _67.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _67.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _67.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _67.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _67.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _67.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _67.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _67.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _67.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _67.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _67.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _67.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _67.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _67.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _67.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _67.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _67.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _67.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _67.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _67.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _67.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _67.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _67.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _67.MsgSetWithdrawAddress) => _67.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _67.MsgSetWithdrawAddressAmino) => _67.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _67.MsgWithdrawDelegatorReward) => _67.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _67.MsgWithdrawDelegatorRewardAmino) => _67.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _67.MsgWithdrawValidatorCommission) => _67.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _67.MsgWithdrawValidatorCommissionAmino) => _67.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _67.MsgFundCommunityPool) => _67.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _67.MsgFundCommunityPoolAmino) => _67.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _67.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_67.MsgSetWithdrawAddress>): _67.MsgSetWithdrawAddress;
                fromAmino(object: _67.MsgSetWithdrawAddressAmino): _67.MsgSetWithdrawAddress;
                toAmino(message: _67.MsgSetWithdrawAddress): _67.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _67.MsgSetWithdrawAddressAminoMsg): _67.MsgSetWithdrawAddress;
                toAminoMsg(message: _67.MsgSetWithdrawAddress): _67.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _67.MsgSetWithdrawAddressProtoMsg): _67.MsgSetWithdrawAddress;
                toProto(message: _67.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _67.MsgSetWithdrawAddress): _67.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _67.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_67.MsgSetWithdrawAddressResponse>): _67.MsgSetWithdrawAddressResponse;
                fromAmino(_: _67.MsgSetWithdrawAddressResponseAmino): _67.MsgSetWithdrawAddressResponse;
                toAmino(_: _67.MsgSetWithdrawAddressResponse): _67.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _67.MsgSetWithdrawAddressResponseAminoMsg): _67.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _67.MsgSetWithdrawAddressResponse): _67.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _67.MsgSetWithdrawAddressResponseProtoMsg): _67.MsgSetWithdrawAddressResponse;
                toProto(message: _67.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _67.MsgSetWithdrawAddressResponse): _67.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _67.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_67.MsgWithdrawDelegatorReward>): _67.MsgWithdrawDelegatorReward;
                fromAmino(object: _67.MsgWithdrawDelegatorRewardAmino): _67.MsgWithdrawDelegatorReward;
                toAmino(message: _67.MsgWithdrawDelegatorReward): _67.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _67.MsgWithdrawDelegatorRewardAminoMsg): _67.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _67.MsgWithdrawDelegatorReward): _67.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _67.MsgWithdrawDelegatorRewardProtoMsg): _67.MsgWithdrawDelegatorReward;
                toProto(message: _67.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _67.MsgWithdrawDelegatorReward): _67.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _67.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_67.MsgWithdrawDelegatorRewardResponse>): _67.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _67.MsgWithdrawDelegatorRewardResponseAmino): _67.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _67.MsgWithdrawDelegatorRewardResponse): _67.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _67.MsgWithdrawDelegatorRewardResponseAminoMsg): _67.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _67.MsgWithdrawDelegatorRewardResponse): _67.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _67.MsgWithdrawDelegatorRewardResponseProtoMsg): _67.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _67.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _67.MsgWithdrawDelegatorRewardResponse): _67.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _67.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_67.MsgWithdrawValidatorCommission>): _67.MsgWithdrawValidatorCommission;
                fromAmino(object: _67.MsgWithdrawValidatorCommissionAmino): _67.MsgWithdrawValidatorCommission;
                toAmino(message: _67.MsgWithdrawValidatorCommission): _67.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _67.MsgWithdrawValidatorCommissionAminoMsg): _67.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _67.MsgWithdrawValidatorCommission): _67.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _67.MsgWithdrawValidatorCommissionProtoMsg): _67.MsgWithdrawValidatorCommission;
                toProto(message: _67.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _67.MsgWithdrawValidatorCommission): _67.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _67.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_67.MsgWithdrawValidatorCommissionResponse>): _67.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _67.MsgWithdrawValidatorCommissionResponseAmino): _67.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _67.MsgWithdrawValidatorCommissionResponse): _67.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _67.MsgWithdrawValidatorCommissionResponseAminoMsg): _67.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _67.MsgWithdrawValidatorCommissionResponse): _67.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _67.MsgWithdrawValidatorCommissionResponseProtoMsg): _67.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _67.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _67.MsgWithdrawValidatorCommissionResponse): _67.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _67.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgFundCommunityPool;
                fromPartial(object: Partial<_67.MsgFundCommunityPool>): _67.MsgFundCommunityPool;
                fromAmino(object: _67.MsgFundCommunityPoolAmino): _67.MsgFundCommunityPool;
                toAmino(message: _67.MsgFundCommunityPool): _67.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _67.MsgFundCommunityPoolAminoMsg): _67.MsgFundCommunityPool;
                toAminoMsg(message: _67.MsgFundCommunityPool): _67.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _67.MsgFundCommunityPoolProtoMsg): _67.MsgFundCommunityPool;
                toProto(message: _67.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _67.MsgFundCommunityPool): _67.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _67.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_67.MsgFundCommunityPoolResponse>): _67.MsgFundCommunityPoolResponse;
                fromAmino(_: _67.MsgFundCommunityPoolResponseAmino): _67.MsgFundCommunityPoolResponse;
                toAmino(_: _67.MsgFundCommunityPoolResponse): _67.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _67.MsgFundCommunityPoolResponseAminoMsg): _67.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _67.MsgFundCommunityPoolResponse): _67.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _67.MsgFundCommunityPoolResponseProtoMsg): _67.MsgFundCommunityPoolResponse;
                toProto(message: _67.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _67.MsgFundCommunityPoolResponse): _67.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _66.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _66.QueryParamsRequest;
                fromPartial(_: Partial<_66.QueryParamsRequest>): _66.QueryParamsRequest;
                fromAmino(_: _66.QueryParamsRequestAmino): _66.QueryParamsRequest;
                toAmino(_: _66.QueryParamsRequest): _66.QueryParamsRequestAmino;
                fromAminoMsg(object: _66.QueryParamsRequestAminoMsg): _66.QueryParamsRequest;
                toAminoMsg(message: _66.QueryParamsRequest): _66.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryParamsRequestProtoMsg): _66.QueryParamsRequest;
                toProto(message: _66.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryParamsRequest): _66.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _66.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryParamsResponse;
                fromPartial(object: Partial<_66.QueryParamsResponse>): _66.QueryParamsResponse;
                fromAmino(object: _66.QueryParamsResponseAmino): _66.QueryParamsResponse;
                toAmino(message: _66.QueryParamsResponse): _66.QueryParamsResponseAmino;
                fromAminoMsg(object: _66.QueryParamsResponseAminoMsg): _66.QueryParamsResponse;
                toAminoMsg(message: _66.QueryParamsResponse): _66.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryParamsResponseProtoMsg): _66.QueryParamsResponse;
                toProto(message: _66.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryParamsResponse): _66.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _66.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_66.QueryValidatorOutstandingRewardsRequest>): _66.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _66.QueryValidatorOutstandingRewardsRequestAmino): _66.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _66.QueryValidatorOutstandingRewardsRequest): _66.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _66.QueryValidatorOutstandingRewardsRequestAminoMsg): _66.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _66.QueryValidatorOutstandingRewardsRequest): _66.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryValidatorOutstandingRewardsRequestProtoMsg): _66.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _66.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryValidatorOutstandingRewardsRequest): _66.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _66.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_66.QueryValidatorOutstandingRewardsResponse>): _66.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _66.QueryValidatorOutstandingRewardsResponseAmino): _66.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _66.QueryValidatorOutstandingRewardsResponse): _66.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _66.QueryValidatorOutstandingRewardsResponseAminoMsg): _66.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _66.QueryValidatorOutstandingRewardsResponse): _66.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryValidatorOutstandingRewardsResponseProtoMsg): _66.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _66.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryValidatorOutstandingRewardsResponse): _66.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _66.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_66.QueryValidatorCommissionRequest>): _66.QueryValidatorCommissionRequest;
                fromAmino(object: _66.QueryValidatorCommissionRequestAmino): _66.QueryValidatorCommissionRequest;
                toAmino(message: _66.QueryValidatorCommissionRequest): _66.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _66.QueryValidatorCommissionRequestAminoMsg): _66.QueryValidatorCommissionRequest;
                toAminoMsg(message: _66.QueryValidatorCommissionRequest): _66.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _66.QueryValidatorCommissionRequestProtoMsg): _66.QueryValidatorCommissionRequest;
                toProto(message: _66.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _66.QueryValidatorCommissionRequest): _66.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _66.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_66.QueryValidatorCommissionResponse>): _66.QueryValidatorCommissionResponse;
                fromAmino(object: _66.QueryValidatorCommissionResponseAmino): _66.QueryValidatorCommissionResponse;
                toAmino(message: _66.QueryValidatorCommissionResponse): _66.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _66.QueryValidatorCommissionResponseAminoMsg): _66.QueryValidatorCommissionResponse;
                toAminoMsg(message: _66.QueryValidatorCommissionResponse): _66.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _66.QueryValidatorCommissionResponseProtoMsg): _66.QueryValidatorCommissionResponse;
                toProto(message: _66.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _66.QueryValidatorCommissionResponse): _66.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _66.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_66.QueryValidatorSlashesRequest>): _66.QueryValidatorSlashesRequest;
                fromAmino(object: _66.QueryValidatorSlashesRequestAmino): _66.QueryValidatorSlashesRequest;
                toAmino(message: _66.QueryValidatorSlashesRequest): _66.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _66.QueryValidatorSlashesRequestAminoMsg): _66.QueryValidatorSlashesRequest;
                toAminoMsg(message: _66.QueryValidatorSlashesRequest): _66.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _66.QueryValidatorSlashesRequestProtoMsg): _66.QueryValidatorSlashesRequest;
                toProto(message: _66.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _66.QueryValidatorSlashesRequest): _66.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _66.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_66.QueryValidatorSlashesResponse>): _66.QueryValidatorSlashesResponse;
                fromAmino(object: _66.QueryValidatorSlashesResponseAmino): _66.QueryValidatorSlashesResponse;
                toAmino(message: _66.QueryValidatorSlashesResponse): _66.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _66.QueryValidatorSlashesResponseAminoMsg): _66.QueryValidatorSlashesResponse;
                toAminoMsg(message: _66.QueryValidatorSlashesResponse): _66.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _66.QueryValidatorSlashesResponseProtoMsg): _66.QueryValidatorSlashesResponse;
                toProto(message: _66.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _66.QueryValidatorSlashesResponse): _66.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _66.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_66.QueryDelegationRewardsRequest>): _66.QueryDelegationRewardsRequest;
                fromAmino(object: _66.QueryDelegationRewardsRequestAmino): _66.QueryDelegationRewardsRequest;
                toAmino(message: _66.QueryDelegationRewardsRequest): _66.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _66.QueryDelegationRewardsRequestAminoMsg): _66.QueryDelegationRewardsRequest;
                toAminoMsg(message: _66.QueryDelegationRewardsRequest): _66.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryDelegationRewardsRequestProtoMsg): _66.QueryDelegationRewardsRequest;
                toProto(message: _66.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryDelegationRewardsRequest): _66.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _66.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_66.QueryDelegationRewardsResponse>): _66.QueryDelegationRewardsResponse;
                fromAmino(object: _66.QueryDelegationRewardsResponseAmino): _66.QueryDelegationRewardsResponse;
                toAmino(message: _66.QueryDelegationRewardsResponse): _66.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _66.QueryDelegationRewardsResponseAminoMsg): _66.QueryDelegationRewardsResponse;
                toAminoMsg(message: _66.QueryDelegationRewardsResponse): _66.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryDelegationRewardsResponseProtoMsg): _66.QueryDelegationRewardsResponse;
                toProto(message: _66.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryDelegationRewardsResponse): _66.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _66.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_66.QueryDelegationTotalRewardsRequest>): _66.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _66.QueryDelegationTotalRewardsRequestAmino): _66.QueryDelegationTotalRewardsRequest;
                toAmino(message: _66.QueryDelegationTotalRewardsRequest): _66.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _66.QueryDelegationTotalRewardsRequestAminoMsg): _66.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _66.QueryDelegationTotalRewardsRequest): _66.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryDelegationTotalRewardsRequestProtoMsg): _66.QueryDelegationTotalRewardsRequest;
                toProto(message: _66.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryDelegationTotalRewardsRequest): _66.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _66.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_66.QueryDelegationTotalRewardsResponse>): _66.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _66.QueryDelegationTotalRewardsResponseAmino): _66.QueryDelegationTotalRewardsResponse;
                toAmino(message: _66.QueryDelegationTotalRewardsResponse): _66.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _66.QueryDelegationTotalRewardsResponseAminoMsg): _66.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _66.QueryDelegationTotalRewardsResponse): _66.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryDelegationTotalRewardsResponseProtoMsg): _66.QueryDelegationTotalRewardsResponse;
                toProto(message: _66.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryDelegationTotalRewardsResponse): _66.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _66.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_66.QueryDelegatorValidatorsRequest>): _66.QueryDelegatorValidatorsRequest;
                fromAmino(object: _66.QueryDelegatorValidatorsRequestAmino): _66.QueryDelegatorValidatorsRequest;
                toAmino(message: _66.QueryDelegatorValidatorsRequest): _66.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _66.QueryDelegatorValidatorsRequestAminoMsg): _66.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _66.QueryDelegatorValidatorsRequest): _66.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryDelegatorValidatorsRequestProtoMsg): _66.QueryDelegatorValidatorsRequest;
                toProto(message: _66.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryDelegatorValidatorsRequest): _66.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _66.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_66.QueryDelegatorValidatorsResponse>): _66.QueryDelegatorValidatorsResponse;
                fromAmino(object: _66.QueryDelegatorValidatorsResponseAmino): _66.QueryDelegatorValidatorsResponse;
                toAmino(message: _66.QueryDelegatorValidatorsResponse): _66.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _66.QueryDelegatorValidatorsResponseAminoMsg): _66.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _66.QueryDelegatorValidatorsResponse): _66.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryDelegatorValidatorsResponseProtoMsg): _66.QueryDelegatorValidatorsResponse;
                toProto(message: _66.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryDelegatorValidatorsResponse): _66.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _66.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_66.QueryDelegatorWithdrawAddressRequest>): _66.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _66.QueryDelegatorWithdrawAddressRequestAmino): _66.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _66.QueryDelegatorWithdrawAddressRequest): _66.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _66.QueryDelegatorWithdrawAddressRequestAminoMsg): _66.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _66.QueryDelegatorWithdrawAddressRequest): _66.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _66.QueryDelegatorWithdrawAddressRequestProtoMsg): _66.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _66.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _66.QueryDelegatorWithdrawAddressRequest): _66.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _66.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_66.QueryDelegatorWithdrawAddressResponse>): _66.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _66.QueryDelegatorWithdrawAddressResponseAmino): _66.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _66.QueryDelegatorWithdrawAddressResponse): _66.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _66.QueryDelegatorWithdrawAddressResponseAminoMsg): _66.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _66.QueryDelegatorWithdrawAddressResponse): _66.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _66.QueryDelegatorWithdrawAddressResponseProtoMsg): _66.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _66.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _66.QueryDelegatorWithdrawAddressResponse): _66.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _66.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _66.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_66.QueryCommunityPoolRequest>): _66.QueryCommunityPoolRequest;
                fromAmino(_: _66.QueryCommunityPoolRequestAmino): _66.QueryCommunityPoolRequest;
                toAmino(_: _66.QueryCommunityPoolRequest): _66.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _66.QueryCommunityPoolRequestAminoMsg): _66.QueryCommunityPoolRequest;
                toAminoMsg(message: _66.QueryCommunityPoolRequest): _66.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _66.QueryCommunityPoolRequestProtoMsg): _66.QueryCommunityPoolRequest;
                toProto(message: _66.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _66.QueryCommunityPoolRequest): _66.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _66.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_66.QueryCommunityPoolResponse>): _66.QueryCommunityPoolResponse;
                fromAmino(object: _66.QueryCommunityPoolResponseAmino): _66.QueryCommunityPoolResponse;
                toAmino(message: _66.QueryCommunityPoolResponse): _66.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _66.QueryCommunityPoolResponseAminoMsg): _66.QueryCommunityPoolResponse;
                toAminoMsg(message: _66.QueryCommunityPoolResponse): _66.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _66.QueryCommunityPoolResponseProtoMsg): _66.QueryCommunityPoolResponse;
                toProto(message: _66.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _66.QueryCommunityPoolResponse): _66.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _65.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_65.DelegatorWithdrawInfo>): _65.DelegatorWithdrawInfo;
                fromAmino(object: _65.DelegatorWithdrawInfoAmino): _65.DelegatorWithdrawInfo;
                toAmino(message: _65.DelegatorWithdrawInfo): _65.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _65.DelegatorWithdrawInfoAminoMsg): _65.DelegatorWithdrawInfo;
                toAminoMsg(message: _65.DelegatorWithdrawInfo): _65.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _65.DelegatorWithdrawInfoProtoMsg): _65.DelegatorWithdrawInfo;
                toProto(message: _65.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _65.DelegatorWithdrawInfo): _65.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _65.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_65.ValidatorOutstandingRewardsRecord>): _65.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _65.ValidatorOutstandingRewardsRecordAmino): _65.ValidatorOutstandingRewardsRecord;
                toAmino(message: _65.ValidatorOutstandingRewardsRecord): _65.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _65.ValidatorOutstandingRewardsRecordAminoMsg): _65.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _65.ValidatorOutstandingRewardsRecord): _65.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _65.ValidatorOutstandingRewardsRecordProtoMsg): _65.ValidatorOutstandingRewardsRecord;
                toProto(message: _65.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _65.ValidatorOutstandingRewardsRecord): _65.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _65.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_65.ValidatorAccumulatedCommissionRecord>): _65.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _65.ValidatorAccumulatedCommissionRecordAmino): _65.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _65.ValidatorAccumulatedCommissionRecord): _65.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _65.ValidatorAccumulatedCommissionRecordAminoMsg): _65.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _65.ValidatorAccumulatedCommissionRecord): _65.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _65.ValidatorAccumulatedCommissionRecordProtoMsg): _65.ValidatorAccumulatedCommissionRecord;
                toProto(message: _65.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _65.ValidatorAccumulatedCommissionRecord): _65.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _65.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_65.ValidatorHistoricalRewardsRecord>): _65.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _65.ValidatorHistoricalRewardsRecordAmino): _65.ValidatorHistoricalRewardsRecord;
                toAmino(message: _65.ValidatorHistoricalRewardsRecord): _65.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _65.ValidatorHistoricalRewardsRecordAminoMsg): _65.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _65.ValidatorHistoricalRewardsRecord): _65.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _65.ValidatorHistoricalRewardsRecordProtoMsg): _65.ValidatorHistoricalRewardsRecord;
                toProto(message: _65.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _65.ValidatorHistoricalRewardsRecord): _65.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _65.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_65.ValidatorCurrentRewardsRecord>): _65.ValidatorCurrentRewardsRecord;
                fromAmino(object: _65.ValidatorCurrentRewardsRecordAmino): _65.ValidatorCurrentRewardsRecord;
                toAmino(message: _65.ValidatorCurrentRewardsRecord): _65.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _65.ValidatorCurrentRewardsRecordAminoMsg): _65.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _65.ValidatorCurrentRewardsRecord): _65.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _65.ValidatorCurrentRewardsRecordProtoMsg): _65.ValidatorCurrentRewardsRecord;
                toProto(message: _65.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _65.ValidatorCurrentRewardsRecord): _65.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _65.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_65.DelegatorStartingInfoRecord>): _65.DelegatorStartingInfoRecord;
                fromAmino(object: _65.DelegatorStartingInfoRecordAmino): _65.DelegatorStartingInfoRecord;
                toAmino(message: _65.DelegatorStartingInfoRecord): _65.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _65.DelegatorStartingInfoRecordAminoMsg): _65.DelegatorStartingInfoRecord;
                toAminoMsg(message: _65.DelegatorStartingInfoRecord): _65.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _65.DelegatorStartingInfoRecordProtoMsg): _65.DelegatorStartingInfoRecord;
                toProto(message: _65.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _65.DelegatorStartingInfoRecord): _65.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _65.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_65.ValidatorSlashEventRecord>): _65.ValidatorSlashEventRecord;
                fromAmino(object: _65.ValidatorSlashEventRecordAmino): _65.ValidatorSlashEventRecord;
                toAmino(message: _65.ValidatorSlashEventRecord): _65.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _65.ValidatorSlashEventRecordAminoMsg): _65.ValidatorSlashEventRecord;
                toAminoMsg(message: _65.ValidatorSlashEventRecord): _65.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _65.ValidatorSlashEventRecordProtoMsg): _65.ValidatorSlashEventRecord;
                toProto(message: _65.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _65.ValidatorSlashEventRecord): _65.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _64.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.Params;
                fromPartial(object: Partial<_64.Params>): _64.Params;
                fromAmino(object: _64.ParamsAmino): _64.Params;
                toAmino(message: _64.Params): _64.ParamsAmino;
                fromAminoMsg(object: _64.ParamsAminoMsg): _64.Params;
                toAminoMsg(message: _64.Params): _64.ParamsAminoMsg;
                fromProtoMsg(message: _64.ParamsProtoMsg): _64.Params;
                toProto(message: _64.Params): Uint8Array;
                toProtoMsg(message: _64.Params): _64.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _64.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_64.ValidatorHistoricalRewards>): _64.ValidatorHistoricalRewards;
                fromAmino(object: _64.ValidatorHistoricalRewardsAmino): _64.ValidatorHistoricalRewards;
                toAmino(message: _64.ValidatorHistoricalRewards): _64.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _64.ValidatorHistoricalRewardsAminoMsg): _64.ValidatorHistoricalRewards;
                toAminoMsg(message: _64.ValidatorHistoricalRewards): _64.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _64.ValidatorHistoricalRewardsProtoMsg): _64.ValidatorHistoricalRewards;
                toProto(message: _64.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _64.ValidatorHistoricalRewards): _64.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _64.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.ValidatorCurrentRewards;
                fromPartial(object: Partial<_64.ValidatorCurrentRewards>): _64.ValidatorCurrentRewards;
                fromAmino(object: _64.ValidatorCurrentRewardsAmino): _64.ValidatorCurrentRewards;
                toAmino(message: _64.ValidatorCurrentRewards): _64.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _64.ValidatorCurrentRewardsAminoMsg): _64.ValidatorCurrentRewards;
                toAminoMsg(message: _64.ValidatorCurrentRewards): _64.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _64.ValidatorCurrentRewardsProtoMsg): _64.ValidatorCurrentRewards;
                toProto(message: _64.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _64.ValidatorCurrentRewards): _64.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _64.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_64.ValidatorAccumulatedCommission>): _64.ValidatorAccumulatedCommission;
                fromAmino(object: _64.ValidatorAccumulatedCommissionAmino): _64.ValidatorAccumulatedCommission;
                toAmino(message: _64.ValidatorAccumulatedCommission): _64.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _64.ValidatorAccumulatedCommissionAminoMsg): _64.ValidatorAccumulatedCommission;
                toAminoMsg(message: _64.ValidatorAccumulatedCommission): _64.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _64.ValidatorAccumulatedCommissionProtoMsg): _64.ValidatorAccumulatedCommission;
                toProto(message: _64.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _64.ValidatorAccumulatedCommission): _64.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _64.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_64.ValidatorOutstandingRewards>): _64.ValidatorOutstandingRewards;
                fromAmino(object: _64.ValidatorOutstandingRewardsAmino): _64.ValidatorOutstandingRewards;
                toAmino(message: _64.ValidatorOutstandingRewards): _64.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _64.ValidatorOutstandingRewardsAminoMsg): _64.ValidatorOutstandingRewards;
                toAminoMsg(message: _64.ValidatorOutstandingRewards): _64.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _64.ValidatorOutstandingRewardsProtoMsg): _64.ValidatorOutstandingRewards;
                toProto(message: _64.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _64.ValidatorOutstandingRewards): _64.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _64.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.ValidatorSlashEvent;
                fromPartial(object: Partial<_64.ValidatorSlashEvent>): _64.ValidatorSlashEvent;
                fromAmino(object: _64.ValidatorSlashEventAmino): _64.ValidatorSlashEvent;
                toAmino(message: _64.ValidatorSlashEvent): _64.ValidatorSlashEventAmino;
                fromAminoMsg(object: _64.ValidatorSlashEventAminoMsg): _64.ValidatorSlashEvent;
                toAminoMsg(message: _64.ValidatorSlashEvent): _64.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _64.ValidatorSlashEventProtoMsg): _64.ValidatorSlashEvent;
                toProto(message: _64.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _64.ValidatorSlashEvent): _64.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _64.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.ValidatorSlashEvents;
                fromPartial(object: Partial<_64.ValidatorSlashEvents>): _64.ValidatorSlashEvents;
                fromAmino(object: _64.ValidatorSlashEventsAmino): _64.ValidatorSlashEvents;
                toAmino(message: _64.ValidatorSlashEvents): _64.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _64.ValidatorSlashEventsAminoMsg): _64.ValidatorSlashEvents;
                toAminoMsg(message: _64.ValidatorSlashEvents): _64.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _64.ValidatorSlashEventsProtoMsg): _64.ValidatorSlashEvents;
                toProto(message: _64.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _64.ValidatorSlashEvents): _64.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _64.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.FeePool;
                fromPartial(object: Partial<_64.FeePool>): _64.FeePool;
                fromAmino(object: _64.FeePoolAmino): _64.FeePool;
                toAmino(message: _64.FeePool): _64.FeePoolAmino;
                fromAminoMsg(object: _64.FeePoolAminoMsg): _64.FeePool;
                toAminoMsg(message: _64.FeePool): _64.FeePoolAminoMsg;
                fromProtoMsg(message: _64.FeePoolProtoMsg): _64.FeePool;
                toProto(message: _64.FeePool): Uint8Array;
                toProtoMsg(message: _64.FeePool): _64.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _64.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_64.CommunityPoolSpendProposal>): _64.CommunityPoolSpendProposal;
                fromAmino(object: _64.CommunityPoolSpendProposalAmino): _64.CommunityPoolSpendProposal;
                toAmino(message: _64.CommunityPoolSpendProposal): _64.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _64.CommunityPoolSpendProposalAminoMsg): _64.CommunityPoolSpendProposal;
                toAminoMsg(message: _64.CommunityPoolSpendProposal): _64.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _64.CommunityPoolSpendProposalProtoMsg): _64.CommunityPoolSpendProposal;
                toProto(message: _64.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _64.CommunityPoolSpendProposal): _64.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _64.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.DelegatorStartingInfo;
                fromPartial(object: Partial<_64.DelegatorStartingInfo>): _64.DelegatorStartingInfo;
                fromAmino(object: _64.DelegatorStartingInfoAmino): _64.DelegatorStartingInfo;
                toAmino(message: _64.DelegatorStartingInfo): _64.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _64.DelegatorStartingInfoAminoMsg): _64.DelegatorStartingInfo;
                toAminoMsg(message: _64.DelegatorStartingInfo): _64.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _64.DelegatorStartingInfoProtoMsg): _64.DelegatorStartingInfo;
                toProto(message: _64.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _64.DelegatorStartingInfo): _64.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _64.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.DelegationDelegatorReward;
                fromPartial(object: Partial<_64.DelegationDelegatorReward>): _64.DelegationDelegatorReward;
                fromAmino(object: _64.DelegationDelegatorRewardAmino): _64.DelegationDelegatorReward;
                toAmino(message: _64.DelegationDelegatorReward): _64.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _64.DelegationDelegatorRewardAminoMsg): _64.DelegationDelegatorReward;
                toAminoMsg(message: _64.DelegationDelegatorReward): _64.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _64.DelegationDelegatorRewardProtoMsg): _64.DelegationDelegatorReward;
                toProto(message: _64.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _64.DelegationDelegatorReward): _64.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _64.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_64.CommunityPoolSpendProposalWithDeposit>): _64.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _64.CommunityPoolSpendProposalWithDepositAmino): _64.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _64.CommunityPoolSpendProposalWithDeposit): _64.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _64.CommunityPoolSpendProposalWithDepositAminoMsg): _64.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _64.CommunityPoolSpendProposalWithDeposit): _64.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _64.CommunityPoolSpendProposalWithDepositProtoMsg): _64.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _64.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _64.CommunityPoolSpendProposalWithDeposit): _64.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _252.MsgClientImpl;
            QueryClientImpl: typeof _239.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _70.QueryEvidenceRequest): Promise<_70.QueryEvidenceResponse>;
                allEvidence(request?: _70.QueryAllEvidenceRequest): Promise<_70.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _224.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _71.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _71.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _71.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _71.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _71.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _71.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _71.MsgSubmitEvidence) => _71.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _71.MsgSubmitEvidenceAmino) => _71.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _71.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.MsgSubmitEvidence;
                fromPartial(object: Partial<_71.MsgSubmitEvidence>): _71.MsgSubmitEvidence;
                fromAmino(object: _71.MsgSubmitEvidenceAmino): _71.MsgSubmitEvidence;
                toAmino(message: _71.MsgSubmitEvidence): _71.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _71.MsgSubmitEvidenceAminoMsg): _71.MsgSubmitEvidence;
                toAminoMsg(message: _71.MsgSubmitEvidence): _71.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _71.MsgSubmitEvidenceProtoMsg): _71.MsgSubmitEvidence;
                toProto(message: _71.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _71.MsgSubmitEvidence): _71.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _71.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_71.MsgSubmitEvidenceResponse>): _71.MsgSubmitEvidenceResponse;
                fromAmino(object: _71.MsgSubmitEvidenceResponseAmino): _71.MsgSubmitEvidenceResponse;
                toAmino(message: _71.MsgSubmitEvidenceResponse): _71.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _71.MsgSubmitEvidenceResponseAminoMsg): _71.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _71.MsgSubmitEvidenceResponse): _71.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _71.MsgSubmitEvidenceResponseProtoMsg): _71.MsgSubmitEvidenceResponse;
                toProto(message: _71.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _71.MsgSubmitEvidenceResponse): _71.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _70.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryEvidenceRequest;
                fromPartial(object: Partial<_70.QueryEvidenceRequest>): _70.QueryEvidenceRequest;
                fromAmino(object: _70.QueryEvidenceRequestAmino): _70.QueryEvidenceRequest;
                toAmino(message: _70.QueryEvidenceRequest): _70.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _70.QueryEvidenceRequestAminoMsg): _70.QueryEvidenceRequest;
                toAminoMsg(message: _70.QueryEvidenceRequest): _70.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _70.QueryEvidenceRequestProtoMsg): _70.QueryEvidenceRequest;
                toProto(message: _70.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _70.QueryEvidenceRequest): _70.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _70.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryEvidenceResponse;
                fromPartial(object: Partial<_70.QueryEvidenceResponse>): _70.QueryEvidenceResponse;
                fromAmino(object: _70.QueryEvidenceResponseAmino): _70.QueryEvidenceResponse;
                toAmino(message: _70.QueryEvidenceResponse): _70.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _70.QueryEvidenceResponseAminoMsg): _70.QueryEvidenceResponse;
                toAminoMsg(message: _70.QueryEvidenceResponse): _70.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _70.QueryEvidenceResponseProtoMsg): _70.QueryEvidenceResponse;
                toProto(message: _70.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _70.QueryEvidenceResponse): _70.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _70.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_70.QueryAllEvidenceRequest>): _70.QueryAllEvidenceRequest;
                fromAmino(object: _70.QueryAllEvidenceRequestAmino): _70.QueryAllEvidenceRequest;
                toAmino(message: _70.QueryAllEvidenceRequest): _70.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _70.QueryAllEvidenceRequestAminoMsg): _70.QueryAllEvidenceRequest;
                toAminoMsg(message: _70.QueryAllEvidenceRequest): _70.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _70.QueryAllEvidenceRequestProtoMsg): _70.QueryAllEvidenceRequest;
                toProto(message: _70.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _70.QueryAllEvidenceRequest): _70.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _70.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_70.QueryAllEvidenceResponse>): _70.QueryAllEvidenceResponse;
                fromAmino(object: _70.QueryAllEvidenceResponseAmino): _70.QueryAllEvidenceResponse;
                toAmino(message: _70.QueryAllEvidenceResponse): _70.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _70.QueryAllEvidenceResponseAminoMsg): _70.QueryAllEvidenceResponse;
                toAminoMsg(message: _70.QueryAllEvidenceResponse): _70.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _70.QueryAllEvidenceResponseProtoMsg): _70.QueryAllEvidenceResponse;
                toProto(message: _70.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _70.QueryAllEvidenceResponse): _70.QueryAllEvidenceResponseProtoMsg;
            };
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
            Equivocation: {
                typeUrl: string;
                encode(message: _68.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.Equivocation;
                fromPartial(object: Partial<_68.Equivocation>): _68.Equivocation;
                fromAmino(object: _68.EquivocationAmino): _68.Equivocation;
                toAmino(message: _68.Equivocation): _68.EquivocationAmino;
                fromAminoMsg(object: _68.EquivocationAminoMsg): _68.Equivocation;
                toAminoMsg(message: _68.Equivocation): _68.EquivocationAminoMsg;
                fromProtoMsg(message: _68.EquivocationProtoMsg): _68.Equivocation;
                toProto(message: _68.Equivocation): Uint8Array;
                toProtoMsg(message: _68.Equivocation): _68.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _253.MsgClientImpl;
            QueryClientImpl: typeof _240.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _74.QueryAllowanceRequest): Promise<_74.QueryAllowanceResponse>;
                allowances(request: _74.QueryAllowancesRequest): Promise<_74.QueryAllowancesResponse>;
                allowancesByGranter(request: _74.QueryAllowancesByGranterRequest): Promise<_74.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _225.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _75.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _75.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _75.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _75.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _75.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _75.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _75.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _75.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _75.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _75.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _75.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _75.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _75.MsgGrantAllowance) => _75.MsgGrantAllowanceAmino;
                    fromAmino: (object: _75.MsgGrantAllowanceAmino) => _75.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _75.MsgRevokeAllowance) => _75.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _75.MsgRevokeAllowanceAmino) => _75.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _75.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgGrantAllowance;
                fromPartial(object: Partial<_75.MsgGrantAllowance>): _75.MsgGrantAllowance;
                fromAmino(object: _75.MsgGrantAllowanceAmino): _75.MsgGrantAllowance;
                toAmino(message: _75.MsgGrantAllowance): _75.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _75.MsgGrantAllowanceAminoMsg): _75.MsgGrantAllowance;
                toAminoMsg(message: _75.MsgGrantAllowance): _75.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _75.MsgGrantAllowanceProtoMsg): _75.MsgGrantAllowance;
                toProto(message: _75.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _75.MsgGrantAllowance): _75.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _75.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_75.MsgGrantAllowanceResponse>): _75.MsgGrantAllowanceResponse;
                fromAmino(_: _75.MsgGrantAllowanceResponseAmino): _75.MsgGrantAllowanceResponse;
                toAmino(_: _75.MsgGrantAllowanceResponse): _75.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _75.MsgGrantAllowanceResponseAminoMsg): _75.MsgGrantAllowanceResponse;
                toAminoMsg(message: _75.MsgGrantAllowanceResponse): _75.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _75.MsgGrantAllowanceResponseProtoMsg): _75.MsgGrantAllowanceResponse;
                toProto(message: _75.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _75.MsgGrantAllowanceResponse): _75.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _75.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgRevokeAllowance;
                fromPartial(object: Partial<_75.MsgRevokeAllowance>): _75.MsgRevokeAllowance;
                fromAmino(object: _75.MsgRevokeAllowanceAmino): _75.MsgRevokeAllowance;
                toAmino(message: _75.MsgRevokeAllowance): _75.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _75.MsgRevokeAllowanceAminoMsg): _75.MsgRevokeAllowance;
                toAminoMsg(message: _75.MsgRevokeAllowance): _75.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _75.MsgRevokeAllowanceProtoMsg): _75.MsgRevokeAllowance;
                toProto(message: _75.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _75.MsgRevokeAllowance): _75.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _75.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_75.MsgRevokeAllowanceResponse>): _75.MsgRevokeAllowanceResponse;
                fromAmino(_: _75.MsgRevokeAllowanceResponseAmino): _75.MsgRevokeAllowanceResponse;
                toAmino(_: _75.MsgRevokeAllowanceResponse): _75.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _75.MsgRevokeAllowanceResponseAminoMsg): _75.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _75.MsgRevokeAllowanceResponse): _75.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _75.MsgRevokeAllowanceResponseProtoMsg): _75.MsgRevokeAllowanceResponse;
                toProto(message: _75.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _75.MsgRevokeAllowanceResponse): _75.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _72.BasicAllowance | _72.PeriodicAllowance | _72.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _74.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryAllowanceRequest;
                fromPartial(object: Partial<_74.QueryAllowanceRequest>): _74.QueryAllowanceRequest;
                fromAmino(object: _74.QueryAllowanceRequestAmino): _74.QueryAllowanceRequest;
                toAmino(message: _74.QueryAllowanceRequest): _74.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _74.QueryAllowanceRequestAminoMsg): _74.QueryAllowanceRequest;
                toAminoMsg(message: _74.QueryAllowanceRequest): _74.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _74.QueryAllowanceRequestProtoMsg): _74.QueryAllowanceRequest;
                toProto(message: _74.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _74.QueryAllowanceRequest): _74.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _74.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryAllowanceResponse;
                fromPartial(object: Partial<_74.QueryAllowanceResponse>): _74.QueryAllowanceResponse;
                fromAmino(object: _74.QueryAllowanceResponseAmino): _74.QueryAllowanceResponse;
                toAmino(message: _74.QueryAllowanceResponse): _74.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _74.QueryAllowanceResponseAminoMsg): _74.QueryAllowanceResponse;
                toAminoMsg(message: _74.QueryAllowanceResponse): _74.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _74.QueryAllowanceResponseProtoMsg): _74.QueryAllowanceResponse;
                toProto(message: _74.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _74.QueryAllowanceResponse): _74.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _74.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryAllowancesRequest;
                fromPartial(object: Partial<_74.QueryAllowancesRequest>): _74.QueryAllowancesRequest;
                fromAmino(object: _74.QueryAllowancesRequestAmino): _74.QueryAllowancesRequest;
                toAmino(message: _74.QueryAllowancesRequest): _74.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _74.QueryAllowancesRequestAminoMsg): _74.QueryAllowancesRequest;
                toAminoMsg(message: _74.QueryAllowancesRequest): _74.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _74.QueryAllowancesRequestProtoMsg): _74.QueryAllowancesRequest;
                toProto(message: _74.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _74.QueryAllowancesRequest): _74.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _74.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryAllowancesResponse;
                fromPartial(object: Partial<_74.QueryAllowancesResponse>): _74.QueryAllowancesResponse;
                fromAmino(object: _74.QueryAllowancesResponseAmino): _74.QueryAllowancesResponse;
                toAmino(message: _74.QueryAllowancesResponse): _74.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _74.QueryAllowancesResponseAminoMsg): _74.QueryAllowancesResponse;
                toAminoMsg(message: _74.QueryAllowancesResponse): _74.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _74.QueryAllowancesResponseProtoMsg): _74.QueryAllowancesResponse;
                toProto(message: _74.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _74.QueryAllowancesResponse): _74.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _74.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_74.QueryAllowancesByGranterRequest>): _74.QueryAllowancesByGranterRequest;
                fromAmino(object: _74.QueryAllowancesByGranterRequestAmino): _74.QueryAllowancesByGranterRequest;
                toAmino(message: _74.QueryAllowancesByGranterRequest): _74.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _74.QueryAllowancesByGranterRequestAminoMsg): _74.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _74.QueryAllowancesByGranterRequest): _74.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _74.QueryAllowancesByGranterRequestProtoMsg): _74.QueryAllowancesByGranterRequest;
                toProto(message: _74.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _74.QueryAllowancesByGranterRequest): _74.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _74.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_74.QueryAllowancesByGranterResponse>): _74.QueryAllowancesByGranterResponse;
                fromAmino(object: _74.QueryAllowancesByGranterResponseAmino): _74.QueryAllowancesByGranterResponse;
                toAmino(message: _74.QueryAllowancesByGranterResponse): _74.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _74.QueryAllowancesByGranterResponseAminoMsg): _74.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _74.QueryAllowancesByGranterResponse): _74.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _74.QueryAllowancesByGranterResponseProtoMsg): _74.QueryAllowancesByGranterResponse;
                toProto(message: _74.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _74.QueryAllowancesByGranterResponse): _74.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _72.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.BasicAllowance;
                fromPartial(object: Partial<_72.BasicAllowance>): _72.BasicAllowance;
                fromAmino(object: _72.BasicAllowanceAmino): _72.BasicAllowance;
                toAmino(message: _72.BasicAllowance): _72.BasicAllowanceAmino;
                fromAminoMsg(object: _72.BasicAllowanceAminoMsg): _72.BasicAllowance;
                toAminoMsg(message: _72.BasicAllowance): _72.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _72.BasicAllowanceProtoMsg): _72.BasicAllowance;
                toProto(message: _72.BasicAllowance): Uint8Array;
                toProtoMsg(message: _72.BasicAllowance): _72.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _72.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.PeriodicAllowance;
                fromPartial(object: Partial<_72.PeriodicAllowance>): _72.PeriodicAllowance;
                fromAmino(object: _72.PeriodicAllowanceAmino): _72.PeriodicAllowance;
                toAmino(message: _72.PeriodicAllowance): _72.PeriodicAllowanceAmino;
                fromAminoMsg(object: _72.PeriodicAllowanceAminoMsg): _72.PeriodicAllowance;
                toAminoMsg(message: _72.PeriodicAllowance): _72.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _72.PeriodicAllowanceProtoMsg): _72.PeriodicAllowance;
                toProto(message: _72.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _72.PeriodicAllowance): _72.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _72.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.AllowedMsgAllowance;
                fromPartial(object: Partial<_72.AllowedMsgAllowance>): _72.AllowedMsgAllowance;
                fromAmino(object: _72.AllowedMsgAllowanceAmino): _72.AllowedMsgAllowance;
                toAmino(message: _72.AllowedMsgAllowance): _72.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _72.AllowedMsgAllowanceAminoMsg): _72.AllowedMsgAllowance;
                toAminoMsg(message: _72.AllowedMsgAllowance): _72.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _72.AllowedMsgAllowanceProtoMsg): _72.AllowedMsgAllowance;
                toProto(message: _72.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _72.AllowedMsgAllowance): _72.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _72.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.Grant;
                fromPartial(object: Partial<_72.Grant>): _72.Grant;
                fromAmino(object: _72.GrantAmino): _72.Grant;
                toAmino(message: _72.Grant): _72.GrantAmino;
                fromAminoMsg(object: _72.GrantAminoMsg): _72.Grant;
                toAminoMsg(message: _72.Grant): _72.GrantAminoMsg;
                fromProtoMsg(message: _72.GrantProtoMsg): _72.Grant;
                toProto(message: _72.Grant): Uint8Array;
                toProtoMsg(message: _72.Grant): _72.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _254.MsgClientImpl;
            QueryClientImpl: typeof _241.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _79.QueryProposalRequest): Promise<_79.QueryProposalResponse>;
                proposals(request: _79.QueryProposalsRequest): Promise<_79.QueryProposalsResponse>;
                vote(request: _79.QueryVoteRequest): Promise<_79.QueryVoteResponse>;
                votes(request: _79.QueryVotesRequest): Promise<_79.QueryVotesResponse>;
                params(request: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                deposit(request: _79.QueryDepositRequest): Promise<_79.QueryDepositResponse>;
                deposits(request: _79.QueryDepositsRequest): Promise<_79.QueryDepositsResponse>;
                tallyResult(request: _79.QueryTallyResultRequest): Promise<_79.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _226.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _80.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _80.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _80.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _80.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _80.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _80.MsgSubmitProposal;
                    };
                    vote(value: _80.MsgVote): {
                        typeUrl: string;
                        value: _80.MsgVote;
                    };
                    voteWeighted(value: _80.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _80.MsgVoteWeighted;
                    };
                    deposit(value: _80.MsgDeposit): {
                        typeUrl: string;
                        value: _80.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _80.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _80.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _80.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _80.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _80.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _80.MsgSubmitProposal;
                    };
                    vote(value: _80.MsgVote): {
                        typeUrl: string;
                        value: _80.MsgVote;
                    };
                    voteWeighted(value: _80.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _80.MsgVoteWeighted;
                    };
                    deposit(value: _80.MsgDeposit): {
                        typeUrl: string;
                        value: _80.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _80.MsgSubmitProposal) => _80.MsgSubmitProposalAmino;
                    fromAmino: (object: _80.MsgSubmitProposalAmino) => _80.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _80.MsgVote) => _80.MsgVoteAmino;
                    fromAmino: (object: _80.MsgVoteAmino) => _80.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _80.MsgVoteWeighted) => _80.MsgVoteWeightedAmino;
                    fromAmino: (object: _80.MsgVoteWeightedAmino) => _80.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _80.MsgDeposit) => _80.MsgDepositAmino;
                    fromAmino: (object: _80.MsgDepositAmino) => _80.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _80.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgSubmitProposal;
                fromPartial(object: Partial<_80.MsgSubmitProposal>): _80.MsgSubmitProposal;
                fromAmino(object: _80.MsgSubmitProposalAmino): _80.MsgSubmitProposal;
                toAmino(message: _80.MsgSubmitProposal): _80.MsgSubmitProposalAmino;
                fromAminoMsg(object: _80.MsgSubmitProposalAminoMsg): _80.MsgSubmitProposal;
                toAminoMsg(message: _80.MsgSubmitProposal): _80.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _80.MsgSubmitProposalProtoMsg): _80.MsgSubmitProposal;
                toProto(message: _80.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _80.MsgSubmitProposal): _80.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _80.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_80.MsgSubmitProposalResponse>): _80.MsgSubmitProposalResponse;
                fromAmino(object: _80.MsgSubmitProposalResponseAmino): _80.MsgSubmitProposalResponse;
                toAmino(message: _80.MsgSubmitProposalResponse): _80.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _80.MsgSubmitProposalResponseAminoMsg): _80.MsgSubmitProposalResponse;
                toAminoMsg(message: _80.MsgSubmitProposalResponse): _80.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _80.MsgSubmitProposalResponseProtoMsg): _80.MsgSubmitProposalResponse;
                toProto(message: _80.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _80.MsgSubmitProposalResponse): _80.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _80.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgVote;
                fromPartial(object: Partial<_80.MsgVote>): _80.MsgVote;
                fromAmino(object: _80.MsgVoteAmino): _80.MsgVote;
                toAmino(message: _80.MsgVote): _80.MsgVoteAmino;
                fromAminoMsg(object: _80.MsgVoteAminoMsg): _80.MsgVote;
                toAminoMsg(message: _80.MsgVote): _80.MsgVoteAminoMsg;
                fromProtoMsg(message: _80.MsgVoteProtoMsg): _80.MsgVote;
                toProto(message: _80.MsgVote): Uint8Array;
                toProtoMsg(message: _80.MsgVote): _80.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _80.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgVoteResponse;
                fromPartial(_: Partial<_80.MsgVoteResponse>): _80.MsgVoteResponse;
                fromAmino(_: _80.MsgVoteResponseAmino): _80.MsgVoteResponse;
                toAmino(_: _80.MsgVoteResponse): _80.MsgVoteResponseAmino;
                fromAminoMsg(object: _80.MsgVoteResponseAminoMsg): _80.MsgVoteResponse;
                toAminoMsg(message: _80.MsgVoteResponse): _80.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _80.MsgVoteResponseProtoMsg): _80.MsgVoteResponse;
                toProto(message: _80.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _80.MsgVoteResponse): _80.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _80.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgVoteWeighted;
                fromPartial(object: Partial<_80.MsgVoteWeighted>): _80.MsgVoteWeighted;
                fromAmino(object: _80.MsgVoteWeightedAmino): _80.MsgVoteWeighted;
                toAmino(message: _80.MsgVoteWeighted): _80.MsgVoteWeightedAmino;
                fromAminoMsg(object: _80.MsgVoteWeightedAminoMsg): _80.MsgVoteWeighted;
                toAminoMsg(message: _80.MsgVoteWeighted): _80.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _80.MsgVoteWeightedProtoMsg): _80.MsgVoteWeighted;
                toProto(message: _80.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _80.MsgVoteWeighted): _80.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _80.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_80.MsgVoteWeightedResponse>): _80.MsgVoteWeightedResponse;
                fromAmino(_: _80.MsgVoteWeightedResponseAmino): _80.MsgVoteWeightedResponse;
                toAmino(_: _80.MsgVoteWeightedResponse): _80.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _80.MsgVoteWeightedResponseAminoMsg): _80.MsgVoteWeightedResponse;
                toAminoMsg(message: _80.MsgVoteWeightedResponse): _80.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _80.MsgVoteWeightedResponseProtoMsg): _80.MsgVoteWeightedResponse;
                toProto(message: _80.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _80.MsgVoteWeightedResponse): _80.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _80.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgDeposit;
                fromPartial(object: Partial<_80.MsgDeposit>): _80.MsgDeposit;
                fromAmino(object: _80.MsgDepositAmino): _80.MsgDeposit;
                toAmino(message: _80.MsgDeposit): _80.MsgDepositAmino;
                fromAminoMsg(object: _80.MsgDepositAminoMsg): _80.MsgDeposit;
                toAminoMsg(message: _80.MsgDeposit): _80.MsgDepositAminoMsg;
                fromProtoMsg(message: _80.MsgDepositProtoMsg): _80.MsgDeposit;
                toProto(message: _80.MsgDeposit): Uint8Array;
                toProtoMsg(message: _80.MsgDeposit): _80.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _80.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgDepositResponse;
                fromPartial(_: Partial<_80.MsgDepositResponse>): _80.MsgDepositResponse;
                fromAmino(_: _80.MsgDepositResponseAmino): _80.MsgDepositResponse;
                toAmino(_: _80.MsgDepositResponse): _80.MsgDepositResponseAmino;
                fromAminoMsg(object: _80.MsgDepositResponseAminoMsg): _80.MsgDepositResponse;
                toAminoMsg(message: _80.MsgDepositResponse): _80.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _80.MsgDepositResponseProtoMsg): _80.MsgDepositResponse;
                toProto(message: _80.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _80.MsgDepositResponse): _80.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _78.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _79.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryProposalRequest;
                fromPartial(object: Partial<_79.QueryProposalRequest>): _79.QueryProposalRequest;
                fromAmino(object: _79.QueryProposalRequestAmino): _79.QueryProposalRequest;
                toAmino(message: _79.QueryProposalRequest): _79.QueryProposalRequestAmino;
                fromAminoMsg(object: _79.QueryProposalRequestAminoMsg): _79.QueryProposalRequest;
                toAminoMsg(message: _79.QueryProposalRequest): _79.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _79.QueryProposalRequestProtoMsg): _79.QueryProposalRequest;
                toProto(message: _79.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _79.QueryProposalRequest): _79.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _79.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryProposalResponse;
                fromPartial(object: Partial<_79.QueryProposalResponse>): _79.QueryProposalResponse;
                fromAmino(object: _79.QueryProposalResponseAmino): _79.QueryProposalResponse;
                toAmino(message: _79.QueryProposalResponse): _79.QueryProposalResponseAmino;
                fromAminoMsg(object: _79.QueryProposalResponseAminoMsg): _79.QueryProposalResponse;
                toAminoMsg(message: _79.QueryProposalResponse): _79.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _79.QueryProposalResponseProtoMsg): _79.QueryProposalResponse;
                toProto(message: _79.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _79.QueryProposalResponse): _79.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _79.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryProposalsRequest;
                fromPartial(object: Partial<_79.QueryProposalsRequest>): _79.QueryProposalsRequest;
                fromAmino(object: _79.QueryProposalsRequestAmino): _79.QueryProposalsRequest;
                toAmino(message: _79.QueryProposalsRequest): _79.QueryProposalsRequestAmino;
                fromAminoMsg(object: _79.QueryProposalsRequestAminoMsg): _79.QueryProposalsRequest;
                toAminoMsg(message: _79.QueryProposalsRequest): _79.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _79.QueryProposalsRequestProtoMsg): _79.QueryProposalsRequest;
                toProto(message: _79.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryProposalsRequest): _79.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _79.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryProposalsResponse;
                fromPartial(object: Partial<_79.QueryProposalsResponse>): _79.QueryProposalsResponse;
                fromAmino(object: _79.QueryProposalsResponseAmino): _79.QueryProposalsResponse;
                toAmino(message: _79.QueryProposalsResponse): _79.QueryProposalsResponseAmino;
                fromAminoMsg(object: _79.QueryProposalsResponseAminoMsg): _79.QueryProposalsResponse;
                toAminoMsg(message: _79.QueryProposalsResponse): _79.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _79.QueryProposalsResponseProtoMsg): _79.QueryProposalsResponse;
                toProto(message: _79.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryProposalsResponse): _79.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _79.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryVoteRequest;
                fromPartial(object: Partial<_79.QueryVoteRequest>): _79.QueryVoteRequest;
                fromAmino(object: _79.QueryVoteRequestAmino): _79.QueryVoteRequest;
                toAmino(message: _79.QueryVoteRequest): _79.QueryVoteRequestAmino;
                fromAminoMsg(object: _79.QueryVoteRequestAminoMsg): _79.QueryVoteRequest;
                toAminoMsg(message: _79.QueryVoteRequest): _79.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _79.QueryVoteRequestProtoMsg): _79.QueryVoteRequest;
                toProto(message: _79.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _79.QueryVoteRequest): _79.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _79.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryVoteResponse;
                fromPartial(object: Partial<_79.QueryVoteResponse>): _79.QueryVoteResponse;
                fromAmino(object: _79.QueryVoteResponseAmino): _79.QueryVoteResponse;
                toAmino(message: _79.QueryVoteResponse): _79.QueryVoteResponseAmino;
                fromAminoMsg(object: _79.QueryVoteResponseAminoMsg): _79.QueryVoteResponse;
                toAminoMsg(message: _79.QueryVoteResponse): _79.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _79.QueryVoteResponseProtoMsg): _79.QueryVoteResponse;
                toProto(message: _79.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _79.QueryVoteResponse): _79.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _79.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryVotesRequest;
                fromPartial(object: Partial<_79.QueryVotesRequest>): _79.QueryVotesRequest;
                fromAmino(object: _79.QueryVotesRequestAmino): _79.QueryVotesRequest;
                toAmino(message: _79.QueryVotesRequest): _79.QueryVotesRequestAmino;
                fromAminoMsg(object: _79.QueryVotesRequestAminoMsg): _79.QueryVotesRequest;
                toAminoMsg(message: _79.QueryVotesRequest): _79.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _79.QueryVotesRequestProtoMsg): _79.QueryVotesRequest;
                toProto(message: _79.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _79.QueryVotesRequest): _79.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _79.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryVotesResponse;
                fromPartial(object: Partial<_79.QueryVotesResponse>): _79.QueryVotesResponse;
                fromAmino(object: _79.QueryVotesResponseAmino): _79.QueryVotesResponse;
                toAmino(message: _79.QueryVotesResponse): _79.QueryVotesResponseAmino;
                fromAminoMsg(object: _79.QueryVotesResponseAminoMsg): _79.QueryVotesResponse;
                toAminoMsg(message: _79.QueryVotesResponse): _79.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _79.QueryVotesResponseProtoMsg): _79.QueryVotesResponse;
                toProto(message: _79.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _79.QueryVotesResponse): _79.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _79.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryParamsRequest;
                fromPartial(object: Partial<_79.QueryParamsRequest>): _79.QueryParamsRequest;
                fromAmino(object: _79.QueryParamsRequestAmino): _79.QueryParamsRequest;
                toAmino(message: _79.QueryParamsRequest): _79.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _79.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryDepositRequest;
                fromPartial(object: Partial<_79.QueryDepositRequest>): _79.QueryDepositRequest;
                fromAmino(object: _79.QueryDepositRequestAmino): _79.QueryDepositRequest;
                toAmino(message: _79.QueryDepositRequest): _79.QueryDepositRequestAmino;
                fromAminoMsg(object: _79.QueryDepositRequestAminoMsg): _79.QueryDepositRequest;
                toAminoMsg(message: _79.QueryDepositRequest): _79.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _79.QueryDepositRequestProtoMsg): _79.QueryDepositRequest;
                toProto(message: _79.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _79.QueryDepositRequest): _79.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _79.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryDepositResponse;
                fromPartial(object: Partial<_79.QueryDepositResponse>): _79.QueryDepositResponse;
                fromAmino(object: _79.QueryDepositResponseAmino): _79.QueryDepositResponse;
                toAmino(message: _79.QueryDepositResponse): _79.QueryDepositResponseAmino;
                fromAminoMsg(object: _79.QueryDepositResponseAminoMsg): _79.QueryDepositResponse;
                toAminoMsg(message: _79.QueryDepositResponse): _79.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _79.QueryDepositResponseProtoMsg): _79.QueryDepositResponse;
                toProto(message: _79.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _79.QueryDepositResponse): _79.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _79.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryDepositsRequest;
                fromPartial(object: Partial<_79.QueryDepositsRequest>): _79.QueryDepositsRequest;
                fromAmino(object: _79.QueryDepositsRequestAmino): _79.QueryDepositsRequest;
                toAmino(message: _79.QueryDepositsRequest): _79.QueryDepositsRequestAmino;
                fromAminoMsg(object: _79.QueryDepositsRequestAminoMsg): _79.QueryDepositsRequest;
                toAminoMsg(message: _79.QueryDepositsRequest): _79.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _79.QueryDepositsRequestProtoMsg): _79.QueryDepositsRequest;
                toProto(message: _79.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryDepositsRequest): _79.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _79.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryDepositsResponse;
                fromPartial(object: Partial<_79.QueryDepositsResponse>): _79.QueryDepositsResponse;
                fromAmino(object: _79.QueryDepositsResponseAmino): _79.QueryDepositsResponse;
                toAmino(message: _79.QueryDepositsResponse): _79.QueryDepositsResponseAmino;
                fromAminoMsg(object: _79.QueryDepositsResponseAminoMsg): _79.QueryDepositsResponse;
                toAminoMsg(message: _79.QueryDepositsResponse): _79.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _79.QueryDepositsResponseProtoMsg): _79.QueryDepositsResponse;
                toProto(message: _79.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryDepositsResponse): _79.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _79.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryTallyResultRequest;
                fromPartial(object: Partial<_79.QueryTallyResultRequest>): _79.QueryTallyResultRequest;
                fromAmino(object: _79.QueryTallyResultRequestAmino): _79.QueryTallyResultRequest;
                toAmino(message: _79.QueryTallyResultRequest): _79.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _79.QueryTallyResultRequestAminoMsg): _79.QueryTallyResultRequest;
                toAminoMsg(message: _79.QueryTallyResultRequest): _79.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _79.QueryTallyResultRequestProtoMsg): _79.QueryTallyResultRequest;
                toProto(message: _79.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _79.QueryTallyResultRequest): _79.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _79.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryTallyResultResponse;
                fromPartial(object: Partial<_79.QueryTallyResultResponse>): _79.QueryTallyResultResponse;
                fromAmino(object: _79.QueryTallyResultResponseAmino): _79.QueryTallyResultResponse;
                toAmino(message: _79.QueryTallyResultResponse): _79.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _79.QueryTallyResultResponseAminoMsg): _79.QueryTallyResultResponse;
                toAminoMsg(message: _79.QueryTallyResultResponse): _79.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _79.QueryTallyResultResponseProtoMsg): _79.QueryTallyResultResponse;
                toProto(message: _79.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _79.QueryTallyResultResponse): _79.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _78.VoteOption;
            voteOptionToJSON(object: _78.VoteOption): string;
            proposalStatusFromJSON(object: any): _78.ProposalStatus;
            proposalStatusToJSON(object: _78.ProposalStatus): string;
            VoteOption: typeof _78.VoteOption;
            VoteOptionSDKType: typeof _78.VoteOption;
            VoteOptionAmino: typeof _78.VoteOption;
            ProposalStatus: typeof _78.ProposalStatus;
            ProposalStatusSDKType: typeof _78.ProposalStatus;
            ProposalStatusAmino: typeof _78.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _78.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.WeightedVoteOption;
                fromPartial(object: Partial<_78.WeightedVoteOption>): _78.WeightedVoteOption;
                fromAmino(object: _78.WeightedVoteOptionAmino): _78.WeightedVoteOption;
                toAmino(message: _78.WeightedVoteOption): _78.WeightedVoteOptionAmino;
                fromAminoMsg(object: _78.WeightedVoteOptionAminoMsg): _78.WeightedVoteOption;
                toAminoMsg(message: _78.WeightedVoteOption): _78.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _78.WeightedVoteOptionProtoMsg): _78.WeightedVoteOption;
                toProto(message: _78.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _78.WeightedVoteOption): _78.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _78.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.TextProposal;
                fromPartial(object: Partial<_78.TextProposal>): _78.TextProposal;
                fromAmino(object: _78.TextProposalAmino): _78.TextProposal;
                toAmino(message: _78.TextProposal): _78.TextProposalAmino;
                fromAminoMsg(object: _78.TextProposalAminoMsg): _78.TextProposal;
                toAminoMsg(message: _78.TextProposal): _78.TextProposalAminoMsg;
                fromProtoMsg(message: _78.TextProposalProtoMsg): _78.TextProposal;
                toProto(message: _78.TextProposal): Uint8Array;
                toProtoMsg(message: _78.TextProposal): _78.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _78.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Deposit;
                fromPartial(object: Partial<_78.Deposit>): _78.Deposit;
                fromAmino(object: _78.DepositAmino): _78.Deposit;
                toAmino(message: _78.Deposit): _78.DepositAmino;
                fromAminoMsg(object: _78.DepositAminoMsg): _78.Deposit;
                toAminoMsg(message: _78.Deposit): _78.DepositAminoMsg;
                fromProtoMsg(message: _78.DepositProtoMsg): _78.Deposit;
                toProto(message: _78.Deposit): Uint8Array;
                toProtoMsg(message: _78.Deposit): _78.DepositProtoMsg;
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
            DepositParams: {
                typeUrl: string;
                encode(message: _78.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.DepositParams;
                fromPartial(object: Partial<_78.DepositParams>): _78.DepositParams;
                fromAmino(object: _78.DepositParamsAmino): _78.DepositParams;
                toAmino(message: _78.DepositParams): _78.DepositParamsAmino;
                fromAminoMsg(object: _78.DepositParamsAminoMsg): _78.DepositParams;
                toAminoMsg(message: _78.DepositParams): _78.DepositParamsAminoMsg;
                fromProtoMsg(message: _78.DepositParamsProtoMsg): _78.DepositParams;
                toProto(message: _78.DepositParams): Uint8Array;
                toProtoMsg(message: _78.DepositParams): _78.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _78.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.VotingParams;
                fromPartial(object: Partial<_78.VotingParams>): _78.VotingParams;
                fromAmino(object: _78.VotingParamsAmino): _78.VotingParams;
                toAmino(message: _78.VotingParams): _78.VotingParamsAmino;
                fromAminoMsg(object: _78.VotingParamsAminoMsg): _78.VotingParams;
                toAminoMsg(message: _78.VotingParams): _78.VotingParamsAminoMsg;
                fromProtoMsg(message: _78.VotingParamsProtoMsg): _78.VotingParams;
                toProto(message: _78.VotingParams): Uint8Array;
                toProtoMsg(message: _78.VotingParams): _78.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _78.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.TallyParams;
                fromPartial(object: Partial<_78.TallyParams>): _78.TallyParams;
                fromAmino(object: _78.TallyParamsAmino): _78.TallyParams;
                toAmino(message: _78.TallyParams): _78.TallyParamsAmino;
                fromAminoMsg(object: _78.TallyParamsAminoMsg): _78.TallyParams;
                toAminoMsg(message: _78.TallyParams): _78.TallyParamsAminoMsg;
                fromProtoMsg(message: _78.TallyParamsProtoMsg): _78.TallyParams;
                toProto(message: _78.TallyParams): Uint8Array;
                toProtoMsg(message: _78.TallyParams): _78.TallyParamsProtoMsg;
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
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _242.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                inflation(request?: _83.QueryInflationRequest): Promise<_83.QueryInflationResponse>;
                annualProvisions(request?: _83.QueryAnnualProvisionsRequest): Promise<_83.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _227.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _83.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.QueryParamsRequest;
                fromPartial(_: Partial<_83.QueryParamsRequest>): _83.QueryParamsRequest;
                fromAmino(_: _83.QueryParamsRequestAmino): _83.QueryParamsRequest;
                toAmino(_: _83.QueryParamsRequest): _83.QueryParamsRequestAmino;
                fromAminoMsg(object: _83.QueryParamsRequestAminoMsg): _83.QueryParamsRequest;
                toAminoMsg(message: _83.QueryParamsRequest): _83.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryParamsRequestProtoMsg): _83.QueryParamsRequest;
                toProto(message: _83.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryParamsRequest): _83.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _83.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryParamsResponse;
                fromPartial(object: Partial<_83.QueryParamsResponse>): _83.QueryParamsResponse;
                fromAmino(object: _83.QueryParamsResponseAmino): _83.QueryParamsResponse;
                toAmino(message: _83.QueryParamsResponse): _83.QueryParamsResponseAmino;
                fromAminoMsg(object: _83.QueryParamsResponseAminoMsg): _83.QueryParamsResponse;
                toAminoMsg(message: _83.QueryParamsResponse): _83.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryParamsResponseProtoMsg): _83.QueryParamsResponse;
                toProto(message: _83.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryParamsResponse): _83.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _83.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.QueryInflationRequest;
                fromPartial(_: Partial<_83.QueryInflationRequest>): _83.QueryInflationRequest;
                fromAmino(_: _83.QueryInflationRequestAmino): _83.QueryInflationRequest;
                toAmino(_: _83.QueryInflationRequest): _83.QueryInflationRequestAmino;
                fromAminoMsg(object: _83.QueryInflationRequestAminoMsg): _83.QueryInflationRequest;
                toAminoMsg(message: _83.QueryInflationRequest): _83.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _83.QueryInflationRequestProtoMsg): _83.QueryInflationRequest;
                toProto(message: _83.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _83.QueryInflationRequest): _83.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _83.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryInflationResponse;
                fromPartial(object: Partial<_83.QueryInflationResponse>): _83.QueryInflationResponse;
                fromAmino(object: _83.QueryInflationResponseAmino): _83.QueryInflationResponse;
                toAmino(message: _83.QueryInflationResponse): _83.QueryInflationResponseAmino;
                fromAminoMsg(object: _83.QueryInflationResponseAminoMsg): _83.QueryInflationResponse;
                toAminoMsg(message: _83.QueryInflationResponse): _83.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _83.QueryInflationResponseProtoMsg): _83.QueryInflationResponse;
                toProto(message: _83.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _83.QueryInflationResponse): _83.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _83.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_83.QueryAnnualProvisionsRequest>): _83.QueryAnnualProvisionsRequest;
                fromAmino(_: _83.QueryAnnualProvisionsRequestAmino): _83.QueryAnnualProvisionsRequest;
                toAmino(_: _83.QueryAnnualProvisionsRequest): _83.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _83.QueryAnnualProvisionsRequestAminoMsg): _83.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _83.QueryAnnualProvisionsRequest): _83.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryAnnualProvisionsRequestProtoMsg): _83.QueryAnnualProvisionsRequest;
                toProto(message: _83.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryAnnualProvisionsRequest): _83.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _83.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_83.QueryAnnualProvisionsResponse>): _83.QueryAnnualProvisionsResponse;
                fromAmino(object: _83.QueryAnnualProvisionsResponseAmino): _83.QueryAnnualProvisionsResponse;
                toAmino(message: _83.QueryAnnualProvisionsResponse): _83.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _83.QueryAnnualProvisionsResponseAminoMsg): _83.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _83.QueryAnnualProvisionsResponse): _83.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryAnnualProvisionsResponseProtoMsg): _83.QueryAnnualProvisionsResponse;
                toProto(message: _83.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryAnnualProvisionsResponse): _83.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _82.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.Minter;
                fromPartial(object: Partial<_82.Minter>): _82.Minter;
                fromAmino(object: _82.MinterAmino): _82.Minter;
                toAmino(message: _82.Minter): _82.MinterAmino;
                fromAminoMsg(object: _82.MinterAminoMsg): _82.Minter;
                toAminoMsg(message: _82.Minter): _82.MinterAminoMsg;
                fromProtoMsg(message: _82.MinterProtoMsg): _82.Minter;
                toProto(message: _82.Minter): Uint8Array;
                toProtoMsg(message: _82.Minter): _82.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _82.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.Params;
                fromPartial(object: Partial<_82.Params>): _82.Params;
                fromAmino(object: _82.ParamsAmino): _82.Params;
                toAmino(message: _82.Params): _82.ParamsAmino;
                fromAminoMsg(object: _82.ParamsAminoMsg): _82.Params;
                toAminoMsg(message: _82.Params): _82.ParamsAminoMsg;
                fromProtoMsg(message: _82.ParamsProtoMsg): _82.Params;
                toProto(message: _82.Params): Uint8Array;
                toProtoMsg(message: _82.Params): _82.ParamsProtoMsg;
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
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _243.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _228.LCDQueryClient;
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
            MsgClientImpl: typeof _255.MsgClientImpl;
            QueryClientImpl: typeof _244.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                signingInfo(request: _87.QuerySigningInfoRequest): Promise<_87.QuerySigningInfoResponse>;
                signingInfos(request?: _87.QuerySigningInfosRequest): Promise<_87.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _229.LCDQueryClient;
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
            MsgClientImpl: typeof _256.MsgClientImpl;
            QueryClientImpl: typeof _245.QueryClientImpl;
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
            LCDQueryClient: typeof _230.LCDQueryClient;
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
            ServiceClientImpl: typeof _246.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _96.SimulateRequest): Promise<_96.SimulateResponse>;
                getTx(request: _96.GetTxRequest): Promise<_96.GetTxResponse>;
                broadcastTx(request: _96.BroadcastTxRequest): Promise<_96.BroadcastTxResponse>;
                getTxsEvent(request: _96.GetTxsEventRequest): Promise<_96.GetTxsEventResponse>;
                getBlockWithTxs(request: _96.GetBlockWithTxsRequest): Promise<_96.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _231.LCDQueryClient;
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
            QueryClientImpl: typeof _247.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _98.QueryCurrentPlanRequest): Promise<_98.QueryCurrentPlanResponse>;
                appliedPlan(request: _98.QueryAppliedPlanRequest): Promise<_98.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _98.QueryUpgradedConsensusStateRequest): Promise<_98.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _98.QueryModuleVersionsRequest): Promise<_98.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _232.LCDQueryClient;
            Plan: {
                typeUrl: string;
                encode(message: _99.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.Plan;
                fromPartial(object: Partial<_99.Plan>): _99.Plan;
                fromAmino(object: _99.PlanAmino): _99.Plan;
                toAmino(message: _99.Plan): _99.PlanAmino;
                fromAminoMsg(object: _99.PlanAminoMsg): _99.Plan;
                toAminoMsg(message: _99.Plan): _99.PlanAminoMsg;
                fromProtoMsg(message: _99.PlanProtoMsg): _99.Plan;
                toProto(message: _99.Plan): Uint8Array;
                toProtoMsg(message: _99.Plan): _99.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _99.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_99.SoftwareUpgradeProposal>): _99.SoftwareUpgradeProposal;
                fromAmino(object: _99.SoftwareUpgradeProposalAmino): _99.SoftwareUpgradeProposal;
                toAmino(message: _99.SoftwareUpgradeProposal): _99.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _99.SoftwareUpgradeProposalAminoMsg): _99.SoftwareUpgradeProposal;
                toAminoMsg(message: _99.SoftwareUpgradeProposal): _99.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _99.SoftwareUpgradeProposalProtoMsg): _99.SoftwareUpgradeProposal;
                toProto(message: _99.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _99.SoftwareUpgradeProposal): _99.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _99.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_99.CancelSoftwareUpgradeProposal>): _99.CancelSoftwareUpgradeProposal;
                fromAmino(object: _99.CancelSoftwareUpgradeProposalAmino): _99.CancelSoftwareUpgradeProposal;
                toAmino(message: _99.CancelSoftwareUpgradeProposal): _99.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _99.CancelSoftwareUpgradeProposalAminoMsg): _99.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _99.CancelSoftwareUpgradeProposal): _99.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _99.CancelSoftwareUpgradeProposalProtoMsg): _99.CancelSoftwareUpgradeProposal;
                toProto(message: _99.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _99.CancelSoftwareUpgradeProposal): _99.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _99.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.ModuleVersion;
                fromPartial(object: Partial<_99.ModuleVersion>): _99.ModuleVersion;
                fromAmino(object: _99.ModuleVersionAmino): _99.ModuleVersion;
                toAmino(message: _99.ModuleVersion): _99.ModuleVersionAmino;
                fromAminoMsg(object: _99.ModuleVersionAminoMsg): _99.ModuleVersion;
                toAminoMsg(message: _99.ModuleVersion): _99.ModuleVersionAminoMsg;
                fromProtoMsg(message: _99.ModuleVersionProtoMsg): _99.ModuleVersion;
                toProto(message: _99.ModuleVersion): Uint8Array;
                toProtoMsg(message: _99.ModuleVersion): _99.ModuleVersionProtoMsg;
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
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _257.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _100.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _100.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _100.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _100.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _100.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _100.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _100.MsgCreateVestingAccount) => _100.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _100.MsgCreateVestingAccountAmino) => _100.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _101.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.BaseVestingAccount;
                fromPartial(object: Partial<_101.BaseVestingAccount>): _101.BaseVestingAccount;
                fromAmino(object: _101.BaseVestingAccountAmino): _101.BaseVestingAccount;
                toAmino(message: _101.BaseVestingAccount): _101.BaseVestingAccountAmino;
                fromAminoMsg(object: _101.BaseVestingAccountAminoMsg): _101.BaseVestingAccount;
                toAminoMsg(message: _101.BaseVestingAccount): _101.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _101.BaseVestingAccountProtoMsg): _101.BaseVestingAccount;
                toProto(message: _101.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _101.BaseVestingAccount): _101.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _101.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.ContinuousVestingAccount;
                fromPartial(object: Partial<_101.ContinuousVestingAccount>): _101.ContinuousVestingAccount;
                fromAmino(object: _101.ContinuousVestingAccountAmino): _101.ContinuousVestingAccount;
                toAmino(message: _101.ContinuousVestingAccount): _101.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _101.ContinuousVestingAccountAminoMsg): _101.ContinuousVestingAccount;
                toAminoMsg(message: _101.ContinuousVestingAccount): _101.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _101.ContinuousVestingAccountProtoMsg): _101.ContinuousVestingAccount;
                toProto(message: _101.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _101.ContinuousVestingAccount): _101.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _101.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.DelayedVestingAccount;
                fromPartial(object: Partial<_101.DelayedVestingAccount>): _101.DelayedVestingAccount;
                fromAmino(object: _101.DelayedVestingAccountAmino): _101.DelayedVestingAccount;
                toAmino(message: _101.DelayedVestingAccount): _101.DelayedVestingAccountAmino;
                fromAminoMsg(object: _101.DelayedVestingAccountAminoMsg): _101.DelayedVestingAccount;
                toAminoMsg(message: _101.DelayedVestingAccount): _101.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _101.DelayedVestingAccountProtoMsg): _101.DelayedVestingAccount;
                toProto(message: _101.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _101.DelayedVestingAccount): _101.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _101.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.Period;
                fromPartial(object: Partial<_101.Period>): _101.Period;
                fromAmino(object: _101.PeriodAmino): _101.Period;
                toAmino(message: _101.Period): _101.PeriodAmino;
                fromAminoMsg(object: _101.PeriodAminoMsg): _101.Period;
                toAminoMsg(message: _101.Period): _101.PeriodAminoMsg;
                fromProtoMsg(message: _101.PeriodProtoMsg): _101.Period;
                toProto(message: _101.Period): Uint8Array;
                toProtoMsg(message: _101.Period): _101.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _101.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.PeriodicVestingAccount;
                fromPartial(object: Partial<_101.PeriodicVestingAccount>): _101.PeriodicVestingAccount;
                fromAmino(object: _101.PeriodicVestingAccountAmino): _101.PeriodicVestingAccount;
                toAmino(message: _101.PeriodicVestingAccount): _101.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _101.PeriodicVestingAccountAminoMsg): _101.PeriodicVestingAccount;
                toAminoMsg(message: _101.PeriodicVestingAccount): _101.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _101.PeriodicVestingAccountProtoMsg): _101.PeriodicVestingAccount;
                toProto(message: _101.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _101.PeriodicVestingAccount): _101.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _101.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.PermanentLockedAccount;
                fromPartial(object: Partial<_101.PermanentLockedAccount>): _101.PermanentLockedAccount;
                fromAmino(object: _101.PermanentLockedAccountAmino): _101.PermanentLockedAccount;
                toAmino(message: _101.PermanentLockedAccount): _101.PermanentLockedAccountAmino;
                fromAminoMsg(object: _101.PermanentLockedAccountAminoMsg): _101.PermanentLockedAccount;
                toAminoMsg(message: _101.PermanentLockedAccount): _101.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _101.PermanentLockedAccountProtoMsg): _101.PermanentLockedAccount;
                toProto(message: _101.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _101.PermanentLockedAccount): _101.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _100.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgCreateVestingAccount;
                fromPartial(object: Partial<_100.MsgCreateVestingAccount>): _100.MsgCreateVestingAccount;
                fromAmino(object: _100.MsgCreateVestingAccountAmino): _100.MsgCreateVestingAccount;
                toAmino(message: _100.MsgCreateVestingAccount): _100.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _100.MsgCreateVestingAccountAminoMsg): _100.MsgCreateVestingAccount;
                toAminoMsg(message: _100.MsgCreateVestingAccount): _100.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _100.MsgCreateVestingAccountProtoMsg): _100.MsgCreateVestingAccount;
                toProto(message: _100.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _100.MsgCreateVestingAccount): _100.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _100.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _100.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_100.MsgCreateVestingAccountResponse>): _100.MsgCreateVestingAccountResponse;
                fromAmino(_: _100.MsgCreateVestingAccountResponseAmino): _100.MsgCreateVestingAccountResponse;
                toAmino(_: _100.MsgCreateVestingAccountResponse): _100.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _100.MsgCreateVestingAccountResponseAminoMsg): _100.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _100.MsgCreateVestingAccountResponse): _100.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _100.MsgCreateVestingAccountResponseProtoMsg): _100.MsgCreateVestingAccountResponse;
                toProto(message: _100.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _100.MsgCreateVestingAccountResponse): _100.MsgCreateVestingAccountResponseProtoMsg;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _248.MsgClientImpl;
                };
                bank: {
                    v1beta1: _249.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _250.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _251.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _252.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _253.MsgClientImpl;
                };
                gov: {
                    v1beta1: _254.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _255.MsgClientImpl;
                };
                staking: {
                    v1beta1: _256.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _257.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _34.QueryAccountsRequest): Promise<_34.QueryAccountsResponse>;
                        account(request: _34.QueryAccountRequest): Promise<_34.QueryAccountResponse>;
                        params(request?: _34.QueryParamsRequest): Promise<_34.QueryParamsResponse>;
                        moduleAccountByName(request: _34.QueryModuleAccountByNameRequest): Promise<_34.QueryModuleAccountByNameResponse>;
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
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _66.QueryValidatorOutstandingRewardsRequest): Promise<_66.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _66.QueryValidatorCommissionRequest): Promise<_66.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _66.QueryValidatorSlashesRequest): Promise<_66.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _66.QueryDelegationRewardsRequest): Promise<_66.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _66.QueryDelegationTotalRewardsRequest): Promise<_66.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _66.QueryDelegatorValidatorsRequest): Promise<_66.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _66.QueryDelegatorWithdrawAddressRequest): Promise<_66.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _66.QueryCommunityPoolRequest): Promise<_66.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _70.QueryEvidenceRequest): Promise<_70.QueryEvidenceResponse>;
                        allEvidence(request?: _70.QueryAllEvidenceRequest): Promise<_70.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _74.QueryAllowanceRequest): Promise<_74.QueryAllowanceResponse>;
                        allowances(request: _74.QueryAllowancesRequest): Promise<_74.QueryAllowancesResponse>;
                        allowancesByGranter(request: _74.QueryAllowancesByGranterRequest): Promise<_74.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _79.QueryProposalRequest): Promise<_79.QueryProposalResponse>;
                        proposals(request: _79.QueryProposalsRequest): Promise<_79.QueryProposalsResponse>;
                        vote(request: _79.QueryVoteRequest): Promise<_79.QueryVoteResponse>;
                        votes(request: _79.QueryVotesRequest): Promise<_79.QueryVotesResponse>;
                        params(request: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                        deposit(request: _79.QueryDepositRequest): Promise<_79.QueryDepositResponse>;
                        deposits(request: _79.QueryDepositsRequest): Promise<_79.QueryDepositsResponse>;
                        tallyResult(request: _79.QueryTallyResultRequest): Promise<_79.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                        inflation(request?: _83.QueryInflationRequest): Promise<_83.QueryInflationResponse>;
                        annualProvisions(request?: _83.QueryAnnualProvisionsRequest): Promise<_83.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
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
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _218.LCDQueryClient;
                };
                authz: {
                    v1beta1: _219.LCDQueryClient;
                };
                bank: {
                    v1beta1: _220.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _221.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _222.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _223.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _224.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _225.LCDQueryClient;
                };
                gov: {
                    v1beta1: _226.LCDQueryClient;
                };
                mint: {
                    v1beta1: _227.LCDQueryClient;
                };
                params: {
                    v1beta1: _228.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _229.LCDQueryClient;
                };
                staking: {
                    v1beta1: _230.LCDQueryClient;
                };
                tx: {
                    v1beta1: _231.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _232.LCDQueryClient;
                };
            };
        }>;
    };
}
