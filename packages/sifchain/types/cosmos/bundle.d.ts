import * as _29 from "./auth/v1beta1/auth";
import * as _30 from "./auth/v1beta1/genesis";
import * as _31 from "./auth/v1beta1/query";
import * as _32 from "./authz/v1beta1/authz";
import * as _33 from "./authz/v1beta1/event";
import * as _34 from "./authz/v1beta1/genesis";
import * as _35 from "./authz/v1beta1/query";
import * as _36 from "./authz/v1beta1/tx";
import * as _37 from "./bank/v1beta1/authz";
import * as _38 from "./bank/v1beta1/bank";
import * as _39 from "./bank/v1beta1/genesis";
import * as _40 from "./bank/v1beta1/query";
import * as _41 from "./bank/v1beta1/tx";
import * as _42 from "./base/abci/v1beta1/abci";
import * as _43 from "./base/kv/v1beta1/kv";
import * as _44 from "./base/node/v1beta1/query";
import * as _45 from "./base/query/v1beta1/pagination";
import * as _46 from "./base/reflection/v1beta1/reflection";
import * as _47 from "./base/reflection/v2alpha1/reflection";
import * as _48 from "./base/snapshots/v1beta1/snapshot";
import * as _49 from "./base/store/v1beta1/commit_info";
import * as _50 from "./base/store/v1beta1/listening";
import * as _51 from "./base/tendermint/v1beta1/query";
import * as _53 from "./base/coin";
import * as _54 from "./capability/v1beta1/capability";
import * as _55 from "./capability/v1beta1/genesis";
import * as _56 from "./crisis/v1beta1/genesis";
import * as _57 from "./crisis/v1beta1/tx";
import * as _58 from "./crypto/ed25519/keys";
import * as _59 from "./crypto/multisig/keys";
import * as _60 from "./crypto/secp256k1/keys";
import * as _61 from "./crypto/secp256r1/keys";
import * as _62 from "./distribution/v1beta1/distribution";
import * as _63 from "./distribution/v1beta1/genesis";
import * as _64 from "./distribution/v1beta1/query";
import * as _65 from "./distribution/v1beta1/tx";
import * as _66 from "./evidence/v1beta1/evidence";
import * as _67 from "./evidence/v1beta1/genesis";
import * as _68 from "./evidence/v1beta1/query";
import * as _69 from "./evidence/v1beta1/tx";
import * as _70 from "./feegrant/v1beta1/feegrant";
import * as _71 from "./feegrant/v1beta1/genesis";
import * as _72 from "./feegrant/v1beta1/query";
import * as _73 from "./feegrant/v1beta1/tx";
import * as _74 from "./genutil/v1beta1/genesis";
import * as _75 from "./gov/v1beta1/genesis";
import * as _76 from "./gov/v1beta1/gov";
import * as _77 from "./gov/v1beta1/query";
import * as _78 from "./gov/v1beta1/tx";
import * as _79 from "./mint/v1beta1/genesis";
import * as _80 from "./mint/v1beta1/mint";
import * as _81 from "./mint/v1beta1/query";
import * as _82 from "./params/v1beta1/params";
import * as _83 from "./params/v1beta1/query";
import * as _84 from "./slashing/v1beta1/genesis";
import * as _85 from "./slashing/v1beta1/query";
import * as _86 from "./slashing/v1beta1/slashing";
import * as _87 from "./slashing/v1beta1/tx";
import * as _88 from "./staking/v1beta1/authz";
import * as _89 from "./staking/v1beta1/genesis";
import * as _90 from "./staking/v1beta1/query";
import * as _91 from "./staking/v1beta1/staking";
import * as _92 from "./staking/v1beta1/tx";
import * as _93 from "./tx/signing/v1beta1/signing";
import * as _94 from "./tx/v1beta1/service";
import * as _95 from "./tx/v1beta1/tx";
import * as _96 from "./upgrade/v1beta1/query";
import * as _97 from "./upgrade/v1beta1/upgrade";
import * as _98 from "./vesting/v1beta1/tx";
import * as _99 from "./vesting/v1beta1/vesting";
import * as _169 from "./auth/v1beta1/query.lcd";
import * as _170 from "./authz/v1beta1/query.lcd";
import * as _171 from "./bank/v1beta1/query.lcd";
import * as _172 from "./base/node/v1beta1/query.lcd";
import * as _173 from "./base/tendermint/v1beta1/query.lcd";
import * as _174 from "./distribution/v1beta1/query.lcd";
import * as _175 from "./evidence/v1beta1/query.lcd";
import * as _176 from "./feegrant/v1beta1/query.lcd";
import * as _177 from "./gov/v1beta1/query.lcd";
import * as _178 from "./mint/v1beta1/query.lcd";
import * as _179 from "./params/v1beta1/query.lcd";
import * as _180 from "./slashing/v1beta1/query.lcd";
import * as _181 from "./staking/v1beta1/query.lcd";
import * as _182 from "./tx/v1beta1/service.lcd";
import * as _183 from "./upgrade/v1beta1/query.lcd";
import * as _184 from "./auth/v1beta1/query.rpc.Query";
import * as _185 from "./authz/v1beta1/query.rpc.Query";
import * as _186 from "./bank/v1beta1/query.rpc.Query";
import * as _187 from "./base/node/v1beta1/query.rpc.Service";
import * as _188 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _189 from "./distribution/v1beta1/query.rpc.Query";
import * as _190 from "./evidence/v1beta1/query.rpc.Query";
import * as _191 from "./feegrant/v1beta1/query.rpc.Query";
import * as _192 from "./gov/v1beta1/query.rpc.Query";
import * as _193 from "./mint/v1beta1/query.rpc.Query";
import * as _194 from "./params/v1beta1/query.rpc.Query";
import * as _195 from "./slashing/v1beta1/query.rpc.Query";
import * as _196 from "./staking/v1beta1/query.rpc.Query";
import * as _197 from "./tx/v1beta1/service.rpc.Service";
import * as _198 from "./upgrade/v1beta1/query.rpc.Query";
import * as _199 from "./authz/v1beta1/tx.rpc.msg";
import * as _200 from "./bank/v1beta1/tx.rpc.msg";
import * as _201 from "./crisis/v1beta1/tx.rpc.msg";
import * as _202 from "./distribution/v1beta1/tx.rpc.msg";
import * as _203 from "./evidence/v1beta1/tx.rpc.msg";
import * as _204 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _205 from "./gov/v1beta1/tx.rpc.msg";
import * as _206 from "./slashing/v1beta1/tx.rpc.msg";
import * as _207 from "./staking/v1beta1/tx.rpc.msg";
import * as _208 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _184.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                accounts(request?: _31.QueryAccountsRequest): Promise<_31.QueryAccountsResponse>;
                account(request: _31.QueryAccountRequest): Promise<_31.QueryAccountResponse>;
                params(request?: _31.QueryParamsRequest): Promise<_31.QueryParamsResponse>;
                moduleAccountByName(request: _31.QueryModuleAccountByNameRequest): Promise<_31.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _169.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _31.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryAccountsRequest;
                fromPartial(object: Partial<_31.QueryAccountsRequest>): _31.QueryAccountsRequest;
                fromAmino(object: _31.QueryAccountsRequestAmino): _31.QueryAccountsRequest;
                toAmino(message: _31.QueryAccountsRequest): _31.QueryAccountsRequestAmino;
                fromAminoMsg(object: _31.QueryAccountsRequestAminoMsg): _31.QueryAccountsRequest;
                toAminoMsg(message: _31.QueryAccountsRequest): _31.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _31.QueryAccountsRequestProtoMsg): _31.QueryAccountsRequest;
                toProto(message: _31.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryAccountsRequest): _31.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _31.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryAccountsResponse;
                fromPartial(object: Partial<_31.QueryAccountsResponse>): _31.QueryAccountsResponse;
                fromAmino(object: _31.QueryAccountsResponseAmino): _31.QueryAccountsResponse;
                toAmino(message: _31.QueryAccountsResponse): _31.QueryAccountsResponseAmino;
                fromAminoMsg(object: _31.QueryAccountsResponseAminoMsg): _31.QueryAccountsResponse;
                toAminoMsg(message: _31.QueryAccountsResponse): _31.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _31.QueryAccountsResponseProtoMsg): _31.QueryAccountsResponse;
                toProto(message: _31.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryAccountsResponse): _31.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _31.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryAccountRequest;
                fromPartial(object: Partial<_31.QueryAccountRequest>): _31.QueryAccountRequest;
                fromAmino(object: _31.QueryAccountRequestAmino): _31.QueryAccountRequest;
                toAmino(message: _31.QueryAccountRequest): _31.QueryAccountRequestAmino;
                fromAminoMsg(object: _31.QueryAccountRequestAminoMsg): _31.QueryAccountRequest;
                toAminoMsg(message: _31.QueryAccountRequest): _31.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _31.QueryAccountRequestProtoMsg): _31.QueryAccountRequest;
                toProto(message: _31.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _31.QueryAccountRequest): _31.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _31.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryAccountResponse;
                fromPartial(object: Partial<_31.QueryAccountResponse>): _31.QueryAccountResponse;
                fromAmino(object: _31.QueryAccountResponseAmino): _31.QueryAccountResponse;
                toAmino(message: _31.QueryAccountResponse): _31.QueryAccountResponseAmino;
                fromAminoMsg(object: _31.QueryAccountResponseAminoMsg): _31.QueryAccountResponse;
                toAminoMsg(message: _31.QueryAccountResponse): _31.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _31.QueryAccountResponseProtoMsg): _31.QueryAccountResponse;
                toProto(message: _31.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _31.QueryAccountResponse): _31.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _31.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.QueryParamsRequest;
                fromPartial(_: Partial<_31.QueryParamsRequest>): _31.QueryParamsRequest;
                fromAmino(_: _31.QueryParamsRequestAmino): _31.QueryParamsRequest;
                toAmino(_: _31.QueryParamsRequest): _31.QueryParamsRequestAmino;
                fromAminoMsg(object: _31.QueryParamsRequestAminoMsg): _31.QueryParamsRequest;
                toAminoMsg(message: _31.QueryParamsRequest): _31.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _31.QueryParamsRequestProtoMsg): _31.QueryParamsRequest;
                toProto(message: _31.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryParamsRequest): _31.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _31.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryParamsResponse;
                fromPartial(object: Partial<_31.QueryParamsResponse>): _31.QueryParamsResponse;
                fromAmino(object: _31.QueryParamsResponseAmino): _31.QueryParamsResponse;
                toAmino(message: _31.QueryParamsResponse): _31.QueryParamsResponseAmino;
                fromAminoMsg(object: _31.QueryParamsResponseAminoMsg): _31.QueryParamsResponse;
                toAminoMsg(message: _31.QueryParamsResponse): _31.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _31.QueryParamsResponseProtoMsg): _31.QueryParamsResponse;
                toProto(message: _31.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryParamsResponse): _31.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _31.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_31.QueryModuleAccountByNameRequest>): _31.QueryModuleAccountByNameRequest;
                fromAmino(object: _31.QueryModuleAccountByNameRequestAmino): _31.QueryModuleAccountByNameRequest;
                toAmino(message: _31.QueryModuleAccountByNameRequest): _31.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _31.QueryModuleAccountByNameRequestAminoMsg): _31.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _31.QueryModuleAccountByNameRequest): _31.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _31.QueryModuleAccountByNameRequestProtoMsg): _31.QueryModuleAccountByNameRequest;
                toProto(message: _31.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _31.QueryModuleAccountByNameRequest): _31.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _31.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_31.QueryModuleAccountByNameResponse>): _31.QueryModuleAccountByNameResponse;
                fromAmino(object: _31.QueryModuleAccountByNameResponseAmino): _31.QueryModuleAccountByNameResponse;
                toAmino(message: _31.QueryModuleAccountByNameResponse): _31.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _31.QueryModuleAccountByNameResponseAminoMsg): _31.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _31.QueryModuleAccountByNameResponse): _31.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _31.QueryModuleAccountByNameResponseProtoMsg): _31.QueryModuleAccountByNameResponse;
                toProto(message: _31.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _31.QueryModuleAccountByNameResponse): _31.QueryModuleAccountByNameResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _29.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _29.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            BaseAccount: {
                typeUrl: string;
                encode(message: _29.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.BaseAccount;
                fromPartial(object: Partial<_29.BaseAccount>): _29.BaseAccount;
                fromAmino(object: _29.BaseAccountAmino): _29.BaseAccount;
                toAmino(message: _29.BaseAccount): _29.BaseAccountAmino;
                fromAminoMsg(object: _29.BaseAccountAminoMsg): _29.BaseAccount;
                toAminoMsg(message: _29.BaseAccount): _29.BaseAccountAminoMsg;
                fromProtoMsg(message: _29.BaseAccountProtoMsg): _29.BaseAccount;
                toProto(message: _29.BaseAccount): Uint8Array;
                toProtoMsg(message: _29.BaseAccount): _29.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _29.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.ModuleAccount;
                fromPartial(object: Partial<_29.ModuleAccount>): _29.ModuleAccount;
                fromAmino(object: _29.ModuleAccountAmino): _29.ModuleAccount;
                toAmino(message: _29.ModuleAccount): _29.ModuleAccountAmino;
                fromAminoMsg(object: _29.ModuleAccountAminoMsg): _29.ModuleAccount;
                toAminoMsg(message: _29.ModuleAccount): _29.ModuleAccountAminoMsg;
                fromProtoMsg(message: _29.ModuleAccountProtoMsg): _29.ModuleAccount;
                toProto(message: _29.ModuleAccount): Uint8Array;
                toProtoMsg(message: _29.ModuleAccount): _29.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _29.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.Params;
                fromPartial(object: Partial<_29.Params>): _29.Params;
                fromAmino(object: _29.ParamsAmino): _29.Params;
                toAmino(message: _29.Params): _29.ParamsAmino;
                fromAminoMsg(object: _29.ParamsAminoMsg): _29.Params;
                toAminoMsg(message: _29.Params): _29.ParamsAminoMsg;
                fromProtoMsg(message: _29.ParamsProtoMsg): _29.Params;
                toProto(message: _29.Params): Uint8Array;
                toProtoMsg(message: _29.Params): _29.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _199.MsgClientImpl;
            QueryClientImpl: typeof _185.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                grants(request: _35.QueryGrantsRequest): Promise<_35.QueryGrantsResponse>;
                granterGrants(request: _35.QueryGranterGrantsRequest): Promise<_35.QueryGranterGrantsResponse>;
                granteeGrants(request: _35.QueryGranteeGrantsRequest): Promise<_35.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _170.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _36.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _36.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _36.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _36.MsgGrant): {
                        typeUrl: string;
                        value: _36.MsgGrant;
                    };
                    exec(value: _36.MsgExec): {
                        typeUrl: string;
                        value: _36.MsgExec;
                    };
                    revoke(value: _36.MsgRevoke): {
                        typeUrl: string;
                        value: _36.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _36.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _36.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _36.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _36.MsgGrant): {
                        typeUrl: string;
                        value: _36.MsgGrant;
                    };
                    exec(value: _36.MsgExec): {
                        typeUrl: string;
                        value: _36.MsgExec;
                    };
                    revoke(value: _36.MsgRevoke): {
                        typeUrl: string;
                        value: _36.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _36.MsgGrant) => _36.MsgGrantAmino;
                    fromAmino: (object: _36.MsgGrantAmino) => _36.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _36.MsgExec) => _36.MsgExecAmino;
                    fromAmino: (object: _36.MsgExecAmino) => _36.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _36.MsgRevoke) => _36.MsgRevokeAmino;
                    fromAmino: (object: _36.MsgRevokeAmino) => _36.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _36.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.MsgGrant;
                fromPartial(object: Partial<_36.MsgGrant>): _36.MsgGrant;
                fromAmino(object: _36.MsgGrantAmino): _36.MsgGrant;
                toAmino(message: _36.MsgGrant): _36.MsgGrantAmino;
                fromAminoMsg(object: _36.MsgGrantAminoMsg): _36.MsgGrant;
                toAminoMsg(message: _36.MsgGrant): _36.MsgGrantAminoMsg;
                fromProtoMsg(message: _36.MsgGrantProtoMsg): _36.MsgGrant;
                toProto(message: _36.MsgGrant): Uint8Array;
                toProtoMsg(message: _36.MsgGrant): _36.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _36.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.MsgExecResponse;
                fromPartial(object: Partial<_36.MsgExecResponse>): _36.MsgExecResponse;
                fromAmino(object: _36.MsgExecResponseAmino): _36.MsgExecResponse;
                toAmino(message: _36.MsgExecResponse): _36.MsgExecResponseAmino;
                fromAminoMsg(object: _36.MsgExecResponseAminoMsg): _36.MsgExecResponse;
                toAminoMsg(message: _36.MsgExecResponse): _36.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _36.MsgExecResponseProtoMsg): _36.MsgExecResponse;
                toProto(message: _36.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _36.MsgExecResponse): _36.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _36.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.MsgExec;
                fromPartial(object: Partial<_36.MsgExec>): _36.MsgExec;
                fromAmino(object: _36.MsgExecAmino): _36.MsgExec;
                toAmino(message: _36.MsgExec): _36.MsgExecAmino;
                fromAminoMsg(object: _36.MsgExecAminoMsg): _36.MsgExec;
                toAminoMsg(message: _36.MsgExec): _36.MsgExecAminoMsg;
                fromProtoMsg(message: _36.MsgExecProtoMsg): _36.MsgExec;
                toProto(message: _36.MsgExec): Uint8Array;
                toProtoMsg(message: _36.MsgExec): _36.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _36.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _36.MsgGrantResponse;
                fromPartial(_: Partial<_36.MsgGrantResponse>): _36.MsgGrantResponse;
                fromAmino(_: _36.MsgGrantResponseAmino): _36.MsgGrantResponse;
                toAmino(_: _36.MsgGrantResponse): _36.MsgGrantResponseAmino;
                fromAminoMsg(object: _36.MsgGrantResponseAminoMsg): _36.MsgGrantResponse;
                toAminoMsg(message: _36.MsgGrantResponse): _36.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _36.MsgGrantResponseProtoMsg): _36.MsgGrantResponse;
                toProto(message: _36.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _36.MsgGrantResponse): _36.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _36.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.MsgRevoke;
                fromPartial(object: Partial<_36.MsgRevoke>): _36.MsgRevoke;
                fromAmino(object: _36.MsgRevokeAmino): _36.MsgRevoke;
                toAmino(message: _36.MsgRevoke): _36.MsgRevokeAmino;
                fromAminoMsg(object: _36.MsgRevokeAminoMsg): _36.MsgRevoke;
                toAminoMsg(message: _36.MsgRevoke): _36.MsgRevokeAminoMsg;
                fromProtoMsg(message: _36.MsgRevokeProtoMsg): _36.MsgRevoke;
                toProto(message: _36.MsgRevoke): Uint8Array;
                toProtoMsg(message: _36.MsgRevoke): _36.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _36.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _36.MsgRevokeResponse;
                fromPartial(_: Partial<_36.MsgRevokeResponse>): _36.MsgRevokeResponse;
                fromAmino(_: _36.MsgRevokeResponseAmino): _36.MsgRevokeResponse;
                toAmino(_: _36.MsgRevokeResponse): _36.MsgRevokeResponseAmino;
                fromAminoMsg(object: _36.MsgRevokeResponseAminoMsg): _36.MsgRevokeResponse;
                toAminoMsg(message: _36.MsgRevokeResponse): _36.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _36.MsgRevokeResponseProtoMsg): _36.MsgRevokeResponse;
                toProto(message: _36.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _36.MsgRevokeResponse): _36.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _35.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryGrantsRequest;
                fromPartial(object: Partial<_35.QueryGrantsRequest>): _35.QueryGrantsRequest;
                fromAmino(object: _35.QueryGrantsRequestAmino): _35.QueryGrantsRequest;
                toAmino(message: _35.QueryGrantsRequest): _35.QueryGrantsRequestAmino;
                fromAminoMsg(object: _35.QueryGrantsRequestAminoMsg): _35.QueryGrantsRequest;
                toAminoMsg(message: _35.QueryGrantsRequest): _35.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryGrantsRequestProtoMsg): _35.QueryGrantsRequest;
                toProto(message: _35.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryGrantsRequest): _35.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _35.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryGrantsResponse;
                fromPartial(object: Partial<_35.QueryGrantsResponse>): _35.QueryGrantsResponse;
                fromAmino(object: _35.QueryGrantsResponseAmino): _35.QueryGrantsResponse;
                toAmino(message: _35.QueryGrantsResponse): _35.QueryGrantsResponseAmino;
                fromAminoMsg(object: _35.QueryGrantsResponseAminoMsg): _35.QueryGrantsResponse;
                toAminoMsg(message: _35.QueryGrantsResponse): _35.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryGrantsResponseProtoMsg): _35.QueryGrantsResponse;
                toProto(message: _35.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryGrantsResponse): _35.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _35.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_35.QueryGranterGrantsRequest>): _35.QueryGranterGrantsRequest;
                fromAmino(object: _35.QueryGranterGrantsRequestAmino): _35.QueryGranterGrantsRequest;
                toAmino(message: _35.QueryGranterGrantsRequest): _35.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _35.QueryGranterGrantsRequestAminoMsg): _35.QueryGranterGrantsRequest;
                toAminoMsg(message: _35.QueryGranterGrantsRequest): _35.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryGranterGrantsRequestProtoMsg): _35.QueryGranterGrantsRequest;
                toProto(message: _35.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryGranterGrantsRequest): _35.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _35.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_35.QueryGranterGrantsResponse>): _35.QueryGranterGrantsResponse;
                fromAmino(object: _35.QueryGranterGrantsResponseAmino): _35.QueryGranterGrantsResponse;
                toAmino(message: _35.QueryGranterGrantsResponse): _35.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _35.QueryGranterGrantsResponseAminoMsg): _35.QueryGranterGrantsResponse;
                toAminoMsg(message: _35.QueryGranterGrantsResponse): _35.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryGranterGrantsResponseProtoMsg): _35.QueryGranterGrantsResponse;
                toProto(message: _35.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryGranterGrantsResponse): _35.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _35.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_35.QueryGranteeGrantsRequest>): _35.QueryGranteeGrantsRequest;
                fromAmino(object: _35.QueryGranteeGrantsRequestAmino): _35.QueryGranteeGrantsRequest;
                toAmino(message: _35.QueryGranteeGrantsRequest): _35.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _35.QueryGranteeGrantsRequestAminoMsg): _35.QueryGranteeGrantsRequest;
                toAminoMsg(message: _35.QueryGranteeGrantsRequest): _35.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryGranteeGrantsRequestProtoMsg): _35.QueryGranteeGrantsRequest;
                toProto(message: _35.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryGranteeGrantsRequest): _35.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _35.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_35.QueryGranteeGrantsResponse>): _35.QueryGranteeGrantsResponse;
                fromAmino(object: _35.QueryGranteeGrantsResponseAmino): _35.QueryGranteeGrantsResponse;
                toAmino(message: _35.QueryGranteeGrantsResponse): _35.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _35.QueryGranteeGrantsResponseAminoMsg): _35.QueryGranteeGrantsResponse;
                toAminoMsg(message: _35.QueryGranteeGrantsResponse): _35.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryGranteeGrantsResponseProtoMsg): _35.QueryGranteeGrantsResponse;
                toProto(message: _35.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryGranteeGrantsResponse): _35.QueryGranteeGrantsResponseProtoMsg;
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
            EventGrant: {
                typeUrl: string;
                encode(message: _33.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.EventGrant;
                fromPartial(object: Partial<_33.EventGrant>): _33.EventGrant;
                fromAmino(object: _33.EventGrantAmino): _33.EventGrant;
                toAmino(message: _33.EventGrant): _33.EventGrantAmino;
                fromAminoMsg(object: _33.EventGrantAminoMsg): _33.EventGrant;
                toAminoMsg(message: _33.EventGrant): _33.EventGrantAminoMsg;
                fromProtoMsg(message: _33.EventGrantProtoMsg): _33.EventGrant;
                toProto(message: _33.EventGrant): Uint8Array;
                toProtoMsg(message: _33.EventGrant): _33.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _33.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.EventRevoke;
                fromPartial(object: Partial<_33.EventRevoke>): _33.EventRevoke;
                fromAmino(object: _33.EventRevokeAmino): _33.EventRevoke;
                toAmino(message: _33.EventRevoke): _33.EventRevokeAmino;
                fromAminoMsg(object: _33.EventRevokeAminoMsg): _33.EventRevoke;
                toAminoMsg(message: _33.EventRevoke): _33.EventRevokeAminoMsg;
                fromProtoMsg(message: _33.EventRevokeProtoMsg): _33.EventRevoke;
                toProto(message: _33.EventRevoke): Uint8Array;
                toProtoMsg(message: _33.EventRevoke): _33.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _32.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.GenericAuthorization;
                fromPartial(object: Partial<_32.GenericAuthorization>): _32.GenericAuthorization;
                fromAmino(object: _32.GenericAuthorizationAmino): _32.GenericAuthorization;
                toAmino(message: _32.GenericAuthorization): _32.GenericAuthorizationAmino;
                fromAminoMsg(object: _32.GenericAuthorizationAminoMsg): _32.GenericAuthorization;
                toAminoMsg(message: _32.GenericAuthorization): _32.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _32.GenericAuthorizationProtoMsg): _32.GenericAuthorization;
                toProto(message: _32.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _32.GenericAuthorization): _32.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _32.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.Grant;
                fromPartial(object: Partial<_32.Grant>): _32.Grant;
                fromAmino(object: _32.GrantAmino): _32.Grant;
                toAmino(message: _32.Grant): _32.GrantAmino;
                fromAminoMsg(object: _32.GrantAminoMsg): _32.Grant;
                toAminoMsg(message: _32.Grant): _32.GrantAminoMsg;
                fromProtoMsg(message: _32.GrantProtoMsg): _32.Grant;
                toProto(message: _32.Grant): Uint8Array;
                toProtoMsg(message: _32.Grant): _32.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _32.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.GrantAuthorization;
                fromPartial(object: Partial<_32.GrantAuthorization>): _32.GrantAuthorization;
                fromAmino(object: _32.GrantAuthorizationAmino): _32.GrantAuthorization;
                toAmino(message: _32.GrantAuthorization): _32.GrantAuthorizationAmino;
                fromAminoMsg(object: _32.GrantAuthorizationAminoMsg): _32.GrantAuthorization;
                toAminoMsg(message: _32.GrantAuthorization): _32.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _32.GrantAuthorizationProtoMsg): _32.GrantAuthorization;
                toProto(message: _32.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _32.GrantAuthorization): _32.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _37.SendAuthorization | _88.StakeAuthorization | _32.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _200.MsgClientImpl;
            QueryClientImpl: typeof _186.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                balance(request: _40.QueryBalanceRequest): Promise<_40.QueryBalanceResponse>;
                allBalances(request: _40.QueryAllBalancesRequest): Promise<_40.QueryAllBalancesResponse>;
                spendableBalances(request: _40.QuerySpendableBalancesRequest): Promise<_40.QuerySpendableBalancesResponse>;
                totalSupply(request?: _40.QueryTotalSupplyRequest): Promise<_40.QueryTotalSupplyResponse>;
                supplyOf(request: _40.QuerySupplyOfRequest): Promise<_40.QuerySupplyOfResponse>;
                params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                denomMetadata(request: _40.QueryDenomMetadataRequest): Promise<_40.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _40.QueryDenomsMetadataRequest): Promise<_40.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _171.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _41.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _41.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _41.MsgSend): {
                        typeUrl: string;
                        value: _41.MsgSend;
                    };
                    multiSend(value: _41.MsgMultiSend): {
                        typeUrl: string;
                        value: _41.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _41.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _41.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _41.MsgSend): {
                        typeUrl: string;
                        value: _41.MsgSend;
                    };
                    multiSend(value: _41.MsgMultiSend): {
                        typeUrl: string;
                        value: _41.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _41.MsgSend) => _41.MsgSendAmino;
                    fromAmino: (object: _41.MsgSendAmino) => _41.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _41.MsgMultiSend) => _41.MsgMultiSendAmino;
                    fromAmino: (object: _41.MsgMultiSendAmino) => _41.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _41.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgSend;
                fromPartial(object: Partial<_41.MsgSend>): _41.MsgSend;
                fromAmino(object: _41.MsgSendAmino): _41.MsgSend;
                toAmino(message: _41.MsgSend): _41.MsgSendAmino;
                fromAminoMsg(object: _41.MsgSendAminoMsg): _41.MsgSend;
                toAminoMsg(message: _41.MsgSend): _41.MsgSendAminoMsg;
                fromProtoMsg(message: _41.MsgSendProtoMsg): _41.MsgSend;
                toProto(message: _41.MsgSend): Uint8Array;
                toProtoMsg(message: _41.MsgSend): _41.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _41.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.MsgSendResponse;
                fromPartial(_: Partial<_41.MsgSendResponse>): _41.MsgSendResponse;
                fromAmino(_: _41.MsgSendResponseAmino): _41.MsgSendResponse;
                toAmino(_: _41.MsgSendResponse): _41.MsgSendResponseAmino;
                fromAminoMsg(object: _41.MsgSendResponseAminoMsg): _41.MsgSendResponse;
                toAminoMsg(message: _41.MsgSendResponse): _41.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _41.MsgSendResponseProtoMsg): _41.MsgSendResponse;
                toProto(message: _41.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _41.MsgSendResponse): _41.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _41.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgMultiSend;
                fromPartial(object: Partial<_41.MsgMultiSend>): _41.MsgMultiSend;
                fromAmino(object: _41.MsgMultiSendAmino): _41.MsgMultiSend;
                toAmino(message: _41.MsgMultiSend): _41.MsgMultiSendAmino;
                fromAminoMsg(object: _41.MsgMultiSendAminoMsg): _41.MsgMultiSend;
                toAminoMsg(message: _41.MsgMultiSend): _41.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _41.MsgMultiSendProtoMsg): _41.MsgMultiSend;
                toProto(message: _41.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _41.MsgMultiSend): _41.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _41.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.MsgMultiSendResponse;
                fromPartial(_: Partial<_41.MsgMultiSendResponse>): _41.MsgMultiSendResponse;
                fromAmino(_: _41.MsgMultiSendResponseAmino): _41.MsgMultiSendResponse;
                toAmino(_: _41.MsgMultiSendResponse): _41.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _41.MsgMultiSendResponseAminoMsg): _41.MsgMultiSendResponse;
                toAminoMsg(message: _41.MsgMultiSendResponse): _41.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _41.MsgMultiSendResponseProtoMsg): _41.MsgMultiSendResponse;
                toProto(message: _41.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _41.MsgMultiSendResponse): _41.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _40.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryBalanceRequest;
                fromPartial(object: Partial<_40.QueryBalanceRequest>): _40.QueryBalanceRequest;
                fromAmino(object: _40.QueryBalanceRequestAmino): _40.QueryBalanceRequest;
                toAmino(message: _40.QueryBalanceRequest): _40.QueryBalanceRequestAmino;
                fromAminoMsg(object: _40.QueryBalanceRequestAminoMsg): _40.QueryBalanceRequest;
                toAminoMsg(message: _40.QueryBalanceRequest): _40.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _40.QueryBalanceRequestProtoMsg): _40.QueryBalanceRequest;
                toProto(message: _40.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _40.QueryBalanceRequest): _40.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _40.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryBalanceResponse;
                fromPartial(object: Partial<_40.QueryBalanceResponse>): _40.QueryBalanceResponse;
                fromAmino(object: _40.QueryBalanceResponseAmino): _40.QueryBalanceResponse;
                toAmino(message: _40.QueryBalanceResponse): _40.QueryBalanceResponseAmino;
                fromAminoMsg(object: _40.QueryBalanceResponseAminoMsg): _40.QueryBalanceResponse;
                toAminoMsg(message: _40.QueryBalanceResponse): _40.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _40.QueryBalanceResponseProtoMsg): _40.QueryBalanceResponse;
                toProto(message: _40.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _40.QueryBalanceResponse): _40.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _40.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryAllBalancesRequest;
                fromPartial(object: Partial<_40.QueryAllBalancesRequest>): _40.QueryAllBalancesRequest;
                fromAmino(object: _40.QueryAllBalancesRequestAmino): _40.QueryAllBalancesRequest;
                toAmino(message: _40.QueryAllBalancesRequest): _40.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _40.QueryAllBalancesRequestAminoMsg): _40.QueryAllBalancesRequest;
                toAminoMsg(message: _40.QueryAllBalancesRequest): _40.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _40.QueryAllBalancesRequestProtoMsg): _40.QueryAllBalancesRequest;
                toProto(message: _40.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _40.QueryAllBalancesRequest): _40.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _40.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryAllBalancesResponse;
                fromPartial(object: Partial<_40.QueryAllBalancesResponse>): _40.QueryAllBalancesResponse;
                fromAmino(object: _40.QueryAllBalancesResponseAmino): _40.QueryAllBalancesResponse;
                toAmino(message: _40.QueryAllBalancesResponse): _40.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _40.QueryAllBalancesResponseAminoMsg): _40.QueryAllBalancesResponse;
                toAminoMsg(message: _40.QueryAllBalancesResponse): _40.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _40.QueryAllBalancesResponseProtoMsg): _40.QueryAllBalancesResponse;
                toProto(message: _40.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _40.QueryAllBalancesResponse): _40.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _40.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_40.QuerySpendableBalancesRequest>): _40.QuerySpendableBalancesRequest;
                fromAmino(object: _40.QuerySpendableBalancesRequestAmino): _40.QuerySpendableBalancesRequest;
                toAmino(message: _40.QuerySpendableBalancesRequest): _40.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _40.QuerySpendableBalancesRequestAminoMsg): _40.QuerySpendableBalancesRequest;
                toAminoMsg(message: _40.QuerySpendableBalancesRequest): _40.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _40.QuerySpendableBalancesRequestProtoMsg): _40.QuerySpendableBalancesRequest;
                toProto(message: _40.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _40.QuerySpendableBalancesRequest): _40.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _40.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_40.QuerySpendableBalancesResponse>): _40.QuerySpendableBalancesResponse;
                fromAmino(object: _40.QuerySpendableBalancesResponseAmino): _40.QuerySpendableBalancesResponse;
                toAmino(message: _40.QuerySpendableBalancesResponse): _40.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _40.QuerySpendableBalancesResponseAminoMsg): _40.QuerySpendableBalancesResponse;
                toAminoMsg(message: _40.QuerySpendableBalancesResponse): _40.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _40.QuerySpendableBalancesResponseProtoMsg): _40.QuerySpendableBalancesResponse;
                toProto(message: _40.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _40.QuerySpendableBalancesResponse): _40.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _40.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_40.QueryTotalSupplyRequest>): _40.QueryTotalSupplyRequest;
                fromAmino(object: _40.QueryTotalSupplyRequestAmino): _40.QueryTotalSupplyRequest;
                toAmino(message: _40.QueryTotalSupplyRequest): _40.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _40.QueryTotalSupplyRequestAminoMsg): _40.QueryTotalSupplyRequest;
                toAminoMsg(message: _40.QueryTotalSupplyRequest): _40.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _40.QueryTotalSupplyRequestProtoMsg): _40.QueryTotalSupplyRequest;
                toProto(message: _40.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _40.QueryTotalSupplyRequest): _40.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _40.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_40.QueryTotalSupplyResponse>): _40.QueryTotalSupplyResponse;
                fromAmino(object: _40.QueryTotalSupplyResponseAmino): _40.QueryTotalSupplyResponse;
                toAmino(message: _40.QueryTotalSupplyResponse): _40.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _40.QueryTotalSupplyResponseAminoMsg): _40.QueryTotalSupplyResponse;
                toAminoMsg(message: _40.QueryTotalSupplyResponse): _40.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _40.QueryTotalSupplyResponseProtoMsg): _40.QueryTotalSupplyResponse;
                toProto(message: _40.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _40.QueryTotalSupplyResponse): _40.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _40.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QuerySupplyOfRequest;
                fromPartial(object: Partial<_40.QuerySupplyOfRequest>): _40.QuerySupplyOfRequest;
                fromAmino(object: _40.QuerySupplyOfRequestAmino): _40.QuerySupplyOfRequest;
                toAmino(message: _40.QuerySupplyOfRequest): _40.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _40.QuerySupplyOfRequestAminoMsg): _40.QuerySupplyOfRequest;
                toAminoMsg(message: _40.QuerySupplyOfRequest): _40.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _40.QuerySupplyOfRequestProtoMsg): _40.QuerySupplyOfRequest;
                toProto(message: _40.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _40.QuerySupplyOfRequest): _40.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _40.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QuerySupplyOfResponse;
                fromPartial(object: Partial<_40.QuerySupplyOfResponse>): _40.QuerySupplyOfResponse;
                fromAmino(object: _40.QuerySupplyOfResponseAmino): _40.QuerySupplyOfResponse;
                toAmino(message: _40.QuerySupplyOfResponse): _40.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _40.QuerySupplyOfResponseAminoMsg): _40.QuerySupplyOfResponse;
                toAminoMsg(message: _40.QuerySupplyOfResponse): _40.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _40.QuerySupplyOfResponseProtoMsg): _40.QuerySupplyOfResponse;
                toProto(message: _40.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _40.QuerySupplyOfResponse): _40.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _40.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.QueryParamsRequest;
                fromPartial(_: Partial<_40.QueryParamsRequest>): _40.QueryParamsRequest;
                fromAmino(_: _40.QueryParamsRequestAmino): _40.QueryParamsRequest;
                toAmino(_: _40.QueryParamsRequest): _40.QueryParamsRequestAmino;
                fromAminoMsg(object: _40.QueryParamsRequestAminoMsg): _40.QueryParamsRequest;
                toAminoMsg(message: _40.QueryParamsRequest): _40.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _40.QueryParamsRequestProtoMsg): _40.QueryParamsRequest;
                toProto(message: _40.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _40.QueryParamsRequest): _40.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _40.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryParamsResponse;
                fromPartial(object: Partial<_40.QueryParamsResponse>): _40.QueryParamsResponse;
                fromAmino(object: _40.QueryParamsResponseAmino): _40.QueryParamsResponse;
                toAmino(message: _40.QueryParamsResponse): _40.QueryParamsResponseAmino;
                fromAminoMsg(object: _40.QueryParamsResponseAminoMsg): _40.QueryParamsResponse;
                toAminoMsg(message: _40.QueryParamsResponse): _40.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _40.QueryParamsResponseProtoMsg): _40.QueryParamsResponse;
                toProto(message: _40.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _40.QueryParamsResponse): _40.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _40.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_40.QueryDenomsMetadataRequest>): _40.QueryDenomsMetadataRequest;
                fromAmino(object: _40.QueryDenomsMetadataRequestAmino): _40.QueryDenomsMetadataRequest;
                toAmino(message: _40.QueryDenomsMetadataRequest): _40.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _40.QueryDenomsMetadataRequestAminoMsg): _40.QueryDenomsMetadataRequest;
                toAminoMsg(message: _40.QueryDenomsMetadataRequest): _40.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _40.QueryDenomsMetadataRequestProtoMsg): _40.QueryDenomsMetadataRequest;
                toProto(message: _40.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _40.QueryDenomsMetadataRequest): _40.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _40.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_40.QueryDenomsMetadataResponse>): _40.QueryDenomsMetadataResponse;
                fromAmino(object: _40.QueryDenomsMetadataResponseAmino): _40.QueryDenomsMetadataResponse;
                toAmino(message: _40.QueryDenomsMetadataResponse): _40.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _40.QueryDenomsMetadataResponseAminoMsg): _40.QueryDenomsMetadataResponse;
                toAminoMsg(message: _40.QueryDenomsMetadataResponse): _40.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _40.QueryDenomsMetadataResponseProtoMsg): _40.QueryDenomsMetadataResponse;
                toProto(message: _40.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _40.QueryDenomsMetadataResponse): _40.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _40.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_40.QueryDenomMetadataRequest>): _40.QueryDenomMetadataRequest;
                fromAmino(object: _40.QueryDenomMetadataRequestAmino): _40.QueryDenomMetadataRequest;
                toAmino(message: _40.QueryDenomMetadataRequest): _40.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _40.QueryDenomMetadataRequestAminoMsg): _40.QueryDenomMetadataRequest;
                toAminoMsg(message: _40.QueryDenomMetadataRequest): _40.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _40.QueryDenomMetadataRequestProtoMsg): _40.QueryDenomMetadataRequest;
                toProto(message: _40.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _40.QueryDenomMetadataRequest): _40.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _40.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_40.QueryDenomMetadataResponse>): _40.QueryDenomMetadataResponse;
                fromAmino(object: _40.QueryDenomMetadataResponseAmino): _40.QueryDenomMetadataResponse;
                toAmino(message: _40.QueryDenomMetadataResponse): _40.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _40.QueryDenomMetadataResponseAminoMsg): _40.QueryDenomMetadataResponse;
                toAminoMsg(message: _40.QueryDenomMetadataResponse): _40.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _40.QueryDenomMetadataResponseProtoMsg): _40.QueryDenomMetadataResponse;
                toProto(message: _40.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _40.QueryDenomMetadataResponse): _40.QueryDenomMetadataResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _39.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.GenesisState;
                fromPartial(object: Partial<_39.GenesisState>): _39.GenesisState;
                fromAmino(object: _39.GenesisStateAmino): _39.GenesisState;
                toAmino(message: _39.GenesisState): _39.GenesisStateAmino;
                fromAminoMsg(object: _39.GenesisStateAminoMsg): _39.GenesisState;
                toAminoMsg(message: _39.GenesisState): _39.GenesisStateAminoMsg;
                fromProtoMsg(message: _39.GenesisStateProtoMsg): _39.GenesisState;
                toProto(message: _39.GenesisState): Uint8Array;
                toProtoMsg(message: _39.GenesisState): _39.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _39.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Balance;
                fromPartial(object: Partial<_39.Balance>): _39.Balance;
                fromAmino(object: _39.BalanceAmino): _39.Balance;
                toAmino(message: _39.Balance): _39.BalanceAmino;
                fromAminoMsg(object: _39.BalanceAminoMsg): _39.Balance;
                toAminoMsg(message: _39.Balance): _39.BalanceAminoMsg;
                fromProtoMsg(message: _39.BalanceProtoMsg): _39.Balance;
                toProto(message: _39.Balance): Uint8Array;
                toProtoMsg(message: _39.Balance): _39.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _38.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.Params;
                fromPartial(object: Partial<_38.Params>): _38.Params;
                fromAmino(object: _38.ParamsAmino): _38.Params;
                toAmino(message: _38.Params): _38.ParamsAmino;
                fromAminoMsg(object: _38.ParamsAminoMsg): _38.Params;
                toAminoMsg(message: _38.Params): _38.ParamsAminoMsg;
                fromProtoMsg(message: _38.ParamsProtoMsg): _38.Params;
                toProto(message: _38.Params): Uint8Array;
                toProtoMsg(message: _38.Params): _38.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _38.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.SendEnabled;
                fromPartial(object: Partial<_38.SendEnabled>): _38.SendEnabled;
                fromAmino(object: _38.SendEnabledAmino): _38.SendEnabled;
                toAmino(message: _38.SendEnabled): _38.SendEnabledAmino;
                fromAminoMsg(object: _38.SendEnabledAminoMsg): _38.SendEnabled;
                toAminoMsg(message: _38.SendEnabled): _38.SendEnabledAminoMsg;
                fromProtoMsg(message: _38.SendEnabledProtoMsg): _38.SendEnabled;
                toProto(message: _38.SendEnabled): Uint8Array;
                toProtoMsg(message: _38.SendEnabled): _38.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _38.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.Input;
                fromPartial(object: Partial<_38.Input>): _38.Input;
                fromAmino(object: _38.InputAmino): _38.Input;
                toAmino(message: _38.Input): _38.InputAmino;
                fromAminoMsg(object: _38.InputAminoMsg): _38.Input;
                toAminoMsg(message: _38.Input): _38.InputAminoMsg;
                fromProtoMsg(message: _38.InputProtoMsg): _38.Input;
                toProto(message: _38.Input): Uint8Array;
                toProtoMsg(message: _38.Input): _38.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _38.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.Output;
                fromPartial(object: Partial<_38.Output>): _38.Output;
                fromAmino(object: _38.OutputAmino): _38.Output;
                toAmino(message: _38.Output): _38.OutputAmino;
                fromAminoMsg(object: _38.OutputAminoMsg): _38.Output;
                toAminoMsg(message: _38.Output): _38.OutputAminoMsg;
                fromProtoMsg(message: _38.OutputProtoMsg): _38.Output;
                toProto(message: _38.Output): Uint8Array;
                toProtoMsg(message: _38.Output): _38.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _38.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.Supply;
                fromPartial(object: Partial<_38.Supply>): _38.Supply;
                fromAmino(object: _38.SupplyAmino): _38.Supply;
                toAmino(message: _38.Supply): _38.SupplyAmino;
                fromAminoMsg(object: _38.SupplyAminoMsg): _38.Supply;
                toAminoMsg(message: _38.Supply): _38.SupplyAminoMsg;
                fromProtoMsg(message: _38.SupplyProtoMsg): _38.Supply;
                toProto(message: _38.Supply): Uint8Array;
                toProtoMsg(message: _38.Supply): _38.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _38.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.DenomUnit;
                fromPartial(object: Partial<_38.DenomUnit>): _38.DenomUnit;
                fromAmino(object: _38.DenomUnitAmino): _38.DenomUnit;
                toAmino(message: _38.DenomUnit): _38.DenomUnitAmino;
                fromAminoMsg(object: _38.DenomUnitAminoMsg): _38.DenomUnit;
                toAminoMsg(message: _38.DenomUnit): _38.DenomUnitAminoMsg;
                fromProtoMsg(message: _38.DenomUnitProtoMsg): _38.DenomUnit;
                toProto(message: _38.DenomUnit): Uint8Array;
                toProtoMsg(message: _38.DenomUnit): _38.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _38.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.Metadata;
                fromPartial(object: Partial<_38.Metadata>): _38.Metadata;
                fromAmino(object: _38.MetadataAmino): _38.Metadata;
                toAmino(message: _38.Metadata): _38.MetadataAmino;
                fromAminoMsg(object: _38.MetadataAminoMsg): _38.Metadata;
                toAminoMsg(message: _38.Metadata): _38.MetadataAminoMsg;
                fromProtoMsg(message: _38.MetadataProtoMsg): _38.Metadata;
                toProto(message: _38.Metadata): Uint8Array;
                toProtoMsg(message: _38.Metadata): _38.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _37.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.SendAuthorization;
                fromPartial(object: Partial<_37.SendAuthorization>): _37.SendAuthorization;
                fromAmino(object: _37.SendAuthorizationAmino): _37.SendAuthorization;
                toAmino(message: _37.SendAuthorization): _37.SendAuthorizationAmino;
                fromAminoMsg(object: _37.SendAuthorizationAminoMsg): _37.SendAuthorization;
                toAminoMsg(message: _37.SendAuthorization): _37.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _37.SendAuthorizationProtoMsg): _37.SendAuthorization;
                toProto(message: _37.SendAuthorization): Uint8Array;
                toProtoMsg(message: _37.SendAuthorization): _37.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _42.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.TxResponse;
                    fromPartial(object: Partial<_42.TxResponse>): _42.TxResponse;
                    fromAmino(object: _42.TxResponseAmino): _42.TxResponse;
                    toAmino(message: _42.TxResponse): _42.TxResponseAmino;
                    fromAminoMsg(object: _42.TxResponseAminoMsg): _42.TxResponse;
                    toAminoMsg(message: _42.TxResponse): _42.TxResponseAminoMsg;
                    fromProtoMsg(message: _42.TxResponseProtoMsg): _42.TxResponse;
                    toProto(message: _42.TxResponse): Uint8Array;
                    toProtoMsg(message: _42.TxResponse): _42.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _42.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.ABCIMessageLog;
                    fromPartial(object: Partial<_42.ABCIMessageLog>): _42.ABCIMessageLog;
                    fromAmino(object: _42.ABCIMessageLogAmino): _42.ABCIMessageLog;
                    toAmino(message: _42.ABCIMessageLog): _42.ABCIMessageLogAmino;
                    fromAminoMsg(object: _42.ABCIMessageLogAminoMsg): _42.ABCIMessageLog;
                    toAminoMsg(message: _42.ABCIMessageLog): _42.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _42.ABCIMessageLogProtoMsg): _42.ABCIMessageLog;
                    toProto(message: _42.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _42.ABCIMessageLog): _42.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _42.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.StringEvent;
                    fromPartial(object: Partial<_42.StringEvent>): _42.StringEvent;
                    fromAmino(object: _42.StringEventAmino): _42.StringEvent;
                    toAmino(message: _42.StringEvent): _42.StringEventAmino;
                    fromAminoMsg(object: _42.StringEventAminoMsg): _42.StringEvent;
                    toAminoMsg(message: _42.StringEvent): _42.StringEventAminoMsg;
                    fromProtoMsg(message: _42.StringEventProtoMsg): _42.StringEvent;
                    toProto(message: _42.StringEvent): Uint8Array;
                    toProtoMsg(message: _42.StringEvent): _42.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _42.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.Attribute;
                    fromPartial(object: Partial<_42.Attribute>): _42.Attribute;
                    fromAmino(object: _42.AttributeAmino): _42.Attribute;
                    toAmino(message: _42.Attribute): _42.AttributeAmino;
                    fromAminoMsg(object: _42.AttributeAminoMsg): _42.Attribute;
                    toAminoMsg(message: _42.Attribute): _42.AttributeAminoMsg;
                    fromProtoMsg(message: _42.AttributeProtoMsg): _42.Attribute;
                    toProto(message: _42.Attribute): Uint8Array;
                    toProtoMsg(message: _42.Attribute): _42.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _42.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GasInfo;
                    fromPartial(object: Partial<_42.GasInfo>): _42.GasInfo;
                    fromAmino(object: _42.GasInfoAmino): _42.GasInfo;
                    toAmino(message: _42.GasInfo): _42.GasInfoAmino;
                    fromAminoMsg(object: _42.GasInfoAminoMsg): _42.GasInfo;
                    toAminoMsg(message: _42.GasInfo): _42.GasInfoAminoMsg;
                    fromProtoMsg(message: _42.GasInfoProtoMsg): _42.GasInfo;
                    toProto(message: _42.GasInfo): Uint8Array;
                    toProtoMsg(message: _42.GasInfo): _42.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _42.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.Result;
                    fromPartial(object: Partial<_42.Result>): _42.Result;
                    fromAmino(object: _42.ResultAmino): _42.Result;
                    toAmino(message: _42.Result): _42.ResultAmino;
                    fromAminoMsg(object: _42.ResultAminoMsg): _42.Result;
                    toAminoMsg(message: _42.Result): _42.ResultAminoMsg;
                    fromProtoMsg(message: _42.ResultProtoMsg): _42.Result;
                    toProto(message: _42.Result): Uint8Array;
                    toProtoMsg(message: _42.Result): _42.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _42.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.SimulationResponse;
                    fromPartial(object: Partial<_42.SimulationResponse>): _42.SimulationResponse;
                    fromAmino(object: _42.SimulationResponseAmino): _42.SimulationResponse;
                    toAmino(message: _42.SimulationResponse): _42.SimulationResponseAmino;
                    fromAminoMsg(object: _42.SimulationResponseAminoMsg): _42.SimulationResponse;
                    toAminoMsg(message: _42.SimulationResponse): _42.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _42.SimulationResponseProtoMsg): _42.SimulationResponse;
                    toProto(message: _42.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _42.SimulationResponse): _42.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _42.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.MsgData;
                    fromPartial(object: Partial<_42.MsgData>): _42.MsgData;
                    fromAmino(object: _42.MsgDataAmino): _42.MsgData;
                    toAmino(message: _42.MsgData): _42.MsgDataAmino;
                    fromAminoMsg(object: _42.MsgDataAminoMsg): _42.MsgData;
                    toAminoMsg(message: _42.MsgData): _42.MsgDataAminoMsg;
                    fromProtoMsg(message: _42.MsgDataProtoMsg): _42.MsgData;
                    toProto(message: _42.MsgData): Uint8Array;
                    toProtoMsg(message: _42.MsgData): _42.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _42.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.TxMsgData;
                    fromPartial(object: Partial<_42.TxMsgData>): _42.TxMsgData;
                    fromAmino(object: _42.TxMsgDataAmino): _42.TxMsgData;
                    toAmino(message: _42.TxMsgData): _42.TxMsgDataAmino;
                    fromAminoMsg(object: _42.TxMsgDataAminoMsg): _42.TxMsgData;
                    toAminoMsg(message: _42.TxMsgData): _42.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _42.TxMsgDataProtoMsg): _42.TxMsgData;
                    toProto(message: _42.TxMsgData): Uint8Array;
                    toProtoMsg(message: _42.TxMsgData): _42.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _42.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.SearchTxsResult;
                    fromPartial(object: Partial<_42.SearchTxsResult>): _42.SearchTxsResult;
                    fromAmino(object: _42.SearchTxsResultAmino): _42.SearchTxsResult;
                    toAmino(message: _42.SearchTxsResult): _42.SearchTxsResultAmino;
                    fromAminoMsg(object: _42.SearchTxsResultAminoMsg): _42.SearchTxsResult;
                    toAminoMsg(message: _42.SearchTxsResult): _42.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _42.SearchTxsResultProtoMsg): _42.SearchTxsResult;
                    toProto(message: _42.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _42.SearchTxsResult): _42.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _43.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.Pairs;
                    fromPartial(object: Partial<_43.Pairs>): _43.Pairs;
                    fromAmino(object: _43.PairsAmino): _43.Pairs;
                    toAmino(message: _43.Pairs): _43.PairsAmino;
                    fromAminoMsg(object: _43.PairsAminoMsg): _43.Pairs;
                    toAminoMsg(message: _43.Pairs): _43.PairsAminoMsg;
                    fromProtoMsg(message: _43.PairsProtoMsg): _43.Pairs;
                    toProto(message: _43.Pairs): Uint8Array;
                    toProtoMsg(message: _43.Pairs): _43.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _43.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.Pair;
                    fromPartial(object: Partial<_43.Pair>): _43.Pair;
                    fromAmino(object: _43.PairAmino): _43.Pair;
                    toAmino(message: _43.Pair): _43.PairAmino;
                    fromAminoMsg(object: _43.PairAminoMsg): _43.Pair;
                    toAminoMsg(message: _43.Pair): _43.PairAminoMsg;
                    fromProtoMsg(message: _43.PairProtoMsg): _43.Pair;
                    toProto(message: _43.Pair): Uint8Array;
                    toProtoMsg(message: _43.Pair): _43.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _187.ServiceClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    config(request?: _44.ConfigRequest): Promise<_44.ConfigResponse>;
                };
                LCDQueryClient: typeof _172.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _44.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _44.ConfigRequest;
                    fromPartial(_: Partial<_44.ConfigRequest>): _44.ConfigRequest;
                    fromAmino(_: _44.ConfigRequestAmino): _44.ConfigRequest;
                    toAmino(_: _44.ConfigRequest): _44.ConfigRequestAmino;
                    fromAminoMsg(object: _44.ConfigRequestAminoMsg): _44.ConfigRequest;
                    toAminoMsg(message: _44.ConfigRequest): _44.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _44.ConfigRequestProtoMsg): _44.ConfigRequest;
                    toProto(message: _44.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _44.ConfigRequest): _44.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _44.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.ConfigResponse;
                    fromPartial(object: Partial<_44.ConfigResponse>): _44.ConfigResponse;
                    fromAmino(object: _44.ConfigResponseAmino): _44.ConfigResponse;
                    toAmino(message: _44.ConfigResponse): _44.ConfigResponseAmino;
                    fromAminoMsg(object: _44.ConfigResponseAminoMsg): _44.ConfigResponse;
                    toAminoMsg(message: _44.ConfigResponse): _44.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _44.ConfigResponseProtoMsg): _44.ConfigResponse;
                    toProto(message: _44.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _44.ConfigResponse): _44.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _45.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.PageRequest;
                    fromPartial(object: Partial<_45.PageRequest>): _45.PageRequest;
                    fromAmino(object: _45.PageRequestAmino): _45.PageRequest;
                    toAmino(message: _45.PageRequest): _45.PageRequestAmino;
                    fromAminoMsg(object: _45.PageRequestAminoMsg): _45.PageRequest;
                    toAminoMsg(message: _45.PageRequest): _45.PageRequestAminoMsg;
                    fromProtoMsg(message: _45.PageRequestProtoMsg): _45.PageRequest;
                    toProto(message: _45.PageRequest): Uint8Array;
                    toProtoMsg(message: _45.PageRequest): _45.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _45.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.PageResponse;
                    fromPartial(object: Partial<_45.PageResponse>): _45.PageResponse;
                    fromAmino(object: _45.PageResponseAmino): _45.PageResponse;
                    toAmino(message: _45.PageResponse): _45.PageResponseAmino;
                    fromAminoMsg(object: _45.PageResponseAminoMsg): _45.PageResponse;
                    toAminoMsg(message: _45.PageResponse): _45.PageResponseAminoMsg;
                    fromProtoMsg(message: _45.PageResponseProtoMsg): _45.PageResponse;
                    toProto(message: _45.PageResponse): Uint8Array;
                    toProtoMsg(message: _45.PageResponse): _45.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _46.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _46.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_46.ListAllInterfacesRequest>): _46.ListAllInterfacesRequest;
                    fromAmino(_: _46.ListAllInterfacesRequestAmino): _46.ListAllInterfacesRequest;
                    toAmino(_: _46.ListAllInterfacesRequest): _46.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _46.ListAllInterfacesRequestAminoMsg): _46.ListAllInterfacesRequest;
                    toAminoMsg(message: _46.ListAllInterfacesRequest): _46.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _46.ListAllInterfacesRequestProtoMsg): _46.ListAllInterfacesRequest;
                    toProto(message: _46.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _46.ListAllInterfacesRequest): _46.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _46.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_46.ListAllInterfacesResponse>): _46.ListAllInterfacesResponse;
                    fromAmino(object: _46.ListAllInterfacesResponseAmino): _46.ListAllInterfacesResponse;
                    toAmino(message: _46.ListAllInterfacesResponse): _46.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _46.ListAllInterfacesResponseAminoMsg): _46.ListAllInterfacesResponse;
                    toAminoMsg(message: _46.ListAllInterfacesResponse): _46.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _46.ListAllInterfacesResponseProtoMsg): _46.ListAllInterfacesResponse;
                    toProto(message: _46.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _46.ListAllInterfacesResponse): _46.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _46.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.ListImplementationsRequest;
                    fromPartial(object: Partial<_46.ListImplementationsRequest>): _46.ListImplementationsRequest;
                    fromAmino(object: _46.ListImplementationsRequestAmino): _46.ListImplementationsRequest;
                    toAmino(message: _46.ListImplementationsRequest): _46.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _46.ListImplementationsRequestAminoMsg): _46.ListImplementationsRequest;
                    toAminoMsg(message: _46.ListImplementationsRequest): _46.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _46.ListImplementationsRequestProtoMsg): _46.ListImplementationsRequest;
                    toProto(message: _46.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _46.ListImplementationsRequest): _46.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _46.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.ListImplementationsResponse;
                    fromPartial(object: Partial<_46.ListImplementationsResponse>): _46.ListImplementationsResponse;
                    fromAmino(object: _46.ListImplementationsResponseAmino): _46.ListImplementationsResponse;
                    toAmino(message: _46.ListImplementationsResponse): _46.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _46.ListImplementationsResponseAminoMsg): _46.ListImplementationsResponse;
                    toAminoMsg(message: _46.ListImplementationsResponse): _46.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _46.ListImplementationsResponseProtoMsg): _46.ListImplementationsResponse;
                    toProto(message: _46.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _46.ListImplementationsResponse): _46.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _47.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.AppDescriptor;
                    fromPartial(object: Partial<_47.AppDescriptor>): _47.AppDescriptor;
                    fromAmino(object: _47.AppDescriptorAmino): _47.AppDescriptor;
                    toAmino(message: _47.AppDescriptor): _47.AppDescriptorAmino;
                    fromAminoMsg(object: _47.AppDescriptorAminoMsg): _47.AppDescriptor;
                    toAminoMsg(message: _47.AppDescriptor): _47.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _47.AppDescriptorProtoMsg): _47.AppDescriptor;
                    toProto(message: _47.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _47.AppDescriptor): _47.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _47.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.TxDescriptor;
                    fromPartial(object: Partial<_47.TxDescriptor>): _47.TxDescriptor;
                    fromAmino(object: _47.TxDescriptorAmino): _47.TxDescriptor;
                    toAmino(message: _47.TxDescriptor): _47.TxDescriptorAmino;
                    fromAminoMsg(object: _47.TxDescriptorAminoMsg): _47.TxDescriptor;
                    toAminoMsg(message: _47.TxDescriptor): _47.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _47.TxDescriptorProtoMsg): _47.TxDescriptor;
                    toProto(message: _47.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _47.TxDescriptor): _47.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _47.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.AuthnDescriptor;
                    fromPartial(object: Partial<_47.AuthnDescriptor>): _47.AuthnDescriptor;
                    fromAmino(object: _47.AuthnDescriptorAmino): _47.AuthnDescriptor;
                    toAmino(message: _47.AuthnDescriptor): _47.AuthnDescriptorAmino;
                    fromAminoMsg(object: _47.AuthnDescriptorAminoMsg): _47.AuthnDescriptor;
                    toAminoMsg(message: _47.AuthnDescriptor): _47.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _47.AuthnDescriptorProtoMsg): _47.AuthnDescriptor;
                    toProto(message: _47.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _47.AuthnDescriptor): _47.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _47.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.SigningModeDescriptor;
                    fromPartial(object: Partial<_47.SigningModeDescriptor>): _47.SigningModeDescriptor;
                    fromAmino(object: _47.SigningModeDescriptorAmino): _47.SigningModeDescriptor;
                    toAmino(message: _47.SigningModeDescriptor): _47.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _47.SigningModeDescriptorAminoMsg): _47.SigningModeDescriptor;
                    toAminoMsg(message: _47.SigningModeDescriptor): _47.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _47.SigningModeDescriptorProtoMsg): _47.SigningModeDescriptor;
                    toProto(message: _47.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _47.SigningModeDescriptor): _47.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _47.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.ChainDescriptor;
                    fromPartial(object: Partial<_47.ChainDescriptor>): _47.ChainDescriptor;
                    fromAmino(object: _47.ChainDescriptorAmino): _47.ChainDescriptor;
                    toAmino(message: _47.ChainDescriptor): _47.ChainDescriptorAmino;
                    fromAminoMsg(object: _47.ChainDescriptorAminoMsg): _47.ChainDescriptor;
                    toAminoMsg(message: _47.ChainDescriptor): _47.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _47.ChainDescriptorProtoMsg): _47.ChainDescriptor;
                    toProto(message: _47.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _47.ChainDescriptor): _47.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _47.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.CodecDescriptor;
                    fromPartial(object: Partial<_47.CodecDescriptor>): _47.CodecDescriptor;
                    fromAmino(object: _47.CodecDescriptorAmino): _47.CodecDescriptor;
                    toAmino(message: _47.CodecDescriptor): _47.CodecDescriptorAmino;
                    fromAminoMsg(object: _47.CodecDescriptorAminoMsg): _47.CodecDescriptor;
                    toAminoMsg(message: _47.CodecDescriptor): _47.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _47.CodecDescriptorProtoMsg): _47.CodecDescriptor;
                    toProto(message: _47.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _47.CodecDescriptor): _47.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _47.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.InterfaceDescriptor;
                    fromPartial(object: Partial<_47.InterfaceDescriptor>): _47.InterfaceDescriptor;
                    fromAmino(object: _47.InterfaceDescriptorAmino): _47.InterfaceDescriptor;
                    toAmino(message: _47.InterfaceDescriptor): _47.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _47.InterfaceDescriptorAminoMsg): _47.InterfaceDescriptor;
                    toAminoMsg(message: _47.InterfaceDescriptor): _47.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _47.InterfaceDescriptorProtoMsg): _47.InterfaceDescriptor;
                    toProto(message: _47.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _47.InterfaceDescriptor): _47.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _47.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_47.InterfaceImplementerDescriptor>): _47.InterfaceImplementerDescriptor;
                    fromAmino(object: _47.InterfaceImplementerDescriptorAmino): _47.InterfaceImplementerDescriptor;
                    toAmino(message: _47.InterfaceImplementerDescriptor): _47.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _47.InterfaceImplementerDescriptorAminoMsg): _47.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _47.InterfaceImplementerDescriptor): _47.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _47.InterfaceImplementerDescriptorProtoMsg): _47.InterfaceImplementerDescriptor;
                    toProto(message: _47.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _47.InterfaceImplementerDescriptor): _47.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _47.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_47.InterfaceAcceptingMessageDescriptor>): _47.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _47.InterfaceAcceptingMessageDescriptorAmino): _47.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _47.InterfaceAcceptingMessageDescriptor): _47.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _47.InterfaceAcceptingMessageDescriptorAminoMsg): _47.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _47.InterfaceAcceptingMessageDescriptor): _47.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _47.InterfaceAcceptingMessageDescriptorProtoMsg): _47.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _47.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _47.InterfaceAcceptingMessageDescriptor): _47.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _47.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.ConfigurationDescriptor;
                    fromPartial(object: Partial<_47.ConfigurationDescriptor>): _47.ConfigurationDescriptor;
                    fromAmino(object: _47.ConfigurationDescriptorAmino): _47.ConfigurationDescriptor;
                    toAmino(message: _47.ConfigurationDescriptor): _47.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _47.ConfigurationDescriptorAminoMsg): _47.ConfigurationDescriptor;
                    toAminoMsg(message: _47.ConfigurationDescriptor): _47.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _47.ConfigurationDescriptorProtoMsg): _47.ConfigurationDescriptor;
                    toProto(message: _47.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _47.ConfigurationDescriptor): _47.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _47.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.MsgDescriptor;
                    fromPartial(object: Partial<_47.MsgDescriptor>): _47.MsgDescriptor;
                    fromAmino(object: _47.MsgDescriptorAmino): _47.MsgDescriptor;
                    toAmino(message: _47.MsgDescriptor): _47.MsgDescriptorAmino;
                    fromAminoMsg(object: _47.MsgDescriptorAminoMsg): _47.MsgDescriptor;
                    toAminoMsg(message: _47.MsgDescriptor): _47.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _47.MsgDescriptorProtoMsg): _47.MsgDescriptor;
                    toProto(message: _47.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _47.MsgDescriptor): _47.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _47.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _47.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_47.GetAuthnDescriptorRequest>): _47.GetAuthnDescriptorRequest;
                    fromAmino(_: _47.GetAuthnDescriptorRequestAmino): _47.GetAuthnDescriptorRequest;
                    toAmino(_: _47.GetAuthnDescriptorRequest): _47.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _47.GetAuthnDescriptorRequestAminoMsg): _47.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _47.GetAuthnDescriptorRequest): _47.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _47.GetAuthnDescriptorRequestProtoMsg): _47.GetAuthnDescriptorRequest;
                    toProto(message: _47.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _47.GetAuthnDescriptorRequest): _47.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _47.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_47.GetAuthnDescriptorResponse>): _47.GetAuthnDescriptorResponse;
                    fromAmino(object: _47.GetAuthnDescriptorResponseAmino): _47.GetAuthnDescriptorResponse;
                    toAmino(message: _47.GetAuthnDescriptorResponse): _47.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _47.GetAuthnDescriptorResponseAminoMsg): _47.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _47.GetAuthnDescriptorResponse): _47.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _47.GetAuthnDescriptorResponseProtoMsg): _47.GetAuthnDescriptorResponse;
                    toProto(message: _47.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _47.GetAuthnDescriptorResponse): _47.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _47.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _47.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_47.GetChainDescriptorRequest>): _47.GetChainDescriptorRequest;
                    fromAmino(_: _47.GetChainDescriptorRequestAmino): _47.GetChainDescriptorRequest;
                    toAmino(_: _47.GetChainDescriptorRequest): _47.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _47.GetChainDescriptorRequestAminoMsg): _47.GetChainDescriptorRequest;
                    toAminoMsg(message: _47.GetChainDescriptorRequest): _47.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _47.GetChainDescriptorRequestProtoMsg): _47.GetChainDescriptorRequest;
                    toProto(message: _47.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _47.GetChainDescriptorRequest): _47.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _47.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_47.GetChainDescriptorResponse>): _47.GetChainDescriptorResponse;
                    fromAmino(object: _47.GetChainDescriptorResponseAmino): _47.GetChainDescriptorResponse;
                    toAmino(message: _47.GetChainDescriptorResponse): _47.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _47.GetChainDescriptorResponseAminoMsg): _47.GetChainDescriptorResponse;
                    toAminoMsg(message: _47.GetChainDescriptorResponse): _47.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _47.GetChainDescriptorResponseProtoMsg): _47.GetChainDescriptorResponse;
                    toProto(message: _47.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _47.GetChainDescriptorResponse): _47.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _47.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _47.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_47.GetCodecDescriptorRequest>): _47.GetCodecDescriptorRequest;
                    fromAmino(_: _47.GetCodecDescriptorRequestAmino): _47.GetCodecDescriptorRequest;
                    toAmino(_: _47.GetCodecDescriptorRequest): _47.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _47.GetCodecDescriptorRequestAminoMsg): _47.GetCodecDescriptorRequest;
                    toAminoMsg(message: _47.GetCodecDescriptorRequest): _47.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _47.GetCodecDescriptorRequestProtoMsg): _47.GetCodecDescriptorRequest;
                    toProto(message: _47.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _47.GetCodecDescriptorRequest): _47.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _47.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_47.GetCodecDescriptorResponse>): _47.GetCodecDescriptorResponse;
                    fromAmino(object: _47.GetCodecDescriptorResponseAmino): _47.GetCodecDescriptorResponse;
                    toAmino(message: _47.GetCodecDescriptorResponse): _47.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _47.GetCodecDescriptorResponseAminoMsg): _47.GetCodecDescriptorResponse;
                    toAminoMsg(message: _47.GetCodecDescriptorResponse): _47.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _47.GetCodecDescriptorResponseProtoMsg): _47.GetCodecDescriptorResponse;
                    toProto(message: _47.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _47.GetCodecDescriptorResponse): _47.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _47.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _47.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_47.GetConfigurationDescriptorRequest>): _47.GetConfigurationDescriptorRequest;
                    fromAmino(_: _47.GetConfigurationDescriptorRequestAmino): _47.GetConfigurationDescriptorRequest;
                    toAmino(_: _47.GetConfigurationDescriptorRequest): _47.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _47.GetConfigurationDescriptorRequestAminoMsg): _47.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _47.GetConfigurationDescriptorRequest): _47.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _47.GetConfigurationDescriptorRequestProtoMsg): _47.GetConfigurationDescriptorRequest;
                    toProto(message: _47.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _47.GetConfigurationDescriptorRequest): _47.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _47.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_47.GetConfigurationDescriptorResponse>): _47.GetConfigurationDescriptorResponse;
                    fromAmino(object: _47.GetConfigurationDescriptorResponseAmino): _47.GetConfigurationDescriptorResponse;
                    toAmino(message: _47.GetConfigurationDescriptorResponse): _47.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _47.GetConfigurationDescriptorResponseAminoMsg): _47.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _47.GetConfigurationDescriptorResponse): _47.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _47.GetConfigurationDescriptorResponseProtoMsg): _47.GetConfigurationDescriptorResponse;
                    toProto(message: _47.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _47.GetConfigurationDescriptorResponse): _47.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _47.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _47.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_47.GetQueryServicesDescriptorRequest>): _47.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _47.GetQueryServicesDescriptorRequestAmino): _47.GetQueryServicesDescriptorRequest;
                    toAmino(_: _47.GetQueryServicesDescriptorRequest): _47.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _47.GetQueryServicesDescriptorRequestAminoMsg): _47.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _47.GetQueryServicesDescriptorRequest): _47.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _47.GetQueryServicesDescriptorRequestProtoMsg): _47.GetQueryServicesDescriptorRequest;
                    toProto(message: _47.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _47.GetQueryServicesDescriptorRequest): _47.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _47.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_47.GetQueryServicesDescriptorResponse>): _47.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _47.GetQueryServicesDescriptorResponseAmino): _47.GetQueryServicesDescriptorResponse;
                    toAmino(message: _47.GetQueryServicesDescriptorResponse): _47.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _47.GetQueryServicesDescriptorResponseAminoMsg): _47.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _47.GetQueryServicesDescriptorResponse): _47.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _47.GetQueryServicesDescriptorResponseProtoMsg): _47.GetQueryServicesDescriptorResponse;
                    toProto(message: _47.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _47.GetQueryServicesDescriptorResponse): _47.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _47.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _47.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_47.GetTxDescriptorRequest>): _47.GetTxDescriptorRequest;
                    fromAmino(_: _47.GetTxDescriptorRequestAmino): _47.GetTxDescriptorRequest;
                    toAmino(_: _47.GetTxDescriptorRequest): _47.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _47.GetTxDescriptorRequestAminoMsg): _47.GetTxDescriptorRequest;
                    toAminoMsg(message: _47.GetTxDescriptorRequest): _47.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _47.GetTxDescriptorRequestProtoMsg): _47.GetTxDescriptorRequest;
                    toProto(message: _47.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _47.GetTxDescriptorRequest): _47.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _47.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_47.GetTxDescriptorResponse>): _47.GetTxDescriptorResponse;
                    fromAmino(object: _47.GetTxDescriptorResponseAmino): _47.GetTxDescriptorResponse;
                    toAmino(message: _47.GetTxDescriptorResponse): _47.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _47.GetTxDescriptorResponseAminoMsg): _47.GetTxDescriptorResponse;
                    toAminoMsg(message: _47.GetTxDescriptorResponse): _47.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _47.GetTxDescriptorResponseProtoMsg): _47.GetTxDescriptorResponse;
                    toProto(message: _47.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _47.GetTxDescriptorResponse): _47.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _47.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.QueryServicesDescriptor;
                    fromPartial(object: Partial<_47.QueryServicesDescriptor>): _47.QueryServicesDescriptor;
                    fromAmino(object: _47.QueryServicesDescriptorAmino): _47.QueryServicesDescriptor;
                    toAmino(message: _47.QueryServicesDescriptor): _47.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _47.QueryServicesDescriptorAminoMsg): _47.QueryServicesDescriptor;
                    toAminoMsg(message: _47.QueryServicesDescriptor): _47.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _47.QueryServicesDescriptorProtoMsg): _47.QueryServicesDescriptor;
                    toProto(message: _47.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _47.QueryServicesDescriptor): _47.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _47.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.QueryServiceDescriptor;
                    fromPartial(object: Partial<_47.QueryServiceDescriptor>): _47.QueryServiceDescriptor;
                    fromAmino(object: _47.QueryServiceDescriptorAmino): _47.QueryServiceDescriptor;
                    toAmino(message: _47.QueryServiceDescriptor): _47.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _47.QueryServiceDescriptorAminoMsg): _47.QueryServiceDescriptor;
                    toAminoMsg(message: _47.QueryServiceDescriptor): _47.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _47.QueryServiceDescriptorProtoMsg): _47.QueryServiceDescriptor;
                    toProto(message: _47.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _47.QueryServiceDescriptor): _47.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _47.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.QueryMethodDescriptor;
                    fromPartial(object: Partial<_47.QueryMethodDescriptor>): _47.QueryMethodDescriptor;
                    fromAmino(object: _47.QueryMethodDescriptorAmino): _47.QueryMethodDescriptor;
                    toAmino(message: _47.QueryMethodDescriptor): _47.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _47.QueryMethodDescriptorAminoMsg): _47.QueryMethodDescriptor;
                    toAminoMsg(message: _47.QueryMethodDescriptor): _47.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _47.QueryMethodDescriptorProtoMsg): _47.QueryMethodDescriptor;
                    toProto(message: _47.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _47.QueryMethodDescriptor): _47.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _48.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.Snapshot;
                    fromPartial(object: Partial<_48.Snapshot>): _48.Snapshot;
                    fromAmino(object: _48.SnapshotAmino): _48.Snapshot;
                    toAmino(message: _48.Snapshot): _48.SnapshotAmino;
                    fromAminoMsg(object: _48.SnapshotAminoMsg): _48.Snapshot;
                    toAminoMsg(message: _48.Snapshot): _48.SnapshotAminoMsg;
                    fromProtoMsg(message: _48.SnapshotProtoMsg): _48.Snapshot;
                    toProto(message: _48.Snapshot): Uint8Array;
                    toProtoMsg(message: _48.Snapshot): _48.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _48.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.Metadata;
                    fromPartial(object: Partial<_48.Metadata>): _48.Metadata;
                    fromAmino(object: _48.MetadataAmino): _48.Metadata;
                    toAmino(message: _48.Metadata): _48.MetadataAmino;
                    fromAminoMsg(object: _48.MetadataAminoMsg): _48.Metadata;
                    toAminoMsg(message: _48.Metadata): _48.MetadataAminoMsg;
                    fromProtoMsg(message: _48.MetadataProtoMsg): _48.Metadata;
                    toProto(message: _48.Metadata): Uint8Array;
                    toProtoMsg(message: _48.Metadata): _48.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _48.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.SnapshotItem;
                    fromPartial(object: Partial<_48.SnapshotItem>): _48.SnapshotItem;
                    fromAmino(object: _48.SnapshotItemAmino): _48.SnapshotItem;
                    toAmino(message: _48.SnapshotItem): _48.SnapshotItemAmino;
                    fromAminoMsg(object: _48.SnapshotItemAminoMsg): _48.SnapshotItem;
                    toAminoMsg(message: _48.SnapshotItem): _48.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _48.SnapshotItemProtoMsg): _48.SnapshotItem;
                    toProto(message: _48.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _48.SnapshotItem): _48.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _48.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.SnapshotStoreItem;
                    fromPartial(object: Partial<_48.SnapshotStoreItem>): _48.SnapshotStoreItem;
                    fromAmino(object: _48.SnapshotStoreItemAmino): _48.SnapshotStoreItem;
                    toAmino(message: _48.SnapshotStoreItem): _48.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _48.SnapshotStoreItemAminoMsg): _48.SnapshotStoreItem;
                    toAminoMsg(message: _48.SnapshotStoreItem): _48.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _48.SnapshotStoreItemProtoMsg): _48.SnapshotStoreItem;
                    toProto(message: _48.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _48.SnapshotStoreItem): _48.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _48.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.SnapshotIAVLItem;
                    fromPartial(object: Partial<_48.SnapshotIAVLItem>): _48.SnapshotIAVLItem;
                    fromAmino(object: _48.SnapshotIAVLItemAmino): _48.SnapshotIAVLItem;
                    toAmino(message: _48.SnapshotIAVLItem): _48.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _48.SnapshotIAVLItemAminoMsg): _48.SnapshotIAVLItem;
                    toAminoMsg(message: _48.SnapshotIAVLItem): _48.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _48.SnapshotIAVLItemProtoMsg): _48.SnapshotIAVLItem;
                    toProto(message: _48.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _48.SnapshotIAVLItem): _48.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _48.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_48.SnapshotExtensionMeta>): _48.SnapshotExtensionMeta;
                    fromAmino(object: _48.SnapshotExtensionMetaAmino): _48.SnapshotExtensionMeta;
                    toAmino(message: _48.SnapshotExtensionMeta): _48.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _48.SnapshotExtensionMetaAminoMsg): _48.SnapshotExtensionMeta;
                    toAminoMsg(message: _48.SnapshotExtensionMeta): _48.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _48.SnapshotExtensionMetaProtoMsg): _48.SnapshotExtensionMeta;
                    toProto(message: _48.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _48.SnapshotExtensionMeta): _48.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _48.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_48.SnapshotExtensionPayload>): _48.SnapshotExtensionPayload;
                    fromAmino(object: _48.SnapshotExtensionPayloadAmino): _48.SnapshotExtensionPayload;
                    toAmino(message: _48.SnapshotExtensionPayload): _48.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _48.SnapshotExtensionPayloadAminoMsg): _48.SnapshotExtensionPayload;
                    toAminoMsg(message: _48.SnapshotExtensionPayload): _48.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _48.SnapshotExtensionPayloadProtoMsg): _48.SnapshotExtensionPayload;
                    toProto(message: _48.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _48.SnapshotExtensionPayload): _48.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _50.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.StoreKVPair;
                    fromPartial(object: Partial<_50.StoreKVPair>): _50.StoreKVPair;
                    fromAmino(object: _50.StoreKVPairAmino): _50.StoreKVPair;
                    toAmino(message: _50.StoreKVPair): _50.StoreKVPairAmino;
                    fromAminoMsg(object: _50.StoreKVPairAminoMsg): _50.StoreKVPair;
                    toAminoMsg(message: _50.StoreKVPair): _50.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _50.StoreKVPairProtoMsg): _50.StoreKVPair;
                    toProto(message: _50.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _50.StoreKVPair): _50.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _50.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.BlockMetadata;
                    fromPartial(object: Partial<_50.BlockMetadata>): _50.BlockMetadata;
                    fromAmino(object: _50.BlockMetadataAmino): _50.BlockMetadata;
                    toAmino(message: _50.BlockMetadata): _50.BlockMetadataAmino;
                    fromAminoMsg(object: _50.BlockMetadataAminoMsg): _50.BlockMetadata;
                    toAminoMsg(message: _50.BlockMetadata): _50.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _50.BlockMetadataProtoMsg): _50.BlockMetadata;
                    toProto(message: _50.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _50.BlockMetadata): _50.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _50.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_50.BlockMetadata_DeliverTx>): _50.BlockMetadata_DeliverTx;
                    fromAmino(object: _50.BlockMetadata_DeliverTxAmino): _50.BlockMetadata_DeliverTx;
                    toAmino(message: _50.BlockMetadata_DeliverTx): _50.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _50.BlockMetadata_DeliverTxAminoMsg): _50.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _50.BlockMetadata_DeliverTx): _50.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _50.BlockMetadata_DeliverTxProtoMsg): _50.BlockMetadata_DeliverTx;
                    toProto(message: _50.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _50.BlockMetadata_DeliverTx): _50.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _49.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.CommitInfo;
                    fromPartial(object: Partial<_49.CommitInfo>): _49.CommitInfo;
                    fromAmino(object: _49.CommitInfoAmino): _49.CommitInfo;
                    toAmino(message: _49.CommitInfo): _49.CommitInfoAmino;
                    fromAminoMsg(object: _49.CommitInfoAminoMsg): _49.CommitInfo;
                    toAminoMsg(message: _49.CommitInfo): _49.CommitInfoAminoMsg;
                    fromProtoMsg(message: _49.CommitInfoProtoMsg): _49.CommitInfo;
                    toProto(message: _49.CommitInfo): Uint8Array;
                    toProtoMsg(message: _49.CommitInfo): _49.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _49.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.StoreInfo;
                    fromPartial(object: Partial<_49.StoreInfo>): _49.StoreInfo;
                    fromAmino(object: _49.StoreInfoAmino): _49.StoreInfo;
                    toAmino(message: _49.StoreInfo): _49.StoreInfoAmino;
                    fromAminoMsg(object: _49.StoreInfoAminoMsg): _49.StoreInfo;
                    toAminoMsg(message: _49.StoreInfo): _49.StoreInfoAminoMsg;
                    fromProtoMsg(message: _49.StoreInfoProtoMsg): _49.StoreInfo;
                    toProto(message: _49.StoreInfo): Uint8Array;
                    toProtoMsg(message: _49.StoreInfo): _49.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _49.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.CommitID;
                    fromPartial(object: Partial<_49.CommitID>): _49.CommitID;
                    fromAmino(object: _49.CommitIDAmino): _49.CommitID;
                    toAmino(message: _49.CommitID): _49.CommitIDAmino;
                    fromAminoMsg(object: _49.CommitIDAminoMsg): _49.CommitID;
                    toAminoMsg(message: _49.CommitID): _49.CommitIDAminoMsg;
                    fromProtoMsg(message: _49.CommitIDProtoMsg): _49.CommitID;
                    toProto(message: _49.CommitID): Uint8Array;
                    toProtoMsg(message: _49.CommitID): _49.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _188.ServiceClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    getNodeInfo(request?: _51.GetNodeInfoRequest): Promise<_51.GetNodeInfoResponse>;
                    getSyncing(request?: _51.GetSyncingRequest): Promise<_51.GetSyncingResponse>;
                    getLatestBlock(request?: _51.GetLatestBlockRequest): Promise<_51.GetLatestBlockResponse>;
                    getBlockByHeight(request: _51.GetBlockByHeightRequest): Promise<_51.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _51.GetLatestValidatorSetRequest): Promise<_51.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _51.GetValidatorSetByHeightRequest): Promise<_51.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _173.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _51.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_51.GetValidatorSetByHeightRequest>): _51.GetValidatorSetByHeightRequest;
                    fromAmino(object: _51.GetValidatorSetByHeightRequestAmino): _51.GetValidatorSetByHeightRequest;
                    toAmino(message: _51.GetValidatorSetByHeightRequest): _51.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _51.GetValidatorSetByHeightRequestAminoMsg): _51.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _51.GetValidatorSetByHeightRequest): _51.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _51.GetValidatorSetByHeightRequestProtoMsg): _51.GetValidatorSetByHeightRequest;
                    toProto(message: _51.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _51.GetValidatorSetByHeightRequest): _51.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _51.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_51.GetValidatorSetByHeightResponse>): _51.GetValidatorSetByHeightResponse;
                    fromAmino(object: _51.GetValidatorSetByHeightResponseAmino): _51.GetValidatorSetByHeightResponse;
                    toAmino(message: _51.GetValidatorSetByHeightResponse): _51.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _51.GetValidatorSetByHeightResponseAminoMsg): _51.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _51.GetValidatorSetByHeightResponse): _51.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _51.GetValidatorSetByHeightResponseProtoMsg): _51.GetValidatorSetByHeightResponse;
                    toProto(message: _51.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _51.GetValidatorSetByHeightResponse): _51.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _51.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_51.GetLatestValidatorSetRequest>): _51.GetLatestValidatorSetRequest;
                    fromAmino(object: _51.GetLatestValidatorSetRequestAmino): _51.GetLatestValidatorSetRequest;
                    toAmino(message: _51.GetLatestValidatorSetRequest): _51.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _51.GetLatestValidatorSetRequestAminoMsg): _51.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _51.GetLatestValidatorSetRequest): _51.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _51.GetLatestValidatorSetRequestProtoMsg): _51.GetLatestValidatorSetRequest;
                    toProto(message: _51.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _51.GetLatestValidatorSetRequest): _51.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _51.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_51.GetLatestValidatorSetResponse>): _51.GetLatestValidatorSetResponse;
                    fromAmino(object: _51.GetLatestValidatorSetResponseAmino): _51.GetLatestValidatorSetResponse;
                    toAmino(message: _51.GetLatestValidatorSetResponse): _51.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _51.GetLatestValidatorSetResponseAminoMsg): _51.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _51.GetLatestValidatorSetResponse): _51.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _51.GetLatestValidatorSetResponseProtoMsg): _51.GetLatestValidatorSetResponse;
                    toProto(message: _51.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _51.GetLatestValidatorSetResponse): _51.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _51.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.Validator;
                    fromPartial(object: Partial<_51.Validator>): _51.Validator;
                    fromAmino(object: _51.ValidatorAmino): _51.Validator;
                    toAmino(message: _51.Validator): _51.ValidatorAmino;
                    fromAminoMsg(object: _51.ValidatorAminoMsg): _51.Validator;
                    toAminoMsg(message: _51.Validator): _51.ValidatorAminoMsg;
                    fromProtoMsg(message: _51.ValidatorProtoMsg): _51.Validator;
                    toProto(message: _51.Validator): Uint8Array;
                    toProtoMsg(message: _51.Validator): _51.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _51.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_51.GetBlockByHeightRequest>): _51.GetBlockByHeightRequest;
                    fromAmino(object: _51.GetBlockByHeightRequestAmino): _51.GetBlockByHeightRequest;
                    toAmino(message: _51.GetBlockByHeightRequest): _51.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _51.GetBlockByHeightRequestAminoMsg): _51.GetBlockByHeightRequest;
                    toAminoMsg(message: _51.GetBlockByHeightRequest): _51.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _51.GetBlockByHeightRequestProtoMsg): _51.GetBlockByHeightRequest;
                    toProto(message: _51.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _51.GetBlockByHeightRequest): _51.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _51.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_51.GetBlockByHeightResponse>): _51.GetBlockByHeightResponse;
                    fromAmino(object: _51.GetBlockByHeightResponseAmino): _51.GetBlockByHeightResponse;
                    toAmino(message: _51.GetBlockByHeightResponse): _51.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _51.GetBlockByHeightResponseAminoMsg): _51.GetBlockByHeightResponse;
                    toAminoMsg(message: _51.GetBlockByHeightResponse): _51.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _51.GetBlockByHeightResponseProtoMsg): _51.GetBlockByHeightResponse;
                    toProto(message: _51.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _51.GetBlockByHeightResponse): _51.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _51.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _51.GetLatestBlockRequest;
                    fromPartial(_: Partial<_51.GetLatestBlockRequest>): _51.GetLatestBlockRequest;
                    fromAmino(_: _51.GetLatestBlockRequestAmino): _51.GetLatestBlockRequest;
                    toAmino(_: _51.GetLatestBlockRequest): _51.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _51.GetLatestBlockRequestAminoMsg): _51.GetLatestBlockRequest;
                    toAminoMsg(message: _51.GetLatestBlockRequest): _51.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _51.GetLatestBlockRequestProtoMsg): _51.GetLatestBlockRequest;
                    toProto(message: _51.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _51.GetLatestBlockRequest): _51.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _51.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.GetLatestBlockResponse;
                    fromPartial(object: Partial<_51.GetLatestBlockResponse>): _51.GetLatestBlockResponse;
                    fromAmino(object: _51.GetLatestBlockResponseAmino): _51.GetLatestBlockResponse;
                    toAmino(message: _51.GetLatestBlockResponse): _51.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _51.GetLatestBlockResponseAminoMsg): _51.GetLatestBlockResponse;
                    toAminoMsg(message: _51.GetLatestBlockResponse): _51.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _51.GetLatestBlockResponseProtoMsg): _51.GetLatestBlockResponse;
                    toProto(message: _51.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _51.GetLatestBlockResponse): _51.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _51.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _51.GetSyncingRequest;
                    fromPartial(_: Partial<_51.GetSyncingRequest>): _51.GetSyncingRequest;
                    fromAmino(_: _51.GetSyncingRequestAmino): _51.GetSyncingRequest;
                    toAmino(_: _51.GetSyncingRequest): _51.GetSyncingRequestAmino;
                    fromAminoMsg(object: _51.GetSyncingRequestAminoMsg): _51.GetSyncingRequest;
                    toAminoMsg(message: _51.GetSyncingRequest): _51.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _51.GetSyncingRequestProtoMsg): _51.GetSyncingRequest;
                    toProto(message: _51.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _51.GetSyncingRequest): _51.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _51.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.GetSyncingResponse;
                    fromPartial(object: Partial<_51.GetSyncingResponse>): _51.GetSyncingResponse;
                    fromAmino(object: _51.GetSyncingResponseAmino): _51.GetSyncingResponse;
                    toAmino(message: _51.GetSyncingResponse): _51.GetSyncingResponseAmino;
                    fromAminoMsg(object: _51.GetSyncingResponseAminoMsg): _51.GetSyncingResponse;
                    toAminoMsg(message: _51.GetSyncingResponse): _51.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _51.GetSyncingResponseProtoMsg): _51.GetSyncingResponse;
                    toProto(message: _51.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _51.GetSyncingResponse): _51.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _51.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _51.GetNodeInfoRequest;
                    fromPartial(_: Partial<_51.GetNodeInfoRequest>): _51.GetNodeInfoRequest;
                    fromAmino(_: _51.GetNodeInfoRequestAmino): _51.GetNodeInfoRequest;
                    toAmino(_: _51.GetNodeInfoRequest): _51.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _51.GetNodeInfoRequestAminoMsg): _51.GetNodeInfoRequest;
                    toAminoMsg(message: _51.GetNodeInfoRequest): _51.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _51.GetNodeInfoRequestProtoMsg): _51.GetNodeInfoRequest;
                    toProto(message: _51.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _51.GetNodeInfoRequest): _51.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _51.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.GetNodeInfoResponse;
                    fromPartial(object: Partial<_51.GetNodeInfoResponse>): _51.GetNodeInfoResponse;
                    fromAmino(object: _51.GetNodeInfoResponseAmino): _51.GetNodeInfoResponse;
                    toAmino(message: _51.GetNodeInfoResponse): _51.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _51.GetNodeInfoResponseAminoMsg): _51.GetNodeInfoResponse;
                    toAminoMsg(message: _51.GetNodeInfoResponse): _51.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _51.GetNodeInfoResponseProtoMsg): _51.GetNodeInfoResponse;
                    toProto(message: _51.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _51.GetNodeInfoResponse): _51.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _51.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.VersionInfo;
                    fromPartial(object: Partial<_51.VersionInfo>): _51.VersionInfo;
                    fromAmino(object: _51.VersionInfoAmino): _51.VersionInfo;
                    toAmino(message: _51.VersionInfo): _51.VersionInfoAmino;
                    fromAminoMsg(object: _51.VersionInfoAminoMsg): _51.VersionInfo;
                    toAminoMsg(message: _51.VersionInfo): _51.VersionInfoAminoMsg;
                    fromProtoMsg(message: _51.VersionInfoProtoMsg): _51.VersionInfo;
                    toProto(message: _51.VersionInfo): Uint8Array;
                    toProtoMsg(message: _51.VersionInfo): _51.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _51.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.Module;
                    fromPartial(object: Partial<_51.Module>): _51.Module;
                    fromAmino(object: _51.ModuleAmino): _51.Module;
                    toAmino(message: _51.Module): _51.ModuleAmino;
                    fromAminoMsg(object: _51.ModuleAminoMsg): _51.Module;
                    toAminoMsg(message: _51.Module): _51.ModuleAminoMsg;
                    fromProtoMsg(message: _51.ModuleProtoMsg): _51.Module;
                    toProto(message: _51.Module): Uint8Array;
                    toProtoMsg(message: _51.Module): _51.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _53.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.Coin;
                fromPartial(object: Partial<_53.Coin>): _53.Coin;
                fromAmino(object: _53.CoinAmino): _53.Coin;
                toAmino(message: _53.Coin): _53.CoinAmino;
                fromAminoMsg(object: _53.CoinAminoMsg): _53.Coin;
                toAminoMsg(message: _53.Coin): _53.CoinAminoMsg;
                fromProtoMsg(message: _53.CoinProtoMsg): _53.Coin;
                toProto(message: _53.Coin): Uint8Array;
                toProtoMsg(message: _53.Coin): _53.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _53.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.DecCoin;
                fromPartial(object: Partial<_53.DecCoin>): _53.DecCoin;
                fromAmino(object: _53.DecCoinAmino): _53.DecCoin;
                toAmino(message: _53.DecCoin): _53.DecCoinAmino;
                fromAminoMsg(object: _53.DecCoinAminoMsg): _53.DecCoin;
                toAminoMsg(message: _53.DecCoin): _53.DecCoinAminoMsg;
                fromProtoMsg(message: _53.DecCoinProtoMsg): _53.DecCoin;
                toProto(message: _53.DecCoin): Uint8Array;
                toProtoMsg(message: _53.DecCoin): _53.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _53.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.IntProto;
                fromPartial(object: Partial<_53.IntProto>): _53.IntProto;
                fromAmino(object: _53.IntProtoAmino): _53.IntProto;
                toAmino(message: _53.IntProto): _53.IntProtoAmino;
                fromAminoMsg(object: _53.IntProtoAminoMsg): _53.IntProto;
                toAminoMsg(message: _53.IntProto): _53.IntProtoAminoMsg;
                fromProtoMsg(message: _53.IntProtoProtoMsg): _53.IntProto;
                toProto(message: _53.IntProto): Uint8Array;
                toProtoMsg(message: _53.IntProto): _53.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _53.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.DecProto;
                fromPartial(object: Partial<_53.DecProto>): _53.DecProto;
                fromAmino(object: _53.DecProtoAmino): _53.DecProto;
                toAmino(message: _53.DecProto): _53.DecProtoAmino;
                fromAminoMsg(object: _53.DecProtoAminoMsg): _53.DecProto;
                toAminoMsg(message: _53.DecProto): _53.DecProtoAminoMsg;
                fromProtoMsg(message: _53.DecProtoProtoMsg): _53.DecProto;
                toProto(message: _53.DecProto): Uint8Array;
                toProtoMsg(message: _53.DecProto): _53.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _55.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.GenesisOwners;
                fromPartial(object: Partial<_55.GenesisOwners>): _55.GenesisOwners;
                fromAmino(object: _55.GenesisOwnersAmino): _55.GenesisOwners;
                toAmino(message: _55.GenesisOwners): _55.GenesisOwnersAmino;
                fromAminoMsg(object: _55.GenesisOwnersAminoMsg): _55.GenesisOwners;
                toAminoMsg(message: _55.GenesisOwners): _55.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _55.GenesisOwnersProtoMsg): _55.GenesisOwners;
                toProto(message: _55.GenesisOwners): Uint8Array;
                toProtoMsg(message: _55.GenesisOwners): _55.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _54.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.Capability;
                fromPartial(object: Partial<_54.Capability>): _54.Capability;
                fromAmino(object: _54.CapabilityAmino): _54.Capability;
                toAmino(message: _54.Capability): _54.CapabilityAmino;
                fromAminoMsg(object: _54.CapabilityAminoMsg): _54.Capability;
                toAminoMsg(message: _54.Capability): _54.CapabilityAminoMsg;
                fromProtoMsg(message: _54.CapabilityProtoMsg): _54.Capability;
                toProto(message: _54.Capability): Uint8Array;
                toProtoMsg(message: _54.Capability): _54.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _54.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.Owner;
                fromPartial(object: Partial<_54.Owner>): _54.Owner;
                fromAmino(object: _54.OwnerAmino): _54.Owner;
                toAmino(message: _54.Owner): _54.OwnerAmino;
                fromAminoMsg(object: _54.OwnerAminoMsg): _54.Owner;
                toAminoMsg(message: _54.Owner): _54.OwnerAminoMsg;
                fromProtoMsg(message: _54.OwnerProtoMsg): _54.Owner;
                toProto(message: _54.Owner): Uint8Array;
                toProtoMsg(message: _54.Owner): _54.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _54.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.CapabilityOwners;
                fromPartial(object: Partial<_54.CapabilityOwners>): _54.CapabilityOwners;
                fromAmino(object: _54.CapabilityOwnersAmino): _54.CapabilityOwners;
                toAmino(message: _54.CapabilityOwners): _54.CapabilityOwnersAmino;
                fromAminoMsg(object: _54.CapabilityOwnersAminoMsg): _54.CapabilityOwners;
                toAminoMsg(message: _54.CapabilityOwners): _54.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _54.CapabilityOwnersProtoMsg): _54.CapabilityOwners;
                toProto(message: _54.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _54.CapabilityOwners): _54.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _201.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _57.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _57.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _57.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _57.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _57.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _57.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _57.MsgVerifyInvariant) => _57.MsgVerifyInvariantAmino;
                    fromAmino: (object: _57.MsgVerifyInvariantAmino) => _57.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _57.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgVerifyInvariant;
                fromPartial(object: Partial<_57.MsgVerifyInvariant>): _57.MsgVerifyInvariant;
                fromAmino(object: _57.MsgVerifyInvariantAmino): _57.MsgVerifyInvariant;
                toAmino(message: _57.MsgVerifyInvariant): _57.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _57.MsgVerifyInvariantAminoMsg): _57.MsgVerifyInvariant;
                toAminoMsg(message: _57.MsgVerifyInvariant): _57.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _57.MsgVerifyInvariantProtoMsg): _57.MsgVerifyInvariant;
                toProto(message: _57.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _57.MsgVerifyInvariant): _57.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _57.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_57.MsgVerifyInvariantResponse>): _57.MsgVerifyInvariantResponse;
                fromAmino(_: _57.MsgVerifyInvariantResponseAmino): _57.MsgVerifyInvariantResponse;
                toAmino(_: _57.MsgVerifyInvariantResponse): _57.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _57.MsgVerifyInvariantResponseAminoMsg): _57.MsgVerifyInvariantResponse;
                toAminoMsg(message: _57.MsgVerifyInvariantResponse): _57.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _57.MsgVerifyInvariantResponseProtoMsg): _57.MsgVerifyInvariantResponse;
                toProto(message: _57.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _57.MsgVerifyInvariantResponse): _57.MsgVerifyInvariantResponseProtoMsg;
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
    namespace crypto {
        const ed25519: {
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
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _59.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.LegacyAminoPubKey;
                fromPartial(object: Partial<_59.LegacyAminoPubKey>): _59.LegacyAminoPubKey;
                fromAmino(object: _59.LegacyAminoPubKeyAmino): _59.LegacyAminoPubKey;
                toAmino(message: _59.LegacyAminoPubKey): _59.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _59.LegacyAminoPubKeyAminoMsg): _59.LegacyAminoPubKey;
                toAminoMsg(message: _59.LegacyAminoPubKey): _59.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _59.LegacyAminoPubKeyProtoMsg): _59.LegacyAminoPubKey;
                toProto(message: _59.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _59.LegacyAminoPubKey): _59.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
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
        const secp256r1: {
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
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _202.MsgClientImpl;
            QueryClientImpl: typeof _189.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                validatorOutstandingRewards(request: _64.QueryValidatorOutstandingRewardsRequest): Promise<_64.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _64.QueryValidatorCommissionRequest): Promise<_64.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _64.QueryValidatorSlashesRequest): Promise<_64.QueryValidatorSlashesResponse>;
                delegationRewards(request: _64.QueryDelegationRewardsRequest): Promise<_64.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _64.QueryDelegationTotalRewardsRequest): Promise<_64.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _64.QueryDelegatorValidatorsRequest): Promise<_64.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _64.QueryDelegatorWithdrawAddressRequest): Promise<_64.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _64.QueryCommunityPoolRequest): Promise<_64.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _174.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _65.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _65.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _65.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _65.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _65.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _65.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _65.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _65.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _65.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _65.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _65.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _65.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _65.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _65.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _65.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _65.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _65.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _65.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _65.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _65.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _65.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _65.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _65.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _65.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _65.MsgSetWithdrawAddress) => _65.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _65.MsgSetWithdrawAddressAmino) => _65.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _65.MsgWithdrawDelegatorReward) => _65.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _65.MsgWithdrawDelegatorRewardAmino) => _65.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _65.MsgWithdrawValidatorCommission) => _65.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _65.MsgWithdrawValidatorCommissionAmino) => _65.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _65.MsgFundCommunityPool) => _65.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _65.MsgFundCommunityPoolAmino) => _65.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _65.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_65.MsgSetWithdrawAddress>): _65.MsgSetWithdrawAddress;
                fromAmino(object: _65.MsgSetWithdrawAddressAmino): _65.MsgSetWithdrawAddress;
                toAmino(message: _65.MsgSetWithdrawAddress): _65.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _65.MsgSetWithdrawAddressAminoMsg): _65.MsgSetWithdrawAddress;
                toAminoMsg(message: _65.MsgSetWithdrawAddress): _65.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _65.MsgSetWithdrawAddressProtoMsg): _65.MsgSetWithdrawAddress;
                toProto(message: _65.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _65.MsgSetWithdrawAddress): _65.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _65.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_65.MsgSetWithdrawAddressResponse>): _65.MsgSetWithdrawAddressResponse;
                fromAmino(_: _65.MsgSetWithdrawAddressResponseAmino): _65.MsgSetWithdrawAddressResponse;
                toAmino(_: _65.MsgSetWithdrawAddressResponse): _65.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _65.MsgSetWithdrawAddressResponseAminoMsg): _65.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _65.MsgSetWithdrawAddressResponse): _65.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _65.MsgSetWithdrawAddressResponseProtoMsg): _65.MsgSetWithdrawAddressResponse;
                toProto(message: _65.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _65.MsgSetWithdrawAddressResponse): _65.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _65.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_65.MsgWithdrawDelegatorReward>): _65.MsgWithdrawDelegatorReward;
                fromAmino(object: _65.MsgWithdrawDelegatorRewardAmino): _65.MsgWithdrawDelegatorReward;
                toAmino(message: _65.MsgWithdrawDelegatorReward): _65.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _65.MsgWithdrawDelegatorRewardAminoMsg): _65.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _65.MsgWithdrawDelegatorReward): _65.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _65.MsgWithdrawDelegatorRewardProtoMsg): _65.MsgWithdrawDelegatorReward;
                toProto(message: _65.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _65.MsgWithdrawDelegatorReward): _65.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _65.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_65.MsgWithdrawDelegatorRewardResponse>): _65.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _65.MsgWithdrawDelegatorRewardResponseAmino): _65.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _65.MsgWithdrawDelegatorRewardResponse): _65.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _65.MsgWithdrawDelegatorRewardResponseAminoMsg): _65.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _65.MsgWithdrawDelegatorRewardResponse): _65.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _65.MsgWithdrawDelegatorRewardResponseProtoMsg): _65.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _65.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _65.MsgWithdrawDelegatorRewardResponse): _65.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _65.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_65.MsgWithdrawValidatorCommission>): _65.MsgWithdrawValidatorCommission;
                fromAmino(object: _65.MsgWithdrawValidatorCommissionAmino): _65.MsgWithdrawValidatorCommission;
                toAmino(message: _65.MsgWithdrawValidatorCommission): _65.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _65.MsgWithdrawValidatorCommissionAminoMsg): _65.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _65.MsgWithdrawValidatorCommission): _65.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _65.MsgWithdrawValidatorCommissionProtoMsg): _65.MsgWithdrawValidatorCommission;
                toProto(message: _65.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _65.MsgWithdrawValidatorCommission): _65.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _65.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_65.MsgWithdrawValidatorCommissionResponse>): _65.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _65.MsgWithdrawValidatorCommissionResponseAmino): _65.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _65.MsgWithdrawValidatorCommissionResponse): _65.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _65.MsgWithdrawValidatorCommissionResponseAminoMsg): _65.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _65.MsgWithdrawValidatorCommissionResponse): _65.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _65.MsgWithdrawValidatorCommissionResponseProtoMsg): _65.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _65.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _65.MsgWithdrawValidatorCommissionResponse): _65.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _65.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgFundCommunityPool;
                fromPartial(object: Partial<_65.MsgFundCommunityPool>): _65.MsgFundCommunityPool;
                fromAmino(object: _65.MsgFundCommunityPoolAmino): _65.MsgFundCommunityPool;
                toAmino(message: _65.MsgFundCommunityPool): _65.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _65.MsgFundCommunityPoolAminoMsg): _65.MsgFundCommunityPool;
                toAminoMsg(message: _65.MsgFundCommunityPool): _65.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _65.MsgFundCommunityPoolProtoMsg): _65.MsgFundCommunityPool;
                toProto(message: _65.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _65.MsgFundCommunityPool): _65.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _65.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_65.MsgFundCommunityPoolResponse>): _65.MsgFundCommunityPoolResponse;
                fromAmino(_: _65.MsgFundCommunityPoolResponseAmino): _65.MsgFundCommunityPoolResponse;
                toAmino(_: _65.MsgFundCommunityPoolResponse): _65.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _65.MsgFundCommunityPoolResponseAminoMsg): _65.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _65.MsgFundCommunityPoolResponse): _65.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _65.MsgFundCommunityPoolResponseProtoMsg): _65.MsgFundCommunityPoolResponse;
                toProto(message: _65.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _65.MsgFundCommunityPoolResponse): _65.MsgFundCommunityPoolResponseProtoMsg;
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
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _64.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_64.QueryValidatorOutstandingRewardsRequest>): _64.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _64.QueryValidatorOutstandingRewardsRequestAmino): _64.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _64.QueryValidatorOutstandingRewardsRequest): _64.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _64.QueryValidatorOutstandingRewardsRequestAminoMsg): _64.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _64.QueryValidatorOutstandingRewardsRequest): _64.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryValidatorOutstandingRewardsRequestProtoMsg): _64.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _64.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryValidatorOutstandingRewardsRequest): _64.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _64.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_64.QueryValidatorOutstandingRewardsResponse>): _64.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _64.QueryValidatorOutstandingRewardsResponseAmino): _64.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _64.QueryValidatorOutstandingRewardsResponse): _64.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _64.QueryValidatorOutstandingRewardsResponseAminoMsg): _64.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _64.QueryValidatorOutstandingRewardsResponse): _64.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryValidatorOutstandingRewardsResponseProtoMsg): _64.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _64.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryValidatorOutstandingRewardsResponse): _64.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _64.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_64.QueryValidatorCommissionRequest>): _64.QueryValidatorCommissionRequest;
                fromAmino(object: _64.QueryValidatorCommissionRequestAmino): _64.QueryValidatorCommissionRequest;
                toAmino(message: _64.QueryValidatorCommissionRequest): _64.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _64.QueryValidatorCommissionRequestAminoMsg): _64.QueryValidatorCommissionRequest;
                toAminoMsg(message: _64.QueryValidatorCommissionRequest): _64.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _64.QueryValidatorCommissionRequestProtoMsg): _64.QueryValidatorCommissionRequest;
                toProto(message: _64.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _64.QueryValidatorCommissionRequest): _64.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _64.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_64.QueryValidatorCommissionResponse>): _64.QueryValidatorCommissionResponse;
                fromAmino(object: _64.QueryValidatorCommissionResponseAmino): _64.QueryValidatorCommissionResponse;
                toAmino(message: _64.QueryValidatorCommissionResponse): _64.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _64.QueryValidatorCommissionResponseAminoMsg): _64.QueryValidatorCommissionResponse;
                toAminoMsg(message: _64.QueryValidatorCommissionResponse): _64.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _64.QueryValidatorCommissionResponseProtoMsg): _64.QueryValidatorCommissionResponse;
                toProto(message: _64.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _64.QueryValidatorCommissionResponse): _64.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _64.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_64.QueryValidatorSlashesRequest>): _64.QueryValidatorSlashesRequest;
                fromAmino(object: _64.QueryValidatorSlashesRequestAmino): _64.QueryValidatorSlashesRequest;
                toAmino(message: _64.QueryValidatorSlashesRequest): _64.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _64.QueryValidatorSlashesRequestAminoMsg): _64.QueryValidatorSlashesRequest;
                toAminoMsg(message: _64.QueryValidatorSlashesRequest): _64.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _64.QueryValidatorSlashesRequestProtoMsg): _64.QueryValidatorSlashesRequest;
                toProto(message: _64.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _64.QueryValidatorSlashesRequest): _64.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _64.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_64.QueryValidatorSlashesResponse>): _64.QueryValidatorSlashesResponse;
                fromAmino(object: _64.QueryValidatorSlashesResponseAmino): _64.QueryValidatorSlashesResponse;
                toAmino(message: _64.QueryValidatorSlashesResponse): _64.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _64.QueryValidatorSlashesResponseAminoMsg): _64.QueryValidatorSlashesResponse;
                toAminoMsg(message: _64.QueryValidatorSlashesResponse): _64.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _64.QueryValidatorSlashesResponseProtoMsg): _64.QueryValidatorSlashesResponse;
                toProto(message: _64.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _64.QueryValidatorSlashesResponse): _64.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _64.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_64.QueryDelegationRewardsRequest>): _64.QueryDelegationRewardsRequest;
                fromAmino(object: _64.QueryDelegationRewardsRequestAmino): _64.QueryDelegationRewardsRequest;
                toAmino(message: _64.QueryDelegationRewardsRequest): _64.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _64.QueryDelegationRewardsRequestAminoMsg): _64.QueryDelegationRewardsRequest;
                toAminoMsg(message: _64.QueryDelegationRewardsRequest): _64.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryDelegationRewardsRequestProtoMsg): _64.QueryDelegationRewardsRequest;
                toProto(message: _64.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryDelegationRewardsRequest): _64.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _64.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_64.QueryDelegationRewardsResponse>): _64.QueryDelegationRewardsResponse;
                fromAmino(object: _64.QueryDelegationRewardsResponseAmino): _64.QueryDelegationRewardsResponse;
                toAmino(message: _64.QueryDelegationRewardsResponse): _64.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _64.QueryDelegationRewardsResponseAminoMsg): _64.QueryDelegationRewardsResponse;
                toAminoMsg(message: _64.QueryDelegationRewardsResponse): _64.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryDelegationRewardsResponseProtoMsg): _64.QueryDelegationRewardsResponse;
                toProto(message: _64.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryDelegationRewardsResponse): _64.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _64.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_64.QueryDelegationTotalRewardsRequest>): _64.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _64.QueryDelegationTotalRewardsRequestAmino): _64.QueryDelegationTotalRewardsRequest;
                toAmino(message: _64.QueryDelegationTotalRewardsRequest): _64.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _64.QueryDelegationTotalRewardsRequestAminoMsg): _64.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _64.QueryDelegationTotalRewardsRequest): _64.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryDelegationTotalRewardsRequestProtoMsg): _64.QueryDelegationTotalRewardsRequest;
                toProto(message: _64.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryDelegationTotalRewardsRequest): _64.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _64.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_64.QueryDelegationTotalRewardsResponse>): _64.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _64.QueryDelegationTotalRewardsResponseAmino): _64.QueryDelegationTotalRewardsResponse;
                toAmino(message: _64.QueryDelegationTotalRewardsResponse): _64.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _64.QueryDelegationTotalRewardsResponseAminoMsg): _64.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _64.QueryDelegationTotalRewardsResponse): _64.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryDelegationTotalRewardsResponseProtoMsg): _64.QueryDelegationTotalRewardsResponse;
                toProto(message: _64.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryDelegationTotalRewardsResponse): _64.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _64.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_64.QueryDelegatorValidatorsRequest>): _64.QueryDelegatorValidatorsRequest;
                fromAmino(object: _64.QueryDelegatorValidatorsRequestAmino): _64.QueryDelegatorValidatorsRequest;
                toAmino(message: _64.QueryDelegatorValidatorsRequest): _64.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _64.QueryDelegatorValidatorsRequestAminoMsg): _64.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _64.QueryDelegatorValidatorsRequest): _64.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryDelegatorValidatorsRequestProtoMsg): _64.QueryDelegatorValidatorsRequest;
                toProto(message: _64.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryDelegatorValidatorsRequest): _64.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _64.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_64.QueryDelegatorValidatorsResponse>): _64.QueryDelegatorValidatorsResponse;
                fromAmino(object: _64.QueryDelegatorValidatorsResponseAmino): _64.QueryDelegatorValidatorsResponse;
                toAmino(message: _64.QueryDelegatorValidatorsResponse): _64.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _64.QueryDelegatorValidatorsResponseAminoMsg): _64.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _64.QueryDelegatorValidatorsResponse): _64.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryDelegatorValidatorsResponseProtoMsg): _64.QueryDelegatorValidatorsResponse;
                toProto(message: _64.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryDelegatorValidatorsResponse): _64.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _64.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_64.QueryDelegatorWithdrawAddressRequest>): _64.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _64.QueryDelegatorWithdrawAddressRequestAmino): _64.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _64.QueryDelegatorWithdrawAddressRequest): _64.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _64.QueryDelegatorWithdrawAddressRequestAminoMsg): _64.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _64.QueryDelegatorWithdrawAddressRequest): _64.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _64.QueryDelegatorWithdrawAddressRequestProtoMsg): _64.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _64.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _64.QueryDelegatorWithdrawAddressRequest): _64.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _64.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_64.QueryDelegatorWithdrawAddressResponse>): _64.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _64.QueryDelegatorWithdrawAddressResponseAmino): _64.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _64.QueryDelegatorWithdrawAddressResponse): _64.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _64.QueryDelegatorWithdrawAddressResponseAminoMsg): _64.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _64.QueryDelegatorWithdrawAddressResponse): _64.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _64.QueryDelegatorWithdrawAddressResponseProtoMsg): _64.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _64.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _64.QueryDelegatorWithdrawAddressResponse): _64.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _64.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_64.QueryCommunityPoolRequest>): _64.QueryCommunityPoolRequest;
                fromAmino(_: _64.QueryCommunityPoolRequestAmino): _64.QueryCommunityPoolRequest;
                toAmino(_: _64.QueryCommunityPoolRequest): _64.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _64.QueryCommunityPoolRequestAminoMsg): _64.QueryCommunityPoolRequest;
                toAminoMsg(message: _64.QueryCommunityPoolRequest): _64.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _64.QueryCommunityPoolRequestProtoMsg): _64.QueryCommunityPoolRequest;
                toProto(message: _64.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _64.QueryCommunityPoolRequest): _64.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _64.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_64.QueryCommunityPoolResponse>): _64.QueryCommunityPoolResponse;
                fromAmino(object: _64.QueryCommunityPoolResponseAmino): _64.QueryCommunityPoolResponse;
                toAmino(message: _64.QueryCommunityPoolResponse): _64.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _64.QueryCommunityPoolResponseAminoMsg): _64.QueryCommunityPoolResponse;
                toAminoMsg(message: _64.QueryCommunityPoolResponse): _64.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _64.QueryCommunityPoolResponseProtoMsg): _64.QueryCommunityPoolResponse;
                toProto(message: _64.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _64.QueryCommunityPoolResponse): _64.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _63.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_63.DelegatorWithdrawInfo>): _63.DelegatorWithdrawInfo;
                fromAmino(object: _63.DelegatorWithdrawInfoAmino): _63.DelegatorWithdrawInfo;
                toAmino(message: _63.DelegatorWithdrawInfo): _63.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _63.DelegatorWithdrawInfoAminoMsg): _63.DelegatorWithdrawInfo;
                toAminoMsg(message: _63.DelegatorWithdrawInfo): _63.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _63.DelegatorWithdrawInfoProtoMsg): _63.DelegatorWithdrawInfo;
                toProto(message: _63.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _63.DelegatorWithdrawInfo): _63.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _63.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_63.ValidatorOutstandingRewardsRecord>): _63.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _63.ValidatorOutstandingRewardsRecordAmino): _63.ValidatorOutstandingRewardsRecord;
                toAmino(message: _63.ValidatorOutstandingRewardsRecord): _63.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _63.ValidatorOutstandingRewardsRecordAminoMsg): _63.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _63.ValidatorOutstandingRewardsRecord): _63.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _63.ValidatorOutstandingRewardsRecordProtoMsg): _63.ValidatorOutstandingRewardsRecord;
                toProto(message: _63.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _63.ValidatorOutstandingRewardsRecord): _63.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _63.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_63.ValidatorAccumulatedCommissionRecord>): _63.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _63.ValidatorAccumulatedCommissionRecordAmino): _63.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _63.ValidatorAccumulatedCommissionRecord): _63.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _63.ValidatorAccumulatedCommissionRecordAminoMsg): _63.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _63.ValidatorAccumulatedCommissionRecord): _63.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _63.ValidatorAccumulatedCommissionRecordProtoMsg): _63.ValidatorAccumulatedCommissionRecord;
                toProto(message: _63.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _63.ValidatorAccumulatedCommissionRecord): _63.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _63.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_63.ValidatorHistoricalRewardsRecord>): _63.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _63.ValidatorHistoricalRewardsRecordAmino): _63.ValidatorHistoricalRewardsRecord;
                toAmino(message: _63.ValidatorHistoricalRewardsRecord): _63.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _63.ValidatorHistoricalRewardsRecordAminoMsg): _63.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _63.ValidatorHistoricalRewardsRecord): _63.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _63.ValidatorHistoricalRewardsRecordProtoMsg): _63.ValidatorHistoricalRewardsRecord;
                toProto(message: _63.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _63.ValidatorHistoricalRewardsRecord): _63.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _63.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_63.ValidatorCurrentRewardsRecord>): _63.ValidatorCurrentRewardsRecord;
                fromAmino(object: _63.ValidatorCurrentRewardsRecordAmino): _63.ValidatorCurrentRewardsRecord;
                toAmino(message: _63.ValidatorCurrentRewardsRecord): _63.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _63.ValidatorCurrentRewardsRecordAminoMsg): _63.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _63.ValidatorCurrentRewardsRecord): _63.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _63.ValidatorCurrentRewardsRecordProtoMsg): _63.ValidatorCurrentRewardsRecord;
                toProto(message: _63.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _63.ValidatorCurrentRewardsRecord): _63.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _63.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_63.DelegatorStartingInfoRecord>): _63.DelegatorStartingInfoRecord;
                fromAmino(object: _63.DelegatorStartingInfoRecordAmino): _63.DelegatorStartingInfoRecord;
                toAmino(message: _63.DelegatorStartingInfoRecord): _63.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _63.DelegatorStartingInfoRecordAminoMsg): _63.DelegatorStartingInfoRecord;
                toAminoMsg(message: _63.DelegatorStartingInfoRecord): _63.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _63.DelegatorStartingInfoRecordProtoMsg): _63.DelegatorStartingInfoRecord;
                toProto(message: _63.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _63.DelegatorStartingInfoRecord): _63.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _63.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_63.ValidatorSlashEventRecord>): _63.ValidatorSlashEventRecord;
                fromAmino(object: _63.ValidatorSlashEventRecordAmino): _63.ValidatorSlashEventRecord;
                toAmino(message: _63.ValidatorSlashEventRecord): _63.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _63.ValidatorSlashEventRecordAminoMsg): _63.ValidatorSlashEventRecord;
                toAminoMsg(message: _63.ValidatorSlashEventRecord): _63.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _63.ValidatorSlashEventRecordProtoMsg): _63.ValidatorSlashEventRecord;
                toProto(message: _63.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _63.ValidatorSlashEventRecord): _63.ValidatorSlashEventRecordProtoMsg;
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
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _62.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_62.ValidatorHistoricalRewards>): _62.ValidatorHistoricalRewards;
                fromAmino(object: _62.ValidatorHistoricalRewardsAmino): _62.ValidatorHistoricalRewards;
                toAmino(message: _62.ValidatorHistoricalRewards): _62.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _62.ValidatorHistoricalRewardsAminoMsg): _62.ValidatorHistoricalRewards;
                toAminoMsg(message: _62.ValidatorHistoricalRewards): _62.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _62.ValidatorHistoricalRewardsProtoMsg): _62.ValidatorHistoricalRewards;
                toProto(message: _62.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _62.ValidatorHistoricalRewards): _62.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _62.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.ValidatorCurrentRewards;
                fromPartial(object: Partial<_62.ValidatorCurrentRewards>): _62.ValidatorCurrentRewards;
                fromAmino(object: _62.ValidatorCurrentRewardsAmino): _62.ValidatorCurrentRewards;
                toAmino(message: _62.ValidatorCurrentRewards): _62.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _62.ValidatorCurrentRewardsAminoMsg): _62.ValidatorCurrentRewards;
                toAminoMsg(message: _62.ValidatorCurrentRewards): _62.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _62.ValidatorCurrentRewardsProtoMsg): _62.ValidatorCurrentRewards;
                toProto(message: _62.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _62.ValidatorCurrentRewards): _62.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _62.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_62.ValidatorAccumulatedCommission>): _62.ValidatorAccumulatedCommission;
                fromAmino(object: _62.ValidatorAccumulatedCommissionAmino): _62.ValidatorAccumulatedCommission;
                toAmino(message: _62.ValidatorAccumulatedCommission): _62.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _62.ValidatorAccumulatedCommissionAminoMsg): _62.ValidatorAccumulatedCommission;
                toAminoMsg(message: _62.ValidatorAccumulatedCommission): _62.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _62.ValidatorAccumulatedCommissionProtoMsg): _62.ValidatorAccumulatedCommission;
                toProto(message: _62.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _62.ValidatorAccumulatedCommission): _62.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _62.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_62.ValidatorOutstandingRewards>): _62.ValidatorOutstandingRewards;
                fromAmino(object: _62.ValidatorOutstandingRewardsAmino): _62.ValidatorOutstandingRewards;
                toAmino(message: _62.ValidatorOutstandingRewards): _62.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _62.ValidatorOutstandingRewardsAminoMsg): _62.ValidatorOutstandingRewards;
                toAminoMsg(message: _62.ValidatorOutstandingRewards): _62.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _62.ValidatorOutstandingRewardsProtoMsg): _62.ValidatorOutstandingRewards;
                toProto(message: _62.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _62.ValidatorOutstandingRewards): _62.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _62.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.ValidatorSlashEvent;
                fromPartial(object: Partial<_62.ValidatorSlashEvent>): _62.ValidatorSlashEvent;
                fromAmino(object: _62.ValidatorSlashEventAmino): _62.ValidatorSlashEvent;
                toAmino(message: _62.ValidatorSlashEvent): _62.ValidatorSlashEventAmino;
                fromAminoMsg(object: _62.ValidatorSlashEventAminoMsg): _62.ValidatorSlashEvent;
                toAminoMsg(message: _62.ValidatorSlashEvent): _62.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _62.ValidatorSlashEventProtoMsg): _62.ValidatorSlashEvent;
                toProto(message: _62.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _62.ValidatorSlashEvent): _62.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _62.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.ValidatorSlashEvents;
                fromPartial(object: Partial<_62.ValidatorSlashEvents>): _62.ValidatorSlashEvents;
                fromAmino(object: _62.ValidatorSlashEventsAmino): _62.ValidatorSlashEvents;
                toAmino(message: _62.ValidatorSlashEvents): _62.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _62.ValidatorSlashEventsAminoMsg): _62.ValidatorSlashEvents;
                toAminoMsg(message: _62.ValidatorSlashEvents): _62.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _62.ValidatorSlashEventsProtoMsg): _62.ValidatorSlashEvents;
                toProto(message: _62.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _62.ValidatorSlashEvents): _62.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _62.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.FeePool;
                fromPartial(object: Partial<_62.FeePool>): _62.FeePool;
                fromAmino(object: _62.FeePoolAmino): _62.FeePool;
                toAmino(message: _62.FeePool): _62.FeePoolAmino;
                fromAminoMsg(object: _62.FeePoolAminoMsg): _62.FeePool;
                toAminoMsg(message: _62.FeePool): _62.FeePoolAminoMsg;
                fromProtoMsg(message: _62.FeePoolProtoMsg): _62.FeePool;
                toProto(message: _62.FeePool): Uint8Array;
                toProtoMsg(message: _62.FeePool): _62.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _62.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_62.CommunityPoolSpendProposal>): _62.CommunityPoolSpendProposal;
                fromAmino(object: _62.CommunityPoolSpendProposalAmino): _62.CommunityPoolSpendProposal;
                toAmino(message: _62.CommunityPoolSpendProposal): _62.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _62.CommunityPoolSpendProposalAminoMsg): _62.CommunityPoolSpendProposal;
                toAminoMsg(message: _62.CommunityPoolSpendProposal): _62.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _62.CommunityPoolSpendProposalProtoMsg): _62.CommunityPoolSpendProposal;
                toProto(message: _62.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _62.CommunityPoolSpendProposal): _62.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _62.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.DelegatorStartingInfo;
                fromPartial(object: Partial<_62.DelegatorStartingInfo>): _62.DelegatorStartingInfo;
                fromAmino(object: _62.DelegatorStartingInfoAmino): _62.DelegatorStartingInfo;
                toAmino(message: _62.DelegatorStartingInfo): _62.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _62.DelegatorStartingInfoAminoMsg): _62.DelegatorStartingInfo;
                toAminoMsg(message: _62.DelegatorStartingInfo): _62.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _62.DelegatorStartingInfoProtoMsg): _62.DelegatorStartingInfo;
                toProto(message: _62.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _62.DelegatorStartingInfo): _62.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _62.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.DelegationDelegatorReward;
                fromPartial(object: Partial<_62.DelegationDelegatorReward>): _62.DelegationDelegatorReward;
                fromAmino(object: _62.DelegationDelegatorRewardAmino): _62.DelegationDelegatorReward;
                toAmino(message: _62.DelegationDelegatorReward): _62.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _62.DelegationDelegatorRewardAminoMsg): _62.DelegationDelegatorReward;
                toAminoMsg(message: _62.DelegationDelegatorReward): _62.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _62.DelegationDelegatorRewardProtoMsg): _62.DelegationDelegatorReward;
                toProto(message: _62.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _62.DelegationDelegatorReward): _62.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _62.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_62.CommunityPoolSpendProposalWithDeposit>): _62.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _62.CommunityPoolSpendProposalWithDepositAmino): _62.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _62.CommunityPoolSpendProposalWithDeposit): _62.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _62.CommunityPoolSpendProposalWithDepositAminoMsg): _62.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _62.CommunityPoolSpendProposalWithDeposit): _62.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _62.CommunityPoolSpendProposalWithDepositProtoMsg): _62.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _62.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _62.CommunityPoolSpendProposalWithDeposit): _62.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _203.MsgClientImpl;
            QueryClientImpl: typeof _190.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                evidence(request: _68.QueryEvidenceRequest): Promise<_68.QueryEvidenceResponse>;
                allEvidence(request?: _68.QueryAllEvidenceRequest): Promise<_68.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _175.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _69.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _69.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _69.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _69.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _69.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _69.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _69.MsgSubmitEvidence) => _69.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _69.MsgSubmitEvidenceAmino) => _69.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _69.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgSubmitEvidence;
                fromPartial(object: Partial<_69.MsgSubmitEvidence>): _69.MsgSubmitEvidence;
                fromAmino(object: _69.MsgSubmitEvidenceAmino): _69.MsgSubmitEvidence;
                toAmino(message: _69.MsgSubmitEvidence): _69.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _69.MsgSubmitEvidenceAminoMsg): _69.MsgSubmitEvidence;
                toAminoMsg(message: _69.MsgSubmitEvidence): _69.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _69.MsgSubmitEvidenceProtoMsg): _69.MsgSubmitEvidence;
                toProto(message: _69.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _69.MsgSubmitEvidence): _69.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _69.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_69.MsgSubmitEvidenceResponse>): _69.MsgSubmitEvidenceResponse;
                fromAmino(object: _69.MsgSubmitEvidenceResponseAmino): _69.MsgSubmitEvidenceResponse;
                toAmino(message: _69.MsgSubmitEvidenceResponse): _69.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _69.MsgSubmitEvidenceResponseAminoMsg): _69.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _69.MsgSubmitEvidenceResponse): _69.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _69.MsgSubmitEvidenceResponseProtoMsg): _69.MsgSubmitEvidenceResponse;
                toProto(message: _69.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _69.MsgSubmitEvidenceResponse): _69.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _68.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryEvidenceRequest;
                fromPartial(object: Partial<_68.QueryEvidenceRequest>): _68.QueryEvidenceRequest;
                fromAmino(object: _68.QueryEvidenceRequestAmino): _68.QueryEvidenceRequest;
                toAmino(message: _68.QueryEvidenceRequest): _68.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _68.QueryEvidenceRequestAminoMsg): _68.QueryEvidenceRequest;
                toAminoMsg(message: _68.QueryEvidenceRequest): _68.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _68.QueryEvidenceRequestProtoMsg): _68.QueryEvidenceRequest;
                toProto(message: _68.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _68.QueryEvidenceRequest): _68.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _68.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryEvidenceResponse;
                fromPartial(object: Partial<_68.QueryEvidenceResponse>): _68.QueryEvidenceResponse;
                fromAmino(object: _68.QueryEvidenceResponseAmino): _68.QueryEvidenceResponse;
                toAmino(message: _68.QueryEvidenceResponse): _68.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _68.QueryEvidenceResponseAminoMsg): _68.QueryEvidenceResponse;
                toAminoMsg(message: _68.QueryEvidenceResponse): _68.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _68.QueryEvidenceResponseProtoMsg): _68.QueryEvidenceResponse;
                toProto(message: _68.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _68.QueryEvidenceResponse): _68.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _68.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_68.QueryAllEvidenceRequest>): _68.QueryAllEvidenceRequest;
                fromAmino(object: _68.QueryAllEvidenceRequestAmino): _68.QueryAllEvidenceRequest;
                toAmino(message: _68.QueryAllEvidenceRequest): _68.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _68.QueryAllEvidenceRequestAminoMsg): _68.QueryAllEvidenceRequest;
                toAminoMsg(message: _68.QueryAllEvidenceRequest): _68.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _68.QueryAllEvidenceRequestProtoMsg): _68.QueryAllEvidenceRequest;
                toProto(message: _68.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _68.QueryAllEvidenceRequest): _68.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _68.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_68.QueryAllEvidenceResponse>): _68.QueryAllEvidenceResponse;
                fromAmino(object: _68.QueryAllEvidenceResponseAmino): _68.QueryAllEvidenceResponse;
                toAmino(message: _68.QueryAllEvidenceResponse): _68.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _68.QueryAllEvidenceResponseAminoMsg): _68.QueryAllEvidenceResponse;
                toAminoMsg(message: _68.QueryAllEvidenceResponse): _68.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _68.QueryAllEvidenceResponseProtoMsg): _68.QueryAllEvidenceResponse;
                toProto(message: _68.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _68.QueryAllEvidenceResponse): _68.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _67.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.GenesisState;
                fromPartial(object: Partial<_67.GenesisState>): _67.GenesisState;
                fromAmino(object: _67.GenesisStateAmino): _67.GenesisState;
                toAmino(message: _67.GenesisState): _67.GenesisStateAmino;
                fromAminoMsg(object: _67.GenesisStateAminoMsg): _67.GenesisState;
                toAminoMsg(message: _67.GenesisState): _67.GenesisStateAminoMsg;
                fromProtoMsg(message: _67.GenesisStateProtoMsg): _67.GenesisState;
                toProto(message: _67.GenesisState): Uint8Array;
                toProtoMsg(message: _67.GenesisState): _67.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _66.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Equivocation;
                fromPartial(object: Partial<_66.Equivocation>): _66.Equivocation;
                fromAmino(object: _66.EquivocationAmino): _66.Equivocation;
                toAmino(message: _66.Equivocation): _66.EquivocationAmino;
                fromAminoMsg(object: _66.EquivocationAminoMsg): _66.Equivocation;
                toAminoMsg(message: _66.Equivocation): _66.EquivocationAminoMsg;
                fromProtoMsg(message: _66.EquivocationProtoMsg): _66.Equivocation;
                toProto(message: _66.Equivocation): Uint8Array;
                toProtoMsg(message: _66.Equivocation): _66.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _204.MsgClientImpl;
            QueryClientImpl: typeof _191.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                allowance(request: _72.QueryAllowanceRequest): Promise<_72.QueryAllowanceResponse>;
                allowances(request: _72.QueryAllowancesRequest): Promise<_72.QueryAllowancesResponse>;
                allowancesByGranter(request: _72.QueryAllowancesByGranterRequest): Promise<_72.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _176.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _73.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _73.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _73.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _73.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _73.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _73.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _73.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _73.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _73.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _73.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _73.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _73.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _73.MsgGrantAllowance) => _73.MsgGrantAllowanceAmino;
                    fromAmino: (object: _73.MsgGrantAllowanceAmino) => _73.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _73.MsgRevokeAllowance) => _73.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _73.MsgRevokeAllowanceAmino) => _73.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _73.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.MsgGrantAllowance;
                fromPartial(object: Partial<_73.MsgGrantAllowance>): _73.MsgGrantAllowance;
                fromAmino(object: _73.MsgGrantAllowanceAmino): _73.MsgGrantAllowance;
                toAmino(message: _73.MsgGrantAllowance): _73.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _73.MsgGrantAllowanceAminoMsg): _73.MsgGrantAllowance;
                toAminoMsg(message: _73.MsgGrantAllowance): _73.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _73.MsgGrantAllowanceProtoMsg): _73.MsgGrantAllowance;
                toProto(message: _73.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _73.MsgGrantAllowance): _73.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _73.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _73.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_73.MsgGrantAllowanceResponse>): _73.MsgGrantAllowanceResponse;
                fromAmino(_: _73.MsgGrantAllowanceResponseAmino): _73.MsgGrantAllowanceResponse;
                toAmino(_: _73.MsgGrantAllowanceResponse): _73.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _73.MsgGrantAllowanceResponseAminoMsg): _73.MsgGrantAllowanceResponse;
                toAminoMsg(message: _73.MsgGrantAllowanceResponse): _73.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _73.MsgGrantAllowanceResponseProtoMsg): _73.MsgGrantAllowanceResponse;
                toProto(message: _73.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _73.MsgGrantAllowanceResponse): _73.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _73.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.MsgRevokeAllowance;
                fromPartial(object: Partial<_73.MsgRevokeAllowance>): _73.MsgRevokeAllowance;
                fromAmino(object: _73.MsgRevokeAllowanceAmino): _73.MsgRevokeAllowance;
                toAmino(message: _73.MsgRevokeAllowance): _73.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _73.MsgRevokeAllowanceAminoMsg): _73.MsgRevokeAllowance;
                toAminoMsg(message: _73.MsgRevokeAllowance): _73.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _73.MsgRevokeAllowanceProtoMsg): _73.MsgRevokeAllowance;
                toProto(message: _73.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _73.MsgRevokeAllowance): _73.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _73.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _73.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_73.MsgRevokeAllowanceResponse>): _73.MsgRevokeAllowanceResponse;
                fromAmino(_: _73.MsgRevokeAllowanceResponseAmino): _73.MsgRevokeAllowanceResponse;
                toAmino(_: _73.MsgRevokeAllowanceResponse): _73.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _73.MsgRevokeAllowanceResponseAminoMsg): _73.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _73.MsgRevokeAllowanceResponse): _73.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _73.MsgRevokeAllowanceResponseProtoMsg): _73.MsgRevokeAllowanceResponse;
                toProto(message: _73.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _73.MsgRevokeAllowanceResponse): _73.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _70.BasicAllowance | _70.PeriodicAllowance | _70.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _72.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryAllowanceRequest;
                fromPartial(object: Partial<_72.QueryAllowanceRequest>): _72.QueryAllowanceRequest;
                fromAmino(object: _72.QueryAllowanceRequestAmino): _72.QueryAllowanceRequest;
                toAmino(message: _72.QueryAllowanceRequest): _72.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _72.QueryAllowanceRequestAminoMsg): _72.QueryAllowanceRequest;
                toAminoMsg(message: _72.QueryAllowanceRequest): _72.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _72.QueryAllowanceRequestProtoMsg): _72.QueryAllowanceRequest;
                toProto(message: _72.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _72.QueryAllowanceRequest): _72.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _72.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryAllowanceResponse;
                fromPartial(object: Partial<_72.QueryAllowanceResponse>): _72.QueryAllowanceResponse;
                fromAmino(object: _72.QueryAllowanceResponseAmino): _72.QueryAllowanceResponse;
                toAmino(message: _72.QueryAllowanceResponse): _72.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _72.QueryAllowanceResponseAminoMsg): _72.QueryAllowanceResponse;
                toAminoMsg(message: _72.QueryAllowanceResponse): _72.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _72.QueryAllowanceResponseProtoMsg): _72.QueryAllowanceResponse;
                toProto(message: _72.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _72.QueryAllowanceResponse): _72.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _72.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryAllowancesRequest;
                fromPartial(object: Partial<_72.QueryAllowancesRequest>): _72.QueryAllowancesRequest;
                fromAmino(object: _72.QueryAllowancesRequestAmino): _72.QueryAllowancesRequest;
                toAmino(message: _72.QueryAllowancesRequest): _72.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _72.QueryAllowancesRequestAminoMsg): _72.QueryAllowancesRequest;
                toAminoMsg(message: _72.QueryAllowancesRequest): _72.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _72.QueryAllowancesRequestProtoMsg): _72.QueryAllowancesRequest;
                toProto(message: _72.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _72.QueryAllowancesRequest): _72.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _72.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryAllowancesResponse;
                fromPartial(object: Partial<_72.QueryAllowancesResponse>): _72.QueryAllowancesResponse;
                fromAmino(object: _72.QueryAllowancesResponseAmino): _72.QueryAllowancesResponse;
                toAmino(message: _72.QueryAllowancesResponse): _72.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _72.QueryAllowancesResponseAminoMsg): _72.QueryAllowancesResponse;
                toAminoMsg(message: _72.QueryAllowancesResponse): _72.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _72.QueryAllowancesResponseProtoMsg): _72.QueryAllowancesResponse;
                toProto(message: _72.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _72.QueryAllowancesResponse): _72.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _72.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_72.QueryAllowancesByGranterRequest>): _72.QueryAllowancesByGranterRequest;
                fromAmino(object: _72.QueryAllowancesByGranterRequestAmino): _72.QueryAllowancesByGranterRequest;
                toAmino(message: _72.QueryAllowancesByGranterRequest): _72.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _72.QueryAllowancesByGranterRequestAminoMsg): _72.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _72.QueryAllowancesByGranterRequest): _72.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _72.QueryAllowancesByGranterRequestProtoMsg): _72.QueryAllowancesByGranterRequest;
                toProto(message: _72.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _72.QueryAllowancesByGranterRequest): _72.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _72.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_72.QueryAllowancesByGranterResponse>): _72.QueryAllowancesByGranterResponse;
                fromAmino(object: _72.QueryAllowancesByGranterResponseAmino): _72.QueryAllowancesByGranterResponse;
                toAmino(message: _72.QueryAllowancesByGranterResponse): _72.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _72.QueryAllowancesByGranterResponseAminoMsg): _72.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _72.QueryAllowancesByGranterResponse): _72.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _72.QueryAllowancesByGranterResponseProtoMsg): _72.QueryAllowancesByGranterResponse;
                toProto(message: _72.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _72.QueryAllowancesByGranterResponse): _72.QueryAllowancesByGranterResponseProtoMsg;
            };
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _70.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.BasicAllowance;
                fromPartial(object: Partial<_70.BasicAllowance>): _70.BasicAllowance;
                fromAmino(object: _70.BasicAllowanceAmino): _70.BasicAllowance;
                toAmino(message: _70.BasicAllowance): _70.BasicAllowanceAmino;
                fromAminoMsg(object: _70.BasicAllowanceAminoMsg): _70.BasicAllowance;
                toAminoMsg(message: _70.BasicAllowance): _70.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _70.BasicAllowanceProtoMsg): _70.BasicAllowance;
                toProto(message: _70.BasicAllowance): Uint8Array;
                toProtoMsg(message: _70.BasicAllowance): _70.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _70.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.PeriodicAllowance;
                fromPartial(object: Partial<_70.PeriodicAllowance>): _70.PeriodicAllowance;
                fromAmino(object: _70.PeriodicAllowanceAmino): _70.PeriodicAllowance;
                toAmino(message: _70.PeriodicAllowance): _70.PeriodicAllowanceAmino;
                fromAminoMsg(object: _70.PeriodicAllowanceAminoMsg): _70.PeriodicAllowance;
                toAminoMsg(message: _70.PeriodicAllowance): _70.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _70.PeriodicAllowanceProtoMsg): _70.PeriodicAllowance;
                toProto(message: _70.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _70.PeriodicAllowance): _70.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _70.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.AllowedMsgAllowance;
                fromPartial(object: Partial<_70.AllowedMsgAllowance>): _70.AllowedMsgAllowance;
                fromAmino(object: _70.AllowedMsgAllowanceAmino): _70.AllowedMsgAllowance;
                toAmino(message: _70.AllowedMsgAllowance): _70.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _70.AllowedMsgAllowanceAminoMsg): _70.AllowedMsgAllowance;
                toAminoMsg(message: _70.AllowedMsgAllowance): _70.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _70.AllowedMsgAllowanceProtoMsg): _70.AllowedMsgAllowance;
                toProto(message: _70.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _70.AllowedMsgAllowance): _70.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _70.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Grant;
                fromPartial(object: Partial<_70.Grant>): _70.Grant;
                fromAmino(object: _70.GrantAmino): _70.Grant;
                toAmino(message: _70.Grant): _70.GrantAmino;
                fromAminoMsg(object: _70.GrantAminoMsg): _70.Grant;
                toAminoMsg(message: _70.Grant): _70.GrantAminoMsg;
                fromProtoMsg(message: _70.GrantProtoMsg): _70.Grant;
                toProto(message: _70.Grant): Uint8Array;
                toProtoMsg(message: _70.Grant): _70.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _205.MsgClientImpl;
            QueryClientImpl: typeof _192.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                proposal(request: _77.QueryProposalRequest): Promise<_77.QueryProposalResponse>;
                proposals(request: _77.QueryProposalsRequest): Promise<_77.QueryProposalsResponse>;
                vote(request: _77.QueryVoteRequest): Promise<_77.QueryVoteResponse>;
                votes(request: _77.QueryVotesRequest): Promise<_77.QueryVotesResponse>;
                params(request: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                deposit(request: _77.QueryDepositRequest): Promise<_77.QueryDepositResponse>;
                deposits(request: _77.QueryDepositsRequest): Promise<_77.QueryDepositsResponse>;
                tallyResult(request: _77.QueryTallyResultRequest): Promise<_77.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _177.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _78.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _78.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _78.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _78.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _78.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _78.MsgSubmitProposal;
                    };
                    vote(value: _78.MsgVote): {
                        typeUrl: string;
                        value: _78.MsgVote;
                    };
                    voteWeighted(value: _78.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _78.MsgVoteWeighted;
                    };
                    deposit(value: _78.MsgDeposit): {
                        typeUrl: string;
                        value: _78.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _78.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _78.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _78.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _78.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _78.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _78.MsgSubmitProposal;
                    };
                    vote(value: _78.MsgVote): {
                        typeUrl: string;
                        value: _78.MsgVote;
                    };
                    voteWeighted(value: _78.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _78.MsgVoteWeighted;
                    };
                    deposit(value: _78.MsgDeposit): {
                        typeUrl: string;
                        value: _78.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _78.MsgSubmitProposal) => _78.MsgSubmitProposalAmino;
                    fromAmino: (object: _78.MsgSubmitProposalAmino) => _78.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _78.MsgVote) => _78.MsgVoteAmino;
                    fromAmino: (object: _78.MsgVoteAmino) => _78.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _78.MsgVoteWeighted) => _78.MsgVoteWeightedAmino;
                    fromAmino: (object: _78.MsgVoteWeightedAmino) => _78.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _78.MsgDeposit) => _78.MsgDepositAmino;
                    fromAmino: (object: _78.MsgDepositAmino) => _78.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _78.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgSubmitProposal;
                fromPartial(object: Partial<_78.MsgSubmitProposal>): _78.MsgSubmitProposal;
                fromAmino(object: _78.MsgSubmitProposalAmino): _78.MsgSubmitProposal;
                toAmino(message: _78.MsgSubmitProposal): _78.MsgSubmitProposalAmino;
                fromAminoMsg(object: _78.MsgSubmitProposalAminoMsg): _78.MsgSubmitProposal;
                toAminoMsg(message: _78.MsgSubmitProposal): _78.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _78.MsgSubmitProposalProtoMsg): _78.MsgSubmitProposal;
                toProto(message: _78.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _78.MsgSubmitProposal): _78.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _78.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_78.MsgSubmitProposalResponse>): _78.MsgSubmitProposalResponse;
                fromAmino(object: _78.MsgSubmitProposalResponseAmino): _78.MsgSubmitProposalResponse;
                toAmino(message: _78.MsgSubmitProposalResponse): _78.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _78.MsgSubmitProposalResponseAminoMsg): _78.MsgSubmitProposalResponse;
                toAminoMsg(message: _78.MsgSubmitProposalResponse): _78.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _78.MsgSubmitProposalResponseProtoMsg): _78.MsgSubmitProposalResponse;
                toProto(message: _78.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _78.MsgSubmitProposalResponse): _78.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _78.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgVote;
                fromPartial(object: Partial<_78.MsgVote>): _78.MsgVote;
                fromAmino(object: _78.MsgVoteAmino): _78.MsgVote;
                toAmino(message: _78.MsgVote): _78.MsgVoteAmino;
                fromAminoMsg(object: _78.MsgVoteAminoMsg): _78.MsgVote;
                toAminoMsg(message: _78.MsgVote): _78.MsgVoteAminoMsg;
                fromProtoMsg(message: _78.MsgVoteProtoMsg): _78.MsgVote;
                toProto(message: _78.MsgVote): Uint8Array;
                toProtoMsg(message: _78.MsgVote): _78.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _78.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _78.MsgVoteResponse;
                fromPartial(_: Partial<_78.MsgVoteResponse>): _78.MsgVoteResponse;
                fromAmino(_: _78.MsgVoteResponseAmino): _78.MsgVoteResponse;
                toAmino(_: _78.MsgVoteResponse): _78.MsgVoteResponseAmino;
                fromAminoMsg(object: _78.MsgVoteResponseAminoMsg): _78.MsgVoteResponse;
                toAminoMsg(message: _78.MsgVoteResponse): _78.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _78.MsgVoteResponseProtoMsg): _78.MsgVoteResponse;
                toProto(message: _78.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _78.MsgVoteResponse): _78.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _78.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgVoteWeighted;
                fromPartial(object: Partial<_78.MsgVoteWeighted>): _78.MsgVoteWeighted;
                fromAmino(object: _78.MsgVoteWeightedAmino): _78.MsgVoteWeighted;
                toAmino(message: _78.MsgVoteWeighted): _78.MsgVoteWeightedAmino;
                fromAminoMsg(object: _78.MsgVoteWeightedAminoMsg): _78.MsgVoteWeighted;
                toAminoMsg(message: _78.MsgVoteWeighted): _78.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _78.MsgVoteWeightedProtoMsg): _78.MsgVoteWeighted;
                toProto(message: _78.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _78.MsgVoteWeighted): _78.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _78.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _78.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_78.MsgVoteWeightedResponse>): _78.MsgVoteWeightedResponse;
                fromAmino(_: _78.MsgVoteWeightedResponseAmino): _78.MsgVoteWeightedResponse;
                toAmino(_: _78.MsgVoteWeightedResponse): _78.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _78.MsgVoteWeightedResponseAminoMsg): _78.MsgVoteWeightedResponse;
                toAminoMsg(message: _78.MsgVoteWeightedResponse): _78.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _78.MsgVoteWeightedResponseProtoMsg): _78.MsgVoteWeightedResponse;
                toProto(message: _78.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _78.MsgVoteWeightedResponse): _78.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _78.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgDeposit;
                fromPartial(object: Partial<_78.MsgDeposit>): _78.MsgDeposit;
                fromAmino(object: _78.MsgDepositAmino): _78.MsgDeposit;
                toAmino(message: _78.MsgDeposit): _78.MsgDepositAmino;
                fromAminoMsg(object: _78.MsgDepositAminoMsg): _78.MsgDeposit;
                toAminoMsg(message: _78.MsgDeposit): _78.MsgDepositAminoMsg;
                fromProtoMsg(message: _78.MsgDepositProtoMsg): _78.MsgDeposit;
                toProto(message: _78.MsgDeposit): Uint8Array;
                toProtoMsg(message: _78.MsgDeposit): _78.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _78.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _78.MsgDepositResponse;
                fromPartial(_: Partial<_78.MsgDepositResponse>): _78.MsgDepositResponse;
                fromAmino(_: _78.MsgDepositResponseAmino): _78.MsgDepositResponse;
                toAmino(_: _78.MsgDepositResponse): _78.MsgDepositResponseAmino;
                fromAminoMsg(object: _78.MsgDepositResponseAminoMsg): _78.MsgDepositResponse;
                toAminoMsg(message: _78.MsgDepositResponse): _78.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _78.MsgDepositResponseProtoMsg): _78.MsgDepositResponse;
                toProto(message: _78.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _78.MsgDepositResponse): _78.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _76.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _77.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryProposalRequest;
                fromPartial(object: Partial<_77.QueryProposalRequest>): _77.QueryProposalRequest;
                fromAmino(object: _77.QueryProposalRequestAmino): _77.QueryProposalRequest;
                toAmino(message: _77.QueryProposalRequest): _77.QueryProposalRequestAmino;
                fromAminoMsg(object: _77.QueryProposalRequestAminoMsg): _77.QueryProposalRequest;
                toAminoMsg(message: _77.QueryProposalRequest): _77.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _77.QueryProposalRequestProtoMsg): _77.QueryProposalRequest;
                toProto(message: _77.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _77.QueryProposalRequest): _77.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _77.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryProposalResponse;
                fromPartial(object: Partial<_77.QueryProposalResponse>): _77.QueryProposalResponse;
                fromAmino(object: _77.QueryProposalResponseAmino): _77.QueryProposalResponse;
                toAmino(message: _77.QueryProposalResponse): _77.QueryProposalResponseAmino;
                fromAminoMsg(object: _77.QueryProposalResponseAminoMsg): _77.QueryProposalResponse;
                toAminoMsg(message: _77.QueryProposalResponse): _77.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _77.QueryProposalResponseProtoMsg): _77.QueryProposalResponse;
                toProto(message: _77.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _77.QueryProposalResponse): _77.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _77.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryProposalsRequest;
                fromPartial(object: Partial<_77.QueryProposalsRequest>): _77.QueryProposalsRequest;
                fromAmino(object: _77.QueryProposalsRequestAmino): _77.QueryProposalsRequest;
                toAmino(message: _77.QueryProposalsRequest): _77.QueryProposalsRequestAmino;
                fromAminoMsg(object: _77.QueryProposalsRequestAminoMsg): _77.QueryProposalsRequest;
                toAminoMsg(message: _77.QueryProposalsRequest): _77.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _77.QueryProposalsRequestProtoMsg): _77.QueryProposalsRequest;
                toProto(message: _77.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _77.QueryProposalsRequest): _77.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _77.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryProposalsResponse;
                fromPartial(object: Partial<_77.QueryProposalsResponse>): _77.QueryProposalsResponse;
                fromAmino(object: _77.QueryProposalsResponseAmino): _77.QueryProposalsResponse;
                toAmino(message: _77.QueryProposalsResponse): _77.QueryProposalsResponseAmino;
                fromAminoMsg(object: _77.QueryProposalsResponseAminoMsg): _77.QueryProposalsResponse;
                toAminoMsg(message: _77.QueryProposalsResponse): _77.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _77.QueryProposalsResponseProtoMsg): _77.QueryProposalsResponse;
                toProto(message: _77.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _77.QueryProposalsResponse): _77.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _77.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryVoteRequest;
                fromPartial(object: Partial<_77.QueryVoteRequest>): _77.QueryVoteRequest;
                fromAmino(object: _77.QueryVoteRequestAmino): _77.QueryVoteRequest;
                toAmino(message: _77.QueryVoteRequest): _77.QueryVoteRequestAmino;
                fromAminoMsg(object: _77.QueryVoteRequestAminoMsg): _77.QueryVoteRequest;
                toAminoMsg(message: _77.QueryVoteRequest): _77.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _77.QueryVoteRequestProtoMsg): _77.QueryVoteRequest;
                toProto(message: _77.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _77.QueryVoteRequest): _77.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _77.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryVoteResponse;
                fromPartial(object: Partial<_77.QueryVoteResponse>): _77.QueryVoteResponse;
                fromAmino(object: _77.QueryVoteResponseAmino): _77.QueryVoteResponse;
                toAmino(message: _77.QueryVoteResponse): _77.QueryVoteResponseAmino;
                fromAminoMsg(object: _77.QueryVoteResponseAminoMsg): _77.QueryVoteResponse;
                toAminoMsg(message: _77.QueryVoteResponse): _77.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _77.QueryVoteResponseProtoMsg): _77.QueryVoteResponse;
                toProto(message: _77.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _77.QueryVoteResponse): _77.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _77.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryVotesRequest;
                fromPartial(object: Partial<_77.QueryVotesRequest>): _77.QueryVotesRequest;
                fromAmino(object: _77.QueryVotesRequestAmino): _77.QueryVotesRequest;
                toAmino(message: _77.QueryVotesRequest): _77.QueryVotesRequestAmino;
                fromAminoMsg(object: _77.QueryVotesRequestAminoMsg): _77.QueryVotesRequest;
                toAminoMsg(message: _77.QueryVotesRequest): _77.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _77.QueryVotesRequestProtoMsg): _77.QueryVotesRequest;
                toProto(message: _77.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _77.QueryVotesRequest): _77.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _77.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryVotesResponse;
                fromPartial(object: Partial<_77.QueryVotesResponse>): _77.QueryVotesResponse;
                fromAmino(object: _77.QueryVotesResponseAmino): _77.QueryVotesResponse;
                toAmino(message: _77.QueryVotesResponse): _77.QueryVotesResponseAmino;
                fromAminoMsg(object: _77.QueryVotesResponseAminoMsg): _77.QueryVotesResponse;
                toAminoMsg(message: _77.QueryVotesResponse): _77.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _77.QueryVotesResponseProtoMsg): _77.QueryVotesResponse;
                toProto(message: _77.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _77.QueryVotesResponse): _77.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _77.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryParamsRequest;
                fromPartial(object: Partial<_77.QueryParamsRequest>): _77.QueryParamsRequest;
                fromAmino(object: _77.QueryParamsRequestAmino): _77.QueryParamsRequest;
                toAmino(message: _77.QueryParamsRequest): _77.QueryParamsRequestAmino;
                fromAminoMsg(object: _77.QueryParamsRequestAminoMsg): _77.QueryParamsRequest;
                toAminoMsg(message: _77.QueryParamsRequest): _77.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _77.QueryParamsRequestProtoMsg): _77.QueryParamsRequest;
                toProto(message: _77.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _77.QueryParamsRequest): _77.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _77.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryParamsResponse;
                fromPartial(object: Partial<_77.QueryParamsResponse>): _77.QueryParamsResponse;
                fromAmino(object: _77.QueryParamsResponseAmino): _77.QueryParamsResponse;
                toAmino(message: _77.QueryParamsResponse): _77.QueryParamsResponseAmino;
                fromAminoMsg(object: _77.QueryParamsResponseAminoMsg): _77.QueryParamsResponse;
                toAminoMsg(message: _77.QueryParamsResponse): _77.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _77.QueryParamsResponseProtoMsg): _77.QueryParamsResponse;
                toProto(message: _77.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _77.QueryParamsResponse): _77.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _77.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryDepositRequest;
                fromPartial(object: Partial<_77.QueryDepositRequest>): _77.QueryDepositRequest;
                fromAmino(object: _77.QueryDepositRequestAmino): _77.QueryDepositRequest;
                toAmino(message: _77.QueryDepositRequest): _77.QueryDepositRequestAmino;
                fromAminoMsg(object: _77.QueryDepositRequestAminoMsg): _77.QueryDepositRequest;
                toAminoMsg(message: _77.QueryDepositRequest): _77.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _77.QueryDepositRequestProtoMsg): _77.QueryDepositRequest;
                toProto(message: _77.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _77.QueryDepositRequest): _77.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _77.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryDepositResponse;
                fromPartial(object: Partial<_77.QueryDepositResponse>): _77.QueryDepositResponse;
                fromAmino(object: _77.QueryDepositResponseAmino): _77.QueryDepositResponse;
                toAmino(message: _77.QueryDepositResponse): _77.QueryDepositResponseAmino;
                fromAminoMsg(object: _77.QueryDepositResponseAminoMsg): _77.QueryDepositResponse;
                toAminoMsg(message: _77.QueryDepositResponse): _77.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _77.QueryDepositResponseProtoMsg): _77.QueryDepositResponse;
                toProto(message: _77.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _77.QueryDepositResponse): _77.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _77.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryDepositsRequest;
                fromPartial(object: Partial<_77.QueryDepositsRequest>): _77.QueryDepositsRequest;
                fromAmino(object: _77.QueryDepositsRequestAmino): _77.QueryDepositsRequest;
                toAmino(message: _77.QueryDepositsRequest): _77.QueryDepositsRequestAmino;
                fromAminoMsg(object: _77.QueryDepositsRequestAminoMsg): _77.QueryDepositsRequest;
                toAminoMsg(message: _77.QueryDepositsRequest): _77.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _77.QueryDepositsRequestProtoMsg): _77.QueryDepositsRequest;
                toProto(message: _77.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _77.QueryDepositsRequest): _77.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _77.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryDepositsResponse;
                fromPartial(object: Partial<_77.QueryDepositsResponse>): _77.QueryDepositsResponse;
                fromAmino(object: _77.QueryDepositsResponseAmino): _77.QueryDepositsResponse;
                toAmino(message: _77.QueryDepositsResponse): _77.QueryDepositsResponseAmino;
                fromAminoMsg(object: _77.QueryDepositsResponseAminoMsg): _77.QueryDepositsResponse;
                toAminoMsg(message: _77.QueryDepositsResponse): _77.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _77.QueryDepositsResponseProtoMsg): _77.QueryDepositsResponse;
                toProto(message: _77.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _77.QueryDepositsResponse): _77.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _77.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryTallyResultRequest;
                fromPartial(object: Partial<_77.QueryTallyResultRequest>): _77.QueryTallyResultRequest;
                fromAmino(object: _77.QueryTallyResultRequestAmino): _77.QueryTallyResultRequest;
                toAmino(message: _77.QueryTallyResultRequest): _77.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _77.QueryTallyResultRequestAminoMsg): _77.QueryTallyResultRequest;
                toAminoMsg(message: _77.QueryTallyResultRequest): _77.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _77.QueryTallyResultRequestProtoMsg): _77.QueryTallyResultRequest;
                toProto(message: _77.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _77.QueryTallyResultRequest): _77.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _77.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryTallyResultResponse;
                fromPartial(object: Partial<_77.QueryTallyResultResponse>): _77.QueryTallyResultResponse;
                fromAmino(object: _77.QueryTallyResultResponseAmino): _77.QueryTallyResultResponse;
                toAmino(message: _77.QueryTallyResultResponse): _77.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _77.QueryTallyResultResponseAminoMsg): _77.QueryTallyResultResponse;
                toAminoMsg(message: _77.QueryTallyResultResponse): _77.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _77.QueryTallyResultResponseProtoMsg): _77.QueryTallyResultResponse;
                toProto(message: _77.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _77.QueryTallyResultResponse): _77.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _76.VoteOption;
            voteOptionToJSON(object: _76.VoteOption): string;
            proposalStatusFromJSON(object: any): _76.ProposalStatus;
            proposalStatusToJSON(object: _76.ProposalStatus): string;
            VoteOption: typeof _76.VoteOption;
            VoteOptionSDKType: typeof _76.VoteOption;
            VoteOptionAmino: typeof _76.VoteOption;
            ProposalStatus: typeof _76.ProposalStatus;
            ProposalStatusSDKType: typeof _76.ProposalStatus;
            ProposalStatusAmino: typeof _76.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _76.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.WeightedVoteOption;
                fromPartial(object: Partial<_76.WeightedVoteOption>): _76.WeightedVoteOption;
                fromAmino(object: _76.WeightedVoteOptionAmino): _76.WeightedVoteOption;
                toAmino(message: _76.WeightedVoteOption): _76.WeightedVoteOptionAmino;
                fromAminoMsg(object: _76.WeightedVoteOptionAminoMsg): _76.WeightedVoteOption;
                toAminoMsg(message: _76.WeightedVoteOption): _76.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _76.WeightedVoteOptionProtoMsg): _76.WeightedVoteOption;
                toProto(message: _76.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _76.WeightedVoteOption): _76.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _76.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.TextProposal;
                fromPartial(object: Partial<_76.TextProposal>): _76.TextProposal;
                fromAmino(object: _76.TextProposalAmino): _76.TextProposal;
                toAmino(message: _76.TextProposal): _76.TextProposalAmino;
                fromAminoMsg(object: _76.TextProposalAminoMsg): _76.TextProposal;
                toAminoMsg(message: _76.TextProposal): _76.TextProposalAminoMsg;
                fromProtoMsg(message: _76.TextProposalProtoMsg): _76.TextProposal;
                toProto(message: _76.TextProposal): Uint8Array;
                toProtoMsg(message: _76.TextProposal): _76.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _76.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Deposit;
                fromPartial(object: Partial<_76.Deposit>): _76.Deposit;
                fromAmino(object: _76.DepositAmino): _76.Deposit;
                toAmino(message: _76.Deposit): _76.DepositAmino;
                fromAminoMsg(object: _76.DepositAminoMsg): _76.Deposit;
                toAminoMsg(message: _76.Deposit): _76.DepositAminoMsg;
                fromProtoMsg(message: _76.DepositProtoMsg): _76.Deposit;
                toProto(message: _76.Deposit): Uint8Array;
                toProtoMsg(message: _76.Deposit): _76.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _76.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Proposal;
                fromPartial(object: Partial<_76.Proposal>): _76.Proposal;
                fromAmino(object: _76.ProposalAmino): _76.Proposal;
                toAmino(message: _76.Proposal): _76.ProposalAmino;
                fromAminoMsg(object: _76.ProposalAminoMsg): _76.Proposal;
                toAminoMsg(message: _76.Proposal): _76.ProposalAminoMsg;
                fromProtoMsg(message: _76.ProposalProtoMsg): _76.Proposal;
                toProto(message: _76.Proposal): Uint8Array;
                toProtoMsg(message: _76.Proposal): _76.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _76.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.TallyResult;
                fromPartial(object: Partial<_76.TallyResult>): _76.TallyResult;
                fromAmino(object: _76.TallyResultAmino): _76.TallyResult;
                toAmino(message: _76.TallyResult): _76.TallyResultAmino;
                fromAminoMsg(object: _76.TallyResultAminoMsg): _76.TallyResult;
                toAminoMsg(message: _76.TallyResult): _76.TallyResultAminoMsg;
                fromProtoMsg(message: _76.TallyResultProtoMsg): _76.TallyResult;
                toProto(message: _76.TallyResult): Uint8Array;
                toProtoMsg(message: _76.TallyResult): _76.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _76.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Vote;
                fromPartial(object: Partial<_76.Vote>): _76.Vote;
                fromAmino(object: _76.VoteAmino): _76.Vote;
                toAmino(message: _76.Vote): _76.VoteAmino;
                fromAminoMsg(object: _76.VoteAminoMsg): _76.Vote;
                toAminoMsg(message: _76.Vote): _76.VoteAminoMsg;
                fromProtoMsg(message: _76.VoteProtoMsg): _76.Vote;
                toProto(message: _76.Vote): Uint8Array;
                toProtoMsg(message: _76.Vote): _76.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _76.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.DepositParams;
                fromPartial(object: Partial<_76.DepositParams>): _76.DepositParams;
                fromAmino(object: _76.DepositParamsAmino): _76.DepositParams;
                toAmino(message: _76.DepositParams): _76.DepositParamsAmino;
                fromAminoMsg(object: _76.DepositParamsAminoMsg): _76.DepositParams;
                toAminoMsg(message: _76.DepositParams): _76.DepositParamsAminoMsg;
                fromProtoMsg(message: _76.DepositParamsProtoMsg): _76.DepositParams;
                toProto(message: _76.DepositParams): Uint8Array;
                toProtoMsg(message: _76.DepositParams): _76.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _76.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.VotingParams;
                fromPartial(object: Partial<_76.VotingParams>): _76.VotingParams;
                fromAmino(object: _76.VotingParamsAmino): _76.VotingParams;
                toAmino(message: _76.VotingParams): _76.VotingParamsAmino;
                fromAminoMsg(object: _76.VotingParamsAminoMsg): _76.VotingParams;
                toAminoMsg(message: _76.VotingParams): _76.VotingParamsAminoMsg;
                fromProtoMsg(message: _76.VotingParamsProtoMsg): _76.VotingParams;
                toProto(message: _76.VotingParams): Uint8Array;
                toProtoMsg(message: _76.VotingParams): _76.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _76.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.TallyParams;
                fromPartial(object: Partial<_76.TallyParams>): _76.TallyParams;
                fromAmino(object: _76.TallyParamsAmino): _76.TallyParams;
                toAmino(message: _76.TallyParams): _76.TallyParamsAmino;
                fromAminoMsg(object: _76.TallyParamsAminoMsg): _76.TallyParams;
                toAminoMsg(message: _76.TallyParams): _76.TallyParamsAminoMsg;
                fromProtoMsg(message: _76.TallyParamsProtoMsg): _76.TallyParams;
                toProto(message: _76.TallyParams): Uint8Array;
                toProtoMsg(message: _76.TallyParams): _76.TallyParamsProtoMsg;
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
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _193.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                inflation(request?: _81.QueryInflationRequest): Promise<_81.QueryInflationResponse>;
                annualProvisions(request?: _81.QueryAnnualProvisionsRequest): Promise<_81.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _178.LCDQueryClient;
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
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _194.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _179.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _83.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryParamsRequest;
                fromPartial(object: Partial<_83.QueryParamsRequest>): _83.QueryParamsRequest;
                fromAmino(object: _83.QueryParamsRequestAmino): _83.QueryParamsRequest;
                toAmino(message: _83.QueryParamsRequest): _83.QueryParamsRequestAmino;
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
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _82.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ParameterChangeProposal;
                fromPartial(object: Partial<_82.ParameterChangeProposal>): _82.ParameterChangeProposal;
                fromAmino(object: _82.ParameterChangeProposalAmino): _82.ParameterChangeProposal;
                toAmino(message: _82.ParameterChangeProposal): _82.ParameterChangeProposalAmino;
                fromAminoMsg(object: _82.ParameterChangeProposalAminoMsg): _82.ParameterChangeProposal;
                toAminoMsg(message: _82.ParameterChangeProposal): _82.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _82.ParameterChangeProposalProtoMsg): _82.ParameterChangeProposal;
                toProto(message: _82.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _82.ParameterChangeProposal): _82.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _82.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ParamChange;
                fromPartial(object: Partial<_82.ParamChange>): _82.ParamChange;
                fromAmino(object: _82.ParamChangeAmino): _82.ParamChange;
                toAmino(message: _82.ParamChange): _82.ParamChangeAmino;
                fromAminoMsg(object: _82.ParamChangeAminoMsg): _82.ParamChange;
                toAminoMsg(message: _82.ParamChange): _82.ParamChangeAminoMsg;
                fromProtoMsg(message: _82.ParamChangeProtoMsg): _82.ParamChange;
                toProto(message: _82.ParamChange): Uint8Array;
                toProtoMsg(message: _82.ParamChange): _82.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _206.MsgClientImpl;
            QueryClientImpl: typeof _195.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                signingInfo(request: _85.QuerySigningInfoRequest): Promise<_85.QuerySigningInfoResponse>;
                signingInfos(request?: _85.QuerySigningInfosRequest): Promise<_85.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _180.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _87.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _87.MsgUnjail): {
                        typeUrl: string;
                        value: _87.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _87.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _87.MsgUnjail): {
                        typeUrl: string;
                        value: _87.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _87.MsgUnjail) => _87.MsgUnjailAmino;
                    fromAmino: (object: _87.MsgUnjailAmino) => _87.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _87.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgUnjail;
                fromPartial(object: Partial<_87.MsgUnjail>): _87.MsgUnjail;
                fromAmino(object: _87.MsgUnjailAmino): _87.MsgUnjail;
                toAmino(message: _87.MsgUnjail): _87.MsgUnjailAmino;
                fromAminoMsg(object: _87.MsgUnjailAminoMsg): _87.MsgUnjail;
                toAminoMsg(message: _87.MsgUnjail): _87.MsgUnjailAminoMsg;
                fromProtoMsg(message: _87.MsgUnjailProtoMsg): _87.MsgUnjail;
                toProto(message: _87.MsgUnjail): Uint8Array;
                toProtoMsg(message: _87.MsgUnjail): _87.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _87.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgUnjailResponse;
                fromPartial(_: Partial<_87.MsgUnjailResponse>): _87.MsgUnjailResponse;
                fromAmino(_: _87.MsgUnjailResponseAmino): _87.MsgUnjailResponse;
                toAmino(_: _87.MsgUnjailResponse): _87.MsgUnjailResponseAmino;
                fromAminoMsg(object: _87.MsgUnjailResponseAminoMsg): _87.MsgUnjailResponse;
                toAminoMsg(message: _87.MsgUnjailResponse): _87.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _87.MsgUnjailResponseProtoMsg): _87.MsgUnjailResponse;
                toProto(message: _87.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _87.MsgUnjailResponse): _87.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _86.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.ValidatorSigningInfo;
                fromPartial(object: Partial<_86.ValidatorSigningInfo>): _86.ValidatorSigningInfo;
                fromAmino(object: _86.ValidatorSigningInfoAmino): _86.ValidatorSigningInfo;
                toAmino(message: _86.ValidatorSigningInfo): _86.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _86.ValidatorSigningInfoAminoMsg): _86.ValidatorSigningInfo;
                toAminoMsg(message: _86.ValidatorSigningInfo): _86.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _86.ValidatorSigningInfoProtoMsg): _86.ValidatorSigningInfo;
                toProto(message: _86.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _86.ValidatorSigningInfo): _86.ValidatorSigningInfoProtoMsg;
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
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _85.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QuerySigningInfoRequest;
                fromPartial(object: Partial<_85.QuerySigningInfoRequest>): _85.QuerySigningInfoRequest;
                fromAmino(object: _85.QuerySigningInfoRequestAmino): _85.QuerySigningInfoRequest;
                toAmino(message: _85.QuerySigningInfoRequest): _85.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _85.QuerySigningInfoRequestAminoMsg): _85.QuerySigningInfoRequest;
                toAminoMsg(message: _85.QuerySigningInfoRequest): _85.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _85.QuerySigningInfoRequestProtoMsg): _85.QuerySigningInfoRequest;
                toProto(message: _85.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _85.QuerySigningInfoRequest): _85.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _85.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QuerySigningInfoResponse;
                fromPartial(object: Partial<_85.QuerySigningInfoResponse>): _85.QuerySigningInfoResponse;
                fromAmino(object: _85.QuerySigningInfoResponseAmino): _85.QuerySigningInfoResponse;
                toAmino(message: _85.QuerySigningInfoResponse): _85.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _85.QuerySigningInfoResponseAminoMsg): _85.QuerySigningInfoResponse;
                toAminoMsg(message: _85.QuerySigningInfoResponse): _85.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _85.QuerySigningInfoResponseProtoMsg): _85.QuerySigningInfoResponse;
                toProto(message: _85.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _85.QuerySigningInfoResponse): _85.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _85.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QuerySigningInfosRequest;
                fromPartial(object: Partial<_85.QuerySigningInfosRequest>): _85.QuerySigningInfosRequest;
                fromAmino(object: _85.QuerySigningInfosRequestAmino): _85.QuerySigningInfosRequest;
                toAmino(message: _85.QuerySigningInfosRequest): _85.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _85.QuerySigningInfosRequestAminoMsg): _85.QuerySigningInfosRequest;
                toAminoMsg(message: _85.QuerySigningInfosRequest): _85.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _85.QuerySigningInfosRequestProtoMsg): _85.QuerySigningInfosRequest;
                toProto(message: _85.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _85.QuerySigningInfosRequest): _85.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _85.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QuerySigningInfosResponse;
                fromPartial(object: Partial<_85.QuerySigningInfosResponse>): _85.QuerySigningInfosResponse;
                fromAmino(object: _85.QuerySigningInfosResponseAmino): _85.QuerySigningInfosResponse;
                toAmino(message: _85.QuerySigningInfosResponse): _85.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _85.QuerySigningInfosResponseAminoMsg): _85.QuerySigningInfosResponse;
                toAminoMsg(message: _85.QuerySigningInfosResponse): _85.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _85.QuerySigningInfosResponseProtoMsg): _85.QuerySigningInfosResponse;
                toProto(message: _85.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _85.QuerySigningInfosResponse): _85.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _84.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.SigningInfo;
                fromPartial(object: Partial<_84.SigningInfo>): _84.SigningInfo;
                fromAmino(object: _84.SigningInfoAmino): _84.SigningInfo;
                toAmino(message: _84.SigningInfo): _84.SigningInfoAmino;
                fromAminoMsg(object: _84.SigningInfoAminoMsg): _84.SigningInfo;
                toAminoMsg(message: _84.SigningInfo): _84.SigningInfoAminoMsg;
                fromProtoMsg(message: _84.SigningInfoProtoMsg): _84.SigningInfo;
                toProto(message: _84.SigningInfo): Uint8Array;
                toProtoMsg(message: _84.SigningInfo): _84.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _84.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.ValidatorMissedBlocks;
                fromPartial(object: Partial<_84.ValidatorMissedBlocks>): _84.ValidatorMissedBlocks;
                fromAmino(object: _84.ValidatorMissedBlocksAmino): _84.ValidatorMissedBlocks;
                toAmino(message: _84.ValidatorMissedBlocks): _84.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _84.ValidatorMissedBlocksAminoMsg): _84.ValidatorMissedBlocks;
                toAminoMsg(message: _84.ValidatorMissedBlocks): _84.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _84.ValidatorMissedBlocksProtoMsg): _84.ValidatorMissedBlocks;
                toProto(message: _84.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _84.ValidatorMissedBlocks): _84.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _84.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MissedBlock;
                fromPartial(object: Partial<_84.MissedBlock>): _84.MissedBlock;
                fromAmino(object: _84.MissedBlockAmino): _84.MissedBlock;
                toAmino(message: _84.MissedBlock): _84.MissedBlockAmino;
                fromAminoMsg(object: _84.MissedBlockAminoMsg): _84.MissedBlock;
                toAminoMsg(message: _84.MissedBlock): _84.MissedBlockAminoMsg;
                fromProtoMsg(message: _84.MissedBlockProtoMsg): _84.MissedBlock;
                toProto(message: _84.MissedBlock): Uint8Array;
                toProtoMsg(message: _84.MissedBlock): _84.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _207.MsgClientImpl;
            QueryClientImpl: typeof _196.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                validators(request: _90.QueryValidatorsRequest): Promise<_90.QueryValidatorsResponse>;
                validator(request: _90.QueryValidatorRequest): Promise<_90.QueryValidatorResponse>;
                validatorDelegations(request: _90.QueryValidatorDelegationsRequest): Promise<_90.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _90.QueryValidatorUnbondingDelegationsRequest): Promise<_90.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _90.QueryDelegationRequest): Promise<_90.QueryDelegationResponse>;
                unbondingDelegation(request: _90.QueryUnbondingDelegationRequest): Promise<_90.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _90.QueryDelegatorDelegationsRequest): Promise<_90.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _90.QueryDelegatorUnbondingDelegationsRequest): Promise<_90.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _90.QueryRedelegationsRequest): Promise<_90.QueryRedelegationsResponse>;
                delegatorValidators(request: _90.QueryDelegatorValidatorsRequest): Promise<_90.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _90.QueryDelegatorValidatorRequest): Promise<_90.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _90.QueryHistoricalInfoRequest): Promise<_90.QueryHistoricalInfoResponse>;
                pool(request?: _90.QueryPoolRequest): Promise<_90.QueryPoolResponse>;
                params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _181.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _92.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _92.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _92.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _92.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _92.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _92.MsgCreateValidator): {
                        typeUrl: string;
                        value: _92.MsgCreateValidator;
                    };
                    editValidator(value: _92.MsgEditValidator): {
                        typeUrl: string;
                        value: _92.MsgEditValidator;
                    };
                    delegate(value: _92.MsgDelegate): {
                        typeUrl: string;
                        value: _92.MsgDelegate;
                    };
                    beginRedelegate(value: _92.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _92.MsgBeginRedelegate;
                    };
                    undelegate(value: _92.MsgUndelegate): {
                        typeUrl: string;
                        value: _92.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _92.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _92.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _92.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _92.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _92.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _92.MsgCreateValidator): {
                        typeUrl: string;
                        value: _92.MsgCreateValidator;
                    };
                    editValidator(value: _92.MsgEditValidator): {
                        typeUrl: string;
                        value: _92.MsgEditValidator;
                    };
                    delegate(value: _92.MsgDelegate): {
                        typeUrl: string;
                        value: _92.MsgDelegate;
                    };
                    beginRedelegate(value: _92.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _92.MsgBeginRedelegate;
                    };
                    undelegate(value: _92.MsgUndelegate): {
                        typeUrl: string;
                        value: _92.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _92.MsgCreateValidator) => _92.MsgCreateValidatorAmino;
                    fromAmino: (object: _92.MsgCreateValidatorAmino) => _92.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _92.MsgEditValidator) => _92.MsgEditValidatorAmino;
                    fromAmino: (object: _92.MsgEditValidatorAmino) => _92.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _92.MsgDelegate) => _92.MsgDelegateAmino;
                    fromAmino: (object: _92.MsgDelegateAmino) => _92.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _92.MsgBeginRedelegate) => _92.MsgBeginRedelegateAmino;
                    fromAmino: (object: _92.MsgBeginRedelegateAmino) => _92.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _92.MsgUndelegate) => _92.MsgUndelegateAmino;
                    fromAmino: (object: _92.MsgUndelegateAmino) => _92.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _92.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MsgCreateValidator;
                fromPartial(object: Partial<_92.MsgCreateValidator>): _92.MsgCreateValidator;
                fromAmino(object: _92.MsgCreateValidatorAmino): _92.MsgCreateValidator;
                toAmino(message: _92.MsgCreateValidator): _92.MsgCreateValidatorAmino;
                fromAminoMsg(object: _92.MsgCreateValidatorAminoMsg): _92.MsgCreateValidator;
                toAminoMsg(message: _92.MsgCreateValidator): _92.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _92.MsgCreateValidatorProtoMsg): _92.MsgCreateValidator;
                toProto(message: _92.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _92.MsgCreateValidator): _92.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _92.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_92.MsgCreateValidatorResponse>): _92.MsgCreateValidatorResponse;
                fromAmino(_: _92.MsgCreateValidatorResponseAmino): _92.MsgCreateValidatorResponse;
                toAmino(_: _92.MsgCreateValidatorResponse): _92.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _92.MsgCreateValidatorResponseAminoMsg): _92.MsgCreateValidatorResponse;
                toAminoMsg(message: _92.MsgCreateValidatorResponse): _92.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _92.MsgCreateValidatorResponseProtoMsg): _92.MsgCreateValidatorResponse;
                toProto(message: _92.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _92.MsgCreateValidatorResponse): _92.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _92.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MsgEditValidator;
                fromPartial(object: Partial<_92.MsgEditValidator>): _92.MsgEditValidator;
                fromAmino(object: _92.MsgEditValidatorAmino): _92.MsgEditValidator;
                toAmino(message: _92.MsgEditValidator): _92.MsgEditValidatorAmino;
                fromAminoMsg(object: _92.MsgEditValidatorAminoMsg): _92.MsgEditValidator;
                toAminoMsg(message: _92.MsgEditValidator): _92.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _92.MsgEditValidatorProtoMsg): _92.MsgEditValidator;
                toProto(message: _92.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _92.MsgEditValidator): _92.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _92.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.MsgEditValidatorResponse;
                fromPartial(_: Partial<_92.MsgEditValidatorResponse>): _92.MsgEditValidatorResponse;
                fromAmino(_: _92.MsgEditValidatorResponseAmino): _92.MsgEditValidatorResponse;
                toAmino(_: _92.MsgEditValidatorResponse): _92.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _92.MsgEditValidatorResponseAminoMsg): _92.MsgEditValidatorResponse;
                toAminoMsg(message: _92.MsgEditValidatorResponse): _92.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _92.MsgEditValidatorResponseProtoMsg): _92.MsgEditValidatorResponse;
                toProto(message: _92.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _92.MsgEditValidatorResponse): _92.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _92.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MsgDelegate;
                fromPartial(object: Partial<_92.MsgDelegate>): _92.MsgDelegate;
                fromAmino(object: _92.MsgDelegateAmino): _92.MsgDelegate;
                toAmino(message: _92.MsgDelegate): _92.MsgDelegateAmino;
                fromAminoMsg(object: _92.MsgDelegateAminoMsg): _92.MsgDelegate;
                toAminoMsg(message: _92.MsgDelegate): _92.MsgDelegateAminoMsg;
                fromProtoMsg(message: _92.MsgDelegateProtoMsg): _92.MsgDelegate;
                toProto(message: _92.MsgDelegate): Uint8Array;
                toProtoMsg(message: _92.MsgDelegate): _92.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _92.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.MsgDelegateResponse;
                fromPartial(_: Partial<_92.MsgDelegateResponse>): _92.MsgDelegateResponse;
                fromAmino(_: _92.MsgDelegateResponseAmino): _92.MsgDelegateResponse;
                toAmino(_: _92.MsgDelegateResponse): _92.MsgDelegateResponseAmino;
                fromAminoMsg(object: _92.MsgDelegateResponseAminoMsg): _92.MsgDelegateResponse;
                toAminoMsg(message: _92.MsgDelegateResponse): _92.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _92.MsgDelegateResponseProtoMsg): _92.MsgDelegateResponse;
                toProto(message: _92.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _92.MsgDelegateResponse): _92.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _92.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MsgBeginRedelegate;
                fromPartial(object: Partial<_92.MsgBeginRedelegate>): _92.MsgBeginRedelegate;
                fromAmino(object: _92.MsgBeginRedelegateAmino): _92.MsgBeginRedelegate;
                toAmino(message: _92.MsgBeginRedelegate): _92.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _92.MsgBeginRedelegateAminoMsg): _92.MsgBeginRedelegate;
                toAminoMsg(message: _92.MsgBeginRedelegate): _92.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _92.MsgBeginRedelegateProtoMsg): _92.MsgBeginRedelegate;
                toProto(message: _92.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _92.MsgBeginRedelegate): _92.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _92.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_92.MsgBeginRedelegateResponse>): _92.MsgBeginRedelegateResponse;
                fromAmino(object: _92.MsgBeginRedelegateResponseAmino): _92.MsgBeginRedelegateResponse;
                toAmino(message: _92.MsgBeginRedelegateResponse): _92.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _92.MsgBeginRedelegateResponseAminoMsg): _92.MsgBeginRedelegateResponse;
                toAminoMsg(message: _92.MsgBeginRedelegateResponse): _92.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _92.MsgBeginRedelegateResponseProtoMsg): _92.MsgBeginRedelegateResponse;
                toProto(message: _92.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _92.MsgBeginRedelegateResponse): _92.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _92.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MsgUndelegate;
                fromPartial(object: Partial<_92.MsgUndelegate>): _92.MsgUndelegate;
                fromAmino(object: _92.MsgUndelegateAmino): _92.MsgUndelegate;
                toAmino(message: _92.MsgUndelegate): _92.MsgUndelegateAmino;
                fromAminoMsg(object: _92.MsgUndelegateAminoMsg): _92.MsgUndelegate;
                toAminoMsg(message: _92.MsgUndelegate): _92.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _92.MsgUndelegateProtoMsg): _92.MsgUndelegate;
                toProto(message: _92.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _92.MsgUndelegate): _92.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _92.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MsgUndelegateResponse;
                fromPartial(object: Partial<_92.MsgUndelegateResponse>): _92.MsgUndelegateResponse;
                fromAmino(object: _92.MsgUndelegateResponseAmino): _92.MsgUndelegateResponse;
                toAmino(message: _92.MsgUndelegateResponse): _92.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _92.MsgUndelegateResponseAminoMsg): _92.MsgUndelegateResponse;
                toAminoMsg(message: _92.MsgUndelegateResponse): _92.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _92.MsgUndelegateResponseProtoMsg): _92.MsgUndelegateResponse;
                toProto(message: _92.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _92.MsgUndelegateResponse): _92.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => any;
            bondStatusFromJSON(object: any): _91.BondStatus;
            bondStatusToJSON(object: _91.BondStatus): string;
            BondStatus: typeof _91.BondStatus;
            BondStatusSDKType: typeof _91.BondStatus;
            BondStatusAmino: typeof _91.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _91.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.HistoricalInfo;
                fromPartial(object: Partial<_91.HistoricalInfo>): _91.HistoricalInfo;
                fromAmino(object: _91.HistoricalInfoAmino): _91.HistoricalInfo;
                toAmino(message: _91.HistoricalInfo): _91.HistoricalInfoAmino;
                fromAminoMsg(object: _91.HistoricalInfoAminoMsg): _91.HistoricalInfo;
                toAminoMsg(message: _91.HistoricalInfo): _91.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _91.HistoricalInfoProtoMsg): _91.HistoricalInfo;
                toProto(message: _91.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _91.HistoricalInfo): _91.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _91.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.CommissionRates;
                fromPartial(object: Partial<_91.CommissionRates>): _91.CommissionRates;
                fromAmino(object: _91.CommissionRatesAmino): _91.CommissionRates;
                toAmino(message: _91.CommissionRates): _91.CommissionRatesAmino;
                fromAminoMsg(object: _91.CommissionRatesAminoMsg): _91.CommissionRates;
                toAminoMsg(message: _91.CommissionRates): _91.CommissionRatesAminoMsg;
                fromProtoMsg(message: _91.CommissionRatesProtoMsg): _91.CommissionRates;
                toProto(message: _91.CommissionRates): Uint8Array;
                toProtoMsg(message: _91.CommissionRates): _91.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _91.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.Commission;
                fromPartial(object: Partial<_91.Commission>): _91.Commission;
                fromAmino(object: _91.CommissionAmino): _91.Commission;
                toAmino(message: _91.Commission): _91.CommissionAmino;
                fromAminoMsg(object: _91.CommissionAminoMsg): _91.Commission;
                toAminoMsg(message: _91.Commission): _91.CommissionAminoMsg;
                fromProtoMsg(message: _91.CommissionProtoMsg): _91.Commission;
                toProto(message: _91.Commission): Uint8Array;
                toProtoMsg(message: _91.Commission): _91.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _91.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.Description;
                fromPartial(object: Partial<_91.Description>): _91.Description;
                fromAmino(object: _91.DescriptionAmino): _91.Description;
                toAmino(message: _91.Description): _91.DescriptionAmino;
                fromAminoMsg(object: _91.DescriptionAminoMsg): _91.Description;
                toAminoMsg(message: _91.Description): _91.DescriptionAminoMsg;
                fromProtoMsg(message: _91.DescriptionProtoMsg): _91.Description;
                toProto(message: _91.Description): Uint8Array;
                toProtoMsg(message: _91.Description): _91.DescriptionProtoMsg;
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
            ValAddresses: {
                typeUrl: string;
                encode(message: _91.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.ValAddresses;
                fromPartial(object: Partial<_91.ValAddresses>): _91.ValAddresses;
                fromAmino(object: _91.ValAddressesAmino): _91.ValAddresses;
                toAmino(message: _91.ValAddresses): _91.ValAddressesAmino;
                fromAminoMsg(object: _91.ValAddressesAminoMsg): _91.ValAddresses;
                toAminoMsg(message: _91.ValAddresses): _91.ValAddressesAminoMsg;
                fromProtoMsg(message: _91.ValAddressesProtoMsg): _91.ValAddresses;
                toProto(message: _91.ValAddresses): Uint8Array;
                toProtoMsg(message: _91.ValAddresses): _91.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _91.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.DVPair;
                fromPartial(object: Partial<_91.DVPair>): _91.DVPair;
                fromAmino(object: _91.DVPairAmino): _91.DVPair;
                toAmino(message: _91.DVPair): _91.DVPairAmino;
                fromAminoMsg(object: _91.DVPairAminoMsg): _91.DVPair;
                toAminoMsg(message: _91.DVPair): _91.DVPairAminoMsg;
                fromProtoMsg(message: _91.DVPairProtoMsg): _91.DVPair;
                toProto(message: _91.DVPair): Uint8Array;
                toProtoMsg(message: _91.DVPair): _91.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _91.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.DVPairs;
                fromPartial(object: Partial<_91.DVPairs>): _91.DVPairs;
                fromAmino(object: _91.DVPairsAmino): _91.DVPairs;
                toAmino(message: _91.DVPairs): _91.DVPairsAmino;
                fromAminoMsg(object: _91.DVPairsAminoMsg): _91.DVPairs;
                toAminoMsg(message: _91.DVPairs): _91.DVPairsAminoMsg;
                fromProtoMsg(message: _91.DVPairsProtoMsg): _91.DVPairs;
                toProto(message: _91.DVPairs): Uint8Array;
                toProtoMsg(message: _91.DVPairs): _91.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _91.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.DVVTriplet;
                fromPartial(object: Partial<_91.DVVTriplet>): _91.DVVTriplet;
                fromAmino(object: _91.DVVTripletAmino): _91.DVVTriplet;
                toAmino(message: _91.DVVTriplet): _91.DVVTripletAmino;
                fromAminoMsg(object: _91.DVVTripletAminoMsg): _91.DVVTriplet;
                toAminoMsg(message: _91.DVVTriplet): _91.DVVTripletAminoMsg;
                fromProtoMsg(message: _91.DVVTripletProtoMsg): _91.DVVTriplet;
                toProto(message: _91.DVVTriplet): Uint8Array;
                toProtoMsg(message: _91.DVVTriplet): _91.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _91.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.DVVTriplets;
                fromPartial(object: Partial<_91.DVVTriplets>): _91.DVVTriplets;
                fromAmino(object: _91.DVVTripletsAmino): _91.DVVTriplets;
                toAmino(message: _91.DVVTriplets): _91.DVVTripletsAmino;
                fromAminoMsg(object: _91.DVVTripletsAminoMsg): _91.DVVTriplets;
                toAminoMsg(message: _91.DVVTriplets): _91.DVVTripletsAminoMsg;
                fromProtoMsg(message: _91.DVVTripletsProtoMsg): _91.DVVTriplets;
                toProto(message: _91.DVVTriplets): Uint8Array;
                toProtoMsg(message: _91.DVVTriplets): _91.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _91.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.Delegation;
                fromPartial(object: Partial<_91.Delegation>): _91.Delegation;
                fromAmino(object: _91.DelegationAmino): _91.Delegation;
                toAmino(message: _91.Delegation): _91.DelegationAmino;
                fromAminoMsg(object: _91.DelegationAminoMsg): _91.Delegation;
                toAminoMsg(message: _91.Delegation): _91.DelegationAminoMsg;
                fromProtoMsg(message: _91.DelegationProtoMsg): _91.Delegation;
                toProto(message: _91.Delegation): Uint8Array;
                toProtoMsg(message: _91.Delegation): _91.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _91.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.UnbondingDelegation;
                fromPartial(object: Partial<_91.UnbondingDelegation>): _91.UnbondingDelegation;
                fromAmino(object: _91.UnbondingDelegationAmino): _91.UnbondingDelegation;
                toAmino(message: _91.UnbondingDelegation): _91.UnbondingDelegationAmino;
                fromAminoMsg(object: _91.UnbondingDelegationAminoMsg): _91.UnbondingDelegation;
                toAminoMsg(message: _91.UnbondingDelegation): _91.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _91.UnbondingDelegationProtoMsg): _91.UnbondingDelegation;
                toProto(message: _91.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _91.UnbondingDelegation): _91.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _91.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.UnbondingDelegationEntry;
                fromPartial(object: Partial<_91.UnbondingDelegationEntry>): _91.UnbondingDelegationEntry;
                fromAmino(object: _91.UnbondingDelegationEntryAmino): _91.UnbondingDelegationEntry;
                toAmino(message: _91.UnbondingDelegationEntry): _91.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _91.UnbondingDelegationEntryAminoMsg): _91.UnbondingDelegationEntry;
                toAminoMsg(message: _91.UnbondingDelegationEntry): _91.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _91.UnbondingDelegationEntryProtoMsg): _91.UnbondingDelegationEntry;
                toProto(message: _91.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _91.UnbondingDelegationEntry): _91.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _91.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.RedelegationEntry;
                fromPartial(object: Partial<_91.RedelegationEntry>): _91.RedelegationEntry;
                fromAmino(object: _91.RedelegationEntryAmino): _91.RedelegationEntry;
                toAmino(message: _91.RedelegationEntry): _91.RedelegationEntryAmino;
                fromAminoMsg(object: _91.RedelegationEntryAminoMsg): _91.RedelegationEntry;
                toAminoMsg(message: _91.RedelegationEntry): _91.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _91.RedelegationEntryProtoMsg): _91.RedelegationEntry;
                toProto(message: _91.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _91.RedelegationEntry): _91.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _91.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.Redelegation;
                fromPartial(object: Partial<_91.Redelegation>): _91.Redelegation;
                fromAmino(object: _91.RedelegationAmino): _91.Redelegation;
                toAmino(message: _91.Redelegation): _91.RedelegationAmino;
                fromAminoMsg(object: _91.RedelegationAminoMsg): _91.Redelegation;
                toAminoMsg(message: _91.Redelegation): _91.RedelegationAminoMsg;
                fromProtoMsg(message: _91.RedelegationProtoMsg): _91.Redelegation;
                toProto(message: _91.Redelegation): Uint8Array;
                toProtoMsg(message: _91.Redelegation): _91.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _91.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.Params;
                fromPartial(object: Partial<_91.Params>): _91.Params;
                fromAmino(object: _91.ParamsAmino): _91.Params;
                toAmino(message: _91.Params): _91.ParamsAmino;
                fromAminoMsg(object: _91.ParamsAminoMsg): _91.Params;
                toAminoMsg(message: _91.Params): _91.ParamsAminoMsg;
                fromProtoMsg(message: _91.ParamsProtoMsg): _91.Params;
                toProto(message: _91.Params): Uint8Array;
                toProtoMsg(message: _91.Params): _91.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _91.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.DelegationResponse;
                fromPartial(object: Partial<_91.DelegationResponse>): _91.DelegationResponse;
                fromAmino(object: _91.DelegationResponseAmino): _91.DelegationResponse;
                toAmino(message: _91.DelegationResponse): _91.DelegationResponseAmino;
                fromAminoMsg(object: _91.DelegationResponseAminoMsg): _91.DelegationResponse;
                toAminoMsg(message: _91.DelegationResponse): _91.DelegationResponseAminoMsg;
                fromProtoMsg(message: _91.DelegationResponseProtoMsg): _91.DelegationResponse;
                toProto(message: _91.DelegationResponse): Uint8Array;
                toProtoMsg(message: _91.DelegationResponse): _91.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _91.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.RedelegationEntryResponse;
                fromPartial(object: Partial<_91.RedelegationEntryResponse>): _91.RedelegationEntryResponse;
                fromAmino(object: _91.RedelegationEntryResponseAmino): _91.RedelegationEntryResponse;
                toAmino(message: _91.RedelegationEntryResponse): _91.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _91.RedelegationEntryResponseAminoMsg): _91.RedelegationEntryResponse;
                toAminoMsg(message: _91.RedelegationEntryResponse): _91.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _91.RedelegationEntryResponseProtoMsg): _91.RedelegationEntryResponse;
                toProto(message: _91.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _91.RedelegationEntryResponse): _91.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _91.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.RedelegationResponse;
                fromPartial(object: Partial<_91.RedelegationResponse>): _91.RedelegationResponse;
                fromAmino(object: _91.RedelegationResponseAmino): _91.RedelegationResponse;
                toAmino(message: _91.RedelegationResponse): _91.RedelegationResponseAmino;
                fromAminoMsg(object: _91.RedelegationResponseAminoMsg): _91.RedelegationResponse;
                toAminoMsg(message: _91.RedelegationResponse): _91.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _91.RedelegationResponseProtoMsg): _91.RedelegationResponse;
                toProto(message: _91.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _91.RedelegationResponse): _91.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _91.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.Pool;
                fromPartial(object: Partial<_91.Pool>): _91.Pool;
                fromAmino(object: _91.PoolAmino): _91.Pool;
                toAmino(message: _91.Pool): _91.PoolAmino;
                fromAminoMsg(object: _91.PoolAminoMsg): _91.Pool;
                toAminoMsg(message: _91.Pool): _91.PoolAminoMsg;
                fromProtoMsg(message: _91.PoolProtoMsg): _91.Pool;
                toProto(message: _91.Pool): Uint8Array;
                toProtoMsg(message: _91.Pool): _91.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _90.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryValidatorsRequest;
                fromPartial(object: Partial<_90.QueryValidatorsRequest>): _90.QueryValidatorsRequest;
                fromAmino(object: _90.QueryValidatorsRequestAmino): _90.QueryValidatorsRequest;
                toAmino(message: _90.QueryValidatorsRequest): _90.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _90.QueryValidatorsRequestAminoMsg): _90.QueryValidatorsRequest;
                toAminoMsg(message: _90.QueryValidatorsRequest): _90.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _90.QueryValidatorsRequestProtoMsg): _90.QueryValidatorsRequest;
                toProto(message: _90.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _90.QueryValidatorsRequest): _90.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _90.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryValidatorsResponse;
                fromPartial(object: Partial<_90.QueryValidatorsResponse>): _90.QueryValidatorsResponse;
                fromAmino(object: _90.QueryValidatorsResponseAmino): _90.QueryValidatorsResponse;
                toAmino(message: _90.QueryValidatorsResponse): _90.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _90.QueryValidatorsResponseAminoMsg): _90.QueryValidatorsResponse;
                toAminoMsg(message: _90.QueryValidatorsResponse): _90.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _90.QueryValidatorsResponseProtoMsg): _90.QueryValidatorsResponse;
                toProto(message: _90.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _90.QueryValidatorsResponse): _90.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _90.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryValidatorRequest;
                fromPartial(object: Partial<_90.QueryValidatorRequest>): _90.QueryValidatorRequest;
                fromAmino(object: _90.QueryValidatorRequestAmino): _90.QueryValidatorRequest;
                toAmino(message: _90.QueryValidatorRequest): _90.QueryValidatorRequestAmino;
                fromAminoMsg(object: _90.QueryValidatorRequestAminoMsg): _90.QueryValidatorRequest;
                toAminoMsg(message: _90.QueryValidatorRequest): _90.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _90.QueryValidatorRequestProtoMsg): _90.QueryValidatorRequest;
                toProto(message: _90.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _90.QueryValidatorRequest): _90.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _90.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryValidatorResponse;
                fromPartial(object: Partial<_90.QueryValidatorResponse>): _90.QueryValidatorResponse;
                fromAmino(object: _90.QueryValidatorResponseAmino): _90.QueryValidatorResponse;
                toAmino(message: _90.QueryValidatorResponse): _90.QueryValidatorResponseAmino;
                fromAminoMsg(object: _90.QueryValidatorResponseAminoMsg): _90.QueryValidatorResponse;
                toAminoMsg(message: _90.QueryValidatorResponse): _90.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _90.QueryValidatorResponseProtoMsg): _90.QueryValidatorResponse;
                toProto(message: _90.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _90.QueryValidatorResponse): _90.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _90.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_90.QueryValidatorDelegationsRequest>): _90.QueryValidatorDelegationsRequest;
                fromAmino(object: _90.QueryValidatorDelegationsRequestAmino): _90.QueryValidatorDelegationsRequest;
                toAmino(message: _90.QueryValidatorDelegationsRequest): _90.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _90.QueryValidatorDelegationsRequestAminoMsg): _90.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _90.QueryValidatorDelegationsRequest): _90.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _90.QueryValidatorDelegationsRequestProtoMsg): _90.QueryValidatorDelegationsRequest;
                toProto(message: _90.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _90.QueryValidatorDelegationsRequest): _90.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _90.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_90.QueryValidatorDelegationsResponse>): _90.QueryValidatorDelegationsResponse;
                fromAmino(object: _90.QueryValidatorDelegationsResponseAmino): _90.QueryValidatorDelegationsResponse;
                toAmino(message: _90.QueryValidatorDelegationsResponse): _90.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _90.QueryValidatorDelegationsResponseAminoMsg): _90.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _90.QueryValidatorDelegationsResponse): _90.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _90.QueryValidatorDelegationsResponseProtoMsg): _90.QueryValidatorDelegationsResponse;
                toProto(message: _90.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _90.QueryValidatorDelegationsResponse): _90.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _90.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_90.QueryValidatorUnbondingDelegationsRequest>): _90.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _90.QueryValidatorUnbondingDelegationsRequestAmino): _90.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _90.QueryValidatorUnbondingDelegationsRequest): _90.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _90.QueryValidatorUnbondingDelegationsRequestAminoMsg): _90.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _90.QueryValidatorUnbondingDelegationsRequest): _90.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _90.QueryValidatorUnbondingDelegationsRequestProtoMsg): _90.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _90.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _90.QueryValidatorUnbondingDelegationsRequest): _90.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _90.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_90.QueryValidatorUnbondingDelegationsResponse>): _90.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _90.QueryValidatorUnbondingDelegationsResponseAmino): _90.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _90.QueryValidatorUnbondingDelegationsResponse): _90.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _90.QueryValidatorUnbondingDelegationsResponseAminoMsg): _90.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _90.QueryValidatorUnbondingDelegationsResponse): _90.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _90.QueryValidatorUnbondingDelegationsResponseProtoMsg): _90.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _90.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _90.QueryValidatorUnbondingDelegationsResponse): _90.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _90.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryDelegationRequest;
                fromPartial(object: Partial<_90.QueryDelegationRequest>): _90.QueryDelegationRequest;
                fromAmino(object: _90.QueryDelegationRequestAmino): _90.QueryDelegationRequest;
                toAmino(message: _90.QueryDelegationRequest): _90.QueryDelegationRequestAmino;
                fromAminoMsg(object: _90.QueryDelegationRequestAminoMsg): _90.QueryDelegationRequest;
                toAminoMsg(message: _90.QueryDelegationRequest): _90.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _90.QueryDelegationRequestProtoMsg): _90.QueryDelegationRequest;
                toProto(message: _90.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _90.QueryDelegationRequest): _90.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _90.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryDelegationResponse;
                fromPartial(object: Partial<_90.QueryDelegationResponse>): _90.QueryDelegationResponse;
                fromAmino(object: _90.QueryDelegationResponseAmino): _90.QueryDelegationResponse;
                toAmino(message: _90.QueryDelegationResponse): _90.QueryDelegationResponseAmino;
                fromAminoMsg(object: _90.QueryDelegationResponseAminoMsg): _90.QueryDelegationResponse;
                toAminoMsg(message: _90.QueryDelegationResponse): _90.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _90.QueryDelegationResponseProtoMsg): _90.QueryDelegationResponse;
                toProto(message: _90.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _90.QueryDelegationResponse): _90.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _90.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_90.QueryUnbondingDelegationRequest>): _90.QueryUnbondingDelegationRequest;
                fromAmino(object: _90.QueryUnbondingDelegationRequestAmino): _90.QueryUnbondingDelegationRequest;
                toAmino(message: _90.QueryUnbondingDelegationRequest): _90.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _90.QueryUnbondingDelegationRequestAminoMsg): _90.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _90.QueryUnbondingDelegationRequest): _90.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _90.QueryUnbondingDelegationRequestProtoMsg): _90.QueryUnbondingDelegationRequest;
                toProto(message: _90.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _90.QueryUnbondingDelegationRequest): _90.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _90.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_90.QueryUnbondingDelegationResponse>): _90.QueryUnbondingDelegationResponse;
                fromAmino(object: _90.QueryUnbondingDelegationResponseAmino): _90.QueryUnbondingDelegationResponse;
                toAmino(message: _90.QueryUnbondingDelegationResponse): _90.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _90.QueryUnbondingDelegationResponseAminoMsg): _90.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _90.QueryUnbondingDelegationResponse): _90.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _90.QueryUnbondingDelegationResponseProtoMsg): _90.QueryUnbondingDelegationResponse;
                toProto(message: _90.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _90.QueryUnbondingDelegationResponse): _90.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _90.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_90.QueryDelegatorDelegationsRequest>): _90.QueryDelegatorDelegationsRequest;
                fromAmino(object: _90.QueryDelegatorDelegationsRequestAmino): _90.QueryDelegatorDelegationsRequest;
                toAmino(message: _90.QueryDelegatorDelegationsRequest): _90.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _90.QueryDelegatorDelegationsRequestAminoMsg): _90.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _90.QueryDelegatorDelegationsRequest): _90.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _90.QueryDelegatorDelegationsRequestProtoMsg): _90.QueryDelegatorDelegationsRequest;
                toProto(message: _90.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _90.QueryDelegatorDelegationsRequest): _90.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _90.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_90.QueryDelegatorDelegationsResponse>): _90.QueryDelegatorDelegationsResponse;
                fromAmino(object: _90.QueryDelegatorDelegationsResponseAmino): _90.QueryDelegatorDelegationsResponse;
                toAmino(message: _90.QueryDelegatorDelegationsResponse): _90.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _90.QueryDelegatorDelegationsResponseAminoMsg): _90.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _90.QueryDelegatorDelegationsResponse): _90.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _90.QueryDelegatorDelegationsResponseProtoMsg): _90.QueryDelegatorDelegationsResponse;
                toProto(message: _90.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _90.QueryDelegatorDelegationsResponse): _90.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _90.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_90.QueryDelegatorUnbondingDelegationsRequest>): _90.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _90.QueryDelegatorUnbondingDelegationsRequestAmino): _90.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _90.QueryDelegatorUnbondingDelegationsRequest): _90.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _90.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _90.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _90.QueryDelegatorUnbondingDelegationsRequest): _90.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _90.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _90.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _90.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _90.QueryDelegatorUnbondingDelegationsRequest): _90.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _90.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_90.QueryDelegatorUnbondingDelegationsResponse>): _90.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _90.QueryDelegatorUnbondingDelegationsResponseAmino): _90.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _90.QueryDelegatorUnbondingDelegationsResponse): _90.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _90.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _90.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _90.QueryDelegatorUnbondingDelegationsResponse): _90.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _90.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _90.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _90.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _90.QueryDelegatorUnbondingDelegationsResponse): _90.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _90.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryRedelegationsRequest;
                fromPartial(object: Partial<_90.QueryRedelegationsRequest>): _90.QueryRedelegationsRequest;
                fromAmino(object: _90.QueryRedelegationsRequestAmino): _90.QueryRedelegationsRequest;
                toAmino(message: _90.QueryRedelegationsRequest): _90.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _90.QueryRedelegationsRequestAminoMsg): _90.QueryRedelegationsRequest;
                toAminoMsg(message: _90.QueryRedelegationsRequest): _90.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _90.QueryRedelegationsRequestProtoMsg): _90.QueryRedelegationsRequest;
                toProto(message: _90.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _90.QueryRedelegationsRequest): _90.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _90.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryRedelegationsResponse;
                fromPartial(object: Partial<_90.QueryRedelegationsResponse>): _90.QueryRedelegationsResponse;
                fromAmino(object: _90.QueryRedelegationsResponseAmino): _90.QueryRedelegationsResponse;
                toAmino(message: _90.QueryRedelegationsResponse): _90.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _90.QueryRedelegationsResponseAminoMsg): _90.QueryRedelegationsResponse;
                toAminoMsg(message: _90.QueryRedelegationsResponse): _90.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _90.QueryRedelegationsResponseProtoMsg): _90.QueryRedelegationsResponse;
                toProto(message: _90.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _90.QueryRedelegationsResponse): _90.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _90.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_90.QueryDelegatorValidatorsRequest>): _90.QueryDelegatorValidatorsRequest;
                fromAmino(object: _90.QueryDelegatorValidatorsRequestAmino): _90.QueryDelegatorValidatorsRequest;
                toAmino(message: _90.QueryDelegatorValidatorsRequest): _90.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _90.QueryDelegatorValidatorsRequestAminoMsg): _90.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _90.QueryDelegatorValidatorsRequest): _90.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _90.QueryDelegatorValidatorsRequestProtoMsg): _90.QueryDelegatorValidatorsRequest;
                toProto(message: _90.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _90.QueryDelegatorValidatorsRequest): _90.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _90.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_90.QueryDelegatorValidatorsResponse>): _90.QueryDelegatorValidatorsResponse;
                fromAmino(object: _90.QueryDelegatorValidatorsResponseAmino): _90.QueryDelegatorValidatorsResponse;
                toAmino(message: _90.QueryDelegatorValidatorsResponse): _90.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _90.QueryDelegatorValidatorsResponseAminoMsg): _90.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _90.QueryDelegatorValidatorsResponse): _90.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _90.QueryDelegatorValidatorsResponseProtoMsg): _90.QueryDelegatorValidatorsResponse;
                toProto(message: _90.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _90.QueryDelegatorValidatorsResponse): _90.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _90.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_90.QueryDelegatorValidatorRequest>): _90.QueryDelegatorValidatorRequest;
                fromAmino(object: _90.QueryDelegatorValidatorRequestAmino): _90.QueryDelegatorValidatorRequest;
                toAmino(message: _90.QueryDelegatorValidatorRequest): _90.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _90.QueryDelegatorValidatorRequestAminoMsg): _90.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _90.QueryDelegatorValidatorRequest): _90.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _90.QueryDelegatorValidatorRequestProtoMsg): _90.QueryDelegatorValidatorRequest;
                toProto(message: _90.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _90.QueryDelegatorValidatorRequest): _90.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _90.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_90.QueryDelegatorValidatorResponse>): _90.QueryDelegatorValidatorResponse;
                fromAmino(object: _90.QueryDelegatorValidatorResponseAmino): _90.QueryDelegatorValidatorResponse;
                toAmino(message: _90.QueryDelegatorValidatorResponse): _90.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _90.QueryDelegatorValidatorResponseAminoMsg): _90.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _90.QueryDelegatorValidatorResponse): _90.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _90.QueryDelegatorValidatorResponseProtoMsg): _90.QueryDelegatorValidatorResponse;
                toProto(message: _90.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _90.QueryDelegatorValidatorResponse): _90.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _90.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_90.QueryHistoricalInfoRequest>): _90.QueryHistoricalInfoRequest;
                fromAmino(object: _90.QueryHistoricalInfoRequestAmino): _90.QueryHistoricalInfoRequest;
                toAmino(message: _90.QueryHistoricalInfoRequest): _90.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _90.QueryHistoricalInfoRequestAminoMsg): _90.QueryHistoricalInfoRequest;
                toAminoMsg(message: _90.QueryHistoricalInfoRequest): _90.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _90.QueryHistoricalInfoRequestProtoMsg): _90.QueryHistoricalInfoRequest;
                toProto(message: _90.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _90.QueryHistoricalInfoRequest): _90.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _90.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_90.QueryHistoricalInfoResponse>): _90.QueryHistoricalInfoResponse;
                fromAmino(object: _90.QueryHistoricalInfoResponseAmino): _90.QueryHistoricalInfoResponse;
                toAmino(message: _90.QueryHistoricalInfoResponse): _90.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _90.QueryHistoricalInfoResponseAminoMsg): _90.QueryHistoricalInfoResponse;
                toAminoMsg(message: _90.QueryHistoricalInfoResponse): _90.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _90.QueryHistoricalInfoResponseProtoMsg): _90.QueryHistoricalInfoResponse;
                toProto(message: _90.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _90.QueryHistoricalInfoResponse): _90.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _90.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.QueryPoolRequest;
                fromPartial(_: Partial<_90.QueryPoolRequest>): _90.QueryPoolRequest;
                fromAmino(_: _90.QueryPoolRequestAmino): _90.QueryPoolRequest;
                toAmino(_: _90.QueryPoolRequest): _90.QueryPoolRequestAmino;
                fromAminoMsg(object: _90.QueryPoolRequestAminoMsg): _90.QueryPoolRequest;
                toAminoMsg(message: _90.QueryPoolRequest): _90.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _90.QueryPoolRequestProtoMsg): _90.QueryPoolRequest;
                toProto(message: _90.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _90.QueryPoolRequest): _90.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _90.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryPoolResponse;
                fromPartial(object: Partial<_90.QueryPoolResponse>): _90.QueryPoolResponse;
                fromAmino(object: _90.QueryPoolResponseAmino): _90.QueryPoolResponse;
                toAmino(message: _90.QueryPoolResponse): _90.QueryPoolResponseAmino;
                fromAminoMsg(object: _90.QueryPoolResponseAminoMsg): _90.QueryPoolResponse;
                toAminoMsg(message: _90.QueryPoolResponse): _90.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _90.QueryPoolResponseProtoMsg): _90.QueryPoolResponse;
                toProto(message: _90.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _90.QueryPoolResponse): _90.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _90.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.QueryParamsRequest;
                fromPartial(_: Partial<_90.QueryParamsRequest>): _90.QueryParamsRequest;
                fromAmino(_: _90.QueryParamsRequestAmino): _90.QueryParamsRequest;
                toAmino(_: _90.QueryParamsRequest): _90.QueryParamsRequestAmino;
                fromAminoMsg(object: _90.QueryParamsRequestAminoMsg): _90.QueryParamsRequest;
                toAminoMsg(message: _90.QueryParamsRequest): _90.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _90.QueryParamsRequestProtoMsg): _90.QueryParamsRequest;
                toProto(message: _90.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _90.QueryParamsRequest): _90.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _90.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryParamsResponse;
                fromPartial(object: Partial<_90.QueryParamsResponse>): _90.QueryParamsResponse;
                fromAmino(object: _90.QueryParamsResponseAmino): _90.QueryParamsResponse;
                toAmino(message: _90.QueryParamsResponse): _90.QueryParamsResponseAmino;
                fromAminoMsg(object: _90.QueryParamsResponseAminoMsg): _90.QueryParamsResponse;
                toAminoMsg(message: _90.QueryParamsResponse): _90.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _90.QueryParamsResponseProtoMsg): _90.QueryParamsResponse;
                toProto(message: _90.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _90.QueryParamsResponse): _90.QueryParamsResponseProtoMsg;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _89.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.LastValidatorPower;
                fromPartial(object: Partial<_89.LastValidatorPower>): _89.LastValidatorPower;
                fromAmino(object: _89.LastValidatorPowerAmino): _89.LastValidatorPower;
                toAmino(message: _89.LastValidatorPower): _89.LastValidatorPowerAmino;
                fromAminoMsg(object: _89.LastValidatorPowerAminoMsg): _89.LastValidatorPower;
                toAminoMsg(message: _89.LastValidatorPower): _89.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _89.LastValidatorPowerProtoMsg): _89.LastValidatorPower;
                toProto(message: _89.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _89.LastValidatorPower): _89.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _88.AuthorizationType;
            authorizationTypeToJSON(object: _88.AuthorizationType): string;
            AuthorizationType: typeof _88.AuthorizationType;
            AuthorizationTypeSDKType: typeof _88.AuthorizationType;
            AuthorizationTypeAmino: typeof _88.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _88.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.StakeAuthorization;
                fromPartial(object: Partial<_88.StakeAuthorization>): _88.StakeAuthorization;
                fromAmino(object: _88.StakeAuthorizationAmino): _88.StakeAuthorization;
                toAmino(message: _88.StakeAuthorization): _88.StakeAuthorizationAmino;
                fromAminoMsg(object: _88.StakeAuthorizationAminoMsg): _88.StakeAuthorization;
                toAminoMsg(message: _88.StakeAuthorization): _88.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _88.StakeAuthorizationProtoMsg): _88.StakeAuthorization;
                toProto(message: _88.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _88.StakeAuthorization): _88.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _88.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.StakeAuthorization_Validators;
                fromPartial(object: Partial<_88.StakeAuthorization_Validators>): _88.StakeAuthorization_Validators;
                fromAmino(object: _88.StakeAuthorization_ValidatorsAmino): _88.StakeAuthorization_Validators;
                toAmino(message: _88.StakeAuthorization_Validators): _88.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _88.StakeAuthorization_ValidatorsAminoMsg): _88.StakeAuthorization_Validators;
                toAminoMsg(message: _88.StakeAuthorization_Validators): _88.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _88.StakeAuthorization_ValidatorsProtoMsg): _88.StakeAuthorization_Validators;
                toProto(message: _88.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _88.StakeAuthorization_Validators): _88.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _93.SignMode;
                signModeToJSON(object: _93.SignMode): string;
                SignMode: typeof _93.SignMode;
                SignModeSDKType: typeof _93.SignMode;
                SignModeAmino: typeof _93.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _93.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.SignatureDescriptors;
                    fromPartial(object: Partial<_93.SignatureDescriptors>): _93.SignatureDescriptors;
                    fromAmino(object: _93.SignatureDescriptorsAmino): _93.SignatureDescriptors;
                    toAmino(message: _93.SignatureDescriptors): _93.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _93.SignatureDescriptorsAminoMsg): _93.SignatureDescriptors;
                    toAminoMsg(message: _93.SignatureDescriptors): _93.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _93.SignatureDescriptorsProtoMsg): _93.SignatureDescriptors;
                    toProto(message: _93.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _93.SignatureDescriptors): _93.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _93.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.SignatureDescriptor;
                    fromPartial(object: Partial<_93.SignatureDescriptor>): _93.SignatureDescriptor;
                    fromAmino(object: _93.SignatureDescriptorAmino): _93.SignatureDescriptor;
                    toAmino(message: _93.SignatureDescriptor): _93.SignatureDescriptorAmino;
                    fromAminoMsg(object: _93.SignatureDescriptorAminoMsg): _93.SignatureDescriptor;
                    toAminoMsg(message: _93.SignatureDescriptor): _93.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _93.SignatureDescriptorProtoMsg): _93.SignatureDescriptor;
                    toProto(message: _93.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _93.SignatureDescriptor): _93.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _93.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_93.SignatureDescriptor_Data>): _93.SignatureDescriptor_Data;
                    fromAmino(object: _93.SignatureDescriptor_DataAmino): _93.SignatureDescriptor_Data;
                    toAmino(message: _93.SignatureDescriptor_Data): _93.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _93.SignatureDescriptor_DataAminoMsg): _93.SignatureDescriptor_Data;
                    toAminoMsg(message: _93.SignatureDescriptor_Data): _93.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _93.SignatureDescriptor_DataProtoMsg): _93.SignatureDescriptor_Data;
                    toProto(message: _93.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _93.SignatureDescriptor_Data): _93.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _93.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_93.SignatureDescriptor_Data_Single>): _93.SignatureDescriptor_Data_Single;
                    fromAmino(object: _93.SignatureDescriptor_Data_SingleAmino): _93.SignatureDescriptor_Data_Single;
                    toAmino(message: _93.SignatureDescriptor_Data_Single): _93.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _93.SignatureDescriptor_Data_SingleAminoMsg): _93.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _93.SignatureDescriptor_Data_Single): _93.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _93.SignatureDescriptor_Data_SingleProtoMsg): _93.SignatureDescriptor_Data_Single;
                    toProto(message: _93.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _93.SignatureDescriptor_Data_Single): _93.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _93.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_93.SignatureDescriptor_Data_Multi>): _93.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _93.SignatureDescriptor_Data_MultiAmino): _93.SignatureDescriptor_Data_Multi;
                    toAmino(message: _93.SignatureDescriptor_Data_Multi): _93.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _93.SignatureDescriptor_Data_MultiAminoMsg): _93.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _93.SignatureDescriptor_Data_Multi): _93.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _93.SignatureDescriptor_Data_MultiProtoMsg): _93.SignatureDescriptor_Data_Multi;
                    toProto(message: _93.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _93.SignatureDescriptor_Data_Multi): _93.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _197.ServiceClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                simulate(request: _94.SimulateRequest): Promise<_94.SimulateResponse>;
                getTx(request: _94.GetTxRequest): Promise<_94.GetTxResponse>;
                broadcastTx(request: _94.BroadcastTxRequest): Promise<_94.BroadcastTxResponse>;
                getTxsEvent(request: _94.GetTxsEventRequest): Promise<_94.GetTxsEventResponse>;
                getBlockWithTxs(request: _94.GetBlockWithTxsRequest): Promise<_94.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _182.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _95.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.Tx;
                fromPartial(object: Partial<_95.Tx>): _95.Tx;
                fromAmino(object: _95.TxAmino): _95.Tx;
                toAmino(message: _95.Tx): _95.TxAmino;
                fromAminoMsg(object: _95.TxAminoMsg): _95.Tx;
                toAminoMsg(message: _95.Tx): _95.TxAminoMsg;
                fromProtoMsg(message: _95.TxProtoMsg): _95.Tx;
                toProto(message: _95.Tx): Uint8Array;
                toProtoMsg(message: _95.Tx): _95.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _95.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.TxRaw;
                fromPartial(object: Partial<_95.TxRaw>): _95.TxRaw;
                fromAmino(object: _95.TxRawAmino): _95.TxRaw;
                toAmino(message: _95.TxRaw): _95.TxRawAmino;
                fromAminoMsg(object: _95.TxRawAminoMsg): _95.TxRaw;
                toAminoMsg(message: _95.TxRaw): _95.TxRawAminoMsg;
                fromProtoMsg(message: _95.TxRawProtoMsg): _95.TxRaw;
                toProto(message: _95.TxRaw): Uint8Array;
                toProtoMsg(message: _95.TxRaw): _95.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _95.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.SignDoc;
                fromPartial(object: Partial<_95.SignDoc>): _95.SignDoc;
                fromAmino(object: _95.SignDocAmino): _95.SignDoc;
                toAmino(message: _95.SignDoc): _95.SignDocAmino;
                fromAminoMsg(object: _95.SignDocAminoMsg): _95.SignDoc;
                toAminoMsg(message: _95.SignDoc): _95.SignDocAminoMsg;
                fromProtoMsg(message: _95.SignDocProtoMsg): _95.SignDoc;
                toProto(message: _95.SignDoc): Uint8Array;
                toProtoMsg(message: _95.SignDoc): _95.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _95.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.TxBody;
                fromPartial(object: Partial<_95.TxBody>): _95.TxBody;
                fromAmino(object: _95.TxBodyAmino): _95.TxBody;
                toAmino(message: _95.TxBody): _95.TxBodyAmino;
                fromAminoMsg(object: _95.TxBodyAminoMsg): _95.TxBody;
                toAminoMsg(message: _95.TxBody): _95.TxBodyAminoMsg;
                fromProtoMsg(message: _95.TxBodyProtoMsg): _95.TxBody;
                toProto(message: _95.TxBody): Uint8Array;
                toProtoMsg(message: _95.TxBody): _95.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _95.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.AuthInfo;
                fromPartial(object: Partial<_95.AuthInfo>): _95.AuthInfo;
                fromAmino(object: _95.AuthInfoAmino): _95.AuthInfo;
                toAmino(message: _95.AuthInfo): _95.AuthInfoAmino;
                fromAminoMsg(object: _95.AuthInfoAminoMsg): _95.AuthInfo;
                toAminoMsg(message: _95.AuthInfo): _95.AuthInfoAminoMsg;
                fromProtoMsg(message: _95.AuthInfoProtoMsg): _95.AuthInfo;
                toProto(message: _95.AuthInfo): Uint8Array;
                toProtoMsg(message: _95.AuthInfo): _95.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _95.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.SignerInfo;
                fromPartial(object: Partial<_95.SignerInfo>): _95.SignerInfo;
                fromAmino(object: _95.SignerInfoAmino): _95.SignerInfo;
                toAmino(message: _95.SignerInfo): _95.SignerInfoAmino;
                fromAminoMsg(object: _95.SignerInfoAminoMsg): _95.SignerInfo;
                toAminoMsg(message: _95.SignerInfo): _95.SignerInfoAminoMsg;
                fromProtoMsg(message: _95.SignerInfoProtoMsg): _95.SignerInfo;
                toProto(message: _95.SignerInfo): Uint8Array;
                toProtoMsg(message: _95.SignerInfo): _95.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _95.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.ModeInfo;
                fromPartial(object: Partial<_95.ModeInfo>): _95.ModeInfo;
                fromAmino(object: _95.ModeInfoAmino): _95.ModeInfo;
                toAmino(message: _95.ModeInfo): _95.ModeInfoAmino;
                fromAminoMsg(object: _95.ModeInfoAminoMsg): _95.ModeInfo;
                toAminoMsg(message: _95.ModeInfo): _95.ModeInfoAminoMsg;
                fromProtoMsg(message: _95.ModeInfoProtoMsg): _95.ModeInfo;
                toProto(message: _95.ModeInfo): Uint8Array;
                toProtoMsg(message: _95.ModeInfo): _95.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _95.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.ModeInfo_Single;
                fromPartial(object: Partial<_95.ModeInfo_Single>): _95.ModeInfo_Single;
                fromAmino(object: _95.ModeInfo_SingleAmino): _95.ModeInfo_Single;
                toAmino(message: _95.ModeInfo_Single): _95.ModeInfo_SingleAmino;
                fromAminoMsg(object: _95.ModeInfo_SingleAminoMsg): _95.ModeInfo_Single;
                toAminoMsg(message: _95.ModeInfo_Single): _95.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _95.ModeInfo_SingleProtoMsg): _95.ModeInfo_Single;
                toProto(message: _95.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _95.ModeInfo_Single): _95.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _95.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.ModeInfo_Multi;
                fromPartial(object: Partial<_95.ModeInfo_Multi>): _95.ModeInfo_Multi;
                fromAmino(object: _95.ModeInfo_MultiAmino): _95.ModeInfo_Multi;
                toAmino(message: _95.ModeInfo_Multi): _95.ModeInfo_MultiAmino;
                fromAminoMsg(object: _95.ModeInfo_MultiAminoMsg): _95.ModeInfo_Multi;
                toAminoMsg(message: _95.ModeInfo_Multi): _95.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _95.ModeInfo_MultiProtoMsg): _95.ModeInfo_Multi;
                toProto(message: _95.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _95.ModeInfo_Multi): _95.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _95.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.Fee;
                fromPartial(object: Partial<_95.Fee>): _95.Fee;
                fromAmino(object: _95.FeeAmino): _95.Fee;
                toAmino(message: _95.Fee): _95.FeeAmino;
                fromAminoMsg(object: _95.FeeAminoMsg): _95.Fee;
                toAminoMsg(message: _95.Fee): _95.FeeAminoMsg;
                fromProtoMsg(message: _95.FeeProtoMsg): _95.Fee;
                toProto(message: _95.Fee): Uint8Array;
                toProtoMsg(message: _95.Fee): _95.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _94.OrderBy;
            orderByToJSON(object: _94.OrderBy): string;
            broadcastModeFromJSON(object: any): _94.BroadcastMode;
            broadcastModeToJSON(object: _94.BroadcastMode): string;
            OrderBy: typeof _94.OrderBy;
            OrderBySDKType: typeof _94.OrderBy;
            OrderByAmino: typeof _94.OrderBy;
            BroadcastMode: typeof _94.BroadcastMode;
            BroadcastModeSDKType: typeof _94.BroadcastMode;
            BroadcastModeAmino: typeof _94.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _94.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.GetTxsEventRequest;
                fromPartial(object: Partial<_94.GetTxsEventRequest>): _94.GetTxsEventRequest;
                fromAmino(object: _94.GetTxsEventRequestAmino): _94.GetTxsEventRequest;
                toAmino(message: _94.GetTxsEventRequest): _94.GetTxsEventRequestAmino;
                fromAminoMsg(object: _94.GetTxsEventRequestAminoMsg): _94.GetTxsEventRequest;
                toAminoMsg(message: _94.GetTxsEventRequest): _94.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _94.GetTxsEventRequestProtoMsg): _94.GetTxsEventRequest;
                toProto(message: _94.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _94.GetTxsEventRequest): _94.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _94.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.GetTxsEventResponse;
                fromPartial(object: Partial<_94.GetTxsEventResponse>): _94.GetTxsEventResponse;
                fromAmino(object: _94.GetTxsEventResponseAmino): _94.GetTxsEventResponse;
                toAmino(message: _94.GetTxsEventResponse): _94.GetTxsEventResponseAmino;
                fromAminoMsg(object: _94.GetTxsEventResponseAminoMsg): _94.GetTxsEventResponse;
                toAminoMsg(message: _94.GetTxsEventResponse): _94.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _94.GetTxsEventResponseProtoMsg): _94.GetTxsEventResponse;
                toProto(message: _94.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _94.GetTxsEventResponse): _94.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _94.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.BroadcastTxRequest;
                fromPartial(object: Partial<_94.BroadcastTxRequest>): _94.BroadcastTxRequest;
                fromAmino(object: _94.BroadcastTxRequestAmino): _94.BroadcastTxRequest;
                toAmino(message: _94.BroadcastTxRequest): _94.BroadcastTxRequestAmino;
                fromAminoMsg(object: _94.BroadcastTxRequestAminoMsg): _94.BroadcastTxRequest;
                toAminoMsg(message: _94.BroadcastTxRequest): _94.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _94.BroadcastTxRequestProtoMsg): _94.BroadcastTxRequest;
                toProto(message: _94.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _94.BroadcastTxRequest): _94.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _94.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.BroadcastTxResponse;
                fromPartial(object: Partial<_94.BroadcastTxResponse>): _94.BroadcastTxResponse;
                fromAmino(object: _94.BroadcastTxResponseAmino): _94.BroadcastTxResponse;
                toAmino(message: _94.BroadcastTxResponse): _94.BroadcastTxResponseAmino;
                fromAminoMsg(object: _94.BroadcastTxResponseAminoMsg): _94.BroadcastTxResponse;
                toAminoMsg(message: _94.BroadcastTxResponse): _94.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _94.BroadcastTxResponseProtoMsg): _94.BroadcastTxResponse;
                toProto(message: _94.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _94.BroadcastTxResponse): _94.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _94.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.SimulateRequest;
                fromPartial(object: Partial<_94.SimulateRequest>): _94.SimulateRequest;
                fromAmino(object: _94.SimulateRequestAmino): _94.SimulateRequest;
                toAmino(message: _94.SimulateRequest): _94.SimulateRequestAmino;
                fromAminoMsg(object: _94.SimulateRequestAminoMsg): _94.SimulateRequest;
                toAminoMsg(message: _94.SimulateRequest): _94.SimulateRequestAminoMsg;
                fromProtoMsg(message: _94.SimulateRequestProtoMsg): _94.SimulateRequest;
                toProto(message: _94.SimulateRequest): Uint8Array;
                toProtoMsg(message: _94.SimulateRequest): _94.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _94.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.SimulateResponse;
                fromPartial(object: Partial<_94.SimulateResponse>): _94.SimulateResponse;
                fromAmino(object: _94.SimulateResponseAmino): _94.SimulateResponse;
                toAmino(message: _94.SimulateResponse): _94.SimulateResponseAmino;
                fromAminoMsg(object: _94.SimulateResponseAminoMsg): _94.SimulateResponse;
                toAminoMsg(message: _94.SimulateResponse): _94.SimulateResponseAminoMsg;
                fromProtoMsg(message: _94.SimulateResponseProtoMsg): _94.SimulateResponse;
                toProto(message: _94.SimulateResponse): Uint8Array;
                toProtoMsg(message: _94.SimulateResponse): _94.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _94.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.GetTxRequest;
                fromPartial(object: Partial<_94.GetTxRequest>): _94.GetTxRequest;
                fromAmino(object: _94.GetTxRequestAmino): _94.GetTxRequest;
                toAmino(message: _94.GetTxRequest): _94.GetTxRequestAmino;
                fromAminoMsg(object: _94.GetTxRequestAminoMsg): _94.GetTxRequest;
                toAminoMsg(message: _94.GetTxRequest): _94.GetTxRequestAminoMsg;
                fromProtoMsg(message: _94.GetTxRequestProtoMsg): _94.GetTxRequest;
                toProto(message: _94.GetTxRequest): Uint8Array;
                toProtoMsg(message: _94.GetTxRequest): _94.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _94.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.GetTxResponse;
                fromPartial(object: Partial<_94.GetTxResponse>): _94.GetTxResponse;
                fromAmino(object: _94.GetTxResponseAmino): _94.GetTxResponse;
                toAmino(message: _94.GetTxResponse): _94.GetTxResponseAmino;
                fromAminoMsg(object: _94.GetTxResponseAminoMsg): _94.GetTxResponse;
                toAminoMsg(message: _94.GetTxResponse): _94.GetTxResponseAminoMsg;
                fromProtoMsg(message: _94.GetTxResponseProtoMsg): _94.GetTxResponse;
                toProto(message: _94.GetTxResponse): Uint8Array;
                toProtoMsg(message: _94.GetTxResponse): _94.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _94.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_94.GetBlockWithTxsRequest>): _94.GetBlockWithTxsRequest;
                fromAmino(object: _94.GetBlockWithTxsRequestAmino): _94.GetBlockWithTxsRequest;
                toAmino(message: _94.GetBlockWithTxsRequest): _94.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _94.GetBlockWithTxsRequestAminoMsg): _94.GetBlockWithTxsRequest;
                toAminoMsg(message: _94.GetBlockWithTxsRequest): _94.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _94.GetBlockWithTxsRequestProtoMsg): _94.GetBlockWithTxsRequest;
                toProto(message: _94.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _94.GetBlockWithTxsRequest): _94.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _94.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_94.GetBlockWithTxsResponse>): _94.GetBlockWithTxsResponse;
                fromAmino(object: _94.GetBlockWithTxsResponseAmino): _94.GetBlockWithTxsResponse;
                toAmino(message: _94.GetBlockWithTxsResponse): _94.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _94.GetBlockWithTxsResponseAminoMsg): _94.GetBlockWithTxsResponse;
                toAminoMsg(message: _94.GetBlockWithTxsResponse): _94.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _94.GetBlockWithTxsResponseProtoMsg): _94.GetBlockWithTxsResponse;
                toProto(message: _94.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _94.GetBlockWithTxsResponse): _94.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _198.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                currentPlan(request?: _96.QueryCurrentPlanRequest): Promise<_96.QueryCurrentPlanResponse>;
                appliedPlan(request: _96.QueryAppliedPlanRequest): Promise<_96.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _96.QueryUpgradedConsensusStateRequest): Promise<_96.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _96.QueryModuleVersionsRequest): Promise<_96.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _183.LCDQueryClient;
            Plan: {
                typeUrl: string;
                encode(message: _97.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.Plan;
                fromPartial(object: Partial<_97.Plan>): _97.Plan;
                fromAmino(object: _97.PlanAmino): _97.Plan;
                toAmino(message: _97.Plan): _97.PlanAmino;
                fromAminoMsg(object: _97.PlanAminoMsg): _97.Plan;
                toAminoMsg(message: _97.Plan): _97.PlanAminoMsg;
                fromProtoMsg(message: _97.PlanProtoMsg): _97.Plan;
                toProto(message: _97.Plan): Uint8Array;
                toProtoMsg(message: _97.Plan): _97.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _97.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_97.SoftwareUpgradeProposal>): _97.SoftwareUpgradeProposal;
                fromAmino(object: _97.SoftwareUpgradeProposalAmino): _97.SoftwareUpgradeProposal;
                toAmino(message: _97.SoftwareUpgradeProposal): _97.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _97.SoftwareUpgradeProposalAminoMsg): _97.SoftwareUpgradeProposal;
                toAminoMsg(message: _97.SoftwareUpgradeProposal): _97.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _97.SoftwareUpgradeProposalProtoMsg): _97.SoftwareUpgradeProposal;
                toProto(message: _97.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _97.SoftwareUpgradeProposal): _97.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _97.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_97.CancelSoftwareUpgradeProposal>): _97.CancelSoftwareUpgradeProposal;
                fromAmino(object: _97.CancelSoftwareUpgradeProposalAmino): _97.CancelSoftwareUpgradeProposal;
                toAmino(message: _97.CancelSoftwareUpgradeProposal): _97.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _97.CancelSoftwareUpgradeProposalAminoMsg): _97.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _97.CancelSoftwareUpgradeProposal): _97.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _97.CancelSoftwareUpgradeProposalProtoMsg): _97.CancelSoftwareUpgradeProposal;
                toProto(message: _97.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _97.CancelSoftwareUpgradeProposal): _97.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _97.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.ModuleVersion;
                fromPartial(object: Partial<_97.ModuleVersion>): _97.ModuleVersion;
                fromAmino(object: _97.ModuleVersionAmino): _97.ModuleVersion;
                toAmino(message: _97.ModuleVersion): _97.ModuleVersionAmino;
                fromAminoMsg(object: _97.ModuleVersionAminoMsg): _97.ModuleVersion;
                toAminoMsg(message: _97.ModuleVersion): _97.ModuleVersionAminoMsg;
                fromProtoMsg(message: _97.ModuleVersionProtoMsg): _97.ModuleVersion;
                toProto(message: _97.ModuleVersion): Uint8Array;
                toProtoMsg(message: _97.ModuleVersion): _97.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _96.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _96.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_96.QueryCurrentPlanRequest>): _96.QueryCurrentPlanRequest;
                fromAmino(_: _96.QueryCurrentPlanRequestAmino): _96.QueryCurrentPlanRequest;
                toAmino(_: _96.QueryCurrentPlanRequest): _96.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _96.QueryCurrentPlanRequestAminoMsg): _96.QueryCurrentPlanRequest;
                toAminoMsg(message: _96.QueryCurrentPlanRequest): _96.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _96.QueryCurrentPlanRequestProtoMsg): _96.QueryCurrentPlanRequest;
                toProto(message: _96.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _96.QueryCurrentPlanRequest): _96.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _96.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_96.QueryCurrentPlanResponse>): _96.QueryCurrentPlanResponse;
                fromAmino(object: _96.QueryCurrentPlanResponseAmino): _96.QueryCurrentPlanResponse;
                toAmino(message: _96.QueryCurrentPlanResponse): _96.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _96.QueryCurrentPlanResponseAminoMsg): _96.QueryCurrentPlanResponse;
                toAminoMsg(message: _96.QueryCurrentPlanResponse): _96.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _96.QueryCurrentPlanResponseProtoMsg): _96.QueryCurrentPlanResponse;
                toProto(message: _96.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _96.QueryCurrentPlanResponse): _96.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _96.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_96.QueryAppliedPlanRequest>): _96.QueryAppliedPlanRequest;
                fromAmino(object: _96.QueryAppliedPlanRequestAmino): _96.QueryAppliedPlanRequest;
                toAmino(message: _96.QueryAppliedPlanRequest): _96.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _96.QueryAppliedPlanRequestAminoMsg): _96.QueryAppliedPlanRequest;
                toAminoMsg(message: _96.QueryAppliedPlanRequest): _96.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _96.QueryAppliedPlanRequestProtoMsg): _96.QueryAppliedPlanRequest;
                toProto(message: _96.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _96.QueryAppliedPlanRequest): _96.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _96.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_96.QueryAppliedPlanResponse>): _96.QueryAppliedPlanResponse;
                fromAmino(object: _96.QueryAppliedPlanResponseAmino): _96.QueryAppliedPlanResponse;
                toAmino(message: _96.QueryAppliedPlanResponse): _96.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _96.QueryAppliedPlanResponseAminoMsg): _96.QueryAppliedPlanResponse;
                toAminoMsg(message: _96.QueryAppliedPlanResponse): _96.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _96.QueryAppliedPlanResponseProtoMsg): _96.QueryAppliedPlanResponse;
                toProto(message: _96.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _96.QueryAppliedPlanResponse): _96.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _96.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_96.QueryUpgradedConsensusStateRequest>): _96.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _96.QueryUpgradedConsensusStateRequestAmino): _96.QueryUpgradedConsensusStateRequest;
                toAmino(message: _96.QueryUpgradedConsensusStateRequest): _96.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _96.QueryUpgradedConsensusStateRequestAminoMsg): _96.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _96.QueryUpgradedConsensusStateRequest): _96.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _96.QueryUpgradedConsensusStateRequestProtoMsg): _96.QueryUpgradedConsensusStateRequest;
                toProto(message: _96.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _96.QueryUpgradedConsensusStateRequest): _96.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _96.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_96.QueryUpgradedConsensusStateResponse>): _96.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _96.QueryUpgradedConsensusStateResponseAmino): _96.QueryUpgradedConsensusStateResponse;
                toAmino(message: _96.QueryUpgradedConsensusStateResponse): _96.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _96.QueryUpgradedConsensusStateResponseAminoMsg): _96.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _96.QueryUpgradedConsensusStateResponse): _96.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _96.QueryUpgradedConsensusStateResponseProtoMsg): _96.QueryUpgradedConsensusStateResponse;
                toProto(message: _96.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _96.QueryUpgradedConsensusStateResponse): _96.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _96.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_96.QueryModuleVersionsRequest>): _96.QueryModuleVersionsRequest;
                fromAmino(object: _96.QueryModuleVersionsRequestAmino): _96.QueryModuleVersionsRequest;
                toAmino(message: _96.QueryModuleVersionsRequest): _96.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _96.QueryModuleVersionsRequestAminoMsg): _96.QueryModuleVersionsRequest;
                toAminoMsg(message: _96.QueryModuleVersionsRequest): _96.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _96.QueryModuleVersionsRequestProtoMsg): _96.QueryModuleVersionsRequest;
                toProto(message: _96.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _96.QueryModuleVersionsRequest): _96.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _96.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_96.QueryModuleVersionsResponse>): _96.QueryModuleVersionsResponse;
                fromAmino(object: _96.QueryModuleVersionsResponseAmino): _96.QueryModuleVersionsResponse;
                toAmino(message: _96.QueryModuleVersionsResponse): _96.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _96.QueryModuleVersionsResponseAminoMsg): _96.QueryModuleVersionsResponse;
                toAminoMsg(message: _96.QueryModuleVersionsResponse): _96.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _96.QueryModuleVersionsResponseProtoMsg): _96.QueryModuleVersionsResponse;
                toProto(message: _96.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _96.QueryModuleVersionsResponse): _96.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _208.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _98.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _98.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _98.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _98.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _98.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _98.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _98.MsgCreateVestingAccount) => _98.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _98.MsgCreateVestingAccountAmino) => _98.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _99.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.BaseVestingAccount;
                fromPartial(object: Partial<_99.BaseVestingAccount>): _99.BaseVestingAccount;
                fromAmino(object: _99.BaseVestingAccountAmino): _99.BaseVestingAccount;
                toAmino(message: _99.BaseVestingAccount): _99.BaseVestingAccountAmino;
                fromAminoMsg(object: _99.BaseVestingAccountAminoMsg): _99.BaseVestingAccount;
                toAminoMsg(message: _99.BaseVestingAccount): _99.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _99.BaseVestingAccountProtoMsg): _99.BaseVestingAccount;
                toProto(message: _99.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _99.BaseVestingAccount): _99.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _99.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.ContinuousVestingAccount;
                fromPartial(object: Partial<_99.ContinuousVestingAccount>): _99.ContinuousVestingAccount;
                fromAmino(object: _99.ContinuousVestingAccountAmino): _99.ContinuousVestingAccount;
                toAmino(message: _99.ContinuousVestingAccount): _99.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _99.ContinuousVestingAccountAminoMsg): _99.ContinuousVestingAccount;
                toAminoMsg(message: _99.ContinuousVestingAccount): _99.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _99.ContinuousVestingAccountProtoMsg): _99.ContinuousVestingAccount;
                toProto(message: _99.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _99.ContinuousVestingAccount): _99.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _99.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.DelayedVestingAccount;
                fromPartial(object: Partial<_99.DelayedVestingAccount>): _99.DelayedVestingAccount;
                fromAmino(object: _99.DelayedVestingAccountAmino): _99.DelayedVestingAccount;
                toAmino(message: _99.DelayedVestingAccount): _99.DelayedVestingAccountAmino;
                fromAminoMsg(object: _99.DelayedVestingAccountAminoMsg): _99.DelayedVestingAccount;
                toAminoMsg(message: _99.DelayedVestingAccount): _99.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _99.DelayedVestingAccountProtoMsg): _99.DelayedVestingAccount;
                toProto(message: _99.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _99.DelayedVestingAccount): _99.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _99.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.Period;
                fromPartial(object: Partial<_99.Period>): _99.Period;
                fromAmino(object: _99.PeriodAmino): _99.Period;
                toAmino(message: _99.Period): _99.PeriodAmino;
                fromAminoMsg(object: _99.PeriodAminoMsg): _99.Period;
                toAminoMsg(message: _99.Period): _99.PeriodAminoMsg;
                fromProtoMsg(message: _99.PeriodProtoMsg): _99.Period;
                toProto(message: _99.Period): Uint8Array;
                toProtoMsg(message: _99.Period): _99.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _99.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.PeriodicVestingAccount;
                fromPartial(object: Partial<_99.PeriodicVestingAccount>): _99.PeriodicVestingAccount;
                fromAmino(object: _99.PeriodicVestingAccountAmino): _99.PeriodicVestingAccount;
                toAmino(message: _99.PeriodicVestingAccount): _99.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _99.PeriodicVestingAccountAminoMsg): _99.PeriodicVestingAccount;
                toAminoMsg(message: _99.PeriodicVestingAccount): _99.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _99.PeriodicVestingAccountProtoMsg): _99.PeriodicVestingAccount;
                toProto(message: _99.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _99.PeriodicVestingAccount): _99.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _99.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.PermanentLockedAccount;
                fromPartial(object: Partial<_99.PermanentLockedAccount>): _99.PermanentLockedAccount;
                fromAmino(object: _99.PermanentLockedAccountAmino): _99.PermanentLockedAccount;
                toAmino(message: _99.PermanentLockedAccount): _99.PermanentLockedAccountAmino;
                fromAminoMsg(object: _99.PermanentLockedAccountAminoMsg): _99.PermanentLockedAccount;
                toAminoMsg(message: _99.PermanentLockedAccount): _99.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _99.PermanentLockedAccountProtoMsg): _99.PermanentLockedAccount;
                toProto(message: _99.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _99.PermanentLockedAccount): _99.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _98.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.MsgCreateVestingAccount;
                fromPartial(object: Partial<_98.MsgCreateVestingAccount>): _98.MsgCreateVestingAccount;
                fromAmino(object: _98.MsgCreateVestingAccountAmino): _98.MsgCreateVestingAccount;
                toAmino(message: _98.MsgCreateVestingAccount): _98.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _98.MsgCreateVestingAccountAminoMsg): _98.MsgCreateVestingAccount;
                toAminoMsg(message: _98.MsgCreateVestingAccount): _98.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _98.MsgCreateVestingAccountProtoMsg): _98.MsgCreateVestingAccount;
                toProto(message: _98.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _98.MsgCreateVestingAccount): _98.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _98.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _98.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_98.MsgCreateVestingAccountResponse>): _98.MsgCreateVestingAccountResponse;
                fromAmino(_: _98.MsgCreateVestingAccountResponseAmino): _98.MsgCreateVestingAccountResponse;
                toAmino(_: _98.MsgCreateVestingAccountResponse): _98.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _98.MsgCreateVestingAccountResponseAminoMsg): _98.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _98.MsgCreateVestingAccountResponse): _98.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _98.MsgCreateVestingAccountResponseProtoMsg): _98.MsgCreateVestingAccountResponse;
                toProto(message: _98.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _98.MsgCreateVestingAccountResponse): _98.MsgCreateVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _199.MsgClientImpl;
                };
                bank: {
                    v1beta1: _200.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _201.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _202.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _203.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _204.MsgClientImpl;
                };
                gov: {
                    v1beta1: _205.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _206.MsgClientImpl;
                };
                staking: {
                    v1beta1: _207.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _208.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: any;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _31.QueryAccountsRequest): Promise<_31.QueryAccountsResponse>;
                        account(request: _31.QueryAccountRequest): Promise<_31.QueryAccountResponse>;
                        params(request?: _31.QueryParamsRequest): Promise<_31.QueryParamsResponse>;
                        moduleAccountByName(request: _31.QueryModuleAccountByNameRequest): Promise<_31.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _35.QueryGrantsRequest): Promise<_35.QueryGrantsResponse>;
                        granterGrants(request: _35.QueryGranterGrantsRequest): Promise<_35.QueryGranterGrantsResponse>;
                        granteeGrants(request: _35.QueryGranteeGrantsRequest): Promise<_35.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _40.QueryBalanceRequest): Promise<_40.QueryBalanceResponse>;
                        allBalances(request: _40.QueryAllBalancesRequest): Promise<_40.QueryAllBalancesResponse>;
                        spendableBalances(request: _40.QuerySpendableBalancesRequest): Promise<_40.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _40.QueryTotalSupplyRequest): Promise<_40.QueryTotalSupplyResponse>;
                        supplyOf(request: _40.QuerySupplyOfRequest): Promise<_40.QuerySupplyOfResponse>;
                        params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                        denomMetadata(request: _40.QueryDenomMetadataRequest): Promise<_40.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _40.QueryDenomsMetadataRequest): Promise<_40.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _44.ConfigRequest): Promise<_44.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _51.GetNodeInfoRequest): Promise<_51.GetNodeInfoResponse>;
                            getSyncing(request?: _51.GetSyncingRequest): Promise<_51.GetSyncingResponse>;
                            getLatestBlock(request?: _51.GetLatestBlockRequest): Promise<_51.GetLatestBlockResponse>;
                            getBlockByHeight(request: _51.GetBlockByHeightRequest): Promise<_51.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _51.GetLatestValidatorSetRequest): Promise<_51.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _51.GetValidatorSetByHeightRequest): Promise<_51.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _64.QueryValidatorOutstandingRewardsRequest): Promise<_64.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _64.QueryValidatorCommissionRequest): Promise<_64.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _64.QueryValidatorSlashesRequest): Promise<_64.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _64.QueryDelegationRewardsRequest): Promise<_64.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _64.QueryDelegationTotalRewardsRequest): Promise<_64.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _64.QueryDelegatorValidatorsRequest): Promise<_64.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _64.QueryDelegatorWithdrawAddressRequest): Promise<_64.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _64.QueryCommunityPoolRequest): Promise<_64.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _68.QueryEvidenceRequest): Promise<_68.QueryEvidenceResponse>;
                        allEvidence(request?: _68.QueryAllEvidenceRequest): Promise<_68.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _72.QueryAllowanceRequest): Promise<_72.QueryAllowanceResponse>;
                        allowances(request: _72.QueryAllowancesRequest): Promise<_72.QueryAllowancesResponse>;
                        allowancesByGranter(request: _72.QueryAllowancesByGranterRequest): Promise<_72.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _77.QueryProposalRequest): Promise<_77.QueryProposalResponse>;
                        proposals(request: _77.QueryProposalsRequest): Promise<_77.QueryProposalsResponse>;
                        vote(request: _77.QueryVoteRequest): Promise<_77.QueryVoteResponse>;
                        votes(request: _77.QueryVotesRequest): Promise<_77.QueryVotesResponse>;
                        params(request: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                        deposit(request: _77.QueryDepositRequest): Promise<_77.QueryDepositResponse>;
                        deposits(request: _77.QueryDepositsRequest): Promise<_77.QueryDepositsResponse>;
                        tallyResult(request: _77.QueryTallyResultRequest): Promise<_77.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                        inflation(request?: _81.QueryInflationRequest): Promise<_81.QueryInflationResponse>;
                        annualProvisions(request?: _81.QueryAnnualProvisionsRequest): Promise<_81.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                        signingInfo(request: _85.QuerySigningInfoRequest): Promise<_85.QuerySigningInfoResponse>;
                        signingInfos(request?: _85.QuerySigningInfosRequest): Promise<_85.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _90.QueryValidatorsRequest): Promise<_90.QueryValidatorsResponse>;
                        validator(request: _90.QueryValidatorRequest): Promise<_90.QueryValidatorResponse>;
                        validatorDelegations(request: _90.QueryValidatorDelegationsRequest): Promise<_90.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _90.QueryValidatorUnbondingDelegationsRequest): Promise<_90.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _90.QueryDelegationRequest): Promise<_90.QueryDelegationResponse>;
                        unbondingDelegation(request: _90.QueryUnbondingDelegationRequest): Promise<_90.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _90.QueryDelegatorDelegationsRequest): Promise<_90.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _90.QueryDelegatorUnbondingDelegationsRequest): Promise<_90.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _90.QueryRedelegationsRequest): Promise<_90.QueryRedelegationsResponse>;
                        delegatorValidators(request: _90.QueryDelegatorValidatorsRequest): Promise<_90.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _90.QueryDelegatorValidatorRequest): Promise<_90.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _90.QueryHistoricalInfoRequest): Promise<_90.QueryHistoricalInfoResponse>;
                        pool(request?: _90.QueryPoolRequest): Promise<_90.QueryPoolResponse>;
                        params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _94.SimulateRequest): Promise<_94.SimulateResponse>;
                        getTx(request: _94.GetTxRequest): Promise<_94.GetTxResponse>;
                        broadcastTx(request: _94.BroadcastTxRequest): Promise<_94.BroadcastTxResponse>;
                        getTxsEvent(request: _94.GetTxsEventRequest): Promise<_94.GetTxsEventResponse>;
                        getBlockWithTxs(request: _94.GetBlockWithTxsRequest): Promise<_94.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _96.QueryCurrentPlanRequest): Promise<_96.QueryCurrentPlanResponse>;
                        appliedPlan(request: _96.QueryAppliedPlanRequest): Promise<_96.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _96.QueryUpgradedConsensusStateRequest): Promise<_96.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _96.QueryModuleVersionsRequest): Promise<_96.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _169.LCDQueryClient;
                };
                authz: {
                    v1beta1: _170.LCDQueryClient;
                };
                bank: {
                    v1beta1: _171.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _172.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _173.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _174.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _175.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _176.LCDQueryClient;
                };
                gov: {
                    v1beta1: _177.LCDQueryClient;
                };
                mint: {
                    v1beta1: _178.LCDQueryClient;
                };
                params: {
                    v1beta1: _179.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _180.LCDQueryClient;
                };
                staking: {
                    v1beta1: _181.LCDQueryClient;
                };
                tx: {
                    v1beta1: _182.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _183.LCDQueryClient;
                };
            };
        }>;
    };
}
