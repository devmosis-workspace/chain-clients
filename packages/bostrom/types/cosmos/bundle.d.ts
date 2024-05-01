import * as _22 from "./auth/v1beta1/auth";
import * as _23 from "./auth/v1beta1/genesis";
import * as _24 from "./auth/v1beta1/query";
import * as _25 from "./authz/v1beta1/authz";
import * as _26 from "./authz/v1beta1/event";
import * as _27 from "./authz/v1beta1/genesis";
import * as _28 from "./authz/v1beta1/query";
import * as _29 from "./authz/v1beta1/tx";
import * as _30 from "./bank/v1beta1/authz";
import * as _31 from "./bank/v1beta1/bank";
import * as _32 from "./bank/v1beta1/genesis";
import * as _33 from "./bank/v1beta1/query";
import * as _34 from "./bank/v1beta1/tx";
import * as _35 from "./base/abci/v1beta1/abci";
import * as _36 from "./base/kv/v1beta1/kv";
import * as _37 from "./base/node/v1beta1/query";
import * as _38 from "./base/query/v1beta1/pagination";
import * as _39 from "./base/reflection/v1beta1/reflection";
import * as _40 from "./base/reflection/v2alpha1/reflection";
import * as _41 from "./base/snapshots/v1beta1/snapshot";
import * as _42 from "./base/store/v1beta1/commit_info";
import * as _43 from "./base/store/v1beta1/listening";
import * as _44 from "./base/tendermint/v1beta1/query";
import * as _45 from "./base/v1beta1/coin";
import * as _46 from "./capability/v1beta1/capability";
import * as _47 from "./capability/v1beta1/genesis";
import * as _48 from "./crisis/v1beta1/genesis";
import * as _49 from "./crisis/v1beta1/tx";
import * as _50 from "./crypto/ed25519/keys";
import * as _51 from "./crypto/multisig/keys";
import * as _52 from "./crypto/secp256k1/keys";
import * as _53 from "./crypto/secp256r1/keys";
import * as _54 from "./distribution/v1beta1/distribution";
import * as _55 from "./distribution/v1beta1/genesis";
import * as _56 from "./distribution/v1beta1/query";
import * as _57 from "./distribution/v1beta1/tx";
import * as _58 from "./evidence/v1beta1/evidence";
import * as _59 from "./evidence/v1beta1/genesis";
import * as _60 from "./evidence/v1beta1/query";
import * as _61 from "./evidence/v1beta1/tx";
import * as _62 from "./feegrant/v1beta1/feegrant";
import * as _63 from "./feegrant/v1beta1/genesis";
import * as _64 from "./feegrant/v1beta1/query";
import * as _65 from "./feegrant/v1beta1/tx";
import * as _66 from "./genutil/v1beta1/genesis";
import * as _67 from "./gov/v1beta1/genesis";
import * as _68 from "./gov/v1beta1/gov";
import * as _69 from "./gov/v1beta1/query";
import * as _70 from "./gov/v1beta1/tx";
import * as _71 from "./mint/v1beta1/genesis";
import * as _72 from "./mint/v1beta1/mint";
import * as _73 from "./mint/v1beta1/query";
import * as _74 from "./params/v1beta1/params";
import * as _75 from "./params/v1beta1/query";
import * as _76 from "./slashing/v1beta1/genesis";
import * as _77 from "./slashing/v1beta1/query";
import * as _78 from "./slashing/v1beta1/slashing";
import * as _79 from "./slashing/v1beta1/tx";
import * as _80 from "./staking/v1beta1/authz";
import * as _81 from "./staking/v1beta1/genesis";
import * as _82 from "./staking/v1beta1/query";
import * as _83 from "./staking/v1beta1/staking";
import * as _84 from "./staking/v1beta1/tx";
import * as _85 from "./tx/signing/v1beta1/signing";
import * as _86 from "./tx/v1beta1/service";
import * as _87 from "./tx/v1beta1/tx";
import * as _88 from "./upgrade/v1beta1/query";
import * as _89 from "./upgrade/v1beta1/upgrade";
import * as _90 from "./vesting/v1beta1/tx";
import * as _91 from "./vesting/v1beta1/vesting";
import * as _162 from "./auth/v1beta1/query.lcd";
import * as _163 from "./authz/v1beta1/query.lcd";
import * as _164 from "./bank/v1beta1/query.lcd";
import * as _165 from "./base/node/v1beta1/query.lcd";
import * as _166 from "./base/tendermint/v1beta1/query.lcd";
import * as _167 from "./distribution/v1beta1/query.lcd";
import * as _168 from "./evidence/v1beta1/query.lcd";
import * as _169 from "./feegrant/v1beta1/query.lcd";
import * as _170 from "./gov/v1beta1/query.lcd";
import * as _171 from "./mint/v1beta1/query.lcd";
import * as _172 from "./params/v1beta1/query.lcd";
import * as _173 from "./slashing/v1beta1/query.lcd";
import * as _174 from "./staking/v1beta1/query.lcd";
import * as _175 from "./tx/v1beta1/service.lcd";
import * as _176 from "./upgrade/v1beta1/query.lcd";
import * as _177 from "./auth/v1beta1/query.rpc.Query";
import * as _178 from "./authz/v1beta1/query.rpc.Query";
import * as _179 from "./bank/v1beta1/query.rpc.Query";
import * as _180 from "./base/node/v1beta1/query.rpc.Service";
import * as _181 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _182 from "./distribution/v1beta1/query.rpc.Query";
import * as _183 from "./evidence/v1beta1/query.rpc.Query";
import * as _184 from "./feegrant/v1beta1/query.rpc.Query";
import * as _185 from "./gov/v1beta1/query.rpc.Query";
import * as _186 from "./mint/v1beta1/query.rpc.Query";
import * as _187 from "./params/v1beta1/query.rpc.Query";
import * as _188 from "./slashing/v1beta1/query.rpc.Query";
import * as _189 from "./staking/v1beta1/query.rpc.Query";
import * as _190 from "./tx/v1beta1/service.rpc.Service";
import * as _191 from "./upgrade/v1beta1/query.rpc.Query";
import * as _192 from "./authz/v1beta1/tx.rpc.msg";
import * as _193 from "./bank/v1beta1/tx.rpc.msg";
import * as _194 from "./crisis/v1beta1/tx.rpc.msg";
import * as _195 from "./distribution/v1beta1/tx.rpc.msg";
import * as _196 from "./evidence/v1beta1/tx.rpc.msg";
import * as _197 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _198 from "./gov/v1beta1/tx.rpc.msg";
import * as _199 from "./slashing/v1beta1/tx.rpc.msg";
import * as _200 from "./staking/v1beta1/tx.rpc.msg";
import * as _201 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _177.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                accounts(request?: _24.QueryAccountsRequest): Promise<_24.QueryAccountsResponse>;
                account(request: _24.QueryAccountRequest): Promise<_24.QueryAccountResponse>;
                params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                moduleAccountByName(request: _24.QueryModuleAccountByNameRequest): Promise<_24.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _162.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _24.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryAccountsRequest;
                fromPartial(object: Partial<_24.QueryAccountsRequest>): _24.QueryAccountsRequest;
                fromAmino(object: _24.QueryAccountsRequestAmino): _24.QueryAccountsRequest;
                toAmino(message: _24.QueryAccountsRequest): _24.QueryAccountsRequestAmino;
                fromAminoMsg(object: _24.QueryAccountsRequestAminoMsg): _24.QueryAccountsRequest;
                toAminoMsg(message: _24.QueryAccountsRequest): _24.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _24.QueryAccountsRequestProtoMsg): _24.QueryAccountsRequest;
                toProto(message: _24.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryAccountsRequest): _24.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _24.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryAccountsResponse;
                fromPartial(object: Partial<_24.QueryAccountsResponse>): _24.QueryAccountsResponse;
                fromAmino(object: _24.QueryAccountsResponseAmino): _24.QueryAccountsResponse;
                toAmino(message: _24.QueryAccountsResponse): _24.QueryAccountsResponseAmino;
                fromAminoMsg(object: _24.QueryAccountsResponseAminoMsg): _24.QueryAccountsResponse;
                toAminoMsg(message: _24.QueryAccountsResponse): _24.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _24.QueryAccountsResponseProtoMsg): _24.QueryAccountsResponse;
                toProto(message: _24.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryAccountsResponse): _24.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _24.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryAccountRequest;
                fromPartial(object: Partial<_24.QueryAccountRequest>): _24.QueryAccountRequest;
                fromAmino(object: _24.QueryAccountRequestAmino): _24.QueryAccountRequest;
                toAmino(message: _24.QueryAccountRequest): _24.QueryAccountRequestAmino;
                fromAminoMsg(object: _24.QueryAccountRequestAminoMsg): _24.QueryAccountRequest;
                toAminoMsg(message: _24.QueryAccountRequest): _24.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _24.QueryAccountRequestProtoMsg): _24.QueryAccountRequest;
                toProto(message: _24.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _24.QueryAccountRequest): _24.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _24.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryAccountResponse;
                fromPartial(object: Partial<_24.QueryAccountResponse>): _24.QueryAccountResponse;
                fromAmino(object: _24.QueryAccountResponseAmino): _24.QueryAccountResponse;
                toAmino(message: _24.QueryAccountResponse): _24.QueryAccountResponseAmino;
                fromAminoMsg(object: _24.QueryAccountResponseAminoMsg): _24.QueryAccountResponse;
                toAminoMsg(message: _24.QueryAccountResponse): _24.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _24.QueryAccountResponseProtoMsg): _24.QueryAccountResponse;
                toProto(message: _24.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _24.QueryAccountResponse): _24.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _24.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.QueryParamsRequest;
                fromPartial(_: Partial<_24.QueryParamsRequest>): _24.QueryParamsRequest;
                fromAmino(_: _24.QueryParamsRequestAmino): _24.QueryParamsRequest;
                toAmino(_: _24.QueryParamsRequest): _24.QueryParamsRequestAmino;
                fromAminoMsg(object: _24.QueryParamsRequestAminoMsg): _24.QueryParamsRequest;
                toAminoMsg(message: _24.QueryParamsRequest): _24.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _24.QueryParamsRequestProtoMsg): _24.QueryParamsRequest;
                toProto(message: _24.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryParamsRequest): _24.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _24.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryParamsResponse;
                fromPartial(object: Partial<_24.QueryParamsResponse>): _24.QueryParamsResponse;
                fromAmino(object: _24.QueryParamsResponseAmino): _24.QueryParamsResponse;
                toAmino(message: _24.QueryParamsResponse): _24.QueryParamsResponseAmino;
                fromAminoMsg(object: _24.QueryParamsResponseAminoMsg): _24.QueryParamsResponse;
                toAminoMsg(message: _24.QueryParamsResponse): _24.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _24.QueryParamsResponseProtoMsg): _24.QueryParamsResponse;
                toProto(message: _24.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryParamsResponse): _24.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _24.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_24.QueryModuleAccountByNameRequest>): _24.QueryModuleAccountByNameRequest;
                fromAmino(object: _24.QueryModuleAccountByNameRequestAmino): _24.QueryModuleAccountByNameRequest;
                toAmino(message: _24.QueryModuleAccountByNameRequest): _24.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _24.QueryModuleAccountByNameRequestAminoMsg): _24.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _24.QueryModuleAccountByNameRequest): _24.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _24.QueryModuleAccountByNameRequestProtoMsg): _24.QueryModuleAccountByNameRequest;
                toProto(message: _24.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _24.QueryModuleAccountByNameRequest): _24.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _24.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_24.QueryModuleAccountByNameResponse>): _24.QueryModuleAccountByNameResponse;
                fromAmino(object: _24.QueryModuleAccountByNameResponseAmino): _24.QueryModuleAccountByNameResponse;
                toAmino(message: _24.QueryModuleAccountByNameResponse): _24.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _24.QueryModuleAccountByNameResponseAminoMsg): _24.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _24.QueryModuleAccountByNameResponse): _24.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _24.QueryModuleAccountByNameResponseProtoMsg): _24.QueryModuleAccountByNameResponse;
                toProto(message: _24.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _24.QueryModuleAccountByNameResponse): _24.QueryModuleAccountByNameResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _22.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _22.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            BaseAccount: {
                typeUrl: string;
                encode(message: _22.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.BaseAccount;
                fromPartial(object: Partial<_22.BaseAccount>): _22.BaseAccount;
                fromAmino(object: _22.BaseAccountAmino): _22.BaseAccount;
                toAmino(message: _22.BaseAccount): _22.BaseAccountAmino;
                fromAminoMsg(object: _22.BaseAccountAminoMsg): _22.BaseAccount;
                toAminoMsg(message: _22.BaseAccount): _22.BaseAccountAminoMsg;
                fromProtoMsg(message: _22.BaseAccountProtoMsg): _22.BaseAccount;
                toProto(message: _22.BaseAccount): Uint8Array;
                toProtoMsg(message: _22.BaseAccount): _22.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _22.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.ModuleAccount;
                fromPartial(object: Partial<_22.ModuleAccount>): _22.ModuleAccount;
                fromAmino(object: _22.ModuleAccountAmino): _22.ModuleAccount;
                toAmino(message: _22.ModuleAccount): _22.ModuleAccountAmino;
                fromAminoMsg(object: _22.ModuleAccountAminoMsg): _22.ModuleAccount;
                toAminoMsg(message: _22.ModuleAccount): _22.ModuleAccountAminoMsg;
                fromProtoMsg(message: _22.ModuleAccountProtoMsg): _22.ModuleAccount;
                toProto(message: _22.ModuleAccount): Uint8Array;
                toProtoMsg(message: _22.ModuleAccount): _22.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _22.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.Params;
                fromPartial(object: Partial<_22.Params>): _22.Params;
                fromAmino(object: _22.ParamsAmino): _22.Params;
                toAmino(message: _22.Params): _22.ParamsAmino;
                fromAminoMsg(object: _22.ParamsAminoMsg): _22.Params;
                toAminoMsg(message: _22.Params): _22.ParamsAminoMsg;
                fromProtoMsg(message: _22.ParamsProtoMsg): _22.Params;
                toProto(message: _22.Params): Uint8Array;
                toProtoMsg(message: _22.Params): _22.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _192.MsgClientImpl;
            QueryClientImpl: typeof _178.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                grants(request: _28.QueryGrantsRequest): Promise<_28.QueryGrantsResponse>;
                granterGrants(request: _28.QueryGranterGrantsRequest): Promise<_28.QueryGranterGrantsResponse>;
                granteeGrants(request: _28.QueryGranteeGrantsRequest): Promise<_28.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _163.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _29.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _29.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _29.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _29.MsgGrant): {
                        typeUrl: string;
                        value: _29.MsgGrant;
                    };
                    exec(value: _29.MsgExec): {
                        typeUrl: string;
                        value: _29.MsgExec;
                    };
                    revoke(value: _29.MsgRevoke): {
                        typeUrl: string;
                        value: _29.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _29.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _29.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _29.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _29.MsgGrant): {
                        typeUrl: string;
                        value: _29.MsgGrant;
                    };
                    exec(value: _29.MsgExec): {
                        typeUrl: string;
                        value: _29.MsgExec;
                    };
                    revoke(value: _29.MsgRevoke): {
                        typeUrl: string;
                        value: _29.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _29.MsgGrant) => _29.MsgGrantAmino;
                    fromAmino: (object: _29.MsgGrantAmino) => _29.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _29.MsgExec) => _29.MsgExecAmino;
                    fromAmino: (object: _29.MsgExecAmino) => _29.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _29.MsgRevoke) => _29.MsgRevokeAmino;
                    fromAmino: (object: _29.MsgRevokeAmino) => _29.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _29.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgGrant;
                fromPartial(object: Partial<_29.MsgGrant>): _29.MsgGrant;
                fromAmino(object: _29.MsgGrantAmino): _29.MsgGrant;
                toAmino(message: _29.MsgGrant): _29.MsgGrantAmino;
                fromAminoMsg(object: _29.MsgGrantAminoMsg): _29.MsgGrant;
                toAminoMsg(message: _29.MsgGrant): _29.MsgGrantAminoMsg;
                fromProtoMsg(message: _29.MsgGrantProtoMsg): _29.MsgGrant;
                toProto(message: _29.MsgGrant): Uint8Array;
                toProtoMsg(message: _29.MsgGrant): _29.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _29.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgExecResponse;
                fromPartial(object: Partial<_29.MsgExecResponse>): _29.MsgExecResponse;
                fromAmino(object: _29.MsgExecResponseAmino): _29.MsgExecResponse;
                toAmino(message: _29.MsgExecResponse): _29.MsgExecResponseAmino;
                fromAminoMsg(object: _29.MsgExecResponseAminoMsg): _29.MsgExecResponse;
                toAminoMsg(message: _29.MsgExecResponse): _29.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _29.MsgExecResponseProtoMsg): _29.MsgExecResponse;
                toProto(message: _29.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _29.MsgExecResponse): _29.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _29.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgExec;
                fromPartial(object: Partial<_29.MsgExec>): _29.MsgExec;
                fromAmino(object: _29.MsgExecAmino): _29.MsgExec;
                toAmino(message: _29.MsgExec): _29.MsgExecAmino;
                fromAminoMsg(object: _29.MsgExecAminoMsg): _29.MsgExec;
                toAminoMsg(message: _29.MsgExec): _29.MsgExecAminoMsg;
                fromProtoMsg(message: _29.MsgExecProtoMsg): _29.MsgExec;
                toProto(message: _29.MsgExec): Uint8Array;
                toProtoMsg(message: _29.MsgExec): _29.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _29.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.MsgGrantResponse;
                fromPartial(_: Partial<_29.MsgGrantResponse>): _29.MsgGrantResponse;
                fromAmino(_: _29.MsgGrantResponseAmino): _29.MsgGrantResponse;
                toAmino(_: _29.MsgGrantResponse): _29.MsgGrantResponseAmino;
                fromAminoMsg(object: _29.MsgGrantResponseAminoMsg): _29.MsgGrantResponse;
                toAminoMsg(message: _29.MsgGrantResponse): _29.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _29.MsgGrantResponseProtoMsg): _29.MsgGrantResponse;
                toProto(message: _29.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _29.MsgGrantResponse): _29.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _29.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgRevoke;
                fromPartial(object: Partial<_29.MsgRevoke>): _29.MsgRevoke;
                fromAmino(object: _29.MsgRevokeAmino): _29.MsgRevoke;
                toAmino(message: _29.MsgRevoke): _29.MsgRevokeAmino;
                fromAminoMsg(object: _29.MsgRevokeAminoMsg): _29.MsgRevoke;
                toAminoMsg(message: _29.MsgRevoke): _29.MsgRevokeAminoMsg;
                fromProtoMsg(message: _29.MsgRevokeProtoMsg): _29.MsgRevoke;
                toProto(message: _29.MsgRevoke): Uint8Array;
                toProtoMsg(message: _29.MsgRevoke): _29.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _29.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.MsgRevokeResponse;
                fromPartial(_: Partial<_29.MsgRevokeResponse>): _29.MsgRevokeResponse;
                fromAmino(_: _29.MsgRevokeResponseAmino): _29.MsgRevokeResponse;
                toAmino(_: _29.MsgRevokeResponse): _29.MsgRevokeResponseAmino;
                fromAminoMsg(object: _29.MsgRevokeResponseAminoMsg): _29.MsgRevokeResponse;
                toAminoMsg(message: _29.MsgRevokeResponse): _29.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _29.MsgRevokeResponseProtoMsg): _29.MsgRevokeResponse;
                toProto(message: _29.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _29.MsgRevokeResponse): _29.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _28.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryGrantsRequest;
                fromPartial(object: Partial<_28.QueryGrantsRequest>): _28.QueryGrantsRequest;
                fromAmino(object: _28.QueryGrantsRequestAmino): _28.QueryGrantsRequest;
                toAmino(message: _28.QueryGrantsRequest): _28.QueryGrantsRequestAmino;
                fromAminoMsg(object: _28.QueryGrantsRequestAminoMsg): _28.QueryGrantsRequest;
                toAminoMsg(message: _28.QueryGrantsRequest): _28.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _28.QueryGrantsRequestProtoMsg): _28.QueryGrantsRequest;
                toProto(message: _28.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryGrantsRequest): _28.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _28.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryGrantsResponse;
                fromPartial(object: Partial<_28.QueryGrantsResponse>): _28.QueryGrantsResponse;
                fromAmino(object: _28.QueryGrantsResponseAmino): _28.QueryGrantsResponse;
                toAmino(message: _28.QueryGrantsResponse): _28.QueryGrantsResponseAmino;
                fromAminoMsg(object: _28.QueryGrantsResponseAminoMsg): _28.QueryGrantsResponse;
                toAminoMsg(message: _28.QueryGrantsResponse): _28.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _28.QueryGrantsResponseProtoMsg): _28.QueryGrantsResponse;
                toProto(message: _28.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryGrantsResponse): _28.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _28.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_28.QueryGranterGrantsRequest>): _28.QueryGranterGrantsRequest;
                fromAmino(object: _28.QueryGranterGrantsRequestAmino): _28.QueryGranterGrantsRequest;
                toAmino(message: _28.QueryGranterGrantsRequest): _28.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _28.QueryGranterGrantsRequestAminoMsg): _28.QueryGranterGrantsRequest;
                toAminoMsg(message: _28.QueryGranterGrantsRequest): _28.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _28.QueryGranterGrantsRequestProtoMsg): _28.QueryGranterGrantsRequest;
                toProto(message: _28.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryGranterGrantsRequest): _28.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _28.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_28.QueryGranterGrantsResponse>): _28.QueryGranterGrantsResponse;
                fromAmino(object: _28.QueryGranterGrantsResponseAmino): _28.QueryGranterGrantsResponse;
                toAmino(message: _28.QueryGranterGrantsResponse): _28.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _28.QueryGranterGrantsResponseAminoMsg): _28.QueryGranterGrantsResponse;
                toAminoMsg(message: _28.QueryGranterGrantsResponse): _28.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _28.QueryGranterGrantsResponseProtoMsg): _28.QueryGranterGrantsResponse;
                toProto(message: _28.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryGranterGrantsResponse): _28.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _28.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_28.QueryGranteeGrantsRequest>): _28.QueryGranteeGrantsRequest;
                fromAmino(object: _28.QueryGranteeGrantsRequestAmino): _28.QueryGranteeGrantsRequest;
                toAmino(message: _28.QueryGranteeGrantsRequest): _28.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _28.QueryGranteeGrantsRequestAminoMsg): _28.QueryGranteeGrantsRequest;
                toAminoMsg(message: _28.QueryGranteeGrantsRequest): _28.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _28.QueryGranteeGrantsRequestProtoMsg): _28.QueryGranteeGrantsRequest;
                toProto(message: _28.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryGranteeGrantsRequest): _28.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _28.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_28.QueryGranteeGrantsResponse>): _28.QueryGranteeGrantsResponse;
                fromAmino(object: _28.QueryGranteeGrantsResponseAmino): _28.QueryGranteeGrantsResponse;
                toAmino(message: _28.QueryGranteeGrantsResponse): _28.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _28.QueryGranteeGrantsResponseAminoMsg): _28.QueryGranteeGrantsResponse;
                toAminoMsg(message: _28.QueryGranteeGrantsResponse): _28.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _28.QueryGranteeGrantsResponseProtoMsg): _28.QueryGranteeGrantsResponse;
                toProto(message: _28.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryGranteeGrantsResponse): _28.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _27.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.GenesisState;
                fromPartial(object: Partial<_27.GenesisState>): _27.GenesisState;
                fromAmino(object: _27.GenesisStateAmino): _27.GenesisState;
                toAmino(message: _27.GenesisState): _27.GenesisStateAmino;
                fromAminoMsg(object: _27.GenesisStateAminoMsg): _27.GenesisState;
                toAminoMsg(message: _27.GenesisState): _27.GenesisStateAminoMsg;
                fromProtoMsg(message: _27.GenesisStateProtoMsg): _27.GenesisState;
                toProto(message: _27.GenesisState): Uint8Array;
                toProtoMsg(message: _27.GenesisState): _27.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _26.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.EventGrant;
                fromPartial(object: Partial<_26.EventGrant>): _26.EventGrant;
                fromAmino(object: _26.EventGrantAmino): _26.EventGrant;
                toAmino(message: _26.EventGrant): _26.EventGrantAmino;
                fromAminoMsg(object: _26.EventGrantAminoMsg): _26.EventGrant;
                toAminoMsg(message: _26.EventGrant): _26.EventGrantAminoMsg;
                fromProtoMsg(message: _26.EventGrantProtoMsg): _26.EventGrant;
                toProto(message: _26.EventGrant): Uint8Array;
                toProtoMsg(message: _26.EventGrant): _26.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _26.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.EventRevoke;
                fromPartial(object: Partial<_26.EventRevoke>): _26.EventRevoke;
                fromAmino(object: _26.EventRevokeAmino): _26.EventRevoke;
                toAmino(message: _26.EventRevoke): _26.EventRevokeAmino;
                fromAminoMsg(object: _26.EventRevokeAminoMsg): _26.EventRevoke;
                toAminoMsg(message: _26.EventRevoke): _26.EventRevokeAminoMsg;
                fromProtoMsg(message: _26.EventRevokeProtoMsg): _26.EventRevoke;
                toProto(message: _26.EventRevoke): Uint8Array;
                toProtoMsg(message: _26.EventRevoke): _26.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _25.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.GenericAuthorization;
                fromPartial(object: Partial<_25.GenericAuthorization>): _25.GenericAuthorization;
                fromAmino(object: _25.GenericAuthorizationAmino): _25.GenericAuthorization;
                toAmino(message: _25.GenericAuthorization): _25.GenericAuthorizationAmino;
                fromAminoMsg(object: _25.GenericAuthorizationAminoMsg): _25.GenericAuthorization;
                toAminoMsg(message: _25.GenericAuthorization): _25.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _25.GenericAuthorizationProtoMsg): _25.GenericAuthorization;
                toProto(message: _25.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _25.GenericAuthorization): _25.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _25.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.Grant;
                fromPartial(object: Partial<_25.Grant>): _25.Grant;
                fromAmino(object: _25.GrantAmino): _25.Grant;
                toAmino(message: _25.Grant): _25.GrantAmino;
                fromAminoMsg(object: _25.GrantAminoMsg): _25.Grant;
                toAminoMsg(message: _25.Grant): _25.GrantAminoMsg;
                fromProtoMsg(message: _25.GrantProtoMsg): _25.Grant;
                toProto(message: _25.Grant): Uint8Array;
                toProtoMsg(message: _25.Grant): _25.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _25.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.GrantAuthorization;
                fromPartial(object: Partial<_25.GrantAuthorization>): _25.GrantAuthorization;
                fromAmino(object: _25.GrantAuthorizationAmino): _25.GrantAuthorization;
                toAmino(message: _25.GrantAuthorization): _25.GrantAuthorizationAmino;
                fromAminoMsg(object: _25.GrantAuthorizationAminoMsg): _25.GrantAuthorization;
                toAminoMsg(message: _25.GrantAuthorization): _25.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _25.GrantAuthorizationProtoMsg): _25.GrantAuthorization;
                toProto(message: _25.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _25.GrantAuthorization): _25.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _30.SendAuthorization | _80.StakeAuthorization | _25.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _193.MsgClientImpl;
            QueryClientImpl: typeof _179.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                balance(request: _33.QueryBalanceRequest): Promise<_33.QueryBalanceResponse>;
                allBalances(request: _33.QueryAllBalancesRequest): Promise<_33.QueryAllBalancesResponse>;
                spendableBalances(request: _33.QuerySpendableBalancesRequest): Promise<_33.QuerySpendableBalancesResponse>;
                totalSupply(request?: _33.QueryTotalSupplyRequest): Promise<_33.QueryTotalSupplyResponse>;
                supplyOf(request: _33.QuerySupplyOfRequest): Promise<_33.QuerySupplyOfResponse>;
                params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
                denomMetadata(request: _33.QueryDenomMetadataRequest): Promise<_33.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _33.QueryDenomsMetadataRequest): Promise<_33.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _164.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _34.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _34.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _34.MsgSend): {
                        typeUrl: string;
                        value: _34.MsgSend;
                    };
                    multiSend(value: _34.MsgMultiSend): {
                        typeUrl: string;
                        value: _34.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _34.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _34.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _34.MsgSend): {
                        typeUrl: string;
                        value: _34.MsgSend;
                    };
                    multiSend(value: _34.MsgMultiSend): {
                        typeUrl: string;
                        value: _34.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _34.MsgSend) => _34.MsgSendAmino;
                    fromAmino: (object: _34.MsgSendAmino) => _34.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _34.MsgMultiSend) => _34.MsgMultiSendAmino;
                    fromAmino: (object: _34.MsgMultiSendAmino) => _34.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _34.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MsgSend;
                fromPartial(object: Partial<_34.MsgSend>): _34.MsgSend;
                fromAmino(object: _34.MsgSendAmino): _34.MsgSend;
                toAmino(message: _34.MsgSend): _34.MsgSendAmino;
                fromAminoMsg(object: _34.MsgSendAminoMsg): _34.MsgSend;
                toAminoMsg(message: _34.MsgSend): _34.MsgSendAminoMsg;
                fromProtoMsg(message: _34.MsgSendProtoMsg): _34.MsgSend;
                toProto(message: _34.MsgSend): Uint8Array;
                toProtoMsg(message: _34.MsgSend): _34.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _34.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.MsgSendResponse;
                fromPartial(_: Partial<_34.MsgSendResponse>): _34.MsgSendResponse;
                fromAmino(_: _34.MsgSendResponseAmino): _34.MsgSendResponse;
                toAmino(_: _34.MsgSendResponse): _34.MsgSendResponseAmino;
                fromAminoMsg(object: _34.MsgSendResponseAminoMsg): _34.MsgSendResponse;
                toAminoMsg(message: _34.MsgSendResponse): _34.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _34.MsgSendResponseProtoMsg): _34.MsgSendResponse;
                toProto(message: _34.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _34.MsgSendResponse): _34.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _34.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MsgMultiSend;
                fromPartial(object: Partial<_34.MsgMultiSend>): _34.MsgMultiSend;
                fromAmino(object: _34.MsgMultiSendAmino): _34.MsgMultiSend;
                toAmino(message: _34.MsgMultiSend): _34.MsgMultiSendAmino;
                fromAminoMsg(object: _34.MsgMultiSendAminoMsg): _34.MsgMultiSend;
                toAminoMsg(message: _34.MsgMultiSend): _34.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _34.MsgMultiSendProtoMsg): _34.MsgMultiSend;
                toProto(message: _34.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _34.MsgMultiSend): _34.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _34.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.MsgMultiSendResponse;
                fromPartial(_: Partial<_34.MsgMultiSendResponse>): _34.MsgMultiSendResponse;
                fromAmino(_: _34.MsgMultiSendResponseAmino): _34.MsgMultiSendResponse;
                toAmino(_: _34.MsgMultiSendResponse): _34.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _34.MsgMultiSendResponseAminoMsg): _34.MsgMultiSendResponse;
                toAminoMsg(message: _34.MsgMultiSendResponse): _34.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _34.MsgMultiSendResponseProtoMsg): _34.MsgMultiSendResponse;
                toProto(message: _34.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _34.MsgMultiSendResponse): _34.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _33.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryBalanceRequest;
                fromPartial(object: Partial<_33.QueryBalanceRequest>): _33.QueryBalanceRequest;
                fromAmino(object: _33.QueryBalanceRequestAmino): _33.QueryBalanceRequest;
                toAmino(message: _33.QueryBalanceRequest): _33.QueryBalanceRequestAmino;
                fromAminoMsg(object: _33.QueryBalanceRequestAminoMsg): _33.QueryBalanceRequest;
                toAminoMsg(message: _33.QueryBalanceRequest): _33.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _33.QueryBalanceRequestProtoMsg): _33.QueryBalanceRequest;
                toProto(message: _33.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _33.QueryBalanceRequest): _33.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _33.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryBalanceResponse;
                fromPartial(object: Partial<_33.QueryBalanceResponse>): _33.QueryBalanceResponse;
                fromAmino(object: _33.QueryBalanceResponseAmino): _33.QueryBalanceResponse;
                toAmino(message: _33.QueryBalanceResponse): _33.QueryBalanceResponseAmino;
                fromAminoMsg(object: _33.QueryBalanceResponseAminoMsg): _33.QueryBalanceResponse;
                toAminoMsg(message: _33.QueryBalanceResponse): _33.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _33.QueryBalanceResponseProtoMsg): _33.QueryBalanceResponse;
                toProto(message: _33.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _33.QueryBalanceResponse): _33.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _33.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryAllBalancesRequest;
                fromPartial(object: Partial<_33.QueryAllBalancesRequest>): _33.QueryAllBalancesRequest;
                fromAmino(object: _33.QueryAllBalancesRequestAmino): _33.QueryAllBalancesRequest;
                toAmino(message: _33.QueryAllBalancesRequest): _33.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _33.QueryAllBalancesRequestAminoMsg): _33.QueryAllBalancesRequest;
                toAminoMsg(message: _33.QueryAllBalancesRequest): _33.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _33.QueryAllBalancesRequestProtoMsg): _33.QueryAllBalancesRequest;
                toProto(message: _33.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _33.QueryAllBalancesRequest): _33.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _33.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryAllBalancesResponse;
                fromPartial(object: Partial<_33.QueryAllBalancesResponse>): _33.QueryAllBalancesResponse;
                fromAmino(object: _33.QueryAllBalancesResponseAmino): _33.QueryAllBalancesResponse;
                toAmino(message: _33.QueryAllBalancesResponse): _33.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _33.QueryAllBalancesResponseAminoMsg): _33.QueryAllBalancesResponse;
                toAminoMsg(message: _33.QueryAllBalancesResponse): _33.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _33.QueryAllBalancesResponseProtoMsg): _33.QueryAllBalancesResponse;
                toProto(message: _33.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _33.QueryAllBalancesResponse): _33.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _33.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_33.QuerySpendableBalancesRequest>): _33.QuerySpendableBalancesRequest;
                fromAmino(object: _33.QuerySpendableBalancesRequestAmino): _33.QuerySpendableBalancesRequest;
                toAmino(message: _33.QuerySpendableBalancesRequest): _33.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _33.QuerySpendableBalancesRequestAminoMsg): _33.QuerySpendableBalancesRequest;
                toAminoMsg(message: _33.QuerySpendableBalancesRequest): _33.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _33.QuerySpendableBalancesRequestProtoMsg): _33.QuerySpendableBalancesRequest;
                toProto(message: _33.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _33.QuerySpendableBalancesRequest): _33.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _33.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_33.QuerySpendableBalancesResponse>): _33.QuerySpendableBalancesResponse;
                fromAmino(object: _33.QuerySpendableBalancesResponseAmino): _33.QuerySpendableBalancesResponse;
                toAmino(message: _33.QuerySpendableBalancesResponse): _33.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _33.QuerySpendableBalancesResponseAminoMsg): _33.QuerySpendableBalancesResponse;
                toAminoMsg(message: _33.QuerySpendableBalancesResponse): _33.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _33.QuerySpendableBalancesResponseProtoMsg): _33.QuerySpendableBalancesResponse;
                toProto(message: _33.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _33.QuerySpendableBalancesResponse): _33.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _33.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_33.QueryTotalSupplyRequest>): _33.QueryTotalSupplyRequest;
                fromAmino(object: _33.QueryTotalSupplyRequestAmino): _33.QueryTotalSupplyRequest;
                toAmino(message: _33.QueryTotalSupplyRequest): _33.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _33.QueryTotalSupplyRequestAminoMsg): _33.QueryTotalSupplyRequest;
                toAminoMsg(message: _33.QueryTotalSupplyRequest): _33.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _33.QueryTotalSupplyRequestProtoMsg): _33.QueryTotalSupplyRequest;
                toProto(message: _33.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _33.QueryTotalSupplyRequest): _33.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _33.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_33.QueryTotalSupplyResponse>): _33.QueryTotalSupplyResponse;
                fromAmino(object: _33.QueryTotalSupplyResponseAmino): _33.QueryTotalSupplyResponse;
                toAmino(message: _33.QueryTotalSupplyResponse): _33.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _33.QueryTotalSupplyResponseAminoMsg): _33.QueryTotalSupplyResponse;
                toAminoMsg(message: _33.QueryTotalSupplyResponse): _33.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _33.QueryTotalSupplyResponseProtoMsg): _33.QueryTotalSupplyResponse;
                toProto(message: _33.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _33.QueryTotalSupplyResponse): _33.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _33.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QuerySupplyOfRequest;
                fromPartial(object: Partial<_33.QuerySupplyOfRequest>): _33.QuerySupplyOfRequest;
                fromAmino(object: _33.QuerySupplyOfRequestAmino): _33.QuerySupplyOfRequest;
                toAmino(message: _33.QuerySupplyOfRequest): _33.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _33.QuerySupplyOfRequestAminoMsg): _33.QuerySupplyOfRequest;
                toAminoMsg(message: _33.QuerySupplyOfRequest): _33.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _33.QuerySupplyOfRequestProtoMsg): _33.QuerySupplyOfRequest;
                toProto(message: _33.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _33.QuerySupplyOfRequest): _33.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _33.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QuerySupplyOfResponse;
                fromPartial(object: Partial<_33.QuerySupplyOfResponse>): _33.QuerySupplyOfResponse;
                fromAmino(object: _33.QuerySupplyOfResponseAmino): _33.QuerySupplyOfResponse;
                toAmino(message: _33.QuerySupplyOfResponse): _33.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _33.QuerySupplyOfResponseAminoMsg): _33.QuerySupplyOfResponse;
                toAminoMsg(message: _33.QuerySupplyOfResponse): _33.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _33.QuerySupplyOfResponseProtoMsg): _33.QuerySupplyOfResponse;
                toProto(message: _33.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _33.QuerySupplyOfResponse): _33.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _33.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _33.QueryParamsRequest;
                fromPartial(_: Partial<_33.QueryParamsRequest>): _33.QueryParamsRequest;
                fromAmino(_: _33.QueryParamsRequestAmino): _33.QueryParamsRequest;
                toAmino(_: _33.QueryParamsRequest): _33.QueryParamsRequestAmino;
                fromAminoMsg(object: _33.QueryParamsRequestAminoMsg): _33.QueryParamsRequest;
                toAminoMsg(message: _33.QueryParamsRequest): _33.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _33.QueryParamsRequestProtoMsg): _33.QueryParamsRequest;
                toProto(message: _33.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryParamsRequest): _33.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _33.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryParamsResponse;
                fromPartial(object: Partial<_33.QueryParamsResponse>): _33.QueryParamsResponse;
                fromAmino(object: _33.QueryParamsResponseAmino): _33.QueryParamsResponse;
                toAmino(message: _33.QueryParamsResponse): _33.QueryParamsResponseAmino;
                fromAminoMsg(object: _33.QueryParamsResponseAminoMsg): _33.QueryParamsResponse;
                toAminoMsg(message: _33.QueryParamsResponse): _33.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _33.QueryParamsResponseProtoMsg): _33.QueryParamsResponse;
                toProto(message: _33.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryParamsResponse): _33.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _33.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_33.QueryDenomsMetadataRequest>): _33.QueryDenomsMetadataRequest;
                fromAmino(object: _33.QueryDenomsMetadataRequestAmino): _33.QueryDenomsMetadataRequest;
                toAmino(message: _33.QueryDenomsMetadataRequest): _33.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _33.QueryDenomsMetadataRequestAminoMsg): _33.QueryDenomsMetadataRequest;
                toAminoMsg(message: _33.QueryDenomsMetadataRequest): _33.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _33.QueryDenomsMetadataRequestProtoMsg): _33.QueryDenomsMetadataRequest;
                toProto(message: _33.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _33.QueryDenomsMetadataRequest): _33.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _33.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_33.QueryDenomsMetadataResponse>): _33.QueryDenomsMetadataResponse;
                fromAmino(object: _33.QueryDenomsMetadataResponseAmino): _33.QueryDenomsMetadataResponse;
                toAmino(message: _33.QueryDenomsMetadataResponse): _33.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _33.QueryDenomsMetadataResponseAminoMsg): _33.QueryDenomsMetadataResponse;
                toAminoMsg(message: _33.QueryDenomsMetadataResponse): _33.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _33.QueryDenomsMetadataResponseProtoMsg): _33.QueryDenomsMetadataResponse;
                toProto(message: _33.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _33.QueryDenomsMetadataResponse): _33.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _33.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_33.QueryDenomMetadataRequest>): _33.QueryDenomMetadataRequest;
                fromAmino(object: _33.QueryDenomMetadataRequestAmino): _33.QueryDenomMetadataRequest;
                toAmino(message: _33.QueryDenomMetadataRequest): _33.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _33.QueryDenomMetadataRequestAminoMsg): _33.QueryDenomMetadataRequest;
                toAminoMsg(message: _33.QueryDenomMetadataRequest): _33.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _33.QueryDenomMetadataRequestProtoMsg): _33.QueryDenomMetadataRequest;
                toProto(message: _33.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _33.QueryDenomMetadataRequest): _33.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _33.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_33.QueryDenomMetadataResponse>): _33.QueryDenomMetadataResponse;
                fromAmino(object: _33.QueryDenomMetadataResponseAmino): _33.QueryDenomMetadataResponse;
                toAmino(message: _33.QueryDenomMetadataResponse): _33.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _33.QueryDenomMetadataResponseAminoMsg): _33.QueryDenomMetadataResponse;
                toAminoMsg(message: _33.QueryDenomMetadataResponse): _33.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _33.QueryDenomMetadataResponseProtoMsg): _33.QueryDenomMetadataResponse;
                toProto(message: _33.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _33.QueryDenomMetadataResponse): _33.QueryDenomMetadataResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _32.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.GenesisState;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
                fromAmino(object: _32.GenesisStateAmino): _32.GenesisState;
                toAmino(message: _32.GenesisState): _32.GenesisStateAmino;
                fromAminoMsg(object: _32.GenesisStateAminoMsg): _32.GenesisState;
                toAminoMsg(message: _32.GenesisState): _32.GenesisStateAminoMsg;
                fromProtoMsg(message: _32.GenesisStateProtoMsg): _32.GenesisState;
                toProto(message: _32.GenesisState): Uint8Array;
                toProtoMsg(message: _32.GenesisState): _32.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _32.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.Balance;
                fromPartial(object: Partial<_32.Balance>): _32.Balance;
                fromAmino(object: _32.BalanceAmino): _32.Balance;
                toAmino(message: _32.Balance): _32.BalanceAmino;
                fromAminoMsg(object: _32.BalanceAminoMsg): _32.Balance;
                toAminoMsg(message: _32.Balance): _32.BalanceAminoMsg;
                fromProtoMsg(message: _32.BalanceProtoMsg): _32.Balance;
                toProto(message: _32.Balance): Uint8Array;
                toProtoMsg(message: _32.Balance): _32.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _31.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.Params;
                fromPartial(object: Partial<_31.Params>): _31.Params;
                fromAmino(object: _31.ParamsAmino): _31.Params;
                toAmino(message: _31.Params): _31.ParamsAmino;
                fromAminoMsg(object: _31.ParamsAminoMsg): _31.Params;
                toAminoMsg(message: _31.Params): _31.ParamsAminoMsg;
                fromProtoMsg(message: _31.ParamsProtoMsg): _31.Params;
                toProto(message: _31.Params): Uint8Array;
                toProtoMsg(message: _31.Params): _31.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _31.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.SendEnabled;
                fromPartial(object: Partial<_31.SendEnabled>): _31.SendEnabled;
                fromAmino(object: _31.SendEnabledAmino): _31.SendEnabled;
                toAmino(message: _31.SendEnabled): _31.SendEnabledAmino;
                fromAminoMsg(object: _31.SendEnabledAminoMsg): _31.SendEnabled;
                toAminoMsg(message: _31.SendEnabled): _31.SendEnabledAminoMsg;
                fromProtoMsg(message: _31.SendEnabledProtoMsg): _31.SendEnabled;
                toProto(message: _31.SendEnabled): Uint8Array;
                toProtoMsg(message: _31.SendEnabled): _31.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _31.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.Input;
                fromPartial(object: Partial<_31.Input>): _31.Input;
                fromAmino(object: _31.InputAmino): _31.Input;
                toAmino(message: _31.Input): _31.InputAmino;
                fromAminoMsg(object: _31.InputAminoMsg): _31.Input;
                toAminoMsg(message: _31.Input): _31.InputAminoMsg;
                fromProtoMsg(message: _31.InputProtoMsg): _31.Input;
                toProto(message: _31.Input): Uint8Array;
                toProtoMsg(message: _31.Input): _31.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _31.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.Output;
                fromPartial(object: Partial<_31.Output>): _31.Output;
                fromAmino(object: _31.OutputAmino): _31.Output;
                toAmino(message: _31.Output): _31.OutputAmino;
                fromAminoMsg(object: _31.OutputAminoMsg): _31.Output;
                toAminoMsg(message: _31.Output): _31.OutputAminoMsg;
                fromProtoMsg(message: _31.OutputProtoMsg): _31.Output;
                toProto(message: _31.Output): Uint8Array;
                toProtoMsg(message: _31.Output): _31.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _31.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.Supply;
                fromPartial(object: Partial<_31.Supply>): _31.Supply;
                fromAmino(object: _31.SupplyAmino): _31.Supply;
                toAmino(message: _31.Supply): _31.SupplyAmino;
                fromAminoMsg(object: _31.SupplyAminoMsg): _31.Supply;
                toAminoMsg(message: _31.Supply): _31.SupplyAminoMsg;
                fromProtoMsg(message: _31.SupplyProtoMsg): _31.Supply;
                toProto(message: _31.Supply): Uint8Array;
                toProtoMsg(message: _31.Supply): _31.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _31.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.DenomUnit;
                fromPartial(object: Partial<_31.DenomUnit>): _31.DenomUnit;
                fromAmino(object: _31.DenomUnitAmino): _31.DenomUnit;
                toAmino(message: _31.DenomUnit): _31.DenomUnitAmino;
                fromAminoMsg(object: _31.DenomUnitAminoMsg): _31.DenomUnit;
                toAminoMsg(message: _31.DenomUnit): _31.DenomUnitAminoMsg;
                fromProtoMsg(message: _31.DenomUnitProtoMsg): _31.DenomUnit;
                toProto(message: _31.DenomUnit): Uint8Array;
                toProtoMsg(message: _31.DenomUnit): _31.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _31.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.Metadata;
                fromPartial(object: Partial<_31.Metadata>): _31.Metadata;
                fromAmino(object: _31.MetadataAmino): _31.Metadata;
                toAmino(message: _31.Metadata): _31.MetadataAmino;
                fromAminoMsg(object: _31.MetadataAminoMsg): _31.Metadata;
                toAminoMsg(message: _31.Metadata): _31.MetadataAminoMsg;
                fromProtoMsg(message: _31.MetadataProtoMsg): _31.Metadata;
                toProto(message: _31.Metadata): Uint8Array;
                toProtoMsg(message: _31.Metadata): _31.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _30.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.SendAuthorization;
                fromPartial(object: Partial<_30.SendAuthorization>): _30.SendAuthorization;
                fromAmino(object: _30.SendAuthorizationAmino): _30.SendAuthorization;
                toAmino(message: _30.SendAuthorization): _30.SendAuthorizationAmino;
                fromAminoMsg(object: _30.SendAuthorizationAminoMsg): _30.SendAuthorization;
                toAminoMsg(message: _30.SendAuthorization): _30.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _30.SendAuthorizationProtoMsg): _30.SendAuthorization;
                toProto(message: _30.SendAuthorization): Uint8Array;
                toProtoMsg(message: _30.SendAuthorization): _30.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _35.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.TxResponse;
                    fromPartial(object: Partial<_35.TxResponse>): _35.TxResponse;
                    fromAmino(object: _35.TxResponseAmino): _35.TxResponse;
                    toAmino(message: _35.TxResponse): _35.TxResponseAmino;
                    fromAminoMsg(object: _35.TxResponseAminoMsg): _35.TxResponse;
                    toAminoMsg(message: _35.TxResponse): _35.TxResponseAminoMsg;
                    fromProtoMsg(message: _35.TxResponseProtoMsg): _35.TxResponse;
                    toProto(message: _35.TxResponse): Uint8Array;
                    toProtoMsg(message: _35.TxResponse): _35.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _35.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.ABCIMessageLog;
                    fromPartial(object: Partial<_35.ABCIMessageLog>): _35.ABCIMessageLog;
                    fromAmino(object: _35.ABCIMessageLogAmino): _35.ABCIMessageLog;
                    toAmino(message: _35.ABCIMessageLog): _35.ABCIMessageLogAmino;
                    fromAminoMsg(object: _35.ABCIMessageLogAminoMsg): _35.ABCIMessageLog;
                    toAminoMsg(message: _35.ABCIMessageLog): _35.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _35.ABCIMessageLogProtoMsg): _35.ABCIMessageLog;
                    toProto(message: _35.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _35.ABCIMessageLog): _35.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _35.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.StringEvent;
                    fromPartial(object: Partial<_35.StringEvent>): _35.StringEvent;
                    fromAmino(object: _35.StringEventAmino): _35.StringEvent;
                    toAmino(message: _35.StringEvent): _35.StringEventAmino;
                    fromAminoMsg(object: _35.StringEventAminoMsg): _35.StringEvent;
                    toAminoMsg(message: _35.StringEvent): _35.StringEventAminoMsg;
                    fromProtoMsg(message: _35.StringEventProtoMsg): _35.StringEvent;
                    toProto(message: _35.StringEvent): Uint8Array;
                    toProtoMsg(message: _35.StringEvent): _35.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _35.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.Attribute;
                    fromPartial(object: Partial<_35.Attribute>): _35.Attribute;
                    fromAmino(object: _35.AttributeAmino): _35.Attribute;
                    toAmino(message: _35.Attribute): _35.AttributeAmino;
                    fromAminoMsg(object: _35.AttributeAminoMsg): _35.Attribute;
                    toAminoMsg(message: _35.Attribute): _35.AttributeAminoMsg;
                    fromProtoMsg(message: _35.AttributeProtoMsg): _35.Attribute;
                    toProto(message: _35.Attribute): Uint8Array;
                    toProtoMsg(message: _35.Attribute): _35.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _35.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.GasInfo;
                    fromPartial(object: Partial<_35.GasInfo>): _35.GasInfo;
                    fromAmino(object: _35.GasInfoAmino): _35.GasInfo;
                    toAmino(message: _35.GasInfo): _35.GasInfoAmino;
                    fromAminoMsg(object: _35.GasInfoAminoMsg): _35.GasInfo;
                    toAminoMsg(message: _35.GasInfo): _35.GasInfoAminoMsg;
                    fromProtoMsg(message: _35.GasInfoProtoMsg): _35.GasInfo;
                    toProto(message: _35.GasInfo): Uint8Array;
                    toProtoMsg(message: _35.GasInfo): _35.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _35.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.Result;
                    fromPartial(object: Partial<_35.Result>): _35.Result;
                    fromAmino(object: _35.ResultAmino): _35.Result;
                    toAmino(message: _35.Result): _35.ResultAmino;
                    fromAminoMsg(object: _35.ResultAminoMsg): _35.Result;
                    toAminoMsg(message: _35.Result): _35.ResultAminoMsg;
                    fromProtoMsg(message: _35.ResultProtoMsg): _35.Result;
                    toProto(message: _35.Result): Uint8Array;
                    toProtoMsg(message: _35.Result): _35.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _35.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.SimulationResponse;
                    fromPartial(object: Partial<_35.SimulationResponse>): _35.SimulationResponse;
                    fromAmino(object: _35.SimulationResponseAmino): _35.SimulationResponse;
                    toAmino(message: _35.SimulationResponse): _35.SimulationResponseAmino;
                    fromAminoMsg(object: _35.SimulationResponseAminoMsg): _35.SimulationResponse;
                    toAminoMsg(message: _35.SimulationResponse): _35.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _35.SimulationResponseProtoMsg): _35.SimulationResponse;
                    toProto(message: _35.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _35.SimulationResponse): _35.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _35.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.MsgData;
                    fromPartial(object: Partial<_35.MsgData>): _35.MsgData;
                    fromAmino(object: _35.MsgDataAmino): _35.MsgData;
                    toAmino(message: _35.MsgData): _35.MsgDataAmino;
                    fromAminoMsg(object: _35.MsgDataAminoMsg): _35.MsgData;
                    toAminoMsg(message: _35.MsgData): _35.MsgDataAminoMsg;
                    fromProtoMsg(message: _35.MsgDataProtoMsg): _35.MsgData;
                    toProto(message: _35.MsgData): Uint8Array;
                    toProtoMsg(message: _35.MsgData): _35.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _35.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.TxMsgData;
                    fromPartial(object: Partial<_35.TxMsgData>): _35.TxMsgData;
                    fromAmino(object: _35.TxMsgDataAmino): _35.TxMsgData;
                    toAmino(message: _35.TxMsgData): _35.TxMsgDataAmino;
                    fromAminoMsg(object: _35.TxMsgDataAminoMsg): _35.TxMsgData;
                    toAminoMsg(message: _35.TxMsgData): _35.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _35.TxMsgDataProtoMsg): _35.TxMsgData;
                    toProto(message: _35.TxMsgData): Uint8Array;
                    toProtoMsg(message: _35.TxMsgData): _35.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _35.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.SearchTxsResult;
                    fromPartial(object: Partial<_35.SearchTxsResult>): _35.SearchTxsResult;
                    fromAmino(object: _35.SearchTxsResultAmino): _35.SearchTxsResult;
                    toAmino(message: _35.SearchTxsResult): _35.SearchTxsResultAmino;
                    fromAminoMsg(object: _35.SearchTxsResultAminoMsg): _35.SearchTxsResult;
                    toAminoMsg(message: _35.SearchTxsResult): _35.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _35.SearchTxsResultProtoMsg): _35.SearchTxsResult;
                    toProto(message: _35.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _35.SearchTxsResult): _35.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _36.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.Pairs;
                    fromPartial(object: Partial<_36.Pairs>): _36.Pairs;
                    fromAmino(object: _36.PairsAmino): _36.Pairs;
                    toAmino(message: _36.Pairs): _36.PairsAmino;
                    fromAminoMsg(object: _36.PairsAminoMsg): _36.Pairs;
                    toAminoMsg(message: _36.Pairs): _36.PairsAminoMsg;
                    fromProtoMsg(message: _36.PairsProtoMsg): _36.Pairs;
                    toProto(message: _36.Pairs): Uint8Array;
                    toProtoMsg(message: _36.Pairs): _36.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _36.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.Pair;
                    fromPartial(object: Partial<_36.Pair>): _36.Pair;
                    fromAmino(object: _36.PairAmino): _36.Pair;
                    toAmino(message: _36.Pair): _36.PairAmino;
                    fromAminoMsg(object: _36.PairAminoMsg): _36.Pair;
                    toAminoMsg(message: _36.Pair): _36.PairAminoMsg;
                    fromProtoMsg(message: _36.PairProtoMsg): _36.Pair;
                    toProto(message: _36.Pair): Uint8Array;
                    toProtoMsg(message: _36.Pair): _36.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _180.ServiceClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    config(request?: _37.ConfigRequest): Promise<_37.ConfigResponse>;
                };
                LCDQueryClient: typeof _165.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _37.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _37.ConfigRequest;
                    fromPartial(_: Partial<_37.ConfigRequest>): _37.ConfigRequest;
                    fromAmino(_: _37.ConfigRequestAmino): _37.ConfigRequest;
                    toAmino(_: _37.ConfigRequest): _37.ConfigRequestAmino;
                    fromAminoMsg(object: _37.ConfigRequestAminoMsg): _37.ConfigRequest;
                    toAminoMsg(message: _37.ConfigRequest): _37.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _37.ConfigRequestProtoMsg): _37.ConfigRequest;
                    toProto(message: _37.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _37.ConfigRequest): _37.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _37.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.ConfigResponse;
                    fromPartial(object: Partial<_37.ConfigResponse>): _37.ConfigResponse;
                    fromAmino(object: _37.ConfigResponseAmino): _37.ConfigResponse;
                    toAmino(message: _37.ConfigResponse): _37.ConfigResponseAmino;
                    fromAminoMsg(object: _37.ConfigResponseAminoMsg): _37.ConfigResponse;
                    toAminoMsg(message: _37.ConfigResponse): _37.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _37.ConfigResponseProtoMsg): _37.ConfigResponse;
                    toProto(message: _37.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _37.ConfigResponse): _37.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _38.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.PageRequest;
                    fromPartial(object: Partial<_38.PageRequest>): _38.PageRequest;
                    fromAmino(object: _38.PageRequestAmino): _38.PageRequest;
                    toAmino(message: _38.PageRequest): _38.PageRequestAmino;
                    fromAminoMsg(object: _38.PageRequestAminoMsg): _38.PageRequest;
                    toAminoMsg(message: _38.PageRequest): _38.PageRequestAminoMsg;
                    fromProtoMsg(message: _38.PageRequestProtoMsg): _38.PageRequest;
                    toProto(message: _38.PageRequest): Uint8Array;
                    toProtoMsg(message: _38.PageRequest): _38.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _38.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.PageResponse;
                    fromPartial(object: Partial<_38.PageResponse>): _38.PageResponse;
                    fromAmino(object: _38.PageResponseAmino): _38.PageResponse;
                    toAmino(message: _38.PageResponse): _38.PageResponseAmino;
                    fromAminoMsg(object: _38.PageResponseAminoMsg): _38.PageResponse;
                    toAminoMsg(message: _38.PageResponse): _38.PageResponseAminoMsg;
                    fromProtoMsg(message: _38.PageResponseProtoMsg): _38.PageResponse;
                    toProto(message: _38.PageResponse): Uint8Array;
                    toProtoMsg(message: _38.PageResponse): _38.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _39.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _39.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_39.ListAllInterfacesRequest>): _39.ListAllInterfacesRequest;
                    fromAmino(_: _39.ListAllInterfacesRequestAmino): _39.ListAllInterfacesRequest;
                    toAmino(_: _39.ListAllInterfacesRequest): _39.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _39.ListAllInterfacesRequestAminoMsg): _39.ListAllInterfacesRequest;
                    toAminoMsg(message: _39.ListAllInterfacesRequest): _39.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _39.ListAllInterfacesRequestProtoMsg): _39.ListAllInterfacesRequest;
                    toProto(message: _39.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _39.ListAllInterfacesRequest): _39.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _39.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_39.ListAllInterfacesResponse>): _39.ListAllInterfacesResponse;
                    fromAmino(object: _39.ListAllInterfacesResponseAmino): _39.ListAllInterfacesResponse;
                    toAmino(message: _39.ListAllInterfacesResponse): _39.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _39.ListAllInterfacesResponseAminoMsg): _39.ListAllInterfacesResponse;
                    toAminoMsg(message: _39.ListAllInterfacesResponse): _39.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _39.ListAllInterfacesResponseProtoMsg): _39.ListAllInterfacesResponse;
                    toProto(message: _39.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _39.ListAllInterfacesResponse): _39.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _39.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.ListImplementationsRequest;
                    fromPartial(object: Partial<_39.ListImplementationsRequest>): _39.ListImplementationsRequest;
                    fromAmino(object: _39.ListImplementationsRequestAmino): _39.ListImplementationsRequest;
                    toAmino(message: _39.ListImplementationsRequest): _39.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _39.ListImplementationsRequestAminoMsg): _39.ListImplementationsRequest;
                    toAminoMsg(message: _39.ListImplementationsRequest): _39.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _39.ListImplementationsRequestProtoMsg): _39.ListImplementationsRequest;
                    toProto(message: _39.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _39.ListImplementationsRequest): _39.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _39.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.ListImplementationsResponse;
                    fromPartial(object: Partial<_39.ListImplementationsResponse>): _39.ListImplementationsResponse;
                    fromAmino(object: _39.ListImplementationsResponseAmino): _39.ListImplementationsResponse;
                    toAmino(message: _39.ListImplementationsResponse): _39.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _39.ListImplementationsResponseAminoMsg): _39.ListImplementationsResponse;
                    toAminoMsg(message: _39.ListImplementationsResponse): _39.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _39.ListImplementationsResponseProtoMsg): _39.ListImplementationsResponse;
                    toProto(message: _39.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _39.ListImplementationsResponse): _39.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _40.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.AppDescriptor;
                    fromPartial(object: Partial<_40.AppDescriptor>): _40.AppDescriptor;
                    fromAmino(object: _40.AppDescriptorAmino): _40.AppDescriptor;
                    toAmino(message: _40.AppDescriptor): _40.AppDescriptorAmino;
                    fromAminoMsg(object: _40.AppDescriptorAminoMsg): _40.AppDescriptor;
                    toAminoMsg(message: _40.AppDescriptor): _40.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _40.AppDescriptorProtoMsg): _40.AppDescriptor;
                    toProto(message: _40.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _40.AppDescriptor): _40.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _40.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.TxDescriptor;
                    fromPartial(object: Partial<_40.TxDescriptor>): _40.TxDescriptor;
                    fromAmino(object: _40.TxDescriptorAmino): _40.TxDescriptor;
                    toAmino(message: _40.TxDescriptor): _40.TxDescriptorAmino;
                    fromAminoMsg(object: _40.TxDescriptorAminoMsg): _40.TxDescriptor;
                    toAminoMsg(message: _40.TxDescriptor): _40.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _40.TxDescriptorProtoMsg): _40.TxDescriptor;
                    toProto(message: _40.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _40.TxDescriptor): _40.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _40.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.AuthnDescriptor;
                    fromPartial(object: Partial<_40.AuthnDescriptor>): _40.AuthnDescriptor;
                    fromAmino(object: _40.AuthnDescriptorAmino): _40.AuthnDescriptor;
                    toAmino(message: _40.AuthnDescriptor): _40.AuthnDescriptorAmino;
                    fromAminoMsg(object: _40.AuthnDescriptorAminoMsg): _40.AuthnDescriptor;
                    toAminoMsg(message: _40.AuthnDescriptor): _40.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _40.AuthnDescriptorProtoMsg): _40.AuthnDescriptor;
                    toProto(message: _40.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _40.AuthnDescriptor): _40.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _40.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.SigningModeDescriptor;
                    fromPartial(object: Partial<_40.SigningModeDescriptor>): _40.SigningModeDescriptor;
                    fromAmino(object: _40.SigningModeDescriptorAmino): _40.SigningModeDescriptor;
                    toAmino(message: _40.SigningModeDescriptor): _40.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _40.SigningModeDescriptorAminoMsg): _40.SigningModeDescriptor;
                    toAminoMsg(message: _40.SigningModeDescriptor): _40.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _40.SigningModeDescriptorProtoMsg): _40.SigningModeDescriptor;
                    toProto(message: _40.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _40.SigningModeDescriptor): _40.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _40.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.ChainDescriptor;
                    fromPartial(object: Partial<_40.ChainDescriptor>): _40.ChainDescriptor;
                    fromAmino(object: _40.ChainDescriptorAmino): _40.ChainDescriptor;
                    toAmino(message: _40.ChainDescriptor): _40.ChainDescriptorAmino;
                    fromAminoMsg(object: _40.ChainDescriptorAminoMsg): _40.ChainDescriptor;
                    toAminoMsg(message: _40.ChainDescriptor): _40.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _40.ChainDescriptorProtoMsg): _40.ChainDescriptor;
                    toProto(message: _40.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _40.ChainDescriptor): _40.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _40.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.CodecDescriptor;
                    fromPartial(object: Partial<_40.CodecDescriptor>): _40.CodecDescriptor;
                    fromAmino(object: _40.CodecDescriptorAmino): _40.CodecDescriptor;
                    toAmino(message: _40.CodecDescriptor): _40.CodecDescriptorAmino;
                    fromAminoMsg(object: _40.CodecDescriptorAminoMsg): _40.CodecDescriptor;
                    toAminoMsg(message: _40.CodecDescriptor): _40.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _40.CodecDescriptorProtoMsg): _40.CodecDescriptor;
                    toProto(message: _40.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _40.CodecDescriptor): _40.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _40.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.InterfaceDescriptor;
                    fromPartial(object: Partial<_40.InterfaceDescriptor>): _40.InterfaceDescriptor;
                    fromAmino(object: _40.InterfaceDescriptorAmino): _40.InterfaceDescriptor;
                    toAmino(message: _40.InterfaceDescriptor): _40.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _40.InterfaceDescriptorAminoMsg): _40.InterfaceDescriptor;
                    toAminoMsg(message: _40.InterfaceDescriptor): _40.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _40.InterfaceDescriptorProtoMsg): _40.InterfaceDescriptor;
                    toProto(message: _40.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _40.InterfaceDescriptor): _40.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _40.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_40.InterfaceImplementerDescriptor>): _40.InterfaceImplementerDescriptor;
                    fromAmino(object: _40.InterfaceImplementerDescriptorAmino): _40.InterfaceImplementerDescriptor;
                    toAmino(message: _40.InterfaceImplementerDescriptor): _40.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _40.InterfaceImplementerDescriptorAminoMsg): _40.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _40.InterfaceImplementerDescriptor): _40.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _40.InterfaceImplementerDescriptorProtoMsg): _40.InterfaceImplementerDescriptor;
                    toProto(message: _40.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _40.InterfaceImplementerDescriptor): _40.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _40.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_40.InterfaceAcceptingMessageDescriptor>): _40.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _40.InterfaceAcceptingMessageDescriptorAmino): _40.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _40.InterfaceAcceptingMessageDescriptor): _40.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _40.InterfaceAcceptingMessageDescriptorAminoMsg): _40.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _40.InterfaceAcceptingMessageDescriptor): _40.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _40.InterfaceAcceptingMessageDescriptorProtoMsg): _40.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _40.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _40.InterfaceAcceptingMessageDescriptor): _40.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _40.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.ConfigurationDescriptor;
                    fromPartial(object: Partial<_40.ConfigurationDescriptor>): _40.ConfigurationDescriptor;
                    fromAmino(object: _40.ConfigurationDescriptorAmino): _40.ConfigurationDescriptor;
                    toAmino(message: _40.ConfigurationDescriptor): _40.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _40.ConfigurationDescriptorAminoMsg): _40.ConfigurationDescriptor;
                    toAminoMsg(message: _40.ConfigurationDescriptor): _40.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _40.ConfigurationDescriptorProtoMsg): _40.ConfigurationDescriptor;
                    toProto(message: _40.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _40.ConfigurationDescriptor): _40.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _40.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.MsgDescriptor;
                    fromPartial(object: Partial<_40.MsgDescriptor>): _40.MsgDescriptor;
                    fromAmino(object: _40.MsgDescriptorAmino): _40.MsgDescriptor;
                    toAmino(message: _40.MsgDescriptor): _40.MsgDescriptorAmino;
                    fromAminoMsg(object: _40.MsgDescriptorAminoMsg): _40.MsgDescriptor;
                    toAminoMsg(message: _40.MsgDescriptor): _40.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _40.MsgDescriptorProtoMsg): _40.MsgDescriptor;
                    toProto(message: _40.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _40.MsgDescriptor): _40.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _40.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _40.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_40.GetAuthnDescriptorRequest>): _40.GetAuthnDescriptorRequest;
                    fromAmino(_: _40.GetAuthnDescriptorRequestAmino): _40.GetAuthnDescriptorRequest;
                    toAmino(_: _40.GetAuthnDescriptorRequest): _40.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _40.GetAuthnDescriptorRequestAminoMsg): _40.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _40.GetAuthnDescriptorRequest): _40.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _40.GetAuthnDescriptorRequestProtoMsg): _40.GetAuthnDescriptorRequest;
                    toProto(message: _40.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _40.GetAuthnDescriptorRequest): _40.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _40.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_40.GetAuthnDescriptorResponse>): _40.GetAuthnDescriptorResponse;
                    fromAmino(object: _40.GetAuthnDescriptorResponseAmino): _40.GetAuthnDescriptorResponse;
                    toAmino(message: _40.GetAuthnDescriptorResponse): _40.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _40.GetAuthnDescriptorResponseAminoMsg): _40.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _40.GetAuthnDescriptorResponse): _40.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _40.GetAuthnDescriptorResponseProtoMsg): _40.GetAuthnDescriptorResponse;
                    toProto(message: _40.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _40.GetAuthnDescriptorResponse): _40.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _40.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _40.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_40.GetChainDescriptorRequest>): _40.GetChainDescriptorRequest;
                    fromAmino(_: _40.GetChainDescriptorRequestAmino): _40.GetChainDescriptorRequest;
                    toAmino(_: _40.GetChainDescriptorRequest): _40.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _40.GetChainDescriptorRequestAminoMsg): _40.GetChainDescriptorRequest;
                    toAminoMsg(message: _40.GetChainDescriptorRequest): _40.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _40.GetChainDescriptorRequestProtoMsg): _40.GetChainDescriptorRequest;
                    toProto(message: _40.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _40.GetChainDescriptorRequest): _40.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _40.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_40.GetChainDescriptorResponse>): _40.GetChainDescriptorResponse;
                    fromAmino(object: _40.GetChainDescriptorResponseAmino): _40.GetChainDescriptorResponse;
                    toAmino(message: _40.GetChainDescriptorResponse): _40.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _40.GetChainDescriptorResponseAminoMsg): _40.GetChainDescriptorResponse;
                    toAminoMsg(message: _40.GetChainDescriptorResponse): _40.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _40.GetChainDescriptorResponseProtoMsg): _40.GetChainDescriptorResponse;
                    toProto(message: _40.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _40.GetChainDescriptorResponse): _40.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _40.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _40.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_40.GetCodecDescriptorRequest>): _40.GetCodecDescriptorRequest;
                    fromAmino(_: _40.GetCodecDescriptorRequestAmino): _40.GetCodecDescriptorRequest;
                    toAmino(_: _40.GetCodecDescriptorRequest): _40.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _40.GetCodecDescriptorRequestAminoMsg): _40.GetCodecDescriptorRequest;
                    toAminoMsg(message: _40.GetCodecDescriptorRequest): _40.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _40.GetCodecDescriptorRequestProtoMsg): _40.GetCodecDescriptorRequest;
                    toProto(message: _40.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _40.GetCodecDescriptorRequest): _40.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _40.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_40.GetCodecDescriptorResponse>): _40.GetCodecDescriptorResponse;
                    fromAmino(object: _40.GetCodecDescriptorResponseAmino): _40.GetCodecDescriptorResponse;
                    toAmino(message: _40.GetCodecDescriptorResponse): _40.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _40.GetCodecDescriptorResponseAminoMsg): _40.GetCodecDescriptorResponse;
                    toAminoMsg(message: _40.GetCodecDescriptorResponse): _40.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _40.GetCodecDescriptorResponseProtoMsg): _40.GetCodecDescriptorResponse;
                    toProto(message: _40.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _40.GetCodecDescriptorResponse): _40.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _40.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _40.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_40.GetConfigurationDescriptorRequest>): _40.GetConfigurationDescriptorRequest;
                    fromAmino(_: _40.GetConfigurationDescriptorRequestAmino): _40.GetConfigurationDescriptorRequest;
                    toAmino(_: _40.GetConfigurationDescriptorRequest): _40.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _40.GetConfigurationDescriptorRequestAminoMsg): _40.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _40.GetConfigurationDescriptorRequest): _40.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _40.GetConfigurationDescriptorRequestProtoMsg): _40.GetConfigurationDescriptorRequest;
                    toProto(message: _40.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _40.GetConfigurationDescriptorRequest): _40.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _40.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_40.GetConfigurationDescriptorResponse>): _40.GetConfigurationDescriptorResponse;
                    fromAmino(object: _40.GetConfigurationDescriptorResponseAmino): _40.GetConfigurationDescriptorResponse;
                    toAmino(message: _40.GetConfigurationDescriptorResponse): _40.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _40.GetConfigurationDescriptorResponseAminoMsg): _40.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _40.GetConfigurationDescriptorResponse): _40.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _40.GetConfigurationDescriptorResponseProtoMsg): _40.GetConfigurationDescriptorResponse;
                    toProto(message: _40.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _40.GetConfigurationDescriptorResponse): _40.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _40.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _40.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_40.GetQueryServicesDescriptorRequest>): _40.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _40.GetQueryServicesDescriptorRequestAmino): _40.GetQueryServicesDescriptorRequest;
                    toAmino(_: _40.GetQueryServicesDescriptorRequest): _40.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _40.GetQueryServicesDescriptorRequestAminoMsg): _40.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _40.GetQueryServicesDescriptorRequest): _40.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _40.GetQueryServicesDescriptorRequestProtoMsg): _40.GetQueryServicesDescriptorRequest;
                    toProto(message: _40.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _40.GetQueryServicesDescriptorRequest): _40.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _40.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_40.GetQueryServicesDescriptorResponse>): _40.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _40.GetQueryServicesDescriptorResponseAmino): _40.GetQueryServicesDescriptorResponse;
                    toAmino(message: _40.GetQueryServicesDescriptorResponse): _40.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _40.GetQueryServicesDescriptorResponseAminoMsg): _40.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _40.GetQueryServicesDescriptorResponse): _40.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _40.GetQueryServicesDescriptorResponseProtoMsg): _40.GetQueryServicesDescriptorResponse;
                    toProto(message: _40.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _40.GetQueryServicesDescriptorResponse): _40.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _40.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _40.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_40.GetTxDescriptorRequest>): _40.GetTxDescriptorRequest;
                    fromAmino(_: _40.GetTxDescriptorRequestAmino): _40.GetTxDescriptorRequest;
                    toAmino(_: _40.GetTxDescriptorRequest): _40.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _40.GetTxDescriptorRequestAminoMsg): _40.GetTxDescriptorRequest;
                    toAminoMsg(message: _40.GetTxDescriptorRequest): _40.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _40.GetTxDescriptorRequestProtoMsg): _40.GetTxDescriptorRequest;
                    toProto(message: _40.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _40.GetTxDescriptorRequest): _40.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _40.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_40.GetTxDescriptorResponse>): _40.GetTxDescriptorResponse;
                    fromAmino(object: _40.GetTxDescriptorResponseAmino): _40.GetTxDescriptorResponse;
                    toAmino(message: _40.GetTxDescriptorResponse): _40.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _40.GetTxDescriptorResponseAminoMsg): _40.GetTxDescriptorResponse;
                    toAminoMsg(message: _40.GetTxDescriptorResponse): _40.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _40.GetTxDescriptorResponseProtoMsg): _40.GetTxDescriptorResponse;
                    toProto(message: _40.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _40.GetTxDescriptorResponse): _40.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _40.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.QueryServicesDescriptor;
                    fromPartial(object: Partial<_40.QueryServicesDescriptor>): _40.QueryServicesDescriptor;
                    fromAmino(object: _40.QueryServicesDescriptorAmino): _40.QueryServicesDescriptor;
                    toAmino(message: _40.QueryServicesDescriptor): _40.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _40.QueryServicesDescriptorAminoMsg): _40.QueryServicesDescriptor;
                    toAminoMsg(message: _40.QueryServicesDescriptor): _40.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _40.QueryServicesDescriptorProtoMsg): _40.QueryServicesDescriptor;
                    toProto(message: _40.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _40.QueryServicesDescriptor): _40.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _40.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.QueryServiceDescriptor;
                    fromPartial(object: Partial<_40.QueryServiceDescriptor>): _40.QueryServiceDescriptor;
                    fromAmino(object: _40.QueryServiceDescriptorAmino): _40.QueryServiceDescriptor;
                    toAmino(message: _40.QueryServiceDescriptor): _40.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _40.QueryServiceDescriptorAminoMsg): _40.QueryServiceDescriptor;
                    toAminoMsg(message: _40.QueryServiceDescriptor): _40.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _40.QueryServiceDescriptorProtoMsg): _40.QueryServiceDescriptor;
                    toProto(message: _40.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _40.QueryServiceDescriptor): _40.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _40.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.QueryMethodDescriptor;
                    fromPartial(object: Partial<_40.QueryMethodDescriptor>): _40.QueryMethodDescriptor;
                    fromAmino(object: _40.QueryMethodDescriptorAmino): _40.QueryMethodDescriptor;
                    toAmino(message: _40.QueryMethodDescriptor): _40.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _40.QueryMethodDescriptorAminoMsg): _40.QueryMethodDescriptor;
                    toAminoMsg(message: _40.QueryMethodDescriptor): _40.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _40.QueryMethodDescriptorProtoMsg): _40.QueryMethodDescriptor;
                    toProto(message: _40.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _40.QueryMethodDescriptor): _40.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _41.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.Snapshot;
                    fromPartial(object: Partial<_41.Snapshot>): _41.Snapshot;
                    fromAmino(object: _41.SnapshotAmino): _41.Snapshot;
                    toAmino(message: _41.Snapshot): _41.SnapshotAmino;
                    fromAminoMsg(object: _41.SnapshotAminoMsg): _41.Snapshot;
                    toAminoMsg(message: _41.Snapshot): _41.SnapshotAminoMsg;
                    fromProtoMsg(message: _41.SnapshotProtoMsg): _41.Snapshot;
                    toProto(message: _41.Snapshot): Uint8Array;
                    toProtoMsg(message: _41.Snapshot): _41.SnapshotProtoMsg;
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
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _41.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.SnapshotItem;
                    fromPartial(object: Partial<_41.SnapshotItem>): _41.SnapshotItem;
                    fromAmino(object: _41.SnapshotItemAmino): _41.SnapshotItem;
                    toAmino(message: _41.SnapshotItem): _41.SnapshotItemAmino;
                    fromAminoMsg(object: _41.SnapshotItemAminoMsg): _41.SnapshotItem;
                    toAminoMsg(message: _41.SnapshotItem): _41.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _41.SnapshotItemProtoMsg): _41.SnapshotItem;
                    toProto(message: _41.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _41.SnapshotItem): _41.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _41.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.SnapshotStoreItem;
                    fromPartial(object: Partial<_41.SnapshotStoreItem>): _41.SnapshotStoreItem;
                    fromAmino(object: _41.SnapshotStoreItemAmino): _41.SnapshotStoreItem;
                    toAmino(message: _41.SnapshotStoreItem): _41.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _41.SnapshotStoreItemAminoMsg): _41.SnapshotStoreItem;
                    toAminoMsg(message: _41.SnapshotStoreItem): _41.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _41.SnapshotStoreItemProtoMsg): _41.SnapshotStoreItem;
                    toProto(message: _41.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _41.SnapshotStoreItem): _41.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _41.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.SnapshotIAVLItem;
                    fromPartial(object: Partial<_41.SnapshotIAVLItem>): _41.SnapshotIAVLItem;
                    fromAmino(object: _41.SnapshotIAVLItemAmino): _41.SnapshotIAVLItem;
                    toAmino(message: _41.SnapshotIAVLItem): _41.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _41.SnapshotIAVLItemAminoMsg): _41.SnapshotIAVLItem;
                    toAminoMsg(message: _41.SnapshotIAVLItem): _41.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _41.SnapshotIAVLItemProtoMsg): _41.SnapshotIAVLItem;
                    toProto(message: _41.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _41.SnapshotIAVLItem): _41.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _41.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_41.SnapshotExtensionMeta>): _41.SnapshotExtensionMeta;
                    fromAmino(object: _41.SnapshotExtensionMetaAmino): _41.SnapshotExtensionMeta;
                    toAmino(message: _41.SnapshotExtensionMeta): _41.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _41.SnapshotExtensionMetaAminoMsg): _41.SnapshotExtensionMeta;
                    toAminoMsg(message: _41.SnapshotExtensionMeta): _41.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _41.SnapshotExtensionMetaProtoMsg): _41.SnapshotExtensionMeta;
                    toProto(message: _41.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _41.SnapshotExtensionMeta): _41.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _41.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_41.SnapshotExtensionPayload>): _41.SnapshotExtensionPayload;
                    fromAmino(object: _41.SnapshotExtensionPayloadAmino): _41.SnapshotExtensionPayload;
                    toAmino(message: _41.SnapshotExtensionPayload): _41.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _41.SnapshotExtensionPayloadAminoMsg): _41.SnapshotExtensionPayload;
                    toAminoMsg(message: _41.SnapshotExtensionPayload): _41.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _41.SnapshotExtensionPayloadProtoMsg): _41.SnapshotExtensionPayload;
                    toProto(message: _41.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _41.SnapshotExtensionPayload): _41.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _43.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.StoreKVPair;
                    fromPartial(object: Partial<_43.StoreKVPair>): _43.StoreKVPair;
                    fromAmino(object: _43.StoreKVPairAmino): _43.StoreKVPair;
                    toAmino(message: _43.StoreKVPair): _43.StoreKVPairAmino;
                    fromAminoMsg(object: _43.StoreKVPairAminoMsg): _43.StoreKVPair;
                    toAminoMsg(message: _43.StoreKVPair): _43.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _43.StoreKVPairProtoMsg): _43.StoreKVPair;
                    toProto(message: _43.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _43.StoreKVPair): _43.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _43.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.BlockMetadata;
                    fromPartial(object: Partial<_43.BlockMetadata>): _43.BlockMetadata;
                    fromAmino(object: _43.BlockMetadataAmino): _43.BlockMetadata;
                    toAmino(message: _43.BlockMetadata): _43.BlockMetadataAmino;
                    fromAminoMsg(object: _43.BlockMetadataAminoMsg): _43.BlockMetadata;
                    toAminoMsg(message: _43.BlockMetadata): _43.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _43.BlockMetadataProtoMsg): _43.BlockMetadata;
                    toProto(message: _43.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _43.BlockMetadata): _43.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _43.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_43.BlockMetadata_DeliverTx>): _43.BlockMetadata_DeliverTx;
                    fromAmino(object: _43.BlockMetadata_DeliverTxAmino): _43.BlockMetadata_DeliverTx;
                    toAmino(message: _43.BlockMetadata_DeliverTx): _43.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _43.BlockMetadata_DeliverTxAminoMsg): _43.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _43.BlockMetadata_DeliverTx): _43.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _43.BlockMetadata_DeliverTxProtoMsg): _43.BlockMetadata_DeliverTx;
                    toProto(message: _43.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _43.BlockMetadata_DeliverTx): _43.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _42.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.CommitInfo;
                    fromPartial(object: Partial<_42.CommitInfo>): _42.CommitInfo;
                    fromAmino(object: _42.CommitInfoAmino): _42.CommitInfo;
                    toAmino(message: _42.CommitInfo): _42.CommitInfoAmino;
                    fromAminoMsg(object: _42.CommitInfoAminoMsg): _42.CommitInfo;
                    toAminoMsg(message: _42.CommitInfo): _42.CommitInfoAminoMsg;
                    fromProtoMsg(message: _42.CommitInfoProtoMsg): _42.CommitInfo;
                    toProto(message: _42.CommitInfo): Uint8Array;
                    toProtoMsg(message: _42.CommitInfo): _42.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _42.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.StoreInfo;
                    fromPartial(object: Partial<_42.StoreInfo>): _42.StoreInfo;
                    fromAmino(object: _42.StoreInfoAmino): _42.StoreInfo;
                    toAmino(message: _42.StoreInfo): _42.StoreInfoAmino;
                    fromAminoMsg(object: _42.StoreInfoAminoMsg): _42.StoreInfo;
                    toAminoMsg(message: _42.StoreInfo): _42.StoreInfoAminoMsg;
                    fromProtoMsg(message: _42.StoreInfoProtoMsg): _42.StoreInfo;
                    toProto(message: _42.StoreInfo): Uint8Array;
                    toProtoMsg(message: _42.StoreInfo): _42.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _42.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.CommitID;
                    fromPartial(object: Partial<_42.CommitID>): _42.CommitID;
                    fromAmino(object: _42.CommitIDAmino): _42.CommitID;
                    toAmino(message: _42.CommitID): _42.CommitIDAmino;
                    fromAminoMsg(object: _42.CommitIDAminoMsg): _42.CommitID;
                    toAminoMsg(message: _42.CommitID): _42.CommitIDAminoMsg;
                    fromProtoMsg(message: _42.CommitIDProtoMsg): _42.CommitID;
                    toProto(message: _42.CommitID): Uint8Array;
                    toProtoMsg(message: _42.CommitID): _42.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _181.ServiceClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    getNodeInfo(request?: _44.GetNodeInfoRequest): Promise<_44.GetNodeInfoResponse>;
                    getSyncing(request?: _44.GetSyncingRequest): Promise<_44.GetSyncingResponse>;
                    getLatestBlock(request?: _44.GetLatestBlockRequest): Promise<_44.GetLatestBlockResponse>;
                    getBlockByHeight(request: _44.GetBlockByHeightRequest): Promise<_44.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _44.GetLatestValidatorSetRequest): Promise<_44.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _44.GetValidatorSetByHeightRequest): Promise<_44.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _166.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _44.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_44.GetValidatorSetByHeightRequest>): _44.GetValidatorSetByHeightRequest;
                    fromAmino(object: _44.GetValidatorSetByHeightRequestAmino): _44.GetValidatorSetByHeightRequest;
                    toAmino(message: _44.GetValidatorSetByHeightRequest): _44.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _44.GetValidatorSetByHeightRequestAminoMsg): _44.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _44.GetValidatorSetByHeightRequest): _44.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _44.GetValidatorSetByHeightRequestProtoMsg): _44.GetValidatorSetByHeightRequest;
                    toProto(message: _44.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _44.GetValidatorSetByHeightRequest): _44.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _44.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_44.GetValidatorSetByHeightResponse>): _44.GetValidatorSetByHeightResponse;
                    fromAmino(object: _44.GetValidatorSetByHeightResponseAmino): _44.GetValidatorSetByHeightResponse;
                    toAmino(message: _44.GetValidatorSetByHeightResponse): _44.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _44.GetValidatorSetByHeightResponseAminoMsg): _44.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _44.GetValidatorSetByHeightResponse): _44.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _44.GetValidatorSetByHeightResponseProtoMsg): _44.GetValidatorSetByHeightResponse;
                    toProto(message: _44.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _44.GetValidatorSetByHeightResponse): _44.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _44.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_44.GetLatestValidatorSetRequest>): _44.GetLatestValidatorSetRequest;
                    fromAmino(object: _44.GetLatestValidatorSetRequestAmino): _44.GetLatestValidatorSetRequest;
                    toAmino(message: _44.GetLatestValidatorSetRequest): _44.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _44.GetLatestValidatorSetRequestAminoMsg): _44.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _44.GetLatestValidatorSetRequest): _44.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _44.GetLatestValidatorSetRequestProtoMsg): _44.GetLatestValidatorSetRequest;
                    toProto(message: _44.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _44.GetLatestValidatorSetRequest): _44.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _44.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_44.GetLatestValidatorSetResponse>): _44.GetLatestValidatorSetResponse;
                    fromAmino(object: _44.GetLatestValidatorSetResponseAmino): _44.GetLatestValidatorSetResponse;
                    toAmino(message: _44.GetLatestValidatorSetResponse): _44.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _44.GetLatestValidatorSetResponseAminoMsg): _44.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _44.GetLatestValidatorSetResponse): _44.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _44.GetLatestValidatorSetResponseProtoMsg): _44.GetLatestValidatorSetResponse;
                    toProto(message: _44.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _44.GetLatestValidatorSetResponse): _44.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _44.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.Validator;
                    fromPartial(object: Partial<_44.Validator>): _44.Validator;
                    fromAmino(object: _44.ValidatorAmino): _44.Validator;
                    toAmino(message: _44.Validator): _44.ValidatorAmino;
                    fromAminoMsg(object: _44.ValidatorAminoMsg): _44.Validator;
                    toAminoMsg(message: _44.Validator): _44.ValidatorAminoMsg;
                    fromProtoMsg(message: _44.ValidatorProtoMsg): _44.Validator;
                    toProto(message: _44.Validator): Uint8Array;
                    toProtoMsg(message: _44.Validator): _44.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _44.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_44.GetBlockByHeightRequest>): _44.GetBlockByHeightRequest;
                    fromAmino(object: _44.GetBlockByHeightRequestAmino): _44.GetBlockByHeightRequest;
                    toAmino(message: _44.GetBlockByHeightRequest): _44.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _44.GetBlockByHeightRequestAminoMsg): _44.GetBlockByHeightRequest;
                    toAminoMsg(message: _44.GetBlockByHeightRequest): _44.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _44.GetBlockByHeightRequestProtoMsg): _44.GetBlockByHeightRequest;
                    toProto(message: _44.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _44.GetBlockByHeightRequest): _44.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _44.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_44.GetBlockByHeightResponse>): _44.GetBlockByHeightResponse;
                    fromAmino(object: _44.GetBlockByHeightResponseAmino): _44.GetBlockByHeightResponse;
                    toAmino(message: _44.GetBlockByHeightResponse): _44.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _44.GetBlockByHeightResponseAminoMsg): _44.GetBlockByHeightResponse;
                    toAminoMsg(message: _44.GetBlockByHeightResponse): _44.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _44.GetBlockByHeightResponseProtoMsg): _44.GetBlockByHeightResponse;
                    toProto(message: _44.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _44.GetBlockByHeightResponse): _44.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _44.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _44.GetLatestBlockRequest;
                    fromPartial(_: Partial<_44.GetLatestBlockRequest>): _44.GetLatestBlockRequest;
                    fromAmino(_: _44.GetLatestBlockRequestAmino): _44.GetLatestBlockRequest;
                    toAmino(_: _44.GetLatestBlockRequest): _44.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _44.GetLatestBlockRequestAminoMsg): _44.GetLatestBlockRequest;
                    toAminoMsg(message: _44.GetLatestBlockRequest): _44.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _44.GetLatestBlockRequestProtoMsg): _44.GetLatestBlockRequest;
                    toProto(message: _44.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _44.GetLatestBlockRequest): _44.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _44.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.GetLatestBlockResponse;
                    fromPartial(object: Partial<_44.GetLatestBlockResponse>): _44.GetLatestBlockResponse;
                    fromAmino(object: _44.GetLatestBlockResponseAmino): _44.GetLatestBlockResponse;
                    toAmino(message: _44.GetLatestBlockResponse): _44.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _44.GetLatestBlockResponseAminoMsg): _44.GetLatestBlockResponse;
                    toAminoMsg(message: _44.GetLatestBlockResponse): _44.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _44.GetLatestBlockResponseProtoMsg): _44.GetLatestBlockResponse;
                    toProto(message: _44.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _44.GetLatestBlockResponse): _44.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _44.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _44.GetSyncingRequest;
                    fromPartial(_: Partial<_44.GetSyncingRequest>): _44.GetSyncingRequest;
                    fromAmino(_: _44.GetSyncingRequestAmino): _44.GetSyncingRequest;
                    toAmino(_: _44.GetSyncingRequest): _44.GetSyncingRequestAmino;
                    fromAminoMsg(object: _44.GetSyncingRequestAminoMsg): _44.GetSyncingRequest;
                    toAminoMsg(message: _44.GetSyncingRequest): _44.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _44.GetSyncingRequestProtoMsg): _44.GetSyncingRequest;
                    toProto(message: _44.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _44.GetSyncingRequest): _44.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _44.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.GetSyncingResponse;
                    fromPartial(object: Partial<_44.GetSyncingResponse>): _44.GetSyncingResponse;
                    fromAmino(object: _44.GetSyncingResponseAmino): _44.GetSyncingResponse;
                    toAmino(message: _44.GetSyncingResponse): _44.GetSyncingResponseAmino;
                    fromAminoMsg(object: _44.GetSyncingResponseAminoMsg): _44.GetSyncingResponse;
                    toAminoMsg(message: _44.GetSyncingResponse): _44.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _44.GetSyncingResponseProtoMsg): _44.GetSyncingResponse;
                    toProto(message: _44.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _44.GetSyncingResponse): _44.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _44.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _44.GetNodeInfoRequest;
                    fromPartial(_: Partial<_44.GetNodeInfoRequest>): _44.GetNodeInfoRequest;
                    fromAmino(_: _44.GetNodeInfoRequestAmino): _44.GetNodeInfoRequest;
                    toAmino(_: _44.GetNodeInfoRequest): _44.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _44.GetNodeInfoRequestAminoMsg): _44.GetNodeInfoRequest;
                    toAminoMsg(message: _44.GetNodeInfoRequest): _44.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _44.GetNodeInfoRequestProtoMsg): _44.GetNodeInfoRequest;
                    toProto(message: _44.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _44.GetNodeInfoRequest): _44.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _44.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.GetNodeInfoResponse;
                    fromPartial(object: Partial<_44.GetNodeInfoResponse>): _44.GetNodeInfoResponse;
                    fromAmino(object: _44.GetNodeInfoResponseAmino): _44.GetNodeInfoResponse;
                    toAmino(message: _44.GetNodeInfoResponse): _44.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _44.GetNodeInfoResponseAminoMsg): _44.GetNodeInfoResponse;
                    toAminoMsg(message: _44.GetNodeInfoResponse): _44.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _44.GetNodeInfoResponseProtoMsg): _44.GetNodeInfoResponse;
                    toProto(message: _44.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _44.GetNodeInfoResponse): _44.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _44.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.VersionInfo;
                    fromPartial(object: Partial<_44.VersionInfo>): _44.VersionInfo;
                    fromAmino(object: _44.VersionInfoAmino): _44.VersionInfo;
                    toAmino(message: _44.VersionInfo): _44.VersionInfoAmino;
                    fromAminoMsg(object: _44.VersionInfoAminoMsg): _44.VersionInfo;
                    toAminoMsg(message: _44.VersionInfo): _44.VersionInfoAminoMsg;
                    fromProtoMsg(message: _44.VersionInfoProtoMsg): _44.VersionInfo;
                    toProto(message: _44.VersionInfo): Uint8Array;
                    toProtoMsg(message: _44.VersionInfo): _44.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _44.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.Module;
                    fromPartial(object: Partial<_44.Module>): _44.Module;
                    fromAmino(object: _44.ModuleAmino): _44.Module;
                    toAmino(message: _44.Module): _44.ModuleAmino;
                    fromAminoMsg(object: _44.ModuleAminoMsg): _44.Module;
                    toAminoMsg(message: _44.Module): _44.ModuleAminoMsg;
                    fromProtoMsg(message: _44.ModuleProtoMsg): _44.Module;
                    toProto(message: _44.Module): Uint8Array;
                    toProtoMsg(message: _44.Module): _44.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _45.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.Coin;
                fromPartial(object: Partial<_45.Coin>): _45.Coin;
                fromAmino(object: _45.CoinAmino): _45.Coin;
                toAmino(message: _45.Coin): _45.CoinAmino;
                fromAminoMsg(object: _45.CoinAminoMsg): _45.Coin;
                toAminoMsg(message: _45.Coin): _45.CoinAminoMsg;
                fromProtoMsg(message: _45.CoinProtoMsg): _45.Coin;
                toProto(message: _45.Coin): Uint8Array;
                toProtoMsg(message: _45.Coin): _45.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _45.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.DecCoin;
                fromPartial(object: Partial<_45.DecCoin>): _45.DecCoin;
                fromAmino(object: _45.DecCoinAmino): _45.DecCoin;
                toAmino(message: _45.DecCoin): _45.DecCoinAmino;
                fromAminoMsg(object: _45.DecCoinAminoMsg): _45.DecCoin;
                toAminoMsg(message: _45.DecCoin): _45.DecCoinAminoMsg;
                fromProtoMsg(message: _45.DecCoinProtoMsg): _45.DecCoin;
                toProto(message: _45.DecCoin): Uint8Array;
                toProtoMsg(message: _45.DecCoin): _45.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _45.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.IntProto;
                fromPartial(object: Partial<_45.IntProto>): _45.IntProto;
                fromAmino(object: _45.IntProtoAmino): _45.IntProto;
                toAmino(message: _45.IntProto): _45.IntProtoAmino;
                fromAminoMsg(object: _45.IntProtoAminoMsg): _45.IntProto;
                toAminoMsg(message: _45.IntProto): _45.IntProtoAminoMsg;
                fromProtoMsg(message: _45.IntProtoProtoMsg): _45.IntProto;
                toProto(message: _45.IntProto): Uint8Array;
                toProtoMsg(message: _45.IntProto): _45.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _45.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.DecProto;
                fromPartial(object: Partial<_45.DecProto>): _45.DecProto;
                fromAmino(object: _45.DecProtoAmino): _45.DecProto;
                toAmino(message: _45.DecProto): _45.DecProtoAmino;
                fromAminoMsg(object: _45.DecProtoAminoMsg): _45.DecProto;
                toAminoMsg(message: _45.DecProto): _45.DecProtoAminoMsg;
                fromProtoMsg(message: _45.DecProtoProtoMsg): _45.DecProto;
                toProto(message: _45.DecProto): Uint8Array;
                toProtoMsg(message: _45.DecProto): _45.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _47.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.GenesisOwners;
                fromPartial(object: Partial<_47.GenesisOwners>): _47.GenesisOwners;
                fromAmino(object: _47.GenesisOwnersAmino): _47.GenesisOwners;
                toAmino(message: _47.GenesisOwners): _47.GenesisOwnersAmino;
                fromAminoMsg(object: _47.GenesisOwnersAminoMsg): _47.GenesisOwners;
                toAminoMsg(message: _47.GenesisOwners): _47.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _47.GenesisOwnersProtoMsg): _47.GenesisOwners;
                toProto(message: _47.GenesisOwners): Uint8Array;
                toProtoMsg(message: _47.GenesisOwners): _47.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _46.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Capability;
                fromPartial(object: Partial<_46.Capability>): _46.Capability;
                fromAmino(object: _46.CapabilityAmino): _46.Capability;
                toAmino(message: _46.Capability): _46.CapabilityAmino;
                fromAminoMsg(object: _46.CapabilityAminoMsg): _46.Capability;
                toAminoMsg(message: _46.Capability): _46.CapabilityAminoMsg;
                fromProtoMsg(message: _46.CapabilityProtoMsg): _46.Capability;
                toProto(message: _46.Capability): Uint8Array;
                toProtoMsg(message: _46.Capability): _46.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _46.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Owner;
                fromPartial(object: Partial<_46.Owner>): _46.Owner;
                fromAmino(object: _46.OwnerAmino): _46.Owner;
                toAmino(message: _46.Owner): _46.OwnerAmino;
                fromAminoMsg(object: _46.OwnerAminoMsg): _46.Owner;
                toAminoMsg(message: _46.Owner): _46.OwnerAminoMsg;
                fromProtoMsg(message: _46.OwnerProtoMsg): _46.Owner;
                toProto(message: _46.Owner): Uint8Array;
                toProtoMsg(message: _46.Owner): _46.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _46.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.CapabilityOwners;
                fromPartial(object: Partial<_46.CapabilityOwners>): _46.CapabilityOwners;
                fromAmino(object: _46.CapabilityOwnersAmino): _46.CapabilityOwners;
                toAmino(message: _46.CapabilityOwners): _46.CapabilityOwnersAmino;
                fromAminoMsg(object: _46.CapabilityOwnersAminoMsg): _46.CapabilityOwners;
                toAminoMsg(message: _46.CapabilityOwners): _46.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _46.CapabilityOwnersProtoMsg): _46.CapabilityOwners;
                toProto(message: _46.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _46.CapabilityOwners): _46.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _194.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _49.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _49.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _49.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _49.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _49.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _49.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _49.MsgVerifyInvariant) => _49.MsgVerifyInvariantAmino;
                    fromAmino: (object: _49.MsgVerifyInvariantAmino) => _49.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _49.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgVerifyInvariant;
                fromPartial(object: Partial<_49.MsgVerifyInvariant>): _49.MsgVerifyInvariant;
                fromAmino(object: _49.MsgVerifyInvariantAmino): _49.MsgVerifyInvariant;
                toAmino(message: _49.MsgVerifyInvariant): _49.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _49.MsgVerifyInvariantAminoMsg): _49.MsgVerifyInvariant;
                toAminoMsg(message: _49.MsgVerifyInvariant): _49.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _49.MsgVerifyInvariantProtoMsg): _49.MsgVerifyInvariant;
                toProto(message: _49.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _49.MsgVerifyInvariant): _49.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _49.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_49.MsgVerifyInvariantResponse>): _49.MsgVerifyInvariantResponse;
                fromAmino(_: _49.MsgVerifyInvariantResponseAmino): _49.MsgVerifyInvariantResponse;
                toAmino(_: _49.MsgVerifyInvariantResponse): _49.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _49.MsgVerifyInvariantResponseAminoMsg): _49.MsgVerifyInvariantResponse;
                toAminoMsg(message: _49.MsgVerifyInvariantResponse): _49.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _49.MsgVerifyInvariantResponseProtoMsg): _49.MsgVerifyInvariantResponse;
                toProto(message: _49.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _49.MsgVerifyInvariantResponse): _49.MsgVerifyInvariantResponseProtoMsg;
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
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _50.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.PubKey;
                fromPartial(object: Partial<_50.PubKey>): _50.PubKey;
                fromAmino(object: _50.PubKeyAmino): _50.PubKey;
                toAmino(message: _50.PubKey): _50.PubKeyAmino;
                fromAminoMsg(object: _50.PubKeyAminoMsg): _50.PubKey;
                toAminoMsg(message: _50.PubKey): _50.PubKeyAminoMsg;
                fromProtoMsg(message: _50.PubKeyProtoMsg): _50.PubKey;
                toProto(message: _50.PubKey): Uint8Array;
                toProtoMsg(message: _50.PubKey): _50.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _50.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.PrivKey;
                fromPartial(object: Partial<_50.PrivKey>): _50.PrivKey;
                fromAmino(object: _50.PrivKeyAmino): _50.PrivKey;
                toAmino(message: _50.PrivKey): _50.PrivKeyAmino;
                fromAminoMsg(object: _50.PrivKeyAminoMsg): _50.PrivKey;
                toAminoMsg(message: _50.PrivKey): _50.PrivKeyAminoMsg;
                fromProtoMsg(message: _50.PrivKeyProtoMsg): _50.PrivKey;
                toProto(message: _50.PrivKey): Uint8Array;
                toProtoMsg(message: _50.PrivKey): _50.PrivKeyProtoMsg;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _51.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.LegacyAminoPubKey;
                fromPartial(object: Partial<_51.LegacyAminoPubKey>): _51.LegacyAminoPubKey;
                fromAmino(object: _51.LegacyAminoPubKeyAmino): _51.LegacyAminoPubKey;
                toAmino(message: _51.LegacyAminoPubKey): _51.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _51.LegacyAminoPubKeyAminoMsg): _51.LegacyAminoPubKey;
                toAminoMsg(message: _51.LegacyAminoPubKey): _51.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _51.LegacyAminoPubKeyProtoMsg): _51.LegacyAminoPubKey;
                toProto(message: _51.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _51.LegacyAminoPubKey): _51.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
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
        const secp256r1: {
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
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _195.MsgClientImpl;
            QueryClientImpl: typeof _182.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                validatorOutstandingRewards(request: _56.QueryValidatorOutstandingRewardsRequest): Promise<_56.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _56.QueryValidatorCommissionRequest): Promise<_56.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _56.QueryValidatorSlashesRequest): Promise<_56.QueryValidatorSlashesResponse>;
                delegationRewards(request: _56.QueryDelegationRewardsRequest): Promise<_56.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _56.QueryDelegationTotalRewardsRequest): Promise<_56.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _56.QueryDelegatorValidatorsRequest): Promise<_56.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _56.QueryDelegatorWithdrawAddressRequest): Promise<_56.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _56.QueryCommunityPoolRequest): Promise<_56.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _167.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _57.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _57.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _57.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _57.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _57.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _57.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _57.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _57.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _57.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _57.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _57.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _57.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _57.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _57.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _57.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _57.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _57.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _57.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _57.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _57.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _57.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _57.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _57.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _57.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _57.MsgSetWithdrawAddress) => _57.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _57.MsgSetWithdrawAddressAmino) => _57.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _57.MsgWithdrawDelegatorReward) => _57.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _57.MsgWithdrawDelegatorRewardAmino) => _57.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _57.MsgWithdrawValidatorCommission) => _57.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _57.MsgWithdrawValidatorCommissionAmino) => _57.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _57.MsgFundCommunityPool) => _57.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _57.MsgFundCommunityPoolAmino) => _57.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _57.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_57.MsgSetWithdrawAddress>): _57.MsgSetWithdrawAddress;
                fromAmino(object: _57.MsgSetWithdrawAddressAmino): _57.MsgSetWithdrawAddress;
                toAmino(message: _57.MsgSetWithdrawAddress): _57.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _57.MsgSetWithdrawAddressAminoMsg): _57.MsgSetWithdrawAddress;
                toAminoMsg(message: _57.MsgSetWithdrawAddress): _57.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _57.MsgSetWithdrawAddressProtoMsg): _57.MsgSetWithdrawAddress;
                toProto(message: _57.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _57.MsgSetWithdrawAddress): _57.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _57.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_57.MsgSetWithdrawAddressResponse>): _57.MsgSetWithdrawAddressResponse;
                fromAmino(_: _57.MsgSetWithdrawAddressResponseAmino): _57.MsgSetWithdrawAddressResponse;
                toAmino(_: _57.MsgSetWithdrawAddressResponse): _57.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _57.MsgSetWithdrawAddressResponseAminoMsg): _57.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _57.MsgSetWithdrawAddressResponse): _57.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _57.MsgSetWithdrawAddressResponseProtoMsg): _57.MsgSetWithdrawAddressResponse;
                toProto(message: _57.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _57.MsgSetWithdrawAddressResponse): _57.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _57.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_57.MsgWithdrawDelegatorReward>): _57.MsgWithdrawDelegatorReward;
                fromAmino(object: _57.MsgWithdrawDelegatorRewardAmino): _57.MsgWithdrawDelegatorReward;
                toAmino(message: _57.MsgWithdrawDelegatorReward): _57.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _57.MsgWithdrawDelegatorRewardAminoMsg): _57.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _57.MsgWithdrawDelegatorReward): _57.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _57.MsgWithdrawDelegatorRewardProtoMsg): _57.MsgWithdrawDelegatorReward;
                toProto(message: _57.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _57.MsgWithdrawDelegatorReward): _57.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _57.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_57.MsgWithdrawDelegatorRewardResponse>): _57.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _57.MsgWithdrawDelegatorRewardResponseAmino): _57.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _57.MsgWithdrawDelegatorRewardResponse): _57.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _57.MsgWithdrawDelegatorRewardResponseAminoMsg): _57.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _57.MsgWithdrawDelegatorRewardResponse): _57.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _57.MsgWithdrawDelegatorRewardResponseProtoMsg): _57.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _57.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _57.MsgWithdrawDelegatorRewardResponse): _57.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _57.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_57.MsgWithdrawValidatorCommission>): _57.MsgWithdrawValidatorCommission;
                fromAmino(object: _57.MsgWithdrawValidatorCommissionAmino): _57.MsgWithdrawValidatorCommission;
                toAmino(message: _57.MsgWithdrawValidatorCommission): _57.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _57.MsgWithdrawValidatorCommissionAminoMsg): _57.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _57.MsgWithdrawValidatorCommission): _57.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _57.MsgWithdrawValidatorCommissionProtoMsg): _57.MsgWithdrawValidatorCommission;
                toProto(message: _57.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _57.MsgWithdrawValidatorCommission): _57.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _57.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_57.MsgWithdrawValidatorCommissionResponse>): _57.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _57.MsgWithdrawValidatorCommissionResponseAmino): _57.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _57.MsgWithdrawValidatorCommissionResponse): _57.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _57.MsgWithdrawValidatorCommissionResponseAminoMsg): _57.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _57.MsgWithdrawValidatorCommissionResponse): _57.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _57.MsgWithdrawValidatorCommissionResponseProtoMsg): _57.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _57.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _57.MsgWithdrawValidatorCommissionResponse): _57.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _57.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgFundCommunityPool;
                fromPartial(object: Partial<_57.MsgFundCommunityPool>): _57.MsgFundCommunityPool;
                fromAmino(object: _57.MsgFundCommunityPoolAmino): _57.MsgFundCommunityPool;
                toAmino(message: _57.MsgFundCommunityPool): _57.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _57.MsgFundCommunityPoolAminoMsg): _57.MsgFundCommunityPool;
                toAminoMsg(message: _57.MsgFundCommunityPool): _57.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _57.MsgFundCommunityPoolProtoMsg): _57.MsgFundCommunityPool;
                toProto(message: _57.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _57.MsgFundCommunityPool): _57.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _57.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_57.MsgFundCommunityPoolResponse>): _57.MsgFundCommunityPoolResponse;
                fromAmino(_: _57.MsgFundCommunityPoolResponseAmino): _57.MsgFundCommunityPoolResponse;
                toAmino(_: _57.MsgFundCommunityPoolResponse): _57.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _57.MsgFundCommunityPoolResponseAminoMsg): _57.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _57.MsgFundCommunityPoolResponse): _57.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _57.MsgFundCommunityPoolResponseProtoMsg): _57.MsgFundCommunityPoolResponse;
                toProto(message: _57.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _57.MsgFundCommunityPoolResponse): _57.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _56.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _56.QueryParamsRequest;
                fromPartial(_: Partial<_56.QueryParamsRequest>): _56.QueryParamsRequest;
                fromAmino(_: _56.QueryParamsRequestAmino): _56.QueryParamsRequest;
                toAmino(_: _56.QueryParamsRequest): _56.QueryParamsRequestAmino;
                fromAminoMsg(object: _56.QueryParamsRequestAminoMsg): _56.QueryParamsRequest;
                toAminoMsg(message: _56.QueryParamsRequest): _56.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryParamsRequestProtoMsg): _56.QueryParamsRequest;
                toProto(message: _56.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryParamsRequest): _56.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _56.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryParamsResponse;
                fromPartial(object: Partial<_56.QueryParamsResponse>): _56.QueryParamsResponse;
                fromAmino(object: _56.QueryParamsResponseAmino): _56.QueryParamsResponse;
                toAmino(message: _56.QueryParamsResponse): _56.QueryParamsResponseAmino;
                fromAminoMsg(object: _56.QueryParamsResponseAminoMsg): _56.QueryParamsResponse;
                toAminoMsg(message: _56.QueryParamsResponse): _56.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryParamsResponseProtoMsg): _56.QueryParamsResponse;
                toProto(message: _56.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryParamsResponse): _56.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _56.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_56.QueryValidatorOutstandingRewardsRequest>): _56.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _56.QueryValidatorOutstandingRewardsRequestAmino): _56.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _56.QueryValidatorOutstandingRewardsRequest): _56.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _56.QueryValidatorOutstandingRewardsRequestAminoMsg): _56.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _56.QueryValidatorOutstandingRewardsRequest): _56.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryValidatorOutstandingRewardsRequestProtoMsg): _56.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _56.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryValidatorOutstandingRewardsRequest): _56.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _56.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_56.QueryValidatorOutstandingRewardsResponse>): _56.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _56.QueryValidatorOutstandingRewardsResponseAmino): _56.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _56.QueryValidatorOutstandingRewardsResponse): _56.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _56.QueryValidatorOutstandingRewardsResponseAminoMsg): _56.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _56.QueryValidatorOutstandingRewardsResponse): _56.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryValidatorOutstandingRewardsResponseProtoMsg): _56.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _56.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryValidatorOutstandingRewardsResponse): _56.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _56.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_56.QueryValidatorCommissionRequest>): _56.QueryValidatorCommissionRequest;
                fromAmino(object: _56.QueryValidatorCommissionRequestAmino): _56.QueryValidatorCommissionRequest;
                toAmino(message: _56.QueryValidatorCommissionRequest): _56.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _56.QueryValidatorCommissionRequestAminoMsg): _56.QueryValidatorCommissionRequest;
                toAminoMsg(message: _56.QueryValidatorCommissionRequest): _56.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _56.QueryValidatorCommissionRequestProtoMsg): _56.QueryValidatorCommissionRequest;
                toProto(message: _56.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _56.QueryValidatorCommissionRequest): _56.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _56.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_56.QueryValidatorCommissionResponse>): _56.QueryValidatorCommissionResponse;
                fromAmino(object: _56.QueryValidatorCommissionResponseAmino): _56.QueryValidatorCommissionResponse;
                toAmino(message: _56.QueryValidatorCommissionResponse): _56.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _56.QueryValidatorCommissionResponseAminoMsg): _56.QueryValidatorCommissionResponse;
                toAminoMsg(message: _56.QueryValidatorCommissionResponse): _56.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _56.QueryValidatorCommissionResponseProtoMsg): _56.QueryValidatorCommissionResponse;
                toProto(message: _56.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _56.QueryValidatorCommissionResponse): _56.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _56.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_56.QueryValidatorSlashesRequest>): _56.QueryValidatorSlashesRequest;
                fromAmino(object: _56.QueryValidatorSlashesRequestAmino): _56.QueryValidatorSlashesRequest;
                toAmino(message: _56.QueryValidatorSlashesRequest): _56.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _56.QueryValidatorSlashesRequestAminoMsg): _56.QueryValidatorSlashesRequest;
                toAminoMsg(message: _56.QueryValidatorSlashesRequest): _56.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _56.QueryValidatorSlashesRequestProtoMsg): _56.QueryValidatorSlashesRequest;
                toProto(message: _56.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _56.QueryValidatorSlashesRequest): _56.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _56.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_56.QueryValidatorSlashesResponse>): _56.QueryValidatorSlashesResponse;
                fromAmino(object: _56.QueryValidatorSlashesResponseAmino): _56.QueryValidatorSlashesResponse;
                toAmino(message: _56.QueryValidatorSlashesResponse): _56.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _56.QueryValidatorSlashesResponseAminoMsg): _56.QueryValidatorSlashesResponse;
                toAminoMsg(message: _56.QueryValidatorSlashesResponse): _56.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _56.QueryValidatorSlashesResponseProtoMsg): _56.QueryValidatorSlashesResponse;
                toProto(message: _56.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _56.QueryValidatorSlashesResponse): _56.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _56.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_56.QueryDelegationRewardsRequest>): _56.QueryDelegationRewardsRequest;
                fromAmino(object: _56.QueryDelegationRewardsRequestAmino): _56.QueryDelegationRewardsRequest;
                toAmino(message: _56.QueryDelegationRewardsRequest): _56.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _56.QueryDelegationRewardsRequestAminoMsg): _56.QueryDelegationRewardsRequest;
                toAminoMsg(message: _56.QueryDelegationRewardsRequest): _56.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryDelegationRewardsRequestProtoMsg): _56.QueryDelegationRewardsRequest;
                toProto(message: _56.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryDelegationRewardsRequest): _56.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _56.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_56.QueryDelegationRewardsResponse>): _56.QueryDelegationRewardsResponse;
                fromAmino(object: _56.QueryDelegationRewardsResponseAmino): _56.QueryDelegationRewardsResponse;
                toAmino(message: _56.QueryDelegationRewardsResponse): _56.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _56.QueryDelegationRewardsResponseAminoMsg): _56.QueryDelegationRewardsResponse;
                toAminoMsg(message: _56.QueryDelegationRewardsResponse): _56.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryDelegationRewardsResponseProtoMsg): _56.QueryDelegationRewardsResponse;
                toProto(message: _56.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryDelegationRewardsResponse): _56.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _56.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_56.QueryDelegationTotalRewardsRequest>): _56.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _56.QueryDelegationTotalRewardsRequestAmino): _56.QueryDelegationTotalRewardsRequest;
                toAmino(message: _56.QueryDelegationTotalRewardsRequest): _56.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _56.QueryDelegationTotalRewardsRequestAminoMsg): _56.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _56.QueryDelegationTotalRewardsRequest): _56.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryDelegationTotalRewardsRequestProtoMsg): _56.QueryDelegationTotalRewardsRequest;
                toProto(message: _56.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryDelegationTotalRewardsRequest): _56.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _56.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_56.QueryDelegationTotalRewardsResponse>): _56.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _56.QueryDelegationTotalRewardsResponseAmino): _56.QueryDelegationTotalRewardsResponse;
                toAmino(message: _56.QueryDelegationTotalRewardsResponse): _56.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _56.QueryDelegationTotalRewardsResponseAminoMsg): _56.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _56.QueryDelegationTotalRewardsResponse): _56.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryDelegationTotalRewardsResponseProtoMsg): _56.QueryDelegationTotalRewardsResponse;
                toProto(message: _56.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryDelegationTotalRewardsResponse): _56.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _56.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_56.QueryDelegatorValidatorsRequest>): _56.QueryDelegatorValidatorsRequest;
                fromAmino(object: _56.QueryDelegatorValidatorsRequestAmino): _56.QueryDelegatorValidatorsRequest;
                toAmino(message: _56.QueryDelegatorValidatorsRequest): _56.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _56.QueryDelegatorValidatorsRequestAminoMsg): _56.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _56.QueryDelegatorValidatorsRequest): _56.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryDelegatorValidatorsRequestProtoMsg): _56.QueryDelegatorValidatorsRequest;
                toProto(message: _56.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryDelegatorValidatorsRequest): _56.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _56.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_56.QueryDelegatorValidatorsResponse>): _56.QueryDelegatorValidatorsResponse;
                fromAmino(object: _56.QueryDelegatorValidatorsResponseAmino): _56.QueryDelegatorValidatorsResponse;
                toAmino(message: _56.QueryDelegatorValidatorsResponse): _56.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _56.QueryDelegatorValidatorsResponseAminoMsg): _56.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _56.QueryDelegatorValidatorsResponse): _56.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryDelegatorValidatorsResponseProtoMsg): _56.QueryDelegatorValidatorsResponse;
                toProto(message: _56.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryDelegatorValidatorsResponse): _56.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _56.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_56.QueryDelegatorWithdrawAddressRequest>): _56.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _56.QueryDelegatorWithdrawAddressRequestAmino): _56.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _56.QueryDelegatorWithdrawAddressRequest): _56.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _56.QueryDelegatorWithdrawAddressRequestAminoMsg): _56.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _56.QueryDelegatorWithdrawAddressRequest): _56.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _56.QueryDelegatorWithdrawAddressRequestProtoMsg): _56.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _56.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _56.QueryDelegatorWithdrawAddressRequest): _56.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _56.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_56.QueryDelegatorWithdrawAddressResponse>): _56.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _56.QueryDelegatorWithdrawAddressResponseAmino): _56.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _56.QueryDelegatorWithdrawAddressResponse): _56.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _56.QueryDelegatorWithdrawAddressResponseAminoMsg): _56.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _56.QueryDelegatorWithdrawAddressResponse): _56.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _56.QueryDelegatorWithdrawAddressResponseProtoMsg): _56.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _56.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _56.QueryDelegatorWithdrawAddressResponse): _56.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _56.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _56.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_56.QueryCommunityPoolRequest>): _56.QueryCommunityPoolRequest;
                fromAmino(_: _56.QueryCommunityPoolRequestAmino): _56.QueryCommunityPoolRequest;
                toAmino(_: _56.QueryCommunityPoolRequest): _56.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _56.QueryCommunityPoolRequestAminoMsg): _56.QueryCommunityPoolRequest;
                toAminoMsg(message: _56.QueryCommunityPoolRequest): _56.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _56.QueryCommunityPoolRequestProtoMsg): _56.QueryCommunityPoolRequest;
                toProto(message: _56.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _56.QueryCommunityPoolRequest): _56.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _56.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_56.QueryCommunityPoolResponse>): _56.QueryCommunityPoolResponse;
                fromAmino(object: _56.QueryCommunityPoolResponseAmino): _56.QueryCommunityPoolResponse;
                toAmino(message: _56.QueryCommunityPoolResponse): _56.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _56.QueryCommunityPoolResponseAminoMsg): _56.QueryCommunityPoolResponse;
                toAminoMsg(message: _56.QueryCommunityPoolResponse): _56.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _56.QueryCommunityPoolResponseProtoMsg): _56.QueryCommunityPoolResponse;
                toProto(message: _56.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _56.QueryCommunityPoolResponse): _56.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _55.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_55.DelegatorWithdrawInfo>): _55.DelegatorWithdrawInfo;
                fromAmino(object: _55.DelegatorWithdrawInfoAmino): _55.DelegatorWithdrawInfo;
                toAmino(message: _55.DelegatorWithdrawInfo): _55.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _55.DelegatorWithdrawInfoAminoMsg): _55.DelegatorWithdrawInfo;
                toAminoMsg(message: _55.DelegatorWithdrawInfo): _55.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _55.DelegatorWithdrawInfoProtoMsg): _55.DelegatorWithdrawInfo;
                toProto(message: _55.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _55.DelegatorWithdrawInfo): _55.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _55.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_55.ValidatorOutstandingRewardsRecord>): _55.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _55.ValidatorOutstandingRewardsRecordAmino): _55.ValidatorOutstandingRewardsRecord;
                toAmino(message: _55.ValidatorOutstandingRewardsRecord): _55.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _55.ValidatorOutstandingRewardsRecordAminoMsg): _55.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _55.ValidatorOutstandingRewardsRecord): _55.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _55.ValidatorOutstandingRewardsRecordProtoMsg): _55.ValidatorOutstandingRewardsRecord;
                toProto(message: _55.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _55.ValidatorOutstandingRewardsRecord): _55.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _55.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_55.ValidatorAccumulatedCommissionRecord>): _55.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _55.ValidatorAccumulatedCommissionRecordAmino): _55.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _55.ValidatorAccumulatedCommissionRecord): _55.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _55.ValidatorAccumulatedCommissionRecordAminoMsg): _55.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _55.ValidatorAccumulatedCommissionRecord): _55.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _55.ValidatorAccumulatedCommissionRecordProtoMsg): _55.ValidatorAccumulatedCommissionRecord;
                toProto(message: _55.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _55.ValidatorAccumulatedCommissionRecord): _55.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _55.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_55.ValidatorHistoricalRewardsRecord>): _55.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _55.ValidatorHistoricalRewardsRecordAmino): _55.ValidatorHistoricalRewardsRecord;
                toAmino(message: _55.ValidatorHistoricalRewardsRecord): _55.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _55.ValidatorHistoricalRewardsRecordAminoMsg): _55.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _55.ValidatorHistoricalRewardsRecord): _55.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _55.ValidatorHistoricalRewardsRecordProtoMsg): _55.ValidatorHistoricalRewardsRecord;
                toProto(message: _55.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _55.ValidatorHistoricalRewardsRecord): _55.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _55.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_55.ValidatorCurrentRewardsRecord>): _55.ValidatorCurrentRewardsRecord;
                fromAmino(object: _55.ValidatorCurrentRewardsRecordAmino): _55.ValidatorCurrentRewardsRecord;
                toAmino(message: _55.ValidatorCurrentRewardsRecord): _55.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _55.ValidatorCurrentRewardsRecordAminoMsg): _55.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _55.ValidatorCurrentRewardsRecord): _55.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _55.ValidatorCurrentRewardsRecordProtoMsg): _55.ValidatorCurrentRewardsRecord;
                toProto(message: _55.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _55.ValidatorCurrentRewardsRecord): _55.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _55.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_55.DelegatorStartingInfoRecord>): _55.DelegatorStartingInfoRecord;
                fromAmino(object: _55.DelegatorStartingInfoRecordAmino): _55.DelegatorStartingInfoRecord;
                toAmino(message: _55.DelegatorStartingInfoRecord): _55.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _55.DelegatorStartingInfoRecordAminoMsg): _55.DelegatorStartingInfoRecord;
                toAminoMsg(message: _55.DelegatorStartingInfoRecord): _55.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _55.DelegatorStartingInfoRecordProtoMsg): _55.DelegatorStartingInfoRecord;
                toProto(message: _55.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _55.DelegatorStartingInfoRecord): _55.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _55.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_55.ValidatorSlashEventRecord>): _55.ValidatorSlashEventRecord;
                fromAmino(object: _55.ValidatorSlashEventRecordAmino): _55.ValidatorSlashEventRecord;
                toAmino(message: _55.ValidatorSlashEventRecord): _55.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _55.ValidatorSlashEventRecordAminoMsg): _55.ValidatorSlashEventRecord;
                toAminoMsg(message: _55.ValidatorSlashEventRecord): _55.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _55.ValidatorSlashEventRecordProtoMsg): _55.ValidatorSlashEventRecord;
                toProto(message: _55.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _55.ValidatorSlashEventRecord): _55.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _54.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.Params;
                fromPartial(object: Partial<_54.Params>): _54.Params;
                fromAmino(object: _54.ParamsAmino): _54.Params;
                toAmino(message: _54.Params): _54.ParamsAmino;
                fromAminoMsg(object: _54.ParamsAminoMsg): _54.Params;
                toAminoMsg(message: _54.Params): _54.ParamsAminoMsg;
                fromProtoMsg(message: _54.ParamsProtoMsg): _54.Params;
                toProto(message: _54.Params): Uint8Array;
                toProtoMsg(message: _54.Params): _54.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _54.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_54.ValidatorHistoricalRewards>): _54.ValidatorHistoricalRewards;
                fromAmino(object: _54.ValidatorHistoricalRewardsAmino): _54.ValidatorHistoricalRewards;
                toAmino(message: _54.ValidatorHistoricalRewards): _54.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _54.ValidatorHistoricalRewardsAminoMsg): _54.ValidatorHistoricalRewards;
                toAminoMsg(message: _54.ValidatorHistoricalRewards): _54.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _54.ValidatorHistoricalRewardsProtoMsg): _54.ValidatorHistoricalRewards;
                toProto(message: _54.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _54.ValidatorHistoricalRewards): _54.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _54.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.ValidatorCurrentRewards;
                fromPartial(object: Partial<_54.ValidatorCurrentRewards>): _54.ValidatorCurrentRewards;
                fromAmino(object: _54.ValidatorCurrentRewardsAmino): _54.ValidatorCurrentRewards;
                toAmino(message: _54.ValidatorCurrentRewards): _54.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _54.ValidatorCurrentRewardsAminoMsg): _54.ValidatorCurrentRewards;
                toAminoMsg(message: _54.ValidatorCurrentRewards): _54.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _54.ValidatorCurrentRewardsProtoMsg): _54.ValidatorCurrentRewards;
                toProto(message: _54.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _54.ValidatorCurrentRewards): _54.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _54.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_54.ValidatorAccumulatedCommission>): _54.ValidatorAccumulatedCommission;
                fromAmino(object: _54.ValidatorAccumulatedCommissionAmino): _54.ValidatorAccumulatedCommission;
                toAmino(message: _54.ValidatorAccumulatedCommission): _54.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _54.ValidatorAccumulatedCommissionAminoMsg): _54.ValidatorAccumulatedCommission;
                toAminoMsg(message: _54.ValidatorAccumulatedCommission): _54.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _54.ValidatorAccumulatedCommissionProtoMsg): _54.ValidatorAccumulatedCommission;
                toProto(message: _54.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _54.ValidatorAccumulatedCommission): _54.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _54.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_54.ValidatorOutstandingRewards>): _54.ValidatorOutstandingRewards;
                fromAmino(object: _54.ValidatorOutstandingRewardsAmino): _54.ValidatorOutstandingRewards;
                toAmino(message: _54.ValidatorOutstandingRewards): _54.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _54.ValidatorOutstandingRewardsAminoMsg): _54.ValidatorOutstandingRewards;
                toAminoMsg(message: _54.ValidatorOutstandingRewards): _54.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _54.ValidatorOutstandingRewardsProtoMsg): _54.ValidatorOutstandingRewards;
                toProto(message: _54.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _54.ValidatorOutstandingRewards): _54.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _54.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.ValidatorSlashEvent;
                fromPartial(object: Partial<_54.ValidatorSlashEvent>): _54.ValidatorSlashEvent;
                fromAmino(object: _54.ValidatorSlashEventAmino): _54.ValidatorSlashEvent;
                toAmino(message: _54.ValidatorSlashEvent): _54.ValidatorSlashEventAmino;
                fromAminoMsg(object: _54.ValidatorSlashEventAminoMsg): _54.ValidatorSlashEvent;
                toAminoMsg(message: _54.ValidatorSlashEvent): _54.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _54.ValidatorSlashEventProtoMsg): _54.ValidatorSlashEvent;
                toProto(message: _54.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _54.ValidatorSlashEvent): _54.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _54.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.ValidatorSlashEvents;
                fromPartial(object: Partial<_54.ValidatorSlashEvents>): _54.ValidatorSlashEvents;
                fromAmino(object: _54.ValidatorSlashEventsAmino): _54.ValidatorSlashEvents;
                toAmino(message: _54.ValidatorSlashEvents): _54.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _54.ValidatorSlashEventsAminoMsg): _54.ValidatorSlashEvents;
                toAminoMsg(message: _54.ValidatorSlashEvents): _54.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _54.ValidatorSlashEventsProtoMsg): _54.ValidatorSlashEvents;
                toProto(message: _54.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _54.ValidatorSlashEvents): _54.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _54.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.FeePool;
                fromPartial(object: Partial<_54.FeePool>): _54.FeePool;
                fromAmino(object: _54.FeePoolAmino): _54.FeePool;
                toAmino(message: _54.FeePool): _54.FeePoolAmino;
                fromAminoMsg(object: _54.FeePoolAminoMsg): _54.FeePool;
                toAminoMsg(message: _54.FeePool): _54.FeePoolAminoMsg;
                fromProtoMsg(message: _54.FeePoolProtoMsg): _54.FeePool;
                toProto(message: _54.FeePool): Uint8Array;
                toProtoMsg(message: _54.FeePool): _54.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _54.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_54.CommunityPoolSpendProposal>): _54.CommunityPoolSpendProposal;
                fromAmino(object: _54.CommunityPoolSpendProposalAmino): _54.CommunityPoolSpendProposal;
                toAmino(message: _54.CommunityPoolSpendProposal): _54.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _54.CommunityPoolSpendProposalAminoMsg): _54.CommunityPoolSpendProposal;
                toAminoMsg(message: _54.CommunityPoolSpendProposal): _54.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _54.CommunityPoolSpendProposalProtoMsg): _54.CommunityPoolSpendProposal;
                toProto(message: _54.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _54.CommunityPoolSpendProposal): _54.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _54.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.DelegatorStartingInfo;
                fromPartial(object: Partial<_54.DelegatorStartingInfo>): _54.DelegatorStartingInfo;
                fromAmino(object: _54.DelegatorStartingInfoAmino): _54.DelegatorStartingInfo;
                toAmino(message: _54.DelegatorStartingInfo): _54.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _54.DelegatorStartingInfoAminoMsg): _54.DelegatorStartingInfo;
                toAminoMsg(message: _54.DelegatorStartingInfo): _54.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _54.DelegatorStartingInfoProtoMsg): _54.DelegatorStartingInfo;
                toProto(message: _54.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _54.DelegatorStartingInfo): _54.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _54.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.DelegationDelegatorReward;
                fromPartial(object: Partial<_54.DelegationDelegatorReward>): _54.DelegationDelegatorReward;
                fromAmino(object: _54.DelegationDelegatorRewardAmino): _54.DelegationDelegatorReward;
                toAmino(message: _54.DelegationDelegatorReward): _54.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _54.DelegationDelegatorRewardAminoMsg): _54.DelegationDelegatorReward;
                toAminoMsg(message: _54.DelegationDelegatorReward): _54.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _54.DelegationDelegatorRewardProtoMsg): _54.DelegationDelegatorReward;
                toProto(message: _54.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _54.DelegationDelegatorReward): _54.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _54.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_54.CommunityPoolSpendProposalWithDeposit>): _54.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _54.CommunityPoolSpendProposalWithDepositAmino): _54.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _54.CommunityPoolSpendProposalWithDeposit): _54.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _54.CommunityPoolSpendProposalWithDepositAminoMsg): _54.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _54.CommunityPoolSpendProposalWithDeposit): _54.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _54.CommunityPoolSpendProposalWithDepositProtoMsg): _54.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _54.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _54.CommunityPoolSpendProposalWithDeposit): _54.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _196.MsgClientImpl;
            QueryClientImpl: typeof _183.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                evidence(request: _60.QueryEvidenceRequest): Promise<_60.QueryEvidenceResponse>;
                allEvidence(request?: _60.QueryAllEvidenceRequest): Promise<_60.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _168.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _61.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _61.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _61.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _61.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _61.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _61.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _61.MsgSubmitEvidence) => _61.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _61.MsgSubmitEvidenceAmino) => _61.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _61.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgSubmitEvidence;
                fromPartial(object: Partial<_61.MsgSubmitEvidence>): _61.MsgSubmitEvidence;
                fromAmino(object: _61.MsgSubmitEvidenceAmino): _61.MsgSubmitEvidence;
                toAmino(message: _61.MsgSubmitEvidence): _61.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _61.MsgSubmitEvidenceAminoMsg): _61.MsgSubmitEvidence;
                toAminoMsg(message: _61.MsgSubmitEvidence): _61.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _61.MsgSubmitEvidenceProtoMsg): _61.MsgSubmitEvidence;
                toProto(message: _61.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _61.MsgSubmitEvidence): _61.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _61.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_61.MsgSubmitEvidenceResponse>): _61.MsgSubmitEvidenceResponse;
                fromAmino(object: _61.MsgSubmitEvidenceResponseAmino): _61.MsgSubmitEvidenceResponse;
                toAmino(message: _61.MsgSubmitEvidenceResponse): _61.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _61.MsgSubmitEvidenceResponseAminoMsg): _61.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _61.MsgSubmitEvidenceResponse): _61.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _61.MsgSubmitEvidenceResponseProtoMsg): _61.MsgSubmitEvidenceResponse;
                toProto(message: _61.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _61.MsgSubmitEvidenceResponse): _61.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _60.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryEvidenceRequest;
                fromPartial(object: Partial<_60.QueryEvidenceRequest>): _60.QueryEvidenceRequest;
                fromAmino(object: _60.QueryEvidenceRequestAmino): _60.QueryEvidenceRequest;
                toAmino(message: _60.QueryEvidenceRequest): _60.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _60.QueryEvidenceRequestAminoMsg): _60.QueryEvidenceRequest;
                toAminoMsg(message: _60.QueryEvidenceRequest): _60.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _60.QueryEvidenceRequestProtoMsg): _60.QueryEvidenceRequest;
                toProto(message: _60.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _60.QueryEvidenceRequest): _60.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _60.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryEvidenceResponse;
                fromPartial(object: Partial<_60.QueryEvidenceResponse>): _60.QueryEvidenceResponse;
                fromAmino(object: _60.QueryEvidenceResponseAmino): _60.QueryEvidenceResponse;
                toAmino(message: _60.QueryEvidenceResponse): _60.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _60.QueryEvidenceResponseAminoMsg): _60.QueryEvidenceResponse;
                toAminoMsg(message: _60.QueryEvidenceResponse): _60.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _60.QueryEvidenceResponseProtoMsg): _60.QueryEvidenceResponse;
                toProto(message: _60.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _60.QueryEvidenceResponse): _60.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _60.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_60.QueryAllEvidenceRequest>): _60.QueryAllEvidenceRequest;
                fromAmino(object: _60.QueryAllEvidenceRequestAmino): _60.QueryAllEvidenceRequest;
                toAmino(message: _60.QueryAllEvidenceRequest): _60.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _60.QueryAllEvidenceRequestAminoMsg): _60.QueryAllEvidenceRequest;
                toAminoMsg(message: _60.QueryAllEvidenceRequest): _60.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _60.QueryAllEvidenceRequestProtoMsg): _60.QueryAllEvidenceRequest;
                toProto(message: _60.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _60.QueryAllEvidenceRequest): _60.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _60.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_60.QueryAllEvidenceResponse>): _60.QueryAllEvidenceResponse;
                fromAmino(object: _60.QueryAllEvidenceResponseAmino): _60.QueryAllEvidenceResponse;
                toAmino(message: _60.QueryAllEvidenceResponse): _60.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _60.QueryAllEvidenceResponseAminoMsg): _60.QueryAllEvidenceResponse;
                toAminoMsg(message: _60.QueryAllEvidenceResponse): _60.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _60.QueryAllEvidenceResponseProtoMsg): _60.QueryAllEvidenceResponse;
                toProto(message: _60.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _60.QueryAllEvidenceResponse): _60.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _58.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.Equivocation;
                fromPartial(object: Partial<_58.Equivocation>): _58.Equivocation;
                fromAmino(object: _58.EquivocationAmino): _58.Equivocation;
                toAmino(message: _58.Equivocation): _58.EquivocationAmino;
                fromAminoMsg(object: _58.EquivocationAminoMsg): _58.Equivocation;
                toAminoMsg(message: _58.Equivocation): _58.EquivocationAminoMsg;
                fromProtoMsg(message: _58.EquivocationProtoMsg): _58.Equivocation;
                toProto(message: _58.Equivocation): Uint8Array;
                toProtoMsg(message: _58.Equivocation): _58.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _197.MsgClientImpl;
            QueryClientImpl: typeof _184.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                allowance(request: _64.QueryAllowanceRequest): Promise<_64.QueryAllowanceResponse>;
                allowances(request: _64.QueryAllowancesRequest): Promise<_64.QueryAllowancesResponse>;
                allowancesByGranter(request: _64.QueryAllowancesByGranterRequest): Promise<_64.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _169.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _65.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _65.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _65.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _65.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _65.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _65.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _65.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _65.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _65.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _65.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _65.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _65.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _65.MsgGrantAllowance) => _65.MsgGrantAllowanceAmino;
                    fromAmino: (object: _65.MsgGrantAllowanceAmino) => _65.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _65.MsgRevokeAllowance) => _65.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _65.MsgRevokeAllowanceAmino) => _65.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _65.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgGrantAllowance;
                fromPartial(object: Partial<_65.MsgGrantAllowance>): _65.MsgGrantAllowance;
                fromAmino(object: _65.MsgGrantAllowanceAmino): _65.MsgGrantAllowance;
                toAmino(message: _65.MsgGrantAllowance): _65.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _65.MsgGrantAllowanceAminoMsg): _65.MsgGrantAllowance;
                toAminoMsg(message: _65.MsgGrantAllowance): _65.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _65.MsgGrantAllowanceProtoMsg): _65.MsgGrantAllowance;
                toProto(message: _65.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _65.MsgGrantAllowance): _65.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _65.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_65.MsgGrantAllowanceResponse>): _65.MsgGrantAllowanceResponse;
                fromAmino(_: _65.MsgGrantAllowanceResponseAmino): _65.MsgGrantAllowanceResponse;
                toAmino(_: _65.MsgGrantAllowanceResponse): _65.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _65.MsgGrantAllowanceResponseAminoMsg): _65.MsgGrantAllowanceResponse;
                toAminoMsg(message: _65.MsgGrantAllowanceResponse): _65.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _65.MsgGrantAllowanceResponseProtoMsg): _65.MsgGrantAllowanceResponse;
                toProto(message: _65.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _65.MsgGrantAllowanceResponse): _65.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _65.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgRevokeAllowance;
                fromPartial(object: Partial<_65.MsgRevokeAllowance>): _65.MsgRevokeAllowance;
                fromAmino(object: _65.MsgRevokeAllowanceAmino): _65.MsgRevokeAllowance;
                toAmino(message: _65.MsgRevokeAllowance): _65.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _65.MsgRevokeAllowanceAminoMsg): _65.MsgRevokeAllowance;
                toAminoMsg(message: _65.MsgRevokeAllowance): _65.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _65.MsgRevokeAllowanceProtoMsg): _65.MsgRevokeAllowance;
                toProto(message: _65.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _65.MsgRevokeAllowance): _65.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _65.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_65.MsgRevokeAllowanceResponse>): _65.MsgRevokeAllowanceResponse;
                fromAmino(_: _65.MsgRevokeAllowanceResponseAmino): _65.MsgRevokeAllowanceResponse;
                toAmino(_: _65.MsgRevokeAllowanceResponse): _65.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _65.MsgRevokeAllowanceResponseAminoMsg): _65.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _65.MsgRevokeAllowanceResponse): _65.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _65.MsgRevokeAllowanceResponseProtoMsg): _65.MsgRevokeAllowanceResponse;
                toProto(message: _65.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _65.MsgRevokeAllowanceResponse): _65.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _62.BasicAllowance | _62.PeriodicAllowance | _62.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _64.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryAllowanceRequest;
                fromPartial(object: Partial<_64.QueryAllowanceRequest>): _64.QueryAllowanceRequest;
                fromAmino(object: _64.QueryAllowanceRequestAmino): _64.QueryAllowanceRequest;
                toAmino(message: _64.QueryAllowanceRequest): _64.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _64.QueryAllowanceRequestAminoMsg): _64.QueryAllowanceRequest;
                toAminoMsg(message: _64.QueryAllowanceRequest): _64.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _64.QueryAllowanceRequestProtoMsg): _64.QueryAllowanceRequest;
                toProto(message: _64.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _64.QueryAllowanceRequest): _64.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _64.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryAllowanceResponse;
                fromPartial(object: Partial<_64.QueryAllowanceResponse>): _64.QueryAllowanceResponse;
                fromAmino(object: _64.QueryAllowanceResponseAmino): _64.QueryAllowanceResponse;
                toAmino(message: _64.QueryAllowanceResponse): _64.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _64.QueryAllowanceResponseAminoMsg): _64.QueryAllowanceResponse;
                toAminoMsg(message: _64.QueryAllowanceResponse): _64.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _64.QueryAllowanceResponseProtoMsg): _64.QueryAllowanceResponse;
                toProto(message: _64.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _64.QueryAllowanceResponse): _64.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _64.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryAllowancesRequest;
                fromPartial(object: Partial<_64.QueryAllowancesRequest>): _64.QueryAllowancesRequest;
                fromAmino(object: _64.QueryAllowancesRequestAmino): _64.QueryAllowancesRequest;
                toAmino(message: _64.QueryAllowancesRequest): _64.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _64.QueryAllowancesRequestAminoMsg): _64.QueryAllowancesRequest;
                toAminoMsg(message: _64.QueryAllowancesRequest): _64.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _64.QueryAllowancesRequestProtoMsg): _64.QueryAllowancesRequest;
                toProto(message: _64.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _64.QueryAllowancesRequest): _64.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _64.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryAllowancesResponse;
                fromPartial(object: Partial<_64.QueryAllowancesResponse>): _64.QueryAllowancesResponse;
                fromAmino(object: _64.QueryAllowancesResponseAmino): _64.QueryAllowancesResponse;
                toAmino(message: _64.QueryAllowancesResponse): _64.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _64.QueryAllowancesResponseAminoMsg): _64.QueryAllowancesResponse;
                toAminoMsg(message: _64.QueryAllowancesResponse): _64.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _64.QueryAllowancesResponseProtoMsg): _64.QueryAllowancesResponse;
                toProto(message: _64.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _64.QueryAllowancesResponse): _64.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _64.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_64.QueryAllowancesByGranterRequest>): _64.QueryAllowancesByGranterRequest;
                fromAmino(object: _64.QueryAllowancesByGranterRequestAmino): _64.QueryAllowancesByGranterRequest;
                toAmino(message: _64.QueryAllowancesByGranterRequest): _64.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _64.QueryAllowancesByGranterRequestAminoMsg): _64.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _64.QueryAllowancesByGranterRequest): _64.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _64.QueryAllowancesByGranterRequestProtoMsg): _64.QueryAllowancesByGranterRequest;
                toProto(message: _64.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _64.QueryAllowancesByGranterRequest): _64.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _64.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_64.QueryAllowancesByGranterResponse>): _64.QueryAllowancesByGranterResponse;
                fromAmino(object: _64.QueryAllowancesByGranterResponseAmino): _64.QueryAllowancesByGranterResponse;
                toAmino(message: _64.QueryAllowancesByGranterResponse): _64.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _64.QueryAllowancesByGranterResponseAminoMsg): _64.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _64.QueryAllowancesByGranterResponse): _64.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _64.QueryAllowancesByGranterResponseProtoMsg): _64.QueryAllowancesByGranterResponse;
                toProto(message: _64.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _64.QueryAllowancesByGranterResponse): _64.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _62.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.BasicAllowance;
                fromPartial(object: Partial<_62.BasicAllowance>): _62.BasicAllowance;
                fromAmino(object: _62.BasicAllowanceAmino): _62.BasicAllowance;
                toAmino(message: _62.BasicAllowance): _62.BasicAllowanceAmino;
                fromAminoMsg(object: _62.BasicAllowanceAminoMsg): _62.BasicAllowance;
                toAminoMsg(message: _62.BasicAllowance): _62.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _62.BasicAllowanceProtoMsg): _62.BasicAllowance;
                toProto(message: _62.BasicAllowance): Uint8Array;
                toProtoMsg(message: _62.BasicAllowance): _62.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _62.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.PeriodicAllowance;
                fromPartial(object: Partial<_62.PeriodicAllowance>): _62.PeriodicAllowance;
                fromAmino(object: _62.PeriodicAllowanceAmino): _62.PeriodicAllowance;
                toAmino(message: _62.PeriodicAllowance): _62.PeriodicAllowanceAmino;
                fromAminoMsg(object: _62.PeriodicAllowanceAminoMsg): _62.PeriodicAllowance;
                toAminoMsg(message: _62.PeriodicAllowance): _62.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _62.PeriodicAllowanceProtoMsg): _62.PeriodicAllowance;
                toProto(message: _62.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _62.PeriodicAllowance): _62.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _62.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.AllowedMsgAllowance;
                fromPartial(object: Partial<_62.AllowedMsgAllowance>): _62.AllowedMsgAllowance;
                fromAmino(object: _62.AllowedMsgAllowanceAmino): _62.AllowedMsgAllowance;
                toAmino(message: _62.AllowedMsgAllowance): _62.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _62.AllowedMsgAllowanceAminoMsg): _62.AllowedMsgAllowance;
                toAminoMsg(message: _62.AllowedMsgAllowance): _62.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _62.AllowedMsgAllowanceProtoMsg): _62.AllowedMsgAllowance;
                toProto(message: _62.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _62.AllowedMsgAllowance): _62.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _62.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.Grant;
                fromPartial(object: Partial<_62.Grant>): _62.Grant;
                fromAmino(object: _62.GrantAmino): _62.Grant;
                toAmino(message: _62.Grant): _62.GrantAmino;
                fromAminoMsg(object: _62.GrantAminoMsg): _62.Grant;
                toAminoMsg(message: _62.Grant): _62.GrantAminoMsg;
                fromProtoMsg(message: _62.GrantProtoMsg): _62.Grant;
                toProto(message: _62.Grant): Uint8Array;
                toProtoMsg(message: _62.Grant): _62.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _198.MsgClientImpl;
            QueryClientImpl: typeof _185.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                proposal(request: _69.QueryProposalRequest): Promise<_69.QueryProposalResponse>;
                proposals(request: _69.QueryProposalsRequest): Promise<_69.QueryProposalsResponse>;
                vote(request: _69.QueryVoteRequest): Promise<_69.QueryVoteResponse>;
                votes(request: _69.QueryVotesRequest): Promise<_69.QueryVotesResponse>;
                params(request: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                deposit(request: _69.QueryDepositRequest): Promise<_69.QueryDepositResponse>;
                deposits(request: _69.QueryDepositsRequest): Promise<_69.QueryDepositsResponse>;
                tallyResult(request: _69.QueryTallyResultRequest): Promise<_69.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _170.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _70.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _70.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _70.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _70.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _70.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _70.MsgSubmitProposal;
                    };
                    vote(value: _70.MsgVote): {
                        typeUrl: string;
                        value: _70.MsgVote;
                    };
                    voteWeighted(value: _70.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _70.MsgVoteWeighted;
                    };
                    deposit(value: _70.MsgDeposit): {
                        typeUrl: string;
                        value: _70.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _70.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _70.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _70.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _70.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _70.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _70.MsgSubmitProposal;
                    };
                    vote(value: _70.MsgVote): {
                        typeUrl: string;
                        value: _70.MsgVote;
                    };
                    voteWeighted(value: _70.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _70.MsgVoteWeighted;
                    };
                    deposit(value: _70.MsgDeposit): {
                        typeUrl: string;
                        value: _70.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _70.MsgSubmitProposal) => _70.MsgSubmitProposalAmino;
                    fromAmino: (object: _70.MsgSubmitProposalAmino) => _70.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _70.MsgVote) => _70.MsgVoteAmino;
                    fromAmino: (object: _70.MsgVoteAmino) => _70.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _70.MsgVoteWeighted) => _70.MsgVoteWeightedAmino;
                    fromAmino: (object: _70.MsgVoteWeightedAmino) => _70.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _70.MsgDeposit) => _70.MsgDepositAmino;
                    fromAmino: (object: _70.MsgDepositAmino) => _70.MsgDeposit;
                };
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
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _70.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgVoteWeighted;
                fromPartial(object: Partial<_70.MsgVoteWeighted>): _70.MsgVoteWeighted;
                fromAmino(object: _70.MsgVoteWeightedAmino): _70.MsgVoteWeighted;
                toAmino(message: _70.MsgVoteWeighted): _70.MsgVoteWeightedAmino;
                fromAminoMsg(object: _70.MsgVoteWeightedAminoMsg): _70.MsgVoteWeighted;
                toAminoMsg(message: _70.MsgVoteWeighted): _70.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _70.MsgVoteWeightedProtoMsg): _70.MsgVoteWeighted;
                toProto(message: _70.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _70.MsgVoteWeighted): _70.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _70.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _70.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_70.MsgVoteWeightedResponse>): _70.MsgVoteWeightedResponse;
                fromAmino(_: _70.MsgVoteWeightedResponseAmino): _70.MsgVoteWeightedResponse;
                toAmino(_: _70.MsgVoteWeightedResponse): _70.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _70.MsgVoteWeightedResponseAminoMsg): _70.MsgVoteWeightedResponse;
                toAminoMsg(message: _70.MsgVoteWeightedResponse): _70.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _70.MsgVoteWeightedResponseProtoMsg): _70.MsgVoteWeightedResponse;
                toProto(message: _70.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _70.MsgVoteWeightedResponse): _70.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _70.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgDeposit;
                fromPartial(object: Partial<_70.MsgDeposit>): _70.MsgDeposit;
                fromAmino(object: _70.MsgDepositAmino): _70.MsgDeposit;
                toAmino(message: _70.MsgDeposit): _70.MsgDepositAmino;
                fromAminoMsg(object: _70.MsgDepositAminoMsg): _70.MsgDeposit;
                toAminoMsg(message: _70.MsgDeposit): _70.MsgDepositAminoMsg;
                fromProtoMsg(message: _70.MsgDepositProtoMsg): _70.MsgDeposit;
                toProto(message: _70.MsgDeposit): Uint8Array;
                toProtoMsg(message: _70.MsgDeposit): _70.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _70.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _70.MsgDepositResponse;
                fromPartial(_: Partial<_70.MsgDepositResponse>): _70.MsgDepositResponse;
                fromAmino(_: _70.MsgDepositResponseAmino): _70.MsgDepositResponse;
                toAmino(_: _70.MsgDepositResponse): _70.MsgDepositResponseAmino;
                fromAminoMsg(object: _70.MsgDepositResponseAminoMsg): _70.MsgDepositResponse;
                toAminoMsg(message: _70.MsgDepositResponse): _70.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _70.MsgDepositResponseProtoMsg): _70.MsgDepositResponse;
                toProto(message: _70.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _70.MsgDepositResponse): _70.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _68.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _69.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryProposalsRequest;
                fromPartial(object: Partial<_69.QueryProposalsRequest>): _69.QueryProposalsRequest;
                fromAmino(object: _69.QueryProposalsRequestAmino): _69.QueryProposalsRequest;
                toAmino(message: _69.QueryProposalsRequest): _69.QueryProposalsRequestAmino;
                fromAminoMsg(object: _69.QueryProposalsRequestAminoMsg): _69.QueryProposalsRequest;
                toAminoMsg(message: _69.QueryProposalsRequest): _69.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _69.QueryProposalsRequestProtoMsg): _69.QueryProposalsRequest;
                toProto(message: _69.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _69.QueryProposalsRequest): _69.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _69.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryProposalsResponse;
                fromPartial(object: Partial<_69.QueryProposalsResponse>): _69.QueryProposalsResponse;
                fromAmino(object: _69.QueryProposalsResponseAmino): _69.QueryProposalsResponse;
                toAmino(message: _69.QueryProposalsResponse): _69.QueryProposalsResponseAmino;
                fromAminoMsg(object: _69.QueryProposalsResponseAminoMsg): _69.QueryProposalsResponse;
                toAminoMsg(message: _69.QueryProposalsResponse): _69.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _69.QueryProposalsResponseProtoMsg): _69.QueryProposalsResponse;
                toProto(message: _69.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _69.QueryProposalsResponse): _69.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _69.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryVoteRequest;
                fromPartial(object: Partial<_69.QueryVoteRequest>): _69.QueryVoteRequest;
                fromAmino(object: _69.QueryVoteRequestAmino): _69.QueryVoteRequest;
                toAmino(message: _69.QueryVoteRequest): _69.QueryVoteRequestAmino;
                fromAminoMsg(object: _69.QueryVoteRequestAminoMsg): _69.QueryVoteRequest;
                toAminoMsg(message: _69.QueryVoteRequest): _69.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _69.QueryVoteRequestProtoMsg): _69.QueryVoteRequest;
                toProto(message: _69.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _69.QueryVoteRequest): _69.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _69.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryVoteResponse;
                fromPartial(object: Partial<_69.QueryVoteResponse>): _69.QueryVoteResponse;
                fromAmino(object: _69.QueryVoteResponseAmino): _69.QueryVoteResponse;
                toAmino(message: _69.QueryVoteResponse): _69.QueryVoteResponseAmino;
                fromAminoMsg(object: _69.QueryVoteResponseAminoMsg): _69.QueryVoteResponse;
                toAminoMsg(message: _69.QueryVoteResponse): _69.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _69.QueryVoteResponseProtoMsg): _69.QueryVoteResponse;
                toProto(message: _69.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _69.QueryVoteResponse): _69.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _69.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryVotesRequest;
                fromPartial(object: Partial<_69.QueryVotesRequest>): _69.QueryVotesRequest;
                fromAmino(object: _69.QueryVotesRequestAmino): _69.QueryVotesRequest;
                toAmino(message: _69.QueryVotesRequest): _69.QueryVotesRequestAmino;
                fromAminoMsg(object: _69.QueryVotesRequestAminoMsg): _69.QueryVotesRequest;
                toAminoMsg(message: _69.QueryVotesRequest): _69.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _69.QueryVotesRequestProtoMsg): _69.QueryVotesRequest;
                toProto(message: _69.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _69.QueryVotesRequest): _69.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _69.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryVotesResponse;
                fromPartial(object: Partial<_69.QueryVotesResponse>): _69.QueryVotesResponse;
                fromAmino(object: _69.QueryVotesResponseAmino): _69.QueryVotesResponse;
                toAmino(message: _69.QueryVotesResponse): _69.QueryVotesResponseAmino;
                fromAminoMsg(object: _69.QueryVotesResponseAminoMsg): _69.QueryVotesResponse;
                toAminoMsg(message: _69.QueryVotesResponse): _69.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _69.QueryVotesResponseProtoMsg): _69.QueryVotesResponse;
                toProto(message: _69.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _69.QueryVotesResponse): _69.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _69.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryParamsRequest;
                fromPartial(object: Partial<_69.QueryParamsRequest>): _69.QueryParamsRequest;
                fromAmino(object: _69.QueryParamsRequestAmino): _69.QueryParamsRequest;
                toAmino(message: _69.QueryParamsRequest): _69.QueryParamsRequestAmino;
                fromAminoMsg(object: _69.QueryParamsRequestAminoMsg): _69.QueryParamsRequest;
                toAminoMsg(message: _69.QueryParamsRequest): _69.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _69.QueryParamsRequestProtoMsg): _69.QueryParamsRequest;
                toProto(message: _69.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _69.QueryParamsRequest): _69.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _69.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryParamsResponse;
                fromPartial(object: Partial<_69.QueryParamsResponse>): _69.QueryParamsResponse;
                fromAmino(object: _69.QueryParamsResponseAmino): _69.QueryParamsResponse;
                toAmino(message: _69.QueryParamsResponse): _69.QueryParamsResponseAmino;
                fromAminoMsg(object: _69.QueryParamsResponseAminoMsg): _69.QueryParamsResponse;
                toAminoMsg(message: _69.QueryParamsResponse): _69.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _69.QueryParamsResponseProtoMsg): _69.QueryParamsResponse;
                toProto(message: _69.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _69.QueryParamsResponse): _69.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _69.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryDepositRequest;
                fromPartial(object: Partial<_69.QueryDepositRequest>): _69.QueryDepositRequest;
                fromAmino(object: _69.QueryDepositRequestAmino): _69.QueryDepositRequest;
                toAmino(message: _69.QueryDepositRequest): _69.QueryDepositRequestAmino;
                fromAminoMsg(object: _69.QueryDepositRequestAminoMsg): _69.QueryDepositRequest;
                toAminoMsg(message: _69.QueryDepositRequest): _69.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _69.QueryDepositRequestProtoMsg): _69.QueryDepositRequest;
                toProto(message: _69.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _69.QueryDepositRequest): _69.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _69.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryDepositResponse;
                fromPartial(object: Partial<_69.QueryDepositResponse>): _69.QueryDepositResponse;
                fromAmino(object: _69.QueryDepositResponseAmino): _69.QueryDepositResponse;
                toAmino(message: _69.QueryDepositResponse): _69.QueryDepositResponseAmino;
                fromAminoMsg(object: _69.QueryDepositResponseAminoMsg): _69.QueryDepositResponse;
                toAminoMsg(message: _69.QueryDepositResponse): _69.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _69.QueryDepositResponseProtoMsg): _69.QueryDepositResponse;
                toProto(message: _69.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _69.QueryDepositResponse): _69.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _69.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryDepositsRequest;
                fromPartial(object: Partial<_69.QueryDepositsRequest>): _69.QueryDepositsRequest;
                fromAmino(object: _69.QueryDepositsRequestAmino): _69.QueryDepositsRequest;
                toAmino(message: _69.QueryDepositsRequest): _69.QueryDepositsRequestAmino;
                fromAminoMsg(object: _69.QueryDepositsRequestAminoMsg): _69.QueryDepositsRequest;
                toAminoMsg(message: _69.QueryDepositsRequest): _69.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _69.QueryDepositsRequestProtoMsg): _69.QueryDepositsRequest;
                toProto(message: _69.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _69.QueryDepositsRequest): _69.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _69.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryDepositsResponse;
                fromPartial(object: Partial<_69.QueryDepositsResponse>): _69.QueryDepositsResponse;
                fromAmino(object: _69.QueryDepositsResponseAmino): _69.QueryDepositsResponse;
                toAmino(message: _69.QueryDepositsResponse): _69.QueryDepositsResponseAmino;
                fromAminoMsg(object: _69.QueryDepositsResponseAminoMsg): _69.QueryDepositsResponse;
                toAminoMsg(message: _69.QueryDepositsResponse): _69.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _69.QueryDepositsResponseProtoMsg): _69.QueryDepositsResponse;
                toProto(message: _69.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _69.QueryDepositsResponse): _69.QueryDepositsResponseProtoMsg;
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
            voteOptionFromJSON(object: any): _68.VoteOption;
            voteOptionToJSON(object: _68.VoteOption): string;
            proposalStatusFromJSON(object: any): _68.ProposalStatus;
            proposalStatusToJSON(object: _68.ProposalStatus): string;
            VoteOption: typeof _68.VoteOption;
            VoteOptionSDKType: typeof _68.VoteOption;
            VoteOptionAmino: typeof _68.VoteOption;
            ProposalStatus: typeof _68.ProposalStatus;
            ProposalStatusSDKType: typeof _68.ProposalStatus;
            ProposalStatusAmino: typeof _68.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _68.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.WeightedVoteOption;
                fromPartial(object: Partial<_68.WeightedVoteOption>): _68.WeightedVoteOption;
                fromAmino(object: _68.WeightedVoteOptionAmino): _68.WeightedVoteOption;
                toAmino(message: _68.WeightedVoteOption): _68.WeightedVoteOptionAmino;
                fromAminoMsg(object: _68.WeightedVoteOptionAminoMsg): _68.WeightedVoteOption;
                toAminoMsg(message: _68.WeightedVoteOption): _68.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _68.WeightedVoteOptionProtoMsg): _68.WeightedVoteOption;
                toProto(message: _68.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _68.WeightedVoteOption): _68.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _68.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.TextProposal;
                fromPartial(object: Partial<_68.TextProposal>): _68.TextProposal;
                fromAmino(object: _68.TextProposalAmino): _68.TextProposal;
                toAmino(message: _68.TextProposal): _68.TextProposalAmino;
                fromAminoMsg(object: _68.TextProposalAminoMsg): _68.TextProposal;
                toAminoMsg(message: _68.TextProposal): _68.TextProposalAminoMsg;
                fromProtoMsg(message: _68.TextProposalProtoMsg): _68.TextProposal;
                toProto(message: _68.TextProposal): Uint8Array;
                toProtoMsg(message: _68.TextProposal): _68.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _68.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.Deposit;
                fromPartial(object: Partial<_68.Deposit>): _68.Deposit;
                fromAmino(object: _68.DepositAmino): _68.Deposit;
                toAmino(message: _68.Deposit): _68.DepositAmino;
                fromAminoMsg(object: _68.DepositAminoMsg): _68.Deposit;
                toAminoMsg(message: _68.Deposit): _68.DepositAminoMsg;
                fromProtoMsg(message: _68.DepositProtoMsg): _68.Deposit;
                toProto(message: _68.Deposit): Uint8Array;
                toProtoMsg(message: _68.Deposit): _68.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _68.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.Proposal;
                fromPartial(object: Partial<_68.Proposal>): _68.Proposal;
                fromAmino(object: _68.ProposalAmino): _68.Proposal;
                toAmino(message: _68.Proposal): _68.ProposalAmino;
                fromAminoMsg(object: _68.ProposalAminoMsg): _68.Proposal;
                toAminoMsg(message: _68.Proposal): _68.ProposalAminoMsg;
                fromProtoMsg(message: _68.ProposalProtoMsg): _68.Proposal;
                toProto(message: _68.Proposal): Uint8Array;
                toProtoMsg(message: _68.Proposal): _68.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _68.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.TallyResult;
                fromPartial(object: Partial<_68.TallyResult>): _68.TallyResult;
                fromAmino(object: _68.TallyResultAmino): _68.TallyResult;
                toAmino(message: _68.TallyResult): _68.TallyResultAmino;
                fromAminoMsg(object: _68.TallyResultAminoMsg): _68.TallyResult;
                toAminoMsg(message: _68.TallyResult): _68.TallyResultAminoMsg;
                fromProtoMsg(message: _68.TallyResultProtoMsg): _68.TallyResult;
                toProto(message: _68.TallyResult): Uint8Array;
                toProtoMsg(message: _68.TallyResult): _68.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _68.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.Vote;
                fromPartial(object: Partial<_68.Vote>): _68.Vote;
                fromAmino(object: _68.VoteAmino): _68.Vote;
                toAmino(message: _68.Vote): _68.VoteAmino;
                fromAminoMsg(object: _68.VoteAminoMsg): _68.Vote;
                toAminoMsg(message: _68.Vote): _68.VoteAminoMsg;
                fromProtoMsg(message: _68.VoteProtoMsg): _68.Vote;
                toProto(message: _68.Vote): Uint8Array;
                toProtoMsg(message: _68.Vote): _68.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _68.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.DepositParams;
                fromPartial(object: Partial<_68.DepositParams>): _68.DepositParams;
                fromAmino(object: _68.DepositParamsAmino): _68.DepositParams;
                toAmino(message: _68.DepositParams): _68.DepositParamsAmino;
                fromAminoMsg(object: _68.DepositParamsAminoMsg): _68.DepositParams;
                toAminoMsg(message: _68.DepositParams): _68.DepositParamsAminoMsg;
                fromProtoMsg(message: _68.DepositParamsProtoMsg): _68.DepositParams;
                toProto(message: _68.DepositParams): Uint8Array;
                toProtoMsg(message: _68.DepositParams): _68.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _68.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.VotingParams;
                fromPartial(object: Partial<_68.VotingParams>): _68.VotingParams;
                fromAmino(object: _68.VotingParamsAmino): _68.VotingParams;
                toAmino(message: _68.VotingParams): _68.VotingParamsAmino;
                fromAminoMsg(object: _68.VotingParamsAminoMsg): _68.VotingParams;
                toAminoMsg(message: _68.VotingParams): _68.VotingParamsAminoMsg;
                fromProtoMsg(message: _68.VotingParamsProtoMsg): _68.VotingParams;
                toProto(message: _68.VotingParams): Uint8Array;
                toProtoMsg(message: _68.VotingParams): _68.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _68.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.TallyParams;
                fromPartial(object: Partial<_68.TallyParams>): _68.TallyParams;
                fromAmino(object: _68.TallyParamsAmino): _68.TallyParams;
                toAmino(message: _68.TallyParams): _68.TallyParamsAmino;
                fromAminoMsg(object: _68.TallyParamsAminoMsg): _68.TallyParams;
                toAminoMsg(message: _68.TallyParams): _68.TallyParamsAminoMsg;
                fromProtoMsg(message: _68.TallyParamsProtoMsg): _68.TallyParams;
                toProto(message: _68.TallyParams): Uint8Array;
                toProtoMsg(message: _68.TallyParams): _68.TallyParamsProtoMsg;
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
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _186.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _73.QueryParamsRequest): Promise<_73.QueryParamsResponse>;
                inflation(request?: _73.QueryInflationRequest): Promise<_73.QueryInflationResponse>;
                annualProvisions(request?: _73.QueryAnnualProvisionsRequest): Promise<_73.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _171.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _73.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _73.QueryParamsRequest;
                fromPartial(_: Partial<_73.QueryParamsRequest>): _73.QueryParamsRequest;
                fromAmino(_: _73.QueryParamsRequestAmino): _73.QueryParamsRequest;
                toAmino(_: _73.QueryParamsRequest): _73.QueryParamsRequestAmino;
                fromAminoMsg(object: _73.QueryParamsRequestAminoMsg): _73.QueryParamsRequest;
                toAminoMsg(message: _73.QueryParamsRequest): _73.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _73.QueryParamsRequestProtoMsg): _73.QueryParamsRequest;
                toProto(message: _73.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _73.QueryParamsRequest): _73.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _73.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryParamsResponse;
                fromPartial(object: Partial<_73.QueryParamsResponse>): _73.QueryParamsResponse;
                fromAmino(object: _73.QueryParamsResponseAmino): _73.QueryParamsResponse;
                toAmino(message: _73.QueryParamsResponse): _73.QueryParamsResponseAmino;
                fromAminoMsg(object: _73.QueryParamsResponseAminoMsg): _73.QueryParamsResponse;
                toAminoMsg(message: _73.QueryParamsResponse): _73.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _73.QueryParamsResponseProtoMsg): _73.QueryParamsResponse;
                toProto(message: _73.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _73.QueryParamsResponse): _73.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _73.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _73.QueryInflationRequest;
                fromPartial(_: Partial<_73.QueryInflationRequest>): _73.QueryInflationRequest;
                fromAmino(_: _73.QueryInflationRequestAmino): _73.QueryInflationRequest;
                toAmino(_: _73.QueryInflationRequest): _73.QueryInflationRequestAmino;
                fromAminoMsg(object: _73.QueryInflationRequestAminoMsg): _73.QueryInflationRequest;
                toAminoMsg(message: _73.QueryInflationRequest): _73.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _73.QueryInflationRequestProtoMsg): _73.QueryInflationRequest;
                toProto(message: _73.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _73.QueryInflationRequest): _73.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _73.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryInflationResponse;
                fromPartial(object: Partial<_73.QueryInflationResponse>): _73.QueryInflationResponse;
                fromAmino(object: _73.QueryInflationResponseAmino): _73.QueryInflationResponse;
                toAmino(message: _73.QueryInflationResponse): _73.QueryInflationResponseAmino;
                fromAminoMsg(object: _73.QueryInflationResponseAminoMsg): _73.QueryInflationResponse;
                toAminoMsg(message: _73.QueryInflationResponse): _73.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _73.QueryInflationResponseProtoMsg): _73.QueryInflationResponse;
                toProto(message: _73.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _73.QueryInflationResponse): _73.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _73.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _73.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_73.QueryAnnualProvisionsRequest>): _73.QueryAnnualProvisionsRequest;
                fromAmino(_: _73.QueryAnnualProvisionsRequestAmino): _73.QueryAnnualProvisionsRequest;
                toAmino(_: _73.QueryAnnualProvisionsRequest): _73.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _73.QueryAnnualProvisionsRequestAminoMsg): _73.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _73.QueryAnnualProvisionsRequest): _73.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _73.QueryAnnualProvisionsRequestProtoMsg): _73.QueryAnnualProvisionsRequest;
                toProto(message: _73.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _73.QueryAnnualProvisionsRequest): _73.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _73.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_73.QueryAnnualProvisionsResponse>): _73.QueryAnnualProvisionsResponse;
                fromAmino(object: _73.QueryAnnualProvisionsResponseAmino): _73.QueryAnnualProvisionsResponse;
                toAmino(message: _73.QueryAnnualProvisionsResponse): _73.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _73.QueryAnnualProvisionsResponseAminoMsg): _73.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _73.QueryAnnualProvisionsResponse): _73.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _73.QueryAnnualProvisionsResponseProtoMsg): _73.QueryAnnualProvisionsResponse;
                toProto(message: _73.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _73.QueryAnnualProvisionsResponse): _73.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _72.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.Minter;
                fromPartial(object: Partial<_72.Minter>): _72.Minter;
                fromAmino(object: _72.MinterAmino): _72.Minter;
                toAmino(message: _72.Minter): _72.MinterAmino;
                fromAminoMsg(object: _72.MinterAminoMsg): _72.Minter;
                toAminoMsg(message: _72.Minter): _72.MinterAminoMsg;
                fromProtoMsg(message: _72.MinterProtoMsg): _72.Minter;
                toProto(message: _72.Minter): Uint8Array;
                toProtoMsg(message: _72.Minter): _72.MinterProtoMsg;
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
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _187.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _172.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _75.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryParamsRequest;
                fromPartial(object: Partial<_75.QueryParamsRequest>): _75.QueryParamsRequest;
                fromAmino(object: _75.QueryParamsRequestAmino): _75.QueryParamsRequest;
                toAmino(message: _75.QueryParamsRequest): _75.QueryParamsRequestAmino;
                fromAminoMsg(object: _75.QueryParamsRequestAminoMsg): _75.QueryParamsRequest;
                toAminoMsg(message: _75.QueryParamsRequest): _75.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _75.QueryParamsRequestProtoMsg): _75.QueryParamsRequest;
                toProto(message: _75.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _75.QueryParamsRequest): _75.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _75.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryParamsResponse;
                fromPartial(object: Partial<_75.QueryParamsResponse>): _75.QueryParamsResponse;
                fromAmino(object: _75.QueryParamsResponseAmino): _75.QueryParamsResponse;
                toAmino(message: _75.QueryParamsResponse): _75.QueryParamsResponseAmino;
                fromAminoMsg(object: _75.QueryParamsResponseAminoMsg): _75.QueryParamsResponse;
                toAminoMsg(message: _75.QueryParamsResponse): _75.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _75.QueryParamsResponseProtoMsg): _75.QueryParamsResponse;
                toProto(message: _75.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _75.QueryParamsResponse): _75.QueryParamsResponseProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _74.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.ParameterChangeProposal;
                fromPartial(object: Partial<_74.ParameterChangeProposal>): _74.ParameterChangeProposal;
                fromAmino(object: _74.ParameterChangeProposalAmino): _74.ParameterChangeProposal;
                toAmino(message: _74.ParameterChangeProposal): _74.ParameterChangeProposalAmino;
                fromAminoMsg(object: _74.ParameterChangeProposalAminoMsg): _74.ParameterChangeProposal;
                toAminoMsg(message: _74.ParameterChangeProposal): _74.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _74.ParameterChangeProposalProtoMsg): _74.ParameterChangeProposal;
                toProto(message: _74.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _74.ParameterChangeProposal): _74.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _74.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.ParamChange;
                fromPartial(object: Partial<_74.ParamChange>): _74.ParamChange;
                fromAmino(object: _74.ParamChangeAmino): _74.ParamChange;
                toAmino(message: _74.ParamChange): _74.ParamChangeAmino;
                fromAminoMsg(object: _74.ParamChangeAminoMsg): _74.ParamChange;
                toAminoMsg(message: _74.ParamChange): _74.ParamChangeAminoMsg;
                fromProtoMsg(message: _74.ParamChangeProtoMsg): _74.ParamChange;
                toProto(message: _74.ParamChange): Uint8Array;
                toProtoMsg(message: _74.ParamChange): _74.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _199.MsgClientImpl;
            QueryClientImpl: typeof _188.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                signingInfo(request: _77.QuerySigningInfoRequest): Promise<_77.QuerySigningInfoResponse>;
                signingInfos(request?: _77.QuerySigningInfosRequest): Promise<_77.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _173.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _79.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _79.MsgUnjail): {
                        typeUrl: string;
                        value: _79.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _79.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _79.MsgUnjail): {
                        typeUrl: string;
                        value: _79.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _79.MsgUnjail) => _79.MsgUnjailAmino;
                    fromAmino: (object: _79.MsgUnjailAmino) => _79.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _79.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgUnjail;
                fromPartial(object: Partial<_79.MsgUnjail>): _79.MsgUnjail;
                fromAmino(object: _79.MsgUnjailAmino): _79.MsgUnjail;
                toAmino(message: _79.MsgUnjail): _79.MsgUnjailAmino;
                fromAminoMsg(object: _79.MsgUnjailAminoMsg): _79.MsgUnjail;
                toAminoMsg(message: _79.MsgUnjail): _79.MsgUnjailAminoMsg;
                fromProtoMsg(message: _79.MsgUnjailProtoMsg): _79.MsgUnjail;
                toProto(message: _79.MsgUnjail): Uint8Array;
                toProtoMsg(message: _79.MsgUnjail): _79.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _79.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _79.MsgUnjailResponse;
                fromPartial(_: Partial<_79.MsgUnjailResponse>): _79.MsgUnjailResponse;
                fromAmino(_: _79.MsgUnjailResponseAmino): _79.MsgUnjailResponse;
                toAmino(_: _79.MsgUnjailResponse): _79.MsgUnjailResponseAmino;
                fromAminoMsg(object: _79.MsgUnjailResponseAminoMsg): _79.MsgUnjailResponse;
                toAminoMsg(message: _79.MsgUnjailResponse): _79.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _79.MsgUnjailResponseProtoMsg): _79.MsgUnjailResponse;
                toProto(message: _79.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _79.MsgUnjailResponse): _79.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _78.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.ValidatorSigningInfo;
                fromPartial(object: Partial<_78.ValidatorSigningInfo>): _78.ValidatorSigningInfo;
                fromAmino(object: _78.ValidatorSigningInfoAmino): _78.ValidatorSigningInfo;
                toAmino(message: _78.ValidatorSigningInfo): _78.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _78.ValidatorSigningInfoAminoMsg): _78.ValidatorSigningInfo;
                toAminoMsg(message: _78.ValidatorSigningInfo): _78.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _78.ValidatorSigningInfoProtoMsg): _78.ValidatorSigningInfo;
                toProto(message: _78.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _78.ValidatorSigningInfo): _78.ValidatorSigningInfoProtoMsg;
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
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _77.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.QueryParamsRequest;
                fromPartial(_: Partial<_77.QueryParamsRequest>): _77.QueryParamsRequest;
                fromAmino(_: _77.QueryParamsRequestAmino): _77.QueryParamsRequest;
                toAmino(_: _77.QueryParamsRequest): _77.QueryParamsRequestAmino;
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
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _77.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QuerySigningInfoRequest;
                fromPartial(object: Partial<_77.QuerySigningInfoRequest>): _77.QuerySigningInfoRequest;
                fromAmino(object: _77.QuerySigningInfoRequestAmino): _77.QuerySigningInfoRequest;
                toAmino(message: _77.QuerySigningInfoRequest): _77.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _77.QuerySigningInfoRequestAminoMsg): _77.QuerySigningInfoRequest;
                toAminoMsg(message: _77.QuerySigningInfoRequest): _77.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _77.QuerySigningInfoRequestProtoMsg): _77.QuerySigningInfoRequest;
                toProto(message: _77.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _77.QuerySigningInfoRequest): _77.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _77.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QuerySigningInfoResponse;
                fromPartial(object: Partial<_77.QuerySigningInfoResponse>): _77.QuerySigningInfoResponse;
                fromAmino(object: _77.QuerySigningInfoResponseAmino): _77.QuerySigningInfoResponse;
                toAmino(message: _77.QuerySigningInfoResponse): _77.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _77.QuerySigningInfoResponseAminoMsg): _77.QuerySigningInfoResponse;
                toAminoMsg(message: _77.QuerySigningInfoResponse): _77.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _77.QuerySigningInfoResponseProtoMsg): _77.QuerySigningInfoResponse;
                toProto(message: _77.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _77.QuerySigningInfoResponse): _77.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _77.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QuerySigningInfosRequest;
                fromPartial(object: Partial<_77.QuerySigningInfosRequest>): _77.QuerySigningInfosRequest;
                fromAmino(object: _77.QuerySigningInfosRequestAmino): _77.QuerySigningInfosRequest;
                toAmino(message: _77.QuerySigningInfosRequest): _77.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _77.QuerySigningInfosRequestAminoMsg): _77.QuerySigningInfosRequest;
                toAminoMsg(message: _77.QuerySigningInfosRequest): _77.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _77.QuerySigningInfosRequestProtoMsg): _77.QuerySigningInfosRequest;
                toProto(message: _77.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _77.QuerySigningInfosRequest): _77.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _77.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QuerySigningInfosResponse;
                fromPartial(object: Partial<_77.QuerySigningInfosResponse>): _77.QuerySigningInfosResponse;
                fromAmino(object: _77.QuerySigningInfosResponseAmino): _77.QuerySigningInfosResponse;
                toAmino(message: _77.QuerySigningInfosResponse): _77.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _77.QuerySigningInfosResponseAminoMsg): _77.QuerySigningInfosResponse;
                toAminoMsg(message: _77.QuerySigningInfosResponse): _77.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _77.QuerySigningInfosResponseProtoMsg): _77.QuerySigningInfosResponse;
                toProto(message: _77.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _77.QuerySigningInfosResponse): _77.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _76.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.SigningInfo;
                fromPartial(object: Partial<_76.SigningInfo>): _76.SigningInfo;
                fromAmino(object: _76.SigningInfoAmino): _76.SigningInfo;
                toAmino(message: _76.SigningInfo): _76.SigningInfoAmino;
                fromAminoMsg(object: _76.SigningInfoAminoMsg): _76.SigningInfo;
                toAminoMsg(message: _76.SigningInfo): _76.SigningInfoAminoMsg;
                fromProtoMsg(message: _76.SigningInfoProtoMsg): _76.SigningInfo;
                toProto(message: _76.SigningInfo): Uint8Array;
                toProtoMsg(message: _76.SigningInfo): _76.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _76.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.ValidatorMissedBlocks;
                fromPartial(object: Partial<_76.ValidatorMissedBlocks>): _76.ValidatorMissedBlocks;
                fromAmino(object: _76.ValidatorMissedBlocksAmino): _76.ValidatorMissedBlocks;
                toAmino(message: _76.ValidatorMissedBlocks): _76.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _76.ValidatorMissedBlocksAminoMsg): _76.ValidatorMissedBlocks;
                toAminoMsg(message: _76.ValidatorMissedBlocks): _76.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _76.ValidatorMissedBlocksProtoMsg): _76.ValidatorMissedBlocks;
                toProto(message: _76.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _76.ValidatorMissedBlocks): _76.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _76.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MissedBlock;
                fromPartial(object: Partial<_76.MissedBlock>): _76.MissedBlock;
                fromAmino(object: _76.MissedBlockAmino): _76.MissedBlock;
                toAmino(message: _76.MissedBlock): _76.MissedBlockAmino;
                fromAminoMsg(object: _76.MissedBlockAminoMsg): _76.MissedBlock;
                toAminoMsg(message: _76.MissedBlock): _76.MissedBlockAminoMsg;
                fromProtoMsg(message: _76.MissedBlockProtoMsg): _76.MissedBlock;
                toProto(message: _76.MissedBlock): Uint8Array;
                toProtoMsg(message: _76.MissedBlock): _76.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _200.MsgClientImpl;
            QueryClientImpl: typeof _189.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                validators(request: _82.QueryValidatorsRequest): Promise<_82.QueryValidatorsResponse>;
                validator(request: _82.QueryValidatorRequest): Promise<_82.QueryValidatorResponse>;
                validatorDelegations(request: _82.QueryValidatorDelegationsRequest): Promise<_82.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _82.QueryValidatorUnbondingDelegationsRequest): Promise<_82.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _82.QueryDelegationRequest): Promise<_82.QueryDelegationResponse>;
                unbondingDelegation(request: _82.QueryUnbondingDelegationRequest): Promise<_82.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _82.QueryDelegatorDelegationsRequest): Promise<_82.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _82.QueryDelegatorUnbondingDelegationsRequest): Promise<_82.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _82.QueryRedelegationsRequest): Promise<_82.QueryRedelegationsResponse>;
                delegatorValidators(request: _82.QueryDelegatorValidatorsRequest): Promise<_82.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _82.QueryDelegatorValidatorRequest): Promise<_82.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _82.QueryHistoricalInfoRequest): Promise<_82.QueryHistoricalInfoResponse>;
                pool(request?: _82.QueryPoolRequest): Promise<_82.QueryPoolResponse>;
                params(request?: _82.QueryParamsRequest): Promise<_82.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _174.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _84.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _84.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _84.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _84.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _84.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _84.MsgCreateValidator): {
                        typeUrl: string;
                        value: _84.MsgCreateValidator;
                    };
                    editValidator(value: _84.MsgEditValidator): {
                        typeUrl: string;
                        value: _84.MsgEditValidator;
                    };
                    delegate(value: _84.MsgDelegate): {
                        typeUrl: string;
                        value: _84.MsgDelegate;
                    };
                    beginRedelegate(value: _84.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _84.MsgBeginRedelegate;
                    };
                    undelegate(value: _84.MsgUndelegate): {
                        typeUrl: string;
                        value: _84.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _84.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _84.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _84.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _84.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _84.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _84.MsgCreateValidator): {
                        typeUrl: string;
                        value: _84.MsgCreateValidator;
                    };
                    editValidator(value: _84.MsgEditValidator): {
                        typeUrl: string;
                        value: _84.MsgEditValidator;
                    };
                    delegate(value: _84.MsgDelegate): {
                        typeUrl: string;
                        value: _84.MsgDelegate;
                    };
                    beginRedelegate(value: _84.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _84.MsgBeginRedelegate;
                    };
                    undelegate(value: _84.MsgUndelegate): {
                        typeUrl: string;
                        value: _84.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _84.MsgCreateValidator) => _84.MsgCreateValidatorAmino;
                    fromAmino: (object: _84.MsgCreateValidatorAmino) => _84.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _84.MsgEditValidator) => _84.MsgEditValidatorAmino;
                    fromAmino: (object: _84.MsgEditValidatorAmino) => _84.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _84.MsgDelegate) => _84.MsgDelegateAmino;
                    fromAmino: (object: _84.MsgDelegateAmino) => _84.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _84.MsgBeginRedelegate) => _84.MsgBeginRedelegateAmino;
                    fromAmino: (object: _84.MsgBeginRedelegateAmino) => _84.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _84.MsgUndelegate) => _84.MsgUndelegateAmino;
                    fromAmino: (object: _84.MsgUndelegateAmino) => _84.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _84.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgCreateValidator;
                fromPartial(object: Partial<_84.MsgCreateValidator>): _84.MsgCreateValidator;
                fromAmino(object: _84.MsgCreateValidatorAmino): _84.MsgCreateValidator;
                toAmino(message: _84.MsgCreateValidator): _84.MsgCreateValidatorAmino;
                fromAminoMsg(object: _84.MsgCreateValidatorAminoMsg): _84.MsgCreateValidator;
                toAminoMsg(message: _84.MsgCreateValidator): _84.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _84.MsgCreateValidatorProtoMsg): _84.MsgCreateValidator;
                toProto(message: _84.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _84.MsgCreateValidator): _84.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _84.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _84.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_84.MsgCreateValidatorResponse>): _84.MsgCreateValidatorResponse;
                fromAmino(_: _84.MsgCreateValidatorResponseAmino): _84.MsgCreateValidatorResponse;
                toAmino(_: _84.MsgCreateValidatorResponse): _84.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _84.MsgCreateValidatorResponseAminoMsg): _84.MsgCreateValidatorResponse;
                toAminoMsg(message: _84.MsgCreateValidatorResponse): _84.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _84.MsgCreateValidatorResponseProtoMsg): _84.MsgCreateValidatorResponse;
                toProto(message: _84.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _84.MsgCreateValidatorResponse): _84.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _84.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgEditValidator;
                fromPartial(object: Partial<_84.MsgEditValidator>): _84.MsgEditValidator;
                fromAmino(object: _84.MsgEditValidatorAmino): _84.MsgEditValidator;
                toAmino(message: _84.MsgEditValidator): _84.MsgEditValidatorAmino;
                fromAminoMsg(object: _84.MsgEditValidatorAminoMsg): _84.MsgEditValidator;
                toAminoMsg(message: _84.MsgEditValidator): _84.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _84.MsgEditValidatorProtoMsg): _84.MsgEditValidator;
                toProto(message: _84.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _84.MsgEditValidator): _84.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _84.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _84.MsgEditValidatorResponse;
                fromPartial(_: Partial<_84.MsgEditValidatorResponse>): _84.MsgEditValidatorResponse;
                fromAmino(_: _84.MsgEditValidatorResponseAmino): _84.MsgEditValidatorResponse;
                toAmino(_: _84.MsgEditValidatorResponse): _84.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _84.MsgEditValidatorResponseAminoMsg): _84.MsgEditValidatorResponse;
                toAminoMsg(message: _84.MsgEditValidatorResponse): _84.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _84.MsgEditValidatorResponseProtoMsg): _84.MsgEditValidatorResponse;
                toProto(message: _84.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _84.MsgEditValidatorResponse): _84.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _84.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgDelegate;
                fromPartial(object: Partial<_84.MsgDelegate>): _84.MsgDelegate;
                fromAmino(object: _84.MsgDelegateAmino): _84.MsgDelegate;
                toAmino(message: _84.MsgDelegate): _84.MsgDelegateAmino;
                fromAminoMsg(object: _84.MsgDelegateAminoMsg): _84.MsgDelegate;
                toAminoMsg(message: _84.MsgDelegate): _84.MsgDelegateAminoMsg;
                fromProtoMsg(message: _84.MsgDelegateProtoMsg): _84.MsgDelegate;
                toProto(message: _84.MsgDelegate): Uint8Array;
                toProtoMsg(message: _84.MsgDelegate): _84.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _84.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _84.MsgDelegateResponse;
                fromPartial(_: Partial<_84.MsgDelegateResponse>): _84.MsgDelegateResponse;
                fromAmino(_: _84.MsgDelegateResponseAmino): _84.MsgDelegateResponse;
                toAmino(_: _84.MsgDelegateResponse): _84.MsgDelegateResponseAmino;
                fromAminoMsg(object: _84.MsgDelegateResponseAminoMsg): _84.MsgDelegateResponse;
                toAminoMsg(message: _84.MsgDelegateResponse): _84.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _84.MsgDelegateResponseProtoMsg): _84.MsgDelegateResponse;
                toProto(message: _84.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _84.MsgDelegateResponse): _84.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _84.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgBeginRedelegate;
                fromPartial(object: Partial<_84.MsgBeginRedelegate>): _84.MsgBeginRedelegate;
                fromAmino(object: _84.MsgBeginRedelegateAmino): _84.MsgBeginRedelegate;
                toAmino(message: _84.MsgBeginRedelegate): _84.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _84.MsgBeginRedelegateAminoMsg): _84.MsgBeginRedelegate;
                toAminoMsg(message: _84.MsgBeginRedelegate): _84.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _84.MsgBeginRedelegateProtoMsg): _84.MsgBeginRedelegate;
                toProto(message: _84.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _84.MsgBeginRedelegate): _84.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _84.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_84.MsgBeginRedelegateResponse>): _84.MsgBeginRedelegateResponse;
                fromAmino(object: _84.MsgBeginRedelegateResponseAmino): _84.MsgBeginRedelegateResponse;
                toAmino(message: _84.MsgBeginRedelegateResponse): _84.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _84.MsgBeginRedelegateResponseAminoMsg): _84.MsgBeginRedelegateResponse;
                toAminoMsg(message: _84.MsgBeginRedelegateResponse): _84.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _84.MsgBeginRedelegateResponseProtoMsg): _84.MsgBeginRedelegateResponse;
                toProto(message: _84.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _84.MsgBeginRedelegateResponse): _84.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _84.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgUndelegate;
                fromPartial(object: Partial<_84.MsgUndelegate>): _84.MsgUndelegate;
                fromAmino(object: _84.MsgUndelegateAmino): _84.MsgUndelegate;
                toAmino(message: _84.MsgUndelegate): _84.MsgUndelegateAmino;
                fromAminoMsg(object: _84.MsgUndelegateAminoMsg): _84.MsgUndelegate;
                toAminoMsg(message: _84.MsgUndelegate): _84.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _84.MsgUndelegateProtoMsg): _84.MsgUndelegate;
                toProto(message: _84.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _84.MsgUndelegate): _84.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _84.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgUndelegateResponse;
                fromPartial(object: Partial<_84.MsgUndelegateResponse>): _84.MsgUndelegateResponse;
                fromAmino(object: _84.MsgUndelegateResponseAmino): _84.MsgUndelegateResponse;
                toAmino(message: _84.MsgUndelegateResponse): _84.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _84.MsgUndelegateResponseAminoMsg): _84.MsgUndelegateResponse;
                toAminoMsg(message: _84.MsgUndelegateResponse): _84.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _84.MsgUndelegateResponseProtoMsg): _84.MsgUndelegateResponse;
                toProto(message: _84.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _84.MsgUndelegateResponse): _84.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => any;
            bondStatusFromJSON(object: any): _83.BondStatus;
            bondStatusToJSON(object: _83.BondStatus): string;
            BondStatus: typeof _83.BondStatus;
            BondStatusSDKType: typeof _83.BondStatus;
            BondStatusAmino: typeof _83.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _83.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.HistoricalInfo;
                fromPartial(object: Partial<_83.HistoricalInfo>): _83.HistoricalInfo;
                fromAmino(object: _83.HistoricalInfoAmino): _83.HistoricalInfo;
                toAmino(message: _83.HistoricalInfo): _83.HistoricalInfoAmino;
                fromAminoMsg(object: _83.HistoricalInfoAminoMsg): _83.HistoricalInfo;
                toAminoMsg(message: _83.HistoricalInfo): _83.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _83.HistoricalInfoProtoMsg): _83.HistoricalInfo;
                toProto(message: _83.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _83.HistoricalInfo): _83.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _83.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.CommissionRates;
                fromPartial(object: Partial<_83.CommissionRates>): _83.CommissionRates;
                fromAmino(object: _83.CommissionRatesAmino): _83.CommissionRates;
                toAmino(message: _83.CommissionRates): _83.CommissionRatesAmino;
                fromAminoMsg(object: _83.CommissionRatesAminoMsg): _83.CommissionRates;
                toAminoMsg(message: _83.CommissionRates): _83.CommissionRatesAminoMsg;
                fromProtoMsg(message: _83.CommissionRatesProtoMsg): _83.CommissionRates;
                toProto(message: _83.CommissionRates): Uint8Array;
                toProtoMsg(message: _83.CommissionRates): _83.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _83.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.Commission;
                fromPartial(object: Partial<_83.Commission>): _83.Commission;
                fromAmino(object: _83.CommissionAmino): _83.Commission;
                toAmino(message: _83.Commission): _83.CommissionAmino;
                fromAminoMsg(object: _83.CommissionAminoMsg): _83.Commission;
                toAminoMsg(message: _83.Commission): _83.CommissionAminoMsg;
                fromProtoMsg(message: _83.CommissionProtoMsg): _83.Commission;
                toProto(message: _83.Commission): Uint8Array;
                toProtoMsg(message: _83.Commission): _83.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _83.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.Description;
                fromPartial(object: Partial<_83.Description>): _83.Description;
                fromAmino(object: _83.DescriptionAmino): _83.Description;
                toAmino(message: _83.Description): _83.DescriptionAmino;
                fromAminoMsg(object: _83.DescriptionAminoMsg): _83.Description;
                toAminoMsg(message: _83.Description): _83.DescriptionAminoMsg;
                fromProtoMsg(message: _83.DescriptionProtoMsg): _83.Description;
                toProto(message: _83.Description): Uint8Array;
                toProtoMsg(message: _83.Description): _83.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _83.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.Validator;
                fromPartial(object: Partial<_83.Validator>): _83.Validator;
                fromAmino(object: _83.ValidatorAmino): _83.Validator;
                toAmino(message: _83.Validator): _83.ValidatorAmino;
                fromAminoMsg(object: _83.ValidatorAminoMsg): _83.Validator;
                toAminoMsg(message: _83.Validator): _83.ValidatorAminoMsg;
                fromProtoMsg(message: _83.ValidatorProtoMsg): _83.Validator;
                toProto(message: _83.Validator): Uint8Array;
                toProtoMsg(message: _83.Validator): _83.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _83.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.ValAddresses;
                fromPartial(object: Partial<_83.ValAddresses>): _83.ValAddresses;
                fromAmino(object: _83.ValAddressesAmino): _83.ValAddresses;
                toAmino(message: _83.ValAddresses): _83.ValAddressesAmino;
                fromAminoMsg(object: _83.ValAddressesAminoMsg): _83.ValAddresses;
                toAminoMsg(message: _83.ValAddresses): _83.ValAddressesAminoMsg;
                fromProtoMsg(message: _83.ValAddressesProtoMsg): _83.ValAddresses;
                toProto(message: _83.ValAddresses): Uint8Array;
                toProtoMsg(message: _83.ValAddresses): _83.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _83.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.DVPair;
                fromPartial(object: Partial<_83.DVPair>): _83.DVPair;
                fromAmino(object: _83.DVPairAmino): _83.DVPair;
                toAmino(message: _83.DVPair): _83.DVPairAmino;
                fromAminoMsg(object: _83.DVPairAminoMsg): _83.DVPair;
                toAminoMsg(message: _83.DVPair): _83.DVPairAminoMsg;
                fromProtoMsg(message: _83.DVPairProtoMsg): _83.DVPair;
                toProto(message: _83.DVPair): Uint8Array;
                toProtoMsg(message: _83.DVPair): _83.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _83.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.DVPairs;
                fromPartial(object: Partial<_83.DVPairs>): _83.DVPairs;
                fromAmino(object: _83.DVPairsAmino): _83.DVPairs;
                toAmino(message: _83.DVPairs): _83.DVPairsAmino;
                fromAminoMsg(object: _83.DVPairsAminoMsg): _83.DVPairs;
                toAminoMsg(message: _83.DVPairs): _83.DVPairsAminoMsg;
                fromProtoMsg(message: _83.DVPairsProtoMsg): _83.DVPairs;
                toProto(message: _83.DVPairs): Uint8Array;
                toProtoMsg(message: _83.DVPairs): _83.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _83.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.DVVTriplet;
                fromPartial(object: Partial<_83.DVVTriplet>): _83.DVVTriplet;
                fromAmino(object: _83.DVVTripletAmino): _83.DVVTriplet;
                toAmino(message: _83.DVVTriplet): _83.DVVTripletAmino;
                fromAminoMsg(object: _83.DVVTripletAminoMsg): _83.DVVTriplet;
                toAminoMsg(message: _83.DVVTriplet): _83.DVVTripletAminoMsg;
                fromProtoMsg(message: _83.DVVTripletProtoMsg): _83.DVVTriplet;
                toProto(message: _83.DVVTriplet): Uint8Array;
                toProtoMsg(message: _83.DVVTriplet): _83.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _83.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.DVVTriplets;
                fromPartial(object: Partial<_83.DVVTriplets>): _83.DVVTriplets;
                fromAmino(object: _83.DVVTripletsAmino): _83.DVVTriplets;
                toAmino(message: _83.DVVTriplets): _83.DVVTripletsAmino;
                fromAminoMsg(object: _83.DVVTripletsAminoMsg): _83.DVVTriplets;
                toAminoMsg(message: _83.DVVTriplets): _83.DVVTripletsAminoMsg;
                fromProtoMsg(message: _83.DVVTripletsProtoMsg): _83.DVVTriplets;
                toProto(message: _83.DVVTriplets): Uint8Array;
                toProtoMsg(message: _83.DVVTriplets): _83.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _83.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.Delegation;
                fromPartial(object: Partial<_83.Delegation>): _83.Delegation;
                fromAmino(object: _83.DelegationAmino): _83.Delegation;
                toAmino(message: _83.Delegation): _83.DelegationAmino;
                fromAminoMsg(object: _83.DelegationAminoMsg): _83.Delegation;
                toAminoMsg(message: _83.Delegation): _83.DelegationAminoMsg;
                fromProtoMsg(message: _83.DelegationProtoMsg): _83.Delegation;
                toProto(message: _83.Delegation): Uint8Array;
                toProtoMsg(message: _83.Delegation): _83.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _83.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.UnbondingDelegation;
                fromPartial(object: Partial<_83.UnbondingDelegation>): _83.UnbondingDelegation;
                fromAmino(object: _83.UnbondingDelegationAmino): _83.UnbondingDelegation;
                toAmino(message: _83.UnbondingDelegation): _83.UnbondingDelegationAmino;
                fromAminoMsg(object: _83.UnbondingDelegationAminoMsg): _83.UnbondingDelegation;
                toAminoMsg(message: _83.UnbondingDelegation): _83.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _83.UnbondingDelegationProtoMsg): _83.UnbondingDelegation;
                toProto(message: _83.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _83.UnbondingDelegation): _83.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _83.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.UnbondingDelegationEntry;
                fromPartial(object: Partial<_83.UnbondingDelegationEntry>): _83.UnbondingDelegationEntry;
                fromAmino(object: _83.UnbondingDelegationEntryAmino): _83.UnbondingDelegationEntry;
                toAmino(message: _83.UnbondingDelegationEntry): _83.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _83.UnbondingDelegationEntryAminoMsg): _83.UnbondingDelegationEntry;
                toAminoMsg(message: _83.UnbondingDelegationEntry): _83.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _83.UnbondingDelegationEntryProtoMsg): _83.UnbondingDelegationEntry;
                toProto(message: _83.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _83.UnbondingDelegationEntry): _83.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _83.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.RedelegationEntry;
                fromPartial(object: Partial<_83.RedelegationEntry>): _83.RedelegationEntry;
                fromAmino(object: _83.RedelegationEntryAmino): _83.RedelegationEntry;
                toAmino(message: _83.RedelegationEntry): _83.RedelegationEntryAmino;
                fromAminoMsg(object: _83.RedelegationEntryAminoMsg): _83.RedelegationEntry;
                toAminoMsg(message: _83.RedelegationEntry): _83.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _83.RedelegationEntryProtoMsg): _83.RedelegationEntry;
                toProto(message: _83.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _83.RedelegationEntry): _83.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _83.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.Redelegation;
                fromPartial(object: Partial<_83.Redelegation>): _83.Redelegation;
                fromAmino(object: _83.RedelegationAmino): _83.Redelegation;
                toAmino(message: _83.Redelegation): _83.RedelegationAmino;
                fromAminoMsg(object: _83.RedelegationAminoMsg): _83.Redelegation;
                toAminoMsg(message: _83.Redelegation): _83.RedelegationAminoMsg;
                fromProtoMsg(message: _83.RedelegationProtoMsg): _83.Redelegation;
                toProto(message: _83.Redelegation): Uint8Array;
                toProtoMsg(message: _83.Redelegation): _83.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _83.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.Params;
                fromPartial(object: Partial<_83.Params>): _83.Params;
                fromAmino(object: _83.ParamsAmino): _83.Params;
                toAmino(message: _83.Params): _83.ParamsAmino;
                fromAminoMsg(object: _83.ParamsAminoMsg): _83.Params;
                toAminoMsg(message: _83.Params): _83.ParamsAminoMsg;
                fromProtoMsg(message: _83.ParamsProtoMsg): _83.Params;
                toProto(message: _83.Params): Uint8Array;
                toProtoMsg(message: _83.Params): _83.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _83.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.DelegationResponse;
                fromPartial(object: Partial<_83.DelegationResponse>): _83.DelegationResponse;
                fromAmino(object: _83.DelegationResponseAmino): _83.DelegationResponse;
                toAmino(message: _83.DelegationResponse): _83.DelegationResponseAmino;
                fromAminoMsg(object: _83.DelegationResponseAminoMsg): _83.DelegationResponse;
                toAminoMsg(message: _83.DelegationResponse): _83.DelegationResponseAminoMsg;
                fromProtoMsg(message: _83.DelegationResponseProtoMsg): _83.DelegationResponse;
                toProto(message: _83.DelegationResponse): Uint8Array;
                toProtoMsg(message: _83.DelegationResponse): _83.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _83.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.RedelegationEntryResponse;
                fromPartial(object: Partial<_83.RedelegationEntryResponse>): _83.RedelegationEntryResponse;
                fromAmino(object: _83.RedelegationEntryResponseAmino): _83.RedelegationEntryResponse;
                toAmino(message: _83.RedelegationEntryResponse): _83.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _83.RedelegationEntryResponseAminoMsg): _83.RedelegationEntryResponse;
                toAminoMsg(message: _83.RedelegationEntryResponse): _83.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _83.RedelegationEntryResponseProtoMsg): _83.RedelegationEntryResponse;
                toProto(message: _83.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _83.RedelegationEntryResponse): _83.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _83.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.RedelegationResponse;
                fromPartial(object: Partial<_83.RedelegationResponse>): _83.RedelegationResponse;
                fromAmino(object: _83.RedelegationResponseAmino): _83.RedelegationResponse;
                toAmino(message: _83.RedelegationResponse): _83.RedelegationResponseAmino;
                fromAminoMsg(object: _83.RedelegationResponseAminoMsg): _83.RedelegationResponse;
                toAminoMsg(message: _83.RedelegationResponse): _83.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _83.RedelegationResponseProtoMsg): _83.RedelegationResponse;
                toProto(message: _83.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _83.RedelegationResponse): _83.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _83.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.Pool;
                fromPartial(object: Partial<_83.Pool>): _83.Pool;
                fromAmino(object: _83.PoolAmino): _83.Pool;
                toAmino(message: _83.Pool): _83.PoolAmino;
                fromAminoMsg(object: _83.PoolAminoMsg): _83.Pool;
                toAminoMsg(message: _83.Pool): _83.PoolAminoMsg;
                fromProtoMsg(message: _83.PoolProtoMsg): _83.Pool;
                toProto(message: _83.Pool): Uint8Array;
                toProtoMsg(message: _83.Pool): _83.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _82.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryValidatorsRequest;
                fromPartial(object: Partial<_82.QueryValidatorsRequest>): _82.QueryValidatorsRequest;
                fromAmino(object: _82.QueryValidatorsRequestAmino): _82.QueryValidatorsRequest;
                toAmino(message: _82.QueryValidatorsRequest): _82.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _82.QueryValidatorsRequestAminoMsg): _82.QueryValidatorsRequest;
                toAminoMsg(message: _82.QueryValidatorsRequest): _82.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _82.QueryValidatorsRequestProtoMsg): _82.QueryValidatorsRequest;
                toProto(message: _82.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryValidatorsRequest): _82.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _82.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryValidatorsResponse;
                fromPartial(object: Partial<_82.QueryValidatorsResponse>): _82.QueryValidatorsResponse;
                fromAmino(object: _82.QueryValidatorsResponseAmino): _82.QueryValidatorsResponse;
                toAmino(message: _82.QueryValidatorsResponse): _82.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _82.QueryValidatorsResponseAminoMsg): _82.QueryValidatorsResponse;
                toAminoMsg(message: _82.QueryValidatorsResponse): _82.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _82.QueryValidatorsResponseProtoMsg): _82.QueryValidatorsResponse;
                toProto(message: _82.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryValidatorsResponse): _82.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _82.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryValidatorRequest;
                fromPartial(object: Partial<_82.QueryValidatorRequest>): _82.QueryValidatorRequest;
                fromAmino(object: _82.QueryValidatorRequestAmino): _82.QueryValidatorRequest;
                toAmino(message: _82.QueryValidatorRequest): _82.QueryValidatorRequestAmino;
                fromAminoMsg(object: _82.QueryValidatorRequestAminoMsg): _82.QueryValidatorRequest;
                toAminoMsg(message: _82.QueryValidatorRequest): _82.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _82.QueryValidatorRequestProtoMsg): _82.QueryValidatorRequest;
                toProto(message: _82.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _82.QueryValidatorRequest): _82.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _82.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryValidatorResponse;
                fromPartial(object: Partial<_82.QueryValidatorResponse>): _82.QueryValidatorResponse;
                fromAmino(object: _82.QueryValidatorResponseAmino): _82.QueryValidatorResponse;
                toAmino(message: _82.QueryValidatorResponse): _82.QueryValidatorResponseAmino;
                fromAminoMsg(object: _82.QueryValidatorResponseAminoMsg): _82.QueryValidatorResponse;
                toAminoMsg(message: _82.QueryValidatorResponse): _82.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _82.QueryValidatorResponseProtoMsg): _82.QueryValidatorResponse;
                toProto(message: _82.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _82.QueryValidatorResponse): _82.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _82.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_82.QueryValidatorDelegationsRequest>): _82.QueryValidatorDelegationsRequest;
                fromAmino(object: _82.QueryValidatorDelegationsRequestAmino): _82.QueryValidatorDelegationsRequest;
                toAmino(message: _82.QueryValidatorDelegationsRequest): _82.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _82.QueryValidatorDelegationsRequestAminoMsg): _82.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _82.QueryValidatorDelegationsRequest): _82.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _82.QueryValidatorDelegationsRequestProtoMsg): _82.QueryValidatorDelegationsRequest;
                toProto(message: _82.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryValidatorDelegationsRequest): _82.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _82.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_82.QueryValidatorDelegationsResponse>): _82.QueryValidatorDelegationsResponse;
                fromAmino(object: _82.QueryValidatorDelegationsResponseAmino): _82.QueryValidatorDelegationsResponse;
                toAmino(message: _82.QueryValidatorDelegationsResponse): _82.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _82.QueryValidatorDelegationsResponseAminoMsg): _82.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _82.QueryValidatorDelegationsResponse): _82.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _82.QueryValidatorDelegationsResponseProtoMsg): _82.QueryValidatorDelegationsResponse;
                toProto(message: _82.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryValidatorDelegationsResponse): _82.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _82.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_82.QueryValidatorUnbondingDelegationsRequest>): _82.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _82.QueryValidatorUnbondingDelegationsRequestAmino): _82.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _82.QueryValidatorUnbondingDelegationsRequest): _82.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _82.QueryValidatorUnbondingDelegationsRequestAminoMsg): _82.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _82.QueryValidatorUnbondingDelegationsRequest): _82.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _82.QueryValidatorUnbondingDelegationsRequestProtoMsg): _82.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _82.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryValidatorUnbondingDelegationsRequest): _82.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _82.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_82.QueryValidatorUnbondingDelegationsResponse>): _82.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _82.QueryValidatorUnbondingDelegationsResponseAmino): _82.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _82.QueryValidatorUnbondingDelegationsResponse): _82.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _82.QueryValidatorUnbondingDelegationsResponseAminoMsg): _82.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _82.QueryValidatorUnbondingDelegationsResponse): _82.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _82.QueryValidatorUnbondingDelegationsResponseProtoMsg): _82.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _82.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryValidatorUnbondingDelegationsResponse): _82.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _82.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryDelegationRequest;
                fromPartial(object: Partial<_82.QueryDelegationRequest>): _82.QueryDelegationRequest;
                fromAmino(object: _82.QueryDelegationRequestAmino): _82.QueryDelegationRequest;
                toAmino(message: _82.QueryDelegationRequest): _82.QueryDelegationRequestAmino;
                fromAminoMsg(object: _82.QueryDelegationRequestAminoMsg): _82.QueryDelegationRequest;
                toAminoMsg(message: _82.QueryDelegationRequest): _82.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _82.QueryDelegationRequestProtoMsg): _82.QueryDelegationRequest;
                toProto(message: _82.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _82.QueryDelegationRequest): _82.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _82.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryDelegationResponse;
                fromPartial(object: Partial<_82.QueryDelegationResponse>): _82.QueryDelegationResponse;
                fromAmino(object: _82.QueryDelegationResponseAmino): _82.QueryDelegationResponse;
                toAmino(message: _82.QueryDelegationResponse): _82.QueryDelegationResponseAmino;
                fromAminoMsg(object: _82.QueryDelegationResponseAminoMsg): _82.QueryDelegationResponse;
                toAminoMsg(message: _82.QueryDelegationResponse): _82.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _82.QueryDelegationResponseProtoMsg): _82.QueryDelegationResponse;
                toProto(message: _82.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _82.QueryDelegationResponse): _82.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _82.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_82.QueryUnbondingDelegationRequest>): _82.QueryUnbondingDelegationRequest;
                fromAmino(object: _82.QueryUnbondingDelegationRequestAmino): _82.QueryUnbondingDelegationRequest;
                toAmino(message: _82.QueryUnbondingDelegationRequest): _82.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _82.QueryUnbondingDelegationRequestAminoMsg): _82.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _82.QueryUnbondingDelegationRequest): _82.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _82.QueryUnbondingDelegationRequestProtoMsg): _82.QueryUnbondingDelegationRequest;
                toProto(message: _82.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _82.QueryUnbondingDelegationRequest): _82.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _82.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_82.QueryUnbondingDelegationResponse>): _82.QueryUnbondingDelegationResponse;
                fromAmino(object: _82.QueryUnbondingDelegationResponseAmino): _82.QueryUnbondingDelegationResponse;
                toAmino(message: _82.QueryUnbondingDelegationResponse): _82.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _82.QueryUnbondingDelegationResponseAminoMsg): _82.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _82.QueryUnbondingDelegationResponse): _82.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _82.QueryUnbondingDelegationResponseProtoMsg): _82.QueryUnbondingDelegationResponse;
                toProto(message: _82.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _82.QueryUnbondingDelegationResponse): _82.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _82.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_82.QueryDelegatorDelegationsRequest>): _82.QueryDelegatorDelegationsRequest;
                fromAmino(object: _82.QueryDelegatorDelegationsRequestAmino): _82.QueryDelegatorDelegationsRequest;
                toAmino(message: _82.QueryDelegatorDelegationsRequest): _82.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _82.QueryDelegatorDelegationsRequestAminoMsg): _82.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _82.QueryDelegatorDelegationsRequest): _82.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _82.QueryDelegatorDelegationsRequestProtoMsg): _82.QueryDelegatorDelegationsRequest;
                toProto(message: _82.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryDelegatorDelegationsRequest): _82.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _82.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_82.QueryDelegatorDelegationsResponse>): _82.QueryDelegatorDelegationsResponse;
                fromAmino(object: _82.QueryDelegatorDelegationsResponseAmino): _82.QueryDelegatorDelegationsResponse;
                toAmino(message: _82.QueryDelegatorDelegationsResponse): _82.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _82.QueryDelegatorDelegationsResponseAminoMsg): _82.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _82.QueryDelegatorDelegationsResponse): _82.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _82.QueryDelegatorDelegationsResponseProtoMsg): _82.QueryDelegatorDelegationsResponse;
                toProto(message: _82.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryDelegatorDelegationsResponse): _82.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _82.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_82.QueryDelegatorUnbondingDelegationsRequest>): _82.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _82.QueryDelegatorUnbondingDelegationsRequestAmino): _82.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _82.QueryDelegatorUnbondingDelegationsRequest): _82.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _82.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _82.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _82.QueryDelegatorUnbondingDelegationsRequest): _82.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _82.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _82.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _82.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryDelegatorUnbondingDelegationsRequest): _82.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _82.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_82.QueryDelegatorUnbondingDelegationsResponse>): _82.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _82.QueryDelegatorUnbondingDelegationsResponseAmino): _82.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _82.QueryDelegatorUnbondingDelegationsResponse): _82.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _82.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _82.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _82.QueryDelegatorUnbondingDelegationsResponse): _82.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _82.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _82.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _82.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryDelegatorUnbondingDelegationsResponse): _82.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _82.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryRedelegationsRequest;
                fromPartial(object: Partial<_82.QueryRedelegationsRequest>): _82.QueryRedelegationsRequest;
                fromAmino(object: _82.QueryRedelegationsRequestAmino): _82.QueryRedelegationsRequest;
                toAmino(message: _82.QueryRedelegationsRequest): _82.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _82.QueryRedelegationsRequestAminoMsg): _82.QueryRedelegationsRequest;
                toAminoMsg(message: _82.QueryRedelegationsRequest): _82.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _82.QueryRedelegationsRequestProtoMsg): _82.QueryRedelegationsRequest;
                toProto(message: _82.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryRedelegationsRequest): _82.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _82.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryRedelegationsResponse;
                fromPartial(object: Partial<_82.QueryRedelegationsResponse>): _82.QueryRedelegationsResponse;
                fromAmino(object: _82.QueryRedelegationsResponseAmino): _82.QueryRedelegationsResponse;
                toAmino(message: _82.QueryRedelegationsResponse): _82.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _82.QueryRedelegationsResponseAminoMsg): _82.QueryRedelegationsResponse;
                toAminoMsg(message: _82.QueryRedelegationsResponse): _82.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _82.QueryRedelegationsResponseProtoMsg): _82.QueryRedelegationsResponse;
                toProto(message: _82.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryRedelegationsResponse): _82.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _82.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_82.QueryDelegatorValidatorsRequest>): _82.QueryDelegatorValidatorsRequest;
                fromAmino(object: _82.QueryDelegatorValidatorsRequestAmino): _82.QueryDelegatorValidatorsRequest;
                toAmino(message: _82.QueryDelegatorValidatorsRequest): _82.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _82.QueryDelegatorValidatorsRequestAminoMsg): _82.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _82.QueryDelegatorValidatorsRequest): _82.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _82.QueryDelegatorValidatorsRequestProtoMsg): _82.QueryDelegatorValidatorsRequest;
                toProto(message: _82.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryDelegatorValidatorsRequest): _82.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _82.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_82.QueryDelegatorValidatorsResponse>): _82.QueryDelegatorValidatorsResponse;
                fromAmino(object: _82.QueryDelegatorValidatorsResponseAmino): _82.QueryDelegatorValidatorsResponse;
                toAmino(message: _82.QueryDelegatorValidatorsResponse): _82.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _82.QueryDelegatorValidatorsResponseAminoMsg): _82.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _82.QueryDelegatorValidatorsResponse): _82.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _82.QueryDelegatorValidatorsResponseProtoMsg): _82.QueryDelegatorValidatorsResponse;
                toProto(message: _82.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryDelegatorValidatorsResponse): _82.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _82.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_82.QueryDelegatorValidatorRequest>): _82.QueryDelegatorValidatorRequest;
                fromAmino(object: _82.QueryDelegatorValidatorRequestAmino): _82.QueryDelegatorValidatorRequest;
                toAmino(message: _82.QueryDelegatorValidatorRequest): _82.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _82.QueryDelegatorValidatorRequestAminoMsg): _82.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _82.QueryDelegatorValidatorRequest): _82.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _82.QueryDelegatorValidatorRequestProtoMsg): _82.QueryDelegatorValidatorRequest;
                toProto(message: _82.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _82.QueryDelegatorValidatorRequest): _82.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _82.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_82.QueryDelegatorValidatorResponse>): _82.QueryDelegatorValidatorResponse;
                fromAmino(object: _82.QueryDelegatorValidatorResponseAmino): _82.QueryDelegatorValidatorResponse;
                toAmino(message: _82.QueryDelegatorValidatorResponse): _82.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _82.QueryDelegatorValidatorResponseAminoMsg): _82.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _82.QueryDelegatorValidatorResponse): _82.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _82.QueryDelegatorValidatorResponseProtoMsg): _82.QueryDelegatorValidatorResponse;
                toProto(message: _82.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _82.QueryDelegatorValidatorResponse): _82.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _82.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_82.QueryHistoricalInfoRequest>): _82.QueryHistoricalInfoRequest;
                fromAmino(object: _82.QueryHistoricalInfoRequestAmino): _82.QueryHistoricalInfoRequest;
                toAmino(message: _82.QueryHistoricalInfoRequest): _82.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _82.QueryHistoricalInfoRequestAminoMsg): _82.QueryHistoricalInfoRequest;
                toAminoMsg(message: _82.QueryHistoricalInfoRequest): _82.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _82.QueryHistoricalInfoRequestProtoMsg): _82.QueryHistoricalInfoRequest;
                toProto(message: _82.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _82.QueryHistoricalInfoRequest): _82.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _82.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_82.QueryHistoricalInfoResponse>): _82.QueryHistoricalInfoResponse;
                fromAmino(object: _82.QueryHistoricalInfoResponseAmino): _82.QueryHistoricalInfoResponse;
                toAmino(message: _82.QueryHistoricalInfoResponse): _82.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _82.QueryHistoricalInfoResponseAminoMsg): _82.QueryHistoricalInfoResponse;
                toAminoMsg(message: _82.QueryHistoricalInfoResponse): _82.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _82.QueryHistoricalInfoResponseProtoMsg): _82.QueryHistoricalInfoResponse;
                toProto(message: _82.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _82.QueryHistoricalInfoResponse): _82.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _82.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _82.QueryPoolRequest;
                fromPartial(_: Partial<_82.QueryPoolRequest>): _82.QueryPoolRequest;
                fromAmino(_: _82.QueryPoolRequestAmino): _82.QueryPoolRequest;
                toAmino(_: _82.QueryPoolRequest): _82.QueryPoolRequestAmino;
                fromAminoMsg(object: _82.QueryPoolRequestAminoMsg): _82.QueryPoolRequest;
                toAminoMsg(message: _82.QueryPoolRequest): _82.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _82.QueryPoolRequestProtoMsg): _82.QueryPoolRequest;
                toProto(message: _82.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _82.QueryPoolRequest): _82.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _82.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryPoolResponse;
                fromPartial(object: Partial<_82.QueryPoolResponse>): _82.QueryPoolResponse;
                fromAmino(object: _82.QueryPoolResponseAmino): _82.QueryPoolResponse;
                toAmino(message: _82.QueryPoolResponse): _82.QueryPoolResponseAmino;
                fromAminoMsg(object: _82.QueryPoolResponseAminoMsg): _82.QueryPoolResponse;
                toAminoMsg(message: _82.QueryPoolResponse): _82.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _82.QueryPoolResponseProtoMsg): _82.QueryPoolResponse;
                toProto(message: _82.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _82.QueryPoolResponse): _82.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _82.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _82.QueryParamsRequest;
                fromPartial(_: Partial<_82.QueryParamsRequest>): _82.QueryParamsRequest;
                fromAmino(_: _82.QueryParamsRequestAmino): _82.QueryParamsRequest;
                toAmino(_: _82.QueryParamsRequest): _82.QueryParamsRequestAmino;
                fromAminoMsg(object: _82.QueryParamsRequestAminoMsg): _82.QueryParamsRequest;
                toAminoMsg(message: _82.QueryParamsRequest): _82.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _82.QueryParamsRequestProtoMsg): _82.QueryParamsRequest;
                toProto(message: _82.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryParamsRequest): _82.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _82.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryParamsResponse;
                fromPartial(object: Partial<_82.QueryParamsResponse>): _82.QueryParamsResponse;
                fromAmino(object: _82.QueryParamsResponseAmino): _82.QueryParamsResponse;
                toAmino(message: _82.QueryParamsResponse): _82.QueryParamsResponseAmino;
                fromAminoMsg(object: _82.QueryParamsResponseAminoMsg): _82.QueryParamsResponse;
                toAminoMsg(message: _82.QueryParamsResponse): _82.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _82.QueryParamsResponseProtoMsg): _82.QueryParamsResponse;
                toProto(message: _82.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryParamsResponse): _82.QueryParamsResponseProtoMsg;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _81.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.LastValidatorPower;
                fromPartial(object: Partial<_81.LastValidatorPower>): _81.LastValidatorPower;
                fromAmino(object: _81.LastValidatorPowerAmino): _81.LastValidatorPower;
                toAmino(message: _81.LastValidatorPower): _81.LastValidatorPowerAmino;
                fromAminoMsg(object: _81.LastValidatorPowerAminoMsg): _81.LastValidatorPower;
                toAminoMsg(message: _81.LastValidatorPower): _81.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _81.LastValidatorPowerProtoMsg): _81.LastValidatorPower;
                toProto(message: _81.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _81.LastValidatorPower): _81.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _80.AuthorizationType;
            authorizationTypeToJSON(object: _80.AuthorizationType): string;
            AuthorizationType: typeof _80.AuthorizationType;
            AuthorizationTypeSDKType: typeof _80.AuthorizationType;
            AuthorizationTypeAmino: typeof _80.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _80.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.StakeAuthorization;
                fromPartial(object: Partial<_80.StakeAuthorization>): _80.StakeAuthorization;
                fromAmino(object: _80.StakeAuthorizationAmino): _80.StakeAuthorization;
                toAmino(message: _80.StakeAuthorization): _80.StakeAuthorizationAmino;
                fromAminoMsg(object: _80.StakeAuthorizationAminoMsg): _80.StakeAuthorization;
                toAminoMsg(message: _80.StakeAuthorization): _80.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _80.StakeAuthorizationProtoMsg): _80.StakeAuthorization;
                toProto(message: _80.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _80.StakeAuthorization): _80.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _80.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.StakeAuthorization_Validators;
                fromPartial(object: Partial<_80.StakeAuthorization_Validators>): _80.StakeAuthorization_Validators;
                fromAmino(object: _80.StakeAuthorization_ValidatorsAmino): _80.StakeAuthorization_Validators;
                toAmino(message: _80.StakeAuthorization_Validators): _80.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _80.StakeAuthorization_ValidatorsAminoMsg): _80.StakeAuthorization_Validators;
                toAminoMsg(message: _80.StakeAuthorization_Validators): _80.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _80.StakeAuthorization_ValidatorsProtoMsg): _80.StakeAuthorization_Validators;
                toProto(message: _80.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _80.StakeAuthorization_Validators): _80.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _85.SignMode;
                signModeToJSON(object: _85.SignMode): string;
                SignMode: typeof _85.SignMode;
                SignModeSDKType: typeof _85.SignMode;
                SignModeAmino: typeof _85.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _85.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.SignatureDescriptors;
                    fromPartial(object: Partial<_85.SignatureDescriptors>): _85.SignatureDescriptors;
                    fromAmino(object: _85.SignatureDescriptorsAmino): _85.SignatureDescriptors;
                    toAmino(message: _85.SignatureDescriptors): _85.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _85.SignatureDescriptorsAminoMsg): _85.SignatureDescriptors;
                    toAminoMsg(message: _85.SignatureDescriptors): _85.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _85.SignatureDescriptorsProtoMsg): _85.SignatureDescriptors;
                    toProto(message: _85.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _85.SignatureDescriptors): _85.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _85.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.SignatureDescriptor;
                    fromPartial(object: Partial<_85.SignatureDescriptor>): _85.SignatureDescriptor;
                    fromAmino(object: _85.SignatureDescriptorAmino): _85.SignatureDescriptor;
                    toAmino(message: _85.SignatureDescriptor): _85.SignatureDescriptorAmino;
                    fromAminoMsg(object: _85.SignatureDescriptorAminoMsg): _85.SignatureDescriptor;
                    toAminoMsg(message: _85.SignatureDescriptor): _85.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _85.SignatureDescriptorProtoMsg): _85.SignatureDescriptor;
                    toProto(message: _85.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _85.SignatureDescriptor): _85.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _85.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_85.SignatureDescriptor_Data>): _85.SignatureDescriptor_Data;
                    fromAmino(object: _85.SignatureDescriptor_DataAmino): _85.SignatureDescriptor_Data;
                    toAmino(message: _85.SignatureDescriptor_Data): _85.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _85.SignatureDescriptor_DataAminoMsg): _85.SignatureDescriptor_Data;
                    toAminoMsg(message: _85.SignatureDescriptor_Data): _85.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _85.SignatureDescriptor_DataProtoMsg): _85.SignatureDescriptor_Data;
                    toProto(message: _85.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _85.SignatureDescriptor_Data): _85.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _85.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_85.SignatureDescriptor_Data_Single>): _85.SignatureDescriptor_Data_Single;
                    fromAmino(object: _85.SignatureDescriptor_Data_SingleAmino): _85.SignatureDescriptor_Data_Single;
                    toAmino(message: _85.SignatureDescriptor_Data_Single): _85.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _85.SignatureDescriptor_Data_SingleAminoMsg): _85.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _85.SignatureDescriptor_Data_Single): _85.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _85.SignatureDescriptor_Data_SingleProtoMsg): _85.SignatureDescriptor_Data_Single;
                    toProto(message: _85.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _85.SignatureDescriptor_Data_Single): _85.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _85.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _85.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_85.SignatureDescriptor_Data_Multi>): _85.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _85.SignatureDescriptor_Data_MultiAmino): _85.SignatureDescriptor_Data_Multi;
                    toAmino(message: _85.SignatureDescriptor_Data_Multi): _85.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _85.SignatureDescriptor_Data_MultiAminoMsg): _85.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _85.SignatureDescriptor_Data_Multi): _85.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _85.SignatureDescriptor_Data_MultiProtoMsg): _85.SignatureDescriptor_Data_Multi;
                    toProto(message: _85.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _85.SignatureDescriptor_Data_Multi): _85.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _190.ServiceClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                simulate(request: _86.SimulateRequest): Promise<_86.SimulateResponse>;
                getTx(request: _86.GetTxRequest): Promise<_86.GetTxResponse>;
                broadcastTx(request: _86.BroadcastTxRequest): Promise<_86.BroadcastTxResponse>;
                getTxsEvent(request: _86.GetTxsEventRequest): Promise<_86.GetTxsEventResponse>;
                getBlockWithTxs(request: _86.GetBlockWithTxsRequest): Promise<_86.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _175.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _87.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.Tx;
                fromPartial(object: Partial<_87.Tx>): _87.Tx;
                fromAmino(object: _87.TxAmino): _87.Tx;
                toAmino(message: _87.Tx): _87.TxAmino;
                fromAminoMsg(object: _87.TxAminoMsg): _87.Tx;
                toAminoMsg(message: _87.Tx): _87.TxAminoMsg;
                fromProtoMsg(message: _87.TxProtoMsg): _87.Tx;
                toProto(message: _87.Tx): Uint8Array;
                toProtoMsg(message: _87.Tx): _87.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _87.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.TxRaw;
                fromPartial(object: Partial<_87.TxRaw>): _87.TxRaw;
                fromAmino(object: _87.TxRawAmino): _87.TxRaw;
                toAmino(message: _87.TxRaw): _87.TxRawAmino;
                fromAminoMsg(object: _87.TxRawAminoMsg): _87.TxRaw;
                toAminoMsg(message: _87.TxRaw): _87.TxRawAminoMsg;
                fromProtoMsg(message: _87.TxRawProtoMsg): _87.TxRaw;
                toProto(message: _87.TxRaw): Uint8Array;
                toProtoMsg(message: _87.TxRaw): _87.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _87.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.SignDoc;
                fromPartial(object: Partial<_87.SignDoc>): _87.SignDoc;
                fromAmino(object: _87.SignDocAmino): _87.SignDoc;
                toAmino(message: _87.SignDoc): _87.SignDocAmino;
                fromAminoMsg(object: _87.SignDocAminoMsg): _87.SignDoc;
                toAminoMsg(message: _87.SignDoc): _87.SignDocAminoMsg;
                fromProtoMsg(message: _87.SignDocProtoMsg): _87.SignDoc;
                toProto(message: _87.SignDoc): Uint8Array;
                toProtoMsg(message: _87.SignDoc): _87.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _87.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.TxBody;
                fromPartial(object: Partial<_87.TxBody>): _87.TxBody;
                fromAmino(object: _87.TxBodyAmino): _87.TxBody;
                toAmino(message: _87.TxBody): _87.TxBodyAmino;
                fromAminoMsg(object: _87.TxBodyAminoMsg): _87.TxBody;
                toAminoMsg(message: _87.TxBody): _87.TxBodyAminoMsg;
                fromProtoMsg(message: _87.TxBodyProtoMsg): _87.TxBody;
                toProto(message: _87.TxBody): Uint8Array;
                toProtoMsg(message: _87.TxBody): _87.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _87.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.AuthInfo;
                fromPartial(object: Partial<_87.AuthInfo>): _87.AuthInfo;
                fromAmino(object: _87.AuthInfoAmino): _87.AuthInfo;
                toAmino(message: _87.AuthInfo): _87.AuthInfoAmino;
                fromAminoMsg(object: _87.AuthInfoAminoMsg): _87.AuthInfo;
                toAminoMsg(message: _87.AuthInfo): _87.AuthInfoAminoMsg;
                fromProtoMsg(message: _87.AuthInfoProtoMsg): _87.AuthInfo;
                toProto(message: _87.AuthInfo): Uint8Array;
                toProtoMsg(message: _87.AuthInfo): _87.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _87.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.SignerInfo;
                fromPartial(object: Partial<_87.SignerInfo>): _87.SignerInfo;
                fromAmino(object: _87.SignerInfoAmino): _87.SignerInfo;
                toAmino(message: _87.SignerInfo): _87.SignerInfoAmino;
                fromAminoMsg(object: _87.SignerInfoAminoMsg): _87.SignerInfo;
                toAminoMsg(message: _87.SignerInfo): _87.SignerInfoAminoMsg;
                fromProtoMsg(message: _87.SignerInfoProtoMsg): _87.SignerInfo;
                toProto(message: _87.SignerInfo): Uint8Array;
                toProtoMsg(message: _87.SignerInfo): _87.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _87.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.ModeInfo;
                fromPartial(object: Partial<_87.ModeInfo>): _87.ModeInfo;
                fromAmino(object: _87.ModeInfoAmino): _87.ModeInfo;
                toAmino(message: _87.ModeInfo): _87.ModeInfoAmino;
                fromAminoMsg(object: _87.ModeInfoAminoMsg): _87.ModeInfo;
                toAminoMsg(message: _87.ModeInfo): _87.ModeInfoAminoMsg;
                fromProtoMsg(message: _87.ModeInfoProtoMsg): _87.ModeInfo;
                toProto(message: _87.ModeInfo): Uint8Array;
                toProtoMsg(message: _87.ModeInfo): _87.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _87.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.ModeInfo_Single;
                fromPartial(object: Partial<_87.ModeInfo_Single>): _87.ModeInfo_Single;
                fromAmino(object: _87.ModeInfo_SingleAmino): _87.ModeInfo_Single;
                toAmino(message: _87.ModeInfo_Single): _87.ModeInfo_SingleAmino;
                fromAminoMsg(object: _87.ModeInfo_SingleAminoMsg): _87.ModeInfo_Single;
                toAminoMsg(message: _87.ModeInfo_Single): _87.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _87.ModeInfo_SingleProtoMsg): _87.ModeInfo_Single;
                toProto(message: _87.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _87.ModeInfo_Single): _87.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _87.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.ModeInfo_Multi;
                fromPartial(object: Partial<_87.ModeInfo_Multi>): _87.ModeInfo_Multi;
                fromAmino(object: _87.ModeInfo_MultiAmino): _87.ModeInfo_Multi;
                toAmino(message: _87.ModeInfo_Multi): _87.ModeInfo_MultiAmino;
                fromAminoMsg(object: _87.ModeInfo_MultiAminoMsg): _87.ModeInfo_Multi;
                toAminoMsg(message: _87.ModeInfo_Multi): _87.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _87.ModeInfo_MultiProtoMsg): _87.ModeInfo_Multi;
                toProto(message: _87.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _87.ModeInfo_Multi): _87.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _87.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.Fee;
                fromPartial(object: Partial<_87.Fee>): _87.Fee;
                fromAmino(object: _87.FeeAmino): _87.Fee;
                toAmino(message: _87.Fee): _87.FeeAmino;
                fromAminoMsg(object: _87.FeeAminoMsg): _87.Fee;
                toAminoMsg(message: _87.Fee): _87.FeeAminoMsg;
                fromProtoMsg(message: _87.FeeProtoMsg): _87.Fee;
                toProto(message: _87.Fee): Uint8Array;
                toProtoMsg(message: _87.Fee): _87.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _86.OrderBy;
            orderByToJSON(object: _86.OrderBy): string;
            broadcastModeFromJSON(object: any): _86.BroadcastMode;
            broadcastModeToJSON(object: _86.BroadcastMode): string;
            OrderBy: typeof _86.OrderBy;
            OrderBySDKType: typeof _86.OrderBy;
            OrderByAmino: typeof _86.OrderBy;
            BroadcastMode: typeof _86.BroadcastMode;
            BroadcastModeSDKType: typeof _86.BroadcastMode;
            BroadcastModeAmino: typeof _86.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _86.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.GetTxsEventRequest;
                fromPartial(object: Partial<_86.GetTxsEventRequest>): _86.GetTxsEventRequest;
                fromAmino(object: _86.GetTxsEventRequestAmino): _86.GetTxsEventRequest;
                toAmino(message: _86.GetTxsEventRequest): _86.GetTxsEventRequestAmino;
                fromAminoMsg(object: _86.GetTxsEventRequestAminoMsg): _86.GetTxsEventRequest;
                toAminoMsg(message: _86.GetTxsEventRequest): _86.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _86.GetTxsEventRequestProtoMsg): _86.GetTxsEventRequest;
                toProto(message: _86.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _86.GetTxsEventRequest): _86.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _86.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.GetTxsEventResponse;
                fromPartial(object: Partial<_86.GetTxsEventResponse>): _86.GetTxsEventResponse;
                fromAmino(object: _86.GetTxsEventResponseAmino): _86.GetTxsEventResponse;
                toAmino(message: _86.GetTxsEventResponse): _86.GetTxsEventResponseAmino;
                fromAminoMsg(object: _86.GetTxsEventResponseAminoMsg): _86.GetTxsEventResponse;
                toAminoMsg(message: _86.GetTxsEventResponse): _86.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _86.GetTxsEventResponseProtoMsg): _86.GetTxsEventResponse;
                toProto(message: _86.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _86.GetTxsEventResponse): _86.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _86.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.BroadcastTxRequest;
                fromPartial(object: Partial<_86.BroadcastTxRequest>): _86.BroadcastTxRequest;
                fromAmino(object: _86.BroadcastTxRequestAmino): _86.BroadcastTxRequest;
                toAmino(message: _86.BroadcastTxRequest): _86.BroadcastTxRequestAmino;
                fromAminoMsg(object: _86.BroadcastTxRequestAminoMsg): _86.BroadcastTxRequest;
                toAminoMsg(message: _86.BroadcastTxRequest): _86.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _86.BroadcastTxRequestProtoMsg): _86.BroadcastTxRequest;
                toProto(message: _86.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _86.BroadcastTxRequest): _86.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _86.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.BroadcastTxResponse;
                fromPartial(object: Partial<_86.BroadcastTxResponse>): _86.BroadcastTxResponse;
                fromAmino(object: _86.BroadcastTxResponseAmino): _86.BroadcastTxResponse;
                toAmino(message: _86.BroadcastTxResponse): _86.BroadcastTxResponseAmino;
                fromAminoMsg(object: _86.BroadcastTxResponseAminoMsg): _86.BroadcastTxResponse;
                toAminoMsg(message: _86.BroadcastTxResponse): _86.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _86.BroadcastTxResponseProtoMsg): _86.BroadcastTxResponse;
                toProto(message: _86.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _86.BroadcastTxResponse): _86.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _86.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.SimulateRequest;
                fromPartial(object: Partial<_86.SimulateRequest>): _86.SimulateRequest;
                fromAmino(object: _86.SimulateRequestAmino): _86.SimulateRequest;
                toAmino(message: _86.SimulateRequest): _86.SimulateRequestAmino;
                fromAminoMsg(object: _86.SimulateRequestAminoMsg): _86.SimulateRequest;
                toAminoMsg(message: _86.SimulateRequest): _86.SimulateRequestAminoMsg;
                fromProtoMsg(message: _86.SimulateRequestProtoMsg): _86.SimulateRequest;
                toProto(message: _86.SimulateRequest): Uint8Array;
                toProtoMsg(message: _86.SimulateRequest): _86.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _86.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.SimulateResponse;
                fromPartial(object: Partial<_86.SimulateResponse>): _86.SimulateResponse;
                fromAmino(object: _86.SimulateResponseAmino): _86.SimulateResponse;
                toAmino(message: _86.SimulateResponse): _86.SimulateResponseAmino;
                fromAminoMsg(object: _86.SimulateResponseAminoMsg): _86.SimulateResponse;
                toAminoMsg(message: _86.SimulateResponse): _86.SimulateResponseAminoMsg;
                fromProtoMsg(message: _86.SimulateResponseProtoMsg): _86.SimulateResponse;
                toProto(message: _86.SimulateResponse): Uint8Array;
                toProtoMsg(message: _86.SimulateResponse): _86.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _86.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.GetTxRequest;
                fromPartial(object: Partial<_86.GetTxRequest>): _86.GetTxRequest;
                fromAmino(object: _86.GetTxRequestAmino): _86.GetTxRequest;
                toAmino(message: _86.GetTxRequest): _86.GetTxRequestAmino;
                fromAminoMsg(object: _86.GetTxRequestAminoMsg): _86.GetTxRequest;
                toAminoMsg(message: _86.GetTxRequest): _86.GetTxRequestAminoMsg;
                fromProtoMsg(message: _86.GetTxRequestProtoMsg): _86.GetTxRequest;
                toProto(message: _86.GetTxRequest): Uint8Array;
                toProtoMsg(message: _86.GetTxRequest): _86.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _86.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.GetTxResponse;
                fromPartial(object: Partial<_86.GetTxResponse>): _86.GetTxResponse;
                fromAmino(object: _86.GetTxResponseAmino): _86.GetTxResponse;
                toAmino(message: _86.GetTxResponse): _86.GetTxResponseAmino;
                fromAminoMsg(object: _86.GetTxResponseAminoMsg): _86.GetTxResponse;
                toAminoMsg(message: _86.GetTxResponse): _86.GetTxResponseAminoMsg;
                fromProtoMsg(message: _86.GetTxResponseProtoMsg): _86.GetTxResponse;
                toProto(message: _86.GetTxResponse): Uint8Array;
                toProtoMsg(message: _86.GetTxResponse): _86.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _86.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_86.GetBlockWithTxsRequest>): _86.GetBlockWithTxsRequest;
                fromAmino(object: _86.GetBlockWithTxsRequestAmino): _86.GetBlockWithTxsRequest;
                toAmino(message: _86.GetBlockWithTxsRequest): _86.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _86.GetBlockWithTxsRequestAminoMsg): _86.GetBlockWithTxsRequest;
                toAminoMsg(message: _86.GetBlockWithTxsRequest): _86.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _86.GetBlockWithTxsRequestProtoMsg): _86.GetBlockWithTxsRequest;
                toProto(message: _86.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _86.GetBlockWithTxsRequest): _86.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _86.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_86.GetBlockWithTxsResponse>): _86.GetBlockWithTxsResponse;
                fromAmino(object: _86.GetBlockWithTxsResponseAmino): _86.GetBlockWithTxsResponse;
                toAmino(message: _86.GetBlockWithTxsResponse): _86.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _86.GetBlockWithTxsResponseAminoMsg): _86.GetBlockWithTxsResponse;
                toAminoMsg(message: _86.GetBlockWithTxsResponse): _86.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _86.GetBlockWithTxsResponseProtoMsg): _86.GetBlockWithTxsResponse;
                toProto(message: _86.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _86.GetBlockWithTxsResponse): _86.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _191.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                currentPlan(request?: _88.QueryCurrentPlanRequest): Promise<_88.QueryCurrentPlanResponse>;
                appliedPlan(request: _88.QueryAppliedPlanRequest): Promise<_88.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _88.QueryUpgradedConsensusStateRequest): Promise<_88.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _88.QueryModuleVersionsRequest): Promise<_88.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _176.LCDQueryClient;
            Plan: {
                typeUrl: string;
                encode(message: _89.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.Plan;
                fromPartial(object: Partial<_89.Plan>): _89.Plan;
                fromAmino(object: _89.PlanAmino): _89.Plan;
                toAmino(message: _89.Plan): _89.PlanAmino;
                fromAminoMsg(object: _89.PlanAminoMsg): _89.Plan;
                toAminoMsg(message: _89.Plan): _89.PlanAminoMsg;
                fromProtoMsg(message: _89.PlanProtoMsg): _89.Plan;
                toProto(message: _89.Plan): Uint8Array;
                toProtoMsg(message: _89.Plan): _89.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _89.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_89.SoftwareUpgradeProposal>): _89.SoftwareUpgradeProposal;
                fromAmino(object: _89.SoftwareUpgradeProposalAmino): _89.SoftwareUpgradeProposal;
                toAmino(message: _89.SoftwareUpgradeProposal): _89.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _89.SoftwareUpgradeProposalAminoMsg): _89.SoftwareUpgradeProposal;
                toAminoMsg(message: _89.SoftwareUpgradeProposal): _89.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _89.SoftwareUpgradeProposalProtoMsg): _89.SoftwareUpgradeProposal;
                toProto(message: _89.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _89.SoftwareUpgradeProposal): _89.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _89.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_89.CancelSoftwareUpgradeProposal>): _89.CancelSoftwareUpgradeProposal;
                fromAmino(object: _89.CancelSoftwareUpgradeProposalAmino): _89.CancelSoftwareUpgradeProposal;
                toAmino(message: _89.CancelSoftwareUpgradeProposal): _89.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _89.CancelSoftwareUpgradeProposalAminoMsg): _89.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _89.CancelSoftwareUpgradeProposal): _89.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _89.CancelSoftwareUpgradeProposalProtoMsg): _89.CancelSoftwareUpgradeProposal;
                toProto(message: _89.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _89.CancelSoftwareUpgradeProposal): _89.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _89.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.ModuleVersion;
                fromPartial(object: Partial<_89.ModuleVersion>): _89.ModuleVersion;
                fromAmino(object: _89.ModuleVersionAmino): _89.ModuleVersion;
                toAmino(message: _89.ModuleVersion): _89.ModuleVersionAmino;
                fromAminoMsg(object: _89.ModuleVersionAminoMsg): _89.ModuleVersion;
                toAminoMsg(message: _89.ModuleVersion): _89.ModuleVersionAminoMsg;
                fromProtoMsg(message: _89.ModuleVersionProtoMsg): _89.ModuleVersion;
                toProto(message: _89.ModuleVersion): Uint8Array;
                toProtoMsg(message: _89.ModuleVersion): _89.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _88.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _88.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_88.QueryCurrentPlanRequest>): _88.QueryCurrentPlanRequest;
                fromAmino(_: _88.QueryCurrentPlanRequestAmino): _88.QueryCurrentPlanRequest;
                toAmino(_: _88.QueryCurrentPlanRequest): _88.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _88.QueryCurrentPlanRequestAminoMsg): _88.QueryCurrentPlanRequest;
                toAminoMsg(message: _88.QueryCurrentPlanRequest): _88.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _88.QueryCurrentPlanRequestProtoMsg): _88.QueryCurrentPlanRequest;
                toProto(message: _88.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _88.QueryCurrentPlanRequest): _88.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _88.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_88.QueryCurrentPlanResponse>): _88.QueryCurrentPlanResponse;
                fromAmino(object: _88.QueryCurrentPlanResponseAmino): _88.QueryCurrentPlanResponse;
                toAmino(message: _88.QueryCurrentPlanResponse): _88.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _88.QueryCurrentPlanResponseAminoMsg): _88.QueryCurrentPlanResponse;
                toAminoMsg(message: _88.QueryCurrentPlanResponse): _88.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _88.QueryCurrentPlanResponseProtoMsg): _88.QueryCurrentPlanResponse;
                toProto(message: _88.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _88.QueryCurrentPlanResponse): _88.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _88.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_88.QueryAppliedPlanRequest>): _88.QueryAppliedPlanRequest;
                fromAmino(object: _88.QueryAppliedPlanRequestAmino): _88.QueryAppliedPlanRequest;
                toAmino(message: _88.QueryAppliedPlanRequest): _88.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _88.QueryAppliedPlanRequestAminoMsg): _88.QueryAppliedPlanRequest;
                toAminoMsg(message: _88.QueryAppliedPlanRequest): _88.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _88.QueryAppliedPlanRequestProtoMsg): _88.QueryAppliedPlanRequest;
                toProto(message: _88.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _88.QueryAppliedPlanRequest): _88.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _88.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_88.QueryAppliedPlanResponse>): _88.QueryAppliedPlanResponse;
                fromAmino(object: _88.QueryAppliedPlanResponseAmino): _88.QueryAppliedPlanResponse;
                toAmino(message: _88.QueryAppliedPlanResponse): _88.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _88.QueryAppliedPlanResponseAminoMsg): _88.QueryAppliedPlanResponse;
                toAminoMsg(message: _88.QueryAppliedPlanResponse): _88.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _88.QueryAppliedPlanResponseProtoMsg): _88.QueryAppliedPlanResponse;
                toProto(message: _88.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _88.QueryAppliedPlanResponse): _88.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _88.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_88.QueryUpgradedConsensusStateRequest>): _88.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _88.QueryUpgradedConsensusStateRequestAmino): _88.QueryUpgradedConsensusStateRequest;
                toAmino(message: _88.QueryUpgradedConsensusStateRequest): _88.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _88.QueryUpgradedConsensusStateRequestAminoMsg): _88.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _88.QueryUpgradedConsensusStateRequest): _88.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _88.QueryUpgradedConsensusStateRequestProtoMsg): _88.QueryUpgradedConsensusStateRequest;
                toProto(message: _88.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _88.QueryUpgradedConsensusStateRequest): _88.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _88.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_88.QueryUpgradedConsensusStateResponse>): _88.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _88.QueryUpgradedConsensusStateResponseAmino): _88.QueryUpgradedConsensusStateResponse;
                toAmino(message: _88.QueryUpgradedConsensusStateResponse): _88.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _88.QueryUpgradedConsensusStateResponseAminoMsg): _88.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _88.QueryUpgradedConsensusStateResponse): _88.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _88.QueryUpgradedConsensusStateResponseProtoMsg): _88.QueryUpgradedConsensusStateResponse;
                toProto(message: _88.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _88.QueryUpgradedConsensusStateResponse): _88.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _88.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_88.QueryModuleVersionsRequest>): _88.QueryModuleVersionsRequest;
                fromAmino(object: _88.QueryModuleVersionsRequestAmino): _88.QueryModuleVersionsRequest;
                toAmino(message: _88.QueryModuleVersionsRequest): _88.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _88.QueryModuleVersionsRequestAminoMsg): _88.QueryModuleVersionsRequest;
                toAminoMsg(message: _88.QueryModuleVersionsRequest): _88.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _88.QueryModuleVersionsRequestProtoMsg): _88.QueryModuleVersionsRequest;
                toProto(message: _88.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _88.QueryModuleVersionsRequest): _88.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _88.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_88.QueryModuleVersionsResponse>): _88.QueryModuleVersionsResponse;
                fromAmino(object: _88.QueryModuleVersionsResponseAmino): _88.QueryModuleVersionsResponse;
                toAmino(message: _88.QueryModuleVersionsResponse): _88.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _88.QueryModuleVersionsResponseAminoMsg): _88.QueryModuleVersionsResponse;
                toAminoMsg(message: _88.QueryModuleVersionsResponse): _88.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _88.QueryModuleVersionsResponseProtoMsg): _88.QueryModuleVersionsResponse;
                toProto(message: _88.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _88.QueryModuleVersionsResponse): _88.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _201.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _90.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _90.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _90.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _90.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _90.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _90.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _90.MsgCreateVestingAccount) => _90.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _90.MsgCreateVestingAccountAmino) => _90.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _91.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.BaseVestingAccount;
                fromPartial(object: Partial<_91.BaseVestingAccount>): _91.BaseVestingAccount;
                fromAmino(object: _91.BaseVestingAccountAmino): _91.BaseVestingAccount;
                toAmino(message: _91.BaseVestingAccount): _91.BaseVestingAccountAmino;
                fromAminoMsg(object: _91.BaseVestingAccountAminoMsg): _91.BaseVestingAccount;
                toAminoMsg(message: _91.BaseVestingAccount): _91.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _91.BaseVestingAccountProtoMsg): _91.BaseVestingAccount;
                toProto(message: _91.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _91.BaseVestingAccount): _91.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _91.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.ContinuousVestingAccount;
                fromPartial(object: Partial<_91.ContinuousVestingAccount>): _91.ContinuousVestingAccount;
                fromAmino(object: _91.ContinuousVestingAccountAmino): _91.ContinuousVestingAccount;
                toAmino(message: _91.ContinuousVestingAccount): _91.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _91.ContinuousVestingAccountAminoMsg): _91.ContinuousVestingAccount;
                toAminoMsg(message: _91.ContinuousVestingAccount): _91.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _91.ContinuousVestingAccountProtoMsg): _91.ContinuousVestingAccount;
                toProto(message: _91.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _91.ContinuousVestingAccount): _91.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _91.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.DelayedVestingAccount;
                fromPartial(object: Partial<_91.DelayedVestingAccount>): _91.DelayedVestingAccount;
                fromAmino(object: _91.DelayedVestingAccountAmino): _91.DelayedVestingAccount;
                toAmino(message: _91.DelayedVestingAccount): _91.DelayedVestingAccountAmino;
                fromAminoMsg(object: _91.DelayedVestingAccountAminoMsg): _91.DelayedVestingAccount;
                toAminoMsg(message: _91.DelayedVestingAccount): _91.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _91.DelayedVestingAccountProtoMsg): _91.DelayedVestingAccount;
                toProto(message: _91.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _91.DelayedVestingAccount): _91.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _91.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.Period;
                fromPartial(object: Partial<_91.Period>): _91.Period;
                fromAmino(object: _91.PeriodAmino): _91.Period;
                toAmino(message: _91.Period): _91.PeriodAmino;
                fromAminoMsg(object: _91.PeriodAminoMsg): _91.Period;
                toAminoMsg(message: _91.Period): _91.PeriodAminoMsg;
                fromProtoMsg(message: _91.PeriodProtoMsg): _91.Period;
                toProto(message: _91.Period): Uint8Array;
                toProtoMsg(message: _91.Period): _91.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _91.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.PeriodicVestingAccount;
                fromPartial(object: Partial<_91.PeriodicVestingAccount>): _91.PeriodicVestingAccount;
                fromAmino(object: _91.PeriodicVestingAccountAmino): _91.PeriodicVestingAccount;
                toAmino(message: _91.PeriodicVestingAccount): _91.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _91.PeriodicVestingAccountAminoMsg): _91.PeriodicVestingAccount;
                toAminoMsg(message: _91.PeriodicVestingAccount): _91.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _91.PeriodicVestingAccountProtoMsg): _91.PeriodicVestingAccount;
                toProto(message: _91.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _91.PeriodicVestingAccount): _91.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _91.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.PermanentLockedAccount;
                fromPartial(object: Partial<_91.PermanentLockedAccount>): _91.PermanentLockedAccount;
                fromAmino(object: _91.PermanentLockedAccountAmino): _91.PermanentLockedAccount;
                toAmino(message: _91.PermanentLockedAccount): _91.PermanentLockedAccountAmino;
                fromAminoMsg(object: _91.PermanentLockedAccountAminoMsg): _91.PermanentLockedAccount;
                toAminoMsg(message: _91.PermanentLockedAccount): _91.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _91.PermanentLockedAccountProtoMsg): _91.PermanentLockedAccount;
                toProto(message: _91.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _91.PermanentLockedAccount): _91.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _90.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgCreateVestingAccount;
                fromPartial(object: Partial<_90.MsgCreateVestingAccount>): _90.MsgCreateVestingAccount;
                fromAmino(object: _90.MsgCreateVestingAccountAmino): _90.MsgCreateVestingAccount;
                toAmino(message: _90.MsgCreateVestingAccount): _90.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _90.MsgCreateVestingAccountAminoMsg): _90.MsgCreateVestingAccount;
                toAminoMsg(message: _90.MsgCreateVestingAccount): _90.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _90.MsgCreateVestingAccountProtoMsg): _90.MsgCreateVestingAccount;
                toProto(message: _90.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _90.MsgCreateVestingAccount): _90.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _90.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_90.MsgCreateVestingAccountResponse>): _90.MsgCreateVestingAccountResponse;
                fromAmino(_: _90.MsgCreateVestingAccountResponseAmino): _90.MsgCreateVestingAccountResponse;
                toAmino(_: _90.MsgCreateVestingAccountResponse): _90.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _90.MsgCreateVestingAccountResponseAminoMsg): _90.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _90.MsgCreateVestingAccountResponse): _90.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _90.MsgCreateVestingAccountResponseProtoMsg): _90.MsgCreateVestingAccountResponse;
                toProto(message: _90.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _90.MsgCreateVestingAccountResponse): _90.MsgCreateVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _192.MsgClientImpl;
                };
                bank: {
                    v1beta1: _193.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _194.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _195.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _196.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _197.MsgClientImpl;
                };
                gov: {
                    v1beta1: _198.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _199.MsgClientImpl;
                };
                staking: {
                    v1beta1: _200.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _201.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: any;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _24.QueryAccountsRequest): Promise<_24.QueryAccountsResponse>;
                        account(request: _24.QueryAccountRequest): Promise<_24.QueryAccountResponse>;
                        params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                        moduleAccountByName(request: _24.QueryModuleAccountByNameRequest): Promise<_24.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _28.QueryGrantsRequest): Promise<_28.QueryGrantsResponse>;
                        granterGrants(request: _28.QueryGranterGrantsRequest): Promise<_28.QueryGranterGrantsResponse>;
                        granteeGrants(request: _28.QueryGranteeGrantsRequest): Promise<_28.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _33.QueryBalanceRequest): Promise<_33.QueryBalanceResponse>;
                        allBalances(request: _33.QueryAllBalancesRequest): Promise<_33.QueryAllBalancesResponse>;
                        spendableBalances(request: _33.QuerySpendableBalancesRequest): Promise<_33.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _33.QueryTotalSupplyRequest): Promise<_33.QueryTotalSupplyResponse>;
                        supplyOf(request: _33.QuerySupplyOfRequest): Promise<_33.QuerySupplyOfResponse>;
                        params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
                        denomMetadata(request: _33.QueryDenomMetadataRequest): Promise<_33.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _33.QueryDenomsMetadataRequest): Promise<_33.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _37.ConfigRequest): Promise<_37.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _44.GetNodeInfoRequest): Promise<_44.GetNodeInfoResponse>;
                            getSyncing(request?: _44.GetSyncingRequest): Promise<_44.GetSyncingResponse>;
                            getLatestBlock(request?: _44.GetLatestBlockRequest): Promise<_44.GetLatestBlockResponse>;
                            getBlockByHeight(request: _44.GetBlockByHeightRequest): Promise<_44.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _44.GetLatestValidatorSetRequest): Promise<_44.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _44.GetValidatorSetByHeightRequest): Promise<_44.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _56.QueryValidatorOutstandingRewardsRequest): Promise<_56.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _56.QueryValidatorCommissionRequest): Promise<_56.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _56.QueryValidatorSlashesRequest): Promise<_56.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _56.QueryDelegationRewardsRequest): Promise<_56.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _56.QueryDelegationTotalRewardsRequest): Promise<_56.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _56.QueryDelegatorValidatorsRequest): Promise<_56.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _56.QueryDelegatorWithdrawAddressRequest): Promise<_56.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _56.QueryCommunityPoolRequest): Promise<_56.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _60.QueryEvidenceRequest): Promise<_60.QueryEvidenceResponse>;
                        allEvidence(request?: _60.QueryAllEvidenceRequest): Promise<_60.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _64.QueryAllowanceRequest): Promise<_64.QueryAllowanceResponse>;
                        allowances(request: _64.QueryAllowancesRequest): Promise<_64.QueryAllowancesResponse>;
                        allowancesByGranter(request: _64.QueryAllowancesByGranterRequest): Promise<_64.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _69.QueryProposalRequest): Promise<_69.QueryProposalResponse>;
                        proposals(request: _69.QueryProposalsRequest): Promise<_69.QueryProposalsResponse>;
                        vote(request: _69.QueryVoteRequest): Promise<_69.QueryVoteResponse>;
                        votes(request: _69.QueryVotesRequest): Promise<_69.QueryVotesResponse>;
                        params(request: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                        deposit(request: _69.QueryDepositRequest): Promise<_69.QueryDepositResponse>;
                        deposits(request: _69.QueryDepositsRequest): Promise<_69.QueryDepositsResponse>;
                        tallyResult(request: _69.QueryTallyResultRequest): Promise<_69.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _73.QueryParamsRequest): Promise<_73.QueryParamsResponse>;
                        inflation(request?: _73.QueryInflationRequest): Promise<_73.QueryInflationResponse>;
                        annualProvisions(request?: _73.QueryAnnualProvisionsRequest): Promise<_73.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                        signingInfo(request: _77.QuerySigningInfoRequest): Promise<_77.QuerySigningInfoResponse>;
                        signingInfos(request?: _77.QuerySigningInfosRequest): Promise<_77.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _82.QueryValidatorsRequest): Promise<_82.QueryValidatorsResponse>;
                        validator(request: _82.QueryValidatorRequest): Promise<_82.QueryValidatorResponse>;
                        validatorDelegations(request: _82.QueryValidatorDelegationsRequest): Promise<_82.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _82.QueryValidatorUnbondingDelegationsRequest): Promise<_82.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _82.QueryDelegationRequest): Promise<_82.QueryDelegationResponse>;
                        unbondingDelegation(request: _82.QueryUnbondingDelegationRequest): Promise<_82.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _82.QueryDelegatorDelegationsRequest): Promise<_82.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _82.QueryDelegatorUnbondingDelegationsRequest): Promise<_82.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _82.QueryRedelegationsRequest): Promise<_82.QueryRedelegationsResponse>;
                        delegatorValidators(request: _82.QueryDelegatorValidatorsRequest): Promise<_82.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _82.QueryDelegatorValidatorRequest): Promise<_82.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _82.QueryHistoricalInfoRequest): Promise<_82.QueryHistoricalInfoResponse>;
                        pool(request?: _82.QueryPoolRequest): Promise<_82.QueryPoolResponse>;
                        params(request?: _82.QueryParamsRequest): Promise<_82.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _86.SimulateRequest): Promise<_86.SimulateResponse>;
                        getTx(request: _86.GetTxRequest): Promise<_86.GetTxResponse>;
                        broadcastTx(request: _86.BroadcastTxRequest): Promise<_86.BroadcastTxResponse>;
                        getTxsEvent(request: _86.GetTxsEventRequest): Promise<_86.GetTxsEventResponse>;
                        getBlockWithTxs(request: _86.GetBlockWithTxsRequest): Promise<_86.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _88.QueryCurrentPlanRequest): Promise<_88.QueryCurrentPlanResponse>;
                        appliedPlan(request: _88.QueryAppliedPlanRequest): Promise<_88.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _88.QueryUpgradedConsensusStateRequest): Promise<_88.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _88.QueryModuleVersionsRequest): Promise<_88.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _162.LCDQueryClient;
                };
                authz: {
                    v1beta1: _163.LCDQueryClient;
                };
                bank: {
                    v1beta1: _164.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _165.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _166.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _167.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _168.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _169.LCDQueryClient;
                };
                gov: {
                    v1beta1: _170.LCDQueryClient;
                };
                mint: {
                    v1beta1: _171.LCDQueryClient;
                };
                params: {
                    v1beta1: _172.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _173.LCDQueryClient;
                };
                staking: {
                    v1beta1: _174.LCDQueryClient;
                };
                tx: {
                    v1beta1: _175.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _176.LCDQueryClient;
                };
            };
        }>;
    };
}
