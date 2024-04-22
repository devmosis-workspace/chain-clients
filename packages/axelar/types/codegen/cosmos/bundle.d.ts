import * as _72 from "./auth/v1beta1/auth";
import * as _73 from "./auth/v1beta1/genesis";
import * as _74 from "./auth/v1beta1/query";
import * as _75 from "./authz/v1beta1/authz";
import * as _76 from "./authz/v1beta1/event";
import * as _77 from "./authz/v1beta1/genesis";
import * as _78 from "./authz/v1beta1/query";
import * as _79 from "./authz/v1beta1/tx";
import * as _80 from "./bank/v1beta1/authz";
import * as _81 from "./bank/v1beta1/bank";
import * as _82 from "./bank/v1beta1/genesis";
import * as _83 from "./bank/v1beta1/query";
import * as _84 from "./bank/v1beta1/tx";
import * as _85 from "./base/abci/v1beta1/abci";
import * as _86 from "./base/kv/v1beta1/kv";
import * as _87 from "./base/node/v1beta1/query";
import * as _88 from "./base/query/v1beta1/pagination";
import * as _89 from "./base/reflection/v1beta1/reflection";
import * as _90 from "./base/reflection/v2alpha1/reflection";
import * as _91 from "./base/snapshots/v1beta1/snapshot";
import * as _92 from "./base/store/v1beta1/commit_info";
import * as _93 from "./base/store/v1beta1/listening";
import * as _94 from "./base/tendermint/v1beta1/query";
import * as _95 from "./base/v1beta1/coin";
import * as _96 from "./capability/v1beta1/capability";
import * as _97 from "./capability/v1beta1/genesis";
import * as _98 from "./crisis/v1beta1/genesis";
import * as _99 from "./crisis/v1beta1/tx";
import * as _100 from "./crypto/ed25519/keys";
import * as _101 from "./crypto/multisig/keys";
import * as _102 from "./crypto/secp256k1/keys";
import * as _103 from "./crypto/secp256r1/keys";
import * as _104 from "./distribution/v1beta1/distribution";
import * as _105 from "./distribution/v1beta1/genesis";
import * as _106 from "./distribution/v1beta1/query";
import * as _107 from "./distribution/v1beta1/tx";
import * as _108 from "./evidence/v1beta1/evidence";
import * as _109 from "./evidence/v1beta1/genesis";
import * as _110 from "./evidence/v1beta1/query";
import * as _111 from "./evidence/v1beta1/tx";
import * as _112 from "./feegrant/v1beta1/feegrant";
import * as _113 from "./feegrant/v1beta1/genesis";
import * as _114 from "./feegrant/v1beta1/query";
import * as _115 from "./feegrant/v1beta1/tx";
import * as _116 from "./genutil/v1beta1/genesis";
import * as _117 from "./gov/v1beta1/genesis";
import * as _118 from "./gov/v1beta1/gov";
import * as _119 from "./gov/v1beta1/query";
import * as _120 from "./gov/v1beta1/tx";
import * as _121 from "./mint/v1beta1/genesis";
import * as _122 from "./mint/v1beta1/mint";
import * as _123 from "./mint/v1beta1/query";
import * as _124 from "./params/v1beta1/params";
import * as _125 from "./params/v1beta1/query";
import * as _126 from "./slashing/v1beta1/genesis";
import * as _127 from "./slashing/v1beta1/query";
import * as _128 from "./slashing/v1beta1/slashing";
import * as _129 from "./slashing/v1beta1/tx";
import * as _130 from "./staking/v1beta1/authz";
import * as _131 from "./staking/v1beta1/genesis";
import * as _132 from "./staking/v1beta1/query";
import * as _133 from "./staking/v1beta1/staking";
import * as _134 from "./staking/v1beta1/tx";
import * as _135 from "./tx/signing/v1beta1/signing";
import * as _136 from "./tx/v1beta1/service";
import * as _137 from "./tx/v1beta1/tx";
import * as _138 from "./upgrade/v1beta1/query";
import * as _139 from "./upgrade/v1beta1/upgrade";
import * as _140 from "./vesting/v1beta1/tx";
import * as _141 from "./vesting/v1beta1/vesting";
import * as _217 from "./auth/v1beta1/query.lcd";
import * as _218 from "./authz/v1beta1/query.lcd";
import * as _219 from "./bank/v1beta1/query.lcd";
import * as _220 from "./base/node/v1beta1/query.lcd";
import * as _221 from "./base/tendermint/v1beta1/query.lcd";
import * as _222 from "./distribution/v1beta1/query.lcd";
import * as _223 from "./evidence/v1beta1/query.lcd";
import * as _224 from "./feegrant/v1beta1/query.lcd";
import * as _225 from "./gov/v1beta1/query.lcd";
import * as _226 from "./mint/v1beta1/query.lcd";
import * as _227 from "./params/v1beta1/query.lcd";
import * as _228 from "./slashing/v1beta1/query.lcd";
import * as _229 from "./staking/v1beta1/query.lcd";
import * as _230 from "./tx/v1beta1/service.lcd";
import * as _231 from "./upgrade/v1beta1/query.lcd";
import * as _232 from "./auth/v1beta1/query.rpc.Query";
import * as _233 from "./authz/v1beta1/query.rpc.Query";
import * as _234 from "./bank/v1beta1/query.rpc.Query";
import * as _235 from "./base/node/v1beta1/query.rpc.Service";
import * as _236 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _237 from "./distribution/v1beta1/query.rpc.Query";
import * as _238 from "./evidence/v1beta1/query.rpc.Query";
import * as _239 from "./feegrant/v1beta1/query.rpc.Query";
import * as _240 from "./gov/v1beta1/query.rpc.Query";
import * as _241 from "./mint/v1beta1/query.rpc.Query";
import * as _242 from "./params/v1beta1/query.rpc.Query";
import * as _243 from "./slashing/v1beta1/query.rpc.Query";
import * as _244 from "./staking/v1beta1/query.rpc.Query";
import * as _245 from "./tx/v1beta1/service.rpc.Service";
import * as _246 from "./upgrade/v1beta1/query.rpc.Query";
import * as _247 from "./authz/v1beta1/tx.rpc.msg";
import * as _248 from "./bank/v1beta1/tx.rpc.msg";
import * as _249 from "./crisis/v1beta1/tx.rpc.msg";
import * as _250 from "./distribution/v1beta1/tx.rpc.msg";
import * as _251 from "./evidence/v1beta1/tx.rpc.msg";
import * as _252 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _253 from "./gov/v1beta1/tx.rpc.msg";
import * as _254 from "./slashing/v1beta1/tx.rpc.msg";
import * as _255 from "./staking/v1beta1/tx.rpc.msg";
import * as _256 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _232.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _74.QueryAccountsRequest): Promise<_74.QueryAccountsResponse>;
                account(request: _74.QueryAccountRequest): Promise<_74.QueryAccountResponse>;
                params(request?: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                moduleAccountByName(request: _74.QueryModuleAccountByNameRequest): Promise<_74.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _217.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _74.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryAccountsRequest;
                fromPartial(object: Partial<_74.QueryAccountsRequest>): _74.QueryAccountsRequest;
                fromAmino(object: _74.QueryAccountsRequestAmino): _74.QueryAccountsRequest;
                toAmino(message: _74.QueryAccountsRequest): _74.QueryAccountsRequestAmino;
                fromAminoMsg(object: _74.QueryAccountsRequestAminoMsg): _74.QueryAccountsRequest;
                toAminoMsg(message: _74.QueryAccountsRequest): _74.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryAccountsRequestProtoMsg): _74.QueryAccountsRequest;
                toProto(message: _74.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryAccountsRequest): _74.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _74.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryAccountsResponse;
                fromPartial(object: Partial<_74.QueryAccountsResponse>): _74.QueryAccountsResponse;
                fromAmino(object: _74.QueryAccountsResponseAmino): _74.QueryAccountsResponse;
                toAmino(message: _74.QueryAccountsResponse): _74.QueryAccountsResponseAmino;
                fromAminoMsg(object: _74.QueryAccountsResponseAminoMsg): _74.QueryAccountsResponse;
                toAminoMsg(message: _74.QueryAccountsResponse): _74.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryAccountsResponseProtoMsg): _74.QueryAccountsResponse;
                toProto(message: _74.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryAccountsResponse): _74.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _74.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryAccountRequest;
                fromPartial(object: Partial<_74.QueryAccountRequest>): _74.QueryAccountRequest;
                fromAmino(object: _74.QueryAccountRequestAmino): _74.QueryAccountRequest;
                toAmino(message: _74.QueryAccountRequest): _74.QueryAccountRequestAmino;
                fromAminoMsg(object: _74.QueryAccountRequestAminoMsg): _74.QueryAccountRequest;
                toAminoMsg(message: _74.QueryAccountRequest): _74.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _74.QueryAccountRequestProtoMsg): _74.QueryAccountRequest;
                toProto(message: _74.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _74.QueryAccountRequest): _74.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _74.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryAccountResponse;
                fromPartial(object: Partial<_74.QueryAccountResponse>): _74.QueryAccountResponse;
                fromAmino(object: _74.QueryAccountResponseAmino): _74.QueryAccountResponse;
                toAmino(message: _74.QueryAccountResponse): _74.QueryAccountResponseAmino;
                fromAminoMsg(object: _74.QueryAccountResponseAminoMsg): _74.QueryAccountResponse;
                toAminoMsg(message: _74.QueryAccountResponse): _74.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _74.QueryAccountResponseProtoMsg): _74.QueryAccountResponse;
                toProto(message: _74.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _74.QueryAccountResponse): _74.QueryAccountResponseProtoMsg;
            };
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
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _74.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_74.QueryModuleAccountByNameRequest>): _74.QueryModuleAccountByNameRequest;
                fromAmino(object: _74.QueryModuleAccountByNameRequestAmino): _74.QueryModuleAccountByNameRequest;
                toAmino(message: _74.QueryModuleAccountByNameRequest): _74.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _74.QueryModuleAccountByNameRequestAminoMsg): _74.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _74.QueryModuleAccountByNameRequest): _74.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _74.QueryModuleAccountByNameRequestProtoMsg): _74.QueryModuleAccountByNameRequest;
                toProto(message: _74.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _74.QueryModuleAccountByNameRequest): _74.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _74.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_74.QueryModuleAccountByNameResponse>): _74.QueryModuleAccountByNameResponse;
                fromAmino(object: _74.QueryModuleAccountByNameResponseAmino): _74.QueryModuleAccountByNameResponse;
                toAmino(message: _74.QueryModuleAccountByNameResponse): _74.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _74.QueryModuleAccountByNameResponseAminoMsg): _74.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _74.QueryModuleAccountByNameResponse): _74.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _74.QueryModuleAccountByNameResponseProtoMsg): _74.QueryModuleAccountByNameResponse;
                toProto(message: _74.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _74.QueryModuleAccountByNameResponse): _74.QueryModuleAccountByNameResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _72.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _72.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            BaseAccount: {
                typeUrl: string;
                encode(message: _72.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.BaseAccount;
                fromPartial(object: Partial<_72.BaseAccount>): _72.BaseAccount;
                fromAmino(object: _72.BaseAccountAmino): _72.BaseAccount;
                toAmino(message: _72.BaseAccount): _72.BaseAccountAmino;
                fromAminoMsg(object: _72.BaseAccountAminoMsg): _72.BaseAccount;
                toAminoMsg(message: _72.BaseAccount): _72.BaseAccountAminoMsg;
                fromProtoMsg(message: _72.BaseAccountProtoMsg): _72.BaseAccount;
                toProto(message: _72.BaseAccount): Uint8Array;
                toProtoMsg(message: _72.BaseAccount): _72.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _72.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.ModuleAccount;
                fromPartial(object: Partial<_72.ModuleAccount>): _72.ModuleAccount;
                fromAmino(object: _72.ModuleAccountAmino): _72.ModuleAccount;
                toAmino(message: _72.ModuleAccount): _72.ModuleAccountAmino;
                fromAminoMsg(object: _72.ModuleAccountAminoMsg): _72.ModuleAccount;
                toAminoMsg(message: _72.ModuleAccount): _72.ModuleAccountAminoMsg;
                fromProtoMsg(message: _72.ModuleAccountProtoMsg): _72.ModuleAccount;
                toProto(message: _72.ModuleAccount): Uint8Array;
                toProtoMsg(message: _72.ModuleAccount): _72.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _72.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.Params;
                fromPartial(object: Partial<_72.Params>): _72.Params;
                fromAmino(object: _72.ParamsAmino): _72.Params;
                toAmino(message: _72.Params): _72.ParamsAmino;
                fromAminoMsg(object: _72.ParamsAminoMsg): _72.Params;
                toAminoMsg(message: _72.Params): _72.ParamsAminoMsg;
                fromProtoMsg(message: _72.ParamsProtoMsg): _72.Params;
                toProto(message: _72.Params): Uint8Array;
                toProtoMsg(message: _72.Params): _72.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _247.MsgClientImpl;
            QueryClientImpl: typeof _233.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _78.QueryGrantsRequest): Promise<_78.QueryGrantsResponse>;
                granterGrants(request: _78.QueryGranterGrantsRequest): Promise<_78.QueryGranterGrantsResponse>;
                granteeGrants(request: _78.QueryGranteeGrantsRequest): Promise<_78.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _218.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _79.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _79.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _79.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _79.MsgGrant): {
                        typeUrl: string;
                        value: _79.MsgGrant;
                    };
                    exec(value: _79.MsgExec): {
                        typeUrl: string;
                        value: _79.MsgExec;
                    };
                    revoke(value: _79.MsgRevoke): {
                        typeUrl: string;
                        value: _79.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _79.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _79.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _79.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _79.MsgGrant): {
                        typeUrl: string;
                        value: _79.MsgGrant;
                    };
                    exec(value: _79.MsgExec): {
                        typeUrl: string;
                        value: _79.MsgExec;
                    };
                    revoke(value: _79.MsgRevoke): {
                        typeUrl: string;
                        value: _79.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _79.MsgGrant) => _79.MsgGrantAmino;
                    fromAmino: (object: _79.MsgGrantAmino) => _79.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _79.MsgExec) => _79.MsgExecAmino;
                    fromAmino: (object: _79.MsgExecAmino) => _79.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _79.MsgRevoke) => _79.MsgRevokeAmino;
                    fromAmino: (object: _79.MsgRevokeAmino) => _79.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _79.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgGrant;
                fromPartial(object: Partial<_79.MsgGrant>): _79.MsgGrant;
                fromAmino(object: _79.MsgGrantAmino): _79.MsgGrant;
                toAmino(message: _79.MsgGrant): _79.MsgGrantAmino;
                fromAminoMsg(object: _79.MsgGrantAminoMsg): _79.MsgGrant;
                toAminoMsg(message: _79.MsgGrant): _79.MsgGrantAminoMsg;
                fromProtoMsg(message: _79.MsgGrantProtoMsg): _79.MsgGrant;
                toProto(message: _79.MsgGrant): Uint8Array;
                toProtoMsg(message: _79.MsgGrant): _79.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _79.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgExecResponse;
                fromPartial(object: Partial<_79.MsgExecResponse>): _79.MsgExecResponse;
                fromAmino(object: _79.MsgExecResponseAmino): _79.MsgExecResponse;
                toAmino(message: _79.MsgExecResponse): _79.MsgExecResponseAmino;
                fromAminoMsg(object: _79.MsgExecResponseAminoMsg): _79.MsgExecResponse;
                toAminoMsg(message: _79.MsgExecResponse): _79.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _79.MsgExecResponseProtoMsg): _79.MsgExecResponse;
                toProto(message: _79.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _79.MsgExecResponse): _79.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _79.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgExec;
                fromPartial(object: Partial<_79.MsgExec>): _79.MsgExec;
                fromAmino(object: _79.MsgExecAmino): _79.MsgExec;
                toAmino(message: _79.MsgExec): _79.MsgExecAmino;
                fromAminoMsg(object: _79.MsgExecAminoMsg): _79.MsgExec;
                toAminoMsg(message: _79.MsgExec): _79.MsgExecAminoMsg;
                fromProtoMsg(message: _79.MsgExecProtoMsg): _79.MsgExec;
                toProto(message: _79.MsgExec): Uint8Array;
                toProtoMsg(message: _79.MsgExec): _79.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _79.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _79.MsgGrantResponse;
                fromPartial(_: Partial<_79.MsgGrantResponse>): _79.MsgGrantResponse;
                fromAmino(_: _79.MsgGrantResponseAmino): _79.MsgGrantResponse;
                toAmino(_: _79.MsgGrantResponse): _79.MsgGrantResponseAmino;
                fromAminoMsg(object: _79.MsgGrantResponseAminoMsg): _79.MsgGrantResponse;
                toAminoMsg(message: _79.MsgGrantResponse): _79.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _79.MsgGrantResponseProtoMsg): _79.MsgGrantResponse;
                toProto(message: _79.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _79.MsgGrantResponse): _79.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _79.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgRevoke;
                fromPartial(object: Partial<_79.MsgRevoke>): _79.MsgRevoke;
                fromAmino(object: _79.MsgRevokeAmino): _79.MsgRevoke;
                toAmino(message: _79.MsgRevoke): _79.MsgRevokeAmino;
                fromAminoMsg(object: _79.MsgRevokeAminoMsg): _79.MsgRevoke;
                toAminoMsg(message: _79.MsgRevoke): _79.MsgRevokeAminoMsg;
                fromProtoMsg(message: _79.MsgRevokeProtoMsg): _79.MsgRevoke;
                toProto(message: _79.MsgRevoke): Uint8Array;
                toProtoMsg(message: _79.MsgRevoke): _79.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _79.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _79.MsgRevokeResponse;
                fromPartial(_: Partial<_79.MsgRevokeResponse>): _79.MsgRevokeResponse;
                fromAmino(_: _79.MsgRevokeResponseAmino): _79.MsgRevokeResponse;
                toAmino(_: _79.MsgRevokeResponse): _79.MsgRevokeResponseAmino;
                fromAminoMsg(object: _79.MsgRevokeResponseAminoMsg): _79.MsgRevokeResponse;
                toAminoMsg(message: _79.MsgRevokeResponse): _79.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _79.MsgRevokeResponseProtoMsg): _79.MsgRevokeResponse;
                toProto(message: _79.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _79.MsgRevokeResponse): _79.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _78.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryGrantsRequest;
                fromPartial(object: Partial<_78.QueryGrantsRequest>): _78.QueryGrantsRequest;
                fromAmino(object: _78.QueryGrantsRequestAmino): _78.QueryGrantsRequest;
                toAmino(message: _78.QueryGrantsRequest): _78.QueryGrantsRequestAmino;
                fromAminoMsg(object: _78.QueryGrantsRequestAminoMsg): _78.QueryGrantsRequest;
                toAminoMsg(message: _78.QueryGrantsRequest): _78.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _78.QueryGrantsRequestProtoMsg): _78.QueryGrantsRequest;
                toProto(message: _78.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _78.QueryGrantsRequest): _78.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _78.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryGrantsResponse;
                fromPartial(object: Partial<_78.QueryGrantsResponse>): _78.QueryGrantsResponse;
                fromAmino(object: _78.QueryGrantsResponseAmino): _78.QueryGrantsResponse;
                toAmino(message: _78.QueryGrantsResponse): _78.QueryGrantsResponseAmino;
                fromAminoMsg(object: _78.QueryGrantsResponseAminoMsg): _78.QueryGrantsResponse;
                toAminoMsg(message: _78.QueryGrantsResponse): _78.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _78.QueryGrantsResponseProtoMsg): _78.QueryGrantsResponse;
                toProto(message: _78.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _78.QueryGrantsResponse): _78.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _78.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_78.QueryGranterGrantsRequest>): _78.QueryGranterGrantsRequest;
                fromAmino(object: _78.QueryGranterGrantsRequestAmino): _78.QueryGranterGrantsRequest;
                toAmino(message: _78.QueryGranterGrantsRequest): _78.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _78.QueryGranterGrantsRequestAminoMsg): _78.QueryGranterGrantsRequest;
                toAminoMsg(message: _78.QueryGranterGrantsRequest): _78.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _78.QueryGranterGrantsRequestProtoMsg): _78.QueryGranterGrantsRequest;
                toProto(message: _78.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _78.QueryGranterGrantsRequest): _78.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _78.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_78.QueryGranterGrantsResponse>): _78.QueryGranterGrantsResponse;
                fromAmino(object: _78.QueryGranterGrantsResponseAmino): _78.QueryGranterGrantsResponse;
                toAmino(message: _78.QueryGranterGrantsResponse): _78.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _78.QueryGranterGrantsResponseAminoMsg): _78.QueryGranterGrantsResponse;
                toAminoMsg(message: _78.QueryGranterGrantsResponse): _78.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _78.QueryGranterGrantsResponseProtoMsg): _78.QueryGranterGrantsResponse;
                toProto(message: _78.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _78.QueryGranterGrantsResponse): _78.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _78.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_78.QueryGranteeGrantsRequest>): _78.QueryGranteeGrantsRequest;
                fromAmino(object: _78.QueryGranteeGrantsRequestAmino): _78.QueryGranteeGrantsRequest;
                toAmino(message: _78.QueryGranteeGrantsRequest): _78.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _78.QueryGranteeGrantsRequestAminoMsg): _78.QueryGranteeGrantsRequest;
                toAminoMsg(message: _78.QueryGranteeGrantsRequest): _78.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _78.QueryGranteeGrantsRequestProtoMsg): _78.QueryGranteeGrantsRequest;
                toProto(message: _78.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _78.QueryGranteeGrantsRequest): _78.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _78.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_78.QueryGranteeGrantsResponse>): _78.QueryGranteeGrantsResponse;
                fromAmino(object: _78.QueryGranteeGrantsResponseAmino): _78.QueryGranteeGrantsResponse;
                toAmino(message: _78.QueryGranteeGrantsResponse): _78.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _78.QueryGranteeGrantsResponseAminoMsg): _78.QueryGranteeGrantsResponse;
                toAminoMsg(message: _78.QueryGranteeGrantsResponse): _78.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _78.QueryGranteeGrantsResponseProtoMsg): _78.QueryGranteeGrantsResponse;
                toProto(message: _78.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _78.QueryGranteeGrantsResponse): _78.QueryGranteeGrantsResponseProtoMsg;
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
            EventGrant: {
                typeUrl: string;
                encode(message: _76.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.EventGrant;
                fromPartial(object: Partial<_76.EventGrant>): _76.EventGrant;
                fromAmino(object: _76.EventGrantAmino): _76.EventGrant;
                toAmino(message: _76.EventGrant): _76.EventGrantAmino;
                fromAminoMsg(object: _76.EventGrantAminoMsg): _76.EventGrant;
                toAminoMsg(message: _76.EventGrant): _76.EventGrantAminoMsg;
                fromProtoMsg(message: _76.EventGrantProtoMsg): _76.EventGrant;
                toProto(message: _76.EventGrant): Uint8Array;
                toProtoMsg(message: _76.EventGrant): _76.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _76.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.EventRevoke;
                fromPartial(object: Partial<_76.EventRevoke>): _76.EventRevoke;
                fromAmino(object: _76.EventRevokeAmino): _76.EventRevoke;
                toAmino(message: _76.EventRevoke): _76.EventRevokeAmino;
                fromAminoMsg(object: _76.EventRevokeAminoMsg): _76.EventRevoke;
                toAminoMsg(message: _76.EventRevoke): _76.EventRevokeAminoMsg;
                fromProtoMsg(message: _76.EventRevokeProtoMsg): _76.EventRevoke;
                toProto(message: _76.EventRevoke): Uint8Array;
                toProtoMsg(message: _76.EventRevoke): _76.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _75.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.GenericAuthorization;
                fromPartial(object: Partial<_75.GenericAuthorization>): _75.GenericAuthorization;
                fromAmino(object: _75.GenericAuthorizationAmino): _75.GenericAuthorization;
                toAmino(message: _75.GenericAuthorization): _75.GenericAuthorizationAmino;
                fromAminoMsg(object: _75.GenericAuthorizationAminoMsg): _75.GenericAuthorization;
                toAminoMsg(message: _75.GenericAuthorization): _75.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _75.GenericAuthorizationProtoMsg): _75.GenericAuthorization;
                toProto(message: _75.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _75.GenericAuthorization): _75.GenericAuthorizationProtoMsg;
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
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _75.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.GrantAuthorization;
                fromPartial(object: Partial<_75.GrantAuthorization>): _75.GrantAuthorization;
                fromAmino(object: _75.GrantAuthorizationAmino): _75.GrantAuthorization;
                toAmino(message: _75.GrantAuthorization): _75.GrantAuthorizationAmino;
                fromAminoMsg(object: _75.GrantAuthorizationAminoMsg): _75.GrantAuthorization;
                toAminoMsg(message: _75.GrantAuthorization): _75.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _75.GrantAuthorizationProtoMsg): _75.GrantAuthorization;
                toProto(message: _75.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _75.GrantAuthorization): _75.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _80.SendAuthorization | _130.StakeAuthorization | _75.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _248.MsgClientImpl;
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _83.QueryBalanceRequest): Promise<_83.QueryBalanceResponse>;
                allBalances(request: _83.QueryAllBalancesRequest): Promise<_83.QueryAllBalancesResponse>;
                spendableBalances(request: _83.QuerySpendableBalancesRequest): Promise<_83.QuerySpendableBalancesResponse>;
                totalSupply(request?: _83.QueryTotalSupplyRequest): Promise<_83.QueryTotalSupplyResponse>;
                supplyOf(request: _83.QuerySupplyOfRequest): Promise<_83.QuerySupplyOfResponse>;
                params(request?: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                denomMetadata(request: _83.QueryDenomMetadataRequest): Promise<_83.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _83.QueryDenomsMetadataRequest): Promise<_83.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _219.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _84.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _84.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _84.MsgSend): {
                        typeUrl: string;
                        value: _84.MsgSend;
                    };
                    multiSend(value: _84.MsgMultiSend): {
                        typeUrl: string;
                        value: _84.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _84.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _84.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _84.MsgSend): {
                        typeUrl: string;
                        value: _84.MsgSend;
                    };
                    multiSend(value: _84.MsgMultiSend): {
                        typeUrl: string;
                        value: _84.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _84.MsgSend) => _84.MsgSendAmino;
                    fromAmino: (object: _84.MsgSendAmino) => _84.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _84.MsgMultiSend) => _84.MsgMultiSendAmino;
                    fromAmino: (object: _84.MsgMultiSendAmino) => _84.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _84.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgSend;
                fromPartial(object: Partial<_84.MsgSend>): _84.MsgSend;
                fromAmino(object: _84.MsgSendAmino): _84.MsgSend;
                toAmino(message: _84.MsgSend): _84.MsgSendAmino;
                fromAminoMsg(object: _84.MsgSendAminoMsg): _84.MsgSend;
                toAminoMsg(message: _84.MsgSend): _84.MsgSendAminoMsg;
                fromProtoMsg(message: _84.MsgSendProtoMsg): _84.MsgSend;
                toProto(message: _84.MsgSend): Uint8Array;
                toProtoMsg(message: _84.MsgSend): _84.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _84.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _84.MsgSendResponse;
                fromPartial(_: Partial<_84.MsgSendResponse>): _84.MsgSendResponse;
                fromAmino(_: _84.MsgSendResponseAmino): _84.MsgSendResponse;
                toAmino(_: _84.MsgSendResponse): _84.MsgSendResponseAmino;
                fromAminoMsg(object: _84.MsgSendResponseAminoMsg): _84.MsgSendResponse;
                toAminoMsg(message: _84.MsgSendResponse): _84.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _84.MsgSendResponseProtoMsg): _84.MsgSendResponse;
                toProto(message: _84.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _84.MsgSendResponse): _84.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _84.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgMultiSend;
                fromPartial(object: Partial<_84.MsgMultiSend>): _84.MsgMultiSend;
                fromAmino(object: _84.MsgMultiSendAmino): _84.MsgMultiSend;
                toAmino(message: _84.MsgMultiSend): _84.MsgMultiSendAmino;
                fromAminoMsg(object: _84.MsgMultiSendAminoMsg): _84.MsgMultiSend;
                toAminoMsg(message: _84.MsgMultiSend): _84.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _84.MsgMultiSendProtoMsg): _84.MsgMultiSend;
                toProto(message: _84.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _84.MsgMultiSend): _84.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _84.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _84.MsgMultiSendResponse;
                fromPartial(_: Partial<_84.MsgMultiSendResponse>): _84.MsgMultiSendResponse;
                fromAmino(_: _84.MsgMultiSendResponseAmino): _84.MsgMultiSendResponse;
                toAmino(_: _84.MsgMultiSendResponse): _84.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _84.MsgMultiSendResponseAminoMsg): _84.MsgMultiSendResponse;
                toAminoMsg(message: _84.MsgMultiSendResponse): _84.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _84.MsgMultiSendResponseProtoMsg): _84.MsgMultiSendResponse;
                toProto(message: _84.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _84.MsgMultiSendResponse): _84.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _83.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryBalanceRequest;
                fromPartial(object: Partial<_83.QueryBalanceRequest>): _83.QueryBalanceRequest;
                fromAmino(object: _83.QueryBalanceRequestAmino): _83.QueryBalanceRequest;
                toAmino(message: _83.QueryBalanceRequest): _83.QueryBalanceRequestAmino;
                fromAminoMsg(object: _83.QueryBalanceRequestAminoMsg): _83.QueryBalanceRequest;
                toAminoMsg(message: _83.QueryBalanceRequest): _83.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _83.QueryBalanceRequestProtoMsg): _83.QueryBalanceRequest;
                toProto(message: _83.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _83.QueryBalanceRequest): _83.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _83.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryBalanceResponse;
                fromPartial(object: Partial<_83.QueryBalanceResponse>): _83.QueryBalanceResponse;
                fromAmino(object: _83.QueryBalanceResponseAmino): _83.QueryBalanceResponse;
                toAmino(message: _83.QueryBalanceResponse): _83.QueryBalanceResponseAmino;
                fromAminoMsg(object: _83.QueryBalanceResponseAminoMsg): _83.QueryBalanceResponse;
                toAminoMsg(message: _83.QueryBalanceResponse): _83.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _83.QueryBalanceResponseProtoMsg): _83.QueryBalanceResponse;
                toProto(message: _83.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _83.QueryBalanceResponse): _83.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _83.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryAllBalancesRequest;
                fromPartial(object: Partial<_83.QueryAllBalancesRequest>): _83.QueryAllBalancesRequest;
                fromAmino(object: _83.QueryAllBalancesRequestAmino): _83.QueryAllBalancesRequest;
                toAmino(message: _83.QueryAllBalancesRequest): _83.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _83.QueryAllBalancesRequestAminoMsg): _83.QueryAllBalancesRequest;
                toAminoMsg(message: _83.QueryAllBalancesRequest): _83.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _83.QueryAllBalancesRequestProtoMsg): _83.QueryAllBalancesRequest;
                toProto(message: _83.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _83.QueryAllBalancesRequest): _83.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _83.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryAllBalancesResponse;
                fromPartial(object: Partial<_83.QueryAllBalancesResponse>): _83.QueryAllBalancesResponse;
                fromAmino(object: _83.QueryAllBalancesResponseAmino): _83.QueryAllBalancesResponse;
                toAmino(message: _83.QueryAllBalancesResponse): _83.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _83.QueryAllBalancesResponseAminoMsg): _83.QueryAllBalancesResponse;
                toAminoMsg(message: _83.QueryAllBalancesResponse): _83.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _83.QueryAllBalancesResponseProtoMsg): _83.QueryAllBalancesResponse;
                toProto(message: _83.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _83.QueryAllBalancesResponse): _83.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _83.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_83.QuerySpendableBalancesRequest>): _83.QuerySpendableBalancesRequest;
                fromAmino(object: _83.QuerySpendableBalancesRequestAmino): _83.QuerySpendableBalancesRequest;
                toAmino(message: _83.QuerySpendableBalancesRequest): _83.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _83.QuerySpendableBalancesRequestAminoMsg): _83.QuerySpendableBalancesRequest;
                toAminoMsg(message: _83.QuerySpendableBalancesRequest): _83.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _83.QuerySpendableBalancesRequestProtoMsg): _83.QuerySpendableBalancesRequest;
                toProto(message: _83.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _83.QuerySpendableBalancesRequest): _83.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _83.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_83.QuerySpendableBalancesResponse>): _83.QuerySpendableBalancesResponse;
                fromAmino(object: _83.QuerySpendableBalancesResponseAmino): _83.QuerySpendableBalancesResponse;
                toAmino(message: _83.QuerySpendableBalancesResponse): _83.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _83.QuerySpendableBalancesResponseAminoMsg): _83.QuerySpendableBalancesResponse;
                toAminoMsg(message: _83.QuerySpendableBalancesResponse): _83.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _83.QuerySpendableBalancesResponseProtoMsg): _83.QuerySpendableBalancesResponse;
                toProto(message: _83.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _83.QuerySpendableBalancesResponse): _83.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _83.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_83.QueryTotalSupplyRequest>): _83.QueryTotalSupplyRequest;
                fromAmino(object: _83.QueryTotalSupplyRequestAmino): _83.QueryTotalSupplyRequest;
                toAmino(message: _83.QueryTotalSupplyRequest): _83.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _83.QueryTotalSupplyRequestAminoMsg): _83.QueryTotalSupplyRequest;
                toAminoMsg(message: _83.QueryTotalSupplyRequest): _83.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _83.QueryTotalSupplyRequestProtoMsg): _83.QueryTotalSupplyRequest;
                toProto(message: _83.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _83.QueryTotalSupplyRequest): _83.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _83.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_83.QueryTotalSupplyResponse>): _83.QueryTotalSupplyResponse;
                fromAmino(object: _83.QueryTotalSupplyResponseAmino): _83.QueryTotalSupplyResponse;
                toAmino(message: _83.QueryTotalSupplyResponse): _83.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _83.QueryTotalSupplyResponseAminoMsg): _83.QueryTotalSupplyResponse;
                toAminoMsg(message: _83.QueryTotalSupplyResponse): _83.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _83.QueryTotalSupplyResponseProtoMsg): _83.QueryTotalSupplyResponse;
                toProto(message: _83.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _83.QueryTotalSupplyResponse): _83.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _83.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QuerySupplyOfRequest;
                fromPartial(object: Partial<_83.QuerySupplyOfRequest>): _83.QuerySupplyOfRequest;
                fromAmino(object: _83.QuerySupplyOfRequestAmino): _83.QuerySupplyOfRequest;
                toAmino(message: _83.QuerySupplyOfRequest): _83.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _83.QuerySupplyOfRequestAminoMsg): _83.QuerySupplyOfRequest;
                toAminoMsg(message: _83.QuerySupplyOfRequest): _83.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _83.QuerySupplyOfRequestProtoMsg): _83.QuerySupplyOfRequest;
                toProto(message: _83.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _83.QuerySupplyOfRequest): _83.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _83.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QuerySupplyOfResponse;
                fromPartial(object: Partial<_83.QuerySupplyOfResponse>): _83.QuerySupplyOfResponse;
                fromAmino(object: _83.QuerySupplyOfResponseAmino): _83.QuerySupplyOfResponse;
                toAmino(message: _83.QuerySupplyOfResponse): _83.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _83.QuerySupplyOfResponseAminoMsg): _83.QuerySupplyOfResponse;
                toAminoMsg(message: _83.QuerySupplyOfResponse): _83.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _83.QuerySupplyOfResponseProtoMsg): _83.QuerySupplyOfResponse;
                toProto(message: _83.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _83.QuerySupplyOfResponse): _83.QuerySupplyOfResponseProtoMsg;
            };
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
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _83.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_83.QueryDenomsMetadataRequest>): _83.QueryDenomsMetadataRequest;
                fromAmino(object: _83.QueryDenomsMetadataRequestAmino): _83.QueryDenomsMetadataRequest;
                toAmino(message: _83.QueryDenomsMetadataRequest): _83.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _83.QueryDenomsMetadataRequestAminoMsg): _83.QueryDenomsMetadataRequest;
                toAminoMsg(message: _83.QueryDenomsMetadataRequest): _83.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _83.QueryDenomsMetadataRequestProtoMsg): _83.QueryDenomsMetadataRequest;
                toProto(message: _83.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _83.QueryDenomsMetadataRequest): _83.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _83.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_83.QueryDenomsMetadataResponse>): _83.QueryDenomsMetadataResponse;
                fromAmino(object: _83.QueryDenomsMetadataResponseAmino): _83.QueryDenomsMetadataResponse;
                toAmino(message: _83.QueryDenomsMetadataResponse): _83.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _83.QueryDenomsMetadataResponseAminoMsg): _83.QueryDenomsMetadataResponse;
                toAminoMsg(message: _83.QueryDenomsMetadataResponse): _83.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _83.QueryDenomsMetadataResponseProtoMsg): _83.QueryDenomsMetadataResponse;
                toProto(message: _83.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _83.QueryDenomsMetadataResponse): _83.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _83.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_83.QueryDenomMetadataRequest>): _83.QueryDenomMetadataRequest;
                fromAmino(object: _83.QueryDenomMetadataRequestAmino): _83.QueryDenomMetadataRequest;
                toAmino(message: _83.QueryDenomMetadataRequest): _83.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _83.QueryDenomMetadataRequestAminoMsg): _83.QueryDenomMetadataRequest;
                toAminoMsg(message: _83.QueryDenomMetadataRequest): _83.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _83.QueryDenomMetadataRequestProtoMsg): _83.QueryDenomMetadataRequest;
                toProto(message: _83.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _83.QueryDenomMetadataRequest): _83.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _83.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_83.QueryDenomMetadataResponse>): _83.QueryDenomMetadataResponse;
                fromAmino(object: _83.QueryDenomMetadataResponseAmino): _83.QueryDenomMetadataResponse;
                toAmino(message: _83.QueryDenomMetadataResponse): _83.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _83.QueryDenomMetadataResponseAminoMsg): _83.QueryDenomMetadataResponse;
                toAminoMsg(message: _83.QueryDenomMetadataResponse): _83.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _83.QueryDenomMetadataResponseProtoMsg): _83.QueryDenomMetadataResponse;
                toProto(message: _83.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _83.QueryDenomMetadataResponse): _83.QueryDenomMetadataResponseProtoMsg;
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
            Balance: {
                typeUrl: string;
                encode(message: _82.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.Balance;
                fromPartial(object: Partial<_82.Balance>): _82.Balance;
                fromAmino(object: _82.BalanceAmino): _82.Balance;
                toAmino(message: _82.Balance): _82.BalanceAmino;
                fromAminoMsg(object: _82.BalanceAminoMsg): _82.Balance;
                toAminoMsg(message: _82.Balance): _82.BalanceAminoMsg;
                fromProtoMsg(message: _82.BalanceProtoMsg): _82.Balance;
                toProto(message: _82.Balance): Uint8Array;
                toProtoMsg(message: _82.Balance): _82.BalanceProtoMsg;
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
            SendEnabled: {
                typeUrl: string;
                encode(message: _81.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.SendEnabled;
                fromPartial(object: Partial<_81.SendEnabled>): _81.SendEnabled;
                fromAmino(object: _81.SendEnabledAmino): _81.SendEnabled;
                toAmino(message: _81.SendEnabled): _81.SendEnabledAmino;
                fromAminoMsg(object: _81.SendEnabledAminoMsg): _81.SendEnabled;
                toAminoMsg(message: _81.SendEnabled): _81.SendEnabledAminoMsg;
                fromProtoMsg(message: _81.SendEnabledProtoMsg): _81.SendEnabled;
                toProto(message: _81.SendEnabled): Uint8Array;
                toProtoMsg(message: _81.SendEnabled): _81.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _81.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.Input;
                fromPartial(object: Partial<_81.Input>): _81.Input;
                fromAmino(object: _81.InputAmino): _81.Input;
                toAmino(message: _81.Input): _81.InputAmino;
                fromAminoMsg(object: _81.InputAminoMsg): _81.Input;
                toAminoMsg(message: _81.Input): _81.InputAminoMsg;
                fromProtoMsg(message: _81.InputProtoMsg): _81.Input;
                toProto(message: _81.Input): Uint8Array;
                toProtoMsg(message: _81.Input): _81.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _81.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.Output;
                fromPartial(object: Partial<_81.Output>): _81.Output;
                fromAmino(object: _81.OutputAmino): _81.Output;
                toAmino(message: _81.Output): _81.OutputAmino;
                fromAminoMsg(object: _81.OutputAminoMsg): _81.Output;
                toAminoMsg(message: _81.Output): _81.OutputAminoMsg;
                fromProtoMsg(message: _81.OutputProtoMsg): _81.Output;
                toProto(message: _81.Output): Uint8Array;
                toProtoMsg(message: _81.Output): _81.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _81.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.Supply;
                fromPartial(object: Partial<_81.Supply>): _81.Supply;
                fromAmino(object: _81.SupplyAmino): _81.Supply;
                toAmino(message: _81.Supply): _81.SupplyAmino;
                fromAminoMsg(object: _81.SupplyAminoMsg): _81.Supply;
                toAminoMsg(message: _81.Supply): _81.SupplyAminoMsg;
                fromProtoMsg(message: _81.SupplyProtoMsg): _81.Supply;
                toProto(message: _81.Supply): Uint8Array;
                toProtoMsg(message: _81.Supply): _81.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _81.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.DenomUnit;
                fromPartial(object: Partial<_81.DenomUnit>): _81.DenomUnit;
                fromAmino(object: _81.DenomUnitAmino): _81.DenomUnit;
                toAmino(message: _81.DenomUnit): _81.DenomUnitAmino;
                fromAminoMsg(object: _81.DenomUnitAminoMsg): _81.DenomUnit;
                toAminoMsg(message: _81.DenomUnit): _81.DenomUnitAminoMsg;
                fromProtoMsg(message: _81.DenomUnitProtoMsg): _81.DenomUnit;
                toProto(message: _81.DenomUnit): Uint8Array;
                toProtoMsg(message: _81.DenomUnit): _81.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _81.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.Metadata;
                fromPartial(object: Partial<_81.Metadata>): _81.Metadata;
                fromAmino(object: _81.MetadataAmino): _81.Metadata;
                toAmino(message: _81.Metadata): _81.MetadataAmino;
                fromAminoMsg(object: _81.MetadataAminoMsg): _81.Metadata;
                toAminoMsg(message: _81.Metadata): _81.MetadataAminoMsg;
                fromProtoMsg(message: _81.MetadataProtoMsg): _81.Metadata;
                toProto(message: _81.Metadata): Uint8Array;
                toProtoMsg(message: _81.Metadata): _81.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _80.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.SendAuthorization;
                fromPartial(object: Partial<_80.SendAuthorization>): _80.SendAuthorization;
                fromAmino(object: _80.SendAuthorizationAmino): _80.SendAuthorization;
                toAmino(message: _80.SendAuthorization): _80.SendAuthorizationAmino;
                fromAminoMsg(object: _80.SendAuthorizationAminoMsg): _80.SendAuthorization;
                toAminoMsg(message: _80.SendAuthorization): _80.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _80.SendAuthorizationProtoMsg): _80.SendAuthorization;
                toProto(message: _80.SendAuthorization): Uint8Array;
                toProtoMsg(message: _80.SendAuthorization): _80.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _85.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.TxResponse;
                    fromPartial(object: Partial<_85.TxResponse>): _85.TxResponse;
                    fromAmino(object: _85.TxResponseAmino): _85.TxResponse;
                    toAmino(message: _85.TxResponse): _85.TxResponseAmino;
                    fromAminoMsg(object: _85.TxResponseAminoMsg): _85.TxResponse;
                    toAminoMsg(message: _85.TxResponse): _85.TxResponseAminoMsg;
                    fromProtoMsg(message: _85.TxResponseProtoMsg): _85.TxResponse;
                    toProto(message: _85.TxResponse): Uint8Array;
                    toProtoMsg(message: _85.TxResponse): _85.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _85.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.ABCIMessageLog;
                    fromPartial(object: Partial<_85.ABCIMessageLog>): _85.ABCIMessageLog;
                    fromAmino(object: _85.ABCIMessageLogAmino): _85.ABCIMessageLog;
                    toAmino(message: _85.ABCIMessageLog): _85.ABCIMessageLogAmino;
                    fromAminoMsg(object: _85.ABCIMessageLogAminoMsg): _85.ABCIMessageLog;
                    toAminoMsg(message: _85.ABCIMessageLog): _85.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _85.ABCIMessageLogProtoMsg): _85.ABCIMessageLog;
                    toProto(message: _85.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _85.ABCIMessageLog): _85.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _85.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.StringEvent;
                    fromPartial(object: Partial<_85.StringEvent>): _85.StringEvent;
                    fromAmino(object: _85.StringEventAmino): _85.StringEvent;
                    toAmino(message: _85.StringEvent): _85.StringEventAmino;
                    fromAminoMsg(object: _85.StringEventAminoMsg): _85.StringEvent;
                    toAminoMsg(message: _85.StringEvent): _85.StringEventAminoMsg;
                    fromProtoMsg(message: _85.StringEventProtoMsg): _85.StringEvent;
                    toProto(message: _85.StringEvent): Uint8Array;
                    toProtoMsg(message: _85.StringEvent): _85.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _85.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.Attribute;
                    fromPartial(object: Partial<_85.Attribute>): _85.Attribute;
                    fromAmino(object: _85.AttributeAmino): _85.Attribute;
                    toAmino(message: _85.Attribute): _85.AttributeAmino;
                    fromAminoMsg(object: _85.AttributeAminoMsg): _85.Attribute;
                    toAminoMsg(message: _85.Attribute): _85.AttributeAminoMsg;
                    fromProtoMsg(message: _85.AttributeProtoMsg): _85.Attribute;
                    toProto(message: _85.Attribute): Uint8Array;
                    toProtoMsg(message: _85.Attribute): _85.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _85.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.GasInfo;
                    fromPartial(object: Partial<_85.GasInfo>): _85.GasInfo;
                    fromAmino(object: _85.GasInfoAmino): _85.GasInfo;
                    toAmino(message: _85.GasInfo): _85.GasInfoAmino;
                    fromAminoMsg(object: _85.GasInfoAminoMsg): _85.GasInfo;
                    toAminoMsg(message: _85.GasInfo): _85.GasInfoAminoMsg;
                    fromProtoMsg(message: _85.GasInfoProtoMsg): _85.GasInfo;
                    toProto(message: _85.GasInfo): Uint8Array;
                    toProtoMsg(message: _85.GasInfo): _85.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _85.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.Result;
                    fromPartial(object: Partial<_85.Result>): _85.Result;
                    fromAmino(object: _85.ResultAmino): _85.Result;
                    toAmino(message: _85.Result): _85.ResultAmino;
                    fromAminoMsg(object: _85.ResultAminoMsg): _85.Result;
                    toAminoMsg(message: _85.Result): _85.ResultAminoMsg;
                    fromProtoMsg(message: _85.ResultProtoMsg): _85.Result;
                    toProto(message: _85.Result): Uint8Array;
                    toProtoMsg(message: _85.Result): _85.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _85.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.SimulationResponse;
                    fromPartial(object: Partial<_85.SimulationResponse>): _85.SimulationResponse;
                    fromAmino(object: _85.SimulationResponseAmino): _85.SimulationResponse;
                    toAmino(message: _85.SimulationResponse): _85.SimulationResponseAmino;
                    fromAminoMsg(object: _85.SimulationResponseAminoMsg): _85.SimulationResponse;
                    toAminoMsg(message: _85.SimulationResponse): _85.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _85.SimulationResponseProtoMsg): _85.SimulationResponse;
                    toProto(message: _85.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _85.SimulationResponse): _85.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _85.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.MsgData;
                    fromPartial(object: Partial<_85.MsgData>): _85.MsgData;
                    fromAmino(object: _85.MsgDataAmino): _85.MsgData;
                    toAmino(message: _85.MsgData): _85.MsgDataAmino;
                    fromAminoMsg(object: _85.MsgDataAminoMsg): _85.MsgData;
                    toAminoMsg(message: _85.MsgData): _85.MsgDataAminoMsg;
                    fromProtoMsg(message: _85.MsgDataProtoMsg): _85.MsgData;
                    toProto(message: _85.MsgData): Uint8Array;
                    toProtoMsg(message: _85.MsgData): _85.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _85.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.TxMsgData;
                    fromPartial(object: Partial<_85.TxMsgData>): _85.TxMsgData;
                    fromAmino(object: _85.TxMsgDataAmino): _85.TxMsgData;
                    toAmino(message: _85.TxMsgData): _85.TxMsgDataAmino;
                    fromAminoMsg(object: _85.TxMsgDataAminoMsg): _85.TxMsgData;
                    toAminoMsg(message: _85.TxMsgData): _85.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _85.TxMsgDataProtoMsg): _85.TxMsgData;
                    toProto(message: _85.TxMsgData): Uint8Array;
                    toProtoMsg(message: _85.TxMsgData): _85.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _85.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.SearchTxsResult;
                    fromPartial(object: Partial<_85.SearchTxsResult>): _85.SearchTxsResult;
                    fromAmino(object: _85.SearchTxsResultAmino): _85.SearchTxsResult;
                    toAmino(message: _85.SearchTxsResult): _85.SearchTxsResultAmino;
                    fromAminoMsg(object: _85.SearchTxsResultAminoMsg): _85.SearchTxsResult;
                    toAminoMsg(message: _85.SearchTxsResult): _85.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _85.SearchTxsResultProtoMsg): _85.SearchTxsResult;
                    toProto(message: _85.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _85.SearchTxsResult): _85.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _86.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.Pairs;
                    fromPartial(object: Partial<_86.Pairs>): _86.Pairs;
                    fromAmino(object: _86.PairsAmino): _86.Pairs;
                    toAmino(message: _86.Pairs): _86.PairsAmino;
                    fromAminoMsg(object: _86.PairsAminoMsg): _86.Pairs;
                    toAminoMsg(message: _86.Pairs): _86.PairsAminoMsg;
                    fromProtoMsg(message: _86.PairsProtoMsg): _86.Pairs;
                    toProto(message: _86.Pairs): Uint8Array;
                    toProtoMsg(message: _86.Pairs): _86.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _86.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.Pair;
                    fromPartial(object: Partial<_86.Pair>): _86.Pair;
                    fromAmino(object: _86.PairAmino): _86.Pair;
                    toAmino(message: _86.Pair): _86.PairAmino;
                    fromAminoMsg(object: _86.PairAminoMsg): _86.Pair;
                    toAminoMsg(message: _86.Pair): _86.PairAminoMsg;
                    fromProtoMsg(message: _86.PairProtoMsg): _86.Pair;
                    toProto(message: _86.Pair): Uint8Array;
                    toProtoMsg(message: _86.Pair): _86.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _235.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _87.ConfigRequest): Promise<_87.ConfigResponse>;
                };
                LCDQueryClient: typeof _220.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _87.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _87.ConfigRequest;
                    fromPartial(_: Partial<_87.ConfigRequest>): _87.ConfigRequest;
                    fromAmino(_: _87.ConfigRequestAmino): _87.ConfigRequest;
                    toAmino(_: _87.ConfigRequest): _87.ConfigRequestAmino;
                    fromAminoMsg(object: _87.ConfigRequestAminoMsg): _87.ConfigRequest;
                    toAminoMsg(message: _87.ConfigRequest): _87.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _87.ConfigRequestProtoMsg): _87.ConfigRequest;
                    toProto(message: _87.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _87.ConfigRequest): _87.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _87.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.ConfigResponse;
                    fromPartial(object: Partial<_87.ConfigResponse>): _87.ConfigResponse;
                    fromAmino(object: _87.ConfigResponseAmino): _87.ConfigResponse;
                    toAmino(message: _87.ConfigResponse): _87.ConfigResponseAmino;
                    fromAminoMsg(object: _87.ConfigResponseAminoMsg): _87.ConfigResponse;
                    toAminoMsg(message: _87.ConfigResponse): _87.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _87.ConfigResponseProtoMsg): _87.ConfigResponse;
                    toProto(message: _87.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _87.ConfigResponse): _87.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _88.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.PageRequest;
                    fromPartial(object: Partial<_88.PageRequest>): _88.PageRequest;
                    fromAmino(object: _88.PageRequestAmino): _88.PageRequest;
                    toAmino(message: _88.PageRequest): _88.PageRequestAmino;
                    fromAminoMsg(object: _88.PageRequestAminoMsg): _88.PageRequest;
                    toAminoMsg(message: _88.PageRequest): _88.PageRequestAminoMsg;
                    fromProtoMsg(message: _88.PageRequestProtoMsg): _88.PageRequest;
                    toProto(message: _88.PageRequest): Uint8Array;
                    toProtoMsg(message: _88.PageRequest): _88.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _88.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.PageResponse;
                    fromPartial(object: Partial<_88.PageResponse>): _88.PageResponse;
                    fromAmino(object: _88.PageResponseAmino): _88.PageResponse;
                    toAmino(message: _88.PageResponse): _88.PageResponseAmino;
                    fromAminoMsg(object: _88.PageResponseAminoMsg): _88.PageResponse;
                    toAminoMsg(message: _88.PageResponse): _88.PageResponseAminoMsg;
                    fromProtoMsg(message: _88.PageResponseProtoMsg): _88.PageResponse;
                    toProto(message: _88.PageResponse): Uint8Array;
                    toProtoMsg(message: _88.PageResponse): _88.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _89.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _89.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_89.ListAllInterfacesRequest>): _89.ListAllInterfacesRequest;
                    fromAmino(_: _89.ListAllInterfacesRequestAmino): _89.ListAllInterfacesRequest;
                    toAmino(_: _89.ListAllInterfacesRequest): _89.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _89.ListAllInterfacesRequestAminoMsg): _89.ListAllInterfacesRequest;
                    toAminoMsg(message: _89.ListAllInterfacesRequest): _89.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _89.ListAllInterfacesRequestProtoMsg): _89.ListAllInterfacesRequest;
                    toProto(message: _89.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _89.ListAllInterfacesRequest): _89.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _89.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_89.ListAllInterfacesResponse>): _89.ListAllInterfacesResponse;
                    fromAmino(object: _89.ListAllInterfacesResponseAmino): _89.ListAllInterfacesResponse;
                    toAmino(message: _89.ListAllInterfacesResponse): _89.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _89.ListAllInterfacesResponseAminoMsg): _89.ListAllInterfacesResponse;
                    toAminoMsg(message: _89.ListAllInterfacesResponse): _89.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _89.ListAllInterfacesResponseProtoMsg): _89.ListAllInterfacesResponse;
                    toProto(message: _89.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _89.ListAllInterfacesResponse): _89.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _89.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.ListImplementationsRequest;
                    fromPartial(object: Partial<_89.ListImplementationsRequest>): _89.ListImplementationsRequest;
                    fromAmino(object: _89.ListImplementationsRequestAmino): _89.ListImplementationsRequest;
                    toAmino(message: _89.ListImplementationsRequest): _89.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _89.ListImplementationsRequestAminoMsg): _89.ListImplementationsRequest;
                    toAminoMsg(message: _89.ListImplementationsRequest): _89.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _89.ListImplementationsRequestProtoMsg): _89.ListImplementationsRequest;
                    toProto(message: _89.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _89.ListImplementationsRequest): _89.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _89.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.ListImplementationsResponse;
                    fromPartial(object: Partial<_89.ListImplementationsResponse>): _89.ListImplementationsResponse;
                    fromAmino(object: _89.ListImplementationsResponseAmino): _89.ListImplementationsResponse;
                    toAmino(message: _89.ListImplementationsResponse): _89.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _89.ListImplementationsResponseAminoMsg): _89.ListImplementationsResponse;
                    toAminoMsg(message: _89.ListImplementationsResponse): _89.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _89.ListImplementationsResponseProtoMsg): _89.ListImplementationsResponse;
                    toProto(message: _89.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _89.ListImplementationsResponse): _89.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _90.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.AppDescriptor;
                    fromPartial(object: Partial<_90.AppDescriptor>): _90.AppDescriptor;
                    fromAmino(object: _90.AppDescriptorAmino): _90.AppDescriptor;
                    toAmino(message: _90.AppDescriptor): _90.AppDescriptorAmino;
                    fromAminoMsg(object: _90.AppDescriptorAminoMsg): _90.AppDescriptor;
                    toAminoMsg(message: _90.AppDescriptor): _90.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _90.AppDescriptorProtoMsg): _90.AppDescriptor;
                    toProto(message: _90.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _90.AppDescriptor): _90.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _90.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.TxDescriptor;
                    fromPartial(object: Partial<_90.TxDescriptor>): _90.TxDescriptor;
                    fromAmino(object: _90.TxDescriptorAmino): _90.TxDescriptor;
                    toAmino(message: _90.TxDescriptor): _90.TxDescriptorAmino;
                    fromAminoMsg(object: _90.TxDescriptorAminoMsg): _90.TxDescriptor;
                    toAminoMsg(message: _90.TxDescriptor): _90.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _90.TxDescriptorProtoMsg): _90.TxDescriptor;
                    toProto(message: _90.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _90.TxDescriptor): _90.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _90.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.AuthnDescriptor;
                    fromPartial(object: Partial<_90.AuthnDescriptor>): _90.AuthnDescriptor;
                    fromAmino(object: _90.AuthnDescriptorAmino): _90.AuthnDescriptor;
                    toAmino(message: _90.AuthnDescriptor): _90.AuthnDescriptorAmino;
                    fromAminoMsg(object: _90.AuthnDescriptorAminoMsg): _90.AuthnDescriptor;
                    toAminoMsg(message: _90.AuthnDescriptor): _90.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _90.AuthnDescriptorProtoMsg): _90.AuthnDescriptor;
                    toProto(message: _90.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _90.AuthnDescriptor): _90.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _90.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.SigningModeDescriptor;
                    fromPartial(object: Partial<_90.SigningModeDescriptor>): _90.SigningModeDescriptor;
                    fromAmino(object: _90.SigningModeDescriptorAmino): _90.SigningModeDescriptor;
                    toAmino(message: _90.SigningModeDescriptor): _90.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _90.SigningModeDescriptorAminoMsg): _90.SigningModeDescriptor;
                    toAminoMsg(message: _90.SigningModeDescriptor): _90.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _90.SigningModeDescriptorProtoMsg): _90.SigningModeDescriptor;
                    toProto(message: _90.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _90.SigningModeDescriptor): _90.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _90.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.ChainDescriptor;
                    fromPartial(object: Partial<_90.ChainDescriptor>): _90.ChainDescriptor;
                    fromAmino(object: _90.ChainDescriptorAmino): _90.ChainDescriptor;
                    toAmino(message: _90.ChainDescriptor): _90.ChainDescriptorAmino;
                    fromAminoMsg(object: _90.ChainDescriptorAminoMsg): _90.ChainDescriptor;
                    toAminoMsg(message: _90.ChainDescriptor): _90.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _90.ChainDescriptorProtoMsg): _90.ChainDescriptor;
                    toProto(message: _90.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _90.ChainDescriptor): _90.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _90.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.CodecDescriptor;
                    fromPartial(object: Partial<_90.CodecDescriptor>): _90.CodecDescriptor;
                    fromAmino(object: _90.CodecDescriptorAmino): _90.CodecDescriptor;
                    toAmino(message: _90.CodecDescriptor): _90.CodecDescriptorAmino;
                    fromAminoMsg(object: _90.CodecDescriptorAminoMsg): _90.CodecDescriptor;
                    toAminoMsg(message: _90.CodecDescriptor): _90.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _90.CodecDescriptorProtoMsg): _90.CodecDescriptor;
                    toProto(message: _90.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _90.CodecDescriptor): _90.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _90.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.InterfaceDescriptor;
                    fromPartial(object: Partial<_90.InterfaceDescriptor>): _90.InterfaceDescriptor;
                    fromAmino(object: _90.InterfaceDescriptorAmino): _90.InterfaceDescriptor;
                    toAmino(message: _90.InterfaceDescriptor): _90.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _90.InterfaceDescriptorAminoMsg): _90.InterfaceDescriptor;
                    toAminoMsg(message: _90.InterfaceDescriptor): _90.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _90.InterfaceDescriptorProtoMsg): _90.InterfaceDescriptor;
                    toProto(message: _90.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _90.InterfaceDescriptor): _90.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _90.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_90.InterfaceImplementerDescriptor>): _90.InterfaceImplementerDescriptor;
                    fromAmino(object: _90.InterfaceImplementerDescriptorAmino): _90.InterfaceImplementerDescriptor;
                    toAmino(message: _90.InterfaceImplementerDescriptor): _90.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _90.InterfaceImplementerDescriptorAminoMsg): _90.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _90.InterfaceImplementerDescriptor): _90.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _90.InterfaceImplementerDescriptorProtoMsg): _90.InterfaceImplementerDescriptor;
                    toProto(message: _90.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _90.InterfaceImplementerDescriptor): _90.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _90.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_90.InterfaceAcceptingMessageDescriptor>): _90.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _90.InterfaceAcceptingMessageDescriptorAmino): _90.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _90.InterfaceAcceptingMessageDescriptor): _90.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _90.InterfaceAcceptingMessageDescriptorAminoMsg): _90.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _90.InterfaceAcceptingMessageDescriptor): _90.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _90.InterfaceAcceptingMessageDescriptorProtoMsg): _90.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _90.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _90.InterfaceAcceptingMessageDescriptor): _90.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _90.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.ConfigurationDescriptor;
                    fromPartial(object: Partial<_90.ConfigurationDescriptor>): _90.ConfigurationDescriptor;
                    fromAmino(object: _90.ConfigurationDescriptorAmino): _90.ConfigurationDescriptor;
                    toAmino(message: _90.ConfigurationDescriptor): _90.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _90.ConfigurationDescriptorAminoMsg): _90.ConfigurationDescriptor;
                    toAminoMsg(message: _90.ConfigurationDescriptor): _90.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _90.ConfigurationDescriptorProtoMsg): _90.ConfigurationDescriptor;
                    toProto(message: _90.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _90.ConfigurationDescriptor): _90.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _90.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.MsgDescriptor;
                    fromPartial(object: Partial<_90.MsgDescriptor>): _90.MsgDescriptor;
                    fromAmino(object: _90.MsgDescriptorAmino): _90.MsgDescriptor;
                    toAmino(message: _90.MsgDescriptor): _90.MsgDescriptorAmino;
                    fromAminoMsg(object: _90.MsgDescriptorAminoMsg): _90.MsgDescriptor;
                    toAminoMsg(message: _90.MsgDescriptor): _90.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _90.MsgDescriptorProtoMsg): _90.MsgDescriptor;
                    toProto(message: _90.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _90.MsgDescriptor): _90.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _90.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _90.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_90.GetAuthnDescriptorRequest>): _90.GetAuthnDescriptorRequest;
                    fromAmino(_: _90.GetAuthnDescriptorRequestAmino): _90.GetAuthnDescriptorRequest;
                    toAmino(_: _90.GetAuthnDescriptorRequest): _90.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _90.GetAuthnDescriptorRequestAminoMsg): _90.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _90.GetAuthnDescriptorRequest): _90.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _90.GetAuthnDescriptorRequestProtoMsg): _90.GetAuthnDescriptorRequest;
                    toProto(message: _90.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _90.GetAuthnDescriptorRequest): _90.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _90.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_90.GetAuthnDescriptorResponse>): _90.GetAuthnDescriptorResponse;
                    fromAmino(object: _90.GetAuthnDescriptorResponseAmino): _90.GetAuthnDescriptorResponse;
                    toAmino(message: _90.GetAuthnDescriptorResponse): _90.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _90.GetAuthnDescriptorResponseAminoMsg): _90.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _90.GetAuthnDescriptorResponse): _90.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _90.GetAuthnDescriptorResponseProtoMsg): _90.GetAuthnDescriptorResponse;
                    toProto(message: _90.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _90.GetAuthnDescriptorResponse): _90.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _90.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _90.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_90.GetChainDescriptorRequest>): _90.GetChainDescriptorRequest;
                    fromAmino(_: _90.GetChainDescriptorRequestAmino): _90.GetChainDescriptorRequest;
                    toAmino(_: _90.GetChainDescriptorRequest): _90.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _90.GetChainDescriptorRequestAminoMsg): _90.GetChainDescriptorRequest;
                    toAminoMsg(message: _90.GetChainDescriptorRequest): _90.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _90.GetChainDescriptorRequestProtoMsg): _90.GetChainDescriptorRequest;
                    toProto(message: _90.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _90.GetChainDescriptorRequest): _90.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _90.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_90.GetChainDescriptorResponse>): _90.GetChainDescriptorResponse;
                    fromAmino(object: _90.GetChainDescriptorResponseAmino): _90.GetChainDescriptorResponse;
                    toAmino(message: _90.GetChainDescriptorResponse): _90.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _90.GetChainDescriptorResponseAminoMsg): _90.GetChainDescriptorResponse;
                    toAminoMsg(message: _90.GetChainDescriptorResponse): _90.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _90.GetChainDescriptorResponseProtoMsg): _90.GetChainDescriptorResponse;
                    toProto(message: _90.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _90.GetChainDescriptorResponse): _90.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _90.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _90.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_90.GetCodecDescriptorRequest>): _90.GetCodecDescriptorRequest;
                    fromAmino(_: _90.GetCodecDescriptorRequestAmino): _90.GetCodecDescriptorRequest;
                    toAmino(_: _90.GetCodecDescriptorRequest): _90.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _90.GetCodecDescriptorRequestAminoMsg): _90.GetCodecDescriptorRequest;
                    toAminoMsg(message: _90.GetCodecDescriptorRequest): _90.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _90.GetCodecDescriptorRequestProtoMsg): _90.GetCodecDescriptorRequest;
                    toProto(message: _90.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _90.GetCodecDescriptorRequest): _90.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _90.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_90.GetCodecDescriptorResponse>): _90.GetCodecDescriptorResponse;
                    fromAmino(object: _90.GetCodecDescriptorResponseAmino): _90.GetCodecDescriptorResponse;
                    toAmino(message: _90.GetCodecDescriptorResponse): _90.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _90.GetCodecDescriptorResponseAminoMsg): _90.GetCodecDescriptorResponse;
                    toAminoMsg(message: _90.GetCodecDescriptorResponse): _90.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _90.GetCodecDescriptorResponseProtoMsg): _90.GetCodecDescriptorResponse;
                    toProto(message: _90.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _90.GetCodecDescriptorResponse): _90.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _90.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _90.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_90.GetConfigurationDescriptorRequest>): _90.GetConfigurationDescriptorRequest;
                    fromAmino(_: _90.GetConfigurationDescriptorRequestAmino): _90.GetConfigurationDescriptorRequest;
                    toAmino(_: _90.GetConfigurationDescriptorRequest): _90.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _90.GetConfigurationDescriptorRequestAminoMsg): _90.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _90.GetConfigurationDescriptorRequest): _90.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _90.GetConfigurationDescriptorRequestProtoMsg): _90.GetConfigurationDescriptorRequest;
                    toProto(message: _90.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _90.GetConfigurationDescriptorRequest): _90.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _90.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_90.GetConfigurationDescriptorResponse>): _90.GetConfigurationDescriptorResponse;
                    fromAmino(object: _90.GetConfigurationDescriptorResponseAmino): _90.GetConfigurationDescriptorResponse;
                    toAmino(message: _90.GetConfigurationDescriptorResponse): _90.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _90.GetConfigurationDescriptorResponseAminoMsg): _90.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _90.GetConfigurationDescriptorResponse): _90.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _90.GetConfigurationDescriptorResponseProtoMsg): _90.GetConfigurationDescriptorResponse;
                    toProto(message: _90.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _90.GetConfigurationDescriptorResponse): _90.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _90.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _90.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_90.GetQueryServicesDescriptorRequest>): _90.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _90.GetQueryServicesDescriptorRequestAmino): _90.GetQueryServicesDescriptorRequest;
                    toAmino(_: _90.GetQueryServicesDescriptorRequest): _90.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _90.GetQueryServicesDescriptorRequestAminoMsg): _90.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _90.GetQueryServicesDescriptorRequest): _90.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _90.GetQueryServicesDescriptorRequestProtoMsg): _90.GetQueryServicesDescriptorRequest;
                    toProto(message: _90.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _90.GetQueryServicesDescriptorRequest): _90.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _90.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_90.GetQueryServicesDescriptorResponse>): _90.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _90.GetQueryServicesDescriptorResponseAmino): _90.GetQueryServicesDescriptorResponse;
                    toAmino(message: _90.GetQueryServicesDescriptorResponse): _90.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _90.GetQueryServicesDescriptorResponseAminoMsg): _90.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _90.GetQueryServicesDescriptorResponse): _90.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _90.GetQueryServicesDescriptorResponseProtoMsg): _90.GetQueryServicesDescriptorResponse;
                    toProto(message: _90.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _90.GetQueryServicesDescriptorResponse): _90.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _90.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _90.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_90.GetTxDescriptorRequest>): _90.GetTxDescriptorRequest;
                    fromAmino(_: _90.GetTxDescriptorRequestAmino): _90.GetTxDescriptorRequest;
                    toAmino(_: _90.GetTxDescriptorRequest): _90.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _90.GetTxDescriptorRequestAminoMsg): _90.GetTxDescriptorRequest;
                    toAminoMsg(message: _90.GetTxDescriptorRequest): _90.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _90.GetTxDescriptorRequestProtoMsg): _90.GetTxDescriptorRequest;
                    toProto(message: _90.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _90.GetTxDescriptorRequest): _90.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _90.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_90.GetTxDescriptorResponse>): _90.GetTxDescriptorResponse;
                    fromAmino(object: _90.GetTxDescriptorResponseAmino): _90.GetTxDescriptorResponse;
                    toAmino(message: _90.GetTxDescriptorResponse): _90.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _90.GetTxDescriptorResponseAminoMsg): _90.GetTxDescriptorResponse;
                    toAminoMsg(message: _90.GetTxDescriptorResponse): _90.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _90.GetTxDescriptorResponseProtoMsg): _90.GetTxDescriptorResponse;
                    toProto(message: _90.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _90.GetTxDescriptorResponse): _90.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _90.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.QueryServicesDescriptor;
                    fromPartial(object: Partial<_90.QueryServicesDescriptor>): _90.QueryServicesDescriptor;
                    fromAmino(object: _90.QueryServicesDescriptorAmino): _90.QueryServicesDescriptor;
                    toAmino(message: _90.QueryServicesDescriptor): _90.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _90.QueryServicesDescriptorAminoMsg): _90.QueryServicesDescriptor;
                    toAminoMsg(message: _90.QueryServicesDescriptor): _90.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _90.QueryServicesDescriptorProtoMsg): _90.QueryServicesDescriptor;
                    toProto(message: _90.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _90.QueryServicesDescriptor): _90.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _90.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.QueryServiceDescriptor;
                    fromPartial(object: Partial<_90.QueryServiceDescriptor>): _90.QueryServiceDescriptor;
                    fromAmino(object: _90.QueryServiceDescriptorAmino): _90.QueryServiceDescriptor;
                    toAmino(message: _90.QueryServiceDescriptor): _90.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _90.QueryServiceDescriptorAminoMsg): _90.QueryServiceDescriptor;
                    toAminoMsg(message: _90.QueryServiceDescriptor): _90.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _90.QueryServiceDescriptorProtoMsg): _90.QueryServiceDescriptor;
                    toProto(message: _90.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _90.QueryServiceDescriptor): _90.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _90.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.QueryMethodDescriptor;
                    fromPartial(object: Partial<_90.QueryMethodDescriptor>): _90.QueryMethodDescriptor;
                    fromAmino(object: _90.QueryMethodDescriptorAmino): _90.QueryMethodDescriptor;
                    toAmino(message: _90.QueryMethodDescriptor): _90.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _90.QueryMethodDescriptorAminoMsg): _90.QueryMethodDescriptor;
                    toAminoMsg(message: _90.QueryMethodDescriptor): _90.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _90.QueryMethodDescriptorProtoMsg): _90.QueryMethodDescriptor;
                    toProto(message: _90.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _90.QueryMethodDescriptor): _90.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _91.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.Snapshot;
                    fromPartial(object: Partial<_91.Snapshot>): _91.Snapshot;
                    fromAmino(object: _91.SnapshotAmino): _91.Snapshot;
                    toAmino(message: _91.Snapshot): _91.SnapshotAmino;
                    fromAminoMsg(object: _91.SnapshotAminoMsg): _91.Snapshot;
                    toAminoMsg(message: _91.Snapshot): _91.SnapshotAminoMsg;
                    fromProtoMsg(message: _91.SnapshotProtoMsg): _91.Snapshot;
                    toProto(message: _91.Snapshot): Uint8Array;
                    toProtoMsg(message: _91.Snapshot): _91.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _91.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.Metadata;
                    fromPartial(object: Partial<_91.Metadata>): _91.Metadata;
                    fromAmino(object: _91.MetadataAmino): _91.Metadata;
                    toAmino(message: _91.Metadata): _91.MetadataAmino;
                    fromAminoMsg(object: _91.MetadataAminoMsg): _91.Metadata;
                    toAminoMsg(message: _91.Metadata): _91.MetadataAminoMsg;
                    fromProtoMsg(message: _91.MetadataProtoMsg): _91.Metadata;
                    toProto(message: _91.Metadata): Uint8Array;
                    toProtoMsg(message: _91.Metadata): _91.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _91.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.SnapshotItem;
                    fromPartial(object: Partial<_91.SnapshotItem>): _91.SnapshotItem;
                    fromAmino(object: _91.SnapshotItemAmino): _91.SnapshotItem;
                    toAmino(message: _91.SnapshotItem): _91.SnapshotItemAmino;
                    fromAminoMsg(object: _91.SnapshotItemAminoMsg): _91.SnapshotItem;
                    toAminoMsg(message: _91.SnapshotItem): _91.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _91.SnapshotItemProtoMsg): _91.SnapshotItem;
                    toProto(message: _91.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _91.SnapshotItem): _91.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _91.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.SnapshotStoreItem;
                    fromPartial(object: Partial<_91.SnapshotStoreItem>): _91.SnapshotStoreItem;
                    fromAmino(object: _91.SnapshotStoreItemAmino): _91.SnapshotStoreItem;
                    toAmino(message: _91.SnapshotStoreItem): _91.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _91.SnapshotStoreItemAminoMsg): _91.SnapshotStoreItem;
                    toAminoMsg(message: _91.SnapshotStoreItem): _91.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _91.SnapshotStoreItemProtoMsg): _91.SnapshotStoreItem;
                    toProto(message: _91.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _91.SnapshotStoreItem): _91.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _91.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.SnapshotIAVLItem;
                    fromPartial(object: Partial<_91.SnapshotIAVLItem>): _91.SnapshotIAVLItem;
                    fromAmino(object: _91.SnapshotIAVLItemAmino): _91.SnapshotIAVLItem;
                    toAmino(message: _91.SnapshotIAVLItem): _91.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _91.SnapshotIAVLItemAminoMsg): _91.SnapshotIAVLItem;
                    toAminoMsg(message: _91.SnapshotIAVLItem): _91.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _91.SnapshotIAVLItemProtoMsg): _91.SnapshotIAVLItem;
                    toProto(message: _91.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _91.SnapshotIAVLItem): _91.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _91.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_91.SnapshotExtensionMeta>): _91.SnapshotExtensionMeta;
                    fromAmino(object: _91.SnapshotExtensionMetaAmino): _91.SnapshotExtensionMeta;
                    toAmino(message: _91.SnapshotExtensionMeta): _91.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _91.SnapshotExtensionMetaAminoMsg): _91.SnapshotExtensionMeta;
                    toAminoMsg(message: _91.SnapshotExtensionMeta): _91.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _91.SnapshotExtensionMetaProtoMsg): _91.SnapshotExtensionMeta;
                    toProto(message: _91.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _91.SnapshotExtensionMeta): _91.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _91.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_91.SnapshotExtensionPayload>): _91.SnapshotExtensionPayload;
                    fromAmino(object: _91.SnapshotExtensionPayloadAmino): _91.SnapshotExtensionPayload;
                    toAmino(message: _91.SnapshotExtensionPayload): _91.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _91.SnapshotExtensionPayloadAminoMsg): _91.SnapshotExtensionPayload;
                    toAminoMsg(message: _91.SnapshotExtensionPayload): _91.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _91.SnapshotExtensionPayloadProtoMsg): _91.SnapshotExtensionPayload;
                    toProto(message: _91.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _91.SnapshotExtensionPayload): _91.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _93.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.StoreKVPair;
                    fromPartial(object: Partial<_93.StoreKVPair>): _93.StoreKVPair;
                    fromAmino(object: _93.StoreKVPairAmino): _93.StoreKVPair;
                    toAmino(message: _93.StoreKVPair): _93.StoreKVPairAmino;
                    fromAminoMsg(object: _93.StoreKVPairAminoMsg): _93.StoreKVPair;
                    toAminoMsg(message: _93.StoreKVPair): _93.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _93.StoreKVPairProtoMsg): _93.StoreKVPair;
                    toProto(message: _93.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _93.StoreKVPair): _93.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _93.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.BlockMetadata;
                    fromPartial(object: Partial<_93.BlockMetadata>): _93.BlockMetadata;
                    fromAmino(object: _93.BlockMetadataAmino): _93.BlockMetadata;
                    toAmino(message: _93.BlockMetadata): _93.BlockMetadataAmino;
                    fromAminoMsg(object: _93.BlockMetadataAminoMsg): _93.BlockMetadata;
                    toAminoMsg(message: _93.BlockMetadata): _93.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _93.BlockMetadataProtoMsg): _93.BlockMetadata;
                    toProto(message: _93.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _93.BlockMetadata): _93.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _93.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_93.BlockMetadata_DeliverTx>): _93.BlockMetadata_DeliverTx;
                    fromAmino(object: _93.BlockMetadata_DeliverTxAmino): _93.BlockMetadata_DeliverTx;
                    toAmino(message: _93.BlockMetadata_DeliverTx): _93.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _93.BlockMetadata_DeliverTxAminoMsg): _93.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _93.BlockMetadata_DeliverTx): _93.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _93.BlockMetadata_DeliverTxProtoMsg): _93.BlockMetadata_DeliverTx;
                    toProto(message: _93.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _93.BlockMetadata_DeliverTx): _93.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _92.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.CommitInfo;
                    fromPartial(object: Partial<_92.CommitInfo>): _92.CommitInfo;
                    fromAmino(object: _92.CommitInfoAmino): _92.CommitInfo;
                    toAmino(message: _92.CommitInfo): _92.CommitInfoAmino;
                    fromAminoMsg(object: _92.CommitInfoAminoMsg): _92.CommitInfo;
                    toAminoMsg(message: _92.CommitInfo): _92.CommitInfoAminoMsg;
                    fromProtoMsg(message: _92.CommitInfoProtoMsg): _92.CommitInfo;
                    toProto(message: _92.CommitInfo): Uint8Array;
                    toProtoMsg(message: _92.CommitInfo): _92.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _92.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.StoreInfo;
                    fromPartial(object: Partial<_92.StoreInfo>): _92.StoreInfo;
                    fromAmino(object: _92.StoreInfoAmino): _92.StoreInfo;
                    toAmino(message: _92.StoreInfo): _92.StoreInfoAmino;
                    fromAminoMsg(object: _92.StoreInfoAminoMsg): _92.StoreInfo;
                    toAminoMsg(message: _92.StoreInfo): _92.StoreInfoAminoMsg;
                    fromProtoMsg(message: _92.StoreInfoProtoMsg): _92.StoreInfo;
                    toProto(message: _92.StoreInfo): Uint8Array;
                    toProtoMsg(message: _92.StoreInfo): _92.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _92.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.CommitID;
                    fromPartial(object: Partial<_92.CommitID>): _92.CommitID;
                    fromAmino(object: _92.CommitIDAmino): _92.CommitID;
                    toAmino(message: _92.CommitID): _92.CommitIDAmino;
                    fromAminoMsg(object: _92.CommitIDAminoMsg): _92.CommitID;
                    toAminoMsg(message: _92.CommitID): _92.CommitIDAminoMsg;
                    fromProtoMsg(message: _92.CommitIDProtoMsg): _92.CommitID;
                    toProto(message: _92.CommitID): Uint8Array;
                    toProtoMsg(message: _92.CommitID): _92.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _236.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _94.GetNodeInfoRequest): Promise<_94.GetNodeInfoResponse>;
                    getSyncing(request?: _94.GetSyncingRequest): Promise<_94.GetSyncingResponse>;
                    getLatestBlock(request?: _94.GetLatestBlockRequest): Promise<_94.GetLatestBlockResponse>;
                    getBlockByHeight(request: _94.GetBlockByHeightRequest): Promise<_94.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _94.GetLatestValidatorSetRequest): Promise<_94.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _94.GetValidatorSetByHeightRequest): Promise<_94.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _221.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _94.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_94.GetValidatorSetByHeightRequest>): _94.GetValidatorSetByHeightRequest;
                    fromAmino(object: _94.GetValidatorSetByHeightRequestAmino): _94.GetValidatorSetByHeightRequest;
                    toAmino(message: _94.GetValidatorSetByHeightRequest): _94.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _94.GetValidatorSetByHeightRequestAminoMsg): _94.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _94.GetValidatorSetByHeightRequest): _94.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _94.GetValidatorSetByHeightRequestProtoMsg): _94.GetValidatorSetByHeightRequest;
                    toProto(message: _94.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _94.GetValidatorSetByHeightRequest): _94.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _94.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_94.GetValidatorSetByHeightResponse>): _94.GetValidatorSetByHeightResponse;
                    fromAmino(object: _94.GetValidatorSetByHeightResponseAmino): _94.GetValidatorSetByHeightResponse;
                    toAmino(message: _94.GetValidatorSetByHeightResponse): _94.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _94.GetValidatorSetByHeightResponseAminoMsg): _94.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _94.GetValidatorSetByHeightResponse): _94.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _94.GetValidatorSetByHeightResponseProtoMsg): _94.GetValidatorSetByHeightResponse;
                    toProto(message: _94.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _94.GetValidatorSetByHeightResponse): _94.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _94.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_94.GetLatestValidatorSetRequest>): _94.GetLatestValidatorSetRequest;
                    fromAmino(object: _94.GetLatestValidatorSetRequestAmino): _94.GetLatestValidatorSetRequest;
                    toAmino(message: _94.GetLatestValidatorSetRequest): _94.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _94.GetLatestValidatorSetRequestAminoMsg): _94.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _94.GetLatestValidatorSetRequest): _94.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _94.GetLatestValidatorSetRequestProtoMsg): _94.GetLatestValidatorSetRequest;
                    toProto(message: _94.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _94.GetLatestValidatorSetRequest): _94.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _94.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_94.GetLatestValidatorSetResponse>): _94.GetLatestValidatorSetResponse;
                    fromAmino(object: _94.GetLatestValidatorSetResponseAmino): _94.GetLatestValidatorSetResponse;
                    toAmino(message: _94.GetLatestValidatorSetResponse): _94.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _94.GetLatestValidatorSetResponseAminoMsg): _94.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _94.GetLatestValidatorSetResponse): _94.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _94.GetLatestValidatorSetResponseProtoMsg): _94.GetLatestValidatorSetResponse;
                    toProto(message: _94.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _94.GetLatestValidatorSetResponse): _94.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _94.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.Validator;
                    fromPartial(object: Partial<_94.Validator>): _94.Validator;
                    fromAmino(object: _94.ValidatorAmino): _94.Validator;
                    toAmino(message: _94.Validator): _94.ValidatorAmino;
                    fromAminoMsg(object: _94.ValidatorAminoMsg): _94.Validator;
                    toAminoMsg(message: _94.Validator): _94.ValidatorAminoMsg;
                    fromProtoMsg(message: _94.ValidatorProtoMsg): _94.Validator;
                    toProto(message: _94.Validator): Uint8Array;
                    toProtoMsg(message: _94.Validator): _94.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _94.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_94.GetBlockByHeightRequest>): _94.GetBlockByHeightRequest;
                    fromAmino(object: _94.GetBlockByHeightRequestAmino): _94.GetBlockByHeightRequest;
                    toAmino(message: _94.GetBlockByHeightRequest): _94.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _94.GetBlockByHeightRequestAminoMsg): _94.GetBlockByHeightRequest;
                    toAminoMsg(message: _94.GetBlockByHeightRequest): _94.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _94.GetBlockByHeightRequestProtoMsg): _94.GetBlockByHeightRequest;
                    toProto(message: _94.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _94.GetBlockByHeightRequest): _94.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _94.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_94.GetBlockByHeightResponse>): _94.GetBlockByHeightResponse;
                    fromAmino(object: _94.GetBlockByHeightResponseAmino): _94.GetBlockByHeightResponse;
                    toAmino(message: _94.GetBlockByHeightResponse): _94.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _94.GetBlockByHeightResponseAminoMsg): _94.GetBlockByHeightResponse;
                    toAminoMsg(message: _94.GetBlockByHeightResponse): _94.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _94.GetBlockByHeightResponseProtoMsg): _94.GetBlockByHeightResponse;
                    toProto(message: _94.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _94.GetBlockByHeightResponse): _94.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _94.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _94.GetLatestBlockRequest;
                    fromPartial(_: Partial<_94.GetLatestBlockRequest>): _94.GetLatestBlockRequest;
                    fromAmino(_: _94.GetLatestBlockRequestAmino): _94.GetLatestBlockRequest;
                    toAmino(_: _94.GetLatestBlockRequest): _94.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _94.GetLatestBlockRequestAminoMsg): _94.GetLatestBlockRequest;
                    toAminoMsg(message: _94.GetLatestBlockRequest): _94.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _94.GetLatestBlockRequestProtoMsg): _94.GetLatestBlockRequest;
                    toProto(message: _94.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _94.GetLatestBlockRequest): _94.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _94.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.GetLatestBlockResponse;
                    fromPartial(object: Partial<_94.GetLatestBlockResponse>): _94.GetLatestBlockResponse;
                    fromAmino(object: _94.GetLatestBlockResponseAmino): _94.GetLatestBlockResponse;
                    toAmino(message: _94.GetLatestBlockResponse): _94.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _94.GetLatestBlockResponseAminoMsg): _94.GetLatestBlockResponse;
                    toAminoMsg(message: _94.GetLatestBlockResponse): _94.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _94.GetLatestBlockResponseProtoMsg): _94.GetLatestBlockResponse;
                    toProto(message: _94.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _94.GetLatestBlockResponse): _94.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _94.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _94.GetSyncingRequest;
                    fromPartial(_: Partial<_94.GetSyncingRequest>): _94.GetSyncingRequest;
                    fromAmino(_: _94.GetSyncingRequestAmino): _94.GetSyncingRequest;
                    toAmino(_: _94.GetSyncingRequest): _94.GetSyncingRequestAmino;
                    fromAminoMsg(object: _94.GetSyncingRequestAminoMsg): _94.GetSyncingRequest;
                    toAminoMsg(message: _94.GetSyncingRequest): _94.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _94.GetSyncingRequestProtoMsg): _94.GetSyncingRequest;
                    toProto(message: _94.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _94.GetSyncingRequest): _94.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _94.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.GetSyncingResponse;
                    fromPartial(object: Partial<_94.GetSyncingResponse>): _94.GetSyncingResponse;
                    fromAmino(object: _94.GetSyncingResponseAmino): _94.GetSyncingResponse;
                    toAmino(message: _94.GetSyncingResponse): _94.GetSyncingResponseAmino;
                    fromAminoMsg(object: _94.GetSyncingResponseAminoMsg): _94.GetSyncingResponse;
                    toAminoMsg(message: _94.GetSyncingResponse): _94.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _94.GetSyncingResponseProtoMsg): _94.GetSyncingResponse;
                    toProto(message: _94.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _94.GetSyncingResponse): _94.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _94.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _94.GetNodeInfoRequest;
                    fromPartial(_: Partial<_94.GetNodeInfoRequest>): _94.GetNodeInfoRequest;
                    fromAmino(_: _94.GetNodeInfoRequestAmino): _94.GetNodeInfoRequest;
                    toAmino(_: _94.GetNodeInfoRequest): _94.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _94.GetNodeInfoRequestAminoMsg): _94.GetNodeInfoRequest;
                    toAminoMsg(message: _94.GetNodeInfoRequest): _94.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _94.GetNodeInfoRequestProtoMsg): _94.GetNodeInfoRequest;
                    toProto(message: _94.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _94.GetNodeInfoRequest): _94.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _94.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.GetNodeInfoResponse;
                    fromPartial(object: Partial<_94.GetNodeInfoResponse>): _94.GetNodeInfoResponse;
                    fromAmino(object: _94.GetNodeInfoResponseAmino): _94.GetNodeInfoResponse;
                    toAmino(message: _94.GetNodeInfoResponse): _94.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _94.GetNodeInfoResponseAminoMsg): _94.GetNodeInfoResponse;
                    toAminoMsg(message: _94.GetNodeInfoResponse): _94.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _94.GetNodeInfoResponseProtoMsg): _94.GetNodeInfoResponse;
                    toProto(message: _94.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _94.GetNodeInfoResponse): _94.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _94.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.VersionInfo;
                    fromPartial(object: Partial<_94.VersionInfo>): _94.VersionInfo;
                    fromAmino(object: _94.VersionInfoAmino): _94.VersionInfo;
                    toAmino(message: _94.VersionInfo): _94.VersionInfoAmino;
                    fromAminoMsg(object: _94.VersionInfoAminoMsg): _94.VersionInfo;
                    toAminoMsg(message: _94.VersionInfo): _94.VersionInfoAminoMsg;
                    fromProtoMsg(message: _94.VersionInfoProtoMsg): _94.VersionInfo;
                    toProto(message: _94.VersionInfo): Uint8Array;
                    toProtoMsg(message: _94.VersionInfo): _94.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _94.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.Module;
                    fromPartial(object: Partial<_94.Module>): _94.Module;
                    fromAmino(object: _94.ModuleAmino): _94.Module;
                    toAmino(message: _94.Module): _94.ModuleAmino;
                    fromAminoMsg(object: _94.ModuleAminoMsg): _94.Module;
                    toAminoMsg(message: _94.Module): _94.ModuleAminoMsg;
                    fromProtoMsg(message: _94.ModuleProtoMsg): _94.Module;
                    toProto(message: _94.Module): Uint8Array;
                    toProtoMsg(message: _94.Module): _94.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _95.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.Coin;
                fromPartial(object: Partial<_95.Coin>): _95.Coin;
                fromAmino(object: _95.CoinAmino): _95.Coin;
                toAmino(message: _95.Coin): _95.CoinAmino;
                fromAminoMsg(object: _95.CoinAminoMsg): _95.Coin;
                toAminoMsg(message: _95.Coin): _95.CoinAminoMsg;
                fromProtoMsg(message: _95.CoinProtoMsg): _95.Coin;
                toProto(message: _95.Coin): Uint8Array;
                toProtoMsg(message: _95.Coin): _95.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _95.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.DecCoin;
                fromPartial(object: Partial<_95.DecCoin>): _95.DecCoin;
                fromAmino(object: _95.DecCoinAmino): _95.DecCoin;
                toAmino(message: _95.DecCoin): _95.DecCoinAmino;
                fromAminoMsg(object: _95.DecCoinAminoMsg): _95.DecCoin;
                toAminoMsg(message: _95.DecCoin): _95.DecCoinAminoMsg;
                fromProtoMsg(message: _95.DecCoinProtoMsg): _95.DecCoin;
                toProto(message: _95.DecCoin): Uint8Array;
                toProtoMsg(message: _95.DecCoin): _95.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _95.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.IntProto;
                fromPartial(object: Partial<_95.IntProto>): _95.IntProto;
                fromAmino(object: _95.IntProtoAmino): _95.IntProto;
                toAmino(message: _95.IntProto): _95.IntProtoAmino;
                fromAminoMsg(object: _95.IntProtoAminoMsg): _95.IntProto;
                toAminoMsg(message: _95.IntProto): _95.IntProtoAminoMsg;
                fromProtoMsg(message: _95.IntProtoProtoMsg): _95.IntProto;
                toProto(message: _95.IntProto): Uint8Array;
                toProtoMsg(message: _95.IntProto): _95.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _95.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.DecProto;
                fromPartial(object: Partial<_95.DecProto>): _95.DecProto;
                fromAmino(object: _95.DecProtoAmino): _95.DecProto;
                toAmino(message: _95.DecProto): _95.DecProtoAmino;
                fromAminoMsg(object: _95.DecProtoAminoMsg): _95.DecProto;
                toAminoMsg(message: _95.DecProto): _95.DecProtoAminoMsg;
                fromProtoMsg(message: _95.DecProtoProtoMsg): _95.DecProto;
                toProto(message: _95.DecProto): Uint8Array;
                toProtoMsg(message: _95.DecProto): _95.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _97.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.GenesisOwners;
                fromPartial(object: Partial<_97.GenesisOwners>): _97.GenesisOwners;
                fromAmino(object: _97.GenesisOwnersAmino): _97.GenesisOwners;
                toAmino(message: _97.GenesisOwners): _97.GenesisOwnersAmino;
                fromAminoMsg(object: _97.GenesisOwnersAminoMsg): _97.GenesisOwners;
                toAminoMsg(message: _97.GenesisOwners): _97.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _97.GenesisOwnersProtoMsg): _97.GenesisOwners;
                toProto(message: _97.GenesisOwners): Uint8Array;
                toProtoMsg(message: _97.GenesisOwners): _97.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _96.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.Capability;
                fromPartial(object: Partial<_96.Capability>): _96.Capability;
                fromAmino(object: _96.CapabilityAmino): _96.Capability;
                toAmino(message: _96.Capability): _96.CapabilityAmino;
                fromAminoMsg(object: _96.CapabilityAminoMsg): _96.Capability;
                toAminoMsg(message: _96.Capability): _96.CapabilityAminoMsg;
                fromProtoMsg(message: _96.CapabilityProtoMsg): _96.Capability;
                toProto(message: _96.Capability): Uint8Array;
                toProtoMsg(message: _96.Capability): _96.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _96.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.Owner;
                fromPartial(object: Partial<_96.Owner>): _96.Owner;
                fromAmino(object: _96.OwnerAmino): _96.Owner;
                toAmino(message: _96.Owner): _96.OwnerAmino;
                fromAminoMsg(object: _96.OwnerAminoMsg): _96.Owner;
                toAminoMsg(message: _96.Owner): _96.OwnerAminoMsg;
                fromProtoMsg(message: _96.OwnerProtoMsg): _96.Owner;
                toProto(message: _96.Owner): Uint8Array;
                toProtoMsg(message: _96.Owner): _96.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _96.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.CapabilityOwners;
                fromPartial(object: Partial<_96.CapabilityOwners>): _96.CapabilityOwners;
                fromAmino(object: _96.CapabilityOwnersAmino): _96.CapabilityOwners;
                toAmino(message: _96.CapabilityOwners): _96.CapabilityOwnersAmino;
                fromAminoMsg(object: _96.CapabilityOwnersAminoMsg): _96.CapabilityOwners;
                toAminoMsg(message: _96.CapabilityOwners): _96.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _96.CapabilityOwnersProtoMsg): _96.CapabilityOwners;
                toProto(message: _96.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _96.CapabilityOwners): _96.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _249.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _99.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _99.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _99.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _99.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _99.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _99.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _99.MsgVerifyInvariant) => _99.MsgVerifyInvariantAmino;
                    fromAmino: (object: _99.MsgVerifyInvariantAmino) => _99.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _99.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.MsgVerifyInvariant;
                fromPartial(object: Partial<_99.MsgVerifyInvariant>): _99.MsgVerifyInvariant;
                fromAmino(object: _99.MsgVerifyInvariantAmino): _99.MsgVerifyInvariant;
                toAmino(message: _99.MsgVerifyInvariant): _99.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _99.MsgVerifyInvariantAminoMsg): _99.MsgVerifyInvariant;
                toAminoMsg(message: _99.MsgVerifyInvariant): _99.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _99.MsgVerifyInvariantProtoMsg): _99.MsgVerifyInvariant;
                toProto(message: _99.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _99.MsgVerifyInvariant): _99.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _99.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _99.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_99.MsgVerifyInvariantResponse>): _99.MsgVerifyInvariantResponse;
                fromAmino(_: _99.MsgVerifyInvariantResponseAmino): _99.MsgVerifyInvariantResponse;
                toAmino(_: _99.MsgVerifyInvariantResponse): _99.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _99.MsgVerifyInvariantResponseAminoMsg): _99.MsgVerifyInvariantResponse;
                toAminoMsg(message: _99.MsgVerifyInvariantResponse): _99.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _99.MsgVerifyInvariantResponseProtoMsg): _99.MsgVerifyInvariantResponse;
                toProto(message: _99.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _99.MsgVerifyInvariantResponse): _99.MsgVerifyInvariantResponseProtoMsg;
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
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _100.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.PubKey;
                fromPartial(object: Partial<_100.PubKey>): _100.PubKey;
                fromAmino(object: _100.PubKeyAmino): _100.PubKey;
                toAmino(message: _100.PubKey): _100.PubKeyAmino;
                fromAminoMsg(object: _100.PubKeyAminoMsg): _100.PubKey;
                toAminoMsg(message: _100.PubKey): _100.PubKeyAminoMsg;
                fromProtoMsg(message: _100.PubKeyProtoMsg): _100.PubKey;
                toProto(message: _100.PubKey): Uint8Array;
                toProtoMsg(message: _100.PubKey): _100.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _100.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.PrivKey;
                fromPartial(object: Partial<_100.PrivKey>): _100.PrivKey;
                fromAmino(object: _100.PrivKeyAmino): _100.PrivKey;
                toAmino(message: _100.PrivKey): _100.PrivKeyAmino;
                fromAminoMsg(object: _100.PrivKeyAminoMsg): _100.PrivKey;
                toAminoMsg(message: _100.PrivKey): _100.PrivKeyAminoMsg;
                fromProtoMsg(message: _100.PrivKeyProtoMsg): _100.PrivKey;
                toProto(message: _100.PrivKey): Uint8Array;
                toProtoMsg(message: _100.PrivKey): _100.PrivKeyProtoMsg;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _101.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.LegacyAminoPubKey;
                fromPartial(object: Partial<_101.LegacyAminoPubKey>): _101.LegacyAminoPubKey;
                fromAmino(object: _101.LegacyAminoPubKeyAmino): _101.LegacyAminoPubKey;
                toAmino(message: _101.LegacyAminoPubKey): _101.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _101.LegacyAminoPubKeyAminoMsg): _101.LegacyAminoPubKey;
                toAminoMsg(message: _101.LegacyAminoPubKey): _101.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _101.LegacyAminoPubKeyProtoMsg): _101.LegacyAminoPubKey;
                toProto(message: _101.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _101.LegacyAminoPubKey): _101.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
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
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _103.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.PubKey;
                fromPartial(object: Partial<_103.PubKey>): _103.PubKey;
                fromAmino(object: _103.PubKeyAmino): _103.PubKey;
                toAmino(message: _103.PubKey): _103.PubKeyAmino;
                fromAminoMsg(object: _103.PubKeyAminoMsg): _103.PubKey;
                toAminoMsg(message: _103.PubKey): _103.PubKeyAminoMsg;
                fromProtoMsg(message: _103.PubKeyProtoMsg): _103.PubKey;
                toProto(message: _103.PubKey): Uint8Array;
                toProtoMsg(message: _103.PubKey): _103.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _103.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.PrivKey;
                fromPartial(object: Partial<_103.PrivKey>): _103.PrivKey;
                fromAmino(object: _103.PrivKeyAmino): _103.PrivKey;
                toAmino(message: _103.PrivKey): _103.PrivKeyAmino;
                fromAminoMsg(object: _103.PrivKeyAminoMsg): _103.PrivKey;
                toAminoMsg(message: _103.PrivKey): _103.PrivKeyAminoMsg;
                fromProtoMsg(message: _103.PrivKeyProtoMsg): _103.PrivKey;
                toProto(message: _103.PrivKey): Uint8Array;
                toProtoMsg(message: _103.PrivKey): _103.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _250.MsgClientImpl;
            QueryClientImpl: typeof _237.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                validatorOutstandingRewards(request: _106.QueryValidatorOutstandingRewardsRequest): Promise<_106.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _106.QueryValidatorCommissionRequest): Promise<_106.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _106.QueryValidatorSlashesRequest): Promise<_106.QueryValidatorSlashesResponse>;
                delegationRewards(request: _106.QueryDelegationRewardsRequest): Promise<_106.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _106.QueryDelegationTotalRewardsRequest): Promise<_106.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _106.QueryDelegatorValidatorsRequest): Promise<_106.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _106.QueryDelegatorWithdrawAddressRequest): Promise<_106.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _106.QueryCommunityPoolRequest): Promise<_106.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _222.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _107.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _107.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _107.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _107.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _107.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _107.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _107.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _107.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _107.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _107.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _107.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _107.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _107.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _107.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _107.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _107.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _107.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _107.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _107.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _107.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _107.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _107.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _107.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _107.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _107.MsgSetWithdrawAddress) => _107.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _107.MsgSetWithdrawAddressAmino) => _107.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _107.MsgWithdrawDelegatorReward) => _107.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _107.MsgWithdrawDelegatorRewardAmino) => _107.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _107.MsgWithdrawValidatorCommission) => _107.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _107.MsgWithdrawValidatorCommissionAmino) => _107.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _107.MsgFundCommunityPool) => _107.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _107.MsgFundCommunityPoolAmino) => _107.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _107.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_107.MsgSetWithdrawAddress>): _107.MsgSetWithdrawAddress;
                fromAmino(object: _107.MsgSetWithdrawAddressAmino): _107.MsgSetWithdrawAddress;
                toAmino(message: _107.MsgSetWithdrawAddress): _107.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _107.MsgSetWithdrawAddressAminoMsg): _107.MsgSetWithdrawAddress;
                toAminoMsg(message: _107.MsgSetWithdrawAddress): _107.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _107.MsgSetWithdrawAddressProtoMsg): _107.MsgSetWithdrawAddress;
                toProto(message: _107.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _107.MsgSetWithdrawAddress): _107.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _107.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _107.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_107.MsgSetWithdrawAddressResponse>): _107.MsgSetWithdrawAddressResponse;
                fromAmino(_: _107.MsgSetWithdrawAddressResponseAmino): _107.MsgSetWithdrawAddressResponse;
                toAmino(_: _107.MsgSetWithdrawAddressResponse): _107.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _107.MsgSetWithdrawAddressResponseAminoMsg): _107.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _107.MsgSetWithdrawAddressResponse): _107.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _107.MsgSetWithdrawAddressResponseProtoMsg): _107.MsgSetWithdrawAddressResponse;
                toProto(message: _107.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _107.MsgSetWithdrawAddressResponse): _107.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _107.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_107.MsgWithdrawDelegatorReward>): _107.MsgWithdrawDelegatorReward;
                fromAmino(object: _107.MsgWithdrawDelegatorRewardAmino): _107.MsgWithdrawDelegatorReward;
                toAmino(message: _107.MsgWithdrawDelegatorReward): _107.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _107.MsgWithdrawDelegatorRewardAminoMsg): _107.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _107.MsgWithdrawDelegatorReward): _107.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _107.MsgWithdrawDelegatorRewardProtoMsg): _107.MsgWithdrawDelegatorReward;
                toProto(message: _107.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _107.MsgWithdrawDelegatorReward): _107.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _107.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _107.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_107.MsgWithdrawDelegatorRewardResponse>): _107.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _107.MsgWithdrawDelegatorRewardResponseAmino): _107.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _107.MsgWithdrawDelegatorRewardResponse): _107.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _107.MsgWithdrawDelegatorRewardResponseAminoMsg): _107.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _107.MsgWithdrawDelegatorRewardResponse): _107.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _107.MsgWithdrawDelegatorRewardResponseProtoMsg): _107.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _107.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _107.MsgWithdrawDelegatorRewardResponse): _107.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _107.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_107.MsgWithdrawValidatorCommission>): _107.MsgWithdrawValidatorCommission;
                fromAmino(object: _107.MsgWithdrawValidatorCommissionAmino): _107.MsgWithdrawValidatorCommission;
                toAmino(message: _107.MsgWithdrawValidatorCommission): _107.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _107.MsgWithdrawValidatorCommissionAminoMsg): _107.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _107.MsgWithdrawValidatorCommission): _107.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _107.MsgWithdrawValidatorCommissionProtoMsg): _107.MsgWithdrawValidatorCommission;
                toProto(message: _107.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _107.MsgWithdrawValidatorCommission): _107.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _107.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _107.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_107.MsgWithdrawValidatorCommissionResponse>): _107.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _107.MsgWithdrawValidatorCommissionResponseAmino): _107.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _107.MsgWithdrawValidatorCommissionResponse): _107.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _107.MsgWithdrawValidatorCommissionResponseAminoMsg): _107.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _107.MsgWithdrawValidatorCommissionResponse): _107.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _107.MsgWithdrawValidatorCommissionResponseProtoMsg): _107.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _107.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _107.MsgWithdrawValidatorCommissionResponse): _107.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _107.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgFundCommunityPool;
                fromPartial(object: Partial<_107.MsgFundCommunityPool>): _107.MsgFundCommunityPool;
                fromAmino(object: _107.MsgFundCommunityPoolAmino): _107.MsgFundCommunityPool;
                toAmino(message: _107.MsgFundCommunityPool): _107.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _107.MsgFundCommunityPoolAminoMsg): _107.MsgFundCommunityPool;
                toAminoMsg(message: _107.MsgFundCommunityPool): _107.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _107.MsgFundCommunityPoolProtoMsg): _107.MsgFundCommunityPool;
                toProto(message: _107.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _107.MsgFundCommunityPool): _107.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _107.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _107.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_107.MsgFundCommunityPoolResponse>): _107.MsgFundCommunityPoolResponse;
                fromAmino(_: _107.MsgFundCommunityPoolResponseAmino): _107.MsgFundCommunityPoolResponse;
                toAmino(_: _107.MsgFundCommunityPoolResponse): _107.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _107.MsgFundCommunityPoolResponseAminoMsg): _107.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _107.MsgFundCommunityPoolResponse): _107.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _107.MsgFundCommunityPoolResponseProtoMsg): _107.MsgFundCommunityPoolResponse;
                toProto(message: _107.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _107.MsgFundCommunityPoolResponse): _107.MsgFundCommunityPoolResponseProtoMsg;
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
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _106.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_106.QueryValidatorOutstandingRewardsRequest>): _106.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _106.QueryValidatorOutstandingRewardsRequestAmino): _106.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _106.QueryValidatorOutstandingRewardsRequest): _106.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _106.QueryValidatorOutstandingRewardsRequestAminoMsg): _106.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _106.QueryValidatorOutstandingRewardsRequest): _106.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _106.QueryValidatorOutstandingRewardsRequestProtoMsg): _106.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _106.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _106.QueryValidatorOutstandingRewardsRequest): _106.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _106.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_106.QueryValidatorOutstandingRewardsResponse>): _106.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _106.QueryValidatorOutstandingRewardsResponseAmino): _106.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _106.QueryValidatorOutstandingRewardsResponse): _106.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _106.QueryValidatorOutstandingRewardsResponseAminoMsg): _106.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _106.QueryValidatorOutstandingRewardsResponse): _106.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _106.QueryValidatorOutstandingRewardsResponseProtoMsg): _106.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _106.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _106.QueryValidatorOutstandingRewardsResponse): _106.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _106.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_106.QueryValidatorCommissionRequest>): _106.QueryValidatorCommissionRequest;
                fromAmino(object: _106.QueryValidatorCommissionRequestAmino): _106.QueryValidatorCommissionRequest;
                toAmino(message: _106.QueryValidatorCommissionRequest): _106.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _106.QueryValidatorCommissionRequestAminoMsg): _106.QueryValidatorCommissionRequest;
                toAminoMsg(message: _106.QueryValidatorCommissionRequest): _106.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _106.QueryValidatorCommissionRequestProtoMsg): _106.QueryValidatorCommissionRequest;
                toProto(message: _106.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _106.QueryValidatorCommissionRequest): _106.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _106.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_106.QueryValidatorCommissionResponse>): _106.QueryValidatorCommissionResponse;
                fromAmino(object: _106.QueryValidatorCommissionResponseAmino): _106.QueryValidatorCommissionResponse;
                toAmino(message: _106.QueryValidatorCommissionResponse): _106.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _106.QueryValidatorCommissionResponseAminoMsg): _106.QueryValidatorCommissionResponse;
                toAminoMsg(message: _106.QueryValidatorCommissionResponse): _106.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _106.QueryValidatorCommissionResponseProtoMsg): _106.QueryValidatorCommissionResponse;
                toProto(message: _106.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _106.QueryValidatorCommissionResponse): _106.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _106.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_106.QueryValidatorSlashesRequest>): _106.QueryValidatorSlashesRequest;
                fromAmino(object: _106.QueryValidatorSlashesRequestAmino): _106.QueryValidatorSlashesRequest;
                toAmino(message: _106.QueryValidatorSlashesRequest): _106.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _106.QueryValidatorSlashesRequestAminoMsg): _106.QueryValidatorSlashesRequest;
                toAminoMsg(message: _106.QueryValidatorSlashesRequest): _106.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _106.QueryValidatorSlashesRequestProtoMsg): _106.QueryValidatorSlashesRequest;
                toProto(message: _106.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _106.QueryValidatorSlashesRequest): _106.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _106.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_106.QueryValidatorSlashesResponse>): _106.QueryValidatorSlashesResponse;
                fromAmino(object: _106.QueryValidatorSlashesResponseAmino): _106.QueryValidatorSlashesResponse;
                toAmino(message: _106.QueryValidatorSlashesResponse): _106.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _106.QueryValidatorSlashesResponseAminoMsg): _106.QueryValidatorSlashesResponse;
                toAminoMsg(message: _106.QueryValidatorSlashesResponse): _106.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _106.QueryValidatorSlashesResponseProtoMsg): _106.QueryValidatorSlashesResponse;
                toProto(message: _106.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _106.QueryValidatorSlashesResponse): _106.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _106.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_106.QueryDelegationRewardsRequest>): _106.QueryDelegationRewardsRequest;
                fromAmino(object: _106.QueryDelegationRewardsRequestAmino): _106.QueryDelegationRewardsRequest;
                toAmino(message: _106.QueryDelegationRewardsRequest): _106.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _106.QueryDelegationRewardsRequestAminoMsg): _106.QueryDelegationRewardsRequest;
                toAminoMsg(message: _106.QueryDelegationRewardsRequest): _106.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _106.QueryDelegationRewardsRequestProtoMsg): _106.QueryDelegationRewardsRequest;
                toProto(message: _106.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _106.QueryDelegationRewardsRequest): _106.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _106.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_106.QueryDelegationRewardsResponse>): _106.QueryDelegationRewardsResponse;
                fromAmino(object: _106.QueryDelegationRewardsResponseAmino): _106.QueryDelegationRewardsResponse;
                toAmino(message: _106.QueryDelegationRewardsResponse): _106.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _106.QueryDelegationRewardsResponseAminoMsg): _106.QueryDelegationRewardsResponse;
                toAminoMsg(message: _106.QueryDelegationRewardsResponse): _106.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _106.QueryDelegationRewardsResponseProtoMsg): _106.QueryDelegationRewardsResponse;
                toProto(message: _106.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _106.QueryDelegationRewardsResponse): _106.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _106.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_106.QueryDelegationTotalRewardsRequest>): _106.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _106.QueryDelegationTotalRewardsRequestAmino): _106.QueryDelegationTotalRewardsRequest;
                toAmino(message: _106.QueryDelegationTotalRewardsRequest): _106.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _106.QueryDelegationTotalRewardsRequestAminoMsg): _106.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _106.QueryDelegationTotalRewardsRequest): _106.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _106.QueryDelegationTotalRewardsRequestProtoMsg): _106.QueryDelegationTotalRewardsRequest;
                toProto(message: _106.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _106.QueryDelegationTotalRewardsRequest): _106.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _106.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_106.QueryDelegationTotalRewardsResponse>): _106.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _106.QueryDelegationTotalRewardsResponseAmino): _106.QueryDelegationTotalRewardsResponse;
                toAmino(message: _106.QueryDelegationTotalRewardsResponse): _106.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _106.QueryDelegationTotalRewardsResponseAminoMsg): _106.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _106.QueryDelegationTotalRewardsResponse): _106.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _106.QueryDelegationTotalRewardsResponseProtoMsg): _106.QueryDelegationTotalRewardsResponse;
                toProto(message: _106.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _106.QueryDelegationTotalRewardsResponse): _106.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _106.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_106.QueryDelegatorValidatorsRequest>): _106.QueryDelegatorValidatorsRequest;
                fromAmino(object: _106.QueryDelegatorValidatorsRequestAmino): _106.QueryDelegatorValidatorsRequest;
                toAmino(message: _106.QueryDelegatorValidatorsRequest): _106.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _106.QueryDelegatorValidatorsRequestAminoMsg): _106.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _106.QueryDelegatorValidatorsRequest): _106.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _106.QueryDelegatorValidatorsRequestProtoMsg): _106.QueryDelegatorValidatorsRequest;
                toProto(message: _106.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _106.QueryDelegatorValidatorsRequest): _106.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _106.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_106.QueryDelegatorValidatorsResponse>): _106.QueryDelegatorValidatorsResponse;
                fromAmino(object: _106.QueryDelegatorValidatorsResponseAmino): _106.QueryDelegatorValidatorsResponse;
                toAmino(message: _106.QueryDelegatorValidatorsResponse): _106.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _106.QueryDelegatorValidatorsResponseAminoMsg): _106.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _106.QueryDelegatorValidatorsResponse): _106.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _106.QueryDelegatorValidatorsResponseProtoMsg): _106.QueryDelegatorValidatorsResponse;
                toProto(message: _106.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _106.QueryDelegatorValidatorsResponse): _106.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _106.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_106.QueryDelegatorWithdrawAddressRequest>): _106.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _106.QueryDelegatorWithdrawAddressRequestAmino): _106.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _106.QueryDelegatorWithdrawAddressRequest): _106.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _106.QueryDelegatorWithdrawAddressRequestAminoMsg): _106.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _106.QueryDelegatorWithdrawAddressRequest): _106.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _106.QueryDelegatorWithdrawAddressRequestProtoMsg): _106.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _106.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _106.QueryDelegatorWithdrawAddressRequest): _106.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _106.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_106.QueryDelegatorWithdrawAddressResponse>): _106.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _106.QueryDelegatorWithdrawAddressResponseAmino): _106.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _106.QueryDelegatorWithdrawAddressResponse): _106.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _106.QueryDelegatorWithdrawAddressResponseAminoMsg): _106.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _106.QueryDelegatorWithdrawAddressResponse): _106.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _106.QueryDelegatorWithdrawAddressResponseProtoMsg): _106.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _106.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _106.QueryDelegatorWithdrawAddressResponse): _106.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _106.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _106.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_106.QueryCommunityPoolRequest>): _106.QueryCommunityPoolRequest;
                fromAmino(_: _106.QueryCommunityPoolRequestAmino): _106.QueryCommunityPoolRequest;
                toAmino(_: _106.QueryCommunityPoolRequest): _106.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _106.QueryCommunityPoolRequestAminoMsg): _106.QueryCommunityPoolRequest;
                toAminoMsg(message: _106.QueryCommunityPoolRequest): _106.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _106.QueryCommunityPoolRequestProtoMsg): _106.QueryCommunityPoolRequest;
                toProto(message: _106.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _106.QueryCommunityPoolRequest): _106.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _106.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_106.QueryCommunityPoolResponse>): _106.QueryCommunityPoolResponse;
                fromAmino(object: _106.QueryCommunityPoolResponseAmino): _106.QueryCommunityPoolResponse;
                toAmino(message: _106.QueryCommunityPoolResponse): _106.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _106.QueryCommunityPoolResponseAminoMsg): _106.QueryCommunityPoolResponse;
                toAminoMsg(message: _106.QueryCommunityPoolResponse): _106.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _106.QueryCommunityPoolResponseProtoMsg): _106.QueryCommunityPoolResponse;
                toProto(message: _106.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _106.QueryCommunityPoolResponse): _106.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _105.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_105.DelegatorWithdrawInfo>): _105.DelegatorWithdrawInfo;
                fromAmino(object: _105.DelegatorWithdrawInfoAmino): _105.DelegatorWithdrawInfo;
                toAmino(message: _105.DelegatorWithdrawInfo): _105.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _105.DelegatorWithdrawInfoAminoMsg): _105.DelegatorWithdrawInfo;
                toAminoMsg(message: _105.DelegatorWithdrawInfo): _105.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _105.DelegatorWithdrawInfoProtoMsg): _105.DelegatorWithdrawInfo;
                toProto(message: _105.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _105.DelegatorWithdrawInfo): _105.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _105.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_105.ValidatorOutstandingRewardsRecord>): _105.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _105.ValidatorOutstandingRewardsRecordAmino): _105.ValidatorOutstandingRewardsRecord;
                toAmino(message: _105.ValidatorOutstandingRewardsRecord): _105.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _105.ValidatorOutstandingRewardsRecordAminoMsg): _105.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _105.ValidatorOutstandingRewardsRecord): _105.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _105.ValidatorOutstandingRewardsRecordProtoMsg): _105.ValidatorOutstandingRewardsRecord;
                toProto(message: _105.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _105.ValidatorOutstandingRewardsRecord): _105.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _105.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_105.ValidatorAccumulatedCommissionRecord>): _105.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _105.ValidatorAccumulatedCommissionRecordAmino): _105.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _105.ValidatorAccumulatedCommissionRecord): _105.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _105.ValidatorAccumulatedCommissionRecordAminoMsg): _105.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _105.ValidatorAccumulatedCommissionRecord): _105.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _105.ValidatorAccumulatedCommissionRecordProtoMsg): _105.ValidatorAccumulatedCommissionRecord;
                toProto(message: _105.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _105.ValidatorAccumulatedCommissionRecord): _105.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _105.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_105.ValidatorHistoricalRewardsRecord>): _105.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _105.ValidatorHistoricalRewardsRecordAmino): _105.ValidatorHistoricalRewardsRecord;
                toAmino(message: _105.ValidatorHistoricalRewardsRecord): _105.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _105.ValidatorHistoricalRewardsRecordAminoMsg): _105.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _105.ValidatorHistoricalRewardsRecord): _105.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _105.ValidatorHistoricalRewardsRecordProtoMsg): _105.ValidatorHistoricalRewardsRecord;
                toProto(message: _105.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _105.ValidatorHistoricalRewardsRecord): _105.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _105.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_105.ValidatorCurrentRewardsRecord>): _105.ValidatorCurrentRewardsRecord;
                fromAmino(object: _105.ValidatorCurrentRewardsRecordAmino): _105.ValidatorCurrentRewardsRecord;
                toAmino(message: _105.ValidatorCurrentRewardsRecord): _105.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _105.ValidatorCurrentRewardsRecordAminoMsg): _105.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _105.ValidatorCurrentRewardsRecord): _105.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _105.ValidatorCurrentRewardsRecordProtoMsg): _105.ValidatorCurrentRewardsRecord;
                toProto(message: _105.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _105.ValidatorCurrentRewardsRecord): _105.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _105.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_105.DelegatorStartingInfoRecord>): _105.DelegatorStartingInfoRecord;
                fromAmino(object: _105.DelegatorStartingInfoRecordAmino): _105.DelegatorStartingInfoRecord;
                toAmino(message: _105.DelegatorStartingInfoRecord): _105.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _105.DelegatorStartingInfoRecordAminoMsg): _105.DelegatorStartingInfoRecord;
                toAminoMsg(message: _105.DelegatorStartingInfoRecord): _105.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _105.DelegatorStartingInfoRecordProtoMsg): _105.DelegatorStartingInfoRecord;
                toProto(message: _105.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _105.DelegatorStartingInfoRecord): _105.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _105.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_105.ValidatorSlashEventRecord>): _105.ValidatorSlashEventRecord;
                fromAmino(object: _105.ValidatorSlashEventRecordAmino): _105.ValidatorSlashEventRecord;
                toAmino(message: _105.ValidatorSlashEventRecord): _105.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _105.ValidatorSlashEventRecordAminoMsg): _105.ValidatorSlashEventRecord;
                toAminoMsg(message: _105.ValidatorSlashEventRecord): _105.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _105.ValidatorSlashEventRecordProtoMsg): _105.ValidatorSlashEventRecord;
                toProto(message: _105.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _105.ValidatorSlashEventRecord): _105.ValidatorSlashEventRecordProtoMsg;
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
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _104.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_104.ValidatorHistoricalRewards>): _104.ValidatorHistoricalRewards;
                fromAmino(object: _104.ValidatorHistoricalRewardsAmino): _104.ValidatorHistoricalRewards;
                toAmino(message: _104.ValidatorHistoricalRewards): _104.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _104.ValidatorHistoricalRewardsAminoMsg): _104.ValidatorHistoricalRewards;
                toAminoMsg(message: _104.ValidatorHistoricalRewards): _104.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _104.ValidatorHistoricalRewardsProtoMsg): _104.ValidatorHistoricalRewards;
                toProto(message: _104.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _104.ValidatorHistoricalRewards): _104.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _104.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ValidatorCurrentRewards;
                fromPartial(object: Partial<_104.ValidatorCurrentRewards>): _104.ValidatorCurrentRewards;
                fromAmino(object: _104.ValidatorCurrentRewardsAmino): _104.ValidatorCurrentRewards;
                toAmino(message: _104.ValidatorCurrentRewards): _104.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _104.ValidatorCurrentRewardsAminoMsg): _104.ValidatorCurrentRewards;
                toAminoMsg(message: _104.ValidatorCurrentRewards): _104.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _104.ValidatorCurrentRewardsProtoMsg): _104.ValidatorCurrentRewards;
                toProto(message: _104.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _104.ValidatorCurrentRewards): _104.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _104.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_104.ValidatorAccumulatedCommission>): _104.ValidatorAccumulatedCommission;
                fromAmino(object: _104.ValidatorAccumulatedCommissionAmino): _104.ValidatorAccumulatedCommission;
                toAmino(message: _104.ValidatorAccumulatedCommission): _104.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _104.ValidatorAccumulatedCommissionAminoMsg): _104.ValidatorAccumulatedCommission;
                toAminoMsg(message: _104.ValidatorAccumulatedCommission): _104.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _104.ValidatorAccumulatedCommissionProtoMsg): _104.ValidatorAccumulatedCommission;
                toProto(message: _104.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _104.ValidatorAccumulatedCommission): _104.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _104.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_104.ValidatorOutstandingRewards>): _104.ValidatorOutstandingRewards;
                fromAmino(object: _104.ValidatorOutstandingRewardsAmino): _104.ValidatorOutstandingRewards;
                toAmino(message: _104.ValidatorOutstandingRewards): _104.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _104.ValidatorOutstandingRewardsAminoMsg): _104.ValidatorOutstandingRewards;
                toAminoMsg(message: _104.ValidatorOutstandingRewards): _104.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _104.ValidatorOutstandingRewardsProtoMsg): _104.ValidatorOutstandingRewards;
                toProto(message: _104.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _104.ValidatorOutstandingRewards): _104.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _104.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ValidatorSlashEvent;
                fromPartial(object: Partial<_104.ValidatorSlashEvent>): _104.ValidatorSlashEvent;
                fromAmino(object: _104.ValidatorSlashEventAmino): _104.ValidatorSlashEvent;
                toAmino(message: _104.ValidatorSlashEvent): _104.ValidatorSlashEventAmino;
                fromAminoMsg(object: _104.ValidatorSlashEventAminoMsg): _104.ValidatorSlashEvent;
                toAminoMsg(message: _104.ValidatorSlashEvent): _104.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _104.ValidatorSlashEventProtoMsg): _104.ValidatorSlashEvent;
                toProto(message: _104.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _104.ValidatorSlashEvent): _104.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _104.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ValidatorSlashEvents;
                fromPartial(object: Partial<_104.ValidatorSlashEvents>): _104.ValidatorSlashEvents;
                fromAmino(object: _104.ValidatorSlashEventsAmino): _104.ValidatorSlashEvents;
                toAmino(message: _104.ValidatorSlashEvents): _104.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _104.ValidatorSlashEventsAminoMsg): _104.ValidatorSlashEvents;
                toAminoMsg(message: _104.ValidatorSlashEvents): _104.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _104.ValidatorSlashEventsProtoMsg): _104.ValidatorSlashEvents;
                toProto(message: _104.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _104.ValidatorSlashEvents): _104.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _104.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.FeePool;
                fromPartial(object: Partial<_104.FeePool>): _104.FeePool;
                fromAmino(object: _104.FeePoolAmino): _104.FeePool;
                toAmino(message: _104.FeePool): _104.FeePoolAmino;
                fromAminoMsg(object: _104.FeePoolAminoMsg): _104.FeePool;
                toAminoMsg(message: _104.FeePool): _104.FeePoolAminoMsg;
                fromProtoMsg(message: _104.FeePoolProtoMsg): _104.FeePool;
                toProto(message: _104.FeePool): Uint8Array;
                toProtoMsg(message: _104.FeePool): _104.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _104.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_104.CommunityPoolSpendProposal>): _104.CommunityPoolSpendProposal;
                fromAmino(object: _104.CommunityPoolSpendProposalAmino): _104.CommunityPoolSpendProposal;
                toAmino(message: _104.CommunityPoolSpendProposal): _104.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _104.CommunityPoolSpendProposalAminoMsg): _104.CommunityPoolSpendProposal;
                toAminoMsg(message: _104.CommunityPoolSpendProposal): _104.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _104.CommunityPoolSpendProposalProtoMsg): _104.CommunityPoolSpendProposal;
                toProto(message: _104.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _104.CommunityPoolSpendProposal): _104.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _104.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.DelegatorStartingInfo;
                fromPartial(object: Partial<_104.DelegatorStartingInfo>): _104.DelegatorStartingInfo;
                fromAmino(object: _104.DelegatorStartingInfoAmino): _104.DelegatorStartingInfo;
                toAmino(message: _104.DelegatorStartingInfo): _104.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _104.DelegatorStartingInfoAminoMsg): _104.DelegatorStartingInfo;
                toAminoMsg(message: _104.DelegatorStartingInfo): _104.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _104.DelegatorStartingInfoProtoMsg): _104.DelegatorStartingInfo;
                toProto(message: _104.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _104.DelegatorStartingInfo): _104.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _104.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.DelegationDelegatorReward;
                fromPartial(object: Partial<_104.DelegationDelegatorReward>): _104.DelegationDelegatorReward;
                fromAmino(object: _104.DelegationDelegatorRewardAmino): _104.DelegationDelegatorReward;
                toAmino(message: _104.DelegationDelegatorReward): _104.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _104.DelegationDelegatorRewardAminoMsg): _104.DelegationDelegatorReward;
                toAminoMsg(message: _104.DelegationDelegatorReward): _104.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _104.DelegationDelegatorRewardProtoMsg): _104.DelegationDelegatorReward;
                toProto(message: _104.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _104.DelegationDelegatorReward): _104.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _104.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_104.CommunityPoolSpendProposalWithDeposit>): _104.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _104.CommunityPoolSpendProposalWithDepositAmino): _104.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _104.CommunityPoolSpendProposalWithDeposit): _104.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _104.CommunityPoolSpendProposalWithDepositAminoMsg): _104.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _104.CommunityPoolSpendProposalWithDeposit): _104.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _104.CommunityPoolSpendProposalWithDepositProtoMsg): _104.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _104.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _104.CommunityPoolSpendProposalWithDeposit): _104.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _251.MsgClientImpl;
            QueryClientImpl: typeof _238.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _110.QueryEvidenceRequest): Promise<_110.QueryEvidenceResponse>;
                allEvidence(request?: _110.QueryAllEvidenceRequest): Promise<_110.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _223.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _111.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _111.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _111.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _111.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _111.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _111.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _111.MsgSubmitEvidence) => _111.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _111.MsgSubmitEvidenceAmino) => _111.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _111.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgSubmitEvidence;
                fromPartial(object: Partial<_111.MsgSubmitEvidence>): _111.MsgSubmitEvidence;
                fromAmino(object: _111.MsgSubmitEvidenceAmino): _111.MsgSubmitEvidence;
                toAmino(message: _111.MsgSubmitEvidence): _111.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _111.MsgSubmitEvidenceAminoMsg): _111.MsgSubmitEvidence;
                toAminoMsg(message: _111.MsgSubmitEvidence): _111.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _111.MsgSubmitEvidenceProtoMsg): _111.MsgSubmitEvidence;
                toProto(message: _111.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _111.MsgSubmitEvidence): _111.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _111.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_111.MsgSubmitEvidenceResponse>): _111.MsgSubmitEvidenceResponse;
                fromAmino(object: _111.MsgSubmitEvidenceResponseAmino): _111.MsgSubmitEvidenceResponse;
                toAmino(message: _111.MsgSubmitEvidenceResponse): _111.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _111.MsgSubmitEvidenceResponseAminoMsg): _111.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _111.MsgSubmitEvidenceResponse): _111.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _111.MsgSubmitEvidenceResponseProtoMsg): _111.MsgSubmitEvidenceResponse;
                toProto(message: _111.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _111.MsgSubmitEvidenceResponse): _111.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _110.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryEvidenceRequest;
                fromPartial(object: Partial<_110.QueryEvidenceRequest>): _110.QueryEvidenceRequest;
                fromAmino(object: _110.QueryEvidenceRequestAmino): _110.QueryEvidenceRequest;
                toAmino(message: _110.QueryEvidenceRequest): _110.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _110.QueryEvidenceRequestAminoMsg): _110.QueryEvidenceRequest;
                toAminoMsg(message: _110.QueryEvidenceRequest): _110.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _110.QueryEvidenceRequestProtoMsg): _110.QueryEvidenceRequest;
                toProto(message: _110.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _110.QueryEvidenceRequest): _110.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _110.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryEvidenceResponse;
                fromPartial(object: Partial<_110.QueryEvidenceResponse>): _110.QueryEvidenceResponse;
                fromAmino(object: _110.QueryEvidenceResponseAmino): _110.QueryEvidenceResponse;
                toAmino(message: _110.QueryEvidenceResponse): _110.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _110.QueryEvidenceResponseAminoMsg): _110.QueryEvidenceResponse;
                toAminoMsg(message: _110.QueryEvidenceResponse): _110.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _110.QueryEvidenceResponseProtoMsg): _110.QueryEvidenceResponse;
                toProto(message: _110.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _110.QueryEvidenceResponse): _110.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _110.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_110.QueryAllEvidenceRequest>): _110.QueryAllEvidenceRequest;
                fromAmino(object: _110.QueryAllEvidenceRequestAmino): _110.QueryAllEvidenceRequest;
                toAmino(message: _110.QueryAllEvidenceRequest): _110.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _110.QueryAllEvidenceRequestAminoMsg): _110.QueryAllEvidenceRequest;
                toAminoMsg(message: _110.QueryAllEvidenceRequest): _110.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _110.QueryAllEvidenceRequestProtoMsg): _110.QueryAllEvidenceRequest;
                toProto(message: _110.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _110.QueryAllEvidenceRequest): _110.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _110.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_110.QueryAllEvidenceResponse>): _110.QueryAllEvidenceResponse;
                fromAmino(object: _110.QueryAllEvidenceResponseAmino): _110.QueryAllEvidenceResponse;
                toAmino(message: _110.QueryAllEvidenceResponse): _110.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _110.QueryAllEvidenceResponseAminoMsg): _110.QueryAllEvidenceResponse;
                toAminoMsg(message: _110.QueryAllEvidenceResponse): _110.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _110.QueryAllEvidenceResponseProtoMsg): _110.QueryAllEvidenceResponse;
                toProto(message: _110.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _110.QueryAllEvidenceResponse): _110.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _109.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.GenesisState;
                fromPartial(object: Partial<_109.GenesisState>): _109.GenesisState;
                fromAmino(object: _109.GenesisStateAmino): _109.GenesisState;
                toAmino(message: _109.GenesisState): _109.GenesisStateAmino;
                fromAminoMsg(object: _109.GenesisStateAminoMsg): _109.GenesisState;
                toAminoMsg(message: _109.GenesisState): _109.GenesisStateAminoMsg;
                fromProtoMsg(message: _109.GenesisStateProtoMsg): _109.GenesisState;
                toProto(message: _109.GenesisState): Uint8Array;
                toProtoMsg(message: _109.GenesisState): _109.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _108.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.Equivocation;
                fromPartial(object: Partial<_108.Equivocation>): _108.Equivocation;
                fromAmino(object: _108.EquivocationAmino): _108.Equivocation;
                toAmino(message: _108.Equivocation): _108.EquivocationAmino;
                fromAminoMsg(object: _108.EquivocationAminoMsg): _108.Equivocation;
                toAminoMsg(message: _108.Equivocation): _108.EquivocationAminoMsg;
                fromProtoMsg(message: _108.EquivocationProtoMsg): _108.Equivocation;
                toProto(message: _108.Equivocation): Uint8Array;
                toProtoMsg(message: _108.Equivocation): _108.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _252.MsgClientImpl;
            QueryClientImpl: typeof _239.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _114.QueryAllowanceRequest): Promise<_114.QueryAllowanceResponse>;
                allowances(request: _114.QueryAllowancesRequest): Promise<_114.QueryAllowancesResponse>;
                allowancesByGranter(request: _114.QueryAllowancesByGranterRequest): Promise<_114.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _224.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _115.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _115.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _115.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _115.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _115.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _115.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _115.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _115.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _115.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _115.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _115.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _115.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _115.MsgGrantAllowance) => _115.MsgGrantAllowanceAmino;
                    fromAmino: (object: _115.MsgGrantAllowanceAmino) => _115.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _115.MsgRevokeAllowance) => _115.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _115.MsgRevokeAllowanceAmino) => _115.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _115.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.MsgGrantAllowance;
                fromPartial(object: Partial<_115.MsgGrantAllowance>): _115.MsgGrantAllowance;
                fromAmino(object: _115.MsgGrantAllowanceAmino): _115.MsgGrantAllowance;
                toAmino(message: _115.MsgGrantAllowance): _115.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _115.MsgGrantAllowanceAminoMsg): _115.MsgGrantAllowance;
                toAminoMsg(message: _115.MsgGrantAllowance): _115.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _115.MsgGrantAllowanceProtoMsg): _115.MsgGrantAllowance;
                toProto(message: _115.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _115.MsgGrantAllowance): _115.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _115.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _115.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_115.MsgGrantAllowanceResponse>): _115.MsgGrantAllowanceResponse;
                fromAmino(_: _115.MsgGrantAllowanceResponseAmino): _115.MsgGrantAllowanceResponse;
                toAmino(_: _115.MsgGrantAllowanceResponse): _115.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _115.MsgGrantAllowanceResponseAminoMsg): _115.MsgGrantAllowanceResponse;
                toAminoMsg(message: _115.MsgGrantAllowanceResponse): _115.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _115.MsgGrantAllowanceResponseProtoMsg): _115.MsgGrantAllowanceResponse;
                toProto(message: _115.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _115.MsgGrantAllowanceResponse): _115.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _115.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.MsgRevokeAllowance;
                fromPartial(object: Partial<_115.MsgRevokeAllowance>): _115.MsgRevokeAllowance;
                fromAmino(object: _115.MsgRevokeAllowanceAmino): _115.MsgRevokeAllowance;
                toAmino(message: _115.MsgRevokeAllowance): _115.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _115.MsgRevokeAllowanceAminoMsg): _115.MsgRevokeAllowance;
                toAminoMsg(message: _115.MsgRevokeAllowance): _115.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _115.MsgRevokeAllowanceProtoMsg): _115.MsgRevokeAllowance;
                toProto(message: _115.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _115.MsgRevokeAllowance): _115.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _115.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _115.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_115.MsgRevokeAllowanceResponse>): _115.MsgRevokeAllowanceResponse;
                fromAmino(_: _115.MsgRevokeAllowanceResponseAmino): _115.MsgRevokeAllowanceResponse;
                toAmino(_: _115.MsgRevokeAllowanceResponse): _115.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _115.MsgRevokeAllowanceResponseAminoMsg): _115.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _115.MsgRevokeAllowanceResponse): _115.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _115.MsgRevokeAllowanceResponseProtoMsg): _115.MsgRevokeAllowanceResponse;
                toProto(message: _115.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _115.MsgRevokeAllowanceResponse): _115.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _112.BasicAllowance | _112.PeriodicAllowance | _112.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _114.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryAllowanceRequest;
                fromPartial(object: Partial<_114.QueryAllowanceRequest>): _114.QueryAllowanceRequest;
                fromAmino(object: _114.QueryAllowanceRequestAmino): _114.QueryAllowanceRequest;
                toAmino(message: _114.QueryAllowanceRequest): _114.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _114.QueryAllowanceRequestAminoMsg): _114.QueryAllowanceRequest;
                toAminoMsg(message: _114.QueryAllowanceRequest): _114.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _114.QueryAllowanceRequestProtoMsg): _114.QueryAllowanceRequest;
                toProto(message: _114.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _114.QueryAllowanceRequest): _114.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _114.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryAllowanceResponse;
                fromPartial(object: Partial<_114.QueryAllowanceResponse>): _114.QueryAllowanceResponse;
                fromAmino(object: _114.QueryAllowanceResponseAmino): _114.QueryAllowanceResponse;
                toAmino(message: _114.QueryAllowanceResponse): _114.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _114.QueryAllowanceResponseAminoMsg): _114.QueryAllowanceResponse;
                toAminoMsg(message: _114.QueryAllowanceResponse): _114.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _114.QueryAllowanceResponseProtoMsg): _114.QueryAllowanceResponse;
                toProto(message: _114.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _114.QueryAllowanceResponse): _114.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _114.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryAllowancesRequest;
                fromPartial(object: Partial<_114.QueryAllowancesRequest>): _114.QueryAllowancesRequest;
                fromAmino(object: _114.QueryAllowancesRequestAmino): _114.QueryAllowancesRequest;
                toAmino(message: _114.QueryAllowancesRequest): _114.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _114.QueryAllowancesRequestAminoMsg): _114.QueryAllowancesRequest;
                toAminoMsg(message: _114.QueryAllowancesRequest): _114.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _114.QueryAllowancesRequestProtoMsg): _114.QueryAllowancesRequest;
                toProto(message: _114.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _114.QueryAllowancesRequest): _114.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _114.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryAllowancesResponse;
                fromPartial(object: Partial<_114.QueryAllowancesResponse>): _114.QueryAllowancesResponse;
                fromAmino(object: _114.QueryAllowancesResponseAmino): _114.QueryAllowancesResponse;
                toAmino(message: _114.QueryAllowancesResponse): _114.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _114.QueryAllowancesResponseAminoMsg): _114.QueryAllowancesResponse;
                toAminoMsg(message: _114.QueryAllowancesResponse): _114.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _114.QueryAllowancesResponseProtoMsg): _114.QueryAllowancesResponse;
                toProto(message: _114.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _114.QueryAllowancesResponse): _114.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _114.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_114.QueryAllowancesByGranterRequest>): _114.QueryAllowancesByGranterRequest;
                fromAmino(object: _114.QueryAllowancesByGranterRequestAmino): _114.QueryAllowancesByGranterRequest;
                toAmino(message: _114.QueryAllowancesByGranterRequest): _114.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _114.QueryAllowancesByGranterRequestAminoMsg): _114.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _114.QueryAllowancesByGranterRequest): _114.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _114.QueryAllowancesByGranterRequestProtoMsg): _114.QueryAllowancesByGranterRequest;
                toProto(message: _114.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _114.QueryAllowancesByGranterRequest): _114.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _114.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_114.QueryAllowancesByGranterResponse>): _114.QueryAllowancesByGranterResponse;
                fromAmino(object: _114.QueryAllowancesByGranterResponseAmino): _114.QueryAllowancesByGranterResponse;
                toAmino(message: _114.QueryAllowancesByGranterResponse): _114.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _114.QueryAllowancesByGranterResponseAminoMsg): _114.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _114.QueryAllowancesByGranterResponse): _114.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _114.QueryAllowancesByGranterResponseProtoMsg): _114.QueryAllowancesByGranterResponse;
                toProto(message: _114.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _114.QueryAllowancesByGranterResponse): _114.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _113.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.GenesisState;
                fromPartial(object: Partial<_113.GenesisState>): _113.GenesisState;
                fromAmino(object: _113.GenesisStateAmino): _113.GenesisState;
                toAmino(message: _113.GenesisState): _113.GenesisStateAmino;
                fromAminoMsg(object: _113.GenesisStateAminoMsg): _113.GenesisState;
                toAminoMsg(message: _113.GenesisState): _113.GenesisStateAminoMsg;
                fromProtoMsg(message: _113.GenesisStateProtoMsg): _113.GenesisState;
                toProto(message: _113.GenesisState): Uint8Array;
                toProtoMsg(message: _113.GenesisState): _113.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _112.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.BasicAllowance;
                fromPartial(object: Partial<_112.BasicAllowance>): _112.BasicAllowance;
                fromAmino(object: _112.BasicAllowanceAmino): _112.BasicAllowance;
                toAmino(message: _112.BasicAllowance): _112.BasicAllowanceAmino;
                fromAminoMsg(object: _112.BasicAllowanceAminoMsg): _112.BasicAllowance;
                toAminoMsg(message: _112.BasicAllowance): _112.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _112.BasicAllowanceProtoMsg): _112.BasicAllowance;
                toProto(message: _112.BasicAllowance): Uint8Array;
                toProtoMsg(message: _112.BasicAllowance): _112.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _112.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.PeriodicAllowance;
                fromPartial(object: Partial<_112.PeriodicAllowance>): _112.PeriodicAllowance;
                fromAmino(object: _112.PeriodicAllowanceAmino): _112.PeriodicAllowance;
                toAmino(message: _112.PeriodicAllowance): _112.PeriodicAllowanceAmino;
                fromAminoMsg(object: _112.PeriodicAllowanceAminoMsg): _112.PeriodicAllowance;
                toAminoMsg(message: _112.PeriodicAllowance): _112.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _112.PeriodicAllowanceProtoMsg): _112.PeriodicAllowance;
                toProto(message: _112.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _112.PeriodicAllowance): _112.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _112.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.AllowedMsgAllowance;
                fromPartial(object: Partial<_112.AllowedMsgAllowance>): _112.AllowedMsgAllowance;
                fromAmino(object: _112.AllowedMsgAllowanceAmino): _112.AllowedMsgAllowance;
                toAmino(message: _112.AllowedMsgAllowance): _112.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _112.AllowedMsgAllowanceAminoMsg): _112.AllowedMsgAllowance;
                toAminoMsg(message: _112.AllowedMsgAllowance): _112.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _112.AllowedMsgAllowanceProtoMsg): _112.AllowedMsgAllowance;
                toProto(message: _112.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _112.AllowedMsgAllowance): _112.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _112.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.Grant;
                fromPartial(object: Partial<_112.Grant>): _112.Grant;
                fromAmino(object: _112.GrantAmino): _112.Grant;
                toAmino(message: _112.Grant): _112.GrantAmino;
                fromAminoMsg(object: _112.GrantAminoMsg): _112.Grant;
                toAminoMsg(message: _112.Grant): _112.GrantAminoMsg;
                fromProtoMsg(message: _112.GrantProtoMsg): _112.Grant;
                toProto(message: _112.Grant): Uint8Array;
                toProtoMsg(message: _112.Grant): _112.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _253.MsgClientImpl;
            QueryClientImpl: typeof _240.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _119.QueryProposalRequest): Promise<_119.QueryProposalResponse>;
                proposals(request: _119.QueryProposalsRequest): Promise<_119.QueryProposalsResponse>;
                vote(request: _119.QueryVoteRequest): Promise<_119.QueryVoteResponse>;
                votes(request: _119.QueryVotesRequest): Promise<_119.QueryVotesResponse>;
                params(request: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                deposit(request: _119.QueryDepositRequest): Promise<_119.QueryDepositResponse>;
                deposits(request: _119.QueryDepositsRequest): Promise<_119.QueryDepositsResponse>;
                tallyResult(request: _119.QueryTallyResultRequest): Promise<_119.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _225.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _120.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _120.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _120.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _120.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _120.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _120.MsgSubmitProposal;
                    };
                    vote(value: _120.MsgVote): {
                        typeUrl: string;
                        value: _120.MsgVote;
                    };
                    voteWeighted(value: _120.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _120.MsgVoteWeighted;
                    };
                    deposit(value: _120.MsgDeposit): {
                        typeUrl: string;
                        value: _120.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _120.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _120.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _120.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _120.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _120.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _120.MsgSubmitProposal;
                    };
                    vote(value: _120.MsgVote): {
                        typeUrl: string;
                        value: _120.MsgVote;
                    };
                    voteWeighted(value: _120.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _120.MsgVoteWeighted;
                    };
                    deposit(value: _120.MsgDeposit): {
                        typeUrl: string;
                        value: _120.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _120.MsgSubmitProposal) => _120.MsgSubmitProposalAmino;
                    fromAmino: (object: _120.MsgSubmitProposalAmino) => _120.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _120.MsgVote) => _120.MsgVoteAmino;
                    fromAmino: (object: _120.MsgVoteAmino) => _120.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _120.MsgVoteWeighted) => _120.MsgVoteWeightedAmino;
                    fromAmino: (object: _120.MsgVoteWeightedAmino) => _120.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _120.MsgDeposit) => _120.MsgDepositAmino;
                    fromAmino: (object: _120.MsgDepositAmino) => _120.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _120.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgSubmitProposal;
                fromPartial(object: Partial<_120.MsgSubmitProposal>): _120.MsgSubmitProposal;
                fromAmino(object: _120.MsgSubmitProposalAmino): _120.MsgSubmitProposal;
                toAmino(message: _120.MsgSubmitProposal): _120.MsgSubmitProposalAmino;
                fromAminoMsg(object: _120.MsgSubmitProposalAminoMsg): _120.MsgSubmitProposal;
                toAminoMsg(message: _120.MsgSubmitProposal): _120.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _120.MsgSubmitProposalProtoMsg): _120.MsgSubmitProposal;
                toProto(message: _120.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _120.MsgSubmitProposal): _120.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _120.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_120.MsgSubmitProposalResponse>): _120.MsgSubmitProposalResponse;
                fromAmino(object: _120.MsgSubmitProposalResponseAmino): _120.MsgSubmitProposalResponse;
                toAmino(message: _120.MsgSubmitProposalResponse): _120.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _120.MsgSubmitProposalResponseAminoMsg): _120.MsgSubmitProposalResponse;
                toAminoMsg(message: _120.MsgSubmitProposalResponse): _120.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _120.MsgSubmitProposalResponseProtoMsg): _120.MsgSubmitProposalResponse;
                toProto(message: _120.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _120.MsgSubmitProposalResponse): _120.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _120.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgVote;
                fromPartial(object: Partial<_120.MsgVote>): _120.MsgVote;
                fromAmino(object: _120.MsgVoteAmino): _120.MsgVote;
                toAmino(message: _120.MsgVote): _120.MsgVoteAmino;
                fromAminoMsg(object: _120.MsgVoteAminoMsg): _120.MsgVote;
                toAminoMsg(message: _120.MsgVote): _120.MsgVoteAminoMsg;
                fromProtoMsg(message: _120.MsgVoteProtoMsg): _120.MsgVote;
                toProto(message: _120.MsgVote): Uint8Array;
                toProtoMsg(message: _120.MsgVote): _120.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _120.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.MsgVoteResponse;
                fromPartial(_: Partial<_120.MsgVoteResponse>): _120.MsgVoteResponse;
                fromAmino(_: _120.MsgVoteResponseAmino): _120.MsgVoteResponse;
                toAmino(_: _120.MsgVoteResponse): _120.MsgVoteResponseAmino;
                fromAminoMsg(object: _120.MsgVoteResponseAminoMsg): _120.MsgVoteResponse;
                toAminoMsg(message: _120.MsgVoteResponse): _120.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _120.MsgVoteResponseProtoMsg): _120.MsgVoteResponse;
                toProto(message: _120.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _120.MsgVoteResponse): _120.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _120.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgVoteWeighted;
                fromPartial(object: Partial<_120.MsgVoteWeighted>): _120.MsgVoteWeighted;
                fromAmino(object: _120.MsgVoteWeightedAmino): _120.MsgVoteWeighted;
                toAmino(message: _120.MsgVoteWeighted): _120.MsgVoteWeightedAmino;
                fromAminoMsg(object: _120.MsgVoteWeightedAminoMsg): _120.MsgVoteWeighted;
                toAminoMsg(message: _120.MsgVoteWeighted): _120.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _120.MsgVoteWeightedProtoMsg): _120.MsgVoteWeighted;
                toProto(message: _120.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _120.MsgVoteWeighted): _120.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _120.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_120.MsgVoteWeightedResponse>): _120.MsgVoteWeightedResponse;
                fromAmino(_: _120.MsgVoteWeightedResponseAmino): _120.MsgVoteWeightedResponse;
                toAmino(_: _120.MsgVoteWeightedResponse): _120.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _120.MsgVoteWeightedResponseAminoMsg): _120.MsgVoteWeightedResponse;
                toAminoMsg(message: _120.MsgVoteWeightedResponse): _120.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _120.MsgVoteWeightedResponseProtoMsg): _120.MsgVoteWeightedResponse;
                toProto(message: _120.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _120.MsgVoteWeightedResponse): _120.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _120.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgDeposit;
                fromPartial(object: Partial<_120.MsgDeposit>): _120.MsgDeposit;
                fromAmino(object: _120.MsgDepositAmino): _120.MsgDeposit;
                toAmino(message: _120.MsgDeposit): _120.MsgDepositAmino;
                fromAminoMsg(object: _120.MsgDepositAminoMsg): _120.MsgDeposit;
                toAminoMsg(message: _120.MsgDeposit): _120.MsgDepositAminoMsg;
                fromProtoMsg(message: _120.MsgDepositProtoMsg): _120.MsgDeposit;
                toProto(message: _120.MsgDeposit): Uint8Array;
                toProtoMsg(message: _120.MsgDeposit): _120.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _120.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.MsgDepositResponse;
                fromPartial(_: Partial<_120.MsgDepositResponse>): _120.MsgDepositResponse;
                fromAmino(_: _120.MsgDepositResponseAmino): _120.MsgDepositResponse;
                toAmino(_: _120.MsgDepositResponse): _120.MsgDepositResponseAmino;
                fromAminoMsg(object: _120.MsgDepositResponseAminoMsg): _120.MsgDepositResponse;
                toAminoMsg(message: _120.MsgDepositResponse): _120.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _120.MsgDepositResponseProtoMsg): _120.MsgDepositResponse;
                toProto(message: _120.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _120.MsgDepositResponse): _120.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _118.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _119.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryProposalRequest;
                fromPartial(object: Partial<_119.QueryProposalRequest>): _119.QueryProposalRequest;
                fromAmino(object: _119.QueryProposalRequestAmino): _119.QueryProposalRequest;
                toAmino(message: _119.QueryProposalRequest): _119.QueryProposalRequestAmino;
                fromAminoMsg(object: _119.QueryProposalRequestAminoMsg): _119.QueryProposalRequest;
                toAminoMsg(message: _119.QueryProposalRequest): _119.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _119.QueryProposalRequestProtoMsg): _119.QueryProposalRequest;
                toProto(message: _119.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _119.QueryProposalRequest): _119.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _119.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryProposalResponse;
                fromPartial(object: Partial<_119.QueryProposalResponse>): _119.QueryProposalResponse;
                fromAmino(object: _119.QueryProposalResponseAmino): _119.QueryProposalResponse;
                toAmino(message: _119.QueryProposalResponse): _119.QueryProposalResponseAmino;
                fromAminoMsg(object: _119.QueryProposalResponseAminoMsg): _119.QueryProposalResponse;
                toAminoMsg(message: _119.QueryProposalResponse): _119.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _119.QueryProposalResponseProtoMsg): _119.QueryProposalResponse;
                toProto(message: _119.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _119.QueryProposalResponse): _119.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _119.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryProposalsRequest;
                fromPartial(object: Partial<_119.QueryProposalsRequest>): _119.QueryProposalsRequest;
                fromAmino(object: _119.QueryProposalsRequestAmino): _119.QueryProposalsRequest;
                toAmino(message: _119.QueryProposalsRequest): _119.QueryProposalsRequestAmino;
                fromAminoMsg(object: _119.QueryProposalsRequestAminoMsg): _119.QueryProposalsRequest;
                toAminoMsg(message: _119.QueryProposalsRequest): _119.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _119.QueryProposalsRequestProtoMsg): _119.QueryProposalsRequest;
                toProto(message: _119.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _119.QueryProposalsRequest): _119.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _119.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryProposalsResponse;
                fromPartial(object: Partial<_119.QueryProposalsResponse>): _119.QueryProposalsResponse;
                fromAmino(object: _119.QueryProposalsResponseAmino): _119.QueryProposalsResponse;
                toAmino(message: _119.QueryProposalsResponse): _119.QueryProposalsResponseAmino;
                fromAminoMsg(object: _119.QueryProposalsResponseAminoMsg): _119.QueryProposalsResponse;
                toAminoMsg(message: _119.QueryProposalsResponse): _119.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _119.QueryProposalsResponseProtoMsg): _119.QueryProposalsResponse;
                toProto(message: _119.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _119.QueryProposalsResponse): _119.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _119.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryVoteRequest;
                fromPartial(object: Partial<_119.QueryVoteRequest>): _119.QueryVoteRequest;
                fromAmino(object: _119.QueryVoteRequestAmino): _119.QueryVoteRequest;
                toAmino(message: _119.QueryVoteRequest): _119.QueryVoteRequestAmino;
                fromAminoMsg(object: _119.QueryVoteRequestAminoMsg): _119.QueryVoteRequest;
                toAminoMsg(message: _119.QueryVoteRequest): _119.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _119.QueryVoteRequestProtoMsg): _119.QueryVoteRequest;
                toProto(message: _119.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _119.QueryVoteRequest): _119.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _119.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryVoteResponse;
                fromPartial(object: Partial<_119.QueryVoteResponse>): _119.QueryVoteResponse;
                fromAmino(object: _119.QueryVoteResponseAmino): _119.QueryVoteResponse;
                toAmino(message: _119.QueryVoteResponse): _119.QueryVoteResponseAmino;
                fromAminoMsg(object: _119.QueryVoteResponseAminoMsg): _119.QueryVoteResponse;
                toAminoMsg(message: _119.QueryVoteResponse): _119.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _119.QueryVoteResponseProtoMsg): _119.QueryVoteResponse;
                toProto(message: _119.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _119.QueryVoteResponse): _119.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _119.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryVotesRequest;
                fromPartial(object: Partial<_119.QueryVotesRequest>): _119.QueryVotesRequest;
                fromAmino(object: _119.QueryVotesRequestAmino): _119.QueryVotesRequest;
                toAmino(message: _119.QueryVotesRequest): _119.QueryVotesRequestAmino;
                fromAminoMsg(object: _119.QueryVotesRequestAminoMsg): _119.QueryVotesRequest;
                toAminoMsg(message: _119.QueryVotesRequest): _119.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _119.QueryVotesRequestProtoMsg): _119.QueryVotesRequest;
                toProto(message: _119.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _119.QueryVotesRequest): _119.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _119.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryVotesResponse;
                fromPartial(object: Partial<_119.QueryVotesResponse>): _119.QueryVotesResponse;
                fromAmino(object: _119.QueryVotesResponseAmino): _119.QueryVotesResponse;
                toAmino(message: _119.QueryVotesResponse): _119.QueryVotesResponseAmino;
                fromAminoMsg(object: _119.QueryVotesResponseAminoMsg): _119.QueryVotesResponse;
                toAminoMsg(message: _119.QueryVotesResponse): _119.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _119.QueryVotesResponseProtoMsg): _119.QueryVotesResponse;
                toProto(message: _119.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _119.QueryVotesResponse): _119.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _119.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryParamsRequest;
                fromPartial(object: Partial<_119.QueryParamsRequest>): _119.QueryParamsRequest;
                fromAmino(object: _119.QueryParamsRequestAmino): _119.QueryParamsRequest;
                toAmino(message: _119.QueryParamsRequest): _119.QueryParamsRequestAmino;
                fromAminoMsg(object: _119.QueryParamsRequestAminoMsg): _119.QueryParamsRequest;
                toAminoMsg(message: _119.QueryParamsRequest): _119.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _119.QueryParamsRequestProtoMsg): _119.QueryParamsRequest;
                toProto(message: _119.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _119.QueryParamsRequest): _119.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _119.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryParamsResponse;
                fromPartial(object: Partial<_119.QueryParamsResponse>): _119.QueryParamsResponse;
                fromAmino(object: _119.QueryParamsResponseAmino): _119.QueryParamsResponse;
                toAmino(message: _119.QueryParamsResponse): _119.QueryParamsResponseAmino;
                fromAminoMsg(object: _119.QueryParamsResponseAminoMsg): _119.QueryParamsResponse;
                toAminoMsg(message: _119.QueryParamsResponse): _119.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _119.QueryParamsResponseProtoMsg): _119.QueryParamsResponse;
                toProto(message: _119.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _119.QueryParamsResponse): _119.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _119.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryDepositRequest;
                fromPartial(object: Partial<_119.QueryDepositRequest>): _119.QueryDepositRequest;
                fromAmino(object: _119.QueryDepositRequestAmino): _119.QueryDepositRequest;
                toAmino(message: _119.QueryDepositRequest): _119.QueryDepositRequestAmino;
                fromAminoMsg(object: _119.QueryDepositRequestAminoMsg): _119.QueryDepositRequest;
                toAminoMsg(message: _119.QueryDepositRequest): _119.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _119.QueryDepositRequestProtoMsg): _119.QueryDepositRequest;
                toProto(message: _119.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _119.QueryDepositRequest): _119.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _119.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryDepositResponse;
                fromPartial(object: Partial<_119.QueryDepositResponse>): _119.QueryDepositResponse;
                fromAmino(object: _119.QueryDepositResponseAmino): _119.QueryDepositResponse;
                toAmino(message: _119.QueryDepositResponse): _119.QueryDepositResponseAmino;
                fromAminoMsg(object: _119.QueryDepositResponseAminoMsg): _119.QueryDepositResponse;
                toAminoMsg(message: _119.QueryDepositResponse): _119.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _119.QueryDepositResponseProtoMsg): _119.QueryDepositResponse;
                toProto(message: _119.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _119.QueryDepositResponse): _119.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _119.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryDepositsRequest;
                fromPartial(object: Partial<_119.QueryDepositsRequest>): _119.QueryDepositsRequest;
                fromAmino(object: _119.QueryDepositsRequestAmino): _119.QueryDepositsRequest;
                toAmino(message: _119.QueryDepositsRequest): _119.QueryDepositsRequestAmino;
                fromAminoMsg(object: _119.QueryDepositsRequestAminoMsg): _119.QueryDepositsRequest;
                toAminoMsg(message: _119.QueryDepositsRequest): _119.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _119.QueryDepositsRequestProtoMsg): _119.QueryDepositsRequest;
                toProto(message: _119.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _119.QueryDepositsRequest): _119.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _119.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryDepositsResponse;
                fromPartial(object: Partial<_119.QueryDepositsResponse>): _119.QueryDepositsResponse;
                fromAmino(object: _119.QueryDepositsResponseAmino): _119.QueryDepositsResponse;
                toAmino(message: _119.QueryDepositsResponse): _119.QueryDepositsResponseAmino;
                fromAminoMsg(object: _119.QueryDepositsResponseAminoMsg): _119.QueryDepositsResponse;
                toAminoMsg(message: _119.QueryDepositsResponse): _119.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _119.QueryDepositsResponseProtoMsg): _119.QueryDepositsResponse;
                toProto(message: _119.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _119.QueryDepositsResponse): _119.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _119.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryTallyResultRequest;
                fromPartial(object: Partial<_119.QueryTallyResultRequest>): _119.QueryTallyResultRequest;
                fromAmino(object: _119.QueryTallyResultRequestAmino): _119.QueryTallyResultRequest;
                toAmino(message: _119.QueryTallyResultRequest): _119.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _119.QueryTallyResultRequestAminoMsg): _119.QueryTallyResultRequest;
                toAminoMsg(message: _119.QueryTallyResultRequest): _119.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _119.QueryTallyResultRequestProtoMsg): _119.QueryTallyResultRequest;
                toProto(message: _119.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _119.QueryTallyResultRequest): _119.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _119.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryTallyResultResponse;
                fromPartial(object: Partial<_119.QueryTallyResultResponse>): _119.QueryTallyResultResponse;
                fromAmino(object: _119.QueryTallyResultResponseAmino): _119.QueryTallyResultResponse;
                toAmino(message: _119.QueryTallyResultResponse): _119.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _119.QueryTallyResultResponseAminoMsg): _119.QueryTallyResultResponse;
                toAminoMsg(message: _119.QueryTallyResultResponse): _119.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _119.QueryTallyResultResponseProtoMsg): _119.QueryTallyResultResponse;
                toProto(message: _119.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _119.QueryTallyResultResponse): _119.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _118.VoteOption;
            voteOptionToJSON(object: _118.VoteOption): string;
            proposalStatusFromJSON(object: any): _118.ProposalStatus;
            proposalStatusToJSON(object: _118.ProposalStatus): string;
            VoteOption: typeof _118.VoteOption;
            VoteOptionSDKType: typeof _118.VoteOption;
            VoteOptionAmino: typeof _118.VoteOption;
            ProposalStatus: typeof _118.ProposalStatus;
            ProposalStatusSDKType: typeof _118.ProposalStatus;
            ProposalStatusAmino: typeof _118.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _118.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.WeightedVoteOption;
                fromPartial(object: Partial<_118.WeightedVoteOption>): _118.WeightedVoteOption;
                fromAmino(object: _118.WeightedVoteOptionAmino): _118.WeightedVoteOption;
                toAmino(message: _118.WeightedVoteOption): _118.WeightedVoteOptionAmino;
                fromAminoMsg(object: _118.WeightedVoteOptionAminoMsg): _118.WeightedVoteOption;
                toAminoMsg(message: _118.WeightedVoteOption): _118.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _118.WeightedVoteOptionProtoMsg): _118.WeightedVoteOption;
                toProto(message: _118.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _118.WeightedVoteOption): _118.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _118.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.TextProposal;
                fromPartial(object: Partial<_118.TextProposal>): _118.TextProposal;
                fromAmino(object: _118.TextProposalAmino): _118.TextProposal;
                toAmino(message: _118.TextProposal): _118.TextProposalAmino;
                fromAminoMsg(object: _118.TextProposalAminoMsg): _118.TextProposal;
                toAminoMsg(message: _118.TextProposal): _118.TextProposalAminoMsg;
                fromProtoMsg(message: _118.TextProposalProtoMsg): _118.TextProposal;
                toProto(message: _118.TextProposal): Uint8Array;
                toProtoMsg(message: _118.TextProposal): _118.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _118.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.Deposit;
                fromPartial(object: Partial<_118.Deposit>): _118.Deposit;
                fromAmino(object: _118.DepositAmino): _118.Deposit;
                toAmino(message: _118.Deposit): _118.DepositAmino;
                fromAminoMsg(object: _118.DepositAminoMsg): _118.Deposit;
                toAminoMsg(message: _118.Deposit): _118.DepositAminoMsg;
                fromProtoMsg(message: _118.DepositProtoMsg): _118.Deposit;
                toProto(message: _118.Deposit): Uint8Array;
                toProtoMsg(message: _118.Deposit): _118.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _118.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.Proposal;
                fromPartial(object: Partial<_118.Proposal>): _118.Proposal;
                fromAmino(object: _118.ProposalAmino): _118.Proposal;
                toAmino(message: _118.Proposal): _118.ProposalAmino;
                fromAminoMsg(object: _118.ProposalAminoMsg): _118.Proposal;
                toAminoMsg(message: _118.Proposal): _118.ProposalAminoMsg;
                fromProtoMsg(message: _118.ProposalProtoMsg): _118.Proposal;
                toProto(message: _118.Proposal): Uint8Array;
                toProtoMsg(message: _118.Proposal): _118.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _118.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.TallyResult;
                fromPartial(object: Partial<_118.TallyResult>): _118.TallyResult;
                fromAmino(object: _118.TallyResultAmino): _118.TallyResult;
                toAmino(message: _118.TallyResult): _118.TallyResultAmino;
                fromAminoMsg(object: _118.TallyResultAminoMsg): _118.TallyResult;
                toAminoMsg(message: _118.TallyResult): _118.TallyResultAminoMsg;
                fromProtoMsg(message: _118.TallyResultProtoMsg): _118.TallyResult;
                toProto(message: _118.TallyResult): Uint8Array;
                toProtoMsg(message: _118.TallyResult): _118.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _118.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.Vote;
                fromPartial(object: Partial<_118.Vote>): _118.Vote;
                fromAmino(object: _118.VoteAmino): _118.Vote;
                toAmino(message: _118.Vote): _118.VoteAmino;
                fromAminoMsg(object: _118.VoteAminoMsg): _118.Vote;
                toAminoMsg(message: _118.Vote): _118.VoteAminoMsg;
                fromProtoMsg(message: _118.VoteProtoMsg): _118.Vote;
                toProto(message: _118.Vote): Uint8Array;
                toProtoMsg(message: _118.Vote): _118.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _118.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.DepositParams;
                fromPartial(object: Partial<_118.DepositParams>): _118.DepositParams;
                fromAmino(object: _118.DepositParamsAmino): _118.DepositParams;
                toAmino(message: _118.DepositParams): _118.DepositParamsAmino;
                fromAminoMsg(object: _118.DepositParamsAminoMsg): _118.DepositParams;
                toAminoMsg(message: _118.DepositParams): _118.DepositParamsAminoMsg;
                fromProtoMsg(message: _118.DepositParamsProtoMsg): _118.DepositParams;
                toProto(message: _118.DepositParams): Uint8Array;
                toProtoMsg(message: _118.DepositParams): _118.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _118.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.VotingParams;
                fromPartial(object: Partial<_118.VotingParams>): _118.VotingParams;
                fromAmino(object: _118.VotingParamsAmino): _118.VotingParams;
                toAmino(message: _118.VotingParams): _118.VotingParamsAmino;
                fromAminoMsg(object: _118.VotingParamsAminoMsg): _118.VotingParams;
                toAminoMsg(message: _118.VotingParams): _118.VotingParamsAminoMsg;
                fromProtoMsg(message: _118.VotingParamsProtoMsg): _118.VotingParams;
                toProto(message: _118.VotingParams): Uint8Array;
                toProtoMsg(message: _118.VotingParams): _118.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _118.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.TallyParams;
                fromPartial(object: Partial<_118.TallyParams>): _118.TallyParams;
                fromAmino(object: _118.TallyParamsAmino): _118.TallyParams;
                toAmino(message: _118.TallyParams): _118.TallyParamsAmino;
                fromAminoMsg(object: _118.TallyParamsAminoMsg): _118.TallyParams;
                toAminoMsg(message: _118.TallyParams): _118.TallyParamsAminoMsg;
                fromProtoMsg(message: _118.TallyParamsProtoMsg): _118.TallyParams;
                toProto(message: _118.TallyParams): Uint8Array;
                toProtoMsg(message: _118.TallyParams): _118.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _117.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.GenesisState;
                fromPartial(object: Partial<_117.GenesisState>): _117.GenesisState;
                fromAmino(object: _117.GenesisStateAmino): _117.GenesisState;
                toAmino(message: _117.GenesisState): _117.GenesisStateAmino;
                fromAminoMsg(object: _117.GenesisStateAminoMsg): _117.GenesisState;
                toAminoMsg(message: _117.GenesisState): _117.GenesisStateAminoMsg;
                fromProtoMsg(message: _117.GenesisStateProtoMsg): _117.GenesisState;
                toProto(message: _117.GenesisState): Uint8Array;
                toProtoMsg(message: _117.GenesisState): _117.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _241.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _123.QueryParamsRequest): Promise<_123.QueryParamsResponse>;
                inflation(request?: _123.QueryInflationRequest): Promise<_123.QueryInflationResponse>;
                annualProvisions(request?: _123.QueryAnnualProvisionsRequest): Promise<_123.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _226.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _123.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _123.QueryParamsRequest;
                fromPartial(_: Partial<_123.QueryParamsRequest>): _123.QueryParamsRequest;
                fromAmino(_: _123.QueryParamsRequestAmino): _123.QueryParamsRequest;
                toAmino(_: _123.QueryParamsRequest): _123.QueryParamsRequestAmino;
                fromAminoMsg(object: _123.QueryParamsRequestAminoMsg): _123.QueryParamsRequest;
                toAminoMsg(message: _123.QueryParamsRequest): _123.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _123.QueryParamsRequestProtoMsg): _123.QueryParamsRequest;
                toProto(message: _123.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _123.QueryParamsRequest): _123.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _123.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryParamsResponse;
                fromPartial(object: Partial<_123.QueryParamsResponse>): _123.QueryParamsResponse;
                fromAmino(object: _123.QueryParamsResponseAmino): _123.QueryParamsResponse;
                toAmino(message: _123.QueryParamsResponse): _123.QueryParamsResponseAmino;
                fromAminoMsg(object: _123.QueryParamsResponseAminoMsg): _123.QueryParamsResponse;
                toAminoMsg(message: _123.QueryParamsResponse): _123.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _123.QueryParamsResponseProtoMsg): _123.QueryParamsResponse;
                toProto(message: _123.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _123.QueryParamsResponse): _123.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _123.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _123.QueryInflationRequest;
                fromPartial(_: Partial<_123.QueryInflationRequest>): _123.QueryInflationRequest;
                fromAmino(_: _123.QueryInflationRequestAmino): _123.QueryInflationRequest;
                toAmino(_: _123.QueryInflationRequest): _123.QueryInflationRequestAmino;
                fromAminoMsg(object: _123.QueryInflationRequestAminoMsg): _123.QueryInflationRequest;
                toAminoMsg(message: _123.QueryInflationRequest): _123.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _123.QueryInflationRequestProtoMsg): _123.QueryInflationRequest;
                toProto(message: _123.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _123.QueryInflationRequest): _123.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _123.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryInflationResponse;
                fromPartial(object: Partial<_123.QueryInflationResponse>): _123.QueryInflationResponse;
                fromAmino(object: _123.QueryInflationResponseAmino): _123.QueryInflationResponse;
                toAmino(message: _123.QueryInflationResponse): _123.QueryInflationResponseAmino;
                fromAminoMsg(object: _123.QueryInflationResponseAminoMsg): _123.QueryInflationResponse;
                toAminoMsg(message: _123.QueryInflationResponse): _123.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _123.QueryInflationResponseProtoMsg): _123.QueryInflationResponse;
                toProto(message: _123.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _123.QueryInflationResponse): _123.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _123.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _123.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_123.QueryAnnualProvisionsRequest>): _123.QueryAnnualProvisionsRequest;
                fromAmino(_: _123.QueryAnnualProvisionsRequestAmino): _123.QueryAnnualProvisionsRequest;
                toAmino(_: _123.QueryAnnualProvisionsRequest): _123.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _123.QueryAnnualProvisionsRequestAminoMsg): _123.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _123.QueryAnnualProvisionsRequest): _123.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _123.QueryAnnualProvisionsRequestProtoMsg): _123.QueryAnnualProvisionsRequest;
                toProto(message: _123.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _123.QueryAnnualProvisionsRequest): _123.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _123.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_123.QueryAnnualProvisionsResponse>): _123.QueryAnnualProvisionsResponse;
                fromAmino(object: _123.QueryAnnualProvisionsResponseAmino): _123.QueryAnnualProvisionsResponse;
                toAmino(message: _123.QueryAnnualProvisionsResponse): _123.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _123.QueryAnnualProvisionsResponseAminoMsg): _123.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _123.QueryAnnualProvisionsResponse): _123.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _123.QueryAnnualProvisionsResponseProtoMsg): _123.QueryAnnualProvisionsResponse;
                toProto(message: _123.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _123.QueryAnnualProvisionsResponse): _123.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _122.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.Minter;
                fromPartial(object: Partial<_122.Minter>): _122.Minter;
                fromAmino(object: _122.MinterAmino): _122.Minter;
                toAmino(message: _122.Minter): _122.MinterAmino;
                fromAminoMsg(object: _122.MinterAminoMsg): _122.Minter;
                toAminoMsg(message: _122.Minter): _122.MinterAminoMsg;
                fromProtoMsg(message: _122.MinterProtoMsg): _122.Minter;
                toProto(message: _122.Minter): Uint8Array;
                toProtoMsg(message: _122.Minter): _122.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _122.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.Params;
                fromPartial(object: Partial<_122.Params>): _122.Params;
                fromAmino(object: _122.ParamsAmino): _122.Params;
                toAmino(message: _122.Params): _122.ParamsAmino;
                fromAminoMsg(object: _122.ParamsAminoMsg): _122.Params;
                toAminoMsg(message: _122.Params): _122.ParamsAminoMsg;
                fromProtoMsg(message: _122.ParamsProtoMsg): _122.Params;
                toProto(message: _122.Params): Uint8Array;
                toProtoMsg(message: _122.Params): _122.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _121.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.GenesisState;
                fromPartial(object: Partial<_121.GenesisState>): _121.GenesisState;
                fromAmino(object: _121.GenesisStateAmino): _121.GenesisState;
                toAmino(message: _121.GenesisState): _121.GenesisStateAmino;
                fromAminoMsg(object: _121.GenesisStateAminoMsg): _121.GenesisState;
                toAminoMsg(message: _121.GenesisState): _121.GenesisStateAminoMsg;
                fromProtoMsg(message: _121.GenesisStateProtoMsg): _121.GenesisState;
                toProto(message: _121.GenesisState): Uint8Array;
                toProtoMsg(message: _121.GenesisState): _121.GenesisStateProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _242.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _125.QueryParamsRequest): Promise<_125.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _227.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _125.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryParamsRequest;
                fromPartial(object: Partial<_125.QueryParamsRequest>): _125.QueryParamsRequest;
                fromAmino(object: _125.QueryParamsRequestAmino): _125.QueryParamsRequest;
                toAmino(message: _125.QueryParamsRequest): _125.QueryParamsRequestAmino;
                fromAminoMsg(object: _125.QueryParamsRequestAminoMsg): _125.QueryParamsRequest;
                toAminoMsg(message: _125.QueryParamsRequest): _125.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _125.QueryParamsRequestProtoMsg): _125.QueryParamsRequest;
                toProto(message: _125.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _125.QueryParamsRequest): _125.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _125.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryParamsResponse;
                fromPartial(object: Partial<_125.QueryParamsResponse>): _125.QueryParamsResponse;
                fromAmino(object: _125.QueryParamsResponseAmino): _125.QueryParamsResponse;
                toAmino(message: _125.QueryParamsResponse): _125.QueryParamsResponseAmino;
                fromAminoMsg(object: _125.QueryParamsResponseAminoMsg): _125.QueryParamsResponse;
                toAminoMsg(message: _125.QueryParamsResponse): _125.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _125.QueryParamsResponseProtoMsg): _125.QueryParamsResponse;
                toProto(message: _125.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _125.QueryParamsResponse): _125.QueryParamsResponseProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _124.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.ParameterChangeProposal;
                fromPartial(object: Partial<_124.ParameterChangeProposal>): _124.ParameterChangeProposal;
                fromAmino(object: _124.ParameterChangeProposalAmino): _124.ParameterChangeProposal;
                toAmino(message: _124.ParameterChangeProposal): _124.ParameterChangeProposalAmino;
                fromAminoMsg(object: _124.ParameterChangeProposalAminoMsg): _124.ParameterChangeProposal;
                toAminoMsg(message: _124.ParameterChangeProposal): _124.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _124.ParameterChangeProposalProtoMsg): _124.ParameterChangeProposal;
                toProto(message: _124.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _124.ParameterChangeProposal): _124.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _124.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.ParamChange;
                fromPartial(object: Partial<_124.ParamChange>): _124.ParamChange;
                fromAmino(object: _124.ParamChangeAmino): _124.ParamChange;
                toAmino(message: _124.ParamChange): _124.ParamChangeAmino;
                fromAminoMsg(object: _124.ParamChangeAminoMsg): _124.ParamChange;
                toAminoMsg(message: _124.ParamChange): _124.ParamChangeAminoMsg;
                fromProtoMsg(message: _124.ParamChangeProtoMsg): _124.ParamChange;
                toProto(message: _124.ParamChange): Uint8Array;
                toProtoMsg(message: _124.ParamChange): _124.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _254.MsgClientImpl;
            QueryClientImpl: typeof _243.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _127.QueryParamsRequest): Promise<_127.QueryParamsResponse>;
                signingInfo(request: _127.QuerySigningInfoRequest): Promise<_127.QuerySigningInfoResponse>;
                signingInfos(request?: _127.QuerySigningInfosRequest): Promise<_127.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _228.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _129.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _129.MsgUnjail): {
                        typeUrl: string;
                        value: _129.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _129.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _129.MsgUnjail): {
                        typeUrl: string;
                        value: _129.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _129.MsgUnjail) => _129.MsgUnjailAmino;
                    fromAmino: (object: _129.MsgUnjailAmino) => _129.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _129.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgUnjail;
                fromPartial(object: Partial<_129.MsgUnjail>): _129.MsgUnjail;
                fromAmino(object: _129.MsgUnjailAmino): _129.MsgUnjail;
                toAmino(message: _129.MsgUnjail): _129.MsgUnjailAmino;
                fromAminoMsg(object: _129.MsgUnjailAminoMsg): _129.MsgUnjail;
                toAminoMsg(message: _129.MsgUnjail): _129.MsgUnjailAminoMsg;
                fromProtoMsg(message: _129.MsgUnjailProtoMsg): _129.MsgUnjail;
                toProto(message: _129.MsgUnjail): Uint8Array;
                toProtoMsg(message: _129.MsgUnjail): _129.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _129.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _129.MsgUnjailResponse;
                fromPartial(_: Partial<_129.MsgUnjailResponse>): _129.MsgUnjailResponse;
                fromAmino(_: _129.MsgUnjailResponseAmino): _129.MsgUnjailResponse;
                toAmino(_: _129.MsgUnjailResponse): _129.MsgUnjailResponseAmino;
                fromAminoMsg(object: _129.MsgUnjailResponseAminoMsg): _129.MsgUnjailResponse;
                toAminoMsg(message: _129.MsgUnjailResponse): _129.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _129.MsgUnjailResponseProtoMsg): _129.MsgUnjailResponse;
                toProto(message: _129.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _129.MsgUnjailResponse): _129.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _128.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.ValidatorSigningInfo;
                fromPartial(object: Partial<_128.ValidatorSigningInfo>): _128.ValidatorSigningInfo;
                fromAmino(object: _128.ValidatorSigningInfoAmino): _128.ValidatorSigningInfo;
                toAmino(message: _128.ValidatorSigningInfo): _128.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _128.ValidatorSigningInfoAminoMsg): _128.ValidatorSigningInfo;
                toAminoMsg(message: _128.ValidatorSigningInfo): _128.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _128.ValidatorSigningInfoProtoMsg): _128.ValidatorSigningInfo;
                toProto(message: _128.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _128.ValidatorSigningInfo): _128.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _128.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.Params;
                fromPartial(object: Partial<_128.Params>): _128.Params;
                fromAmino(object: _128.ParamsAmino): _128.Params;
                toAmino(message: _128.Params): _128.ParamsAmino;
                fromAminoMsg(object: _128.ParamsAminoMsg): _128.Params;
                toAminoMsg(message: _128.Params): _128.ParamsAminoMsg;
                fromProtoMsg(message: _128.ParamsProtoMsg): _128.Params;
                toProto(message: _128.Params): Uint8Array;
                toProtoMsg(message: _128.Params): _128.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _127.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.QueryParamsRequest;
                fromPartial(_: Partial<_127.QueryParamsRequest>): _127.QueryParamsRequest;
                fromAmino(_: _127.QueryParamsRequestAmino): _127.QueryParamsRequest;
                toAmino(_: _127.QueryParamsRequest): _127.QueryParamsRequestAmino;
                fromAminoMsg(object: _127.QueryParamsRequestAminoMsg): _127.QueryParamsRequest;
                toAminoMsg(message: _127.QueryParamsRequest): _127.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _127.QueryParamsRequestProtoMsg): _127.QueryParamsRequest;
                toProto(message: _127.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _127.QueryParamsRequest): _127.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _127.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QueryParamsResponse;
                fromPartial(object: Partial<_127.QueryParamsResponse>): _127.QueryParamsResponse;
                fromAmino(object: _127.QueryParamsResponseAmino): _127.QueryParamsResponse;
                toAmino(message: _127.QueryParamsResponse): _127.QueryParamsResponseAmino;
                fromAminoMsg(object: _127.QueryParamsResponseAminoMsg): _127.QueryParamsResponse;
                toAminoMsg(message: _127.QueryParamsResponse): _127.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _127.QueryParamsResponseProtoMsg): _127.QueryParamsResponse;
                toProto(message: _127.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _127.QueryParamsResponse): _127.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _127.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QuerySigningInfoRequest;
                fromPartial(object: Partial<_127.QuerySigningInfoRequest>): _127.QuerySigningInfoRequest;
                fromAmino(object: _127.QuerySigningInfoRequestAmino): _127.QuerySigningInfoRequest;
                toAmino(message: _127.QuerySigningInfoRequest): _127.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _127.QuerySigningInfoRequestAminoMsg): _127.QuerySigningInfoRequest;
                toAminoMsg(message: _127.QuerySigningInfoRequest): _127.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _127.QuerySigningInfoRequestProtoMsg): _127.QuerySigningInfoRequest;
                toProto(message: _127.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _127.QuerySigningInfoRequest): _127.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _127.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QuerySigningInfoResponse;
                fromPartial(object: Partial<_127.QuerySigningInfoResponse>): _127.QuerySigningInfoResponse;
                fromAmino(object: _127.QuerySigningInfoResponseAmino): _127.QuerySigningInfoResponse;
                toAmino(message: _127.QuerySigningInfoResponse): _127.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _127.QuerySigningInfoResponseAminoMsg): _127.QuerySigningInfoResponse;
                toAminoMsg(message: _127.QuerySigningInfoResponse): _127.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _127.QuerySigningInfoResponseProtoMsg): _127.QuerySigningInfoResponse;
                toProto(message: _127.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _127.QuerySigningInfoResponse): _127.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _127.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QuerySigningInfosRequest;
                fromPartial(object: Partial<_127.QuerySigningInfosRequest>): _127.QuerySigningInfosRequest;
                fromAmino(object: _127.QuerySigningInfosRequestAmino): _127.QuerySigningInfosRequest;
                toAmino(message: _127.QuerySigningInfosRequest): _127.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _127.QuerySigningInfosRequestAminoMsg): _127.QuerySigningInfosRequest;
                toAminoMsg(message: _127.QuerySigningInfosRequest): _127.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _127.QuerySigningInfosRequestProtoMsg): _127.QuerySigningInfosRequest;
                toProto(message: _127.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _127.QuerySigningInfosRequest): _127.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _127.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QuerySigningInfosResponse;
                fromPartial(object: Partial<_127.QuerySigningInfosResponse>): _127.QuerySigningInfosResponse;
                fromAmino(object: _127.QuerySigningInfosResponseAmino): _127.QuerySigningInfosResponse;
                toAmino(message: _127.QuerySigningInfosResponse): _127.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _127.QuerySigningInfosResponseAminoMsg): _127.QuerySigningInfosResponse;
                toAminoMsg(message: _127.QuerySigningInfosResponse): _127.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _127.QuerySigningInfosResponseProtoMsg): _127.QuerySigningInfosResponse;
                toProto(message: _127.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _127.QuerySigningInfosResponse): _127.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _126.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.GenesisState;
                fromPartial(object: Partial<_126.GenesisState>): _126.GenesisState;
                fromAmino(object: _126.GenesisStateAmino): _126.GenesisState;
                toAmino(message: _126.GenesisState): _126.GenesisStateAmino;
                fromAminoMsg(object: _126.GenesisStateAminoMsg): _126.GenesisState;
                toAminoMsg(message: _126.GenesisState): _126.GenesisStateAminoMsg;
                fromProtoMsg(message: _126.GenesisStateProtoMsg): _126.GenesisState;
                toProto(message: _126.GenesisState): Uint8Array;
                toProtoMsg(message: _126.GenesisState): _126.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _126.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.SigningInfo;
                fromPartial(object: Partial<_126.SigningInfo>): _126.SigningInfo;
                fromAmino(object: _126.SigningInfoAmino): _126.SigningInfo;
                toAmino(message: _126.SigningInfo): _126.SigningInfoAmino;
                fromAminoMsg(object: _126.SigningInfoAminoMsg): _126.SigningInfo;
                toAminoMsg(message: _126.SigningInfo): _126.SigningInfoAminoMsg;
                fromProtoMsg(message: _126.SigningInfoProtoMsg): _126.SigningInfo;
                toProto(message: _126.SigningInfo): Uint8Array;
                toProtoMsg(message: _126.SigningInfo): _126.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _126.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.ValidatorMissedBlocks;
                fromPartial(object: Partial<_126.ValidatorMissedBlocks>): _126.ValidatorMissedBlocks;
                fromAmino(object: _126.ValidatorMissedBlocksAmino): _126.ValidatorMissedBlocks;
                toAmino(message: _126.ValidatorMissedBlocks): _126.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _126.ValidatorMissedBlocksAminoMsg): _126.ValidatorMissedBlocks;
                toAminoMsg(message: _126.ValidatorMissedBlocks): _126.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _126.ValidatorMissedBlocksProtoMsg): _126.ValidatorMissedBlocks;
                toProto(message: _126.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _126.ValidatorMissedBlocks): _126.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _126.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.MissedBlock;
                fromPartial(object: Partial<_126.MissedBlock>): _126.MissedBlock;
                fromAmino(object: _126.MissedBlockAmino): _126.MissedBlock;
                toAmino(message: _126.MissedBlock): _126.MissedBlockAmino;
                fromAminoMsg(object: _126.MissedBlockAminoMsg): _126.MissedBlock;
                toAminoMsg(message: _126.MissedBlock): _126.MissedBlockAminoMsg;
                fromProtoMsg(message: _126.MissedBlockProtoMsg): _126.MissedBlock;
                toProto(message: _126.MissedBlock): Uint8Array;
                toProtoMsg(message: _126.MissedBlock): _126.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _255.MsgClientImpl;
            QueryClientImpl: typeof _244.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _132.QueryValidatorsRequest): Promise<_132.QueryValidatorsResponse>;
                validator(request: _132.QueryValidatorRequest): Promise<_132.QueryValidatorResponse>;
                validatorDelegations(request: _132.QueryValidatorDelegationsRequest): Promise<_132.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _132.QueryValidatorUnbondingDelegationsRequest): Promise<_132.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _132.QueryDelegationRequest): Promise<_132.QueryDelegationResponse>;
                unbondingDelegation(request: _132.QueryUnbondingDelegationRequest): Promise<_132.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _132.QueryDelegatorDelegationsRequest): Promise<_132.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _132.QueryDelegatorUnbondingDelegationsRequest): Promise<_132.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _132.QueryRedelegationsRequest): Promise<_132.QueryRedelegationsResponse>;
                delegatorValidators(request: _132.QueryDelegatorValidatorsRequest): Promise<_132.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _132.QueryDelegatorValidatorRequest): Promise<_132.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _132.QueryHistoricalInfoRequest): Promise<_132.QueryHistoricalInfoResponse>;
                pool(request?: _132.QueryPoolRequest): Promise<_132.QueryPoolResponse>;
                params(request?: _132.QueryParamsRequest): Promise<_132.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _229.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _134.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _134.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _134.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _134.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _134.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _134.MsgCreateValidator): {
                        typeUrl: string;
                        value: _134.MsgCreateValidator;
                    };
                    editValidator(value: _134.MsgEditValidator): {
                        typeUrl: string;
                        value: _134.MsgEditValidator;
                    };
                    delegate(value: _134.MsgDelegate): {
                        typeUrl: string;
                        value: _134.MsgDelegate;
                    };
                    beginRedelegate(value: _134.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _134.MsgBeginRedelegate;
                    };
                    undelegate(value: _134.MsgUndelegate): {
                        typeUrl: string;
                        value: _134.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _134.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _134.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _134.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _134.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _134.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _134.MsgCreateValidator): {
                        typeUrl: string;
                        value: _134.MsgCreateValidator;
                    };
                    editValidator(value: _134.MsgEditValidator): {
                        typeUrl: string;
                        value: _134.MsgEditValidator;
                    };
                    delegate(value: _134.MsgDelegate): {
                        typeUrl: string;
                        value: _134.MsgDelegate;
                    };
                    beginRedelegate(value: _134.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _134.MsgBeginRedelegate;
                    };
                    undelegate(value: _134.MsgUndelegate): {
                        typeUrl: string;
                        value: _134.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _134.MsgCreateValidator) => _134.MsgCreateValidatorAmino;
                    fromAmino: (object: _134.MsgCreateValidatorAmino) => _134.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _134.MsgEditValidator) => _134.MsgEditValidatorAmino;
                    fromAmino: (object: _134.MsgEditValidatorAmino) => _134.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _134.MsgDelegate) => _134.MsgDelegateAmino;
                    fromAmino: (object: _134.MsgDelegateAmino) => _134.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _134.MsgBeginRedelegate) => _134.MsgBeginRedelegateAmino;
                    fromAmino: (object: _134.MsgBeginRedelegateAmino) => _134.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _134.MsgUndelegate) => _134.MsgUndelegateAmino;
                    fromAmino: (object: _134.MsgUndelegateAmino) => _134.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _134.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.MsgCreateValidator;
                fromPartial(object: Partial<_134.MsgCreateValidator>): _134.MsgCreateValidator;
                fromAmino(object: _134.MsgCreateValidatorAmino): _134.MsgCreateValidator;
                toAmino(message: _134.MsgCreateValidator): _134.MsgCreateValidatorAmino;
                fromAminoMsg(object: _134.MsgCreateValidatorAminoMsg): _134.MsgCreateValidator;
                toAminoMsg(message: _134.MsgCreateValidator): _134.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _134.MsgCreateValidatorProtoMsg): _134.MsgCreateValidator;
                toProto(message: _134.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _134.MsgCreateValidator): _134.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _134.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _134.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_134.MsgCreateValidatorResponse>): _134.MsgCreateValidatorResponse;
                fromAmino(_: _134.MsgCreateValidatorResponseAmino): _134.MsgCreateValidatorResponse;
                toAmino(_: _134.MsgCreateValidatorResponse): _134.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _134.MsgCreateValidatorResponseAminoMsg): _134.MsgCreateValidatorResponse;
                toAminoMsg(message: _134.MsgCreateValidatorResponse): _134.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _134.MsgCreateValidatorResponseProtoMsg): _134.MsgCreateValidatorResponse;
                toProto(message: _134.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _134.MsgCreateValidatorResponse): _134.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _134.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.MsgEditValidator;
                fromPartial(object: Partial<_134.MsgEditValidator>): _134.MsgEditValidator;
                fromAmino(object: _134.MsgEditValidatorAmino): _134.MsgEditValidator;
                toAmino(message: _134.MsgEditValidator): _134.MsgEditValidatorAmino;
                fromAminoMsg(object: _134.MsgEditValidatorAminoMsg): _134.MsgEditValidator;
                toAminoMsg(message: _134.MsgEditValidator): _134.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _134.MsgEditValidatorProtoMsg): _134.MsgEditValidator;
                toProto(message: _134.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _134.MsgEditValidator): _134.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _134.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _134.MsgEditValidatorResponse;
                fromPartial(_: Partial<_134.MsgEditValidatorResponse>): _134.MsgEditValidatorResponse;
                fromAmino(_: _134.MsgEditValidatorResponseAmino): _134.MsgEditValidatorResponse;
                toAmino(_: _134.MsgEditValidatorResponse): _134.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _134.MsgEditValidatorResponseAminoMsg): _134.MsgEditValidatorResponse;
                toAminoMsg(message: _134.MsgEditValidatorResponse): _134.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _134.MsgEditValidatorResponseProtoMsg): _134.MsgEditValidatorResponse;
                toProto(message: _134.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _134.MsgEditValidatorResponse): _134.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _134.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.MsgDelegate;
                fromPartial(object: Partial<_134.MsgDelegate>): _134.MsgDelegate;
                fromAmino(object: _134.MsgDelegateAmino): _134.MsgDelegate;
                toAmino(message: _134.MsgDelegate): _134.MsgDelegateAmino;
                fromAminoMsg(object: _134.MsgDelegateAminoMsg): _134.MsgDelegate;
                toAminoMsg(message: _134.MsgDelegate): _134.MsgDelegateAminoMsg;
                fromProtoMsg(message: _134.MsgDelegateProtoMsg): _134.MsgDelegate;
                toProto(message: _134.MsgDelegate): Uint8Array;
                toProtoMsg(message: _134.MsgDelegate): _134.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _134.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _134.MsgDelegateResponse;
                fromPartial(_: Partial<_134.MsgDelegateResponse>): _134.MsgDelegateResponse;
                fromAmino(_: _134.MsgDelegateResponseAmino): _134.MsgDelegateResponse;
                toAmino(_: _134.MsgDelegateResponse): _134.MsgDelegateResponseAmino;
                fromAminoMsg(object: _134.MsgDelegateResponseAminoMsg): _134.MsgDelegateResponse;
                toAminoMsg(message: _134.MsgDelegateResponse): _134.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _134.MsgDelegateResponseProtoMsg): _134.MsgDelegateResponse;
                toProto(message: _134.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _134.MsgDelegateResponse): _134.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _134.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.MsgBeginRedelegate;
                fromPartial(object: Partial<_134.MsgBeginRedelegate>): _134.MsgBeginRedelegate;
                fromAmino(object: _134.MsgBeginRedelegateAmino): _134.MsgBeginRedelegate;
                toAmino(message: _134.MsgBeginRedelegate): _134.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _134.MsgBeginRedelegateAminoMsg): _134.MsgBeginRedelegate;
                toAminoMsg(message: _134.MsgBeginRedelegate): _134.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _134.MsgBeginRedelegateProtoMsg): _134.MsgBeginRedelegate;
                toProto(message: _134.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _134.MsgBeginRedelegate): _134.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _134.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_134.MsgBeginRedelegateResponse>): _134.MsgBeginRedelegateResponse;
                fromAmino(object: _134.MsgBeginRedelegateResponseAmino): _134.MsgBeginRedelegateResponse;
                toAmino(message: _134.MsgBeginRedelegateResponse): _134.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _134.MsgBeginRedelegateResponseAminoMsg): _134.MsgBeginRedelegateResponse;
                toAminoMsg(message: _134.MsgBeginRedelegateResponse): _134.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _134.MsgBeginRedelegateResponseProtoMsg): _134.MsgBeginRedelegateResponse;
                toProto(message: _134.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _134.MsgBeginRedelegateResponse): _134.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _134.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.MsgUndelegate;
                fromPartial(object: Partial<_134.MsgUndelegate>): _134.MsgUndelegate;
                fromAmino(object: _134.MsgUndelegateAmino): _134.MsgUndelegate;
                toAmino(message: _134.MsgUndelegate): _134.MsgUndelegateAmino;
                fromAminoMsg(object: _134.MsgUndelegateAminoMsg): _134.MsgUndelegate;
                toAminoMsg(message: _134.MsgUndelegate): _134.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _134.MsgUndelegateProtoMsg): _134.MsgUndelegate;
                toProto(message: _134.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _134.MsgUndelegate): _134.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _134.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.MsgUndelegateResponse;
                fromPartial(object: Partial<_134.MsgUndelegateResponse>): _134.MsgUndelegateResponse;
                fromAmino(object: _134.MsgUndelegateResponseAmino): _134.MsgUndelegateResponse;
                toAmino(message: _134.MsgUndelegateResponse): _134.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _134.MsgUndelegateResponseAminoMsg): _134.MsgUndelegateResponse;
                toAminoMsg(message: _134.MsgUndelegateResponse): _134.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _134.MsgUndelegateResponseProtoMsg): _134.MsgUndelegateResponse;
                toProto(message: _134.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _134.MsgUndelegateResponse): _134.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _133.BondStatus;
            bondStatusToJSON(object: _133.BondStatus): string;
            BondStatus: typeof _133.BondStatus;
            BondStatusSDKType: typeof _133.BondStatus;
            BondStatusAmino: typeof _133.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _133.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.HistoricalInfo;
                fromPartial(object: Partial<_133.HistoricalInfo>): _133.HistoricalInfo;
                fromAmino(object: _133.HistoricalInfoAmino): _133.HistoricalInfo;
                toAmino(message: _133.HistoricalInfo): _133.HistoricalInfoAmino;
                fromAminoMsg(object: _133.HistoricalInfoAminoMsg): _133.HistoricalInfo;
                toAminoMsg(message: _133.HistoricalInfo): _133.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _133.HistoricalInfoProtoMsg): _133.HistoricalInfo;
                toProto(message: _133.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _133.HistoricalInfo): _133.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _133.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.CommissionRates;
                fromPartial(object: Partial<_133.CommissionRates>): _133.CommissionRates;
                fromAmino(object: _133.CommissionRatesAmino): _133.CommissionRates;
                toAmino(message: _133.CommissionRates): _133.CommissionRatesAmino;
                fromAminoMsg(object: _133.CommissionRatesAminoMsg): _133.CommissionRates;
                toAminoMsg(message: _133.CommissionRates): _133.CommissionRatesAminoMsg;
                fromProtoMsg(message: _133.CommissionRatesProtoMsg): _133.CommissionRates;
                toProto(message: _133.CommissionRates): Uint8Array;
                toProtoMsg(message: _133.CommissionRates): _133.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _133.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.Commission;
                fromPartial(object: Partial<_133.Commission>): _133.Commission;
                fromAmino(object: _133.CommissionAmino): _133.Commission;
                toAmino(message: _133.Commission): _133.CommissionAmino;
                fromAminoMsg(object: _133.CommissionAminoMsg): _133.Commission;
                toAminoMsg(message: _133.Commission): _133.CommissionAminoMsg;
                fromProtoMsg(message: _133.CommissionProtoMsg): _133.Commission;
                toProto(message: _133.Commission): Uint8Array;
                toProtoMsg(message: _133.Commission): _133.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _133.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.Description;
                fromPartial(object: Partial<_133.Description>): _133.Description;
                fromAmino(object: _133.DescriptionAmino): _133.Description;
                toAmino(message: _133.Description): _133.DescriptionAmino;
                fromAminoMsg(object: _133.DescriptionAminoMsg): _133.Description;
                toAminoMsg(message: _133.Description): _133.DescriptionAminoMsg;
                fromProtoMsg(message: _133.DescriptionProtoMsg): _133.Description;
                toProto(message: _133.Description): Uint8Array;
                toProtoMsg(message: _133.Description): _133.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _133.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.Validator;
                fromPartial(object: Partial<_133.Validator>): _133.Validator;
                fromAmino(object: _133.ValidatorAmino): _133.Validator;
                toAmino(message: _133.Validator): _133.ValidatorAmino;
                fromAminoMsg(object: _133.ValidatorAminoMsg): _133.Validator;
                toAminoMsg(message: _133.Validator): _133.ValidatorAminoMsg;
                fromProtoMsg(message: _133.ValidatorProtoMsg): _133.Validator;
                toProto(message: _133.Validator): Uint8Array;
                toProtoMsg(message: _133.Validator): _133.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _133.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.ValAddresses;
                fromPartial(object: Partial<_133.ValAddresses>): _133.ValAddresses;
                fromAmino(object: _133.ValAddressesAmino): _133.ValAddresses;
                toAmino(message: _133.ValAddresses): _133.ValAddressesAmino;
                fromAminoMsg(object: _133.ValAddressesAminoMsg): _133.ValAddresses;
                toAminoMsg(message: _133.ValAddresses): _133.ValAddressesAminoMsg;
                fromProtoMsg(message: _133.ValAddressesProtoMsg): _133.ValAddresses;
                toProto(message: _133.ValAddresses): Uint8Array;
                toProtoMsg(message: _133.ValAddresses): _133.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _133.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.DVPair;
                fromPartial(object: Partial<_133.DVPair>): _133.DVPair;
                fromAmino(object: _133.DVPairAmino): _133.DVPair;
                toAmino(message: _133.DVPair): _133.DVPairAmino;
                fromAminoMsg(object: _133.DVPairAminoMsg): _133.DVPair;
                toAminoMsg(message: _133.DVPair): _133.DVPairAminoMsg;
                fromProtoMsg(message: _133.DVPairProtoMsg): _133.DVPair;
                toProto(message: _133.DVPair): Uint8Array;
                toProtoMsg(message: _133.DVPair): _133.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _133.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.DVPairs;
                fromPartial(object: Partial<_133.DVPairs>): _133.DVPairs;
                fromAmino(object: _133.DVPairsAmino): _133.DVPairs;
                toAmino(message: _133.DVPairs): _133.DVPairsAmino;
                fromAminoMsg(object: _133.DVPairsAminoMsg): _133.DVPairs;
                toAminoMsg(message: _133.DVPairs): _133.DVPairsAminoMsg;
                fromProtoMsg(message: _133.DVPairsProtoMsg): _133.DVPairs;
                toProto(message: _133.DVPairs): Uint8Array;
                toProtoMsg(message: _133.DVPairs): _133.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _133.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.DVVTriplet;
                fromPartial(object: Partial<_133.DVVTriplet>): _133.DVVTriplet;
                fromAmino(object: _133.DVVTripletAmino): _133.DVVTriplet;
                toAmino(message: _133.DVVTriplet): _133.DVVTripletAmino;
                fromAminoMsg(object: _133.DVVTripletAminoMsg): _133.DVVTriplet;
                toAminoMsg(message: _133.DVVTriplet): _133.DVVTripletAminoMsg;
                fromProtoMsg(message: _133.DVVTripletProtoMsg): _133.DVVTriplet;
                toProto(message: _133.DVVTriplet): Uint8Array;
                toProtoMsg(message: _133.DVVTriplet): _133.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _133.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.DVVTriplets;
                fromPartial(object: Partial<_133.DVVTriplets>): _133.DVVTriplets;
                fromAmino(object: _133.DVVTripletsAmino): _133.DVVTriplets;
                toAmino(message: _133.DVVTriplets): _133.DVVTripletsAmino;
                fromAminoMsg(object: _133.DVVTripletsAminoMsg): _133.DVVTriplets;
                toAminoMsg(message: _133.DVVTriplets): _133.DVVTripletsAminoMsg;
                fromProtoMsg(message: _133.DVVTripletsProtoMsg): _133.DVVTriplets;
                toProto(message: _133.DVVTriplets): Uint8Array;
                toProtoMsg(message: _133.DVVTriplets): _133.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _133.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.Delegation;
                fromPartial(object: Partial<_133.Delegation>): _133.Delegation;
                fromAmino(object: _133.DelegationAmino): _133.Delegation;
                toAmino(message: _133.Delegation): _133.DelegationAmino;
                fromAminoMsg(object: _133.DelegationAminoMsg): _133.Delegation;
                toAminoMsg(message: _133.Delegation): _133.DelegationAminoMsg;
                fromProtoMsg(message: _133.DelegationProtoMsg): _133.Delegation;
                toProto(message: _133.Delegation): Uint8Array;
                toProtoMsg(message: _133.Delegation): _133.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _133.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.UnbondingDelegation;
                fromPartial(object: Partial<_133.UnbondingDelegation>): _133.UnbondingDelegation;
                fromAmino(object: _133.UnbondingDelegationAmino): _133.UnbondingDelegation;
                toAmino(message: _133.UnbondingDelegation): _133.UnbondingDelegationAmino;
                fromAminoMsg(object: _133.UnbondingDelegationAminoMsg): _133.UnbondingDelegation;
                toAminoMsg(message: _133.UnbondingDelegation): _133.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _133.UnbondingDelegationProtoMsg): _133.UnbondingDelegation;
                toProto(message: _133.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _133.UnbondingDelegation): _133.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _133.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.UnbondingDelegationEntry;
                fromPartial(object: Partial<_133.UnbondingDelegationEntry>): _133.UnbondingDelegationEntry;
                fromAmino(object: _133.UnbondingDelegationEntryAmino): _133.UnbondingDelegationEntry;
                toAmino(message: _133.UnbondingDelegationEntry): _133.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _133.UnbondingDelegationEntryAminoMsg): _133.UnbondingDelegationEntry;
                toAminoMsg(message: _133.UnbondingDelegationEntry): _133.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _133.UnbondingDelegationEntryProtoMsg): _133.UnbondingDelegationEntry;
                toProto(message: _133.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _133.UnbondingDelegationEntry): _133.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _133.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.RedelegationEntry;
                fromPartial(object: Partial<_133.RedelegationEntry>): _133.RedelegationEntry;
                fromAmino(object: _133.RedelegationEntryAmino): _133.RedelegationEntry;
                toAmino(message: _133.RedelegationEntry): _133.RedelegationEntryAmino;
                fromAminoMsg(object: _133.RedelegationEntryAminoMsg): _133.RedelegationEntry;
                toAminoMsg(message: _133.RedelegationEntry): _133.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _133.RedelegationEntryProtoMsg): _133.RedelegationEntry;
                toProto(message: _133.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _133.RedelegationEntry): _133.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _133.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.Redelegation;
                fromPartial(object: Partial<_133.Redelegation>): _133.Redelegation;
                fromAmino(object: _133.RedelegationAmino): _133.Redelegation;
                toAmino(message: _133.Redelegation): _133.RedelegationAmino;
                fromAminoMsg(object: _133.RedelegationAminoMsg): _133.Redelegation;
                toAminoMsg(message: _133.Redelegation): _133.RedelegationAminoMsg;
                fromProtoMsg(message: _133.RedelegationProtoMsg): _133.Redelegation;
                toProto(message: _133.Redelegation): Uint8Array;
                toProtoMsg(message: _133.Redelegation): _133.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _133.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.Params;
                fromPartial(object: Partial<_133.Params>): _133.Params;
                fromAmino(object: _133.ParamsAmino): _133.Params;
                toAmino(message: _133.Params): _133.ParamsAmino;
                fromAminoMsg(object: _133.ParamsAminoMsg): _133.Params;
                toAminoMsg(message: _133.Params): _133.ParamsAminoMsg;
                fromProtoMsg(message: _133.ParamsProtoMsg): _133.Params;
                toProto(message: _133.Params): Uint8Array;
                toProtoMsg(message: _133.Params): _133.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _133.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.DelegationResponse;
                fromPartial(object: Partial<_133.DelegationResponse>): _133.DelegationResponse;
                fromAmino(object: _133.DelegationResponseAmino): _133.DelegationResponse;
                toAmino(message: _133.DelegationResponse): _133.DelegationResponseAmino;
                fromAminoMsg(object: _133.DelegationResponseAminoMsg): _133.DelegationResponse;
                toAminoMsg(message: _133.DelegationResponse): _133.DelegationResponseAminoMsg;
                fromProtoMsg(message: _133.DelegationResponseProtoMsg): _133.DelegationResponse;
                toProto(message: _133.DelegationResponse): Uint8Array;
                toProtoMsg(message: _133.DelegationResponse): _133.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _133.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.RedelegationEntryResponse;
                fromPartial(object: Partial<_133.RedelegationEntryResponse>): _133.RedelegationEntryResponse;
                fromAmino(object: _133.RedelegationEntryResponseAmino): _133.RedelegationEntryResponse;
                toAmino(message: _133.RedelegationEntryResponse): _133.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _133.RedelegationEntryResponseAminoMsg): _133.RedelegationEntryResponse;
                toAminoMsg(message: _133.RedelegationEntryResponse): _133.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _133.RedelegationEntryResponseProtoMsg): _133.RedelegationEntryResponse;
                toProto(message: _133.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _133.RedelegationEntryResponse): _133.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _133.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.RedelegationResponse;
                fromPartial(object: Partial<_133.RedelegationResponse>): _133.RedelegationResponse;
                fromAmino(object: _133.RedelegationResponseAmino): _133.RedelegationResponse;
                toAmino(message: _133.RedelegationResponse): _133.RedelegationResponseAmino;
                fromAminoMsg(object: _133.RedelegationResponseAminoMsg): _133.RedelegationResponse;
                toAminoMsg(message: _133.RedelegationResponse): _133.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _133.RedelegationResponseProtoMsg): _133.RedelegationResponse;
                toProto(message: _133.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _133.RedelegationResponse): _133.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _133.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.Pool;
                fromPartial(object: Partial<_133.Pool>): _133.Pool;
                fromAmino(object: _133.PoolAmino): _133.Pool;
                toAmino(message: _133.Pool): _133.PoolAmino;
                fromAminoMsg(object: _133.PoolAminoMsg): _133.Pool;
                toAminoMsg(message: _133.Pool): _133.PoolAminoMsg;
                fromProtoMsg(message: _133.PoolProtoMsg): _133.Pool;
                toProto(message: _133.Pool): Uint8Array;
                toProtoMsg(message: _133.Pool): _133.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _132.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryValidatorsRequest;
                fromPartial(object: Partial<_132.QueryValidatorsRequest>): _132.QueryValidatorsRequest;
                fromAmino(object: _132.QueryValidatorsRequestAmino): _132.QueryValidatorsRequest;
                toAmino(message: _132.QueryValidatorsRequest): _132.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _132.QueryValidatorsRequestAminoMsg): _132.QueryValidatorsRequest;
                toAminoMsg(message: _132.QueryValidatorsRequest): _132.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorsRequestProtoMsg): _132.QueryValidatorsRequest;
                toProto(message: _132.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorsRequest): _132.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _132.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryValidatorsResponse;
                fromPartial(object: Partial<_132.QueryValidatorsResponse>): _132.QueryValidatorsResponse;
                fromAmino(object: _132.QueryValidatorsResponseAmino): _132.QueryValidatorsResponse;
                toAmino(message: _132.QueryValidatorsResponse): _132.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _132.QueryValidatorsResponseAminoMsg): _132.QueryValidatorsResponse;
                toAminoMsg(message: _132.QueryValidatorsResponse): _132.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorsResponseProtoMsg): _132.QueryValidatorsResponse;
                toProto(message: _132.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorsResponse): _132.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _132.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryValidatorRequest;
                fromPartial(object: Partial<_132.QueryValidatorRequest>): _132.QueryValidatorRequest;
                fromAmino(object: _132.QueryValidatorRequestAmino): _132.QueryValidatorRequest;
                toAmino(message: _132.QueryValidatorRequest): _132.QueryValidatorRequestAmino;
                fromAminoMsg(object: _132.QueryValidatorRequestAminoMsg): _132.QueryValidatorRequest;
                toAminoMsg(message: _132.QueryValidatorRequest): _132.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorRequestProtoMsg): _132.QueryValidatorRequest;
                toProto(message: _132.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorRequest): _132.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _132.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryValidatorResponse;
                fromPartial(object: Partial<_132.QueryValidatorResponse>): _132.QueryValidatorResponse;
                fromAmino(object: _132.QueryValidatorResponseAmino): _132.QueryValidatorResponse;
                toAmino(message: _132.QueryValidatorResponse): _132.QueryValidatorResponseAmino;
                fromAminoMsg(object: _132.QueryValidatorResponseAminoMsg): _132.QueryValidatorResponse;
                toAminoMsg(message: _132.QueryValidatorResponse): _132.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorResponseProtoMsg): _132.QueryValidatorResponse;
                toProto(message: _132.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorResponse): _132.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _132.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_132.QueryValidatorDelegationsRequest>): _132.QueryValidatorDelegationsRequest;
                fromAmino(object: _132.QueryValidatorDelegationsRequestAmino): _132.QueryValidatorDelegationsRequest;
                toAmino(message: _132.QueryValidatorDelegationsRequest): _132.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _132.QueryValidatorDelegationsRequestAminoMsg): _132.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _132.QueryValidatorDelegationsRequest): _132.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorDelegationsRequestProtoMsg): _132.QueryValidatorDelegationsRequest;
                toProto(message: _132.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorDelegationsRequest): _132.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _132.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_132.QueryValidatorDelegationsResponse>): _132.QueryValidatorDelegationsResponse;
                fromAmino(object: _132.QueryValidatorDelegationsResponseAmino): _132.QueryValidatorDelegationsResponse;
                toAmino(message: _132.QueryValidatorDelegationsResponse): _132.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _132.QueryValidatorDelegationsResponseAminoMsg): _132.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _132.QueryValidatorDelegationsResponse): _132.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorDelegationsResponseProtoMsg): _132.QueryValidatorDelegationsResponse;
                toProto(message: _132.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorDelegationsResponse): _132.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _132.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_132.QueryValidatorUnbondingDelegationsRequest>): _132.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _132.QueryValidatorUnbondingDelegationsRequestAmino): _132.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _132.QueryValidatorUnbondingDelegationsRequest): _132.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _132.QueryValidatorUnbondingDelegationsRequestAminoMsg): _132.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _132.QueryValidatorUnbondingDelegationsRequest): _132.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorUnbondingDelegationsRequestProtoMsg): _132.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _132.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorUnbondingDelegationsRequest): _132.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _132.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_132.QueryValidatorUnbondingDelegationsResponse>): _132.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _132.QueryValidatorUnbondingDelegationsResponseAmino): _132.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _132.QueryValidatorUnbondingDelegationsResponse): _132.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _132.QueryValidatorUnbondingDelegationsResponseAminoMsg): _132.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _132.QueryValidatorUnbondingDelegationsResponse): _132.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorUnbondingDelegationsResponseProtoMsg): _132.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _132.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorUnbondingDelegationsResponse): _132.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _132.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryDelegationRequest;
                fromPartial(object: Partial<_132.QueryDelegationRequest>): _132.QueryDelegationRequest;
                fromAmino(object: _132.QueryDelegationRequestAmino): _132.QueryDelegationRequest;
                toAmino(message: _132.QueryDelegationRequest): _132.QueryDelegationRequestAmino;
                fromAminoMsg(object: _132.QueryDelegationRequestAminoMsg): _132.QueryDelegationRequest;
                toAminoMsg(message: _132.QueryDelegationRequest): _132.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _132.QueryDelegationRequestProtoMsg): _132.QueryDelegationRequest;
                toProto(message: _132.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _132.QueryDelegationRequest): _132.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _132.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryDelegationResponse;
                fromPartial(object: Partial<_132.QueryDelegationResponse>): _132.QueryDelegationResponse;
                fromAmino(object: _132.QueryDelegationResponseAmino): _132.QueryDelegationResponse;
                toAmino(message: _132.QueryDelegationResponse): _132.QueryDelegationResponseAmino;
                fromAminoMsg(object: _132.QueryDelegationResponseAminoMsg): _132.QueryDelegationResponse;
                toAminoMsg(message: _132.QueryDelegationResponse): _132.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _132.QueryDelegationResponseProtoMsg): _132.QueryDelegationResponse;
                toProto(message: _132.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _132.QueryDelegationResponse): _132.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _132.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_132.QueryUnbondingDelegationRequest>): _132.QueryUnbondingDelegationRequest;
                fromAmino(object: _132.QueryUnbondingDelegationRequestAmino): _132.QueryUnbondingDelegationRequest;
                toAmino(message: _132.QueryUnbondingDelegationRequest): _132.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _132.QueryUnbondingDelegationRequestAminoMsg): _132.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _132.QueryUnbondingDelegationRequest): _132.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _132.QueryUnbondingDelegationRequestProtoMsg): _132.QueryUnbondingDelegationRequest;
                toProto(message: _132.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _132.QueryUnbondingDelegationRequest): _132.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _132.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_132.QueryUnbondingDelegationResponse>): _132.QueryUnbondingDelegationResponse;
                fromAmino(object: _132.QueryUnbondingDelegationResponseAmino): _132.QueryUnbondingDelegationResponse;
                toAmino(message: _132.QueryUnbondingDelegationResponse): _132.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _132.QueryUnbondingDelegationResponseAminoMsg): _132.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _132.QueryUnbondingDelegationResponse): _132.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _132.QueryUnbondingDelegationResponseProtoMsg): _132.QueryUnbondingDelegationResponse;
                toProto(message: _132.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _132.QueryUnbondingDelegationResponse): _132.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_132.QueryDelegatorDelegationsRequest>): _132.QueryDelegatorDelegationsRequest;
                fromAmino(object: _132.QueryDelegatorDelegationsRequestAmino): _132.QueryDelegatorDelegationsRequest;
                toAmino(message: _132.QueryDelegatorDelegationsRequest): _132.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _132.QueryDelegatorDelegationsRequestAminoMsg): _132.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _132.QueryDelegatorDelegationsRequest): _132.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorDelegationsRequestProtoMsg): _132.QueryDelegatorDelegationsRequest;
                toProto(message: _132.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorDelegationsRequest): _132.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_132.QueryDelegatorDelegationsResponse>): _132.QueryDelegatorDelegationsResponse;
                fromAmino(object: _132.QueryDelegatorDelegationsResponseAmino): _132.QueryDelegatorDelegationsResponse;
                toAmino(message: _132.QueryDelegatorDelegationsResponse): _132.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _132.QueryDelegatorDelegationsResponseAminoMsg): _132.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _132.QueryDelegatorDelegationsResponse): _132.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorDelegationsResponseProtoMsg): _132.QueryDelegatorDelegationsResponse;
                toProto(message: _132.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorDelegationsResponse): _132.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_132.QueryDelegatorUnbondingDelegationsRequest>): _132.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _132.QueryDelegatorUnbondingDelegationsRequestAmino): _132.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _132.QueryDelegatorUnbondingDelegationsRequest): _132.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _132.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _132.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _132.QueryDelegatorUnbondingDelegationsRequest): _132.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _132.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _132.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorUnbondingDelegationsRequest): _132.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_132.QueryDelegatorUnbondingDelegationsResponse>): _132.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _132.QueryDelegatorUnbondingDelegationsResponseAmino): _132.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _132.QueryDelegatorUnbondingDelegationsResponse): _132.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _132.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _132.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _132.QueryDelegatorUnbondingDelegationsResponse): _132.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _132.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _132.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorUnbondingDelegationsResponse): _132.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _132.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryRedelegationsRequest;
                fromPartial(object: Partial<_132.QueryRedelegationsRequest>): _132.QueryRedelegationsRequest;
                fromAmino(object: _132.QueryRedelegationsRequestAmino): _132.QueryRedelegationsRequest;
                toAmino(message: _132.QueryRedelegationsRequest): _132.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _132.QueryRedelegationsRequestAminoMsg): _132.QueryRedelegationsRequest;
                toAminoMsg(message: _132.QueryRedelegationsRequest): _132.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryRedelegationsRequestProtoMsg): _132.QueryRedelegationsRequest;
                toProto(message: _132.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryRedelegationsRequest): _132.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _132.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryRedelegationsResponse;
                fromPartial(object: Partial<_132.QueryRedelegationsResponse>): _132.QueryRedelegationsResponse;
                fromAmino(object: _132.QueryRedelegationsResponseAmino): _132.QueryRedelegationsResponse;
                toAmino(message: _132.QueryRedelegationsResponse): _132.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _132.QueryRedelegationsResponseAminoMsg): _132.QueryRedelegationsResponse;
                toAminoMsg(message: _132.QueryRedelegationsResponse): _132.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryRedelegationsResponseProtoMsg): _132.QueryRedelegationsResponse;
                toProto(message: _132.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryRedelegationsResponse): _132.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_132.QueryDelegatorValidatorsRequest>): _132.QueryDelegatorValidatorsRequest;
                fromAmino(object: _132.QueryDelegatorValidatorsRequestAmino): _132.QueryDelegatorValidatorsRequest;
                toAmino(message: _132.QueryDelegatorValidatorsRequest): _132.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _132.QueryDelegatorValidatorsRequestAminoMsg): _132.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _132.QueryDelegatorValidatorsRequest): _132.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorValidatorsRequestProtoMsg): _132.QueryDelegatorValidatorsRequest;
                toProto(message: _132.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorValidatorsRequest): _132.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_132.QueryDelegatorValidatorsResponse>): _132.QueryDelegatorValidatorsResponse;
                fromAmino(object: _132.QueryDelegatorValidatorsResponseAmino): _132.QueryDelegatorValidatorsResponse;
                toAmino(message: _132.QueryDelegatorValidatorsResponse): _132.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _132.QueryDelegatorValidatorsResponseAminoMsg): _132.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _132.QueryDelegatorValidatorsResponse): _132.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorValidatorsResponseProtoMsg): _132.QueryDelegatorValidatorsResponse;
                toProto(message: _132.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorValidatorsResponse): _132.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_132.QueryDelegatorValidatorRequest>): _132.QueryDelegatorValidatorRequest;
                fromAmino(object: _132.QueryDelegatorValidatorRequestAmino): _132.QueryDelegatorValidatorRequest;
                toAmino(message: _132.QueryDelegatorValidatorRequest): _132.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _132.QueryDelegatorValidatorRequestAminoMsg): _132.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _132.QueryDelegatorValidatorRequest): _132.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorValidatorRequestProtoMsg): _132.QueryDelegatorValidatorRequest;
                toProto(message: _132.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorValidatorRequest): _132.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_132.QueryDelegatorValidatorResponse>): _132.QueryDelegatorValidatorResponse;
                fromAmino(object: _132.QueryDelegatorValidatorResponseAmino): _132.QueryDelegatorValidatorResponse;
                toAmino(message: _132.QueryDelegatorValidatorResponse): _132.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _132.QueryDelegatorValidatorResponseAminoMsg): _132.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _132.QueryDelegatorValidatorResponse): _132.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorValidatorResponseProtoMsg): _132.QueryDelegatorValidatorResponse;
                toProto(message: _132.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorValidatorResponse): _132.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _132.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_132.QueryHistoricalInfoRequest>): _132.QueryHistoricalInfoRequest;
                fromAmino(object: _132.QueryHistoricalInfoRequestAmino): _132.QueryHistoricalInfoRequest;
                toAmino(message: _132.QueryHistoricalInfoRequest): _132.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _132.QueryHistoricalInfoRequestAminoMsg): _132.QueryHistoricalInfoRequest;
                toAminoMsg(message: _132.QueryHistoricalInfoRequest): _132.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _132.QueryHistoricalInfoRequestProtoMsg): _132.QueryHistoricalInfoRequest;
                toProto(message: _132.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _132.QueryHistoricalInfoRequest): _132.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _132.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_132.QueryHistoricalInfoResponse>): _132.QueryHistoricalInfoResponse;
                fromAmino(object: _132.QueryHistoricalInfoResponseAmino): _132.QueryHistoricalInfoResponse;
                toAmino(message: _132.QueryHistoricalInfoResponse): _132.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _132.QueryHistoricalInfoResponseAminoMsg): _132.QueryHistoricalInfoResponse;
                toAminoMsg(message: _132.QueryHistoricalInfoResponse): _132.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _132.QueryHistoricalInfoResponseProtoMsg): _132.QueryHistoricalInfoResponse;
                toProto(message: _132.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _132.QueryHistoricalInfoResponse): _132.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _132.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _132.QueryPoolRequest;
                fromPartial(_: Partial<_132.QueryPoolRequest>): _132.QueryPoolRequest;
                fromAmino(_: _132.QueryPoolRequestAmino): _132.QueryPoolRequest;
                toAmino(_: _132.QueryPoolRequest): _132.QueryPoolRequestAmino;
                fromAminoMsg(object: _132.QueryPoolRequestAminoMsg): _132.QueryPoolRequest;
                toAminoMsg(message: _132.QueryPoolRequest): _132.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _132.QueryPoolRequestProtoMsg): _132.QueryPoolRequest;
                toProto(message: _132.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _132.QueryPoolRequest): _132.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _132.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryPoolResponse;
                fromPartial(object: Partial<_132.QueryPoolResponse>): _132.QueryPoolResponse;
                fromAmino(object: _132.QueryPoolResponseAmino): _132.QueryPoolResponse;
                toAmino(message: _132.QueryPoolResponse): _132.QueryPoolResponseAmino;
                fromAminoMsg(object: _132.QueryPoolResponseAminoMsg): _132.QueryPoolResponse;
                toAminoMsg(message: _132.QueryPoolResponse): _132.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _132.QueryPoolResponseProtoMsg): _132.QueryPoolResponse;
                toProto(message: _132.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _132.QueryPoolResponse): _132.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _132.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _132.QueryParamsRequest;
                fromPartial(_: Partial<_132.QueryParamsRequest>): _132.QueryParamsRequest;
                fromAmino(_: _132.QueryParamsRequestAmino): _132.QueryParamsRequest;
                toAmino(_: _132.QueryParamsRequest): _132.QueryParamsRequestAmino;
                fromAminoMsg(object: _132.QueryParamsRequestAminoMsg): _132.QueryParamsRequest;
                toAminoMsg(message: _132.QueryParamsRequest): _132.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryParamsRequestProtoMsg): _132.QueryParamsRequest;
                toProto(message: _132.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryParamsRequest): _132.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _132.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryParamsResponse;
                fromPartial(object: Partial<_132.QueryParamsResponse>): _132.QueryParamsResponse;
                fromAmino(object: _132.QueryParamsResponseAmino): _132.QueryParamsResponse;
                toAmino(message: _132.QueryParamsResponse): _132.QueryParamsResponseAmino;
                fromAminoMsg(object: _132.QueryParamsResponseAminoMsg): _132.QueryParamsResponse;
                toAminoMsg(message: _132.QueryParamsResponse): _132.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryParamsResponseProtoMsg): _132.QueryParamsResponse;
                toProto(message: _132.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryParamsResponse): _132.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _131.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.GenesisState;
                fromPartial(object: Partial<_131.GenesisState>): _131.GenesisState;
                fromAmino(object: _131.GenesisStateAmino): _131.GenesisState;
                toAmino(message: _131.GenesisState): _131.GenesisStateAmino;
                fromAminoMsg(object: _131.GenesisStateAminoMsg): _131.GenesisState;
                toAminoMsg(message: _131.GenesisState): _131.GenesisStateAminoMsg;
                fromProtoMsg(message: _131.GenesisStateProtoMsg): _131.GenesisState;
                toProto(message: _131.GenesisState): Uint8Array;
                toProtoMsg(message: _131.GenesisState): _131.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _131.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.LastValidatorPower;
                fromPartial(object: Partial<_131.LastValidatorPower>): _131.LastValidatorPower;
                fromAmino(object: _131.LastValidatorPowerAmino): _131.LastValidatorPower;
                toAmino(message: _131.LastValidatorPower): _131.LastValidatorPowerAmino;
                fromAminoMsg(object: _131.LastValidatorPowerAminoMsg): _131.LastValidatorPower;
                toAminoMsg(message: _131.LastValidatorPower): _131.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _131.LastValidatorPowerProtoMsg): _131.LastValidatorPower;
                toProto(message: _131.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _131.LastValidatorPower): _131.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _130.AuthorizationType;
            authorizationTypeToJSON(object: _130.AuthorizationType): string;
            AuthorizationType: typeof _130.AuthorizationType;
            AuthorizationTypeSDKType: typeof _130.AuthorizationType;
            AuthorizationTypeAmino: typeof _130.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _130.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.StakeAuthorization;
                fromPartial(object: Partial<_130.StakeAuthorization>): _130.StakeAuthorization;
                fromAmino(object: _130.StakeAuthorizationAmino): _130.StakeAuthorization;
                toAmino(message: _130.StakeAuthorization): _130.StakeAuthorizationAmino;
                fromAminoMsg(object: _130.StakeAuthorizationAminoMsg): _130.StakeAuthorization;
                toAminoMsg(message: _130.StakeAuthorization): _130.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _130.StakeAuthorizationProtoMsg): _130.StakeAuthorization;
                toProto(message: _130.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _130.StakeAuthorization): _130.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _130.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.StakeAuthorization_Validators;
                fromPartial(object: Partial<_130.StakeAuthorization_Validators>): _130.StakeAuthorization_Validators;
                fromAmino(object: _130.StakeAuthorization_ValidatorsAmino): _130.StakeAuthorization_Validators;
                toAmino(message: _130.StakeAuthorization_Validators): _130.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _130.StakeAuthorization_ValidatorsAminoMsg): _130.StakeAuthorization_Validators;
                toAminoMsg(message: _130.StakeAuthorization_Validators): _130.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _130.StakeAuthorization_ValidatorsProtoMsg): _130.StakeAuthorization_Validators;
                toProto(message: _130.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _130.StakeAuthorization_Validators): _130.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _135.SignMode;
                signModeToJSON(object: _135.SignMode): string;
                SignMode: typeof _135.SignMode;
                SignModeSDKType: typeof _135.SignMode;
                SignModeAmino: typeof _135.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _135.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.SignatureDescriptors;
                    fromPartial(object: Partial<_135.SignatureDescriptors>): _135.SignatureDescriptors;
                    fromAmino(object: _135.SignatureDescriptorsAmino): _135.SignatureDescriptors;
                    toAmino(message: _135.SignatureDescriptors): _135.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _135.SignatureDescriptorsAminoMsg): _135.SignatureDescriptors;
                    toAminoMsg(message: _135.SignatureDescriptors): _135.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _135.SignatureDescriptorsProtoMsg): _135.SignatureDescriptors;
                    toProto(message: _135.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _135.SignatureDescriptors): _135.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _135.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.SignatureDescriptor;
                    fromPartial(object: Partial<_135.SignatureDescriptor>): _135.SignatureDescriptor;
                    fromAmino(object: _135.SignatureDescriptorAmino): _135.SignatureDescriptor;
                    toAmino(message: _135.SignatureDescriptor): _135.SignatureDescriptorAmino;
                    fromAminoMsg(object: _135.SignatureDescriptorAminoMsg): _135.SignatureDescriptor;
                    toAminoMsg(message: _135.SignatureDescriptor): _135.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _135.SignatureDescriptorProtoMsg): _135.SignatureDescriptor;
                    toProto(message: _135.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _135.SignatureDescriptor): _135.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _135.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_135.SignatureDescriptor_Data>): _135.SignatureDescriptor_Data;
                    fromAmino(object: _135.SignatureDescriptor_DataAmino): _135.SignatureDescriptor_Data;
                    toAmino(message: _135.SignatureDescriptor_Data): _135.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _135.SignatureDescriptor_DataAminoMsg): _135.SignatureDescriptor_Data;
                    toAminoMsg(message: _135.SignatureDescriptor_Data): _135.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _135.SignatureDescriptor_DataProtoMsg): _135.SignatureDescriptor_Data;
                    toProto(message: _135.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _135.SignatureDescriptor_Data): _135.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _135.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_135.SignatureDescriptor_Data_Single>): _135.SignatureDescriptor_Data_Single;
                    fromAmino(object: _135.SignatureDescriptor_Data_SingleAmino): _135.SignatureDescriptor_Data_Single;
                    toAmino(message: _135.SignatureDescriptor_Data_Single): _135.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _135.SignatureDescriptor_Data_SingleAminoMsg): _135.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _135.SignatureDescriptor_Data_Single): _135.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _135.SignatureDescriptor_Data_SingleProtoMsg): _135.SignatureDescriptor_Data_Single;
                    toProto(message: _135.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _135.SignatureDescriptor_Data_Single): _135.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _135.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _135.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_135.SignatureDescriptor_Data_Multi>): _135.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _135.SignatureDescriptor_Data_MultiAmino): _135.SignatureDescriptor_Data_Multi;
                    toAmino(message: _135.SignatureDescriptor_Data_Multi): _135.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _135.SignatureDescriptor_Data_MultiAminoMsg): _135.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _135.SignatureDescriptor_Data_Multi): _135.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _135.SignatureDescriptor_Data_MultiProtoMsg): _135.SignatureDescriptor_Data_Multi;
                    toProto(message: _135.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _135.SignatureDescriptor_Data_Multi): _135.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _245.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _136.SimulateRequest): Promise<_136.SimulateResponse>;
                getTx(request: _136.GetTxRequest): Promise<_136.GetTxResponse>;
                broadcastTx(request: _136.BroadcastTxRequest): Promise<_136.BroadcastTxResponse>;
                getTxsEvent(request: _136.GetTxsEventRequest): Promise<_136.GetTxsEventResponse>;
                getBlockWithTxs(request: _136.GetBlockWithTxsRequest): Promise<_136.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _230.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _137.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.Tx;
                fromPartial(object: Partial<_137.Tx>): _137.Tx;
                fromAmino(object: _137.TxAmino): _137.Tx;
                toAmino(message: _137.Tx): _137.TxAmino;
                fromAminoMsg(object: _137.TxAminoMsg): _137.Tx;
                toAminoMsg(message: _137.Tx): _137.TxAminoMsg;
                fromProtoMsg(message: _137.TxProtoMsg): _137.Tx;
                toProto(message: _137.Tx): Uint8Array;
                toProtoMsg(message: _137.Tx): _137.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _137.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.TxRaw;
                fromPartial(object: Partial<_137.TxRaw>): _137.TxRaw;
                fromAmino(object: _137.TxRawAmino): _137.TxRaw;
                toAmino(message: _137.TxRaw): _137.TxRawAmino;
                fromAminoMsg(object: _137.TxRawAminoMsg): _137.TxRaw;
                toAminoMsg(message: _137.TxRaw): _137.TxRawAminoMsg;
                fromProtoMsg(message: _137.TxRawProtoMsg): _137.TxRaw;
                toProto(message: _137.TxRaw): Uint8Array;
                toProtoMsg(message: _137.TxRaw): _137.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _137.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.SignDoc;
                fromPartial(object: Partial<_137.SignDoc>): _137.SignDoc;
                fromAmino(object: _137.SignDocAmino): _137.SignDoc;
                toAmino(message: _137.SignDoc): _137.SignDocAmino;
                fromAminoMsg(object: _137.SignDocAminoMsg): _137.SignDoc;
                toAminoMsg(message: _137.SignDoc): _137.SignDocAminoMsg;
                fromProtoMsg(message: _137.SignDocProtoMsg): _137.SignDoc;
                toProto(message: _137.SignDoc): Uint8Array;
                toProtoMsg(message: _137.SignDoc): _137.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _137.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.TxBody;
                fromPartial(object: Partial<_137.TxBody>): _137.TxBody;
                fromAmino(object: _137.TxBodyAmino): _137.TxBody;
                toAmino(message: _137.TxBody): _137.TxBodyAmino;
                fromAminoMsg(object: _137.TxBodyAminoMsg): _137.TxBody;
                toAminoMsg(message: _137.TxBody): _137.TxBodyAminoMsg;
                fromProtoMsg(message: _137.TxBodyProtoMsg): _137.TxBody;
                toProto(message: _137.TxBody): Uint8Array;
                toProtoMsg(message: _137.TxBody): _137.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _137.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.AuthInfo;
                fromPartial(object: Partial<_137.AuthInfo>): _137.AuthInfo;
                fromAmino(object: _137.AuthInfoAmino): _137.AuthInfo;
                toAmino(message: _137.AuthInfo): _137.AuthInfoAmino;
                fromAminoMsg(object: _137.AuthInfoAminoMsg): _137.AuthInfo;
                toAminoMsg(message: _137.AuthInfo): _137.AuthInfoAminoMsg;
                fromProtoMsg(message: _137.AuthInfoProtoMsg): _137.AuthInfo;
                toProto(message: _137.AuthInfo): Uint8Array;
                toProtoMsg(message: _137.AuthInfo): _137.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _137.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.SignerInfo;
                fromPartial(object: Partial<_137.SignerInfo>): _137.SignerInfo;
                fromAmino(object: _137.SignerInfoAmino): _137.SignerInfo;
                toAmino(message: _137.SignerInfo): _137.SignerInfoAmino;
                fromAminoMsg(object: _137.SignerInfoAminoMsg): _137.SignerInfo;
                toAminoMsg(message: _137.SignerInfo): _137.SignerInfoAminoMsg;
                fromProtoMsg(message: _137.SignerInfoProtoMsg): _137.SignerInfo;
                toProto(message: _137.SignerInfo): Uint8Array;
                toProtoMsg(message: _137.SignerInfo): _137.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _137.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.ModeInfo;
                fromPartial(object: Partial<_137.ModeInfo>): _137.ModeInfo;
                fromAmino(object: _137.ModeInfoAmino): _137.ModeInfo;
                toAmino(message: _137.ModeInfo): _137.ModeInfoAmino;
                fromAminoMsg(object: _137.ModeInfoAminoMsg): _137.ModeInfo;
                toAminoMsg(message: _137.ModeInfo): _137.ModeInfoAminoMsg;
                fromProtoMsg(message: _137.ModeInfoProtoMsg): _137.ModeInfo;
                toProto(message: _137.ModeInfo): Uint8Array;
                toProtoMsg(message: _137.ModeInfo): _137.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _137.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.ModeInfo_Single;
                fromPartial(object: Partial<_137.ModeInfo_Single>): _137.ModeInfo_Single;
                fromAmino(object: _137.ModeInfo_SingleAmino): _137.ModeInfo_Single;
                toAmino(message: _137.ModeInfo_Single): _137.ModeInfo_SingleAmino;
                fromAminoMsg(object: _137.ModeInfo_SingleAminoMsg): _137.ModeInfo_Single;
                toAminoMsg(message: _137.ModeInfo_Single): _137.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _137.ModeInfo_SingleProtoMsg): _137.ModeInfo_Single;
                toProto(message: _137.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _137.ModeInfo_Single): _137.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _137.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.ModeInfo_Multi;
                fromPartial(object: Partial<_137.ModeInfo_Multi>): _137.ModeInfo_Multi;
                fromAmino(object: _137.ModeInfo_MultiAmino): _137.ModeInfo_Multi;
                toAmino(message: _137.ModeInfo_Multi): _137.ModeInfo_MultiAmino;
                fromAminoMsg(object: _137.ModeInfo_MultiAminoMsg): _137.ModeInfo_Multi;
                toAminoMsg(message: _137.ModeInfo_Multi): _137.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _137.ModeInfo_MultiProtoMsg): _137.ModeInfo_Multi;
                toProto(message: _137.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _137.ModeInfo_Multi): _137.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _137.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.Fee;
                fromPartial(object: Partial<_137.Fee>): _137.Fee;
                fromAmino(object: _137.FeeAmino): _137.Fee;
                toAmino(message: _137.Fee): _137.FeeAmino;
                fromAminoMsg(object: _137.FeeAminoMsg): _137.Fee;
                toAminoMsg(message: _137.Fee): _137.FeeAminoMsg;
                fromProtoMsg(message: _137.FeeProtoMsg): _137.Fee;
                toProto(message: _137.Fee): Uint8Array;
                toProtoMsg(message: _137.Fee): _137.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _136.OrderBy;
            orderByToJSON(object: _136.OrderBy): string;
            broadcastModeFromJSON(object: any): _136.BroadcastMode;
            broadcastModeToJSON(object: _136.BroadcastMode): string;
            OrderBy: typeof _136.OrderBy;
            OrderBySDKType: typeof _136.OrderBy;
            OrderByAmino: typeof _136.OrderBy;
            BroadcastMode: typeof _136.BroadcastMode;
            BroadcastModeSDKType: typeof _136.BroadcastMode;
            BroadcastModeAmino: typeof _136.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _136.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.GetTxsEventRequest;
                fromPartial(object: Partial<_136.GetTxsEventRequest>): _136.GetTxsEventRequest;
                fromAmino(object: _136.GetTxsEventRequestAmino): _136.GetTxsEventRequest;
                toAmino(message: _136.GetTxsEventRequest): _136.GetTxsEventRequestAmino;
                fromAminoMsg(object: _136.GetTxsEventRequestAminoMsg): _136.GetTxsEventRequest;
                toAminoMsg(message: _136.GetTxsEventRequest): _136.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _136.GetTxsEventRequestProtoMsg): _136.GetTxsEventRequest;
                toProto(message: _136.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _136.GetTxsEventRequest): _136.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _136.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.GetTxsEventResponse;
                fromPartial(object: Partial<_136.GetTxsEventResponse>): _136.GetTxsEventResponse;
                fromAmino(object: _136.GetTxsEventResponseAmino): _136.GetTxsEventResponse;
                toAmino(message: _136.GetTxsEventResponse): _136.GetTxsEventResponseAmino;
                fromAminoMsg(object: _136.GetTxsEventResponseAminoMsg): _136.GetTxsEventResponse;
                toAminoMsg(message: _136.GetTxsEventResponse): _136.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _136.GetTxsEventResponseProtoMsg): _136.GetTxsEventResponse;
                toProto(message: _136.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _136.GetTxsEventResponse): _136.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _136.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.BroadcastTxRequest;
                fromPartial(object: Partial<_136.BroadcastTxRequest>): _136.BroadcastTxRequest;
                fromAmino(object: _136.BroadcastTxRequestAmino): _136.BroadcastTxRequest;
                toAmino(message: _136.BroadcastTxRequest): _136.BroadcastTxRequestAmino;
                fromAminoMsg(object: _136.BroadcastTxRequestAminoMsg): _136.BroadcastTxRequest;
                toAminoMsg(message: _136.BroadcastTxRequest): _136.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _136.BroadcastTxRequestProtoMsg): _136.BroadcastTxRequest;
                toProto(message: _136.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _136.BroadcastTxRequest): _136.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _136.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.BroadcastTxResponse;
                fromPartial(object: Partial<_136.BroadcastTxResponse>): _136.BroadcastTxResponse;
                fromAmino(object: _136.BroadcastTxResponseAmino): _136.BroadcastTxResponse;
                toAmino(message: _136.BroadcastTxResponse): _136.BroadcastTxResponseAmino;
                fromAminoMsg(object: _136.BroadcastTxResponseAminoMsg): _136.BroadcastTxResponse;
                toAminoMsg(message: _136.BroadcastTxResponse): _136.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _136.BroadcastTxResponseProtoMsg): _136.BroadcastTxResponse;
                toProto(message: _136.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _136.BroadcastTxResponse): _136.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _136.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.SimulateRequest;
                fromPartial(object: Partial<_136.SimulateRequest>): _136.SimulateRequest;
                fromAmino(object: _136.SimulateRequestAmino): _136.SimulateRequest;
                toAmino(message: _136.SimulateRequest): _136.SimulateRequestAmino;
                fromAminoMsg(object: _136.SimulateRequestAminoMsg): _136.SimulateRequest;
                toAminoMsg(message: _136.SimulateRequest): _136.SimulateRequestAminoMsg;
                fromProtoMsg(message: _136.SimulateRequestProtoMsg): _136.SimulateRequest;
                toProto(message: _136.SimulateRequest): Uint8Array;
                toProtoMsg(message: _136.SimulateRequest): _136.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _136.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.SimulateResponse;
                fromPartial(object: Partial<_136.SimulateResponse>): _136.SimulateResponse;
                fromAmino(object: _136.SimulateResponseAmino): _136.SimulateResponse;
                toAmino(message: _136.SimulateResponse): _136.SimulateResponseAmino;
                fromAminoMsg(object: _136.SimulateResponseAminoMsg): _136.SimulateResponse;
                toAminoMsg(message: _136.SimulateResponse): _136.SimulateResponseAminoMsg;
                fromProtoMsg(message: _136.SimulateResponseProtoMsg): _136.SimulateResponse;
                toProto(message: _136.SimulateResponse): Uint8Array;
                toProtoMsg(message: _136.SimulateResponse): _136.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _136.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.GetTxRequest;
                fromPartial(object: Partial<_136.GetTxRequest>): _136.GetTxRequest;
                fromAmino(object: _136.GetTxRequestAmino): _136.GetTxRequest;
                toAmino(message: _136.GetTxRequest): _136.GetTxRequestAmino;
                fromAminoMsg(object: _136.GetTxRequestAminoMsg): _136.GetTxRequest;
                toAminoMsg(message: _136.GetTxRequest): _136.GetTxRequestAminoMsg;
                fromProtoMsg(message: _136.GetTxRequestProtoMsg): _136.GetTxRequest;
                toProto(message: _136.GetTxRequest): Uint8Array;
                toProtoMsg(message: _136.GetTxRequest): _136.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _136.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.GetTxResponse;
                fromPartial(object: Partial<_136.GetTxResponse>): _136.GetTxResponse;
                fromAmino(object: _136.GetTxResponseAmino): _136.GetTxResponse;
                toAmino(message: _136.GetTxResponse): _136.GetTxResponseAmino;
                fromAminoMsg(object: _136.GetTxResponseAminoMsg): _136.GetTxResponse;
                toAminoMsg(message: _136.GetTxResponse): _136.GetTxResponseAminoMsg;
                fromProtoMsg(message: _136.GetTxResponseProtoMsg): _136.GetTxResponse;
                toProto(message: _136.GetTxResponse): Uint8Array;
                toProtoMsg(message: _136.GetTxResponse): _136.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _136.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_136.GetBlockWithTxsRequest>): _136.GetBlockWithTxsRequest;
                fromAmino(object: _136.GetBlockWithTxsRequestAmino): _136.GetBlockWithTxsRequest;
                toAmino(message: _136.GetBlockWithTxsRequest): _136.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _136.GetBlockWithTxsRequestAminoMsg): _136.GetBlockWithTxsRequest;
                toAminoMsg(message: _136.GetBlockWithTxsRequest): _136.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _136.GetBlockWithTxsRequestProtoMsg): _136.GetBlockWithTxsRequest;
                toProto(message: _136.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _136.GetBlockWithTxsRequest): _136.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _136.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_136.GetBlockWithTxsResponse>): _136.GetBlockWithTxsResponse;
                fromAmino(object: _136.GetBlockWithTxsResponseAmino): _136.GetBlockWithTxsResponse;
                toAmino(message: _136.GetBlockWithTxsResponse): _136.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _136.GetBlockWithTxsResponseAminoMsg): _136.GetBlockWithTxsResponse;
                toAminoMsg(message: _136.GetBlockWithTxsResponse): _136.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _136.GetBlockWithTxsResponseProtoMsg): _136.GetBlockWithTxsResponse;
                toProto(message: _136.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _136.GetBlockWithTxsResponse): _136.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _246.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _138.QueryCurrentPlanRequest): Promise<_138.QueryCurrentPlanResponse>;
                appliedPlan(request: _138.QueryAppliedPlanRequest): Promise<_138.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _138.QueryUpgradedConsensusStateRequest): Promise<_138.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _138.QueryModuleVersionsRequest): Promise<_138.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _231.LCDQueryClient;
            Plan: {
                typeUrl: string;
                encode(message: _139.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.Plan;
                fromPartial(object: Partial<_139.Plan>): _139.Plan;
                fromAmino(object: _139.PlanAmino): _139.Plan;
                toAmino(message: _139.Plan): _139.PlanAmino;
                fromAminoMsg(object: _139.PlanAminoMsg): _139.Plan;
                toAminoMsg(message: _139.Plan): _139.PlanAminoMsg;
                fromProtoMsg(message: _139.PlanProtoMsg): _139.Plan;
                toProto(message: _139.Plan): Uint8Array;
                toProtoMsg(message: _139.Plan): _139.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _139.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_139.SoftwareUpgradeProposal>): _139.SoftwareUpgradeProposal;
                fromAmino(object: _139.SoftwareUpgradeProposalAmino): _139.SoftwareUpgradeProposal;
                toAmino(message: _139.SoftwareUpgradeProposal): _139.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _139.SoftwareUpgradeProposalAminoMsg): _139.SoftwareUpgradeProposal;
                toAminoMsg(message: _139.SoftwareUpgradeProposal): _139.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _139.SoftwareUpgradeProposalProtoMsg): _139.SoftwareUpgradeProposal;
                toProto(message: _139.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _139.SoftwareUpgradeProposal): _139.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _139.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_139.CancelSoftwareUpgradeProposal>): _139.CancelSoftwareUpgradeProposal;
                fromAmino(object: _139.CancelSoftwareUpgradeProposalAmino): _139.CancelSoftwareUpgradeProposal;
                toAmino(message: _139.CancelSoftwareUpgradeProposal): _139.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _139.CancelSoftwareUpgradeProposalAminoMsg): _139.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _139.CancelSoftwareUpgradeProposal): _139.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _139.CancelSoftwareUpgradeProposalProtoMsg): _139.CancelSoftwareUpgradeProposal;
                toProto(message: _139.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _139.CancelSoftwareUpgradeProposal): _139.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _139.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.ModuleVersion;
                fromPartial(object: Partial<_139.ModuleVersion>): _139.ModuleVersion;
                fromAmino(object: _139.ModuleVersionAmino): _139.ModuleVersion;
                toAmino(message: _139.ModuleVersion): _139.ModuleVersionAmino;
                fromAminoMsg(object: _139.ModuleVersionAminoMsg): _139.ModuleVersion;
                toAminoMsg(message: _139.ModuleVersion): _139.ModuleVersionAminoMsg;
                fromProtoMsg(message: _139.ModuleVersionProtoMsg): _139.ModuleVersion;
                toProto(message: _139.ModuleVersion): Uint8Array;
                toProtoMsg(message: _139.ModuleVersion): _139.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _138.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _138.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_138.QueryCurrentPlanRequest>): _138.QueryCurrentPlanRequest;
                fromAmino(_: _138.QueryCurrentPlanRequestAmino): _138.QueryCurrentPlanRequest;
                toAmino(_: _138.QueryCurrentPlanRequest): _138.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _138.QueryCurrentPlanRequestAminoMsg): _138.QueryCurrentPlanRequest;
                toAminoMsg(message: _138.QueryCurrentPlanRequest): _138.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _138.QueryCurrentPlanRequestProtoMsg): _138.QueryCurrentPlanRequest;
                toProto(message: _138.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _138.QueryCurrentPlanRequest): _138.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _138.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_138.QueryCurrentPlanResponse>): _138.QueryCurrentPlanResponse;
                fromAmino(object: _138.QueryCurrentPlanResponseAmino): _138.QueryCurrentPlanResponse;
                toAmino(message: _138.QueryCurrentPlanResponse): _138.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _138.QueryCurrentPlanResponseAminoMsg): _138.QueryCurrentPlanResponse;
                toAminoMsg(message: _138.QueryCurrentPlanResponse): _138.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _138.QueryCurrentPlanResponseProtoMsg): _138.QueryCurrentPlanResponse;
                toProto(message: _138.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _138.QueryCurrentPlanResponse): _138.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _138.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_138.QueryAppliedPlanRequest>): _138.QueryAppliedPlanRequest;
                fromAmino(object: _138.QueryAppliedPlanRequestAmino): _138.QueryAppliedPlanRequest;
                toAmino(message: _138.QueryAppliedPlanRequest): _138.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _138.QueryAppliedPlanRequestAminoMsg): _138.QueryAppliedPlanRequest;
                toAminoMsg(message: _138.QueryAppliedPlanRequest): _138.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _138.QueryAppliedPlanRequestProtoMsg): _138.QueryAppliedPlanRequest;
                toProto(message: _138.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _138.QueryAppliedPlanRequest): _138.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _138.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_138.QueryAppliedPlanResponse>): _138.QueryAppliedPlanResponse;
                fromAmino(object: _138.QueryAppliedPlanResponseAmino): _138.QueryAppliedPlanResponse;
                toAmino(message: _138.QueryAppliedPlanResponse): _138.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _138.QueryAppliedPlanResponseAminoMsg): _138.QueryAppliedPlanResponse;
                toAminoMsg(message: _138.QueryAppliedPlanResponse): _138.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _138.QueryAppliedPlanResponseProtoMsg): _138.QueryAppliedPlanResponse;
                toProto(message: _138.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _138.QueryAppliedPlanResponse): _138.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _138.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_138.QueryUpgradedConsensusStateRequest>): _138.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _138.QueryUpgradedConsensusStateRequestAmino): _138.QueryUpgradedConsensusStateRequest;
                toAmino(message: _138.QueryUpgradedConsensusStateRequest): _138.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _138.QueryUpgradedConsensusStateRequestAminoMsg): _138.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _138.QueryUpgradedConsensusStateRequest): _138.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _138.QueryUpgradedConsensusStateRequestProtoMsg): _138.QueryUpgradedConsensusStateRequest;
                toProto(message: _138.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _138.QueryUpgradedConsensusStateRequest): _138.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _138.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_138.QueryUpgradedConsensusStateResponse>): _138.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _138.QueryUpgradedConsensusStateResponseAmino): _138.QueryUpgradedConsensusStateResponse;
                toAmino(message: _138.QueryUpgradedConsensusStateResponse): _138.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _138.QueryUpgradedConsensusStateResponseAminoMsg): _138.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _138.QueryUpgradedConsensusStateResponse): _138.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _138.QueryUpgradedConsensusStateResponseProtoMsg): _138.QueryUpgradedConsensusStateResponse;
                toProto(message: _138.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _138.QueryUpgradedConsensusStateResponse): _138.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _138.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_138.QueryModuleVersionsRequest>): _138.QueryModuleVersionsRequest;
                fromAmino(object: _138.QueryModuleVersionsRequestAmino): _138.QueryModuleVersionsRequest;
                toAmino(message: _138.QueryModuleVersionsRequest): _138.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _138.QueryModuleVersionsRequestAminoMsg): _138.QueryModuleVersionsRequest;
                toAminoMsg(message: _138.QueryModuleVersionsRequest): _138.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _138.QueryModuleVersionsRequestProtoMsg): _138.QueryModuleVersionsRequest;
                toProto(message: _138.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _138.QueryModuleVersionsRequest): _138.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _138.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_138.QueryModuleVersionsResponse>): _138.QueryModuleVersionsResponse;
                fromAmino(object: _138.QueryModuleVersionsResponseAmino): _138.QueryModuleVersionsResponse;
                toAmino(message: _138.QueryModuleVersionsResponse): _138.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _138.QueryModuleVersionsResponseAminoMsg): _138.QueryModuleVersionsResponse;
                toAminoMsg(message: _138.QueryModuleVersionsResponse): _138.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _138.QueryModuleVersionsResponseProtoMsg): _138.QueryModuleVersionsResponse;
                toProto(message: _138.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _138.QueryModuleVersionsResponse): _138.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _256.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _140.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _140.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _140.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _140.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _140.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _140.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _140.MsgCreateVestingAccount) => _140.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _140.MsgCreateVestingAccountAmino) => _140.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _141.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.BaseVestingAccount;
                fromPartial(object: Partial<_141.BaseVestingAccount>): _141.BaseVestingAccount;
                fromAmino(object: _141.BaseVestingAccountAmino): _141.BaseVestingAccount;
                toAmino(message: _141.BaseVestingAccount): _141.BaseVestingAccountAmino;
                fromAminoMsg(object: _141.BaseVestingAccountAminoMsg): _141.BaseVestingAccount;
                toAminoMsg(message: _141.BaseVestingAccount): _141.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _141.BaseVestingAccountProtoMsg): _141.BaseVestingAccount;
                toProto(message: _141.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _141.BaseVestingAccount): _141.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _141.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.ContinuousVestingAccount;
                fromPartial(object: Partial<_141.ContinuousVestingAccount>): _141.ContinuousVestingAccount;
                fromAmino(object: _141.ContinuousVestingAccountAmino): _141.ContinuousVestingAccount;
                toAmino(message: _141.ContinuousVestingAccount): _141.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _141.ContinuousVestingAccountAminoMsg): _141.ContinuousVestingAccount;
                toAminoMsg(message: _141.ContinuousVestingAccount): _141.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _141.ContinuousVestingAccountProtoMsg): _141.ContinuousVestingAccount;
                toProto(message: _141.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _141.ContinuousVestingAccount): _141.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _141.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.DelayedVestingAccount;
                fromPartial(object: Partial<_141.DelayedVestingAccount>): _141.DelayedVestingAccount;
                fromAmino(object: _141.DelayedVestingAccountAmino): _141.DelayedVestingAccount;
                toAmino(message: _141.DelayedVestingAccount): _141.DelayedVestingAccountAmino;
                fromAminoMsg(object: _141.DelayedVestingAccountAminoMsg): _141.DelayedVestingAccount;
                toAminoMsg(message: _141.DelayedVestingAccount): _141.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _141.DelayedVestingAccountProtoMsg): _141.DelayedVestingAccount;
                toProto(message: _141.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _141.DelayedVestingAccount): _141.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _141.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.Period;
                fromPartial(object: Partial<_141.Period>): _141.Period;
                fromAmino(object: _141.PeriodAmino): _141.Period;
                toAmino(message: _141.Period): _141.PeriodAmino;
                fromAminoMsg(object: _141.PeriodAminoMsg): _141.Period;
                toAminoMsg(message: _141.Period): _141.PeriodAminoMsg;
                fromProtoMsg(message: _141.PeriodProtoMsg): _141.Period;
                toProto(message: _141.Period): Uint8Array;
                toProtoMsg(message: _141.Period): _141.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _141.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.PeriodicVestingAccount;
                fromPartial(object: Partial<_141.PeriodicVestingAccount>): _141.PeriodicVestingAccount;
                fromAmino(object: _141.PeriodicVestingAccountAmino): _141.PeriodicVestingAccount;
                toAmino(message: _141.PeriodicVestingAccount): _141.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _141.PeriodicVestingAccountAminoMsg): _141.PeriodicVestingAccount;
                toAminoMsg(message: _141.PeriodicVestingAccount): _141.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _141.PeriodicVestingAccountProtoMsg): _141.PeriodicVestingAccount;
                toProto(message: _141.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _141.PeriodicVestingAccount): _141.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _141.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.PermanentLockedAccount;
                fromPartial(object: Partial<_141.PermanentLockedAccount>): _141.PermanentLockedAccount;
                fromAmino(object: _141.PermanentLockedAccountAmino): _141.PermanentLockedAccount;
                toAmino(message: _141.PermanentLockedAccount): _141.PermanentLockedAccountAmino;
                fromAminoMsg(object: _141.PermanentLockedAccountAminoMsg): _141.PermanentLockedAccount;
                toAminoMsg(message: _141.PermanentLockedAccount): _141.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _141.PermanentLockedAccountProtoMsg): _141.PermanentLockedAccount;
                toProto(message: _141.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _141.PermanentLockedAccount): _141.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _140.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.MsgCreateVestingAccount;
                fromPartial(object: Partial<_140.MsgCreateVestingAccount>): _140.MsgCreateVestingAccount;
                fromAmino(object: _140.MsgCreateVestingAccountAmino): _140.MsgCreateVestingAccount;
                toAmino(message: _140.MsgCreateVestingAccount): _140.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _140.MsgCreateVestingAccountAminoMsg): _140.MsgCreateVestingAccount;
                toAminoMsg(message: _140.MsgCreateVestingAccount): _140.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _140.MsgCreateVestingAccountProtoMsg): _140.MsgCreateVestingAccount;
                toProto(message: _140.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _140.MsgCreateVestingAccount): _140.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _140.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _140.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_140.MsgCreateVestingAccountResponse>): _140.MsgCreateVestingAccountResponse;
                fromAmino(_: _140.MsgCreateVestingAccountResponseAmino): _140.MsgCreateVestingAccountResponse;
                toAmino(_: _140.MsgCreateVestingAccountResponse): _140.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _140.MsgCreateVestingAccountResponseAminoMsg): _140.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _140.MsgCreateVestingAccountResponse): _140.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _140.MsgCreateVestingAccountResponseProtoMsg): _140.MsgCreateVestingAccountResponse;
                toProto(message: _140.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _140.MsgCreateVestingAccountResponse): _140.MsgCreateVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _247.MsgClientImpl;
                };
                bank: {
                    v1beta1: _248.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _249.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _250.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _251.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _252.MsgClientImpl;
                };
                gov: {
                    v1beta1: _253.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _254.MsgClientImpl;
                };
                staking: {
                    v1beta1: _255.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _256.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _74.QueryAccountsRequest): Promise<_74.QueryAccountsResponse>;
                        account(request: _74.QueryAccountRequest): Promise<_74.QueryAccountResponse>;
                        params(request?: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                        moduleAccountByName(request: _74.QueryModuleAccountByNameRequest): Promise<_74.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _78.QueryGrantsRequest): Promise<_78.QueryGrantsResponse>;
                        granterGrants(request: _78.QueryGranterGrantsRequest): Promise<_78.QueryGranterGrantsResponse>;
                        granteeGrants(request: _78.QueryGranteeGrantsRequest): Promise<_78.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _83.QueryBalanceRequest): Promise<_83.QueryBalanceResponse>;
                        allBalances(request: _83.QueryAllBalancesRequest): Promise<_83.QueryAllBalancesResponse>;
                        spendableBalances(request: _83.QuerySpendableBalancesRequest): Promise<_83.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _83.QueryTotalSupplyRequest): Promise<_83.QueryTotalSupplyResponse>;
                        supplyOf(request: _83.QuerySupplyOfRequest): Promise<_83.QuerySupplyOfResponse>;
                        params(request?: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                        denomMetadata(request: _83.QueryDenomMetadataRequest): Promise<_83.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _83.QueryDenomsMetadataRequest): Promise<_83.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _87.ConfigRequest): Promise<_87.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _94.GetNodeInfoRequest): Promise<_94.GetNodeInfoResponse>;
                            getSyncing(request?: _94.GetSyncingRequest): Promise<_94.GetSyncingResponse>;
                            getLatestBlock(request?: _94.GetLatestBlockRequest): Promise<_94.GetLatestBlockResponse>;
                            getBlockByHeight(request: _94.GetBlockByHeightRequest): Promise<_94.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _94.GetLatestValidatorSetRequest): Promise<_94.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _94.GetValidatorSetByHeightRequest): Promise<_94.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _106.QueryValidatorOutstandingRewardsRequest): Promise<_106.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _106.QueryValidatorCommissionRequest): Promise<_106.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _106.QueryValidatorSlashesRequest): Promise<_106.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _106.QueryDelegationRewardsRequest): Promise<_106.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _106.QueryDelegationTotalRewardsRequest): Promise<_106.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _106.QueryDelegatorValidatorsRequest): Promise<_106.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _106.QueryDelegatorWithdrawAddressRequest): Promise<_106.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _106.QueryCommunityPoolRequest): Promise<_106.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _110.QueryEvidenceRequest): Promise<_110.QueryEvidenceResponse>;
                        allEvidence(request?: _110.QueryAllEvidenceRequest): Promise<_110.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _114.QueryAllowanceRequest): Promise<_114.QueryAllowanceResponse>;
                        allowances(request: _114.QueryAllowancesRequest): Promise<_114.QueryAllowancesResponse>;
                        allowancesByGranter(request: _114.QueryAllowancesByGranterRequest): Promise<_114.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _119.QueryProposalRequest): Promise<_119.QueryProposalResponse>;
                        proposals(request: _119.QueryProposalsRequest): Promise<_119.QueryProposalsResponse>;
                        vote(request: _119.QueryVoteRequest): Promise<_119.QueryVoteResponse>;
                        votes(request: _119.QueryVotesRequest): Promise<_119.QueryVotesResponse>;
                        params(request: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                        deposit(request: _119.QueryDepositRequest): Promise<_119.QueryDepositResponse>;
                        deposits(request: _119.QueryDepositsRequest): Promise<_119.QueryDepositsResponse>;
                        tallyResult(request: _119.QueryTallyResultRequest): Promise<_119.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _123.QueryParamsRequest): Promise<_123.QueryParamsResponse>;
                        inflation(request?: _123.QueryInflationRequest): Promise<_123.QueryInflationResponse>;
                        annualProvisions(request?: _123.QueryAnnualProvisionsRequest): Promise<_123.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _125.QueryParamsRequest): Promise<_125.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _127.QueryParamsRequest): Promise<_127.QueryParamsResponse>;
                        signingInfo(request: _127.QuerySigningInfoRequest): Promise<_127.QuerySigningInfoResponse>;
                        signingInfos(request?: _127.QuerySigningInfosRequest): Promise<_127.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _132.QueryValidatorsRequest): Promise<_132.QueryValidatorsResponse>;
                        validator(request: _132.QueryValidatorRequest): Promise<_132.QueryValidatorResponse>;
                        validatorDelegations(request: _132.QueryValidatorDelegationsRequest): Promise<_132.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _132.QueryValidatorUnbondingDelegationsRequest): Promise<_132.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _132.QueryDelegationRequest): Promise<_132.QueryDelegationResponse>;
                        unbondingDelegation(request: _132.QueryUnbondingDelegationRequest): Promise<_132.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _132.QueryDelegatorDelegationsRequest): Promise<_132.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _132.QueryDelegatorUnbondingDelegationsRequest): Promise<_132.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _132.QueryRedelegationsRequest): Promise<_132.QueryRedelegationsResponse>;
                        delegatorValidators(request: _132.QueryDelegatorValidatorsRequest): Promise<_132.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _132.QueryDelegatorValidatorRequest): Promise<_132.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _132.QueryHistoricalInfoRequest): Promise<_132.QueryHistoricalInfoResponse>;
                        pool(request?: _132.QueryPoolRequest): Promise<_132.QueryPoolResponse>;
                        params(request?: _132.QueryParamsRequest): Promise<_132.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _136.SimulateRequest): Promise<_136.SimulateResponse>;
                        getTx(request: _136.GetTxRequest): Promise<_136.GetTxResponse>;
                        broadcastTx(request: _136.BroadcastTxRequest): Promise<_136.BroadcastTxResponse>;
                        getTxsEvent(request: _136.GetTxsEventRequest): Promise<_136.GetTxsEventResponse>;
                        getBlockWithTxs(request: _136.GetBlockWithTxsRequest): Promise<_136.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _138.QueryCurrentPlanRequest): Promise<_138.QueryCurrentPlanResponse>;
                        appliedPlan(request: _138.QueryAppliedPlanRequest): Promise<_138.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _138.QueryUpgradedConsensusStateRequest): Promise<_138.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _138.QueryModuleVersionsRequest): Promise<_138.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _217.LCDQueryClient;
                };
                authz: {
                    v1beta1: _218.LCDQueryClient;
                };
                bank: {
                    v1beta1: _219.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _220.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _221.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _222.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _223.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _224.LCDQueryClient;
                };
                gov: {
                    v1beta1: _225.LCDQueryClient;
                };
                mint: {
                    v1beta1: _226.LCDQueryClient;
                };
                params: {
                    v1beta1: _227.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _228.LCDQueryClient;
                };
                staking: {
                    v1beta1: _229.LCDQueryClient;
                };
                tx: {
                    v1beta1: _230.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _231.LCDQueryClient;
                };
            };
        }>;
    };
}
