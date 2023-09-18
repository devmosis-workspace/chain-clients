import * as _2 from "./auth/v1beta1/auth";
import * as _3 from "./auth/v1beta1/genesis";
import * as _4 from "./auth/v1beta1/query";
import * as _5 from "./authz/v1beta1/authz";
import * as _6 from "./authz/v1beta1/event";
import * as _7 from "./authz/v1beta1/genesis";
import * as _8 from "./authz/v1beta1/query";
import * as _9 from "./authz/v1beta1/tx";
import * as _10 from "./bank/v1beta1/authz";
import * as _11 from "./bank/v1beta1/bank";
import * as _12 from "./bank/v1beta1/genesis";
import * as _13 from "./bank/v1beta1/query";
import * as _14 from "./bank/v1beta1/tx";
import * as _15 from "./base/abci/v1beta1/abci";
import * as _16 from "./base/kv/v1beta1/kv";
import * as _17 from "./base/node/v1beta1/query";
import * as _18 from "./base/query/v1beta1/pagination";
import * as _19 from "./base/reflection/v1beta1/reflection";
import * as _20 from "./base/reflection/v2alpha1/reflection";
import * as _21 from "./base/snapshots/v1beta1/snapshot";
import * as _22 from "./base/store/v1beta1/commit_info";
import * as _23 from "./base/store/v1beta1/listening";
import * as _24 from "./base/tendermint/v1beta1/query";
import * as _25 from "./base/v1beta1/coin";
import * as _26 from "./capability/v1beta1/capability";
import * as _27 from "./capability/v1beta1/genesis";
import * as _28 from "./crisis/v1beta1/genesis";
import * as _29 from "./crisis/v1beta1/tx";
import * as _30 from "./crypto/ed25519/keys";
import * as _31 from "./crypto/multisig/keys";
import * as _32 from "./crypto/secp256k1/keys";
import * as _33 from "./crypto/secp256r1/keys";
import * as _34 from "./distribution/v1beta1/distribution";
import * as _35 from "./distribution/v1beta1/genesis";
import * as _36 from "./distribution/v1beta1/query";
import * as _37 from "./distribution/v1beta1/tx";
import * as _38 from "./evidence/v1beta1/evidence";
import * as _39 from "./evidence/v1beta1/genesis";
import * as _40 from "./evidence/v1beta1/query";
import * as _41 from "./evidence/v1beta1/tx";
import * as _42 from "./feegrant/v1beta1/feegrant";
import * as _43 from "./feegrant/v1beta1/genesis";
import * as _44 from "./feegrant/v1beta1/query";
import * as _45 from "./feegrant/v1beta1/tx";
import * as _46 from "./genutil/v1beta1/genesis";
import * as _47 from "./gov/v1beta1/genesis";
import * as _48 from "./gov/v1beta1/gov";
import * as _49 from "./gov/v1beta1/query";
import * as _50 from "./gov/v1beta1/tx";
import * as _51 from "./mint/v1beta1/genesis";
import * as _52 from "./mint/v1beta1/mint";
import * as _53 from "./mint/v1beta1/query";
import * as _54 from "./params/v1beta1/params";
import * as _55 from "./params/v1beta1/query";
import * as _56 from "./slashing/v1beta1/genesis";
import * as _57 from "./slashing/v1beta1/query";
import * as _58 from "./slashing/v1beta1/slashing";
import * as _59 from "./slashing/v1beta1/tx";
import * as _60 from "./staking/v1beta1/authz";
import * as _61 from "./staking/v1beta1/genesis";
import * as _62 from "./staking/v1beta1/query";
import * as _63 from "./staking/v1beta1/staking";
import * as _64 from "./staking/v1beta1/tx";
import * as _65 from "./tx/signing/v1beta1/signing";
import * as _66 from "./tx/v1beta1/service";
import * as _67 from "./tx/v1beta1/tx";
import * as _68 from "./upgrade/v1beta1/query";
import * as _69 from "./upgrade/v1beta1/upgrade";
import * as _70 from "./vesting/v1beta1/tx";
import * as _71 from "./vesting/v1beta1/vesting";
import * as _126 from "./auth/v1beta1/query.lcd";
import * as _127 from "./authz/v1beta1/query.lcd";
import * as _128 from "./bank/v1beta1/query.lcd";
import * as _129 from "./base/node/v1beta1/query.lcd";
import * as _130 from "./base/tendermint/v1beta1/query.lcd";
import * as _131 from "./distribution/v1beta1/query.lcd";
import * as _132 from "./evidence/v1beta1/query.lcd";
import * as _133 from "./feegrant/v1beta1/query.lcd";
import * as _134 from "./gov/v1beta1/query.lcd";
import * as _135 from "./mint/v1beta1/query.lcd";
import * as _136 from "./params/v1beta1/query.lcd";
import * as _137 from "./slashing/v1beta1/query.lcd";
import * as _138 from "./staking/v1beta1/query.lcd";
import * as _139 from "./tx/v1beta1/service.lcd";
import * as _140 from "./upgrade/v1beta1/query.lcd";
import * as _141 from "./auth/v1beta1/query.rpc.Query";
import * as _142 from "./authz/v1beta1/query.rpc.Query";
import * as _143 from "./bank/v1beta1/query.rpc.Query";
import * as _144 from "./base/node/v1beta1/query.rpc.Service";
import * as _145 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _146 from "./distribution/v1beta1/query.rpc.Query";
import * as _147 from "./evidence/v1beta1/query.rpc.Query";
import * as _148 from "./feegrant/v1beta1/query.rpc.Query";
import * as _149 from "./gov/v1beta1/query.rpc.Query";
import * as _150 from "./mint/v1beta1/query.rpc.Query";
import * as _151 from "./params/v1beta1/query.rpc.Query";
import * as _152 from "./slashing/v1beta1/query.rpc.Query";
import * as _153 from "./staking/v1beta1/query.rpc.Query";
import * as _154 from "./tx/v1beta1/service.rpc.Service";
import * as _155 from "./upgrade/v1beta1/query.rpc.Query";
import * as _156 from "./authz/v1beta1/tx.rpc.msg";
import * as _157 from "./bank/v1beta1/tx.rpc.msg";
import * as _158 from "./crisis/v1beta1/tx.rpc.msg";
import * as _159 from "./distribution/v1beta1/tx.rpc.msg";
import * as _160 from "./evidence/v1beta1/tx.rpc.msg";
import * as _161 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _162 from "./gov/v1beta1/tx.rpc.msg";
import * as _163 from "./slashing/v1beta1/tx.rpc.msg";
import * as _164 from "./staking/v1beta1/tx.rpc.msg";
import * as _165 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _141.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _4.QueryAccountsRequest): Promise<_4.QueryAccountsResponse>;
                account(request: _4.QueryAccountRequest): Promise<_4.QueryAccountResponse>;
                params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
                moduleAccountByName(request: _4.QueryModuleAccountByNameRequest): Promise<_4.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _126.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _4.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryAccountsRequest;
                fromPartial(object: Partial<_4.QueryAccountsRequest>): _4.QueryAccountsRequest;
                fromAmino(object: _4.QueryAccountsRequestAmino): _4.QueryAccountsRequest;
                toAmino(message: _4.QueryAccountsRequest): _4.QueryAccountsRequestAmino;
                fromAminoMsg(object: _4.QueryAccountsRequestAminoMsg): _4.QueryAccountsRequest;
                toAminoMsg(message: _4.QueryAccountsRequest): _4.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _4.QueryAccountsRequestProtoMsg): _4.QueryAccountsRequest;
                toProto(message: _4.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _4.QueryAccountsRequest): _4.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _4.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryAccountsResponse;
                fromPartial(object: Partial<_4.QueryAccountsResponse>): _4.QueryAccountsResponse;
                fromAmino(object: _4.QueryAccountsResponseAmino): _4.QueryAccountsResponse;
                toAmino(message: _4.QueryAccountsResponse): _4.QueryAccountsResponseAmino;
                fromAminoMsg(object: _4.QueryAccountsResponseAminoMsg): _4.QueryAccountsResponse;
                toAminoMsg(message: _4.QueryAccountsResponse): _4.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _4.QueryAccountsResponseProtoMsg): _4.QueryAccountsResponse;
                toProto(message: _4.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _4.QueryAccountsResponse): _4.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _4.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryAccountRequest;
                fromPartial(object: Partial<_4.QueryAccountRequest>): _4.QueryAccountRequest;
                fromAmino(object: _4.QueryAccountRequestAmino): _4.QueryAccountRequest;
                toAmino(message: _4.QueryAccountRequest): _4.QueryAccountRequestAmino;
                fromAminoMsg(object: _4.QueryAccountRequestAminoMsg): _4.QueryAccountRequest;
                toAminoMsg(message: _4.QueryAccountRequest): _4.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _4.QueryAccountRequestProtoMsg): _4.QueryAccountRequest;
                toProto(message: _4.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _4.QueryAccountRequest): _4.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _4.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryAccountResponse;
                fromPartial(object: Partial<_4.QueryAccountResponse>): _4.QueryAccountResponse;
                fromAmino(object: _4.QueryAccountResponseAmino): _4.QueryAccountResponse;
                toAmino(message: _4.QueryAccountResponse): _4.QueryAccountResponseAmino;
                fromAminoMsg(object: _4.QueryAccountResponseAminoMsg): _4.QueryAccountResponse;
                toAminoMsg(message: _4.QueryAccountResponse): _4.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _4.QueryAccountResponseProtoMsg): _4.QueryAccountResponse;
                toProto(message: _4.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _4.QueryAccountResponse): _4.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _4.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _4.QueryParamsRequest;
                fromPartial(_: Partial<_4.QueryParamsRequest>): _4.QueryParamsRequest;
                fromAmino(_: _4.QueryParamsRequestAmino): _4.QueryParamsRequest;
                toAmino(_: _4.QueryParamsRequest): _4.QueryParamsRequestAmino;
                fromAminoMsg(object: _4.QueryParamsRequestAminoMsg): _4.QueryParamsRequest;
                toAminoMsg(message: _4.QueryParamsRequest): _4.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _4.QueryParamsRequestProtoMsg): _4.QueryParamsRequest;
                toProto(message: _4.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _4.QueryParamsRequest): _4.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _4.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryParamsResponse;
                fromPartial(object: Partial<_4.QueryParamsResponse>): _4.QueryParamsResponse;
                fromAmino(object: _4.QueryParamsResponseAmino): _4.QueryParamsResponse;
                toAmino(message: _4.QueryParamsResponse): _4.QueryParamsResponseAmino;
                fromAminoMsg(object: _4.QueryParamsResponseAminoMsg): _4.QueryParamsResponse;
                toAminoMsg(message: _4.QueryParamsResponse): _4.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _4.QueryParamsResponseProtoMsg): _4.QueryParamsResponse;
                toProto(message: _4.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _4.QueryParamsResponse): _4.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _4.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_4.QueryModuleAccountByNameRequest>): _4.QueryModuleAccountByNameRequest;
                fromAmino(object: _4.QueryModuleAccountByNameRequestAmino): _4.QueryModuleAccountByNameRequest;
                toAmino(message: _4.QueryModuleAccountByNameRequest): _4.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _4.QueryModuleAccountByNameRequestAminoMsg): _4.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _4.QueryModuleAccountByNameRequest): _4.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _4.QueryModuleAccountByNameRequestProtoMsg): _4.QueryModuleAccountByNameRequest;
                toProto(message: _4.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _4.QueryModuleAccountByNameRequest): _4.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _4.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_4.QueryModuleAccountByNameResponse>): _4.QueryModuleAccountByNameResponse;
                fromAmino(object: _4.QueryModuleAccountByNameResponseAmino): _4.QueryModuleAccountByNameResponse;
                toAmino(message: _4.QueryModuleAccountByNameResponse): _4.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _4.QueryModuleAccountByNameResponseAminoMsg): _4.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _4.QueryModuleAccountByNameResponse): _4.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _4.QueryModuleAccountByNameResponseProtoMsg): _4.QueryModuleAccountByNameResponse;
                toProto(message: _4.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _4.QueryModuleAccountByNameResponse): _4.QueryModuleAccountByNameResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _2.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _2.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _3.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.GenesisState;
                fromPartial(object: Partial<_3.GenesisState>): _3.GenesisState;
                fromAmino(object: _3.GenesisStateAmino): _3.GenesisState;
                toAmino(message: _3.GenesisState): _3.GenesisStateAmino;
                fromAminoMsg(object: _3.GenesisStateAminoMsg): _3.GenesisState;
                toAminoMsg(message: _3.GenesisState): _3.GenesisStateAminoMsg;
                fromProtoMsg(message: _3.GenesisStateProtoMsg): _3.GenesisState;
                toProto(message: _3.GenesisState): Uint8Array;
                toProtoMsg(message: _3.GenesisState): _3.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _2.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.BaseAccount;
                fromPartial(object: Partial<_2.BaseAccount>): _2.BaseAccount;
                fromAmino(object: _2.BaseAccountAmino): _2.BaseAccount;
                toAmino(message: _2.BaseAccount): _2.BaseAccountAmino;
                fromAminoMsg(object: _2.BaseAccountAminoMsg): _2.BaseAccount;
                toAminoMsg(message: _2.BaseAccount): _2.BaseAccountAminoMsg;
                fromProtoMsg(message: _2.BaseAccountProtoMsg): _2.BaseAccount;
                toProto(message: _2.BaseAccount): Uint8Array;
                toProtoMsg(message: _2.BaseAccount): _2.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _2.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.ModuleAccount;
                fromPartial(object: Partial<_2.ModuleAccount>): _2.ModuleAccount;
                fromAmino(object: _2.ModuleAccountAmino): _2.ModuleAccount;
                toAmino(message: _2.ModuleAccount): _2.ModuleAccountAmino;
                fromAminoMsg(object: _2.ModuleAccountAminoMsg): _2.ModuleAccount;
                toAminoMsg(message: _2.ModuleAccount): _2.ModuleAccountAminoMsg;
                fromProtoMsg(message: _2.ModuleAccountProtoMsg): _2.ModuleAccount;
                toProto(message: _2.ModuleAccount): Uint8Array;
                toProtoMsg(message: _2.ModuleAccount): _2.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _2.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.Params;
                fromPartial(object: Partial<_2.Params>): _2.Params;
                fromAmino(object: _2.ParamsAmino): _2.Params;
                toAmino(message: _2.Params): _2.ParamsAmino;
                fromAminoMsg(object: _2.ParamsAminoMsg): _2.Params;
                toAminoMsg(message: _2.Params): _2.ParamsAminoMsg;
                fromProtoMsg(message: _2.ParamsProtoMsg): _2.Params;
                toProto(message: _2.Params): Uint8Array;
                toProtoMsg(message: _2.Params): _2.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _156.MsgClientImpl;
            QueryClientImpl: typeof _142.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _8.QueryGrantsRequest): Promise<_8.QueryGrantsResponse>;
                granterGrants(request: _8.QueryGranterGrantsRequest): Promise<_8.QueryGranterGrantsResponse>;
                granteeGrants(request: _8.QueryGranteeGrantsRequest): Promise<_8.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _127.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: _9.MsgGrant;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: _9.MsgExec;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: _9.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _9.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _9.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _9.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: _9.MsgGrant;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: _9.MsgExec;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: _9.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _9.MsgGrant) => _9.MsgGrantAmino;
                    fromAmino: (object: _9.MsgGrantAmino) => _9.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _9.MsgExec) => _9.MsgExecAmino;
                    fromAmino: (object: _9.MsgExecAmino) => _9.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _9.MsgRevoke) => _9.MsgRevokeAmino;
                    fromAmino: (object: _9.MsgRevokeAmino) => _9.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _9.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.MsgGrant;
                fromPartial(object: Partial<_9.MsgGrant>): _9.MsgGrant;
                fromAmino(object: _9.MsgGrantAmino): _9.MsgGrant;
                toAmino(message: _9.MsgGrant): _9.MsgGrantAmino;
                fromAminoMsg(object: _9.MsgGrantAminoMsg): _9.MsgGrant;
                toAminoMsg(message: _9.MsgGrant): _9.MsgGrantAminoMsg;
                fromProtoMsg(message: _9.MsgGrantProtoMsg): _9.MsgGrant;
                toProto(message: _9.MsgGrant): Uint8Array;
                toProtoMsg(message: _9.MsgGrant): _9.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _9.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.MsgExecResponse;
                fromPartial(object: Partial<_9.MsgExecResponse>): _9.MsgExecResponse;
                fromAmino(object: _9.MsgExecResponseAmino): _9.MsgExecResponse;
                toAmino(message: _9.MsgExecResponse): _9.MsgExecResponseAmino;
                fromAminoMsg(object: _9.MsgExecResponseAminoMsg): _9.MsgExecResponse;
                toAminoMsg(message: _9.MsgExecResponse): _9.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _9.MsgExecResponseProtoMsg): _9.MsgExecResponse;
                toProto(message: _9.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _9.MsgExecResponse): _9.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _9.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.MsgExec;
                fromPartial(object: Partial<_9.MsgExec>): _9.MsgExec;
                fromAmino(object: _9.MsgExecAmino): _9.MsgExec;
                toAmino(message: _9.MsgExec): _9.MsgExecAmino;
                fromAminoMsg(object: _9.MsgExecAminoMsg): _9.MsgExec;
                toAminoMsg(message: _9.MsgExec): _9.MsgExecAminoMsg;
                fromProtoMsg(message: _9.MsgExecProtoMsg): _9.MsgExec;
                toProto(message: _9.MsgExec): Uint8Array;
                toProtoMsg(message: _9.MsgExec): _9.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _9.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.MsgGrantResponse;
                fromPartial(_: Partial<_9.MsgGrantResponse>): _9.MsgGrantResponse;
                fromAmino(_: _9.MsgGrantResponseAmino): _9.MsgGrantResponse;
                toAmino(_: _9.MsgGrantResponse): _9.MsgGrantResponseAmino;
                fromAminoMsg(object: _9.MsgGrantResponseAminoMsg): _9.MsgGrantResponse;
                toAminoMsg(message: _9.MsgGrantResponse): _9.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _9.MsgGrantResponseProtoMsg): _9.MsgGrantResponse;
                toProto(message: _9.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _9.MsgGrantResponse): _9.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _9.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.MsgRevoke;
                fromPartial(object: Partial<_9.MsgRevoke>): _9.MsgRevoke;
                fromAmino(object: _9.MsgRevokeAmino): _9.MsgRevoke;
                toAmino(message: _9.MsgRevoke): _9.MsgRevokeAmino;
                fromAminoMsg(object: _9.MsgRevokeAminoMsg): _9.MsgRevoke;
                toAminoMsg(message: _9.MsgRevoke): _9.MsgRevokeAminoMsg;
                fromProtoMsg(message: _9.MsgRevokeProtoMsg): _9.MsgRevoke;
                toProto(message: _9.MsgRevoke): Uint8Array;
                toProtoMsg(message: _9.MsgRevoke): _9.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _9.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.MsgRevokeResponse;
                fromPartial(_: Partial<_9.MsgRevokeResponse>): _9.MsgRevokeResponse;
                fromAmino(_: _9.MsgRevokeResponseAmino): _9.MsgRevokeResponse;
                toAmino(_: _9.MsgRevokeResponse): _9.MsgRevokeResponseAmino;
                fromAminoMsg(object: _9.MsgRevokeResponseAminoMsg): _9.MsgRevokeResponse;
                toAminoMsg(message: _9.MsgRevokeResponse): _9.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _9.MsgRevokeResponseProtoMsg): _9.MsgRevokeResponse;
                toProto(message: _9.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _9.MsgRevokeResponse): _9.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _8.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryGrantsRequest;
                fromPartial(object: Partial<_8.QueryGrantsRequest>): _8.QueryGrantsRequest;
                fromAmino(object: _8.QueryGrantsRequestAmino): _8.QueryGrantsRequest;
                toAmino(message: _8.QueryGrantsRequest): _8.QueryGrantsRequestAmino;
                fromAminoMsg(object: _8.QueryGrantsRequestAminoMsg): _8.QueryGrantsRequest;
                toAminoMsg(message: _8.QueryGrantsRequest): _8.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _8.QueryGrantsRequestProtoMsg): _8.QueryGrantsRequest;
                toProto(message: _8.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _8.QueryGrantsRequest): _8.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _8.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryGrantsResponse;
                fromPartial(object: Partial<_8.QueryGrantsResponse>): _8.QueryGrantsResponse;
                fromAmino(object: _8.QueryGrantsResponseAmino): _8.QueryGrantsResponse;
                toAmino(message: _8.QueryGrantsResponse): _8.QueryGrantsResponseAmino;
                fromAminoMsg(object: _8.QueryGrantsResponseAminoMsg): _8.QueryGrantsResponse;
                toAminoMsg(message: _8.QueryGrantsResponse): _8.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _8.QueryGrantsResponseProtoMsg): _8.QueryGrantsResponse;
                toProto(message: _8.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _8.QueryGrantsResponse): _8.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _8.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_8.QueryGranterGrantsRequest>): _8.QueryGranterGrantsRequest;
                fromAmino(object: _8.QueryGranterGrantsRequestAmino): _8.QueryGranterGrantsRequest;
                toAmino(message: _8.QueryGranterGrantsRequest): _8.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _8.QueryGranterGrantsRequestAminoMsg): _8.QueryGranterGrantsRequest;
                toAminoMsg(message: _8.QueryGranterGrantsRequest): _8.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _8.QueryGranterGrantsRequestProtoMsg): _8.QueryGranterGrantsRequest;
                toProto(message: _8.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _8.QueryGranterGrantsRequest): _8.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _8.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_8.QueryGranterGrantsResponse>): _8.QueryGranterGrantsResponse;
                fromAmino(object: _8.QueryGranterGrantsResponseAmino): _8.QueryGranterGrantsResponse;
                toAmino(message: _8.QueryGranterGrantsResponse): _8.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _8.QueryGranterGrantsResponseAminoMsg): _8.QueryGranterGrantsResponse;
                toAminoMsg(message: _8.QueryGranterGrantsResponse): _8.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _8.QueryGranterGrantsResponseProtoMsg): _8.QueryGranterGrantsResponse;
                toProto(message: _8.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _8.QueryGranterGrantsResponse): _8.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _8.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_8.QueryGranteeGrantsRequest>): _8.QueryGranteeGrantsRequest;
                fromAmino(object: _8.QueryGranteeGrantsRequestAmino): _8.QueryGranteeGrantsRequest;
                toAmino(message: _8.QueryGranteeGrantsRequest): _8.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _8.QueryGranteeGrantsRequestAminoMsg): _8.QueryGranteeGrantsRequest;
                toAminoMsg(message: _8.QueryGranteeGrantsRequest): _8.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _8.QueryGranteeGrantsRequestProtoMsg): _8.QueryGranteeGrantsRequest;
                toProto(message: _8.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _8.QueryGranteeGrantsRequest): _8.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _8.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_8.QueryGranteeGrantsResponse>): _8.QueryGranteeGrantsResponse;
                fromAmino(object: _8.QueryGranteeGrantsResponseAmino): _8.QueryGranteeGrantsResponse;
                toAmino(message: _8.QueryGranteeGrantsResponse): _8.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _8.QueryGranteeGrantsResponseAminoMsg): _8.QueryGranteeGrantsResponse;
                toAminoMsg(message: _8.QueryGranteeGrantsResponse): _8.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _8.QueryGranteeGrantsResponseProtoMsg): _8.QueryGranteeGrantsResponse;
                toProto(message: _8.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _8.QueryGranteeGrantsResponse): _8.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _7.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.GenesisState;
                fromPartial(object: Partial<_7.GenesisState>): _7.GenesisState;
                fromAmino(object: _7.GenesisStateAmino): _7.GenesisState;
                toAmino(message: _7.GenesisState): _7.GenesisStateAmino;
                fromAminoMsg(object: _7.GenesisStateAminoMsg): _7.GenesisState;
                toAminoMsg(message: _7.GenesisState): _7.GenesisStateAminoMsg;
                fromProtoMsg(message: _7.GenesisStateProtoMsg): _7.GenesisState;
                toProto(message: _7.GenesisState): Uint8Array;
                toProtoMsg(message: _7.GenesisState): _7.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _6.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventGrant;
                fromPartial(object: Partial<_6.EventGrant>): _6.EventGrant;
                fromAmino(object: _6.EventGrantAmino): _6.EventGrant;
                toAmino(message: _6.EventGrant): _6.EventGrantAmino;
                fromAminoMsg(object: _6.EventGrantAminoMsg): _6.EventGrant;
                toAminoMsg(message: _6.EventGrant): _6.EventGrantAminoMsg;
                fromProtoMsg(message: _6.EventGrantProtoMsg): _6.EventGrant;
                toProto(message: _6.EventGrant): Uint8Array;
                toProtoMsg(message: _6.EventGrant): _6.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _6.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventRevoke;
                fromPartial(object: Partial<_6.EventRevoke>): _6.EventRevoke;
                fromAmino(object: _6.EventRevokeAmino): _6.EventRevoke;
                toAmino(message: _6.EventRevoke): _6.EventRevokeAmino;
                fromAminoMsg(object: _6.EventRevokeAminoMsg): _6.EventRevoke;
                toAminoMsg(message: _6.EventRevoke): _6.EventRevokeAminoMsg;
                fromProtoMsg(message: _6.EventRevokeProtoMsg): _6.EventRevoke;
                toProto(message: _6.EventRevoke): Uint8Array;
                toProtoMsg(message: _6.EventRevoke): _6.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _5.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.GenericAuthorization;
                fromPartial(object: Partial<_5.GenericAuthorization>): _5.GenericAuthorization;
                fromAmino(object: _5.GenericAuthorizationAmino): _5.GenericAuthorization;
                toAmino(message: _5.GenericAuthorization): _5.GenericAuthorizationAmino;
                fromAminoMsg(object: _5.GenericAuthorizationAminoMsg): _5.GenericAuthorization;
                toAminoMsg(message: _5.GenericAuthorization): _5.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _5.GenericAuthorizationProtoMsg): _5.GenericAuthorization;
                toProto(message: _5.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _5.GenericAuthorization): _5.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _5.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.Grant;
                fromPartial(object: Partial<_5.Grant>): _5.Grant;
                fromAmino(object: _5.GrantAmino): _5.Grant;
                toAmino(message: _5.Grant): _5.GrantAmino;
                fromAminoMsg(object: _5.GrantAminoMsg): _5.Grant;
                toAminoMsg(message: _5.Grant): _5.GrantAminoMsg;
                fromProtoMsg(message: _5.GrantProtoMsg): _5.Grant;
                toProto(message: _5.Grant): Uint8Array;
                toProtoMsg(message: _5.Grant): _5.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _5.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.GrantAuthorization;
                fromPartial(object: Partial<_5.GrantAuthorization>): _5.GrantAuthorization;
                fromAmino(object: _5.GrantAuthorizationAmino): _5.GrantAuthorization;
                toAmino(message: _5.GrantAuthorization): _5.GrantAuthorizationAmino;
                fromAminoMsg(object: _5.GrantAuthorizationAminoMsg): _5.GrantAuthorization;
                toAminoMsg(message: _5.GrantAuthorization): _5.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _5.GrantAuthorizationProtoMsg): _5.GrantAuthorization;
                toProto(message: _5.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _5.GrantAuthorization): _5.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _10.SendAuthorization | _60.StakeAuthorization | _5.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _157.MsgClientImpl;
            QueryClientImpl: typeof _143.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _13.QueryBalanceRequest): Promise<_13.QueryBalanceResponse>;
                allBalances(request: _13.QueryAllBalancesRequest): Promise<_13.QueryAllBalancesResponse>;
                spendableBalances(request: _13.QuerySpendableBalancesRequest): Promise<_13.QuerySpendableBalancesResponse>;
                totalSupply(request?: _13.QueryTotalSupplyRequest): Promise<_13.QueryTotalSupplyResponse>;
                supplyOf(request: _13.QuerySupplyOfRequest): Promise<_13.QuerySupplyOfResponse>;
                params(request?: _13.QueryParamsRequest): Promise<_13.QueryParamsResponse>;
                denomMetadata(request: _13.QueryDenomMetadataRequest): Promise<_13.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _13.QueryDenomsMetadataRequest): Promise<_13.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _128.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _14.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _14.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _14.MsgSend): {
                        typeUrl: string;
                        value: _14.MsgSend;
                    };
                    multiSend(value: _14.MsgMultiSend): {
                        typeUrl: string;
                        value: _14.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _14.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _14.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _14.MsgSend): {
                        typeUrl: string;
                        value: _14.MsgSend;
                    };
                    multiSend(value: _14.MsgMultiSend): {
                        typeUrl: string;
                        value: _14.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _14.MsgSend) => _14.MsgSendAmino;
                    fromAmino: (object: _14.MsgSendAmino) => _14.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _14.MsgMultiSend) => _14.MsgMultiSendAmino;
                    fromAmino: (object: _14.MsgMultiSendAmino) => _14.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _14.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.MsgSend;
                fromPartial(object: Partial<_14.MsgSend>): _14.MsgSend;
                fromAmino(object: _14.MsgSendAmino): _14.MsgSend;
                toAmino(message: _14.MsgSend): _14.MsgSendAmino;
                fromAminoMsg(object: _14.MsgSendAminoMsg): _14.MsgSend;
                toAminoMsg(message: _14.MsgSend): _14.MsgSendAminoMsg;
                fromProtoMsg(message: _14.MsgSendProtoMsg): _14.MsgSend;
                toProto(message: _14.MsgSend): Uint8Array;
                toProtoMsg(message: _14.MsgSend): _14.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _14.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _14.MsgSendResponse;
                fromPartial(_: Partial<_14.MsgSendResponse>): _14.MsgSendResponse;
                fromAmino(_: _14.MsgSendResponseAmino): _14.MsgSendResponse;
                toAmino(_: _14.MsgSendResponse): _14.MsgSendResponseAmino;
                fromAminoMsg(object: _14.MsgSendResponseAminoMsg): _14.MsgSendResponse;
                toAminoMsg(message: _14.MsgSendResponse): _14.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _14.MsgSendResponseProtoMsg): _14.MsgSendResponse;
                toProto(message: _14.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _14.MsgSendResponse): _14.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _14.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.MsgMultiSend;
                fromPartial(object: Partial<_14.MsgMultiSend>): _14.MsgMultiSend;
                fromAmino(object: _14.MsgMultiSendAmino): _14.MsgMultiSend;
                toAmino(message: _14.MsgMultiSend): _14.MsgMultiSendAmino;
                fromAminoMsg(object: _14.MsgMultiSendAminoMsg): _14.MsgMultiSend;
                toAminoMsg(message: _14.MsgMultiSend): _14.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _14.MsgMultiSendProtoMsg): _14.MsgMultiSend;
                toProto(message: _14.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _14.MsgMultiSend): _14.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _14.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _14.MsgMultiSendResponse;
                fromPartial(_: Partial<_14.MsgMultiSendResponse>): _14.MsgMultiSendResponse;
                fromAmino(_: _14.MsgMultiSendResponseAmino): _14.MsgMultiSendResponse;
                toAmino(_: _14.MsgMultiSendResponse): _14.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _14.MsgMultiSendResponseAminoMsg): _14.MsgMultiSendResponse;
                toAminoMsg(message: _14.MsgMultiSendResponse): _14.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _14.MsgMultiSendResponseProtoMsg): _14.MsgMultiSendResponse;
                toProto(message: _14.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _14.MsgMultiSendResponse): _14.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _13.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryBalanceRequest;
                fromPartial(object: Partial<_13.QueryBalanceRequest>): _13.QueryBalanceRequest;
                fromAmino(object: _13.QueryBalanceRequestAmino): _13.QueryBalanceRequest;
                toAmino(message: _13.QueryBalanceRequest): _13.QueryBalanceRequestAmino;
                fromAminoMsg(object: _13.QueryBalanceRequestAminoMsg): _13.QueryBalanceRequest;
                toAminoMsg(message: _13.QueryBalanceRequest): _13.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _13.QueryBalanceRequestProtoMsg): _13.QueryBalanceRequest;
                toProto(message: _13.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _13.QueryBalanceRequest): _13.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _13.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryBalanceResponse;
                fromPartial(object: Partial<_13.QueryBalanceResponse>): _13.QueryBalanceResponse;
                fromAmino(object: _13.QueryBalanceResponseAmino): _13.QueryBalanceResponse;
                toAmino(message: _13.QueryBalanceResponse): _13.QueryBalanceResponseAmino;
                fromAminoMsg(object: _13.QueryBalanceResponseAminoMsg): _13.QueryBalanceResponse;
                toAminoMsg(message: _13.QueryBalanceResponse): _13.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _13.QueryBalanceResponseProtoMsg): _13.QueryBalanceResponse;
                toProto(message: _13.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _13.QueryBalanceResponse): _13.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _13.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryAllBalancesRequest;
                fromPartial(object: Partial<_13.QueryAllBalancesRequest>): _13.QueryAllBalancesRequest;
                fromAmino(object: _13.QueryAllBalancesRequestAmino): _13.QueryAllBalancesRequest;
                toAmino(message: _13.QueryAllBalancesRequest): _13.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _13.QueryAllBalancesRequestAminoMsg): _13.QueryAllBalancesRequest;
                toAminoMsg(message: _13.QueryAllBalancesRequest): _13.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _13.QueryAllBalancesRequestProtoMsg): _13.QueryAllBalancesRequest;
                toProto(message: _13.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _13.QueryAllBalancesRequest): _13.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _13.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryAllBalancesResponse;
                fromPartial(object: Partial<_13.QueryAllBalancesResponse>): _13.QueryAllBalancesResponse;
                fromAmino(object: _13.QueryAllBalancesResponseAmino): _13.QueryAllBalancesResponse;
                toAmino(message: _13.QueryAllBalancesResponse): _13.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _13.QueryAllBalancesResponseAminoMsg): _13.QueryAllBalancesResponse;
                toAminoMsg(message: _13.QueryAllBalancesResponse): _13.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _13.QueryAllBalancesResponseProtoMsg): _13.QueryAllBalancesResponse;
                toProto(message: _13.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _13.QueryAllBalancesResponse): _13.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _13.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_13.QuerySpendableBalancesRequest>): _13.QuerySpendableBalancesRequest;
                fromAmino(object: _13.QuerySpendableBalancesRequestAmino): _13.QuerySpendableBalancesRequest;
                toAmino(message: _13.QuerySpendableBalancesRequest): _13.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _13.QuerySpendableBalancesRequestAminoMsg): _13.QuerySpendableBalancesRequest;
                toAminoMsg(message: _13.QuerySpendableBalancesRequest): _13.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _13.QuerySpendableBalancesRequestProtoMsg): _13.QuerySpendableBalancesRequest;
                toProto(message: _13.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _13.QuerySpendableBalancesRequest): _13.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _13.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_13.QuerySpendableBalancesResponse>): _13.QuerySpendableBalancesResponse;
                fromAmino(object: _13.QuerySpendableBalancesResponseAmino): _13.QuerySpendableBalancesResponse;
                toAmino(message: _13.QuerySpendableBalancesResponse): _13.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _13.QuerySpendableBalancesResponseAminoMsg): _13.QuerySpendableBalancesResponse;
                toAminoMsg(message: _13.QuerySpendableBalancesResponse): _13.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _13.QuerySpendableBalancesResponseProtoMsg): _13.QuerySpendableBalancesResponse;
                toProto(message: _13.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _13.QuerySpendableBalancesResponse): _13.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _13.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_13.QueryTotalSupplyRequest>): _13.QueryTotalSupplyRequest;
                fromAmino(object: _13.QueryTotalSupplyRequestAmino): _13.QueryTotalSupplyRequest;
                toAmino(message: _13.QueryTotalSupplyRequest): _13.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _13.QueryTotalSupplyRequestAminoMsg): _13.QueryTotalSupplyRequest;
                toAminoMsg(message: _13.QueryTotalSupplyRequest): _13.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _13.QueryTotalSupplyRequestProtoMsg): _13.QueryTotalSupplyRequest;
                toProto(message: _13.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _13.QueryTotalSupplyRequest): _13.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _13.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_13.QueryTotalSupplyResponse>): _13.QueryTotalSupplyResponse;
                fromAmino(object: _13.QueryTotalSupplyResponseAmino): _13.QueryTotalSupplyResponse;
                toAmino(message: _13.QueryTotalSupplyResponse): _13.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _13.QueryTotalSupplyResponseAminoMsg): _13.QueryTotalSupplyResponse;
                toAminoMsg(message: _13.QueryTotalSupplyResponse): _13.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _13.QueryTotalSupplyResponseProtoMsg): _13.QueryTotalSupplyResponse;
                toProto(message: _13.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _13.QueryTotalSupplyResponse): _13.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _13.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QuerySupplyOfRequest;
                fromPartial(object: Partial<_13.QuerySupplyOfRequest>): _13.QuerySupplyOfRequest;
                fromAmino(object: _13.QuerySupplyOfRequestAmino): _13.QuerySupplyOfRequest;
                toAmino(message: _13.QuerySupplyOfRequest): _13.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _13.QuerySupplyOfRequestAminoMsg): _13.QuerySupplyOfRequest;
                toAminoMsg(message: _13.QuerySupplyOfRequest): _13.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _13.QuerySupplyOfRequestProtoMsg): _13.QuerySupplyOfRequest;
                toProto(message: _13.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _13.QuerySupplyOfRequest): _13.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _13.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QuerySupplyOfResponse;
                fromPartial(object: Partial<_13.QuerySupplyOfResponse>): _13.QuerySupplyOfResponse;
                fromAmino(object: _13.QuerySupplyOfResponseAmino): _13.QuerySupplyOfResponse;
                toAmino(message: _13.QuerySupplyOfResponse): _13.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _13.QuerySupplyOfResponseAminoMsg): _13.QuerySupplyOfResponse;
                toAminoMsg(message: _13.QuerySupplyOfResponse): _13.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _13.QuerySupplyOfResponseProtoMsg): _13.QuerySupplyOfResponse;
                toProto(message: _13.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _13.QuerySupplyOfResponse): _13.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _13.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.QueryParamsRequest;
                fromPartial(_: Partial<_13.QueryParamsRequest>): _13.QueryParamsRequest;
                fromAmino(_: _13.QueryParamsRequestAmino): _13.QueryParamsRequest;
                toAmino(_: _13.QueryParamsRequest): _13.QueryParamsRequestAmino;
                fromAminoMsg(object: _13.QueryParamsRequestAminoMsg): _13.QueryParamsRequest;
                toAminoMsg(message: _13.QueryParamsRequest): _13.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _13.QueryParamsRequestProtoMsg): _13.QueryParamsRequest;
                toProto(message: _13.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _13.QueryParamsRequest): _13.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _13.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryParamsResponse;
                fromPartial(object: Partial<_13.QueryParamsResponse>): _13.QueryParamsResponse;
                fromAmino(object: _13.QueryParamsResponseAmino): _13.QueryParamsResponse;
                toAmino(message: _13.QueryParamsResponse): _13.QueryParamsResponseAmino;
                fromAminoMsg(object: _13.QueryParamsResponseAminoMsg): _13.QueryParamsResponse;
                toAminoMsg(message: _13.QueryParamsResponse): _13.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _13.QueryParamsResponseProtoMsg): _13.QueryParamsResponse;
                toProto(message: _13.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _13.QueryParamsResponse): _13.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _13.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_13.QueryDenomsMetadataRequest>): _13.QueryDenomsMetadataRequest;
                fromAmino(object: _13.QueryDenomsMetadataRequestAmino): _13.QueryDenomsMetadataRequest;
                toAmino(message: _13.QueryDenomsMetadataRequest): _13.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _13.QueryDenomsMetadataRequestAminoMsg): _13.QueryDenomsMetadataRequest;
                toAminoMsg(message: _13.QueryDenomsMetadataRequest): _13.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _13.QueryDenomsMetadataRequestProtoMsg): _13.QueryDenomsMetadataRequest;
                toProto(message: _13.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _13.QueryDenomsMetadataRequest): _13.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _13.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_13.QueryDenomsMetadataResponse>): _13.QueryDenomsMetadataResponse;
                fromAmino(object: _13.QueryDenomsMetadataResponseAmino): _13.QueryDenomsMetadataResponse;
                toAmino(message: _13.QueryDenomsMetadataResponse): _13.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _13.QueryDenomsMetadataResponseAminoMsg): _13.QueryDenomsMetadataResponse;
                toAminoMsg(message: _13.QueryDenomsMetadataResponse): _13.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _13.QueryDenomsMetadataResponseProtoMsg): _13.QueryDenomsMetadataResponse;
                toProto(message: _13.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _13.QueryDenomsMetadataResponse): _13.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _13.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_13.QueryDenomMetadataRequest>): _13.QueryDenomMetadataRequest;
                fromAmino(object: _13.QueryDenomMetadataRequestAmino): _13.QueryDenomMetadataRequest;
                toAmino(message: _13.QueryDenomMetadataRequest): _13.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _13.QueryDenomMetadataRequestAminoMsg): _13.QueryDenomMetadataRequest;
                toAminoMsg(message: _13.QueryDenomMetadataRequest): _13.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _13.QueryDenomMetadataRequestProtoMsg): _13.QueryDenomMetadataRequest;
                toProto(message: _13.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _13.QueryDenomMetadataRequest): _13.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _13.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_13.QueryDenomMetadataResponse>): _13.QueryDenomMetadataResponse;
                fromAmino(object: _13.QueryDenomMetadataResponseAmino): _13.QueryDenomMetadataResponse;
                toAmino(message: _13.QueryDenomMetadataResponse): _13.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _13.QueryDenomMetadataResponseAminoMsg): _13.QueryDenomMetadataResponse;
                toAminoMsg(message: _13.QueryDenomMetadataResponse): _13.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _13.QueryDenomMetadataResponseProtoMsg): _13.QueryDenomMetadataResponse;
                toProto(message: _13.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _13.QueryDenomMetadataResponse): _13.QueryDenomMetadataResponseProtoMsg;
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
            Balance: {
                typeUrl: string;
                encode(message: _12.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.Balance;
                fromPartial(object: Partial<_12.Balance>): _12.Balance;
                fromAmino(object: _12.BalanceAmino): _12.Balance;
                toAmino(message: _12.Balance): _12.BalanceAmino;
                fromAminoMsg(object: _12.BalanceAminoMsg): _12.Balance;
                toAminoMsg(message: _12.Balance): _12.BalanceAminoMsg;
                fromProtoMsg(message: _12.BalanceProtoMsg): _12.Balance;
                toProto(message: _12.Balance): Uint8Array;
                toProtoMsg(message: _12.Balance): _12.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _11.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Params;
                fromPartial(object: Partial<_11.Params>): _11.Params;
                fromAmino(object: _11.ParamsAmino): _11.Params;
                toAmino(message: _11.Params): _11.ParamsAmino;
                fromAminoMsg(object: _11.ParamsAminoMsg): _11.Params;
                toAminoMsg(message: _11.Params): _11.ParamsAminoMsg;
                fromProtoMsg(message: _11.ParamsProtoMsg): _11.Params;
                toProto(message: _11.Params): Uint8Array;
                toProtoMsg(message: _11.Params): _11.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _11.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.SendEnabled;
                fromPartial(object: Partial<_11.SendEnabled>): _11.SendEnabled;
                fromAmino(object: _11.SendEnabledAmino): _11.SendEnabled;
                toAmino(message: _11.SendEnabled): _11.SendEnabledAmino;
                fromAminoMsg(object: _11.SendEnabledAminoMsg): _11.SendEnabled;
                toAminoMsg(message: _11.SendEnabled): _11.SendEnabledAminoMsg;
                fromProtoMsg(message: _11.SendEnabledProtoMsg): _11.SendEnabled;
                toProto(message: _11.SendEnabled): Uint8Array;
                toProtoMsg(message: _11.SendEnabled): _11.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _11.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Input;
                fromPartial(object: Partial<_11.Input>): _11.Input;
                fromAmino(object: _11.InputAmino): _11.Input;
                toAmino(message: _11.Input): _11.InputAmino;
                fromAminoMsg(object: _11.InputAminoMsg): _11.Input;
                toAminoMsg(message: _11.Input): _11.InputAminoMsg;
                fromProtoMsg(message: _11.InputProtoMsg): _11.Input;
                toProto(message: _11.Input): Uint8Array;
                toProtoMsg(message: _11.Input): _11.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _11.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Output;
                fromPartial(object: Partial<_11.Output>): _11.Output;
                fromAmino(object: _11.OutputAmino): _11.Output;
                toAmino(message: _11.Output): _11.OutputAmino;
                fromAminoMsg(object: _11.OutputAminoMsg): _11.Output;
                toAminoMsg(message: _11.Output): _11.OutputAminoMsg;
                fromProtoMsg(message: _11.OutputProtoMsg): _11.Output;
                toProto(message: _11.Output): Uint8Array;
                toProtoMsg(message: _11.Output): _11.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _11.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Supply;
                fromPartial(object: Partial<_11.Supply>): _11.Supply;
                fromAmino(object: _11.SupplyAmino): _11.Supply;
                toAmino(message: _11.Supply): _11.SupplyAmino;
                fromAminoMsg(object: _11.SupplyAminoMsg): _11.Supply;
                toAminoMsg(message: _11.Supply): _11.SupplyAminoMsg;
                fromProtoMsg(message: _11.SupplyProtoMsg): _11.Supply;
                toProto(message: _11.Supply): Uint8Array;
                toProtoMsg(message: _11.Supply): _11.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _11.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.DenomUnit;
                fromPartial(object: Partial<_11.DenomUnit>): _11.DenomUnit;
                fromAmino(object: _11.DenomUnitAmino): _11.DenomUnit;
                toAmino(message: _11.DenomUnit): _11.DenomUnitAmino;
                fromAminoMsg(object: _11.DenomUnitAminoMsg): _11.DenomUnit;
                toAminoMsg(message: _11.DenomUnit): _11.DenomUnitAminoMsg;
                fromProtoMsg(message: _11.DenomUnitProtoMsg): _11.DenomUnit;
                toProto(message: _11.DenomUnit): Uint8Array;
                toProtoMsg(message: _11.DenomUnit): _11.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _11.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Metadata;
                fromPartial(object: Partial<_11.Metadata>): _11.Metadata;
                fromAmino(object: _11.MetadataAmino): _11.Metadata;
                toAmino(message: _11.Metadata): _11.MetadataAmino;
                fromAminoMsg(object: _11.MetadataAminoMsg): _11.Metadata;
                toAminoMsg(message: _11.Metadata): _11.MetadataAminoMsg;
                fromProtoMsg(message: _11.MetadataProtoMsg): _11.Metadata;
                toProto(message: _11.Metadata): Uint8Array;
                toProtoMsg(message: _11.Metadata): _11.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _10.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.SendAuthorization;
                fromPartial(object: Partial<_10.SendAuthorization>): _10.SendAuthorization;
                fromAmino(object: _10.SendAuthorizationAmino): _10.SendAuthorization;
                toAmino(message: _10.SendAuthorization): _10.SendAuthorizationAmino;
                fromAminoMsg(object: _10.SendAuthorizationAminoMsg): _10.SendAuthorization;
                toAminoMsg(message: _10.SendAuthorization): _10.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _10.SendAuthorizationProtoMsg): _10.SendAuthorization;
                toProto(message: _10.SendAuthorization): Uint8Array;
                toProtoMsg(message: _10.SendAuthorization): _10.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _15.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.TxResponse;
                    fromPartial(object: Partial<_15.TxResponse>): _15.TxResponse;
                    fromAmino(object: _15.TxResponseAmino): _15.TxResponse;
                    toAmino(message: _15.TxResponse): _15.TxResponseAmino;
                    fromAminoMsg(object: _15.TxResponseAminoMsg): _15.TxResponse;
                    toAminoMsg(message: _15.TxResponse): _15.TxResponseAminoMsg;
                    fromProtoMsg(message: _15.TxResponseProtoMsg): _15.TxResponse;
                    toProto(message: _15.TxResponse): Uint8Array;
                    toProtoMsg(message: _15.TxResponse): _15.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _15.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.ABCIMessageLog;
                    fromPartial(object: Partial<_15.ABCIMessageLog>): _15.ABCIMessageLog;
                    fromAmino(object: _15.ABCIMessageLogAmino): _15.ABCIMessageLog;
                    toAmino(message: _15.ABCIMessageLog): _15.ABCIMessageLogAmino;
                    fromAminoMsg(object: _15.ABCIMessageLogAminoMsg): _15.ABCIMessageLog;
                    toAminoMsg(message: _15.ABCIMessageLog): _15.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _15.ABCIMessageLogProtoMsg): _15.ABCIMessageLog;
                    toProto(message: _15.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _15.ABCIMessageLog): _15.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _15.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.StringEvent;
                    fromPartial(object: Partial<_15.StringEvent>): _15.StringEvent;
                    fromAmino(object: _15.StringEventAmino): _15.StringEvent;
                    toAmino(message: _15.StringEvent): _15.StringEventAmino;
                    fromAminoMsg(object: _15.StringEventAminoMsg): _15.StringEvent;
                    toAminoMsg(message: _15.StringEvent): _15.StringEventAminoMsg;
                    fromProtoMsg(message: _15.StringEventProtoMsg): _15.StringEvent;
                    toProto(message: _15.StringEvent): Uint8Array;
                    toProtoMsg(message: _15.StringEvent): _15.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _15.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.Attribute;
                    fromPartial(object: Partial<_15.Attribute>): _15.Attribute;
                    fromAmino(object: _15.AttributeAmino): _15.Attribute;
                    toAmino(message: _15.Attribute): _15.AttributeAmino;
                    fromAminoMsg(object: _15.AttributeAminoMsg): _15.Attribute;
                    toAminoMsg(message: _15.Attribute): _15.AttributeAminoMsg;
                    fromProtoMsg(message: _15.AttributeProtoMsg): _15.Attribute;
                    toProto(message: _15.Attribute): Uint8Array;
                    toProtoMsg(message: _15.Attribute): _15.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _15.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.GasInfo;
                    fromPartial(object: Partial<_15.GasInfo>): _15.GasInfo;
                    fromAmino(object: _15.GasInfoAmino): _15.GasInfo;
                    toAmino(message: _15.GasInfo): _15.GasInfoAmino;
                    fromAminoMsg(object: _15.GasInfoAminoMsg): _15.GasInfo;
                    toAminoMsg(message: _15.GasInfo): _15.GasInfoAminoMsg;
                    fromProtoMsg(message: _15.GasInfoProtoMsg): _15.GasInfo;
                    toProto(message: _15.GasInfo): Uint8Array;
                    toProtoMsg(message: _15.GasInfo): _15.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _15.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.Result;
                    fromPartial(object: Partial<_15.Result>): _15.Result;
                    fromAmino(object: _15.ResultAmino): _15.Result;
                    toAmino(message: _15.Result): _15.ResultAmino;
                    fromAminoMsg(object: _15.ResultAminoMsg): _15.Result;
                    toAminoMsg(message: _15.Result): _15.ResultAminoMsg;
                    fromProtoMsg(message: _15.ResultProtoMsg): _15.Result;
                    toProto(message: _15.Result): Uint8Array;
                    toProtoMsg(message: _15.Result): _15.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _15.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.SimulationResponse;
                    fromPartial(object: Partial<_15.SimulationResponse>): _15.SimulationResponse;
                    fromAmino(object: _15.SimulationResponseAmino): _15.SimulationResponse;
                    toAmino(message: _15.SimulationResponse): _15.SimulationResponseAmino;
                    fromAminoMsg(object: _15.SimulationResponseAminoMsg): _15.SimulationResponse;
                    toAminoMsg(message: _15.SimulationResponse): _15.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _15.SimulationResponseProtoMsg): _15.SimulationResponse;
                    toProto(message: _15.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _15.SimulationResponse): _15.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _15.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.MsgData;
                    fromPartial(object: Partial<_15.MsgData>): _15.MsgData;
                    fromAmino(object: _15.MsgDataAmino): _15.MsgData;
                    toAmino(message: _15.MsgData): _15.MsgDataAmino;
                    fromAminoMsg(object: _15.MsgDataAminoMsg): _15.MsgData;
                    toAminoMsg(message: _15.MsgData): _15.MsgDataAminoMsg;
                    fromProtoMsg(message: _15.MsgDataProtoMsg): _15.MsgData;
                    toProto(message: _15.MsgData): Uint8Array;
                    toProtoMsg(message: _15.MsgData): _15.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _15.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.TxMsgData;
                    fromPartial(object: Partial<_15.TxMsgData>): _15.TxMsgData;
                    fromAmino(object: _15.TxMsgDataAmino): _15.TxMsgData;
                    toAmino(message: _15.TxMsgData): _15.TxMsgDataAmino;
                    fromAminoMsg(object: _15.TxMsgDataAminoMsg): _15.TxMsgData;
                    toAminoMsg(message: _15.TxMsgData): _15.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _15.TxMsgDataProtoMsg): _15.TxMsgData;
                    toProto(message: _15.TxMsgData): Uint8Array;
                    toProtoMsg(message: _15.TxMsgData): _15.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _15.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.SearchTxsResult;
                    fromPartial(object: Partial<_15.SearchTxsResult>): _15.SearchTxsResult;
                    fromAmino(object: _15.SearchTxsResultAmino): _15.SearchTxsResult;
                    toAmino(message: _15.SearchTxsResult): _15.SearchTxsResultAmino;
                    fromAminoMsg(object: _15.SearchTxsResultAminoMsg): _15.SearchTxsResult;
                    toAminoMsg(message: _15.SearchTxsResult): _15.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _15.SearchTxsResultProtoMsg): _15.SearchTxsResult;
                    toProto(message: _15.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _15.SearchTxsResult): _15.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _16.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _16.Pairs;
                    fromPartial(object: Partial<_16.Pairs>): _16.Pairs;
                    fromAmino(object: _16.PairsAmino): _16.Pairs;
                    toAmino(message: _16.Pairs): _16.PairsAmino;
                    fromAminoMsg(object: _16.PairsAminoMsg): _16.Pairs;
                    toAminoMsg(message: _16.Pairs): _16.PairsAminoMsg;
                    fromProtoMsg(message: _16.PairsProtoMsg): _16.Pairs;
                    toProto(message: _16.Pairs): Uint8Array;
                    toProtoMsg(message: _16.Pairs): _16.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _16.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _16.Pair;
                    fromPartial(object: Partial<_16.Pair>): _16.Pair;
                    fromAmino(object: _16.PairAmino): _16.Pair;
                    toAmino(message: _16.Pair): _16.PairAmino;
                    fromAminoMsg(object: _16.PairAminoMsg): _16.Pair;
                    toAminoMsg(message: _16.Pair): _16.PairAminoMsg;
                    fromProtoMsg(message: _16.PairProtoMsg): _16.Pair;
                    toProto(message: _16.Pair): Uint8Array;
                    toProtoMsg(message: _16.Pair): _16.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _144.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _17.ConfigRequest): Promise<_17.ConfigResponse>;
                };
                LCDQueryClient: typeof _129.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _17.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _17.ConfigRequest;
                    fromPartial(_: Partial<_17.ConfigRequest>): _17.ConfigRequest;
                    fromAmino(_: _17.ConfigRequestAmino): _17.ConfigRequest;
                    toAmino(_: _17.ConfigRequest): _17.ConfigRequestAmino;
                    fromAminoMsg(object: _17.ConfigRequestAminoMsg): _17.ConfigRequest;
                    toAminoMsg(message: _17.ConfigRequest): _17.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _17.ConfigRequestProtoMsg): _17.ConfigRequest;
                    toProto(message: _17.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _17.ConfigRequest): _17.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _17.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.ConfigResponse;
                    fromPartial(object: Partial<_17.ConfigResponse>): _17.ConfigResponse;
                    fromAmino(object: _17.ConfigResponseAmino): _17.ConfigResponse;
                    toAmino(message: _17.ConfigResponse): _17.ConfigResponseAmino;
                    fromAminoMsg(object: _17.ConfigResponseAminoMsg): _17.ConfigResponse;
                    toAminoMsg(message: _17.ConfigResponse): _17.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _17.ConfigResponseProtoMsg): _17.ConfigResponse;
                    toProto(message: _17.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _17.ConfigResponse): _17.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _18.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.PageRequest;
                    fromPartial(object: Partial<_18.PageRequest>): _18.PageRequest;
                    fromAmino(object: _18.PageRequestAmino): _18.PageRequest;
                    toAmino(message: _18.PageRequest): _18.PageRequestAmino;
                    fromAminoMsg(object: _18.PageRequestAminoMsg): _18.PageRequest;
                    toAminoMsg(message: _18.PageRequest): _18.PageRequestAminoMsg;
                    fromProtoMsg(message: _18.PageRequestProtoMsg): _18.PageRequest;
                    toProto(message: _18.PageRequest): Uint8Array;
                    toProtoMsg(message: _18.PageRequest): _18.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _18.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.PageResponse;
                    fromPartial(object: Partial<_18.PageResponse>): _18.PageResponse;
                    fromAmino(object: _18.PageResponseAmino): _18.PageResponse;
                    toAmino(message: _18.PageResponse): _18.PageResponseAmino;
                    fromAminoMsg(object: _18.PageResponseAminoMsg): _18.PageResponse;
                    toAminoMsg(message: _18.PageResponse): _18.PageResponseAminoMsg;
                    fromProtoMsg(message: _18.PageResponseProtoMsg): _18.PageResponse;
                    toProto(message: _18.PageResponse): Uint8Array;
                    toProtoMsg(message: _18.PageResponse): _18.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _19.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _19.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_19.ListAllInterfacesRequest>): _19.ListAllInterfacesRequest;
                    fromAmino(_: _19.ListAllInterfacesRequestAmino): _19.ListAllInterfacesRequest;
                    toAmino(_: _19.ListAllInterfacesRequest): _19.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _19.ListAllInterfacesRequestAminoMsg): _19.ListAllInterfacesRequest;
                    toAminoMsg(message: _19.ListAllInterfacesRequest): _19.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _19.ListAllInterfacesRequestProtoMsg): _19.ListAllInterfacesRequest;
                    toProto(message: _19.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _19.ListAllInterfacesRequest): _19.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _19.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_19.ListAllInterfacesResponse>): _19.ListAllInterfacesResponse;
                    fromAmino(object: _19.ListAllInterfacesResponseAmino): _19.ListAllInterfacesResponse;
                    toAmino(message: _19.ListAllInterfacesResponse): _19.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _19.ListAllInterfacesResponseAminoMsg): _19.ListAllInterfacesResponse;
                    toAminoMsg(message: _19.ListAllInterfacesResponse): _19.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _19.ListAllInterfacesResponseProtoMsg): _19.ListAllInterfacesResponse;
                    toProto(message: _19.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _19.ListAllInterfacesResponse): _19.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _19.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.ListImplementationsRequest;
                    fromPartial(object: Partial<_19.ListImplementationsRequest>): _19.ListImplementationsRequest;
                    fromAmino(object: _19.ListImplementationsRequestAmino): _19.ListImplementationsRequest;
                    toAmino(message: _19.ListImplementationsRequest): _19.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _19.ListImplementationsRequestAminoMsg): _19.ListImplementationsRequest;
                    toAminoMsg(message: _19.ListImplementationsRequest): _19.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _19.ListImplementationsRequestProtoMsg): _19.ListImplementationsRequest;
                    toProto(message: _19.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _19.ListImplementationsRequest): _19.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _19.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.ListImplementationsResponse;
                    fromPartial(object: Partial<_19.ListImplementationsResponse>): _19.ListImplementationsResponse;
                    fromAmino(object: _19.ListImplementationsResponseAmino): _19.ListImplementationsResponse;
                    toAmino(message: _19.ListImplementationsResponse): _19.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _19.ListImplementationsResponseAminoMsg): _19.ListImplementationsResponse;
                    toAminoMsg(message: _19.ListImplementationsResponse): _19.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _19.ListImplementationsResponseProtoMsg): _19.ListImplementationsResponse;
                    toProto(message: _19.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _19.ListImplementationsResponse): _19.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _20.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.AppDescriptor;
                    fromPartial(object: Partial<_20.AppDescriptor>): _20.AppDescriptor;
                    fromAmino(object: _20.AppDescriptorAmino): _20.AppDescriptor;
                    toAmino(message: _20.AppDescriptor): _20.AppDescriptorAmino;
                    fromAminoMsg(object: _20.AppDescriptorAminoMsg): _20.AppDescriptor;
                    toAminoMsg(message: _20.AppDescriptor): _20.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _20.AppDescriptorProtoMsg): _20.AppDescriptor;
                    toProto(message: _20.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _20.AppDescriptor): _20.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _20.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.TxDescriptor;
                    fromPartial(object: Partial<_20.TxDescriptor>): _20.TxDescriptor;
                    fromAmino(object: _20.TxDescriptorAmino): _20.TxDescriptor;
                    toAmino(message: _20.TxDescriptor): _20.TxDescriptorAmino;
                    fromAminoMsg(object: _20.TxDescriptorAminoMsg): _20.TxDescriptor;
                    toAminoMsg(message: _20.TxDescriptor): _20.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _20.TxDescriptorProtoMsg): _20.TxDescriptor;
                    toProto(message: _20.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _20.TxDescriptor): _20.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _20.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.AuthnDescriptor;
                    fromPartial(object: Partial<_20.AuthnDescriptor>): _20.AuthnDescriptor;
                    fromAmino(object: _20.AuthnDescriptorAmino): _20.AuthnDescriptor;
                    toAmino(message: _20.AuthnDescriptor): _20.AuthnDescriptorAmino;
                    fromAminoMsg(object: _20.AuthnDescriptorAminoMsg): _20.AuthnDescriptor;
                    toAminoMsg(message: _20.AuthnDescriptor): _20.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _20.AuthnDescriptorProtoMsg): _20.AuthnDescriptor;
                    toProto(message: _20.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _20.AuthnDescriptor): _20.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _20.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.SigningModeDescriptor;
                    fromPartial(object: Partial<_20.SigningModeDescriptor>): _20.SigningModeDescriptor;
                    fromAmino(object: _20.SigningModeDescriptorAmino): _20.SigningModeDescriptor;
                    toAmino(message: _20.SigningModeDescriptor): _20.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _20.SigningModeDescriptorAminoMsg): _20.SigningModeDescriptor;
                    toAminoMsg(message: _20.SigningModeDescriptor): _20.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _20.SigningModeDescriptorProtoMsg): _20.SigningModeDescriptor;
                    toProto(message: _20.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _20.SigningModeDescriptor): _20.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _20.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.ChainDescriptor;
                    fromPartial(object: Partial<_20.ChainDescriptor>): _20.ChainDescriptor;
                    fromAmino(object: _20.ChainDescriptorAmino): _20.ChainDescriptor;
                    toAmino(message: _20.ChainDescriptor): _20.ChainDescriptorAmino;
                    fromAminoMsg(object: _20.ChainDescriptorAminoMsg): _20.ChainDescriptor;
                    toAminoMsg(message: _20.ChainDescriptor): _20.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _20.ChainDescriptorProtoMsg): _20.ChainDescriptor;
                    toProto(message: _20.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _20.ChainDescriptor): _20.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _20.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.CodecDescriptor;
                    fromPartial(object: Partial<_20.CodecDescriptor>): _20.CodecDescriptor;
                    fromAmino(object: _20.CodecDescriptorAmino): _20.CodecDescriptor;
                    toAmino(message: _20.CodecDescriptor): _20.CodecDescriptorAmino;
                    fromAminoMsg(object: _20.CodecDescriptorAminoMsg): _20.CodecDescriptor;
                    toAminoMsg(message: _20.CodecDescriptor): _20.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _20.CodecDescriptorProtoMsg): _20.CodecDescriptor;
                    toProto(message: _20.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _20.CodecDescriptor): _20.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _20.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.InterfaceDescriptor;
                    fromPartial(object: Partial<_20.InterfaceDescriptor>): _20.InterfaceDescriptor;
                    fromAmino(object: _20.InterfaceDescriptorAmino): _20.InterfaceDescriptor;
                    toAmino(message: _20.InterfaceDescriptor): _20.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _20.InterfaceDescriptorAminoMsg): _20.InterfaceDescriptor;
                    toAminoMsg(message: _20.InterfaceDescriptor): _20.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _20.InterfaceDescriptorProtoMsg): _20.InterfaceDescriptor;
                    toProto(message: _20.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _20.InterfaceDescriptor): _20.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _20.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_20.InterfaceImplementerDescriptor>): _20.InterfaceImplementerDescriptor;
                    fromAmino(object: _20.InterfaceImplementerDescriptorAmino): _20.InterfaceImplementerDescriptor;
                    toAmino(message: _20.InterfaceImplementerDescriptor): _20.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _20.InterfaceImplementerDescriptorAminoMsg): _20.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _20.InterfaceImplementerDescriptor): _20.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _20.InterfaceImplementerDescriptorProtoMsg): _20.InterfaceImplementerDescriptor;
                    toProto(message: _20.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _20.InterfaceImplementerDescriptor): _20.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _20.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_20.InterfaceAcceptingMessageDescriptor>): _20.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _20.InterfaceAcceptingMessageDescriptorAmino): _20.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _20.InterfaceAcceptingMessageDescriptor): _20.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _20.InterfaceAcceptingMessageDescriptorAminoMsg): _20.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _20.InterfaceAcceptingMessageDescriptor): _20.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _20.InterfaceAcceptingMessageDescriptorProtoMsg): _20.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _20.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _20.InterfaceAcceptingMessageDescriptor): _20.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _20.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.ConfigurationDescriptor;
                    fromPartial(object: Partial<_20.ConfigurationDescriptor>): _20.ConfigurationDescriptor;
                    fromAmino(object: _20.ConfigurationDescriptorAmino): _20.ConfigurationDescriptor;
                    toAmino(message: _20.ConfigurationDescriptor): _20.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _20.ConfigurationDescriptorAminoMsg): _20.ConfigurationDescriptor;
                    toAminoMsg(message: _20.ConfigurationDescriptor): _20.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _20.ConfigurationDescriptorProtoMsg): _20.ConfigurationDescriptor;
                    toProto(message: _20.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _20.ConfigurationDescriptor): _20.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _20.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.MsgDescriptor;
                    fromPartial(object: Partial<_20.MsgDescriptor>): _20.MsgDescriptor;
                    fromAmino(object: _20.MsgDescriptorAmino): _20.MsgDescriptor;
                    toAmino(message: _20.MsgDescriptor): _20.MsgDescriptorAmino;
                    fromAminoMsg(object: _20.MsgDescriptorAminoMsg): _20.MsgDescriptor;
                    toAminoMsg(message: _20.MsgDescriptor): _20.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _20.MsgDescriptorProtoMsg): _20.MsgDescriptor;
                    toProto(message: _20.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _20.MsgDescriptor): _20.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _20.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _20.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_20.GetAuthnDescriptorRequest>): _20.GetAuthnDescriptorRequest;
                    fromAmino(_: _20.GetAuthnDescriptorRequestAmino): _20.GetAuthnDescriptorRequest;
                    toAmino(_: _20.GetAuthnDescriptorRequest): _20.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _20.GetAuthnDescriptorRequestAminoMsg): _20.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _20.GetAuthnDescriptorRequest): _20.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _20.GetAuthnDescriptorRequestProtoMsg): _20.GetAuthnDescriptorRequest;
                    toProto(message: _20.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _20.GetAuthnDescriptorRequest): _20.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _20.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_20.GetAuthnDescriptorResponse>): _20.GetAuthnDescriptorResponse;
                    fromAmino(object: _20.GetAuthnDescriptorResponseAmino): _20.GetAuthnDescriptorResponse;
                    toAmino(message: _20.GetAuthnDescriptorResponse): _20.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _20.GetAuthnDescriptorResponseAminoMsg): _20.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _20.GetAuthnDescriptorResponse): _20.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _20.GetAuthnDescriptorResponseProtoMsg): _20.GetAuthnDescriptorResponse;
                    toProto(message: _20.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _20.GetAuthnDescriptorResponse): _20.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _20.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _20.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_20.GetChainDescriptorRequest>): _20.GetChainDescriptorRequest;
                    fromAmino(_: _20.GetChainDescriptorRequestAmino): _20.GetChainDescriptorRequest;
                    toAmino(_: _20.GetChainDescriptorRequest): _20.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _20.GetChainDescriptorRequestAminoMsg): _20.GetChainDescriptorRequest;
                    toAminoMsg(message: _20.GetChainDescriptorRequest): _20.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _20.GetChainDescriptorRequestProtoMsg): _20.GetChainDescriptorRequest;
                    toProto(message: _20.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _20.GetChainDescriptorRequest): _20.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _20.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_20.GetChainDescriptorResponse>): _20.GetChainDescriptorResponse;
                    fromAmino(object: _20.GetChainDescriptorResponseAmino): _20.GetChainDescriptorResponse;
                    toAmino(message: _20.GetChainDescriptorResponse): _20.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _20.GetChainDescriptorResponseAminoMsg): _20.GetChainDescriptorResponse;
                    toAminoMsg(message: _20.GetChainDescriptorResponse): _20.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _20.GetChainDescriptorResponseProtoMsg): _20.GetChainDescriptorResponse;
                    toProto(message: _20.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _20.GetChainDescriptorResponse): _20.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _20.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _20.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_20.GetCodecDescriptorRequest>): _20.GetCodecDescriptorRequest;
                    fromAmino(_: _20.GetCodecDescriptorRequestAmino): _20.GetCodecDescriptorRequest;
                    toAmino(_: _20.GetCodecDescriptorRequest): _20.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _20.GetCodecDescriptorRequestAminoMsg): _20.GetCodecDescriptorRequest;
                    toAminoMsg(message: _20.GetCodecDescriptorRequest): _20.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _20.GetCodecDescriptorRequestProtoMsg): _20.GetCodecDescriptorRequest;
                    toProto(message: _20.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _20.GetCodecDescriptorRequest): _20.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _20.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_20.GetCodecDescriptorResponse>): _20.GetCodecDescriptorResponse;
                    fromAmino(object: _20.GetCodecDescriptorResponseAmino): _20.GetCodecDescriptorResponse;
                    toAmino(message: _20.GetCodecDescriptorResponse): _20.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _20.GetCodecDescriptorResponseAminoMsg): _20.GetCodecDescriptorResponse;
                    toAminoMsg(message: _20.GetCodecDescriptorResponse): _20.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _20.GetCodecDescriptorResponseProtoMsg): _20.GetCodecDescriptorResponse;
                    toProto(message: _20.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _20.GetCodecDescriptorResponse): _20.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _20.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _20.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_20.GetConfigurationDescriptorRequest>): _20.GetConfigurationDescriptorRequest;
                    fromAmino(_: _20.GetConfigurationDescriptorRequestAmino): _20.GetConfigurationDescriptorRequest;
                    toAmino(_: _20.GetConfigurationDescriptorRequest): _20.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _20.GetConfigurationDescriptorRequestAminoMsg): _20.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _20.GetConfigurationDescriptorRequest): _20.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _20.GetConfigurationDescriptorRequestProtoMsg): _20.GetConfigurationDescriptorRequest;
                    toProto(message: _20.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _20.GetConfigurationDescriptorRequest): _20.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _20.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_20.GetConfigurationDescriptorResponse>): _20.GetConfigurationDescriptorResponse;
                    fromAmino(object: _20.GetConfigurationDescriptorResponseAmino): _20.GetConfigurationDescriptorResponse;
                    toAmino(message: _20.GetConfigurationDescriptorResponse): _20.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _20.GetConfigurationDescriptorResponseAminoMsg): _20.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _20.GetConfigurationDescriptorResponse): _20.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _20.GetConfigurationDescriptorResponseProtoMsg): _20.GetConfigurationDescriptorResponse;
                    toProto(message: _20.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _20.GetConfigurationDescriptorResponse): _20.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _20.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _20.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_20.GetQueryServicesDescriptorRequest>): _20.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _20.GetQueryServicesDescriptorRequestAmino): _20.GetQueryServicesDescriptorRequest;
                    toAmino(_: _20.GetQueryServicesDescriptorRequest): _20.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _20.GetQueryServicesDescriptorRequestAminoMsg): _20.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _20.GetQueryServicesDescriptorRequest): _20.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _20.GetQueryServicesDescriptorRequestProtoMsg): _20.GetQueryServicesDescriptorRequest;
                    toProto(message: _20.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _20.GetQueryServicesDescriptorRequest): _20.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _20.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_20.GetQueryServicesDescriptorResponse>): _20.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _20.GetQueryServicesDescriptorResponseAmino): _20.GetQueryServicesDescriptorResponse;
                    toAmino(message: _20.GetQueryServicesDescriptorResponse): _20.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _20.GetQueryServicesDescriptorResponseAminoMsg): _20.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _20.GetQueryServicesDescriptorResponse): _20.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _20.GetQueryServicesDescriptorResponseProtoMsg): _20.GetQueryServicesDescriptorResponse;
                    toProto(message: _20.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _20.GetQueryServicesDescriptorResponse): _20.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _20.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _20.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_20.GetTxDescriptorRequest>): _20.GetTxDescriptorRequest;
                    fromAmino(_: _20.GetTxDescriptorRequestAmino): _20.GetTxDescriptorRequest;
                    toAmino(_: _20.GetTxDescriptorRequest): _20.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _20.GetTxDescriptorRequestAminoMsg): _20.GetTxDescriptorRequest;
                    toAminoMsg(message: _20.GetTxDescriptorRequest): _20.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _20.GetTxDescriptorRequestProtoMsg): _20.GetTxDescriptorRequest;
                    toProto(message: _20.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _20.GetTxDescriptorRequest): _20.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _20.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_20.GetTxDescriptorResponse>): _20.GetTxDescriptorResponse;
                    fromAmino(object: _20.GetTxDescriptorResponseAmino): _20.GetTxDescriptorResponse;
                    toAmino(message: _20.GetTxDescriptorResponse): _20.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _20.GetTxDescriptorResponseAminoMsg): _20.GetTxDescriptorResponse;
                    toAminoMsg(message: _20.GetTxDescriptorResponse): _20.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _20.GetTxDescriptorResponseProtoMsg): _20.GetTxDescriptorResponse;
                    toProto(message: _20.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _20.GetTxDescriptorResponse): _20.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _20.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.QueryServicesDescriptor;
                    fromPartial(object: Partial<_20.QueryServicesDescriptor>): _20.QueryServicesDescriptor;
                    fromAmino(object: _20.QueryServicesDescriptorAmino): _20.QueryServicesDescriptor;
                    toAmino(message: _20.QueryServicesDescriptor): _20.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _20.QueryServicesDescriptorAminoMsg): _20.QueryServicesDescriptor;
                    toAminoMsg(message: _20.QueryServicesDescriptor): _20.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _20.QueryServicesDescriptorProtoMsg): _20.QueryServicesDescriptor;
                    toProto(message: _20.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _20.QueryServicesDescriptor): _20.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _20.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.QueryServiceDescriptor;
                    fromPartial(object: Partial<_20.QueryServiceDescriptor>): _20.QueryServiceDescriptor;
                    fromAmino(object: _20.QueryServiceDescriptorAmino): _20.QueryServiceDescriptor;
                    toAmino(message: _20.QueryServiceDescriptor): _20.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _20.QueryServiceDescriptorAminoMsg): _20.QueryServiceDescriptor;
                    toAminoMsg(message: _20.QueryServiceDescriptor): _20.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _20.QueryServiceDescriptorProtoMsg): _20.QueryServiceDescriptor;
                    toProto(message: _20.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _20.QueryServiceDescriptor): _20.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _20.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.QueryMethodDescriptor;
                    fromPartial(object: Partial<_20.QueryMethodDescriptor>): _20.QueryMethodDescriptor;
                    fromAmino(object: _20.QueryMethodDescriptorAmino): _20.QueryMethodDescriptor;
                    toAmino(message: _20.QueryMethodDescriptor): _20.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _20.QueryMethodDescriptorAminoMsg): _20.QueryMethodDescriptor;
                    toAminoMsg(message: _20.QueryMethodDescriptor): _20.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _20.QueryMethodDescriptorProtoMsg): _20.QueryMethodDescriptor;
                    toProto(message: _20.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _20.QueryMethodDescriptor): _20.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _21.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.Snapshot;
                    fromPartial(object: Partial<_21.Snapshot>): _21.Snapshot;
                    fromAmino(object: _21.SnapshotAmino): _21.Snapshot;
                    toAmino(message: _21.Snapshot): _21.SnapshotAmino;
                    fromAminoMsg(object: _21.SnapshotAminoMsg): _21.Snapshot;
                    toAminoMsg(message: _21.Snapshot): _21.SnapshotAminoMsg;
                    fromProtoMsg(message: _21.SnapshotProtoMsg): _21.Snapshot;
                    toProto(message: _21.Snapshot): Uint8Array;
                    toProtoMsg(message: _21.Snapshot): _21.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _21.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.Metadata;
                    fromPartial(object: Partial<_21.Metadata>): _21.Metadata;
                    fromAmino(object: _21.MetadataAmino): _21.Metadata;
                    toAmino(message: _21.Metadata): _21.MetadataAmino;
                    fromAminoMsg(object: _21.MetadataAminoMsg): _21.Metadata;
                    toAminoMsg(message: _21.Metadata): _21.MetadataAminoMsg;
                    fromProtoMsg(message: _21.MetadataProtoMsg): _21.Metadata;
                    toProto(message: _21.Metadata): Uint8Array;
                    toProtoMsg(message: _21.Metadata): _21.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _21.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.SnapshotItem;
                    fromPartial(object: Partial<_21.SnapshotItem>): _21.SnapshotItem;
                    fromAmino(object: _21.SnapshotItemAmino): _21.SnapshotItem;
                    toAmino(message: _21.SnapshotItem): _21.SnapshotItemAmino;
                    fromAminoMsg(object: _21.SnapshotItemAminoMsg): _21.SnapshotItem;
                    toAminoMsg(message: _21.SnapshotItem): _21.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _21.SnapshotItemProtoMsg): _21.SnapshotItem;
                    toProto(message: _21.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _21.SnapshotItem): _21.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _21.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.SnapshotStoreItem;
                    fromPartial(object: Partial<_21.SnapshotStoreItem>): _21.SnapshotStoreItem;
                    fromAmino(object: _21.SnapshotStoreItemAmino): _21.SnapshotStoreItem;
                    toAmino(message: _21.SnapshotStoreItem): _21.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _21.SnapshotStoreItemAminoMsg): _21.SnapshotStoreItem;
                    toAminoMsg(message: _21.SnapshotStoreItem): _21.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _21.SnapshotStoreItemProtoMsg): _21.SnapshotStoreItem;
                    toProto(message: _21.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _21.SnapshotStoreItem): _21.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _21.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.SnapshotIAVLItem;
                    fromPartial(object: Partial<_21.SnapshotIAVLItem>): _21.SnapshotIAVLItem;
                    fromAmino(object: _21.SnapshotIAVLItemAmino): _21.SnapshotIAVLItem;
                    toAmino(message: _21.SnapshotIAVLItem): _21.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _21.SnapshotIAVLItemAminoMsg): _21.SnapshotIAVLItem;
                    toAminoMsg(message: _21.SnapshotIAVLItem): _21.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _21.SnapshotIAVLItemProtoMsg): _21.SnapshotIAVLItem;
                    toProto(message: _21.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _21.SnapshotIAVLItem): _21.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _21.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_21.SnapshotExtensionMeta>): _21.SnapshotExtensionMeta;
                    fromAmino(object: _21.SnapshotExtensionMetaAmino): _21.SnapshotExtensionMeta;
                    toAmino(message: _21.SnapshotExtensionMeta): _21.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _21.SnapshotExtensionMetaAminoMsg): _21.SnapshotExtensionMeta;
                    toAminoMsg(message: _21.SnapshotExtensionMeta): _21.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _21.SnapshotExtensionMetaProtoMsg): _21.SnapshotExtensionMeta;
                    toProto(message: _21.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _21.SnapshotExtensionMeta): _21.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _21.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_21.SnapshotExtensionPayload>): _21.SnapshotExtensionPayload;
                    fromAmino(object: _21.SnapshotExtensionPayloadAmino): _21.SnapshotExtensionPayload;
                    toAmino(message: _21.SnapshotExtensionPayload): _21.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _21.SnapshotExtensionPayloadAminoMsg): _21.SnapshotExtensionPayload;
                    toAminoMsg(message: _21.SnapshotExtensionPayload): _21.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _21.SnapshotExtensionPayloadProtoMsg): _21.SnapshotExtensionPayload;
                    toProto(message: _21.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _21.SnapshotExtensionPayload): _21.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _23.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.StoreKVPair;
                    fromPartial(object: Partial<_23.StoreKVPair>): _23.StoreKVPair;
                    fromAmino(object: _23.StoreKVPairAmino): _23.StoreKVPair;
                    toAmino(message: _23.StoreKVPair): _23.StoreKVPairAmino;
                    fromAminoMsg(object: _23.StoreKVPairAminoMsg): _23.StoreKVPair;
                    toAminoMsg(message: _23.StoreKVPair): _23.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _23.StoreKVPairProtoMsg): _23.StoreKVPair;
                    toProto(message: _23.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _23.StoreKVPair): _23.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _23.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.BlockMetadata;
                    fromPartial(object: Partial<_23.BlockMetadata>): _23.BlockMetadata;
                    fromAmino(object: _23.BlockMetadataAmino): _23.BlockMetadata;
                    toAmino(message: _23.BlockMetadata): _23.BlockMetadataAmino;
                    fromAminoMsg(object: _23.BlockMetadataAminoMsg): _23.BlockMetadata;
                    toAminoMsg(message: _23.BlockMetadata): _23.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _23.BlockMetadataProtoMsg): _23.BlockMetadata;
                    toProto(message: _23.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _23.BlockMetadata): _23.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _23.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_23.BlockMetadata_DeliverTx>): _23.BlockMetadata_DeliverTx;
                    fromAmino(object: _23.BlockMetadata_DeliverTxAmino): _23.BlockMetadata_DeliverTx;
                    toAmino(message: _23.BlockMetadata_DeliverTx): _23.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _23.BlockMetadata_DeliverTxAminoMsg): _23.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _23.BlockMetadata_DeliverTx): _23.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _23.BlockMetadata_DeliverTxProtoMsg): _23.BlockMetadata_DeliverTx;
                    toProto(message: _23.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _23.BlockMetadata_DeliverTx): _23.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _22.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.CommitInfo;
                    fromPartial(object: Partial<_22.CommitInfo>): _22.CommitInfo;
                    fromAmino(object: _22.CommitInfoAmino): _22.CommitInfo;
                    toAmino(message: _22.CommitInfo): _22.CommitInfoAmino;
                    fromAminoMsg(object: _22.CommitInfoAminoMsg): _22.CommitInfo;
                    toAminoMsg(message: _22.CommitInfo): _22.CommitInfoAminoMsg;
                    fromProtoMsg(message: _22.CommitInfoProtoMsg): _22.CommitInfo;
                    toProto(message: _22.CommitInfo): Uint8Array;
                    toProtoMsg(message: _22.CommitInfo): _22.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _22.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.StoreInfo;
                    fromPartial(object: Partial<_22.StoreInfo>): _22.StoreInfo;
                    fromAmino(object: _22.StoreInfoAmino): _22.StoreInfo;
                    toAmino(message: _22.StoreInfo): _22.StoreInfoAmino;
                    fromAminoMsg(object: _22.StoreInfoAminoMsg): _22.StoreInfo;
                    toAminoMsg(message: _22.StoreInfo): _22.StoreInfoAminoMsg;
                    fromProtoMsg(message: _22.StoreInfoProtoMsg): _22.StoreInfo;
                    toProto(message: _22.StoreInfo): Uint8Array;
                    toProtoMsg(message: _22.StoreInfo): _22.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _22.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.CommitID;
                    fromPartial(object: Partial<_22.CommitID>): _22.CommitID;
                    fromAmino(object: _22.CommitIDAmino): _22.CommitID;
                    toAmino(message: _22.CommitID): _22.CommitIDAmino;
                    fromAminoMsg(object: _22.CommitIDAminoMsg): _22.CommitID;
                    toAminoMsg(message: _22.CommitID): _22.CommitIDAminoMsg;
                    fromProtoMsg(message: _22.CommitIDProtoMsg): _22.CommitID;
                    toProto(message: _22.CommitID): Uint8Array;
                    toProtoMsg(message: _22.CommitID): _22.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _145.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _24.GetNodeInfoRequest): Promise<_24.GetNodeInfoResponse>;
                    getSyncing(request?: _24.GetSyncingRequest): Promise<_24.GetSyncingResponse>;
                    getLatestBlock(request?: _24.GetLatestBlockRequest): Promise<_24.GetLatestBlockResponse>;
                    getBlockByHeight(request: _24.GetBlockByHeightRequest): Promise<_24.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _24.GetLatestValidatorSetRequest): Promise<_24.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _24.GetValidatorSetByHeightRequest): Promise<_24.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _130.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _24.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_24.GetValidatorSetByHeightRequest>): _24.GetValidatorSetByHeightRequest;
                    fromAmino(object: _24.GetValidatorSetByHeightRequestAmino): _24.GetValidatorSetByHeightRequest;
                    toAmino(message: _24.GetValidatorSetByHeightRequest): _24.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _24.GetValidatorSetByHeightRequestAminoMsg): _24.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _24.GetValidatorSetByHeightRequest): _24.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _24.GetValidatorSetByHeightRequestProtoMsg): _24.GetValidatorSetByHeightRequest;
                    toProto(message: _24.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _24.GetValidatorSetByHeightRequest): _24.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _24.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_24.GetValidatorSetByHeightResponse>): _24.GetValidatorSetByHeightResponse;
                    fromAmino(object: _24.GetValidatorSetByHeightResponseAmino): _24.GetValidatorSetByHeightResponse;
                    toAmino(message: _24.GetValidatorSetByHeightResponse): _24.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _24.GetValidatorSetByHeightResponseAminoMsg): _24.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _24.GetValidatorSetByHeightResponse): _24.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _24.GetValidatorSetByHeightResponseProtoMsg): _24.GetValidatorSetByHeightResponse;
                    toProto(message: _24.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _24.GetValidatorSetByHeightResponse): _24.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _24.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_24.GetLatestValidatorSetRequest>): _24.GetLatestValidatorSetRequest;
                    fromAmino(object: _24.GetLatestValidatorSetRequestAmino): _24.GetLatestValidatorSetRequest;
                    toAmino(message: _24.GetLatestValidatorSetRequest): _24.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _24.GetLatestValidatorSetRequestAminoMsg): _24.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _24.GetLatestValidatorSetRequest): _24.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _24.GetLatestValidatorSetRequestProtoMsg): _24.GetLatestValidatorSetRequest;
                    toProto(message: _24.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _24.GetLatestValidatorSetRequest): _24.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _24.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_24.GetLatestValidatorSetResponse>): _24.GetLatestValidatorSetResponse;
                    fromAmino(object: _24.GetLatestValidatorSetResponseAmino): _24.GetLatestValidatorSetResponse;
                    toAmino(message: _24.GetLatestValidatorSetResponse): _24.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _24.GetLatestValidatorSetResponseAminoMsg): _24.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _24.GetLatestValidatorSetResponse): _24.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _24.GetLatestValidatorSetResponseProtoMsg): _24.GetLatestValidatorSetResponse;
                    toProto(message: _24.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _24.GetLatestValidatorSetResponse): _24.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _24.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.Validator;
                    fromPartial(object: Partial<_24.Validator>): _24.Validator;
                    fromAmino(object: _24.ValidatorAmino): _24.Validator;
                    toAmino(message: _24.Validator): _24.ValidatorAmino;
                    fromAminoMsg(object: _24.ValidatorAminoMsg): _24.Validator;
                    toAminoMsg(message: _24.Validator): _24.ValidatorAminoMsg;
                    fromProtoMsg(message: _24.ValidatorProtoMsg): _24.Validator;
                    toProto(message: _24.Validator): Uint8Array;
                    toProtoMsg(message: _24.Validator): _24.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _24.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_24.GetBlockByHeightRequest>): _24.GetBlockByHeightRequest;
                    fromAmino(object: _24.GetBlockByHeightRequestAmino): _24.GetBlockByHeightRequest;
                    toAmino(message: _24.GetBlockByHeightRequest): _24.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _24.GetBlockByHeightRequestAminoMsg): _24.GetBlockByHeightRequest;
                    toAminoMsg(message: _24.GetBlockByHeightRequest): _24.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _24.GetBlockByHeightRequestProtoMsg): _24.GetBlockByHeightRequest;
                    toProto(message: _24.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _24.GetBlockByHeightRequest): _24.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _24.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_24.GetBlockByHeightResponse>): _24.GetBlockByHeightResponse;
                    fromAmino(object: _24.GetBlockByHeightResponseAmino): _24.GetBlockByHeightResponse;
                    toAmino(message: _24.GetBlockByHeightResponse): _24.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _24.GetBlockByHeightResponseAminoMsg): _24.GetBlockByHeightResponse;
                    toAminoMsg(message: _24.GetBlockByHeightResponse): _24.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _24.GetBlockByHeightResponseProtoMsg): _24.GetBlockByHeightResponse;
                    toProto(message: _24.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _24.GetBlockByHeightResponse): _24.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _24.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _24.GetLatestBlockRequest;
                    fromPartial(_: Partial<_24.GetLatestBlockRequest>): _24.GetLatestBlockRequest;
                    fromAmino(_: _24.GetLatestBlockRequestAmino): _24.GetLatestBlockRequest;
                    toAmino(_: _24.GetLatestBlockRequest): _24.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _24.GetLatestBlockRequestAminoMsg): _24.GetLatestBlockRequest;
                    toAminoMsg(message: _24.GetLatestBlockRequest): _24.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _24.GetLatestBlockRequestProtoMsg): _24.GetLatestBlockRequest;
                    toProto(message: _24.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _24.GetLatestBlockRequest): _24.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _24.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.GetLatestBlockResponse;
                    fromPartial(object: Partial<_24.GetLatestBlockResponse>): _24.GetLatestBlockResponse;
                    fromAmino(object: _24.GetLatestBlockResponseAmino): _24.GetLatestBlockResponse;
                    toAmino(message: _24.GetLatestBlockResponse): _24.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _24.GetLatestBlockResponseAminoMsg): _24.GetLatestBlockResponse;
                    toAminoMsg(message: _24.GetLatestBlockResponse): _24.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _24.GetLatestBlockResponseProtoMsg): _24.GetLatestBlockResponse;
                    toProto(message: _24.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _24.GetLatestBlockResponse): _24.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _24.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _24.GetSyncingRequest;
                    fromPartial(_: Partial<_24.GetSyncingRequest>): _24.GetSyncingRequest;
                    fromAmino(_: _24.GetSyncingRequestAmino): _24.GetSyncingRequest;
                    toAmino(_: _24.GetSyncingRequest): _24.GetSyncingRequestAmino;
                    fromAminoMsg(object: _24.GetSyncingRequestAminoMsg): _24.GetSyncingRequest;
                    toAminoMsg(message: _24.GetSyncingRequest): _24.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _24.GetSyncingRequestProtoMsg): _24.GetSyncingRequest;
                    toProto(message: _24.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _24.GetSyncingRequest): _24.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _24.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.GetSyncingResponse;
                    fromPartial(object: Partial<_24.GetSyncingResponse>): _24.GetSyncingResponse;
                    fromAmino(object: _24.GetSyncingResponseAmino): _24.GetSyncingResponse;
                    toAmino(message: _24.GetSyncingResponse): _24.GetSyncingResponseAmino;
                    fromAminoMsg(object: _24.GetSyncingResponseAminoMsg): _24.GetSyncingResponse;
                    toAminoMsg(message: _24.GetSyncingResponse): _24.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _24.GetSyncingResponseProtoMsg): _24.GetSyncingResponse;
                    toProto(message: _24.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _24.GetSyncingResponse): _24.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _24.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _24.GetNodeInfoRequest;
                    fromPartial(_: Partial<_24.GetNodeInfoRequest>): _24.GetNodeInfoRequest;
                    fromAmino(_: _24.GetNodeInfoRequestAmino): _24.GetNodeInfoRequest;
                    toAmino(_: _24.GetNodeInfoRequest): _24.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _24.GetNodeInfoRequestAminoMsg): _24.GetNodeInfoRequest;
                    toAminoMsg(message: _24.GetNodeInfoRequest): _24.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _24.GetNodeInfoRequestProtoMsg): _24.GetNodeInfoRequest;
                    toProto(message: _24.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _24.GetNodeInfoRequest): _24.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _24.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.GetNodeInfoResponse;
                    fromPartial(object: Partial<_24.GetNodeInfoResponse>): _24.GetNodeInfoResponse;
                    fromAmino(object: _24.GetNodeInfoResponseAmino): _24.GetNodeInfoResponse;
                    toAmino(message: _24.GetNodeInfoResponse): _24.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _24.GetNodeInfoResponseAminoMsg): _24.GetNodeInfoResponse;
                    toAminoMsg(message: _24.GetNodeInfoResponse): _24.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _24.GetNodeInfoResponseProtoMsg): _24.GetNodeInfoResponse;
                    toProto(message: _24.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _24.GetNodeInfoResponse): _24.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _24.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.VersionInfo;
                    fromPartial(object: Partial<_24.VersionInfo>): _24.VersionInfo;
                    fromAmino(object: _24.VersionInfoAmino): _24.VersionInfo;
                    toAmino(message: _24.VersionInfo): _24.VersionInfoAmino;
                    fromAminoMsg(object: _24.VersionInfoAminoMsg): _24.VersionInfo;
                    toAminoMsg(message: _24.VersionInfo): _24.VersionInfoAminoMsg;
                    fromProtoMsg(message: _24.VersionInfoProtoMsg): _24.VersionInfo;
                    toProto(message: _24.VersionInfo): Uint8Array;
                    toProtoMsg(message: _24.VersionInfo): _24.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _24.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.Module;
                    fromPartial(object: Partial<_24.Module>): _24.Module;
                    fromAmino(object: _24.ModuleAmino): _24.Module;
                    toAmino(message: _24.Module): _24.ModuleAmino;
                    fromAminoMsg(object: _24.ModuleAminoMsg): _24.Module;
                    toAminoMsg(message: _24.Module): _24.ModuleAminoMsg;
                    fromProtoMsg(message: _24.ModuleProtoMsg): _24.Module;
                    toProto(message: _24.Module): Uint8Array;
                    toProtoMsg(message: _24.Module): _24.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _25.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.Coin;
                fromPartial(object: Partial<_25.Coin>): _25.Coin;
                fromAmino(object: _25.CoinAmino): _25.Coin;
                toAmino(message: _25.Coin): _25.CoinAmino;
                fromAminoMsg(object: _25.CoinAminoMsg): _25.Coin;
                toAminoMsg(message: _25.Coin): _25.CoinAminoMsg;
                fromProtoMsg(message: _25.CoinProtoMsg): _25.Coin;
                toProto(message: _25.Coin): Uint8Array;
                toProtoMsg(message: _25.Coin): _25.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _25.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.DecCoin;
                fromPartial(object: Partial<_25.DecCoin>): _25.DecCoin;
                fromAmino(object: _25.DecCoinAmino): _25.DecCoin;
                toAmino(message: _25.DecCoin): _25.DecCoinAmino;
                fromAminoMsg(object: _25.DecCoinAminoMsg): _25.DecCoin;
                toAminoMsg(message: _25.DecCoin): _25.DecCoinAminoMsg;
                fromProtoMsg(message: _25.DecCoinProtoMsg): _25.DecCoin;
                toProto(message: _25.DecCoin): Uint8Array;
                toProtoMsg(message: _25.DecCoin): _25.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _25.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.IntProto;
                fromPartial(object: Partial<_25.IntProto>): _25.IntProto;
                fromAmino(object: _25.IntProtoAmino): _25.IntProto;
                toAmino(message: _25.IntProto): _25.IntProtoAmino;
                fromAminoMsg(object: _25.IntProtoAminoMsg): _25.IntProto;
                toAminoMsg(message: _25.IntProto): _25.IntProtoAminoMsg;
                fromProtoMsg(message: _25.IntProtoProtoMsg): _25.IntProto;
                toProto(message: _25.IntProto): Uint8Array;
                toProtoMsg(message: _25.IntProto): _25.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _25.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.DecProto;
                fromPartial(object: Partial<_25.DecProto>): _25.DecProto;
                fromAmino(object: _25.DecProtoAmino): _25.DecProto;
                toAmino(message: _25.DecProto): _25.DecProtoAmino;
                fromAminoMsg(object: _25.DecProtoAminoMsg): _25.DecProto;
                toAminoMsg(message: _25.DecProto): _25.DecProtoAminoMsg;
                fromProtoMsg(message: _25.DecProtoProtoMsg): _25.DecProto;
                toProto(message: _25.DecProto): Uint8Array;
                toProtoMsg(message: _25.DecProto): _25.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _27.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.GenesisOwners;
                fromPartial(object: Partial<_27.GenesisOwners>): _27.GenesisOwners;
                fromAmino(object: _27.GenesisOwnersAmino): _27.GenesisOwners;
                toAmino(message: _27.GenesisOwners): _27.GenesisOwnersAmino;
                fromAminoMsg(object: _27.GenesisOwnersAminoMsg): _27.GenesisOwners;
                toAminoMsg(message: _27.GenesisOwners): _27.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _27.GenesisOwnersProtoMsg): _27.GenesisOwners;
                toProto(message: _27.GenesisOwners): Uint8Array;
                toProtoMsg(message: _27.GenesisOwners): _27.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _26.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Capability;
                fromPartial(object: Partial<_26.Capability>): _26.Capability;
                fromAmino(object: _26.CapabilityAmino): _26.Capability;
                toAmino(message: _26.Capability): _26.CapabilityAmino;
                fromAminoMsg(object: _26.CapabilityAminoMsg): _26.Capability;
                toAminoMsg(message: _26.Capability): _26.CapabilityAminoMsg;
                fromProtoMsg(message: _26.CapabilityProtoMsg): _26.Capability;
                toProto(message: _26.Capability): Uint8Array;
                toProtoMsg(message: _26.Capability): _26.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _26.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Owner;
                fromPartial(object: Partial<_26.Owner>): _26.Owner;
                fromAmino(object: _26.OwnerAmino): _26.Owner;
                toAmino(message: _26.Owner): _26.OwnerAmino;
                fromAminoMsg(object: _26.OwnerAminoMsg): _26.Owner;
                toAminoMsg(message: _26.Owner): _26.OwnerAminoMsg;
                fromProtoMsg(message: _26.OwnerProtoMsg): _26.Owner;
                toProto(message: _26.Owner): Uint8Array;
                toProtoMsg(message: _26.Owner): _26.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _26.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.CapabilityOwners;
                fromPartial(object: Partial<_26.CapabilityOwners>): _26.CapabilityOwners;
                fromAmino(object: _26.CapabilityOwnersAmino): _26.CapabilityOwners;
                toAmino(message: _26.CapabilityOwners): _26.CapabilityOwnersAmino;
                fromAminoMsg(object: _26.CapabilityOwnersAminoMsg): _26.CapabilityOwners;
                toAminoMsg(message: _26.CapabilityOwners): _26.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _26.CapabilityOwnersProtoMsg): _26.CapabilityOwners;
                toProto(message: _26.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _26.CapabilityOwners): _26.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _158.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _29.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _29.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _29.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _29.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _29.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _29.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _29.MsgVerifyInvariant) => _29.MsgVerifyInvariantAmino;
                    fromAmino: (object: _29.MsgVerifyInvariantAmino) => _29.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _29.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgVerifyInvariant;
                fromPartial(object: Partial<_29.MsgVerifyInvariant>): _29.MsgVerifyInvariant;
                fromAmino(object: _29.MsgVerifyInvariantAmino): _29.MsgVerifyInvariant;
                toAmino(message: _29.MsgVerifyInvariant): _29.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _29.MsgVerifyInvariantAminoMsg): _29.MsgVerifyInvariant;
                toAminoMsg(message: _29.MsgVerifyInvariant): _29.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _29.MsgVerifyInvariantProtoMsg): _29.MsgVerifyInvariant;
                toProto(message: _29.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _29.MsgVerifyInvariant): _29.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _29.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_29.MsgVerifyInvariantResponse>): _29.MsgVerifyInvariantResponse;
                fromAmino(_: _29.MsgVerifyInvariantResponseAmino): _29.MsgVerifyInvariantResponse;
                toAmino(_: _29.MsgVerifyInvariantResponse): _29.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _29.MsgVerifyInvariantResponseAminoMsg): _29.MsgVerifyInvariantResponse;
                toAminoMsg(message: _29.MsgVerifyInvariantResponse): _29.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _29.MsgVerifyInvariantResponseProtoMsg): _29.MsgVerifyInvariantResponse;
                toProto(message: _29.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _29.MsgVerifyInvariantResponse): _29.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _28.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.GenesisState;
                fromPartial(object: Partial<_28.GenesisState>): _28.GenesisState;
                fromAmino(object: _28.GenesisStateAmino): _28.GenesisState;
                toAmino(message: _28.GenesisState): _28.GenesisStateAmino;
                fromAminoMsg(object: _28.GenesisStateAminoMsg): _28.GenesisState;
                toAminoMsg(message: _28.GenesisState): _28.GenesisStateAminoMsg;
                fromProtoMsg(message: _28.GenesisStateProtoMsg): _28.GenesisState;
                toProto(message: _28.GenesisState): Uint8Array;
                toProtoMsg(message: _28.GenesisState): _28.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _30.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.PubKey;
                fromPartial(object: Partial<_30.PubKey>): _30.PubKey;
                fromAmino(object: _30.PubKeyAmino): _30.PubKey;
                toAmino(message: _30.PubKey): _30.PubKeyAmino;
                fromAminoMsg(object: _30.PubKeyAminoMsg): _30.PubKey;
                toAminoMsg(message: _30.PubKey): _30.PubKeyAminoMsg;
                fromProtoMsg(message: _30.PubKeyProtoMsg): _30.PubKey;
                toProto(message: _30.PubKey): Uint8Array;
                toProtoMsg(message: _30.PubKey): _30.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _30.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.PrivKey;
                fromPartial(object: Partial<_30.PrivKey>): _30.PrivKey;
                fromAmino(object: _30.PrivKeyAmino): _30.PrivKey;
                toAmino(message: _30.PrivKey): _30.PrivKeyAmino;
                fromAminoMsg(object: _30.PrivKeyAminoMsg): _30.PrivKey;
                toAminoMsg(message: _30.PrivKey): _30.PrivKeyAminoMsg;
                fromProtoMsg(message: _30.PrivKeyProtoMsg): _30.PrivKey;
                toProto(message: _30.PrivKey): Uint8Array;
                toProtoMsg(message: _30.PrivKey): _30.PrivKeyProtoMsg;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _31.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.LegacyAminoPubKey;
                fromPartial(object: Partial<_31.LegacyAminoPubKey>): _31.LegacyAminoPubKey;
                fromAmino(object: _31.LegacyAminoPubKeyAmino): _31.LegacyAminoPubKey;
                toAmino(message: _31.LegacyAminoPubKey): _31.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _31.LegacyAminoPubKeyAminoMsg): _31.LegacyAminoPubKey;
                toAminoMsg(message: _31.LegacyAminoPubKey): _31.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _31.LegacyAminoPubKeyProtoMsg): _31.LegacyAminoPubKey;
                toProto(message: _31.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _31.LegacyAminoPubKey): _31.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _32.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.PubKey;
                fromPartial(object: Partial<_32.PubKey>): _32.PubKey;
                fromAmino(object: _32.PubKeyAmino): _32.PubKey;
                toAmino(message: _32.PubKey): _32.PubKeyAmino;
                fromAminoMsg(object: _32.PubKeyAminoMsg): _32.PubKey;
                toAminoMsg(message: _32.PubKey): _32.PubKeyAminoMsg;
                fromProtoMsg(message: _32.PubKeyProtoMsg): _32.PubKey;
                toProto(message: _32.PubKey): Uint8Array;
                toProtoMsg(message: _32.PubKey): _32.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _32.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.PrivKey;
                fromPartial(object: Partial<_32.PrivKey>): _32.PrivKey;
                fromAmino(object: _32.PrivKeyAmino): _32.PrivKey;
                toAmino(message: _32.PrivKey): _32.PrivKeyAmino;
                fromAminoMsg(object: _32.PrivKeyAminoMsg): _32.PrivKey;
                toAminoMsg(message: _32.PrivKey): _32.PrivKeyAminoMsg;
                fromProtoMsg(message: _32.PrivKeyProtoMsg): _32.PrivKey;
                toProto(message: _32.PrivKey): Uint8Array;
                toProtoMsg(message: _32.PrivKey): _32.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _33.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.PubKey;
                fromPartial(object: Partial<_33.PubKey>): _33.PubKey;
                fromAmino(object: _33.PubKeyAmino): _33.PubKey;
                toAmino(message: _33.PubKey): _33.PubKeyAmino;
                fromAminoMsg(object: _33.PubKeyAminoMsg): _33.PubKey;
                toAminoMsg(message: _33.PubKey): _33.PubKeyAminoMsg;
                fromProtoMsg(message: _33.PubKeyProtoMsg): _33.PubKey;
                toProto(message: _33.PubKey): Uint8Array;
                toProtoMsg(message: _33.PubKey): _33.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _33.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.PrivKey;
                fromPartial(object: Partial<_33.PrivKey>): _33.PrivKey;
                fromAmino(object: _33.PrivKeyAmino): _33.PrivKey;
                toAmino(message: _33.PrivKey): _33.PrivKeyAmino;
                fromAminoMsg(object: _33.PrivKeyAminoMsg): _33.PrivKey;
                toAminoMsg(message: _33.PrivKey): _33.PrivKeyAminoMsg;
                fromProtoMsg(message: _33.PrivKeyProtoMsg): _33.PrivKey;
                toProto(message: _33.PrivKey): Uint8Array;
                toProtoMsg(message: _33.PrivKey): _33.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _159.MsgClientImpl;
            QueryClientImpl: typeof _146.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
                validatorOutstandingRewards(request: _36.QueryValidatorOutstandingRewardsRequest): Promise<_36.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _36.QueryValidatorCommissionRequest): Promise<_36.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _36.QueryValidatorSlashesRequest): Promise<_36.QueryValidatorSlashesResponse>;
                delegationRewards(request: _36.QueryDelegationRewardsRequest): Promise<_36.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _36.QueryDelegationTotalRewardsRequest): Promise<_36.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _36.QueryDelegatorValidatorsRequest): Promise<_36.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _36.QueryDelegatorWithdrawAddressRequest): Promise<_36.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _36.QueryCommunityPoolRequest): Promise<_36.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _131.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _37.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _37.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _37.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _37.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _37.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _37.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _37.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _37.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _37.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _37.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _37.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _37.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _37.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _37.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _37.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _37.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _37.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _37.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _37.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _37.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _37.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _37.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _37.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _37.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _37.MsgSetWithdrawAddress) => _37.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _37.MsgSetWithdrawAddressAmino) => _37.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _37.MsgWithdrawDelegatorReward) => _37.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _37.MsgWithdrawDelegatorRewardAmino) => _37.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _37.MsgWithdrawValidatorCommission) => _37.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _37.MsgWithdrawValidatorCommissionAmino) => _37.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _37.MsgFundCommunityPool) => _37.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _37.MsgFundCommunityPoolAmino) => _37.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _37.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_37.MsgSetWithdrawAddress>): _37.MsgSetWithdrawAddress;
                fromAmino(object: _37.MsgSetWithdrawAddressAmino): _37.MsgSetWithdrawAddress;
                toAmino(message: _37.MsgSetWithdrawAddress): _37.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _37.MsgSetWithdrawAddressAminoMsg): _37.MsgSetWithdrawAddress;
                toAminoMsg(message: _37.MsgSetWithdrawAddress): _37.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _37.MsgSetWithdrawAddressProtoMsg): _37.MsgSetWithdrawAddress;
                toProto(message: _37.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _37.MsgSetWithdrawAddress): _37.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _37.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _37.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_37.MsgSetWithdrawAddressResponse>): _37.MsgSetWithdrawAddressResponse;
                fromAmino(_: _37.MsgSetWithdrawAddressResponseAmino): _37.MsgSetWithdrawAddressResponse;
                toAmino(_: _37.MsgSetWithdrawAddressResponse): _37.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _37.MsgSetWithdrawAddressResponseAminoMsg): _37.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _37.MsgSetWithdrawAddressResponse): _37.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _37.MsgSetWithdrawAddressResponseProtoMsg): _37.MsgSetWithdrawAddressResponse;
                toProto(message: _37.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _37.MsgSetWithdrawAddressResponse): _37.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _37.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_37.MsgWithdrawDelegatorReward>): _37.MsgWithdrawDelegatorReward;
                fromAmino(object: _37.MsgWithdrawDelegatorRewardAmino): _37.MsgWithdrawDelegatorReward;
                toAmino(message: _37.MsgWithdrawDelegatorReward): _37.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _37.MsgWithdrawDelegatorRewardAminoMsg): _37.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _37.MsgWithdrawDelegatorReward): _37.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _37.MsgWithdrawDelegatorRewardProtoMsg): _37.MsgWithdrawDelegatorReward;
                toProto(message: _37.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _37.MsgWithdrawDelegatorReward): _37.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _37.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _37.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_37.MsgWithdrawDelegatorRewardResponse>): _37.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _37.MsgWithdrawDelegatorRewardResponseAmino): _37.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _37.MsgWithdrawDelegatorRewardResponse): _37.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _37.MsgWithdrawDelegatorRewardResponseAminoMsg): _37.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _37.MsgWithdrawDelegatorRewardResponse): _37.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _37.MsgWithdrawDelegatorRewardResponseProtoMsg): _37.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _37.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _37.MsgWithdrawDelegatorRewardResponse): _37.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _37.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_37.MsgWithdrawValidatorCommission>): _37.MsgWithdrawValidatorCommission;
                fromAmino(object: _37.MsgWithdrawValidatorCommissionAmino): _37.MsgWithdrawValidatorCommission;
                toAmino(message: _37.MsgWithdrawValidatorCommission): _37.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _37.MsgWithdrawValidatorCommissionAminoMsg): _37.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _37.MsgWithdrawValidatorCommission): _37.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _37.MsgWithdrawValidatorCommissionProtoMsg): _37.MsgWithdrawValidatorCommission;
                toProto(message: _37.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _37.MsgWithdrawValidatorCommission): _37.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _37.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _37.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_37.MsgWithdrawValidatorCommissionResponse>): _37.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _37.MsgWithdrawValidatorCommissionResponseAmino): _37.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _37.MsgWithdrawValidatorCommissionResponse): _37.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _37.MsgWithdrawValidatorCommissionResponseAminoMsg): _37.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _37.MsgWithdrawValidatorCommissionResponse): _37.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _37.MsgWithdrawValidatorCommissionResponseProtoMsg): _37.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _37.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _37.MsgWithdrawValidatorCommissionResponse): _37.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _37.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.MsgFundCommunityPool;
                fromPartial(object: Partial<_37.MsgFundCommunityPool>): _37.MsgFundCommunityPool;
                fromAmino(object: _37.MsgFundCommunityPoolAmino): _37.MsgFundCommunityPool;
                toAmino(message: _37.MsgFundCommunityPool): _37.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _37.MsgFundCommunityPoolAminoMsg): _37.MsgFundCommunityPool;
                toAminoMsg(message: _37.MsgFundCommunityPool): _37.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _37.MsgFundCommunityPoolProtoMsg): _37.MsgFundCommunityPool;
                toProto(message: _37.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _37.MsgFundCommunityPool): _37.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _37.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _37.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_37.MsgFundCommunityPoolResponse>): _37.MsgFundCommunityPoolResponse;
                fromAmino(_: _37.MsgFundCommunityPoolResponseAmino): _37.MsgFundCommunityPoolResponse;
                toAmino(_: _37.MsgFundCommunityPoolResponse): _37.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _37.MsgFundCommunityPoolResponseAminoMsg): _37.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _37.MsgFundCommunityPoolResponse): _37.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _37.MsgFundCommunityPoolResponseProtoMsg): _37.MsgFundCommunityPoolResponse;
                toProto(message: _37.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _37.MsgFundCommunityPoolResponse): _37.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _36.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _36.QueryParamsRequest;
                fromPartial(_: Partial<_36.QueryParamsRequest>): _36.QueryParamsRequest;
                fromAmino(_: _36.QueryParamsRequestAmino): _36.QueryParamsRequest;
                toAmino(_: _36.QueryParamsRequest): _36.QueryParamsRequestAmino;
                fromAminoMsg(object: _36.QueryParamsRequestAminoMsg): _36.QueryParamsRequest;
                toAminoMsg(message: _36.QueryParamsRequest): _36.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryParamsRequestProtoMsg): _36.QueryParamsRequest;
                toProto(message: _36.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryParamsRequest): _36.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _36.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryParamsResponse;
                fromPartial(object: Partial<_36.QueryParamsResponse>): _36.QueryParamsResponse;
                fromAmino(object: _36.QueryParamsResponseAmino): _36.QueryParamsResponse;
                toAmino(message: _36.QueryParamsResponse): _36.QueryParamsResponseAmino;
                fromAminoMsg(object: _36.QueryParamsResponseAminoMsg): _36.QueryParamsResponse;
                toAminoMsg(message: _36.QueryParamsResponse): _36.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryParamsResponseProtoMsg): _36.QueryParamsResponse;
                toProto(message: _36.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryParamsResponse): _36.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _36.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_36.QueryValidatorOutstandingRewardsRequest>): _36.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _36.QueryValidatorOutstandingRewardsRequestAmino): _36.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _36.QueryValidatorOutstandingRewardsRequest): _36.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _36.QueryValidatorOutstandingRewardsRequestAminoMsg): _36.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _36.QueryValidatorOutstandingRewardsRequest): _36.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryValidatorOutstandingRewardsRequestProtoMsg): _36.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _36.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryValidatorOutstandingRewardsRequest): _36.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _36.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_36.QueryValidatorOutstandingRewardsResponse>): _36.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _36.QueryValidatorOutstandingRewardsResponseAmino): _36.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _36.QueryValidatorOutstandingRewardsResponse): _36.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _36.QueryValidatorOutstandingRewardsResponseAminoMsg): _36.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _36.QueryValidatorOutstandingRewardsResponse): _36.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryValidatorOutstandingRewardsResponseProtoMsg): _36.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _36.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryValidatorOutstandingRewardsResponse): _36.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _36.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_36.QueryValidatorCommissionRequest>): _36.QueryValidatorCommissionRequest;
                fromAmino(object: _36.QueryValidatorCommissionRequestAmino): _36.QueryValidatorCommissionRequest;
                toAmino(message: _36.QueryValidatorCommissionRequest): _36.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _36.QueryValidatorCommissionRequestAminoMsg): _36.QueryValidatorCommissionRequest;
                toAminoMsg(message: _36.QueryValidatorCommissionRequest): _36.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _36.QueryValidatorCommissionRequestProtoMsg): _36.QueryValidatorCommissionRequest;
                toProto(message: _36.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _36.QueryValidatorCommissionRequest): _36.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _36.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_36.QueryValidatorCommissionResponse>): _36.QueryValidatorCommissionResponse;
                fromAmino(object: _36.QueryValidatorCommissionResponseAmino): _36.QueryValidatorCommissionResponse;
                toAmino(message: _36.QueryValidatorCommissionResponse): _36.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _36.QueryValidatorCommissionResponseAminoMsg): _36.QueryValidatorCommissionResponse;
                toAminoMsg(message: _36.QueryValidatorCommissionResponse): _36.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _36.QueryValidatorCommissionResponseProtoMsg): _36.QueryValidatorCommissionResponse;
                toProto(message: _36.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _36.QueryValidatorCommissionResponse): _36.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _36.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_36.QueryValidatorSlashesRequest>): _36.QueryValidatorSlashesRequest;
                fromAmino(object: _36.QueryValidatorSlashesRequestAmino): _36.QueryValidatorSlashesRequest;
                toAmino(message: _36.QueryValidatorSlashesRequest): _36.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _36.QueryValidatorSlashesRequestAminoMsg): _36.QueryValidatorSlashesRequest;
                toAminoMsg(message: _36.QueryValidatorSlashesRequest): _36.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _36.QueryValidatorSlashesRequestProtoMsg): _36.QueryValidatorSlashesRequest;
                toProto(message: _36.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _36.QueryValidatorSlashesRequest): _36.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _36.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_36.QueryValidatorSlashesResponse>): _36.QueryValidatorSlashesResponse;
                fromAmino(object: _36.QueryValidatorSlashesResponseAmino): _36.QueryValidatorSlashesResponse;
                toAmino(message: _36.QueryValidatorSlashesResponse): _36.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _36.QueryValidatorSlashesResponseAminoMsg): _36.QueryValidatorSlashesResponse;
                toAminoMsg(message: _36.QueryValidatorSlashesResponse): _36.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _36.QueryValidatorSlashesResponseProtoMsg): _36.QueryValidatorSlashesResponse;
                toProto(message: _36.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _36.QueryValidatorSlashesResponse): _36.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _36.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_36.QueryDelegationRewardsRequest>): _36.QueryDelegationRewardsRequest;
                fromAmino(object: _36.QueryDelegationRewardsRequestAmino): _36.QueryDelegationRewardsRequest;
                toAmino(message: _36.QueryDelegationRewardsRequest): _36.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _36.QueryDelegationRewardsRequestAminoMsg): _36.QueryDelegationRewardsRequest;
                toAminoMsg(message: _36.QueryDelegationRewardsRequest): _36.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryDelegationRewardsRequestProtoMsg): _36.QueryDelegationRewardsRequest;
                toProto(message: _36.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryDelegationRewardsRequest): _36.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _36.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_36.QueryDelegationRewardsResponse>): _36.QueryDelegationRewardsResponse;
                fromAmino(object: _36.QueryDelegationRewardsResponseAmino): _36.QueryDelegationRewardsResponse;
                toAmino(message: _36.QueryDelegationRewardsResponse): _36.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _36.QueryDelegationRewardsResponseAminoMsg): _36.QueryDelegationRewardsResponse;
                toAminoMsg(message: _36.QueryDelegationRewardsResponse): _36.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryDelegationRewardsResponseProtoMsg): _36.QueryDelegationRewardsResponse;
                toProto(message: _36.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryDelegationRewardsResponse): _36.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _36.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_36.QueryDelegationTotalRewardsRequest>): _36.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _36.QueryDelegationTotalRewardsRequestAmino): _36.QueryDelegationTotalRewardsRequest;
                toAmino(message: _36.QueryDelegationTotalRewardsRequest): _36.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _36.QueryDelegationTotalRewardsRequestAminoMsg): _36.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _36.QueryDelegationTotalRewardsRequest): _36.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryDelegationTotalRewardsRequestProtoMsg): _36.QueryDelegationTotalRewardsRequest;
                toProto(message: _36.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryDelegationTotalRewardsRequest): _36.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _36.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_36.QueryDelegationTotalRewardsResponse>): _36.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _36.QueryDelegationTotalRewardsResponseAmino): _36.QueryDelegationTotalRewardsResponse;
                toAmino(message: _36.QueryDelegationTotalRewardsResponse): _36.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _36.QueryDelegationTotalRewardsResponseAminoMsg): _36.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _36.QueryDelegationTotalRewardsResponse): _36.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryDelegationTotalRewardsResponseProtoMsg): _36.QueryDelegationTotalRewardsResponse;
                toProto(message: _36.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryDelegationTotalRewardsResponse): _36.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _36.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_36.QueryDelegatorValidatorsRequest>): _36.QueryDelegatorValidatorsRequest;
                fromAmino(object: _36.QueryDelegatorValidatorsRequestAmino): _36.QueryDelegatorValidatorsRequest;
                toAmino(message: _36.QueryDelegatorValidatorsRequest): _36.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _36.QueryDelegatorValidatorsRequestAminoMsg): _36.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _36.QueryDelegatorValidatorsRequest): _36.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryDelegatorValidatorsRequestProtoMsg): _36.QueryDelegatorValidatorsRequest;
                toProto(message: _36.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryDelegatorValidatorsRequest): _36.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _36.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_36.QueryDelegatorValidatorsResponse>): _36.QueryDelegatorValidatorsResponse;
                fromAmino(object: _36.QueryDelegatorValidatorsResponseAmino): _36.QueryDelegatorValidatorsResponse;
                toAmino(message: _36.QueryDelegatorValidatorsResponse): _36.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _36.QueryDelegatorValidatorsResponseAminoMsg): _36.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _36.QueryDelegatorValidatorsResponse): _36.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryDelegatorValidatorsResponseProtoMsg): _36.QueryDelegatorValidatorsResponse;
                toProto(message: _36.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryDelegatorValidatorsResponse): _36.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _36.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_36.QueryDelegatorWithdrawAddressRequest>): _36.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _36.QueryDelegatorWithdrawAddressRequestAmino): _36.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _36.QueryDelegatorWithdrawAddressRequest): _36.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _36.QueryDelegatorWithdrawAddressRequestAminoMsg): _36.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _36.QueryDelegatorWithdrawAddressRequest): _36.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _36.QueryDelegatorWithdrawAddressRequestProtoMsg): _36.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _36.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _36.QueryDelegatorWithdrawAddressRequest): _36.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _36.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_36.QueryDelegatorWithdrawAddressResponse>): _36.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _36.QueryDelegatorWithdrawAddressResponseAmino): _36.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _36.QueryDelegatorWithdrawAddressResponse): _36.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _36.QueryDelegatorWithdrawAddressResponseAminoMsg): _36.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _36.QueryDelegatorWithdrawAddressResponse): _36.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _36.QueryDelegatorWithdrawAddressResponseProtoMsg): _36.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _36.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _36.QueryDelegatorWithdrawAddressResponse): _36.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _36.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _36.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_36.QueryCommunityPoolRequest>): _36.QueryCommunityPoolRequest;
                fromAmino(_: _36.QueryCommunityPoolRequestAmino): _36.QueryCommunityPoolRequest;
                toAmino(_: _36.QueryCommunityPoolRequest): _36.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _36.QueryCommunityPoolRequestAminoMsg): _36.QueryCommunityPoolRequest;
                toAminoMsg(message: _36.QueryCommunityPoolRequest): _36.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _36.QueryCommunityPoolRequestProtoMsg): _36.QueryCommunityPoolRequest;
                toProto(message: _36.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _36.QueryCommunityPoolRequest): _36.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _36.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_36.QueryCommunityPoolResponse>): _36.QueryCommunityPoolResponse;
                fromAmino(object: _36.QueryCommunityPoolResponseAmino): _36.QueryCommunityPoolResponse;
                toAmino(message: _36.QueryCommunityPoolResponse): _36.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _36.QueryCommunityPoolResponseAminoMsg): _36.QueryCommunityPoolResponse;
                toAminoMsg(message: _36.QueryCommunityPoolResponse): _36.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _36.QueryCommunityPoolResponseProtoMsg): _36.QueryCommunityPoolResponse;
                toProto(message: _36.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _36.QueryCommunityPoolResponse): _36.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _35.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_35.DelegatorWithdrawInfo>): _35.DelegatorWithdrawInfo;
                fromAmino(object: _35.DelegatorWithdrawInfoAmino): _35.DelegatorWithdrawInfo;
                toAmino(message: _35.DelegatorWithdrawInfo): _35.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _35.DelegatorWithdrawInfoAminoMsg): _35.DelegatorWithdrawInfo;
                toAminoMsg(message: _35.DelegatorWithdrawInfo): _35.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _35.DelegatorWithdrawInfoProtoMsg): _35.DelegatorWithdrawInfo;
                toProto(message: _35.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _35.DelegatorWithdrawInfo): _35.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _35.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_35.ValidatorOutstandingRewardsRecord>): _35.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _35.ValidatorOutstandingRewardsRecordAmino): _35.ValidatorOutstandingRewardsRecord;
                toAmino(message: _35.ValidatorOutstandingRewardsRecord): _35.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _35.ValidatorOutstandingRewardsRecordAminoMsg): _35.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _35.ValidatorOutstandingRewardsRecord): _35.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _35.ValidatorOutstandingRewardsRecordProtoMsg): _35.ValidatorOutstandingRewardsRecord;
                toProto(message: _35.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _35.ValidatorOutstandingRewardsRecord): _35.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _35.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_35.ValidatorAccumulatedCommissionRecord>): _35.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _35.ValidatorAccumulatedCommissionRecordAmino): _35.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _35.ValidatorAccumulatedCommissionRecord): _35.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _35.ValidatorAccumulatedCommissionRecordAminoMsg): _35.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _35.ValidatorAccumulatedCommissionRecord): _35.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _35.ValidatorAccumulatedCommissionRecordProtoMsg): _35.ValidatorAccumulatedCommissionRecord;
                toProto(message: _35.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _35.ValidatorAccumulatedCommissionRecord): _35.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _35.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_35.ValidatorHistoricalRewardsRecord>): _35.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _35.ValidatorHistoricalRewardsRecordAmino): _35.ValidatorHistoricalRewardsRecord;
                toAmino(message: _35.ValidatorHistoricalRewardsRecord): _35.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _35.ValidatorHistoricalRewardsRecordAminoMsg): _35.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _35.ValidatorHistoricalRewardsRecord): _35.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _35.ValidatorHistoricalRewardsRecordProtoMsg): _35.ValidatorHistoricalRewardsRecord;
                toProto(message: _35.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _35.ValidatorHistoricalRewardsRecord): _35.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _35.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_35.ValidatorCurrentRewardsRecord>): _35.ValidatorCurrentRewardsRecord;
                fromAmino(object: _35.ValidatorCurrentRewardsRecordAmino): _35.ValidatorCurrentRewardsRecord;
                toAmino(message: _35.ValidatorCurrentRewardsRecord): _35.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _35.ValidatorCurrentRewardsRecordAminoMsg): _35.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _35.ValidatorCurrentRewardsRecord): _35.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _35.ValidatorCurrentRewardsRecordProtoMsg): _35.ValidatorCurrentRewardsRecord;
                toProto(message: _35.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _35.ValidatorCurrentRewardsRecord): _35.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _35.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_35.DelegatorStartingInfoRecord>): _35.DelegatorStartingInfoRecord;
                fromAmino(object: _35.DelegatorStartingInfoRecordAmino): _35.DelegatorStartingInfoRecord;
                toAmino(message: _35.DelegatorStartingInfoRecord): _35.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _35.DelegatorStartingInfoRecordAminoMsg): _35.DelegatorStartingInfoRecord;
                toAminoMsg(message: _35.DelegatorStartingInfoRecord): _35.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _35.DelegatorStartingInfoRecordProtoMsg): _35.DelegatorStartingInfoRecord;
                toProto(message: _35.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _35.DelegatorStartingInfoRecord): _35.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _35.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_35.ValidatorSlashEventRecord>): _35.ValidatorSlashEventRecord;
                fromAmino(object: _35.ValidatorSlashEventRecordAmino): _35.ValidatorSlashEventRecord;
                toAmino(message: _35.ValidatorSlashEventRecord): _35.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _35.ValidatorSlashEventRecordAminoMsg): _35.ValidatorSlashEventRecord;
                toAminoMsg(message: _35.ValidatorSlashEventRecord): _35.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _35.ValidatorSlashEventRecordProtoMsg): _35.ValidatorSlashEventRecord;
                toProto(message: _35.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _35.ValidatorSlashEventRecord): _35.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _35.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.GenesisState;
                fromPartial(object: Partial<_35.GenesisState>): _35.GenesisState;
                fromAmino(object: _35.GenesisStateAmino): _35.GenesisState;
                toAmino(message: _35.GenesisState): _35.GenesisStateAmino;
                fromAminoMsg(object: _35.GenesisStateAminoMsg): _35.GenesisState;
                toAminoMsg(message: _35.GenesisState): _35.GenesisStateAminoMsg;
                fromProtoMsg(message: _35.GenesisStateProtoMsg): _35.GenesisState;
                toProto(message: _35.GenesisState): Uint8Array;
                toProtoMsg(message: _35.GenesisState): _35.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _34.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.Params;
                fromPartial(object: Partial<_34.Params>): _34.Params;
                fromAmino(object: _34.ParamsAmino): _34.Params;
                toAmino(message: _34.Params): _34.ParamsAmino;
                fromAminoMsg(object: _34.ParamsAminoMsg): _34.Params;
                toAminoMsg(message: _34.Params): _34.ParamsAminoMsg;
                fromProtoMsg(message: _34.ParamsProtoMsg): _34.Params;
                toProto(message: _34.Params): Uint8Array;
                toProtoMsg(message: _34.Params): _34.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _34.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_34.ValidatorHistoricalRewards>): _34.ValidatorHistoricalRewards;
                fromAmino(object: _34.ValidatorHistoricalRewardsAmino): _34.ValidatorHistoricalRewards;
                toAmino(message: _34.ValidatorHistoricalRewards): _34.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _34.ValidatorHistoricalRewardsAminoMsg): _34.ValidatorHistoricalRewards;
                toAminoMsg(message: _34.ValidatorHistoricalRewards): _34.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _34.ValidatorHistoricalRewardsProtoMsg): _34.ValidatorHistoricalRewards;
                toProto(message: _34.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _34.ValidatorHistoricalRewards): _34.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _34.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.ValidatorCurrentRewards;
                fromPartial(object: Partial<_34.ValidatorCurrentRewards>): _34.ValidatorCurrentRewards;
                fromAmino(object: _34.ValidatorCurrentRewardsAmino): _34.ValidatorCurrentRewards;
                toAmino(message: _34.ValidatorCurrentRewards): _34.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _34.ValidatorCurrentRewardsAminoMsg): _34.ValidatorCurrentRewards;
                toAminoMsg(message: _34.ValidatorCurrentRewards): _34.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _34.ValidatorCurrentRewardsProtoMsg): _34.ValidatorCurrentRewards;
                toProto(message: _34.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _34.ValidatorCurrentRewards): _34.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _34.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_34.ValidatorAccumulatedCommission>): _34.ValidatorAccumulatedCommission;
                fromAmino(object: _34.ValidatorAccumulatedCommissionAmino): _34.ValidatorAccumulatedCommission;
                toAmino(message: _34.ValidatorAccumulatedCommission): _34.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _34.ValidatorAccumulatedCommissionAminoMsg): _34.ValidatorAccumulatedCommission;
                toAminoMsg(message: _34.ValidatorAccumulatedCommission): _34.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _34.ValidatorAccumulatedCommissionProtoMsg): _34.ValidatorAccumulatedCommission;
                toProto(message: _34.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _34.ValidatorAccumulatedCommission): _34.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _34.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_34.ValidatorOutstandingRewards>): _34.ValidatorOutstandingRewards;
                fromAmino(object: _34.ValidatorOutstandingRewardsAmino): _34.ValidatorOutstandingRewards;
                toAmino(message: _34.ValidatorOutstandingRewards): _34.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _34.ValidatorOutstandingRewardsAminoMsg): _34.ValidatorOutstandingRewards;
                toAminoMsg(message: _34.ValidatorOutstandingRewards): _34.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _34.ValidatorOutstandingRewardsProtoMsg): _34.ValidatorOutstandingRewards;
                toProto(message: _34.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _34.ValidatorOutstandingRewards): _34.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _34.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.ValidatorSlashEvent;
                fromPartial(object: Partial<_34.ValidatorSlashEvent>): _34.ValidatorSlashEvent;
                fromAmino(object: _34.ValidatorSlashEventAmino): _34.ValidatorSlashEvent;
                toAmino(message: _34.ValidatorSlashEvent): _34.ValidatorSlashEventAmino;
                fromAminoMsg(object: _34.ValidatorSlashEventAminoMsg): _34.ValidatorSlashEvent;
                toAminoMsg(message: _34.ValidatorSlashEvent): _34.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _34.ValidatorSlashEventProtoMsg): _34.ValidatorSlashEvent;
                toProto(message: _34.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _34.ValidatorSlashEvent): _34.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _34.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.ValidatorSlashEvents;
                fromPartial(object: Partial<_34.ValidatorSlashEvents>): _34.ValidatorSlashEvents;
                fromAmino(object: _34.ValidatorSlashEventsAmino): _34.ValidatorSlashEvents;
                toAmino(message: _34.ValidatorSlashEvents): _34.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _34.ValidatorSlashEventsAminoMsg): _34.ValidatorSlashEvents;
                toAminoMsg(message: _34.ValidatorSlashEvents): _34.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _34.ValidatorSlashEventsProtoMsg): _34.ValidatorSlashEvents;
                toProto(message: _34.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _34.ValidatorSlashEvents): _34.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _34.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.FeePool;
                fromPartial(object: Partial<_34.FeePool>): _34.FeePool;
                fromAmino(object: _34.FeePoolAmino): _34.FeePool;
                toAmino(message: _34.FeePool): _34.FeePoolAmino;
                fromAminoMsg(object: _34.FeePoolAminoMsg): _34.FeePool;
                toAminoMsg(message: _34.FeePool): _34.FeePoolAminoMsg;
                fromProtoMsg(message: _34.FeePoolProtoMsg): _34.FeePool;
                toProto(message: _34.FeePool): Uint8Array;
                toProtoMsg(message: _34.FeePool): _34.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _34.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_34.CommunityPoolSpendProposal>): _34.CommunityPoolSpendProposal;
                fromAmino(object: _34.CommunityPoolSpendProposalAmino): _34.CommunityPoolSpendProposal;
                toAmino(message: _34.CommunityPoolSpendProposal): _34.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _34.CommunityPoolSpendProposalAminoMsg): _34.CommunityPoolSpendProposal;
                toAminoMsg(message: _34.CommunityPoolSpendProposal): _34.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _34.CommunityPoolSpendProposalProtoMsg): _34.CommunityPoolSpendProposal;
                toProto(message: _34.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _34.CommunityPoolSpendProposal): _34.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _34.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.DelegatorStartingInfo;
                fromPartial(object: Partial<_34.DelegatorStartingInfo>): _34.DelegatorStartingInfo;
                fromAmino(object: _34.DelegatorStartingInfoAmino): _34.DelegatorStartingInfo;
                toAmino(message: _34.DelegatorStartingInfo): _34.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _34.DelegatorStartingInfoAminoMsg): _34.DelegatorStartingInfo;
                toAminoMsg(message: _34.DelegatorStartingInfo): _34.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _34.DelegatorStartingInfoProtoMsg): _34.DelegatorStartingInfo;
                toProto(message: _34.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _34.DelegatorStartingInfo): _34.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _34.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.DelegationDelegatorReward;
                fromPartial(object: Partial<_34.DelegationDelegatorReward>): _34.DelegationDelegatorReward;
                fromAmino(object: _34.DelegationDelegatorRewardAmino): _34.DelegationDelegatorReward;
                toAmino(message: _34.DelegationDelegatorReward): _34.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _34.DelegationDelegatorRewardAminoMsg): _34.DelegationDelegatorReward;
                toAminoMsg(message: _34.DelegationDelegatorReward): _34.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _34.DelegationDelegatorRewardProtoMsg): _34.DelegationDelegatorReward;
                toProto(message: _34.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _34.DelegationDelegatorReward): _34.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _34.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_34.CommunityPoolSpendProposalWithDeposit>): _34.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _34.CommunityPoolSpendProposalWithDepositAmino): _34.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _34.CommunityPoolSpendProposalWithDeposit): _34.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _34.CommunityPoolSpendProposalWithDepositAminoMsg): _34.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _34.CommunityPoolSpendProposalWithDeposit): _34.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _34.CommunityPoolSpendProposalWithDepositProtoMsg): _34.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _34.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _34.CommunityPoolSpendProposalWithDeposit): _34.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _160.MsgClientImpl;
            QueryClientImpl: typeof _147.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _40.QueryEvidenceRequest): Promise<_40.QueryEvidenceResponse>;
                allEvidence(request?: _40.QueryAllEvidenceRequest): Promise<_40.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _132.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _41.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _41.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _41.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _41.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _41.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _41.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _41.MsgSubmitEvidence) => _41.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _41.MsgSubmitEvidenceAmino) => _41.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _41.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgSubmitEvidence;
                fromPartial(object: Partial<_41.MsgSubmitEvidence>): _41.MsgSubmitEvidence;
                fromAmino(object: _41.MsgSubmitEvidenceAmino): _41.MsgSubmitEvidence;
                toAmino(message: _41.MsgSubmitEvidence): _41.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _41.MsgSubmitEvidenceAminoMsg): _41.MsgSubmitEvidence;
                toAminoMsg(message: _41.MsgSubmitEvidence): _41.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _41.MsgSubmitEvidenceProtoMsg): _41.MsgSubmitEvidence;
                toProto(message: _41.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _41.MsgSubmitEvidence): _41.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _41.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_41.MsgSubmitEvidenceResponse>): _41.MsgSubmitEvidenceResponse;
                fromAmino(object: _41.MsgSubmitEvidenceResponseAmino): _41.MsgSubmitEvidenceResponse;
                toAmino(message: _41.MsgSubmitEvidenceResponse): _41.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _41.MsgSubmitEvidenceResponseAminoMsg): _41.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _41.MsgSubmitEvidenceResponse): _41.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _41.MsgSubmitEvidenceResponseProtoMsg): _41.MsgSubmitEvidenceResponse;
                toProto(message: _41.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _41.MsgSubmitEvidenceResponse): _41.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _40.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryEvidenceRequest;
                fromPartial(object: Partial<_40.QueryEvidenceRequest>): _40.QueryEvidenceRequest;
                fromAmino(object: _40.QueryEvidenceRequestAmino): _40.QueryEvidenceRequest;
                toAmino(message: _40.QueryEvidenceRequest): _40.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _40.QueryEvidenceRequestAminoMsg): _40.QueryEvidenceRequest;
                toAminoMsg(message: _40.QueryEvidenceRequest): _40.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _40.QueryEvidenceRequestProtoMsg): _40.QueryEvidenceRequest;
                toProto(message: _40.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _40.QueryEvidenceRequest): _40.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _40.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryEvidenceResponse;
                fromPartial(object: Partial<_40.QueryEvidenceResponse>): _40.QueryEvidenceResponse;
                fromAmino(object: _40.QueryEvidenceResponseAmino): _40.QueryEvidenceResponse;
                toAmino(message: _40.QueryEvidenceResponse): _40.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _40.QueryEvidenceResponseAminoMsg): _40.QueryEvidenceResponse;
                toAminoMsg(message: _40.QueryEvidenceResponse): _40.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _40.QueryEvidenceResponseProtoMsg): _40.QueryEvidenceResponse;
                toProto(message: _40.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _40.QueryEvidenceResponse): _40.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _40.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_40.QueryAllEvidenceRequest>): _40.QueryAllEvidenceRequest;
                fromAmino(object: _40.QueryAllEvidenceRequestAmino): _40.QueryAllEvidenceRequest;
                toAmino(message: _40.QueryAllEvidenceRequest): _40.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _40.QueryAllEvidenceRequestAminoMsg): _40.QueryAllEvidenceRequest;
                toAminoMsg(message: _40.QueryAllEvidenceRequest): _40.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _40.QueryAllEvidenceRequestProtoMsg): _40.QueryAllEvidenceRequest;
                toProto(message: _40.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _40.QueryAllEvidenceRequest): _40.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _40.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_40.QueryAllEvidenceResponse>): _40.QueryAllEvidenceResponse;
                fromAmino(object: _40.QueryAllEvidenceResponseAmino): _40.QueryAllEvidenceResponse;
                toAmino(message: _40.QueryAllEvidenceResponse): _40.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _40.QueryAllEvidenceResponseAminoMsg): _40.QueryAllEvidenceResponse;
                toAminoMsg(message: _40.QueryAllEvidenceResponse): _40.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _40.QueryAllEvidenceResponseProtoMsg): _40.QueryAllEvidenceResponse;
                toProto(message: _40.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _40.QueryAllEvidenceResponse): _40.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _38.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.Equivocation;
                fromPartial(object: Partial<_38.Equivocation>): _38.Equivocation;
                fromAmino(object: _38.EquivocationAmino): _38.Equivocation;
                toAmino(message: _38.Equivocation): _38.EquivocationAmino;
                fromAminoMsg(object: _38.EquivocationAminoMsg): _38.Equivocation;
                toAminoMsg(message: _38.Equivocation): _38.EquivocationAminoMsg;
                fromProtoMsg(message: _38.EquivocationProtoMsg): _38.Equivocation;
                toProto(message: _38.Equivocation): Uint8Array;
                toProtoMsg(message: _38.Equivocation): _38.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _161.MsgClientImpl;
            QueryClientImpl: typeof _148.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _44.QueryAllowanceRequest): Promise<_44.QueryAllowanceResponse>;
                allowances(request: _44.QueryAllowancesRequest): Promise<_44.QueryAllowancesResponse>;
                allowancesByGranter(request: _44.QueryAllowancesByGranterRequest): Promise<_44.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _133.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _45.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _45.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _45.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _45.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _45.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _45.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _45.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _45.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _45.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _45.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _45.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _45.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _45.MsgGrantAllowance) => _45.MsgGrantAllowanceAmino;
                    fromAmino: (object: _45.MsgGrantAllowanceAmino) => _45.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _45.MsgRevokeAllowance) => _45.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _45.MsgRevokeAllowanceAmino) => _45.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _45.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.MsgGrantAllowance;
                fromPartial(object: Partial<_45.MsgGrantAllowance>): _45.MsgGrantAllowance;
                fromAmino(object: _45.MsgGrantAllowanceAmino): _45.MsgGrantAllowance;
                toAmino(message: _45.MsgGrantAllowance): _45.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _45.MsgGrantAllowanceAminoMsg): _45.MsgGrantAllowance;
                toAminoMsg(message: _45.MsgGrantAllowance): _45.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _45.MsgGrantAllowanceProtoMsg): _45.MsgGrantAllowance;
                toProto(message: _45.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _45.MsgGrantAllowance): _45.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _45.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _45.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_45.MsgGrantAllowanceResponse>): _45.MsgGrantAllowanceResponse;
                fromAmino(_: _45.MsgGrantAllowanceResponseAmino): _45.MsgGrantAllowanceResponse;
                toAmino(_: _45.MsgGrantAllowanceResponse): _45.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _45.MsgGrantAllowanceResponseAminoMsg): _45.MsgGrantAllowanceResponse;
                toAminoMsg(message: _45.MsgGrantAllowanceResponse): _45.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _45.MsgGrantAllowanceResponseProtoMsg): _45.MsgGrantAllowanceResponse;
                toProto(message: _45.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _45.MsgGrantAllowanceResponse): _45.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _45.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.MsgRevokeAllowance;
                fromPartial(object: Partial<_45.MsgRevokeAllowance>): _45.MsgRevokeAllowance;
                fromAmino(object: _45.MsgRevokeAllowanceAmino): _45.MsgRevokeAllowance;
                toAmino(message: _45.MsgRevokeAllowance): _45.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _45.MsgRevokeAllowanceAminoMsg): _45.MsgRevokeAllowance;
                toAminoMsg(message: _45.MsgRevokeAllowance): _45.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _45.MsgRevokeAllowanceProtoMsg): _45.MsgRevokeAllowance;
                toProto(message: _45.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _45.MsgRevokeAllowance): _45.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _45.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _45.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_45.MsgRevokeAllowanceResponse>): _45.MsgRevokeAllowanceResponse;
                fromAmino(_: _45.MsgRevokeAllowanceResponseAmino): _45.MsgRevokeAllowanceResponse;
                toAmino(_: _45.MsgRevokeAllowanceResponse): _45.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _45.MsgRevokeAllowanceResponseAminoMsg): _45.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _45.MsgRevokeAllowanceResponse): _45.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _45.MsgRevokeAllowanceResponseProtoMsg): _45.MsgRevokeAllowanceResponse;
                toProto(message: _45.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _45.MsgRevokeAllowanceResponse): _45.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _42.BasicAllowance | _42.PeriodicAllowance | _42.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _44.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryAllowanceRequest;
                fromPartial(object: Partial<_44.QueryAllowanceRequest>): _44.QueryAllowanceRequest;
                fromAmino(object: _44.QueryAllowanceRequestAmino): _44.QueryAllowanceRequest;
                toAmino(message: _44.QueryAllowanceRequest): _44.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _44.QueryAllowanceRequestAminoMsg): _44.QueryAllowanceRequest;
                toAminoMsg(message: _44.QueryAllowanceRequest): _44.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _44.QueryAllowanceRequestProtoMsg): _44.QueryAllowanceRequest;
                toProto(message: _44.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _44.QueryAllowanceRequest): _44.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _44.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryAllowanceResponse;
                fromPartial(object: Partial<_44.QueryAllowanceResponse>): _44.QueryAllowanceResponse;
                fromAmino(object: _44.QueryAllowanceResponseAmino): _44.QueryAllowanceResponse;
                toAmino(message: _44.QueryAllowanceResponse): _44.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _44.QueryAllowanceResponseAminoMsg): _44.QueryAllowanceResponse;
                toAminoMsg(message: _44.QueryAllowanceResponse): _44.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _44.QueryAllowanceResponseProtoMsg): _44.QueryAllowanceResponse;
                toProto(message: _44.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _44.QueryAllowanceResponse): _44.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _44.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryAllowancesRequest;
                fromPartial(object: Partial<_44.QueryAllowancesRequest>): _44.QueryAllowancesRequest;
                fromAmino(object: _44.QueryAllowancesRequestAmino): _44.QueryAllowancesRequest;
                toAmino(message: _44.QueryAllowancesRequest): _44.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _44.QueryAllowancesRequestAminoMsg): _44.QueryAllowancesRequest;
                toAminoMsg(message: _44.QueryAllowancesRequest): _44.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _44.QueryAllowancesRequestProtoMsg): _44.QueryAllowancesRequest;
                toProto(message: _44.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _44.QueryAllowancesRequest): _44.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _44.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryAllowancesResponse;
                fromPartial(object: Partial<_44.QueryAllowancesResponse>): _44.QueryAllowancesResponse;
                fromAmino(object: _44.QueryAllowancesResponseAmino): _44.QueryAllowancesResponse;
                toAmino(message: _44.QueryAllowancesResponse): _44.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _44.QueryAllowancesResponseAminoMsg): _44.QueryAllowancesResponse;
                toAminoMsg(message: _44.QueryAllowancesResponse): _44.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _44.QueryAllowancesResponseProtoMsg): _44.QueryAllowancesResponse;
                toProto(message: _44.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _44.QueryAllowancesResponse): _44.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _44.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_44.QueryAllowancesByGranterRequest>): _44.QueryAllowancesByGranterRequest;
                fromAmino(object: _44.QueryAllowancesByGranterRequestAmino): _44.QueryAllowancesByGranterRequest;
                toAmino(message: _44.QueryAllowancesByGranterRequest): _44.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _44.QueryAllowancesByGranterRequestAminoMsg): _44.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _44.QueryAllowancesByGranterRequest): _44.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _44.QueryAllowancesByGranterRequestProtoMsg): _44.QueryAllowancesByGranterRequest;
                toProto(message: _44.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _44.QueryAllowancesByGranterRequest): _44.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _44.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_44.QueryAllowancesByGranterResponse>): _44.QueryAllowancesByGranterResponse;
                fromAmino(object: _44.QueryAllowancesByGranterResponseAmino): _44.QueryAllowancesByGranterResponse;
                toAmino(message: _44.QueryAllowancesByGranterResponse): _44.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _44.QueryAllowancesByGranterResponseAminoMsg): _44.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _44.QueryAllowancesByGranterResponse): _44.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _44.QueryAllowancesByGranterResponseProtoMsg): _44.QueryAllowancesByGranterResponse;
                toProto(message: _44.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _44.QueryAllowancesByGranterResponse): _44.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _43.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.GenesisState;
                fromPartial(object: Partial<_43.GenesisState>): _43.GenesisState;
                fromAmino(object: _43.GenesisStateAmino): _43.GenesisState;
                toAmino(message: _43.GenesisState): _43.GenesisStateAmino;
                fromAminoMsg(object: _43.GenesisStateAminoMsg): _43.GenesisState;
                toAminoMsg(message: _43.GenesisState): _43.GenesisStateAminoMsg;
                fromProtoMsg(message: _43.GenesisStateProtoMsg): _43.GenesisState;
                toProto(message: _43.GenesisState): Uint8Array;
                toProtoMsg(message: _43.GenesisState): _43.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _42.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.BasicAllowance;
                fromPartial(object: Partial<_42.BasicAllowance>): _42.BasicAllowance;
                fromAmino(object: _42.BasicAllowanceAmino): _42.BasicAllowance;
                toAmino(message: _42.BasicAllowance): _42.BasicAllowanceAmino;
                fromAminoMsg(object: _42.BasicAllowanceAminoMsg): _42.BasicAllowance;
                toAminoMsg(message: _42.BasicAllowance): _42.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _42.BasicAllowanceProtoMsg): _42.BasicAllowance;
                toProto(message: _42.BasicAllowance): Uint8Array;
                toProtoMsg(message: _42.BasicAllowance): _42.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _42.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.PeriodicAllowance;
                fromPartial(object: Partial<_42.PeriodicAllowance>): _42.PeriodicAllowance;
                fromAmino(object: _42.PeriodicAllowanceAmino): _42.PeriodicAllowance;
                toAmino(message: _42.PeriodicAllowance): _42.PeriodicAllowanceAmino;
                fromAminoMsg(object: _42.PeriodicAllowanceAminoMsg): _42.PeriodicAllowance;
                toAminoMsg(message: _42.PeriodicAllowance): _42.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _42.PeriodicAllowanceProtoMsg): _42.PeriodicAllowance;
                toProto(message: _42.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _42.PeriodicAllowance): _42.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _42.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.AllowedMsgAllowance;
                fromPartial(object: Partial<_42.AllowedMsgAllowance>): _42.AllowedMsgAllowance;
                fromAmino(object: _42.AllowedMsgAllowanceAmino): _42.AllowedMsgAllowance;
                toAmino(message: _42.AllowedMsgAllowance): _42.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _42.AllowedMsgAllowanceAminoMsg): _42.AllowedMsgAllowance;
                toAminoMsg(message: _42.AllowedMsgAllowance): _42.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _42.AllowedMsgAllowanceProtoMsg): _42.AllowedMsgAllowance;
                toProto(message: _42.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _42.AllowedMsgAllowance): _42.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _42.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.Grant;
                fromPartial(object: Partial<_42.Grant>): _42.Grant;
                fromAmino(object: _42.GrantAmino): _42.Grant;
                toAmino(message: _42.Grant): _42.GrantAmino;
                fromAminoMsg(object: _42.GrantAminoMsg): _42.Grant;
                toAminoMsg(message: _42.Grant): _42.GrantAminoMsg;
                fromProtoMsg(message: _42.GrantProtoMsg): _42.Grant;
                toProto(message: _42.Grant): Uint8Array;
                toProtoMsg(message: _42.Grant): _42.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _46.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.GenesisState;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
                fromAmino(object: _46.GenesisStateAmino): _46.GenesisState;
                toAmino(message: _46.GenesisState): _46.GenesisStateAmino;
                fromAminoMsg(object: _46.GenesisStateAminoMsg): _46.GenesisState;
                toAminoMsg(message: _46.GenesisState): _46.GenesisStateAminoMsg;
                fromProtoMsg(message: _46.GenesisStateProtoMsg): _46.GenesisState;
                toProto(message: _46.GenesisState): Uint8Array;
                toProtoMsg(message: _46.GenesisState): _46.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _162.MsgClientImpl;
            QueryClientImpl: typeof _149.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _49.QueryProposalRequest): Promise<_49.QueryProposalResponse>;
                proposals(request: _49.QueryProposalsRequest): Promise<_49.QueryProposalsResponse>;
                vote(request: _49.QueryVoteRequest): Promise<_49.QueryVoteResponse>;
                votes(request: _49.QueryVotesRequest): Promise<_49.QueryVotesResponse>;
                params(request: _49.QueryParamsRequest): Promise<_49.QueryParamsResponse>;
                deposit(request: _49.QueryDepositRequest): Promise<_49.QueryDepositResponse>;
                deposits(request: _49.QueryDepositsRequest): Promise<_49.QueryDepositsResponse>;
                tallyResult(request: _49.QueryTallyResultRequest): Promise<_49.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _134.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _50.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _50.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _50.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _50.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _50.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _50.MsgSubmitProposal;
                    };
                    vote(value: _50.MsgVote): {
                        typeUrl: string;
                        value: _50.MsgVote;
                    };
                    voteWeighted(value: _50.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _50.MsgVoteWeighted;
                    };
                    deposit(value: _50.MsgDeposit): {
                        typeUrl: string;
                        value: _50.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _50.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _50.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _50.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _50.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _50.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _50.MsgSubmitProposal;
                    };
                    vote(value: _50.MsgVote): {
                        typeUrl: string;
                        value: _50.MsgVote;
                    };
                    voteWeighted(value: _50.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _50.MsgVoteWeighted;
                    };
                    deposit(value: _50.MsgDeposit): {
                        typeUrl: string;
                        value: _50.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _50.MsgSubmitProposal) => _50.MsgSubmitProposalAmino;
                    fromAmino: (object: _50.MsgSubmitProposalAmino) => _50.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _50.MsgVote) => _50.MsgVoteAmino;
                    fromAmino: (object: _50.MsgVoteAmino) => _50.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _50.MsgVoteWeighted) => _50.MsgVoteWeightedAmino;
                    fromAmino: (object: _50.MsgVoteWeightedAmino) => _50.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _50.MsgDeposit) => _50.MsgDepositAmino;
                    fromAmino: (object: _50.MsgDepositAmino) => _50.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _50.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgSubmitProposal;
                fromPartial(object: Partial<_50.MsgSubmitProposal>): _50.MsgSubmitProposal;
                fromAmino(object: _50.MsgSubmitProposalAmino): _50.MsgSubmitProposal;
                toAmino(message: _50.MsgSubmitProposal): _50.MsgSubmitProposalAmino;
                fromAminoMsg(object: _50.MsgSubmitProposalAminoMsg): _50.MsgSubmitProposal;
                toAminoMsg(message: _50.MsgSubmitProposal): _50.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _50.MsgSubmitProposalProtoMsg): _50.MsgSubmitProposal;
                toProto(message: _50.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _50.MsgSubmitProposal): _50.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _50.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_50.MsgSubmitProposalResponse>): _50.MsgSubmitProposalResponse;
                fromAmino(object: _50.MsgSubmitProposalResponseAmino): _50.MsgSubmitProposalResponse;
                toAmino(message: _50.MsgSubmitProposalResponse): _50.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _50.MsgSubmitProposalResponseAminoMsg): _50.MsgSubmitProposalResponse;
                toAminoMsg(message: _50.MsgSubmitProposalResponse): _50.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _50.MsgSubmitProposalResponseProtoMsg): _50.MsgSubmitProposalResponse;
                toProto(message: _50.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _50.MsgSubmitProposalResponse): _50.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _50.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgVote;
                fromPartial(object: Partial<_50.MsgVote>): _50.MsgVote;
                fromAmino(object: _50.MsgVoteAmino): _50.MsgVote;
                toAmino(message: _50.MsgVote): _50.MsgVoteAmino;
                fromAminoMsg(object: _50.MsgVoteAminoMsg): _50.MsgVote;
                toAminoMsg(message: _50.MsgVote): _50.MsgVoteAminoMsg;
                fromProtoMsg(message: _50.MsgVoteProtoMsg): _50.MsgVote;
                toProto(message: _50.MsgVote): Uint8Array;
                toProtoMsg(message: _50.MsgVote): _50.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _50.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _50.MsgVoteResponse;
                fromPartial(_: Partial<_50.MsgVoteResponse>): _50.MsgVoteResponse;
                fromAmino(_: _50.MsgVoteResponseAmino): _50.MsgVoteResponse;
                toAmino(_: _50.MsgVoteResponse): _50.MsgVoteResponseAmino;
                fromAminoMsg(object: _50.MsgVoteResponseAminoMsg): _50.MsgVoteResponse;
                toAminoMsg(message: _50.MsgVoteResponse): _50.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _50.MsgVoteResponseProtoMsg): _50.MsgVoteResponse;
                toProto(message: _50.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _50.MsgVoteResponse): _50.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _50.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgVoteWeighted;
                fromPartial(object: Partial<_50.MsgVoteWeighted>): _50.MsgVoteWeighted;
                fromAmino(object: _50.MsgVoteWeightedAmino): _50.MsgVoteWeighted;
                toAmino(message: _50.MsgVoteWeighted): _50.MsgVoteWeightedAmino;
                fromAminoMsg(object: _50.MsgVoteWeightedAminoMsg): _50.MsgVoteWeighted;
                toAminoMsg(message: _50.MsgVoteWeighted): _50.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _50.MsgVoteWeightedProtoMsg): _50.MsgVoteWeighted;
                toProto(message: _50.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _50.MsgVoteWeighted): _50.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _50.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _50.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_50.MsgVoteWeightedResponse>): _50.MsgVoteWeightedResponse;
                fromAmino(_: _50.MsgVoteWeightedResponseAmino): _50.MsgVoteWeightedResponse;
                toAmino(_: _50.MsgVoteWeightedResponse): _50.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _50.MsgVoteWeightedResponseAminoMsg): _50.MsgVoteWeightedResponse;
                toAminoMsg(message: _50.MsgVoteWeightedResponse): _50.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _50.MsgVoteWeightedResponseProtoMsg): _50.MsgVoteWeightedResponse;
                toProto(message: _50.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _50.MsgVoteWeightedResponse): _50.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _50.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgDeposit;
                fromPartial(object: Partial<_50.MsgDeposit>): _50.MsgDeposit;
                fromAmino(object: _50.MsgDepositAmino): _50.MsgDeposit;
                toAmino(message: _50.MsgDeposit): _50.MsgDepositAmino;
                fromAminoMsg(object: _50.MsgDepositAminoMsg): _50.MsgDeposit;
                toAminoMsg(message: _50.MsgDeposit): _50.MsgDepositAminoMsg;
                fromProtoMsg(message: _50.MsgDepositProtoMsg): _50.MsgDeposit;
                toProto(message: _50.MsgDeposit): Uint8Array;
                toProtoMsg(message: _50.MsgDeposit): _50.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _50.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _50.MsgDepositResponse;
                fromPartial(_: Partial<_50.MsgDepositResponse>): _50.MsgDepositResponse;
                fromAmino(_: _50.MsgDepositResponseAmino): _50.MsgDepositResponse;
                toAmino(_: _50.MsgDepositResponse): _50.MsgDepositResponseAmino;
                fromAminoMsg(object: _50.MsgDepositResponseAminoMsg): _50.MsgDepositResponse;
                toAminoMsg(message: _50.MsgDepositResponse): _50.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _50.MsgDepositResponseProtoMsg): _50.MsgDepositResponse;
                toProto(message: _50.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _50.MsgDepositResponse): _50.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _48.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _49.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryProposalRequest;
                fromPartial(object: Partial<_49.QueryProposalRequest>): _49.QueryProposalRequest;
                fromAmino(object: _49.QueryProposalRequestAmino): _49.QueryProposalRequest;
                toAmino(message: _49.QueryProposalRequest): _49.QueryProposalRequestAmino;
                fromAminoMsg(object: _49.QueryProposalRequestAminoMsg): _49.QueryProposalRequest;
                toAminoMsg(message: _49.QueryProposalRequest): _49.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _49.QueryProposalRequestProtoMsg): _49.QueryProposalRequest;
                toProto(message: _49.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _49.QueryProposalRequest): _49.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _49.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryProposalResponse;
                fromPartial(object: Partial<_49.QueryProposalResponse>): _49.QueryProposalResponse;
                fromAmino(object: _49.QueryProposalResponseAmino): _49.QueryProposalResponse;
                toAmino(message: _49.QueryProposalResponse): _49.QueryProposalResponseAmino;
                fromAminoMsg(object: _49.QueryProposalResponseAminoMsg): _49.QueryProposalResponse;
                toAminoMsg(message: _49.QueryProposalResponse): _49.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _49.QueryProposalResponseProtoMsg): _49.QueryProposalResponse;
                toProto(message: _49.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _49.QueryProposalResponse): _49.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _49.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryProposalsRequest;
                fromPartial(object: Partial<_49.QueryProposalsRequest>): _49.QueryProposalsRequest;
                fromAmino(object: _49.QueryProposalsRequestAmino): _49.QueryProposalsRequest;
                toAmino(message: _49.QueryProposalsRequest): _49.QueryProposalsRequestAmino;
                fromAminoMsg(object: _49.QueryProposalsRequestAminoMsg): _49.QueryProposalsRequest;
                toAminoMsg(message: _49.QueryProposalsRequest): _49.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _49.QueryProposalsRequestProtoMsg): _49.QueryProposalsRequest;
                toProto(message: _49.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _49.QueryProposalsRequest): _49.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _49.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryProposalsResponse;
                fromPartial(object: Partial<_49.QueryProposalsResponse>): _49.QueryProposalsResponse;
                fromAmino(object: _49.QueryProposalsResponseAmino): _49.QueryProposalsResponse;
                toAmino(message: _49.QueryProposalsResponse): _49.QueryProposalsResponseAmino;
                fromAminoMsg(object: _49.QueryProposalsResponseAminoMsg): _49.QueryProposalsResponse;
                toAminoMsg(message: _49.QueryProposalsResponse): _49.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _49.QueryProposalsResponseProtoMsg): _49.QueryProposalsResponse;
                toProto(message: _49.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _49.QueryProposalsResponse): _49.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _49.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryVoteRequest;
                fromPartial(object: Partial<_49.QueryVoteRequest>): _49.QueryVoteRequest;
                fromAmino(object: _49.QueryVoteRequestAmino): _49.QueryVoteRequest;
                toAmino(message: _49.QueryVoteRequest): _49.QueryVoteRequestAmino;
                fromAminoMsg(object: _49.QueryVoteRequestAminoMsg): _49.QueryVoteRequest;
                toAminoMsg(message: _49.QueryVoteRequest): _49.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _49.QueryVoteRequestProtoMsg): _49.QueryVoteRequest;
                toProto(message: _49.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _49.QueryVoteRequest): _49.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _49.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryVoteResponse;
                fromPartial(object: Partial<_49.QueryVoteResponse>): _49.QueryVoteResponse;
                fromAmino(object: _49.QueryVoteResponseAmino): _49.QueryVoteResponse;
                toAmino(message: _49.QueryVoteResponse): _49.QueryVoteResponseAmino;
                fromAminoMsg(object: _49.QueryVoteResponseAminoMsg): _49.QueryVoteResponse;
                toAminoMsg(message: _49.QueryVoteResponse): _49.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _49.QueryVoteResponseProtoMsg): _49.QueryVoteResponse;
                toProto(message: _49.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _49.QueryVoteResponse): _49.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _49.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryVotesRequest;
                fromPartial(object: Partial<_49.QueryVotesRequest>): _49.QueryVotesRequest;
                fromAmino(object: _49.QueryVotesRequestAmino): _49.QueryVotesRequest;
                toAmino(message: _49.QueryVotesRequest): _49.QueryVotesRequestAmino;
                fromAminoMsg(object: _49.QueryVotesRequestAminoMsg): _49.QueryVotesRequest;
                toAminoMsg(message: _49.QueryVotesRequest): _49.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _49.QueryVotesRequestProtoMsg): _49.QueryVotesRequest;
                toProto(message: _49.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _49.QueryVotesRequest): _49.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _49.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryVotesResponse;
                fromPartial(object: Partial<_49.QueryVotesResponse>): _49.QueryVotesResponse;
                fromAmino(object: _49.QueryVotesResponseAmino): _49.QueryVotesResponse;
                toAmino(message: _49.QueryVotesResponse): _49.QueryVotesResponseAmino;
                fromAminoMsg(object: _49.QueryVotesResponseAminoMsg): _49.QueryVotesResponse;
                toAminoMsg(message: _49.QueryVotesResponse): _49.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _49.QueryVotesResponseProtoMsg): _49.QueryVotesResponse;
                toProto(message: _49.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _49.QueryVotesResponse): _49.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _49.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryParamsRequest;
                fromPartial(object: Partial<_49.QueryParamsRequest>): _49.QueryParamsRequest;
                fromAmino(object: _49.QueryParamsRequestAmino): _49.QueryParamsRequest;
                toAmino(message: _49.QueryParamsRequest): _49.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _49.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryDepositRequest;
                fromPartial(object: Partial<_49.QueryDepositRequest>): _49.QueryDepositRequest;
                fromAmino(object: _49.QueryDepositRequestAmino): _49.QueryDepositRequest;
                toAmino(message: _49.QueryDepositRequest): _49.QueryDepositRequestAmino;
                fromAminoMsg(object: _49.QueryDepositRequestAminoMsg): _49.QueryDepositRequest;
                toAminoMsg(message: _49.QueryDepositRequest): _49.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _49.QueryDepositRequestProtoMsg): _49.QueryDepositRequest;
                toProto(message: _49.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _49.QueryDepositRequest): _49.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _49.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryDepositResponse;
                fromPartial(object: Partial<_49.QueryDepositResponse>): _49.QueryDepositResponse;
                fromAmino(object: _49.QueryDepositResponseAmino): _49.QueryDepositResponse;
                toAmino(message: _49.QueryDepositResponse): _49.QueryDepositResponseAmino;
                fromAminoMsg(object: _49.QueryDepositResponseAminoMsg): _49.QueryDepositResponse;
                toAminoMsg(message: _49.QueryDepositResponse): _49.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _49.QueryDepositResponseProtoMsg): _49.QueryDepositResponse;
                toProto(message: _49.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _49.QueryDepositResponse): _49.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _49.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryDepositsRequest;
                fromPartial(object: Partial<_49.QueryDepositsRequest>): _49.QueryDepositsRequest;
                fromAmino(object: _49.QueryDepositsRequestAmino): _49.QueryDepositsRequest;
                toAmino(message: _49.QueryDepositsRequest): _49.QueryDepositsRequestAmino;
                fromAminoMsg(object: _49.QueryDepositsRequestAminoMsg): _49.QueryDepositsRequest;
                toAminoMsg(message: _49.QueryDepositsRequest): _49.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _49.QueryDepositsRequestProtoMsg): _49.QueryDepositsRequest;
                toProto(message: _49.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _49.QueryDepositsRequest): _49.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _49.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryDepositsResponse;
                fromPartial(object: Partial<_49.QueryDepositsResponse>): _49.QueryDepositsResponse;
                fromAmino(object: _49.QueryDepositsResponseAmino): _49.QueryDepositsResponse;
                toAmino(message: _49.QueryDepositsResponse): _49.QueryDepositsResponseAmino;
                fromAminoMsg(object: _49.QueryDepositsResponseAminoMsg): _49.QueryDepositsResponse;
                toAminoMsg(message: _49.QueryDepositsResponse): _49.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _49.QueryDepositsResponseProtoMsg): _49.QueryDepositsResponse;
                toProto(message: _49.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _49.QueryDepositsResponse): _49.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _49.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryTallyResultRequest;
                fromPartial(object: Partial<_49.QueryTallyResultRequest>): _49.QueryTallyResultRequest;
                fromAmino(object: _49.QueryTallyResultRequestAmino): _49.QueryTallyResultRequest;
                toAmino(message: _49.QueryTallyResultRequest): _49.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _49.QueryTallyResultRequestAminoMsg): _49.QueryTallyResultRequest;
                toAminoMsg(message: _49.QueryTallyResultRequest): _49.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _49.QueryTallyResultRequestProtoMsg): _49.QueryTallyResultRequest;
                toProto(message: _49.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _49.QueryTallyResultRequest): _49.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _49.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryTallyResultResponse;
                fromPartial(object: Partial<_49.QueryTallyResultResponse>): _49.QueryTallyResultResponse;
                fromAmino(object: _49.QueryTallyResultResponseAmino): _49.QueryTallyResultResponse;
                toAmino(message: _49.QueryTallyResultResponse): _49.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _49.QueryTallyResultResponseAminoMsg): _49.QueryTallyResultResponse;
                toAminoMsg(message: _49.QueryTallyResultResponse): _49.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _49.QueryTallyResultResponseProtoMsg): _49.QueryTallyResultResponse;
                toProto(message: _49.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _49.QueryTallyResultResponse): _49.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _48.VoteOption;
            voteOptionToJSON(object: _48.VoteOption): string;
            proposalStatusFromJSON(object: any): _48.ProposalStatus;
            proposalStatusToJSON(object: _48.ProposalStatus): string;
            VoteOption: typeof _48.VoteOption;
            VoteOptionSDKType: typeof _48.VoteOption;
            VoteOptionAmino: typeof _48.VoteOption;
            ProposalStatus: typeof _48.ProposalStatus;
            ProposalStatusSDKType: typeof _48.ProposalStatus;
            ProposalStatusAmino: typeof _48.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _48.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.WeightedVoteOption;
                fromPartial(object: Partial<_48.WeightedVoteOption>): _48.WeightedVoteOption;
                fromAmino(object: _48.WeightedVoteOptionAmino): _48.WeightedVoteOption;
                toAmino(message: _48.WeightedVoteOption): _48.WeightedVoteOptionAmino;
                fromAminoMsg(object: _48.WeightedVoteOptionAminoMsg): _48.WeightedVoteOption;
                toAminoMsg(message: _48.WeightedVoteOption): _48.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _48.WeightedVoteOptionProtoMsg): _48.WeightedVoteOption;
                toProto(message: _48.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _48.WeightedVoteOption): _48.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _48.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.TextProposal;
                fromPartial(object: Partial<_48.TextProposal>): _48.TextProposal;
                fromAmino(object: _48.TextProposalAmino): _48.TextProposal;
                toAmino(message: _48.TextProposal): _48.TextProposalAmino;
                fromAminoMsg(object: _48.TextProposalAminoMsg): _48.TextProposal;
                toAminoMsg(message: _48.TextProposal): _48.TextProposalAminoMsg;
                fromProtoMsg(message: _48.TextProposalProtoMsg): _48.TextProposal;
                toProto(message: _48.TextProposal): Uint8Array;
                toProtoMsg(message: _48.TextProposal): _48.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _48.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.Deposit;
                fromPartial(object: Partial<_48.Deposit>): _48.Deposit;
                fromAmino(object: _48.DepositAmino): _48.Deposit;
                toAmino(message: _48.Deposit): _48.DepositAmino;
                fromAminoMsg(object: _48.DepositAminoMsg): _48.Deposit;
                toAminoMsg(message: _48.Deposit): _48.DepositAminoMsg;
                fromProtoMsg(message: _48.DepositProtoMsg): _48.Deposit;
                toProto(message: _48.Deposit): Uint8Array;
                toProtoMsg(message: _48.Deposit): _48.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _48.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.Proposal;
                fromPartial(object: Partial<_48.Proposal>): _48.Proposal;
                fromAmino(object: _48.ProposalAmino): _48.Proposal;
                toAmino(message: _48.Proposal): _48.ProposalAmino;
                fromAminoMsg(object: _48.ProposalAminoMsg): _48.Proposal;
                toAminoMsg(message: _48.Proposal): _48.ProposalAminoMsg;
                fromProtoMsg(message: _48.ProposalProtoMsg): _48.Proposal;
                toProto(message: _48.Proposal): Uint8Array;
                toProtoMsg(message: _48.Proposal): _48.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _48.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.TallyResult;
                fromPartial(object: Partial<_48.TallyResult>): _48.TallyResult;
                fromAmino(object: _48.TallyResultAmino): _48.TallyResult;
                toAmino(message: _48.TallyResult): _48.TallyResultAmino;
                fromAminoMsg(object: _48.TallyResultAminoMsg): _48.TallyResult;
                toAminoMsg(message: _48.TallyResult): _48.TallyResultAminoMsg;
                fromProtoMsg(message: _48.TallyResultProtoMsg): _48.TallyResult;
                toProto(message: _48.TallyResult): Uint8Array;
                toProtoMsg(message: _48.TallyResult): _48.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _48.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.Vote;
                fromPartial(object: Partial<_48.Vote>): _48.Vote;
                fromAmino(object: _48.VoteAmino): _48.Vote;
                toAmino(message: _48.Vote): _48.VoteAmino;
                fromAminoMsg(object: _48.VoteAminoMsg): _48.Vote;
                toAminoMsg(message: _48.Vote): _48.VoteAminoMsg;
                fromProtoMsg(message: _48.VoteProtoMsg): _48.Vote;
                toProto(message: _48.Vote): Uint8Array;
                toProtoMsg(message: _48.Vote): _48.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _48.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.DepositParams;
                fromPartial(object: Partial<_48.DepositParams>): _48.DepositParams;
                fromAmino(object: _48.DepositParamsAmino): _48.DepositParams;
                toAmino(message: _48.DepositParams): _48.DepositParamsAmino;
                fromAminoMsg(object: _48.DepositParamsAminoMsg): _48.DepositParams;
                toAminoMsg(message: _48.DepositParams): _48.DepositParamsAminoMsg;
                fromProtoMsg(message: _48.DepositParamsProtoMsg): _48.DepositParams;
                toProto(message: _48.DepositParams): Uint8Array;
                toProtoMsg(message: _48.DepositParams): _48.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _48.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.VotingParams;
                fromPartial(object: Partial<_48.VotingParams>): _48.VotingParams;
                fromAmino(object: _48.VotingParamsAmino): _48.VotingParams;
                toAmino(message: _48.VotingParams): _48.VotingParamsAmino;
                fromAminoMsg(object: _48.VotingParamsAminoMsg): _48.VotingParams;
                toAminoMsg(message: _48.VotingParams): _48.VotingParamsAminoMsg;
                fromProtoMsg(message: _48.VotingParamsProtoMsg): _48.VotingParams;
                toProto(message: _48.VotingParams): Uint8Array;
                toProtoMsg(message: _48.VotingParams): _48.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _48.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.TallyParams;
                fromPartial(object: Partial<_48.TallyParams>): _48.TallyParams;
                fromAmino(object: _48.TallyParamsAmino): _48.TallyParams;
                toAmino(message: _48.TallyParams): _48.TallyParamsAmino;
                fromAminoMsg(object: _48.TallyParamsAminoMsg): _48.TallyParams;
                toAminoMsg(message: _48.TallyParams): _48.TallyParamsAminoMsg;
                fromProtoMsg(message: _48.TallyParamsProtoMsg): _48.TallyParams;
                toProto(message: _48.TallyParams): Uint8Array;
                toProtoMsg(message: _48.TallyParams): _48.TallyParamsProtoMsg;
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
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _150.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
                inflation(request?: _53.QueryInflationRequest): Promise<_53.QueryInflationResponse>;
                annualProvisions(request?: _53.QueryAnnualProvisionsRequest): Promise<_53.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _135.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _53.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.QueryParamsRequest;
                fromPartial(_: Partial<_53.QueryParamsRequest>): _53.QueryParamsRequest;
                fromAmino(_: _53.QueryParamsRequestAmino): _53.QueryParamsRequest;
                toAmino(_: _53.QueryParamsRequest): _53.QueryParamsRequestAmino;
                fromAminoMsg(object: _53.QueryParamsRequestAminoMsg): _53.QueryParamsRequest;
                toAminoMsg(message: _53.QueryParamsRequest): _53.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _53.QueryParamsRequestProtoMsg): _53.QueryParamsRequest;
                toProto(message: _53.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _53.QueryParamsRequest): _53.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _53.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryParamsResponse;
                fromPartial(object: Partial<_53.QueryParamsResponse>): _53.QueryParamsResponse;
                fromAmino(object: _53.QueryParamsResponseAmino): _53.QueryParamsResponse;
                toAmino(message: _53.QueryParamsResponse): _53.QueryParamsResponseAmino;
                fromAminoMsg(object: _53.QueryParamsResponseAminoMsg): _53.QueryParamsResponse;
                toAminoMsg(message: _53.QueryParamsResponse): _53.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _53.QueryParamsResponseProtoMsg): _53.QueryParamsResponse;
                toProto(message: _53.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _53.QueryParamsResponse): _53.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _53.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.QueryInflationRequest;
                fromPartial(_: Partial<_53.QueryInflationRequest>): _53.QueryInflationRequest;
                fromAmino(_: _53.QueryInflationRequestAmino): _53.QueryInflationRequest;
                toAmino(_: _53.QueryInflationRequest): _53.QueryInflationRequestAmino;
                fromAminoMsg(object: _53.QueryInflationRequestAminoMsg): _53.QueryInflationRequest;
                toAminoMsg(message: _53.QueryInflationRequest): _53.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _53.QueryInflationRequestProtoMsg): _53.QueryInflationRequest;
                toProto(message: _53.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _53.QueryInflationRequest): _53.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _53.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryInflationResponse;
                fromPartial(object: Partial<_53.QueryInflationResponse>): _53.QueryInflationResponse;
                fromAmino(object: _53.QueryInflationResponseAmino): _53.QueryInflationResponse;
                toAmino(message: _53.QueryInflationResponse): _53.QueryInflationResponseAmino;
                fromAminoMsg(object: _53.QueryInflationResponseAminoMsg): _53.QueryInflationResponse;
                toAminoMsg(message: _53.QueryInflationResponse): _53.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _53.QueryInflationResponseProtoMsg): _53.QueryInflationResponse;
                toProto(message: _53.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _53.QueryInflationResponse): _53.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _53.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_53.QueryAnnualProvisionsRequest>): _53.QueryAnnualProvisionsRequest;
                fromAmino(_: _53.QueryAnnualProvisionsRequestAmino): _53.QueryAnnualProvisionsRequest;
                toAmino(_: _53.QueryAnnualProvisionsRequest): _53.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _53.QueryAnnualProvisionsRequestAminoMsg): _53.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _53.QueryAnnualProvisionsRequest): _53.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _53.QueryAnnualProvisionsRequestProtoMsg): _53.QueryAnnualProvisionsRequest;
                toProto(message: _53.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _53.QueryAnnualProvisionsRequest): _53.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _53.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_53.QueryAnnualProvisionsResponse>): _53.QueryAnnualProvisionsResponse;
                fromAmino(object: _53.QueryAnnualProvisionsResponseAmino): _53.QueryAnnualProvisionsResponse;
                toAmino(message: _53.QueryAnnualProvisionsResponse): _53.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _53.QueryAnnualProvisionsResponseAminoMsg): _53.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _53.QueryAnnualProvisionsResponse): _53.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _53.QueryAnnualProvisionsResponseProtoMsg): _53.QueryAnnualProvisionsResponse;
                toProto(message: _53.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _53.QueryAnnualProvisionsResponse): _53.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _52.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.Minter;
                fromPartial(object: Partial<_52.Minter>): _52.Minter;
                fromAmino(object: _52.MinterAmino): _52.Minter;
                toAmino(message: _52.Minter): _52.MinterAmino;
                fromAminoMsg(object: _52.MinterAminoMsg): _52.Minter;
                toAminoMsg(message: _52.Minter): _52.MinterAminoMsg;
                fromProtoMsg(message: _52.MinterProtoMsg): _52.Minter;
                toProto(message: _52.Minter): Uint8Array;
                toProtoMsg(message: _52.Minter): _52.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _52.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.Params;
                fromPartial(object: Partial<_52.Params>): _52.Params;
                fromAmino(object: _52.ParamsAmino): _52.Params;
                toAmino(message: _52.Params): _52.ParamsAmino;
                fromAminoMsg(object: _52.ParamsAminoMsg): _52.Params;
                toAminoMsg(message: _52.Params): _52.ParamsAminoMsg;
                fromProtoMsg(message: _52.ParamsProtoMsg): _52.Params;
                toProto(message: _52.Params): Uint8Array;
                toProtoMsg(message: _52.Params): _52.ParamsProtoMsg;
            };
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
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _151.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _136.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _55.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryParamsRequest;
                fromPartial(object: Partial<_55.QueryParamsRequest>): _55.QueryParamsRequest;
                fromAmino(object: _55.QueryParamsRequestAmino): _55.QueryParamsRequest;
                toAmino(message: _55.QueryParamsRequest): _55.QueryParamsRequestAmino;
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
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _54.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.ParameterChangeProposal;
                fromPartial(object: Partial<_54.ParameterChangeProposal>): _54.ParameterChangeProposal;
                fromAmino(object: _54.ParameterChangeProposalAmino): _54.ParameterChangeProposal;
                toAmino(message: _54.ParameterChangeProposal): _54.ParameterChangeProposalAmino;
                fromAminoMsg(object: _54.ParameterChangeProposalAminoMsg): _54.ParameterChangeProposal;
                toAminoMsg(message: _54.ParameterChangeProposal): _54.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _54.ParameterChangeProposalProtoMsg): _54.ParameterChangeProposal;
                toProto(message: _54.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _54.ParameterChangeProposal): _54.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _54.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.ParamChange;
                fromPartial(object: Partial<_54.ParamChange>): _54.ParamChange;
                fromAmino(object: _54.ParamChangeAmino): _54.ParamChange;
                toAmino(message: _54.ParamChange): _54.ParamChangeAmino;
                fromAminoMsg(object: _54.ParamChangeAminoMsg): _54.ParamChange;
                toAminoMsg(message: _54.ParamChange): _54.ParamChangeAminoMsg;
                fromProtoMsg(message: _54.ParamChangeProtoMsg): _54.ParamChange;
                toProto(message: _54.ParamChange): Uint8Array;
                toProtoMsg(message: _54.ParamChange): _54.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _163.MsgClientImpl;
            QueryClientImpl: typeof _152.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                signingInfo(request: _57.QuerySigningInfoRequest): Promise<_57.QuerySigningInfoResponse>;
                signingInfos(request?: _57.QuerySigningInfosRequest): Promise<_57.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _137.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _59.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _59.MsgUnjail): {
                        typeUrl: string;
                        value: _59.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _59.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _59.MsgUnjail): {
                        typeUrl: string;
                        value: _59.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _59.MsgUnjail) => _59.MsgUnjailAmino;
                    fromAmino: (object: _59.MsgUnjailAmino) => _59.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _59.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgUnjail;
                fromPartial(object: Partial<_59.MsgUnjail>): _59.MsgUnjail;
                fromAmino(object: _59.MsgUnjailAmino): _59.MsgUnjail;
                toAmino(message: _59.MsgUnjail): _59.MsgUnjailAmino;
                fromAminoMsg(object: _59.MsgUnjailAminoMsg): _59.MsgUnjail;
                toAminoMsg(message: _59.MsgUnjail): _59.MsgUnjailAminoMsg;
                fromProtoMsg(message: _59.MsgUnjailProtoMsg): _59.MsgUnjail;
                toProto(message: _59.MsgUnjail): Uint8Array;
                toProtoMsg(message: _59.MsgUnjail): _59.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _59.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgUnjailResponse;
                fromPartial(_: Partial<_59.MsgUnjailResponse>): _59.MsgUnjailResponse;
                fromAmino(_: _59.MsgUnjailResponseAmino): _59.MsgUnjailResponse;
                toAmino(_: _59.MsgUnjailResponse): _59.MsgUnjailResponseAmino;
                fromAminoMsg(object: _59.MsgUnjailResponseAminoMsg): _59.MsgUnjailResponse;
                toAminoMsg(message: _59.MsgUnjailResponse): _59.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _59.MsgUnjailResponseProtoMsg): _59.MsgUnjailResponse;
                toProto(message: _59.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _59.MsgUnjailResponse): _59.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _58.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.ValidatorSigningInfo;
                fromPartial(object: Partial<_58.ValidatorSigningInfo>): _58.ValidatorSigningInfo;
                fromAmino(object: _58.ValidatorSigningInfoAmino): _58.ValidatorSigningInfo;
                toAmino(message: _58.ValidatorSigningInfo): _58.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _58.ValidatorSigningInfoAminoMsg): _58.ValidatorSigningInfo;
                toAminoMsg(message: _58.ValidatorSigningInfo): _58.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _58.ValidatorSigningInfoProtoMsg): _58.ValidatorSigningInfo;
                toProto(message: _58.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _58.ValidatorSigningInfo): _58.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _58.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.Params;
                fromPartial(object: Partial<_58.Params>): _58.Params;
                fromAmino(object: _58.ParamsAmino): _58.Params;
                toAmino(message: _58.Params): _58.ParamsAmino;
                fromAminoMsg(object: _58.ParamsAminoMsg): _58.Params;
                toAminoMsg(message: _58.Params): _58.ParamsAminoMsg;
                fromProtoMsg(message: _58.ParamsProtoMsg): _58.Params;
                toProto(message: _58.Params): Uint8Array;
                toProtoMsg(message: _58.Params): _58.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _57.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.QueryParamsRequest;
                fromPartial(_: Partial<_57.QueryParamsRequest>): _57.QueryParamsRequest;
                fromAmino(_: _57.QueryParamsRequestAmino): _57.QueryParamsRequest;
                toAmino(_: _57.QueryParamsRequest): _57.QueryParamsRequestAmino;
                fromAminoMsg(object: _57.QueryParamsRequestAminoMsg): _57.QueryParamsRequest;
                toAminoMsg(message: _57.QueryParamsRequest): _57.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _57.QueryParamsRequestProtoMsg): _57.QueryParamsRequest;
                toProto(message: _57.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _57.QueryParamsRequest): _57.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _57.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryParamsResponse;
                fromPartial(object: Partial<_57.QueryParamsResponse>): _57.QueryParamsResponse;
                fromAmino(object: _57.QueryParamsResponseAmino): _57.QueryParamsResponse;
                toAmino(message: _57.QueryParamsResponse): _57.QueryParamsResponseAmino;
                fromAminoMsg(object: _57.QueryParamsResponseAminoMsg): _57.QueryParamsResponse;
                toAminoMsg(message: _57.QueryParamsResponse): _57.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _57.QueryParamsResponseProtoMsg): _57.QueryParamsResponse;
                toProto(message: _57.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _57.QueryParamsResponse): _57.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _57.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QuerySigningInfoRequest;
                fromPartial(object: Partial<_57.QuerySigningInfoRequest>): _57.QuerySigningInfoRequest;
                fromAmino(object: _57.QuerySigningInfoRequestAmino): _57.QuerySigningInfoRequest;
                toAmino(message: _57.QuerySigningInfoRequest): _57.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _57.QuerySigningInfoRequestAminoMsg): _57.QuerySigningInfoRequest;
                toAminoMsg(message: _57.QuerySigningInfoRequest): _57.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _57.QuerySigningInfoRequestProtoMsg): _57.QuerySigningInfoRequest;
                toProto(message: _57.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _57.QuerySigningInfoRequest): _57.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _57.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QuerySigningInfoResponse;
                fromPartial(object: Partial<_57.QuerySigningInfoResponse>): _57.QuerySigningInfoResponse;
                fromAmino(object: _57.QuerySigningInfoResponseAmino): _57.QuerySigningInfoResponse;
                toAmino(message: _57.QuerySigningInfoResponse): _57.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _57.QuerySigningInfoResponseAminoMsg): _57.QuerySigningInfoResponse;
                toAminoMsg(message: _57.QuerySigningInfoResponse): _57.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _57.QuerySigningInfoResponseProtoMsg): _57.QuerySigningInfoResponse;
                toProto(message: _57.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _57.QuerySigningInfoResponse): _57.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _57.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QuerySigningInfosRequest;
                fromPartial(object: Partial<_57.QuerySigningInfosRequest>): _57.QuerySigningInfosRequest;
                fromAmino(object: _57.QuerySigningInfosRequestAmino): _57.QuerySigningInfosRequest;
                toAmino(message: _57.QuerySigningInfosRequest): _57.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _57.QuerySigningInfosRequestAminoMsg): _57.QuerySigningInfosRequest;
                toAminoMsg(message: _57.QuerySigningInfosRequest): _57.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _57.QuerySigningInfosRequestProtoMsg): _57.QuerySigningInfosRequest;
                toProto(message: _57.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _57.QuerySigningInfosRequest): _57.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _57.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QuerySigningInfosResponse;
                fromPartial(object: Partial<_57.QuerySigningInfosResponse>): _57.QuerySigningInfosResponse;
                fromAmino(object: _57.QuerySigningInfosResponseAmino): _57.QuerySigningInfosResponse;
                toAmino(message: _57.QuerySigningInfosResponse): _57.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _57.QuerySigningInfosResponseAminoMsg): _57.QuerySigningInfosResponse;
                toAminoMsg(message: _57.QuerySigningInfosResponse): _57.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _57.QuerySigningInfosResponseProtoMsg): _57.QuerySigningInfosResponse;
                toProto(message: _57.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _57.QuerySigningInfosResponse): _57.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _56.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.SigningInfo;
                fromPartial(object: Partial<_56.SigningInfo>): _56.SigningInfo;
                fromAmino(object: _56.SigningInfoAmino): _56.SigningInfo;
                toAmino(message: _56.SigningInfo): _56.SigningInfoAmino;
                fromAminoMsg(object: _56.SigningInfoAminoMsg): _56.SigningInfo;
                toAminoMsg(message: _56.SigningInfo): _56.SigningInfoAminoMsg;
                fromProtoMsg(message: _56.SigningInfoProtoMsg): _56.SigningInfo;
                toProto(message: _56.SigningInfo): Uint8Array;
                toProtoMsg(message: _56.SigningInfo): _56.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _56.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.ValidatorMissedBlocks;
                fromPartial(object: Partial<_56.ValidatorMissedBlocks>): _56.ValidatorMissedBlocks;
                fromAmino(object: _56.ValidatorMissedBlocksAmino): _56.ValidatorMissedBlocks;
                toAmino(message: _56.ValidatorMissedBlocks): _56.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _56.ValidatorMissedBlocksAminoMsg): _56.ValidatorMissedBlocks;
                toAminoMsg(message: _56.ValidatorMissedBlocks): _56.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _56.ValidatorMissedBlocksProtoMsg): _56.ValidatorMissedBlocks;
                toProto(message: _56.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _56.ValidatorMissedBlocks): _56.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _56.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.MissedBlock;
                fromPartial(object: Partial<_56.MissedBlock>): _56.MissedBlock;
                fromAmino(object: _56.MissedBlockAmino): _56.MissedBlock;
                toAmino(message: _56.MissedBlock): _56.MissedBlockAmino;
                fromAminoMsg(object: _56.MissedBlockAminoMsg): _56.MissedBlock;
                toAminoMsg(message: _56.MissedBlock): _56.MissedBlockAminoMsg;
                fromProtoMsg(message: _56.MissedBlockProtoMsg): _56.MissedBlock;
                toProto(message: _56.MissedBlock): Uint8Array;
                toProtoMsg(message: _56.MissedBlock): _56.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _164.MsgClientImpl;
            QueryClientImpl: typeof _153.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _62.QueryValidatorsRequest): Promise<_62.QueryValidatorsResponse>;
                validator(request: _62.QueryValidatorRequest): Promise<_62.QueryValidatorResponse>;
                validatorDelegations(request: _62.QueryValidatorDelegationsRequest): Promise<_62.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _62.QueryValidatorUnbondingDelegationsRequest): Promise<_62.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _62.QueryDelegationRequest): Promise<_62.QueryDelegationResponse>;
                unbondingDelegation(request: _62.QueryUnbondingDelegationRequest): Promise<_62.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _62.QueryDelegatorDelegationsRequest): Promise<_62.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _62.QueryDelegatorUnbondingDelegationsRequest): Promise<_62.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _62.QueryRedelegationsRequest): Promise<_62.QueryRedelegationsResponse>;
                delegatorValidators(request: _62.QueryDelegatorValidatorsRequest): Promise<_62.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _62.QueryDelegatorValidatorRequest): Promise<_62.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _62.QueryHistoricalInfoRequest): Promise<_62.QueryHistoricalInfoResponse>;
                pool(request?: _62.QueryPoolRequest): Promise<_62.QueryPoolResponse>;
                params(request?: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _138.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _64.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _64.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _64.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _64.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _64.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _64.MsgCreateValidator): {
                        typeUrl: string;
                        value: _64.MsgCreateValidator;
                    };
                    editValidator(value: _64.MsgEditValidator): {
                        typeUrl: string;
                        value: _64.MsgEditValidator;
                    };
                    delegate(value: _64.MsgDelegate): {
                        typeUrl: string;
                        value: _64.MsgDelegate;
                    };
                    beginRedelegate(value: _64.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _64.MsgBeginRedelegate;
                    };
                    undelegate(value: _64.MsgUndelegate): {
                        typeUrl: string;
                        value: _64.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _64.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _64.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _64.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _64.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _64.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _64.MsgCreateValidator): {
                        typeUrl: string;
                        value: _64.MsgCreateValidator;
                    };
                    editValidator(value: _64.MsgEditValidator): {
                        typeUrl: string;
                        value: _64.MsgEditValidator;
                    };
                    delegate(value: _64.MsgDelegate): {
                        typeUrl: string;
                        value: _64.MsgDelegate;
                    };
                    beginRedelegate(value: _64.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _64.MsgBeginRedelegate;
                    };
                    undelegate(value: _64.MsgUndelegate): {
                        typeUrl: string;
                        value: _64.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _64.MsgCreateValidator) => _64.MsgCreateValidatorAmino;
                    fromAmino: (object: _64.MsgCreateValidatorAmino) => _64.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _64.MsgEditValidator) => _64.MsgEditValidatorAmino;
                    fromAmino: (object: _64.MsgEditValidatorAmino) => _64.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _64.MsgDelegate) => _64.MsgDelegateAmino;
                    fromAmino: (object: _64.MsgDelegateAmino) => _64.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _64.MsgBeginRedelegate) => _64.MsgBeginRedelegateAmino;
                    fromAmino: (object: _64.MsgBeginRedelegateAmino) => _64.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _64.MsgUndelegate) => _64.MsgUndelegateAmino;
                    fromAmino: (object: _64.MsgUndelegateAmino) => _64.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _64.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgCreateValidator;
                fromPartial(object: Partial<_64.MsgCreateValidator>): _64.MsgCreateValidator;
                fromAmino(object: _64.MsgCreateValidatorAmino): _64.MsgCreateValidator;
                toAmino(message: _64.MsgCreateValidator): _64.MsgCreateValidatorAmino;
                fromAminoMsg(object: _64.MsgCreateValidatorAminoMsg): _64.MsgCreateValidator;
                toAminoMsg(message: _64.MsgCreateValidator): _64.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _64.MsgCreateValidatorProtoMsg): _64.MsgCreateValidator;
                toProto(message: _64.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _64.MsgCreateValidator): _64.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _64.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_64.MsgCreateValidatorResponse>): _64.MsgCreateValidatorResponse;
                fromAmino(_: _64.MsgCreateValidatorResponseAmino): _64.MsgCreateValidatorResponse;
                toAmino(_: _64.MsgCreateValidatorResponse): _64.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _64.MsgCreateValidatorResponseAminoMsg): _64.MsgCreateValidatorResponse;
                toAminoMsg(message: _64.MsgCreateValidatorResponse): _64.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _64.MsgCreateValidatorResponseProtoMsg): _64.MsgCreateValidatorResponse;
                toProto(message: _64.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _64.MsgCreateValidatorResponse): _64.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _64.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgEditValidator;
                fromPartial(object: Partial<_64.MsgEditValidator>): _64.MsgEditValidator;
                fromAmino(object: _64.MsgEditValidatorAmino): _64.MsgEditValidator;
                toAmino(message: _64.MsgEditValidator): _64.MsgEditValidatorAmino;
                fromAminoMsg(object: _64.MsgEditValidatorAminoMsg): _64.MsgEditValidator;
                toAminoMsg(message: _64.MsgEditValidator): _64.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _64.MsgEditValidatorProtoMsg): _64.MsgEditValidator;
                toProto(message: _64.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _64.MsgEditValidator): _64.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _64.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.MsgEditValidatorResponse;
                fromPartial(_: Partial<_64.MsgEditValidatorResponse>): _64.MsgEditValidatorResponse;
                fromAmino(_: _64.MsgEditValidatorResponseAmino): _64.MsgEditValidatorResponse;
                toAmino(_: _64.MsgEditValidatorResponse): _64.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _64.MsgEditValidatorResponseAminoMsg): _64.MsgEditValidatorResponse;
                toAminoMsg(message: _64.MsgEditValidatorResponse): _64.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _64.MsgEditValidatorResponseProtoMsg): _64.MsgEditValidatorResponse;
                toProto(message: _64.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _64.MsgEditValidatorResponse): _64.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _64.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgDelegate;
                fromPartial(object: Partial<_64.MsgDelegate>): _64.MsgDelegate;
                fromAmino(object: _64.MsgDelegateAmino): _64.MsgDelegate;
                toAmino(message: _64.MsgDelegate): _64.MsgDelegateAmino;
                fromAminoMsg(object: _64.MsgDelegateAminoMsg): _64.MsgDelegate;
                toAminoMsg(message: _64.MsgDelegate): _64.MsgDelegateAminoMsg;
                fromProtoMsg(message: _64.MsgDelegateProtoMsg): _64.MsgDelegate;
                toProto(message: _64.MsgDelegate): Uint8Array;
                toProtoMsg(message: _64.MsgDelegate): _64.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _64.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.MsgDelegateResponse;
                fromPartial(_: Partial<_64.MsgDelegateResponse>): _64.MsgDelegateResponse;
                fromAmino(_: _64.MsgDelegateResponseAmino): _64.MsgDelegateResponse;
                toAmino(_: _64.MsgDelegateResponse): _64.MsgDelegateResponseAmino;
                fromAminoMsg(object: _64.MsgDelegateResponseAminoMsg): _64.MsgDelegateResponse;
                toAminoMsg(message: _64.MsgDelegateResponse): _64.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _64.MsgDelegateResponseProtoMsg): _64.MsgDelegateResponse;
                toProto(message: _64.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _64.MsgDelegateResponse): _64.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _64.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgBeginRedelegate;
                fromPartial(object: Partial<_64.MsgBeginRedelegate>): _64.MsgBeginRedelegate;
                fromAmino(object: _64.MsgBeginRedelegateAmino): _64.MsgBeginRedelegate;
                toAmino(message: _64.MsgBeginRedelegate): _64.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _64.MsgBeginRedelegateAminoMsg): _64.MsgBeginRedelegate;
                toAminoMsg(message: _64.MsgBeginRedelegate): _64.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _64.MsgBeginRedelegateProtoMsg): _64.MsgBeginRedelegate;
                toProto(message: _64.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _64.MsgBeginRedelegate): _64.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _64.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_64.MsgBeginRedelegateResponse>): _64.MsgBeginRedelegateResponse;
                fromAmino(object: _64.MsgBeginRedelegateResponseAmino): _64.MsgBeginRedelegateResponse;
                toAmino(message: _64.MsgBeginRedelegateResponse): _64.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _64.MsgBeginRedelegateResponseAminoMsg): _64.MsgBeginRedelegateResponse;
                toAminoMsg(message: _64.MsgBeginRedelegateResponse): _64.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _64.MsgBeginRedelegateResponseProtoMsg): _64.MsgBeginRedelegateResponse;
                toProto(message: _64.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _64.MsgBeginRedelegateResponse): _64.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _64.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgUndelegate;
                fromPartial(object: Partial<_64.MsgUndelegate>): _64.MsgUndelegate;
                fromAmino(object: _64.MsgUndelegateAmino): _64.MsgUndelegate;
                toAmino(message: _64.MsgUndelegate): _64.MsgUndelegateAmino;
                fromAminoMsg(object: _64.MsgUndelegateAminoMsg): _64.MsgUndelegate;
                toAminoMsg(message: _64.MsgUndelegate): _64.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _64.MsgUndelegateProtoMsg): _64.MsgUndelegate;
                toProto(message: _64.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _64.MsgUndelegate): _64.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _64.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgUndelegateResponse;
                fromPartial(object: Partial<_64.MsgUndelegateResponse>): _64.MsgUndelegateResponse;
                fromAmino(object: _64.MsgUndelegateResponseAmino): _64.MsgUndelegateResponse;
                toAmino(message: _64.MsgUndelegateResponse): _64.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _64.MsgUndelegateResponseAminoMsg): _64.MsgUndelegateResponse;
                toAminoMsg(message: _64.MsgUndelegateResponse): _64.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _64.MsgUndelegateResponseProtoMsg): _64.MsgUndelegateResponse;
                toProto(message: _64.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _64.MsgUndelegateResponse): _64.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _63.BondStatus;
            bondStatusToJSON(object: _63.BondStatus): string;
            infractionTypeFromJSON(object: any): _63.InfractionType;
            infractionTypeToJSON(object: _63.InfractionType): string;
            BondStatus: typeof _63.BondStatus;
            BondStatusSDKType: typeof _63.BondStatus;
            BondStatusAmino: typeof _63.BondStatus;
            InfractionType: typeof _63.InfractionType;
            InfractionTypeSDKType: typeof _63.InfractionType;
            InfractionTypeAmino: typeof _63.InfractionType;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _63.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.HistoricalInfo;
                fromPartial(object: Partial<_63.HistoricalInfo>): _63.HistoricalInfo;
                fromAmino(object: _63.HistoricalInfoAmino): _63.HistoricalInfo;
                toAmino(message: _63.HistoricalInfo): _63.HistoricalInfoAmino;
                fromAminoMsg(object: _63.HistoricalInfoAminoMsg): _63.HistoricalInfo;
                toAminoMsg(message: _63.HistoricalInfo): _63.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _63.HistoricalInfoProtoMsg): _63.HistoricalInfo;
                toProto(message: _63.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _63.HistoricalInfo): _63.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _63.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.CommissionRates;
                fromPartial(object: Partial<_63.CommissionRates>): _63.CommissionRates;
                fromAmino(object: _63.CommissionRatesAmino): _63.CommissionRates;
                toAmino(message: _63.CommissionRates): _63.CommissionRatesAmino;
                fromAminoMsg(object: _63.CommissionRatesAminoMsg): _63.CommissionRates;
                toAminoMsg(message: _63.CommissionRates): _63.CommissionRatesAminoMsg;
                fromProtoMsg(message: _63.CommissionRatesProtoMsg): _63.CommissionRates;
                toProto(message: _63.CommissionRates): Uint8Array;
                toProtoMsg(message: _63.CommissionRates): _63.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _63.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.Commission;
                fromPartial(object: Partial<_63.Commission>): _63.Commission;
                fromAmino(object: _63.CommissionAmino): _63.Commission;
                toAmino(message: _63.Commission): _63.CommissionAmino;
                fromAminoMsg(object: _63.CommissionAminoMsg): _63.Commission;
                toAminoMsg(message: _63.Commission): _63.CommissionAminoMsg;
                fromProtoMsg(message: _63.CommissionProtoMsg): _63.Commission;
                toProto(message: _63.Commission): Uint8Array;
                toProtoMsg(message: _63.Commission): _63.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _63.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.Description;
                fromPartial(object: Partial<_63.Description>): _63.Description;
                fromAmino(object: _63.DescriptionAmino): _63.Description;
                toAmino(message: _63.Description): _63.DescriptionAmino;
                fromAminoMsg(object: _63.DescriptionAminoMsg): _63.Description;
                toAminoMsg(message: _63.Description): _63.DescriptionAminoMsg;
                fromProtoMsg(message: _63.DescriptionProtoMsg): _63.Description;
                toProto(message: _63.Description): Uint8Array;
                toProtoMsg(message: _63.Description): _63.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _63.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.Validator;
                fromPartial(object: Partial<_63.Validator>): _63.Validator;
                fromAmino(object: _63.ValidatorAmino): _63.Validator;
                toAmino(message: _63.Validator): _63.ValidatorAmino;
                fromAminoMsg(object: _63.ValidatorAminoMsg): _63.Validator;
                toAminoMsg(message: _63.Validator): _63.ValidatorAminoMsg;
                fromProtoMsg(message: _63.ValidatorProtoMsg): _63.Validator;
                toProto(message: _63.Validator): Uint8Array;
                toProtoMsg(message: _63.Validator): _63.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _63.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.ValAddresses;
                fromPartial(object: Partial<_63.ValAddresses>): _63.ValAddresses;
                fromAmino(object: _63.ValAddressesAmino): _63.ValAddresses;
                toAmino(message: _63.ValAddresses): _63.ValAddressesAmino;
                fromAminoMsg(object: _63.ValAddressesAminoMsg): _63.ValAddresses;
                toAminoMsg(message: _63.ValAddresses): _63.ValAddressesAminoMsg;
                fromProtoMsg(message: _63.ValAddressesProtoMsg): _63.ValAddresses;
                toProto(message: _63.ValAddresses): Uint8Array;
                toProtoMsg(message: _63.ValAddresses): _63.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _63.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.DVPair;
                fromPartial(object: Partial<_63.DVPair>): _63.DVPair;
                fromAmino(object: _63.DVPairAmino): _63.DVPair;
                toAmino(message: _63.DVPair): _63.DVPairAmino;
                fromAminoMsg(object: _63.DVPairAminoMsg): _63.DVPair;
                toAminoMsg(message: _63.DVPair): _63.DVPairAminoMsg;
                fromProtoMsg(message: _63.DVPairProtoMsg): _63.DVPair;
                toProto(message: _63.DVPair): Uint8Array;
                toProtoMsg(message: _63.DVPair): _63.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _63.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.DVPairs;
                fromPartial(object: Partial<_63.DVPairs>): _63.DVPairs;
                fromAmino(object: _63.DVPairsAmino): _63.DVPairs;
                toAmino(message: _63.DVPairs): _63.DVPairsAmino;
                fromAminoMsg(object: _63.DVPairsAminoMsg): _63.DVPairs;
                toAminoMsg(message: _63.DVPairs): _63.DVPairsAminoMsg;
                fromProtoMsg(message: _63.DVPairsProtoMsg): _63.DVPairs;
                toProto(message: _63.DVPairs): Uint8Array;
                toProtoMsg(message: _63.DVPairs): _63.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _63.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.DVVTriplet;
                fromPartial(object: Partial<_63.DVVTriplet>): _63.DVVTriplet;
                fromAmino(object: _63.DVVTripletAmino): _63.DVVTriplet;
                toAmino(message: _63.DVVTriplet): _63.DVVTripletAmino;
                fromAminoMsg(object: _63.DVVTripletAminoMsg): _63.DVVTriplet;
                toAminoMsg(message: _63.DVVTriplet): _63.DVVTripletAminoMsg;
                fromProtoMsg(message: _63.DVVTripletProtoMsg): _63.DVVTriplet;
                toProto(message: _63.DVVTriplet): Uint8Array;
                toProtoMsg(message: _63.DVVTriplet): _63.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _63.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.DVVTriplets;
                fromPartial(object: Partial<_63.DVVTriplets>): _63.DVVTriplets;
                fromAmino(object: _63.DVVTripletsAmino): _63.DVVTriplets;
                toAmino(message: _63.DVVTriplets): _63.DVVTripletsAmino;
                fromAminoMsg(object: _63.DVVTripletsAminoMsg): _63.DVVTriplets;
                toAminoMsg(message: _63.DVVTriplets): _63.DVVTripletsAminoMsg;
                fromProtoMsg(message: _63.DVVTripletsProtoMsg): _63.DVVTriplets;
                toProto(message: _63.DVVTriplets): Uint8Array;
                toProtoMsg(message: _63.DVVTriplets): _63.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _63.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.Delegation;
                fromPartial(object: Partial<_63.Delegation>): _63.Delegation;
                fromAmino(object: _63.DelegationAmino): _63.Delegation;
                toAmino(message: _63.Delegation): _63.DelegationAmino;
                fromAminoMsg(object: _63.DelegationAminoMsg): _63.Delegation;
                toAminoMsg(message: _63.Delegation): _63.DelegationAminoMsg;
                fromProtoMsg(message: _63.DelegationProtoMsg): _63.Delegation;
                toProto(message: _63.Delegation): Uint8Array;
                toProtoMsg(message: _63.Delegation): _63.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _63.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.UnbondingDelegation;
                fromPartial(object: Partial<_63.UnbondingDelegation>): _63.UnbondingDelegation;
                fromAmino(object: _63.UnbondingDelegationAmino): _63.UnbondingDelegation;
                toAmino(message: _63.UnbondingDelegation): _63.UnbondingDelegationAmino;
                fromAminoMsg(object: _63.UnbondingDelegationAminoMsg): _63.UnbondingDelegation;
                toAminoMsg(message: _63.UnbondingDelegation): _63.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _63.UnbondingDelegationProtoMsg): _63.UnbondingDelegation;
                toProto(message: _63.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _63.UnbondingDelegation): _63.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _63.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.UnbondingDelegationEntry;
                fromPartial(object: Partial<_63.UnbondingDelegationEntry>): _63.UnbondingDelegationEntry;
                fromAmino(object: _63.UnbondingDelegationEntryAmino): _63.UnbondingDelegationEntry;
                toAmino(message: _63.UnbondingDelegationEntry): _63.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _63.UnbondingDelegationEntryAminoMsg): _63.UnbondingDelegationEntry;
                toAminoMsg(message: _63.UnbondingDelegationEntry): _63.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _63.UnbondingDelegationEntryProtoMsg): _63.UnbondingDelegationEntry;
                toProto(message: _63.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _63.UnbondingDelegationEntry): _63.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _63.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.RedelegationEntry;
                fromPartial(object: Partial<_63.RedelegationEntry>): _63.RedelegationEntry;
                fromAmino(object: _63.RedelegationEntryAmino): _63.RedelegationEntry;
                toAmino(message: _63.RedelegationEntry): _63.RedelegationEntryAmino;
                fromAminoMsg(object: _63.RedelegationEntryAminoMsg): _63.RedelegationEntry;
                toAminoMsg(message: _63.RedelegationEntry): _63.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _63.RedelegationEntryProtoMsg): _63.RedelegationEntry;
                toProto(message: _63.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _63.RedelegationEntry): _63.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _63.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.Redelegation;
                fromPartial(object: Partial<_63.Redelegation>): _63.Redelegation;
                fromAmino(object: _63.RedelegationAmino): _63.Redelegation;
                toAmino(message: _63.Redelegation): _63.RedelegationAmino;
                fromAminoMsg(object: _63.RedelegationAminoMsg): _63.Redelegation;
                toAminoMsg(message: _63.Redelegation): _63.RedelegationAminoMsg;
                fromProtoMsg(message: _63.RedelegationProtoMsg): _63.Redelegation;
                toProto(message: _63.Redelegation): Uint8Array;
                toProtoMsg(message: _63.Redelegation): _63.RedelegationProtoMsg;
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
            DelegationResponse: {
                typeUrl: string;
                encode(message: _63.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.DelegationResponse;
                fromPartial(object: Partial<_63.DelegationResponse>): _63.DelegationResponse;
                fromAmino(object: _63.DelegationResponseAmino): _63.DelegationResponse;
                toAmino(message: _63.DelegationResponse): _63.DelegationResponseAmino;
                fromAminoMsg(object: _63.DelegationResponseAminoMsg): _63.DelegationResponse;
                toAminoMsg(message: _63.DelegationResponse): _63.DelegationResponseAminoMsg;
                fromProtoMsg(message: _63.DelegationResponseProtoMsg): _63.DelegationResponse;
                toProto(message: _63.DelegationResponse): Uint8Array;
                toProtoMsg(message: _63.DelegationResponse): _63.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _63.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.RedelegationEntryResponse;
                fromPartial(object: Partial<_63.RedelegationEntryResponse>): _63.RedelegationEntryResponse;
                fromAmino(object: _63.RedelegationEntryResponseAmino): _63.RedelegationEntryResponse;
                toAmino(message: _63.RedelegationEntryResponse): _63.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _63.RedelegationEntryResponseAminoMsg): _63.RedelegationEntryResponse;
                toAminoMsg(message: _63.RedelegationEntryResponse): _63.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _63.RedelegationEntryResponseProtoMsg): _63.RedelegationEntryResponse;
                toProto(message: _63.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _63.RedelegationEntryResponse): _63.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _63.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.RedelegationResponse;
                fromPartial(object: Partial<_63.RedelegationResponse>): _63.RedelegationResponse;
                fromAmino(object: _63.RedelegationResponseAmino): _63.RedelegationResponse;
                toAmino(message: _63.RedelegationResponse): _63.RedelegationResponseAmino;
                fromAminoMsg(object: _63.RedelegationResponseAminoMsg): _63.RedelegationResponse;
                toAminoMsg(message: _63.RedelegationResponse): _63.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _63.RedelegationResponseProtoMsg): _63.RedelegationResponse;
                toProto(message: _63.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _63.RedelegationResponse): _63.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _63.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.Pool;
                fromPartial(object: Partial<_63.Pool>): _63.Pool;
                fromAmino(object: _63.PoolAmino): _63.Pool;
                toAmino(message: _63.Pool): _63.PoolAmino;
                fromAminoMsg(object: _63.PoolAminoMsg): _63.Pool;
                toAminoMsg(message: _63.Pool): _63.PoolAminoMsg;
                fromProtoMsg(message: _63.PoolProtoMsg): _63.Pool;
                toProto(message: _63.Pool): Uint8Array;
                toProtoMsg(message: _63.Pool): _63.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _63.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.ValidatorUpdates;
                fromPartial(object: Partial<_63.ValidatorUpdates>): _63.ValidatorUpdates;
                fromAmino(object: _63.ValidatorUpdatesAmino): _63.ValidatorUpdates;
                toAmino(message: _63.ValidatorUpdates): _63.ValidatorUpdatesAmino;
                fromAminoMsg(object: _63.ValidatorUpdatesAminoMsg): _63.ValidatorUpdates;
                toAminoMsg(message: _63.ValidatorUpdates): _63.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _63.ValidatorUpdatesProtoMsg): _63.ValidatorUpdates;
                toProto(message: _63.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _63.ValidatorUpdates): _63.ValidatorUpdatesProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _62.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryValidatorsRequest;
                fromPartial(object: Partial<_62.QueryValidatorsRequest>): _62.QueryValidatorsRequest;
                fromAmino(object: _62.QueryValidatorsRequestAmino): _62.QueryValidatorsRequest;
                toAmino(message: _62.QueryValidatorsRequest): _62.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _62.QueryValidatorsRequestAminoMsg): _62.QueryValidatorsRequest;
                toAminoMsg(message: _62.QueryValidatorsRequest): _62.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _62.QueryValidatorsRequestProtoMsg): _62.QueryValidatorsRequest;
                toProto(message: _62.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _62.QueryValidatorsRequest): _62.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _62.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryValidatorsResponse;
                fromPartial(object: Partial<_62.QueryValidatorsResponse>): _62.QueryValidatorsResponse;
                fromAmino(object: _62.QueryValidatorsResponseAmino): _62.QueryValidatorsResponse;
                toAmino(message: _62.QueryValidatorsResponse): _62.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _62.QueryValidatorsResponseAminoMsg): _62.QueryValidatorsResponse;
                toAminoMsg(message: _62.QueryValidatorsResponse): _62.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _62.QueryValidatorsResponseProtoMsg): _62.QueryValidatorsResponse;
                toProto(message: _62.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _62.QueryValidatorsResponse): _62.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _62.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryValidatorRequest;
                fromPartial(object: Partial<_62.QueryValidatorRequest>): _62.QueryValidatorRequest;
                fromAmino(object: _62.QueryValidatorRequestAmino): _62.QueryValidatorRequest;
                toAmino(message: _62.QueryValidatorRequest): _62.QueryValidatorRequestAmino;
                fromAminoMsg(object: _62.QueryValidatorRequestAminoMsg): _62.QueryValidatorRequest;
                toAminoMsg(message: _62.QueryValidatorRequest): _62.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _62.QueryValidatorRequestProtoMsg): _62.QueryValidatorRequest;
                toProto(message: _62.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _62.QueryValidatorRequest): _62.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _62.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryValidatorResponse;
                fromPartial(object: Partial<_62.QueryValidatorResponse>): _62.QueryValidatorResponse;
                fromAmino(object: _62.QueryValidatorResponseAmino): _62.QueryValidatorResponse;
                toAmino(message: _62.QueryValidatorResponse): _62.QueryValidatorResponseAmino;
                fromAminoMsg(object: _62.QueryValidatorResponseAminoMsg): _62.QueryValidatorResponse;
                toAminoMsg(message: _62.QueryValidatorResponse): _62.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _62.QueryValidatorResponseProtoMsg): _62.QueryValidatorResponse;
                toProto(message: _62.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _62.QueryValidatorResponse): _62.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _62.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_62.QueryValidatorDelegationsRequest>): _62.QueryValidatorDelegationsRequest;
                fromAmino(object: _62.QueryValidatorDelegationsRequestAmino): _62.QueryValidatorDelegationsRequest;
                toAmino(message: _62.QueryValidatorDelegationsRequest): _62.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _62.QueryValidatorDelegationsRequestAminoMsg): _62.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _62.QueryValidatorDelegationsRequest): _62.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _62.QueryValidatorDelegationsRequestProtoMsg): _62.QueryValidatorDelegationsRequest;
                toProto(message: _62.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _62.QueryValidatorDelegationsRequest): _62.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _62.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_62.QueryValidatorDelegationsResponse>): _62.QueryValidatorDelegationsResponse;
                fromAmino(object: _62.QueryValidatorDelegationsResponseAmino): _62.QueryValidatorDelegationsResponse;
                toAmino(message: _62.QueryValidatorDelegationsResponse): _62.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _62.QueryValidatorDelegationsResponseAminoMsg): _62.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _62.QueryValidatorDelegationsResponse): _62.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _62.QueryValidatorDelegationsResponseProtoMsg): _62.QueryValidatorDelegationsResponse;
                toProto(message: _62.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _62.QueryValidatorDelegationsResponse): _62.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _62.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_62.QueryValidatorUnbondingDelegationsRequest>): _62.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _62.QueryValidatorUnbondingDelegationsRequestAmino): _62.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _62.QueryValidatorUnbondingDelegationsRequest): _62.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _62.QueryValidatorUnbondingDelegationsRequestAminoMsg): _62.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _62.QueryValidatorUnbondingDelegationsRequest): _62.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _62.QueryValidatorUnbondingDelegationsRequestProtoMsg): _62.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _62.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _62.QueryValidatorUnbondingDelegationsRequest): _62.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _62.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_62.QueryValidatorUnbondingDelegationsResponse>): _62.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _62.QueryValidatorUnbondingDelegationsResponseAmino): _62.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _62.QueryValidatorUnbondingDelegationsResponse): _62.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _62.QueryValidatorUnbondingDelegationsResponseAminoMsg): _62.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _62.QueryValidatorUnbondingDelegationsResponse): _62.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _62.QueryValidatorUnbondingDelegationsResponseProtoMsg): _62.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _62.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _62.QueryValidatorUnbondingDelegationsResponse): _62.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _62.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryDelegationRequest;
                fromPartial(object: Partial<_62.QueryDelegationRequest>): _62.QueryDelegationRequest;
                fromAmino(object: _62.QueryDelegationRequestAmino): _62.QueryDelegationRequest;
                toAmino(message: _62.QueryDelegationRequest): _62.QueryDelegationRequestAmino;
                fromAminoMsg(object: _62.QueryDelegationRequestAminoMsg): _62.QueryDelegationRequest;
                toAminoMsg(message: _62.QueryDelegationRequest): _62.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _62.QueryDelegationRequestProtoMsg): _62.QueryDelegationRequest;
                toProto(message: _62.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _62.QueryDelegationRequest): _62.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _62.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryDelegationResponse;
                fromPartial(object: Partial<_62.QueryDelegationResponse>): _62.QueryDelegationResponse;
                fromAmino(object: _62.QueryDelegationResponseAmino): _62.QueryDelegationResponse;
                toAmino(message: _62.QueryDelegationResponse): _62.QueryDelegationResponseAmino;
                fromAminoMsg(object: _62.QueryDelegationResponseAminoMsg): _62.QueryDelegationResponse;
                toAminoMsg(message: _62.QueryDelegationResponse): _62.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _62.QueryDelegationResponseProtoMsg): _62.QueryDelegationResponse;
                toProto(message: _62.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _62.QueryDelegationResponse): _62.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _62.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_62.QueryUnbondingDelegationRequest>): _62.QueryUnbondingDelegationRequest;
                fromAmino(object: _62.QueryUnbondingDelegationRequestAmino): _62.QueryUnbondingDelegationRequest;
                toAmino(message: _62.QueryUnbondingDelegationRequest): _62.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _62.QueryUnbondingDelegationRequestAminoMsg): _62.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _62.QueryUnbondingDelegationRequest): _62.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _62.QueryUnbondingDelegationRequestProtoMsg): _62.QueryUnbondingDelegationRequest;
                toProto(message: _62.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _62.QueryUnbondingDelegationRequest): _62.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _62.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_62.QueryUnbondingDelegationResponse>): _62.QueryUnbondingDelegationResponse;
                fromAmino(object: _62.QueryUnbondingDelegationResponseAmino): _62.QueryUnbondingDelegationResponse;
                toAmino(message: _62.QueryUnbondingDelegationResponse): _62.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _62.QueryUnbondingDelegationResponseAminoMsg): _62.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _62.QueryUnbondingDelegationResponse): _62.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _62.QueryUnbondingDelegationResponseProtoMsg): _62.QueryUnbondingDelegationResponse;
                toProto(message: _62.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _62.QueryUnbondingDelegationResponse): _62.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _62.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_62.QueryDelegatorDelegationsRequest>): _62.QueryDelegatorDelegationsRequest;
                fromAmino(object: _62.QueryDelegatorDelegationsRequestAmino): _62.QueryDelegatorDelegationsRequest;
                toAmino(message: _62.QueryDelegatorDelegationsRequest): _62.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _62.QueryDelegatorDelegationsRequestAminoMsg): _62.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _62.QueryDelegatorDelegationsRequest): _62.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _62.QueryDelegatorDelegationsRequestProtoMsg): _62.QueryDelegatorDelegationsRequest;
                toProto(message: _62.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _62.QueryDelegatorDelegationsRequest): _62.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _62.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_62.QueryDelegatorDelegationsResponse>): _62.QueryDelegatorDelegationsResponse;
                fromAmino(object: _62.QueryDelegatorDelegationsResponseAmino): _62.QueryDelegatorDelegationsResponse;
                toAmino(message: _62.QueryDelegatorDelegationsResponse): _62.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _62.QueryDelegatorDelegationsResponseAminoMsg): _62.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _62.QueryDelegatorDelegationsResponse): _62.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _62.QueryDelegatorDelegationsResponseProtoMsg): _62.QueryDelegatorDelegationsResponse;
                toProto(message: _62.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _62.QueryDelegatorDelegationsResponse): _62.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _62.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_62.QueryDelegatorUnbondingDelegationsRequest>): _62.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _62.QueryDelegatorUnbondingDelegationsRequestAmino): _62.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _62.QueryDelegatorUnbondingDelegationsRequest): _62.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _62.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _62.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _62.QueryDelegatorUnbondingDelegationsRequest): _62.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _62.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _62.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _62.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _62.QueryDelegatorUnbondingDelegationsRequest): _62.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _62.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_62.QueryDelegatorUnbondingDelegationsResponse>): _62.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _62.QueryDelegatorUnbondingDelegationsResponseAmino): _62.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _62.QueryDelegatorUnbondingDelegationsResponse): _62.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _62.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _62.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _62.QueryDelegatorUnbondingDelegationsResponse): _62.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _62.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _62.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _62.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _62.QueryDelegatorUnbondingDelegationsResponse): _62.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _62.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryRedelegationsRequest;
                fromPartial(object: Partial<_62.QueryRedelegationsRequest>): _62.QueryRedelegationsRequest;
                fromAmino(object: _62.QueryRedelegationsRequestAmino): _62.QueryRedelegationsRequest;
                toAmino(message: _62.QueryRedelegationsRequest): _62.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _62.QueryRedelegationsRequestAminoMsg): _62.QueryRedelegationsRequest;
                toAminoMsg(message: _62.QueryRedelegationsRequest): _62.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _62.QueryRedelegationsRequestProtoMsg): _62.QueryRedelegationsRequest;
                toProto(message: _62.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _62.QueryRedelegationsRequest): _62.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _62.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryRedelegationsResponse;
                fromPartial(object: Partial<_62.QueryRedelegationsResponse>): _62.QueryRedelegationsResponse;
                fromAmino(object: _62.QueryRedelegationsResponseAmino): _62.QueryRedelegationsResponse;
                toAmino(message: _62.QueryRedelegationsResponse): _62.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _62.QueryRedelegationsResponseAminoMsg): _62.QueryRedelegationsResponse;
                toAminoMsg(message: _62.QueryRedelegationsResponse): _62.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _62.QueryRedelegationsResponseProtoMsg): _62.QueryRedelegationsResponse;
                toProto(message: _62.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _62.QueryRedelegationsResponse): _62.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _62.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_62.QueryDelegatorValidatorsRequest>): _62.QueryDelegatorValidatorsRequest;
                fromAmino(object: _62.QueryDelegatorValidatorsRequestAmino): _62.QueryDelegatorValidatorsRequest;
                toAmino(message: _62.QueryDelegatorValidatorsRequest): _62.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _62.QueryDelegatorValidatorsRequestAminoMsg): _62.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _62.QueryDelegatorValidatorsRequest): _62.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _62.QueryDelegatorValidatorsRequestProtoMsg): _62.QueryDelegatorValidatorsRequest;
                toProto(message: _62.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _62.QueryDelegatorValidatorsRequest): _62.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _62.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_62.QueryDelegatorValidatorsResponse>): _62.QueryDelegatorValidatorsResponse;
                fromAmino(object: _62.QueryDelegatorValidatorsResponseAmino): _62.QueryDelegatorValidatorsResponse;
                toAmino(message: _62.QueryDelegatorValidatorsResponse): _62.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _62.QueryDelegatorValidatorsResponseAminoMsg): _62.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _62.QueryDelegatorValidatorsResponse): _62.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _62.QueryDelegatorValidatorsResponseProtoMsg): _62.QueryDelegatorValidatorsResponse;
                toProto(message: _62.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _62.QueryDelegatorValidatorsResponse): _62.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _62.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_62.QueryDelegatorValidatorRequest>): _62.QueryDelegatorValidatorRequest;
                fromAmino(object: _62.QueryDelegatorValidatorRequestAmino): _62.QueryDelegatorValidatorRequest;
                toAmino(message: _62.QueryDelegatorValidatorRequest): _62.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _62.QueryDelegatorValidatorRequestAminoMsg): _62.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _62.QueryDelegatorValidatorRequest): _62.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _62.QueryDelegatorValidatorRequestProtoMsg): _62.QueryDelegatorValidatorRequest;
                toProto(message: _62.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _62.QueryDelegatorValidatorRequest): _62.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _62.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_62.QueryDelegatorValidatorResponse>): _62.QueryDelegatorValidatorResponse;
                fromAmino(object: _62.QueryDelegatorValidatorResponseAmino): _62.QueryDelegatorValidatorResponse;
                toAmino(message: _62.QueryDelegatorValidatorResponse): _62.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _62.QueryDelegatorValidatorResponseAminoMsg): _62.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _62.QueryDelegatorValidatorResponse): _62.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _62.QueryDelegatorValidatorResponseProtoMsg): _62.QueryDelegatorValidatorResponse;
                toProto(message: _62.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _62.QueryDelegatorValidatorResponse): _62.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _62.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_62.QueryHistoricalInfoRequest>): _62.QueryHistoricalInfoRequest;
                fromAmino(object: _62.QueryHistoricalInfoRequestAmino): _62.QueryHistoricalInfoRequest;
                toAmino(message: _62.QueryHistoricalInfoRequest): _62.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _62.QueryHistoricalInfoRequestAminoMsg): _62.QueryHistoricalInfoRequest;
                toAminoMsg(message: _62.QueryHistoricalInfoRequest): _62.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _62.QueryHistoricalInfoRequestProtoMsg): _62.QueryHistoricalInfoRequest;
                toProto(message: _62.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _62.QueryHistoricalInfoRequest): _62.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _62.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_62.QueryHistoricalInfoResponse>): _62.QueryHistoricalInfoResponse;
                fromAmino(object: _62.QueryHistoricalInfoResponseAmino): _62.QueryHistoricalInfoResponse;
                toAmino(message: _62.QueryHistoricalInfoResponse): _62.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _62.QueryHistoricalInfoResponseAminoMsg): _62.QueryHistoricalInfoResponse;
                toAminoMsg(message: _62.QueryHistoricalInfoResponse): _62.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _62.QueryHistoricalInfoResponseProtoMsg): _62.QueryHistoricalInfoResponse;
                toProto(message: _62.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _62.QueryHistoricalInfoResponse): _62.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _62.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.QueryPoolRequest;
                fromPartial(_: Partial<_62.QueryPoolRequest>): _62.QueryPoolRequest;
                fromAmino(_: _62.QueryPoolRequestAmino): _62.QueryPoolRequest;
                toAmino(_: _62.QueryPoolRequest): _62.QueryPoolRequestAmino;
                fromAminoMsg(object: _62.QueryPoolRequestAminoMsg): _62.QueryPoolRequest;
                toAminoMsg(message: _62.QueryPoolRequest): _62.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _62.QueryPoolRequestProtoMsg): _62.QueryPoolRequest;
                toProto(message: _62.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _62.QueryPoolRequest): _62.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _62.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryPoolResponse;
                fromPartial(object: Partial<_62.QueryPoolResponse>): _62.QueryPoolResponse;
                fromAmino(object: _62.QueryPoolResponseAmino): _62.QueryPoolResponse;
                toAmino(message: _62.QueryPoolResponse): _62.QueryPoolResponseAmino;
                fromAminoMsg(object: _62.QueryPoolResponseAminoMsg): _62.QueryPoolResponse;
                toAminoMsg(message: _62.QueryPoolResponse): _62.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _62.QueryPoolResponseProtoMsg): _62.QueryPoolResponse;
                toProto(message: _62.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _62.QueryPoolResponse): _62.QueryPoolResponseProtoMsg;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _61.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.LastValidatorPower;
                fromPartial(object: Partial<_61.LastValidatorPower>): _61.LastValidatorPower;
                fromAmino(object: _61.LastValidatorPowerAmino): _61.LastValidatorPower;
                toAmino(message: _61.LastValidatorPower): _61.LastValidatorPowerAmino;
                fromAminoMsg(object: _61.LastValidatorPowerAminoMsg): _61.LastValidatorPower;
                toAminoMsg(message: _61.LastValidatorPower): _61.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _61.LastValidatorPowerProtoMsg): _61.LastValidatorPower;
                toProto(message: _61.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _61.LastValidatorPower): _61.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _60.AuthorizationType;
            authorizationTypeToJSON(object: _60.AuthorizationType): string;
            AuthorizationType: typeof _60.AuthorizationType;
            AuthorizationTypeSDKType: typeof _60.AuthorizationType;
            AuthorizationTypeAmino: typeof _60.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _60.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.StakeAuthorization;
                fromPartial(object: Partial<_60.StakeAuthorization>): _60.StakeAuthorization;
                fromAmino(object: _60.StakeAuthorizationAmino): _60.StakeAuthorization;
                toAmino(message: _60.StakeAuthorization): _60.StakeAuthorizationAmino;
                fromAminoMsg(object: _60.StakeAuthorizationAminoMsg): _60.StakeAuthorization;
                toAminoMsg(message: _60.StakeAuthorization): _60.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _60.StakeAuthorizationProtoMsg): _60.StakeAuthorization;
                toProto(message: _60.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _60.StakeAuthorization): _60.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _60.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.StakeAuthorization_Validators;
                fromPartial(object: Partial<_60.StakeAuthorization_Validators>): _60.StakeAuthorization_Validators;
                fromAmino(object: _60.StakeAuthorization_ValidatorsAmino): _60.StakeAuthorization_Validators;
                toAmino(message: _60.StakeAuthorization_Validators): _60.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _60.StakeAuthorization_ValidatorsAminoMsg): _60.StakeAuthorization_Validators;
                toAminoMsg(message: _60.StakeAuthorization_Validators): _60.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _60.StakeAuthorization_ValidatorsProtoMsg): _60.StakeAuthorization_Validators;
                toProto(message: _60.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _60.StakeAuthorization_Validators): _60.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _65.SignMode;
                signModeToJSON(object: _65.SignMode): string;
                SignMode: typeof _65.SignMode;
                SignModeSDKType: typeof _65.SignMode;
                SignModeAmino: typeof _65.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _65.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.SignatureDescriptors;
                    fromPartial(object: Partial<_65.SignatureDescriptors>): _65.SignatureDescriptors;
                    fromAmino(object: _65.SignatureDescriptorsAmino): _65.SignatureDescriptors;
                    toAmino(message: _65.SignatureDescriptors): _65.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _65.SignatureDescriptorsAminoMsg): _65.SignatureDescriptors;
                    toAminoMsg(message: _65.SignatureDescriptors): _65.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _65.SignatureDescriptorsProtoMsg): _65.SignatureDescriptors;
                    toProto(message: _65.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _65.SignatureDescriptors): _65.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _65.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.SignatureDescriptor;
                    fromPartial(object: Partial<_65.SignatureDescriptor>): _65.SignatureDescriptor;
                    fromAmino(object: _65.SignatureDescriptorAmino): _65.SignatureDescriptor;
                    toAmino(message: _65.SignatureDescriptor): _65.SignatureDescriptorAmino;
                    fromAminoMsg(object: _65.SignatureDescriptorAminoMsg): _65.SignatureDescriptor;
                    toAminoMsg(message: _65.SignatureDescriptor): _65.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _65.SignatureDescriptorProtoMsg): _65.SignatureDescriptor;
                    toProto(message: _65.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _65.SignatureDescriptor): _65.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _65.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_65.SignatureDescriptor_Data>): _65.SignatureDescriptor_Data;
                    fromAmino(object: _65.SignatureDescriptor_DataAmino): _65.SignatureDescriptor_Data;
                    toAmino(message: _65.SignatureDescriptor_Data): _65.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _65.SignatureDescriptor_DataAminoMsg): _65.SignatureDescriptor_Data;
                    toAminoMsg(message: _65.SignatureDescriptor_Data): _65.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _65.SignatureDescriptor_DataProtoMsg): _65.SignatureDescriptor_Data;
                    toProto(message: _65.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _65.SignatureDescriptor_Data): _65.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _65.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_65.SignatureDescriptor_Data_Single>): _65.SignatureDescriptor_Data_Single;
                    fromAmino(object: _65.SignatureDescriptor_Data_SingleAmino): _65.SignatureDescriptor_Data_Single;
                    toAmino(message: _65.SignatureDescriptor_Data_Single): _65.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _65.SignatureDescriptor_Data_SingleAminoMsg): _65.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _65.SignatureDescriptor_Data_Single): _65.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _65.SignatureDescriptor_Data_SingleProtoMsg): _65.SignatureDescriptor_Data_Single;
                    toProto(message: _65.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _65.SignatureDescriptor_Data_Single): _65.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _65.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_65.SignatureDescriptor_Data_Multi>): _65.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _65.SignatureDescriptor_Data_MultiAmino): _65.SignatureDescriptor_Data_Multi;
                    toAmino(message: _65.SignatureDescriptor_Data_Multi): _65.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _65.SignatureDescriptor_Data_MultiAminoMsg): _65.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _65.SignatureDescriptor_Data_Multi): _65.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _65.SignatureDescriptor_Data_MultiProtoMsg): _65.SignatureDescriptor_Data_Multi;
                    toProto(message: _65.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _65.SignatureDescriptor_Data_Multi): _65.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _154.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _66.SimulateRequest): Promise<_66.SimulateResponse>;
                getTx(request: _66.GetTxRequest): Promise<_66.GetTxResponse>;
                broadcastTx(request: _66.BroadcastTxRequest): Promise<_66.BroadcastTxResponse>;
                getTxsEvent(request: _66.GetTxsEventRequest): Promise<_66.GetTxsEventResponse>;
                getBlockWithTxs(request: _66.GetBlockWithTxsRequest): Promise<_66.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _139.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _67.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.Tx;
                fromPartial(object: Partial<_67.Tx>): _67.Tx;
                fromAmino(object: _67.TxAmino): _67.Tx;
                toAmino(message: _67.Tx): _67.TxAmino;
                fromAminoMsg(object: _67.TxAminoMsg): _67.Tx;
                toAminoMsg(message: _67.Tx): _67.TxAminoMsg;
                fromProtoMsg(message: _67.TxProtoMsg): _67.Tx;
                toProto(message: _67.Tx): Uint8Array;
                toProtoMsg(message: _67.Tx): _67.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _67.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.TxRaw;
                fromPartial(object: Partial<_67.TxRaw>): _67.TxRaw;
                fromAmino(object: _67.TxRawAmino): _67.TxRaw;
                toAmino(message: _67.TxRaw): _67.TxRawAmino;
                fromAminoMsg(object: _67.TxRawAminoMsg): _67.TxRaw;
                toAminoMsg(message: _67.TxRaw): _67.TxRawAminoMsg;
                fromProtoMsg(message: _67.TxRawProtoMsg): _67.TxRaw;
                toProto(message: _67.TxRaw): Uint8Array;
                toProtoMsg(message: _67.TxRaw): _67.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _67.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.SignDoc;
                fromPartial(object: Partial<_67.SignDoc>): _67.SignDoc;
                fromAmino(object: _67.SignDocAmino): _67.SignDoc;
                toAmino(message: _67.SignDoc): _67.SignDocAmino;
                fromAminoMsg(object: _67.SignDocAminoMsg): _67.SignDoc;
                toAminoMsg(message: _67.SignDoc): _67.SignDocAminoMsg;
                fromProtoMsg(message: _67.SignDocProtoMsg): _67.SignDoc;
                toProto(message: _67.SignDoc): Uint8Array;
                toProtoMsg(message: _67.SignDoc): _67.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _67.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.TxBody;
                fromPartial(object: Partial<_67.TxBody>): _67.TxBody;
                fromAmino(object: _67.TxBodyAmino): _67.TxBody;
                toAmino(message: _67.TxBody): _67.TxBodyAmino;
                fromAminoMsg(object: _67.TxBodyAminoMsg): _67.TxBody;
                toAminoMsg(message: _67.TxBody): _67.TxBodyAminoMsg;
                fromProtoMsg(message: _67.TxBodyProtoMsg): _67.TxBody;
                toProto(message: _67.TxBody): Uint8Array;
                toProtoMsg(message: _67.TxBody): _67.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _67.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.AuthInfo;
                fromPartial(object: Partial<_67.AuthInfo>): _67.AuthInfo;
                fromAmino(object: _67.AuthInfoAmino): _67.AuthInfo;
                toAmino(message: _67.AuthInfo): _67.AuthInfoAmino;
                fromAminoMsg(object: _67.AuthInfoAminoMsg): _67.AuthInfo;
                toAminoMsg(message: _67.AuthInfo): _67.AuthInfoAminoMsg;
                fromProtoMsg(message: _67.AuthInfoProtoMsg): _67.AuthInfo;
                toProto(message: _67.AuthInfo): Uint8Array;
                toProtoMsg(message: _67.AuthInfo): _67.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _67.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.SignerInfo;
                fromPartial(object: Partial<_67.SignerInfo>): _67.SignerInfo;
                fromAmino(object: _67.SignerInfoAmino): _67.SignerInfo;
                toAmino(message: _67.SignerInfo): _67.SignerInfoAmino;
                fromAminoMsg(object: _67.SignerInfoAminoMsg): _67.SignerInfo;
                toAminoMsg(message: _67.SignerInfo): _67.SignerInfoAminoMsg;
                fromProtoMsg(message: _67.SignerInfoProtoMsg): _67.SignerInfo;
                toProto(message: _67.SignerInfo): Uint8Array;
                toProtoMsg(message: _67.SignerInfo): _67.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _67.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.ModeInfo;
                fromPartial(object: Partial<_67.ModeInfo>): _67.ModeInfo;
                fromAmino(object: _67.ModeInfoAmino): _67.ModeInfo;
                toAmino(message: _67.ModeInfo): _67.ModeInfoAmino;
                fromAminoMsg(object: _67.ModeInfoAminoMsg): _67.ModeInfo;
                toAminoMsg(message: _67.ModeInfo): _67.ModeInfoAminoMsg;
                fromProtoMsg(message: _67.ModeInfoProtoMsg): _67.ModeInfo;
                toProto(message: _67.ModeInfo): Uint8Array;
                toProtoMsg(message: _67.ModeInfo): _67.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _67.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.ModeInfo_Single;
                fromPartial(object: Partial<_67.ModeInfo_Single>): _67.ModeInfo_Single;
                fromAmino(object: _67.ModeInfo_SingleAmino): _67.ModeInfo_Single;
                toAmino(message: _67.ModeInfo_Single): _67.ModeInfo_SingleAmino;
                fromAminoMsg(object: _67.ModeInfo_SingleAminoMsg): _67.ModeInfo_Single;
                toAminoMsg(message: _67.ModeInfo_Single): _67.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _67.ModeInfo_SingleProtoMsg): _67.ModeInfo_Single;
                toProto(message: _67.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _67.ModeInfo_Single): _67.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _67.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.ModeInfo_Multi;
                fromPartial(object: Partial<_67.ModeInfo_Multi>): _67.ModeInfo_Multi;
                fromAmino(object: _67.ModeInfo_MultiAmino): _67.ModeInfo_Multi;
                toAmino(message: _67.ModeInfo_Multi): _67.ModeInfo_MultiAmino;
                fromAminoMsg(object: _67.ModeInfo_MultiAminoMsg): _67.ModeInfo_Multi;
                toAminoMsg(message: _67.ModeInfo_Multi): _67.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _67.ModeInfo_MultiProtoMsg): _67.ModeInfo_Multi;
                toProto(message: _67.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _67.ModeInfo_Multi): _67.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _67.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.Fee;
                fromPartial(object: Partial<_67.Fee>): _67.Fee;
                fromAmino(object: _67.FeeAmino): _67.Fee;
                toAmino(message: _67.Fee): _67.FeeAmino;
                fromAminoMsg(object: _67.FeeAminoMsg): _67.Fee;
                toAminoMsg(message: _67.Fee): _67.FeeAminoMsg;
                fromProtoMsg(message: _67.FeeProtoMsg): _67.Fee;
                toProto(message: _67.Fee): Uint8Array;
                toProtoMsg(message: _67.Fee): _67.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _66.OrderBy;
            orderByToJSON(object: _66.OrderBy): string;
            broadcastModeFromJSON(object: any): _66.BroadcastMode;
            broadcastModeToJSON(object: _66.BroadcastMode): string;
            OrderBy: typeof _66.OrderBy;
            OrderBySDKType: typeof _66.OrderBy;
            OrderByAmino: typeof _66.OrderBy;
            BroadcastMode: typeof _66.BroadcastMode;
            BroadcastModeSDKType: typeof _66.BroadcastMode;
            BroadcastModeAmino: typeof _66.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _66.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.GetTxsEventRequest;
                fromPartial(object: Partial<_66.GetTxsEventRequest>): _66.GetTxsEventRequest;
                fromAmino(object: _66.GetTxsEventRequestAmino): _66.GetTxsEventRequest;
                toAmino(message: _66.GetTxsEventRequest): _66.GetTxsEventRequestAmino;
                fromAminoMsg(object: _66.GetTxsEventRequestAminoMsg): _66.GetTxsEventRequest;
                toAminoMsg(message: _66.GetTxsEventRequest): _66.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _66.GetTxsEventRequestProtoMsg): _66.GetTxsEventRequest;
                toProto(message: _66.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _66.GetTxsEventRequest): _66.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _66.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.GetTxsEventResponse;
                fromPartial(object: Partial<_66.GetTxsEventResponse>): _66.GetTxsEventResponse;
                fromAmino(object: _66.GetTxsEventResponseAmino): _66.GetTxsEventResponse;
                toAmino(message: _66.GetTxsEventResponse): _66.GetTxsEventResponseAmino;
                fromAminoMsg(object: _66.GetTxsEventResponseAminoMsg): _66.GetTxsEventResponse;
                toAminoMsg(message: _66.GetTxsEventResponse): _66.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _66.GetTxsEventResponseProtoMsg): _66.GetTxsEventResponse;
                toProto(message: _66.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _66.GetTxsEventResponse): _66.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _66.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.BroadcastTxRequest;
                fromPartial(object: Partial<_66.BroadcastTxRequest>): _66.BroadcastTxRequest;
                fromAmino(object: _66.BroadcastTxRequestAmino): _66.BroadcastTxRequest;
                toAmino(message: _66.BroadcastTxRequest): _66.BroadcastTxRequestAmino;
                fromAminoMsg(object: _66.BroadcastTxRequestAminoMsg): _66.BroadcastTxRequest;
                toAminoMsg(message: _66.BroadcastTxRequest): _66.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _66.BroadcastTxRequestProtoMsg): _66.BroadcastTxRequest;
                toProto(message: _66.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _66.BroadcastTxRequest): _66.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _66.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.BroadcastTxResponse;
                fromPartial(object: Partial<_66.BroadcastTxResponse>): _66.BroadcastTxResponse;
                fromAmino(object: _66.BroadcastTxResponseAmino): _66.BroadcastTxResponse;
                toAmino(message: _66.BroadcastTxResponse): _66.BroadcastTxResponseAmino;
                fromAminoMsg(object: _66.BroadcastTxResponseAminoMsg): _66.BroadcastTxResponse;
                toAminoMsg(message: _66.BroadcastTxResponse): _66.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _66.BroadcastTxResponseProtoMsg): _66.BroadcastTxResponse;
                toProto(message: _66.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _66.BroadcastTxResponse): _66.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _66.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.SimulateRequest;
                fromPartial(object: Partial<_66.SimulateRequest>): _66.SimulateRequest;
                fromAmino(object: _66.SimulateRequestAmino): _66.SimulateRequest;
                toAmino(message: _66.SimulateRequest): _66.SimulateRequestAmino;
                fromAminoMsg(object: _66.SimulateRequestAminoMsg): _66.SimulateRequest;
                toAminoMsg(message: _66.SimulateRequest): _66.SimulateRequestAminoMsg;
                fromProtoMsg(message: _66.SimulateRequestProtoMsg): _66.SimulateRequest;
                toProto(message: _66.SimulateRequest): Uint8Array;
                toProtoMsg(message: _66.SimulateRequest): _66.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _66.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.SimulateResponse;
                fromPartial(object: Partial<_66.SimulateResponse>): _66.SimulateResponse;
                fromAmino(object: _66.SimulateResponseAmino): _66.SimulateResponse;
                toAmino(message: _66.SimulateResponse): _66.SimulateResponseAmino;
                fromAminoMsg(object: _66.SimulateResponseAminoMsg): _66.SimulateResponse;
                toAminoMsg(message: _66.SimulateResponse): _66.SimulateResponseAminoMsg;
                fromProtoMsg(message: _66.SimulateResponseProtoMsg): _66.SimulateResponse;
                toProto(message: _66.SimulateResponse): Uint8Array;
                toProtoMsg(message: _66.SimulateResponse): _66.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _66.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.GetTxRequest;
                fromPartial(object: Partial<_66.GetTxRequest>): _66.GetTxRequest;
                fromAmino(object: _66.GetTxRequestAmino): _66.GetTxRequest;
                toAmino(message: _66.GetTxRequest): _66.GetTxRequestAmino;
                fromAminoMsg(object: _66.GetTxRequestAminoMsg): _66.GetTxRequest;
                toAminoMsg(message: _66.GetTxRequest): _66.GetTxRequestAminoMsg;
                fromProtoMsg(message: _66.GetTxRequestProtoMsg): _66.GetTxRequest;
                toProto(message: _66.GetTxRequest): Uint8Array;
                toProtoMsg(message: _66.GetTxRequest): _66.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _66.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.GetTxResponse;
                fromPartial(object: Partial<_66.GetTxResponse>): _66.GetTxResponse;
                fromAmino(object: _66.GetTxResponseAmino): _66.GetTxResponse;
                toAmino(message: _66.GetTxResponse): _66.GetTxResponseAmino;
                fromAminoMsg(object: _66.GetTxResponseAminoMsg): _66.GetTxResponse;
                toAminoMsg(message: _66.GetTxResponse): _66.GetTxResponseAminoMsg;
                fromProtoMsg(message: _66.GetTxResponseProtoMsg): _66.GetTxResponse;
                toProto(message: _66.GetTxResponse): Uint8Array;
                toProtoMsg(message: _66.GetTxResponse): _66.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _66.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_66.GetBlockWithTxsRequest>): _66.GetBlockWithTxsRequest;
                fromAmino(object: _66.GetBlockWithTxsRequestAmino): _66.GetBlockWithTxsRequest;
                toAmino(message: _66.GetBlockWithTxsRequest): _66.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _66.GetBlockWithTxsRequestAminoMsg): _66.GetBlockWithTxsRequest;
                toAminoMsg(message: _66.GetBlockWithTxsRequest): _66.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _66.GetBlockWithTxsRequestProtoMsg): _66.GetBlockWithTxsRequest;
                toProto(message: _66.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _66.GetBlockWithTxsRequest): _66.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _66.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_66.GetBlockWithTxsResponse>): _66.GetBlockWithTxsResponse;
                fromAmino(object: _66.GetBlockWithTxsResponseAmino): _66.GetBlockWithTxsResponse;
                toAmino(message: _66.GetBlockWithTxsResponse): _66.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _66.GetBlockWithTxsResponseAminoMsg): _66.GetBlockWithTxsResponse;
                toAminoMsg(message: _66.GetBlockWithTxsResponse): _66.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _66.GetBlockWithTxsResponseProtoMsg): _66.GetBlockWithTxsResponse;
                toProto(message: _66.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _66.GetBlockWithTxsResponse): _66.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _155.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _68.QueryCurrentPlanRequest): Promise<_68.QueryCurrentPlanResponse>;
                appliedPlan(request: _68.QueryAppliedPlanRequest): Promise<_68.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _68.QueryUpgradedConsensusStateRequest): Promise<_68.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _68.QueryModuleVersionsRequest): Promise<_68.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _140.LCDQueryClient;
            Plan: {
                typeUrl: string;
                encode(message: _69.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.Plan;
                fromPartial(object: Partial<_69.Plan>): _69.Plan;
                fromAmino(object: _69.PlanAmino): _69.Plan;
                toAmino(message: _69.Plan): _69.PlanAmino;
                fromAminoMsg(object: _69.PlanAminoMsg): _69.Plan;
                toAminoMsg(message: _69.Plan): _69.PlanAminoMsg;
                fromProtoMsg(message: _69.PlanProtoMsg): _69.Plan;
                toProto(message: _69.Plan): Uint8Array;
                toProtoMsg(message: _69.Plan): _69.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _69.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_69.SoftwareUpgradeProposal>): _69.SoftwareUpgradeProposal;
                fromAmino(object: _69.SoftwareUpgradeProposalAmino): _69.SoftwareUpgradeProposal;
                toAmino(message: _69.SoftwareUpgradeProposal): _69.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _69.SoftwareUpgradeProposalAminoMsg): _69.SoftwareUpgradeProposal;
                toAminoMsg(message: _69.SoftwareUpgradeProposal): _69.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _69.SoftwareUpgradeProposalProtoMsg): _69.SoftwareUpgradeProposal;
                toProto(message: _69.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _69.SoftwareUpgradeProposal): _69.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _69.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_69.CancelSoftwareUpgradeProposal>): _69.CancelSoftwareUpgradeProposal;
                fromAmino(object: _69.CancelSoftwareUpgradeProposalAmino): _69.CancelSoftwareUpgradeProposal;
                toAmino(message: _69.CancelSoftwareUpgradeProposal): _69.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _69.CancelSoftwareUpgradeProposalAminoMsg): _69.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _69.CancelSoftwareUpgradeProposal): _69.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _69.CancelSoftwareUpgradeProposalProtoMsg): _69.CancelSoftwareUpgradeProposal;
                toProto(message: _69.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _69.CancelSoftwareUpgradeProposal): _69.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _69.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.ModuleVersion;
                fromPartial(object: Partial<_69.ModuleVersion>): _69.ModuleVersion;
                fromAmino(object: _69.ModuleVersionAmino): _69.ModuleVersion;
                toAmino(message: _69.ModuleVersion): _69.ModuleVersionAmino;
                fromAminoMsg(object: _69.ModuleVersionAminoMsg): _69.ModuleVersion;
                toAminoMsg(message: _69.ModuleVersion): _69.ModuleVersionAminoMsg;
                fromProtoMsg(message: _69.ModuleVersionProtoMsg): _69.ModuleVersion;
                toProto(message: _69.ModuleVersion): Uint8Array;
                toProtoMsg(message: _69.ModuleVersion): _69.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _68.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_68.QueryCurrentPlanRequest>): _68.QueryCurrentPlanRequest;
                fromAmino(_: _68.QueryCurrentPlanRequestAmino): _68.QueryCurrentPlanRequest;
                toAmino(_: _68.QueryCurrentPlanRequest): _68.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _68.QueryCurrentPlanRequestAminoMsg): _68.QueryCurrentPlanRequest;
                toAminoMsg(message: _68.QueryCurrentPlanRequest): _68.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _68.QueryCurrentPlanRequestProtoMsg): _68.QueryCurrentPlanRequest;
                toProto(message: _68.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _68.QueryCurrentPlanRequest): _68.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _68.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_68.QueryCurrentPlanResponse>): _68.QueryCurrentPlanResponse;
                fromAmino(object: _68.QueryCurrentPlanResponseAmino): _68.QueryCurrentPlanResponse;
                toAmino(message: _68.QueryCurrentPlanResponse): _68.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _68.QueryCurrentPlanResponseAminoMsg): _68.QueryCurrentPlanResponse;
                toAminoMsg(message: _68.QueryCurrentPlanResponse): _68.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _68.QueryCurrentPlanResponseProtoMsg): _68.QueryCurrentPlanResponse;
                toProto(message: _68.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _68.QueryCurrentPlanResponse): _68.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _68.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_68.QueryAppliedPlanRequest>): _68.QueryAppliedPlanRequest;
                fromAmino(object: _68.QueryAppliedPlanRequestAmino): _68.QueryAppliedPlanRequest;
                toAmino(message: _68.QueryAppliedPlanRequest): _68.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _68.QueryAppliedPlanRequestAminoMsg): _68.QueryAppliedPlanRequest;
                toAminoMsg(message: _68.QueryAppliedPlanRequest): _68.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _68.QueryAppliedPlanRequestProtoMsg): _68.QueryAppliedPlanRequest;
                toProto(message: _68.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _68.QueryAppliedPlanRequest): _68.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _68.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_68.QueryAppliedPlanResponse>): _68.QueryAppliedPlanResponse;
                fromAmino(object: _68.QueryAppliedPlanResponseAmino): _68.QueryAppliedPlanResponse;
                toAmino(message: _68.QueryAppliedPlanResponse): _68.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _68.QueryAppliedPlanResponseAminoMsg): _68.QueryAppliedPlanResponse;
                toAminoMsg(message: _68.QueryAppliedPlanResponse): _68.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _68.QueryAppliedPlanResponseProtoMsg): _68.QueryAppliedPlanResponse;
                toProto(message: _68.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _68.QueryAppliedPlanResponse): _68.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _68.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_68.QueryUpgradedConsensusStateRequest>): _68.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _68.QueryUpgradedConsensusStateRequestAmino): _68.QueryUpgradedConsensusStateRequest;
                toAmino(message: _68.QueryUpgradedConsensusStateRequest): _68.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _68.QueryUpgradedConsensusStateRequestAminoMsg): _68.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _68.QueryUpgradedConsensusStateRequest): _68.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _68.QueryUpgradedConsensusStateRequestProtoMsg): _68.QueryUpgradedConsensusStateRequest;
                toProto(message: _68.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _68.QueryUpgradedConsensusStateRequest): _68.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _68.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_68.QueryUpgradedConsensusStateResponse>): _68.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _68.QueryUpgradedConsensusStateResponseAmino): _68.QueryUpgradedConsensusStateResponse;
                toAmino(message: _68.QueryUpgradedConsensusStateResponse): _68.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _68.QueryUpgradedConsensusStateResponseAminoMsg): _68.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _68.QueryUpgradedConsensusStateResponse): _68.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _68.QueryUpgradedConsensusStateResponseProtoMsg): _68.QueryUpgradedConsensusStateResponse;
                toProto(message: _68.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _68.QueryUpgradedConsensusStateResponse): _68.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _68.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_68.QueryModuleVersionsRequest>): _68.QueryModuleVersionsRequest;
                fromAmino(object: _68.QueryModuleVersionsRequestAmino): _68.QueryModuleVersionsRequest;
                toAmino(message: _68.QueryModuleVersionsRequest): _68.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _68.QueryModuleVersionsRequestAminoMsg): _68.QueryModuleVersionsRequest;
                toAminoMsg(message: _68.QueryModuleVersionsRequest): _68.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _68.QueryModuleVersionsRequestProtoMsg): _68.QueryModuleVersionsRequest;
                toProto(message: _68.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _68.QueryModuleVersionsRequest): _68.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _68.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_68.QueryModuleVersionsResponse>): _68.QueryModuleVersionsResponse;
                fromAmino(object: _68.QueryModuleVersionsResponseAmino): _68.QueryModuleVersionsResponse;
                toAmino(message: _68.QueryModuleVersionsResponse): _68.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _68.QueryModuleVersionsResponseAminoMsg): _68.QueryModuleVersionsResponse;
                toAminoMsg(message: _68.QueryModuleVersionsResponse): _68.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _68.QueryModuleVersionsResponseProtoMsg): _68.QueryModuleVersionsResponse;
                toProto(message: _68.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _68.QueryModuleVersionsResponse): _68.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _165.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _70.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _70.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _70.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _70.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _70.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _70.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _70.MsgCreateVestingAccount) => _70.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _70.MsgCreateVestingAccountAmino) => _70.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _71.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.BaseVestingAccount;
                fromPartial(object: Partial<_71.BaseVestingAccount>): _71.BaseVestingAccount;
                fromAmino(object: _71.BaseVestingAccountAmino): _71.BaseVestingAccount;
                toAmino(message: _71.BaseVestingAccount): _71.BaseVestingAccountAmino;
                fromAminoMsg(object: _71.BaseVestingAccountAminoMsg): _71.BaseVestingAccount;
                toAminoMsg(message: _71.BaseVestingAccount): _71.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _71.BaseVestingAccountProtoMsg): _71.BaseVestingAccount;
                toProto(message: _71.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _71.BaseVestingAccount): _71.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _71.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.ContinuousVestingAccount;
                fromPartial(object: Partial<_71.ContinuousVestingAccount>): _71.ContinuousVestingAccount;
                fromAmino(object: _71.ContinuousVestingAccountAmino): _71.ContinuousVestingAccount;
                toAmino(message: _71.ContinuousVestingAccount): _71.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _71.ContinuousVestingAccountAminoMsg): _71.ContinuousVestingAccount;
                toAminoMsg(message: _71.ContinuousVestingAccount): _71.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _71.ContinuousVestingAccountProtoMsg): _71.ContinuousVestingAccount;
                toProto(message: _71.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _71.ContinuousVestingAccount): _71.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _71.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.DelayedVestingAccount;
                fromPartial(object: Partial<_71.DelayedVestingAccount>): _71.DelayedVestingAccount;
                fromAmino(object: _71.DelayedVestingAccountAmino): _71.DelayedVestingAccount;
                toAmino(message: _71.DelayedVestingAccount): _71.DelayedVestingAccountAmino;
                fromAminoMsg(object: _71.DelayedVestingAccountAminoMsg): _71.DelayedVestingAccount;
                toAminoMsg(message: _71.DelayedVestingAccount): _71.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _71.DelayedVestingAccountProtoMsg): _71.DelayedVestingAccount;
                toProto(message: _71.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _71.DelayedVestingAccount): _71.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _71.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Period;
                fromPartial(object: Partial<_71.Period>): _71.Period;
                fromAmino(object: _71.PeriodAmino): _71.Period;
                toAmino(message: _71.Period): _71.PeriodAmino;
                fromAminoMsg(object: _71.PeriodAminoMsg): _71.Period;
                toAminoMsg(message: _71.Period): _71.PeriodAminoMsg;
                fromProtoMsg(message: _71.PeriodProtoMsg): _71.Period;
                toProto(message: _71.Period): Uint8Array;
                toProtoMsg(message: _71.Period): _71.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _71.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.PeriodicVestingAccount;
                fromPartial(object: Partial<_71.PeriodicVestingAccount>): _71.PeriodicVestingAccount;
                fromAmino(object: _71.PeriodicVestingAccountAmino): _71.PeriodicVestingAccount;
                toAmino(message: _71.PeriodicVestingAccount): _71.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _71.PeriodicVestingAccountAminoMsg): _71.PeriodicVestingAccount;
                toAminoMsg(message: _71.PeriodicVestingAccount): _71.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _71.PeriodicVestingAccountProtoMsg): _71.PeriodicVestingAccount;
                toProto(message: _71.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _71.PeriodicVestingAccount): _71.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _71.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.PermanentLockedAccount;
                fromPartial(object: Partial<_71.PermanentLockedAccount>): _71.PermanentLockedAccount;
                fromAmino(object: _71.PermanentLockedAccountAmino): _71.PermanentLockedAccount;
                toAmino(message: _71.PermanentLockedAccount): _71.PermanentLockedAccountAmino;
                fromAminoMsg(object: _71.PermanentLockedAccountAminoMsg): _71.PermanentLockedAccount;
                toAminoMsg(message: _71.PermanentLockedAccount): _71.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _71.PermanentLockedAccountProtoMsg): _71.PermanentLockedAccount;
                toProto(message: _71.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _71.PermanentLockedAccount): _71.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _70.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgCreateVestingAccount;
                fromPartial(object: Partial<_70.MsgCreateVestingAccount>): _70.MsgCreateVestingAccount;
                fromAmino(object: _70.MsgCreateVestingAccountAmino): _70.MsgCreateVestingAccount;
                toAmino(message: _70.MsgCreateVestingAccount): _70.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _70.MsgCreateVestingAccountAminoMsg): _70.MsgCreateVestingAccount;
                toAminoMsg(message: _70.MsgCreateVestingAccount): _70.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _70.MsgCreateVestingAccountProtoMsg): _70.MsgCreateVestingAccount;
                toProto(message: _70.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _70.MsgCreateVestingAccount): _70.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _70.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _70.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_70.MsgCreateVestingAccountResponse>): _70.MsgCreateVestingAccountResponse;
                fromAmino(_: _70.MsgCreateVestingAccountResponseAmino): _70.MsgCreateVestingAccountResponse;
                toAmino(_: _70.MsgCreateVestingAccountResponse): _70.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _70.MsgCreateVestingAccountResponseAminoMsg): _70.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _70.MsgCreateVestingAccountResponse): _70.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _70.MsgCreateVestingAccountResponseProtoMsg): _70.MsgCreateVestingAccountResponse;
                toProto(message: _70.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _70.MsgCreateVestingAccountResponse): _70.MsgCreateVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _156.MsgClientImpl;
                };
                bank: {
                    v1beta1: _157.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _158.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _159.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _160.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _161.MsgClientImpl;
                };
                gov: {
                    v1beta1: _162.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _163.MsgClientImpl;
                };
                staking: {
                    v1beta1: _164.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _165.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _4.QueryAccountsRequest): Promise<_4.QueryAccountsResponse>;
                        account(request: _4.QueryAccountRequest): Promise<_4.QueryAccountResponse>;
                        params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
                        moduleAccountByName(request: _4.QueryModuleAccountByNameRequest): Promise<_4.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _8.QueryGrantsRequest): Promise<_8.QueryGrantsResponse>;
                        granterGrants(request: _8.QueryGranterGrantsRequest): Promise<_8.QueryGranterGrantsResponse>;
                        granteeGrants(request: _8.QueryGranteeGrantsRequest): Promise<_8.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _13.QueryBalanceRequest): Promise<_13.QueryBalanceResponse>;
                        allBalances(request: _13.QueryAllBalancesRequest): Promise<_13.QueryAllBalancesResponse>;
                        spendableBalances(request: _13.QuerySpendableBalancesRequest): Promise<_13.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _13.QueryTotalSupplyRequest): Promise<_13.QueryTotalSupplyResponse>;
                        supplyOf(request: _13.QuerySupplyOfRequest): Promise<_13.QuerySupplyOfResponse>;
                        params(request?: _13.QueryParamsRequest): Promise<_13.QueryParamsResponse>;
                        denomMetadata(request: _13.QueryDenomMetadataRequest): Promise<_13.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _13.QueryDenomsMetadataRequest): Promise<_13.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _17.ConfigRequest): Promise<_17.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _24.GetNodeInfoRequest): Promise<_24.GetNodeInfoResponse>;
                            getSyncing(request?: _24.GetSyncingRequest): Promise<_24.GetSyncingResponse>;
                            getLatestBlock(request?: _24.GetLatestBlockRequest): Promise<_24.GetLatestBlockResponse>;
                            getBlockByHeight(request: _24.GetBlockByHeightRequest): Promise<_24.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _24.GetLatestValidatorSetRequest): Promise<_24.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _24.GetValidatorSetByHeightRequest): Promise<_24.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _36.QueryValidatorOutstandingRewardsRequest): Promise<_36.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _36.QueryValidatorCommissionRequest): Promise<_36.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _36.QueryValidatorSlashesRequest): Promise<_36.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _36.QueryDelegationRewardsRequest): Promise<_36.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _36.QueryDelegationTotalRewardsRequest): Promise<_36.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _36.QueryDelegatorValidatorsRequest): Promise<_36.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _36.QueryDelegatorWithdrawAddressRequest): Promise<_36.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _36.QueryCommunityPoolRequest): Promise<_36.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _40.QueryEvidenceRequest): Promise<_40.QueryEvidenceResponse>;
                        allEvidence(request?: _40.QueryAllEvidenceRequest): Promise<_40.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _44.QueryAllowanceRequest): Promise<_44.QueryAllowanceResponse>;
                        allowances(request: _44.QueryAllowancesRequest): Promise<_44.QueryAllowancesResponse>;
                        allowancesByGranter(request: _44.QueryAllowancesByGranterRequest): Promise<_44.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _49.QueryProposalRequest): Promise<_49.QueryProposalResponse>;
                        proposals(request: _49.QueryProposalsRequest): Promise<_49.QueryProposalsResponse>;
                        vote(request: _49.QueryVoteRequest): Promise<_49.QueryVoteResponse>;
                        votes(request: _49.QueryVotesRequest): Promise<_49.QueryVotesResponse>;
                        params(request: _49.QueryParamsRequest): Promise<_49.QueryParamsResponse>;
                        deposit(request: _49.QueryDepositRequest): Promise<_49.QueryDepositResponse>;
                        deposits(request: _49.QueryDepositsRequest): Promise<_49.QueryDepositsResponse>;
                        tallyResult(request: _49.QueryTallyResultRequest): Promise<_49.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
                        inflation(request?: _53.QueryInflationRequest): Promise<_53.QueryInflationResponse>;
                        annualProvisions(request?: _53.QueryAnnualProvisionsRequest): Promise<_53.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                        signingInfo(request: _57.QuerySigningInfoRequest): Promise<_57.QuerySigningInfoResponse>;
                        signingInfos(request?: _57.QuerySigningInfosRequest): Promise<_57.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _62.QueryValidatorsRequest): Promise<_62.QueryValidatorsResponse>;
                        validator(request: _62.QueryValidatorRequest): Promise<_62.QueryValidatorResponse>;
                        validatorDelegations(request: _62.QueryValidatorDelegationsRequest): Promise<_62.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _62.QueryValidatorUnbondingDelegationsRequest): Promise<_62.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _62.QueryDelegationRequest): Promise<_62.QueryDelegationResponse>;
                        unbondingDelegation(request: _62.QueryUnbondingDelegationRequest): Promise<_62.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _62.QueryDelegatorDelegationsRequest): Promise<_62.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _62.QueryDelegatorUnbondingDelegationsRequest): Promise<_62.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _62.QueryRedelegationsRequest): Promise<_62.QueryRedelegationsResponse>;
                        delegatorValidators(request: _62.QueryDelegatorValidatorsRequest): Promise<_62.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _62.QueryDelegatorValidatorRequest): Promise<_62.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _62.QueryHistoricalInfoRequest): Promise<_62.QueryHistoricalInfoResponse>;
                        pool(request?: _62.QueryPoolRequest): Promise<_62.QueryPoolResponse>;
                        params(request?: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _66.SimulateRequest): Promise<_66.SimulateResponse>;
                        getTx(request: _66.GetTxRequest): Promise<_66.GetTxResponse>;
                        broadcastTx(request: _66.BroadcastTxRequest): Promise<_66.BroadcastTxResponse>;
                        getTxsEvent(request: _66.GetTxsEventRequest): Promise<_66.GetTxsEventResponse>;
                        getBlockWithTxs(request: _66.GetBlockWithTxsRequest): Promise<_66.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _68.QueryCurrentPlanRequest): Promise<_68.QueryCurrentPlanResponse>;
                        appliedPlan(request: _68.QueryAppliedPlanRequest): Promise<_68.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _68.QueryUpgradedConsensusStateRequest): Promise<_68.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _68.QueryModuleVersionsRequest): Promise<_68.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _126.LCDQueryClient;
                };
                authz: {
                    v1beta1: _127.LCDQueryClient;
                };
                bank: {
                    v1beta1: _128.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _129.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _130.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _131.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _132.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _133.LCDQueryClient;
                };
                gov: {
                    v1beta1: _134.LCDQueryClient;
                };
                mint: {
                    v1beta1: _135.LCDQueryClient;
                };
                params: {
                    v1beta1: _136.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _137.LCDQueryClient;
                };
                staking: {
                    v1beta1: _138.LCDQueryClient;
                };
                tx: {
                    v1beta1: _139.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _140.LCDQueryClient;
                };
            };
        }>;
    };
}
