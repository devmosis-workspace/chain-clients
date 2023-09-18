import * as _69 from "./auth/v1beta1/auth";
import * as _70 from "./auth/v1beta1/genesis";
import * as _71 from "./auth/v1beta1/query";
import * as _72 from "./authz/v1beta1/authz";
import * as _73 from "./authz/v1beta1/event";
import * as _74 from "./authz/v1beta1/genesis";
import * as _75 from "./authz/v1beta1/query";
import * as _76 from "./authz/v1beta1/tx";
import * as _77 from "./bank/v1beta1/authz";
import * as _78 from "./bank/v1beta1/bank";
import * as _79 from "./bank/v1beta1/genesis";
import * as _80 from "./bank/v1beta1/query";
import * as _81 from "./bank/v1beta1/tx";
import * as _82 from "./base/abci/v1beta1/abci";
import * as _83 from "./base/kv/v1beta1/kv";
import * as _84 from "./base/node/v1beta1/query";
import * as _85 from "./base/query/v1beta1/pagination";
import * as _86 from "./base/reflection/v1beta1/reflection";
import * as _87 from "./base/reflection/v2alpha1/reflection";
import * as _88 from "./base/snapshots/v1beta1/snapshot";
import * as _89 from "./base/store/v1beta1/commit_info";
import * as _90 from "./base/store/v1beta1/listening";
import * as _91 from "./base/tendermint/v1beta1/query";
import * as _92 from "./base/v1beta1/coin";
import * as _93 from "./capability/v1beta1/capability";
import * as _94 from "./capability/v1beta1/genesis";
import * as _95 from "./crisis/v1beta1/genesis";
import * as _96 from "./crisis/v1beta1/tx";
import * as _97 from "./crypto/ed25519/keys";
import * as _98 from "./crypto/multisig/keys";
import * as _99 from "./crypto/secp256k1/keys";
import * as _100 from "./crypto/secp256r1/keys";
import * as _101 from "./distribution/v1beta1/distribution";
import * as _102 from "./distribution/v1beta1/genesis";
import * as _103 from "./distribution/v1beta1/query";
import * as _104 from "./distribution/v1beta1/tx";
import * as _105 from "./evidence/v1beta1/evidence";
import * as _106 from "./evidence/v1beta1/genesis";
import * as _107 from "./evidence/v1beta1/query";
import * as _108 from "./evidence/v1beta1/tx";
import * as _109 from "./feegrant/v1beta1/feegrant";
import * as _110 from "./feegrant/v1beta1/genesis";
import * as _111 from "./feegrant/v1beta1/query";
import * as _112 from "./feegrant/v1beta1/tx";
import * as _113 from "./genutil/v1beta1/genesis";
import * as _114 from "./gov/v1beta1/genesis";
import * as _115 from "./gov/v1beta1/gov";
import * as _116 from "./gov/v1beta1/query";
import * as _117 from "./gov/v1beta1/tx";
import * as _118 from "./mint/v1beta1/genesis";
import * as _119 from "./mint/v1beta1/mint";
import * as _120 from "./mint/v1beta1/query";
import * as _121 from "./params/v1beta1/params";
import * as _122 from "./params/v1beta1/query";
import * as _123 from "./slashing/v1beta1/genesis";
import * as _124 from "./slashing/v1beta1/query";
import * as _125 from "./slashing/v1beta1/slashing";
import * as _126 from "./slashing/v1beta1/tx";
import * as _127 from "./staking/v1beta1/authz";
import * as _128 from "./staking/v1beta1/genesis";
import * as _129 from "./staking/v1beta1/query";
import * as _130 from "./staking/v1beta1/staking";
import * as _131 from "./staking/v1beta1/tx";
import * as _132 from "./tx/signing/v1beta1/signing";
import * as _133 from "./tx/v1beta1/service";
import * as _134 from "./tx/v1beta1/tx";
import * as _135 from "./upgrade/v1beta1/query";
import * as _136 from "./upgrade/v1beta1/upgrade";
import * as _137 from "./vesting/v1beta1/tx";
import * as _138 from "./vesting/v1beta1/vesting";
import * as _207 from "./auth/v1beta1/query.lcd";
import * as _208 from "./authz/v1beta1/query.lcd";
import * as _209 from "./bank/v1beta1/query.lcd";
import * as _210 from "./base/node/v1beta1/query.lcd";
import * as _211 from "./base/tendermint/v1beta1/query.lcd";
import * as _212 from "./distribution/v1beta1/query.lcd";
import * as _213 from "./evidence/v1beta1/query.lcd";
import * as _214 from "./feegrant/v1beta1/query.lcd";
import * as _215 from "./gov/v1beta1/query.lcd";
import * as _216 from "./mint/v1beta1/query.lcd";
import * as _217 from "./params/v1beta1/query.lcd";
import * as _218 from "./slashing/v1beta1/query.lcd";
import * as _219 from "./staking/v1beta1/query.lcd";
import * as _220 from "./tx/v1beta1/service.lcd";
import * as _221 from "./upgrade/v1beta1/query.lcd";
import * as _222 from "./auth/v1beta1/query.rpc.Query";
import * as _223 from "./authz/v1beta1/query.rpc.Query";
import * as _224 from "./bank/v1beta1/query.rpc.Query";
import * as _225 from "./base/node/v1beta1/query.rpc.Service";
import * as _226 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _227 from "./distribution/v1beta1/query.rpc.Query";
import * as _228 from "./evidence/v1beta1/query.rpc.Query";
import * as _229 from "./feegrant/v1beta1/query.rpc.Query";
import * as _230 from "./gov/v1beta1/query.rpc.Query";
import * as _231 from "./mint/v1beta1/query.rpc.Query";
import * as _232 from "./params/v1beta1/query.rpc.Query";
import * as _233 from "./slashing/v1beta1/query.rpc.Query";
import * as _234 from "./staking/v1beta1/query.rpc.Query";
import * as _235 from "./tx/v1beta1/service.rpc.Service";
import * as _236 from "./upgrade/v1beta1/query.rpc.Query";
import * as _237 from "./authz/v1beta1/tx.rpc.msg";
import * as _238 from "./bank/v1beta1/tx.rpc.msg";
import * as _239 from "./crisis/v1beta1/tx.rpc.msg";
import * as _240 from "./distribution/v1beta1/tx.rpc.msg";
import * as _241 from "./evidence/v1beta1/tx.rpc.msg";
import * as _242 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _243 from "./gov/v1beta1/tx.rpc.msg";
import * as _244 from "./slashing/v1beta1/tx.rpc.msg";
import * as _245 from "./staking/v1beta1/tx.rpc.msg";
import * as _246 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _222.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _71.QueryAccountsRequest): Promise<_71.QueryAccountsResponse>;
                account(request: _71.QueryAccountRequest): Promise<_71.QueryAccountResponse>;
                params(request?: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                moduleAccountByName(request: _71.QueryModuleAccountByNameRequest): Promise<_71.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _207.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _71.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryAccountsRequest;
                fromPartial(object: Partial<_71.QueryAccountsRequest>): _71.QueryAccountsRequest;
                fromAmino(object: _71.QueryAccountsRequestAmino): _71.QueryAccountsRequest;
                toAmino(message: _71.QueryAccountsRequest): _71.QueryAccountsRequestAmino;
                fromAminoMsg(object: _71.QueryAccountsRequestAminoMsg): _71.QueryAccountsRequest;
                toAminoMsg(message: _71.QueryAccountsRequest): _71.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryAccountsRequestProtoMsg): _71.QueryAccountsRequest;
                toProto(message: _71.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryAccountsRequest): _71.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _71.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryAccountsResponse;
                fromPartial(object: Partial<_71.QueryAccountsResponse>): _71.QueryAccountsResponse;
                fromAmino(object: _71.QueryAccountsResponseAmino): _71.QueryAccountsResponse;
                toAmino(message: _71.QueryAccountsResponse): _71.QueryAccountsResponseAmino;
                fromAminoMsg(object: _71.QueryAccountsResponseAminoMsg): _71.QueryAccountsResponse;
                toAminoMsg(message: _71.QueryAccountsResponse): _71.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryAccountsResponseProtoMsg): _71.QueryAccountsResponse;
                toProto(message: _71.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryAccountsResponse): _71.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _71.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryAccountRequest;
                fromPartial(object: Partial<_71.QueryAccountRequest>): _71.QueryAccountRequest;
                fromAmino(object: _71.QueryAccountRequestAmino): _71.QueryAccountRequest;
                toAmino(message: _71.QueryAccountRequest): _71.QueryAccountRequestAmino;
                fromAminoMsg(object: _71.QueryAccountRequestAminoMsg): _71.QueryAccountRequest;
                toAminoMsg(message: _71.QueryAccountRequest): _71.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _71.QueryAccountRequestProtoMsg): _71.QueryAccountRequest;
                toProto(message: _71.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _71.QueryAccountRequest): _71.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _71.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryAccountResponse;
                fromPartial(object: Partial<_71.QueryAccountResponse>): _71.QueryAccountResponse;
                fromAmino(object: _71.QueryAccountResponseAmino): _71.QueryAccountResponse;
                toAmino(message: _71.QueryAccountResponse): _71.QueryAccountResponseAmino;
                fromAminoMsg(object: _71.QueryAccountResponseAminoMsg): _71.QueryAccountResponse;
                toAminoMsg(message: _71.QueryAccountResponse): _71.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _71.QueryAccountResponseProtoMsg): _71.QueryAccountResponse;
                toProto(message: _71.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _71.QueryAccountResponse): _71.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _71.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _71.QueryParamsRequest;
                fromPartial(_: Partial<_71.QueryParamsRequest>): _71.QueryParamsRequest;
                fromAmino(_: _71.QueryParamsRequestAmino): _71.QueryParamsRequest;
                toAmino(_: _71.QueryParamsRequest): _71.QueryParamsRequestAmino;
                fromAminoMsg(object: _71.QueryParamsRequestAminoMsg): _71.QueryParamsRequest;
                toAminoMsg(message: _71.QueryParamsRequest): _71.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryParamsRequestProtoMsg): _71.QueryParamsRequest;
                toProto(message: _71.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryParamsRequest): _71.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _71.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryParamsResponse;
                fromPartial(object: Partial<_71.QueryParamsResponse>): _71.QueryParamsResponse;
                fromAmino(object: _71.QueryParamsResponseAmino): _71.QueryParamsResponse;
                toAmino(message: _71.QueryParamsResponse): _71.QueryParamsResponseAmino;
                fromAminoMsg(object: _71.QueryParamsResponseAminoMsg): _71.QueryParamsResponse;
                toAminoMsg(message: _71.QueryParamsResponse): _71.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryParamsResponseProtoMsg): _71.QueryParamsResponse;
                toProto(message: _71.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryParamsResponse): _71.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _71.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_71.QueryModuleAccountByNameRequest>): _71.QueryModuleAccountByNameRequest;
                fromAmino(object: _71.QueryModuleAccountByNameRequestAmino): _71.QueryModuleAccountByNameRequest;
                toAmino(message: _71.QueryModuleAccountByNameRequest): _71.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _71.QueryModuleAccountByNameRequestAminoMsg): _71.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _71.QueryModuleAccountByNameRequest): _71.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _71.QueryModuleAccountByNameRequestProtoMsg): _71.QueryModuleAccountByNameRequest;
                toProto(message: _71.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _71.QueryModuleAccountByNameRequest): _71.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _71.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_71.QueryModuleAccountByNameResponse>): _71.QueryModuleAccountByNameResponse;
                fromAmino(object: _71.QueryModuleAccountByNameResponseAmino): _71.QueryModuleAccountByNameResponse;
                toAmino(message: _71.QueryModuleAccountByNameResponse): _71.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _71.QueryModuleAccountByNameResponseAminoMsg): _71.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _71.QueryModuleAccountByNameResponse): _71.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _71.QueryModuleAccountByNameResponseProtoMsg): _71.QueryModuleAccountByNameResponse;
                toProto(message: _71.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _71.QueryModuleAccountByNameResponse): _71.QueryModuleAccountByNameResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _69.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _69.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            BaseAccount: {
                typeUrl: string;
                encode(message: _69.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.BaseAccount;
                fromPartial(object: Partial<_69.BaseAccount>): _69.BaseAccount;
                fromAmino(object: _69.BaseAccountAmino): _69.BaseAccount;
                toAmino(message: _69.BaseAccount): _69.BaseAccountAmino;
                fromAminoMsg(object: _69.BaseAccountAminoMsg): _69.BaseAccount;
                toAminoMsg(message: _69.BaseAccount): _69.BaseAccountAminoMsg;
                fromProtoMsg(message: _69.BaseAccountProtoMsg): _69.BaseAccount;
                toProto(message: _69.BaseAccount): Uint8Array;
                toProtoMsg(message: _69.BaseAccount): _69.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _69.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.ModuleAccount;
                fromPartial(object: Partial<_69.ModuleAccount>): _69.ModuleAccount;
                fromAmino(object: _69.ModuleAccountAmino): _69.ModuleAccount;
                toAmino(message: _69.ModuleAccount): _69.ModuleAccountAmino;
                fromAminoMsg(object: _69.ModuleAccountAminoMsg): _69.ModuleAccount;
                toAminoMsg(message: _69.ModuleAccount): _69.ModuleAccountAminoMsg;
                fromProtoMsg(message: _69.ModuleAccountProtoMsg): _69.ModuleAccount;
                toProto(message: _69.ModuleAccount): Uint8Array;
                toProtoMsg(message: _69.ModuleAccount): _69.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _69.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.Params;
                fromPartial(object: Partial<_69.Params>): _69.Params;
                fromAmino(object: _69.ParamsAmino): _69.Params;
                toAmino(message: _69.Params): _69.ParamsAmino;
                fromAminoMsg(object: _69.ParamsAminoMsg): _69.Params;
                toAminoMsg(message: _69.Params): _69.ParamsAminoMsg;
                fromProtoMsg(message: _69.ParamsProtoMsg): _69.Params;
                toProto(message: _69.Params): Uint8Array;
                toProtoMsg(message: _69.Params): _69.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _237.MsgClientImpl;
            QueryClientImpl: typeof _223.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _75.QueryGrantsRequest): Promise<_75.QueryGrantsResponse>;
                granterGrants(request: _75.QueryGranterGrantsRequest): Promise<_75.QueryGranterGrantsResponse>;
                granteeGrants(request: _75.QueryGranteeGrantsRequest): Promise<_75.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _208.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _76.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _76.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _76.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _76.MsgGrant): {
                        typeUrl: string;
                        value: _76.MsgGrant;
                    };
                    exec(value: _76.MsgExec): {
                        typeUrl: string;
                        value: _76.MsgExec;
                    };
                    revoke(value: _76.MsgRevoke): {
                        typeUrl: string;
                        value: _76.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _76.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _76.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _76.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _76.MsgGrant): {
                        typeUrl: string;
                        value: _76.MsgGrant;
                    };
                    exec(value: _76.MsgExec): {
                        typeUrl: string;
                        value: _76.MsgExec;
                    };
                    revoke(value: _76.MsgRevoke): {
                        typeUrl: string;
                        value: _76.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _76.MsgGrant) => _76.MsgGrantAmino;
                    fromAmino: (object: _76.MsgGrantAmino) => _76.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _76.MsgExec) => _76.MsgExecAmino;
                    fromAmino: (object: _76.MsgExecAmino) => _76.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _76.MsgRevoke) => _76.MsgRevokeAmino;
                    fromAmino: (object: _76.MsgRevokeAmino) => _76.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _76.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgGrant;
                fromPartial(object: Partial<_76.MsgGrant>): _76.MsgGrant;
                fromAmino(object: _76.MsgGrantAmino): _76.MsgGrant;
                toAmino(message: _76.MsgGrant): _76.MsgGrantAmino;
                fromAminoMsg(object: _76.MsgGrantAminoMsg): _76.MsgGrant;
                toAminoMsg(message: _76.MsgGrant): _76.MsgGrantAminoMsg;
                fromProtoMsg(message: _76.MsgGrantProtoMsg): _76.MsgGrant;
                toProto(message: _76.MsgGrant): Uint8Array;
                toProtoMsg(message: _76.MsgGrant): _76.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _76.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgExecResponse;
                fromPartial(object: Partial<_76.MsgExecResponse>): _76.MsgExecResponse;
                fromAmino(object: _76.MsgExecResponseAmino): _76.MsgExecResponse;
                toAmino(message: _76.MsgExecResponse): _76.MsgExecResponseAmino;
                fromAminoMsg(object: _76.MsgExecResponseAminoMsg): _76.MsgExecResponse;
                toAminoMsg(message: _76.MsgExecResponse): _76.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _76.MsgExecResponseProtoMsg): _76.MsgExecResponse;
                toProto(message: _76.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _76.MsgExecResponse): _76.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _76.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgExec;
                fromPartial(object: Partial<_76.MsgExec>): _76.MsgExec;
                fromAmino(object: _76.MsgExecAmino): _76.MsgExec;
                toAmino(message: _76.MsgExec): _76.MsgExecAmino;
                fromAminoMsg(object: _76.MsgExecAminoMsg): _76.MsgExec;
                toAminoMsg(message: _76.MsgExec): _76.MsgExecAminoMsg;
                fromProtoMsg(message: _76.MsgExecProtoMsg): _76.MsgExec;
                toProto(message: _76.MsgExec): Uint8Array;
                toProtoMsg(message: _76.MsgExec): _76.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _76.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgGrantResponse;
                fromPartial(_: Partial<_76.MsgGrantResponse>): _76.MsgGrantResponse;
                fromAmino(_: _76.MsgGrantResponseAmino): _76.MsgGrantResponse;
                toAmino(_: _76.MsgGrantResponse): _76.MsgGrantResponseAmino;
                fromAminoMsg(object: _76.MsgGrantResponseAminoMsg): _76.MsgGrantResponse;
                toAminoMsg(message: _76.MsgGrantResponse): _76.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _76.MsgGrantResponseProtoMsg): _76.MsgGrantResponse;
                toProto(message: _76.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _76.MsgGrantResponse): _76.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _76.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgRevoke;
                fromPartial(object: Partial<_76.MsgRevoke>): _76.MsgRevoke;
                fromAmino(object: _76.MsgRevokeAmino): _76.MsgRevoke;
                toAmino(message: _76.MsgRevoke): _76.MsgRevokeAmino;
                fromAminoMsg(object: _76.MsgRevokeAminoMsg): _76.MsgRevoke;
                toAminoMsg(message: _76.MsgRevoke): _76.MsgRevokeAminoMsg;
                fromProtoMsg(message: _76.MsgRevokeProtoMsg): _76.MsgRevoke;
                toProto(message: _76.MsgRevoke): Uint8Array;
                toProtoMsg(message: _76.MsgRevoke): _76.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _76.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgRevokeResponse;
                fromPartial(_: Partial<_76.MsgRevokeResponse>): _76.MsgRevokeResponse;
                fromAmino(_: _76.MsgRevokeResponseAmino): _76.MsgRevokeResponse;
                toAmino(_: _76.MsgRevokeResponse): _76.MsgRevokeResponseAmino;
                fromAminoMsg(object: _76.MsgRevokeResponseAminoMsg): _76.MsgRevokeResponse;
                toAminoMsg(message: _76.MsgRevokeResponse): _76.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _76.MsgRevokeResponseProtoMsg): _76.MsgRevokeResponse;
                toProto(message: _76.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _76.MsgRevokeResponse): _76.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _75.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryGrantsRequest;
                fromPartial(object: Partial<_75.QueryGrantsRequest>): _75.QueryGrantsRequest;
                fromAmino(object: _75.QueryGrantsRequestAmino): _75.QueryGrantsRequest;
                toAmino(message: _75.QueryGrantsRequest): _75.QueryGrantsRequestAmino;
                fromAminoMsg(object: _75.QueryGrantsRequestAminoMsg): _75.QueryGrantsRequest;
                toAminoMsg(message: _75.QueryGrantsRequest): _75.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _75.QueryGrantsRequestProtoMsg): _75.QueryGrantsRequest;
                toProto(message: _75.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _75.QueryGrantsRequest): _75.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _75.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryGrantsResponse;
                fromPartial(object: Partial<_75.QueryGrantsResponse>): _75.QueryGrantsResponse;
                fromAmino(object: _75.QueryGrantsResponseAmino): _75.QueryGrantsResponse;
                toAmino(message: _75.QueryGrantsResponse): _75.QueryGrantsResponseAmino;
                fromAminoMsg(object: _75.QueryGrantsResponseAminoMsg): _75.QueryGrantsResponse;
                toAminoMsg(message: _75.QueryGrantsResponse): _75.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _75.QueryGrantsResponseProtoMsg): _75.QueryGrantsResponse;
                toProto(message: _75.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _75.QueryGrantsResponse): _75.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _75.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_75.QueryGranterGrantsRequest>): _75.QueryGranterGrantsRequest;
                fromAmino(object: _75.QueryGranterGrantsRequestAmino): _75.QueryGranterGrantsRequest;
                toAmino(message: _75.QueryGranterGrantsRequest): _75.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _75.QueryGranterGrantsRequestAminoMsg): _75.QueryGranterGrantsRequest;
                toAminoMsg(message: _75.QueryGranterGrantsRequest): _75.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _75.QueryGranterGrantsRequestProtoMsg): _75.QueryGranterGrantsRequest;
                toProto(message: _75.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _75.QueryGranterGrantsRequest): _75.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _75.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_75.QueryGranterGrantsResponse>): _75.QueryGranterGrantsResponse;
                fromAmino(object: _75.QueryGranterGrantsResponseAmino): _75.QueryGranterGrantsResponse;
                toAmino(message: _75.QueryGranterGrantsResponse): _75.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _75.QueryGranterGrantsResponseAminoMsg): _75.QueryGranterGrantsResponse;
                toAminoMsg(message: _75.QueryGranterGrantsResponse): _75.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _75.QueryGranterGrantsResponseProtoMsg): _75.QueryGranterGrantsResponse;
                toProto(message: _75.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _75.QueryGranterGrantsResponse): _75.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _75.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_75.QueryGranteeGrantsRequest>): _75.QueryGranteeGrantsRequest;
                fromAmino(object: _75.QueryGranteeGrantsRequestAmino): _75.QueryGranteeGrantsRequest;
                toAmino(message: _75.QueryGranteeGrantsRequest): _75.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _75.QueryGranteeGrantsRequestAminoMsg): _75.QueryGranteeGrantsRequest;
                toAminoMsg(message: _75.QueryGranteeGrantsRequest): _75.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _75.QueryGranteeGrantsRequestProtoMsg): _75.QueryGranteeGrantsRequest;
                toProto(message: _75.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _75.QueryGranteeGrantsRequest): _75.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _75.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_75.QueryGranteeGrantsResponse>): _75.QueryGranteeGrantsResponse;
                fromAmino(object: _75.QueryGranteeGrantsResponseAmino): _75.QueryGranteeGrantsResponse;
                toAmino(message: _75.QueryGranteeGrantsResponse): _75.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _75.QueryGranteeGrantsResponseAminoMsg): _75.QueryGranteeGrantsResponse;
                toAminoMsg(message: _75.QueryGranteeGrantsResponse): _75.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _75.QueryGranteeGrantsResponseProtoMsg): _75.QueryGranteeGrantsResponse;
                toProto(message: _75.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _75.QueryGranteeGrantsResponse): _75.QueryGranteeGrantsResponseProtoMsg;
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
            EventGrant: {
                typeUrl: string;
                encode(message: _73.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.EventGrant;
                fromPartial(object: Partial<_73.EventGrant>): _73.EventGrant;
                fromAmino(object: _73.EventGrantAmino): _73.EventGrant;
                toAmino(message: _73.EventGrant): _73.EventGrantAmino;
                fromAminoMsg(object: _73.EventGrantAminoMsg): _73.EventGrant;
                toAminoMsg(message: _73.EventGrant): _73.EventGrantAminoMsg;
                fromProtoMsg(message: _73.EventGrantProtoMsg): _73.EventGrant;
                toProto(message: _73.EventGrant): Uint8Array;
                toProtoMsg(message: _73.EventGrant): _73.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _73.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.EventRevoke;
                fromPartial(object: Partial<_73.EventRevoke>): _73.EventRevoke;
                fromAmino(object: _73.EventRevokeAmino): _73.EventRevoke;
                toAmino(message: _73.EventRevoke): _73.EventRevokeAmino;
                fromAminoMsg(object: _73.EventRevokeAminoMsg): _73.EventRevoke;
                toAminoMsg(message: _73.EventRevoke): _73.EventRevokeAminoMsg;
                fromProtoMsg(message: _73.EventRevokeProtoMsg): _73.EventRevoke;
                toProto(message: _73.EventRevoke): Uint8Array;
                toProtoMsg(message: _73.EventRevoke): _73.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _72.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.GenericAuthorization;
                fromPartial(object: Partial<_72.GenericAuthorization>): _72.GenericAuthorization;
                fromAmino(object: _72.GenericAuthorizationAmino): _72.GenericAuthorization;
                toAmino(message: _72.GenericAuthorization): _72.GenericAuthorizationAmino;
                fromAminoMsg(object: _72.GenericAuthorizationAminoMsg): _72.GenericAuthorization;
                toAminoMsg(message: _72.GenericAuthorization): _72.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _72.GenericAuthorizationProtoMsg): _72.GenericAuthorization;
                toProto(message: _72.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _72.GenericAuthorization): _72.GenericAuthorizationProtoMsg;
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
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _72.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.GrantAuthorization;
                fromPartial(object: Partial<_72.GrantAuthorization>): _72.GrantAuthorization;
                fromAmino(object: _72.GrantAuthorizationAmino): _72.GrantAuthorization;
                toAmino(message: _72.GrantAuthorization): _72.GrantAuthorizationAmino;
                fromAminoMsg(object: _72.GrantAuthorizationAminoMsg): _72.GrantAuthorization;
                toAminoMsg(message: _72.GrantAuthorization): _72.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _72.GrantAuthorizationProtoMsg): _72.GrantAuthorization;
                toProto(message: _72.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _72.GrantAuthorization): _72.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _77.SendAuthorization | _127.StakeAuthorization | _72.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _238.MsgClientImpl;
            QueryClientImpl: typeof _224.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _80.QueryBalanceRequest): Promise<_80.QueryBalanceResponse>;
                allBalances(request: _80.QueryAllBalancesRequest): Promise<_80.QueryAllBalancesResponse>;
                spendableBalances(request: _80.QuerySpendableBalancesRequest): Promise<_80.QuerySpendableBalancesResponse>;
                totalSupply(request?: _80.QueryTotalSupplyRequest): Promise<_80.QueryTotalSupplyResponse>;
                supplyOf(request: _80.QuerySupplyOfRequest): Promise<_80.QuerySupplyOfResponse>;
                params(request?: _80.QueryParamsRequest): Promise<_80.QueryParamsResponse>;
                denomMetadata(request: _80.QueryDenomMetadataRequest): Promise<_80.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _80.QueryDenomsMetadataRequest): Promise<_80.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _209.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _81.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _81.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _81.MsgSend): {
                        typeUrl: string;
                        value: _81.MsgSend;
                    };
                    multiSend(value: _81.MsgMultiSend): {
                        typeUrl: string;
                        value: _81.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _81.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _81.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _81.MsgSend): {
                        typeUrl: string;
                        value: _81.MsgSend;
                    };
                    multiSend(value: _81.MsgMultiSend): {
                        typeUrl: string;
                        value: _81.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _81.MsgSend) => _81.MsgSendAmino;
                    fromAmino: (object: _81.MsgSendAmino) => _81.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _81.MsgMultiSend) => _81.MsgMultiSendAmino;
                    fromAmino: (object: _81.MsgMultiSendAmino) => _81.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _81.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgSend;
                fromPartial(object: Partial<_81.MsgSend>): _81.MsgSend;
                fromAmino(object: _81.MsgSendAmino): _81.MsgSend;
                toAmino(message: _81.MsgSend): _81.MsgSendAmino;
                fromAminoMsg(object: _81.MsgSendAminoMsg): _81.MsgSend;
                toAminoMsg(message: _81.MsgSend): _81.MsgSendAminoMsg;
                fromProtoMsg(message: _81.MsgSendProtoMsg): _81.MsgSend;
                toProto(message: _81.MsgSend): Uint8Array;
                toProtoMsg(message: _81.MsgSend): _81.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _81.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.MsgSendResponse;
                fromPartial(_: Partial<_81.MsgSendResponse>): _81.MsgSendResponse;
                fromAmino(_: _81.MsgSendResponseAmino): _81.MsgSendResponse;
                toAmino(_: _81.MsgSendResponse): _81.MsgSendResponseAmino;
                fromAminoMsg(object: _81.MsgSendResponseAminoMsg): _81.MsgSendResponse;
                toAminoMsg(message: _81.MsgSendResponse): _81.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _81.MsgSendResponseProtoMsg): _81.MsgSendResponse;
                toProto(message: _81.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _81.MsgSendResponse): _81.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _81.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgMultiSend;
                fromPartial(object: Partial<_81.MsgMultiSend>): _81.MsgMultiSend;
                fromAmino(object: _81.MsgMultiSendAmino): _81.MsgMultiSend;
                toAmino(message: _81.MsgMultiSend): _81.MsgMultiSendAmino;
                fromAminoMsg(object: _81.MsgMultiSendAminoMsg): _81.MsgMultiSend;
                toAminoMsg(message: _81.MsgMultiSend): _81.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _81.MsgMultiSendProtoMsg): _81.MsgMultiSend;
                toProto(message: _81.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _81.MsgMultiSend): _81.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _81.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.MsgMultiSendResponse;
                fromPartial(_: Partial<_81.MsgMultiSendResponse>): _81.MsgMultiSendResponse;
                fromAmino(_: _81.MsgMultiSendResponseAmino): _81.MsgMultiSendResponse;
                toAmino(_: _81.MsgMultiSendResponse): _81.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _81.MsgMultiSendResponseAminoMsg): _81.MsgMultiSendResponse;
                toAminoMsg(message: _81.MsgMultiSendResponse): _81.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _81.MsgMultiSendResponseProtoMsg): _81.MsgMultiSendResponse;
                toProto(message: _81.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _81.MsgMultiSendResponse): _81.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _80.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryBalanceRequest;
                fromPartial(object: Partial<_80.QueryBalanceRequest>): _80.QueryBalanceRequest;
                fromAmino(object: _80.QueryBalanceRequestAmino): _80.QueryBalanceRequest;
                toAmino(message: _80.QueryBalanceRequest): _80.QueryBalanceRequestAmino;
                fromAminoMsg(object: _80.QueryBalanceRequestAminoMsg): _80.QueryBalanceRequest;
                toAminoMsg(message: _80.QueryBalanceRequest): _80.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _80.QueryBalanceRequestProtoMsg): _80.QueryBalanceRequest;
                toProto(message: _80.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _80.QueryBalanceRequest): _80.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _80.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryBalanceResponse;
                fromPartial(object: Partial<_80.QueryBalanceResponse>): _80.QueryBalanceResponse;
                fromAmino(object: _80.QueryBalanceResponseAmino): _80.QueryBalanceResponse;
                toAmino(message: _80.QueryBalanceResponse): _80.QueryBalanceResponseAmino;
                fromAminoMsg(object: _80.QueryBalanceResponseAminoMsg): _80.QueryBalanceResponse;
                toAminoMsg(message: _80.QueryBalanceResponse): _80.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _80.QueryBalanceResponseProtoMsg): _80.QueryBalanceResponse;
                toProto(message: _80.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _80.QueryBalanceResponse): _80.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _80.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryAllBalancesRequest;
                fromPartial(object: Partial<_80.QueryAllBalancesRequest>): _80.QueryAllBalancesRequest;
                fromAmino(object: _80.QueryAllBalancesRequestAmino): _80.QueryAllBalancesRequest;
                toAmino(message: _80.QueryAllBalancesRequest): _80.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _80.QueryAllBalancesRequestAminoMsg): _80.QueryAllBalancesRequest;
                toAminoMsg(message: _80.QueryAllBalancesRequest): _80.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _80.QueryAllBalancesRequestProtoMsg): _80.QueryAllBalancesRequest;
                toProto(message: _80.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _80.QueryAllBalancesRequest): _80.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _80.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryAllBalancesResponse;
                fromPartial(object: Partial<_80.QueryAllBalancesResponse>): _80.QueryAllBalancesResponse;
                fromAmino(object: _80.QueryAllBalancesResponseAmino): _80.QueryAllBalancesResponse;
                toAmino(message: _80.QueryAllBalancesResponse): _80.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _80.QueryAllBalancesResponseAminoMsg): _80.QueryAllBalancesResponse;
                toAminoMsg(message: _80.QueryAllBalancesResponse): _80.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _80.QueryAllBalancesResponseProtoMsg): _80.QueryAllBalancesResponse;
                toProto(message: _80.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _80.QueryAllBalancesResponse): _80.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _80.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_80.QuerySpendableBalancesRequest>): _80.QuerySpendableBalancesRequest;
                fromAmino(object: _80.QuerySpendableBalancesRequestAmino): _80.QuerySpendableBalancesRequest;
                toAmino(message: _80.QuerySpendableBalancesRequest): _80.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _80.QuerySpendableBalancesRequestAminoMsg): _80.QuerySpendableBalancesRequest;
                toAminoMsg(message: _80.QuerySpendableBalancesRequest): _80.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _80.QuerySpendableBalancesRequestProtoMsg): _80.QuerySpendableBalancesRequest;
                toProto(message: _80.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _80.QuerySpendableBalancesRequest): _80.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _80.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_80.QuerySpendableBalancesResponse>): _80.QuerySpendableBalancesResponse;
                fromAmino(object: _80.QuerySpendableBalancesResponseAmino): _80.QuerySpendableBalancesResponse;
                toAmino(message: _80.QuerySpendableBalancesResponse): _80.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _80.QuerySpendableBalancesResponseAminoMsg): _80.QuerySpendableBalancesResponse;
                toAminoMsg(message: _80.QuerySpendableBalancesResponse): _80.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _80.QuerySpendableBalancesResponseProtoMsg): _80.QuerySpendableBalancesResponse;
                toProto(message: _80.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _80.QuerySpendableBalancesResponse): _80.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _80.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_80.QueryTotalSupplyRequest>): _80.QueryTotalSupplyRequest;
                fromAmino(object: _80.QueryTotalSupplyRequestAmino): _80.QueryTotalSupplyRequest;
                toAmino(message: _80.QueryTotalSupplyRequest): _80.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _80.QueryTotalSupplyRequestAminoMsg): _80.QueryTotalSupplyRequest;
                toAminoMsg(message: _80.QueryTotalSupplyRequest): _80.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _80.QueryTotalSupplyRequestProtoMsg): _80.QueryTotalSupplyRequest;
                toProto(message: _80.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _80.QueryTotalSupplyRequest): _80.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _80.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_80.QueryTotalSupplyResponse>): _80.QueryTotalSupplyResponse;
                fromAmino(object: _80.QueryTotalSupplyResponseAmino): _80.QueryTotalSupplyResponse;
                toAmino(message: _80.QueryTotalSupplyResponse): _80.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _80.QueryTotalSupplyResponseAminoMsg): _80.QueryTotalSupplyResponse;
                toAminoMsg(message: _80.QueryTotalSupplyResponse): _80.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _80.QueryTotalSupplyResponseProtoMsg): _80.QueryTotalSupplyResponse;
                toProto(message: _80.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _80.QueryTotalSupplyResponse): _80.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _80.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QuerySupplyOfRequest;
                fromPartial(object: Partial<_80.QuerySupplyOfRequest>): _80.QuerySupplyOfRequest;
                fromAmino(object: _80.QuerySupplyOfRequestAmino): _80.QuerySupplyOfRequest;
                toAmino(message: _80.QuerySupplyOfRequest): _80.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _80.QuerySupplyOfRequestAminoMsg): _80.QuerySupplyOfRequest;
                toAminoMsg(message: _80.QuerySupplyOfRequest): _80.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _80.QuerySupplyOfRequestProtoMsg): _80.QuerySupplyOfRequest;
                toProto(message: _80.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _80.QuerySupplyOfRequest): _80.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _80.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QuerySupplyOfResponse;
                fromPartial(object: Partial<_80.QuerySupplyOfResponse>): _80.QuerySupplyOfResponse;
                fromAmino(object: _80.QuerySupplyOfResponseAmino): _80.QuerySupplyOfResponse;
                toAmino(message: _80.QuerySupplyOfResponse): _80.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _80.QuerySupplyOfResponseAminoMsg): _80.QuerySupplyOfResponse;
                toAminoMsg(message: _80.QuerySupplyOfResponse): _80.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _80.QuerySupplyOfResponseProtoMsg): _80.QuerySupplyOfResponse;
                toProto(message: _80.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _80.QuerySupplyOfResponse): _80.QuerySupplyOfResponseProtoMsg;
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
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _80.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_80.QueryDenomsMetadataRequest>): _80.QueryDenomsMetadataRequest;
                fromAmino(object: _80.QueryDenomsMetadataRequestAmino): _80.QueryDenomsMetadataRequest;
                toAmino(message: _80.QueryDenomsMetadataRequest): _80.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _80.QueryDenomsMetadataRequestAminoMsg): _80.QueryDenomsMetadataRequest;
                toAminoMsg(message: _80.QueryDenomsMetadataRequest): _80.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _80.QueryDenomsMetadataRequestProtoMsg): _80.QueryDenomsMetadataRequest;
                toProto(message: _80.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _80.QueryDenomsMetadataRequest): _80.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _80.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_80.QueryDenomsMetadataResponse>): _80.QueryDenomsMetadataResponse;
                fromAmino(object: _80.QueryDenomsMetadataResponseAmino): _80.QueryDenomsMetadataResponse;
                toAmino(message: _80.QueryDenomsMetadataResponse): _80.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _80.QueryDenomsMetadataResponseAminoMsg): _80.QueryDenomsMetadataResponse;
                toAminoMsg(message: _80.QueryDenomsMetadataResponse): _80.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _80.QueryDenomsMetadataResponseProtoMsg): _80.QueryDenomsMetadataResponse;
                toProto(message: _80.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _80.QueryDenomsMetadataResponse): _80.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _80.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_80.QueryDenomMetadataRequest>): _80.QueryDenomMetadataRequest;
                fromAmino(object: _80.QueryDenomMetadataRequestAmino): _80.QueryDenomMetadataRequest;
                toAmino(message: _80.QueryDenomMetadataRequest): _80.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _80.QueryDenomMetadataRequestAminoMsg): _80.QueryDenomMetadataRequest;
                toAminoMsg(message: _80.QueryDenomMetadataRequest): _80.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _80.QueryDenomMetadataRequestProtoMsg): _80.QueryDenomMetadataRequest;
                toProto(message: _80.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _80.QueryDenomMetadataRequest): _80.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _80.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_80.QueryDenomMetadataResponse>): _80.QueryDenomMetadataResponse;
                fromAmino(object: _80.QueryDenomMetadataResponseAmino): _80.QueryDenomMetadataResponse;
                toAmino(message: _80.QueryDenomMetadataResponse): _80.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _80.QueryDenomMetadataResponseAminoMsg): _80.QueryDenomMetadataResponse;
                toAminoMsg(message: _80.QueryDenomMetadataResponse): _80.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _80.QueryDenomMetadataResponseProtoMsg): _80.QueryDenomMetadataResponse;
                toProto(message: _80.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _80.QueryDenomMetadataResponse): _80.QueryDenomMetadataResponseProtoMsg;
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
            Balance: {
                typeUrl: string;
                encode(message: _79.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.Balance;
                fromPartial(object: Partial<_79.Balance>): _79.Balance;
                fromAmino(object: _79.BalanceAmino): _79.Balance;
                toAmino(message: _79.Balance): _79.BalanceAmino;
                fromAminoMsg(object: _79.BalanceAminoMsg): _79.Balance;
                toAminoMsg(message: _79.Balance): _79.BalanceAminoMsg;
                fromProtoMsg(message: _79.BalanceProtoMsg): _79.Balance;
                toProto(message: _79.Balance): Uint8Array;
                toProtoMsg(message: _79.Balance): _79.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _78.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Params;
                fromPartial(object: Partial<_78.Params>): _78.Params;
                fromAmino(object: _78.ParamsAmino): _78.Params;
                toAmino(message: _78.Params): _78.ParamsAmino;
                fromAminoMsg(object: _78.ParamsAminoMsg): _78.Params;
                toAminoMsg(message: _78.Params): _78.ParamsAminoMsg;
                fromProtoMsg(message: _78.ParamsProtoMsg): _78.Params;
                toProto(message: _78.Params): Uint8Array;
                toProtoMsg(message: _78.Params): _78.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _78.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.SendEnabled;
                fromPartial(object: Partial<_78.SendEnabled>): _78.SendEnabled;
                fromAmino(object: _78.SendEnabledAmino): _78.SendEnabled;
                toAmino(message: _78.SendEnabled): _78.SendEnabledAmino;
                fromAminoMsg(object: _78.SendEnabledAminoMsg): _78.SendEnabled;
                toAminoMsg(message: _78.SendEnabled): _78.SendEnabledAminoMsg;
                fromProtoMsg(message: _78.SendEnabledProtoMsg): _78.SendEnabled;
                toProto(message: _78.SendEnabled): Uint8Array;
                toProtoMsg(message: _78.SendEnabled): _78.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _78.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Input;
                fromPartial(object: Partial<_78.Input>): _78.Input;
                fromAmino(object: _78.InputAmino): _78.Input;
                toAmino(message: _78.Input): _78.InputAmino;
                fromAminoMsg(object: _78.InputAminoMsg): _78.Input;
                toAminoMsg(message: _78.Input): _78.InputAminoMsg;
                fromProtoMsg(message: _78.InputProtoMsg): _78.Input;
                toProto(message: _78.Input): Uint8Array;
                toProtoMsg(message: _78.Input): _78.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _78.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Output;
                fromPartial(object: Partial<_78.Output>): _78.Output;
                fromAmino(object: _78.OutputAmino): _78.Output;
                toAmino(message: _78.Output): _78.OutputAmino;
                fromAminoMsg(object: _78.OutputAminoMsg): _78.Output;
                toAminoMsg(message: _78.Output): _78.OutputAminoMsg;
                fromProtoMsg(message: _78.OutputProtoMsg): _78.Output;
                toProto(message: _78.Output): Uint8Array;
                toProtoMsg(message: _78.Output): _78.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _78.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Supply;
                fromPartial(object: Partial<_78.Supply>): _78.Supply;
                fromAmino(object: _78.SupplyAmino): _78.Supply;
                toAmino(message: _78.Supply): _78.SupplyAmino;
                fromAminoMsg(object: _78.SupplyAminoMsg): _78.Supply;
                toAminoMsg(message: _78.Supply): _78.SupplyAminoMsg;
                fromProtoMsg(message: _78.SupplyProtoMsg): _78.Supply;
                toProto(message: _78.Supply): Uint8Array;
                toProtoMsg(message: _78.Supply): _78.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _78.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.DenomUnit;
                fromPartial(object: Partial<_78.DenomUnit>): _78.DenomUnit;
                fromAmino(object: _78.DenomUnitAmino): _78.DenomUnit;
                toAmino(message: _78.DenomUnit): _78.DenomUnitAmino;
                fromAminoMsg(object: _78.DenomUnitAminoMsg): _78.DenomUnit;
                toAminoMsg(message: _78.DenomUnit): _78.DenomUnitAminoMsg;
                fromProtoMsg(message: _78.DenomUnitProtoMsg): _78.DenomUnit;
                toProto(message: _78.DenomUnit): Uint8Array;
                toProtoMsg(message: _78.DenomUnit): _78.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _78.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Metadata;
                fromPartial(object: Partial<_78.Metadata>): _78.Metadata;
                fromAmino(object: _78.MetadataAmino): _78.Metadata;
                toAmino(message: _78.Metadata): _78.MetadataAmino;
                fromAminoMsg(object: _78.MetadataAminoMsg): _78.Metadata;
                toAminoMsg(message: _78.Metadata): _78.MetadataAminoMsg;
                fromProtoMsg(message: _78.MetadataProtoMsg): _78.Metadata;
                toProto(message: _78.Metadata): Uint8Array;
                toProtoMsg(message: _78.Metadata): _78.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _77.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.SendAuthorization;
                fromPartial(object: Partial<_77.SendAuthorization>): _77.SendAuthorization;
                fromAmino(object: _77.SendAuthorizationAmino): _77.SendAuthorization;
                toAmino(message: _77.SendAuthorization): _77.SendAuthorizationAmino;
                fromAminoMsg(object: _77.SendAuthorizationAminoMsg): _77.SendAuthorization;
                toAminoMsg(message: _77.SendAuthorization): _77.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _77.SendAuthorizationProtoMsg): _77.SendAuthorization;
                toProto(message: _77.SendAuthorization): Uint8Array;
                toProtoMsg(message: _77.SendAuthorization): _77.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _82.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.TxResponse;
                    fromPartial(object: Partial<_82.TxResponse>): _82.TxResponse;
                    fromAmino(object: _82.TxResponseAmino): _82.TxResponse;
                    toAmino(message: _82.TxResponse): _82.TxResponseAmino;
                    fromAminoMsg(object: _82.TxResponseAminoMsg): _82.TxResponse;
                    toAminoMsg(message: _82.TxResponse): _82.TxResponseAminoMsg;
                    fromProtoMsg(message: _82.TxResponseProtoMsg): _82.TxResponse;
                    toProto(message: _82.TxResponse): Uint8Array;
                    toProtoMsg(message: _82.TxResponse): _82.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _82.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.ABCIMessageLog;
                    fromPartial(object: Partial<_82.ABCIMessageLog>): _82.ABCIMessageLog;
                    fromAmino(object: _82.ABCIMessageLogAmino): _82.ABCIMessageLog;
                    toAmino(message: _82.ABCIMessageLog): _82.ABCIMessageLogAmino;
                    fromAminoMsg(object: _82.ABCIMessageLogAminoMsg): _82.ABCIMessageLog;
                    toAminoMsg(message: _82.ABCIMessageLog): _82.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _82.ABCIMessageLogProtoMsg): _82.ABCIMessageLog;
                    toProto(message: _82.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _82.ABCIMessageLog): _82.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _82.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.StringEvent;
                    fromPartial(object: Partial<_82.StringEvent>): _82.StringEvent;
                    fromAmino(object: _82.StringEventAmino): _82.StringEvent;
                    toAmino(message: _82.StringEvent): _82.StringEventAmino;
                    fromAminoMsg(object: _82.StringEventAminoMsg): _82.StringEvent;
                    toAminoMsg(message: _82.StringEvent): _82.StringEventAminoMsg;
                    fromProtoMsg(message: _82.StringEventProtoMsg): _82.StringEvent;
                    toProto(message: _82.StringEvent): Uint8Array;
                    toProtoMsg(message: _82.StringEvent): _82.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _82.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.Attribute;
                    fromPartial(object: Partial<_82.Attribute>): _82.Attribute;
                    fromAmino(object: _82.AttributeAmino): _82.Attribute;
                    toAmino(message: _82.Attribute): _82.AttributeAmino;
                    fromAminoMsg(object: _82.AttributeAminoMsg): _82.Attribute;
                    toAminoMsg(message: _82.Attribute): _82.AttributeAminoMsg;
                    fromProtoMsg(message: _82.AttributeProtoMsg): _82.Attribute;
                    toProto(message: _82.Attribute): Uint8Array;
                    toProtoMsg(message: _82.Attribute): _82.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _82.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.GasInfo;
                    fromPartial(object: Partial<_82.GasInfo>): _82.GasInfo;
                    fromAmino(object: _82.GasInfoAmino): _82.GasInfo;
                    toAmino(message: _82.GasInfo): _82.GasInfoAmino;
                    fromAminoMsg(object: _82.GasInfoAminoMsg): _82.GasInfo;
                    toAminoMsg(message: _82.GasInfo): _82.GasInfoAminoMsg;
                    fromProtoMsg(message: _82.GasInfoProtoMsg): _82.GasInfo;
                    toProto(message: _82.GasInfo): Uint8Array;
                    toProtoMsg(message: _82.GasInfo): _82.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _82.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.Result;
                    fromPartial(object: Partial<_82.Result>): _82.Result;
                    fromAmino(object: _82.ResultAmino): _82.Result;
                    toAmino(message: _82.Result): _82.ResultAmino;
                    fromAminoMsg(object: _82.ResultAminoMsg): _82.Result;
                    toAminoMsg(message: _82.Result): _82.ResultAminoMsg;
                    fromProtoMsg(message: _82.ResultProtoMsg): _82.Result;
                    toProto(message: _82.Result): Uint8Array;
                    toProtoMsg(message: _82.Result): _82.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _82.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.SimulationResponse;
                    fromPartial(object: Partial<_82.SimulationResponse>): _82.SimulationResponse;
                    fromAmino(object: _82.SimulationResponseAmino): _82.SimulationResponse;
                    toAmino(message: _82.SimulationResponse): _82.SimulationResponseAmino;
                    fromAminoMsg(object: _82.SimulationResponseAminoMsg): _82.SimulationResponse;
                    toAminoMsg(message: _82.SimulationResponse): _82.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _82.SimulationResponseProtoMsg): _82.SimulationResponse;
                    toProto(message: _82.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _82.SimulationResponse): _82.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _82.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.MsgData;
                    fromPartial(object: Partial<_82.MsgData>): _82.MsgData;
                    fromAmino(object: _82.MsgDataAmino): _82.MsgData;
                    toAmino(message: _82.MsgData): _82.MsgDataAmino;
                    fromAminoMsg(object: _82.MsgDataAminoMsg): _82.MsgData;
                    toAminoMsg(message: _82.MsgData): _82.MsgDataAminoMsg;
                    fromProtoMsg(message: _82.MsgDataProtoMsg): _82.MsgData;
                    toProto(message: _82.MsgData): Uint8Array;
                    toProtoMsg(message: _82.MsgData): _82.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _82.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.TxMsgData;
                    fromPartial(object: Partial<_82.TxMsgData>): _82.TxMsgData;
                    fromAmino(object: _82.TxMsgDataAmino): _82.TxMsgData;
                    toAmino(message: _82.TxMsgData): _82.TxMsgDataAmino;
                    fromAminoMsg(object: _82.TxMsgDataAminoMsg): _82.TxMsgData;
                    toAminoMsg(message: _82.TxMsgData): _82.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _82.TxMsgDataProtoMsg): _82.TxMsgData;
                    toProto(message: _82.TxMsgData): Uint8Array;
                    toProtoMsg(message: _82.TxMsgData): _82.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _82.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _82.SearchTxsResult;
                    fromPartial(object: Partial<_82.SearchTxsResult>): _82.SearchTxsResult;
                    fromAmino(object: _82.SearchTxsResultAmino): _82.SearchTxsResult;
                    toAmino(message: _82.SearchTxsResult): _82.SearchTxsResultAmino;
                    fromAminoMsg(object: _82.SearchTxsResultAminoMsg): _82.SearchTxsResult;
                    toAminoMsg(message: _82.SearchTxsResult): _82.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _82.SearchTxsResultProtoMsg): _82.SearchTxsResult;
                    toProto(message: _82.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _82.SearchTxsResult): _82.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _83.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _83.Pairs;
                    fromPartial(object: Partial<_83.Pairs>): _83.Pairs;
                    fromAmino(object: _83.PairsAmino): _83.Pairs;
                    toAmino(message: _83.Pairs): _83.PairsAmino;
                    fromAminoMsg(object: _83.PairsAminoMsg): _83.Pairs;
                    toAminoMsg(message: _83.Pairs): _83.PairsAminoMsg;
                    fromProtoMsg(message: _83.PairsProtoMsg): _83.Pairs;
                    toProto(message: _83.Pairs): Uint8Array;
                    toProtoMsg(message: _83.Pairs): _83.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _83.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _83.Pair;
                    fromPartial(object: Partial<_83.Pair>): _83.Pair;
                    fromAmino(object: _83.PairAmino): _83.Pair;
                    toAmino(message: _83.Pair): _83.PairAmino;
                    fromAminoMsg(object: _83.PairAminoMsg): _83.Pair;
                    toAminoMsg(message: _83.Pair): _83.PairAminoMsg;
                    fromProtoMsg(message: _83.PairProtoMsg): _83.Pair;
                    toProto(message: _83.Pair): Uint8Array;
                    toProtoMsg(message: _83.Pair): _83.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _225.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _84.ConfigRequest): Promise<_84.ConfigResponse>;
                };
                LCDQueryClient: typeof _210.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _84.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _84.ConfigRequest;
                    fromPartial(_: Partial<_84.ConfigRequest>): _84.ConfigRequest;
                    fromAmino(_: _84.ConfigRequestAmino): _84.ConfigRequest;
                    toAmino(_: _84.ConfigRequest): _84.ConfigRequestAmino;
                    fromAminoMsg(object: _84.ConfigRequestAminoMsg): _84.ConfigRequest;
                    toAminoMsg(message: _84.ConfigRequest): _84.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _84.ConfigRequestProtoMsg): _84.ConfigRequest;
                    toProto(message: _84.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _84.ConfigRequest): _84.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _84.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _84.ConfigResponse;
                    fromPartial(object: Partial<_84.ConfigResponse>): _84.ConfigResponse;
                    fromAmino(object: _84.ConfigResponseAmino): _84.ConfigResponse;
                    toAmino(message: _84.ConfigResponse): _84.ConfigResponseAmino;
                    fromAminoMsg(object: _84.ConfigResponseAminoMsg): _84.ConfigResponse;
                    toAminoMsg(message: _84.ConfigResponse): _84.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _84.ConfigResponseProtoMsg): _84.ConfigResponse;
                    toProto(message: _84.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _84.ConfigResponse): _84.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _85.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.PageRequest;
                    fromPartial(object: Partial<_85.PageRequest>): _85.PageRequest;
                    fromAmino(object: _85.PageRequestAmino): _85.PageRequest;
                    toAmino(message: _85.PageRequest): _85.PageRequestAmino;
                    fromAminoMsg(object: _85.PageRequestAminoMsg): _85.PageRequest;
                    toAminoMsg(message: _85.PageRequest): _85.PageRequestAminoMsg;
                    fromProtoMsg(message: _85.PageRequestProtoMsg): _85.PageRequest;
                    toProto(message: _85.PageRequest): Uint8Array;
                    toProtoMsg(message: _85.PageRequest): _85.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _85.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.PageResponse;
                    fromPartial(object: Partial<_85.PageResponse>): _85.PageResponse;
                    fromAmino(object: _85.PageResponseAmino): _85.PageResponse;
                    toAmino(message: _85.PageResponse): _85.PageResponseAmino;
                    fromAminoMsg(object: _85.PageResponseAminoMsg): _85.PageResponse;
                    toAminoMsg(message: _85.PageResponse): _85.PageResponseAminoMsg;
                    fromProtoMsg(message: _85.PageResponseProtoMsg): _85.PageResponse;
                    toProto(message: _85.PageResponse): Uint8Array;
                    toProtoMsg(message: _85.PageResponse): _85.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _86.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _86.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_86.ListAllInterfacesRequest>): _86.ListAllInterfacesRequest;
                    fromAmino(_: _86.ListAllInterfacesRequestAmino): _86.ListAllInterfacesRequest;
                    toAmino(_: _86.ListAllInterfacesRequest): _86.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _86.ListAllInterfacesRequestAminoMsg): _86.ListAllInterfacesRequest;
                    toAminoMsg(message: _86.ListAllInterfacesRequest): _86.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _86.ListAllInterfacesRequestProtoMsg): _86.ListAllInterfacesRequest;
                    toProto(message: _86.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _86.ListAllInterfacesRequest): _86.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _86.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_86.ListAllInterfacesResponse>): _86.ListAllInterfacesResponse;
                    fromAmino(object: _86.ListAllInterfacesResponseAmino): _86.ListAllInterfacesResponse;
                    toAmino(message: _86.ListAllInterfacesResponse): _86.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _86.ListAllInterfacesResponseAminoMsg): _86.ListAllInterfacesResponse;
                    toAminoMsg(message: _86.ListAllInterfacesResponse): _86.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _86.ListAllInterfacesResponseProtoMsg): _86.ListAllInterfacesResponse;
                    toProto(message: _86.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _86.ListAllInterfacesResponse): _86.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _86.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.ListImplementationsRequest;
                    fromPartial(object: Partial<_86.ListImplementationsRequest>): _86.ListImplementationsRequest;
                    fromAmino(object: _86.ListImplementationsRequestAmino): _86.ListImplementationsRequest;
                    toAmino(message: _86.ListImplementationsRequest): _86.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _86.ListImplementationsRequestAminoMsg): _86.ListImplementationsRequest;
                    toAminoMsg(message: _86.ListImplementationsRequest): _86.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _86.ListImplementationsRequestProtoMsg): _86.ListImplementationsRequest;
                    toProto(message: _86.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _86.ListImplementationsRequest): _86.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _86.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.ListImplementationsResponse;
                    fromPartial(object: Partial<_86.ListImplementationsResponse>): _86.ListImplementationsResponse;
                    fromAmino(object: _86.ListImplementationsResponseAmino): _86.ListImplementationsResponse;
                    toAmino(message: _86.ListImplementationsResponse): _86.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _86.ListImplementationsResponseAminoMsg): _86.ListImplementationsResponse;
                    toAminoMsg(message: _86.ListImplementationsResponse): _86.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _86.ListImplementationsResponseProtoMsg): _86.ListImplementationsResponse;
                    toProto(message: _86.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _86.ListImplementationsResponse): _86.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _87.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.AppDescriptor;
                    fromPartial(object: Partial<_87.AppDescriptor>): _87.AppDescriptor;
                    fromAmino(object: _87.AppDescriptorAmino): _87.AppDescriptor;
                    toAmino(message: _87.AppDescriptor): _87.AppDescriptorAmino;
                    fromAminoMsg(object: _87.AppDescriptorAminoMsg): _87.AppDescriptor;
                    toAminoMsg(message: _87.AppDescriptor): _87.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _87.AppDescriptorProtoMsg): _87.AppDescriptor;
                    toProto(message: _87.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _87.AppDescriptor): _87.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _87.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.TxDescriptor;
                    fromPartial(object: Partial<_87.TxDescriptor>): _87.TxDescriptor;
                    fromAmino(object: _87.TxDescriptorAmino): _87.TxDescriptor;
                    toAmino(message: _87.TxDescriptor): _87.TxDescriptorAmino;
                    fromAminoMsg(object: _87.TxDescriptorAminoMsg): _87.TxDescriptor;
                    toAminoMsg(message: _87.TxDescriptor): _87.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _87.TxDescriptorProtoMsg): _87.TxDescriptor;
                    toProto(message: _87.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _87.TxDescriptor): _87.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _87.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.AuthnDescriptor;
                    fromPartial(object: Partial<_87.AuthnDescriptor>): _87.AuthnDescriptor;
                    fromAmino(object: _87.AuthnDescriptorAmino): _87.AuthnDescriptor;
                    toAmino(message: _87.AuthnDescriptor): _87.AuthnDescriptorAmino;
                    fromAminoMsg(object: _87.AuthnDescriptorAminoMsg): _87.AuthnDescriptor;
                    toAminoMsg(message: _87.AuthnDescriptor): _87.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _87.AuthnDescriptorProtoMsg): _87.AuthnDescriptor;
                    toProto(message: _87.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _87.AuthnDescriptor): _87.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _87.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.SigningModeDescriptor;
                    fromPartial(object: Partial<_87.SigningModeDescriptor>): _87.SigningModeDescriptor;
                    fromAmino(object: _87.SigningModeDescriptorAmino): _87.SigningModeDescriptor;
                    toAmino(message: _87.SigningModeDescriptor): _87.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _87.SigningModeDescriptorAminoMsg): _87.SigningModeDescriptor;
                    toAminoMsg(message: _87.SigningModeDescriptor): _87.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _87.SigningModeDescriptorProtoMsg): _87.SigningModeDescriptor;
                    toProto(message: _87.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _87.SigningModeDescriptor): _87.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _87.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.ChainDescriptor;
                    fromPartial(object: Partial<_87.ChainDescriptor>): _87.ChainDescriptor;
                    fromAmino(object: _87.ChainDescriptorAmino): _87.ChainDescriptor;
                    toAmino(message: _87.ChainDescriptor): _87.ChainDescriptorAmino;
                    fromAminoMsg(object: _87.ChainDescriptorAminoMsg): _87.ChainDescriptor;
                    toAminoMsg(message: _87.ChainDescriptor): _87.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _87.ChainDescriptorProtoMsg): _87.ChainDescriptor;
                    toProto(message: _87.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _87.ChainDescriptor): _87.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _87.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.CodecDescriptor;
                    fromPartial(object: Partial<_87.CodecDescriptor>): _87.CodecDescriptor;
                    fromAmino(object: _87.CodecDescriptorAmino): _87.CodecDescriptor;
                    toAmino(message: _87.CodecDescriptor): _87.CodecDescriptorAmino;
                    fromAminoMsg(object: _87.CodecDescriptorAminoMsg): _87.CodecDescriptor;
                    toAminoMsg(message: _87.CodecDescriptor): _87.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _87.CodecDescriptorProtoMsg): _87.CodecDescriptor;
                    toProto(message: _87.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _87.CodecDescriptor): _87.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _87.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.InterfaceDescriptor;
                    fromPartial(object: Partial<_87.InterfaceDescriptor>): _87.InterfaceDescriptor;
                    fromAmino(object: _87.InterfaceDescriptorAmino): _87.InterfaceDescriptor;
                    toAmino(message: _87.InterfaceDescriptor): _87.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _87.InterfaceDescriptorAminoMsg): _87.InterfaceDescriptor;
                    toAminoMsg(message: _87.InterfaceDescriptor): _87.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _87.InterfaceDescriptorProtoMsg): _87.InterfaceDescriptor;
                    toProto(message: _87.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _87.InterfaceDescriptor): _87.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _87.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_87.InterfaceImplementerDescriptor>): _87.InterfaceImplementerDescriptor;
                    fromAmino(object: _87.InterfaceImplementerDescriptorAmino): _87.InterfaceImplementerDescriptor;
                    toAmino(message: _87.InterfaceImplementerDescriptor): _87.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _87.InterfaceImplementerDescriptorAminoMsg): _87.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _87.InterfaceImplementerDescriptor): _87.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _87.InterfaceImplementerDescriptorProtoMsg): _87.InterfaceImplementerDescriptor;
                    toProto(message: _87.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _87.InterfaceImplementerDescriptor): _87.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _87.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_87.InterfaceAcceptingMessageDescriptor>): _87.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _87.InterfaceAcceptingMessageDescriptorAmino): _87.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _87.InterfaceAcceptingMessageDescriptor): _87.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _87.InterfaceAcceptingMessageDescriptorAminoMsg): _87.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _87.InterfaceAcceptingMessageDescriptor): _87.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _87.InterfaceAcceptingMessageDescriptorProtoMsg): _87.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _87.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _87.InterfaceAcceptingMessageDescriptor): _87.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _87.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.ConfigurationDescriptor;
                    fromPartial(object: Partial<_87.ConfigurationDescriptor>): _87.ConfigurationDescriptor;
                    fromAmino(object: _87.ConfigurationDescriptorAmino): _87.ConfigurationDescriptor;
                    toAmino(message: _87.ConfigurationDescriptor): _87.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _87.ConfigurationDescriptorAminoMsg): _87.ConfigurationDescriptor;
                    toAminoMsg(message: _87.ConfigurationDescriptor): _87.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _87.ConfigurationDescriptorProtoMsg): _87.ConfigurationDescriptor;
                    toProto(message: _87.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _87.ConfigurationDescriptor): _87.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _87.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.MsgDescriptor;
                    fromPartial(object: Partial<_87.MsgDescriptor>): _87.MsgDescriptor;
                    fromAmino(object: _87.MsgDescriptorAmino): _87.MsgDescriptor;
                    toAmino(message: _87.MsgDescriptor): _87.MsgDescriptorAmino;
                    fromAminoMsg(object: _87.MsgDescriptorAminoMsg): _87.MsgDescriptor;
                    toAminoMsg(message: _87.MsgDescriptor): _87.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _87.MsgDescriptorProtoMsg): _87.MsgDescriptor;
                    toProto(message: _87.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _87.MsgDescriptor): _87.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _87.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _87.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_87.GetAuthnDescriptorRequest>): _87.GetAuthnDescriptorRequest;
                    fromAmino(_: _87.GetAuthnDescriptorRequestAmino): _87.GetAuthnDescriptorRequest;
                    toAmino(_: _87.GetAuthnDescriptorRequest): _87.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _87.GetAuthnDescriptorRequestAminoMsg): _87.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _87.GetAuthnDescriptorRequest): _87.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _87.GetAuthnDescriptorRequestProtoMsg): _87.GetAuthnDescriptorRequest;
                    toProto(message: _87.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _87.GetAuthnDescriptorRequest): _87.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _87.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_87.GetAuthnDescriptorResponse>): _87.GetAuthnDescriptorResponse;
                    fromAmino(object: _87.GetAuthnDescriptorResponseAmino): _87.GetAuthnDescriptorResponse;
                    toAmino(message: _87.GetAuthnDescriptorResponse): _87.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _87.GetAuthnDescriptorResponseAminoMsg): _87.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _87.GetAuthnDescriptorResponse): _87.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _87.GetAuthnDescriptorResponseProtoMsg): _87.GetAuthnDescriptorResponse;
                    toProto(message: _87.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _87.GetAuthnDescriptorResponse): _87.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _87.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _87.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_87.GetChainDescriptorRequest>): _87.GetChainDescriptorRequest;
                    fromAmino(_: _87.GetChainDescriptorRequestAmino): _87.GetChainDescriptorRequest;
                    toAmino(_: _87.GetChainDescriptorRequest): _87.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _87.GetChainDescriptorRequestAminoMsg): _87.GetChainDescriptorRequest;
                    toAminoMsg(message: _87.GetChainDescriptorRequest): _87.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _87.GetChainDescriptorRequestProtoMsg): _87.GetChainDescriptorRequest;
                    toProto(message: _87.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _87.GetChainDescriptorRequest): _87.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _87.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_87.GetChainDescriptorResponse>): _87.GetChainDescriptorResponse;
                    fromAmino(object: _87.GetChainDescriptorResponseAmino): _87.GetChainDescriptorResponse;
                    toAmino(message: _87.GetChainDescriptorResponse): _87.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _87.GetChainDescriptorResponseAminoMsg): _87.GetChainDescriptorResponse;
                    toAminoMsg(message: _87.GetChainDescriptorResponse): _87.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _87.GetChainDescriptorResponseProtoMsg): _87.GetChainDescriptorResponse;
                    toProto(message: _87.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _87.GetChainDescriptorResponse): _87.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _87.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _87.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_87.GetCodecDescriptorRequest>): _87.GetCodecDescriptorRequest;
                    fromAmino(_: _87.GetCodecDescriptorRequestAmino): _87.GetCodecDescriptorRequest;
                    toAmino(_: _87.GetCodecDescriptorRequest): _87.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _87.GetCodecDescriptorRequestAminoMsg): _87.GetCodecDescriptorRequest;
                    toAminoMsg(message: _87.GetCodecDescriptorRequest): _87.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _87.GetCodecDescriptorRequestProtoMsg): _87.GetCodecDescriptorRequest;
                    toProto(message: _87.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _87.GetCodecDescriptorRequest): _87.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _87.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_87.GetCodecDescriptorResponse>): _87.GetCodecDescriptorResponse;
                    fromAmino(object: _87.GetCodecDescriptorResponseAmino): _87.GetCodecDescriptorResponse;
                    toAmino(message: _87.GetCodecDescriptorResponse): _87.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _87.GetCodecDescriptorResponseAminoMsg): _87.GetCodecDescriptorResponse;
                    toAminoMsg(message: _87.GetCodecDescriptorResponse): _87.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _87.GetCodecDescriptorResponseProtoMsg): _87.GetCodecDescriptorResponse;
                    toProto(message: _87.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _87.GetCodecDescriptorResponse): _87.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _87.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _87.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_87.GetConfigurationDescriptorRequest>): _87.GetConfigurationDescriptorRequest;
                    fromAmino(_: _87.GetConfigurationDescriptorRequestAmino): _87.GetConfigurationDescriptorRequest;
                    toAmino(_: _87.GetConfigurationDescriptorRequest): _87.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _87.GetConfigurationDescriptorRequestAminoMsg): _87.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _87.GetConfigurationDescriptorRequest): _87.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _87.GetConfigurationDescriptorRequestProtoMsg): _87.GetConfigurationDescriptorRequest;
                    toProto(message: _87.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _87.GetConfigurationDescriptorRequest): _87.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _87.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_87.GetConfigurationDescriptorResponse>): _87.GetConfigurationDescriptorResponse;
                    fromAmino(object: _87.GetConfigurationDescriptorResponseAmino): _87.GetConfigurationDescriptorResponse;
                    toAmino(message: _87.GetConfigurationDescriptorResponse): _87.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _87.GetConfigurationDescriptorResponseAminoMsg): _87.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _87.GetConfigurationDescriptorResponse): _87.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _87.GetConfigurationDescriptorResponseProtoMsg): _87.GetConfigurationDescriptorResponse;
                    toProto(message: _87.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _87.GetConfigurationDescriptorResponse): _87.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _87.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _87.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_87.GetQueryServicesDescriptorRequest>): _87.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _87.GetQueryServicesDescriptorRequestAmino): _87.GetQueryServicesDescriptorRequest;
                    toAmino(_: _87.GetQueryServicesDescriptorRequest): _87.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _87.GetQueryServicesDescriptorRequestAminoMsg): _87.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _87.GetQueryServicesDescriptorRequest): _87.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _87.GetQueryServicesDescriptorRequestProtoMsg): _87.GetQueryServicesDescriptorRequest;
                    toProto(message: _87.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _87.GetQueryServicesDescriptorRequest): _87.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _87.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_87.GetQueryServicesDescriptorResponse>): _87.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _87.GetQueryServicesDescriptorResponseAmino): _87.GetQueryServicesDescriptorResponse;
                    toAmino(message: _87.GetQueryServicesDescriptorResponse): _87.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _87.GetQueryServicesDescriptorResponseAminoMsg): _87.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _87.GetQueryServicesDescriptorResponse): _87.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _87.GetQueryServicesDescriptorResponseProtoMsg): _87.GetQueryServicesDescriptorResponse;
                    toProto(message: _87.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _87.GetQueryServicesDescriptorResponse): _87.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _87.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _87.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_87.GetTxDescriptorRequest>): _87.GetTxDescriptorRequest;
                    fromAmino(_: _87.GetTxDescriptorRequestAmino): _87.GetTxDescriptorRequest;
                    toAmino(_: _87.GetTxDescriptorRequest): _87.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _87.GetTxDescriptorRequestAminoMsg): _87.GetTxDescriptorRequest;
                    toAminoMsg(message: _87.GetTxDescriptorRequest): _87.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _87.GetTxDescriptorRequestProtoMsg): _87.GetTxDescriptorRequest;
                    toProto(message: _87.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _87.GetTxDescriptorRequest): _87.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _87.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_87.GetTxDescriptorResponse>): _87.GetTxDescriptorResponse;
                    fromAmino(object: _87.GetTxDescriptorResponseAmino): _87.GetTxDescriptorResponse;
                    toAmino(message: _87.GetTxDescriptorResponse): _87.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _87.GetTxDescriptorResponseAminoMsg): _87.GetTxDescriptorResponse;
                    toAminoMsg(message: _87.GetTxDescriptorResponse): _87.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _87.GetTxDescriptorResponseProtoMsg): _87.GetTxDescriptorResponse;
                    toProto(message: _87.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _87.GetTxDescriptorResponse): _87.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _87.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.QueryServicesDescriptor;
                    fromPartial(object: Partial<_87.QueryServicesDescriptor>): _87.QueryServicesDescriptor;
                    fromAmino(object: _87.QueryServicesDescriptorAmino): _87.QueryServicesDescriptor;
                    toAmino(message: _87.QueryServicesDescriptor): _87.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _87.QueryServicesDescriptorAminoMsg): _87.QueryServicesDescriptor;
                    toAminoMsg(message: _87.QueryServicesDescriptor): _87.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _87.QueryServicesDescriptorProtoMsg): _87.QueryServicesDescriptor;
                    toProto(message: _87.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _87.QueryServicesDescriptor): _87.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _87.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.QueryServiceDescriptor;
                    fromPartial(object: Partial<_87.QueryServiceDescriptor>): _87.QueryServiceDescriptor;
                    fromAmino(object: _87.QueryServiceDescriptorAmino): _87.QueryServiceDescriptor;
                    toAmino(message: _87.QueryServiceDescriptor): _87.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _87.QueryServiceDescriptorAminoMsg): _87.QueryServiceDescriptor;
                    toAminoMsg(message: _87.QueryServiceDescriptor): _87.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _87.QueryServiceDescriptorProtoMsg): _87.QueryServiceDescriptor;
                    toProto(message: _87.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _87.QueryServiceDescriptor): _87.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _87.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.QueryMethodDescriptor;
                    fromPartial(object: Partial<_87.QueryMethodDescriptor>): _87.QueryMethodDescriptor;
                    fromAmino(object: _87.QueryMethodDescriptorAmino): _87.QueryMethodDescriptor;
                    toAmino(message: _87.QueryMethodDescriptor): _87.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _87.QueryMethodDescriptorAminoMsg): _87.QueryMethodDescriptor;
                    toAminoMsg(message: _87.QueryMethodDescriptor): _87.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _87.QueryMethodDescriptorProtoMsg): _87.QueryMethodDescriptor;
                    toProto(message: _87.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _87.QueryMethodDescriptor): _87.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _88.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.Snapshot;
                    fromPartial(object: Partial<_88.Snapshot>): _88.Snapshot;
                    fromAmino(object: _88.SnapshotAmino): _88.Snapshot;
                    toAmino(message: _88.Snapshot): _88.SnapshotAmino;
                    fromAminoMsg(object: _88.SnapshotAminoMsg): _88.Snapshot;
                    toAminoMsg(message: _88.Snapshot): _88.SnapshotAminoMsg;
                    fromProtoMsg(message: _88.SnapshotProtoMsg): _88.Snapshot;
                    toProto(message: _88.Snapshot): Uint8Array;
                    toProtoMsg(message: _88.Snapshot): _88.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _88.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.Metadata;
                    fromPartial(object: Partial<_88.Metadata>): _88.Metadata;
                    fromAmino(object: _88.MetadataAmino): _88.Metadata;
                    toAmino(message: _88.Metadata): _88.MetadataAmino;
                    fromAminoMsg(object: _88.MetadataAminoMsg): _88.Metadata;
                    toAminoMsg(message: _88.Metadata): _88.MetadataAminoMsg;
                    fromProtoMsg(message: _88.MetadataProtoMsg): _88.Metadata;
                    toProto(message: _88.Metadata): Uint8Array;
                    toProtoMsg(message: _88.Metadata): _88.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _88.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.SnapshotItem;
                    fromPartial(object: Partial<_88.SnapshotItem>): _88.SnapshotItem;
                    fromAmino(object: _88.SnapshotItemAmino): _88.SnapshotItem;
                    toAmino(message: _88.SnapshotItem): _88.SnapshotItemAmino;
                    fromAminoMsg(object: _88.SnapshotItemAminoMsg): _88.SnapshotItem;
                    toAminoMsg(message: _88.SnapshotItem): _88.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _88.SnapshotItemProtoMsg): _88.SnapshotItem;
                    toProto(message: _88.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _88.SnapshotItem): _88.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _88.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.SnapshotStoreItem;
                    fromPartial(object: Partial<_88.SnapshotStoreItem>): _88.SnapshotStoreItem;
                    fromAmino(object: _88.SnapshotStoreItemAmino): _88.SnapshotStoreItem;
                    toAmino(message: _88.SnapshotStoreItem): _88.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _88.SnapshotStoreItemAminoMsg): _88.SnapshotStoreItem;
                    toAminoMsg(message: _88.SnapshotStoreItem): _88.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _88.SnapshotStoreItemProtoMsg): _88.SnapshotStoreItem;
                    toProto(message: _88.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _88.SnapshotStoreItem): _88.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _88.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.SnapshotIAVLItem;
                    fromPartial(object: Partial<_88.SnapshotIAVLItem>): _88.SnapshotIAVLItem;
                    fromAmino(object: _88.SnapshotIAVLItemAmino): _88.SnapshotIAVLItem;
                    toAmino(message: _88.SnapshotIAVLItem): _88.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _88.SnapshotIAVLItemAminoMsg): _88.SnapshotIAVLItem;
                    toAminoMsg(message: _88.SnapshotIAVLItem): _88.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _88.SnapshotIAVLItemProtoMsg): _88.SnapshotIAVLItem;
                    toProto(message: _88.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _88.SnapshotIAVLItem): _88.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _88.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_88.SnapshotExtensionMeta>): _88.SnapshotExtensionMeta;
                    fromAmino(object: _88.SnapshotExtensionMetaAmino): _88.SnapshotExtensionMeta;
                    toAmino(message: _88.SnapshotExtensionMeta): _88.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _88.SnapshotExtensionMetaAminoMsg): _88.SnapshotExtensionMeta;
                    toAminoMsg(message: _88.SnapshotExtensionMeta): _88.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _88.SnapshotExtensionMetaProtoMsg): _88.SnapshotExtensionMeta;
                    toProto(message: _88.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _88.SnapshotExtensionMeta): _88.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _88.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_88.SnapshotExtensionPayload>): _88.SnapshotExtensionPayload;
                    fromAmino(object: _88.SnapshotExtensionPayloadAmino): _88.SnapshotExtensionPayload;
                    toAmino(message: _88.SnapshotExtensionPayload): _88.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _88.SnapshotExtensionPayloadAminoMsg): _88.SnapshotExtensionPayload;
                    toAminoMsg(message: _88.SnapshotExtensionPayload): _88.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _88.SnapshotExtensionPayloadProtoMsg): _88.SnapshotExtensionPayload;
                    toProto(message: _88.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _88.SnapshotExtensionPayload): _88.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _90.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.StoreKVPair;
                    fromPartial(object: Partial<_90.StoreKVPair>): _90.StoreKVPair;
                    fromAmino(object: _90.StoreKVPairAmino): _90.StoreKVPair;
                    toAmino(message: _90.StoreKVPair): _90.StoreKVPairAmino;
                    fromAminoMsg(object: _90.StoreKVPairAminoMsg): _90.StoreKVPair;
                    toAminoMsg(message: _90.StoreKVPair): _90.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _90.StoreKVPairProtoMsg): _90.StoreKVPair;
                    toProto(message: _90.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _90.StoreKVPair): _90.StoreKVPairProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _89.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.CommitInfo;
                    fromPartial(object: Partial<_89.CommitInfo>): _89.CommitInfo;
                    fromAmino(object: _89.CommitInfoAmino): _89.CommitInfo;
                    toAmino(message: _89.CommitInfo): _89.CommitInfoAmino;
                    fromAminoMsg(object: _89.CommitInfoAminoMsg): _89.CommitInfo;
                    toAminoMsg(message: _89.CommitInfo): _89.CommitInfoAminoMsg;
                    fromProtoMsg(message: _89.CommitInfoProtoMsg): _89.CommitInfo;
                    toProto(message: _89.CommitInfo): Uint8Array;
                    toProtoMsg(message: _89.CommitInfo): _89.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _89.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.StoreInfo;
                    fromPartial(object: Partial<_89.StoreInfo>): _89.StoreInfo;
                    fromAmino(object: _89.StoreInfoAmino): _89.StoreInfo;
                    toAmino(message: _89.StoreInfo): _89.StoreInfoAmino;
                    fromAminoMsg(object: _89.StoreInfoAminoMsg): _89.StoreInfo;
                    toAminoMsg(message: _89.StoreInfo): _89.StoreInfoAminoMsg;
                    fromProtoMsg(message: _89.StoreInfoProtoMsg): _89.StoreInfo;
                    toProto(message: _89.StoreInfo): Uint8Array;
                    toProtoMsg(message: _89.StoreInfo): _89.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _89.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.CommitID;
                    fromPartial(object: Partial<_89.CommitID>): _89.CommitID;
                    fromAmino(object: _89.CommitIDAmino): _89.CommitID;
                    toAmino(message: _89.CommitID): _89.CommitIDAmino;
                    fromAminoMsg(object: _89.CommitIDAminoMsg): _89.CommitID;
                    toAminoMsg(message: _89.CommitID): _89.CommitIDAminoMsg;
                    fromProtoMsg(message: _89.CommitIDProtoMsg): _89.CommitID;
                    toProto(message: _89.CommitID): Uint8Array;
                    toProtoMsg(message: _89.CommitID): _89.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _226.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _91.GetNodeInfoRequest): Promise<_91.GetNodeInfoResponse>;
                    getSyncing(request?: _91.GetSyncingRequest): Promise<_91.GetSyncingResponse>;
                    getLatestBlock(request?: _91.GetLatestBlockRequest): Promise<_91.GetLatestBlockResponse>;
                    getBlockByHeight(request: _91.GetBlockByHeightRequest): Promise<_91.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _91.GetLatestValidatorSetRequest): Promise<_91.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _91.GetValidatorSetByHeightRequest): Promise<_91.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _211.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _91.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_91.GetValidatorSetByHeightRequest>): _91.GetValidatorSetByHeightRequest;
                    fromAmino(object: _91.GetValidatorSetByHeightRequestAmino): _91.GetValidatorSetByHeightRequest;
                    toAmino(message: _91.GetValidatorSetByHeightRequest): _91.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _91.GetValidatorSetByHeightRequestAminoMsg): _91.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _91.GetValidatorSetByHeightRequest): _91.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _91.GetValidatorSetByHeightRequestProtoMsg): _91.GetValidatorSetByHeightRequest;
                    toProto(message: _91.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _91.GetValidatorSetByHeightRequest): _91.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _91.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_91.GetValidatorSetByHeightResponse>): _91.GetValidatorSetByHeightResponse;
                    fromAmino(object: _91.GetValidatorSetByHeightResponseAmino): _91.GetValidatorSetByHeightResponse;
                    toAmino(message: _91.GetValidatorSetByHeightResponse): _91.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _91.GetValidatorSetByHeightResponseAminoMsg): _91.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _91.GetValidatorSetByHeightResponse): _91.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _91.GetValidatorSetByHeightResponseProtoMsg): _91.GetValidatorSetByHeightResponse;
                    toProto(message: _91.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _91.GetValidatorSetByHeightResponse): _91.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _91.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_91.GetLatestValidatorSetRequest>): _91.GetLatestValidatorSetRequest;
                    fromAmino(object: _91.GetLatestValidatorSetRequestAmino): _91.GetLatestValidatorSetRequest;
                    toAmino(message: _91.GetLatestValidatorSetRequest): _91.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _91.GetLatestValidatorSetRequestAminoMsg): _91.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _91.GetLatestValidatorSetRequest): _91.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _91.GetLatestValidatorSetRequestProtoMsg): _91.GetLatestValidatorSetRequest;
                    toProto(message: _91.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _91.GetLatestValidatorSetRequest): _91.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _91.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_91.GetLatestValidatorSetResponse>): _91.GetLatestValidatorSetResponse;
                    fromAmino(object: _91.GetLatestValidatorSetResponseAmino): _91.GetLatestValidatorSetResponse;
                    toAmino(message: _91.GetLatestValidatorSetResponse): _91.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _91.GetLatestValidatorSetResponseAminoMsg): _91.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _91.GetLatestValidatorSetResponse): _91.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _91.GetLatestValidatorSetResponseProtoMsg): _91.GetLatestValidatorSetResponse;
                    toProto(message: _91.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _91.GetLatestValidatorSetResponse): _91.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _91.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.Validator;
                    fromPartial(object: Partial<_91.Validator>): _91.Validator;
                    fromAmino(object: _91.ValidatorAmino): _91.Validator;
                    toAmino(message: _91.Validator): _91.ValidatorAmino;
                    fromAminoMsg(object: _91.ValidatorAminoMsg): _91.Validator;
                    toAminoMsg(message: _91.Validator): _91.ValidatorAminoMsg;
                    fromProtoMsg(message: _91.ValidatorProtoMsg): _91.Validator;
                    toProto(message: _91.Validator): Uint8Array;
                    toProtoMsg(message: _91.Validator): _91.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _91.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_91.GetBlockByHeightRequest>): _91.GetBlockByHeightRequest;
                    fromAmino(object: _91.GetBlockByHeightRequestAmino): _91.GetBlockByHeightRequest;
                    toAmino(message: _91.GetBlockByHeightRequest): _91.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _91.GetBlockByHeightRequestAminoMsg): _91.GetBlockByHeightRequest;
                    toAminoMsg(message: _91.GetBlockByHeightRequest): _91.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _91.GetBlockByHeightRequestProtoMsg): _91.GetBlockByHeightRequest;
                    toProto(message: _91.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _91.GetBlockByHeightRequest): _91.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _91.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_91.GetBlockByHeightResponse>): _91.GetBlockByHeightResponse;
                    fromAmino(object: _91.GetBlockByHeightResponseAmino): _91.GetBlockByHeightResponse;
                    toAmino(message: _91.GetBlockByHeightResponse): _91.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _91.GetBlockByHeightResponseAminoMsg): _91.GetBlockByHeightResponse;
                    toAminoMsg(message: _91.GetBlockByHeightResponse): _91.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _91.GetBlockByHeightResponseProtoMsg): _91.GetBlockByHeightResponse;
                    toProto(message: _91.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _91.GetBlockByHeightResponse): _91.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _91.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _91.GetLatestBlockRequest;
                    fromPartial(_: Partial<_91.GetLatestBlockRequest>): _91.GetLatestBlockRequest;
                    fromAmino(_: _91.GetLatestBlockRequestAmino): _91.GetLatestBlockRequest;
                    toAmino(_: _91.GetLatestBlockRequest): _91.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _91.GetLatestBlockRequestAminoMsg): _91.GetLatestBlockRequest;
                    toAminoMsg(message: _91.GetLatestBlockRequest): _91.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _91.GetLatestBlockRequestProtoMsg): _91.GetLatestBlockRequest;
                    toProto(message: _91.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _91.GetLatestBlockRequest): _91.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _91.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.GetLatestBlockResponse;
                    fromPartial(object: Partial<_91.GetLatestBlockResponse>): _91.GetLatestBlockResponse;
                    fromAmino(object: _91.GetLatestBlockResponseAmino): _91.GetLatestBlockResponse;
                    toAmino(message: _91.GetLatestBlockResponse): _91.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _91.GetLatestBlockResponseAminoMsg): _91.GetLatestBlockResponse;
                    toAminoMsg(message: _91.GetLatestBlockResponse): _91.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _91.GetLatestBlockResponseProtoMsg): _91.GetLatestBlockResponse;
                    toProto(message: _91.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _91.GetLatestBlockResponse): _91.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _91.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _91.GetSyncingRequest;
                    fromPartial(_: Partial<_91.GetSyncingRequest>): _91.GetSyncingRequest;
                    fromAmino(_: _91.GetSyncingRequestAmino): _91.GetSyncingRequest;
                    toAmino(_: _91.GetSyncingRequest): _91.GetSyncingRequestAmino;
                    fromAminoMsg(object: _91.GetSyncingRequestAminoMsg): _91.GetSyncingRequest;
                    toAminoMsg(message: _91.GetSyncingRequest): _91.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _91.GetSyncingRequestProtoMsg): _91.GetSyncingRequest;
                    toProto(message: _91.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _91.GetSyncingRequest): _91.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _91.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.GetSyncingResponse;
                    fromPartial(object: Partial<_91.GetSyncingResponse>): _91.GetSyncingResponse;
                    fromAmino(object: _91.GetSyncingResponseAmino): _91.GetSyncingResponse;
                    toAmino(message: _91.GetSyncingResponse): _91.GetSyncingResponseAmino;
                    fromAminoMsg(object: _91.GetSyncingResponseAminoMsg): _91.GetSyncingResponse;
                    toAminoMsg(message: _91.GetSyncingResponse): _91.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _91.GetSyncingResponseProtoMsg): _91.GetSyncingResponse;
                    toProto(message: _91.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _91.GetSyncingResponse): _91.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _91.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _91.GetNodeInfoRequest;
                    fromPartial(_: Partial<_91.GetNodeInfoRequest>): _91.GetNodeInfoRequest;
                    fromAmino(_: _91.GetNodeInfoRequestAmino): _91.GetNodeInfoRequest;
                    toAmino(_: _91.GetNodeInfoRequest): _91.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _91.GetNodeInfoRequestAminoMsg): _91.GetNodeInfoRequest;
                    toAminoMsg(message: _91.GetNodeInfoRequest): _91.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _91.GetNodeInfoRequestProtoMsg): _91.GetNodeInfoRequest;
                    toProto(message: _91.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _91.GetNodeInfoRequest): _91.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _91.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.GetNodeInfoResponse;
                    fromPartial(object: Partial<_91.GetNodeInfoResponse>): _91.GetNodeInfoResponse;
                    fromAmino(object: _91.GetNodeInfoResponseAmino): _91.GetNodeInfoResponse;
                    toAmino(message: _91.GetNodeInfoResponse): _91.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _91.GetNodeInfoResponseAminoMsg): _91.GetNodeInfoResponse;
                    toAminoMsg(message: _91.GetNodeInfoResponse): _91.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _91.GetNodeInfoResponseProtoMsg): _91.GetNodeInfoResponse;
                    toProto(message: _91.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _91.GetNodeInfoResponse): _91.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _91.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.VersionInfo;
                    fromPartial(object: Partial<_91.VersionInfo>): _91.VersionInfo;
                    fromAmino(object: _91.VersionInfoAmino): _91.VersionInfo;
                    toAmino(message: _91.VersionInfo): _91.VersionInfoAmino;
                    fromAminoMsg(object: _91.VersionInfoAminoMsg): _91.VersionInfo;
                    toAminoMsg(message: _91.VersionInfo): _91.VersionInfoAminoMsg;
                    fromProtoMsg(message: _91.VersionInfoProtoMsg): _91.VersionInfo;
                    toProto(message: _91.VersionInfo): Uint8Array;
                    toProtoMsg(message: _91.VersionInfo): _91.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _91.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.Module;
                    fromPartial(object: Partial<_91.Module>): _91.Module;
                    fromAmino(object: _91.ModuleAmino): _91.Module;
                    toAmino(message: _91.Module): _91.ModuleAmino;
                    fromAminoMsg(object: _91.ModuleAminoMsg): _91.Module;
                    toAminoMsg(message: _91.Module): _91.ModuleAminoMsg;
                    fromProtoMsg(message: _91.ModuleProtoMsg): _91.Module;
                    toProto(message: _91.Module): Uint8Array;
                    toProtoMsg(message: _91.Module): _91.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _92.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.Coin;
                fromPartial(object: Partial<_92.Coin>): _92.Coin;
                fromAmino(object: _92.CoinAmino): _92.Coin;
                toAmino(message: _92.Coin): _92.CoinAmino;
                fromAminoMsg(object: _92.CoinAminoMsg): _92.Coin;
                toAminoMsg(message: _92.Coin): _92.CoinAminoMsg;
                fromProtoMsg(message: _92.CoinProtoMsg): _92.Coin;
                toProto(message: _92.Coin): Uint8Array;
                toProtoMsg(message: _92.Coin): _92.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _92.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.DecCoin;
                fromPartial(object: Partial<_92.DecCoin>): _92.DecCoin;
                fromAmino(object: _92.DecCoinAmino): _92.DecCoin;
                toAmino(message: _92.DecCoin): _92.DecCoinAmino;
                fromAminoMsg(object: _92.DecCoinAminoMsg): _92.DecCoin;
                toAminoMsg(message: _92.DecCoin): _92.DecCoinAminoMsg;
                fromProtoMsg(message: _92.DecCoinProtoMsg): _92.DecCoin;
                toProto(message: _92.DecCoin): Uint8Array;
                toProtoMsg(message: _92.DecCoin): _92.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _92.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.IntProto;
                fromPartial(object: Partial<_92.IntProto>): _92.IntProto;
                fromAmino(object: _92.IntProtoAmino): _92.IntProto;
                toAmino(message: _92.IntProto): _92.IntProtoAmino;
                fromAminoMsg(object: _92.IntProtoAminoMsg): _92.IntProto;
                toAminoMsg(message: _92.IntProto): _92.IntProtoAminoMsg;
                fromProtoMsg(message: _92.IntProtoProtoMsg): _92.IntProto;
                toProto(message: _92.IntProto): Uint8Array;
                toProtoMsg(message: _92.IntProto): _92.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _92.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.DecProto;
                fromPartial(object: Partial<_92.DecProto>): _92.DecProto;
                fromAmino(object: _92.DecProtoAmino): _92.DecProto;
                toAmino(message: _92.DecProto): _92.DecProtoAmino;
                fromAminoMsg(object: _92.DecProtoAminoMsg): _92.DecProto;
                toAminoMsg(message: _92.DecProto): _92.DecProtoAminoMsg;
                fromProtoMsg(message: _92.DecProtoProtoMsg): _92.DecProto;
                toProto(message: _92.DecProto): Uint8Array;
                toProtoMsg(message: _92.DecProto): _92.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _94.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.GenesisOwners;
                fromPartial(object: Partial<_94.GenesisOwners>): _94.GenesisOwners;
                fromAmino(object: _94.GenesisOwnersAmino): _94.GenesisOwners;
                toAmino(message: _94.GenesisOwners): _94.GenesisOwnersAmino;
                fromAminoMsg(object: _94.GenesisOwnersAminoMsg): _94.GenesisOwners;
                toAminoMsg(message: _94.GenesisOwners): _94.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _94.GenesisOwnersProtoMsg): _94.GenesisOwners;
                toProto(message: _94.GenesisOwners): Uint8Array;
                toProtoMsg(message: _94.GenesisOwners): _94.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _94.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.GenesisState;
                fromPartial(object: Partial<_94.GenesisState>): _94.GenesisState;
                fromAmino(object: _94.GenesisStateAmino): _94.GenesisState;
                toAmino(message: _94.GenesisState): _94.GenesisStateAmino;
                fromAminoMsg(object: _94.GenesisStateAminoMsg): _94.GenesisState;
                toAminoMsg(message: _94.GenesisState): _94.GenesisStateAminoMsg;
                fromProtoMsg(message: _94.GenesisStateProtoMsg): _94.GenesisState;
                toProto(message: _94.GenesisState): Uint8Array;
                toProtoMsg(message: _94.GenesisState): _94.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _93.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Capability;
                fromPartial(object: Partial<_93.Capability>): _93.Capability;
                fromAmino(object: _93.CapabilityAmino): _93.Capability;
                toAmino(message: _93.Capability): _93.CapabilityAmino;
                fromAminoMsg(object: _93.CapabilityAminoMsg): _93.Capability;
                toAminoMsg(message: _93.Capability): _93.CapabilityAminoMsg;
                fromProtoMsg(message: _93.CapabilityProtoMsg): _93.Capability;
                toProto(message: _93.Capability): Uint8Array;
                toProtoMsg(message: _93.Capability): _93.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _93.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Owner;
                fromPartial(object: Partial<_93.Owner>): _93.Owner;
                fromAmino(object: _93.OwnerAmino): _93.Owner;
                toAmino(message: _93.Owner): _93.OwnerAmino;
                fromAminoMsg(object: _93.OwnerAminoMsg): _93.Owner;
                toAminoMsg(message: _93.Owner): _93.OwnerAminoMsg;
                fromProtoMsg(message: _93.OwnerProtoMsg): _93.Owner;
                toProto(message: _93.Owner): Uint8Array;
                toProtoMsg(message: _93.Owner): _93.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _93.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.CapabilityOwners;
                fromPartial(object: Partial<_93.CapabilityOwners>): _93.CapabilityOwners;
                fromAmino(object: _93.CapabilityOwnersAmino): _93.CapabilityOwners;
                toAmino(message: _93.CapabilityOwners): _93.CapabilityOwnersAmino;
                fromAminoMsg(object: _93.CapabilityOwnersAminoMsg): _93.CapabilityOwners;
                toAminoMsg(message: _93.CapabilityOwners): _93.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _93.CapabilityOwnersProtoMsg): _93.CapabilityOwners;
                toProto(message: _93.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _93.CapabilityOwners): _93.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _239.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _96.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _96.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _96.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _96.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _96.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _96.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _96.MsgVerifyInvariant) => _96.MsgVerifyInvariantAmino;
                    fromAmino: (object: _96.MsgVerifyInvariantAmino) => _96.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _96.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.MsgVerifyInvariant;
                fromPartial(object: Partial<_96.MsgVerifyInvariant>): _96.MsgVerifyInvariant;
                fromAmino(object: _96.MsgVerifyInvariantAmino): _96.MsgVerifyInvariant;
                toAmino(message: _96.MsgVerifyInvariant): _96.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _96.MsgVerifyInvariantAminoMsg): _96.MsgVerifyInvariant;
                toAminoMsg(message: _96.MsgVerifyInvariant): _96.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _96.MsgVerifyInvariantProtoMsg): _96.MsgVerifyInvariant;
                toProto(message: _96.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _96.MsgVerifyInvariant): _96.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _96.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _96.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_96.MsgVerifyInvariantResponse>): _96.MsgVerifyInvariantResponse;
                fromAmino(_: _96.MsgVerifyInvariantResponseAmino): _96.MsgVerifyInvariantResponse;
                toAmino(_: _96.MsgVerifyInvariantResponse): _96.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _96.MsgVerifyInvariantResponseAminoMsg): _96.MsgVerifyInvariantResponse;
                toAminoMsg(message: _96.MsgVerifyInvariantResponse): _96.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _96.MsgVerifyInvariantResponseProtoMsg): _96.MsgVerifyInvariantResponse;
                toProto(message: _96.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _96.MsgVerifyInvariantResponse): _96.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _95.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.GenesisState;
                fromPartial(object: Partial<_95.GenesisState>): _95.GenesisState;
                fromAmino(object: _95.GenesisStateAmino): _95.GenesisState;
                toAmino(message: _95.GenesisState): _95.GenesisStateAmino;
                fromAminoMsg(object: _95.GenesisStateAminoMsg): _95.GenesisState;
                toAminoMsg(message: _95.GenesisState): _95.GenesisStateAminoMsg;
                fromProtoMsg(message: _95.GenesisStateProtoMsg): _95.GenesisState;
                toProto(message: _95.GenesisState): Uint8Array;
                toProtoMsg(message: _95.GenesisState): _95.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _97.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.PubKey;
                fromPartial(object: Partial<_97.PubKey>): _97.PubKey;
                fromAmino(object: _97.PubKeyAmino): _97.PubKey;
                toAmino(message: _97.PubKey): _97.PubKeyAmino;
                fromAminoMsg(object: _97.PubKeyAminoMsg): _97.PubKey;
                toAminoMsg(message: _97.PubKey): _97.PubKeyAminoMsg;
                fromProtoMsg(message: _97.PubKeyProtoMsg): _97.PubKey;
                toProto(message: _97.PubKey): Uint8Array;
                toProtoMsg(message: _97.PubKey): _97.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _97.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.PrivKey;
                fromPartial(object: Partial<_97.PrivKey>): _97.PrivKey;
                fromAmino(object: _97.PrivKeyAmino): _97.PrivKey;
                toAmino(message: _97.PrivKey): _97.PrivKeyAmino;
                fromAminoMsg(object: _97.PrivKeyAminoMsg): _97.PrivKey;
                toAminoMsg(message: _97.PrivKey): _97.PrivKeyAminoMsg;
                fromProtoMsg(message: _97.PrivKeyProtoMsg): _97.PrivKey;
                toProto(message: _97.PrivKey): Uint8Array;
                toProtoMsg(message: _97.PrivKey): _97.PrivKeyProtoMsg;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _98.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.LegacyAminoPubKey;
                fromPartial(object: Partial<_98.LegacyAminoPubKey>): _98.LegacyAminoPubKey;
                fromAmino(object: _98.LegacyAminoPubKeyAmino): _98.LegacyAminoPubKey;
                toAmino(message: _98.LegacyAminoPubKey): _98.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _98.LegacyAminoPubKeyAminoMsg): _98.LegacyAminoPubKey;
                toAminoMsg(message: _98.LegacyAminoPubKey): _98.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _98.LegacyAminoPubKeyProtoMsg): _98.LegacyAminoPubKey;
                toProto(message: _98.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _98.LegacyAminoPubKey): _98.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _99.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.PubKey;
                fromPartial(object: Partial<_99.PubKey>): _99.PubKey;
                fromAmino(object: _99.PubKeyAmino): _99.PubKey;
                toAmino(message: _99.PubKey): _99.PubKeyAmino;
                fromAminoMsg(object: _99.PubKeyAminoMsg): _99.PubKey;
                toAminoMsg(message: _99.PubKey): _99.PubKeyAminoMsg;
                fromProtoMsg(message: _99.PubKeyProtoMsg): _99.PubKey;
                toProto(message: _99.PubKey): Uint8Array;
                toProtoMsg(message: _99.PubKey): _99.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _99.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.PrivKey;
                fromPartial(object: Partial<_99.PrivKey>): _99.PrivKey;
                fromAmino(object: _99.PrivKeyAmino): _99.PrivKey;
                toAmino(message: _99.PrivKey): _99.PrivKeyAmino;
                fromAminoMsg(object: _99.PrivKeyAminoMsg): _99.PrivKey;
                toAminoMsg(message: _99.PrivKey): _99.PrivKeyAminoMsg;
                fromProtoMsg(message: _99.PrivKeyProtoMsg): _99.PrivKey;
                toProto(message: _99.PrivKey): Uint8Array;
                toProtoMsg(message: _99.PrivKey): _99.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
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
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _240.MsgClientImpl;
            QueryClientImpl: typeof _227.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                validatorOutstandingRewards(request: _103.QueryValidatorOutstandingRewardsRequest): Promise<_103.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _103.QueryValidatorCommissionRequest): Promise<_103.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _103.QueryValidatorSlashesRequest): Promise<_103.QueryValidatorSlashesResponse>;
                delegationRewards(request: _103.QueryDelegationRewardsRequest): Promise<_103.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _103.QueryDelegationTotalRewardsRequest): Promise<_103.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _103.QueryDelegatorValidatorsRequest): Promise<_103.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _103.QueryDelegatorWithdrawAddressRequest): Promise<_103.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _103.QueryCommunityPoolRequest): Promise<_103.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _212.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _104.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _104.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _104.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _104.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _104.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _104.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _104.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _104.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _104.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _104.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _104.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _104.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _104.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _104.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _104.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _104.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _104.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _104.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _104.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _104.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _104.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _104.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _104.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _104.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _104.MsgSetWithdrawAddress) => _104.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _104.MsgSetWithdrawAddressAmino) => _104.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _104.MsgWithdrawDelegatorReward) => _104.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _104.MsgWithdrawDelegatorRewardAmino) => _104.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _104.MsgWithdrawValidatorCommission) => _104.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _104.MsgWithdrawValidatorCommissionAmino) => _104.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _104.MsgFundCommunityPool) => _104.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _104.MsgFundCommunityPoolAmino) => _104.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _104.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_104.MsgSetWithdrawAddress>): _104.MsgSetWithdrawAddress;
                fromAmino(object: _104.MsgSetWithdrawAddressAmino): _104.MsgSetWithdrawAddress;
                toAmino(message: _104.MsgSetWithdrawAddress): _104.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _104.MsgSetWithdrawAddressAminoMsg): _104.MsgSetWithdrawAddress;
                toAminoMsg(message: _104.MsgSetWithdrawAddress): _104.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _104.MsgSetWithdrawAddressProtoMsg): _104.MsgSetWithdrawAddress;
                toProto(message: _104.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _104.MsgSetWithdrawAddress): _104.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _104.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_104.MsgSetWithdrawAddressResponse>): _104.MsgSetWithdrawAddressResponse;
                fromAmino(_: _104.MsgSetWithdrawAddressResponseAmino): _104.MsgSetWithdrawAddressResponse;
                toAmino(_: _104.MsgSetWithdrawAddressResponse): _104.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _104.MsgSetWithdrawAddressResponseAminoMsg): _104.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _104.MsgSetWithdrawAddressResponse): _104.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _104.MsgSetWithdrawAddressResponseProtoMsg): _104.MsgSetWithdrawAddressResponse;
                toProto(message: _104.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _104.MsgSetWithdrawAddressResponse): _104.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _104.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_104.MsgWithdrawDelegatorReward>): _104.MsgWithdrawDelegatorReward;
                fromAmino(object: _104.MsgWithdrawDelegatorRewardAmino): _104.MsgWithdrawDelegatorReward;
                toAmino(message: _104.MsgWithdrawDelegatorReward): _104.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _104.MsgWithdrawDelegatorRewardAminoMsg): _104.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _104.MsgWithdrawDelegatorReward): _104.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _104.MsgWithdrawDelegatorRewardProtoMsg): _104.MsgWithdrawDelegatorReward;
                toProto(message: _104.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _104.MsgWithdrawDelegatorReward): _104.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _104.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_104.MsgWithdrawDelegatorRewardResponse>): _104.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _104.MsgWithdrawDelegatorRewardResponseAmino): _104.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _104.MsgWithdrawDelegatorRewardResponse): _104.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _104.MsgWithdrawDelegatorRewardResponseAminoMsg): _104.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _104.MsgWithdrawDelegatorRewardResponse): _104.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _104.MsgWithdrawDelegatorRewardResponseProtoMsg): _104.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _104.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _104.MsgWithdrawDelegatorRewardResponse): _104.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _104.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_104.MsgWithdrawValidatorCommission>): _104.MsgWithdrawValidatorCommission;
                fromAmino(object: _104.MsgWithdrawValidatorCommissionAmino): _104.MsgWithdrawValidatorCommission;
                toAmino(message: _104.MsgWithdrawValidatorCommission): _104.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _104.MsgWithdrawValidatorCommissionAminoMsg): _104.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _104.MsgWithdrawValidatorCommission): _104.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _104.MsgWithdrawValidatorCommissionProtoMsg): _104.MsgWithdrawValidatorCommission;
                toProto(message: _104.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _104.MsgWithdrawValidatorCommission): _104.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _104.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_104.MsgWithdrawValidatorCommissionResponse>): _104.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _104.MsgWithdrawValidatorCommissionResponseAmino): _104.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _104.MsgWithdrawValidatorCommissionResponse): _104.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _104.MsgWithdrawValidatorCommissionResponseAminoMsg): _104.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _104.MsgWithdrawValidatorCommissionResponse): _104.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _104.MsgWithdrawValidatorCommissionResponseProtoMsg): _104.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _104.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _104.MsgWithdrawValidatorCommissionResponse): _104.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _104.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgFundCommunityPool;
                fromPartial(object: Partial<_104.MsgFundCommunityPool>): _104.MsgFundCommunityPool;
                fromAmino(object: _104.MsgFundCommunityPoolAmino): _104.MsgFundCommunityPool;
                toAmino(message: _104.MsgFundCommunityPool): _104.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _104.MsgFundCommunityPoolAminoMsg): _104.MsgFundCommunityPool;
                toAminoMsg(message: _104.MsgFundCommunityPool): _104.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _104.MsgFundCommunityPoolProtoMsg): _104.MsgFundCommunityPool;
                toProto(message: _104.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _104.MsgFundCommunityPool): _104.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _104.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_104.MsgFundCommunityPoolResponse>): _104.MsgFundCommunityPoolResponse;
                fromAmino(_: _104.MsgFundCommunityPoolResponseAmino): _104.MsgFundCommunityPoolResponse;
                toAmino(_: _104.MsgFundCommunityPoolResponse): _104.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _104.MsgFundCommunityPoolResponseAminoMsg): _104.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _104.MsgFundCommunityPoolResponse): _104.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _104.MsgFundCommunityPoolResponseProtoMsg): _104.MsgFundCommunityPoolResponse;
                toProto(message: _104.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _104.MsgFundCommunityPoolResponse): _104.MsgFundCommunityPoolResponseProtoMsg;
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
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _103.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_103.QueryValidatorOutstandingRewardsRequest>): _103.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _103.QueryValidatorOutstandingRewardsRequestAmino): _103.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _103.QueryValidatorOutstandingRewardsRequest): _103.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _103.QueryValidatorOutstandingRewardsRequestAminoMsg): _103.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _103.QueryValidatorOutstandingRewardsRequest): _103.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _103.QueryValidatorOutstandingRewardsRequestProtoMsg): _103.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _103.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _103.QueryValidatorOutstandingRewardsRequest): _103.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _103.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_103.QueryValidatorOutstandingRewardsResponse>): _103.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _103.QueryValidatorOutstandingRewardsResponseAmino): _103.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _103.QueryValidatorOutstandingRewardsResponse): _103.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _103.QueryValidatorOutstandingRewardsResponseAminoMsg): _103.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _103.QueryValidatorOutstandingRewardsResponse): _103.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _103.QueryValidatorOutstandingRewardsResponseProtoMsg): _103.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _103.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _103.QueryValidatorOutstandingRewardsResponse): _103.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _103.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_103.QueryValidatorCommissionRequest>): _103.QueryValidatorCommissionRequest;
                fromAmino(object: _103.QueryValidatorCommissionRequestAmino): _103.QueryValidatorCommissionRequest;
                toAmino(message: _103.QueryValidatorCommissionRequest): _103.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _103.QueryValidatorCommissionRequestAminoMsg): _103.QueryValidatorCommissionRequest;
                toAminoMsg(message: _103.QueryValidatorCommissionRequest): _103.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _103.QueryValidatorCommissionRequestProtoMsg): _103.QueryValidatorCommissionRequest;
                toProto(message: _103.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _103.QueryValidatorCommissionRequest): _103.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _103.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_103.QueryValidatorCommissionResponse>): _103.QueryValidatorCommissionResponse;
                fromAmino(object: _103.QueryValidatorCommissionResponseAmino): _103.QueryValidatorCommissionResponse;
                toAmino(message: _103.QueryValidatorCommissionResponse): _103.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _103.QueryValidatorCommissionResponseAminoMsg): _103.QueryValidatorCommissionResponse;
                toAminoMsg(message: _103.QueryValidatorCommissionResponse): _103.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _103.QueryValidatorCommissionResponseProtoMsg): _103.QueryValidatorCommissionResponse;
                toProto(message: _103.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _103.QueryValidatorCommissionResponse): _103.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _103.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_103.QueryValidatorSlashesRequest>): _103.QueryValidatorSlashesRequest;
                fromAmino(object: _103.QueryValidatorSlashesRequestAmino): _103.QueryValidatorSlashesRequest;
                toAmino(message: _103.QueryValidatorSlashesRequest): _103.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _103.QueryValidatorSlashesRequestAminoMsg): _103.QueryValidatorSlashesRequest;
                toAminoMsg(message: _103.QueryValidatorSlashesRequest): _103.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _103.QueryValidatorSlashesRequestProtoMsg): _103.QueryValidatorSlashesRequest;
                toProto(message: _103.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _103.QueryValidatorSlashesRequest): _103.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _103.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_103.QueryValidatorSlashesResponse>): _103.QueryValidatorSlashesResponse;
                fromAmino(object: _103.QueryValidatorSlashesResponseAmino): _103.QueryValidatorSlashesResponse;
                toAmino(message: _103.QueryValidatorSlashesResponse): _103.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _103.QueryValidatorSlashesResponseAminoMsg): _103.QueryValidatorSlashesResponse;
                toAminoMsg(message: _103.QueryValidatorSlashesResponse): _103.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _103.QueryValidatorSlashesResponseProtoMsg): _103.QueryValidatorSlashesResponse;
                toProto(message: _103.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _103.QueryValidatorSlashesResponse): _103.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _103.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_103.QueryDelegationRewardsRequest>): _103.QueryDelegationRewardsRequest;
                fromAmino(object: _103.QueryDelegationRewardsRequestAmino): _103.QueryDelegationRewardsRequest;
                toAmino(message: _103.QueryDelegationRewardsRequest): _103.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _103.QueryDelegationRewardsRequestAminoMsg): _103.QueryDelegationRewardsRequest;
                toAminoMsg(message: _103.QueryDelegationRewardsRequest): _103.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _103.QueryDelegationRewardsRequestProtoMsg): _103.QueryDelegationRewardsRequest;
                toProto(message: _103.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _103.QueryDelegationRewardsRequest): _103.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _103.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_103.QueryDelegationRewardsResponse>): _103.QueryDelegationRewardsResponse;
                fromAmino(object: _103.QueryDelegationRewardsResponseAmino): _103.QueryDelegationRewardsResponse;
                toAmino(message: _103.QueryDelegationRewardsResponse): _103.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _103.QueryDelegationRewardsResponseAminoMsg): _103.QueryDelegationRewardsResponse;
                toAminoMsg(message: _103.QueryDelegationRewardsResponse): _103.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _103.QueryDelegationRewardsResponseProtoMsg): _103.QueryDelegationRewardsResponse;
                toProto(message: _103.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _103.QueryDelegationRewardsResponse): _103.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _103.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_103.QueryDelegationTotalRewardsRequest>): _103.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _103.QueryDelegationTotalRewardsRequestAmino): _103.QueryDelegationTotalRewardsRequest;
                toAmino(message: _103.QueryDelegationTotalRewardsRequest): _103.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _103.QueryDelegationTotalRewardsRequestAminoMsg): _103.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _103.QueryDelegationTotalRewardsRequest): _103.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _103.QueryDelegationTotalRewardsRequestProtoMsg): _103.QueryDelegationTotalRewardsRequest;
                toProto(message: _103.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _103.QueryDelegationTotalRewardsRequest): _103.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _103.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_103.QueryDelegationTotalRewardsResponse>): _103.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _103.QueryDelegationTotalRewardsResponseAmino): _103.QueryDelegationTotalRewardsResponse;
                toAmino(message: _103.QueryDelegationTotalRewardsResponse): _103.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _103.QueryDelegationTotalRewardsResponseAminoMsg): _103.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _103.QueryDelegationTotalRewardsResponse): _103.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _103.QueryDelegationTotalRewardsResponseProtoMsg): _103.QueryDelegationTotalRewardsResponse;
                toProto(message: _103.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _103.QueryDelegationTotalRewardsResponse): _103.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _103.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_103.QueryDelegatorValidatorsRequest>): _103.QueryDelegatorValidatorsRequest;
                fromAmino(object: _103.QueryDelegatorValidatorsRequestAmino): _103.QueryDelegatorValidatorsRequest;
                toAmino(message: _103.QueryDelegatorValidatorsRequest): _103.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _103.QueryDelegatorValidatorsRequestAminoMsg): _103.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _103.QueryDelegatorValidatorsRequest): _103.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _103.QueryDelegatorValidatorsRequestProtoMsg): _103.QueryDelegatorValidatorsRequest;
                toProto(message: _103.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _103.QueryDelegatorValidatorsRequest): _103.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _103.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_103.QueryDelegatorValidatorsResponse>): _103.QueryDelegatorValidatorsResponse;
                fromAmino(object: _103.QueryDelegatorValidatorsResponseAmino): _103.QueryDelegatorValidatorsResponse;
                toAmino(message: _103.QueryDelegatorValidatorsResponse): _103.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _103.QueryDelegatorValidatorsResponseAminoMsg): _103.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _103.QueryDelegatorValidatorsResponse): _103.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _103.QueryDelegatorValidatorsResponseProtoMsg): _103.QueryDelegatorValidatorsResponse;
                toProto(message: _103.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _103.QueryDelegatorValidatorsResponse): _103.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _103.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_103.QueryDelegatorWithdrawAddressRequest>): _103.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _103.QueryDelegatorWithdrawAddressRequestAmino): _103.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _103.QueryDelegatorWithdrawAddressRequest): _103.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _103.QueryDelegatorWithdrawAddressRequestAminoMsg): _103.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _103.QueryDelegatorWithdrawAddressRequest): _103.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _103.QueryDelegatorWithdrawAddressRequestProtoMsg): _103.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _103.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _103.QueryDelegatorWithdrawAddressRequest): _103.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _103.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_103.QueryDelegatorWithdrawAddressResponse>): _103.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _103.QueryDelegatorWithdrawAddressResponseAmino): _103.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _103.QueryDelegatorWithdrawAddressResponse): _103.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _103.QueryDelegatorWithdrawAddressResponseAminoMsg): _103.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _103.QueryDelegatorWithdrawAddressResponse): _103.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _103.QueryDelegatorWithdrawAddressResponseProtoMsg): _103.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _103.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _103.QueryDelegatorWithdrawAddressResponse): _103.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _103.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_103.QueryCommunityPoolRequest>): _103.QueryCommunityPoolRequest;
                fromAmino(_: _103.QueryCommunityPoolRequestAmino): _103.QueryCommunityPoolRequest;
                toAmino(_: _103.QueryCommunityPoolRequest): _103.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _103.QueryCommunityPoolRequestAminoMsg): _103.QueryCommunityPoolRequest;
                toAminoMsg(message: _103.QueryCommunityPoolRequest): _103.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _103.QueryCommunityPoolRequestProtoMsg): _103.QueryCommunityPoolRequest;
                toProto(message: _103.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _103.QueryCommunityPoolRequest): _103.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _103.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_103.QueryCommunityPoolResponse>): _103.QueryCommunityPoolResponse;
                fromAmino(object: _103.QueryCommunityPoolResponseAmino): _103.QueryCommunityPoolResponse;
                toAmino(message: _103.QueryCommunityPoolResponse): _103.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _103.QueryCommunityPoolResponseAminoMsg): _103.QueryCommunityPoolResponse;
                toAminoMsg(message: _103.QueryCommunityPoolResponse): _103.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _103.QueryCommunityPoolResponseProtoMsg): _103.QueryCommunityPoolResponse;
                toProto(message: _103.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _103.QueryCommunityPoolResponse): _103.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _102.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_102.DelegatorWithdrawInfo>): _102.DelegatorWithdrawInfo;
                fromAmino(object: _102.DelegatorWithdrawInfoAmino): _102.DelegatorWithdrawInfo;
                toAmino(message: _102.DelegatorWithdrawInfo): _102.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _102.DelegatorWithdrawInfoAminoMsg): _102.DelegatorWithdrawInfo;
                toAminoMsg(message: _102.DelegatorWithdrawInfo): _102.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _102.DelegatorWithdrawInfoProtoMsg): _102.DelegatorWithdrawInfo;
                toProto(message: _102.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _102.DelegatorWithdrawInfo): _102.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _102.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_102.ValidatorOutstandingRewardsRecord>): _102.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _102.ValidatorOutstandingRewardsRecordAmino): _102.ValidatorOutstandingRewardsRecord;
                toAmino(message: _102.ValidatorOutstandingRewardsRecord): _102.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _102.ValidatorOutstandingRewardsRecordAminoMsg): _102.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _102.ValidatorOutstandingRewardsRecord): _102.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _102.ValidatorOutstandingRewardsRecordProtoMsg): _102.ValidatorOutstandingRewardsRecord;
                toProto(message: _102.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _102.ValidatorOutstandingRewardsRecord): _102.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _102.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_102.ValidatorAccumulatedCommissionRecord>): _102.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _102.ValidatorAccumulatedCommissionRecordAmino): _102.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _102.ValidatorAccumulatedCommissionRecord): _102.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _102.ValidatorAccumulatedCommissionRecordAminoMsg): _102.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _102.ValidatorAccumulatedCommissionRecord): _102.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _102.ValidatorAccumulatedCommissionRecordProtoMsg): _102.ValidatorAccumulatedCommissionRecord;
                toProto(message: _102.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _102.ValidatorAccumulatedCommissionRecord): _102.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _102.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_102.ValidatorHistoricalRewardsRecord>): _102.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _102.ValidatorHistoricalRewardsRecordAmino): _102.ValidatorHistoricalRewardsRecord;
                toAmino(message: _102.ValidatorHistoricalRewardsRecord): _102.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _102.ValidatorHistoricalRewardsRecordAminoMsg): _102.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _102.ValidatorHistoricalRewardsRecord): _102.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _102.ValidatorHistoricalRewardsRecordProtoMsg): _102.ValidatorHistoricalRewardsRecord;
                toProto(message: _102.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _102.ValidatorHistoricalRewardsRecord): _102.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _102.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_102.ValidatorCurrentRewardsRecord>): _102.ValidatorCurrentRewardsRecord;
                fromAmino(object: _102.ValidatorCurrentRewardsRecordAmino): _102.ValidatorCurrentRewardsRecord;
                toAmino(message: _102.ValidatorCurrentRewardsRecord): _102.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _102.ValidatorCurrentRewardsRecordAminoMsg): _102.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _102.ValidatorCurrentRewardsRecord): _102.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _102.ValidatorCurrentRewardsRecordProtoMsg): _102.ValidatorCurrentRewardsRecord;
                toProto(message: _102.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _102.ValidatorCurrentRewardsRecord): _102.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _102.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_102.DelegatorStartingInfoRecord>): _102.DelegatorStartingInfoRecord;
                fromAmino(object: _102.DelegatorStartingInfoRecordAmino): _102.DelegatorStartingInfoRecord;
                toAmino(message: _102.DelegatorStartingInfoRecord): _102.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _102.DelegatorStartingInfoRecordAminoMsg): _102.DelegatorStartingInfoRecord;
                toAminoMsg(message: _102.DelegatorStartingInfoRecord): _102.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _102.DelegatorStartingInfoRecordProtoMsg): _102.DelegatorStartingInfoRecord;
                toProto(message: _102.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _102.DelegatorStartingInfoRecord): _102.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _102.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_102.ValidatorSlashEventRecord>): _102.ValidatorSlashEventRecord;
                fromAmino(object: _102.ValidatorSlashEventRecordAmino): _102.ValidatorSlashEventRecord;
                toAmino(message: _102.ValidatorSlashEventRecord): _102.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _102.ValidatorSlashEventRecordAminoMsg): _102.ValidatorSlashEventRecord;
                toAminoMsg(message: _102.ValidatorSlashEventRecord): _102.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _102.ValidatorSlashEventRecordProtoMsg): _102.ValidatorSlashEventRecord;
                toProto(message: _102.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _102.ValidatorSlashEventRecord): _102.ValidatorSlashEventRecordProtoMsg;
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
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _101.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_101.ValidatorHistoricalRewards>): _101.ValidatorHistoricalRewards;
                fromAmino(object: _101.ValidatorHistoricalRewardsAmino): _101.ValidatorHistoricalRewards;
                toAmino(message: _101.ValidatorHistoricalRewards): _101.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _101.ValidatorHistoricalRewardsAminoMsg): _101.ValidatorHistoricalRewards;
                toAminoMsg(message: _101.ValidatorHistoricalRewards): _101.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _101.ValidatorHistoricalRewardsProtoMsg): _101.ValidatorHistoricalRewards;
                toProto(message: _101.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _101.ValidatorHistoricalRewards): _101.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _101.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.ValidatorCurrentRewards;
                fromPartial(object: Partial<_101.ValidatorCurrentRewards>): _101.ValidatorCurrentRewards;
                fromAmino(object: _101.ValidatorCurrentRewardsAmino): _101.ValidatorCurrentRewards;
                toAmino(message: _101.ValidatorCurrentRewards): _101.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _101.ValidatorCurrentRewardsAminoMsg): _101.ValidatorCurrentRewards;
                toAminoMsg(message: _101.ValidatorCurrentRewards): _101.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _101.ValidatorCurrentRewardsProtoMsg): _101.ValidatorCurrentRewards;
                toProto(message: _101.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _101.ValidatorCurrentRewards): _101.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _101.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_101.ValidatorAccumulatedCommission>): _101.ValidatorAccumulatedCommission;
                fromAmino(object: _101.ValidatorAccumulatedCommissionAmino): _101.ValidatorAccumulatedCommission;
                toAmino(message: _101.ValidatorAccumulatedCommission): _101.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _101.ValidatorAccumulatedCommissionAminoMsg): _101.ValidatorAccumulatedCommission;
                toAminoMsg(message: _101.ValidatorAccumulatedCommission): _101.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _101.ValidatorAccumulatedCommissionProtoMsg): _101.ValidatorAccumulatedCommission;
                toProto(message: _101.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _101.ValidatorAccumulatedCommission): _101.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _101.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_101.ValidatorOutstandingRewards>): _101.ValidatorOutstandingRewards;
                fromAmino(object: _101.ValidatorOutstandingRewardsAmino): _101.ValidatorOutstandingRewards;
                toAmino(message: _101.ValidatorOutstandingRewards): _101.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _101.ValidatorOutstandingRewardsAminoMsg): _101.ValidatorOutstandingRewards;
                toAminoMsg(message: _101.ValidatorOutstandingRewards): _101.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _101.ValidatorOutstandingRewardsProtoMsg): _101.ValidatorOutstandingRewards;
                toProto(message: _101.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _101.ValidatorOutstandingRewards): _101.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _101.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.ValidatorSlashEvent;
                fromPartial(object: Partial<_101.ValidatorSlashEvent>): _101.ValidatorSlashEvent;
                fromAmino(object: _101.ValidatorSlashEventAmino): _101.ValidatorSlashEvent;
                toAmino(message: _101.ValidatorSlashEvent): _101.ValidatorSlashEventAmino;
                fromAminoMsg(object: _101.ValidatorSlashEventAminoMsg): _101.ValidatorSlashEvent;
                toAminoMsg(message: _101.ValidatorSlashEvent): _101.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _101.ValidatorSlashEventProtoMsg): _101.ValidatorSlashEvent;
                toProto(message: _101.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _101.ValidatorSlashEvent): _101.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _101.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.ValidatorSlashEvents;
                fromPartial(object: Partial<_101.ValidatorSlashEvents>): _101.ValidatorSlashEvents;
                fromAmino(object: _101.ValidatorSlashEventsAmino): _101.ValidatorSlashEvents;
                toAmino(message: _101.ValidatorSlashEvents): _101.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _101.ValidatorSlashEventsAminoMsg): _101.ValidatorSlashEvents;
                toAminoMsg(message: _101.ValidatorSlashEvents): _101.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _101.ValidatorSlashEventsProtoMsg): _101.ValidatorSlashEvents;
                toProto(message: _101.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _101.ValidatorSlashEvents): _101.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _101.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.FeePool;
                fromPartial(object: Partial<_101.FeePool>): _101.FeePool;
                fromAmino(object: _101.FeePoolAmino): _101.FeePool;
                toAmino(message: _101.FeePool): _101.FeePoolAmino;
                fromAminoMsg(object: _101.FeePoolAminoMsg): _101.FeePool;
                toAminoMsg(message: _101.FeePool): _101.FeePoolAminoMsg;
                fromProtoMsg(message: _101.FeePoolProtoMsg): _101.FeePool;
                toProto(message: _101.FeePool): Uint8Array;
                toProtoMsg(message: _101.FeePool): _101.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _101.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_101.CommunityPoolSpendProposal>): _101.CommunityPoolSpendProposal;
                fromAmino(object: _101.CommunityPoolSpendProposalAmino): _101.CommunityPoolSpendProposal;
                toAmino(message: _101.CommunityPoolSpendProposal): _101.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _101.CommunityPoolSpendProposalAminoMsg): _101.CommunityPoolSpendProposal;
                toAminoMsg(message: _101.CommunityPoolSpendProposal): _101.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _101.CommunityPoolSpendProposalProtoMsg): _101.CommunityPoolSpendProposal;
                toProto(message: _101.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _101.CommunityPoolSpendProposal): _101.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _101.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.DelegatorStartingInfo;
                fromPartial(object: Partial<_101.DelegatorStartingInfo>): _101.DelegatorStartingInfo;
                fromAmino(object: _101.DelegatorStartingInfoAmino): _101.DelegatorStartingInfo;
                toAmino(message: _101.DelegatorStartingInfo): _101.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _101.DelegatorStartingInfoAminoMsg): _101.DelegatorStartingInfo;
                toAminoMsg(message: _101.DelegatorStartingInfo): _101.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _101.DelegatorStartingInfoProtoMsg): _101.DelegatorStartingInfo;
                toProto(message: _101.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _101.DelegatorStartingInfo): _101.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _101.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.DelegationDelegatorReward;
                fromPartial(object: Partial<_101.DelegationDelegatorReward>): _101.DelegationDelegatorReward;
                fromAmino(object: _101.DelegationDelegatorRewardAmino): _101.DelegationDelegatorReward;
                toAmino(message: _101.DelegationDelegatorReward): _101.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _101.DelegationDelegatorRewardAminoMsg): _101.DelegationDelegatorReward;
                toAminoMsg(message: _101.DelegationDelegatorReward): _101.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _101.DelegationDelegatorRewardProtoMsg): _101.DelegationDelegatorReward;
                toProto(message: _101.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _101.DelegationDelegatorReward): _101.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _101.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_101.CommunityPoolSpendProposalWithDeposit>): _101.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _101.CommunityPoolSpendProposalWithDepositAmino): _101.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _101.CommunityPoolSpendProposalWithDeposit): _101.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _101.CommunityPoolSpendProposalWithDepositAminoMsg): _101.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _101.CommunityPoolSpendProposalWithDeposit): _101.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _101.CommunityPoolSpendProposalWithDepositProtoMsg): _101.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _101.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _101.CommunityPoolSpendProposalWithDeposit): _101.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _241.MsgClientImpl;
            QueryClientImpl: typeof _228.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _107.QueryEvidenceRequest): Promise<_107.QueryEvidenceResponse>;
                allEvidence(request?: _107.QueryAllEvidenceRequest): Promise<_107.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _213.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _108.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _108.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _108.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _108.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _108.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _108.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _108.MsgSubmitEvidence) => _108.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _108.MsgSubmitEvidenceAmino) => _108.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _108.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.MsgSubmitEvidence;
                fromPartial(object: Partial<_108.MsgSubmitEvidence>): _108.MsgSubmitEvidence;
                fromAmino(object: _108.MsgSubmitEvidenceAmino): _108.MsgSubmitEvidence;
                toAmino(message: _108.MsgSubmitEvidence): _108.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _108.MsgSubmitEvidenceAminoMsg): _108.MsgSubmitEvidence;
                toAminoMsg(message: _108.MsgSubmitEvidence): _108.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _108.MsgSubmitEvidenceProtoMsg): _108.MsgSubmitEvidence;
                toProto(message: _108.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _108.MsgSubmitEvidence): _108.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _108.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_108.MsgSubmitEvidenceResponse>): _108.MsgSubmitEvidenceResponse;
                fromAmino(object: _108.MsgSubmitEvidenceResponseAmino): _108.MsgSubmitEvidenceResponse;
                toAmino(message: _108.MsgSubmitEvidenceResponse): _108.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _108.MsgSubmitEvidenceResponseAminoMsg): _108.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _108.MsgSubmitEvidenceResponse): _108.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _108.MsgSubmitEvidenceResponseProtoMsg): _108.MsgSubmitEvidenceResponse;
                toProto(message: _108.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _108.MsgSubmitEvidenceResponse): _108.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _107.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryEvidenceRequest;
                fromPartial(object: Partial<_107.QueryEvidenceRequest>): _107.QueryEvidenceRequest;
                fromAmino(object: _107.QueryEvidenceRequestAmino): _107.QueryEvidenceRequest;
                toAmino(message: _107.QueryEvidenceRequest): _107.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _107.QueryEvidenceRequestAminoMsg): _107.QueryEvidenceRequest;
                toAminoMsg(message: _107.QueryEvidenceRequest): _107.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _107.QueryEvidenceRequestProtoMsg): _107.QueryEvidenceRequest;
                toProto(message: _107.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _107.QueryEvidenceRequest): _107.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _107.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryEvidenceResponse;
                fromPartial(object: Partial<_107.QueryEvidenceResponse>): _107.QueryEvidenceResponse;
                fromAmino(object: _107.QueryEvidenceResponseAmino): _107.QueryEvidenceResponse;
                toAmino(message: _107.QueryEvidenceResponse): _107.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _107.QueryEvidenceResponseAminoMsg): _107.QueryEvidenceResponse;
                toAminoMsg(message: _107.QueryEvidenceResponse): _107.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _107.QueryEvidenceResponseProtoMsg): _107.QueryEvidenceResponse;
                toProto(message: _107.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _107.QueryEvidenceResponse): _107.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _107.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_107.QueryAllEvidenceRequest>): _107.QueryAllEvidenceRequest;
                fromAmino(object: _107.QueryAllEvidenceRequestAmino): _107.QueryAllEvidenceRequest;
                toAmino(message: _107.QueryAllEvidenceRequest): _107.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _107.QueryAllEvidenceRequestAminoMsg): _107.QueryAllEvidenceRequest;
                toAminoMsg(message: _107.QueryAllEvidenceRequest): _107.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _107.QueryAllEvidenceRequestProtoMsg): _107.QueryAllEvidenceRequest;
                toProto(message: _107.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _107.QueryAllEvidenceRequest): _107.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _107.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_107.QueryAllEvidenceResponse>): _107.QueryAllEvidenceResponse;
                fromAmino(object: _107.QueryAllEvidenceResponseAmino): _107.QueryAllEvidenceResponse;
                toAmino(message: _107.QueryAllEvidenceResponse): _107.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _107.QueryAllEvidenceResponseAminoMsg): _107.QueryAllEvidenceResponse;
                toAminoMsg(message: _107.QueryAllEvidenceResponse): _107.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _107.QueryAllEvidenceResponseProtoMsg): _107.QueryAllEvidenceResponse;
                toProto(message: _107.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _107.QueryAllEvidenceResponse): _107.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _105.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.Equivocation;
                fromPartial(object: Partial<_105.Equivocation>): _105.Equivocation;
                fromAmino(object: _105.EquivocationAmino): _105.Equivocation;
                toAmino(message: _105.Equivocation): _105.EquivocationAmino;
                fromAminoMsg(object: _105.EquivocationAminoMsg): _105.Equivocation;
                toAminoMsg(message: _105.Equivocation): _105.EquivocationAminoMsg;
                fromProtoMsg(message: _105.EquivocationProtoMsg): _105.Equivocation;
                toProto(message: _105.Equivocation): Uint8Array;
                toProtoMsg(message: _105.Equivocation): _105.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _242.MsgClientImpl;
            QueryClientImpl: typeof _229.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _111.QueryAllowanceRequest): Promise<_111.QueryAllowanceResponse>;
                allowances(request: _111.QueryAllowancesRequest): Promise<_111.QueryAllowancesResponse>;
                allowancesByGranter(request: _111.QueryAllowancesByGranterRequest): Promise<_111.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _214.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _112.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _112.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _112.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _112.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _112.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _112.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _112.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _112.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _112.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _112.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _112.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _112.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _112.MsgGrantAllowance) => _112.MsgGrantAllowanceAmino;
                    fromAmino: (object: _112.MsgGrantAllowanceAmino) => _112.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _112.MsgRevokeAllowance) => _112.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _112.MsgRevokeAllowanceAmino) => _112.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _112.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.MsgGrantAllowance;
                fromPartial(object: Partial<_112.MsgGrantAllowance>): _112.MsgGrantAllowance;
                fromAmino(object: _112.MsgGrantAllowanceAmino): _112.MsgGrantAllowance;
                toAmino(message: _112.MsgGrantAllowance): _112.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _112.MsgGrantAllowanceAminoMsg): _112.MsgGrantAllowance;
                toAminoMsg(message: _112.MsgGrantAllowance): _112.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _112.MsgGrantAllowanceProtoMsg): _112.MsgGrantAllowance;
                toProto(message: _112.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _112.MsgGrantAllowance): _112.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _112.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _112.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_112.MsgGrantAllowanceResponse>): _112.MsgGrantAllowanceResponse;
                fromAmino(_: _112.MsgGrantAllowanceResponseAmino): _112.MsgGrantAllowanceResponse;
                toAmino(_: _112.MsgGrantAllowanceResponse): _112.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _112.MsgGrantAllowanceResponseAminoMsg): _112.MsgGrantAllowanceResponse;
                toAminoMsg(message: _112.MsgGrantAllowanceResponse): _112.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _112.MsgGrantAllowanceResponseProtoMsg): _112.MsgGrantAllowanceResponse;
                toProto(message: _112.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _112.MsgGrantAllowanceResponse): _112.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _112.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.MsgRevokeAllowance;
                fromPartial(object: Partial<_112.MsgRevokeAllowance>): _112.MsgRevokeAllowance;
                fromAmino(object: _112.MsgRevokeAllowanceAmino): _112.MsgRevokeAllowance;
                toAmino(message: _112.MsgRevokeAllowance): _112.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _112.MsgRevokeAllowanceAminoMsg): _112.MsgRevokeAllowance;
                toAminoMsg(message: _112.MsgRevokeAllowance): _112.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _112.MsgRevokeAllowanceProtoMsg): _112.MsgRevokeAllowance;
                toProto(message: _112.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _112.MsgRevokeAllowance): _112.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _112.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _112.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_112.MsgRevokeAllowanceResponse>): _112.MsgRevokeAllowanceResponse;
                fromAmino(_: _112.MsgRevokeAllowanceResponseAmino): _112.MsgRevokeAllowanceResponse;
                toAmino(_: _112.MsgRevokeAllowanceResponse): _112.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _112.MsgRevokeAllowanceResponseAminoMsg): _112.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _112.MsgRevokeAllowanceResponse): _112.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _112.MsgRevokeAllowanceResponseProtoMsg): _112.MsgRevokeAllowanceResponse;
                toProto(message: _112.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _112.MsgRevokeAllowanceResponse): _112.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _109.BasicAllowance | _109.PeriodicAllowance | _109.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _111.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryAllowanceRequest;
                fromPartial(object: Partial<_111.QueryAllowanceRequest>): _111.QueryAllowanceRequest;
                fromAmino(object: _111.QueryAllowanceRequestAmino): _111.QueryAllowanceRequest;
                toAmino(message: _111.QueryAllowanceRequest): _111.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _111.QueryAllowanceRequestAminoMsg): _111.QueryAllowanceRequest;
                toAminoMsg(message: _111.QueryAllowanceRequest): _111.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _111.QueryAllowanceRequestProtoMsg): _111.QueryAllowanceRequest;
                toProto(message: _111.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _111.QueryAllowanceRequest): _111.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _111.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryAllowanceResponse;
                fromPartial(object: Partial<_111.QueryAllowanceResponse>): _111.QueryAllowanceResponse;
                fromAmino(object: _111.QueryAllowanceResponseAmino): _111.QueryAllowanceResponse;
                toAmino(message: _111.QueryAllowanceResponse): _111.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _111.QueryAllowanceResponseAminoMsg): _111.QueryAllowanceResponse;
                toAminoMsg(message: _111.QueryAllowanceResponse): _111.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _111.QueryAllowanceResponseProtoMsg): _111.QueryAllowanceResponse;
                toProto(message: _111.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _111.QueryAllowanceResponse): _111.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _111.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryAllowancesRequest;
                fromPartial(object: Partial<_111.QueryAllowancesRequest>): _111.QueryAllowancesRequest;
                fromAmino(object: _111.QueryAllowancesRequestAmino): _111.QueryAllowancesRequest;
                toAmino(message: _111.QueryAllowancesRequest): _111.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _111.QueryAllowancesRequestAminoMsg): _111.QueryAllowancesRequest;
                toAminoMsg(message: _111.QueryAllowancesRequest): _111.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _111.QueryAllowancesRequestProtoMsg): _111.QueryAllowancesRequest;
                toProto(message: _111.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _111.QueryAllowancesRequest): _111.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _111.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryAllowancesResponse;
                fromPartial(object: Partial<_111.QueryAllowancesResponse>): _111.QueryAllowancesResponse;
                fromAmino(object: _111.QueryAllowancesResponseAmino): _111.QueryAllowancesResponse;
                toAmino(message: _111.QueryAllowancesResponse): _111.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _111.QueryAllowancesResponseAminoMsg): _111.QueryAllowancesResponse;
                toAminoMsg(message: _111.QueryAllowancesResponse): _111.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _111.QueryAllowancesResponseProtoMsg): _111.QueryAllowancesResponse;
                toProto(message: _111.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _111.QueryAllowancesResponse): _111.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _111.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_111.QueryAllowancesByGranterRequest>): _111.QueryAllowancesByGranterRequest;
                fromAmino(object: _111.QueryAllowancesByGranterRequestAmino): _111.QueryAllowancesByGranterRequest;
                toAmino(message: _111.QueryAllowancesByGranterRequest): _111.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _111.QueryAllowancesByGranterRequestAminoMsg): _111.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _111.QueryAllowancesByGranterRequest): _111.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _111.QueryAllowancesByGranterRequestProtoMsg): _111.QueryAllowancesByGranterRequest;
                toProto(message: _111.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _111.QueryAllowancesByGranterRequest): _111.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _111.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_111.QueryAllowancesByGranterResponse>): _111.QueryAllowancesByGranterResponse;
                fromAmino(object: _111.QueryAllowancesByGranterResponseAmino): _111.QueryAllowancesByGranterResponse;
                toAmino(message: _111.QueryAllowancesByGranterResponse): _111.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _111.QueryAllowancesByGranterResponseAminoMsg): _111.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _111.QueryAllowancesByGranterResponse): _111.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _111.QueryAllowancesByGranterResponseProtoMsg): _111.QueryAllowancesByGranterResponse;
                toProto(message: _111.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _111.QueryAllowancesByGranterResponse): _111.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _109.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.BasicAllowance;
                fromPartial(object: Partial<_109.BasicAllowance>): _109.BasicAllowance;
                fromAmino(object: _109.BasicAllowanceAmino): _109.BasicAllowance;
                toAmino(message: _109.BasicAllowance): _109.BasicAllowanceAmino;
                fromAminoMsg(object: _109.BasicAllowanceAminoMsg): _109.BasicAllowance;
                toAminoMsg(message: _109.BasicAllowance): _109.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _109.BasicAllowanceProtoMsg): _109.BasicAllowance;
                toProto(message: _109.BasicAllowance): Uint8Array;
                toProtoMsg(message: _109.BasicAllowance): _109.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _109.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.PeriodicAllowance;
                fromPartial(object: Partial<_109.PeriodicAllowance>): _109.PeriodicAllowance;
                fromAmino(object: _109.PeriodicAllowanceAmino): _109.PeriodicAllowance;
                toAmino(message: _109.PeriodicAllowance): _109.PeriodicAllowanceAmino;
                fromAminoMsg(object: _109.PeriodicAllowanceAminoMsg): _109.PeriodicAllowance;
                toAminoMsg(message: _109.PeriodicAllowance): _109.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _109.PeriodicAllowanceProtoMsg): _109.PeriodicAllowance;
                toProto(message: _109.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _109.PeriodicAllowance): _109.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _109.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.AllowedMsgAllowance;
                fromPartial(object: Partial<_109.AllowedMsgAllowance>): _109.AllowedMsgAllowance;
                fromAmino(object: _109.AllowedMsgAllowanceAmino): _109.AllowedMsgAllowance;
                toAmino(message: _109.AllowedMsgAllowance): _109.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _109.AllowedMsgAllowanceAminoMsg): _109.AllowedMsgAllowance;
                toAminoMsg(message: _109.AllowedMsgAllowance): _109.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _109.AllowedMsgAllowanceProtoMsg): _109.AllowedMsgAllowance;
                toProto(message: _109.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _109.AllowedMsgAllowance): _109.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _109.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.Grant;
                fromPartial(object: Partial<_109.Grant>): _109.Grant;
                fromAmino(object: _109.GrantAmino): _109.Grant;
                toAmino(message: _109.Grant): _109.GrantAmino;
                fromAminoMsg(object: _109.GrantAminoMsg): _109.Grant;
                toAminoMsg(message: _109.Grant): _109.GrantAminoMsg;
                fromProtoMsg(message: _109.GrantProtoMsg): _109.Grant;
                toProto(message: _109.Grant): Uint8Array;
                toProtoMsg(message: _109.Grant): _109.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _243.MsgClientImpl;
            QueryClientImpl: typeof _230.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _116.QueryProposalRequest): Promise<_116.QueryProposalResponse>;
                proposals(request: _116.QueryProposalsRequest): Promise<_116.QueryProposalsResponse>;
                vote(request: _116.QueryVoteRequest): Promise<_116.QueryVoteResponse>;
                votes(request: _116.QueryVotesRequest): Promise<_116.QueryVotesResponse>;
                params(request: _116.QueryParamsRequest): Promise<_116.QueryParamsResponse>;
                deposit(request: _116.QueryDepositRequest): Promise<_116.QueryDepositResponse>;
                deposits(request: _116.QueryDepositsRequest): Promise<_116.QueryDepositsResponse>;
                tallyResult(request: _116.QueryTallyResultRequest): Promise<_116.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _215.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _117.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _117.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _117.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _117.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _117.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _117.MsgSubmitProposal;
                    };
                    vote(value: _117.MsgVote): {
                        typeUrl: string;
                        value: _117.MsgVote;
                    };
                    voteWeighted(value: _117.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _117.MsgVoteWeighted;
                    };
                    deposit(value: _117.MsgDeposit): {
                        typeUrl: string;
                        value: _117.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _117.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _117.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _117.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _117.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _117.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _117.MsgSubmitProposal;
                    };
                    vote(value: _117.MsgVote): {
                        typeUrl: string;
                        value: _117.MsgVote;
                    };
                    voteWeighted(value: _117.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _117.MsgVoteWeighted;
                    };
                    deposit(value: _117.MsgDeposit): {
                        typeUrl: string;
                        value: _117.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _117.MsgSubmitProposal) => _117.MsgSubmitProposalAmino;
                    fromAmino: (object: _117.MsgSubmitProposalAmino) => _117.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _117.MsgVote) => _117.MsgVoteAmino;
                    fromAmino: (object: _117.MsgVoteAmino) => _117.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _117.MsgVoteWeighted) => _117.MsgVoteWeightedAmino;
                    fromAmino: (object: _117.MsgVoteWeightedAmino) => _117.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _117.MsgDeposit) => _117.MsgDepositAmino;
                    fromAmino: (object: _117.MsgDepositAmino) => _117.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _117.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.MsgSubmitProposal;
                fromPartial(object: Partial<_117.MsgSubmitProposal>): _117.MsgSubmitProposal;
                fromAmino(object: _117.MsgSubmitProposalAmino): _117.MsgSubmitProposal;
                toAmino(message: _117.MsgSubmitProposal): _117.MsgSubmitProposalAmino;
                fromAminoMsg(object: _117.MsgSubmitProposalAminoMsg): _117.MsgSubmitProposal;
                toAminoMsg(message: _117.MsgSubmitProposal): _117.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _117.MsgSubmitProposalProtoMsg): _117.MsgSubmitProposal;
                toProto(message: _117.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _117.MsgSubmitProposal): _117.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _117.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_117.MsgSubmitProposalResponse>): _117.MsgSubmitProposalResponse;
                fromAmino(object: _117.MsgSubmitProposalResponseAmino): _117.MsgSubmitProposalResponse;
                toAmino(message: _117.MsgSubmitProposalResponse): _117.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _117.MsgSubmitProposalResponseAminoMsg): _117.MsgSubmitProposalResponse;
                toAminoMsg(message: _117.MsgSubmitProposalResponse): _117.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _117.MsgSubmitProposalResponseProtoMsg): _117.MsgSubmitProposalResponse;
                toProto(message: _117.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _117.MsgSubmitProposalResponse): _117.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _117.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.MsgVote;
                fromPartial(object: Partial<_117.MsgVote>): _117.MsgVote;
                fromAmino(object: _117.MsgVoteAmino): _117.MsgVote;
                toAmino(message: _117.MsgVote): _117.MsgVoteAmino;
                fromAminoMsg(object: _117.MsgVoteAminoMsg): _117.MsgVote;
                toAminoMsg(message: _117.MsgVote): _117.MsgVoteAminoMsg;
                fromProtoMsg(message: _117.MsgVoteProtoMsg): _117.MsgVote;
                toProto(message: _117.MsgVote): Uint8Array;
                toProtoMsg(message: _117.MsgVote): _117.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _117.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _117.MsgVoteResponse;
                fromPartial(_: Partial<_117.MsgVoteResponse>): _117.MsgVoteResponse;
                fromAmino(_: _117.MsgVoteResponseAmino): _117.MsgVoteResponse;
                toAmino(_: _117.MsgVoteResponse): _117.MsgVoteResponseAmino;
                fromAminoMsg(object: _117.MsgVoteResponseAminoMsg): _117.MsgVoteResponse;
                toAminoMsg(message: _117.MsgVoteResponse): _117.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _117.MsgVoteResponseProtoMsg): _117.MsgVoteResponse;
                toProto(message: _117.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _117.MsgVoteResponse): _117.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _117.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.MsgVoteWeighted;
                fromPartial(object: Partial<_117.MsgVoteWeighted>): _117.MsgVoteWeighted;
                fromAmino(object: _117.MsgVoteWeightedAmino): _117.MsgVoteWeighted;
                toAmino(message: _117.MsgVoteWeighted): _117.MsgVoteWeightedAmino;
                fromAminoMsg(object: _117.MsgVoteWeightedAminoMsg): _117.MsgVoteWeighted;
                toAminoMsg(message: _117.MsgVoteWeighted): _117.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _117.MsgVoteWeightedProtoMsg): _117.MsgVoteWeighted;
                toProto(message: _117.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _117.MsgVoteWeighted): _117.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _117.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _117.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_117.MsgVoteWeightedResponse>): _117.MsgVoteWeightedResponse;
                fromAmino(_: _117.MsgVoteWeightedResponseAmino): _117.MsgVoteWeightedResponse;
                toAmino(_: _117.MsgVoteWeightedResponse): _117.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _117.MsgVoteWeightedResponseAminoMsg): _117.MsgVoteWeightedResponse;
                toAminoMsg(message: _117.MsgVoteWeightedResponse): _117.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _117.MsgVoteWeightedResponseProtoMsg): _117.MsgVoteWeightedResponse;
                toProto(message: _117.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _117.MsgVoteWeightedResponse): _117.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _117.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.MsgDeposit;
                fromPartial(object: Partial<_117.MsgDeposit>): _117.MsgDeposit;
                fromAmino(object: _117.MsgDepositAmino): _117.MsgDeposit;
                toAmino(message: _117.MsgDeposit): _117.MsgDepositAmino;
                fromAminoMsg(object: _117.MsgDepositAminoMsg): _117.MsgDeposit;
                toAminoMsg(message: _117.MsgDeposit): _117.MsgDepositAminoMsg;
                fromProtoMsg(message: _117.MsgDepositProtoMsg): _117.MsgDeposit;
                toProto(message: _117.MsgDeposit): Uint8Array;
                toProtoMsg(message: _117.MsgDeposit): _117.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _117.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _117.MsgDepositResponse;
                fromPartial(_: Partial<_117.MsgDepositResponse>): _117.MsgDepositResponse;
                fromAmino(_: _117.MsgDepositResponseAmino): _117.MsgDepositResponse;
                toAmino(_: _117.MsgDepositResponse): _117.MsgDepositResponseAmino;
                fromAminoMsg(object: _117.MsgDepositResponseAminoMsg): _117.MsgDepositResponse;
                toAminoMsg(message: _117.MsgDepositResponse): _117.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _117.MsgDepositResponseProtoMsg): _117.MsgDepositResponse;
                toProto(message: _117.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _117.MsgDepositResponse): _117.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _115.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _116.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryProposalRequest;
                fromPartial(object: Partial<_116.QueryProposalRequest>): _116.QueryProposalRequest;
                fromAmino(object: _116.QueryProposalRequestAmino): _116.QueryProposalRequest;
                toAmino(message: _116.QueryProposalRequest): _116.QueryProposalRequestAmino;
                fromAminoMsg(object: _116.QueryProposalRequestAminoMsg): _116.QueryProposalRequest;
                toAminoMsg(message: _116.QueryProposalRequest): _116.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _116.QueryProposalRequestProtoMsg): _116.QueryProposalRequest;
                toProto(message: _116.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _116.QueryProposalRequest): _116.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _116.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryProposalResponse;
                fromPartial(object: Partial<_116.QueryProposalResponse>): _116.QueryProposalResponse;
                fromAmino(object: _116.QueryProposalResponseAmino): _116.QueryProposalResponse;
                toAmino(message: _116.QueryProposalResponse): _116.QueryProposalResponseAmino;
                fromAminoMsg(object: _116.QueryProposalResponseAminoMsg): _116.QueryProposalResponse;
                toAminoMsg(message: _116.QueryProposalResponse): _116.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _116.QueryProposalResponseProtoMsg): _116.QueryProposalResponse;
                toProto(message: _116.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _116.QueryProposalResponse): _116.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _116.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryProposalsRequest;
                fromPartial(object: Partial<_116.QueryProposalsRequest>): _116.QueryProposalsRequest;
                fromAmino(object: _116.QueryProposalsRequestAmino): _116.QueryProposalsRequest;
                toAmino(message: _116.QueryProposalsRequest): _116.QueryProposalsRequestAmino;
                fromAminoMsg(object: _116.QueryProposalsRequestAminoMsg): _116.QueryProposalsRequest;
                toAminoMsg(message: _116.QueryProposalsRequest): _116.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _116.QueryProposalsRequestProtoMsg): _116.QueryProposalsRequest;
                toProto(message: _116.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _116.QueryProposalsRequest): _116.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _116.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryProposalsResponse;
                fromPartial(object: Partial<_116.QueryProposalsResponse>): _116.QueryProposalsResponse;
                fromAmino(object: _116.QueryProposalsResponseAmino): _116.QueryProposalsResponse;
                toAmino(message: _116.QueryProposalsResponse): _116.QueryProposalsResponseAmino;
                fromAminoMsg(object: _116.QueryProposalsResponseAminoMsg): _116.QueryProposalsResponse;
                toAminoMsg(message: _116.QueryProposalsResponse): _116.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _116.QueryProposalsResponseProtoMsg): _116.QueryProposalsResponse;
                toProto(message: _116.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _116.QueryProposalsResponse): _116.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _116.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryVoteRequest;
                fromPartial(object: Partial<_116.QueryVoteRequest>): _116.QueryVoteRequest;
                fromAmino(object: _116.QueryVoteRequestAmino): _116.QueryVoteRequest;
                toAmino(message: _116.QueryVoteRequest): _116.QueryVoteRequestAmino;
                fromAminoMsg(object: _116.QueryVoteRequestAminoMsg): _116.QueryVoteRequest;
                toAminoMsg(message: _116.QueryVoteRequest): _116.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _116.QueryVoteRequestProtoMsg): _116.QueryVoteRequest;
                toProto(message: _116.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _116.QueryVoteRequest): _116.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _116.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryVoteResponse;
                fromPartial(object: Partial<_116.QueryVoteResponse>): _116.QueryVoteResponse;
                fromAmino(object: _116.QueryVoteResponseAmino): _116.QueryVoteResponse;
                toAmino(message: _116.QueryVoteResponse): _116.QueryVoteResponseAmino;
                fromAminoMsg(object: _116.QueryVoteResponseAminoMsg): _116.QueryVoteResponse;
                toAminoMsg(message: _116.QueryVoteResponse): _116.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _116.QueryVoteResponseProtoMsg): _116.QueryVoteResponse;
                toProto(message: _116.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _116.QueryVoteResponse): _116.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _116.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryVotesRequest;
                fromPartial(object: Partial<_116.QueryVotesRequest>): _116.QueryVotesRequest;
                fromAmino(object: _116.QueryVotesRequestAmino): _116.QueryVotesRequest;
                toAmino(message: _116.QueryVotesRequest): _116.QueryVotesRequestAmino;
                fromAminoMsg(object: _116.QueryVotesRequestAminoMsg): _116.QueryVotesRequest;
                toAminoMsg(message: _116.QueryVotesRequest): _116.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _116.QueryVotesRequestProtoMsg): _116.QueryVotesRequest;
                toProto(message: _116.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _116.QueryVotesRequest): _116.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _116.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryVotesResponse;
                fromPartial(object: Partial<_116.QueryVotesResponse>): _116.QueryVotesResponse;
                fromAmino(object: _116.QueryVotesResponseAmino): _116.QueryVotesResponse;
                toAmino(message: _116.QueryVotesResponse): _116.QueryVotesResponseAmino;
                fromAminoMsg(object: _116.QueryVotesResponseAminoMsg): _116.QueryVotesResponse;
                toAminoMsg(message: _116.QueryVotesResponse): _116.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _116.QueryVotesResponseProtoMsg): _116.QueryVotesResponse;
                toProto(message: _116.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _116.QueryVotesResponse): _116.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _116.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryParamsRequest;
                fromPartial(object: Partial<_116.QueryParamsRequest>): _116.QueryParamsRequest;
                fromAmino(object: _116.QueryParamsRequestAmino): _116.QueryParamsRequest;
                toAmino(message: _116.QueryParamsRequest): _116.QueryParamsRequestAmino;
                fromAminoMsg(object: _116.QueryParamsRequestAminoMsg): _116.QueryParamsRequest;
                toAminoMsg(message: _116.QueryParamsRequest): _116.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _116.QueryParamsRequestProtoMsg): _116.QueryParamsRequest;
                toProto(message: _116.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _116.QueryParamsRequest): _116.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _116.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryParamsResponse;
                fromPartial(object: Partial<_116.QueryParamsResponse>): _116.QueryParamsResponse;
                fromAmino(object: _116.QueryParamsResponseAmino): _116.QueryParamsResponse;
                toAmino(message: _116.QueryParamsResponse): _116.QueryParamsResponseAmino;
                fromAminoMsg(object: _116.QueryParamsResponseAminoMsg): _116.QueryParamsResponse;
                toAminoMsg(message: _116.QueryParamsResponse): _116.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _116.QueryParamsResponseProtoMsg): _116.QueryParamsResponse;
                toProto(message: _116.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _116.QueryParamsResponse): _116.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _116.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryDepositRequest;
                fromPartial(object: Partial<_116.QueryDepositRequest>): _116.QueryDepositRequest;
                fromAmino(object: _116.QueryDepositRequestAmino): _116.QueryDepositRequest;
                toAmino(message: _116.QueryDepositRequest): _116.QueryDepositRequestAmino;
                fromAminoMsg(object: _116.QueryDepositRequestAminoMsg): _116.QueryDepositRequest;
                toAminoMsg(message: _116.QueryDepositRequest): _116.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _116.QueryDepositRequestProtoMsg): _116.QueryDepositRequest;
                toProto(message: _116.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _116.QueryDepositRequest): _116.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _116.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryDepositResponse;
                fromPartial(object: Partial<_116.QueryDepositResponse>): _116.QueryDepositResponse;
                fromAmino(object: _116.QueryDepositResponseAmino): _116.QueryDepositResponse;
                toAmino(message: _116.QueryDepositResponse): _116.QueryDepositResponseAmino;
                fromAminoMsg(object: _116.QueryDepositResponseAminoMsg): _116.QueryDepositResponse;
                toAminoMsg(message: _116.QueryDepositResponse): _116.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _116.QueryDepositResponseProtoMsg): _116.QueryDepositResponse;
                toProto(message: _116.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _116.QueryDepositResponse): _116.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _116.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryDepositsRequest;
                fromPartial(object: Partial<_116.QueryDepositsRequest>): _116.QueryDepositsRequest;
                fromAmino(object: _116.QueryDepositsRequestAmino): _116.QueryDepositsRequest;
                toAmino(message: _116.QueryDepositsRequest): _116.QueryDepositsRequestAmino;
                fromAminoMsg(object: _116.QueryDepositsRequestAminoMsg): _116.QueryDepositsRequest;
                toAminoMsg(message: _116.QueryDepositsRequest): _116.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _116.QueryDepositsRequestProtoMsg): _116.QueryDepositsRequest;
                toProto(message: _116.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _116.QueryDepositsRequest): _116.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _116.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryDepositsResponse;
                fromPartial(object: Partial<_116.QueryDepositsResponse>): _116.QueryDepositsResponse;
                fromAmino(object: _116.QueryDepositsResponseAmino): _116.QueryDepositsResponse;
                toAmino(message: _116.QueryDepositsResponse): _116.QueryDepositsResponseAmino;
                fromAminoMsg(object: _116.QueryDepositsResponseAminoMsg): _116.QueryDepositsResponse;
                toAminoMsg(message: _116.QueryDepositsResponse): _116.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _116.QueryDepositsResponseProtoMsg): _116.QueryDepositsResponse;
                toProto(message: _116.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _116.QueryDepositsResponse): _116.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _116.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryTallyResultRequest;
                fromPartial(object: Partial<_116.QueryTallyResultRequest>): _116.QueryTallyResultRequest;
                fromAmino(object: _116.QueryTallyResultRequestAmino): _116.QueryTallyResultRequest;
                toAmino(message: _116.QueryTallyResultRequest): _116.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _116.QueryTallyResultRequestAminoMsg): _116.QueryTallyResultRequest;
                toAminoMsg(message: _116.QueryTallyResultRequest): _116.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _116.QueryTallyResultRequestProtoMsg): _116.QueryTallyResultRequest;
                toProto(message: _116.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _116.QueryTallyResultRequest): _116.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _116.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryTallyResultResponse;
                fromPartial(object: Partial<_116.QueryTallyResultResponse>): _116.QueryTallyResultResponse;
                fromAmino(object: _116.QueryTallyResultResponseAmino): _116.QueryTallyResultResponse;
                toAmino(message: _116.QueryTallyResultResponse): _116.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _116.QueryTallyResultResponseAminoMsg): _116.QueryTallyResultResponse;
                toAminoMsg(message: _116.QueryTallyResultResponse): _116.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _116.QueryTallyResultResponseProtoMsg): _116.QueryTallyResultResponse;
                toProto(message: _116.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _116.QueryTallyResultResponse): _116.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _115.VoteOption;
            voteOptionToJSON(object: _115.VoteOption): string;
            proposalStatusFromJSON(object: any): _115.ProposalStatus;
            proposalStatusToJSON(object: _115.ProposalStatus): string;
            VoteOption: typeof _115.VoteOption;
            VoteOptionSDKType: typeof _115.VoteOption;
            VoteOptionAmino: typeof _115.VoteOption;
            ProposalStatus: typeof _115.ProposalStatus;
            ProposalStatusSDKType: typeof _115.ProposalStatus;
            ProposalStatusAmino: typeof _115.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _115.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.WeightedVoteOption;
                fromPartial(object: Partial<_115.WeightedVoteOption>): _115.WeightedVoteOption;
                fromAmino(object: _115.WeightedVoteOptionAmino): _115.WeightedVoteOption;
                toAmino(message: _115.WeightedVoteOption): _115.WeightedVoteOptionAmino;
                fromAminoMsg(object: _115.WeightedVoteOptionAminoMsg): _115.WeightedVoteOption;
                toAminoMsg(message: _115.WeightedVoteOption): _115.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _115.WeightedVoteOptionProtoMsg): _115.WeightedVoteOption;
                toProto(message: _115.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _115.WeightedVoteOption): _115.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _115.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.TextProposal;
                fromPartial(object: Partial<_115.TextProposal>): _115.TextProposal;
                fromAmino(object: _115.TextProposalAmino): _115.TextProposal;
                toAmino(message: _115.TextProposal): _115.TextProposalAmino;
                fromAminoMsg(object: _115.TextProposalAminoMsg): _115.TextProposal;
                toAminoMsg(message: _115.TextProposal): _115.TextProposalAminoMsg;
                fromProtoMsg(message: _115.TextProposalProtoMsg): _115.TextProposal;
                toProto(message: _115.TextProposal): Uint8Array;
                toProtoMsg(message: _115.TextProposal): _115.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _115.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.Deposit;
                fromPartial(object: Partial<_115.Deposit>): _115.Deposit;
                fromAmino(object: _115.DepositAmino): _115.Deposit;
                toAmino(message: _115.Deposit): _115.DepositAmino;
                fromAminoMsg(object: _115.DepositAminoMsg): _115.Deposit;
                toAminoMsg(message: _115.Deposit): _115.DepositAminoMsg;
                fromProtoMsg(message: _115.DepositProtoMsg): _115.Deposit;
                toProto(message: _115.Deposit): Uint8Array;
                toProtoMsg(message: _115.Deposit): _115.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _115.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.Proposal;
                fromPartial(object: Partial<_115.Proposal>): _115.Proposal;
                fromAmino(object: _115.ProposalAmino): _115.Proposal;
                toAmino(message: _115.Proposal): _115.ProposalAmino;
                fromAminoMsg(object: _115.ProposalAminoMsg): _115.Proposal;
                toAminoMsg(message: _115.Proposal): _115.ProposalAminoMsg;
                fromProtoMsg(message: _115.ProposalProtoMsg): _115.Proposal;
                toProto(message: _115.Proposal): Uint8Array;
                toProtoMsg(message: _115.Proposal): _115.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _115.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.TallyResult;
                fromPartial(object: Partial<_115.TallyResult>): _115.TallyResult;
                fromAmino(object: _115.TallyResultAmino): _115.TallyResult;
                toAmino(message: _115.TallyResult): _115.TallyResultAmino;
                fromAminoMsg(object: _115.TallyResultAminoMsg): _115.TallyResult;
                toAminoMsg(message: _115.TallyResult): _115.TallyResultAminoMsg;
                fromProtoMsg(message: _115.TallyResultProtoMsg): _115.TallyResult;
                toProto(message: _115.TallyResult): Uint8Array;
                toProtoMsg(message: _115.TallyResult): _115.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _115.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.Vote;
                fromPartial(object: Partial<_115.Vote>): _115.Vote;
                fromAmino(object: _115.VoteAmino): _115.Vote;
                toAmino(message: _115.Vote): _115.VoteAmino;
                fromAminoMsg(object: _115.VoteAminoMsg): _115.Vote;
                toAminoMsg(message: _115.Vote): _115.VoteAminoMsg;
                fromProtoMsg(message: _115.VoteProtoMsg): _115.Vote;
                toProto(message: _115.Vote): Uint8Array;
                toProtoMsg(message: _115.Vote): _115.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _115.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.DepositParams;
                fromPartial(object: Partial<_115.DepositParams>): _115.DepositParams;
                fromAmino(object: _115.DepositParamsAmino): _115.DepositParams;
                toAmino(message: _115.DepositParams): _115.DepositParamsAmino;
                fromAminoMsg(object: _115.DepositParamsAminoMsg): _115.DepositParams;
                toAminoMsg(message: _115.DepositParams): _115.DepositParamsAminoMsg;
                fromProtoMsg(message: _115.DepositParamsProtoMsg): _115.DepositParams;
                toProto(message: _115.DepositParams): Uint8Array;
                toProtoMsg(message: _115.DepositParams): _115.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _115.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.VotingParams;
                fromPartial(object: Partial<_115.VotingParams>): _115.VotingParams;
                fromAmino(object: _115.VotingParamsAmino): _115.VotingParams;
                toAmino(message: _115.VotingParams): _115.VotingParamsAmino;
                fromAminoMsg(object: _115.VotingParamsAminoMsg): _115.VotingParams;
                toAminoMsg(message: _115.VotingParams): _115.VotingParamsAminoMsg;
                fromProtoMsg(message: _115.VotingParamsProtoMsg): _115.VotingParams;
                toProto(message: _115.VotingParams): Uint8Array;
                toProtoMsg(message: _115.VotingParams): _115.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _115.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.TallyParams;
                fromPartial(object: Partial<_115.TallyParams>): _115.TallyParams;
                fromAmino(object: _115.TallyParamsAmino): _115.TallyParams;
                toAmino(message: _115.TallyParams): _115.TallyParamsAmino;
                fromAminoMsg(object: _115.TallyParamsAminoMsg): _115.TallyParams;
                toAminoMsg(message: _115.TallyParams): _115.TallyParamsAminoMsg;
                fromProtoMsg(message: _115.TallyParamsProtoMsg): _115.TallyParams;
                toProto(message: _115.TallyParams): Uint8Array;
                toProtoMsg(message: _115.TallyParams): _115.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _114.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.GenesisState;
                fromPartial(object: Partial<_114.GenesisState>): _114.GenesisState;
                fromAmino(object: _114.GenesisStateAmino): _114.GenesisState;
                toAmino(message: _114.GenesisState): _114.GenesisStateAmino;
                fromAminoMsg(object: _114.GenesisStateAminoMsg): _114.GenesisState;
                toAminoMsg(message: _114.GenesisState): _114.GenesisStateAminoMsg;
                fromProtoMsg(message: _114.GenesisStateProtoMsg): _114.GenesisState;
                toProto(message: _114.GenesisState): Uint8Array;
                toProtoMsg(message: _114.GenesisState): _114.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _231.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _120.QueryParamsRequest): Promise<_120.QueryParamsResponse>;
                inflation(request?: _120.QueryInflationRequest): Promise<_120.QueryInflationResponse>;
                annualProvisions(request?: _120.QueryAnnualProvisionsRequest): Promise<_120.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _216.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _120.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.QueryParamsRequest;
                fromPartial(_: Partial<_120.QueryParamsRequest>): _120.QueryParamsRequest;
                fromAmino(_: _120.QueryParamsRequestAmino): _120.QueryParamsRequest;
                toAmino(_: _120.QueryParamsRequest): _120.QueryParamsRequestAmino;
                fromAminoMsg(object: _120.QueryParamsRequestAminoMsg): _120.QueryParamsRequest;
                toAminoMsg(message: _120.QueryParamsRequest): _120.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _120.QueryParamsRequestProtoMsg): _120.QueryParamsRequest;
                toProto(message: _120.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _120.QueryParamsRequest): _120.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _120.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryParamsResponse;
                fromPartial(object: Partial<_120.QueryParamsResponse>): _120.QueryParamsResponse;
                fromAmino(object: _120.QueryParamsResponseAmino): _120.QueryParamsResponse;
                toAmino(message: _120.QueryParamsResponse): _120.QueryParamsResponseAmino;
                fromAminoMsg(object: _120.QueryParamsResponseAminoMsg): _120.QueryParamsResponse;
                toAminoMsg(message: _120.QueryParamsResponse): _120.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _120.QueryParamsResponseProtoMsg): _120.QueryParamsResponse;
                toProto(message: _120.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _120.QueryParamsResponse): _120.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _120.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.QueryInflationRequest;
                fromPartial(_: Partial<_120.QueryInflationRequest>): _120.QueryInflationRequest;
                fromAmino(_: _120.QueryInflationRequestAmino): _120.QueryInflationRequest;
                toAmino(_: _120.QueryInflationRequest): _120.QueryInflationRequestAmino;
                fromAminoMsg(object: _120.QueryInflationRequestAminoMsg): _120.QueryInflationRequest;
                toAminoMsg(message: _120.QueryInflationRequest): _120.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _120.QueryInflationRequestProtoMsg): _120.QueryInflationRequest;
                toProto(message: _120.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _120.QueryInflationRequest): _120.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _120.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryInflationResponse;
                fromPartial(object: Partial<_120.QueryInflationResponse>): _120.QueryInflationResponse;
                fromAmino(object: _120.QueryInflationResponseAmino): _120.QueryInflationResponse;
                toAmino(message: _120.QueryInflationResponse): _120.QueryInflationResponseAmino;
                fromAminoMsg(object: _120.QueryInflationResponseAminoMsg): _120.QueryInflationResponse;
                toAminoMsg(message: _120.QueryInflationResponse): _120.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _120.QueryInflationResponseProtoMsg): _120.QueryInflationResponse;
                toProto(message: _120.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _120.QueryInflationResponse): _120.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _120.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_120.QueryAnnualProvisionsRequest>): _120.QueryAnnualProvisionsRequest;
                fromAmino(_: _120.QueryAnnualProvisionsRequestAmino): _120.QueryAnnualProvisionsRequest;
                toAmino(_: _120.QueryAnnualProvisionsRequest): _120.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _120.QueryAnnualProvisionsRequestAminoMsg): _120.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _120.QueryAnnualProvisionsRequest): _120.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _120.QueryAnnualProvisionsRequestProtoMsg): _120.QueryAnnualProvisionsRequest;
                toProto(message: _120.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _120.QueryAnnualProvisionsRequest): _120.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _120.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_120.QueryAnnualProvisionsResponse>): _120.QueryAnnualProvisionsResponse;
                fromAmino(object: _120.QueryAnnualProvisionsResponseAmino): _120.QueryAnnualProvisionsResponse;
                toAmino(message: _120.QueryAnnualProvisionsResponse): _120.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _120.QueryAnnualProvisionsResponseAminoMsg): _120.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _120.QueryAnnualProvisionsResponse): _120.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _120.QueryAnnualProvisionsResponseProtoMsg): _120.QueryAnnualProvisionsResponse;
                toProto(message: _120.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _120.QueryAnnualProvisionsResponse): _120.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _119.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.Minter;
                fromPartial(object: Partial<_119.Minter>): _119.Minter;
                fromAmino(object: _119.MinterAmino): _119.Minter;
                toAmino(message: _119.Minter): _119.MinterAmino;
                fromAminoMsg(object: _119.MinterAminoMsg): _119.Minter;
                toAminoMsg(message: _119.Minter): _119.MinterAminoMsg;
                fromProtoMsg(message: _119.MinterProtoMsg): _119.Minter;
                toProto(message: _119.Minter): Uint8Array;
                toProtoMsg(message: _119.Minter): _119.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _119.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.Params;
                fromPartial(object: Partial<_119.Params>): _119.Params;
                fromAmino(object: _119.ParamsAmino): _119.Params;
                toAmino(message: _119.Params): _119.ParamsAmino;
                fromAminoMsg(object: _119.ParamsAminoMsg): _119.Params;
                toAminoMsg(message: _119.Params): _119.ParamsAminoMsg;
                fromProtoMsg(message: _119.ParamsProtoMsg): _119.Params;
                toProto(message: _119.Params): Uint8Array;
                toProtoMsg(message: _119.Params): _119.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _118.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.GenesisState;
                fromPartial(object: Partial<_118.GenesisState>): _118.GenesisState;
                fromAmino(object: _118.GenesisStateAmino): _118.GenesisState;
                toAmino(message: _118.GenesisState): _118.GenesisStateAmino;
                fromAminoMsg(object: _118.GenesisStateAminoMsg): _118.GenesisState;
                toAminoMsg(message: _118.GenesisState): _118.GenesisStateAminoMsg;
                fromProtoMsg(message: _118.GenesisStateProtoMsg): _118.GenesisState;
                toProto(message: _118.GenesisState): Uint8Array;
                toProtoMsg(message: _118.GenesisState): _118.GenesisStateProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _232.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _217.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _122.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryParamsRequest;
                fromPartial(object: Partial<_122.QueryParamsRequest>): _122.QueryParamsRequest;
                fromAmino(object: _122.QueryParamsRequestAmino): _122.QueryParamsRequest;
                toAmino(message: _122.QueryParamsRequest): _122.QueryParamsRequestAmino;
                fromAminoMsg(object: _122.QueryParamsRequestAminoMsg): _122.QueryParamsRequest;
                toAminoMsg(message: _122.QueryParamsRequest): _122.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _122.QueryParamsRequestProtoMsg): _122.QueryParamsRequest;
                toProto(message: _122.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _122.QueryParamsRequest): _122.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _122.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryParamsResponse;
                fromPartial(object: Partial<_122.QueryParamsResponse>): _122.QueryParamsResponse;
                fromAmino(object: _122.QueryParamsResponseAmino): _122.QueryParamsResponse;
                toAmino(message: _122.QueryParamsResponse): _122.QueryParamsResponseAmino;
                fromAminoMsg(object: _122.QueryParamsResponseAminoMsg): _122.QueryParamsResponse;
                toAminoMsg(message: _122.QueryParamsResponse): _122.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _122.QueryParamsResponseProtoMsg): _122.QueryParamsResponse;
                toProto(message: _122.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _122.QueryParamsResponse): _122.QueryParamsResponseProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _121.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.ParameterChangeProposal;
                fromPartial(object: Partial<_121.ParameterChangeProposal>): _121.ParameterChangeProposal;
                fromAmino(object: _121.ParameterChangeProposalAmino): _121.ParameterChangeProposal;
                toAmino(message: _121.ParameterChangeProposal): _121.ParameterChangeProposalAmino;
                fromAminoMsg(object: _121.ParameterChangeProposalAminoMsg): _121.ParameterChangeProposal;
                toAminoMsg(message: _121.ParameterChangeProposal): _121.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _121.ParameterChangeProposalProtoMsg): _121.ParameterChangeProposal;
                toProto(message: _121.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _121.ParameterChangeProposal): _121.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _121.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.ParamChange;
                fromPartial(object: Partial<_121.ParamChange>): _121.ParamChange;
                fromAmino(object: _121.ParamChangeAmino): _121.ParamChange;
                toAmino(message: _121.ParamChange): _121.ParamChangeAmino;
                fromAminoMsg(object: _121.ParamChangeAminoMsg): _121.ParamChange;
                toAminoMsg(message: _121.ParamChange): _121.ParamChangeAminoMsg;
                fromProtoMsg(message: _121.ParamChangeProtoMsg): _121.ParamChange;
                toProto(message: _121.ParamChange): Uint8Array;
                toProtoMsg(message: _121.ParamChange): _121.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _244.MsgClientImpl;
            QueryClientImpl: typeof _233.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _124.QueryParamsRequest): Promise<_124.QueryParamsResponse>;
                signingInfo(request: _124.QuerySigningInfoRequest): Promise<_124.QuerySigningInfoResponse>;
                signingInfos(request?: _124.QuerySigningInfosRequest): Promise<_124.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _218.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _126.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _126.MsgUnjail): {
                        typeUrl: string;
                        value: _126.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _126.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _126.MsgUnjail): {
                        typeUrl: string;
                        value: _126.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _126.MsgUnjail) => _126.MsgUnjailAmino;
                    fromAmino: (object: _126.MsgUnjailAmino) => _126.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _126.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.MsgUnjail;
                fromPartial(object: Partial<_126.MsgUnjail>): _126.MsgUnjail;
                fromAmino(object: _126.MsgUnjailAmino): _126.MsgUnjail;
                toAmino(message: _126.MsgUnjail): _126.MsgUnjailAmino;
                fromAminoMsg(object: _126.MsgUnjailAminoMsg): _126.MsgUnjail;
                toAminoMsg(message: _126.MsgUnjail): _126.MsgUnjailAminoMsg;
                fromProtoMsg(message: _126.MsgUnjailProtoMsg): _126.MsgUnjail;
                toProto(message: _126.MsgUnjail): Uint8Array;
                toProtoMsg(message: _126.MsgUnjail): _126.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _126.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _126.MsgUnjailResponse;
                fromPartial(_: Partial<_126.MsgUnjailResponse>): _126.MsgUnjailResponse;
                fromAmino(_: _126.MsgUnjailResponseAmino): _126.MsgUnjailResponse;
                toAmino(_: _126.MsgUnjailResponse): _126.MsgUnjailResponseAmino;
                fromAminoMsg(object: _126.MsgUnjailResponseAminoMsg): _126.MsgUnjailResponse;
                toAminoMsg(message: _126.MsgUnjailResponse): _126.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _126.MsgUnjailResponseProtoMsg): _126.MsgUnjailResponse;
                toProto(message: _126.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _126.MsgUnjailResponse): _126.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _125.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.ValidatorSigningInfo;
                fromPartial(object: Partial<_125.ValidatorSigningInfo>): _125.ValidatorSigningInfo;
                fromAmino(object: _125.ValidatorSigningInfoAmino): _125.ValidatorSigningInfo;
                toAmino(message: _125.ValidatorSigningInfo): _125.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _125.ValidatorSigningInfoAminoMsg): _125.ValidatorSigningInfo;
                toAminoMsg(message: _125.ValidatorSigningInfo): _125.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _125.ValidatorSigningInfoProtoMsg): _125.ValidatorSigningInfo;
                toProto(message: _125.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _125.ValidatorSigningInfo): _125.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _125.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.Params;
                fromPartial(object: Partial<_125.Params>): _125.Params;
                fromAmino(object: _125.ParamsAmino): _125.Params;
                toAmino(message: _125.Params): _125.ParamsAmino;
                fromAminoMsg(object: _125.ParamsAminoMsg): _125.Params;
                toAminoMsg(message: _125.Params): _125.ParamsAminoMsg;
                fromProtoMsg(message: _125.ParamsProtoMsg): _125.Params;
                toProto(message: _125.Params): Uint8Array;
                toProtoMsg(message: _125.Params): _125.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _124.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _124.QueryParamsRequest;
                fromPartial(_: Partial<_124.QueryParamsRequest>): _124.QueryParamsRequest;
                fromAmino(_: _124.QueryParamsRequestAmino): _124.QueryParamsRequest;
                toAmino(_: _124.QueryParamsRequest): _124.QueryParamsRequestAmino;
                fromAminoMsg(object: _124.QueryParamsRequestAminoMsg): _124.QueryParamsRequest;
                toAminoMsg(message: _124.QueryParamsRequest): _124.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _124.QueryParamsRequestProtoMsg): _124.QueryParamsRequest;
                toProto(message: _124.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _124.QueryParamsRequest): _124.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _124.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryParamsResponse;
                fromPartial(object: Partial<_124.QueryParamsResponse>): _124.QueryParamsResponse;
                fromAmino(object: _124.QueryParamsResponseAmino): _124.QueryParamsResponse;
                toAmino(message: _124.QueryParamsResponse): _124.QueryParamsResponseAmino;
                fromAminoMsg(object: _124.QueryParamsResponseAminoMsg): _124.QueryParamsResponse;
                toAminoMsg(message: _124.QueryParamsResponse): _124.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _124.QueryParamsResponseProtoMsg): _124.QueryParamsResponse;
                toProto(message: _124.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _124.QueryParamsResponse): _124.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _124.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QuerySigningInfoRequest;
                fromPartial(object: Partial<_124.QuerySigningInfoRequest>): _124.QuerySigningInfoRequest;
                fromAmino(object: _124.QuerySigningInfoRequestAmino): _124.QuerySigningInfoRequest;
                toAmino(message: _124.QuerySigningInfoRequest): _124.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _124.QuerySigningInfoRequestAminoMsg): _124.QuerySigningInfoRequest;
                toAminoMsg(message: _124.QuerySigningInfoRequest): _124.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _124.QuerySigningInfoRequestProtoMsg): _124.QuerySigningInfoRequest;
                toProto(message: _124.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _124.QuerySigningInfoRequest): _124.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _124.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QuerySigningInfoResponse;
                fromPartial(object: Partial<_124.QuerySigningInfoResponse>): _124.QuerySigningInfoResponse;
                fromAmino(object: _124.QuerySigningInfoResponseAmino): _124.QuerySigningInfoResponse;
                toAmino(message: _124.QuerySigningInfoResponse): _124.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _124.QuerySigningInfoResponseAminoMsg): _124.QuerySigningInfoResponse;
                toAminoMsg(message: _124.QuerySigningInfoResponse): _124.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _124.QuerySigningInfoResponseProtoMsg): _124.QuerySigningInfoResponse;
                toProto(message: _124.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _124.QuerySigningInfoResponse): _124.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _124.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QuerySigningInfosRequest;
                fromPartial(object: Partial<_124.QuerySigningInfosRequest>): _124.QuerySigningInfosRequest;
                fromAmino(object: _124.QuerySigningInfosRequestAmino): _124.QuerySigningInfosRequest;
                toAmino(message: _124.QuerySigningInfosRequest): _124.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _124.QuerySigningInfosRequestAminoMsg): _124.QuerySigningInfosRequest;
                toAminoMsg(message: _124.QuerySigningInfosRequest): _124.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _124.QuerySigningInfosRequestProtoMsg): _124.QuerySigningInfosRequest;
                toProto(message: _124.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _124.QuerySigningInfosRequest): _124.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _124.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QuerySigningInfosResponse;
                fromPartial(object: Partial<_124.QuerySigningInfosResponse>): _124.QuerySigningInfosResponse;
                fromAmino(object: _124.QuerySigningInfosResponseAmino): _124.QuerySigningInfosResponse;
                toAmino(message: _124.QuerySigningInfosResponse): _124.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _124.QuerySigningInfosResponseAminoMsg): _124.QuerySigningInfosResponse;
                toAminoMsg(message: _124.QuerySigningInfosResponse): _124.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _124.QuerySigningInfosResponseProtoMsg): _124.QuerySigningInfosResponse;
                toProto(message: _124.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _124.QuerySigningInfosResponse): _124.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _123.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.GenesisState;
                fromPartial(object: Partial<_123.GenesisState>): _123.GenesisState;
                fromAmino(object: _123.GenesisStateAmino): _123.GenesisState;
                toAmino(message: _123.GenesisState): _123.GenesisStateAmino;
                fromAminoMsg(object: _123.GenesisStateAminoMsg): _123.GenesisState;
                toAminoMsg(message: _123.GenesisState): _123.GenesisStateAminoMsg;
                fromProtoMsg(message: _123.GenesisStateProtoMsg): _123.GenesisState;
                toProto(message: _123.GenesisState): Uint8Array;
                toProtoMsg(message: _123.GenesisState): _123.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _123.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.SigningInfo;
                fromPartial(object: Partial<_123.SigningInfo>): _123.SigningInfo;
                fromAmino(object: _123.SigningInfoAmino): _123.SigningInfo;
                toAmino(message: _123.SigningInfo): _123.SigningInfoAmino;
                fromAminoMsg(object: _123.SigningInfoAminoMsg): _123.SigningInfo;
                toAminoMsg(message: _123.SigningInfo): _123.SigningInfoAminoMsg;
                fromProtoMsg(message: _123.SigningInfoProtoMsg): _123.SigningInfo;
                toProto(message: _123.SigningInfo): Uint8Array;
                toProtoMsg(message: _123.SigningInfo): _123.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _123.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.ValidatorMissedBlocks;
                fromPartial(object: Partial<_123.ValidatorMissedBlocks>): _123.ValidatorMissedBlocks;
                fromAmino(object: _123.ValidatorMissedBlocksAmino): _123.ValidatorMissedBlocks;
                toAmino(message: _123.ValidatorMissedBlocks): _123.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _123.ValidatorMissedBlocksAminoMsg): _123.ValidatorMissedBlocks;
                toAminoMsg(message: _123.ValidatorMissedBlocks): _123.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _123.ValidatorMissedBlocksProtoMsg): _123.ValidatorMissedBlocks;
                toProto(message: _123.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _123.ValidatorMissedBlocks): _123.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _123.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MissedBlock;
                fromPartial(object: Partial<_123.MissedBlock>): _123.MissedBlock;
                fromAmino(object: _123.MissedBlockAmino): _123.MissedBlock;
                toAmino(message: _123.MissedBlock): _123.MissedBlockAmino;
                fromAminoMsg(object: _123.MissedBlockAminoMsg): _123.MissedBlock;
                toAminoMsg(message: _123.MissedBlock): _123.MissedBlockAminoMsg;
                fromProtoMsg(message: _123.MissedBlockProtoMsg): _123.MissedBlock;
                toProto(message: _123.MissedBlock): Uint8Array;
                toProtoMsg(message: _123.MissedBlock): _123.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _245.MsgClientImpl;
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _129.QueryValidatorsRequest): Promise<_129.QueryValidatorsResponse>;
                validator(request: _129.QueryValidatorRequest): Promise<_129.QueryValidatorResponse>;
                validatorDelegations(request: _129.QueryValidatorDelegationsRequest): Promise<_129.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _129.QueryValidatorUnbondingDelegationsRequest): Promise<_129.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _129.QueryDelegationRequest): Promise<_129.QueryDelegationResponse>;
                unbondingDelegation(request: _129.QueryUnbondingDelegationRequest): Promise<_129.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _129.QueryDelegatorDelegationsRequest): Promise<_129.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _129.QueryDelegatorUnbondingDelegationsRequest): Promise<_129.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _129.QueryRedelegationsRequest): Promise<_129.QueryRedelegationsResponse>;
                delegatorValidators(request: _129.QueryDelegatorValidatorsRequest): Promise<_129.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _129.QueryDelegatorValidatorRequest): Promise<_129.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _129.QueryHistoricalInfoRequest): Promise<_129.QueryHistoricalInfoResponse>;
                pool(request?: _129.QueryPoolRequest): Promise<_129.QueryPoolResponse>;
                params(request?: _129.QueryParamsRequest): Promise<_129.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _219.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _131.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _131.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _131.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _131.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _131.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _131.MsgCreateValidator): {
                        typeUrl: string;
                        value: _131.MsgCreateValidator;
                    };
                    editValidator(value: _131.MsgEditValidator): {
                        typeUrl: string;
                        value: _131.MsgEditValidator;
                    };
                    delegate(value: _131.MsgDelegate): {
                        typeUrl: string;
                        value: _131.MsgDelegate;
                    };
                    beginRedelegate(value: _131.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _131.MsgBeginRedelegate;
                    };
                    undelegate(value: _131.MsgUndelegate): {
                        typeUrl: string;
                        value: _131.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _131.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _131.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _131.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _131.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _131.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _131.MsgCreateValidator): {
                        typeUrl: string;
                        value: _131.MsgCreateValidator;
                    };
                    editValidator(value: _131.MsgEditValidator): {
                        typeUrl: string;
                        value: _131.MsgEditValidator;
                    };
                    delegate(value: _131.MsgDelegate): {
                        typeUrl: string;
                        value: _131.MsgDelegate;
                    };
                    beginRedelegate(value: _131.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _131.MsgBeginRedelegate;
                    };
                    undelegate(value: _131.MsgUndelegate): {
                        typeUrl: string;
                        value: _131.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _131.MsgCreateValidator) => _131.MsgCreateValidatorAmino;
                    fromAmino: (object: _131.MsgCreateValidatorAmino) => _131.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _131.MsgEditValidator) => _131.MsgEditValidatorAmino;
                    fromAmino: (object: _131.MsgEditValidatorAmino) => _131.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _131.MsgDelegate) => _131.MsgDelegateAmino;
                    fromAmino: (object: _131.MsgDelegateAmino) => _131.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _131.MsgBeginRedelegate) => _131.MsgBeginRedelegateAmino;
                    fromAmino: (object: _131.MsgBeginRedelegateAmino) => _131.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _131.MsgUndelegate) => _131.MsgUndelegateAmino;
                    fromAmino: (object: _131.MsgUndelegateAmino) => _131.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _131.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.MsgCreateValidator;
                fromPartial(object: Partial<_131.MsgCreateValidator>): _131.MsgCreateValidator;
                fromAmino(object: _131.MsgCreateValidatorAmino): _131.MsgCreateValidator;
                toAmino(message: _131.MsgCreateValidator): _131.MsgCreateValidatorAmino;
                fromAminoMsg(object: _131.MsgCreateValidatorAminoMsg): _131.MsgCreateValidator;
                toAminoMsg(message: _131.MsgCreateValidator): _131.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _131.MsgCreateValidatorProtoMsg): _131.MsgCreateValidator;
                toProto(message: _131.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _131.MsgCreateValidator): _131.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _131.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _131.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_131.MsgCreateValidatorResponse>): _131.MsgCreateValidatorResponse;
                fromAmino(_: _131.MsgCreateValidatorResponseAmino): _131.MsgCreateValidatorResponse;
                toAmino(_: _131.MsgCreateValidatorResponse): _131.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _131.MsgCreateValidatorResponseAminoMsg): _131.MsgCreateValidatorResponse;
                toAminoMsg(message: _131.MsgCreateValidatorResponse): _131.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _131.MsgCreateValidatorResponseProtoMsg): _131.MsgCreateValidatorResponse;
                toProto(message: _131.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _131.MsgCreateValidatorResponse): _131.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _131.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.MsgEditValidator;
                fromPartial(object: Partial<_131.MsgEditValidator>): _131.MsgEditValidator;
                fromAmino(object: _131.MsgEditValidatorAmino): _131.MsgEditValidator;
                toAmino(message: _131.MsgEditValidator): _131.MsgEditValidatorAmino;
                fromAminoMsg(object: _131.MsgEditValidatorAminoMsg): _131.MsgEditValidator;
                toAminoMsg(message: _131.MsgEditValidator): _131.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _131.MsgEditValidatorProtoMsg): _131.MsgEditValidator;
                toProto(message: _131.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _131.MsgEditValidator): _131.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _131.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _131.MsgEditValidatorResponse;
                fromPartial(_: Partial<_131.MsgEditValidatorResponse>): _131.MsgEditValidatorResponse;
                fromAmino(_: _131.MsgEditValidatorResponseAmino): _131.MsgEditValidatorResponse;
                toAmino(_: _131.MsgEditValidatorResponse): _131.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _131.MsgEditValidatorResponseAminoMsg): _131.MsgEditValidatorResponse;
                toAminoMsg(message: _131.MsgEditValidatorResponse): _131.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _131.MsgEditValidatorResponseProtoMsg): _131.MsgEditValidatorResponse;
                toProto(message: _131.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _131.MsgEditValidatorResponse): _131.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _131.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.MsgDelegate;
                fromPartial(object: Partial<_131.MsgDelegate>): _131.MsgDelegate;
                fromAmino(object: _131.MsgDelegateAmino): _131.MsgDelegate;
                toAmino(message: _131.MsgDelegate): _131.MsgDelegateAmino;
                fromAminoMsg(object: _131.MsgDelegateAminoMsg): _131.MsgDelegate;
                toAminoMsg(message: _131.MsgDelegate): _131.MsgDelegateAminoMsg;
                fromProtoMsg(message: _131.MsgDelegateProtoMsg): _131.MsgDelegate;
                toProto(message: _131.MsgDelegate): Uint8Array;
                toProtoMsg(message: _131.MsgDelegate): _131.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _131.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _131.MsgDelegateResponse;
                fromPartial(_: Partial<_131.MsgDelegateResponse>): _131.MsgDelegateResponse;
                fromAmino(_: _131.MsgDelegateResponseAmino): _131.MsgDelegateResponse;
                toAmino(_: _131.MsgDelegateResponse): _131.MsgDelegateResponseAmino;
                fromAminoMsg(object: _131.MsgDelegateResponseAminoMsg): _131.MsgDelegateResponse;
                toAminoMsg(message: _131.MsgDelegateResponse): _131.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _131.MsgDelegateResponseProtoMsg): _131.MsgDelegateResponse;
                toProto(message: _131.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _131.MsgDelegateResponse): _131.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _131.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.MsgBeginRedelegate;
                fromPartial(object: Partial<_131.MsgBeginRedelegate>): _131.MsgBeginRedelegate;
                fromAmino(object: _131.MsgBeginRedelegateAmino): _131.MsgBeginRedelegate;
                toAmino(message: _131.MsgBeginRedelegate): _131.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _131.MsgBeginRedelegateAminoMsg): _131.MsgBeginRedelegate;
                toAminoMsg(message: _131.MsgBeginRedelegate): _131.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _131.MsgBeginRedelegateProtoMsg): _131.MsgBeginRedelegate;
                toProto(message: _131.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _131.MsgBeginRedelegate): _131.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _131.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_131.MsgBeginRedelegateResponse>): _131.MsgBeginRedelegateResponse;
                fromAmino(object: _131.MsgBeginRedelegateResponseAmino): _131.MsgBeginRedelegateResponse;
                toAmino(message: _131.MsgBeginRedelegateResponse): _131.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _131.MsgBeginRedelegateResponseAminoMsg): _131.MsgBeginRedelegateResponse;
                toAminoMsg(message: _131.MsgBeginRedelegateResponse): _131.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _131.MsgBeginRedelegateResponseProtoMsg): _131.MsgBeginRedelegateResponse;
                toProto(message: _131.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _131.MsgBeginRedelegateResponse): _131.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _131.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.MsgUndelegate;
                fromPartial(object: Partial<_131.MsgUndelegate>): _131.MsgUndelegate;
                fromAmino(object: _131.MsgUndelegateAmino): _131.MsgUndelegate;
                toAmino(message: _131.MsgUndelegate): _131.MsgUndelegateAmino;
                fromAminoMsg(object: _131.MsgUndelegateAminoMsg): _131.MsgUndelegate;
                toAminoMsg(message: _131.MsgUndelegate): _131.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _131.MsgUndelegateProtoMsg): _131.MsgUndelegate;
                toProto(message: _131.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _131.MsgUndelegate): _131.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _131.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.MsgUndelegateResponse;
                fromPartial(object: Partial<_131.MsgUndelegateResponse>): _131.MsgUndelegateResponse;
                fromAmino(object: _131.MsgUndelegateResponseAmino): _131.MsgUndelegateResponse;
                toAmino(message: _131.MsgUndelegateResponse): _131.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _131.MsgUndelegateResponseAminoMsg): _131.MsgUndelegateResponse;
                toAminoMsg(message: _131.MsgUndelegateResponse): _131.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _131.MsgUndelegateResponseProtoMsg): _131.MsgUndelegateResponse;
                toProto(message: _131.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _131.MsgUndelegateResponse): _131.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _130.BondStatus;
            bondStatusToJSON(object: _130.BondStatus): string;
            BondStatus: typeof _130.BondStatus;
            BondStatusSDKType: typeof _130.BondStatus;
            BondStatusAmino: typeof _130.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _130.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.HistoricalInfo;
                fromPartial(object: Partial<_130.HistoricalInfo>): _130.HistoricalInfo;
                fromAmino(object: _130.HistoricalInfoAmino): _130.HistoricalInfo;
                toAmino(message: _130.HistoricalInfo): _130.HistoricalInfoAmino;
                fromAminoMsg(object: _130.HistoricalInfoAminoMsg): _130.HistoricalInfo;
                toAminoMsg(message: _130.HistoricalInfo): _130.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _130.HistoricalInfoProtoMsg): _130.HistoricalInfo;
                toProto(message: _130.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _130.HistoricalInfo): _130.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _130.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.CommissionRates;
                fromPartial(object: Partial<_130.CommissionRates>): _130.CommissionRates;
                fromAmino(object: _130.CommissionRatesAmino): _130.CommissionRates;
                toAmino(message: _130.CommissionRates): _130.CommissionRatesAmino;
                fromAminoMsg(object: _130.CommissionRatesAminoMsg): _130.CommissionRates;
                toAminoMsg(message: _130.CommissionRates): _130.CommissionRatesAminoMsg;
                fromProtoMsg(message: _130.CommissionRatesProtoMsg): _130.CommissionRates;
                toProto(message: _130.CommissionRates): Uint8Array;
                toProtoMsg(message: _130.CommissionRates): _130.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _130.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.Commission;
                fromPartial(object: Partial<_130.Commission>): _130.Commission;
                fromAmino(object: _130.CommissionAmino): _130.Commission;
                toAmino(message: _130.Commission): _130.CommissionAmino;
                fromAminoMsg(object: _130.CommissionAminoMsg): _130.Commission;
                toAminoMsg(message: _130.Commission): _130.CommissionAminoMsg;
                fromProtoMsg(message: _130.CommissionProtoMsg): _130.Commission;
                toProto(message: _130.Commission): Uint8Array;
                toProtoMsg(message: _130.Commission): _130.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _130.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.Description;
                fromPartial(object: Partial<_130.Description>): _130.Description;
                fromAmino(object: _130.DescriptionAmino): _130.Description;
                toAmino(message: _130.Description): _130.DescriptionAmino;
                fromAminoMsg(object: _130.DescriptionAminoMsg): _130.Description;
                toAminoMsg(message: _130.Description): _130.DescriptionAminoMsg;
                fromProtoMsg(message: _130.DescriptionProtoMsg): _130.Description;
                toProto(message: _130.Description): Uint8Array;
                toProtoMsg(message: _130.Description): _130.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _130.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.Validator;
                fromPartial(object: Partial<_130.Validator>): _130.Validator;
                fromAmino(object: _130.ValidatorAmino): _130.Validator;
                toAmino(message: _130.Validator): _130.ValidatorAmino;
                fromAminoMsg(object: _130.ValidatorAminoMsg): _130.Validator;
                toAminoMsg(message: _130.Validator): _130.ValidatorAminoMsg;
                fromProtoMsg(message: _130.ValidatorProtoMsg): _130.Validator;
                toProto(message: _130.Validator): Uint8Array;
                toProtoMsg(message: _130.Validator): _130.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _130.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.ValAddresses;
                fromPartial(object: Partial<_130.ValAddresses>): _130.ValAddresses;
                fromAmino(object: _130.ValAddressesAmino): _130.ValAddresses;
                toAmino(message: _130.ValAddresses): _130.ValAddressesAmino;
                fromAminoMsg(object: _130.ValAddressesAminoMsg): _130.ValAddresses;
                toAminoMsg(message: _130.ValAddresses): _130.ValAddressesAminoMsg;
                fromProtoMsg(message: _130.ValAddressesProtoMsg): _130.ValAddresses;
                toProto(message: _130.ValAddresses): Uint8Array;
                toProtoMsg(message: _130.ValAddresses): _130.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _130.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.DVPair;
                fromPartial(object: Partial<_130.DVPair>): _130.DVPair;
                fromAmino(object: _130.DVPairAmino): _130.DVPair;
                toAmino(message: _130.DVPair): _130.DVPairAmino;
                fromAminoMsg(object: _130.DVPairAminoMsg): _130.DVPair;
                toAminoMsg(message: _130.DVPair): _130.DVPairAminoMsg;
                fromProtoMsg(message: _130.DVPairProtoMsg): _130.DVPair;
                toProto(message: _130.DVPair): Uint8Array;
                toProtoMsg(message: _130.DVPair): _130.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _130.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.DVPairs;
                fromPartial(object: Partial<_130.DVPairs>): _130.DVPairs;
                fromAmino(object: _130.DVPairsAmino): _130.DVPairs;
                toAmino(message: _130.DVPairs): _130.DVPairsAmino;
                fromAminoMsg(object: _130.DVPairsAminoMsg): _130.DVPairs;
                toAminoMsg(message: _130.DVPairs): _130.DVPairsAminoMsg;
                fromProtoMsg(message: _130.DVPairsProtoMsg): _130.DVPairs;
                toProto(message: _130.DVPairs): Uint8Array;
                toProtoMsg(message: _130.DVPairs): _130.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _130.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.DVVTriplet;
                fromPartial(object: Partial<_130.DVVTriplet>): _130.DVVTriplet;
                fromAmino(object: _130.DVVTripletAmino): _130.DVVTriplet;
                toAmino(message: _130.DVVTriplet): _130.DVVTripletAmino;
                fromAminoMsg(object: _130.DVVTripletAminoMsg): _130.DVVTriplet;
                toAminoMsg(message: _130.DVVTriplet): _130.DVVTripletAminoMsg;
                fromProtoMsg(message: _130.DVVTripletProtoMsg): _130.DVVTriplet;
                toProto(message: _130.DVVTriplet): Uint8Array;
                toProtoMsg(message: _130.DVVTriplet): _130.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _130.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.DVVTriplets;
                fromPartial(object: Partial<_130.DVVTriplets>): _130.DVVTriplets;
                fromAmino(object: _130.DVVTripletsAmino): _130.DVVTriplets;
                toAmino(message: _130.DVVTriplets): _130.DVVTripletsAmino;
                fromAminoMsg(object: _130.DVVTripletsAminoMsg): _130.DVVTriplets;
                toAminoMsg(message: _130.DVVTriplets): _130.DVVTripletsAminoMsg;
                fromProtoMsg(message: _130.DVVTripletsProtoMsg): _130.DVVTriplets;
                toProto(message: _130.DVVTriplets): Uint8Array;
                toProtoMsg(message: _130.DVVTriplets): _130.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _130.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.Delegation;
                fromPartial(object: Partial<_130.Delegation>): _130.Delegation;
                fromAmino(object: _130.DelegationAmino): _130.Delegation;
                toAmino(message: _130.Delegation): _130.DelegationAmino;
                fromAminoMsg(object: _130.DelegationAminoMsg): _130.Delegation;
                toAminoMsg(message: _130.Delegation): _130.DelegationAminoMsg;
                fromProtoMsg(message: _130.DelegationProtoMsg): _130.Delegation;
                toProto(message: _130.Delegation): Uint8Array;
                toProtoMsg(message: _130.Delegation): _130.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _130.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.UnbondingDelegation;
                fromPartial(object: Partial<_130.UnbondingDelegation>): _130.UnbondingDelegation;
                fromAmino(object: _130.UnbondingDelegationAmino): _130.UnbondingDelegation;
                toAmino(message: _130.UnbondingDelegation): _130.UnbondingDelegationAmino;
                fromAminoMsg(object: _130.UnbondingDelegationAminoMsg): _130.UnbondingDelegation;
                toAminoMsg(message: _130.UnbondingDelegation): _130.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _130.UnbondingDelegationProtoMsg): _130.UnbondingDelegation;
                toProto(message: _130.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _130.UnbondingDelegation): _130.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _130.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.UnbondingDelegationEntry;
                fromPartial(object: Partial<_130.UnbondingDelegationEntry>): _130.UnbondingDelegationEntry;
                fromAmino(object: _130.UnbondingDelegationEntryAmino): _130.UnbondingDelegationEntry;
                toAmino(message: _130.UnbondingDelegationEntry): _130.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _130.UnbondingDelegationEntryAminoMsg): _130.UnbondingDelegationEntry;
                toAminoMsg(message: _130.UnbondingDelegationEntry): _130.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _130.UnbondingDelegationEntryProtoMsg): _130.UnbondingDelegationEntry;
                toProto(message: _130.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _130.UnbondingDelegationEntry): _130.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _130.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.RedelegationEntry;
                fromPartial(object: Partial<_130.RedelegationEntry>): _130.RedelegationEntry;
                fromAmino(object: _130.RedelegationEntryAmino): _130.RedelegationEntry;
                toAmino(message: _130.RedelegationEntry): _130.RedelegationEntryAmino;
                fromAminoMsg(object: _130.RedelegationEntryAminoMsg): _130.RedelegationEntry;
                toAminoMsg(message: _130.RedelegationEntry): _130.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _130.RedelegationEntryProtoMsg): _130.RedelegationEntry;
                toProto(message: _130.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _130.RedelegationEntry): _130.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _130.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.Redelegation;
                fromPartial(object: Partial<_130.Redelegation>): _130.Redelegation;
                fromAmino(object: _130.RedelegationAmino): _130.Redelegation;
                toAmino(message: _130.Redelegation): _130.RedelegationAmino;
                fromAminoMsg(object: _130.RedelegationAminoMsg): _130.Redelegation;
                toAminoMsg(message: _130.Redelegation): _130.RedelegationAminoMsg;
                fromProtoMsg(message: _130.RedelegationProtoMsg): _130.Redelegation;
                toProto(message: _130.Redelegation): Uint8Array;
                toProtoMsg(message: _130.Redelegation): _130.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _130.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.Params;
                fromPartial(object: Partial<_130.Params>): _130.Params;
                fromAmino(object: _130.ParamsAmino): _130.Params;
                toAmino(message: _130.Params): _130.ParamsAmino;
                fromAminoMsg(object: _130.ParamsAminoMsg): _130.Params;
                toAminoMsg(message: _130.Params): _130.ParamsAminoMsg;
                fromProtoMsg(message: _130.ParamsProtoMsg): _130.Params;
                toProto(message: _130.Params): Uint8Array;
                toProtoMsg(message: _130.Params): _130.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _130.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.DelegationResponse;
                fromPartial(object: Partial<_130.DelegationResponse>): _130.DelegationResponse;
                fromAmino(object: _130.DelegationResponseAmino): _130.DelegationResponse;
                toAmino(message: _130.DelegationResponse): _130.DelegationResponseAmino;
                fromAminoMsg(object: _130.DelegationResponseAminoMsg): _130.DelegationResponse;
                toAminoMsg(message: _130.DelegationResponse): _130.DelegationResponseAminoMsg;
                fromProtoMsg(message: _130.DelegationResponseProtoMsg): _130.DelegationResponse;
                toProto(message: _130.DelegationResponse): Uint8Array;
                toProtoMsg(message: _130.DelegationResponse): _130.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _130.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.RedelegationEntryResponse;
                fromPartial(object: Partial<_130.RedelegationEntryResponse>): _130.RedelegationEntryResponse;
                fromAmino(object: _130.RedelegationEntryResponseAmino): _130.RedelegationEntryResponse;
                toAmino(message: _130.RedelegationEntryResponse): _130.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _130.RedelegationEntryResponseAminoMsg): _130.RedelegationEntryResponse;
                toAminoMsg(message: _130.RedelegationEntryResponse): _130.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _130.RedelegationEntryResponseProtoMsg): _130.RedelegationEntryResponse;
                toProto(message: _130.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _130.RedelegationEntryResponse): _130.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _130.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.RedelegationResponse;
                fromPartial(object: Partial<_130.RedelegationResponse>): _130.RedelegationResponse;
                fromAmino(object: _130.RedelegationResponseAmino): _130.RedelegationResponse;
                toAmino(message: _130.RedelegationResponse): _130.RedelegationResponseAmino;
                fromAminoMsg(object: _130.RedelegationResponseAminoMsg): _130.RedelegationResponse;
                toAminoMsg(message: _130.RedelegationResponse): _130.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _130.RedelegationResponseProtoMsg): _130.RedelegationResponse;
                toProto(message: _130.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _130.RedelegationResponse): _130.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _130.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.Pool;
                fromPartial(object: Partial<_130.Pool>): _130.Pool;
                fromAmino(object: _130.PoolAmino): _130.Pool;
                toAmino(message: _130.Pool): _130.PoolAmino;
                fromAminoMsg(object: _130.PoolAminoMsg): _130.Pool;
                toAminoMsg(message: _130.Pool): _130.PoolAminoMsg;
                fromProtoMsg(message: _130.PoolProtoMsg): _130.Pool;
                toProto(message: _130.Pool): Uint8Array;
                toProtoMsg(message: _130.Pool): _130.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _129.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryValidatorsRequest;
                fromPartial(object: Partial<_129.QueryValidatorsRequest>): _129.QueryValidatorsRequest;
                fromAmino(object: _129.QueryValidatorsRequestAmino): _129.QueryValidatorsRequest;
                toAmino(message: _129.QueryValidatorsRequest): _129.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _129.QueryValidatorsRequestAminoMsg): _129.QueryValidatorsRequest;
                toAminoMsg(message: _129.QueryValidatorsRequest): _129.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _129.QueryValidatorsRequestProtoMsg): _129.QueryValidatorsRequest;
                toProto(message: _129.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _129.QueryValidatorsRequest): _129.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _129.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryValidatorsResponse;
                fromPartial(object: Partial<_129.QueryValidatorsResponse>): _129.QueryValidatorsResponse;
                fromAmino(object: _129.QueryValidatorsResponseAmino): _129.QueryValidatorsResponse;
                toAmino(message: _129.QueryValidatorsResponse): _129.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _129.QueryValidatorsResponseAminoMsg): _129.QueryValidatorsResponse;
                toAminoMsg(message: _129.QueryValidatorsResponse): _129.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _129.QueryValidatorsResponseProtoMsg): _129.QueryValidatorsResponse;
                toProto(message: _129.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _129.QueryValidatorsResponse): _129.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _129.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryValidatorRequest;
                fromPartial(object: Partial<_129.QueryValidatorRequest>): _129.QueryValidatorRequest;
                fromAmino(object: _129.QueryValidatorRequestAmino): _129.QueryValidatorRequest;
                toAmino(message: _129.QueryValidatorRequest): _129.QueryValidatorRequestAmino;
                fromAminoMsg(object: _129.QueryValidatorRequestAminoMsg): _129.QueryValidatorRequest;
                toAminoMsg(message: _129.QueryValidatorRequest): _129.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _129.QueryValidatorRequestProtoMsg): _129.QueryValidatorRequest;
                toProto(message: _129.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _129.QueryValidatorRequest): _129.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _129.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryValidatorResponse;
                fromPartial(object: Partial<_129.QueryValidatorResponse>): _129.QueryValidatorResponse;
                fromAmino(object: _129.QueryValidatorResponseAmino): _129.QueryValidatorResponse;
                toAmino(message: _129.QueryValidatorResponse): _129.QueryValidatorResponseAmino;
                fromAminoMsg(object: _129.QueryValidatorResponseAminoMsg): _129.QueryValidatorResponse;
                toAminoMsg(message: _129.QueryValidatorResponse): _129.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _129.QueryValidatorResponseProtoMsg): _129.QueryValidatorResponse;
                toProto(message: _129.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _129.QueryValidatorResponse): _129.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _129.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_129.QueryValidatorDelegationsRequest>): _129.QueryValidatorDelegationsRequest;
                fromAmino(object: _129.QueryValidatorDelegationsRequestAmino): _129.QueryValidatorDelegationsRequest;
                toAmino(message: _129.QueryValidatorDelegationsRequest): _129.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _129.QueryValidatorDelegationsRequestAminoMsg): _129.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _129.QueryValidatorDelegationsRequest): _129.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _129.QueryValidatorDelegationsRequestProtoMsg): _129.QueryValidatorDelegationsRequest;
                toProto(message: _129.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _129.QueryValidatorDelegationsRequest): _129.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _129.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_129.QueryValidatorDelegationsResponse>): _129.QueryValidatorDelegationsResponse;
                fromAmino(object: _129.QueryValidatorDelegationsResponseAmino): _129.QueryValidatorDelegationsResponse;
                toAmino(message: _129.QueryValidatorDelegationsResponse): _129.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _129.QueryValidatorDelegationsResponseAminoMsg): _129.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _129.QueryValidatorDelegationsResponse): _129.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _129.QueryValidatorDelegationsResponseProtoMsg): _129.QueryValidatorDelegationsResponse;
                toProto(message: _129.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _129.QueryValidatorDelegationsResponse): _129.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _129.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_129.QueryValidatorUnbondingDelegationsRequest>): _129.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _129.QueryValidatorUnbondingDelegationsRequestAmino): _129.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _129.QueryValidatorUnbondingDelegationsRequest): _129.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _129.QueryValidatorUnbondingDelegationsRequestAminoMsg): _129.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _129.QueryValidatorUnbondingDelegationsRequest): _129.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _129.QueryValidatorUnbondingDelegationsRequestProtoMsg): _129.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _129.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _129.QueryValidatorUnbondingDelegationsRequest): _129.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _129.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_129.QueryValidatorUnbondingDelegationsResponse>): _129.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _129.QueryValidatorUnbondingDelegationsResponseAmino): _129.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _129.QueryValidatorUnbondingDelegationsResponse): _129.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _129.QueryValidatorUnbondingDelegationsResponseAminoMsg): _129.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _129.QueryValidatorUnbondingDelegationsResponse): _129.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _129.QueryValidatorUnbondingDelegationsResponseProtoMsg): _129.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _129.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _129.QueryValidatorUnbondingDelegationsResponse): _129.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _129.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryDelegationRequest;
                fromPartial(object: Partial<_129.QueryDelegationRequest>): _129.QueryDelegationRequest;
                fromAmino(object: _129.QueryDelegationRequestAmino): _129.QueryDelegationRequest;
                toAmino(message: _129.QueryDelegationRequest): _129.QueryDelegationRequestAmino;
                fromAminoMsg(object: _129.QueryDelegationRequestAminoMsg): _129.QueryDelegationRequest;
                toAminoMsg(message: _129.QueryDelegationRequest): _129.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _129.QueryDelegationRequestProtoMsg): _129.QueryDelegationRequest;
                toProto(message: _129.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _129.QueryDelegationRequest): _129.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _129.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryDelegationResponse;
                fromPartial(object: Partial<_129.QueryDelegationResponse>): _129.QueryDelegationResponse;
                fromAmino(object: _129.QueryDelegationResponseAmino): _129.QueryDelegationResponse;
                toAmino(message: _129.QueryDelegationResponse): _129.QueryDelegationResponseAmino;
                fromAminoMsg(object: _129.QueryDelegationResponseAminoMsg): _129.QueryDelegationResponse;
                toAminoMsg(message: _129.QueryDelegationResponse): _129.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _129.QueryDelegationResponseProtoMsg): _129.QueryDelegationResponse;
                toProto(message: _129.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _129.QueryDelegationResponse): _129.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _129.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_129.QueryUnbondingDelegationRequest>): _129.QueryUnbondingDelegationRequest;
                fromAmino(object: _129.QueryUnbondingDelegationRequestAmino): _129.QueryUnbondingDelegationRequest;
                toAmino(message: _129.QueryUnbondingDelegationRequest): _129.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _129.QueryUnbondingDelegationRequestAminoMsg): _129.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _129.QueryUnbondingDelegationRequest): _129.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _129.QueryUnbondingDelegationRequestProtoMsg): _129.QueryUnbondingDelegationRequest;
                toProto(message: _129.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _129.QueryUnbondingDelegationRequest): _129.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _129.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_129.QueryUnbondingDelegationResponse>): _129.QueryUnbondingDelegationResponse;
                fromAmino(object: _129.QueryUnbondingDelegationResponseAmino): _129.QueryUnbondingDelegationResponse;
                toAmino(message: _129.QueryUnbondingDelegationResponse): _129.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _129.QueryUnbondingDelegationResponseAminoMsg): _129.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _129.QueryUnbondingDelegationResponse): _129.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _129.QueryUnbondingDelegationResponseProtoMsg): _129.QueryUnbondingDelegationResponse;
                toProto(message: _129.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _129.QueryUnbondingDelegationResponse): _129.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _129.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_129.QueryDelegatorDelegationsRequest>): _129.QueryDelegatorDelegationsRequest;
                fromAmino(object: _129.QueryDelegatorDelegationsRequestAmino): _129.QueryDelegatorDelegationsRequest;
                toAmino(message: _129.QueryDelegatorDelegationsRequest): _129.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _129.QueryDelegatorDelegationsRequestAminoMsg): _129.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _129.QueryDelegatorDelegationsRequest): _129.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _129.QueryDelegatorDelegationsRequestProtoMsg): _129.QueryDelegatorDelegationsRequest;
                toProto(message: _129.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _129.QueryDelegatorDelegationsRequest): _129.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _129.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_129.QueryDelegatorDelegationsResponse>): _129.QueryDelegatorDelegationsResponse;
                fromAmino(object: _129.QueryDelegatorDelegationsResponseAmino): _129.QueryDelegatorDelegationsResponse;
                toAmino(message: _129.QueryDelegatorDelegationsResponse): _129.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _129.QueryDelegatorDelegationsResponseAminoMsg): _129.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _129.QueryDelegatorDelegationsResponse): _129.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _129.QueryDelegatorDelegationsResponseProtoMsg): _129.QueryDelegatorDelegationsResponse;
                toProto(message: _129.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _129.QueryDelegatorDelegationsResponse): _129.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _129.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_129.QueryDelegatorUnbondingDelegationsRequest>): _129.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _129.QueryDelegatorUnbondingDelegationsRequestAmino): _129.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _129.QueryDelegatorUnbondingDelegationsRequest): _129.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _129.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _129.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _129.QueryDelegatorUnbondingDelegationsRequest): _129.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _129.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _129.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _129.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _129.QueryDelegatorUnbondingDelegationsRequest): _129.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _129.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_129.QueryDelegatorUnbondingDelegationsResponse>): _129.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _129.QueryDelegatorUnbondingDelegationsResponseAmino): _129.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _129.QueryDelegatorUnbondingDelegationsResponse): _129.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _129.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _129.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _129.QueryDelegatorUnbondingDelegationsResponse): _129.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _129.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _129.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _129.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _129.QueryDelegatorUnbondingDelegationsResponse): _129.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _129.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryRedelegationsRequest;
                fromPartial(object: Partial<_129.QueryRedelegationsRequest>): _129.QueryRedelegationsRequest;
                fromAmino(object: _129.QueryRedelegationsRequestAmino): _129.QueryRedelegationsRequest;
                toAmino(message: _129.QueryRedelegationsRequest): _129.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _129.QueryRedelegationsRequestAminoMsg): _129.QueryRedelegationsRequest;
                toAminoMsg(message: _129.QueryRedelegationsRequest): _129.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _129.QueryRedelegationsRequestProtoMsg): _129.QueryRedelegationsRequest;
                toProto(message: _129.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _129.QueryRedelegationsRequest): _129.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _129.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryRedelegationsResponse;
                fromPartial(object: Partial<_129.QueryRedelegationsResponse>): _129.QueryRedelegationsResponse;
                fromAmino(object: _129.QueryRedelegationsResponseAmino): _129.QueryRedelegationsResponse;
                toAmino(message: _129.QueryRedelegationsResponse): _129.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _129.QueryRedelegationsResponseAminoMsg): _129.QueryRedelegationsResponse;
                toAminoMsg(message: _129.QueryRedelegationsResponse): _129.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _129.QueryRedelegationsResponseProtoMsg): _129.QueryRedelegationsResponse;
                toProto(message: _129.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _129.QueryRedelegationsResponse): _129.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _129.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_129.QueryDelegatorValidatorsRequest>): _129.QueryDelegatorValidatorsRequest;
                fromAmino(object: _129.QueryDelegatorValidatorsRequestAmino): _129.QueryDelegatorValidatorsRequest;
                toAmino(message: _129.QueryDelegatorValidatorsRequest): _129.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _129.QueryDelegatorValidatorsRequestAminoMsg): _129.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _129.QueryDelegatorValidatorsRequest): _129.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _129.QueryDelegatorValidatorsRequestProtoMsg): _129.QueryDelegatorValidatorsRequest;
                toProto(message: _129.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _129.QueryDelegatorValidatorsRequest): _129.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _129.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_129.QueryDelegatorValidatorsResponse>): _129.QueryDelegatorValidatorsResponse;
                fromAmino(object: _129.QueryDelegatorValidatorsResponseAmino): _129.QueryDelegatorValidatorsResponse;
                toAmino(message: _129.QueryDelegatorValidatorsResponse): _129.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _129.QueryDelegatorValidatorsResponseAminoMsg): _129.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _129.QueryDelegatorValidatorsResponse): _129.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _129.QueryDelegatorValidatorsResponseProtoMsg): _129.QueryDelegatorValidatorsResponse;
                toProto(message: _129.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _129.QueryDelegatorValidatorsResponse): _129.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _129.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_129.QueryDelegatorValidatorRequest>): _129.QueryDelegatorValidatorRequest;
                fromAmino(object: _129.QueryDelegatorValidatorRequestAmino): _129.QueryDelegatorValidatorRequest;
                toAmino(message: _129.QueryDelegatorValidatorRequest): _129.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _129.QueryDelegatorValidatorRequestAminoMsg): _129.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _129.QueryDelegatorValidatorRequest): _129.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _129.QueryDelegatorValidatorRequestProtoMsg): _129.QueryDelegatorValidatorRequest;
                toProto(message: _129.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _129.QueryDelegatorValidatorRequest): _129.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _129.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_129.QueryDelegatorValidatorResponse>): _129.QueryDelegatorValidatorResponse;
                fromAmino(object: _129.QueryDelegatorValidatorResponseAmino): _129.QueryDelegatorValidatorResponse;
                toAmino(message: _129.QueryDelegatorValidatorResponse): _129.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _129.QueryDelegatorValidatorResponseAminoMsg): _129.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _129.QueryDelegatorValidatorResponse): _129.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _129.QueryDelegatorValidatorResponseProtoMsg): _129.QueryDelegatorValidatorResponse;
                toProto(message: _129.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _129.QueryDelegatorValidatorResponse): _129.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _129.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_129.QueryHistoricalInfoRequest>): _129.QueryHistoricalInfoRequest;
                fromAmino(object: _129.QueryHistoricalInfoRequestAmino): _129.QueryHistoricalInfoRequest;
                toAmino(message: _129.QueryHistoricalInfoRequest): _129.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _129.QueryHistoricalInfoRequestAminoMsg): _129.QueryHistoricalInfoRequest;
                toAminoMsg(message: _129.QueryHistoricalInfoRequest): _129.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _129.QueryHistoricalInfoRequestProtoMsg): _129.QueryHistoricalInfoRequest;
                toProto(message: _129.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _129.QueryHistoricalInfoRequest): _129.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _129.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_129.QueryHistoricalInfoResponse>): _129.QueryHistoricalInfoResponse;
                fromAmino(object: _129.QueryHistoricalInfoResponseAmino): _129.QueryHistoricalInfoResponse;
                toAmino(message: _129.QueryHistoricalInfoResponse): _129.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _129.QueryHistoricalInfoResponseAminoMsg): _129.QueryHistoricalInfoResponse;
                toAminoMsg(message: _129.QueryHistoricalInfoResponse): _129.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _129.QueryHistoricalInfoResponseProtoMsg): _129.QueryHistoricalInfoResponse;
                toProto(message: _129.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _129.QueryHistoricalInfoResponse): _129.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _129.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _129.QueryPoolRequest;
                fromPartial(_: Partial<_129.QueryPoolRequest>): _129.QueryPoolRequest;
                fromAmino(_: _129.QueryPoolRequestAmino): _129.QueryPoolRequest;
                toAmino(_: _129.QueryPoolRequest): _129.QueryPoolRequestAmino;
                fromAminoMsg(object: _129.QueryPoolRequestAminoMsg): _129.QueryPoolRequest;
                toAminoMsg(message: _129.QueryPoolRequest): _129.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _129.QueryPoolRequestProtoMsg): _129.QueryPoolRequest;
                toProto(message: _129.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _129.QueryPoolRequest): _129.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _129.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryPoolResponse;
                fromPartial(object: Partial<_129.QueryPoolResponse>): _129.QueryPoolResponse;
                fromAmino(object: _129.QueryPoolResponseAmino): _129.QueryPoolResponse;
                toAmino(message: _129.QueryPoolResponse): _129.QueryPoolResponseAmino;
                fromAminoMsg(object: _129.QueryPoolResponseAminoMsg): _129.QueryPoolResponse;
                toAminoMsg(message: _129.QueryPoolResponse): _129.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _129.QueryPoolResponseProtoMsg): _129.QueryPoolResponse;
                toProto(message: _129.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _129.QueryPoolResponse): _129.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _129.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _129.QueryParamsRequest;
                fromPartial(_: Partial<_129.QueryParamsRequest>): _129.QueryParamsRequest;
                fromAmino(_: _129.QueryParamsRequestAmino): _129.QueryParamsRequest;
                toAmino(_: _129.QueryParamsRequest): _129.QueryParamsRequestAmino;
                fromAminoMsg(object: _129.QueryParamsRequestAminoMsg): _129.QueryParamsRequest;
                toAminoMsg(message: _129.QueryParamsRequest): _129.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _129.QueryParamsRequestProtoMsg): _129.QueryParamsRequest;
                toProto(message: _129.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _129.QueryParamsRequest): _129.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _129.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryParamsResponse;
                fromPartial(object: Partial<_129.QueryParamsResponse>): _129.QueryParamsResponse;
                fromAmino(object: _129.QueryParamsResponseAmino): _129.QueryParamsResponse;
                toAmino(message: _129.QueryParamsResponse): _129.QueryParamsResponseAmino;
                fromAminoMsg(object: _129.QueryParamsResponseAminoMsg): _129.QueryParamsResponse;
                toAminoMsg(message: _129.QueryParamsResponse): _129.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _129.QueryParamsResponseProtoMsg): _129.QueryParamsResponse;
                toProto(message: _129.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _129.QueryParamsResponse): _129.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _128.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.GenesisState;
                fromPartial(object: Partial<_128.GenesisState>): _128.GenesisState;
                fromAmino(object: _128.GenesisStateAmino): _128.GenesisState;
                toAmino(message: _128.GenesisState): _128.GenesisStateAmino;
                fromAminoMsg(object: _128.GenesisStateAminoMsg): _128.GenesisState;
                toAminoMsg(message: _128.GenesisState): _128.GenesisStateAminoMsg;
                fromProtoMsg(message: _128.GenesisStateProtoMsg): _128.GenesisState;
                toProto(message: _128.GenesisState): Uint8Array;
                toProtoMsg(message: _128.GenesisState): _128.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _128.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.LastValidatorPower;
                fromPartial(object: Partial<_128.LastValidatorPower>): _128.LastValidatorPower;
                fromAmino(object: _128.LastValidatorPowerAmino): _128.LastValidatorPower;
                toAmino(message: _128.LastValidatorPower): _128.LastValidatorPowerAmino;
                fromAminoMsg(object: _128.LastValidatorPowerAminoMsg): _128.LastValidatorPower;
                toAminoMsg(message: _128.LastValidatorPower): _128.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _128.LastValidatorPowerProtoMsg): _128.LastValidatorPower;
                toProto(message: _128.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _128.LastValidatorPower): _128.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _127.AuthorizationType;
            authorizationTypeToJSON(object: _127.AuthorizationType): string;
            AuthorizationType: typeof _127.AuthorizationType;
            AuthorizationTypeSDKType: typeof _127.AuthorizationType;
            AuthorizationTypeAmino: typeof _127.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _127.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.StakeAuthorization;
                fromPartial(object: Partial<_127.StakeAuthorization>): _127.StakeAuthorization;
                fromAmino(object: _127.StakeAuthorizationAmino): _127.StakeAuthorization;
                toAmino(message: _127.StakeAuthorization): _127.StakeAuthorizationAmino;
                fromAminoMsg(object: _127.StakeAuthorizationAminoMsg): _127.StakeAuthorization;
                toAminoMsg(message: _127.StakeAuthorization): _127.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _127.StakeAuthorizationProtoMsg): _127.StakeAuthorization;
                toProto(message: _127.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _127.StakeAuthorization): _127.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _127.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.StakeAuthorization_Validators;
                fromPartial(object: Partial<_127.StakeAuthorization_Validators>): _127.StakeAuthorization_Validators;
                fromAmino(object: _127.StakeAuthorization_ValidatorsAmino): _127.StakeAuthorization_Validators;
                toAmino(message: _127.StakeAuthorization_Validators): _127.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _127.StakeAuthorization_ValidatorsAminoMsg): _127.StakeAuthorization_Validators;
                toAminoMsg(message: _127.StakeAuthorization_Validators): _127.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _127.StakeAuthorization_ValidatorsProtoMsg): _127.StakeAuthorization_Validators;
                toProto(message: _127.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _127.StakeAuthorization_Validators): _127.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _132.SignMode;
                signModeToJSON(object: _132.SignMode): string;
                SignMode: typeof _132.SignMode;
                SignModeSDKType: typeof _132.SignMode;
                SignModeAmino: typeof _132.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _132.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.SignatureDescriptors;
                    fromPartial(object: Partial<_132.SignatureDescriptors>): _132.SignatureDescriptors;
                    fromAmino(object: _132.SignatureDescriptorsAmino): _132.SignatureDescriptors;
                    toAmino(message: _132.SignatureDescriptors): _132.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _132.SignatureDescriptorsAminoMsg): _132.SignatureDescriptors;
                    toAminoMsg(message: _132.SignatureDescriptors): _132.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _132.SignatureDescriptorsProtoMsg): _132.SignatureDescriptors;
                    toProto(message: _132.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _132.SignatureDescriptors): _132.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _132.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.SignatureDescriptor;
                    fromPartial(object: Partial<_132.SignatureDescriptor>): _132.SignatureDescriptor;
                    fromAmino(object: _132.SignatureDescriptorAmino): _132.SignatureDescriptor;
                    toAmino(message: _132.SignatureDescriptor): _132.SignatureDescriptorAmino;
                    fromAminoMsg(object: _132.SignatureDescriptorAminoMsg): _132.SignatureDescriptor;
                    toAminoMsg(message: _132.SignatureDescriptor): _132.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _132.SignatureDescriptorProtoMsg): _132.SignatureDescriptor;
                    toProto(message: _132.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _132.SignatureDescriptor): _132.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _132.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_132.SignatureDescriptor_Data>): _132.SignatureDescriptor_Data;
                    fromAmino(object: _132.SignatureDescriptor_DataAmino): _132.SignatureDescriptor_Data;
                    toAmino(message: _132.SignatureDescriptor_Data): _132.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _132.SignatureDescriptor_DataAminoMsg): _132.SignatureDescriptor_Data;
                    toAminoMsg(message: _132.SignatureDescriptor_Data): _132.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _132.SignatureDescriptor_DataProtoMsg): _132.SignatureDescriptor_Data;
                    toProto(message: _132.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _132.SignatureDescriptor_Data): _132.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _132.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_132.SignatureDescriptor_Data_Single>): _132.SignatureDescriptor_Data_Single;
                    fromAmino(object: _132.SignatureDescriptor_Data_SingleAmino): _132.SignatureDescriptor_Data_Single;
                    toAmino(message: _132.SignatureDescriptor_Data_Single): _132.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _132.SignatureDescriptor_Data_SingleAminoMsg): _132.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _132.SignatureDescriptor_Data_Single): _132.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _132.SignatureDescriptor_Data_SingleProtoMsg): _132.SignatureDescriptor_Data_Single;
                    toProto(message: _132.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _132.SignatureDescriptor_Data_Single): _132.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _132.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_132.SignatureDescriptor_Data_Multi>): _132.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _132.SignatureDescriptor_Data_MultiAmino): _132.SignatureDescriptor_Data_Multi;
                    toAmino(message: _132.SignatureDescriptor_Data_Multi): _132.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _132.SignatureDescriptor_Data_MultiAminoMsg): _132.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _132.SignatureDescriptor_Data_Multi): _132.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _132.SignatureDescriptor_Data_MultiProtoMsg): _132.SignatureDescriptor_Data_Multi;
                    toProto(message: _132.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _132.SignatureDescriptor_Data_Multi): _132.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _235.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _133.SimulateRequest): Promise<_133.SimulateResponse>;
                getTx(request: _133.GetTxRequest): Promise<_133.GetTxResponse>;
                broadcastTx(request: _133.BroadcastTxRequest): Promise<_133.BroadcastTxResponse>;
                getTxsEvent(request: _133.GetTxsEventRequest): Promise<_133.GetTxsEventResponse>;
                getBlockWithTxs(request: _133.GetBlockWithTxsRequest): Promise<_133.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _220.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _134.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.Tx;
                fromPartial(object: Partial<_134.Tx>): _134.Tx;
                fromAmino(object: _134.TxAmino): _134.Tx;
                toAmino(message: _134.Tx): _134.TxAmino;
                fromAminoMsg(object: _134.TxAminoMsg): _134.Tx;
                toAminoMsg(message: _134.Tx): _134.TxAminoMsg;
                fromProtoMsg(message: _134.TxProtoMsg): _134.Tx;
                toProto(message: _134.Tx): Uint8Array;
                toProtoMsg(message: _134.Tx): _134.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _134.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.TxRaw;
                fromPartial(object: Partial<_134.TxRaw>): _134.TxRaw;
                fromAmino(object: _134.TxRawAmino): _134.TxRaw;
                toAmino(message: _134.TxRaw): _134.TxRawAmino;
                fromAminoMsg(object: _134.TxRawAminoMsg): _134.TxRaw;
                toAminoMsg(message: _134.TxRaw): _134.TxRawAminoMsg;
                fromProtoMsg(message: _134.TxRawProtoMsg): _134.TxRaw;
                toProto(message: _134.TxRaw): Uint8Array;
                toProtoMsg(message: _134.TxRaw): _134.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _134.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.SignDoc;
                fromPartial(object: Partial<_134.SignDoc>): _134.SignDoc;
                fromAmino(object: _134.SignDocAmino): _134.SignDoc;
                toAmino(message: _134.SignDoc): _134.SignDocAmino;
                fromAminoMsg(object: _134.SignDocAminoMsg): _134.SignDoc;
                toAminoMsg(message: _134.SignDoc): _134.SignDocAminoMsg;
                fromProtoMsg(message: _134.SignDocProtoMsg): _134.SignDoc;
                toProto(message: _134.SignDoc): Uint8Array;
                toProtoMsg(message: _134.SignDoc): _134.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _134.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.TxBody;
                fromPartial(object: Partial<_134.TxBody>): _134.TxBody;
                fromAmino(object: _134.TxBodyAmino): _134.TxBody;
                toAmino(message: _134.TxBody): _134.TxBodyAmino;
                fromAminoMsg(object: _134.TxBodyAminoMsg): _134.TxBody;
                toAminoMsg(message: _134.TxBody): _134.TxBodyAminoMsg;
                fromProtoMsg(message: _134.TxBodyProtoMsg): _134.TxBody;
                toProto(message: _134.TxBody): Uint8Array;
                toProtoMsg(message: _134.TxBody): _134.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _134.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.AuthInfo;
                fromPartial(object: Partial<_134.AuthInfo>): _134.AuthInfo;
                fromAmino(object: _134.AuthInfoAmino): _134.AuthInfo;
                toAmino(message: _134.AuthInfo): _134.AuthInfoAmino;
                fromAminoMsg(object: _134.AuthInfoAminoMsg): _134.AuthInfo;
                toAminoMsg(message: _134.AuthInfo): _134.AuthInfoAminoMsg;
                fromProtoMsg(message: _134.AuthInfoProtoMsg): _134.AuthInfo;
                toProto(message: _134.AuthInfo): Uint8Array;
                toProtoMsg(message: _134.AuthInfo): _134.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _134.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.SignerInfo;
                fromPartial(object: Partial<_134.SignerInfo>): _134.SignerInfo;
                fromAmino(object: _134.SignerInfoAmino): _134.SignerInfo;
                toAmino(message: _134.SignerInfo): _134.SignerInfoAmino;
                fromAminoMsg(object: _134.SignerInfoAminoMsg): _134.SignerInfo;
                toAminoMsg(message: _134.SignerInfo): _134.SignerInfoAminoMsg;
                fromProtoMsg(message: _134.SignerInfoProtoMsg): _134.SignerInfo;
                toProto(message: _134.SignerInfo): Uint8Array;
                toProtoMsg(message: _134.SignerInfo): _134.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _134.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.ModeInfo;
                fromPartial(object: Partial<_134.ModeInfo>): _134.ModeInfo;
                fromAmino(object: _134.ModeInfoAmino): _134.ModeInfo;
                toAmino(message: _134.ModeInfo): _134.ModeInfoAmino;
                fromAminoMsg(object: _134.ModeInfoAminoMsg): _134.ModeInfo;
                toAminoMsg(message: _134.ModeInfo): _134.ModeInfoAminoMsg;
                fromProtoMsg(message: _134.ModeInfoProtoMsg): _134.ModeInfo;
                toProto(message: _134.ModeInfo): Uint8Array;
                toProtoMsg(message: _134.ModeInfo): _134.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _134.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.ModeInfo_Single;
                fromPartial(object: Partial<_134.ModeInfo_Single>): _134.ModeInfo_Single;
                fromAmino(object: _134.ModeInfo_SingleAmino): _134.ModeInfo_Single;
                toAmino(message: _134.ModeInfo_Single): _134.ModeInfo_SingleAmino;
                fromAminoMsg(object: _134.ModeInfo_SingleAminoMsg): _134.ModeInfo_Single;
                toAminoMsg(message: _134.ModeInfo_Single): _134.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _134.ModeInfo_SingleProtoMsg): _134.ModeInfo_Single;
                toProto(message: _134.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _134.ModeInfo_Single): _134.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _134.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.ModeInfo_Multi;
                fromPartial(object: Partial<_134.ModeInfo_Multi>): _134.ModeInfo_Multi;
                fromAmino(object: _134.ModeInfo_MultiAmino): _134.ModeInfo_Multi;
                toAmino(message: _134.ModeInfo_Multi): _134.ModeInfo_MultiAmino;
                fromAminoMsg(object: _134.ModeInfo_MultiAminoMsg): _134.ModeInfo_Multi;
                toAminoMsg(message: _134.ModeInfo_Multi): _134.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _134.ModeInfo_MultiProtoMsg): _134.ModeInfo_Multi;
                toProto(message: _134.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _134.ModeInfo_Multi): _134.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _134.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.Fee;
                fromPartial(object: Partial<_134.Fee>): _134.Fee;
                fromAmino(object: _134.FeeAmino): _134.Fee;
                toAmino(message: _134.Fee): _134.FeeAmino;
                fromAminoMsg(object: _134.FeeAminoMsg): _134.Fee;
                toAminoMsg(message: _134.Fee): _134.FeeAminoMsg;
                fromProtoMsg(message: _134.FeeProtoMsg): _134.Fee;
                toProto(message: _134.Fee): Uint8Array;
                toProtoMsg(message: _134.Fee): _134.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _133.OrderBy;
            orderByToJSON(object: _133.OrderBy): string;
            broadcastModeFromJSON(object: any): _133.BroadcastMode;
            broadcastModeToJSON(object: _133.BroadcastMode): string;
            OrderBy: typeof _133.OrderBy;
            OrderBySDKType: typeof _133.OrderBy;
            OrderByAmino: typeof _133.OrderBy;
            BroadcastMode: typeof _133.BroadcastMode;
            BroadcastModeSDKType: typeof _133.BroadcastMode;
            BroadcastModeAmino: typeof _133.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _133.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.GetTxsEventRequest;
                fromPartial(object: Partial<_133.GetTxsEventRequest>): _133.GetTxsEventRequest;
                fromAmino(object: _133.GetTxsEventRequestAmino): _133.GetTxsEventRequest;
                toAmino(message: _133.GetTxsEventRequest): _133.GetTxsEventRequestAmino;
                fromAminoMsg(object: _133.GetTxsEventRequestAminoMsg): _133.GetTxsEventRequest;
                toAminoMsg(message: _133.GetTxsEventRequest): _133.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _133.GetTxsEventRequestProtoMsg): _133.GetTxsEventRequest;
                toProto(message: _133.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _133.GetTxsEventRequest): _133.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _133.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.GetTxsEventResponse;
                fromPartial(object: Partial<_133.GetTxsEventResponse>): _133.GetTxsEventResponse;
                fromAmino(object: _133.GetTxsEventResponseAmino): _133.GetTxsEventResponse;
                toAmino(message: _133.GetTxsEventResponse): _133.GetTxsEventResponseAmino;
                fromAminoMsg(object: _133.GetTxsEventResponseAminoMsg): _133.GetTxsEventResponse;
                toAminoMsg(message: _133.GetTxsEventResponse): _133.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _133.GetTxsEventResponseProtoMsg): _133.GetTxsEventResponse;
                toProto(message: _133.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _133.GetTxsEventResponse): _133.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _133.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.BroadcastTxRequest;
                fromPartial(object: Partial<_133.BroadcastTxRequest>): _133.BroadcastTxRequest;
                fromAmino(object: _133.BroadcastTxRequestAmino): _133.BroadcastTxRequest;
                toAmino(message: _133.BroadcastTxRequest): _133.BroadcastTxRequestAmino;
                fromAminoMsg(object: _133.BroadcastTxRequestAminoMsg): _133.BroadcastTxRequest;
                toAminoMsg(message: _133.BroadcastTxRequest): _133.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _133.BroadcastTxRequestProtoMsg): _133.BroadcastTxRequest;
                toProto(message: _133.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _133.BroadcastTxRequest): _133.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _133.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.BroadcastTxResponse;
                fromPartial(object: Partial<_133.BroadcastTxResponse>): _133.BroadcastTxResponse;
                fromAmino(object: _133.BroadcastTxResponseAmino): _133.BroadcastTxResponse;
                toAmino(message: _133.BroadcastTxResponse): _133.BroadcastTxResponseAmino;
                fromAminoMsg(object: _133.BroadcastTxResponseAminoMsg): _133.BroadcastTxResponse;
                toAminoMsg(message: _133.BroadcastTxResponse): _133.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _133.BroadcastTxResponseProtoMsg): _133.BroadcastTxResponse;
                toProto(message: _133.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _133.BroadcastTxResponse): _133.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _133.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.SimulateRequest;
                fromPartial(object: Partial<_133.SimulateRequest>): _133.SimulateRequest;
                fromAmino(object: _133.SimulateRequestAmino): _133.SimulateRequest;
                toAmino(message: _133.SimulateRequest): _133.SimulateRequestAmino;
                fromAminoMsg(object: _133.SimulateRequestAminoMsg): _133.SimulateRequest;
                toAminoMsg(message: _133.SimulateRequest): _133.SimulateRequestAminoMsg;
                fromProtoMsg(message: _133.SimulateRequestProtoMsg): _133.SimulateRequest;
                toProto(message: _133.SimulateRequest): Uint8Array;
                toProtoMsg(message: _133.SimulateRequest): _133.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _133.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.SimulateResponse;
                fromPartial(object: Partial<_133.SimulateResponse>): _133.SimulateResponse;
                fromAmino(object: _133.SimulateResponseAmino): _133.SimulateResponse;
                toAmino(message: _133.SimulateResponse): _133.SimulateResponseAmino;
                fromAminoMsg(object: _133.SimulateResponseAminoMsg): _133.SimulateResponse;
                toAminoMsg(message: _133.SimulateResponse): _133.SimulateResponseAminoMsg;
                fromProtoMsg(message: _133.SimulateResponseProtoMsg): _133.SimulateResponse;
                toProto(message: _133.SimulateResponse): Uint8Array;
                toProtoMsg(message: _133.SimulateResponse): _133.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _133.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.GetTxRequest;
                fromPartial(object: Partial<_133.GetTxRequest>): _133.GetTxRequest;
                fromAmino(object: _133.GetTxRequestAmino): _133.GetTxRequest;
                toAmino(message: _133.GetTxRequest): _133.GetTxRequestAmino;
                fromAminoMsg(object: _133.GetTxRequestAminoMsg): _133.GetTxRequest;
                toAminoMsg(message: _133.GetTxRequest): _133.GetTxRequestAminoMsg;
                fromProtoMsg(message: _133.GetTxRequestProtoMsg): _133.GetTxRequest;
                toProto(message: _133.GetTxRequest): Uint8Array;
                toProtoMsg(message: _133.GetTxRequest): _133.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _133.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.GetTxResponse;
                fromPartial(object: Partial<_133.GetTxResponse>): _133.GetTxResponse;
                fromAmino(object: _133.GetTxResponseAmino): _133.GetTxResponse;
                toAmino(message: _133.GetTxResponse): _133.GetTxResponseAmino;
                fromAminoMsg(object: _133.GetTxResponseAminoMsg): _133.GetTxResponse;
                toAminoMsg(message: _133.GetTxResponse): _133.GetTxResponseAminoMsg;
                fromProtoMsg(message: _133.GetTxResponseProtoMsg): _133.GetTxResponse;
                toProto(message: _133.GetTxResponse): Uint8Array;
                toProtoMsg(message: _133.GetTxResponse): _133.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _133.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_133.GetBlockWithTxsRequest>): _133.GetBlockWithTxsRequest;
                fromAmino(object: _133.GetBlockWithTxsRequestAmino): _133.GetBlockWithTxsRequest;
                toAmino(message: _133.GetBlockWithTxsRequest): _133.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _133.GetBlockWithTxsRequestAminoMsg): _133.GetBlockWithTxsRequest;
                toAminoMsg(message: _133.GetBlockWithTxsRequest): _133.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _133.GetBlockWithTxsRequestProtoMsg): _133.GetBlockWithTxsRequest;
                toProto(message: _133.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _133.GetBlockWithTxsRequest): _133.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _133.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_133.GetBlockWithTxsResponse>): _133.GetBlockWithTxsResponse;
                fromAmino(object: _133.GetBlockWithTxsResponseAmino): _133.GetBlockWithTxsResponse;
                toAmino(message: _133.GetBlockWithTxsResponse): _133.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _133.GetBlockWithTxsResponseAminoMsg): _133.GetBlockWithTxsResponse;
                toAminoMsg(message: _133.GetBlockWithTxsResponse): _133.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _133.GetBlockWithTxsResponseProtoMsg): _133.GetBlockWithTxsResponse;
                toProto(message: _133.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _133.GetBlockWithTxsResponse): _133.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _236.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _135.QueryCurrentPlanRequest): Promise<_135.QueryCurrentPlanResponse>;
                appliedPlan(request: _135.QueryAppliedPlanRequest): Promise<_135.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _135.QueryUpgradedConsensusStateRequest): Promise<_135.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _135.QueryModuleVersionsRequest): Promise<_135.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _221.LCDQueryClient;
            Plan: {
                typeUrl: string;
                encode(message: _136.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.Plan;
                fromPartial(object: Partial<_136.Plan>): _136.Plan;
                fromAmino(object: _136.PlanAmino): _136.Plan;
                toAmino(message: _136.Plan): _136.PlanAmino;
                fromAminoMsg(object: _136.PlanAminoMsg): _136.Plan;
                toAminoMsg(message: _136.Plan): _136.PlanAminoMsg;
                fromProtoMsg(message: _136.PlanProtoMsg): _136.Plan;
                toProto(message: _136.Plan): Uint8Array;
                toProtoMsg(message: _136.Plan): _136.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _136.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_136.SoftwareUpgradeProposal>): _136.SoftwareUpgradeProposal;
                fromAmino(object: _136.SoftwareUpgradeProposalAmino): _136.SoftwareUpgradeProposal;
                toAmino(message: _136.SoftwareUpgradeProposal): _136.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _136.SoftwareUpgradeProposalAminoMsg): _136.SoftwareUpgradeProposal;
                toAminoMsg(message: _136.SoftwareUpgradeProposal): _136.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _136.SoftwareUpgradeProposalProtoMsg): _136.SoftwareUpgradeProposal;
                toProto(message: _136.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _136.SoftwareUpgradeProposal): _136.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _136.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_136.CancelSoftwareUpgradeProposal>): _136.CancelSoftwareUpgradeProposal;
                fromAmino(object: _136.CancelSoftwareUpgradeProposalAmino): _136.CancelSoftwareUpgradeProposal;
                toAmino(message: _136.CancelSoftwareUpgradeProposal): _136.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _136.CancelSoftwareUpgradeProposalAminoMsg): _136.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _136.CancelSoftwareUpgradeProposal): _136.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _136.CancelSoftwareUpgradeProposalProtoMsg): _136.CancelSoftwareUpgradeProposal;
                toProto(message: _136.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _136.CancelSoftwareUpgradeProposal): _136.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _136.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.ModuleVersion;
                fromPartial(object: Partial<_136.ModuleVersion>): _136.ModuleVersion;
                fromAmino(object: _136.ModuleVersionAmino): _136.ModuleVersion;
                toAmino(message: _136.ModuleVersion): _136.ModuleVersionAmino;
                fromAminoMsg(object: _136.ModuleVersionAminoMsg): _136.ModuleVersion;
                toAminoMsg(message: _136.ModuleVersion): _136.ModuleVersionAminoMsg;
                fromProtoMsg(message: _136.ModuleVersionProtoMsg): _136.ModuleVersion;
                toProto(message: _136.ModuleVersion): Uint8Array;
                toProtoMsg(message: _136.ModuleVersion): _136.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _135.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _135.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_135.QueryCurrentPlanRequest>): _135.QueryCurrentPlanRequest;
                fromAmino(_: _135.QueryCurrentPlanRequestAmino): _135.QueryCurrentPlanRequest;
                toAmino(_: _135.QueryCurrentPlanRequest): _135.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _135.QueryCurrentPlanRequestAminoMsg): _135.QueryCurrentPlanRequest;
                toAminoMsg(message: _135.QueryCurrentPlanRequest): _135.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _135.QueryCurrentPlanRequestProtoMsg): _135.QueryCurrentPlanRequest;
                toProto(message: _135.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _135.QueryCurrentPlanRequest): _135.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _135.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_135.QueryCurrentPlanResponse>): _135.QueryCurrentPlanResponse;
                fromAmino(object: _135.QueryCurrentPlanResponseAmino): _135.QueryCurrentPlanResponse;
                toAmino(message: _135.QueryCurrentPlanResponse): _135.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _135.QueryCurrentPlanResponseAminoMsg): _135.QueryCurrentPlanResponse;
                toAminoMsg(message: _135.QueryCurrentPlanResponse): _135.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _135.QueryCurrentPlanResponseProtoMsg): _135.QueryCurrentPlanResponse;
                toProto(message: _135.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _135.QueryCurrentPlanResponse): _135.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _135.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_135.QueryAppliedPlanRequest>): _135.QueryAppliedPlanRequest;
                fromAmino(object: _135.QueryAppliedPlanRequestAmino): _135.QueryAppliedPlanRequest;
                toAmino(message: _135.QueryAppliedPlanRequest): _135.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _135.QueryAppliedPlanRequestAminoMsg): _135.QueryAppliedPlanRequest;
                toAminoMsg(message: _135.QueryAppliedPlanRequest): _135.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _135.QueryAppliedPlanRequestProtoMsg): _135.QueryAppliedPlanRequest;
                toProto(message: _135.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _135.QueryAppliedPlanRequest): _135.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _135.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_135.QueryAppliedPlanResponse>): _135.QueryAppliedPlanResponse;
                fromAmino(object: _135.QueryAppliedPlanResponseAmino): _135.QueryAppliedPlanResponse;
                toAmino(message: _135.QueryAppliedPlanResponse): _135.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _135.QueryAppliedPlanResponseAminoMsg): _135.QueryAppliedPlanResponse;
                toAminoMsg(message: _135.QueryAppliedPlanResponse): _135.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _135.QueryAppliedPlanResponseProtoMsg): _135.QueryAppliedPlanResponse;
                toProto(message: _135.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _135.QueryAppliedPlanResponse): _135.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _135.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_135.QueryUpgradedConsensusStateRequest>): _135.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _135.QueryUpgradedConsensusStateRequestAmino): _135.QueryUpgradedConsensusStateRequest;
                toAmino(message: _135.QueryUpgradedConsensusStateRequest): _135.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _135.QueryUpgradedConsensusStateRequestAminoMsg): _135.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _135.QueryUpgradedConsensusStateRequest): _135.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _135.QueryUpgradedConsensusStateRequestProtoMsg): _135.QueryUpgradedConsensusStateRequest;
                toProto(message: _135.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _135.QueryUpgradedConsensusStateRequest): _135.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _135.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_135.QueryUpgradedConsensusStateResponse>): _135.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _135.QueryUpgradedConsensusStateResponseAmino): _135.QueryUpgradedConsensusStateResponse;
                toAmino(message: _135.QueryUpgradedConsensusStateResponse): _135.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _135.QueryUpgradedConsensusStateResponseAminoMsg): _135.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _135.QueryUpgradedConsensusStateResponse): _135.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _135.QueryUpgradedConsensusStateResponseProtoMsg): _135.QueryUpgradedConsensusStateResponse;
                toProto(message: _135.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _135.QueryUpgradedConsensusStateResponse): _135.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _135.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_135.QueryModuleVersionsRequest>): _135.QueryModuleVersionsRequest;
                fromAmino(object: _135.QueryModuleVersionsRequestAmino): _135.QueryModuleVersionsRequest;
                toAmino(message: _135.QueryModuleVersionsRequest): _135.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _135.QueryModuleVersionsRequestAminoMsg): _135.QueryModuleVersionsRequest;
                toAminoMsg(message: _135.QueryModuleVersionsRequest): _135.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _135.QueryModuleVersionsRequestProtoMsg): _135.QueryModuleVersionsRequest;
                toProto(message: _135.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _135.QueryModuleVersionsRequest): _135.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _135.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_135.QueryModuleVersionsResponse>): _135.QueryModuleVersionsResponse;
                fromAmino(object: _135.QueryModuleVersionsResponseAmino): _135.QueryModuleVersionsResponse;
                toAmino(message: _135.QueryModuleVersionsResponse): _135.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _135.QueryModuleVersionsResponseAminoMsg): _135.QueryModuleVersionsResponse;
                toAminoMsg(message: _135.QueryModuleVersionsResponse): _135.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _135.QueryModuleVersionsResponseProtoMsg): _135.QueryModuleVersionsResponse;
                toProto(message: _135.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _135.QueryModuleVersionsResponse): _135.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _246.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _137.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _137.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _137.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _137.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _137.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _137.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _137.MsgCreateVestingAccount) => _137.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _137.MsgCreateVestingAccountAmino) => _137.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _138.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.BaseVestingAccount;
                fromPartial(object: Partial<_138.BaseVestingAccount>): _138.BaseVestingAccount;
                fromAmino(object: _138.BaseVestingAccountAmino): _138.BaseVestingAccount;
                toAmino(message: _138.BaseVestingAccount): _138.BaseVestingAccountAmino;
                fromAminoMsg(object: _138.BaseVestingAccountAminoMsg): _138.BaseVestingAccount;
                toAminoMsg(message: _138.BaseVestingAccount): _138.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _138.BaseVestingAccountProtoMsg): _138.BaseVestingAccount;
                toProto(message: _138.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _138.BaseVestingAccount): _138.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _138.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.ContinuousVestingAccount;
                fromPartial(object: Partial<_138.ContinuousVestingAccount>): _138.ContinuousVestingAccount;
                fromAmino(object: _138.ContinuousVestingAccountAmino): _138.ContinuousVestingAccount;
                toAmino(message: _138.ContinuousVestingAccount): _138.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _138.ContinuousVestingAccountAminoMsg): _138.ContinuousVestingAccount;
                toAminoMsg(message: _138.ContinuousVestingAccount): _138.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _138.ContinuousVestingAccountProtoMsg): _138.ContinuousVestingAccount;
                toProto(message: _138.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _138.ContinuousVestingAccount): _138.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _138.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.DelayedVestingAccount;
                fromPartial(object: Partial<_138.DelayedVestingAccount>): _138.DelayedVestingAccount;
                fromAmino(object: _138.DelayedVestingAccountAmino): _138.DelayedVestingAccount;
                toAmino(message: _138.DelayedVestingAccount): _138.DelayedVestingAccountAmino;
                fromAminoMsg(object: _138.DelayedVestingAccountAminoMsg): _138.DelayedVestingAccount;
                toAminoMsg(message: _138.DelayedVestingAccount): _138.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _138.DelayedVestingAccountProtoMsg): _138.DelayedVestingAccount;
                toProto(message: _138.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _138.DelayedVestingAccount): _138.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _138.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.Period;
                fromPartial(object: Partial<_138.Period>): _138.Period;
                fromAmino(object: _138.PeriodAmino): _138.Period;
                toAmino(message: _138.Period): _138.PeriodAmino;
                fromAminoMsg(object: _138.PeriodAminoMsg): _138.Period;
                toAminoMsg(message: _138.Period): _138.PeriodAminoMsg;
                fromProtoMsg(message: _138.PeriodProtoMsg): _138.Period;
                toProto(message: _138.Period): Uint8Array;
                toProtoMsg(message: _138.Period): _138.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _138.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.PeriodicVestingAccount;
                fromPartial(object: Partial<_138.PeriodicVestingAccount>): _138.PeriodicVestingAccount;
                fromAmino(object: _138.PeriodicVestingAccountAmino): _138.PeriodicVestingAccount;
                toAmino(message: _138.PeriodicVestingAccount): _138.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _138.PeriodicVestingAccountAminoMsg): _138.PeriodicVestingAccount;
                toAminoMsg(message: _138.PeriodicVestingAccount): _138.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _138.PeriodicVestingAccountProtoMsg): _138.PeriodicVestingAccount;
                toProto(message: _138.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _138.PeriodicVestingAccount): _138.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _138.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.PermanentLockedAccount;
                fromPartial(object: Partial<_138.PermanentLockedAccount>): _138.PermanentLockedAccount;
                fromAmino(object: _138.PermanentLockedAccountAmino): _138.PermanentLockedAccount;
                toAmino(message: _138.PermanentLockedAccount): _138.PermanentLockedAccountAmino;
                fromAminoMsg(object: _138.PermanentLockedAccountAminoMsg): _138.PermanentLockedAccount;
                toAminoMsg(message: _138.PermanentLockedAccount): _138.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _138.PermanentLockedAccountProtoMsg): _138.PermanentLockedAccount;
                toProto(message: _138.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _138.PermanentLockedAccount): _138.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _137.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.MsgCreateVestingAccount;
                fromPartial(object: Partial<_137.MsgCreateVestingAccount>): _137.MsgCreateVestingAccount;
                fromAmino(object: _137.MsgCreateVestingAccountAmino): _137.MsgCreateVestingAccount;
                toAmino(message: _137.MsgCreateVestingAccount): _137.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _137.MsgCreateVestingAccountAminoMsg): _137.MsgCreateVestingAccount;
                toAminoMsg(message: _137.MsgCreateVestingAccount): _137.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _137.MsgCreateVestingAccountProtoMsg): _137.MsgCreateVestingAccount;
                toProto(message: _137.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _137.MsgCreateVestingAccount): _137.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _137.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _137.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_137.MsgCreateVestingAccountResponse>): _137.MsgCreateVestingAccountResponse;
                fromAmino(_: _137.MsgCreateVestingAccountResponseAmino): _137.MsgCreateVestingAccountResponse;
                toAmino(_: _137.MsgCreateVestingAccountResponse): _137.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _137.MsgCreateVestingAccountResponseAminoMsg): _137.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _137.MsgCreateVestingAccountResponse): _137.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _137.MsgCreateVestingAccountResponseProtoMsg): _137.MsgCreateVestingAccountResponse;
                toProto(message: _137.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _137.MsgCreateVestingAccountResponse): _137.MsgCreateVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _237.MsgClientImpl;
                };
                bank: {
                    v1beta1: _238.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _239.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _240.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _241.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _242.MsgClientImpl;
                };
                gov: {
                    v1beta1: _243.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _244.MsgClientImpl;
                };
                staking: {
                    v1beta1: _245.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _246.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _71.QueryAccountsRequest): Promise<_71.QueryAccountsResponse>;
                        account(request: _71.QueryAccountRequest): Promise<_71.QueryAccountResponse>;
                        params(request?: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                        moduleAccountByName(request: _71.QueryModuleAccountByNameRequest): Promise<_71.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _75.QueryGrantsRequest): Promise<_75.QueryGrantsResponse>;
                        granterGrants(request: _75.QueryGranterGrantsRequest): Promise<_75.QueryGranterGrantsResponse>;
                        granteeGrants(request: _75.QueryGranteeGrantsRequest): Promise<_75.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _80.QueryBalanceRequest): Promise<_80.QueryBalanceResponse>;
                        allBalances(request: _80.QueryAllBalancesRequest): Promise<_80.QueryAllBalancesResponse>;
                        spendableBalances(request: _80.QuerySpendableBalancesRequest): Promise<_80.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _80.QueryTotalSupplyRequest): Promise<_80.QueryTotalSupplyResponse>;
                        supplyOf(request: _80.QuerySupplyOfRequest): Promise<_80.QuerySupplyOfResponse>;
                        params(request?: _80.QueryParamsRequest): Promise<_80.QueryParamsResponse>;
                        denomMetadata(request: _80.QueryDenomMetadataRequest): Promise<_80.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _80.QueryDenomsMetadataRequest): Promise<_80.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _84.ConfigRequest): Promise<_84.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _91.GetNodeInfoRequest): Promise<_91.GetNodeInfoResponse>;
                            getSyncing(request?: _91.GetSyncingRequest): Promise<_91.GetSyncingResponse>;
                            getLatestBlock(request?: _91.GetLatestBlockRequest): Promise<_91.GetLatestBlockResponse>;
                            getBlockByHeight(request: _91.GetBlockByHeightRequest): Promise<_91.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _91.GetLatestValidatorSetRequest): Promise<_91.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _91.GetValidatorSetByHeightRequest): Promise<_91.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _103.QueryValidatorOutstandingRewardsRequest): Promise<_103.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _103.QueryValidatorCommissionRequest): Promise<_103.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _103.QueryValidatorSlashesRequest): Promise<_103.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _103.QueryDelegationRewardsRequest): Promise<_103.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _103.QueryDelegationTotalRewardsRequest): Promise<_103.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _103.QueryDelegatorValidatorsRequest): Promise<_103.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _103.QueryDelegatorWithdrawAddressRequest): Promise<_103.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _103.QueryCommunityPoolRequest): Promise<_103.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _107.QueryEvidenceRequest): Promise<_107.QueryEvidenceResponse>;
                        allEvidence(request?: _107.QueryAllEvidenceRequest): Promise<_107.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _111.QueryAllowanceRequest): Promise<_111.QueryAllowanceResponse>;
                        allowances(request: _111.QueryAllowancesRequest): Promise<_111.QueryAllowancesResponse>;
                        allowancesByGranter(request: _111.QueryAllowancesByGranterRequest): Promise<_111.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _116.QueryProposalRequest): Promise<_116.QueryProposalResponse>;
                        proposals(request: _116.QueryProposalsRequest): Promise<_116.QueryProposalsResponse>;
                        vote(request: _116.QueryVoteRequest): Promise<_116.QueryVoteResponse>;
                        votes(request: _116.QueryVotesRequest): Promise<_116.QueryVotesResponse>;
                        params(request: _116.QueryParamsRequest): Promise<_116.QueryParamsResponse>;
                        deposit(request: _116.QueryDepositRequest): Promise<_116.QueryDepositResponse>;
                        deposits(request: _116.QueryDepositsRequest): Promise<_116.QueryDepositsResponse>;
                        tallyResult(request: _116.QueryTallyResultRequest): Promise<_116.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _120.QueryParamsRequest): Promise<_120.QueryParamsResponse>;
                        inflation(request?: _120.QueryInflationRequest): Promise<_120.QueryInflationResponse>;
                        annualProvisions(request?: _120.QueryAnnualProvisionsRequest): Promise<_120.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _124.QueryParamsRequest): Promise<_124.QueryParamsResponse>;
                        signingInfo(request: _124.QuerySigningInfoRequest): Promise<_124.QuerySigningInfoResponse>;
                        signingInfos(request?: _124.QuerySigningInfosRequest): Promise<_124.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _129.QueryValidatorsRequest): Promise<_129.QueryValidatorsResponse>;
                        validator(request: _129.QueryValidatorRequest): Promise<_129.QueryValidatorResponse>;
                        validatorDelegations(request: _129.QueryValidatorDelegationsRequest): Promise<_129.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _129.QueryValidatorUnbondingDelegationsRequest): Promise<_129.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _129.QueryDelegationRequest): Promise<_129.QueryDelegationResponse>;
                        unbondingDelegation(request: _129.QueryUnbondingDelegationRequest): Promise<_129.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _129.QueryDelegatorDelegationsRequest): Promise<_129.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _129.QueryDelegatorUnbondingDelegationsRequest): Promise<_129.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _129.QueryRedelegationsRequest): Promise<_129.QueryRedelegationsResponse>;
                        delegatorValidators(request: _129.QueryDelegatorValidatorsRequest): Promise<_129.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _129.QueryDelegatorValidatorRequest): Promise<_129.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _129.QueryHistoricalInfoRequest): Promise<_129.QueryHistoricalInfoResponse>;
                        pool(request?: _129.QueryPoolRequest): Promise<_129.QueryPoolResponse>;
                        params(request?: _129.QueryParamsRequest): Promise<_129.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _133.SimulateRequest): Promise<_133.SimulateResponse>;
                        getTx(request: _133.GetTxRequest): Promise<_133.GetTxResponse>;
                        broadcastTx(request: _133.BroadcastTxRequest): Promise<_133.BroadcastTxResponse>;
                        getTxsEvent(request: _133.GetTxsEventRequest): Promise<_133.GetTxsEventResponse>;
                        getBlockWithTxs(request: _133.GetBlockWithTxsRequest): Promise<_133.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _135.QueryCurrentPlanRequest): Promise<_135.QueryCurrentPlanResponse>;
                        appliedPlan(request: _135.QueryAppliedPlanRequest): Promise<_135.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _135.QueryUpgradedConsensusStateRequest): Promise<_135.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _135.QueryModuleVersionsRequest): Promise<_135.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _207.LCDQueryClient;
                };
                authz: {
                    v1beta1: _208.LCDQueryClient;
                };
                bank: {
                    v1beta1: _209.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _210.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _211.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _212.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _213.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _214.LCDQueryClient;
                };
                gov: {
                    v1beta1: _215.LCDQueryClient;
                };
                mint: {
                    v1beta1: _216.LCDQueryClient;
                };
                params: {
                    v1beta1: _217.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _218.LCDQueryClient;
                };
                staking: {
                    v1beta1: _219.LCDQueryClient;
                };
                tx: {
                    v1beta1: _220.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _221.LCDQueryClient;
                };
            };
        }>;
    };
}
