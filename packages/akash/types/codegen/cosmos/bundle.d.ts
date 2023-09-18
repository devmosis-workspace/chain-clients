import * as _53 from "./auth/v1beta1/auth";
import * as _54 from "./auth/v1beta1/genesis";
import * as _55 from "./auth/v1beta1/query";
import * as _56 from "./authz/v1beta1/authz";
import * as _57 from "./authz/v1beta1/event";
import * as _58 from "./authz/v1beta1/genesis";
import * as _59 from "./authz/v1beta1/query";
import * as _60 from "./authz/v1beta1/tx";
import * as _61 from "./bank/v1beta1/authz";
import * as _62 from "./bank/v1beta1/bank";
import * as _63 from "./bank/v1beta1/genesis";
import * as _64 from "./bank/v1beta1/query";
import * as _65 from "./bank/v1beta1/tx";
import * as _66 from "./base/abci/v1beta1/abci";
import * as _67 from "./base/kv/v1beta1/kv";
import * as _68 from "./base/query/v1beta1/pagination";
import * as _69 from "./base/reflection/v1beta1/reflection";
import * as _70 from "./base/reflection/v2alpha1/reflection";
import * as _71 from "./base/snapshots/v1beta1/snapshot";
import * as _72 from "./base/store/v1beta1/commit_info";
import * as _73 from "./base/store/v1beta1/listening";
import * as _74 from "./base/tendermint/v1beta1/query";
import * as _75 from "./base/v1beta1/coin";
import * as _76 from "./capability/v1beta1/capability";
import * as _77 from "./capability/v1beta1/genesis";
import * as _78 from "./crisis/v1beta1/genesis";
import * as _79 from "./crisis/v1beta1/tx";
import * as _80 from "./crypto/ed25519/keys";
import * as _81 from "./crypto/multisig/keys";
import * as _82 from "./crypto/secp256k1/keys";
import * as _83 from "./crypto/secp256r1/keys";
import * as _84 from "./distribution/v1beta1/distribution";
import * as _85 from "./distribution/v1beta1/genesis";
import * as _86 from "./distribution/v1beta1/query";
import * as _87 from "./distribution/v1beta1/tx";
import * as _88 from "./evidence/v1beta1/evidence";
import * as _89 from "./evidence/v1beta1/genesis";
import * as _90 from "./evidence/v1beta1/query";
import * as _91 from "./evidence/v1beta1/tx";
import * as _92 from "./feegrant/v1beta1/feegrant";
import * as _93 from "./feegrant/v1beta1/genesis";
import * as _94 from "./feegrant/v1beta1/query";
import * as _95 from "./feegrant/v1beta1/tx";
import * as _96 from "./genutil/v1beta1/genesis";
import * as _97 from "./gov/v1beta1/genesis";
import * as _98 from "./gov/v1beta1/gov";
import * as _99 from "./gov/v1beta1/query";
import * as _100 from "./gov/v1beta1/tx";
import * as _101 from "./mint/v1beta1/genesis";
import * as _102 from "./mint/v1beta1/mint";
import * as _103 from "./mint/v1beta1/query";
import * as _104 from "./params/v1beta1/params";
import * as _105 from "./params/v1beta1/query";
import * as _106 from "./slashing/v1beta1/genesis";
import * as _107 from "./slashing/v1beta1/query";
import * as _108 from "./slashing/v1beta1/slashing";
import * as _109 from "./slashing/v1beta1/tx";
import * as _110 from "./staking/v1beta1/authz";
import * as _111 from "./staking/v1beta1/genesis";
import * as _112 from "./staking/v1beta1/query";
import * as _113 from "./staking/v1beta1/staking";
import * as _114 from "./staking/v1beta1/tx";
import * as _115 from "./tx/signing/v1beta1/signing";
import * as _116 from "./tx/v1beta1/service";
import * as _117 from "./tx/v1beta1/tx";
import * as _118 from "./upgrade/v1beta1/query";
import * as _119 from "./upgrade/v1beta1/upgrade";
import * as _120 from "./vesting/v1beta1/tx";
import * as _121 from "./vesting/v1beta1/vesting";
import * as _214 from "./auth/v1beta1/query.lcd";
import * as _215 from "./authz/v1beta1/query.lcd";
import * as _216 from "./bank/v1beta1/query.lcd";
import * as _217 from "./base/tendermint/v1beta1/query.lcd";
import * as _218 from "./distribution/v1beta1/query.lcd";
import * as _219 from "./evidence/v1beta1/query.lcd";
import * as _220 from "./feegrant/v1beta1/query.lcd";
import * as _221 from "./gov/v1beta1/query.lcd";
import * as _222 from "./mint/v1beta1/query.lcd";
import * as _223 from "./params/v1beta1/query.lcd";
import * as _224 from "./slashing/v1beta1/query.lcd";
import * as _225 from "./staking/v1beta1/query.lcd";
import * as _226 from "./tx/v1beta1/service.lcd";
import * as _227 from "./upgrade/v1beta1/query.lcd";
import * as _228 from "./auth/v1beta1/query.rpc.Query";
import * as _229 from "./authz/v1beta1/query.rpc.Query";
import * as _230 from "./bank/v1beta1/query.rpc.Query";
import * as _231 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _232 from "./distribution/v1beta1/query.rpc.Query";
import * as _233 from "./evidence/v1beta1/query.rpc.Query";
import * as _234 from "./feegrant/v1beta1/query.rpc.Query";
import * as _235 from "./gov/v1beta1/query.rpc.Query";
import * as _236 from "./mint/v1beta1/query.rpc.Query";
import * as _237 from "./params/v1beta1/query.rpc.Query";
import * as _238 from "./slashing/v1beta1/query.rpc.Query";
import * as _239 from "./staking/v1beta1/query.rpc.Query";
import * as _240 from "./tx/v1beta1/service.rpc.Service";
import * as _241 from "./upgrade/v1beta1/query.rpc.Query";
import * as _242 from "./authz/v1beta1/tx.rpc.msg";
import * as _243 from "./bank/v1beta1/tx.rpc.msg";
import * as _244 from "./crisis/v1beta1/tx.rpc.msg";
import * as _245 from "./distribution/v1beta1/tx.rpc.msg";
import * as _246 from "./evidence/v1beta1/tx.rpc.msg";
import * as _247 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _248 from "./gov/v1beta1/tx.rpc.msg";
import * as _249 from "./slashing/v1beta1/tx.rpc.msg";
import * as _250 from "./staking/v1beta1/tx.rpc.msg";
import * as _251 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _228.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _55.QueryAccountsRequest): Promise<_55.QueryAccountsResponse>;
                account(request: _55.QueryAccountRequest): Promise<_55.QueryAccountResponse>;
                params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _214.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _55.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryAccountsRequest;
                fromPartial(object: Partial<_55.QueryAccountsRequest>): _55.QueryAccountsRequest;
                fromAmino(object: _55.QueryAccountsRequestAmino): _55.QueryAccountsRequest;
                toAmino(message: _55.QueryAccountsRequest): _55.QueryAccountsRequestAmino;
                fromAminoMsg(object: _55.QueryAccountsRequestAminoMsg): _55.QueryAccountsRequest;
                toAminoMsg(message: _55.QueryAccountsRequest): _55.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _55.QueryAccountsRequestProtoMsg): _55.QueryAccountsRequest;
                toProto(message: _55.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _55.QueryAccountsRequest): _55.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _55.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryAccountsResponse;
                fromPartial(object: Partial<_55.QueryAccountsResponse>): _55.QueryAccountsResponse;
                fromAmino(object: _55.QueryAccountsResponseAmino): _55.QueryAccountsResponse;
                toAmino(message: _55.QueryAccountsResponse): _55.QueryAccountsResponseAmino;
                fromAminoMsg(object: _55.QueryAccountsResponseAminoMsg): _55.QueryAccountsResponse;
                toAminoMsg(message: _55.QueryAccountsResponse): _55.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _55.QueryAccountsResponseProtoMsg): _55.QueryAccountsResponse;
                toProto(message: _55.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _55.QueryAccountsResponse): _55.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _55.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryAccountRequest;
                fromPartial(object: Partial<_55.QueryAccountRequest>): _55.QueryAccountRequest;
                fromAmino(object: _55.QueryAccountRequestAmino): _55.QueryAccountRequest;
                toAmino(message: _55.QueryAccountRequest): _55.QueryAccountRequestAmino;
                fromAminoMsg(object: _55.QueryAccountRequestAminoMsg): _55.QueryAccountRequest;
                toAminoMsg(message: _55.QueryAccountRequest): _55.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _55.QueryAccountRequestProtoMsg): _55.QueryAccountRequest;
                toProto(message: _55.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _55.QueryAccountRequest): _55.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _55.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryAccountResponse;
                fromPartial(object: Partial<_55.QueryAccountResponse>): _55.QueryAccountResponse;
                fromAmino(object: _55.QueryAccountResponseAmino): _55.QueryAccountResponse;
                toAmino(message: _55.QueryAccountResponse): _55.QueryAccountResponseAmino;
                fromAminoMsg(object: _55.QueryAccountResponseAminoMsg): _55.QueryAccountResponse;
                toAminoMsg(message: _55.QueryAccountResponse): _55.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _55.QueryAccountResponseProtoMsg): _55.QueryAccountResponse;
                toProto(message: _55.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _55.QueryAccountResponse): _55.QueryAccountResponseProtoMsg;
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
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _53.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            BaseAccount: {
                typeUrl: string;
                encode(message: _53.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.BaseAccount;
                fromPartial(object: Partial<_53.BaseAccount>): _53.BaseAccount;
                fromAmino(object: _53.BaseAccountAmino): _53.BaseAccount;
                toAmino(message: _53.BaseAccount): _53.BaseAccountAmino;
                fromAminoMsg(object: _53.BaseAccountAminoMsg): _53.BaseAccount;
                toAminoMsg(message: _53.BaseAccount): _53.BaseAccountAminoMsg;
                fromProtoMsg(message: _53.BaseAccountProtoMsg): _53.BaseAccount;
                toProto(message: _53.BaseAccount): Uint8Array;
                toProtoMsg(message: _53.BaseAccount): _53.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _53.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ModuleAccount;
                fromPartial(object: Partial<_53.ModuleAccount>): _53.ModuleAccount;
                fromAmino(object: _53.ModuleAccountAmino): _53.ModuleAccount;
                toAmino(message: _53.ModuleAccount): _53.ModuleAccountAmino;
                fromAminoMsg(object: _53.ModuleAccountAminoMsg): _53.ModuleAccount;
                toAminoMsg(message: _53.ModuleAccount): _53.ModuleAccountAminoMsg;
                fromProtoMsg(message: _53.ModuleAccountProtoMsg): _53.ModuleAccount;
                toProto(message: _53.ModuleAccount): Uint8Array;
                toProtoMsg(message: _53.ModuleAccount): _53.ModuleAccountProtoMsg;
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
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _242.MsgClientImpl;
            QueryClientImpl: typeof _229.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _59.QueryGrantsRequest): Promise<_59.QueryGrantsResponse>;
                granterGrants(request: _59.QueryGranterGrantsRequest): Promise<_59.QueryGranterGrantsResponse>;
                granteeGrants(request: _59.QueryGranteeGrantsRequest): Promise<_59.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _215.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _60.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _60.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _60.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _60.MsgGrant): {
                        typeUrl: string;
                        value: _60.MsgGrant;
                    };
                    exec(value: _60.MsgExec): {
                        typeUrl: string;
                        value: _60.MsgExec;
                    };
                    revoke(value: _60.MsgRevoke): {
                        typeUrl: string;
                        value: _60.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _60.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _60.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _60.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _60.MsgGrant): {
                        typeUrl: string;
                        value: _60.MsgGrant;
                    };
                    exec(value: _60.MsgExec): {
                        typeUrl: string;
                        value: _60.MsgExec;
                    };
                    revoke(value: _60.MsgRevoke): {
                        typeUrl: string;
                        value: _60.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _60.MsgGrant) => _60.MsgGrantAmino;
                    fromAmino: (object: _60.MsgGrantAmino) => _60.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _60.MsgExec) => _60.MsgExecAmino;
                    fromAmino: (object: _60.MsgExecAmino) => _60.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _60.MsgRevoke) => _60.MsgRevokeAmino;
                    fromAmino: (object: _60.MsgRevokeAmino) => _60.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _60.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.MsgGrant;
                fromPartial(object: Partial<_60.MsgGrant>): _60.MsgGrant;
                fromAmino(object: _60.MsgGrantAmino): _60.MsgGrant;
                toAmino(message: _60.MsgGrant): _60.MsgGrantAmino;
                fromAminoMsg(object: _60.MsgGrantAminoMsg): _60.MsgGrant;
                toAminoMsg(message: _60.MsgGrant): _60.MsgGrantAminoMsg;
                fromProtoMsg(message: _60.MsgGrantProtoMsg): _60.MsgGrant;
                toProto(message: _60.MsgGrant): Uint8Array;
                toProtoMsg(message: _60.MsgGrant): _60.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _60.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.MsgExecResponse;
                fromPartial(object: Partial<_60.MsgExecResponse>): _60.MsgExecResponse;
                fromAmino(object: _60.MsgExecResponseAmino): _60.MsgExecResponse;
                toAmino(message: _60.MsgExecResponse): _60.MsgExecResponseAmino;
                fromAminoMsg(object: _60.MsgExecResponseAminoMsg): _60.MsgExecResponse;
                toAminoMsg(message: _60.MsgExecResponse): _60.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _60.MsgExecResponseProtoMsg): _60.MsgExecResponse;
                toProto(message: _60.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _60.MsgExecResponse): _60.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _60.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.MsgExec;
                fromPartial(object: Partial<_60.MsgExec>): _60.MsgExec;
                fromAmino(object: _60.MsgExecAmino): _60.MsgExec;
                toAmino(message: _60.MsgExec): _60.MsgExecAmino;
                fromAminoMsg(object: _60.MsgExecAminoMsg): _60.MsgExec;
                toAminoMsg(message: _60.MsgExec): _60.MsgExecAminoMsg;
                fromProtoMsg(message: _60.MsgExecProtoMsg): _60.MsgExec;
                toProto(message: _60.MsgExec): Uint8Array;
                toProtoMsg(message: _60.MsgExec): _60.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _60.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _60.MsgGrantResponse;
                fromPartial(_: Partial<_60.MsgGrantResponse>): _60.MsgGrantResponse;
                fromAmino(_: _60.MsgGrantResponseAmino): _60.MsgGrantResponse;
                toAmino(_: _60.MsgGrantResponse): _60.MsgGrantResponseAmino;
                fromAminoMsg(object: _60.MsgGrantResponseAminoMsg): _60.MsgGrantResponse;
                toAminoMsg(message: _60.MsgGrantResponse): _60.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _60.MsgGrantResponseProtoMsg): _60.MsgGrantResponse;
                toProto(message: _60.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _60.MsgGrantResponse): _60.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _60.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.MsgRevoke;
                fromPartial(object: Partial<_60.MsgRevoke>): _60.MsgRevoke;
                fromAmino(object: _60.MsgRevokeAmino): _60.MsgRevoke;
                toAmino(message: _60.MsgRevoke): _60.MsgRevokeAmino;
                fromAminoMsg(object: _60.MsgRevokeAminoMsg): _60.MsgRevoke;
                toAminoMsg(message: _60.MsgRevoke): _60.MsgRevokeAminoMsg;
                fromProtoMsg(message: _60.MsgRevokeProtoMsg): _60.MsgRevoke;
                toProto(message: _60.MsgRevoke): Uint8Array;
                toProtoMsg(message: _60.MsgRevoke): _60.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _60.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _60.MsgRevokeResponse;
                fromPartial(_: Partial<_60.MsgRevokeResponse>): _60.MsgRevokeResponse;
                fromAmino(_: _60.MsgRevokeResponseAmino): _60.MsgRevokeResponse;
                toAmino(_: _60.MsgRevokeResponse): _60.MsgRevokeResponseAmino;
                fromAminoMsg(object: _60.MsgRevokeResponseAminoMsg): _60.MsgRevokeResponse;
                toAminoMsg(message: _60.MsgRevokeResponse): _60.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _60.MsgRevokeResponseProtoMsg): _60.MsgRevokeResponse;
                toProto(message: _60.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _60.MsgRevokeResponse): _60.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _59.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryGrantsRequest;
                fromPartial(object: Partial<_59.QueryGrantsRequest>): _59.QueryGrantsRequest;
                fromAmino(object: _59.QueryGrantsRequestAmino): _59.QueryGrantsRequest;
                toAmino(message: _59.QueryGrantsRequest): _59.QueryGrantsRequestAmino;
                fromAminoMsg(object: _59.QueryGrantsRequestAminoMsg): _59.QueryGrantsRequest;
                toAminoMsg(message: _59.QueryGrantsRequest): _59.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _59.QueryGrantsRequestProtoMsg): _59.QueryGrantsRequest;
                toProto(message: _59.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _59.QueryGrantsRequest): _59.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _59.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryGrantsResponse;
                fromPartial(object: Partial<_59.QueryGrantsResponse>): _59.QueryGrantsResponse;
                fromAmino(object: _59.QueryGrantsResponseAmino): _59.QueryGrantsResponse;
                toAmino(message: _59.QueryGrantsResponse): _59.QueryGrantsResponseAmino;
                fromAminoMsg(object: _59.QueryGrantsResponseAminoMsg): _59.QueryGrantsResponse;
                toAminoMsg(message: _59.QueryGrantsResponse): _59.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _59.QueryGrantsResponseProtoMsg): _59.QueryGrantsResponse;
                toProto(message: _59.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _59.QueryGrantsResponse): _59.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _59.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_59.QueryGranterGrantsRequest>): _59.QueryGranterGrantsRequest;
                fromAmino(object: _59.QueryGranterGrantsRequestAmino): _59.QueryGranterGrantsRequest;
                toAmino(message: _59.QueryGranterGrantsRequest): _59.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _59.QueryGranterGrantsRequestAminoMsg): _59.QueryGranterGrantsRequest;
                toAminoMsg(message: _59.QueryGranterGrantsRequest): _59.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _59.QueryGranterGrantsRequestProtoMsg): _59.QueryGranterGrantsRequest;
                toProto(message: _59.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _59.QueryGranterGrantsRequest): _59.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _59.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_59.QueryGranterGrantsResponse>): _59.QueryGranterGrantsResponse;
                fromAmino(object: _59.QueryGranterGrantsResponseAmino): _59.QueryGranterGrantsResponse;
                toAmino(message: _59.QueryGranterGrantsResponse): _59.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _59.QueryGranterGrantsResponseAminoMsg): _59.QueryGranterGrantsResponse;
                toAminoMsg(message: _59.QueryGranterGrantsResponse): _59.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _59.QueryGranterGrantsResponseProtoMsg): _59.QueryGranterGrantsResponse;
                toProto(message: _59.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _59.QueryGranterGrantsResponse): _59.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _59.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_59.QueryGranteeGrantsRequest>): _59.QueryGranteeGrantsRequest;
                fromAmino(object: _59.QueryGranteeGrantsRequestAmino): _59.QueryGranteeGrantsRequest;
                toAmino(message: _59.QueryGranteeGrantsRequest): _59.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _59.QueryGranteeGrantsRequestAminoMsg): _59.QueryGranteeGrantsRequest;
                toAminoMsg(message: _59.QueryGranteeGrantsRequest): _59.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _59.QueryGranteeGrantsRequestProtoMsg): _59.QueryGranteeGrantsRequest;
                toProto(message: _59.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _59.QueryGranteeGrantsRequest): _59.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _59.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_59.QueryGranteeGrantsResponse>): _59.QueryGranteeGrantsResponse;
                fromAmino(object: _59.QueryGranteeGrantsResponseAmino): _59.QueryGranteeGrantsResponse;
                toAmino(message: _59.QueryGranteeGrantsResponse): _59.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _59.QueryGranteeGrantsResponseAminoMsg): _59.QueryGranteeGrantsResponse;
                toAminoMsg(message: _59.QueryGranteeGrantsResponse): _59.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _59.QueryGranteeGrantsResponseProtoMsg): _59.QueryGranteeGrantsResponse;
                toProto(message: _59.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _59.QueryGranteeGrantsResponse): _59.QueryGranteeGrantsResponseProtoMsg;
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
            EventGrant: {
                typeUrl: string;
                encode(message: _57.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.EventGrant;
                fromPartial(object: Partial<_57.EventGrant>): _57.EventGrant;
                fromAmino(object: _57.EventGrantAmino): _57.EventGrant;
                toAmino(message: _57.EventGrant): _57.EventGrantAmino;
                fromAminoMsg(object: _57.EventGrantAminoMsg): _57.EventGrant;
                toAminoMsg(message: _57.EventGrant): _57.EventGrantAminoMsg;
                fromProtoMsg(message: _57.EventGrantProtoMsg): _57.EventGrant;
                toProto(message: _57.EventGrant): Uint8Array;
                toProtoMsg(message: _57.EventGrant): _57.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _57.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.EventRevoke;
                fromPartial(object: Partial<_57.EventRevoke>): _57.EventRevoke;
                fromAmino(object: _57.EventRevokeAmino): _57.EventRevoke;
                toAmino(message: _57.EventRevoke): _57.EventRevokeAmino;
                fromAminoMsg(object: _57.EventRevokeAminoMsg): _57.EventRevoke;
                toAminoMsg(message: _57.EventRevoke): _57.EventRevokeAminoMsg;
                fromProtoMsg(message: _57.EventRevokeProtoMsg): _57.EventRevoke;
                toProto(message: _57.EventRevoke): Uint8Array;
                toProtoMsg(message: _57.EventRevoke): _57.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _56.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.GenericAuthorization;
                fromPartial(object: Partial<_56.GenericAuthorization>): _56.GenericAuthorization;
                fromAmino(object: _56.GenericAuthorizationAmino): _56.GenericAuthorization;
                toAmino(message: _56.GenericAuthorization): _56.GenericAuthorizationAmino;
                fromAminoMsg(object: _56.GenericAuthorizationAminoMsg): _56.GenericAuthorization;
                toAminoMsg(message: _56.GenericAuthorization): _56.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _56.GenericAuthorizationProtoMsg): _56.GenericAuthorization;
                toProto(message: _56.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _56.GenericAuthorization): _56.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _56.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Grant;
                fromPartial(object: Partial<_56.Grant>): _56.Grant;
                fromAmino(object: _56.GrantAmino): _56.Grant;
                toAmino(message: _56.Grant): _56.GrantAmino;
                fromAminoMsg(object: _56.GrantAminoMsg): _56.Grant;
                toAminoMsg(message: _56.Grant): _56.GrantAminoMsg;
                fromProtoMsg(message: _56.GrantProtoMsg): _56.Grant;
                toProto(message: _56.Grant): Uint8Array;
                toProtoMsg(message: _56.Grant): _56.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _56.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.GrantAuthorization;
                fromPartial(object: Partial<_56.GrantAuthorization>): _56.GrantAuthorization;
                fromAmino(object: _56.GrantAuthorizationAmino): _56.GrantAuthorization;
                toAmino(message: _56.GrantAuthorization): _56.GrantAuthorizationAmino;
                fromAminoMsg(object: _56.GrantAuthorizationAminoMsg): _56.GrantAuthorization;
                toAminoMsg(message: _56.GrantAuthorization): _56.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _56.GrantAuthorizationProtoMsg): _56.GrantAuthorization;
                toProto(message: _56.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _56.GrantAuthorization): _56.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../akash/deployment/v1beta1/authz").DepositDeploymentAuthorization | import("../akash/deployment/v1beta2/authz").DepositDeploymentAuthorization | import("../google/protobuf/any").Any | _61.SendAuthorization | _110.StakeAuthorization | _56.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _243.MsgClientImpl;
            QueryClientImpl: typeof _230.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _64.QueryBalanceRequest): Promise<_64.QueryBalanceResponse>;
                allBalances(request: _64.QueryAllBalancesRequest): Promise<_64.QueryAllBalancesResponse>;
                spendableBalances(request: _64.QuerySpendableBalancesRequest): Promise<_64.QuerySpendableBalancesResponse>;
                totalSupply(request?: _64.QueryTotalSupplyRequest): Promise<_64.QueryTotalSupplyResponse>;
                supplyOf(request: _64.QuerySupplyOfRequest): Promise<_64.QuerySupplyOfResponse>;
                params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                denomMetadata(request: _64.QueryDenomMetadataRequest): Promise<_64.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _64.QueryDenomsMetadataRequest): Promise<_64.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _216.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _65.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _65.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _65.MsgSend): {
                        typeUrl: string;
                        value: _65.MsgSend;
                    };
                    multiSend(value: _65.MsgMultiSend): {
                        typeUrl: string;
                        value: _65.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _65.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _65.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _65.MsgSend): {
                        typeUrl: string;
                        value: _65.MsgSend;
                    };
                    multiSend(value: _65.MsgMultiSend): {
                        typeUrl: string;
                        value: _65.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _65.MsgSend) => _65.MsgSendAmino;
                    fromAmino: (object: _65.MsgSendAmino) => _65.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _65.MsgMultiSend) => _65.MsgMultiSendAmino;
                    fromAmino: (object: _65.MsgMultiSendAmino) => _65.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _65.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgSend;
                fromPartial(object: Partial<_65.MsgSend>): _65.MsgSend;
                fromAmino(object: _65.MsgSendAmino): _65.MsgSend;
                toAmino(message: _65.MsgSend): _65.MsgSendAmino;
                fromAminoMsg(object: _65.MsgSendAminoMsg): _65.MsgSend;
                toAminoMsg(message: _65.MsgSend): _65.MsgSendAminoMsg;
                fromProtoMsg(message: _65.MsgSendProtoMsg): _65.MsgSend;
                toProto(message: _65.MsgSend): Uint8Array;
                toProtoMsg(message: _65.MsgSend): _65.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _65.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.MsgSendResponse;
                fromPartial(_: Partial<_65.MsgSendResponse>): _65.MsgSendResponse;
                fromAmino(_: _65.MsgSendResponseAmino): _65.MsgSendResponse;
                toAmino(_: _65.MsgSendResponse): _65.MsgSendResponseAmino;
                fromAminoMsg(object: _65.MsgSendResponseAminoMsg): _65.MsgSendResponse;
                toAminoMsg(message: _65.MsgSendResponse): _65.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _65.MsgSendResponseProtoMsg): _65.MsgSendResponse;
                toProto(message: _65.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _65.MsgSendResponse): _65.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _65.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgMultiSend;
                fromPartial(object: Partial<_65.MsgMultiSend>): _65.MsgMultiSend;
                fromAmino(object: _65.MsgMultiSendAmino): _65.MsgMultiSend;
                toAmino(message: _65.MsgMultiSend): _65.MsgMultiSendAmino;
                fromAminoMsg(object: _65.MsgMultiSendAminoMsg): _65.MsgMultiSend;
                toAminoMsg(message: _65.MsgMultiSend): _65.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _65.MsgMultiSendProtoMsg): _65.MsgMultiSend;
                toProto(message: _65.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _65.MsgMultiSend): _65.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _65.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.MsgMultiSendResponse;
                fromPartial(_: Partial<_65.MsgMultiSendResponse>): _65.MsgMultiSendResponse;
                fromAmino(_: _65.MsgMultiSendResponseAmino): _65.MsgMultiSendResponse;
                toAmino(_: _65.MsgMultiSendResponse): _65.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _65.MsgMultiSendResponseAminoMsg): _65.MsgMultiSendResponse;
                toAminoMsg(message: _65.MsgMultiSendResponse): _65.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _65.MsgMultiSendResponseProtoMsg): _65.MsgMultiSendResponse;
                toProto(message: _65.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _65.MsgMultiSendResponse): _65.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _64.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryBalanceRequest;
                fromPartial(object: Partial<_64.QueryBalanceRequest>): _64.QueryBalanceRequest;
                fromAmino(object: _64.QueryBalanceRequestAmino): _64.QueryBalanceRequest;
                toAmino(message: _64.QueryBalanceRequest): _64.QueryBalanceRequestAmino;
                fromAminoMsg(object: _64.QueryBalanceRequestAminoMsg): _64.QueryBalanceRequest;
                toAminoMsg(message: _64.QueryBalanceRequest): _64.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _64.QueryBalanceRequestProtoMsg): _64.QueryBalanceRequest;
                toProto(message: _64.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _64.QueryBalanceRequest): _64.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _64.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryBalanceResponse;
                fromPartial(object: Partial<_64.QueryBalanceResponse>): _64.QueryBalanceResponse;
                fromAmino(object: _64.QueryBalanceResponseAmino): _64.QueryBalanceResponse;
                toAmino(message: _64.QueryBalanceResponse): _64.QueryBalanceResponseAmino;
                fromAminoMsg(object: _64.QueryBalanceResponseAminoMsg): _64.QueryBalanceResponse;
                toAminoMsg(message: _64.QueryBalanceResponse): _64.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _64.QueryBalanceResponseProtoMsg): _64.QueryBalanceResponse;
                toProto(message: _64.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _64.QueryBalanceResponse): _64.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _64.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryAllBalancesRequest;
                fromPartial(object: Partial<_64.QueryAllBalancesRequest>): _64.QueryAllBalancesRequest;
                fromAmino(object: _64.QueryAllBalancesRequestAmino): _64.QueryAllBalancesRequest;
                toAmino(message: _64.QueryAllBalancesRequest): _64.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _64.QueryAllBalancesRequestAminoMsg): _64.QueryAllBalancesRequest;
                toAminoMsg(message: _64.QueryAllBalancesRequest): _64.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _64.QueryAllBalancesRequestProtoMsg): _64.QueryAllBalancesRequest;
                toProto(message: _64.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _64.QueryAllBalancesRequest): _64.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _64.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryAllBalancesResponse;
                fromPartial(object: Partial<_64.QueryAllBalancesResponse>): _64.QueryAllBalancesResponse;
                fromAmino(object: _64.QueryAllBalancesResponseAmino): _64.QueryAllBalancesResponse;
                toAmino(message: _64.QueryAllBalancesResponse): _64.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _64.QueryAllBalancesResponseAminoMsg): _64.QueryAllBalancesResponse;
                toAminoMsg(message: _64.QueryAllBalancesResponse): _64.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _64.QueryAllBalancesResponseProtoMsg): _64.QueryAllBalancesResponse;
                toProto(message: _64.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _64.QueryAllBalancesResponse): _64.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _64.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_64.QuerySpendableBalancesRequest>): _64.QuerySpendableBalancesRequest;
                fromAmino(object: _64.QuerySpendableBalancesRequestAmino): _64.QuerySpendableBalancesRequest;
                toAmino(message: _64.QuerySpendableBalancesRequest): _64.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _64.QuerySpendableBalancesRequestAminoMsg): _64.QuerySpendableBalancesRequest;
                toAminoMsg(message: _64.QuerySpendableBalancesRequest): _64.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _64.QuerySpendableBalancesRequestProtoMsg): _64.QuerySpendableBalancesRequest;
                toProto(message: _64.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _64.QuerySpendableBalancesRequest): _64.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _64.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_64.QuerySpendableBalancesResponse>): _64.QuerySpendableBalancesResponse;
                fromAmino(object: _64.QuerySpendableBalancesResponseAmino): _64.QuerySpendableBalancesResponse;
                toAmino(message: _64.QuerySpendableBalancesResponse): _64.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _64.QuerySpendableBalancesResponseAminoMsg): _64.QuerySpendableBalancesResponse;
                toAminoMsg(message: _64.QuerySpendableBalancesResponse): _64.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _64.QuerySpendableBalancesResponseProtoMsg): _64.QuerySpendableBalancesResponse;
                toProto(message: _64.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _64.QuerySpendableBalancesResponse): _64.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _64.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_64.QueryTotalSupplyRequest>): _64.QueryTotalSupplyRequest;
                fromAmino(object: _64.QueryTotalSupplyRequestAmino): _64.QueryTotalSupplyRequest;
                toAmino(message: _64.QueryTotalSupplyRequest): _64.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _64.QueryTotalSupplyRequestAminoMsg): _64.QueryTotalSupplyRequest;
                toAminoMsg(message: _64.QueryTotalSupplyRequest): _64.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _64.QueryTotalSupplyRequestProtoMsg): _64.QueryTotalSupplyRequest;
                toProto(message: _64.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _64.QueryTotalSupplyRequest): _64.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _64.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_64.QueryTotalSupplyResponse>): _64.QueryTotalSupplyResponse;
                fromAmino(object: _64.QueryTotalSupplyResponseAmino): _64.QueryTotalSupplyResponse;
                toAmino(message: _64.QueryTotalSupplyResponse): _64.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _64.QueryTotalSupplyResponseAminoMsg): _64.QueryTotalSupplyResponse;
                toAminoMsg(message: _64.QueryTotalSupplyResponse): _64.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _64.QueryTotalSupplyResponseProtoMsg): _64.QueryTotalSupplyResponse;
                toProto(message: _64.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _64.QueryTotalSupplyResponse): _64.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _64.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QuerySupplyOfRequest;
                fromPartial(object: Partial<_64.QuerySupplyOfRequest>): _64.QuerySupplyOfRequest;
                fromAmino(object: _64.QuerySupplyOfRequestAmino): _64.QuerySupplyOfRequest;
                toAmino(message: _64.QuerySupplyOfRequest): _64.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _64.QuerySupplyOfRequestAminoMsg): _64.QuerySupplyOfRequest;
                toAminoMsg(message: _64.QuerySupplyOfRequest): _64.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _64.QuerySupplyOfRequestProtoMsg): _64.QuerySupplyOfRequest;
                toProto(message: _64.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _64.QuerySupplyOfRequest): _64.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _64.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QuerySupplyOfResponse;
                fromPartial(object: Partial<_64.QuerySupplyOfResponse>): _64.QuerySupplyOfResponse;
                fromAmino(object: _64.QuerySupplyOfResponseAmino): _64.QuerySupplyOfResponse;
                toAmino(message: _64.QuerySupplyOfResponse): _64.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _64.QuerySupplyOfResponseAminoMsg): _64.QuerySupplyOfResponse;
                toAminoMsg(message: _64.QuerySupplyOfResponse): _64.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _64.QuerySupplyOfResponseProtoMsg): _64.QuerySupplyOfResponse;
                toProto(message: _64.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _64.QuerySupplyOfResponse): _64.QuerySupplyOfResponseProtoMsg;
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
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _64.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_64.QueryDenomsMetadataRequest>): _64.QueryDenomsMetadataRequest;
                fromAmino(object: _64.QueryDenomsMetadataRequestAmino): _64.QueryDenomsMetadataRequest;
                toAmino(message: _64.QueryDenomsMetadataRequest): _64.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _64.QueryDenomsMetadataRequestAminoMsg): _64.QueryDenomsMetadataRequest;
                toAminoMsg(message: _64.QueryDenomsMetadataRequest): _64.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _64.QueryDenomsMetadataRequestProtoMsg): _64.QueryDenomsMetadataRequest;
                toProto(message: _64.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _64.QueryDenomsMetadataRequest): _64.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _64.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_64.QueryDenomsMetadataResponse>): _64.QueryDenomsMetadataResponse;
                fromAmino(object: _64.QueryDenomsMetadataResponseAmino): _64.QueryDenomsMetadataResponse;
                toAmino(message: _64.QueryDenomsMetadataResponse): _64.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _64.QueryDenomsMetadataResponseAminoMsg): _64.QueryDenomsMetadataResponse;
                toAminoMsg(message: _64.QueryDenomsMetadataResponse): _64.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _64.QueryDenomsMetadataResponseProtoMsg): _64.QueryDenomsMetadataResponse;
                toProto(message: _64.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _64.QueryDenomsMetadataResponse): _64.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _64.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_64.QueryDenomMetadataRequest>): _64.QueryDenomMetadataRequest;
                fromAmino(object: _64.QueryDenomMetadataRequestAmino): _64.QueryDenomMetadataRequest;
                toAmino(message: _64.QueryDenomMetadataRequest): _64.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _64.QueryDenomMetadataRequestAminoMsg): _64.QueryDenomMetadataRequest;
                toAminoMsg(message: _64.QueryDenomMetadataRequest): _64.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _64.QueryDenomMetadataRequestProtoMsg): _64.QueryDenomMetadataRequest;
                toProto(message: _64.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _64.QueryDenomMetadataRequest): _64.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _64.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_64.QueryDenomMetadataResponse>): _64.QueryDenomMetadataResponse;
                fromAmino(object: _64.QueryDenomMetadataResponseAmino): _64.QueryDenomMetadataResponse;
                toAmino(message: _64.QueryDenomMetadataResponse): _64.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _64.QueryDenomMetadataResponseAminoMsg): _64.QueryDenomMetadataResponse;
                toAminoMsg(message: _64.QueryDenomMetadataResponse): _64.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _64.QueryDenomMetadataResponseProtoMsg): _64.QueryDenomMetadataResponse;
                toProto(message: _64.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _64.QueryDenomMetadataResponse): _64.QueryDenomMetadataResponseProtoMsg;
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
            Balance: {
                typeUrl: string;
                encode(message: _63.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.Balance;
                fromPartial(object: Partial<_63.Balance>): _63.Balance;
                fromAmino(object: _63.BalanceAmino): _63.Balance;
                toAmino(message: _63.Balance): _63.BalanceAmino;
                fromAminoMsg(object: _63.BalanceAminoMsg): _63.Balance;
                toAminoMsg(message: _63.Balance): _63.BalanceAminoMsg;
                fromProtoMsg(message: _63.BalanceProtoMsg): _63.Balance;
                toProto(message: _63.Balance): Uint8Array;
                toProtoMsg(message: _63.Balance): _63.BalanceProtoMsg;
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
            SendEnabled: {
                typeUrl: string;
                encode(message: _62.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.SendEnabled;
                fromPartial(object: Partial<_62.SendEnabled>): _62.SendEnabled;
                fromAmino(object: _62.SendEnabledAmino): _62.SendEnabled;
                toAmino(message: _62.SendEnabled): _62.SendEnabledAmino;
                fromAminoMsg(object: _62.SendEnabledAminoMsg): _62.SendEnabled;
                toAminoMsg(message: _62.SendEnabled): _62.SendEnabledAminoMsg;
                fromProtoMsg(message: _62.SendEnabledProtoMsg): _62.SendEnabled;
                toProto(message: _62.SendEnabled): Uint8Array;
                toProtoMsg(message: _62.SendEnabled): _62.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _62.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.Input;
                fromPartial(object: Partial<_62.Input>): _62.Input;
                fromAmino(object: _62.InputAmino): _62.Input;
                toAmino(message: _62.Input): _62.InputAmino;
                fromAminoMsg(object: _62.InputAminoMsg): _62.Input;
                toAminoMsg(message: _62.Input): _62.InputAminoMsg;
                fromProtoMsg(message: _62.InputProtoMsg): _62.Input;
                toProto(message: _62.Input): Uint8Array;
                toProtoMsg(message: _62.Input): _62.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _62.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.Output;
                fromPartial(object: Partial<_62.Output>): _62.Output;
                fromAmino(object: _62.OutputAmino): _62.Output;
                toAmino(message: _62.Output): _62.OutputAmino;
                fromAminoMsg(object: _62.OutputAminoMsg): _62.Output;
                toAminoMsg(message: _62.Output): _62.OutputAminoMsg;
                fromProtoMsg(message: _62.OutputProtoMsg): _62.Output;
                toProto(message: _62.Output): Uint8Array;
                toProtoMsg(message: _62.Output): _62.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _62.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.Supply;
                fromPartial(object: Partial<_62.Supply>): _62.Supply;
                fromAmino(object: _62.SupplyAmino): _62.Supply;
                toAmino(message: _62.Supply): _62.SupplyAmino;
                fromAminoMsg(object: _62.SupplyAminoMsg): _62.Supply;
                toAminoMsg(message: _62.Supply): _62.SupplyAminoMsg;
                fromProtoMsg(message: _62.SupplyProtoMsg): _62.Supply;
                toProto(message: _62.Supply): Uint8Array;
                toProtoMsg(message: _62.Supply): _62.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _62.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.DenomUnit;
                fromPartial(object: Partial<_62.DenomUnit>): _62.DenomUnit;
                fromAmino(object: _62.DenomUnitAmino): _62.DenomUnit;
                toAmino(message: _62.DenomUnit): _62.DenomUnitAmino;
                fromAminoMsg(object: _62.DenomUnitAminoMsg): _62.DenomUnit;
                toAminoMsg(message: _62.DenomUnit): _62.DenomUnitAminoMsg;
                fromProtoMsg(message: _62.DenomUnitProtoMsg): _62.DenomUnit;
                toProto(message: _62.DenomUnit): Uint8Array;
                toProtoMsg(message: _62.DenomUnit): _62.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _62.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.Metadata;
                fromPartial(object: Partial<_62.Metadata>): _62.Metadata;
                fromAmino(object: _62.MetadataAmino): _62.Metadata;
                toAmino(message: _62.Metadata): _62.MetadataAmino;
                fromAminoMsg(object: _62.MetadataAminoMsg): _62.Metadata;
                toAminoMsg(message: _62.Metadata): _62.MetadataAminoMsg;
                fromProtoMsg(message: _62.MetadataProtoMsg): _62.Metadata;
                toProto(message: _62.Metadata): Uint8Array;
                toProtoMsg(message: _62.Metadata): _62.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _61.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.SendAuthorization;
                fromPartial(object: Partial<_61.SendAuthorization>): _61.SendAuthorization;
                fromAmino(object: _61.SendAuthorizationAmino): _61.SendAuthorization;
                toAmino(message: _61.SendAuthorization): _61.SendAuthorizationAmino;
                fromAminoMsg(object: _61.SendAuthorizationAminoMsg): _61.SendAuthorization;
                toAminoMsg(message: _61.SendAuthorization): _61.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _61.SendAuthorizationProtoMsg): _61.SendAuthorization;
                toProto(message: _61.SendAuthorization): Uint8Array;
                toProtoMsg(message: _61.SendAuthorization): _61.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _66.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.TxResponse;
                    fromPartial(object: Partial<_66.TxResponse>): _66.TxResponse;
                    fromAmino(object: _66.TxResponseAmino): _66.TxResponse;
                    toAmino(message: _66.TxResponse): _66.TxResponseAmino;
                    fromAminoMsg(object: _66.TxResponseAminoMsg): _66.TxResponse;
                    toAminoMsg(message: _66.TxResponse): _66.TxResponseAminoMsg;
                    fromProtoMsg(message: _66.TxResponseProtoMsg): _66.TxResponse;
                    toProto(message: _66.TxResponse): Uint8Array;
                    toProtoMsg(message: _66.TxResponse): _66.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _66.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.ABCIMessageLog;
                    fromPartial(object: Partial<_66.ABCIMessageLog>): _66.ABCIMessageLog;
                    fromAmino(object: _66.ABCIMessageLogAmino): _66.ABCIMessageLog;
                    toAmino(message: _66.ABCIMessageLog): _66.ABCIMessageLogAmino;
                    fromAminoMsg(object: _66.ABCIMessageLogAminoMsg): _66.ABCIMessageLog;
                    toAminoMsg(message: _66.ABCIMessageLog): _66.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _66.ABCIMessageLogProtoMsg): _66.ABCIMessageLog;
                    toProto(message: _66.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _66.ABCIMessageLog): _66.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _66.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.StringEvent;
                    fromPartial(object: Partial<_66.StringEvent>): _66.StringEvent;
                    fromAmino(object: _66.StringEventAmino): _66.StringEvent;
                    toAmino(message: _66.StringEvent): _66.StringEventAmino;
                    fromAminoMsg(object: _66.StringEventAminoMsg): _66.StringEvent;
                    toAminoMsg(message: _66.StringEvent): _66.StringEventAminoMsg;
                    fromProtoMsg(message: _66.StringEventProtoMsg): _66.StringEvent;
                    toProto(message: _66.StringEvent): Uint8Array;
                    toProtoMsg(message: _66.StringEvent): _66.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _66.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.Attribute;
                    fromPartial(object: Partial<_66.Attribute>): _66.Attribute;
                    fromAmino(object: _66.AttributeAmino): _66.Attribute;
                    toAmino(message: _66.Attribute): _66.AttributeAmino;
                    fromAminoMsg(object: _66.AttributeAminoMsg): _66.Attribute;
                    toAminoMsg(message: _66.Attribute): _66.AttributeAminoMsg;
                    fromProtoMsg(message: _66.AttributeProtoMsg): _66.Attribute;
                    toProto(message: _66.Attribute): Uint8Array;
                    toProtoMsg(message: _66.Attribute): _66.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _66.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.GasInfo;
                    fromPartial(object: Partial<_66.GasInfo>): _66.GasInfo;
                    fromAmino(object: _66.GasInfoAmino): _66.GasInfo;
                    toAmino(message: _66.GasInfo): _66.GasInfoAmino;
                    fromAminoMsg(object: _66.GasInfoAminoMsg): _66.GasInfo;
                    toAminoMsg(message: _66.GasInfo): _66.GasInfoAminoMsg;
                    fromProtoMsg(message: _66.GasInfoProtoMsg): _66.GasInfo;
                    toProto(message: _66.GasInfo): Uint8Array;
                    toProtoMsg(message: _66.GasInfo): _66.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _66.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.Result;
                    fromPartial(object: Partial<_66.Result>): _66.Result;
                    fromAmino(object: _66.ResultAmino): _66.Result;
                    toAmino(message: _66.Result): _66.ResultAmino;
                    fromAminoMsg(object: _66.ResultAminoMsg): _66.Result;
                    toAminoMsg(message: _66.Result): _66.ResultAminoMsg;
                    fromProtoMsg(message: _66.ResultProtoMsg): _66.Result;
                    toProto(message: _66.Result): Uint8Array;
                    toProtoMsg(message: _66.Result): _66.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _66.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.SimulationResponse;
                    fromPartial(object: Partial<_66.SimulationResponse>): _66.SimulationResponse;
                    fromAmino(object: _66.SimulationResponseAmino): _66.SimulationResponse;
                    toAmino(message: _66.SimulationResponse): _66.SimulationResponseAmino;
                    fromAminoMsg(object: _66.SimulationResponseAminoMsg): _66.SimulationResponse;
                    toAminoMsg(message: _66.SimulationResponse): _66.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _66.SimulationResponseProtoMsg): _66.SimulationResponse;
                    toProto(message: _66.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _66.SimulationResponse): _66.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _66.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.MsgData;
                    fromPartial(object: Partial<_66.MsgData>): _66.MsgData;
                    fromAmino(object: _66.MsgDataAmino): _66.MsgData;
                    toAmino(message: _66.MsgData): _66.MsgDataAmino;
                    fromAminoMsg(object: _66.MsgDataAminoMsg): _66.MsgData;
                    toAminoMsg(message: _66.MsgData): _66.MsgDataAminoMsg;
                    fromProtoMsg(message: _66.MsgDataProtoMsg): _66.MsgData;
                    toProto(message: _66.MsgData): Uint8Array;
                    toProtoMsg(message: _66.MsgData): _66.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _66.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.TxMsgData;
                    fromPartial(object: Partial<_66.TxMsgData>): _66.TxMsgData;
                    fromAmino(object: _66.TxMsgDataAmino): _66.TxMsgData;
                    toAmino(message: _66.TxMsgData): _66.TxMsgDataAmino;
                    fromAminoMsg(object: _66.TxMsgDataAminoMsg): _66.TxMsgData;
                    toAminoMsg(message: _66.TxMsgData): _66.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _66.TxMsgDataProtoMsg): _66.TxMsgData;
                    toProto(message: _66.TxMsgData): Uint8Array;
                    toProtoMsg(message: _66.TxMsgData): _66.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _66.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.SearchTxsResult;
                    fromPartial(object: Partial<_66.SearchTxsResult>): _66.SearchTxsResult;
                    fromAmino(object: _66.SearchTxsResultAmino): _66.SearchTxsResult;
                    toAmino(message: _66.SearchTxsResult): _66.SearchTxsResultAmino;
                    fromAminoMsg(object: _66.SearchTxsResultAminoMsg): _66.SearchTxsResult;
                    toAminoMsg(message: _66.SearchTxsResult): _66.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _66.SearchTxsResultProtoMsg): _66.SearchTxsResult;
                    toProto(message: _66.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _66.SearchTxsResult): _66.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _67.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.Pairs;
                    fromPartial(object: Partial<_67.Pairs>): _67.Pairs;
                    fromAmino(object: _67.PairsAmino): _67.Pairs;
                    toAmino(message: _67.Pairs): _67.PairsAmino;
                    fromAminoMsg(object: _67.PairsAminoMsg): _67.Pairs;
                    toAminoMsg(message: _67.Pairs): _67.PairsAminoMsg;
                    fromProtoMsg(message: _67.PairsProtoMsg): _67.Pairs;
                    toProto(message: _67.Pairs): Uint8Array;
                    toProtoMsg(message: _67.Pairs): _67.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _67.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.Pair;
                    fromPartial(object: Partial<_67.Pair>): _67.Pair;
                    fromAmino(object: _67.PairAmino): _67.Pair;
                    toAmino(message: _67.Pair): _67.PairAmino;
                    fromAminoMsg(object: _67.PairAminoMsg): _67.Pair;
                    toAminoMsg(message: _67.Pair): _67.PairAminoMsg;
                    fromProtoMsg(message: _67.PairProtoMsg): _67.Pair;
                    toProto(message: _67.Pair): Uint8Array;
                    toProtoMsg(message: _67.Pair): _67.PairProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _68.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.PageRequest;
                    fromPartial(object: Partial<_68.PageRequest>): _68.PageRequest;
                    fromAmino(object: _68.PageRequestAmino): _68.PageRequest;
                    toAmino(message: _68.PageRequest): _68.PageRequestAmino;
                    fromAminoMsg(object: _68.PageRequestAminoMsg): _68.PageRequest;
                    toAminoMsg(message: _68.PageRequest): _68.PageRequestAminoMsg;
                    fromProtoMsg(message: _68.PageRequestProtoMsg): _68.PageRequest;
                    toProto(message: _68.PageRequest): Uint8Array;
                    toProtoMsg(message: _68.PageRequest): _68.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _68.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.PageResponse;
                    fromPartial(object: Partial<_68.PageResponse>): _68.PageResponse;
                    fromAmino(object: _68.PageResponseAmino): _68.PageResponse;
                    toAmino(message: _68.PageResponse): _68.PageResponseAmino;
                    fromAminoMsg(object: _68.PageResponseAminoMsg): _68.PageResponse;
                    toAminoMsg(message: _68.PageResponse): _68.PageResponseAminoMsg;
                    fromProtoMsg(message: _68.PageResponseProtoMsg): _68.PageResponse;
                    toProto(message: _68.PageResponse): Uint8Array;
                    toProtoMsg(message: _68.PageResponse): _68.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _69.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _69.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_69.ListAllInterfacesRequest>): _69.ListAllInterfacesRequest;
                    fromAmino(_: _69.ListAllInterfacesRequestAmino): _69.ListAllInterfacesRequest;
                    toAmino(_: _69.ListAllInterfacesRequest): _69.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _69.ListAllInterfacesRequestAminoMsg): _69.ListAllInterfacesRequest;
                    toAminoMsg(message: _69.ListAllInterfacesRequest): _69.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _69.ListAllInterfacesRequestProtoMsg): _69.ListAllInterfacesRequest;
                    toProto(message: _69.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _69.ListAllInterfacesRequest): _69.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _69.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_69.ListAllInterfacesResponse>): _69.ListAllInterfacesResponse;
                    fromAmino(object: _69.ListAllInterfacesResponseAmino): _69.ListAllInterfacesResponse;
                    toAmino(message: _69.ListAllInterfacesResponse): _69.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _69.ListAllInterfacesResponseAminoMsg): _69.ListAllInterfacesResponse;
                    toAminoMsg(message: _69.ListAllInterfacesResponse): _69.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _69.ListAllInterfacesResponseProtoMsg): _69.ListAllInterfacesResponse;
                    toProto(message: _69.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _69.ListAllInterfacesResponse): _69.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _69.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.ListImplementationsRequest;
                    fromPartial(object: Partial<_69.ListImplementationsRequest>): _69.ListImplementationsRequest;
                    fromAmino(object: _69.ListImplementationsRequestAmino): _69.ListImplementationsRequest;
                    toAmino(message: _69.ListImplementationsRequest): _69.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _69.ListImplementationsRequestAminoMsg): _69.ListImplementationsRequest;
                    toAminoMsg(message: _69.ListImplementationsRequest): _69.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _69.ListImplementationsRequestProtoMsg): _69.ListImplementationsRequest;
                    toProto(message: _69.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _69.ListImplementationsRequest): _69.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _69.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.ListImplementationsResponse;
                    fromPartial(object: Partial<_69.ListImplementationsResponse>): _69.ListImplementationsResponse;
                    fromAmino(object: _69.ListImplementationsResponseAmino): _69.ListImplementationsResponse;
                    toAmino(message: _69.ListImplementationsResponse): _69.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _69.ListImplementationsResponseAminoMsg): _69.ListImplementationsResponse;
                    toAminoMsg(message: _69.ListImplementationsResponse): _69.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _69.ListImplementationsResponseProtoMsg): _69.ListImplementationsResponse;
                    toProto(message: _69.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _69.ListImplementationsResponse): _69.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _70.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.AppDescriptor;
                    fromPartial(object: Partial<_70.AppDescriptor>): _70.AppDescriptor;
                    fromAmino(object: _70.AppDescriptorAmino): _70.AppDescriptor;
                    toAmino(message: _70.AppDescriptor): _70.AppDescriptorAmino;
                    fromAminoMsg(object: _70.AppDescriptorAminoMsg): _70.AppDescriptor;
                    toAminoMsg(message: _70.AppDescriptor): _70.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _70.AppDescriptorProtoMsg): _70.AppDescriptor;
                    toProto(message: _70.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _70.AppDescriptor): _70.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _70.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.TxDescriptor;
                    fromPartial(object: Partial<_70.TxDescriptor>): _70.TxDescriptor;
                    fromAmino(object: _70.TxDescriptorAmino): _70.TxDescriptor;
                    toAmino(message: _70.TxDescriptor): _70.TxDescriptorAmino;
                    fromAminoMsg(object: _70.TxDescriptorAminoMsg): _70.TxDescriptor;
                    toAminoMsg(message: _70.TxDescriptor): _70.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _70.TxDescriptorProtoMsg): _70.TxDescriptor;
                    toProto(message: _70.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _70.TxDescriptor): _70.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _70.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.AuthnDescriptor;
                    fromPartial(object: Partial<_70.AuthnDescriptor>): _70.AuthnDescriptor;
                    fromAmino(object: _70.AuthnDescriptorAmino): _70.AuthnDescriptor;
                    toAmino(message: _70.AuthnDescriptor): _70.AuthnDescriptorAmino;
                    fromAminoMsg(object: _70.AuthnDescriptorAminoMsg): _70.AuthnDescriptor;
                    toAminoMsg(message: _70.AuthnDescriptor): _70.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _70.AuthnDescriptorProtoMsg): _70.AuthnDescriptor;
                    toProto(message: _70.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _70.AuthnDescriptor): _70.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _70.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.SigningModeDescriptor;
                    fromPartial(object: Partial<_70.SigningModeDescriptor>): _70.SigningModeDescriptor;
                    fromAmino(object: _70.SigningModeDescriptorAmino): _70.SigningModeDescriptor;
                    toAmino(message: _70.SigningModeDescriptor): _70.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _70.SigningModeDescriptorAminoMsg): _70.SigningModeDescriptor;
                    toAminoMsg(message: _70.SigningModeDescriptor): _70.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _70.SigningModeDescriptorProtoMsg): _70.SigningModeDescriptor;
                    toProto(message: _70.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _70.SigningModeDescriptor): _70.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _70.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.ChainDescriptor;
                    fromPartial(object: Partial<_70.ChainDescriptor>): _70.ChainDescriptor;
                    fromAmino(object: _70.ChainDescriptorAmino): _70.ChainDescriptor;
                    toAmino(message: _70.ChainDescriptor): _70.ChainDescriptorAmino;
                    fromAminoMsg(object: _70.ChainDescriptorAminoMsg): _70.ChainDescriptor;
                    toAminoMsg(message: _70.ChainDescriptor): _70.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _70.ChainDescriptorProtoMsg): _70.ChainDescriptor;
                    toProto(message: _70.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _70.ChainDescriptor): _70.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _70.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.CodecDescriptor;
                    fromPartial(object: Partial<_70.CodecDescriptor>): _70.CodecDescriptor;
                    fromAmino(object: _70.CodecDescriptorAmino): _70.CodecDescriptor;
                    toAmino(message: _70.CodecDescriptor): _70.CodecDescriptorAmino;
                    fromAminoMsg(object: _70.CodecDescriptorAminoMsg): _70.CodecDescriptor;
                    toAminoMsg(message: _70.CodecDescriptor): _70.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _70.CodecDescriptorProtoMsg): _70.CodecDescriptor;
                    toProto(message: _70.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _70.CodecDescriptor): _70.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _70.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.InterfaceDescriptor;
                    fromPartial(object: Partial<_70.InterfaceDescriptor>): _70.InterfaceDescriptor;
                    fromAmino(object: _70.InterfaceDescriptorAmino): _70.InterfaceDescriptor;
                    toAmino(message: _70.InterfaceDescriptor): _70.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _70.InterfaceDescriptorAminoMsg): _70.InterfaceDescriptor;
                    toAminoMsg(message: _70.InterfaceDescriptor): _70.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _70.InterfaceDescriptorProtoMsg): _70.InterfaceDescriptor;
                    toProto(message: _70.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _70.InterfaceDescriptor): _70.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _70.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_70.InterfaceImplementerDescriptor>): _70.InterfaceImplementerDescriptor;
                    fromAmino(object: _70.InterfaceImplementerDescriptorAmino): _70.InterfaceImplementerDescriptor;
                    toAmino(message: _70.InterfaceImplementerDescriptor): _70.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _70.InterfaceImplementerDescriptorAminoMsg): _70.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _70.InterfaceImplementerDescriptor): _70.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _70.InterfaceImplementerDescriptorProtoMsg): _70.InterfaceImplementerDescriptor;
                    toProto(message: _70.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _70.InterfaceImplementerDescriptor): _70.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _70.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_70.InterfaceAcceptingMessageDescriptor>): _70.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _70.InterfaceAcceptingMessageDescriptorAmino): _70.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _70.InterfaceAcceptingMessageDescriptor): _70.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _70.InterfaceAcceptingMessageDescriptorAminoMsg): _70.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _70.InterfaceAcceptingMessageDescriptor): _70.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _70.InterfaceAcceptingMessageDescriptorProtoMsg): _70.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _70.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _70.InterfaceAcceptingMessageDescriptor): _70.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _70.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.ConfigurationDescriptor;
                    fromPartial(object: Partial<_70.ConfigurationDescriptor>): _70.ConfigurationDescriptor;
                    fromAmino(object: _70.ConfigurationDescriptorAmino): _70.ConfigurationDescriptor;
                    toAmino(message: _70.ConfigurationDescriptor): _70.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _70.ConfigurationDescriptorAminoMsg): _70.ConfigurationDescriptor;
                    toAminoMsg(message: _70.ConfigurationDescriptor): _70.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _70.ConfigurationDescriptorProtoMsg): _70.ConfigurationDescriptor;
                    toProto(message: _70.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _70.ConfigurationDescriptor): _70.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _70.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.MsgDescriptor;
                    fromPartial(object: Partial<_70.MsgDescriptor>): _70.MsgDescriptor;
                    fromAmino(object: _70.MsgDescriptorAmino): _70.MsgDescriptor;
                    toAmino(message: _70.MsgDescriptor): _70.MsgDescriptorAmino;
                    fromAminoMsg(object: _70.MsgDescriptorAminoMsg): _70.MsgDescriptor;
                    toAminoMsg(message: _70.MsgDescriptor): _70.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _70.MsgDescriptorProtoMsg): _70.MsgDescriptor;
                    toProto(message: _70.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _70.MsgDescriptor): _70.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _70.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _70.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_70.GetAuthnDescriptorRequest>): _70.GetAuthnDescriptorRequest;
                    fromAmino(_: _70.GetAuthnDescriptorRequestAmino): _70.GetAuthnDescriptorRequest;
                    toAmino(_: _70.GetAuthnDescriptorRequest): _70.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _70.GetAuthnDescriptorRequestAminoMsg): _70.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _70.GetAuthnDescriptorRequest): _70.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _70.GetAuthnDescriptorRequestProtoMsg): _70.GetAuthnDescriptorRequest;
                    toProto(message: _70.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _70.GetAuthnDescriptorRequest): _70.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _70.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_70.GetAuthnDescriptorResponse>): _70.GetAuthnDescriptorResponse;
                    fromAmino(object: _70.GetAuthnDescriptorResponseAmino): _70.GetAuthnDescriptorResponse;
                    toAmino(message: _70.GetAuthnDescriptorResponse): _70.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _70.GetAuthnDescriptorResponseAminoMsg): _70.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _70.GetAuthnDescriptorResponse): _70.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _70.GetAuthnDescriptorResponseProtoMsg): _70.GetAuthnDescriptorResponse;
                    toProto(message: _70.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _70.GetAuthnDescriptorResponse): _70.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _70.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _70.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_70.GetChainDescriptorRequest>): _70.GetChainDescriptorRequest;
                    fromAmino(_: _70.GetChainDescriptorRequestAmino): _70.GetChainDescriptorRequest;
                    toAmino(_: _70.GetChainDescriptorRequest): _70.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _70.GetChainDescriptorRequestAminoMsg): _70.GetChainDescriptorRequest;
                    toAminoMsg(message: _70.GetChainDescriptorRequest): _70.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _70.GetChainDescriptorRequestProtoMsg): _70.GetChainDescriptorRequest;
                    toProto(message: _70.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _70.GetChainDescriptorRequest): _70.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _70.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_70.GetChainDescriptorResponse>): _70.GetChainDescriptorResponse;
                    fromAmino(object: _70.GetChainDescriptorResponseAmino): _70.GetChainDescriptorResponse;
                    toAmino(message: _70.GetChainDescriptorResponse): _70.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _70.GetChainDescriptorResponseAminoMsg): _70.GetChainDescriptorResponse;
                    toAminoMsg(message: _70.GetChainDescriptorResponse): _70.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _70.GetChainDescriptorResponseProtoMsg): _70.GetChainDescriptorResponse;
                    toProto(message: _70.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _70.GetChainDescriptorResponse): _70.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _70.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _70.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_70.GetCodecDescriptorRequest>): _70.GetCodecDescriptorRequest;
                    fromAmino(_: _70.GetCodecDescriptorRequestAmino): _70.GetCodecDescriptorRequest;
                    toAmino(_: _70.GetCodecDescriptorRequest): _70.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _70.GetCodecDescriptorRequestAminoMsg): _70.GetCodecDescriptorRequest;
                    toAminoMsg(message: _70.GetCodecDescriptorRequest): _70.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _70.GetCodecDescriptorRequestProtoMsg): _70.GetCodecDescriptorRequest;
                    toProto(message: _70.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _70.GetCodecDescriptorRequest): _70.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _70.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_70.GetCodecDescriptorResponse>): _70.GetCodecDescriptorResponse;
                    fromAmino(object: _70.GetCodecDescriptorResponseAmino): _70.GetCodecDescriptorResponse;
                    toAmino(message: _70.GetCodecDescriptorResponse): _70.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _70.GetCodecDescriptorResponseAminoMsg): _70.GetCodecDescriptorResponse;
                    toAminoMsg(message: _70.GetCodecDescriptorResponse): _70.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _70.GetCodecDescriptorResponseProtoMsg): _70.GetCodecDescriptorResponse;
                    toProto(message: _70.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _70.GetCodecDescriptorResponse): _70.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _70.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _70.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_70.GetConfigurationDescriptorRequest>): _70.GetConfigurationDescriptorRequest;
                    fromAmino(_: _70.GetConfigurationDescriptorRequestAmino): _70.GetConfigurationDescriptorRequest;
                    toAmino(_: _70.GetConfigurationDescriptorRequest): _70.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _70.GetConfigurationDescriptorRequestAminoMsg): _70.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _70.GetConfigurationDescriptorRequest): _70.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _70.GetConfigurationDescriptorRequestProtoMsg): _70.GetConfigurationDescriptorRequest;
                    toProto(message: _70.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _70.GetConfigurationDescriptorRequest): _70.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _70.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_70.GetConfigurationDescriptorResponse>): _70.GetConfigurationDescriptorResponse;
                    fromAmino(object: _70.GetConfigurationDescriptorResponseAmino): _70.GetConfigurationDescriptorResponse;
                    toAmino(message: _70.GetConfigurationDescriptorResponse): _70.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _70.GetConfigurationDescriptorResponseAminoMsg): _70.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _70.GetConfigurationDescriptorResponse): _70.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _70.GetConfigurationDescriptorResponseProtoMsg): _70.GetConfigurationDescriptorResponse;
                    toProto(message: _70.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _70.GetConfigurationDescriptorResponse): _70.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _70.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _70.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_70.GetQueryServicesDescriptorRequest>): _70.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _70.GetQueryServicesDescriptorRequestAmino): _70.GetQueryServicesDescriptorRequest;
                    toAmino(_: _70.GetQueryServicesDescriptorRequest): _70.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _70.GetQueryServicesDescriptorRequestAminoMsg): _70.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _70.GetQueryServicesDescriptorRequest): _70.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _70.GetQueryServicesDescriptorRequestProtoMsg): _70.GetQueryServicesDescriptorRequest;
                    toProto(message: _70.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _70.GetQueryServicesDescriptorRequest): _70.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _70.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_70.GetQueryServicesDescriptorResponse>): _70.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _70.GetQueryServicesDescriptorResponseAmino): _70.GetQueryServicesDescriptorResponse;
                    toAmino(message: _70.GetQueryServicesDescriptorResponse): _70.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _70.GetQueryServicesDescriptorResponseAminoMsg): _70.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _70.GetQueryServicesDescriptorResponse): _70.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _70.GetQueryServicesDescriptorResponseProtoMsg): _70.GetQueryServicesDescriptorResponse;
                    toProto(message: _70.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _70.GetQueryServicesDescriptorResponse): _70.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _70.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _70.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_70.GetTxDescriptorRequest>): _70.GetTxDescriptorRequest;
                    fromAmino(_: _70.GetTxDescriptorRequestAmino): _70.GetTxDescriptorRequest;
                    toAmino(_: _70.GetTxDescriptorRequest): _70.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _70.GetTxDescriptorRequestAminoMsg): _70.GetTxDescriptorRequest;
                    toAminoMsg(message: _70.GetTxDescriptorRequest): _70.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _70.GetTxDescriptorRequestProtoMsg): _70.GetTxDescriptorRequest;
                    toProto(message: _70.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _70.GetTxDescriptorRequest): _70.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _70.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_70.GetTxDescriptorResponse>): _70.GetTxDescriptorResponse;
                    fromAmino(object: _70.GetTxDescriptorResponseAmino): _70.GetTxDescriptorResponse;
                    toAmino(message: _70.GetTxDescriptorResponse): _70.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _70.GetTxDescriptorResponseAminoMsg): _70.GetTxDescriptorResponse;
                    toAminoMsg(message: _70.GetTxDescriptorResponse): _70.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _70.GetTxDescriptorResponseProtoMsg): _70.GetTxDescriptorResponse;
                    toProto(message: _70.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _70.GetTxDescriptorResponse): _70.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _70.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.QueryServicesDescriptor;
                    fromPartial(object: Partial<_70.QueryServicesDescriptor>): _70.QueryServicesDescriptor;
                    fromAmino(object: _70.QueryServicesDescriptorAmino): _70.QueryServicesDescriptor;
                    toAmino(message: _70.QueryServicesDescriptor): _70.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _70.QueryServicesDescriptorAminoMsg): _70.QueryServicesDescriptor;
                    toAminoMsg(message: _70.QueryServicesDescriptor): _70.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _70.QueryServicesDescriptorProtoMsg): _70.QueryServicesDescriptor;
                    toProto(message: _70.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _70.QueryServicesDescriptor): _70.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _70.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.QueryServiceDescriptor;
                    fromPartial(object: Partial<_70.QueryServiceDescriptor>): _70.QueryServiceDescriptor;
                    fromAmino(object: _70.QueryServiceDescriptorAmino): _70.QueryServiceDescriptor;
                    toAmino(message: _70.QueryServiceDescriptor): _70.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _70.QueryServiceDescriptorAminoMsg): _70.QueryServiceDescriptor;
                    toAminoMsg(message: _70.QueryServiceDescriptor): _70.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _70.QueryServiceDescriptorProtoMsg): _70.QueryServiceDescriptor;
                    toProto(message: _70.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _70.QueryServiceDescriptor): _70.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _70.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.QueryMethodDescriptor;
                    fromPartial(object: Partial<_70.QueryMethodDescriptor>): _70.QueryMethodDescriptor;
                    fromAmino(object: _70.QueryMethodDescriptorAmino): _70.QueryMethodDescriptor;
                    toAmino(message: _70.QueryMethodDescriptor): _70.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _70.QueryMethodDescriptorAminoMsg): _70.QueryMethodDescriptor;
                    toAminoMsg(message: _70.QueryMethodDescriptor): _70.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _70.QueryMethodDescriptorProtoMsg): _70.QueryMethodDescriptor;
                    toProto(message: _70.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _70.QueryMethodDescriptor): _70.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _71.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _71.Snapshot;
                    fromPartial(object: Partial<_71.Snapshot>): _71.Snapshot;
                    fromAmino(object: _71.SnapshotAmino): _71.Snapshot;
                    toAmino(message: _71.Snapshot): _71.SnapshotAmino;
                    fromAminoMsg(object: _71.SnapshotAminoMsg): _71.Snapshot;
                    toAminoMsg(message: _71.Snapshot): _71.SnapshotAminoMsg;
                    fromProtoMsg(message: _71.SnapshotProtoMsg): _71.Snapshot;
                    toProto(message: _71.Snapshot): Uint8Array;
                    toProtoMsg(message: _71.Snapshot): _71.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _71.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _71.Metadata;
                    fromPartial(object: Partial<_71.Metadata>): _71.Metadata;
                    fromAmino(object: _71.MetadataAmino): _71.Metadata;
                    toAmino(message: _71.Metadata): _71.MetadataAmino;
                    fromAminoMsg(object: _71.MetadataAminoMsg): _71.Metadata;
                    toAminoMsg(message: _71.Metadata): _71.MetadataAminoMsg;
                    fromProtoMsg(message: _71.MetadataProtoMsg): _71.Metadata;
                    toProto(message: _71.Metadata): Uint8Array;
                    toProtoMsg(message: _71.Metadata): _71.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _71.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _71.SnapshotItem;
                    fromPartial(object: Partial<_71.SnapshotItem>): _71.SnapshotItem;
                    fromAmino(object: _71.SnapshotItemAmino): _71.SnapshotItem;
                    toAmino(message: _71.SnapshotItem): _71.SnapshotItemAmino;
                    fromAminoMsg(object: _71.SnapshotItemAminoMsg): _71.SnapshotItem;
                    toAminoMsg(message: _71.SnapshotItem): _71.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _71.SnapshotItemProtoMsg): _71.SnapshotItem;
                    toProto(message: _71.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _71.SnapshotItem): _71.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _71.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _71.SnapshotStoreItem;
                    fromPartial(object: Partial<_71.SnapshotStoreItem>): _71.SnapshotStoreItem;
                    fromAmino(object: _71.SnapshotStoreItemAmino): _71.SnapshotStoreItem;
                    toAmino(message: _71.SnapshotStoreItem): _71.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _71.SnapshotStoreItemAminoMsg): _71.SnapshotStoreItem;
                    toAminoMsg(message: _71.SnapshotStoreItem): _71.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _71.SnapshotStoreItemProtoMsg): _71.SnapshotStoreItem;
                    toProto(message: _71.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _71.SnapshotStoreItem): _71.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _71.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _71.SnapshotIAVLItem;
                    fromPartial(object: Partial<_71.SnapshotIAVLItem>): _71.SnapshotIAVLItem;
                    fromAmino(object: _71.SnapshotIAVLItemAmino): _71.SnapshotIAVLItem;
                    toAmino(message: _71.SnapshotIAVLItem): _71.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _71.SnapshotIAVLItemAminoMsg): _71.SnapshotIAVLItem;
                    toAminoMsg(message: _71.SnapshotIAVLItem): _71.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _71.SnapshotIAVLItemProtoMsg): _71.SnapshotIAVLItem;
                    toProto(message: _71.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _71.SnapshotIAVLItem): _71.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _71.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _71.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_71.SnapshotExtensionMeta>): _71.SnapshotExtensionMeta;
                    fromAmino(object: _71.SnapshotExtensionMetaAmino): _71.SnapshotExtensionMeta;
                    toAmino(message: _71.SnapshotExtensionMeta): _71.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _71.SnapshotExtensionMetaAminoMsg): _71.SnapshotExtensionMeta;
                    toAminoMsg(message: _71.SnapshotExtensionMeta): _71.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _71.SnapshotExtensionMetaProtoMsg): _71.SnapshotExtensionMeta;
                    toProto(message: _71.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _71.SnapshotExtensionMeta): _71.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _71.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _71.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_71.SnapshotExtensionPayload>): _71.SnapshotExtensionPayload;
                    fromAmino(object: _71.SnapshotExtensionPayloadAmino): _71.SnapshotExtensionPayload;
                    toAmino(message: _71.SnapshotExtensionPayload): _71.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _71.SnapshotExtensionPayloadAminoMsg): _71.SnapshotExtensionPayload;
                    toAminoMsg(message: _71.SnapshotExtensionPayload): _71.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _71.SnapshotExtensionPayloadProtoMsg): _71.SnapshotExtensionPayload;
                    toProto(message: _71.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _71.SnapshotExtensionPayload): _71.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _73.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.StoreKVPair;
                    fromPartial(object: Partial<_73.StoreKVPair>): _73.StoreKVPair;
                    fromAmino(object: _73.StoreKVPairAmino): _73.StoreKVPair;
                    toAmino(message: _73.StoreKVPair): _73.StoreKVPairAmino;
                    fromAminoMsg(object: _73.StoreKVPairAminoMsg): _73.StoreKVPair;
                    toAminoMsg(message: _73.StoreKVPair): _73.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _73.StoreKVPairProtoMsg): _73.StoreKVPair;
                    toProto(message: _73.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _73.StoreKVPair): _73.StoreKVPairProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _72.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.CommitInfo;
                    fromPartial(object: Partial<_72.CommitInfo>): _72.CommitInfo;
                    fromAmino(object: _72.CommitInfoAmino): _72.CommitInfo;
                    toAmino(message: _72.CommitInfo): _72.CommitInfoAmino;
                    fromAminoMsg(object: _72.CommitInfoAminoMsg): _72.CommitInfo;
                    toAminoMsg(message: _72.CommitInfo): _72.CommitInfoAminoMsg;
                    fromProtoMsg(message: _72.CommitInfoProtoMsg): _72.CommitInfo;
                    toProto(message: _72.CommitInfo): Uint8Array;
                    toProtoMsg(message: _72.CommitInfo): _72.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _72.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.StoreInfo;
                    fromPartial(object: Partial<_72.StoreInfo>): _72.StoreInfo;
                    fromAmino(object: _72.StoreInfoAmino): _72.StoreInfo;
                    toAmino(message: _72.StoreInfo): _72.StoreInfoAmino;
                    fromAminoMsg(object: _72.StoreInfoAminoMsg): _72.StoreInfo;
                    toAminoMsg(message: _72.StoreInfo): _72.StoreInfoAminoMsg;
                    fromProtoMsg(message: _72.StoreInfoProtoMsg): _72.StoreInfo;
                    toProto(message: _72.StoreInfo): Uint8Array;
                    toProtoMsg(message: _72.StoreInfo): _72.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _72.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.CommitID;
                    fromPartial(object: Partial<_72.CommitID>): _72.CommitID;
                    fromAmino(object: _72.CommitIDAmino): _72.CommitID;
                    toAmino(message: _72.CommitID): _72.CommitIDAmino;
                    fromAminoMsg(object: _72.CommitIDAminoMsg): _72.CommitID;
                    toAminoMsg(message: _72.CommitID): _72.CommitIDAminoMsg;
                    fromProtoMsg(message: _72.CommitIDProtoMsg): _72.CommitID;
                    toProto(message: _72.CommitID): Uint8Array;
                    toProtoMsg(message: _72.CommitID): _72.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _231.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _74.GetNodeInfoRequest): Promise<_74.GetNodeInfoResponse>;
                    getSyncing(request?: _74.GetSyncingRequest): Promise<_74.GetSyncingResponse>;
                    getLatestBlock(request?: _74.GetLatestBlockRequest): Promise<_74.GetLatestBlockResponse>;
                    getBlockByHeight(request: _74.GetBlockByHeightRequest): Promise<_74.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _74.GetLatestValidatorSetRequest): Promise<_74.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _74.GetValidatorSetByHeightRequest): Promise<_74.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _217.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _74.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_74.GetValidatorSetByHeightRequest>): _74.GetValidatorSetByHeightRequest;
                    fromAmino(object: _74.GetValidatorSetByHeightRequestAmino): _74.GetValidatorSetByHeightRequest;
                    toAmino(message: _74.GetValidatorSetByHeightRequest): _74.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _74.GetValidatorSetByHeightRequestAminoMsg): _74.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _74.GetValidatorSetByHeightRequest): _74.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _74.GetValidatorSetByHeightRequestProtoMsg): _74.GetValidatorSetByHeightRequest;
                    toProto(message: _74.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _74.GetValidatorSetByHeightRequest): _74.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _74.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_74.GetValidatorSetByHeightResponse>): _74.GetValidatorSetByHeightResponse;
                    fromAmino(object: _74.GetValidatorSetByHeightResponseAmino): _74.GetValidatorSetByHeightResponse;
                    toAmino(message: _74.GetValidatorSetByHeightResponse): _74.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _74.GetValidatorSetByHeightResponseAminoMsg): _74.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _74.GetValidatorSetByHeightResponse): _74.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _74.GetValidatorSetByHeightResponseProtoMsg): _74.GetValidatorSetByHeightResponse;
                    toProto(message: _74.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _74.GetValidatorSetByHeightResponse): _74.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _74.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_74.GetLatestValidatorSetRequest>): _74.GetLatestValidatorSetRequest;
                    fromAmino(object: _74.GetLatestValidatorSetRequestAmino): _74.GetLatestValidatorSetRequest;
                    toAmino(message: _74.GetLatestValidatorSetRequest): _74.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _74.GetLatestValidatorSetRequestAminoMsg): _74.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _74.GetLatestValidatorSetRequest): _74.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _74.GetLatestValidatorSetRequestProtoMsg): _74.GetLatestValidatorSetRequest;
                    toProto(message: _74.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _74.GetLatestValidatorSetRequest): _74.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _74.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_74.GetLatestValidatorSetResponse>): _74.GetLatestValidatorSetResponse;
                    fromAmino(object: _74.GetLatestValidatorSetResponseAmino): _74.GetLatestValidatorSetResponse;
                    toAmino(message: _74.GetLatestValidatorSetResponse): _74.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _74.GetLatestValidatorSetResponseAminoMsg): _74.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _74.GetLatestValidatorSetResponse): _74.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _74.GetLatestValidatorSetResponseProtoMsg): _74.GetLatestValidatorSetResponse;
                    toProto(message: _74.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _74.GetLatestValidatorSetResponse): _74.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _74.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.Validator;
                    fromPartial(object: Partial<_74.Validator>): _74.Validator;
                    fromAmino(object: _74.ValidatorAmino): _74.Validator;
                    toAmino(message: _74.Validator): _74.ValidatorAmino;
                    fromAminoMsg(object: _74.ValidatorAminoMsg): _74.Validator;
                    toAminoMsg(message: _74.Validator): _74.ValidatorAminoMsg;
                    fromProtoMsg(message: _74.ValidatorProtoMsg): _74.Validator;
                    toProto(message: _74.Validator): Uint8Array;
                    toProtoMsg(message: _74.Validator): _74.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _74.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_74.GetBlockByHeightRequest>): _74.GetBlockByHeightRequest;
                    fromAmino(object: _74.GetBlockByHeightRequestAmino): _74.GetBlockByHeightRequest;
                    toAmino(message: _74.GetBlockByHeightRequest): _74.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _74.GetBlockByHeightRequestAminoMsg): _74.GetBlockByHeightRequest;
                    toAminoMsg(message: _74.GetBlockByHeightRequest): _74.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _74.GetBlockByHeightRequestProtoMsg): _74.GetBlockByHeightRequest;
                    toProto(message: _74.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _74.GetBlockByHeightRequest): _74.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _74.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_74.GetBlockByHeightResponse>): _74.GetBlockByHeightResponse;
                    fromAmino(object: _74.GetBlockByHeightResponseAmino): _74.GetBlockByHeightResponse;
                    toAmino(message: _74.GetBlockByHeightResponse): _74.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _74.GetBlockByHeightResponseAminoMsg): _74.GetBlockByHeightResponse;
                    toAminoMsg(message: _74.GetBlockByHeightResponse): _74.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _74.GetBlockByHeightResponseProtoMsg): _74.GetBlockByHeightResponse;
                    toProto(message: _74.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _74.GetBlockByHeightResponse): _74.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _74.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _74.GetLatestBlockRequest;
                    fromPartial(_: Partial<_74.GetLatestBlockRequest>): _74.GetLatestBlockRequest;
                    fromAmino(_: _74.GetLatestBlockRequestAmino): _74.GetLatestBlockRequest;
                    toAmino(_: _74.GetLatestBlockRequest): _74.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _74.GetLatestBlockRequestAminoMsg): _74.GetLatestBlockRequest;
                    toAminoMsg(message: _74.GetLatestBlockRequest): _74.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _74.GetLatestBlockRequestProtoMsg): _74.GetLatestBlockRequest;
                    toProto(message: _74.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _74.GetLatestBlockRequest): _74.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _74.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.GetLatestBlockResponse;
                    fromPartial(object: Partial<_74.GetLatestBlockResponse>): _74.GetLatestBlockResponse;
                    fromAmino(object: _74.GetLatestBlockResponseAmino): _74.GetLatestBlockResponse;
                    toAmino(message: _74.GetLatestBlockResponse): _74.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _74.GetLatestBlockResponseAminoMsg): _74.GetLatestBlockResponse;
                    toAminoMsg(message: _74.GetLatestBlockResponse): _74.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _74.GetLatestBlockResponseProtoMsg): _74.GetLatestBlockResponse;
                    toProto(message: _74.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _74.GetLatestBlockResponse): _74.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _74.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _74.GetSyncingRequest;
                    fromPartial(_: Partial<_74.GetSyncingRequest>): _74.GetSyncingRequest;
                    fromAmino(_: _74.GetSyncingRequestAmino): _74.GetSyncingRequest;
                    toAmino(_: _74.GetSyncingRequest): _74.GetSyncingRequestAmino;
                    fromAminoMsg(object: _74.GetSyncingRequestAminoMsg): _74.GetSyncingRequest;
                    toAminoMsg(message: _74.GetSyncingRequest): _74.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _74.GetSyncingRequestProtoMsg): _74.GetSyncingRequest;
                    toProto(message: _74.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _74.GetSyncingRequest): _74.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _74.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.GetSyncingResponse;
                    fromPartial(object: Partial<_74.GetSyncingResponse>): _74.GetSyncingResponse;
                    fromAmino(object: _74.GetSyncingResponseAmino): _74.GetSyncingResponse;
                    toAmino(message: _74.GetSyncingResponse): _74.GetSyncingResponseAmino;
                    fromAminoMsg(object: _74.GetSyncingResponseAminoMsg): _74.GetSyncingResponse;
                    toAminoMsg(message: _74.GetSyncingResponse): _74.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _74.GetSyncingResponseProtoMsg): _74.GetSyncingResponse;
                    toProto(message: _74.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _74.GetSyncingResponse): _74.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _74.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _74.GetNodeInfoRequest;
                    fromPartial(_: Partial<_74.GetNodeInfoRequest>): _74.GetNodeInfoRequest;
                    fromAmino(_: _74.GetNodeInfoRequestAmino): _74.GetNodeInfoRequest;
                    toAmino(_: _74.GetNodeInfoRequest): _74.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _74.GetNodeInfoRequestAminoMsg): _74.GetNodeInfoRequest;
                    toAminoMsg(message: _74.GetNodeInfoRequest): _74.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _74.GetNodeInfoRequestProtoMsg): _74.GetNodeInfoRequest;
                    toProto(message: _74.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _74.GetNodeInfoRequest): _74.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _74.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.GetNodeInfoResponse;
                    fromPartial(object: Partial<_74.GetNodeInfoResponse>): _74.GetNodeInfoResponse;
                    fromAmino(object: _74.GetNodeInfoResponseAmino): _74.GetNodeInfoResponse;
                    toAmino(message: _74.GetNodeInfoResponse): _74.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _74.GetNodeInfoResponseAminoMsg): _74.GetNodeInfoResponse;
                    toAminoMsg(message: _74.GetNodeInfoResponse): _74.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _74.GetNodeInfoResponseProtoMsg): _74.GetNodeInfoResponse;
                    toProto(message: _74.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _74.GetNodeInfoResponse): _74.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _74.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.VersionInfo;
                    fromPartial(object: Partial<_74.VersionInfo>): _74.VersionInfo;
                    fromAmino(object: _74.VersionInfoAmino): _74.VersionInfo;
                    toAmino(message: _74.VersionInfo): _74.VersionInfoAmino;
                    fromAminoMsg(object: _74.VersionInfoAminoMsg): _74.VersionInfo;
                    toAminoMsg(message: _74.VersionInfo): _74.VersionInfoAminoMsg;
                    fromProtoMsg(message: _74.VersionInfoProtoMsg): _74.VersionInfo;
                    toProto(message: _74.VersionInfo): Uint8Array;
                    toProtoMsg(message: _74.VersionInfo): _74.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _74.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.Module;
                    fromPartial(object: Partial<_74.Module>): _74.Module;
                    fromAmino(object: _74.ModuleAmino): _74.Module;
                    toAmino(message: _74.Module): _74.ModuleAmino;
                    fromAminoMsg(object: _74.ModuleAminoMsg): _74.Module;
                    toAminoMsg(message: _74.Module): _74.ModuleAminoMsg;
                    fromProtoMsg(message: _74.ModuleProtoMsg): _74.Module;
                    toProto(message: _74.Module): Uint8Array;
                    toProtoMsg(message: _74.Module): _74.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _75.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.Coin;
                fromPartial(object: Partial<_75.Coin>): _75.Coin;
                fromAmino(object: _75.CoinAmino): _75.Coin;
                toAmino(message: _75.Coin): _75.CoinAmino;
                fromAminoMsg(object: _75.CoinAminoMsg): _75.Coin;
                toAminoMsg(message: _75.Coin): _75.CoinAminoMsg;
                fromProtoMsg(message: _75.CoinProtoMsg): _75.Coin;
                toProto(message: _75.Coin): Uint8Array;
                toProtoMsg(message: _75.Coin): _75.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _75.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.DecCoin;
                fromPartial(object: Partial<_75.DecCoin>): _75.DecCoin;
                fromAmino(object: _75.DecCoinAmino): _75.DecCoin;
                toAmino(message: _75.DecCoin): _75.DecCoinAmino;
                fromAminoMsg(object: _75.DecCoinAminoMsg): _75.DecCoin;
                toAminoMsg(message: _75.DecCoin): _75.DecCoinAminoMsg;
                fromProtoMsg(message: _75.DecCoinProtoMsg): _75.DecCoin;
                toProto(message: _75.DecCoin): Uint8Array;
                toProtoMsg(message: _75.DecCoin): _75.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _75.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.IntProto;
                fromPartial(object: Partial<_75.IntProto>): _75.IntProto;
                fromAmino(object: _75.IntProtoAmino): _75.IntProto;
                toAmino(message: _75.IntProto): _75.IntProtoAmino;
                fromAminoMsg(object: _75.IntProtoAminoMsg): _75.IntProto;
                toAminoMsg(message: _75.IntProto): _75.IntProtoAminoMsg;
                fromProtoMsg(message: _75.IntProtoProtoMsg): _75.IntProto;
                toProto(message: _75.IntProto): Uint8Array;
                toProtoMsg(message: _75.IntProto): _75.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _75.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.DecProto;
                fromPartial(object: Partial<_75.DecProto>): _75.DecProto;
                fromAmino(object: _75.DecProtoAmino): _75.DecProto;
                toAmino(message: _75.DecProto): _75.DecProtoAmino;
                fromAminoMsg(object: _75.DecProtoAminoMsg): _75.DecProto;
                toAminoMsg(message: _75.DecProto): _75.DecProtoAminoMsg;
                fromProtoMsg(message: _75.DecProtoProtoMsg): _75.DecProto;
                toProto(message: _75.DecProto): Uint8Array;
                toProtoMsg(message: _75.DecProto): _75.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _77.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.GenesisOwners;
                fromPartial(object: Partial<_77.GenesisOwners>): _77.GenesisOwners;
                fromAmino(object: _77.GenesisOwnersAmino): _77.GenesisOwners;
                toAmino(message: _77.GenesisOwners): _77.GenesisOwnersAmino;
                fromAminoMsg(object: _77.GenesisOwnersAminoMsg): _77.GenesisOwners;
                toAminoMsg(message: _77.GenesisOwners): _77.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _77.GenesisOwnersProtoMsg): _77.GenesisOwners;
                toProto(message: _77.GenesisOwners): Uint8Array;
                toProtoMsg(message: _77.GenesisOwners): _77.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _76.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Capability;
                fromPartial(object: Partial<_76.Capability>): _76.Capability;
                fromAmino(object: _76.CapabilityAmino): _76.Capability;
                toAmino(message: _76.Capability): _76.CapabilityAmino;
                fromAminoMsg(object: _76.CapabilityAminoMsg): _76.Capability;
                toAminoMsg(message: _76.Capability): _76.CapabilityAminoMsg;
                fromProtoMsg(message: _76.CapabilityProtoMsg): _76.Capability;
                toProto(message: _76.Capability): Uint8Array;
                toProtoMsg(message: _76.Capability): _76.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _76.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Owner;
                fromPartial(object: Partial<_76.Owner>): _76.Owner;
                fromAmino(object: _76.OwnerAmino): _76.Owner;
                toAmino(message: _76.Owner): _76.OwnerAmino;
                fromAminoMsg(object: _76.OwnerAminoMsg): _76.Owner;
                toAminoMsg(message: _76.Owner): _76.OwnerAminoMsg;
                fromProtoMsg(message: _76.OwnerProtoMsg): _76.Owner;
                toProto(message: _76.Owner): Uint8Array;
                toProtoMsg(message: _76.Owner): _76.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _76.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.CapabilityOwners;
                fromPartial(object: Partial<_76.CapabilityOwners>): _76.CapabilityOwners;
                fromAmino(object: _76.CapabilityOwnersAmino): _76.CapabilityOwners;
                toAmino(message: _76.CapabilityOwners): _76.CapabilityOwnersAmino;
                fromAminoMsg(object: _76.CapabilityOwnersAminoMsg): _76.CapabilityOwners;
                toAminoMsg(message: _76.CapabilityOwners): _76.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _76.CapabilityOwnersProtoMsg): _76.CapabilityOwners;
                toProto(message: _76.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _76.CapabilityOwners): _76.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _244.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _79.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _79.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _79.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _79.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _79.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _79.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _79.MsgVerifyInvariant) => _79.MsgVerifyInvariantAmino;
                    fromAmino: (object: _79.MsgVerifyInvariantAmino) => _79.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _79.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgVerifyInvariant;
                fromPartial(object: Partial<_79.MsgVerifyInvariant>): _79.MsgVerifyInvariant;
                fromAmino(object: _79.MsgVerifyInvariantAmino): _79.MsgVerifyInvariant;
                toAmino(message: _79.MsgVerifyInvariant): _79.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _79.MsgVerifyInvariantAminoMsg): _79.MsgVerifyInvariant;
                toAminoMsg(message: _79.MsgVerifyInvariant): _79.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _79.MsgVerifyInvariantProtoMsg): _79.MsgVerifyInvariant;
                toProto(message: _79.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _79.MsgVerifyInvariant): _79.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _79.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _79.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_79.MsgVerifyInvariantResponse>): _79.MsgVerifyInvariantResponse;
                fromAmino(_: _79.MsgVerifyInvariantResponseAmino): _79.MsgVerifyInvariantResponse;
                toAmino(_: _79.MsgVerifyInvariantResponse): _79.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _79.MsgVerifyInvariantResponseAminoMsg): _79.MsgVerifyInvariantResponse;
                toAminoMsg(message: _79.MsgVerifyInvariantResponse): _79.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _79.MsgVerifyInvariantResponseProtoMsg): _79.MsgVerifyInvariantResponse;
                toProto(message: _79.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _79.MsgVerifyInvariantResponse): _79.MsgVerifyInvariantResponseProtoMsg;
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
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _80.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.PubKey;
                fromPartial(object: Partial<_80.PubKey>): _80.PubKey;
                fromAmino(object: _80.PubKeyAmino): _80.PubKey;
                toAmino(message: _80.PubKey): _80.PubKeyAmino;
                fromAminoMsg(object: _80.PubKeyAminoMsg): _80.PubKey;
                toAminoMsg(message: _80.PubKey): _80.PubKeyAminoMsg;
                fromProtoMsg(message: _80.PubKeyProtoMsg): _80.PubKey;
                toProto(message: _80.PubKey): Uint8Array;
                toProtoMsg(message: _80.PubKey): _80.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _80.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.PrivKey;
                fromPartial(object: Partial<_80.PrivKey>): _80.PrivKey;
                fromAmino(object: _80.PrivKeyAmino): _80.PrivKey;
                toAmino(message: _80.PrivKey): _80.PrivKeyAmino;
                fromAminoMsg(object: _80.PrivKeyAminoMsg): _80.PrivKey;
                toAminoMsg(message: _80.PrivKey): _80.PrivKeyAminoMsg;
                fromProtoMsg(message: _80.PrivKeyProtoMsg): _80.PrivKey;
                toProto(message: _80.PrivKey): Uint8Array;
                toProtoMsg(message: _80.PrivKey): _80.PrivKeyProtoMsg;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _81.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.LegacyAminoPubKey;
                fromPartial(object: Partial<_81.LegacyAminoPubKey>): _81.LegacyAminoPubKey;
                fromAmino(object: _81.LegacyAminoPubKeyAmino): _81.LegacyAminoPubKey;
                toAmino(message: _81.LegacyAminoPubKey): _81.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _81.LegacyAminoPubKeyAminoMsg): _81.LegacyAminoPubKey;
                toAminoMsg(message: _81.LegacyAminoPubKey): _81.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _81.LegacyAminoPubKeyProtoMsg): _81.LegacyAminoPubKey;
                toProto(message: _81.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _81.LegacyAminoPubKey): _81.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _82.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.PubKey;
                fromPartial(object: Partial<_82.PubKey>): _82.PubKey;
                fromAmino(object: _82.PubKeyAmino): _82.PubKey;
                toAmino(message: _82.PubKey): _82.PubKeyAmino;
                fromAminoMsg(object: _82.PubKeyAminoMsg): _82.PubKey;
                toAminoMsg(message: _82.PubKey): _82.PubKeyAminoMsg;
                fromProtoMsg(message: _82.PubKeyProtoMsg): _82.PubKey;
                toProto(message: _82.PubKey): Uint8Array;
                toProtoMsg(message: _82.PubKey): _82.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _82.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.PrivKey;
                fromPartial(object: Partial<_82.PrivKey>): _82.PrivKey;
                fromAmino(object: _82.PrivKeyAmino): _82.PrivKey;
                toAmino(message: _82.PrivKey): _82.PrivKeyAmino;
                fromAminoMsg(object: _82.PrivKeyAminoMsg): _82.PrivKey;
                toAminoMsg(message: _82.PrivKey): _82.PrivKeyAminoMsg;
                fromProtoMsg(message: _82.PrivKeyProtoMsg): _82.PrivKey;
                toProto(message: _82.PrivKey): Uint8Array;
                toProtoMsg(message: _82.PrivKey): _82.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
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
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _245.MsgClientImpl;
            QueryClientImpl: typeof _232.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _86.QueryParamsRequest): Promise<_86.QueryParamsResponse>;
                validatorOutstandingRewards(request: _86.QueryValidatorOutstandingRewardsRequest): Promise<_86.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _86.QueryValidatorCommissionRequest): Promise<_86.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _86.QueryValidatorSlashesRequest): Promise<_86.QueryValidatorSlashesResponse>;
                delegationRewards(request: _86.QueryDelegationRewardsRequest): Promise<_86.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _86.QueryDelegationTotalRewardsRequest): Promise<_86.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _86.QueryDelegatorValidatorsRequest): Promise<_86.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _86.QueryDelegatorWithdrawAddressRequest): Promise<_86.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _86.QueryCommunityPoolRequest): Promise<_86.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _218.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _87.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _87.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _87.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _87.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _87.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _87.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _87.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _87.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _87.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _87.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _87.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _87.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _87.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _87.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _87.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _87.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _87.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _87.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _87.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _87.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _87.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _87.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _87.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _87.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _87.MsgSetWithdrawAddress) => _87.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _87.MsgSetWithdrawAddressAmino) => _87.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _87.MsgWithdrawDelegatorReward) => _87.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _87.MsgWithdrawDelegatorRewardAmino) => _87.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _87.MsgWithdrawValidatorCommission) => _87.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _87.MsgWithdrawValidatorCommissionAmino) => _87.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _87.MsgFundCommunityPool) => _87.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _87.MsgFundCommunityPoolAmino) => _87.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _87.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_87.MsgSetWithdrawAddress>): _87.MsgSetWithdrawAddress;
                fromAmino(object: _87.MsgSetWithdrawAddressAmino): _87.MsgSetWithdrawAddress;
                toAmino(message: _87.MsgSetWithdrawAddress): _87.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _87.MsgSetWithdrawAddressAminoMsg): _87.MsgSetWithdrawAddress;
                toAminoMsg(message: _87.MsgSetWithdrawAddress): _87.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _87.MsgSetWithdrawAddressProtoMsg): _87.MsgSetWithdrawAddress;
                toProto(message: _87.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _87.MsgSetWithdrawAddress): _87.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _87.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_87.MsgSetWithdrawAddressResponse>): _87.MsgSetWithdrawAddressResponse;
                fromAmino(_: _87.MsgSetWithdrawAddressResponseAmino): _87.MsgSetWithdrawAddressResponse;
                toAmino(_: _87.MsgSetWithdrawAddressResponse): _87.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _87.MsgSetWithdrawAddressResponseAminoMsg): _87.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _87.MsgSetWithdrawAddressResponse): _87.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _87.MsgSetWithdrawAddressResponseProtoMsg): _87.MsgSetWithdrawAddressResponse;
                toProto(message: _87.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _87.MsgSetWithdrawAddressResponse): _87.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _87.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_87.MsgWithdrawDelegatorReward>): _87.MsgWithdrawDelegatorReward;
                fromAmino(object: _87.MsgWithdrawDelegatorRewardAmino): _87.MsgWithdrawDelegatorReward;
                toAmino(message: _87.MsgWithdrawDelegatorReward): _87.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _87.MsgWithdrawDelegatorRewardAminoMsg): _87.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _87.MsgWithdrawDelegatorReward): _87.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _87.MsgWithdrawDelegatorRewardProtoMsg): _87.MsgWithdrawDelegatorReward;
                toProto(message: _87.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _87.MsgWithdrawDelegatorReward): _87.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _87.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_87.MsgWithdrawDelegatorRewardResponse>): _87.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _87.MsgWithdrawDelegatorRewardResponseAmino): _87.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _87.MsgWithdrawDelegatorRewardResponse): _87.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _87.MsgWithdrawDelegatorRewardResponseAminoMsg): _87.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _87.MsgWithdrawDelegatorRewardResponse): _87.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _87.MsgWithdrawDelegatorRewardResponseProtoMsg): _87.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _87.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _87.MsgWithdrawDelegatorRewardResponse): _87.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _87.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_87.MsgWithdrawValidatorCommission>): _87.MsgWithdrawValidatorCommission;
                fromAmino(object: _87.MsgWithdrawValidatorCommissionAmino): _87.MsgWithdrawValidatorCommission;
                toAmino(message: _87.MsgWithdrawValidatorCommission): _87.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _87.MsgWithdrawValidatorCommissionAminoMsg): _87.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _87.MsgWithdrawValidatorCommission): _87.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _87.MsgWithdrawValidatorCommissionProtoMsg): _87.MsgWithdrawValidatorCommission;
                toProto(message: _87.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _87.MsgWithdrawValidatorCommission): _87.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _87.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_87.MsgWithdrawValidatorCommissionResponse>): _87.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _87.MsgWithdrawValidatorCommissionResponseAmino): _87.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _87.MsgWithdrawValidatorCommissionResponse): _87.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _87.MsgWithdrawValidatorCommissionResponseAminoMsg): _87.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _87.MsgWithdrawValidatorCommissionResponse): _87.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _87.MsgWithdrawValidatorCommissionResponseProtoMsg): _87.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _87.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _87.MsgWithdrawValidatorCommissionResponse): _87.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _87.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgFundCommunityPool;
                fromPartial(object: Partial<_87.MsgFundCommunityPool>): _87.MsgFundCommunityPool;
                fromAmino(object: _87.MsgFundCommunityPoolAmino): _87.MsgFundCommunityPool;
                toAmino(message: _87.MsgFundCommunityPool): _87.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _87.MsgFundCommunityPoolAminoMsg): _87.MsgFundCommunityPool;
                toAminoMsg(message: _87.MsgFundCommunityPool): _87.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _87.MsgFundCommunityPoolProtoMsg): _87.MsgFundCommunityPool;
                toProto(message: _87.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _87.MsgFundCommunityPool): _87.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _87.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_87.MsgFundCommunityPoolResponse>): _87.MsgFundCommunityPoolResponse;
                fromAmino(_: _87.MsgFundCommunityPoolResponseAmino): _87.MsgFundCommunityPoolResponse;
                toAmino(_: _87.MsgFundCommunityPoolResponse): _87.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _87.MsgFundCommunityPoolResponseAminoMsg): _87.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _87.MsgFundCommunityPoolResponse): _87.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _87.MsgFundCommunityPoolResponseProtoMsg): _87.MsgFundCommunityPoolResponse;
                toProto(message: _87.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _87.MsgFundCommunityPoolResponse): _87.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _86.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.QueryParamsRequest;
                fromPartial(_: Partial<_86.QueryParamsRequest>): _86.QueryParamsRequest;
                fromAmino(_: _86.QueryParamsRequestAmino): _86.QueryParamsRequest;
                toAmino(_: _86.QueryParamsRequest): _86.QueryParamsRequestAmino;
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
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _86.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_86.QueryValidatorOutstandingRewardsRequest>): _86.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _86.QueryValidatorOutstandingRewardsRequestAmino): _86.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _86.QueryValidatorOutstandingRewardsRequest): _86.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _86.QueryValidatorOutstandingRewardsRequestAminoMsg): _86.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _86.QueryValidatorOutstandingRewardsRequest): _86.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryValidatorOutstandingRewardsRequestProtoMsg): _86.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _86.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryValidatorOutstandingRewardsRequest): _86.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _86.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_86.QueryValidatorOutstandingRewardsResponse>): _86.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _86.QueryValidatorOutstandingRewardsResponseAmino): _86.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _86.QueryValidatorOutstandingRewardsResponse): _86.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _86.QueryValidatorOutstandingRewardsResponseAminoMsg): _86.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _86.QueryValidatorOutstandingRewardsResponse): _86.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryValidatorOutstandingRewardsResponseProtoMsg): _86.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _86.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryValidatorOutstandingRewardsResponse): _86.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _86.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_86.QueryValidatorCommissionRequest>): _86.QueryValidatorCommissionRequest;
                fromAmino(object: _86.QueryValidatorCommissionRequestAmino): _86.QueryValidatorCommissionRequest;
                toAmino(message: _86.QueryValidatorCommissionRequest): _86.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _86.QueryValidatorCommissionRequestAminoMsg): _86.QueryValidatorCommissionRequest;
                toAminoMsg(message: _86.QueryValidatorCommissionRequest): _86.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _86.QueryValidatorCommissionRequestProtoMsg): _86.QueryValidatorCommissionRequest;
                toProto(message: _86.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _86.QueryValidatorCommissionRequest): _86.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _86.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_86.QueryValidatorCommissionResponse>): _86.QueryValidatorCommissionResponse;
                fromAmino(object: _86.QueryValidatorCommissionResponseAmino): _86.QueryValidatorCommissionResponse;
                toAmino(message: _86.QueryValidatorCommissionResponse): _86.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _86.QueryValidatorCommissionResponseAminoMsg): _86.QueryValidatorCommissionResponse;
                toAminoMsg(message: _86.QueryValidatorCommissionResponse): _86.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _86.QueryValidatorCommissionResponseProtoMsg): _86.QueryValidatorCommissionResponse;
                toProto(message: _86.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _86.QueryValidatorCommissionResponse): _86.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _86.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_86.QueryValidatorSlashesRequest>): _86.QueryValidatorSlashesRequest;
                fromAmino(object: _86.QueryValidatorSlashesRequestAmino): _86.QueryValidatorSlashesRequest;
                toAmino(message: _86.QueryValidatorSlashesRequest): _86.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _86.QueryValidatorSlashesRequestAminoMsg): _86.QueryValidatorSlashesRequest;
                toAminoMsg(message: _86.QueryValidatorSlashesRequest): _86.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _86.QueryValidatorSlashesRequestProtoMsg): _86.QueryValidatorSlashesRequest;
                toProto(message: _86.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _86.QueryValidatorSlashesRequest): _86.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _86.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_86.QueryValidatorSlashesResponse>): _86.QueryValidatorSlashesResponse;
                fromAmino(object: _86.QueryValidatorSlashesResponseAmino): _86.QueryValidatorSlashesResponse;
                toAmino(message: _86.QueryValidatorSlashesResponse): _86.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _86.QueryValidatorSlashesResponseAminoMsg): _86.QueryValidatorSlashesResponse;
                toAminoMsg(message: _86.QueryValidatorSlashesResponse): _86.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _86.QueryValidatorSlashesResponseProtoMsg): _86.QueryValidatorSlashesResponse;
                toProto(message: _86.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _86.QueryValidatorSlashesResponse): _86.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _86.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_86.QueryDelegationRewardsRequest>): _86.QueryDelegationRewardsRequest;
                fromAmino(object: _86.QueryDelegationRewardsRequestAmino): _86.QueryDelegationRewardsRequest;
                toAmino(message: _86.QueryDelegationRewardsRequest): _86.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _86.QueryDelegationRewardsRequestAminoMsg): _86.QueryDelegationRewardsRequest;
                toAminoMsg(message: _86.QueryDelegationRewardsRequest): _86.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryDelegationRewardsRequestProtoMsg): _86.QueryDelegationRewardsRequest;
                toProto(message: _86.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDelegationRewardsRequest): _86.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _86.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_86.QueryDelegationRewardsResponse>): _86.QueryDelegationRewardsResponse;
                fromAmino(object: _86.QueryDelegationRewardsResponseAmino): _86.QueryDelegationRewardsResponse;
                toAmino(message: _86.QueryDelegationRewardsResponse): _86.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _86.QueryDelegationRewardsResponseAminoMsg): _86.QueryDelegationRewardsResponse;
                toAminoMsg(message: _86.QueryDelegationRewardsResponse): _86.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryDelegationRewardsResponseProtoMsg): _86.QueryDelegationRewardsResponse;
                toProto(message: _86.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDelegationRewardsResponse): _86.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _86.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_86.QueryDelegationTotalRewardsRequest>): _86.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _86.QueryDelegationTotalRewardsRequestAmino): _86.QueryDelegationTotalRewardsRequest;
                toAmino(message: _86.QueryDelegationTotalRewardsRequest): _86.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _86.QueryDelegationTotalRewardsRequestAminoMsg): _86.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _86.QueryDelegationTotalRewardsRequest): _86.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryDelegationTotalRewardsRequestProtoMsg): _86.QueryDelegationTotalRewardsRequest;
                toProto(message: _86.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDelegationTotalRewardsRequest): _86.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _86.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_86.QueryDelegationTotalRewardsResponse>): _86.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _86.QueryDelegationTotalRewardsResponseAmino): _86.QueryDelegationTotalRewardsResponse;
                toAmino(message: _86.QueryDelegationTotalRewardsResponse): _86.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _86.QueryDelegationTotalRewardsResponseAminoMsg): _86.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _86.QueryDelegationTotalRewardsResponse): _86.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryDelegationTotalRewardsResponseProtoMsg): _86.QueryDelegationTotalRewardsResponse;
                toProto(message: _86.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDelegationTotalRewardsResponse): _86.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _86.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_86.QueryDelegatorValidatorsRequest>): _86.QueryDelegatorValidatorsRequest;
                fromAmino(object: _86.QueryDelegatorValidatorsRequestAmino): _86.QueryDelegatorValidatorsRequest;
                toAmino(message: _86.QueryDelegatorValidatorsRequest): _86.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _86.QueryDelegatorValidatorsRequestAminoMsg): _86.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _86.QueryDelegatorValidatorsRequest): _86.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryDelegatorValidatorsRequestProtoMsg): _86.QueryDelegatorValidatorsRequest;
                toProto(message: _86.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDelegatorValidatorsRequest): _86.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _86.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_86.QueryDelegatorValidatorsResponse>): _86.QueryDelegatorValidatorsResponse;
                fromAmino(object: _86.QueryDelegatorValidatorsResponseAmino): _86.QueryDelegatorValidatorsResponse;
                toAmino(message: _86.QueryDelegatorValidatorsResponse): _86.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _86.QueryDelegatorValidatorsResponseAminoMsg): _86.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _86.QueryDelegatorValidatorsResponse): _86.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryDelegatorValidatorsResponseProtoMsg): _86.QueryDelegatorValidatorsResponse;
                toProto(message: _86.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDelegatorValidatorsResponse): _86.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _86.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_86.QueryDelegatorWithdrawAddressRequest>): _86.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _86.QueryDelegatorWithdrawAddressRequestAmino): _86.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _86.QueryDelegatorWithdrawAddressRequest): _86.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _86.QueryDelegatorWithdrawAddressRequestAminoMsg): _86.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _86.QueryDelegatorWithdrawAddressRequest): _86.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _86.QueryDelegatorWithdrawAddressRequestProtoMsg): _86.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _86.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDelegatorWithdrawAddressRequest): _86.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _86.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_86.QueryDelegatorWithdrawAddressResponse>): _86.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _86.QueryDelegatorWithdrawAddressResponseAmino): _86.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _86.QueryDelegatorWithdrawAddressResponse): _86.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _86.QueryDelegatorWithdrawAddressResponseAminoMsg): _86.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _86.QueryDelegatorWithdrawAddressResponse): _86.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _86.QueryDelegatorWithdrawAddressResponseProtoMsg): _86.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _86.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDelegatorWithdrawAddressResponse): _86.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _86.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_86.QueryCommunityPoolRequest>): _86.QueryCommunityPoolRequest;
                fromAmino(_: _86.QueryCommunityPoolRequestAmino): _86.QueryCommunityPoolRequest;
                toAmino(_: _86.QueryCommunityPoolRequest): _86.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _86.QueryCommunityPoolRequestAminoMsg): _86.QueryCommunityPoolRequest;
                toAminoMsg(message: _86.QueryCommunityPoolRequest): _86.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _86.QueryCommunityPoolRequestProtoMsg): _86.QueryCommunityPoolRequest;
                toProto(message: _86.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _86.QueryCommunityPoolRequest): _86.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _86.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_86.QueryCommunityPoolResponse>): _86.QueryCommunityPoolResponse;
                fromAmino(object: _86.QueryCommunityPoolResponseAmino): _86.QueryCommunityPoolResponse;
                toAmino(message: _86.QueryCommunityPoolResponse): _86.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _86.QueryCommunityPoolResponseAminoMsg): _86.QueryCommunityPoolResponse;
                toAminoMsg(message: _86.QueryCommunityPoolResponse): _86.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _86.QueryCommunityPoolResponseProtoMsg): _86.QueryCommunityPoolResponse;
                toProto(message: _86.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _86.QueryCommunityPoolResponse): _86.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _85.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_85.DelegatorWithdrawInfo>): _85.DelegatorWithdrawInfo;
                fromAmino(object: _85.DelegatorWithdrawInfoAmino): _85.DelegatorWithdrawInfo;
                toAmino(message: _85.DelegatorWithdrawInfo): _85.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _85.DelegatorWithdrawInfoAminoMsg): _85.DelegatorWithdrawInfo;
                toAminoMsg(message: _85.DelegatorWithdrawInfo): _85.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _85.DelegatorWithdrawInfoProtoMsg): _85.DelegatorWithdrawInfo;
                toProto(message: _85.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _85.DelegatorWithdrawInfo): _85.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _85.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_85.ValidatorOutstandingRewardsRecord>): _85.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _85.ValidatorOutstandingRewardsRecordAmino): _85.ValidatorOutstandingRewardsRecord;
                toAmino(message: _85.ValidatorOutstandingRewardsRecord): _85.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _85.ValidatorOutstandingRewardsRecordAminoMsg): _85.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _85.ValidatorOutstandingRewardsRecord): _85.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _85.ValidatorOutstandingRewardsRecordProtoMsg): _85.ValidatorOutstandingRewardsRecord;
                toProto(message: _85.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _85.ValidatorOutstandingRewardsRecord): _85.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _85.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_85.ValidatorAccumulatedCommissionRecord>): _85.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _85.ValidatorAccumulatedCommissionRecordAmino): _85.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _85.ValidatorAccumulatedCommissionRecord): _85.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _85.ValidatorAccumulatedCommissionRecordAminoMsg): _85.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _85.ValidatorAccumulatedCommissionRecord): _85.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _85.ValidatorAccumulatedCommissionRecordProtoMsg): _85.ValidatorAccumulatedCommissionRecord;
                toProto(message: _85.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _85.ValidatorAccumulatedCommissionRecord): _85.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _85.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_85.ValidatorHistoricalRewardsRecord>): _85.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _85.ValidatorHistoricalRewardsRecordAmino): _85.ValidatorHistoricalRewardsRecord;
                toAmino(message: _85.ValidatorHistoricalRewardsRecord): _85.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _85.ValidatorHistoricalRewardsRecordAminoMsg): _85.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _85.ValidatorHistoricalRewardsRecord): _85.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _85.ValidatorHistoricalRewardsRecordProtoMsg): _85.ValidatorHistoricalRewardsRecord;
                toProto(message: _85.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _85.ValidatorHistoricalRewardsRecord): _85.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _85.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_85.ValidatorCurrentRewardsRecord>): _85.ValidatorCurrentRewardsRecord;
                fromAmino(object: _85.ValidatorCurrentRewardsRecordAmino): _85.ValidatorCurrentRewardsRecord;
                toAmino(message: _85.ValidatorCurrentRewardsRecord): _85.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _85.ValidatorCurrentRewardsRecordAminoMsg): _85.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _85.ValidatorCurrentRewardsRecord): _85.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _85.ValidatorCurrentRewardsRecordProtoMsg): _85.ValidatorCurrentRewardsRecord;
                toProto(message: _85.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _85.ValidatorCurrentRewardsRecord): _85.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _85.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_85.DelegatorStartingInfoRecord>): _85.DelegatorStartingInfoRecord;
                fromAmino(object: _85.DelegatorStartingInfoRecordAmino): _85.DelegatorStartingInfoRecord;
                toAmino(message: _85.DelegatorStartingInfoRecord): _85.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _85.DelegatorStartingInfoRecordAminoMsg): _85.DelegatorStartingInfoRecord;
                toAminoMsg(message: _85.DelegatorStartingInfoRecord): _85.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _85.DelegatorStartingInfoRecordProtoMsg): _85.DelegatorStartingInfoRecord;
                toProto(message: _85.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _85.DelegatorStartingInfoRecord): _85.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _85.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_85.ValidatorSlashEventRecord>): _85.ValidatorSlashEventRecord;
                fromAmino(object: _85.ValidatorSlashEventRecordAmino): _85.ValidatorSlashEventRecord;
                toAmino(message: _85.ValidatorSlashEventRecord): _85.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _85.ValidatorSlashEventRecordAminoMsg): _85.ValidatorSlashEventRecord;
                toAminoMsg(message: _85.ValidatorSlashEventRecord): _85.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _85.ValidatorSlashEventRecordProtoMsg): _85.ValidatorSlashEventRecord;
                toProto(message: _85.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _85.ValidatorSlashEventRecord): _85.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _84.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.Params;
                fromPartial(object: Partial<_84.Params>): _84.Params;
                fromAmino(object: _84.ParamsAmino): _84.Params;
                toAmino(message: _84.Params): _84.ParamsAmino;
                fromAminoMsg(object: _84.ParamsAminoMsg): _84.Params;
                toAminoMsg(message: _84.Params): _84.ParamsAminoMsg;
                fromProtoMsg(message: _84.ParamsProtoMsg): _84.Params;
                toProto(message: _84.Params): Uint8Array;
                toProtoMsg(message: _84.Params): _84.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _84.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_84.ValidatorHistoricalRewards>): _84.ValidatorHistoricalRewards;
                fromAmino(object: _84.ValidatorHistoricalRewardsAmino): _84.ValidatorHistoricalRewards;
                toAmino(message: _84.ValidatorHistoricalRewards): _84.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _84.ValidatorHistoricalRewardsAminoMsg): _84.ValidatorHistoricalRewards;
                toAminoMsg(message: _84.ValidatorHistoricalRewards): _84.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _84.ValidatorHistoricalRewardsProtoMsg): _84.ValidatorHistoricalRewards;
                toProto(message: _84.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _84.ValidatorHistoricalRewards): _84.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _84.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.ValidatorCurrentRewards;
                fromPartial(object: Partial<_84.ValidatorCurrentRewards>): _84.ValidatorCurrentRewards;
                fromAmino(object: _84.ValidatorCurrentRewardsAmino): _84.ValidatorCurrentRewards;
                toAmino(message: _84.ValidatorCurrentRewards): _84.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _84.ValidatorCurrentRewardsAminoMsg): _84.ValidatorCurrentRewards;
                toAminoMsg(message: _84.ValidatorCurrentRewards): _84.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _84.ValidatorCurrentRewardsProtoMsg): _84.ValidatorCurrentRewards;
                toProto(message: _84.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _84.ValidatorCurrentRewards): _84.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _84.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_84.ValidatorAccumulatedCommission>): _84.ValidatorAccumulatedCommission;
                fromAmino(object: _84.ValidatorAccumulatedCommissionAmino): _84.ValidatorAccumulatedCommission;
                toAmino(message: _84.ValidatorAccumulatedCommission): _84.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _84.ValidatorAccumulatedCommissionAminoMsg): _84.ValidatorAccumulatedCommission;
                toAminoMsg(message: _84.ValidatorAccumulatedCommission): _84.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _84.ValidatorAccumulatedCommissionProtoMsg): _84.ValidatorAccumulatedCommission;
                toProto(message: _84.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _84.ValidatorAccumulatedCommission): _84.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _84.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_84.ValidatorOutstandingRewards>): _84.ValidatorOutstandingRewards;
                fromAmino(object: _84.ValidatorOutstandingRewardsAmino): _84.ValidatorOutstandingRewards;
                toAmino(message: _84.ValidatorOutstandingRewards): _84.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _84.ValidatorOutstandingRewardsAminoMsg): _84.ValidatorOutstandingRewards;
                toAminoMsg(message: _84.ValidatorOutstandingRewards): _84.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _84.ValidatorOutstandingRewardsProtoMsg): _84.ValidatorOutstandingRewards;
                toProto(message: _84.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _84.ValidatorOutstandingRewards): _84.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _84.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.ValidatorSlashEvent;
                fromPartial(object: Partial<_84.ValidatorSlashEvent>): _84.ValidatorSlashEvent;
                fromAmino(object: _84.ValidatorSlashEventAmino): _84.ValidatorSlashEvent;
                toAmino(message: _84.ValidatorSlashEvent): _84.ValidatorSlashEventAmino;
                fromAminoMsg(object: _84.ValidatorSlashEventAminoMsg): _84.ValidatorSlashEvent;
                toAminoMsg(message: _84.ValidatorSlashEvent): _84.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _84.ValidatorSlashEventProtoMsg): _84.ValidatorSlashEvent;
                toProto(message: _84.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _84.ValidatorSlashEvent): _84.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _84.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.ValidatorSlashEvents;
                fromPartial(object: Partial<_84.ValidatorSlashEvents>): _84.ValidatorSlashEvents;
                fromAmino(object: _84.ValidatorSlashEventsAmino): _84.ValidatorSlashEvents;
                toAmino(message: _84.ValidatorSlashEvents): _84.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _84.ValidatorSlashEventsAminoMsg): _84.ValidatorSlashEvents;
                toAminoMsg(message: _84.ValidatorSlashEvents): _84.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _84.ValidatorSlashEventsProtoMsg): _84.ValidatorSlashEvents;
                toProto(message: _84.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _84.ValidatorSlashEvents): _84.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _84.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.FeePool;
                fromPartial(object: Partial<_84.FeePool>): _84.FeePool;
                fromAmino(object: _84.FeePoolAmino): _84.FeePool;
                toAmino(message: _84.FeePool): _84.FeePoolAmino;
                fromAminoMsg(object: _84.FeePoolAminoMsg): _84.FeePool;
                toAminoMsg(message: _84.FeePool): _84.FeePoolAminoMsg;
                fromProtoMsg(message: _84.FeePoolProtoMsg): _84.FeePool;
                toProto(message: _84.FeePool): Uint8Array;
                toProtoMsg(message: _84.FeePool): _84.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _84.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_84.CommunityPoolSpendProposal>): _84.CommunityPoolSpendProposal;
                fromAmino(object: _84.CommunityPoolSpendProposalAmino): _84.CommunityPoolSpendProposal;
                toAmino(message: _84.CommunityPoolSpendProposal): _84.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _84.CommunityPoolSpendProposalAminoMsg): _84.CommunityPoolSpendProposal;
                toAminoMsg(message: _84.CommunityPoolSpendProposal): _84.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _84.CommunityPoolSpendProposalProtoMsg): _84.CommunityPoolSpendProposal;
                toProto(message: _84.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _84.CommunityPoolSpendProposal): _84.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _84.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.DelegatorStartingInfo;
                fromPartial(object: Partial<_84.DelegatorStartingInfo>): _84.DelegatorStartingInfo;
                fromAmino(object: _84.DelegatorStartingInfoAmino): _84.DelegatorStartingInfo;
                toAmino(message: _84.DelegatorStartingInfo): _84.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _84.DelegatorStartingInfoAminoMsg): _84.DelegatorStartingInfo;
                toAminoMsg(message: _84.DelegatorStartingInfo): _84.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _84.DelegatorStartingInfoProtoMsg): _84.DelegatorStartingInfo;
                toProto(message: _84.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _84.DelegatorStartingInfo): _84.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _84.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.DelegationDelegatorReward;
                fromPartial(object: Partial<_84.DelegationDelegatorReward>): _84.DelegationDelegatorReward;
                fromAmino(object: _84.DelegationDelegatorRewardAmino): _84.DelegationDelegatorReward;
                toAmino(message: _84.DelegationDelegatorReward): _84.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _84.DelegationDelegatorRewardAminoMsg): _84.DelegationDelegatorReward;
                toAminoMsg(message: _84.DelegationDelegatorReward): _84.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _84.DelegationDelegatorRewardProtoMsg): _84.DelegationDelegatorReward;
                toProto(message: _84.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _84.DelegationDelegatorReward): _84.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _84.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_84.CommunityPoolSpendProposalWithDeposit>): _84.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _84.CommunityPoolSpendProposalWithDepositAmino): _84.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _84.CommunityPoolSpendProposalWithDeposit): _84.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _84.CommunityPoolSpendProposalWithDepositAminoMsg): _84.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _84.CommunityPoolSpendProposalWithDeposit): _84.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _84.CommunityPoolSpendProposalWithDepositProtoMsg): _84.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _84.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _84.CommunityPoolSpendProposalWithDeposit): _84.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _246.MsgClientImpl;
            QueryClientImpl: typeof _233.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _90.QueryEvidenceRequest): Promise<_90.QueryEvidenceResponse>;
                allEvidence(request?: _90.QueryAllEvidenceRequest): Promise<_90.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _219.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _91.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _91.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _91.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _91.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _91.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _91.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _91.MsgSubmitEvidence) => _91.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _91.MsgSubmitEvidenceAmino) => _91.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _91.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgSubmitEvidence;
                fromPartial(object: Partial<_91.MsgSubmitEvidence>): _91.MsgSubmitEvidence;
                fromAmino(object: _91.MsgSubmitEvidenceAmino): _91.MsgSubmitEvidence;
                toAmino(message: _91.MsgSubmitEvidence): _91.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _91.MsgSubmitEvidenceAminoMsg): _91.MsgSubmitEvidence;
                toAminoMsg(message: _91.MsgSubmitEvidence): _91.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _91.MsgSubmitEvidenceProtoMsg): _91.MsgSubmitEvidence;
                toProto(message: _91.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _91.MsgSubmitEvidence): _91.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _91.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_91.MsgSubmitEvidenceResponse>): _91.MsgSubmitEvidenceResponse;
                fromAmino(object: _91.MsgSubmitEvidenceResponseAmino): _91.MsgSubmitEvidenceResponse;
                toAmino(message: _91.MsgSubmitEvidenceResponse): _91.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _91.MsgSubmitEvidenceResponseAminoMsg): _91.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _91.MsgSubmitEvidenceResponse): _91.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _91.MsgSubmitEvidenceResponseProtoMsg): _91.MsgSubmitEvidenceResponse;
                toProto(message: _91.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _91.MsgSubmitEvidenceResponse): _91.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _90.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryEvidenceRequest;
                fromPartial(object: Partial<_90.QueryEvidenceRequest>): _90.QueryEvidenceRequest;
                fromAmino(object: _90.QueryEvidenceRequestAmino): _90.QueryEvidenceRequest;
                toAmino(message: _90.QueryEvidenceRequest): _90.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _90.QueryEvidenceRequestAminoMsg): _90.QueryEvidenceRequest;
                toAminoMsg(message: _90.QueryEvidenceRequest): _90.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _90.QueryEvidenceRequestProtoMsg): _90.QueryEvidenceRequest;
                toProto(message: _90.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _90.QueryEvidenceRequest): _90.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _90.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryEvidenceResponse;
                fromPartial(object: Partial<_90.QueryEvidenceResponse>): _90.QueryEvidenceResponse;
                fromAmino(object: _90.QueryEvidenceResponseAmino): _90.QueryEvidenceResponse;
                toAmino(message: _90.QueryEvidenceResponse): _90.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _90.QueryEvidenceResponseAminoMsg): _90.QueryEvidenceResponse;
                toAminoMsg(message: _90.QueryEvidenceResponse): _90.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _90.QueryEvidenceResponseProtoMsg): _90.QueryEvidenceResponse;
                toProto(message: _90.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _90.QueryEvidenceResponse): _90.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _90.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_90.QueryAllEvidenceRequest>): _90.QueryAllEvidenceRequest;
                fromAmino(object: _90.QueryAllEvidenceRequestAmino): _90.QueryAllEvidenceRequest;
                toAmino(message: _90.QueryAllEvidenceRequest): _90.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _90.QueryAllEvidenceRequestAminoMsg): _90.QueryAllEvidenceRequest;
                toAminoMsg(message: _90.QueryAllEvidenceRequest): _90.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _90.QueryAllEvidenceRequestProtoMsg): _90.QueryAllEvidenceRequest;
                toProto(message: _90.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _90.QueryAllEvidenceRequest): _90.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _90.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_90.QueryAllEvidenceResponse>): _90.QueryAllEvidenceResponse;
                fromAmino(object: _90.QueryAllEvidenceResponseAmino): _90.QueryAllEvidenceResponse;
                toAmino(message: _90.QueryAllEvidenceResponse): _90.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _90.QueryAllEvidenceResponseAminoMsg): _90.QueryAllEvidenceResponse;
                toAminoMsg(message: _90.QueryAllEvidenceResponse): _90.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _90.QueryAllEvidenceResponseProtoMsg): _90.QueryAllEvidenceResponse;
                toProto(message: _90.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _90.QueryAllEvidenceResponse): _90.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _88.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.Equivocation;
                fromPartial(object: Partial<_88.Equivocation>): _88.Equivocation;
                fromAmino(object: _88.EquivocationAmino): _88.Equivocation;
                toAmino(message: _88.Equivocation): _88.EquivocationAmino;
                fromAminoMsg(object: _88.EquivocationAminoMsg): _88.Equivocation;
                toAminoMsg(message: _88.Equivocation): _88.EquivocationAminoMsg;
                fromProtoMsg(message: _88.EquivocationProtoMsg): _88.Equivocation;
                toProto(message: _88.Equivocation): Uint8Array;
                toProtoMsg(message: _88.Equivocation): _88.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _247.MsgClientImpl;
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _94.QueryAllowanceRequest): Promise<_94.QueryAllowanceResponse>;
                allowances(request: _94.QueryAllowancesRequest): Promise<_94.QueryAllowancesResponse>;
                allowancesByGranter(request: _94.QueryAllowancesByGranterRequest): Promise<_94.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _220.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _95.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _95.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _95.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _95.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _95.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _95.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _95.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _95.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _95.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _95.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _95.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _95.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _95.MsgGrantAllowance) => _95.MsgGrantAllowanceAmino;
                    fromAmino: (object: _95.MsgGrantAllowanceAmino) => _95.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _95.MsgRevokeAllowance) => _95.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _95.MsgRevokeAllowanceAmino) => _95.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _95.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.MsgGrantAllowance;
                fromPartial(object: Partial<_95.MsgGrantAllowance>): _95.MsgGrantAllowance;
                fromAmino(object: _95.MsgGrantAllowanceAmino): _95.MsgGrantAllowance;
                toAmino(message: _95.MsgGrantAllowance): _95.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _95.MsgGrantAllowanceAminoMsg): _95.MsgGrantAllowance;
                toAminoMsg(message: _95.MsgGrantAllowance): _95.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _95.MsgGrantAllowanceProtoMsg): _95.MsgGrantAllowance;
                toProto(message: _95.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _95.MsgGrantAllowance): _95.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _95.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _95.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_95.MsgGrantAllowanceResponse>): _95.MsgGrantAllowanceResponse;
                fromAmino(_: _95.MsgGrantAllowanceResponseAmino): _95.MsgGrantAllowanceResponse;
                toAmino(_: _95.MsgGrantAllowanceResponse): _95.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _95.MsgGrantAllowanceResponseAminoMsg): _95.MsgGrantAllowanceResponse;
                toAminoMsg(message: _95.MsgGrantAllowanceResponse): _95.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _95.MsgGrantAllowanceResponseProtoMsg): _95.MsgGrantAllowanceResponse;
                toProto(message: _95.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _95.MsgGrantAllowanceResponse): _95.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _95.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.MsgRevokeAllowance;
                fromPartial(object: Partial<_95.MsgRevokeAllowance>): _95.MsgRevokeAllowance;
                fromAmino(object: _95.MsgRevokeAllowanceAmino): _95.MsgRevokeAllowance;
                toAmino(message: _95.MsgRevokeAllowance): _95.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _95.MsgRevokeAllowanceAminoMsg): _95.MsgRevokeAllowance;
                toAminoMsg(message: _95.MsgRevokeAllowance): _95.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _95.MsgRevokeAllowanceProtoMsg): _95.MsgRevokeAllowance;
                toProto(message: _95.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _95.MsgRevokeAllowance): _95.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _95.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _95.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_95.MsgRevokeAllowanceResponse>): _95.MsgRevokeAllowanceResponse;
                fromAmino(_: _95.MsgRevokeAllowanceResponseAmino): _95.MsgRevokeAllowanceResponse;
                toAmino(_: _95.MsgRevokeAllowanceResponse): _95.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _95.MsgRevokeAllowanceResponseAminoMsg): _95.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _95.MsgRevokeAllowanceResponse): _95.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _95.MsgRevokeAllowanceResponseProtoMsg): _95.MsgRevokeAllowanceResponse;
                toProto(message: _95.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _95.MsgRevokeAllowanceResponse): _95.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _92.BasicAllowance | _92.PeriodicAllowance | _92.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _94.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryAllowanceRequest;
                fromPartial(object: Partial<_94.QueryAllowanceRequest>): _94.QueryAllowanceRequest;
                fromAmino(object: _94.QueryAllowanceRequestAmino): _94.QueryAllowanceRequest;
                toAmino(message: _94.QueryAllowanceRequest): _94.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _94.QueryAllowanceRequestAminoMsg): _94.QueryAllowanceRequest;
                toAminoMsg(message: _94.QueryAllowanceRequest): _94.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _94.QueryAllowanceRequestProtoMsg): _94.QueryAllowanceRequest;
                toProto(message: _94.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _94.QueryAllowanceRequest): _94.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _94.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryAllowanceResponse;
                fromPartial(object: Partial<_94.QueryAllowanceResponse>): _94.QueryAllowanceResponse;
                fromAmino(object: _94.QueryAllowanceResponseAmino): _94.QueryAllowanceResponse;
                toAmino(message: _94.QueryAllowanceResponse): _94.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _94.QueryAllowanceResponseAminoMsg): _94.QueryAllowanceResponse;
                toAminoMsg(message: _94.QueryAllowanceResponse): _94.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _94.QueryAllowanceResponseProtoMsg): _94.QueryAllowanceResponse;
                toProto(message: _94.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _94.QueryAllowanceResponse): _94.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _94.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryAllowancesRequest;
                fromPartial(object: Partial<_94.QueryAllowancesRequest>): _94.QueryAllowancesRequest;
                fromAmino(object: _94.QueryAllowancesRequestAmino): _94.QueryAllowancesRequest;
                toAmino(message: _94.QueryAllowancesRequest): _94.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _94.QueryAllowancesRequestAminoMsg): _94.QueryAllowancesRequest;
                toAminoMsg(message: _94.QueryAllowancesRequest): _94.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _94.QueryAllowancesRequestProtoMsg): _94.QueryAllowancesRequest;
                toProto(message: _94.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _94.QueryAllowancesRequest): _94.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _94.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryAllowancesResponse;
                fromPartial(object: Partial<_94.QueryAllowancesResponse>): _94.QueryAllowancesResponse;
                fromAmino(object: _94.QueryAllowancesResponseAmino): _94.QueryAllowancesResponse;
                toAmino(message: _94.QueryAllowancesResponse): _94.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _94.QueryAllowancesResponseAminoMsg): _94.QueryAllowancesResponse;
                toAminoMsg(message: _94.QueryAllowancesResponse): _94.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _94.QueryAllowancesResponseProtoMsg): _94.QueryAllowancesResponse;
                toProto(message: _94.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _94.QueryAllowancesResponse): _94.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _94.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_94.QueryAllowancesByGranterRequest>): _94.QueryAllowancesByGranterRequest;
                fromAmino(object: _94.QueryAllowancesByGranterRequestAmino): _94.QueryAllowancesByGranterRequest;
                toAmino(message: _94.QueryAllowancesByGranterRequest): _94.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _94.QueryAllowancesByGranterRequestAminoMsg): _94.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _94.QueryAllowancesByGranterRequest): _94.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _94.QueryAllowancesByGranterRequestProtoMsg): _94.QueryAllowancesByGranterRequest;
                toProto(message: _94.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _94.QueryAllowancesByGranterRequest): _94.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _94.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_94.QueryAllowancesByGranterResponse>): _94.QueryAllowancesByGranterResponse;
                fromAmino(object: _94.QueryAllowancesByGranterResponseAmino): _94.QueryAllowancesByGranterResponse;
                toAmino(message: _94.QueryAllowancesByGranterResponse): _94.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _94.QueryAllowancesByGranterResponseAminoMsg): _94.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _94.QueryAllowancesByGranterResponse): _94.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _94.QueryAllowancesByGranterResponseProtoMsg): _94.QueryAllowancesByGranterResponse;
                toProto(message: _94.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _94.QueryAllowancesByGranterResponse): _94.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _92.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.BasicAllowance;
                fromPartial(object: Partial<_92.BasicAllowance>): _92.BasicAllowance;
                fromAmino(object: _92.BasicAllowanceAmino): _92.BasicAllowance;
                toAmino(message: _92.BasicAllowance): _92.BasicAllowanceAmino;
                fromAminoMsg(object: _92.BasicAllowanceAminoMsg): _92.BasicAllowance;
                toAminoMsg(message: _92.BasicAllowance): _92.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _92.BasicAllowanceProtoMsg): _92.BasicAllowance;
                toProto(message: _92.BasicAllowance): Uint8Array;
                toProtoMsg(message: _92.BasicAllowance): _92.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _92.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.PeriodicAllowance;
                fromPartial(object: Partial<_92.PeriodicAllowance>): _92.PeriodicAllowance;
                fromAmino(object: _92.PeriodicAllowanceAmino): _92.PeriodicAllowance;
                toAmino(message: _92.PeriodicAllowance): _92.PeriodicAllowanceAmino;
                fromAminoMsg(object: _92.PeriodicAllowanceAminoMsg): _92.PeriodicAllowance;
                toAminoMsg(message: _92.PeriodicAllowance): _92.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _92.PeriodicAllowanceProtoMsg): _92.PeriodicAllowance;
                toProto(message: _92.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _92.PeriodicAllowance): _92.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _92.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.AllowedMsgAllowance;
                fromPartial(object: Partial<_92.AllowedMsgAllowance>): _92.AllowedMsgAllowance;
                fromAmino(object: _92.AllowedMsgAllowanceAmino): _92.AllowedMsgAllowance;
                toAmino(message: _92.AllowedMsgAllowance): _92.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _92.AllowedMsgAllowanceAminoMsg): _92.AllowedMsgAllowance;
                toAminoMsg(message: _92.AllowedMsgAllowance): _92.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _92.AllowedMsgAllowanceProtoMsg): _92.AllowedMsgAllowance;
                toProto(message: _92.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _92.AllowedMsgAllowance): _92.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _92.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.Grant;
                fromPartial(object: Partial<_92.Grant>): _92.Grant;
                fromAmino(object: _92.GrantAmino): _92.Grant;
                toAmino(message: _92.Grant): _92.GrantAmino;
                fromAminoMsg(object: _92.GrantAminoMsg): _92.Grant;
                toAminoMsg(message: _92.Grant): _92.GrantAminoMsg;
                fromProtoMsg(message: _92.GrantProtoMsg): _92.Grant;
                toProto(message: _92.Grant): Uint8Array;
                toProtoMsg(message: _92.Grant): _92.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _248.MsgClientImpl;
            QueryClientImpl: typeof _235.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _99.QueryProposalRequest): Promise<_99.QueryProposalResponse>;
                proposals(request: _99.QueryProposalsRequest): Promise<_99.QueryProposalsResponse>;
                vote(request: _99.QueryVoteRequest): Promise<_99.QueryVoteResponse>;
                votes(request: _99.QueryVotesRequest): Promise<_99.QueryVotesResponse>;
                params(request: _99.QueryParamsRequest): Promise<_99.QueryParamsResponse>;
                deposit(request: _99.QueryDepositRequest): Promise<_99.QueryDepositResponse>;
                deposits(request: _99.QueryDepositsRequest): Promise<_99.QueryDepositsResponse>;
                tallyResult(request: _99.QueryTallyResultRequest): Promise<_99.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _221.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _100.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _100.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _100.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _100.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _100.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _100.MsgSubmitProposal;
                    };
                    vote(value: _100.MsgVote): {
                        typeUrl: string;
                        value: _100.MsgVote;
                    };
                    voteWeighted(value: _100.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _100.MsgVoteWeighted;
                    };
                    deposit(value: _100.MsgDeposit): {
                        typeUrl: string;
                        value: _100.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _100.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _100.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _100.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _100.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _100.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _100.MsgSubmitProposal;
                    };
                    vote(value: _100.MsgVote): {
                        typeUrl: string;
                        value: _100.MsgVote;
                    };
                    voteWeighted(value: _100.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _100.MsgVoteWeighted;
                    };
                    deposit(value: _100.MsgDeposit): {
                        typeUrl: string;
                        value: _100.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _100.MsgSubmitProposal) => _100.MsgSubmitProposalAmino;
                    fromAmino: (object: _100.MsgSubmitProposalAmino) => _100.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _100.MsgVote) => _100.MsgVoteAmino;
                    fromAmino: (object: _100.MsgVoteAmino) => _100.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _100.MsgVoteWeighted) => _100.MsgVoteWeightedAmino;
                    fromAmino: (object: _100.MsgVoteWeightedAmino) => _100.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _100.MsgDeposit) => _100.MsgDepositAmino;
                    fromAmino: (object: _100.MsgDepositAmino) => _100.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _100.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgSubmitProposal;
                fromPartial(object: Partial<_100.MsgSubmitProposal>): _100.MsgSubmitProposal;
                fromAmino(object: _100.MsgSubmitProposalAmino): _100.MsgSubmitProposal;
                toAmino(message: _100.MsgSubmitProposal): _100.MsgSubmitProposalAmino;
                fromAminoMsg(object: _100.MsgSubmitProposalAminoMsg): _100.MsgSubmitProposal;
                toAminoMsg(message: _100.MsgSubmitProposal): _100.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _100.MsgSubmitProposalProtoMsg): _100.MsgSubmitProposal;
                toProto(message: _100.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _100.MsgSubmitProposal): _100.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _100.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_100.MsgSubmitProposalResponse>): _100.MsgSubmitProposalResponse;
                fromAmino(object: _100.MsgSubmitProposalResponseAmino): _100.MsgSubmitProposalResponse;
                toAmino(message: _100.MsgSubmitProposalResponse): _100.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _100.MsgSubmitProposalResponseAminoMsg): _100.MsgSubmitProposalResponse;
                toAminoMsg(message: _100.MsgSubmitProposalResponse): _100.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _100.MsgSubmitProposalResponseProtoMsg): _100.MsgSubmitProposalResponse;
                toProto(message: _100.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _100.MsgSubmitProposalResponse): _100.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _100.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgVote;
                fromPartial(object: Partial<_100.MsgVote>): _100.MsgVote;
                fromAmino(object: _100.MsgVoteAmino): _100.MsgVote;
                toAmino(message: _100.MsgVote): _100.MsgVoteAmino;
                fromAminoMsg(object: _100.MsgVoteAminoMsg): _100.MsgVote;
                toAminoMsg(message: _100.MsgVote): _100.MsgVoteAminoMsg;
                fromProtoMsg(message: _100.MsgVoteProtoMsg): _100.MsgVote;
                toProto(message: _100.MsgVote): Uint8Array;
                toProtoMsg(message: _100.MsgVote): _100.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _100.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _100.MsgVoteResponse;
                fromPartial(_: Partial<_100.MsgVoteResponse>): _100.MsgVoteResponse;
                fromAmino(_: _100.MsgVoteResponseAmino): _100.MsgVoteResponse;
                toAmino(_: _100.MsgVoteResponse): _100.MsgVoteResponseAmino;
                fromAminoMsg(object: _100.MsgVoteResponseAminoMsg): _100.MsgVoteResponse;
                toAminoMsg(message: _100.MsgVoteResponse): _100.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _100.MsgVoteResponseProtoMsg): _100.MsgVoteResponse;
                toProto(message: _100.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _100.MsgVoteResponse): _100.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _100.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgVoteWeighted;
                fromPartial(object: Partial<_100.MsgVoteWeighted>): _100.MsgVoteWeighted;
                fromAmino(object: _100.MsgVoteWeightedAmino): _100.MsgVoteWeighted;
                toAmino(message: _100.MsgVoteWeighted): _100.MsgVoteWeightedAmino;
                fromAminoMsg(object: _100.MsgVoteWeightedAminoMsg): _100.MsgVoteWeighted;
                toAminoMsg(message: _100.MsgVoteWeighted): _100.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _100.MsgVoteWeightedProtoMsg): _100.MsgVoteWeighted;
                toProto(message: _100.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _100.MsgVoteWeighted): _100.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _100.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _100.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_100.MsgVoteWeightedResponse>): _100.MsgVoteWeightedResponse;
                fromAmino(_: _100.MsgVoteWeightedResponseAmino): _100.MsgVoteWeightedResponse;
                toAmino(_: _100.MsgVoteWeightedResponse): _100.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _100.MsgVoteWeightedResponseAminoMsg): _100.MsgVoteWeightedResponse;
                toAminoMsg(message: _100.MsgVoteWeightedResponse): _100.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _100.MsgVoteWeightedResponseProtoMsg): _100.MsgVoteWeightedResponse;
                toProto(message: _100.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _100.MsgVoteWeightedResponse): _100.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _100.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgDeposit;
                fromPartial(object: Partial<_100.MsgDeposit>): _100.MsgDeposit;
                fromAmino(object: _100.MsgDepositAmino): _100.MsgDeposit;
                toAmino(message: _100.MsgDeposit): _100.MsgDepositAmino;
                fromAminoMsg(object: _100.MsgDepositAminoMsg): _100.MsgDeposit;
                toAminoMsg(message: _100.MsgDeposit): _100.MsgDepositAminoMsg;
                fromProtoMsg(message: _100.MsgDepositProtoMsg): _100.MsgDeposit;
                toProto(message: _100.MsgDeposit): Uint8Array;
                toProtoMsg(message: _100.MsgDeposit): _100.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _100.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _100.MsgDepositResponse;
                fromPartial(_: Partial<_100.MsgDepositResponse>): _100.MsgDepositResponse;
                fromAmino(_: _100.MsgDepositResponseAmino): _100.MsgDepositResponse;
                toAmino(_: _100.MsgDepositResponse): _100.MsgDepositResponseAmino;
                fromAminoMsg(object: _100.MsgDepositResponseAminoMsg): _100.MsgDepositResponse;
                toAminoMsg(message: _100.MsgDepositResponse): _100.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _100.MsgDepositResponseProtoMsg): _100.MsgDepositResponse;
                toProto(message: _100.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _100.MsgDepositResponse): _100.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _98.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _99.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryProposalRequest;
                fromPartial(object: Partial<_99.QueryProposalRequest>): _99.QueryProposalRequest;
                fromAmino(object: _99.QueryProposalRequestAmino): _99.QueryProposalRequest;
                toAmino(message: _99.QueryProposalRequest): _99.QueryProposalRequestAmino;
                fromAminoMsg(object: _99.QueryProposalRequestAminoMsg): _99.QueryProposalRequest;
                toAminoMsg(message: _99.QueryProposalRequest): _99.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _99.QueryProposalRequestProtoMsg): _99.QueryProposalRequest;
                toProto(message: _99.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _99.QueryProposalRequest): _99.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _99.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryProposalResponse;
                fromPartial(object: Partial<_99.QueryProposalResponse>): _99.QueryProposalResponse;
                fromAmino(object: _99.QueryProposalResponseAmino): _99.QueryProposalResponse;
                toAmino(message: _99.QueryProposalResponse): _99.QueryProposalResponseAmino;
                fromAminoMsg(object: _99.QueryProposalResponseAminoMsg): _99.QueryProposalResponse;
                toAminoMsg(message: _99.QueryProposalResponse): _99.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _99.QueryProposalResponseProtoMsg): _99.QueryProposalResponse;
                toProto(message: _99.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _99.QueryProposalResponse): _99.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _99.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryProposalsRequest;
                fromPartial(object: Partial<_99.QueryProposalsRequest>): _99.QueryProposalsRequest;
                fromAmino(object: _99.QueryProposalsRequestAmino): _99.QueryProposalsRequest;
                toAmino(message: _99.QueryProposalsRequest): _99.QueryProposalsRequestAmino;
                fromAminoMsg(object: _99.QueryProposalsRequestAminoMsg): _99.QueryProposalsRequest;
                toAminoMsg(message: _99.QueryProposalsRequest): _99.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _99.QueryProposalsRequestProtoMsg): _99.QueryProposalsRequest;
                toProto(message: _99.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _99.QueryProposalsRequest): _99.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _99.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryProposalsResponse;
                fromPartial(object: Partial<_99.QueryProposalsResponse>): _99.QueryProposalsResponse;
                fromAmino(object: _99.QueryProposalsResponseAmino): _99.QueryProposalsResponse;
                toAmino(message: _99.QueryProposalsResponse): _99.QueryProposalsResponseAmino;
                fromAminoMsg(object: _99.QueryProposalsResponseAminoMsg): _99.QueryProposalsResponse;
                toAminoMsg(message: _99.QueryProposalsResponse): _99.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _99.QueryProposalsResponseProtoMsg): _99.QueryProposalsResponse;
                toProto(message: _99.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _99.QueryProposalsResponse): _99.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _99.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryVoteRequest;
                fromPartial(object: Partial<_99.QueryVoteRequest>): _99.QueryVoteRequest;
                fromAmino(object: _99.QueryVoteRequestAmino): _99.QueryVoteRequest;
                toAmino(message: _99.QueryVoteRequest): _99.QueryVoteRequestAmino;
                fromAminoMsg(object: _99.QueryVoteRequestAminoMsg): _99.QueryVoteRequest;
                toAminoMsg(message: _99.QueryVoteRequest): _99.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _99.QueryVoteRequestProtoMsg): _99.QueryVoteRequest;
                toProto(message: _99.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _99.QueryVoteRequest): _99.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _99.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryVoteResponse;
                fromPartial(object: Partial<_99.QueryVoteResponse>): _99.QueryVoteResponse;
                fromAmino(object: _99.QueryVoteResponseAmino): _99.QueryVoteResponse;
                toAmino(message: _99.QueryVoteResponse): _99.QueryVoteResponseAmino;
                fromAminoMsg(object: _99.QueryVoteResponseAminoMsg): _99.QueryVoteResponse;
                toAminoMsg(message: _99.QueryVoteResponse): _99.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _99.QueryVoteResponseProtoMsg): _99.QueryVoteResponse;
                toProto(message: _99.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _99.QueryVoteResponse): _99.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _99.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryVotesRequest;
                fromPartial(object: Partial<_99.QueryVotesRequest>): _99.QueryVotesRequest;
                fromAmino(object: _99.QueryVotesRequestAmino): _99.QueryVotesRequest;
                toAmino(message: _99.QueryVotesRequest): _99.QueryVotesRequestAmino;
                fromAminoMsg(object: _99.QueryVotesRequestAminoMsg): _99.QueryVotesRequest;
                toAminoMsg(message: _99.QueryVotesRequest): _99.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _99.QueryVotesRequestProtoMsg): _99.QueryVotesRequest;
                toProto(message: _99.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _99.QueryVotesRequest): _99.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _99.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryVotesResponse;
                fromPartial(object: Partial<_99.QueryVotesResponse>): _99.QueryVotesResponse;
                fromAmino(object: _99.QueryVotesResponseAmino): _99.QueryVotesResponse;
                toAmino(message: _99.QueryVotesResponse): _99.QueryVotesResponseAmino;
                fromAminoMsg(object: _99.QueryVotesResponseAminoMsg): _99.QueryVotesResponse;
                toAminoMsg(message: _99.QueryVotesResponse): _99.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _99.QueryVotesResponseProtoMsg): _99.QueryVotesResponse;
                toProto(message: _99.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _99.QueryVotesResponse): _99.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _99.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryParamsRequest;
                fromPartial(object: Partial<_99.QueryParamsRequest>): _99.QueryParamsRequest;
                fromAmino(object: _99.QueryParamsRequestAmino): _99.QueryParamsRequest;
                toAmino(message: _99.QueryParamsRequest): _99.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _99.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryDepositRequest;
                fromPartial(object: Partial<_99.QueryDepositRequest>): _99.QueryDepositRequest;
                fromAmino(object: _99.QueryDepositRequestAmino): _99.QueryDepositRequest;
                toAmino(message: _99.QueryDepositRequest): _99.QueryDepositRequestAmino;
                fromAminoMsg(object: _99.QueryDepositRequestAminoMsg): _99.QueryDepositRequest;
                toAminoMsg(message: _99.QueryDepositRequest): _99.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _99.QueryDepositRequestProtoMsg): _99.QueryDepositRequest;
                toProto(message: _99.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _99.QueryDepositRequest): _99.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _99.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryDepositResponse;
                fromPartial(object: Partial<_99.QueryDepositResponse>): _99.QueryDepositResponse;
                fromAmino(object: _99.QueryDepositResponseAmino): _99.QueryDepositResponse;
                toAmino(message: _99.QueryDepositResponse): _99.QueryDepositResponseAmino;
                fromAminoMsg(object: _99.QueryDepositResponseAminoMsg): _99.QueryDepositResponse;
                toAminoMsg(message: _99.QueryDepositResponse): _99.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _99.QueryDepositResponseProtoMsg): _99.QueryDepositResponse;
                toProto(message: _99.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _99.QueryDepositResponse): _99.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _99.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryDepositsRequest;
                fromPartial(object: Partial<_99.QueryDepositsRequest>): _99.QueryDepositsRequest;
                fromAmino(object: _99.QueryDepositsRequestAmino): _99.QueryDepositsRequest;
                toAmino(message: _99.QueryDepositsRequest): _99.QueryDepositsRequestAmino;
                fromAminoMsg(object: _99.QueryDepositsRequestAminoMsg): _99.QueryDepositsRequest;
                toAminoMsg(message: _99.QueryDepositsRequest): _99.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _99.QueryDepositsRequestProtoMsg): _99.QueryDepositsRequest;
                toProto(message: _99.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _99.QueryDepositsRequest): _99.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _99.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryDepositsResponse;
                fromPartial(object: Partial<_99.QueryDepositsResponse>): _99.QueryDepositsResponse;
                fromAmino(object: _99.QueryDepositsResponseAmino): _99.QueryDepositsResponse;
                toAmino(message: _99.QueryDepositsResponse): _99.QueryDepositsResponseAmino;
                fromAminoMsg(object: _99.QueryDepositsResponseAminoMsg): _99.QueryDepositsResponse;
                toAminoMsg(message: _99.QueryDepositsResponse): _99.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _99.QueryDepositsResponseProtoMsg): _99.QueryDepositsResponse;
                toProto(message: _99.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _99.QueryDepositsResponse): _99.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _99.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryTallyResultRequest;
                fromPartial(object: Partial<_99.QueryTallyResultRequest>): _99.QueryTallyResultRequest;
                fromAmino(object: _99.QueryTallyResultRequestAmino): _99.QueryTallyResultRequest;
                toAmino(message: _99.QueryTallyResultRequest): _99.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _99.QueryTallyResultRequestAminoMsg): _99.QueryTallyResultRequest;
                toAminoMsg(message: _99.QueryTallyResultRequest): _99.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _99.QueryTallyResultRequestProtoMsg): _99.QueryTallyResultRequest;
                toProto(message: _99.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _99.QueryTallyResultRequest): _99.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _99.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryTallyResultResponse;
                fromPartial(object: Partial<_99.QueryTallyResultResponse>): _99.QueryTallyResultResponse;
                fromAmino(object: _99.QueryTallyResultResponseAmino): _99.QueryTallyResultResponse;
                toAmino(message: _99.QueryTallyResultResponse): _99.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _99.QueryTallyResultResponseAminoMsg): _99.QueryTallyResultResponse;
                toAminoMsg(message: _99.QueryTallyResultResponse): _99.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _99.QueryTallyResultResponseProtoMsg): _99.QueryTallyResultResponse;
                toProto(message: _99.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _99.QueryTallyResultResponse): _99.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _98.VoteOption;
            voteOptionToJSON(object: _98.VoteOption): string;
            proposalStatusFromJSON(object: any): _98.ProposalStatus;
            proposalStatusToJSON(object: _98.ProposalStatus): string;
            VoteOption: typeof _98.VoteOption;
            VoteOptionSDKType: typeof _98.VoteOption;
            VoteOptionAmino: typeof _98.VoteOption;
            ProposalStatus: typeof _98.ProposalStatus;
            ProposalStatusSDKType: typeof _98.ProposalStatus;
            ProposalStatusAmino: typeof _98.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _98.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.WeightedVoteOption;
                fromPartial(object: Partial<_98.WeightedVoteOption>): _98.WeightedVoteOption;
                fromAmino(object: _98.WeightedVoteOptionAmino): _98.WeightedVoteOption;
                toAmino(message: _98.WeightedVoteOption): _98.WeightedVoteOptionAmino;
                fromAminoMsg(object: _98.WeightedVoteOptionAminoMsg): _98.WeightedVoteOption;
                toAminoMsg(message: _98.WeightedVoteOption): _98.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _98.WeightedVoteOptionProtoMsg): _98.WeightedVoteOption;
                toProto(message: _98.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _98.WeightedVoteOption): _98.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _98.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.TextProposal;
                fromPartial(object: Partial<_98.TextProposal>): _98.TextProposal;
                fromAmino(object: _98.TextProposalAmino): _98.TextProposal;
                toAmino(message: _98.TextProposal): _98.TextProposalAmino;
                fromAminoMsg(object: _98.TextProposalAminoMsg): _98.TextProposal;
                toAminoMsg(message: _98.TextProposal): _98.TextProposalAminoMsg;
                fromProtoMsg(message: _98.TextProposalProtoMsg): _98.TextProposal;
                toProto(message: _98.TextProposal): Uint8Array;
                toProtoMsg(message: _98.TextProposal): _98.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _98.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.Deposit;
                fromPartial(object: Partial<_98.Deposit>): _98.Deposit;
                fromAmino(object: _98.DepositAmino): _98.Deposit;
                toAmino(message: _98.Deposit): _98.DepositAmino;
                fromAminoMsg(object: _98.DepositAminoMsg): _98.Deposit;
                toAminoMsg(message: _98.Deposit): _98.DepositAminoMsg;
                fromProtoMsg(message: _98.DepositProtoMsg): _98.Deposit;
                toProto(message: _98.Deposit): Uint8Array;
                toProtoMsg(message: _98.Deposit): _98.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _98.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.Proposal;
                fromPartial(object: Partial<_98.Proposal>): _98.Proposal;
                fromAmino(object: _98.ProposalAmino): _98.Proposal;
                toAmino(message: _98.Proposal): _98.ProposalAmino;
                fromAminoMsg(object: _98.ProposalAminoMsg): _98.Proposal;
                toAminoMsg(message: _98.Proposal): _98.ProposalAminoMsg;
                fromProtoMsg(message: _98.ProposalProtoMsg): _98.Proposal;
                toProto(message: _98.Proposal): Uint8Array;
                toProtoMsg(message: _98.Proposal): _98.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _98.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.TallyResult;
                fromPartial(object: Partial<_98.TallyResult>): _98.TallyResult;
                fromAmino(object: _98.TallyResultAmino): _98.TallyResult;
                toAmino(message: _98.TallyResult): _98.TallyResultAmino;
                fromAminoMsg(object: _98.TallyResultAminoMsg): _98.TallyResult;
                toAminoMsg(message: _98.TallyResult): _98.TallyResultAminoMsg;
                fromProtoMsg(message: _98.TallyResultProtoMsg): _98.TallyResult;
                toProto(message: _98.TallyResult): Uint8Array;
                toProtoMsg(message: _98.TallyResult): _98.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _98.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.Vote;
                fromPartial(object: Partial<_98.Vote>): _98.Vote;
                fromAmino(object: _98.VoteAmino): _98.Vote;
                toAmino(message: _98.Vote): _98.VoteAmino;
                fromAminoMsg(object: _98.VoteAminoMsg): _98.Vote;
                toAminoMsg(message: _98.Vote): _98.VoteAminoMsg;
                fromProtoMsg(message: _98.VoteProtoMsg): _98.Vote;
                toProto(message: _98.Vote): Uint8Array;
                toProtoMsg(message: _98.Vote): _98.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _98.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.DepositParams;
                fromPartial(object: Partial<_98.DepositParams>): _98.DepositParams;
                fromAmino(object: _98.DepositParamsAmino): _98.DepositParams;
                toAmino(message: _98.DepositParams): _98.DepositParamsAmino;
                fromAminoMsg(object: _98.DepositParamsAminoMsg): _98.DepositParams;
                toAminoMsg(message: _98.DepositParams): _98.DepositParamsAminoMsg;
                fromProtoMsg(message: _98.DepositParamsProtoMsg): _98.DepositParams;
                toProto(message: _98.DepositParams): Uint8Array;
                toProtoMsg(message: _98.DepositParams): _98.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _98.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.VotingParams;
                fromPartial(object: Partial<_98.VotingParams>): _98.VotingParams;
                fromAmino(object: _98.VotingParamsAmino): _98.VotingParams;
                toAmino(message: _98.VotingParams): _98.VotingParamsAmino;
                fromAminoMsg(object: _98.VotingParamsAminoMsg): _98.VotingParams;
                toAminoMsg(message: _98.VotingParams): _98.VotingParamsAminoMsg;
                fromProtoMsg(message: _98.VotingParamsProtoMsg): _98.VotingParams;
                toProto(message: _98.VotingParams): Uint8Array;
                toProtoMsg(message: _98.VotingParams): _98.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _98.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.TallyParams;
                fromPartial(object: Partial<_98.TallyParams>): _98.TallyParams;
                fromAmino(object: _98.TallyParamsAmino): _98.TallyParams;
                toAmino(message: _98.TallyParams): _98.TallyParamsAmino;
                fromAminoMsg(object: _98.TallyParamsAminoMsg): _98.TallyParams;
                toAminoMsg(message: _98.TallyParams): _98.TallyParamsAminoMsg;
                fromProtoMsg(message: _98.TallyParamsProtoMsg): _98.TallyParams;
                toProto(message: _98.TallyParams): Uint8Array;
                toProtoMsg(message: _98.TallyParams): _98.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _97.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.GenesisState;
                fromPartial(object: Partial<_97.GenesisState>): _97.GenesisState;
                fromAmino(object: _97.GenesisStateAmino): _97.GenesisState;
                toAmino(message: _97.GenesisState): _97.GenesisStateAmino;
                fromAminoMsg(object: _97.GenesisStateAminoMsg): _97.GenesisState;
                toAminoMsg(message: _97.GenesisState): _97.GenesisStateAminoMsg;
                fromProtoMsg(message: _97.GenesisStateProtoMsg): _97.GenesisState;
                toProto(message: _97.GenesisState): Uint8Array;
                toProtoMsg(message: _97.GenesisState): _97.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _236.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                inflation(request?: _103.QueryInflationRequest): Promise<_103.QueryInflationResponse>;
                annualProvisions(request?: _103.QueryAnnualProvisionsRequest): Promise<_103.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _222.LCDQueryClient;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _103.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.QueryInflationRequest;
                fromPartial(_: Partial<_103.QueryInflationRequest>): _103.QueryInflationRequest;
                fromAmino(_: _103.QueryInflationRequestAmino): _103.QueryInflationRequest;
                toAmino(_: _103.QueryInflationRequest): _103.QueryInflationRequestAmino;
                fromAminoMsg(object: _103.QueryInflationRequestAminoMsg): _103.QueryInflationRequest;
                toAminoMsg(message: _103.QueryInflationRequest): _103.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _103.QueryInflationRequestProtoMsg): _103.QueryInflationRequest;
                toProto(message: _103.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _103.QueryInflationRequest): _103.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _103.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryInflationResponse;
                fromPartial(object: Partial<_103.QueryInflationResponse>): _103.QueryInflationResponse;
                fromAmino(object: _103.QueryInflationResponseAmino): _103.QueryInflationResponse;
                toAmino(message: _103.QueryInflationResponse): _103.QueryInflationResponseAmino;
                fromAminoMsg(object: _103.QueryInflationResponseAminoMsg): _103.QueryInflationResponse;
                toAminoMsg(message: _103.QueryInflationResponse): _103.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _103.QueryInflationResponseProtoMsg): _103.QueryInflationResponse;
                toProto(message: _103.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _103.QueryInflationResponse): _103.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _103.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_103.QueryAnnualProvisionsRequest>): _103.QueryAnnualProvisionsRequest;
                fromAmino(_: _103.QueryAnnualProvisionsRequestAmino): _103.QueryAnnualProvisionsRequest;
                toAmino(_: _103.QueryAnnualProvisionsRequest): _103.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _103.QueryAnnualProvisionsRequestAminoMsg): _103.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _103.QueryAnnualProvisionsRequest): _103.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _103.QueryAnnualProvisionsRequestProtoMsg): _103.QueryAnnualProvisionsRequest;
                toProto(message: _103.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _103.QueryAnnualProvisionsRequest): _103.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _103.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_103.QueryAnnualProvisionsResponse>): _103.QueryAnnualProvisionsResponse;
                fromAmino(object: _103.QueryAnnualProvisionsResponseAmino): _103.QueryAnnualProvisionsResponse;
                toAmino(message: _103.QueryAnnualProvisionsResponse): _103.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _103.QueryAnnualProvisionsResponseAminoMsg): _103.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _103.QueryAnnualProvisionsResponse): _103.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _103.QueryAnnualProvisionsResponseProtoMsg): _103.QueryAnnualProvisionsResponse;
                toProto(message: _103.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _103.QueryAnnualProvisionsResponse): _103.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _102.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.Minter;
                fromPartial(object: Partial<_102.Minter>): _102.Minter;
                fromAmino(object: _102.MinterAmino): _102.Minter;
                toAmino(message: _102.Minter): _102.MinterAmino;
                fromAminoMsg(object: _102.MinterAminoMsg): _102.Minter;
                toAminoMsg(message: _102.Minter): _102.MinterAminoMsg;
                fromProtoMsg(message: _102.MinterProtoMsg): _102.Minter;
                toProto(message: _102.Minter): Uint8Array;
                toProtoMsg(message: _102.Minter): _102.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _102.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.Params;
                fromPartial(object: Partial<_102.Params>): _102.Params;
                fromAmino(object: _102.ParamsAmino): _102.Params;
                toAmino(message: _102.Params): _102.ParamsAmino;
                fromAminoMsg(object: _102.ParamsAminoMsg): _102.Params;
                toAminoMsg(message: _102.Params): _102.ParamsAminoMsg;
                fromProtoMsg(message: _102.ParamsProtoMsg): _102.Params;
                toProto(message: _102.Params): Uint8Array;
                toProtoMsg(message: _102.Params): _102.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _101.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.GenesisState;
                fromPartial(object: Partial<_101.GenesisState>): _101.GenesisState;
                fromAmino(object: _101.GenesisStateAmino): _101.GenesisState;
                toAmino(message: _101.GenesisState): _101.GenesisStateAmino;
                fromAminoMsg(object: _101.GenesisStateAminoMsg): _101.GenesisState;
                toAminoMsg(message: _101.GenesisState): _101.GenesisStateAminoMsg;
                fromProtoMsg(message: _101.GenesisStateProtoMsg): _101.GenesisState;
                toProto(message: _101.GenesisState): Uint8Array;
                toProtoMsg(message: _101.GenesisState): _101.GenesisStateProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _237.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _223.LCDQueryClient;
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
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _104.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ParameterChangeProposal;
                fromPartial(object: Partial<_104.ParameterChangeProposal>): _104.ParameterChangeProposal;
                fromAmino(object: _104.ParameterChangeProposalAmino): _104.ParameterChangeProposal;
                toAmino(message: _104.ParameterChangeProposal): _104.ParameterChangeProposalAmino;
                fromAminoMsg(object: _104.ParameterChangeProposalAminoMsg): _104.ParameterChangeProposal;
                toAminoMsg(message: _104.ParameterChangeProposal): _104.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _104.ParameterChangeProposalProtoMsg): _104.ParameterChangeProposal;
                toProto(message: _104.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _104.ParameterChangeProposal): _104.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _104.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ParamChange;
                fromPartial(object: Partial<_104.ParamChange>): _104.ParamChange;
                fromAmino(object: _104.ParamChangeAmino): _104.ParamChange;
                toAmino(message: _104.ParamChange): _104.ParamChangeAmino;
                fromAminoMsg(object: _104.ParamChangeAminoMsg): _104.ParamChange;
                toAminoMsg(message: _104.ParamChange): _104.ParamChangeAminoMsg;
                fromProtoMsg(message: _104.ParamChangeProtoMsg): _104.ParamChange;
                toProto(message: _104.ParamChange): Uint8Array;
                toProtoMsg(message: _104.ParamChange): _104.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _249.MsgClientImpl;
            QueryClientImpl: typeof _238.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                signingInfo(request: _107.QuerySigningInfoRequest): Promise<_107.QuerySigningInfoResponse>;
                signingInfos(request?: _107.QuerySigningInfosRequest): Promise<_107.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _224.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _109.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _109.MsgUnjail): {
                        typeUrl: string;
                        value: _109.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _109.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _109.MsgUnjail): {
                        typeUrl: string;
                        value: _109.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _109.MsgUnjail) => _109.MsgUnjailAmino;
                    fromAmino: (object: _109.MsgUnjailAmino) => _109.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _109.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.MsgUnjail;
                fromPartial(object: Partial<_109.MsgUnjail>): _109.MsgUnjail;
                fromAmino(object: _109.MsgUnjailAmino): _109.MsgUnjail;
                toAmino(message: _109.MsgUnjail): _109.MsgUnjailAmino;
                fromAminoMsg(object: _109.MsgUnjailAminoMsg): _109.MsgUnjail;
                toAminoMsg(message: _109.MsgUnjail): _109.MsgUnjailAminoMsg;
                fromProtoMsg(message: _109.MsgUnjailProtoMsg): _109.MsgUnjail;
                toProto(message: _109.MsgUnjail): Uint8Array;
                toProtoMsg(message: _109.MsgUnjail): _109.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _109.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _109.MsgUnjailResponse;
                fromPartial(_: Partial<_109.MsgUnjailResponse>): _109.MsgUnjailResponse;
                fromAmino(_: _109.MsgUnjailResponseAmino): _109.MsgUnjailResponse;
                toAmino(_: _109.MsgUnjailResponse): _109.MsgUnjailResponseAmino;
                fromAminoMsg(object: _109.MsgUnjailResponseAminoMsg): _109.MsgUnjailResponse;
                toAminoMsg(message: _109.MsgUnjailResponse): _109.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _109.MsgUnjailResponseProtoMsg): _109.MsgUnjailResponse;
                toProto(message: _109.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _109.MsgUnjailResponse): _109.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _108.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.ValidatorSigningInfo;
                fromPartial(object: Partial<_108.ValidatorSigningInfo>): _108.ValidatorSigningInfo;
                fromAmino(object: _108.ValidatorSigningInfoAmino): _108.ValidatorSigningInfo;
                toAmino(message: _108.ValidatorSigningInfo): _108.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _108.ValidatorSigningInfoAminoMsg): _108.ValidatorSigningInfo;
                toAminoMsg(message: _108.ValidatorSigningInfo): _108.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _108.ValidatorSigningInfoProtoMsg): _108.ValidatorSigningInfo;
                toProto(message: _108.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _108.ValidatorSigningInfo): _108.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _108.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.Params;
                fromPartial(object: Partial<_108.Params>): _108.Params;
                fromAmino(object: _108.ParamsAmino): _108.Params;
                toAmino(message: _108.Params): _108.ParamsAmino;
                fromAminoMsg(object: _108.ParamsAminoMsg): _108.Params;
                toAminoMsg(message: _108.Params): _108.ParamsAminoMsg;
                fromProtoMsg(message: _108.ParamsProtoMsg): _108.Params;
                toProto(message: _108.Params): Uint8Array;
                toProtoMsg(message: _108.Params): _108.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _107.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _107.QueryParamsRequest;
                fromPartial(_: Partial<_107.QueryParamsRequest>): _107.QueryParamsRequest;
                fromAmino(_: _107.QueryParamsRequestAmino): _107.QueryParamsRequest;
                toAmino(_: _107.QueryParamsRequest): _107.QueryParamsRequestAmino;
                fromAminoMsg(object: _107.QueryParamsRequestAminoMsg): _107.QueryParamsRequest;
                toAminoMsg(message: _107.QueryParamsRequest): _107.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _107.QueryParamsRequestProtoMsg): _107.QueryParamsRequest;
                toProto(message: _107.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryParamsRequest): _107.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _107.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryParamsResponse;
                fromPartial(object: Partial<_107.QueryParamsResponse>): _107.QueryParamsResponse;
                fromAmino(object: _107.QueryParamsResponseAmino): _107.QueryParamsResponse;
                toAmino(message: _107.QueryParamsResponse): _107.QueryParamsResponseAmino;
                fromAminoMsg(object: _107.QueryParamsResponseAminoMsg): _107.QueryParamsResponse;
                toAminoMsg(message: _107.QueryParamsResponse): _107.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _107.QueryParamsResponseProtoMsg): _107.QueryParamsResponse;
                toProto(message: _107.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryParamsResponse): _107.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _107.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QuerySigningInfoRequest;
                fromPartial(object: Partial<_107.QuerySigningInfoRequest>): _107.QuerySigningInfoRequest;
                fromAmino(object: _107.QuerySigningInfoRequestAmino): _107.QuerySigningInfoRequest;
                toAmino(message: _107.QuerySigningInfoRequest): _107.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _107.QuerySigningInfoRequestAminoMsg): _107.QuerySigningInfoRequest;
                toAminoMsg(message: _107.QuerySigningInfoRequest): _107.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _107.QuerySigningInfoRequestProtoMsg): _107.QuerySigningInfoRequest;
                toProto(message: _107.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _107.QuerySigningInfoRequest): _107.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _107.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QuerySigningInfoResponse;
                fromPartial(object: Partial<_107.QuerySigningInfoResponse>): _107.QuerySigningInfoResponse;
                fromAmino(object: _107.QuerySigningInfoResponseAmino): _107.QuerySigningInfoResponse;
                toAmino(message: _107.QuerySigningInfoResponse): _107.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _107.QuerySigningInfoResponseAminoMsg): _107.QuerySigningInfoResponse;
                toAminoMsg(message: _107.QuerySigningInfoResponse): _107.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _107.QuerySigningInfoResponseProtoMsg): _107.QuerySigningInfoResponse;
                toProto(message: _107.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _107.QuerySigningInfoResponse): _107.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _107.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QuerySigningInfosRequest;
                fromPartial(object: Partial<_107.QuerySigningInfosRequest>): _107.QuerySigningInfosRequest;
                fromAmino(object: _107.QuerySigningInfosRequestAmino): _107.QuerySigningInfosRequest;
                toAmino(message: _107.QuerySigningInfosRequest): _107.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _107.QuerySigningInfosRequestAminoMsg): _107.QuerySigningInfosRequest;
                toAminoMsg(message: _107.QuerySigningInfosRequest): _107.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _107.QuerySigningInfosRequestProtoMsg): _107.QuerySigningInfosRequest;
                toProto(message: _107.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _107.QuerySigningInfosRequest): _107.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _107.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QuerySigningInfosResponse;
                fromPartial(object: Partial<_107.QuerySigningInfosResponse>): _107.QuerySigningInfosResponse;
                fromAmino(object: _107.QuerySigningInfosResponseAmino): _107.QuerySigningInfosResponse;
                toAmino(message: _107.QuerySigningInfosResponse): _107.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _107.QuerySigningInfosResponseAminoMsg): _107.QuerySigningInfosResponse;
                toAminoMsg(message: _107.QuerySigningInfosResponse): _107.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _107.QuerySigningInfosResponseProtoMsg): _107.QuerySigningInfosResponse;
                toProto(message: _107.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _107.QuerySigningInfosResponse): _107.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _106.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.GenesisState;
                fromPartial(object: Partial<_106.GenesisState>): _106.GenesisState;
                fromAmino(object: _106.GenesisStateAmino): _106.GenesisState;
                toAmino(message: _106.GenesisState): _106.GenesisStateAmino;
                fromAminoMsg(object: _106.GenesisStateAminoMsg): _106.GenesisState;
                toAminoMsg(message: _106.GenesisState): _106.GenesisStateAminoMsg;
                fromProtoMsg(message: _106.GenesisStateProtoMsg): _106.GenesisState;
                toProto(message: _106.GenesisState): Uint8Array;
                toProtoMsg(message: _106.GenesisState): _106.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _106.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.SigningInfo;
                fromPartial(object: Partial<_106.SigningInfo>): _106.SigningInfo;
                fromAmino(object: _106.SigningInfoAmino): _106.SigningInfo;
                toAmino(message: _106.SigningInfo): _106.SigningInfoAmino;
                fromAminoMsg(object: _106.SigningInfoAminoMsg): _106.SigningInfo;
                toAminoMsg(message: _106.SigningInfo): _106.SigningInfoAminoMsg;
                fromProtoMsg(message: _106.SigningInfoProtoMsg): _106.SigningInfo;
                toProto(message: _106.SigningInfo): Uint8Array;
                toProtoMsg(message: _106.SigningInfo): _106.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _106.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.ValidatorMissedBlocks;
                fromPartial(object: Partial<_106.ValidatorMissedBlocks>): _106.ValidatorMissedBlocks;
                fromAmino(object: _106.ValidatorMissedBlocksAmino): _106.ValidatorMissedBlocks;
                toAmino(message: _106.ValidatorMissedBlocks): _106.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _106.ValidatorMissedBlocksAminoMsg): _106.ValidatorMissedBlocks;
                toAminoMsg(message: _106.ValidatorMissedBlocks): _106.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _106.ValidatorMissedBlocksProtoMsg): _106.ValidatorMissedBlocks;
                toProto(message: _106.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _106.ValidatorMissedBlocks): _106.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _106.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.MissedBlock;
                fromPartial(object: Partial<_106.MissedBlock>): _106.MissedBlock;
                fromAmino(object: _106.MissedBlockAmino): _106.MissedBlock;
                toAmino(message: _106.MissedBlock): _106.MissedBlockAmino;
                fromAminoMsg(object: _106.MissedBlockAminoMsg): _106.MissedBlock;
                toAminoMsg(message: _106.MissedBlock): _106.MissedBlockAminoMsg;
                fromProtoMsg(message: _106.MissedBlockProtoMsg): _106.MissedBlock;
                toProto(message: _106.MissedBlock): Uint8Array;
                toProtoMsg(message: _106.MissedBlock): _106.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _250.MsgClientImpl;
            QueryClientImpl: typeof _239.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _112.QueryValidatorsRequest): Promise<_112.QueryValidatorsResponse>;
                validator(request: _112.QueryValidatorRequest): Promise<_112.QueryValidatorResponse>;
                validatorDelegations(request: _112.QueryValidatorDelegationsRequest): Promise<_112.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _112.QueryValidatorUnbondingDelegationsRequest): Promise<_112.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _112.QueryDelegationRequest): Promise<_112.QueryDelegationResponse>;
                unbondingDelegation(request: _112.QueryUnbondingDelegationRequest): Promise<_112.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _112.QueryDelegatorDelegationsRequest): Promise<_112.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _112.QueryDelegatorUnbondingDelegationsRequest): Promise<_112.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _112.QueryRedelegationsRequest): Promise<_112.QueryRedelegationsResponse>;
                delegatorValidators(request: _112.QueryDelegatorValidatorsRequest): Promise<_112.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _112.QueryDelegatorValidatorRequest): Promise<_112.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _112.QueryHistoricalInfoRequest): Promise<_112.QueryHistoricalInfoResponse>;
                pool(request?: _112.QueryPoolRequest): Promise<_112.QueryPoolResponse>;
                params(request?: _112.QueryParamsRequest): Promise<_112.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _225.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _114.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _114.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _114.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _114.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _114.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _114.MsgCreateValidator): {
                        typeUrl: string;
                        value: _114.MsgCreateValidator;
                    };
                    editValidator(value: _114.MsgEditValidator): {
                        typeUrl: string;
                        value: _114.MsgEditValidator;
                    };
                    delegate(value: _114.MsgDelegate): {
                        typeUrl: string;
                        value: _114.MsgDelegate;
                    };
                    beginRedelegate(value: _114.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _114.MsgBeginRedelegate;
                    };
                    undelegate(value: _114.MsgUndelegate): {
                        typeUrl: string;
                        value: _114.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _114.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _114.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _114.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _114.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _114.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _114.MsgCreateValidator): {
                        typeUrl: string;
                        value: _114.MsgCreateValidator;
                    };
                    editValidator(value: _114.MsgEditValidator): {
                        typeUrl: string;
                        value: _114.MsgEditValidator;
                    };
                    delegate(value: _114.MsgDelegate): {
                        typeUrl: string;
                        value: _114.MsgDelegate;
                    };
                    beginRedelegate(value: _114.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _114.MsgBeginRedelegate;
                    };
                    undelegate(value: _114.MsgUndelegate): {
                        typeUrl: string;
                        value: _114.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _114.MsgCreateValidator) => _114.MsgCreateValidatorAmino;
                    fromAmino: (object: _114.MsgCreateValidatorAmino) => _114.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _114.MsgEditValidator) => _114.MsgEditValidatorAmino;
                    fromAmino: (object: _114.MsgEditValidatorAmino) => _114.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _114.MsgDelegate) => _114.MsgDelegateAmino;
                    fromAmino: (object: _114.MsgDelegateAmino) => _114.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _114.MsgBeginRedelegate) => _114.MsgBeginRedelegateAmino;
                    fromAmino: (object: _114.MsgBeginRedelegateAmino) => _114.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _114.MsgUndelegate) => _114.MsgUndelegateAmino;
                    fromAmino: (object: _114.MsgUndelegateAmino) => _114.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _114.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgCreateValidator;
                fromPartial(object: Partial<_114.MsgCreateValidator>): _114.MsgCreateValidator;
                fromAmino(object: _114.MsgCreateValidatorAmino): _114.MsgCreateValidator;
                toAmino(message: _114.MsgCreateValidator): _114.MsgCreateValidatorAmino;
                fromAminoMsg(object: _114.MsgCreateValidatorAminoMsg): _114.MsgCreateValidator;
                toAminoMsg(message: _114.MsgCreateValidator): _114.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _114.MsgCreateValidatorProtoMsg): _114.MsgCreateValidator;
                toProto(message: _114.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _114.MsgCreateValidator): _114.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _114.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_114.MsgCreateValidatorResponse>): _114.MsgCreateValidatorResponse;
                fromAmino(_: _114.MsgCreateValidatorResponseAmino): _114.MsgCreateValidatorResponse;
                toAmino(_: _114.MsgCreateValidatorResponse): _114.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _114.MsgCreateValidatorResponseAminoMsg): _114.MsgCreateValidatorResponse;
                toAminoMsg(message: _114.MsgCreateValidatorResponse): _114.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _114.MsgCreateValidatorResponseProtoMsg): _114.MsgCreateValidatorResponse;
                toProto(message: _114.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _114.MsgCreateValidatorResponse): _114.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _114.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgEditValidator;
                fromPartial(object: Partial<_114.MsgEditValidator>): _114.MsgEditValidator;
                fromAmino(object: _114.MsgEditValidatorAmino): _114.MsgEditValidator;
                toAmino(message: _114.MsgEditValidator): _114.MsgEditValidatorAmino;
                fromAminoMsg(object: _114.MsgEditValidatorAminoMsg): _114.MsgEditValidator;
                toAminoMsg(message: _114.MsgEditValidator): _114.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _114.MsgEditValidatorProtoMsg): _114.MsgEditValidator;
                toProto(message: _114.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _114.MsgEditValidator): _114.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _114.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.MsgEditValidatorResponse;
                fromPartial(_: Partial<_114.MsgEditValidatorResponse>): _114.MsgEditValidatorResponse;
                fromAmino(_: _114.MsgEditValidatorResponseAmino): _114.MsgEditValidatorResponse;
                toAmino(_: _114.MsgEditValidatorResponse): _114.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _114.MsgEditValidatorResponseAminoMsg): _114.MsgEditValidatorResponse;
                toAminoMsg(message: _114.MsgEditValidatorResponse): _114.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _114.MsgEditValidatorResponseProtoMsg): _114.MsgEditValidatorResponse;
                toProto(message: _114.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _114.MsgEditValidatorResponse): _114.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _114.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgDelegate;
                fromPartial(object: Partial<_114.MsgDelegate>): _114.MsgDelegate;
                fromAmino(object: _114.MsgDelegateAmino): _114.MsgDelegate;
                toAmino(message: _114.MsgDelegate): _114.MsgDelegateAmino;
                fromAminoMsg(object: _114.MsgDelegateAminoMsg): _114.MsgDelegate;
                toAminoMsg(message: _114.MsgDelegate): _114.MsgDelegateAminoMsg;
                fromProtoMsg(message: _114.MsgDelegateProtoMsg): _114.MsgDelegate;
                toProto(message: _114.MsgDelegate): Uint8Array;
                toProtoMsg(message: _114.MsgDelegate): _114.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _114.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.MsgDelegateResponse;
                fromPartial(_: Partial<_114.MsgDelegateResponse>): _114.MsgDelegateResponse;
                fromAmino(_: _114.MsgDelegateResponseAmino): _114.MsgDelegateResponse;
                toAmino(_: _114.MsgDelegateResponse): _114.MsgDelegateResponseAmino;
                fromAminoMsg(object: _114.MsgDelegateResponseAminoMsg): _114.MsgDelegateResponse;
                toAminoMsg(message: _114.MsgDelegateResponse): _114.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _114.MsgDelegateResponseProtoMsg): _114.MsgDelegateResponse;
                toProto(message: _114.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _114.MsgDelegateResponse): _114.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _114.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgBeginRedelegate;
                fromPartial(object: Partial<_114.MsgBeginRedelegate>): _114.MsgBeginRedelegate;
                fromAmino(object: _114.MsgBeginRedelegateAmino): _114.MsgBeginRedelegate;
                toAmino(message: _114.MsgBeginRedelegate): _114.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _114.MsgBeginRedelegateAminoMsg): _114.MsgBeginRedelegate;
                toAminoMsg(message: _114.MsgBeginRedelegate): _114.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _114.MsgBeginRedelegateProtoMsg): _114.MsgBeginRedelegate;
                toProto(message: _114.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _114.MsgBeginRedelegate): _114.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _114.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_114.MsgBeginRedelegateResponse>): _114.MsgBeginRedelegateResponse;
                fromAmino(object: _114.MsgBeginRedelegateResponseAmino): _114.MsgBeginRedelegateResponse;
                toAmino(message: _114.MsgBeginRedelegateResponse): _114.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _114.MsgBeginRedelegateResponseAminoMsg): _114.MsgBeginRedelegateResponse;
                toAminoMsg(message: _114.MsgBeginRedelegateResponse): _114.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _114.MsgBeginRedelegateResponseProtoMsg): _114.MsgBeginRedelegateResponse;
                toProto(message: _114.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _114.MsgBeginRedelegateResponse): _114.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _114.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgUndelegate;
                fromPartial(object: Partial<_114.MsgUndelegate>): _114.MsgUndelegate;
                fromAmino(object: _114.MsgUndelegateAmino): _114.MsgUndelegate;
                toAmino(message: _114.MsgUndelegate): _114.MsgUndelegateAmino;
                fromAminoMsg(object: _114.MsgUndelegateAminoMsg): _114.MsgUndelegate;
                toAminoMsg(message: _114.MsgUndelegate): _114.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _114.MsgUndelegateProtoMsg): _114.MsgUndelegate;
                toProto(message: _114.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _114.MsgUndelegate): _114.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _114.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgUndelegateResponse;
                fromPartial(object: Partial<_114.MsgUndelegateResponse>): _114.MsgUndelegateResponse;
                fromAmino(object: _114.MsgUndelegateResponseAmino): _114.MsgUndelegateResponse;
                toAmino(message: _114.MsgUndelegateResponse): _114.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _114.MsgUndelegateResponseAminoMsg): _114.MsgUndelegateResponse;
                toAminoMsg(message: _114.MsgUndelegateResponse): _114.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _114.MsgUndelegateResponseProtoMsg): _114.MsgUndelegateResponse;
                toProto(message: _114.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _114.MsgUndelegateResponse): _114.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _113.BondStatus;
            bondStatusToJSON(object: _113.BondStatus): string;
            BondStatus: typeof _113.BondStatus;
            BondStatusSDKType: typeof _113.BondStatus;
            BondStatusAmino: typeof _113.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _113.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.HistoricalInfo;
                fromPartial(object: Partial<_113.HistoricalInfo>): _113.HistoricalInfo;
                fromAmino(object: _113.HistoricalInfoAmino): _113.HistoricalInfo;
                toAmino(message: _113.HistoricalInfo): _113.HistoricalInfoAmino;
                fromAminoMsg(object: _113.HistoricalInfoAminoMsg): _113.HistoricalInfo;
                toAminoMsg(message: _113.HistoricalInfo): _113.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _113.HistoricalInfoProtoMsg): _113.HistoricalInfo;
                toProto(message: _113.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _113.HistoricalInfo): _113.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _113.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.CommissionRates;
                fromPartial(object: Partial<_113.CommissionRates>): _113.CommissionRates;
                fromAmino(object: _113.CommissionRatesAmino): _113.CommissionRates;
                toAmino(message: _113.CommissionRates): _113.CommissionRatesAmino;
                fromAminoMsg(object: _113.CommissionRatesAminoMsg): _113.CommissionRates;
                toAminoMsg(message: _113.CommissionRates): _113.CommissionRatesAminoMsg;
                fromProtoMsg(message: _113.CommissionRatesProtoMsg): _113.CommissionRates;
                toProto(message: _113.CommissionRates): Uint8Array;
                toProtoMsg(message: _113.CommissionRates): _113.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _113.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.Commission;
                fromPartial(object: Partial<_113.Commission>): _113.Commission;
                fromAmino(object: _113.CommissionAmino): _113.Commission;
                toAmino(message: _113.Commission): _113.CommissionAmino;
                fromAminoMsg(object: _113.CommissionAminoMsg): _113.Commission;
                toAminoMsg(message: _113.Commission): _113.CommissionAminoMsg;
                fromProtoMsg(message: _113.CommissionProtoMsg): _113.Commission;
                toProto(message: _113.Commission): Uint8Array;
                toProtoMsg(message: _113.Commission): _113.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _113.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.Description;
                fromPartial(object: Partial<_113.Description>): _113.Description;
                fromAmino(object: _113.DescriptionAmino): _113.Description;
                toAmino(message: _113.Description): _113.DescriptionAmino;
                fromAminoMsg(object: _113.DescriptionAminoMsg): _113.Description;
                toAminoMsg(message: _113.Description): _113.DescriptionAminoMsg;
                fromProtoMsg(message: _113.DescriptionProtoMsg): _113.Description;
                toProto(message: _113.Description): Uint8Array;
                toProtoMsg(message: _113.Description): _113.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _113.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.Validator;
                fromPartial(object: Partial<_113.Validator>): _113.Validator;
                fromAmino(object: _113.ValidatorAmino): _113.Validator;
                toAmino(message: _113.Validator): _113.ValidatorAmino;
                fromAminoMsg(object: _113.ValidatorAminoMsg): _113.Validator;
                toAminoMsg(message: _113.Validator): _113.ValidatorAminoMsg;
                fromProtoMsg(message: _113.ValidatorProtoMsg): _113.Validator;
                toProto(message: _113.Validator): Uint8Array;
                toProtoMsg(message: _113.Validator): _113.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _113.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.ValAddresses;
                fromPartial(object: Partial<_113.ValAddresses>): _113.ValAddresses;
                fromAmino(object: _113.ValAddressesAmino): _113.ValAddresses;
                toAmino(message: _113.ValAddresses): _113.ValAddressesAmino;
                fromAminoMsg(object: _113.ValAddressesAminoMsg): _113.ValAddresses;
                toAminoMsg(message: _113.ValAddresses): _113.ValAddressesAminoMsg;
                fromProtoMsg(message: _113.ValAddressesProtoMsg): _113.ValAddresses;
                toProto(message: _113.ValAddresses): Uint8Array;
                toProtoMsg(message: _113.ValAddresses): _113.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _113.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.DVPair;
                fromPartial(object: Partial<_113.DVPair>): _113.DVPair;
                fromAmino(object: _113.DVPairAmino): _113.DVPair;
                toAmino(message: _113.DVPair): _113.DVPairAmino;
                fromAminoMsg(object: _113.DVPairAminoMsg): _113.DVPair;
                toAminoMsg(message: _113.DVPair): _113.DVPairAminoMsg;
                fromProtoMsg(message: _113.DVPairProtoMsg): _113.DVPair;
                toProto(message: _113.DVPair): Uint8Array;
                toProtoMsg(message: _113.DVPair): _113.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _113.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.DVPairs;
                fromPartial(object: Partial<_113.DVPairs>): _113.DVPairs;
                fromAmino(object: _113.DVPairsAmino): _113.DVPairs;
                toAmino(message: _113.DVPairs): _113.DVPairsAmino;
                fromAminoMsg(object: _113.DVPairsAminoMsg): _113.DVPairs;
                toAminoMsg(message: _113.DVPairs): _113.DVPairsAminoMsg;
                fromProtoMsg(message: _113.DVPairsProtoMsg): _113.DVPairs;
                toProto(message: _113.DVPairs): Uint8Array;
                toProtoMsg(message: _113.DVPairs): _113.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _113.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.DVVTriplet;
                fromPartial(object: Partial<_113.DVVTriplet>): _113.DVVTriplet;
                fromAmino(object: _113.DVVTripletAmino): _113.DVVTriplet;
                toAmino(message: _113.DVVTriplet): _113.DVVTripletAmino;
                fromAminoMsg(object: _113.DVVTripletAminoMsg): _113.DVVTriplet;
                toAminoMsg(message: _113.DVVTriplet): _113.DVVTripletAminoMsg;
                fromProtoMsg(message: _113.DVVTripletProtoMsg): _113.DVVTriplet;
                toProto(message: _113.DVVTriplet): Uint8Array;
                toProtoMsg(message: _113.DVVTriplet): _113.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _113.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.DVVTriplets;
                fromPartial(object: Partial<_113.DVVTriplets>): _113.DVVTriplets;
                fromAmino(object: _113.DVVTripletsAmino): _113.DVVTriplets;
                toAmino(message: _113.DVVTriplets): _113.DVVTripletsAmino;
                fromAminoMsg(object: _113.DVVTripletsAminoMsg): _113.DVVTriplets;
                toAminoMsg(message: _113.DVVTriplets): _113.DVVTripletsAminoMsg;
                fromProtoMsg(message: _113.DVVTripletsProtoMsg): _113.DVVTriplets;
                toProto(message: _113.DVVTriplets): Uint8Array;
                toProtoMsg(message: _113.DVVTriplets): _113.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _113.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.Delegation;
                fromPartial(object: Partial<_113.Delegation>): _113.Delegation;
                fromAmino(object: _113.DelegationAmino): _113.Delegation;
                toAmino(message: _113.Delegation): _113.DelegationAmino;
                fromAminoMsg(object: _113.DelegationAminoMsg): _113.Delegation;
                toAminoMsg(message: _113.Delegation): _113.DelegationAminoMsg;
                fromProtoMsg(message: _113.DelegationProtoMsg): _113.Delegation;
                toProto(message: _113.Delegation): Uint8Array;
                toProtoMsg(message: _113.Delegation): _113.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _113.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.UnbondingDelegation;
                fromPartial(object: Partial<_113.UnbondingDelegation>): _113.UnbondingDelegation;
                fromAmino(object: _113.UnbondingDelegationAmino): _113.UnbondingDelegation;
                toAmino(message: _113.UnbondingDelegation): _113.UnbondingDelegationAmino;
                fromAminoMsg(object: _113.UnbondingDelegationAminoMsg): _113.UnbondingDelegation;
                toAminoMsg(message: _113.UnbondingDelegation): _113.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _113.UnbondingDelegationProtoMsg): _113.UnbondingDelegation;
                toProto(message: _113.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _113.UnbondingDelegation): _113.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _113.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.UnbondingDelegationEntry;
                fromPartial(object: Partial<_113.UnbondingDelegationEntry>): _113.UnbondingDelegationEntry;
                fromAmino(object: _113.UnbondingDelegationEntryAmino): _113.UnbondingDelegationEntry;
                toAmino(message: _113.UnbondingDelegationEntry): _113.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _113.UnbondingDelegationEntryAminoMsg): _113.UnbondingDelegationEntry;
                toAminoMsg(message: _113.UnbondingDelegationEntry): _113.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _113.UnbondingDelegationEntryProtoMsg): _113.UnbondingDelegationEntry;
                toProto(message: _113.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _113.UnbondingDelegationEntry): _113.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _113.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.RedelegationEntry;
                fromPartial(object: Partial<_113.RedelegationEntry>): _113.RedelegationEntry;
                fromAmino(object: _113.RedelegationEntryAmino): _113.RedelegationEntry;
                toAmino(message: _113.RedelegationEntry): _113.RedelegationEntryAmino;
                fromAminoMsg(object: _113.RedelegationEntryAminoMsg): _113.RedelegationEntry;
                toAminoMsg(message: _113.RedelegationEntry): _113.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _113.RedelegationEntryProtoMsg): _113.RedelegationEntry;
                toProto(message: _113.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _113.RedelegationEntry): _113.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _113.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.Redelegation;
                fromPartial(object: Partial<_113.Redelegation>): _113.Redelegation;
                fromAmino(object: _113.RedelegationAmino): _113.Redelegation;
                toAmino(message: _113.Redelegation): _113.RedelegationAmino;
                fromAminoMsg(object: _113.RedelegationAminoMsg): _113.Redelegation;
                toAminoMsg(message: _113.Redelegation): _113.RedelegationAminoMsg;
                fromProtoMsg(message: _113.RedelegationProtoMsg): _113.Redelegation;
                toProto(message: _113.Redelegation): Uint8Array;
                toProtoMsg(message: _113.Redelegation): _113.RedelegationProtoMsg;
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
            DelegationResponse: {
                typeUrl: string;
                encode(message: _113.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.DelegationResponse;
                fromPartial(object: Partial<_113.DelegationResponse>): _113.DelegationResponse;
                fromAmino(object: _113.DelegationResponseAmino): _113.DelegationResponse;
                toAmino(message: _113.DelegationResponse): _113.DelegationResponseAmino;
                fromAminoMsg(object: _113.DelegationResponseAminoMsg): _113.DelegationResponse;
                toAminoMsg(message: _113.DelegationResponse): _113.DelegationResponseAminoMsg;
                fromProtoMsg(message: _113.DelegationResponseProtoMsg): _113.DelegationResponse;
                toProto(message: _113.DelegationResponse): Uint8Array;
                toProtoMsg(message: _113.DelegationResponse): _113.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _113.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.RedelegationEntryResponse;
                fromPartial(object: Partial<_113.RedelegationEntryResponse>): _113.RedelegationEntryResponse;
                fromAmino(object: _113.RedelegationEntryResponseAmino): _113.RedelegationEntryResponse;
                toAmino(message: _113.RedelegationEntryResponse): _113.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _113.RedelegationEntryResponseAminoMsg): _113.RedelegationEntryResponse;
                toAminoMsg(message: _113.RedelegationEntryResponse): _113.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _113.RedelegationEntryResponseProtoMsg): _113.RedelegationEntryResponse;
                toProto(message: _113.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _113.RedelegationEntryResponse): _113.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _113.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.RedelegationResponse;
                fromPartial(object: Partial<_113.RedelegationResponse>): _113.RedelegationResponse;
                fromAmino(object: _113.RedelegationResponseAmino): _113.RedelegationResponse;
                toAmino(message: _113.RedelegationResponse): _113.RedelegationResponseAmino;
                fromAminoMsg(object: _113.RedelegationResponseAminoMsg): _113.RedelegationResponse;
                toAminoMsg(message: _113.RedelegationResponse): _113.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _113.RedelegationResponseProtoMsg): _113.RedelegationResponse;
                toProto(message: _113.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _113.RedelegationResponse): _113.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _113.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.Pool;
                fromPartial(object: Partial<_113.Pool>): _113.Pool;
                fromAmino(object: _113.PoolAmino): _113.Pool;
                toAmino(message: _113.Pool): _113.PoolAmino;
                fromAminoMsg(object: _113.PoolAminoMsg): _113.Pool;
                toAminoMsg(message: _113.Pool): _113.PoolAminoMsg;
                fromProtoMsg(message: _113.PoolProtoMsg): _113.Pool;
                toProto(message: _113.Pool): Uint8Array;
                toProtoMsg(message: _113.Pool): _113.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _112.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryValidatorsRequest;
                fromPartial(object: Partial<_112.QueryValidatorsRequest>): _112.QueryValidatorsRequest;
                fromAmino(object: _112.QueryValidatorsRequestAmino): _112.QueryValidatorsRequest;
                toAmino(message: _112.QueryValidatorsRequest): _112.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _112.QueryValidatorsRequestAminoMsg): _112.QueryValidatorsRequest;
                toAminoMsg(message: _112.QueryValidatorsRequest): _112.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorsRequestProtoMsg): _112.QueryValidatorsRequest;
                toProto(message: _112.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorsRequest): _112.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _112.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryValidatorsResponse;
                fromPartial(object: Partial<_112.QueryValidatorsResponse>): _112.QueryValidatorsResponse;
                fromAmino(object: _112.QueryValidatorsResponseAmino): _112.QueryValidatorsResponse;
                toAmino(message: _112.QueryValidatorsResponse): _112.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _112.QueryValidatorsResponseAminoMsg): _112.QueryValidatorsResponse;
                toAminoMsg(message: _112.QueryValidatorsResponse): _112.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorsResponseProtoMsg): _112.QueryValidatorsResponse;
                toProto(message: _112.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorsResponse): _112.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _112.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryValidatorRequest;
                fromPartial(object: Partial<_112.QueryValidatorRequest>): _112.QueryValidatorRequest;
                fromAmino(object: _112.QueryValidatorRequestAmino): _112.QueryValidatorRequest;
                toAmino(message: _112.QueryValidatorRequest): _112.QueryValidatorRequestAmino;
                fromAminoMsg(object: _112.QueryValidatorRequestAminoMsg): _112.QueryValidatorRequest;
                toAminoMsg(message: _112.QueryValidatorRequest): _112.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorRequestProtoMsg): _112.QueryValidatorRequest;
                toProto(message: _112.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorRequest): _112.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _112.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryValidatorResponse;
                fromPartial(object: Partial<_112.QueryValidatorResponse>): _112.QueryValidatorResponse;
                fromAmino(object: _112.QueryValidatorResponseAmino): _112.QueryValidatorResponse;
                toAmino(message: _112.QueryValidatorResponse): _112.QueryValidatorResponseAmino;
                fromAminoMsg(object: _112.QueryValidatorResponseAminoMsg): _112.QueryValidatorResponse;
                toAminoMsg(message: _112.QueryValidatorResponse): _112.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorResponseProtoMsg): _112.QueryValidatorResponse;
                toProto(message: _112.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorResponse): _112.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _112.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_112.QueryValidatorDelegationsRequest>): _112.QueryValidatorDelegationsRequest;
                fromAmino(object: _112.QueryValidatorDelegationsRequestAmino): _112.QueryValidatorDelegationsRequest;
                toAmino(message: _112.QueryValidatorDelegationsRequest): _112.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _112.QueryValidatorDelegationsRequestAminoMsg): _112.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _112.QueryValidatorDelegationsRequest): _112.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorDelegationsRequestProtoMsg): _112.QueryValidatorDelegationsRequest;
                toProto(message: _112.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorDelegationsRequest): _112.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _112.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_112.QueryValidatorDelegationsResponse>): _112.QueryValidatorDelegationsResponse;
                fromAmino(object: _112.QueryValidatorDelegationsResponseAmino): _112.QueryValidatorDelegationsResponse;
                toAmino(message: _112.QueryValidatorDelegationsResponse): _112.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _112.QueryValidatorDelegationsResponseAminoMsg): _112.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _112.QueryValidatorDelegationsResponse): _112.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorDelegationsResponseProtoMsg): _112.QueryValidatorDelegationsResponse;
                toProto(message: _112.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorDelegationsResponse): _112.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _112.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_112.QueryValidatorUnbondingDelegationsRequest>): _112.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _112.QueryValidatorUnbondingDelegationsRequestAmino): _112.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _112.QueryValidatorUnbondingDelegationsRequest): _112.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _112.QueryValidatorUnbondingDelegationsRequestAminoMsg): _112.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _112.QueryValidatorUnbondingDelegationsRequest): _112.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorUnbondingDelegationsRequestProtoMsg): _112.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _112.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorUnbondingDelegationsRequest): _112.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _112.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_112.QueryValidatorUnbondingDelegationsResponse>): _112.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _112.QueryValidatorUnbondingDelegationsResponseAmino): _112.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _112.QueryValidatorUnbondingDelegationsResponse): _112.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _112.QueryValidatorUnbondingDelegationsResponseAminoMsg): _112.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _112.QueryValidatorUnbondingDelegationsResponse): _112.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorUnbondingDelegationsResponseProtoMsg): _112.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _112.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorUnbondingDelegationsResponse): _112.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _112.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDelegationRequest;
                fromPartial(object: Partial<_112.QueryDelegationRequest>): _112.QueryDelegationRequest;
                fromAmino(object: _112.QueryDelegationRequestAmino): _112.QueryDelegationRequest;
                toAmino(message: _112.QueryDelegationRequest): _112.QueryDelegationRequestAmino;
                fromAminoMsg(object: _112.QueryDelegationRequestAminoMsg): _112.QueryDelegationRequest;
                toAminoMsg(message: _112.QueryDelegationRequest): _112.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _112.QueryDelegationRequestProtoMsg): _112.QueryDelegationRequest;
                toProto(message: _112.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _112.QueryDelegationRequest): _112.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _112.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDelegationResponse;
                fromPartial(object: Partial<_112.QueryDelegationResponse>): _112.QueryDelegationResponse;
                fromAmino(object: _112.QueryDelegationResponseAmino): _112.QueryDelegationResponse;
                toAmino(message: _112.QueryDelegationResponse): _112.QueryDelegationResponseAmino;
                fromAminoMsg(object: _112.QueryDelegationResponseAminoMsg): _112.QueryDelegationResponse;
                toAminoMsg(message: _112.QueryDelegationResponse): _112.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _112.QueryDelegationResponseProtoMsg): _112.QueryDelegationResponse;
                toProto(message: _112.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _112.QueryDelegationResponse): _112.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _112.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_112.QueryUnbondingDelegationRequest>): _112.QueryUnbondingDelegationRequest;
                fromAmino(object: _112.QueryUnbondingDelegationRequestAmino): _112.QueryUnbondingDelegationRequest;
                toAmino(message: _112.QueryUnbondingDelegationRequest): _112.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _112.QueryUnbondingDelegationRequestAminoMsg): _112.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _112.QueryUnbondingDelegationRequest): _112.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _112.QueryUnbondingDelegationRequestProtoMsg): _112.QueryUnbondingDelegationRequest;
                toProto(message: _112.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _112.QueryUnbondingDelegationRequest): _112.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _112.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_112.QueryUnbondingDelegationResponse>): _112.QueryUnbondingDelegationResponse;
                fromAmino(object: _112.QueryUnbondingDelegationResponseAmino): _112.QueryUnbondingDelegationResponse;
                toAmino(message: _112.QueryUnbondingDelegationResponse): _112.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _112.QueryUnbondingDelegationResponseAminoMsg): _112.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _112.QueryUnbondingDelegationResponse): _112.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _112.QueryUnbondingDelegationResponseProtoMsg): _112.QueryUnbondingDelegationResponse;
                toProto(message: _112.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _112.QueryUnbondingDelegationResponse): _112.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_112.QueryDelegatorDelegationsRequest>): _112.QueryDelegatorDelegationsRequest;
                fromAmino(object: _112.QueryDelegatorDelegationsRequestAmino): _112.QueryDelegatorDelegationsRequest;
                toAmino(message: _112.QueryDelegatorDelegationsRequest): _112.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _112.QueryDelegatorDelegationsRequestAminoMsg): _112.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _112.QueryDelegatorDelegationsRequest): _112.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorDelegationsRequestProtoMsg): _112.QueryDelegatorDelegationsRequest;
                toProto(message: _112.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorDelegationsRequest): _112.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_112.QueryDelegatorDelegationsResponse>): _112.QueryDelegatorDelegationsResponse;
                fromAmino(object: _112.QueryDelegatorDelegationsResponseAmino): _112.QueryDelegatorDelegationsResponse;
                toAmino(message: _112.QueryDelegatorDelegationsResponse): _112.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _112.QueryDelegatorDelegationsResponseAminoMsg): _112.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _112.QueryDelegatorDelegationsResponse): _112.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorDelegationsResponseProtoMsg): _112.QueryDelegatorDelegationsResponse;
                toProto(message: _112.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorDelegationsResponse): _112.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_112.QueryDelegatorUnbondingDelegationsRequest>): _112.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _112.QueryDelegatorUnbondingDelegationsRequestAmino): _112.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _112.QueryDelegatorUnbondingDelegationsRequest): _112.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _112.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _112.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _112.QueryDelegatorUnbondingDelegationsRequest): _112.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _112.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _112.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorUnbondingDelegationsRequest): _112.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_112.QueryDelegatorUnbondingDelegationsResponse>): _112.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _112.QueryDelegatorUnbondingDelegationsResponseAmino): _112.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _112.QueryDelegatorUnbondingDelegationsResponse): _112.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _112.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _112.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _112.QueryDelegatorUnbondingDelegationsResponse): _112.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _112.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _112.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorUnbondingDelegationsResponse): _112.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _112.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryRedelegationsRequest;
                fromPartial(object: Partial<_112.QueryRedelegationsRequest>): _112.QueryRedelegationsRequest;
                fromAmino(object: _112.QueryRedelegationsRequestAmino): _112.QueryRedelegationsRequest;
                toAmino(message: _112.QueryRedelegationsRequest): _112.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _112.QueryRedelegationsRequestAminoMsg): _112.QueryRedelegationsRequest;
                toAminoMsg(message: _112.QueryRedelegationsRequest): _112.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryRedelegationsRequestProtoMsg): _112.QueryRedelegationsRequest;
                toProto(message: _112.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryRedelegationsRequest): _112.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _112.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryRedelegationsResponse;
                fromPartial(object: Partial<_112.QueryRedelegationsResponse>): _112.QueryRedelegationsResponse;
                fromAmino(object: _112.QueryRedelegationsResponseAmino): _112.QueryRedelegationsResponse;
                toAmino(message: _112.QueryRedelegationsResponse): _112.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _112.QueryRedelegationsResponseAminoMsg): _112.QueryRedelegationsResponse;
                toAminoMsg(message: _112.QueryRedelegationsResponse): _112.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryRedelegationsResponseProtoMsg): _112.QueryRedelegationsResponse;
                toProto(message: _112.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryRedelegationsResponse): _112.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_112.QueryDelegatorValidatorsRequest>): _112.QueryDelegatorValidatorsRequest;
                fromAmino(object: _112.QueryDelegatorValidatorsRequestAmino): _112.QueryDelegatorValidatorsRequest;
                toAmino(message: _112.QueryDelegatorValidatorsRequest): _112.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _112.QueryDelegatorValidatorsRequestAminoMsg): _112.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _112.QueryDelegatorValidatorsRequest): _112.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorValidatorsRequestProtoMsg): _112.QueryDelegatorValidatorsRequest;
                toProto(message: _112.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorValidatorsRequest): _112.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_112.QueryDelegatorValidatorsResponse>): _112.QueryDelegatorValidatorsResponse;
                fromAmino(object: _112.QueryDelegatorValidatorsResponseAmino): _112.QueryDelegatorValidatorsResponse;
                toAmino(message: _112.QueryDelegatorValidatorsResponse): _112.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _112.QueryDelegatorValidatorsResponseAminoMsg): _112.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _112.QueryDelegatorValidatorsResponse): _112.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorValidatorsResponseProtoMsg): _112.QueryDelegatorValidatorsResponse;
                toProto(message: _112.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorValidatorsResponse): _112.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_112.QueryDelegatorValidatorRequest>): _112.QueryDelegatorValidatorRequest;
                fromAmino(object: _112.QueryDelegatorValidatorRequestAmino): _112.QueryDelegatorValidatorRequest;
                toAmino(message: _112.QueryDelegatorValidatorRequest): _112.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _112.QueryDelegatorValidatorRequestAminoMsg): _112.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _112.QueryDelegatorValidatorRequest): _112.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorValidatorRequestProtoMsg): _112.QueryDelegatorValidatorRequest;
                toProto(message: _112.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorValidatorRequest): _112.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_112.QueryDelegatorValidatorResponse>): _112.QueryDelegatorValidatorResponse;
                fromAmino(object: _112.QueryDelegatorValidatorResponseAmino): _112.QueryDelegatorValidatorResponse;
                toAmino(message: _112.QueryDelegatorValidatorResponse): _112.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _112.QueryDelegatorValidatorResponseAminoMsg): _112.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _112.QueryDelegatorValidatorResponse): _112.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorValidatorResponseProtoMsg): _112.QueryDelegatorValidatorResponse;
                toProto(message: _112.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorValidatorResponse): _112.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _112.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_112.QueryHistoricalInfoRequest>): _112.QueryHistoricalInfoRequest;
                fromAmino(object: _112.QueryHistoricalInfoRequestAmino): _112.QueryHistoricalInfoRequest;
                toAmino(message: _112.QueryHistoricalInfoRequest): _112.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _112.QueryHistoricalInfoRequestAminoMsg): _112.QueryHistoricalInfoRequest;
                toAminoMsg(message: _112.QueryHistoricalInfoRequest): _112.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _112.QueryHistoricalInfoRequestProtoMsg): _112.QueryHistoricalInfoRequest;
                toProto(message: _112.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _112.QueryHistoricalInfoRequest): _112.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _112.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_112.QueryHistoricalInfoResponse>): _112.QueryHistoricalInfoResponse;
                fromAmino(object: _112.QueryHistoricalInfoResponseAmino): _112.QueryHistoricalInfoResponse;
                toAmino(message: _112.QueryHistoricalInfoResponse): _112.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _112.QueryHistoricalInfoResponseAminoMsg): _112.QueryHistoricalInfoResponse;
                toAminoMsg(message: _112.QueryHistoricalInfoResponse): _112.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _112.QueryHistoricalInfoResponseProtoMsg): _112.QueryHistoricalInfoResponse;
                toProto(message: _112.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _112.QueryHistoricalInfoResponse): _112.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _112.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _112.QueryPoolRequest;
                fromPartial(_: Partial<_112.QueryPoolRequest>): _112.QueryPoolRequest;
                fromAmino(_: _112.QueryPoolRequestAmino): _112.QueryPoolRequest;
                toAmino(_: _112.QueryPoolRequest): _112.QueryPoolRequestAmino;
                fromAminoMsg(object: _112.QueryPoolRequestAminoMsg): _112.QueryPoolRequest;
                toAminoMsg(message: _112.QueryPoolRequest): _112.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _112.QueryPoolRequestProtoMsg): _112.QueryPoolRequest;
                toProto(message: _112.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _112.QueryPoolRequest): _112.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _112.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryPoolResponse;
                fromPartial(object: Partial<_112.QueryPoolResponse>): _112.QueryPoolResponse;
                fromAmino(object: _112.QueryPoolResponseAmino): _112.QueryPoolResponse;
                toAmino(message: _112.QueryPoolResponse): _112.QueryPoolResponseAmino;
                fromAminoMsg(object: _112.QueryPoolResponseAminoMsg): _112.QueryPoolResponse;
                toAminoMsg(message: _112.QueryPoolResponse): _112.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _112.QueryPoolResponseProtoMsg): _112.QueryPoolResponse;
                toProto(message: _112.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _112.QueryPoolResponse): _112.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _112.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _112.QueryParamsRequest;
                fromPartial(_: Partial<_112.QueryParamsRequest>): _112.QueryParamsRequest;
                fromAmino(_: _112.QueryParamsRequestAmino): _112.QueryParamsRequest;
                toAmino(_: _112.QueryParamsRequest): _112.QueryParamsRequestAmino;
                fromAminoMsg(object: _112.QueryParamsRequestAminoMsg): _112.QueryParamsRequest;
                toAminoMsg(message: _112.QueryParamsRequest): _112.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryParamsRequestProtoMsg): _112.QueryParamsRequest;
                toProto(message: _112.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryParamsRequest): _112.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _112.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryParamsResponse;
                fromPartial(object: Partial<_112.QueryParamsResponse>): _112.QueryParamsResponse;
                fromAmino(object: _112.QueryParamsResponseAmino): _112.QueryParamsResponse;
                toAmino(message: _112.QueryParamsResponse): _112.QueryParamsResponseAmino;
                fromAminoMsg(object: _112.QueryParamsResponseAminoMsg): _112.QueryParamsResponse;
                toAminoMsg(message: _112.QueryParamsResponse): _112.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryParamsResponseProtoMsg): _112.QueryParamsResponse;
                toProto(message: _112.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryParamsResponse): _112.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _111.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.GenesisState;
                fromPartial(object: Partial<_111.GenesisState>): _111.GenesisState;
                fromAmino(object: _111.GenesisStateAmino): _111.GenesisState;
                toAmino(message: _111.GenesisState): _111.GenesisStateAmino;
                fromAminoMsg(object: _111.GenesisStateAminoMsg): _111.GenesisState;
                toAminoMsg(message: _111.GenesisState): _111.GenesisStateAminoMsg;
                fromProtoMsg(message: _111.GenesisStateProtoMsg): _111.GenesisState;
                toProto(message: _111.GenesisState): Uint8Array;
                toProtoMsg(message: _111.GenesisState): _111.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _111.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.LastValidatorPower;
                fromPartial(object: Partial<_111.LastValidatorPower>): _111.LastValidatorPower;
                fromAmino(object: _111.LastValidatorPowerAmino): _111.LastValidatorPower;
                toAmino(message: _111.LastValidatorPower): _111.LastValidatorPowerAmino;
                fromAminoMsg(object: _111.LastValidatorPowerAminoMsg): _111.LastValidatorPower;
                toAminoMsg(message: _111.LastValidatorPower): _111.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _111.LastValidatorPowerProtoMsg): _111.LastValidatorPower;
                toProto(message: _111.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _111.LastValidatorPower): _111.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _110.AuthorizationType;
            authorizationTypeToJSON(object: _110.AuthorizationType): string;
            AuthorizationType: typeof _110.AuthorizationType;
            AuthorizationTypeSDKType: typeof _110.AuthorizationType;
            AuthorizationTypeAmino: typeof _110.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _110.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.StakeAuthorization;
                fromPartial(object: Partial<_110.StakeAuthorization>): _110.StakeAuthorization;
                fromAmino(object: _110.StakeAuthorizationAmino): _110.StakeAuthorization;
                toAmino(message: _110.StakeAuthorization): _110.StakeAuthorizationAmino;
                fromAminoMsg(object: _110.StakeAuthorizationAminoMsg): _110.StakeAuthorization;
                toAminoMsg(message: _110.StakeAuthorization): _110.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _110.StakeAuthorizationProtoMsg): _110.StakeAuthorization;
                toProto(message: _110.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _110.StakeAuthorization): _110.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _110.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.StakeAuthorization_Validators;
                fromPartial(object: Partial<_110.StakeAuthorization_Validators>): _110.StakeAuthorization_Validators;
                fromAmino(object: _110.StakeAuthorization_ValidatorsAmino): _110.StakeAuthorization_Validators;
                toAmino(message: _110.StakeAuthorization_Validators): _110.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _110.StakeAuthorization_ValidatorsAminoMsg): _110.StakeAuthorization_Validators;
                toAminoMsg(message: _110.StakeAuthorization_Validators): _110.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _110.StakeAuthorization_ValidatorsProtoMsg): _110.StakeAuthorization_Validators;
                toProto(message: _110.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _110.StakeAuthorization_Validators): _110.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _115.SignMode;
                signModeToJSON(object: _115.SignMode): string;
                SignMode: typeof _115.SignMode;
                SignModeSDKType: typeof _115.SignMode;
                SignModeAmino: typeof _115.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _115.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.SignatureDescriptors;
                    fromPartial(object: Partial<_115.SignatureDescriptors>): _115.SignatureDescriptors;
                    fromAmino(object: _115.SignatureDescriptorsAmino): _115.SignatureDescriptors;
                    toAmino(message: _115.SignatureDescriptors): _115.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _115.SignatureDescriptorsAminoMsg): _115.SignatureDescriptors;
                    toAminoMsg(message: _115.SignatureDescriptors): _115.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _115.SignatureDescriptorsProtoMsg): _115.SignatureDescriptors;
                    toProto(message: _115.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _115.SignatureDescriptors): _115.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _115.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.SignatureDescriptor;
                    fromPartial(object: Partial<_115.SignatureDescriptor>): _115.SignatureDescriptor;
                    fromAmino(object: _115.SignatureDescriptorAmino): _115.SignatureDescriptor;
                    toAmino(message: _115.SignatureDescriptor): _115.SignatureDescriptorAmino;
                    fromAminoMsg(object: _115.SignatureDescriptorAminoMsg): _115.SignatureDescriptor;
                    toAminoMsg(message: _115.SignatureDescriptor): _115.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _115.SignatureDescriptorProtoMsg): _115.SignatureDescriptor;
                    toProto(message: _115.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _115.SignatureDescriptor): _115.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _115.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_115.SignatureDescriptor_Data>): _115.SignatureDescriptor_Data;
                    fromAmino(object: _115.SignatureDescriptor_DataAmino): _115.SignatureDescriptor_Data;
                    toAmino(message: _115.SignatureDescriptor_Data): _115.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _115.SignatureDescriptor_DataAminoMsg): _115.SignatureDescriptor_Data;
                    toAminoMsg(message: _115.SignatureDescriptor_Data): _115.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _115.SignatureDescriptor_DataProtoMsg): _115.SignatureDescriptor_Data;
                    toProto(message: _115.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _115.SignatureDescriptor_Data): _115.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _115.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_115.SignatureDescriptor_Data_Single>): _115.SignatureDescriptor_Data_Single;
                    fromAmino(object: _115.SignatureDescriptor_Data_SingleAmino): _115.SignatureDescriptor_Data_Single;
                    toAmino(message: _115.SignatureDescriptor_Data_Single): _115.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _115.SignatureDescriptor_Data_SingleAminoMsg): _115.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _115.SignatureDescriptor_Data_Single): _115.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _115.SignatureDescriptor_Data_SingleProtoMsg): _115.SignatureDescriptor_Data_Single;
                    toProto(message: _115.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _115.SignatureDescriptor_Data_Single): _115.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _115.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_115.SignatureDescriptor_Data_Multi>): _115.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _115.SignatureDescriptor_Data_MultiAmino): _115.SignatureDescriptor_Data_Multi;
                    toAmino(message: _115.SignatureDescriptor_Data_Multi): _115.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _115.SignatureDescriptor_Data_MultiAminoMsg): _115.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _115.SignatureDescriptor_Data_Multi): _115.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _115.SignatureDescriptor_Data_MultiProtoMsg): _115.SignatureDescriptor_Data_Multi;
                    toProto(message: _115.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _115.SignatureDescriptor_Data_Multi): _115.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _240.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _116.SimulateRequest): Promise<_116.SimulateResponse>;
                getTx(request: _116.GetTxRequest): Promise<_116.GetTxResponse>;
                broadcastTx(request: _116.BroadcastTxRequest): Promise<_116.BroadcastTxResponse>;
                getTxsEvent(request: _116.GetTxsEventRequest): Promise<_116.GetTxsEventResponse>;
                getBlockWithTxs(request: _116.GetBlockWithTxsRequest): Promise<_116.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _226.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _117.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.Tx;
                fromPartial(object: Partial<_117.Tx>): _117.Tx;
                fromAmino(object: _117.TxAmino): _117.Tx;
                toAmino(message: _117.Tx): _117.TxAmino;
                fromAminoMsg(object: _117.TxAminoMsg): _117.Tx;
                toAminoMsg(message: _117.Tx): _117.TxAminoMsg;
                fromProtoMsg(message: _117.TxProtoMsg): _117.Tx;
                toProto(message: _117.Tx): Uint8Array;
                toProtoMsg(message: _117.Tx): _117.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _117.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TxRaw;
                fromPartial(object: Partial<_117.TxRaw>): _117.TxRaw;
                fromAmino(object: _117.TxRawAmino): _117.TxRaw;
                toAmino(message: _117.TxRaw): _117.TxRawAmino;
                fromAminoMsg(object: _117.TxRawAminoMsg): _117.TxRaw;
                toAminoMsg(message: _117.TxRaw): _117.TxRawAminoMsg;
                fromProtoMsg(message: _117.TxRawProtoMsg): _117.TxRaw;
                toProto(message: _117.TxRaw): Uint8Array;
                toProtoMsg(message: _117.TxRaw): _117.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _117.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.SignDoc;
                fromPartial(object: Partial<_117.SignDoc>): _117.SignDoc;
                fromAmino(object: _117.SignDocAmino): _117.SignDoc;
                toAmino(message: _117.SignDoc): _117.SignDocAmino;
                fromAminoMsg(object: _117.SignDocAminoMsg): _117.SignDoc;
                toAminoMsg(message: _117.SignDoc): _117.SignDocAminoMsg;
                fromProtoMsg(message: _117.SignDocProtoMsg): _117.SignDoc;
                toProto(message: _117.SignDoc): Uint8Array;
                toProtoMsg(message: _117.SignDoc): _117.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _117.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TxBody;
                fromPartial(object: Partial<_117.TxBody>): _117.TxBody;
                fromAmino(object: _117.TxBodyAmino): _117.TxBody;
                toAmino(message: _117.TxBody): _117.TxBodyAmino;
                fromAminoMsg(object: _117.TxBodyAminoMsg): _117.TxBody;
                toAminoMsg(message: _117.TxBody): _117.TxBodyAminoMsg;
                fromProtoMsg(message: _117.TxBodyProtoMsg): _117.TxBody;
                toProto(message: _117.TxBody): Uint8Array;
                toProtoMsg(message: _117.TxBody): _117.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _117.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.AuthInfo;
                fromPartial(object: Partial<_117.AuthInfo>): _117.AuthInfo;
                fromAmino(object: _117.AuthInfoAmino): _117.AuthInfo;
                toAmino(message: _117.AuthInfo): _117.AuthInfoAmino;
                fromAminoMsg(object: _117.AuthInfoAminoMsg): _117.AuthInfo;
                toAminoMsg(message: _117.AuthInfo): _117.AuthInfoAminoMsg;
                fromProtoMsg(message: _117.AuthInfoProtoMsg): _117.AuthInfo;
                toProto(message: _117.AuthInfo): Uint8Array;
                toProtoMsg(message: _117.AuthInfo): _117.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _117.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.SignerInfo;
                fromPartial(object: Partial<_117.SignerInfo>): _117.SignerInfo;
                fromAmino(object: _117.SignerInfoAmino): _117.SignerInfo;
                toAmino(message: _117.SignerInfo): _117.SignerInfoAmino;
                fromAminoMsg(object: _117.SignerInfoAminoMsg): _117.SignerInfo;
                toAminoMsg(message: _117.SignerInfo): _117.SignerInfoAminoMsg;
                fromProtoMsg(message: _117.SignerInfoProtoMsg): _117.SignerInfo;
                toProto(message: _117.SignerInfo): Uint8Array;
                toProtoMsg(message: _117.SignerInfo): _117.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _117.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.ModeInfo;
                fromPartial(object: Partial<_117.ModeInfo>): _117.ModeInfo;
                fromAmino(object: _117.ModeInfoAmino): _117.ModeInfo;
                toAmino(message: _117.ModeInfo): _117.ModeInfoAmino;
                fromAminoMsg(object: _117.ModeInfoAminoMsg): _117.ModeInfo;
                toAminoMsg(message: _117.ModeInfo): _117.ModeInfoAminoMsg;
                fromProtoMsg(message: _117.ModeInfoProtoMsg): _117.ModeInfo;
                toProto(message: _117.ModeInfo): Uint8Array;
                toProtoMsg(message: _117.ModeInfo): _117.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _117.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.ModeInfo_Single;
                fromPartial(object: Partial<_117.ModeInfo_Single>): _117.ModeInfo_Single;
                fromAmino(object: _117.ModeInfo_SingleAmino): _117.ModeInfo_Single;
                toAmino(message: _117.ModeInfo_Single): _117.ModeInfo_SingleAmino;
                fromAminoMsg(object: _117.ModeInfo_SingleAminoMsg): _117.ModeInfo_Single;
                toAminoMsg(message: _117.ModeInfo_Single): _117.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _117.ModeInfo_SingleProtoMsg): _117.ModeInfo_Single;
                toProto(message: _117.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _117.ModeInfo_Single): _117.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _117.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.ModeInfo_Multi;
                fromPartial(object: Partial<_117.ModeInfo_Multi>): _117.ModeInfo_Multi;
                fromAmino(object: _117.ModeInfo_MultiAmino): _117.ModeInfo_Multi;
                toAmino(message: _117.ModeInfo_Multi): _117.ModeInfo_MultiAmino;
                fromAminoMsg(object: _117.ModeInfo_MultiAminoMsg): _117.ModeInfo_Multi;
                toAminoMsg(message: _117.ModeInfo_Multi): _117.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _117.ModeInfo_MultiProtoMsg): _117.ModeInfo_Multi;
                toProto(message: _117.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _117.ModeInfo_Multi): _117.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _117.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.Fee;
                fromPartial(object: Partial<_117.Fee>): _117.Fee;
                fromAmino(object: _117.FeeAmino): _117.Fee;
                toAmino(message: _117.Fee): _117.FeeAmino;
                fromAminoMsg(object: _117.FeeAminoMsg): _117.Fee;
                toAminoMsg(message: _117.Fee): _117.FeeAminoMsg;
                fromProtoMsg(message: _117.FeeProtoMsg): _117.Fee;
                toProto(message: _117.Fee): Uint8Array;
                toProtoMsg(message: _117.Fee): _117.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _116.OrderBy;
            orderByToJSON(object: _116.OrderBy): string;
            broadcastModeFromJSON(object: any): _116.BroadcastMode;
            broadcastModeToJSON(object: _116.BroadcastMode): string;
            OrderBy: typeof _116.OrderBy;
            OrderBySDKType: typeof _116.OrderBy;
            OrderByAmino: typeof _116.OrderBy;
            BroadcastMode: typeof _116.BroadcastMode;
            BroadcastModeSDKType: typeof _116.BroadcastMode;
            BroadcastModeAmino: typeof _116.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _116.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.GetTxsEventRequest;
                fromPartial(object: Partial<_116.GetTxsEventRequest>): _116.GetTxsEventRequest;
                fromAmino(object: _116.GetTxsEventRequestAmino): _116.GetTxsEventRequest;
                toAmino(message: _116.GetTxsEventRequest): _116.GetTxsEventRequestAmino;
                fromAminoMsg(object: _116.GetTxsEventRequestAminoMsg): _116.GetTxsEventRequest;
                toAminoMsg(message: _116.GetTxsEventRequest): _116.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _116.GetTxsEventRequestProtoMsg): _116.GetTxsEventRequest;
                toProto(message: _116.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _116.GetTxsEventRequest): _116.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _116.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.GetTxsEventResponse;
                fromPartial(object: Partial<_116.GetTxsEventResponse>): _116.GetTxsEventResponse;
                fromAmino(object: _116.GetTxsEventResponseAmino): _116.GetTxsEventResponse;
                toAmino(message: _116.GetTxsEventResponse): _116.GetTxsEventResponseAmino;
                fromAminoMsg(object: _116.GetTxsEventResponseAminoMsg): _116.GetTxsEventResponse;
                toAminoMsg(message: _116.GetTxsEventResponse): _116.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _116.GetTxsEventResponseProtoMsg): _116.GetTxsEventResponse;
                toProto(message: _116.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _116.GetTxsEventResponse): _116.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _116.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.BroadcastTxRequest;
                fromPartial(object: Partial<_116.BroadcastTxRequest>): _116.BroadcastTxRequest;
                fromAmino(object: _116.BroadcastTxRequestAmino): _116.BroadcastTxRequest;
                toAmino(message: _116.BroadcastTxRequest): _116.BroadcastTxRequestAmino;
                fromAminoMsg(object: _116.BroadcastTxRequestAminoMsg): _116.BroadcastTxRequest;
                toAminoMsg(message: _116.BroadcastTxRequest): _116.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _116.BroadcastTxRequestProtoMsg): _116.BroadcastTxRequest;
                toProto(message: _116.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _116.BroadcastTxRequest): _116.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _116.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.BroadcastTxResponse;
                fromPartial(object: Partial<_116.BroadcastTxResponse>): _116.BroadcastTxResponse;
                fromAmino(object: _116.BroadcastTxResponseAmino): _116.BroadcastTxResponse;
                toAmino(message: _116.BroadcastTxResponse): _116.BroadcastTxResponseAmino;
                fromAminoMsg(object: _116.BroadcastTxResponseAminoMsg): _116.BroadcastTxResponse;
                toAminoMsg(message: _116.BroadcastTxResponse): _116.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _116.BroadcastTxResponseProtoMsg): _116.BroadcastTxResponse;
                toProto(message: _116.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _116.BroadcastTxResponse): _116.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _116.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.SimulateRequest;
                fromPartial(object: Partial<_116.SimulateRequest>): _116.SimulateRequest;
                fromAmino(object: _116.SimulateRequestAmino): _116.SimulateRequest;
                toAmino(message: _116.SimulateRequest): _116.SimulateRequestAmino;
                fromAminoMsg(object: _116.SimulateRequestAminoMsg): _116.SimulateRequest;
                toAminoMsg(message: _116.SimulateRequest): _116.SimulateRequestAminoMsg;
                fromProtoMsg(message: _116.SimulateRequestProtoMsg): _116.SimulateRequest;
                toProto(message: _116.SimulateRequest): Uint8Array;
                toProtoMsg(message: _116.SimulateRequest): _116.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _116.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.SimulateResponse;
                fromPartial(object: Partial<_116.SimulateResponse>): _116.SimulateResponse;
                fromAmino(object: _116.SimulateResponseAmino): _116.SimulateResponse;
                toAmino(message: _116.SimulateResponse): _116.SimulateResponseAmino;
                fromAminoMsg(object: _116.SimulateResponseAminoMsg): _116.SimulateResponse;
                toAminoMsg(message: _116.SimulateResponse): _116.SimulateResponseAminoMsg;
                fromProtoMsg(message: _116.SimulateResponseProtoMsg): _116.SimulateResponse;
                toProto(message: _116.SimulateResponse): Uint8Array;
                toProtoMsg(message: _116.SimulateResponse): _116.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _116.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.GetTxRequest;
                fromPartial(object: Partial<_116.GetTxRequest>): _116.GetTxRequest;
                fromAmino(object: _116.GetTxRequestAmino): _116.GetTxRequest;
                toAmino(message: _116.GetTxRequest): _116.GetTxRequestAmino;
                fromAminoMsg(object: _116.GetTxRequestAminoMsg): _116.GetTxRequest;
                toAminoMsg(message: _116.GetTxRequest): _116.GetTxRequestAminoMsg;
                fromProtoMsg(message: _116.GetTxRequestProtoMsg): _116.GetTxRequest;
                toProto(message: _116.GetTxRequest): Uint8Array;
                toProtoMsg(message: _116.GetTxRequest): _116.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _116.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.GetTxResponse;
                fromPartial(object: Partial<_116.GetTxResponse>): _116.GetTxResponse;
                fromAmino(object: _116.GetTxResponseAmino): _116.GetTxResponse;
                toAmino(message: _116.GetTxResponse): _116.GetTxResponseAmino;
                fromAminoMsg(object: _116.GetTxResponseAminoMsg): _116.GetTxResponse;
                toAminoMsg(message: _116.GetTxResponse): _116.GetTxResponseAminoMsg;
                fromProtoMsg(message: _116.GetTxResponseProtoMsg): _116.GetTxResponse;
                toProto(message: _116.GetTxResponse): Uint8Array;
                toProtoMsg(message: _116.GetTxResponse): _116.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _116.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_116.GetBlockWithTxsRequest>): _116.GetBlockWithTxsRequest;
                fromAmino(object: _116.GetBlockWithTxsRequestAmino): _116.GetBlockWithTxsRequest;
                toAmino(message: _116.GetBlockWithTxsRequest): _116.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _116.GetBlockWithTxsRequestAminoMsg): _116.GetBlockWithTxsRequest;
                toAminoMsg(message: _116.GetBlockWithTxsRequest): _116.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _116.GetBlockWithTxsRequestProtoMsg): _116.GetBlockWithTxsRequest;
                toProto(message: _116.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _116.GetBlockWithTxsRequest): _116.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _116.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_116.GetBlockWithTxsResponse>): _116.GetBlockWithTxsResponse;
                fromAmino(object: _116.GetBlockWithTxsResponseAmino): _116.GetBlockWithTxsResponse;
                toAmino(message: _116.GetBlockWithTxsResponse): _116.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _116.GetBlockWithTxsResponseAminoMsg): _116.GetBlockWithTxsResponse;
                toAminoMsg(message: _116.GetBlockWithTxsResponse): _116.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _116.GetBlockWithTxsResponseProtoMsg): _116.GetBlockWithTxsResponse;
                toProto(message: _116.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _116.GetBlockWithTxsResponse): _116.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _241.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _118.QueryCurrentPlanRequest): Promise<_118.QueryCurrentPlanResponse>;
                appliedPlan(request: _118.QueryAppliedPlanRequest): Promise<_118.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _118.QueryUpgradedConsensusStateRequest): Promise<_118.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _118.QueryModuleVersionsRequest): Promise<_118.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _227.LCDQueryClient;
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
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _118.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _118.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_118.QueryCurrentPlanRequest>): _118.QueryCurrentPlanRequest;
                fromAmino(_: _118.QueryCurrentPlanRequestAmino): _118.QueryCurrentPlanRequest;
                toAmino(_: _118.QueryCurrentPlanRequest): _118.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _118.QueryCurrentPlanRequestAminoMsg): _118.QueryCurrentPlanRequest;
                toAminoMsg(message: _118.QueryCurrentPlanRequest): _118.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _118.QueryCurrentPlanRequestProtoMsg): _118.QueryCurrentPlanRequest;
                toProto(message: _118.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _118.QueryCurrentPlanRequest): _118.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _118.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_118.QueryCurrentPlanResponse>): _118.QueryCurrentPlanResponse;
                fromAmino(object: _118.QueryCurrentPlanResponseAmino): _118.QueryCurrentPlanResponse;
                toAmino(message: _118.QueryCurrentPlanResponse): _118.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _118.QueryCurrentPlanResponseAminoMsg): _118.QueryCurrentPlanResponse;
                toAminoMsg(message: _118.QueryCurrentPlanResponse): _118.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _118.QueryCurrentPlanResponseProtoMsg): _118.QueryCurrentPlanResponse;
                toProto(message: _118.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _118.QueryCurrentPlanResponse): _118.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _118.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_118.QueryAppliedPlanRequest>): _118.QueryAppliedPlanRequest;
                fromAmino(object: _118.QueryAppliedPlanRequestAmino): _118.QueryAppliedPlanRequest;
                toAmino(message: _118.QueryAppliedPlanRequest): _118.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _118.QueryAppliedPlanRequestAminoMsg): _118.QueryAppliedPlanRequest;
                toAminoMsg(message: _118.QueryAppliedPlanRequest): _118.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _118.QueryAppliedPlanRequestProtoMsg): _118.QueryAppliedPlanRequest;
                toProto(message: _118.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _118.QueryAppliedPlanRequest): _118.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _118.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_118.QueryAppliedPlanResponse>): _118.QueryAppliedPlanResponse;
                fromAmino(object: _118.QueryAppliedPlanResponseAmino): _118.QueryAppliedPlanResponse;
                toAmino(message: _118.QueryAppliedPlanResponse): _118.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _118.QueryAppliedPlanResponseAminoMsg): _118.QueryAppliedPlanResponse;
                toAminoMsg(message: _118.QueryAppliedPlanResponse): _118.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _118.QueryAppliedPlanResponseProtoMsg): _118.QueryAppliedPlanResponse;
                toProto(message: _118.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _118.QueryAppliedPlanResponse): _118.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _118.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_118.QueryUpgradedConsensusStateRequest>): _118.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _118.QueryUpgradedConsensusStateRequestAmino): _118.QueryUpgradedConsensusStateRequest;
                toAmino(message: _118.QueryUpgradedConsensusStateRequest): _118.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _118.QueryUpgradedConsensusStateRequestAminoMsg): _118.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _118.QueryUpgradedConsensusStateRequest): _118.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _118.QueryUpgradedConsensusStateRequestProtoMsg): _118.QueryUpgradedConsensusStateRequest;
                toProto(message: _118.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _118.QueryUpgradedConsensusStateRequest): _118.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _118.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_118.QueryUpgradedConsensusStateResponse>): _118.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _118.QueryUpgradedConsensusStateResponseAmino): _118.QueryUpgradedConsensusStateResponse;
                toAmino(message: _118.QueryUpgradedConsensusStateResponse): _118.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _118.QueryUpgradedConsensusStateResponseAminoMsg): _118.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _118.QueryUpgradedConsensusStateResponse): _118.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _118.QueryUpgradedConsensusStateResponseProtoMsg): _118.QueryUpgradedConsensusStateResponse;
                toProto(message: _118.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _118.QueryUpgradedConsensusStateResponse): _118.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _118.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_118.QueryModuleVersionsRequest>): _118.QueryModuleVersionsRequest;
                fromAmino(object: _118.QueryModuleVersionsRequestAmino): _118.QueryModuleVersionsRequest;
                toAmino(message: _118.QueryModuleVersionsRequest): _118.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _118.QueryModuleVersionsRequestAminoMsg): _118.QueryModuleVersionsRequest;
                toAminoMsg(message: _118.QueryModuleVersionsRequest): _118.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _118.QueryModuleVersionsRequestProtoMsg): _118.QueryModuleVersionsRequest;
                toProto(message: _118.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _118.QueryModuleVersionsRequest): _118.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _118.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_118.QueryModuleVersionsResponse>): _118.QueryModuleVersionsResponse;
                fromAmino(object: _118.QueryModuleVersionsResponseAmino): _118.QueryModuleVersionsResponse;
                toAmino(message: _118.QueryModuleVersionsResponse): _118.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _118.QueryModuleVersionsResponseAminoMsg): _118.QueryModuleVersionsResponse;
                toAminoMsg(message: _118.QueryModuleVersionsResponse): _118.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _118.QueryModuleVersionsResponseProtoMsg): _118.QueryModuleVersionsResponse;
                toProto(message: _118.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _118.QueryModuleVersionsResponse): _118.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _251.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _120.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _120.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _120.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _120.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _120.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _120.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _120.MsgCreateVestingAccount) => _120.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _120.MsgCreateVestingAccountAmino) => _120.MsgCreateVestingAccount;
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
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _242.MsgClientImpl;
                };
                bank: {
                    v1beta1: _243.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _244.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _245.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _246.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _247.MsgClientImpl;
                };
                gov: {
                    v1beta1: _248.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _249.MsgClientImpl;
                };
                staking: {
                    v1beta1: _250.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _251.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _55.QueryAccountsRequest): Promise<_55.QueryAccountsResponse>;
                        account(request: _55.QueryAccountRequest): Promise<_55.QueryAccountResponse>;
                        params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _59.QueryGrantsRequest): Promise<_59.QueryGrantsResponse>;
                        granterGrants(request: _59.QueryGranterGrantsRequest): Promise<_59.QueryGranterGrantsResponse>;
                        granteeGrants(request: _59.QueryGranteeGrantsRequest): Promise<_59.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _64.QueryBalanceRequest): Promise<_64.QueryBalanceResponse>;
                        allBalances(request: _64.QueryAllBalancesRequest): Promise<_64.QueryAllBalancesResponse>;
                        spendableBalances(request: _64.QuerySpendableBalancesRequest): Promise<_64.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _64.QueryTotalSupplyRequest): Promise<_64.QueryTotalSupplyResponse>;
                        supplyOf(request: _64.QuerySupplyOfRequest): Promise<_64.QuerySupplyOfResponse>;
                        params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                        denomMetadata(request: _64.QueryDenomMetadataRequest): Promise<_64.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _64.QueryDenomsMetadataRequest): Promise<_64.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _74.GetNodeInfoRequest): Promise<_74.GetNodeInfoResponse>;
                            getSyncing(request?: _74.GetSyncingRequest): Promise<_74.GetSyncingResponse>;
                            getLatestBlock(request?: _74.GetLatestBlockRequest): Promise<_74.GetLatestBlockResponse>;
                            getBlockByHeight(request: _74.GetBlockByHeightRequest): Promise<_74.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _74.GetLatestValidatorSetRequest): Promise<_74.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _74.GetValidatorSetByHeightRequest): Promise<_74.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _86.QueryParamsRequest): Promise<_86.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _86.QueryValidatorOutstandingRewardsRequest): Promise<_86.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _86.QueryValidatorCommissionRequest): Promise<_86.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _86.QueryValidatorSlashesRequest): Promise<_86.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _86.QueryDelegationRewardsRequest): Promise<_86.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _86.QueryDelegationTotalRewardsRequest): Promise<_86.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _86.QueryDelegatorValidatorsRequest): Promise<_86.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _86.QueryDelegatorWithdrawAddressRequest): Promise<_86.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _86.QueryCommunityPoolRequest): Promise<_86.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _90.QueryEvidenceRequest): Promise<_90.QueryEvidenceResponse>;
                        allEvidence(request?: _90.QueryAllEvidenceRequest): Promise<_90.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _94.QueryAllowanceRequest): Promise<_94.QueryAllowanceResponse>;
                        allowances(request: _94.QueryAllowancesRequest): Promise<_94.QueryAllowancesResponse>;
                        allowancesByGranter(request: _94.QueryAllowancesByGranterRequest): Promise<_94.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _99.QueryProposalRequest): Promise<_99.QueryProposalResponse>;
                        proposals(request: _99.QueryProposalsRequest): Promise<_99.QueryProposalsResponse>;
                        vote(request: _99.QueryVoteRequest): Promise<_99.QueryVoteResponse>;
                        votes(request: _99.QueryVotesRequest): Promise<_99.QueryVotesResponse>;
                        params(request: _99.QueryParamsRequest): Promise<_99.QueryParamsResponse>;
                        deposit(request: _99.QueryDepositRequest): Promise<_99.QueryDepositResponse>;
                        deposits(request: _99.QueryDepositsRequest): Promise<_99.QueryDepositsResponse>;
                        tallyResult(request: _99.QueryTallyResultRequest): Promise<_99.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                        inflation(request?: _103.QueryInflationRequest): Promise<_103.QueryInflationResponse>;
                        annualProvisions(request?: _103.QueryAnnualProvisionsRequest): Promise<_103.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                        signingInfo(request: _107.QuerySigningInfoRequest): Promise<_107.QuerySigningInfoResponse>;
                        signingInfos(request?: _107.QuerySigningInfosRequest): Promise<_107.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _112.QueryValidatorsRequest): Promise<_112.QueryValidatorsResponse>;
                        validator(request: _112.QueryValidatorRequest): Promise<_112.QueryValidatorResponse>;
                        validatorDelegations(request: _112.QueryValidatorDelegationsRequest): Promise<_112.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _112.QueryValidatorUnbondingDelegationsRequest): Promise<_112.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _112.QueryDelegationRequest): Promise<_112.QueryDelegationResponse>;
                        unbondingDelegation(request: _112.QueryUnbondingDelegationRequest): Promise<_112.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _112.QueryDelegatorDelegationsRequest): Promise<_112.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _112.QueryDelegatorUnbondingDelegationsRequest): Promise<_112.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _112.QueryRedelegationsRequest): Promise<_112.QueryRedelegationsResponse>;
                        delegatorValidators(request: _112.QueryDelegatorValidatorsRequest): Promise<_112.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _112.QueryDelegatorValidatorRequest): Promise<_112.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _112.QueryHistoricalInfoRequest): Promise<_112.QueryHistoricalInfoResponse>;
                        pool(request?: _112.QueryPoolRequest): Promise<_112.QueryPoolResponse>;
                        params(request?: _112.QueryParamsRequest): Promise<_112.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _116.SimulateRequest): Promise<_116.SimulateResponse>;
                        getTx(request: _116.GetTxRequest): Promise<_116.GetTxResponse>;
                        broadcastTx(request: _116.BroadcastTxRequest): Promise<_116.BroadcastTxResponse>;
                        getTxsEvent(request: _116.GetTxsEventRequest): Promise<_116.GetTxsEventResponse>;
                        getBlockWithTxs(request: _116.GetBlockWithTxsRequest): Promise<_116.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _118.QueryCurrentPlanRequest): Promise<_118.QueryCurrentPlanResponse>;
                        appliedPlan(request: _118.QueryAppliedPlanRequest): Promise<_118.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _118.QueryUpgradedConsensusStateRequest): Promise<_118.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _118.QueryModuleVersionsRequest): Promise<_118.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _214.LCDQueryClient;
                };
                authz: {
                    v1beta1: _215.LCDQueryClient;
                };
                bank: {
                    v1beta1: _216.LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: _217.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _218.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _219.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _220.LCDQueryClient;
                };
                gov: {
                    v1beta1: _221.LCDQueryClient;
                };
                mint: {
                    v1beta1: _222.LCDQueryClient;
                };
                params: {
                    v1beta1: _223.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _224.LCDQueryClient;
                };
                staking: {
                    v1beta1: _225.LCDQueryClient;
                };
                tx: {
                    v1beta1: _226.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _227.LCDQueryClient;
                };
            };
        }>;
    };
}
