import * as _0 from "./auth/v1beta1/auth";
import * as _1 from "./auth/v1beta1/genesis";
import * as _2 from "./auth/v1beta1/query";
import * as _3 from "./authz/v1beta1/authz";
import * as _4 from "./authz/v1beta1/event";
import * as _5 from "./authz/v1beta1/genesis";
import * as _6 from "./authz/v1beta1/query";
import * as _7 from "./authz/v1beta1/tx";
import * as _8 from "./bank/v1beta1/authz";
import * as _9 from "./bank/v1beta1/bank";
import * as _10 from "./bank/v1beta1/genesis";
import * as _11 from "./bank/v1beta1/query";
import * as _12 from "./bank/v1beta1/tx";
import * as _13 from "./base/abci/v1beta1/abci";
import * as _14 from "./base/kv/v1beta1/kv";
import * as _15 from "./base/node/v1beta1/query";
import * as _16 from "./base/query/v1beta1/pagination";
import * as _17 from "./base/reflection/v1beta1/reflection";
import * as _18 from "./base/reflection/v2alpha1/reflection";
import * as _19 from "./base/snapshots/v1beta1/snapshot";
import * as _20 from "./base/store/v1beta1/commit_info";
import * as _21 from "./base/store/v1beta1/listening";
import * as _22 from "./base/tendermint/v1beta1/query";
import * as _23 from "./base/v1beta1/coin";
import * as _24 from "./capability/v1beta1/capability";
import * as _25 from "./capability/v1beta1/genesis";
import * as _26 from "./crisis/v1beta1/genesis";
import * as _27 from "./crisis/v1beta1/tx";
import * as _28 from "./crypto/ed25519/keys";
import * as _29 from "./crypto/multisig/keys";
import * as _30 from "./crypto/secp256k1/keys";
import * as _31 from "./crypto/secp256r1/keys";
import * as _32 from "./distribution/v1beta1/distribution";
import * as _33 from "./distribution/v1beta1/genesis";
import * as _34 from "./distribution/v1beta1/query";
import * as _35 from "./distribution/v1beta1/tx";
import * as _36 from "./evidence/v1beta1/evidence";
import * as _37 from "./evidence/v1beta1/genesis";
import * as _38 from "./evidence/v1beta1/query";
import * as _39 from "./evidence/v1beta1/tx";
import * as _40 from "./feegrant/v1beta1/feegrant";
import * as _41 from "./feegrant/v1beta1/genesis";
import * as _42 from "./feegrant/v1beta1/query";
import * as _43 from "./feegrant/v1beta1/tx";
import * as _44 from "./genutil/v1beta1/genesis";
import * as _45 from "./gov/v1beta1/genesis";
import * as _46 from "./gov/v1beta1/gov";
import * as _47 from "./gov/v1beta1/query";
import * as _48 from "./gov/v1beta1/tx";
import * as _49 from "./mint/v1beta1/genesis";
import * as _50 from "./mint/v1beta1/mint";
import * as _51 from "./mint/v1beta1/query";
import * as _52 from "./params/v1beta1/params";
import * as _53 from "./params/v1beta1/query";
import * as _54 from "./slashing/v1beta1/genesis";
import * as _55 from "./slashing/v1beta1/query";
import * as _56 from "./slashing/v1beta1/slashing";
import * as _57 from "./slashing/v1beta1/tx";
import * as _58 from "./staking/v1beta1/authz";
import * as _59 from "./staking/v1beta1/genesis";
import * as _60 from "./staking/v1beta1/query";
import * as _61 from "./staking/v1beta1/staking";
import * as _62 from "./staking/v1beta1/tx";
import * as _63 from "./tx/signing/v1beta1/signing";
import * as _64 from "./tx/v1beta1/service";
import * as _65 from "./tx/v1beta1/tx";
import * as _66 from "./upgrade/v1beta1/query";
import * as _67 from "./upgrade/v1beta1/upgrade";
import * as _68 from "./vesting/v1beta1/tx";
import * as _69 from "./vesting/v1beta1/vesting";
import * as _122 from "./auth/v1beta1/query.lcd";
import * as _123 from "./authz/v1beta1/query.lcd";
import * as _124 from "./bank/v1beta1/query.lcd";
import * as _125 from "./base/node/v1beta1/query.lcd";
import * as _126 from "./base/tendermint/v1beta1/query.lcd";
import * as _127 from "./distribution/v1beta1/query.lcd";
import * as _128 from "./evidence/v1beta1/query.lcd";
import * as _129 from "./feegrant/v1beta1/query.lcd";
import * as _130 from "./gov/v1beta1/query.lcd";
import * as _131 from "./mint/v1beta1/query.lcd";
import * as _132 from "./params/v1beta1/query.lcd";
import * as _133 from "./slashing/v1beta1/query.lcd";
import * as _134 from "./staking/v1beta1/query.lcd";
import * as _135 from "./tx/v1beta1/service.lcd";
import * as _136 from "./upgrade/v1beta1/query.lcd";
import * as _137 from "./auth/v1beta1/query.rpc.Query";
import * as _138 from "./authz/v1beta1/query.rpc.Query";
import * as _139 from "./bank/v1beta1/query.rpc.Query";
import * as _140 from "./base/node/v1beta1/query.rpc.Service";
import * as _141 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _142 from "./distribution/v1beta1/query.rpc.Query";
import * as _143 from "./evidence/v1beta1/query.rpc.Query";
import * as _144 from "./feegrant/v1beta1/query.rpc.Query";
import * as _145 from "./gov/v1beta1/query.rpc.Query";
import * as _146 from "./mint/v1beta1/query.rpc.Query";
import * as _147 from "./params/v1beta1/query.rpc.Query";
import * as _148 from "./slashing/v1beta1/query.rpc.Query";
import * as _149 from "./staking/v1beta1/query.rpc.Query";
import * as _150 from "./tx/v1beta1/service.rpc.Service";
import * as _151 from "./upgrade/v1beta1/query.rpc.Query";
import * as _152 from "./authz/v1beta1/tx.rpc.msg";
import * as _153 from "./bank/v1beta1/tx.rpc.msg";
import * as _154 from "./crisis/v1beta1/tx.rpc.msg";
import * as _155 from "./distribution/v1beta1/tx.rpc.msg";
import * as _156 from "./evidence/v1beta1/tx.rpc.msg";
import * as _157 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _158 from "./gov/v1beta1/tx.rpc.msg";
import * as _159 from "./slashing/v1beta1/tx.rpc.msg";
import * as _160 from "./staking/v1beta1/tx.rpc.msg";
import * as _161 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _137.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _2.QueryAccountsRequest): Promise<_2.QueryAccountsResponse>;
                account(request: _2.QueryAccountRequest): Promise<_2.QueryAccountResponse>;
                params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                moduleAccountByName(request: _2.QueryModuleAccountByNameRequest): Promise<_2.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _122.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _2.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryAccountsRequest;
                fromPartial(object: Partial<_2.QueryAccountsRequest>): _2.QueryAccountsRequest;
                fromAmino(object: _2.QueryAccountsRequestAmino): _2.QueryAccountsRequest;
                toAmino(message: _2.QueryAccountsRequest): _2.QueryAccountsRequestAmino;
                fromAminoMsg(object: _2.QueryAccountsRequestAminoMsg): _2.QueryAccountsRequest;
                toAminoMsg(message: _2.QueryAccountsRequest): _2.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _2.QueryAccountsRequestProtoMsg): _2.QueryAccountsRequest;
                toProto(message: _2.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _2.QueryAccountsRequest): _2.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _2.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryAccountsResponse;
                fromPartial(object: Partial<_2.QueryAccountsResponse>): _2.QueryAccountsResponse;
                fromAmino(object: _2.QueryAccountsResponseAmino): _2.QueryAccountsResponse;
                toAmino(message: _2.QueryAccountsResponse): _2.QueryAccountsResponseAmino;
                fromAminoMsg(object: _2.QueryAccountsResponseAminoMsg): _2.QueryAccountsResponse;
                toAminoMsg(message: _2.QueryAccountsResponse): _2.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _2.QueryAccountsResponseProtoMsg): _2.QueryAccountsResponse;
                toProto(message: _2.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _2.QueryAccountsResponse): _2.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _2.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryAccountRequest;
                fromPartial(object: Partial<_2.QueryAccountRequest>): _2.QueryAccountRequest;
                fromAmino(object: _2.QueryAccountRequestAmino): _2.QueryAccountRequest;
                toAmino(message: _2.QueryAccountRequest): _2.QueryAccountRequestAmino;
                fromAminoMsg(object: _2.QueryAccountRequestAminoMsg): _2.QueryAccountRequest;
                toAminoMsg(message: _2.QueryAccountRequest): _2.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _2.QueryAccountRequestProtoMsg): _2.QueryAccountRequest;
                toProto(message: _2.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _2.QueryAccountRequest): _2.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _2.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryAccountResponse;
                fromPartial(object: Partial<_2.QueryAccountResponse>): _2.QueryAccountResponse;
                fromAmino(object: _2.QueryAccountResponseAmino): _2.QueryAccountResponse;
                toAmino(message: _2.QueryAccountResponse): _2.QueryAccountResponseAmino;
                fromAminoMsg(object: _2.QueryAccountResponseAminoMsg): _2.QueryAccountResponse;
                toAminoMsg(message: _2.QueryAccountResponse): _2.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _2.QueryAccountResponseProtoMsg): _2.QueryAccountResponse;
                toProto(message: _2.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _2.QueryAccountResponse): _2.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _2.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _2.QueryParamsRequest;
                fromPartial(_: Partial<_2.QueryParamsRequest>): _2.QueryParamsRequest;
                fromAmino(_: _2.QueryParamsRequestAmino): _2.QueryParamsRequest;
                toAmino(_: _2.QueryParamsRequest): _2.QueryParamsRequestAmino;
                fromAminoMsg(object: _2.QueryParamsRequestAminoMsg): _2.QueryParamsRequest;
                toAminoMsg(message: _2.QueryParamsRequest): _2.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _2.QueryParamsRequestProtoMsg): _2.QueryParamsRequest;
                toProto(message: _2.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _2.QueryParamsRequest): _2.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _2.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryParamsResponse;
                fromPartial(object: Partial<_2.QueryParamsResponse>): _2.QueryParamsResponse;
                fromAmino(object: _2.QueryParamsResponseAmino): _2.QueryParamsResponse;
                toAmino(message: _2.QueryParamsResponse): _2.QueryParamsResponseAmino;
                fromAminoMsg(object: _2.QueryParamsResponseAminoMsg): _2.QueryParamsResponse;
                toAminoMsg(message: _2.QueryParamsResponse): _2.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _2.QueryParamsResponseProtoMsg): _2.QueryParamsResponse;
                toProto(message: _2.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _2.QueryParamsResponse): _2.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _2.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_2.QueryModuleAccountByNameRequest>): _2.QueryModuleAccountByNameRequest;
                fromAmino(object: _2.QueryModuleAccountByNameRequestAmino): _2.QueryModuleAccountByNameRequest;
                toAmino(message: _2.QueryModuleAccountByNameRequest): _2.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _2.QueryModuleAccountByNameRequestAminoMsg): _2.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _2.QueryModuleAccountByNameRequest): _2.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _2.QueryModuleAccountByNameRequestProtoMsg): _2.QueryModuleAccountByNameRequest;
                toProto(message: _2.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _2.QueryModuleAccountByNameRequest): _2.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _2.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_2.QueryModuleAccountByNameResponse>): _2.QueryModuleAccountByNameResponse;
                fromAmino(object: _2.QueryModuleAccountByNameResponseAmino): _2.QueryModuleAccountByNameResponse;
                toAmino(message: _2.QueryModuleAccountByNameResponse): _2.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _2.QueryModuleAccountByNameResponseAminoMsg): _2.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _2.QueryModuleAccountByNameResponse): _2.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _2.QueryModuleAccountByNameResponseProtoMsg): _2.QueryModuleAccountByNameResponse;
                toProto(message: _2.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _2.QueryModuleAccountByNameResponse): _2.QueryModuleAccountByNameResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _0.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _0.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _1.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.GenesisState;
                fromPartial(object: Partial<_1.GenesisState>): _1.GenesisState;
                fromAmino(object: _1.GenesisStateAmino): _1.GenesisState;
                toAmino(message: _1.GenesisState): _1.GenesisStateAmino;
                fromAminoMsg(object: _1.GenesisStateAminoMsg): _1.GenesisState;
                toAminoMsg(message: _1.GenesisState): _1.GenesisStateAminoMsg;
                fromProtoMsg(message: _1.GenesisStateProtoMsg): _1.GenesisState;
                toProto(message: _1.GenesisState): Uint8Array;
                toProtoMsg(message: _1.GenesisState): _1.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _0.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.BaseAccount;
                fromPartial(object: Partial<_0.BaseAccount>): _0.BaseAccount;
                fromAmino(object: _0.BaseAccountAmino): _0.BaseAccount;
                toAmino(message: _0.BaseAccount): _0.BaseAccountAmino;
                fromAminoMsg(object: _0.BaseAccountAminoMsg): _0.BaseAccount;
                toAminoMsg(message: _0.BaseAccount): _0.BaseAccountAminoMsg;
                fromProtoMsg(message: _0.BaseAccountProtoMsg): _0.BaseAccount;
                toProto(message: _0.BaseAccount): Uint8Array;
                toProtoMsg(message: _0.BaseAccount): _0.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _0.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.ModuleAccount;
                fromPartial(object: Partial<_0.ModuleAccount>): _0.ModuleAccount;
                fromAmino(object: _0.ModuleAccountAmino): _0.ModuleAccount;
                toAmino(message: _0.ModuleAccount): _0.ModuleAccountAmino;
                fromAminoMsg(object: _0.ModuleAccountAminoMsg): _0.ModuleAccount;
                toAminoMsg(message: _0.ModuleAccount): _0.ModuleAccountAminoMsg;
                fromProtoMsg(message: _0.ModuleAccountProtoMsg): _0.ModuleAccount;
                toProto(message: _0.ModuleAccount): Uint8Array;
                toProtoMsg(message: _0.ModuleAccount): _0.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _0.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.Params;
                fromPartial(object: Partial<_0.Params>): _0.Params;
                fromAmino(object: _0.ParamsAmino): _0.Params;
                toAmino(message: _0.Params): _0.ParamsAmino;
                fromAminoMsg(object: _0.ParamsAminoMsg): _0.Params;
                toAminoMsg(message: _0.Params): _0.ParamsAminoMsg;
                fromProtoMsg(message: _0.ParamsProtoMsg): _0.Params;
                toProto(message: _0.Params): Uint8Array;
                toProtoMsg(message: _0.Params): _0.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _152.MsgClientImpl;
            QueryClientImpl: typeof _138.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _6.QueryGrantsRequest): Promise<_6.QueryGrantsResponse>;
                granterGrants(request: _6.QueryGranterGrantsRequest): Promise<_6.QueryGranterGrantsResponse>;
                granteeGrants(request: _6.QueryGranteeGrantsRequest): Promise<_6.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _123.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _7.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _7.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _7.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _7.MsgGrant): {
                        typeUrl: string;
                        value: _7.MsgGrant;
                    };
                    exec(value: _7.MsgExec): {
                        typeUrl: string;
                        value: _7.MsgExec;
                    };
                    revoke(value: _7.MsgRevoke): {
                        typeUrl: string;
                        value: _7.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _7.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _7.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _7.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _7.MsgGrant): {
                        typeUrl: string;
                        value: _7.MsgGrant;
                    };
                    exec(value: _7.MsgExec): {
                        typeUrl: string;
                        value: _7.MsgExec;
                    };
                    revoke(value: _7.MsgRevoke): {
                        typeUrl: string;
                        value: _7.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _7.MsgGrant) => _7.MsgGrantAmino;
                    fromAmino: (object: _7.MsgGrantAmino) => _7.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _7.MsgExec) => _7.MsgExecAmino;
                    fromAmino: (object: _7.MsgExecAmino) => _7.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _7.MsgRevoke) => _7.MsgRevokeAmino;
                    fromAmino: (object: _7.MsgRevokeAmino) => _7.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _7.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgGrant;
                fromPartial(object: Partial<_7.MsgGrant>): _7.MsgGrant;
                fromAmino(object: _7.MsgGrantAmino): _7.MsgGrant;
                toAmino(message: _7.MsgGrant): _7.MsgGrantAmino;
                fromAminoMsg(object: _7.MsgGrantAminoMsg): _7.MsgGrant;
                toAminoMsg(message: _7.MsgGrant): _7.MsgGrantAminoMsg;
                fromProtoMsg(message: _7.MsgGrantProtoMsg): _7.MsgGrant;
                toProto(message: _7.MsgGrant): Uint8Array;
                toProtoMsg(message: _7.MsgGrant): _7.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _7.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgExecResponse;
                fromPartial(object: Partial<_7.MsgExecResponse>): _7.MsgExecResponse;
                fromAmino(object: _7.MsgExecResponseAmino): _7.MsgExecResponse;
                toAmino(message: _7.MsgExecResponse): _7.MsgExecResponseAmino;
                fromAminoMsg(object: _7.MsgExecResponseAminoMsg): _7.MsgExecResponse;
                toAminoMsg(message: _7.MsgExecResponse): _7.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _7.MsgExecResponseProtoMsg): _7.MsgExecResponse;
                toProto(message: _7.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _7.MsgExecResponse): _7.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _7.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgExec;
                fromPartial(object: Partial<_7.MsgExec>): _7.MsgExec;
                fromAmino(object: _7.MsgExecAmino): _7.MsgExec;
                toAmino(message: _7.MsgExec): _7.MsgExecAmino;
                fromAminoMsg(object: _7.MsgExecAminoMsg): _7.MsgExec;
                toAminoMsg(message: _7.MsgExec): _7.MsgExecAminoMsg;
                fromProtoMsg(message: _7.MsgExecProtoMsg): _7.MsgExec;
                toProto(message: _7.MsgExec): Uint8Array;
                toProtoMsg(message: _7.MsgExec): _7.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _7.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgGrantResponse;
                fromPartial(_: Partial<_7.MsgGrantResponse>): _7.MsgGrantResponse;
                fromAmino(_: _7.MsgGrantResponseAmino): _7.MsgGrantResponse;
                toAmino(_: _7.MsgGrantResponse): _7.MsgGrantResponseAmino;
                fromAminoMsg(object: _7.MsgGrantResponseAminoMsg): _7.MsgGrantResponse;
                toAminoMsg(message: _7.MsgGrantResponse): _7.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _7.MsgGrantResponseProtoMsg): _7.MsgGrantResponse;
                toProto(message: _7.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _7.MsgGrantResponse): _7.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _7.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgRevoke;
                fromPartial(object: Partial<_7.MsgRevoke>): _7.MsgRevoke;
                fromAmino(object: _7.MsgRevokeAmino): _7.MsgRevoke;
                toAmino(message: _7.MsgRevoke): _7.MsgRevokeAmino;
                fromAminoMsg(object: _7.MsgRevokeAminoMsg): _7.MsgRevoke;
                toAminoMsg(message: _7.MsgRevoke): _7.MsgRevokeAminoMsg;
                fromProtoMsg(message: _7.MsgRevokeProtoMsg): _7.MsgRevoke;
                toProto(message: _7.MsgRevoke): Uint8Array;
                toProtoMsg(message: _7.MsgRevoke): _7.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _7.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgRevokeResponse;
                fromPartial(_: Partial<_7.MsgRevokeResponse>): _7.MsgRevokeResponse;
                fromAmino(_: _7.MsgRevokeResponseAmino): _7.MsgRevokeResponse;
                toAmino(_: _7.MsgRevokeResponse): _7.MsgRevokeResponseAmino;
                fromAminoMsg(object: _7.MsgRevokeResponseAminoMsg): _7.MsgRevokeResponse;
                toAminoMsg(message: _7.MsgRevokeResponse): _7.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _7.MsgRevokeResponseProtoMsg): _7.MsgRevokeResponse;
                toProto(message: _7.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _7.MsgRevokeResponse): _7.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _6.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryGrantsRequest;
                fromPartial(object: Partial<_6.QueryGrantsRequest>): _6.QueryGrantsRequest;
                fromAmino(object: _6.QueryGrantsRequestAmino): _6.QueryGrantsRequest;
                toAmino(message: _6.QueryGrantsRequest): _6.QueryGrantsRequestAmino;
                fromAminoMsg(object: _6.QueryGrantsRequestAminoMsg): _6.QueryGrantsRequest;
                toAminoMsg(message: _6.QueryGrantsRequest): _6.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _6.QueryGrantsRequestProtoMsg): _6.QueryGrantsRequest;
                toProto(message: _6.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _6.QueryGrantsRequest): _6.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _6.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryGrantsResponse;
                fromPartial(object: Partial<_6.QueryGrantsResponse>): _6.QueryGrantsResponse;
                fromAmino(object: _6.QueryGrantsResponseAmino): _6.QueryGrantsResponse;
                toAmino(message: _6.QueryGrantsResponse): _6.QueryGrantsResponseAmino;
                fromAminoMsg(object: _6.QueryGrantsResponseAminoMsg): _6.QueryGrantsResponse;
                toAminoMsg(message: _6.QueryGrantsResponse): _6.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _6.QueryGrantsResponseProtoMsg): _6.QueryGrantsResponse;
                toProto(message: _6.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _6.QueryGrantsResponse): _6.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _6.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_6.QueryGranterGrantsRequest>): _6.QueryGranterGrantsRequest;
                fromAmino(object: _6.QueryGranterGrantsRequestAmino): _6.QueryGranterGrantsRequest;
                toAmino(message: _6.QueryGranterGrantsRequest): _6.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _6.QueryGranterGrantsRequestAminoMsg): _6.QueryGranterGrantsRequest;
                toAminoMsg(message: _6.QueryGranterGrantsRequest): _6.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _6.QueryGranterGrantsRequestProtoMsg): _6.QueryGranterGrantsRequest;
                toProto(message: _6.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _6.QueryGranterGrantsRequest): _6.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _6.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_6.QueryGranterGrantsResponse>): _6.QueryGranterGrantsResponse;
                fromAmino(object: _6.QueryGranterGrantsResponseAmino): _6.QueryGranterGrantsResponse;
                toAmino(message: _6.QueryGranterGrantsResponse): _6.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _6.QueryGranterGrantsResponseAminoMsg): _6.QueryGranterGrantsResponse;
                toAminoMsg(message: _6.QueryGranterGrantsResponse): _6.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _6.QueryGranterGrantsResponseProtoMsg): _6.QueryGranterGrantsResponse;
                toProto(message: _6.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _6.QueryGranterGrantsResponse): _6.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _6.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_6.QueryGranteeGrantsRequest>): _6.QueryGranteeGrantsRequest;
                fromAmino(object: _6.QueryGranteeGrantsRequestAmino): _6.QueryGranteeGrantsRequest;
                toAmino(message: _6.QueryGranteeGrantsRequest): _6.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _6.QueryGranteeGrantsRequestAminoMsg): _6.QueryGranteeGrantsRequest;
                toAminoMsg(message: _6.QueryGranteeGrantsRequest): _6.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _6.QueryGranteeGrantsRequestProtoMsg): _6.QueryGranteeGrantsRequest;
                toProto(message: _6.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _6.QueryGranteeGrantsRequest): _6.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _6.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_6.QueryGranteeGrantsResponse>): _6.QueryGranteeGrantsResponse;
                fromAmino(object: _6.QueryGranteeGrantsResponseAmino): _6.QueryGranteeGrantsResponse;
                toAmino(message: _6.QueryGranteeGrantsResponse): _6.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _6.QueryGranteeGrantsResponseAminoMsg): _6.QueryGranteeGrantsResponse;
                toAminoMsg(message: _6.QueryGranteeGrantsResponse): _6.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _6.QueryGranteeGrantsResponseProtoMsg): _6.QueryGranteeGrantsResponse;
                toProto(message: _6.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _6.QueryGranteeGrantsResponse): _6.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _5.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.GenesisState;
                fromPartial(object: Partial<_5.GenesisState>): _5.GenesisState;
                fromAmino(object: _5.GenesisStateAmino): _5.GenesisState;
                toAmino(message: _5.GenesisState): _5.GenesisStateAmino;
                fromAminoMsg(object: _5.GenesisStateAminoMsg): _5.GenesisState;
                toAminoMsg(message: _5.GenesisState): _5.GenesisStateAminoMsg;
                fromProtoMsg(message: _5.GenesisStateProtoMsg): _5.GenesisState;
                toProto(message: _5.GenesisState): Uint8Array;
                toProtoMsg(message: _5.GenesisState): _5.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _4.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.EventGrant;
                fromPartial(object: Partial<_4.EventGrant>): _4.EventGrant;
                fromAmino(object: _4.EventGrantAmino): _4.EventGrant;
                toAmino(message: _4.EventGrant): _4.EventGrantAmino;
                fromAminoMsg(object: _4.EventGrantAminoMsg): _4.EventGrant;
                toAminoMsg(message: _4.EventGrant): _4.EventGrantAminoMsg;
                fromProtoMsg(message: _4.EventGrantProtoMsg): _4.EventGrant;
                toProto(message: _4.EventGrant): Uint8Array;
                toProtoMsg(message: _4.EventGrant): _4.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _4.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.EventRevoke;
                fromPartial(object: Partial<_4.EventRevoke>): _4.EventRevoke;
                fromAmino(object: _4.EventRevokeAmino): _4.EventRevoke;
                toAmino(message: _4.EventRevoke): _4.EventRevokeAmino;
                fromAminoMsg(object: _4.EventRevokeAminoMsg): _4.EventRevoke;
                toAminoMsg(message: _4.EventRevoke): _4.EventRevokeAminoMsg;
                fromProtoMsg(message: _4.EventRevokeProtoMsg): _4.EventRevoke;
                toProto(message: _4.EventRevoke): Uint8Array;
                toProtoMsg(message: _4.EventRevoke): _4.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _3.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.GenericAuthorization;
                fromPartial(object: Partial<_3.GenericAuthorization>): _3.GenericAuthorization;
                fromAmino(object: _3.GenericAuthorizationAmino): _3.GenericAuthorization;
                toAmino(message: _3.GenericAuthorization): _3.GenericAuthorizationAmino;
                fromAminoMsg(object: _3.GenericAuthorizationAminoMsg): _3.GenericAuthorization;
                toAminoMsg(message: _3.GenericAuthorization): _3.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _3.GenericAuthorizationProtoMsg): _3.GenericAuthorization;
                toProto(message: _3.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _3.GenericAuthorization): _3.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _3.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.Grant;
                fromPartial(object: Partial<_3.Grant>): _3.Grant;
                fromAmino(object: _3.GrantAmino): _3.Grant;
                toAmino(message: _3.Grant): _3.GrantAmino;
                fromAminoMsg(object: _3.GrantAminoMsg): _3.Grant;
                toAminoMsg(message: _3.Grant): _3.GrantAminoMsg;
                fromProtoMsg(message: _3.GrantProtoMsg): _3.Grant;
                toProto(message: _3.Grant): Uint8Array;
                toProtoMsg(message: _3.Grant): _3.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _3.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.GrantAuthorization;
                fromPartial(object: Partial<_3.GrantAuthorization>): _3.GrantAuthorization;
                fromAmino(object: _3.GrantAuthorizationAmino): _3.GrantAuthorization;
                toAmino(message: _3.GrantAuthorization): _3.GrantAuthorizationAmino;
                fromAminoMsg(object: _3.GrantAuthorizationAminoMsg): _3.GrantAuthorization;
                toAminoMsg(message: _3.GrantAuthorization): _3.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _3.GrantAuthorizationProtoMsg): _3.GrantAuthorization;
                toProto(message: _3.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _3.GrantAuthorization): _3.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _8.SendAuthorization | _58.StakeAuthorization | _3.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _153.MsgClientImpl;
            QueryClientImpl: typeof _139.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _11.QueryBalanceRequest): Promise<_11.QueryBalanceResponse>;
                allBalances(request: _11.QueryAllBalancesRequest): Promise<_11.QueryAllBalancesResponse>;
                spendableBalances(request: _11.QuerySpendableBalancesRequest): Promise<_11.QuerySpendableBalancesResponse>;
                totalSupply(request?: _11.QueryTotalSupplyRequest): Promise<_11.QueryTotalSupplyResponse>;
                supplyOf(request: _11.QuerySupplyOfRequest): Promise<_11.QuerySupplyOfResponse>;
                params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                denomMetadata(request: _11.QueryDenomMetadataRequest): Promise<_11.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _11.QueryDenomsMetadataRequest): Promise<_11.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _124.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _12.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _12.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _12.MsgSend): {
                        typeUrl: string;
                        value: _12.MsgSend;
                    };
                    multiSend(value: _12.MsgMultiSend): {
                        typeUrl: string;
                        value: _12.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _12.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _12.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _12.MsgSend): {
                        typeUrl: string;
                        value: _12.MsgSend;
                    };
                    multiSend(value: _12.MsgMultiSend): {
                        typeUrl: string;
                        value: _12.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _12.MsgSend) => _12.MsgSendAmino;
                    fromAmino: (object: _12.MsgSendAmino) => _12.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _12.MsgMultiSend) => _12.MsgMultiSendAmino;
                    fromAmino: (object: _12.MsgMultiSendAmino) => _12.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _12.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.MsgSend;
                fromPartial(object: Partial<_12.MsgSend>): _12.MsgSend;
                fromAmino(object: _12.MsgSendAmino): _12.MsgSend;
                toAmino(message: _12.MsgSend): _12.MsgSendAmino;
                fromAminoMsg(object: _12.MsgSendAminoMsg): _12.MsgSend;
                toAminoMsg(message: _12.MsgSend): _12.MsgSendAminoMsg;
                fromProtoMsg(message: _12.MsgSendProtoMsg): _12.MsgSend;
                toProto(message: _12.MsgSend): Uint8Array;
                toProtoMsg(message: _12.MsgSend): _12.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _12.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.MsgSendResponse;
                fromPartial(_: Partial<_12.MsgSendResponse>): _12.MsgSendResponse;
                fromAmino(_: _12.MsgSendResponseAmino): _12.MsgSendResponse;
                toAmino(_: _12.MsgSendResponse): _12.MsgSendResponseAmino;
                fromAminoMsg(object: _12.MsgSendResponseAminoMsg): _12.MsgSendResponse;
                toAminoMsg(message: _12.MsgSendResponse): _12.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _12.MsgSendResponseProtoMsg): _12.MsgSendResponse;
                toProto(message: _12.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _12.MsgSendResponse): _12.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _12.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.MsgMultiSend;
                fromPartial(object: Partial<_12.MsgMultiSend>): _12.MsgMultiSend;
                fromAmino(object: _12.MsgMultiSendAmino): _12.MsgMultiSend;
                toAmino(message: _12.MsgMultiSend): _12.MsgMultiSendAmino;
                fromAminoMsg(object: _12.MsgMultiSendAminoMsg): _12.MsgMultiSend;
                toAminoMsg(message: _12.MsgMultiSend): _12.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _12.MsgMultiSendProtoMsg): _12.MsgMultiSend;
                toProto(message: _12.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _12.MsgMultiSend): _12.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _12.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.MsgMultiSendResponse;
                fromPartial(_: Partial<_12.MsgMultiSendResponse>): _12.MsgMultiSendResponse;
                fromAmino(_: _12.MsgMultiSendResponseAmino): _12.MsgMultiSendResponse;
                toAmino(_: _12.MsgMultiSendResponse): _12.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _12.MsgMultiSendResponseAminoMsg): _12.MsgMultiSendResponse;
                toAminoMsg(message: _12.MsgMultiSendResponse): _12.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _12.MsgMultiSendResponseProtoMsg): _12.MsgMultiSendResponse;
                toProto(message: _12.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _12.MsgMultiSendResponse): _12.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _11.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryBalanceRequest;
                fromPartial(object: Partial<_11.QueryBalanceRequest>): _11.QueryBalanceRequest;
                fromAmino(object: _11.QueryBalanceRequestAmino): _11.QueryBalanceRequest;
                toAmino(message: _11.QueryBalanceRequest): _11.QueryBalanceRequestAmino;
                fromAminoMsg(object: _11.QueryBalanceRequestAminoMsg): _11.QueryBalanceRequest;
                toAminoMsg(message: _11.QueryBalanceRequest): _11.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _11.QueryBalanceRequestProtoMsg): _11.QueryBalanceRequest;
                toProto(message: _11.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _11.QueryBalanceRequest): _11.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _11.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryBalanceResponse;
                fromPartial(object: Partial<_11.QueryBalanceResponse>): _11.QueryBalanceResponse;
                fromAmino(object: _11.QueryBalanceResponseAmino): _11.QueryBalanceResponse;
                toAmino(message: _11.QueryBalanceResponse): _11.QueryBalanceResponseAmino;
                fromAminoMsg(object: _11.QueryBalanceResponseAminoMsg): _11.QueryBalanceResponse;
                toAminoMsg(message: _11.QueryBalanceResponse): _11.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _11.QueryBalanceResponseProtoMsg): _11.QueryBalanceResponse;
                toProto(message: _11.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _11.QueryBalanceResponse): _11.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllBalancesRequest;
                fromPartial(object: Partial<_11.QueryAllBalancesRequest>): _11.QueryAllBalancesRequest;
                fromAmino(object: _11.QueryAllBalancesRequestAmino): _11.QueryAllBalancesRequest;
                toAmino(message: _11.QueryAllBalancesRequest): _11.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _11.QueryAllBalancesRequestAminoMsg): _11.QueryAllBalancesRequest;
                toAminoMsg(message: _11.QueryAllBalancesRequest): _11.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _11.QueryAllBalancesRequestProtoMsg): _11.QueryAllBalancesRequest;
                toProto(message: _11.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllBalancesRequest): _11.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllBalancesResponse;
                fromPartial(object: Partial<_11.QueryAllBalancesResponse>): _11.QueryAllBalancesResponse;
                fromAmino(object: _11.QueryAllBalancesResponseAmino): _11.QueryAllBalancesResponse;
                toAmino(message: _11.QueryAllBalancesResponse): _11.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _11.QueryAllBalancesResponseAminoMsg): _11.QueryAllBalancesResponse;
                toAminoMsg(message: _11.QueryAllBalancesResponse): _11.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _11.QueryAllBalancesResponseProtoMsg): _11.QueryAllBalancesResponse;
                toProto(message: _11.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllBalancesResponse): _11.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _11.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_11.QuerySpendableBalancesRequest>): _11.QuerySpendableBalancesRequest;
                fromAmino(object: _11.QuerySpendableBalancesRequestAmino): _11.QuerySpendableBalancesRequest;
                toAmino(message: _11.QuerySpendableBalancesRequest): _11.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _11.QuerySpendableBalancesRequestAminoMsg): _11.QuerySpendableBalancesRequest;
                toAminoMsg(message: _11.QuerySpendableBalancesRequest): _11.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _11.QuerySpendableBalancesRequestProtoMsg): _11.QuerySpendableBalancesRequest;
                toProto(message: _11.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _11.QuerySpendableBalancesRequest): _11.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _11.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_11.QuerySpendableBalancesResponse>): _11.QuerySpendableBalancesResponse;
                fromAmino(object: _11.QuerySpendableBalancesResponseAmino): _11.QuerySpendableBalancesResponse;
                toAmino(message: _11.QuerySpendableBalancesResponse): _11.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _11.QuerySpendableBalancesResponseAminoMsg): _11.QuerySpendableBalancesResponse;
                toAminoMsg(message: _11.QuerySpendableBalancesResponse): _11.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _11.QuerySpendableBalancesResponseProtoMsg): _11.QuerySpendableBalancesResponse;
                toProto(message: _11.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _11.QuerySpendableBalancesResponse): _11.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _11.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_11.QueryTotalSupplyRequest>): _11.QueryTotalSupplyRequest;
                fromAmino(object: _11.QueryTotalSupplyRequestAmino): _11.QueryTotalSupplyRequest;
                toAmino(message: _11.QueryTotalSupplyRequest): _11.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _11.QueryTotalSupplyRequestAminoMsg): _11.QueryTotalSupplyRequest;
                toAminoMsg(message: _11.QueryTotalSupplyRequest): _11.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _11.QueryTotalSupplyRequestProtoMsg): _11.QueryTotalSupplyRequest;
                toProto(message: _11.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _11.QueryTotalSupplyRequest): _11.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _11.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_11.QueryTotalSupplyResponse>): _11.QueryTotalSupplyResponse;
                fromAmino(object: _11.QueryTotalSupplyResponseAmino): _11.QueryTotalSupplyResponse;
                toAmino(message: _11.QueryTotalSupplyResponse): _11.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _11.QueryTotalSupplyResponseAminoMsg): _11.QueryTotalSupplyResponse;
                toAminoMsg(message: _11.QueryTotalSupplyResponse): _11.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _11.QueryTotalSupplyResponseProtoMsg): _11.QueryTotalSupplyResponse;
                toProto(message: _11.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _11.QueryTotalSupplyResponse): _11.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _11.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QuerySupplyOfRequest;
                fromPartial(object: Partial<_11.QuerySupplyOfRequest>): _11.QuerySupplyOfRequest;
                fromAmino(object: _11.QuerySupplyOfRequestAmino): _11.QuerySupplyOfRequest;
                toAmino(message: _11.QuerySupplyOfRequest): _11.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _11.QuerySupplyOfRequestAminoMsg): _11.QuerySupplyOfRequest;
                toAminoMsg(message: _11.QuerySupplyOfRequest): _11.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _11.QuerySupplyOfRequestProtoMsg): _11.QuerySupplyOfRequest;
                toProto(message: _11.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _11.QuerySupplyOfRequest): _11.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _11.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QuerySupplyOfResponse;
                fromPartial(object: Partial<_11.QuerySupplyOfResponse>): _11.QuerySupplyOfResponse;
                fromAmino(object: _11.QuerySupplyOfResponseAmino): _11.QuerySupplyOfResponse;
                toAmino(message: _11.QuerySupplyOfResponse): _11.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _11.QuerySupplyOfResponseAminoMsg): _11.QuerySupplyOfResponse;
                toAminoMsg(message: _11.QuerySupplyOfResponse): _11.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _11.QuerySupplyOfResponseProtoMsg): _11.QuerySupplyOfResponse;
                toProto(message: _11.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _11.QuerySupplyOfResponse): _11.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _11.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.QueryParamsRequest;
                fromPartial(_: Partial<_11.QueryParamsRequest>): _11.QueryParamsRequest;
                fromAmino(_: _11.QueryParamsRequestAmino): _11.QueryParamsRequest;
                toAmino(_: _11.QueryParamsRequest): _11.QueryParamsRequestAmino;
                fromAminoMsg(object: _11.QueryParamsRequestAminoMsg): _11.QueryParamsRequest;
                toAminoMsg(message: _11.QueryParamsRequest): _11.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _11.QueryParamsRequestProtoMsg): _11.QueryParamsRequest;
                toProto(message: _11.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _11.QueryParamsRequest): _11.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _11.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryParamsResponse;
                fromPartial(object: Partial<_11.QueryParamsResponse>): _11.QueryParamsResponse;
                fromAmino(object: _11.QueryParamsResponseAmino): _11.QueryParamsResponse;
                toAmino(message: _11.QueryParamsResponse): _11.QueryParamsResponseAmino;
                fromAminoMsg(object: _11.QueryParamsResponseAminoMsg): _11.QueryParamsResponse;
                toAminoMsg(message: _11.QueryParamsResponse): _11.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _11.QueryParamsResponseProtoMsg): _11.QueryParamsResponse;
                toProto(message: _11.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _11.QueryParamsResponse): _11.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _11.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_11.QueryDenomsMetadataRequest>): _11.QueryDenomsMetadataRequest;
                fromAmino(object: _11.QueryDenomsMetadataRequestAmino): _11.QueryDenomsMetadataRequest;
                toAmino(message: _11.QueryDenomsMetadataRequest): _11.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _11.QueryDenomsMetadataRequestAminoMsg): _11.QueryDenomsMetadataRequest;
                toAminoMsg(message: _11.QueryDenomsMetadataRequest): _11.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _11.QueryDenomsMetadataRequestProtoMsg): _11.QueryDenomsMetadataRequest;
                toProto(message: _11.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _11.QueryDenomsMetadataRequest): _11.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _11.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_11.QueryDenomsMetadataResponse>): _11.QueryDenomsMetadataResponse;
                fromAmino(object: _11.QueryDenomsMetadataResponseAmino): _11.QueryDenomsMetadataResponse;
                toAmino(message: _11.QueryDenomsMetadataResponse): _11.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _11.QueryDenomsMetadataResponseAminoMsg): _11.QueryDenomsMetadataResponse;
                toAminoMsg(message: _11.QueryDenomsMetadataResponse): _11.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _11.QueryDenomsMetadataResponseProtoMsg): _11.QueryDenomsMetadataResponse;
                toProto(message: _11.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _11.QueryDenomsMetadataResponse): _11.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _11.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_11.QueryDenomMetadataRequest>): _11.QueryDenomMetadataRequest;
                fromAmino(object: _11.QueryDenomMetadataRequestAmino): _11.QueryDenomMetadataRequest;
                toAmino(message: _11.QueryDenomMetadataRequest): _11.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _11.QueryDenomMetadataRequestAminoMsg): _11.QueryDenomMetadataRequest;
                toAminoMsg(message: _11.QueryDenomMetadataRequest): _11.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _11.QueryDenomMetadataRequestProtoMsg): _11.QueryDenomMetadataRequest;
                toProto(message: _11.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _11.QueryDenomMetadataRequest): _11.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _11.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_11.QueryDenomMetadataResponse>): _11.QueryDenomMetadataResponse;
                fromAmino(object: _11.QueryDenomMetadataResponseAmino): _11.QueryDenomMetadataResponse;
                toAmino(message: _11.QueryDenomMetadataResponse): _11.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _11.QueryDenomMetadataResponseAminoMsg): _11.QueryDenomMetadataResponse;
                toAminoMsg(message: _11.QueryDenomMetadataResponse): _11.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _11.QueryDenomMetadataResponseProtoMsg): _11.QueryDenomMetadataResponse;
                toProto(message: _11.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _11.QueryDenomMetadataResponse): _11.QueryDenomMetadataResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _10.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.GenesisState;
                fromPartial(object: Partial<_10.GenesisState>): _10.GenesisState;
                fromAmino(object: _10.GenesisStateAmino): _10.GenesisState;
                toAmino(message: _10.GenesisState): _10.GenesisStateAmino;
                fromAminoMsg(object: _10.GenesisStateAminoMsg): _10.GenesisState;
                toAminoMsg(message: _10.GenesisState): _10.GenesisStateAminoMsg;
                fromProtoMsg(message: _10.GenesisStateProtoMsg): _10.GenesisState;
                toProto(message: _10.GenesisState): Uint8Array;
                toProtoMsg(message: _10.GenesisState): _10.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _10.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.Balance;
                fromPartial(object: Partial<_10.Balance>): _10.Balance;
                fromAmino(object: _10.BalanceAmino): _10.Balance;
                toAmino(message: _10.Balance): _10.BalanceAmino;
                fromAminoMsg(object: _10.BalanceAminoMsg): _10.Balance;
                toAminoMsg(message: _10.Balance): _10.BalanceAminoMsg;
                fromProtoMsg(message: _10.BalanceProtoMsg): _10.Balance;
                toProto(message: _10.Balance): Uint8Array;
                toProtoMsg(message: _10.Balance): _10.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _9.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.Params;
                fromPartial(object: Partial<_9.Params>): _9.Params;
                fromAmino(object: _9.ParamsAmino): _9.Params;
                toAmino(message: _9.Params): _9.ParamsAmino;
                fromAminoMsg(object: _9.ParamsAminoMsg): _9.Params;
                toAminoMsg(message: _9.Params): _9.ParamsAminoMsg;
                fromProtoMsg(message: _9.ParamsProtoMsg): _9.Params;
                toProto(message: _9.Params): Uint8Array;
                toProtoMsg(message: _9.Params): _9.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _9.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.SendEnabled;
                fromPartial(object: Partial<_9.SendEnabled>): _9.SendEnabled;
                fromAmino(object: _9.SendEnabledAmino): _9.SendEnabled;
                toAmino(message: _9.SendEnabled): _9.SendEnabledAmino;
                fromAminoMsg(object: _9.SendEnabledAminoMsg): _9.SendEnabled;
                toAminoMsg(message: _9.SendEnabled): _9.SendEnabledAminoMsg;
                fromProtoMsg(message: _9.SendEnabledProtoMsg): _9.SendEnabled;
                toProto(message: _9.SendEnabled): Uint8Array;
                toProtoMsg(message: _9.SendEnabled): _9.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _9.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.Input;
                fromPartial(object: Partial<_9.Input>): _9.Input;
                fromAmino(object: _9.InputAmino): _9.Input;
                toAmino(message: _9.Input): _9.InputAmino;
                fromAminoMsg(object: _9.InputAminoMsg): _9.Input;
                toAminoMsg(message: _9.Input): _9.InputAminoMsg;
                fromProtoMsg(message: _9.InputProtoMsg): _9.Input;
                toProto(message: _9.Input): Uint8Array;
                toProtoMsg(message: _9.Input): _9.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _9.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.Output;
                fromPartial(object: Partial<_9.Output>): _9.Output;
                fromAmino(object: _9.OutputAmino): _9.Output;
                toAmino(message: _9.Output): _9.OutputAmino;
                fromAminoMsg(object: _9.OutputAminoMsg): _9.Output;
                toAminoMsg(message: _9.Output): _9.OutputAminoMsg;
                fromProtoMsg(message: _9.OutputProtoMsg): _9.Output;
                toProto(message: _9.Output): Uint8Array;
                toProtoMsg(message: _9.Output): _9.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _9.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.Supply;
                fromPartial(object: Partial<_9.Supply>): _9.Supply;
                fromAmino(object: _9.SupplyAmino): _9.Supply;
                toAmino(message: _9.Supply): _9.SupplyAmino;
                fromAminoMsg(object: _9.SupplyAminoMsg): _9.Supply;
                toAminoMsg(message: _9.Supply): _9.SupplyAminoMsg;
                fromProtoMsg(message: _9.SupplyProtoMsg): _9.Supply;
                toProto(message: _9.Supply): Uint8Array;
                toProtoMsg(message: _9.Supply): _9.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _9.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.DenomUnit;
                fromPartial(object: Partial<_9.DenomUnit>): _9.DenomUnit;
                fromAmino(object: _9.DenomUnitAmino): _9.DenomUnit;
                toAmino(message: _9.DenomUnit): _9.DenomUnitAmino;
                fromAminoMsg(object: _9.DenomUnitAminoMsg): _9.DenomUnit;
                toAminoMsg(message: _9.DenomUnit): _9.DenomUnitAminoMsg;
                fromProtoMsg(message: _9.DenomUnitProtoMsg): _9.DenomUnit;
                toProto(message: _9.DenomUnit): Uint8Array;
                toProtoMsg(message: _9.DenomUnit): _9.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _9.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.Metadata;
                fromPartial(object: Partial<_9.Metadata>): _9.Metadata;
                fromAmino(object: _9.MetadataAmino): _9.Metadata;
                toAmino(message: _9.Metadata): _9.MetadataAmino;
                fromAminoMsg(object: _9.MetadataAminoMsg): _9.Metadata;
                toAminoMsg(message: _9.Metadata): _9.MetadataAminoMsg;
                fromProtoMsg(message: _9.MetadataProtoMsg): _9.Metadata;
                toProto(message: _9.Metadata): Uint8Array;
                toProtoMsg(message: _9.Metadata): _9.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _8.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.SendAuthorization;
                fromPartial(object: Partial<_8.SendAuthorization>): _8.SendAuthorization;
                fromAmino(object: _8.SendAuthorizationAmino): _8.SendAuthorization;
                toAmino(message: _8.SendAuthorization): _8.SendAuthorizationAmino;
                fromAminoMsg(object: _8.SendAuthorizationAminoMsg): _8.SendAuthorization;
                toAminoMsg(message: _8.SendAuthorization): _8.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _8.SendAuthorizationProtoMsg): _8.SendAuthorization;
                toProto(message: _8.SendAuthorization): Uint8Array;
                toProtoMsg(message: _8.SendAuthorization): _8.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _13.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.TxResponse;
                    fromPartial(object: Partial<_13.TxResponse>): _13.TxResponse;
                    fromAmino(object: _13.TxResponseAmino): _13.TxResponse;
                    toAmino(message: _13.TxResponse): _13.TxResponseAmino;
                    fromAminoMsg(object: _13.TxResponseAminoMsg): _13.TxResponse;
                    toAminoMsg(message: _13.TxResponse): _13.TxResponseAminoMsg;
                    fromProtoMsg(message: _13.TxResponseProtoMsg): _13.TxResponse;
                    toProto(message: _13.TxResponse): Uint8Array;
                    toProtoMsg(message: _13.TxResponse): _13.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _13.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.ABCIMessageLog;
                    fromPartial(object: Partial<_13.ABCIMessageLog>): _13.ABCIMessageLog;
                    fromAmino(object: _13.ABCIMessageLogAmino): _13.ABCIMessageLog;
                    toAmino(message: _13.ABCIMessageLog): _13.ABCIMessageLogAmino;
                    fromAminoMsg(object: _13.ABCIMessageLogAminoMsg): _13.ABCIMessageLog;
                    toAminoMsg(message: _13.ABCIMessageLog): _13.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _13.ABCIMessageLogProtoMsg): _13.ABCIMessageLog;
                    toProto(message: _13.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _13.ABCIMessageLog): _13.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _13.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.StringEvent;
                    fromPartial(object: Partial<_13.StringEvent>): _13.StringEvent;
                    fromAmino(object: _13.StringEventAmino): _13.StringEvent;
                    toAmino(message: _13.StringEvent): _13.StringEventAmino;
                    fromAminoMsg(object: _13.StringEventAminoMsg): _13.StringEvent;
                    toAminoMsg(message: _13.StringEvent): _13.StringEventAminoMsg;
                    fromProtoMsg(message: _13.StringEventProtoMsg): _13.StringEvent;
                    toProto(message: _13.StringEvent): Uint8Array;
                    toProtoMsg(message: _13.StringEvent): _13.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _13.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.Attribute;
                    fromPartial(object: Partial<_13.Attribute>): _13.Attribute;
                    fromAmino(object: _13.AttributeAmino): _13.Attribute;
                    toAmino(message: _13.Attribute): _13.AttributeAmino;
                    fromAminoMsg(object: _13.AttributeAminoMsg): _13.Attribute;
                    toAminoMsg(message: _13.Attribute): _13.AttributeAminoMsg;
                    fromProtoMsg(message: _13.AttributeProtoMsg): _13.Attribute;
                    toProto(message: _13.Attribute): Uint8Array;
                    toProtoMsg(message: _13.Attribute): _13.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _13.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.GasInfo;
                    fromPartial(object: Partial<_13.GasInfo>): _13.GasInfo;
                    fromAmino(object: _13.GasInfoAmino): _13.GasInfo;
                    toAmino(message: _13.GasInfo): _13.GasInfoAmino;
                    fromAminoMsg(object: _13.GasInfoAminoMsg): _13.GasInfo;
                    toAminoMsg(message: _13.GasInfo): _13.GasInfoAminoMsg;
                    fromProtoMsg(message: _13.GasInfoProtoMsg): _13.GasInfo;
                    toProto(message: _13.GasInfo): Uint8Array;
                    toProtoMsg(message: _13.GasInfo): _13.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _13.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.Result;
                    fromPartial(object: Partial<_13.Result>): _13.Result;
                    fromAmino(object: _13.ResultAmino): _13.Result;
                    toAmino(message: _13.Result): _13.ResultAmino;
                    fromAminoMsg(object: _13.ResultAminoMsg): _13.Result;
                    toAminoMsg(message: _13.Result): _13.ResultAminoMsg;
                    fromProtoMsg(message: _13.ResultProtoMsg): _13.Result;
                    toProto(message: _13.Result): Uint8Array;
                    toProtoMsg(message: _13.Result): _13.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _13.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.SimulationResponse;
                    fromPartial(object: Partial<_13.SimulationResponse>): _13.SimulationResponse;
                    fromAmino(object: _13.SimulationResponseAmino): _13.SimulationResponse;
                    toAmino(message: _13.SimulationResponse): _13.SimulationResponseAmino;
                    fromAminoMsg(object: _13.SimulationResponseAminoMsg): _13.SimulationResponse;
                    toAminoMsg(message: _13.SimulationResponse): _13.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _13.SimulationResponseProtoMsg): _13.SimulationResponse;
                    toProto(message: _13.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _13.SimulationResponse): _13.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _13.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.MsgData;
                    fromPartial(object: Partial<_13.MsgData>): _13.MsgData;
                    fromAmino(object: _13.MsgDataAmino): _13.MsgData;
                    toAmino(message: _13.MsgData): _13.MsgDataAmino;
                    fromAminoMsg(object: _13.MsgDataAminoMsg): _13.MsgData;
                    toAminoMsg(message: _13.MsgData): _13.MsgDataAminoMsg;
                    fromProtoMsg(message: _13.MsgDataProtoMsg): _13.MsgData;
                    toProto(message: _13.MsgData): Uint8Array;
                    toProtoMsg(message: _13.MsgData): _13.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _13.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.TxMsgData;
                    fromPartial(object: Partial<_13.TxMsgData>): _13.TxMsgData;
                    fromAmino(object: _13.TxMsgDataAmino): _13.TxMsgData;
                    toAmino(message: _13.TxMsgData): _13.TxMsgDataAmino;
                    fromAminoMsg(object: _13.TxMsgDataAminoMsg): _13.TxMsgData;
                    toAminoMsg(message: _13.TxMsgData): _13.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _13.TxMsgDataProtoMsg): _13.TxMsgData;
                    toProto(message: _13.TxMsgData): Uint8Array;
                    toProtoMsg(message: _13.TxMsgData): _13.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _13.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.SearchTxsResult;
                    fromPartial(object: Partial<_13.SearchTxsResult>): _13.SearchTxsResult;
                    fromAmino(object: _13.SearchTxsResultAmino): _13.SearchTxsResult;
                    toAmino(message: _13.SearchTxsResult): _13.SearchTxsResultAmino;
                    fromAminoMsg(object: _13.SearchTxsResultAminoMsg): _13.SearchTxsResult;
                    toAminoMsg(message: _13.SearchTxsResult): _13.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _13.SearchTxsResultProtoMsg): _13.SearchTxsResult;
                    toProto(message: _13.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _13.SearchTxsResult): _13.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _14.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.Pairs;
                    fromPartial(object: Partial<_14.Pairs>): _14.Pairs;
                    fromAmino(object: _14.PairsAmino): _14.Pairs;
                    toAmino(message: _14.Pairs): _14.PairsAmino;
                    fromAminoMsg(object: _14.PairsAminoMsg): _14.Pairs;
                    toAminoMsg(message: _14.Pairs): _14.PairsAminoMsg;
                    fromProtoMsg(message: _14.PairsProtoMsg): _14.Pairs;
                    toProto(message: _14.Pairs): Uint8Array;
                    toProtoMsg(message: _14.Pairs): _14.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _14.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.Pair;
                    fromPartial(object: Partial<_14.Pair>): _14.Pair;
                    fromAmino(object: _14.PairAmino): _14.Pair;
                    toAmino(message: _14.Pair): _14.PairAmino;
                    fromAminoMsg(object: _14.PairAminoMsg): _14.Pair;
                    toAminoMsg(message: _14.Pair): _14.PairAminoMsg;
                    fromProtoMsg(message: _14.PairProtoMsg): _14.Pair;
                    toProto(message: _14.Pair): Uint8Array;
                    toProtoMsg(message: _14.Pair): _14.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _140.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _15.ConfigRequest): Promise<_15.ConfigResponse>;
                };
                LCDQueryClient: typeof _125.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _15.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _15.ConfigRequest;
                    fromPartial(_: Partial<_15.ConfigRequest>): _15.ConfigRequest;
                    fromAmino(_: _15.ConfigRequestAmino): _15.ConfigRequest;
                    toAmino(_: _15.ConfigRequest): _15.ConfigRequestAmino;
                    fromAminoMsg(object: _15.ConfigRequestAminoMsg): _15.ConfigRequest;
                    toAminoMsg(message: _15.ConfigRequest): _15.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _15.ConfigRequestProtoMsg): _15.ConfigRequest;
                    toProto(message: _15.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _15.ConfigRequest): _15.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _15.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.ConfigResponse;
                    fromPartial(object: Partial<_15.ConfigResponse>): _15.ConfigResponse;
                    fromAmino(object: _15.ConfigResponseAmino): _15.ConfigResponse;
                    toAmino(message: _15.ConfigResponse): _15.ConfigResponseAmino;
                    fromAminoMsg(object: _15.ConfigResponseAminoMsg): _15.ConfigResponse;
                    toAminoMsg(message: _15.ConfigResponse): _15.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _15.ConfigResponseProtoMsg): _15.ConfigResponse;
                    toProto(message: _15.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _15.ConfigResponse): _15.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _16.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _16.PageRequest;
                    fromPartial(object: Partial<_16.PageRequest>): _16.PageRequest;
                    fromAmino(object: _16.PageRequestAmino): _16.PageRequest;
                    toAmino(message: _16.PageRequest): _16.PageRequestAmino;
                    fromAminoMsg(object: _16.PageRequestAminoMsg): _16.PageRequest;
                    toAminoMsg(message: _16.PageRequest): _16.PageRequestAminoMsg;
                    fromProtoMsg(message: _16.PageRequestProtoMsg): _16.PageRequest;
                    toProto(message: _16.PageRequest): Uint8Array;
                    toProtoMsg(message: _16.PageRequest): _16.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _16.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _16.PageResponse;
                    fromPartial(object: Partial<_16.PageResponse>): _16.PageResponse;
                    fromAmino(object: _16.PageResponseAmino): _16.PageResponse;
                    toAmino(message: _16.PageResponse): _16.PageResponseAmino;
                    fromAminoMsg(object: _16.PageResponseAminoMsg): _16.PageResponse;
                    toAminoMsg(message: _16.PageResponse): _16.PageResponseAminoMsg;
                    fromProtoMsg(message: _16.PageResponseProtoMsg): _16.PageResponse;
                    toProto(message: _16.PageResponse): Uint8Array;
                    toProtoMsg(message: _16.PageResponse): _16.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _17.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _17.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_17.ListAllInterfacesRequest>): _17.ListAllInterfacesRequest;
                    fromAmino(_: _17.ListAllInterfacesRequestAmino): _17.ListAllInterfacesRequest;
                    toAmino(_: _17.ListAllInterfacesRequest): _17.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _17.ListAllInterfacesRequestAminoMsg): _17.ListAllInterfacesRequest;
                    toAminoMsg(message: _17.ListAllInterfacesRequest): _17.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _17.ListAllInterfacesRequestProtoMsg): _17.ListAllInterfacesRequest;
                    toProto(message: _17.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _17.ListAllInterfacesRequest): _17.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _17.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_17.ListAllInterfacesResponse>): _17.ListAllInterfacesResponse;
                    fromAmino(object: _17.ListAllInterfacesResponseAmino): _17.ListAllInterfacesResponse;
                    toAmino(message: _17.ListAllInterfacesResponse): _17.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _17.ListAllInterfacesResponseAminoMsg): _17.ListAllInterfacesResponse;
                    toAminoMsg(message: _17.ListAllInterfacesResponse): _17.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _17.ListAllInterfacesResponseProtoMsg): _17.ListAllInterfacesResponse;
                    toProto(message: _17.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _17.ListAllInterfacesResponse): _17.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _17.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.ListImplementationsRequest;
                    fromPartial(object: Partial<_17.ListImplementationsRequest>): _17.ListImplementationsRequest;
                    fromAmino(object: _17.ListImplementationsRequestAmino): _17.ListImplementationsRequest;
                    toAmino(message: _17.ListImplementationsRequest): _17.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _17.ListImplementationsRequestAminoMsg): _17.ListImplementationsRequest;
                    toAminoMsg(message: _17.ListImplementationsRequest): _17.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _17.ListImplementationsRequestProtoMsg): _17.ListImplementationsRequest;
                    toProto(message: _17.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _17.ListImplementationsRequest): _17.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _17.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.ListImplementationsResponse;
                    fromPartial(object: Partial<_17.ListImplementationsResponse>): _17.ListImplementationsResponse;
                    fromAmino(object: _17.ListImplementationsResponseAmino): _17.ListImplementationsResponse;
                    toAmino(message: _17.ListImplementationsResponse): _17.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _17.ListImplementationsResponseAminoMsg): _17.ListImplementationsResponse;
                    toAminoMsg(message: _17.ListImplementationsResponse): _17.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _17.ListImplementationsResponseProtoMsg): _17.ListImplementationsResponse;
                    toProto(message: _17.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _17.ListImplementationsResponse): _17.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _18.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.AppDescriptor;
                    fromPartial(object: Partial<_18.AppDescriptor>): _18.AppDescriptor;
                    fromAmino(object: _18.AppDescriptorAmino): _18.AppDescriptor;
                    toAmino(message: _18.AppDescriptor): _18.AppDescriptorAmino;
                    fromAminoMsg(object: _18.AppDescriptorAminoMsg): _18.AppDescriptor;
                    toAminoMsg(message: _18.AppDescriptor): _18.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _18.AppDescriptorProtoMsg): _18.AppDescriptor;
                    toProto(message: _18.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _18.AppDescriptor): _18.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _18.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.TxDescriptor;
                    fromPartial(object: Partial<_18.TxDescriptor>): _18.TxDescriptor;
                    fromAmino(object: _18.TxDescriptorAmino): _18.TxDescriptor;
                    toAmino(message: _18.TxDescriptor): _18.TxDescriptorAmino;
                    fromAminoMsg(object: _18.TxDescriptorAminoMsg): _18.TxDescriptor;
                    toAminoMsg(message: _18.TxDescriptor): _18.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _18.TxDescriptorProtoMsg): _18.TxDescriptor;
                    toProto(message: _18.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _18.TxDescriptor): _18.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _18.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.AuthnDescriptor;
                    fromPartial(object: Partial<_18.AuthnDescriptor>): _18.AuthnDescriptor;
                    fromAmino(object: _18.AuthnDescriptorAmino): _18.AuthnDescriptor;
                    toAmino(message: _18.AuthnDescriptor): _18.AuthnDescriptorAmino;
                    fromAminoMsg(object: _18.AuthnDescriptorAminoMsg): _18.AuthnDescriptor;
                    toAminoMsg(message: _18.AuthnDescriptor): _18.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _18.AuthnDescriptorProtoMsg): _18.AuthnDescriptor;
                    toProto(message: _18.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _18.AuthnDescriptor): _18.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _18.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.SigningModeDescriptor;
                    fromPartial(object: Partial<_18.SigningModeDescriptor>): _18.SigningModeDescriptor;
                    fromAmino(object: _18.SigningModeDescriptorAmino): _18.SigningModeDescriptor;
                    toAmino(message: _18.SigningModeDescriptor): _18.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _18.SigningModeDescriptorAminoMsg): _18.SigningModeDescriptor;
                    toAminoMsg(message: _18.SigningModeDescriptor): _18.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _18.SigningModeDescriptorProtoMsg): _18.SigningModeDescriptor;
                    toProto(message: _18.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _18.SigningModeDescriptor): _18.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _18.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.ChainDescriptor;
                    fromPartial(object: Partial<_18.ChainDescriptor>): _18.ChainDescriptor;
                    fromAmino(object: _18.ChainDescriptorAmino): _18.ChainDescriptor;
                    toAmino(message: _18.ChainDescriptor): _18.ChainDescriptorAmino;
                    fromAminoMsg(object: _18.ChainDescriptorAminoMsg): _18.ChainDescriptor;
                    toAminoMsg(message: _18.ChainDescriptor): _18.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _18.ChainDescriptorProtoMsg): _18.ChainDescriptor;
                    toProto(message: _18.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _18.ChainDescriptor): _18.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _18.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.CodecDescriptor;
                    fromPartial(object: Partial<_18.CodecDescriptor>): _18.CodecDescriptor;
                    fromAmino(object: _18.CodecDescriptorAmino): _18.CodecDescriptor;
                    toAmino(message: _18.CodecDescriptor): _18.CodecDescriptorAmino;
                    fromAminoMsg(object: _18.CodecDescriptorAminoMsg): _18.CodecDescriptor;
                    toAminoMsg(message: _18.CodecDescriptor): _18.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _18.CodecDescriptorProtoMsg): _18.CodecDescriptor;
                    toProto(message: _18.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _18.CodecDescriptor): _18.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _18.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.InterfaceDescriptor;
                    fromPartial(object: Partial<_18.InterfaceDescriptor>): _18.InterfaceDescriptor;
                    fromAmino(object: _18.InterfaceDescriptorAmino): _18.InterfaceDescriptor;
                    toAmino(message: _18.InterfaceDescriptor): _18.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _18.InterfaceDescriptorAminoMsg): _18.InterfaceDescriptor;
                    toAminoMsg(message: _18.InterfaceDescriptor): _18.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _18.InterfaceDescriptorProtoMsg): _18.InterfaceDescriptor;
                    toProto(message: _18.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _18.InterfaceDescriptor): _18.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _18.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_18.InterfaceImplementerDescriptor>): _18.InterfaceImplementerDescriptor;
                    fromAmino(object: _18.InterfaceImplementerDescriptorAmino): _18.InterfaceImplementerDescriptor;
                    toAmino(message: _18.InterfaceImplementerDescriptor): _18.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _18.InterfaceImplementerDescriptorAminoMsg): _18.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _18.InterfaceImplementerDescriptor): _18.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _18.InterfaceImplementerDescriptorProtoMsg): _18.InterfaceImplementerDescriptor;
                    toProto(message: _18.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _18.InterfaceImplementerDescriptor): _18.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _18.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_18.InterfaceAcceptingMessageDescriptor>): _18.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _18.InterfaceAcceptingMessageDescriptorAmino): _18.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _18.InterfaceAcceptingMessageDescriptor): _18.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _18.InterfaceAcceptingMessageDescriptorAminoMsg): _18.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _18.InterfaceAcceptingMessageDescriptor): _18.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _18.InterfaceAcceptingMessageDescriptorProtoMsg): _18.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _18.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _18.InterfaceAcceptingMessageDescriptor): _18.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _18.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.ConfigurationDescriptor;
                    fromPartial(object: Partial<_18.ConfigurationDescriptor>): _18.ConfigurationDescriptor;
                    fromAmino(object: _18.ConfigurationDescriptorAmino): _18.ConfigurationDescriptor;
                    toAmino(message: _18.ConfigurationDescriptor): _18.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _18.ConfigurationDescriptorAminoMsg): _18.ConfigurationDescriptor;
                    toAminoMsg(message: _18.ConfigurationDescriptor): _18.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _18.ConfigurationDescriptorProtoMsg): _18.ConfigurationDescriptor;
                    toProto(message: _18.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _18.ConfigurationDescriptor): _18.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _18.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.MsgDescriptor;
                    fromPartial(object: Partial<_18.MsgDescriptor>): _18.MsgDescriptor;
                    fromAmino(object: _18.MsgDescriptorAmino): _18.MsgDescriptor;
                    toAmino(message: _18.MsgDescriptor): _18.MsgDescriptorAmino;
                    fromAminoMsg(object: _18.MsgDescriptorAminoMsg): _18.MsgDescriptor;
                    toAminoMsg(message: _18.MsgDescriptor): _18.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _18.MsgDescriptorProtoMsg): _18.MsgDescriptor;
                    toProto(message: _18.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _18.MsgDescriptor): _18.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _18.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_18.GetAuthnDescriptorRequest>): _18.GetAuthnDescriptorRequest;
                    fromAmino(_: _18.GetAuthnDescriptorRequestAmino): _18.GetAuthnDescriptorRequest;
                    toAmino(_: _18.GetAuthnDescriptorRequest): _18.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetAuthnDescriptorRequestAminoMsg): _18.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _18.GetAuthnDescriptorRequest): _18.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetAuthnDescriptorRequestProtoMsg): _18.GetAuthnDescriptorRequest;
                    toProto(message: _18.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetAuthnDescriptorRequest): _18.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _18.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_18.GetAuthnDescriptorResponse>): _18.GetAuthnDescriptorResponse;
                    fromAmino(object: _18.GetAuthnDescriptorResponseAmino): _18.GetAuthnDescriptorResponse;
                    toAmino(message: _18.GetAuthnDescriptorResponse): _18.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetAuthnDescriptorResponseAminoMsg): _18.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _18.GetAuthnDescriptorResponse): _18.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetAuthnDescriptorResponseProtoMsg): _18.GetAuthnDescriptorResponse;
                    toProto(message: _18.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetAuthnDescriptorResponse): _18.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _18.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_18.GetChainDescriptorRequest>): _18.GetChainDescriptorRequest;
                    fromAmino(_: _18.GetChainDescriptorRequestAmino): _18.GetChainDescriptorRequest;
                    toAmino(_: _18.GetChainDescriptorRequest): _18.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetChainDescriptorRequestAminoMsg): _18.GetChainDescriptorRequest;
                    toAminoMsg(message: _18.GetChainDescriptorRequest): _18.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetChainDescriptorRequestProtoMsg): _18.GetChainDescriptorRequest;
                    toProto(message: _18.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetChainDescriptorRequest): _18.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _18.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_18.GetChainDescriptorResponse>): _18.GetChainDescriptorResponse;
                    fromAmino(object: _18.GetChainDescriptorResponseAmino): _18.GetChainDescriptorResponse;
                    toAmino(message: _18.GetChainDescriptorResponse): _18.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetChainDescriptorResponseAminoMsg): _18.GetChainDescriptorResponse;
                    toAminoMsg(message: _18.GetChainDescriptorResponse): _18.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetChainDescriptorResponseProtoMsg): _18.GetChainDescriptorResponse;
                    toProto(message: _18.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetChainDescriptorResponse): _18.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _18.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_18.GetCodecDescriptorRequest>): _18.GetCodecDescriptorRequest;
                    fromAmino(_: _18.GetCodecDescriptorRequestAmino): _18.GetCodecDescriptorRequest;
                    toAmino(_: _18.GetCodecDescriptorRequest): _18.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetCodecDescriptorRequestAminoMsg): _18.GetCodecDescriptorRequest;
                    toAminoMsg(message: _18.GetCodecDescriptorRequest): _18.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetCodecDescriptorRequestProtoMsg): _18.GetCodecDescriptorRequest;
                    toProto(message: _18.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetCodecDescriptorRequest): _18.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _18.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_18.GetCodecDescriptorResponse>): _18.GetCodecDescriptorResponse;
                    fromAmino(object: _18.GetCodecDescriptorResponseAmino): _18.GetCodecDescriptorResponse;
                    toAmino(message: _18.GetCodecDescriptorResponse): _18.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetCodecDescriptorResponseAminoMsg): _18.GetCodecDescriptorResponse;
                    toAminoMsg(message: _18.GetCodecDescriptorResponse): _18.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetCodecDescriptorResponseProtoMsg): _18.GetCodecDescriptorResponse;
                    toProto(message: _18.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetCodecDescriptorResponse): _18.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _18.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_18.GetConfigurationDescriptorRequest>): _18.GetConfigurationDescriptorRequest;
                    fromAmino(_: _18.GetConfigurationDescriptorRequestAmino): _18.GetConfigurationDescriptorRequest;
                    toAmino(_: _18.GetConfigurationDescriptorRequest): _18.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetConfigurationDescriptorRequestAminoMsg): _18.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _18.GetConfigurationDescriptorRequest): _18.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetConfigurationDescriptorRequestProtoMsg): _18.GetConfigurationDescriptorRequest;
                    toProto(message: _18.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetConfigurationDescriptorRequest): _18.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _18.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_18.GetConfigurationDescriptorResponse>): _18.GetConfigurationDescriptorResponse;
                    fromAmino(object: _18.GetConfigurationDescriptorResponseAmino): _18.GetConfigurationDescriptorResponse;
                    toAmino(message: _18.GetConfigurationDescriptorResponse): _18.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetConfigurationDescriptorResponseAminoMsg): _18.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _18.GetConfigurationDescriptorResponse): _18.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetConfigurationDescriptorResponseProtoMsg): _18.GetConfigurationDescriptorResponse;
                    toProto(message: _18.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetConfigurationDescriptorResponse): _18.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _18.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_18.GetQueryServicesDescriptorRequest>): _18.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _18.GetQueryServicesDescriptorRequestAmino): _18.GetQueryServicesDescriptorRequest;
                    toAmino(_: _18.GetQueryServicesDescriptorRequest): _18.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetQueryServicesDescriptorRequestAminoMsg): _18.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _18.GetQueryServicesDescriptorRequest): _18.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetQueryServicesDescriptorRequestProtoMsg): _18.GetQueryServicesDescriptorRequest;
                    toProto(message: _18.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetQueryServicesDescriptorRequest): _18.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _18.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_18.GetQueryServicesDescriptorResponse>): _18.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _18.GetQueryServicesDescriptorResponseAmino): _18.GetQueryServicesDescriptorResponse;
                    toAmino(message: _18.GetQueryServicesDescriptorResponse): _18.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetQueryServicesDescriptorResponseAminoMsg): _18.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _18.GetQueryServicesDescriptorResponse): _18.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetQueryServicesDescriptorResponseProtoMsg): _18.GetQueryServicesDescriptorResponse;
                    toProto(message: _18.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetQueryServicesDescriptorResponse): _18.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _18.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_18.GetTxDescriptorRequest>): _18.GetTxDescriptorRequest;
                    fromAmino(_: _18.GetTxDescriptorRequestAmino): _18.GetTxDescriptorRequest;
                    toAmino(_: _18.GetTxDescriptorRequest): _18.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetTxDescriptorRequestAminoMsg): _18.GetTxDescriptorRequest;
                    toAminoMsg(message: _18.GetTxDescriptorRequest): _18.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetTxDescriptorRequestProtoMsg): _18.GetTxDescriptorRequest;
                    toProto(message: _18.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetTxDescriptorRequest): _18.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _18.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_18.GetTxDescriptorResponse>): _18.GetTxDescriptorResponse;
                    fromAmino(object: _18.GetTxDescriptorResponseAmino): _18.GetTxDescriptorResponse;
                    toAmino(message: _18.GetTxDescriptorResponse): _18.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetTxDescriptorResponseAminoMsg): _18.GetTxDescriptorResponse;
                    toAminoMsg(message: _18.GetTxDescriptorResponse): _18.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetTxDescriptorResponseProtoMsg): _18.GetTxDescriptorResponse;
                    toProto(message: _18.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetTxDescriptorResponse): _18.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _18.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.QueryServicesDescriptor;
                    fromPartial(object: Partial<_18.QueryServicesDescriptor>): _18.QueryServicesDescriptor;
                    fromAmino(object: _18.QueryServicesDescriptorAmino): _18.QueryServicesDescriptor;
                    toAmino(message: _18.QueryServicesDescriptor): _18.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _18.QueryServicesDescriptorAminoMsg): _18.QueryServicesDescriptor;
                    toAminoMsg(message: _18.QueryServicesDescriptor): _18.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _18.QueryServicesDescriptorProtoMsg): _18.QueryServicesDescriptor;
                    toProto(message: _18.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _18.QueryServicesDescriptor): _18.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _18.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.QueryServiceDescriptor;
                    fromPartial(object: Partial<_18.QueryServiceDescriptor>): _18.QueryServiceDescriptor;
                    fromAmino(object: _18.QueryServiceDescriptorAmino): _18.QueryServiceDescriptor;
                    toAmino(message: _18.QueryServiceDescriptor): _18.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _18.QueryServiceDescriptorAminoMsg): _18.QueryServiceDescriptor;
                    toAminoMsg(message: _18.QueryServiceDescriptor): _18.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _18.QueryServiceDescriptorProtoMsg): _18.QueryServiceDescriptor;
                    toProto(message: _18.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _18.QueryServiceDescriptor): _18.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _18.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.QueryMethodDescriptor;
                    fromPartial(object: Partial<_18.QueryMethodDescriptor>): _18.QueryMethodDescriptor;
                    fromAmino(object: _18.QueryMethodDescriptorAmino): _18.QueryMethodDescriptor;
                    toAmino(message: _18.QueryMethodDescriptor): _18.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _18.QueryMethodDescriptorAminoMsg): _18.QueryMethodDescriptor;
                    toAminoMsg(message: _18.QueryMethodDescriptor): _18.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _18.QueryMethodDescriptorProtoMsg): _18.QueryMethodDescriptor;
                    toProto(message: _18.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _18.QueryMethodDescriptor): _18.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _19.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.Snapshot;
                    fromPartial(object: Partial<_19.Snapshot>): _19.Snapshot;
                    fromAmino(object: _19.SnapshotAmino): _19.Snapshot;
                    toAmino(message: _19.Snapshot): _19.SnapshotAmino;
                    fromAminoMsg(object: _19.SnapshotAminoMsg): _19.Snapshot;
                    toAminoMsg(message: _19.Snapshot): _19.SnapshotAminoMsg;
                    fromProtoMsg(message: _19.SnapshotProtoMsg): _19.Snapshot;
                    toProto(message: _19.Snapshot): Uint8Array;
                    toProtoMsg(message: _19.Snapshot): _19.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _19.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.Metadata;
                    fromPartial(object: Partial<_19.Metadata>): _19.Metadata;
                    fromAmino(object: _19.MetadataAmino): _19.Metadata;
                    toAmino(message: _19.Metadata): _19.MetadataAmino;
                    fromAminoMsg(object: _19.MetadataAminoMsg): _19.Metadata;
                    toAminoMsg(message: _19.Metadata): _19.MetadataAminoMsg;
                    fromProtoMsg(message: _19.MetadataProtoMsg): _19.Metadata;
                    toProto(message: _19.Metadata): Uint8Array;
                    toProtoMsg(message: _19.Metadata): _19.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _19.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.SnapshotItem;
                    fromPartial(object: Partial<_19.SnapshotItem>): _19.SnapshotItem;
                    fromAmino(object: _19.SnapshotItemAmino): _19.SnapshotItem;
                    toAmino(message: _19.SnapshotItem): _19.SnapshotItemAmino;
                    fromAminoMsg(object: _19.SnapshotItemAminoMsg): _19.SnapshotItem;
                    toAminoMsg(message: _19.SnapshotItem): _19.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _19.SnapshotItemProtoMsg): _19.SnapshotItem;
                    toProto(message: _19.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _19.SnapshotItem): _19.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _19.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.SnapshotStoreItem;
                    fromPartial(object: Partial<_19.SnapshotStoreItem>): _19.SnapshotStoreItem;
                    fromAmino(object: _19.SnapshotStoreItemAmino): _19.SnapshotStoreItem;
                    toAmino(message: _19.SnapshotStoreItem): _19.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _19.SnapshotStoreItemAminoMsg): _19.SnapshotStoreItem;
                    toAminoMsg(message: _19.SnapshotStoreItem): _19.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _19.SnapshotStoreItemProtoMsg): _19.SnapshotStoreItem;
                    toProto(message: _19.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _19.SnapshotStoreItem): _19.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _19.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.SnapshotIAVLItem;
                    fromPartial(object: Partial<_19.SnapshotIAVLItem>): _19.SnapshotIAVLItem;
                    fromAmino(object: _19.SnapshotIAVLItemAmino): _19.SnapshotIAVLItem;
                    toAmino(message: _19.SnapshotIAVLItem): _19.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _19.SnapshotIAVLItemAminoMsg): _19.SnapshotIAVLItem;
                    toAminoMsg(message: _19.SnapshotIAVLItem): _19.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _19.SnapshotIAVLItemProtoMsg): _19.SnapshotIAVLItem;
                    toProto(message: _19.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _19.SnapshotIAVLItem): _19.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _19.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_19.SnapshotExtensionMeta>): _19.SnapshotExtensionMeta;
                    fromAmino(object: _19.SnapshotExtensionMetaAmino): _19.SnapshotExtensionMeta;
                    toAmino(message: _19.SnapshotExtensionMeta): _19.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _19.SnapshotExtensionMetaAminoMsg): _19.SnapshotExtensionMeta;
                    toAminoMsg(message: _19.SnapshotExtensionMeta): _19.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _19.SnapshotExtensionMetaProtoMsg): _19.SnapshotExtensionMeta;
                    toProto(message: _19.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _19.SnapshotExtensionMeta): _19.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _19.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_19.SnapshotExtensionPayload>): _19.SnapshotExtensionPayload;
                    fromAmino(object: _19.SnapshotExtensionPayloadAmino): _19.SnapshotExtensionPayload;
                    toAmino(message: _19.SnapshotExtensionPayload): _19.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _19.SnapshotExtensionPayloadAminoMsg): _19.SnapshotExtensionPayload;
                    toAminoMsg(message: _19.SnapshotExtensionPayload): _19.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _19.SnapshotExtensionPayloadProtoMsg): _19.SnapshotExtensionPayload;
                    toProto(message: _19.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _19.SnapshotExtensionPayload): _19.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _21.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.StoreKVPair;
                    fromPartial(object: Partial<_21.StoreKVPair>): _21.StoreKVPair;
                    fromAmino(object: _21.StoreKVPairAmino): _21.StoreKVPair;
                    toAmino(message: _21.StoreKVPair): _21.StoreKVPairAmino;
                    fromAminoMsg(object: _21.StoreKVPairAminoMsg): _21.StoreKVPair;
                    toAminoMsg(message: _21.StoreKVPair): _21.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _21.StoreKVPairProtoMsg): _21.StoreKVPair;
                    toProto(message: _21.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _21.StoreKVPair): _21.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _21.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.BlockMetadata;
                    fromPartial(object: Partial<_21.BlockMetadata>): _21.BlockMetadata;
                    fromAmino(object: _21.BlockMetadataAmino): _21.BlockMetadata;
                    toAmino(message: _21.BlockMetadata): _21.BlockMetadataAmino;
                    fromAminoMsg(object: _21.BlockMetadataAminoMsg): _21.BlockMetadata;
                    toAminoMsg(message: _21.BlockMetadata): _21.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _21.BlockMetadataProtoMsg): _21.BlockMetadata;
                    toProto(message: _21.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _21.BlockMetadata): _21.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _21.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_21.BlockMetadata_DeliverTx>): _21.BlockMetadata_DeliverTx;
                    fromAmino(object: _21.BlockMetadata_DeliverTxAmino): _21.BlockMetadata_DeliverTx;
                    toAmino(message: _21.BlockMetadata_DeliverTx): _21.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _21.BlockMetadata_DeliverTxAminoMsg): _21.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _21.BlockMetadata_DeliverTx): _21.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _21.BlockMetadata_DeliverTxProtoMsg): _21.BlockMetadata_DeliverTx;
                    toProto(message: _21.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _21.BlockMetadata_DeliverTx): _21.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _20.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.CommitInfo;
                    fromPartial(object: Partial<_20.CommitInfo>): _20.CommitInfo;
                    fromAmino(object: _20.CommitInfoAmino): _20.CommitInfo;
                    toAmino(message: _20.CommitInfo): _20.CommitInfoAmino;
                    fromAminoMsg(object: _20.CommitInfoAminoMsg): _20.CommitInfo;
                    toAminoMsg(message: _20.CommitInfo): _20.CommitInfoAminoMsg;
                    fromProtoMsg(message: _20.CommitInfoProtoMsg): _20.CommitInfo;
                    toProto(message: _20.CommitInfo): Uint8Array;
                    toProtoMsg(message: _20.CommitInfo): _20.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _20.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.StoreInfo;
                    fromPartial(object: Partial<_20.StoreInfo>): _20.StoreInfo;
                    fromAmino(object: _20.StoreInfoAmino): _20.StoreInfo;
                    toAmino(message: _20.StoreInfo): _20.StoreInfoAmino;
                    fromAminoMsg(object: _20.StoreInfoAminoMsg): _20.StoreInfo;
                    toAminoMsg(message: _20.StoreInfo): _20.StoreInfoAminoMsg;
                    fromProtoMsg(message: _20.StoreInfoProtoMsg): _20.StoreInfo;
                    toProto(message: _20.StoreInfo): Uint8Array;
                    toProtoMsg(message: _20.StoreInfo): _20.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _20.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.CommitID;
                    fromPartial(object: Partial<_20.CommitID>): _20.CommitID;
                    fromAmino(object: _20.CommitIDAmino): _20.CommitID;
                    toAmino(message: _20.CommitID): _20.CommitIDAmino;
                    fromAminoMsg(object: _20.CommitIDAminoMsg): _20.CommitID;
                    toAminoMsg(message: _20.CommitID): _20.CommitIDAminoMsg;
                    fromProtoMsg(message: _20.CommitIDProtoMsg): _20.CommitID;
                    toProto(message: _20.CommitID): Uint8Array;
                    toProtoMsg(message: _20.CommitID): _20.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _141.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _22.GetNodeInfoRequest): Promise<_22.GetNodeInfoResponse>;
                    getSyncing(request?: _22.GetSyncingRequest): Promise<_22.GetSyncingResponse>;
                    getLatestBlock(request?: _22.GetLatestBlockRequest): Promise<_22.GetLatestBlockResponse>;
                    getBlockByHeight(request: _22.GetBlockByHeightRequest): Promise<_22.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _22.GetLatestValidatorSetRequest): Promise<_22.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _22.GetValidatorSetByHeightRequest): Promise<_22.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _126.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _22.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_22.GetValidatorSetByHeightRequest>): _22.GetValidatorSetByHeightRequest;
                    fromAmino(object: _22.GetValidatorSetByHeightRequestAmino): _22.GetValidatorSetByHeightRequest;
                    toAmino(message: _22.GetValidatorSetByHeightRequest): _22.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _22.GetValidatorSetByHeightRequestAminoMsg): _22.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _22.GetValidatorSetByHeightRequest): _22.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _22.GetValidatorSetByHeightRequestProtoMsg): _22.GetValidatorSetByHeightRequest;
                    toProto(message: _22.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _22.GetValidatorSetByHeightRequest): _22.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _22.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_22.GetValidatorSetByHeightResponse>): _22.GetValidatorSetByHeightResponse;
                    fromAmino(object: _22.GetValidatorSetByHeightResponseAmino): _22.GetValidatorSetByHeightResponse;
                    toAmino(message: _22.GetValidatorSetByHeightResponse): _22.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _22.GetValidatorSetByHeightResponseAminoMsg): _22.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _22.GetValidatorSetByHeightResponse): _22.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _22.GetValidatorSetByHeightResponseProtoMsg): _22.GetValidatorSetByHeightResponse;
                    toProto(message: _22.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _22.GetValidatorSetByHeightResponse): _22.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _22.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_22.GetLatestValidatorSetRequest>): _22.GetLatestValidatorSetRequest;
                    fromAmino(object: _22.GetLatestValidatorSetRequestAmino): _22.GetLatestValidatorSetRequest;
                    toAmino(message: _22.GetLatestValidatorSetRequest): _22.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _22.GetLatestValidatorSetRequestAminoMsg): _22.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _22.GetLatestValidatorSetRequest): _22.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _22.GetLatestValidatorSetRequestProtoMsg): _22.GetLatestValidatorSetRequest;
                    toProto(message: _22.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _22.GetLatestValidatorSetRequest): _22.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _22.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_22.GetLatestValidatorSetResponse>): _22.GetLatestValidatorSetResponse;
                    fromAmino(object: _22.GetLatestValidatorSetResponseAmino): _22.GetLatestValidatorSetResponse;
                    toAmino(message: _22.GetLatestValidatorSetResponse): _22.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _22.GetLatestValidatorSetResponseAminoMsg): _22.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _22.GetLatestValidatorSetResponse): _22.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _22.GetLatestValidatorSetResponseProtoMsg): _22.GetLatestValidatorSetResponse;
                    toProto(message: _22.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _22.GetLatestValidatorSetResponse): _22.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _22.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.Validator;
                    fromPartial(object: Partial<_22.Validator>): _22.Validator;
                    fromAmino(object: _22.ValidatorAmino): _22.Validator;
                    toAmino(message: _22.Validator): _22.ValidatorAmino;
                    fromAminoMsg(object: _22.ValidatorAminoMsg): _22.Validator;
                    toAminoMsg(message: _22.Validator): _22.ValidatorAminoMsg;
                    fromProtoMsg(message: _22.ValidatorProtoMsg): _22.Validator;
                    toProto(message: _22.Validator): Uint8Array;
                    toProtoMsg(message: _22.Validator): _22.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _22.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_22.GetBlockByHeightRequest>): _22.GetBlockByHeightRequest;
                    fromAmino(object: _22.GetBlockByHeightRequestAmino): _22.GetBlockByHeightRequest;
                    toAmino(message: _22.GetBlockByHeightRequest): _22.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _22.GetBlockByHeightRequestAminoMsg): _22.GetBlockByHeightRequest;
                    toAminoMsg(message: _22.GetBlockByHeightRequest): _22.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _22.GetBlockByHeightRequestProtoMsg): _22.GetBlockByHeightRequest;
                    toProto(message: _22.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _22.GetBlockByHeightRequest): _22.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _22.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_22.GetBlockByHeightResponse>): _22.GetBlockByHeightResponse;
                    fromAmino(object: _22.GetBlockByHeightResponseAmino): _22.GetBlockByHeightResponse;
                    toAmino(message: _22.GetBlockByHeightResponse): _22.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _22.GetBlockByHeightResponseAminoMsg): _22.GetBlockByHeightResponse;
                    toAminoMsg(message: _22.GetBlockByHeightResponse): _22.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _22.GetBlockByHeightResponseProtoMsg): _22.GetBlockByHeightResponse;
                    toProto(message: _22.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _22.GetBlockByHeightResponse): _22.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _22.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _22.GetLatestBlockRequest;
                    fromPartial(_: Partial<_22.GetLatestBlockRequest>): _22.GetLatestBlockRequest;
                    fromAmino(_: _22.GetLatestBlockRequestAmino): _22.GetLatestBlockRequest;
                    toAmino(_: _22.GetLatestBlockRequest): _22.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _22.GetLatestBlockRequestAminoMsg): _22.GetLatestBlockRequest;
                    toAminoMsg(message: _22.GetLatestBlockRequest): _22.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _22.GetLatestBlockRequestProtoMsg): _22.GetLatestBlockRequest;
                    toProto(message: _22.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _22.GetLatestBlockRequest): _22.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _22.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetLatestBlockResponse;
                    fromPartial(object: Partial<_22.GetLatestBlockResponse>): _22.GetLatestBlockResponse;
                    fromAmino(object: _22.GetLatestBlockResponseAmino): _22.GetLatestBlockResponse;
                    toAmino(message: _22.GetLatestBlockResponse): _22.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _22.GetLatestBlockResponseAminoMsg): _22.GetLatestBlockResponse;
                    toAminoMsg(message: _22.GetLatestBlockResponse): _22.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _22.GetLatestBlockResponseProtoMsg): _22.GetLatestBlockResponse;
                    toProto(message: _22.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _22.GetLatestBlockResponse): _22.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _22.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _22.GetSyncingRequest;
                    fromPartial(_: Partial<_22.GetSyncingRequest>): _22.GetSyncingRequest;
                    fromAmino(_: _22.GetSyncingRequestAmino): _22.GetSyncingRequest;
                    toAmino(_: _22.GetSyncingRequest): _22.GetSyncingRequestAmino;
                    fromAminoMsg(object: _22.GetSyncingRequestAminoMsg): _22.GetSyncingRequest;
                    toAminoMsg(message: _22.GetSyncingRequest): _22.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _22.GetSyncingRequestProtoMsg): _22.GetSyncingRequest;
                    toProto(message: _22.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _22.GetSyncingRequest): _22.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _22.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetSyncingResponse;
                    fromPartial(object: Partial<_22.GetSyncingResponse>): _22.GetSyncingResponse;
                    fromAmino(object: _22.GetSyncingResponseAmino): _22.GetSyncingResponse;
                    toAmino(message: _22.GetSyncingResponse): _22.GetSyncingResponseAmino;
                    fromAminoMsg(object: _22.GetSyncingResponseAminoMsg): _22.GetSyncingResponse;
                    toAminoMsg(message: _22.GetSyncingResponse): _22.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _22.GetSyncingResponseProtoMsg): _22.GetSyncingResponse;
                    toProto(message: _22.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _22.GetSyncingResponse): _22.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _22.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _22.GetNodeInfoRequest;
                    fromPartial(_: Partial<_22.GetNodeInfoRequest>): _22.GetNodeInfoRequest;
                    fromAmino(_: _22.GetNodeInfoRequestAmino): _22.GetNodeInfoRequest;
                    toAmino(_: _22.GetNodeInfoRequest): _22.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _22.GetNodeInfoRequestAminoMsg): _22.GetNodeInfoRequest;
                    toAminoMsg(message: _22.GetNodeInfoRequest): _22.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _22.GetNodeInfoRequestProtoMsg): _22.GetNodeInfoRequest;
                    toProto(message: _22.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _22.GetNodeInfoRequest): _22.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _22.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetNodeInfoResponse;
                    fromPartial(object: Partial<_22.GetNodeInfoResponse>): _22.GetNodeInfoResponse;
                    fromAmino(object: _22.GetNodeInfoResponseAmino): _22.GetNodeInfoResponse;
                    toAmino(message: _22.GetNodeInfoResponse): _22.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _22.GetNodeInfoResponseAminoMsg): _22.GetNodeInfoResponse;
                    toAminoMsg(message: _22.GetNodeInfoResponse): _22.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _22.GetNodeInfoResponseProtoMsg): _22.GetNodeInfoResponse;
                    toProto(message: _22.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _22.GetNodeInfoResponse): _22.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _22.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.VersionInfo;
                    fromPartial(object: Partial<_22.VersionInfo>): _22.VersionInfo;
                    fromAmino(object: _22.VersionInfoAmino): _22.VersionInfo;
                    toAmino(message: _22.VersionInfo): _22.VersionInfoAmino;
                    fromAminoMsg(object: _22.VersionInfoAminoMsg): _22.VersionInfo;
                    toAminoMsg(message: _22.VersionInfo): _22.VersionInfoAminoMsg;
                    fromProtoMsg(message: _22.VersionInfoProtoMsg): _22.VersionInfo;
                    toProto(message: _22.VersionInfo): Uint8Array;
                    toProtoMsg(message: _22.VersionInfo): _22.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _22.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.Module;
                    fromPartial(object: Partial<_22.Module>): _22.Module;
                    fromAmino(object: _22.ModuleAmino): _22.Module;
                    toAmino(message: _22.Module): _22.ModuleAmino;
                    fromAminoMsg(object: _22.ModuleAminoMsg): _22.Module;
                    toAminoMsg(message: _22.Module): _22.ModuleAminoMsg;
                    fromProtoMsg(message: _22.ModuleProtoMsg): _22.Module;
                    toProto(message: _22.Module): Uint8Array;
                    toProtoMsg(message: _22.Module): _22.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _23.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.Coin;
                fromPartial(object: Partial<_23.Coin>): _23.Coin;
                fromAmino(object: _23.CoinAmino): _23.Coin;
                toAmino(message: _23.Coin): _23.CoinAmino;
                fromAminoMsg(object: _23.CoinAminoMsg): _23.Coin;
                toAminoMsg(message: _23.Coin): _23.CoinAminoMsg;
                fromProtoMsg(message: _23.CoinProtoMsg): _23.Coin;
                toProto(message: _23.Coin): Uint8Array;
                toProtoMsg(message: _23.Coin): _23.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _23.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.DecCoin;
                fromPartial(object: Partial<_23.DecCoin>): _23.DecCoin;
                fromAmino(object: _23.DecCoinAmino): _23.DecCoin;
                toAmino(message: _23.DecCoin): _23.DecCoinAmino;
                fromAminoMsg(object: _23.DecCoinAminoMsg): _23.DecCoin;
                toAminoMsg(message: _23.DecCoin): _23.DecCoinAminoMsg;
                fromProtoMsg(message: _23.DecCoinProtoMsg): _23.DecCoin;
                toProto(message: _23.DecCoin): Uint8Array;
                toProtoMsg(message: _23.DecCoin): _23.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _23.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.IntProto;
                fromPartial(object: Partial<_23.IntProto>): _23.IntProto;
                fromAmino(object: _23.IntProtoAmino): _23.IntProto;
                toAmino(message: _23.IntProto): _23.IntProtoAmino;
                fromAminoMsg(object: _23.IntProtoAminoMsg): _23.IntProto;
                toAminoMsg(message: _23.IntProto): _23.IntProtoAminoMsg;
                fromProtoMsg(message: _23.IntProtoProtoMsg): _23.IntProto;
                toProto(message: _23.IntProto): Uint8Array;
                toProtoMsg(message: _23.IntProto): _23.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _23.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.DecProto;
                fromPartial(object: Partial<_23.DecProto>): _23.DecProto;
                fromAmino(object: _23.DecProtoAmino): _23.DecProto;
                toAmino(message: _23.DecProto): _23.DecProtoAmino;
                fromAminoMsg(object: _23.DecProtoAminoMsg): _23.DecProto;
                toAminoMsg(message: _23.DecProto): _23.DecProtoAminoMsg;
                fromProtoMsg(message: _23.DecProtoProtoMsg): _23.DecProto;
                toProto(message: _23.DecProto): Uint8Array;
                toProtoMsg(message: _23.DecProto): _23.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _25.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.GenesisOwners;
                fromPartial(object: Partial<_25.GenesisOwners>): _25.GenesisOwners;
                fromAmino(object: _25.GenesisOwnersAmino): _25.GenesisOwners;
                toAmino(message: _25.GenesisOwners): _25.GenesisOwnersAmino;
                fromAminoMsg(object: _25.GenesisOwnersAminoMsg): _25.GenesisOwners;
                toAminoMsg(message: _25.GenesisOwners): _25.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _25.GenesisOwnersProtoMsg): _25.GenesisOwners;
                toProto(message: _25.GenesisOwners): Uint8Array;
                toProtoMsg(message: _25.GenesisOwners): _25.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _24.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.Capability;
                fromPartial(object: Partial<_24.Capability>): _24.Capability;
                fromAmino(object: _24.CapabilityAmino): _24.Capability;
                toAmino(message: _24.Capability): _24.CapabilityAmino;
                fromAminoMsg(object: _24.CapabilityAminoMsg): _24.Capability;
                toAminoMsg(message: _24.Capability): _24.CapabilityAminoMsg;
                fromProtoMsg(message: _24.CapabilityProtoMsg): _24.Capability;
                toProto(message: _24.Capability): Uint8Array;
                toProtoMsg(message: _24.Capability): _24.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _24.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.Owner;
                fromPartial(object: Partial<_24.Owner>): _24.Owner;
                fromAmino(object: _24.OwnerAmino): _24.Owner;
                toAmino(message: _24.Owner): _24.OwnerAmino;
                fromAminoMsg(object: _24.OwnerAminoMsg): _24.Owner;
                toAminoMsg(message: _24.Owner): _24.OwnerAminoMsg;
                fromProtoMsg(message: _24.OwnerProtoMsg): _24.Owner;
                toProto(message: _24.Owner): Uint8Array;
                toProtoMsg(message: _24.Owner): _24.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _24.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.CapabilityOwners;
                fromPartial(object: Partial<_24.CapabilityOwners>): _24.CapabilityOwners;
                fromAmino(object: _24.CapabilityOwnersAmino): _24.CapabilityOwners;
                toAmino(message: _24.CapabilityOwners): _24.CapabilityOwnersAmino;
                fromAminoMsg(object: _24.CapabilityOwnersAminoMsg): _24.CapabilityOwners;
                toAminoMsg(message: _24.CapabilityOwners): _24.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _24.CapabilityOwnersProtoMsg): _24.CapabilityOwners;
                toProto(message: _24.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _24.CapabilityOwners): _24.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _154.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _27.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _27.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _27.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _27.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _27.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _27.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _27.MsgVerifyInvariant) => _27.MsgVerifyInvariantAmino;
                    fromAmino: (object: _27.MsgVerifyInvariantAmino) => _27.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _27.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgVerifyInvariant;
                fromPartial(object: Partial<_27.MsgVerifyInvariant>): _27.MsgVerifyInvariant;
                fromAmino(object: _27.MsgVerifyInvariantAmino): _27.MsgVerifyInvariant;
                toAmino(message: _27.MsgVerifyInvariant): _27.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _27.MsgVerifyInvariantAminoMsg): _27.MsgVerifyInvariant;
                toAminoMsg(message: _27.MsgVerifyInvariant): _27.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _27.MsgVerifyInvariantProtoMsg): _27.MsgVerifyInvariant;
                toProto(message: _27.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _27.MsgVerifyInvariant): _27.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _27.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_27.MsgVerifyInvariantResponse>): _27.MsgVerifyInvariantResponse;
                fromAmino(_: _27.MsgVerifyInvariantResponseAmino): _27.MsgVerifyInvariantResponse;
                toAmino(_: _27.MsgVerifyInvariantResponse): _27.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _27.MsgVerifyInvariantResponseAminoMsg): _27.MsgVerifyInvariantResponse;
                toAminoMsg(message: _27.MsgVerifyInvariantResponse): _27.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _27.MsgVerifyInvariantResponseProtoMsg): _27.MsgVerifyInvariantResponse;
                toProto(message: _27.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _27.MsgVerifyInvariantResponse): _27.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _26.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.GenesisState;
                fromPartial(object: Partial<_26.GenesisState>): _26.GenesisState;
                fromAmino(object: _26.GenesisStateAmino): _26.GenesisState;
                toAmino(message: _26.GenesisState): _26.GenesisStateAmino;
                fromAminoMsg(object: _26.GenesisStateAminoMsg): _26.GenesisState;
                toAminoMsg(message: _26.GenesisState): _26.GenesisStateAminoMsg;
                fromProtoMsg(message: _26.GenesisStateProtoMsg): _26.GenesisState;
                toProto(message: _26.GenesisState): Uint8Array;
                toProtoMsg(message: _26.GenesisState): _26.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _28.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.PubKey;
                fromPartial(object: Partial<_28.PubKey>): _28.PubKey;
                fromAmino(object: _28.PubKeyAmino): _28.PubKey;
                toAmino(message: _28.PubKey): _28.PubKeyAmino;
                fromAminoMsg(object: _28.PubKeyAminoMsg): _28.PubKey;
                toAminoMsg(message: _28.PubKey): _28.PubKeyAminoMsg;
                fromProtoMsg(message: _28.PubKeyProtoMsg): _28.PubKey;
                toProto(message: _28.PubKey): Uint8Array;
                toProtoMsg(message: _28.PubKey): _28.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _28.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.PrivKey;
                fromPartial(object: Partial<_28.PrivKey>): _28.PrivKey;
                fromAmino(object: _28.PrivKeyAmino): _28.PrivKey;
                toAmino(message: _28.PrivKey): _28.PrivKeyAmino;
                fromAminoMsg(object: _28.PrivKeyAminoMsg): _28.PrivKey;
                toAminoMsg(message: _28.PrivKey): _28.PrivKeyAminoMsg;
                fromProtoMsg(message: _28.PrivKeyProtoMsg): _28.PrivKey;
                toProto(message: _28.PrivKey): Uint8Array;
                toProtoMsg(message: _28.PrivKey): _28.PrivKeyProtoMsg;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _29.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.LegacyAminoPubKey;
                fromPartial(object: Partial<_29.LegacyAminoPubKey>): _29.LegacyAminoPubKey;
                fromAmino(object: _29.LegacyAminoPubKeyAmino): _29.LegacyAminoPubKey;
                toAmino(message: _29.LegacyAminoPubKey): _29.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _29.LegacyAminoPubKeyAminoMsg): _29.LegacyAminoPubKey;
                toAminoMsg(message: _29.LegacyAminoPubKey): _29.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _29.LegacyAminoPubKeyProtoMsg): _29.LegacyAminoPubKey;
                toProto(message: _29.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _29.LegacyAminoPubKey): _29.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
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
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _31.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.PubKey;
                fromPartial(object: Partial<_31.PubKey>): _31.PubKey;
                fromAmino(object: _31.PubKeyAmino): _31.PubKey;
                toAmino(message: _31.PubKey): _31.PubKeyAmino;
                fromAminoMsg(object: _31.PubKeyAminoMsg): _31.PubKey;
                toAminoMsg(message: _31.PubKey): _31.PubKeyAminoMsg;
                fromProtoMsg(message: _31.PubKeyProtoMsg): _31.PubKey;
                toProto(message: _31.PubKey): Uint8Array;
                toProtoMsg(message: _31.PubKey): _31.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _31.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.PrivKey;
                fromPartial(object: Partial<_31.PrivKey>): _31.PrivKey;
                fromAmino(object: _31.PrivKeyAmino): _31.PrivKey;
                toAmino(message: _31.PrivKey): _31.PrivKeyAmino;
                fromAminoMsg(object: _31.PrivKeyAminoMsg): _31.PrivKey;
                toAminoMsg(message: _31.PrivKey): _31.PrivKeyAminoMsg;
                fromProtoMsg(message: _31.PrivKeyProtoMsg): _31.PrivKey;
                toProto(message: _31.PrivKey): Uint8Array;
                toProtoMsg(message: _31.PrivKey): _31.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _155.MsgClientImpl;
            QueryClientImpl: typeof _142.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _34.QueryParamsRequest): Promise<_34.QueryParamsResponse>;
                validatorOutstandingRewards(request: _34.QueryValidatorOutstandingRewardsRequest): Promise<_34.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _34.QueryValidatorCommissionRequest): Promise<_34.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _34.QueryValidatorSlashesRequest): Promise<_34.QueryValidatorSlashesResponse>;
                delegationRewards(request: _34.QueryDelegationRewardsRequest): Promise<_34.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _34.QueryDelegationTotalRewardsRequest): Promise<_34.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _34.QueryDelegatorValidatorsRequest): Promise<_34.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _34.QueryDelegatorWithdrawAddressRequest): Promise<_34.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _34.QueryCommunityPoolRequest): Promise<_34.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _127.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _35.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _35.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _35.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _35.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _35.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _35.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _35.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _35.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _35.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _35.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _35.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _35.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _35.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _35.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _35.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _35.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _35.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _35.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _35.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _35.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _35.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _35.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _35.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _35.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _35.MsgSetWithdrawAddress) => _35.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _35.MsgSetWithdrawAddressAmino) => _35.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _35.MsgWithdrawDelegatorReward) => _35.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _35.MsgWithdrawDelegatorRewardAmino) => _35.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _35.MsgWithdrawValidatorCommission) => _35.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _35.MsgWithdrawValidatorCommissionAmino) => _35.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _35.MsgFundCommunityPool) => _35.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _35.MsgFundCommunityPoolAmino) => _35.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _35.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_35.MsgSetWithdrawAddress>): _35.MsgSetWithdrawAddress;
                fromAmino(object: _35.MsgSetWithdrawAddressAmino): _35.MsgSetWithdrawAddress;
                toAmino(message: _35.MsgSetWithdrawAddress): _35.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _35.MsgSetWithdrawAddressAminoMsg): _35.MsgSetWithdrawAddress;
                toAminoMsg(message: _35.MsgSetWithdrawAddress): _35.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _35.MsgSetWithdrawAddressProtoMsg): _35.MsgSetWithdrawAddress;
                toProto(message: _35.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _35.MsgSetWithdrawAddress): _35.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _35.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_35.MsgSetWithdrawAddressResponse>): _35.MsgSetWithdrawAddressResponse;
                fromAmino(_: _35.MsgSetWithdrawAddressResponseAmino): _35.MsgSetWithdrawAddressResponse;
                toAmino(_: _35.MsgSetWithdrawAddressResponse): _35.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _35.MsgSetWithdrawAddressResponseAminoMsg): _35.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _35.MsgSetWithdrawAddressResponse): _35.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _35.MsgSetWithdrawAddressResponseProtoMsg): _35.MsgSetWithdrawAddressResponse;
                toProto(message: _35.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _35.MsgSetWithdrawAddressResponse): _35.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _35.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_35.MsgWithdrawDelegatorReward>): _35.MsgWithdrawDelegatorReward;
                fromAmino(object: _35.MsgWithdrawDelegatorRewardAmino): _35.MsgWithdrawDelegatorReward;
                toAmino(message: _35.MsgWithdrawDelegatorReward): _35.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _35.MsgWithdrawDelegatorRewardAminoMsg): _35.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _35.MsgWithdrawDelegatorReward): _35.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _35.MsgWithdrawDelegatorRewardProtoMsg): _35.MsgWithdrawDelegatorReward;
                toProto(message: _35.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _35.MsgWithdrawDelegatorReward): _35.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _35.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_35.MsgWithdrawDelegatorRewardResponse>): _35.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _35.MsgWithdrawDelegatorRewardResponseAmino): _35.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _35.MsgWithdrawDelegatorRewardResponse): _35.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _35.MsgWithdrawDelegatorRewardResponseAminoMsg): _35.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _35.MsgWithdrawDelegatorRewardResponse): _35.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _35.MsgWithdrawDelegatorRewardResponseProtoMsg): _35.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _35.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _35.MsgWithdrawDelegatorRewardResponse): _35.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _35.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_35.MsgWithdrawValidatorCommission>): _35.MsgWithdrawValidatorCommission;
                fromAmino(object: _35.MsgWithdrawValidatorCommissionAmino): _35.MsgWithdrawValidatorCommission;
                toAmino(message: _35.MsgWithdrawValidatorCommission): _35.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _35.MsgWithdrawValidatorCommissionAminoMsg): _35.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _35.MsgWithdrawValidatorCommission): _35.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _35.MsgWithdrawValidatorCommissionProtoMsg): _35.MsgWithdrawValidatorCommission;
                toProto(message: _35.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _35.MsgWithdrawValidatorCommission): _35.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _35.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_35.MsgWithdrawValidatorCommissionResponse>): _35.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _35.MsgWithdrawValidatorCommissionResponseAmino): _35.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _35.MsgWithdrawValidatorCommissionResponse): _35.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _35.MsgWithdrawValidatorCommissionResponseAminoMsg): _35.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _35.MsgWithdrawValidatorCommissionResponse): _35.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _35.MsgWithdrawValidatorCommissionResponseProtoMsg): _35.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _35.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _35.MsgWithdrawValidatorCommissionResponse): _35.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _35.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgFundCommunityPool;
                fromPartial(object: Partial<_35.MsgFundCommunityPool>): _35.MsgFundCommunityPool;
                fromAmino(object: _35.MsgFundCommunityPoolAmino): _35.MsgFundCommunityPool;
                toAmino(message: _35.MsgFundCommunityPool): _35.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _35.MsgFundCommunityPoolAminoMsg): _35.MsgFundCommunityPool;
                toAminoMsg(message: _35.MsgFundCommunityPool): _35.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _35.MsgFundCommunityPoolProtoMsg): _35.MsgFundCommunityPool;
                toProto(message: _35.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _35.MsgFundCommunityPool): _35.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _35.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_35.MsgFundCommunityPoolResponse>): _35.MsgFundCommunityPoolResponse;
                fromAmino(_: _35.MsgFundCommunityPoolResponseAmino): _35.MsgFundCommunityPoolResponse;
                toAmino(_: _35.MsgFundCommunityPoolResponse): _35.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _35.MsgFundCommunityPoolResponseAminoMsg): _35.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _35.MsgFundCommunityPoolResponse): _35.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _35.MsgFundCommunityPoolResponseProtoMsg): _35.MsgFundCommunityPoolResponse;
                toProto(message: _35.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _35.MsgFundCommunityPoolResponse): _35.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _34.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.QueryParamsRequest;
                fromPartial(_: Partial<_34.QueryParamsRequest>): _34.QueryParamsRequest;
                fromAmino(_: _34.QueryParamsRequestAmino): _34.QueryParamsRequest;
                toAmino(_: _34.QueryParamsRequest): _34.QueryParamsRequestAmino;
                fromAminoMsg(object: _34.QueryParamsRequestAminoMsg): _34.QueryParamsRequest;
                toAminoMsg(message: _34.QueryParamsRequest): _34.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _34.QueryParamsRequestProtoMsg): _34.QueryParamsRequest;
                toProto(message: _34.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _34.QueryParamsRequest): _34.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _34.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryParamsResponse;
                fromPartial(object: Partial<_34.QueryParamsResponse>): _34.QueryParamsResponse;
                fromAmino(object: _34.QueryParamsResponseAmino): _34.QueryParamsResponse;
                toAmino(message: _34.QueryParamsResponse): _34.QueryParamsResponseAmino;
                fromAminoMsg(object: _34.QueryParamsResponseAminoMsg): _34.QueryParamsResponse;
                toAminoMsg(message: _34.QueryParamsResponse): _34.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _34.QueryParamsResponseProtoMsg): _34.QueryParamsResponse;
                toProto(message: _34.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _34.QueryParamsResponse): _34.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _34.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_34.QueryValidatorOutstandingRewardsRequest>): _34.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _34.QueryValidatorOutstandingRewardsRequestAmino): _34.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _34.QueryValidatorOutstandingRewardsRequest): _34.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _34.QueryValidatorOutstandingRewardsRequestAminoMsg): _34.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _34.QueryValidatorOutstandingRewardsRequest): _34.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _34.QueryValidatorOutstandingRewardsRequestProtoMsg): _34.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _34.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _34.QueryValidatorOutstandingRewardsRequest): _34.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _34.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_34.QueryValidatorOutstandingRewardsResponse>): _34.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _34.QueryValidatorOutstandingRewardsResponseAmino): _34.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _34.QueryValidatorOutstandingRewardsResponse): _34.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _34.QueryValidatorOutstandingRewardsResponseAminoMsg): _34.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _34.QueryValidatorOutstandingRewardsResponse): _34.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _34.QueryValidatorOutstandingRewardsResponseProtoMsg): _34.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _34.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _34.QueryValidatorOutstandingRewardsResponse): _34.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _34.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_34.QueryValidatorCommissionRequest>): _34.QueryValidatorCommissionRequest;
                fromAmino(object: _34.QueryValidatorCommissionRequestAmino): _34.QueryValidatorCommissionRequest;
                toAmino(message: _34.QueryValidatorCommissionRequest): _34.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _34.QueryValidatorCommissionRequestAminoMsg): _34.QueryValidatorCommissionRequest;
                toAminoMsg(message: _34.QueryValidatorCommissionRequest): _34.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _34.QueryValidatorCommissionRequestProtoMsg): _34.QueryValidatorCommissionRequest;
                toProto(message: _34.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _34.QueryValidatorCommissionRequest): _34.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _34.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_34.QueryValidatorCommissionResponse>): _34.QueryValidatorCommissionResponse;
                fromAmino(object: _34.QueryValidatorCommissionResponseAmino): _34.QueryValidatorCommissionResponse;
                toAmino(message: _34.QueryValidatorCommissionResponse): _34.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _34.QueryValidatorCommissionResponseAminoMsg): _34.QueryValidatorCommissionResponse;
                toAminoMsg(message: _34.QueryValidatorCommissionResponse): _34.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _34.QueryValidatorCommissionResponseProtoMsg): _34.QueryValidatorCommissionResponse;
                toProto(message: _34.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _34.QueryValidatorCommissionResponse): _34.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _34.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_34.QueryValidatorSlashesRequest>): _34.QueryValidatorSlashesRequest;
                fromAmino(object: _34.QueryValidatorSlashesRequestAmino): _34.QueryValidatorSlashesRequest;
                toAmino(message: _34.QueryValidatorSlashesRequest): _34.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _34.QueryValidatorSlashesRequestAminoMsg): _34.QueryValidatorSlashesRequest;
                toAminoMsg(message: _34.QueryValidatorSlashesRequest): _34.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _34.QueryValidatorSlashesRequestProtoMsg): _34.QueryValidatorSlashesRequest;
                toProto(message: _34.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _34.QueryValidatorSlashesRequest): _34.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _34.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_34.QueryValidatorSlashesResponse>): _34.QueryValidatorSlashesResponse;
                fromAmino(object: _34.QueryValidatorSlashesResponseAmino): _34.QueryValidatorSlashesResponse;
                toAmino(message: _34.QueryValidatorSlashesResponse): _34.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _34.QueryValidatorSlashesResponseAminoMsg): _34.QueryValidatorSlashesResponse;
                toAminoMsg(message: _34.QueryValidatorSlashesResponse): _34.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _34.QueryValidatorSlashesResponseProtoMsg): _34.QueryValidatorSlashesResponse;
                toProto(message: _34.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _34.QueryValidatorSlashesResponse): _34.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _34.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_34.QueryDelegationRewardsRequest>): _34.QueryDelegationRewardsRequest;
                fromAmino(object: _34.QueryDelegationRewardsRequestAmino): _34.QueryDelegationRewardsRequest;
                toAmino(message: _34.QueryDelegationRewardsRequest): _34.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _34.QueryDelegationRewardsRequestAminoMsg): _34.QueryDelegationRewardsRequest;
                toAminoMsg(message: _34.QueryDelegationRewardsRequest): _34.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _34.QueryDelegationRewardsRequestProtoMsg): _34.QueryDelegationRewardsRequest;
                toProto(message: _34.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _34.QueryDelegationRewardsRequest): _34.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _34.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_34.QueryDelegationRewardsResponse>): _34.QueryDelegationRewardsResponse;
                fromAmino(object: _34.QueryDelegationRewardsResponseAmino): _34.QueryDelegationRewardsResponse;
                toAmino(message: _34.QueryDelegationRewardsResponse): _34.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _34.QueryDelegationRewardsResponseAminoMsg): _34.QueryDelegationRewardsResponse;
                toAminoMsg(message: _34.QueryDelegationRewardsResponse): _34.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _34.QueryDelegationRewardsResponseProtoMsg): _34.QueryDelegationRewardsResponse;
                toProto(message: _34.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _34.QueryDelegationRewardsResponse): _34.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _34.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_34.QueryDelegationTotalRewardsRequest>): _34.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _34.QueryDelegationTotalRewardsRequestAmino): _34.QueryDelegationTotalRewardsRequest;
                toAmino(message: _34.QueryDelegationTotalRewardsRequest): _34.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _34.QueryDelegationTotalRewardsRequestAminoMsg): _34.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _34.QueryDelegationTotalRewardsRequest): _34.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _34.QueryDelegationTotalRewardsRequestProtoMsg): _34.QueryDelegationTotalRewardsRequest;
                toProto(message: _34.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _34.QueryDelegationTotalRewardsRequest): _34.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _34.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_34.QueryDelegationTotalRewardsResponse>): _34.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _34.QueryDelegationTotalRewardsResponseAmino): _34.QueryDelegationTotalRewardsResponse;
                toAmino(message: _34.QueryDelegationTotalRewardsResponse): _34.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _34.QueryDelegationTotalRewardsResponseAminoMsg): _34.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _34.QueryDelegationTotalRewardsResponse): _34.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _34.QueryDelegationTotalRewardsResponseProtoMsg): _34.QueryDelegationTotalRewardsResponse;
                toProto(message: _34.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _34.QueryDelegationTotalRewardsResponse): _34.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _34.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_34.QueryDelegatorValidatorsRequest>): _34.QueryDelegatorValidatorsRequest;
                fromAmino(object: _34.QueryDelegatorValidatorsRequestAmino): _34.QueryDelegatorValidatorsRequest;
                toAmino(message: _34.QueryDelegatorValidatorsRequest): _34.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _34.QueryDelegatorValidatorsRequestAminoMsg): _34.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _34.QueryDelegatorValidatorsRequest): _34.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _34.QueryDelegatorValidatorsRequestProtoMsg): _34.QueryDelegatorValidatorsRequest;
                toProto(message: _34.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _34.QueryDelegatorValidatorsRequest): _34.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _34.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_34.QueryDelegatorValidatorsResponse>): _34.QueryDelegatorValidatorsResponse;
                fromAmino(object: _34.QueryDelegatorValidatorsResponseAmino): _34.QueryDelegatorValidatorsResponse;
                toAmino(message: _34.QueryDelegatorValidatorsResponse): _34.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _34.QueryDelegatorValidatorsResponseAminoMsg): _34.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _34.QueryDelegatorValidatorsResponse): _34.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _34.QueryDelegatorValidatorsResponseProtoMsg): _34.QueryDelegatorValidatorsResponse;
                toProto(message: _34.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _34.QueryDelegatorValidatorsResponse): _34.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _34.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_34.QueryDelegatorWithdrawAddressRequest>): _34.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _34.QueryDelegatorWithdrawAddressRequestAmino): _34.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _34.QueryDelegatorWithdrawAddressRequest): _34.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _34.QueryDelegatorWithdrawAddressRequestAminoMsg): _34.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _34.QueryDelegatorWithdrawAddressRequest): _34.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _34.QueryDelegatorWithdrawAddressRequestProtoMsg): _34.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _34.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _34.QueryDelegatorWithdrawAddressRequest): _34.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _34.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_34.QueryDelegatorWithdrawAddressResponse>): _34.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _34.QueryDelegatorWithdrawAddressResponseAmino): _34.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _34.QueryDelegatorWithdrawAddressResponse): _34.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _34.QueryDelegatorWithdrawAddressResponseAminoMsg): _34.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _34.QueryDelegatorWithdrawAddressResponse): _34.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _34.QueryDelegatorWithdrawAddressResponseProtoMsg): _34.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _34.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _34.QueryDelegatorWithdrawAddressResponse): _34.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _34.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_34.QueryCommunityPoolRequest>): _34.QueryCommunityPoolRequest;
                fromAmino(_: _34.QueryCommunityPoolRequestAmino): _34.QueryCommunityPoolRequest;
                toAmino(_: _34.QueryCommunityPoolRequest): _34.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _34.QueryCommunityPoolRequestAminoMsg): _34.QueryCommunityPoolRequest;
                toAminoMsg(message: _34.QueryCommunityPoolRequest): _34.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _34.QueryCommunityPoolRequestProtoMsg): _34.QueryCommunityPoolRequest;
                toProto(message: _34.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _34.QueryCommunityPoolRequest): _34.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _34.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_34.QueryCommunityPoolResponse>): _34.QueryCommunityPoolResponse;
                fromAmino(object: _34.QueryCommunityPoolResponseAmino): _34.QueryCommunityPoolResponse;
                toAmino(message: _34.QueryCommunityPoolResponse): _34.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _34.QueryCommunityPoolResponseAminoMsg): _34.QueryCommunityPoolResponse;
                toAminoMsg(message: _34.QueryCommunityPoolResponse): _34.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _34.QueryCommunityPoolResponseProtoMsg): _34.QueryCommunityPoolResponse;
                toProto(message: _34.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _34.QueryCommunityPoolResponse): _34.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _33.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_33.DelegatorWithdrawInfo>): _33.DelegatorWithdrawInfo;
                fromAmino(object: _33.DelegatorWithdrawInfoAmino): _33.DelegatorWithdrawInfo;
                toAmino(message: _33.DelegatorWithdrawInfo): _33.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _33.DelegatorWithdrawInfoAminoMsg): _33.DelegatorWithdrawInfo;
                toAminoMsg(message: _33.DelegatorWithdrawInfo): _33.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _33.DelegatorWithdrawInfoProtoMsg): _33.DelegatorWithdrawInfo;
                toProto(message: _33.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _33.DelegatorWithdrawInfo): _33.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _33.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_33.ValidatorOutstandingRewardsRecord>): _33.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _33.ValidatorOutstandingRewardsRecordAmino): _33.ValidatorOutstandingRewardsRecord;
                toAmino(message: _33.ValidatorOutstandingRewardsRecord): _33.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _33.ValidatorOutstandingRewardsRecordAminoMsg): _33.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _33.ValidatorOutstandingRewardsRecord): _33.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _33.ValidatorOutstandingRewardsRecordProtoMsg): _33.ValidatorOutstandingRewardsRecord;
                toProto(message: _33.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _33.ValidatorOutstandingRewardsRecord): _33.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _33.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_33.ValidatorAccumulatedCommissionRecord>): _33.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _33.ValidatorAccumulatedCommissionRecordAmino): _33.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _33.ValidatorAccumulatedCommissionRecord): _33.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _33.ValidatorAccumulatedCommissionRecordAminoMsg): _33.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _33.ValidatorAccumulatedCommissionRecord): _33.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _33.ValidatorAccumulatedCommissionRecordProtoMsg): _33.ValidatorAccumulatedCommissionRecord;
                toProto(message: _33.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _33.ValidatorAccumulatedCommissionRecord): _33.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _33.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_33.ValidatorHistoricalRewardsRecord>): _33.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _33.ValidatorHistoricalRewardsRecordAmino): _33.ValidatorHistoricalRewardsRecord;
                toAmino(message: _33.ValidatorHistoricalRewardsRecord): _33.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _33.ValidatorHistoricalRewardsRecordAminoMsg): _33.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _33.ValidatorHistoricalRewardsRecord): _33.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _33.ValidatorHistoricalRewardsRecordProtoMsg): _33.ValidatorHistoricalRewardsRecord;
                toProto(message: _33.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _33.ValidatorHistoricalRewardsRecord): _33.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _33.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_33.ValidatorCurrentRewardsRecord>): _33.ValidatorCurrentRewardsRecord;
                fromAmino(object: _33.ValidatorCurrentRewardsRecordAmino): _33.ValidatorCurrentRewardsRecord;
                toAmino(message: _33.ValidatorCurrentRewardsRecord): _33.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _33.ValidatorCurrentRewardsRecordAminoMsg): _33.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _33.ValidatorCurrentRewardsRecord): _33.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _33.ValidatorCurrentRewardsRecordProtoMsg): _33.ValidatorCurrentRewardsRecord;
                toProto(message: _33.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _33.ValidatorCurrentRewardsRecord): _33.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _33.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_33.DelegatorStartingInfoRecord>): _33.DelegatorStartingInfoRecord;
                fromAmino(object: _33.DelegatorStartingInfoRecordAmino): _33.DelegatorStartingInfoRecord;
                toAmino(message: _33.DelegatorStartingInfoRecord): _33.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _33.DelegatorStartingInfoRecordAminoMsg): _33.DelegatorStartingInfoRecord;
                toAminoMsg(message: _33.DelegatorStartingInfoRecord): _33.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _33.DelegatorStartingInfoRecordProtoMsg): _33.DelegatorStartingInfoRecord;
                toProto(message: _33.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _33.DelegatorStartingInfoRecord): _33.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _33.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_33.ValidatorSlashEventRecord>): _33.ValidatorSlashEventRecord;
                fromAmino(object: _33.ValidatorSlashEventRecordAmino): _33.ValidatorSlashEventRecord;
                toAmino(message: _33.ValidatorSlashEventRecord): _33.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _33.ValidatorSlashEventRecordAminoMsg): _33.ValidatorSlashEventRecord;
                toAminoMsg(message: _33.ValidatorSlashEventRecord): _33.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _33.ValidatorSlashEventRecordProtoMsg): _33.ValidatorSlashEventRecord;
                toProto(message: _33.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _33.ValidatorSlashEventRecord): _33.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _32.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.Params;
                fromPartial(object: Partial<_32.Params>): _32.Params;
                fromAmino(object: _32.ParamsAmino): _32.Params;
                toAmino(message: _32.Params): _32.ParamsAmino;
                fromAminoMsg(object: _32.ParamsAminoMsg): _32.Params;
                toAminoMsg(message: _32.Params): _32.ParamsAminoMsg;
                fromProtoMsg(message: _32.ParamsProtoMsg): _32.Params;
                toProto(message: _32.Params): Uint8Array;
                toProtoMsg(message: _32.Params): _32.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _32.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_32.ValidatorHistoricalRewards>): _32.ValidatorHistoricalRewards;
                fromAmino(object: _32.ValidatorHistoricalRewardsAmino): _32.ValidatorHistoricalRewards;
                toAmino(message: _32.ValidatorHistoricalRewards): _32.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _32.ValidatorHistoricalRewardsAminoMsg): _32.ValidatorHistoricalRewards;
                toAminoMsg(message: _32.ValidatorHistoricalRewards): _32.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _32.ValidatorHistoricalRewardsProtoMsg): _32.ValidatorHistoricalRewards;
                toProto(message: _32.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _32.ValidatorHistoricalRewards): _32.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _32.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.ValidatorCurrentRewards;
                fromPartial(object: Partial<_32.ValidatorCurrentRewards>): _32.ValidatorCurrentRewards;
                fromAmino(object: _32.ValidatorCurrentRewardsAmino): _32.ValidatorCurrentRewards;
                toAmino(message: _32.ValidatorCurrentRewards): _32.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _32.ValidatorCurrentRewardsAminoMsg): _32.ValidatorCurrentRewards;
                toAminoMsg(message: _32.ValidatorCurrentRewards): _32.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _32.ValidatorCurrentRewardsProtoMsg): _32.ValidatorCurrentRewards;
                toProto(message: _32.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _32.ValidatorCurrentRewards): _32.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _32.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_32.ValidatorAccumulatedCommission>): _32.ValidatorAccumulatedCommission;
                fromAmino(object: _32.ValidatorAccumulatedCommissionAmino): _32.ValidatorAccumulatedCommission;
                toAmino(message: _32.ValidatorAccumulatedCommission): _32.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _32.ValidatorAccumulatedCommissionAminoMsg): _32.ValidatorAccumulatedCommission;
                toAminoMsg(message: _32.ValidatorAccumulatedCommission): _32.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _32.ValidatorAccumulatedCommissionProtoMsg): _32.ValidatorAccumulatedCommission;
                toProto(message: _32.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _32.ValidatorAccumulatedCommission): _32.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _32.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_32.ValidatorOutstandingRewards>): _32.ValidatorOutstandingRewards;
                fromAmino(object: _32.ValidatorOutstandingRewardsAmino): _32.ValidatorOutstandingRewards;
                toAmino(message: _32.ValidatorOutstandingRewards): _32.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _32.ValidatorOutstandingRewardsAminoMsg): _32.ValidatorOutstandingRewards;
                toAminoMsg(message: _32.ValidatorOutstandingRewards): _32.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _32.ValidatorOutstandingRewardsProtoMsg): _32.ValidatorOutstandingRewards;
                toProto(message: _32.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _32.ValidatorOutstandingRewards): _32.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _32.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.ValidatorSlashEvent;
                fromPartial(object: Partial<_32.ValidatorSlashEvent>): _32.ValidatorSlashEvent;
                fromAmino(object: _32.ValidatorSlashEventAmino): _32.ValidatorSlashEvent;
                toAmino(message: _32.ValidatorSlashEvent): _32.ValidatorSlashEventAmino;
                fromAminoMsg(object: _32.ValidatorSlashEventAminoMsg): _32.ValidatorSlashEvent;
                toAminoMsg(message: _32.ValidatorSlashEvent): _32.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _32.ValidatorSlashEventProtoMsg): _32.ValidatorSlashEvent;
                toProto(message: _32.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _32.ValidatorSlashEvent): _32.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _32.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.ValidatorSlashEvents;
                fromPartial(object: Partial<_32.ValidatorSlashEvents>): _32.ValidatorSlashEvents;
                fromAmino(object: _32.ValidatorSlashEventsAmino): _32.ValidatorSlashEvents;
                toAmino(message: _32.ValidatorSlashEvents): _32.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _32.ValidatorSlashEventsAminoMsg): _32.ValidatorSlashEvents;
                toAminoMsg(message: _32.ValidatorSlashEvents): _32.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _32.ValidatorSlashEventsProtoMsg): _32.ValidatorSlashEvents;
                toProto(message: _32.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _32.ValidatorSlashEvents): _32.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _32.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.FeePool;
                fromPartial(object: Partial<_32.FeePool>): _32.FeePool;
                fromAmino(object: _32.FeePoolAmino): _32.FeePool;
                toAmino(message: _32.FeePool): _32.FeePoolAmino;
                fromAminoMsg(object: _32.FeePoolAminoMsg): _32.FeePool;
                toAminoMsg(message: _32.FeePool): _32.FeePoolAminoMsg;
                fromProtoMsg(message: _32.FeePoolProtoMsg): _32.FeePool;
                toProto(message: _32.FeePool): Uint8Array;
                toProtoMsg(message: _32.FeePool): _32.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _32.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_32.CommunityPoolSpendProposal>): _32.CommunityPoolSpendProposal;
                fromAmino(object: _32.CommunityPoolSpendProposalAmino): _32.CommunityPoolSpendProposal;
                toAmino(message: _32.CommunityPoolSpendProposal): _32.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _32.CommunityPoolSpendProposalAminoMsg): _32.CommunityPoolSpendProposal;
                toAminoMsg(message: _32.CommunityPoolSpendProposal): _32.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _32.CommunityPoolSpendProposalProtoMsg): _32.CommunityPoolSpendProposal;
                toProto(message: _32.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _32.CommunityPoolSpendProposal): _32.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _32.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.DelegatorStartingInfo;
                fromPartial(object: Partial<_32.DelegatorStartingInfo>): _32.DelegatorStartingInfo;
                fromAmino(object: _32.DelegatorStartingInfoAmino): _32.DelegatorStartingInfo;
                toAmino(message: _32.DelegatorStartingInfo): _32.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _32.DelegatorStartingInfoAminoMsg): _32.DelegatorStartingInfo;
                toAminoMsg(message: _32.DelegatorStartingInfo): _32.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _32.DelegatorStartingInfoProtoMsg): _32.DelegatorStartingInfo;
                toProto(message: _32.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _32.DelegatorStartingInfo): _32.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _32.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.DelegationDelegatorReward;
                fromPartial(object: Partial<_32.DelegationDelegatorReward>): _32.DelegationDelegatorReward;
                fromAmino(object: _32.DelegationDelegatorRewardAmino): _32.DelegationDelegatorReward;
                toAmino(message: _32.DelegationDelegatorReward): _32.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _32.DelegationDelegatorRewardAminoMsg): _32.DelegationDelegatorReward;
                toAminoMsg(message: _32.DelegationDelegatorReward): _32.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _32.DelegationDelegatorRewardProtoMsg): _32.DelegationDelegatorReward;
                toProto(message: _32.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _32.DelegationDelegatorReward): _32.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _32.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_32.CommunityPoolSpendProposalWithDeposit>): _32.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _32.CommunityPoolSpendProposalWithDepositAmino): _32.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _32.CommunityPoolSpendProposalWithDeposit): _32.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _32.CommunityPoolSpendProposalWithDepositAminoMsg): _32.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _32.CommunityPoolSpendProposalWithDeposit): _32.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _32.CommunityPoolSpendProposalWithDepositProtoMsg): _32.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _32.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _32.CommunityPoolSpendProposalWithDeposit): _32.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _156.MsgClientImpl;
            QueryClientImpl: typeof _143.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _38.QueryEvidenceRequest): Promise<_38.QueryEvidenceResponse>;
                allEvidence(request?: _38.QueryAllEvidenceRequest): Promise<_38.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _128.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _39.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _39.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _39.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _39.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _39.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _39.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _39.MsgSubmitEvidence) => _39.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _39.MsgSubmitEvidenceAmino) => _39.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _39.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.MsgSubmitEvidence;
                fromPartial(object: Partial<_39.MsgSubmitEvidence>): _39.MsgSubmitEvidence;
                fromAmino(object: _39.MsgSubmitEvidenceAmino): _39.MsgSubmitEvidence;
                toAmino(message: _39.MsgSubmitEvidence): _39.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _39.MsgSubmitEvidenceAminoMsg): _39.MsgSubmitEvidence;
                toAminoMsg(message: _39.MsgSubmitEvidence): _39.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _39.MsgSubmitEvidenceProtoMsg): _39.MsgSubmitEvidence;
                toProto(message: _39.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _39.MsgSubmitEvidence): _39.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _39.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_39.MsgSubmitEvidenceResponse>): _39.MsgSubmitEvidenceResponse;
                fromAmino(object: _39.MsgSubmitEvidenceResponseAmino): _39.MsgSubmitEvidenceResponse;
                toAmino(message: _39.MsgSubmitEvidenceResponse): _39.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _39.MsgSubmitEvidenceResponseAminoMsg): _39.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _39.MsgSubmitEvidenceResponse): _39.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _39.MsgSubmitEvidenceResponseProtoMsg): _39.MsgSubmitEvidenceResponse;
                toProto(message: _39.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _39.MsgSubmitEvidenceResponse): _39.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _38.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryEvidenceRequest;
                fromPartial(object: Partial<_38.QueryEvidenceRequest>): _38.QueryEvidenceRequest;
                fromAmino(object: _38.QueryEvidenceRequestAmino): _38.QueryEvidenceRequest;
                toAmino(message: _38.QueryEvidenceRequest): _38.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _38.QueryEvidenceRequestAminoMsg): _38.QueryEvidenceRequest;
                toAminoMsg(message: _38.QueryEvidenceRequest): _38.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _38.QueryEvidenceRequestProtoMsg): _38.QueryEvidenceRequest;
                toProto(message: _38.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _38.QueryEvidenceRequest): _38.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _38.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryEvidenceResponse;
                fromPartial(object: Partial<_38.QueryEvidenceResponse>): _38.QueryEvidenceResponse;
                fromAmino(object: _38.QueryEvidenceResponseAmino): _38.QueryEvidenceResponse;
                toAmino(message: _38.QueryEvidenceResponse): _38.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _38.QueryEvidenceResponseAminoMsg): _38.QueryEvidenceResponse;
                toAminoMsg(message: _38.QueryEvidenceResponse): _38.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _38.QueryEvidenceResponseProtoMsg): _38.QueryEvidenceResponse;
                toProto(message: _38.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _38.QueryEvidenceResponse): _38.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _38.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_38.QueryAllEvidenceRequest>): _38.QueryAllEvidenceRequest;
                fromAmino(object: _38.QueryAllEvidenceRequestAmino): _38.QueryAllEvidenceRequest;
                toAmino(message: _38.QueryAllEvidenceRequest): _38.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _38.QueryAllEvidenceRequestAminoMsg): _38.QueryAllEvidenceRequest;
                toAminoMsg(message: _38.QueryAllEvidenceRequest): _38.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _38.QueryAllEvidenceRequestProtoMsg): _38.QueryAllEvidenceRequest;
                toProto(message: _38.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _38.QueryAllEvidenceRequest): _38.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _38.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_38.QueryAllEvidenceResponse>): _38.QueryAllEvidenceResponse;
                fromAmino(object: _38.QueryAllEvidenceResponseAmino): _38.QueryAllEvidenceResponse;
                toAmino(message: _38.QueryAllEvidenceResponse): _38.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _38.QueryAllEvidenceResponseAminoMsg): _38.QueryAllEvidenceResponse;
                toAminoMsg(message: _38.QueryAllEvidenceResponse): _38.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _38.QueryAllEvidenceResponseProtoMsg): _38.QueryAllEvidenceResponse;
                toProto(message: _38.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _38.QueryAllEvidenceResponse): _38.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _37.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.GenesisState;
                fromPartial(object: Partial<_37.GenesisState>): _37.GenesisState;
                fromAmino(object: _37.GenesisStateAmino): _37.GenesisState;
                toAmino(message: _37.GenesisState): _37.GenesisStateAmino;
                fromAminoMsg(object: _37.GenesisStateAminoMsg): _37.GenesisState;
                toAminoMsg(message: _37.GenesisState): _37.GenesisStateAminoMsg;
                fromProtoMsg(message: _37.GenesisStateProtoMsg): _37.GenesisState;
                toProto(message: _37.GenesisState): Uint8Array;
                toProtoMsg(message: _37.GenesisState): _37.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _36.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.Equivocation;
                fromPartial(object: Partial<_36.Equivocation>): _36.Equivocation;
                fromAmino(object: _36.EquivocationAmino): _36.Equivocation;
                toAmino(message: _36.Equivocation): _36.EquivocationAmino;
                fromAminoMsg(object: _36.EquivocationAminoMsg): _36.Equivocation;
                toAminoMsg(message: _36.Equivocation): _36.EquivocationAminoMsg;
                fromProtoMsg(message: _36.EquivocationProtoMsg): _36.Equivocation;
                toProto(message: _36.Equivocation): Uint8Array;
                toProtoMsg(message: _36.Equivocation): _36.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _157.MsgClientImpl;
            QueryClientImpl: typeof _144.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _42.QueryAllowanceRequest): Promise<_42.QueryAllowanceResponse>;
                allowances(request: _42.QueryAllowancesRequest): Promise<_42.QueryAllowancesResponse>;
                allowancesByGranter(request: _42.QueryAllowancesByGranterRequest): Promise<_42.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _129.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _43.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _43.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _43.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _43.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _43.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _43.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _43.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _43.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _43.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _43.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _43.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _43.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _43.MsgGrantAllowance) => _43.MsgGrantAllowanceAmino;
                    fromAmino: (object: _43.MsgGrantAllowanceAmino) => _43.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _43.MsgRevokeAllowance) => _43.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _43.MsgRevokeAllowanceAmino) => _43.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _43.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.MsgGrantAllowance;
                fromPartial(object: Partial<_43.MsgGrantAllowance>): _43.MsgGrantAllowance;
                fromAmino(object: _43.MsgGrantAllowanceAmino): _43.MsgGrantAllowance;
                toAmino(message: _43.MsgGrantAllowance): _43.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _43.MsgGrantAllowanceAminoMsg): _43.MsgGrantAllowance;
                toAminoMsg(message: _43.MsgGrantAllowance): _43.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _43.MsgGrantAllowanceProtoMsg): _43.MsgGrantAllowance;
                toProto(message: _43.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _43.MsgGrantAllowance): _43.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _43.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _43.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_43.MsgGrantAllowanceResponse>): _43.MsgGrantAllowanceResponse;
                fromAmino(_: _43.MsgGrantAllowanceResponseAmino): _43.MsgGrantAllowanceResponse;
                toAmino(_: _43.MsgGrantAllowanceResponse): _43.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _43.MsgGrantAllowanceResponseAminoMsg): _43.MsgGrantAllowanceResponse;
                toAminoMsg(message: _43.MsgGrantAllowanceResponse): _43.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _43.MsgGrantAllowanceResponseProtoMsg): _43.MsgGrantAllowanceResponse;
                toProto(message: _43.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _43.MsgGrantAllowanceResponse): _43.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _43.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.MsgRevokeAllowance;
                fromPartial(object: Partial<_43.MsgRevokeAllowance>): _43.MsgRevokeAllowance;
                fromAmino(object: _43.MsgRevokeAllowanceAmino): _43.MsgRevokeAllowance;
                toAmino(message: _43.MsgRevokeAllowance): _43.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _43.MsgRevokeAllowanceAminoMsg): _43.MsgRevokeAllowance;
                toAminoMsg(message: _43.MsgRevokeAllowance): _43.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _43.MsgRevokeAllowanceProtoMsg): _43.MsgRevokeAllowance;
                toProto(message: _43.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _43.MsgRevokeAllowance): _43.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _43.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _43.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_43.MsgRevokeAllowanceResponse>): _43.MsgRevokeAllowanceResponse;
                fromAmino(_: _43.MsgRevokeAllowanceResponseAmino): _43.MsgRevokeAllowanceResponse;
                toAmino(_: _43.MsgRevokeAllowanceResponse): _43.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _43.MsgRevokeAllowanceResponseAminoMsg): _43.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _43.MsgRevokeAllowanceResponse): _43.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _43.MsgRevokeAllowanceResponseProtoMsg): _43.MsgRevokeAllowanceResponse;
                toProto(message: _43.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _43.MsgRevokeAllowanceResponse): _43.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _40.BasicAllowance | _40.PeriodicAllowance | _40.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _42.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QueryAllowanceRequest;
                fromPartial(object: Partial<_42.QueryAllowanceRequest>): _42.QueryAllowanceRequest;
                fromAmino(object: _42.QueryAllowanceRequestAmino): _42.QueryAllowanceRequest;
                toAmino(message: _42.QueryAllowanceRequest): _42.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _42.QueryAllowanceRequestAminoMsg): _42.QueryAllowanceRequest;
                toAminoMsg(message: _42.QueryAllowanceRequest): _42.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _42.QueryAllowanceRequestProtoMsg): _42.QueryAllowanceRequest;
                toProto(message: _42.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _42.QueryAllowanceRequest): _42.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _42.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QueryAllowanceResponse;
                fromPartial(object: Partial<_42.QueryAllowanceResponse>): _42.QueryAllowanceResponse;
                fromAmino(object: _42.QueryAllowanceResponseAmino): _42.QueryAllowanceResponse;
                toAmino(message: _42.QueryAllowanceResponse): _42.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _42.QueryAllowanceResponseAminoMsg): _42.QueryAllowanceResponse;
                toAminoMsg(message: _42.QueryAllowanceResponse): _42.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _42.QueryAllowanceResponseProtoMsg): _42.QueryAllowanceResponse;
                toProto(message: _42.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _42.QueryAllowanceResponse): _42.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _42.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QueryAllowancesRequest;
                fromPartial(object: Partial<_42.QueryAllowancesRequest>): _42.QueryAllowancesRequest;
                fromAmino(object: _42.QueryAllowancesRequestAmino): _42.QueryAllowancesRequest;
                toAmino(message: _42.QueryAllowancesRequest): _42.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _42.QueryAllowancesRequestAminoMsg): _42.QueryAllowancesRequest;
                toAminoMsg(message: _42.QueryAllowancesRequest): _42.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _42.QueryAllowancesRequestProtoMsg): _42.QueryAllowancesRequest;
                toProto(message: _42.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _42.QueryAllowancesRequest): _42.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _42.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QueryAllowancesResponse;
                fromPartial(object: Partial<_42.QueryAllowancesResponse>): _42.QueryAllowancesResponse;
                fromAmino(object: _42.QueryAllowancesResponseAmino): _42.QueryAllowancesResponse;
                toAmino(message: _42.QueryAllowancesResponse): _42.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _42.QueryAllowancesResponseAminoMsg): _42.QueryAllowancesResponse;
                toAminoMsg(message: _42.QueryAllowancesResponse): _42.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _42.QueryAllowancesResponseProtoMsg): _42.QueryAllowancesResponse;
                toProto(message: _42.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _42.QueryAllowancesResponse): _42.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _42.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_42.QueryAllowancesByGranterRequest>): _42.QueryAllowancesByGranterRequest;
                fromAmino(object: _42.QueryAllowancesByGranterRequestAmino): _42.QueryAllowancesByGranterRequest;
                toAmino(message: _42.QueryAllowancesByGranterRequest): _42.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _42.QueryAllowancesByGranterRequestAminoMsg): _42.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _42.QueryAllowancesByGranterRequest): _42.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _42.QueryAllowancesByGranterRequestProtoMsg): _42.QueryAllowancesByGranterRequest;
                toProto(message: _42.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _42.QueryAllowancesByGranterRequest): _42.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _42.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_42.QueryAllowancesByGranterResponse>): _42.QueryAllowancesByGranterResponse;
                fromAmino(object: _42.QueryAllowancesByGranterResponseAmino): _42.QueryAllowancesByGranterResponse;
                toAmino(message: _42.QueryAllowancesByGranterResponse): _42.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _42.QueryAllowancesByGranterResponseAminoMsg): _42.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _42.QueryAllowancesByGranterResponse): _42.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _42.QueryAllowancesByGranterResponseProtoMsg): _42.QueryAllowancesByGranterResponse;
                toProto(message: _42.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _42.QueryAllowancesByGranterResponse): _42.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _40.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.BasicAllowance;
                fromPartial(object: Partial<_40.BasicAllowance>): _40.BasicAllowance;
                fromAmino(object: _40.BasicAllowanceAmino): _40.BasicAllowance;
                toAmino(message: _40.BasicAllowance): _40.BasicAllowanceAmino;
                fromAminoMsg(object: _40.BasicAllowanceAminoMsg): _40.BasicAllowance;
                toAminoMsg(message: _40.BasicAllowance): _40.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _40.BasicAllowanceProtoMsg): _40.BasicAllowance;
                toProto(message: _40.BasicAllowance): Uint8Array;
                toProtoMsg(message: _40.BasicAllowance): _40.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _40.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.PeriodicAllowance;
                fromPartial(object: Partial<_40.PeriodicAllowance>): _40.PeriodicAllowance;
                fromAmino(object: _40.PeriodicAllowanceAmino): _40.PeriodicAllowance;
                toAmino(message: _40.PeriodicAllowance): _40.PeriodicAllowanceAmino;
                fromAminoMsg(object: _40.PeriodicAllowanceAminoMsg): _40.PeriodicAllowance;
                toAminoMsg(message: _40.PeriodicAllowance): _40.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _40.PeriodicAllowanceProtoMsg): _40.PeriodicAllowance;
                toProto(message: _40.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _40.PeriodicAllowance): _40.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _40.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.AllowedMsgAllowance;
                fromPartial(object: Partial<_40.AllowedMsgAllowance>): _40.AllowedMsgAllowance;
                fromAmino(object: _40.AllowedMsgAllowanceAmino): _40.AllowedMsgAllowance;
                toAmino(message: _40.AllowedMsgAllowance): _40.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _40.AllowedMsgAllowanceAminoMsg): _40.AllowedMsgAllowance;
                toAminoMsg(message: _40.AllowedMsgAllowance): _40.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _40.AllowedMsgAllowanceProtoMsg): _40.AllowedMsgAllowance;
                toProto(message: _40.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _40.AllowedMsgAllowance): _40.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _40.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.Grant;
                fromPartial(object: Partial<_40.Grant>): _40.Grant;
                fromAmino(object: _40.GrantAmino): _40.Grant;
                toAmino(message: _40.Grant): _40.GrantAmino;
                fromAminoMsg(object: _40.GrantAminoMsg): _40.Grant;
                toAminoMsg(message: _40.Grant): _40.GrantAminoMsg;
                fromProtoMsg(message: _40.GrantProtoMsg): _40.Grant;
                toProto(message: _40.Grant): Uint8Array;
                toProtoMsg(message: _40.Grant): _40.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _158.MsgClientImpl;
            QueryClientImpl: typeof _145.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _47.QueryProposalRequest): Promise<_47.QueryProposalResponse>;
                proposals(request: _47.QueryProposalsRequest): Promise<_47.QueryProposalsResponse>;
                vote(request: _47.QueryVoteRequest): Promise<_47.QueryVoteResponse>;
                votes(request: _47.QueryVotesRequest): Promise<_47.QueryVotesResponse>;
                params(request: _47.QueryParamsRequest): Promise<_47.QueryParamsResponse>;
                deposit(request: _47.QueryDepositRequest): Promise<_47.QueryDepositResponse>;
                deposits(request: _47.QueryDepositsRequest): Promise<_47.QueryDepositsResponse>;
                tallyResult(request: _47.QueryTallyResultRequest): Promise<_47.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _130.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _48.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _48.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _48.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _48.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _48.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _48.MsgSubmitProposal;
                    };
                    vote(value: _48.MsgVote): {
                        typeUrl: string;
                        value: _48.MsgVote;
                    };
                    voteWeighted(value: _48.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _48.MsgVoteWeighted;
                    };
                    deposit(value: _48.MsgDeposit): {
                        typeUrl: string;
                        value: _48.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _48.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _48.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _48.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _48.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _48.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _48.MsgSubmitProposal;
                    };
                    vote(value: _48.MsgVote): {
                        typeUrl: string;
                        value: _48.MsgVote;
                    };
                    voteWeighted(value: _48.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _48.MsgVoteWeighted;
                    };
                    deposit(value: _48.MsgDeposit): {
                        typeUrl: string;
                        value: _48.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _48.MsgSubmitProposal) => _48.MsgSubmitProposalAmino;
                    fromAmino: (object: _48.MsgSubmitProposalAmino) => _48.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _48.MsgVote) => _48.MsgVoteAmino;
                    fromAmino: (object: _48.MsgVoteAmino) => _48.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _48.MsgVoteWeighted) => _48.MsgVoteWeightedAmino;
                    fromAmino: (object: _48.MsgVoteWeightedAmino) => _48.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _48.MsgDeposit) => _48.MsgDepositAmino;
                    fromAmino: (object: _48.MsgDepositAmino) => _48.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _48.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.MsgSubmitProposal;
                fromPartial(object: Partial<_48.MsgSubmitProposal>): _48.MsgSubmitProposal;
                fromAmino(object: _48.MsgSubmitProposalAmino): _48.MsgSubmitProposal;
                toAmino(message: _48.MsgSubmitProposal): _48.MsgSubmitProposalAmino;
                fromAminoMsg(object: _48.MsgSubmitProposalAminoMsg): _48.MsgSubmitProposal;
                toAminoMsg(message: _48.MsgSubmitProposal): _48.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _48.MsgSubmitProposalProtoMsg): _48.MsgSubmitProposal;
                toProto(message: _48.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _48.MsgSubmitProposal): _48.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _48.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_48.MsgSubmitProposalResponse>): _48.MsgSubmitProposalResponse;
                fromAmino(object: _48.MsgSubmitProposalResponseAmino): _48.MsgSubmitProposalResponse;
                toAmino(message: _48.MsgSubmitProposalResponse): _48.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _48.MsgSubmitProposalResponseAminoMsg): _48.MsgSubmitProposalResponse;
                toAminoMsg(message: _48.MsgSubmitProposalResponse): _48.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _48.MsgSubmitProposalResponseProtoMsg): _48.MsgSubmitProposalResponse;
                toProto(message: _48.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _48.MsgSubmitProposalResponse): _48.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _48.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.MsgVote;
                fromPartial(object: Partial<_48.MsgVote>): _48.MsgVote;
                fromAmino(object: _48.MsgVoteAmino): _48.MsgVote;
                toAmino(message: _48.MsgVote): _48.MsgVoteAmino;
                fromAminoMsg(object: _48.MsgVoteAminoMsg): _48.MsgVote;
                toAminoMsg(message: _48.MsgVote): _48.MsgVoteAminoMsg;
                fromProtoMsg(message: _48.MsgVoteProtoMsg): _48.MsgVote;
                toProto(message: _48.MsgVote): Uint8Array;
                toProtoMsg(message: _48.MsgVote): _48.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _48.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.MsgVoteResponse;
                fromPartial(_: Partial<_48.MsgVoteResponse>): _48.MsgVoteResponse;
                fromAmino(_: _48.MsgVoteResponseAmino): _48.MsgVoteResponse;
                toAmino(_: _48.MsgVoteResponse): _48.MsgVoteResponseAmino;
                fromAminoMsg(object: _48.MsgVoteResponseAminoMsg): _48.MsgVoteResponse;
                toAminoMsg(message: _48.MsgVoteResponse): _48.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _48.MsgVoteResponseProtoMsg): _48.MsgVoteResponse;
                toProto(message: _48.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _48.MsgVoteResponse): _48.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _48.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.MsgVoteWeighted;
                fromPartial(object: Partial<_48.MsgVoteWeighted>): _48.MsgVoteWeighted;
                fromAmino(object: _48.MsgVoteWeightedAmino): _48.MsgVoteWeighted;
                toAmino(message: _48.MsgVoteWeighted): _48.MsgVoteWeightedAmino;
                fromAminoMsg(object: _48.MsgVoteWeightedAminoMsg): _48.MsgVoteWeighted;
                toAminoMsg(message: _48.MsgVoteWeighted): _48.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _48.MsgVoteWeightedProtoMsg): _48.MsgVoteWeighted;
                toProto(message: _48.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _48.MsgVoteWeighted): _48.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _48.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_48.MsgVoteWeightedResponse>): _48.MsgVoteWeightedResponse;
                fromAmino(_: _48.MsgVoteWeightedResponseAmino): _48.MsgVoteWeightedResponse;
                toAmino(_: _48.MsgVoteWeightedResponse): _48.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _48.MsgVoteWeightedResponseAminoMsg): _48.MsgVoteWeightedResponse;
                toAminoMsg(message: _48.MsgVoteWeightedResponse): _48.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _48.MsgVoteWeightedResponseProtoMsg): _48.MsgVoteWeightedResponse;
                toProto(message: _48.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _48.MsgVoteWeightedResponse): _48.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _48.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.MsgDeposit;
                fromPartial(object: Partial<_48.MsgDeposit>): _48.MsgDeposit;
                fromAmino(object: _48.MsgDepositAmino): _48.MsgDeposit;
                toAmino(message: _48.MsgDeposit): _48.MsgDepositAmino;
                fromAminoMsg(object: _48.MsgDepositAminoMsg): _48.MsgDeposit;
                toAminoMsg(message: _48.MsgDeposit): _48.MsgDepositAminoMsg;
                fromProtoMsg(message: _48.MsgDepositProtoMsg): _48.MsgDeposit;
                toProto(message: _48.MsgDeposit): Uint8Array;
                toProtoMsg(message: _48.MsgDeposit): _48.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _48.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.MsgDepositResponse;
                fromPartial(_: Partial<_48.MsgDepositResponse>): _48.MsgDepositResponse;
                fromAmino(_: _48.MsgDepositResponseAmino): _48.MsgDepositResponse;
                toAmino(_: _48.MsgDepositResponse): _48.MsgDepositResponseAmino;
                fromAminoMsg(object: _48.MsgDepositResponseAminoMsg): _48.MsgDepositResponse;
                toAminoMsg(message: _48.MsgDepositResponse): _48.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _48.MsgDepositResponseProtoMsg): _48.MsgDepositResponse;
                toProto(message: _48.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _48.MsgDepositResponse): _48.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _46.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _47.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryProposalRequest;
                fromPartial(object: Partial<_47.QueryProposalRequest>): _47.QueryProposalRequest;
                fromAmino(object: _47.QueryProposalRequestAmino): _47.QueryProposalRequest;
                toAmino(message: _47.QueryProposalRequest): _47.QueryProposalRequestAmino;
                fromAminoMsg(object: _47.QueryProposalRequestAminoMsg): _47.QueryProposalRequest;
                toAminoMsg(message: _47.QueryProposalRequest): _47.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _47.QueryProposalRequestProtoMsg): _47.QueryProposalRequest;
                toProto(message: _47.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _47.QueryProposalRequest): _47.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _47.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryProposalResponse;
                fromPartial(object: Partial<_47.QueryProposalResponse>): _47.QueryProposalResponse;
                fromAmino(object: _47.QueryProposalResponseAmino): _47.QueryProposalResponse;
                toAmino(message: _47.QueryProposalResponse): _47.QueryProposalResponseAmino;
                fromAminoMsg(object: _47.QueryProposalResponseAminoMsg): _47.QueryProposalResponse;
                toAminoMsg(message: _47.QueryProposalResponse): _47.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _47.QueryProposalResponseProtoMsg): _47.QueryProposalResponse;
                toProto(message: _47.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _47.QueryProposalResponse): _47.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _47.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryProposalsRequest;
                fromPartial(object: Partial<_47.QueryProposalsRequest>): _47.QueryProposalsRequest;
                fromAmino(object: _47.QueryProposalsRequestAmino): _47.QueryProposalsRequest;
                toAmino(message: _47.QueryProposalsRequest): _47.QueryProposalsRequestAmino;
                fromAminoMsg(object: _47.QueryProposalsRequestAminoMsg): _47.QueryProposalsRequest;
                toAminoMsg(message: _47.QueryProposalsRequest): _47.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _47.QueryProposalsRequestProtoMsg): _47.QueryProposalsRequest;
                toProto(message: _47.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _47.QueryProposalsRequest): _47.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _47.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryProposalsResponse;
                fromPartial(object: Partial<_47.QueryProposalsResponse>): _47.QueryProposalsResponse;
                fromAmino(object: _47.QueryProposalsResponseAmino): _47.QueryProposalsResponse;
                toAmino(message: _47.QueryProposalsResponse): _47.QueryProposalsResponseAmino;
                fromAminoMsg(object: _47.QueryProposalsResponseAminoMsg): _47.QueryProposalsResponse;
                toAminoMsg(message: _47.QueryProposalsResponse): _47.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _47.QueryProposalsResponseProtoMsg): _47.QueryProposalsResponse;
                toProto(message: _47.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _47.QueryProposalsResponse): _47.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _47.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryVoteRequest;
                fromPartial(object: Partial<_47.QueryVoteRequest>): _47.QueryVoteRequest;
                fromAmino(object: _47.QueryVoteRequestAmino): _47.QueryVoteRequest;
                toAmino(message: _47.QueryVoteRequest): _47.QueryVoteRequestAmino;
                fromAminoMsg(object: _47.QueryVoteRequestAminoMsg): _47.QueryVoteRequest;
                toAminoMsg(message: _47.QueryVoteRequest): _47.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _47.QueryVoteRequestProtoMsg): _47.QueryVoteRequest;
                toProto(message: _47.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _47.QueryVoteRequest): _47.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _47.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryVoteResponse;
                fromPartial(object: Partial<_47.QueryVoteResponse>): _47.QueryVoteResponse;
                fromAmino(object: _47.QueryVoteResponseAmino): _47.QueryVoteResponse;
                toAmino(message: _47.QueryVoteResponse): _47.QueryVoteResponseAmino;
                fromAminoMsg(object: _47.QueryVoteResponseAminoMsg): _47.QueryVoteResponse;
                toAminoMsg(message: _47.QueryVoteResponse): _47.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _47.QueryVoteResponseProtoMsg): _47.QueryVoteResponse;
                toProto(message: _47.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _47.QueryVoteResponse): _47.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _47.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryVotesRequest;
                fromPartial(object: Partial<_47.QueryVotesRequest>): _47.QueryVotesRequest;
                fromAmino(object: _47.QueryVotesRequestAmino): _47.QueryVotesRequest;
                toAmino(message: _47.QueryVotesRequest): _47.QueryVotesRequestAmino;
                fromAminoMsg(object: _47.QueryVotesRequestAminoMsg): _47.QueryVotesRequest;
                toAminoMsg(message: _47.QueryVotesRequest): _47.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _47.QueryVotesRequestProtoMsg): _47.QueryVotesRequest;
                toProto(message: _47.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _47.QueryVotesRequest): _47.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _47.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryVotesResponse;
                fromPartial(object: Partial<_47.QueryVotesResponse>): _47.QueryVotesResponse;
                fromAmino(object: _47.QueryVotesResponseAmino): _47.QueryVotesResponse;
                toAmino(message: _47.QueryVotesResponse): _47.QueryVotesResponseAmino;
                fromAminoMsg(object: _47.QueryVotesResponseAminoMsg): _47.QueryVotesResponse;
                toAminoMsg(message: _47.QueryVotesResponse): _47.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _47.QueryVotesResponseProtoMsg): _47.QueryVotesResponse;
                toProto(message: _47.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _47.QueryVotesResponse): _47.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _47.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryParamsRequest;
                fromPartial(object: Partial<_47.QueryParamsRequest>): _47.QueryParamsRequest;
                fromAmino(object: _47.QueryParamsRequestAmino): _47.QueryParamsRequest;
                toAmino(message: _47.QueryParamsRequest): _47.QueryParamsRequestAmino;
                fromAminoMsg(object: _47.QueryParamsRequestAminoMsg): _47.QueryParamsRequest;
                toAminoMsg(message: _47.QueryParamsRequest): _47.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _47.QueryParamsRequestProtoMsg): _47.QueryParamsRequest;
                toProto(message: _47.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _47.QueryParamsRequest): _47.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _47.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryParamsResponse;
                fromPartial(object: Partial<_47.QueryParamsResponse>): _47.QueryParamsResponse;
                fromAmino(object: _47.QueryParamsResponseAmino): _47.QueryParamsResponse;
                toAmino(message: _47.QueryParamsResponse): _47.QueryParamsResponseAmino;
                fromAminoMsg(object: _47.QueryParamsResponseAminoMsg): _47.QueryParamsResponse;
                toAminoMsg(message: _47.QueryParamsResponse): _47.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _47.QueryParamsResponseProtoMsg): _47.QueryParamsResponse;
                toProto(message: _47.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _47.QueryParamsResponse): _47.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _47.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryDepositRequest;
                fromPartial(object: Partial<_47.QueryDepositRequest>): _47.QueryDepositRequest;
                fromAmino(object: _47.QueryDepositRequestAmino): _47.QueryDepositRequest;
                toAmino(message: _47.QueryDepositRequest): _47.QueryDepositRequestAmino;
                fromAminoMsg(object: _47.QueryDepositRequestAminoMsg): _47.QueryDepositRequest;
                toAminoMsg(message: _47.QueryDepositRequest): _47.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _47.QueryDepositRequestProtoMsg): _47.QueryDepositRequest;
                toProto(message: _47.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _47.QueryDepositRequest): _47.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _47.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryDepositResponse;
                fromPartial(object: Partial<_47.QueryDepositResponse>): _47.QueryDepositResponse;
                fromAmino(object: _47.QueryDepositResponseAmino): _47.QueryDepositResponse;
                toAmino(message: _47.QueryDepositResponse): _47.QueryDepositResponseAmino;
                fromAminoMsg(object: _47.QueryDepositResponseAminoMsg): _47.QueryDepositResponse;
                toAminoMsg(message: _47.QueryDepositResponse): _47.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _47.QueryDepositResponseProtoMsg): _47.QueryDepositResponse;
                toProto(message: _47.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _47.QueryDepositResponse): _47.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _47.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryDepositsRequest;
                fromPartial(object: Partial<_47.QueryDepositsRequest>): _47.QueryDepositsRequest;
                fromAmino(object: _47.QueryDepositsRequestAmino): _47.QueryDepositsRequest;
                toAmino(message: _47.QueryDepositsRequest): _47.QueryDepositsRequestAmino;
                fromAminoMsg(object: _47.QueryDepositsRequestAminoMsg): _47.QueryDepositsRequest;
                toAminoMsg(message: _47.QueryDepositsRequest): _47.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _47.QueryDepositsRequestProtoMsg): _47.QueryDepositsRequest;
                toProto(message: _47.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _47.QueryDepositsRequest): _47.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _47.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryDepositsResponse;
                fromPartial(object: Partial<_47.QueryDepositsResponse>): _47.QueryDepositsResponse;
                fromAmino(object: _47.QueryDepositsResponseAmino): _47.QueryDepositsResponse;
                toAmino(message: _47.QueryDepositsResponse): _47.QueryDepositsResponseAmino;
                fromAminoMsg(object: _47.QueryDepositsResponseAminoMsg): _47.QueryDepositsResponse;
                toAminoMsg(message: _47.QueryDepositsResponse): _47.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _47.QueryDepositsResponseProtoMsg): _47.QueryDepositsResponse;
                toProto(message: _47.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _47.QueryDepositsResponse): _47.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _47.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryTallyResultRequest;
                fromPartial(object: Partial<_47.QueryTallyResultRequest>): _47.QueryTallyResultRequest;
                fromAmino(object: _47.QueryTallyResultRequestAmino): _47.QueryTallyResultRequest;
                toAmino(message: _47.QueryTallyResultRequest): _47.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _47.QueryTallyResultRequestAminoMsg): _47.QueryTallyResultRequest;
                toAminoMsg(message: _47.QueryTallyResultRequest): _47.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _47.QueryTallyResultRequestProtoMsg): _47.QueryTallyResultRequest;
                toProto(message: _47.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _47.QueryTallyResultRequest): _47.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _47.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryTallyResultResponse;
                fromPartial(object: Partial<_47.QueryTallyResultResponse>): _47.QueryTallyResultResponse;
                fromAmino(object: _47.QueryTallyResultResponseAmino): _47.QueryTallyResultResponse;
                toAmino(message: _47.QueryTallyResultResponse): _47.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _47.QueryTallyResultResponseAminoMsg): _47.QueryTallyResultResponse;
                toAminoMsg(message: _47.QueryTallyResultResponse): _47.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _47.QueryTallyResultResponseProtoMsg): _47.QueryTallyResultResponse;
                toProto(message: _47.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _47.QueryTallyResultResponse): _47.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _46.VoteOption;
            voteOptionToJSON(object: _46.VoteOption): string;
            proposalStatusFromJSON(object: any): _46.ProposalStatus;
            proposalStatusToJSON(object: _46.ProposalStatus): string;
            VoteOption: typeof _46.VoteOption;
            VoteOptionSDKType: typeof _46.VoteOption;
            VoteOptionAmino: typeof _46.VoteOption;
            ProposalStatus: typeof _46.ProposalStatus;
            ProposalStatusSDKType: typeof _46.ProposalStatus;
            ProposalStatusAmino: typeof _46.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _46.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.WeightedVoteOption;
                fromPartial(object: Partial<_46.WeightedVoteOption>): _46.WeightedVoteOption;
                fromAmino(object: _46.WeightedVoteOptionAmino): _46.WeightedVoteOption;
                toAmino(message: _46.WeightedVoteOption): _46.WeightedVoteOptionAmino;
                fromAminoMsg(object: _46.WeightedVoteOptionAminoMsg): _46.WeightedVoteOption;
                toAminoMsg(message: _46.WeightedVoteOption): _46.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _46.WeightedVoteOptionProtoMsg): _46.WeightedVoteOption;
                toProto(message: _46.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _46.WeightedVoteOption): _46.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _46.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.TextProposal;
                fromPartial(object: Partial<_46.TextProposal>): _46.TextProposal;
                fromAmino(object: _46.TextProposalAmino): _46.TextProposal;
                toAmino(message: _46.TextProposal): _46.TextProposalAmino;
                fromAminoMsg(object: _46.TextProposalAminoMsg): _46.TextProposal;
                toAminoMsg(message: _46.TextProposal): _46.TextProposalAminoMsg;
                fromProtoMsg(message: _46.TextProposalProtoMsg): _46.TextProposal;
                toProto(message: _46.TextProposal): Uint8Array;
                toProtoMsg(message: _46.TextProposal): _46.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _46.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Deposit;
                fromPartial(object: Partial<_46.Deposit>): _46.Deposit;
                fromAmino(object: _46.DepositAmino): _46.Deposit;
                toAmino(message: _46.Deposit): _46.DepositAmino;
                fromAminoMsg(object: _46.DepositAminoMsg): _46.Deposit;
                toAminoMsg(message: _46.Deposit): _46.DepositAminoMsg;
                fromProtoMsg(message: _46.DepositProtoMsg): _46.Deposit;
                toProto(message: _46.Deposit): Uint8Array;
                toProtoMsg(message: _46.Deposit): _46.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _46.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Proposal;
                fromPartial(object: Partial<_46.Proposal>): _46.Proposal;
                fromAmino(object: _46.ProposalAmino): _46.Proposal;
                toAmino(message: _46.Proposal): _46.ProposalAmino;
                fromAminoMsg(object: _46.ProposalAminoMsg): _46.Proposal;
                toAminoMsg(message: _46.Proposal): _46.ProposalAminoMsg;
                fromProtoMsg(message: _46.ProposalProtoMsg): _46.Proposal;
                toProto(message: _46.Proposal): Uint8Array;
                toProtoMsg(message: _46.Proposal): _46.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _46.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.TallyResult;
                fromPartial(object: Partial<_46.TallyResult>): _46.TallyResult;
                fromAmino(object: _46.TallyResultAmino): _46.TallyResult;
                toAmino(message: _46.TallyResult): _46.TallyResultAmino;
                fromAminoMsg(object: _46.TallyResultAminoMsg): _46.TallyResult;
                toAminoMsg(message: _46.TallyResult): _46.TallyResultAminoMsg;
                fromProtoMsg(message: _46.TallyResultProtoMsg): _46.TallyResult;
                toProto(message: _46.TallyResult): Uint8Array;
                toProtoMsg(message: _46.TallyResult): _46.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _46.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Vote;
                fromPartial(object: Partial<_46.Vote>): _46.Vote;
                fromAmino(object: _46.VoteAmino): _46.Vote;
                toAmino(message: _46.Vote): _46.VoteAmino;
                fromAminoMsg(object: _46.VoteAminoMsg): _46.Vote;
                toAminoMsg(message: _46.Vote): _46.VoteAminoMsg;
                fromProtoMsg(message: _46.VoteProtoMsg): _46.Vote;
                toProto(message: _46.Vote): Uint8Array;
                toProtoMsg(message: _46.Vote): _46.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _46.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.DepositParams;
                fromPartial(object: Partial<_46.DepositParams>): _46.DepositParams;
                fromAmino(object: _46.DepositParamsAmino): _46.DepositParams;
                toAmino(message: _46.DepositParams): _46.DepositParamsAmino;
                fromAminoMsg(object: _46.DepositParamsAminoMsg): _46.DepositParams;
                toAminoMsg(message: _46.DepositParams): _46.DepositParamsAminoMsg;
                fromProtoMsg(message: _46.DepositParamsProtoMsg): _46.DepositParams;
                toProto(message: _46.DepositParams): Uint8Array;
                toProtoMsg(message: _46.DepositParams): _46.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _46.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.VotingParams;
                fromPartial(object: Partial<_46.VotingParams>): _46.VotingParams;
                fromAmino(object: _46.VotingParamsAmino): _46.VotingParams;
                toAmino(message: _46.VotingParams): _46.VotingParamsAmino;
                fromAminoMsg(object: _46.VotingParamsAminoMsg): _46.VotingParams;
                toAminoMsg(message: _46.VotingParams): _46.VotingParamsAminoMsg;
                fromProtoMsg(message: _46.VotingParamsProtoMsg): _46.VotingParams;
                toProto(message: _46.VotingParams): Uint8Array;
                toProtoMsg(message: _46.VotingParams): _46.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _46.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.TallyParams;
                fromPartial(object: Partial<_46.TallyParams>): _46.TallyParams;
                fromAmino(object: _46.TallyParamsAmino): _46.TallyParams;
                toAmino(message: _46.TallyParams): _46.TallyParamsAmino;
                fromAminoMsg(object: _46.TallyParamsAminoMsg): _46.TallyParams;
                toAminoMsg(message: _46.TallyParams): _46.TallyParamsAminoMsg;
                fromProtoMsg(message: _46.TallyParamsProtoMsg): _46.TallyParams;
                toProto(message: _46.TallyParams): Uint8Array;
                toProtoMsg(message: _46.TallyParams): _46.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _45.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.GenesisState;
                fromPartial(object: Partial<_45.GenesisState>): _45.GenesisState;
                fromAmino(object: _45.GenesisStateAmino): _45.GenesisState;
                toAmino(message: _45.GenesisState): _45.GenesisStateAmino;
                fromAminoMsg(object: _45.GenesisStateAminoMsg): _45.GenesisState;
                toAminoMsg(message: _45.GenesisState): _45.GenesisStateAminoMsg;
                fromProtoMsg(message: _45.GenesisStateProtoMsg): _45.GenesisState;
                toProto(message: _45.GenesisState): Uint8Array;
                toProtoMsg(message: _45.GenesisState): _45.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _146.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _51.QueryParamsRequest): Promise<_51.QueryParamsResponse>;
                inflation(request?: _51.QueryInflationRequest): Promise<_51.QueryInflationResponse>;
                annualProvisions(request?: _51.QueryAnnualProvisionsRequest): Promise<_51.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _131.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _51.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _51.QueryParamsRequest;
                fromPartial(_: Partial<_51.QueryParamsRequest>): _51.QueryParamsRequest;
                fromAmino(_: _51.QueryParamsRequestAmino): _51.QueryParamsRequest;
                toAmino(_: _51.QueryParamsRequest): _51.QueryParamsRequestAmino;
                fromAminoMsg(object: _51.QueryParamsRequestAminoMsg): _51.QueryParamsRequest;
                toAminoMsg(message: _51.QueryParamsRequest): _51.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _51.QueryParamsRequestProtoMsg): _51.QueryParamsRequest;
                toProto(message: _51.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _51.QueryParamsRequest): _51.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _51.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryParamsResponse;
                fromPartial(object: Partial<_51.QueryParamsResponse>): _51.QueryParamsResponse;
                fromAmino(object: _51.QueryParamsResponseAmino): _51.QueryParamsResponse;
                toAmino(message: _51.QueryParamsResponse): _51.QueryParamsResponseAmino;
                fromAminoMsg(object: _51.QueryParamsResponseAminoMsg): _51.QueryParamsResponse;
                toAminoMsg(message: _51.QueryParamsResponse): _51.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _51.QueryParamsResponseProtoMsg): _51.QueryParamsResponse;
                toProto(message: _51.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _51.QueryParamsResponse): _51.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _51.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _51.QueryInflationRequest;
                fromPartial(_: Partial<_51.QueryInflationRequest>): _51.QueryInflationRequest;
                fromAmino(_: _51.QueryInflationRequestAmino): _51.QueryInflationRequest;
                toAmino(_: _51.QueryInflationRequest): _51.QueryInflationRequestAmino;
                fromAminoMsg(object: _51.QueryInflationRequestAminoMsg): _51.QueryInflationRequest;
                toAminoMsg(message: _51.QueryInflationRequest): _51.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _51.QueryInflationRequestProtoMsg): _51.QueryInflationRequest;
                toProto(message: _51.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _51.QueryInflationRequest): _51.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _51.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryInflationResponse;
                fromPartial(object: Partial<_51.QueryInflationResponse>): _51.QueryInflationResponse;
                fromAmino(object: _51.QueryInflationResponseAmino): _51.QueryInflationResponse;
                toAmino(message: _51.QueryInflationResponse): _51.QueryInflationResponseAmino;
                fromAminoMsg(object: _51.QueryInflationResponseAminoMsg): _51.QueryInflationResponse;
                toAminoMsg(message: _51.QueryInflationResponse): _51.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _51.QueryInflationResponseProtoMsg): _51.QueryInflationResponse;
                toProto(message: _51.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _51.QueryInflationResponse): _51.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _51.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _51.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_51.QueryAnnualProvisionsRequest>): _51.QueryAnnualProvisionsRequest;
                fromAmino(_: _51.QueryAnnualProvisionsRequestAmino): _51.QueryAnnualProvisionsRequest;
                toAmino(_: _51.QueryAnnualProvisionsRequest): _51.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _51.QueryAnnualProvisionsRequestAminoMsg): _51.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _51.QueryAnnualProvisionsRequest): _51.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _51.QueryAnnualProvisionsRequestProtoMsg): _51.QueryAnnualProvisionsRequest;
                toProto(message: _51.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _51.QueryAnnualProvisionsRequest): _51.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _51.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_51.QueryAnnualProvisionsResponse>): _51.QueryAnnualProvisionsResponse;
                fromAmino(object: _51.QueryAnnualProvisionsResponseAmino): _51.QueryAnnualProvisionsResponse;
                toAmino(message: _51.QueryAnnualProvisionsResponse): _51.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _51.QueryAnnualProvisionsResponseAminoMsg): _51.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _51.QueryAnnualProvisionsResponse): _51.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _51.QueryAnnualProvisionsResponseProtoMsg): _51.QueryAnnualProvisionsResponse;
                toProto(message: _51.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _51.QueryAnnualProvisionsResponse): _51.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _50.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.Minter;
                fromPartial(object: Partial<_50.Minter>): _50.Minter;
                fromAmino(object: _50.MinterAmino): _50.Minter;
                toAmino(message: _50.Minter): _50.MinterAmino;
                fromAminoMsg(object: _50.MinterAminoMsg): _50.Minter;
                toAminoMsg(message: _50.Minter): _50.MinterAminoMsg;
                fromProtoMsg(message: _50.MinterProtoMsg): _50.Minter;
                toProto(message: _50.Minter): Uint8Array;
                toProtoMsg(message: _50.Minter): _50.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _50.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.Params;
                fromPartial(object: Partial<_50.Params>): _50.Params;
                fromAmino(object: _50.ParamsAmino): _50.Params;
                toAmino(message: _50.Params): _50.ParamsAmino;
                fromAminoMsg(object: _50.ParamsAminoMsg): _50.Params;
                toAminoMsg(message: _50.Params): _50.ParamsAminoMsg;
                fromProtoMsg(message: _50.ParamsProtoMsg): _50.Params;
                toProto(message: _50.Params): Uint8Array;
                toProtoMsg(message: _50.Params): _50.ParamsProtoMsg;
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
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _147.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _132.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _53.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryParamsRequest;
                fromPartial(object: Partial<_53.QueryParamsRequest>): _53.QueryParamsRequest;
                fromAmino(object: _53.QueryParamsRequestAmino): _53.QueryParamsRequest;
                toAmino(message: _53.QueryParamsRequest): _53.QueryParamsRequestAmino;
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
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _52.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.ParameterChangeProposal;
                fromPartial(object: Partial<_52.ParameterChangeProposal>): _52.ParameterChangeProposal;
                fromAmino(object: _52.ParameterChangeProposalAmino): _52.ParameterChangeProposal;
                toAmino(message: _52.ParameterChangeProposal): _52.ParameterChangeProposalAmino;
                fromAminoMsg(object: _52.ParameterChangeProposalAminoMsg): _52.ParameterChangeProposal;
                toAminoMsg(message: _52.ParameterChangeProposal): _52.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _52.ParameterChangeProposalProtoMsg): _52.ParameterChangeProposal;
                toProto(message: _52.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _52.ParameterChangeProposal): _52.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _52.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.ParamChange;
                fromPartial(object: Partial<_52.ParamChange>): _52.ParamChange;
                fromAmino(object: _52.ParamChangeAmino): _52.ParamChange;
                toAmino(message: _52.ParamChange): _52.ParamChangeAmino;
                fromAminoMsg(object: _52.ParamChangeAminoMsg): _52.ParamChange;
                toAminoMsg(message: _52.ParamChange): _52.ParamChangeAminoMsg;
                fromProtoMsg(message: _52.ParamChangeProtoMsg): _52.ParamChange;
                toProto(message: _52.ParamChange): Uint8Array;
                toProtoMsg(message: _52.ParamChange): _52.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _159.MsgClientImpl;
            QueryClientImpl: typeof _148.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                signingInfo(request: _55.QuerySigningInfoRequest): Promise<_55.QuerySigningInfoResponse>;
                signingInfos(request?: _55.QuerySigningInfosRequest): Promise<_55.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _133.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _57.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _57.MsgUnjail): {
                        typeUrl: string;
                        value: _57.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _57.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _57.MsgUnjail): {
                        typeUrl: string;
                        value: _57.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _57.MsgUnjail) => _57.MsgUnjailAmino;
                    fromAmino: (object: _57.MsgUnjailAmino) => _57.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _57.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgUnjail;
                fromPartial(object: Partial<_57.MsgUnjail>): _57.MsgUnjail;
                fromAmino(object: _57.MsgUnjailAmino): _57.MsgUnjail;
                toAmino(message: _57.MsgUnjail): _57.MsgUnjailAmino;
                fromAminoMsg(object: _57.MsgUnjailAminoMsg): _57.MsgUnjail;
                toAminoMsg(message: _57.MsgUnjail): _57.MsgUnjailAminoMsg;
                fromProtoMsg(message: _57.MsgUnjailProtoMsg): _57.MsgUnjail;
                toProto(message: _57.MsgUnjail): Uint8Array;
                toProtoMsg(message: _57.MsgUnjail): _57.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _57.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.MsgUnjailResponse;
                fromPartial(_: Partial<_57.MsgUnjailResponse>): _57.MsgUnjailResponse;
                fromAmino(_: _57.MsgUnjailResponseAmino): _57.MsgUnjailResponse;
                toAmino(_: _57.MsgUnjailResponse): _57.MsgUnjailResponseAmino;
                fromAminoMsg(object: _57.MsgUnjailResponseAminoMsg): _57.MsgUnjailResponse;
                toAminoMsg(message: _57.MsgUnjailResponse): _57.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _57.MsgUnjailResponseProtoMsg): _57.MsgUnjailResponse;
                toProto(message: _57.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _57.MsgUnjailResponse): _57.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _56.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.ValidatorSigningInfo;
                fromPartial(object: Partial<_56.ValidatorSigningInfo>): _56.ValidatorSigningInfo;
                fromAmino(object: _56.ValidatorSigningInfoAmino): _56.ValidatorSigningInfo;
                toAmino(message: _56.ValidatorSigningInfo): _56.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _56.ValidatorSigningInfoAminoMsg): _56.ValidatorSigningInfo;
                toAminoMsg(message: _56.ValidatorSigningInfo): _56.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _56.ValidatorSigningInfoProtoMsg): _56.ValidatorSigningInfo;
                toProto(message: _56.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _56.ValidatorSigningInfo): _56.ValidatorSigningInfoProtoMsg;
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
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _55.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QuerySigningInfoRequest;
                fromPartial(object: Partial<_55.QuerySigningInfoRequest>): _55.QuerySigningInfoRequest;
                fromAmino(object: _55.QuerySigningInfoRequestAmino): _55.QuerySigningInfoRequest;
                toAmino(message: _55.QuerySigningInfoRequest): _55.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _55.QuerySigningInfoRequestAminoMsg): _55.QuerySigningInfoRequest;
                toAminoMsg(message: _55.QuerySigningInfoRequest): _55.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _55.QuerySigningInfoRequestProtoMsg): _55.QuerySigningInfoRequest;
                toProto(message: _55.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _55.QuerySigningInfoRequest): _55.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _55.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QuerySigningInfoResponse;
                fromPartial(object: Partial<_55.QuerySigningInfoResponse>): _55.QuerySigningInfoResponse;
                fromAmino(object: _55.QuerySigningInfoResponseAmino): _55.QuerySigningInfoResponse;
                toAmino(message: _55.QuerySigningInfoResponse): _55.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _55.QuerySigningInfoResponseAminoMsg): _55.QuerySigningInfoResponse;
                toAminoMsg(message: _55.QuerySigningInfoResponse): _55.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _55.QuerySigningInfoResponseProtoMsg): _55.QuerySigningInfoResponse;
                toProto(message: _55.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _55.QuerySigningInfoResponse): _55.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _55.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QuerySigningInfosRequest;
                fromPartial(object: Partial<_55.QuerySigningInfosRequest>): _55.QuerySigningInfosRequest;
                fromAmino(object: _55.QuerySigningInfosRequestAmino): _55.QuerySigningInfosRequest;
                toAmino(message: _55.QuerySigningInfosRequest): _55.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _55.QuerySigningInfosRequestAminoMsg): _55.QuerySigningInfosRequest;
                toAminoMsg(message: _55.QuerySigningInfosRequest): _55.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _55.QuerySigningInfosRequestProtoMsg): _55.QuerySigningInfosRequest;
                toProto(message: _55.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _55.QuerySigningInfosRequest): _55.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _55.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QuerySigningInfosResponse;
                fromPartial(object: Partial<_55.QuerySigningInfosResponse>): _55.QuerySigningInfosResponse;
                fromAmino(object: _55.QuerySigningInfosResponseAmino): _55.QuerySigningInfosResponse;
                toAmino(message: _55.QuerySigningInfosResponse): _55.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _55.QuerySigningInfosResponseAminoMsg): _55.QuerySigningInfosResponse;
                toAminoMsg(message: _55.QuerySigningInfosResponse): _55.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _55.QuerySigningInfosResponseProtoMsg): _55.QuerySigningInfosResponse;
                toProto(message: _55.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _55.QuerySigningInfosResponse): _55.QuerySigningInfosResponseProtoMsg;
            };
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _54.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.SigningInfo;
                fromPartial(object: Partial<_54.SigningInfo>): _54.SigningInfo;
                fromAmino(object: _54.SigningInfoAmino): _54.SigningInfo;
                toAmino(message: _54.SigningInfo): _54.SigningInfoAmino;
                fromAminoMsg(object: _54.SigningInfoAminoMsg): _54.SigningInfo;
                toAminoMsg(message: _54.SigningInfo): _54.SigningInfoAminoMsg;
                fromProtoMsg(message: _54.SigningInfoProtoMsg): _54.SigningInfo;
                toProto(message: _54.SigningInfo): Uint8Array;
                toProtoMsg(message: _54.SigningInfo): _54.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _54.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.ValidatorMissedBlocks;
                fromPartial(object: Partial<_54.ValidatorMissedBlocks>): _54.ValidatorMissedBlocks;
                fromAmino(object: _54.ValidatorMissedBlocksAmino): _54.ValidatorMissedBlocks;
                toAmino(message: _54.ValidatorMissedBlocks): _54.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _54.ValidatorMissedBlocksAminoMsg): _54.ValidatorMissedBlocks;
                toAminoMsg(message: _54.ValidatorMissedBlocks): _54.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _54.ValidatorMissedBlocksProtoMsg): _54.ValidatorMissedBlocks;
                toProto(message: _54.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _54.ValidatorMissedBlocks): _54.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _54.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.MissedBlock;
                fromPartial(object: Partial<_54.MissedBlock>): _54.MissedBlock;
                fromAmino(object: _54.MissedBlockAmino): _54.MissedBlock;
                toAmino(message: _54.MissedBlock): _54.MissedBlockAmino;
                fromAminoMsg(object: _54.MissedBlockAminoMsg): _54.MissedBlock;
                toAminoMsg(message: _54.MissedBlock): _54.MissedBlockAminoMsg;
                fromProtoMsg(message: _54.MissedBlockProtoMsg): _54.MissedBlock;
                toProto(message: _54.MissedBlock): Uint8Array;
                toProtoMsg(message: _54.MissedBlock): _54.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _160.MsgClientImpl;
            QueryClientImpl: typeof _149.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _60.QueryValidatorsRequest): Promise<_60.QueryValidatorsResponse>;
                validator(request: _60.QueryValidatorRequest): Promise<_60.QueryValidatorResponse>;
                validatorDelegations(request: _60.QueryValidatorDelegationsRequest): Promise<_60.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _60.QueryValidatorUnbondingDelegationsRequest): Promise<_60.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _60.QueryDelegationRequest): Promise<_60.QueryDelegationResponse>;
                unbondingDelegation(request: _60.QueryUnbondingDelegationRequest): Promise<_60.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _60.QueryDelegatorDelegationsRequest): Promise<_60.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _60.QueryDelegatorUnbondingDelegationsRequest): Promise<_60.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _60.QueryRedelegationsRequest): Promise<_60.QueryRedelegationsResponse>;
                delegatorValidators(request: _60.QueryDelegatorValidatorsRequest): Promise<_60.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _60.QueryDelegatorValidatorRequest): Promise<_60.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _60.QueryHistoricalInfoRequest): Promise<_60.QueryHistoricalInfoResponse>;
                pool(request?: _60.QueryPoolRequest): Promise<_60.QueryPoolResponse>;
                params(request?: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _134.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _62.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _62.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _62.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _62.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _62.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _62.MsgCreateValidator): {
                        typeUrl: string;
                        value: _62.MsgCreateValidator;
                    };
                    editValidator(value: _62.MsgEditValidator): {
                        typeUrl: string;
                        value: _62.MsgEditValidator;
                    };
                    delegate(value: _62.MsgDelegate): {
                        typeUrl: string;
                        value: _62.MsgDelegate;
                    };
                    beginRedelegate(value: _62.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _62.MsgBeginRedelegate;
                    };
                    undelegate(value: _62.MsgUndelegate): {
                        typeUrl: string;
                        value: _62.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _62.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _62.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _62.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _62.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _62.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _62.MsgCreateValidator): {
                        typeUrl: string;
                        value: _62.MsgCreateValidator;
                    };
                    editValidator(value: _62.MsgEditValidator): {
                        typeUrl: string;
                        value: _62.MsgEditValidator;
                    };
                    delegate(value: _62.MsgDelegate): {
                        typeUrl: string;
                        value: _62.MsgDelegate;
                    };
                    beginRedelegate(value: _62.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _62.MsgBeginRedelegate;
                    };
                    undelegate(value: _62.MsgUndelegate): {
                        typeUrl: string;
                        value: _62.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _62.MsgCreateValidator) => _62.MsgCreateValidatorAmino;
                    fromAmino: (object: _62.MsgCreateValidatorAmino) => _62.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _62.MsgEditValidator) => _62.MsgEditValidatorAmino;
                    fromAmino: (object: _62.MsgEditValidatorAmino) => _62.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _62.MsgDelegate) => _62.MsgDelegateAmino;
                    fromAmino: (object: _62.MsgDelegateAmino) => _62.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _62.MsgBeginRedelegate) => _62.MsgBeginRedelegateAmino;
                    fromAmino: (object: _62.MsgBeginRedelegateAmino) => _62.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _62.MsgUndelegate) => _62.MsgUndelegateAmino;
                    fromAmino: (object: _62.MsgUndelegateAmino) => _62.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _62.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgCreateValidator;
                fromPartial(object: Partial<_62.MsgCreateValidator>): _62.MsgCreateValidator;
                fromAmino(object: _62.MsgCreateValidatorAmino): _62.MsgCreateValidator;
                toAmino(message: _62.MsgCreateValidator): _62.MsgCreateValidatorAmino;
                fromAminoMsg(object: _62.MsgCreateValidatorAminoMsg): _62.MsgCreateValidator;
                toAminoMsg(message: _62.MsgCreateValidator): _62.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _62.MsgCreateValidatorProtoMsg): _62.MsgCreateValidator;
                toProto(message: _62.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _62.MsgCreateValidator): _62.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _62.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_62.MsgCreateValidatorResponse>): _62.MsgCreateValidatorResponse;
                fromAmino(_: _62.MsgCreateValidatorResponseAmino): _62.MsgCreateValidatorResponse;
                toAmino(_: _62.MsgCreateValidatorResponse): _62.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _62.MsgCreateValidatorResponseAminoMsg): _62.MsgCreateValidatorResponse;
                toAminoMsg(message: _62.MsgCreateValidatorResponse): _62.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _62.MsgCreateValidatorResponseProtoMsg): _62.MsgCreateValidatorResponse;
                toProto(message: _62.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _62.MsgCreateValidatorResponse): _62.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _62.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgEditValidator;
                fromPartial(object: Partial<_62.MsgEditValidator>): _62.MsgEditValidator;
                fromAmino(object: _62.MsgEditValidatorAmino): _62.MsgEditValidator;
                toAmino(message: _62.MsgEditValidator): _62.MsgEditValidatorAmino;
                fromAminoMsg(object: _62.MsgEditValidatorAminoMsg): _62.MsgEditValidator;
                toAminoMsg(message: _62.MsgEditValidator): _62.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _62.MsgEditValidatorProtoMsg): _62.MsgEditValidator;
                toProto(message: _62.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _62.MsgEditValidator): _62.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _62.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.MsgEditValidatorResponse;
                fromPartial(_: Partial<_62.MsgEditValidatorResponse>): _62.MsgEditValidatorResponse;
                fromAmino(_: _62.MsgEditValidatorResponseAmino): _62.MsgEditValidatorResponse;
                toAmino(_: _62.MsgEditValidatorResponse): _62.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _62.MsgEditValidatorResponseAminoMsg): _62.MsgEditValidatorResponse;
                toAminoMsg(message: _62.MsgEditValidatorResponse): _62.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _62.MsgEditValidatorResponseProtoMsg): _62.MsgEditValidatorResponse;
                toProto(message: _62.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _62.MsgEditValidatorResponse): _62.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _62.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgDelegate;
                fromPartial(object: Partial<_62.MsgDelegate>): _62.MsgDelegate;
                fromAmino(object: _62.MsgDelegateAmino): _62.MsgDelegate;
                toAmino(message: _62.MsgDelegate): _62.MsgDelegateAmino;
                fromAminoMsg(object: _62.MsgDelegateAminoMsg): _62.MsgDelegate;
                toAminoMsg(message: _62.MsgDelegate): _62.MsgDelegateAminoMsg;
                fromProtoMsg(message: _62.MsgDelegateProtoMsg): _62.MsgDelegate;
                toProto(message: _62.MsgDelegate): Uint8Array;
                toProtoMsg(message: _62.MsgDelegate): _62.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _62.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.MsgDelegateResponse;
                fromPartial(_: Partial<_62.MsgDelegateResponse>): _62.MsgDelegateResponse;
                fromAmino(_: _62.MsgDelegateResponseAmino): _62.MsgDelegateResponse;
                toAmino(_: _62.MsgDelegateResponse): _62.MsgDelegateResponseAmino;
                fromAminoMsg(object: _62.MsgDelegateResponseAminoMsg): _62.MsgDelegateResponse;
                toAminoMsg(message: _62.MsgDelegateResponse): _62.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _62.MsgDelegateResponseProtoMsg): _62.MsgDelegateResponse;
                toProto(message: _62.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _62.MsgDelegateResponse): _62.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _62.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgBeginRedelegate;
                fromPartial(object: Partial<_62.MsgBeginRedelegate>): _62.MsgBeginRedelegate;
                fromAmino(object: _62.MsgBeginRedelegateAmino): _62.MsgBeginRedelegate;
                toAmino(message: _62.MsgBeginRedelegate): _62.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _62.MsgBeginRedelegateAminoMsg): _62.MsgBeginRedelegate;
                toAminoMsg(message: _62.MsgBeginRedelegate): _62.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _62.MsgBeginRedelegateProtoMsg): _62.MsgBeginRedelegate;
                toProto(message: _62.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _62.MsgBeginRedelegate): _62.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _62.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_62.MsgBeginRedelegateResponse>): _62.MsgBeginRedelegateResponse;
                fromAmino(object: _62.MsgBeginRedelegateResponseAmino): _62.MsgBeginRedelegateResponse;
                toAmino(message: _62.MsgBeginRedelegateResponse): _62.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _62.MsgBeginRedelegateResponseAminoMsg): _62.MsgBeginRedelegateResponse;
                toAminoMsg(message: _62.MsgBeginRedelegateResponse): _62.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _62.MsgBeginRedelegateResponseProtoMsg): _62.MsgBeginRedelegateResponse;
                toProto(message: _62.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _62.MsgBeginRedelegateResponse): _62.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _62.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgUndelegate;
                fromPartial(object: Partial<_62.MsgUndelegate>): _62.MsgUndelegate;
                fromAmino(object: _62.MsgUndelegateAmino): _62.MsgUndelegate;
                toAmino(message: _62.MsgUndelegate): _62.MsgUndelegateAmino;
                fromAminoMsg(object: _62.MsgUndelegateAminoMsg): _62.MsgUndelegate;
                toAminoMsg(message: _62.MsgUndelegate): _62.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _62.MsgUndelegateProtoMsg): _62.MsgUndelegate;
                toProto(message: _62.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _62.MsgUndelegate): _62.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _62.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgUndelegateResponse;
                fromPartial(object: Partial<_62.MsgUndelegateResponse>): _62.MsgUndelegateResponse;
                fromAmino(object: _62.MsgUndelegateResponseAmino): _62.MsgUndelegateResponse;
                toAmino(message: _62.MsgUndelegateResponse): _62.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _62.MsgUndelegateResponseAminoMsg): _62.MsgUndelegateResponse;
                toAminoMsg(message: _62.MsgUndelegateResponse): _62.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _62.MsgUndelegateResponseProtoMsg): _62.MsgUndelegateResponse;
                toProto(message: _62.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _62.MsgUndelegateResponse): _62.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _61.BondStatus;
            bondStatusToJSON(object: _61.BondStatus): string;
            BondStatus: typeof _61.BondStatus;
            BondStatusSDKType: typeof _61.BondStatus;
            BondStatusAmino: typeof _61.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _61.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.HistoricalInfo;
                fromPartial(object: Partial<_61.HistoricalInfo>): _61.HistoricalInfo;
                fromAmino(object: _61.HistoricalInfoAmino): _61.HistoricalInfo;
                toAmino(message: _61.HistoricalInfo): _61.HistoricalInfoAmino;
                fromAminoMsg(object: _61.HistoricalInfoAminoMsg): _61.HistoricalInfo;
                toAminoMsg(message: _61.HistoricalInfo): _61.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _61.HistoricalInfoProtoMsg): _61.HistoricalInfo;
                toProto(message: _61.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _61.HistoricalInfo): _61.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _61.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.CommissionRates;
                fromPartial(object: Partial<_61.CommissionRates>): _61.CommissionRates;
                fromAmino(object: _61.CommissionRatesAmino): _61.CommissionRates;
                toAmino(message: _61.CommissionRates): _61.CommissionRatesAmino;
                fromAminoMsg(object: _61.CommissionRatesAminoMsg): _61.CommissionRates;
                toAminoMsg(message: _61.CommissionRates): _61.CommissionRatesAminoMsg;
                fromProtoMsg(message: _61.CommissionRatesProtoMsg): _61.CommissionRates;
                toProto(message: _61.CommissionRates): Uint8Array;
                toProtoMsg(message: _61.CommissionRates): _61.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _61.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.Commission;
                fromPartial(object: Partial<_61.Commission>): _61.Commission;
                fromAmino(object: _61.CommissionAmino): _61.Commission;
                toAmino(message: _61.Commission): _61.CommissionAmino;
                fromAminoMsg(object: _61.CommissionAminoMsg): _61.Commission;
                toAminoMsg(message: _61.Commission): _61.CommissionAminoMsg;
                fromProtoMsg(message: _61.CommissionProtoMsg): _61.Commission;
                toProto(message: _61.Commission): Uint8Array;
                toProtoMsg(message: _61.Commission): _61.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _61.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.Description;
                fromPartial(object: Partial<_61.Description>): _61.Description;
                fromAmino(object: _61.DescriptionAmino): _61.Description;
                toAmino(message: _61.Description): _61.DescriptionAmino;
                fromAminoMsg(object: _61.DescriptionAminoMsg): _61.Description;
                toAminoMsg(message: _61.Description): _61.DescriptionAminoMsg;
                fromProtoMsg(message: _61.DescriptionProtoMsg): _61.Description;
                toProto(message: _61.Description): Uint8Array;
                toProtoMsg(message: _61.Description): _61.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _61.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.Validator;
                fromPartial(object: Partial<_61.Validator>): _61.Validator;
                fromAmino(object: _61.ValidatorAmino): _61.Validator;
                toAmino(message: _61.Validator): _61.ValidatorAmino;
                fromAminoMsg(object: _61.ValidatorAminoMsg): _61.Validator;
                toAminoMsg(message: _61.Validator): _61.ValidatorAminoMsg;
                fromProtoMsg(message: _61.ValidatorProtoMsg): _61.Validator;
                toProto(message: _61.Validator): Uint8Array;
                toProtoMsg(message: _61.Validator): _61.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _61.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.ValAddresses;
                fromPartial(object: Partial<_61.ValAddresses>): _61.ValAddresses;
                fromAmino(object: _61.ValAddressesAmino): _61.ValAddresses;
                toAmino(message: _61.ValAddresses): _61.ValAddressesAmino;
                fromAminoMsg(object: _61.ValAddressesAminoMsg): _61.ValAddresses;
                toAminoMsg(message: _61.ValAddresses): _61.ValAddressesAminoMsg;
                fromProtoMsg(message: _61.ValAddressesProtoMsg): _61.ValAddresses;
                toProto(message: _61.ValAddresses): Uint8Array;
                toProtoMsg(message: _61.ValAddresses): _61.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _61.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.DVPair;
                fromPartial(object: Partial<_61.DVPair>): _61.DVPair;
                fromAmino(object: _61.DVPairAmino): _61.DVPair;
                toAmino(message: _61.DVPair): _61.DVPairAmino;
                fromAminoMsg(object: _61.DVPairAminoMsg): _61.DVPair;
                toAminoMsg(message: _61.DVPair): _61.DVPairAminoMsg;
                fromProtoMsg(message: _61.DVPairProtoMsg): _61.DVPair;
                toProto(message: _61.DVPair): Uint8Array;
                toProtoMsg(message: _61.DVPair): _61.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _61.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.DVPairs;
                fromPartial(object: Partial<_61.DVPairs>): _61.DVPairs;
                fromAmino(object: _61.DVPairsAmino): _61.DVPairs;
                toAmino(message: _61.DVPairs): _61.DVPairsAmino;
                fromAminoMsg(object: _61.DVPairsAminoMsg): _61.DVPairs;
                toAminoMsg(message: _61.DVPairs): _61.DVPairsAminoMsg;
                fromProtoMsg(message: _61.DVPairsProtoMsg): _61.DVPairs;
                toProto(message: _61.DVPairs): Uint8Array;
                toProtoMsg(message: _61.DVPairs): _61.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _61.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.DVVTriplet;
                fromPartial(object: Partial<_61.DVVTriplet>): _61.DVVTriplet;
                fromAmino(object: _61.DVVTripletAmino): _61.DVVTriplet;
                toAmino(message: _61.DVVTriplet): _61.DVVTripletAmino;
                fromAminoMsg(object: _61.DVVTripletAminoMsg): _61.DVVTriplet;
                toAminoMsg(message: _61.DVVTriplet): _61.DVVTripletAminoMsg;
                fromProtoMsg(message: _61.DVVTripletProtoMsg): _61.DVVTriplet;
                toProto(message: _61.DVVTriplet): Uint8Array;
                toProtoMsg(message: _61.DVVTriplet): _61.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _61.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.DVVTriplets;
                fromPartial(object: Partial<_61.DVVTriplets>): _61.DVVTriplets;
                fromAmino(object: _61.DVVTripletsAmino): _61.DVVTriplets;
                toAmino(message: _61.DVVTriplets): _61.DVVTripletsAmino;
                fromAminoMsg(object: _61.DVVTripletsAminoMsg): _61.DVVTriplets;
                toAminoMsg(message: _61.DVVTriplets): _61.DVVTripletsAminoMsg;
                fromProtoMsg(message: _61.DVVTripletsProtoMsg): _61.DVVTriplets;
                toProto(message: _61.DVVTriplets): Uint8Array;
                toProtoMsg(message: _61.DVVTriplets): _61.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _61.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.Delegation;
                fromPartial(object: Partial<_61.Delegation>): _61.Delegation;
                fromAmino(object: _61.DelegationAmino): _61.Delegation;
                toAmino(message: _61.Delegation): _61.DelegationAmino;
                fromAminoMsg(object: _61.DelegationAminoMsg): _61.Delegation;
                toAminoMsg(message: _61.Delegation): _61.DelegationAminoMsg;
                fromProtoMsg(message: _61.DelegationProtoMsg): _61.Delegation;
                toProto(message: _61.Delegation): Uint8Array;
                toProtoMsg(message: _61.Delegation): _61.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _61.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.UnbondingDelegation;
                fromPartial(object: Partial<_61.UnbondingDelegation>): _61.UnbondingDelegation;
                fromAmino(object: _61.UnbondingDelegationAmino): _61.UnbondingDelegation;
                toAmino(message: _61.UnbondingDelegation): _61.UnbondingDelegationAmino;
                fromAminoMsg(object: _61.UnbondingDelegationAminoMsg): _61.UnbondingDelegation;
                toAminoMsg(message: _61.UnbondingDelegation): _61.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _61.UnbondingDelegationProtoMsg): _61.UnbondingDelegation;
                toProto(message: _61.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _61.UnbondingDelegation): _61.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _61.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.UnbondingDelegationEntry;
                fromPartial(object: Partial<_61.UnbondingDelegationEntry>): _61.UnbondingDelegationEntry;
                fromAmino(object: _61.UnbondingDelegationEntryAmino): _61.UnbondingDelegationEntry;
                toAmino(message: _61.UnbondingDelegationEntry): _61.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _61.UnbondingDelegationEntryAminoMsg): _61.UnbondingDelegationEntry;
                toAminoMsg(message: _61.UnbondingDelegationEntry): _61.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _61.UnbondingDelegationEntryProtoMsg): _61.UnbondingDelegationEntry;
                toProto(message: _61.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _61.UnbondingDelegationEntry): _61.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _61.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.RedelegationEntry;
                fromPartial(object: Partial<_61.RedelegationEntry>): _61.RedelegationEntry;
                fromAmino(object: _61.RedelegationEntryAmino): _61.RedelegationEntry;
                toAmino(message: _61.RedelegationEntry): _61.RedelegationEntryAmino;
                fromAminoMsg(object: _61.RedelegationEntryAminoMsg): _61.RedelegationEntry;
                toAminoMsg(message: _61.RedelegationEntry): _61.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _61.RedelegationEntryProtoMsg): _61.RedelegationEntry;
                toProto(message: _61.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _61.RedelegationEntry): _61.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _61.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.Redelegation;
                fromPartial(object: Partial<_61.Redelegation>): _61.Redelegation;
                fromAmino(object: _61.RedelegationAmino): _61.Redelegation;
                toAmino(message: _61.Redelegation): _61.RedelegationAmino;
                fromAminoMsg(object: _61.RedelegationAminoMsg): _61.Redelegation;
                toAminoMsg(message: _61.Redelegation): _61.RedelegationAminoMsg;
                fromProtoMsg(message: _61.RedelegationProtoMsg): _61.Redelegation;
                toProto(message: _61.Redelegation): Uint8Array;
                toProtoMsg(message: _61.Redelegation): _61.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _61.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.Params;
                fromPartial(object: Partial<_61.Params>): _61.Params;
                fromAmino(object: _61.ParamsAmino): _61.Params;
                toAmino(message: _61.Params): _61.ParamsAmino;
                fromAminoMsg(object: _61.ParamsAminoMsg): _61.Params;
                toAminoMsg(message: _61.Params): _61.ParamsAminoMsg;
                fromProtoMsg(message: _61.ParamsProtoMsg): _61.Params;
                toProto(message: _61.Params): Uint8Array;
                toProtoMsg(message: _61.Params): _61.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _61.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.DelegationResponse;
                fromPartial(object: Partial<_61.DelegationResponse>): _61.DelegationResponse;
                fromAmino(object: _61.DelegationResponseAmino): _61.DelegationResponse;
                toAmino(message: _61.DelegationResponse): _61.DelegationResponseAmino;
                fromAminoMsg(object: _61.DelegationResponseAminoMsg): _61.DelegationResponse;
                toAminoMsg(message: _61.DelegationResponse): _61.DelegationResponseAminoMsg;
                fromProtoMsg(message: _61.DelegationResponseProtoMsg): _61.DelegationResponse;
                toProto(message: _61.DelegationResponse): Uint8Array;
                toProtoMsg(message: _61.DelegationResponse): _61.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _61.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.RedelegationEntryResponse;
                fromPartial(object: Partial<_61.RedelegationEntryResponse>): _61.RedelegationEntryResponse;
                fromAmino(object: _61.RedelegationEntryResponseAmino): _61.RedelegationEntryResponse;
                toAmino(message: _61.RedelegationEntryResponse): _61.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _61.RedelegationEntryResponseAminoMsg): _61.RedelegationEntryResponse;
                toAminoMsg(message: _61.RedelegationEntryResponse): _61.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _61.RedelegationEntryResponseProtoMsg): _61.RedelegationEntryResponse;
                toProto(message: _61.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _61.RedelegationEntryResponse): _61.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _61.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.RedelegationResponse;
                fromPartial(object: Partial<_61.RedelegationResponse>): _61.RedelegationResponse;
                fromAmino(object: _61.RedelegationResponseAmino): _61.RedelegationResponse;
                toAmino(message: _61.RedelegationResponse): _61.RedelegationResponseAmino;
                fromAminoMsg(object: _61.RedelegationResponseAminoMsg): _61.RedelegationResponse;
                toAminoMsg(message: _61.RedelegationResponse): _61.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _61.RedelegationResponseProtoMsg): _61.RedelegationResponse;
                toProto(message: _61.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _61.RedelegationResponse): _61.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _61.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.Pool;
                fromPartial(object: Partial<_61.Pool>): _61.Pool;
                fromAmino(object: _61.PoolAmino): _61.Pool;
                toAmino(message: _61.Pool): _61.PoolAmino;
                fromAminoMsg(object: _61.PoolAminoMsg): _61.Pool;
                toAminoMsg(message: _61.Pool): _61.PoolAminoMsg;
                fromProtoMsg(message: _61.PoolProtoMsg): _61.Pool;
                toProto(message: _61.Pool): Uint8Array;
                toProtoMsg(message: _61.Pool): _61.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _60.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryValidatorsRequest;
                fromPartial(object: Partial<_60.QueryValidatorsRequest>): _60.QueryValidatorsRequest;
                fromAmino(object: _60.QueryValidatorsRequestAmino): _60.QueryValidatorsRequest;
                toAmino(message: _60.QueryValidatorsRequest): _60.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _60.QueryValidatorsRequestAminoMsg): _60.QueryValidatorsRequest;
                toAminoMsg(message: _60.QueryValidatorsRequest): _60.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorsRequestProtoMsg): _60.QueryValidatorsRequest;
                toProto(message: _60.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorsRequest): _60.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _60.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryValidatorsResponse;
                fromPartial(object: Partial<_60.QueryValidatorsResponse>): _60.QueryValidatorsResponse;
                fromAmino(object: _60.QueryValidatorsResponseAmino): _60.QueryValidatorsResponse;
                toAmino(message: _60.QueryValidatorsResponse): _60.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _60.QueryValidatorsResponseAminoMsg): _60.QueryValidatorsResponse;
                toAminoMsg(message: _60.QueryValidatorsResponse): _60.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorsResponseProtoMsg): _60.QueryValidatorsResponse;
                toProto(message: _60.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorsResponse): _60.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _60.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryValidatorRequest;
                fromPartial(object: Partial<_60.QueryValidatorRequest>): _60.QueryValidatorRequest;
                fromAmino(object: _60.QueryValidatorRequestAmino): _60.QueryValidatorRequest;
                toAmino(message: _60.QueryValidatorRequest): _60.QueryValidatorRequestAmino;
                fromAminoMsg(object: _60.QueryValidatorRequestAminoMsg): _60.QueryValidatorRequest;
                toAminoMsg(message: _60.QueryValidatorRequest): _60.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorRequestProtoMsg): _60.QueryValidatorRequest;
                toProto(message: _60.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorRequest): _60.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _60.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryValidatorResponse;
                fromPartial(object: Partial<_60.QueryValidatorResponse>): _60.QueryValidatorResponse;
                fromAmino(object: _60.QueryValidatorResponseAmino): _60.QueryValidatorResponse;
                toAmino(message: _60.QueryValidatorResponse): _60.QueryValidatorResponseAmino;
                fromAminoMsg(object: _60.QueryValidatorResponseAminoMsg): _60.QueryValidatorResponse;
                toAminoMsg(message: _60.QueryValidatorResponse): _60.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorResponseProtoMsg): _60.QueryValidatorResponse;
                toProto(message: _60.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorResponse): _60.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _60.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_60.QueryValidatorDelegationsRequest>): _60.QueryValidatorDelegationsRequest;
                fromAmino(object: _60.QueryValidatorDelegationsRequestAmino): _60.QueryValidatorDelegationsRequest;
                toAmino(message: _60.QueryValidatorDelegationsRequest): _60.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _60.QueryValidatorDelegationsRequestAminoMsg): _60.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _60.QueryValidatorDelegationsRequest): _60.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorDelegationsRequestProtoMsg): _60.QueryValidatorDelegationsRequest;
                toProto(message: _60.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorDelegationsRequest): _60.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _60.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_60.QueryValidatorDelegationsResponse>): _60.QueryValidatorDelegationsResponse;
                fromAmino(object: _60.QueryValidatorDelegationsResponseAmino): _60.QueryValidatorDelegationsResponse;
                toAmino(message: _60.QueryValidatorDelegationsResponse): _60.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _60.QueryValidatorDelegationsResponseAminoMsg): _60.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _60.QueryValidatorDelegationsResponse): _60.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorDelegationsResponseProtoMsg): _60.QueryValidatorDelegationsResponse;
                toProto(message: _60.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorDelegationsResponse): _60.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _60.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_60.QueryValidatorUnbondingDelegationsRequest>): _60.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _60.QueryValidatorUnbondingDelegationsRequestAmino): _60.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _60.QueryValidatorUnbondingDelegationsRequest): _60.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _60.QueryValidatorUnbondingDelegationsRequestAminoMsg): _60.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _60.QueryValidatorUnbondingDelegationsRequest): _60.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorUnbondingDelegationsRequestProtoMsg): _60.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _60.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorUnbondingDelegationsRequest): _60.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _60.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_60.QueryValidatorUnbondingDelegationsResponse>): _60.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _60.QueryValidatorUnbondingDelegationsResponseAmino): _60.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _60.QueryValidatorUnbondingDelegationsResponse): _60.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _60.QueryValidatorUnbondingDelegationsResponseAminoMsg): _60.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _60.QueryValidatorUnbondingDelegationsResponse): _60.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorUnbondingDelegationsResponseProtoMsg): _60.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _60.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorUnbondingDelegationsResponse): _60.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _60.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegationRequest;
                fromPartial(object: Partial<_60.QueryDelegationRequest>): _60.QueryDelegationRequest;
                fromAmino(object: _60.QueryDelegationRequestAmino): _60.QueryDelegationRequest;
                toAmino(message: _60.QueryDelegationRequest): _60.QueryDelegationRequestAmino;
                fromAminoMsg(object: _60.QueryDelegationRequestAminoMsg): _60.QueryDelegationRequest;
                toAminoMsg(message: _60.QueryDelegationRequest): _60.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _60.QueryDelegationRequestProtoMsg): _60.QueryDelegationRequest;
                toProto(message: _60.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _60.QueryDelegationRequest): _60.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _60.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegationResponse;
                fromPartial(object: Partial<_60.QueryDelegationResponse>): _60.QueryDelegationResponse;
                fromAmino(object: _60.QueryDelegationResponseAmino): _60.QueryDelegationResponse;
                toAmino(message: _60.QueryDelegationResponse): _60.QueryDelegationResponseAmino;
                fromAminoMsg(object: _60.QueryDelegationResponseAminoMsg): _60.QueryDelegationResponse;
                toAminoMsg(message: _60.QueryDelegationResponse): _60.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _60.QueryDelegationResponseProtoMsg): _60.QueryDelegationResponse;
                toProto(message: _60.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _60.QueryDelegationResponse): _60.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _60.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_60.QueryUnbondingDelegationRequest>): _60.QueryUnbondingDelegationRequest;
                fromAmino(object: _60.QueryUnbondingDelegationRequestAmino): _60.QueryUnbondingDelegationRequest;
                toAmino(message: _60.QueryUnbondingDelegationRequest): _60.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _60.QueryUnbondingDelegationRequestAminoMsg): _60.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _60.QueryUnbondingDelegationRequest): _60.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _60.QueryUnbondingDelegationRequestProtoMsg): _60.QueryUnbondingDelegationRequest;
                toProto(message: _60.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _60.QueryUnbondingDelegationRequest): _60.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _60.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_60.QueryUnbondingDelegationResponse>): _60.QueryUnbondingDelegationResponse;
                fromAmino(object: _60.QueryUnbondingDelegationResponseAmino): _60.QueryUnbondingDelegationResponse;
                toAmino(message: _60.QueryUnbondingDelegationResponse): _60.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _60.QueryUnbondingDelegationResponseAminoMsg): _60.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _60.QueryUnbondingDelegationResponse): _60.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _60.QueryUnbondingDelegationResponseProtoMsg): _60.QueryUnbondingDelegationResponse;
                toProto(message: _60.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _60.QueryUnbondingDelegationResponse): _60.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _60.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_60.QueryDelegatorDelegationsRequest>): _60.QueryDelegatorDelegationsRequest;
                fromAmino(object: _60.QueryDelegatorDelegationsRequestAmino): _60.QueryDelegatorDelegationsRequest;
                toAmino(message: _60.QueryDelegatorDelegationsRequest): _60.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _60.QueryDelegatorDelegationsRequestAminoMsg): _60.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _60.QueryDelegatorDelegationsRequest): _60.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryDelegatorDelegationsRequestProtoMsg): _60.QueryDelegatorDelegationsRequest;
                toProto(message: _60.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryDelegatorDelegationsRequest): _60.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _60.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_60.QueryDelegatorDelegationsResponse>): _60.QueryDelegatorDelegationsResponse;
                fromAmino(object: _60.QueryDelegatorDelegationsResponseAmino): _60.QueryDelegatorDelegationsResponse;
                toAmino(message: _60.QueryDelegatorDelegationsResponse): _60.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _60.QueryDelegatorDelegationsResponseAminoMsg): _60.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _60.QueryDelegatorDelegationsResponse): _60.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryDelegatorDelegationsResponseProtoMsg): _60.QueryDelegatorDelegationsResponse;
                toProto(message: _60.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryDelegatorDelegationsResponse): _60.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _60.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_60.QueryDelegatorUnbondingDelegationsRequest>): _60.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _60.QueryDelegatorUnbondingDelegationsRequestAmino): _60.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _60.QueryDelegatorUnbondingDelegationsRequest): _60.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _60.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _60.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _60.QueryDelegatorUnbondingDelegationsRequest): _60.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _60.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _60.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryDelegatorUnbondingDelegationsRequest): _60.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _60.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_60.QueryDelegatorUnbondingDelegationsResponse>): _60.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _60.QueryDelegatorUnbondingDelegationsResponseAmino): _60.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _60.QueryDelegatorUnbondingDelegationsResponse): _60.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _60.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _60.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _60.QueryDelegatorUnbondingDelegationsResponse): _60.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _60.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _60.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryDelegatorUnbondingDelegationsResponse): _60.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _60.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryRedelegationsRequest;
                fromPartial(object: Partial<_60.QueryRedelegationsRequest>): _60.QueryRedelegationsRequest;
                fromAmino(object: _60.QueryRedelegationsRequestAmino): _60.QueryRedelegationsRequest;
                toAmino(message: _60.QueryRedelegationsRequest): _60.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _60.QueryRedelegationsRequestAminoMsg): _60.QueryRedelegationsRequest;
                toAminoMsg(message: _60.QueryRedelegationsRequest): _60.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryRedelegationsRequestProtoMsg): _60.QueryRedelegationsRequest;
                toProto(message: _60.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryRedelegationsRequest): _60.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _60.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryRedelegationsResponse;
                fromPartial(object: Partial<_60.QueryRedelegationsResponse>): _60.QueryRedelegationsResponse;
                fromAmino(object: _60.QueryRedelegationsResponseAmino): _60.QueryRedelegationsResponse;
                toAmino(message: _60.QueryRedelegationsResponse): _60.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _60.QueryRedelegationsResponseAminoMsg): _60.QueryRedelegationsResponse;
                toAminoMsg(message: _60.QueryRedelegationsResponse): _60.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryRedelegationsResponseProtoMsg): _60.QueryRedelegationsResponse;
                toProto(message: _60.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryRedelegationsResponse): _60.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _60.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_60.QueryDelegatorValidatorsRequest>): _60.QueryDelegatorValidatorsRequest;
                fromAmino(object: _60.QueryDelegatorValidatorsRequestAmino): _60.QueryDelegatorValidatorsRequest;
                toAmino(message: _60.QueryDelegatorValidatorsRequest): _60.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _60.QueryDelegatorValidatorsRequestAminoMsg): _60.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _60.QueryDelegatorValidatorsRequest): _60.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryDelegatorValidatorsRequestProtoMsg): _60.QueryDelegatorValidatorsRequest;
                toProto(message: _60.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryDelegatorValidatorsRequest): _60.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _60.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_60.QueryDelegatorValidatorsResponse>): _60.QueryDelegatorValidatorsResponse;
                fromAmino(object: _60.QueryDelegatorValidatorsResponseAmino): _60.QueryDelegatorValidatorsResponse;
                toAmino(message: _60.QueryDelegatorValidatorsResponse): _60.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _60.QueryDelegatorValidatorsResponseAminoMsg): _60.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _60.QueryDelegatorValidatorsResponse): _60.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryDelegatorValidatorsResponseProtoMsg): _60.QueryDelegatorValidatorsResponse;
                toProto(message: _60.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryDelegatorValidatorsResponse): _60.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _60.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_60.QueryDelegatorValidatorRequest>): _60.QueryDelegatorValidatorRequest;
                fromAmino(object: _60.QueryDelegatorValidatorRequestAmino): _60.QueryDelegatorValidatorRequest;
                toAmino(message: _60.QueryDelegatorValidatorRequest): _60.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _60.QueryDelegatorValidatorRequestAminoMsg): _60.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _60.QueryDelegatorValidatorRequest): _60.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _60.QueryDelegatorValidatorRequestProtoMsg): _60.QueryDelegatorValidatorRequest;
                toProto(message: _60.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _60.QueryDelegatorValidatorRequest): _60.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _60.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_60.QueryDelegatorValidatorResponse>): _60.QueryDelegatorValidatorResponse;
                fromAmino(object: _60.QueryDelegatorValidatorResponseAmino): _60.QueryDelegatorValidatorResponse;
                toAmino(message: _60.QueryDelegatorValidatorResponse): _60.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _60.QueryDelegatorValidatorResponseAminoMsg): _60.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _60.QueryDelegatorValidatorResponse): _60.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _60.QueryDelegatorValidatorResponseProtoMsg): _60.QueryDelegatorValidatorResponse;
                toProto(message: _60.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _60.QueryDelegatorValidatorResponse): _60.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _60.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_60.QueryHistoricalInfoRequest>): _60.QueryHistoricalInfoRequest;
                fromAmino(object: _60.QueryHistoricalInfoRequestAmino): _60.QueryHistoricalInfoRequest;
                toAmino(message: _60.QueryHistoricalInfoRequest): _60.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _60.QueryHistoricalInfoRequestAminoMsg): _60.QueryHistoricalInfoRequest;
                toAminoMsg(message: _60.QueryHistoricalInfoRequest): _60.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _60.QueryHistoricalInfoRequestProtoMsg): _60.QueryHistoricalInfoRequest;
                toProto(message: _60.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _60.QueryHistoricalInfoRequest): _60.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _60.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_60.QueryHistoricalInfoResponse>): _60.QueryHistoricalInfoResponse;
                fromAmino(object: _60.QueryHistoricalInfoResponseAmino): _60.QueryHistoricalInfoResponse;
                toAmino(message: _60.QueryHistoricalInfoResponse): _60.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _60.QueryHistoricalInfoResponseAminoMsg): _60.QueryHistoricalInfoResponse;
                toAminoMsg(message: _60.QueryHistoricalInfoResponse): _60.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _60.QueryHistoricalInfoResponseProtoMsg): _60.QueryHistoricalInfoResponse;
                toProto(message: _60.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _60.QueryHistoricalInfoResponse): _60.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _60.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _60.QueryPoolRequest;
                fromPartial(_: Partial<_60.QueryPoolRequest>): _60.QueryPoolRequest;
                fromAmino(_: _60.QueryPoolRequestAmino): _60.QueryPoolRequest;
                toAmino(_: _60.QueryPoolRequest): _60.QueryPoolRequestAmino;
                fromAminoMsg(object: _60.QueryPoolRequestAminoMsg): _60.QueryPoolRequest;
                toAminoMsg(message: _60.QueryPoolRequest): _60.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _60.QueryPoolRequestProtoMsg): _60.QueryPoolRequest;
                toProto(message: _60.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _60.QueryPoolRequest): _60.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _60.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryPoolResponse;
                fromPartial(object: Partial<_60.QueryPoolResponse>): _60.QueryPoolResponse;
                fromAmino(object: _60.QueryPoolResponseAmino): _60.QueryPoolResponse;
                toAmino(message: _60.QueryPoolResponse): _60.QueryPoolResponseAmino;
                fromAminoMsg(object: _60.QueryPoolResponseAminoMsg): _60.QueryPoolResponse;
                toAminoMsg(message: _60.QueryPoolResponse): _60.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _60.QueryPoolResponseProtoMsg): _60.QueryPoolResponse;
                toProto(message: _60.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _60.QueryPoolResponse): _60.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _60.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _60.QueryParamsRequest;
                fromPartial(_: Partial<_60.QueryParamsRequest>): _60.QueryParamsRequest;
                fromAmino(_: _60.QueryParamsRequestAmino): _60.QueryParamsRequest;
                toAmino(_: _60.QueryParamsRequest): _60.QueryParamsRequestAmino;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _59.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.LastValidatorPower;
                fromPartial(object: Partial<_59.LastValidatorPower>): _59.LastValidatorPower;
                fromAmino(object: _59.LastValidatorPowerAmino): _59.LastValidatorPower;
                toAmino(message: _59.LastValidatorPower): _59.LastValidatorPowerAmino;
                fromAminoMsg(object: _59.LastValidatorPowerAminoMsg): _59.LastValidatorPower;
                toAminoMsg(message: _59.LastValidatorPower): _59.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _59.LastValidatorPowerProtoMsg): _59.LastValidatorPower;
                toProto(message: _59.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _59.LastValidatorPower): _59.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _58.AuthorizationType;
            authorizationTypeToJSON(object: _58.AuthorizationType): string;
            AuthorizationType: typeof _58.AuthorizationType;
            AuthorizationTypeSDKType: typeof _58.AuthorizationType;
            AuthorizationTypeAmino: typeof _58.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _58.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.StakeAuthorization;
                fromPartial(object: Partial<_58.StakeAuthorization>): _58.StakeAuthorization;
                fromAmino(object: _58.StakeAuthorizationAmino): _58.StakeAuthorization;
                toAmino(message: _58.StakeAuthorization): _58.StakeAuthorizationAmino;
                fromAminoMsg(object: _58.StakeAuthorizationAminoMsg): _58.StakeAuthorization;
                toAminoMsg(message: _58.StakeAuthorization): _58.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _58.StakeAuthorizationProtoMsg): _58.StakeAuthorization;
                toProto(message: _58.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _58.StakeAuthorization): _58.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _58.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.StakeAuthorization_Validators;
                fromPartial(object: Partial<_58.StakeAuthorization_Validators>): _58.StakeAuthorization_Validators;
                fromAmino(object: _58.StakeAuthorization_ValidatorsAmino): _58.StakeAuthorization_Validators;
                toAmino(message: _58.StakeAuthorization_Validators): _58.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _58.StakeAuthorization_ValidatorsAminoMsg): _58.StakeAuthorization_Validators;
                toAminoMsg(message: _58.StakeAuthorization_Validators): _58.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _58.StakeAuthorization_ValidatorsProtoMsg): _58.StakeAuthorization_Validators;
                toProto(message: _58.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _58.StakeAuthorization_Validators): _58.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _63.SignMode;
                signModeToJSON(object: _63.SignMode): string;
                SignMode: typeof _63.SignMode;
                SignModeSDKType: typeof _63.SignMode;
                SignModeAmino: typeof _63.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _63.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.SignatureDescriptors;
                    fromPartial(object: Partial<_63.SignatureDescriptors>): _63.SignatureDescriptors;
                    fromAmino(object: _63.SignatureDescriptorsAmino): _63.SignatureDescriptors;
                    toAmino(message: _63.SignatureDescriptors): _63.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _63.SignatureDescriptorsAminoMsg): _63.SignatureDescriptors;
                    toAminoMsg(message: _63.SignatureDescriptors): _63.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _63.SignatureDescriptorsProtoMsg): _63.SignatureDescriptors;
                    toProto(message: _63.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _63.SignatureDescriptors): _63.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _63.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.SignatureDescriptor;
                    fromPartial(object: Partial<_63.SignatureDescriptor>): _63.SignatureDescriptor;
                    fromAmino(object: _63.SignatureDescriptorAmino): _63.SignatureDescriptor;
                    toAmino(message: _63.SignatureDescriptor): _63.SignatureDescriptorAmino;
                    fromAminoMsg(object: _63.SignatureDescriptorAminoMsg): _63.SignatureDescriptor;
                    toAminoMsg(message: _63.SignatureDescriptor): _63.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _63.SignatureDescriptorProtoMsg): _63.SignatureDescriptor;
                    toProto(message: _63.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _63.SignatureDescriptor): _63.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _63.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_63.SignatureDescriptor_Data>): _63.SignatureDescriptor_Data;
                    fromAmino(object: _63.SignatureDescriptor_DataAmino): _63.SignatureDescriptor_Data;
                    toAmino(message: _63.SignatureDescriptor_Data): _63.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _63.SignatureDescriptor_DataAminoMsg): _63.SignatureDescriptor_Data;
                    toAminoMsg(message: _63.SignatureDescriptor_Data): _63.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _63.SignatureDescriptor_DataProtoMsg): _63.SignatureDescriptor_Data;
                    toProto(message: _63.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _63.SignatureDescriptor_Data): _63.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _63.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_63.SignatureDescriptor_Data_Single>): _63.SignatureDescriptor_Data_Single;
                    fromAmino(object: _63.SignatureDescriptor_Data_SingleAmino): _63.SignatureDescriptor_Data_Single;
                    toAmino(message: _63.SignatureDescriptor_Data_Single): _63.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _63.SignatureDescriptor_Data_SingleAminoMsg): _63.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _63.SignatureDescriptor_Data_Single): _63.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _63.SignatureDescriptor_Data_SingleProtoMsg): _63.SignatureDescriptor_Data_Single;
                    toProto(message: _63.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _63.SignatureDescriptor_Data_Single): _63.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _63.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_63.SignatureDescriptor_Data_Multi>): _63.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _63.SignatureDescriptor_Data_MultiAmino): _63.SignatureDescriptor_Data_Multi;
                    toAmino(message: _63.SignatureDescriptor_Data_Multi): _63.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _63.SignatureDescriptor_Data_MultiAminoMsg): _63.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _63.SignatureDescriptor_Data_Multi): _63.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _63.SignatureDescriptor_Data_MultiProtoMsg): _63.SignatureDescriptor_Data_Multi;
                    toProto(message: _63.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _63.SignatureDescriptor_Data_Multi): _63.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _150.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _64.SimulateRequest): Promise<_64.SimulateResponse>;
                getTx(request: _64.GetTxRequest): Promise<_64.GetTxResponse>;
                broadcastTx(request: _64.BroadcastTxRequest): Promise<_64.BroadcastTxResponse>;
                getTxsEvent(request: _64.GetTxsEventRequest): Promise<_64.GetTxsEventResponse>;
                getBlockWithTxs(request: _64.GetBlockWithTxsRequest): Promise<_64.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _135.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _65.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.Tx;
                fromPartial(object: Partial<_65.Tx>): _65.Tx;
                fromAmino(object: _65.TxAmino): _65.Tx;
                toAmino(message: _65.Tx): _65.TxAmino;
                fromAminoMsg(object: _65.TxAminoMsg): _65.Tx;
                toAminoMsg(message: _65.Tx): _65.TxAminoMsg;
                fromProtoMsg(message: _65.TxProtoMsg): _65.Tx;
                toProto(message: _65.Tx): Uint8Array;
                toProtoMsg(message: _65.Tx): _65.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _65.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.TxRaw;
                fromPartial(object: Partial<_65.TxRaw>): _65.TxRaw;
                fromAmino(object: _65.TxRawAmino): _65.TxRaw;
                toAmino(message: _65.TxRaw): _65.TxRawAmino;
                fromAminoMsg(object: _65.TxRawAminoMsg): _65.TxRaw;
                toAminoMsg(message: _65.TxRaw): _65.TxRawAminoMsg;
                fromProtoMsg(message: _65.TxRawProtoMsg): _65.TxRaw;
                toProto(message: _65.TxRaw): Uint8Array;
                toProtoMsg(message: _65.TxRaw): _65.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _65.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.SignDoc;
                fromPartial(object: Partial<_65.SignDoc>): _65.SignDoc;
                fromAmino(object: _65.SignDocAmino): _65.SignDoc;
                toAmino(message: _65.SignDoc): _65.SignDocAmino;
                fromAminoMsg(object: _65.SignDocAminoMsg): _65.SignDoc;
                toAminoMsg(message: _65.SignDoc): _65.SignDocAminoMsg;
                fromProtoMsg(message: _65.SignDocProtoMsg): _65.SignDoc;
                toProto(message: _65.SignDoc): Uint8Array;
                toProtoMsg(message: _65.SignDoc): _65.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _65.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.TxBody;
                fromPartial(object: Partial<_65.TxBody>): _65.TxBody;
                fromAmino(object: _65.TxBodyAmino): _65.TxBody;
                toAmino(message: _65.TxBody): _65.TxBodyAmino;
                fromAminoMsg(object: _65.TxBodyAminoMsg): _65.TxBody;
                toAminoMsg(message: _65.TxBody): _65.TxBodyAminoMsg;
                fromProtoMsg(message: _65.TxBodyProtoMsg): _65.TxBody;
                toProto(message: _65.TxBody): Uint8Array;
                toProtoMsg(message: _65.TxBody): _65.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _65.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.AuthInfo;
                fromPartial(object: Partial<_65.AuthInfo>): _65.AuthInfo;
                fromAmino(object: _65.AuthInfoAmino): _65.AuthInfo;
                toAmino(message: _65.AuthInfo): _65.AuthInfoAmino;
                fromAminoMsg(object: _65.AuthInfoAminoMsg): _65.AuthInfo;
                toAminoMsg(message: _65.AuthInfo): _65.AuthInfoAminoMsg;
                fromProtoMsg(message: _65.AuthInfoProtoMsg): _65.AuthInfo;
                toProto(message: _65.AuthInfo): Uint8Array;
                toProtoMsg(message: _65.AuthInfo): _65.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _65.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.SignerInfo;
                fromPartial(object: Partial<_65.SignerInfo>): _65.SignerInfo;
                fromAmino(object: _65.SignerInfoAmino): _65.SignerInfo;
                toAmino(message: _65.SignerInfo): _65.SignerInfoAmino;
                fromAminoMsg(object: _65.SignerInfoAminoMsg): _65.SignerInfo;
                toAminoMsg(message: _65.SignerInfo): _65.SignerInfoAminoMsg;
                fromProtoMsg(message: _65.SignerInfoProtoMsg): _65.SignerInfo;
                toProto(message: _65.SignerInfo): Uint8Array;
                toProtoMsg(message: _65.SignerInfo): _65.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _65.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ModeInfo;
                fromPartial(object: Partial<_65.ModeInfo>): _65.ModeInfo;
                fromAmino(object: _65.ModeInfoAmino): _65.ModeInfo;
                toAmino(message: _65.ModeInfo): _65.ModeInfoAmino;
                fromAminoMsg(object: _65.ModeInfoAminoMsg): _65.ModeInfo;
                toAminoMsg(message: _65.ModeInfo): _65.ModeInfoAminoMsg;
                fromProtoMsg(message: _65.ModeInfoProtoMsg): _65.ModeInfo;
                toProto(message: _65.ModeInfo): Uint8Array;
                toProtoMsg(message: _65.ModeInfo): _65.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _65.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ModeInfo_Single;
                fromPartial(object: Partial<_65.ModeInfo_Single>): _65.ModeInfo_Single;
                fromAmino(object: _65.ModeInfo_SingleAmino): _65.ModeInfo_Single;
                toAmino(message: _65.ModeInfo_Single): _65.ModeInfo_SingleAmino;
                fromAminoMsg(object: _65.ModeInfo_SingleAminoMsg): _65.ModeInfo_Single;
                toAminoMsg(message: _65.ModeInfo_Single): _65.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _65.ModeInfo_SingleProtoMsg): _65.ModeInfo_Single;
                toProto(message: _65.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _65.ModeInfo_Single): _65.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _65.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ModeInfo_Multi;
                fromPartial(object: Partial<_65.ModeInfo_Multi>): _65.ModeInfo_Multi;
                fromAmino(object: _65.ModeInfo_MultiAmino): _65.ModeInfo_Multi;
                toAmino(message: _65.ModeInfo_Multi): _65.ModeInfo_MultiAmino;
                fromAminoMsg(object: _65.ModeInfo_MultiAminoMsg): _65.ModeInfo_Multi;
                toAminoMsg(message: _65.ModeInfo_Multi): _65.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _65.ModeInfo_MultiProtoMsg): _65.ModeInfo_Multi;
                toProto(message: _65.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _65.ModeInfo_Multi): _65.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _65.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.Fee;
                fromPartial(object: Partial<_65.Fee>): _65.Fee;
                fromAmino(object: _65.FeeAmino): _65.Fee;
                toAmino(message: _65.Fee): _65.FeeAmino;
                fromAminoMsg(object: _65.FeeAminoMsg): _65.Fee;
                toAminoMsg(message: _65.Fee): _65.FeeAminoMsg;
                fromProtoMsg(message: _65.FeeProtoMsg): _65.Fee;
                toProto(message: _65.Fee): Uint8Array;
                toProtoMsg(message: _65.Fee): _65.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _64.OrderBy;
            orderByToJSON(object: _64.OrderBy): string;
            broadcastModeFromJSON(object: any): _64.BroadcastMode;
            broadcastModeToJSON(object: _64.BroadcastMode): string;
            OrderBy: typeof _64.OrderBy;
            OrderBySDKType: typeof _64.OrderBy;
            OrderByAmino: typeof _64.OrderBy;
            BroadcastMode: typeof _64.BroadcastMode;
            BroadcastModeSDKType: typeof _64.BroadcastMode;
            BroadcastModeAmino: typeof _64.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _64.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.GetTxsEventRequest;
                fromPartial(object: Partial<_64.GetTxsEventRequest>): _64.GetTxsEventRequest;
                fromAmino(object: _64.GetTxsEventRequestAmino): _64.GetTxsEventRequest;
                toAmino(message: _64.GetTxsEventRequest): _64.GetTxsEventRequestAmino;
                fromAminoMsg(object: _64.GetTxsEventRequestAminoMsg): _64.GetTxsEventRequest;
                toAminoMsg(message: _64.GetTxsEventRequest): _64.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _64.GetTxsEventRequestProtoMsg): _64.GetTxsEventRequest;
                toProto(message: _64.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _64.GetTxsEventRequest): _64.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _64.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.GetTxsEventResponse;
                fromPartial(object: Partial<_64.GetTxsEventResponse>): _64.GetTxsEventResponse;
                fromAmino(object: _64.GetTxsEventResponseAmino): _64.GetTxsEventResponse;
                toAmino(message: _64.GetTxsEventResponse): _64.GetTxsEventResponseAmino;
                fromAminoMsg(object: _64.GetTxsEventResponseAminoMsg): _64.GetTxsEventResponse;
                toAminoMsg(message: _64.GetTxsEventResponse): _64.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _64.GetTxsEventResponseProtoMsg): _64.GetTxsEventResponse;
                toProto(message: _64.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _64.GetTxsEventResponse): _64.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _64.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.BroadcastTxRequest;
                fromPartial(object: Partial<_64.BroadcastTxRequest>): _64.BroadcastTxRequest;
                fromAmino(object: _64.BroadcastTxRequestAmino): _64.BroadcastTxRequest;
                toAmino(message: _64.BroadcastTxRequest): _64.BroadcastTxRequestAmino;
                fromAminoMsg(object: _64.BroadcastTxRequestAminoMsg): _64.BroadcastTxRequest;
                toAminoMsg(message: _64.BroadcastTxRequest): _64.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _64.BroadcastTxRequestProtoMsg): _64.BroadcastTxRequest;
                toProto(message: _64.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _64.BroadcastTxRequest): _64.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _64.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.BroadcastTxResponse;
                fromPartial(object: Partial<_64.BroadcastTxResponse>): _64.BroadcastTxResponse;
                fromAmino(object: _64.BroadcastTxResponseAmino): _64.BroadcastTxResponse;
                toAmino(message: _64.BroadcastTxResponse): _64.BroadcastTxResponseAmino;
                fromAminoMsg(object: _64.BroadcastTxResponseAminoMsg): _64.BroadcastTxResponse;
                toAminoMsg(message: _64.BroadcastTxResponse): _64.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _64.BroadcastTxResponseProtoMsg): _64.BroadcastTxResponse;
                toProto(message: _64.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _64.BroadcastTxResponse): _64.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _64.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.SimulateRequest;
                fromPartial(object: Partial<_64.SimulateRequest>): _64.SimulateRequest;
                fromAmino(object: _64.SimulateRequestAmino): _64.SimulateRequest;
                toAmino(message: _64.SimulateRequest): _64.SimulateRequestAmino;
                fromAminoMsg(object: _64.SimulateRequestAminoMsg): _64.SimulateRequest;
                toAminoMsg(message: _64.SimulateRequest): _64.SimulateRequestAminoMsg;
                fromProtoMsg(message: _64.SimulateRequestProtoMsg): _64.SimulateRequest;
                toProto(message: _64.SimulateRequest): Uint8Array;
                toProtoMsg(message: _64.SimulateRequest): _64.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _64.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.SimulateResponse;
                fromPartial(object: Partial<_64.SimulateResponse>): _64.SimulateResponse;
                fromAmino(object: _64.SimulateResponseAmino): _64.SimulateResponse;
                toAmino(message: _64.SimulateResponse): _64.SimulateResponseAmino;
                fromAminoMsg(object: _64.SimulateResponseAminoMsg): _64.SimulateResponse;
                toAminoMsg(message: _64.SimulateResponse): _64.SimulateResponseAminoMsg;
                fromProtoMsg(message: _64.SimulateResponseProtoMsg): _64.SimulateResponse;
                toProto(message: _64.SimulateResponse): Uint8Array;
                toProtoMsg(message: _64.SimulateResponse): _64.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _64.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.GetTxRequest;
                fromPartial(object: Partial<_64.GetTxRequest>): _64.GetTxRequest;
                fromAmino(object: _64.GetTxRequestAmino): _64.GetTxRequest;
                toAmino(message: _64.GetTxRequest): _64.GetTxRequestAmino;
                fromAminoMsg(object: _64.GetTxRequestAminoMsg): _64.GetTxRequest;
                toAminoMsg(message: _64.GetTxRequest): _64.GetTxRequestAminoMsg;
                fromProtoMsg(message: _64.GetTxRequestProtoMsg): _64.GetTxRequest;
                toProto(message: _64.GetTxRequest): Uint8Array;
                toProtoMsg(message: _64.GetTxRequest): _64.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _64.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.GetTxResponse;
                fromPartial(object: Partial<_64.GetTxResponse>): _64.GetTxResponse;
                fromAmino(object: _64.GetTxResponseAmino): _64.GetTxResponse;
                toAmino(message: _64.GetTxResponse): _64.GetTxResponseAmino;
                fromAminoMsg(object: _64.GetTxResponseAminoMsg): _64.GetTxResponse;
                toAminoMsg(message: _64.GetTxResponse): _64.GetTxResponseAminoMsg;
                fromProtoMsg(message: _64.GetTxResponseProtoMsg): _64.GetTxResponse;
                toProto(message: _64.GetTxResponse): Uint8Array;
                toProtoMsg(message: _64.GetTxResponse): _64.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _64.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_64.GetBlockWithTxsRequest>): _64.GetBlockWithTxsRequest;
                fromAmino(object: _64.GetBlockWithTxsRequestAmino): _64.GetBlockWithTxsRequest;
                toAmino(message: _64.GetBlockWithTxsRequest): _64.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _64.GetBlockWithTxsRequestAminoMsg): _64.GetBlockWithTxsRequest;
                toAminoMsg(message: _64.GetBlockWithTxsRequest): _64.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _64.GetBlockWithTxsRequestProtoMsg): _64.GetBlockWithTxsRequest;
                toProto(message: _64.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _64.GetBlockWithTxsRequest): _64.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _64.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_64.GetBlockWithTxsResponse>): _64.GetBlockWithTxsResponse;
                fromAmino(object: _64.GetBlockWithTxsResponseAmino): _64.GetBlockWithTxsResponse;
                toAmino(message: _64.GetBlockWithTxsResponse): _64.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _64.GetBlockWithTxsResponseAminoMsg): _64.GetBlockWithTxsResponse;
                toAminoMsg(message: _64.GetBlockWithTxsResponse): _64.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _64.GetBlockWithTxsResponseProtoMsg): _64.GetBlockWithTxsResponse;
                toProto(message: _64.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _64.GetBlockWithTxsResponse): _64.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _151.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _66.QueryCurrentPlanRequest): Promise<_66.QueryCurrentPlanResponse>;
                appliedPlan(request: _66.QueryAppliedPlanRequest): Promise<_66.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _66.QueryUpgradedConsensusStateRequest): Promise<_66.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _66.QueryModuleVersionsRequest): Promise<_66.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _136.LCDQueryClient;
            Plan: {
                typeUrl: string;
                encode(message: _67.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.Plan;
                fromPartial(object: Partial<_67.Plan>): _67.Plan;
                fromAmino(object: _67.PlanAmino): _67.Plan;
                toAmino(message: _67.Plan): _67.PlanAmino;
                fromAminoMsg(object: _67.PlanAminoMsg): _67.Plan;
                toAminoMsg(message: _67.Plan): _67.PlanAminoMsg;
                fromProtoMsg(message: _67.PlanProtoMsg): _67.Plan;
                toProto(message: _67.Plan): Uint8Array;
                toProtoMsg(message: _67.Plan): _67.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _67.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_67.SoftwareUpgradeProposal>): _67.SoftwareUpgradeProposal;
                fromAmino(object: _67.SoftwareUpgradeProposalAmino): _67.SoftwareUpgradeProposal;
                toAmino(message: _67.SoftwareUpgradeProposal): _67.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _67.SoftwareUpgradeProposalAminoMsg): _67.SoftwareUpgradeProposal;
                toAminoMsg(message: _67.SoftwareUpgradeProposal): _67.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _67.SoftwareUpgradeProposalProtoMsg): _67.SoftwareUpgradeProposal;
                toProto(message: _67.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _67.SoftwareUpgradeProposal): _67.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _67.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_67.CancelSoftwareUpgradeProposal>): _67.CancelSoftwareUpgradeProposal;
                fromAmino(object: _67.CancelSoftwareUpgradeProposalAmino): _67.CancelSoftwareUpgradeProposal;
                toAmino(message: _67.CancelSoftwareUpgradeProposal): _67.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _67.CancelSoftwareUpgradeProposalAminoMsg): _67.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _67.CancelSoftwareUpgradeProposal): _67.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _67.CancelSoftwareUpgradeProposalProtoMsg): _67.CancelSoftwareUpgradeProposal;
                toProto(message: _67.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _67.CancelSoftwareUpgradeProposal): _67.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _67.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.ModuleVersion;
                fromPartial(object: Partial<_67.ModuleVersion>): _67.ModuleVersion;
                fromAmino(object: _67.ModuleVersionAmino): _67.ModuleVersion;
                toAmino(message: _67.ModuleVersion): _67.ModuleVersionAmino;
                fromAminoMsg(object: _67.ModuleVersionAminoMsg): _67.ModuleVersion;
                toAminoMsg(message: _67.ModuleVersion): _67.ModuleVersionAminoMsg;
                fromProtoMsg(message: _67.ModuleVersionProtoMsg): _67.ModuleVersion;
                toProto(message: _67.ModuleVersion): Uint8Array;
                toProtoMsg(message: _67.ModuleVersion): _67.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _66.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _66.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_66.QueryCurrentPlanRequest>): _66.QueryCurrentPlanRequest;
                fromAmino(_: _66.QueryCurrentPlanRequestAmino): _66.QueryCurrentPlanRequest;
                toAmino(_: _66.QueryCurrentPlanRequest): _66.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _66.QueryCurrentPlanRequestAminoMsg): _66.QueryCurrentPlanRequest;
                toAminoMsg(message: _66.QueryCurrentPlanRequest): _66.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _66.QueryCurrentPlanRequestProtoMsg): _66.QueryCurrentPlanRequest;
                toProto(message: _66.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _66.QueryCurrentPlanRequest): _66.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _66.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_66.QueryCurrentPlanResponse>): _66.QueryCurrentPlanResponse;
                fromAmino(object: _66.QueryCurrentPlanResponseAmino): _66.QueryCurrentPlanResponse;
                toAmino(message: _66.QueryCurrentPlanResponse): _66.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _66.QueryCurrentPlanResponseAminoMsg): _66.QueryCurrentPlanResponse;
                toAminoMsg(message: _66.QueryCurrentPlanResponse): _66.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _66.QueryCurrentPlanResponseProtoMsg): _66.QueryCurrentPlanResponse;
                toProto(message: _66.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _66.QueryCurrentPlanResponse): _66.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _66.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_66.QueryAppliedPlanRequest>): _66.QueryAppliedPlanRequest;
                fromAmino(object: _66.QueryAppliedPlanRequestAmino): _66.QueryAppliedPlanRequest;
                toAmino(message: _66.QueryAppliedPlanRequest): _66.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _66.QueryAppliedPlanRequestAminoMsg): _66.QueryAppliedPlanRequest;
                toAminoMsg(message: _66.QueryAppliedPlanRequest): _66.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _66.QueryAppliedPlanRequestProtoMsg): _66.QueryAppliedPlanRequest;
                toProto(message: _66.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _66.QueryAppliedPlanRequest): _66.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _66.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_66.QueryAppliedPlanResponse>): _66.QueryAppliedPlanResponse;
                fromAmino(object: _66.QueryAppliedPlanResponseAmino): _66.QueryAppliedPlanResponse;
                toAmino(message: _66.QueryAppliedPlanResponse): _66.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _66.QueryAppliedPlanResponseAminoMsg): _66.QueryAppliedPlanResponse;
                toAminoMsg(message: _66.QueryAppliedPlanResponse): _66.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _66.QueryAppliedPlanResponseProtoMsg): _66.QueryAppliedPlanResponse;
                toProto(message: _66.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _66.QueryAppliedPlanResponse): _66.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _66.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_66.QueryUpgradedConsensusStateRequest>): _66.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _66.QueryUpgradedConsensusStateRequestAmino): _66.QueryUpgradedConsensusStateRequest;
                toAmino(message: _66.QueryUpgradedConsensusStateRequest): _66.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _66.QueryUpgradedConsensusStateRequestAminoMsg): _66.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _66.QueryUpgradedConsensusStateRequest): _66.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _66.QueryUpgradedConsensusStateRequestProtoMsg): _66.QueryUpgradedConsensusStateRequest;
                toProto(message: _66.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _66.QueryUpgradedConsensusStateRequest): _66.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _66.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_66.QueryUpgradedConsensusStateResponse>): _66.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _66.QueryUpgradedConsensusStateResponseAmino): _66.QueryUpgradedConsensusStateResponse;
                toAmino(message: _66.QueryUpgradedConsensusStateResponse): _66.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _66.QueryUpgradedConsensusStateResponseAminoMsg): _66.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _66.QueryUpgradedConsensusStateResponse): _66.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _66.QueryUpgradedConsensusStateResponseProtoMsg): _66.QueryUpgradedConsensusStateResponse;
                toProto(message: _66.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _66.QueryUpgradedConsensusStateResponse): _66.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _66.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_66.QueryModuleVersionsRequest>): _66.QueryModuleVersionsRequest;
                fromAmino(object: _66.QueryModuleVersionsRequestAmino): _66.QueryModuleVersionsRequest;
                toAmino(message: _66.QueryModuleVersionsRequest): _66.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _66.QueryModuleVersionsRequestAminoMsg): _66.QueryModuleVersionsRequest;
                toAminoMsg(message: _66.QueryModuleVersionsRequest): _66.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryModuleVersionsRequestProtoMsg): _66.QueryModuleVersionsRequest;
                toProto(message: _66.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryModuleVersionsRequest): _66.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _66.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_66.QueryModuleVersionsResponse>): _66.QueryModuleVersionsResponse;
                fromAmino(object: _66.QueryModuleVersionsResponseAmino): _66.QueryModuleVersionsResponse;
                toAmino(message: _66.QueryModuleVersionsResponse): _66.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _66.QueryModuleVersionsResponseAminoMsg): _66.QueryModuleVersionsResponse;
                toAminoMsg(message: _66.QueryModuleVersionsResponse): _66.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryModuleVersionsResponseProtoMsg): _66.QueryModuleVersionsResponse;
                toProto(message: _66.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryModuleVersionsResponse): _66.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _161.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _68.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _68.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _68.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _68.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _68.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _68.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _68.MsgCreateVestingAccount) => _68.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _68.MsgCreateVestingAccountAmino) => _68.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _69.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.BaseVestingAccount;
                fromPartial(object: Partial<_69.BaseVestingAccount>): _69.BaseVestingAccount;
                fromAmino(object: _69.BaseVestingAccountAmino): _69.BaseVestingAccount;
                toAmino(message: _69.BaseVestingAccount): _69.BaseVestingAccountAmino;
                fromAminoMsg(object: _69.BaseVestingAccountAminoMsg): _69.BaseVestingAccount;
                toAminoMsg(message: _69.BaseVestingAccount): _69.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _69.BaseVestingAccountProtoMsg): _69.BaseVestingAccount;
                toProto(message: _69.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _69.BaseVestingAccount): _69.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _69.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.ContinuousVestingAccount;
                fromPartial(object: Partial<_69.ContinuousVestingAccount>): _69.ContinuousVestingAccount;
                fromAmino(object: _69.ContinuousVestingAccountAmino): _69.ContinuousVestingAccount;
                toAmino(message: _69.ContinuousVestingAccount): _69.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _69.ContinuousVestingAccountAminoMsg): _69.ContinuousVestingAccount;
                toAminoMsg(message: _69.ContinuousVestingAccount): _69.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _69.ContinuousVestingAccountProtoMsg): _69.ContinuousVestingAccount;
                toProto(message: _69.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _69.ContinuousVestingAccount): _69.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _69.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.DelayedVestingAccount;
                fromPartial(object: Partial<_69.DelayedVestingAccount>): _69.DelayedVestingAccount;
                fromAmino(object: _69.DelayedVestingAccountAmino): _69.DelayedVestingAccount;
                toAmino(message: _69.DelayedVestingAccount): _69.DelayedVestingAccountAmino;
                fromAminoMsg(object: _69.DelayedVestingAccountAminoMsg): _69.DelayedVestingAccount;
                toAminoMsg(message: _69.DelayedVestingAccount): _69.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _69.DelayedVestingAccountProtoMsg): _69.DelayedVestingAccount;
                toProto(message: _69.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _69.DelayedVestingAccount): _69.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _69.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.Period;
                fromPartial(object: Partial<_69.Period>): _69.Period;
                fromAmino(object: _69.PeriodAmino): _69.Period;
                toAmino(message: _69.Period): _69.PeriodAmino;
                fromAminoMsg(object: _69.PeriodAminoMsg): _69.Period;
                toAminoMsg(message: _69.Period): _69.PeriodAminoMsg;
                fromProtoMsg(message: _69.PeriodProtoMsg): _69.Period;
                toProto(message: _69.Period): Uint8Array;
                toProtoMsg(message: _69.Period): _69.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _69.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.PeriodicVestingAccount;
                fromPartial(object: Partial<_69.PeriodicVestingAccount>): _69.PeriodicVestingAccount;
                fromAmino(object: _69.PeriodicVestingAccountAmino): _69.PeriodicVestingAccount;
                toAmino(message: _69.PeriodicVestingAccount): _69.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _69.PeriodicVestingAccountAminoMsg): _69.PeriodicVestingAccount;
                toAminoMsg(message: _69.PeriodicVestingAccount): _69.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _69.PeriodicVestingAccountProtoMsg): _69.PeriodicVestingAccount;
                toProto(message: _69.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _69.PeriodicVestingAccount): _69.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _69.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.PermanentLockedAccount;
                fromPartial(object: Partial<_69.PermanentLockedAccount>): _69.PermanentLockedAccount;
                fromAmino(object: _69.PermanentLockedAccountAmino): _69.PermanentLockedAccount;
                toAmino(message: _69.PermanentLockedAccount): _69.PermanentLockedAccountAmino;
                fromAminoMsg(object: _69.PermanentLockedAccountAminoMsg): _69.PermanentLockedAccount;
                toAminoMsg(message: _69.PermanentLockedAccount): _69.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _69.PermanentLockedAccountProtoMsg): _69.PermanentLockedAccount;
                toProto(message: _69.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _69.PermanentLockedAccount): _69.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _68.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgCreateVestingAccount;
                fromPartial(object: Partial<_68.MsgCreateVestingAccount>): _68.MsgCreateVestingAccount;
                fromAmino(object: _68.MsgCreateVestingAccountAmino): _68.MsgCreateVestingAccount;
                toAmino(message: _68.MsgCreateVestingAccount): _68.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _68.MsgCreateVestingAccountAminoMsg): _68.MsgCreateVestingAccount;
                toAminoMsg(message: _68.MsgCreateVestingAccount): _68.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _68.MsgCreateVestingAccountProtoMsg): _68.MsgCreateVestingAccount;
                toProto(message: _68.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _68.MsgCreateVestingAccount): _68.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _68.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_68.MsgCreateVestingAccountResponse>): _68.MsgCreateVestingAccountResponse;
                fromAmino(_: _68.MsgCreateVestingAccountResponseAmino): _68.MsgCreateVestingAccountResponse;
                toAmino(_: _68.MsgCreateVestingAccountResponse): _68.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _68.MsgCreateVestingAccountResponseAminoMsg): _68.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _68.MsgCreateVestingAccountResponse): _68.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _68.MsgCreateVestingAccountResponseProtoMsg): _68.MsgCreateVestingAccountResponse;
                toProto(message: _68.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _68.MsgCreateVestingAccountResponse): _68.MsgCreateVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _152.MsgClientImpl;
                };
                bank: {
                    v1beta1: _153.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _154.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _155.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _156.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _157.MsgClientImpl;
                };
                gov: {
                    v1beta1: _158.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _159.MsgClientImpl;
                };
                staking: {
                    v1beta1: _160.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _161.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _2.QueryAccountsRequest): Promise<_2.QueryAccountsResponse>;
                        account(request: _2.QueryAccountRequest): Promise<_2.QueryAccountResponse>;
                        params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                        moduleAccountByName(request: _2.QueryModuleAccountByNameRequest): Promise<_2.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _6.QueryGrantsRequest): Promise<_6.QueryGrantsResponse>;
                        granterGrants(request: _6.QueryGranterGrantsRequest): Promise<_6.QueryGranterGrantsResponse>;
                        granteeGrants(request: _6.QueryGranteeGrantsRequest): Promise<_6.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _11.QueryBalanceRequest): Promise<_11.QueryBalanceResponse>;
                        allBalances(request: _11.QueryAllBalancesRequest): Promise<_11.QueryAllBalancesResponse>;
                        spendableBalances(request: _11.QuerySpendableBalancesRequest): Promise<_11.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _11.QueryTotalSupplyRequest): Promise<_11.QueryTotalSupplyResponse>;
                        supplyOf(request: _11.QuerySupplyOfRequest): Promise<_11.QuerySupplyOfResponse>;
                        params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                        denomMetadata(request: _11.QueryDenomMetadataRequest): Promise<_11.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _11.QueryDenomsMetadataRequest): Promise<_11.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _15.ConfigRequest): Promise<_15.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _22.GetNodeInfoRequest): Promise<_22.GetNodeInfoResponse>;
                            getSyncing(request?: _22.GetSyncingRequest): Promise<_22.GetSyncingResponse>;
                            getLatestBlock(request?: _22.GetLatestBlockRequest): Promise<_22.GetLatestBlockResponse>;
                            getBlockByHeight(request: _22.GetBlockByHeightRequest): Promise<_22.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _22.GetLatestValidatorSetRequest): Promise<_22.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _22.GetValidatorSetByHeightRequest): Promise<_22.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _34.QueryParamsRequest): Promise<_34.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _34.QueryValidatorOutstandingRewardsRequest): Promise<_34.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _34.QueryValidatorCommissionRequest): Promise<_34.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _34.QueryValidatorSlashesRequest): Promise<_34.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _34.QueryDelegationRewardsRequest): Promise<_34.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _34.QueryDelegationTotalRewardsRequest): Promise<_34.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _34.QueryDelegatorValidatorsRequest): Promise<_34.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _34.QueryDelegatorWithdrawAddressRequest): Promise<_34.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _34.QueryCommunityPoolRequest): Promise<_34.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _38.QueryEvidenceRequest): Promise<_38.QueryEvidenceResponse>;
                        allEvidence(request?: _38.QueryAllEvidenceRequest): Promise<_38.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _42.QueryAllowanceRequest): Promise<_42.QueryAllowanceResponse>;
                        allowances(request: _42.QueryAllowancesRequest): Promise<_42.QueryAllowancesResponse>;
                        allowancesByGranter(request: _42.QueryAllowancesByGranterRequest): Promise<_42.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _47.QueryProposalRequest): Promise<_47.QueryProposalResponse>;
                        proposals(request: _47.QueryProposalsRequest): Promise<_47.QueryProposalsResponse>;
                        vote(request: _47.QueryVoteRequest): Promise<_47.QueryVoteResponse>;
                        votes(request: _47.QueryVotesRequest): Promise<_47.QueryVotesResponse>;
                        params(request: _47.QueryParamsRequest): Promise<_47.QueryParamsResponse>;
                        deposit(request: _47.QueryDepositRequest): Promise<_47.QueryDepositResponse>;
                        deposits(request: _47.QueryDepositsRequest): Promise<_47.QueryDepositsResponse>;
                        tallyResult(request: _47.QueryTallyResultRequest): Promise<_47.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _51.QueryParamsRequest): Promise<_51.QueryParamsResponse>;
                        inflation(request?: _51.QueryInflationRequest): Promise<_51.QueryInflationResponse>;
                        annualProvisions(request?: _51.QueryAnnualProvisionsRequest): Promise<_51.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                        signingInfo(request: _55.QuerySigningInfoRequest): Promise<_55.QuerySigningInfoResponse>;
                        signingInfos(request?: _55.QuerySigningInfosRequest): Promise<_55.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _60.QueryValidatorsRequest): Promise<_60.QueryValidatorsResponse>;
                        validator(request: _60.QueryValidatorRequest): Promise<_60.QueryValidatorResponse>;
                        validatorDelegations(request: _60.QueryValidatorDelegationsRequest): Promise<_60.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _60.QueryValidatorUnbondingDelegationsRequest): Promise<_60.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _60.QueryDelegationRequest): Promise<_60.QueryDelegationResponse>;
                        unbondingDelegation(request: _60.QueryUnbondingDelegationRequest): Promise<_60.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _60.QueryDelegatorDelegationsRequest): Promise<_60.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _60.QueryDelegatorUnbondingDelegationsRequest): Promise<_60.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _60.QueryRedelegationsRequest): Promise<_60.QueryRedelegationsResponse>;
                        delegatorValidators(request: _60.QueryDelegatorValidatorsRequest): Promise<_60.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _60.QueryDelegatorValidatorRequest): Promise<_60.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _60.QueryHistoricalInfoRequest): Promise<_60.QueryHistoricalInfoResponse>;
                        pool(request?: _60.QueryPoolRequest): Promise<_60.QueryPoolResponse>;
                        params(request?: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _64.SimulateRequest): Promise<_64.SimulateResponse>;
                        getTx(request: _64.GetTxRequest): Promise<_64.GetTxResponse>;
                        broadcastTx(request: _64.BroadcastTxRequest): Promise<_64.BroadcastTxResponse>;
                        getTxsEvent(request: _64.GetTxsEventRequest): Promise<_64.GetTxsEventResponse>;
                        getBlockWithTxs(request: _64.GetBlockWithTxsRequest): Promise<_64.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _66.QueryCurrentPlanRequest): Promise<_66.QueryCurrentPlanResponse>;
                        appliedPlan(request: _66.QueryAppliedPlanRequest): Promise<_66.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _66.QueryUpgradedConsensusStateRequest): Promise<_66.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _66.QueryModuleVersionsRequest): Promise<_66.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _122.LCDQueryClient;
                };
                authz: {
                    v1beta1: _123.LCDQueryClient;
                };
                bank: {
                    v1beta1: _124.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _125.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _126.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _127.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _128.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _129.LCDQueryClient;
                };
                gov: {
                    v1beta1: _130.LCDQueryClient;
                };
                mint: {
                    v1beta1: _131.LCDQueryClient;
                };
                params: {
                    v1beta1: _132.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _133.LCDQueryClient;
                };
                staking: {
                    v1beta1: _134.LCDQueryClient;
                };
                tx: {
                    v1beta1: _135.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _136.LCDQueryClient;
                };
            };
        }>;
    };
}
