import * as _15 from "./auth/v1beta1/auth";
import * as _16 from "./auth/v1beta1/genesis";
import * as _17 from "./auth/v1beta1/query";
import * as _18 from "./authz/v1beta1/authz";
import * as _19 from "./authz/v1beta1/event";
import * as _20 from "./authz/v1beta1/genesis";
import * as _21 from "./authz/v1beta1/query";
import * as _22 from "./authz/v1beta1/tx";
import * as _23 from "./bank/v1beta1/authz";
import * as _24 from "./bank/v1beta1/bank";
import * as _25 from "./bank/v1beta1/genesis";
import * as _26 from "./bank/v1beta1/query";
import * as _27 from "./bank/v1beta1/tx";
import * as _28 from "./base/abci/v1beta1/abci";
import * as _29 from "./base/kv/v1beta1/kv";
import * as _30 from "./base/node/v1beta1/query";
import * as _31 from "./base/query/v1beta1/pagination";
import * as _32 from "./base/reflection/v1beta1/reflection";
import * as _33 from "./base/reflection/v2alpha1/reflection";
import * as _34 from "./base/snapshots/v1beta1/snapshot";
import * as _35 from "./base/store/v1beta1/commit_info";
import * as _36 from "./base/store/v1beta1/listening";
import * as _37 from "./base/tendermint/v1beta1/query";
import * as _38 from "./base/v1beta1/coin";
import * as _39 from "./capability/v1beta1/capability";
import * as _40 from "./capability/v1beta1/genesis";
import * as _41 from "./crisis/v1beta1/genesis";
import * as _42 from "./crisis/v1beta1/tx";
import * as _43 from "./crypto/ed25519/keys";
import * as _44 from "./crypto/multisig/keys";
import * as _45 from "./crypto/secp256k1/keys";
import * as _46 from "./crypto/secp256r1/keys";
import * as _47 from "./distribution/v1beta1/distribution";
import * as _48 from "./distribution/v1beta1/genesis";
import * as _49 from "./distribution/v1beta1/query";
import * as _50 from "./distribution/v1beta1/tx";
import * as _51 from "./evidence/v1beta1/evidence";
import * as _52 from "./evidence/v1beta1/genesis";
import * as _53 from "./evidence/v1beta1/query";
import * as _54 from "./evidence/v1beta1/tx";
import * as _55 from "./feegrant/v1beta1/feegrant";
import * as _56 from "./feegrant/v1beta1/genesis";
import * as _57 from "./feegrant/v1beta1/query";
import * as _58 from "./feegrant/v1beta1/tx";
import * as _59 from "./genutil/v1beta1/genesis";
import * as _60 from "./gov/v1beta1/genesis";
import * as _61 from "./gov/v1beta1/gov";
import * as _62 from "./gov/v1beta1/query";
import * as _63 from "./gov/v1beta1/tx";
import * as _64 from "./mint/v1beta1/genesis";
import * as _65 from "./mint/v1beta1/mint";
import * as _66 from "./mint/v1beta1/query";
import * as _67 from "./params/v1beta1/params";
import * as _68 from "./params/v1beta1/query";
import * as _69 from "./slashing/v1beta1/genesis";
import * as _70 from "./slashing/v1beta1/query";
import * as _71 from "./slashing/v1beta1/slashing";
import * as _72 from "./slashing/v1beta1/tx";
import * as _73 from "./staking/v1beta1/authz";
import * as _74 from "./staking/v1beta1/genesis";
import * as _75 from "./staking/v1beta1/query";
import * as _76 from "./staking/v1beta1/staking";
import * as _77 from "./staking/v1beta1/tx";
import * as _78 from "./tx/signing/v1beta1/signing";
import * as _79 from "./tx/v1beta1/service";
import * as _80 from "./tx/v1beta1/tx";
import * as _81 from "./upgrade/v1beta1/query";
import * as _82 from "./upgrade/v1beta1/upgrade";
import * as _83 from "./vesting/v1beta1/tx";
import * as _84 from "./vesting/v1beta1/vesting";
import * as _196 from "./auth/v1beta1/query.lcd";
import * as _197 from "./authz/v1beta1/query.lcd";
import * as _198 from "./bank/v1beta1/query.lcd";
import * as _199 from "./base/node/v1beta1/query.lcd";
import * as _200 from "./base/tendermint/v1beta1/query.lcd";
import * as _201 from "./distribution/v1beta1/query.lcd";
import * as _202 from "./evidence/v1beta1/query.lcd";
import * as _203 from "./feegrant/v1beta1/query.lcd";
import * as _204 from "./gov/v1beta1/query.lcd";
import * as _205 from "./mint/v1beta1/query.lcd";
import * as _206 from "./params/v1beta1/query.lcd";
import * as _207 from "./slashing/v1beta1/query.lcd";
import * as _208 from "./staking/v1beta1/query.lcd";
import * as _209 from "./tx/v1beta1/service.lcd";
import * as _210 from "./upgrade/v1beta1/query.lcd";
import * as _211 from "./auth/v1beta1/query.rpc.Query";
import * as _212 from "./authz/v1beta1/query.rpc.Query";
import * as _213 from "./bank/v1beta1/query.rpc.Query";
import * as _214 from "./base/node/v1beta1/query.rpc.Service";
import * as _215 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _216 from "./distribution/v1beta1/query.rpc.Query";
import * as _217 from "./evidence/v1beta1/query.rpc.Query";
import * as _218 from "./feegrant/v1beta1/query.rpc.Query";
import * as _219 from "./gov/v1beta1/query.rpc.Query";
import * as _220 from "./mint/v1beta1/query.rpc.Query";
import * as _221 from "./params/v1beta1/query.rpc.Query";
import * as _222 from "./slashing/v1beta1/query.rpc.Query";
import * as _223 from "./staking/v1beta1/query.rpc.Query";
import * as _224 from "./tx/v1beta1/service.rpc.Service";
import * as _225 from "./upgrade/v1beta1/query.rpc.Query";
import * as _226 from "./authz/v1beta1/tx.rpc.msg";
import * as _227 from "./bank/v1beta1/tx.rpc.msg";
import * as _228 from "./crisis/v1beta1/tx.rpc.msg";
import * as _229 from "./distribution/v1beta1/tx.rpc.msg";
import * as _230 from "./evidence/v1beta1/tx.rpc.msg";
import * as _231 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _232 from "./gov/v1beta1/tx.rpc.msg";
import * as _233 from "./slashing/v1beta1/tx.rpc.msg";
import * as _234 from "./staking/v1beta1/tx.rpc.msg";
import * as _235 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _211.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _17.QueryAccountsRequest): Promise<_17.QueryAccountsResponse>;
                account(request: _17.QueryAccountRequest): Promise<_17.QueryAccountResponse>;
                params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                moduleAccountByName(request: _17.QueryModuleAccountByNameRequest): Promise<_17.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _196.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _17.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAccountsRequest;
                fromPartial(object: Partial<_17.QueryAccountsRequest>): _17.QueryAccountsRequest;
                fromAmino(object: _17.QueryAccountsRequestAmino): _17.QueryAccountsRequest;
                toAmino(message: _17.QueryAccountsRequest): _17.QueryAccountsRequestAmino;
                fromAminoMsg(object: _17.QueryAccountsRequestAminoMsg): _17.QueryAccountsRequest;
                toAminoMsg(message: _17.QueryAccountsRequest): _17.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _17.QueryAccountsRequestProtoMsg): _17.QueryAccountsRequest;
                toProto(message: _17.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryAccountsRequest): _17.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _17.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAccountsResponse;
                fromPartial(object: Partial<_17.QueryAccountsResponse>): _17.QueryAccountsResponse;
                fromAmino(object: _17.QueryAccountsResponseAmino): _17.QueryAccountsResponse;
                toAmino(message: _17.QueryAccountsResponse): _17.QueryAccountsResponseAmino;
                fromAminoMsg(object: _17.QueryAccountsResponseAminoMsg): _17.QueryAccountsResponse;
                toAminoMsg(message: _17.QueryAccountsResponse): _17.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _17.QueryAccountsResponseProtoMsg): _17.QueryAccountsResponse;
                toProto(message: _17.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryAccountsResponse): _17.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _17.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAccountRequest;
                fromPartial(object: Partial<_17.QueryAccountRequest>): _17.QueryAccountRequest;
                fromAmino(object: _17.QueryAccountRequestAmino): _17.QueryAccountRequest;
                toAmino(message: _17.QueryAccountRequest): _17.QueryAccountRequestAmino;
                fromAminoMsg(object: _17.QueryAccountRequestAminoMsg): _17.QueryAccountRequest;
                toAminoMsg(message: _17.QueryAccountRequest): _17.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _17.QueryAccountRequestProtoMsg): _17.QueryAccountRequest;
                toProto(message: _17.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _17.QueryAccountRequest): _17.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _17.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAccountResponse;
                fromPartial(object: Partial<_17.QueryAccountResponse>): _17.QueryAccountResponse;
                fromAmino(object: _17.QueryAccountResponseAmino): _17.QueryAccountResponse;
                toAmino(message: _17.QueryAccountResponse): _17.QueryAccountResponseAmino;
                fromAminoMsg(object: _17.QueryAccountResponseAminoMsg): _17.QueryAccountResponse;
                toAminoMsg(message: _17.QueryAccountResponse): _17.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _17.QueryAccountResponseProtoMsg): _17.QueryAccountResponse;
                toProto(message: _17.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _17.QueryAccountResponse): _17.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _17.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.QueryParamsRequest;
                fromPartial(_: Partial<_17.QueryParamsRequest>): _17.QueryParamsRequest;
                fromAmino(_: _17.QueryParamsRequestAmino): _17.QueryParamsRequest;
                toAmino(_: _17.QueryParamsRequest): _17.QueryParamsRequestAmino;
                fromAminoMsg(object: _17.QueryParamsRequestAminoMsg): _17.QueryParamsRequest;
                toAminoMsg(message: _17.QueryParamsRequest): _17.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _17.QueryParamsRequestProtoMsg): _17.QueryParamsRequest;
                toProto(message: _17.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryParamsRequest): _17.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _17.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryParamsResponse;
                fromPartial(object: Partial<_17.QueryParamsResponse>): _17.QueryParamsResponse;
                fromAmino(object: _17.QueryParamsResponseAmino): _17.QueryParamsResponse;
                toAmino(message: _17.QueryParamsResponse): _17.QueryParamsResponseAmino;
                fromAminoMsg(object: _17.QueryParamsResponseAminoMsg): _17.QueryParamsResponse;
                toAminoMsg(message: _17.QueryParamsResponse): _17.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _17.QueryParamsResponseProtoMsg): _17.QueryParamsResponse;
                toProto(message: _17.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryParamsResponse): _17.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _17.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_17.QueryModuleAccountByNameRequest>): _17.QueryModuleAccountByNameRequest;
                fromAmino(object: _17.QueryModuleAccountByNameRequestAmino): _17.QueryModuleAccountByNameRequest;
                toAmino(message: _17.QueryModuleAccountByNameRequest): _17.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _17.QueryModuleAccountByNameRequestAminoMsg): _17.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _17.QueryModuleAccountByNameRequest): _17.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _17.QueryModuleAccountByNameRequestProtoMsg): _17.QueryModuleAccountByNameRequest;
                toProto(message: _17.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _17.QueryModuleAccountByNameRequest): _17.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _17.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_17.QueryModuleAccountByNameResponse>): _17.QueryModuleAccountByNameResponse;
                fromAmino(object: _17.QueryModuleAccountByNameResponseAmino): _17.QueryModuleAccountByNameResponse;
                toAmino(message: _17.QueryModuleAccountByNameResponse): _17.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _17.QueryModuleAccountByNameResponseAminoMsg): _17.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _17.QueryModuleAccountByNameResponse): _17.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _17.QueryModuleAccountByNameResponseProtoMsg): _17.QueryModuleAccountByNameResponse;
                toProto(message: _17.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _17.QueryModuleAccountByNameResponse): _17.QueryModuleAccountByNameResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _15.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _15.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            BaseAccount: {
                typeUrl: string;
                encode(message: _15.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.BaseAccount;
                fromPartial(object: Partial<_15.BaseAccount>): _15.BaseAccount;
                fromAmino(object: _15.BaseAccountAmino): _15.BaseAccount;
                toAmino(message: _15.BaseAccount): _15.BaseAccountAmino;
                fromAminoMsg(object: _15.BaseAccountAminoMsg): _15.BaseAccount;
                toAminoMsg(message: _15.BaseAccount): _15.BaseAccountAminoMsg;
                fromProtoMsg(message: _15.BaseAccountProtoMsg): _15.BaseAccount;
                toProto(message: _15.BaseAccount): Uint8Array;
                toProtoMsg(message: _15.BaseAccount): _15.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _15.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.ModuleAccount;
                fromPartial(object: Partial<_15.ModuleAccount>): _15.ModuleAccount;
                fromAmino(object: _15.ModuleAccountAmino): _15.ModuleAccount;
                toAmino(message: _15.ModuleAccount): _15.ModuleAccountAmino;
                fromAminoMsg(object: _15.ModuleAccountAminoMsg): _15.ModuleAccount;
                toAminoMsg(message: _15.ModuleAccount): _15.ModuleAccountAminoMsg;
                fromProtoMsg(message: _15.ModuleAccountProtoMsg): _15.ModuleAccount;
                toProto(message: _15.ModuleAccount): Uint8Array;
                toProtoMsg(message: _15.ModuleAccount): _15.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _15.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.Params;
                fromPartial(object: Partial<_15.Params>): _15.Params;
                fromAmino(object: _15.ParamsAmino): _15.Params;
                toAmino(message: _15.Params): _15.ParamsAmino;
                fromAminoMsg(object: _15.ParamsAminoMsg): _15.Params;
                toAminoMsg(message: _15.Params): _15.ParamsAminoMsg;
                fromProtoMsg(message: _15.ParamsProtoMsg): _15.Params;
                toProto(message: _15.Params): Uint8Array;
                toProtoMsg(message: _15.Params): _15.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _226.MsgClientImpl;
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _21.QueryGrantsRequest): Promise<_21.QueryGrantsResponse>;
                granterGrants(request: _21.QueryGranterGrantsRequest): Promise<_21.QueryGranterGrantsResponse>;
                granteeGrants(request: _21.QueryGranteeGrantsRequest): Promise<_21.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _197.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _22.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _22.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _22.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _22.MsgGrant): {
                        typeUrl: string;
                        value: _22.MsgGrant;
                    };
                    exec(value: _22.MsgExec): {
                        typeUrl: string;
                        value: _22.MsgExec;
                    };
                    revoke(value: _22.MsgRevoke): {
                        typeUrl: string;
                        value: _22.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _22.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _22.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _22.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _22.MsgGrant): {
                        typeUrl: string;
                        value: _22.MsgGrant;
                    };
                    exec(value: _22.MsgExec): {
                        typeUrl: string;
                        value: _22.MsgExec;
                    };
                    revoke(value: _22.MsgRevoke): {
                        typeUrl: string;
                        value: _22.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _22.MsgGrant) => _22.MsgGrantAmino;
                    fromAmino: (object: _22.MsgGrantAmino) => _22.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _22.MsgExec) => _22.MsgExecAmino;
                    fromAmino: (object: _22.MsgExecAmino) => _22.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _22.MsgRevoke) => _22.MsgRevokeAmino;
                    fromAmino: (object: _22.MsgRevokeAmino) => _22.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _22.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MsgGrant;
                fromPartial(object: Partial<_22.MsgGrant>): _22.MsgGrant;
                fromAmino(object: _22.MsgGrantAmino): _22.MsgGrant;
                toAmino(message: _22.MsgGrant): _22.MsgGrantAmino;
                fromAminoMsg(object: _22.MsgGrantAminoMsg): _22.MsgGrant;
                toAminoMsg(message: _22.MsgGrant): _22.MsgGrantAminoMsg;
                fromProtoMsg(message: _22.MsgGrantProtoMsg): _22.MsgGrant;
                toProto(message: _22.MsgGrant): Uint8Array;
                toProtoMsg(message: _22.MsgGrant): _22.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _22.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MsgExecResponse;
                fromPartial(object: Partial<_22.MsgExecResponse>): _22.MsgExecResponse;
                fromAmino(object: _22.MsgExecResponseAmino): _22.MsgExecResponse;
                toAmino(message: _22.MsgExecResponse): _22.MsgExecResponseAmino;
                fromAminoMsg(object: _22.MsgExecResponseAminoMsg): _22.MsgExecResponse;
                toAminoMsg(message: _22.MsgExecResponse): _22.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _22.MsgExecResponseProtoMsg): _22.MsgExecResponse;
                toProto(message: _22.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _22.MsgExecResponse): _22.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _22.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MsgExec;
                fromPartial(object: Partial<_22.MsgExec>): _22.MsgExec;
                fromAmino(object: _22.MsgExecAmino): _22.MsgExec;
                toAmino(message: _22.MsgExec): _22.MsgExecAmino;
                fromAminoMsg(object: _22.MsgExecAminoMsg): _22.MsgExec;
                toAminoMsg(message: _22.MsgExec): _22.MsgExecAminoMsg;
                fromProtoMsg(message: _22.MsgExecProtoMsg): _22.MsgExec;
                toProto(message: _22.MsgExec): Uint8Array;
                toProtoMsg(message: _22.MsgExec): _22.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _22.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.MsgGrantResponse;
                fromPartial(_: Partial<_22.MsgGrantResponse>): _22.MsgGrantResponse;
                fromAmino(_: _22.MsgGrantResponseAmino): _22.MsgGrantResponse;
                toAmino(_: _22.MsgGrantResponse): _22.MsgGrantResponseAmino;
                fromAminoMsg(object: _22.MsgGrantResponseAminoMsg): _22.MsgGrantResponse;
                toAminoMsg(message: _22.MsgGrantResponse): _22.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _22.MsgGrantResponseProtoMsg): _22.MsgGrantResponse;
                toProto(message: _22.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _22.MsgGrantResponse): _22.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _22.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MsgRevoke;
                fromPartial(object: Partial<_22.MsgRevoke>): _22.MsgRevoke;
                fromAmino(object: _22.MsgRevokeAmino): _22.MsgRevoke;
                toAmino(message: _22.MsgRevoke): _22.MsgRevokeAmino;
                fromAminoMsg(object: _22.MsgRevokeAminoMsg): _22.MsgRevoke;
                toAminoMsg(message: _22.MsgRevoke): _22.MsgRevokeAminoMsg;
                fromProtoMsg(message: _22.MsgRevokeProtoMsg): _22.MsgRevoke;
                toProto(message: _22.MsgRevoke): Uint8Array;
                toProtoMsg(message: _22.MsgRevoke): _22.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _22.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.MsgRevokeResponse;
                fromPartial(_: Partial<_22.MsgRevokeResponse>): _22.MsgRevokeResponse;
                fromAmino(_: _22.MsgRevokeResponseAmino): _22.MsgRevokeResponse;
                toAmino(_: _22.MsgRevokeResponse): _22.MsgRevokeResponseAmino;
                fromAminoMsg(object: _22.MsgRevokeResponseAminoMsg): _22.MsgRevokeResponse;
                toAminoMsg(message: _22.MsgRevokeResponse): _22.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _22.MsgRevokeResponseProtoMsg): _22.MsgRevokeResponse;
                toProto(message: _22.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _22.MsgRevokeResponse): _22.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _21.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryGrantsRequest;
                fromPartial(object: Partial<_21.QueryGrantsRequest>): _21.QueryGrantsRequest;
                fromAmino(object: _21.QueryGrantsRequestAmino): _21.QueryGrantsRequest;
                toAmino(message: _21.QueryGrantsRequest): _21.QueryGrantsRequestAmino;
                fromAminoMsg(object: _21.QueryGrantsRequestAminoMsg): _21.QueryGrantsRequest;
                toAminoMsg(message: _21.QueryGrantsRequest): _21.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _21.QueryGrantsRequestProtoMsg): _21.QueryGrantsRequest;
                toProto(message: _21.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _21.QueryGrantsRequest): _21.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _21.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryGrantsResponse;
                fromPartial(object: Partial<_21.QueryGrantsResponse>): _21.QueryGrantsResponse;
                fromAmino(object: _21.QueryGrantsResponseAmino): _21.QueryGrantsResponse;
                toAmino(message: _21.QueryGrantsResponse): _21.QueryGrantsResponseAmino;
                fromAminoMsg(object: _21.QueryGrantsResponseAminoMsg): _21.QueryGrantsResponse;
                toAminoMsg(message: _21.QueryGrantsResponse): _21.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _21.QueryGrantsResponseProtoMsg): _21.QueryGrantsResponse;
                toProto(message: _21.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _21.QueryGrantsResponse): _21.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _21.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_21.QueryGranterGrantsRequest>): _21.QueryGranterGrantsRequest;
                fromAmino(object: _21.QueryGranterGrantsRequestAmino): _21.QueryGranterGrantsRequest;
                toAmino(message: _21.QueryGranterGrantsRequest): _21.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _21.QueryGranterGrantsRequestAminoMsg): _21.QueryGranterGrantsRequest;
                toAminoMsg(message: _21.QueryGranterGrantsRequest): _21.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _21.QueryGranterGrantsRequestProtoMsg): _21.QueryGranterGrantsRequest;
                toProto(message: _21.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _21.QueryGranterGrantsRequest): _21.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _21.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_21.QueryGranterGrantsResponse>): _21.QueryGranterGrantsResponse;
                fromAmino(object: _21.QueryGranterGrantsResponseAmino): _21.QueryGranterGrantsResponse;
                toAmino(message: _21.QueryGranterGrantsResponse): _21.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _21.QueryGranterGrantsResponseAminoMsg): _21.QueryGranterGrantsResponse;
                toAminoMsg(message: _21.QueryGranterGrantsResponse): _21.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _21.QueryGranterGrantsResponseProtoMsg): _21.QueryGranterGrantsResponse;
                toProto(message: _21.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _21.QueryGranterGrantsResponse): _21.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _21.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_21.QueryGranteeGrantsRequest>): _21.QueryGranteeGrantsRequest;
                fromAmino(object: _21.QueryGranteeGrantsRequestAmino): _21.QueryGranteeGrantsRequest;
                toAmino(message: _21.QueryGranteeGrantsRequest): _21.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _21.QueryGranteeGrantsRequestAminoMsg): _21.QueryGranteeGrantsRequest;
                toAminoMsg(message: _21.QueryGranteeGrantsRequest): _21.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _21.QueryGranteeGrantsRequestProtoMsg): _21.QueryGranteeGrantsRequest;
                toProto(message: _21.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _21.QueryGranteeGrantsRequest): _21.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _21.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_21.QueryGranteeGrantsResponse>): _21.QueryGranteeGrantsResponse;
                fromAmino(object: _21.QueryGranteeGrantsResponseAmino): _21.QueryGranteeGrantsResponse;
                toAmino(message: _21.QueryGranteeGrantsResponse): _21.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _21.QueryGranteeGrantsResponseAminoMsg): _21.QueryGranteeGrantsResponse;
                toAminoMsg(message: _21.QueryGranteeGrantsResponse): _21.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _21.QueryGranteeGrantsResponseProtoMsg): _21.QueryGranteeGrantsResponse;
                toProto(message: _21.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _21.QueryGranteeGrantsResponse): _21.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _20.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.GenesisState;
                fromPartial(object: Partial<_20.GenesisState>): _20.GenesisState;
                fromAmino(object: _20.GenesisStateAmino): _20.GenesisState;
                toAmino(message: _20.GenesisState): _20.GenesisStateAmino;
                fromAminoMsg(object: _20.GenesisStateAminoMsg): _20.GenesisState;
                toAminoMsg(message: _20.GenesisState): _20.GenesisStateAminoMsg;
                fromProtoMsg(message: _20.GenesisStateProtoMsg): _20.GenesisState;
                toProto(message: _20.GenesisState): Uint8Array;
                toProtoMsg(message: _20.GenesisState): _20.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _19.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.EventGrant;
                fromPartial(object: Partial<_19.EventGrant>): _19.EventGrant;
                fromAmino(object: _19.EventGrantAmino): _19.EventGrant;
                toAmino(message: _19.EventGrant): _19.EventGrantAmino;
                fromAminoMsg(object: _19.EventGrantAminoMsg): _19.EventGrant;
                toAminoMsg(message: _19.EventGrant): _19.EventGrantAminoMsg;
                fromProtoMsg(message: _19.EventGrantProtoMsg): _19.EventGrant;
                toProto(message: _19.EventGrant): Uint8Array;
                toProtoMsg(message: _19.EventGrant): _19.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _19.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.EventRevoke;
                fromPartial(object: Partial<_19.EventRevoke>): _19.EventRevoke;
                fromAmino(object: _19.EventRevokeAmino): _19.EventRevoke;
                toAmino(message: _19.EventRevoke): _19.EventRevokeAmino;
                fromAminoMsg(object: _19.EventRevokeAminoMsg): _19.EventRevoke;
                toAminoMsg(message: _19.EventRevoke): _19.EventRevokeAminoMsg;
                fromProtoMsg(message: _19.EventRevokeProtoMsg): _19.EventRevoke;
                toProto(message: _19.EventRevoke): Uint8Array;
                toProtoMsg(message: _19.EventRevoke): _19.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _18.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.GenericAuthorization;
                fromPartial(object: Partial<_18.GenericAuthorization>): _18.GenericAuthorization;
                fromAmino(object: _18.GenericAuthorizationAmino): _18.GenericAuthorization;
                toAmino(message: _18.GenericAuthorization): _18.GenericAuthorizationAmino;
                fromAminoMsg(object: _18.GenericAuthorizationAminoMsg): _18.GenericAuthorization;
                toAminoMsg(message: _18.GenericAuthorization): _18.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _18.GenericAuthorizationProtoMsg): _18.GenericAuthorization;
                toProto(message: _18.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _18.GenericAuthorization): _18.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _18.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.Grant;
                fromPartial(object: Partial<_18.Grant>): _18.Grant;
                fromAmino(object: _18.GrantAmino): _18.Grant;
                toAmino(message: _18.Grant): _18.GrantAmino;
                fromAminoMsg(object: _18.GrantAminoMsg): _18.Grant;
                toAminoMsg(message: _18.Grant): _18.GrantAminoMsg;
                fromProtoMsg(message: _18.GrantProtoMsg): _18.Grant;
                toProto(message: _18.Grant): Uint8Array;
                toProtoMsg(message: _18.Grant): _18.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _18.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.GrantAuthorization;
                fromPartial(object: Partial<_18.GrantAuthorization>): _18.GrantAuthorization;
                fromAmino(object: _18.GrantAuthorizationAmino): _18.GrantAuthorization;
                toAmino(message: _18.GrantAuthorization): _18.GrantAuthorizationAmino;
                fromAminoMsg(object: _18.GrantAuthorizationAminoMsg): _18.GrantAuthorization;
                toAminoMsg(message: _18.GrantAuthorization): _18.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _18.GrantAuthorizationProtoMsg): _18.GrantAuthorization;
                toProto(message: _18.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _18.GrantAuthorization): _18.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _23.SendAuthorization | _73.StakeAuthorization | _18.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _227.MsgClientImpl;
            QueryClientImpl: typeof _213.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _26.QueryBalanceRequest): Promise<_26.QueryBalanceResponse>;
                allBalances(request: _26.QueryAllBalancesRequest): Promise<_26.QueryAllBalancesResponse>;
                spendableBalances(request: _26.QuerySpendableBalancesRequest): Promise<_26.QuerySpendableBalancesResponse>;
                totalSupply(request?: _26.QueryTotalSupplyRequest): Promise<_26.QueryTotalSupplyResponse>;
                supplyOf(request: _26.QuerySupplyOfRequest): Promise<_26.QuerySupplyOfResponse>;
                params(request?: _26.QueryParamsRequest): Promise<_26.QueryParamsResponse>;
                denomMetadata(request: _26.QueryDenomMetadataRequest): Promise<_26.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _26.QueryDenomsMetadataRequest): Promise<_26.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _198.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _27.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _27.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _27.MsgSend): {
                        typeUrl: string;
                        value: _27.MsgSend;
                    };
                    multiSend(value: _27.MsgMultiSend): {
                        typeUrl: string;
                        value: _27.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _27.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _27.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _27.MsgSend): {
                        typeUrl: string;
                        value: _27.MsgSend;
                    };
                    multiSend(value: _27.MsgMultiSend): {
                        typeUrl: string;
                        value: _27.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _27.MsgSend) => _27.MsgSendAmino;
                    fromAmino: (object: _27.MsgSendAmino) => _27.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _27.MsgMultiSend) => _27.MsgMultiSendAmino;
                    fromAmino: (object: _27.MsgMultiSendAmino) => _27.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _27.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgSend;
                fromPartial(object: Partial<_27.MsgSend>): _27.MsgSend;
                fromAmino(object: _27.MsgSendAmino): _27.MsgSend;
                toAmino(message: _27.MsgSend): _27.MsgSendAmino;
                fromAminoMsg(object: _27.MsgSendAminoMsg): _27.MsgSend;
                toAminoMsg(message: _27.MsgSend): _27.MsgSendAminoMsg;
                fromProtoMsg(message: _27.MsgSendProtoMsg): _27.MsgSend;
                toProto(message: _27.MsgSend): Uint8Array;
                toProtoMsg(message: _27.MsgSend): _27.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _27.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.MsgSendResponse;
                fromPartial(_: Partial<_27.MsgSendResponse>): _27.MsgSendResponse;
                fromAmino(_: _27.MsgSendResponseAmino): _27.MsgSendResponse;
                toAmino(_: _27.MsgSendResponse): _27.MsgSendResponseAmino;
                fromAminoMsg(object: _27.MsgSendResponseAminoMsg): _27.MsgSendResponse;
                toAminoMsg(message: _27.MsgSendResponse): _27.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _27.MsgSendResponseProtoMsg): _27.MsgSendResponse;
                toProto(message: _27.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _27.MsgSendResponse): _27.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _27.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgMultiSend;
                fromPartial(object: Partial<_27.MsgMultiSend>): _27.MsgMultiSend;
                fromAmino(object: _27.MsgMultiSendAmino): _27.MsgMultiSend;
                toAmino(message: _27.MsgMultiSend): _27.MsgMultiSendAmino;
                fromAminoMsg(object: _27.MsgMultiSendAminoMsg): _27.MsgMultiSend;
                toAminoMsg(message: _27.MsgMultiSend): _27.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _27.MsgMultiSendProtoMsg): _27.MsgMultiSend;
                toProto(message: _27.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _27.MsgMultiSend): _27.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _27.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.MsgMultiSendResponse;
                fromPartial(_: Partial<_27.MsgMultiSendResponse>): _27.MsgMultiSendResponse;
                fromAmino(_: _27.MsgMultiSendResponseAmino): _27.MsgMultiSendResponse;
                toAmino(_: _27.MsgMultiSendResponse): _27.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _27.MsgMultiSendResponseAminoMsg): _27.MsgMultiSendResponse;
                toAminoMsg(message: _27.MsgMultiSendResponse): _27.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _27.MsgMultiSendResponseProtoMsg): _27.MsgMultiSendResponse;
                toProto(message: _27.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _27.MsgMultiSendResponse): _27.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _26.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryBalanceRequest;
                fromPartial(object: Partial<_26.QueryBalanceRequest>): _26.QueryBalanceRequest;
                fromAmino(object: _26.QueryBalanceRequestAmino): _26.QueryBalanceRequest;
                toAmino(message: _26.QueryBalanceRequest): _26.QueryBalanceRequestAmino;
                fromAminoMsg(object: _26.QueryBalanceRequestAminoMsg): _26.QueryBalanceRequest;
                toAminoMsg(message: _26.QueryBalanceRequest): _26.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _26.QueryBalanceRequestProtoMsg): _26.QueryBalanceRequest;
                toProto(message: _26.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _26.QueryBalanceRequest): _26.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _26.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryBalanceResponse;
                fromPartial(object: Partial<_26.QueryBalanceResponse>): _26.QueryBalanceResponse;
                fromAmino(object: _26.QueryBalanceResponseAmino): _26.QueryBalanceResponse;
                toAmino(message: _26.QueryBalanceResponse): _26.QueryBalanceResponseAmino;
                fromAminoMsg(object: _26.QueryBalanceResponseAminoMsg): _26.QueryBalanceResponse;
                toAminoMsg(message: _26.QueryBalanceResponse): _26.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _26.QueryBalanceResponseProtoMsg): _26.QueryBalanceResponse;
                toProto(message: _26.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _26.QueryBalanceResponse): _26.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _26.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryAllBalancesRequest;
                fromPartial(object: Partial<_26.QueryAllBalancesRequest>): _26.QueryAllBalancesRequest;
                fromAmino(object: _26.QueryAllBalancesRequestAmino): _26.QueryAllBalancesRequest;
                toAmino(message: _26.QueryAllBalancesRequest): _26.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _26.QueryAllBalancesRequestAminoMsg): _26.QueryAllBalancesRequest;
                toAminoMsg(message: _26.QueryAllBalancesRequest): _26.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _26.QueryAllBalancesRequestProtoMsg): _26.QueryAllBalancesRequest;
                toProto(message: _26.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _26.QueryAllBalancesRequest): _26.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _26.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryAllBalancesResponse;
                fromPartial(object: Partial<_26.QueryAllBalancesResponse>): _26.QueryAllBalancesResponse;
                fromAmino(object: _26.QueryAllBalancesResponseAmino): _26.QueryAllBalancesResponse;
                toAmino(message: _26.QueryAllBalancesResponse): _26.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _26.QueryAllBalancesResponseAminoMsg): _26.QueryAllBalancesResponse;
                toAminoMsg(message: _26.QueryAllBalancesResponse): _26.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _26.QueryAllBalancesResponseProtoMsg): _26.QueryAllBalancesResponse;
                toProto(message: _26.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _26.QueryAllBalancesResponse): _26.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _26.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_26.QuerySpendableBalancesRequest>): _26.QuerySpendableBalancesRequest;
                fromAmino(object: _26.QuerySpendableBalancesRequestAmino): _26.QuerySpendableBalancesRequest;
                toAmino(message: _26.QuerySpendableBalancesRequest): _26.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _26.QuerySpendableBalancesRequestAminoMsg): _26.QuerySpendableBalancesRequest;
                toAminoMsg(message: _26.QuerySpendableBalancesRequest): _26.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _26.QuerySpendableBalancesRequestProtoMsg): _26.QuerySpendableBalancesRequest;
                toProto(message: _26.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _26.QuerySpendableBalancesRequest): _26.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _26.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_26.QuerySpendableBalancesResponse>): _26.QuerySpendableBalancesResponse;
                fromAmino(object: _26.QuerySpendableBalancesResponseAmino): _26.QuerySpendableBalancesResponse;
                toAmino(message: _26.QuerySpendableBalancesResponse): _26.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _26.QuerySpendableBalancesResponseAminoMsg): _26.QuerySpendableBalancesResponse;
                toAminoMsg(message: _26.QuerySpendableBalancesResponse): _26.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _26.QuerySpendableBalancesResponseProtoMsg): _26.QuerySpendableBalancesResponse;
                toProto(message: _26.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _26.QuerySpendableBalancesResponse): _26.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _26.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_26.QueryTotalSupplyRequest>): _26.QueryTotalSupplyRequest;
                fromAmino(object: _26.QueryTotalSupplyRequestAmino): _26.QueryTotalSupplyRequest;
                toAmino(message: _26.QueryTotalSupplyRequest): _26.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _26.QueryTotalSupplyRequestAminoMsg): _26.QueryTotalSupplyRequest;
                toAminoMsg(message: _26.QueryTotalSupplyRequest): _26.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _26.QueryTotalSupplyRequestProtoMsg): _26.QueryTotalSupplyRequest;
                toProto(message: _26.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _26.QueryTotalSupplyRequest): _26.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _26.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_26.QueryTotalSupplyResponse>): _26.QueryTotalSupplyResponse;
                fromAmino(object: _26.QueryTotalSupplyResponseAmino): _26.QueryTotalSupplyResponse;
                toAmino(message: _26.QueryTotalSupplyResponse): _26.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _26.QueryTotalSupplyResponseAminoMsg): _26.QueryTotalSupplyResponse;
                toAminoMsg(message: _26.QueryTotalSupplyResponse): _26.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _26.QueryTotalSupplyResponseProtoMsg): _26.QueryTotalSupplyResponse;
                toProto(message: _26.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _26.QueryTotalSupplyResponse): _26.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _26.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QuerySupplyOfRequest;
                fromPartial(object: Partial<_26.QuerySupplyOfRequest>): _26.QuerySupplyOfRequest;
                fromAmino(object: _26.QuerySupplyOfRequestAmino): _26.QuerySupplyOfRequest;
                toAmino(message: _26.QuerySupplyOfRequest): _26.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _26.QuerySupplyOfRequestAminoMsg): _26.QuerySupplyOfRequest;
                toAminoMsg(message: _26.QuerySupplyOfRequest): _26.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _26.QuerySupplyOfRequestProtoMsg): _26.QuerySupplyOfRequest;
                toProto(message: _26.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _26.QuerySupplyOfRequest): _26.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _26.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QuerySupplyOfResponse;
                fromPartial(object: Partial<_26.QuerySupplyOfResponse>): _26.QuerySupplyOfResponse;
                fromAmino(object: _26.QuerySupplyOfResponseAmino): _26.QuerySupplyOfResponse;
                toAmino(message: _26.QuerySupplyOfResponse): _26.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _26.QuerySupplyOfResponseAminoMsg): _26.QuerySupplyOfResponse;
                toAminoMsg(message: _26.QuerySupplyOfResponse): _26.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _26.QuerySupplyOfResponseProtoMsg): _26.QuerySupplyOfResponse;
                toProto(message: _26.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _26.QuerySupplyOfResponse): _26.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _26.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _26.QueryParamsRequest;
                fromPartial(_: Partial<_26.QueryParamsRequest>): _26.QueryParamsRequest;
                fromAmino(_: _26.QueryParamsRequestAmino): _26.QueryParamsRequest;
                toAmino(_: _26.QueryParamsRequest): _26.QueryParamsRequestAmino;
                fromAminoMsg(object: _26.QueryParamsRequestAminoMsg): _26.QueryParamsRequest;
                toAminoMsg(message: _26.QueryParamsRequest): _26.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _26.QueryParamsRequestProtoMsg): _26.QueryParamsRequest;
                toProto(message: _26.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _26.QueryParamsRequest): _26.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _26.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryParamsResponse;
                fromPartial(object: Partial<_26.QueryParamsResponse>): _26.QueryParamsResponse;
                fromAmino(object: _26.QueryParamsResponseAmino): _26.QueryParamsResponse;
                toAmino(message: _26.QueryParamsResponse): _26.QueryParamsResponseAmino;
                fromAminoMsg(object: _26.QueryParamsResponseAminoMsg): _26.QueryParamsResponse;
                toAminoMsg(message: _26.QueryParamsResponse): _26.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _26.QueryParamsResponseProtoMsg): _26.QueryParamsResponse;
                toProto(message: _26.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _26.QueryParamsResponse): _26.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _26.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_26.QueryDenomsMetadataRequest>): _26.QueryDenomsMetadataRequest;
                fromAmino(object: _26.QueryDenomsMetadataRequestAmino): _26.QueryDenomsMetadataRequest;
                toAmino(message: _26.QueryDenomsMetadataRequest): _26.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _26.QueryDenomsMetadataRequestAminoMsg): _26.QueryDenomsMetadataRequest;
                toAminoMsg(message: _26.QueryDenomsMetadataRequest): _26.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _26.QueryDenomsMetadataRequestProtoMsg): _26.QueryDenomsMetadataRequest;
                toProto(message: _26.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _26.QueryDenomsMetadataRequest): _26.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _26.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_26.QueryDenomsMetadataResponse>): _26.QueryDenomsMetadataResponse;
                fromAmino(object: _26.QueryDenomsMetadataResponseAmino): _26.QueryDenomsMetadataResponse;
                toAmino(message: _26.QueryDenomsMetadataResponse): _26.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _26.QueryDenomsMetadataResponseAminoMsg): _26.QueryDenomsMetadataResponse;
                toAminoMsg(message: _26.QueryDenomsMetadataResponse): _26.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _26.QueryDenomsMetadataResponseProtoMsg): _26.QueryDenomsMetadataResponse;
                toProto(message: _26.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _26.QueryDenomsMetadataResponse): _26.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _26.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_26.QueryDenomMetadataRequest>): _26.QueryDenomMetadataRequest;
                fromAmino(object: _26.QueryDenomMetadataRequestAmino): _26.QueryDenomMetadataRequest;
                toAmino(message: _26.QueryDenomMetadataRequest): _26.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _26.QueryDenomMetadataRequestAminoMsg): _26.QueryDenomMetadataRequest;
                toAminoMsg(message: _26.QueryDenomMetadataRequest): _26.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _26.QueryDenomMetadataRequestProtoMsg): _26.QueryDenomMetadataRequest;
                toProto(message: _26.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _26.QueryDenomMetadataRequest): _26.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _26.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_26.QueryDenomMetadataResponse>): _26.QueryDenomMetadataResponse;
                fromAmino(object: _26.QueryDenomMetadataResponseAmino): _26.QueryDenomMetadataResponse;
                toAmino(message: _26.QueryDenomMetadataResponse): _26.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _26.QueryDenomMetadataResponseAminoMsg): _26.QueryDenomMetadataResponse;
                toAminoMsg(message: _26.QueryDenomMetadataResponse): _26.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _26.QueryDenomMetadataResponseProtoMsg): _26.QueryDenomMetadataResponse;
                toProto(message: _26.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _26.QueryDenomMetadataResponse): _26.QueryDenomMetadataResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _25.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.GenesisState;
                fromPartial(object: Partial<_25.GenesisState>): _25.GenesisState;
                fromAmino(object: _25.GenesisStateAmino): _25.GenesisState;
                toAmino(message: _25.GenesisState): _25.GenesisStateAmino;
                fromAminoMsg(object: _25.GenesisStateAminoMsg): _25.GenesisState;
                toAminoMsg(message: _25.GenesisState): _25.GenesisStateAminoMsg;
                fromProtoMsg(message: _25.GenesisStateProtoMsg): _25.GenesisState;
                toProto(message: _25.GenesisState): Uint8Array;
                toProtoMsg(message: _25.GenesisState): _25.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _25.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.Balance;
                fromPartial(object: Partial<_25.Balance>): _25.Balance;
                fromAmino(object: _25.BalanceAmino): _25.Balance;
                toAmino(message: _25.Balance): _25.BalanceAmino;
                fromAminoMsg(object: _25.BalanceAminoMsg): _25.Balance;
                toAminoMsg(message: _25.Balance): _25.BalanceAminoMsg;
                fromProtoMsg(message: _25.BalanceProtoMsg): _25.Balance;
                toProto(message: _25.Balance): Uint8Array;
                toProtoMsg(message: _25.Balance): _25.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _24.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.Params;
                fromPartial(object: Partial<_24.Params>): _24.Params;
                fromAmino(object: _24.ParamsAmino): _24.Params;
                toAmino(message: _24.Params): _24.ParamsAmino;
                fromAminoMsg(object: _24.ParamsAminoMsg): _24.Params;
                toAminoMsg(message: _24.Params): _24.ParamsAminoMsg;
                fromProtoMsg(message: _24.ParamsProtoMsg): _24.Params;
                toProto(message: _24.Params): Uint8Array;
                toProtoMsg(message: _24.Params): _24.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _24.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.SendEnabled;
                fromPartial(object: Partial<_24.SendEnabled>): _24.SendEnabled;
                fromAmino(object: _24.SendEnabledAmino): _24.SendEnabled;
                toAmino(message: _24.SendEnabled): _24.SendEnabledAmino;
                fromAminoMsg(object: _24.SendEnabledAminoMsg): _24.SendEnabled;
                toAminoMsg(message: _24.SendEnabled): _24.SendEnabledAminoMsg;
                fromProtoMsg(message: _24.SendEnabledProtoMsg): _24.SendEnabled;
                toProto(message: _24.SendEnabled): Uint8Array;
                toProtoMsg(message: _24.SendEnabled): _24.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _24.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.Input;
                fromPartial(object: Partial<_24.Input>): _24.Input;
                fromAmino(object: _24.InputAmino): _24.Input;
                toAmino(message: _24.Input): _24.InputAmino;
                fromAminoMsg(object: _24.InputAminoMsg): _24.Input;
                toAminoMsg(message: _24.Input): _24.InputAminoMsg;
                fromProtoMsg(message: _24.InputProtoMsg): _24.Input;
                toProto(message: _24.Input): Uint8Array;
                toProtoMsg(message: _24.Input): _24.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _24.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.Output;
                fromPartial(object: Partial<_24.Output>): _24.Output;
                fromAmino(object: _24.OutputAmino): _24.Output;
                toAmino(message: _24.Output): _24.OutputAmino;
                fromAminoMsg(object: _24.OutputAminoMsg): _24.Output;
                toAminoMsg(message: _24.Output): _24.OutputAminoMsg;
                fromProtoMsg(message: _24.OutputProtoMsg): _24.Output;
                toProto(message: _24.Output): Uint8Array;
                toProtoMsg(message: _24.Output): _24.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _24.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.Supply;
                fromPartial(object: Partial<_24.Supply>): _24.Supply;
                fromAmino(object: _24.SupplyAmino): _24.Supply;
                toAmino(message: _24.Supply): _24.SupplyAmino;
                fromAminoMsg(object: _24.SupplyAminoMsg): _24.Supply;
                toAminoMsg(message: _24.Supply): _24.SupplyAminoMsg;
                fromProtoMsg(message: _24.SupplyProtoMsg): _24.Supply;
                toProto(message: _24.Supply): Uint8Array;
                toProtoMsg(message: _24.Supply): _24.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _24.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.DenomUnit;
                fromPartial(object: Partial<_24.DenomUnit>): _24.DenomUnit;
                fromAmino(object: _24.DenomUnitAmino): _24.DenomUnit;
                toAmino(message: _24.DenomUnit): _24.DenomUnitAmino;
                fromAminoMsg(object: _24.DenomUnitAminoMsg): _24.DenomUnit;
                toAminoMsg(message: _24.DenomUnit): _24.DenomUnitAminoMsg;
                fromProtoMsg(message: _24.DenomUnitProtoMsg): _24.DenomUnit;
                toProto(message: _24.DenomUnit): Uint8Array;
                toProtoMsg(message: _24.DenomUnit): _24.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _24.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.Metadata;
                fromPartial(object: Partial<_24.Metadata>): _24.Metadata;
                fromAmino(object: _24.MetadataAmino): _24.Metadata;
                toAmino(message: _24.Metadata): _24.MetadataAmino;
                fromAminoMsg(object: _24.MetadataAminoMsg): _24.Metadata;
                toAminoMsg(message: _24.Metadata): _24.MetadataAminoMsg;
                fromProtoMsg(message: _24.MetadataProtoMsg): _24.Metadata;
                toProto(message: _24.Metadata): Uint8Array;
                toProtoMsg(message: _24.Metadata): _24.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _23.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.SendAuthorization;
                fromPartial(object: Partial<_23.SendAuthorization>): _23.SendAuthorization;
                fromAmino(object: _23.SendAuthorizationAmino): _23.SendAuthorization;
                toAmino(message: _23.SendAuthorization): _23.SendAuthorizationAmino;
                fromAminoMsg(object: _23.SendAuthorizationAminoMsg): _23.SendAuthorization;
                toAminoMsg(message: _23.SendAuthorization): _23.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _23.SendAuthorizationProtoMsg): _23.SendAuthorization;
                toProto(message: _23.SendAuthorization): Uint8Array;
                toProtoMsg(message: _23.SendAuthorization): _23.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _28.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.TxResponse;
                    fromPartial(object: Partial<_28.TxResponse>): _28.TxResponse;
                    fromAmino(object: _28.TxResponseAmino): _28.TxResponse;
                    toAmino(message: _28.TxResponse): _28.TxResponseAmino;
                    fromAminoMsg(object: _28.TxResponseAminoMsg): _28.TxResponse;
                    toAminoMsg(message: _28.TxResponse): _28.TxResponseAminoMsg;
                    fromProtoMsg(message: _28.TxResponseProtoMsg): _28.TxResponse;
                    toProto(message: _28.TxResponse): Uint8Array;
                    toProtoMsg(message: _28.TxResponse): _28.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _28.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.ABCIMessageLog;
                    fromPartial(object: Partial<_28.ABCIMessageLog>): _28.ABCIMessageLog;
                    fromAmino(object: _28.ABCIMessageLogAmino): _28.ABCIMessageLog;
                    toAmino(message: _28.ABCIMessageLog): _28.ABCIMessageLogAmino;
                    fromAminoMsg(object: _28.ABCIMessageLogAminoMsg): _28.ABCIMessageLog;
                    toAminoMsg(message: _28.ABCIMessageLog): _28.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _28.ABCIMessageLogProtoMsg): _28.ABCIMessageLog;
                    toProto(message: _28.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _28.ABCIMessageLog): _28.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _28.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.StringEvent;
                    fromPartial(object: Partial<_28.StringEvent>): _28.StringEvent;
                    fromAmino(object: _28.StringEventAmino): _28.StringEvent;
                    toAmino(message: _28.StringEvent): _28.StringEventAmino;
                    fromAminoMsg(object: _28.StringEventAminoMsg): _28.StringEvent;
                    toAminoMsg(message: _28.StringEvent): _28.StringEventAminoMsg;
                    fromProtoMsg(message: _28.StringEventProtoMsg): _28.StringEvent;
                    toProto(message: _28.StringEvent): Uint8Array;
                    toProtoMsg(message: _28.StringEvent): _28.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _28.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.Attribute;
                    fromPartial(object: Partial<_28.Attribute>): _28.Attribute;
                    fromAmino(object: _28.AttributeAmino): _28.Attribute;
                    toAmino(message: _28.Attribute): _28.AttributeAmino;
                    fromAminoMsg(object: _28.AttributeAminoMsg): _28.Attribute;
                    toAminoMsg(message: _28.Attribute): _28.AttributeAminoMsg;
                    fromProtoMsg(message: _28.AttributeProtoMsg): _28.Attribute;
                    toProto(message: _28.Attribute): Uint8Array;
                    toProtoMsg(message: _28.Attribute): _28.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _28.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.GasInfo;
                    fromPartial(object: Partial<_28.GasInfo>): _28.GasInfo;
                    fromAmino(object: _28.GasInfoAmino): _28.GasInfo;
                    toAmino(message: _28.GasInfo): _28.GasInfoAmino;
                    fromAminoMsg(object: _28.GasInfoAminoMsg): _28.GasInfo;
                    toAminoMsg(message: _28.GasInfo): _28.GasInfoAminoMsg;
                    fromProtoMsg(message: _28.GasInfoProtoMsg): _28.GasInfo;
                    toProto(message: _28.GasInfo): Uint8Array;
                    toProtoMsg(message: _28.GasInfo): _28.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _28.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.Result;
                    fromPartial(object: Partial<_28.Result>): _28.Result;
                    fromAmino(object: _28.ResultAmino): _28.Result;
                    toAmino(message: _28.Result): _28.ResultAmino;
                    fromAminoMsg(object: _28.ResultAminoMsg): _28.Result;
                    toAminoMsg(message: _28.Result): _28.ResultAminoMsg;
                    fromProtoMsg(message: _28.ResultProtoMsg): _28.Result;
                    toProto(message: _28.Result): Uint8Array;
                    toProtoMsg(message: _28.Result): _28.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _28.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.SimulationResponse;
                    fromPartial(object: Partial<_28.SimulationResponse>): _28.SimulationResponse;
                    fromAmino(object: _28.SimulationResponseAmino): _28.SimulationResponse;
                    toAmino(message: _28.SimulationResponse): _28.SimulationResponseAmino;
                    fromAminoMsg(object: _28.SimulationResponseAminoMsg): _28.SimulationResponse;
                    toAminoMsg(message: _28.SimulationResponse): _28.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _28.SimulationResponseProtoMsg): _28.SimulationResponse;
                    toProto(message: _28.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _28.SimulationResponse): _28.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _28.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.MsgData;
                    fromPartial(object: Partial<_28.MsgData>): _28.MsgData;
                    fromAmino(object: _28.MsgDataAmino): _28.MsgData;
                    toAmino(message: _28.MsgData): _28.MsgDataAmino;
                    fromAminoMsg(object: _28.MsgDataAminoMsg): _28.MsgData;
                    toAminoMsg(message: _28.MsgData): _28.MsgDataAminoMsg;
                    fromProtoMsg(message: _28.MsgDataProtoMsg): _28.MsgData;
                    toProto(message: _28.MsgData): Uint8Array;
                    toProtoMsg(message: _28.MsgData): _28.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _28.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.TxMsgData;
                    fromPartial(object: Partial<_28.TxMsgData>): _28.TxMsgData;
                    fromAmino(object: _28.TxMsgDataAmino): _28.TxMsgData;
                    toAmino(message: _28.TxMsgData): _28.TxMsgDataAmino;
                    fromAminoMsg(object: _28.TxMsgDataAminoMsg): _28.TxMsgData;
                    toAminoMsg(message: _28.TxMsgData): _28.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _28.TxMsgDataProtoMsg): _28.TxMsgData;
                    toProto(message: _28.TxMsgData): Uint8Array;
                    toProtoMsg(message: _28.TxMsgData): _28.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _28.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.SearchTxsResult;
                    fromPartial(object: Partial<_28.SearchTxsResult>): _28.SearchTxsResult;
                    fromAmino(object: _28.SearchTxsResultAmino): _28.SearchTxsResult;
                    toAmino(message: _28.SearchTxsResult): _28.SearchTxsResultAmino;
                    fromAminoMsg(object: _28.SearchTxsResultAminoMsg): _28.SearchTxsResult;
                    toAminoMsg(message: _28.SearchTxsResult): _28.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _28.SearchTxsResultProtoMsg): _28.SearchTxsResult;
                    toProto(message: _28.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _28.SearchTxsResult): _28.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _29.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.Pairs;
                    fromPartial(object: Partial<_29.Pairs>): _29.Pairs;
                    fromAmino(object: _29.PairsAmino): _29.Pairs;
                    toAmino(message: _29.Pairs): _29.PairsAmino;
                    fromAminoMsg(object: _29.PairsAminoMsg): _29.Pairs;
                    toAminoMsg(message: _29.Pairs): _29.PairsAminoMsg;
                    fromProtoMsg(message: _29.PairsProtoMsg): _29.Pairs;
                    toProto(message: _29.Pairs): Uint8Array;
                    toProtoMsg(message: _29.Pairs): _29.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _29.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.Pair;
                    fromPartial(object: Partial<_29.Pair>): _29.Pair;
                    fromAmino(object: _29.PairAmino): _29.Pair;
                    toAmino(message: _29.Pair): _29.PairAmino;
                    fromAminoMsg(object: _29.PairAminoMsg): _29.Pair;
                    toAminoMsg(message: _29.Pair): _29.PairAminoMsg;
                    fromProtoMsg(message: _29.PairProtoMsg): _29.Pair;
                    toProto(message: _29.Pair): Uint8Array;
                    toProtoMsg(message: _29.Pair): _29.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _214.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _30.ConfigRequest): Promise<_30.ConfigResponse>;
                };
                LCDQueryClient: typeof _199.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _30.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _30.ConfigRequest;
                    fromPartial(_: Partial<_30.ConfigRequest>): _30.ConfigRequest;
                    fromAmino(_: _30.ConfigRequestAmino): _30.ConfigRequest;
                    toAmino(_: _30.ConfigRequest): _30.ConfigRequestAmino;
                    fromAminoMsg(object: _30.ConfigRequestAminoMsg): _30.ConfigRequest;
                    toAminoMsg(message: _30.ConfigRequest): _30.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _30.ConfigRequestProtoMsg): _30.ConfigRequest;
                    toProto(message: _30.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _30.ConfigRequest): _30.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _30.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.ConfigResponse;
                    fromPartial(object: Partial<_30.ConfigResponse>): _30.ConfigResponse;
                    fromAmino(object: _30.ConfigResponseAmino): _30.ConfigResponse;
                    toAmino(message: _30.ConfigResponse): _30.ConfigResponseAmino;
                    fromAminoMsg(object: _30.ConfigResponseAminoMsg): _30.ConfigResponse;
                    toAminoMsg(message: _30.ConfigResponse): _30.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _30.ConfigResponseProtoMsg): _30.ConfigResponse;
                    toProto(message: _30.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _30.ConfigResponse): _30.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _31.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.PageRequest;
                    fromPartial(object: Partial<_31.PageRequest>): _31.PageRequest;
                    fromAmino(object: _31.PageRequestAmino): _31.PageRequest;
                    toAmino(message: _31.PageRequest): _31.PageRequestAmino;
                    fromAminoMsg(object: _31.PageRequestAminoMsg): _31.PageRequest;
                    toAminoMsg(message: _31.PageRequest): _31.PageRequestAminoMsg;
                    fromProtoMsg(message: _31.PageRequestProtoMsg): _31.PageRequest;
                    toProto(message: _31.PageRequest): Uint8Array;
                    toProtoMsg(message: _31.PageRequest): _31.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _31.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.PageResponse;
                    fromPartial(object: Partial<_31.PageResponse>): _31.PageResponse;
                    fromAmino(object: _31.PageResponseAmino): _31.PageResponse;
                    toAmino(message: _31.PageResponse): _31.PageResponseAmino;
                    fromAminoMsg(object: _31.PageResponseAminoMsg): _31.PageResponse;
                    toAminoMsg(message: _31.PageResponse): _31.PageResponseAminoMsg;
                    fromProtoMsg(message: _31.PageResponseProtoMsg): _31.PageResponse;
                    toProto(message: _31.PageResponse): Uint8Array;
                    toProtoMsg(message: _31.PageResponse): _31.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _32.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _32.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_32.ListAllInterfacesRequest>): _32.ListAllInterfacesRequest;
                    fromAmino(_: _32.ListAllInterfacesRequestAmino): _32.ListAllInterfacesRequest;
                    toAmino(_: _32.ListAllInterfacesRequest): _32.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _32.ListAllInterfacesRequestAminoMsg): _32.ListAllInterfacesRequest;
                    toAminoMsg(message: _32.ListAllInterfacesRequest): _32.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _32.ListAllInterfacesRequestProtoMsg): _32.ListAllInterfacesRequest;
                    toProto(message: _32.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _32.ListAllInterfacesRequest): _32.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _32.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_32.ListAllInterfacesResponse>): _32.ListAllInterfacesResponse;
                    fromAmino(object: _32.ListAllInterfacesResponseAmino): _32.ListAllInterfacesResponse;
                    toAmino(message: _32.ListAllInterfacesResponse): _32.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _32.ListAllInterfacesResponseAminoMsg): _32.ListAllInterfacesResponse;
                    toAminoMsg(message: _32.ListAllInterfacesResponse): _32.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _32.ListAllInterfacesResponseProtoMsg): _32.ListAllInterfacesResponse;
                    toProto(message: _32.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _32.ListAllInterfacesResponse): _32.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _32.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.ListImplementationsRequest;
                    fromPartial(object: Partial<_32.ListImplementationsRequest>): _32.ListImplementationsRequest;
                    fromAmino(object: _32.ListImplementationsRequestAmino): _32.ListImplementationsRequest;
                    toAmino(message: _32.ListImplementationsRequest): _32.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _32.ListImplementationsRequestAminoMsg): _32.ListImplementationsRequest;
                    toAminoMsg(message: _32.ListImplementationsRequest): _32.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _32.ListImplementationsRequestProtoMsg): _32.ListImplementationsRequest;
                    toProto(message: _32.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _32.ListImplementationsRequest): _32.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _32.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.ListImplementationsResponse;
                    fromPartial(object: Partial<_32.ListImplementationsResponse>): _32.ListImplementationsResponse;
                    fromAmino(object: _32.ListImplementationsResponseAmino): _32.ListImplementationsResponse;
                    toAmino(message: _32.ListImplementationsResponse): _32.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _32.ListImplementationsResponseAminoMsg): _32.ListImplementationsResponse;
                    toAminoMsg(message: _32.ListImplementationsResponse): _32.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _32.ListImplementationsResponseProtoMsg): _32.ListImplementationsResponse;
                    toProto(message: _32.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _32.ListImplementationsResponse): _32.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _33.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.AppDescriptor;
                    fromPartial(object: Partial<_33.AppDescriptor>): _33.AppDescriptor;
                    fromAmino(object: _33.AppDescriptorAmino): _33.AppDescriptor;
                    toAmino(message: _33.AppDescriptor): _33.AppDescriptorAmino;
                    fromAminoMsg(object: _33.AppDescriptorAminoMsg): _33.AppDescriptor;
                    toAminoMsg(message: _33.AppDescriptor): _33.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _33.AppDescriptorProtoMsg): _33.AppDescriptor;
                    toProto(message: _33.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _33.AppDescriptor): _33.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _33.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.TxDescriptor;
                    fromPartial(object: Partial<_33.TxDescriptor>): _33.TxDescriptor;
                    fromAmino(object: _33.TxDescriptorAmino): _33.TxDescriptor;
                    toAmino(message: _33.TxDescriptor): _33.TxDescriptorAmino;
                    fromAminoMsg(object: _33.TxDescriptorAminoMsg): _33.TxDescriptor;
                    toAminoMsg(message: _33.TxDescriptor): _33.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _33.TxDescriptorProtoMsg): _33.TxDescriptor;
                    toProto(message: _33.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _33.TxDescriptor): _33.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _33.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.AuthnDescriptor;
                    fromPartial(object: Partial<_33.AuthnDescriptor>): _33.AuthnDescriptor;
                    fromAmino(object: _33.AuthnDescriptorAmino): _33.AuthnDescriptor;
                    toAmino(message: _33.AuthnDescriptor): _33.AuthnDescriptorAmino;
                    fromAminoMsg(object: _33.AuthnDescriptorAminoMsg): _33.AuthnDescriptor;
                    toAminoMsg(message: _33.AuthnDescriptor): _33.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _33.AuthnDescriptorProtoMsg): _33.AuthnDescriptor;
                    toProto(message: _33.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _33.AuthnDescriptor): _33.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _33.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.SigningModeDescriptor;
                    fromPartial(object: Partial<_33.SigningModeDescriptor>): _33.SigningModeDescriptor;
                    fromAmino(object: _33.SigningModeDescriptorAmino): _33.SigningModeDescriptor;
                    toAmino(message: _33.SigningModeDescriptor): _33.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _33.SigningModeDescriptorAminoMsg): _33.SigningModeDescriptor;
                    toAminoMsg(message: _33.SigningModeDescriptor): _33.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _33.SigningModeDescriptorProtoMsg): _33.SigningModeDescriptor;
                    toProto(message: _33.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _33.SigningModeDescriptor): _33.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _33.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.ChainDescriptor;
                    fromPartial(object: Partial<_33.ChainDescriptor>): _33.ChainDescriptor;
                    fromAmino(object: _33.ChainDescriptorAmino): _33.ChainDescriptor;
                    toAmino(message: _33.ChainDescriptor): _33.ChainDescriptorAmino;
                    fromAminoMsg(object: _33.ChainDescriptorAminoMsg): _33.ChainDescriptor;
                    toAminoMsg(message: _33.ChainDescriptor): _33.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _33.ChainDescriptorProtoMsg): _33.ChainDescriptor;
                    toProto(message: _33.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _33.ChainDescriptor): _33.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _33.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.CodecDescriptor;
                    fromPartial(object: Partial<_33.CodecDescriptor>): _33.CodecDescriptor;
                    fromAmino(object: _33.CodecDescriptorAmino): _33.CodecDescriptor;
                    toAmino(message: _33.CodecDescriptor): _33.CodecDescriptorAmino;
                    fromAminoMsg(object: _33.CodecDescriptorAminoMsg): _33.CodecDescriptor;
                    toAminoMsg(message: _33.CodecDescriptor): _33.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _33.CodecDescriptorProtoMsg): _33.CodecDescriptor;
                    toProto(message: _33.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _33.CodecDescriptor): _33.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _33.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.InterfaceDescriptor;
                    fromPartial(object: Partial<_33.InterfaceDescriptor>): _33.InterfaceDescriptor;
                    fromAmino(object: _33.InterfaceDescriptorAmino): _33.InterfaceDescriptor;
                    toAmino(message: _33.InterfaceDescriptor): _33.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _33.InterfaceDescriptorAminoMsg): _33.InterfaceDescriptor;
                    toAminoMsg(message: _33.InterfaceDescriptor): _33.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _33.InterfaceDescriptorProtoMsg): _33.InterfaceDescriptor;
                    toProto(message: _33.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _33.InterfaceDescriptor): _33.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _33.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_33.InterfaceImplementerDescriptor>): _33.InterfaceImplementerDescriptor;
                    fromAmino(object: _33.InterfaceImplementerDescriptorAmino): _33.InterfaceImplementerDescriptor;
                    toAmino(message: _33.InterfaceImplementerDescriptor): _33.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _33.InterfaceImplementerDescriptorAminoMsg): _33.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _33.InterfaceImplementerDescriptor): _33.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _33.InterfaceImplementerDescriptorProtoMsg): _33.InterfaceImplementerDescriptor;
                    toProto(message: _33.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _33.InterfaceImplementerDescriptor): _33.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _33.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_33.InterfaceAcceptingMessageDescriptor>): _33.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _33.InterfaceAcceptingMessageDescriptorAmino): _33.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _33.InterfaceAcceptingMessageDescriptor): _33.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _33.InterfaceAcceptingMessageDescriptorAminoMsg): _33.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _33.InterfaceAcceptingMessageDescriptor): _33.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _33.InterfaceAcceptingMessageDescriptorProtoMsg): _33.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _33.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _33.InterfaceAcceptingMessageDescriptor): _33.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _33.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.ConfigurationDescriptor;
                    fromPartial(object: Partial<_33.ConfigurationDescriptor>): _33.ConfigurationDescriptor;
                    fromAmino(object: _33.ConfigurationDescriptorAmino): _33.ConfigurationDescriptor;
                    toAmino(message: _33.ConfigurationDescriptor): _33.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _33.ConfigurationDescriptorAminoMsg): _33.ConfigurationDescriptor;
                    toAminoMsg(message: _33.ConfigurationDescriptor): _33.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _33.ConfigurationDescriptorProtoMsg): _33.ConfigurationDescriptor;
                    toProto(message: _33.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _33.ConfigurationDescriptor): _33.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _33.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.MsgDescriptor;
                    fromPartial(object: Partial<_33.MsgDescriptor>): _33.MsgDescriptor;
                    fromAmino(object: _33.MsgDescriptorAmino): _33.MsgDescriptor;
                    toAmino(message: _33.MsgDescriptor): _33.MsgDescriptorAmino;
                    fromAminoMsg(object: _33.MsgDescriptorAminoMsg): _33.MsgDescriptor;
                    toAminoMsg(message: _33.MsgDescriptor): _33.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _33.MsgDescriptorProtoMsg): _33.MsgDescriptor;
                    toProto(message: _33.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _33.MsgDescriptor): _33.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _33.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _33.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_33.GetAuthnDescriptorRequest>): _33.GetAuthnDescriptorRequest;
                    fromAmino(_: _33.GetAuthnDescriptorRequestAmino): _33.GetAuthnDescriptorRequest;
                    toAmino(_: _33.GetAuthnDescriptorRequest): _33.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _33.GetAuthnDescriptorRequestAminoMsg): _33.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _33.GetAuthnDescriptorRequest): _33.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _33.GetAuthnDescriptorRequestProtoMsg): _33.GetAuthnDescriptorRequest;
                    toProto(message: _33.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _33.GetAuthnDescriptorRequest): _33.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _33.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_33.GetAuthnDescriptorResponse>): _33.GetAuthnDescriptorResponse;
                    fromAmino(object: _33.GetAuthnDescriptorResponseAmino): _33.GetAuthnDescriptorResponse;
                    toAmino(message: _33.GetAuthnDescriptorResponse): _33.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _33.GetAuthnDescriptorResponseAminoMsg): _33.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _33.GetAuthnDescriptorResponse): _33.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _33.GetAuthnDescriptorResponseProtoMsg): _33.GetAuthnDescriptorResponse;
                    toProto(message: _33.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _33.GetAuthnDescriptorResponse): _33.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _33.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _33.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_33.GetChainDescriptorRequest>): _33.GetChainDescriptorRequest;
                    fromAmino(_: _33.GetChainDescriptorRequestAmino): _33.GetChainDescriptorRequest;
                    toAmino(_: _33.GetChainDescriptorRequest): _33.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _33.GetChainDescriptorRequestAminoMsg): _33.GetChainDescriptorRequest;
                    toAminoMsg(message: _33.GetChainDescriptorRequest): _33.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _33.GetChainDescriptorRequestProtoMsg): _33.GetChainDescriptorRequest;
                    toProto(message: _33.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _33.GetChainDescriptorRequest): _33.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _33.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_33.GetChainDescriptorResponse>): _33.GetChainDescriptorResponse;
                    fromAmino(object: _33.GetChainDescriptorResponseAmino): _33.GetChainDescriptorResponse;
                    toAmino(message: _33.GetChainDescriptorResponse): _33.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _33.GetChainDescriptorResponseAminoMsg): _33.GetChainDescriptorResponse;
                    toAminoMsg(message: _33.GetChainDescriptorResponse): _33.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _33.GetChainDescriptorResponseProtoMsg): _33.GetChainDescriptorResponse;
                    toProto(message: _33.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _33.GetChainDescriptorResponse): _33.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _33.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _33.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_33.GetCodecDescriptorRequest>): _33.GetCodecDescriptorRequest;
                    fromAmino(_: _33.GetCodecDescriptorRequestAmino): _33.GetCodecDescriptorRequest;
                    toAmino(_: _33.GetCodecDescriptorRequest): _33.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _33.GetCodecDescriptorRequestAminoMsg): _33.GetCodecDescriptorRequest;
                    toAminoMsg(message: _33.GetCodecDescriptorRequest): _33.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _33.GetCodecDescriptorRequestProtoMsg): _33.GetCodecDescriptorRequest;
                    toProto(message: _33.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _33.GetCodecDescriptorRequest): _33.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _33.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_33.GetCodecDescriptorResponse>): _33.GetCodecDescriptorResponse;
                    fromAmino(object: _33.GetCodecDescriptorResponseAmino): _33.GetCodecDescriptorResponse;
                    toAmino(message: _33.GetCodecDescriptorResponse): _33.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _33.GetCodecDescriptorResponseAminoMsg): _33.GetCodecDescriptorResponse;
                    toAminoMsg(message: _33.GetCodecDescriptorResponse): _33.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _33.GetCodecDescriptorResponseProtoMsg): _33.GetCodecDescriptorResponse;
                    toProto(message: _33.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _33.GetCodecDescriptorResponse): _33.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _33.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _33.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_33.GetConfigurationDescriptorRequest>): _33.GetConfigurationDescriptorRequest;
                    fromAmino(_: _33.GetConfigurationDescriptorRequestAmino): _33.GetConfigurationDescriptorRequest;
                    toAmino(_: _33.GetConfigurationDescriptorRequest): _33.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _33.GetConfigurationDescriptorRequestAminoMsg): _33.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _33.GetConfigurationDescriptorRequest): _33.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _33.GetConfigurationDescriptorRequestProtoMsg): _33.GetConfigurationDescriptorRequest;
                    toProto(message: _33.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _33.GetConfigurationDescriptorRequest): _33.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _33.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_33.GetConfigurationDescriptorResponse>): _33.GetConfigurationDescriptorResponse;
                    fromAmino(object: _33.GetConfigurationDescriptorResponseAmino): _33.GetConfigurationDescriptorResponse;
                    toAmino(message: _33.GetConfigurationDescriptorResponse): _33.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _33.GetConfigurationDescriptorResponseAminoMsg): _33.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _33.GetConfigurationDescriptorResponse): _33.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _33.GetConfigurationDescriptorResponseProtoMsg): _33.GetConfigurationDescriptorResponse;
                    toProto(message: _33.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _33.GetConfigurationDescriptorResponse): _33.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _33.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _33.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_33.GetQueryServicesDescriptorRequest>): _33.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _33.GetQueryServicesDescriptorRequestAmino): _33.GetQueryServicesDescriptorRequest;
                    toAmino(_: _33.GetQueryServicesDescriptorRequest): _33.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _33.GetQueryServicesDescriptorRequestAminoMsg): _33.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _33.GetQueryServicesDescriptorRequest): _33.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _33.GetQueryServicesDescriptorRequestProtoMsg): _33.GetQueryServicesDescriptorRequest;
                    toProto(message: _33.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _33.GetQueryServicesDescriptorRequest): _33.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _33.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_33.GetQueryServicesDescriptorResponse>): _33.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _33.GetQueryServicesDescriptorResponseAmino): _33.GetQueryServicesDescriptorResponse;
                    toAmino(message: _33.GetQueryServicesDescriptorResponse): _33.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _33.GetQueryServicesDescriptorResponseAminoMsg): _33.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _33.GetQueryServicesDescriptorResponse): _33.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _33.GetQueryServicesDescriptorResponseProtoMsg): _33.GetQueryServicesDescriptorResponse;
                    toProto(message: _33.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _33.GetQueryServicesDescriptorResponse): _33.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _33.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _33.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_33.GetTxDescriptorRequest>): _33.GetTxDescriptorRequest;
                    fromAmino(_: _33.GetTxDescriptorRequestAmino): _33.GetTxDescriptorRequest;
                    toAmino(_: _33.GetTxDescriptorRequest): _33.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _33.GetTxDescriptorRequestAminoMsg): _33.GetTxDescriptorRequest;
                    toAminoMsg(message: _33.GetTxDescriptorRequest): _33.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _33.GetTxDescriptorRequestProtoMsg): _33.GetTxDescriptorRequest;
                    toProto(message: _33.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _33.GetTxDescriptorRequest): _33.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _33.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_33.GetTxDescriptorResponse>): _33.GetTxDescriptorResponse;
                    fromAmino(object: _33.GetTxDescriptorResponseAmino): _33.GetTxDescriptorResponse;
                    toAmino(message: _33.GetTxDescriptorResponse): _33.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _33.GetTxDescriptorResponseAminoMsg): _33.GetTxDescriptorResponse;
                    toAminoMsg(message: _33.GetTxDescriptorResponse): _33.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _33.GetTxDescriptorResponseProtoMsg): _33.GetTxDescriptorResponse;
                    toProto(message: _33.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _33.GetTxDescriptorResponse): _33.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _33.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.QueryServicesDescriptor;
                    fromPartial(object: Partial<_33.QueryServicesDescriptor>): _33.QueryServicesDescriptor;
                    fromAmino(object: _33.QueryServicesDescriptorAmino): _33.QueryServicesDescriptor;
                    toAmino(message: _33.QueryServicesDescriptor): _33.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _33.QueryServicesDescriptorAminoMsg): _33.QueryServicesDescriptor;
                    toAminoMsg(message: _33.QueryServicesDescriptor): _33.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _33.QueryServicesDescriptorProtoMsg): _33.QueryServicesDescriptor;
                    toProto(message: _33.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _33.QueryServicesDescriptor): _33.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _33.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.QueryServiceDescriptor;
                    fromPartial(object: Partial<_33.QueryServiceDescriptor>): _33.QueryServiceDescriptor;
                    fromAmino(object: _33.QueryServiceDescriptorAmino): _33.QueryServiceDescriptor;
                    toAmino(message: _33.QueryServiceDescriptor): _33.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _33.QueryServiceDescriptorAminoMsg): _33.QueryServiceDescriptor;
                    toAminoMsg(message: _33.QueryServiceDescriptor): _33.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _33.QueryServiceDescriptorProtoMsg): _33.QueryServiceDescriptor;
                    toProto(message: _33.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _33.QueryServiceDescriptor): _33.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _33.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.QueryMethodDescriptor;
                    fromPartial(object: Partial<_33.QueryMethodDescriptor>): _33.QueryMethodDescriptor;
                    fromAmino(object: _33.QueryMethodDescriptorAmino): _33.QueryMethodDescriptor;
                    toAmino(message: _33.QueryMethodDescriptor): _33.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _33.QueryMethodDescriptorAminoMsg): _33.QueryMethodDescriptor;
                    toAminoMsg(message: _33.QueryMethodDescriptor): _33.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _33.QueryMethodDescriptorProtoMsg): _33.QueryMethodDescriptor;
                    toProto(message: _33.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _33.QueryMethodDescriptor): _33.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _34.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.Snapshot;
                    fromPartial(object: Partial<_34.Snapshot>): _34.Snapshot;
                    fromAmino(object: _34.SnapshotAmino): _34.Snapshot;
                    toAmino(message: _34.Snapshot): _34.SnapshotAmino;
                    fromAminoMsg(object: _34.SnapshotAminoMsg): _34.Snapshot;
                    toAminoMsg(message: _34.Snapshot): _34.SnapshotAminoMsg;
                    fromProtoMsg(message: _34.SnapshotProtoMsg): _34.Snapshot;
                    toProto(message: _34.Snapshot): Uint8Array;
                    toProtoMsg(message: _34.Snapshot): _34.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _34.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.Metadata;
                    fromPartial(object: Partial<_34.Metadata>): _34.Metadata;
                    fromAmino(object: _34.MetadataAmino): _34.Metadata;
                    toAmino(message: _34.Metadata): _34.MetadataAmino;
                    fromAminoMsg(object: _34.MetadataAminoMsg): _34.Metadata;
                    toAminoMsg(message: _34.Metadata): _34.MetadataAminoMsg;
                    fromProtoMsg(message: _34.MetadataProtoMsg): _34.Metadata;
                    toProto(message: _34.Metadata): Uint8Array;
                    toProtoMsg(message: _34.Metadata): _34.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _34.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.SnapshotItem;
                    fromPartial(object: Partial<_34.SnapshotItem>): _34.SnapshotItem;
                    fromAmino(object: _34.SnapshotItemAmino): _34.SnapshotItem;
                    toAmino(message: _34.SnapshotItem): _34.SnapshotItemAmino;
                    fromAminoMsg(object: _34.SnapshotItemAminoMsg): _34.SnapshotItem;
                    toAminoMsg(message: _34.SnapshotItem): _34.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _34.SnapshotItemProtoMsg): _34.SnapshotItem;
                    toProto(message: _34.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _34.SnapshotItem): _34.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _34.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.SnapshotStoreItem;
                    fromPartial(object: Partial<_34.SnapshotStoreItem>): _34.SnapshotStoreItem;
                    fromAmino(object: _34.SnapshotStoreItemAmino): _34.SnapshotStoreItem;
                    toAmino(message: _34.SnapshotStoreItem): _34.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _34.SnapshotStoreItemAminoMsg): _34.SnapshotStoreItem;
                    toAminoMsg(message: _34.SnapshotStoreItem): _34.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _34.SnapshotStoreItemProtoMsg): _34.SnapshotStoreItem;
                    toProto(message: _34.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _34.SnapshotStoreItem): _34.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _34.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.SnapshotIAVLItem;
                    fromPartial(object: Partial<_34.SnapshotIAVLItem>): _34.SnapshotIAVLItem;
                    fromAmino(object: _34.SnapshotIAVLItemAmino): _34.SnapshotIAVLItem;
                    toAmino(message: _34.SnapshotIAVLItem): _34.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _34.SnapshotIAVLItemAminoMsg): _34.SnapshotIAVLItem;
                    toAminoMsg(message: _34.SnapshotIAVLItem): _34.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _34.SnapshotIAVLItemProtoMsg): _34.SnapshotIAVLItem;
                    toProto(message: _34.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _34.SnapshotIAVLItem): _34.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _34.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_34.SnapshotExtensionMeta>): _34.SnapshotExtensionMeta;
                    fromAmino(object: _34.SnapshotExtensionMetaAmino): _34.SnapshotExtensionMeta;
                    toAmino(message: _34.SnapshotExtensionMeta): _34.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _34.SnapshotExtensionMetaAminoMsg): _34.SnapshotExtensionMeta;
                    toAminoMsg(message: _34.SnapshotExtensionMeta): _34.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _34.SnapshotExtensionMetaProtoMsg): _34.SnapshotExtensionMeta;
                    toProto(message: _34.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _34.SnapshotExtensionMeta): _34.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _34.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_34.SnapshotExtensionPayload>): _34.SnapshotExtensionPayload;
                    fromAmino(object: _34.SnapshotExtensionPayloadAmino): _34.SnapshotExtensionPayload;
                    toAmino(message: _34.SnapshotExtensionPayload): _34.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _34.SnapshotExtensionPayloadAminoMsg): _34.SnapshotExtensionPayload;
                    toAminoMsg(message: _34.SnapshotExtensionPayload): _34.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _34.SnapshotExtensionPayloadProtoMsg): _34.SnapshotExtensionPayload;
                    toProto(message: _34.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _34.SnapshotExtensionPayload): _34.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _36.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.StoreKVPair;
                    fromPartial(object: Partial<_36.StoreKVPair>): _36.StoreKVPair;
                    fromAmino(object: _36.StoreKVPairAmino): _36.StoreKVPair;
                    toAmino(message: _36.StoreKVPair): _36.StoreKVPairAmino;
                    fromAminoMsg(object: _36.StoreKVPairAminoMsg): _36.StoreKVPair;
                    toAminoMsg(message: _36.StoreKVPair): _36.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _36.StoreKVPairProtoMsg): _36.StoreKVPair;
                    toProto(message: _36.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _36.StoreKVPair): _36.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _36.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.BlockMetadata;
                    fromPartial(object: Partial<_36.BlockMetadata>): _36.BlockMetadata;
                    fromAmino(object: _36.BlockMetadataAmino): _36.BlockMetadata;
                    toAmino(message: _36.BlockMetadata): _36.BlockMetadataAmino;
                    fromAminoMsg(object: _36.BlockMetadataAminoMsg): _36.BlockMetadata;
                    toAminoMsg(message: _36.BlockMetadata): _36.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _36.BlockMetadataProtoMsg): _36.BlockMetadata;
                    toProto(message: _36.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _36.BlockMetadata): _36.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _36.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_36.BlockMetadata_DeliverTx>): _36.BlockMetadata_DeliverTx;
                    fromAmino(object: _36.BlockMetadata_DeliverTxAmino): _36.BlockMetadata_DeliverTx;
                    toAmino(message: _36.BlockMetadata_DeliverTx): _36.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _36.BlockMetadata_DeliverTxAminoMsg): _36.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _36.BlockMetadata_DeliverTx): _36.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _36.BlockMetadata_DeliverTxProtoMsg): _36.BlockMetadata_DeliverTx;
                    toProto(message: _36.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _36.BlockMetadata_DeliverTx): _36.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _35.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.CommitInfo;
                    fromPartial(object: Partial<_35.CommitInfo>): _35.CommitInfo;
                    fromAmino(object: _35.CommitInfoAmino): _35.CommitInfo;
                    toAmino(message: _35.CommitInfo): _35.CommitInfoAmino;
                    fromAminoMsg(object: _35.CommitInfoAminoMsg): _35.CommitInfo;
                    toAminoMsg(message: _35.CommitInfo): _35.CommitInfoAminoMsg;
                    fromProtoMsg(message: _35.CommitInfoProtoMsg): _35.CommitInfo;
                    toProto(message: _35.CommitInfo): Uint8Array;
                    toProtoMsg(message: _35.CommitInfo): _35.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _35.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.StoreInfo;
                    fromPartial(object: Partial<_35.StoreInfo>): _35.StoreInfo;
                    fromAmino(object: _35.StoreInfoAmino): _35.StoreInfo;
                    toAmino(message: _35.StoreInfo): _35.StoreInfoAmino;
                    fromAminoMsg(object: _35.StoreInfoAminoMsg): _35.StoreInfo;
                    toAminoMsg(message: _35.StoreInfo): _35.StoreInfoAminoMsg;
                    fromProtoMsg(message: _35.StoreInfoProtoMsg): _35.StoreInfo;
                    toProto(message: _35.StoreInfo): Uint8Array;
                    toProtoMsg(message: _35.StoreInfo): _35.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _35.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.CommitID;
                    fromPartial(object: Partial<_35.CommitID>): _35.CommitID;
                    fromAmino(object: _35.CommitIDAmino): _35.CommitID;
                    toAmino(message: _35.CommitID): _35.CommitIDAmino;
                    fromAminoMsg(object: _35.CommitIDAminoMsg): _35.CommitID;
                    toAminoMsg(message: _35.CommitID): _35.CommitIDAminoMsg;
                    fromProtoMsg(message: _35.CommitIDProtoMsg): _35.CommitID;
                    toProto(message: _35.CommitID): Uint8Array;
                    toProtoMsg(message: _35.CommitID): _35.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _215.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _37.GetNodeInfoRequest): Promise<_37.GetNodeInfoResponse>;
                    getSyncing(request?: _37.GetSyncingRequest): Promise<_37.GetSyncingResponse>;
                    getLatestBlock(request?: _37.GetLatestBlockRequest): Promise<_37.GetLatestBlockResponse>;
                    getBlockByHeight(request: _37.GetBlockByHeightRequest): Promise<_37.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _37.GetLatestValidatorSetRequest): Promise<_37.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _37.GetValidatorSetByHeightRequest): Promise<_37.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _200.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _37.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_37.GetValidatorSetByHeightRequest>): _37.GetValidatorSetByHeightRequest;
                    fromAmino(object: _37.GetValidatorSetByHeightRequestAmino): _37.GetValidatorSetByHeightRequest;
                    toAmino(message: _37.GetValidatorSetByHeightRequest): _37.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _37.GetValidatorSetByHeightRequestAminoMsg): _37.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _37.GetValidatorSetByHeightRequest): _37.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _37.GetValidatorSetByHeightRequestProtoMsg): _37.GetValidatorSetByHeightRequest;
                    toProto(message: _37.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _37.GetValidatorSetByHeightRequest): _37.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _37.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_37.GetValidatorSetByHeightResponse>): _37.GetValidatorSetByHeightResponse;
                    fromAmino(object: _37.GetValidatorSetByHeightResponseAmino): _37.GetValidatorSetByHeightResponse;
                    toAmino(message: _37.GetValidatorSetByHeightResponse): _37.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _37.GetValidatorSetByHeightResponseAminoMsg): _37.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _37.GetValidatorSetByHeightResponse): _37.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _37.GetValidatorSetByHeightResponseProtoMsg): _37.GetValidatorSetByHeightResponse;
                    toProto(message: _37.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _37.GetValidatorSetByHeightResponse): _37.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _37.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_37.GetLatestValidatorSetRequest>): _37.GetLatestValidatorSetRequest;
                    fromAmino(object: _37.GetLatestValidatorSetRequestAmino): _37.GetLatestValidatorSetRequest;
                    toAmino(message: _37.GetLatestValidatorSetRequest): _37.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _37.GetLatestValidatorSetRequestAminoMsg): _37.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _37.GetLatestValidatorSetRequest): _37.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _37.GetLatestValidatorSetRequestProtoMsg): _37.GetLatestValidatorSetRequest;
                    toProto(message: _37.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _37.GetLatestValidatorSetRequest): _37.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _37.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_37.GetLatestValidatorSetResponse>): _37.GetLatestValidatorSetResponse;
                    fromAmino(object: _37.GetLatestValidatorSetResponseAmino): _37.GetLatestValidatorSetResponse;
                    toAmino(message: _37.GetLatestValidatorSetResponse): _37.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _37.GetLatestValidatorSetResponseAminoMsg): _37.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _37.GetLatestValidatorSetResponse): _37.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _37.GetLatestValidatorSetResponseProtoMsg): _37.GetLatestValidatorSetResponse;
                    toProto(message: _37.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _37.GetLatestValidatorSetResponse): _37.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _37.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.Validator;
                    fromPartial(object: Partial<_37.Validator>): _37.Validator;
                    fromAmino(object: _37.ValidatorAmino): _37.Validator;
                    toAmino(message: _37.Validator): _37.ValidatorAmino;
                    fromAminoMsg(object: _37.ValidatorAminoMsg): _37.Validator;
                    toAminoMsg(message: _37.Validator): _37.ValidatorAminoMsg;
                    fromProtoMsg(message: _37.ValidatorProtoMsg): _37.Validator;
                    toProto(message: _37.Validator): Uint8Array;
                    toProtoMsg(message: _37.Validator): _37.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _37.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_37.GetBlockByHeightRequest>): _37.GetBlockByHeightRequest;
                    fromAmino(object: _37.GetBlockByHeightRequestAmino): _37.GetBlockByHeightRequest;
                    toAmino(message: _37.GetBlockByHeightRequest): _37.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _37.GetBlockByHeightRequestAminoMsg): _37.GetBlockByHeightRequest;
                    toAminoMsg(message: _37.GetBlockByHeightRequest): _37.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _37.GetBlockByHeightRequestProtoMsg): _37.GetBlockByHeightRequest;
                    toProto(message: _37.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _37.GetBlockByHeightRequest): _37.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _37.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_37.GetBlockByHeightResponse>): _37.GetBlockByHeightResponse;
                    fromAmino(object: _37.GetBlockByHeightResponseAmino): _37.GetBlockByHeightResponse;
                    toAmino(message: _37.GetBlockByHeightResponse): _37.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _37.GetBlockByHeightResponseAminoMsg): _37.GetBlockByHeightResponse;
                    toAminoMsg(message: _37.GetBlockByHeightResponse): _37.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _37.GetBlockByHeightResponseProtoMsg): _37.GetBlockByHeightResponse;
                    toProto(message: _37.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _37.GetBlockByHeightResponse): _37.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _37.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _37.GetLatestBlockRequest;
                    fromPartial(_: Partial<_37.GetLatestBlockRequest>): _37.GetLatestBlockRequest;
                    fromAmino(_: _37.GetLatestBlockRequestAmino): _37.GetLatestBlockRequest;
                    toAmino(_: _37.GetLatestBlockRequest): _37.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _37.GetLatestBlockRequestAminoMsg): _37.GetLatestBlockRequest;
                    toAminoMsg(message: _37.GetLatestBlockRequest): _37.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _37.GetLatestBlockRequestProtoMsg): _37.GetLatestBlockRequest;
                    toProto(message: _37.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _37.GetLatestBlockRequest): _37.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _37.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetLatestBlockResponse;
                    fromPartial(object: Partial<_37.GetLatestBlockResponse>): _37.GetLatestBlockResponse;
                    fromAmino(object: _37.GetLatestBlockResponseAmino): _37.GetLatestBlockResponse;
                    toAmino(message: _37.GetLatestBlockResponse): _37.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _37.GetLatestBlockResponseAminoMsg): _37.GetLatestBlockResponse;
                    toAminoMsg(message: _37.GetLatestBlockResponse): _37.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _37.GetLatestBlockResponseProtoMsg): _37.GetLatestBlockResponse;
                    toProto(message: _37.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _37.GetLatestBlockResponse): _37.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _37.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _37.GetSyncingRequest;
                    fromPartial(_: Partial<_37.GetSyncingRequest>): _37.GetSyncingRequest;
                    fromAmino(_: _37.GetSyncingRequestAmino): _37.GetSyncingRequest;
                    toAmino(_: _37.GetSyncingRequest): _37.GetSyncingRequestAmino;
                    fromAminoMsg(object: _37.GetSyncingRequestAminoMsg): _37.GetSyncingRequest;
                    toAminoMsg(message: _37.GetSyncingRequest): _37.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _37.GetSyncingRequestProtoMsg): _37.GetSyncingRequest;
                    toProto(message: _37.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _37.GetSyncingRequest): _37.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _37.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetSyncingResponse;
                    fromPartial(object: Partial<_37.GetSyncingResponse>): _37.GetSyncingResponse;
                    fromAmino(object: _37.GetSyncingResponseAmino): _37.GetSyncingResponse;
                    toAmino(message: _37.GetSyncingResponse): _37.GetSyncingResponseAmino;
                    fromAminoMsg(object: _37.GetSyncingResponseAminoMsg): _37.GetSyncingResponse;
                    toAminoMsg(message: _37.GetSyncingResponse): _37.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _37.GetSyncingResponseProtoMsg): _37.GetSyncingResponse;
                    toProto(message: _37.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _37.GetSyncingResponse): _37.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _37.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _37.GetNodeInfoRequest;
                    fromPartial(_: Partial<_37.GetNodeInfoRequest>): _37.GetNodeInfoRequest;
                    fromAmino(_: _37.GetNodeInfoRequestAmino): _37.GetNodeInfoRequest;
                    toAmino(_: _37.GetNodeInfoRequest): _37.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _37.GetNodeInfoRequestAminoMsg): _37.GetNodeInfoRequest;
                    toAminoMsg(message: _37.GetNodeInfoRequest): _37.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _37.GetNodeInfoRequestProtoMsg): _37.GetNodeInfoRequest;
                    toProto(message: _37.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _37.GetNodeInfoRequest): _37.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _37.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetNodeInfoResponse;
                    fromPartial(object: Partial<_37.GetNodeInfoResponse>): _37.GetNodeInfoResponse;
                    fromAmino(object: _37.GetNodeInfoResponseAmino): _37.GetNodeInfoResponse;
                    toAmino(message: _37.GetNodeInfoResponse): _37.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _37.GetNodeInfoResponseAminoMsg): _37.GetNodeInfoResponse;
                    toAminoMsg(message: _37.GetNodeInfoResponse): _37.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _37.GetNodeInfoResponseProtoMsg): _37.GetNodeInfoResponse;
                    toProto(message: _37.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _37.GetNodeInfoResponse): _37.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _37.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.VersionInfo;
                    fromPartial(object: Partial<_37.VersionInfo>): _37.VersionInfo;
                    fromAmino(object: _37.VersionInfoAmino): _37.VersionInfo;
                    toAmino(message: _37.VersionInfo): _37.VersionInfoAmino;
                    fromAminoMsg(object: _37.VersionInfoAminoMsg): _37.VersionInfo;
                    toAminoMsg(message: _37.VersionInfo): _37.VersionInfoAminoMsg;
                    fromProtoMsg(message: _37.VersionInfoProtoMsg): _37.VersionInfo;
                    toProto(message: _37.VersionInfo): Uint8Array;
                    toProtoMsg(message: _37.VersionInfo): _37.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _37.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.Module;
                    fromPartial(object: Partial<_37.Module>): _37.Module;
                    fromAmino(object: _37.ModuleAmino): _37.Module;
                    toAmino(message: _37.Module): _37.ModuleAmino;
                    fromAminoMsg(object: _37.ModuleAminoMsg): _37.Module;
                    toAminoMsg(message: _37.Module): _37.ModuleAminoMsg;
                    fromProtoMsg(message: _37.ModuleProtoMsg): _37.Module;
                    toProto(message: _37.Module): Uint8Array;
                    toProtoMsg(message: _37.Module): _37.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _38.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.Coin;
                fromPartial(object: Partial<_38.Coin>): _38.Coin;
                fromAmino(object: _38.CoinAmino): _38.Coin;
                toAmino(message: _38.Coin): _38.CoinAmino;
                fromAminoMsg(object: _38.CoinAminoMsg): _38.Coin;
                toAminoMsg(message: _38.Coin): _38.CoinAminoMsg;
                fromProtoMsg(message: _38.CoinProtoMsg): _38.Coin;
                toProto(message: _38.Coin): Uint8Array;
                toProtoMsg(message: _38.Coin): _38.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _38.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.DecCoin;
                fromPartial(object: Partial<_38.DecCoin>): _38.DecCoin;
                fromAmino(object: _38.DecCoinAmino): _38.DecCoin;
                toAmino(message: _38.DecCoin): _38.DecCoinAmino;
                fromAminoMsg(object: _38.DecCoinAminoMsg): _38.DecCoin;
                toAminoMsg(message: _38.DecCoin): _38.DecCoinAminoMsg;
                fromProtoMsg(message: _38.DecCoinProtoMsg): _38.DecCoin;
                toProto(message: _38.DecCoin): Uint8Array;
                toProtoMsg(message: _38.DecCoin): _38.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _38.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.IntProto;
                fromPartial(object: Partial<_38.IntProto>): _38.IntProto;
                fromAmino(object: _38.IntProtoAmino): _38.IntProto;
                toAmino(message: _38.IntProto): _38.IntProtoAmino;
                fromAminoMsg(object: _38.IntProtoAminoMsg): _38.IntProto;
                toAminoMsg(message: _38.IntProto): _38.IntProtoAminoMsg;
                fromProtoMsg(message: _38.IntProtoProtoMsg): _38.IntProto;
                toProto(message: _38.IntProto): Uint8Array;
                toProtoMsg(message: _38.IntProto): _38.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _38.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.DecProto;
                fromPartial(object: Partial<_38.DecProto>): _38.DecProto;
                fromAmino(object: _38.DecProtoAmino): _38.DecProto;
                toAmino(message: _38.DecProto): _38.DecProtoAmino;
                fromAminoMsg(object: _38.DecProtoAminoMsg): _38.DecProto;
                toAminoMsg(message: _38.DecProto): _38.DecProtoAminoMsg;
                fromProtoMsg(message: _38.DecProtoProtoMsg): _38.DecProto;
                toProto(message: _38.DecProto): Uint8Array;
                toProtoMsg(message: _38.DecProto): _38.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _40.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.GenesisOwners;
                fromPartial(object: Partial<_40.GenesisOwners>): _40.GenesisOwners;
                fromAmino(object: _40.GenesisOwnersAmino): _40.GenesisOwners;
                toAmino(message: _40.GenesisOwners): _40.GenesisOwnersAmino;
                fromAminoMsg(object: _40.GenesisOwnersAminoMsg): _40.GenesisOwners;
                toAminoMsg(message: _40.GenesisOwners): _40.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _40.GenesisOwnersProtoMsg): _40.GenesisOwners;
                toProto(message: _40.GenesisOwners): Uint8Array;
                toProtoMsg(message: _40.GenesisOwners): _40.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _39.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Capability;
                fromPartial(object: Partial<_39.Capability>): _39.Capability;
                fromAmino(object: _39.CapabilityAmino): _39.Capability;
                toAmino(message: _39.Capability): _39.CapabilityAmino;
                fromAminoMsg(object: _39.CapabilityAminoMsg): _39.Capability;
                toAminoMsg(message: _39.Capability): _39.CapabilityAminoMsg;
                fromProtoMsg(message: _39.CapabilityProtoMsg): _39.Capability;
                toProto(message: _39.Capability): Uint8Array;
                toProtoMsg(message: _39.Capability): _39.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _39.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Owner;
                fromPartial(object: Partial<_39.Owner>): _39.Owner;
                fromAmino(object: _39.OwnerAmino): _39.Owner;
                toAmino(message: _39.Owner): _39.OwnerAmino;
                fromAminoMsg(object: _39.OwnerAminoMsg): _39.Owner;
                toAminoMsg(message: _39.Owner): _39.OwnerAminoMsg;
                fromProtoMsg(message: _39.OwnerProtoMsg): _39.Owner;
                toProto(message: _39.Owner): Uint8Array;
                toProtoMsg(message: _39.Owner): _39.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _39.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.CapabilityOwners;
                fromPartial(object: Partial<_39.CapabilityOwners>): _39.CapabilityOwners;
                fromAmino(object: _39.CapabilityOwnersAmino): _39.CapabilityOwners;
                toAmino(message: _39.CapabilityOwners): _39.CapabilityOwnersAmino;
                fromAminoMsg(object: _39.CapabilityOwnersAminoMsg): _39.CapabilityOwners;
                toAminoMsg(message: _39.CapabilityOwners): _39.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _39.CapabilityOwnersProtoMsg): _39.CapabilityOwners;
                toProto(message: _39.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _39.CapabilityOwners): _39.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _228.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _42.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _42.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _42.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _42.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _42.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _42.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _42.MsgVerifyInvariant) => _42.MsgVerifyInvariantAmino;
                    fromAmino: (object: _42.MsgVerifyInvariantAmino) => _42.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _42.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MsgVerifyInvariant;
                fromPartial(object: Partial<_42.MsgVerifyInvariant>): _42.MsgVerifyInvariant;
                fromAmino(object: _42.MsgVerifyInvariantAmino): _42.MsgVerifyInvariant;
                toAmino(message: _42.MsgVerifyInvariant): _42.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _42.MsgVerifyInvariantAminoMsg): _42.MsgVerifyInvariant;
                toAminoMsg(message: _42.MsgVerifyInvariant): _42.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _42.MsgVerifyInvariantProtoMsg): _42.MsgVerifyInvariant;
                toProto(message: _42.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _42.MsgVerifyInvariant): _42.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _42.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _42.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_42.MsgVerifyInvariantResponse>): _42.MsgVerifyInvariantResponse;
                fromAmino(_: _42.MsgVerifyInvariantResponseAmino): _42.MsgVerifyInvariantResponse;
                toAmino(_: _42.MsgVerifyInvariantResponse): _42.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _42.MsgVerifyInvariantResponseAminoMsg): _42.MsgVerifyInvariantResponse;
                toAminoMsg(message: _42.MsgVerifyInvariantResponse): _42.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _42.MsgVerifyInvariantResponseProtoMsg): _42.MsgVerifyInvariantResponse;
                toProto(message: _42.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _42.MsgVerifyInvariantResponse): _42.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _41.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.GenesisState;
                fromPartial(object: Partial<_41.GenesisState>): _41.GenesisState;
                fromAmino(object: _41.GenesisStateAmino): _41.GenesisState;
                toAmino(message: _41.GenesisState): _41.GenesisStateAmino;
                fromAminoMsg(object: _41.GenesisStateAminoMsg): _41.GenesisState;
                toAminoMsg(message: _41.GenesisState): _41.GenesisStateAminoMsg;
                fromProtoMsg(message: _41.GenesisStateProtoMsg): _41.GenesisState;
                toProto(message: _41.GenesisState): Uint8Array;
                toProtoMsg(message: _41.GenesisState): _41.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _43.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.PubKey;
                fromPartial(object: Partial<_43.PubKey>): _43.PubKey;
                fromAmino(object: _43.PubKeyAmino): _43.PubKey;
                toAmino(message: _43.PubKey): _43.PubKeyAmino;
                fromAminoMsg(object: _43.PubKeyAminoMsg): _43.PubKey;
                toAminoMsg(message: _43.PubKey): _43.PubKeyAminoMsg;
                fromProtoMsg(message: _43.PubKeyProtoMsg): _43.PubKey;
                toProto(message: _43.PubKey): Uint8Array;
                toProtoMsg(message: _43.PubKey): _43.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _43.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.PrivKey;
                fromPartial(object: Partial<_43.PrivKey>): _43.PrivKey;
                fromAmino(object: _43.PrivKeyAmino): _43.PrivKey;
                toAmino(message: _43.PrivKey): _43.PrivKeyAmino;
                fromAminoMsg(object: _43.PrivKeyAminoMsg): _43.PrivKey;
                toAminoMsg(message: _43.PrivKey): _43.PrivKeyAminoMsg;
                fromProtoMsg(message: _43.PrivKeyProtoMsg): _43.PrivKey;
                toProto(message: _43.PrivKey): Uint8Array;
                toProtoMsg(message: _43.PrivKey): _43.PrivKeyProtoMsg;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _44.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.LegacyAminoPubKey;
                fromPartial(object: Partial<_44.LegacyAminoPubKey>): _44.LegacyAminoPubKey;
                fromAmino(object: _44.LegacyAminoPubKeyAmino): _44.LegacyAminoPubKey;
                toAmino(message: _44.LegacyAminoPubKey): _44.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _44.LegacyAminoPubKeyAminoMsg): _44.LegacyAminoPubKey;
                toAminoMsg(message: _44.LegacyAminoPubKey): _44.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _44.LegacyAminoPubKeyProtoMsg): _44.LegacyAminoPubKey;
                toProto(message: _44.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _44.LegacyAminoPubKey): _44.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
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
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _46.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.PubKey;
                fromPartial(object: Partial<_46.PubKey>): _46.PubKey;
                fromAmino(object: _46.PubKeyAmino): _46.PubKey;
                toAmino(message: _46.PubKey): _46.PubKeyAmino;
                fromAminoMsg(object: _46.PubKeyAminoMsg): _46.PubKey;
                toAminoMsg(message: _46.PubKey): _46.PubKeyAminoMsg;
                fromProtoMsg(message: _46.PubKeyProtoMsg): _46.PubKey;
                toProto(message: _46.PubKey): Uint8Array;
                toProtoMsg(message: _46.PubKey): _46.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _46.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.PrivKey;
                fromPartial(object: Partial<_46.PrivKey>): _46.PrivKey;
                fromAmino(object: _46.PrivKeyAmino): _46.PrivKey;
                toAmino(message: _46.PrivKey): _46.PrivKeyAmino;
                fromAminoMsg(object: _46.PrivKeyAminoMsg): _46.PrivKey;
                toAminoMsg(message: _46.PrivKey): _46.PrivKeyAminoMsg;
                fromProtoMsg(message: _46.PrivKeyProtoMsg): _46.PrivKey;
                toProto(message: _46.PrivKey): Uint8Array;
                toProtoMsg(message: _46.PrivKey): _46.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _229.MsgClientImpl;
            QueryClientImpl: typeof _216.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _49.QueryParamsRequest): Promise<_49.QueryParamsResponse>;
                validatorOutstandingRewards(request: _49.QueryValidatorOutstandingRewardsRequest): Promise<_49.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _49.QueryValidatorCommissionRequest): Promise<_49.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _49.QueryValidatorSlashesRequest): Promise<_49.QueryValidatorSlashesResponse>;
                delegationRewards(request: _49.QueryDelegationRewardsRequest): Promise<_49.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _49.QueryDelegationTotalRewardsRequest): Promise<_49.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _49.QueryDelegatorValidatorsRequest): Promise<_49.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _49.QueryDelegatorWithdrawAddressRequest): Promise<_49.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _49.QueryCommunityPoolRequest): Promise<_49.QueryCommunityPoolResponse>;
                foundationTax(request?: _49.QueryFoundationTaxRequest): Promise<_49.QueryFoundationTaxResponse>;
                restakeThreshold(request?: _49.QueryRestakeThresholdRequest): Promise<_49.QueryRestakeThresholdResponse>;
                restakingEntries(request: _49.QueryRestakeEntriesRequest): Promise<_49.QueryRestakingEntriesResponse>;
            };
            LCDQueryClient: typeof _201.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _50.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _50.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _50.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _50.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setAutoRestake(value: _50.MsgSetAutoRestake): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _50.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _50.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _50.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _50.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _50.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _50.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _50.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _50.MsgFundCommunityPool;
                    };
                    setAutoRestake(value: _50.MsgSetAutoRestake): {
                        typeUrl: string;
                        value: _50.MsgSetAutoRestake;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _50.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _50.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _50.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _50.MsgFundCommunityPool;
                    };
                    setAutoRestake(value: any): {
                        typeUrl: string;
                        value: _50.MsgSetAutoRestake;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _50.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _50.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _50.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _50.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _50.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _50.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _50.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _50.MsgFundCommunityPool;
                    };
                    setAutoRestake(value: _50.MsgSetAutoRestake): {
                        typeUrl: string;
                        value: _50.MsgSetAutoRestake;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _50.MsgSetWithdrawAddress) => _50.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _50.MsgSetWithdrawAddressAmino) => _50.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _50.MsgWithdrawDelegatorReward) => _50.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _50.MsgWithdrawDelegatorRewardAmino) => _50.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _50.MsgWithdrawValidatorCommission) => _50.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _50.MsgWithdrawValidatorCommissionAmino) => _50.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _50.MsgFundCommunityPool) => _50.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _50.MsgFundCommunityPoolAmino) => _50.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgSetAutoRestake": {
                    aminoType: string;
                    toAmino: (message: _50.MsgSetAutoRestake) => _50.MsgSetAutoRestakeAmino;
                    fromAmino: (object: _50.MsgSetAutoRestakeAmino) => _50.MsgSetAutoRestake;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _50.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_50.MsgSetWithdrawAddress>): _50.MsgSetWithdrawAddress;
                fromAmino(object: _50.MsgSetWithdrawAddressAmino): _50.MsgSetWithdrawAddress;
                toAmino(message: _50.MsgSetWithdrawAddress): _50.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _50.MsgSetWithdrawAddressAminoMsg): _50.MsgSetWithdrawAddress;
                toAminoMsg(message: _50.MsgSetWithdrawAddress): _50.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _50.MsgSetWithdrawAddressProtoMsg): _50.MsgSetWithdrawAddress;
                toProto(message: _50.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _50.MsgSetWithdrawAddress): _50.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetAutoRestake: {
                typeUrl: string;
                encode(message: _50.MsgSetAutoRestake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgSetAutoRestake;
                fromPartial(object: Partial<_50.MsgSetAutoRestake>): _50.MsgSetAutoRestake;
                fromAmino(object: _50.MsgSetAutoRestakeAmino): _50.MsgSetAutoRestake;
                toAmino(message: _50.MsgSetAutoRestake): _50.MsgSetAutoRestakeAmino;
                fromAminoMsg(object: _50.MsgSetAutoRestakeAminoMsg): _50.MsgSetAutoRestake;
                toAminoMsg(message: _50.MsgSetAutoRestake): _50.MsgSetAutoRestakeAminoMsg;
                fromProtoMsg(message: _50.MsgSetAutoRestakeProtoMsg): _50.MsgSetAutoRestake;
                toProto(message: _50.MsgSetAutoRestake): Uint8Array;
                toProtoMsg(message: _50.MsgSetAutoRestake): _50.MsgSetAutoRestakeProtoMsg;
            };
            MsgSetAutoRestakeResponse: {
                typeUrl: string;
                encode(_: _50.MsgSetAutoRestakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _50.MsgSetAutoRestakeResponse;
                fromPartial(_: Partial<_50.MsgSetAutoRestakeResponse>): _50.MsgSetAutoRestakeResponse;
                fromAmino(_: _50.MsgSetAutoRestakeResponseAmino): _50.MsgSetAutoRestakeResponse;
                toAmino(_: _50.MsgSetAutoRestakeResponse): _50.MsgSetAutoRestakeResponseAmino;
                fromAminoMsg(object: _50.MsgSetAutoRestakeResponseAminoMsg): _50.MsgSetAutoRestakeResponse;
                toAminoMsg(message: _50.MsgSetAutoRestakeResponse): _50.MsgSetAutoRestakeResponseAminoMsg;
                fromProtoMsg(message: _50.MsgSetAutoRestakeResponseProtoMsg): _50.MsgSetAutoRestakeResponse;
                toProto(message: _50.MsgSetAutoRestakeResponse): Uint8Array;
                toProtoMsg(message: _50.MsgSetAutoRestakeResponse): _50.MsgSetAutoRestakeResponseProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _50.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _50.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_50.MsgSetWithdrawAddressResponse>): _50.MsgSetWithdrawAddressResponse;
                fromAmino(_: _50.MsgSetWithdrawAddressResponseAmino): _50.MsgSetWithdrawAddressResponse;
                toAmino(_: _50.MsgSetWithdrawAddressResponse): _50.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _50.MsgSetWithdrawAddressResponseAminoMsg): _50.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _50.MsgSetWithdrawAddressResponse): _50.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _50.MsgSetWithdrawAddressResponseProtoMsg): _50.MsgSetWithdrawAddressResponse;
                toProto(message: _50.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _50.MsgSetWithdrawAddressResponse): _50.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _50.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_50.MsgWithdrawDelegatorReward>): _50.MsgWithdrawDelegatorReward;
                fromAmino(object: _50.MsgWithdrawDelegatorRewardAmino): _50.MsgWithdrawDelegatorReward;
                toAmino(message: _50.MsgWithdrawDelegatorReward): _50.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _50.MsgWithdrawDelegatorRewardAminoMsg): _50.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _50.MsgWithdrawDelegatorReward): _50.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _50.MsgWithdrawDelegatorRewardProtoMsg): _50.MsgWithdrawDelegatorReward;
                toProto(message: _50.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _50.MsgWithdrawDelegatorReward): _50.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _50.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _50.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_50.MsgWithdrawDelegatorRewardResponse>): _50.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _50.MsgWithdrawDelegatorRewardResponseAmino): _50.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _50.MsgWithdrawDelegatorRewardResponse): _50.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _50.MsgWithdrawDelegatorRewardResponseAminoMsg): _50.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _50.MsgWithdrawDelegatorRewardResponse): _50.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _50.MsgWithdrawDelegatorRewardResponseProtoMsg): _50.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _50.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _50.MsgWithdrawDelegatorRewardResponse): _50.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _50.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_50.MsgWithdrawValidatorCommission>): _50.MsgWithdrawValidatorCommission;
                fromAmino(object: _50.MsgWithdrawValidatorCommissionAmino): _50.MsgWithdrawValidatorCommission;
                toAmino(message: _50.MsgWithdrawValidatorCommission): _50.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _50.MsgWithdrawValidatorCommissionAminoMsg): _50.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _50.MsgWithdrawValidatorCommission): _50.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _50.MsgWithdrawValidatorCommissionProtoMsg): _50.MsgWithdrawValidatorCommission;
                toProto(message: _50.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _50.MsgWithdrawValidatorCommission): _50.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _50.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _50.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_50.MsgWithdrawValidatorCommissionResponse>): _50.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _50.MsgWithdrawValidatorCommissionResponseAmino): _50.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _50.MsgWithdrawValidatorCommissionResponse): _50.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _50.MsgWithdrawValidatorCommissionResponseAminoMsg): _50.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _50.MsgWithdrawValidatorCommissionResponse): _50.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _50.MsgWithdrawValidatorCommissionResponseProtoMsg): _50.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _50.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _50.MsgWithdrawValidatorCommissionResponse): _50.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _50.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgFundCommunityPool;
                fromPartial(object: Partial<_50.MsgFundCommunityPool>): _50.MsgFundCommunityPool;
                fromAmino(object: _50.MsgFundCommunityPoolAmino): _50.MsgFundCommunityPool;
                toAmino(message: _50.MsgFundCommunityPool): _50.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _50.MsgFundCommunityPoolAminoMsg): _50.MsgFundCommunityPool;
                toAminoMsg(message: _50.MsgFundCommunityPool): _50.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _50.MsgFundCommunityPoolProtoMsg): _50.MsgFundCommunityPool;
                toProto(message: _50.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _50.MsgFundCommunityPool): _50.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _50.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _50.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_50.MsgFundCommunityPoolResponse>): _50.MsgFundCommunityPoolResponse;
                fromAmino(_: _50.MsgFundCommunityPoolResponseAmino): _50.MsgFundCommunityPoolResponse;
                toAmino(_: _50.MsgFundCommunityPoolResponse): _50.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _50.MsgFundCommunityPoolResponseAminoMsg): _50.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _50.MsgFundCommunityPoolResponse): _50.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _50.MsgFundCommunityPoolResponseProtoMsg): _50.MsgFundCommunityPoolResponse;
                toProto(message: _50.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _50.MsgFundCommunityPoolResponse): _50.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryRestakeEntriesRequest: {
                typeUrl: string;
                encode(message: _49.QueryRestakeEntriesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryRestakeEntriesRequest;
                fromPartial(object: Partial<_49.QueryRestakeEntriesRequest>): _49.QueryRestakeEntriesRequest;
                fromAmino(object: _49.QueryRestakeEntriesRequestAmino): _49.QueryRestakeEntriesRequest;
                toAmino(message: _49.QueryRestakeEntriesRequest): _49.QueryRestakeEntriesRequestAmino;
                fromAminoMsg(object: _49.QueryRestakeEntriesRequestAminoMsg): _49.QueryRestakeEntriesRequest;
                toAminoMsg(message: _49.QueryRestakeEntriesRequest): _49.QueryRestakeEntriesRequestAminoMsg;
                fromProtoMsg(message: _49.QueryRestakeEntriesRequestProtoMsg): _49.QueryRestakeEntriesRequest;
                toProto(message: _49.QueryRestakeEntriesRequest): Uint8Array;
                toProtoMsg(message: _49.QueryRestakeEntriesRequest): _49.QueryRestakeEntriesRequestProtoMsg;
            };
            QueryRestakingEntriesResponse: {
                typeUrl: string;
                encode(message: _49.QueryRestakingEntriesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryRestakingEntriesResponse;
                fromPartial(object: Partial<_49.QueryRestakingEntriesResponse>): _49.QueryRestakingEntriesResponse;
                fromAmino(object: _49.QueryRestakingEntriesResponseAmino): _49.QueryRestakingEntriesResponse;
                toAmino(message: _49.QueryRestakingEntriesResponse): _49.QueryRestakingEntriesResponseAmino;
                fromAminoMsg(object: _49.QueryRestakingEntriesResponseAminoMsg): _49.QueryRestakingEntriesResponse;
                toAminoMsg(message: _49.QueryRestakingEntriesResponse): _49.QueryRestakingEntriesResponseAminoMsg;
                fromProtoMsg(message: _49.QueryRestakingEntriesResponseProtoMsg): _49.QueryRestakingEntriesResponse;
                toProto(message: _49.QueryRestakingEntriesResponse): Uint8Array;
                toProtoMsg(message: _49.QueryRestakingEntriesResponse): _49.QueryRestakingEntriesResponseProtoMsg;
            };
            QueryRestakeThresholdRequest: {
                typeUrl: string;
                encode(_: _49.QueryRestakeThresholdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.QueryRestakeThresholdRequest;
                fromPartial(_: Partial<_49.QueryRestakeThresholdRequest>): _49.QueryRestakeThresholdRequest;
                fromAmino(_: _49.QueryRestakeThresholdRequestAmino): _49.QueryRestakeThresholdRequest;
                toAmino(_: _49.QueryRestakeThresholdRequest): _49.QueryRestakeThresholdRequestAmino;
                fromAminoMsg(object: _49.QueryRestakeThresholdRequestAminoMsg): _49.QueryRestakeThresholdRequest;
                toAminoMsg(message: _49.QueryRestakeThresholdRequest): _49.QueryRestakeThresholdRequestAminoMsg;
                fromProtoMsg(message: _49.QueryRestakeThresholdRequestProtoMsg): _49.QueryRestakeThresholdRequest;
                toProto(message: _49.QueryRestakeThresholdRequest): Uint8Array;
                toProtoMsg(message: _49.QueryRestakeThresholdRequest): _49.QueryRestakeThresholdRequestProtoMsg;
            };
            QueryRestakeThresholdResponse: {
                typeUrl: string;
                encode(message: _49.QueryRestakeThresholdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryRestakeThresholdResponse;
                fromPartial(object: Partial<_49.QueryRestakeThresholdResponse>): _49.QueryRestakeThresholdResponse;
                fromAmino(object: _49.QueryRestakeThresholdResponseAmino): _49.QueryRestakeThresholdResponse;
                toAmino(message: _49.QueryRestakeThresholdResponse): _49.QueryRestakeThresholdResponseAmino;
                fromAminoMsg(object: _49.QueryRestakeThresholdResponseAminoMsg): _49.QueryRestakeThresholdResponse;
                toAminoMsg(message: _49.QueryRestakeThresholdResponse): _49.QueryRestakeThresholdResponseAminoMsg;
                fromProtoMsg(message: _49.QueryRestakeThresholdResponseProtoMsg): _49.QueryRestakeThresholdResponse;
                toProto(message: _49.QueryRestakeThresholdResponse): Uint8Array;
                toProtoMsg(message: _49.QueryRestakeThresholdResponse): _49.QueryRestakeThresholdResponseProtoMsg;
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
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _49.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_49.QueryValidatorOutstandingRewardsRequest>): _49.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _49.QueryValidatorOutstandingRewardsRequestAmino): _49.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _49.QueryValidatorOutstandingRewardsRequest): _49.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _49.QueryValidatorOutstandingRewardsRequestAminoMsg): _49.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _49.QueryValidatorOutstandingRewardsRequest): _49.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _49.QueryValidatorOutstandingRewardsRequestProtoMsg): _49.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _49.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _49.QueryValidatorOutstandingRewardsRequest): _49.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _49.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_49.QueryValidatorOutstandingRewardsResponse>): _49.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _49.QueryValidatorOutstandingRewardsResponseAmino): _49.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _49.QueryValidatorOutstandingRewardsResponse): _49.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _49.QueryValidatorOutstandingRewardsResponseAminoMsg): _49.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _49.QueryValidatorOutstandingRewardsResponse): _49.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _49.QueryValidatorOutstandingRewardsResponseProtoMsg): _49.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _49.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _49.QueryValidatorOutstandingRewardsResponse): _49.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _49.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_49.QueryValidatorCommissionRequest>): _49.QueryValidatorCommissionRequest;
                fromAmino(object: _49.QueryValidatorCommissionRequestAmino): _49.QueryValidatorCommissionRequest;
                toAmino(message: _49.QueryValidatorCommissionRequest): _49.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _49.QueryValidatorCommissionRequestAminoMsg): _49.QueryValidatorCommissionRequest;
                toAminoMsg(message: _49.QueryValidatorCommissionRequest): _49.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _49.QueryValidatorCommissionRequestProtoMsg): _49.QueryValidatorCommissionRequest;
                toProto(message: _49.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _49.QueryValidatorCommissionRequest): _49.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _49.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_49.QueryValidatorCommissionResponse>): _49.QueryValidatorCommissionResponse;
                fromAmino(object: _49.QueryValidatorCommissionResponseAmino): _49.QueryValidatorCommissionResponse;
                toAmino(message: _49.QueryValidatorCommissionResponse): _49.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _49.QueryValidatorCommissionResponseAminoMsg): _49.QueryValidatorCommissionResponse;
                toAminoMsg(message: _49.QueryValidatorCommissionResponse): _49.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _49.QueryValidatorCommissionResponseProtoMsg): _49.QueryValidatorCommissionResponse;
                toProto(message: _49.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _49.QueryValidatorCommissionResponse): _49.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _49.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_49.QueryValidatorSlashesRequest>): _49.QueryValidatorSlashesRequest;
                fromAmino(object: _49.QueryValidatorSlashesRequestAmino): _49.QueryValidatorSlashesRequest;
                toAmino(message: _49.QueryValidatorSlashesRequest): _49.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _49.QueryValidatorSlashesRequestAminoMsg): _49.QueryValidatorSlashesRequest;
                toAminoMsg(message: _49.QueryValidatorSlashesRequest): _49.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _49.QueryValidatorSlashesRequestProtoMsg): _49.QueryValidatorSlashesRequest;
                toProto(message: _49.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _49.QueryValidatorSlashesRequest): _49.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _49.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_49.QueryValidatorSlashesResponse>): _49.QueryValidatorSlashesResponse;
                fromAmino(object: _49.QueryValidatorSlashesResponseAmino): _49.QueryValidatorSlashesResponse;
                toAmino(message: _49.QueryValidatorSlashesResponse): _49.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _49.QueryValidatorSlashesResponseAminoMsg): _49.QueryValidatorSlashesResponse;
                toAminoMsg(message: _49.QueryValidatorSlashesResponse): _49.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _49.QueryValidatorSlashesResponseProtoMsg): _49.QueryValidatorSlashesResponse;
                toProto(message: _49.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _49.QueryValidatorSlashesResponse): _49.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _49.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_49.QueryDelegationRewardsRequest>): _49.QueryDelegationRewardsRequest;
                fromAmino(object: _49.QueryDelegationRewardsRequestAmino): _49.QueryDelegationRewardsRequest;
                toAmino(message: _49.QueryDelegationRewardsRequest): _49.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _49.QueryDelegationRewardsRequestAminoMsg): _49.QueryDelegationRewardsRequest;
                toAminoMsg(message: _49.QueryDelegationRewardsRequest): _49.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _49.QueryDelegationRewardsRequestProtoMsg): _49.QueryDelegationRewardsRequest;
                toProto(message: _49.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _49.QueryDelegationRewardsRequest): _49.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _49.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_49.QueryDelegationRewardsResponse>): _49.QueryDelegationRewardsResponse;
                fromAmino(object: _49.QueryDelegationRewardsResponseAmino): _49.QueryDelegationRewardsResponse;
                toAmino(message: _49.QueryDelegationRewardsResponse): _49.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _49.QueryDelegationRewardsResponseAminoMsg): _49.QueryDelegationRewardsResponse;
                toAminoMsg(message: _49.QueryDelegationRewardsResponse): _49.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _49.QueryDelegationRewardsResponseProtoMsg): _49.QueryDelegationRewardsResponse;
                toProto(message: _49.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _49.QueryDelegationRewardsResponse): _49.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _49.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_49.QueryDelegationTotalRewardsRequest>): _49.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _49.QueryDelegationTotalRewardsRequestAmino): _49.QueryDelegationTotalRewardsRequest;
                toAmino(message: _49.QueryDelegationTotalRewardsRequest): _49.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _49.QueryDelegationTotalRewardsRequestAminoMsg): _49.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _49.QueryDelegationTotalRewardsRequest): _49.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _49.QueryDelegationTotalRewardsRequestProtoMsg): _49.QueryDelegationTotalRewardsRequest;
                toProto(message: _49.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _49.QueryDelegationTotalRewardsRequest): _49.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _49.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_49.QueryDelegationTotalRewardsResponse>): _49.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _49.QueryDelegationTotalRewardsResponseAmino): _49.QueryDelegationTotalRewardsResponse;
                toAmino(message: _49.QueryDelegationTotalRewardsResponse): _49.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _49.QueryDelegationTotalRewardsResponseAminoMsg): _49.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _49.QueryDelegationTotalRewardsResponse): _49.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _49.QueryDelegationTotalRewardsResponseProtoMsg): _49.QueryDelegationTotalRewardsResponse;
                toProto(message: _49.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _49.QueryDelegationTotalRewardsResponse): _49.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _49.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_49.QueryDelegatorValidatorsRequest>): _49.QueryDelegatorValidatorsRequest;
                fromAmino(object: _49.QueryDelegatorValidatorsRequestAmino): _49.QueryDelegatorValidatorsRequest;
                toAmino(message: _49.QueryDelegatorValidatorsRequest): _49.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _49.QueryDelegatorValidatorsRequestAminoMsg): _49.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _49.QueryDelegatorValidatorsRequest): _49.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _49.QueryDelegatorValidatorsRequestProtoMsg): _49.QueryDelegatorValidatorsRequest;
                toProto(message: _49.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _49.QueryDelegatorValidatorsRequest): _49.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _49.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_49.QueryDelegatorValidatorsResponse>): _49.QueryDelegatorValidatorsResponse;
                fromAmino(object: _49.QueryDelegatorValidatorsResponseAmino): _49.QueryDelegatorValidatorsResponse;
                toAmino(message: _49.QueryDelegatorValidatorsResponse): _49.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _49.QueryDelegatorValidatorsResponseAminoMsg): _49.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _49.QueryDelegatorValidatorsResponse): _49.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _49.QueryDelegatorValidatorsResponseProtoMsg): _49.QueryDelegatorValidatorsResponse;
                toProto(message: _49.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _49.QueryDelegatorValidatorsResponse): _49.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _49.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_49.QueryDelegatorWithdrawAddressRequest>): _49.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _49.QueryDelegatorWithdrawAddressRequestAmino): _49.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _49.QueryDelegatorWithdrawAddressRequest): _49.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _49.QueryDelegatorWithdrawAddressRequestAminoMsg): _49.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _49.QueryDelegatorWithdrawAddressRequest): _49.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _49.QueryDelegatorWithdrawAddressRequestProtoMsg): _49.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _49.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _49.QueryDelegatorWithdrawAddressRequest): _49.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _49.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_49.QueryDelegatorWithdrawAddressResponse>): _49.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _49.QueryDelegatorWithdrawAddressResponseAmino): _49.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _49.QueryDelegatorWithdrawAddressResponse): _49.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _49.QueryDelegatorWithdrawAddressResponseAminoMsg): _49.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _49.QueryDelegatorWithdrawAddressResponse): _49.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _49.QueryDelegatorWithdrawAddressResponseProtoMsg): _49.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _49.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _49.QueryDelegatorWithdrawAddressResponse): _49.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryFoundationTaxRequest: {
                typeUrl: string;
                encode(_: _49.QueryFoundationTaxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.QueryFoundationTaxRequest;
                fromPartial(_: Partial<_49.QueryFoundationTaxRequest>): _49.QueryFoundationTaxRequest;
                fromAmino(_: _49.QueryFoundationTaxRequestAmino): _49.QueryFoundationTaxRequest;
                toAmino(_: _49.QueryFoundationTaxRequest): _49.QueryFoundationTaxRequestAmino;
                fromAminoMsg(object: _49.QueryFoundationTaxRequestAminoMsg): _49.QueryFoundationTaxRequest;
                toAminoMsg(message: _49.QueryFoundationTaxRequest): _49.QueryFoundationTaxRequestAminoMsg;
                fromProtoMsg(message: _49.QueryFoundationTaxRequestProtoMsg): _49.QueryFoundationTaxRequest;
                toProto(message: _49.QueryFoundationTaxRequest): Uint8Array;
                toProtoMsg(message: _49.QueryFoundationTaxRequest): _49.QueryFoundationTaxRequestProtoMsg;
            };
            QueryFoundationTaxResponse: {
                typeUrl: string;
                encode(message: _49.QueryFoundationTaxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryFoundationTaxResponse;
                fromPartial(object: Partial<_49.QueryFoundationTaxResponse>): _49.QueryFoundationTaxResponse;
                fromAmino(object: _49.QueryFoundationTaxResponseAmino): _49.QueryFoundationTaxResponse;
                toAmino(message: _49.QueryFoundationTaxResponse): _49.QueryFoundationTaxResponseAmino;
                fromAminoMsg(object: _49.QueryFoundationTaxResponseAminoMsg): _49.QueryFoundationTaxResponse;
                toAminoMsg(message: _49.QueryFoundationTaxResponse): _49.QueryFoundationTaxResponseAminoMsg;
                fromProtoMsg(message: _49.QueryFoundationTaxResponseProtoMsg): _49.QueryFoundationTaxResponse;
                toProto(message: _49.QueryFoundationTaxResponse): Uint8Array;
                toProtoMsg(message: _49.QueryFoundationTaxResponse): _49.QueryFoundationTaxResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _49.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_49.QueryCommunityPoolRequest>): _49.QueryCommunityPoolRequest;
                fromAmino(_: _49.QueryCommunityPoolRequestAmino): _49.QueryCommunityPoolRequest;
                toAmino(_: _49.QueryCommunityPoolRequest): _49.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _49.QueryCommunityPoolRequestAminoMsg): _49.QueryCommunityPoolRequest;
                toAminoMsg(message: _49.QueryCommunityPoolRequest): _49.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _49.QueryCommunityPoolRequestProtoMsg): _49.QueryCommunityPoolRequest;
                toProto(message: _49.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _49.QueryCommunityPoolRequest): _49.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _49.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_49.QueryCommunityPoolResponse>): _49.QueryCommunityPoolResponse;
                fromAmino(object: _49.QueryCommunityPoolResponseAmino): _49.QueryCommunityPoolResponse;
                toAmino(message: _49.QueryCommunityPoolResponse): _49.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _49.QueryCommunityPoolResponseAminoMsg): _49.QueryCommunityPoolResponse;
                toAminoMsg(message: _49.QueryCommunityPoolResponse): _49.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _49.QueryCommunityPoolResponseProtoMsg): _49.QueryCommunityPoolResponse;
                toProto(message: _49.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _49.QueryCommunityPoolResponse): _49.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _48.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_48.DelegatorWithdrawInfo>): _48.DelegatorWithdrawInfo;
                fromAmino(object: _48.DelegatorWithdrawInfoAmino): _48.DelegatorWithdrawInfo;
                toAmino(message: _48.DelegatorWithdrawInfo): _48.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _48.DelegatorWithdrawInfoAminoMsg): _48.DelegatorWithdrawInfo;
                toAminoMsg(message: _48.DelegatorWithdrawInfo): _48.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _48.DelegatorWithdrawInfoProtoMsg): _48.DelegatorWithdrawInfo;
                toProto(message: _48.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _48.DelegatorWithdrawInfo): _48.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _48.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_48.ValidatorOutstandingRewardsRecord>): _48.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _48.ValidatorOutstandingRewardsRecordAmino): _48.ValidatorOutstandingRewardsRecord;
                toAmino(message: _48.ValidatorOutstandingRewardsRecord): _48.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _48.ValidatorOutstandingRewardsRecordAminoMsg): _48.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _48.ValidatorOutstandingRewardsRecord): _48.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _48.ValidatorOutstandingRewardsRecordProtoMsg): _48.ValidatorOutstandingRewardsRecord;
                toProto(message: _48.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _48.ValidatorOutstandingRewardsRecord): _48.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _48.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_48.ValidatorAccumulatedCommissionRecord>): _48.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _48.ValidatorAccumulatedCommissionRecordAmino): _48.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _48.ValidatorAccumulatedCommissionRecord): _48.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _48.ValidatorAccumulatedCommissionRecordAminoMsg): _48.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _48.ValidatorAccumulatedCommissionRecord): _48.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _48.ValidatorAccumulatedCommissionRecordProtoMsg): _48.ValidatorAccumulatedCommissionRecord;
                toProto(message: _48.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _48.ValidatorAccumulatedCommissionRecord): _48.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _48.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_48.ValidatorHistoricalRewardsRecord>): _48.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _48.ValidatorHistoricalRewardsRecordAmino): _48.ValidatorHistoricalRewardsRecord;
                toAmino(message: _48.ValidatorHistoricalRewardsRecord): _48.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _48.ValidatorHistoricalRewardsRecordAminoMsg): _48.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _48.ValidatorHistoricalRewardsRecord): _48.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _48.ValidatorHistoricalRewardsRecordProtoMsg): _48.ValidatorHistoricalRewardsRecord;
                toProto(message: _48.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _48.ValidatorHistoricalRewardsRecord): _48.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _48.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_48.ValidatorCurrentRewardsRecord>): _48.ValidatorCurrentRewardsRecord;
                fromAmino(object: _48.ValidatorCurrentRewardsRecordAmino): _48.ValidatorCurrentRewardsRecord;
                toAmino(message: _48.ValidatorCurrentRewardsRecord): _48.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _48.ValidatorCurrentRewardsRecordAminoMsg): _48.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _48.ValidatorCurrentRewardsRecord): _48.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _48.ValidatorCurrentRewardsRecordProtoMsg): _48.ValidatorCurrentRewardsRecord;
                toProto(message: _48.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _48.ValidatorCurrentRewardsRecord): _48.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _48.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_48.DelegatorStartingInfoRecord>): _48.DelegatorStartingInfoRecord;
                fromAmino(object: _48.DelegatorStartingInfoRecordAmino): _48.DelegatorStartingInfoRecord;
                toAmino(message: _48.DelegatorStartingInfoRecord): _48.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _48.DelegatorStartingInfoRecordAminoMsg): _48.DelegatorStartingInfoRecord;
                toAminoMsg(message: _48.DelegatorStartingInfoRecord): _48.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _48.DelegatorStartingInfoRecordProtoMsg): _48.DelegatorStartingInfoRecord;
                toProto(message: _48.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _48.DelegatorStartingInfoRecord): _48.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _48.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_48.ValidatorSlashEventRecord>): _48.ValidatorSlashEventRecord;
                fromAmino(object: _48.ValidatorSlashEventRecordAmino): _48.ValidatorSlashEventRecord;
                toAmino(message: _48.ValidatorSlashEventRecord): _48.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _48.ValidatorSlashEventRecordAminoMsg): _48.ValidatorSlashEventRecord;
                toAminoMsg(message: _48.ValidatorSlashEventRecord): _48.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _48.ValidatorSlashEventRecordProtoMsg): _48.ValidatorSlashEventRecord;
                toProto(message: _48.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _48.ValidatorSlashEventRecord): _48.ValidatorSlashEventRecordProtoMsg;
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
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _47.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_47.ValidatorHistoricalRewards>): _47.ValidatorHistoricalRewards;
                fromAmino(object: _47.ValidatorHistoricalRewardsAmino): _47.ValidatorHistoricalRewards;
                toAmino(message: _47.ValidatorHistoricalRewards): _47.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _47.ValidatorHistoricalRewardsAminoMsg): _47.ValidatorHistoricalRewards;
                toAminoMsg(message: _47.ValidatorHistoricalRewards): _47.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _47.ValidatorHistoricalRewardsProtoMsg): _47.ValidatorHistoricalRewards;
                toProto(message: _47.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _47.ValidatorHistoricalRewards): _47.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _47.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.ValidatorCurrentRewards;
                fromPartial(object: Partial<_47.ValidatorCurrentRewards>): _47.ValidatorCurrentRewards;
                fromAmino(object: _47.ValidatorCurrentRewardsAmino): _47.ValidatorCurrentRewards;
                toAmino(message: _47.ValidatorCurrentRewards): _47.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _47.ValidatorCurrentRewardsAminoMsg): _47.ValidatorCurrentRewards;
                toAminoMsg(message: _47.ValidatorCurrentRewards): _47.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _47.ValidatorCurrentRewardsProtoMsg): _47.ValidatorCurrentRewards;
                toProto(message: _47.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _47.ValidatorCurrentRewards): _47.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _47.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_47.ValidatorAccumulatedCommission>): _47.ValidatorAccumulatedCommission;
                fromAmino(object: _47.ValidatorAccumulatedCommissionAmino): _47.ValidatorAccumulatedCommission;
                toAmino(message: _47.ValidatorAccumulatedCommission): _47.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _47.ValidatorAccumulatedCommissionAminoMsg): _47.ValidatorAccumulatedCommission;
                toAminoMsg(message: _47.ValidatorAccumulatedCommission): _47.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _47.ValidatorAccumulatedCommissionProtoMsg): _47.ValidatorAccumulatedCommission;
                toProto(message: _47.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _47.ValidatorAccumulatedCommission): _47.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _47.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_47.ValidatorOutstandingRewards>): _47.ValidatorOutstandingRewards;
                fromAmino(object: _47.ValidatorOutstandingRewardsAmino): _47.ValidatorOutstandingRewards;
                toAmino(message: _47.ValidatorOutstandingRewards): _47.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _47.ValidatorOutstandingRewardsAminoMsg): _47.ValidatorOutstandingRewards;
                toAminoMsg(message: _47.ValidatorOutstandingRewards): _47.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _47.ValidatorOutstandingRewardsProtoMsg): _47.ValidatorOutstandingRewards;
                toProto(message: _47.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _47.ValidatorOutstandingRewards): _47.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _47.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.ValidatorSlashEvent;
                fromPartial(object: Partial<_47.ValidatorSlashEvent>): _47.ValidatorSlashEvent;
                fromAmino(object: _47.ValidatorSlashEventAmino): _47.ValidatorSlashEvent;
                toAmino(message: _47.ValidatorSlashEvent): _47.ValidatorSlashEventAmino;
                fromAminoMsg(object: _47.ValidatorSlashEventAminoMsg): _47.ValidatorSlashEvent;
                toAminoMsg(message: _47.ValidatorSlashEvent): _47.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _47.ValidatorSlashEventProtoMsg): _47.ValidatorSlashEvent;
                toProto(message: _47.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _47.ValidatorSlashEvent): _47.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _47.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.ValidatorSlashEvents;
                fromPartial(object: Partial<_47.ValidatorSlashEvents>): _47.ValidatorSlashEvents;
                fromAmino(object: _47.ValidatorSlashEventsAmino): _47.ValidatorSlashEvents;
                toAmino(message: _47.ValidatorSlashEvents): _47.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _47.ValidatorSlashEventsAminoMsg): _47.ValidatorSlashEvents;
                toAminoMsg(message: _47.ValidatorSlashEvents): _47.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _47.ValidatorSlashEventsProtoMsg): _47.ValidatorSlashEvents;
                toProto(message: _47.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _47.ValidatorSlashEvents): _47.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _47.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.FeePool;
                fromPartial(object: Partial<_47.FeePool>): _47.FeePool;
                fromAmino(object: _47.FeePoolAmino): _47.FeePool;
                toAmino(message: _47.FeePool): _47.FeePoolAmino;
                fromAminoMsg(object: _47.FeePoolAminoMsg): _47.FeePool;
                toAminoMsg(message: _47.FeePool): _47.FeePoolAminoMsg;
                fromProtoMsg(message: _47.FeePoolProtoMsg): _47.FeePool;
                toProto(message: _47.FeePool): Uint8Array;
                toProtoMsg(message: _47.FeePool): _47.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _47.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_47.CommunityPoolSpendProposal>): _47.CommunityPoolSpendProposal;
                fromAmino(object: _47.CommunityPoolSpendProposalAmino): _47.CommunityPoolSpendProposal;
                toAmino(message: _47.CommunityPoolSpendProposal): _47.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _47.CommunityPoolSpendProposalAminoMsg): _47.CommunityPoolSpendProposal;
                toAminoMsg(message: _47.CommunityPoolSpendProposal): _47.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _47.CommunityPoolSpendProposalProtoMsg): _47.CommunityPoolSpendProposal;
                toProto(message: _47.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _47.CommunityPoolSpendProposal): _47.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _47.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.DelegatorStartingInfo;
                fromPartial(object: Partial<_47.DelegatorStartingInfo>): _47.DelegatorStartingInfo;
                fromAmino(object: _47.DelegatorStartingInfoAmino): _47.DelegatorStartingInfo;
                toAmino(message: _47.DelegatorStartingInfo): _47.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _47.DelegatorStartingInfoAminoMsg): _47.DelegatorStartingInfo;
                toAminoMsg(message: _47.DelegatorStartingInfo): _47.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _47.DelegatorStartingInfoProtoMsg): _47.DelegatorStartingInfo;
                toProto(message: _47.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _47.DelegatorStartingInfo): _47.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _47.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.DelegationDelegatorReward;
                fromPartial(object: Partial<_47.DelegationDelegatorReward>): _47.DelegationDelegatorReward;
                fromAmino(object: _47.DelegationDelegatorRewardAmino): _47.DelegationDelegatorReward;
                toAmino(message: _47.DelegationDelegatorReward): _47.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _47.DelegationDelegatorRewardAminoMsg): _47.DelegationDelegatorReward;
                toAminoMsg(message: _47.DelegationDelegatorReward): _47.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _47.DelegationDelegatorRewardProtoMsg): _47.DelegationDelegatorReward;
                toProto(message: _47.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _47.DelegationDelegatorReward): _47.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _47.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_47.CommunityPoolSpendProposalWithDeposit>): _47.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _47.CommunityPoolSpendProposalWithDepositAmino): _47.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _47.CommunityPoolSpendProposalWithDeposit): _47.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _47.CommunityPoolSpendProposalWithDepositAminoMsg): _47.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _47.CommunityPoolSpendProposalWithDeposit): _47.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _47.CommunityPoolSpendProposalWithDepositProtoMsg): _47.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _47.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _47.CommunityPoolSpendProposalWithDeposit): _47.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _230.MsgClientImpl;
            QueryClientImpl: typeof _217.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _53.QueryEvidenceRequest): Promise<_53.QueryEvidenceResponse>;
                allEvidence(request?: _53.QueryAllEvidenceRequest): Promise<_53.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _202.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _54.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _54.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _54.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _54.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _54.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _54.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _54.MsgSubmitEvidence) => _54.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _54.MsgSubmitEvidenceAmino) => _54.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _54.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.MsgSubmitEvidence;
                fromPartial(object: Partial<_54.MsgSubmitEvidence>): _54.MsgSubmitEvidence;
                fromAmino(object: _54.MsgSubmitEvidenceAmino): _54.MsgSubmitEvidence;
                toAmino(message: _54.MsgSubmitEvidence): _54.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _54.MsgSubmitEvidenceAminoMsg): _54.MsgSubmitEvidence;
                toAminoMsg(message: _54.MsgSubmitEvidence): _54.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _54.MsgSubmitEvidenceProtoMsg): _54.MsgSubmitEvidence;
                toProto(message: _54.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _54.MsgSubmitEvidence): _54.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _54.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_54.MsgSubmitEvidenceResponse>): _54.MsgSubmitEvidenceResponse;
                fromAmino(object: _54.MsgSubmitEvidenceResponseAmino): _54.MsgSubmitEvidenceResponse;
                toAmino(message: _54.MsgSubmitEvidenceResponse): _54.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _54.MsgSubmitEvidenceResponseAminoMsg): _54.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _54.MsgSubmitEvidenceResponse): _54.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _54.MsgSubmitEvidenceResponseProtoMsg): _54.MsgSubmitEvidenceResponse;
                toProto(message: _54.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _54.MsgSubmitEvidenceResponse): _54.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _53.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryEvidenceRequest;
                fromPartial(object: Partial<_53.QueryEvidenceRequest>): _53.QueryEvidenceRequest;
                fromAmino(object: _53.QueryEvidenceRequestAmino): _53.QueryEvidenceRequest;
                toAmino(message: _53.QueryEvidenceRequest): _53.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _53.QueryEvidenceRequestAminoMsg): _53.QueryEvidenceRequest;
                toAminoMsg(message: _53.QueryEvidenceRequest): _53.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _53.QueryEvidenceRequestProtoMsg): _53.QueryEvidenceRequest;
                toProto(message: _53.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _53.QueryEvidenceRequest): _53.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _53.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryEvidenceResponse;
                fromPartial(object: Partial<_53.QueryEvidenceResponse>): _53.QueryEvidenceResponse;
                fromAmino(object: _53.QueryEvidenceResponseAmino): _53.QueryEvidenceResponse;
                toAmino(message: _53.QueryEvidenceResponse): _53.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _53.QueryEvidenceResponseAminoMsg): _53.QueryEvidenceResponse;
                toAminoMsg(message: _53.QueryEvidenceResponse): _53.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _53.QueryEvidenceResponseProtoMsg): _53.QueryEvidenceResponse;
                toProto(message: _53.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _53.QueryEvidenceResponse): _53.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _53.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_53.QueryAllEvidenceRequest>): _53.QueryAllEvidenceRequest;
                fromAmino(object: _53.QueryAllEvidenceRequestAmino): _53.QueryAllEvidenceRequest;
                toAmino(message: _53.QueryAllEvidenceRequest): _53.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _53.QueryAllEvidenceRequestAminoMsg): _53.QueryAllEvidenceRequest;
                toAminoMsg(message: _53.QueryAllEvidenceRequest): _53.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _53.QueryAllEvidenceRequestProtoMsg): _53.QueryAllEvidenceRequest;
                toProto(message: _53.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _53.QueryAllEvidenceRequest): _53.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _53.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_53.QueryAllEvidenceResponse>): _53.QueryAllEvidenceResponse;
                fromAmino(object: _53.QueryAllEvidenceResponseAmino): _53.QueryAllEvidenceResponse;
                toAmino(message: _53.QueryAllEvidenceResponse): _53.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _53.QueryAllEvidenceResponseAminoMsg): _53.QueryAllEvidenceResponse;
                toAminoMsg(message: _53.QueryAllEvidenceResponse): _53.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _53.QueryAllEvidenceResponseProtoMsg): _53.QueryAllEvidenceResponse;
                toProto(message: _53.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _53.QueryAllEvidenceResponse): _53.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _51.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.Equivocation;
                fromPartial(object: Partial<_51.Equivocation>): _51.Equivocation;
                fromAmino(object: _51.EquivocationAmino): _51.Equivocation;
                toAmino(message: _51.Equivocation): _51.EquivocationAmino;
                fromAminoMsg(object: _51.EquivocationAminoMsg): _51.Equivocation;
                toAminoMsg(message: _51.Equivocation): _51.EquivocationAminoMsg;
                fromProtoMsg(message: _51.EquivocationProtoMsg): _51.Equivocation;
                toProto(message: _51.Equivocation): Uint8Array;
                toProtoMsg(message: _51.Equivocation): _51.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _231.MsgClientImpl;
            QueryClientImpl: typeof _218.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _57.QueryAllowanceRequest): Promise<_57.QueryAllowanceResponse>;
                allowances(request: _57.QueryAllowancesRequest): Promise<_57.QueryAllowancesResponse>;
                allowancesByGranter(request: _57.QueryAllowancesByGranterRequest): Promise<_57.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _203.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _58.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _58.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _58.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _58.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _58.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _58.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _58.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _58.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _58.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _58.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _58.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _58.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _58.MsgGrantAllowance) => _58.MsgGrantAllowanceAmino;
                    fromAmino: (object: _58.MsgGrantAllowanceAmino) => _58.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _58.MsgRevokeAllowance) => _58.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _58.MsgRevokeAllowanceAmino) => _58.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _58.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.MsgGrantAllowance;
                fromPartial(object: Partial<_58.MsgGrantAllowance>): _58.MsgGrantAllowance;
                fromAmino(object: _58.MsgGrantAllowanceAmino): _58.MsgGrantAllowance;
                toAmino(message: _58.MsgGrantAllowance): _58.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _58.MsgGrantAllowanceAminoMsg): _58.MsgGrantAllowance;
                toAminoMsg(message: _58.MsgGrantAllowance): _58.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _58.MsgGrantAllowanceProtoMsg): _58.MsgGrantAllowance;
                toProto(message: _58.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _58.MsgGrantAllowance): _58.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _58.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_58.MsgGrantAllowanceResponse>): _58.MsgGrantAllowanceResponse;
                fromAmino(_: _58.MsgGrantAllowanceResponseAmino): _58.MsgGrantAllowanceResponse;
                toAmino(_: _58.MsgGrantAllowanceResponse): _58.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _58.MsgGrantAllowanceResponseAminoMsg): _58.MsgGrantAllowanceResponse;
                toAminoMsg(message: _58.MsgGrantAllowanceResponse): _58.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _58.MsgGrantAllowanceResponseProtoMsg): _58.MsgGrantAllowanceResponse;
                toProto(message: _58.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _58.MsgGrantAllowanceResponse): _58.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _58.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.MsgRevokeAllowance;
                fromPartial(object: Partial<_58.MsgRevokeAllowance>): _58.MsgRevokeAllowance;
                fromAmino(object: _58.MsgRevokeAllowanceAmino): _58.MsgRevokeAllowance;
                toAmino(message: _58.MsgRevokeAllowance): _58.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _58.MsgRevokeAllowanceAminoMsg): _58.MsgRevokeAllowance;
                toAminoMsg(message: _58.MsgRevokeAllowance): _58.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _58.MsgRevokeAllowanceProtoMsg): _58.MsgRevokeAllowance;
                toProto(message: _58.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _58.MsgRevokeAllowance): _58.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _58.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_58.MsgRevokeAllowanceResponse>): _58.MsgRevokeAllowanceResponse;
                fromAmino(_: _58.MsgRevokeAllowanceResponseAmino): _58.MsgRevokeAllowanceResponse;
                toAmino(_: _58.MsgRevokeAllowanceResponse): _58.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _58.MsgRevokeAllowanceResponseAminoMsg): _58.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _58.MsgRevokeAllowanceResponse): _58.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _58.MsgRevokeAllowanceResponseProtoMsg): _58.MsgRevokeAllowanceResponse;
                toProto(message: _58.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _58.MsgRevokeAllowanceResponse): _58.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _55.BasicAllowance | _55.PeriodicAllowance | _55.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _57.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryAllowanceRequest;
                fromPartial(object: Partial<_57.QueryAllowanceRequest>): _57.QueryAllowanceRequest;
                fromAmino(object: _57.QueryAllowanceRequestAmino): _57.QueryAllowanceRequest;
                toAmino(message: _57.QueryAllowanceRequest): _57.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _57.QueryAllowanceRequestAminoMsg): _57.QueryAllowanceRequest;
                toAminoMsg(message: _57.QueryAllowanceRequest): _57.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _57.QueryAllowanceRequestProtoMsg): _57.QueryAllowanceRequest;
                toProto(message: _57.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _57.QueryAllowanceRequest): _57.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _57.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryAllowanceResponse;
                fromPartial(object: Partial<_57.QueryAllowanceResponse>): _57.QueryAllowanceResponse;
                fromAmino(object: _57.QueryAllowanceResponseAmino): _57.QueryAllowanceResponse;
                toAmino(message: _57.QueryAllowanceResponse): _57.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _57.QueryAllowanceResponseAminoMsg): _57.QueryAllowanceResponse;
                toAminoMsg(message: _57.QueryAllowanceResponse): _57.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _57.QueryAllowanceResponseProtoMsg): _57.QueryAllowanceResponse;
                toProto(message: _57.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _57.QueryAllowanceResponse): _57.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _57.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryAllowancesRequest;
                fromPartial(object: Partial<_57.QueryAllowancesRequest>): _57.QueryAllowancesRequest;
                fromAmino(object: _57.QueryAllowancesRequestAmino): _57.QueryAllowancesRequest;
                toAmino(message: _57.QueryAllowancesRequest): _57.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _57.QueryAllowancesRequestAminoMsg): _57.QueryAllowancesRequest;
                toAminoMsg(message: _57.QueryAllowancesRequest): _57.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _57.QueryAllowancesRequestProtoMsg): _57.QueryAllowancesRequest;
                toProto(message: _57.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _57.QueryAllowancesRequest): _57.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _57.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryAllowancesResponse;
                fromPartial(object: Partial<_57.QueryAllowancesResponse>): _57.QueryAllowancesResponse;
                fromAmino(object: _57.QueryAllowancesResponseAmino): _57.QueryAllowancesResponse;
                toAmino(message: _57.QueryAllowancesResponse): _57.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _57.QueryAllowancesResponseAminoMsg): _57.QueryAllowancesResponse;
                toAminoMsg(message: _57.QueryAllowancesResponse): _57.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _57.QueryAllowancesResponseProtoMsg): _57.QueryAllowancesResponse;
                toProto(message: _57.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _57.QueryAllowancesResponse): _57.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _57.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_57.QueryAllowancesByGranterRequest>): _57.QueryAllowancesByGranterRequest;
                fromAmino(object: _57.QueryAllowancesByGranterRequestAmino): _57.QueryAllowancesByGranterRequest;
                toAmino(message: _57.QueryAllowancesByGranterRequest): _57.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _57.QueryAllowancesByGranterRequestAminoMsg): _57.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _57.QueryAllowancesByGranterRequest): _57.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _57.QueryAllowancesByGranterRequestProtoMsg): _57.QueryAllowancesByGranterRequest;
                toProto(message: _57.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _57.QueryAllowancesByGranterRequest): _57.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _57.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_57.QueryAllowancesByGranterResponse>): _57.QueryAllowancesByGranterResponse;
                fromAmino(object: _57.QueryAllowancesByGranterResponseAmino): _57.QueryAllowancesByGranterResponse;
                toAmino(message: _57.QueryAllowancesByGranterResponse): _57.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _57.QueryAllowancesByGranterResponseAminoMsg): _57.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _57.QueryAllowancesByGranterResponse): _57.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _57.QueryAllowancesByGranterResponseProtoMsg): _57.QueryAllowancesByGranterResponse;
                toProto(message: _57.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _57.QueryAllowancesByGranterResponse): _57.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _55.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.BasicAllowance;
                fromPartial(object: Partial<_55.BasicAllowance>): _55.BasicAllowance;
                fromAmino(object: _55.BasicAllowanceAmino): _55.BasicAllowance;
                toAmino(message: _55.BasicAllowance): _55.BasicAllowanceAmino;
                fromAminoMsg(object: _55.BasicAllowanceAminoMsg): _55.BasicAllowance;
                toAminoMsg(message: _55.BasicAllowance): _55.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _55.BasicAllowanceProtoMsg): _55.BasicAllowance;
                toProto(message: _55.BasicAllowance): Uint8Array;
                toProtoMsg(message: _55.BasicAllowance): _55.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _55.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.PeriodicAllowance;
                fromPartial(object: Partial<_55.PeriodicAllowance>): _55.PeriodicAllowance;
                fromAmino(object: _55.PeriodicAllowanceAmino): _55.PeriodicAllowance;
                toAmino(message: _55.PeriodicAllowance): _55.PeriodicAllowanceAmino;
                fromAminoMsg(object: _55.PeriodicAllowanceAminoMsg): _55.PeriodicAllowance;
                toAminoMsg(message: _55.PeriodicAllowance): _55.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _55.PeriodicAllowanceProtoMsg): _55.PeriodicAllowance;
                toProto(message: _55.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _55.PeriodicAllowance): _55.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _55.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.AllowedMsgAllowance;
                fromPartial(object: Partial<_55.AllowedMsgAllowance>): _55.AllowedMsgAllowance;
                fromAmino(object: _55.AllowedMsgAllowanceAmino): _55.AllowedMsgAllowance;
                toAmino(message: _55.AllowedMsgAllowance): _55.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _55.AllowedMsgAllowanceAminoMsg): _55.AllowedMsgAllowance;
                toAminoMsg(message: _55.AllowedMsgAllowance): _55.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _55.AllowedMsgAllowanceProtoMsg): _55.AllowedMsgAllowance;
                toProto(message: _55.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _55.AllowedMsgAllowance): _55.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _55.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.Grant;
                fromPartial(object: Partial<_55.Grant>): _55.Grant;
                fromAmino(object: _55.GrantAmino): _55.Grant;
                toAmino(message: _55.Grant): _55.GrantAmino;
                fromAminoMsg(object: _55.GrantAminoMsg): _55.Grant;
                toAminoMsg(message: _55.Grant): _55.GrantAminoMsg;
                fromProtoMsg(message: _55.GrantProtoMsg): _55.Grant;
                toProto(message: _55.Grant): Uint8Array;
                toProtoMsg(message: _55.Grant): _55.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _232.MsgClientImpl;
            QueryClientImpl: typeof _219.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _62.QueryProposalRequest): Promise<_62.QueryProposalResponse>;
                proposals(request: _62.QueryProposalsRequest): Promise<_62.QueryProposalsResponse>;
                vote(request: _62.QueryVoteRequest): Promise<_62.QueryVoteResponse>;
                votes(request: _62.QueryVotesRequest): Promise<_62.QueryVotesResponse>;
                params(request: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
                deposit(request: _62.QueryDepositRequest): Promise<_62.QueryDepositResponse>;
                deposits(request: _62.QueryDepositsRequest): Promise<_62.QueryDepositsResponse>;
                tallyResult(request: _62.QueryTallyResultRequest): Promise<_62.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _204.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _63.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _63.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    voteWeighted(value: _63.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _63.MsgVoteWeighted;
                    };
                    deposit(value: _63.MsgDeposit): {
                        typeUrl: string;
                        value: _63.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _63.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _63.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    voteWeighted(value: _63.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _63.MsgVoteWeighted;
                    };
                    deposit(value: _63.MsgDeposit): {
                        typeUrl: string;
                        value: _63.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _63.MsgSubmitProposal) => _63.MsgSubmitProposalAmino;
                    fromAmino: (object: _63.MsgSubmitProposalAmino) => _63.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _63.MsgVote) => _63.MsgVoteAmino;
                    fromAmino: (object: _63.MsgVoteAmino) => _63.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _63.MsgVoteWeighted) => _63.MsgVoteWeightedAmino;
                    fromAmino: (object: _63.MsgVoteWeightedAmino) => _63.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _63.MsgDeposit) => _63.MsgDepositAmino;
                    fromAmino: (object: _63.MsgDepositAmino) => _63.MsgDeposit;
                };
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
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _63.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgVoteWeighted;
                fromPartial(object: Partial<_63.MsgVoteWeighted>): _63.MsgVoteWeighted;
                fromAmino(object: _63.MsgVoteWeightedAmino): _63.MsgVoteWeighted;
                toAmino(message: _63.MsgVoteWeighted): _63.MsgVoteWeightedAmino;
                fromAminoMsg(object: _63.MsgVoteWeightedAminoMsg): _63.MsgVoteWeighted;
                toAminoMsg(message: _63.MsgVoteWeighted): _63.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _63.MsgVoteWeightedProtoMsg): _63.MsgVoteWeighted;
                toProto(message: _63.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _63.MsgVoteWeighted): _63.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _63.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _63.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_63.MsgVoteWeightedResponse>): _63.MsgVoteWeightedResponse;
                fromAmino(_: _63.MsgVoteWeightedResponseAmino): _63.MsgVoteWeightedResponse;
                toAmino(_: _63.MsgVoteWeightedResponse): _63.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _63.MsgVoteWeightedResponseAminoMsg): _63.MsgVoteWeightedResponse;
                toAminoMsg(message: _63.MsgVoteWeightedResponse): _63.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _63.MsgVoteWeightedResponseProtoMsg): _63.MsgVoteWeightedResponse;
                toProto(message: _63.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _63.MsgVoteWeightedResponse): _63.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _63.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgDeposit;
                fromPartial(object: Partial<_63.MsgDeposit>): _63.MsgDeposit;
                fromAmino(object: _63.MsgDepositAmino): _63.MsgDeposit;
                toAmino(message: _63.MsgDeposit): _63.MsgDepositAmino;
                fromAminoMsg(object: _63.MsgDepositAminoMsg): _63.MsgDeposit;
                toAminoMsg(message: _63.MsgDeposit): _63.MsgDepositAminoMsg;
                fromProtoMsg(message: _63.MsgDepositProtoMsg): _63.MsgDeposit;
                toProto(message: _63.MsgDeposit): Uint8Array;
                toProtoMsg(message: _63.MsgDeposit): _63.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _63.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _63.MsgDepositResponse;
                fromPartial(_: Partial<_63.MsgDepositResponse>): _63.MsgDepositResponse;
                fromAmino(_: _63.MsgDepositResponseAmino): _63.MsgDepositResponse;
                toAmino(_: _63.MsgDepositResponse): _63.MsgDepositResponseAmino;
                fromAminoMsg(object: _63.MsgDepositResponseAminoMsg): _63.MsgDepositResponse;
                toAminoMsg(message: _63.MsgDepositResponse): _63.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _63.MsgDepositResponseProtoMsg): _63.MsgDepositResponse;
                toProto(message: _63.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _63.MsgDepositResponse): _63.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _61.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _62.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryProposalsRequest;
                fromPartial(object: Partial<_62.QueryProposalsRequest>): _62.QueryProposalsRequest;
                fromAmino(object: _62.QueryProposalsRequestAmino): _62.QueryProposalsRequest;
                toAmino(message: _62.QueryProposalsRequest): _62.QueryProposalsRequestAmino;
                fromAminoMsg(object: _62.QueryProposalsRequestAminoMsg): _62.QueryProposalsRequest;
                toAminoMsg(message: _62.QueryProposalsRequest): _62.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _62.QueryProposalsRequestProtoMsg): _62.QueryProposalsRequest;
                toProto(message: _62.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _62.QueryProposalsRequest): _62.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _62.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryProposalsResponse;
                fromPartial(object: Partial<_62.QueryProposalsResponse>): _62.QueryProposalsResponse;
                fromAmino(object: _62.QueryProposalsResponseAmino): _62.QueryProposalsResponse;
                toAmino(message: _62.QueryProposalsResponse): _62.QueryProposalsResponseAmino;
                fromAminoMsg(object: _62.QueryProposalsResponseAminoMsg): _62.QueryProposalsResponse;
                toAminoMsg(message: _62.QueryProposalsResponse): _62.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _62.QueryProposalsResponseProtoMsg): _62.QueryProposalsResponse;
                toProto(message: _62.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _62.QueryProposalsResponse): _62.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _62.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryVoteRequest;
                fromPartial(object: Partial<_62.QueryVoteRequest>): _62.QueryVoteRequest;
                fromAmino(object: _62.QueryVoteRequestAmino): _62.QueryVoteRequest;
                toAmino(message: _62.QueryVoteRequest): _62.QueryVoteRequestAmino;
                fromAminoMsg(object: _62.QueryVoteRequestAminoMsg): _62.QueryVoteRequest;
                toAminoMsg(message: _62.QueryVoteRequest): _62.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _62.QueryVoteRequestProtoMsg): _62.QueryVoteRequest;
                toProto(message: _62.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _62.QueryVoteRequest): _62.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _62.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryVoteResponse;
                fromPartial(object: Partial<_62.QueryVoteResponse>): _62.QueryVoteResponse;
                fromAmino(object: _62.QueryVoteResponseAmino): _62.QueryVoteResponse;
                toAmino(message: _62.QueryVoteResponse): _62.QueryVoteResponseAmino;
                fromAminoMsg(object: _62.QueryVoteResponseAminoMsg): _62.QueryVoteResponse;
                toAminoMsg(message: _62.QueryVoteResponse): _62.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _62.QueryVoteResponseProtoMsg): _62.QueryVoteResponse;
                toProto(message: _62.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _62.QueryVoteResponse): _62.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _62.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryVotesRequest;
                fromPartial(object: Partial<_62.QueryVotesRequest>): _62.QueryVotesRequest;
                fromAmino(object: _62.QueryVotesRequestAmino): _62.QueryVotesRequest;
                toAmino(message: _62.QueryVotesRequest): _62.QueryVotesRequestAmino;
                fromAminoMsg(object: _62.QueryVotesRequestAminoMsg): _62.QueryVotesRequest;
                toAminoMsg(message: _62.QueryVotesRequest): _62.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _62.QueryVotesRequestProtoMsg): _62.QueryVotesRequest;
                toProto(message: _62.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _62.QueryVotesRequest): _62.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _62.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryVotesResponse;
                fromPartial(object: Partial<_62.QueryVotesResponse>): _62.QueryVotesResponse;
                fromAmino(object: _62.QueryVotesResponseAmino): _62.QueryVotesResponse;
                toAmino(message: _62.QueryVotesResponse): _62.QueryVotesResponseAmino;
                fromAminoMsg(object: _62.QueryVotesResponseAminoMsg): _62.QueryVotesResponse;
                toAminoMsg(message: _62.QueryVotesResponse): _62.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _62.QueryVotesResponseProtoMsg): _62.QueryVotesResponse;
                toProto(message: _62.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _62.QueryVotesResponse): _62.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _62.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryParamsRequest;
                fromPartial(object: Partial<_62.QueryParamsRequest>): _62.QueryParamsRequest;
                fromAmino(object: _62.QueryParamsRequestAmino): _62.QueryParamsRequest;
                toAmino(message: _62.QueryParamsRequest): _62.QueryParamsRequestAmino;
                fromAminoMsg(object: _62.QueryParamsRequestAminoMsg): _62.QueryParamsRequest;
                toAminoMsg(message: _62.QueryParamsRequest): _62.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _62.QueryParamsRequestProtoMsg): _62.QueryParamsRequest;
                toProto(message: _62.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _62.QueryParamsRequest): _62.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _62.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryParamsResponse;
                fromPartial(object: Partial<_62.QueryParamsResponse>): _62.QueryParamsResponse;
                fromAmino(object: _62.QueryParamsResponseAmino): _62.QueryParamsResponse;
                toAmino(message: _62.QueryParamsResponse): _62.QueryParamsResponseAmino;
                fromAminoMsg(object: _62.QueryParamsResponseAminoMsg): _62.QueryParamsResponse;
                toAminoMsg(message: _62.QueryParamsResponse): _62.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _62.QueryParamsResponseProtoMsg): _62.QueryParamsResponse;
                toProto(message: _62.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _62.QueryParamsResponse): _62.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _62.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryDepositRequest;
                fromPartial(object: Partial<_62.QueryDepositRequest>): _62.QueryDepositRequest;
                fromAmino(object: _62.QueryDepositRequestAmino): _62.QueryDepositRequest;
                toAmino(message: _62.QueryDepositRequest): _62.QueryDepositRequestAmino;
                fromAminoMsg(object: _62.QueryDepositRequestAminoMsg): _62.QueryDepositRequest;
                toAminoMsg(message: _62.QueryDepositRequest): _62.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _62.QueryDepositRequestProtoMsg): _62.QueryDepositRequest;
                toProto(message: _62.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _62.QueryDepositRequest): _62.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _62.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryDepositResponse;
                fromPartial(object: Partial<_62.QueryDepositResponse>): _62.QueryDepositResponse;
                fromAmino(object: _62.QueryDepositResponseAmino): _62.QueryDepositResponse;
                toAmino(message: _62.QueryDepositResponse): _62.QueryDepositResponseAmino;
                fromAminoMsg(object: _62.QueryDepositResponseAminoMsg): _62.QueryDepositResponse;
                toAminoMsg(message: _62.QueryDepositResponse): _62.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _62.QueryDepositResponseProtoMsg): _62.QueryDepositResponse;
                toProto(message: _62.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _62.QueryDepositResponse): _62.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _62.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryDepositsRequest;
                fromPartial(object: Partial<_62.QueryDepositsRequest>): _62.QueryDepositsRequest;
                fromAmino(object: _62.QueryDepositsRequestAmino): _62.QueryDepositsRequest;
                toAmino(message: _62.QueryDepositsRequest): _62.QueryDepositsRequestAmino;
                fromAminoMsg(object: _62.QueryDepositsRequestAminoMsg): _62.QueryDepositsRequest;
                toAminoMsg(message: _62.QueryDepositsRequest): _62.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _62.QueryDepositsRequestProtoMsg): _62.QueryDepositsRequest;
                toProto(message: _62.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _62.QueryDepositsRequest): _62.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _62.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryDepositsResponse;
                fromPartial(object: Partial<_62.QueryDepositsResponse>): _62.QueryDepositsResponse;
                fromAmino(object: _62.QueryDepositsResponseAmino): _62.QueryDepositsResponse;
                toAmino(message: _62.QueryDepositsResponse): _62.QueryDepositsResponseAmino;
                fromAminoMsg(object: _62.QueryDepositsResponseAminoMsg): _62.QueryDepositsResponse;
                toAminoMsg(message: _62.QueryDepositsResponse): _62.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _62.QueryDepositsResponseProtoMsg): _62.QueryDepositsResponse;
                toProto(message: _62.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _62.QueryDepositsResponse): _62.QueryDepositsResponseProtoMsg;
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
            voteOptionFromJSON(object: any): _61.VoteOption;
            voteOptionToJSON(object: _61.VoteOption): string;
            proposalStatusFromJSON(object: any): _61.ProposalStatus;
            proposalStatusToJSON(object: _61.ProposalStatus): string;
            VoteOption: typeof _61.VoteOption;
            VoteOptionSDKType: typeof _61.VoteOption;
            VoteOptionAmino: typeof _61.VoteOption;
            ProposalStatus: typeof _61.ProposalStatus;
            ProposalStatusSDKType: typeof _61.ProposalStatus;
            ProposalStatusAmino: typeof _61.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _61.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.WeightedVoteOption;
                fromPartial(object: Partial<_61.WeightedVoteOption>): _61.WeightedVoteOption;
                fromAmino(object: _61.WeightedVoteOptionAmino): _61.WeightedVoteOption;
                toAmino(message: _61.WeightedVoteOption): _61.WeightedVoteOptionAmino;
                fromAminoMsg(object: _61.WeightedVoteOptionAminoMsg): _61.WeightedVoteOption;
                toAminoMsg(message: _61.WeightedVoteOption): _61.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _61.WeightedVoteOptionProtoMsg): _61.WeightedVoteOption;
                toProto(message: _61.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _61.WeightedVoteOption): _61.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _61.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.TextProposal;
                fromPartial(object: Partial<_61.TextProposal>): _61.TextProposal;
                fromAmino(object: _61.TextProposalAmino): _61.TextProposal;
                toAmino(message: _61.TextProposal): _61.TextProposalAmino;
                fromAminoMsg(object: _61.TextProposalAminoMsg): _61.TextProposal;
                toAminoMsg(message: _61.TextProposal): _61.TextProposalAminoMsg;
                fromProtoMsg(message: _61.TextProposalProtoMsg): _61.TextProposal;
                toProto(message: _61.TextProposal): Uint8Array;
                toProtoMsg(message: _61.TextProposal): _61.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _61.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.Deposit;
                fromPartial(object: Partial<_61.Deposit>): _61.Deposit;
                fromAmino(object: _61.DepositAmino): _61.Deposit;
                toAmino(message: _61.Deposit): _61.DepositAmino;
                fromAminoMsg(object: _61.DepositAminoMsg): _61.Deposit;
                toAminoMsg(message: _61.Deposit): _61.DepositAminoMsg;
                fromProtoMsg(message: _61.DepositProtoMsg): _61.Deposit;
                toProto(message: _61.Deposit): Uint8Array;
                toProtoMsg(message: _61.Deposit): _61.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _61.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.Proposal;
                fromPartial(object: Partial<_61.Proposal>): _61.Proposal;
                fromAmino(object: _61.ProposalAmino): _61.Proposal;
                toAmino(message: _61.Proposal): _61.ProposalAmino;
                fromAminoMsg(object: _61.ProposalAminoMsg): _61.Proposal;
                toAminoMsg(message: _61.Proposal): _61.ProposalAminoMsg;
                fromProtoMsg(message: _61.ProposalProtoMsg): _61.Proposal;
                toProto(message: _61.Proposal): Uint8Array;
                toProtoMsg(message: _61.Proposal): _61.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _61.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.TallyResult;
                fromPartial(object: Partial<_61.TallyResult>): _61.TallyResult;
                fromAmino(object: _61.TallyResultAmino): _61.TallyResult;
                toAmino(message: _61.TallyResult): _61.TallyResultAmino;
                fromAminoMsg(object: _61.TallyResultAminoMsg): _61.TallyResult;
                toAminoMsg(message: _61.TallyResult): _61.TallyResultAminoMsg;
                fromProtoMsg(message: _61.TallyResultProtoMsg): _61.TallyResult;
                toProto(message: _61.TallyResult): Uint8Array;
                toProtoMsg(message: _61.TallyResult): _61.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _61.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.Vote;
                fromPartial(object: Partial<_61.Vote>): _61.Vote;
                fromAmino(object: _61.VoteAmino): _61.Vote;
                toAmino(message: _61.Vote): _61.VoteAmino;
                fromAminoMsg(object: _61.VoteAminoMsg): _61.Vote;
                toAminoMsg(message: _61.Vote): _61.VoteAminoMsg;
                fromProtoMsg(message: _61.VoteProtoMsg): _61.Vote;
                toProto(message: _61.Vote): Uint8Array;
                toProtoMsg(message: _61.Vote): _61.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _61.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.DepositParams;
                fromPartial(object: Partial<_61.DepositParams>): _61.DepositParams;
                fromAmino(object: _61.DepositParamsAmino): _61.DepositParams;
                toAmino(message: _61.DepositParams): _61.DepositParamsAmino;
                fromAminoMsg(object: _61.DepositParamsAminoMsg): _61.DepositParams;
                toAminoMsg(message: _61.DepositParams): _61.DepositParamsAminoMsg;
                fromProtoMsg(message: _61.DepositParamsProtoMsg): _61.DepositParams;
                toProto(message: _61.DepositParams): Uint8Array;
                toProtoMsg(message: _61.DepositParams): _61.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _61.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.VotingParams;
                fromPartial(object: Partial<_61.VotingParams>): _61.VotingParams;
                fromAmino(object: _61.VotingParamsAmino): _61.VotingParams;
                toAmino(message: _61.VotingParams): _61.VotingParamsAmino;
                fromAminoMsg(object: _61.VotingParamsAminoMsg): _61.VotingParams;
                toAminoMsg(message: _61.VotingParams): _61.VotingParamsAminoMsg;
                fromProtoMsg(message: _61.VotingParamsProtoMsg): _61.VotingParams;
                toProto(message: _61.VotingParams): Uint8Array;
                toProtoMsg(message: _61.VotingParams): _61.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _61.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.TallyParams;
                fromPartial(object: Partial<_61.TallyParams>): _61.TallyParams;
                fromAmino(object: _61.TallyParamsAmino): _61.TallyParams;
                toAmino(message: _61.TallyParams): _61.TallyParamsAmino;
                fromAminoMsg(object: _61.TallyParamsAminoMsg): _61.TallyParams;
                toAminoMsg(message: _61.TallyParams): _61.TallyParamsAminoMsg;
                fromProtoMsg(message: _61.TallyParamsProtoMsg): _61.TallyParams;
                toProto(message: _61.TallyParams): Uint8Array;
                toProtoMsg(message: _61.TallyParams): _61.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _60.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.GenesisState;
                fromPartial(object: Partial<_60.GenesisState>): _60.GenesisState;
                fromAmino(object: _60.GenesisStateAmino): _60.GenesisState;
                toAmino(message: _60.GenesisState): _60.GenesisStateAmino;
                fromAminoMsg(object: _60.GenesisStateAminoMsg): _60.GenesisState;
                toAminoMsg(message: _60.GenesisState): _60.GenesisStateAminoMsg;
                fromProtoMsg(message: _60.GenesisStateProtoMsg): _60.GenesisState;
                toProto(message: _60.GenesisState): Uint8Array;
                toProtoMsg(message: _60.GenesisState): _60.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _220.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                inflation(request?: _66.QueryInflationRequest): Promise<_66.QueryInflationResponse>;
                annualProvisions(request?: _66.QueryAnnualProvisionsRequest): Promise<_66.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _205.LCDQueryClient;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _66.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _66.QueryInflationRequest;
                fromPartial(_: Partial<_66.QueryInflationRequest>): _66.QueryInflationRequest;
                fromAmino(_: _66.QueryInflationRequestAmino): _66.QueryInflationRequest;
                toAmino(_: _66.QueryInflationRequest): _66.QueryInflationRequestAmino;
                fromAminoMsg(object: _66.QueryInflationRequestAminoMsg): _66.QueryInflationRequest;
                toAminoMsg(message: _66.QueryInflationRequest): _66.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _66.QueryInflationRequestProtoMsg): _66.QueryInflationRequest;
                toProto(message: _66.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _66.QueryInflationRequest): _66.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _66.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryInflationResponse;
                fromPartial(object: Partial<_66.QueryInflationResponse>): _66.QueryInflationResponse;
                fromAmino(object: _66.QueryInflationResponseAmino): _66.QueryInflationResponse;
                toAmino(message: _66.QueryInflationResponse): _66.QueryInflationResponseAmino;
                fromAminoMsg(object: _66.QueryInflationResponseAminoMsg): _66.QueryInflationResponse;
                toAminoMsg(message: _66.QueryInflationResponse): _66.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _66.QueryInflationResponseProtoMsg): _66.QueryInflationResponse;
                toProto(message: _66.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _66.QueryInflationResponse): _66.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _66.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _66.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_66.QueryAnnualProvisionsRequest>): _66.QueryAnnualProvisionsRequest;
                fromAmino(_: _66.QueryAnnualProvisionsRequestAmino): _66.QueryAnnualProvisionsRequest;
                toAmino(_: _66.QueryAnnualProvisionsRequest): _66.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _66.QueryAnnualProvisionsRequestAminoMsg): _66.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _66.QueryAnnualProvisionsRequest): _66.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryAnnualProvisionsRequestProtoMsg): _66.QueryAnnualProvisionsRequest;
                toProto(message: _66.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryAnnualProvisionsRequest): _66.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _66.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_66.QueryAnnualProvisionsResponse>): _66.QueryAnnualProvisionsResponse;
                fromAmino(object: _66.QueryAnnualProvisionsResponseAmino): _66.QueryAnnualProvisionsResponse;
                toAmino(message: _66.QueryAnnualProvisionsResponse): _66.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _66.QueryAnnualProvisionsResponseAminoMsg): _66.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _66.QueryAnnualProvisionsResponse): _66.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryAnnualProvisionsResponseProtoMsg): _66.QueryAnnualProvisionsResponse;
                toProto(message: _66.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryAnnualProvisionsResponse): _66.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _65.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.Minter;
                fromPartial(object: Partial<_65.Minter>): _65.Minter;
                fromAmino(object: _65.MinterAmino): _65.Minter;
                toAmino(message: _65.Minter): _65.MinterAmino;
                fromAminoMsg(object: _65.MinterAminoMsg): _65.Minter;
                toAminoMsg(message: _65.Minter): _65.MinterAminoMsg;
                fromProtoMsg(message: _65.MinterProtoMsg): _65.Minter;
                toProto(message: _65.Minter): Uint8Array;
                toProtoMsg(message: _65.Minter): _65.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _65.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.Params;
                fromPartial(object: Partial<_65.Params>): _65.Params;
                fromAmino(object: _65.ParamsAmino): _65.Params;
                toAmino(message: _65.Params): _65.ParamsAmino;
                fromAminoMsg(object: _65.ParamsAminoMsg): _65.Params;
                toAminoMsg(message: _65.Params): _65.ParamsAminoMsg;
                fromProtoMsg(message: _65.ParamsProtoMsg): _65.Params;
                toProto(message: _65.Params): Uint8Array;
                toProtoMsg(message: _65.Params): _65.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _64.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.GenesisState;
                fromPartial(object: Partial<_64.GenesisState>): _64.GenesisState;
                fromAmino(object: _64.GenesisStateAmino): _64.GenesisState;
                toAmino(message: _64.GenesisState): _64.GenesisStateAmino;
                fromAminoMsg(object: _64.GenesisStateAminoMsg): _64.GenesisState;
                toAminoMsg(message: _64.GenesisState): _64.GenesisStateAminoMsg;
                fromProtoMsg(message: _64.GenesisStateProtoMsg): _64.GenesisState;
                toProto(message: _64.GenesisState): Uint8Array;
                toProtoMsg(message: _64.GenesisState): _64.GenesisStateProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _221.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _206.LCDQueryClient;
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
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _67.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.ParameterChangeProposal;
                fromPartial(object: Partial<_67.ParameterChangeProposal>): _67.ParameterChangeProposal;
                fromAmino(object: _67.ParameterChangeProposalAmino): _67.ParameterChangeProposal;
                toAmino(message: _67.ParameterChangeProposal): _67.ParameterChangeProposalAmino;
                fromAminoMsg(object: _67.ParameterChangeProposalAminoMsg): _67.ParameterChangeProposal;
                toAminoMsg(message: _67.ParameterChangeProposal): _67.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _67.ParameterChangeProposalProtoMsg): _67.ParameterChangeProposal;
                toProto(message: _67.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _67.ParameterChangeProposal): _67.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _67.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.ParamChange;
                fromPartial(object: Partial<_67.ParamChange>): _67.ParamChange;
                fromAmino(object: _67.ParamChangeAmino): _67.ParamChange;
                toAmino(message: _67.ParamChange): _67.ParamChangeAmino;
                fromAminoMsg(object: _67.ParamChangeAminoMsg): _67.ParamChange;
                toAminoMsg(message: _67.ParamChange): _67.ParamChangeAminoMsg;
                fromProtoMsg(message: _67.ParamChangeProtoMsg): _67.ParamChange;
                toProto(message: _67.ParamChange): Uint8Array;
                toProtoMsg(message: _67.ParamChange): _67.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _233.MsgClientImpl;
            QueryClientImpl: typeof _222.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                signingInfo(request: _70.QuerySigningInfoRequest): Promise<_70.QuerySigningInfoResponse>;
                signingInfos(request?: _70.QuerySigningInfosRequest): Promise<_70.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _207.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _72.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _72.MsgUnjail): {
                        typeUrl: string;
                        value: _72.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _72.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _72.MsgUnjail): {
                        typeUrl: string;
                        value: _72.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _72.MsgUnjail) => _72.MsgUnjailAmino;
                    fromAmino: (object: _72.MsgUnjailAmino) => _72.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _72.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgUnjail;
                fromPartial(object: Partial<_72.MsgUnjail>): _72.MsgUnjail;
                fromAmino(object: _72.MsgUnjailAmino): _72.MsgUnjail;
                toAmino(message: _72.MsgUnjail): _72.MsgUnjailAmino;
                fromAminoMsg(object: _72.MsgUnjailAminoMsg): _72.MsgUnjail;
                toAminoMsg(message: _72.MsgUnjail): _72.MsgUnjailAminoMsg;
                fromProtoMsg(message: _72.MsgUnjailProtoMsg): _72.MsgUnjail;
                toProto(message: _72.MsgUnjail): Uint8Array;
                toProtoMsg(message: _72.MsgUnjail): _72.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _72.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _72.MsgUnjailResponse;
                fromPartial(_: Partial<_72.MsgUnjailResponse>): _72.MsgUnjailResponse;
                fromAmino(_: _72.MsgUnjailResponseAmino): _72.MsgUnjailResponse;
                toAmino(_: _72.MsgUnjailResponse): _72.MsgUnjailResponseAmino;
                fromAminoMsg(object: _72.MsgUnjailResponseAminoMsg): _72.MsgUnjailResponse;
                toAminoMsg(message: _72.MsgUnjailResponse): _72.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _72.MsgUnjailResponseProtoMsg): _72.MsgUnjailResponse;
                toProto(message: _72.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _72.MsgUnjailResponse): _72.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _71.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.ValidatorSigningInfo;
                fromPartial(object: Partial<_71.ValidatorSigningInfo>): _71.ValidatorSigningInfo;
                fromAmino(object: _71.ValidatorSigningInfoAmino): _71.ValidatorSigningInfo;
                toAmino(message: _71.ValidatorSigningInfo): _71.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _71.ValidatorSigningInfoAminoMsg): _71.ValidatorSigningInfo;
                toAminoMsg(message: _71.ValidatorSigningInfo): _71.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _71.ValidatorSigningInfoProtoMsg): _71.ValidatorSigningInfo;
                toProto(message: _71.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _71.ValidatorSigningInfo): _71.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _71.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Params;
                fromPartial(object: Partial<_71.Params>): _71.Params;
                fromAmino(object: _71.ParamsAmino): _71.Params;
                toAmino(message: _71.Params): _71.ParamsAmino;
                fromAminoMsg(object: _71.ParamsAminoMsg): _71.Params;
                toAminoMsg(message: _71.Params): _71.ParamsAminoMsg;
                fromProtoMsg(message: _71.ParamsProtoMsg): _71.Params;
                toProto(message: _71.Params): Uint8Array;
                toProtoMsg(message: _71.Params): _71.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _70.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _70.QueryParamsRequest;
                fromPartial(_: Partial<_70.QueryParamsRequest>): _70.QueryParamsRequest;
                fromAmino(_: _70.QueryParamsRequestAmino): _70.QueryParamsRequest;
                toAmino(_: _70.QueryParamsRequest): _70.QueryParamsRequestAmino;
                fromAminoMsg(object: _70.QueryParamsRequestAminoMsg): _70.QueryParamsRequest;
                toAminoMsg(message: _70.QueryParamsRequest): _70.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _70.QueryParamsRequestProtoMsg): _70.QueryParamsRequest;
                toProto(message: _70.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _70.QueryParamsRequest): _70.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _70.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryParamsResponse;
                fromPartial(object: Partial<_70.QueryParamsResponse>): _70.QueryParamsResponse;
                fromAmino(object: _70.QueryParamsResponseAmino): _70.QueryParamsResponse;
                toAmino(message: _70.QueryParamsResponse): _70.QueryParamsResponseAmino;
                fromAminoMsg(object: _70.QueryParamsResponseAminoMsg): _70.QueryParamsResponse;
                toAminoMsg(message: _70.QueryParamsResponse): _70.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _70.QueryParamsResponseProtoMsg): _70.QueryParamsResponse;
                toProto(message: _70.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _70.QueryParamsResponse): _70.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _70.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QuerySigningInfoRequest;
                fromPartial(object: Partial<_70.QuerySigningInfoRequest>): _70.QuerySigningInfoRequest;
                fromAmino(object: _70.QuerySigningInfoRequestAmino): _70.QuerySigningInfoRequest;
                toAmino(message: _70.QuerySigningInfoRequest): _70.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _70.QuerySigningInfoRequestAminoMsg): _70.QuerySigningInfoRequest;
                toAminoMsg(message: _70.QuerySigningInfoRequest): _70.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _70.QuerySigningInfoRequestProtoMsg): _70.QuerySigningInfoRequest;
                toProto(message: _70.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _70.QuerySigningInfoRequest): _70.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _70.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QuerySigningInfoResponse;
                fromPartial(object: Partial<_70.QuerySigningInfoResponse>): _70.QuerySigningInfoResponse;
                fromAmino(object: _70.QuerySigningInfoResponseAmino): _70.QuerySigningInfoResponse;
                toAmino(message: _70.QuerySigningInfoResponse): _70.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _70.QuerySigningInfoResponseAminoMsg): _70.QuerySigningInfoResponse;
                toAminoMsg(message: _70.QuerySigningInfoResponse): _70.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _70.QuerySigningInfoResponseProtoMsg): _70.QuerySigningInfoResponse;
                toProto(message: _70.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _70.QuerySigningInfoResponse): _70.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _70.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QuerySigningInfosRequest;
                fromPartial(object: Partial<_70.QuerySigningInfosRequest>): _70.QuerySigningInfosRequest;
                fromAmino(object: _70.QuerySigningInfosRequestAmino): _70.QuerySigningInfosRequest;
                toAmino(message: _70.QuerySigningInfosRequest): _70.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _70.QuerySigningInfosRequestAminoMsg): _70.QuerySigningInfosRequest;
                toAminoMsg(message: _70.QuerySigningInfosRequest): _70.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _70.QuerySigningInfosRequestProtoMsg): _70.QuerySigningInfosRequest;
                toProto(message: _70.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _70.QuerySigningInfosRequest): _70.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _70.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QuerySigningInfosResponse;
                fromPartial(object: Partial<_70.QuerySigningInfosResponse>): _70.QuerySigningInfosResponse;
                fromAmino(object: _70.QuerySigningInfosResponseAmino): _70.QuerySigningInfosResponse;
                toAmino(message: _70.QuerySigningInfosResponse): _70.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _70.QuerySigningInfosResponseAminoMsg): _70.QuerySigningInfosResponse;
                toAminoMsg(message: _70.QuerySigningInfosResponse): _70.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _70.QuerySigningInfosResponseProtoMsg): _70.QuerySigningInfosResponse;
                toProto(message: _70.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _70.QuerySigningInfosResponse): _70.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _69.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.SigningInfo;
                fromPartial(object: Partial<_69.SigningInfo>): _69.SigningInfo;
                fromAmino(object: _69.SigningInfoAmino): _69.SigningInfo;
                toAmino(message: _69.SigningInfo): _69.SigningInfoAmino;
                fromAminoMsg(object: _69.SigningInfoAminoMsg): _69.SigningInfo;
                toAminoMsg(message: _69.SigningInfo): _69.SigningInfoAminoMsg;
                fromProtoMsg(message: _69.SigningInfoProtoMsg): _69.SigningInfo;
                toProto(message: _69.SigningInfo): Uint8Array;
                toProtoMsg(message: _69.SigningInfo): _69.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _69.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.ValidatorMissedBlocks;
                fromPartial(object: Partial<_69.ValidatorMissedBlocks>): _69.ValidatorMissedBlocks;
                fromAmino(object: _69.ValidatorMissedBlocksAmino): _69.ValidatorMissedBlocks;
                toAmino(message: _69.ValidatorMissedBlocks): _69.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _69.ValidatorMissedBlocksAminoMsg): _69.ValidatorMissedBlocks;
                toAminoMsg(message: _69.ValidatorMissedBlocks): _69.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _69.ValidatorMissedBlocksProtoMsg): _69.ValidatorMissedBlocks;
                toProto(message: _69.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _69.ValidatorMissedBlocks): _69.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _69.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MissedBlock;
                fromPartial(object: Partial<_69.MissedBlock>): _69.MissedBlock;
                fromAmino(object: _69.MissedBlockAmino): _69.MissedBlock;
                toAmino(message: _69.MissedBlock): _69.MissedBlockAmino;
                fromAminoMsg(object: _69.MissedBlockAminoMsg): _69.MissedBlock;
                toAminoMsg(message: _69.MissedBlock): _69.MissedBlockAminoMsg;
                fromProtoMsg(message: _69.MissedBlockProtoMsg): _69.MissedBlock;
                toProto(message: _69.MissedBlock): Uint8Array;
                toProtoMsg(message: _69.MissedBlock): _69.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _234.MsgClientImpl;
            QueryClientImpl: typeof _223.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _75.QueryValidatorsRequest): Promise<_75.QueryValidatorsResponse>;
                validator(request: _75.QueryValidatorRequest): Promise<_75.QueryValidatorResponse>;
                validatorDelegations(request: _75.QueryValidatorDelegationsRequest): Promise<_75.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _75.QueryValidatorUnbondingDelegationsRequest): Promise<_75.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _75.QueryDelegationRequest): Promise<_75.QueryDelegationResponse>;
                unbondingDelegation(request: _75.QueryUnbondingDelegationRequest): Promise<_75.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _75.QueryDelegatorDelegationsRequest): Promise<_75.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _75.QueryDelegatorUnbondingDelegationsRequest): Promise<_75.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _75.QueryRedelegationsRequest): Promise<_75.QueryRedelegationsResponse>;
                delegatorValidators(request: _75.QueryDelegatorValidatorsRequest): Promise<_75.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _75.QueryDelegatorValidatorRequest): Promise<_75.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _75.QueryHistoricalInfoRequest): Promise<_75.QueryHistoricalInfoResponse>;
                pool(request?: _75.QueryPoolRequest): Promise<_75.QueryPoolResponse>;
                params(request?: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _208.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _77.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _77.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _77.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _77.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _77.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _77.MsgCreateValidator): {
                        typeUrl: string;
                        value: _77.MsgCreateValidator;
                    };
                    editValidator(value: _77.MsgEditValidator): {
                        typeUrl: string;
                        value: _77.MsgEditValidator;
                    };
                    delegate(value: _77.MsgDelegate): {
                        typeUrl: string;
                        value: _77.MsgDelegate;
                    };
                    beginRedelegate(value: _77.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _77.MsgBeginRedelegate;
                    };
                    undelegate(value: _77.MsgUndelegate): {
                        typeUrl: string;
                        value: _77.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _77.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _77.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _77.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _77.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _77.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _77.MsgCreateValidator): {
                        typeUrl: string;
                        value: _77.MsgCreateValidator;
                    };
                    editValidator(value: _77.MsgEditValidator): {
                        typeUrl: string;
                        value: _77.MsgEditValidator;
                    };
                    delegate(value: _77.MsgDelegate): {
                        typeUrl: string;
                        value: _77.MsgDelegate;
                    };
                    beginRedelegate(value: _77.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _77.MsgBeginRedelegate;
                    };
                    undelegate(value: _77.MsgUndelegate): {
                        typeUrl: string;
                        value: _77.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _77.MsgCreateValidator) => _77.MsgCreateValidatorAmino;
                    fromAmino: (object: _77.MsgCreateValidatorAmino) => _77.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _77.MsgEditValidator) => _77.MsgEditValidatorAmino;
                    fromAmino: (object: _77.MsgEditValidatorAmino) => _77.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _77.MsgDelegate) => _77.MsgDelegateAmino;
                    fromAmino: (object: _77.MsgDelegateAmino) => _77.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _77.MsgBeginRedelegate) => _77.MsgBeginRedelegateAmino;
                    fromAmino: (object: _77.MsgBeginRedelegateAmino) => _77.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _77.MsgUndelegate) => _77.MsgUndelegateAmino;
                    fromAmino: (object: _77.MsgUndelegateAmino) => _77.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _77.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgCreateValidator;
                fromPartial(object: Partial<_77.MsgCreateValidator>): _77.MsgCreateValidator;
                fromAmino(object: _77.MsgCreateValidatorAmino): _77.MsgCreateValidator;
                toAmino(message: _77.MsgCreateValidator): _77.MsgCreateValidatorAmino;
                fromAminoMsg(object: _77.MsgCreateValidatorAminoMsg): _77.MsgCreateValidator;
                toAminoMsg(message: _77.MsgCreateValidator): _77.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _77.MsgCreateValidatorProtoMsg): _77.MsgCreateValidator;
                toProto(message: _77.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _77.MsgCreateValidator): _77.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _77.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_77.MsgCreateValidatorResponse>): _77.MsgCreateValidatorResponse;
                fromAmino(_: _77.MsgCreateValidatorResponseAmino): _77.MsgCreateValidatorResponse;
                toAmino(_: _77.MsgCreateValidatorResponse): _77.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _77.MsgCreateValidatorResponseAminoMsg): _77.MsgCreateValidatorResponse;
                toAminoMsg(message: _77.MsgCreateValidatorResponse): _77.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _77.MsgCreateValidatorResponseProtoMsg): _77.MsgCreateValidatorResponse;
                toProto(message: _77.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _77.MsgCreateValidatorResponse): _77.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _77.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgEditValidator;
                fromPartial(object: Partial<_77.MsgEditValidator>): _77.MsgEditValidator;
                fromAmino(object: _77.MsgEditValidatorAmino): _77.MsgEditValidator;
                toAmino(message: _77.MsgEditValidator): _77.MsgEditValidatorAmino;
                fromAminoMsg(object: _77.MsgEditValidatorAminoMsg): _77.MsgEditValidator;
                toAminoMsg(message: _77.MsgEditValidator): _77.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _77.MsgEditValidatorProtoMsg): _77.MsgEditValidator;
                toProto(message: _77.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _77.MsgEditValidator): _77.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _77.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.MsgEditValidatorResponse;
                fromPartial(_: Partial<_77.MsgEditValidatorResponse>): _77.MsgEditValidatorResponse;
                fromAmino(_: _77.MsgEditValidatorResponseAmino): _77.MsgEditValidatorResponse;
                toAmino(_: _77.MsgEditValidatorResponse): _77.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _77.MsgEditValidatorResponseAminoMsg): _77.MsgEditValidatorResponse;
                toAminoMsg(message: _77.MsgEditValidatorResponse): _77.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _77.MsgEditValidatorResponseProtoMsg): _77.MsgEditValidatorResponse;
                toProto(message: _77.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _77.MsgEditValidatorResponse): _77.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _77.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgDelegate;
                fromPartial(object: Partial<_77.MsgDelegate>): _77.MsgDelegate;
                fromAmino(object: _77.MsgDelegateAmino): _77.MsgDelegate;
                toAmino(message: _77.MsgDelegate): _77.MsgDelegateAmino;
                fromAminoMsg(object: _77.MsgDelegateAminoMsg): _77.MsgDelegate;
                toAminoMsg(message: _77.MsgDelegate): _77.MsgDelegateAminoMsg;
                fromProtoMsg(message: _77.MsgDelegateProtoMsg): _77.MsgDelegate;
                toProto(message: _77.MsgDelegate): Uint8Array;
                toProtoMsg(message: _77.MsgDelegate): _77.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _77.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.MsgDelegateResponse;
                fromPartial(_: Partial<_77.MsgDelegateResponse>): _77.MsgDelegateResponse;
                fromAmino(_: _77.MsgDelegateResponseAmino): _77.MsgDelegateResponse;
                toAmino(_: _77.MsgDelegateResponse): _77.MsgDelegateResponseAmino;
                fromAminoMsg(object: _77.MsgDelegateResponseAminoMsg): _77.MsgDelegateResponse;
                toAminoMsg(message: _77.MsgDelegateResponse): _77.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _77.MsgDelegateResponseProtoMsg): _77.MsgDelegateResponse;
                toProto(message: _77.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _77.MsgDelegateResponse): _77.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _77.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgBeginRedelegate;
                fromPartial(object: Partial<_77.MsgBeginRedelegate>): _77.MsgBeginRedelegate;
                fromAmino(object: _77.MsgBeginRedelegateAmino): _77.MsgBeginRedelegate;
                toAmino(message: _77.MsgBeginRedelegate): _77.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _77.MsgBeginRedelegateAminoMsg): _77.MsgBeginRedelegate;
                toAminoMsg(message: _77.MsgBeginRedelegate): _77.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _77.MsgBeginRedelegateProtoMsg): _77.MsgBeginRedelegate;
                toProto(message: _77.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _77.MsgBeginRedelegate): _77.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _77.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_77.MsgBeginRedelegateResponse>): _77.MsgBeginRedelegateResponse;
                fromAmino(object: _77.MsgBeginRedelegateResponseAmino): _77.MsgBeginRedelegateResponse;
                toAmino(message: _77.MsgBeginRedelegateResponse): _77.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _77.MsgBeginRedelegateResponseAminoMsg): _77.MsgBeginRedelegateResponse;
                toAminoMsg(message: _77.MsgBeginRedelegateResponse): _77.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _77.MsgBeginRedelegateResponseProtoMsg): _77.MsgBeginRedelegateResponse;
                toProto(message: _77.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _77.MsgBeginRedelegateResponse): _77.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _77.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgUndelegate;
                fromPartial(object: Partial<_77.MsgUndelegate>): _77.MsgUndelegate;
                fromAmino(object: _77.MsgUndelegateAmino): _77.MsgUndelegate;
                toAmino(message: _77.MsgUndelegate): _77.MsgUndelegateAmino;
                fromAminoMsg(object: _77.MsgUndelegateAminoMsg): _77.MsgUndelegate;
                toAminoMsg(message: _77.MsgUndelegate): _77.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _77.MsgUndelegateProtoMsg): _77.MsgUndelegate;
                toProto(message: _77.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _77.MsgUndelegate): _77.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _77.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgUndelegateResponse;
                fromPartial(object: Partial<_77.MsgUndelegateResponse>): _77.MsgUndelegateResponse;
                fromAmino(object: _77.MsgUndelegateResponseAmino): _77.MsgUndelegateResponse;
                toAmino(message: _77.MsgUndelegateResponse): _77.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _77.MsgUndelegateResponseAminoMsg): _77.MsgUndelegateResponse;
                toAminoMsg(message: _77.MsgUndelegateResponse): _77.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _77.MsgUndelegateResponseProtoMsg): _77.MsgUndelegateResponse;
                toProto(message: _77.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _77.MsgUndelegateResponse): _77.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _76.BondStatus;
            bondStatusToJSON(object: _76.BondStatus): string;
            BondStatus: typeof _76.BondStatus;
            BondStatusSDKType: typeof _76.BondStatus;
            BondStatusAmino: typeof _76.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _76.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.HistoricalInfo;
                fromPartial(object: Partial<_76.HistoricalInfo>): _76.HistoricalInfo;
                fromAmino(object: _76.HistoricalInfoAmino): _76.HistoricalInfo;
                toAmino(message: _76.HistoricalInfo): _76.HistoricalInfoAmino;
                fromAminoMsg(object: _76.HistoricalInfoAminoMsg): _76.HistoricalInfo;
                toAminoMsg(message: _76.HistoricalInfo): _76.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _76.HistoricalInfoProtoMsg): _76.HistoricalInfo;
                toProto(message: _76.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _76.HistoricalInfo): _76.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _76.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.CommissionRates;
                fromPartial(object: Partial<_76.CommissionRates>): _76.CommissionRates;
                fromAmino(object: _76.CommissionRatesAmino): _76.CommissionRates;
                toAmino(message: _76.CommissionRates): _76.CommissionRatesAmino;
                fromAminoMsg(object: _76.CommissionRatesAminoMsg): _76.CommissionRates;
                toAminoMsg(message: _76.CommissionRates): _76.CommissionRatesAminoMsg;
                fromProtoMsg(message: _76.CommissionRatesProtoMsg): _76.CommissionRates;
                toProto(message: _76.CommissionRates): Uint8Array;
                toProtoMsg(message: _76.CommissionRates): _76.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _76.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Commission;
                fromPartial(object: Partial<_76.Commission>): _76.Commission;
                fromAmino(object: _76.CommissionAmino): _76.Commission;
                toAmino(message: _76.Commission): _76.CommissionAmino;
                fromAminoMsg(object: _76.CommissionAminoMsg): _76.Commission;
                toAminoMsg(message: _76.Commission): _76.CommissionAminoMsg;
                fromProtoMsg(message: _76.CommissionProtoMsg): _76.Commission;
                toProto(message: _76.Commission): Uint8Array;
                toProtoMsg(message: _76.Commission): _76.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _76.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Description;
                fromPartial(object: Partial<_76.Description>): _76.Description;
                fromAmino(object: _76.DescriptionAmino): _76.Description;
                toAmino(message: _76.Description): _76.DescriptionAmino;
                fromAminoMsg(object: _76.DescriptionAminoMsg): _76.Description;
                toAminoMsg(message: _76.Description): _76.DescriptionAminoMsg;
                fromProtoMsg(message: _76.DescriptionProtoMsg): _76.Description;
                toProto(message: _76.Description): Uint8Array;
                toProtoMsg(message: _76.Description): _76.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _76.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Validator;
                fromPartial(object: Partial<_76.Validator>): _76.Validator;
                fromAmino(object: _76.ValidatorAmino): _76.Validator;
                toAmino(message: _76.Validator): _76.ValidatorAmino;
                fromAminoMsg(object: _76.ValidatorAminoMsg): _76.Validator;
                toAminoMsg(message: _76.Validator): _76.ValidatorAminoMsg;
                fromProtoMsg(message: _76.ValidatorProtoMsg): _76.Validator;
                toProto(message: _76.Validator): Uint8Array;
                toProtoMsg(message: _76.Validator): _76.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _76.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.ValAddresses;
                fromPartial(object: Partial<_76.ValAddresses>): _76.ValAddresses;
                fromAmino(object: _76.ValAddressesAmino): _76.ValAddresses;
                toAmino(message: _76.ValAddresses): _76.ValAddressesAmino;
                fromAminoMsg(object: _76.ValAddressesAminoMsg): _76.ValAddresses;
                toAminoMsg(message: _76.ValAddresses): _76.ValAddressesAminoMsg;
                fromProtoMsg(message: _76.ValAddressesProtoMsg): _76.ValAddresses;
                toProto(message: _76.ValAddresses): Uint8Array;
                toProtoMsg(message: _76.ValAddresses): _76.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _76.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.DVPair;
                fromPartial(object: Partial<_76.DVPair>): _76.DVPair;
                fromAmino(object: _76.DVPairAmino): _76.DVPair;
                toAmino(message: _76.DVPair): _76.DVPairAmino;
                fromAminoMsg(object: _76.DVPairAminoMsg): _76.DVPair;
                toAminoMsg(message: _76.DVPair): _76.DVPairAminoMsg;
                fromProtoMsg(message: _76.DVPairProtoMsg): _76.DVPair;
                toProto(message: _76.DVPair): Uint8Array;
                toProtoMsg(message: _76.DVPair): _76.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _76.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.DVPairs;
                fromPartial(object: Partial<_76.DVPairs>): _76.DVPairs;
                fromAmino(object: _76.DVPairsAmino): _76.DVPairs;
                toAmino(message: _76.DVPairs): _76.DVPairsAmino;
                fromAminoMsg(object: _76.DVPairsAminoMsg): _76.DVPairs;
                toAminoMsg(message: _76.DVPairs): _76.DVPairsAminoMsg;
                fromProtoMsg(message: _76.DVPairsProtoMsg): _76.DVPairs;
                toProto(message: _76.DVPairs): Uint8Array;
                toProtoMsg(message: _76.DVPairs): _76.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _76.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.DVVTriplet;
                fromPartial(object: Partial<_76.DVVTriplet>): _76.DVVTriplet;
                fromAmino(object: _76.DVVTripletAmino): _76.DVVTriplet;
                toAmino(message: _76.DVVTriplet): _76.DVVTripletAmino;
                fromAminoMsg(object: _76.DVVTripletAminoMsg): _76.DVVTriplet;
                toAminoMsg(message: _76.DVVTriplet): _76.DVVTripletAminoMsg;
                fromProtoMsg(message: _76.DVVTripletProtoMsg): _76.DVVTriplet;
                toProto(message: _76.DVVTriplet): Uint8Array;
                toProtoMsg(message: _76.DVVTriplet): _76.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _76.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.DVVTriplets;
                fromPartial(object: Partial<_76.DVVTriplets>): _76.DVVTriplets;
                fromAmino(object: _76.DVVTripletsAmino): _76.DVVTriplets;
                toAmino(message: _76.DVVTriplets): _76.DVVTripletsAmino;
                fromAminoMsg(object: _76.DVVTripletsAminoMsg): _76.DVVTriplets;
                toAminoMsg(message: _76.DVVTriplets): _76.DVVTripletsAminoMsg;
                fromProtoMsg(message: _76.DVVTripletsProtoMsg): _76.DVVTriplets;
                toProto(message: _76.DVVTriplets): Uint8Array;
                toProtoMsg(message: _76.DVVTriplets): _76.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _76.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Delegation;
                fromPartial(object: Partial<_76.Delegation>): _76.Delegation;
                fromAmino(object: _76.DelegationAmino): _76.Delegation;
                toAmino(message: _76.Delegation): _76.DelegationAmino;
                fromAminoMsg(object: _76.DelegationAminoMsg): _76.Delegation;
                toAminoMsg(message: _76.Delegation): _76.DelegationAminoMsg;
                fromProtoMsg(message: _76.DelegationProtoMsg): _76.Delegation;
                toProto(message: _76.Delegation): Uint8Array;
                toProtoMsg(message: _76.Delegation): _76.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _76.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.UnbondingDelegation;
                fromPartial(object: Partial<_76.UnbondingDelegation>): _76.UnbondingDelegation;
                fromAmino(object: _76.UnbondingDelegationAmino): _76.UnbondingDelegation;
                toAmino(message: _76.UnbondingDelegation): _76.UnbondingDelegationAmino;
                fromAminoMsg(object: _76.UnbondingDelegationAminoMsg): _76.UnbondingDelegation;
                toAminoMsg(message: _76.UnbondingDelegation): _76.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _76.UnbondingDelegationProtoMsg): _76.UnbondingDelegation;
                toProto(message: _76.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _76.UnbondingDelegation): _76.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _76.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.UnbondingDelegationEntry;
                fromPartial(object: Partial<_76.UnbondingDelegationEntry>): _76.UnbondingDelegationEntry;
                fromAmino(object: _76.UnbondingDelegationEntryAmino): _76.UnbondingDelegationEntry;
                toAmino(message: _76.UnbondingDelegationEntry): _76.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _76.UnbondingDelegationEntryAminoMsg): _76.UnbondingDelegationEntry;
                toAminoMsg(message: _76.UnbondingDelegationEntry): _76.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _76.UnbondingDelegationEntryProtoMsg): _76.UnbondingDelegationEntry;
                toProto(message: _76.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _76.UnbondingDelegationEntry): _76.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _76.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.RedelegationEntry;
                fromPartial(object: Partial<_76.RedelegationEntry>): _76.RedelegationEntry;
                fromAmino(object: _76.RedelegationEntryAmino): _76.RedelegationEntry;
                toAmino(message: _76.RedelegationEntry): _76.RedelegationEntryAmino;
                fromAminoMsg(object: _76.RedelegationEntryAminoMsg): _76.RedelegationEntry;
                toAminoMsg(message: _76.RedelegationEntry): _76.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _76.RedelegationEntryProtoMsg): _76.RedelegationEntry;
                toProto(message: _76.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _76.RedelegationEntry): _76.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _76.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Redelegation;
                fromPartial(object: Partial<_76.Redelegation>): _76.Redelegation;
                fromAmino(object: _76.RedelegationAmino): _76.Redelegation;
                toAmino(message: _76.Redelegation): _76.RedelegationAmino;
                fromAminoMsg(object: _76.RedelegationAminoMsg): _76.Redelegation;
                toAminoMsg(message: _76.Redelegation): _76.RedelegationAminoMsg;
                fromProtoMsg(message: _76.RedelegationProtoMsg): _76.Redelegation;
                toProto(message: _76.Redelegation): Uint8Array;
                toProtoMsg(message: _76.Redelegation): _76.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _76.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Params;
                fromPartial(object: Partial<_76.Params>): _76.Params;
                fromAmino(object: _76.ParamsAmino): _76.Params;
                toAmino(message: _76.Params): _76.ParamsAmino;
                fromAminoMsg(object: _76.ParamsAminoMsg): _76.Params;
                toAminoMsg(message: _76.Params): _76.ParamsAminoMsg;
                fromProtoMsg(message: _76.ParamsProtoMsg): _76.Params;
                toProto(message: _76.Params): Uint8Array;
                toProtoMsg(message: _76.Params): _76.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _76.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.DelegationResponse;
                fromPartial(object: Partial<_76.DelegationResponse>): _76.DelegationResponse;
                fromAmino(object: _76.DelegationResponseAmino): _76.DelegationResponse;
                toAmino(message: _76.DelegationResponse): _76.DelegationResponseAmino;
                fromAminoMsg(object: _76.DelegationResponseAminoMsg): _76.DelegationResponse;
                toAminoMsg(message: _76.DelegationResponse): _76.DelegationResponseAminoMsg;
                fromProtoMsg(message: _76.DelegationResponseProtoMsg): _76.DelegationResponse;
                toProto(message: _76.DelegationResponse): Uint8Array;
                toProtoMsg(message: _76.DelegationResponse): _76.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _76.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.RedelegationEntryResponse;
                fromPartial(object: Partial<_76.RedelegationEntryResponse>): _76.RedelegationEntryResponse;
                fromAmino(object: _76.RedelegationEntryResponseAmino): _76.RedelegationEntryResponse;
                toAmino(message: _76.RedelegationEntryResponse): _76.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _76.RedelegationEntryResponseAminoMsg): _76.RedelegationEntryResponse;
                toAminoMsg(message: _76.RedelegationEntryResponse): _76.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _76.RedelegationEntryResponseProtoMsg): _76.RedelegationEntryResponse;
                toProto(message: _76.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _76.RedelegationEntryResponse): _76.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _76.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.RedelegationResponse;
                fromPartial(object: Partial<_76.RedelegationResponse>): _76.RedelegationResponse;
                fromAmino(object: _76.RedelegationResponseAmino): _76.RedelegationResponse;
                toAmino(message: _76.RedelegationResponse): _76.RedelegationResponseAmino;
                fromAminoMsg(object: _76.RedelegationResponseAminoMsg): _76.RedelegationResponse;
                toAminoMsg(message: _76.RedelegationResponse): _76.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _76.RedelegationResponseProtoMsg): _76.RedelegationResponse;
                toProto(message: _76.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _76.RedelegationResponse): _76.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _76.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Pool;
                fromPartial(object: Partial<_76.Pool>): _76.Pool;
                fromAmino(object: _76.PoolAmino): _76.Pool;
                toAmino(message: _76.Pool): _76.PoolAmino;
                fromAminoMsg(object: _76.PoolAminoMsg): _76.Pool;
                toAminoMsg(message: _76.Pool): _76.PoolAminoMsg;
                fromProtoMsg(message: _76.PoolProtoMsg): _76.Pool;
                toProto(message: _76.Pool): Uint8Array;
                toProtoMsg(message: _76.Pool): _76.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _75.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryValidatorsRequest;
                fromPartial(object: Partial<_75.QueryValidatorsRequest>): _75.QueryValidatorsRequest;
                fromAmino(object: _75.QueryValidatorsRequestAmino): _75.QueryValidatorsRequest;
                toAmino(message: _75.QueryValidatorsRequest): _75.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _75.QueryValidatorsRequestAminoMsg): _75.QueryValidatorsRequest;
                toAminoMsg(message: _75.QueryValidatorsRequest): _75.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _75.QueryValidatorsRequestProtoMsg): _75.QueryValidatorsRequest;
                toProto(message: _75.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _75.QueryValidatorsRequest): _75.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _75.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryValidatorsResponse;
                fromPartial(object: Partial<_75.QueryValidatorsResponse>): _75.QueryValidatorsResponse;
                fromAmino(object: _75.QueryValidatorsResponseAmino): _75.QueryValidatorsResponse;
                toAmino(message: _75.QueryValidatorsResponse): _75.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _75.QueryValidatorsResponseAminoMsg): _75.QueryValidatorsResponse;
                toAminoMsg(message: _75.QueryValidatorsResponse): _75.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _75.QueryValidatorsResponseProtoMsg): _75.QueryValidatorsResponse;
                toProto(message: _75.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _75.QueryValidatorsResponse): _75.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _75.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryValidatorRequest;
                fromPartial(object: Partial<_75.QueryValidatorRequest>): _75.QueryValidatorRequest;
                fromAmino(object: _75.QueryValidatorRequestAmino): _75.QueryValidatorRequest;
                toAmino(message: _75.QueryValidatorRequest): _75.QueryValidatorRequestAmino;
                fromAminoMsg(object: _75.QueryValidatorRequestAminoMsg): _75.QueryValidatorRequest;
                toAminoMsg(message: _75.QueryValidatorRequest): _75.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _75.QueryValidatorRequestProtoMsg): _75.QueryValidatorRequest;
                toProto(message: _75.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _75.QueryValidatorRequest): _75.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _75.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryValidatorResponse;
                fromPartial(object: Partial<_75.QueryValidatorResponse>): _75.QueryValidatorResponse;
                fromAmino(object: _75.QueryValidatorResponseAmino): _75.QueryValidatorResponse;
                toAmino(message: _75.QueryValidatorResponse): _75.QueryValidatorResponseAmino;
                fromAminoMsg(object: _75.QueryValidatorResponseAminoMsg): _75.QueryValidatorResponse;
                toAminoMsg(message: _75.QueryValidatorResponse): _75.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _75.QueryValidatorResponseProtoMsg): _75.QueryValidatorResponse;
                toProto(message: _75.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _75.QueryValidatorResponse): _75.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _75.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_75.QueryValidatorDelegationsRequest>): _75.QueryValidatorDelegationsRequest;
                fromAmino(object: _75.QueryValidatorDelegationsRequestAmino): _75.QueryValidatorDelegationsRequest;
                toAmino(message: _75.QueryValidatorDelegationsRequest): _75.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _75.QueryValidatorDelegationsRequestAminoMsg): _75.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _75.QueryValidatorDelegationsRequest): _75.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _75.QueryValidatorDelegationsRequestProtoMsg): _75.QueryValidatorDelegationsRequest;
                toProto(message: _75.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _75.QueryValidatorDelegationsRequest): _75.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _75.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_75.QueryValidatorDelegationsResponse>): _75.QueryValidatorDelegationsResponse;
                fromAmino(object: _75.QueryValidatorDelegationsResponseAmino): _75.QueryValidatorDelegationsResponse;
                toAmino(message: _75.QueryValidatorDelegationsResponse): _75.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _75.QueryValidatorDelegationsResponseAminoMsg): _75.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _75.QueryValidatorDelegationsResponse): _75.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _75.QueryValidatorDelegationsResponseProtoMsg): _75.QueryValidatorDelegationsResponse;
                toProto(message: _75.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _75.QueryValidatorDelegationsResponse): _75.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _75.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_75.QueryValidatorUnbondingDelegationsRequest>): _75.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _75.QueryValidatorUnbondingDelegationsRequestAmino): _75.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _75.QueryValidatorUnbondingDelegationsRequest): _75.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _75.QueryValidatorUnbondingDelegationsRequestAminoMsg): _75.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _75.QueryValidatorUnbondingDelegationsRequest): _75.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _75.QueryValidatorUnbondingDelegationsRequestProtoMsg): _75.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _75.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _75.QueryValidatorUnbondingDelegationsRequest): _75.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _75.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_75.QueryValidatorUnbondingDelegationsResponse>): _75.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _75.QueryValidatorUnbondingDelegationsResponseAmino): _75.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _75.QueryValidatorUnbondingDelegationsResponse): _75.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _75.QueryValidatorUnbondingDelegationsResponseAminoMsg): _75.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _75.QueryValidatorUnbondingDelegationsResponse): _75.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _75.QueryValidatorUnbondingDelegationsResponseProtoMsg): _75.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _75.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _75.QueryValidatorUnbondingDelegationsResponse): _75.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _75.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryDelegationRequest;
                fromPartial(object: Partial<_75.QueryDelegationRequest>): _75.QueryDelegationRequest;
                fromAmino(object: _75.QueryDelegationRequestAmino): _75.QueryDelegationRequest;
                toAmino(message: _75.QueryDelegationRequest): _75.QueryDelegationRequestAmino;
                fromAminoMsg(object: _75.QueryDelegationRequestAminoMsg): _75.QueryDelegationRequest;
                toAminoMsg(message: _75.QueryDelegationRequest): _75.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _75.QueryDelegationRequestProtoMsg): _75.QueryDelegationRequest;
                toProto(message: _75.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _75.QueryDelegationRequest): _75.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _75.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryDelegationResponse;
                fromPartial(object: Partial<_75.QueryDelegationResponse>): _75.QueryDelegationResponse;
                fromAmino(object: _75.QueryDelegationResponseAmino): _75.QueryDelegationResponse;
                toAmino(message: _75.QueryDelegationResponse): _75.QueryDelegationResponseAmino;
                fromAminoMsg(object: _75.QueryDelegationResponseAminoMsg): _75.QueryDelegationResponse;
                toAminoMsg(message: _75.QueryDelegationResponse): _75.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _75.QueryDelegationResponseProtoMsg): _75.QueryDelegationResponse;
                toProto(message: _75.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _75.QueryDelegationResponse): _75.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _75.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_75.QueryUnbondingDelegationRequest>): _75.QueryUnbondingDelegationRequest;
                fromAmino(object: _75.QueryUnbondingDelegationRequestAmino): _75.QueryUnbondingDelegationRequest;
                toAmino(message: _75.QueryUnbondingDelegationRequest): _75.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _75.QueryUnbondingDelegationRequestAminoMsg): _75.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _75.QueryUnbondingDelegationRequest): _75.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _75.QueryUnbondingDelegationRequestProtoMsg): _75.QueryUnbondingDelegationRequest;
                toProto(message: _75.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _75.QueryUnbondingDelegationRequest): _75.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _75.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_75.QueryUnbondingDelegationResponse>): _75.QueryUnbondingDelegationResponse;
                fromAmino(object: _75.QueryUnbondingDelegationResponseAmino): _75.QueryUnbondingDelegationResponse;
                toAmino(message: _75.QueryUnbondingDelegationResponse): _75.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _75.QueryUnbondingDelegationResponseAminoMsg): _75.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _75.QueryUnbondingDelegationResponse): _75.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _75.QueryUnbondingDelegationResponseProtoMsg): _75.QueryUnbondingDelegationResponse;
                toProto(message: _75.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _75.QueryUnbondingDelegationResponse): _75.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _75.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_75.QueryDelegatorDelegationsRequest>): _75.QueryDelegatorDelegationsRequest;
                fromAmino(object: _75.QueryDelegatorDelegationsRequestAmino): _75.QueryDelegatorDelegationsRequest;
                toAmino(message: _75.QueryDelegatorDelegationsRequest): _75.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _75.QueryDelegatorDelegationsRequestAminoMsg): _75.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _75.QueryDelegatorDelegationsRequest): _75.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _75.QueryDelegatorDelegationsRequestProtoMsg): _75.QueryDelegatorDelegationsRequest;
                toProto(message: _75.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _75.QueryDelegatorDelegationsRequest): _75.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _75.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_75.QueryDelegatorDelegationsResponse>): _75.QueryDelegatorDelegationsResponse;
                fromAmino(object: _75.QueryDelegatorDelegationsResponseAmino): _75.QueryDelegatorDelegationsResponse;
                toAmino(message: _75.QueryDelegatorDelegationsResponse): _75.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _75.QueryDelegatorDelegationsResponseAminoMsg): _75.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _75.QueryDelegatorDelegationsResponse): _75.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _75.QueryDelegatorDelegationsResponseProtoMsg): _75.QueryDelegatorDelegationsResponse;
                toProto(message: _75.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _75.QueryDelegatorDelegationsResponse): _75.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _75.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_75.QueryDelegatorUnbondingDelegationsRequest>): _75.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _75.QueryDelegatorUnbondingDelegationsRequestAmino): _75.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _75.QueryDelegatorUnbondingDelegationsRequest): _75.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _75.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _75.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _75.QueryDelegatorUnbondingDelegationsRequest): _75.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _75.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _75.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _75.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _75.QueryDelegatorUnbondingDelegationsRequest): _75.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _75.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_75.QueryDelegatorUnbondingDelegationsResponse>): _75.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _75.QueryDelegatorUnbondingDelegationsResponseAmino): _75.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _75.QueryDelegatorUnbondingDelegationsResponse): _75.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _75.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _75.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _75.QueryDelegatorUnbondingDelegationsResponse): _75.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _75.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _75.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _75.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _75.QueryDelegatorUnbondingDelegationsResponse): _75.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _75.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryRedelegationsRequest;
                fromPartial(object: Partial<_75.QueryRedelegationsRequest>): _75.QueryRedelegationsRequest;
                fromAmino(object: _75.QueryRedelegationsRequestAmino): _75.QueryRedelegationsRequest;
                toAmino(message: _75.QueryRedelegationsRequest): _75.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _75.QueryRedelegationsRequestAminoMsg): _75.QueryRedelegationsRequest;
                toAminoMsg(message: _75.QueryRedelegationsRequest): _75.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _75.QueryRedelegationsRequestProtoMsg): _75.QueryRedelegationsRequest;
                toProto(message: _75.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _75.QueryRedelegationsRequest): _75.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _75.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryRedelegationsResponse;
                fromPartial(object: Partial<_75.QueryRedelegationsResponse>): _75.QueryRedelegationsResponse;
                fromAmino(object: _75.QueryRedelegationsResponseAmino): _75.QueryRedelegationsResponse;
                toAmino(message: _75.QueryRedelegationsResponse): _75.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _75.QueryRedelegationsResponseAminoMsg): _75.QueryRedelegationsResponse;
                toAminoMsg(message: _75.QueryRedelegationsResponse): _75.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _75.QueryRedelegationsResponseProtoMsg): _75.QueryRedelegationsResponse;
                toProto(message: _75.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _75.QueryRedelegationsResponse): _75.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _75.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_75.QueryDelegatorValidatorsRequest>): _75.QueryDelegatorValidatorsRequest;
                fromAmino(object: _75.QueryDelegatorValidatorsRequestAmino): _75.QueryDelegatorValidatorsRequest;
                toAmino(message: _75.QueryDelegatorValidatorsRequest): _75.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _75.QueryDelegatorValidatorsRequestAminoMsg): _75.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _75.QueryDelegatorValidatorsRequest): _75.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _75.QueryDelegatorValidatorsRequestProtoMsg): _75.QueryDelegatorValidatorsRequest;
                toProto(message: _75.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _75.QueryDelegatorValidatorsRequest): _75.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _75.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_75.QueryDelegatorValidatorsResponse>): _75.QueryDelegatorValidatorsResponse;
                fromAmino(object: _75.QueryDelegatorValidatorsResponseAmino): _75.QueryDelegatorValidatorsResponse;
                toAmino(message: _75.QueryDelegatorValidatorsResponse): _75.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _75.QueryDelegatorValidatorsResponseAminoMsg): _75.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _75.QueryDelegatorValidatorsResponse): _75.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _75.QueryDelegatorValidatorsResponseProtoMsg): _75.QueryDelegatorValidatorsResponse;
                toProto(message: _75.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _75.QueryDelegatorValidatorsResponse): _75.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _75.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_75.QueryDelegatorValidatorRequest>): _75.QueryDelegatorValidatorRequest;
                fromAmino(object: _75.QueryDelegatorValidatorRequestAmino): _75.QueryDelegatorValidatorRequest;
                toAmino(message: _75.QueryDelegatorValidatorRequest): _75.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _75.QueryDelegatorValidatorRequestAminoMsg): _75.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _75.QueryDelegatorValidatorRequest): _75.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _75.QueryDelegatorValidatorRequestProtoMsg): _75.QueryDelegatorValidatorRequest;
                toProto(message: _75.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _75.QueryDelegatorValidatorRequest): _75.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _75.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_75.QueryDelegatorValidatorResponse>): _75.QueryDelegatorValidatorResponse;
                fromAmino(object: _75.QueryDelegatorValidatorResponseAmino): _75.QueryDelegatorValidatorResponse;
                toAmino(message: _75.QueryDelegatorValidatorResponse): _75.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _75.QueryDelegatorValidatorResponseAminoMsg): _75.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _75.QueryDelegatorValidatorResponse): _75.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _75.QueryDelegatorValidatorResponseProtoMsg): _75.QueryDelegatorValidatorResponse;
                toProto(message: _75.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _75.QueryDelegatorValidatorResponse): _75.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _75.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_75.QueryHistoricalInfoRequest>): _75.QueryHistoricalInfoRequest;
                fromAmino(object: _75.QueryHistoricalInfoRequestAmino): _75.QueryHistoricalInfoRequest;
                toAmino(message: _75.QueryHistoricalInfoRequest): _75.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _75.QueryHistoricalInfoRequestAminoMsg): _75.QueryHistoricalInfoRequest;
                toAminoMsg(message: _75.QueryHistoricalInfoRequest): _75.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _75.QueryHistoricalInfoRequestProtoMsg): _75.QueryHistoricalInfoRequest;
                toProto(message: _75.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _75.QueryHistoricalInfoRequest): _75.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _75.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_75.QueryHistoricalInfoResponse>): _75.QueryHistoricalInfoResponse;
                fromAmino(object: _75.QueryHistoricalInfoResponseAmino): _75.QueryHistoricalInfoResponse;
                toAmino(message: _75.QueryHistoricalInfoResponse): _75.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _75.QueryHistoricalInfoResponseAminoMsg): _75.QueryHistoricalInfoResponse;
                toAminoMsg(message: _75.QueryHistoricalInfoResponse): _75.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _75.QueryHistoricalInfoResponseProtoMsg): _75.QueryHistoricalInfoResponse;
                toProto(message: _75.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _75.QueryHistoricalInfoResponse): _75.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _75.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.QueryPoolRequest;
                fromPartial(_: Partial<_75.QueryPoolRequest>): _75.QueryPoolRequest;
                fromAmino(_: _75.QueryPoolRequestAmino): _75.QueryPoolRequest;
                toAmino(_: _75.QueryPoolRequest): _75.QueryPoolRequestAmino;
                fromAminoMsg(object: _75.QueryPoolRequestAminoMsg): _75.QueryPoolRequest;
                toAminoMsg(message: _75.QueryPoolRequest): _75.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _75.QueryPoolRequestProtoMsg): _75.QueryPoolRequest;
                toProto(message: _75.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _75.QueryPoolRequest): _75.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _75.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryPoolResponse;
                fromPartial(object: Partial<_75.QueryPoolResponse>): _75.QueryPoolResponse;
                fromAmino(object: _75.QueryPoolResponseAmino): _75.QueryPoolResponse;
                toAmino(message: _75.QueryPoolResponse): _75.QueryPoolResponseAmino;
                fromAminoMsg(object: _75.QueryPoolResponseAminoMsg): _75.QueryPoolResponse;
                toAminoMsg(message: _75.QueryPoolResponse): _75.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _75.QueryPoolResponseProtoMsg): _75.QueryPoolResponse;
                toProto(message: _75.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _75.QueryPoolResponse): _75.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _75.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.QueryParamsRequest;
                fromPartial(_: Partial<_75.QueryParamsRequest>): _75.QueryParamsRequest;
                fromAmino(_: _75.QueryParamsRequestAmino): _75.QueryParamsRequest;
                toAmino(_: _75.QueryParamsRequest): _75.QueryParamsRequestAmino;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _74.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.LastValidatorPower;
                fromPartial(object: Partial<_74.LastValidatorPower>): _74.LastValidatorPower;
                fromAmino(object: _74.LastValidatorPowerAmino): _74.LastValidatorPower;
                toAmino(message: _74.LastValidatorPower): _74.LastValidatorPowerAmino;
                fromAminoMsg(object: _74.LastValidatorPowerAminoMsg): _74.LastValidatorPower;
                toAminoMsg(message: _74.LastValidatorPower): _74.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _74.LastValidatorPowerProtoMsg): _74.LastValidatorPower;
                toProto(message: _74.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _74.LastValidatorPower): _74.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _73.AuthorizationType;
            authorizationTypeToJSON(object: _73.AuthorizationType): string;
            AuthorizationType: typeof _73.AuthorizationType;
            AuthorizationTypeSDKType: typeof _73.AuthorizationType;
            AuthorizationTypeAmino: typeof _73.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _73.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.StakeAuthorization;
                fromPartial(object: Partial<_73.StakeAuthorization>): _73.StakeAuthorization;
                fromAmino(object: _73.StakeAuthorizationAmino): _73.StakeAuthorization;
                toAmino(message: _73.StakeAuthorization): _73.StakeAuthorizationAmino;
                fromAminoMsg(object: _73.StakeAuthorizationAminoMsg): _73.StakeAuthorization;
                toAminoMsg(message: _73.StakeAuthorization): _73.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _73.StakeAuthorizationProtoMsg): _73.StakeAuthorization;
                toProto(message: _73.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _73.StakeAuthorization): _73.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _73.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.StakeAuthorization_Validators;
                fromPartial(object: Partial<_73.StakeAuthorization_Validators>): _73.StakeAuthorization_Validators;
                fromAmino(object: _73.StakeAuthorization_ValidatorsAmino): _73.StakeAuthorization_Validators;
                toAmino(message: _73.StakeAuthorization_Validators): _73.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _73.StakeAuthorization_ValidatorsAminoMsg): _73.StakeAuthorization_Validators;
                toAminoMsg(message: _73.StakeAuthorization_Validators): _73.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _73.StakeAuthorization_ValidatorsProtoMsg): _73.StakeAuthorization_Validators;
                toProto(message: _73.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _73.StakeAuthorization_Validators): _73.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _78.SignMode;
                signModeToJSON(object: _78.SignMode): string;
                SignMode: typeof _78.SignMode;
                SignModeSDKType: typeof _78.SignMode;
                SignModeAmino: typeof _78.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _78.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.SignatureDescriptors;
                    fromPartial(object: Partial<_78.SignatureDescriptors>): _78.SignatureDescriptors;
                    fromAmino(object: _78.SignatureDescriptorsAmino): _78.SignatureDescriptors;
                    toAmino(message: _78.SignatureDescriptors): _78.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _78.SignatureDescriptorsAminoMsg): _78.SignatureDescriptors;
                    toAminoMsg(message: _78.SignatureDescriptors): _78.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _78.SignatureDescriptorsProtoMsg): _78.SignatureDescriptors;
                    toProto(message: _78.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _78.SignatureDescriptors): _78.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _78.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.SignatureDescriptor;
                    fromPartial(object: Partial<_78.SignatureDescriptor>): _78.SignatureDescriptor;
                    fromAmino(object: _78.SignatureDescriptorAmino): _78.SignatureDescriptor;
                    toAmino(message: _78.SignatureDescriptor): _78.SignatureDescriptorAmino;
                    fromAminoMsg(object: _78.SignatureDescriptorAminoMsg): _78.SignatureDescriptor;
                    toAminoMsg(message: _78.SignatureDescriptor): _78.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _78.SignatureDescriptorProtoMsg): _78.SignatureDescriptor;
                    toProto(message: _78.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _78.SignatureDescriptor): _78.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _78.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_78.SignatureDescriptor_Data>): _78.SignatureDescriptor_Data;
                    fromAmino(object: _78.SignatureDescriptor_DataAmino): _78.SignatureDescriptor_Data;
                    toAmino(message: _78.SignatureDescriptor_Data): _78.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _78.SignatureDescriptor_DataAminoMsg): _78.SignatureDescriptor_Data;
                    toAminoMsg(message: _78.SignatureDescriptor_Data): _78.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _78.SignatureDescriptor_DataProtoMsg): _78.SignatureDescriptor_Data;
                    toProto(message: _78.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _78.SignatureDescriptor_Data): _78.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _78.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_78.SignatureDescriptor_Data_Single>): _78.SignatureDescriptor_Data_Single;
                    fromAmino(object: _78.SignatureDescriptor_Data_SingleAmino): _78.SignatureDescriptor_Data_Single;
                    toAmino(message: _78.SignatureDescriptor_Data_Single): _78.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _78.SignatureDescriptor_Data_SingleAminoMsg): _78.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _78.SignatureDescriptor_Data_Single): _78.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _78.SignatureDescriptor_Data_SingleProtoMsg): _78.SignatureDescriptor_Data_Single;
                    toProto(message: _78.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _78.SignatureDescriptor_Data_Single): _78.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _78.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _78.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_78.SignatureDescriptor_Data_Multi>): _78.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _78.SignatureDescriptor_Data_MultiAmino): _78.SignatureDescriptor_Data_Multi;
                    toAmino(message: _78.SignatureDescriptor_Data_Multi): _78.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _78.SignatureDescriptor_Data_MultiAminoMsg): _78.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _78.SignatureDescriptor_Data_Multi): _78.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _78.SignatureDescriptor_Data_MultiProtoMsg): _78.SignatureDescriptor_Data_Multi;
                    toProto(message: _78.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _78.SignatureDescriptor_Data_Multi): _78.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _224.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _79.SimulateRequest): Promise<_79.SimulateResponse>;
                getTx(request: _79.GetTxRequest): Promise<_79.GetTxResponse>;
                broadcastTx(request: _79.BroadcastTxRequest): Promise<_79.BroadcastTxResponse>;
                getTxsEvent(request: _79.GetTxsEventRequest): Promise<_79.GetTxsEventResponse>;
                getBlockWithTxs(request: _79.GetBlockWithTxsRequest): Promise<_79.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _209.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _80.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.Tx;
                fromPartial(object: Partial<_80.Tx>): _80.Tx;
                fromAmino(object: _80.TxAmino): _80.Tx;
                toAmino(message: _80.Tx): _80.TxAmino;
                fromAminoMsg(object: _80.TxAminoMsg): _80.Tx;
                toAminoMsg(message: _80.Tx): _80.TxAminoMsg;
                fromProtoMsg(message: _80.TxProtoMsg): _80.Tx;
                toProto(message: _80.Tx): Uint8Array;
                toProtoMsg(message: _80.Tx): _80.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _80.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.TxRaw;
                fromPartial(object: Partial<_80.TxRaw>): _80.TxRaw;
                fromAmino(object: _80.TxRawAmino): _80.TxRaw;
                toAmino(message: _80.TxRaw): _80.TxRawAmino;
                fromAminoMsg(object: _80.TxRawAminoMsg): _80.TxRaw;
                toAminoMsg(message: _80.TxRaw): _80.TxRawAminoMsg;
                fromProtoMsg(message: _80.TxRawProtoMsg): _80.TxRaw;
                toProto(message: _80.TxRaw): Uint8Array;
                toProtoMsg(message: _80.TxRaw): _80.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _80.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.SignDoc;
                fromPartial(object: Partial<_80.SignDoc>): _80.SignDoc;
                fromAmino(object: _80.SignDocAmino): _80.SignDoc;
                toAmino(message: _80.SignDoc): _80.SignDocAmino;
                fromAminoMsg(object: _80.SignDocAminoMsg): _80.SignDoc;
                toAminoMsg(message: _80.SignDoc): _80.SignDocAminoMsg;
                fromProtoMsg(message: _80.SignDocProtoMsg): _80.SignDoc;
                toProto(message: _80.SignDoc): Uint8Array;
                toProtoMsg(message: _80.SignDoc): _80.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _80.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.TxBody;
                fromPartial(object: Partial<_80.TxBody>): _80.TxBody;
                fromAmino(object: _80.TxBodyAmino): _80.TxBody;
                toAmino(message: _80.TxBody): _80.TxBodyAmino;
                fromAminoMsg(object: _80.TxBodyAminoMsg): _80.TxBody;
                toAminoMsg(message: _80.TxBody): _80.TxBodyAminoMsg;
                fromProtoMsg(message: _80.TxBodyProtoMsg): _80.TxBody;
                toProto(message: _80.TxBody): Uint8Array;
                toProtoMsg(message: _80.TxBody): _80.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _80.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.AuthInfo;
                fromPartial(object: Partial<_80.AuthInfo>): _80.AuthInfo;
                fromAmino(object: _80.AuthInfoAmino): _80.AuthInfo;
                toAmino(message: _80.AuthInfo): _80.AuthInfoAmino;
                fromAminoMsg(object: _80.AuthInfoAminoMsg): _80.AuthInfo;
                toAminoMsg(message: _80.AuthInfo): _80.AuthInfoAminoMsg;
                fromProtoMsg(message: _80.AuthInfoProtoMsg): _80.AuthInfo;
                toProto(message: _80.AuthInfo): Uint8Array;
                toProtoMsg(message: _80.AuthInfo): _80.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _80.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.SignerInfo;
                fromPartial(object: Partial<_80.SignerInfo>): _80.SignerInfo;
                fromAmino(object: _80.SignerInfoAmino): _80.SignerInfo;
                toAmino(message: _80.SignerInfo): _80.SignerInfoAmino;
                fromAminoMsg(object: _80.SignerInfoAminoMsg): _80.SignerInfo;
                toAminoMsg(message: _80.SignerInfo): _80.SignerInfoAminoMsg;
                fromProtoMsg(message: _80.SignerInfoProtoMsg): _80.SignerInfo;
                toProto(message: _80.SignerInfo): Uint8Array;
                toProtoMsg(message: _80.SignerInfo): _80.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _80.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.ModeInfo;
                fromPartial(object: Partial<_80.ModeInfo>): _80.ModeInfo;
                fromAmino(object: _80.ModeInfoAmino): _80.ModeInfo;
                toAmino(message: _80.ModeInfo): _80.ModeInfoAmino;
                fromAminoMsg(object: _80.ModeInfoAminoMsg): _80.ModeInfo;
                toAminoMsg(message: _80.ModeInfo): _80.ModeInfoAminoMsg;
                fromProtoMsg(message: _80.ModeInfoProtoMsg): _80.ModeInfo;
                toProto(message: _80.ModeInfo): Uint8Array;
                toProtoMsg(message: _80.ModeInfo): _80.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _80.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.ModeInfo_Single;
                fromPartial(object: Partial<_80.ModeInfo_Single>): _80.ModeInfo_Single;
                fromAmino(object: _80.ModeInfo_SingleAmino): _80.ModeInfo_Single;
                toAmino(message: _80.ModeInfo_Single): _80.ModeInfo_SingleAmino;
                fromAminoMsg(object: _80.ModeInfo_SingleAminoMsg): _80.ModeInfo_Single;
                toAminoMsg(message: _80.ModeInfo_Single): _80.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _80.ModeInfo_SingleProtoMsg): _80.ModeInfo_Single;
                toProto(message: _80.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _80.ModeInfo_Single): _80.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _80.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.ModeInfo_Multi;
                fromPartial(object: Partial<_80.ModeInfo_Multi>): _80.ModeInfo_Multi;
                fromAmino(object: _80.ModeInfo_MultiAmino): _80.ModeInfo_Multi;
                toAmino(message: _80.ModeInfo_Multi): _80.ModeInfo_MultiAmino;
                fromAminoMsg(object: _80.ModeInfo_MultiAminoMsg): _80.ModeInfo_Multi;
                toAminoMsg(message: _80.ModeInfo_Multi): _80.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _80.ModeInfo_MultiProtoMsg): _80.ModeInfo_Multi;
                toProto(message: _80.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _80.ModeInfo_Multi): _80.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _80.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.Fee;
                fromPartial(object: Partial<_80.Fee>): _80.Fee;
                fromAmino(object: _80.FeeAmino): _80.Fee;
                toAmino(message: _80.Fee): _80.FeeAmino;
                fromAminoMsg(object: _80.FeeAminoMsg): _80.Fee;
                toAminoMsg(message: _80.Fee): _80.FeeAminoMsg;
                fromProtoMsg(message: _80.FeeProtoMsg): _80.Fee;
                toProto(message: _80.Fee): Uint8Array;
                toProtoMsg(message: _80.Fee): _80.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _79.OrderBy;
            orderByToJSON(object: _79.OrderBy): string;
            broadcastModeFromJSON(object: any): _79.BroadcastMode;
            broadcastModeToJSON(object: _79.BroadcastMode): string;
            OrderBy: typeof _79.OrderBy;
            OrderBySDKType: typeof _79.OrderBy;
            OrderByAmino: typeof _79.OrderBy;
            BroadcastMode: typeof _79.BroadcastMode;
            BroadcastModeSDKType: typeof _79.BroadcastMode;
            BroadcastModeAmino: typeof _79.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _79.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.GetTxsEventRequest;
                fromPartial(object: Partial<_79.GetTxsEventRequest>): _79.GetTxsEventRequest;
                fromAmino(object: _79.GetTxsEventRequestAmino): _79.GetTxsEventRequest;
                toAmino(message: _79.GetTxsEventRequest): _79.GetTxsEventRequestAmino;
                fromAminoMsg(object: _79.GetTxsEventRequestAminoMsg): _79.GetTxsEventRequest;
                toAminoMsg(message: _79.GetTxsEventRequest): _79.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _79.GetTxsEventRequestProtoMsg): _79.GetTxsEventRequest;
                toProto(message: _79.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _79.GetTxsEventRequest): _79.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _79.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.GetTxsEventResponse;
                fromPartial(object: Partial<_79.GetTxsEventResponse>): _79.GetTxsEventResponse;
                fromAmino(object: _79.GetTxsEventResponseAmino): _79.GetTxsEventResponse;
                toAmino(message: _79.GetTxsEventResponse): _79.GetTxsEventResponseAmino;
                fromAminoMsg(object: _79.GetTxsEventResponseAminoMsg): _79.GetTxsEventResponse;
                toAminoMsg(message: _79.GetTxsEventResponse): _79.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _79.GetTxsEventResponseProtoMsg): _79.GetTxsEventResponse;
                toProto(message: _79.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _79.GetTxsEventResponse): _79.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _79.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.BroadcastTxRequest;
                fromPartial(object: Partial<_79.BroadcastTxRequest>): _79.BroadcastTxRequest;
                fromAmino(object: _79.BroadcastTxRequestAmino): _79.BroadcastTxRequest;
                toAmino(message: _79.BroadcastTxRequest): _79.BroadcastTxRequestAmino;
                fromAminoMsg(object: _79.BroadcastTxRequestAminoMsg): _79.BroadcastTxRequest;
                toAminoMsg(message: _79.BroadcastTxRequest): _79.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _79.BroadcastTxRequestProtoMsg): _79.BroadcastTxRequest;
                toProto(message: _79.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _79.BroadcastTxRequest): _79.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _79.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.BroadcastTxResponse;
                fromPartial(object: Partial<_79.BroadcastTxResponse>): _79.BroadcastTxResponse;
                fromAmino(object: _79.BroadcastTxResponseAmino): _79.BroadcastTxResponse;
                toAmino(message: _79.BroadcastTxResponse): _79.BroadcastTxResponseAmino;
                fromAminoMsg(object: _79.BroadcastTxResponseAminoMsg): _79.BroadcastTxResponse;
                toAminoMsg(message: _79.BroadcastTxResponse): _79.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _79.BroadcastTxResponseProtoMsg): _79.BroadcastTxResponse;
                toProto(message: _79.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _79.BroadcastTxResponse): _79.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _79.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.SimulateRequest;
                fromPartial(object: Partial<_79.SimulateRequest>): _79.SimulateRequest;
                fromAmino(object: _79.SimulateRequestAmino): _79.SimulateRequest;
                toAmino(message: _79.SimulateRequest): _79.SimulateRequestAmino;
                fromAminoMsg(object: _79.SimulateRequestAminoMsg): _79.SimulateRequest;
                toAminoMsg(message: _79.SimulateRequest): _79.SimulateRequestAminoMsg;
                fromProtoMsg(message: _79.SimulateRequestProtoMsg): _79.SimulateRequest;
                toProto(message: _79.SimulateRequest): Uint8Array;
                toProtoMsg(message: _79.SimulateRequest): _79.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _79.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.SimulateResponse;
                fromPartial(object: Partial<_79.SimulateResponse>): _79.SimulateResponse;
                fromAmino(object: _79.SimulateResponseAmino): _79.SimulateResponse;
                toAmino(message: _79.SimulateResponse): _79.SimulateResponseAmino;
                fromAminoMsg(object: _79.SimulateResponseAminoMsg): _79.SimulateResponse;
                toAminoMsg(message: _79.SimulateResponse): _79.SimulateResponseAminoMsg;
                fromProtoMsg(message: _79.SimulateResponseProtoMsg): _79.SimulateResponse;
                toProto(message: _79.SimulateResponse): Uint8Array;
                toProtoMsg(message: _79.SimulateResponse): _79.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _79.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.GetTxRequest;
                fromPartial(object: Partial<_79.GetTxRequest>): _79.GetTxRequest;
                fromAmino(object: _79.GetTxRequestAmino): _79.GetTxRequest;
                toAmino(message: _79.GetTxRequest): _79.GetTxRequestAmino;
                fromAminoMsg(object: _79.GetTxRequestAminoMsg): _79.GetTxRequest;
                toAminoMsg(message: _79.GetTxRequest): _79.GetTxRequestAminoMsg;
                fromProtoMsg(message: _79.GetTxRequestProtoMsg): _79.GetTxRequest;
                toProto(message: _79.GetTxRequest): Uint8Array;
                toProtoMsg(message: _79.GetTxRequest): _79.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _79.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.GetTxResponse;
                fromPartial(object: Partial<_79.GetTxResponse>): _79.GetTxResponse;
                fromAmino(object: _79.GetTxResponseAmino): _79.GetTxResponse;
                toAmino(message: _79.GetTxResponse): _79.GetTxResponseAmino;
                fromAminoMsg(object: _79.GetTxResponseAminoMsg): _79.GetTxResponse;
                toAminoMsg(message: _79.GetTxResponse): _79.GetTxResponseAminoMsg;
                fromProtoMsg(message: _79.GetTxResponseProtoMsg): _79.GetTxResponse;
                toProto(message: _79.GetTxResponse): Uint8Array;
                toProtoMsg(message: _79.GetTxResponse): _79.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _79.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_79.GetBlockWithTxsRequest>): _79.GetBlockWithTxsRequest;
                fromAmino(object: _79.GetBlockWithTxsRequestAmino): _79.GetBlockWithTxsRequest;
                toAmino(message: _79.GetBlockWithTxsRequest): _79.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _79.GetBlockWithTxsRequestAminoMsg): _79.GetBlockWithTxsRequest;
                toAminoMsg(message: _79.GetBlockWithTxsRequest): _79.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _79.GetBlockWithTxsRequestProtoMsg): _79.GetBlockWithTxsRequest;
                toProto(message: _79.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _79.GetBlockWithTxsRequest): _79.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _79.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_79.GetBlockWithTxsResponse>): _79.GetBlockWithTxsResponse;
                fromAmino(object: _79.GetBlockWithTxsResponseAmino): _79.GetBlockWithTxsResponse;
                toAmino(message: _79.GetBlockWithTxsResponse): _79.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _79.GetBlockWithTxsResponseAminoMsg): _79.GetBlockWithTxsResponse;
                toAminoMsg(message: _79.GetBlockWithTxsResponse): _79.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _79.GetBlockWithTxsResponseProtoMsg): _79.GetBlockWithTxsResponse;
                toProto(message: _79.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _79.GetBlockWithTxsResponse): _79.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _225.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _81.QueryCurrentPlanRequest): Promise<_81.QueryCurrentPlanResponse>;
                appliedPlan(request: _81.QueryAppliedPlanRequest): Promise<_81.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _81.QueryUpgradedConsensusStateRequest): Promise<_81.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _81.QueryModuleVersionsRequest): Promise<_81.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _210.LCDQueryClient;
            Plan: {
                typeUrl: string;
                encode(message: _82.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.Plan;
                fromPartial(object: Partial<_82.Plan>): _82.Plan;
                fromAmino(object: _82.PlanAmino): _82.Plan;
                toAmino(message: _82.Plan): _82.PlanAmino;
                fromAminoMsg(object: _82.PlanAminoMsg): _82.Plan;
                toAminoMsg(message: _82.Plan): _82.PlanAminoMsg;
                fromProtoMsg(message: _82.PlanProtoMsg): _82.Plan;
                toProto(message: _82.Plan): Uint8Array;
                toProtoMsg(message: _82.Plan): _82.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _82.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_82.SoftwareUpgradeProposal>): _82.SoftwareUpgradeProposal;
                fromAmino(object: _82.SoftwareUpgradeProposalAmino): _82.SoftwareUpgradeProposal;
                toAmino(message: _82.SoftwareUpgradeProposal): _82.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _82.SoftwareUpgradeProposalAminoMsg): _82.SoftwareUpgradeProposal;
                toAminoMsg(message: _82.SoftwareUpgradeProposal): _82.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _82.SoftwareUpgradeProposalProtoMsg): _82.SoftwareUpgradeProposal;
                toProto(message: _82.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _82.SoftwareUpgradeProposal): _82.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _82.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_82.CancelSoftwareUpgradeProposal>): _82.CancelSoftwareUpgradeProposal;
                fromAmino(object: _82.CancelSoftwareUpgradeProposalAmino): _82.CancelSoftwareUpgradeProposal;
                toAmino(message: _82.CancelSoftwareUpgradeProposal): _82.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _82.CancelSoftwareUpgradeProposalAminoMsg): _82.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _82.CancelSoftwareUpgradeProposal): _82.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _82.CancelSoftwareUpgradeProposalProtoMsg): _82.CancelSoftwareUpgradeProposal;
                toProto(message: _82.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _82.CancelSoftwareUpgradeProposal): _82.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _82.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ModuleVersion;
                fromPartial(object: Partial<_82.ModuleVersion>): _82.ModuleVersion;
                fromAmino(object: _82.ModuleVersionAmino): _82.ModuleVersion;
                toAmino(message: _82.ModuleVersion): _82.ModuleVersionAmino;
                fromAminoMsg(object: _82.ModuleVersionAminoMsg): _82.ModuleVersion;
                toAminoMsg(message: _82.ModuleVersion): _82.ModuleVersionAminoMsg;
                fromProtoMsg(message: _82.ModuleVersionProtoMsg): _82.ModuleVersion;
                toProto(message: _82.ModuleVersion): Uint8Array;
                toProtoMsg(message: _82.ModuleVersion): _82.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _81.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_81.QueryCurrentPlanRequest>): _81.QueryCurrentPlanRequest;
                fromAmino(_: _81.QueryCurrentPlanRequestAmino): _81.QueryCurrentPlanRequest;
                toAmino(_: _81.QueryCurrentPlanRequest): _81.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _81.QueryCurrentPlanRequestAminoMsg): _81.QueryCurrentPlanRequest;
                toAminoMsg(message: _81.QueryCurrentPlanRequest): _81.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _81.QueryCurrentPlanRequestProtoMsg): _81.QueryCurrentPlanRequest;
                toProto(message: _81.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _81.QueryCurrentPlanRequest): _81.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _81.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_81.QueryCurrentPlanResponse>): _81.QueryCurrentPlanResponse;
                fromAmino(object: _81.QueryCurrentPlanResponseAmino): _81.QueryCurrentPlanResponse;
                toAmino(message: _81.QueryCurrentPlanResponse): _81.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _81.QueryCurrentPlanResponseAminoMsg): _81.QueryCurrentPlanResponse;
                toAminoMsg(message: _81.QueryCurrentPlanResponse): _81.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _81.QueryCurrentPlanResponseProtoMsg): _81.QueryCurrentPlanResponse;
                toProto(message: _81.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _81.QueryCurrentPlanResponse): _81.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _81.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_81.QueryAppliedPlanRequest>): _81.QueryAppliedPlanRequest;
                fromAmino(object: _81.QueryAppliedPlanRequestAmino): _81.QueryAppliedPlanRequest;
                toAmino(message: _81.QueryAppliedPlanRequest): _81.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _81.QueryAppliedPlanRequestAminoMsg): _81.QueryAppliedPlanRequest;
                toAminoMsg(message: _81.QueryAppliedPlanRequest): _81.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _81.QueryAppliedPlanRequestProtoMsg): _81.QueryAppliedPlanRequest;
                toProto(message: _81.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _81.QueryAppliedPlanRequest): _81.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _81.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_81.QueryAppliedPlanResponse>): _81.QueryAppliedPlanResponse;
                fromAmino(object: _81.QueryAppliedPlanResponseAmino): _81.QueryAppliedPlanResponse;
                toAmino(message: _81.QueryAppliedPlanResponse): _81.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _81.QueryAppliedPlanResponseAminoMsg): _81.QueryAppliedPlanResponse;
                toAminoMsg(message: _81.QueryAppliedPlanResponse): _81.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _81.QueryAppliedPlanResponseProtoMsg): _81.QueryAppliedPlanResponse;
                toProto(message: _81.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _81.QueryAppliedPlanResponse): _81.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _81.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_81.QueryUpgradedConsensusStateRequest>): _81.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _81.QueryUpgradedConsensusStateRequestAmino): _81.QueryUpgradedConsensusStateRequest;
                toAmino(message: _81.QueryUpgradedConsensusStateRequest): _81.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _81.QueryUpgradedConsensusStateRequestAminoMsg): _81.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _81.QueryUpgradedConsensusStateRequest): _81.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _81.QueryUpgradedConsensusStateRequestProtoMsg): _81.QueryUpgradedConsensusStateRequest;
                toProto(message: _81.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _81.QueryUpgradedConsensusStateRequest): _81.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _81.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_81.QueryUpgradedConsensusStateResponse>): _81.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _81.QueryUpgradedConsensusStateResponseAmino): _81.QueryUpgradedConsensusStateResponse;
                toAmino(message: _81.QueryUpgradedConsensusStateResponse): _81.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _81.QueryUpgradedConsensusStateResponseAminoMsg): _81.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _81.QueryUpgradedConsensusStateResponse): _81.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _81.QueryUpgradedConsensusStateResponseProtoMsg): _81.QueryUpgradedConsensusStateResponse;
                toProto(message: _81.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _81.QueryUpgradedConsensusStateResponse): _81.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _81.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_81.QueryModuleVersionsRequest>): _81.QueryModuleVersionsRequest;
                fromAmino(object: _81.QueryModuleVersionsRequestAmino): _81.QueryModuleVersionsRequest;
                toAmino(message: _81.QueryModuleVersionsRequest): _81.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _81.QueryModuleVersionsRequestAminoMsg): _81.QueryModuleVersionsRequest;
                toAminoMsg(message: _81.QueryModuleVersionsRequest): _81.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryModuleVersionsRequestProtoMsg): _81.QueryModuleVersionsRequest;
                toProto(message: _81.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryModuleVersionsRequest): _81.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _81.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_81.QueryModuleVersionsResponse>): _81.QueryModuleVersionsResponse;
                fromAmino(object: _81.QueryModuleVersionsResponseAmino): _81.QueryModuleVersionsResponse;
                toAmino(message: _81.QueryModuleVersionsResponse): _81.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _81.QueryModuleVersionsResponseAminoMsg): _81.QueryModuleVersionsResponse;
                toAminoMsg(message: _81.QueryModuleVersionsResponse): _81.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryModuleVersionsResponseProtoMsg): _81.QueryModuleVersionsResponse;
                toProto(message: _81.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryModuleVersionsResponse): _81.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _235.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _83.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _83.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _83.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _83.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _83.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _83.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _83.MsgCreateVestingAccount) => _83.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _83.MsgCreateVestingAccountAmino) => _83.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _84.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.BaseVestingAccount;
                fromPartial(object: Partial<_84.BaseVestingAccount>): _84.BaseVestingAccount;
                fromAmino(object: _84.BaseVestingAccountAmino): _84.BaseVestingAccount;
                toAmino(message: _84.BaseVestingAccount): _84.BaseVestingAccountAmino;
                fromAminoMsg(object: _84.BaseVestingAccountAminoMsg): _84.BaseVestingAccount;
                toAminoMsg(message: _84.BaseVestingAccount): _84.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _84.BaseVestingAccountProtoMsg): _84.BaseVestingAccount;
                toProto(message: _84.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _84.BaseVestingAccount): _84.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _84.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.ContinuousVestingAccount;
                fromPartial(object: Partial<_84.ContinuousVestingAccount>): _84.ContinuousVestingAccount;
                fromAmino(object: _84.ContinuousVestingAccountAmino): _84.ContinuousVestingAccount;
                toAmino(message: _84.ContinuousVestingAccount): _84.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _84.ContinuousVestingAccountAminoMsg): _84.ContinuousVestingAccount;
                toAminoMsg(message: _84.ContinuousVestingAccount): _84.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _84.ContinuousVestingAccountProtoMsg): _84.ContinuousVestingAccount;
                toProto(message: _84.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _84.ContinuousVestingAccount): _84.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _84.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.DelayedVestingAccount;
                fromPartial(object: Partial<_84.DelayedVestingAccount>): _84.DelayedVestingAccount;
                fromAmino(object: _84.DelayedVestingAccountAmino): _84.DelayedVestingAccount;
                toAmino(message: _84.DelayedVestingAccount): _84.DelayedVestingAccountAmino;
                fromAminoMsg(object: _84.DelayedVestingAccountAminoMsg): _84.DelayedVestingAccount;
                toAminoMsg(message: _84.DelayedVestingAccount): _84.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _84.DelayedVestingAccountProtoMsg): _84.DelayedVestingAccount;
                toProto(message: _84.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _84.DelayedVestingAccount): _84.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _84.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.Period;
                fromPartial(object: Partial<_84.Period>): _84.Period;
                fromAmino(object: _84.PeriodAmino): _84.Period;
                toAmino(message: _84.Period): _84.PeriodAmino;
                fromAminoMsg(object: _84.PeriodAminoMsg): _84.Period;
                toAminoMsg(message: _84.Period): _84.PeriodAminoMsg;
                fromProtoMsg(message: _84.PeriodProtoMsg): _84.Period;
                toProto(message: _84.Period): Uint8Array;
                toProtoMsg(message: _84.Period): _84.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _84.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.PeriodicVestingAccount;
                fromPartial(object: Partial<_84.PeriodicVestingAccount>): _84.PeriodicVestingAccount;
                fromAmino(object: _84.PeriodicVestingAccountAmino): _84.PeriodicVestingAccount;
                toAmino(message: _84.PeriodicVestingAccount): _84.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _84.PeriodicVestingAccountAminoMsg): _84.PeriodicVestingAccount;
                toAminoMsg(message: _84.PeriodicVestingAccount): _84.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _84.PeriodicVestingAccountProtoMsg): _84.PeriodicVestingAccount;
                toProto(message: _84.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _84.PeriodicVestingAccount): _84.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _84.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.PermanentLockedAccount;
                fromPartial(object: Partial<_84.PermanentLockedAccount>): _84.PermanentLockedAccount;
                fromAmino(object: _84.PermanentLockedAccountAmino): _84.PermanentLockedAccount;
                toAmino(message: _84.PermanentLockedAccount): _84.PermanentLockedAccountAmino;
                fromAminoMsg(object: _84.PermanentLockedAccountAminoMsg): _84.PermanentLockedAccount;
                toAminoMsg(message: _84.PermanentLockedAccount): _84.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _84.PermanentLockedAccountProtoMsg): _84.PermanentLockedAccount;
                toProto(message: _84.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _84.PermanentLockedAccount): _84.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _83.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgCreateVestingAccount;
                fromPartial(object: Partial<_83.MsgCreateVestingAccount>): _83.MsgCreateVestingAccount;
                fromAmino(object: _83.MsgCreateVestingAccountAmino): _83.MsgCreateVestingAccount;
                toAmino(message: _83.MsgCreateVestingAccount): _83.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _83.MsgCreateVestingAccountAminoMsg): _83.MsgCreateVestingAccount;
                toAminoMsg(message: _83.MsgCreateVestingAccount): _83.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _83.MsgCreateVestingAccountProtoMsg): _83.MsgCreateVestingAccount;
                toProto(message: _83.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _83.MsgCreateVestingAccount): _83.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _83.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_83.MsgCreateVestingAccountResponse>): _83.MsgCreateVestingAccountResponse;
                fromAmino(_: _83.MsgCreateVestingAccountResponseAmino): _83.MsgCreateVestingAccountResponse;
                toAmino(_: _83.MsgCreateVestingAccountResponse): _83.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _83.MsgCreateVestingAccountResponseAminoMsg): _83.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _83.MsgCreateVestingAccountResponse): _83.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _83.MsgCreateVestingAccountResponseProtoMsg): _83.MsgCreateVestingAccountResponse;
                toProto(message: _83.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _83.MsgCreateVestingAccountResponse): _83.MsgCreateVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _226.MsgClientImpl;
                };
                bank: {
                    v1beta1: _227.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _228.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _229.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _230.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _231.MsgClientImpl;
                };
                gov: {
                    v1beta1: _232.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _233.MsgClientImpl;
                };
                staking: {
                    v1beta1: _234.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _235.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _17.QueryAccountsRequest): Promise<_17.QueryAccountsResponse>;
                        account(request: _17.QueryAccountRequest): Promise<_17.QueryAccountResponse>;
                        params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                        moduleAccountByName(request: _17.QueryModuleAccountByNameRequest): Promise<_17.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _21.QueryGrantsRequest): Promise<_21.QueryGrantsResponse>;
                        granterGrants(request: _21.QueryGranterGrantsRequest): Promise<_21.QueryGranterGrantsResponse>;
                        granteeGrants(request: _21.QueryGranteeGrantsRequest): Promise<_21.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _26.QueryBalanceRequest): Promise<_26.QueryBalanceResponse>;
                        allBalances(request: _26.QueryAllBalancesRequest): Promise<_26.QueryAllBalancesResponse>;
                        spendableBalances(request: _26.QuerySpendableBalancesRequest): Promise<_26.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _26.QueryTotalSupplyRequest): Promise<_26.QueryTotalSupplyResponse>;
                        supplyOf(request: _26.QuerySupplyOfRequest): Promise<_26.QuerySupplyOfResponse>;
                        params(request?: _26.QueryParamsRequest): Promise<_26.QueryParamsResponse>;
                        denomMetadata(request: _26.QueryDenomMetadataRequest): Promise<_26.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _26.QueryDenomsMetadataRequest): Promise<_26.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _30.ConfigRequest): Promise<_30.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _37.GetNodeInfoRequest): Promise<_37.GetNodeInfoResponse>;
                            getSyncing(request?: _37.GetSyncingRequest): Promise<_37.GetSyncingResponse>;
                            getLatestBlock(request?: _37.GetLatestBlockRequest): Promise<_37.GetLatestBlockResponse>;
                            getBlockByHeight(request: _37.GetBlockByHeightRequest): Promise<_37.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _37.GetLatestValidatorSetRequest): Promise<_37.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _37.GetValidatorSetByHeightRequest): Promise<_37.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _49.QueryParamsRequest): Promise<_49.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _49.QueryValidatorOutstandingRewardsRequest): Promise<_49.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _49.QueryValidatorCommissionRequest): Promise<_49.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _49.QueryValidatorSlashesRequest): Promise<_49.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _49.QueryDelegationRewardsRequest): Promise<_49.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _49.QueryDelegationTotalRewardsRequest): Promise<_49.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _49.QueryDelegatorValidatorsRequest): Promise<_49.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _49.QueryDelegatorWithdrawAddressRequest): Promise<_49.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _49.QueryCommunityPoolRequest): Promise<_49.QueryCommunityPoolResponse>;
                        foundationTax(request?: _49.QueryFoundationTaxRequest): Promise<_49.QueryFoundationTaxResponse>;
                        restakeThreshold(request?: _49.QueryRestakeThresholdRequest): Promise<_49.QueryRestakeThresholdResponse>;
                        restakingEntries(request: _49.QueryRestakeEntriesRequest): Promise<_49.QueryRestakingEntriesResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _53.QueryEvidenceRequest): Promise<_53.QueryEvidenceResponse>;
                        allEvidence(request?: _53.QueryAllEvidenceRequest): Promise<_53.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _57.QueryAllowanceRequest): Promise<_57.QueryAllowanceResponse>;
                        allowances(request: _57.QueryAllowancesRequest): Promise<_57.QueryAllowancesResponse>;
                        allowancesByGranter(request: _57.QueryAllowancesByGranterRequest): Promise<_57.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _62.QueryProposalRequest): Promise<_62.QueryProposalResponse>;
                        proposals(request: _62.QueryProposalsRequest): Promise<_62.QueryProposalsResponse>;
                        vote(request: _62.QueryVoteRequest): Promise<_62.QueryVoteResponse>;
                        votes(request: _62.QueryVotesRequest): Promise<_62.QueryVotesResponse>;
                        params(request: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
                        deposit(request: _62.QueryDepositRequest): Promise<_62.QueryDepositResponse>;
                        deposits(request: _62.QueryDepositsRequest): Promise<_62.QueryDepositsResponse>;
                        tallyResult(request: _62.QueryTallyResultRequest): Promise<_62.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                        inflation(request?: _66.QueryInflationRequest): Promise<_66.QueryInflationResponse>;
                        annualProvisions(request?: _66.QueryAnnualProvisionsRequest): Promise<_66.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                        signingInfo(request: _70.QuerySigningInfoRequest): Promise<_70.QuerySigningInfoResponse>;
                        signingInfos(request?: _70.QuerySigningInfosRequest): Promise<_70.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _75.QueryValidatorsRequest): Promise<_75.QueryValidatorsResponse>;
                        validator(request: _75.QueryValidatorRequest): Promise<_75.QueryValidatorResponse>;
                        validatorDelegations(request: _75.QueryValidatorDelegationsRequest): Promise<_75.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _75.QueryValidatorUnbondingDelegationsRequest): Promise<_75.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _75.QueryDelegationRequest): Promise<_75.QueryDelegationResponse>;
                        unbondingDelegation(request: _75.QueryUnbondingDelegationRequest): Promise<_75.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _75.QueryDelegatorDelegationsRequest): Promise<_75.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _75.QueryDelegatorUnbondingDelegationsRequest): Promise<_75.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _75.QueryRedelegationsRequest): Promise<_75.QueryRedelegationsResponse>;
                        delegatorValidators(request: _75.QueryDelegatorValidatorsRequest): Promise<_75.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _75.QueryDelegatorValidatorRequest): Promise<_75.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _75.QueryHistoricalInfoRequest): Promise<_75.QueryHistoricalInfoResponse>;
                        pool(request?: _75.QueryPoolRequest): Promise<_75.QueryPoolResponse>;
                        params(request?: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _79.SimulateRequest): Promise<_79.SimulateResponse>;
                        getTx(request: _79.GetTxRequest): Promise<_79.GetTxResponse>;
                        broadcastTx(request: _79.BroadcastTxRequest): Promise<_79.BroadcastTxResponse>;
                        getTxsEvent(request: _79.GetTxsEventRequest): Promise<_79.GetTxsEventResponse>;
                        getBlockWithTxs(request: _79.GetBlockWithTxsRequest): Promise<_79.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _81.QueryCurrentPlanRequest): Promise<_81.QueryCurrentPlanResponse>;
                        appliedPlan(request: _81.QueryAppliedPlanRequest): Promise<_81.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _81.QueryUpgradedConsensusStateRequest): Promise<_81.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _81.QueryModuleVersionsRequest): Promise<_81.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _196.LCDQueryClient;
                };
                authz: {
                    v1beta1: _197.LCDQueryClient;
                };
                bank: {
                    v1beta1: _198.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _199.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _200.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _201.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _202.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _203.LCDQueryClient;
                };
                gov: {
                    v1beta1: _204.LCDQueryClient;
                };
                mint: {
                    v1beta1: _205.LCDQueryClient;
                };
                params: {
                    v1beta1: _206.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _207.LCDQueryClient;
                };
                staking: {
                    v1beta1: _208.LCDQueryClient;
                };
                tx: {
                    v1beta1: _209.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _210.LCDQueryClient;
                };
            };
        }>;
    };
}
