import * as _47 from "./auth/v1beta1/auth";
import * as _48 from "./auth/v1beta1/genesis";
import * as _49 from "./auth/v1beta1/query";
import * as _50 from "./authz/v1beta1/authz";
import * as _51 from "./authz/v1beta1/event";
import * as _52 from "./authz/v1beta1/genesis";
import * as _53 from "./authz/v1beta1/query";
import * as _54 from "./authz/v1beta1/tx";
import * as _55 from "./bank/v1beta1/authz";
import * as _56 from "./bank/v1beta1/bank";
import * as _57 from "./bank/v1beta1/genesis";
import * as _58 from "./bank/v1beta1/query";
import * as _59 from "./bank/v1beta1/tx";
import * as _60 from "./base/abci/v1beta1/abci";
import * as _61 from "./base/kv/v1beta1/kv";
import * as _62 from "./base/node/v1beta1/query";
import * as _63 from "./base/query/v1beta1/pagination";
import * as _64 from "./base/reflection/v1beta1/reflection";
import * as _65 from "./base/reflection/v2alpha1/reflection";
import * as _66 from "./base/snapshots/v1beta1/snapshot";
import * as _67 from "./base/store/v1beta1/commit_info";
import * as _68 from "./base/store/v1beta1/listening";
import * as _69 from "./base/tendermint/v1beta1/query";
import * as _70 from "./base/v1beta1/coin";
import * as _71 from "./capability/v1beta1/capability";
import * as _72 from "./capability/v1beta1/genesis";
import * as _73 from "./crisis/v1beta1/genesis";
import * as _74 from "./crisis/v1beta1/tx";
import * as _75 from "./crypto/ed25519/keys";
import * as _76 from "./crypto/multisig/keys";
import * as _77 from "./crypto/secp256k1/keys";
import * as _78 from "./crypto/secp256r1/keys";
import * as _79 from "./distribution/v1beta1/distribution";
import * as _80 from "./distribution/v1beta1/genesis";
import * as _81 from "./distribution/v1beta1/query";
import * as _82 from "./distribution/v1beta1/tx";
import * as _83 from "./evidence/v1beta1/evidence";
import * as _84 from "./evidence/v1beta1/genesis";
import * as _85 from "./evidence/v1beta1/query";
import * as _86 from "./evidence/v1beta1/tx";
import * as _87 from "./feegrant/v1beta1/feegrant";
import * as _88 from "./feegrant/v1beta1/genesis";
import * as _89 from "./feegrant/v1beta1/query";
import * as _90 from "./feegrant/v1beta1/tx";
import * as _91 from "./genutil/v1beta1/genesis";
import * as _92 from "./gov/v1beta1/genesis";
import * as _93 from "./gov/v1beta1/gov";
import * as _94 from "./gov/v1beta1/query";
import * as _95 from "./gov/v1beta1/tx";
import * as _96 from "./mint/v1beta1/genesis";
import * as _97 from "./mint/v1beta1/mint";
import * as _98 from "./mint/v1beta1/query";
import * as _99 from "./params/v1beta1/params";
import * as _100 from "./params/v1beta1/query";
import * as _101 from "./slashing/v1beta1/genesis";
import * as _102 from "./slashing/v1beta1/query";
import * as _103 from "./slashing/v1beta1/slashing";
import * as _104 from "./slashing/v1beta1/tx";
import * as _105 from "./staking/v1beta1/authz";
import * as _106 from "./staking/v1beta1/genesis";
import * as _107 from "./staking/v1beta1/query";
import * as _108 from "./staking/v1beta1/staking";
import * as _109 from "./staking/v1beta1/tx";
import * as _110 from "./tx/signing/v1beta1/signing";
import * as _111 from "./tx/v1beta1/service";
import * as _112 from "./tx/v1beta1/tx";
import * as _113 from "./upgrade/v1beta1/query";
import * as _114 from "./upgrade/v1beta1/upgrade";
import * as _115 from "./vesting/v1beta1/tx";
import * as _116 from "./vesting/v1beta1/vesting";
import * as _159 from "./auth/v1beta1/query.lcd";
import * as _160 from "./authz/v1beta1/query.lcd";
import * as _161 from "./bank/v1beta1/query.lcd";
import * as _162 from "./base/node/v1beta1/query.lcd";
import * as _163 from "./base/tendermint/v1beta1/query.lcd";
import * as _164 from "./distribution/v1beta1/query.lcd";
import * as _165 from "./evidence/v1beta1/query.lcd";
import * as _166 from "./feegrant/v1beta1/query.lcd";
import * as _167 from "./gov/v1beta1/query.lcd";
import * as _168 from "./mint/v1beta1/query.lcd";
import * as _169 from "./params/v1beta1/query.lcd";
import * as _170 from "./slashing/v1beta1/query.lcd";
import * as _171 from "./staking/v1beta1/query.lcd";
import * as _172 from "./tx/v1beta1/service.lcd";
import * as _173 from "./upgrade/v1beta1/query.lcd";
import * as _174 from "./auth/v1beta1/query.rpc.Query";
import * as _175 from "./authz/v1beta1/query.rpc.Query";
import * as _176 from "./bank/v1beta1/query.rpc.Query";
import * as _177 from "./base/node/v1beta1/query.rpc.Service";
import * as _178 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _179 from "./distribution/v1beta1/query.rpc.Query";
import * as _180 from "./evidence/v1beta1/query.rpc.Query";
import * as _181 from "./feegrant/v1beta1/query.rpc.Query";
import * as _182 from "./gov/v1beta1/query.rpc.Query";
import * as _183 from "./mint/v1beta1/query.rpc.Query";
import * as _184 from "./params/v1beta1/query.rpc.Query";
import * as _185 from "./slashing/v1beta1/query.rpc.Query";
import * as _186 from "./staking/v1beta1/query.rpc.Query";
import * as _187 from "./tx/v1beta1/service.rpc.Service";
import * as _188 from "./upgrade/v1beta1/query.rpc.Query";
import * as _189 from "./authz/v1beta1/tx.rpc.msg";
import * as _190 from "./bank/v1beta1/tx.rpc.msg";
import * as _191 from "./crisis/v1beta1/tx.rpc.msg";
import * as _192 from "./distribution/v1beta1/tx.rpc.msg";
import * as _193 from "./evidence/v1beta1/tx.rpc.msg";
import * as _194 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _195 from "./gov/v1beta1/tx.rpc.msg";
import * as _196 from "./slashing/v1beta1/tx.rpc.msg";
import * as _197 from "./staking/v1beta1/tx.rpc.msg";
import * as _198 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _174.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _49.QueryAccountsRequest): Promise<_49.QueryAccountsResponse>;
                account(request: _49.QueryAccountRequest): Promise<_49.QueryAccountResponse>;
                params(request?: _49.QueryParamsRequest): Promise<_49.QueryParamsResponse>;
                moduleAccountByName(request: _49.QueryModuleAccountByNameRequest): Promise<_49.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _159.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _49.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryAccountsRequest;
                fromPartial(object: Partial<_49.QueryAccountsRequest>): _49.QueryAccountsRequest;
                fromAmino(object: _49.QueryAccountsRequestAmino): _49.QueryAccountsRequest;
                toAmino(message: _49.QueryAccountsRequest): _49.QueryAccountsRequestAmino;
                fromAminoMsg(object: _49.QueryAccountsRequestAminoMsg): _49.QueryAccountsRequest;
                toAminoMsg(message: _49.QueryAccountsRequest): _49.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _49.QueryAccountsRequestProtoMsg): _49.QueryAccountsRequest;
                toProto(message: _49.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _49.QueryAccountsRequest): _49.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _49.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryAccountsResponse;
                fromPartial(object: Partial<_49.QueryAccountsResponse>): _49.QueryAccountsResponse;
                fromAmino(object: _49.QueryAccountsResponseAmino): _49.QueryAccountsResponse;
                toAmino(message: _49.QueryAccountsResponse): _49.QueryAccountsResponseAmino;
                fromAminoMsg(object: _49.QueryAccountsResponseAminoMsg): _49.QueryAccountsResponse;
                toAminoMsg(message: _49.QueryAccountsResponse): _49.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _49.QueryAccountsResponseProtoMsg): _49.QueryAccountsResponse;
                toProto(message: _49.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _49.QueryAccountsResponse): _49.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _49.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryAccountRequest;
                fromPartial(object: Partial<_49.QueryAccountRequest>): _49.QueryAccountRequest;
                fromAmino(object: _49.QueryAccountRequestAmino): _49.QueryAccountRequest;
                toAmino(message: _49.QueryAccountRequest): _49.QueryAccountRequestAmino;
                fromAminoMsg(object: _49.QueryAccountRequestAminoMsg): _49.QueryAccountRequest;
                toAminoMsg(message: _49.QueryAccountRequest): _49.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _49.QueryAccountRequestProtoMsg): _49.QueryAccountRequest;
                toProto(message: _49.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _49.QueryAccountRequest): _49.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _49.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryAccountResponse;
                fromPartial(object: Partial<_49.QueryAccountResponse>): _49.QueryAccountResponse;
                fromAmino(object: _49.QueryAccountResponseAmino): _49.QueryAccountResponse;
                toAmino(message: _49.QueryAccountResponse): _49.QueryAccountResponseAmino;
                fromAminoMsg(object: _49.QueryAccountResponseAminoMsg): _49.QueryAccountResponse;
                toAminoMsg(message: _49.QueryAccountResponse): _49.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _49.QueryAccountResponseProtoMsg): _49.QueryAccountResponse;
                toProto(message: _49.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _49.QueryAccountResponse): _49.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _49.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.QueryParamsRequest;
                fromPartial(_: Partial<_49.QueryParamsRequest>): _49.QueryParamsRequest;
                fromAmino(_: _49.QueryParamsRequestAmino): _49.QueryParamsRequest;
                toAmino(_: _49.QueryParamsRequest): _49.QueryParamsRequestAmino;
                fromAminoMsg(object: _49.QueryParamsRequestAminoMsg): _49.QueryParamsRequest;
                toAminoMsg(message: _49.QueryParamsRequest): _49.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _49.QueryParamsRequestProtoMsg): _49.QueryParamsRequest;
                toProto(message: _49.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _49.QueryParamsRequest): _49.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _49.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryParamsResponse;
                fromPartial(object: Partial<_49.QueryParamsResponse>): _49.QueryParamsResponse;
                fromAmino(object: _49.QueryParamsResponseAmino): _49.QueryParamsResponse;
                toAmino(message: _49.QueryParamsResponse): _49.QueryParamsResponseAmino;
                fromAminoMsg(object: _49.QueryParamsResponseAminoMsg): _49.QueryParamsResponse;
                toAminoMsg(message: _49.QueryParamsResponse): _49.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _49.QueryParamsResponseProtoMsg): _49.QueryParamsResponse;
                toProto(message: _49.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _49.QueryParamsResponse): _49.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _49.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_49.QueryModuleAccountByNameRequest>): _49.QueryModuleAccountByNameRequest;
                fromAmino(object: _49.QueryModuleAccountByNameRequestAmino): _49.QueryModuleAccountByNameRequest;
                toAmino(message: _49.QueryModuleAccountByNameRequest): _49.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _49.QueryModuleAccountByNameRequestAminoMsg): _49.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _49.QueryModuleAccountByNameRequest): _49.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _49.QueryModuleAccountByNameRequestProtoMsg): _49.QueryModuleAccountByNameRequest;
                toProto(message: _49.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _49.QueryModuleAccountByNameRequest): _49.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _49.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_49.QueryModuleAccountByNameResponse>): _49.QueryModuleAccountByNameResponse;
                fromAmino(object: _49.QueryModuleAccountByNameResponseAmino): _49.QueryModuleAccountByNameResponse;
                toAmino(message: _49.QueryModuleAccountByNameResponse): _49.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _49.QueryModuleAccountByNameResponseAminoMsg): _49.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _49.QueryModuleAccountByNameResponse): _49.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _49.QueryModuleAccountByNameResponseProtoMsg): _49.QueryModuleAccountByNameResponse;
                toProto(message: _49.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _49.QueryModuleAccountByNameResponse): _49.QueryModuleAccountByNameResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _47.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _47.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            BaseAccount: {
                typeUrl: string;
                encode(message: _47.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.BaseAccount;
                fromPartial(object: Partial<_47.BaseAccount>): _47.BaseAccount;
                fromAmino(object: _47.BaseAccountAmino): _47.BaseAccount;
                toAmino(message: _47.BaseAccount): _47.BaseAccountAmino;
                fromAminoMsg(object: _47.BaseAccountAminoMsg): _47.BaseAccount;
                toAminoMsg(message: _47.BaseAccount): _47.BaseAccountAminoMsg;
                fromProtoMsg(message: _47.BaseAccountProtoMsg): _47.BaseAccount;
                toProto(message: _47.BaseAccount): Uint8Array;
                toProtoMsg(message: _47.BaseAccount): _47.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _47.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.ModuleAccount;
                fromPartial(object: Partial<_47.ModuleAccount>): _47.ModuleAccount;
                fromAmino(object: _47.ModuleAccountAmino): _47.ModuleAccount;
                toAmino(message: _47.ModuleAccount): _47.ModuleAccountAmino;
                fromAminoMsg(object: _47.ModuleAccountAminoMsg): _47.ModuleAccount;
                toAminoMsg(message: _47.ModuleAccount): _47.ModuleAccountAminoMsg;
                fromProtoMsg(message: _47.ModuleAccountProtoMsg): _47.ModuleAccount;
                toProto(message: _47.ModuleAccount): Uint8Array;
                toProtoMsg(message: _47.ModuleAccount): _47.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _47.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.Params;
                fromPartial(object: Partial<_47.Params>): _47.Params;
                fromAmino(object: _47.ParamsAmino): _47.Params;
                toAmino(message: _47.Params): _47.ParamsAmino;
                fromAminoMsg(object: _47.ParamsAminoMsg): _47.Params;
                toAminoMsg(message: _47.Params): _47.ParamsAminoMsg;
                fromProtoMsg(message: _47.ParamsProtoMsg): _47.Params;
                toProto(message: _47.Params): Uint8Array;
                toProtoMsg(message: _47.Params): _47.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _189.MsgClientImpl;
            QueryClientImpl: typeof _175.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _53.QueryGrantsRequest): Promise<_53.QueryGrantsResponse>;
                granterGrants(request: _53.QueryGranterGrantsRequest): Promise<_53.QueryGranterGrantsResponse>;
                granteeGrants(request: _53.QueryGranteeGrantsRequest): Promise<_53.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _160.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _54.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _54.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _54.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _54.MsgGrant): {
                        typeUrl: string;
                        value: _54.MsgGrant;
                    };
                    exec(value: _54.MsgExec): {
                        typeUrl: string;
                        value: _54.MsgExec;
                    };
                    revoke(value: _54.MsgRevoke): {
                        typeUrl: string;
                        value: _54.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _54.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _54.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _54.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _54.MsgGrant): {
                        typeUrl: string;
                        value: _54.MsgGrant;
                    };
                    exec(value: _54.MsgExec): {
                        typeUrl: string;
                        value: _54.MsgExec;
                    };
                    revoke(value: _54.MsgRevoke): {
                        typeUrl: string;
                        value: _54.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _54.MsgGrant) => _54.MsgGrantAmino;
                    fromAmino: (object: _54.MsgGrantAmino) => _54.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _54.MsgExec) => _54.MsgExecAmino;
                    fromAmino: (object: _54.MsgExecAmino) => _54.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _54.MsgRevoke) => _54.MsgRevokeAmino;
                    fromAmino: (object: _54.MsgRevokeAmino) => _54.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _54.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.MsgGrant;
                fromPartial(object: Partial<_54.MsgGrant>): _54.MsgGrant;
                fromAmino(object: _54.MsgGrantAmino): _54.MsgGrant;
                toAmino(message: _54.MsgGrant): _54.MsgGrantAmino;
                fromAminoMsg(object: _54.MsgGrantAminoMsg): _54.MsgGrant;
                toAminoMsg(message: _54.MsgGrant): _54.MsgGrantAminoMsg;
                fromProtoMsg(message: _54.MsgGrantProtoMsg): _54.MsgGrant;
                toProto(message: _54.MsgGrant): Uint8Array;
                toProtoMsg(message: _54.MsgGrant): _54.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _54.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.MsgExecResponse;
                fromPartial(object: Partial<_54.MsgExecResponse>): _54.MsgExecResponse;
                fromAmino(object: _54.MsgExecResponseAmino): _54.MsgExecResponse;
                toAmino(message: _54.MsgExecResponse): _54.MsgExecResponseAmino;
                fromAminoMsg(object: _54.MsgExecResponseAminoMsg): _54.MsgExecResponse;
                toAminoMsg(message: _54.MsgExecResponse): _54.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _54.MsgExecResponseProtoMsg): _54.MsgExecResponse;
                toProto(message: _54.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _54.MsgExecResponse): _54.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _54.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.MsgExec;
                fromPartial(object: Partial<_54.MsgExec>): _54.MsgExec;
                fromAmino(object: _54.MsgExecAmino): _54.MsgExec;
                toAmino(message: _54.MsgExec): _54.MsgExecAmino;
                fromAminoMsg(object: _54.MsgExecAminoMsg): _54.MsgExec;
                toAminoMsg(message: _54.MsgExec): _54.MsgExecAminoMsg;
                fromProtoMsg(message: _54.MsgExecProtoMsg): _54.MsgExec;
                toProto(message: _54.MsgExec): Uint8Array;
                toProtoMsg(message: _54.MsgExec): _54.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _54.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _54.MsgGrantResponse;
                fromPartial(_: Partial<_54.MsgGrantResponse>): _54.MsgGrantResponse;
                fromAmino(_: _54.MsgGrantResponseAmino): _54.MsgGrantResponse;
                toAmino(_: _54.MsgGrantResponse): _54.MsgGrantResponseAmino;
                fromAminoMsg(object: _54.MsgGrantResponseAminoMsg): _54.MsgGrantResponse;
                toAminoMsg(message: _54.MsgGrantResponse): _54.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _54.MsgGrantResponseProtoMsg): _54.MsgGrantResponse;
                toProto(message: _54.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _54.MsgGrantResponse): _54.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _54.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.MsgRevoke;
                fromPartial(object: Partial<_54.MsgRevoke>): _54.MsgRevoke;
                fromAmino(object: _54.MsgRevokeAmino): _54.MsgRevoke;
                toAmino(message: _54.MsgRevoke): _54.MsgRevokeAmino;
                fromAminoMsg(object: _54.MsgRevokeAminoMsg): _54.MsgRevoke;
                toAminoMsg(message: _54.MsgRevoke): _54.MsgRevokeAminoMsg;
                fromProtoMsg(message: _54.MsgRevokeProtoMsg): _54.MsgRevoke;
                toProto(message: _54.MsgRevoke): Uint8Array;
                toProtoMsg(message: _54.MsgRevoke): _54.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _54.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _54.MsgRevokeResponse;
                fromPartial(_: Partial<_54.MsgRevokeResponse>): _54.MsgRevokeResponse;
                fromAmino(_: _54.MsgRevokeResponseAmino): _54.MsgRevokeResponse;
                toAmino(_: _54.MsgRevokeResponse): _54.MsgRevokeResponseAmino;
                fromAminoMsg(object: _54.MsgRevokeResponseAminoMsg): _54.MsgRevokeResponse;
                toAminoMsg(message: _54.MsgRevokeResponse): _54.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _54.MsgRevokeResponseProtoMsg): _54.MsgRevokeResponse;
                toProto(message: _54.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _54.MsgRevokeResponse): _54.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _53.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryGrantsRequest;
                fromPartial(object: Partial<_53.QueryGrantsRequest>): _53.QueryGrantsRequest;
                fromAmino(object: _53.QueryGrantsRequestAmino): _53.QueryGrantsRequest;
                toAmino(message: _53.QueryGrantsRequest): _53.QueryGrantsRequestAmino;
                fromAminoMsg(object: _53.QueryGrantsRequestAminoMsg): _53.QueryGrantsRequest;
                toAminoMsg(message: _53.QueryGrantsRequest): _53.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _53.QueryGrantsRequestProtoMsg): _53.QueryGrantsRequest;
                toProto(message: _53.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _53.QueryGrantsRequest): _53.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _53.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryGrantsResponse;
                fromPartial(object: Partial<_53.QueryGrantsResponse>): _53.QueryGrantsResponse;
                fromAmino(object: _53.QueryGrantsResponseAmino): _53.QueryGrantsResponse;
                toAmino(message: _53.QueryGrantsResponse): _53.QueryGrantsResponseAmino;
                fromAminoMsg(object: _53.QueryGrantsResponseAminoMsg): _53.QueryGrantsResponse;
                toAminoMsg(message: _53.QueryGrantsResponse): _53.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _53.QueryGrantsResponseProtoMsg): _53.QueryGrantsResponse;
                toProto(message: _53.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _53.QueryGrantsResponse): _53.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _53.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_53.QueryGranterGrantsRequest>): _53.QueryGranterGrantsRequest;
                fromAmino(object: _53.QueryGranterGrantsRequestAmino): _53.QueryGranterGrantsRequest;
                toAmino(message: _53.QueryGranterGrantsRequest): _53.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _53.QueryGranterGrantsRequestAminoMsg): _53.QueryGranterGrantsRequest;
                toAminoMsg(message: _53.QueryGranterGrantsRequest): _53.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _53.QueryGranterGrantsRequestProtoMsg): _53.QueryGranterGrantsRequest;
                toProto(message: _53.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _53.QueryGranterGrantsRequest): _53.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _53.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_53.QueryGranterGrantsResponse>): _53.QueryGranterGrantsResponse;
                fromAmino(object: _53.QueryGranterGrantsResponseAmino): _53.QueryGranterGrantsResponse;
                toAmino(message: _53.QueryGranterGrantsResponse): _53.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _53.QueryGranterGrantsResponseAminoMsg): _53.QueryGranterGrantsResponse;
                toAminoMsg(message: _53.QueryGranterGrantsResponse): _53.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _53.QueryGranterGrantsResponseProtoMsg): _53.QueryGranterGrantsResponse;
                toProto(message: _53.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _53.QueryGranterGrantsResponse): _53.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _53.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_53.QueryGranteeGrantsRequest>): _53.QueryGranteeGrantsRequest;
                fromAmino(object: _53.QueryGranteeGrantsRequestAmino): _53.QueryGranteeGrantsRequest;
                toAmino(message: _53.QueryGranteeGrantsRequest): _53.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _53.QueryGranteeGrantsRequestAminoMsg): _53.QueryGranteeGrantsRequest;
                toAminoMsg(message: _53.QueryGranteeGrantsRequest): _53.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _53.QueryGranteeGrantsRequestProtoMsg): _53.QueryGranteeGrantsRequest;
                toProto(message: _53.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _53.QueryGranteeGrantsRequest): _53.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _53.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_53.QueryGranteeGrantsResponse>): _53.QueryGranteeGrantsResponse;
                fromAmino(object: _53.QueryGranteeGrantsResponseAmino): _53.QueryGranteeGrantsResponse;
                toAmino(message: _53.QueryGranteeGrantsResponse): _53.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _53.QueryGranteeGrantsResponseAminoMsg): _53.QueryGranteeGrantsResponse;
                toAminoMsg(message: _53.QueryGranteeGrantsResponse): _53.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _53.QueryGranteeGrantsResponseProtoMsg): _53.QueryGranteeGrantsResponse;
                toProto(message: _53.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _53.QueryGranteeGrantsResponse): _53.QueryGranteeGrantsResponseProtoMsg;
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
            EventGrant: {
                typeUrl: string;
                encode(message: _51.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.EventGrant;
                fromPartial(object: Partial<_51.EventGrant>): _51.EventGrant;
                fromAmino(object: _51.EventGrantAmino): _51.EventGrant;
                toAmino(message: _51.EventGrant): _51.EventGrantAmino;
                fromAminoMsg(object: _51.EventGrantAminoMsg): _51.EventGrant;
                toAminoMsg(message: _51.EventGrant): _51.EventGrantAminoMsg;
                fromProtoMsg(message: _51.EventGrantProtoMsg): _51.EventGrant;
                toProto(message: _51.EventGrant): Uint8Array;
                toProtoMsg(message: _51.EventGrant): _51.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _51.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.EventRevoke;
                fromPartial(object: Partial<_51.EventRevoke>): _51.EventRevoke;
                fromAmino(object: _51.EventRevokeAmino): _51.EventRevoke;
                toAmino(message: _51.EventRevoke): _51.EventRevokeAmino;
                fromAminoMsg(object: _51.EventRevokeAminoMsg): _51.EventRevoke;
                toAminoMsg(message: _51.EventRevoke): _51.EventRevokeAminoMsg;
                fromProtoMsg(message: _51.EventRevokeProtoMsg): _51.EventRevoke;
                toProto(message: _51.EventRevoke): Uint8Array;
                toProtoMsg(message: _51.EventRevoke): _51.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _50.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.GenericAuthorization;
                fromPartial(object: Partial<_50.GenericAuthorization>): _50.GenericAuthorization;
                fromAmino(object: _50.GenericAuthorizationAmino): _50.GenericAuthorization;
                toAmino(message: _50.GenericAuthorization): _50.GenericAuthorizationAmino;
                fromAminoMsg(object: _50.GenericAuthorizationAminoMsg): _50.GenericAuthorization;
                toAminoMsg(message: _50.GenericAuthorization): _50.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _50.GenericAuthorizationProtoMsg): _50.GenericAuthorization;
                toProto(message: _50.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _50.GenericAuthorization): _50.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _50.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.Grant;
                fromPartial(object: Partial<_50.Grant>): _50.Grant;
                fromAmino(object: _50.GrantAmino): _50.Grant;
                toAmino(message: _50.Grant): _50.GrantAmino;
                fromAminoMsg(object: _50.GrantAminoMsg): _50.Grant;
                toAminoMsg(message: _50.Grant): _50.GrantAminoMsg;
                fromProtoMsg(message: _50.GrantProtoMsg): _50.Grant;
                toProto(message: _50.Grant): Uint8Array;
                toProtoMsg(message: _50.Grant): _50.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _50.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.GrantAuthorization;
                fromPartial(object: Partial<_50.GrantAuthorization>): _50.GrantAuthorization;
                fromAmino(object: _50.GrantAuthorizationAmino): _50.GrantAuthorization;
                toAmino(message: _50.GrantAuthorization): _50.GrantAuthorizationAmino;
                fromAminoMsg(object: _50.GrantAuthorizationAminoMsg): _50.GrantAuthorization;
                toAminoMsg(message: _50.GrantAuthorization): _50.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _50.GrantAuthorizationProtoMsg): _50.GrantAuthorization;
                toProto(message: _50.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _50.GrantAuthorization): _50.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _55.SendAuthorization | _105.StakeAuthorization | _50.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _190.MsgClientImpl;
            QueryClientImpl: typeof _176.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _58.QueryBalanceRequest): Promise<_58.QueryBalanceResponse>;
                allBalances(request: _58.QueryAllBalancesRequest): Promise<_58.QueryAllBalancesResponse>;
                spendableBalances(request: _58.QuerySpendableBalancesRequest): Promise<_58.QuerySpendableBalancesResponse>;
                totalSupply(request?: _58.QueryTotalSupplyRequest): Promise<_58.QueryTotalSupplyResponse>;
                supplyOf(request: _58.QuerySupplyOfRequest): Promise<_58.QuerySupplyOfResponse>;
                params(request?: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                denomMetadata(request: _58.QueryDenomMetadataRequest): Promise<_58.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _58.QueryDenomsMetadataRequest): Promise<_58.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _161.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _59.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _59.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _59.MsgSend): {
                        typeUrl: string;
                        value: _59.MsgSend;
                    };
                    multiSend(value: _59.MsgMultiSend): {
                        typeUrl: string;
                        value: _59.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _59.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _59.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _59.MsgSend): {
                        typeUrl: string;
                        value: _59.MsgSend;
                    };
                    multiSend(value: _59.MsgMultiSend): {
                        typeUrl: string;
                        value: _59.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _59.MsgSend) => _59.MsgSendAmino;
                    fromAmino: (object: _59.MsgSendAmino) => _59.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _59.MsgMultiSend) => _59.MsgMultiSendAmino;
                    fromAmino: (object: _59.MsgMultiSendAmino) => _59.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _59.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgSend;
                fromPartial(object: Partial<_59.MsgSend>): _59.MsgSend;
                fromAmino(object: _59.MsgSendAmino): _59.MsgSend;
                toAmino(message: _59.MsgSend): _59.MsgSendAmino;
                fromAminoMsg(object: _59.MsgSendAminoMsg): _59.MsgSend;
                toAminoMsg(message: _59.MsgSend): _59.MsgSendAminoMsg;
                fromProtoMsg(message: _59.MsgSendProtoMsg): _59.MsgSend;
                toProto(message: _59.MsgSend): Uint8Array;
                toProtoMsg(message: _59.MsgSend): _59.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _59.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgSendResponse;
                fromPartial(_: Partial<_59.MsgSendResponse>): _59.MsgSendResponse;
                fromAmino(_: _59.MsgSendResponseAmino): _59.MsgSendResponse;
                toAmino(_: _59.MsgSendResponse): _59.MsgSendResponseAmino;
                fromAminoMsg(object: _59.MsgSendResponseAminoMsg): _59.MsgSendResponse;
                toAminoMsg(message: _59.MsgSendResponse): _59.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _59.MsgSendResponseProtoMsg): _59.MsgSendResponse;
                toProto(message: _59.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _59.MsgSendResponse): _59.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _59.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgMultiSend;
                fromPartial(object: Partial<_59.MsgMultiSend>): _59.MsgMultiSend;
                fromAmino(object: _59.MsgMultiSendAmino): _59.MsgMultiSend;
                toAmino(message: _59.MsgMultiSend): _59.MsgMultiSendAmino;
                fromAminoMsg(object: _59.MsgMultiSendAminoMsg): _59.MsgMultiSend;
                toAminoMsg(message: _59.MsgMultiSend): _59.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _59.MsgMultiSendProtoMsg): _59.MsgMultiSend;
                toProto(message: _59.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _59.MsgMultiSend): _59.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _59.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgMultiSendResponse;
                fromPartial(_: Partial<_59.MsgMultiSendResponse>): _59.MsgMultiSendResponse;
                fromAmino(_: _59.MsgMultiSendResponseAmino): _59.MsgMultiSendResponse;
                toAmino(_: _59.MsgMultiSendResponse): _59.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _59.MsgMultiSendResponseAminoMsg): _59.MsgMultiSendResponse;
                toAminoMsg(message: _59.MsgMultiSendResponse): _59.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _59.MsgMultiSendResponseProtoMsg): _59.MsgMultiSendResponse;
                toProto(message: _59.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _59.MsgMultiSendResponse): _59.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _58.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryBalanceRequest;
                fromPartial(object: Partial<_58.QueryBalanceRequest>): _58.QueryBalanceRequest;
                fromAmino(object: _58.QueryBalanceRequestAmino): _58.QueryBalanceRequest;
                toAmino(message: _58.QueryBalanceRequest): _58.QueryBalanceRequestAmino;
                fromAminoMsg(object: _58.QueryBalanceRequestAminoMsg): _58.QueryBalanceRequest;
                toAminoMsg(message: _58.QueryBalanceRequest): _58.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _58.QueryBalanceRequestProtoMsg): _58.QueryBalanceRequest;
                toProto(message: _58.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _58.QueryBalanceRequest): _58.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _58.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryBalanceResponse;
                fromPartial(object: Partial<_58.QueryBalanceResponse>): _58.QueryBalanceResponse;
                fromAmino(object: _58.QueryBalanceResponseAmino): _58.QueryBalanceResponse;
                toAmino(message: _58.QueryBalanceResponse): _58.QueryBalanceResponseAmino;
                fromAminoMsg(object: _58.QueryBalanceResponseAminoMsg): _58.QueryBalanceResponse;
                toAminoMsg(message: _58.QueryBalanceResponse): _58.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _58.QueryBalanceResponseProtoMsg): _58.QueryBalanceResponse;
                toProto(message: _58.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _58.QueryBalanceResponse): _58.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _58.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryAllBalancesRequest;
                fromPartial(object: Partial<_58.QueryAllBalancesRequest>): _58.QueryAllBalancesRequest;
                fromAmino(object: _58.QueryAllBalancesRequestAmino): _58.QueryAllBalancesRequest;
                toAmino(message: _58.QueryAllBalancesRequest): _58.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _58.QueryAllBalancesRequestAminoMsg): _58.QueryAllBalancesRequest;
                toAminoMsg(message: _58.QueryAllBalancesRequest): _58.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _58.QueryAllBalancesRequestProtoMsg): _58.QueryAllBalancesRequest;
                toProto(message: _58.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _58.QueryAllBalancesRequest): _58.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _58.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryAllBalancesResponse;
                fromPartial(object: Partial<_58.QueryAllBalancesResponse>): _58.QueryAllBalancesResponse;
                fromAmino(object: _58.QueryAllBalancesResponseAmino): _58.QueryAllBalancesResponse;
                toAmino(message: _58.QueryAllBalancesResponse): _58.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _58.QueryAllBalancesResponseAminoMsg): _58.QueryAllBalancesResponse;
                toAminoMsg(message: _58.QueryAllBalancesResponse): _58.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _58.QueryAllBalancesResponseProtoMsg): _58.QueryAllBalancesResponse;
                toProto(message: _58.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _58.QueryAllBalancesResponse): _58.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _58.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_58.QuerySpendableBalancesRequest>): _58.QuerySpendableBalancesRequest;
                fromAmino(object: _58.QuerySpendableBalancesRequestAmino): _58.QuerySpendableBalancesRequest;
                toAmino(message: _58.QuerySpendableBalancesRequest): _58.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _58.QuerySpendableBalancesRequestAminoMsg): _58.QuerySpendableBalancesRequest;
                toAminoMsg(message: _58.QuerySpendableBalancesRequest): _58.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _58.QuerySpendableBalancesRequestProtoMsg): _58.QuerySpendableBalancesRequest;
                toProto(message: _58.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _58.QuerySpendableBalancesRequest): _58.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _58.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_58.QuerySpendableBalancesResponse>): _58.QuerySpendableBalancesResponse;
                fromAmino(object: _58.QuerySpendableBalancesResponseAmino): _58.QuerySpendableBalancesResponse;
                toAmino(message: _58.QuerySpendableBalancesResponse): _58.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _58.QuerySpendableBalancesResponseAminoMsg): _58.QuerySpendableBalancesResponse;
                toAminoMsg(message: _58.QuerySpendableBalancesResponse): _58.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _58.QuerySpendableBalancesResponseProtoMsg): _58.QuerySpendableBalancesResponse;
                toProto(message: _58.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _58.QuerySpendableBalancesResponse): _58.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _58.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_58.QueryTotalSupplyRequest>): _58.QueryTotalSupplyRequest;
                fromAmino(object: _58.QueryTotalSupplyRequestAmino): _58.QueryTotalSupplyRequest;
                toAmino(message: _58.QueryTotalSupplyRequest): _58.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _58.QueryTotalSupplyRequestAminoMsg): _58.QueryTotalSupplyRequest;
                toAminoMsg(message: _58.QueryTotalSupplyRequest): _58.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _58.QueryTotalSupplyRequestProtoMsg): _58.QueryTotalSupplyRequest;
                toProto(message: _58.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _58.QueryTotalSupplyRequest): _58.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _58.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_58.QueryTotalSupplyResponse>): _58.QueryTotalSupplyResponse;
                fromAmino(object: _58.QueryTotalSupplyResponseAmino): _58.QueryTotalSupplyResponse;
                toAmino(message: _58.QueryTotalSupplyResponse): _58.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _58.QueryTotalSupplyResponseAminoMsg): _58.QueryTotalSupplyResponse;
                toAminoMsg(message: _58.QueryTotalSupplyResponse): _58.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _58.QueryTotalSupplyResponseProtoMsg): _58.QueryTotalSupplyResponse;
                toProto(message: _58.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _58.QueryTotalSupplyResponse): _58.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _58.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QuerySupplyOfRequest;
                fromPartial(object: Partial<_58.QuerySupplyOfRequest>): _58.QuerySupplyOfRequest;
                fromAmino(object: _58.QuerySupplyOfRequestAmino): _58.QuerySupplyOfRequest;
                toAmino(message: _58.QuerySupplyOfRequest): _58.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _58.QuerySupplyOfRequestAminoMsg): _58.QuerySupplyOfRequest;
                toAminoMsg(message: _58.QuerySupplyOfRequest): _58.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _58.QuerySupplyOfRequestProtoMsg): _58.QuerySupplyOfRequest;
                toProto(message: _58.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _58.QuerySupplyOfRequest): _58.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _58.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QuerySupplyOfResponse;
                fromPartial(object: Partial<_58.QuerySupplyOfResponse>): _58.QuerySupplyOfResponse;
                fromAmino(object: _58.QuerySupplyOfResponseAmino): _58.QuerySupplyOfResponse;
                toAmino(message: _58.QuerySupplyOfResponse): _58.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _58.QuerySupplyOfResponseAminoMsg): _58.QuerySupplyOfResponse;
                toAminoMsg(message: _58.QuerySupplyOfResponse): _58.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _58.QuerySupplyOfResponseProtoMsg): _58.QuerySupplyOfResponse;
                toProto(message: _58.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _58.QuerySupplyOfResponse): _58.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _58.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.QueryParamsRequest;
                fromPartial(_: Partial<_58.QueryParamsRequest>): _58.QueryParamsRequest;
                fromAmino(_: _58.QueryParamsRequestAmino): _58.QueryParamsRequest;
                toAmino(_: _58.QueryParamsRequest): _58.QueryParamsRequestAmino;
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
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _58.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_58.QueryDenomsMetadataRequest>): _58.QueryDenomsMetadataRequest;
                fromAmino(object: _58.QueryDenomsMetadataRequestAmino): _58.QueryDenomsMetadataRequest;
                toAmino(message: _58.QueryDenomsMetadataRequest): _58.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _58.QueryDenomsMetadataRequestAminoMsg): _58.QueryDenomsMetadataRequest;
                toAminoMsg(message: _58.QueryDenomsMetadataRequest): _58.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _58.QueryDenomsMetadataRequestProtoMsg): _58.QueryDenomsMetadataRequest;
                toProto(message: _58.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _58.QueryDenomsMetadataRequest): _58.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _58.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_58.QueryDenomsMetadataResponse>): _58.QueryDenomsMetadataResponse;
                fromAmino(object: _58.QueryDenomsMetadataResponseAmino): _58.QueryDenomsMetadataResponse;
                toAmino(message: _58.QueryDenomsMetadataResponse): _58.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _58.QueryDenomsMetadataResponseAminoMsg): _58.QueryDenomsMetadataResponse;
                toAminoMsg(message: _58.QueryDenomsMetadataResponse): _58.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _58.QueryDenomsMetadataResponseProtoMsg): _58.QueryDenomsMetadataResponse;
                toProto(message: _58.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _58.QueryDenomsMetadataResponse): _58.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _58.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_58.QueryDenomMetadataRequest>): _58.QueryDenomMetadataRequest;
                fromAmino(object: _58.QueryDenomMetadataRequestAmino): _58.QueryDenomMetadataRequest;
                toAmino(message: _58.QueryDenomMetadataRequest): _58.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _58.QueryDenomMetadataRequestAminoMsg): _58.QueryDenomMetadataRequest;
                toAminoMsg(message: _58.QueryDenomMetadataRequest): _58.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _58.QueryDenomMetadataRequestProtoMsg): _58.QueryDenomMetadataRequest;
                toProto(message: _58.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _58.QueryDenomMetadataRequest): _58.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _58.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_58.QueryDenomMetadataResponse>): _58.QueryDenomMetadataResponse;
                fromAmino(object: _58.QueryDenomMetadataResponseAmino): _58.QueryDenomMetadataResponse;
                toAmino(message: _58.QueryDenomMetadataResponse): _58.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _58.QueryDenomMetadataResponseAminoMsg): _58.QueryDenomMetadataResponse;
                toAminoMsg(message: _58.QueryDenomMetadataResponse): _58.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _58.QueryDenomMetadataResponseProtoMsg): _58.QueryDenomMetadataResponse;
                toProto(message: _58.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _58.QueryDenomMetadataResponse): _58.QueryDenomMetadataResponseProtoMsg;
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
            Balance: {
                typeUrl: string;
                encode(message: _57.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.Balance;
                fromPartial(object: Partial<_57.Balance>): _57.Balance;
                fromAmino(object: _57.BalanceAmino): _57.Balance;
                toAmino(message: _57.Balance): _57.BalanceAmino;
                fromAminoMsg(object: _57.BalanceAminoMsg): _57.Balance;
                toAminoMsg(message: _57.Balance): _57.BalanceAminoMsg;
                fromProtoMsg(message: _57.BalanceProtoMsg): _57.Balance;
                toProto(message: _57.Balance): Uint8Array;
                toProtoMsg(message: _57.Balance): _57.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _56.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Params;
                fromPartial(object: Partial<_56.Params>): _56.Params;
                fromAmino(object: _56.ParamsAmino): _56.Params;
                toAmino(message: _56.Params): _56.ParamsAmino;
                fromAminoMsg(object: _56.ParamsAminoMsg): _56.Params;
                toAminoMsg(message: _56.Params): _56.ParamsAminoMsg;
                fromProtoMsg(message: _56.ParamsProtoMsg): _56.Params;
                toProto(message: _56.Params): Uint8Array;
                toProtoMsg(message: _56.Params): _56.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _56.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.SendEnabled;
                fromPartial(object: Partial<_56.SendEnabled>): _56.SendEnabled;
                fromAmino(object: _56.SendEnabledAmino): _56.SendEnabled;
                toAmino(message: _56.SendEnabled): _56.SendEnabledAmino;
                fromAminoMsg(object: _56.SendEnabledAminoMsg): _56.SendEnabled;
                toAminoMsg(message: _56.SendEnabled): _56.SendEnabledAminoMsg;
                fromProtoMsg(message: _56.SendEnabledProtoMsg): _56.SendEnabled;
                toProto(message: _56.SendEnabled): Uint8Array;
                toProtoMsg(message: _56.SendEnabled): _56.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _56.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Input;
                fromPartial(object: Partial<_56.Input>): _56.Input;
                fromAmino(object: _56.InputAmino): _56.Input;
                toAmino(message: _56.Input): _56.InputAmino;
                fromAminoMsg(object: _56.InputAminoMsg): _56.Input;
                toAminoMsg(message: _56.Input): _56.InputAminoMsg;
                fromProtoMsg(message: _56.InputProtoMsg): _56.Input;
                toProto(message: _56.Input): Uint8Array;
                toProtoMsg(message: _56.Input): _56.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _56.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Output;
                fromPartial(object: Partial<_56.Output>): _56.Output;
                fromAmino(object: _56.OutputAmino): _56.Output;
                toAmino(message: _56.Output): _56.OutputAmino;
                fromAminoMsg(object: _56.OutputAminoMsg): _56.Output;
                toAminoMsg(message: _56.Output): _56.OutputAminoMsg;
                fromProtoMsg(message: _56.OutputProtoMsg): _56.Output;
                toProto(message: _56.Output): Uint8Array;
                toProtoMsg(message: _56.Output): _56.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _56.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Supply;
                fromPartial(object: Partial<_56.Supply>): _56.Supply;
                fromAmino(object: _56.SupplyAmino): _56.Supply;
                toAmino(message: _56.Supply): _56.SupplyAmino;
                fromAminoMsg(object: _56.SupplyAminoMsg): _56.Supply;
                toAminoMsg(message: _56.Supply): _56.SupplyAminoMsg;
                fromProtoMsg(message: _56.SupplyProtoMsg): _56.Supply;
                toProto(message: _56.Supply): Uint8Array;
                toProtoMsg(message: _56.Supply): _56.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _56.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.DenomUnit;
                fromPartial(object: Partial<_56.DenomUnit>): _56.DenomUnit;
                fromAmino(object: _56.DenomUnitAmino): _56.DenomUnit;
                toAmino(message: _56.DenomUnit): _56.DenomUnitAmino;
                fromAminoMsg(object: _56.DenomUnitAminoMsg): _56.DenomUnit;
                toAminoMsg(message: _56.DenomUnit): _56.DenomUnitAminoMsg;
                fromProtoMsg(message: _56.DenomUnitProtoMsg): _56.DenomUnit;
                toProto(message: _56.DenomUnit): Uint8Array;
                toProtoMsg(message: _56.DenomUnit): _56.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _56.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Metadata;
                fromPartial(object: Partial<_56.Metadata>): _56.Metadata;
                fromAmino(object: _56.MetadataAmino): _56.Metadata;
                toAmino(message: _56.Metadata): _56.MetadataAmino;
                fromAminoMsg(object: _56.MetadataAminoMsg): _56.Metadata;
                toAminoMsg(message: _56.Metadata): _56.MetadataAminoMsg;
                fromProtoMsg(message: _56.MetadataProtoMsg): _56.Metadata;
                toProto(message: _56.Metadata): Uint8Array;
                toProtoMsg(message: _56.Metadata): _56.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _55.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.SendAuthorization;
                fromPartial(object: Partial<_55.SendAuthorization>): _55.SendAuthorization;
                fromAmino(object: _55.SendAuthorizationAmino): _55.SendAuthorization;
                toAmino(message: _55.SendAuthorization): _55.SendAuthorizationAmino;
                fromAminoMsg(object: _55.SendAuthorizationAminoMsg): _55.SendAuthorization;
                toAminoMsg(message: _55.SendAuthorization): _55.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _55.SendAuthorizationProtoMsg): _55.SendAuthorization;
                toProto(message: _55.SendAuthorization): Uint8Array;
                toProtoMsg(message: _55.SendAuthorization): _55.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _60.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.TxResponse;
                    fromPartial(object: Partial<_60.TxResponse>): _60.TxResponse;
                    fromAmino(object: _60.TxResponseAmino): _60.TxResponse;
                    toAmino(message: _60.TxResponse): _60.TxResponseAmino;
                    fromAminoMsg(object: _60.TxResponseAminoMsg): _60.TxResponse;
                    toAminoMsg(message: _60.TxResponse): _60.TxResponseAminoMsg;
                    fromProtoMsg(message: _60.TxResponseProtoMsg): _60.TxResponse;
                    toProto(message: _60.TxResponse): Uint8Array;
                    toProtoMsg(message: _60.TxResponse): _60.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _60.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.ABCIMessageLog;
                    fromPartial(object: Partial<_60.ABCIMessageLog>): _60.ABCIMessageLog;
                    fromAmino(object: _60.ABCIMessageLogAmino): _60.ABCIMessageLog;
                    toAmino(message: _60.ABCIMessageLog): _60.ABCIMessageLogAmino;
                    fromAminoMsg(object: _60.ABCIMessageLogAminoMsg): _60.ABCIMessageLog;
                    toAminoMsg(message: _60.ABCIMessageLog): _60.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _60.ABCIMessageLogProtoMsg): _60.ABCIMessageLog;
                    toProto(message: _60.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _60.ABCIMessageLog): _60.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _60.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.StringEvent;
                    fromPartial(object: Partial<_60.StringEvent>): _60.StringEvent;
                    fromAmino(object: _60.StringEventAmino): _60.StringEvent;
                    toAmino(message: _60.StringEvent): _60.StringEventAmino;
                    fromAminoMsg(object: _60.StringEventAminoMsg): _60.StringEvent;
                    toAminoMsg(message: _60.StringEvent): _60.StringEventAminoMsg;
                    fromProtoMsg(message: _60.StringEventProtoMsg): _60.StringEvent;
                    toProto(message: _60.StringEvent): Uint8Array;
                    toProtoMsg(message: _60.StringEvent): _60.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _60.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.Attribute;
                    fromPartial(object: Partial<_60.Attribute>): _60.Attribute;
                    fromAmino(object: _60.AttributeAmino): _60.Attribute;
                    toAmino(message: _60.Attribute): _60.AttributeAmino;
                    fromAminoMsg(object: _60.AttributeAminoMsg): _60.Attribute;
                    toAminoMsg(message: _60.Attribute): _60.AttributeAminoMsg;
                    fromProtoMsg(message: _60.AttributeProtoMsg): _60.Attribute;
                    toProto(message: _60.Attribute): Uint8Array;
                    toProtoMsg(message: _60.Attribute): _60.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _60.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.GasInfo;
                    fromPartial(object: Partial<_60.GasInfo>): _60.GasInfo;
                    fromAmino(object: _60.GasInfoAmino): _60.GasInfo;
                    toAmino(message: _60.GasInfo): _60.GasInfoAmino;
                    fromAminoMsg(object: _60.GasInfoAminoMsg): _60.GasInfo;
                    toAminoMsg(message: _60.GasInfo): _60.GasInfoAminoMsg;
                    fromProtoMsg(message: _60.GasInfoProtoMsg): _60.GasInfo;
                    toProto(message: _60.GasInfo): Uint8Array;
                    toProtoMsg(message: _60.GasInfo): _60.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _60.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.Result;
                    fromPartial(object: Partial<_60.Result>): _60.Result;
                    fromAmino(object: _60.ResultAmino): _60.Result;
                    toAmino(message: _60.Result): _60.ResultAmino;
                    fromAminoMsg(object: _60.ResultAminoMsg): _60.Result;
                    toAminoMsg(message: _60.Result): _60.ResultAminoMsg;
                    fromProtoMsg(message: _60.ResultProtoMsg): _60.Result;
                    toProto(message: _60.Result): Uint8Array;
                    toProtoMsg(message: _60.Result): _60.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _60.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.SimulationResponse;
                    fromPartial(object: Partial<_60.SimulationResponse>): _60.SimulationResponse;
                    fromAmino(object: _60.SimulationResponseAmino): _60.SimulationResponse;
                    toAmino(message: _60.SimulationResponse): _60.SimulationResponseAmino;
                    fromAminoMsg(object: _60.SimulationResponseAminoMsg): _60.SimulationResponse;
                    toAminoMsg(message: _60.SimulationResponse): _60.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _60.SimulationResponseProtoMsg): _60.SimulationResponse;
                    toProto(message: _60.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _60.SimulationResponse): _60.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _60.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.MsgData;
                    fromPartial(object: Partial<_60.MsgData>): _60.MsgData;
                    fromAmino(object: _60.MsgDataAmino): _60.MsgData;
                    toAmino(message: _60.MsgData): _60.MsgDataAmino;
                    fromAminoMsg(object: _60.MsgDataAminoMsg): _60.MsgData;
                    toAminoMsg(message: _60.MsgData): _60.MsgDataAminoMsg;
                    fromProtoMsg(message: _60.MsgDataProtoMsg): _60.MsgData;
                    toProto(message: _60.MsgData): Uint8Array;
                    toProtoMsg(message: _60.MsgData): _60.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _60.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.TxMsgData;
                    fromPartial(object: Partial<_60.TxMsgData>): _60.TxMsgData;
                    fromAmino(object: _60.TxMsgDataAmino): _60.TxMsgData;
                    toAmino(message: _60.TxMsgData): _60.TxMsgDataAmino;
                    fromAminoMsg(object: _60.TxMsgDataAminoMsg): _60.TxMsgData;
                    toAminoMsg(message: _60.TxMsgData): _60.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _60.TxMsgDataProtoMsg): _60.TxMsgData;
                    toProto(message: _60.TxMsgData): Uint8Array;
                    toProtoMsg(message: _60.TxMsgData): _60.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _60.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.SearchTxsResult;
                    fromPartial(object: Partial<_60.SearchTxsResult>): _60.SearchTxsResult;
                    fromAmino(object: _60.SearchTxsResultAmino): _60.SearchTxsResult;
                    toAmino(message: _60.SearchTxsResult): _60.SearchTxsResultAmino;
                    fromAminoMsg(object: _60.SearchTxsResultAminoMsg): _60.SearchTxsResult;
                    toAminoMsg(message: _60.SearchTxsResult): _60.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _60.SearchTxsResultProtoMsg): _60.SearchTxsResult;
                    toProto(message: _60.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _60.SearchTxsResult): _60.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _61.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _61.Pairs;
                    fromPartial(object: Partial<_61.Pairs>): _61.Pairs;
                    fromAmino(object: _61.PairsAmino): _61.Pairs;
                    toAmino(message: _61.Pairs): _61.PairsAmino;
                    fromAminoMsg(object: _61.PairsAminoMsg): _61.Pairs;
                    toAminoMsg(message: _61.Pairs): _61.PairsAminoMsg;
                    fromProtoMsg(message: _61.PairsProtoMsg): _61.Pairs;
                    toProto(message: _61.Pairs): Uint8Array;
                    toProtoMsg(message: _61.Pairs): _61.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _61.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _61.Pair;
                    fromPartial(object: Partial<_61.Pair>): _61.Pair;
                    fromAmino(object: _61.PairAmino): _61.Pair;
                    toAmino(message: _61.Pair): _61.PairAmino;
                    fromAminoMsg(object: _61.PairAminoMsg): _61.Pair;
                    toAminoMsg(message: _61.Pair): _61.PairAminoMsg;
                    fromProtoMsg(message: _61.PairProtoMsg): _61.Pair;
                    toProto(message: _61.Pair): Uint8Array;
                    toProtoMsg(message: _61.Pair): _61.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _177.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _62.ConfigRequest): Promise<_62.ConfigResponse>;
                };
                LCDQueryClient: typeof _162.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _62.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _62.ConfigRequest;
                    fromPartial(_: Partial<_62.ConfigRequest>): _62.ConfigRequest;
                    fromAmino(_: _62.ConfigRequestAmino): _62.ConfigRequest;
                    toAmino(_: _62.ConfigRequest): _62.ConfigRequestAmino;
                    fromAminoMsg(object: _62.ConfigRequestAminoMsg): _62.ConfigRequest;
                    toAminoMsg(message: _62.ConfigRequest): _62.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _62.ConfigRequestProtoMsg): _62.ConfigRequest;
                    toProto(message: _62.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _62.ConfigRequest): _62.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _62.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.ConfigResponse;
                    fromPartial(object: Partial<_62.ConfigResponse>): _62.ConfigResponse;
                    fromAmino(object: _62.ConfigResponseAmino): _62.ConfigResponse;
                    toAmino(message: _62.ConfigResponse): _62.ConfigResponseAmino;
                    fromAminoMsg(object: _62.ConfigResponseAminoMsg): _62.ConfigResponse;
                    toAminoMsg(message: _62.ConfigResponse): _62.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _62.ConfigResponseProtoMsg): _62.ConfigResponse;
                    toProto(message: _62.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _62.ConfigResponse): _62.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _63.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.PageRequest;
                    fromPartial(object: Partial<_63.PageRequest>): _63.PageRequest;
                    fromAmino(object: _63.PageRequestAmino): _63.PageRequest;
                    toAmino(message: _63.PageRequest): _63.PageRequestAmino;
                    fromAminoMsg(object: _63.PageRequestAminoMsg): _63.PageRequest;
                    toAminoMsg(message: _63.PageRequest): _63.PageRequestAminoMsg;
                    fromProtoMsg(message: _63.PageRequestProtoMsg): _63.PageRequest;
                    toProto(message: _63.PageRequest): Uint8Array;
                    toProtoMsg(message: _63.PageRequest): _63.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _63.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.PageResponse;
                    fromPartial(object: Partial<_63.PageResponse>): _63.PageResponse;
                    fromAmino(object: _63.PageResponseAmino): _63.PageResponse;
                    toAmino(message: _63.PageResponse): _63.PageResponseAmino;
                    fromAminoMsg(object: _63.PageResponseAminoMsg): _63.PageResponse;
                    toAminoMsg(message: _63.PageResponse): _63.PageResponseAminoMsg;
                    fromProtoMsg(message: _63.PageResponseProtoMsg): _63.PageResponse;
                    toProto(message: _63.PageResponse): Uint8Array;
                    toProtoMsg(message: _63.PageResponse): _63.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _64.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _64.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_64.ListAllInterfacesRequest>): _64.ListAllInterfacesRequest;
                    fromAmino(_: _64.ListAllInterfacesRequestAmino): _64.ListAllInterfacesRequest;
                    toAmino(_: _64.ListAllInterfacesRequest): _64.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _64.ListAllInterfacesRequestAminoMsg): _64.ListAllInterfacesRequest;
                    toAminoMsg(message: _64.ListAllInterfacesRequest): _64.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _64.ListAllInterfacesRequestProtoMsg): _64.ListAllInterfacesRequest;
                    toProto(message: _64.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _64.ListAllInterfacesRequest): _64.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _64.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_64.ListAllInterfacesResponse>): _64.ListAllInterfacesResponse;
                    fromAmino(object: _64.ListAllInterfacesResponseAmino): _64.ListAllInterfacesResponse;
                    toAmino(message: _64.ListAllInterfacesResponse): _64.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _64.ListAllInterfacesResponseAminoMsg): _64.ListAllInterfacesResponse;
                    toAminoMsg(message: _64.ListAllInterfacesResponse): _64.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _64.ListAllInterfacesResponseProtoMsg): _64.ListAllInterfacesResponse;
                    toProto(message: _64.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _64.ListAllInterfacesResponse): _64.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _64.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.ListImplementationsRequest;
                    fromPartial(object: Partial<_64.ListImplementationsRequest>): _64.ListImplementationsRequest;
                    fromAmino(object: _64.ListImplementationsRequestAmino): _64.ListImplementationsRequest;
                    toAmino(message: _64.ListImplementationsRequest): _64.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _64.ListImplementationsRequestAminoMsg): _64.ListImplementationsRequest;
                    toAminoMsg(message: _64.ListImplementationsRequest): _64.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _64.ListImplementationsRequestProtoMsg): _64.ListImplementationsRequest;
                    toProto(message: _64.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _64.ListImplementationsRequest): _64.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _64.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.ListImplementationsResponse;
                    fromPartial(object: Partial<_64.ListImplementationsResponse>): _64.ListImplementationsResponse;
                    fromAmino(object: _64.ListImplementationsResponseAmino): _64.ListImplementationsResponse;
                    toAmino(message: _64.ListImplementationsResponse): _64.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _64.ListImplementationsResponseAminoMsg): _64.ListImplementationsResponse;
                    toAminoMsg(message: _64.ListImplementationsResponse): _64.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _64.ListImplementationsResponseProtoMsg): _64.ListImplementationsResponse;
                    toProto(message: _64.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _64.ListImplementationsResponse): _64.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _65.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.AppDescriptor;
                    fromPartial(object: Partial<_65.AppDescriptor>): _65.AppDescriptor;
                    fromAmino(object: _65.AppDescriptorAmino): _65.AppDescriptor;
                    toAmino(message: _65.AppDescriptor): _65.AppDescriptorAmino;
                    fromAminoMsg(object: _65.AppDescriptorAminoMsg): _65.AppDescriptor;
                    toAminoMsg(message: _65.AppDescriptor): _65.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _65.AppDescriptorProtoMsg): _65.AppDescriptor;
                    toProto(message: _65.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _65.AppDescriptor): _65.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _65.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.TxDescriptor;
                    fromPartial(object: Partial<_65.TxDescriptor>): _65.TxDescriptor;
                    fromAmino(object: _65.TxDescriptorAmino): _65.TxDescriptor;
                    toAmino(message: _65.TxDescriptor): _65.TxDescriptorAmino;
                    fromAminoMsg(object: _65.TxDescriptorAminoMsg): _65.TxDescriptor;
                    toAminoMsg(message: _65.TxDescriptor): _65.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _65.TxDescriptorProtoMsg): _65.TxDescriptor;
                    toProto(message: _65.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _65.TxDescriptor): _65.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _65.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.AuthnDescriptor;
                    fromPartial(object: Partial<_65.AuthnDescriptor>): _65.AuthnDescriptor;
                    fromAmino(object: _65.AuthnDescriptorAmino): _65.AuthnDescriptor;
                    toAmino(message: _65.AuthnDescriptor): _65.AuthnDescriptorAmino;
                    fromAminoMsg(object: _65.AuthnDescriptorAminoMsg): _65.AuthnDescriptor;
                    toAminoMsg(message: _65.AuthnDescriptor): _65.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _65.AuthnDescriptorProtoMsg): _65.AuthnDescriptor;
                    toProto(message: _65.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _65.AuthnDescriptor): _65.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _65.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.SigningModeDescriptor;
                    fromPartial(object: Partial<_65.SigningModeDescriptor>): _65.SigningModeDescriptor;
                    fromAmino(object: _65.SigningModeDescriptorAmino): _65.SigningModeDescriptor;
                    toAmino(message: _65.SigningModeDescriptor): _65.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _65.SigningModeDescriptorAminoMsg): _65.SigningModeDescriptor;
                    toAminoMsg(message: _65.SigningModeDescriptor): _65.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _65.SigningModeDescriptorProtoMsg): _65.SigningModeDescriptor;
                    toProto(message: _65.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _65.SigningModeDescriptor): _65.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _65.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.ChainDescriptor;
                    fromPartial(object: Partial<_65.ChainDescriptor>): _65.ChainDescriptor;
                    fromAmino(object: _65.ChainDescriptorAmino): _65.ChainDescriptor;
                    toAmino(message: _65.ChainDescriptor): _65.ChainDescriptorAmino;
                    fromAminoMsg(object: _65.ChainDescriptorAminoMsg): _65.ChainDescriptor;
                    toAminoMsg(message: _65.ChainDescriptor): _65.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _65.ChainDescriptorProtoMsg): _65.ChainDescriptor;
                    toProto(message: _65.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _65.ChainDescriptor): _65.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _65.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.CodecDescriptor;
                    fromPartial(object: Partial<_65.CodecDescriptor>): _65.CodecDescriptor;
                    fromAmino(object: _65.CodecDescriptorAmino): _65.CodecDescriptor;
                    toAmino(message: _65.CodecDescriptor): _65.CodecDescriptorAmino;
                    fromAminoMsg(object: _65.CodecDescriptorAminoMsg): _65.CodecDescriptor;
                    toAminoMsg(message: _65.CodecDescriptor): _65.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _65.CodecDescriptorProtoMsg): _65.CodecDescriptor;
                    toProto(message: _65.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _65.CodecDescriptor): _65.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _65.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.InterfaceDescriptor;
                    fromPartial(object: Partial<_65.InterfaceDescriptor>): _65.InterfaceDescriptor;
                    fromAmino(object: _65.InterfaceDescriptorAmino): _65.InterfaceDescriptor;
                    toAmino(message: _65.InterfaceDescriptor): _65.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _65.InterfaceDescriptorAminoMsg): _65.InterfaceDescriptor;
                    toAminoMsg(message: _65.InterfaceDescriptor): _65.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _65.InterfaceDescriptorProtoMsg): _65.InterfaceDescriptor;
                    toProto(message: _65.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _65.InterfaceDescriptor): _65.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _65.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_65.InterfaceImplementerDescriptor>): _65.InterfaceImplementerDescriptor;
                    fromAmino(object: _65.InterfaceImplementerDescriptorAmino): _65.InterfaceImplementerDescriptor;
                    toAmino(message: _65.InterfaceImplementerDescriptor): _65.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _65.InterfaceImplementerDescriptorAminoMsg): _65.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _65.InterfaceImplementerDescriptor): _65.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _65.InterfaceImplementerDescriptorProtoMsg): _65.InterfaceImplementerDescriptor;
                    toProto(message: _65.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _65.InterfaceImplementerDescriptor): _65.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _65.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_65.InterfaceAcceptingMessageDescriptor>): _65.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _65.InterfaceAcceptingMessageDescriptorAmino): _65.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _65.InterfaceAcceptingMessageDescriptor): _65.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _65.InterfaceAcceptingMessageDescriptorAminoMsg): _65.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _65.InterfaceAcceptingMessageDescriptor): _65.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _65.InterfaceAcceptingMessageDescriptorProtoMsg): _65.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _65.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _65.InterfaceAcceptingMessageDescriptor): _65.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _65.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.ConfigurationDescriptor;
                    fromPartial(object: Partial<_65.ConfigurationDescriptor>): _65.ConfigurationDescriptor;
                    fromAmino(object: _65.ConfigurationDescriptorAmino): _65.ConfigurationDescriptor;
                    toAmino(message: _65.ConfigurationDescriptor): _65.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _65.ConfigurationDescriptorAminoMsg): _65.ConfigurationDescriptor;
                    toAminoMsg(message: _65.ConfigurationDescriptor): _65.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _65.ConfigurationDescriptorProtoMsg): _65.ConfigurationDescriptor;
                    toProto(message: _65.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _65.ConfigurationDescriptor): _65.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _65.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.MsgDescriptor;
                    fromPartial(object: Partial<_65.MsgDescriptor>): _65.MsgDescriptor;
                    fromAmino(object: _65.MsgDescriptorAmino): _65.MsgDescriptor;
                    toAmino(message: _65.MsgDescriptor): _65.MsgDescriptorAmino;
                    fromAminoMsg(object: _65.MsgDescriptorAminoMsg): _65.MsgDescriptor;
                    toAminoMsg(message: _65.MsgDescriptor): _65.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _65.MsgDescriptorProtoMsg): _65.MsgDescriptor;
                    toProto(message: _65.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _65.MsgDescriptor): _65.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _65.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _65.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_65.GetAuthnDescriptorRequest>): _65.GetAuthnDescriptorRequest;
                    fromAmino(_: _65.GetAuthnDescriptorRequestAmino): _65.GetAuthnDescriptorRequest;
                    toAmino(_: _65.GetAuthnDescriptorRequest): _65.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _65.GetAuthnDescriptorRequestAminoMsg): _65.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _65.GetAuthnDescriptorRequest): _65.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _65.GetAuthnDescriptorRequestProtoMsg): _65.GetAuthnDescriptorRequest;
                    toProto(message: _65.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _65.GetAuthnDescriptorRequest): _65.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _65.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_65.GetAuthnDescriptorResponse>): _65.GetAuthnDescriptorResponse;
                    fromAmino(object: _65.GetAuthnDescriptorResponseAmino): _65.GetAuthnDescriptorResponse;
                    toAmino(message: _65.GetAuthnDescriptorResponse): _65.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _65.GetAuthnDescriptorResponseAminoMsg): _65.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _65.GetAuthnDescriptorResponse): _65.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _65.GetAuthnDescriptorResponseProtoMsg): _65.GetAuthnDescriptorResponse;
                    toProto(message: _65.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _65.GetAuthnDescriptorResponse): _65.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _65.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _65.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_65.GetChainDescriptorRequest>): _65.GetChainDescriptorRequest;
                    fromAmino(_: _65.GetChainDescriptorRequestAmino): _65.GetChainDescriptorRequest;
                    toAmino(_: _65.GetChainDescriptorRequest): _65.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _65.GetChainDescriptorRequestAminoMsg): _65.GetChainDescriptorRequest;
                    toAminoMsg(message: _65.GetChainDescriptorRequest): _65.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _65.GetChainDescriptorRequestProtoMsg): _65.GetChainDescriptorRequest;
                    toProto(message: _65.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _65.GetChainDescriptorRequest): _65.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _65.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_65.GetChainDescriptorResponse>): _65.GetChainDescriptorResponse;
                    fromAmino(object: _65.GetChainDescriptorResponseAmino): _65.GetChainDescriptorResponse;
                    toAmino(message: _65.GetChainDescriptorResponse): _65.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _65.GetChainDescriptorResponseAminoMsg): _65.GetChainDescriptorResponse;
                    toAminoMsg(message: _65.GetChainDescriptorResponse): _65.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _65.GetChainDescriptorResponseProtoMsg): _65.GetChainDescriptorResponse;
                    toProto(message: _65.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _65.GetChainDescriptorResponse): _65.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _65.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _65.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_65.GetCodecDescriptorRequest>): _65.GetCodecDescriptorRequest;
                    fromAmino(_: _65.GetCodecDescriptorRequestAmino): _65.GetCodecDescriptorRequest;
                    toAmino(_: _65.GetCodecDescriptorRequest): _65.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _65.GetCodecDescriptorRequestAminoMsg): _65.GetCodecDescriptorRequest;
                    toAminoMsg(message: _65.GetCodecDescriptorRequest): _65.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _65.GetCodecDescriptorRequestProtoMsg): _65.GetCodecDescriptorRequest;
                    toProto(message: _65.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _65.GetCodecDescriptorRequest): _65.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _65.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_65.GetCodecDescriptorResponse>): _65.GetCodecDescriptorResponse;
                    fromAmino(object: _65.GetCodecDescriptorResponseAmino): _65.GetCodecDescriptorResponse;
                    toAmino(message: _65.GetCodecDescriptorResponse): _65.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _65.GetCodecDescriptorResponseAminoMsg): _65.GetCodecDescriptorResponse;
                    toAminoMsg(message: _65.GetCodecDescriptorResponse): _65.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _65.GetCodecDescriptorResponseProtoMsg): _65.GetCodecDescriptorResponse;
                    toProto(message: _65.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _65.GetCodecDescriptorResponse): _65.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _65.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _65.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_65.GetConfigurationDescriptorRequest>): _65.GetConfigurationDescriptorRequest;
                    fromAmino(_: _65.GetConfigurationDescriptorRequestAmino): _65.GetConfigurationDescriptorRequest;
                    toAmino(_: _65.GetConfigurationDescriptorRequest): _65.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _65.GetConfigurationDescriptorRequestAminoMsg): _65.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _65.GetConfigurationDescriptorRequest): _65.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _65.GetConfigurationDescriptorRequestProtoMsg): _65.GetConfigurationDescriptorRequest;
                    toProto(message: _65.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _65.GetConfigurationDescriptorRequest): _65.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _65.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_65.GetConfigurationDescriptorResponse>): _65.GetConfigurationDescriptorResponse;
                    fromAmino(object: _65.GetConfigurationDescriptorResponseAmino): _65.GetConfigurationDescriptorResponse;
                    toAmino(message: _65.GetConfigurationDescriptorResponse): _65.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _65.GetConfigurationDescriptorResponseAminoMsg): _65.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _65.GetConfigurationDescriptorResponse): _65.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _65.GetConfigurationDescriptorResponseProtoMsg): _65.GetConfigurationDescriptorResponse;
                    toProto(message: _65.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _65.GetConfigurationDescriptorResponse): _65.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _65.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _65.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_65.GetQueryServicesDescriptorRequest>): _65.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _65.GetQueryServicesDescriptorRequestAmino): _65.GetQueryServicesDescriptorRequest;
                    toAmino(_: _65.GetQueryServicesDescriptorRequest): _65.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _65.GetQueryServicesDescriptorRequestAminoMsg): _65.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _65.GetQueryServicesDescriptorRequest): _65.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _65.GetQueryServicesDescriptorRequestProtoMsg): _65.GetQueryServicesDescriptorRequest;
                    toProto(message: _65.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _65.GetQueryServicesDescriptorRequest): _65.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _65.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_65.GetQueryServicesDescriptorResponse>): _65.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _65.GetQueryServicesDescriptorResponseAmino): _65.GetQueryServicesDescriptorResponse;
                    toAmino(message: _65.GetQueryServicesDescriptorResponse): _65.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _65.GetQueryServicesDescriptorResponseAminoMsg): _65.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _65.GetQueryServicesDescriptorResponse): _65.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _65.GetQueryServicesDescriptorResponseProtoMsg): _65.GetQueryServicesDescriptorResponse;
                    toProto(message: _65.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _65.GetQueryServicesDescriptorResponse): _65.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _65.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _65.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_65.GetTxDescriptorRequest>): _65.GetTxDescriptorRequest;
                    fromAmino(_: _65.GetTxDescriptorRequestAmino): _65.GetTxDescriptorRequest;
                    toAmino(_: _65.GetTxDescriptorRequest): _65.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _65.GetTxDescriptorRequestAminoMsg): _65.GetTxDescriptorRequest;
                    toAminoMsg(message: _65.GetTxDescriptorRequest): _65.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _65.GetTxDescriptorRequestProtoMsg): _65.GetTxDescriptorRequest;
                    toProto(message: _65.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _65.GetTxDescriptorRequest): _65.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _65.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_65.GetTxDescriptorResponse>): _65.GetTxDescriptorResponse;
                    fromAmino(object: _65.GetTxDescriptorResponseAmino): _65.GetTxDescriptorResponse;
                    toAmino(message: _65.GetTxDescriptorResponse): _65.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _65.GetTxDescriptorResponseAminoMsg): _65.GetTxDescriptorResponse;
                    toAminoMsg(message: _65.GetTxDescriptorResponse): _65.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _65.GetTxDescriptorResponseProtoMsg): _65.GetTxDescriptorResponse;
                    toProto(message: _65.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _65.GetTxDescriptorResponse): _65.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _65.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.QueryServicesDescriptor;
                    fromPartial(object: Partial<_65.QueryServicesDescriptor>): _65.QueryServicesDescriptor;
                    fromAmino(object: _65.QueryServicesDescriptorAmino): _65.QueryServicesDescriptor;
                    toAmino(message: _65.QueryServicesDescriptor): _65.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _65.QueryServicesDescriptorAminoMsg): _65.QueryServicesDescriptor;
                    toAminoMsg(message: _65.QueryServicesDescriptor): _65.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _65.QueryServicesDescriptorProtoMsg): _65.QueryServicesDescriptor;
                    toProto(message: _65.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _65.QueryServicesDescriptor): _65.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _65.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.QueryServiceDescriptor;
                    fromPartial(object: Partial<_65.QueryServiceDescriptor>): _65.QueryServiceDescriptor;
                    fromAmino(object: _65.QueryServiceDescriptorAmino): _65.QueryServiceDescriptor;
                    toAmino(message: _65.QueryServiceDescriptor): _65.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _65.QueryServiceDescriptorAminoMsg): _65.QueryServiceDescriptor;
                    toAminoMsg(message: _65.QueryServiceDescriptor): _65.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _65.QueryServiceDescriptorProtoMsg): _65.QueryServiceDescriptor;
                    toProto(message: _65.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _65.QueryServiceDescriptor): _65.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _65.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.QueryMethodDescriptor;
                    fromPartial(object: Partial<_65.QueryMethodDescriptor>): _65.QueryMethodDescriptor;
                    fromAmino(object: _65.QueryMethodDescriptorAmino): _65.QueryMethodDescriptor;
                    toAmino(message: _65.QueryMethodDescriptor): _65.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _65.QueryMethodDescriptorAminoMsg): _65.QueryMethodDescriptor;
                    toAminoMsg(message: _65.QueryMethodDescriptor): _65.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _65.QueryMethodDescriptorProtoMsg): _65.QueryMethodDescriptor;
                    toProto(message: _65.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _65.QueryMethodDescriptor): _65.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _66.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.Snapshot;
                    fromPartial(object: Partial<_66.Snapshot>): _66.Snapshot;
                    fromAmino(object: _66.SnapshotAmino): _66.Snapshot;
                    toAmino(message: _66.Snapshot): _66.SnapshotAmino;
                    fromAminoMsg(object: _66.SnapshotAminoMsg): _66.Snapshot;
                    toAminoMsg(message: _66.Snapshot): _66.SnapshotAminoMsg;
                    fromProtoMsg(message: _66.SnapshotProtoMsg): _66.Snapshot;
                    toProto(message: _66.Snapshot): Uint8Array;
                    toProtoMsg(message: _66.Snapshot): _66.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _66.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.Metadata;
                    fromPartial(object: Partial<_66.Metadata>): _66.Metadata;
                    fromAmino(object: _66.MetadataAmino): _66.Metadata;
                    toAmino(message: _66.Metadata): _66.MetadataAmino;
                    fromAminoMsg(object: _66.MetadataAminoMsg): _66.Metadata;
                    toAminoMsg(message: _66.Metadata): _66.MetadataAminoMsg;
                    fromProtoMsg(message: _66.MetadataProtoMsg): _66.Metadata;
                    toProto(message: _66.Metadata): Uint8Array;
                    toProtoMsg(message: _66.Metadata): _66.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _66.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.SnapshotItem;
                    fromPartial(object: Partial<_66.SnapshotItem>): _66.SnapshotItem;
                    fromAmino(object: _66.SnapshotItemAmino): _66.SnapshotItem;
                    toAmino(message: _66.SnapshotItem): _66.SnapshotItemAmino;
                    fromAminoMsg(object: _66.SnapshotItemAminoMsg): _66.SnapshotItem;
                    toAminoMsg(message: _66.SnapshotItem): _66.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _66.SnapshotItemProtoMsg): _66.SnapshotItem;
                    toProto(message: _66.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _66.SnapshotItem): _66.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _66.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.SnapshotStoreItem;
                    fromPartial(object: Partial<_66.SnapshotStoreItem>): _66.SnapshotStoreItem;
                    fromAmino(object: _66.SnapshotStoreItemAmino): _66.SnapshotStoreItem;
                    toAmino(message: _66.SnapshotStoreItem): _66.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _66.SnapshotStoreItemAminoMsg): _66.SnapshotStoreItem;
                    toAminoMsg(message: _66.SnapshotStoreItem): _66.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _66.SnapshotStoreItemProtoMsg): _66.SnapshotStoreItem;
                    toProto(message: _66.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _66.SnapshotStoreItem): _66.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _66.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.SnapshotIAVLItem;
                    fromPartial(object: Partial<_66.SnapshotIAVLItem>): _66.SnapshotIAVLItem;
                    fromAmino(object: _66.SnapshotIAVLItemAmino): _66.SnapshotIAVLItem;
                    toAmino(message: _66.SnapshotIAVLItem): _66.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _66.SnapshotIAVLItemAminoMsg): _66.SnapshotIAVLItem;
                    toAminoMsg(message: _66.SnapshotIAVLItem): _66.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _66.SnapshotIAVLItemProtoMsg): _66.SnapshotIAVLItem;
                    toProto(message: _66.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _66.SnapshotIAVLItem): _66.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _66.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_66.SnapshotExtensionMeta>): _66.SnapshotExtensionMeta;
                    fromAmino(object: _66.SnapshotExtensionMetaAmino): _66.SnapshotExtensionMeta;
                    toAmino(message: _66.SnapshotExtensionMeta): _66.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _66.SnapshotExtensionMetaAminoMsg): _66.SnapshotExtensionMeta;
                    toAminoMsg(message: _66.SnapshotExtensionMeta): _66.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _66.SnapshotExtensionMetaProtoMsg): _66.SnapshotExtensionMeta;
                    toProto(message: _66.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _66.SnapshotExtensionMeta): _66.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _66.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_66.SnapshotExtensionPayload>): _66.SnapshotExtensionPayload;
                    fromAmino(object: _66.SnapshotExtensionPayloadAmino): _66.SnapshotExtensionPayload;
                    toAmino(message: _66.SnapshotExtensionPayload): _66.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _66.SnapshotExtensionPayloadAminoMsg): _66.SnapshotExtensionPayload;
                    toAminoMsg(message: _66.SnapshotExtensionPayload): _66.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _66.SnapshotExtensionPayloadProtoMsg): _66.SnapshotExtensionPayload;
                    toProto(message: _66.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _66.SnapshotExtensionPayload): _66.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _68.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.StoreKVPair;
                    fromPartial(object: Partial<_68.StoreKVPair>): _68.StoreKVPair;
                    fromAmino(object: _68.StoreKVPairAmino): _68.StoreKVPair;
                    toAmino(message: _68.StoreKVPair): _68.StoreKVPairAmino;
                    fromAminoMsg(object: _68.StoreKVPairAminoMsg): _68.StoreKVPair;
                    toAminoMsg(message: _68.StoreKVPair): _68.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _68.StoreKVPairProtoMsg): _68.StoreKVPair;
                    toProto(message: _68.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _68.StoreKVPair): _68.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _68.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.BlockMetadata;
                    fromPartial(object: Partial<_68.BlockMetadata>): _68.BlockMetadata;
                    fromAmino(object: _68.BlockMetadataAmino): _68.BlockMetadata;
                    toAmino(message: _68.BlockMetadata): _68.BlockMetadataAmino;
                    fromAminoMsg(object: _68.BlockMetadataAminoMsg): _68.BlockMetadata;
                    toAminoMsg(message: _68.BlockMetadata): _68.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _68.BlockMetadataProtoMsg): _68.BlockMetadata;
                    toProto(message: _68.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _68.BlockMetadata): _68.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _68.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_68.BlockMetadata_DeliverTx>): _68.BlockMetadata_DeliverTx;
                    fromAmino(object: _68.BlockMetadata_DeliverTxAmino): _68.BlockMetadata_DeliverTx;
                    toAmino(message: _68.BlockMetadata_DeliverTx): _68.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _68.BlockMetadata_DeliverTxAminoMsg): _68.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _68.BlockMetadata_DeliverTx): _68.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _68.BlockMetadata_DeliverTxProtoMsg): _68.BlockMetadata_DeliverTx;
                    toProto(message: _68.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _68.BlockMetadata_DeliverTx): _68.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _67.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.CommitInfo;
                    fromPartial(object: Partial<_67.CommitInfo>): _67.CommitInfo;
                    fromAmino(object: _67.CommitInfoAmino): _67.CommitInfo;
                    toAmino(message: _67.CommitInfo): _67.CommitInfoAmino;
                    fromAminoMsg(object: _67.CommitInfoAminoMsg): _67.CommitInfo;
                    toAminoMsg(message: _67.CommitInfo): _67.CommitInfoAminoMsg;
                    fromProtoMsg(message: _67.CommitInfoProtoMsg): _67.CommitInfo;
                    toProto(message: _67.CommitInfo): Uint8Array;
                    toProtoMsg(message: _67.CommitInfo): _67.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _67.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.StoreInfo;
                    fromPartial(object: Partial<_67.StoreInfo>): _67.StoreInfo;
                    fromAmino(object: _67.StoreInfoAmino): _67.StoreInfo;
                    toAmino(message: _67.StoreInfo): _67.StoreInfoAmino;
                    fromAminoMsg(object: _67.StoreInfoAminoMsg): _67.StoreInfo;
                    toAminoMsg(message: _67.StoreInfo): _67.StoreInfoAminoMsg;
                    fromProtoMsg(message: _67.StoreInfoProtoMsg): _67.StoreInfo;
                    toProto(message: _67.StoreInfo): Uint8Array;
                    toProtoMsg(message: _67.StoreInfo): _67.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _67.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.CommitID;
                    fromPartial(object: Partial<_67.CommitID>): _67.CommitID;
                    fromAmino(object: _67.CommitIDAmino): _67.CommitID;
                    toAmino(message: _67.CommitID): _67.CommitIDAmino;
                    fromAminoMsg(object: _67.CommitIDAminoMsg): _67.CommitID;
                    toAminoMsg(message: _67.CommitID): _67.CommitIDAminoMsg;
                    fromProtoMsg(message: _67.CommitIDProtoMsg): _67.CommitID;
                    toProto(message: _67.CommitID): Uint8Array;
                    toProtoMsg(message: _67.CommitID): _67.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _178.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _69.GetNodeInfoRequest): Promise<_69.GetNodeInfoResponse>;
                    getSyncing(request?: _69.GetSyncingRequest): Promise<_69.GetSyncingResponse>;
                    getLatestBlock(request?: _69.GetLatestBlockRequest): Promise<_69.GetLatestBlockResponse>;
                    getBlockByHeight(request: _69.GetBlockByHeightRequest): Promise<_69.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _69.GetLatestValidatorSetRequest): Promise<_69.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _69.GetValidatorSetByHeightRequest): Promise<_69.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _163.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _69.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_69.GetValidatorSetByHeightRequest>): _69.GetValidatorSetByHeightRequest;
                    fromAmino(object: _69.GetValidatorSetByHeightRequestAmino): _69.GetValidatorSetByHeightRequest;
                    toAmino(message: _69.GetValidatorSetByHeightRequest): _69.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _69.GetValidatorSetByHeightRequestAminoMsg): _69.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _69.GetValidatorSetByHeightRequest): _69.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _69.GetValidatorSetByHeightRequestProtoMsg): _69.GetValidatorSetByHeightRequest;
                    toProto(message: _69.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _69.GetValidatorSetByHeightRequest): _69.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _69.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_69.GetValidatorSetByHeightResponse>): _69.GetValidatorSetByHeightResponse;
                    fromAmino(object: _69.GetValidatorSetByHeightResponseAmino): _69.GetValidatorSetByHeightResponse;
                    toAmino(message: _69.GetValidatorSetByHeightResponse): _69.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _69.GetValidatorSetByHeightResponseAminoMsg): _69.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _69.GetValidatorSetByHeightResponse): _69.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _69.GetValidatorSetByHeightResponseProtoMsg): _69.GetValidatorSetByHeightResponse;
                    toProto(message: _69.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _69.GetValidatorSetByHeightResponse): _69.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _69.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_69.GetLatestValidatorSetRequest>): _69.GetLatestValidatorSetRequest;
                    fromAmino(object: _69.GetLatestValidatorSetRequestAmino): _69.GetLatestValidatorSetRequest;
                    toAmino(message: _69.GetLatestValidatorSetRequest): _69.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _69.GetLatestValidatorSetRequestAminoMsg): _69.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _69.GetLatestValidatorSetRequest): _69.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _69.GetLatestValidatorSetRequestProtoMsg): _69.GetLatestValidatorSetRequest;
                    toProto(message: _69.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _69.GetLatestValidatorSetRequest): _69.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _69.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_69.GetLatestValidatorSetResponse>): _69.GetLatestValidatorSetResponse;
                    fromAmino(object: _69.GetLatestValidatorSetResponseAmino): _69.GetLatestValidatorSetResponse;
                    toAmino(message: _69.GetLatestValidatorSetResponse): _69.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _69.GetLatestValidatorSetResponseAminoMsg): _69.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _69.GetLatestValidatorSetResponse): _69.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _69.GetLatestValidatorSetResponseProtoMsg): _69.GetLatestValidatorSetResponse;
                    toProto(message: _69.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _69.GetLatestValidatorSetResponse): _69.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _69.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.Validator;
                    fromPartial(object: Partial<_69.Validator>): _69.Validator;
                    fromAmino(object: _69.ValidatorAmino): _69.Validator;
                    toAmino(message: _69.Validator): _69.ValidatorAmino;
                    fromAminoMsg(object: _69.ValidatorAminoMsg): _69.Validator;
                    toAminoMsg(message: _69.Validator): _69.ValidatorAminoMsg;
                    fromProtoMsg(message: _69.ValidatorProtoMsg): _69.Validator;
                    toProto(message: _69.Validator): Uint8Array;
                    toProtoMsg(message: _69.Validator): _69.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _69.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_69.GetBlockByHeightRequest>): _69.GetBlockByHeightRequest;
                    fromAmino(object: _69.GetBlockByHeightRequestAmino): _69.GetBlockByHeightRequest;
                    toAmino(message: _69.GetBlockByHeightRequest): _69.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _69.GetBlockByHeightRequestAminoMsg): _69.GetBlockByHeightRequest;
                    toAminoMsg(message: _69.GetBlockByHeightRequest): _69.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _69.GetBlockByHeightRequestProtoMsg): _69.GetBlockByHeightRequest;
                    toProto(message: _69.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _69.GetBlockByHeightRequest): _69.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _69.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_69.GetBlockByHeightResponse>): _69.GetBlockByHeightResponse;
                    fromAmino(object: _69.GetBlockByHeightResponseAmino): _69.GetBlockByHeightResponse;
                    toAmino(message: _69.GetBlockByHeightResponse): _69.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _69.GetBlockByHeightResponseAminoMsg): _69.GetBlockByHeightResponse;
                    toAminoMsg(message: _69.GetBlockByHeightResponse): _69.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _69.GetBlockByHeightResponseProtoMsg): _69.GetBlockByHeightResponse;
                    toProto(message: _69.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _69.GetBlockByHeightResponse): _69.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _69.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _69.GetLatestBlockRequest;
                    fromPartial(_: Partial<_69.GetLatestBlockRequest>): _69.GetLatestBlockRequest;
                    fromAmino(_: _69.GetLatestBlockRequestAmino): _69.GetLatestBlockRequest;
                    toAmino(_: _69.GetLatestBlockRequest): _69.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _69.GetLatestBlockRequestAminoMsg): _69.GetLatestBlockRequest;
                    toAminoMsg(message: _69.GetLatestBlockRequest): _69.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _69.GetLatestBlockRequestProtoMsg): _69.GetLatestBlockRequest;
                    toProto(message: _69.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _69.GetLatestBlockRequest): _69.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _69.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.GetLatestBlockResponse;
                    fromPartial(object: Partial<_69.GetLatestBlockResponse>): _69.GetLatestBlockResponse;
                    fromAmino(object: _69.GetLatestBlockResponseAmino): _69.GetLatestBlockResponse;
                    toAmino(message: _69.GetLatestBlockResponse): _69.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _69.GetLatestBlockResponseAminoMsg): _69.GetLatestBlockResponse;
                    toAminoMsg(message: _69.GetLatestBlockResponse): _69.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _69.GetLatestBlockResponseProtoMsg): _69.GetLatestBlockResponse;
                    toProto(message: _69.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _69.GetLatestBlockResponse): _69.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _69.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _69.GetSyncingRequest;
                    fromPartial(_: Partial<_69.GetSyncingRequest>): _69.GetSyncingRequest;
                    fromAmino(_: _69.GetSyncingRequestAmino): _69.GetSyncingRequest;
                    toAmino(_: _69.GetSyncingRequest): _69.GetSyncingRequestAmino;
                    fromAminoMsg(object: _69.GetSyncingRequestAminoMsg): _69.GetSyncingRequest;
                    toAminoMsg(message: _69.GetSyncingRequest): _69.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _69.GetSyncingRequestProtoMsg): _69.GetSyncingRequest;
                    toProto(message: _69.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _69.GetSyncingRequest): _69.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _69.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.GetSyncingResponse;
                    fromPartial(object: Partial<_69.GetSyncingResponse>): _69.GetSyncingResponse;
                    fromAmino(object: _69.GetSyncingResponseAmino): _69.GetSyncingResponse;
                    toAmino(message: _69.GetSyncingResponse): _69.GetSyncingResponseAmino;
                    fromAminoMsg(object: _69.GetSyncingResponseAminoMsg): _69.GetSyncingResponse;
                    toAminoMsg(message: _69.GetSyncingResponse): _69.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _69.GetSyncingResponseProtoMsg): _69.GetSyncingResponse;
                    toProto(message: _69.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _69.GetSyncingResponse): _69.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _69.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _69.GetNodeInfoRequest;
                    fromPartial(_: Partial<_69.GetNodeInfoRequest>): _69.GetNodeInfoRequest;
                    fromAmino(_: _69.GetNodeInfoRequestAmino): _69.GetNodeInfoRequest;
                    toAmino(_: _69.GetNodeInfoRequest): _69.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _69.GetNodeInfoRequestAminoMsg): _69.GetNodeInfoRequest;
                    toAminoMsg(message: _69.GetNodeInfoRequest): _69.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _69.GetNodeInfoRequestProtoMsg): _69.GetNodeInfoRequest;
                    toProto(message: _69.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _69.GetNodeInfoRequest): _69.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _69.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.GetNodeInfoResponse;
                    fromPartial(object: Partial<_69.GetNodeInfoResponse>): _69.GetNodeInfoResponse;
                    fromAmino(object: _69.GetNodeInfoResponseAmino): _69.GetNodeInfoResponse;
                    toAmino(message: _69.GetNodeInfoResponse): _69.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _69.GetNodeInfoResponseAminoMsg): _69.GetNodeInfoResponse;
                    toAminoMsg(message: _69.GetNodeInfoResponse): _69.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _69.GetNodeInfoResponseProtoMsg): _69.GetNodeInfoResponse;
                    toProto(message: _69.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _69.GetNodeInfoResponse): _69.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _69.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.VersionInfo;
                    fromPartial(object: Partial<_69.VersionInfo>): _69.VersionInfo;
                    fromAmino(object: _69.VersionInfoAmino): _69.VersionInfo;
                    toAmino(message: _69.VersionInfo): _69.VersionInfoAmino;
                    fromAminoMsg(object: _69.VersionInfoAminoMsg): _69.VersionInfo;
                    toAminoMsg(message: _69.VersionInfo): _69.VersionInfoAminoMsg;
                    fromProtoMsg(message: _69.VersionInfoProtoMsg): _69.VersionInfo;
                    toProto(message: _69.VersionInfo): Uint8Array;
                    toProtoMsg(message: _69.VersionInfo): _69.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _69.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.Module;
                    fromPartial(object: Partial<_69.Module>): _69.Module;
                    fromAmino(object: _69.ModuleAmino): _69.Module;
                    toAmino(message: _69.Module): _69.ModuleAmino;
                    fromAminoMsg(object: _69.ModuleAminoMsg): _69.Module;
                    toAminoMsg(message: _69.Module): _69.ModuleAminoMsg;
                    fromProtoMsg(message: _69.ModuleProtoMsg): _69.Module;
                    toProto(message: _69.Module): Uint8Array;
                    toProtoMsg(message: _69.Module): _69.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _70.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Coin;
                fromPartial(object: Partial<_70.Coin>): _70.Coin;
                fromAmino(object: _70.CoinAmino): _70.Coin;
                toAmino(message: _70.Coin): _70.CoinAmino;
                fromAminoMsg(object: _70.CoinAminoMsg): _70.Coin;
                toAminoMsg(message: _70.Coin): _70.CoinAminoMsg;
                fromProtoMsg(message: _70.CoinProtoMsg): _70.Coin;
                toProto(message: _70.Coin): Uint8Array;
                toProtoMsg(message: _70.Coin): _70.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _70.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.DecCoin;
                fromPartial(object: Partial<_70.DecCoin>): _70.DecCoin;
                fromAmino(object: _70.DecCoinAmino): _70.DecCoin;
                toAmino(message: _70.DecCoin): _70.DecCoinAmino;
                fromAminoMsg(object: _70.DecCoinAminoMsg): _70.DecCoin;
                toAminoMsg(message: _70.DecCoin): _70.DecCoinAminoMsg;
                fromProtoMsg(message: _70.DecCoinProtoMsg): _70.DecCoin;
                toProto(message: _70.DecCoin): Uint8Array;
                toProtoMsg(message: _70.DecCoin): _70.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _70.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.IntProto;
                fromPartial(object: Partial<_70.IntProto>): _70.IntProto;
                fromAmino(object: _70.IntProtoAmino): _70.IntProto;
                toAmino(message: _70.IntProto): _70.IntProtoAmino;
                fromAminoMsg(object: _70.IntProtoAminoMsg): _70.IntProto;
                toAminoMsg(message: _70.IntProto): _70.IntProtoAminoMsg;
                fromProtoMsg(message: _70.IntProtoProtoMsg): _70.IntProto;
                toProto(message: _70.IntProto): Uint8Array;
                toProtoMsg(message: _70.IntProto): _70.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _70.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.DecProto;
                fromPartial(object: Partial<_70.DecProto>): _70.DecProto;
                fromAmino(object: _70.DecProtoAmino): _70.DecProto;
                toAmino(message: _70.DecProto): _70.DecProtoAmino;
                fromAminoMsg(object: _70.DecProtoAminoMsg): _70.DecProto;
                toAminoMsg(message: _70.DecProto): _70.DecProtoAminoMsg;
                fromProtoMsg(message: _70.DecProtoProtoMsg): _70.DecProto;
                toProto(message: _70.DecProto): Uint8Array;
                toProtoMsg(message: _70.DecProto): _70.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _72.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.GenesisOwners;
                fromPartial(object: Partial<_72.GenesisOwners>): _72.GenesisOwners;
                fromAmino(object: _72.GenesisOwnersAmino): _72.GenesisOwners;
                toAmino(message: _72.GenesisOwners): _72.GenesisOwnersAmino;
                fromAminoMsg(object: _72.GenesisOwnersAminoMsg): _72.GenesisOwners;
                toAminoMsg(message: _72.GenesisOwners): _72.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _72.GenesisOwnersProtoMsg): _72.GenesisOwners;
                toProto(message: _72.GenesisOwners): Uint8Array;
                toProtoMsg(message: _72.GenesisOwners): _72.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _71.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Capability;
                fromPartial(object: Partial<_71.Capability>): _71.Capability;
                fromAmino(object: _71.CapabilityAmino): _71.Capability;
                toAmino(message: _71.Capability): _71.CapabilityAmino;
                fromAminoMsg(object: _71.CapabilityAminoMsg): _71.Capability;
                toAminoMsg(message: _71.Capability): _71.CapabilityAminoMsg;
                fromProtoMsg(message: _71.CapabilityProtoMsg): _71.Capability;
                toProto(message: _71.Capability): Uint8Array;
                toProtoMsg(message: _71.Capability): _71.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _71.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Owner;
                fromPartial(object: Partial<_71.Owner>): _71.Owner;
                fromAmino(object: _71.OwnerAmino): _71.Owner;
                toAmino(message: _71.Owner): _71.OwnerAmino;
                fromAminoMsg(object: _71.OwnerAminoMsg): _71.Owner;
                toAminoMsg(message: _71.Owner): _71.OwnerAminoMsg;
                fromProtoMsg(message: _71.OwnerProtoMsg): _71.Owner;
                toProto(message: _71.Owner): Uint8Array;
                toProtoMsg(message: _71.Owner): _71.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _71.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.CapabilityOwners;
                fromPartial(object: Partial<_71.CapabilityOwners>): _71.CapabilityOwners;
                fromAmino(object: _71.CapabilityOwnersAmino): _71.CapabilityOwners;
                toAmino(message: _71.CapabilityOwners): _71.CapabilityOwnersAmino;
                fromAminoMsg(object: _71.CapabilityOwnersAminoMsg): _71.CapabilityOwners;
                toAminoMsg(message: _71.CapabilityOwners): _71.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _71.CapabilityOwnersProtoMsg): _71.CapabilityOwners;
                toProto(message: _71.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _71.CapabilityOwners): _71.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _191.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _74.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _74.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _74.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _74.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _74.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _74.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _74.MsgVerifyInvariant) => _74.MsgVerifyInvariantAmino;
                    fromAmino: (object: _74.MsgVerifyInvariantAmino) => _74.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _74.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.MsgVerifyInvariant;
                fromPartial(object: Partial<_74.MsgVerifyInvariant>): _74.MsgVerifyInvariant;
                fromAmino(object: _74.MsgVerifyInvariantAmino): _74.MsgVerifyInvariant;
                toAmino(message: _74.MsgVerifyInvariant): _74.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _74.MsgVerifyInvariantAminoMsg): _74.MsgVerifyInvariant;
                toAminoMsg(message: _74.MsgVerifyInvariant): _74.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _74.MsgVerifyInvariantProtoMsg): _74.MsgVerifyInvariant;
                toProto(message: _74.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _74.MsgVerifyInvariant): _74.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _74.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _74.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_74.MsgVerifyInvariantResponse>): _74.MsgVerifyInvariantResponse;
                fromAmino(_: _74.MsgVerifyInvariantResponseAmino): _74.MsgVerifyInvariantResponse;
                toAmino(_: _74.MsgVerifyInvariantResponse): _74.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _74.MsgVerifyInvariantResponseAminoMsg): _74.MsgVerifyInvariantResponse;
                toAminoMsg(message: _74.MsgVerifyInvariantResponse): _74.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _74.MsgVerifyInvariantResponseProtoMsg): _74.MsgVerifyInvariantResponse;
                toProto(message: _74.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _74.MsgVerifyInvariantResponse): _74.MsgVerifyInvariantResponseProtoMsg;
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
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _75.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.PubKey;
                fromPartial(object: Partial<_75.PubKey>): _75.PubKey;
                fromAmino(object: _75.PubKeyAmino): _75.PubKey;
                toAmino(message: _75.PubKey): _75.PubKeyAmino;
                fromAminoMsg(object: _75.PubKeyAminoMsg): _75.PubKey;
                toAminoMsg(message: _75.PubKey): _75.PubKeyAminoMsg;
                fromProtoMsg(message: _75.PubKeyProtoMsg): _75.PubKey;
                toProto(message: _75.PubKey): Uint8Array;
                toProtoMsg(message: _75.PubKey): _75.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _75.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.PrivKey;
                fromPartial(object: Partial<_75.PrivKey>): _75.PrivKey;
                fromAmino(object: _75.PrivKeyAmino): _75.PrivKey;
                toAmino(message: _75.PrivKey): _75.PrivKeyAmino;
                fromAminoMsg(object: _75.PrivKeyAminoMsg): _75.PrivKey;
                toAminoMsg(message: _75.PrivKey): _75.PrivKeyAminoMsg;
                fromProtoMsg(message: _75.PrivKeyProtoMsg): _75.PrivKey;
                toProto(message: _75.PrivKey): Uint8Array;
                toProtoMsg(message: _75.PrivKey): _75.PrivKeyProtoMsg;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _76.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.LegacyAminoPubKey;
                fromPartial(object: Partial<_76.LegacyAminoPubKey>): _76.LegacyAminoPubKey;
                fromAmino(object: _76.LegacyAminoPubKeyAmino): _76.LegacyAminoPubKey;
                toAmino(message: _76.LegacyAminoPubKey): _76.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _76.LegacyAminoPubKeyAminoMsg): _76.LegacyAminoPubKey;
                toAminoMsg(message: _76.LegacyAminoPubKey): _76.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _76.LegacyAminoPubKeyProtoMsg): _76.LegacyAminoPubKey;
                toProto(message: _76.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _76.LegacyAminoPubKey): _76.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _77.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.PubKey;
                fromPartial(object: Partial<_77.PubKey>): _77.PubKey;
                fromAmino(object: _77.PubKeyAmino): _77.PubKey;
                toAmino(message: _77.PubKey): _77.PubKeyAmino;
                fromAminoMsg(object: _77.PubKeyAminoMsg): _77.PubKey;
                toAminoMsg(message: _77.PubKey): _77.PubKeyAminoMsg;
                fromProtoMsg(message: _77.PubKeyProtoMsg): _77.PubKey;
                toProto(message: _77.PubKey): Uint8Array;
                toProtoMsg(message: _77.PubKey): _77.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _77.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.PrivKey;
                fromPartial(object: Partial<_77.PrivKey>): _77.PrivKey;
                fromAmino(object: _77.PrivKeyAmino): _77.PrivKey;
                toAmino(message: _77.PrivKey): _77.PrivKeyAmino;
                fromAminoMsg(object: _77.PrivKeyAminoMsg): _77.PrivKey;
                toAminoMsg(message: _77.PrivKey): _77.PrivKeyAminoMsg;
                fromProtoMsg(message: _77.PrivKeyProtoMsg): _77.PrivKey;
                toProto(message: _77.PrivKey): Uint8Array;
                toProtoMsg(message: _77.PrivKey): _77.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _78.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.PubKey;
                fromPartial(object: Partial<_78.PubKey>): _78.PubKey;
                fromAmino(object: _78.PubKeyAmino): _78.PubKey;
                toAmino(message: _78.PubKey): _78.PubKeyAmino;
                fromAminoMsg(object: _78.PubKeyAminoMsg): _78.PubKey;
                toAminoMsg(message: _78.PubKey): _78.PubKeyAminoMsg;
                fromProtoMsg(message: _78.PubKeyProtoMsg): _78.PubKey;
                toProto(message: _78.PubKey): Uint8Array;
                toProtoMsg(message: _78.PubKey): _78.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _78.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.PrivKey;
                fromPartial(object: Partial<_78.PrivKey>): _78.PrivKey;
                fromAmino(object: _78.PrivKeyAmino): _78.PrivKey;
                toAmino(message: _78.PrivKey): _78.PrivKeyAmino;
                fromAminoMsg(object: _78.PrivKeyAminoMsg): _78.PrivKey;
                toAminoMsg(message: _78.PrivKey): _78.PrivKeyAminoMsg;
                fromProtoMsg(message: _78.PrivKeyProtoMsg): _78.PrivKey;
                toProto(message: _78.PrivKey): Uint8Array;
                toProtoMsg(message: _78.PrivKey): _78.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _192.MsgClientImpl;
            QueryClientImpl: typeof _179.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                validatorOutstandingRewards(request: _81.QueryValidatorOutstandingRewardsRequest): Promise<_81.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _81.QueryValidatorCommissionRequest): Promise<_81.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _81.QueryValidatorSlashesRequest): Promise<_81.QueryValidatorSlashesResponse>;
                delegationRewards(request: _81.QueryDelegationRewardsRequest): Promise<_81.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _81.QueryDelegationTotalRewardsRequest): Promise<_81.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _81.QueryDelegatorValidatorsRequest): Promise<_81.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _81.QueryDelegatorWithdrawAddressRequest): Promise<_81.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _81.QueryCommunityPoolRequest): Promise<_81.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _164.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _82.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _82.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _82.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _82.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _82.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _82.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _82.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _82.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _82.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _82.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _82.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _82.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _82.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _82.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _82.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _82.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _82.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _82.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _82.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _82.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _82.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _82.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _82.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _82.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _82.MsgSetWithdrawAddress) => _82.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _82.MsgSetWithdrawAddressAmino) => _82.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _82.MsgWithdrawDelegatorReward) => _82.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _82.MsgWithdrawDelegatorRewardAmino) => _82.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _82.MsgWithdrawValidatorCommission) => _82.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _82.MsgWithdrawValidatorCommissionAmino) => _82.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _82.MsgFundCommunityPool) => _82.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _82.MsgFundCommunityPoolAmino) => _82.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _82.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_82.MsgSetWithdrawAddress>): _82.MsgSetWithdrawAddress;
                fromAmino(object: _82.MsgSetWithdrawAddressAmino): _82.MsgSetWithdrawAddress;
                toAmino(message: _82.MsgSetWithdrawAddress): _82.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _82.MsgSetWithdrawAddressAminoMsg): _82.MsgSetWithdrawAddress;
                toAminoMsg(message: _82.MsgSetWithdrawAddress): _82.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _82.MsgSetWithdrawAddressProtoMsg): _82.MsgSetWithdrawAddress;
                toProto(message: _82.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _82.MsgSetWithdrawAddress): _82.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _82.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _82.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_82.MsgSetWithdrawAddressResponse>): _82.MsgSetWithdrawAddressResponse;
                fromAmino(_: _82.MsgSetWithdrawAddressResponseAmino): _82.MsgSetWithdrawAddressResponse;
                toAmino(_: _82.MsgSetWithdrawAddressResponse): _82.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _82.MsgSetWithdrawAddressResponseAminoMsg): _82.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _82.MsgSetWithdrawAddressResponse): _82.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _82.MsgSetWithdrawAddressResponseProtoMsg): _82.MsgSetWithdrawAddressResponse;
                toProto(message: _82.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _82.MsgSetWithdrawAddressResponse): _82.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _82.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_82.MsgWithdrawDelegatorReward>): _82.MsgWithdrawDelegatorReward;
                fromAmino(object: _82.MsgWithdrawDelegatorRewardAmino): _82.MsgWithdrawDelegatorReward;
                toAmino(message: _82.MsgWithdrawDelegatorReward): _82.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _82.MsgWithdrawDelegatorRewardAminoMsg): _82.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _82.MsgWithdrawDelegatorReward): _82.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _82.MsgWithdrawDelegatorRewardProtoMsg): _82.MsgWithdrawDelegatorReward;
                toProto(message: _82.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _82.MsgWithdrawDelegatorReward): _82.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _82.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _82.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_82.MsgWithdrawDelegatorRewardResponse>): _82.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _82.MsgWithdrawDelegatorRewardResponseAmino): _82.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _82.MsgWithdrawDelegatorRewardResponse): _82.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _82.MsgWithdrawDelegatorRewardResponseAminoMsg): _82.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _82.MsgWithdrawDelegatorRewardResponse): _82.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _82.MsgWithdrawDelegatorRewardResponseProtoMsg): _82.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _82.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _82.MsgWithdrawDelegatorRewardResponse): _82.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _82.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_82.MsgWithdrawValidatorCommission>): _82.MsgWithdrawValidatorCommission;
                fromAmino(object: _82.MsgWithdrawValidatorCommissionAmino): _82.MsgWithdrawValidatorCommission;
                toAmino(message: _82.MsgWithdrawValidatorCommission): _82.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _82.MsgWithdrawValidatorCommissionAminoMsg): _82.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _82.MsgWithdrawValidatorCommission): _82.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _82.MsgWithdrawValidatorCommissionProtoMsg): _82.MsgWithdrawValidatorCommission;
                toProto(message: _82.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _82.MsgWithdrawValidatorCommission): _82.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _82.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _82.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_82.MsgWithdrawValidatorCommissionResponse>): _82.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _82.MsgWithdrawValidatorCommissionResponseAmino): _82.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _82.MsgWithdrawValidatorCommissionResponse): _82.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _82.MsgWithdrawValidatorCommissionResponseAminoMsg): _82.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _82.MsgWithdrawValidatorCommissionResponse): _82.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _82.MsgWithdrawValidatorCommissionResponseProtoMsg): _82.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _82.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _82.MsgWithdrawValidatorCommissionResponse): _82.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _82.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MsgFundCommunityPool;
                fromPartial(object: Partial<_82.MsgFundCommunityPool>): _82.MsgFundCommunityPool;
                fromAmino(object: _82.MsgFundCommunityPoolAmino): _82.MsgFundCommunityPool;
                toAmino(message: _82.MsgFundCommunityPool): _82.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _82.MsgFundCommunityPoolAminoMsg): _82.MsgFundCommunityPool;
                toAminoMsg(message: _82.MsgFundCommunityPool): _82.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _82.MsgFundCommunityPoolProtoMsg): _82.MsgFundCommunityPool;
                toProto(message: _82.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _82.MsgFundCommunityPool): _82.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _82.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _82.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_82.MsgFundCommunityPoolResponse>): _82.MsgFundCommunityPoolResponse;
                fromAmino(_: _82.MsgFundCommunityPoolResponseAmino): _82.MsgFundCommunityPoolResponse;
                toAmino(_: _82.MsgFundCommunityPoolResponse): _82.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _82.MsgFundCommunityPoolResponseAminoMsg): _82.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _82.MsgFundCommunityPoolResponse): _82.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _82.MsgFundCommunityPoolResponseProtoMsg): _82.MsgFundCommunityPoolResponse;
                toProto(message: _82.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _82.MsgFundCommunityPoolResponse): _82.MsgFundCommunityPoolResponseProtoMsg;
            };
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
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _81.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_81.QueryValidatorOutstandingRewardsRequest>): _81.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _81.QueryValidatorOutstandingRewardsRequestAmino): _81.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _81.QueryValidatorOutstandingRewardsRequest): _81.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _81.QueryValidatorOutstandingRewardsRequestAminoMsg): _81.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _81.QueryValidatorOutstandingRewardsRequest): _81.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryValidatorOutstandingRewardsRequestProtoMsg): _81.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _81.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryValidatorOutstandingRewardsRequest): _81.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _81.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_81.QueryValidatorOutstandingRewardsResponse>): _81.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _81.QueryValidatorOutstandingRewardsResponseAmino): _81.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _81.QueryValidatorOutstandingRewardsResponse): _81.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _81.QueryValidatorOutstandingRewardsResponseAminoMsg): _81.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _81.QueryValidatorOutstandingRewardsResponse): _81.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryValidatorOutstandingRewardsResponseProtoMsg): _81.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _81.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryValidatorOutstandingRewardsResponse): _81.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _81.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_81.QueryValidatorCommissionRequest>): _81.QueryValidatorCommissionRequest;
                fromAmino(object: _81.QueryValidatorCommissionRequestAmino): _81.QueryValidatorCommissionRequest;
                toAmino(message: _81.QueryValidatorCommissionRequest): _81.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _81.QueryValidatorCommissionRequestAminoMsg): _81.QueryValidatorCommissionRequest;
                toAminoMsg(message: _81.QueryValidatorCommissionRequest): _81.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _81.QueryValidatorCommissionRequestProtoMsg): _81.QueryValidatorCommissionRequest;
                toProto(message: _81.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _81.QueryValidatorCommissionRequest): _81.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _81.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_81.QueryValidatorCommissionResponse>): _81.QueryValidatorCommissionResponse;
                fromAmino(object: _81.QueryValidatorCommissionResponseAmino): _81.QueryValidatorCommissionResponse;
                toAmino(message: _81.QueryValidatorCommissionResponse): _81.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _81.QueryValidatorCommissionResponseAminoMsg): _81.QueryValidatorCommissionResponse;
                toAminoMsg(message: _81.QueryValidatorCommissionResponse): _81.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _81.QueryValidatorCommissionResponseProtoMsg): _81.QueryValidatorCommissionResponse;
                toProto(message: _81.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _81.QueryValidatorCommissionResponse): _81.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _81.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_81.QueryValidatorSlashesRequest>): _81.QueryValidatorSlashesRequest;
                fromAmino(object: _81.QueryValidatorSlashesRequestAmino): _81.QueryValidatorSlashesRequest;
                toAmino(message: _81.QueryValidatorSlashesRequest): _81.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _81.QueryValidatorSlashesRequestAminoMsg): _81.QueryValidatorSlashesRequest;
                toAminoMsg(message: _81.QueryValidatorSlashesRequest): _81.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _81.QueryValidatorSlashesRequestProtoMsg): _81.QueryValidatorSlashesRequest;
                toProto(message: _81.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _81.QueryValidatorSlashesRequest): _81.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _81.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_81.QueryValidatorSlashesResponse>): _81.QueryValidatorSlashesResponse;
                fromAmino(object: _81.QueryValidatorSlashesResponseAmino): _81.QueryValidatorSlashesResponse;
                toAmino(message: _81.QueryValidatorSlashesResponse): _81.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _81.QueryValidatorSlashesResponseAminoMsg): _81.QueryValidatorSlashesResponse;
                toAminoMsg(message: _81.QueryValidatorSlashesResponse): _81.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _81.QueryValidatorSlashesResponseProtoMsg): _81.QueryValidatorSlashesResponse;
                toProto(message: _81.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _81.QueryValidatorSlashesResponse): _81.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _81.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_81.QueryDelegationRewardsRequest>): _81.QueryDelegationRewardsRequest;
                fromAmino(object: _81.QueryDelegationRewardsRequestAmino): _81.QueryDelegationRewardsRequest;
                toAmino(message: _81.QueryDelegationRewardsRequest): _81.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _81.QueryDelegationRewardsRequestAminoMsg): _81.QueryDelegationRewardsRequest;
                toAminoMsg(message: _81.QueryDelegationRewardsRequest): _81.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryDelegationRewardsRequestProtoMsg): _81.QueryDelegationRewardsRequest;
                toProto(message: _81.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryDelegationRewardsRequest): _81.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _81.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_81.QueryDelegationRewardsResponse>): _81.QueryDelegationRewardsResponse;
                fromAmino(object: _81.QueryDelegationRewardsResponseAmino): _81.QueryDelegationRewardsResponse;
                toAmino(message: _81.QueryDelegationRewardsResponse): _81.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _81.QueryDelegationRewardsResponseAminoMsg): _81.QueryDelegationRewardsResponse;
                toAminoMsg(message: _81.QueryDelegationRewardsResponse): _81.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryDelegationRewardsResponseProtoMsg): _81.QueryDelegationRewardsResponse;
                toProto(message: _81.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryDelegationRewardsResponse): _81.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _81.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_81.QueryDelegationTotalRewardsRequest>): _81.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _81.QueryDelegationTotalRewardsRequestAmino): _81.QueryDelegationTotalRewardsRequest;
                toAmino(message: _81.QueryDelegationTotalRewardsRequest): _81.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _81.QueryDelegationTotalRewardsRequestAminoMsg): _81.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _81.QueryDelegationTotalRewardsRequest): _81.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryDelegationTotalRewardsRequestProtoMsg): _81.QueryDelegationTotalRewardsRequest;
                toProto(message: _81.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryDelegationTotalRewardsRequest): _81.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _81.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_81.QueryDelegationTotalRewardsResponse>): _81.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _81.QueryDelegationTotalRewardsResponseAmino): _81.QueryDelegationTotalRewardsResponse;
                toAmino(message: _81.QueryDelegationTotalRewardsResponse): _81.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _81.QueryDelegationTotalRewardsResponseAminoMsg): _81.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _81.QueryDelegationTotalRewardsResponse): _81.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryDelegationTotalRewardsResponseProtoMsg): _81.QueryDelegationTotalRewardsResponse;
                toProto(message: _81.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryDelegationTotalRewardsResponse): _81.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _81.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_81.QueryDelegatorValidatorsRequest>): _81.QueryDelegatorValidatorsRequest;
                fromAmino(object: _81.QueryDelegatorValidatorsRequestAmino): _81.QueryDelegatorValidatorsRequest;
                toAmino(message: _81.QueryDelegatorValidatorsRequest): _81.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _81.QueryDelegatorValidatorsRequestAminoMsg): _81.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _81.QueryDelegatorValidatorsRequest): _81.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryDelegatorValidatorsRequestProtoMsg): _81.QueryDelegatorValidatorsRequest;
                toProto(message: _81.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryDelegatorValidatorsRequest): _81.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _81.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_81.QueryDelegatorValidatorsResponse>): _81.QueryDelegatorValidatorsResponse;
                fromAmino(object: _81.QueryDelegatorValidatorsResponseAmino): _81.QueryDelegatorValidatorsResponse;
                toAmino(message: _81.QueryDelegatorValidatorsResponse): _81.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _81.QueryDelegatorValidatorsResponseAminoMsg): _81.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _81.QueryDelegatorValidatorsResponse): _81.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryDelegatorValidatorsResponseProtoMsg): _81.QueryDelegatorValidatorsResponse;
                toProto(message: _81.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryDelegatorValidatorsResponse): _81.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _81.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_81.QueryDelegatorWithdrawAddressRequest>): _81.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _81.QueryDelegatorWithdrawAddressRequestAmino): _81.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _81.QueryDelegatorWithdrawAddressRequest): _81.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _81.QueryDelegatorWithdrawAddressRequestAminoMsg): _81.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _81.QueryDelegatorWithdrawAddressRequest): _81.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _81.QueryDelegatorWithdrawAddressRequestProtoMsg): _81.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _81.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _81.QueryDelegatorWithdrawAddressRequest): _81.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _81.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_81.QueryDelegatorWithdrawAddressResponse>): _81.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _81.QueryDelegatorWithdrawAddressResponseAmino): _81.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _81.QueryDelegatorWithdrawAddressResponse): _81.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _81.QueryDelegatorWithdrawAddressResponseAminoMsg): _81.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _81.QueryDelegatorWithdrawAddressResponse): _81.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _81.QueryDelegatorWithdrawAddressResponseProtoMsg): _81.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _81.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _81.QueryDelegatorWithdrawAddressResponse): _81.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _81.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_81.QueryCommunityPoolRequest>): _81.QueryCommunityPoolRequest;
                fromAmino(_: _81.QueryCommunityPoolRequestAmino): _81.QueryCommunityPoolRequest;
                toAmino(_: _81.QueryCommunityPoolRequest): _81.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _81.QueryCommunityPoolRequestAminoMsg): _81.QueryCommunityPoolRequest;
                toAminoMsg(message: _81.QueryCommunityPoolRequest): _81.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _81.QueryCommunityPoolRequestProtoMsg): _81.QueryCommunityPoolRequest;
                toProto(message: _81.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _81.QueryCommunityPoolRequest): _81.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _81.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_81.QueryCommunityPoolResponse>): _81.QueryCommunityPoolResponse;
                fromAmino(object: _81.QueryCommunityPoolResponseAmino): _81.QueryCommunityPoolResponse;
                toAmino(message: _81.QueryCommunityPoolResponse): _81.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _81.QueryCommunityPoolResponseAminoMsg): _81.QueryCommunityPoolResponse;
                toAminoMsg(message: _81.QueryCommunityPoolResponse): _81.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _81.QueryCommunityPoolResponseProtoMsg): _81.QueryCommunityPoolResponse;
                toProto(message: _81.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _81.QueryCommunityPoolResponse): _81.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _80.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_80.DelegatorWithdrawInfo>): _80.DelegatorWithdrawInfo;
                fromAmino(object: _80.DelegatorWithdrawInfoAmino): _80.DelegatorWithdrawInfo;
                toAmino(message: _80.DelegatorWithdrawInfo): _80.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _80.DelegatorWithdrawInfoAminoMsg): _80.DelegatorWithdrawInfo;
                toAminoMsg(message: _80.DelegatorWithdrawInfo): _80.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _80.DelegatorWithdrawInfoProtoMsg): _80.DelegatorWithdrawInfo;
                toProto(message: _80.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _80.DelegatorWithdrawInfo): _80.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _80.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_80.ValidatorOutstandingRewardsRecord>): _80.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _80.ValidatorOutstandingRewardsRecordAmino): _80.ValidatorOutstandingRewardsRecord;
                toAmino(message: _80.ValidatorOutstandingRewardsRecord): _80.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _80.ValidatorOutstandingRewardsRecordAminoMsg): _80.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _80.ValidatorOutstandingRewardsRecord): _80.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _80.ValidatorOutstandingRewardsRecordProtoMsg): _80.ValidatorOutstandingRewardsRecord;
                toProto(message: _80.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _80.ValidatorOutstandingRewardsRecord): _80.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _80.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_80.ValidatorAccumulatedCommissionRecord>): _80.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _80.ValidatorAccumulatedCommissionRecordAmino): _80.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _80.ValidatorAccumulatedCommissionRecord): _80.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _80.ValidatorAccumulatedCommissionRecordAminoMsg): _80.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _80.ValidatorAccumulatedCommissionRecord): _80.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _80.ValidatorAccumulatedCommissionRecordProtoMsg): _80.ValidatorAccumulatedCommissionRecord;
                toProto(message: _80.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _80.ValidatorAccumulatedCommissionRecord): _80.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _80.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_80.ValidatorHistoricalRewardsRecord>): _80.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _80.ValidatorHistoricalRewardsRecordAmino): _80.ValidatorHistoricalRewardsRecord;
                toAmino(message: _80.ValidatorHistoricalRewardsRecord): _80.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _80.ValidatorHistoricalRewardsRecordAminoMsg): _80.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _80.ValidatorHistoricalRewardsRecord): _80.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _80.ValidatorHistoricalRewardsRecordProtoMsg): _80.ValidatorHistoricalRewardsRecord;
                toProto(message: _80.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _80.ValidatorHistoricalRewardsRecord): _80.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _80.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_80.ValidatorCurrentRewardsRecord>): _80.ValidatorCurrentRewardsRecord;
                fromAmino(object: _80.ValidatorCurrentRewardsRecordAmino): _80.ValidatorCurrentRewardsRecord;
                toAmino(message: _80.ValidatorCurrentRewardsRecord): _80.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _80.ValidatorCurrentRewardsRecordAminoMsg): _80.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _80.ValidatorCurrentRewardsRecord): _80.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _80.ValidatorCurrentRewardsRecordProtoMsg): _80.ValidatorCurrentRewardsRecord;
                toProto(message: _80.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _80.ValidatorCurrentRewardsRecord): _80.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _80.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_80.DelegatorStartingInfoRecord>): _80.DelegatorStartingInfoRecord;
                fromAmino(object: _80.DelegatorStartingInfoRecordAmino): _80.DelegatorStartingInfoRecord;
                toAmino(message: _80.DelegatorStartingInfoRecord): _80.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _80.DelegatorStartingInfoRecordAminoMsg): _80.DelegatorStartingInfoRecord;
                toAminoMsg(message: _80.DelegatorStartingInfoRecord): _80.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _80.DelegatorStartingInfoRecordProtoMsg): _80.DelegatorStartingInfoRecord;
                toProto(message: _80.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _80.DelegatorStartingInfoRecord): _80.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _80.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_80.ValidatorSlashEventRecord>): _80.ValidatorSlashEventRecord;
                fromAmino(object: _80.ValidatorSlashEventRecordAmino): _80.ValidatorSlashEventRecord;
                toAmino(message: _80.ValidatorSlashEventRecord): _80.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _80.ValidatorSlashEventRecordAminoMsg): _80.ValidatorSlashEventRecord;
                toAminoMsg(message: _80.ValidatorSlashEventRecord): _80.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _80.ValidatorSlashEventRecordProtoMsg): _80.ValidatorSlashEventRecord;
                toProto(message: _80.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _80.ValidatorSlashEventRecord): _80.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _79.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.Params;
                fromPartial(object: Partial<_79.Params>): _79.Params;
                fromAmino(object: _79.ParamsAmino): _79.Params;
                toAmino(message: _79.Params): _79.ParamsAmino;
                fromAminoMsg(object: _79.ParamsAminoMsg): _79.Params;
                toAminoMsg(message: _79.Params): _79.ParamsAminoMsg;
                fromProtoMsg(message: _79.ParamsProtoMsg): _79.Params;
                toProto(message: _79.Params): Uint8Array;
                toProtoMsg(message: _79.Params): _79.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _79.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_79.ValidatorHistoricalRewards>): _79.ValidatorHistoricalRewards;
                fromAmino(object: _79.ValidatorHistoricalRewardsAmino): _79.ValidatorHistoricalRewards;
                toAmino(message: _79.ValidatorHistoricalRewards): _79.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _79.ValidatorHistoricalRewardsAminoMsg): _79.ValidatorHistoricalRewards;
                toAminoMsg(message: _79.ValidatorHistoricalRewards): _79.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _79.ValidatorHistoricalRewardsProtoMsg): _79.ValidatorHistoricalRewards;
                toProto(message: _79.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _79.ValidatorHistoricalRewards): _79.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _79.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.ValidatorCurrentRewards;
                fromPartial(object: Partial<_79.ValidatorCurrentRewards>): _79.ValidatorCurrentRewards;
                fromAmino(object: _79.ValidatorCurrentRewardsAmino): _79.ValidatorCurrentRewards;
                toAmino(message: _79.ValidatorCurrentRewards): _79.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _79.ValidatorCurrentRewardsAminoMsg): _79.ValidatorCurrentRewards;
                toAminoMsg(message: _79.ValidatorCurrentRewards): _79.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _79.ValidatorCurrentRewardsProtoMsg): _79.ValidatorCurrentRewards;
                toProto(message: _79.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _79.ValidatorCurrentRewards): _79.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _79.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_79.ValidatorAccumulatedCommission>): _79.ValidatorAccumulatedCommission;
                fromAmino(object: _79.ValidatorAccumulatedCommissionAmino): _79.ValidatorAccumulatedCommission;
                toAmino(message: _79.ValidatorAccumulatedCommission): _79.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _79.ValidatorAccumulatedCommissionAminoMsg): _79.ValidatorAccumulatedCommission;
                toAminoMsg(message: _79.ValidatorAccumulatedCommission): _79.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _79.ValidatorAccumulatedCommissionProtoMsg): _79.ValidatorAccumulatedCommission;
                toProto(message: _79.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _79.ValidatorAccumulatedCommission): _79.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _79.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_79.ValidatorOutstandingRewards>): _79.ValidatorOutstandingRewards;
                fromAmino(object: _79.ValidatorOutstandingRewardsAmino): _79.ValidatorOutstandingRewards;
                toAmino(message: _79.ValidatorOutstandingRewards): _79.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _79.ValidatorOutstandingRewardsAminoMsg): _79.ValidatorOutstandingRewards;
                toAminoMsg(message: _79.ValidatorOutstandingRewards): _79.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _79.ValidatorOutstandingRewardsProtoMsg): _79.ValidatorOutstandingRewards;
                toProto(message: _79.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _79.ValidatorOutstandingRewards): _79.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _79.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.ValidatorSlashEvent;
                fromPartial(object: Partial<_79.ValidatorSlashEvent>): _79.ValidatorSlashEvent;
                fromAmino(object: _79.ValidatorSlashEventAmino): _79.ValidatorSlashEvent;
                toAmino(message: _79.ValidatorSlashEvent): _79.ValidatorSlashEventAmino;
                fromAminoMsg(object: _79.ValidatorSlashEventAminoMsg): _79.ValidatorSlashEvent;
                toAminoMsg(message: _79.ValidatorSlashEvent): _79.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _79.ValidatorSlashEventProtoMsg): _79.ValidatorSlashEvent;
                toProto(message: _79.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _79.ValidatorSlashEvent): _79.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _79.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.ValidatorSlashEvents;
                fromPartial(object: Partial<_79.ValidatorSlashEvents>): _79.ValidatorSlashEvents;
                fromAmino(object: _79.ValidatorSlashEventsAmino): _79.ValidatorSlashEvents;
                toAmino(message: _79.ValidatorSlashEvents): _79.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _79.ValidatorSlashEventsAminoMsg): _79.ValidatorSlashEvents;
                toAminoMsg(message: _79.ValidatorSlashEvents): _79.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _79.ValidatorSlashEventsProtoMsg): _79.ValidatorSlashEvents;
                toProto(message: _79.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _79.ValidatorSlashEvents): _79.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _79.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.FeePool;
                fromPartial(object: Partial<_79.FeePool>): _79.FeePool;
                fromAmino(object: _79.FeePoolAmino): _79.FeePool;
                toAmino(message: _79.FeePool): _79.FeePoolAmino;
                fromAminoMsg(object: _79.FeePoolAminoMsg): _79.FeePool;
                toAminoMsg(message: _79.FeePool): _79.FeePoolAminoMsg;
                fromProtoMsg(message: _79.FeePoolProtoMsg): _79.FeePool;
                toProto(message: _79.FeePool): Uint8Array;
                toProtoMsg(message: _79.FeePool): _79.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _79.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_79.CommunityPoolSpendProposal>): _79.CommunityPoolSpendProposal;
                fromAmino(object: _79.CommunityPoolSpendProposalAmino): _79.CommunityPoolSpendProposal;
                toAmino(message: _79.CommunityPoolSpendProposal): _79.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _79.CommunityPoolSpendProposalAminoMsg): _79.CommunityPoolSpendProposal;
                toAminoMsg(message: _79.CommunityPoolSpendProposal): _79.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _79.CommunityPoolSpendProposalProtoMsg): _79.CommunityPoolSpendProposal;
                toProto(message: _79.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _79.CommunityPoolSpendProposal): _79.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _79.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.DelegatorStartingInfo;
                fromPartial(object: Partial<_79.DelegatorStartingInfo>): _79.DelegatorStartingInfo;
                fromAmino(object: _79.DelegatorStartingInfoAmino): _79.DelegatorStartingInfo;
                toAmino(message: _79.DelegatorStartingInfo): _79.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _79.DelegatorStartingInfoAminoMsg): _79.DelegatorStartingInfo;
                toAminoMsg(message: _79.DelegatorStartingInfo): _79.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _79.DelegatorStartingInfoProtoMsg): _79.DelegatorStartingInfo;
                toProto(message: _79.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _79.DelegatorStartingInfo): _79.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _79.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.DelegationDelegatorReward;
                fromPartial(object: Partial<_79.DelegationDelegatorReward>): _79.DelegationDelegatorReward;
                fromAmino(object: _79.DelegationDelegatorRewardAmino): _79.DelegationDelegatorReward;
                toAmino(message: _79.DelegationDelegatorReward): _79.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _79.DelegationDelegatorRewardAminoMsg): _79.DelegationDelegatorReward;
                toAminoMsg(message: _79.DelegationDelegatorReward): _79.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _79.DelegationDelegatorRewardProtoMsg): _79.DelegationDelegatorReward;
                toProto(message: _79.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _79.DelegationDelegatorReward): _79.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _79.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_79.CommunityPoolSpendProposalWithDeposit>): _79.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _79.CommunityPoolSpendProposalWithDepositAmino): _79.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _79.CommunityPoolSpendProposalWithDeposit): _79.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _79.CommunityPoolSpendProposalWithDepositAminoMsg): _79.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _79.CommunityPoolSpendProposalWithDeposit): _79.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _79.CommunityPoolSpendProposalWithDepositProtoMsg): _79.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _79.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _79.CommunityPoolSpendProposalWithDeposit): _79.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _193.MsgClientImpl;
            QueryClientImpl: typeof _180.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _85.QueryEvidenceRequest): Promise<_85.QueryEvidenceResponse>;
                allEvidence(request?: _85.QueryAllEvidenceRequest): Promise<_85.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _165.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _86.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _86.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _86.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _86.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _86.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _86.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _86.MsgSubmitEvidence) => _86.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _86.MsgSubmitEvidenceAmino) => _86.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _86.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgSubmitEvidence;
                fromPartial(object: Partial<_86.MsgSubmitEvidence>): _86.MsgSubmitEvidence;
                fromAmino(object: _86.MsgSubmitEvidenceAmino): _86.MsgSubmitEvidence;
                toAmino(message: _86.MsgSubmitEvidence): _86.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _86.MsgSubmitEvidenceAminoMsg): _86.MsgSubmitEvidence;
                toAminoMsg(message: _86.MsgSubmitEvidence): _86.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _86.MsgSubmitEvidenceProtoMsg): _86.MsgSubmitEvidence;
                toProto(message: _86.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _86.MsgSubmitEvidence): _86.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _86.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_86.MsgSubmitEvidenceResponse>): _86.MsgSubmitEvidenceResponse;
                fromAmino(object: _86.MsgSubmitEvidenceResponseAmino): _86.MsgSubmitEvidenceResponse;
                toAmino(message: _86.MsgSubmitEvidenceResponse): _86.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _86.MsgSubmitEvidenceResponseAminoMsg): _86.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _86.MsgSubmitEvidenceResponse): _86.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _86.MsgSubmitEvidenceResponseProtoMsg): _86.MsgSubmitEvidenceResponse;
                toProto(message: _86.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _86.MsgSubmitEvidenceResponse): _86.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _85.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryEvidenceRequest;
                fromPartial(object: Partial<_85.QueryEvidenceRequest>): _85.QueryEvidenceRequest;
                fromAmino(object: _85.QueryEvidenceRequestAmino): _85.QueryEvidenceRequest;
                toAmino(message: _85.QueryEvidenceRequest): _85.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _85.QueryEvidenceRequestAminoMsg): _85.QueryEvidenceRequest;
                toAminoMsg(message: _85.QueryEvidenceRequest): _85.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _85.QueryEvidenceRequestProtoMsg): _85.QueryEvidenceRequest;
                toProto(message: _85.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _85.QueryEvidenceRequest): _85.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _85.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryEvidenceResponse;
                fromPartial(object: Partial<_85.QueryEvidenceResponse>): _85.QueryEvidenceResponse;
                fromAmino(object: _85.QueryEvidenceResponseAmino): _85.QueryEvidenceResponse;
                toAmino(message: _85.QueryEvidenceResponse): _85.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _85.QueryEvidenceResponseAminoMsg): _85.QueryEvidenceResponse;
                toAminoMsg(message: _85.QueryEvidenceResponse): _85.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _85.QueryEvidenceResponseProtoMsg): _85.QueryEvidenceResponse;
                toProto(message: _85.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _85.QueryEvidenceResponse): _85.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _85.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_85.QueryAllEvidenceRequest>): _85.QueryAllEvidenceRequest;
                fromAmino(object: _85.QueryAllEvidenceRequestAmino): _85.QueryAllEvidenceRequest;
                toAmino(message: _85.QueryAllEvidenceRequest): _85.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _85.QueryAllEvidenceRequestAminoMsg): _85.QueryAllEvidenceRequest;
                toAminoMsg(message: _85.QueryAllEvidenceRequest): _85.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _85.QueryAllEvidenceRequestProtoMsg): _85.QueryAllEvidenceRequest;
                toProto(message: _85.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _85.QueryAllEvidenceRequest): _85.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _85.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_85.QueryAllEvidenceResponse>): _85.QueryAllEvidenceResponse;
                fromAmino(object: _85.QueryAllEvidenceResponseAmino): _85.QueryAllEvidenceResponse;
                toAmino(message: _85.QueryAllEvidenceResponse): _85.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _85.QueryAllEvidenceResponseAminoMsg): _85.QueryAllEvidenceResponse;
                toAminoMsg(message: _85.QueryAllEvidenceResponse): _85.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _85.QueryAllEvidenceResponseProtoMsg): _85.QueryAllEvidenceResponse;
                toProto(message: _85.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _85.QueryAllEvidenceResponse): _85.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _83.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.Equivocation;
                fromPartial(object: Partial<_83.Equivocation>): _83.Equivocation;
                fromAmino(object: _83.EquivocationAmino): _83.Equivocation;
                toAmino(message: _83.Equivocation): _83.EquivocationAmino;
                fromAminoMsg(object: _83.EquivocationAminoMsg): _83.Equivocation;
                toAminoMsg(message: _83.Equivocation): _83.EquivocationAminoMsg;
                fromProtoMsg(message: _83.EquivocationProtoMsg): _83.Equivocation;
                toProto(message: _83.Equivocation): Uint8Array;
                toProtoMsg(message: _83.Equivocation): _83.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _194.MsgClientImpl;
            QueryClientImpl: typeof _181.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _89.QueryAllowanceRequest): Promise<_89.QueryAllowanceResponse>;
                allowances(request: _89.QueryAllowancesRequest): Promise<_89.QueryAllowancesResponse>;
                allowancesByGranter(request: _89.QueryAllowancesByGranterRequest): Promise<_89.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _166.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _90.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _90.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _90.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _90.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _90.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _90.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _90.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _90.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _90.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _90.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _90.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _90.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _90.MsgGrantAllowance) => _90.MsgGrantAllowanceAmino;
                    fromAmino: (object: _90.MsgGrantAllowanceAmino) => _90.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _90.MsgRevokeAllowance) => _90.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _90.MsgRevokeAllowanceAmino) => _90.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _90.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgGrantAllowance;
                fromPartial(object: Partial<_90.MsgGrantAllowance>): _90.MsgGrantAllowance;
                fromAmino(object: _90.MsgGrantAllowanceAmino): _90.MsgGrantAllowance;
                toAmino(message: _90.MsgGrantAllowance): _90.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _90.MsgGrantAllowanceAminoMsg): _90.MsgGrantAllowance;
                toAminoMsg(message: _90.MsgGrantAllowance): _90.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _90.MsgGrantAllowanceProtoMsg): _90.MsgGrantAllowance;
                toProto(message: _90.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _90.MsgGrantAllowance): _90.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _90.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_90.MsgGrantAllowanceResponse>): _90.MsgGrantAllowanceResponse;
                fromAmino(_: _90.MsgGrantAllowanceResponseAmino): _90.MsgGrantAllowanceResponse;
                toAmino(_: _90.MsgGrantAllowanceResponse): _90.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _90.MsgGrantAllowanceResponseAminoMsg): _90.MsgGrantAllowanceResponse;
                toAminoMsg(message: _90.MsgGrantAllowanceResponse): _90.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _90.MsgGrantAllowanceResponseProtoMsg): _90.MsgGrantAllowanceResponse;
                toProto(message: _90.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _90.MsgGrantAllowanceResponse): _90.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _90.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgRevokeAllowance;
                fromPartial(object: Partial<_90.MsgRevokeAllowance>): _90.MsgRevokeAllowance;
                fromAmino(object: _90.MsgRevokeAllowanceAmino): _90.MsgRevokeAllowance;
                toAmino(message: _90.MsgRevokeAllowance): _90.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _90.MsgRevokeAllowanceAminoMsg): _90.MsgRevokeAllowance;
                toAminoMsg(message: _90.MsgRevokeAllowance): _90.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _90.MsgRevokeAllowanceProtoMsg): _90.MsgRevokeAllowance;
                toProto(message: _90.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _90.MsgRevokeAllowance): _90.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _90.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_90.MsgRevokeAllowanceResponse>): _90.MsgRevokeAllowanceResponse;
                fromAmino(_: _90.MsgRevokeAllowanceResponseAmino): _90.MsgRevokeAllowanceResponse;
                toAmino(_: _90.MsgRevokeAllowanceResponse): _90.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _90.MsgRevokeAllowanceResponseAminoMsg): _90.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _90.MsgRevokeAllowanceResponse): _90.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _90.MsgRevokeAllowanceResponseProtoMsg): _90.MsgRevokeAllowanceResponse;
                toProto(message: _90.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _90.MsgRevokeAllowanceResponse): _90.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _87.BasicAllowance | _87.PeriodicAllowance | _87.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _89.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryAllowanceRequest;
                fromPartial(object: Partial<_89.QueryAllowanceRequest>): _89.QueryAllowanceRequest;
                fromAmino(object: _89.QueryAllowanceRequestAmino): _89.QueryAllowanceRequest;
                toAmino(message: _89.QueryAllowanceRequest): _89.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _89.QueryAllowanceRequestAminoMsg): _89.QueryAllowanceRequest;
                toAminoMsg(message: _89.QueryAllowanceRequest): _89.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _89.QueryAllowanceRequestProtoMsg): _89.QueryAllowanceRequest;
                toProto(message: _89.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _89.QueryAllowanceRequest): _89.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _89.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryAllowanceResponse;
                fromPartial(object: Partial<_89.QueryAllowanceResponse>): _89.QueryAllowanceResponse;
                fromAmino(object: _89.QueryAllowanceResponseAmino): _89.QueryAllowanceResponse;
                toAmino(message: _89.QueryAllowanceResponse): _89.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _89.QueryAllowanceResponseAminoMsg): _89.QueryAllowanceResponse;
                toAminoMsg(message: _89.QueryAllowanceResponse): _89.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _89.QueryAllowanceResponseProtoMsg): _89.QueryAllowanceResponse;
                toProto(message: _89.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _89.QueryAllowanceResponse): _89.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _89.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryAllowancesRequest;
                fromPartial(object: Partial<_89.QueryAllowancesRequest>): _89.QueryAllowancesRequest;
                fromAmino(object: _89.QueryAllowancesRequestAmino): _89.QueryAllowancesRequest;
                toAmino(message: _89.QueryAllowancesRequest): _89.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _89.QueryAllowancesRequestAminoMsg): _89.QueryAllowancesRequest;
                toAminoMsg(message: _89.QueryAllowancesRequest): _89.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _89.QueryAllowancesRequestProtoMsg): _89.QueryAllowancesRequest;
                toProto(message: _89.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _89.QueryAllowancesRequest): _89.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _89.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryAllowancesResponse;
                fromPartial(object: Partial<_89.QueryAllowancesResponse>): _89.QueryAllowancesResponse;
                fromAmino(object: _89.QueryAllowancesResponseAmino): _89.QueryAllowancesResponse;
                toAmino(message: _89.QueryAllowancesResponse): _89.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _89.QueryAllowancesResponseAminoMsg): _89.QueryAllowancesResponse;
                toAminoMsg(message: _89.QueryAllowancesResponse): _89.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _89.QueryAllowancesResponseProtoMsg): _89.QueryAllowancesResponse;
                toProto(message: _89.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _89.QueryAllowancesResponse): _89.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _89.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_89.QueryAllowancesByGranterRequest>): _89.QueryAllowancesByGranterRequest;
                fromAmino(object: _89.QueryAllowancesByGranterRequestAmino): _89.QueryAllowancesByGranterRequest;
                toAmino(message: _89.QueryAllowancesByGranterRequest): _89.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _89.QueryAllowancesByGranterRequestAminoMsg): _89.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _89.QueryAllowancesByGranterRequest): _89.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _89.QueryAllowancesByGranterRequestProtoMsg): _89.QueryAllowancesByGranterRequest;
                toProto(message: _89.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _89.QueryAllowancesByGranterRequest): _89.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _89.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_89.QueryAllowancesByGranterResponse>): _89.QueryAllowancesByGranterResponse;
                fromAmino(object: _89.QueryAllowancesByGranterResponseAmino): _89.QueryAllowancesByGranterResponse;
                toAmino(message: _89.QueryAllowancesByGranterResponse): _89.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _89.QueryAllowancesByGranterResponseAminoMsg): _89.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _89.QueryAllowancesByGranterResponse): _89.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _89.QueryAllowancesByGranterResponseProtoMsg): _89.QueryAllowancesByGranterResponse;
                toProto(message: _89.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _89.QueryAllowancesByGranterResponse): _89.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _88.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.GenesisState;
                fromPartial(object: Partial<_88.GenesisState>): _88.GenesisState;
                fromAmino(object: _88.GenesisStateAmino): _88.GenesisState;
                toAmino(message: _88.GenesisState): _88.GenesisStateAmino;
                fromAminoMsg(object: _88.GenesisStateAminoMsg): _88.GenesisState;
                toAminoMsg(message: _88.GenesisState): _88.GenesisStateAminoMsg;
                fromProtoMsg(message: _88.GenesisStateProtoMsg): _88.GenesisState;
                toProto(message: _88.GenesisState): Uint8Array;
                toProtoMsg(message: _88.GenesisState): _88.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _87.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.BasicAllowance;
                fromPartial(object: Partial<_87.BasicAllowance>): _87.BasicAllowance;
                fromAmino(object: _87.BasicAllowanceAmino): _87.BasicAllowance;
                toAmino(message: _87.BasicAllowance): _87.BasicAllowanceAmino;
                fromAminoMsg(object: _87.BasicAllowanceAminoMsg): _87.BasicAllowance;
                toAminoMsg(message: _87.BasicAllowance): _87.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _87.BasicAllowanceProtoMsg): _87.BasicAllowance;
                toProto(message: _87.BasicAllowance): Uint8Array;
                toProtoMsg(message: _87.BasicAllowance): _87.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _87.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.PeriodicAllowance;
                fromPartial(object: Partial<_87.PeriodicAllowance>): _87.PeriodicAllowance;
                fromAmino(object: _87.PeriodicAllowanceAmino): _87.PeriodicAllowance;
                toAmino(message: _87.PeriodicAllowance): _87.PeriodicAllowanceAmino;
                fromAminoMsg(object: _87.PeriodicAllowanceAminoMsg): _87.PeriodicAllowance;
                toAminoMsg(message: _87.PeriodicAllowance): _87.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _87.PeriodicAllowanceProtoMsg): _87.PeriodicAllowance;
                toProto(message: _87.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _87.PeriodicAllowance): _87.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _87.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.AllowedMsgAllowance;
                fromPartial(object: Partial<_87.AllowedMsgAllowance>): _87.AllowedMsgAllowance;
                fromAmino(object: _87.AllowedMsgAllowanceAmino): _87.AllowedMsgAllowance;
                toAmino(message: _87.AllowedMsgAllowance): _87.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _87.AllowedMsgAllowanceAminoMsg): _87.AllowedMsgAllowance;
                toAminoMsg(message: _87.AllowedMsgAllowance): _87.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _87.AllowedMsgAllowanceProtoMsg): _87.AllowedMsgAllowance;
                toProto(message: _87.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _87.AllowedMsgAllowance): _87.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _87.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.Grant;
                fromPartial(object: Partial<_87.Grant>): _87.Grant;
                fromAmino(object: _87.GrantAmino): _87.Grant;
                toAmino(message: _87.Grant): _87.GrantAmino;
                fromAminoMsg(object: _87.GrantAminoMsg): _87.Grant;
                toAminoMsg(message: _87.Grant): _87.GrantAminoMsg;
                fromProtoMsg(message: _87.GrantProtoMsg): _87.Grant;
                toProto(message: _87.Grant): Uint8Array;
                toProtoMsg(message: _87.Grant): _87.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _195.MsgClientImpl;
            QueryClientImpl: typeof _182.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _94.QueryProposalRequest): Promise<_94.QueryProposalResponse>;
                proposals(request: _94.QueryProposalsRequest): Promise<_94.QueryProposalsResponse>;
                vote(request: _94.QueryVoteRequest): Promise<_94.QueryVoteResponse>;
                votes(request: _94.QueryVotesRequest): Promise<_94.QueryVotesResponse>;
                params(request: _94.QueryParamsRequest): Promise<_94.QueryParamsResponse>;
                deposit(request: _94.QueryDepositRequest): Promise<_94.QueryDepositResponse>;
                deposits(request: _94.QueryDepositsRequest): Promise<_94.QueryDepositsResponse>;
                tallyResult(request: _94.QueryTallyResultRequest): Promise<_94.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _167.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _95.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _95.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _95.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _95.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _95.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _95.MsgSubmitProposal;
                    };
                    vote(value: _95.MsgVote): {
                        typeUrl: string;
                        value: _95.MsgVote;
                    };
                    voteWeighted(value: _95.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _95.MsgVoteWeighted;
                    };
                    deposit(value: _95.MsgDeposit): {
                        typeUrl: string;
                        value: _95.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _95.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _95.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _95.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _95.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _95.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _95.MsgSubmitProposal;
                    };
                    vote(value: _95.MsgVote): {
                        typeUrl: string;
                        value: _95.MsgVote;
                    };
                    voteWeighted(value: _95.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _95.MsgVoteWeighted;
                    };
                    deposit(value: _95.MsgDeposit): {
                        typeUrl: string;
                        value: _95.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _95.MsgSubmitProposal) => _95.MsgSubmitProposalAmino;
                    fromAmino: (object: _95.MsgSubmitProposalAmino) => _95.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _95.MsgVote) => _95.MsgVoteAmino;
                    fromAmino: (object: _95.MsgVoteAmino) => _95.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _95.MsgVoteWeighted) => _95.MsgVoteWeightedAmino;
                    fromAmino: (object: _95.MsgVoteWeightedAmino) => _95.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _95.MsgDeposit) => _95.MsgDepositAmino;
                    fromAmino: (object: _95.MsgDepositAmino) => _95.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _95.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.MsgSubmitProposal;
                fromPartial(object: Partial<_95.MsgSubmitProposal>): _95.MsgSubmitProposal;
                fromAmino(object: _95.MsgSubmitProposalAmino): _95.MsgSubmitProposal;
                toAmino(message: _95.MsgSubmitProposal): _95.MsgSubmitProposalAmino;
                fromAminoMsg(object: _95.MsgSubmitProposalAminoMsg): _95.MsgSubmitProposal;
                toAminoMsg(message: _95.MsgSubmitProposal): _95.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _95.MsgSubmitProposalProtoMsg): _95.MsgSubmitProposal;
                toProto(message: _95.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _95.MsgSubmitProposal): _95.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _95.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_95.MsgSubmitProposalResponse>): _95.MsgSubmitProposalResponse;
                fromAmino(object: _95.MsgSubmitProposalResponseAmino): _95.MsgSubmitProposalResponse;
                toAmino(message: _95.MsgSubmitProposalResponse): _95.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _95.MsgSubmitProposalResponseAminoMsg): _95.MsgSubmitProposalResponse;
                toAminoMsg(message: _95.MsgSubmitProposalResponse): _95.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _95.MsgSubmitProposalResponseProtoMsg): _95.MsgSubmitProposalResponse;
                toProto(message: _95.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _95.MsgSubmitProposalResponse): _95.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _95.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.MsgVote;
                fromPartial(object: Partial<_95.MsgVote>): _95.MsgVote;
                fromAmino(object: _95.MsgVoteAmino): _95.MsgVote;
                toAmino(message: _95.MsgVote): _95.MsgVoteAmino;
                fromAminoMsg(object: _95.MsgVoteAminoMsg): _95.MsgVote;
                toAminoMsg(message: _95.MsgVote): _95.MsgVoteAminoMsg;
                fromProtoMsg(message: _95.MsgVoteProtoMsg): _95.MsgVote;
                toProto(message: _95.MsgVote): Uint8Array;
                toProtoMsg(message: _95.MsgVote): _95.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _95.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _95.MsgVoteResponse;
                fromPartial(_: Partial<_95.MsgVoteResponse>): _95.MsgVoteResponse;
                fromAmino(_: _95.MsgVoteResponseAmino): _95.MsgVoteResponse;
                toAmino(_: _95.MsgVoteResponse): _95.MsgVoteResponseAmino;
                fromAminoMsg(object: _95.MsgVoteResponseAminoMsg): _95.MsgVoteResponse;
                toAminoMsg(message: _95.MsgVoteResponse): _95.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _95.MsgVoteResponseProtoMsg): _95.MsgVoteResponse;
                toProto(message: _95.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _95.MsgVoteResponse): _95.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _95.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.MsgVoteWeighted;
                fromPartial(object: Partial<_95.MsgVoteWeighted>): _95.MsgVoteWeighted;
                fromAmino(object: _95.MsgVoteWeightedAmino): _95.MsgVoteWeighted;
                toAmino(message: _95.MsgVoteWeighted): _95.MsgVoteWeightedAmino;
                fromAminoMsg(object: _95.MsgVoteWeightedAminoMsg): _95.MsgVoteWeighted;
                toAminoMsg(message: _95.MsgVoteWeighted): _95.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _95.MsgVoteWeightedProtoMsg): _95.MsgVoteWeighted;
                toProto(message: _95.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _95.MsgVoteWeighted): _95.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _95.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _95.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_95.MsgVoteWeightedResponse>): _95.MsgVoteWeightedResponse;
                fromAmino(_: _95.MsgVoteWeightedResponseAmino): _95.MsgVoteWeightedResponse;
                toAmino(_: _95.MsgVoteWeightedResponse): _95.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _95.MsgVoteWeightedResponseAminoMsg): _95.MsgVoteWeightedResponse;
                toAminoMsg(message: _95.MsgVoteWeightedResponse): _95.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _95.MsgVoteWeightedResponseProtoMsg): _95.MsgVoteWeightedResponse;
                toProto(message: _95.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _95.MsgVoteWeightedResponse): _95.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _95.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.MsgDeposit;
                fromPartial(object: Partial<_95.MsgDeposit>): _95.MsgDeposit;
                fromAmino(object: _95.MsgDepositAmino): _95.MsgDeposit;
                toAmino(message: _95.MsgDeposit): _95.MsgDepositAmino;
                fromAminoMsg(object: _95.MsgDepositAminoMsg): _95.MsgDeposit;
                toAminoMsg(message: _95.MsgDeposit): _95.MsgDepositAminoMsg;
                fromProtoMsg(message: _95.MsgDepositProtoMsg): _95.MsgDeposit;
                toProto(message: _95.MsgDeposit): Uint8Array;
                toProtoMsg(message: _95.MsgDeposit): _95.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _95.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _95.MsgDepositResponse;
                fromPartial(_: Partial<_95.MsgDepositResponse>): _95.MsgDepositResponse;
                fromAmino(_: _95.MsgDepositResponseAmino): _95.MsgDepositResponse;
                toAmino(_: _95.MsgDepositResponse): _95.MsgDepositResponseAmino;
                fromAminoMsg(object: _95.MsgDepositResponseAminoMsg): _95.MsgDepositResponse;
                toAminoMsg(message: _95.MsgDepositResponse): _95.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _95.MsgDepositResponseProtoMsg): _95.MsgDepositResponse;
                toProto(message: _95.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _95.MsgDepositResponse): _95.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _93.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _94.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryProposalRequest;
                fromPartial(object: Partial<_94.QueryProposalRequest>): _94.QueryProposalRequest;
                fromAmino(object: _94.QueryProposalRequestAmino): _94.QueryProposalRequest;
                toAmino(message: _94.QueryProposalRequest): _94.QueryProposalRequestAmino;
                fromAminoMsg(object: _94.QueryProposalRequestAminoMsg): _94.QueryProposalRequest;
                toAminoMsg(message: _94.QueryProposalRequest): _94.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _94.QueryProposalRequestProtoMsg): _94.QueryProposalRequest;
                toProto(message: _94.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _94.QueryProposalRequest): _94.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _94.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryProposalResponse;
                fromPartial(object: Partial<_94.QueryProposalResponse>): _94.QueryProposalResponse;
                fromAmino(object: _94.QueryProposalResponseAmino): _94.QueryProposalResponse;
                toAmino(message: _94.QueryProposalResponse): _94.QueryProposalResponseAmino;
                fromAminoMsg(object: _94.QueryProposalResponseAminoMsg): _94.QueryProposalResponse;
                toAminoMsg(message: _94.QueryProposalResponse): _94.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _94.QueryProposalResponseProtoMsg): _94.QueryProposalResponse;
                toProto(message: _94.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _94.QueryProposalResponse): _94.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _94.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryProposalsRequest;
                fromPartial(object: Partial<_94.QueryProposalsRequest>): _94.QueryProposalsRequest;
                fromAmino(object: _94.QueryProposalsRequestAmino): _94.QueryProposalsRequest;
                toAmino(message: _94.QueryProposalsRequest): _94.QueryProposalsRequestAmino;
                fromAminoMsg(object: _94.QueryProposalsRequestAminoMsg): _94.QueryProposalsRequest;
                toAminoMsg(message: _94.QueryProposalsRequest): _94.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _94.QueryProposalsRequestProtoMsg): _94.QueryProposalsRequest;
                toProto(message: _94.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _94.QueryProposalsRequest): _94.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _94.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryProposalsResponse;
                fromPartial(object: Partial<_94.QueryProposalsResponse>): _94.QueryProposalsResponse;
                fromAmino(object: _94.QueryProposalsResponseAmino): _94.QueryProposalsResponse;
                toAmino(message: _94.QueryProposalsResponse): _94.QueryProposalsResponseAmino;
                fromAminoMsg(object: _94.QueryProposalsResponseAminoMsg): _94.QueryProposalsResponse;
                toAminoMsg(message: _94.QueryProposalsResponse): _94.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _94.QueryProposalsResponseProtoMsg): _94.QueryProposalsResponse;
                toProto(message: _94.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _94.QueryProposalsResponse): _94.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _94.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryVoteRequest;
                fromPartial(object: Partial<_94.QueryVoteRequest>): _94.QueryVoteRequest;
                fromAmino(object: _94.QueryVoteRequestAmino): _94.QueryVoteRequest;
                toAmino(message: _94.QueryVoteRequest): _94.QueryVoteRequestAmino;
                fromAminoMsg(object: _94.QueryVoteRequestAminoMsg): _94.QueryVoteRequest;
                toAminoMsg(message: _94.QueryVoteRequest): _94.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _94.QueryVoteRequestProtoMsg): _94.QueryVoteRequest;
                toProto(message: _94.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _94.QueryVoteRequest): _94.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _94.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryVoteResponse;
                fromPartial(object: Partial<_94.QueryVoteResponse>): _94.QueryVoteResponse;
                fromAmino(object: _94.QueryVoteResponseAmino): _94.QueryVoteResponse;
                toAmino(message: _94.QueryVoteResponse): _94.QueryVoteResponseAmino;
                fromAminoMsg(object: _94.QueryVoteResponseAminoMsg): _94.QueryVoteResponse;
                toAminoMsg(message: _94.QueryVoteResponse): _94.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _94.QueryVoteResponseProtoMsg): _94.QueryVoteResponse;
                toProto(message: _94.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _94.QueryVoteResponse): _94.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _94.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryVotesRequest;
                fromPartial(object: Partial<_94.QueryVotesRequest>): _94.QueryVotesRequest;
                fromAmino(object: _94.QueryVotesRequestAmino): _94.QueryVotesRequest;
                toAmino(message: _94.QueryVotesRequest): _94.QueryVotesRequestAmino;
                fromAminoMsg(object: _94.QueryVotesRequestAminoMsg): _94.QueryVotesRequest;
                toAminoMsg(message: _94.QueryVotesRequest): _94.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _94.QueryVotesRequestProtoMsg): _94.QueryVotesRequest;
                toProto(message: _94.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _94.QueryVotesRequest): _94.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _94.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryVotesResponse;
                fromPartial(object: Partial<_94.QueryVotesResponse>): _94.QueryVotesResponse;
                fromAmino(object: _94.QueryVotesResponseAmino): _94.QueryVotesResponse;
                toAmino(message: _94.QueryVotesResponse): _94.QueryVotesResponseAmino;
                fromAminoMsg(object: _94.QueryVotesResponseAminoMsg): _94.QueryVotesResponse;
                toAminoMsg(message: _94.QueryVotesResponse): _94.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _94.QueryVotesResponseProtoMsg): _94.QueryVotesResponse;
                toProto(message: _94.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _94.QueryVotesResponse): _94.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _94.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryParamsRequest;
                fromPartial(object: Partial<_94.QueryParamsRequest>): _94.QueryParamsRequest;
                fromAmino(object: _94.QueryParamsRequestAmino): _94.QueryParamsRequest;
                toAmino(message: _94.QueryParamsRequest): _94.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _94.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryDepositRequest;
                fromPartial(object: Partial<_94.QueryDepositRequest>): _94.QueryDepositRequest;
                fromAmino(object: _94.QueryDepositRequestAmino): _94.QueryDepositRequest;
                toAmino(message: _94.QueryDepositRequest): _94.QueryDepositRequestAmino;
                fromAminoMsg(object: _94.QueryDepositRequestAminoMsg): _94.QueryDepositRequest;
                toAminoMsg(message: _94.QueryDepositRequest): _94.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _94.QueryDepositRequestProtoMsg): _94.QueryDepositRequest;
                toProto(message: _94.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _94.QueryDepositRequest): _94.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _94.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryDepositResponse;
                fromPartial(object: Partial<_94.QueryDepositResponse>): _94.QueryDepositResponse;
                fromAmino(object: _94.QueryDepositResponseAmino): _94.QueryDepositResponse;
                toAmino(message: _94.QueryDepositResponse): _94.QueryDepositResponseAmino;
                fromAminoMsg(object: _94.QueryDepositResponseAminoMsg): _94.QueryDepositResponse;
                toAminoMsg(message: _94.QueryDepositResponse): _94.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _94.QueryDepositResponseProtoMsg): _94.QueryDepositResponse;
                toProto(message: _94.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _94.QueryDepositResponse): _94.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _94.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryDepositsRequest;
                fromPartial(object: Partial<_94.QueryDepositsRequest>): _94.QueryDepositsRequest;
                fromAmino(object: _94.QueryDepositsRequestAmino): _94.QueryDepositsRequest;
                toAmino(message: _94.QueryDepositsRequest): _94.QueryDepositsRequestAmino;
                fromAminoMsg(object: _94.QueryDepositsRequestAminoMsg): _94.QueryDepositsRequest;
                toAminoMsg(message: _94.QueryDepositsRequest): _94.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _94.QueryDepositsRequestProtoMsg): _94.QueryDepositsRequest;
                toProto(message: _94.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _94.QueryDepositsRequest): _94.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _94.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryDepositsResponse;
                fromPartial(object: Partial<_94.QueryDepositsResponse>): _94.QueryDepositsResponse;
                fromAmino(object: _94.QueryDepositsResponseAmino): _94.QueryDepositsResponse;
                toAmino(message: _94.QueryDepositsResponse): _94.QueryDepositsResponseAmino;
                fromAminoMsg(object: _94.QueryDepositsResponseAminoMsg): _94.QueryDepositsResponse;
                toAminoMsg(message: _94.QueryDepositsResponse): _94.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _94.QueryDepositsResponseProtoMsg): _94.QueryDepositsResponse;
                toProto(message: _94.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _94.QueryDepositsResponse): _94.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _94.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryTallyResultRequest;
                fromPartial(object: Partial<_94.QueryTallyResultRequest>): _94.QueryTallyResultRequest;
                fromAmino(object: _94.QueryTallyResultRequestAmino): _94.QueryTallyResultRequest;
                toAmino(message: _94.QueryTallyResultRequest): _94.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _94.QueryTallyResultRequestAminoMsg): _94.QueryTallyResultRequest;
                toAminoMsg(message: _94.QueryTallyResultRequest): _94.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _94.QueryTallyResultRequestProtoMsg): _94.QueryTallyResultRequest;
                toProto(message: _94.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _94.QueryTallyResultRequest): _94.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _94.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryTallyResultResponse;
                fromPartial(object: Partial<_94.QueryTallyResultResponse>): _94.QueryTallyResultResponse;
                fromAmino(object: _94.QueryTallyResultResponseAmino): _94.QueryTallyResultResponse;
                toAmino(message: _94.QueryTallyResultResponse): _94.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _94.QueryTallyResultResponseAminoMsg): _94.QueryTallyResultResponse;
                toAminoMsg(message: _94.QueryTallyResultResponse): _94.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _94.QueryTallyResultResponseProtoMsg): _94.QueryTallyResultResponse;
                toProto(message: _94.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _94.QueryTallyResultResponse): _94.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _93.VoteOption;
            voteOptionToJSON(object: _93.VoteOption): string;
            proposalStatusFromJSON(object: any): _93.ProposalStatus;
            proposalStatusToJSON(object: _93.ProposalStatus): string;
            VoteOption: typeof _93.VoteOption;
            VoteOptionSDKType: typeof _93.VoteOption;
            VoteOptionAmino: typeof _93.VoteOption;
            ProposalStatus: typeof _93.ProposalStatus;
            ProposalStatusSDKType: typeof _93.ProposalStatus;
            ProposalStatusAmino: typeof _93.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _93.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.WeightedVoteOption;
                fromPartial(object: Partial<_93.WeightedVoteOption>): _93.WeightedVoteOption;
                fromAmino(object: _93.WeightedVoteOptionAmino): _93.WeightedVoteOption;
                toAmino(message: _93.WeightedVoteOption): _93.WeightedVoteOptionAmino;
                fromAminoMsg(object: _93.WeightedVoteOptionAminoMsg): _93.WeightedVoteOption;
                toAminoMsg(message: _93.WeightedVoteOption): _93.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _93.WeightedVoteOptionProtoMsg): _93.WeightedVoteOption;
                toProto(message: _93.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _93.WeightedVoteOption): _93.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _93.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.TextProposal;
                fromPartial(object: Partial<_93.TextProposal>): _93.TextProposal;
                fromAmino(object: _93.TextProposalAmino): _93.TextProposal;
                toAmino(message: _93.TextProposal): _93.TextProposalAmino;
                fromAminoMsg(object: _93.TextProposalAminoMsg): _93.TextProposal;
                toAminoMsg(message: _93.TextProposal): _93.TextProposalAminoMsg;
                fromProtoMsg(message: _93.TextProposalProtoMsg): _93.TextProposal;
                toProto(message: _93.TextProposal): Uint8Array;
                toProtoMsg(message: _93.TextProposal): _93.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _93.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Deposit;
                fromPartial(object: Partial<_93.Deposit>): _93.Deposit;
                fromAmino(object: _93.DepositAmino): _93.Deposit;
                toAmino(message: _93.Deposit): _93.DepositAmino;
                fromAminoMsg(object: _93.DepositAminoMsg): _93.Deposit;
                toAminoMsg(message: _93.Deposit): _93.DepositAminoMsg;
                fromProtoMsg(message: _93.DepositProtoMsg): _93.Deposit;
                toProto(message: _93.Deposit): Uint8Array;
                toProtoMsg(message: _93.Deposit): _93.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _93.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Proposal;
                fromPartial(object: Partial<_93.Proposal>): _93.Proposal;
                fromAmino(object: _93.ProposalAmino): _93.Proposal;
                toAmino(message: _93.Proposal): _93.ProposalAmino;
                fromAminoMsg(object: _93.ProposalAminoMsg): _93.Proposal;
                toAminoMsg(message: _93.Proposal): _93.ProposalAminoMsg;
                fromProtoMsg(message: _93.ProposalProtoMsg): _93.Proposal;
                toProto(message: _93.Proposal): Uint8Array;
                toProtoMsg(message: _93.Proposal): _93.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _93.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.TallyResult;
                fromPartial(object: Partial<_93.TallyResult>): _93.TallyResult;
                fromAmino(object: _93.TallyResultAmino): _93.TallyResult;
                toAmino(message: _93.TallyResult): _93.TallyResultAmino;
                fromAminoMsg(object: _93.TallyResultAminoMsg): _93.TallyResult;
                toAminoMsg(message: _93.TallyResult): _93.TallyResultAminoMsg;
                fromProtoMsg(message: _93.TallyResultProtoMsg): _93.TallyResult;
                toProto(message: _93.TallyResult): Uint8Array;
                toProtoMsg(message: _93.TallyResult): _93.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _93.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Vote;
                fromPartial(object: Partial<_93.Vote>): _93.Vote;
                fromAmino(object: _93.VoteAmino): _93.Vote;
                toAmino(message: _93.Vote): _93.VoteAmino;
                fromAminoMsg(object: _93.VoteAminoMsg): _93.Vote;
                toAminoMsg(message: _93.Vote): _93.VoteAminoMsg;
                fromProtoMsg(message: _93.VoteProtoMsg): _93.Vote;
                toProto(message: _93.Vote): Uint8Array;
                toProtoMsg(message: _93.Vote): _93.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _93.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.DepositParams;
                fromPartial(object: Partial<_93.DepositParams>): _93.DepositParams;
                fromAmino(object: _93.DepositParamsAmino): _93.DepositParams;
                toAmino(message: _93.DepositParams): _93.DepositParamsAmino;
                fromAminoMsg(object: _93.DepositParamsAminoMsg): _93.DepositParams;
                toAminoMsg(message: _93.DepositParams): _93.DepositParamsAminoMsg;
                fromProtoMsg(message: _93.DepositParamsProtoMsg): _93.DepositParams;
                toProto(message: _93.DepositParams): Uint8Array;
                toProtoMsg(message: _93.DepositParams): _93.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _93.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.VotingParams;
                fromPartial(object: Partial<_93.VotingParams>): _93.VotingParams;
                fromAmino(object: _93.VotingParamsAmino): _93.VotingParams;
                toAmino(message: _93.VotingParams): _93.VotingParamsAmino;
                fromAminoMsg(object: _93.VotingParamsAminoMsg): _93.VotingParams;
                toAminoMsg(message: _93.VotingParams): _93.VotingParamsAminoMsg;
                fromProtoMsg(message: _93.VotingParamsProtoMsg): _93.VotingParams;
                toProto(message: _93.VotingParams): Uint8Array;
                toProtoMsg(message: _93.VotingParams): _93.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _93.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.TallyParams;
                fromPartial(object: Partial<_93.TallyParams>): _93.TallyParams;
                fromAmino(object: _93.TallyParamsAmino): _93.TallyParams;
                toAmino(message: _93.TallyParams): _93.TallyParamsAmino;
                fromAminoMsg(object: _93.TallyParamsAminoMsg): _93.TallyParams;
                toAminoMsg(message: _93.TallyParams): _93.TallyParamsAminoMsg;
                fromProtoMsg(message: _93.TallyParamsProtoMsg): _93.TallyParams;
                toProto(message: _93.TallyParams): Uint8Array;
                toProtoMsg(message: _93.TallyParams): _93.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _92.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.GenesisState;
                fromPartial(object: Partial<_92.GenesisState>): _92.GenesisState;
                fromAmino(object: _92.GenesisStateAmino): _92.GenesisState;
                toAmino(message: _92.GenesisState): _92.GenesisStateAmino;
                fromAminoMsg(object: _92.GenesisStateAminoMsg): _92.GenesisState;
                toAminoMsg(message: _92.GenesisState): _92.GenesisStateAminoMsg;
                fromProtoMsg(message: _92.GenesisStateProtoMsg): _92.GenesisState;
                toProto(message: _92.GenesisState): Uint8Array;
                toProtoMsg(message: _92.GenesisState): _92.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _183.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                inflation(request?: _98.QueryInflationRequest): Promise<_98.QueryInflationResponse>;
                annualProvisions(request?: _98.QueryAnnualProvisionsRequest): Promise<_98.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _168.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _98.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _98.QueryParamsRequest;
                fromPartial(_: Partial<_98.QueryParamsRequest>): _98.QueryParamsRequest;
                fromAmino(_: _98.QueryParamsRequestAmino): _98.QueryParamsRequest;
                toAmino(_: _98.QueryParamsRequest): _98.QueryParamsRequestAmino;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _98.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _98.QueryInflationRequest;
                fromPartial(_: Partial<_98.QueryInflationRequest>): _98.QueryInflationRequest;
                fromAmino(_: _98.QueryInflationRequestAmino): _98.QueryInflationRequest;
                toAmino(_: _98.QueryInflationRequest): _98.QueryInflationRequestAmino;
                fromAminoMsg(object: _98.QueryInflationRequestAminoMsg): _98.QueryInflationRequest;
                toAminoMsg(message: _98.QueryInflationRequest): _98.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _98.QueryInflationRequestProtoMsg): _98.QueryInflationRequest;
                toProto(message: _98.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _98.QueryInflationRequest): _98.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _98.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryInflationResponse;
                fromPartial(object: Partial<_98.QueryInflationResponse>): _98.QueryInflationResponse;
                fromAmino(object: _98.QueryInflationResponseAmino): _98.QueryInflationResponse;
                toAmino(message: _98.QueryInflationResponse): _98.QueryInflationResponseAmino;
                fromAminoMsg(object: _98.QueryInflationResponseAminoMsg): _98.QueryInflationResponse;
                toAminoMsg(message: _98.QueryInflationResponse): _98.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _98.QueryInflationResponseProtoMsg): _98.QueryInflationResponse;
                toProto(message: _98.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _98.QueryInflationResponse): _98.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _98.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _98.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_98.QueryAnnualProvisionsRequest>): _98.QueryAnnualProvisionsRequest;
                fromAmino(_: _98.QueryAnnualProvisionsRequestAmino): _98.QueryAnnualProvisionsRequest;
                toAmino(_: _98.QueryAnnualProvisionsRequest): _98.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _98.QueryAnnualProvisionsRequestAminoMsg): _98.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _98.QueryAnnualProvisionsRequest): _98.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _98.QueryAnnualProvisionsRequestProtoMsg): _98.QueryAnnualProvisionsRequest;
                toProto(message: _98.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _98.QueryAnnualProvisionsRequest): _98.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _98.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_98.QueryAnnualProvisionsResponse>): _98.QueryAnnualProvisionsResponse;
                fromAmino(object: _98.QueryAnnualProvisionsResponseAmino): _98.QueryAnnualProvisionsResponse;
                toAmino(message: _98.QueryAnnualProvisionsResponse): _98.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _98.QueryAnnualProvisionsResponseAminoMsg): _98.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _98.QueryAnnualProvisionsResponse): _98.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _98.QueryAnnualProvisionsResponseProtoMsg): _98.QueryAnnualProvisionsResponse;
                toProto(message: _98.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _98.QueryAnnualProvisionsResponse): _98.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _97.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.Minter;
                fromPartial(object: Partial<_97.Minter>): _97.Minter;
                fromAmino(object: _97.MinterAmino): _97.Minter;
                toAmino(message: _97.Minter): _97.MinterAmino;
                fromAminoMsg(object: _97.MinterAminoMsg): _97.Minter;
                toAminoMsg(message: _97.Minter): _97.MinterAminoMsg;
                fromProtoMsg(message: _97.MinterProtoMsg): _97.Minter;
                toProto(message: _97.Minter): Uint8Array;
                toProtoMsg(message: _97.Minter): _97.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _97.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.Params;
                fromPartial(object: Partial<_97.Params>): _97.Params;
                fromAmino(object: _97.ParamsAmino): _97.Params;
                toAmino(message: _97.Params): _97.ParamsAmino;
                fromAminoMsg(object: _97.ParamsAminoMsg): _97.Params;
                toAminoMsg(message: _97.Params): _97.ParamsAminoMsg;
                fromProtoMsg(message: _97.ParamsProtoMsg): _97.Params;
                toProto(message: _97.Params): Uint8Array;
                toProtoMsg(message: _97.Params): _97.ParamsProtoMsg;
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
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _184.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _100.QueryParamsRequest): Promise<_100.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _169.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _100.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryParamsRequest;
                fromPartial(object: Partial<_100.QueryParamsRequest>): _100.QueryParamsRequest;
                fromAmino(object: _100.QueryParamsRequestAmino): _100.QueryParamsRequest;
                toAmino(message: _100.QueryParamsRequest): _100.QueryParamsRequestAmino;
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
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _99.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.ParameterChangeProposal;
                fromPartial(object: Partial<_99.ParameterChangeProposal>): _99.ParameterChangeProposal;
                fromAmino(object: _99.ParameterChangeProposalAmino): _99.ParameterChangeProposal;
                toAmino(message: _99.ParameterChangeProposal): _99.ParameterChangeProposalAmino;
                fromAminoMsg(object: _99.ParameterChangeProposalAminoMsg): _99.ParameterChangeProposal;
                toAminoMsg(message: _99.ParameterChangeProposal): _99.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _99.ParameterChangeProposalProtoMsg): _99.ParameterChangeProposal;
                toProto(message: _99.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _99.ParameterChangeProposal): _99.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _99.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.ParamChange;
                fromPartial(object: Partial<_99.ParamChange>): _99.ParamChange;
                fromAmino(object: _99.ParamChangeAmino): _99.ParamChange;
                toAmino(message: _99.ParamChange): _99.ParamChangeAmino;
                fromAminoMsg(object: _99.ParamChangeAminoMsg): _99.ParamChange;
                toAminoMsg(message: _99.ParamChange): _99.ParamChangeAminoMsg;
                fromProtoMsg(message: _99.ParamChangeProtoMsg): _99.ParamChange;
                toProto(message: _99.ParamChange): Uint8Array;
                toProtoMsg(message: _99.ParamChange): _99.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _196.MsgClientImpl;
            QueryClientImpl: typeof _185.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _102.QueryParamsRequest): Promise<_102.QueryParamsResponse>;
                signingInfo(request: _102.QuerySigningInfoRequest): Promise<_102.QuerySigningInfoResponse>;
                signingInfos(request?: _102.QuerySigningInfosRequest): Promise<_102.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _170.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _104.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _104.MsgUnjail): {
                        typeUrl: string;
                        value: _104.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _104.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _104.MsgUnjail): {
                        typeUrl: string;
                        value: _104.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _104.MsgUnjail) => _104.MsgUnjailAmino;
                    fromAmino: (object: _104.MsgUnjailAmino) => _104.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _104.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MsgUnjail;
                fromPartial(object: Partial<_104.MsgUnjail>): _104.MsgUnjail;
                fromAmino(object: _104.MsgUnjailAmino): _104.MsgUnjail;
                toAmino(message: _104.MsgUnjail): _104.MsgUnjailAmino;
                fromAminoMsg(object: _104.MsgUnjailAminoMsg): _104.MsgUnjail;
                toAminoMsg(message: _104.MsgUnjail): _104.MsgUnjailAminoMsg;
                fromProtoMsg(message: _104.MsgUnjailProtoMsg): _104.MsgUnjail;
                toProto(message: _104.MsgUnjail): Uint8Array;
                toProtoMsg(message: _104.MsgUnjail): _104.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _104.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.MsgUnjailResponse;
                fromPartial(_: Partial<_104.MsgUnjailResponse>): _104.MsgUnjailResponse;
                fromAmino(_: _104.MsgUnjailResponseAmino): _104.MsgUnjailResponse;
                toAmino(_: _104.MsgUnjailResponse): _104.MsgUnjailResponseAmino;
                fromAminoMsg(object: _104.MsgUnjailResponseAminoMsg): _104.MsgUnjailResponse;
                toAminoMsg(message: _104.MsgUnjailResponse): _104.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _104.MsgUnjailResponseProtoMsg): _104.MsgUnjailResponse;
                toProto(message: _104.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _104.MsgUnjailResponse): _104.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _103.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.ValidatorSigningInfo;
                fromPartial(object: Partial<_103.ValidatorSigningInfo>): _103.ValidatorSigningInfo;
                fromAmino(object: _103.ValidatorSigningInfoAmino): _103.ValidatorSigningInfo;
                toAmino(message: _103.ValidatorSigningInfo): _103.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _103.ValidatorSigningInfoAminoMsg): _103.ValidatorSigningInfo;
                toAminoMsg(message: _103.ValidatorSigningInfo): _103.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _103.ValidatorSigningInfoProtoMsg): _103.ValidatorSigningInfo;
                toProto(message: _103.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _103.ValidatorSigningInfo): _103.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _103.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.Params;
                fromPartial(object: Partial<_103.Params>): _103.Params;
                fromAmino(object: _103.ParamsAmino): _103.Params;
                toAmino(message: _103.Params): _103.ParamsAmino;
                fromAminoMsg(object: _103.ParamsAminoMsg): _103.Params;
                toAminoMsg(message: _103.Params): _103.ParamsAminoMsg;
                fromProtoMsg(message: _103.ParamsProtoMsg): _103.Params;
                toProto(message: _103.Params): Uint8Array;
                toProtoMsg(message: _103.Params): _103.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _102.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _102.QueryParamsRequest;
                fromPartial(_: Partial<_102.QueryParamsRequest>): _102.QueryParamsRequest;
                fromAmino(_: _102.QueryParamsRequestAmino): _102.QueryParamsRequest;
                toAmino(_: _102.QueryParamsRequest): _102.QueryParamsRequestAmino;
                fromAminoMsg(object: _102.QueryParamsRequestAminoMsg): _102.QueryParamsRequest;
                toAminoMsg(message: _102.QueryParamsRequest): _102.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _102.QueryParamsRequestProtoMsg): _102.QueryParamsRequest;
                toProto(message: _102.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _102.QueryParamsRequest): _102.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _102.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryParamsResponse;
                fromPartial(object: Partial<_102.QueryParamsResponse>): _102.QueryParamsResponse;
                fromAmino(object: _102.QueryParamsResponseAmino): _102.QueryParamsResponse;
                toAmino(message: _102.QueryParamsResponse): _102.QueryParamsResponseAmino;
                fromAminoMsg(object: _102.QueryParamsResponseAminoMsg): _102.QueryParamsResponse;
                toAminoMsg(message: _102.QueryParamsResponse): _102.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _102.QueryParamsResponseProtoMsg): _102.QueryParamsResponse;
                toProto(message: _102.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _102.QueryParamsResponse): _102.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _102.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QuerySigningInfoRequest;
                fromPartial(object: Partial<_102.QuerySigningInfoRequest>): _102.QuerySigningInfoRequest;
                fromAmino(object: _102.QuerySigningInfoRequestAmino): _102.QuerySigningInfoRequest;
                toAmino(message: _102.QuerySigningInfoRequest): _102.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _102.QuerySigningInfoRequestAminoMsg): _102.QuerySigningInfoRequest;
                toAminoMsg(message: _102.QuerySigningInfoRequest): _102.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _102.QuerySigningInfoRequestProtoMsg): _102.QuerySigningInfoRequest;
                toProto(message: _102.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _102.QuerySigningInfoRequest): _102.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _102.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QuerySigningInfoResponse;
                fromPartial(object: Partial<_102.QuerySigningInfoResponse>): _102.QuerySigningInfoResponse;
                fromAmino(object: _102.QuerySigningInfoResponseAmino): _102.QuerySigningInfoResponse;
                toAmino(message: _102.QuerySigningInfoResponse): _102.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _102.QuerySigningInfoResponseAminoMsg): _102.QuerySigningInfoResponse;
                toAminoMsg(message: _102.QuerySigningInfoResponse): _102.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _102.QuerySigningInfoResponseProtoMsg): _102.QuerySigningInfoResponse;
                toProto(message: _102.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _102.QuerySigningInfoResponse): _102.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _102.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QuerySigningInfosRequest;
                fromPartial(object: Partial<_102.QuerySigningInfosRequest>): _102.QuerySigningInfosRequest;
                fromAmino(object: _102.QuerySigningInfosRequestAmino): _102.QuerySigningInfosRequest;
                toAmino(message: _102.QuerySigningInfosRequest): _102.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _102.QuerySigningInfosRequestAminoMsg): _102.QuerySigningInfosRequest;
                toAminoMsg(message: _102.QuerySigningInfosRequest): _102.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _102.QuerySigningInfosRequestProtoMsg): _102.QuerySigningInfosRequest;
                toProto(message: _102.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _102.QuerySigningInfosRequest): _102.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _102.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QuerySigningInfosResponse;
                fromPartial(object: Partial<_102.QuerySigningInfosResponse>): _102.QuerySigningInfosResponse;
                fromAmino(object: _102.QuerySigningInfosResponseAmino): _102.QuerySigningInfosResponse;
                toAmino(message: _102.QuerySigningInfosResponse): _102.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _102.QuerySigningInfosResponseAminoMsg): _102.QuerySigningInfosResponse;
                toAminoMsg(message: _102.QuerySigningInfosResponse): _102.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _102.QuerySigningInfosResponseProtoMsg): _102.QuerySigningInfosResponse;
                toProto(message: _102.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _102.QuerySigningInfosResponse): _102.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _101.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.SigningInfo;
                fromPartial(object: Partial<_101.SigningInfo>): _101.SigningInfo;
                fromAmino(object: _101.SigningInfoAmino): _101.SigningInfo;
                toAmino(message: _101.SigningInfo): _101.SigningInfoAmino;
                fromAminoMsg(object: _101.SigningInfoAminoMsg): _101.SigningInfo;
                toAminoMsg(message: _101.SigningInfo): _101.SigningInfoAminoMsg;
                fromProtoMsg(message: _101.SigningInfoProtoMsg): _101.SigningInfo;
                toProto(message: _101.SigningInfo): Uint8Array;
                toProtoMsg(message: _101.SigningInfo): _101.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _101.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.ValidatorMissedBlocks;
                fromPartial(object: Partial<_101.ValidatorMissedBlocks>): _101.ValidatorMissedBlocks;
                fromAmino(object: _101.ValidatorMissedBlocksAmino): _101.ValidatorMissedBlocks;
                toAmino(message: _101.ValidatorMissedBlocks): _101.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _101.ValidatorMissedBlocksAminoMsg): _101.ValidatorMissedBlocks;
                toAminoMsg(message: _101.ValidatorMissedBlocks): _101.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _101.ValidatorMissedBlocksProtoMsg): _101.ValidatorMissedBlocks;
                toProto(message: _101.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _101.ValidatorMissedBlocks): _101.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _101.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MissedBlock;
                fromPartial(object: Partial<_101.MissedBlock>): _101.MissedBlock;
                fromAmino(object: _101.MissedBlockAmino): _101.MissedBlock;
                toAmino(message: _101.MissedBlock): _101.MissedBlockAmino;
                fromAminoMsg(object: _101.MissedBlockAminoMsg): _101.MissedBlock;
                toAminoMsg(message: _101.MissedBlock): _101.MissedBlockAminoMsg;
                fromProtoMsg(message: _101.MissedBlockProtoMsg): _101.MissedBlock;
                toProto(message: _101.MissedBlock): Uint8Array;
                toProtoMsg(message: _101.MissedBlock): _101.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _197.MsgClientImpl;
            QueryClientImpl: typeof _186.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _107.QueryValidatorsRequest): Promise<_107.QueryValidatorsResponse>;
                validator(request: _107.QueryValidatorRequest): Promise<_107.QueryValidatorResponse>;
                validatorDelegations(request: _107.QueryValidatorDelegationsRequest): Promise<_107.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _107.QueryValidatorUnbondingDelegationsRequest): Promise<_107.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _107.QueryDelegationRequest): Promise<_107.QueryDelegationResponse>;
                unbondingDelegation(request: _107.QueryUnbondingDelegationRequest): Promise<_107.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _107.QueryDelegatorDelegationsRequest): Promise<_107.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _107.QueryDelegatorUnbondingDelegationsRequest): Promise<_107.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _107.QueryRedelegationsRequest): Promise<_107.QueryRedelegationsResponse>;
                delegatorValidators(request: _107.QueryDelegatorValidatorsRequest): Promise<_107.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _107.QueryDelegatorValidatorRequest): Promise<_107.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _107.QueryHistoricalInfoRequest): Promise<_107.QueryHistoricalInfoResponse>;
                pool(request?: _107.QueryPoolRequest): Promise<_107.QueryPoolResponse>;
                params(request?: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _171.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _109.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _109.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _109.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _109.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _109.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _109.MsgCreateValidator): {
                        typeUrl: string;
                        value: _109.MsgCreateValidator;
                    };
                    editValidator(value: _109.MsgEditValidator): {
                        typeUrl: string;
                        value: _109.MsgEditValidator;
                    };
                    delegate(value: _109.MsgDelegate): {
                        typeUrl: string;
                        value: _109.MsgDelegate;
                    };
                    beginRedelegate(value: _109.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _109.MsgBeginRedelegate;
                    };
                    undelegate(value: _109.MsgUndelegate): {
                        typeUrl: string;
                        value: _109.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _109.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _109.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _109.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _109.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _109.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _109.MsgCreateValidator): {
                        typeUrl: string;
                        value: _109.MsgCreateValidator;
                    };
                    editValidator(value: _109.MsgEditValidator): {
                        typeUrl: string;
                        value: _109.MsgEditValidator;
                    };
                    delegate(value: _109.MsgDelegate): {
                        typeUrl: string;
                        value: _109.MsgDelegate;
                    };
                    beginRedelegate(value: _109.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _109.MsgBeginRedelegate;
                    };
                    undelegate(value: _109.MsgUndelegate): {
                        typeUrl: string;
                        value: _109.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _109.MsgCreateValidator) => _109.MsgCreateValidatorAmino;
                    fromAmino: (object: _109.MsgCreateValidatorAmino) => _109.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _109.MsgEditValidator) => _109.MsgEditValidatorAmino;
                    fromAmino: (object: _109.MsgEditValidatorAmino) => _109.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _109.MsgDelegate) => _109.MsgDelegateAmino;
                    fromAmino: (object: _109.MsgDelegateAmino) => _109.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _109.MsgBeginRedelegate) => _109.MsgBeginRedelegateAmino;
                    fromAmino: (object: _109.MsgBeginRedelegateAmino) => _109.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _109.MsgUndelegate) => _109.MsgUndelegateAmino;
                    fromAmino: (object: _109.MsgUndelegateAmino) => _109.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _109.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.MsgCreateValidator;
                fromPartial(object: Partial<_109.MsgCreateValidator>): _109.MsgCreateValidator;
                fromAmino(object: _109.MsgCreateValidatorAmino): _109.MsgCreateValidator;
                toAmino(message: _109.MsgCreateValidator): _109.MsgCreateValidatorAmino;
                fromAminoMsg(object: _109.MsgCreateValidatorAminoMsg): _109.MsgCreateValidator;
                toAminoMsg(message: _109.MsgCreateValidator): _109.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _109.MsgCreateValidatorProtoMsg): _109.MsgCreateValidator;
                toProto(message: _109.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _109.MsgCreateValidator): _109.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _109.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _109.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_109.MsgCreateValidatorResponse>): _109.MsgCreateValidatorResponse;
                fromAmino(_: _109.MsgCreateValidatorResponseAmino): _109.MsgCreateValidatorResponse;
                toAmino(_: _109.MsgCreateValidatorResponse): _109.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _109.MsgCreateValidatorResponseAminoMsg): _109.MsgCreateValidatorResponse;
                toAminoMsg(message: _109.MsgCreateValidatorResponse): _109.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _109.MsgCreateValidatorResponseProtoMsg): _109.MsgCreateValidatorResponse;
                toProto(message: _109.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _109.MsgCreateValidatorResponse): _109.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _109.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.MsgEditValidator;
                fromPartial(object: Partial<_109.MsgEditValidator>): _109.MsgEditValidator;
                fromAmino(object: _109.MsgEditValidatorAmino): _109.MsgEditValidator;
                toAmino(message: _109.MsgEditValidator): _109.MsgEditValidatorAmino;
                fromAminoMsg(object: _109.MsgEditValidatorAminoMsg): _109.MsgEditValidator;
                toAminoMsg(message: _109.MsgEditValidator): _109.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _109.MsgEditValidatorProtoMsg): _109.MsgEditValidator;
                toProto(message: _109.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _109.MsgEditValidator): _109.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _109.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _109.MsgEditValidatorResponse;
                fromPartial(_: Partial<_109.MsgEditValidatorResponse>): _109.MsgEditValidatorResponse;
                fromAmino(_: _109.MsgEditValidatorResponseAmino): _109.MsgEditValidatorResponse;
                toAmino(_: _109.MsgEditValidatorResponse): _109.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _109.MsgEditValidatorResponseAminoMsg): _109.MsgEditValidatorResponse;
                toAminoMsg(message: _109.MsgEditValidatorResponse): _109.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _109.MsgEditValidatorResponseProtoMsg): _109.MsgEditValidatorResponse;
                toProto(message: _109.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _109.MsgEditValidatorResponse): _109.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _109.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.MsgDelegate;
                fromPartial(object: Partial<_109.MsgDelegate>): _109.MsgDelegate;
                fromAmino(object: _109.MsgDelegateAmino): _109.MsgDelegate;
                toAmino(message: _109.MsgDelegate): _109.MsgDelegateAmino;
                fromAminoMsg(object: _109.MsgDelegateAminoMsg): _109.MsgDelegate;
                toAminoMsg(message: _109.MsgDelegate): _109.MsgDelegateAminoMsg;
                fromProtoMsg(message: _109.MsgDelegateProtoMsg): _109.MsgDelegate;
                toProto(message: _109.MsgDelegate): Uint8Array;
                toProtoMsg(message: _109.MsgDelegate): _109.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _109.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _109.MsgDelegateResponse;
                fromPartial(_: Partial<_109.MsgDelegateResponse>): _109.MsgDelegateResponse;
                fromAmino(_: _109.MsgDelegateResponseAmino): _109.MsgDelegateResponse;
                toAmino(_: _109.MsgDelegateResponse): _109.MsgDelegateResponseAmino;
                fromAminoMsg(object: _109.MsgDelegateResponseAminoMsg): _109.MsgDelegateResponse;
                toAminoMsg(message: _109.MsgDelegateResponse): _109.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _109.MsgDelegateResponseProtoMsg): _109.MsgDelegateResponse;
                toProto(message: _109.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _109.MsgDelegateResponse): _109.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _109.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.MsgBeginRedelegate;
                fromPartial(object: Partial<_109.MsgBeginRedelegate>): _109.MsgBeginRedelegate;
                fromAmino(object: _109.MsgBeginRedelegateAmino): _109.MsgBeginRedelegate;
                toAmino(message: _109.MsgBeginRedelegate): _109.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _109.MsgBeginRedelegateAminoMsg): _109.MsgBeginRedelegate;
                toAminoMsg(message: _109.MsgBeginRedelegate): _109.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _109.MsgBeginRedelegateProtoMsg): _109.MsgBeginRedelegate;
                toProto(message: _109.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _109.MsgBeginRedelegate): _109.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _109.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_109.MsgBeginRedelegateResponse>): _109.MsgBeginRedelegateResponse;
                fromAmino(object: _109.MsgBeginRedelegateResponseAmino): _109.MsgBeginRedelegateResponse;
                toAmino(message: _109.MsgBeginRedelegateResponse): _109.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _109.MsgBeginRedelegateResponseAminoMsg): _109.MsgBeginRedelegateResponse;
                toAminoMsg(message: _109.MsgBeginRedelegateResponse): _109.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _109.MsgBeginRedelegateResponseProtoMsg): _109.MsgBeginRedelegateResponse;
                toProto(message: _109.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _109.MsgBeginRedelegateResponse): _109.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _109.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.MsgUndelegate;
                fromPartial(object: Partial<_109.MsgUndelegate>): _109.MsgUndelegate;
                fromAmino(object: _109.MsgUndelegateAmino): _109.MsgUndelegate;
                toAmino(message: _109.MsgUndelegate): _109.MsgUndelegateAmino;
                fromAminoMsg(object: _109.MsgUndelegateAminoMsg): _109.MsgUndelegate;
                toAminoMsg(message: _109.MsgUndelegate): _109.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _109.MsgUndelegateProtoMsg): _109.MsgUndelegate;
                toProto(message: _109.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _109.MsgUndelegate): _109.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _109.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.MsgUndelegateResponse;
                fromPartial(object: Partial<_109.MsgUndelegateResponse>): _109.MsgUndelegateResponse;
                fromAmino(object: _109.MsgUndelegateResponseAmino): _109.MsgUndelegateResponse;
                toAmino(message: _109.MsgUndelegateResponse): _109.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _109.MsgUndelegateResponseAminoMsg): _109.MsgUndelegateResponse;
                toAminoMsg(message: _109.MsgUndelegateResponse): _109.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _109.MsgUndelegateResponseProtoMsg): _109.MsgUndelegateResponse;
                toProto(message: _109.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _109.MsgUndelegateResponse): _109.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _108.BondStatus;
            bondStatusToJSON(object: _108.BondStatus): string;
            BondStatus: typeof _108.BondStatus;
            BondStatusSDKType: typeof _108.BondStatus;
            BondStatusAmino: typeof _108.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _108.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.HistoricalInfo;
                fromPartial(object: Partial<_108.HistoricalInfo>): _108.HistoricalInfo;
                fromAmino(object: _108.HistoricalInfoAmino): _108.HistoricalInfo;
                toAmino(message: _108.HistoricalInfo): _108.HistoricalInfoAmino;
                fromAminoMsg(object: _108.HistoricalInfoAminoMsg): _108.HistoricalInfo;
                toAminoMsg(message: _108.HistoricalInfo): _108.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _108.HistoricalInfoProtoMsg): _108.HistoricalInfo;
                toProto(message: _108.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _108.HistoricalInfo): _108.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _108.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.CommissionRates;
                fromPartial(object: Partial<_108.CommissionRates>): _108.CommissionRates;
                fromAmino(object: _108.CommissionRatesAmino): _108.CommissionRates;
                toAmino(message: _108.CommissionRates): _108.CommissionRatesAmino;
                fromAminoMsg(object: _108.CommissionRatesAminoMsg): _108.CommissionRates;
                toAminoMsg(message: _108.CommissionRates): _108.CommissionRatesAminoMsg;
                fromProtoMsg(message: _108.CommissionRatesProtoMsg): _108.CommissionRates;
                toProto(message: _108.CommissionRates): Uint8Array;
                toProtoMsg(message: _108.CommissionRates): _108.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _108.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.Commission;
                fromPartial(object: Partial<_108.Commission>): _108.Commission;
                fromAmino(object: _108.CommissionAmino): _108.Commission;
                toAmino(message: _108.Commission): _108.CommissionAmino;
                fromAminoMsg(object: _108.CommissionAminoMsg): _108.Commission;
                toAminoMsg(message: _108.Commission): _108.CommissionAminoMsg;
                fromProtoMsg(message: _108.CommissionProtoMsg): _108.Commission;
                toProto(message: _108.Commission): Uint8Array;
                toProtoMsg(message: _108.Commission): _108.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _108.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.Description;
                fromPartial(object: Partial<_108.Description>): _108.Description;
                fromAmino(object: _108.DescriptionAmino): _108.Description;
                toAmino(message: _108.Description): _108.DescriptionAmino;
                fromAminoMsg(object: _108.DescriptionAminoMsg): _108.Description;
                toAminoMsg(message: _108.Description): _108.DescriptionAminoMsg;
                fromProtoMsg(message: _108.DescriptionProtoMsg): _108.Description;
                toProto(message: _108.Description): Uint8Array;
                toProtoMsg(message: _108.Description): _108.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _108.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.Validator;
                fromPartial(object: Partial<_108.Validator>): _108.Validator;
                fromAmino(object: _108.ValidatorAmino): _108.Validator;
                toAmino(message: _108.Validator): _108.ValidatorAmino;
                fromAminoMsg(object: _108.ValidatorAminoMsg): _108.Validator;
                toAminoMsg(message: _108.Validator): _108.ValidatorAminoMsg;
                fromProtoMsg(message: _108.ValidatorProtoMsg): _108.Validator;
                toProto(message: _108.Validator): Uint8Array;
                toProtoMsg(message: _108.Validator): _108.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _108.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.ValAddresses;
                fromPartial(object: Partial<_108.ValAddresses>): _108.ValAddresses;
                fromAmino(object: _108.ValAddressesAmino): _108.ValAddresses;
                toAmino(message: _108.ValAddresses): _108.ValAddressesAmino;
                fromAminoMsg(object: _108.ValAddressesAminoMsg): _108.ValAddresses;
                toAminoMsg(message: _108.ValAddresses): _108.ValAddressesAminoMsg;
                fromProtoMsg(message: _108.ValAddressesProtoMsg): _108.ValAddresses;
                toProto(message: _108.ValAddresses): Uint8Array;
                toProtoMsg(message: _108.ValAddresses): _108.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _108.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.DVPair;
                fromPartial(object: Partial<_108.DVPair>): _108.DVPair;
                fromAmino(object: _108.DVPairAmino): _108.DVPair;
                toAmino(message: _108.DVPair): _108.DVPairAmino;
                fromAminoMsg(object: _108.DVPairAminoMsg): _108.DVPair;
                toAminoMsg(message: _108.DVPair): _108.DVPairAminoMsg;
                fromProtoMsg(message: _108.DVPairProtoMsg): _108.DVPair;
                toProto(message: _108.DVPair): Uint8Array;
                toProtoMsg(message: _108.DVPair): _108.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _108.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.DVPairs;
                fromPartial(object: Partial<_108.DVPairs>): _108.DVPairs;
                fromAmino(object: _108.DVPairsAmino): _108.DVPairs;
                toAmino(message: _108.DVPairs): _108.DVPairsAmino;
                fromAminoMsg(object: _108.DVPairsAminoMsg): _108.DVPairs;
                toAminoMsg(message: _108.DVPairs): _108.DVPairsAminoMsg;
                fromProtoMsg(message: _108.DVPairsProtoMsg): _108.DVPairs;
                toProto(message: _108.DVPairs): Uint8Array;
                toProtoMsg(message: _108.DVPairs): _108.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _108.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.DVVTriplet;
                fromPartial(object: Partial<_108.DVVTriplet>): _108.DVVTriplet;
                fromAmino(object: _108.DVVTripletAmino): _108.DVVTriplet;
                toAmino(message: _108.DVVTriplet): _108.DVVTripletAmino;
                fromAminoMsg(object: _108.DVVTripletAminoMsg): _108.DVVTriplet;
                toAminoMsg(message: _108.DVVTriplet): _108.DVVTripletAminoMsg;
                fromProtoMsg(message: _108.DVVTripletProtoMsg): _108.DVVTriplet;
                toProto(message: _108.DVVTriplet): Uint8Array;
                toProtoMsg(message: _108.DVVTriplet): _108.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _108.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.DVVTriplets;
                fromPartial(object: Partial<_108.DVVTriplets>): _108.DVVTriplets;
                fromAmino(object: _108.DVVTripletsAmino): _108.DVVTriplets;
                toAmino(message: _108.DVVTriplets): _108.DVVTripletsAmino;
                fromAminoMsg(object: _108.DVVTripletsAminoMsg): _108.DVVTriplets;
                toAminoMsg(message: _108.DVVTriplets): _108.DVVTripletsAminoMsg;
                fromProtoMsg(message: _108.DVVTripletsProtoMsg): _108.DVVTriplets;
                toProto(message: _108.DVVTriplets): Uint8Array;
                toProtoMsg(message: _108.DVVTriplets): _108.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _108.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.Delegation;
                fromPartial(object: Partial<_108.Delegation>): _108.Delegation;
                fromAmino(object: _108.DelegationAmino): _108.Delegation;
                toAmino(message: _108.Delegation): _108.DelegationAmino;
                fromAminoMsg(object: _108.DelegationAminoMsg): _108.Delegation;
                toAminoMsg(message: _108.Delegation): _108.DelegationAminoMsg;
                fromProtoMsg(message: _108.DelegationProtoMsg): _108.Delegation;
                toProto(message: _108.Delegation): Uint8Array;
                toProtoMsg(message: _108.Delegation): _108.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _108.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.UnbondingDelegation;
                fromPartial(object: Partial<_108.UnbondingDelegation>): _108.UnbondingDelegation;
                fromAmino(object: _108.UnbondingDelegationAmino): _108.UnbondingDelegation;
                toAmino(message: _108.UnbondingDelegation): _108.UnbondingDelegationAmino;
                fromAminoMsg(object: _108.UnbondingDelegationAminoMsg): _108.UnbondingDelegation;
                toAminoMsg(message: _108.UnbondingDelegation): _108.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _108.UnbondingDelegationProtoMsg): _108.UnbondingDelegation;
                toProto(message: _108.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _108.UnbondingDelegation): _108.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _108.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.UnbondingDelegationEntry;
                fromPartial(object: Partial<_108.UnbondingDelegationEntry>): _108.UnbondingDelegationEntry;
                fromAmino(object: _108.UnbondingDelegationEntryAmino): _108.UnbondingDelegationEntry;
                toAmino(message: _108.UnbondingDelegationEntry): _108.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _108.UnbondingDelegationEntryAminoMsg): _108.UnbondingDelegationEntry;
                toAminoMsg(message: _108.UnbondingDelegationEntry): _108.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _108.UnbondingDelegationEntryProtoMsg): _108.UnbondingDelegationEntry;
                toProto(message: _108.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _108.UnbondingDelegationEntry): _108.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _108.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.RedelegationEntry;
                fromPartial(object: Partial<_108.RedelegationEntry>): _108.RedelegationEntry;
                fromAmino(object: _108.RedelegationEntryAmino): _108.RedelegationEntry;
                toAmino(message: _108.RedelegationEntry): _108.RedelegationEntryAmino;
                fromAminoMsg(object: _108.RedelegationEntryAminoMsg): _108.RedelegationEntry;
                toAminoMsg(message: _108.RedelegationEntry): _108.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _108.RedelegationEntryProtoMsg): _108.RedelegationEntry;
                toProto(message: _108.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _108.RedelegationEntry): _108.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _108.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.Redelegation;
                fromPartial(object: Partial<_108.Redelegation>): _108.Redelegation;
                fromAmino(object: _108.RedelegationAmino): _108.Redelegation;
                toAmino(message: _108.Redelegation): _108.RedelegationAmino;
                fromAminoMsg(object: _108.RedelegationAminoMsg): _108.Redelegation;
                toAminoMsg(message: _108.Redelegation): _108.RedelegationAminoMsg;
                fromProtoMsg(message: _108.RedelegationProtoMsg): _108.Redelegation;
                toProto(message: _108.Redelegation): Uint8Array;
                toProtoMsg(message: _108.Redelegation): _108.RedelegationProtoMsg;
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
            DelegationResponse: {
                typeUrl: string;
                encode(message: _108.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.DelegationResponse;
                fromPartial(object: Partial<_108.DelegationResponse>): _108.DelegationResponse;
                fromAmino(object: _108.DelegationResponseAmino): _108.DelegationResponse;
                toAmino(message: _108.DelegationResponse): _108.DelegationResponseAmino;
                fromAminoMsg(object: _108.DelegationResponseAminoMsg): _108.DelegationResponse;
                toAminoMsg(message: _108.DelegationResponse): _108.DelegationResponseAminoMsg;
                fromProtoMsg(message: _108.DelegationResponseProtoMsg): _108.DelegationResponse;
                toProto(message: _108.DelegationResponse): Uint8Array;
                toProtoMsg(message: _108.DelegationResponse): _108.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _108.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.RedelegationEntryResponse;
                fromPartial(object: Partial<_108.RedelegationEntryResponse>): _108.RedelegationEntryResponse;
                fromAmino(object: _108.RedelegationEntryResponseAmino): _108.RedelegationEntryResponse;
                toAmino(message: _108.RedelegationEntryResponse): _108.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _108.RedelegationEntryResponseAminoMsg): _108.RedelegationEntryResponse;
                toAminoMsg(message: _108.RedelegationEntryResponse): _108.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _108.RedelegationEntryResponseProtoMsg): _108.RedelegationEntryResponse;
                toProto(message: _108.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _108.RedelegationEntryResponse): _108.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _108.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.RedelegationResponse;
                fromPartial(object: Partial<_108.RedelegationResponse>): _108.RedelegationResponse;
                fromAmino(object: _108.RedelegationResponseAmino): _108.RedelegationResponse;
                toAmino(message: _108.RedelegationResponse): _108.RedelegationResponseAmino;
                fromAminoMsg(object: _108.RedelegationResponseAminoMsg): _108.RedelegationResponse;
                toAminoMsg(message: _108.RedelegationResponse): _108.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _108.RedelegationResponseProtoMsg): _108.RedelegationResponse;
                toProto(message: _108.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _108.RedelegationResponse): _108.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _108.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.Pool;
                fromPartial(object: Partial<_108.Pool>): _108.Pool;
                fromAmino(object: _108.PoolAmino): _108.Pool;
                toAmino(message: _108.Pool): _108.PoolAmino;
                fromAminoMsg(object: _108.PoolAminoMsg): _108.Pool;
                toAminoMsg(message: _108.Pool): _108.PoolAminoMsg;
                fromProtoMsg(message: _108.PoolProtoMsg): _108.Pool;
                toProto(message: _108.Pool): Uint8Array;
                toProtoMsg(message: _108.Pool): _108.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _107.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryValidatorsRequest;
                fromPartial(object: Partial<_107.QueryValidatorsRequest>): _107.QueryValidatorsRequest;
                fromAmino(object: _107.QueryValidatorsRequestAmino): _107.QueryValidatorsRequest;
                toAmino(message: _107.QueryValidatorsRequest): _107.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _107.QueryValidatorsRequestAminoMsg): _107.QueryValidatorsRequest;
                toAminoMsg(message: _107.QueryValidatorsRequest): _107.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _107.QueryValidatorsRequestProtoMsg): _107.QueryValidatorsRequest;
                toProto(message: _107.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryValidatorsRequest): _107.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _107.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryValidatorsResponse;
                fromPartial(object: Partial<_107.QueryValidatorsResponse>): _107.QueryValidatorsResponse;
                fromAmino(object: _107.QueryValidatorsResponseAmino): _107.QueryValidatorsResponse;
                toAmino(message: _107.QueryValidatorsResponse): _107.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _107.QueryValidatorsResponseAminoMsg): _107.QueryValidatorsResponse;
                toAminoMsg(message: _107.QueryValidatorsResponse): _107.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _107.QueryValidatorsResponseProtoMsg): _107.QueryValidatorsResponse;
                toProto(message: _107.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryValidatorsResponse): _107.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _107.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryValidatorRequest;
                fromPartial(object: Partial<_107.QueryValidatorRequest>): _107.QueryValidatorRequest;
                fromAmino(object: _107.QueryValidatorRequestAmino): _107.QueryValidatorRequest;
                toAmino(message: _107.QueryValidatorRequest): _107.QueryValidatorRequestAmino;
                fromAminoMsg(object: _107.QueryValidatorRequestAminoMsg): _107.QueryValidatorRequest;
                toAminoMsg(message: _107.QueryValidatorRequest): _107.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _107.QueryValidatorRequestProtoMsg): _107.QueryValidatorRequest;
                toProto(message: _107.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _107.QueryValidatorRequest): _107.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _107.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryValidatorResponse;
                fromPartial(object: Partial<_107.QueryValidatorResponse>): _107.QueryValidatorResponse;
                fromAmino(object: _107.QueryValidatorResponseAmino): _107.QueryValidatorResponse;
                toAmino(message: _107.QueryValidatorResponse): _107.QueryValidatorResponseAmino;
                fromAminoMsg(object: _107.QueryValidatorResponseAminoMsg): _107.QueryValidatorResponse;
                toAminoMsg(message: _107.QueryValidatorResponse): _107.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _107.QueryValidatorResponseProtoMsg): _107.QueryValidatorResponse;
                toProto(message: _107.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _107.QueryValidatorResponse): _107.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _107.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_107.QueryValidatorDelegationsRequest>): _107.QueryValidatorDelegationsRequest;
                fromAmino(object: _107.QueryValidatorDelegationsRequestAmino): _107.QueryValidatorDelegationsRequest;
                toAmino(message: _107.QueryValidatorDelegationsRequest): _107.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _107.QueryValidatorDelegationsRequestAminoMsg): _107.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _107.QueryValidatorDelegationsRequest): _107.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _107.QueryValidatorDelegationsRequestProtoMsg): _107.QueryValidatorDelegationsRequest;
                toProto(message: _107.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryValidatorDelegationsRequest): _107.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _107.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_107.QueryValidatorDelegationsResponse>): _107.QueryValidatorDelegationsResponse;
                fromAmino(object: _107.QueryValidatorDelegationsResponseAmino): _107.QueryValidatorDelegationsResponse;
                toAmino(message: _107.QueryValidatorDelegationsResponse): _107.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _107.QueryValidatorDelegationsResponseAminoMsg): _107.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _107.QueryValidatorDelegationsResponse): _107.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _107.QueryValidatorDelegationsResponseProtoMsg): _107.QueryValidatorDelegationsResponse;
                toProto(message: _107.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryValidatorDelegationsResponse): _107.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _107.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_107.QueryValidatorUnbondingDelegationsRequest>): _107.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _107.QueryValidatorUnbondingDelegationsRequestAmino): _107.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _107.QueryValidatorUnbondingDelegationsRequest): _107.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _107.QueryValidatorUnbondingDelegationsRequestAminoMsg): _107.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _107.QueryValidatorUnbondingDelegationsRequest): _107.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _107.QueryValidatorUnbondingDelegationsRequestProtoMsg): _107.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _107.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryValidatorUnbondingDelegationsRequest): _107.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _107.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_107.QueryValidatorUnbondingDelegationsResponse>): _107.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _107.QueryValidatorUnbondingDelegationsResponseAmino): _107.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _107.QueryValidatorUnbondingDelegationsResponse): _107.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _107.QueryValidatorUnbondingDelegationsResponseAminoMsg): _107.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _107.QueryValidatorUnbondingDelegationsResponse): _107.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _107.QueryValidatorUnbondingDelegationsResponseProtoMsg): _107.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _107.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryValidatorUnbondingDelegationsResponse): _107.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _107.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryDelegationRequest;
                fromPartial(object: Partial<_107.QueryDelegationRequest>): _107.QueryDelegationRequest;
                fromAmino(object: _107.QueryDelegationRequestAmino): _107.QueryDelegationRequest;
                toAmino(message: _107.QueryDelegationRequest): _107.QueryDelegationRequestAmino;
                fromAminoMsg(object: _107.QueryDelegationRequestAminoMsg): _107.QueryDelegationRequest;
                toAminoMsg(message: _107.QueryDelegationRequest): _107.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _107.QueryDelegationRequestProtoMsg): _107.QueryDelegationRequest;
                toProto(message: _107.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _107.QueryDelegationRequest): _107.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _107.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryDelegationResponse;
                fromPartial(object: Partial<_107.QueryDelegationResponse>): _107.QueryDelegationResponse;
                fromAmino(object: _107.QueryDelegationResponseAmino): _107.QueryDelegationResponse;
                toAmino(message: _107.QueryDelegationResponse): _107.QueryDelegationResponseAmino;
                fromAminoMsg(object: _107.QueryDelegationResponseAminoMsg): _107.QueryDelegationResponse;
                toAminoMsg(message: _107.QueryDelegationResponse): _107.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _107.QueryDelegationResponseProtoMsg): _107.QueryDelegationResponse;
                toProto(message: _107.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _107.QueryDelegationResponse): _107.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _107.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_107.QueryUnbondingDelegationRequest>): _107.QueryUnbondingDelegationRequest;
                fromAmino(object: _107.QueryUnbondingDelegationRequestAmino): _107.QueryUnbondingDelegationRequest;
                toAmino(message: _107.QueryUnbondingDelegationRequest): _107.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _107.QueryUnbondingDelegationRequestAminoMsg): _107.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _107.QueryUnbondingDelegationRequest): _107.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _107.QueryUnbondingDelegationRequestProtoMsg): _107.QueryUnbondingDelegationRequest;
                toProto(message: _107.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _107.QueryUnbondingDelegationRequest): _107.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _107.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_107.QueryUnbondingDelegationResponse>): _107.QueryUnbondingDelegationResponse;
                fromAmino(object: _107.QueryUnbondingDelegationResponseAmino): _107.QueryUnbondingDelegationResponse;
                toAmino(message: _107.QueryUnbondingDelegationResponse): _107.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _107.QueryUnbondingDelegationResponseAminoMsg): _107.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _107.QueryUnbondingDelegationResponse): _107.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _107.QueryUnbondingDelegationResponseProtoMsg): _107.QueryUnbondingDelegationResponse;
                toProto(message: _107.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _107.QueryUnbondingDelegationResponse): _107.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _107.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_107.QueryDelegatorDelegationsRequest>): _107.QueryDelegatorDelegationsRequest;
                fromAmino(object: _107.QueryDelegatorDelegationsRequestAmino): _107.QueryDelegatorDelegationsRequest;
                toAmino(message: _107.QueryDelegatorDelegationsRequest): _107.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _107.QueryDelegatorDelegationsRequestAminoMsg): _107.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _107.QueryDelegatorDelegationsRequest): _107.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _107.QueryDelegatorDelegationsRequestProtoMsg): _107.QueryDelegatorDelegationsRequest;
                toProto(message: _107.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryDelegatorDelegationsRequest): _107.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _107.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_107.QueryDelegatorDelegationsResponse>): _107.QueryDelegatorDelegationsResponse;
                fromAmino(object: _107.QueryDelegatorDelegationsResponseAmino): _107.QueryDelegatorDelegationsResponse;
                toAmino(message: _107.QueryDelegatorDelegationsResponse): _107.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _107.QueryDelegatorDelegationsResponseAminoMsg): _107.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _107.QueryDelegatorDelegationsResponse): _107.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _107.QueryDelegatorDelegationsResponseProtoMsg): _107.QueryDelegatorDelegationsResponse;
                toProto(message: _107.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryDelegatorDelegationsResponse): _107.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _107.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_107.QueryDelegatorUnbondingDelegationsRequest>): _107.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _107.QueryDelegatorUnbondingDelegationsRequestAmino): _107.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _107.QueryDelegatorUnbondingDelegationsRequest): _107.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _107.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _107.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _107.QueryDelegatorUnbondingDelegationsRequest): _107.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _107.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _107.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _107.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryDelegatorUnbondingDelegationsRequest): _107.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _107.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_107.QueryDelegatorUnbondingDelegationsResponse>): _107.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _107.QueryDelegatorUnbondingDelegationsResponseAmino): _107.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _107.QueryDelegatorUnbondingDelegationsResponse): _107.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _107.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _107.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _107.QueryDelegatorUnbondingDelegationsResponse): _107.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _107.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _107.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _107.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryDelegatorUnbondingDelegationsResponse): _107.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _107.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryRedelegationsRequest;
                fromPartial(object: Partial<_107.QueryRedelegationsRequest>): _107.QueryRedelegationsRequest;
                fromAmino(object: _107.QueryRedelegationsRequestAmino): _107.QueryRedelegationsRequest;
                toAmino(message: _107.QueryRedelegationsRequest): _107.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _107.QueryRedelegationsRequestAminoMsg): _107.QueryRedelegationsRequest;
                toAminoMsg(message: _107.QueryRedelegationsRequest): _107.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _107.QueryRedelegationsRequestProtoMsg): _107.QueryRedelegationsRequest;
                toProto(message: _107.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryRedelegationsRequest): _107.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _107.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryRedelegationsResponse;
                fromPartial(object: Partial<_107.QueryRedelegationsResponse>): _107.QueryRedelegationsResponse;
                fromAmino(object: _107.QueryRedelegationsResponseAmino): _107.QueryRedelegationsResponse;
                toAmino(message: _107.QueryRedelegationsResponse): _107.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _107.QueryRedelegationsResponseAminoMsg): _107.QueryRedelegationsResponse;
                toAminoMsg(message: _107.QueryRedelegationsResponse): _107.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _107.QueryRedelegationsResponseProtoMsg): _107.QueryRedelegationsResponse;
                toProto(message: _107.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryRedelegationsResponse): _107.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _107.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_107.QueryDelegatorValidatorsRequest>): _107.QueryDelegatorValidatorsRequest;
                fromAmino(object: _107.QueryDelegatorValidatorsRequestAmino): _107.QueryDelegatorValidatorsRequest;
                toAmino(message: _107.QueryDelegatorValidatorsRequest): _107.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _107.QueryDelegatorValidatorsRequestAminoMsg): _107.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _107.QueryDelegatorValidatorsRequest): _107.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _107.QueryDelegatorValidatorsRequestProtoMsg): _107.QueryDelegatorValidatorsRequest;
                toProto(message: _107.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryDelegatorValidatorsRequest): _107.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _107.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_107.QueryDelegatorValidatorsResponse>): _107.QueryDelegatorValidatorsResponse;
                fromAmino(object: _107.QueryDelegatorValidatorsResponseAmino): _107.QueryDelegatorValidatorsResponse;
                toAmino(message: _107.QueryDelegatorValidatorsResponse): _107.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _107.QueryDelegatorValidatorsResponseAminoMsg): _107.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _107.QueryDelegatorValidatorsResponse): _107.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _107.QueryDelegatorValidatorsResponseProtoMsg): _107.QueryDelegatorValidatorsResponse;
                toProto(message: _107.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryDelegatorValidatorsResponse): _107.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _107.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_107.QueryDelegatorValidatorRequest>): _107.QueryDelegatorValidatorRequest;
                fromAmino(object: _107.QueryDelegatorValidatorRequestAmino): _107.QueryDelegatorValidatorRequest;
                toAmino(message: _107.QueryDelegatorValidatorRequest): _107.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _107.QueryDelegatorValidatorRequestAminoMsg): _107.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _107.QueryDelegatorValidatorRequest): _107.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _107.QueryDelegatorValidatorRequestProtoMsg): _107.QueryDelegatorValidatorRequest;
                toProto(message: _107.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _107.QueryDelegatorValidatorRequest): _107.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _107.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_107.QueryDelegatorValidatorResponse>): _107.QueryDelegatorValidatorResponse;
                fromAmino(object: _107.QueryDelegatorValidatorResponseAmino): _107.QueryDelegatorValidatorResponse;
                toAmino(message: _107.QueryDelegatorValidatorResponse): _107.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _107.QueryDelegatorValidatorResponseAminoMsg): _107.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _107.QueryDelegatorValidatorResponse): _107.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _107.QueryDelegatorValidatorResponseProtoMsg): _107.QueryDelegatorValidatorResponse;
                toProto(message: _107.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _107.QueryDelegatorValidatorResponse): _107.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _107.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_107.QueryHistoricalInfoRequest>): _107.QueryHistoricalInfoRequest;
                fromAmino(object: _107.QueryHistoricalInfoRequestAmino): _107.QueryHistoricalInfoRequest;
                toAmino(message: _107.QueryHistoricalInfoRequest): _107.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _107.QueryHistoricalInfoRequestAminoMsg): _107.QueryHistoricalInfoRequest;
                toAminoMsg(message: _107.QueryHistoricalInfoRequest): _107.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _107.QueryHistoricalInfoRequestProtoMsg): _107.QueryHistoricalInfoRequest;
                toProto(message: _107.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _107.QueryHistoricalInfoRequest): _107.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _107.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_107.QueryHistoricalInfoResponse>): _107.QueryHistoricalInfoResponse;
                fromAmino(object: _107.QueryHistoricalInfoResponseAmino): _107.QueryHistoricalInfoResponse;
                toAmino(message: _107.QueryHistoricalInfoResponse): _107.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _107.QueryHistoricalInfoResponseAminoMsg): _107.QueryHistoricalInfoResponse;
                toAminoMsg(message: _107.QueryHistoricalInfoResponse): _107.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _107.QueryHistoricalInfoResponseProtoMsg): _107.QueryHistoricalInfoResponse;
                toProto(message: _107.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _107.QueryHistoricalInfoResponse): _107.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _107.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _107.QueryPoolRequest;
                fromPartial(_: Partial<_107.QueryPoolRequest>): _107.QueryPoolRequest;
                fromAmino(_: _107.QueryPoolRequestAmino): _107.QueryPoolRequest;
                toAmino(_: _107.QueryPoolRequest): _107.QueryPoolRequestAmino;
                fromAminoMsg(object: _107.QueryPoolRequestAminoMsg): _107.QueryPoolRequest;
                toAminoMsg(message: _107.QueryPoolRequest): _107.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _107.QueryPoolRequestProtoMsg): _107.QueryPoolRequest;
                toProto(message: _107.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _107.QueryPoolRequest): _107.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _107.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryPoolResponse;
                fromPartial(object: Partial<_107.QueryPoolResponse>): _107.QueryPoolResponse;
                fromAmino(object: _107.QueryPoolResponseAmino): _107.QueryPoolResponse;
                toAmino(message: _107.QueryPoolResponse): _107.QueryPoolResponseAmino;
                fromAminoMsg(object: _107.QueryPoolResponseAminoMsg): _107.QueryPoolResponse;
                toAminoMsg(message: _107.QueryPoolResponse): _107.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _107.QueryPoolResponseProtoMsg): _107.QueryPoolResponse;
                toProto(message: _107.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _107.QueryPoolResponse): _107.QueryPoolResponseProtoMsg;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _106.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.LastValidatorPower;
                fromPartial(object: Partial<_106.LastValidatorPower>): _106.LastValidatorPower;
                fromAmino(object: _106.LastValidatorPowerAmino): _106.LastValidatorPower;
                toAmino(message: _106.LastValidatorPower): _106.LastValidatorPowerAmino;
                fromAminoMsg(object: _106.LastValidatorPowerAminoMsg): _106.LastValidatorPower;
                toAminoMsg(message: _106.LastValidatorPower): _106.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _106.LastValidatorPowerProtoMsg): _106.LastValidatorPower;
                toProto(message: _106.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _106.LastValidatorPower): _106.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _105.AuthorizationType;
            authorizationTypeToJSON(object: _105.AuthorizationType): string;
            AuthorizationType: typeof _105.AuthorizationType;
            AuthorizationTypeSDKType: typeof _105.AuthorizationType;
            AuthorizationTypeAmino: typeof _105.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _105.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.StakeAuthorization;
                fromPartial(object: Partial<_105.StakeAuthorization>): _105.StakeAuthorization;
                fromAmino(object: _105.StakeAuthorizationAmino): _105.StakeAuthorization;
                toAmino(message: _105.StakeAuthorization): _105.StakeAuthorizationAmino;
                fromAminoMsg(object: _105.StakeAuthorizationAminoMsg): _105.StakeAuthorization;
                toAminoMsg(message: _105.StakeAuthorization): _105.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _105.StakeAuthorizationProtoMsg): _105.StakeAuthorization;
                toProto(message: _105.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _105.StakeAuthorization): _105.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _105.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.StakeAuthorization_Validators;
                fromPartial(object: Partial<_105.StakeAuthorization_Validators>): _105.StakeAuthorization_Validators;
                fromAmino(object: _105.StakeAuthorization_ValidatorsAmino): _105.StakeAuthorization_Validators;
                toAmino(message: _105.StakeAuthorization_Validators): _105.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _105.StakeAuthorization_ValidatorsAminoMsg): _105.StakeAuthorization_Validators;
                toAminoMsg(message: _105.StakeAuthorization_Validators): _105.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _105.StakeAuthorization_ValidatorsProtoMsg): _105.StakeAuthorization_Validators;
                toProto(message: _105.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _105.StakeAuthorization_Validators): _105.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _110.SignMode;
                signModeToJSON(object: _110.SignMode): string;
                SignMode: typeof _110.SignMode;
                SignModeSDKType: typeof _110.SignMode;
                SignModeAmino: typeof _110.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _110.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _110.SignatureDescriptors;
                    fromPartial(object: Partial<_110.SignatureDescriptors>): _110.SignatureDescriptors;
                    fromAmino(object: _110.SignatureDescriptorsAmino): _110.SignatureDescriptors;
                    toAmino(message: _110.SignatureDescriptors): _110.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _110.SignatureDescriptorsAminoMsg): _110.SignatureDescriptors;
                    toAminoMsg(message: _110.SignatureDescriptors): _110.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _110.SignatureDescriptorsProtoMsg): _110.SignatureDescriptors;
                    toProto(message: _110.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _110.SignatureDescriptors): _110.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _110.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _110.SignatureDescriptor;
                    fromPartial(object: Partial<_110.SignatureDescriptor>): _110.SignatureDescriptor;
                    fromAmino(object: _110.SignatureDescriptorAmino): _110.SignatureDescriptor;
                    toAmino(message: _110.SignatureDescriptor): _110.SignatureDescriptorAmino;
                    fromAminoMsg(object: _110.SignatureDescriptorAminoMsg): _110.SignatureDescriptor;
                    toAminoMsg(message: _110.SignatureDescriptor): _110.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _110.SignatureDescriptorProtoMsg): _110.SignatureDescriptor;
                    toProto(message: _110.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _110.SignatureDescriptor): _110.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _110.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _110.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_110.SignatureDescriptor_Data>): _110.SignatureDescriptor_Data;
                    fromAmino(object: _110.SignatureDescriptor_DataAmino): _110.SignatureDescriptor_Data;
                    toAmino(message: _110.SignatureDescriptor_Data): _110.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _110.SignatureDescriptor_DataAminoMsg): _110.SignatureDescriptor_Data;
                    toAminoMsg(message: _110.SignatureDescriptor_Data): _110.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _110.SignatureDescriptor_DataProtoMsg): _110.SignatureDescriptor_Data;
                    toProto(message: _110.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _110.SignatureDescriptor_Data): _110.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _110.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _110.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_110.SignatureDescriptor_Data_Single>): _110.SignatureDescriptor_Data_Single;
                    fromAmino(object: _110.SignatureDescriptor_Data_SingleAmino): _110.SignatureDescriptor_Data_Single;
                    toAmino(message: _110.SignatureDescriptor_Data_Single): _110.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _110.SignatureDescriptor_Data_SingleAminoMsg): _110.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _110.SignatureDescriptor_Data_Single): _110.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _110.SignatureDescriptor_Data_SingleProtoMsg): _110.SignatureDescriptor_Data_Single;
                    toProto(message: _110.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _110.SignatureDescriptor_Data_Single): _110.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _110.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _110.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_110.SignatureDescriptor_Data_Multi>): _110.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _110.SignatureDescriptor_Data_MultiAmino): _110.SignatureDescriptor_Data_Multi;
                    toAmino(message: _110.SignatureDescriptor_Data_Multi): _110.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _110.SignatureDescriptor_Data_MultiAminoMsg): _110.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _110.SignatureDescriptor_Data_Multi): _110.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _110.SignatureDescriptor_Data_MultiProtoMsg): _110.SignatureDescriptor_Data_Multi;
                    toProto(message: _110.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _110.SignatureDescriptor_Data_Multi): _110.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _187.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _111.SimulateRequest): Promise<_111.SimulateResponse>;
                getTx(request: _111.GetTxRequest): Promise<_111.GetTxResponse>;
                broadcastTx(request: _111.BroadcastTxRequest): Promise<_111.BroadcastTxResponse>;
                getTxsEvent(request: _111.GetTxsEventRequest): Promise<_111.GetTxsEventResponse>;
                getBlockWithTxs(request: _111.GetBlockWithTxsRequest): Promise<_111.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _172.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _112.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.Tx;
                fromPartial(object: Partial<_112.Tx>): _112.Tx;
                fromAmino(object: _112.TxAmino): _112.Tx;
                toAmino(message: _112.Tx): _112.TxAmino;
                fromAminoMsg(object: _112.TxAminoMsg): _112.Tx;
                toAminoMsg(message: _112.Tx): _112.TxAminoMsg;
                fromProtoMsg(message: _112.TxProtoMsg): _112.Tx;
                toProto(message: _112.Tx): Uint8Array;
                toProtoMsg(message: _112.Tx): _112.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _112.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.TxRaw;
                fromPartial(object: Partial<_112.TxRaw>): _112.TxRaw;
                fromAmino(object: _112.TxRawAmino): _112.TxRaw;
                toAmino(message: _112.TxRaw): _112.TxRawAmino;
                fromAminoMsg(object: _112.TxRawAminoMsg): _112.TxRaw;
                toAminoMsg(message: _112.TxRaw): _112.TxRawAminoMsg;
                fromProtoMsg(message: _112.TxRawProtoMsg): _112.TxRaw;
                toProto(message: _112.TxRaw): Uint8Array;
                toProtoMsg(message: _112.TxRaw): _112.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _112.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.SignDoc;
                fromPartial(object: Partial<_112.SignDoc>): _112.SignDoc;
                fromAmino(object: _112.SignDocAmino): _112.SignDoc;
                toAmino(message: _112.SignDoc): _112.SignDocAmino;
                fromAminoMsg(object: _112.SignDocAminoMsg): _112.SignDoc;
                toAminoMsg(message: _112.SignDoc): _112.SignDocAminoMsg;
                fromProtoMsg(message: _112.SignDocProtoMsg): _112.SignDoc;
                toProto(message: _112.SignDoc): Uint8Array;
                toProtoMsg(message: _112.SignDoc): _112.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _112.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.TxBody;
                fromPartial(object: Partial<_112.TxBody>): _112.TxBody;
                fromAmino(object: _112.TxBodyAmino): _112.TxBody;
                toAmino(message: _112.TxBody): _112.TxBodyAmino;
                fromAminoMsg(object: _112.TxBodyAminoMsg): _112.TxBody;
                toAminoMsg(message: _112.TxBody): _112.TxBodyAminoMsg;
                fromProtoMsg(message: _112.TxBodyProtoMsg): _112.TxBody;
                toProto(message: _112.TxBody): Uint8Array;
                toProtoMsg(message: _112.TxBody): _112.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _112.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.AuthInfo;
                fromPartial(object: Partial<_112.AuthInfo>): _112.AuthInfo;
                fromAmino(object: _112.AuthInfoAmino): _112.AuthInfo;
                toAmino(message: _112.AuthInfo): _112.AuthInfoAmino;
                fromAminoMsg(object: _112.AuthInfoAminoMsg): _112.AuthInfo;
                toAminoMsg(message: _112.AuthInfo): _112.AuthInfoAminoMsg;
                fromProtoMsg(message: _112.AuthInfoProtoMsg): _112.AuthInfo;
                toProto(message: _112.AuthInfo): Uint8Array;
                toProtoMsg(message: _112.AuthInfo): _112.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _112.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.SignerInfo;
                fromPartial(object: Partial<_112.SignerInfo>): _112.SignerInfo;
                fromAmino(object: _112.SignerInfoAmino): _112.SignerInfo;
                toAmino(message: _112.SignerInfo): _112.SignerInfoAmino;
                fromAminoMsg(object: _112.SignerInfoAminoMsg): _112.SignerInfo;
                toAminoMsg(message: _112.SignerInfo): _112.SignerInfoAminoMsg;
                fromProtoMsg(message: _112.SignerInfoProtoMsg): _112.SignerInfo;
                toProto(message: _112.SignerInfo): Uint8Array;
                toProtoMsg(message: _112.SignerInfo): _112.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _112.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.ModeInfo;
                fromPartial(object: Partial<_112.ModeInfo>): _112.ModeInfo;
                fromAmino(object: _112.ModeInfoAmino): _112.ModeInfo;
                toAmino(message: _112.ModeInfo): _112.ModeInfoAmino;
                fromAminoMsg(object: _112.ModeInfoAminoMsg): _112.ModeInfo;
                toAminoMsg(message: _112.ModeInfo): _112.ModeInfoAminoMsg;
                fromProtoMsg(message: _112.ModeInfoProtoMsg): _112.ModeInfo;
                toProto(message: _112.ModeInfo): Uint8Array;
                toProtoMsg(message: _112.ModeInfo): _112.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _112.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.ModeInfo_Single;
                fromPartial(object: Partial<_112.ModeInfo_Single>): _112.ModeInfo_Single;
                fromAmino(object: _112.ModeInfo_SingleAmino): _112.ModeInfo_Single;
                toAmino(message: _112.ModeInfo_Single): _112.ModeInfo_SingleAmino;
                fromAminoMsg(object: _112.ModeInfo_SingleAminoMsg): _112.ModeInfo_Single;
                toAminoMsg(message: _112.ModeInfo_Single): _112.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _112.ModeInfo_SingleProtoMsg): _112.ModeInfo_Single;
                toProto(message: _112.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _112.ModeInfo_Single): _112.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _112.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.ModeInfo_Multi;
                fromPartial(object: Partial<_112.ModeInfo_Multi>): _112.ModeInfo_Multi;
                fromAmino(object: _112.ModeInfo_MultiAmino): _112.ModeInfo_Multi;
                toAmino(message: _112.ModeInfo_Multi): _112.ModeInfo_MultiAmino;
                fromAminoMsg(object: _112.ModeInfo_MultiAminoMsg): _112.ModeInfo_Multi;
                toAminoMsg(message: _112.ModeInfo_Multi): _112.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _112.ModeInfo_MultiProtoMsg): _112.ModeInfo_Multi;
                toProto(message: _112.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _112.ModeInfo_Multi): _112.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _112.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.Fee;
                fromPartial(object: Partial<_112.Fee>): _112.Fee;
                fromAmino(object: _112.FeeAmino): _112.Fee;
                toAmino(message: _112.Fee): _112.FeeAmino;
                fromAminoMsg(object: _112.FeeAminoMsg): _112.Fee;
                toAminoMsg(message: _112.Fee): _112.FeeAminoMsg;
                fromProtoMsg(message: _112.FeeProtoMsg): _112.Fee;
                toProto(message: _112.Fee): Uint8Array;
                toProtoMsg(message: _112.Fee): _112.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _111.OrderBy;
            orderByToJSON(object: _111.OrderBy): string;
            broadcastModeFromJSON(object: any): _111.BroadcastMode;
            broadcastModeToJSON(object: _111.BroadcastMode): string;
            OrderBy: typeof _111.OrderBy;
            OrderBySDKType: typeof _111.OrderBy;
            OrderByAmino: typeof _111.OrderBy;
            BroadcastMode: typeof _111.BroadcastMode;
            BroadcastModeSDKType: typeof _111.BroadcastMode;
            BroadcastModeAmino: typeof _111.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _111.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.GetTxsEventRequest;
                fromPartial(object: Partial<_111.GetTxsEventRequest>): _111.GetTxsEventRequest;
                fromAmino(object: _111.GetTxsEventRequestAmino): _111.GetTxsEventRequest;
                toAmino(message: _111.GetTxsEventRequest): _111.GetTxsEventRequestAmino;
                fromAminoMsg(object: _111.GetTxsEventRequestAminoMsg): _111.GetTxsEventRequest;
                toAminoMsg(message: _111.GetTxsEventRequest): _111.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _111.GetTxsEventRequestProtoMsg): _111.GetTxsEventRequest;
                toProto(message: _111.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _111.GetTxsEventRequest): _111.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _111.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.GetTxsEventResponse;
                fromPartial(object: Partial<_111.GetTxsEventResponse>): _111.GetTxsEventResponse;
                fromAmino(object: _111.GetTxsEventResponseAmino): _111.GetTxsEventResponse;
                toAmino(message: _111.GetTxsEventResponse): _111.GetTxsEventResponseAmino;
                fromAminoMsg(object: _111.GetTxsEventResponseAminoMsg): _111.GetTxsEventResponse;
                toAminoMsg(message: _111.GetTxsEventResponse): _111.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _111.GetTxsEventResponseProtoMsg): _111.GetTxsEventResponse;
                toProto(message: _111.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _111.GetTxsEventResponse): _111.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _111.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.BroadcastTxRequest;
                fromPartial(object: Partial<_111.BroadcastTxRequest>): _111.BroadcastTxRequest;
                fromAmino(object: _111.BroadcastTxRequestAmino): _111.BroadcastTxRequest;
                toAmino(message: _111.BroadcastTxRequest): _111.BroadcastTxRequestAmino;
                fromAminoMsg(object: _111.BroadcastTxRequestAminoMsg): _111.BroadcastTxRequest;
                toAminoMsg(message: _111.BroadcastTxRequest): _111.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _111.BroadcastTxRequestProtoMsg): _111.BroadcastTxRequest;
                toProto(message: _111.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _111.BroadcastTxRequest): _111.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _111.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.BroadcastTxResponse;
                fromPartial(object: Partial<_111.BroadcastTxResponse>): _111.BroadcastTxResponse;
                fromAmino(object: _111.BroadcastTxResponseAmino): _111.BroadcastTxResponse;
                toAmino(message: _111.BroadcastTxResponse): _111.BroadcastTxResponseAmino;
                fromAminoMsg(object: _111.BroadcastTxResponseAminoMsg): _111.BroadcastTxResponse;
                toAminoMsg(message: _111.BroadcastTxResponse): _111.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _111.BroadcastTxResponseProtoMsg): _111.BroadcastTxResponse;
                toProto(message: _111.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _111.BroadcastTxResponse): _111.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _111.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.SimulateRequest;
                fromPartial(object: Partial<_111.SimulateRequest>): _111.SimulateRequest;
                fromAmino(object: _111.SimulateRequestAmino): _111.SimulateRequest;
                toAmino(message: _111.SimulateRequest): _111.SimulateRequestAmino;
                fromAminoMsg(object: _111.SimulateRequestAminoMsg): _111.SimulateRequest;
                toAminoMsg(message: _111.SimulateRequest): _111.SimulateRequestAminoMsg;
                fromProtoMsg(message: _111.SimulateRequestProtoMsg): _111.SimulateRequest;
                toProto(message: _111.SimulateRequest): Uint8Array;
                toProtoMsg(message: _111.SimulateRequest): _111.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _111.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.SimulateResponse;
                fromPartial(object: Partial<_111.SimulateResponse>): _111.SimulateResponse;
                fromAmino(object: _111.SimulateResponseAmino): _111.SimulateResponse;
                toAmino(message: _111.SimulateResponse): _111.SimulateResponseAmino;
                fromAminoMsg(object: _111.SimulateResponseAminoMsg): _111.SimulateResponse;
                toAminoMsg(message: _111.SimulateResponse): _111.SimulateResponseAminoMsg;
                fromProtoMsg(message: _111.SimulateResponseProtoMsg): _111.SimulateResponse;
                toProto(message: _111.SimulateResponse): Uint8Array;
                toProtoMsg(message: _111.SimulateResponse): _111.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _111.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.GetTxRequest;
                fromPartial(object: Partial<_111.GetTxRequest>): _111.GetTxRequest;
                fromAmino(object: _111.GetTxRequestAmino): _111.GetTxRequest;
                toAmino(message: _111.GetTxRequest): _111.GetTxRequestAmino;
                fromAminoMsg(object: _111.GetTxRequestAminoMsg): _111.GetTxRequest;
                toAminoMsg(message: _111.GetTxRequest): _111.GetTxRequestAminoMsg;
                fromProtoMsg(message: _111.GetTxRequestProtoMsg): _111.GetTxRequest;
                toProto(message: _111.GetTxRequest): Uint8Array;
                toProtoMsg(message: _111.GetTxRequest): _111.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _111.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.GetTxResponse;
                fromPartial(object: Partial<_111.GetTxResponse>): _111.GetTxResponse;
                fromAmino(object: _111.GetTxResponseAmino): _111.GetTxResponse;
                toAmino(message: _111.GetTxResponse): _111.GetTxResponseAmino;
                fromAminoMsg(object: _111.GetTxResponseAminoMsg): _111.GetTxResponse;
                toAminoMsg(message: _111.GetTxResponse): _111.GetTxResponseAminoMsg;
                fromProtoMsg(message: _111.GetTxResponseProtoMsg): _111.GetTxResponse;
                toProto(message: _111.GetTxResponse): Uint8Array;
                toProtoMsg(message: _111.GetTxResponse): _111.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _111.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_111.GetBlockWithTxsRequest>): _111.GetBlockWithTxsRequest;
                fromAmino(object: _111.GetBlockWithTxsRequestAmino): _111.GetBlockWithTxsRequest;
                toAmino(message: _111.GetBlockWithTxsRequest): _111.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _111.GetBlockWithTxsRequestAminoMsg): _111.GetBlockWithTxsRequest;
                toAminoMsg(message: _111.GetBlockWithTxsRequest): _111.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _111.GetBlockWithTxsRequestProtoMsg): _111.GetBlockWithTxsRequest;
                toProto(message: _111.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _111.GetBlockWithTxsRequest): _111.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _111.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_111.GetBlockWithTxsResponse>): _111.GetBlockWithTxsResponse;
                fromAmino(object: _111.GetBlockWithTxsResponseAmino): _111.GetBlockWithTxsResponse;
                toAmino(message: _111.GetBlockWithTxsResponse): _111.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _111.GetBlockWithTxsResponseAminoMsg): _111.GetBlockWithTxsResponse;
                toAminoMsg(message: _111.GetBlockWithTxsResponse): _111.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _111.GetBlockWithTxsResponseProtoMsg): _111.GetBlockWithTxsResponse;
                toProto(message: _111.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _111.GetBlockWithTxsResponse): _111.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _188.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _113.QueryCurrentPlanRequest): Promise<_113.QueryCurrentPlanResponse>;
                appliedPlan(request: _113.QueryAppliedPlanRequest): Promise<_113.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _113.QueryUpgradedConsensusStateRequest): Promise<_113.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _113.QueryModuleVersionsRequest): Promise<_113.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _173.LCDQueryClient;
            Plan: {
                typeUrl: string;
                encode(message: _114.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.Plan;
                fromPartial(object: Partial<_114.Plan>): _114.Plan;
                fromAmino(object: _114.PlanAmino): _114.Plan;
                toAmino(message: _114.Plan): _114.PlanAmino;
                fromAminoMsg(object: _114.PlanAminoMsg): _114.Plan;
                toAminoMsg(message: _114.Plan): _114.PlanAminoMsg;
                fromProtoMsg(message: _114.PlanProtoMsg): _114.Plan;
                toProto(message: _114.Plan): Uint8Array;
                toProtoMsg(message: _114.Plan): _114.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _114.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_114.SoftwareUpgradeProposal>): _114.SoftwareUpgradeProposal;
                fromAmino(object: _114.SoftwareUpgradeProposalAmino): _114.SoftwareUpgradeProposal;
                toAmino(message: _114.SoftwareUpgradeProposal): _114.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _114.SoftwareUpgradeProposalAminoMsg): _114.SoftwareUpgradeProposal;
                toAminoMsg(message: _114.SoftwareUpgradeProposal): _114.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _114.SoftwareUpgradeProposalProtoMsg): _114.SoftwareUpgradeProposal;
                toProto(message: _114.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _114.SoftwareUpgradeProposal): _114.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _114.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_114.CancelSoftwareUpgradeProposal>): _114.CancelSoftwareUpgradeProposal;
                fromAmino(object: _114.CancelSoftwareUpgradeProposalAmino): _114.CancelSoftwareUpgradeProposal;
                toAmino(message: _114.CancelSoftwareUpgradeProposal): _114.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _114.CancelSoftwareUpgradeProposalAminoMsg): _114.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _114.CancelSoftwareUpgradeProposal): _114.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _114.CancelSoftwareUpgradeProposalProtoMsg): _114.CancelSoftwareUpgradeProposal;
                toProto(message: _114.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _114.CancelSoftwareUpgradeProposal): _114.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _114.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.ModuleVersion;
                fromPartial(object: Partial<_114.ModuleVersion>): _114.ModuleVersion;
                fromAmino(object: _114.ModuleVersionAmino): _114.ModuleVersion;
                toAmino(message: _114.ModuleVersion): _114.ModuleVersionAmino;
                fromAminoMsg(object: _114.ModuleVersionAminoMsg): _114.ModuleVersion;
                toAminoMsg(message: _114.ModuleVersion): _114.ModuleVersionAminoMsg;
                fromProtoMsg(message: _114.ModuleVersionProtoMsg): _114.ModuleVersion;
                toProto(message: _114.ModuleVersion): Uint8Array;
                toProtoMsg(message: _114.ModuleVersion): _114.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _113.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _113.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_113.QueryCurrentPlanRequest>): _113.QueryCurrentPlanRequest;
                fromAmino(_: _113.QueryCurrentPlanRequestAmino): _113.QueryCurrentPlanRequest;
                toAmino(_: _113.QueryCurrentPlanRequest): _113.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _113.QueryCurrentPlanRequestAminoMsg): _113.QueryCurrentPlanRequest;
                toAminoMsg(message: _113.QueryCurrentPlanRequest): _113.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _113.QueryCurrentPlanRequestProtoMsg): _113.QueryCurrentPlanRequest;
                toProto(message: _113.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _113.QueryCurrentPlanRequest): _113.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _113.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_113.QueryCurrentPlanResponse>): _113.QueryCurrentPlanResponse;
                fromAmino(object: _113.QueryCurrentPlanResponseAmino): _113.QueryCurrentPlanResponse;
                toAmino(message: _113.QueryCurrentPlanResponse): _113.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _113.QueryCurrentPlanResponseAminoMsg): _113.QueryCurrentPlanResponse;
                toAminoMsg(message: _113.QueryCurrentPlanResponse): _113.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _113.QueryCurrentPlanResponseProtoMsg): _113.QueryCurrentPlanResponse;
                toProto(message: _113.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _113.QueryCurrentPlanResponse): _113.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _113.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_113.QueryAppliedPlanRequest>): _113.QueryAppliedPlanRequest;
                fromAmino(object: _113.QueryAppliedPlanRequestAmino): _113.QueryAppliedPlanRequest;
                toAmino(message: _113.QueryAppliedPlanRequest): _113.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _113.QueryAppliedPlanRequestAminoMsg): _113.QueryAppliedPlanRequest;
                toAminoMsg(message: _113.QueryAppliedPlanRequest): _113.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _113.QueryAppliedPlanRequestProtoMsg): _113.QueryAppliedPlanRequest;
                toProto(message: _113.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _113.QueryAppliedPlanRequest): _113.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _113.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_113.QueryAppliedPlanResponse>): _113.QueryAppliedPlanResponse;
                fromAmino(object: _113.QueryAppliedPlanResponseAmino): _113.QueryAppliedPlanResponse;
                toAmino(message: _113.QueryAppliedPlanResponse): _113.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _113.QueryAppliedPlanResponseAminoMsg): _113.QueryAppliedPlanResponse;
                toAminoMsg(message: _113.QueryAppliedPlanResponse): _113.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _113.QueryAppliedPlanResponseProtoMsg): _113.QueryAppliedPlanResponse;
                toProto(message: _113.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _113.QueryAppliedPlanResponse): _113.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _113.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_113.QueryUpgradedConsensusStateRequest>): _113.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _113.QueryUpgradedConsensusStateRequestAmino): _113.QueryUpgradedConsensusStateRequest;
                toAmino(message: _113.QueryUpgradedConsensusStateRequest): _113.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _113.QueryUpgradedConsensusStateRequestAminoMsg): _113.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _113.QueryUpgradedConsensusStateRequest): _113.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _113.QueryUpgradedConsensusStateRequestProtoMsg): _113.QueryUpgradedConsensusStateRequest;
                toProto(message: _113.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _113.QueryUpgradedConsensusStateRequest): _113.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _113.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_113.QueryUpgradedConsensusStateResponse>): _113.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _113.QueryUpgradedConsensusStateResponseAmino): _113.QueryUpgradedConsensusStateResponse;
                toAmino(message: _113.QueryUpgradedConsensusStateResponse): _113.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _113.QueryUpgradedConsensusStateResponseAminoMsg): _113.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _113.QueryUpgradedConsensusStateResponse): _113.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _113.QueryUpgradedConsensusStateResponseProtoMsg): _113.QueryUpgradedConsensusStateResponse;
                toProto(message: _113.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _113.QueryUpgradedConsensusStateResponse): _113.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _113.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_113.QueryModuleVersionsRequest>): _113.QueryModuleVersionsRequest;
                fromAmino(object: _113.QueryModuleVersionsRequestAmino): _113.QueryModuleVersionsRequest;
                toAmino(message: _113.QueryModuleVersionsRequest): _113.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _113.QueryModuleVersionsRequestAminoMsg): _113.QueryModuleVersionsRequest;
                toAminoMsg(message: _113.QueryModuleVersionsRequest): _113.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _113.QueryModuleVersionsRequestProtoMsg): _113.QueryModuleVersionsRequest;
                toProto(message: _113.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _113.QueryModuleVersionsRequest): _113.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _113.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_113.QueryModuleVersionsResponse>): _113.QueryModuleVersionsResponse;
                fromAmino(object: _113.QueryModuleVersionsResponseAmino): _113.QueryModuleVersionsResponse;
                toAmino(message: _113.QueryModuleVersionsResponse): _113.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _113.QueryModuleVersionsResponseAminoMsg): _113.QueryModuleVersionsResponse;
                toAminoMsg(message: _113.QueryModuleVersionsResponse): _113.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _113.QueryModuleVersionsResponseProtoMsg): _113.QueryModuleVersionsResponse;
                toProto(message: _113.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _113.QueryModuleVersionsResponse): _113.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _198.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _115.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _115.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _115.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _115.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _115.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _115.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _115.MsgCreateVestingAccount) => _115.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _115.MsgCreateVestingAccountAmino) => _115.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _116.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.BaseVestingAccount;
                fromPartial(object: Partial<_116.BaseVestingAccount>): _116.BaseVestingAccount;
                fromAmino(object: _116.BaseVestingAccountAmino): _116.BaseVestingAccount;
                toAmino(message: _116.BaseVestingAccount): _116.BaseVestingAccountAmino;
                fromAminoMsg(object: _116.BaseVestingAccountAminoMsg): _116.BaseVestingAccount;
                toAminoMsg(message: _116.BaseVestingAccount): _116.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _116.BaseVestingAccountProtoMsg): _116.BaseVestingAccount;
                toProto(message: _116.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _116.BaseVestingAccount): _116.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _116.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.ContinuousVestingAccount;
                fromPartial(object: Partial<_116.ContinuousVestingAccount>): _116.ContinuousVestingAccount;
                fromAmino(object: _116.ContinuousVestingAccountAmino): _116.ContinuousVestingAccount;
                toAmino(message: _116.ContinuousVestingAccount): _116.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _116.ContinuousVestingAccountAminoMsg): _116.ContinuousVestingAccount;
                toAminoMsg(message: _116.ContinuousVestingAccount): _116.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _116.ContinuousVestingAccountProtoMsg): _116.ContinuousVestingAccount;
                toProto(message: _116.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _116.ContinuousVestingAccount): _116.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _116.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.DelayedVestingAccount;
                fromPartial(object: Partial<_116.DelayedVestingAccount>): _116.DelayedVestingAccount;
                fromAmino(object: _116.DelayedVestingAccountAmino): _116.DelayedVestingAccount;
                toAmino(message: _116.DelayedVestingAccount): _116.DelayedVestingAccountAmino;
                fromAminoMsg(object: _116.DelayedVestingAccountAminoMsg): _116.DelayedVestingAccount;
                toAminoMsg(message: _116.DelayedVestingAccount): _116.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _116.DelayedVestingAccountProtoMsg): _116.DelayedVestingAccount;
                toProto(message: _116.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _116.DelayedVestingAccount): _116.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _116.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.Period;
                fromPartial(object: Partial<_116.Period>): _116.Period;
                fromAmino(object: _116.PeriodAmino): _116.Period;
                toAmino(message: _116.Period): _116.PeriodAmino;
                fromAminoMsg(object: _116.PeriodAminoMsg): _116.Period;
                toAminoMsg(message: _116.Period): _116.PeriodAminoMsg;
                fromProtoMsg(message: _116.PeriodProtoMsg): _116.Period;
                toProto(message: _116.Period): Uint8Array;
                toProtoMsg(message: _116.Period): _116.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _116.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.PeriodicVestingAccount;
                fromPartial(object: Partial<_116.PeriodicVestingAccount>): _116.PeriodicVestingAccount;
                fromAmino(object: _116.PeriodicVestingAccountAmino): _116.PeriodicVestingAccount;
                toAmino(message: _116.PeriodicVestingAccount): _116.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _116.PeriodicVestingAccountAminoMsg): _116.PeriodicVestingAccount;
                toAminoMsg(message: _116.PeriodicVestingAccount): _116.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _116.PeriodicVestingAccountProtoMsg): _116.PeriodicVestingAccount;
                toProto(message: _116.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _116.PeriodicVestingAccount): _116.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _116.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.PermanentLockedAccount;
                fromPartial(object: Partial<_116.PermanentLockedAccount>): _116.PermanentLockedAccount;
                fromAmino(object: _116.PermanentLockedAccountAmino): _116.PermanentLockedAccount;
                toAmino(message: _116.PermanentLockedAccount): _116.PermanentLockedAccountAmino;
                fromAminoMsg(object: _116.PermanentLockedAccountAminoMsg): _116.PermanentLockedAccount;
                toAminoMsg(message: _116.PermanentLockedAccount): _116.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _116.PermanentLockedAccountProtoMsg): _116.PermanentLockedAccount;
                toProto(message: _116.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _116.PermanentLockedAccount): _116.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _115.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.MsgCreateVestingAccount;
                fromPartial(object: Partial<_115.MsgCreateVestingAccount>): _115.MsgCreateVestingAccount;
                fromAmino(object: _115.MsgCreateVestingAccountAmino): _115.MsgCreateVestingAccount;
                toAmino(message: _115.MsgCreateVestingAccount): _115.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _115.MsgCreateVestingAccountAminoMsg): _115.MsgCreateVestingAccount;
                toAminoMsg(message: _115.MsgCreateVestingAccount): _115.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _115.MsgCreateVestingAccountProtoMsg): _115.MsgCreateVestingAccount;
                toProto(message: _115.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _115.MsgCreateVestingAccount): _115.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _115.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _115.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_115.MsgCreateVestingAccountResponse>): _115.MsgCreateVestingAccountResponse;
                fromAmino(_: _115.MsgCreateVestingAccountResponseAmino): _115.MsgCreateVestingAccountResponse;
                toAmino(_: _115.MsgCreateVestingAccountResponse): _115.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _115.MsgCreateVestingAccountResponseAminoMsg): _115.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _115.MsgCreateVestingAccountResponse): _115.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _115.MsgCreateVestingAccountResponseProtoMsg): _115.MsgCreateVestingAccountResponse;
                toProto(message: _115.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _115.MsgCreateVestingAccountResponse): _115.MsgCreateVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _189.MsgClientImpl;
                };
                bank: {
                    v1beta1: _190.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _191.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _192.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _193.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _194.MsgClientImpl;
                };
                gov: {
                    v1beta1: _195.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _196.MsgClientImpl;
                };
                staking: {
                    v1beta1: _197.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _198.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _49.QueryAccountsRequest): Promise<_49.QueryAccountsResponse>;
                        account(request: _49.QueryAccountRequest): Promise<_49.QueryAccountResponse>;
                        params(request?: _49.QueryParamsRequest): Promise<_49.QueryParamsResponse>;
                        moduleAccountByName(request: _49.QueryModuleAccountByNameRequest): Promise<_49.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _53.QueryGrantsRequest): Promise<_53.QueryGrantsResponse>;
                        granterGrants(request: _53.QueryGranterGrantsRequest): Promise<_53.QueryGranterGrantsResponse>;
                        granteeGrants(request: _53.QueryGranteeGrantsRequest): Promise<_53.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _58.QueryBalanceRequest): Promise<_58.QueryBalanceResponse>;
                        allBalances(request: _58.QueryAllBalancesRequest): Promise<_58.QueryAllBalancesResponse>;
                        spendableBalances(request: _58.QuerySpendableBalancesRequest): Promise<_58.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _58.QueryTotalSupplyRequest): Promise<_58.QueryTotalSupplyResponse>;
                        supplyOf(request: _58.QuerySupplyOfRequest): Promise<_58.QuerySupplyOfResponse>;
                        params(request?: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                        denomMetadata(request: _58.QueryDenomMetadataRequest): Promise<_58.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _58.QueryDenomsMetadataRequest): Promise<_58.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _62.ConfigRequest): Promise<_62.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _69.GetNodeInfoRequest): Promise<_69.GetNodeInfoResponse>;
                            getSyncing(request?: _69.GetSyncingRequest): Promise<_69.GetSyncingResponse>;
                            getLatestBlock(request?: _69.GetLatestBlockRequest): Promise<_69.GetLatestBlockResponse>;
                            getBlockByHeight(request: _69.GetBlockByHeightRequest): Promise<_69.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _69.GetLatestValidatorSetRequest): Promise<_69.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _69.GetValidatorSetByHeightRequest): Promise<_69.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _81.QueryValidatorOutstandingRewardsRequest): Promise<_81.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _81.QueryValidatorCommissionRequest): Promise<_81.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _81.QueryValidatorSlashesRequest): Promise<_81.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _81.QueryDelegationRewardsRequest): Promise<_81.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _81.QueryDelegationTotalRewardsRequest): Promise<_81.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _81.QueryDelegatorValidatorsRequest): Promise<_81.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _81.QueryDelegatorWithdrawAddressRequest): Promise<_81.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _81.QueryCommunityPoolRequest): Promise<_81.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _85.QueryEvidenceRequest): Promise<_85.QueryEvidenceResponse>;
                        allEvidence(request?: _85.QueryAllEvidenceRequest): Promise<_85.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _89.QueryAllowanceRequest): Promise<_89.QueryAllowanceResponse>;
                        allowances(request: _89.QueryAllowancesRequest): Promise<_89.QueryAllowancesResponse>;
                        allowancesByGranter(request: _89.QueryAllowancesByGranterRequest): Promise<_89.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _94.QueryProposalRequest): Promise<_94.QueryProposalResponse>;
                        proposals(request: _94.QueryProposalsRequest): Promise<_94.QueryProposalsResponse>;
                        vote(request: _94.QueryVoteRequest): Promise<_94.QueryVoteResponse>;
                        votes(request: _94.QueryVotesRequest): Promise<_94.QueryVotesResponse>;
                        params(request: _94.QueryParamsRequest): Promise<_94.QueryParamsResponse>;
                        deposit(request: _94.QueryDepositRequest): Promise<_94.QueryDepositResponse>;
                        deposits(request: _94.QueryDepositsRequest): Promise<_94.QueryDepositsResponse>;
                        tallyResult(request: _94.QueryTallyResultRequest): Promise<_94.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                        inflation(request?: _98.QueryInflationRequest): Promise<_98.QueryInflationResponse>;
                        annualProvisions(request?: _98.QueryAnnualProvisionsRequest): Promise<_98.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _100.QueryParamsRequest): Promise<_100.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _102.QueryParamsRequest): Promise<_102.QueryParamsResponse>;
                        signingInfo(request: _102.QuerySigningInfoRequest): Promise<_102.QuerySigningInfoResponse>;
                        signingInfos(request?: _102.QuerySigningInfosRequest): Promise<_102.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _107.QueryValidatorsRequest): Promise<_107.QueryValidatorsResponse>;
                        validator(request: _107.QueryValidatorRequest): Promise<_107.QueryValidatorResponse>;
                        validatorDelegations(request: _107.QueryValidatorDelegationsRequest): Promise<_107.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _107.QueryValidatorUnbondingDelegationsRequest): Promise<_107.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _107.QueryDelegationRequest): Promise<_107.QueryDelegationResponse>;
                        unbondingDelegation(request: _107.QueryUnbondingDelegationRequest): Promise<_107.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _107.QueryDelegatorDelegationsRequest): Promise<_107.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _107.QueryDelegatorUnbondingDelegationsRequest): Promise<_107.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _107.QueryRedelegationsRequest): Promise<_107.QueryRedelegationsResponse>;
                        delegatorValidators(request: _107.QueryDelegatorValidatorsRequest): Promise<_107.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _107.QueryDelegatorValidatorRequest): Promise<_107.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _107.QueryHistoricalInfoRequest): Promise<_107.QueryHistoricalInfoResponse>;
                        pool(request?: _107.QueryPoolRequest): Promise<_107.QueryPoolResponse>;
                        params(request?: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _111.SimulateRequest): Promise<_111.SimulateResponse>;
                        getTx(request: _111.GetTxRequest): Promise<_111.GetTxResponse>;
                        broadcastTx(request: _111.BroadcastTxRequest): Promise<_111.BroadcastTxResponse>;
                        getTxsEvent(request: _111.GetTxsEventRequest): Promise<_111.GetTxsEventResponse>;
                        getBlockWithTxs(request: _111.GetBlockWithTxsRequest): Promise<_111.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _113.QueryCurrentPlanRequest): Promise<_113.QueryCurrentPlanResponse>;
                        appliedPlan(request: _113.QueryAppliedPlanRequest): Promise<_113.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _113.QueryUpgradedConsensusStateRequest): Promise<_113.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _113.QueryModuleVersionsRequest): Promise<_113.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _159.LCDQueryClient;
                };
                authz: {
                    v1beta1: _160.LCDQueryClient;
                };
                bank: {
                    v1beta1: _161.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _162.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _163.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _164.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _165.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _166.LCDQueryClient;
                };
                gov: {
                    v1beta1: _167.LCDQueryClient;
                };
                mint: {
                    v1beta1: _168.LCDQueryClient;
                };
                params: {
                    v1beta1: _169.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _170.LCDQueryClient;
                };
                staking: {
                    v1beta1: _171.LCDQueryClient;
                };
                tx: {
                    v1beta1: _172.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _173.LCDQueryClient;
                };
            };
        }>;
    };
}
