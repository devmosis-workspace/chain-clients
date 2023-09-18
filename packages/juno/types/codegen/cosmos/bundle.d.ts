import * as _7 from "./auth/v1beta1/auth";
import * as _8 from "./auth/v1beta1/genesis";
import * as _9 from "./auth/v1beta1/query";
import * as _10 from "./authz/v1beta1/authz";
import * as _11 from "./authz/v1beta1/event";
import * as _12 from "./authz/v1beta1/genesis";
import * as _13 from "./authz/v1beta1/query";
import * as _14 from "./authz/v1beta1/tx";
import * as _15 from "./bank/v1beta1/authz";
import * as _16 from "./bank/v1beta1/bank";
import * as _17 from "./bank/v1beta1/genesis";
import * as _18 from "./bank/v1beta1/query";
import * as _19 from "./bank/v1beta1/tx";
import * as _20 from "./base/abci/v1beta1/abci";
import * as _21 from "./base/kv/v1beta1/kv";
import * as _22 from "./base/node/v1beta1/query";
import * as _23 from "./base/query/v1beta1/pagination";
import * as _24 from "./base/reflection/v1beta1/reflection";
import * as _25 from "./base/reflection/v2alpha1/reflection";
import * as _26 from "./base/snapshots/v1beta1/snapshot";
import * as _27 from "./base/store/v1beta1/commit_info";
import * as _28 from "./base/store/v1beta1/listening";
import * as _29 from "./base/tendermint/v1beta1/query";
import * as _30 from "./base/v1beta1/coin";
import * as _31 from "./capability/v1beta1/capability";
import * as _32 from "./capability/v1beta1/genesis";
import * as _33 from "./crisis/v1beta1/genesis";
import * as _34 from "./crisis/v1beta1/tx";
import * as _35 from "./crypto/ed25519/keys";
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
import * as _52 from "./gov/v1beta1/genesis";
import * as _53 from "./gov/v1beta1/gov";
import * as _54 from "./gov/v1beta1/query";
import * as _55 from "./gov/v1beta1/tx";
import * as _56 from "./mint/v1beta1/genesis";
import * as _57 from "./mint/v1beta1/mint";
import * as _58 from "./mint/v1beta1/query";
import * as _59 from "./params/v1beta1/params";
import * as _60 from "./params/v1beta1/query";
import * as _61 from "./slashing/v1beta1/genesis";
import * as _62 from "./slashing/v1beta1/query";
import * as _63 from "./slashing/v1beta1/slashing";
import * as _64 from "./slashing/v1beta1/tx";
import * as _65 from "./staking/v1beta1/authz";
import * as _66 from "./staking/v1beta1/genesis";
import * as _67 from "./staking/v1beta1/query";
import * as _68 from "./staking/v1beta1/staking";
import * as _69 from "./staking/v1beta1/tx";
import * as _70 from "./tx/signing/v1beta1/signing";
import * as _71 from "./tx/v1beta1/service";
import * as _72 from "./tx/v1beta1/tx";
import * as _73 from "./upgrade/v1beta1/query";
import * as _74 from "./upgrade/v1beta1/upgrade";
import * as _75 from "./vesting/v1beta1/tx";
import * as _76 from "./vesting/v1beta1/vesting";
import * as _136 from "./auth/v1beta1/query.lcd";
import * as _137 from "./authz/v1beta1/query.lcd";
import * as _138 from "./bank/v1beta1/query.lcd";
import * as _139 from "./base/node/v1beta1/query.lcd";
import * as _140 from "./base/tendermint/v1beta1/query.lcd";
import * as _141 from "./distribution/v1beta1/query.lcd";
import * as _142 from "./evidence/v1beta1/query.lcd";
import * as _143 from "./feegrant/v1beta1/query.lcd";
import * as _144 from "./gov/v1beta1/query.lcd";
import * as _145 from "./mint/v1beta1/query.lcd";
import * as _146 from "./params/v1beta1/query.lcd";
import * as _147 from "./slashing/v1beta1/query.lcd";
import * as _148 from "./staking/v1beta1/query.lcd";
import * as _149 from "./tx/v1beta1/service.lcd";
import * as _150 from "./upgrade/v1beta1/query.lcd";
import * as _151 from "./auth/v1beta1/query.rpc.Query";
import * as _152 from "./authz/v1beta1/query.rpc.Query";
import * as _153 from "./bank/v1beta1/query.rpc.Query";
import * as _154 from "./base/node/v1beta1/query.rpc.Service";
import * as _155 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _156 from "./distribution/v1beta1/query.rpc.Query";
import * as _157 from "./evidence/v1beta1/query.rpc.Query";
import * as _158 from "./feegrant/v1beta1/query.rpc.Query";
import * as _159 from "./gov/v1beta1/query.rpc.Query";
import * as _160 from "./mint/v1beta1/query.rpc.Query";
import * as _161 from "./params/v1beta1/query.rpc.Query";
import * as _162 from "./slashing/v1beta1/query.rpc.Query";
import * as _163 from "./staking/v1beta1/query.rpc.Query";
import * as _164 from "./tx/v1beta1/service.rpc.Service";
import * as _165 from "./upgrade/v1beta1/query.rpc.Query";
import * as _166 from "./authz/v1beta1/tx.rpc.msg";
import * as _167 from "./bank/v1beta1/tx.rpc.msg";
import * as _168 from "./crisis/v1beta1/tx.rpc.msg";
import * as _169 from "./distribution/v1beta1/tx.rpc.msg";
import * as _170 from "./evidence/v1beta1/tx.rpc.msg";
import * as _171 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _172 from "./gov/v1beta1/tx.rpc.msg";
import * as _173 from "./slashing/v1beta1/tx.rpc.msg";
import * as _174 from "./staking/v1beta1/tx.rpc.msg";
import * as _175 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _151.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _9.QueryAccountsRequest): Promise<_9.QueryAccountsResponse>;
                account(request: _9.QueryAccountRequest): Promise<_9.QueryAccountResponse>;
                params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                moduleAccountByName(request: _9.QueryModuleAccountByNameRequest): Promise<_9.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _136.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _9.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAccountsRequest;
                fromPartial(object: Partial<_9.QueryAccountsRequest>): _9.QueryAccountsRequest;
                fromAmino(object: _9.QueryAccountsRequestAmino): _9.QueryAccountsRequest;
                toAmino(message: _9.QueryAccountsRequest): _9.QueryAccountsRequestAmino;
                fromAminoMsg(object: _9.QueryAccountsRequestAminoMsg): _9.QueryAccountsRequest;
                toAminoMsg(message: _9.QueryAccountsRequest): _9.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _9.QueryAccountsRequestProtoMsg): _9.QueryAccountsRequest;
                toProto(message: _9.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryAccountsRequest): _9.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _9.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAccountsResponse;
                fromPartial(object: Partial<_9.QueryAccountsResponse>): _9.QueryAccountsResponse;
                fromAmino(object: _9.QueryAccountsResponseAmino): _9.QueryAccountsResponse;
                toAmino(message: _9.QueryAccountsResponse): _9.QueryAccountsResponseAmino;
                fromAminoMsg(object: _9.QueryAccountsResponseAminoMsg): _9.QueryAccountsResponse;
                toAminoMsg(message: _9.QueryAccountsResponse): _9.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _9.QueryAccountsResponseProtoMsg): _9.QueryAccountsResponse;
                toProto(message: _9.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryAccountsResponse): _9.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _9.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAccountRequest;
                fromPartial(object: Partial<_9.QueryAccountRequest>): _9.QueryAccountRequest;
                fromAmino(object: _9.QueryAccountRequestAmino): _9.QueryAccountRequest;
                toAmino(message: _9.QueryAccountRequest): _9.QueryAccountRequestAmino;
                fromAminoMsg(object: _9.QueryAccountRequestAminoMsg): _9.QueryAccountRequest;
                toAminoMsg(message: _9.QueryAccountRequest): _9.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _9.QueryAccountRequestProtoMsg): _9.QueryAccountRequest;
                toProto(message: _9.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _9.QueryAccountRequest): _9.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _9.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAccountResponse;
                fromPartial(object: Partial<_9.QueryAccountResponse>): _9.QueryAccountResponse;
                fromAmino(object: _9.QueryAccountResponseAmino): _9.QueryAccountResponse;
                toAmino(message: _9.QueryAccountResponse): _9.QueryAccountResponseAmino;
                fromAminoMsg(object: _9.QueryAccountResponseAminoMsg): _9.QueryAccountResponse;
                toAminoMsg(message: _9.QueryAccountResponse): _9.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _9.QueryAccountResponseProtoMsg): _9.QueryAccountResponse;
                toProto(message: _9.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _9.QueryAccountResponse): _9.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _9.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.QueryParamsRequest;
                fromPartial(_: Partial<_9.QueryParamsRequest>): _9.QueryParamsRequest;
                fromAmino(_: _9.QueryParamsRequestAmino): _9.QueryParamsRequest;
                toAmino(_: _9.QueryParamsRequest): _9.QueryParamsRequestAmino;
                fromAminoMsg(object: _9.QueryParamsRequestAminoMsg): _9.QueryParamsRequest;
                toAminoMsg(message: _9.QueryParamsRequest): _9.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _9.QueryParamsRequestProtoMsg): _9.QueryParamsRequest;
                toProto(message: _9.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryParamsRequest): _9.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _9.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryParamsResponse;
                fromPartial(object: Partial<_9.QueryParamsResponse>): _9.QueryParamsResponse;
                fromAmino(object: _9.QueryParamsResponseAmino): _9.QueryParamsResponse;
                toAmino(message: _9.QueryParamsResponse): _9.QueryParamsResponseAmino;
                fromAminoMsg(object: _9.QueryParamsResponseAminoMsg): _9.QueryParamsResponse;
                toAminoMsg(message: _9.QueryParamsResponse): _9.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _9.QueryParamsResponseProtoMsg): _9.QueryParamsResponse;
                toProto(message: _9.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryParamsResponse): _9.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _9.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_9.QueryModuleAccountByNameRequest>): _9.QueryModuleAccountByNameRequest;
                fromAmino(object: _9.QueryModuleAccountByNameRequestAmino): _9.QueryModuleAccountByNameRequest;
                toAmino(message: _9.QueryModuleAccountByNameRequest): _9.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _9.QueryModuleAccountByNameRequestAminoMsg): _9.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _9.QueryModuleAccountByNameRequest): _9.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _9.QueryModuleAccountByNameRequestProtoMsg): _9.QueryModuleAccountByNameRequest;
                toProto(message: _9.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _9.QueryModuleAccountByNameRequest): _9.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _9.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_9.QueryModuleAccountByNameResponse>): _9.QueryModuleAccountByNameResponse;
                fromAmino(object: _9.QueryModuleAccountByNameResponseAmino): _9.QueryModuleAccountByNameResponse;
                toAmino(message: _9.QueryModuleAccountByNameResponse): _9.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _9.QueryModuleAccountByNameResponseAminoMsg): _9.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _9.QueryModuleAccountByNameResponse): _9.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _9.QueryModuleAccountByNameResponseProtoMsg): _9.QueryModuleAccountByNameResponse;
                toProto(message: _9.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _9.QueryModuleAccountByNameResponse): _9.QueryModuleAccountByNameResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _7.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _7.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _8.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.GenesisState;
                fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
                fromAmino(object: _8.GenesisStateAmino): _8.GenesisState;
                toAmino(message: _8.GenesisState): _8.GenesisStateAmino;
                fromAminoMsg(object: _8.GenesisStateAminoMsg): _8.GenesisState;
                toAminoMsg(message: _8.GenesisState): _8.GenesisStateAminoMsg;
                fromProtoMsg(message: _8.GenesisStateProtoMsg): _8.GenesisState;
                toProto(message: _8.GenesisState): Uint8Array;
                toProtoMsg(message: _8.GenesisState): _8.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _7.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.BaseAccount;
                fromPartial(object: Partial<_7.BaseAccount>): _7.BaseAccount;
                fromAmino(object: _7.BaseAccountAmino): _7.BaseAccount;
                toAmino(message: _7.BaseAccount): _7.BaseAccountAmino;
                fromAminoMsg(object: _7.BaseAccountAminoMsg): _7.BaseAccount;
                toAminoMsg(message: _7.BaseAccount): _7.BaseAccountAminoMsg;
                fromProtoMsg(message: _7.BaseAccountProtoMsg): _7.BaseAccount;
                toProto(message: _7.BaseAccount): Uint8Array;
                toProtoMsg(message: _7.BaseAccount): _7.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _7.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.ModuleAccount;
                fromPartial(object: Partial<_7.ModuleAccount>): _7.ModuleAccount;
                fromAmino(object: _7.ModuleAccountAmino): _7.ModuleAccount;
                toAmino(message: _7.ModuleAccount): _7.ModuleAccountAmino;
                fromAminoMsg(object: _7.ModuleAccountAminoMsg): _7.ModuleAccount;
                toAminoMsg(message: _7.ModuleAccount): _7.ModuleAccountAminoMsg;
                fromProtoMsg(message: _7.ModuleAccountProtoMsg): _7.ModuleAccount;
                toProto(message: _7.ModuleAccount): Uint8Array;
                toProtoMsg(message: _7.ModuleAccount): _7.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _7.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.Params;
                fromPartial(object: Partial<_7.Params>): _7.Params;
                fromAmino(object: _7.ParamsAmino): _7.Params;
                toAmino(message: _7.Params): _7.ParamsAmino;
                fromAminoMsg(object: _7.ParamsAminoMsg): _7.Params;
                toAminoMsg(message: _7.Params): _7.ParamsAminoMsg;
                fromProtoMsg(message: _7.ParamsProtoMsg): _7.Params;
                toProto(message: _7.Params): Uint8Array;
                toProtoMsg(message: _7.Params): _7.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _166.MsgClientImpl;
            QueryClientImpl: typeof _152.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _13.QueryGrantsRequest): Promise<_13.QueryGrantsResponse>;
                granterGrants(request: _13.QueryGranterGrantsRequest): Promise<_13.QueryGranterGrantsResponse>;
                granteeGrants(request: _13.QueryGranteeGrantsRequest): Promise<_13.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _137.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _14.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _14.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _14.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _14.MsgGrant): {
                        typeUrl: string;
                        value: _14.MsgGrant;
                    };
                    exec(value: _14.MsgExec): {
                        typeUrl: string;
                        value: _14.MsgExec;
                    };
                    revoke(value: _14.MsgRevoke): {
                        typeUrl: string;
                        value: _14.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _14.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _14.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _14.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _14.MsgGrant): {
                        typeUrl: string;
                        value: _14.MsgGrant;
                    };
                    exec(value: _14.MsgExec): {
                        typeUrl: string;
                        value: _14.MsgExec;
                    };
                    revoke(value: _14.MsgRevoke): {
                        typeUrl: string;
                        value: _14.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _14.MsgGrant) => _14.MsgGrantAmino;
                    fromAmino: (object: _14.MsgGrantAmino) => _14.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _14.MsgExec) => _14.MsgExecAmino;
                    fromAmino: (object: _14.MsgExecAmino) => _14.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _14.MsgRevoke) => _14.MsgRevokeAmino;
                    fromAmino: (object: _14.MsgRevokeAmino) => _14.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _14.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.MsgGrant;
                fromPartial(object: Partial<_14.MsgGrant>): _14.MsgGrant;
                fromAmino(object: _14.MsgGrantAmino): _14.MsgGrant;
                toAmino(message: _14.MsgGrant): _14.MsgGrantAmino;
                fromAminoMsg(object: _14.MsgGrantAminoMsg): _14.MsgGrant;
                toAminoMsg(message: _14.MsgGrant): _14.MsgGrantAminoMsg;
                fromProtoMsg(message: _14.MsgGrantProtoMsg): _14.MsgGrant;
                toProto(message: _14.MsgGrant): Uint8Array;
                toProtoMsg(message: _14.MsgGrant): _14.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _14.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.MsgExecResponse;
                fromPartial(object: Partial<_14.MsgExecResponse>): _14.MsgExecResponse;
                fromAmino(object: _14.MsgExecResponseAmino): _14.MsgExecResponse;
                toAmino(message: _14.MsgExecResponse): _14.MsgExecResponseAmino;
                fromAminoMsg(object: _14.MsgExecResponseAminoMsg): _14.MsgExecResponse;
                toAminoMsg(message: _14.MsgExecResponse): _14.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _14.MsgExecResponseProtoMsg): _14.MsgExecResponse;
                toProto(message: _14.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _14.MsgExecResponse): _14.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _14.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.MsgExec;
                fromPartial(object: Partial<_14.MsgExec>): _14.MsgExec;
                fromAmino(object: _14.MsgExecAmino): _14.MsgExec;
                toAmino(message: _14.MsgExec): _14.MsgExecAmino;
                fromAminoMsg(object: _14.MsgExecAminoMsg): _14.MsgExec;
                toAminoMsg(message: _14.MsgExec): _14.MsgExecAminoMsg;
                fromProtoMsg(message: _14.MsgExecProtoMsg): _14.MsgExec;
                toProto(message: _14.MsgExec): Uint8Array;
                toProtoMsg(message: _14.MsgExec): _14.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _14.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _14.MsgGrantResponse;
                fromPartial(_: Partial<_14.MsgGrantResponse>): _14.MsgGrantResponse;
                fromAmino(_: _14.MsgGrantResponseAmino): _14.MsgGrantResponse;
                toAmino(_: _14.MsgGrantResponse): _14.MsgGrantResponseAmino;
                fromAminoMsg(object: _14.MsgGrantResponseAminoMsg): _14.MsgGrantResponse;
                toAminoMsg(message: _14.MsgGrantResponse): _14.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _14.MsgGrantResponseProtoMsg): _14.MsgGrantResponse;
                toProto(message: _14.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _14.MsgGrantResponse): _14.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _14.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.MsgRevoke;
                fromPartial(object: Partial<_14.MsgRevoke>): _14.MsgRevoke;
                fromAmino(object: _14.MsgRevokeAmino): _14.MsgRevoke;
                toAmino(message: _14.MsgRevoke): _14.MsgRevokeAmino;
                fromAminoMsg(object: _14.MsgRevokeAminoMsg): _14.MsgRevoke;
                toAminoMsg(message: _14.MsgRevoke): _14.MsgRevokeAminoMsg;
                fromProtoMsg(message: _14.MsgRevokeProtoMsg): _14.MsgRevoke;
                toProto(message: _14.MsgRevoke): Uint8Array;
                toProtoMsg(message: _14.MsgRevoke): _14.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _14.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _14.MsgRevokeResponse;
                fromPartial(_: Partial<_14.MsgRevokeResponse>): _14.MsgRevokeResponse;
                fromAmino(_: _14.MsgRevokeResponseAmino): _14.MsgRevokeResponse;
                toAmino(_: _14.MsgRevokeResponse): _14.MsgRevokeResponseAmino;
                fromAminoMsg(object: _14.MsgRevokeResponseAminoMsg): _14.MsgRevokeResponse;
                toAminoMsg(message: _14.MsgRevokeResponse): _14.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _14.MsgRevokeResponseProtoMsg): _14.MsgRevokeResponse;
                toProto(message: _14.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _14.MsgRevokeResponse): _14.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _13.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryGrantsRequest;
                fromPartial(object: Partial<_13.QueryGrantsRequest>): _13.QueryGrantsRequest;
                fromAmino(object: _13.QueryGrantsRequestAmino): _13.QueryGrantsRequest;
                toAmino(message: _13.QueryGrantsRequest): _13.QueryGrantsRequestAmino;
                fromAminoMsg(object: _13.QueryGrantsRequestAminoMsg): _13.QueryGrantsRequest;
                toAminoMsg(message: _13.QueryGrantsRequest): _13.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _13.QueryGrantsRequestProtoMsg): _13.QueryGrantsRequest;
                toProto(message: _13.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _13.QueryGrantsRequest): _13.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _13.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryGrantsResponse;
                fromPartial(object: Partial<_13.QueryGrantsResponse>): _13.QueryGrantsResponse;
                fromAmino(object: _13.QueryGrantsResponseAmino): _13.QueryGrantsResponse;
                toAmino(message: _13.QueryGrantsResponse): _13.QueryGrantsResponseAmino;
                fromAminoMsg(object: _13.QueryGrantsResponseAminoMsg): _13.QueryGrantsResponse;
                toAminoMsg(message: _13.QueryGrantsResponse): _13.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _13.QueryGrantsResponseProtoMsg): _13.QueryGrantsResponse;
                toProto(message: _13.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _13.QueryGrantsResponse): _13.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _13.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_13.QueryGranterGrantsRequest>): _13.QueryGranterGrantsRequest;
                fromAmino(object: _13.QueryGranterGrantsRequestAmino): _13.QueryGranterGrantsRequest;
                toAmino(message: _13.QueryGranterGrantsRequest): _13.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _13.QueryGranterGrantsRequestAminoMsg): _13.QueryGranterGrantsRequest;
                toAminoMsg(message: _13.QueryGranterGrantsRequest): _13.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _13.QueryGranterGrantsRequestProtoMsg): _13.QueryGranterGrantsRequest;
                toProto(message: _13.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _13.QueryGranterGrantsRequest): _13.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _13.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_13.QueryGranterGrantsResponse>): _13.QueryGranterGrantsResponse;
                fromAmino(object: _13.QueryGranterGrantsResponseAmino): _13.QueryGranterGrantsResponse;
                toAmino(message: _13.QueryGranterGrantsResponse): _13.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _13.QueryGranterGrantsResponseAminoMsg): _13.QueryGranterGrantsResponse;
                toAminoMsg(message: _13.QueryGranterGrantsResponse): _13.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _13.QueryGranterGrantsResponseProtoMsg): _13.QueryGranterGrantsResponse;
                toProto(message: _13.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _13.QueryGranterGrantsResponse): _13.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _13.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_13.QueryGranteeGrantsRequest>): _13.QueryGranteeGrantsRequest;
                fromAmino(object: _13.QueryGranteeGrantsRequestAmino): _13.QueryGranteeGrantsRequest;
                toAmino(message: _13.QueryGranteeGrantsRequest): _13.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _13.QueryGranteeGrantsRequestAminoMsg): _13.QueryGranteeGrantsRequest;
                toAminoMsg(message: _13.QueryGranteeGrantsRequest): _13.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _13.QueryGranteeGrantsRequestProtoMsg): _13.QueryGranteeGrantsRequest;
                toProto(message: _13.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _13.QueryGranteeGrantsRequest): _13.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _13.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_13.QueryGranteeGrantsResponse>): _13.QueryGranteeGrantsResponse;
                fromAmino(object: _13.QueryGranteeGrantsResponseAmino): _13.QueryGranteeGrantsResponse;
                toAmino(message: _13.QueryGranteeGrantsResponse): _13.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _13.QueryGranteeGrantsResponseAminoMsg): _13.QueryGranteeGrantsResponse;
                toAminoMsg(message: _13.QueryGranteeGrantsResponse): _13.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _13.QueryGranteeGrantsResponseProtoMsg): _13.QueryGranteeGrantsResponse;
                toProto(message: _13.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _13.QueryGranteeGrantsResponse): _13.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _12.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.GenesisState;
                fromPartial(object: Partial<_12.GenesisState>): _12.GenesisState;
                fromAmino(object: _12.GenesisStateAmino): _12.GenesisState;
                toAmino(message: _12.GenesisState): _12.GenesisStateAmino;
                fromAminoMsg(object: _12.GenesisStateAminoMsg): _12.GenesisState;
                toAminoMsg(message: _12.GenesisState): _12.GenesisStateAminoMsg;
                fromProtoMsg(message: _12.GenesisStateProtoMsg): _12.GenesisState;
                toProto(message: _12.GenesisState): Uint8Array;
                toProtoMsg(message: _12.GenesisState): _12.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _11.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.EventGrant;
                fromPartial(object: Partial<_11.EventGrant>): _11.EventGrant;
                fromAmino(object: _11.EventGrantAmino): _11.EventGrant;
                toAmino(message: _11.EventGrant): _11.EventGrantAmino;
                fromAminoMsg(object: _11.EventGrantAminoMsg): _11.EventGrant;
                toAminoMsg(message: _11.EventGrant): _11.EventGrantAminoMsg;
                fromProtoMsg(message: _11.EventGrantProtoMsg): _11.EventGrant;
                toProto(message: _11.EventGrant): Uint8Array;
                toProtoMsg(message: _11.EventGrant): _11.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _11.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.EventRevoke;
                fromPartial(object: Partial<_11.EventRevoke>): _11.EventRevoke;
                fromAmino(object: _11.EventRevokeAmino): _11.EventRevoke;
                toAmino(message: _11.EventRevoke): _11.EventRevokeAmino;
                fromAminoMsg(object: _11.EventRevokeAminoMsg): _11.EventRevoke;
                toAminoMsg(message: _11.EventRevoke): _11.EventRevokeAminoMsg;
                fromProtoMsg(message: _11.EventRevokeProtoMsg): _11.EventRevoke;
                toProto(message: _11.EventRevoke): Uint8Array;
                toProtoMsg(message: _11.EventRevoke): _11.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _10.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.GenericAuthorization;
                fromPartial(object: Partial<_10.GenericAuthorization>): _10.GenericAuthorization;
                fromAmino(object: _10.GenericAuthorizationAmino): _10.GenericAuthorization;
                toAmino(message: _10.GenericAuthorization): _10.GenericAuthorizationAmino;
                fromAminoMsg(object: _10.GenericAuthorizationAminoMsg): _10.GenericAuthorization;
                toAminoMsg(message: _10.GenericAuthorization): _10.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _10.GenericAuthorizationProtoMsg): _10.GenericAuthorization;
                toProto(message: _10.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _10.GenericAuthorization): _10.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _10.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.Grant;
                fromPartial(object: Partial<_10.Grant>): _10.Grant;
                fromAmino(object: _10.GrantAmino): _10.Grant;
                toAmino(message: _10.Grant): _10.GrantAmino;
                fromAminoMsg(object: _10.GrantAminoMsg): _10.Grant;
                toAminoMsg(message: _10.Grant): _10.GrantAminoMsg;
                fromProtoMsg(message: _10.GrantProtoMsg): _10.Grant;
                toProto(message: _10.Grant): Uint8Array;
                toProtoMsg(message: _10.Grant): _10.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _10.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.GrantAuthorization;
                fromPartial(object: Partial<_10.GrantAuthorization>): _10.GrantAuthorization;
                fromAmino(object: _10.GrantAuthorizationAmino): _10.GrantAuthorization;
                toAmino(message: _10.GrantAuthorization): _10.GrantAuthorizationAmino;
                fromAminoMsg(object: _10.GrantAuthorizationAminoMsg): _10.GrantAuthorization;
                toAminoMsg(message: _10.GrantAuthorization): _10.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _10.GrantAuthorizationProtoMsg): _10.GrantAuthorization;
                toProto(message: _10.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _10.GrantAuthorization): _10.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _15.SendAuthorization | _65.StakeAuthorization | _10.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _167.MsgClientImpl;
            QueryClientImpl: typeof _153.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _18.QueryBalanceRequest): Promise<_18.QueryBalanceResponse>;
                allBalances(request: _18.QueryAllBalancesRequest): Promise<_18.QueryAllBalancesResponse>;
                spendableBalances(request: _18.QuerySpendableBalancesRequest): Promise<_18.QuerySpendableBalancesResponse>;
                totalSupply(request?: _18.QueryTotalSupplyRequest): Promise<_18.QueryTotalSupplyResponse>;
                supplyOf(request: _18.QuerySupplyOfRequest): Promise<_18.QuerySupplyOfResponse>;
                params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
                denomMetadata(request: _18.QueryDenomMetadataRequest): Promise<_18.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _18.QueryDenomsMetadataRequest): Promise<_18.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _138.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _19.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _19.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _19.MsgSend): {
                        typeUrl: string;
                        value: _19.MsgSend;
                    };
                    multiSend(value: _19.MsgMultiSend): {
                        typeUrl: string;
                        value: _19.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _19.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _19.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _19.MsgSend): {
                        typeUrl: string;
                        value: _19.MsgSend;
                    };
                    multiSend(value: _19.MsgMultiSend): {
                        typeUrl: string;
                        value: _19.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _19.MsgSend) => _19.MsgSendAmino;
                    fromAmino: (object: _19.MsgSendAmino) => _19.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _19.MsgMultiSend) => _19.MsgMultiSendAmino;
                    fromAmino: (object: _19.MsgMultiSendAmino) => _19.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _19.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgSend;
                fromPartial(object: Partial<_19.MsgSend>): _19.MsgSend;
                fromAmino(object: _19.MsgSendAmino): _19.MsgSend;
                toAmino(message: _19.MsgSend): _19.MsgSendAmino;
                fromAminoMsg(object: _19.MsgSendAminoMsg): _19.MsgSend;
                toAminoMsg(message: _19.MsgSend): _19.MsgSendAminoMsg;
                fromProtoMsg(message: _19.MsgSendProtoMsg): _19.MsgSend;
                toProto(message: _19.MsgSend): Uint8Array;
                toProtoMsg(message: _19.MsgSend): _19.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _19.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgSendResponse;
                fromPartial(_: Partial<_19.MsgSendResponse>): _19.MsgSendResponse;
                fromAmino(_: _19.MsgSendResponseAmino): _19.MsgSendResponse;
                toAmino(_: _19.MsgSendResponse): _19.MsgSendResponseAmino;
                fromAminoMsg(object: _19.MsgSendResponseAminoMsg): _19.MsgSendResponse;
                toAminoMsg(message: _19.MsgSendResponse): _19.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _19.MsgSendResponseProtoMsg): _19.MsgSendResponse;
                toProto(message: _19.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _19.MsgSendResponse): _19.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _19.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgMultiSend;
                fromPartial(object: Partial<_19.MsgMultiSend>): _19.MsgMultiSend;
                fromAmino(object: _19.MsgMultiSendAmino): _19.MsgMultiSend;
                toAmino(message: _19.MsgMultiSend): _19.MsgMultiSendAmino;
                fromAminoMsg(object: _19.MsgMultiSendAminoMsg): _19.MsgMultiSend;
                toAminoMsg(message: _19.MsgMultiSend): _19.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _19.MsgMultiSendProtoMsg): _19.MsgMultiSend;
                toProto(message: _19.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _19.MsgMultiSend): _19.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _19.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgMultiSendResponse;
                fromPartial(_: Partial<_19.MsgMultiSendResponse>): _19.MsgMultiSendResponse;
                fromAmino(_: _19.MsgMultiSendResponseAmino): _19.MsgMultiSendResponse;
                toAmino(_: _19.MsgMultiSendResponse): _19.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _19.MsgMultiSendResponseAminoMsg): _19.MsgMultiSendResponse;
                toAminoMsg(message: _19.MsgMultiSendResponse): _19.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _19.MsgMultiSendResponseProtoMsg): _19.MsgMultiSendResponse;
                toProto(message: _19.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _19.MsgMultiSendResponse): _19.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _18.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryBalanceRequest;
                fromPartial(object: Partial<_18.QueryBalanceRequest>): _18.QueryBalanceRequest;
                fromAmino(object: _18.QueryBalanceRequestAmino): _18.QueryBalanceRequest;
                toAmino(message: _18.QueryBalanceRequest): _18.QueryBalanceRequestAmino;
                fromAminoMsg(object: _18.QueryBalanceRequestAminoMsg): _18.QueryBalanceRequest;
                toAminoMsg(message: _18.QueryBalanceRequest): _18.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _18.QueryBalanceRequestProtoMsg): _18.QueryBalanceRequest;
                toProto(message: _18.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _18.QueryBalanceRequest): _18.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _18.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryBalanceResponse;
                fromPartial(object: Partial<_18.QueryBalanceResponse>): _18.QueryBalanceResponse;
                fromAmino(object: _18.QueryBalanceResponseAmino): _18.QueryBalanceResponse;
                toAmino(message: _18.QueryBalanceResponse): _18.QueryBalanceResponseAmino;
                fromAminoMsg(object: _18.QueryBalanceResponseAminoMsg): _18.QueryBalanceResponse;
                toAminoMsg(message: _18.QueryBalanceResponse): _18.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _18.QueryBalanceResponseProtoMsg): _18.QueryBalanceResponse;
                toProto(message: _18.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _18.QueryBalanceResponse): _18.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _18.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryAllBalancesRequest;
                fromPartial(object: Partial<_18.QueryAllBalancesRequest>): _18.QueryAllBalancesRequest;
                fromAmino(object: _18.QueryAllBalancesRequestAmino): _18.QueryAllBalancesRequest;
                toAmino(message: _18.QueryAllBalancesRequest): _18.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _18.QueryAllBalancesRequestAminoMsg): _18.QueryAllBalancesRequest;
                toAminoMsg(message: _18.QueryAllBalancesRequest): _18.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _18.QueryAllBalancesRequestProtoMsg): _18.QueryAllBalancesRequest;
                toProto(message: _18.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _18.QueryAllBalancesRequest): _18.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _18.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryAllBalancesResponse;
                fromPartial(object: Partial<_18.QueryAllBalancesResponse>): _18.QueryAllBalancesResponse;
                fromAmino(object: _18.QueryAllBalancesResponseAmino): _18.QueryAllBalancesResponse;
                toAmino(message: _18.QueryAllBalancesResponse): _18.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _18.QueryAllBalancesResponseAminoMsg): _18.QueryAllBalancesResponse;
                toAminoMsg(message: _18.QueryAllBalancesResponse): _18.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _18.QueryAllBalancesResponseProtoMsg): _18.QueryAllBalancesResponse;
                toProto(message: _18.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _18.QueryAllBalancesResponse): _18.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _18.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_18.QuerySpendableBalancesRequest>): _18.QuerySpendableBalancesRequest;
                fromAmino(object: _18.QuerySpendableBalancesRequestAmino): _18.QuerySpendableBalancesRequest;
                toAmino(message: _18.QuerySpendableBalancesRequest): _18.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _18.QuerySpendableBalancesRequestAminoMsg): _18.QuerySpendableBalancesRequest;
                toAminoMsg(message: _18.QuerySpendableBalancesRequest): _18.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _18.QuerySpendableBalancesRequestProtoMsg): _18.QuerySpendableBalancesRequest;
                toProto(message: _18.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _18.QuerySpendableBalancesRequest): _18.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _18.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_18.QuerySpendableBalancesResponse>): _18.QuerySpendableBalancesResponse;
                fromAmino(object: _18.QuerySpendableBalancesResponseAmino): _18.QuerySpendableBalancesResponse;
                toAmino(message: _18.QuerySpendableBalancesResponse): _18.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _18.QuerySpendableBalancesResponseAminoMsg): _18.QuerySpendableBalancesResponse;
                toAminoMsg(message: _18.QuerySpendableBalancesResponse): _18.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _18.QuerySpendableBalancesResponseProtoMsg): _18.QuerySpendableBalancesResponse;
                toProto(message: _18.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _18.QuerySpendableBalancesResponse): _18.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _18.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_18.QueryTotalSupplyRequest>): _18.QueryTotalSupplyRequest;
                fromAmino(object: _18.QueryTotalSupplyRequestAmino): _18.QueryTotalSupplyRequest;
                toAmino(message: _18.QueryTotalSupplyRequest): _18.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _18.QueryTotalSupplyRequestAminoMsg): _18.QueryTotalSupplyRequest;
                toAminoMsg(message: _18.QueryTotalSupplyRequest): _18.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _18.QueryTotalSupplyRequestProtoMsg): _18.QueryTotalSupplyRequest;
                toProto(message: _18.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _18.QueryTotalSupplyRequest): _18.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _18.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_18.QueryTotalSupplyResponse>): _18.QueryTotalSupplyResponse;
                fromAmino(object: _18.QueryTotalSupplyResponseAmino): _18.QueryTotalSupplyResponse;
                toAmino(message: _18.QueryTotalSupplyResponse): _18.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _18.QueryTotalSupplyResponseAminoMsg): _18.QueryTotalSupplyResponse;
                toAminoMsg(message: _18.QueryTotalSupplyResponse): _18.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _18.QueryTotalSupplyResponseProtoMsg): _18.QueryTotalSupplyResponse;
                toProto(message: _18.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _18.QueryTotalSupplyResponse): _18.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _18.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QuerySupplyOfRequest;
                fromPartial(object: Partial<_18.QuerySupplyOfRequest>): _18.QuerySupplyOfRequest;
                fromAmino(object: _18.QuerySupplyOfRequestAmino): _18.QuerySupplyOfRequest;
                toAmino(message: _18.QuerySupplyOfRequest): _18.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _18.QuerySupplyOfRequestAminoMsg): _18.QuerySupplyOfRequest;
                toAminoMsg(message: _18.QuerySupplyOfRequest): _18.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _18.QuerySupplyOfRequestProtoMsg): _18.QuerySupplyOfRequest;
                toProto(message: _18.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _18.QuerySupplyOfRequest): _18.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _18.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QuerySupplyOfResponse;
                fromPartial(object: Partial<_18.QuerySupplyOfResponse>): _18.QuerySupplyOfResponse;
                fromAmino(object: _18.QuerySupplyOfResponseAmino): _18.QuerySupplyOfResponse;
                toAmino(message: _18.QuerySupplyOfResponse): _18.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _18.QuerySupplyOfResponseAminoMsg): _18.QuerySupplyOfResponse;
                toAminoMsg(message: _18.QuerySupplyOfResponse): _18.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _18.QuerySupplyOfResponseProtoMsg): _18.QuerySupplyOfResponse;
                toProto(message: _18.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _18.QuerySupplyOfResponse): _18.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _18.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.QueryParamsRequest;
                fromPartial(_: Partial<_18.QueryParamsRequest>): _18.QueryParamsRequest;
                fromAmino(_: _18.QueryParamsRequestAmino): _18.QueryParamsRequest;
                toAmino(_: _18.QueryParamsRequest): _18.QueryParamsRequestAmino;
                fromAminoMsg(object: _18.QueryParamsRequestAminoMsg): _18.QueryParamsRequest;
                toAminoMsg(message: _18.QueryParamsRequest): _18.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _18.QueryParamsRequestProtoMsg): _18.QueryParamsRequest;
                toProto(message: _18.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _18.QueryParamsRequest): _18.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _18.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryParamsResponse;
                fromPartial(object: Partial<_18.QueryParamsResponse>): _18.QueryParamsResponse;
                fromAmino(object: _18.QueryParamsResponseAmino): _18.QueryParamsResponse;
                toAmino(message: _18.QueryParamsResponse): _18.QueryParamsResponseAmino;
                fromAminoMsg(object: _18.QueryParamsResponseAminoMsg): _18.QueryParamsResponse;
                toAminoMsg(message: _18.QueryParamsResponse): _18.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _18.QueryParamsResponseProtoMsg): _18.QueryParamsResponse;
                toProto(message: _18.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _18.QueryParamsResponse): _18.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _18.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_18.QueryDenomsMetadataRequest>): _18.QueryDenomsMetadataRequest;
                fromAmino(object: _18.QueryDenomsMetadataRequestAmino): _18.QueryDenomsMetadataRequest;
                toAmino(message: _18.QueryDenomsMetadataRequest): _18.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _18.QueryDenomsMetadataRequestAminoMsg): _18.QueryDenomsMetadataRequest;
                toAminoMsg(message: _18.QueryDenomsMetadataRequest): _18.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _18.QueryDenomsMetadataRequestProtoMsg): _18.QueryDenomsMetadataRequest;
                toProto(message: _18.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _18.QueryDenomsMetadataRequest): _18.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _18.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_18.QueryDenomsMetadataResponse>): _18.QueryDenomsMetadataResponse;
                fromAmino(object: _18.QueryDenomsMetadataResponseAmino): _18.QueryDenomsMetadataResponse;
                toAmino(message: _18.QueryDenomsMetadataResponse): _18.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _18.QueryDenomsMetadataResponseAminoMsg): _18.QueryDenomsMetadataResponse;
                toAminoMsg(message: _18.QueryDenomsMetadataResponse): _18.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _18.QueryDenomsMetadataResponseProtoMsg): _18.QueryDenomsMetadataResponse;
                toProto(message: _18.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _18.QueryDenomsMetadataResponse): _18.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _18.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_18.QueryDenomMetadataRequest>): _18.QueryDenomMetadataRequest;
                fromAmino(object: _18.QueryDenomMetadataRequestAmino): _18.QueryDenomMetadataRequest;
                toAmino(message: _18.QueryDenomMetadataRequest): _18.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _18.QueryDenomMetadataRequestAminoMsg): _18.QueryDenomMetadataRequest;
                toAminoMsg(message: _18.QueryDenomMetadataRequest): _18.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _18.QueryDenomMetadataRequestProtoMsg): _18.QueryDenomMetadataRequest;
                toProto(message: _18.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _18.QueryDenomMetadataRequest): _18.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _18.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_18.QueryDenomMetadataResponse>): _18.QueryDenomMetadataResponse;
                fromAmino(object: _18.QueryDenomMetadataResponseAmino): _18.QueryDenomMetadataResponse;
                toAmino(message: _18.QueryDenomMetadataResponse): _18.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _18.QueryDenomMetadataResponseAminoMsg): _18.QueryDenomMetadataResponse;
                toAminoMsg(message: _18.QueryDenomMetadataResponse): _18.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _18.QueryDenomMetadataResponseProtoMsg): _18.QueryDenomMetadataResponse;
                toProto(message: _18.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _18.QueryDenomMetadataResponse): _18.QueryDenomMetadataResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _17.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.GenesisState;
                fromPartial(object: Partial<_17.GenesisState>): _17.GenesisState;
                fromAmino(object: _17.GenesisStateAmino): _17.GenesisState;
                toAmino(message: _17.GenesisState): _17.GenesisStateAmino;
                fromAminoMsg(object: _17.GenesisStateAminoMsg): _17.GenesisState;
                toAminoMsg(message: _17.GenesisState): _17.GenesisStateAminoMsg;
                fromProtoMsg(message: _17.GenesisStateProtoMsg): _17.GenesisState;
                toProto(message: _17.GenesisState): Uint8Array;
                toProtoMsg(message: _17.GenesisState): _17.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _17.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Balance;
                fromPartial(object: Partial<_17.Balance>): _17.Balance;
                fromAmino(object: _17.BalanceAmino): _17.Balance;
                toAmino(message: _17.Balance): _17.BalanceAmino;
                fromAminoMsg(object: _17.BalanceAminoMsg): _17.Balance;
                toAminoMsg(message: _17.Balance): _17.BalanceAminoMsg;
                fromProtoMsg(message: _17.BalanceProtoMsg): _17.Balance;
                toProto(message: _17.Balance): Uint8Array;
                toProtoMsg(message: _17.Balance): _17.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _16.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.Params;
                fromPartial(object: Partial<_16.Params>): _16.Params;
                fromAmino(object: _16.ParamsAmino): _16.Params;
                toAmino(message: _16.Params): _16.ParamsAmino;
                fromAminoMsg(object: _16.ParamsAminoMsg): _16.Params;
                toAminoMsg(message: _16.Params): _16.ParamsAminoMsg;
                fromProtoMsg(message: _16.ParamsProtoMsg): _16.Params;
                toProto(message: _16.Params): Uint8Array;
                toProtoMsg(message: _16.Params): _16.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _16.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.SendEnabled;
                fromPartial(object: Partial<_16.SendEnabled>): _16.SendEnabled;
                fromAmino(object: _16.SendEnabledAmino): _16.SendEnabled;
                toAmino(message: _16.SendEnabled): _16.SendEnabledAmino;
                fromAminoMsg(object: _16.SendEnabledAminoMsg): _16.SendEnabled;
                toAminoMsg(message: _16.SendEnabled): _16.SendEnabledAminoMsg;
                fromProtoMsg(message: _16.SendEnabledProtoMsg): _16.SendEnabled;
                toProto(message: _16.SendEnabled): Uint8Array;
                toProtoMsg(message: _16.SendEnabled): _16.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _16.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.Input;
                fromPartial(object: Partial<_16.Input>): _16.Input;
                fromAmino(object: _16.InputAmino): _16.Input;
                toAmino(message: _16.Input): _16.InputAmino;
                fromAminoMsg(object: _16.InputAminoMsg): _16.Input;
                toAminoMsg(message: _16.Input): _16.InputAminoMsg;
                fromProtoMsg(message: _16.InputProtoMsg): _16.Input;
                toProto(message: _16.Input): Uint8Array;
                toProtoMsg(message: _16.Input): _16.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _16.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.Output;
                fromPartial(object: Partial<_16.Output>): _16.Output;
                fromAmino(object: _16.OutputAmino): _16.Output;
                toAmino(message: _16.Output): _16.OutputAmino;
                fromAminoMsg(object: _16.OutputAminoMsg): _16.Output;
                toAminoMsg(message: _16.Output): _16.OutputAminoMsg;
                fromProtoMsg(message: _16.OutputProtoMsg): _16.Output;
                toProto(message: _16.Output): Uint8Array;
                toProtoMsg(message: _16.Output): _16.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _16.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.Supply;
                fromPartial(object: Partial<_16.Supply>): _16.Supply;
                fromAmino(object: _16.SupplyAmino): _16.Supply;
                toAmino(message: _16.Supply): _16.SupplyAmino;
                fromAminoMsg(object: _16.SupplyAminoMsg): _16.Supply;
                toAminoMsg(message: _16.Supply): _16.SupplyAminoMsg;
                fromProtoMsg(message: _16.SupplyProtoMsg): _16.Supply;
                toProto(message: _16.Supply): Uint8Array;
                toProtoMsg(message: _16.Supply): _16.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _16.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.DenomUnit;
                fromPartial(object: Partial<_16.DenomUnit>): _16.DenomUnit;
                fromAmino(object: _16.DenomUnitAmino): _16.DenomUnit;
                toAmino(message: _16.DenomUnit): _16.DenomUnitAmino;
                fromAminoMsg(object: _16.DenomUnitAminoMsg): _16.DenomUnit;
                toAminoMsg(message: _16.DenomUnit): _16.DenomUnitAminoMsg;
                fromProtoMsg(message: _16.DenomUnitProtoMsg): _16.DenomUnit;
                toProto(message: _16.DenomUnit): Uint8Array;
                toProtoMsg(message: _16.DenomUnit): _16.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _16.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.Metadata;
                fromPartial(object: Partial<_16.Metadata>): _16.Metadata;
                fromAmino(object: _16.MetadataAmino): _16.Metadata;
                toAmino(message: _16.Metadata): _16.MetadataAmino;
                fromAminoMsg(object: _16.MetadataAminoMsg): _16.Metadata;
                toAminoMsg(message: _16.Metadata): _16.MetadataAminoMsg;
                fromProtoMsg(message: _16.MetadataProtoMsg): _16.Metadata;
                toProto(message: _16.Metadata): Uint8Array;
                toProtoMsg(message: _16.Metadata): _16.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _15.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.SendAuthorization;
                fromPartial(object: Partial<_15.SendAuthorization>): _15.SendAuthorization;
                fromAmino(object: _15.SendAuthorizationAmino): _15.SendAuthorization;
                toAmino(message: _15.SendAuthorization): _15.SendAuthorizationAmino;
                fromAminoMsg(object: _15.SendAuthorizationAminoMsg): _15.SendAuthorization;
                toAminoMsg(message: _15.SendAuthorization): _15.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _15.SendAuthorizationProtoMsg): _15.SendAuthorization;
                toProto(message: _15.SendAuthorization): Uint8Array;
                toProtoMsg(message: _15.SendAuthorization): _15.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _20.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.TxResponse;
                    fromPartial(object: Partial<_20.TxResponse>): _20.TxResponse;
                    fromAmino(object: _20.TxResponseAmino): _20.TxResponse;
                    toAmino(message: _20.TxResponse): _20.TxResponseAmino;
                    fromAminoMsg(object: _20.TxResponseAminoMsg): _20.TxResponse;
                    toAminoMsg(message: _20.TxResponse): _20.TxResponseAminoMsg;
                    fromProtoMsg(message: _20.TxResponseProtoMsg): _20.TxResponse;
                    toProto(message: _20.TxResponse): Uint8Array;
                    toProtoMsg(message: _20.TxResponse): _20.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _20.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.ABCIMessageLog;
                    fromPartial(object: Partial<_20.ABCIMessageLog>): _20.ABCIMessageLog;
                    fromAmino(object: _20.ABCIMessageLogAmino): _20.ABCIMessageLog;
                    toAmino(message: _20.ABCIMessageLog): _20.ABCIMessageLogAmino;
                    fromAminoMsg(object: _20.ABCIMessageLogAminoMsg): _20.ABCIMessageLog;
                    toAminoMsg(message: _20.ABCIMessageLog): _20.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _20.ABCIMessageLogProtoMsg): _20.ABCIMessageLog;
                    toProto(message: _20.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _20.ABCIMessageLog): _20.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _20.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.StringEvent;
                    fromPartial(object: Partial<_20.StringEvent>): _20.StringEvent;
                    fromAmino(object: _20.StringEventAmino): _20.StringEvent;
                    toAmino(message: _20.StringEvent): _20.StringEventAmino;
                    fromAminoMsg(object: _20.StringEventAminoMsg): _20.StringEvent;
                    toAminoMsg(message: _20.StringEvent): _20.StringEventAminoMsg;
                    fromProtoMsg(message: _20.StringEventProtoMsg): _20.StringEvent;
                    toProto(message: _20.StringEvent): Uint8Array;
                    toProtoMsg(message: _20.StringEvent): _20.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _20.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.Attribute;
                    fromPartial(object: Partial<_20.Attribute>): _20.Attribute;
                    fromAmino(object: _20.AttributeAmino): _20.Attribute;
                    toAmino(message: _20.Attribute): _20.AttributeAmino;
                    fromAminoMsg(object: _20.AttributeAminoMsg): _20.Attribute;
                    toAminoMsg(message: _20.Attribute): _20.AttributeAminoMsg;
                    fromProtoMsg(message: _20.AttributeProtoMsg): _20.Attribute;
                    toProto(message: _20.Attribute): Uint8Array;
                    toProtoMsg(message: _20.Attribute): _20.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _20.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.GasInfo;
                    fromPartial(object: Partial<_20.GasInfo>): _20.GasInfo;
                    fromAmino(object: _20.GasInfoAmino): _20.GasInfo;
                    toAmino(message: _20.GasInfo): _20.GasInfoAmino;
                    fromAminoMsg(object: _20.GasInfoAminoMsg): _20.GasInfo;
                    toAminoMsg(message: _20.GasInfo): _20.GasInfoAminoMsg;
                    fromProtoMsg(message: _20.GasInfoProtoMsg): _20.GasInfo;
                    toProto(message: _20.GasInfo): Uint8Array;
                    toProtoMsg(message: _20.GasInfo): _20.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _20.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.Result;
                    fromPartial(object: Partial<_20.Result>): _20.Result;
                    fromAmino(object: _20.ResultAmino): _20.Result;
                    toAmino(message: _20.Result): _20.ResultAmino;
                    fromAminoMsg(object: _20.ResultAminoMsg): _20.Result;
                    toAminoMsg(message: _20.Result): _20.ResultAminoMsg;
                    fromProtoMsg(message: _20.ResultProtoMsg): _20.Result;
                    toProto(message: _20.Result): Uint8Array;
                    toProtoMsg(message: _20.Result): _20.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _20.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.SimulationResponse;
                    fromPartial(object: Partial<_20.SimulationResponse>): _20.SimulationResponse;
                    fromAmino(object: _20.SimulationResponseAmino): _20.SimulationResponse;
                    toAmino(message: _20.SimulationResponse): _20.SimulationResponseAmino;
                    fromAminoMsg(object: _20.SimulationResponseAminoMsg): _20.SimulationResponse;
                    toAminoMsg(message: _20.SimulationResponse): _20.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _20.SimulationResponseProtoMsg): _20.SimulationResponse;
                    toProto(message: _20.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _20.SimulationResponse): _20.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _20.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.MsgData;
                    fromPartial(object: Partial<_20.MsgData>): _20.MsgData;
                    fromAmino(object: _20.MsgDataAmino): _20.MsgData;
                    toAmino(message: _20.MsgData): _20.MsgDataAmino;
                    fromAminoMsg(object: _20.MsgDataAminoMsg): _20.MsgData;
                    toAminoMsg(message: _20.MsgData): _20.MsgDataAminoMsg;
                    fromProtoMsg(message: _20.MsgDataProtoMsg): _20.MsgData;
                    toProto(message: _20.MsgData): Uint8Array;
                    toProtoMsg(message: _20.MsgData): _20.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _20.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.TxMsgData;
                    fromPartial(object: Partial<_20.TxMsgData>): _20.TxMsgData;
                    fromAmino(object: _20.TxMsgDataAmino): _20.TxMsgData;
                    toAmino(message: _20.TxMsgData): _20.TxMsgDataAmino;
                    fromAminoMsg(object: _20.TxMsgDataAminoMsg): _20.TxMsgData;
                    toAminoMsg(message: _20.TxMsgData): _20.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _20.TxMsgDataProtoMsg): _20.TxMsgData;
                    toProto(message: _20.TxMsgData): Uint8Array;
                    toProtoMsg(message: _20.TxMsgData): _20.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _20.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.SearchTxsResult;
                    fromPartial(object: Partial<_20.SearchTxsResult>): _20.SearchTxsResult;
                    fromAmino(object: _20.SearchTxsResultAmino): _20.SearchTxsResult;
                    toAmino(message: _20.SearchTxsResult): _20.SearchTxsResultAmino;
                    fromAminoMsg(object: _20.SearchTxsResultAminoMsg): _20.SearchTxsResult;
                    toAminoMsg(message: _20.SearchTxsResult): _20.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _20.SearchTxsResultProtoMsg): _20.SearchTxsResult;
                    toProto(message: _20.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _20.SearchTxsResult): _20.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _21.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.Pairs;
                    fromPartial(object: Partial<_21.Pairs>): _21.Pairs;
                    fromAmino(object: _21.PairsAmino): _21.Pairs;
                    toAmino(message: _21.Pairs): _21.PairsAmino;
                    fromAminoMsg(object: _21.PairsAminoMsg): _21.Pairs;
                    toAminoMsg(message: _21.Pairs): _21.PairsAminoMsg;
                    fromProtoMsg(message: _21.PairsProtoMsg): _21.Pairs;
                    toProto(message: _21.Pairs): Uint8Array;
                    toProtoMsg(message: _21.Pairs): _21.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _21.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.Pair;
                    fromPartial(object: Partial<_21.Pair>): _21.Pair;
                    fromAmino(object: _21.PairAmino): _21.Pair;
                    toAmino(message: _21.Pair): _21.PairAmino;
                    fromAminoMsg(object: _21.PairAminoMsg): _21.Pair;
                    toAminoMsg(message: _21.Pair): _21.PairAminoMsg;
                    fromProtoMsg(message: _21.PairProtoMsg): _21.Pair;
                    toProto(message: _21.Pair): Uint8Array;
                    toProtoMsg(message: _21.Pair): _21.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _154.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _22.ConfigRequest): Promise<_22.ConfigResponse>;
                };
                LCDQueryClient: typeof _139.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _22.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _22.ConfigRequest;
                    fromPartial(_: Partial<_22.ConfigRequest>): _22.ConfigRequest;
                    fromAmino(_: _22.ConfigRequestAmino): _22.ConfigRequest;
                    toAmino(_: _22.ConfigRequest): _22.ConfigRequestAmino;
                    fromAminoMsg(object: _22.ConfigRequestAminoMsg): _22.ConfigRequest;
                    toAminoMsg(message: _22.ConfigRequest): _22.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _22.ConfigRequestProtoMsg): _22.ConfigRequest;
                    toProto(message: _22.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _22.ConfigRequest): _22.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _22.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.ConfigResponse;
                    fromPartial(object: Partial<_22.ConfigResponse>): _22.ConfigResponse;
                    fromAmino(object: _22.ConfigResponseAmino): _22.ConfigResponse;
                    toAmino(message: _22.ConfigResponse): _22.ConfigResponseAmino;
                    fromAminoMsg(object: _22.ConfigResponseAminoMsg): _22.ConfigResponse;
                    toAminoMsg(message: _22.ConfigResponse): _22.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _22.ConfigResponseProtoMsg): _22.ConfigResponse;
                    toProto(message: _22.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _22.ConfigResponse): _22.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _23.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.PageRequest;
                    fromPartial(object: Partial<_23.PageRequest>): _23.PageRequest;
                    fromAmino(object: _23.PageRequestAmino): _23.PageRequest;
                    toAmino(message: _23.PageRequest): _23.PageRequestAmino;
                    fromAminoMsg(object: _23.PageRequestAminoMsg): _23.PageRequest;
                    toAminoMsg(message: _23.PageRequest): _23.PageRequestAminoMsg;
                    fromProtoMsg(message: _23.PageRequestProtoMsg): _23.PageRequest;
                    toProto(message: _23.PageRequest): Uint8Array;
                    toProtoMsg(message: _23.PageRequest): _23.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _23.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.PageResponse;
                    fromPartial(object: Partial<_23.PageResponse>): _23.PageResponse;
                    fromAmino(object: _23.PageResponseAmino): _23.PageResponse;
                    toAmino(message: _23.PageResponse): _23.PageResponseAmino;
                    fromAminoMsg(object: _23.PageResponseAminoMsg): _23.PageResponse;
                    toAminoMsg(message: _23.PageResponse): _23.PageResponseAminoMsg;
                    fromProtoMsg(message: _23.PageResponseProtoMsg): _23.PageResponse;
                    toProto(message: _23.PageResponse): Uint8Array;
                    toProtoMsg(message: _23.PageResponse): _23.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _24.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _24.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_24.ListAllInterfacesRequest>): _24.ListAllInterfacesRequest;
                    fromAmino(_: _24.ListAllInterfacesRequestAmino): _24.ListAllInterfacesRequest;
                    toAmino(_: _24.ListAllInterfacesRequest): _24.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _24.ListAllInterfacesRequestAminoMsg): _24.ListAllInterfacesRequest;
                    toAminoMsg(message: _24.ListAllInterfacesRequest): _24.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _24.ListAllInterfacesRequestProtoMsg): _24.ListAllInterfacesRequest;
                    toProto(message: _24.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _24.ListAllInterfacesRequest): _24.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _24.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_24.ListAllInterfacesResponse>): _24.ListAllInterfacesResponse;
                    fromAmino(object: _24.ListAllInterfacesResponseAmino): _24.ListAllInterfacesResponse;
                    toAmino(message: _24.ListAllInterfacesResponse): _24.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _24.ListAllInterfacesResponseAminoMsg): _24.ListAllInterfacesResponse;
                    toAminoMsg(message: _24.ListAllInterfacesResponse): _24.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _24.ListAllInterfacesResponseProtoMsg): _24.ListAllInterfacesResponse;
                    toProto(message: _24.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _24.ListAllInterfacesResponse): _24.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _24.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.ListImplementationsRequest;
                    fromPartial(object: Partial<_24.ListImplementationsRequest>): _24.ListImplementationsRequest;
                    fromAmino(object: _24.ListImplementationsRequestAmino): _24.ListImplementationsRequest;
                    toAmino(message: _24.ListImplementationsRequest): _24.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _24.ListImplementationsRequestAminoMsg): _24.ListImplementationsRequest;
                    toAminoMsg(message: _24.ListImplementationsRequest): _24.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _24.ListImplementationsRequestProtoMsg): _24.ListImplementationsRequest;
                    toProto(message: _24.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _24.ListImplementationsRequest): _24.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _24.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.ListImplementationsResponse;
                    fromPartial(object: Partial<_24.ListImplementationsResponse>): _24.ListImplementationsResponse;
                    fromAmino(object: _24.ListImplementationsResponseAmino): _24.ListImplementationsResponse;
                    toAmino(message: _24.ListImplementationsResponse): _24.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _24.ListImplementationsResponseAminoMsg): _24.ListImplementationsResponse;
                    toAminoMsg(message: _24.ListImplementationsResponse): _24.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _24.ListImplementationsResponseProtoMsg): _24.ListImplementationsResponse;
                    toProto(message: _24.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _24.ListImplementationsResponse): _24.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _25.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.AppDescriptor;
                    fromPartial(object: Partial<_25.AppDescriptor>): _25.AppDescriptor;
                    fromAmino(object: _25.AppDescriptorAmino): _25.AppDescriptor;
                    toAmino(message: _25.AppDescriptor): _25.AppDescriptorAmino;
                    fromAminoMsg(object: _25.AppDescriptorAminoMsg): _25.AppDescriptor;
                    toAminoMsg(message: _25.AppDescriptor): _25.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _25.AppDescriptorProtoMsg): _25.AppDescriptor;
                    toProto(message: _25.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _25.AppDescriptor): _25.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _25.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.TxDescriptor;
                    fromPartial(object: Partial<_25.TxDescriptor>): _25.TxDescriptor;
                    fromAmino(object: _25.TxDescriptorAmino): _25.TxDescriptor;
                    toAmino(message: _25.TxDescriptor): _25.TxDescriptorAmino;
                    fromAminoMsg(object: _25.TxDescriptorAminoMsg): _25.TxDescriptor;
                    toAminoMsg(message: _25.TxDescriptor): _25.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _25.TxDescriptorProtoMsg): _25.TxDescriptor;
                    toProto(message: _25.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _25.TxDescriptor): _25.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _25.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.AuthnDescriptor;
                    fromPartial(object: Partial<_25.AuthnDescriptor>): _25.AuthnDescriptor;
                    fromAmino(object: _25.AuthnDescriptorAmino): _25.AuthnDescriptor;
                    toAmino(message: _25.AuthnDescriptor): _25.AuthnDescriptorAmino;
                    fromAminoMsg(object: _25.AuthnDescriptorAminoMsg): _25.AuthnDescriptor;
                    toAminoMsg(message: _25.AuthnDescriptor): _25.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _25.AuthnDescriptorProtoMsg): _25.AuthnDescriptor;
                    toProto(message: _25.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _25.AuthnDescriptor): _25.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _25.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.SigningModeDescriptor;
                    fromPartial(object: Partial<_25.SigningModeDescriptor>): _25.SigningModeDescriptor;
                    fromAmino(object: _25.SigningModeDescriptorAmino): _25.SigningModeDescriptor;
                    toAmino(message: _25.SigningModeDescriptor): _25.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _25.SigningModeDescriptorAminoMsg): _25.SigningModeDescriptor;
                    toAminoMsg(message: _25.SigningModeDescriptor): _25.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _25.SigningModeDescriptorProtoMsg): _25.SigningModeDescriptor;
                    toProto(message: _25.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _25.SigningModeDescriptor): _25.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _25.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.ChainDescriptor;
                    fromPartial(object: Partial<_25.ChainDescriptor>): _25.ChainDescriptor;
                    fromAmino(object: _25.ChainDescriptorAmino): _25.ChainDescriptor;
                    toAmino(message: _25.ChainDescriptor): _25.ChainDescriptorAmino;
                    fromAminoMsg(object: _25.ChainDescriptorAminoMsg): _25.ChainDescriptor;
                    toAminoMsg(message: _25.ChainDescriptor): _25.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _25.ChainDescriptorProtoMsg): _25.ChainDescriptor;
                    toProto(message: _25.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _25.ChainDescriptor): _25.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _25.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.CodecDescriptor;
                    fromPartial(object: Partial<_25.CodecDescriptor>): _25.CodecDescriptor;
                    fromAmino(object: _25.CodecDescriptorAmino): _25.CodecDescriptor;
                    toAmino(message: _25.CodecDescriptor): _25.CodecDescriptorAmino;
                    fromAminoMsg(object: _25.CodecDescriptorAminoMsg): _25.CodecDescriptor;
                    toAminoMsg(message: _25.CodecDescriptor): _25.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _25.CodecDescriptorProtoMsg): _25.CodecDescriptor;
                    toProto(message: _25.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _25.CodecDescriptor): _25.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _25.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.InterfaceDescriptor;
                    fromPartial(object: Partial<_25.InterfaceDescriptor>): _25.InterfaceDescriptor;
                    fromAmino(object: _25.InterfaceDescriptorAmino): _25.InterfaceDescriptor;
                    toAmino(message: _25.InterfaceDescriptor): _25.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _25.InterfaceDescriptorAminoMsg): _25.InterfaceDescriptor;
                    toAminoMsg(message: _25.InterfaceDescriptor): _25.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _25.InterfaceDescriptorProtoMsg): _25.InterfaceDescriptor;
                    toProto(message: _25.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _25.InterfaceDescriptor): _25.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _25.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_25.InterfaceImplementerDescriptor>): _25.InterfaceImplementerDescriptor;
                    fromAmino(object: _25.InterfaceImplementerDescriptorAmino): _25.InterfaceImplementerDescriptor;
                    toAmino(message: _25.InterfaceImplementerDescriptor): _25.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _25.InterfaceImplementerDescriptorAminoMsg): _25.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _25.InterfaceImplementerDescriptor): _25.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _25.InterfaceImplementerDescriptorProtoMsg): _25.InterfaceImplementerDescriptor;
                    toProto(message: _25.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _25.InterfaceImplementerDescriptor): _25.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _25.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_25.InterfaceAcceptingMessageDescriptor>): _25.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _25.InterfaceAcceptingMessageDescriptorAmino): _25.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _25.InterfaceAcceptingMessageDescriptor): _25.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _25.InterfaceAcceptingMessageDescriptorAminoMsg): _25.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _25.InterfaceAcceptingMessageDescriptor): _25.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _25.InterfaceAcceptingMessageDescriptorProtoMsg): _25.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _25.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _25.InterfaceAcceptingMessageDescriptor): _25.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _25.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.ConfigurationDescriptor;
                    fromPartial(object: Partial<_25.ConfigurationDescriptor>): _25.ConfigurationDescriptor;
                    fromAmino(object: _25.ConfigurationDescriptorAmino): _25.ConfigurationDescriptor;
                    toAmino(message: _25.ConfigurationDescriptor): _25.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _25.ConfigurationDescriptorAminoMsg): _25.ConfigurationDescriptor;
                    toAminoMsg(message: _25.ConfigurationDescriptor): _25.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _25.ConfigurationDescriptorProtoMsg): _25.ConfigurationDescriptor;
                    toProto(message: _25.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _25.ConfigurationDescriptor): _25.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _25.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.MsgDescriptor;
                    fromPartial(object: Partial<_25.MsgDescriptor>): _25.MsgDescriptor;
                    fromAmino(object: _25.MsgDescriptorAmino): _25.MsgDescriptor;
                    toAmino(message: _25.MsgDescriptor): _25.MsgDescriptorAmino;
                    fromAminoMsg(object: _25.MsgDescriptorAminoMsg): _25.MsgDescriptor;
                    toAminoMsg(message: _25.MsgDescriptor): _25.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _25.MsgDescriptorProtoMsg): _25.MsgDescriptor;
                    toProto(message: _25.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _25.MsgDescriptor): _25.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _25.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _25.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_25.GetAuthnDescriptorRequest>): _25.GetAuthnDescriptorRequest;
                    fromAmino(_: _25.GetAuthnDescriptorRequestAmino): _25.GetAuthnDescriptorRequest;
                    toAmino(_: _25.GetAuthnDescriptorRequest): _25.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _25.GetAuthnDescriptorRequestAminoMsg): _25.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _25.GetAuthnDescriptorRequest): _25.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _25.GetAuthnDescriptorRequestProtoMsg): _25.GetAuthnDescriptorRequest;
                    toProto(message: _25.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _25.GetAuthnDescriptorRequest): _25.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _25.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_25.GetAuthnDescriptorResponse>): _25.GetAuthnDescriptorResponse;
                    fromAmino(object: _25.GetAuthnDescriptorResponseAmino): _25.GetAuthnDescriptorResponse;
                    toAmino(message: _25.GetAuthnDescriptorResponse): _25.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _25.GetAuthnDescriptorResponseAminoMsg): _25.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _25.GetAuthnDescriptorResponse): _25.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _25.GetAuthnDescriptorResponseProtoMsg): _25.GetAuthnDescriptorResponse;
                    toProto(message: _25.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _25.GetAuthnDescriptorResponse): _25.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _25.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _25.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_25.GetChainDescriptorRequest>): _25.GetChainDescriptorRequest;
                    fromAmino(_: _25.GetChainDescriptorRequestAmino): _25.GetChainDescriptorRequest;
                    toAmino(_: _25.GetChainDescriptorRequest): _25.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _25.GetChainDescriptorRequestAminoMsg): _25.GetChainDescriptorRequest;
                    toAminoMsg(message: _25.GetChainDescriptorRequest): _25.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _25.GetChainDescriptorRequestProtoMsg): _25.GetChainDescriptorRequest;
                    toProto(message: _25.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _25.GetChainDescriptorRequest): _25.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _25.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_25.GetChainDescriptorResponse>): _25.GetChainDescriptorResponse;
                    fromAmino(object: _25.GetChainDescriptorResponseAmino): _25.GetChainDescriptorResponse;
                    toAmino(message: _25.GetChainDescriptorResponse): _25.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _25.GetChainDescriptorResponseAminoMsg): _25.GetChainDescriptorResponse;
                    toAminoMsg(message: _25.GetChainDescriptorResponse): _25.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _25.GetChainDescriptorResponseProtoMsg): _25.GetChainDescriptorResponse;
                    toProto(message: _25.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _25.GetChainDescriptorResponse): _25.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _25.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _25.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_25.GetCodecDescriptorRequest>): _25.GetCodecDescriptorRequest;
                    fromAmino(_: _25.GetCodecDescriptorRequestAmino): _25.GetCodecDescriptorRequest;
                    toAmino(_: _25.GetCodecDescriptorRequest): _25.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _25.GetCodecDescriptorRequestAminoMsg): _25.GetCodecDescriptorRequest;
                    toAminoMsg(message: _25.GetCodecDescriptorRequest): _25.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _25.GetCodecDescriptorRequestProtoMsg): _25.GetCodecDescriptorRequest;
                    toProto(message: _25.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _25.GetCodecDescriptorRequest): _25.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _25.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_25.GetCodecDescriptorResponse>): _25.GetCodecDescriptorResponse;
                    fromAmino(object: _25.GetCodecDescriptorResponseAmino): _25.GetCodecDescriptorResponse;
                    toAmino(message: _25.GetCodecDescriptorResponse): _25.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _25.GetCodecDescriptorResponseAminoMsg): _25.GetCodecDescriptorResponse;
                    toAminoMsg(message: _25.GetCodecDescriptorResponse): _25.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _25.GetCodecDescriptorResponseProtoMsg): _25.GetCodecDescriptorResponse;
                    toProto(message: _25.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _25.GetCodecDescriptorResponse): _25.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _25.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _25.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_25.GetConfigurationDescriptorRequest>): _25.GetConfigurationDescriptorRequest;
                    fromAmino(_: _25.GetConfigurationDescriptorRequestAmino): _25.GetConfigurationDescriptorRequest;
                    toAmino(_: _25.GetConfigurationDescriptorRequest): _25.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _25.GetConfigurationDescriptorRequestAminoMsg): _25.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _25.GetConfigurationDescriptorRequest): _25.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _25.GetConfigurationDescriptorRequestProtoMsg): _25.GetConfigurationDescriptorRequest;
                    toProto(message: _25.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _25.GetConfigurationDescriptorRequest): _25.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _25.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_25.GetConfigurationDescriptorResponse>): _25.GetConfigurationDescriptorResponse;
                    fromAmino(object: _25.GetConfigurationDescriptorResponseAmino): _25.GetConfigurationDescriptorResponse;
                    toAmino(message: _25.GetConfigurationDescriptorResponse): _25.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _25.GetConfigurationDescriptorResponseAminoMsg): _25.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _25.GetConfigurationDescriptorResponse): _25.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _25.GetConfigurationDescriptorResponseProtoMsg): _25.GetConfigurationDescriptorResponse;
                    toProto(message: _25.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _25.GetConfigurationDescriptorResponse): _25.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _25.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _25.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_25.GetQueryServicesDescriptorRequest>): _25.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _25.GetQueryServicesDescriptorRequestAmino): _25.GetQueryServicesDescriptorRequest;
                    toAmino(_: _25.GetQueryServicesDescriptorRequest): _25.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _25.GetQueryServicesDescriptorRequestAminoMsg): _25.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _25.GetQueryServicesDescriptorRequest): _25.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _25.GetQueryServicesDescriptorRequestProtoMsg): _25.GetQueryServicesDescriptorRequest;
                    toProto(message: _25.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _25.GetQueryServicesDescriptorRequest): _25.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _25.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_25.GetQueryServicesDescriptorResponse>): _25.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _25.GetQueryServicesDescriptorResponseAmino): _25.GetQueryServicesDescriptorResponse;
                    toAmino(message: _25.GetQueryServicesDescriptorResponse): _25.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _25.GetQueryServicesDescriptorResponseAminoMsg): _25.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _25.GetQueryServicesDescriptorResponse): _25.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _25.GetQueryServicesDescriptorResponseProtoMsg): _25.GetQueryServicesDescriptorResponse;
                    toProto(message: _25.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _25.GetQueryServicesDescriptorResponse): _25.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _25.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _25.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_25.GetTxDescriptorRequest>): _25.GetTxDescriptorRequest;
                    fromAmino(_: _25.GetTxDescriptorRequestAmino): _25.GetTxDescriptorRequest;
                    toAmino(_: _25.GetTxDescriptorRequest): _25.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _25.GetTxDescriptorRequestAminoMsg): _25.GetTxDescriptorRequest;
                    toAminoMsg(message: _25.GetTxDescriptorRequest): _25.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _25.GetTxDescriptorRequestProtoMsg): _25.GetTxDescriptorRequest;
                    toProto(message: _25.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _25.GetTxDescriptorRequest): _25.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _25.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_25.GetTxDescriptorResponse>): _25.GetTxDescriptorResponse;
                    fromAmino(object: _25.GetTxDescriptorResponseAmino): _25.GetTxDescriptorResponse;
                    toAmino(message: _25.GetTxDescriptorResponse): _25.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _25.GetTxDescriptorResponseAminoMsg): _25.GetTxDescriptorResponse;
                    toAminoMsg(message: _25.GetTxDescriptorResponse): _25.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _25.GetTxDescriptorResponseProtoMsg): _25.GetTxDescriptorResponse;
                    toProto(message: _25.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _25.GetTxDescriptorResponse): _25.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _25.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.QueryServicesDescriptor;
                    fromPartial(object: Partial<_25.QueryServicesDescriptor>): _25.QueryServicesDescriptor;
                    fromAmino(object: _25.QueryServicesDescriptorAmino): _25.QueryServicesDescriptor;
                    toAmino(message: _25.QueryServicesDescriptor): _25.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _25.QueryServicesDescriptorAminoMsg): _25.QueryServicesDescriptor;
                    toAminoMsg(message: _25.QueryServicesDescriptor): _25.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _25.QueryServicesDescriptorProtoMsg): _25.QueryServicesDescriptor;
                    toProto(message: _25.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _25.QueryServicesDescriptor): _25.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _25.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.QueryServiceDescriptor;
                    fromPartial(object: Partial<_25.QueryServiceDescriptor>): _25.QueryServiceDescriptor;
                    fromAmino(object: _25.QueryServiceDescriptorAmino): _25.QueryServiceDescriptor;
                    toAmino(message: _25.QueryServiceDescriptor): _25.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _25.QueryServiceDescriptorAminoMsg): _25.QueryServiceDescriptor;
                    toAminoMsg(message: _25.QueryServiceDescriptor): _25.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _25.QueryServiceDescriptorProtoMsg): _25.QueryServiceDescriptor;
                    toProto(message: _25.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _25.QueryServiceDescriptor): _25.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _25.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.QueryMethodDescriptor;
                    fromPartial(object: Partial<_25.QueryMethodDescriptor>): _25.QueryMethodDescriptor;
                    fromAmino(object: _25.QueryMethodDescriptorAmino): _25.QueryMethodDescriptor;
                    toAmino(message: _25.QueryMethodDescriptor): _25.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _25.QueryMethodDescriptorAminoMsg): _25.QueryMethodDescriptor;
                    toAminoMsg(message: _25.QueryMethodDescriptor): _25.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _25.QueryMethodDescriptorProtoMsg): _25.QueryMethodDescriptor;
                    toProto(message: _25.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _25.QueryMethodDescriptor): _25.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _26.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.Snapshot;
                    fromPartial(object: Partial<_26.Snapshot>): _26.Snapshot;
                    fromAmino(object: _26.SnapshotAmino): _26.Snapshot;
                    toAmino(message: _26.Snapshot): _26.SnapshotAmino;
                    fromAminoMsg(object: _26.SnapshotAminoMsg): _26.Snapshot;
                    toAminoMsg(message: _26.Snapshot): _26.SnapshotAminoMsg;
                    fromProtoMsg(message: _26.SnapshotProtoMsg): _26.Snapshot;
                    toProto(message: _26.Snapshot): Uint8Array;
                    toProtoMsg(message: _26.Snapshot): _26.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _26.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.Metadata;
                    fromPartial(object: Partial<_26.Metadata>): _26.Metadata;
                    fromAmino(object: _26.MetadataAmino): _26.Metadata;
                    toAmino(message: _26.Metadata): _26.MetadataAmino;
                    fromAminoMsg(object: _26.MetadataAminoMsg): _26.Metadata;
                    toAminoMsg(message: _26.Metadata): _26.MetadataAminoMsg;
                    fromProtoMsg(message: _26.MetadataProtoMsg): _26.Metadata;
                    toProto(message: _26.Metadata): Uint8Array;
                    toProtoMsg(message: _26.Metadata): _26.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _26.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.SnapshotItem;
                    fromPartial(object: Partial<_26.SnapshotItem>): _26.SnapshotItem;
                    fromAmino(object: _26.SnapshotItemAmino): _26.SnapshotItem;
                    toAmino(message: _26.SnapshotItem): _26.SnapshotItemAmino;
                    fromAminoMsg(object: _26.SnapshotItemAminoMsg): _26.SnapshotItem;
                    toAminoMsg(message: _26.SnapshotItem): _26.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _26.SnapshotItemProtoMsg): _26.SnapshotItem;
                    toProto(message: _26.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _26.SnapshotItem): _26.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _26.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.SnapshotStoreItem;
                    fromPartial(object: Partial<_26.SnapshotStoreItem>): _26.SnapshotStoreItem;
                    fromAmino(object: _26.SnapshotStoreItemAmino): _26.SnapshotStoreItem;
                    toAmino(message: _26.SnapshotStoreItem): _26.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _26.SnapshotStoreItemAminoMsg): _26.SnapshotStoreItem;
                    toAminoMsg(message: _26.SnapshotStoreItem): _26.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _26.SnapshotStoreItemProtoMsg): _26.SnapshotStoreItem;
                    toProto(message: _26.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _26.SnapshotStoreItem): _26.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _26.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.SnapshotIAVLItem;
                    fromPartial(object: Partial<_26.SnapshotIAVLItem>): _26.SnapshotIAVLItem;
                    fromAmino(object: _26.SnapshotIAVLItemAmino): _26.SnapshotIAVLItem;
                    toAmino(message: _26.SnapshotIAVLItem): _26.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _26.SnapshotIAVLItemAminoMsg): _26.SnapshotIAVLItem;
                    toAminoMsg(message: _26.SnapshotIAVLItem): _26.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _26.SnapshotIAVLItemProtoMsg): _26.SnapshotIAVLItem;
                    toProto(message: _26.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _26.SnapshotIAVLItem): _26.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _26.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_26.SnapshotExtensionMeta>): _26.SnapshotExtensionMeta;
                    fromAmino(object: _26.SnapshotExtensionMetaAmino): _26.SnapshotExtensionMeta;
                    toAmino(message: _26.SnapshotExtensionMeta): _26.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _26.SnapshotExtensionMetaAminoMsg): _26.SnapshotExtensionMeta;
                    toAminoMsg(message: _26.SnapshotExtensionMeta): _26.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _26.SnapshotExtensionMetaProtoMsg): _26.SnapshotExtensionMeta;
                    toProto(message: _26.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _26.SnapshotExtensionMeta): _26.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _26.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_26.SnapshotExtensionPayload>): _26.SnapshotExtensionPayload;
                    fromAmino(object: _26.SnapshotExtensionPayloadAmino): _26.SnapshotExtensionPayload;
                    toAmino(message: _26.SnapshotExtensionPayload): _26.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _26.SnapshotExtensionPayloadAminoMsg): _26.SnapshotExtensionPayload;
                    toAminoMsg(message: _26.SnapshotExtensionPayload): _26.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _26.SnapshotExtensionPayloadProtoMsg): _26.SnapshotExtensionPayload;
                    toProto(message: _26.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _26.SnapshotExtensionPayload): _26.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _28.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.StoreKVPair;
                    fromPartial(object: Partial<_28.StoreKVPair>): _28.StoreKVPair;
                    fromAmino(object: _28.StoreKVPairAmino): _28.StoreKVPair;
                    toAmino(message: _28.StoreKVPair): _28.StoreKVPairAmino;
                    fromAminoMsg(object: _28.StoreKVPairAminoMsg): _28.StoreKVPair;
                    toAminoMsg(message: _28.StoreKVPair): _28.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _28.StoreKVPairProtoMsg): _28.StoreKVPair;
                    toProto(message: _28.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _28.StoreKVPair): _28.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _28.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.BlockMetadata;
                    fromPartial(object: Partial<_28.BlockMetadata>): _28.BlockMetadata;
                    fromAmino(object: _28.BlockMetadataAmino): _28.BlockMetadata;
                    toAmino(message: _28.BlockMetadata): _28.BlockMetadataAmino;
                    fromAminoMsg(object: _28.BlockMetadataAminoMsg): _28.BlockMetadata;
                    toAminoMsg(message: _28.BlockMetadata): _28.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _28.BlockMetadataProtoMsg): _28.BlockMetadata;
                    toProto(message: _28.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _28.BlockMetadata): _28.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _28.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_28.BlockMetadata_DeliverTx>): _28.BlockMetadata_DeliverTx;
                    fromAmino(object: _28.BlockMetadata_DeliverTxAmino): _28.BlockMetadata_DeliverTx;
                    toAmino(message: _28.BlockMetadata_DeliverTx): _28.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _28.BlockMetadata_DeliverTxAminoMsg): _28.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _28.BlockMetadata_DeliverTx): _28.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _28.BlockMetadata_DeliverTxProtoMsg): _28.BlockMetadata_DeliverTx;
                    toProto(message: _28.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _28.BlockMetadata_DeliverTx): _28.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _27.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.CommitInfo;
                    fromPartial(object: Partial<_27.CommitInfo>): _27.CommitInfo;
                    fromAmino(object: _27.CommitInfoAmino): _27.CommitInfo;
                    toAmino(message: _27.CommitInfo): _27.CommitInfoAmino;
                    fromAminoMsg(object: _27.CommitInfoAminoMsg): _27.CommitInfo;
                    toAminoMsg(message: _27.CommitInfo): _27.CommitInfoAminoMsg;
                    fromProtoMsg(message: _27.CommitInfoProtoMsg): _27.CommitInfo;
                    toProto(message: _27.CommitInfo): Uint8Array;
                    toProtoMsg(message: _27.CommitInfo): _27.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _27.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.StoreInfo;
                    fromPartial(object: Partial<_27.StoreInfo>): _27.StoreInfo;
                    fromAmino(object: _27.StoreInfoAmino): _27.StoreInfo;
                    toAmino(message: _27.StoreInfo): _27.StoreInfoAmino;
                    fromAminoMsg(object: _27.StoreInfoAminoMsg): _27.StoreInfo;
                    toAminoMsg(message: _27.StoreInfo): _27.StoreInfoAminoMsg;
                    fromProtoMsg(message: _27.StoreInfoProtoMsg): _27.StoreInfo;
                    toProto(message: _27.StoreInfo): Uint8Array;
                    toProtoMsg(message: _27.StoreInfo): _27.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _27.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.CommitID;
                    fromPartial(object: Partial<_27.CommitID>): _27.CommitID;
                    fromAmino(object: _27.CommitIDAmino): _27.CommitID;
                    toAmino(message: _27.CommitID): _27.CommitIDAmino;
                    fromAminoMsg(object: _27.CommitIDAminoMsg): _27.CommitID;
                    toAminoMsg(message: _27.CommitID): _27.CommitIDAminoMsg;
                    fromProtoMsg(message: _27.CommitIDProtoMsg): _27.CommitID;
                    toProto(message: _27.CommitID): Uint8Array;
                    toProtoMsg(message: _27.CommitID): _27.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _155.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _29.GetNodeInfoRequest): Promise<_29.GetNodeInfoResponse>;
                    getSyncing(request?: _29.GetSyncingRequest): Promise<_29.GetSyncingResponse>;
                    getLatestBlock(request?: _29.GetLatestBlockRequest): Promise<_29.GetLatestBlockResponse>;
                    getBlockByHeight(request: _29.GetBlockByHeightRequest): Promise<_29.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _29.GetLatestValidatorSetRequest): Promise<_29.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _29.GetValidatorSetByHeightRequest): Promise<_29.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _140.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _29.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_29.GetValidatorSetByHeightRequest>): _29.GetValidatorSetByHeightRequest;
                    fromAmino(object: _29.GetValidatorSetByHeightRequestAmino): _29.GetValidatorSetByHeightRequest;
                    toAmino(message: _29.GetValidatorSetByHeightRequest): _29.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _29.GetValidatorSetByHeightRequestAminoMsg): _29.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _29.GetValidatorSetByHeightRequest): _29.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _29.GetValidatorSetByHeightRequestProtoMsg): _29.GetValidatorSetByHeightRequest;
                    toProto(message: _29.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _29.GetValidatorSetByHeightRequest): _29.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _29.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_29.GetValidatorSetByHeightResponse>): _29.GetValidatorSetByHeightResponse;
                    fromAmino(object: _29.GetValidatorSetByHeightResponseAmino): _29.GetValidatorSetByHeightResponse;
                    toAmino(message: _29.GetValidatorSetByHeightResponse): _29.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _29.GetValidatorSetByHeightResponseAminoMsg): _29.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _29.GetValidatorSetByHeightResponse): _29.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _29.GetValidatorSetByHeightResponseProtoMsg): _29.GetValidatorSetByHeightResponse;
                    toProto(message: _29.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _29.GetValidatorSetByHeightResponse): _29.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _29.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_29.GetLatestValidatorSetRequest>): _29.GetLatestValidatorSetRequest;
                    fromAmino(object: _29.GetLatestValidatorSetRequestAmino): _29.GetLatestValidatorSetRequest;
                    toAmino(message: _29.GetLatestValidatorSetRequest): _29.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _29.GetLatestValidatorSetRequestAminoMsg): _29.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _29.GetLatestValidatorSetRequest): _29.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _29.GetLatestValidatorSetRequestProtoMsg): _29.GetLatestValidatorSetRequest;
                    toProto(message: _29.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _29.GetLatestValidatorSetRequest): _29.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _29.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_29.GetLatestValidatorSetResponse>): _29.GetLatestValidatorSetResponse;
                    fromAmino(object: _29.GetLatestValidatorSetResponseAmino): _29.GetLatestValidatorSetResponse;
                    toAmino(message: _29.GetLatestValidatorSetResponse): _29.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _29.GetLatestValidatorSetResponseAminoMsg): _29.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _29.GetLatestValidatorSetResponse): _29.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _29.GetLatestValidatorSetResponseProtoMsg): _29.GetLatestValidatorSetResponse;
                    toProto(message: _29.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _29.GetLatestValidatorSetResponse): _29.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _29.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.Validator;
                    fromPartial(object: Partial<_29.Validator>): _29.Validator;
                    fromAmino(object: _29.ValidatorAmino): _29.Validator;
                    toAmino(message: _29.Validator): _29.ValidatorAmino;
                    fromAminoMsg(object: _29.ValidatorAminoMsg): _29.Validator;
                    toAminoMsg(message: _29.Validator): _29.ValidatorAminoMsg;
                    fromProtoMsg(message: _29.ValidatorProtoMsg): _29.Validator;
                    toProto(message: _29.Validator): Uint8Array;
                    toProtoMsg(message: _29.Validator): _29.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _29.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_29.GetBlockByHeightRequest>): _29.GetBlockByHeightRequest;
                    fromAmino(object: _29.GetBlockByHeightRequestAmino): _29.GetBlockByHeightRequest;
                    toAmino(message: _29.GetBlockByHeightRequest): _29.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _29.GetBlockByHeightRequestAminoMsg): _29.GetBlockByHeightRequest;
                    toAminoMsg(message: _29.GetBlockByHeightRequest): _29.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _29.GetBlockByHeightRequestProtoMsg): _29.GetBlockByHeightRequest;
                    toProto(message: _29.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _29.GetBlockByHeightRequest): _29.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _29.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_29.GetBlockByHeightResponse>): _29.GetBlockByHeightResponse;
                    fromAmino(object: _29.GetBlockByHeightResponseAmino): _29.GetBlockByHeightResponse;
                    toAmino(message: _29.GetBlockByHeightResponse): _29.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _29.GetBlockByHeightResponseAminoMsg): _29.GetBlockByHeightResponse;
                    toAminoMsg(message: _29.GetBlockByHeightResponse): _29.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _29.GetBlockByHeightResponseProtoMsg): _29.GetBlockByHeightResponse;
                    toProto(message: _29.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _29.GetBlockByHeightResponse): _29.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _29.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _29.GetLatestBlockRequest;
                    fromPartial(_: Partial<_29.GetLatestBlockRequest>): _29.GetLatestBlockRequest;
                    fromAmino(_: _29.GetLatestBlockRequestAmino): _29.GetLatestBlockRequest;
                    toAmino(_: _29.GetLatestBlockRequest): _29.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _29.GetLatestBlockRequestAminoMsg): _29.GetLatestBlockRequest;
                    toAminoMsg(message: _29.GetLatestBlockRequest): _29.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _29.GetLatestBlockRequestProtoMsg): _29.GetLatestBlockRequest;
                    toProto(message: _29.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _29.GetLatestBlockRequest): _29.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _29.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.GetLatestBlockResponse;
                    fromPartial(object: Partial<_29.GetLatestBlockResponse>): _29.GetLatestBlockResponse;
                    fromAmino(object: _29.GetLatestBlockResponseAmino): _29.GetLatestBlockResponse;
                    toAmino(message: _29.GetLatestBlockResponse): _29.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _29.GetLatestBlockResponseAminoMsg): _29.GetLatestBlockResponse;
                    toAminoMsg(message: _29.GetLatestBlockResponse): _29.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _29.GetLatestBlockResponseProtoMsg): _29.GetLatestBlockResponse;
                    toProto(message: _29.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _29.GetLatestBlockResponse): _29.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _29.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _29.GetSyncingRequest;
                    fromPartial(_: Partial<_29.GetSyncingRequest>): _29.GetSyncingRequest;
                    fromAmino(_: _29.GetSyncingRequestAmino): _29.GetSyncingRequest;
                    toAmino(_: _29.GetSyncingRequest): _29.GetSyncingRequestAmino;
                    fromAminoMsg(object: _29.GetSyncingRequestAminoMsg): _29.GetSyncingRequest;
                    toAminoMsg(message: _29.GetSyncingRequest): _29.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _29.GetSyncingRequestProtoMsg): _29.GetSyncingRequest;
                    toProto(message: _29.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _29.GetSyncingRequest): _29.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _29.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.GetSyncingResponse;
                    fromPartial(object: Partial<_29.GetSyncingResponse>): _29.GetSyncingResponse;
                    fromAmino(object: _29.GetSyncingResponseAmino): _29.GetSyncingResponse;
                    toAmino(message: _29.GetSyncingResponse): _29.GetSyncingResponseAmino;
                    fromAminoMsg(object: _29.GetSyncingResponseAminoMsg): _29.GetSyncingResponse;
                    toAminoMsg(message: _29.GetSyncingResponse): _29.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _29.GetSyncingResponseProtoMsg): _29.GetSyncingResponse;
                    toProto(message: _29.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _29.GetSyncingResponse): _29.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _29.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _29.GetNodeInfoRequest;
                    fromPartial(_: Partial<_29.GetNodeInfoRequest>): _29.GetNodeInfoRequest;
                    fromAmino(_: _29.GetNodeInfoRequestAmino): _29.GetNodeInfoRequest;
                    toAmino(_: _29.GetNodeInfoRequest): _29.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _29.GetNodeInfoRequestAminoMsg): _29.GetNodeInfoRequest;
                    toAminoMsg(message: _29.GetNodeInfoRequest): _29.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _29.GetNodeInfoRequestProtoMsg): _29.GetNodeInfoRequest;
                    toProto(message: _29.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _29.GetNodeInfoRequest): _29.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _29.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.GetNodeInfoResponse;
                    fromPartial(object: Partial<_29.GetNodeInfoResponse>): _29.GetNodeInfoResponse;
                    fromAmino(object: _29.GetNodeInfoResponseAmino): _29.GetNodeInfoResponse;
                    toAmino(message: _29.GetNodeInfoResponse): _29.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _29.GetNodeInfoResponseAminoMsg): _29.GetNodeInfoResponse;
                    toAminoMsg(message: _29.GetNodeInfoResponse): _29.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _29.GetNodeInfoResponseProtoMsg): _29.GetNodeInfoResponse;
                    toProto(message: _29.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _29.GetNodeInfoResponse): _29.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _29.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.VersionInfo;
                    fromPartial(object: Partial<_29.VersionInfo>): _29.VersionInfo;
                    fromAmino(object: _29.VersionInfoAmino): _29.VersionInfo;
                    toAmino(message: _29.VersionInfo): _29.VersionInfoAmino;
                    fromAminoMsg(object: _29.VersionInfoAminoMsg): _29.VersionInfo;
                    toAminoMsg(message: _29.VersionInfo): _29.VersionInfoAminoMsg;
                    fromProtoMsg(message: _29.VersionInfoProtoMsg): _29.VersionInfo;
                    toProto(message: _29.VersionInfo): Uint8Array;
                    toProtoMsg(message: _29.VersionInfo): _29.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _29.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.Module;
                    fromPartial(object: Partial<_29.Module>): _29.Module;
                    fromAmino(object: _29.ModuleAmino): _29.Module;
                    toAmino(message: _29.Module): _29.ModuleAmino;
                    fromAminoMsg(object: _29.ModuleAminoMsg): _29.Module;
                    toAminoMsg(message: _29.Module): _29.ModuleAminoMsg;
                    fromProtoMsg(message: _29.ModuleProtoMsg): _29.Module;
                    toProto(message: _29.Module): Uint8Array;
                    toProtoMsg(message: _29.Module): _29.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _30.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.Coin;
                fromPartial(object: Partial<_30.Coin>): _30.Coin;
                fromAmino(object: _30.CoinAmino): _30.Coin;
                toAmino(message: _30.Coin): _30.CoinAmino;
                fromAminoMsg(object: _30.CoinAminoMsg): _30.Coin;
                toAminoMsg(message: _30.Coin): _30.CoinAminoMsg;
                fromProtoMsg(message: _30.CoinProtoMsg): _30.Coin;
                toProto(message: _30.Coin): Uint8Array;
                toProtoMsg(message: _30.Coin): _30.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _30.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.DecCoin;
                fromPartial(object: Partial<_30.DecCoin>): _30.DecCoin;
                fromAmino(object: _30.DecCoinAmino): _30.DecCoin;
                toAmino(message: _30.DecCoin): _30.DecCoinAmino;
                fromAminoMsg(object: _30.DecCoinAminoMsg): _30.DecCoin;
                toAminoMsg(message: _30.DecCoin): _30.DecCoinAminoMsg;
                fromProtoMsg(message: _30.DecCoinProtoMsg): _30.DecCoin;
                toProto(message: _30.DecCoin): Uint8Array;
                toProtoMsg(message: _30.DecCoin): _30.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _30.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.IntProto;
                fromPartial(object: Partial<_30.IntProto>): _30.IntProto;
                fromAmino(object: _30.IntProtoAmino): _30.IntProto;
                toAmino(message: _30.IntProto): _30.IntProtoAmino;
                fromAminoMsg(object: _30.IntProtoAminoMsg): _30.IntProto;
                toAminoMsg(message: _30.IntProto): _30.IntProtoAminoMsg;
                fromProtoMsg(message: _30.IntProtoProtoMsg): _30.IntProto;
                toProto(message: _30.IntProto): Uint8Array;
                toProtoMsg(message: _30.IntProto): _30.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _30.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.DecProto;
                fromPartial(object: Partial<_30.DecProto>): _30.DecProto;
                fromAmino(object: _30.DecProtoAmino): _30.DecProto;
                toAmino(message: _30.DecProto): _30.DecProtoAmino;
                fromAminoMsg(object: _30.DecProtoAminoMsg): _30.DecProto;
                toAminoMsg(message: _30.DecProto): _30.DecProtoAminoMsg;
                fromProtoMsg(message: _30.DecProtoProtoMsg): _30.DecProto;
                toProto(message: _30.DecProto): Uint8Array;
                toProtoMsg(message: _30.DecProto): _30.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _32.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.GenesisOwners;
                fromPartial(object: Partial<_32.GenesisOwners>): _32.GenesisOwners;
                fromAmino(object: _32.GenesisOwnersAmino): _32.GenesisOwners;
                toAmino(message: _32.GenesisOwners): _32.GenesisOwnersAmino;
                fromAminoMsg(object: _32.GenesisOwnersAminoMsg): _32.GenesisOwners;
                toAminoMsg(message: _32.GenesisOwners): _32.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _32.GenesisOwnersProtoMsg): _32.GenesisOwners;
                toProto(message: _32.GenesisOwners): Uint8Array;
                toProtoMsg(message: _32.GenesisOwners): _32.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _31.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.Capability;
                fromPartial(object: Partial<_31.Capability>): _31.Capability;
                fromAmino(object: _31.CapabilityAmino): _31.Capability;
                toAmino(message: _31.Capability): _31.CapabilityAmino;
                fromAminoMsg(object: _31.CapabilityAminoMsg): _31.Capability;
                toAminoMsg(message: _31.Capability): _31.CapabilityAminoMsg;
                fromProtoMsg(message: _31.CapabilityProtoMsg): _31.Capability;
                toProto(message: _31.Capability): Uint8Array;
                toProtoMsg(message: _31.Capability): _31.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _31.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.Owner;
                fromPartial(object: Partial<_31.Owner>): _31.Owner;
                fromAmino(object: _31.OwnerAmino): _31.Owner;
                toAmino(message: _31.Owner): _31.OwnerAmino;
                fromAminoMsg(object: _31.OwnerAminoMsg): _31.Owner;
                toAminoMsg(message: _31.Owner): _31.OwnerAminoMsg;
                fromProtoMsg(message: _31.OwnerProtoMsg): _31.Owner;
                toProto(message: _31.Owner): Uint8Array;
                toProtoMsg(message: _31.Owner): _31.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _31.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.CapabilityOwners;
                fromPartial(object: Partial<_31.CapabilityOwners>): _31.CapabilityOwners;
                fromAmino(object: _31.CapabilityOwnersAmino): _31.CapabilityOwners;
                toAmino(message: _31.CapabilityOwners): _31.CapabilityOwnersAmino;
                fromAminoMsg(object: _31.CapabilityOwnersAminoMsg): _31.CapabilityOwners;
                toAminoMsg(message: _31.CapabilityOwners): _31.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _31.CapabilityOwnersProtoMsg): _31.CapabilityOwners;
                toProto(message: _31.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _31.CapabilityOwners): _31.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _168.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _34.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _34.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _34.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _34.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _34.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _34.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _34.MsgVerifyInvariant) => _34.MsgVerifyInvariantAmino;
                    fromAmino: (object: _34.MsgVerifyInvariantAmino) => _34.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _34.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MsgVerifyInvariant;
                fromPartial(object: Partial<_34.MsgVerifyInvariant>): _34.MsgVerifyInvariant;
                fromAmino(object: _34.MsgVerifyInvariantAmino): _34.MsgVerifyInvariant;
                toAmino(message: _34.MsgVerifyInvariant): _34.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _34.MsgVerifyInvariantAminoMsg): _34.MsgVerifyInvariant;
                toAminoMsg(message: _34.MsgVerifyInvariant): _34.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _34.MsgVerifyInvariantProtoMsg): _34.MsgVerifyInvariant;
                toProto(message: _34.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _34.MsgVerifyInvariant): _34.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _34.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_34.MsgVerifyInvariantResponse>): _34.MsgVerifyInvariantResponse;
                fromAmino(_: _34.MsgVerifyInvariantResponseAmino): _34.MsgVerifyInvariantResponse;
                toAmino(_: _34.MsgVerifyInvariantResponse): _34.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _34.MsgVerifyInvariantResponseAminoMsg): _34.MsgVerifyInvariantResponse;
                toAminoMsg(message: _34.MsgVerifyInvariantResponse): _34.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _34.MsgVerifyInvariantResponseProtoMsg): _34.MsgVerifyInvariantResponse;
                toProto(message: _34.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _34.MsgVerifyInvariantResponse): _34.MsgVerifyInvariantResponseProtoMsg;
            };
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
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _35.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.PubKey;
                fromPartial(object: Partial<_35.PubKey>): _35.PubKey;
                fromAmino(object: _35.PubKeyAmino): _35.PubKey;
                toAmino(message: _35.PubKey): _35.PubKeyAmino;
                fromAminoMsg(object: _35.PubKeyAminoMsg): _35.PubKey;
                toAminoMsg(message: _35.PubKey): _35.PubKeyAminoMsg;
                fromProtoMsg(message: _35.PubKeyProtoMsg): _35.PubKey;
                toProto(message: _35.PubKey): Uint8Array;
                toProtoMsg(message: _35.PubKey): _35.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _35.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.PrivKey;
                fromPartial(object: Partial<_35.PrivKey>): _35.PrivKey;
                fromAmino(object: _35.PrivKeyAmino): _35.PrivKey;
                toAmino(message: _35.PrivKey): _35.PrivKeyAmino;
                fromAminoMsg(object: _35.PrivKeyAminoMsg): _35.PrivKey;
                toAminoMsg(message: _35.PrivKey): _35.PrivKeyAminoMsg;
                fromProtoMsg(message: _35.PrivKeyProtoMsg): _35.PrivKey;
                toProto(message: _35.PrivKey): Uint8Array;
                toProtoMsg(message: _35.PrivKey): _35.PrivKeyProtoMsg;
            };
        };
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
            MsgClientImpl: typeof _169.MsgClientImpl;
            QueryClientImpl: typeof _156.QueryClientImpl;
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
            LCDQueryClient: typeof _141.LCDQueryClient;
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
                encode(_: _42.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _42.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_42.MsgWithdrawDelegatorRewardResponse>): _42.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _42.MsgWithdrawDelegatorRewardResponseAmino): _42.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _42.MsgWithdrawDelegatorRewardResponse): _42.MsgWithdrawDelegatorRewardResponseAmino;
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
                encode(_: _42.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _42.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_42.MsgWithdrawValidatorCommissionResponse>): _42.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _42.MsgWithdrawValidatorCommissionResponseAmino): _42.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _42.MsgWithdrawValidatorCommissionResponse): _42.MsgWithdrawValidatorCommissionResponseAmino;
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
            MsgClientImpl: typeof _170.MsgClientImpl;
            QueryClientImpl: typeof _157.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _45.QueryEvidenceRequest): Promise<_45.QueryEvidenceResponse>;
                allEvidence(request?: _45.QueryAllEvidenceRequest): Promise<_45.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _142.LCDQueryClient;
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
            MsgClientImpl: typeof _171.MsgClientImpl;
            QueryClientImpl: typeof _158.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _49.QueryAllowanceRequest): Promise<_49.QueryAllowanceResponse>;
                allowances(request: _49.QueryAllowancesRequest): Promise<_49.QueryAllowancesResponse>;
                allowancesByGranter(request: _49.QueryAllowancesByGranterRequest): Promise<_49.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _143.LCDQueryClient;
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
        const v1beta1: {
            MsgClientImpl: typeof _172.MsgClientImpl;
            QueryClientImpl: typeof _159.QueryClientImpl;
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
            LCDQueryClient: typeof _144.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _55.MsgSubmitProposal): {
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
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _55.MsgSubmitProposal) => _55.MsgSubmitProposalAmino;
                    fromAmino: (object: _55.MsgSubmitProposalAmino) => _55.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _55.MsgVote) => _55.MsgVoteAmino;
                    fromAmino: (object: _55.MsgVoteAmino) => _55.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _55.MsgVoteWeighted) => _55.MsgVoteWeightedAmino;
                    fromAmino: (object: _55.MsgVoteWeightedAmino) => _55.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
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
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _53.TextProposal;
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
            TextProposal: {
                typeUrl: string;
                encode(message: _53.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.TextProposal;
                fromPartial(object: Partial<_53.TextProposal>): _53.TextProposal;
                fromAmino(object: _53.TextProposalAmino): _53.TextProposal;
                toAmino(message: _53.TextProposal): _53.TextProposalAmino;
                fromAminoMsg(object: _53.TextProposalAminoMsg): _53.TextProposal;
                toAminoMsg(message: _53.TextProposal): _53.TextProposalAminoMsg;
                fromProtoMsg(message: _53.TextProposalProtoMsg): _53.TextProposal;
                toProto(message: _53.TextProposal): Uint8Array;
                toProtoMsg(message: _53.TextProposal): _53.TextProposalProtoMsg;
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
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _160.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                inflation(request?: _58.QueryInflationRequest): Promise<_58.QueryInflationResponse>;
                annualProvisions(request?: _58.QueryAnnualProvisionsRequest): Promise<_58.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _145.LCDQueryClient;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _58.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.QueryInflationRequest;
                fromPartial(_: Partial<_58.QueryInflationRequest>): _58.QueryInflationRequest;
                fromAmino(_: _58.QueryInflationRequestAmino): _58.QueryInflationRequest;
                toAmino(_: _58.QueryInflationRequest): _58.QueryInflationRequestAmino;
                fromAminoMsg(object: _58.QueryInflationRequestAminoMsg): _58.QueryInflationRequest;
                toAminoMsg(message: _58.QueryInflationRequest): _58.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _58.QueryInflationRequestProtoMsg): _58.QueryInflationRequest;
                toProto(message: _58.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _58.QueryInflationRequest): _58.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _58.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryInflationResponse;
                fromPartial(object: Partial<_58.QueryInflationResponse>): _58.QueryInflationResponse;
                fromAmino(object: _58.QueryInflationResponseAmino): _58.QueryInflationResponse;
                toAmino(message: _58.QueryInflationResponse): _58.QueryInflationResponseAmino;
                fromAminoMsg(object: _58.QueryInflationResponseAminoMsg): _58.QueryInflationResponse;
                toAminoMsg(message: _58.QueryInflationResponse): _58.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _58.QueryInflationResponseProtoMsg): _58.QueryInflationResponse;
                toProto(message: _58.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _58.QueryInflationResponse): _58.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _58.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_58.QueryAnnualProvisionsRequest>): _58.QueryAnnualProvisionsRequest;
                fromAmino(_: _58.QueryAnnualProvisionsRequestAmino): _58.QueryAnnualProvisionsRequest;
                toAmino(_: _58.QueryAnnualProvisionsRequest): _58.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _58.QueryAnnualProvisionsRequestAminoMsg): _58.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _58.QueryAnnualProvisionsRequest): _58.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryAnnualProvisionsRequestProtoMsg): _58.QueryAnnualProvisionsRequest;
                toProto(message: _58.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryAnnualProvisionsRequest): _58.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _58.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_58.QueryAnnualProvisionsResponse>): _58.QueryAnnualProvisionsResponse;
                fromAmino(object: _58.QueryAnnualProvisionsResponseAmino): _58.QueryAnnualProvisionsResponse;
                toAmino(message: _58.QueryAnnualProvisionsResponse): _58.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _58.QueryAnnualProvisionsResponseAminoMsg): _58.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _58.QueryAnnualProvisionsResponse): _58.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryAnnualProvisionsResponseProtoMsg): _58.QueryAnnualProvisionsResponse;
                toProto(message: _58.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryAnnualProvisionsResponse): _58.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _57.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.Minter;
                fromPartial(object: Partial<_57.Minter>): _57.Minter;
                fromAmino(object: _57.MinterAmino): _57.Minter;
                toAmino(message: _57.Minter): _57.MinterAmino;
                fromAminoMsg(object: _57.MinterAminoMsg): _57.Minter;
                toAminoMsg(message: _57.Minter): _57.MinterAminoMsg;
                fromProtoMsg(message: _57.MinterProtoMsg): _57.Minter;
                toProto(message: _57.Minter): Uint8Array;
                toProtoMsg(message: _57.Minter): _57.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _57.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.Params;
                fromPartial(object: Partial<_57.Params>): _57.Params;
                fromAmino(object: _57.ParamsAmino): _57.Params;
                toAmino(message: _57.Params): _57.ParamsAmino;
                fromAminoMsg(object: _57.ParamsAminoMsg): _57.Params;
                toAminoMsg(message: _57.Params): _57.ParamsAminoMsg;
                fromProtoMsg(message: _57.ParamsProtoMsg): _57.Params;
                toProto(message: _57.Params): Uint8Array;
                toProtoMsg(message: _57.Params): _57.ParamsProtoMsg;
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
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _161.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _146.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _60.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryParamsRequest;
                fromPartial(object: Partial<_60.QueryParamsRequest>): _60.QueryParamsRequest;
                fromAmino(object: _60.QueryParamsRequestAmino): _60.QueryParamsRequest;
                toAmino(message: _60.QueryParamsRequest): _60.QueryParamsRequestAmino;
                fromAminoMsg(object: _60.QueryParamsRequestAminoMsg): _60.QueryParamsRequest;
                toAminoMsg(message: _60.QueryParamsRequest): _60.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryParamsRequestProtoMsg): _60.QueryParamsRequest;
                toProto(message: _60.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryParamsRequest): _60.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _60.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryParamsResponse;
                fromPartial(object: Partial<_60.QueryParamsResponse>): _60.QueryParamsResponse;
                fromAmino(object: _60.QueryParamsResponseAmino): _60.QueryParamsResponse;
                toAmino(message: _60.QueryParamsResponse): _60.QueryParamsResponseAmino;
                fromAminoMsg(object: _60.QueryParamsResponseAminoMsg): _60.QueryParamsResponse;
                toAminoMsg(message: _60.QueryParamsResponse): _60.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryParamsResponseProtoMsg): _60.QueryParamsResponse;
                toProto(message: _60.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryParamsResponse): _60.QueryParamsResponseProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _59.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.ParameterChangeProposal;
                fromPartial(object: Partial<_59.ParameterChangeProposal>): _59.ParameterChangeProposal;
                fromAmino(object: _59.ParameterChangeProposalAmino): _59.ParameterChangeProposal;
                toAmino(message: _59.ParameterChangeProposal): _59.ParameterChangeProposalAmino;
                fromAminoMsg(object: _59.ParameterChangeProposalAminoMsg): _59.ParameterChangeProposal;
                toAminoMsg(message: _59.ParameterChangeProposal): _59.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _59.ParameterChangeProposalProtoMsg): _59.ParameterChangeProposal;
                toProto(message: _59.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _59.ParameterChangeProposal): _59.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _59.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.ParamChange;
                fromPartial(object: Partial<_59.ParamChange>): _59.ParamChange;
                fromAmino(object: _59.ParamChangeAmino): _59.ParamChange;
                toAmino(message: _59.ParamChange): _59.ParamChangeAmino;
                fromAminoMsg(object: _59.ParamChangeAminoMsg): _59.ParamChange;
                toAminoMsg(message: _59.ParamChange): _59.ParamChangeAminoMsg;
                fromProtoMsg(message: _59.ParamChangeProtoMsg): _59.ParamChange;
                toProto(message: _59.ParamChange): Uint8Array;
                toProtoMsg(message: _59.ParamChange): _59.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _173.MsgClientImpl;
            QueryClientImpl: typeof _162.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
                signingInfo(request: _62.QuerySigningInfoRequest): Promise<_62.QuerySigningInfoResponse>;
                signingInfos(request?: _62.QuerySigningInfosRequest): Promise<_62.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _147.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _64.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _64.MsgUnjail): {
                        typeUrl: string;
                        value: _64.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _64.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _64.MsgUnjail): {
                        typeUrl: string;
                        value: _64.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _64.MsgUnjail) => _64.MsgUnjailAmino;
                    fromAmino: (object: _64.MsgUnjailAmino) => _64.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _64.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgUnjail;
                fromPartial(object: Partial<_64.MsgUnjail>): _64.MsgUnjail;
                fromAmino(object: _64.MsgUnjailAmino): _64.MsgUnjail;
                toAmino(message: _64.MsgUnjail): _64.MsgUnjailAmino;
                fromAminoMsg(object: _64.MsgUnjailAminoMsg): _64.MsgUnjail;
                toAminoMsg(message: _64.MsgUnjail): _64.MsgUnjailAminoMsg;
                fromProtoMsg(message: _64.MsgUnjailProtoMsg): _64.MsgUnjail;
                toProto(message: _64.MsgUnjail): Uint8Array;
                toProtoMsg(message: _64.MsgUnjail): _64.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _64.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.MsgUnjailResponse;
                fromPartial(_: Partial<_64.MsgUnjailResponse>): _64.MsgUnjailResponse;
                fromAmino(_: _64.MsgUnjailResponseAmino): _64.MsgUnjailResponse;
                toAmino(_: _64.MsgUnjailResponse): _64.MsgUnjailResponseAmino;
                fromAminoMsg(object: _64.MsgUnjailResponseAminoMsg): _64.MsgUnjailResponse;
                toAminoMsg(message: _64.MsgUnjailResponse): _64.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _64.MsgUnjailResponseProtoMsg): _64.MsgUnjailResponse;
                toProto(message: _64.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _64.MsgUnjailResponse): _64.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _63.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.ValidatorSigningInfo;
                fromPartial(object: Partial<_63.ValidatorSigningInfo>): _63.ValidatorSigningInfo;
                fromAmino(object: _63.ValidatorSigningInfoAmino): _63.ValidatorSigningInfo;
                toAmino(message: _63.ValidatorSigningInfo): _63.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _63.ValidatorSigningInfoAminoMsg): _63.ValidatorSigningInfo;
                toAminoMsg(message: _63.ValidatorSigningInfo): _63.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _63.ValidatorSigningInfoProtoMsg): _63.ValidatorSigningInfo;
                toProto(message: _63.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _63.ValidatorSigningInfo): _63.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _63.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.Params;
                fromPartial(object: Partial<_63.Params>): _63.Params;
                fromAmino(object: _63.ParamsAmino): _63.Params;
                toAmino(message: _63.Params): _63.ParamsAmino;
                fromAminoMsg(object: _63.ParamsAminoMsg): _63.Params;
                toAminoMsg(message: _63.Params): _63.ParamsAminoMsg;
                fromProtoMsg(message: _63.ParamsProtoMsg): _63.Params;
                toProto(message: _63.Params): Uint8Array;
                toProtoMsg(message: _63.Params): _63.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _62.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.QueryParamsRequest;
                fromPartial(_: Partial<_62.QueryParamsRequest>): _62.QueryParamsRequest;
                fromAmino(_: _62.QueryParamsRequestAmino): _62.QueryParamsRequest;
                toAmino(_: _62.QueryParamsRequest): _62.QueryParamsRequestAmino;
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
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _62.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QuerySigningInfoRequest;
                fromPartial(object: Partial<_62.QuerySigningInfoRequest>): _62.QuerySigningInfoRequest;
                fromAmino(object: _62.QuerySigningInfoRequestAmino): _62.QuerySigningInfoRequest;
                toAmino(message: _62.QuerySigningInfoRequest): _62.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _62.QuerySigningInfoRequestAminoMsg): _62.QuerySigningInfoRequest;
                toAminoMsg(message: _62.QuerySigningInfoRequest): _62.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _62.QuerySigningInfoRequestProtoMsg): _62.QuerySigningInfoRequest;
                toProto(message: _62.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _62.QuerySigningInfoRequest): _62.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _62.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QuerySigningInfoResponse;
                fromPartial(object: Partial<_62.QuerySigningInfoResponse>): _62.QuerySigningInfoResponse;
                fromAmino(object: _62.QuerySigningInfoResponseAmino): _62.QuerySigningInfoResponse;
                toAmino(message: _62.QuerySigningInfoResponse): _62.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _62.QuerySigningInfoResponseAminoMsg): _62.QuerySigningInfoResponse;
                toAminoMsg(message: _62.QuerySigningInfoResponse): _62.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _62.QuerySigningInfoResponseProtoMsg): _62.QuerySigningInfoResponse;
                toProto(message: _62.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _62.QuerySigningInfoResponse): _62.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _62.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QuerySigningInfosRequest;
                fromPartial(object: Partial<_62.QuerySigningInfosRequest>): _62.QuerySigningInfosRequest;
                fromAmino(object: _62.QuerySigningInfosRequestAmino): _62.QuerySigningInfosRequest;
                toAmino(message: _62.QuerySigningInfosRequest): _62.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _62.QuerySigningInfosRequestAminoMsg): _62.QuerySigningInfosRequest;
                toAminoMsg(message: _62.QuerySigningInfosRequest): _62.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _62.QuerySigningInfosRequestProtoMsg): _62.QuerySigningInfosRequest;
                toProto(message: _62.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _62.QuerySigningInfosRequest): _62.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _62.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QuerySigningInfosResponse;
                fromPartial(object: Partial<_62.QuerySigningInfosResponse>): _62.QuerySigningInfosResponse;
                fromAmino(object: _62.QuerySigningInfosResponseAmino): _62.QuerySigningInfosResponse;
                toAmino(message: _62.QuerySigningInfosResponse): _62.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _62.QuerySigningInfosResponseAminoMsg): _62.QuerySigningInfosResponse;
                toAminoMsg(message: _62.QuerySigningInfosResponse): _62.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _62.QuerySigningInfosResponseProtoMsg): _62.QuerySigningInfosResponse;
                toProto(message: _62.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _62.QuerySigningInfosResponse): _62.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _61.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.SigningInfo;
                fromPartial(object: Partial<_61.SigningInfo>): _61.SigningInfo;
                fromAmino(object: _61.SigningInfoAmino): _61.SigningInfo;
                toAmino(message: _61.SigningInfo): _61.SigningInfoAmino;
                fromAminoMsg(object: _61.SigningInfoAminoMsg): _61.SigningInfo;
                toAminoMsg(message: _61.SigningInfo): _61.SigningInfoAminoMsg;
                fromProtoMsg(message: _61.SigningInfoProtoMsg): _61.SigningInfo;
                toProto(message: _61.SigningInfo): Uint8Array;
                toProtoMsg(message: _61.SigningInfo): _61.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _61.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.ValidatorMissedBlocks;
                fromPartial(object: Partial<_61.ValidatorMissedBlocks>): _61.ValidatorMissedBlocks;
                fromAmino(object: _61.ValidatorMissedBlocksAmino): _61.ValidatorMissedBlocks;
                toAmino(message: _61.ValidatorMissedBlocks): _61.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _61.ValidatorMissedBlocksAminoMsg): _61.ValidatorMissedBlocks;
                toAminoMsg(message: _61.ValidatorMissedBlocks): _61.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _61.ValidatorMissedBlocksProtoMsg): _61.ValidatorMissedBlocks;
                toProto(message: _61.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _61.ValidatorMissedBlocks): _61.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _61.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MissedBlock;
                fromPartial(object: Partial<_61.MissedBlock>): _61.MissedBlock;
                fromAmino(object: _61.MissedBlockAmino): _61.MissedBlock;
                toAmino(message: _61.MissedBlock): _61.MissedBlockAmino;
                fromAminoMsg(object: _61.MissedBlockAminoMsg): _61.MissedBlock;
                toAminoMsg(message: _61.MissedBlock): _61.MissedBlockAminoMsg;
                fromProtoMsg(message: _61.MissedBlockProtoMsg): _61.MissedBlock;
                toProto(message: _61.MissedBlock): Uint8Array;
                toProtoMsg(message: _61.MissedBlock): _61.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _174.MsgClientImpl;
            QueryClientImpl: typeof _163.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _67.QueryValidatorsRequest): Promise<_67.QueryValidatorsResponse>;
                validator(request: _67.QueryValidatorRequest): Promise<_67.QueryValidatorResponse>;
                validatorDelegations(request: _67.QueryValidatorDelegationsRequest): Promise<_67.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _67.QueryValidatorUnbondingDelegationsRequest): Promise<_67.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _67.QueryDelegationRequest): Promise<_67.QueryDelegationResponse>;
                unbondingDelegation(request: _67.QueryUnbondingDelegationRequest): Promise<_67.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _67.QueryDelegatorDelegationsRequest): Promise<_67.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _67.QueryDelegatorUnbondingDelegationsRequest): Promise<_67.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _67.QueryRedelegationsRequest): Promise<_67.QueryRedelegationsResponse>;
                delegatorValidators(request: _67.QueryDelegatorValidatorsRequest): Promise<_67.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _67.QueryDelegatorValidatorRequest): Promise<_67.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _67.QueryHistoricalInfoRequest): Promise<_67.QueryHistoricalInfoResponse>;
                pool(request?: _67.QueryPoolRequest): Promise<_67.QueryPoolResponse>;
                params(request?: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _148.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _69.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _69.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _69.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _69.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _69.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _69.MsgCreateValidator): {
                        typeUrl: string;
                        value: _69.MsgCreateValidator;
                    };
                    editValidator(value: _69.MsgEditValidator): {
                        typeUrl: string;
                        value: _69.MsgEditValidator;
                    };
                    delegate(value: _69.MsgDelegate): {
                        typeUrl: string;
                        value: _69.MsgDelegate;
                    };
                    beginRedelegate(value: _69.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _69.MsgBeginRedelegate;
                    };
                    undelegate(value: _69.MsgUndelegate): {
                        typeUrl: string;
                        value: _69.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _69.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _69.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _69.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _69.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _69.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _69.MsgCreateValidator): {
                        typeUrl: string;
                        value: _69.MsgCreateValidator;
                    };
                    editValidator(value: _69.MsgEditValidator): {
                        typeUrl: string;
                        value: _69.MsgEditValidator;
                    };
                    delegate(value: _69.MsgDelegate): {
                        typeUrl: string;
                        value: _69.MsgDelegate;
                    };
                    beginRedelegate(value: _69.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _69.MsgBeginRedelegate;
                    };
                    undelegate(value: _69.MsgUndelegate): {
                        typeUrl: string;
                        value: _69.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _69.MsgCreateValidator) => _69.MsgCreateValidatorAmino;
                    fromAmino: (object: _69.MsgCreateValidatorAmino) => _69.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _69.MsgEditValidator) => _69.MsgEditValidatorAmino;
                    fromAmino: (object: _69.MsgEditValidatorAmino) => _69.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _69.MsgDelegate) => _69.MsgDelegateAmino;
                    fromAmino: (object: _69.MsgDelegateAmino) => _69.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _69.MsgBeginRedelegate) => _69.MsgBeginRedelegateAmino;
                    fromAmino: (object: _69.MsgBeginRedelegateAmino) => _69.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _69.MsgUndelegate) => _69.MsgUndelegateAmino;
                    fromAmino: (object: _69.MsgUndelegateAmino) => _69.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _69.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgCreateValidator;
                fromPartial(object: Partial<_69.MsgCreateValidator>): _69.MsgCreateValidator;
                fromAmino(object: _69.MsgCreateValidatorAmino): _69.MsgCreateValidator;
                toAmino(message: _69.MsgCreateValidator): _69.MsgCreateValidatorAmino;
                fromAminoMsg(object: _69.MsgCreateValidatorAminoMsg): _69.MsgCreateValidator;
                toAminoMsg(message: _69.MsgCreateValidator): _69.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _69.MsgCreateValidatorProtoMsg): _69.MsgCreateValidator;
                toProto(message: _69.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _69.MsgCreateValidator): _69.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _69.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _69.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_69.MsgCreateValidatorResponse>): _69.MsgCreateValidatorResponse;
                fromAmino(_: _69.MsgCreateValidatorResponseAmino): _69.MsgCreateValidatorResponse;
                toAmino(_: _69.MsgCreateValidatorResponse): _69.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _69.MsgCreateValidatorResponseAminoMsg): _69.MsgCreateValidatorResponse;
                toAminoMsg(message: _69.MsgCreateValidatorResponse): _69.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _69.MsgCreateValidatorResponseProtoMsg): _69.MsgCreateValidatorResponse;
                toProto(message: _69.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _69.MsgCreateValidatorResponse): _69.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _69.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgEditValidator;
                fromPartial(object: Partial<_69.MsgEditValidator>): _69.MsgEditValidator;
                fromAmino(object: _69.MsgEditValidatorAmino): _69.MsgEditValidator;
                toAmino(message: _69.MsgEditValidator): _69.MsgEditValidatorAmino;
                fromAminoMsg(object: _69.MsgEditValidatorAminoMsg): _69.MsgEditValidator;
                toAminoMsg(message: _69.MsgEditValidator): _69.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _69.MsgEditValidatorProtoMsg): _69.MsgEditValidator;
                toProto(message: _69.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _69.MsgEditValidator): _69.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _69.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _69.MsgEditValidatorResponse;
                fromPartial(_: Partial<_69.MsgEditValidatorResponse>): _69.MsgEditValidatorResponse;
                fromAmino(_: _69.MsgEditValidatorResponseAmino): _69.MsgEditValidatorResponse;
                toAmino(_: _69.MsgEditValidatorResponse): _69.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _69.MsgEditValidatorResponseAminoMsg): _69.MsgEditValidatorResponse;
                toAminoMsg(message: _69.MsgEditValidatorResponse): _69.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _69.MsgEditValidatorResponseProtoMsg): _69.MsgEditValidatorResponse;
                toProto(message: _69.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _69.MsgEditValidatorResponse): _69.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _69.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgDelegate;
                fromPartial(object: Partial<_69.MsgDelegate>): _69.MsgDelegate;
                fromAmino(object: _69.MsgDelegateAmino): _69.MsgDelegate;
                toAmino(message: _69.MsgDelegate): _69.MsgDelegateAmino;
                fromAminoMsg(object: _69.MsgDelegateAminoMsg): _69.MsgDelegate;
                toAminoMsg(message: _69.MsgDelegate): _69.MsgDelegateAminoMsg;
                fromProtoMsg(message: _69.MsgDelegateProtoMsg): _69.MsgDelegate;
                toProto(message: _69.MsgDelegate): Uint8Array;
                toProtoMsg(message: _69.MsgDelegate): _69.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _69.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _69.MsgDelegateResponse;
                fromPartial(_: Partial<_69.MsgDelegateResponse>): _69.MsgDelegateResponse;
                fromAmino(_: _69.MsgDelegateResponseAmino): _69.MsgDelegateResponse;
                toAmino(_: _69.MsgDelegateResponse): _69.MsgDelegateResponseAmino;
                fromAminoMsg(object: _69.MsgDelegateResponseAminoMsg): _69.MsgDelegateResponse;
                toAminoMsg(message: _69.MsgDelegateResponse): _69.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _69.MsgDelegateResponseProtoMsg): _69.MsgDelegateResponse;
                toProto(message: _69.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _69.MsgDelegateResponse): _69.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _69.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgBeginRedelegate;
                fromPartial(object: Partial<_69.MsgBeginRedelegate>): _69.MsgBeginRedelegate;
                fromAmino(object: _69.MsgBeginRedelegateAmino): _69.MsgBeginRedelegate;
                toAmino(message: _69.MsgBeginRedelegate): _69.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _69.MsgBeginRedelegateAminoMsg): _69.MsgBeginRedelegate;
                toAminoMsg(message: _69.MsgBeginRedelegate): _69.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _69.MsgBeginRedelegateProtoMsg): _69.MsgBeginRedelegate;
                toProto(message: _69.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _69.MsgBeginRedelegate): _69.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _69.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_69.MsgBeginRedelegateResponse>): _69.MsgBeginRedelegateResponse;
                fromAmino(object: _69.MsgBeginRedelegateResponseAmino): _69.MsgBeginRedelegateResponse;
                toAmino(message: _69.MsgBeginRedelegateResponse): _69.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _69.MsgBeginRedelegateResponseAminoMsg): _69.MsgBeginRedelegateResponse;
                toAminoMsg(message: _69.MsgBeginRedelegateResponse): _69.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _69.MsgBeginRedelegateResponseProtoMsg): _69.MsgBeginRedelegateResponse;
                toProto(message: _69.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _69.MsgBeginRedelegateResponse): _69.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _69.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgUndelegate;
                fromPartial(object: Partial<_69.MsgUndelegate>): _69.MsgUndelegate;
                fromAmino(object: _69.MsgUndelegateAmino): _69.MsgUndelegate;
                toAmino(message: _69.MsgUndelegate): _69.MsgUndelegateAmino;
                fromAminoMsg(object: _69.MsgUndelegateAminoMsg): _69.MsgUndelegate;
                toAminoMsg(message: _69.MsgUndelegate): _69.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _69.MsgUndelegateProtoMsg): _69.MsgUndelegate;
                toProto(message: _69.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _69.MsgUndelegate): _69.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _69.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgUndelegateResponse;
                fromPartial(object: Partial<_69.MsgUndelegateResponse>): _69.MsgUndelegateResponse;
                fromAmino(object: _69.MsgUndelegateResponseAmino): _69.MsgUndelegateResponse;
                toAmino(message: _69.MsgUndelegateResponse): _69.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _69.MsgUndelegateResponseAminoMsg): _69.MsgUndelegateResponse;
                toAminoMsg(message: _69.MsgUndelegateResponse): _69.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _69.MsgUndelegateResponseProtoMsg): _69.MsgUndelegateResponse;
                toProto(message: _69.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _69.MsgUndelegateResponse): _69.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _68.BondStatus;
            bondStatusToJSON(object: _68.BondStatus): string;
            BondStatus: typeof _68.BondStatus;
            BondStatusSDKType: typeof _68.BondStatus;
            BondStatusAmino: typeof _68.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _68.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.HistoricalInfo;
                fromPartial(object: Partial<_68.HistoricalInfo>): _68.HistoricalInfo;
                fromAmino(object: _68.HistoricalInfoAmino): _68.HistoricalInfo;
                toAmino(message: _68.HistoricalInfo): _68.HistoricalInfoAmino;
                fromAminoMsg(object: _68.HistoricalInfoAminoMsg): _68.HistoricalInfo;
                toAminoMsg(message: _68.HistoricalInfo): _68.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _68.HistoricalInfoProtoMsg): _68.HistoricalInfo;
                toProto(message: _68.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _68.HistoricalInfo): _68.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _68.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.CommissionRates;
                fromPartial(object: Partial<_68.CommissionRates>): _68.CommissionRates;
                fromAmino(object: _68.CommissionRatesAmino): _68.CommissionRates;
                toAmino(message: _68.CommissionRates): _68.CommissionRatesAmino;
                fromAminoMsg(object: _68.CommissionRatesAminoMsg): _68.CommissionRates;
                toAminoMsg(message: _68.CommissionRates): _68.CommissionRatesAminoMsg;
                fromProtoMsg(message: _68.CommissionRatesProtoMsg): _68.CommissionRates;
                toProto(message: _68.CommissionRates): Uint8Array;
                toProtoMsg(message: _68.CommissionRates): _68.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _68.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.Commission;
                fromPartial(object: Partial<_68.Commission>): _68.Commission;
                fromAmino(object: _68.CommissionAmino): _68.Commission;
                toAmino(message: _68.Commission): _68.CommissionAmino;
                fromAminoMsg(object: _68.CommissionAminoMsg): _68.Commission;
                toAminoMsg(message: _68.Commission): _68.CommissionAminoMsg;
                fromProtoMsg(message: _68.CommissionProtoMsg): _68.Commission;
                toProto(message: _68.Commission): Uint8Array;
                toProtoMsg(message: _68.Commission): _68.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _68.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.Description;
                fromPartial(object: Partial<_68.Description>): _68.Description;
                fromAmino(object: _68.DescriptionAmino): _68.Description;
                toAmino(message: _68.Description): _68.DescriptionAmino;
                fromAminoMsg(object: _68.DescriptionAminoMsg): _68.Description;
                toAminoMsg(message: _68.Description): _68.DescriptionAminoMsg;
                fromProtoMsg(message: _68.DescriptionProtoMsg): _68.Description;
                toProto(message: _68.Description): Uint8Array;
                toProtoMsg(message: _68.Description): _68.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _68.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.Validator;
                fromPartial(object: Partial<_68.Validator>): _68.Validator;
                fromAmino(object: _68.ValidatorAmino): _68.Validator;
                toAmino(message: _68.Validator): _68.ValidatorAmino;
                fromAminoMsg(object: _68.ValidatorAminoMsg): _68.Validator;
                toAminoMsg(message: _68.Validator): _68.ValidatorAminoMsg;
                fromProtoMsg(message: _68.ValidatorProtoMsg): _68.Validator;
                toProto(message: _68.Validator): Uint8Array;
                toProtoMsg(message: _68.Validator): _68.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _68.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.ValAddresses;
                fromPartial(object: Partial<_68.ValAddresses>): _68.ValAddresses;
                fromAmino(object: _68.ValAddressesAmino): _68.ValAddresses;
                toAmino(message: _68.ValAddresses): _68.ValAddressesAmino;
                fromAminoMsg(object: _68.ValAddressesAminoMsg): _68.ValAddresses;
                toAminoMsg(message: _68.ValAddresses): _68.ValAddressesAminoMsg;
                fromProtoMsg(message: _68.ValAddressesProtoMsg): _68.ValAddresses;
                toProto(message: _68.ValAddresses): Uint8Array;
                toProtoMsg(message: _68.ValAddresses): _68.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _68.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.DVPair;
                fromPartial(object: Partial<_68.DVPair>): _68.DVPair;
                fromAmino(object: _68.DVPairAmino): _68.DVPair;
                toAmino(message: _68.DVPair): _68.DVPairAmino;
                fromAminoMsg(object: _68.DVPairAminoMsg): _68.DVPair;
                toAminoMsg(message: _68.DVPair): _68.DVPairAminoMsg;
                fromProtoMsg(message: _68.DVPairProtoMsg): _68.DVPair;
                toProto(message: _68.DVPair): Uint8Array;
                toProtoMsg(message: _68.DVPair): _68.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _68.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.DVPairs;
                fromPartial(object: Partial<_68.DVPairs>): _68.DVPairs;
                fromAmino(object: _68.DVPairsAmino): _68.DVPairs;
                toAmino(message: _68.DVPairs): _68.DVPairsAmino;
                fromAminoMsg(object: _68.DVPairsAminoMsg): _68.DVPairs;
                toAminoMsg(message: _68.DVPairs): _68.DVPairsAminoMsg;
                fromProtoMsg(message: _68.DVPairsProtoMsg): _68.DVPairs;
                toProto(message: _68.DVPairs): Uint8Array;
                toProtoMsg(message: _68.DVPairs): _68.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _68.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.DVVTriplet;
                fromPartial(object: Partial<_68.DVVTriplet>): _68.DVVTriplet;
                fromAmino(object: _68.DVVTripletAmino): _68.DVVTriplet;
                toAmino(message: _68.DVVTriplet): _68.DVVTripletAmino;
                fromAminoMsg(object: _68.DVVTripletAminoMsg): _68.DVVTriplet;
                toAminoMsg(message: _68.DVVTriplet): _68.DVVTripletAminoMsg;
                fromProtoMsg(message: _68.DVVTripletProtoMsg): _68.DVVTriplet;
                toProto(message: _68.DVVTriplet): Uint8Array;
                toProtoMsg(message: _68.DVVTriplet): _68.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _68.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.DVVTriplets;
                fromPartial(object: Partial<_68.DVVTriplets>): _68.DVVTriplets;
                fromAmino(object: _68.DVVTripletsAmino): _68.DVVTriplets;
                toAmino(message: _68.DVVTriplets): _68.DVVTripletsAmino;
                fromAminoMsg(object: _68.DVVTripletsAminoMsg): _68.DVVTriplets;
                toAminoMsg(message: _68.DVVTriplets): _68.DVVTripletsAminoMsg;
                fromProtoMsg(message: _68.DVVTripletsProtoMsg): _68.DVVTriplets;
                toProto(message: _68.DVVTriplets): Uint8Array;
                toProtoMsg(message: _68.DVVTriplets): _68.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _68.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.Delegation;
                fromPartial(object: Partial<_68.Delegation>): _68.Delegation;
                fromAmino(object: _68.DelegationAmino): _68.Delegation;
                toAmino(message: _68.Delegation): _68.DelegationAmino;
                fromAminoMsg(object: _68.DelegationAminoMsg): _68.Delegation;
                toAminoMsg(message: _68.Delegation): _68.DelegationAminoMsg;
                fromProtoMsg(message: _68.DelegationProtoMsg): _68.Delegation;
                toProto(message: _68.Delegation): Uint8Array;
                toProtoMsg(message: _68.Delegation): _68.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _68.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.UnbondingDelegation;
                fromPartial(object: Partial<_68.UnbondingDelegation>): _68.UnbondingDelegation;
                fromAmino(object: _68.UnbondingDelegationAmino): _68.UnbondingDelegation;
                toAmino(message: _68.UnbondingDelegation): _68.UnbondingDelegationAmino;
                fromAminoMsg(object: _68.UnbondingDelegationAminoMsg): _68.UnbondingDelegation;
                toAminoMsg(message: _68.UnbondingDelegation): _68.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _68.UnbondingDelegationProtoMsg): _68.UnbondingDelegation;
                toProto(message: _68.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _68.UnbondingDelegation): _68.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _68.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.UnbondingDelegationEntry;
                fromPartial(object: Partial<_68.UnbondingDelegationEntry>): _68.UnbondingDelegationEntry;
                fromAmino(object: _68.UnbondingDelegationEntryAmino): _68.UnbondingDelegationEntry;
                toAmino(message: _68.UnbondingDelegationEntry): _68.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _68.UnbondingDelegationEntryAminoMsg): _68.UnbondingDelegationEntry;
                toAminoMsg(message: _68.UnbondingDelegationEntry): _68.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _68.UnbondingDelegationEntryProtoMsg): _68.UnbondingDelegationEntry;
                toProto(message: _68.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _68.UnbondingDelegationEntry): _68.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _68.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.RedelegationEntry;
                fromPartial(object: Partial<_68.RedelegationEntry>): _68.RedelegationEntry;
                fromAmino(object: _68.RedelegationEntryAmino): _68.RedelegationEntry;
                toAmino(message: _68.RedelegationEntry): _68.RedelegationEntryAmino;
                fromAminoMsg(object: _68.RedelegationEntryAminoMsg): _68.RedelegationEntry;
                toAminoMsg(message: _68.RedelegationEntry): _68.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _68.RedelegationEntryProtoMsg): _68.RedelegationEntry;
                toProto(message: _68.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _68.RedelegationEntry): _68.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _68.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.Redelegation;
                fromPartial(object: Partial<_68.Redelegation>): _68.Redelegation;
                fromAmino(object: _68.RedelegationAmino): _68.Redelegation;
                toAmino(message: _68.Redelegation): _68.RedelegationAmino;
                fromAminoMsg(object: _68.RedelegationAminoMsg): _68.Redelegation;
                toAminoMsg(message: _68.Redelegation): _68.RedelegationAminoMsg;
                fromProtoMsg(message: _68.RedelegationProtoMsg): _68.Redelegation;
                toProto(message: _68.Redelegation): Uint8Array;
                toProtoMsg(message: _68.Redelegation): _68.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _68.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.Params;
                fromPartial(object: Partial<_68.Params>): _68.Params;
                fromAmino(object: _68.ParamsAmino): _68.Params;
                toAmino(message: _68.Params): _68.ParamsAmino;
                fromAminoMsg(object: _68.ParamsAminoMsg): _68.Params;
                toAminoMsg(message: _68.Params): _68.ParamsAminoMsg;
                fromProtoMsg(message: _68.ParamsProtoMsg): _68.Params;
                toProto(message: _68.Params): Uint8Array;
                toProtoMsg(message: _68.Params): _68.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _68.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.DelegationResponse;
                fromPartial(object: Partial<_68.DelegationResponse>): _68.DelegationResponse;
                fromAmino(object: _68.DelegationResponseAmino): _68.DelegationResponse;
                toAmino(message: _68.DelegationResponse): _68.DelegationResponseAmino;
                fromAminoMsg(object: _68.DelegationResponseAminoMsg): _68.DelegationResponse;
                toAminoMsg(message: _68.DelegationResponse): _68.DelegationResponseAminoMsg;
                fromProtoMsg(message: _68.DelegationResponseProtoMsg): _68.DelegationResponse;
                toProto(message: _68.DelegationResponse): Uint8Array;
                toProtoMsg(message: _68.DelegationResponse): _68.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _68.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.RedelegationEntryResponse;
                fromPartial(object: Partial<_68.RedelegationEntryResponse>): _68.RedelegationEntryResponse;
                fromAmino(object: _68.RedelegationEntryResponseAmino): _68.RedelegationEntryResponse;
                toAmino(message: _68.RedelegationEntryResponse): _68.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _68.RedelegationEntryResponseAminoMsg): _68.RedelegationEntryResponse;
                toAminoMsg(message: _68.RedelegationEntryResponse): _68.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _68.RedelegationEntryResponseProtoMsg): _68.RedelegationEntryResponse;
                toProto(message: _68.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _68.RedelegationEntryResponse): _68.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _68.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.RedelegationResponse;
                fromPartial(object: Partial<_68.RedelegationResponse>): _68.RedelegationResponse;
                fromAmino(object: _68.RedelegationResponseAmino): _68.RedelegationResponse;
                toAmino(message: _68.RedelegationResponse): _68.RedelegationResponseAmino;
                fromAminoMsg(object: _68.RedelegationResponseAminoMsg): _68.RedelegationResponse;
                toAminoMsg(message: _68.RedelegationResponse): _68.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _68.RedelegationResponseProtoMsg): _68.RedelegationResponse;
                toProto(message: _68.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _68.RedelegationResponse): _68.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _68.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.Pool;
                fromPartial(object: Partial<_68.Pool>): _68.Pool;
                fromAmino(object: _68.PoolAmino): _68.Pool;
                toAmino(message: _68.Pool): _68.PoolAmino;
                fromAminoMsg(object: _68.PoolAminoMsg): _68.Pool;
                toAminoMsg(message: _68.Pool): _68.PoolAminoMsg;
                fromProtoMsg(message: _68.PoolProtoMsg): _68.Pool;
                toProto(message: _68.Pool): Uint8Array;
                toProtoMsg(message: _68.Pool): _68.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _67.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryValidatorsRequest;
                fromPartial(object: Partial<_67.QueryValidatorsRequest>): _67.QueryValidatorsRequest;
                fromAmino(object: _67.QueryValidatorsRequestAmino): _67.QueryValidatorsRequest;
                toAmino(message: _67.QueryValidatorsRequest): _67.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _67.QueryValidatorsRequestAminoMsg): _67.QueryValidatorsRequest;
                toAminoMsg(message: _67.QueryValidatorsRequest): _67.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryValidatorsRequestProtoMsg): _67.QueryValidatorsRequest;
                toProto(message: _67.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryValidatorsRequest): _67.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _67.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryValidatorsResponse;
                fromPartial(object: Partial<_67.QueryValidatorsResponse>): _67.QueryValidatorsResponse;
                fromAmino(object: _67.QueryValidatorsResponseAmino): _67.QueryValidatorsResponse;
                toAmino(message: _67.QueryValidatorsResponse): _67.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _67.QueryValidatorsResponseAminoMsg): _67.QueryValidatorsResponse;
                toAminoMsg(message: _67.QueryValidatorsResponse): _67.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryValidatorsResponseProtoMsg): _67.QueryValidatorsResponse;
                toProto(message: _67.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryValidatorsResponse): _67.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _67.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryValidatorRequest;
                fromPartial(object: Partial<_67.QueryValidatorRequest>): _67.QueryValidatorRequest;
                fromAmino(object: _67.QueryValidatorRequestAmino): _67.QueryValidatorRequest;
                toAmino(message: _67.QueryValidatorRequest): _67.QueryValidatorRequestAmino;
                fromAminoMsg(object: _67.QueryValidatorRequestAminoMsg): _67.QueryValidatorRequest;
                toAminoMsg(message: _67.QueryValidatorRequest): _67.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _67.QueryValidatorRequestProtoMsg): _67.QueryValidatorRequest;
                toProto(message: _67.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _67.QueryValidatorRequest): _67.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _67.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryValidatorResponse;
                fromPartial(object: Partial<_67.QueryValidatorResponse>): _67.QueryValidatorResponse;
                fromAmino(object: _67.QueryValidatorResponseAmino): _67.QueryValidatorResponse;
                toAmino(message: _67.QueryValidatorResponse): _67.QueryValidatorResponseAmino;
                fromAminoMsg(object: _67.QueryValidatorResponseAminoMsg): _67.QueryValidatorResponse;
                toAminoMsg(message: _67.QueryValidatorResponse): _67.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _67.QueryValidatorResponseProtoMsg): _67.QueryValidatorResponse;
                toProto(message: _67.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _67.QueryValidatorResponse): _67.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _67.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_67.QueryValidatorDelegationsRequest>): _67.QueryValidatorDelegationsRequest;
                fromAmino(object: _67.QueryValidatorDelegationsRequestAmino): _67.QueryValidatorDelegationsRequest;
                toAmino(message: _67.QueryValidatorDelegationsRequest): _67.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _67.QueryValidatorDelegationsRequestAminoMsg): _67.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _67.QueryValidatorDelegationsRequest): _67.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryValidatorDelegationsRequestProtoMsg): _67.QueryValidatorDelegationsRequest;
                toProto(message: _67.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryValidatorDelegationsRequest): _67.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _67.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_67.QueryValidatorDelegationsResponse>): _67.QueryValidatorDelegationsResponse;
                fromAmino(object: _67.QueryValidatorDelegationsResponseAmino): _67.QueryValidatorDelegationsResponse;
                toAmino(message: _67.QueryValidatorDelegationsResponse): _67.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _67.QueryValidatorDelegationsResponseAminoMsg): _67.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _67.QueryValidatorDelegationsResponse): _67.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryValidatorDelegationsResponseProtoMsg): _67.QueryValidatorDelegationsResponse;
                toProto(message: _67.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryValidatorDelegationsResponse): _67.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _67.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_67.QueryValidatorUnbondingDelegationsRequest>): _67.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _67.QueryValidatorUnbondingDelegationsRequestAmino): _67.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _67.QueryValidatorUnbondingDelegationsRequest): _67.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _67.QueryValidatorUnbondingDelegationsRequestAminoMsg): _67.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _67.QueryValidatorUnbondingDelegationsRequest): _67.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryValidatorUnbondingDelegationsRequestProtoMsg): _67.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _67.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryValidatorUnbondingDelegationsRequest): _67.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _67.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_67.QueryValidatorUnbondingDelegationsResponse>): _67.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _67.QueryValidatorUnbondingDelegationsResponseAmino): _67.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _67.QueryValidatorUnbondingDelegationsResponse): _67.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _67.QueryValidatorUnbondingDelegationsResponseAminoMsg): _67.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _67.QueryValidatorUnbondingDelegationsResponse): _67.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryValidatorUnbondingDelegationsResponseProtoMsg): _67.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _67.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryValidatorUnbondingDelegationsResponse): _67.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _67.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegationRequest;
                fromPartial(object: Partial<_67.QueryDelegationRequest>): _67.QueryDelegationRequest;
                fromAmino(object: _67.QueryDelegationRequestAmino): _67.QueryDelegationRequest;
                toAmino(message: _67.QueryDelegationRequest): _67.QueryDelegationRequestAmino;
                fromAminoMsg(object: _67.QueryDelegationRequestAminoMsg): _67.QueryDelegationRequest;
                toAminoMsg(message: _67.QueryDelegationRequest): _67.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _67.QueryDelegationRequestProtoMsg): _67.QueryDelegationRequest;
                toProto(message: _67.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _67.QueryDelegationRequest): _67.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _67.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegationResponse;
                fromPartial(object: Partial<_67.QueryDelegationResponse>): _67.QueryDelegationResponse;
                fromAmino(object: _67.QueryDelegationResponseAmino): _67.QueryDelegationResponse;
                toAmino(message: _67.QueryDelegationResponse): _67.QueryDelegationResponseAmino;
                fromAminoMsg(object: _67.QueryDelegationResponseAminoMsg): _67.QueryDelegationResponse;
                toAminoMsg(message: _67.QueryDelegationResponse): _67.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _67.QueryDelegationResponseProtoMsg): _67.QueryDelegationResponse;
                toProto(message: _67.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _67.QueryDelegationResponse): _67.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _67.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_67.QueryUnbondingDelegationRequest>): _67.QueryUnbondingDelegationRequest;
                fromAmino(object: _67.QueryUnbondingDelegationRequestAmino): _67.QueryUnbondingDelegationRequest;
                toAmino(message: _67.QueryUnbondingDelegationRequest): _67.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _67.QueryUnbondingDelegationRequestAminoMsg): _67.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _67.QueryUnbondingDelegationRequest): _67.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _67.QueryUnbondingDelegationRequestProtoMsg): _67.QueryUnbondingDelegationRequest;
                toProto(message: _67.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _67.QueryUnbondingDelegationRequest): _67.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _67.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_67.QueryUnbondingDelegationResponse>): _67.QueryUnbondingDelegationResponse;
                fromAmino(object: _67.QueryUnbondingDelegationResponseAmino): _67.QueryUnbondingDelegationResponse;
                toAmino(message: _67.QueryUnbondingDelegationResponse): _67.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _67.QueryUnbondingDelegationResponseAminoMsg): _67.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _67.QueryUnbondingDelegationResponse): _67.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _67.QueryUnbondingDelegationResponseProtoMsg): _67.QueryUnbondingDelegationResponse;
                toProto(message: _67.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _67.QueryUnbondingDelegationResponse): _67.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _67.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_67.QueryDelegatorDelegationsRequest>): _67.QueryDelegatorDelegationsRequest;
                fromAmino(object: _67.QueryDelegatorDelegationsRequestAmino): _67.QueryDelegatorDelegationsRequest;
                toAmino(message: _67.QueryDelegatorDelegationsRequest): _67.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _67.QueryDelegatorDelegationsRequestAminoMsg): _67.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _67.QueryDelegatorDelegationsRequest): _67.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryDelegatorDelegationsRequestProtoMsg): _67.QueryDelegatorDelegationsRequest;
                toProto(message: _67.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryDelegatorDelegationsRequest): _67.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _67.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_67.QueryDelegatorDelegationsResponse>): _67.QueryDelegatorDelegationsResponse;
                fromAmino(object: _67.QueryDelegatorDelegationsResponseAmino): _67.QueryDelegatorDelegationsResponse;
                toAmino(message: _67.QueryDelegatorDelegationsResponse): _67.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _67.QueryDelegatorDelegationsResponseAminoMsg): _67.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _67.QueryDelegatorDelegationsResponse): _67.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryDelegatorDelegationsResponseProtoMsg): _67.QueryDelegatorDelegationsResponse;
                toProto(message: _67.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryDelegatorDelegationsResponse): _67.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _67.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_67.QueryDelegatorUnbondingDelegationsRequest>): _67.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _67.QueryDelegatorUnbondingDelegationsRequestAmino): _67.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _67.QueryDelegatorUnbondingDelegationsRequest): _67.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _67.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _67.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _67.QueryDelegatorUnbondingDelegationsRequest): _67.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _67.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _67.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryDelegatorUnbondingDelegationsRequest): _67.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _67.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_67.QueryDelegatorUnbondingDelegationsResponse>): _67.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _67.QueryDelegatorUnbondingDelegationsResponseAmino): _67.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _67.QueryDelegatorUnbondingDelegationsResponse): _67.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _67.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _67.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _67.QueryDelegatorUnbondingDelegationsResponse): _67.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _67.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _67.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryDelegatorUnbondingDelegationsResponse): _67.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _67.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryRedelegationsRequest;
                fromPartial(object: Partial<_67.QueryRedelegationsRequest>): _67.QueryRedelegationsRequest;
                fromAmino(object: _67.QueryRedelegationsRequestAmino): _67.QueryRedelegationsRequest;
                toAmino(message: _67.QueryRedelegationsRequest): _67.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _67.QueryRedelegationsRequestAminoMsg): _67.QueryRedelegationsRequest;
                toAminoMsg(message: _67.QueryRedelegationsRequest): _67.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryRedelegationsRequestProtoMsg): _67.QueryRedelegationsRequest;
                toProto(message: _67.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryRedelegationsRequest): _67.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _67.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryRedelegationsResponse;
                fromPartial(object: Partial<_67.QueryRedelegationsResponse>): _67.QueryRedelegationsResponse;
                fromAmino(object: _67.QueryRedelegationsResponseAmino): _67.QueryRedelegationsResponse;
                toAmino(message: _67.QueryRedelegationsResponse): _67.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _67.QueryRedelegationsResponseAminoMsg): _67.QueryRedelegationsResponse;
                toAminoMsg(message: _67.QueryRedelegationsResponse): _67.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryRedelegationsResponseProtoMsg): _67.QueryRedelegationsResponse;
                toProto(message: _67.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryRedelegationsResponse): _67.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _67.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_67.QueryDelegatorValidatorsRequest>): _67.QueryDelegatorValidatorsRequest;
                fromAmino(object: _67.QueryDelegatorValidatorsRequestAmino): _67.QueryDelegatorValidatorsRequest;
                toAmino(message: _67.QueryDelegatorValidatorsRequest): _67.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _67.QueryDelegatorValidatorsRequestAminoMsg): _67.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _67.QueryDelegatorValidatorsRequest): _67.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryDelegatorValidatorsRequestProtoMsg): _67.QueryDelegatorValidatorsRequest;
                toProto(message: _67.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryDelegatorValidatorsRequest): _67.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _67.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_67.QueryDelegatorValidatorsResponse>): _67.QueryDelegatorValidatorsResponse;
                fromAmino(object: _67.QueryDelegatorValidatorsResponseAmino): _67.QueryDelegatorValidatorsResponse;
                toAmino(message: _67.QueryDelegatorValidatorsResponse): _67.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _67.QueryDelegatorValidatorsResponseAminoMsg): _67.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _67.QueryDelegatorValidatorsResponse): _67.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryDelegatorValidatorsResponseProtoMsg): _67.QueryDelegatorValidatorsResponse;
                toProto(message: _67.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryDelegatorValidatorsResponse): _67.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _67.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_67.QueryDelegatorValidatorRequest>): _67.QueryDelegatorValidatorRequest;
                fromAmino(object: _67.QueryDelegatorValidatorRequestAmino): _67.QueryDelegatorValidatorRequest;
                toAmino(message: _67.QueryDelegatorValidatorRequest): _67.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _67.QueryDelegatorValidatorRequestAminoMsg): _67.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _67.QueryDelegatorValidatorRequest): _67.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _67.QueryDelegatorValidatorRequestProtoMsg): _67.QueryDelegatorValidatorRequest;
                toProto(message: _67.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _67.QueryDelegatorValidatorRequest): _67.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _67.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_67.QueryDelegatorValidatorResponse>): _67.QueryDelegatorValidatorResponse;
                fromAmino(object: _67.QueryDelegatorValidatorResponseAmino): _67.QueryDelegatorValidatorResponse;
                toAmino(message: _67.QueryDelegatorValidatorResponse): _67.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _67.QueryDelegatorValidatorResponseAminoMsg): _67.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _67.QueryDelegatorValidatorResponse): _67.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _67.QueryDelegatorValidatorResponseProtoMsg): _67.QueryDelegatorValidatorResponse;
                toProto(message: _67.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _67.QueryDelegatorValidatorResponse): _67.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _67.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_67.QueryHistoricalInfoRequest>): _67.QueryHistoricalInfoRequest;
                fromAmino(object: _67.QueryHistoricalInfoRequestAmino): _67.QueryHistoricalInfoRequest;
                toAmino(message: _67.QueryHistoricalInfoRequest): _67.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _67.QueryHistoricalInfoRequestAminoMsg): _67.QueryHistoricalInfoRequest;
                toAminoMsg(message: _67.QueryHistoricalInfoRequest): _67.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _67.QueryHistoricalInfoRequestProtoMsg): _67.QueryHistoricalInfoRequest;
                toProto(message: _67.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _67.QueryHistoricalInfoRequest): _67.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _67.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_67.QueryHistoricalInfoResponse>): _67.QueryHistoricalInfoResponse;
                fromAmino(object: _67.QueryHistoricalInfoResponseAmino): _67.QueryHistoricalInfoResponse;
                toAmino(message: _67.QueryHistoricalInfoResponse): _67.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _67.QueryHistoricalInfoResponseAminoMsg): _67.QueryHistoricalInfoResponse;
                toAminoMsg(message: _67.QueryHistoricalInfoResponse): _67.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _67.QueryHistoricalInfoResponseProtoMsg): _67.QueryHistoricalInfoResponse;
                toProto(message: _67.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _67.QueryHistoricalInfoResponse): _67.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _67.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryPoolRequest;
                fromPartial(_: Partial<_67.QueryPoolRequest>): _67.QueryPoolRequest;
                fromAmino(_: _67.QueryPoolRequestAmino): _67.QueryPoolRequest;
                toAmino(_: _67.QueryPoolRequest): _67.QueryPoolRequestAmino;
                fromAminoMsg(object: _67.QueryPoolRequestAminoMsg): _67.QueryPoolRequest;
                toAminoMsg(message: _67.QueryPoolRequest): _67.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _67.QueryPoolRequestProtoMsg): _67.QueryPoolRequest;
                toProto(message: _67.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _67.QueryPoolRequest): _67.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _67.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryPoolResponse;
                fromPartial(object: Partial<_67.QueryPoolResponse>): _67.QueryPoolResponse;
                fromAmino(object: _67.QueryPoolResponseAmino): _67.QueryPoolResponse;
                toAmino(message: _67.QueryPoolResponse): _67.QueryPoolResponseAmino;
                fromAminoMsg(object: _67.QueryPoolResponseAminoMsg): _67.QueryPoolResponse;
                toAminoMsg(message: _67.QueryPoolResponse): _67.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _67.QueryPoolResponseProtoMsg): _67.QueryPoolResponse;
                toProto(message: _67.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _67.QueryPoolResponse): _67.QueryPoolResponseProtoMsg;
            };
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _66.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.LastValidatorPower;
                fromPartial(object: Partial<_66.LastValidatorPower>): _66.LastValidatorPower;
                fromAmino(object: _66.LastValidatorPowerAmino): _66.LastValidatorPower;
                toAmino(message: _66.LastValidatorPower): _66.LastValidatorPowerAmino;
                fromAminoMsg(object: _66.LastValidatorPowerAminoMsg): _66.LastValidatorPower;
                toAminoMsg(message: _66.LastValidatorPower): _66.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _66.LastValidatorPowerProtoMsg): _66.LastValidatorPower;
                toProto(message: _66.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _66.LastValidatorPower): _66.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _65.AuthorizationType;
            authorizationTypeToJSON(object: _65.AuthorizationType): string;
            AuthorizationType: typeof _65.AuthorizationType;
            AuthorizationTypeSDKType: typeof _65.AuthorizationType;
            AuthorizationTypeAmino: typeof _65.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _65.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.StakeAuthorization;
                fromPartial(object: Partial<_65.StakeAuthorization>): _65.StakeAuthorization;
                fromAmino(object: _65.StakeAuthorizationAmino): _65.StakeAuthorization;
                toAmino(message: _65.StakeAuthorization): _65.StakeAuthorizationAmino;
                fromAminoMsg(object: _65.StakeAuthorizationAminoMsg): _65.StakeAuthorization;
                toAminoMsg(message: _65.StakeAuthorization): _65.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _65.StakeAuthorizationProtoMsg): _65.StakeAuthorization;
                toProto(message: _65.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _65.StakeAuthorization): _65.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _65.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.StakeAuthorization_Validators;
                fromPartial(object: Partial<_65.StakeAuthorization_Validators>): _65.StakeAuthorization_Validators;
                fromAmino(object: _65.StakeAuthorization_ValidatorsAmino): _65.StakeAuthorization_Validators;
                toAmino(message: _65.StakeAuthorization_Validators): _65.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _65.StakeAuthorization_ValidatorsAminoMsg): _65.StakeAuthorization_Validators;
                toAminoMsg(message: _65.StakeAuthorization_Validators): _65.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _65.StakeAuthorization_ValidatorsProtoMsg): _65.StakeAuthorization_Validators;
                toProto(message: _65.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _65.StakeAuthorization_Validators): _65.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _70.SignMode;
                signModeToJSON(object: _70.SignMode): string;
                SignMode: typeof _70.SignMode;
                SignModeSDKType: typeof _70.SignMode;
                SignModeAmino: typeof _70.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _70.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.SignatureDescriptors;
                    fromPartial(object: Partial<_70.SignatureDescriptors>): _70.SignatureDescriptors;
                    fromAmino(object: _70.SignatureDescriptorsAmino): _70.SignatureDescriptors;
                    toAmino(message: _70.SignatureDescriptors): _70.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _70.SignatureDescriptorsAminoMsg): _70.SignatureDescriptors;
                    toAminoMsg(message: _70.SignatureDescriptors): _70.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _70.SignatureDescriptorsProtoMsg): _70.SignatureDescriptors;
                    toProto(message: _70.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _70.SignatureDescriptors): _70.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _70.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.SignatureDescriptor;
                    fromPartial(object: Partial<_70.SignatureDescriptor>): _70.SignatureDescriptor;
                    fromAmino(object: _70.SignatureDescriptorAmino): _70.SignatureDescriptor;
                    toAmino(message: _70.SignatureDescriptor): _70.SignatureDescriptorAmino;
                    fromAminoMsg(object: _70.SignatureDescriptorAminoMsg): _70.SignatureDescriptor;
                    toAminoMsg(message: _70.SignatureDescriptor): _70.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _70.SignatureDescriptorProtoMsg): _70.SignatureDescriptor;
                    toProto(message: _70.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _70.SignatureDescriptor): _70.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _70.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_70.SignatureDescriptor_Data>): _70.SignatureDescriptor_Data;
                    fromAmino(object: _70.SignatureDescriptor_DataAmino): _70.SignatureDescriptor_Data;
                    toAmino(message: _70.SignatureDescriptor_Data): _70.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _70.SignatureDescriptor_DataAminoMsg): _70.SignatureDescriptor_Data;
                    toAminoMsg(message: _70.SignatureDescriptor_Data): _70.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _70.SignatureDescriptor_DataProtoMsg): _70.SignatureDescriptor_Data;
                    toProto(message: _70.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _70.SignatureDescriptor_Data): _70.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _70.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_70.SignatureDescriptor_Data_Single>): _70.SignatureDescriptor_Data_Single;
                    fromAmino(object: _70.SignatureDescriptor_Data_SingleAmino): _70.SignatureDescriptor_Data_Single;
                    toAmino(message: _70.SignatureDescriptor_Data_Single): _70.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _70.SignatureDescriptor_Data_SingleAminoMsg): _70.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _70.SignatureDescriptor_Data_Single): _70.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _70.SignatureDescriptor_Data_SingleProtoMsg): _70.SignatureDescriptor_Data_Single;
                    toProto(message: _70.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _70.SignatureDescriptor_Data_Single): _70.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _70.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _70.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_70.SignatureDescriptor_Data_Multi>): _70.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _70.SignatureDescriptor_Data_MultiAmino): _70.SignatureDescriptor_Data_Multi;
                    toAmino(message: _70.SignatureDescriptor_Data_Multi): _70.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _70.SignatureDescriptor_Data_MultiAminoMsg): _70.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _70.SignatureDescriptor_Data_Multi): _70.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _70.SignatureDescriptor_Data_MultiProtoMsg): _70.SignatureDescriptor_Data_Multi;
                    toProto(message: _70.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _70.SignatureDescriptor_Data_Multi): _70.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _164.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _71.SimulateRequest): Promise<_71.SimulateResponse>;
                getTx(request: _71.GetTxRequest): Promise<_71.GetTxResponse>;
                broadcastTx(request: _71.BroadcastTxRequest): Promise<_71.BroadcastTxResponse>;
                getTxsEvent(request: _71.GetTxsEventRequest): Promise<_71.GetTxsEventResponse>;
                getBlockWithTxs(request: _71.GetBlockWithTxsRequest): Promise<_71.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _149.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _72.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.Tx;
                fromPartial(object: Partial<_72.Tx>): _72.Tx;
                fromAmino(object: _72.TxAmino): _72.Tx;
                toAmino(message: _72.Tx): _72.TxAmino;
                fromAminoMsg(object: _72.TxAminoMsg): _72.Tx;
                toAminoMsg(message: _72.Tx): _72.TxAminoMsg;
                fromProtoMsg(message: _72.TxProtoMsg): _72.Tx;
                toProto(message: _72.Tx): Uint8Array;
                toProtoMsg(message: _72.Tx): _72.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _72.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.TxRaw;
                fromPartial(object: Partial<_72.TxRaw>): _72.TxRaw;
                fromAmino(object: _72.TxRawAmino): _72.TxRaw;
                toAmino(message: _72.TxRaw): _72.TxRawAmino;
                fromAminoMsg(object: _72.TxRawAminoMsg): _72.TxRaw;
                toAminoMsg(message: _72.TxRaw): _72.TxRawAminoMsg;
                fromProtoMsg(message: _72.TxRawProtoMsg): _72.TxRaw;
                toProto(message: _72.TxRaw): Uint8Array;
                toProtoMsg(message: _72.TxRaw): _72.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _72.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.SignDoc;
                fromPartial(object: Partial<_72.SignDoc>): _72.SignDoc;
                fromAmino(object: _72.SignDocAmino): _72.SignDoc;
                toAmino(message: _72.SignDoc): _72.SignDocAmino;
                fromAminoMsg(object: _72.SignDocAminoMsg): _72.SignDoc;
                toAminoMsg(message: _72.SignDoc): _72.SignDocAminoMsg;
                fromProtoMsg(message: _72.SignDocProtoMsg): _72.SignDoc;
                toProto(message: _72.SignDoc): Uint8Array;
                toProtoMsg(message: _72.SignDoc): _72.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _72.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.TxBody;
                fromPartial(object: Partial<_72.TxBody>): _72.TxBody;
                fromAmino(object: _72.TxBodyAmino): _72.TxBody;
                toAmino(message: _72.TxBody): _72.TxBodyAmino;
                fromAminoMsg(object: _72.TxBodyAminoMsg): _72.TxBody;
                toAminoMsg(message: _72.TxBody): _72.TxBodyAminoMsg;
                fromProtoMsg(message: _72.TxBodyProtoMsg): _72.TxBody;
                toProto(message: _72.TxBody): Uint8Array;
                toProtoMsg(message: _72.TxBody): _72.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _72.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.AuthInfo;
                fromPartial(object: Partial<_72.AuthInfo>): _72.AuthInfo;
                fromAmino(object: _72.AuthInfoAmino): _72.AuthInfo;
                toAmino(message: _72.AuthInfo): _72.AuthInfoAmino;
                fromAminoMsg(object: _72.AuthInfoAminoMsg): _72.AuthInfo;
                toAminoMsg(message: _72.AuthInfo): _72.AuthInfoAminoMsg;
                fromProtoMsg(message: _72.AuthInfoProtoMsg): _72.AuthInfo;
                toProto(message: _72.AuthInfo): Uint8Array;
                toProtoMsg(message: _72.AuthInfo): _72.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _72.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.SignerInfo;
                fromPartial(object: Partial<_72.SignerInfo>): _72.SignerInfo;
                fromAmino(object: _72.SignerInfoAmino): _72.SignerInfo;
                toAmino(message: _72.SignerInfo): _72.SignerInfoAmino;
                fromAminoMsg(object: _72.SignerInfoAminoMsg): _72.SignerInfo;
                toAminoMsg(message: _72.SignerInfo): _72.SignerInfoAminoMsg;
                fromProtoMsg(message: _72.SignerInfoProtoMsg): _72.SignerInfo;
                toProto(message: _72.SignerInfo): Uint8Array;
                toProtoMsg(message: _72.SignerInfo): _72.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _72.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.ModeInfo;
                fromPartial(object: Partial<_72.ModeInfo>): _72.ModeInfo;
                fromAmino(object: _72.ModeInfoAmino): _72.ModeInfo;
                toAmino(message: _72.ModeInfo): _72.ModeInfoAmino;
                fromAminoMsg(object: _72.ModeInfoAminoMsg): _72.ModeInfo;
                toAminoMsg(message: _72.ModeInfo): _72.ModeInfoAminoMsg;
                fromProtoMsg(message: _72.ModeInfoProtoMsg): _72.ModeInfo;
                toProto(message: _72.ModeInfo): Uint8Array;
                toProtoMsg(message: _72.ModeInfo): _72.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _72.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.ModeInfo_Single;
                fromPartial(object: Partial<_72.ModeInfo_Single>): _72.ModeInfo_Single;
                fromAmino(object: _72.ModeInfo_SingleAmino): _72.ModeInfo_Single;
                toAmino(message: _72.ModeInfo_Single): _72.ModeInfo_SingleAmino;
                fromAminoMsg(object: _72.ModeInfo_SingleAminoMsg): _72.ModeInfo_Single;
                toAminoMsg(message: _72.ModeInfo_Single): _72.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _72.ModeInfo_SingleProtoMsg): _72.ModeInfo_Single;
                toProto(message: _72.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _72.ModeInfo_Single): _72.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _72.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.ModeInfo_Multi;
                fromPartial(object: Partial<_72.ModeInfo_Multi>): _72.ModeInfo_Multi;
                fromAmino(object: _72.ModeInfo_MultiAmino): _72.ModeInfo_Multi;
                toAmino(message: _72.ModeInfo_Multi): _72.ModeInfo_MultiAmino;
                fromAminoMsg(object: _72.ModeInfo_MultiAminoMsg): _72.ModeInfo_Multi;
                toAminoMsg(message: _72.ModeInfo_Multi): _72.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _72.ModeInfo_MultiProtoMsg): _72.ModeInfo_Multi;
                toProto(message: _72.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _72.ModeInfo_Multi): _72.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _72.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.Fee;
                fromPartial(object: Partial<_72.Fee>): _72.Fee;
                fromAmino(object: _72.FeeAmino): _72.Fee;
                toAmino(message: _72.Fee): _72.FeeAmino;
                fromAminoMsg(object: _72.FeeAminoMsg): _72.Fee;
                toAminoMsg(message: _72.Fee): _72.FeeAminoMsg;
                fromProtoMsg(message: _72.FeeProtoMsg): _72.Fee;
                toProto(message: _72.Fee): Uint8Array;
                toProtoMsg(message: _72.Fee): _72.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _71.OrderBy;
            orderByToJSON(object: _71.OrderBy): string;
            broadcastModeFromJSON(object: any): _71.BroadcastMode;
            broadcastModeToJSON(object: _71.BroadcastMode): string;
            OrderBy: typeof _71.OrderBy;
            OrderBySDKType: typeof _71.OrderBy;
            OrderByAmino: typeof _71.OrderBy;
            BroadcastMode: typeof _71.BroadcastMode;
            BroadcastModeSDKType: typeof _71.BroadcastMode;
            BroadcastModeAmino: typeof _71.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _71.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.GetTxsEventRequest;
                fromPartial(object: Partial<_71.GetTxsEventRequest>): _71.GetTxsEventRequest;
                fromAmino(object: _71.GetTxsEventRequestAmino): _71.GetTxsEventRequest;
                toAmino(message: _71.GetTxsEventRequest): _71.GetTxsEventRequestAmino;
                fromAminoMsg(object: _71.GetTxsEventRequestAminoMsg): _71.GetTxsEventRequest;
                toAminoMsg(message: _71.GetTxsEventRequest): _71.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _71.GetTxsEventRequestProtoMsg): _71.GetTxsEventRequest;
                toProto(message: _71.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _71.GetTxsEventRequest): _71.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _71.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.GetTxsEventResponse;
                fromPartial(object: Partial<_71.GetTxsEventResponse>): _71.GetTxsEventResponse;
                fromAmino(object: _71.GetTxsEventResponseAmino): _71.GetTxsEventResponse;
                toAmino(message: _71.GetTxsEventResponse): _71.GetTxsEventResponseAmino;
                fromAminoMsg(object: _71.GetTxsEventResponseAminoMsg): _71.GetTxsEventResponse;
                toAminoMsg(message: _71.GetTxsEventResponse): _71.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _71.GetTxsEventResponseProtoMsg): _71.GetTxsEventResponse;
                toProto(message: _71.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _71.GetTxsEventResponse): _71.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _71.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.BroadcastTxRequest;
                fromPartial(object: Partial<_71.BroadcastTxRequest>): _71.BroadcastTxRequest;
                fromAmino(object: _71.BroadcastTxRequestAmino): _71.BroadcastTxRequest;
                toAmino(message: _71.BroadcastTxRequest): _71.BroadcastTxRequestAmino;
                fromAminoMsg(object: _71.BroadcastTxRequestAminoMsg): _71.BroadcastTxRequest;
                toAminoMsg(message: _71.BroadcastTxRequest): _71.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _71.BroadcastTxRequestProtoMsg): _71.BroadcastTxRequest;
                toProto(message: _71.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _71.BroadcastTxRequest): _71.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _71.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.BroadcastTxResponse;
                fromPartial(object: Partial<_71.BroadcastTxResponse>): _71.BroadcastTxResponse;
                fromAmino(object: _71.BroadcastTxResponseAmino): _71.BroadcastTxResponse;
                toAmino(message: _71.BroadcastTxResponse): _71.BroadcastTxResponseAmino;
                fromAminoMsg(object: _71.BroadcastTxResponseAminoMsg): _71.BroadcastTxResponse;
                toAminoMsg(message: _71.BroadcastTxResponse): _71.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _71.BroadcastTxResponseProtoMsg): _71.BroadcastTxResponse;
                toProto(message: _71.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _71.BroadcastTxResponse): _71.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _71.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.SimulateRequest;
                fromPartial(object: Partial<_71.SimulateRequest>): _71.SimulateRequest;
                fromAmino(object: _71.SimulateRequestAmino): _71.SimulateRequest;
                toAmino(message: _71.SimulateRequest): _71.SimulateRequestAmino;
                fromAminoMsg(object: _71.SimulateRequestAminoMsg): _71.SimulateRequest;
                toAminoMsg(message: _71.SimulateRequest): _71.SimulateRequestAminoMsg;
                fromProtoMsg(message: _71.SimulateRequestProtoMsg): _71.SimulateRequest;
                toProto(message: _71.SimulateRequest): Uint8Array;
                toProtoMsg(message: _71.SimulateRequest): _71.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _71.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.SimulateResponse;
                fromPartial(object: Partial<_71.SimulateResponse>): _71.SimulateResponse;
                fromAmino(object: _71.SimulateResponseAmino): _71.SimulateResponse;
                toAmino(message: _71.SimulateResponse): _71.SimulateResponseAmino;
                fromAminoMsg(object: _71.SimulateResponseAminoMsg): _71.SimulateResponse;
                toAminoMsg(message: _71.SimulateResponse): _71.SimulateResponseAminoMsg;
                fromProtoMsg(message: _71.SimulateResponseProtoMsg): _71.SimulateResponse;
                toProto(message: _71.SimulateResponse): Uint8Array;
                toProtoMsg(message: _71.SimulateResponse): _71.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _71.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.GetTxRequest;
                fromPartial(object: Partial<_71.GetTxRequest>): _71.GetTxRequest;
                fromAmino(object: _71.GetTxRequestAmino): _71.GetTxRequest;
                toAmino(message: _71.GetTxRequest): _71.GetTxRequestAmino;
                fromAminoMsg(object: _71.GetTxRequestAminoMsg): _71.GetTxRequest;
                toAminoMsg(message: _71.GetTxRequest): _71.GetTxRequestAminoMsg;
                fromProtoMsg(message: _71.GetTxRequestProtoMsg): _71.GetTxRequest;
                toProto(message: _71.GetTxRequest): Uint8Array;
                toProtoMsg(message: _71.GetTxRequest): _71.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _71.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.GetTxResponse;
                fromPartial(object: Partial<_71.GetTxResponse>): _71.GetTxResponse;
                fromAmino(object: _71.GetTxResponseAmino): _71.GetTxResponse;
                toAmino(message: _71.GetTxResponse): _71.GetTxResponseAmino;
                fromAminoMsg(object: _71.GetTxResponseAminoMsg): _71.GetTxResponse;
                toAminoMsg(message: _71.GetTxResponse): _71.GetTxResponseAminoMsg;
                fromProtoMsg(message: _71.GetTxResponseProtoMsg): _71.GetTxResponse;
                toProto(message: _71.GetTxResponse): Uint8Array;
                toProtoMsg(message: _71.GetTxResponse): _71.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _71.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_71.GetBlockWithTxsRequest>): _71.GetBlockWithTxsRequest;
                fromAmino(object: _71.GetBlockWithTxsRequestAmino): _71.GetBlockWithTxsRequest;
                toAmino(message: _71.GetBlockWithTxsRequest): _71.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _71.GetBlockWithTxsRequestAminoMsg): _71.GetBlockWithTxsRequest;
                toAminoMsg(message: _71.GetBlockWithTxsRequest): _71.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _71.GetBlockWithTxsRequestProtoMsg): _71.GetBlockWithTxsRequest;
                toProto(message: _71.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _71.GetBlockWithTxsRequest): _71.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _71.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_71.GetBlockWithTxsResponse>): _71.GetBlockWithTxsResponse;
                fromAmino(object: _71.GetBlockWithTxsResponseAmino): _71.GetBlockWithTxsResponse;
                toAmino(message: _71.GetBlockWithTxsResponse): _71.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _71.GetBlockWithTxsResponseAminoMsg): _71.GetBlockWithTxsResponse;
                toAminoMsg(message: _71.GetBlockWithTxsResponse): _71.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _71.GetBlockWithTxsResponseProtoMsg): _71.GetBlockWithTxsResponse;
                toProto(message: _71.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _71.GetBlockWithTxsResponse): _71.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _165.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _73.QueryCurrentPlanRequest): Promise<_73.QueryCurrentPlanResponse>;
                appliedPlan(request: _73.QueryAppliedPlanRequest): Promise<_73.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _73.QueryUpgradedConsensusStateRequest): Promise<_73.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _73.QueryModuleVersionsRequest): Promise<_73.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _150.LCDQueryClient;
            Plan: {
                typeUrl: string;
                encode(message: _74.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.Plan;
                fromPartial(object: Partial<_74.Plan>): _74.Plan;
                fromAmino(object: _74.PlanAmino): _74.Plan;
                toAmino(message: _74.Plan): _74.PlanAmino;
                fromAminoMsg(object: _74.PlanAminoMsg): _74.Plan;
                toAminoMsg(message: _74.Plan): _74.PlanAminoMsg;
                fromProtoMsg(message: _74.PlanProtoMsg): _74.Plan;
                toProto(message: _74.Plan): Uint8Array;
                toProtoMsg(message: _74.Plan): _74.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _74.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_74.SoftwareUpgradeProposal>): _74.SoftwareUpgradeProposal;
                fromAmino(object: _74.SoftwareUpgradeProposalAmino): _74.SoftwareUpgradeProposal;
                toAmino(message: _74.SoftwareUpgradeProposal): _74.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _74.SoftwareUpgradeProposalAminoMsg): _74.SoftwareUpgradeProposal;
                toAminoMsg(message: _74.SoftwareUpgradeProposal): _74.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _74.SoftwareUpgradeProposalProtoMsg): _74.SoftwareUpgradeProposal;
                toProto(message: _74.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _74.SoftwareUpgradeProposal): _74.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _74.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_74.CancelSoftwareUpgradeProposal>): _74.CancelSoftwareUpgradeProposal;
                fromAmino(object: _74.CancelSoftwareUpgradeProposalAmino): _74.CancelSoftwareUpgradeProposal;
                toAmino(message: _74.CancelSoftwareUpgradeProposal): _74.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _74.CancelSoftwareUpgradeProposalAminoMsg): _74.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _74.CancelSoftwareUpgradeProposal): _74.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _74.CancelSoftwareUpgradeProposalProtoMsg): _74.CancelSoftwareUpgradeProposal;
                toProto(message: _74.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _74.CancelSoftwareUpgradeProposal): _74.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _74.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.ModuleVersion;
                fromPartial(object: Partial<_74.ModuleVersion>): _74.ModuleVersion;
                fromAmino(object: _74.ModuleVersionAmino): _74.ModuleVersion;
                toAmino(message: _74.ModuleVersion): _74.ModuleVersionAmino;
                fromAminoMsg(object: _74.ModuleVersionAminoMsg): _74.ModuleVersion;
                toAminoMsg(message: _74.ModuleVersion): _74.ModuleVersionAminoMsg;
                fromProtoMsg(message: _74.ModuleVersionProtoMsg): _74.ModuleVersion;
                toProto(message: _74.ModuleVersion): Uint8Array;
                toProtoMsg(message: _74.ModuleVersion): _74.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _73.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _73.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_73.QueryCurrentPlanRequest>): _73.QueryCurrentPlanRequest;
                fromAmino(_: _73.QueryCurrentPlanRequestAmino): _73.QueryCurrentPlanRequest;
                toAmino(_: _73.QueryCurrentPlanRequest): _73.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _73.QueryCurrentPlanRequestAminoMsg): _73.QueryCurrentPlanRequest;
                toAminoMsg(message: _73.QueryCurrentPlanRequest): _73.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _73.QueryCurrentPlanRequestProtoMsg): _73.QueryCurrentPlanRequest;
                toProto(message: _73.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _73.QueryCurrentPlanRequest): _73.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _73.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_73.QueryCurrentPlanResponse>): _73.QueryCurrentPlanResponse;
                fromAmino(object: _73.QueryCurrentPlanResponseAmino): _73.QueryCurrentPlanResponse;
                toAmino(message: _73.QueryCurrentPlanResponse): _73.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _73.QueryCurrentPlanResponseAminoMsg): _73.QueryCurrentPlanResponse;
                toAminoMsg(message: _73.QueryCurrentPlanResponse): _73.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _73.QueryCurrentPlanResponseProtoMsg): _73.QueryCurrentPlanResponse;
                toProto(message: _73.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _73.QueryCurrentPlanResponse): _73.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _73.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_73.QueryAppliedPlanRequest>): _73.QueryAppliedPlanRequest;
                fromAmino(object: _73.QueryAppliedPlanRequestAmino): _73.QueryAppliedPlanRequest;
                toAmino(message: _73.QueryAppliedPlanRequest): _73.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _73.QueryAppliedPlanRequestAminoMsg): _73.QueryAppliedPlanRequest;
                toAminoMsg(message: _73.QueryAppliedPlanRequest): _73.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _73.QueryAppliedPlanRequestProtoMsg): _73.QueryAppliedPlanRequest;
                toProto(message: _73.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _73.QueryAppliedPlanRequest): _73.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _73.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_73.QueryAppliedPlanResponse>): _73.QueryAppliedPlanResponse;
                fromAmino(object: _73.QueryAppliedPlanResponseAmino): _73.QueryAppliedPlanResponse;
                toAmino(message: _73.QueryAppliedPlanResponse): _73.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _73.QueryAppliedPlanResponseAminoMsg): _73.QueryAppliedPlanResponse;
                toAminoMsg(message: _73.QueryAppliedPlanResponse): _73.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _73.QueryAppliedPlanResponseProtoMsg): _73.QueryAppliedPlanResponse;
                toProto(message: _73.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _73.QueryAppliedPlanResponse): _73.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _73.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_73.QueryUpgradedConsensusStateRequest>): _73.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _73.QueryUpgradedConsensusStateRequestAmino): _73.QueryUpgradedConsensusStateRequest;
                toAmino(message: _73.QueryUpgradedConsensusStateRequest): _73.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _73.QueryUpgradedConsensusStateRequestAminoMsg): _73.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _73.QueryUpgradedConsensusStateRequest): _73.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _73.QueryUpgradedConsensusStateRequestProtoMsg): _73.QueryUpgradedConsensusStateRequest;
                toProto(message: _73.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _73.QueryUpgradedConsensusStateRequest): _73.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _73.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_73.QueryUpgradedConsensusStateResponse>): _73.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _73.QueryUpgradedConsensusStateResponseAmino): _73.QueryUpgradedConsensusStateResponse;
                toAmino(message: _73.QueryUpgradedConsensusStateResponse): _73.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _73.QueryUpgradedConsensusStateResponseAminoMsg): _73.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _73.QueryUpgradedConsensusStateResponse): _73.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _73.QueryUpgradedConsensusStateResponseProtoMsg): _73.QueryUpgradedConsensusStateResponse;
                toProto(message: _73.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _73.QueryUpgradedConsensusStateResponse): _73.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _73.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_73.QueryModuleVersionsRequest>): _73.QueryModuleVersionsRequest;
                fromAmino(object: _73.QueryModuleVersionsRequestAmino): _73.QueryModuleVersionsRequest;
                toAmino(message: _73.QueryModuleVersionsRequest): _73.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _73.QueryModuleVersionsRequestAminoMsg): _73.QueryModuleVersionsRequest;
                toAminoMsg(message: _73.QueryModuleVersionsRequest): _73.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _73.QueryModuleVersionsRequestProtoMsg): _73.QueryModuleVersionsRequest;
                toProto(message: _73.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _73.QueryModuleVersionsRequest): _73.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _73.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_73.QueryModuleVersionsResponse>): _73.QueryModuleVersionsResponse;
                fromAmino(object: _73.QueryModuleVersionsResponseAmino): _73.QueryModuleVersionsResponse;
                toAmino(message: _73.QueryModuleVersionsResponse): _73.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _73.QueryModuleVersionsResponseAminoMsg): _73.QueryModuleVersionsResponse;
                toAminoMsg(message: _73.QueryModuleVersionsResponse): _73.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _73.QueryModuleVersionsResponseProtoMsg): _73.QueryModuleVersionsResponse;
                toProto(message: _73.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _73.QueryModuleVersionsResponse): _73.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _175.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _75.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _75.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _75.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _75.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _75.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _75.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _75.MsgCreateVestingAccount) => _75.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _75.MsgCreateVestingAccountAmino) => _75.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _76.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.BaseVestingAccount;
                fromPartial(object: Partial<_76.BaseVestingAccount>): _76.BaseVestingAccount;
                fromAmino(object: _76.BaseVestingAccountAmino): _76.BaseVestingAccount;
                toAmino(message: _76.BaseVestingAccount): _76.BaseVestingAccountAmino;
                fromAminoMsg(object: _76.BaseVestingAccountAminoMsg): _76.BaseVestingAccount;
                toAminoMsg(message: _76.BaseVestingAccount): _76.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _76.BaseVestingAccountProtoMsg): _76.BaseVestingAccount;
                toProto(message: _76.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _76.BaseVestingAccount): _76.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _76.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.ContinuousVestingAccount;
                fromPartial(object: Partial<_76.ContinuousVestingAccount>): _76.ContinuousVestingAccount;
                fromAmino(object: _76.ContinuousVestingAccountAmino): _76.ContinuousVestingAccount;
                toAmino(message: _76.ContinuousVestingAccount): _76.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _76.ContinuousVestingAccountAminoMsg): _76.ContinuousVestingAccount;
                toAminoMsg(message: _76.ContinuousVestingAccount): _76.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _76.ContinuousVestingAccountProtoMsg): _76.ContinuousVestingAccount;
                toProto(message: _76.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _76.ContinuousVestingAccount): _76.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _76.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.DelayedVestingAccount;
                fromPartial(object: Partial<_76.DelayedVestingAccount>): _76.DelayedVestingAccount;
                fromAmino(object: _76.DelayedVestingAccountAmino): _76.DelayedVestingAccount;
                toAmino(message: _76.DelayedVestingAccount): _76.DelayedVestingAccountAmino;
                fromAminoMsg(object: _76.DelayedVestingAccountAminoMsg): _76.DelayedVestingAccount;
                toAminoMsg(message: _76.DelayedVestingAccount): _76.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _76.DelayedVestingAccountProtoMsg): _76.DelayedVestingAccount;
                toProto(message: _76.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _76.DelayedVestingAccount): _76.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _76.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Period;
                fromPartial(object: Partial<_76.Period>): _76.Period;
                fromAmino(object: _76.PeriodAmino): _76.Period;
                toAmino(message: _76.Period): _76.PeriodAmino;
                fromAminoMsg(object: _76.PeriodAminoMsg): _76.Period;
                toAminoMsg(message: _76.Period): _76.PeriodAminoMsg;
                fromProtoMsg(message: _76.PeriodProtoMsg): _76.Period;
                toProto(message: _76.Period): Uint8Array;
                toProtoMsg(message: _76.Period): _76.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _76.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.PeriodicVestingAccount;
                fromPartial(object: Partial<_76.PeriodicVestingAccount>): _76.PeriodicVestingAccount;
                fromAmino(object: _76.PeriodicVestingAccountAmino): _76.PeriodicVestingAccount;
                toAmino(message: _76.PeriodicVestingAccount): _76.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _76.PeriodicVestingAccountAminoMsg): _76.PeriodicVestingAccount;
                toAminoMsg(message: _76.PeriodicVestingAccount): _76.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _76.PeriodicVestingAccountProtoMsg): _76.PeriodicVestingAccount;
                toProto(message: _76.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _76.PeriodicVestingAccount): _76.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _76.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.PermanentLockedAccount;
                fromPartial(object: Partial<_76.PermanentLockedAccount>): _76.PermanentLockedAccount;
                fromAmino(object: _76.PermanentLockedAccountAmino): _76.PermanentLockedAccount;
                toAmino(message: _76.PermanentLockedAccount): _76.PermanentLockedAccountAmino;
                fromAminoMsg(object: _76.PermanentLockedAccountAminoMsg): _76.PermanentLockedAccount;
                toAminoMsg(message: _76.PermanentLockedAccount): _76.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _76.PermanentLockedAccountProtoMsg): _76.PermanentLockedAccount;
                toProto(message: _76.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _76.PermanentLockedAccount): _76.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _75.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgCreateVestingAccount;
                fromPartial(object: Partial<_75.MsgCreateVestingAccount>): _75.MsgCreateVestingAccount;
                fromAmino(object: _75.MsgCreateVestingAccountAmino): _75.MsgCreateVestingAccount;
                toAmino(message: _75.MsgCreateVestingAccount): _75.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _75.MsgCreateVestingAccountAminoMsg): _75.MsgCreateVestingAccount;
                toAminoMsg(message: _75.MsgCreateVestingAccount): _75.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _75.MsgCreateVestingAccountProtoMsg): _75.MsgCreateVestingAccount;
                toProto(message: _75.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _75.MsgCreateVestingAccount): _75.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _75.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_75.MsgCreateVestingAccountResponse>): _75.MsgCreateVestingAccountResponse;
                fromAmino(_: _75.MsgCreateVestingAccountResponseAmino): _75.MsgCreateVestingAccountResponse;
                toAmino(_: _75.MsgCreateVestingAccountResponse): _75.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _75.MsgCreateVestingAccountResponseAminoMsg): _75.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _75.MsgCreateVestingAccountResponse): _75.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _75.MsgCreateVestingAccountResponseProtoMsg): _75.MsgCreateVestingAccountResponse;
                toProto(message: _75.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _75.MsgCreateVestingAccountResponse): _75.MsgCreateVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _166.MsgClientImpl;
                };
                bank: {
                    v1beta1: _167.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _168.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _169.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _170.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _171.MsgClientImpl;
                };
                gov: {
                    v1beta1: _172.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _173.MsgClientImpl;
                };
                staking: {
                    v1beta1: _174.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _175.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _9.QueryAccountsRequest): Promise<_9.QueryAccountsResponse>;
                        account(request: _9.QueryAccountRequest): Promise<_9.QueryAccountResponse>;
                        params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                        moduleAccountByName(request: _9.QueryModuleAccountByNameRequest): Promise<_9.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _13.QueryGrantsRequest): Promise<_13.QueryGrantsResponse>;
                        granterGrants(request: _13.QueryGranterGrantsRequest): Promise<_13.QueryGranterGrantsResponse>;
                        granteeGrants(request: _13.QueryGranteeGrantsRequest): Promise<_13.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _18.QueryBalanceRequest): Promise<_18.QueryBalanceResponse>;
                        allBalances(request: _18.QueryAllBalancesRequest): Promise<_18.QueryAllBalancesResponse>;
                        spendableBalances(request: _18.QuerySpendableBalancesRequest): Promise<_18.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _18.QueryTotalSupplyRequest): Promise<_18.QueryTotalSupplyResponse>;
                        supplyOf(request: _18.QuerySupplyOfRequest): Promise<_18.QuerySupplyOfResponse>;
                        params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
                        denomMetadata(request: _18.QueryDenomMetadataRequest): Promise<_18.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _18.QueryDenomsMetadataRequest): Promise<_18.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _22.ConfigRequest): Promise<_22.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _29.GetNodeInfoRequest): Promise<_29.GetNodeInfoResponse>;
                            getSyncing(request?: _29.GetSyncingRequest): Promise<_29.GetSyncingResponse>;
                            getLatestBlock(request?: _29.GetLatestBlockRequest): Promise<_29.GetLatestBlockResponse>;
                            getBlockByHeight(request: _29.GetBlockByHeightRequest): Promise<_29.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _29.GetLatestValidatorSetRequest): Promise<_29.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _29.GetValidatorSetByHeightRequest): Promise<_29.GetValidatorSetByHeightResponse>;
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
                    v1beta1: {
                        proposal(request: _54.QueryProposalRequest): Promise<_54.QueryProposalResponse>;
                        proposals(request: _54.QueryProposalsRequest): Promise<_54.QueryProposalsResponse>;
                        vote(request: _54.QueryVoteRequest): Promise<_54.QueryVoteResponse>;
                        votes(request: _54.QueryVotesRequest): Promise<_54.QueryVotesResponse>;
                        params(request: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                        deposit(request: _54.QueryDepositRequest): Promise<_54.QueryDepositResponse>;
                        deposits(request: _54.QueryDepositsRequest): Promise<_54.QueryDepositsResponse>;
                        tallyResult(request: _54.QueryTallyResultRequest): Promise<_54.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                        inflation(request?: _58.QueryInflationRequest): Promise<_58.QueryInflationResponse>;
                        annualProvisions(request?: _58.QueryAnnualProvisionsRequest): Promise<_58.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
                        signingInfo(request: _62.QuerySigningInfoRequest): Promise<_62.QuerySigningInfoResponse>;
                        signingInfos(request?: _62.QuerySigningInfosRequest): Promise<_62.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _67.QueryValidatorsRequest): Promise<_67.QueryValidatorsResponse>;
                        validator(request: _67.QueryValidatorRequest): Promise<_67.QueryValidatorResponse>;
                        validatorDelegations(request: _67.QueryValidatorDelegationsRequest): Promise<_67.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _67.QueryValidatorUnbondingDelegationsRequest): Promise<_67.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _67.QueryDelegationRequest): Promise<_67.QueryDelegationResponse>;
                        unbondingDelegation(request: _67.QueryUnbondingDelegationRequest): Promise<_67.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _67.QueryDelegatorDelegationsRequest): Promise<_67.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _67.QueryDelegatorUnbondingDelegationsRequest): Promise<_67.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _67.QueryRedelegationsRequest): Promise<_67.QueryRedelegationsResponse>;
                        delegatorValidators(request: _67.QueryDelegatorValidatorsRequest): Promise<_67.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _67.QueryDelegatorValidatorRequest): Promise<_67.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _67.QueryHistoricalInfoRequest): Promise<_67.QueryHistoricalInfoResponse>;
                        pool(request?: _67.QueryPoolRequest): Promise<_67.QueryPoolResponse>;
                        params(request?: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _71.SimulateRequest): Promise<_71.SimulateResponse>;
                        getTx(request: _71.GetTxRequest): Promise<_71.GetTxResponse>;
                        broadcastTx(request: _71.BroadcastTxRequest): Promise<_71.BroadcastTxResponse>;
                        getTxsEvent(request: _71.GetTxsEventRequest): Promise<_71.GetTxsEventResponse>;
                        getBlockWithTxs(request: _71.GetBlockWithTxsRequest): Promise<_71.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _73.QueryCurrentPlanRequest): Promise<_73.QueryCurrentPlanResponse>;
                        appliedPlan(request: _73.QueryAppliedPlanRequest): Promise<_73.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _73.QueryUpgradedConsensusStateRequest): Promise<_73.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _73.QueryModuleVersionsRequest): Promise<_73.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _136.LCDQueryClient;
                };
                authz: {
                    v1beta1: _137.LCDQueryClient;
                };
                bank: {
                    v1beta1: _138.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _139.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _140.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _141.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _142.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _143.LCDQueryClient;
                };
                gov: {
                    v1beta1: _144.LCDQueryClient;
                };
                mint: {
                    v1beta1: _145.LCDQueryClient;
                };
                params: {
                    v1beta1: _146.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _147.LCDQueryClient;
                };
                staking: {
                    v1beta1: _148.LCDQueryClient;
                };
                tx: {
                    v1beta1: _149.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _150.LCDQueryClient;
                };
            };
        }>;
    };
}
