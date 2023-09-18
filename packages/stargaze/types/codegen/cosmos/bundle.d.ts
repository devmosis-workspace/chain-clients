import * as _24 from "./auth/v1beta1/auth";
import * as _25 from "./auth/v1beta1/genesis";
import * as _26 from "./auth/v1beta1/query";
import * as _27 from "./authz/v1beta1/authz";
import * as _28 from "./authz/v1beta1/event";
import * as _29 from "./authz/v1beta1/genesis";
import * as _30 from "./authz/v1beta1/query";
import * as _31 from "./authz/v1beta1/tx";
import * as _32 from "./bank/v1beta1/authz";
import * as _33 from "./bank/v1beta1/bank";
import * as _34 from "./bank/v1beta1/genesis";
import * as _35 from "./bank/v1beta1/query";
import * as _36 from "./bank/v1beta1/tx";
import * as _37 from "./base/abci/v1beta1/abci";
import * as _38 from "./base/kv/v1beta1/kv";
import * as _39 from "./base/node/v1beta1/query";
import * as _40 from "./base/query/v1beta1/pagination";
import * as _41 from "./base/reflection/v1beta1/reflection";
import * as _42 from "./base/reflection/v2alpha1/reflection";
import * as _43 from "./base/snapshots/v1beta1/snapshot";
import * as _44 from "./base/store/v1beta1/commit_info";
import * as _45 from "./base/store/v1beta1/listening";
import * as _46 from "./base/tendermint/v1beta1/query";
import * as _47 from "./base/v1beta1/coin";
import * as _48 from "./capability/v1beta1/capability";
import * as _49 from "./capability/v1beta1/genesis";
import * as _50 from "./crisis/v1beta1/genesis";
import * as _51 from "./crisis/v1beta1/tx";
import * as _52 from "./crypto/ed25519/keys";
import * as _53 from "./crypto/multisig/keys";
import * as _54 from "./crypto/secp256k1/keys";
import * as _55 from "./crypto/secp256r1/keys";
import * as _56 from "./distribution/v1beta1/distribution";
import * as _57 from "./distribution/v1beta1/genesis";
import * as _58 from "./distribution/v1beta1/query";
import * as _59 from "./distribution/v1beta1/tx";
import * as _60 from "./evidence/v1beta1/evidence";
import * as _61 from "./evidence/v1beta1/genesis";
import * as _62 from "./evidence/v1beta1/query";
import * as _63 from "./evidence/v1beta1/tx";
import * as _64 from "./feegrant/v1beta1/feegrant";
import * as _65 from "./feegrant/v1beta1/genesis";
import * as _66 from "./feegrant/v1beta1/query";
import * as _67 from "./feegrant/v1beta1/tx";
import * as _68 from "./genutil/v1beta1/genesis";
import * as _69 from "./gov/v1beta1/genesis";
import * as _70 from "./gov/v1beta1/gov";
import * as _71 from "./gov/v1beta1/query";
import * as _72 from "./gov/v1beta1/tx";
import * as _73 from "./mint/v1beta1/genesis";
import * as _74 from "./mint/v1beta1/mint";
import * as _75 from "./mint/v1beta1/query";
import * as _76 from "./params/v1beta1/params";
import * as _77 from "./params/v1beta1/query";
import * as _78 from "./slashing/v1beta1/genesis";
import * as _79 from "./slashing/v1beta1/query";
import * as _80 from "./slashing/v1beta1/slashing";
import * as _81 from "./slashing/v1beta1/tx";
import * as _82 from "./staking/v1beta1/authz";
import * as _83 from "./staking/v1beta1/genesis";
import * as _84 from "./staking/v1beta1/query";
import * as _85 from "./staking/v1beta1/staking";
import * as _86 from "./staking/v1beta1/tx";
import * as _87 from "./tx/signing/v1beta1/signing";
import * as _88 from "./tx/v1beta1/service";
import * as _89 from "./tx/v1beta1/tx";
import * as _90 from "./upgrade/v1beta1/query";
import * as _91 from "./upgrade/v1beta1/upgrade";
import * as _92 from "./vesting/v1beta1/tx";
import * as _93 from "./vesting/v1beta1/vesting";
import * as _170 from "./auth/v1beta1/query.lcd";
import * as _171 from "./authz/v1beta1/query.lcd";
import * as _172 from "./bank/v1beta1/query.lcd";
import * as _173 from "./base/node/v1beta1/query.lcd";
import * as _174 from "./base/tendermint/v1beta1/query.lcd";
import * as _175 from "./distribution/v1beta1/query.lcd";
import * as _176 from "./evidence/v1beta1/query.lcd";
import * as _177 from "./feegrant/v1beta1/query.lcd";
import * as _178 from "./gov/v1beta1/query.lcd";
import * as _179 from "./mint/v1beta1/query.lcd";
import * as _180 from "./params/v1beta1/query.lcd";
import * as _181 from "./slashing/v1beta1/query.lcd";
import * as _182 from "./staking/v1beta1/query.lcd";
import * as _183 from "./tx/v1beta1/service.lcd";
import * as _184 from "./upgrade/v1beta1/query.lcd";
import * as _185 from "./auth/v1beta1/query.rpc.Query";
import * as _186 from "./authz/v1beta1/query.rpc.Query";
import * as _187 from "./bank/v1beta1/query.rpc.Query";
import * as _188 from "./base/node/v1beta1/query.rpc.Service";
import * as _189 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _190 from "./distribution/v1beta1/query.rpc.Query";
import * as _191 from "./evidence/v1beta1/query.rpc.Query";
import * as _192 from "./feegrant/v1beta1/query.rpc.Query";
import * as _193 from "./gov/v1beta1/query.rpc.Query";
import * as _194 from "./mint/v1beta1/query.rpc.Query";
import * as _195 from "./params/v1beta1/query.rpc.Query";
import * as _196 from "./slashing/v1beta1/query.rpc.Query";
import * as _197 from "./staking/v1beta1/query.rpc.Query";
import * as _198 from "./tx/v1beta1/service.rpc.Service";
import * as _199 from "./upgrade/v1beta1/query.rpc.Query";
import * as _200 from "./authz/v1beta1/tx.rpc.msg";
import * as _201 from "./bank/v1beta1/tx.rpc.msg";
import * as _202 from "./crisis/v1beta1/tx.rpc.msg";
import * as _203 from "./distribution/v1beta1/tx.rpc.msg";
import * as _204 from "./evidence/v1beta1/tx.rpc.msg";
import * as _205 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _206 from "./gov/v1beta1/tx.rpc.msg";
import * as _207 from "./slashing/v1beta1/tx.rpc.msg";
import * as _208 from "./staking/v1beta1/tx.rpc.msg";
import * as _209 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _185.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _26.QueryAccountsRequest): Promise<_26.QueryAccountsResponse>;
                account(request: _26.QueryAccountRequest): Promise<_26.QueryAccountResponse>;
                params(request?: _26.QueryParamsRequest): Promise<_26.QueryParamsResponse>;
                moduleAccountByName(request: _26.QueryModuleAccountByNameRequest): Promise<_26.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _170.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _26.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryAccountsRequest;
                fromPartial(object: Partial<_26.QueryAccountsRequest>): _26.QueryAccountsRequest;
                fromAmino(object: _26.QueryAccountsRequestAmino): _26.QueryAccountsRequest;
                toAmino(message: _26.QueryAccountsRequest): _26.QueryAccountsRequestAmino;
                fromAminoMsg(object: _26.QueryAccountsRequestAminoMsg): _26.QueryAccountsRequest;
                toAminoMsg(message: _26.QueryAccountsRequest): _26.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _26.QueryAccountsRequestProtoMsg): _26.QueryAccountsRequest;
                toProto(message: _26.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _26.QueryAccountsRequest): _26.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _26.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryAccountsResponse;
                fromPartial(object: Partial<_26.QueryAccountsResponse>): _26.QueryAccountsResponse;
                fromAmino(object: _26.QueryAccountsResponseAmino): _26.QueryAccountsResponse;
                toAmino(message: _26.QueryAccountsResponse): _26.QueryAccountsResponseAmino;
                fromAminoMsg(object: _26.QueryAccountsResponseAminoMsg): _26.QueryAccountsResponse;
                toAminoMsg(message: _26.QueryAccountsResponse): _26.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _26.QueryAccountsResponseProtoMsg): _26.QueryAccountsResponse;
                toProto(message: _26.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _26.QueryAccountsResponse): _26.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _26.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryAccountRequest;
                fromPartial(object: Partial<_26.QueryAccountRequest>): _26.QueryAccountRequest;
                fromAmino(object: _26.QueryAccountRequestAmino): _26.QueryAccountRequest;
                toAmino(message: _26.QueryAccountRequest): _26.QueryAccountRequestAmino;
                fromAminoMsg(object: _26.QueryAccountRequestAminoMsg): _26.QueryAccountRequest;
                toAminoMsg(message: _26.QueryAccountRequest): _26.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _26.QueryAccountRequestProtoMsg): _26.QueryAccountRequest;
                toProto(message: _26.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _26.QueryAccountRequest): _26.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _26.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryAccountResponse;
                fromPartial(object: Partial<_26.QueryAccountResponse>): _26.QueryAccountResponse;
                fromAmino(object: _26.QueryAccountResponseAmino): _26.QueryAccountResponse;
                toAmino(message: _26.QueryAccountResponse): _26.QueryAccountResponseAmino;
                fromAminoMsg(object: _26.QueryAccountResponseAminoMsg): _26.QueryAccountResponse;
                toAminoMsg(message: _26.QueryAccountResponse): _26.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _26.QueryAccountResponseProtoMsg): _26.QueryAccountResponse;
                toProto(message: _26.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _26.QueryAccountResponse): _26.QueryAccountResponseProtoMsg;
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
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _26.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_26.QueryModuleAccountByNameRequest>): _26.QueryModuleAccountByNameRequest;
                fromAmino(object: _26.QueryModuleAccountByNameRequestAmino): _26.QueryModuleAccountByNameRequest;
                toAmino(message: _26.QueryModuleAccountByNameRequest): _26.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _26.QueryModuleAccountByNameRequestAminoMsg): _26.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _26.QueryModuleAccountByNameRequest): _26.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _26.QueryModuleAccountByNameRequestProtoMsg): _26.QueryModuleAccountByNameRequest;
                toProto(message: _26.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _26.QueryModuleAccountByNameRequest): _26.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _26.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_26.QueryModuleAccountByNameResponse>): _26.QueryModuleAccountByNameResponse;
                fromAmino(object: _26.QueryModuleAccountByNameResponseAmino): _26.QueryModuleAccountByNameResponse;
                toAmino(message: _26.QueryModuleAccountByNameResponse): _26.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _26.QueryModuleAccountByNameResponseAminoMsg): _26.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _26.QueryModuleAccountByNameResponse): _26.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _26.QueryModuleAccountByNameResponseProtoMsg): _26.QueryModuleAccountByNameResponse;
                toProto(message: _26.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _26.QueryModuleAccountByNameResponse): _26.QueryModuleAccountByNameResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _24.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _24.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            BaseAccount: {
                typeUrl: string;
                encode(message: _24.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.BaseAccount;
                fromPartial(object: Partial<_24.BaseAccount>): _24.BaseAccount;
                fromAmino(object: _24.BaseAccountAmino): _24.BaseAccount;
                toAmino(message: _24.BaseAccount): _24.BaseAccountAmino;
                fromAminoMsg(object: _24.BaseAccountAminoMsg): _24.BaseAccount;
                toAminoMsg(message: _24.BaseAccount): _24.BaseAccountAminoMsg;
                fromProtoMsg(message: _24.BaseAccountProtoMsg): _24.BaseAccount;
                toProto(message: _24.BaseAccount): Uint8Array;
                toProtoMsg(message: _24.BaseAccount): _24.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _24.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.ModuleAccount;
                fromPartial(object: Partial<_24.ModuleAccount>): _24.ModuleAccount;
                fromAmino(object: _24.ModuleAccountAmino): _24.ModuleAccount;
                toAmino(message: _24.ModuleAccount): _24.ModuleAccountAmino;
                fromAminoMsg(object: _24.ModuleAccountAminoMsg): _24.ModuleAccount;
                toAminoMsg(message: _24.ModuleAccount): _24.ModuleAccountAminoMsg;
                fromProtoMsg(message: _24.ModuleAccountProtoMsg): _24.ModuleAccount;
                toProto(message: _24.ModuleAccount): Uint8Array;
                toProtoMsg(message: _24.ModuleAccount): _24.ModuleAccountProtoMsg;
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
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _200.MsgClientImpl;
            QueryClientImpl: typeof _186.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _30.QueryGrantsRequest): Promise<_30.QueryGrantsResponse>;
                granterGrants(request: _30.QueryGranterGrantsRequest): Promise<_30.QueryGranterGrantsResponse>;
                granteeGrants(request: _30.QueryGranteeGrantsRequest): Promise<_30.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _171.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _31.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _31.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _31.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _31.MsgGrant): {
                        typeUrl: string;
                        value: _31.MsgGrant;
                    };
                    exec(value: _31.MsgExec): {
                        typeUrl: string;
                        value: _31.MsgExec;
                    };
                    revoke(value: _31.MsgRevoke): {
                        typeUrl: string;
                        value: _31.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _31.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _31.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _31.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _31.MsgGrant): {
                        typeUrl: string;
                        value: _31.MsgGrant;
                    };
                    exec(value: _31.MsgExec): {
                        typeUrl: string;
                        value: _31.MsgExec;
                    };
                    revoke(value: _31.MsgRevoke): {
                        typeUrl: string;
                        value: _31.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _31.MsgGrant) => _31.MsgGrantAmino;
                    fromAmino: (object: _31.MsgGrantAmino) => _31.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _31.MsgExec) => _31.MsgExecAmino;
                    fromAmino: (object: _31.MsgExecAmino) => _31.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _31.MsgRevoke) => _31.MsgRevokeAmino;
                    fromAmino: (object: _31.MsgRevokeAmino) => _31.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _31.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.MsgGrant;
                fromPartial(object: Partial<_31.MsgGrant>): _31.MsgGrant;
                fromAmino(object: _31.MsgGrantAmino): _31.MsgGrant;
                toAmino(message: _31.MsgGrant): _31.MsgGrantAmino;
                fromAminoMsg(object: _31.MsgGrantAminoMsg): _31.MsgGrant;
                toAminoMsg(message: _31.MsgGrant): _31.MsgGrantAminoMsg;
                fromProtoMsg(message: _31.MsgGrantProtoMsg): _31.MsgGrant;
                toProto(message: _31.MsgGrant): Uint8Array;
                toProtoMsg(message: _31.MsgGrant): _31.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _31.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.MsgExecResponse;
                fromPartial(object: Partial<_31.MsgExecResponse>): _31.MsgExecResponse;
                fromAmino(object: _31.MsgExecResponseAmino): _31.MsgExecResponse;
                toAmino(message: _31.MsgExecResponse): _31.MsgExecResponseAmino;
                fromAminoMsg(object: _31.MsgExecResponseAminoMsg): _31.MsgExecResponse;
                toAminoMsg(message: _31.MsgExecResponse): _31.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _31.MsgExecResponseProtoMsg): _31.MsgExecResponse;
                toProto(message: _31.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _31.MsgExecResponse): _31.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _31.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.MsgExec;
                fromPartial(object: Partial<_31.MsgExec>): _31.MsgExec;
                fromAmino(object: _31.MsgExecAmino): _31.MsgExec;
                toAmino(message: _31.MsgExec): _31.MsgExecAmino;
                fromAminoMsg(object: _31.MsgExecAminoMsg): _31.MsgExec;
                toAminoMsg(message: _31.MsgExec): _31.MsgExecAminoMsg;
                fromProtoMsg(message: _31.MsgExecProtoMsg): _31.MsgExec;
                toProto(message: _31.MsgExec): Uint8Array;
                toProtoMsg(message: _31.MsgExec): _31.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _31.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.MsgGrantResponse;
                fromPartial(_: Partial<_31.MsgGrantResponse>): _31.MsgGrantResponse;
                fromAmino(_: _31.MsgGrantResponseAmino): _31.MsgGrantResponse;
                toAmino(_: _31.MsgGrantResponse): _31.MsgGrantResponseAmino;
                fromAminoMsg(object: _31.MsgGrantResponseAminoMsg): _31.MsgGrantResponse;
                toAminoMsg(message: _31.MsgGrantResponse): _31.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _31.MsgGrantResponseProtoMsg): _31.MsgGrantResponse;
                toProto(message: _31.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _31.MsgGrantResponse): _31.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _31.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.MsgRevoke;
                fromPartial(object: Partial<_31.MsgRevoke>): _31.MsgRevoke;
                fromAmino(object: _31.MsgRevokeAmino): _31.MsgRevoke;
                toAmino(message: _31.MsgRevoke): _31.MsgRevokeAmino;
                fromAminoMsg(object: _31.MsgRevokeAminoMsg): _31.MsgRevoke;
                toAminoMsg(message: _31.MsgRevoke): _31.MsgRevokeAminoMsg;
                fromProtoMsg(message: _31.MsgRevokeProtoMsg): _31.MsgRevoke;
                toProto(message: _31.MsgRevoke): Uint8Array;
                toProtoMsg(message: _31.MsgRevoke): _31.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _31.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.MsgRevokeResponse;
                fromPartial(_: Partial<_31.MsgRevokeResponse>): _31.MsgRevokeResponse;
                fromAmino(_: _31.MsgRevokeResponseAmino): _31.MsgRevokeResponse;
                toAmino(_: _31.MsgRevokeResponse): _31.MsgRevokeResponseAmino;
                fromAminoMsg(object: _31.MsgRevokeResponseAminoMsg): _31.MsgRevokeResponse;
                toAminoMsg(message: _31.MsgRevokeResponse): _31.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _31.MsgRevokeResponseProtoMsg): _31.MsgRevokeResponse;
                toProto(message: _31.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _31.MsgRevokeResponse): _31.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _30.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryGrantsRequest;
                fromPartial(object: Partial<_30.QueryGrantsRequest>): _30.QueryGrantsRequest;
                fromAmino(object: _30.QueryGrantsRequestAmino): _30.QueryGrantsRequest;
                toAmino(message: _30.QueryGrantsRequest): _30.QueryGrantsRequestAmino;
                fromAminoMsg(object: _30.QueryGrantsRequestAminoMsg): _30.QueryGrantsRequest;
                toAminoMsg(message: _30.QueryGrantsRequest): _30.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _30.QueryGrantsRequestProtoMsg): _30.QueryGrantsRequest;
                toProto(message: _30.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _30.QueryGrantsRequest): _30.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _30.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryGrantsResponse;
                fromPartial(object: Partial<_30.QueryGrantsResponse>): _30.QueryGrantsResponse;
                fromAmino(object: _30.QueryGrantsResponseAmino): _30.QueryGrantsResponse;
                toAmino(message: _30.QueryGrantsResponse): _30.QueryGrantsResponseAmino;
                fromAminoMsg(object: _30.QueryGrantsResponseAminoMsg): _30.QueryGrantsResponse;
                toAminoMsg(message: _30.QueryGrantsResponse): _30.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _30.QueryGrantsResponseProtoMsg): _30.QueryGrantsResponse;
                toProto(message: _30.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _30.QueryGrantsResponse): _30.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _30.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_30.QueryGranterGrantsRequest>): _30.QueryGranterGrantsRequest;
                fromAmino(object: _30.QueryGranterGrantsRequestAmino): _30.QueryGranterGrantsRequest;
                toAmino(message: _30.QueryGranterGrantsRequest): _30.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _30.QueryGranterGrantsRequestAminoMsg): _30.QueryGranterGrantsRequest;
                toAminoMsg(message: _30.QueryGranterGrantsRequest): _30.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _30.QueryGranterGrantsRequestProtoMsg): _30.QueryGranterGrantsRequest;
                toProto(message: _30.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _30.QueryGranterGrantsRequest): _30.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _30.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_30.QueryGranterGrantsResponse>): _30.QueryGranterGrantsResponse;
                fromAmino(object: _30.QueryGranterGrantsResponseAmino): _30.QueryGranterGrantsResponse;
                toAmino(message: _30.QueryGranterGrantsResponse): _30.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _30.QueryGranterGrantsResponseAminoMsg): _30.QueryGranterGrantsResponse;
                toAminoMsg(message: _30.QueryGranterGrantsResponse): _30.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _30.QueryGranterGrantsResponseProtoMsg): _30.QueryGranterGrantsResponse;
                toProto(message: _30.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _30.QueryGranterGrantsResponse): _30.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _30.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_30.QueryGranteeGrantsRequest>): _30.QueryGranteeGrantsRequest;
                fromAmino(object: _30.QueryGranteeGrantsRequestAmino): _30.QueryGranteeGrantsRequest;
                toAmino(message: _30.QueryGranteeGrantsRequest): _30.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _30.QueryGranteeGrantsRequestAminoMsg): _30.QueryGranteeGrantsRequest;
                toAminoMsg(message: _30.QueryGranteeGrantsRequest): _30.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _30.QueryGranteeGrantsRequestProtoMsg): _30.QueryGranteeGrantsRequest;
                toProto(message: _30.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _30.QueryGranteeGrantsRequest): _30.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _30.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_30.QueryGranteeGrantsResponse>): _30.QueryGranteeGrantsResponse;
                fromAmino(object: _30.QueryGranteeGrantsResponseAmino): _30.QueryGranteeGrantsResponse;
                toAmino(message: _30.QueryGranteeGrantsResponse): _30.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _30.QueryGranteeGrantsResponseAminoMsg): _30.QueryGranteeGrantsResponse;
                toAminoMsg(message: _30.QueryGranteeGrantsResponse): _30.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _30.QueryGranteeGrantsResponseProtoMsg): _30.QueryGranteeGrantsResponse;
                toProto(message: _30.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _30.QueryGranteeGrantsResponse): _30.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _29.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.GenesisState;
                fromPartial(object: Partial<_29.GenesisState>): _29.GenesisState;
                fromAmino(object: _29.GenesisStateAmino): _29.GenesisState;
                toAmino(message: _29.GenesisState): _29.GenesisStateAmino;
                fromAminoMsg(object: _29.GenesisStateAminoMsg): _29.GenesisState;
                toAminoMsg(message: _29.GenesisState): _29.GenesisStateAminoMsg;
                fromProtoMsg(message: _29.GenesisStateProtoMsg): _29.GenesisState;
                toProto(message: _29.GenesisState): Uint8Array;
                toProtoMsg(message: _29.GenesisState): _29.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _28.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.EventGrant;
                fromPartial(object: Partial<_28.EventGrant>): _28.EventGrant;
                fromAmino(object: _28.EventGrantAmino): _28.EventGrant;
                toAmino(message: _28.EventGrant): _28.EventGrantAmino;
                fromAminoMsg(object: _28.EventGrantAminoMsg): _28.EventGrant;
                toAminoMsg(message: _28.EventGrant): _28.EventGrantAminoMsg;
                fromProtoMsg(message: _28.EventGrantProtoMsg): _28.EventGrant;
                toProto(message: _28.EventGrant): Uint8Array;
                toProtoMsg(message: _28.EventGrant): _28.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _28.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.EventRevoke;
                fromPartial(object: Partial<_28.EventRevoke>): _28.EventRevoke;
                fromAmino(object: _28.EventRevokeAmino): _28.EventRevoke;
                toAmino(message: _28.EventRevoke): _28.EventRevokeAmino;
                fromAminoMsg(object: _28.EventRevokeAminoMsg): _28.EventRevoke;
                toAminoMsg(message: _28.EventRevoke): _28.EventRevokeAminoMsg;
                fromProtoMsg(message: _28.EventRevokeProtoMsg): _28.EventRevoke;
                toProto(message: _28.EventRevoke): Uint8Array;
                toProtoMsg(message: _28.EventRevoke): _28.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _27.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.GenericAuthorization;
                fromPartial(object: Partial<_27.GenericAuthorization>): _27.GenericAuthorization;
                fromAmino(object: _27.GenericAuthorizationAmino): _27.GenericAuthorization;
                toAmino(message: _27.GenericAuthorization): _27.GenericAuthorizationAmino;
                fromAminoMsg(object: _27.GenericAuthorizationAminoMsg): _27.GenericAuthorization;
                toAminoMsg(message: _27.GenericAuthorization): _27.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _27.GenericAuthorizationProtoMsg): _27.GenericAuthorization;
                toProto(message: _27.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _27.GenericAuthorization): _27.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _27.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.Grant;
                fromPartial(object: Partial<_27.Grant>): _27.Grant;
                fromAmino(object: _27.GrantAmino): _27.Grant;
                toAmino(message: _27.Grant): _27.GrantAmino;
                fromAminoMsg(object: _27.GrantAminoMsg): _27.Grant;
                toAminoMsg(message: _27.Grant): _27.GrantAminoMsg;
                fromProtoMsg(message: _27.GrantProtoMsg): _27.Grant;
                toProto(message: _27.Grant): Uint8Array;
                toProtoMsg(message: _27.Grant): _27.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _27.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.GrantAuthorization;
                fromPartial(object: Partial<_27.GrantAuthorization>): _27.GrantAuthorization;
                fromAmino(object: _27.GrantAuthorizationAmino): _27.GrantAuthorization;
                toAmino(message: _27.GrantAuthorization): _27.GrantAuthorizationAmino;
                fromAminoMsg(object: _27.GrantAuthorizationAminoMsg): _27.GrantAuthorization;
                toAminoMsg(message: _27.GrantAuthorization): _27.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _27.GrantAuthorizationProtoMsg): _27.GrantAuthorization;
                toProto(message: _27.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _27.GrantAuthorization): _27.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _32.SendAuthorization | _82.StakeAuthorization | _27.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _201.MsgClientImpl;
            QueryClientImpl: typeof _187.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _35.QueryBalanceRequest): Promise<_35.QueryBalanceResponse>;
                allBalances(request: _35.QueryAllBalancesRequest): Promise<_35.QueryAllBalancesResponse>;
                spendableBalances(request: _35.QuerySpendableBalancesRequest): Promise<_35.QuerySpendableBalancesResponse>;
                totalSupply(request?: _35.QueryTotalSupplyRequest): Promise<_35.QueryTotalSupplyResponse>;
                supplyOf(request: _35.QuerySupplyOfRequest): Promise<_35.QuerySupplyOfResponse>;
                params(request?: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
                denomMetadata(request: _35.QueryDenomMetadataRequest): Promise<_35.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _35.QueryDenomsMetadataRequest): Promise<_35.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _172.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _36.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _36.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _36.MsgSend): {
                        typeUrl: string;
                        value: _36.MsgSend;
                    };
                    multiSend(value: _36.MsgMultiSend): {
                        typeUrl: string;
                        value: _36.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _36.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _36.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _36.MsgSend): {
                        typeUrl: string;
                        value: _36.MsgSend;
                    };
                    multiSend(value: _36.MsgMultiSend): {
                        typeUrl: string;
                        value: _36.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _36.MsgSend) => _36.MsgSendAmino;
                    fromAmino: (object: _36.MsgSendAmino) => _36.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _36.MsgMultiSend) => _36.MsgMultiSendAmino;
                    fromAmino: (object: _36.MsgMultiSendAmino) => _36.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _36.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.MsgSend;
                fromPartial(object: Partial<_36.MsgSend>): _36.MsgSend;
                fromAmino(object: _36.MsgSendAmino): _36.MsgSend;
                toAmino(message: _36.MsgSend): _36.MsgSendAmino;
                fromAminoMsg(object: _36.MsgSendAminoMsg): _36.MsgSend;
                toAminoMsg(message: _36.MsgSend): _36.MsgSendAminoMsg;
                fromProtoMsg(message: _36.MsgSendProtoMsg): _36.MsgSend;
                toProto(message: _36.MsgSend): Uint8Array;
                toProtoMsg(message: _36.MsgSend): _36.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _36.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _36.MsgSendResponse;
                fromPartial(_: Partial<_36.MsgSendResponse>): _36.MsgSendResponse;
                fromAmino(_: _36.MsgSendResponseAmino): _36.MsgSendResponse;
                toAmino(_: _36.MsgSendResponse): _36.MsgSendResponseAmino;
                fromAminoMsg(object: _36.MsgSendResponseAminoMsg): _36.MsgSendResponse;
                toAminoMsg(message: _36.MsgSendResponse): _36.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _36.MsgSendResponseProtoMsg): _36.MsgSendResponse;
                toProto(message: _36.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _36.MsgSendResponse): _36.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _36.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.MsgMultiSend;
                fromPartial(object: Partial<_36.MsgMultiSend>): _36.MsgMultiSend;
                fromAmino(object: _36.MsgMultiSendAmino): _36.MsgMultiSend;
                toAmino(message: _36.MsgMultiSend): _36.MsgMultiSendAmino;
                fromAminoMsg(object: _36.MsgMultiSendAminoMsg): _36.MsgMultiSend;
                toAminoMsg(message: _36.MsgMultiSend): _36.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _36.MsgMultiSendProtoMsg): _36.MsgMultiSend;
                toProto(message: _36.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _36.MsgMultiSend): _36.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _36.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _36.MsgMultiSendResponse;
                fromPartial(_: Partial<_36.MsgMultiSendResponse>): _36.MsgMultiSendResponse;
                fromAmino(_: _36.MsgMultiSendResponseAmino): _36.MsgMultiSendResponse;
                toAmino(_: _36.MsgMultiSendResponse): _36.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _36.MsgMultiSendResponseAminoMsg): _36.MsgMultiSendResponse;
                toAminoMsg(message: _36.MsgMultiSendResponse): _36.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _36.MsgMultiSendResponseProtoMsg): _36.MsgMultiSendResponse;
                toProto(message: _36.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _36.MsgMultiSendResponse): _36.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _35.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryBalanceRequest;
                fromPartial(object: Partial<_35.QueryBalanceRequest>): _35.QueryBalanceRequest;
                fromAmino(object: _35.QueryBalanceRequestAmino): _35.QueryBalanceRequest;
                toAmino(message: _35.QueryBalanceRequest): _35.QueryBalanceRequestAmino;
                fromAminoMsg(object: _35.QueryBalanceRequestAminoMsg): _35.QueryBalanceRequest;
                toAminoMsg(message: _35.QueryBalanceRequest): _35.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _35.QueryBalanceRequestProtoMsg): _35.QueryBalanceRequest;
                toProto(message: _35.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _35.QueryBalanceRequest): _35.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _35.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryBalanceResponse;
                fromPartial(object: Partial<_35.QueryBalanceResponse>): _35.QueryBalanceResponse;
                fromAmino(object: _35.QueryBalanceResponseAmino): _35.QueryBalanceResponse;
                toAmino(message: _35.QueryBalanceResponse): _35.QueryBalanceResponseAmino;
                fromAminoMsg(object: _35.QueryBalanceResponseAminoMsg): _35.QueryBalanceResponse;
                toAminoMsg(message: _35.QueryBalanceResponse): _35.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _35.QueryBalanceResponseProtoMsg): _35.QueryBalanceResponse;
                toProto(message: _35.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _35.QueryBalanceResponse): _35.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _35.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryAllBalancesRequest;
                fromPartial(object: Partial<_35.QueryAllBalancesRequest>): _35.QueryAllBalancesRequest;
                fromAmino(object: _35.QueryAllBalancesRequestAmino): _35.QueryAllBalancesRequest;
                toAmino(message: _35.QueryAllBalancesRequest): _35.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _35.QueryAllBalancesRequestAminoMsg): _35.QueryAllBalancesRequest;
                toAminoMsg(message: _35.QueryAllBalancesRequest): _35.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _35.QueryAllBalancesRequestProtoMsg): _35.QueryAllBalancesRequest;
                toProto(message: _35.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _35.QueryAllBalancesRequest): _35.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _35.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryAllBalancesResponse;
                fromPartial(object: Partial<_35.QueryAllBalancesResponse>): _35.QueryAllBalancesResponse;
                fromAmino(object: _35.QueryAllBalancesResponseAmino): _35.QueryAllBalancesResponse;
                toAmino(message: _35.QueryAllBalancesResponse): _35.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _35.QueryAllBalancesResponseAminoMsg): _35.QueryAllBalancesResponse;
                toAminoMsg(message: _35.QueryAllBalancesResponse): _35.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _35.QueryAllBalancesResponseProtoMsg): _35.QueryAllBalancesResponse;
                toProto(message: _35.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _35.QueryAllBalancesResponse): _35.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _35.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_35.QuerySpendableBalancesRequest>): _35.QuerySpendableBalancesRequest;
                fromAmino(object: _35.QuerySpendableBalancesRequestAmino): _35.QuerySpendableBalancesRequest;
                toAmino(message: _35.QuerySpendableBalancesRequest): _35.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _35.QuerySpendableBalancesRequestAminoMsg): _35.QuerySpendableBalancesRequest;
                toAminoMsg(message: _35.QuerySpendableBalancesRequest): _35.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _35.QuerySpendableBalancesRequestProtoMsg): _35.QuerySpendableBalancesRequest;
                toProto(message: _35.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _35.QuerySpendableBalancesRequest): _35.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _35.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_35.QuerySpendableBalancesResponse>): _35.QuerySpendableBalancesResponse;
                fromAmino(object: _35.QuerySpendableBalancesResponseAmino): _35.QuerySpendableBalancesResponse;
                toAmino(message: _35.QuerySpendableBalancesResponse): _35.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _35.QuerySpendableBalancesResponseAminoMsg): _35.QuerySpendableBalancesResponse;
                toAminoMsg(message: _35.QuerySpendableBalancesResponse): _35.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _35.QuerySpendableBalancesResponseProtoMsg): _35.QuerySpendableBalancesResponse;
                toProto(message: _35.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _35.QuerySpendableBalancesResponse): _35.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _35.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_35.QueryTotalSupplyRequest>): _35.QueryTotalSupplyRequest;
                fromAmino(object: _35.QueryTotalSupplyRequestAmino): _35.QueryTotalSupplyRequest;
                toAmino(message: _35.QueryTotalSupplyRequest): _35.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _35.QueryTotalSupplyRequestAminoMsg): _35.QueryTotalSupplyRequest;
                toAminoMsg(message: _35.QueryTotalSupplyRequest): _35.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _35.QueryTotalSupplyRequestProtoMsg): _35.QueryTotalSupplyRequest;
                toProto(message: _35.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _35.QueryTotalSupplyRequest): _35.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _35.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_35.QueryTotalSupplyResponse>): _35.QueryTotalSupplyResponse;
                fromAmino(object: _35.QueryTotalSupplyResponseAmino): _35.QueryTotalSupplyResponse;
                toAmino(message: _35.QueryTotalSupplyResponse): _35.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _35.QueryTotalSupplyResponseAminoMsg): _35.QueryTotalSupplyResponse;
                toAminoMsg(message: _35.QueryTotalSupplyResponse): _35.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _35.QueryTotalSupplyResponseProtoMsg): _35.QueryTotalSupplyResponse;
                toProto(message: _35.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _35.QueryTotalSupplyResponse): _35.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _35.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QuerySupplyOfRequest;
                fromPartial(object: Partial<_35.QuerySupplyOfRequest>): _35.QuerySupplyOfRequest;
                fromAmino(object: _35.QuerySupplyOfRequestAmino): _35.QuerySupplyOfRequest;
                toAmino(message: _35.QuerySupplyOfRequest): _35.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _35.QuerySupplyOfRequestAminoMsg): _35.QuerySupplyOfRequest;
                toAminoMsg(message: _35.QuerySupplyOfRequest): _35.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _35.QuerySupplyOfRequestProtoMsg): _35.QuerySupplyOfRequest;
                toProto(message: _35.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _35.QuerySupplyOfRequest): _35.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _35.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QuerySupplyOfResponse;
                fromPartial(object: Partial<_35.QuerySupplyOfResponse>): _35.QuerySupplyOfResponse;
                fromAmino(object: _35.QuerySupplyOfResponseAmino): _35.QuerySupplyOfResponse;
                toAmino(message: _35.QuerySupplyOfResponse): _35.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _35.QuerySupplyOfResponseAminoMsg): _35.QuerySupplyOfResponse;
                toAminoMsg(message: _35.QuerySupplyOfResponse): _35.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _35.QuerySupplyOfResponseProtoMsg): _35.QuerySupplyOfResponse;
                toProto(message: _35.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _35.QuerySupplyOfResponse): _35.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _35.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.QueryParamsRequest;
                fromPartial(_: Partial<_35.QueryParamsRequest>): _35.QueryParamsRequest;
                fromAmino(_: _35.QueryParamsRequestAmino): _35.QueryParamsRequest;
                toAmino(_: _35.QueryParamsRequest): _35.QueryParamsRequestAmino;
                fromAminoMsg(object: _35.QueryParamsRequestAminoMsg): _35.QueryParamsRequest;
                toAminoMsg(message: _35.QueryParamsRequest): _35.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryParamsRequestProtoMsg): _35.QueryParamsRequest;
                toProto(message: _35.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryParamsRequest): _35.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _35.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryParamsResponse;
                fromPartial(object: Partial<_35.QueryParamsResponse>): _35.QueryParamsResponse;
                fromAmino(object: _35.QueryParamsResponseAmino): _35.QueryParamsResponse;
                toAmino(message: _35.QueryParamsResponse): _35.QueryParamsResponseAmino;
                fromAminoMsg(object: _35.QueryParamsResponseAminoMsg): _35.QueryParamsResponse;
                toAminoMsg(message: _35.QueryParamsResponse): _35.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryParamsResponseProtoMsg): _35.QueryParamsResponse;
                toProto(message: _35.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryParamsResponse): _35.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _35.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_35.QueryDenomsMetadataRequest>): _35.QueryDenomsMetadataRequest;
                fromAmino(object: _35.QueryDenomsMetadataRequestAmino): _35.QueryDenomsMetadataRequest;
                toAmino(message: _35.QueryDenomsMetadataRequest): _35.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _35.QueryDenomsMetadataRequestAminoMsg): _35.QueryDenomsMetadataRequest;
                toAminoMsg(message: _35.QueryDenomsMetadataRequest): _35.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _35.QueryDenomsMetadataRequestProtoMsg): _35.QueryDenomsMetadataRequest;
                toProto(message: _35.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _35.QueryDenomsMetadataRequest): _35.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _35.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_35.QueryDenomsMetadataResponse>): _35.QueryDenomsMetadataResponse;
                fromAmino(object: _35.QueryDenomsMetadataResponseAmino): _35.QueryDenomsMetadataResponse;
                toAmino(message: _35.QueryDenomsMetadataResponse): _35.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _35.QueryDenomsMetadataResponseAminoMsg): _35.QueryDenomsMetadataResponse;
                toAminoMsg(message: _35.QueryDenomsMetadataResponse): _35.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _35.QueryDenomsMetadataResponseProtoMsg): _35.QueryDenomsMetadataResponse;
                toProto(message: _35.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _35.QueryDenomsMetadataResponse): _35.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _35.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_35.QueryDenomMetadataRequest>): _35.QueryDenomMetadataRequest;
                fromAmino(object: _35.QueryDenomMetadataRequestAmino): _35.QueryDenomMetadataRequest;
                toAmino(message: _35.QueryDenomMetadataRequest): _35.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _35.QueryDenomMetadataRequestAminoMsg): _35.QueryDenomMetadataRequest;
                toAminoMsg(message: _35.QueryDenomMetadataRequest): _35.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _35.QueryDenomMetadataRequestProtoMsg): _35.QueryDenomMetadataRequest;
                toProto(message: _35.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _35.QueryDenomMetadataRequest): _35.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _35.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_35.QueryDenomMetadataResponse>): _35.QueryDenomMetadataResponse;
                fromAmino(object: _35.QueryDenomMetadataResponseAmino): _35.QueryDenomMetadataResponse;
                toAmino(message: _35.QueryDenomMetadataResponse): _35.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _35.QueryDenomMetadataResponseAminoMsg): _35.QueryDenomMetadataResponse;
                toAminoMsg(message: _35.QueryDenomMetadataResponse): _35.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _35.QueryDenomMetadataResponseProtoMsg): _35.QueryDenomMetadataResponse;
                toProto(message: _35.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _35.QueryDenomMetadataResponse): _35.QueryDenomMetadataResponseProtoMsg;
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
            Balance: {
                typeUrl: string;
                encode(message: _34.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.Balance;
                fromPartial(object: Partial<_34.Balance>): _34.Balance;
                fromAmino(object: _34.BalanceAmino): _34.Balance;
                toAmino(message: _34.Balance): _34.BalanceAmino;
                fromAminoMsg(object: _34.BalanceAminoMsg): _34.Balance;
                toAminoMsg(message: _34.Balance): _34.BalanceAminoMsg;
                fromProtoMsg(message: _34.BalanceProtoMsg): _34.Balance;
                toProto(message: _34.Balance): Uint8Array;
                toProtoMsg(message: _34.Balance): _34.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _33.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Params;
                fromPartial(object: Partial<_33.Params>): _33.Params;
                fromAmino(object: _33.ParamsAmino): _33.Params;
                toAmino(message: _33.Params): _33.ParamsAmino;
                fromAminoMsg(object: _33.ParamsAminoMsg): _33.Params;
                toAminoMsg(message: _33.Params): _33.ParamsAminoMsg;
                fromProtoMsg(message: _33.ParamsProtoMsg): _33.Params;
                toProto(message: _33.Params): Uint8Array;
                toProtoMsg(message: _33.Params): _33.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _33.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.SendEnabled;
                fromPartial(object: Partial<_33.SendEnabled>): _33.SendEnabled;
                fromAmino(object: _33.SendEnabledAmino): _33.SendEnabled;
                toAmino(message: _33.SendEnabled): _33.SendEnabledAmino;
                fromAminoMsg(object: _33.SendEnabledAminoMsg): _33.SendEnabled;
                toAminoMsg(message: _33.SendEnabled): _33.SendEnabledAminoMsg;
                fromProtoMsg(message: _33.SendEnabledProtoMsg): _33.SendEnabled;
                toProto(message: _33.SendEnabled): Uint8Array;
                toProtoMsg(message: _33.SendEnabled): _33.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _33.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Input;
                fromPartial(object: Partial<_33.Input>): _33.Input;
                fromAmino(object: _33.InputAmino): _33.Input;
                toAmino(message: _33.Input): _33.InputAmino;
                fromAminoMsg(object: _33.InputAminoMsg): _33.Input;
                toAminoMsg(message: _33.Input): _33.InputAminoMsg;
                fromProtoMsg(message: _33.InputProtoMsg): _33.Input;
                toProto(message: _33.Input): Uint8Array;
                toProtoMsg(message: _33.Input): _33.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _33.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Output;
                fromPartial(object: Partial<_33.Output>): _33.Output;
                fromAmino(object: _33.OutputAmino): _33.Output;
                toAmino(message: _33.Output): _33.OutputAmino;
                fromAminoMsg(object: _33.OutputAminoMsg): _33.Output;
                toAminoMsg(message: _33.Output): _33.OutputAminoMsg;
                fromProtoMsg(message: _33.OutputProtoMsg): _33.Output;
                toProto(message: _33.Output): Uint8Array;
                toProtoMsg(message: _33.Output): _33.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _33.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Supply;
                fromPartial(object: Partial<_33.Supply>): _33.Supply;
                fromAmino(object: _33.SupplyAmino): _33.Supply;
                toAmino(message: _33.Supply): _33.SupplyAmino;
                fromAminoMsg(object: _33.SupplyAminoMsg): _33.Supply;
                toAminoMsg(message: _33.Supply): _33.SupplyAminoMsg;
                fromProtoMsg(message: _33.SupplyProtoMsg): _33.Supply;
                toProto(message: _33.Supply): Uint8Array;
                toProtoMsg(message: _33.Supply): _33.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _33.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.DenomUnit;
                fromPartial(object: Partial<_33.DenomUnit>): _33.DenomUnit;
                fromAmino(object: _33.DenomUnitAmino): _33.DenomUnit;
                toAmino(message: _33.DenomUnit): _33.DenomUnitAmino;
                fromAminoMsg(object: _33.DenomUnitAminoMsg): _33.DenomUnit;
                toAminoMsg(message: _33.DenomUnit): _33.DenomUnitAminoMsg;
                fromProtoMsg(message: _33.DenomUnitProtoMsg): _33.DenomUnit;
                toProto(message: _33.DenomUnit): Uint8Array;
                toProtoMsg(message: _33.DenomUnit): _33.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _33.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Metadata;
                fromPartial(object: Partial<_33.Metadata>): _33.Metadata;
                fromAmino(object: _33.MetadataAmino): _33.Metadata;
                toAmino(message: _33.Metadata): _33.MetadataAmino;
                fromAminoMsg(object: _33.MetadataAminoMsg): _33.Metadata;
                toAminoMsg(message: _33.Metadata): _33.MetadataAminoMsg;
                fromProtoMsg(message: _33.MetadataProtoMsg): _33.Metadata;
                toProto(message: _33.Metadata): Uint8Array;
                toProtoMsg(message: _33.Metadata): _33.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _32.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.SendAuthorization;
                fromPartial(object: Partial<_32.SendAuthorization>): _32.SendAuthorization;
                fromAmino(object: _32.SendAuthorizationAmino): _32.SendAuthorization;
                toAmino(message: _32.SendAuthorization): _32.SendAuthorizationAmino;
                fromAminoMsg(object: _32.SendAuthorizationAminoMsg): _32.SendAuthorization;
                toAminoMsg(message: _32.SendAuthorization): _32.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _32.SendAuthorizationProtoMsg): _32.SendAuthorization;
                toProto(message: _32.SendAuthorization): Uint8Array;
                toProtoMsg(message: _32.SendAuthorization): _32.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _37.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.TxResponse;
                    fromPartial(object: Partial<_37.TxResponse>): _37.TxResponse;
                    fromAmino(object: _37.TxResponseAmino): _37.TxResponse;
                    toAmino(message: _37.TxResponse): _37.TxResponseAmino;
                    fromAminoMsg(object: _37.TxResponseAminoMsg): _37.TxResponse;
                    toAminoMsg(message: _37.TxResponse): _37.TxResponseAminoMsg;
                    fromProtoMsg(message: _37.TxResponseProtoMsg): _37.TxResponse;
                    toProto(message: _37.TxResponse): Uint8Array;
                    toProtoMsg(message: _37.TxResponse): _37.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _37.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.ABCIMessageLog;
                    fromPartial(object: Partial<_37.ABCIMessageLog>): _37.ABCIMessageLog;
                    fromAmino(object: _37.ABCIMessageLogAmino): _37.ABCIMessageLog;
                    toAmino(message: _37.ABCIMessageLog): _37.ABCIMessageLogAmino;
                    fromAminoMsg(object: _37.ABCIMessageLogAminoMsg): _37.ABCIMessageLog;
                    toAminoMsg(message: _37.ABCIMessageLog): _37.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _37.ABCIMessageLogProtoMsg): _37.ABCIMessageLog;
                    toProto(message: _37.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _37.ABCIMessageLog): _37.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _37.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.StringEvent;
                    fromPartial(object: Partial<_37.StringEvent>): _37.StringEvent;
                    fromAmino(object: _37.StringEventAmino): _37.StringEvent;
                    toAmino(message: _37.StringEvent): _37.StringEventAmino;
                    fromAminoMsg(object: _37.StringEventAminoMsg): _37.StringEvent;
                    toAminoMsg(message: _37.StringEvent): _37.StringEventAminoMsg;
                    fromProtoMsg(message: _37.StringEventProtoMsg): _37.StringEvent;
                    toProto(message: _37.StringEvent): Uint8Array;
                    toProtoMsg(message: _37.StringEvent): _37.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _37.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.Attribute;
                    fromPartial(object: Partial<_37.Attribute>): _37.Attribute;
                    fromAmino(object: _37.AttributeAmino): _37.Attribute;
                    toAmino(message: _37.Attribute): _37.AttributeAmino;
                    fromAminoMsg(object: _37.AttributeAminoMsg): _37.Attribute;
                    toAminoMsg(message: _37.Attribute): _37.AttributeAminoMsg;
                    fromProtoMsg(message: _37.AttributeProtoMsg): _37.Attribute;
                    toProto(message: _37.Attribute): Uint8Array;
                    toProtoMsg(message: _37.Attribute): _37.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _37.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GasInfo;
                    fromPartial(object: Partial<_37.GasInfo>): _37.GasInfo;
                    fromAmino(object: _37.GasInfoAmino): _37.GasInfo;
                    toAmino(message: _37.GasInfo): _37.GasInfoAmino;
                    fromAminoMsg(object: _37.GasInfoAminoMsg): _37.GasInfo;
                    toAminoMsg(message: _37.GasInfo): _37.GasInfoAminoMsg;
                    fromProtoMsg(message: _37.GasInfoProtoMsg): _37.GasInfo;
                    toProto(message: _37.GasInfo): Uint8Array;
                    toProtoMsg(message: _37.GasInfo): _37.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _37.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.Result;
                    fromPartial(object: Partial<_37.Result>): _37.Result;
                    fromAmino(object: _37.ResultAmino): _37.Result;
                    toAmino(message: _37.Result): _37.ResultAmino;
                    fromAminoMsg(object: _37.ResultAminoMsg): _37.Result;
                    toAminoMsg(message: _37.Result): _37.ResultAminoMsg;
                    fromProtoMsg(message: _37.ResultProtoMsg): _37.Result;
                    toProto(message: _37.Result): Uint8Array;
                    toProtoMsg(message: _37.Result): _37.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _37.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.SimulationResponse;
                    fromPartial(object: Partial<_37.SimulationResponse>): _37.SimulationResponse;
                    fromAmino(object: _37.SimulationResponseAmino): _37.SimulationResponse;
                    toAmino(message: _37.SimulationResponse): _37.SimulationResponseAmino;
                    fromAminoMsg(object: _37.SimulationResponseAminoMsg): _37.SimulationResponse;
                    toAminoMsg(message: _37.SimulationResponse): _37.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _37.SimulationResponseProtoMsg): _37.SimulationResponse;
                    toProto(message: _37.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _37.SimulationResponse): _37.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _37.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.MsgData;
                    fromPartial(object: Partial<_37.MsgData>): _37.MsgData;
                    fromAmino(object: _37.MsgDataAmino): _37.MsgData;
                    toAmino(message: _37.MsgData): _37.MsgDataAmino;
                    fromAminoMsg(object: _37.MsgDataAminoMsg): _37.MsgData;
                    toAminoMsg(message: _37.MsgData): _37.MsgDataAminoMsg;
                    fromProtoMsg(message: _37.MsgDataProtoMsg): _37.MsgData;
                    toProto(message: _37.MsgData): Uint8Array;
                    toProtoMsg(message: _37.MsgData): _37.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _37.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.TxMsgData;
                    fromPartial(object: Partial<_37.TxMsgData>): _37.TxMsgData;
                    fromAmino(object: _37.TxMsgDataAmino): _37.TxMsgData;
                    toAmino(message: _37.TxMsgData): _37.TxMsgDataAmino;
                    fromAminoMsg(object: _37.TxMsgDataAminoMsg): _37.TxMsgData;
                    toAminoMsg(message: _37.TxMsgData): _37.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _37.TxMsgDataProtoMsg): _37.TxMsgData;
                    toProto(message: _37.TxMsgData): Uint8Array;
                    toProtoMsg(message: _37.TxMsgData): _37.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _37.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.SearchTxsResult;
                    fromPartial(object: Partial<_37.SearchTxsResult>): _37.SearchTxsResult;
                    fromAmino(object: _37.SearchTxsResultAmino): _37.SearchTxsResult;
                    toAmino(message: _37.SearchTxsResult): _37.SearchTxsResultAmino;
                    fromAminoMsg(object: _37.SearchTxsResultAminoMsg): _37.SearchTxsResult;
                    toAminoMsg(message: _37.SearchTxsResult): _37.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _37.SearchTxsResultProtoMsg): _37.SearchTxsResult;
                    toProto(message: _37.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _37.SearchTxsResult): _37.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _38.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.Pairs;
                    fromPartial(object: Partial<_38.Pairs>): _38.Pairs;
                    fromAmino(object: _38.PairsAmino): _38.Pairs;
                    toAmino(message: _38.Pairs): _38.PairsAmino;
                    fromAminoMsg(object: _38.PairsAminoMsg): _38.Pairs;
                    toAminoMsg(message: _38.Pairs): _38.PairsAminoMsg;
                    fromProtoMsg(message: _38.PairsProtoMsg): _38.Pairs;
                    toProto(message: _38.Pairs): Uint8Array;
                    toProtoMsg(message: _38.Pairs): _38.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _38.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.Pair;
                    fromPartial(object: Partial<_38.Pair>): _38.Pair;
                    fromAmino(object: _38.PairAmino): _38.Pair;
                    toAmino(message: _38.Pair): _38.PairAmino;
                    fromAminoMsg(object: _38.PairAminoMsg): _38.Pair;
                    toAminoMsg(message: _38.Pair): _38.PairAminoMsg;
                    fromProtoMsg(message: _38.PairProtoMsg): _38.Pair;
                    toProto(message: _38.Pair): Uint8Array;
                    toProtoMsg(message: _38.Pair): _38.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _188.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _39.ConfigRequest): Promise<_39.ConfigResponse>;
                };
                LCDQueryClient: typeof _173.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _39.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _39.ConfigRequest;
                    fromPartial(_: Partial<_39.ConfigRequest>): _39.ConfigRequest;
                    fromAmino(_: _39.ConfigRequestAmino): _39.ConfigRequest;
                    toAmino(_: _39.ConfigRequest): _39.ConfigRequestAmino;
                    fromAminoMsg(object: _39.ConfigRequestAminoMsg): _39.ConfigRequest;
                    toAminoMsg(message: _39.ConfigRequest): _39.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _39.ConfigRequestProtoMsg): _39.ConfigRequest;
                    toProto(message: _39.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _39.ConfigRequest): _39.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _39.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.ConfigResponse;
                    fromPartial(object: Partial<_39.ConfigResponse>): _39.ConfigResponse;
                    fromAmino(object: _39.ConfigResponseAmino): _39.ConfigResponse;
                    toAmino(message: _39.ConfigResponse): _39.ConfigResponseAmino;
                    fromAminoMsg(object: _39.ConfigResponseAminoMsg): _39.ConfigResponse;
                    toAminoMsg(message: _39.ConfigResponse): _39.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _39.ConfigResponseProtoMsg): _39.ConfigResponse;
                    toProto(message: _39.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _39.ConfigResponse): _39.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _40.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.PageRequest;
                    fromPartial(object: Partial<_40.PageRequest>): _40.PageRequest;
                    fromAmino(object: _40.PageRequestAmino): _40.PageRequest;
                    toAmino(message: _40.PageRequest): _40.PageRequestAmino;
                    fromAminoMsg(object: _40.PageRequestAminoMsg): _40.PageRequest;
                    toAminoMsg(message: _40.PageRequest): _40.PageRequestAminoMsg;
                    fromProtoMsg(message: _40.PageRequestProtoMsg): _40.PageRequest;
                    toProto(message: _40.PageRequest): Uint8Array;
                    toProtoMsg(message: _40.PageRequest): _40.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _40.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.PageResponse;
                    fromPartial(object: Partial<_40.PageResponse>): _40.PageResponse;
                    fromAmino(object: _40.PageResponseAmino): _40.PageResponse;
                    toAmino(message: _40.PageResponse): _40.PageResponseAmino;
                    fromAminoMsg(object: _40.PageResponseAminoMsg): _40.PageResponse;
                    toAminoMsg(message: _40.PageResponse): _40.PageResponseAminoMsg;
                    fromProtoMsg(message: _40.PageResponseProtoMsg): _40.PageResponse;
                    toProto(message: _40.PageResponse): Uint8Array;
                    toProtoMsg(message: _40.PageResponse): _40.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _41.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _41.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_41.ListAllInterfacesRequest>): _41.ListAllInterfacesRequest;
                    fromAmino(_: _41.ListAllInterfacesRequestAmino): _41.ListAllInterfacesRequest;
                    toAmino(_: _41.ListAllInterfacesRequest): _41.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _41.ListAllInterfacesRequestAminoMsg): _41.ListAllInterfacesRequest;
                    toAminoMsg(message: _41.ListAllInterfacesRequest): _41.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _41.ListAllInterfacesRequestProtoMsg): _41.ListAllInterfacesRequest;
                    toProto(message: _41.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _41.ListAllInterfacesRequest): _41.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _41.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_41.ListAllInterfacesResponse>): _41.ListAllInterfacesResponse;
                    fromAmino(object: _41.ListAllInterfacesResponseAmino): _41.ListAllInterfacesResponse;
                    toAmino(message: _41.ListAllInterfacesResponse): _41.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _41.ListAllInterfacesResponseAminoMsg): _41.ListAllInterfacesResponse;
                    toAminoMsg(message: _41.ListAllInterfacesResponse): _41.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _41.ListAllInterfacesResponseProtoMsg): _41.ListAllInterfacesResponse;
                    toProto(message: _41.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _41.ListAllInterfacesResponse): _41.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _41.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.ListImplementationsRequest;
                    fromPartial(object: Partial<_41.ListImplementationsRequest>): _41.ListImplementationsRequest;
                    fromAmino(object: _41.ListImplementationsRequestAmino): _41.ListImplementationsRequest;
                    toAmino(message: _41.ListImplementationsRequest): _41.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _41.ListImplementationsRequestAminoMsg): _41.ListImplementationsRequest;
                    toAminoMsg(message: _41.ListImplementationsRequest): _41.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _41.ListImplementationsRequestProtoMsg): _41.ListImplementationsRequest;
                    toProto(message: _41.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _41.ListImplementationsRequest): _41.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _41.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.ListImplementationsResponse;
                    fromPartial(object: Partial<_41.ListImplementationsResponse>): _41.ListImplementationsResponse;
                    fromAmino(object: _41.ListImplementationsResponseAmino): _41.ListImplementationsResponse;
                    toAmino(message: _41.ListImplementationsResponse): _41.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _41.ListImplementationsResponseAminoMsg): _41.ListImplementationsResponse;
                    toAminoMsg(message: _41.ListImplementationsResponse): _41.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _41.ListImplementationsResponseProtoMsg): _41.ListImplementationsResponse;
                    toProto(message: _41.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _41.ListImplementationsResponse): _41.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _42.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.AppDescriptor;
                    fromPartial(object: Partial<_42.AppDescriptor>): _42.AppDescriptor;
                    fromAmino(object: _42.AppDescriptorAmino): _42.AppDescriptor;
                    toAmino(message: _42.AppDescriptor): _42.AppDescriptorAmino;
                    fromAminoMsg(object: _42.AppDescriptorAminoMsg): _42.AppDescriptor;
                    toAminoMsg(message: _42.AppDescriptor): _42.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _42.AppDescriptorProtoMsg): _42.AppDescriptor;
                    toProto(message: _42.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _42.AppDescriptor): _42.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _42.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.TxDescriptor;
                    fromPartial(object: Partial<_42.TxDescriptor>): _42.TxDescriptor;
                    fromAmino(object: _42.TxDescriptorAmino): _42.TxDescriptor;
                    toAmino(message: _42.TxDescriptor): _42.TxDescriptorAmino;
                    fromAminoMsg(object: _42.TxDescriptorAminoMsg): _42.TxDescriptor;
                    toAminoMsg(message: _42.TxDescriptor): _42.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _42.TxDescriptorProtoMsg): _42.TxDescriptor;
                    toProto(message: _42.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _42.TxDescriptor): _42.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _42.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.AuthnDescriptor;
                    fromPartial(object: Partial<_42.AuthnDescriptor>): _42.AuthnDescriptor;
                    fromAmino(object: _42.AuthnDescriptorAmino): _42.AuthnDescriptor;
                    toAmino(message: _42.AuthnDescriptor): _42.AuthnDescriptorAmino;
                    fromAminoMsg(object: _42.AuthnDescriptorAminoMsg): _42.AuthnDescriptor;
                    toAminoMsg(message: _42.AuthnDescriptor): _42.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _42.AuthnDescriptorProtoMsg): _42.AuthnDescriptor;
                    toProto(message: _42.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _42.AuthnDescriptor): _42.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _42.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.SigningModeDescriptor;
                    fromPartial(object: Partial<_42.SigningModeDescriptor>): _42.SigningModeDescriptor;
                    fromAmino(object: _42.SigningModeDescriptorAmino): _42.SigningModeDescriptor;
                    toAmino(message: _42.SigningModeDescriptor): _42.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _42.SigningModeDescriptorAminoMsg): _42.SigningModeDescriptor;
                    toAminoMsg(message: _42.SigningModeDescriptor): _42.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _42.SigningModeDescriptorProtoMsg): _42.SigningModeDescriptor;
                    toProto(message: _42.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _42.SigningModeDescriptor): _42.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _42.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.ChainDescriptor;
                    fromPartial(object: Partial<_42.ChainDescriptor>): _42.ChainDescriptor;
                    fromAmino(object: _42.ChainDescriptorAmino): _42.ChainDescriptor;
                    toAmino(message: _42.ChainDescriptor): _42.ChainDescriptorAmino;
                    fromAminoMsg(object: _42.ChainDescriptorAminoMsg): _42.ChainDescriptor;
                    toAminoMsg(message: _42.ChainDescriptor): _42.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _42.ChainDescriptorProtoMsg): _42.ChainDescriptor;
                    toProto(message: _42.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _42.ChainDescriptor): _42.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _42.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.CodecDescriptor;
                    fromPartial(object: Partial<_42.CodecDescriptor>): _42.CodecDescriptor;
                    fromAmino(object: _42.CodecDescriptorAmino): _42.CodecDescriptor;
                    toAmino(message: _42.CodecDescriptor): _42.CodecDescriptorAmino;
                    fromAminoMsg(object: _42.CodecDescriptorAminoMsg): _42.CodecDescriptor;
                    toAminoMsg(message: _42.CodecDescriptor): _42.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _42.CodecDescriptorProtoMsg): _42.CodecDescriptor;
                    toProto(message: _42.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _42.CodecDescriptor): _42.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _42.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.InterfaceDescriptor;
                    fromPartial(object: Partial<_42.InterfaceDescriptor>): _42.InterfaceDescriptor;
                    fromAmino(object: _42.InterfaceDescriptorAmino): _42.InterfaceDescriptor;
                    toAmino(message: _42.InterfaceDescriptor): _42.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _42.InterfaceDescriptorAminoMsg): _42.InterfaceDescriptor;
                    toAminoMsg(message: _42.InterfaceDescriptor): _42.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _42.InterfaceDescriptorProtoMsg): _42.InterfaceDescriptor;
                    toProto(message: _42.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _42.InterfaceDescriptor): _42.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _42.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_42.InterfaceImplementerDescriptor>): _42.InterfaceImplementerDescriptor;
                    fromAmino(object: _42.InterfaceImplementerDescriptorAmino): _42.InterfaceImplementerDescriptor;
                    toAmino(message: _42.InterfaceImplementerDescriptor): _42.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _42.InterfaceImplementerDescriptorAminoMsg): _42.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _42.InterfaceImplementerDescriptor): _42.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _42.InterfaceImplementerDescriptorProtoMsg): _42.InterfaceImplementerDescriptor;
                    toProto(message: _42.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _42.InterfaceImplementerDescriptor): _42.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _42.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_42.InterfaceAcceptingMessageDescriptor>): _42.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _42.InterfaceAcceptingMessageDescriptorAmino): _42.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _42.InterfaceAcceptingMessageDescriptor): _42.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _42.InterfaceAcceptingMessageDescriptorAminoMsg): _42.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _42.InterfaceAcceptingMessageDescriptor): _42.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _42.InterfaceAcceptingMessageDescriptorProtoMsg): _42.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _42.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _42.InterfaceAcceptingMessageDescriptor): _42.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _42.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.ConfigurationDescriptor;
                    fromPartial(object: Partial<_42.ConfigurationDescriptor>): _42.ConfigurationDescriptor;
                    fromAmino(object: _42.ConfigurationDescriptorAmino): _42.ConfigurationDescriptor;
                    toAmino(message: _42.ConfigurationDescriptor): _42.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _42.ConfigurationDescriptorAminoMsg): _42.ConfigurationDescriptor;
                    toAminoMsg(message: _42.ConfigurationDescriptor): _42.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _42.ConfigurationDescriptorProtoMsg): _42.ConfigurationDescriptor;
                    toProto(message: _42.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _42.ConfigurationDescriptor): _42.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _42.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.MsgDescriptor;
                    fromPartial(object: Partial<_42.MsgDescriptor>): _42.MsgDescriptor;
                    fromAmino(object: _42.MsgDescriptorAmino): _42.MsgDescriptor;
                    toAmino(message: _42.MsgDescriptor): _42.MsgDescriptorAmino;
                    fromAminoMsg(object: _42.MsgDescriptorAminoMsg): _42.MsgDescriptor;
                    toAminoMsg(message: _42.MsgDescriptor): _42.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _42.MsgDescriptorProtoMsg): _42.MsgDescriptor;
                    toProto(message: _42.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _42.MsgDescriptor): _42.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _42.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_42.GetAuthnDescriptorRequest>): _42.GetAuthnDescriptorRequest;
                    fromAmino(_: _42.GetAuthnDescriptorRequestAmino): _42.GetAuthnDescriptorRequest;
                    toAmino(_: _42.GetAuthnDescriptorRequest): _42.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _42.GetAuthnDescriptorRequestAminoMsg): _42.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _42.GetAuthnDescriptorRequest): _42.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _42.GetAuthnDescriptorRequestProtoMsg): _42.GetAuthnDescriptorRequest;
                    toProto(message: _42.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _42.GetAuthnDescriptorRequest): _42.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _42.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_42.GetAuthnDescriptorResponse>): _42.GetAuthnDescriptorResponse;
                    fromAmino(object: _42.GetAuthnDescriptorResponseAmino): _42.GetAuthnDescriptorResponse;
                    toAmino(message: _42.GetAuthnDescriptorResponse): _42.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _42.GetAuthnDescriptorResponseAminoMsg): _42.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _42.GetAuthnDescriptorResponse): _42.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _42.GetAuthnDescriptorResponseProtoMsg): _42.GetAuthnDescriptorResponse;
                    toProto(message: _42.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _42.GetAuthnDescriptorResponse): _42.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _42.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_42.GetChainDescriptorRequest>): _42.GetChainDescriptorRequest;
                    fromAmino(_: _42.GetChainDescriptorRequestAmino): _42.GetChainDescriptorRequest;
                    toAmino(_: _42.GetChainDescriptorRequest): _42.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _42.GetChainDescriptorRequestAminoMsg): _42.GetChainDescriptorRequest;
                    toAminoMsg(message: _42.GetChainDescriptorRequest): _42.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _42.GetChainDescriptorRequestProtoMsg): _42.GetChainDescriptorRequest;
                    toProto(message: _42.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _42.GetChainDescriptorRequest): _42.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _42.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_42.GetChainDescriptorResponse>): _42.GetChainDescriptorResponse;
                    fromAmino(object: _42.GetChainDescriptorResponseAmino): _42.GetChainDescriptorResponse;
                    toAmino(message: _42.GetChainDescriptorResponse): _42.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _42.GetChainDescriptorResponseAminoMsg): _42.GetChainDescriptorResponse;
                    toAminoMsg(message: _42.GetChainDescriptorResponse): _42.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _42.GetChainDescriptorResponseProtoMsg): _42.GetChainDescriptorResponse;
                    toProto(message: _42.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _42.GetChainDescriptorResponse): _42.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _42.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_42.GetCodecDescriptorRequest>): _42.GetCodecDescriptorRequest;
                    fromAmino(_: _42.GetCodecDescriptorRequestAmino): _42.GetCodecDescriptorRequest;
                    toAmino(_: _42.GetCodecDescriptorRequest): _42.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _42.GetCodecDescriptorRequestAminoMsg): _42.GetCodecDescriptorRequest;
                    toAminoMsg(message: _42.GetCodecDescriptorRequest): _42.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _42.GetCodecDescriptorRequestProtoMsg): _42.GetCodecDescriptorRequest;
                    toProto(message: _42.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _42.GetCodecDescriptorRequest): _42.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _42.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_42.GetCodecDescriptorResponse>): _42.GetCodecDescriptorResponse;
                    fromAmino(object: _42.GetCodecDescriptorResponseAmino): _42.GetCodecDescriptorResponse;
                    toAmino(message: _42.GetCodecDescriptorResponse): _42.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _42.GetCodecDescriptorResponseAminoMsg): _42.GetCodecDescriptorResponse;
                    toAminoMsg(message: _42.GetCodecDescriptorResponse): _42.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _42.GetCodecDescriptorResponseProtoMsg): _42.GetCodecDescriptorResponse;
                    toProto(message: _42.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _42.GetCodecDescriptorResponse): _42.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _42.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_42.GetConfigurationDescriptorRequest>): _42.GetConfigurationDescriptorRequest;
                    fromAmino(_: _42.GetConfigurationDescriptorRequestAmino): _42.GetConfigurationDescriptorRequest;
                    toAmino(_: _42.GetConfigurationDescriptorRequest): _42.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _42.GetConfigurationDescriptorRequestAminoMsg): _42.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _42.GetConfigurationDescriptorRequest): _42.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _42.GetConfigurationDescriptorRequestProtoMsg): _42.GetConfigurationDescriptorRequest;
                    toProto(message: _42.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _42.GetConfigurationDescriptorRequest): _42.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _42.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_42.GetConfigurationDescriptorResponse>): _42.GetConfigurationDescriptorResponse;
                    fromAmino(object: _42.GetConfigurationDescriptorResponseAmino): _42.GetConfigurationDescriptorResponse;
                    toAmino(message: _42.GetConfigurationDescriptorResponse): _42.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _42.GetConfigurationDescriptorResponseAminoMsg): _42.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _42.GetConfigurationDescriptorResponse): _42.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _42.GetConfigurationDescriptorResponseProtoMsg): _42.GetConfigurationDescriptorResponse;
                    toProto(message: _42.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _42.GetConfigurationDescriptorResponse): _42.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _42.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_42.GetQueryServicesDescriptorRequest>): _42.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _42.GetQueryServicesDescriptorRequestAmino): _42.GetQueryServicesDescriptorRequest;
                    toAmino(_: _42.GetQueryServicesDescriptorRequest): _42.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _42.GetQueryServicesDescriptorRequestAminoMsg): _42.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _42.GetQueryServicesDescriptorRequest): _42.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _42.GetQueryServicesDescriptorRequestProtoMsg): _42.GetQueryServicesDescriptorRequest;
                    toProto(message: _42.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _42.GetQueryServicesDescriptorRequest): _42.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _42.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_42.GetQueryServicesDescriptorResponse>): _42.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _42.GetQueryServicesDescriptorResponseAmino): _42.GetQueryServicesDescriptorResponse;
                    toAmino(message: _42.GetQueryServicesDescriptorResponse): _42.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _42.GetQueryServicesDescriptorResponseAminoMsg): _42.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _42.GetQueryServicesDescriptorResponse): _42.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _42.GetQueryServicesDescriptorResponseProtoMsg): _42.GetQueryServicesDescriptorResponse;
                    toProto(message: _42.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _42.GetQueryServicesDescriptorResponse): _42.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _42.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_42.GetTxDescriptorRequest>): _42.GetTxDescriptorRequest;
                    fromAmino(_: _42.GetTxDescriptorRequestAmino): _42.GetTxDescriptorRequest;
                    toAmino(_: _42.GetTxDescriptorRequest): _42.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _42.GetTxDescriptorRequestAminoMsg): _42.GetTxDescriptorRequest;
                    toAminoMsg(message: _42.GetTxDescriptorRequest): _42.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _42.GetTxDescriptorRequestProtoMsg): _42.GetTxDescriptorRequest;
                    toProto(message: _42.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _42.GetTxDescriptorRequest): _42.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _42.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_42.GetTxDescriptorResponse>): _42.GetTxDescriptorResponse;
                    fromAmino(object: _42.GetTxDescriptorResponseAmino): _42.GetTxDescriptorResponse;
                    toAmino(message: _42.GetTxDescriptorResponse): _42.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _42.GetTxDescriptorResponseAminoMsg): _42.GetTxDescriptorResponse;
                    toAminoMsg(message: _42.GetTxDescriptorResponse): _42.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _42.GetTxDescriptorResponseProtoMsg): _42.GetTxDescriptorResponse;
                    toProto(message: _42.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _42.GetTxDescriptorResponse): _42.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _42.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.QueryServicesDescriptor;
                    fromPartial(object: Partial<_42.QueryServicesDescriptor>): _42.QueryServicesDescriptor;
                    fromAmino(object: _42.QueryServicesDescriptorAmino): _42.QueryServicesDescriptor;
                    toAmino(message: _42.QueryServicesDescriptor): _42.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _42.QueryServicesDescriptorAminoMsg): _42.QueryServicesDescriptor;
                    toAminoMsg(message: _42.QueryServicesDescriptor): _42.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _42.QueryServicesDescriptorProtoMsg): _42.QueryServicesDescriptor;
                    toProto(message: _42.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _42.QueryServicesDescriptor): _42.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _42.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.QueryServiceDescriptor;
                    fromPartial(object: Partial<_42.QueryServiceDescriptor>): _42.QueryServiceDescriptor;
                    fromAmino(object: _42.QueryServiceDescriptorAmino): _42.QueryServiceDescriptor;
                    toAmino(message: _42.QueryServiceDescriptor): _42.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _42.QueryServiceDescriptorAminoMsg): _42.QueryServiceDescriptor;
                    toAminoMsg(message: _42.QueryServiceDescriptor): _42.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _42.QueryServiceDescriptorProtoMsg): _42.QueryServiceDescriptor;
                    toProto(message: _42.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _42.QueryServiceDescriptor): _42.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _42.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.QueryMethodDescriptor;
                    fromPartial(object: Partial<_42.QueryMethodDescriptor>): _42.QueryMethodDescriptor;
                    fromAmino(object: _42.QueryMethodDescriptorAmino): _42.QueryMethodDescriptor;
                    toAmino(message: _42.QueryMethodDescriptor): _42.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _42.QueryMethodDescriptorAminoMsg): _42.QueryMethodDescriptor;
                    toAminoMsg(message: _42.QueryMethodDescriptor): _42.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _42.QueryMethodDescriptorProtoMsg): _42.QueryMethodDescriptor;
                    toProto(message: _42.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _42.QueryMethodDescriptor): _42.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _43.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.Snapshot;
                    fromPartial(object: Partial<_43.Snapshot>): _43.Snapshot;
                    fromAmino(object: _43.SnapshotAmino): _43.Snapshot;
                    toAmino(message: _43.Snapshot): _43.SnapshotAmino;
                    fromAminoMsg(object: _43.SnapshotAminoMsg): _43.Snapshot;
                    toAminoMsg(message: _43.Snapshot): _43.SnapshotAminoMsg;
                    fromProtoMsg(message: _43.SnapshotProtoMsg): _43.Snapshot;
                    toProto(message: _43.Snapshot): Uint8Array;
                    toProtoMsg(message: _43.Snapshot): _43.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _43.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.Metadata;
                    fromPartial(object: Partial<_43.Metadata>): _43.Metadata;
                    fromAmino(object: _43.MetadataAmino): _43.Metadata;
                    toAmino(message: _43.Metadata): _43.MetadataAmino;
                    fromAminoMsg(object: _43.MetadataAminoMsg): _43.Metadata;
                    toAminoMsg(message: _43.Metadata): _43.MetadataAminoMsg;
                    fromProtoMsg(message: _43.MetadataProtoMsg): _43.Metadata;
                    toProto(message: _43.Metadata): Uint8Array;
                    toProtoMsg(message: _43.Metadata): _43.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _43.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.SnapshotItem;
                    fromPartial(object: Partial<_43.SnapshotItem>): _43.SnapshotItem;
                    fromAmino(object: _43.SnapshotItemAmino): _43.SnapshotItem;
                    toAmino(message: _43.SnapshotItem): _43.SnapshotItemAmino;
                    fromAminoMsg(object: _43.SnapshotItemAminoMsg): _43.SnapshotItem;
                    toAminoMsg(message: _43.SnapshotItem): _43.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _43.SnapshotItemProtoMsg): _43.SnapshotItem;
                    toProto(message: _43.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _43.SnapshotItem): _43.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _43.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.SnapshotStoreItem;
                    fromPartial(object: Partial<_43.SnapshotStoreItem>): _43.SnapshotStoreItem;
                    fromAmino(object: _43.SnapshotStoreItemAmino): _43.SnapshotStoreItem;
                    toAmino(message: _43.SnapshotStoreItem): _43.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _43.SnapshotStoreItemAminoMsg): _43.SnapshotStoreItem;
                    toAminoMsg(message: _43.SnapshotStoreItem): _43.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _43.SnapshotStoreItemProtoMsg): _43.SnapshotStoreItem;
                    toProto(message: _43.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _43.SnapshotStoreItem): _43.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _43.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.SnapshotIAVLItem;
                    fromPartial(object: Partial<_43.SnapshotIAVLItem>): _43.SnapshotIAVLItem;
                    fromAmino(object: _43.SnapshotIAVLItemAmino): _43.SnapshotIAVLItem;
                    toAmino(message: _43.SnapshotIAVLItem): _43.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _43.SnapshotIAVLItemAminoMsg): _43.SnapshotIAVLItem;
                    toAminoMsg(message: _43.SnapshotIAVLItem): _43.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _43.SnapshotIAVLItemProtoMsg): _43.SnapshotIAVLItem;
                    toProto(message: _43.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _43.SnapshotIAVLItem): _43.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _43.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_43.SnapshotExtensionMeta>): _43.SnapshotExtensionMeta;
                    fromAmino(object: _43.SnapshotExtensionMetaAmino): _43.SnapshotExtensionMeta;
                    toAmino(message: _43.SnapshotExtensionMeta): _43.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _43.SnapshotExtensionMetaAminoMsg): _43.SnapshotExtensionMeta;
                    toAminoMsg(message: _43.SnapshotExtensionMeta): _43.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _43.SnapshotExtensionMetaProtoMsg): _43.SnapshotExtensionMeta;
                    toProto(message: _43.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _43.SnapshotExtensionMeta): _43.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _43.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_43.SnapshotExtensionPayload>): _43.SnapshotExtensionPayload;
                    fromAmino(object: _43.SnapshotExtensionPayloadAmino): _43.SnapshotExtensionPayload;
                    toAmino(message: _43.SnapshotExtensionPayload): _43.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _43.SnapshotExtensionPayloadAminoMsg): _43.SnapshotExtensionPayload;
                    toAminoMsg(message: _43.SnapshotExtensionPayload): _43.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _43.SnapshotExtensionPayloadProtoMsg): _43.SnapshotExtensionPayload;
                    toProto(message: _43.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _43.SnapshotExtensionPayload): _43.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _45.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.StoreKVPair;
                    fromPartial(object: Partial<_45.StoreKVPair>): _45.StoreKVPair;
                    fromAmino(object: _45.StoreKVPairAmino): _45.StoreKVPair;
                    toAmino(message: _45.StoreKVPair): _45.StoreKVPairAmino;
                    fromAminoMsg(object: _45.StoreKVPairAminoMsg): _45.StoreKVPair;
                    toAminoMsg(message: _45.StoreKVPair): _45.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _45.StoreKVPairProtoMsg): _45.StoreKVPair;
                    toProto(message: _45.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _45.StoreKVPair): _45.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _45.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.BlockMetadata;
                    fromPartial(object: Partial<_45.BlockMetadata>): _45.BlockMetadata;
                    fromAmino(object: _45.BlockMetadataAmino): _45.BlockMetadata;
                    toAmino(message: _45.BlockMetadata): _45.BlockMetadataAmino;
                    fromAminoMsg(object: _45.BlockMetadataAminoMsg): _45.BlockMetadata;
                    toAminoMsg(message: _45.BlockMetadata): _45.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _45.BlockMetadataProtoMsg): _45.BlockMetadata;
                    toProto(message: _45.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _45.BlockMetadata): _45.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _45.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_45.BlockMetadata_DeliverTx>): _45.BlockMetadata_DeliverTx;
                    fromAmino(object: _45.BlockMetadata_DeliverTxAmino): _45.BlockMetadata_DeliverTx;
                    toAmino(message: _45.BlockMetadata_DeliverTx): _45.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _45.BlockMetadata_DeliverTxAminoMsg): _45.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _45.BlockMetadata_DeliverTx): _45.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _45.BlockMetadata_DeliverTxProtoMsg): _45.BlockMetadata_DeliverTx;
                    toProto(message: _45.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _45.BlockMetadata_DeliverTx): _45.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _44.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.CommitInfo;
                    fromPartial(object: Partial<_44.CommitInfo>): _44.CommitInfo;
                    fromAmino(object: _44.CommitInfoAmino): _44.CommitInfo;
                    toAmino(message: _44.CommitInfo): _44.CommitInfoAmino;
                    fromAminoMsg(object: _44.CommitInfoAminoMsg): _44.CommitInfo;
                    toAminoMsg(message: _44.CommitInfo): _44.CommitInfoAminoMsg;
                    fromProtoMsg(message: _44.CommitInfoProtoMsg): _44.CommitInfo;
                    toProto(message: _44.CommitInfo): Uint8Array;
                    toProtoMsg(message: _44.CommitInfo): _44.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _44.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.StoreInfo;
                    fromPartial(object: Partial<_44.StoreInfo>): _44.StoreInfo;
                    fromAmino(object: _44.StoreInfoAmino): _44.StoreInfo;
                    toAmino(message: _44.StoreInfo): _44.StoreInfoAmino;
                    fromAminoMsg(object: _44.StoreInfoAminoMsg): _44.StoreInfo;
                    toAminoMsg(message: _44.StoreInfo): _44.StoreInfoAminoMsg;
                    fromProtoMsg(message: _44.StoreInfoProtoMsg): _44.StoreInfo;
                    toProto(message: _44.StoreInfo): Uint8Array;
                    toProtoMsg(message: _44.StoreInfo): _44.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _44.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.CommitID;
                    fromPartial(object: Partial<_44.CommitID>): _44.CommitID;
                    fromAmino(object: _44.CommitIDAmino): _44.CommitID;
                    toAmino(message: _44.CommitID): _44.CommitIDAmino;
                    fromAminoMsg(object: _44.CommitIDAminoMsg): _44.CommitID;
                    toAminoMsg(message: _44.CommitID): _44.CommitIDAminoMsg;
                    fromProtoMsg(message: _44.CommitIDProtoMsg): _44.CommitID;
                    toProto(message: _44.CommitID): Uint8Array;
                    toProtoMsg(message: _44.CommitID): _44.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _189.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _46.GetNodeInfoRequest): Promise<_46.GetNodeInfoResponse>;
                    getSyncing(request?: _46.GetSyncingRequest): Promise<_46.GetSyncingResponse>;
                    getLatestBlock(request?: _46.GetLatestBlockRequest): Promise<_46.GetLatestBlockResponse>;
                    getBlockByHeight(request: _46.GetBlockByHeightRequest): Promise<_46.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _46.GetLatestValidatorSetRequest): Promise<_46.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _46.GetValidatorSetByHeightRequest): Promise<_46.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _174.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _46.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_46.GetValidatorSetByHeightRequest>): _46.GetValidatorSetByHeightRequest;
                    fromAmino(object: _46.GetValidatorSetByHeightRequestAmino): _46.GetValidatorSetByHeightRequest;
                    toAmino(message: _46.GetValidatorSetByHeightRequest): _46.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _46.GetValidatorSetByHeightRequestAminoMsg): _46.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _46.GetValidatorSetByHeightRequest): _46.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _46.GetValidatorSetByHeightRequestProtoMsg): _46.GetValidatorSetByHeightRequest;
                    toProto(message: _46.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _46.GetValidatorSetByHeightRequest): _46.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _46.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_46.GetValidatorSetByHeightResponse>): _46.GetValidatorSetByHeightResponse;
                    fromAmino(object: _46.GetValidatorSetByHeightResponseAmino): _46.GetValidatorSetByHeightResponse;
                    toAmino(message: _46.GetValidatorSetByHeightResponse): _46.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _46.GetValidatorSetByHeightResponseAminoMsg): _46.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _46.GetValidatorSetByHeightResponse): _46.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _46.GetValidatorSetByHeightResponseProtoMsg): _46.GetValidatorSetByHeightResponse;
                    toProto(message: _46.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _46.GetValidatorSetByHeightResponse): _46.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _46.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_46.GetLatestValidatorSetRequest>): _46.GetLatestValidatorSetRequest;
                    fromAmino(object: _46.GetLatestValidatorSetRequestAmino): _46.GetLatestValidatorSetRequest;
                    toAmino(message: _46.GetLatestValidatorSetRequest): _46.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _46.GetLatestValidatorSetRequestAminoMsg): _46.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _46.GetLatestValidatorSetRequest): _46.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _46.GetLatestValidatorSetRequestProtoMsg): _46.GetLatestValidatorSetRequest;
                    toProto(message: _46.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _46.GetLatestValidatorSetRequest): _46.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _46.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_46.GetLatestValidatorSetResponse>): _46.GetLatestValidatorSetResponse;
                    fromAmino(object: _46.GetLatestValidatorSetResponseAmino): _46.GetLatestValidatorSetResponse;
                    toAmino(message: _46.GetLatestValidatorSetResponse): _46.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _46.GetLatestValidatorSetResponseAminoMsg): _46.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _46.GetLatestValidatorSetResponse): _46.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _46.GetLatestValidatorSetResponseProtoMsg): _46.GetLatestValidatorSetResponse;
                    toProto(message: _46.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _46.GetLatestValidatorSetResponse): _46.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _46.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.Validator;
                    fromPartial(object: Partial<_46.Validator>): _46.Validator;
                    fromAmino(object: _46.ValidatorAmino): _46.Validator;
                    toAmino(message: _46.Validator): _46.ValidatorAmino;
                    fromAminoMsg(object: _46.ValidatorAminoMsg): _46.Validator;
                    toAminoMsg(message: _46.Validator): _46.ValidatorAminoMsg;
                    fromProtoMsg(message: _46.ValidatorProtoMsg): _46.Validator;
                    toProto(message: _46.Validator): Uint8Array;
                    toProtoMsg(message: _46.Validator): _46.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _46.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_46.GetBlockByHeightRequest>): _46.GetBlockByHeightRequest;
                    fromAmino(object: _46.GetBlockByHeightRequestAmino): _46.GetBlockByHeightRequest;
                    toAmino(message: _46.GetBlockByHeightRequest): _46.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _46.GetBlockByHeightRequestAminoMsg): _46.GetBlockByHeightRequest;
                    toAminoMsg(message: _46.GetBlockByHeightRequest): _46.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _46.GetBlockByHeightRequestProtoMsg): _46.GetBlockByHeightRequest;
                    toProto(message: _46.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _46.GetBlockByHeightRequest): _46.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _46.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_46.GetBlockByHeightResponse>): _46.GetBlockByHeightResponse;
                    fromAmino(object: _46.GetBlockByHeightResponseAmino): _46.GetBlockByHeightResponse;
                    toAmino(message: _46.GetBlockByHeightResponse): _46.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _46.GetBlockByHeightResponseAminoMsg): _46.GetBlockByHeightResponse;
                    toAminoMsg(message: _46.GetBlockByHeightResponse): _46.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _46.GetBlockByHeightResponseProtoMsg): _46.GetBlockByHeightResponse;
                    toProto(message: _46.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _46.GetBlockByHeightResponse): _46.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _46.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _46.GetLatestBlockRequest;
                    fromPartial(_: Partial<_46.GetLatestBlockRequest>): _46.GetLatestBlockRequest;
                    fromAmino(_: _46.GetLatestBlockRequestAmino): _46.GetLatestBlockRequest;
                    toAmino(_: _46.GetLatestBlockRequest): _46.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _46.GetLatestBlockRequestAminoMsg): _46.GetLatestBlockRequest;
                    toAminoMsg(message: _46.GetLatestBlockRequest): _46.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _46.GetLatestBlockRequestProtoMsg): _46.GetLatestBlockRequest;
                    toProto(message: _46.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _46.GetLatestBlockRequest): _46.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _46.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetLatestBlockResponse;
                    fromPartial(object: Partial<_46.GetLatestBlockResponse>): _46.GetLatestBlockResponse;
                    fromAmino(object: _46.GetLatestBlockResponseAmino): _46.GetLatestBlockResponse;
                    toAmino(message: _46.GetLatestBlockResponse): _46.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _46.GetLatestBlockResponseAminoMsg): _46.GetLatestBlockResponse;
                    toAminoMsg(message: _46.GetLatestBlockResponse): _46.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _46.GetLatestBlockResponseProtoMsg): _46.GetLatestBlockResponse;
                    toProto(message: _46.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _46.GetLatestBlockResponse): _46.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _46.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _46.GetSyncingRequest;
                    fromPartial(_: Partial<_46.GetSyncingRequest>): _46.GetSyncingRequest;
                    fromAmino(_: _46.GetSyncingRequestAmino): _46.GetSyncingRequest;
                    toAmino(_: _46.GetSyncingRequest): _46.GetSyncingRequestAmino;
                    fromAminoMsg(object: _46.GetSyncingRequestAminoMsg): _46.GetSyncingRequest;
                    toAminoMsg(message: _46.GetSyncingRequest): _46.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _46.GetSyncingRequestProtoMsg): _46.GetSyncingRequest;
                    toProto(message: _46.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _46.GetSyncingRequest): _46.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _46.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetSyncingResponse;
                    fromPartial(object: Partial<_46.GetSyncingResponse>): _46.GetSyncingResponse;
                    fromAmino(object: _46.GetSyncingResponseAmino): _46.GetSyncingResponse;
                    toAmino(message: _46.GetSyncingResponse): _46.GetSyncingResponseAmino;
                    fromAminoMsg(object: _46.GetSyncingResponseAminoMsg): _46.GetSyncingResponse;
                    toAminoMsg(message: _46.GetSyncingResponse): _46.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _46.GetSyncingResponseProtoMsg): _46.GetSyncingResponse;
                    toProto(message: _46.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _46.GetSyncingResponse): _46.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _46.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _46.GetNodeInfoRequest;
                    fromPartial(_: Partial<_46.GetNodeInfoRequest>): _46.GetNodeInfoRequest;
                    fromAmino(_: _46.GetNodeInfoRequestAmino): _46.GetNodeInfoRequest;
                    toAmino(_: _46.GetNodeInfoRequest): _46.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _46.GetNodeInfoRequestAminoMsg): _46.GetNodeInfoRequest;
                    toAminoMsg(message: _46.GetNodeInfoRequest): _46.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _46.GetNodeInfoRequestProtoMsg): _46.GetNodeInfoRequest;
                    toProto(message: _46.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _46.GetNodeInfoRequest): _46.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _46.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetNodeInfoResponse;
                    fromPartial(object: Partial<_46.GetNodeInfoResponse>): _46.GetNodeInfoResponse;
                    fromAmino(object: _46.GetNodeInfoResponseAmino): _46.GetNodeInfoResponse;
                    toAmino(message: _46.GetNodeInfoResponse): _46.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _46.GetNodeInfoResponseAminoMsg): _46.GetNodeInfoResponse;
                    toAminoMsg(message: _46.GetNodeInfoResponse): _46.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _46.GetNodeInfoResponseProtoMsg): _46.GetNodeInfoResponse;
                    toProto(message: _46.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _46.GetNodeInfoResponse): _46.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _46.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.VersionInfo;
                    fromPartial(object: Partial<_46.VersionInfo>): _46.VersionInfo;
                    fromAmino(object: _46.VersionInfoAmino): _46.VersionInfo;
                    toAmino(message: _46.VersionInfo): _46.VersionInfoAmino;
                    fromAminoMsg(object: _46.VersionInfoAminoMsg): _46.VersionInfo;
                    toAminoMsg(message: _46.VersionInfo): _46.VersionInfoAminoMsg;
                    fromProtoMsg(message: _46.VersionInfoProtoMsg): _46.VersionInfo;
                    toProto(message: _46.VersionInfo): Uint8Array;
                    toProtoMsg(message: _46.VersionInfo): _46.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _46.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.Module;
                    fromPartial(object: Partial<_46.Module>): _46.Module;
                    fromAmino(object: _46.ModuleAmino): _46.Module;
                    toAmino(message: _46.Module): _46.ModuleAmino;
                    fromAminoMsg(object: _46.ModuleAminoMsg): _46.Module;
                    toAminoMsg(message: _46.Module): _46.ModuleAminoMsg;
                    fromProtoMsg(message: _46.ModuleProtoMsg): _46.Module;
                    toProto(message: _46.Module): Uint8Array;
                    toProtoMsg(message: _46.Module): _46.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _47.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.Coin;
                fromPartial(object: Partial<_47.Coin>): _47.Coin;
                fromAmino(object: _47.CoinAmino): _47.Coin;
                toAmino(message: _47.Coin): _47.CoinAmino;
                fromAminoMsg(object: _47.CoinAminoMsg): _47.Coin;
                toAminoMsg(message: _47.Coin): _47.CoinAminoMsg;
                fromProtoMsg(message: _47.CoinProtoMsg): _47.Coin;
                toProto(message: _47.Coin): Uint8Array;
                toProtoMsg(message: _47.Coin): _47.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _47.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.DecCoin;
                fromPartial(object: Partial<_47.DecCoin>): _47.DecCoin;
                fromAmino(object: _47.DecCoinAmino): _47.DecCoin;
                toAmino(message: _47.DecCoin): _47.DecCoinAmino;
                fromAminoMsg(object: _47.DecCoinAminoMsg): _47.DecCoin;
                toAminoMsg(message: _47.DecCoin): _47.DecCoinAminoMsg;
                fromProtoMsg(message: _47.DecCoinProtoMsg): _47.DecCoin;
                toProto(message: _47.DecCoin): Uint8Array;
                toProtoMsg(message: _47.DecCoin): _47.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _47.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.IntProto;
                fromPartial(object: Partial<_47.IntProto>): _47.IntProto;
                fromAmino(object: _47.IntProtoAmino): _47.IntProto;
                toAmino(message: _47.IntProto): _47.IntProtoAmino;
                fromAminoMsg(object: _47.IntProtoAminoMsg): _47.IntProto;
                toAminoMsg(message: _47.IntProto): _47.IntProtoAminoMsg;
                fromProtoMsg(message: _47.IntProtoProtoMsg): _47.IntProto;
                toProto(message: _47.IntProto): Uint8Array;
                toProtoMsg(message: _47.IntProto): _47.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _47.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.DecProto;
                fromPartial(object: Partial<_47.DecProto>): _47.DecProto;
                fromAmino(object: _47.DecProtoAmino): _47.DecProto;
                toAmino(message: _47.DecProto): _47.DecProtoAmino;
                fromAminoMsg(object: _47.DecProtoAminoMsg): _47.DecProto;
                toAminoMsg(message: _47.DecProto): _47.DecProtoAminoMsg;
                fromProtoMsg(message: _47.DecProtoProtoMsg): _47.DecProto;
                toProto(message: _47.DecProto): Uint8Array;
                toProtoMsg(message: _47.DecProto): _47.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _49.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.GenesisOwners;
                fromPartial(object: Partial<_49.GenesisOwners>): _49.GenesisOwners;
                fromAmino(object: _49.GenesisOwnersAmino): _49.GenesisOwners;
                toAmino(message: _49.GenesisOwners): _49.GenesisOwnersAmino;
                fromAminoMsg(object: _49.GenesisOwnersAminoMsg): _49.GenesisOwners;
                toAminoMsg(message: _49.GenesisOwners): _49.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _49.GenesisOwnersProtoMsg): _49.GenesisOwners;
                toProto(message: _49.GenesisOwners): Uint8Array;
                toProtoMsg(message: _49.GenesisOwners): _49.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _49.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.GenesisState;
                fromPartial(object: Partial<_49.GenesisState>): _49.GenesisState;
                fromAmino(object: _49.GenesisStateAmino): _49.GenesisState;
                toAmino(message: _49.GenesisState): _49.GenesisStateAmino;
                fromAminoMsg(object: _49.GenesisStateAminoMsg): _49.GenesisState;
                toAminoMsg(message: _49.GenesisState): _49.GenesisStateAminoMsg;
                fromProtoMsg(message: _49.GenesisStateProtoMsg): _49.GenesisState;
                toProto(message: _49.GenesisState): Uint8Array;
                toProtoMsg(message: _49.GenesisState): _49.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _48.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.Capability;
                fromPartial(object: Partial<_48.Capability>): _48.Capability;
                fromAmino(object: _48.CapabilityAmino): _48.Capability;
                toAmino(message: _48.Capability): _48.CapabilityAmino;
                fromAminoMsg(object: _48.CapabilityAminoMsg): _48.Capability;
                toAminoMsg(message: _48.Capability): _48.CapabilityAminoMsg;
                fromProtoMsg(message: _48.CapabilityProtoMsg): _48.Capability;
                toProto(message: _48.Capability): Uint8Array;
                toProtoMsg(message: _48.Capability): _48.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _48.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.Owner;
                fromPartial(object: Partial<_48.Owner>): _48.Owner;
                fromAmino(object: _48.OwnerAmino): _48.Owner;
                toAmino(message: _48.Owner): _48.OwnerAmino;
                fromAminoMsg(object: _48.OwnerAminoMsg): _48.Owner;
                toAminoMsg(message: _48.Owner): _48.OwnerAminoMsg;
                fromProtoMsg(message: _48.OwnerProtoMsg): _48.Owner;
                toProto(message: _48.Owner): Uint8Array;
                toProtoMsg(message: _48.Owner): _48.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _48.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.CapabilityOwners;
                fromPartial(object: Partial<_48.CapabilityOwners>): _48.CapabilityOwners;
                fromAmino(object: _48.CapabilityOwnersAmino): _48.CapabilityOwners;
                toAmino(message: _48.CapabilityOwners): _48.CapabilityOwnersAmino;
                fromAminoMsg(object: _48.CapabilityOwnersAminoMsg): _48.CapabilityOwners;
                toAminoMsg(message: _48.CapabilityOwners): _48.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _48.CapabilityOwnersProtoMsg): _48.CapabilityOwners;
                toProto(message: _48.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _48.CapabilityOwners): _48.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _202.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _51.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _51.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _51.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _51.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _51.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _51.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _51.MsgVerifyInvariant) => _51.MsgVerifyInvariantAmino;
                    fromAmino: (object: _51.MsgVerifyInvariantAmino) => _51.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _51.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.MsgVerifyInvariant;
                fromPartial(object: Partial<_51.MsgVerifyInvariant>): _51.MsgVerifyInvariant;
                fromAmino(object: _51.MsgVerifyInvariantAmino): _51.MsgVerifyInvariant;
                toAmino(message: _51.MsgVerifyInvariant): _51.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _51.MsgVerifyInvariantAminoMsg): _51.MsgVerifyInvariant;
                toAminoMsg(message: _51.MsgVerifyInvariant): _51.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _51.MsgVerifyInvariantProtoMsg): _51.MsgVerifyInvariant;
                toProto(message: _51.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _51.MsgVerifyInvariant): _51.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _51.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _51.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_51.MsgVerifyInvariantResponse>): _51.MsgVerifyInvariantResponse;
                fromAmino(_: _51.MsgVerifyInvariantResponseAmino): _51.MsgVerifyInvariantResponse;
                toAmino(_: _51.MsgVerifyInvariantResponse): _51.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _51.MsgVerifyInvariantResponseAminoMsg): _51.MsgVerifyInvariantResponse;
                toAminoMsg(message: _51.MsgVerifyInvariantResponse): _51.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _51.MsgVerifyInvariantResponseProtoMsg): _51.MsgVerifyInvariantResponse;
                toProto(message: _51.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _51.MsgVerifyInvariantResponse): _51.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _50.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.GenesisState;
                fromPartial(object: Partial<_50.GenesisState>): _50.GenesisState;
                fromAmino(object: _50.GenesisStateAmino): _50.GenesisState;
                toAmino(message: _50.GenesisState): _50.GenesisStateAmino;
                fromAminoMsg(object: _50.GenesisStateAminoMsg): _50.GenesisState;
                toAminoMsg(message: _50.GenesisState): _50.GenesisStateAminoMsg;
                fromProtoMsg(message: _50.GenesisStateProtoMsg): _50.GenesisState;
                toProto(message: _50.GenesisState): Uint8Array;
                toProtoMsg(message: _50.GenesisState): _50.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
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
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _53.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.LegacyAminoPubKey;
                fromPartial(object: Partial<_53.LegacyAminoPubKey>): _53.LegacyAminoPubKey;
                fromAmino(object: _53.LegacyAminoPubKeyAmino): _53.LegacyAminoPubKey;
                toAmino(message: _53.LegacyAminoPubKey): _53.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _53.LegacyAminoPubKeyAminoMsg): _53.LegacyAminoPubKey;
                toAminoMsg(message: _53.LegacyAminoPubKey): _53.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _53.LegacyAminoPubKeyProtoMsg): _53.LegacyAminoPubKey;
                toProto(message: _53.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _53.LegacyAminoPubKey): _53.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _54.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.PubKey;
                fromPartial(object: Partial<_54.PubKey>): _54.PubKey;
                fromAmino(object: _54.PubKeyAmino): _54.PubKey;
                toAmino(message: _54.PubKey): _54.PubKeyAmino;
                fromAminoMsg(object: _54.PubKeyAminoMsg): _54.PubKey;
                toAminoMsg(message: _54.PubKey): _54.PubKeyAminoMsg;
                fromProtoMsg(message: _54.PubKeyProtoMsg): _54.PubKey;
                toProto(message: _54.PubKey): Uint8Array;
                toProtoMsg(message: _54.PubKey): _54.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _54.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.PrivKey;
                fromPartial(object: Partial<_54.PrivKey>): _54.PrivKey;
                fromAmino(object: _54.PrivKeyAmino): _54.PrivKey;
                toAmino(message: _54.PrivKey): _54.PrivKeyAmino;
                fromAminoMsg(object: _54.PrivKeyAminoMsg): _54.PrivKey;
                toAminoMsg(message: _54.PrivKey): _54.PrivKeyAminoMsg;
                fromProtoMsg(message: _54.PrivKeyProtoMsg): _54.PrivKey;
                toProto(message: _54.PrivKey): Uint8Array;
                toProtoMsg(message: _54.PrivKey): _54.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _55.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.PubKey;
                fromPartial(object: Partial<_55.PubKey>): _55.PubKey;
                fromAmino(object: _55.PubKeyAmino): _55.PubKey;
                toAmino(message: _55.PubKey): _55.PubKeyAmino;
                fromAminoMsg(object: _55.PubKeyAminoMsg): _55.PubKey;
                toAminoMsg(message: _55.PubKey): _55.PubKeyAminoMsg;
                fromProtoMsg(message: _55.PubKeyProtoMsg): _55.PubKey;
                toProto(message: _55.PubKey): Uint8Array;
                toProtoMsg(message: _55.PubKey): _55.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _55.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.PrivKey;
                fromPartial(object: Partial<_55.PrivKey>): _55.PrivKey;
                fromAmino(object: _55.PrivKeyAmino): _55.PrivKey;
                toAmino(message: _55.PrivKey): _55.PrivKeyAmino;
                fromAminoMsg(object: _55.PrivKeyAminoMsg): _55.PrivKey;
                toAminoMsg(message: _55.PrivKey): _55.PrivKeyAminoMsg;
                fromProtoMsg(message: _55.PrivKeyProtoMsg): _55.PrivKey;
                toProto(message: _55.PrivKey): Uint8Array;
                toProtoMsg(message: _55.PrivKey): _55.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _203.MsgClientImpl;
            QueryClientImpl: typeof _190.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                validatorOutstandingRewards(request: _58.QueryValidatorOutstandingRewardsRequest): Promise<_58.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _58.QueryValidatorCommissionRequest): Promise<_58.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _58.QueryValidatorSlashesRequest): Promise<_58.QueryValidatorSlashesResponse>;
                delegationRewards(request: _58.QueryDelegationRewardsRequest): Promise<_58.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _58.QueryDelegationTotalRewardsRequest): Promise<_58.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _58.QueryDelegatorValidatorsRequest): Promise<_58.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _58.QueryDelegatorWithdrawAddressRequest): Promise<_58.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _58.QueryCommunityPoolRequest): Promise<_58.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _175.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _59.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _59.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _59.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _59.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _59.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _59.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _59.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _59.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _59.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _59.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _59.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _59.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _59.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _59.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _59.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _59.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _59.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _59.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _59.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _59.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _59.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _59.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _59.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _59.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _59.MsgSetWithdrawAddress) => _59.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _59.MsgSetWithdrawAddressAmino) => _59.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _59.MsgWithdrawDelegatorReward) => _59.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _59.MsgWithdrawDelegatorRewardAmino) => _59.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _59.MsgWithdrawValidatorCommission) => _59.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _59.MsgWithdrawValidatorCommissionAmino) => _59.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _59.MsgFundCommunityPool) => _59.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _59.MsgFundCommunityPoolAmino) => _59.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _59.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_59.MsgSetWithdrawAddress>): _59.MsgSetWithdrawAddress;
                fromAmino(object: _59.MsgSetWithdrawAddressAmino): _59.MsgSetWithdrawAddress;
                toAmino(message: _59.MsgSetWithdrawAddress): _59.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _59.MsgSetWithdrawAddressAminoMsg): _59.MsgSetWithdrawAddress;
                toAminoMsg(message: _59.MsgSetWithdrawAddress): _59.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _59.MsgSetWithdrawAddressProtoMsg): _59.MsgSetWithdrawAddress;
                toProto(message: _59.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _59.MsgSetWithdrawAddress): _59.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _59.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_59.MsgSetWithdrawAddressResponse>): _59.MsgSetWithdrawAddressResponse;
                fromAmino(_: _59.MsgSetWithdrawAddressResponseAmino): _59.MsgSetWithdrawAddressResponse;
                toAmino(_: _59.MsgSetWithdrawAddressResponse): _59.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _59.MsgSetWithdrawAddressResponseAminoMsg): _59.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _59.MsgSetWithdrawAddressResponse): _59.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _59.MsgSetWithdrawAddressResponseProtoMsg): _59.MsgSetWithdrawAddressResponse;
                toProto(message: _59.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _59.MsgSetWithdrawAddressResponse): _59.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _59.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_59.MsgWithdrawDelegatorReward>): _59.MsgWithdrawDelegatorReward;
                fromAmino(object: _59.MsgWithdrawDelegatorRewardAmino): _59.MsgWithdrawDelegatorReward;
                toAmino(message: _59.MsgWithdrawDelegatorReward): _59.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _59.MsgWithdrawDelegatorRewardAminoMsg): _59.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _59.MsgWithdrawDelegatorReward): _59.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _59.MsgWithdrawDelegatorRewardProtoMsg): _59.MsgWithdrawDelegatorReward;
                toProto(message: _59.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _59.MsgWithdrawDelegatorReward): _59.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _59.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_59.MsgWithdrawDelegatorRewardResponse>): _59.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _59.MsgWithdrawDelegatorRewardResponseAmino): _59.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _59.MsgWithdrawDelegatorRewardResponse): _59.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _59.MsgWithdrawDelegatorRewardResponseAminoMsg): _59.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _59.MsgWithdrawDelegatorRewardResponse): _59.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _59.MsgWithdrawDelegatorRewardResponseProtoMsg): _59.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _59.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _59.MsgWithdrawDelegatorRewardResponse): _59.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _59.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_59.MsgWithdrawValidatorCommission>): _59.MsgWithdrawValidatorCommission;
                fromAmino(object: _59.MsgWithdrawValidatorCommissionAmino): _59.MsgWithdrawValidatorCommission;
                toAmino(message: _59.MsgWithdrawValidatorCommission): _59.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _59.MsgWithdrawValidatorCommissionAminoMsg): _59.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _59.MsgWithdrawValidatorCommission): _59.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _59.MsgWithdrawValidatorCommissionProtoMsg): _59.MsgWithdrawValidatorCommission;
                toProto(message: _59.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _59.MsgWithdrawValidatorCommission): _59.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _59.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_59.MsgWithdrawValidatorCommissionResponse>): _59.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _59.MsgWithdrawValidatorCommissionResponseAmino): _59.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _59.MsgWithdrawValidatorCommissionResponse): _59.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _59.MsgWithdrawValidatorCommissionResponseAminoMsg): _59.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _59.MsgWithdrawValidatorCommissionResponse): _59.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _59.MsgWithdrawValidatorCommissionResponseProtoMsg): _59.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _59.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _59.MsgWithdrawValidatorCommissionResponse): _59.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _59.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgFundCommunityPool;
                fromPartial(object: Partial<_59.MsgFundCommunityPool>): _59.MsgFundCommunityPool;
                fromAmino(object: _59.MsgFundCommunityPoolAmino): _59.MsgFundCommunityPool;
                toAmino(message: _59.MsgFundCommunityPool): _59.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _59.MsgFundCommunityPoolAminoMsg): _59.MsgFundCommunityPool;
                toAminoMsg(message: _59.MsgFundCommunityPool): _59.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _59.MsgFundCommunityPoolProtoMsg): _59.MsgFundCommunityPool;
                toProto(message: _59.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _59.MsgFundCommunityPool): _59.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _59.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_59.MsgFundCommunityPoolResponse>): _59.MsgFundCommunityPoolResponse;
                fromAmino(_: _59.MsgFundCommunityPoolResponseAmino): _59.MsgFundCommunityPoolResponse;
                toAmino(_: _59.MsgFundCommunityPoolResponse): _59.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _59.MsgFundCommunityPoolResponseAminoMsg): _59.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _59.MsgFundCommunityPoolResponse): _59.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _59.MsgFundCommunityPoolResponseProtoMsg): _59.MsgFundCommunityPoolResponse;
                toProto(message: _59.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _59.MsgFundCommunityPoolResponse): _59.MsgFundCommunityPoolResponseProtoMsg;
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
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _58.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_58.QueryValidatorOutstandingRewardsRequest>): _58.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _58.QueryValidatorOutstandingRewardsRequestAmino): _58.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _58.QueryValidatorOutstandingRewardsRequest): _58.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _58.QueryValidatorOutstandingRewardsRequestAminoMsg): _58.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _58.QueryValidatorOutstandingRewardsRequest): _58.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryValidatorOutstandingRewardsRequestProtoMsg): _58.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _58.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryValidatorOutstandingRewardsRequest): _58.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _58.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_58.QueryValidatorOutstandingRewardsResponse>): _58.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _58.QueryValidatorOutstandingRewardsResponseAmino): _58.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _58.QueryValidatorOutstandingRewardsResponse): _58.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _58.QueryValidatorOutstandingRewardsResponseAminoMsg): _58.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _58.QueryValidatorOutstandingRewardsResponse): _58.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryValidatorOutstandingRewardsResponseProtoMsg): _58.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _58.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryValidatorOutstandingRewardsResponse): _58.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _58.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_58.QueryValidatorCommissionRequest>): _58.QueryValidatorCommissionRequest;
                fromAmino(object: _58.QueryValidatorCommissionRequestAmino): _58.QueryValidatorCommissionRequest;
                toAmino(message: _58.QueryValidatorCommissionRequest): _58.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _58.QueryValidatorCommissionRequestAminoMsg): _58.QueryValidatorCommissionRequest;
                toAminoMsg(message: _58.QueryValidatorCommissionRequest): _58.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _58.QueryValidatorCommissionRequestProtoMsg): _58.QueryValidatorCommissionRequest;
                toProto(message: _58.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _58.QueryValidatorCommissionRequest): _58.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _58.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_58.QueryValidatorCommissionResponse>): _58.QueryValidatorCommissionResponse;
                fromAmino(object: _58.QueryValidatorCommissionResponseAmino): _58.QueryValidatorCommissionResponse;
                toAmino(message: _58.QueryValidatorCommissionResponse): _58.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _58.QueryValidatorCommissionResponseAminoMsg): _58.QueryValidatorCommissionResponse;
                toAminoMsg(message: _58.QueryValidatorCommissionResponse): _58.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _58.QueryValidatorCommissionResponseProtoMsg): _58.QueryValidatorCommissionResponse;
                toProto(message: _58.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _58.QueryValidatorCommissionResponse): _58.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _58.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_58.QueryValidatorSlashesRequest>): _58.QueryValidatorSlashesRequest;
                fromAmino(object: _58.QueryValidatorSlashesRequestAmino): _58.QueryValidatorSlashesRequest;
                toAmino(message: _58.QueryValidatorSlashesRequest): _58.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _58.QueryValidatorSlashesRequestAminoMsg): _58.QueryValidatorSlashesRequest;
                toAminoMsg(message: _58.QueryValidatorSlashesRequest): _58.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _58.QueryValidatorSlashesRequestProtoMsg): _58.QueryValidatorSlashesRequest;
                toProto(message: _58.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _58.QueryValidatorSlashesRequest): _58.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _58.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_58.QueryValidatorSlashesResponse>): _58.QueryValidatorSlashesResponse;
                fromAmino(object: _58.QueryValidatorSlashesResponseAmino): _58.QueryValidatorSlashesResponse;
                toAmino(message: _58.QueryValidatorSlashesResponse): _58.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _58.QueryValidatorSlashesResponseAminoMsg): _58.QueryValidatorSlashesResponse;
                toAminoMsg(message: _58.QueryValidatorSlashesResponse): _58.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _58.QueryValidatorSlashesResponseProtoMsg): _58.QueryValidatorSlashesResponse;
                toProto(message: _58.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _58.QueryValidatorSlashesResponse): _58.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _58.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_58.QueryDelegationRewardsRequest>): _58.QueryDelegationRewardsRequest;
                fromAmino(object: _58.QueryDelegationRewardsRequestAmino): _58.QueryDelegationRewardsRequest;
                toAmino(message: _58.QueryDelegationRewardsRequest): _58.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _58.QueryDelegationRewardsRequestAminoMsg): _58.QueryDelegationRewardsRequest;
                toAminoMsg(message: _58.QueryDelegationRewardsRequest): _58.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryDelegationRewardsRequestProtoMsg): _58.QueryDelegationRewardsRequest;
                toProto(message: _58.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryDelegationRewardsRequest): _58.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _58.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_58.QueryDelegationRewardsResponse>): _58.QueryDelegationRewardsResponse;
                fromAmino(object: _58.QueryDelegationRewardsResponseAmino): _58.QueryDelegationRewardsResponse;
                toAmino(message: _58.QueryDelegationRewardsResponse): _58.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _58.QueryDelegationRewardsResponseAminoMsg): _58.QueryDelegationRewardsResponse;
                toAminoMsg(message: _58.QueryDelegationRewardsResponse): _58.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryDelegationRewardsResponseProtoMsg): _58.QueryDelegationRewardsResponse;
                toProto(message: _58.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryDelegationRewardsResponse): _58.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _58.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_58.QueryDelegationTotalRewardsRequest>): _58.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _58.QueryDelegationTotalRewardsRequestAmino): _58.QueryDelegationTotalRewardsRequest;
                toAmino(message: _58.QueryDelegationTotalRewardsRequest): _58.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _58.QueryDelegationTotalRewardsRequestAminoMsg): _58.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _58.QueryDelegationTotalRewardsRequest): _58.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryDelegationTotalRewardsRequestProtoMsg): _58.QueryDelegationTotalRewardsRequest;
                toProto(message: _58.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryDelegationTotalRewardsRequest): _58.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _58.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_58.QueryDelegationTotalRewardsResponse>): _58.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _58.QueryDelegationTotalRewardsResponseAmino): _58.QueryDelegationTotalRewardsResponse;
                toAmino(message: _58.QueryDelegationTotalRewardsResponse): _58.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _58.QueryDelegationTotalRewardsResponseAminoMsg): _58.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _58.QueryDelegationTotalRewardsResponse): _58.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryDelegationTotalRewardsResponseProtoMsg): _58.QueryDelegationTotalRewardsResponse;
                toProto(message: _58.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryDelegationTotalRewardsResponse): _58.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _58.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_58.QueryDelegatorValidatorsRequest>): _58.QueryDelegatorValidatorsRequest;
                fromAmino(object: _58.QueryDelegatorValidatorsRequestAmino): _58.QueryDelegatorValidatorsRequest;
                toAmino(message: _58.QueryDelegatorValidatorsRequest): _58.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _58.QueryDelegatorValidatorsRequestAminoMsg): _58.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _58.QueryDelegatorValidatorsRequest): _58.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryDelegatorValidatorsRequestProtoMsg): _58.QueryDelegatorValidatorsRequest;
                toProto(message: _58.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryDelegatorValidatorsRequest): _58.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _58.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_58.QueryDelegatorValidatorsResponse>): _58.QueryDelegatorValidatorsResponse;
                fromAmino(object: _58.QueryDelegatorValidatorsResponseAmino): _58.QueryDelegatorValidatorsResponse;
                toAmino(message: _58.QueryDelegatorValidatorsResponse): _58.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _58.QueryDelegatorValidatorsResponseAminoMsg): _58.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _58.QueryDelegatorValidatorsResponse): _58.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryDelegatorValidatorsResponseProtoMsg): _58.QueryDelegatorValidatorsResponse;
                toProto(message: _58.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryDelegatorValidatorsResponse): _58.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _58.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_58.QueryDelegatorWithdrawAddressRequest>): _58.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _58.QueryDelegatorWithdrawAddressRequestAmino): _58.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _58.QueryDelegatorWithdrawAddressRequest): _58.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _58.QueryDelegatorWithdrawAddressRequestAminoMsg): _58.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _58.QueryDelegatorWithdrawAddressRequest): _58.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _58.QueryDelegatorWithdrawAddressRequestProtoMsg): _58.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _58.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _58.QueryDelegatorWithdrawAddressRequest): _58.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _58.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_58.QueryDelegatorWithdrawAddressResponse>): _58.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _58.QueryDelegatorWithdrawAddressResponseAmino): _58.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _58.QueryDelegatorWithdrawAddressResponse): _58.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _58.QueryDelegatorWithdrawAddressResponseAminoMsg): _58.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _58.QueryDelegatorWithdrawAddressResponse): _58.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _58.QueryDelegatorWithdrawAddressResponseProtoMsg): _58.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _58.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _58.QueryDelegatorWithdrawAddressResponse): _58.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _58.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_58.QueryCommunityPoolRequest>): _58.QueryCommunityPoolRequest;
                fromAmino(_: _58.QueryCommunityPoolRequestAmino): _58.QueryCommunityPoolRequest;
                toAmino(_: _58.QueryCommunityPoolRequest): _58.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _58.QueryCommunityPoolRequestAminoMsg): _58.QueryCommunityPoolRequest;
                toAminoMsg(message: _58.QueryCommunityPoolRequest): _58.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _58.QueryCommunityPoolRequestProtoMsg): _58.QueryCommunityPoolRequest;
                toProto(message: _58.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _58.QueryCommunityPoolRequest): _58.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _58.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_58.QueryCommunityPoolResponse>): _58.QueryCommunityPoolResponse;
                fromAmino(object: _58.QueryCommunityPoolResponseAmino): _58.QueryCommunityPoolResponse;
                toAmino(message: _58.QueryCommunityPoolResponse): _58.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _58.QueryCommunityPoolResponseAminoMsg): _58.QueryCommunityPoolResponse;
                toAminoMsg(message: _58.QueryCommunityPoolResponse): _58.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _58.QueryCommunityPoolResponseProtoMsg): _58.QueryCommunityPoolResponse;
                toProto(message: _58.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _58.QueryCommunityPoolResponse): _58.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _57.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_57.DelegatorWithdrawInfo>): _57.DelegatorWithdrawInfo;
                fromAmino(object: _57.DelegatorWithdrawInfoAmino): _57.DelegatorWithdrawInfo;
                toAmino(message: _57.DelegatorWithdrawInfo): _57.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _57.DelegatorWithdrawInfoAminoMsg): _57.DelegatorWithdrawInfo;
                toAminoMsg(message: _57.DelegatorWithdrawInfo): _57.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _57.DelegatorWithdrawInfoProtoMsg): _57.DelegatorWithdrawInfo;
                toProto(message: _57.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _57.DelegatorWithdrawInfo): _57.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _57.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_57.ValidatorOutstandingRewardsRecord>): _57.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _57.ValidatorOutstandingRewardsRecordAmino): _57.ValidatorOutstandingRewardsRecord;
                toAmino(message: _57.ValidatorOutstandingRewardsRecord): _57.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _57.ValidatorOutstandingRewardsRecordAminoMsg): _57.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _57.ValidatorOutstandingRewardsRecord): _57.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _57.ValidatorOutstandingRewardsRecordProtoMsg): _57.ValidatorOutstandingRewardsRecord;
                toProto(message: _57.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _57.ValidatorOutstandingRewardsRecord): _57.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _57.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_57.ValidatorAccumulatedCommissionRecord>): _57.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _57.ValidatorAccumulatedCommissionRecordAmino): _57.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _57.ValidatorAccumulatedCommissionRecord): _57.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _57.ValidatorAccumulatedCommissionRecordAminoMsg): _57.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _57.ValidatorAccumulatedCommissionRecord): _57.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _57.ValidatorAccumulatedCommissionRecordProtoMsg): _57.ValidatorAccumulatedCommissionRecord;
                toProto(message: _57.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _57.ValidatorAccumulatedCommissionRecord): _57.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _57.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_57.ValidatorHistoricalRewardsRecord>): _57.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _57.ValidatorHistoricalRewardsRecordAmino): _57.ValidatorHistoricalRewardsRecord;
                toAmino(message: _57.ValidatorHistoricalRewardsRecord): _57.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _57.ValidatorHistoricalRewardsRecordAminoMsg): _57.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _57.ValidatorHistoricalRewardsRecord): _57.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _57.ValidatorHistoricalRewardsRecordProtoMsg): _57.ValidatorHistoricalRewardsRecord;
                toProto(message: _57.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _57.ValidatorHistoricalRewardsRecord): _57.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _57.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_57.ValidatorCurrentRewardsRecord>): _57.ValidatorCurrentRewardsRecord;
                fromAmino(object: _57.ValidatorCurrentRewardsRecordAmino): _57.ValidatorCurrentRewardsRecord;
                toAmino(message: _57.ValidatorCurrentRewardsRecord): _57.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _57.ValidatorCurrentRewardsRecordAminoMsg): _57.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _57.ValidatorCurrentRewardsRecord): _57.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _57.ValidatorCurrentRewardsRecordProtoMsg): _57.ValidatorCurrentRewardsRecord;
                toProto(message: _57.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _57.ValidatorCurrentRewardsRecord): _57.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _57.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_57.DelegatorStartingInfoRecord>): _57.DelegatorStartingInfoRecord;
                fromAmino(object: _57.DelegatorStartingInfoRecordAmino): _57.DelegatorStartingInfoRecord;
                toAmino(message: _57.DelegatorStartingInfoRecord): _57.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _57.DelegatorStartingInfoRecordAminoMsg): _57.DelegatorStartingInfoRecord;
                toAminoMsg(message: _57.DelegatorStartingInfoRecord): _57.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _57.DelegatorStartingInfoRecordProtoMsg): _57.DelegatorStartingInfoRecord;
                toProto(message: _57.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _57.DelegatorStartingInfoRecord): _57.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _57.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_57.ValidatorSlashEventRecord>): _57.ValidatorSlashEventRecord;
                fromAmino(object: _57.ValidatorSlashEventRecordAmino): _57.ValidatorSlashEventRecord;
                toAmino(message: _57.ValidatorSlashEventRecord): _57.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _57.ValidatorSlashEventRecordAminoMsg): _57.ValidatorSlashEventRecord;
                toAminoMsg(message: _57.ValidatorSlashEventRecord): _57.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _57.ValidatorSlashEventRecordProtoMsg): _57.ValidatorSlashEventRecord;
                toProto(message: _57.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _57.ValidatorSlashEventRecord): _57.ValidatorSlashEventRecordProtoMsg;
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
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _56.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_56.ValidatorHistoricalRewards>): _56.ValidatorHistoricalRewards;
                fromAmino(object: _56.ValidatorHistoricalRewardsAmino): _56.ValidatorHistoricalRewards;
                toAmino(message: _56.ValidatorHistoricalRewards): _56.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _56.ValidatorHistoricalRewardsAminoMsg): _56.ValidatorHistoricalRewards;
                toAminoMsg(message: _56.ValidatorHistoricalRewards): _56.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _56.ValidatorHistoricalRewardsProtoMsg): _56.ValidatorHistoricalRewards;
                toProto(message: _56.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _56.ValidatorHistoricalRewards): _56.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _56.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.ValidatorCurrentRewards;
                fromPartial(object: Partial<_56.ValidatorCurrentRewards>): _56.ValidatorCurrentRewards;
                fromAmino(object: _56.ValidatorCurrentRewardsAmino): _56.ValidatorCurrentRewards;
                toAmino(message: _56.ValidatorCurrentRewards): _56.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _56.ValidatorCurrentRewardsAminoMsg): _56.ValidatorCurrentRewards;
                toAminoMsg(message: _56.ValidatorCurrentRewards): _56.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _56.ValidatorCurrentRewardsProtoMsg): _56.ValidatorCurrentRewards;
                toProto(message: _56.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _56.ValidatorCurrentRewards): _56.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _56.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_56.ValidatorAccumulatedCommission>): _56.ValidatorAccumulatedCommission;
                fromAmino(object: _56.ValidatorAccumulatedCommissionAmino): _56.ValidatorAccumulatedCommission;
                toAmino(message: _56.ValidatorAccumulatedCommission): _56.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _56.ValidatorAccumulatedCommissionAminoMsg): _56.ValidatorAccumulatedCommission;
                toAminoMsg(message: _56.ValidatorAccumulatedCommission): _56.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _56.ValidatorAccumulatedCommissionProtoMsg): _56.ValidatorAccumulatedCommission;
                toProto(message: _56.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _56.ValidatorAccumulatedCommission): _56.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _56.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_56.ValidatorOutstandingRewards>): _56.ValidatorOutstandingRewards;
                fromAmino(object: _56.ValidatorOutstandingRewardsAmino): _56.ValidatorOutstandingRewards;
                toAmino(message: _56.ValidatorOutstandingRewards): _56.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _56.ValidatorOutstandingRewardsAminoMsg): _56.ValidatorOutstandingRewards;
                toAminoMsg(message: _56.ValidatorOutstandingRewards): _56.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _56.ValidatorOutstandingRewardsProtoMsg): _56.ValidatorOutstandingRewards;
                toProto(message: _56.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _56.ValidatorOutstandingRewards): _56.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _56.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.ValidatorSlashEvent;
                fromPartial(object: Partial<_56.ValidatorSlashEvent>): _56.ValidatorSlashEvent;
                fromAmino(object: _56.ValidatorSlashEventAmino): _56.ValidatorSlashEvent;
                toAmino(message: _56.ValidatorSlashEvent): _56.ValidatorSlashEventAmino;
                fromAminoMsg(object: _56.ValidatorSlashEventAminoMsg): _56.ValidatorSlashEvent;
                toAminoMsg(message: _56.ValidatorSlashEvent): _56.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _56.ValidatorSlashEventProtoMsg): _56.ValidatorSlashEvent;
                toProto(message: _56.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _56.ValidatorSlashEvent): _56.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _56.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.ValidatorSlashEvents;
                fromPartial(object: Partial<_56.ValidatorSlashEvents>): _56.ValidatorSlashEvents;
                fromAmino(object: _56.ValidatorSlashEventsAmino): _56.ValidatorSlashEvents;
                toAmino(message: _56.ValidatorSlashEvents): _56.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _56.ValidatorSlashEventsAminoMsg): _56.ValidatorSlashEvents;
                toAminoMsg(message: _56.ValidatorSlashEvents): _56.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _56.ValidatorSlashEventsProtoMsg): _56.ValidatorSlashEvents;
                toProto(message: _56.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _56.ValidatorSlashEvents): _56.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _56.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.FeePool;
                fromPartial(object: Partial<_56.FeePool>): _56.FeePool;
                fromAmino(object: _56.FeePoolAmino): _56.FeePool;
                toAmino(message: _56.FeePool): _56.FeePoolAmino;
                fromAminoMsg(object: _56.FeePoolAminoMsg): _56.FeePool;
                toAminoMsg(message: _56.FeePool): _56.FeePoolAminoMsg;
                fromProtoMsg(message: _56.FeePoolProtoMsg): _56.FeePool;
                toProto(message: _56.FeePool): Uint8Array;
                toProtoMsg(message: _56.FeePool): _56.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _56.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_56.CommunityPoolSpendProposal>): _56.CommunityPoolSpendProposal;
                fromAmino(object: _56.CommunityPoolSpendProposalAmino): _56.CommunityPoolSpendProposal;
                toAmino(message: _56.CommunityPoolSpendProposal): _56.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _56.CommunityPoolSpendProposalAminoMsg): _56.CommunityPoolSpendProposal;
                toAminoMsg(message: _56.CommunityPoolSpendProposal): _56.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _56.CommunityPoolSpendProposalProtoMsg): _56.CommunityPoolSpendProposal;
                toProto(message: _56.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _56.CommunityPoolSpendProposal): _56.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _56.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.DelegatorStartingInfo;
                fromPartial(object: Partial<_56.DelegatorStartingInfo>): _56.DelegatorStartingInfo;
                fromAmino(object: _56.DelegatorStartingInfoAmino): _56.DelegatorStartingInfo;
                toAmino(message: _56.DelegatorStartingInfo): _56.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _56.DelegatorStartingInfoAminoMsg): _56.DelegatorStartingInfo;
                toAminoMsg(message: _56.DelegatorStartingInfo): _56.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _56.DelegatorStartingInfoProtoMsg): _56.DelegatorStartingInfo;
                toProto(message: _56.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _56.DelegatorStartingInfo): _56.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _56.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.DelegationDelegatorReward;
                fromPartial(object: Partial<_56.DelegationDelegatorReward>): _56.DelegationDelegatorReward;
                fromAmino(object: _56.DelegationDelegatorRewardAmino): _56.DelegationDelegatorReward;
                toAmino(message: _56.DelegationDelegatorReward): _56.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _56.DelegationDelegatorRewardAminoMsg): _56.DelegationDelegatorReward;
                toAminoMsg(message: _56.DelegationDelegatorReward): _56.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _56.DelegationDelegatorRewardProtoMsg): _56.DelegationDelegatorReward;
                toProto(message: _56.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _56.DelegationDelegatorReward): _56.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _56.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_56.CommunityPoolSpendProposalWithDeposit>): _56.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _56.CommunityPoolSpendProposalWithDepositAmino): _56.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _56.CommunityPoolSpendProposalWithDeposit): _56.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _56.CommunityPoolSpendProposalWithDepositAminoMsg): _56.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _56.CommunityPoolSpendProposalWithDeposit): _56.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _56.CommunityPoolSpendProposalWithDepositProtoMsg): _56.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _56.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _56.CommunityPoolSpendProposalWithDeposit): _56.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _204.MsgClientImpl;
            QueryClientImpl: typeof _191.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _62.QueryEvidenceRequest): Promise<_62.QueryEvidenceResponse>;
                allEvidence(request?: _62.QueryAllEvidenceRequest): Promise<_62.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _176.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _63.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _63.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _63.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _63.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _63.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _63.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _63.MsgSubmitEvidence) => _63.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _63.MsgSubmitEvidenceAmino) => _63.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _63.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgSubmitEvidence;
                fromPartial(object: Partial<_63.MsgSubmitEvidence>): _63.MsgSubmitEvidence;
                fromAmino(object: _63.MsgSubmitEvidenceAmino): _63.MsgSubmitEvidence;
                toAmino(message: _63.MsgSubmitEvidence): _63.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _63.MsgSubmitEvidenceAminoMsg): _63.MsgSubmitEvidence;
                toAminoMsg(message: _63.MsgSubmitEvidence): _63.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _63.MsgSubmitEvidenceProtoMsg): _63.MsgSubmitEvidence;
                toProto(message: _63.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _63.MsgSubmitEvidence): _63.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _63.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_63.MsgSubmitEvidenceResponse>): _63.MsgSubmitEvidenceResponse;
                fromAmino(object: _63.MsgSubmitEvidenceResponseAmino): _63.MsgSubmitEvidenceResponse;
                toAmino(message: _63.MsgSubmitEvidenceResponse): _63.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _63.MsgSubmitEvidenceResponseAminoMsg): _63.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _63.MsgSubmitEvidenceResponse): _63.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _63.MsgSubmitEvidenceResponseProtoMsg): _63.MsgSubmitEvidenceResponse;
                toProto(message: _63.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _63.MsgSubmitEvidenceResponse): _63.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _62.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryEvidenceRequest;
                fromPartial(object: Partial<_62.QueryEvidenceRequest>): _62.QueryEvidenceRequest;
                fromAmino(object: _62.QueryEvidenceRequestAmino): _62.QueryEvidenceRequest;
                toAmino(message: _62.QueryEvidenceRequest): _62.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _62.QueryEvidenceRequestAminoMsg): _62.QueryEvidenceRequest;
                toAminoMsg(message: _62.QueryEvidenceRequest): _62.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _62.QueryEvidenceRequestProtoMsg): _62.QueryEvidenceRequest;
                toProto(message: _62.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _62.QueryEvidenceRequest): _62.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _62.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryEvidenceResponse;
                fromPartial(object: Partial<_62.QueryEvidenceResponse>): _62.QueryEvidenceResponse;
                fromAmino(object: _62.QueryEvidenceResponseAmino): _62.QueryEvidenceResponse;
                toAmino(message: _62.QueryEvidenceResponse): _62.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _62.QueryEvidenceResponseAminoMsg): _62.QueryEvidenceResponse;
                toAminoMsg(message: _62.QueryEvidenceResponse): _62.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _62.QueryEvidenceResponseProtoMsg): _62.QueryEvidenceResponse;
                toProto(message: _62.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _62.QueryEvidenceResponse): _62.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _62.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_62.QueryAllEvidenceRequest>): _62.QueryAllEvidenceRequest;
                fromAmino(object: _62.QueryAllEvidenceRequestAmino): _62.QueryAllEvidenceRequest;
                toAmino(message: _62.QueryAllEvidenceRequest): _62.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _62.QueryAllEvidenceRequestAminoMsg): _62.QueryAllEvidenceRequest;
                toAminoMsg(message: _62.QueryAllEvidenceRequest): _62.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _62.QueryAllEvidenceRequestProtoMsg): _62.QueryAllEvidenceRequest;
                toProto(message: _62.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _62.QueryAllEvidenceRequest): _62.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _62.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_62.QueryAllEvidenceResponse>): _62.QueryAllEvidenceResponse;
                fromAmino(object: _62.QueryAllEvidenceResponseAmino): _62.QueryAllEvidenceResponse;
                toAmino(message: _62.QueryAllEvidenceResponse): _62.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _62.QueryAllEvidenceResponseAminoMsg): _62.QueryAllEvidenceResponse;
                toAminoMsg(message: _62.QueryAllEvidenceResponse): _62.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _62.QueryAllEvidenceResponseProtoMsg): _62.QueryAllEvidenceResponse;
                toProto(message: _62.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _62.QueryAllEvidenceResponse): _62.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _60.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.Equivocation;
                fromPartial(object: Partial<_60.Equivocation>): _60.Equivocation;
                fromAmino(object: _60.EquivocationAmino): _60.Equivocation;
                toAmino(message: _60.Equivocation): _60.EquivocationAmino;
                fromAminoMsg(object: _60.EquivocationAminoMsg): _60.Equivocation;
                toAminoMsg(message: _60.Equivocation): _60.EquivocationAminoMsg;
                fromProtoMsg(message: _60.EquivocationProtoMsg): _60.Equivocation;
                toProto(message: _60.Equivocation): Uint8Array;
                toProtoMsg(message: _60.Equivocation): _60.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _205.MsgClientImpl;
            QueryClientImpl: typeof _192.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _66.QueryAllowanceRequest): Promise<_66.QueryAllowanceResponse>;
                allowances(request: _66.QueryAllowancesRequest): Promise<_66.QueryAllowancesResponse>;
                allowancesByGranter(request: _66.QueryAllowancesByGranterRequest): Promise<_66.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _177.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _67.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _67.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _67.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _67.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _67.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _67.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _67.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _67.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _67.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _67.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _67.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _67.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _67.MsgGrantAllowance) => _67.MsgGrantAllowanceAmino;
                    fromAmino: (object: _67.MsgGrantAllowanceAmino) => _67.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _67.MsgRevokeAllowance) => _67.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _67.MsgRevokeAllowanceAmino) => _67.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _67.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgGrantAllowance;
                fromPartial(object: Partial<_67.MsgGrantAllowance>): _67.MsgGrantAllowance;
                fromAmino(object: _67.MsgGrantAllowanceAmino): _67.MsgGrantAllowance;
                toAmino(message: _67.MsgGrantAllowance): _67.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _67.MsgGrantAllowanceAminoMsg): _67.MsgGrantAllowance;
                toAminoMsg(message: _67.MsgGrantAllowance): _67.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _67.MsgGrantAllowanceProtoMsg): _67.MsgGrantAllowance;
                toProto(message: _67.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _67.MsgGrantAllowance): _67.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _67.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_67.MsgGrantAllowanceResponse>): _67.MsgGrantAllowanceResponse;
                fromAmino(_: _67.MsgGrantAllowanceResponseAmino): _67.MsgGrantAllowanceResponse;
                toAmino(_: _67.MsgGrantAllowanceResponse): _67.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _67.MsgGrantAllowanceResponseAminoMsg): _67.MsgGrantAllowanceResponse;
                toAminoMsg(message: _67.MsgGrantAllowanceResponse): _67.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _67.MsgGrantAllowanceResponseProtoMsg): _67.MsgGrantAllowanceResponse;
                toProto(message: _67.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _67.MsgGrantAllowanceResponse): _67.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _67.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgRevokeAllowance;
                fromPartial(object: Partial<_67.MsgRevokeAllowance>): _67.MsgRevokeAllowance;
                fromAmino(object: _67.MsgRevokeAllowanceAmino): _67.MsgRevokeAllowance;
                toAmino(message: _67.MsgRevokeAllowance): _67.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _67.MsgRevokeAllowanceAminoMsg): _67.MsgRevokeAllowance;
                toAminoMsg(message: _67.MsgRevokeAllowance): _67.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _67.MsgRevokeAllowanceProtoMsg): _67.MsgRevokeAllowance;
                toProto(message: _67.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _67.MsgRevokeAllowance): _67.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _67.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_67.MsgRevokeAllowanceResponse>): _67.MsgRevokeAllowanceResponse;
                fromAmino(_: _67.MsgRevokeAllowanceResponseAmino): _67.MsgRevokeAllowanceResponse;
                toAmino(_: _67.MsgRevokeAllowanceResponse): _67.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _67.MsgRevokeAllowanceResponseAminoMsg): _67.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _67.MsgRevokeAllowanceResponse): _67.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _67.MsgRevokeAllowanceResponseProtoMsg): _67.MsgRevokeAllowanceResponse;
                toProto(message: _67.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _67.MsgRevokeAllowanceResponse): _67.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _64.BasicAllowance | _64.PeriodicAllowance | _64.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _66.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryAllowanceRequest;
                fromPartial(object: Partial<_66.QueryAllowanceRequest>): _66.QueryAllowanceRequest;
                fromAmino(object: _66.QueryAllowanceRequestAmino): _66.QueryAllowanceRequest;
                toAmino(message: _66.QueryAllowanceRequest): _66.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _66.QueryAllowanceRequestAminoMsg): _66.QueryAllowanceRequest;
                toAminoMsg(message: _66.QueryAllowanceRequest): _66.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _66.QueryAllowanceRequestProtoMsg): _66.QueryAllowanceRequest;
                toProto(message: _66.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _66.QueryAllowanceRequest): _66.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _66.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryAllowanceResponse;
                fromPartial(object: Partial<_66.QueryAllowanceResponse>): _66.QueryAllowanceResponse;
                fromAmino(object: _66.QueryAllowanceResponseAmino): _66.QueryAllowanceResponse;
                toAmino(message: _66.QueryAllowanceResponse): _66.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _66.QueryAllowanceResponseAminoMsg): _66.QueryAllowanceResponse;
                toAminoMsg(message: _66.QueryAllowanceResponse): _66.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _66.QueryAllowanceResponseProtoMsg): _66.QueryAllowanceResponse;
                toProto(message: _66.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _66.QueryAllowanceResponse): _66.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _66.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryAllowancesRequest;
                fromPartial(object: Partial<_66.QueryAllowancesRequest>): _66.QueryAllowancesRequest;
                fromAmino(object: _66.QueryAllowancesRequestAmino): _66.QueryAllowancesRequest;
                toAmino(message: _66.QueryAllowancesRequest): _66.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _66.QueryAllowancesRequestAminoMsg): _66.QueryAllowancesRequest;
                toAminoMsg(message: _66.QueryAllowancesRequest): _66.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _66.QueryAllowancesRequestProtoMsg): _66.QueryAllowancesRequest;
                toProto(message: _66.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _66.QueryAllowancesRequest): _66.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _66.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryAllowancesResponse;
                fromPartial(object: Partial<_66.QueryAllowancesResponse>): _66.QueryAllowancesResponse;
                fromAmino(object: _66.QueryAllowancesResponseAmino): _66.QueryAllowancesResponse;
                toAmino(message: _66.QueryAllowancesResponse): _66.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _66.QueryAllowancesResponseAminoMsg): _66.QueryAllowancesResponse;
                toAminoMsg(message: _66.QueryAllowancesResponse): _66.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _66.QueryAllowancesResponseProtoMsg): _66.QueryAllowancesResponse;
                toProto(message: _66.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _66.QueryAllowancesResponse): _66.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _66.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_66.QueryAllowancesByGranterRequest>): _66.QueryAllowancesByGranterRequest;
                fromAmino(object: _66.QueryAllowancesByGranterRequestAmino): _66.QueryAllowancesByGranterRequest;
                toAmino(message: _66.QueryAllowancesByGranterRequest): _66.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _66.QueryAllowancesByGranterRequestAminoMsg): _66.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _66.QueryAllowancesByGranterRequest): _66.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _66.QueryAllowancesByGranterRequestProtoMsg): _66.QueryAllowancesByGranterRequest;
                toProto(message: _66.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _66.QueryAllowancesByGranterRequest): _66.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _66.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_66.QueryAllowancesByGranterResponse>): _66.QueryAllowancesByGranterResponse;
                fromAmino(object: _66.QueryAllowancesByGranterResponseAmino): _66.QueryAllowancesByGranterResponse;
                toAmino(message: _66.QueryAllowancesByGranterResponse): _66.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _66.QueryAllowancesByGranterResponseAminoMsg): _66.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _66.QueryAllowancesByGranterResponse): _66.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _66.QueryAllowancesByGranterResponseProtoMsg): _66.QueryAllowancesByGranterResponse;
                toProto(message: _66.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _66.QueryAllowancesByGranterResponse): _66.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _64.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.BasicAllowance;
                fromPartial(object: Partial<_64.BasicAllowance>): _64.BasicAllowance;
                fromAmino(object: _64.BasicAllowanceAmino): _64.BasicAllowance;
                toAmino(message: _64.BasicAllowance): _64.BasicAllowanceAmino;
                fromAminoMsg(object: _64.BasicAllowanceAminoMsg): _64.BasicAllowance;
                toAminoMsg(message: _64.BasicAllowance): _64.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _64.BasicAllowanceProtoMsg): _64.BasicAllowance;
                toProto(message: _64.BasicAllowance): Uint8Array;
                toProtoMsg(message: _64.BasicAllowance): _64.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _64.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.PeriodicAllowance;
                fromPartial(object: Partial<_64.PeriodicAllowance>): _64.PeriodicAllowance;
                fromAmino(object: _64.PeriodicAllowanceAmino): _64.PeriodicAllowance;
                toAmino(message: _64.PeriodicAllowance): _64.PeriodicAllowanceAmino;
                fromAminoMsg(object: _64.PeriodicAllowanceAminoMsg): _64.PeriodicAllowance;
                toAminoMsg(message: _64.PeriodicAllowance): _64.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _64.PeriodicAllowanceProtoMsg): _64.PeriodicAllowance;
                toProto(message: _64.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _64.PeriodicAllowance): _64.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _64.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.AllowedMsgAllowance;
                fromPartial(object: Partial<_64.AllowedMsgAllowance>): _64.AllowedMsgAllowance;
                fromAmino(object: _64.AllowedMsgAllowanceAmino): _64.AllowedMsgAllowance;
                toAmino(message: _64.AllowedMsgAllowance): _64.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _64.AllowedMsgAllowanceAminoMsg): _64.AllowedMsgAllowance;
                toAminoMsg(message: _64.AllowedMsgAllowance): _64.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _64.AllowedMsgAllowanceProtoMsg): _64.AllowedMsgAllowance;
                toProto(message: _64.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _64.AllowedMsgAllowance): _64.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _64.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.Grant;
                fromPartial(object: Partial<_64.Grant>): _64.Grant;
                fromAmino(object: _64.GrantAmino): _64.Grant;
                toAmino(message: _64.Grant): _64.GrantAmino;
                fromAminoMsg(object: _64.GrantAminoMsg): _64.Grant;
                toAminoMsg(message: _64.Grant): _64.GrantAminoMsg;
                fromProtoMsg(message: _64.GrantProtoMsg): _64.Grant;
                toProto(message: _64.Grant): Uint8Array;
                toProtoMsg(message: _64.Grant): _64.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _206.MsgClientImpl;
            QueryClientImpl: typeof _193.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _71.QueryProposalRequest): Promise<_71.QueryProposalResponse>;
                proposals(request: _71.QueryProposalsRequest): Promise<_71.QueryProposalsResponse>;
                vote(request: _71.QueryVoteRequest): Promise<_71.QueryVoteResponse>;
                votes(request: _71.QueryVotesRequest): Promise<_71.QueryVotesResponse>;
                params(request: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                deposit(request: _71.QueryDepositRequest): Promise<_71.QueryDepositResponse>;
                deposits(request: _71.QueryDepositsRequest): Promise<_71.QueryDepositsResponse>;
                tallyResult(request: _71.QueryTallyResultRequest): Promise<_71.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _178.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _72.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _72.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _72.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _72.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _72.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _72.MsgSubmitProposal;
                    };
                    vote(value: _72.MsgVote): {
                        typeUrl: string;
                        value: _72.MsgVote;
                    };
                    voteWeighted(value: _72.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _72.MsgVoteWeighted;
                    };
                    deposit(value: _72.MsgDeposit): {
                        typeUrl: string;
                        value: _72.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _72.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _72.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _72.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _72.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _72.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _72.MsgSubmitProposal;
                    };
                    vote(value: _72.MsgVote): {
                        typeUrl: string;
                        value: _72.MsgVote;
                    };
                    voteWeighted(value: _72.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _72.MsgVoteWeighted;
                    };
                    deposit(value: _72.MsgDeposit): {
                        typeUrl: string;
                        value: _72.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _72.MsgSubmitProposal) => _72.MsgSubmitProposalAmino;
                    fromAmino: (object: _72.MsgSubmitProposalAmino) => _72.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _72.MsgVote) => _72.MsgVoteAmino;
                    fromAmino: (object: _72.MsgVoteAmino) => _72.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _72.MsgVoteWeighted) => _72.MsgVoteWeightedAmino;
                    fromAmino: (object: _72.MsgVoteWeightedAmino) => _72.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _72.MsgDeposit) => _72.MsgDepositAmino;
                    fromAmino: (object: _72.MsgDepositAmino) => _72.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _72.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgSubmitProposal;
                fromPartial(object: Partial<_72.MsgSubmitProposal>): _72.MsgSubmitProposal;
                fromAmino(object: _72.MsgSubmitProposalAmino): _72.MsgSubmitProposal;
                toAmino(message: _72.MsgSubmitProposal): _72.MsgSubmitProposalAmino;
                fromAminoMsg(object: _72.MsgSubmitProposalAminoMsg): _72.MsgSubmitProposal;
                toAminoMsg(message: _72.MsgSubmitProposal): _72.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _72.MsgSubmitProposalProtoMsg): _72.MsgSubmitProposal;
                toProto(message: _72.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _72.MsgSubmitProposal): _72.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _72.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_72.MsgSubmitProposalResponse>): _72.MsgSubmitProposalResponse;
                fromAmino(object: _72.MsgSubmitProposalResponseAmino): _72.MsgSubmitProposalResponse;
                toAmino(message: _72.MsgSubmitProposalResponse): _72.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _72.MsgSubmitProposalResponseAminoMsg): _72.MsgSubmitProposalResponse;
                toAminoMsg(message: _72.MsgSubmitProposalResponse): _72.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _72.MsgSubmitProposalResponseProtoMsg): _72.MsgSubmitProposalResponse;
                toProto(message: _72.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _72.MsgSubmitProposalResponse): _72.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _72.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgVote;
                fromPartial(object: Partial<_72.MsgVote>): _72.MsgVote;
                fromAmino(object: _72.MsgVoteAmino): _72.MsgVote;
                toAmino(message: _72.MsgVote): _72.MsgVoteAmino;
                fromAminoMsg(object: _72.MsgVoteAminoMsg): _72.MsgVote;
                toAminoMsg(message: _72.MsgVote): _72.MsgVoteAminoMsg;
                fromProtoMsg(message: _72.MsgVoteProtoMsg): _72.MsgVote;
                toProto(message: _72.MsgVote): Uint8Array;
                toProtoMsg(message: _72.MsgVote): _72.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _72.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _72.MsgVoteResponse;
                fromPartial(_: Partial<_72.MsgVoteResponse>): _72.MsgVoteResponse;
                fromAmino(_: _72.MsgVoteResponseAmino): _72.MsgVoteResponse;
                toAmino(_: _72.MsgVoteResponse): _72.MsgVoteResponseAmino;
                fromAminoMsg(object: _72.MsgVoteResponseAminoMsg): _72.MsgVoteResponse;
                toAminoMsg(message: _72.MsgVoteResponse): _72.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _72.MsgVoteResponseProtoMsg): _72.MsgVoteResponse;
                toProto(message: _72.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _72.MsgVoteResponse): _72.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _72.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgVoteWeighted;
                fromPartial(object: Partial<_72.MsgVoteWeighted>): _72.MsgVoteWeighted;
                fromAmino(object: _72.MsgVoteWeightedAmino): _72.MsgVoteWeighted;
                toAmino(message: _72.MsgVoteWeighted): _72.MsgVoteWeightedAmino;
                fromAminoMsg(object: _72.MsgVoteWeightedAminoMsg): _72.MsgVoteWeighted;
                toAminoMsg(message: _72.MsgVoteWeighted): _72.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _72.MsgVoteWeightedProtoMsg): _72.MsgVoteWeighted;
                toProto(message: _72.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _72.MsgVoteWeighted): _72.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _72.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _72.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_72.MsgVoteWeightedResponse>): _72.MsgVoteWeightedResponse;
                fromAmino(_: _72.MsgVoteWeightedResponseAmino): _72.MsgVoteWeightedResponse;
                toAmino(_: _72.MsgVoteWeightedResponse): _72.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _72.MsgVoteWeightedResponseAminoMsg): _72.MsgVoteWeightedResponse;
                toAminoMsg(message: _72.MsgVoteWeightedResponse): _72.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _72.MsgVoteWeightedResponseProtoMsg): _72.MsgVoteWeightedResponse;
                toProto(message: _72.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _72.MsgVoteWeightedResponse): _72.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _72.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgDeposit;
                fromPartial(object: Partial<_72.MsgDeposit>): _72.MsgDeposit;
                fromAmino(object: _72.MsgDepositAmino): _72.MsgDeposit;
                toAmino(message: _72.MsgDeposit): _72.MsgDepositAmino;
                fromAminoMsg(object: _72.MsgDepositAminoMsg): _72.MsgDeposit;
                toAminoMsg(message: _72.MsgDeposit): _72.MsgDepositAminoMsg;
                fromProtoMsg(message: _72.MsgDepositProtoMsg): _72.MsgDeposit;
                toProto(message: _72.MsgDeposit): Uint8Array;
                toProtoMsg(message: _72.MsgDeposit): _72.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _72.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _72.MsgDepositResponse;
                fromPartial(_: Partial<_72.MsgDepositResponse>): _72.MsgDepositResponse;
                fromAmino(_: _72.MsgDepositResponseAmino): _72.MsgDepositResponse;
                toAmino(_: _72.MsgDepositResponse): _72.MsgDepositResponseAmino;
                fromAminoMsg(object: _72.MsgDepositResponseAminoMsg): _72.MsgDepositResponse;
                toAminoMsg(message: _72.MsgDepositResponse): _72.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _72.MsgDepositResponseProtoMsg): _72.MsgDepositResponse;
                toProto(message: _72.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _72.MsgDepositResponse): _72.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _70.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _71.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryProposalRequest;
                fromPartial(object: Partial<_71.QueryProposalRequest>): _71.QueryProposalRequest;
                fromAmino(object: _71.QueryProposalRequestAmino): _71.QueryProposalRequest;
                toAmino(message: _71.QueryProposalRequest): _71.QueryProposalRequestAmino;
                fromAminoMsg(object: _71.QueryProposalRequestAminoMsg): _71.QueryProposalRequest;
                toAminoMsg(message: _71.QueryProposalRequest): _71.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _71.QueryProposalRequestProtoMsg): _71.QueryProposalRequest;
                toProto(message: _71.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _71.QueryProposalRequest): _71.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _71.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryProposalResponse;
                fromPartial(object: Partial<_71.QueryProposalResponse>): _71.QueryProposalResponse;
                fromAmino(object: _71.QueryProposalResponseAmino): _71.QueryProposalResponse;
                toAmino(message: _71.QueryProposalResponse): _71.QueryProposalResponseAmino;
                fromAminoMsg(object: _71.QueryProposalResponseAminoMsg): _71.QueryProposalResponse;
                toAminoMsg(message: _71.QueryProposalResponse): _71.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _71.QueryProposalResponseProtoMsg): _71.QueryProposalResponse;
                toProto(message: _71.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _71.QueryProposalResponse): _71.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _71.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryProposalsRequest;
                fromPartial(object: Partial<_71.QueryProposalsRequest>): _71.QueryProposalsRequest;
                fromAmino(object: _71.QueryProposalsRequestAmino): _71.QueryProposalsRequest;
                toAmino(message: _71.QueryProposalsRequest): _71.QueryProposalsRequestAmino;
                fromAminoMsg(object: _71.QueryProposalsRequestAminoMsg): _71.QueryProposalsRequest;
                toAminoMsg(message: _71.QueryProposalsRequest): _71.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryProposalsRequestProtoMsg): _71.QueryProposalsRequest;
                toProto(message: _71.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryProposalsRequest): _71.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _71.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryProposalsResponse;
                fromPartial(object: Partial<_71.QueryProposalsResponse>): _71.QueryProposalsResponse;
                fromAmino(object: _71.QueryProposalsResponseAmino): _71.QueryProposalsResponse;
                toAmino(message: _71.QueryProposalsResponse): _71.QueryProposalsResponseAmino;
                fromAminoMsg(object: _71.QueryProposalsResponseAminoMsg): _71.QueryProposalsResponse;
                toAminoMsg(message: _71.QueryProposalsResponse): _71.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryProposalsResponseProtoMsg): _71.QueryProposalsResponse;
                toProto(message: _71.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryProposalsResponse): _71.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _71.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryVoteRequest;
                fromPartial(object: Partial<_71.QueryVoteRequest>): _71.QueryVoteRequest;
                fromAmino(object: _71.QueryVoteRequestAmino): _71.QueryVoteRequest;
                toAmino(message: _71.QueryVoteRequest): _71.QueryVoteRequestAmino;
                fromAminoMsg(object: _71.QueryVoteRequestAminoMsg): _71.QueryVoteRequest;
                toAminoMsg(message: _71.QueryVoteRequest): _71.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _71.QueryVoteRequestProtoMsg): _71.QueryVoteRequest;
                toProto(message: _71.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _71.QueryVoteRequest): _71.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _71.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryVoteResponse;
                fromPartial(object: Partial<_71.QueryVoteResponse>): _71.QueryVoteResponse;
                fromAmino(object: _71.QueryVoteResponseAmino): _71.QueryVoteResponse;
                toAmino(message: _71.QueryVoteResponse): _71.QueryVoteResponseAmino;
                fromAminoMsg(object: _71.QueryVoteResponseAminoMsg): _71.QueryVoteResponse;
                toAminoMsg(message: _71.QueryVoteResponse): _71.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _71.QueryVoteResponseProtoMsg): _71.QueryVoteResponse;
                toProto(message: _71.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _71.QueryVoteResponse): _71.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _71.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryVotesRequest;
                fromPartial(object: Partial<_71.QueryVotesRequest>): _71.QueryVotesRequest;
                fromAmino(object: _71.QueryVotesRequestAmino): _71.QueryVotesRequest;
                toAmino(message: _71.QueryVotesRequest): _71.QueryVotesRequestAmino;
                fromAminoMsg(object: _71.QueryVotesRequestAminoMsg): _71.QueryVotesRequest;
                toAminoMsg(message: _71.QueryVotesRequest): _71.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _71.QueryVotesRequestProtoMsg): _71.QueryVotesRequest;
                toProto(message: _71.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _71.QueryVotesRequest): _71.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _71.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryVotesResponse;
                fromPartial(object: Partial<_71.QueryVotesResponse>): _71.QueryVotesResponse;
                fromAmino(object: _71.QueryVotesResponseAmino): _71.QueryVotesResponse;
                toAmino(message: _71.QueryVotesResponse): _71.QueryVotesResponseAmino;
                fromAminoMsg(object: _71.QueryVotesResponseAminoMsg): _71.QueryVotesResponse;
                toAminoMsg(message: _71.QueryVotesResponse): _71.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _71.QueryVotesResponseProtoMsg): _71.QueryVotesResponse;
                toProto(message: _71.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _71.QueryVotesResponse): _71.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _71.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryParamsRequest;
                fromPartial(object: Partial<_71.QueryParamsRequest>): _71.QueryParamsRequest;
                fromAmino(object: _71.QueryParamsRequestAmino): _71.QueryParamsRequest;
                toAmino(message: _71.QueryParamsRequest): _71.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _71.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDepositRequest;
                fromPartial(object: Partial<_71.QueryDepositRequest>): _71.QueryDepositRequest;
                fromAmino(object: _71.QueryDepositRequestAmino): _71.QueryDepositRequest;
                toAmino(message: _71.QueryDepositRequest): _71.QueryDepositRequestAmino;
                fromAminoMsg(object: _71.QueryDepositRequestAminoMsg): _71.QueryDepositRequest;
                toAminoMsg(message: _71.QueryDepositRequest): _71.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _71.QueryDepositRequestProtoMsg): _71.QueryDepositRequest;
                toProto(message: _71.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _71.QueryDepositRequest): _71.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _71.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDepositResponse;
                fromPartial(object: Partial<_71.QueryDepositResponse>): _71.QueryDepositResponse;
                fromAmino(object: _71.QueryDepositResponseAmino): _71.QueryDepositResponse;
                toAmino(message: _71.QueryDepositResponse): _71.QueryDepositResponseAmino;
                fromAminoMsg(object: _71.QueryDepositResponseAminoMsg): _71.QueryDepositResponse;
                toAminoMsg(message: _71.QueryDepositResponse): _71.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _71.QueryDepositResponseProtoMsg): _71.QueryDepositResponse;
                toProto(message: _71.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _71.QueryDepositResponse): _71.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _71.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDepositsRequest;
                fromPartial(object: Partial<_71.QueryDepositsRequest>): _71.QueryDepositsRequest;
                fromAmino(object: _71.QueryDepositsRequestAmino): _71.QueryDepositsRequest;
                toAmino(message: _71.QueryDepositsRequest): _71.QueryDepositsRequestAmino;
                fromAminoMsg(object: _71.QueryDepositsRequestAminoMsg): _71.QueryDepositsRequest;
                toAminoMsg(message: _71.QueryDepositsRequest): _71.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryDepositsRequestProtoMsg): _71.QueryDepositsRequest;
                toProto(message: _71.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryDepositsRequest): _71.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _71.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDepositsResponse;
                fromPartial(object: Partial<_71.QueryDepositsResponse>): _71.QueryDepositsResponse;
                fromAmino(object: _71.QueryDepositsResponseAmino): _71.QueryDepositsResponse;
                toAmino(message: _71.QueryDepositsResponse): _71.QueryDepositsResponseAmino;
                fromAminoMsg(object: _71.QueryDepositsResponseAminoMsg): _71.QueryDepositsResponse;
                toAminoMsg(message: _71.QueryDepositsResponse): _71.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryDepositsResponseProtoMsg): _71.QueryDepositsResponse;
                toProto(message: _71.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryDepositsResponse): _71.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _71.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryTallyResultRequest;
                fromPartial(object: Partial<_71.QueryTallyResultRequest>): _71.QueryTallyResultRequest;
                fromAmino(object: _71.QueryTallyResultRequestAmino): _71.QueryTallyResultRequest;
                toAmino(message: _71.QueryTallyResultRequest): _71.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _71.QueryTallyResultRequestAminoMsg): _71.QueryTallyResultRequest;
                toAminoMsg(message: _71.QueryTallyResultRequest): _71.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _71.QueryTallyResultRequestProtoMsg): _71.QueryTallyResultRequest;
                toProto(message: _71.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _71.QueryTallyResultRequest): _71.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _71.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryTallyResultResponse;
                fromPartial(object: Partial<_71.QueryTallyResultResponse>): _71.QueryTallyResultResponse;
                fromAmino(object: _71.QueryTallyResultResponseAmino): _71.QueryTallyResultResponse;
                toAmino(message: _71.QueryTallyResultResponse): _71.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _71.QueryTallyResultResponseAminoMsg): _71.QueryTallyResultResponse;
                toAminoMsg(message: _71.QueryTallyResultResponse): _71.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _71.QueryTallyResultResponseProtoMsg): _71.QueryTallyResultResponse;
                toProto(message: _71.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _71.QueryTallyResultResponse): _71.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _70.VoteOption;
            voteOptionToJSON(object: _70.VoteOption): string;
            proposalStatusFromJSON(object: any): _70.ProposalStatus;
            proposalStatusToJSON(object: _70.ProposalStatus): string;
            VoteOption: typeof _70.VoteOption;
            VoteOptionSDKType: typeof _70.VoteOption;
            VoteOptionAmino: typeof _70.VoteOption;
            ProposalStatus: typeof _70.ProposalStatus;
            ProposalStatusSDKType: typeof _70.ProposalStatus;
            ProposalStatusAmino: typeof _70.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _70.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.WeightedVoteOption;
                fromPartial(object: Partial<_70.WeightedVoteOption>): _70.WeightedVoteOption;
                fromAmino(object: _70.WeightedVoteOptionAmino): _70.WeightedVoteOption;
                toAmino(message: _70.WeightedVoteOption): _70.WeightedVoteOptionAmino;
                fromAminoMsg(object: _70.WeightedVoteOptionAminoMsg): _70.WeightedVoteOption;
                toAminoMsg(message: _70.WeightedVoteOption): _70.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _70.WeightedVoteOptionProtoMsg): _70.WeightedVoteOption;
                toProto(message: _70.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _70.WeightedVoteOption): _70.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _70.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.TextProposal;
                fromPartial(object: Partial<_70.TextProposal>): _70.TextProposal;
                fromAmino(object: _70.TextProposalAmino): _70.TextProposal;
                toAmino(message: _70.TextProposal): _70.TextProposalAmino;
                fromAminoMsg(object: _70.TextProposalAminoMsg): _70.TextProposal;
                toAminoMsg(message: _70.TextProposal): _70.TextProposalAminoMsg;
                fromProtoMsg(message: _70.TextProposalProtoMsg): _70.TextProposal;
                toProto(message: _70.TextProposal): Uint8Array;
                toProtoMsg(message: _70.TextProposal): _70.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _70.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Deposit;
                fromPartial(object: Partial<_70.Deposit>): _70.Deposit;
                fromAmino(object: _70.DepositAmino): _70.Deposit;
                toAmino(message: _70.Deposit): _70.DepositAmino;
                fromAminoMsg(object: _70.DepositAminoMsg): _70.Deposit;
                toAminoMsg(message: _70.Deposit): _70.DepositAminoMsg;
                fromProtoMsg(message: _70.DepositProtoMsg): _70.Deposit;
                toProto(message: _70.Deposit): Uint8Array;
                toProtoMsg(message: _70.Deposit): _70.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _70.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Proposal;
                fromPartial(object: Partial<_70.Proposal>): _70.Proposal;
                fromAmino(object: _70.ProposalAmino): _70.Proposal;
                toAmino(message: _70.Proposal): _70.ProposalAmino;
                fromAminoMsg(object: _70.ProposalAminoMsg): _70.Proposal;
                toAminoMsg(message: _70.Proposal): _70.ProposalAminoMsg;
                fromProtoMsg(message: _70.ProposalProtoMsg): _70.Proposal;
                toProto(message: _70.Proposal): Uint8Array;
                toProtoMsg(message: _70.Proposal): _70.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _70.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.TallyResult;
                fromPartial(object: Partial<_70.TallyResult>): _70.TallyResult;
                fromAmino(object: _70.TallyResultAmino): _70.TallyResult;
                toAmino(message: _70.TallyResult): _70.TallyResultAmino;
                fromAminoMsg(object: _70.TallyResultAminoMsg): _70.TallyResult;
                toAminoMsg(message: _70.TallyResult): _70.TallyResultAminoMsg;
                fromProtoMsg(message: _70.TallyResultProtoMsg): _70.TallyResult;
                toProto(message: _70.TallyResult): Uint8Array;
                toProtoMsg(message: _70.TallyResult): _70.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _70.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Vote;
                fromPartial(object: Partial<_70.Vote>): _70.Vote;
                fromAmino(object: _70.VoteAmino): _70.Vote;
                toAmino(message: _70.Vote): _70.VoteAmino;
                fromAminoMsg(object: _70.VoteAminoMsg): _70.Vote;
                toAminoMsg(message: _70.Vote): _70.VoteAminoMsg;
                fromProtoMsg(message: _70.VoteProtoMsg): _70.Vote;
                toProto(message: _70.Vote): Uint8Array;
                toProtoMsg(message: _70.Vote): _70.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _70.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.DepositParams;
                fromPartial(object: Partial<_70.DepositParams>): _70.DepositParams;
                fromAmino(object: _70.DepositParamsAmino): _70.DepositParams;
                toAmino(message: _70.DepositParams): _70.DepositParamsAmino;
                fromAminoMsg(object: _70.DepositParamsAminoMsg): _70.DepositParams;
                toAminoMsg(message: _70.DepositParams): _70.DepositParamsAminoMsg;
                fromProtoMsg(message: _70.DepositParamsProtoMsg): _70.DepositParams;
                toProto(message: _70.DepositParams): Uint8Array;
                toProtoMsg(message: _70.DepositParams): _70.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _70.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.VotingParams;
                fromPartial(object: Partial<_70.VotingParams>): _70.VotingParams;
                fromAmino(object: _70.VotingParamsAmino): _70.VotingParams;
                toAmino(message: _70.VotingParams): _70.VotingParamsAmino;
                fromAminoMsg(object: _70.VotingParamsAminoMsg): _70.VotingParams;
                toAminoMsg(message: _70.VotingParams): _70.VotingParamsAminoMsg;
                fromProtoMsg(message: _70.VotingParamsProtoMsg): _70.VotingParams;
                toProto(message: _70.VotingParams): Uint8Array;
                toProtoMsg(message: _70.VotingParams): _70.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _70.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.TallyParams;
                fromPartial(object: Partial<_70.TallyParams>): _70.TallyParams;
                fromAmino(object: _70.TallyParamsAmino): _70.TallyParams;
                toAmino(message: _70.TallyParams): _70.TallyParamsAmino;
                fromAminoMsg(object: _70.TallyParamsAminoMsg): _70.TallyParams;
                toAminoMsg(message: _70.TallyParams): _70.TallyParamsAminoMsg;
                fromProtoMsg(message: _70.TallyParamsProtoMsg): _70.TallyParams;
                toProto(message: _70.TallyParams): Uint8Array;
                toProtoMsg(message: _70.TallyParams): _70.TallyParamsProtoMsg;
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
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _194.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                inflation(request?: _75.QueryInflationRequest): Promise<_75.QueryInflationResponse>;
                annualProvisions(request?: _75.QueryAnnualProvisionsRequest): Promise<_75.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _179.LCDQueryClient;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _75.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.QueryInflationRequest;
                fromPartial(_: Partial<_75.QueryInflationRequest>): _75.QueryInflationRequest;
                fromAmino(_: _75.QueryInflationRequestAmino): _75.QueryInflationRequest;
                toAmino(_: _75.QueryInflationRequest): _75.QueryInflationRequestAmino;
                fromAminoMsg(object: _75.QueryInflationRequestAminoMsg): _75.QueryInflationRequest;
                toAminoMsg(message: _75.QueryInflationRequest): _75.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _75.QueryInflationRequestProtoMsg): _75.QueryInflationRequest;
                toProto(message: _75.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _75.QueryInflationRequest): _75.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _75.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryInflationResponse;
                fromPartial(object: Partial<_75.QueryInflationResponse>): _75.QueryInflationResponse;
                fromAmino(object: _75.QueryInflationResponseAmino): _75.QueryInflationResponse;
                toAmino(message: _75.QueryInflationResponse): _75.QueryInflationResponseAmino;
                fromAminoMsg(object: _75.QueryInflationResponseAminoMsg): _75.QueryInflationResponse;
                toAminoMsg(message: _75.QueryInflationResponse): _75.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _75.QueryInflationResponseProtoMsg): _75.QueryInflationResponse;
                toProto(message: _75.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _75.QueryInflationResponse): _75.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _75.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_75.QueryAnnualProvisionsRequest>): _75.QueryAnnualProvisionsRequest;
                fromAmino(_: _75.QueryAnnualProvisionsRequestAmino): _75.QueryAnnualProvisionsRequest;
                toAmino(_: _75.QueryAnnualProvisionsRequest): _75.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _75.QueryAnnualProvisionsRequestAminoMsg): _75.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _75.QueryAnnualProvisionsRequest): _75.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _75.QueryAnnualProvisionsRequestProtoMsg): _75.QueryAnnualProvisionsRequest;
                toProto(message: _75.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _75.QueryAnnualProvisionsRequest): _75.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _75.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_75.QueryAnnualProvisionsResponse>): _75.QueryAnnualProvisionsResponse;
                fromAmino(object: _75.QueryAnnualProvisionsResponseAmino): _75.QueryAnnualProvisionsResponse;
                toAmino(message: _75.QueryAnnualProvisionsResponse): _75.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _75.QueryAnnualProvisionsResponseAminoMsg): _75.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _75.QueryAnnualProvisionsResponse): _75.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _75.QueryAnnualProvisionsResponseProtoMsg): _75.QueryAnnualProvisionsResponse;
                toProto(message: _75.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _75.QueryAnnualProvisionsResponse): _75.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _74.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.Minter;
                fromPartial(object: Partial<_74.Minter>): _74.Minter;
                fromAmino(object: _74.MinterAmino): _74.Minter;
                toAmino(message: _74.Minter): _74.MinterAmino;
                fromAminoMsg(object: _74.MinterAminoMsg): _74.Minter;
                toAminoMsg(message: _74.Minter): _74.MinterAminoMsg;
                fromProtoMsg(message: _74.MinterProtoMsg): _74.Minter;
                toProto(message: _74.Minter): Uint8Array;
                toProtoMsg(message: _74.Minter): _74.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _74.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.Params;
                fromPartial(object: Partial<_74.Params>): _74.Params;
                fromAmino(object: _74.ParamsAmino): _74.Params;
                toAmino(message: _74.Params): _74.ParamsAmino;
                fromAminoMsg(object: _74.ParamsAminoMsg): _74.Params;
                toAminoMsg(message: _74.Params): _74.ParamsAminoMsg;
                fromProtoMsg(message: _74.ParamsProtoMsg): _74.Params;
                toProto(message: _74.Params): Uint8Array;
                toProtoMsg(message: _74.Params): _74.ParamsProtoMsg;
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
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _195.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _180.LCDQueryClient;
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
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _76.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.ParameterChangeProposal;
                fromPartial(object: Partial<_76.ParameterChangeProposal>): _76.ParameterChangeProposal;
                fromAmino(object: _76.ParameterChangeProposalAmino): _76.ParameterChangeProposal;
                toAmino(message: _76.ParameterChangeProposal): _76.ParameterChangeProposalAmino;
                fromAminoMsg(object: _76.ParameterChangeProposalAminoMsg): _76.ParameterChangeProposal;
                toAminoMsg(message: _76.ParameterChangeProposal): _76.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _76.ParameterChangeProposalProtoMsg): _76.ParameterChangeProposal;
                toProto(message: _76.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _76.ParameterChangeProposal): _76.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _76.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.ParamChange;
                fromPartial(object: Partial<_76.ParamChange>): _76.ParamChange;
                fromAmino(object: _76.ParamChangeAmino): _76.ParamChange;
                toAmino(message: _76.ParamChange): _76.ParamChangeAmino;
                fromAminoMsg(object: _76.ParamChangeAminoMsg): _76.ParamChange;
                toAminoMsg(message: _76.ParamChange): _76.ParamChangeAminoMsg;
                fromProtoMsg(message: _76.ParamChangeProtoMsg): _76.ParamChange;
                toProto(message: _76.ParamChange): Uint8Array;
                toProtoMsg(message: _76.ParamChange): _76.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _207.MsgClientImpl;
            QueryClientImpl: typeof _196.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                signingInfo(request: _79.QuerySigningInfoRequest): Promise<_79.QuerySigningInfoResponse>;
                signingInfos(request?: _79.QuerySigningInfosRequest): Promise<_79.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _181.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _81.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _81.MsgUnjail): {
                        typeUrl: string;
                        value: _81.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _81.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _81.MsgUnjail): {
                        typeUrl: string;
                        value: _81.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _81.MsgUnjail) => _81.MsgUnjailAmino;
                    fromAmino: (object: _81.MsgUnjailAmino) => _81.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _81.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgUnjail;
                fromPartial(object: Partial<_81.MsgUnjail>): _81.MsgUnjail;
                fromAmino(object: _81.MsgUnjailAmino): _81.MsgUnjail;
                toAmino(message: _81.MsgUnjail): _81.MsgUnjailAmino;
                fromAminoMsg(object: _81.MsgUnjailAminoMsg): _81.MsgUnjail;
                toAminoMsg(message: _81.MsgUnjail): _81.MsgUnjailAminoMsg;
                fromProtoMsg(message: _81.MsgUnjailProtoMsg): _81.MsgUnjail;
                toProto(message: _81.MsgUnjail): Uint8Array;
                toProtoMsg(message: _81.MsgUnjail): _81.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _81.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.MsgUnjailResponse;
                fromPartial(_: Partial<_81.MsgUnjailResponse>): _81.MsgUnjailResponse;
                fromAmino(_: _81.MsgUnjailResponseAmino): _81.MsgUnjailResponse;
                toAmino(_: _81.MsgUnjailResponse): _81.MsgUnjailResponseAmino;
                fromAminoMsg(object: _81.MsgUnjailResponseAminoMsg): _81.MsgUnjailResponse;
                toAminoMsg(message: _81.MsgUnjailResponse): _81.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _81.MsgUnjailResponseProtoMsg): _81.MsgUnjailResponse;
                toProto(message: _81.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _81.MsgUnjailResponse): _81.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _80.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.ValidatorSigningInfo;
                fromPartial(object: Partial<_80.ValidatorSigningInfo>): _80.ValidatorSigningInfo;
                fromAmino(object: _80.ValidatorSigningInfoAmino): _80.ValidatorSigningInfo;
                toAmino(message: _80.ValidatorSigningInfo): _80.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _80.ValidatorSigningInfoAminoMsg): _80.ValidatorSigningInfo;
                toAminoMsg(message: _80.ValidatorSigningInfo): _80.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _80.ValidatorSigningInfoProtoMsg): _80.ValidatorSigningInfo;
                toProto(message: _80.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _80.ValidatorSigningInfo): _80.ValidatorSigningInfoProtoMsg;
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
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _79.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _79.QueryParamsRequest;
                fromPartial(_: Partial<_79.QueryParamsRequest>): _79.QueryParamsRequest;
                fromAmino(_: _79.QueryParamsRequestAmino): _79.QueryParamsRequest;
                toAmino(_: _79.QueryParamsRequest): _79.QueryParamsRequestAmino;
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
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _79.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QuerySigningInfoRequest;
                fromPartial(object: Partial<_79.QuerySigningInfoRequest>): _79.QuerySigningInfoRequest;
                fromAmino(object: _79.QuerySigningInfoRequestAmino): _79.QuerySigningInfoRequest;
                toAmino(message: _79.QuerySigningInfoRequest): _79.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _79.QuerySigningInfoRequestAminoMsg): _79.QuerySigningInfoRequest;
                toAminoMsg(message: _79.QuerySigningInfoRequest): _79.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _79.QuerySigningInfoRequestProtoMsg): _79.QuerySigningInfoRequest;
                toProto(message: _79.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _79.QuerySigningInfoRequest): _79.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _79.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QuerySigningInfoResponse;
                fromPartial(object: Partial<_79.QuerySigningInfoResponse>): _79.QuerySigningInfoResponse;
                fromAmino(object: _79.QuerySigningInfoResponseAmino): _79.QuerySigningInfoResponse;
                toAmino(message: _79.QuerySigningInfoResponse): _79.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _79.QuerySigningInfoResponseAminoMsg): _79.QuerySigningInfoResponse;
                toAminoMsg(message: _79.QuerySigningInfoResponse): _79.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _79.QuerySigningInfoResponseProtoMsg): _79.QuerySigningInfoResponse;
                toProto(message: _79.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _79.QuerySigningInfoResponse): _79.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _79.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QuerySigningInfosRequest;
                fromPartial(object: Partial<_79.QuerySigningInfosRequest>): _79.QuerySigningInfosRequest;
                fromAmino(object: _79.QuerySigningInfosRequestAmino): _79.QuerySigningInfosRequest;
                toAmino(message: _79.QuerySigningInfosRequest): _79.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _79.QuerySigningInfosRequestAminoMsg): _79.QuerySigningInfosRequest;
                toAminoMsg(message: _79.QuerySigningInfosRequest): _79.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _79.QuerySigningInfosRequestProtoMsg): _79.QuerySigningInfosRequest;
                toProto(message: _79.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _79.QuerySigningInfosRequest): _79.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _79.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QuerySigningInfosResponse;
                fromPartial(object: Partial<_79.QuerySigningInfosResponse>): _79.QuerySigningInfosResponse;
                fromAmino(object: _79.QuerySigningInfosResponseAmino): _79.QuerySigningInfosResponse;
                toAmino(message: _79.QuerySigningInfosResponse): _79.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _79.QuerySigningInfosResponseAminoMsg): _79.QuerySigningInfosResponse;
                toAminoMsg(message: _79.QuerySigningInfosResponse): _79.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _79.QuerySigningInfosResponseProtoMsg): _79.QuerySigningInfosResponse;
                toProto(message: _79.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _79.QuerySigningInfosResponse): _79.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _78.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.SigningInfo;
                fromPartial(object: Partial<_78.SigningInfo>): _78.SigningInfo;
                fromAmino(object: _78.SigningInfoAmino): _78.SigningInfo;
                toAmino(message: _78.SigningInfo): _78.SigningInfoAmino;
                fromAminoMsg(object: _78.SigningInfoAminoMsg): _78.SigningInfo;
                toAminoMsg(message: _78.SigningInfo): _78.SigningInfoAminoMsg;
                fromProtoMsg(message: _78.SigningInfoProtoMsg): _78.SigningInfo;
                toProto(message: _78.SigningInfo): Uint8Array;
                toProtoMsg(message: _78.SigningInfo): _78.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _78.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.ValidatorMissedBlocks;
                fromPartial(object: Partial<_78.ValidatorMissedBlocks>): _78.ValidatorMissedBlocks;
                fromAmino(object: _78.ValidatorMissedBlocksAmino): _78.ValidatorMissedBlocks;
                toAmino(message: _78.ValidatorMissedBlocks): _78.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _78.ValidatorMissedBlocksAminoMsg): _78.ValidatorMissedBlocks;
                toAminoMsg(message: _78.ValidatorMissedBlocks): _78.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _78.ValidatorMissedBlocksProtoMsg): _78.ValidatorMissedBlocks;
                toProto(message: _78.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _78.ValidatorMissedBlocks): _78.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _78.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MissedBlock;
                fromPartial(object: Partial<_78.MissedBlock>): _78.MissedBlock;
                fromAmino(object: _78.MissedBlockAmino): _78.MissedBlock;
                toAmino(message: _78.MissedBlock): _78.MissedBlockAmino;
                fromAminoMsg(object: _78.MissedBlockAminoMsg): _78.MissedBlock;
                toAminoMsg(message: _78.MissedBlock): _78.MissedBlockAminoMsg;
                fromProtoMsg(message: _78.MissedBlockProtoMsg): _78.MissedBlock;
                toProto(message: _78.MissedBlock): Uint8Array;
                toProtoMsg(message: _78.MissedBlock): _78.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _208.MsgClientImpl;
            QueryClientImpl: typeof _197.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _84.QueryValidatorsRequest): Promise<_84.QueryValidatorsResponse>;
                validator(request: _84.QueryValidatorRequest): Promise<_84.QueryValidatorResponse>;
                validatorDelegations(request: _84.QueryValidatorDelegationsRequest): Promise<_84.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _84.QueryValidatorUnbondingDelegationsRequest): Promise<_84.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _84.QueryDelegationRequest): Promise<_84.QueryDelegationResponse>;
                unbondingDelegation(request: _84.QueryUnbondingDelegationRequest): Promise<_84.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _84.QueryDelegatorDelegationsRequest): Promise<_84.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _84.QueryDelegatorUnbondingDelegationsRequest): Promise<_84.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _84.QueryRedelegationsRequest): Promise<_84.QueryRedelegationsResponse>;
                delegatorValidators(request: _84.QueryDelegatorValidatorsRequest): Promise<_84.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _84.QueryDelegatorValidatorRequest): Promise<_84.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _84.QueryHistoricalInfoRequest): Promise<_84.QueryHistoricalInfoResponse>;
                pool(request?: _84.QueryPoolRequest): Promise<_84.QueryPoolResponse>;
                params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _182.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _86.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _86.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _86.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _86.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _86.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _86.MsgCreateValidator): {
                        typeUrl: string;
                        value: _86.MsgCreateValidator;
                    };
                    editValidator(value: _86.MsgEditValidator): {
                        typeUrl: string;
                        value: _86.MsgEditValidator;
                    };
                    delegate(value: _86.MsgDelegate): {
                        typeUrl: string;
                        value: _86.MsgDelegate;
                    };
                    beginRedelegate(value: _86.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _86.MsgBeginRedelegate;
                    };
                    undelegate(value: _86.MsgUndelegate): {
                        typeUrl: string;
                        value: _86.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _86.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _86.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _86.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _86.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _86.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _86.MsgCreateValidator): {
                        typeUrl: string;
                        value: _86.MsgCreateValidator;
                    };
                    editValidator(value: _86.MsgEditValidator): {
                        typeUrl: string;
                        value: _86.MsgEditValidator;
                    };
                    delegate(value: _86.MsgDelegate): {
                        typeUrl: string;
                        value: _86.MsgDelegate;
                    };
                    beginRedelegate(value: _86.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _86.MsgBeginRedelegate;
                    };
                    undelegate(value: _86.MsgUndelegate): {
                        typeUrl: string;
                        value: _86.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _86.MsgCreateValidator) => _86.MsgCreateValidatorAmino;
                    fromAmino: (object: _86.MsgCreateValidatorAmino) => _86.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _86.MsgEditValidator) => _86.MsgEditValidatorAmino;
                    fromAmino: (object: _86.MsgEditValidatorAmino) => _86.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _86.MsgDelegate) => _86.MsgDelegateAmino;
                    fromAmino: (object: _86.MsgDelegateAmino) => _86.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _86.MsgBeginRedelegate) => _86.MsgBeginRedelegateAmino;
                    fromAmino: (object: _86.MsgBeginRedelegateAmino) => _86.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _86.MsgUndelegate) => _86.MsgUndelegateAmino;
                    fromAmino: (object: _86.MsgUndelegateAmino) => _86.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _86.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgCreateValidator;
                fromPartial(object: Partial<_86.MsgCreateValidator>): _86.MsgCreateValidator;
                fromAmino(object: _86.MsgCreateValidatorAmino): _86.MsgCreateValidator;
                toAmino(message: _86.MsgCreateValidator): _86.MsgCreateValidatorAmino;
                fromAminoMsg(object: _86.MsgCreateValidatorAminoMsg): _86.MsgCreateValidator;
                toAminoMsg(message: _86.MsgCreateValidator): _86.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _86.MsgCreateValidatorProtoMsg): _86.MsgCreateValidator;
                toProto(message: _86.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _86.MsgCreateValidator): _86.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _86.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_86.MsgCreateValidatorResponse>): _86.MsgCreateValidatorResponse;
                fromAmino(_: _86.MsgCreateValidatorResponseAmino): _86.MsgCreateValidatorResponse;
                toAmino(_: _86.MsgCreateValidatorResponse): _86.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _86.MsgCreateValidatorResponseAminoMsg): _86.MsgCreateValidatorResponse;
                toAminoMsg(message: _86.MsgCreateValidatorResponse): _86.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _86.MsgCreateValidatorResponseProtoMsg): _86.MsgCreateValidatorResponse;
                toProto(message: _86.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _86.MsgCreateValidatorResponse): _86.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _86.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgEditValidator;
                fromPartial(object: Partial<_86.MsgEditValidator>): _86.MsgEditValidator;
                fromAmino(object: _86.MsgEditValidatorAmino): _86.MsgEditValidator;
                toAmino(message: _86.MsgEditValidator): _86.MsgEditValidatorAmino;
                fromAminoMsg(object: _86.MsgEditValidatorAminoMsg): _86.MsgEditValidator;
                toAminoMsg(message: _86.MsgEditValidator): _86.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _86.MsgEditValidatorProtoMsg): _86.MsgEditValidator;
                toProto(message: _86.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _86.MsgEditValidator): _86.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _86.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgEditValidatorResponse;
                fromPartial(_: Partial<_86.MsgEditValidatorResponse>): _86.MsgEditValidatorResponse;
                fromAmino(_: _86.MsgEditValidatorResponseAmino): _86.MsgEditValidatorResponse;
                toAmino(_: _86.MsgEditValidatorResponse): _86.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _86.MsgEditValidatorResponseAminoMsg): _86.MsgEditValidatorResponse;
                toAminoMsg(message: _86.MsgEditValidatorResponse): _86.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _86.MsgEditValidatorResponseProtoMsg): _86.MsgEditValidatorResponse;
                toProto(message: _86.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _86.MsgEditValidatorResponse): _86.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _86.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgDelegate;
                fromPartial(object: Partial<_86.MsgDelegate>): _86.MsgDelegate;
                fromAmino(object: _86.MsgDelegateAmino): _86.MsgDelegate;
                toAmino(message: _86.MsgDelegate): _86.MsgDelegateAmino;
                fromAminoMsg(object: _86.MsgDelegateAminoMsg): _86.MsgDelegate;
                toAminoMsg(message: _86.MsgDelegate): _86.MsgDelegateAminoMsg;
                fromProtoMsg(message: _86.MsgDelegateProtoMsg): _86.MsgDelegate;
                toProto(message: _86.MsgDelegate): Uint8Array;
                toProtoMsg(message: _86.MsgDelegate): _86.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _86.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgDelegateResponse;
                fromPartial(_: Partial<_86.MsgDelegateResponse>): _86.MsgDelegateResponse;
                fromAmino(_: _86.MsgDelegateResponseAmino): _86.MsgDelegateResponse;
                toAmino(_: _86.MsgDelegateResponse): _86.MsgDelegateResponseAmino;
                fromAminoMsg(object: _86.MsgDelegateResponseAminoMsg): _86.MsgDelegateResponse;
                toAminoMsg(message: _86.MsgDelegateResponse): _86.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _86.MsgDelegateResponseProtoMsg): _86.MsgDelegateResponse;
                toProto(message: _86.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _86.MsgDelegateResponse): _86.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _86.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgBeginRedelegate;
                fromPartial(object: Partial<_86.MsgBeginRedelegate>): _86.MsgBeginRedelegate;
                fromAmino(object: _86.MsgBeginRedelegateAmino): _86.MsgBeginRedelegate;
                toAmino(message: _86.MsgBeginRedelegate): _86.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _86.MsgBeginRedelegateAminoMsg): _86.MsgBeginRedelegate;
                toAminoMsg(message: _86.MsgBeginRedelegate): _86.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _86.MsgBeginRedelegateProtoMsg): _86.MsgBeginRedelegate;
                toProto(message: _86.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _86.MsgBeginRedelegate): _86.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _86.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_86.MsgBeginRedelegateResponse>): _86.MsgBeginRedelegateResponse;
                fromAmino(object: _86.MsgBeginRedelegateResponseAmino): _86.MsgBeginRedelegateResponse;
                toAmino(message: _86.MsgBeginRedelegateResponse): _86.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _86.MsgBeginRedelegateResponseAminoMsg): _86.MsgBeginRedelegateResponse;
                toAminoMsg(message: _86.MsgBeginRedelegateResponse): _86.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _86.MsgBeginRedelegateResponseProtoMsg): _86.MsgBeginRedelegateResponse;
                toProto(message: _86.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _86.MsgBeginRedelegateResponse): _86.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _86.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgUndelegate;
                fromPartial(object: Partial<_86.MsgUndelegate>): _86.MsgUndelegate;
                fromAmino(object: _86.MsgUndelegateAmino): _86.MsgUndelegate;
                toAmino(message: _86.MsgUndelegate): _86.MsgUndelegateAmino;
                fromAminoMsg(object: _86.MsgUndelegateAminoMsg): _86.MsgUndelegate;
                toAminoMsg(message: _86.MsgUndelegate): _86.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _86.MsgUndelegateProtoMsg): _86.MsgUndelegate;
                toProto(message: _86.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _86.MsgUndelegate): _86.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _86.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgUndelegateResponse;
                fromPartial(object: Partial<_86.MsgUndelegateResponse>): _86.MsgUndelegateResponse;
                fromAmino(object: _86.MsgUndelegateResponseAmino): _86.MsgUndelegateResponse;
                toAmino(message: _86.MsgUndelegateResponse): _86.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _86.MsgUndelegateResponseAminoMsg): _86.MsgUndelegateResponse;
                toAminoMsg(message: _86.MsgUndelegateResponse): _86.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _86.MsgUndelegateResponseProtoMsg): _86.MsgUndelegateResponse;
                toProto(message: _86.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _86.MsgUndelegateResponse): _86.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _85.BondStatus;
            bondStatusToJSON(object: _85.BondStatus): string;
            BondStatus: typeof _85.BondStatus;
            BondStatusSDKType: typeof _85.BondStatus;
            BondStatusAmino: typeof _85.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _85.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.HistoricalInfo;
                fromPartial(object: Partial<_85.HistoricalInfo>): _85.HistoricalInfo;
                fromAmino(object: _85.HistoricalInfoAmino): _85.HistoricalInfo;
                toAmino(message: _85.HistoricalInfo): _85.HistoricalInfoAmino;
                fromAminoMsg(object: _85.HistoricalInfoAminoMsg): _85.HistoricalInfo;
                toAminoMsg(message: _85.HistoricalInfo): _85.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _85.HistoricalInfoProtoMsg): _85.HistoricalInfo;
                toProto(message: _85.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _85.HistoricalInfo): _85.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _85.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.CommissionRates;
                fromPartial(object: Partial<_85.CommissionRates>): _85.CommissionRates;
                fromAmino(object: _85.CommissionRatesAmino): _85.CommissionRates;
                toAmino(message: _85.CommissionRates): _85.CommissionRatesAmino;
                fromAminoMsg(object: _85.CommissionRatesAminoMsg): _85.CommissionRates;
                toAminoMsg(message: _85.CommissionRates): _85.CommissionRatesAminoMsg;
                fromProtoMsg(message: _85.CommissionRatesProtoMsg): _85.CommissionRates;
                toProto(message: _85.CommissionRates): Uint8Array;
                toProtoMsg(message: _85.CommissionRates): _85.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _85.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.Commission;
                fromPartial(object: Partial<_85.Commission>): _85.Commission;
                fromAmino(object: _85.CommissionAmino): _85.Commission;
                toAmino(message: _85.Commission): _85.CommissionAmino;
                fromAminoMsg(object: _85.CommissionAminoMsg): _85.Commission;
                toAminoMsg(message: _85.Commission): _85.CommissionAminoMsg;
                fromProtoMsg(message: _85.CommissionProtoMsg): _85.Commission;
                toProto(message: _85.Commission): Uint8Array;
                toProtoMsg(message: _85.Commission): _85.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _85.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.Description;
                fromPartial(object: Partial<_85.Description>): _85.Description;
                fromAmino(object: _85.DescriptionAmino): _85.Description;
                toAmino(message: _85.Description): _85.DescriptionAmino;
                fromAminoMsg(object: _85.DescriptionAminoMsg): _85.Description;
                toAminoMsg(message: _85.Description): _85.DescriptionAminoMsg;
                fromProtoMsg(message: _85.DescriptionProtoMsg): _85.Description;
                toProto(message: _85.Description): Uint8Array;
                toProtoMsg(message: _85.Description): _85.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _85.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.Validator;
                fromPartial(object: Partial<_85.Validator>): _85.Validator;
                fromAmino(object: _85.ValidatorAmino): _85.Validator;
                toAmino(message: _85.Validator): _85.ValidatorAmino;
                fromAminoMsg(object: _85.ValidatorAminoMsg): _85.Validator;
                toAminoMsg(message: _85.Validator): _85.ValidatorAminoMsg;
                fromProtoMsg(message: _85.ValidatorProtoMsg): _85.Validator;
                toProto(message: _85.Validator): Uint8Array;
                toProtoMsg(message: _85.Validator): _85.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _85.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.ValAddresses;
                fromPartial(object: Partial<_85.ValAddresses>): _85.ValAddresses;
                fromAmino(object: _85.ValAddressesAmino): _85.ValAddresses;
                toAmino(message: _85.ValAddresses): _85.ValAddressesAmino;
                fromAminoMsg(object: _85.ValAddressesAminoMsg): _85.ValAddresses;
                toAminoMsg(message: _85.ValAddresses): _85.ValAddressesAminoMsg;
                fromProtoMsg(message: _85.ValAddressesProtoMsg): _85.ValAddresses;
                toProto(message: _85.ValAddresses): Uint8Array;
                toProtoMsg(message: _85.ValAddresses): _85.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _85.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.DVPair;
                fromPartial(object: Partial<_85.DVPair>): _85.DVPair;
                fromAmino(object: _85.DVPairAmino): _85.DVPair;
                toAmino(message: _85.DVPair): _85.DVPairAmino;
                fromAminoMsg(object: _85.DVPairAminoMsg): _85.DVPair;
                toAminoMsg(message: _85.DVPair): _85.DVPairAminoMsg;
                fromProtoMsg(message: _85.DVPairProtoMsg): _85.DVPair;
                toProto(message: _85.DVPair): Uint8Array;
                toProtoMsg(message: _85.DVPair): _85.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _85.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.DVPairs;
                fromPartial(object: Partial<_85.DVPairs>): _85.DVPairs;
                fromAmino(object: _85.DVPairsAmino): _85.DVPairs;
                toAmino(message: _85.DVPairs): _85.DVPairsAmino;
                fromAminoMsg(object: _85.DVPairsAminoMsg): _85.DVPairs;
                toAminoMsg(message: _85.DVPairs): _85.DVPairsAminoMsg;
                fromProtoMsg(message: _85.DVPairsProtoMsg): _85.DVPairs;
                toProto(message: _85.DVPairs): Uint8Array;
                toProtoMsg(message: _85.DVPairs): _85.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _85.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.DVVTriplet;
                fromPartial(object: Partial<_85.DVVTriplet>): _85.DVVTriplet;
                fromAmino(object: _85.DVVTripletAmino): _85.DVVTriplet;
                toAmino(message: _85.DVVTriplet): _85.DVVTripletAmino;
                fromAminoMsg(object: _85.DVVTripletAminoMsg): _85.DVVTriplet;
                toAminoMsg(message: _85.DVVTriplet): _85.DVVTripletAminoMsg;
                fromProtoMsg(message: _85.DVVTripletProtoMsg): _85.DVVTriplet;
                toProto(message: _85.DVVTriplet): Uint8Array;
                toProtoMsg(message: _85.DVVTriplet): _85.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _85.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.DVVTriplets;
                fromPartial(object: Partial<_85.DVVTriplets>): _85.DVVTriplets;
                fromAmino(object: _85.DVVTripletsAmino): _85.DVVTriplets;
                toAmino(message: _85.DVVTriplets): _85.DVVTripletsAmino;
                fromAminoMsg(object: _85.DVVTripletsAminoMsg): _85.DVVTriplets;
                toAminoMsg(message: _85.DVVTriplets): _85.DVVTripletsAminoMsg;
                fromProtoMsg(message: _85.DVVTripletsProtoMsg): _85.DVVTriplets;
                toProto(message: _85.DVVTriplets): Uint8Array;
                toProtoMsg(message: _85.DVVTriplets): _85.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _85.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.Delegation;
                fromPartial(object: Partial<_85.Delegation>): _85.Delegation;
                fromAmino(object: _85.DelegationAmino): _85.Delegation;
                toAmino(message: _85.Delegation): _85.DelegationAmino;
                fromAminoMsg(object: _85.DelegationAminoMsg): _85.Delegation;
                toAminoMsg(message: _85.Delegation): _85.DelegationAminoMsg;
                fromProtoMsg(message: _85.DelegationProtoMsg): _85.Delegation;
                toProto(message: _85.Delegation): Uint8Array;
                toProtoMsg(message: _85.Delegation): _85.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _85.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.UnbondingDelegation;
                fromPartial(object: Partial<_85.UnbondingDelegation>): _85.UnbondingDelegation;
                fromAmino(object: _85.UnbondingDelegationAmino): _85.UnbondingDelegation;
                toAmino(message: _85.UnbondingDelegation): _85.UnbondingDelegationAmino;
                fromAminoMsg(object: _85.UnbondingDelegationAminoMsg): _85.UnbondingDelegation;
                toAminoMsg(message: _85.UnbondingDelegation): _85.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _85.UnbondingDelegationProtoMsg): _85.UnbondingDelegation;
                toProto(message: _85.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _85.UnbondingDelegation): _85.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _85.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.UnbondingDelegationEntry;
                fromPartial(object: Partial<_85.UnbondingDelegationEntry>): _85.UnbondingDelegationEntry;
                fromAmino(object: _85.UnbondingDelegationEntryAmino): _85.UnbondingDelegationEntry;
                toAmino(message: _85.UnbondingDelegationEntry): _85.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _85.UnbondingDelegationEntryAminoMsg): _85.UnbondingDelegationEntry;
                toAminoMsg(message: _85.UnbondingDelegationEntry): _85.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _85.UnbondingDelegationEntryProtoMsg): _85.UnbondingDelegationEntry;
                toProto(message: _85.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _85.UnbondingDelegationEntry): _85.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _85.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.RedelegationEntry;
                fromPartial(object: Partial<_85.RedelegationEntry>): _85.RedelegationEntry;
                fromAmino(object: _85.RedelegationEntryAmino): _85.RedelegationEntry;
                toAmino(message: _85.RedelegationEntry): _85.RedelegationEntryAmino;
                fromAminoMsg(object: _85.RedelegationEntryAminoMsg): _85.RedelegationEntry;
                toAminoMsg(message: _85.RedelegationEntry): _85.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _85.RedelegationEntryProtoMsg): _85.RedelegationEntry;
                toProto(message: _85.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _85.RedelegationEntry): _85.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _85.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.Redelegation;
                fromPartial(object: Partial<_85.Redelegation>): _85.Redelegation;
                fromAmino(object: _85.RedelegationAmino): _85.Redelegation;
                toAmino(message: _85.Redelegation): _85.RedelegationAmino;
                fromAminoMsg(object: _85.RedelegationAminoMsg): _85.Redelegation;
                toAminoMsg(message: _85.Redelegation): _85.RedelegationAminoMsg;
                fromProtoMsg(message: _85.RedelegationProtoMsg): _85.Redelegation;
                toProto(message: _85.Redelegation): Uint8Array;
                toProtoMsg(message: _85.Redelegation): _85.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _85.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.Params;
                fromPartial(object: Partial<_85.Params>): _85.Params;
                fromAmino(object: _85.ParamsAmino): _85.Params;
                toAmino(message: _85.Params): _85.ParamsAmino;
                fromAminoMsg(object: _85.ParamsAminoMsg): _85.Params;
                toAminoMsg(message: _85.Params): _85.ParamsAminoMsg;
                fromProtoMsg(message: _85.ParamsProtoMsg): _85.Params;
                toProto(message: _85.Params): Uint8Array;
                toProtoMsg(message: _85.Params): _85.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _85.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.DelegationResponse;
                fromPartial(object: Partial<_85.DelegationResponse>): _85.DelegationResponse;
                fromAmino(object: _85.DelegationResponseAmino): _85.DelegationResponse;
                toAmino(message: _85.DelegationResponse): _85.DelegationResponseAmino;
                fromAminoMsg(object: _85.DelegationResponseAminoMsg): _85.DelegationResponse;
                toAminoMsg(message: _85.DelegationResponse): _85.DelegationResponseAminoMsg;
                fromProtoMsg(message: _85.DelegationResponseProtoMsg): _85.DelegationResponse;
                toProto(message: _85.DelegationResponse): Uint8Array;
                toProtoMsg(message: _85.DelegationResponse): _85.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _85.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.RedelegationEntryResponse;
                fromPartial(object: Partial<_85.RedelegationEntryResponse>): _85.RedelegationEntryResponse;
                fromAmino(object: _85.RedelegationEntryResponseAmino): _85.RedelegationEntryResponse;
                toAmino(message: _85.RedelegationEntryResponse): _85.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _85.RedelegationEntryResponseAminoMsg): _85.RedelegationEntryResponse;
                toAminoMsg(message: _85.RedelegationEntryResponse): _85.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _85.RedelegationEntryResponseProtoMsg): _85.RedelegationEntryResponse;
                toProto(message: _85.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _85.RedelegationEntryResponse): _85.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _85.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.RedelegationResponse;
                fromPartial(object: Partial<_85.RedelegationResponse>): _85.RedelegationResponse;
                fromAmino(object: _85.RedelegationResponseAmino): _85.RedelegationResponse;
                toAmino(message: _85.RedelegationResponse): _85.RedelegationResponseAmino;
                fromAminoMsg(object: _85.RedelegationResponseAminoMsg): _85.RedelegationResponse;
                toAminoMsg(message: _85.RedelegationResponse): _85.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _85.RedelegationResponseProtoMsg): _85.RedelegationResponse;
                toProto(message: _85.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _85.RedelegationResponse): _85.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _85.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.Pool;
                fromPartial(object: Partial<_85.Pool>): _85.Pool;
                fromAmino(object: _85.PoolAmino): _85.Pool;
                toAmino(message: _85.Pool): _85.PoolAmino;
                fromAminoMsg(object: _85.PoolAminoMsg): _85.Pool;
                toAminoMsg(message: _85.Pool): _85.PoolAminoMsg;
                fromProtoMsg(message: _85.PoolProtoMsg): _85.Pool;
                toProto(message: _85.Pool): Uint8Array;
                toProtoMsg(message: _85.Pool): _85.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _84.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryValidatorsRequest;
                fromPartial(object: Partial<_84.QueryValidatorsRequest>): _84.QueryValidatorsRequest;
                fromAmino(object: _84.QueryValidatorsRequestAmino): _84.QueryValidatorsRequest;
                toAmino(message: _84.QueryValidatorsRequest): _84.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _84.QueryValidatorsRequestAminoMsg): _84.QueryValidatorsRequest;
                toAminoMsg(message: _84.QueryValidatorsRequest): _84.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorsRequestProtoMsg): _84.QueryValidatorsRequest;
                toProto(message: _84.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorsRequest): _84.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _84.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryValidatorsResponse;
                fromPartial(object: Partial<_84.QueryValidatorsResponse>): _84.QueryValidatorsResponse;
                fromAmino(object: _84.QueryValidatorsResponseAmino): _84.QueryValidatorsResponse;
                toAmino(message: _84.QueryValidatorsResponse): _84.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _84.QueryValidatorsResponseAminoMsg): _84.QueryValidatorsResponse;
                toAminoMsg(message: _84.QueryValidatorsResponse): _84.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorsResponseProtoMsg): _84.QueryValidatorsResponse;
                toProto(message: _84.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorsResponse): _84.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _84.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryValidatorRequest;
                fromPartial(object: Partial<_84.QueryValidatorRequest>): _84.QueryValidatorRequest;
                fromAmino(object: _84.QueryValidatorRequestAmino): _84.QueryValidatorRequest;
                toAmino(message: _84.QueryValidatorRequest): _84.QueryValidatorRequestAmino;
                fromAminoMsg(object: _84.QueryValidatorRequestAminoMsg): _84.QueryValidatorRequest;
                toAminoMsg(message: _84.QueryValidatorRequest): _84.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorRequestProtoMsg): _84.QueryValidatorRequest;
                toProto(message: _84.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorRequest): _84.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _84.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryValidatorResponse;
                fromPartial(object: Partial<_84.QueryValidatorResponse>): _84.QueryValidatorResponse;
                fromAmino(object: _84.QueryValidatorResponseAmino): _84.QueryValidatorResponse;
                toAmino(message: _84.QueryValidatorResponse): _84.QueryValidatorResponseAmino;
                fromAminoMsg(object: _84.QueryValidatorResponseAminoMsg): _84.QueryValidatorResponse;
                toAminoMsg(message: _84.QueryValidatorResponse): _84.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorResponseProtoMsg): _84.QueryValidatorResponse;
                toProto(message: _84.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorResponse): _84.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _84.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_84.QueryValidatorDelegationsRequest>): _84.QueryValidatorDelegationsRequest;
                fromAmino(object: _84.QueryValidatorDelegationsRequestAmino): _84.QueryValidatorDelegationsRequest;
                toAmino(message: _84.QueryValidatorDelegationsRequest): _84.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _84.QueryValidatorDelegationsRequestAminoMsg): _84.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _84.QueryValidatorDelegationsRequest): _84.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorDelegationsRequestProtoMsg): _84.QueryValidatorDelegationsRequest;
                toProto(message: _84.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorDelegationsRequest): _84.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _84.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_84.QueryValidatorDelegationsResponse>): _84.QueryValidatorDelegationsResponse;
                fromAmino(object: _84.QueryValidatorDelegationsResponseAmino): _84.QueryValidatorDelegationsResponse;
                toAmino(message: _84.QueryValidatorDelegationsResponse): _84.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _84.QueryValidatorDelegationsResponseAminoMsg): _84.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _84.QueryValidatorDelegationsResponse): _84.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorDelegationsResponseProtoMsg): _84.QueryValidatorDelegationsResponse;
                toProto(message: _84.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorDelegationsResponse): _84.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _84.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_84.QueryValidatorUnbondingDelegationsRequest>): _84.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _84.QueryValidatorUnbondingDelegationsRequestAmino): _84.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _84.QueryValidatorUnbondingDelegationsRequest): _84.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _84.QueryValidatorUnbondingDelegationsRequestAminoMsg): _84.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _84.QueryValidatorUnbondingDelegationsRequest): _84.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorUnbondingDelegationsRequestProtoMsg): _84.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _84.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorUnbondingDelegationsRequest): _84.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _84.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_84.QueryValidatorUnbondingDelegationsResponse>): _84.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _84.QueryValidatorUnbondingDelegationsResponseAmino): _84.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _84.QueryValidatorUnbondingDelegationsResponse): _84.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _84.QueryValidatorUnbondingDelegationsResponseAminoMsg): _84.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _84.QueryValidatorUnbondingDelegationsResponse): _84.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorUnbondingDelegationsResponseProtoMsg): _84.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _84.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorUnbondingDelegationsResponse): _84.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _84.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDelegationRequest;
                fromPartial(object: Partial<_84.QueryDelegationRequest>): _84.QueryDelegationRequest;
                fromAmino(object: _84.QueryDelegationRequestAmino): _84.QueryDelegationRequest;
                toAmino(message: _84.QueryDelegationRequest): _84.QueryDelegationRequestAmino;
                fromAminoMsg(object: _84.QueryDelegationRequestAminoMsg): _84.QueryDelegationRequest;
                toAminoMsg(message: _84.QueryDelegationRequest): _84.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _84.QueryDelegationRequestProtoMsg): _84.QueryDelegationRequest;
                toProto(message: _84.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDelegationRequest): _84.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _84.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDelegationResponse;
                fromPartial(object: Partial<_84.QueryDelegationResponse>): _84.QueryDelegationResponse;
                fromAmino(object: _84.QueryDelegationResponseAmino): _84.QueryDelegationResponse;
                toAmino(message: _84.QueryDelegationResponse): _84.QueryDelegationResponseAmino;
                fromAminoMsg(object: _84.QueryDelegationResponseAminoMsg): _84.QueryDelegationResponse;
                toAminoMsg(message: _84.QueryDelegationResponse): _84.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _84.QueryDelegationResponseProtoMsg): _84.QueryDelegationResponse;
                toProto(message: _84.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDelegationResponse): _84.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _84.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_84.QueryUnbondingDelegationRequest>): _84.QueryUnbondingDelegationRequest;
                fromAmino(object: _84.QueryUnbondingDelegationRequestAmino): _84.QueryUnbondingDelegationRequest;
                toAmino(message: _84.QueryUnbondingDelegationRequest): _84.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _84.QueryUnbondingDelegationRequestAminoMsg): _84.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _84.QueryUnbondingDelegationRequest): _84.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _84.QueryUnbondingDelegationRequestProtoMsg): _84.QueryUnbondingDelegationRequest;
                toProto(message: _84.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _84.QueryUnbondingDelegationRequest): _84.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _84.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_84.QueryUnbondingDelegationResponse>): _84.QueryUnbondingDelegationResponse;
                fromAmino(object: _84.QueryUnbondingDelegationResponseAmino): _84.QueryUnbondingDelegationResponse;
                toAmino(message: _84.QueryUnbondingDelegationResponse): _84.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _84.QueryUnbondingDelegationResponseAminoMsg): _84.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _84.QueryUnbondingDelegationResponse): _84.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _84.QueryUnbondingDelegationResponseProtoMsg): _84.QueryUnbondingDelegationResponse;
                toProto(message: _84.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _84.QueryUnbondingDelegationResponse): _84.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _84.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_84.QueryDelegatorDelegationsRequest>): _84.QueryDelegatorDelegationsRequest;
                fromAmino(object: _84.QueryDelegatorDelegationsRequestAmino): _84.QueryDelegatorDelegationsRequest;
                toAmino(message: _84.QueryDelegatorDelegationsRequest): _84.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _84.QueryDelegatorDelegationsRequestAminoMsg): _84.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _84.QueryDelegatorDelegationsRequest): _84.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryDelegatorDelegationsRequestProtoMsg): _84.QueryDelegatorDelegationsRequest;
                toProto(message: _84.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDelegatorDelegationsRequest): _84.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _84.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_84.QueryDelegatorDelegationsResponse>): _84.QueryDelegatorDelegationsResponse;
                fromAmino(object: _84.QueryDelegatorDelegationsResponseAmino): _84.QueryDelegatorDelegationsResponse;
                toAmino(message: _84.QueryDelegatorDelegationsResponse): _84.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _84.QueryDelegatorDelegationsResponseAminoMsg): _84.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _84.QueryDelegatorDelegationsResponse): _84.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryDelegatorDelegationsResponseProtoMsg): _84.QueryDelegatorDelegationsResponse;
                toProto(message: _84.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDelegatorDelegationsResponse): _84.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _84.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_84.QueryDelegatorUnbondingDelegationsRequest>): _84.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _84.QueryDelegatorUnbondingDelegationsRequestAmino): _84.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _84.QueryDelegatorUnbondingDelegationsRequest): _84.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _84.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _84.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _84.QueryDelegatorUnbondingDelegationsRequest): _84.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _84.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _84.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDelegatorUnbondingDelegationsRequest): _84.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _84.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_84.QueryDelegatorUnbondingDelegationsResponse>): _84.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _84.QueryDelegatorUnbondingDelegationsResponseAmino): _84.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _84.QueryDelegatorUnbondingDelegationsResponse): _84.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _84.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _84.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _84.QueryDelegatorUnbondingDelegationsResponse): _84.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _84.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _84.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDelegatorUnbondingDelegationsResponse): _84.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _84.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryRedelegationsRequest;
                fromPartial(object: Partial<_84.QueryRedelegationsRequest>): _84.QueryRedelegationsRequest;
                fromAmino(object: _84.QueryRedelegationsRequestAmino): _84.QueryRedelegationsRequest;
                toAmino(message: _84.QueryRedelegationsRequest): _84.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _84.QueryRedelegationsRequestAminoMsg): _84.QueryRedelegationsRequest;
                toAminoMsg(message: _84.QueryRedelegationsRequest): _84.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryRedelegationsRequestProtoMsg): _84.QueryRedelegationsRequest;
                toProto(message: _84.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryRedelegationsRequest): _84.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _84.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryRedelegationsResponse;
                fromPartial(object: Partial<_84.QueryRedelegationsResponse>): _84.QueryRedelegationsResponse;
                fromAmino(object: _84.QueryRedelegationsResponseAmino): _84.QueryRedelegationsResponse;
                toAmino(message: _84.QueryRedelegationsResponse): _84.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _84.QueryRedelegationsResponseAminoMsg): _84.QueryRedelegationsResponse;
                toAminoMsg(message: _84.QueryRedelegationsResponse): _84.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryRedelegationsResponseProtoMsg): _84.QueryRedelegationsResponse;
                toProto(message: _84.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryRedelegationsResponse): _84.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _84.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_84.QueryDelegatorValidatorsRequest>): _84.QueryDelegatorValidatorsRequest;
                fromAmino(object: _84.QueryDelegatorValidatorsRequestAmino): _84.QueryDelegatorValidatorsRequest;
                toAmino(message: _84.QueryDelegatorValidatorsRequest): _84.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _84.QueryDelegatorValidatorsRequestAminoMsg): _84.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _84.QueryDelegatorValidatorsRequest): _84.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryDelegatorValidatorsRequestProtoMsg): _84.QueryDelegatorValidatorsRequest;
                toProto(message: _84.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDelegatorValidatorsRequest): _84.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _84.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_84.QueryDelegatorValidatorsResponse>): _84.QueryDelegatorValidatorsResponse;
                fromAmino(object: _84.QueryDelegatorValidatorsResponseAmino): _84.QueryDelegatorValidatorsResponse;
                toAmino(message: _84.QueryDelegatorValidatorsResponse): _84.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _84.QueryDelegatorValidatorsResponseAminoMsg): _84.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _84.QueryDelegatorValidatorsResponse): _84.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryDelegatorValidatorsResponseProtoMsg): _84.QueryDelegatorValidatorsResponse;
                toProto(message: _84.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDelegatorValidatorsResponse): _84.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _84.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_84.QueryDelegatorValidatorRequest>): _84.QueryDelegatorValidatorRequest;
                fromAmino(object: _84.QueryDelegatorValidatorRequestAmino): _84.QueryDelegatorValidatorRequest;
                toAmino(message: _84.QueryDelegatorValidatorRequest): _84.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _84.QueryDelegatorValidatorRequestAminoMsg): _84.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _84.QueryDelegatorValidatorRequest): _84.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _84.QueryDelegatorValidatorRequestProtoMsg): _84.QueryDelegatorValidatorRequest;
                toProto(message: _84.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDelegatorValidatorRequest): _84.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _84.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_84.QueryDelegatorValidatorResponse>): _84.QueryDelegatorValidatorResponse;
                fromAmino(object: _84.QueryDelegatorValidatorResponseAmino): _84.QueryDelegatorValidatorResponse;
                toAmino(message: _84.QueryDelegatorValidatorResponse): _84.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _84.QueryDelegatorValidatorResponseAminoMsg): _84.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _84.QueryDelegatorValidatorResponse): _84.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _84.QueryDelegatorValidatorResponseProtoMsg): _84.QueryDelegatorValidatorResponse;
                toProto(message: _84.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDelegatorValidatorResponse): _84.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _84.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_84.QueryHistoricalInfoRequest>): _84.QueryHistoricalInfoRequest;
                fromAmino(object: _84.QueryHistoricalInfoRequestAmino): _84.QueryHistoricalInfoRequest;
                toAmino(message: _84.QueryHistoricalInfoRequest): _84.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _84.QueryHistoricalInfoRequestAminoMsg): _84.QueryHistoricalInfoRequest;
                toAminoMsg(message: _84.QueryHistoricalInfoRequest): _84.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _84.QueryHistoricalInfoRequestProtoMsg): _84.QueryHistoricalInfoRequest;
                toProto(message: _84.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _84.QueryHistoricalInfoRequest): _84.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _84.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_84.QueryHistoricalInfoResponse>): _84.QueryHistoricalInfoResponse;
                fromAmino(object: _84.QueryHistoricalInfoResponseAmino): _84.QueryHistoricalInfoResponse;
                toAmino(message: _84.QueryHistoricalInfoResponse): _84.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _84.QueryHistoricalInfoResponseAminoMsg): _84.QueryHistoricalInfoResponse;
                toAminoMsg(message: _84.QueryHistoricalInfoResponse): _84.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _84.QueryHistoricalInfoResponseProtoMsg): _84.QueryHistoricalInfoResponse;
                toProto(message: _84.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _84.QueryHistoricalInfoResponse): _84.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _84.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _84.QueryPoolRequest;
                fromPartial(_: Partial<_84.QueryPoolRequest>): _84.QueryPoolRequest;
                fromAmino(_: _84.QueryPoolRequestAmino): _84.QueryPoolRequest;
                toAmino(_: _84.QueryPoolRequest): _84.QueryPoolRequestAmino;
                fromAminoMsg(object: _84.QueryPoolRequestAminoMsg): _84.QueryPoolRequest;
                toAminoMsg(message: _84.QueryPoolRequest): _84.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _84.QueryPoolRequestProtoMsg): _84.QueryPoolRequest;
                toProto(message: _84.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _84.QueryPoolRequest): _84.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _84.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryPoolResponse;
                fromPartial(object: Partial<_84.QueryPoolResponse>): _84.QueryPoolResponse;
                fromAmino(object: _84.QueryPoolResponseAmino): _84.QueryPoolResponse;
                toAmino(message: _84.QueryPoolResponse): _84.QueryPoolResponseAmino;
                fromAminoMsg(object: _84.QueryPoolResponseAminoMsg): _84.QueryPoolResponse;
                toAminoMsg(message: _84.QueryPoolResponse): _84.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _84.QueryPoolResponseProtoMsg): _84.QueryPoolResponse;
                toProto(message: _84.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _84.QueryPoolResponse): _84.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _84.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _84.QueryParamsRequest;
                fromPartial(_: Partial<_84.QueryParamsRequest>): _84.QueryParamsRequest;
                fromAmino(_: _84.QueryParamsRequestAmino): _84.QueryParamsRequest;
                toAmino(_: _84.QueryParamsRequest): _84.QueryParamsRequestAmino;
                fromAminoMsg(object: _84.QueryParamsRequestAminoMsg): _84.QueryParamsRequest;
                toAminoMsg(message: _84.QueryParamsRequest): _84.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryParamsRequestProtoMsg): _84.QueryParamsRequest;
                toProto(message: _84.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryParamsRequest): _84.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _84.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryParamsResponse;
                fromPartial(object: Partial<_84.QueryParamsResponse>): _84.QueryParamsResponse;
                fromAmino(object: _84.QueryParamsResponseAmino): _84.QueryParamsResponse;
                toAmino(message: _84.QueryParamsResponse): _84.QueryParamsResponseAmino;
                fromAminoMsg(object: _84.QueryParamsResponseAminoMsg): _84.QueryParamsResponse;
                toAminoMsg(message: _84.QueryParamsResponse): _84.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryParamsResponseProtoMsg): _84.QueryParamsResponse;
                toProto(message: _84.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryParamsResponse): _84.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _83.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.GenesisState;
                fromPartial(object: Partial<_83.GenesisState>): _83.GenesisState;
                fromAmino(object: _83.GenesisStateAmino): _83.GenesisState;
                toAmino(message: _83.GenesisState): _83.GenesisStateAmino;
                fromAminoMsg(object: _83.GenesisStateAminoMsg): _83.GenesisState;
                toAminoMsg(message: _83.GenesisState): _83.GenesisStateAminoMsg;
                fromProtoMsg(message: _83.GenesisStateProtoMsg): _83.GenesisState;
                toProto(message: _83.GenesisState): Uint8Array;
                toProtoMsg(message: _83.GenesisState): _83.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _83.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.LastValidatorPower;
                fromPartial(object: Partial<_83.LastValidatorPower>): _83.LastValidatorPower;
                fromAmino(object: _83.LastValidatorPowerAmino): _83.LastValidatorPower;
                toAmino(message: _83.LastValidatorPower): _83.LastValidatorPowerAmino;
                fromAminoMsg(object: _83.LastValidatorPowerAminoMsg): _83.LastValidatorPower;
                toAminoMsg(message: _83.LastValidatorPower): _83.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _83.LastValidatorPowerProtoMsg): _83.LastValidatorPower;
                toProto(message: _83.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _83.LastValidatorPower): _83.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _82.AuthorizationType;
            authorizationTypeToJSON(object: _82.AuthorizationType): string;
            AuthorizationType: typeof _82.AuthorizationType;
            AuthorizationTypeSDKType: typeof _82.AuthorizationType;
            AuthorizationTypeAmino: typeof _82.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _82.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.StakeAuthorization;
                fromPartial(object: Partial<_82.StakeAuthorization>): _82.StakeAuthorization;
                fromAmino(object: _82.StakeAuthorizationAmino): _82.StakeAuthorization;
                toAmino(message: _82.StakeAuthorization): _82.StakeAuthorizationAmino;
                fromAminoMsg(object: _82.StakeAuthorizationAminoMsg): _82.StakeAuthorization;
                toAminoMsg(message: _82.StakeAuthorization): _82.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _82.StakeAuthorizationProtoMsg): _82.StakeAuthorization;
                toProto(message: _82.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _82.StakeAuthorization): _82.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _82.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.StakeAuthorization_Validators;
                fromPartial(object: Partial<_82.StakeAuthorization_Validators>): _82.StakeAuthorization_Validators;
                fromAmino(object: _82.StakeAuthorization_ValidatorsAmino): _82.StakeAuthorization_Validators;
                toAmino(message: _82.StakeAuthorization_Validators): _82.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _82.StakeAuthorization_ValidatorsAminoMsg): _82.StakeAuthorization_Validators;
                toAminoMsg(message: _82.StakeAuthorization_Validators): _82.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _82.StakeAuthorization_ValidatorsProtoMsg): _82.StakeAuthorization_Validators;
                toProto(message: _82.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _82.StakeAuthorization_Validators): _82.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _87.SignMode;
                signModeToJSON(object: _87.SignMode): string;
                SignMode: typeof _87.SignMode;
                SignModeSDKType: typeof _87.SignMode;
                SignModeAmino: typeof _87.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _87.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.SignatureDescriptors;
                    fromPartial(object: Partial<_87.SignatureDescriptors>): _87.SignatureDescriptors;
                    fromAmino(object: _87.SignatureDescriptorsAmino): _87.SignatureDescriptors;
                    toAmino(message: _87.SignatureDescriptors): _87.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _87.SignatureDescriptorsAminoMsg): _87.SignatureDescriptors;
                    toAminoMsg(message: _87.SignatureDescriptors): _87.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _87.SignatureDescriptorsProtoMsg): _87.SignatureDescriptors;
                    toProto(message: _87.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _87.SignatureDescriptors): _87.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _87.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.SignatureDescriptor;
                    fromPartial(object: Partial<_87.SignatureDescriptor>): _87.SignatureDescriptor;
                    fromAmino(object: _87.SignatureDescriptorAmino): _87.SignatureDescriptor;
                    toAmino(message: _87.SignatureDescriptor): _87.SignatureDescriptorAmino;
                    fromAminoMsg(object: _87.SignatureDescriptorAminoMsg): _87.SignatureDescriptor;
                    toAminoMsg(message: _87.SignatureDescriptor): _87.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _87.SignatureDescriptorProtoMsg): _87.SignatureDescriptor;
                    toProto(message: _87.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _87.SignatureDescriptor): _87.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _87.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_87.SignatureDescriptor_Data>): _87.SignatureDescriptor_Data;
                    fromAmino(object: _87.SignatureDescriptor_DataAmino): _87.SignatureDescriptor_Data;
                    toAmino(message: _87.SignatureDescriptor_Data): _87.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _87.SignatureDescriptor_DataAminoMsg): _87.SignatureDescriptor_Data;
                    toAminoMsg(message: _87.SignatureDescriptor_Data): _87.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _87.SignatureDescriptor_DataProtoMsg): _87.SignatureDescriptor_Data;
                    toProto(message: _87.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _87.SignatureDescriptor_Data): _87.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _87.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_87.SignatureDescriptor_Data_Single>): _87.SignatureDescriptor_Data_Single;
                    fromAmino(object: _87.SignatureDescriptor_Data_SingleAmino): _87.SignatureDescriptor_Data_Single;
                    toAmino(message: _87.SignatureDescriptor_Data_Single): _87.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _87.SignatureDescriptor_Data_SingleAminoMsg): _87.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _87.SignatureDescriptor_Data_Single): _87.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _87.SignatureDescriptor_Data_SingleProtoMsg): _87.SignatureDescriptor_Data_Single;
                    toProto(message: _87.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _87.SignatureDescriptor_Data_Single): _87.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _87.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_87.SignatureDescriptor_Data_Multi>): _87.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _87.SignatureDescriptor_Data_MultiAmino): _87.SignatureDescriptor_Data_Multi;
                    toAmino(message: _87.SignatureDescriptor_Data_Multi): _87.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _87.SignatureDescriptor_Data_MultiAminoMsg): _87.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _87.SignatureDescriptor_Data_Multi): _87.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _87.SignatureDescriptor_Data_MultiProtoMsg): _87.SignatureDescriptor_Data_Multi;
                    toProto(message: _87.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _87.SignatureDescriptor_Data_Multi): _87.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _198.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _88.SimulateRequest): Promise<_88.SimulateResponse>;
                getTx(request: _88.GetTxRequest): Promise<_88.GetTxResponse>;
                broadcastTx(request: _88.BroadcastTxRequest): Promise<_88.BroadcastTxResponse>;
                getTxsEvent(request: _88.GetTxsEventRequest): Promise<_88.GetTxsEventResponse>;
                getBlockWithTxs(request: _88.GetBlockWithTxsRequest): Promise<_88.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _183.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _89.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.Tx;
                fromPartial(object: Partial<_89.Tx>): _89.Tx;
                fromAmino(object: _89.TxAmino): _89.Tx;
                toAmino(message: _89.Tx): _89.TxAmino;
                fromAminoMsg(object: _89.TxAminoMsg): _89.Tx;
                toAminoMsg(message: _89.Tx): _89.TxAminoMsg;
                fromProtoMsg(message: _89.TxProtoMsg): _89.Tx;
                toProto(message: _89.Tx): Uint8Array;
                toProtoMsg(message: _89.Tx): _89.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _89.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.TxRaw;
                fromPartial(object: Partial<_89.TxRaw>): _89.TxRaw;
                fromAmino(object: _89.TxRawAmino): _89.TxRaw;
                toAmino(message: _89.TxRaw): _89.TxRawAmino;
                fromAminoMsg(object: _89.TxRawAminoMsg): _89.TxRaw;
                toAminoMsg(message: _89.TxRaw): _89.TxRawAminoMsg;
                fromProtoMsg(message: _89.TxRawProtoMsg): _89.TxRaw;
                toProto(message: _89.TxRaw): Uint8Array;
                toProtoMsg(message: _89.TxRaw): _89.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _89.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.SignDoc;
                fromPartial(object: Partial<_89.SignDoc>): _89.SignDoc;
                fromAmino(object: _89.SignDocAmino): _89.SignDoc;
                toAmino(message: _89.SignDoc): _89.SignDocAmino;
                fromAminoMsg(object: _89.SignDocAminoMsg): _89.SignDoc;
                toAminoMsg(message: _89.SignDoc): _89.SignDocAminoMsg;
                fromProtoMsg(message: _89.SignDocProtoMsg): _89.SignDoc;
                toProto(message: _89.SignDoc): Uint8Array;
                toProtoMsg(message: _89.SignDoc): _89.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _89.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.TxBody;
                fromPartial(object: Partial<_89.TxBody>): _89.TxBody;
                fromAmino(object: _89.TxBodyAmino): _89.TxBody;
                toAmino(message: _89.TxBody): _89.TxBodyAmino;
                fromAminoMsg(object: _89.TxBodyAminoMsg): _89.TxBody;
                toAminoMsg(message: _89.TxBody): _89.TxBodyAminoMsg;
                fromProtoMsg(message: _89.TxBodyProtoMsg): _89.TxBody;
                toProto(message: _89.TxBody): Uint8Array;
                toProtoMsg(message: _89.TxBody): _89.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _89.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.AuthInfo;
                fromPartial(object: Partial<_89.AuthInfo>): _89.AuthInfo;
                fromAmino(object: _89.AuthInfoAmino): _89.AuthInfo;
                toAmino(message: _89.AuthInfo): _89.AuthInfoAmino;
                fromAminoMsg(object: _89.AuthInfoAminoMsg): _89.AuthInfo;
                toAminoMsg(message: _89.AuthInfo): _89.AuthInfoAminoMsg;
                fromProtoMsg(message: _89.AuthInfoProtoMsg): _89.AuthInfo;
                toProto(message: _89.AuthInfo): Uint8Array;
                toProtoMsg(message: _89.AuthInfo): _89.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _89.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.SignerInfo;
                fromPartial(object: Partial<_89.SignerInfo>): _89.SignerInfo;
                fromAmino(object: _89.SignerInfoAmino): _89.SignerInfo;
                toAmino(message: _89.SignerInfo): _89.SignerInfoAmino;
                fromAminoMsg(object: _89.SignerInfoAminoMsg): _89.SignerInfo;
                toAminoMsg(message: _89.SignerInfo): _89.SignerInfoAminoMsg;
                fromProtoMsg(message: _89.SignerInfoProtoMsg): _89.SignerInfo;
                toProto(message: _89.SignerInfo): Uint8Array;
                toProtoMsg(message: _89.SignerInfo): _89.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _89.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.ModeInfo;
                fromPartial(object: Partial<_89.ModeInfo>): _89.ModeInfo;
                fromAmino(object: _89.ModeInfoAmino): _89.ModeInfo;
                toAmino(message: _89.ModeInfo): _89.ModeInfoAmino;
                fromAminoMsg(object: _89.ModeInfoAminoMsg): _89.ModeInfo;
                toAminoMsg(message: _89.ModeInfo): _89.ModeInfoAminoMsg;
                fromProtoMsg(message: _89.ModeInfoProtoMsg): _89.ModeInfo;
                toProto(message: _89.ModeInfo): Uint8Array;
                toProtoMsg(message: _89.ModeInfo): _89.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _89.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.ModeInfo_Single;
                fromPartial(object: Partial<_89.ModeInfo_Single>): _89.ModeInfo_Single;
                fromAmino(object: _89.ModeInfo_SingleAmino): _89.ModeInfo_Single;
                toAmino(message: _89.ModeInfo_Single): _89.ModeInfo_SingleAmino;
                fromAminoMsg(object: _89.ModeInfo_SingleAminoMsg): _89.ModeInfo_Single;
                toAminoMsg(message: _89.ModeInfo_Single): _89.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _89.ModeInfo_SingleProtoMsg): _89.ModeInfo_Single;
                toProto(message: _89.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _89.ModeInfo_Single): _89.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _89.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.ModeInfo_Multi;
                fromPartial(object: Partial<_89.ModeInfo_Multi>): _89.ModeInfo_Multi;
                fromAmino(object: _89.ModeInfo_MultiAmino): _89.ModeInfo_Multi;
                toAmino(message: _89.ModeInfo_Multi): _89.ModeInfo_MultiAmino;
                fromAminoMsg(object: _89.ModeInfo_MultiAminoMsg): _89.ModeInfo_Multi;
                toAminoMsg(message: _89.ModeInfo_Multi): _89.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _89.ModeInfo_MultiProtoMsg): _89.ModeInfo_Multi;
                toProto(message: _89.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _89.ModeInfo_Multi): _89.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _89.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.Fee;
                fromPartial(object: Partial<_89.Fee>): _89.Fee;
                fromAmino(object: _89.FeeAmino): _89.Fee;
                toAmino(message: _89.Fee): _89.FeeAmino;
                fromAminoMsg(object: _89.FeeAminoMsg): _89.Fee;
                toAminoMsg(message: _89.Fee): _89.FeeAminoMsg;
                fromProtoMsg(message: _89.FeeProtoMsg): _89.Fee;
                toProto(message: _89.Fee): Uint8Array;
                toProtoMsg(message: _89.Fee): _89.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _88.OrderBy;
            orderByToJSON(object: _88.OrderBy): string;
            broadcastModeFromJSON(object: any): _88.BroadcastMode;
            broadcastModeToJSON(object: _88.BroadcastMode): string;
            OrderBy: typeof _88.OrderBy;
            OrderBySDKType: typeof _88.OrderBy;
            OrderByAmino: typeof _88.OrderBy;
            BroadcastMode: typeof _88.BroadcastMode;
            BroadcastModeSDKType: typeof _88.BroadcastMode;
            BroadcastModeAmino: typeof _88.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _88.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.GetTxsEventRequest;
                fromPartial(object: Partial<_88.GetTxsEventRequest>): _88.GetTxsEventRequest;
                fromAmino(object: _88.GetTxsEventRequestAmino): _88.GetTxsEventRequest;
                toAmino(message: _88.GetTxsEventRequest): _88.GetTxsEventRequestAmino;
                fromAminoMsg(object: _88.GetTxsEventRequestAminoMsg): _88.GetTxsEventRequest;
                toAminoMsg(message: _88.GetTxsEventRequest): _88.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _88.GetTxsEventRequestProtoMsg): _88.GetTxsEventRequest;
                toProto(message: _88.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _88.GetTxsEventRequest): _88.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _88.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.GetTxsEventResponse;
                fromPartial(object: Partial<_88.GetTxsEventResponse>): _88.GetTxsEventResponse;
                fromAmino(object: _88.GetTxsEventResponseAmino): _88.GetTxsEventResponse;
                toAmino(message: _88.GetTxsEventResponse): _88.GetTxsEventResponseAmino;
                fromAminoMsg(object: _88.GetTxsEventResponseAminoMsg): _88.GetTxsEventResponse;
                toAminoMsg(message: _88.GetTxsEventResponse): _88.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _88.GetTxsEventResponseProtoMsg): _88.GetTxsEventResponse;
                toProto(message: _88.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _88.GetTxsEventResponse): _88.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _88.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.BroadcastTxRequest;
                fromPartial(object: Partial<_88.BroadcastTxRequest>): _88.BroadcastTxRequest;
                fromAmino(object: _88.BroadcastTxRequestAmino): _88.BroadcastTxRequest;
                toAmino(message: _88.BroadcastTxRequest): _88.BroadcastTxRequestAmino;
                fromAminoMsg(object: _88.BroadcastTxRequestAminoMsg): _88.BroadcastTxRequest;
                toAminoMsg(message: _88.BroadcastTxRequest): _88.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _88.BroadcastTxRequestProtoMsg): _88.BroadcastTxRequest;
                toProto(message: _88.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _88.BroadcastTxRequest): _88.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _88.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.BroadcastTxResponse;
                fromPartial(object: Partial<_88.BroadcastTxResponse>): _88.BroadcastTxResponse;
                fromAmino(object: _88.BroadcastTxResponseAmino): _88.BroadcastTxResponse;
                toAmino(message: _88.BroadcastTxResponse): _88.BroadcastTxResponseAmino;
                fromAminoMsg(object: _88.BroadcastTxResponseAminoMsg): _88.BroadcastTxResponse;
                toAminoMsg(message: _88.BroadcastTxResponse): _88.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _88.BroadcastTxResponseProtoMsg): _88.BroadcastTxResponse;
                toProto(message: _88.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _88.BroadcastTxResponse): _88.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _88.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.SimulateRequest;
                fromPartial(object: Partial<_88.SimulateRequest>): _88.SimulateRequest;
                fromAmino(object: _88.SimulateRequestAmino): _88.SimulateRequest;
                toAmino(message: _88.SimulateRequest): _88.SimulateRequestAmino;
                fromAminoMsg(object: _88.SimulateRequestAminoMsg): _88.SimulateRequest;
                toAminoMsg(message: _88.SimulateRequest): _88.SimulateRequestAminoMsg;
                fromProtoMsg(message: _88.SimulateRequestProtoMsg): _88.SimulateRequest;
                toProto(message: _88.SimulateRequest): Uint8Array;
                toProtoMsg(message: _88.SimulateRequest): _88.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _88.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.SimulateResponse;
                fromPartial(object: Partial<_88.SimulateResponse>): _88.SimulateResponse;
                fromAmino(object: _88.SimulateResponseAmino): _88.SimulateResponse;
                toAmino(message: _88.SimulateResponse): _88.SimulateResponseAmino;
                fromAminoMsg(object: _88.SimulateResponseAminoMsg): _88.SimulateResponse;
                toAminoMsg(message: _88.SimulateResponse): _88.SimulateResponseAminoMsg;
                fromProtoMsg(message: _88.SimulateResponseProtoMsg): _88.SimulateResponse;
                toProto(message: _88.SimulateResponse): Uint8Array;
                toProtoMsg(message: _88.SimulateResponse): _88.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _88.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.GetTxRequest;
                fromPartial(object: Partial<_88.GetTxRequest>): _88.GetTxRequest;
                fromAmino(object: _88.GetTxRequestAmino): _88.GetTxRequest;
                toAmino(message: _88.GetTxRequest): _88.GetTxRequestAmino;
                fromAminoMsg(object: _88.GetTxRequestAminoMsg): _88.GetTxRequest;
                toAminoMsg(message: _88.GetTxRequest): _88.GetTxRequestAminoMsg;
                fromProtoMsg(message: _88.GetTxRequestProtoMsg): _88.GetTxRequest;
                toProto(message: _88.GetTxRequest): Uint8Array;
                toProtoMsg(message: _88.GetTxRequest): _88.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _88.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.GetTxResponse;
                fromPartial(object: Partial<_88.GetTxResponse>): _88.GetTxResponse;
                fromAmino(object: _88.GetTxResponseAmino): _88.GetTxResponse;
                toAmino(message: _88.GetTxResponse): _88.GetTxResponseAmino;
                fromAminoMsg(object: _88.GetTxResponseAminoMsg): _88.GetTxResponse;
                toAminoMsg(message: _88.GetTxResponse): _88.GetTxResponseAminoMsg;
                fromProtoMsg(message: _88.GetTxResponseProtoMsg): _88.GetTxResponse;
                toProto(message: _88.GetTxResponse): Uint8Array;
                toProtoMsg(message: _88.GetTxResponse): _88.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _88.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_88.GetBlockWithTxsRequest>): _88.GetBlockWithTxsRequest;
                fromAmino(object: _88.GetBlockWithTxsRequestAmino): _88.GetBlockWithTxsRequest;
                toAmino(message: _88.GetBlockWithTxsRequest): _88.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _88.GetBlockWithTxsRequestAminoMsg): _88.GetBlockWithTxsRequest;
                toAminoMsg(message: _88.GetBlockWithTxsRequest): _88.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _88.GetBlockWithTxsRequestProtoMsg): _88.GetBlockWithTxsRequest;
                toProto(message: _88.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _88.GetBlockWithTxsRequest): _88.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _88.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_88.GetBlockWithTxsResponse>): _88.GetBlockWithTxsResponse;
                fromAmino(object: _88.GetBlockWithTxsResponseAmino): _88.GetBlockWithTxsResponse;
                toAmino(message: _88.GetBlockWithTxsResponse): _88.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _88.GetBlockWithTxsResponseAminoMsg): _88.GetBlockWithTxsResponse;
                toAminoMsg(message: _88.GetBlockWithTxsResponse): _88.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _88.GetBlockWithTxsResponseProtoMsg): _88.GetBlockWithTxsResponse;
                toProto(message: _88.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _88.GetBlockWithTxsResponse): _88.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _199.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _90.QueryCurrentPlanRequest): Promise<_90.QueryCurrentPlanResponse>;
                appliedPlan(request: _90.QueryAppliedPlanRequest): Promise<_90.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _90.QueryUpgradedConsensusStateRequest): Promise<_90.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _90.QueryModuleVersionsRequest): Promise<_90.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _184.LCDQueryClient;
            Plan: {
                typeUrl: string;
                encode(message: _91.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.Plan;
                fromPartial(object: Partial<_91.Plan>): _91.Plan;
                fromAmino(object: _91.PlanAmino): _91.Plan;
                toAmino(message: _91.Plan): _91.PlanAmino;
                fromAminoMsg(object: _91.PlanAminoMsg): _91.Plan;
                toAminoMsg(message: _91.Plan): _91.PlanAminoMsg;
                fromProtoMsg(message: _91.PlanProtoMsg): _91.Plan;
                toProto(message: _91.Plan): Uint8Array;
                toProtoMsg(message: _91.Plan): _91.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _91.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_91.SoftwareUpgradeProposal>): _91.SoftwareUpgradeProposal;
                fromAmino(object: _91.SoftwareUpgradeProposalAmino): _91.SoftwareUpgradeProposal;
                toAmino(message: _91.SoftwareUpgradeProposal): _91.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _91.SoftwareUpgradeProposalAminoMsg): _91.SoftwareUpgradeProposal;
                toAminoMsg(message: _91.SoftwareUpgradeProposal): _91.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _91.SoftwareUpgradeProposalProtoMsg): _91.SoftwareUpgradeProposal;
                toProto(message: _91.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _91.SoftwareUpgradeProposal): _91.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _91.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_91.CancelSoftwareUpgradeProposal>): _91.CancelSoftwareUpgradeProposal;
                fromAmino(object: _91.CancelSoftwareUpgradeProposalAmino): _91.CancelSoftwareUpgradeProposal;
                toAmino(message: _91.CancelSoftwareUpgradeProposal): _91.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _91.CancelSoftwareUpgradeProposalAminoMsg): _91.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _91.CancelSoftwareUpgradeProposal): _91.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _91.CancelSoftwareUpgradeProposalProtoMsg): _91.CancelSoftwareUpgradeProposal;
                toProto(message: _91.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _91.CancelSoftwareUpgradeProposal): _91.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _91.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.ModuleVersion;
                fromPartial(object: Partial<_91.ModuleVersion>): _91.ModuleVersion;
                fromAmino(object: _91.ModuleVersionAmino): _91.ModuleVersion;
                toAmino(message: _91.ModuleVersion): _91.ModuleVersionAmino;
                fromAminoMsg(object: _91.ModuleVersionAminoMsg): _91.ModuleVersion;
                toAminoMsg(message: _91.ModuleVersion): _91.ModuleVersionAminoMsg;
                fromProtoMsg(message: _91.ModuleVersionProtoMsg): _91.ModuleVersion;
                toProto(message: _91.ModuleVersion): Uint8Array;
                toProtoMsg(message: _91.ModuleVersion): _91.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _90.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_90.QueryCurrentPlanRequest>): _90.QueryCurrentPlanRequest;
                fromAmino(_: _90.QueryCurrentPlanRequestAmino): _90.QueryCurrentPlanRequest;
                toAmino(_: _90.QueryCurrentPlanRequest): _90.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _90.QueryCurrentPlanRequestAminoMsg): _90.QueryCurrentPlanRequest;
                toAminoMsg(message: _90.QueryCurrentPlanRequest): _90.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _90.QueryCurrentPlanRequestProtoMsg): _90.QueryCurrentPlanRequest;
                toProto(message: _90.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _90.QueryCurrentPlanRequest): _90.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _90.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_90.QueryCurrentPlanResponse>): _90.QueryCurrentPlanResponse;
                fromAmino(object: _90.QueryCurrentPlanResponseAmino): _90.QueryCurrentPlanResponse;
                toAmino(message: _90.QueryCurrentPlanResponse): _90.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _90.QueryCurrentPlanResponseAminoMsg): _90.QueryCurrentPlanResponse;
                toAminoMsg(message: _90.QueryCurrentPlanResponse): _90.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _90.QueryCurrentPlanResponseProtoMsg): _90.QueryCurrentPlanResponse;
                toProto(message: _90.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _90.QueryCurrentPlanResponse): _90.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _90.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_90.QueryAppliedPlanRequest>): _90.QueryAppliedPlanRequest;
                fromAmino(object: _90.QueryAppliedPlanRequestAmino): _90.QueryAppliedPlanRequest;
                toAmino(message: _90.QueryAppliedPlanRequest): _90.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _90.QueryAppliedPlanRequestAminoMsg): _90.QueryAppliedPlanRequest;
                toAminoMsg(message: _90.QueryAppliedPlanRequest): _90.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _90.QueryAppliedPlanRequestProtoMsg): _90.QueryAppliedPlanRequest;
                toProto(message: _90.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _90.QueryAppliedPlanRequest): _90.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _90.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_90.QueryAppliedPlanResponse>): _90.QueryAppliedPlanResponse;
                fromAmino(object: _90.QueryAppliedPlanResponseAmino): _90.QueryAppliedPlanResponse;
                toAmino(message: _90.QueryAppliedPlanResponse): _90.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _90.QueryAppliedPlanResponseAminoMsg): _90.QueryAppliedPlanResponse;
                toAminoMsg(message: _90.QueryAppliedPlanResponse): _90.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _90.QueryAppliedPlanResponseProtoMsg): _90.QueryAppliedPlanResponse;
                toProto(message: _90.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _90.QueryAppliedPlanResponse): _90.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _90.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_90.QueryUpgradedConsensusStateRequest>): _90.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _90.QueryUpgradedConsensusStateRequestAmino): _90.QueryUpgradedConsensusStateRequest;
                toAmino(message: _90.QueryUpgradedConsensusStateRequest): _90.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _90.QueryUpgradedConsensusStateRequestAminoMsg): _90.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _90.QueryUpgradedConsensusStateRequest): _90.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _90.QueryUpgradedConsensusStateRequestProtoMsg): _90.QueryUpgradedConsensusStateRequest;
                toProto(message: _90.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _90.QueryUpgradedConsensusStateRequest): _90.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _90.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_90.QueryUpgradedConsensusStateResponse>): _90.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _90.QueryUpgradedConsensusStateResponseAmino): _90.QueryUpgradedConsensusStateResponse;
                toAmino(message: _90.QueryUpgradedConsensusStateResponse): _90.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _90.QueryUpgradedConsensusStateResponseAminoMsg): _90.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _90.QueryUpgradedConsensusStateResponse): _90.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _90.QueryUpgradedConsensusStateResponseProtoMsg): _90.QueryUpgradedConsensusStateResponse;
                toProto(message: _90.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _90.QueryUpgradedConsensusStateResponse): _90.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _90.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_90.QueryModuleVersionsRequest>): _90.QueryModuleVersionsRequest;
                fromAmino(object: _90.QueryModuleVersionsRequestAmino): _90.QueryModuleVersionsRequest;
                toAmino(message: _90.QueryModuleVersionsRequest): _90.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _90.QueryModuleVersionsRequestAminoMsg): _90.QueryModuleVersionsRequest;
                toAminoMsg(message: _90.QueryModuleVersionsRequest): _90.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _90.QueryModuleVersionsRequestProtoMsg): _90.QueryModuleVersionsRequest;
                toProto(message: _90.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _90.QueryModuleVersionsRequest): _90.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _90.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_90.QueryModuleVersionsResponse>): _90.QueryModuleVersionsResponse;
                fromAmino(object: _90.QueryModuleVersionsResponseAmino): _90.QueryModuleVersionsResponse;
                toAmino(message: _90.QueryModuleVersionsResponse): _90.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _90.QueryModuleVersionsResponseAminoMsg): _90.QueryModuleVersionsResponse;
                toAminoMsg(message: _90.QueryModuleVersionsResponse): _90.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _90.QueryModuleVersionsResponseProtoMsg): _90.QueryModuleVersionsResponse;
                toProto(message: _90.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _90.QueryModuleVersionsResponse): _90.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _209.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _92.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _92.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _92.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _92.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _92.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _92.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _92.MsgCreateVestingAccount) => _92.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _92.MsgCreateVestingAccountAmino) => _92.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _93.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.BaseVestingAccount;
                fromPartial(object: Partial<_93.BaseVestingAccount>): _93.BaseVestingAccount;
                fromAmino(object: _93.BaseVestingAccountAmino): _93.BaseVestingAccount;
                toAmino(message: _93.BaseVestingAccount): _93.BaseVestingAccountAmino;
                fromAminoMsg(object: _93.BaseVestingAccountAminoMsg): _93.BaseVestingAccount;
                toAminoMsg(message: _93.BaseVestingAccount): _93.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _93.BaseVestingAccountProtoMsg): _93.BaseVestingAccount;
                toProto(message: _93.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _93.BaseVestingAccount): _93.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _93.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.ContinuousVestingAccount;
                fromPartial(object: Partial<_93.ContinuousVestingAccount>): _93.ContinuousVestingAccount;
                fromAmino(object: _93.ContinuousVestingAccountAmino): _93.ContinuousVestingAccount;
                toAmino(message: _93.ContinuousVestingAccount): _93.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _93.ContinuousVestingAccountAminoMsg): _93.ContinuousVestingAccount;
                toAminoMsg(message: _93.ContinuousVestingAccount): _93.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _93.ContinuousVestingAccountProtoMsg): _93.ContinuousVestingAccount;
                toProto(message: _93.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _93.ContinuousVestingAccount): _93.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _93.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.DelayedVestingAccount;
                fromPartial(object: Partial<_93.DelayedVestingAccount>): _93.DelayedVestingAccount;
                fromAmino(object: _93.DelayedVestingAccountAmino): _93.DelayedVestingAccount;
                toAmino(message: _93.DelayedVestingAccount): _93.DelayedVestingAccountAmino;
                fromAminoMsg(object: _93.DelayedVestingAccountAminoMsg): _93.DelayedVestingAccount;
                toAminoMsg(message: _93.DelayedVestingAccount): _93.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _93.DelayedVestingAccountProtoMsg): _93.DelayedVestingAccount;
                toProto(message: _93.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _93.DelayedVestingAccount): _93.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _93.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Period;
                fromPartial(object: Partial<_93.Period>): _93.Period;
                fromAmino(object: _93.PeriodAmino): _93.Period;
                toAmino(message: _93.Period): _93.PeriodAmino;
                fromAminoMsg(object: _93.PeriodAminoMsg): _93.Period;
                toAminoMsg(message: _93.Period): _93.PeriodAminoMsg;
                fromProtoMsg(message: _93.PeriodProtoMsg): _93.Period;
                toProto(message: _93.Period): Uint8Array;
                toProtoMsg(message: _93.Period): _93.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _93.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.PeriodicVestingAccount;
                fromPartial(object: Partial<_93.PeriodicVestingAccount>): _93.PeriodicVestingAccount;
                fromAmino(object: _93.PeriodicVestingAccountAmino): _93.PeriodicVestingAccount;
                toAmino(message: _93.PeriodicVestingAccount): _93.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _93.PeriodicVestingAccountAminoMsg): _93.PeriodicVestingAccount;
                toAminoMsg(message: _93.PeriodicVestingAccount): _93.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _93.PeriodicVestingAccountProtoMsg): _93.PeriodicVestingAccount;
                toProto(message: _93.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _93.PeriodicVestingAccount): _93.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _93.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.PermanentLockedAccount;
                fromPartial(object: Partial<_93.PermanentLockedAccount>): _93.PermanentLockedAccount;
                fromAmino(object: _93.PermanentLockedAccountAmino): _93.PermanentLockedAccount;
                toAmino(message: _93.PermanentLockedAccount): _93.PermanentLockedAccountAmino;
                fromAminoMsg(object: _93.PermanentLockedAccountAminoMsg): _93.PermanentLockedAccount;
                toAminoMsg(message: _93.PermanentLockedAccount): _93.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _93.PermanentLockedAccountProtoMsg): _93.PermanentLockedAccount;
                toProto(message: _93.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _93.PermanentLockedAccount): _93.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _92.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MsgCreateVestingAccount;
                fromPartial(object: Partial<_92.MsgCreateVestingAccount>): _92.MsgCreateVestingAccount;
                fromAmino(object: _92.MsgCreateVestingAccountAmino): _92.MsgCreateVestingAccount;
                toAmino(message: _92.MsgCreateVestingAccount): _92.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _92.MsgCreateVestingAccountAminoMsg): _92.MsgCreateVestingAccount;
                toAminoMsg(message: _92.MsgCreateVestingAccount): _92.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _92.MsgCreateVestingAccountProtoMsg): _92.MsgCreateVestingAccount;
                toProto(message: _92.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _92.MsgCreateVestingAccount): _92.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _92.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_92.MsgCreateVestingAccountResponse>): _92.MsgCreateVestingAccountResponse;
                fromAmino(_: _92.MsgCreateVestingAccountResponseAmino): _92.MsgCreateVestingAccountResponse;
                toAmino(_: _92.MsgCreateVestingAccountResponse): _92.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _92.MsgCreateVestingAccountResponseAminoMsg): _92.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _92.MsgCreateVestingAccountResponse): _92.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _92.MsgCreateVestingAccountResponseProtoMsg): _92.MsgCreateVestingAccountResponse;
                toProto(message: _92.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _92.MsgCreateVestingAccountResponse): _92.MsgCreateVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _200.MsgClientImpl;
                };
                bank: {
                    v1beta1: _201.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _202.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _203.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _204.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _205.MsgClientImpl;
                };
                gov: {
                    v1beta1: _206.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _207.MsgClientImpl;
                };
                staking: {
                    v1beta1: _208.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _209.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _26.QueryAccountsRequest): Promise<_26.QueryAccountsResponse>;
                        account(request: _26.QueryAccountRequest): Promise<_26.QueryAccountResponse>;
                        params(request?: _26.QueryParamsRequest): Promise<_26.QueryParamsResponse>;
                        moduleAccountByName(request: _26.QueryModuleAccountByNameRequest): Promise<_26.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _30.QueryGrantsRequest): Promise<_30.QueryGrantsResponse>;
                        granterGrants(request: _30.QueryGranterGrantsRequest): Promise<_30.QueryGranterGrantsResponse>;
                        granteeGrants(request: _30.QueryGranteeGrantsRequest): Promise<_30.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _35.QueryBalanceRequest): Promise<_35.QueryBalanceResponse>;
                        allBalances(request: _35.QueryAllBalancesRequest): Promise<_35.QueryAllBalancesResponse>;
                        spendableBalances(request: _35.QuerySpendableBalancesRequest): Promise<_35.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _35.QueryTotalSupplyRequest): Promise<_35.QueryTotalSupplyResponse>;
                        supplyOf(request: _35.QuerySupplyOfRequest): Promise<_35.QuerySupplyOfResponse>;
                        params(request?: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
                        denomMetadata(request: _35.QueryDenomMetadataRequest): Promise<_35.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _35.QueryDenomsMetadataRequest): Promise<_35.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _39.ConfigRequest): Promise<_39.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _46.GetNodeInfoRequest): Promise<_46.GetNodeInfoResponse>;
                            getSyncing(request?: _46.GetSyncingRequest): Promise<_46.GetSyncingResponse>;
                            getLatestBlock(request?: _46.GetLatestBlockRequest): Promise<_46.GetLatestBlockResponse>;
                            getBlockByHeight(request: _46.GetBlockByHeightRequest): Promise<_46.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _46.GetLatestValidatorSetRequest): Promise<_46.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _46.GetValidatorSetByHeightRequest): Promise<_46.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _58.QueryValidatorOutstandingRewardsRequest): Promise<_58.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _58.QueryValidatorCommissionRequest): Promise<_58.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _58.QueryValidatorSlashesRequest): Promise<_58.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _58.QueryDelegationRewardsRequest): Promise<_58.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _58.QueryDelegationTotalRewardsRequest): Promise<_58.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _58.QueryDelegatorValidatorsRequest): Promise<_58.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _58.QueryDelegatorWithdrawAddressRequest): Promise<_58.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _58.QueryCommunityPoolRequest): Promise<_58.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _62.QueryEvidenceRequest): Promise<_62.QueryEvidenceResponse>;
                        allEvidence(request?: _62.QueryAllEvidenceRequest): Promise<_62.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _66.QueryAllowanceRequest): Promise<_66.QueryAllowanceResponse>;
                        allowances(request: _66.QueryAllowancesRequest): Promise<_66.QueryAllowancesResponse>;
                        allowancesByGranter(request: _66.QueryAllowancesByGranterRequest): Promise<_66.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _71.QueryProposalRequest): Promise<_71.QueryProposalResponse>;
                        proposals(request: _71.QueryProposalsRequest): Promise<_71.QueryProposalsResponse>;
                        vote(request: _71.QueryVoteRequest): Promise<_71.QueryVoteResponse>;
                        votes(request: _71.QueryVotesRequest): Promise<_71.QueryVotesResponse>;
                        params(request: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                        deposit(request: _71.QueryDepositRequest): Promise<_71.QueryDepositResponse>;
                        deposits(request: _71.QueryDepositsRequest): Promise<_71.QueryDepositsResponse>;
                        tallyResult(request: _71.QueryTallyResultRequest): Promise<_71.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                        inflation(request?: _75.QueryInflationRequest): Promise<_75.QueryInflationResponse>;
                        annualProvisions(request?: _75.QueryAnnualProvisionsRequest): Promise<_75.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                        signingInfo(request: _79.QuerySigningInfoRequest): Promise<_79.QuerySigningInfoResponse>;
                        signingInfos(request?: _79.QuerySigningInfosRequest): Promise<_79.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _84.QueryValidatorsRequest): Promise<_84.QueryValidatorsResponse>;
                        validator(request: _84.QueryValidatorRequest): Promise<_84.QueryValidatorResponse>;
                        validatorDelegations(request: _84.QueryValidatorDelegationsRequest): Promise<_84.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _84.QueryValidatorUnbondingDelegationsRequest): Promise<_84.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _84.QueryDelegationRequest): Promise<_84.QueryDelegationResponse>;
                        unbondingDelegation(request: _84.QueryUnbondingDelegationRequest): Promise<_84.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _84.QueryDelegatorDelegationsRequest): Promise<_84.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _84.QueryDelegatorUnbondingDelegationsRequest): Promise<_84.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _84.QueryRedelegationsRequest): Promise<_84.QueryRedelegationsResponse>;
                        delegatorValidators(request: _84.QueryDelegatorValidatorsRequest): Promise<_84.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _84.QueryDelegatorValidatorRequest): Promise<_84.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _84.QueryHistoricalInfoRequest): Promise<_84.QueryHistoricalInfoResponse>;
                        pool(request?: _84.QueryPoolRequest): Promise<_84.QueryPoolResponse>;
                        params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _88.SimulateRequest): Promise<_88.SimulateResponse>;
                        getTx(request: _88.GetTxRequest): Promise<_88.GetTxResponse>;
                        broadcastTx(request: _88.BroadcastTxRequest): Promise<_88.BroadcastTxResponse>;
                        getTxsEvent(request: _88.GetTxsEventRequest): Promise<_88.GetTxsEventResponse>;
                        getBlockWithTxs(request: _88.GetBlockWithTxsRequest): Promise<_88.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _90.QueryCurrentPlanRequest): Promise<_90.QueryCurrentPlanResponse>;
                        appliedPlan(request: _90.QueryAppliedPlanRequest): Promise<_90.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _90.QueryUpgradedConsensusStateRequest): Promise<_90.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _90.QueryModuleVersionsRequest): Promise<_90.QueryModuleVersionsResponse>;
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
                    v1beta1: _178.LCDQueryClient;
                };
                mint: {
                    v1beta1: _179.LCDQueryClient;
                };
                params: {
                    v1beta1: _180.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _181.LCDQueryClient;
                };
                staking: {
                    v1beta1: _182.LCDQueryClient;
                };
                tx: {
                    v1beta1: _183.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _184.LCDQueryClient;
                };
            };
        }>;
    };
}
