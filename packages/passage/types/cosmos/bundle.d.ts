import * as _5 from "./auth/v1beta1/auth";
import * as _6 from "./auth/v1beta1/genesis";
import * as _7 from "./auth/v1beta1/query";
import * as _8 from "./authz/v1beta1/authz";
import * as _9 from "./authz/v1beta1/event";
import * as _10 from "./authz/v1beta1/genesis";
import * as _11 from "./authz/v1beta1/query";
import * as _12 from "./authz/v1beta1/tx";
import * as _13 from "./bank/v1beta1/authz";
import * as _14 from "./bank/v1beta1/bank";
import * as _15 from "./bank/v1beta1/genesis";
import * as _16 from "./bank/v1beta1/query";
import * as _17 from "./bank/v1beta1/tx";
import * as _18 from "./base/abci/v1beta1/abci";
import * as _19 from "./base/kv/v1beta1/kv";
import * as _20 from "./base/node/v1beta1/query";
import * as _21 from "./base/query/v1beta1/pagination";
import * as _22 from "./base/reflection/v1beta1/reflection";
import * as _23 from "./base/reflection/v2alpha1/reflection";
import * as _24 from "./base/snapshots/v1beta1/snapshot";
import * as _25 from "./base/store/v1beta1/commit_info";
import * as _26 from "./base/store/v1beta1/listening";
import * as _27 from "./base/tendermint/v1beta1/query";
import * as _28 from "./base/v1beta1/coin";
import * as _29 from "./capability/v1beta1/capability";
import * as _30 from "./capability/v1beta1/genesis";
import * as _31 from "./crisis/v1beta1/genesis";
import * as _32 from "./crisis/v1beta1/tx";
import * as _33 from "./crypto/ed25519/keys";
import * as _34 from "./crypto/multisig/keys";
import * as _35 from "./crypto/secp256k1/keys";
import * as _36 from "./crypto/secp256r1/keys";
import * as _37 from "./distribution/v1beta1/distribution";
import * as _38 from "./distribution/v1beta1/genesis";
import * as _39 from "./distribution/v1beta1/query";
import * as _40 from "./distribution/v1beta1/tx";
import * as _41 from "./evidence/v1beta1/evidence";
import * as _42 from "./evidence/v1beta1/genesis";
import * as _43 from "./evidence/v1beta1/query";
import * as _44 from "./evidence/v1beta1/tx";
import * as _45 from "./feegrant/v1beta1/feegrant";
import * as _46 from "./feegrant/v1beta1/genesis";
import * as _47 from "./feegrant/v1beta1/query";
import * as _48 from "./feegrant/v1beta1/tx";
import * as _49 from "./genutil/v1beta1/genesis";
import * as _50 from "./gov/v1beta1/genesis";
import * as _51 from "./gov/v1beta1/gov";
import * as _52 from "./gov/v1beta1/query";
import * as _53 from "./gov/v1beta1/tx";
import * as _54 from "./mint/v1beta1/genesis";
import * as _55 from "./mint/v1beta1/mint";
import * as _56 from "./mint/v1beta1/query";
import * as _57 from "./params/v1beta1/params";
import * as _58 from "./params/v1beta1/query";
import * as _59 from "./slashing/v1beta1/genesis";
import * as _60 from "./slashing/v1beta1/query";
import * as _61 from "./slashing/v1beta1/slashing";
import * as _62 from "./slashing/v1beta1/tx";
import * as _63 from "./staking/v1beta1/authz";
import * as _64 from "./staking/v1beta1/genesis";
import * as _65 from "./staking/v1beta1/query";
import * as _66 from "./staking/v1beta1/staking";
import * as _67 from "./staking/v1beta1/tx";
import * as _68 from "./tx/signing/v1beta1/signing";
import * as _69 from "./tx/v1beta1/service";
import * as _70 from "./tx/v1beta1/tx";
import * as _71 from "./upgrade/v1beta1/query";
import * as _72 from "./upgrade/v1beta1/upgrade";
import * as _73 from "./vesting/v1beta1/tx";
import * as _74 from "./vesting/v1beta1/vesting";
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
                accounts(request?: _7.QueryAccountsRequest): Promise<_7.QueryAccountsResponse>;
                account(request: _7.QueryAccountRequest): Promise<_7.QueryAccountResponse>;
                params(request?: _7.QueryParamsRequest): Promise<_7.QueryParamsResponse>;
                moduleAccountByName(request: _7.QueryModuleAccountByNameRequest): Promise<_7.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _126.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _7.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryAccountsRequest;
                fromPartial(object: Partial<_7.QueryAccountsRequest>): _7.QueryAccountsRequest;
                fromAmino(object: _7.QueryAccountsRequestAmino): _7.QueryAccountsRequest;
                toAmino(message: _7.QueryAccountsRequest): _7.QueryAccountsRequestAmino;
                fromAminoMsg(object: _7.QueryAccountsRequestAminoMsg): _7.QueryAccountsRequest;
                toAminoMsg(message: _7.QueryAccountsRequest): _7.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _7.QueryAccountsRequestProtoMsg): _7.QueryAccountsRequest;
                toProto(message: _7.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _7.QueryAccountsRequest): _7.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _7.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryAccountsResponse;
                fromPartial(object: Partial<_7.QueryAccountsResponse>): _7.QueryAccountsResponse;
                fromAmino(object: _7.QueryAccountsResponseAmino): _7.QueryAccountsResponse;
                toAmino(message: _7.QueryAccountsResponse): _7.QueryAccountsResponseAmino;
                fromAminoMsg(object: _7.QueryAccountsResponseAminoMsg): _7.QueryAccountsResponse;
                toAminoMsg(message: _7.QueryAccountsResponse): _7.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _7.QueryAccountsResponseProtoMsg): _7.QueryAccountsResponse;
                toProto(message: _7.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _7.QueryAccountsResponse): _7.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _7.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryAccountRequest;
                fromPartial(object: Partial<_7.QueryAccountRequest>): _7.QueryAccountRequest;
                fromAmino(object: _7.QueryAccountRequestAmino): _7.QueryAccountRequest;
                toAmino(message: _7.QueryAccountRequest): _7.QueryAccountRequestAmino;
                fromAminoMsg(object: _7.QueryAccountRequestAminoMsg): _7.QueryAccountRequest;
                toAminoMsg(message: _7.QueryAccountRequest): _7.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _7.QueryAccountRequestProtoMsg): _7.QueryAccountRequest;
                toProto(message: _7.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _7.QueryAccountRequest): _7.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _7.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryAccountResponse;
                fromPartial(object: Partial<_7.QueryAccountResponse>): _7.QueryAccountResponse;
                fromAmino(object: _7.QueryAccountResponseAmino): _7.QueryAccountResponse;
                toAmino(message: _7.QueryAccountResponse): _7.QueryAccountResponseAmino;
                fromAminoMsg(object: _7.QueryAccountResponseAminoMsg): _7.QueryAccountResponse;
                toAminoMsg(message: _7.QueryAccountResponse): _7.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _7.QueryAccountResponseProtoMsg): _7.QueryAccountResponse;
                toProto(message: _7.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _7.QueryAccountResponse): _7.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _7.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.QueryParamsRequest;
                fromPartial(_: Partial<_7.QueryParamsRequest>): _7.QueryParamsRequest;
                fromAmino(_: _7.QueryParamsRequestAmino): _7.QueryParamsRequest;
                toAmino(_: _7.QueryParamsRequest): _7.QueryParamsRequestAmino;
                fromAminoMsg(object: _7.QueryParamsRequestAminoMsg): _7.QueryParamsRequest;
                toAminoMsg(message: _7.QueryParamsRequest): _7.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _7.QueryParamsRequestProtoMsg): _7.QueryParamsRequest;
                toProto(message: _7.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _7.QueryParamsRequest): _7.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _7.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryParamsResponse;
                fromPartial(object: Partial<_7.QueryParamsResponse>): _7.QueryParamsResponse;
                fromAmino(object: _7.QueryParamsResponseAmino): _7.QueryParamsResponse;
                toAmino(message: _7.QueryParamsResponse): _7.QueryParamsResponseAmino;
                fromAminoMsg(object: _7.QueryParamsResponseAminoMsg): _7.QueryParamsResponse;
                toAminoMsg(message: _7.QueryParamsResponse): _7.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _7.QueryParamsResponseProtoMsg): _7.QueryParamsResponse;
                toProto(message: _7.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _7.QueryParamsResponse): _7.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _7.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_7.QueryModuleAccountByNameRequest>): _7.QueryModuleAccountByNameRequest;
                fromAmino(object: _7.QueryModuleAccountByNameRequestAmino): _7.QueryModuleAccountByNameRequest;
                toAmino(message: _7.QueryModuleAccountByNameRequest): _7.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _7.QueryModuleAccountByNameRequestAminoMsg): _7.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _7.QueryModuleAccountByNameRequest): _7.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _7.QueryModuleAccountByNameRequestProtoMsg): _7.QueryModuleAccountByNameRequest;
                toProto(message: _7.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _7.QueryModuleAccountByNameRequest): _7.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _7.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_7.QueryModuleAccountByNameResponse>): _7.QueryModuleAccountByNameResponse;
                fromAmino(object: _7.QueryModuleAccountByNameResponseAmino): _7.QueryModuleAccountByNameResponse;
                toAmino(message: _7.QueryModuleAccountByNameResponse): _7.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _7.QueryModuleAccountByNameResponseAminoMsg): _7.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _7.QueryModuleAccountByNameResponse): _7.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _7.QueryModuleAccountByNameResponseProtoMsg): _7.QueryModuleAccountByNameResponse;
                toProto(message: _7.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _7.QueryModuleAccountByNameResponse): _7.QueryModuleAccountByNameResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _5.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _5.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _6.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.GenesisState;
                fromPartial(object: Partial<_6.GenesisState>): _6.GenesisState;
                fromAmino(object: _6.GenesisStateAmino): _6.GenesisState;
                toAmino(message: _6.GenesisState): _6.GenesisStateAmino;
                fromAminoMsg(object: _6.GenesisStateAminoMsg): _6.GenesisState;
                toAminoMsg(message: _6.GenesisState): _6.GenesisStateAminoMsg;
                fromProtoMsg(message: _6.GenesisStateProtoMsg): _6.GenesisState;
                toProto(message: _6.GenesisState): Uint8Array;
                toProtoMsg(message: _6.GenesisState): _6.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _5.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.BaseAccount;
                fromPartial(object: Partial<_5.BaseAccount>): _5.BaseAccount;
                fromAmino(object: _5.BaseAccountAmino): _5.BaseAccount;
                toAmino(message: _5.BaseAccount): _5.BaseAccountAmino;
                fromAminoMsg(object: _5.BaseAccountAminoMsg): _5.BaseAccount;
                toAminoMsg(message: _5.BaseAccount): _5.BaseAccountAminoMsg;
                fromProtoMsg(message: _5.BaseAccountProtoMsg): _5.BaseAccount;
                toProto(message: _5.BaseAccount): Uint8Array;
                toProtoMsg(message: _5.BaseAccount): _5.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _5.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.ModuleAccount;
                fromPartial(object: Partial<_5.ModuleAccount>): _5.ModuleAccount;
                fromAmino(object: _5.ModuleAccountAmino): _5.ModuleAccount;
                toAmino(message: _5.ModuleAccount): _5.ModuleAccountAmino;
                fromAminoMsg(object: _5.ModuleAccountAminoMsg): _5.ModuleAccount;
                toAminoMsg(message: _5.ModuleAccount): _5.ModuleAccountAminoMsg;
                fromProtoMsg(message: _5.ModuleAccountProtoMsg): _5.ModuleAccount;
                toProto(message: _5.ModuleAccount): Uint8Array;
                toProtoMsg(message: _5.ModuleAccount): _5.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _5.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.Params;
                fromPartial(object: Partial<_5.Params>): _5.Params;
                fromAmino(object: _5.ParamsAmino): _5.Params;
                toAmino(message: _5.Params): _5.ParamsAmino;
                fromAminoMsg(object: _5.ParamsAminoMsg): _5.Params;
                toAminoMsg(message: _5.Params): _5.ParamsAminoMsg;
                fromProtoMsg(message: _5.ParamsProtoMsg): _5.Params;
                toProto(message: _5.Params): Uint8Array;
                toProtoMsg(message: _5.Params): _5.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _156.MsgClientImpl;
            QueryClientImpl: typeof _142.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _11.QueryGrantsRequest): Promise<_11.QueryGrantsResponse>;
                granterGrants(request: _11.QueryGranterGrantsRequest): Promise<_11.QueryGranterGrantsResponse>;
                granteeGrants(request: _11.QueryGranteeGrantsRequest): Promise<_11.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _127.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _12.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _12.MsgGrant): {
                        typeUrl: string;
                        value: _12.MsgGrant;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: _12.MsgExec;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: _12.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _12.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _12.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _12.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _12.MsgGrant): {
                        typeUrl: string;
                        value: _12.MsgGrant;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: _12.MsgExec;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: _12.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _12.MsgGrant) => _12.MsgGrantAmino;
                    fromAmino: (object: _12.MsgGrantAmino) => _12.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _12.MsgExec) => _12.MsgExecAmino;
                    fromAmino: (object: _12.MsgExecAmino) => _12.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _12.MsgRevoke) => _12.MsgRevokeAmino;
                    fromAmino: (object: _12.MsgRevokeAmino) => _12.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _12.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.MsgGrant;
                fromPartial(object: Partial<_12.MsgGrant>): _12.MsgGrant;
                fromAmino(object: _12.MsgGrantAmino): _12.MsgGrant;
                toAmino(message: _12.MsgGrant): _12.MsgGrantAmino;
                fromAminoMsg(object: _12.MsgGrantAminoMsg): _12.MsgGrant;
                toAminoMsg(message: _12.MsgGrant): _12.MsgGrantAminoMsg;
                fromProtoMsg(message: _12.MsgGrantProtoMsg): _12.MsgGrant;
                toProto(message: _12.MsgGrant): Uint8Array;
                toProtoMsg(message: _12.MsgGrant): _12.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _12.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.MsgExecResponse;
                fromPartial(object: Partial<_12.MsgExecResponse>): _12.MsgExecResponse;
                fromAmino(object: _12.MsgExecResponseAmino): _12.MsgExecResponse;
                toAmino(message: _12.MsgExecResponse): _12.MsgExecResponseAmino;
                fromAminoMsg(object: _12.MsgExecResponseAminoMsg): _12.MsgExecResponse;
                toAminoMsg(message: _12.MsgExecResponse): _12.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _12.MsgExecResponseProtoMsg): _12.MsgExecResponse;
                toProto(message: _12.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _12.MsgExecResponse): _12.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _12.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.MsgExec;
                fromPartial(object: Partial<_12.MsgExec>): _12.MsgExec;
                fromAmino(object: _12.MsgExecAmino): _12.MsgExec;
                toAmino(message: _12.MsgExec): _12.MsgExecAmino;
                fromAminoMsg(object: _12.MsgExecAminoMsg): _12.MsgExec;
                toAminoMsg(message: _12.MsgExec): _12.MsgExecAminoMsg;
                fromProtoMsg(message: _12.MsgExecProtoMsg): _12.MsgExec;
                toProto(message: _12.MsgExec): Uint8Array;
                toProtoMsg(message: _12.MsgExec): _12.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _12.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.MsgGrantResponse;
                fromPartial(_: Partial<_12.MsgGrantResponse>): _12.MsgGrantResponse;
                fromAmino(_: _12.MsgGrantResponseAmino): _12.MsgGrantResponse;
                toAmino(_: _12.MsgGrantResponse): _12.MsgGrantResponseAmino;
                fromAminoMsg(object: _12.MsgGrantResponseAminoMsg): _12.MsgGrantResponse;
                toAminoMsg(message: _12.MsgGrantResponse): _12.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _12.MsgGrantResponseProtoMsg): _12.MsgGrantResponse;
                toProto(message: _12.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _12.MsgGrantResponse): _12.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _12.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.MsgRevoke;
                fromPartial(object: Partial<_12.MsgRevoke>): _12.MsgRevoke;
                fromAmino(object: _12.MsgRevokeAmino): _12.MsgRevoke;
                toAmino(message: _12.MsgRevoke): _12.MsgRevokeAmino;
                fromAminoMsg(object: _12.MsgRevokeAminoMsg): _12.MsgRevoke;
                toAminoMsg(message: _12.MsgRevoke): _12.MsgRevokeAminoMsg;
                fromProtoMsg(message: _12.MsgRevokeProtoMsg): _12.MsgRevoke;
                toProto(message: _12.MsgRevoke): Uint8Array;
                toProtoMsg(message: _12.MsgRevoke): _12.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _12.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.MsgRevokeResponse;
                fromPartial(_: Partial<_12.MsgRevokeResponse>): _12.MsgRevokeResponse;
                fromAmino(_: _12.MsgRevokeResponseAmino): _12.MsgRevokeResponse;
                toAmino(_: _12.MsgRevokeResponse): _12.MsgRevokeResponseAmino;
                fromAminoMsg(object: _12.MsgRevokeResponseAminoMsg): _12.MsgRevokeResponse;
                toAminoMsg(message: _12.MsgRevokeResponse): _12.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _12.MsgRevokeResponseProtoMsg): _12.MsgRevokeResponse;
                toProto(message: _12.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _12.MsgRevokeResponse): _12.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _11.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGrantsRequest;
                fromPartial(object: Partial<_11.QueryGrantsRequest>): _11.QueryGrantsRequest;
                fromAmino(object: _11.QueryGrantsRequestAmino): _11.QueryGrantsRequest;
                toAmino(message: _11.QueryGrantsRequest): _11.QueryGrantsRequestAmino;
                fromAminoMsg(object: _11.QueryGrantsRequestAminoMsg): _11.QueryGrantsRequest;
                toAminoMsg(message: _11.QueryGrantsRequest): _11.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _11.QueryGrantsRequestProtoMsg): _11.QueryGrantsRequest;
                toProto(message: _11.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGrantsRequest): _11.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _11.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGrantsResponse;
                fromPartial(object: Partial<_11.QueryGrantsResponse>): _11.QueryGrantsResponse;
                fromAmino(object: _11.QueryGrantsResponseAmino): _11.QueryGrantsResponse;
                toAmino(message: _11.QueryGrantsResponse): _11.QueryGrantsResponseAmino;
                fromAminoMsg(object: _11.QueryGrantsResponseAminoMsg): _11.QueryGrantsResponse;
                toAminoMsg(message: _11.QueryGrantsResponse): _11.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _11.QueryGrantsResponseProtoMsg): _11.QueryGrantsResponse;
                toProto(message: _11.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGrantsResponse): _11.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _11.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_11.QueryGranterGrantsRequest>): _11.QueryGranterGrantsRequest;
                fromAmino(object: _11.QueryGranterGrantsRequestAmino): _11.QueryGranterGrantsRequest;
                toAmino(message: _11.QueryGranterGrantsRequest): _11.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _11.QueryGranterGrantsRequestAminoMsg): _11.QueryGranterGrantsRequest;
                toAminoMsg(message: _11.QueryGranterGrantsRequest): _11.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _11.QueryGranterGrantsRequestProtoMsg): _11.QueryGranterGrantsRequest;
                toProto(message: _11.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGranterGrantsRequest): _11.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _11.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_11.QueryGranterGrantsResponse>): _11.QueryGranterGrantsResponse;
                fromAmino(object: _11.QueryGranterGrantsResponseAmino): _11.QueryGranterGrantsResponse;
                toAmino(message: _11.QueryGranterGrantsResponse): _11.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _11.QueryGranterGrantsResponseAminoMsg): _11.QueryGranterGrantsResponse;
                toAminoMsg(message: _11.QueryGranterGrantsResponse): _11.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _11.QueryGranterGrantsResponseProtoMsg): _11.QueryGranterGrantsResponse;
                toProto(message: _11.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGranterGrantsResponse): _11.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _11.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_11.QueryGranteeGrantsRequest>): _11.QueryGranteeGrantsRequest;
                fromAmino(object: _11.QueryGranteeGrantsRequestAmino): _11.QueryGranteeGrantsRequest;
                toAmino(message: _11.QueryGranteeGrantsRequest): _11.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _11.QueryGranteeGrantsRequestAminoMsg): _11.QueryGranteeGrantsRequest;
                toAminoMsg(message: _11.QueryGranteeGrantsRequest): _11.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _11.QueryGranteeGrantsRequestProtoMsg): _11.QueryGranteeGrantsRequest;
                toProto(message: _11.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGranteeGrantsRequest): _11.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _11.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_11.QueryGranteeGrantsResponse>): _11.QueryGranteeGrantsResponse;
                fromAmino(object: _11.QueryGranteeGrantsResponseAmino): _11.QueryGranteeGrantsResponse;
                toAmino(message: _11.QueryGranteeGrantsResponse): _11.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _11.QueryGranteeGrantsResponseAminoMsg): _11.QueryGranteeGrantsResponse;
                toAminoMsg(message: _11.QueryGranteeGrantsResponse): _11.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _11.QueryGranteeGrantsResponseProtoMsg): _11.QueryGranteeGrantsResponse;
                toProto(message: _11.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGranteeGrantsResponse): _11.QueryGranteeGrantsResponseProtoMsg;
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
            EventGrant: {
                typeUrl: string;
                encode(message: _9.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.EventGrant;
                fromPartial(object: Partial<_9.EventGrant>): _9.EventGrant;
                fromAmino(object: _9.EventGrantAmino): _9.EventGrant;
                toAmino(message: _9.EventGrant): _9.EventGrantAmino;
                fromAminoMsg(object: _9.EventGrantAminoMsg): _9.EventGrant;
                toAminoMsg(message: _9.EventGrant): _9.EventGrantAminoMsg;
                fromProtoMsg(message: _9.EventGrantProtoMsg): _9.EventGrant;
                toProto(message: _9.EventGrant): Uint8Array;
                toProtoMsg(message: _9.EventGrant): _9.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _9.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.EventRevoke;
                fromPartial(object: Partial<_9.EventRevoke>): _9.EventRevoke;
                fromAmino(object: _9.EventRevokeAmino): _9.EventRevoke;
                toAmino(message: _9.EventRevoke): _9.EventRevokeAmino;
                fromAminoMsg(object: _9.EventRevokeAminoMsg): _9.EventRevoke;
                toAminoMsg(message: _9.EventRevoke): _9.EventRevokeAminoMsg;
                fromProtoMsg(message: _9.EventRevokeProtoMsg): _9.EventRevoke;
                toProto(message: _9.EventRevoke): Uint8Array;
                toProtoMsg(message: _9.EventRevoke): _9.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _8.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.GenericAuthorization;
                fromPartial(object: Partial<_8.GenericAuthorization>): _8.GenericAuthorization;
                fromAmino(object: _8.GenericAuthorizationAmino): _8.GenericAuthorization;
                toAmino(message: _8.GenericAuthorization): _8.GenericAuthorizationAmino;
                fromAminoMsg(object: _8.GenericAuthorizationAminoMsg): _8.GenericAuthorization;
                toAminoMsg(message: _8.GenericAuthorization): _8.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _8.GenericAuthorizationProtoMsg): _8.GenericAuthorization;
                toProto(message: _8.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _8.GenericAuthorization): _8.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _8.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.Grant;
                fromPartial(object: Partial<_8.Grant>): _8.Grant;
                fromAmino(object: _8.GrantAmino): _8.Grant;
                toAmino(message: _8.Grant): _8.GrantAmino;
                fromAminoMsg(object: _8.GrantAminoMsg): _8.Grant;
                toAminoMsg(message: _8.Grant): _8.GrantAminoMsg;
                fromProtoMsg(message: _8.GrantProtoMsg): _8.Grant;
                toProto(message: _8.Grant): Uint8Array;
                toProtoMsg(message: _8.Grant): _8.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _8.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.GrantAuthorization;
                fromPartial(object: Partial<_8.GrantAuthorization>): _8.GrantAuthorization;
                fromAmino(object: _8.GrantAuthorizationAmino): _8.GrantAuthorization;
                toAmino(message: _8.GrantAuthorization): _8.GrantAuthorizationAmino;
                fromAminoMsg(object: _8.GrantAuthorizationAminoMsg): _8.GrantAuthorization;
                toAminoMsg(message: _8.GrantAuthorization): _8.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _8.GrantAuthorizationProtoMsg): _8.GrantAuthorization;
                toProto(message: _8.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _8.GrantAuthorization): _8.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _13.SendAuthorization | _63.StakeAuthorization | _8.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _157.MsgClientImpl;
            QueryClientImpl: typeof _143.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _16.QueryBalanceRequest): Promise<_16.QueryBalanceResponse>;
                allBalances(request: _16.QueryAllBalancesRequest): Promise<_16.QueryAllBalancesResponse>;
                spendableBalances(request: _16.QuerySpendableBalancesRequest): Promise<_16.QuerySpendableBalancesResponse>;
                totalSupply(request?: _16.QueryTotalSupplyRequest): Promise<_16.QueryTotalSupplyResponse>;
                supplyOf(request: _16.QuerySupplyOfRequest): Promise<_16.QuerySupplyOfResponse>;
                params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
                denomMetadata(request: _16.QueryDenomMetadataRequest): Promise<_16.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _16.QueryDenomsMetadataRequest): Promise<_16.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _128.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _17.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _17.MsgSend): {
                        typeUrl: string;
                        value: _17.MsgSend;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: _17.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _17.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _17.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _17.MsgSend): {
                        typeUrl: string;
                        value: _17.MsgSend;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: _17.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _17.MsgSend) => _17.MsgSendAmino;
                    fromAmino: (object: _17.MsgSendAmino) => _17.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _17.MsgMultiSend) => _17.MsgMultiSendAmino;
                    fromAmino: (object: _17.MsgMultiSendAmino) => _17.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _17.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgSend;
                fromPartial(object: Partial<_17.MsgSend>): _17.MsgSend;
                fromAmino(object: _17.MsgSendAmino): _17.MsgSend;
                toAmino(message: _17.MsgSend): _17.MsgSendAmino;
                fromAminoMsg(object: _17.MsgSendAminoMsg): _17.MsgSend;
                toAminoMsg(message: _17.MsgSend): _17.MsgSendAminoMsg;
                fromProtoMsg(message: _17.MsgSendProtoMsg): _17.MsgSend;
                toProto(message: _17.MsgSend): Uint8Array;
                toProtoMsg(message: _17.MsgSend): _17.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _17.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgSendResponse;
                fromPartial(_: Partial<_17.MsgSendResponse>): _17.MsgSendResponse;
                fromAmino(_: _17.MsgSendResponseAmino): _17.MsgSendResponse;
                toAmino(_: _17.MsgSendResponse): _17.MsgSendResponseAmino;
                fromAminoMsg(object: _17.MsgSendResponseAminoMsg): _17.MsgSendResponse;
                toAminoMsg(message: _17.MsgSendResponse): _17.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _17.MsgSendResponseProtoMsg): _17.MsgSendResponse;
                toProto(message: _17.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _17.MsgSendResponse): _17.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _17.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgMultiSend;
                fromPartial(object: Partial<_17.MsgMultiSend>): _17.MsgMultiSend;
                fromAmino(object: _17.MsgMultiSendAmino): _17.MsgMultiSend;
                toAmino(message: _17.MsgMultiSend): _17.MsgMultiSendAmino;
                fromAminoMsg(object: _17.MsgMultiSendAminoMsg): _17.MsgMultiSend;
                toAminoMsg(message: _17.MsgMultiSend): _17.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _17.MsgMultiSendProtoMsg): _17.MsgMultiSend;
                toProto(message: _17.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _17.MsgMultiSend): _17.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _17.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgMultiSendResponse;
                fromPartial(_: Partial<_17.MsgMultiSendResponse>): _17.MsgMultiSendResponse;
                fromAmino(_: _17.MsgMultiSendResponseAmino): _17.MsgMultiSendResponse;
                toAmino(_: _17.MsgMultiSendResponse): _17.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _17.MsgMultiSendResponseAminoMsg): _17.MsgMultiSendResponse;
                toAminoMsg(message: _17.MsgMultiSendResponse): _17.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _17.MsgMultiSendResponseProtoMsg): _17.MsgMultiSendResponse;
                toProto(message: _17.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _17.MsgMultiSendResponse): _17.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _16.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryBalanceRequest;
                fromPartial(object: Partial<_16.QueryBalanceRequest>): _16.QueryBalanceRequest;
                fromAmino(object: _16.QueryBalanceRequestAmino): _16.QueryBalanceRequest;
                toAmino(message: _16.QueryBalanceRequest): _16.QueryBalanceRequestAmino;
                fromAminoMsg(object: _16.QueryBalanceRequestAminoMsg): _16.QueryBalanceRequest;
                toAminoMsg(message: _16.QueryBalanceRequest): _16.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _16.QueryBalanceRequestProtoMsg): _16.QueryBalanceRequest;
                toProto(message: _16.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _16.QueryBalanceRequest): _16.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _16.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryBalanceResponse;
                fromPartial(object: Partial<_16.QueryBalanceResponse>): _16.QueryBalanceResponse;
                fromAmino(object: _16.QueryBalanceResponseAmino): _16.QueryBalanceResponse;
                toAmino(message: _16.QueryBalanceResponse): _16.QueryBalanceResponseAmino;
                fromAminoMsg(object: _16.QueryBalanceResponseAminoMsg): _16.QueryBalanceResponse;
                toAminoMsg(message: _16.QueryBalanceResponse): _16.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _16.QueryBalanceResponseProtoMsg): _16.QueryBalanceResponse;
                toProto(message: _16.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _16.QueryBalanceResponse): _16.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _16.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryAllBalancesRequest;
                fromPartial(object: Partial<_16.QueryAllBalancesRequest>): _16.QueryAllBalancesRequest;
                fromAmino(object: _16.QueryAllBalancesRequestAmino): _16.QueryAllBalancesRequest;
                toAmino(message: _16.QueryAllBalancesRequest): _16.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _16.QueryAllBalancesRequestAminoMsg): _16.QueryAllBalancesRequest;
                toAminoMsg(message: _16.QueryAllBalancesRequest): _16.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _16.QueryAllBalancesRequestProtoMsg): _16.QueryAllBalancesRequest;
                toProto(message: _16.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _16.QueryAllBalancesRequest): _16.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _16.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryAllBalancesResponse;
                fromPartial(object: Partial<_16.QueryAllBalancesResponse>): _16.QueryAllBalancesResponse;
                fromAmino(object: _16.QueryAllBalancesResponseAmino): _16.QueryAllBalancesResponse;
                toAmino(message: _16.QueryAllBalancesResponse): _16.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _16.QueryAllBalancesResponseAminoMsg): _16.QueryAllBalancesResponse;
                toAminoMsg(message: _16.QueryAllBalancesResponse): _16.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _16.QueryAllBalancesResponseProtoMsg): _16.QueryAllBalancesResponse;
                toProto(message: _16.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _16.QueryAllBalancesResponse): _16.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _16.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_16.QuerySpendableBalancesRequest>): _16.QuerySpendableBalancesRequest;
                fromAmino(object: _16.QuerySpendableBalancesRequestAmino): _16.QuerySpendableBalancesRequest;
                toAmino(message: _16.QuerySpendableBalancesRequest): _16.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _16.QuerySpendableBalancesRequestAminoMsg): _16.QuerySpendableBalancesRequest;
                toAminoMsg(message: _16.QuerySpendableBalancesRequest): _16.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _16.QuerySpendableBalancesRequestProtoMsg): _16.QuerySpendableBalancesRequest;
                toProto(message: _16.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _16.QuerySpendableBalancesRequest): _16.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _16.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_16.QuerySpendableBalancesResponse>): _16.QuerySpendableBalancesResponse;
                fromAmino(object: _16.QuerySpendableBalancesResponseAmino): _16.QuerySpendableBalancesResponse;
                toAmino(message: _16.QuerySpendableBalancesResponse): _16.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _16.QuerySpendableBalancesResponseAminoMsg): _16.QuerySpendableBalancesResponse;
                toAminoMsg(message: _16.QuerySpendableBalancesResponse): _16.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _16.QuerySpendableBalancesResponseProtoMsg): _16.QuerySpendableBalancesResponse;
                toProto(message: _16.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _16.QuerySpendableBalancesResponse): _16.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _16.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_16.QueryTotalSupplyRequest>): _16.QueryTotalSupplyRequest;
                fromAmino(object: _16.QueryTotalSupplyRequestAmino): _16.QueryTotalSupplyRequest;
                toAmino(message: _16.QueryTotalSupplyRequest): _16.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _16.QueryTotalSupplyRequestAminoMsg): _16.QueryTotalSupplyRequest;
                toAminoMsg(message: _16.QueryTotalSupplyRequest): _16.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _16.QueryTotalSupplyRequestProtoMsg): _16.QueryTotalSupplyRequest;
                toProto(message: _16.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _16.QueryTotalSupplyRequest): _16.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _16.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_16.QueryTotalSupplyResponse>): _16.QueryTotalSupplyResponse;
                fromAmino(object: _16.QueryTotalSupplyResponseAmino): _16.QueryTotalSupplyResponse;
                toAmino(message: _16.QueryTotalSupplyResponse): _16.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _16.QueryTotalSupplyResponseAminoMsg): _16.QueryTotalSupplyResponse;
                toAminoMsg(message: _16.QueryTotalSupplyResponse): _16.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _16.QueryTotalSupplyResponseProtoMsg): _16.QueryTotalSupplyResponse;
                toProto(message: _16.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _16.QueryTotalSupplyResponse): _16.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _16.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QuerySupplyOfRequest;
                fromPartial(object: Partial<_16.QuerySupplyOfRequest>): _16.QuerySupplyOfRequest;
                fromAmino(object: _16.QuerySupplyOfRequestAmino): _16.QuerySupplyOfRequest;
                toAmino(message: _16.QuerySupplyOfRequest): _16.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _16.QuerySupplyOfRequestAminoMsg): _16.QuerySupplyOfRequest;
                toAminoMsg(message: _16.QuerySupplyOfRequest): _16.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _16.QuerySupplyOfRequestProtoMsg): _16.QuerySupplyOfRequest;
                toProto(message: _16.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _16.QuerySupplyOfRequest): _16.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _16.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QuerySupplyOfResponse;
                fromPartial(object: Partial<_16.QuerySupplyOfResponse>): _16.QuerySupplyOfResponse;
                fromAmino(object: _16.QuerySupplyOfResponseAmino): _16.QuerySupplyOfResponse;
                toAmino(message: _16.QuerySupplyOfResponse): _16.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _16.QuerySupplyOfResponseAminoMsg): _16.QuerySupplyOfResponse;
                toAminoMsg(message: _16.QuerySupplyOfResponse): _16.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _16.QuerySupplyOfResponseProtoMsg): _16.QuerySupplyOfResponse;
                toProto(message: _16.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _16.QuerySupplyOfResponse): _16.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _16.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.QueryParamsRequest;
                fromPartial(_: Partial<_16.QueryParamsRequest>): _16.QueryParamsRequest;
                fromAmino(_: _16.QueryParamsRequestAmino): _16.QueryParamsRequest;
                toAmino(_: _16.QueryParamsRequest): _16.QueryParamsRequestAmino;
                fromAminoMsg(object: _16.QueryParamsRequestAminoMsg): _16.QueryParamsRequest;
                toAminoMsg(message: _16.QueryParamsRequest): _16.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _16.QueryParamsRequestProtoMsg): _16.QueryParamsRequest;
                toProto(message: _16.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _16.QueryParamsRequest): _16.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _16.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryParamsResponse;
                fromPartial(object: Partial<_16.QueryParamsResponse>): _16.QueryParamsResponse;
                fromAmino(object: _16.QueryParamsResponseAmino): _16.QueryParamsResponse;
                toAmino(message: _16.QueryParamsResponse): _16.QueryParamsResponseAmino;
                fromAminoMsg(object: _16.QueryParamsResponseAminoMsg): _16.QueryParamsResponse;
                toAminoMsg(message: _16.QueryParamsResponse): _16.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _16.QueryParamsResponseProtoMsg): _16.QueryParamsResponse;
                toProto(message: _16.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _16.QueryParamsResponse): _16.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _16.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_16.QueryDenomsMetadataRequest>): _16.QueryDenomsMetadataRequest;
                fromAmino(object: _16.QueryDenomsMetadataRequestAmino): _16.QueryDenomsMetadataRequest;
                toAmino(message: _16.QueryDenomsMetadataRequest): _16.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _16.QueryDenomsMetadataRequestAminoMsg): _16.QueryDenomsMetadataRequest;
                toAminoMsg(message: _16.QueryDenomsMetadataRequest): _16.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _16.QueryDenomsMetadataRequestProtoMsg): _16.QueryDenomsMetadataRequest;
                toProto(message: _16.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _16.QueryDenomsMetadataRequest): _16.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _16.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_16.QueryDenomsMetadataResponse>): _16.QueryDenomsMetadataResponse;
                fromAmino(object: _16.QueryDenomsMetadataResponseAmino): _16.QueryDenomsMetadataResponse;
                toAmino(message: _16.QueryDenomsMetadataResponse): _16.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _16.QueryDenomsMetadataResponseAminoMsg): _16.QueryDenomsMetadataResponse;
                toAminoMsg(message: _16.QueryDenomsMetadataResponse): _16.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _16.QueryDenomsMetadataResponseProtoMsg): _16.QueryDenomsMetadataResponse;
                toProto(message: _16.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _16.QueryDenomsMetadataResponse): _16.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _16.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_16.QueryDenomMetadataRequest>): _16.QueryDenomMetadataRequest;
                fromAmino(object: _16.QueryDenomMetadataRequestAmino): _16.QueryDenomMetadataRequest;
                toAmino(message: _16.QueryDenomMetadataRequest): _16.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _16.QueryDenomMetadataRequestAminoMsg): _16.QueryDenomMetadataRequest;
                toAminoMsg(message: _16.QueryDenomMetadataRequest): _16.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _16.QueryDenomMetadataRequestProtoMsg): _16.QueryDenomMetadataRequest;
                toProto(message: _16.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _16.QueryDenomMetadataRequest): _16.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _16.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_16.QueryDenomMetadataResponse>): _16.QueryDenomMetadataResponse;
                fromAmino(object: _16.QueryDenomMetadataResponseAmino): _16.QueryDenomMetadataResponse;
                toAmino(message: _16.QueryDenomMetadataResponse): _16.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _16.QueryDenomMetadataResponseAminoMsg): _16.QueryDenomMetadataResponse;
                toAminoMsg(message: _16.QueryDenomMetadataResponse): _16.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _16.QueryDenomMetadataResponseProtoMsg): _16.QueryDenomMetadataResponse;
                toProto(message: _16.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _16.QueryDenomMetadataResponse): _16.QueryDenomMetadataResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _15.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.GenesisState;
                fromPartial(object: Partial<_15.GenesisState>): _15.GenesisState;
                fromAmino(object: _15.GenesisStateAmino): _15.GenesisState;
                toAmino(message: _15.GenesisState): _15.GenesisStateAmino;
                fromAminoMsg(object: _15.GenesisStateAminoMsg): _15.GenesisState;
                toAminoMsg(message: _15.GenesisState): _15.GenesisStateAminoMsg;
                fromProtoMsg(message: _15.GenesisStateProtoMsg): _15.GenesisState;
                toProto(message: _15.GenesisState): Uint8Array;
                toProtoMsg(message: _15.GenesisState): _15.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _15.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.Balance;
                fromPartial(object: Partial<_15.Balance>): _15.Balance;
                fromAmino(object: _15.BalanceAmino): _15.Balance;
                toAmino(message: _15.Balance): _15.BalanceAmino;
                fromAminoMsg(object: _15.BalanceAminoMsg): _15.Balance;
                toAminoMsg(message: _15.Balance): _15.BalanceAminoMsg;
                fromProtoMsg(message: _15.BalanceProtoMsg): _15.Balance;
                toProto(message: _15.Balance): Uint8Array;
                toProtoMsg(message: _15.Balance): _15.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _14.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.Params;
                fromPartial(object: Partial<_14.Params>): _14.Params;
                fromAmino(object: _14.ParamsAmino): _14.Params;
                toAmino(message: _14.Params): _14.ParamsAmino;
                fromAminoMsg(object: _14.ParamsAminoMsg): _14.Params;
                toAminoMsg(message: _14.Params): _14.ParamsAminoMsg;
                fromProtoMsg(message: _14.ParamsProtoMsg): _14.Params;
                toProto(message: _14.Params): Uint8Array;
                toProtoMsg(message: _14.Params): _14.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _14.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.SendEnabled;
                fromPartial(object: Partial<_14.SendEnabled>): _14.SendEnabled;
                fromAmino(object: _14.SendEnabledAmino): _14.SendEnabled;
                toAmino(message: _14.SendEnabled): _14.SendEnabledAmino;
                fromAminoMsg(object: _14.SendEnabledAminoMsg): _14.SendEnabled;
                toAminoMsg(message: _14.SendEnabled): _14.SendEnabledAminoMsg;
                fromProtoMsg(message: _14.SendEnabledProtoMsg): _14.SendEnabled;
                toProto(message: _14.SendEnabled): Uint8Array;
                toProtoMsg(message: _14.SendEnabled): _14.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _14.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.Input;
                fromPartial(object: Partial<_14.Input>): _14.Input;
                fromAmino(object: _14.InputAmino): _14.Input;
                toAmino(message: _14.Input): _14.InputAmino;
                fromAminoMsg(object: _14.InputAminoMsg): _14.Input;
                toAminoMsg(message: _14.Input): _14.InputAminoMsg;
                fromProtoMsg(message: _14.InputProtoMsg): _14.Input;
                toProto(message: _14.Input): Uint8Array;
                toProtoMsg(message: _14.Input): _14.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _14.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.Output;
                fromPartial(object: Partial<_14.Output>): _14.Output;
                fromAmino(object: _14.OutputAmino): _14.Output;
                toAmino(message: _14.Output): _14.OutputAmino;
                fromAminoMsg(object: _14.OutputAminoMsg): _14.Output;
                toAminoMsg(message: _14.Output): _14.OutputAminoMsg;
                fromProtoMsg(message: _14.OutputProtoMsg): _14.Output;
                toProto(message: _14.Output): Uint8Array;
                toProtoMsg(message: _14.Output): _14.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _14.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.Supply;
                fromPartial(object: Partial<_14.Supply>): _14.Supply;
                fromAmino(object: _14.SupplyAmino): _14.Supply;
                toAmino(message: _14.Supply): _14.SupplyAmino;
                fromAminoMsg(object: _14.SupplyAminoMsg): _14.Supply;
                toAminoMsg(message: _14.Supply): _14.SupplyAminoMsg;
                fromProtoMsg(message: _14.SupplyProtoMsg): _14.Supply;
                toProto(message: _14.Supply): Uint8Array;
                toProtoMsg(message: _14.Supply): _14.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _14.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.DenomUnit;
                fromPartial(object: Partial<_14.DenomUnit>): _14.DenomUnit;
                fromAmino(object: _14.DenomUnitAmino): _14.DenomUnit;
                toAmino(message: _14.DenomUnit): _14.DenomUnitAmino;
                fromAminoMsg(object: _14.DenomUnitAminoMsg): _14.DenomUnit;
                toAminoMsg(message: _14.DenomUnit): _14.DenomUnitAminoMsg;
                fromProtoMsg(message: _14.DenomUnitProtoMsg): _14.DenomUnit;
                toProto(message: _14.DenomUnit): Uint8Array;
                toProtoMsg(message: _14.DenomUnit): _14.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _14.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.Metadata;
                fromPartial(object: Partial<_14.Metadata>): _14.Metadata;
                fromAmino(object: _14.MetadataAmino): _14.Metadata;
                toAmino(message: _14.Metadata): _14.MetadataAmino;
                fromAminoMsg(object: _14.MetadataAminoMsg): _14.Metadata;
                toAminoMsg(message: _14.Metadata): _14.MetadataAminoMsg;
                fromProtoMsg(message: _14.MetadataProtoMsg): _14.Metadata;
                toProto(message: _14.Metadata): Uint8Array;
                toProtoMsg(message: _14.Metadata): _14.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _13.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.SendAuthorization;
                fromPartial(object: Partial<_13.SendAuthorization>): _13.SendAuthorization;
                fromAmino(object: _13.SendAuthorizationAmino): _13.SendAuthorization;
                toAmino(message: _13.SendAuthorization): _13.SendAuthorizationAmino;
                fromAminoMsg(object: _13.SendAuthorizationAminoMsg): _13.SendAuthorization;
                toAminoMsg(message: _13.SendAuthorization): _13.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _13.SendAuthorizationProtoMsg): _13.SendAuthorization;
                toProto(message: _13.SendAuthorization): Uint8Array;
                toProtoMsg(message: _13.SendAuthorization): _13.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _18.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.TxResponse;
                    fromPartial(object: Partial<_18.TxResponse>): _18.TxResponse;
                    fromAmino(object: _18.TxResponseAmino): _18.TxResponse;
                    toAmino(message: _18.TxResponse): _18.TxResponseAmino;
                    fromAminoMsg(object: _18.TxResponseAminoMsg): _18.TxResponse;
                    toAminoMsg(message: _18.TxResponse): _18.TxResponseAminoMsg;
                    fromProtoMsg(message: _18.TxResponseProtoMsg): _18.TxResponse;
                    toProto(message: _18.TxResponse): Uint8Array;
                    toProtoMsg(message: _18.TxResponse): _18.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _18.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.ABCIMessageLog;
                    fromPartial(object: Partial<_18.ABCIMessageLog>): _18.ABCIMessageLog;
                    fromAmino(object: _18.ABCIMessageLogAmino): _18.ABCIMessageLog;
                    toAmino(message: _18.ABCIMessageLog): _18.ABCIMessageLogAmino;
                    fromAminoMsg(object: _18.ABCIMessageLogAminoMsg): _18.ABCIMessageLog;
                    toAminoMsg(message: _18.ABCIMessageLog): _18.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _18.ABCIMessageLogProtoMsg): _18.ABCIMessageLog;
                    toProto(message: _18.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _18.ABCIMessageLog): _18.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _18.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.StringEvent;
                    fromPartial(object: Partial<_18.StringEvent>): _18.StringEvent;
                    fromAmino(object: _18.StringEventAmino): _18.StringEvent;
                    toAmino(message: _18.StringEvent): _18.StringEventAmino;
                    fromAminoMsg(object: _18.StringEventAminoMsg): _18.StringEvent;
                    toAminoMsg(message: _18.StringEvent): _18.StringEventAminoMsg;
                    fromProtoMsg(message: _18.StringEventProtoMsg): _18.StringEvent;
                    toProto(message: _18.StringEvent): Uint8Array;
                    toProtoMsg(message: _18.StringEvent): _18.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _18.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.Attribute;
                    fromPartial(object: Partial<_18.Attribute>): _18.Attribute;
                    fromAmino(object: _18.AttributeAmino): _18.Attribute;
                    toAmino(message: _18.Attribute): _18.AttributeAmino;
                    fromAminoMsg(object: _18.AttributeAminoMsg): _18.Attribute;
                    toAminoMsg(message: _18.Attribute): _18.AttributeAminoMsg;
                    fromProtoMsg(message: _18.AttributeProtoMsg): _18.Attribute;
                    toProto(message: _18.Attribute): Uint8Array;
                    toProtoMsg(message: _18.Attribute): _18.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _18.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.GasInfo;
                    fromPartial(object: Partial<_18.GasInfo>): _18.GasInfo;
                    fromAmino(object: _18.GasInfoAmino): _18.GasInfo;
                    toAmino(message: _18.GasInfo): _18.GasInfoAmino;
                    fromAminoMsg(object: _18.GasInfoAminoMsg): _18.GasInfo;
                    toAminoMsg(message: _18.GasInfo): _18.GasInfoAminoMsg;
                    fromProtoMsg(message: _18.GasInfoProtoMsg): _18.GasInfo;
                    toProto(message: _18.GasInfo): Uint8Array;
                    toProtoMsg(message: _18.GasInfo): _18.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _18.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.Result;
                    fromPartial(object: Partial<_18.Result>): _18.Result;
                    fromAmino(object: _18.ResultAmino): _18.Result;
                    toAmino(message: _18.Result): _18.ResultAmino;
                    fromAminoMsg(object: _18.ResultAminoMsg): _18.Result;
                    toAminoMsg(message: _18.Result): _18.ResultAminoMsg;
                    fromProtoMsg(message: _18.ResultProtoMsg): _18.Result;
                    toProto(message: _18.Result): Uint8Array;
                    toProtoMsg(message: _18.Result): _18.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _18.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.SimulationResponse;
                    fromPartial(object: Partial<_18.SimulationResponse>): _18.SimulationResponse;
                    fromAmino(object: _18.SimulationResponseAmino): _18.SimulationResponse;
                    toAmino(message: _18.SimulationResponse): _18.SimulationResponseAmino;
                    fromAminoMsg(object: _18.SimulationResponseAminoMsg): _18.SimulationResponse;
                    toAminoMsg(message: _18.SimulationResponse): _18.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _18.SimulationResponseProtoMsg): _18.SimulationResponse;
                    toProto(message: _18.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _18.SimulationResponse): _18.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _18.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.MsgData;
                    fromPartial(object: Partial<_18.MsgData>): _18.MsgData;
                    fromAmino(object: _18.MsgDataAmino): _18.MsgData;
                    toAmino(message: _18.MsgData): _18.MsgDataAmino;
                    fromAminoMsg(object: _18.MsgDataAminoMsg): _18.MsgData;
                    toAminoMsg(message: _18.MsgData): _18.MsgDataAminoMsg;
                    fromProtoMsg(message: _18.MsgDataProtoMsg): _18.MsgData;
                    toProto(message: _18.MsgData): Uint8Array;
                    toProtoMsg(message: _18.MsgData): _18.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _18.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.TxMsgData;
                    fromPartial(object: Partial<_18.TxMsgData>): _18.TxMsgData;
                    fromAmino(object: _18.TxMsgDataAmino): _18.TxMsgData;
                    toAmino(message: _18.TxMsgData): _18.TxMsgDataAmino;
                    fromAminoMsg(object: _18.TxMsgDataAminoMsg): _18.TxMsgData;
                    toAminoMsg(message: _18.TxMsgData): _18.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _18.TxMsgDataProtoMsg): _18.TxMsgData;
                    toProto(message: _18.TxMsgData): Uint8Array;
                    toProtoMsg(message: _18.TxMsgData): _18.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _18.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.SearchTxsResult;
                    fromPartial(object: Partial<_18.SearchTxsResult>): _18.SearchTxsResult;
                    fromAmino(object: _18.SearchTxsResultAmino): _18.SearchTxsResult;
                    toAmino(message: _18.SearchTxsResult): _18.SearchTxsResultAmino;
                    fromAminoMsg(object: _18.SearchTxsResultAminoMsg): _18.SearchTxsResult;
                    toAminoMsg(message: _18.SearchTxsResult): _18.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _18.SearchTxsResultProtoMsg): _18.SearchTxsResult;
                    toProto(message: _18.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _18.SearchTxsResult): _18.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _19.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.Pairs;
                    fromPartial(object: Partial<_19.Pairs>): _19.Pairs;
                    fromAmino(object: _19.PairsAmino): _19.Pairs;
                    toAmino(message: _19.Pairs): _19.PairsAmino;
                    fromAminoMsg(object: _19.PairsAminoMsg): _19.Pairs;
                    toAminoMsg(message: _19.Pairs): _19.PairsAminoMsg;
                    fromProtoMsg(message: _19.PairsProtoMsg): _19.Pairs;
                    toProto(message: _19.Pairs): Uint8Array;
                    toProtoMsg(message: _19.Pairs): _19.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _19.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.Pair;
                    fromPartial(object: Partial<_19.Pair>): _19.Pair;
                    fromAmino(object: _19.PairAmino): _19.Pair;
                    toAmino(message: _19.Pair): _19.PairAmino;
                    fromAminoMsg(object: _19.PairAminoMsg): _19.Pair;
                    toAminoMsg(message: _19.Pair): _19.PairAminoMsg;
                    fromProtoMsg(message: _19.PairProtoMsg): _19.Pair;
                    toProto(message: _19.Pair): Uint8Array;
                    toProtoMsg(message: _19.Pair): _19.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _144.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _20.ConfigRequest): Promise<_20.ConfigResponse>;
                };
                LCDQueryClient: typeof _129.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _20.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _20.ConfigRequest;
                    fromPartial(_: Partial<_20.ConfigRequest>): _20.ConfigRequest;
                    fromAmino(_: _20.ConfigRequestAmino): _20.ConfigRequest;
                    toAmino(_: _20.ConfigRequest): _20.ConfigRequestAmino;
                    fromAminoMsg(object: _20.ConfigRequestAminoMsg): _20.ConfigRequest;
                    toAminoMsg(message: _20.ConfigRequest): _20.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _20.ConfigRequestProtoMsg): _20.ConfigRequest;
                    toProto(message: _20.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _20.ConfigRequest): _20.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _20.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.ConfigResponse;
                    fromPartial(object: Partial<_20.ConfigResponse>): _20.ConfigResponse;
                    fromAmino(object: _20.ConfigResponseAmino): _20.ConfigResponse;
                    toAmino(message: _20.ConfigResponse): _20.ConfigResponseAmino;
                    fromAminoMsg(object: _20.ConfigResponseAminoMsg): _20.ConfigResponse;
                    toAminoMsg(message: _20.ConfigResponse): _20.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _20.ConfigResponseProtoMsg): _20.ConfigResponse;
                    toProto(message: _20.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _20.ConfigResponse): _20.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _21.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.PageRequest;
                    fromPartial(object: Partial<_21.PageRequest>): _21.PageRequest;
                    fromAmino(object: _21.PageRequestAmino): _21.PageRequest;
                    toAmino(message: _21.PageRequest): _21.PageRequestAmino;
                    fromAminoMsg(object: _21.PageRequestAminoMsg): _21.PageRequest;
                    toAminoMsg(message: _21.PageRequest): _21.PageRequestAminoMsg;
                    fromProtoMsg(message: _21.PageRequestProtoMsg): _21.PageRequest;
                    toProto(message: _21.PageRequest): Uint8Array;
                    toProtoMsg(message: _21.PageRequest): _21.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _21.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.PageResponse;
                    fromPartial(object: Partial<_21.PageResponse>): _21.PageResponse;
                    fromAmino(object: _21.PageResponseAmino): _21.PageResponse;
                    toAmino(message: _21.PageResponse): _21.PageResponseAmino;
                    fromAminoMsg(object: _21.PageResponseAminoMsg): _21.PageResponse;
                    toAminoMsg(message: _21.PageResponse): _21.PageResponseAminoMsg;
                    fromProtoMsg(message: _21.PageResponseProtoMsg): _21.PageResponse;
                    toProto(message: _21.PageResponse): Uint8Array;
                    toProtoMsg(message: _21.PageResponse): _21.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _22.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _22.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_22.ListAllInterfacesRequest>): _22.ListAllInterfacesRequest;
                    fromAmino(_: _22.ListAllInterfacesRequestAmino): _22.ListAllInterfacesRequest;
                    toAmino(_: _22.ListAllInterfacesRequest): _22.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _22.ListAllInterfacesRequestAminoMsg): _22.ListAllInterfacesRequest;
                    toAminoMsg(message: _22.ListAllInterfacesRequest): _22.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _22.ListAllInterfacesRequestProtoMsg): _22.ListAllInterfacesRequest;
                    toProto(message: _22.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _22.ListAllInterfacesRequest): _22.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _22.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_22.ListAllInterfacesResponse>): _22.ListAllInterfacesResponse;
                    fromAmino(object: _22.ListAllInterfacesResponseAmino): _22.ListAllInterfacesResponse;
                    toAmino(message: _22.ListAllInterfacesResponse): _22.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _22.ListAllInterfacesResponseAminoMsg): _22.ListAllInterfacesResponse;
                    toAminoMsg(message: _22.ListAllInterfacesResponse): _22.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _22.ListAllInterfacesResponseProtoMsg): _22.ListAllInterfacesResponse;
                    toProto(message: _22.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _22.ListAllInterfacesResponse): _22.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _22.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.ListImplementationsRequest;
                    fromPartial(object: Partial<_22.ListImplementationsRequest>): _22.ListImplementationsRequest;
                    fromAmino(object: _22.ListImplementationsRequestAmino): _22.ListImplementationsRequest;
                    toAmino(message: _22.ListImplementationsRequest): _22.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _22.ListImplementationsRequestAminoMsg): _22.ListImplementationsRequest;
                    toAminoMsg(message: _22.ListImplementationsRequest): _22.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _22.ListImplementationsRequestProtoMsg): _22.ListImplementationsRequest;
                    toProto(message: _22.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _22.ListImplementationsRequest): _22.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _22.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.ListImplementationsResponse;
                    fromPartial(object: Partial<_22.ListImplementationsResponse>): _22.ListImplementationsResponse;
                    fromAmino(object: _22.ListImplementationsResponseAmino): _22.ListImplementationsResponse;
                    toAmino(message: _22.ListImplementationsResponse): _22.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _22.ListImplementationsResponseAminoMsg): _22.ListImplementationsResponse;
                    toAminoMsg(message: _22.ListImplementationsResponse): _22.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _22.ListImplementationsResponseProtoMsg): _22.ListImplementationsResponse;
                    toProto(message: _22.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _22.ListImplementationsResponse): _22.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _23.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.AppDescriptor;
                    fromPartial(object: Partial<_23.AppDescriptor>): _23.AppDescriptor;
                    fromAmino(object: _23.AppDescriptorAmino): _23.AppDescriptor;
                    toAmino(message: _23.AppDescriptor): _23.AppDescriptorAmino;
                    fromAminoMsg(object: _23.AppDescriptorAminoMsg): _23.AppDescriptor;
                    toAminoMsg(message: _23.AppDescriptor): _23.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _23.AppDescriptorProtoMsg): _23.AppDescriptor;
                    toProto(message: _23.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _23.AppDescriptor): _23.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _23.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.TxDescriptor;
                    fromPartial(object: Partial<_23.TxDescriptor>): _23.TxDescriptor;
                    fromAmino(object: _23.TxDescriptorAmino): _23.TxDescriptor;
                    toAmino(message: _23.TxDescriptor): _23.TxDescriptorAmino;
                    fromAminoMsg(object: _23.TxDescriptorAminoMsg): _23.TxDescriptor;
                    toAminoMsg(message: _23.TxDescriptor): _23.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _23.TxDescriptorProtoMsg): _23.TxDescriptor;
                    toProto(message: _23.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _23.TxDescriptor): _23.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _23.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.AuthnDescriptor;
                    fromPartial(object: Partial<_23.AuthnDescriptor>): _23.AuthnDescriptor;
                    fromAmino(object: _23.AuthnDescriptorAmino): _23.AuthnDescriptor;
                    toAmino(message: _23.AuthnDescriptor): _23.AuthnDescriptorAmino;
                    fromAminoMsg(object: _23.AuthnDescriptorAminoMsg): _23.AuthnDescriptor;
                    toAminoMsg(message: _23.AuthnDescriptor): _23.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _23.AuthnDescriptorProtoMsg): _23.AuthnDescriptor;
                    toProto(message: _23.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _23.AuthnDescriptor): _23.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _23.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.SigningModeDescriptor;
                    fromPartial(object: Partial<_23.SigningModeDescriptor>): _23.SigningModeDescriptor;
                    fromAmino(object: _23.SigningModeDescriptorAmino): _23.SigningModeDescriptor;
                    toAmino(message: _23.SigningModeDescriptor): _23.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _23.SigningModeDescriptorAminoMsg): _23.SigningModeDescriptor;
                    toAminoMsg(message: _23.SigningModeDescriptor): _23.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _23.SigningModeDescriptorProtoMsg): _23.SigningModeDescriptor;
                    toProto(message: _23.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _23.SigningModeDescriptor): _23.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _23.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.ChainDescriptor;
                    fromPartial(object: Partial<_23.ChainDescriptor>): _23.ChainDescriptor;
                    fromAmino(object: _23.ChainDescriptorAmino): _23.ChainDescriptor;
                    toAmino(message: _23.ChainDescriptor): _23.ChainDescriptorAmino;
                    fromAminoMsg(object: _23.ChainDescriptorAminoMsg): _23.ChainDescriptor;
                    toAminoMsg(message: _23.ChainDescriptor): _23.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _23.ChainDescriptorProtoMsg): _23.ChainDescriptor;
                    toProto(message: _23.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _23.ChainDescriptor): _23.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _23.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.CodecDescriptor;
                    fromPartial(object: Partial<_23.CodecDescriptor>): _23.CodecDescriptor;
                    fromAmino(object: _23.CodecDescriptorAmino): _23.CodecDescriptor;
                    toAmino(message: _23.CodecDescriptor): _23.CodecDescriptorAmino;
                    fromAminoMsg(object: _23.CodecDescriptorAminoMsg): _23.CodecDescriptor;
                    toAminoMsg(message: _23.CodecDescriptor): _23.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _23.CodecDescriptorProtoMsg): _23.CodecDescriptor;
                    toProto(message: _23.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _23.CodecDescriptor): _23.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _23.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.InterfaceDescriptor;
                    fromPartial(object: Partial<_23.InterfaceDescriptor>): _23.InterfaceDescriptor;
                    fromAmino(object: _23.InterfaceDescriptorAmino): _23.InterfaceDescriptor;
                    toAmino(message: _23.InterfaceDescriptor): _23.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _23.InterfaceDescriptorAminoMsg): _23.InterfaceDescriptor;
                    toAminoMsg(message: _23.InterfaceDescriptor): _23.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _23.InterfaceDescriptorProtoMsg): _23.InterfaceDescriptor;
                    toProto(message: _23.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _23.InterfaceDescriptor): _23.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _23.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_23.InterfaceImplementerDescriptor>): _23.InterfaceImplementerDescriptor;
                    fromAmino(object: _23.InterfaceImplementerDescriptorAmino): _23.InterfaceImplementerDescriptor;
                    toAmino(message: _23.InterfaceImplementerDescriptor): _23.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _23.InterfaceImplementerDescriptorAminoMsg): _23.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _23.InterfaceImplementerDescriptor): _23.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _23.InterfaceImplementerDescriptorProtoMsg): _23.InterfaceImplementerDescriptor;
                    toProto(message: _23.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _23.InterfaceImplementerDescriptor): _23.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _23.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_23.InterfaceAcceptingMessageDescriptor>): _23.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _23.InterfaceAcceptingMessageDescriptorAmino): _23.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _23.InterfaceAcceptingMessageDescriptor): _23.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _23.InterfaceAcceptingMessageDescriptorAminoMsg): _23.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _23.InterfaceAcceptingMessageDescriptor): _23.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _23.InterfaceAcceptingMessageDescriptorProtoMsg): _23.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _23.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _23.InterfaceAcceptingMessageDescriptor): _23.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _23.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.ConfigurationDescriptor;
                    fromPartial(object: Partial<_23.ConfigurationDescriptor>): _23.ConfigurationDescriptor;
                    fromAmino(object: _23.ConfigurationDescriptorAmino): _23.ConfigurationDescriptor;
                    toAmino(message: _23.ConfigurationDescriptor): _23.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _23.ConfigurationDescriptorAminoMsg): _23.ConfigurationDescriptor;
                    toAminoMsg(message: _23.ConfigurationDescriptor): _23.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _23.ConfigurationDescriptorProtoMsg): _23.ConfigurationDescriptor;
                    toProto(message: _23.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _23.ConfigurationDescriptor): _23.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _23.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.MsgDescriptor;
                    fromPartial(object: Partial<_23.MsgDescriptor>): _23.MsgDescriptor;
                    fromAmino(object: _23.MsgDescriptorAmino): _23.MsgDescriptor;
                    toAmino(message: _23.MsgDescriptor): _23.MsgDescriptorAmino;
                    fromAminoMsg(object: _23.MsgDescriptorAminoMsg): _23.MsgDescriptor;
                    toAminoMsg(message: _23.MsgDescriptor): _23.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _23.MsgDescriptorProtoMsg): _23.MsgDescriptor;
                    toProto(message: _23.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _23.MsgDescriptor): _23.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _23.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _23.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_23.GetAuthnDescriptorRequest>): _23.GetAuthnDescriptorRequest;
                    fromAmino(_: _23.GetAuthnDescriptorRequestAmino): _23.GetAuthnDescriptorRequest;
                    toAmino(_: _23.GetAuthnDescriptorRequest): _23.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _23.GetAuthnDescriptorRequestAminoMsg): _23.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _23.GetAuthnDescriptorRequest): _23.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _23.GetAuthnDescriptorRequestProtoMsg): _23.GetAuthnDescriptorRequest;
                    toProto(message: _23.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _23.GetAuthnDescriptorRequest): _23.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _23.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_23.GetAuthnDescriptorResponse>): _23.GetAuthnDescriptorResponse;
                    fromAmino(object: _23.GetAuthnDescriptorResponseAmino): _23.GetAuthnDescriptorResponse;
                    toAmino(message: _23.GetAuthnDescriptorResponse): _23.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _23.GetAuthnDescriptorResponseAminoMsg): _23.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _23.GetAuthnDescriptorResponse): _23.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _23.GetAuthnDescriptorResponseProtoMsg): _23.GetAuthnDescriptorResponse;
                    toProto(message: _23.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _23.GetAuthnDescriptorResponse): _23.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _23.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _23.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_23.GetChainDescriptorRequest>): _23.GetChainDescriptorRequest;
                    fromAmino(_: _23.GetChainDescriptorRequestAmino): _23.GetChainDescriptorRequest;
                    toAmino(_: _23.GetChainDescriptorRequest): _23.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _23.GetChainDescriptorRequestAminoMsg): _23.GetChainDescriptorRequest;
                    toAminoMsg(message: _23.GetChainDescriptorRequest): _23.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _23.GetChainDescriptorRequestProtoMsg): _23.GetChainDescriptorRequest;
                    toProto(message: _23.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _23.GetChainDescriptorRequest): _23.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _23.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_23.GetChainDescriptorResponse>): _23.GetChainDescriptorResponse;
                    fromAmino(object: _23.GetChainDescriptorResponseAmino): _23.GetChainDescriptorResponse;
                    toAmino(message: _23.GetChainDescriptorResponse): _23.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _23.GetChainDescriptorResponseAminoMsg): _23.GetChainDescriptorResponse;
                    toAminoMsg(message: _23.GetChainDescriptorResponse): _23.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _23.GetChainDescriptorResponseProtoMsg): _23.GetChainDescriptorResponse;
                    toProto(message: _23.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _23.GetChainDescriptorResponse): _23.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _23.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _23.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_23.GetCodecDescriptorRequest>): _23.GetCodecDescriptorRequest;
                    fromAmino(_: _23.GetCodecDescriptorRequestAmino): _23.GetCodecDescriptorRequest;
                    toAmino(_: _23.GetCodecDescriptorRequest): _23.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _23.GetCodecDescriptorRequestAminoMsg): _23.GetCodecDescriptorRequest;
                    toAminoMsg(message: _23.GetCodecDescriptorRequest): _23.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _23.GetCodecDescriptorRequestProtoMsg): _23.GetCodecDescriptorRequest;
                    toProto(message: _23.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _23.GetCodecDescriptorRequest): _23.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _23.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_23.GetCodecDescriptorResponse>): _23.GetCodecDescriptorResponse;
                    fromAmino(object: _23.GetCodecDescriptorResponseAmino): _23.GetCodecDescriptorResponse;
                    toAmino(message: _23.GetCodecDescriptorResponse): _23.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _23.GetCodecDescriptorResponseAminoMsg): _23.GetCodecDescriptorResponse;
                    toAminoMsg(message: _23.GetCodecDescriptorResponse): _23.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _23.GetCodecDescriptorResponseProtoMsg): _23.GetCodecDescriptorResponse;
                    toProto(message: _23.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _23.GetCodecDescriptorResponse): _23.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _23.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _23.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_23.GetConfigurationDescriptorRequest>): _23.GetConfigurationDescriptorRequest;
                    fromAmino(_: _23.GetConfigurationDescriptorRequestAmino): _23.GetConfigurationDescriptorRequest;
                    toAmino(_: _23.GetConfigurationDescriptorRequest): _23.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _23.GetConfigurationDescriptorRequestAminoMsg): _23.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _23.GetConfigurationDescriptorRequest): _23.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _23.GetConfigurationDescriptorRequestProtoMsg): _23.GetConfigurationDescriptorRequest;
                    toProto(message: _23.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _23.GetConfigurationDescriptorRequest): _23.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _23.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_23.GetConfigurationDescriptorResponse>): _23.GetConfigurationDescriptorResponse;
                    fromAmino(object: _23.GetConfigurationDescriptorResponseAmino): _23.GetConfigurationDescriptorResponse;
                    toAmino(message: _23.GetConfigurationDescriptorResponse): _23.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _23.GetConfigurationDescriptorResponseAminoMsg): _23.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _23.GetConfigurationDescriptorResponse): _23.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _23.GetConfigurationDescriptorResponseProtoMsg): _23.GetConfigurationDescriptorResponse;
                    toProto(message: _23.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _23.GetConfigurationDescriptorResponse): _23.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _23.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _23.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_23.GetQueryServicesDescriptorRequest>): _23.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _23.GetQueryServicesDescriptorRequestAmino): _23.GetQueryServicesDescriptorRequest;
                    toAmino(_: _23.GetQueryServicesDescriptorRequest): _23.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _23.GetQueryServicesDescriptorRequestAminoMsg): _23.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _23.GetQueryServicesDescriptorRequest): _23.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _23.GetQueryServicesDescriptorRequestProtoMsg): _23.GetQueryServicesDescriptorRequest;
                    toProto(message: _23.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _23.GetQueryServicesDescriptorRequest): _23.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _23.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_23.GetQueryServicesDescriptorResponse>): _23.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _23.GetQueryServicesDescriptorResponseAmino): _23.GetQueryServicesDescriptorResponse;
                    toAmino(message: _23.GetQueryServicesDescriptorResponse): _23.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _23.GetQueryServicesDescriptorResponseAminoMsg): _23.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _23.GetQueryServicesDescriptorResponse): _23.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _23.GetQueryServicesDescriptorResponseProtoMsg): _23.GetQueryServicesDescriptorResponse;
                    toProto(message: _23.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _23.GetQueryServicesDescriptorResponse): _23.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _23.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _23.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_23.GetTxDescriptorRequest>): _23.GetTxDescriptorRequest;
                    fromAmino(_: _23.GetTxDescriptorRequestAmino): _23.GetTxDescriptorRequest;
                    toAmino(_: _23.GetTxDescriptorRequest): _23.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _23.GetTxDescriptorRequestAminoMsg): _23.GetTxDescriptorRequest;
                    toAminoMsg(message: _23.GetTxDescriptorRequest): _23.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _23.GetTxDescriptorRequestProtoMsg): _23.GetTxDescriptorRequest;
                    toProto(message: _23.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _23.GetTxDescriptorRequest): _23.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _23.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_23.GetTxDescriptorResponse>): _23.GetTxDescriptorResponse;
                    fromAmino(object: _23.GetTxDescriptorResponseAmino): _23.GetTxDescriptorResponse;
                    toAmino(message: _23.GetTxDescriptorResponse): _23.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _23.GetTxDescriptorResponseAminoMsg): _23.GetTxDescriptorResponse;
                    toAminoMsg(message: _23.GetTxDescriptorResponse): _23.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _23.GetTxDescriptorResponseProtoMsg): _23.GetTxDescriptorResponse;
                    toProto(message: _23.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _23.GetTxDescriptorResponse): _23.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _23.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.QueryServicesDescriptor;
                    fromPartial(object: Partial<_23.QueryServicesDescriptor>): _23.QueryServicesDescriptor;
                    fromAmino(object: _23.QueryServicesDescriptorAmino): _23.QueryServicesDescriptor;
                    toAmino(message: _23.QueryServicesDescriptor): _23.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _23.QueryServicesDescriptorAminoMsg): _23.QueryServicesDescriptor;
                    toAminoMsg(message: _23.QueryServicesDescriptor): _23.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _23.QueryServicesDescriptorProtoMsg): _23.QueryServicesDescriptor;
                    toProto(message: _23.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _23.QueryServicesDescriptor): _23.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _23.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.QueryServiceDescriptor;
                    fromPartial(object: Partial<_23.QueryServiceDescriptor>): _23.QueryServiceDescriptor;
                    fromAmino(object: _23.QueryServiceDescriptorAmino): _23.QueryServiceDescriptor;
                    toAmino(message: _23.QueryServiceDescriptor): _23.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _23.QueryServiceDescriptorAminoMsg): _23.QueryServiceDescriptor;
                    toAminoMsg(message: _23.QueryServiceDescriptor): _23.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _23.QueryServiceDescriptorProtoMsg): _23.QueryServiceDescriptor;
                    toProto(message: _23.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _23.QueryServiceDescriptor): _23.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _23.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.QueryMethodDescriptor;
                    fromPartial(object: Partial<_23.QueryMethodDescriptor>): _23.QueryMethodDescriptor;
                    fromAmino(object: _23.QueryMethodDescriptorAmino): _23.QueryMethodDescriptor;
                    toAmino(message: _23.QueryMethodDescriptor): _23.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _23.QueryMethodDescriptorAminoMsg): _23.QueryMethodDescriptor;
                    toAminoMsg(message: _23.QueryMethodDescriptor): _23.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _23.QueryMethodDescriptorProtoMsg): _23.QueryMethodDescriptor;
                    toProto(message: _23.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _23.QueryMethodDescriptor): _23.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _24.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.Snapshot;
                    fromPartial(object: Partial<_24.Snapshot>): _24.Snapshot;
                    fromAmino(object: _24.SnapshotAmino): _24.Snapshot;
                    toAmino(message: _24.Snapshot): _24.SnapshotAmino;
                    fromAminoMsg(object: _24.SnapshotAminoMsg): _24.Snapshot;
                    toAminoMsg(message: _24.Snapshot): _24.SnapshotAminoMsg;
                    fromProtoMsg(message: _24.SnapshotProtoMsg): _24.Snapshot;
                    toProto(message: _24.Snapshot): Uint8Array;
                    toProtoMsg(message: _24.Snapshot): _24.SnapshotProtoMsg;
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
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _24.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.SnapshotItem;
                    fromPartial(object: Partial<_24.SnapshotItem>): _24.SnapshotItem;
                    fromAmino(object: _24.SnapshotItemAmino): _24.SnapshotItem;
                    toAmino(message: _24.SnapshotItem): _24.SnapshotItemAmino;
                    fromAminoMsg(object: _24.SnapshotItemAminoMsg): _24.SnapshotItem;
                    toAminoMsg(message: _24.SnapshotItem): _24.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _24.SnapshotItemProtoMsg): _24.SnapshotItem;
                    toProto(message: _24.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _24.SnapshotItem): _24.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _24.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.SnapshotStoreItem;
                    fromPartial(object: Partial<_24.SnapshotStoreItem>): _24.SnapshotStoreItem;
                    fromAmino(object: _24.SnapshotStoreItemAmino): _24.SnapshotStoreItem;
                    toAmino(message: _24.SnapshotStoreItem): _24.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _24.SnapshotStoreItemAminoMsg): _24.SnapshotStoreItem;
                    toAminoMsg(message: _24.SnapshotStoreItem): _24.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _24.SnapshotStoreItemProtoMsg): _24.SnapshotStoreItem;
                    toProto(message: _24.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _24.SnapshotStoreItem): _24.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _24.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.SnapshotIAVLItem;
                    fromPartial(object: Partial<_24.SnapshotIAVLItem>): _24.SnapshotIAVLItem;
                    fromAmino(object: _24.SnapshotIAVLItemAmino): _24.SnapshotIAVLItem;
                    toAmino(message: _24.SnapshotIAVLItem): _24.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _24.SnapshotIAVLItemAminoMsg): _24.SnapshotIAVLItem;
                    toAminoMsg(message: _24.SnapshotIAVLItem): _24.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _24.SnapshotIAVLItemProtoMsg): _24.SnapshotIAVLItem;
                    toProto(message: _24.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _24.SnapshotIAVLItem): _24.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _24.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_24.SnapshotExtensionMeta>): _24.SnapshotExtensionMeta;
                    fromAmino(object: _24.SnapshotExtensionMetaAmino): _24.SnapshotExtensionMeta;
                    toAmino(message: _24.SnapshotExtensionMeta): _24.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _24.SnapshotExtensionMetaAminoMsg): _24.SnapshotExtensionMeta;
                    toAminoMsg(message: _24.SnapshotExtensionMeta): _24.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _24.SnapshotExtensionMetaProtoMsg): _24.SnapshotExtensionMeta;
                    toProto(message: _24.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _24.SnapshotExtensionMeta): _24.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _24.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_24.SnapshotExtensionPayload>): _24.SnapshotExtensionPayload;
                    fromAmino(object: _24.SnapshotExtensionPayloadAmino): _24.SnapshotExtensionPayload;
                    toAmino(message: _24.SnapshotExtensionPayload): _24.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _24.SnapshotExtensionPayloadAminoMsg): _24.SnapshotExtensionPayload;
                    toAminoMsg(message: _24.SnapshotExtensionPayload): _24.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _24.SnapshotExtensionPayloadProtoMsg): _24.SnapshotExtensionPayload;
                    toProto(message: _24.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _24.SnapshotExtensionPayload): _24.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _26.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.StoreKVPair;
                    fromPartial(object: Partial<_26.StoreKVPair>): _26.StoreKVPair;
                    fromAmino(object: _26.StoreKVPairAmino): _26.StoreKVPair;
                    toAmino(message: _26.StoreKVPair): _26.StoreKVPairAmino;
                    fromAminoMsg(object: _26.StoreKVPairAminoMsg): _26.StoreKVPair;
                    toAminoMsg(message: _26.StoreKVPair): _26.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _26.StoreKVPairProtoMsg): _26.StoreKVPair;
                    toProto(message: _26.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _26.StoreKVPair): _26.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _26.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.BlockMetadata;
                    fromPartial(object: Partial<_26.BlockMetadata>): _26.BlockMetadata;
                    fromAmino(object: _26.BlockMetadataAmino): _26.BlockMetadata;
                    toAmino(message: _26.BlockMetadata): _26.BlockMetadataAmino;
                    fromAminoMsg(object: _26.BlockMetadataAminoMsg): _26.BlockMetadata;
                    toAminoMsg(message: _26.BlockMetadata): _26.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _26.BlockMetadataProtoMsg): _26.BlockMetadata;
                    toProto(message: _26.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _26.BlockMetadata): _26.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _26.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_26.BlockMetadata_DeliverTx>): _26.BlockMetadata_DeliverTx;
                    fromAmino(object: _26.BlockMetadata_DeliverTxAmino): _26.BlockMetadata_DeliverTx;
                    toAmino(message: _26.BlockMetadata_DeliverTx): _26.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _26.BlockMetadata_DeliverTxAminoMsg): _26.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _26.BlockMetadata_DeliverTx): _26.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _26.BlockMetadata_DeliverTxProtoMsg): _26.BlockMetadata_DeliverTx;
                    toProto(message: _26.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _26.BlockMetadata_DeliverTx): _26.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _25.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.CommitInfo;
                    fromPartial(object: Partial<_25.CommitInfo>): _25.CommitInfo;
                    fromAmino(object: _25.CommitInfoAmino): _25.CommitInfo;
                    toAmino(message: _25.CommitInfo): _25.CommitInfoAmino;
                    fromAminoMsg(object: _25.CommitInfoAminoMsg): _25.CommitInfo;
                    toAminoMsg(message: _25.CommitInfo): _25.CommitInfoAminoMsg;
                    fromProtoMsg(message: _25.CommitInfoProtoMsg): _25.CommitInfo;
                    toProto(message: _25.CommitInfo): Uint8Array;
                    toProtoMsg(message: _25.CommitInfo): _25.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _25.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.StoreInfo;
                    fromPartial(object: Partial<_25.StoreInfo>): _25.StoreInfo;
                    fromAmino(object: _25.StoreInfoAmino): _25.StoreInfo;
                    toAmino(message: _25.StoreInfo): _25.StoreInfoAmino;
                    fromAminoMsg(object: _25.StoreInfoAminoMsg): _25.StoreInfo;
                    toAminoMsg(message: _25.StoreInfo): _25.StoreInfoAminoMsg;
                    fromProtoMsg(message: _25.StoreInfoProtoMsg): _25.StoreInfo;
                    toProto(message: _25.StoreInfo): Uint8Array;
                    toProtoMsg(message: _25.StoreInfo): _25.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _25.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.CommitID;
                    fromPartial(object: Partial<_25.CommitID>): _25.CommitID;
                    fromAmino(object: _25.CommitIDAmino): _25.CommitID;
                    toAmino(message: _25.CommitID): _25.CommitIDAmino;
                    fromAminoMsg(object: _25.CommitIDAminoMsg): _25.CommitID;
                    toAminoMsg(message: _25.CommitID): _25.CommitIDAminoMsg;
                    fromProtoMsg(message: _25.CommitIDProtoMsg): _25.CommitID;
                    toProto(message: _25.CommitID): Uint8Array;
                    toProtoMsg(message: _25.CommitID): _25.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _145.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _27.GetNodeInfoRequest): Promise<_27.GetNodeInfoResponse>;
                    getSyncing(request?: _27.GetSyncingRequest): Promise<_27.GetSyncingResponse>;
                    getLatestBlock(request?: _27.GetLatestBlockRequest): Promise<_27.GetLatestBlockResponse>;
                    getBlockByHeight(request: _27.GetBlockByHeightRequest): Promise<_27.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _27.GetLatestValidatorSetRequest): Promise<_27.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _27.GetValidatorSetByHeightRequest): Promise<_27.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _130.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _27.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_27.GetValidatorSetByHeightRequest>): _27.GetValidatorSetByHeightRequest;
                    fromAmino(object: _27.GetValidatorSetByHeightRequestAmino): _27.GetValidatorSetByHeightRequest;
                    toAmino(message: _27.GetValidatorSetByHeightRequest): _27.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _27.GetValidatorSetByHeightRequestAminoMsg): _27.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _27.GetValidatorSetByHeightRequest): _27.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _27.GetValidatorSetByHeightRequestProtoMsg): _27.GetValidatorSetByHeightRequest;
                    toProto(message: _27.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _27.GetValidatorSetByHeightRequest): _27.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _27.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_27.GetValidatorSetByHeightResponse>): _27.GetValidatorSetByHeightResponse;
                    fromAmino(object: _27.GetValidatorSetByHeightResponseAmino): _27.GetValidatorSetByHeightResponse;
                    toAmino(message: _27.GetValidatorSetByHeightResponse): _27.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _27.GetValidatorSetByHeightResponseAminoMsg): _27.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _27.GetValidatorSetByHeightResponse): _27.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _27.GetValidatorSetByHeightResponseProtoMsg): _27.GetValidatorSetByHeightResponse;
                    toProto(message: _27.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _27.GetValidatorSetByHeightResponse): _27.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _27.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_27.GetLatestValidatorSetRequest>): _27.GetLatestValidatorSetRequest;
                    fromAmino(object: _27.GetLatestValidatorSetRequestAmino): _27.GetLatestValidatorSetRequest;
                    toAmino(message: _27.GetLatestValidatorSetRequest): _27.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _27.GetLatestValidatorSetRequestAminoMsg): _27.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _27.GetLatestValidatorSetRequest): _27.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _27.GetLatestValidatorSetRequestProtoMsg): _27.GetLatestValidatorSetRequest;
                    toProto(message: _27.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _27.GetLatestValidatorSetRequest): _27.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _27.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_27.GetLatestValidatorSetResponse>): _27.GetLatestValidatorSetResponse;
                    fromAmino(object: _27.GetLatestValidatorSetResponseAmino): _27.GetLatestValidatorSetResponse;
                    toAmino(message: _27.GetLatestValidatorSetResponse): _27.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _27.GetLatestValidatorSetResponseAminoMsg): _27.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _27.GetLatestValidatorSetResponse): _27.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _27.GetLatestValidatorSetResponseProtoMsg): _27.GetLatestValidatorSetResponse;
                    toProto(message: _27.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _27.GetLatestValidatorSetResponse): _27.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _27.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.Validator;
                    fromPartial(object: Partial<_27.Validator>): _27.Validator;
                    fromAmino(object: _27.ValidatorAmino): _27.Validator;
                    toAmino(message: _27.Validator): _27.ValidatorAmino;
                    fromAminoMsg(object: _27.ValidatorAminoMsg): _27.Validator;
                    toAminoMsg(message: _27.Validator): _27.ValidatorAminoMsg;
                    fromProtoMsg(message: _27.ValidatorProtoMsg): _27.Validator;
                    toProto(message: _27.Validator): Uint8Array;
                    toProtoMsg(message: _27.Validator): _27.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _27.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_27.GetBlockByHeightRequest>): _27.GetBlockByHeightRequest;
                    fromAmino(object: _27.GetBlockByHeightRequestAmino): _27.GetBlockByHeightRequest;
                    toAmino(message: _27.GetBlockByHeightRequest): _27.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _27.GetBlockByHeightRequestAminoMsg): _27.GetBlockByHeightRequest;
                    toAminoMsg(message: _27.GetBlockByHeightRequest): _27.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _27.GetBlockByHeightRequestProtoMsg): _27.GetBlockByHeightRequest;
                    toProto(message: _27.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _27.GetBlockByHeightRequest): _27.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _27.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_27.GetBlockByHeightResponse>): _27.GetBlockByHeightResponse;
                    fromAmino(object: _27.GetBlockByHeightResponseAmino): _27.GetBlockByHeightResponse;
                    toAmino(message: _27.GetBlockByHeightResponse): _27.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _27.GetBlockByHeightResponseAminoMsg): _27.GetBlockByHeightResponse;
                    toAminoMsg(message: _27.GetBlockByHeightResponse): _27.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _27.GetBlockByHeightResponseProtoMsg): _27.GetBlockByHeightResponse;
                    toProto(message: _27.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _27.GetBlockByHeightResponse): _27.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _27.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _27.GetLatestBlockRequest;
                    fromPartial(_: Partial<_27.GetLatestBlockRequest>): _27.GetLatestBlockRequest;
                    fromAmino(_: _27.GetLatestBlockRequestAmino): _27.GetLatestBlockRequest;
                    toAmino(_: _27.GetLatestBlockRequest): _27.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _27.GetLatestBlockRequestAminoMsg): _27.GetLatestBlockRequest;
                    toAminoMsg(message: _27.GetLatestBlockRequest): _27.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _27.GetLatestBlockRequestProtoMsg): _27.GetLatestBlockRequest;
                    toProto(message: _27.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _27.GetLatestBlockRequest): _27.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _27.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.GetLatestBlockResponse;
                    fromPartial(object: Partial<_27.GetLatestBlockResponse>): _27.GetLatestBlockResponse;
                    fromAmino(object: _27.GetLatestBlockResponseAmino): _27.GetLatestBlockResponse;
                    toAmino(message: _27.GetLatestBlockResponse): _27.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _27.GetLatestBlockResponseAminoMsg): _27.GetLatestBlockResponse;
                    toAminoMsg(message: _27.GetLatestBlockResponse): _27.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _27.GetLatestBlockResponseProtoMsg): _27.GetLatestBlockResponse;
                    toProto(message: _27.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _27.GetLatestBlockResponse): _27.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _27.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _27.GetSyncingRequest;
                    fromPartial(_: Partial<_27.GetSyncingRequest>): _27.GetSyncingRequest;
                    fromAmino(_: _27.GetSyncingRequestAmino): _27.GetSyncingRequest;
                    toAmino(_: _27.GetSyncingRequest): _27.GetSyncingRequestAmino;
                    fromAminoMsg(object: _27.GetSyncingRequestAminoMsg): _27.GetSyncingRequest;
                    toAminoMsg(message: _27.GetSyncingRequest): _27.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _27.GetSyncingRequestProtoMsg): _27.GetSyncingRequest;
                    toProto(message: _27.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _27.GetSyncingRequest): _27.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _27.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.GetSyncingResponse;
                    fromPartial(object: Partial<_27.GetSyncingResponse>): _27.GetSyncingResponse;
                    fromAmino(object: _27.GetSyncingResponseAmino): _27.GetSyncingResponse;
                    toAmino(message: _27.GetSyncingResponse): _27.GetSyncingResponseAmino;
                    fromAminoMsg(object: _27.GetSyncingResponseAminoMsg): _27.GetSyncingResponse;
                    toAminoMsg(message: _27.GetSyncingResponse): _27.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _27.GetSyncingResponseProtoMsg): _27.GetSyncingResponse;
                    toProto(message: _27.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _27.GetSyncingResponse): _27.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _27.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _27.GetNodeInfoRequest;
                    fromPartial(_: Partial<_27.GetNodeInfoRequest>): _27.GetNodeInfoRequest;
                    fromAmino(_: _27.GetNodeInfoRequestAmino): _27.GetNodeInfoRequest;
                    toAmino(_: _27.GetNodeInfoRequest): _27.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _27.GetNodeInfoRequestAminoMsg): _27.GetNodeInfoRequest;
                    toAminoMsg(message: _27.GetNodeInfoRequest): _27.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _27.GetNodeInfoRequestProtoMsg): _27.GetNodeInfoRequest;
                    toProto(message: _27.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _27.GetNodeInfoRequest): _27.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _27.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.GetNodeInfoResponse;
                    fromPartial(object: Partial<_27.GetNodeInfoResponse>): _27.GetNodeInfoResponse;
                    fromAmino(object: _27.GetNodeInfoResponseAmino): _27.GetNodeInfoResponse;
                    toAmino(message: _27.GetNodeInfoResponse): _27.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _27.GetNodeInfoResponseAminoMsg): _27.GetNodeInfoResponse;
                    toAminoMsg(message: _27.GetNodeInfoResponse): _27.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _27.GetNodeInfoResponseProtoMsg): _27.GetNodeInfoResponse;
                    toProto(message: _27.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _27.GetNodeInfoResponse): _27.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _27.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.VersionInfo;
                    fromPartial(object: Partial<_27.VersionInfo>): _27.VersionInfo;
                    fromAmino(object: _27.VersionInfoAmino): _27.VersionInfo;
                    toAmino(message: _27.VersionInfo): _27.VersionInfoAmino;
                    fromAminoMsg(object: _27.VersionInfoAminoMsg): _27.VersionInfo;
                    toAminoMsg(message: _27.VersionInfo): _27.VersionInfoAminoMsg;
                    fromProtoMsg(message: _27.VersionInfoProtoMsg): _27.VersionInfo;
                    toProto(message: _27.VersionInfo): Uint8Array;
                    toProtoMsg(message: _27.VersionInfo): _27.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _27.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.Module;
                    fromPartial(object: Partial<_27.Module>): _27.Module;
                    fromAmino(object: _27.ModuleAmino): _27.Module;
                    toAmino(message: _27.Module): _27.ModuleAmino;
                    fromAminoMsg(object: _27.ModuleAminoMsg): _27.Module;
                    toAminoMsg(message: _27.Module): _27.ModuleAminoMsg;
                    fromProtoMsg(message: _27.ModuleProtoMsg): _27.Module;
                    toProto(message: _27.Module): Uint8Array;
                    toProtoMsg(message: _27.Module): _27.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _28.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.Coin;
                fromPartial(object: Partial<_28.Coin>): _28.Coin;
                fromAmino(object: _28.CoinAmino): _28.Coin;
                toAmino(message: _28.Coin): _28.CoinAmino;
                fromAminoMsg(object: _28.CoinAminoMsg): _28.Coin;
                toAminoMsg(message: _28.Coin): _28.CoinAminoMsg;
                fromProtoMsg(message: _28.CoinProtoMsg): _28.Coin;
                toProto(message: _28.Coin): Uint8Array;
                toProtoMsg(message: _28.Coin): _28.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _28.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.DecCoin;
                fromPartial(object: Partial<_28.DecCoin>): _28.DecCoin;
                fromAmino(object: _28.DecCoinAmino): _28.DecCoin;
                toAmino(message: _28.DecCoin): _28.DecCoinAmino;
                fromAminoMsg(object: _28.DecCoinAminoMsg): _28.DecCoin;
                toAminoMsg(message: _28.DecCoin): _28.DecCoinAminoMsg;
                fromProtoMsg(message: _28.DecCoinProtoMsg): _28.DecCoin;
                toProto(message: _28.DecCoin): Uint8Array;
                toProtoMsg(message: _28.DecCoin): _28.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _28.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.IntProto;
                fromPartial(object: Partial<_28.IntProto>): _28.IntProto;
                fromAmino(object: _28.IntProtoAmino): _28.IntProto;
                toAmino(message: _28.IntProto): _28.IntProtoAmino;
                fromAminoMsg(object: _28.IntProtoAminoMsg): _28.IntProto;
                toAminoMsg(message: _28.IntProto): _28.IntProtoAminoMsg;
                fromProtoMsg(message: _28.IntProtoProtoMsg): _28.IntProto;
                toProto(message: _28.IntProto): Uint8Array;
                toProtoMsg(message: _28.IntProto): _28.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _28.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.DecProto;
                fromPartial(object: Partial<_28.DecProto>): _28.DecProto;
                fromAmino(object: _28.DecProtoAmino): _28.DecProto;
                toAmino(message: _28.DecProto): _28.DecProtoAmino;
                fromAminoMsg(object: _28.DecProtoAminoMsg): _28.DecProto;
                toAminoMsg(message: _28.DecProto): _28.DecProtoAminoMsg;
                fromProtoMsg(message: _28.DecProtoProtoMsg): _28.DecProto;
                toProto(message: _28.DecProto): Uint8Array;
                toProtoMsg(message: _28.DecProto): _28.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _30.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.GenesisOwners;
                fromPartial(object: Partial<_30.GenesisOwners>): _30.GenesisOwners;
                fromAmino(object: _30.GenesisOwnersAmino): _30.GenesisOwners;
                toAmino(message: _30.GenesisOwners): _30.GenesisOwnersAmino;
                fromAminoMsg(object: _30.GenesisOwnersAminoMsg): _30.GenesisOwners;
                toAminoMsg(message: _30.GenesisOwners): _30.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _30.GenesisOwnersProtoMsg): _30.GenesisOwners;
                toProto(message: _30.GenesisOwners): Uint8Array;
                toProtoMsg(message: _30.GenesisOwners): _30.GenesisOwnersProtoMsg;
            };
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
            Capability: {
                typeUrl: string;
                encode(message: _29.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.Capability;
                fromPartial(object: Partial<_29.Capability>): _29.Capability;
                fromAmino(object: _29.CapabilityAmino): _29.Capability;
                toAmino(message: _29.Capability): _29.CapabilityAmino;
                fromAminoMsg(object: _29.CapabilityAminoMsg): _29.Capability;
                toAminoMsg(message: _29.Capability): _29.CapabilityAminoMsg;
                fromProtoMsg(message: _29.CapabilityProtoMsg): _29.Capability;
                toProto(message: _29.Capability): Uint8Array;
                toProtoMsg(message: _29.Capability): _29.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _29.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.Owner;
                fromPartial(object: Partial<_29.Owner>): _29.Owner;
                fromAmino(object: _29.OwnerAmino): _29.Owner;
                toAmino(message: _29.Owner): _29.OwnerAmino;
                fromAminoMsg(object: _29.OwnerAminoMsg): _29.Owner;
                toAminoMsg(message: _29.Owner): _29.OwnerAminoMsg;
                fromProtoMsg(message: _29.OwnerProtoMsg): _29.Owner;
                toProto(message: _29.Owner): Uint8Array;
                toProtoMsg(message: _29.Owner): _29.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _29.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.CapabilityOwners;
                fromPartial(object: Partial<_29.CapabilityOwners>): _29.CapabilityOwners;
                fromAmino(object: _29.CapabilityOwnersAmino): _29.CapabilityOwners;
                toAmino(message: _29.CapabilityOwners): _29.CapabilityOwnersAmino;
                fromAminoMsg(object: _29.CapabilityOwnersAminoMsg): _29.CapabilityOwners;
                toAminoMsg(message: _29.CapabilityOwners): _29.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _29.CapabilityOwnersProtoMsg): _29.CapabilityOwners;
                toProto(message: _29.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _29.CapabilityOwners): _29.CapabilityOwnersProtoMsg;
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
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _32.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _32.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _32.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _32.MsgVerifyInvariant) => _32.MsgVerifyInvariantAmino;
                    fromAmino: (object: _32.MsgVerifyInvariantAmino) => _32.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _32.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.MsgVerifyInvariant;
                fromPartial(object: Partial<_32.MsgVerifyInvariant>): _32.MsgVerifyInvariant;
                fromAmino(object: _32.MsgVerifyInvariantAmino): _32.MsgVerifyInvariant;
                toAmino(message: _32.MsgVerifyInvariant): _32.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _32.MsgVerifyInvariantAminoMsg): _32.MsgVerifyInvariant;
                toAminoMsg(message: _32.MsgVerifyInvariant): _32.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _32.MsgVerifyInvariantProtoMsg): _32.MsgVerifyInvariant;
                toProto(message: _32.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _32.MsgVerifyInvariant): _32.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _32.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _32.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_32.MsgVerifyInvariantResponse>): _32.MsgVerifyInvariantResponse;
                fromAmino(_: _32.MsgVerifyInvariantResponseAmino): _32.MsgVerifyInvariantResponse;
                toAmino(_: _32.MsgVerifyInvariantResponse): _32.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _32.MsgVerifyInvariantResponseAminoMsg): _32.MsgVerifyInvariantResponse;
                toAminoMsg(message: _32.MsgVerifyInvariantResponse): _32.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _32.MsgVerifyInvariantResponseProtoMsg): _32.MsgVerifyInvariantResponse;
                toProto(message: _32.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _32.MsgVerifyInvariantResponse): _32.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _31.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.GenesisState;
                fromPartial(object: Partial<_31.GenesisState>): _31.GenesisState;
                fromAmino(object: _31.GenesisStateAmino): _31.GenesisState;
                toAmino(message: _31.GenesisState): _31.GenesisStateAmino;
                fromAminoMsg(object: _31.GenesisStateAminoMsg): _31.GenesisState;
                toAminoMsg(message: _31.GenesisState): _31.GenesisStateAminoMsg;
                fromProtoMsg(message: _31.GenesisStateProtoMsg): _31.GenesisState;
                toProto(message: _31.GenesisState): Uint8Array;
                toProtoMsg(message: _31.GenesisState): _31.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
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
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _34.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.LegacyAminoPubKey;
                fromPartial(object: Partial<_34.LegacyAminoPubKey>): _34.LegacyAminoPubKey;
                fromAmino(object: _34.LegacyAminoPubKeyAmino): _34.LegacyAminoPubKey;
                toAmino(message: _34.LegacyAminoPubKey): _34.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _34.LegacyAminoPubKeyAminoMsg): _34.LegacyAminoPubKey;
                toAminoMsg(message: _34.LegacyAminoPubKey): _34.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _34.LegacyAminoPubKeyProtoMsg): _34.LegacyAminoPubKey;
                toProto(message: _34.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _34.LegacyAminoPubKey): _34.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
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
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _36.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.PubKey;
                fromPartial(object: Partial<_36.PubKey>): _36.PubKey;
                fromAmino(object: _36.PubKeyAmino): _36.PubKey;
                toAmino(message: _36.PubKey): _36.PubKeyAmino;
                fromAminoMsg(object: _36.PubKeyAminoMsg): _36.PubKey;
                toAminoMsg(message: _36.PubKey): _36.PubKeyAminoMsg;
                fromProtoMsg(message: _36.PubKeyProtoMsg): _36.PubKey;
                toProto(message: _36.PubKey): Uint8Array;
                toProtoMsg(message: _36.PubKey): _36.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _36.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.PrivKey;
                fromPartial(object: Partial<_36.PrivKey>): _36.PrivKey;
                fromAmino(object: _36.PrivKeyAmino): _36.PrivKey;
                toAmino(message: _36.PrivKey): _36.PrivKeyAmino;
                fromAminoMsg(object: _36.PrivKeyAminoMsg): _36.PrivKey;
                toAminoMsg(message: _36.PrivKey): _36.PrivKeyAminoMsg;
                fromProtoMsg(message: _36.PrivKeyProtoMsg): _36.PrivKey;
                toProto(message: _36.PrivKey): Uint8Array;
                toProtoMsg(message: _36.PrivKey): _36.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _159.MsgClientImpl;
            QueryClientImpl: typeof _146.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _39.QueryParamsRequest): Promise<_39.QueryParamsResponse>;
                validatorOutstandingRewards(request: _39.QueryValidatorOutstandingRewardsRequest): Promise<_39.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _39.QueryValidatorCommissionRequest): Promise<_39.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _39.QueryValidatorSlashesRequest): Promise<_39.QueryValidatorSlashesResponse>;
                delegationRewards(request: _39.QueryDelegationRewardsRequest): Promise<_39.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _39.QueryDelegationTotalRewardsRequest): Promise<_39.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _39.QueryDelegatorValidatorsRequest): Promise<_39.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _39.QueryDelegatorWithdrawAddressRequest): Promise<_39.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _39.QueryCommunityPoolRequest): Promise<_39.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _131.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _40.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _40.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _40.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _40.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _40.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _40.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _40.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _40.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _40.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _40.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _40.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _40.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _40.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _40.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _40.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _40.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _40.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _40.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _40.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _40.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _40.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _40.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _40.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _40.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _40.MsgSetWithdrawAddress) => _40.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _40.MsgSetWithdrawAddressAmino) => _40.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _40.MsgWithdrawDelegatorReward) => _40.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _40.MsgWithdrawDelegatorRewardAmino) => _40.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _40.MsgWithdrawValidatorCommission) => _40.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _40.MsgWithdrawValidatorCommissionAmino) => _40.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _40.MsgFundCommunityPool) => _40.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _40.MsgFundCommunityPoolAmino) => _40.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _40.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_40.MsgSetWithdrawAddress>): _40.MsgSetWithdrawAddress;
                fromAmino(object: _40.MsgSetWithdrawAddressAmino): _40.MsgSetWithdrawAddress;
                toAmino(message: _40.MsgSetWithdrawAddress): _40.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _40.MsgSetWithdrawAddressAminoMsg): _40.MsgSetWithdrawAddress;
                toAminoMsg(message: _40.MsgSetWithdrawAddress): _40.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _40.MsgSetWithdrawAddressProtoMsg): _40.MsgSetWithdrawAddress;
                toProto(message: _40.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _40.MsgSetWithdrawAddress): _40.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _40.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_40.MsgSetWithdrawAddressResponse>): _40.MsgSetWithdrawAddressResponse;
                fromAmino(_: _40.MsgSetWithdrawAddressResponseAmino): _40.MsgSetWithdrawAddressResponse;
                toAmino(_: _40.MsgSetWithdrawAddressResponse): _40.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _40.MsgSetWithdrawAddressResponseAminoMsg): _40.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _40.MsgSetWithdrawAddressResponse): _40.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _40.MsgSetWithdrawAddressResponseProtoMsg): _40.MsgSetWithdrawAddressResponse;
                toProto(message: _40.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _40.MsgSetWithdrawAddressResponse): _40.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _40.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_40.MsgWithdrawDelegatorReward>): _40.MsgWithdrawDelegatorReward;
                fromAmino(object: _40.MsgWithdrawDelegatorRewardAmino): _40.MsgWithdrawDelegatorReward;
                toAmino(message: _40.MsgWithdrawDelegatorReward): _40.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _40.MsgWithdrawDelegatorRewardAminoMsg): _40.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _40.MsgWithdrawDelegatorReward): _40.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _40.MsgWithdrawDelegatorRewardProtoMsg): _40.MsgWithdrawDelegatorReward;
                toProto(message: _40.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _40.MsgWithdrawDelegatorReward): _40.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _40.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_40.MsgWithdrawDelegatorRewardResponse>): _40.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _40.MsgWithdrawDelegatorRewardResponseAmino): _40.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _40.MsgWithdrawDelegatorRewardResponse): _40.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _40.MsgWithdrawDelegatorRewardResponseAminoMsg): _40.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _40.MsgWithdrawDelegatorRewardResponse): _40.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _40.MsgWithdrawDelegatorRewardResponseProtoMsg): _40.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _40.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _40.MsgWithdrawDelegatorRewardResponse): _40.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _40.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_40.MsgWithdrawValidatorCommission>): _40.MsgWithdrawValidatorCommission;
                fromAmino(object: _40.MsgWithdrawValidatorCommissionAmino): _40.MsgWithdrawValidatorCommission;
                toAmino(message: _40.MsgWithdrawValidatorCommission): _40.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _40.MsgWithdrawValidatorCommissionAminoMsg): _40.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _40.MsgWithdrawValidatorCommission): _40.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _40.MsgWithdrawValidatorCommissionProtoMsg): _40.MsgWithdrawValidatorCommission;
                toProto(message: _40.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _40.MsgWithdrawValidatorCommission): _40.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _40.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_40.MsgWithdrawValidatorCommissionResponse>): _40.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _40.MsgWithdrawValidatorCommissionResponseAmino): _40.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _40.MsgWithdrawValidatorCommissionResponse): _40.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _40.MsgWithdrawValidatorCommissionResponseAminoMsg): _40.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _40.MsgWithdrawValidatorCommissionResponse): _40.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _40.MsgWithdrawValidatorCommissionResponseProtoMsg): _40.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _40.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _40.MsgWithdrawValidatorCommissionResponse): _40.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _40.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.MsgFundCommunityPool;
                fromPartial(object: Partial<_40.MsgFundCommunityPool>): _40.MsgFundCommunityPool;
                fromAmino(object: _40.MsgFundCommunityPoolAmino): _40.MsgFundCommunityPool;
                toAmino(message: _40.MsgFundCommunityPool): _40.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _40.MsgFundCommunityPoolAminoMsg): _40.MsgFundCommunityPool;
                toAminoMsg(message: _40.MsgFundCommunityPool): _40.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _40.MsgFundCommunityPoolProtoMsg): _40.MsgFundCommunityPool;
                toProto(message: _40.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _40.MsgFundCommunityPool): _40.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _40.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_40.MsgFundCommunityPoolResponse>): _40.MsgFundCommunityPoolResponse;
                fromAmino(_: _40.MsgFundCommunityPoolResponseAmino): _40.MsgFundCommunityPoolResponse;
                toAmino(_: _40.MsgFundCommunityPoolResponse): _40.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _40.MsgFundCommunityPoolResponseAminoMsg): _40.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _40.MsgFundCommunityPoolResponse): _40.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _40.MsgFundCommunityPoolResponseProtoMsg): _40.MsgFundCommunityPoolResponse;
                toProto(message: _40.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _40.MsgFundCommunityPoolResponse): _40.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _39.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _39.QueryParamsRequest;
                fromPartial(_: Partial<_39.QueryParamsRequest>): _39.QueryParamsRequest;
                fromAmino(_: _39.QueryParamsRequestAmino): _39.QueryParamsRequest;
                toAmino(_: _39.QueryParamsRequest): _39.QueryParamsRequestAmino;
                fromAminoMsg(object: _39.QueryParamsRequestAminoMsg): _39.QueryParamsRequest;
                toAminoMsg(message: _39.QueryParamsRequest): _39.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _39.QueryParamsRequestProtoMsg): _39.QueryParamsRequest;
                toProto(message: _39.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _39.QueryParamsRequest): _39.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _39.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryParamsResponse;
                fromPartial(object: Partial<_39.QueryParamsResponse>): _39.QueryParamsResponse;
                fromAmino(object: _39.QueryParamsResponseAmino): _39.QueryParamsResponse;
                toAmino(message: _39.QueryParamsResponse): _39.QueryParamsResponseAmino;
                fromAminoMsg(object: _39.QueryParamsResponseAminoMsg): _39.QueryParamsResponse;
                toAminoMsg(message: _39.QueryParamsResponse): _39.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _39.QueryParamsResponseProtoMsg): _39.QueryParamsResponse;
                toProto(message: _39.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _39.QueryParamsResponse): _39.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _39.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_39.QueryValidatorOutstandingRewardsRequest>): _39.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _39.QueryValidatorOutstandingRewardsRequestAmino): _39.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _39.QueryValidatorOutstandingRewardsRequest): _39.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _39.QueryValidatorOutstandingRewardsRequestAminoMsg): _39.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _39.QueryValidatorOutstandingRewardsRequest): _39.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _39.QueryValidatorOutstandingRewardsRequestProtoMsg): _39.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _39.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _39.QueryValidatorOutstandingRewardsRequest): _39.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _39.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_39.QueryValidatorOutstandingRewardsResponse>): _39.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _39.QueryValidatorOutstandingRewardsResponseAmino): _39.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _39.QueryValidatorOutstandingRewardsResponse): _39.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _39.QueryValidatorOutstandingRewardsResponseAminoMsg): _39.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _39.QueryValidatorOutstandingRewardsResponse): _39.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _39.QueryValidatorOutstandingRewardsResponseProtoMsg): _39.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _39.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _39.QueryValidatorOutstandingRewardsResponse): _39.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _39.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_39.QueryValidatorCommissionRequest>): _39.QueryValidatorCommissionRequest;
                fromAmino(object: _39.QueryValidatorCommissionRequestAmino): _39.QueryValidatorCommissionRequest;
                toAmino(message: _39.QueryValidatorCommissionRequest): _39.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _39.QueryValidatorCommissionRequestAminoMsg): _39.QueryValidatorCommissionRequest;
                toAminoMsg(message: _39.QueryValidatorCommissionRequest): _39.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _39.QueryValidatorCommissionRequestProtoMsg): _39.QueryValidatorCommissionRequest;
                toProto(message: _39.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _39.QueryValidatorCommissionRequest): _39.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _39.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_39.QueryValidatorCommissionResponse>): _39.QueryValidatorCommissionResponse;
                fromAmino(object: _39.QueryValidatorCommissionResponseAmino): _39.QueryValidatorCommissionResponse;
                toAmino(message: _39.QueryValidatorCommissionResponse): _39.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _39.QueryValidatorCommissionResponseAminoMsg): _39.QueryValidatorCommissionResponse;
                toAminoMsg(message: _39.QueryValidatorCommissionResponse): _39.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _39.QueryValidatorCommissionResponseProtoMsg): _39.QueryValidatorCommissionResponse;
                toProto(message: _39.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _39.QueryValidatorCommissionResponse): _39.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _39.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_39.QueryValidatorSlashesRequest>): _39.QueryValidatorSlashesRequest;
                fromAmino(object: _39.QueryValidatorSlashesRequestAmino): _39.QueryValidatorSlashesRequest;
                toAmino(message: _39.QueryValidatorSlashesRequest): _39.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _39.QueryValidatorSlashesRequestAminoMsg): _39.QueryValidatorSlashesRequest;
                toAminoMsg(message: _39.QueryValidatorSlashesRequest): _39.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _39.QueryValidatorSlashesRequestProtoMsg): _39.QueryValidatorSlashesRequest;
                toProto(message: _39.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _39.QueryValidatorSlashesRequest): _39.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _39.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_39.QueryValidatorSlashesResponse>): _39.QueryValidatorSlashesResponse;
                fromAmino(object: _39.QueryValidatorSlashesResponseAmino): _39.QueryValidatorSlashesResponse;
                toAmino(message: _39.QueryValidatorSlashesResponse): _39.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _39.QueryValidatorSlashesResponseAminoMsg): _39.QueryValidatorSlashesResponse;
                toAminoMsg(message: _39.QueryValidatorSlashesResponse): _39.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _39.QueryValidatorSlashesResponseProtoMsg): _39.QueryValidatorSlashesResponse;
                toProto(message: _39.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _39.QueryValidatorSlashesResponse): _39.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _39.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_39.QueryDelegationRewardsRequest>): _39.QueryDelegationRewardsRequest;
                fromAmino(object: _39.QueryDelegationRewardsRequestAmino): _39.QueryDelegationRewardsRequest;
                toAmino(message: _39.QueryDelegationRewardsRequest): _39.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _39.QueryDelegationRewardsRequestAminoMsg): _39.QueryDelegationRewardsRequest;
                toAminoMsg(message: _39.QueryDelegationRewardsRequest): _39.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _39.QueryDelegationRewardsRequestProtoMsg): _39.QueryDelegationRewardsRequest;
                toProto(message: _39.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _39.QueryDelegationRewardsRequest): _39.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _39.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_39.QueryDelegationRewardsResponse>): _39.QueryDelegationRewardsResponse;
                fromAmino(object: _39.QueryDelegationRewardsResponseAmino): _39.QueryDelegationRewardsResponse;
                toAmino(message: _39.QueryDelegationRewardsResponse): _39.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _39.QueryDelegationRewardsResponseAminoMsg): _39.QueryDelegationRewardsResponse;
                toAminoMsg(message: _39.QueryDelegationRewardsResponse): _39.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _39.QueryDelegationRewardsResponseProtoMsg): _39.QueryDelegationRewardsResponse;
                toProto(message: _39.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _39.QueryDelegationRewardsResponse): _39.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _39.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_39.QueryDelegationTotalRewardsRequest>): _39.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _39.QueryDelegationTotalRewardsRequestAmino): _39.QueryDelegationTotalRewardsRequest;
                toAmino(message: _39.QueryDelegationTotalRewardsRequest): _39.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _39.QueryDelegationTotalRewardsRequestAminoMsg): _39.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _39.QueryDelegationTotalRewardsRequest): _39.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _39.QueryDelegationTotalRewardsRequestProtoMsg): _39.QueryDelegationTotalRewardsRequest;
                toProto(message: _39.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _39.QueryDelegationTotalRewardsRequest): _39.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _39.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_39.QueryDelegationTotalRewardsResponse>): _39.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _39.QueryDelegationTotalRewardsResponseAmino): _39.QueryDelegationTotalRewardsResponse;
                toAmino(message: _39.QueryDelegationTotalRewardsResponse): _39.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _39.QueryDelegationTotalRewardsResponseAminoMsg): _39.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _39.QueryDelegationTotalRewardsResponse): _39.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _39.QueryDelegationTotalRewardsResponseProtoMsg): _39.QueryDelegationTotalRewardsResponse;
                toProto(message: _39.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _39.QueryDelegationTotalRewardsResponse): _39.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _39.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_39.QueryDelegatorValidatorsRequest>): _39.QueryDelegatorValidatorsRequest;
                fromAmino(object: _39.QueryDelegatorValidatorsRequestAmino): _39.QueryDelegatorValidatorsRequest;
                toAmino(message: _39.QueryDelegatorValidatorsRequest): _39.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _39.QueryDelegatorValidatorsRequestAminoMsg): _39.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _39.QueryDelegatorValidatorsRequest): _39.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _39.QueryDelegatorValidatorsRequestProtoMsg): _39.QueryDelegatorValidatorsRequest;
                toProto(message: _39.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _39.QueryDelegatorValidatorsRequest): _39.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _39.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_39.QueryDelegatorValidatorsResponse>): _39.QueryDelegatorValidatorsResponse;
                fromAmino(object: _39.QueryDelegatorValidatorsResponseAmino): _39.QueryDelegatorValidatorsResponse;
                toAmino(message: _39.QueryDelegatorValidatorsResponse): _39.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _39.QueryDelegatorValidatorsResponseAminoMsg): _39.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _39.QueryDelegatorValidatorsResponse): _39.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _39.QueryDelegatorValidatorsResponseProtoMsg): _39.QueryDelegatorValidatorsResponse;
                toProto(message: _39.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _39.QueryDelegatorValidatorsResponse): _39.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _39.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_39.QueryDelegatorWithdrawAddressRequest>): _39.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _39.QueryDelegatorWithdrawAddressRequestAmino): _39.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _39.QueryDelegatorWithdrawAddressRequest): _39.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _39.QueryDelegatorWithdrawAddressRequestAminoMsg): _39.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _39.QueryDelegatorWithdrawAddressRequest): _39.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _39.QueryDelegatorWithdrawAddressRequestProtoMsg): _39.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _39.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _39.QueryDelegatorWithdrawAddressRequest): _39.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _39.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_39.QueryDelegatorWithdrawAddressResponse>): _39.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _39.QueryDelegatorWithdrawAddressResponseAmino): _39.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _39.QueryDelegatorWithdrawAddressResponse): _39.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _39.QueryDelegatorWithdrawAddressResponseAminoMsg): _39.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _39.QueryDelegatorWithdrawAddressResponse): _39.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _39.QueryDelegatorWithdrawAddressResponseProtoMsg): _39.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _39.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _39.QueryDelegatorWithdrawAddressResponse): _39.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _39.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _39.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_39.QueryCommunityPoolRequest>): _39.QueryCommunityPoolRequest;
                fromAmino(_: _39.QueryCommunityPoolRequestAmino): _39.QueryCommunityPoolRequest;
                toAmino(_: _39.QueryCommunityPoolRequest): _39.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _39.QueryCommunityPoolRequestAminoMsg): _39.QueryCommunityPoolRequest;
                toAminoMsg(message: _39.QueryCommunityPoolRequest): _39.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _39.QueryCommunityPoolRequestProtoMsg): _39.QueryCommunityPoolRequest;
                toProto(message: _39.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _39.QueryCommunityPoolRequest): _39.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _39.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_39.QueryCommunityPoolResponse>): _39.QueryCommunityPoolResponse;
                fromAmino(object: _39.QueryCommunityPoolResponseAmino): _39.QueryCommunityPoolResponse;
                toAmino(message: _39.QueryCommunityPoolResponse): _39.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _39.QueryCommunityPoolResponseAminoMsg): _39.QueryCommunityPoolResponse;
                toAminoMsg(message: _39.QueryCommunityPoolResponse): _39.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _39.QueryCommunityPoolResponseProtoMsg): _39.QueryCommunityPoolResponse;
                toProto(message: _39.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _39.QueryCommunityPoolResponse): _39.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _38.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_38.DelegatorWithdrawInfo>): _38.DelegatorWithdrawInfo;
                fromAmino(object: _38.DelegatorWithdrawInfoAmino): _38.DelegatorWithdrawInfo;
                toAmino(message: _38.DelegatorWithdrawInfo): _38.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _38.DelegatorWithdrawInfoAminoMsg): _38.DelegatorWithdrawInfo;
                toAminoMsg(message: _38.DelegatorWithdrawInfo): _38.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _38.DelegatorWithdrawInfoProtoMsg): _38.DelegatorWithdrawInfo;
                toProto(message: _38.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _38.DelegatorWithdrawInfo): _38.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _38.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_38.ValidatorOutstandingRewardsRecord>): _38.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _38.ValidatorOutstandingRewardsRecordAmino): _38.ValidatorOutstandingRewardsRecord;
                toAmino(message: _38.ValidatorOutstandingRewardsRecord): _38.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _38.ValidatorOutstandingRewardsRecordAminoMsg): _38.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _38.ValidatorOutstandingRewardsRecord): _38.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _38.ValidatorOutstandingRewardsRecordProtoMsg): _38.ValidatorOutstandingRewardsRecord;
                toProto(message: _38.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _38.ValidatorOutstandingRewardsRecord): _38.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _38.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_38.ValidatorAccumulatedCommissionRecord>): _38.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _38.ValidatorAccumulatedCommissionRecordAmino): _38.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _38.ValidatorAccumulatedCommissionRecord): _38.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _38.ValidatorAccumulatedCommissionRecordAminoMsg): _38.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _38.ValidatorAccumulatedCommissionRecord): _38.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _38.ValidatorAccumulatedCommissionRecordProtoMsg): _38.ValidatorAccumulatedCommissionRecord;
                toProto(message: _38.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _38.ValidatorAccumulatedCommissionRecord): _38.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _38.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_38.ValidatorHistoricalRewardsRecord>): _38.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _38.ValidatorHistoricalRewardsRecordAmino): _38.ValidatorHistoricalRewardsRecord;
                toAmino(message: _38.ValidatorHistoricalRewardsRecord): _38.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _38.ValidatorHistoricalRewardsRecordAminoMsg): _38.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _38.ValidatorHistoricalRewardsRecord): _38.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _38.ValidatorHistoricalRewardsRecordProtoMsg): _38.ValidatorHistoricalRewardsRecord;
                toProto(message: _38.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _38.ValidatorHistoricalRewardsRecord): _38.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _38.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_38.ValidatorCurrentRewardsRecord>): _38.ValidatorCurrentRewardsRecord;
                fromAmino(object: _38.ValidatorCurrentRewardsRecordAmino): _38.ValidatorCurrentRewardsRecord;
                toAmino(message: _38.ValidatorCurrentRewardsRecord): _38.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _38.ValidatorCurrentRewardsRecordAminoMsg): _38.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _38.ValidatorCurrentRewardsRecord): _38.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _38.ValidatorCurrentRewardsRecordProtoMsg): _38.ValidatorCurrentRewardsRecord;
                toProto(message: _38.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _38.ValidatorCurrentRewardsRecord): _38.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _38.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_38.DelegatorStartingInfoRecord>): _38.DelegatorStartingInfoRecord;
                fromAmino(object: _38.DelegatorStartingInfoRecordAmino): _38.DelegatorStartingInfoRecord;
                toAmino(message: _38.DelegatorStartingInfoRecord): _38.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _38.DelegatorStartingInfoRecordAminoMsg): _38.DelegatorStartingInfoRecord;
                toAminoMsg(message: _38.DelegatorStartingInfoRecord): _38.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _38.DelegatorStartingInfoRecordProtoMsg): _38.DelegatorStartingInfoRecord;
                toProto(message: _38.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _38.DelegatorStartingInfoRecord): _38.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _38.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_38.ValidatorSlashEventRecord>): _38.ValidatorSlashEventRecord;
                fromAmino(object: _38.ValidatorSlashEventRecordAmino): _38.ValidatorSlashEventRecord;
                toAmino(message: _38.ValidatorSlashEventRecord): _38.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _38.ValidatorSlashEventRecordAminoMsg): _38.ValidatorSlashEventRecord;
                toAminoMsg(message: _38.ValidatorSlashEventRecord): _38.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _38.ValidatorSlashEventRecordProtoMsg): _38.ValidatorSlashEventRecord;
                toProto(message: _38.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _38.ValidatorSlashEventRecord): _38.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _38.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.GenesisState;
                fromPartial(object: Partial<_38.GenesisState>): _38.GenesisState;
                fromAmino(object: _38.GenesisStateAmino): _38.GenesisState;
                toAmino(message: _38.GenesisState): _38.GenesisStateAmino;
                fromAminoMsg(object: _38.GenesisStateAminoMsg): _38.GenesisState;
                toAminoMsg(message: _38.GenesisState): _38.GenesisStateAminoMsg;
                fromProtoMsg(message: _38.GenesisStateProtoMsg): _38.GenesisState;
                toProto(message: _38.GenesisState): Uint8Array;
                toProtoMsg(message: _38.GenesisState): _38.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _37.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.Params;
                fromPartial(object: Partial<_37.Params>): _37.Params;
                fromAmino(object: _37.ParamsAmino): _37.Params;
                toAmino(message: _37.Params): _37.ParamsAmino;
                fromAminoMsg(object: _37.ParamsAminoMsg): _37.Params;
                toAminoMsg(message: _37.Params): _37.ParamsAminoMsg;
                fromProtoMsg(message: _37.ParamsProtoMsg): _37.Params;
                toProto(message: _37.Params): Uint8Array;
                toProtoMsg(message: _37.Params): _37.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _37.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_37.ValidatorHistoricalRewards>): _37.ValidatorHistoricalRewards;
                fromAmino(object: _37.ValidatorHistoricalRewardsAmino): _37.ValidatorHistoricalRewards;
                toAmino(message: _37.ValidatorHistoricalRewards): _37.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _37.ValidatorHistoricalRewardsAminoMsg): _37.ValidatorHistoricalRewards;
                toAminoMsg(message: _37.ValidatorHistoricalRewards): _37.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _37.ValidatorHistoricalRewardsProtoMsg): _37.ValidatorHistoricalRewards;
                toProto(message: _37.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _37.ValidatorHistoricalRewards): _37.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _37.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.ValidatorCurrentRewards;
                fromPartial(object: Partial<_37.ValidatorCurrentRewards>): _37.ValidatorCurrentRewards;
                fromAmino(object: _37.ValidatorCurrentRewardsAmino): _37.ValidatorCurrentRewards;
                toAmino(message: _37.ValidatorCurrentRewards): _37.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _37.ValidatorCurrentRewardsAminoMsg): _37.ValidatorCurrentRewards;
                toAminoMsg(message: _37.ValidatorCurrentRewards): _37.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _37.ValidatorCurrentRewardsProtoMsg): _37.ValidatorCurrentRewards;
                toProto(message: _37.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _37.ValidatorCurrentRewards): _37.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _37.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_37.ValidatorAccumulatedCommission>): _37.ValidatorAccumulatedCommission;
                fromAmino(object: _37.ValidatorAccumulatedCommissionAmino): _37.ValidatorAccumulatedCommission;
                toAmino(message: _37.ValidatorAccumulatedCommission): _37.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _37.ValidatorAccumulatedCommissionAminoMsg): _37.ValidatorAccumulatedCommission;
                toAminoMsg(message: _37.ValidatorAccumulatedCommission): _37.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _37.ValidatorAccumulatedCommissionProtoMsg): _37.ValidatorAccumulatedCommission;
                toProto(message: _37.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _37.ValidatorAccumulatedCommission): _37.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _37.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_37.ValidatorOutstandingRewards>): _37.ValidatorOutstandingRewards;
                fromAmino(object: _37.ValidatorOutstandingRewardsAmino): _37.ValidatorOutstandingRewards;
                toAmino(message: _37.ValidatorOutstandingRewards): _37.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _37.ValidatorOutstandingRewardsAminoMsg): _37.ValidatorOutstandingRewards;
                toAminoMsg(message: _37.ValidatorOutstandingRewards): _37.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _37.ValidatorOutstandingRewardsProtoMsg): _37.ValidatorOutstandingRewards;
                toProto(message: _37.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _37.ValidatorOutstandingRewards): _37.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _37.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.ValidatorSlashEvent;
                fromPartial(object: Partial<_37.ValidatorSlashEvent>): _37.ValidatorSlashEvent;
                fromAmino(object: _37.ValidatorSlashEventAmino): _37.ValidatorSlashEvent;
                toAmino(message: _37.ValidatorSlashEvent): _37.ValidatorSlashEventAmino;
                fromAminoMsg(object: _37.ValidatorSlashEventAminoMsg): _37.ValidatorSlashEvent;
                toAminoMsg(message: _37.ValidatorSlashEvent): _37.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _37.ValidatorSlashEventProtoMsg): _37.ValidatorSlashEvent;
                toProto(message: _37.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _37.ValidatorSlashEvent): _37.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _37.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.ValidatorSlashEvents;
                fromPartial(object: Partial<_37.ValidatorSlashEvents>): _37.ValidatorSlashEvents;
                fromAmino(object: _37.ValidatorSlashEventsAmino): _37.ValidatorSlashEvents;
                toAmino(message: _37.ValidatorSlashEvents): _37.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _37.ValidatorSlashEventsAminoMsg): _37.ValidatorSlashEvents;
                toAminoMsg(message: _37.ValidatorSlashEvents): _37.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _37.ValidatorSlashEventsProtoMsg): _37.ValidatorSlashEvents;
                toProto(message: _37.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _37.ValidatorSlashEvents): _37.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _37.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.FeePool;
                fromPartial(object: Partial<_37.FeePool>): _37.FeePool;
                fromAmino(object: _37.FeePoolAmino): _37.FeePool;
                toAmino(message: _37.FeePool): _37.FeePoolAmino;
                fromAminoMsg(object: _37.FeePoolAminoMsg): _37.FeePool;
                toAminoMsg(message: _37.FeePool): _37.FeePoolAminoMsg;
                fromProtoMsg(message: _37.FeePoolProtoMsg): _37.FeePool;
                toProto(message: _37.FeePool): Uint8Array;
                toProtoMsg(message: _37.FeePool): _37.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _37.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_37.CommunityPoolSpendProposal>): _37.CommunityPoolSpendProposal;
                fromAmino(object: _37.CommunityPoolSpendProposalAmino): _37.CommunityPoolSpendProposal;
                toAmino(message: _37.CommunityPoolSpendProposal): _37.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _37.CommunityPoolSpendProposalAminoMsg): _37.CommunityPoolSpendProposal;
                toAminoMsg(message: _37.CommunityPoolSpendProposal): _37.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _37.CommunityPoolSpendProposalProtoMsg): _37.CommunityPoolSpendProposal;
                toProto(message: _37.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _37.CommunityPoolSpendProposal): _37.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _37.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.DelegatorStartingInfo;
                fromPartial(object: Partial<_37.DelegatorStartingInfo>): _37.DelegatorStartingInfo;
                fromAmino(object: _37.DelegatorStartingInfoAmino): _37.DelegatorStartingInfo;
                toAmino(message: _37.DelegatorStartingInfo): _37.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _37.DelegatorStartingInfoAminoMsg): _37.DelegatorStartingInfo;
                toAminoMsg(message: _37.DelegatorStartingInfo): _37.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _37.DelegatorStartingInfoProtoMsg): _37.DelegatorStartingInfo;
                toProto(message: _37.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _37.DelegatorStartingInfo): _37.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _37.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.DelegationDelegatorReward;
                fromPartial(object: Partial<_37.DelegationDelegatorReward>): _37.DelegationDelegatorReward;
                fromAmino(object: _37.DelegationDelegatorRewardAmino): _37.DelegationDelegatorReward;
                toAmino(message: _37.DelegationDelegatorReward): _37.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _37.DelegationDelegatorRewardAminoMsg): _37.DelegationDelegatorReward;
                toAminoMsg(message: _37.DelegationDelegatorReward): _37.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _37.DelegationDelegatorRewardProtoMsg): _37.DelegationDelegatorReward;
                toProto(message: _37.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _37.DelegationDelegatorReward): _37.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _37.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_37.CommunityPoolSpendProposalWithDeposit>): _37.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _37.CommunityPoolSpendProposalWithDepositAmino): _37.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _37.CommunityPoolSpendProposalWithDeposit): _37.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _37.CommunityPoolSpendProposalWithDepositAminoMsg): _37.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _37.CommunityPoolSpendProposalWithDeposit): _37.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _37.CommunityPoolSpendProposalWithDepositProtoMsg): _37.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _37.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _37.CommunityPoolSpendProposalWithDeposit): _37.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _160.MsgClientImpl;
            QueryClientImpl: typeof _147.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _43.QueryEvidenceRequest): Promise<_43.QueryEvidenceResponse>;
                allEvidence(request?: _43.QueryAllEvidenceRequest): Promise<_43.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _132.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _44.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _44.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _44.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _44.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _44.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _44.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _44.MsgSubmitEvidence) => _44.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _44.MsgSubmitEvidenceAmino) => _44.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _44.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgSubmitEvidence;
                fromPartial(object: Partial<_44.MsgSubmitEvidence>): _44.MsgSubmitEvidence;
                fromAmino(object: _44.MsgSubmitEvidenceAmino): _44.MsgSubmitEvidence;
                toAmino(message: _44.MsgSubmitEvidence): _44.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _44.MsgSubmitEvidenceAminoMsg): _44.MsgSubmitEvidence;
                toAminoMsg(message: _44.MsgSubmitEvidence): _44.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _44.MsgSubmitEvidenceProtoMsg): _44.MsgSubmitEvidence;
                toProto(message: _44.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _44.MsgSubmitEvidence): _44.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _44.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_44.MsgSubmitEvidenceResponse>): _44.MsgSubmitEvidenceResponse;
                fromAmino(object: _44.MsgSubmitEvidenceResponseAmino): _44.MsgSubmitEvidenceResponse;
                toAmino(message: _44.MsgSubmitEvidenceResponse): _44.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _44.MsgSubmitEvidenceResponseAminoMsg): _44.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _44.MsgSubmitEvidenceResponse): _44.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _44.MsgSubmitEvidenceResponseProtoMsg): _44.MsgSubmitEvidenceResponse;
                toProto(message: _44.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _44.MsgSubmitEvidenceResponse): _44.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _43.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryEvidenceRequest;
                fromPartial(object: Partial<_43.QueryEvidenceRequest>): _43.QueryEvidenceRequest;
                fromAmino(object: _43.QueryEvidenceRequestAmino): _43.QueryEvidenceRequest;
                toAmino(message: _43.QueryEvidenceRequest): _43.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _43.QueryEvidenceRequestAminoMsg): _43.QueryEvidenceRequest;
                toAminoMsg(message: _43.QueryEvidenceRequest): _43.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _43.QueryEvidenceRequestProtoMsg): _43.QueryEvidenceRequest;
                toProto(message: _43.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _43.QueryEvidenceRequest): _43.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _43.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryEvidenceResponse;
                fromPartial(object: Partial<_43.QueryEvidenceResponse>): _43.QueryEvidenceResponse;
                fromAmino(object: _43.QueryEvidenceResponseAmino): _43.QueryEvidenceResponse;
                toAmino(message: _43.QueryEvidenceResponse): _43.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _43.QueryEvidenceResponseAminoMsg): _43.QueryEvidenceResponse;
                toAminoMsg(message: _43.QueryEvidenceResponse): _43.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _43.QueryEvidenceResponseProtoMsg): _43.QueryEvidenceResponse;
                toProto(message: _43.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _43.QueryEvidenceResponse): _43.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _43.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_43.QueryAllEvidenceRequest>): _43.QueryAllEvidenceRequest;
                fromAmino(object: _43.QueryAllEvidenceRequestAmino): _43.QueryAllEvidenceRequest;
                toAmino(message: _43.QueryAllEvidenceRequest): _43.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _43.QueryAllEvidenceRequestAminoMsg): _43.QueryAllEvidenceRequest;
                toAminoMsg(message: _43.QueryAllEvidenceRequest): _43.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _43.QueryAllEvidenceRequestProtoMsg): _43.QueryAllEvidenceRequest;
                toProto(message: _43.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _43.QueryAllEvidenceRequest): _43.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _43.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_43.QueryAllEvidenceResponse>): _43.QueryAllEvidenceResponse;
                fromAmino(object: _43.QueryAllEvidenceResponseAmino): _43.QueryAllEvidenceResponse;
                toAmino(message: _43.QueryAllEvidenceResponse): _43.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _43.QueryAllEvidenceResponseAminoMsg): _43.QueryAllEvidenceResponse;
                toAminoMsg(message: _43.QueryAllEvidenceResponse): _43.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _43.QueryAllEvidenceResponseProtoMsg): _43.QueryAllEvidenceResponse;
                toProto(message: _43.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _43.QueryAllEvidenceResponse): _43.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _42.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.GenesisState;
                fromPartial(object: Partial<_42.GenesisState>): _42.GenesisState;
                fromAmino(object: _42.GenesisStateAmino): _42.GenesisState;
                toAmino(message: _42.GenesisState): _42.GenesisStateAmino;
                fromAminoMsg(object: _42.GenesisStateAminoMsg): _42.GenesisState;
                toAminoMsg(message: _42.GenesisState): _42.GenesisStateAminoMsg;
                fromProtoMsg(message: _42.GenesisStateProtoMsg): _42.GenesisState;
                toProto(message: _42.GenesisState): Uint8Array;
                toProtoMsg(message: _42.GenesisState): _42.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _41.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.Equivocation;
                fromPartial(object: Partial<_41.Equivocation>): _41.Equivocation;
                fromAmino(object: _41.EquivocationAmino): _41.Equivocation;
                toAmino(message: _41.Equivocation): _41.EquivocationAmino;
                fromAminoMsg(object: _41.EquivocationAminoMsg): _41.Equivocation;
                toAminoMsg(message: _41.Equivocation): _41.EquivocationAminoMsg;
                fromProtoMsg(message: _41.EquivocationProtoMsg): _41.Equivocation;
                toProto(message: _41.Equivocation): Uint8Array;
                toProtoMsg(message: _41.Equivocation): _41.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _161.MsgClientImpl;
            QueryClientImpl: typeof _148.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _47.QueryAllowanceRequest): Promise<_47.QueryAllowanceResponse>;
                allowances(request: _47.QueryAllowancesRequest): Promise<_47.QueryAllowancesResponse>;
                allowancesByGranter(request: _47.QueryAllowancesByGranterRequest): Promise<_47.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _133.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _48.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _48.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _48.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _48.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _48.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _48.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _48.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _48.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _48.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _48.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _48.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _48.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _48.MsgGrantAllowance) => _48.MsgGrantAllowanceAmino;
                    fromAmino: (object: _48.MsgGrantAllowanceAmino) => _48.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _48.MsgRevokeAllowance) => _48.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _48.MsgRevokeAllowanceAmino) => _48.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _48.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.MsgGrantAllowance;
                fromPartial(object: Partial<_48.MsgGrantAllowance>): _48.MsgGrantAllowance;
                fromAmino(object: _48.MsgGrantAllowanceAmino): _48.MsgGrantAllowance;
                toAmino(message: _48.MsgGrantAllowance): _48.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _48.MsgGrantAllowanceAminoMsg): _48.MsgGrantAllowance;
                toAminoMsg(message: _48.MsgGrantAllowance): _48.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _48.MsgGrantAllowanceProtoMsg): _48.MsgGrantAllowance;
                toProto(message: _48.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _48.MsgGrantAllowance): _48.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _48.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_48.MsgGrantAllowanceResponse>): _48.MsgGrantAllowanceResponse;
                fromAmino(_: _48.MsgGrantAllowanceResponseAmino): _48.MsgGrantAllowanceResponse;
                toAmino(_: _48.MsgGrantAllowanceResponse): _48.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _48.MsgGrantAllowanceResponseAminoMsg): _48.MsgGrantAllowanceResponse;
                toAminoMsg(message: _48.MsgGrantAllowanceResponse): _48.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _48.MsgGrantAllowanceResponseProtoMsg): _48.MsgGrantAllowanceResponse;
                toProto(message: _48.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _48.MsgGrantAllowanceResponse): _48.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _48.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.MsgRevokeAllowance;
                fromPartial(object: Partial<_48.MsgRevokeAllowance>): _48.MsgRevokeAllowance;
                fromAmino(object: _48.MsgRevokeAllowanceAmino): _48.MsgRevokeAllowance;
                toAmino(message: _48.MsgRevokeAllowance): _48.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _48.MsgRevokeAllowanceAminoMsg): _48.MsgRevokeAllowance;
                toAminoMsg(message: _48.MsgRevokeAllowance): _48.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _48.MsgRevokeAllowanceProtoMsg): _48.MsgRevokeAllowance;
                toProto(message: _48.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _48.MsgRevokeAllowance): _48.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _48.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_48.MsgRevokeAllowanceResponse>): _48.MsgRevokeAllowanceResponse;
                fromAmino(_: _48.MsgRevokeAllowanceResponseAmino): _48.MsgRevokeAllowanceResponse;
                toAmino(_: _48.MsgRevokeAllowanceResponse): _48.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _48.MsgRevokeAllowanceResponseAminoMsg): _48.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _48.MsgRevokeAllowanceResponse): _48.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _48.MsgRevokeAllowanceResponseProtoMsg): _48.MsgRevokeAllowanceResponse;
                toProto(message: _48.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _48.MsgRevokeAllowanceResponse): _48.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _45.BasicAllowance | _45.PeriodicAllowance | _45.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _47.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryAllowanceRequest;
                fromPartial(object: Partial<_47.QueryAllowanceRequest>): _47.QueryAllowanceRequest;
                fromAmino(object: _47.QueryAllowanceRequestAmino): _47.QueryAllowanceRequest;
                toAmino(message: _47.QueryAllowanceRequest): _47.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _47.QueryAllowanceRequestAminoMsg): _47.QueryAllowanceRequest;
                toAminoMsg(message: _47.QueryAllowanceRequest): _47.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _47.QueryAllowanceRequestProtoMsg): _47.QueryAllowanceRequest;
                toProto(message: _47.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _47.QueryAllowanceRequest): _47.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _47.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryAllowanceResponse;
                fromPartial(object: Partial<_47.QueryAllowanceResponse>): _47.QueryAllowanceResponse;
                fromAmino(object: _47.QueryAllowanceResponseAmino): _47.QueryAllowanceResponse;
                toAmino(message: _47.QueryAllowanceResponse): _47.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _47.QueryAllowanceResponseAminoMsg): _47.QueryAllowanceResponse;
                toAminoMsg(message: _47.QueryAllowanceResponse): _47.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _47.QueryAllowanceResponseProtoMsg): _47.QueryAllowanceResponse;
                toProto(message: _47.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _47.QueryAllowanceResponse): _47.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _47.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryAllowancesRequest;
                fromPartial(object: Partial<_47.QueryAllowancesRequest>): _47.QueryAllowancesRequest;
                fromAmino(object: _47.QueryAllowancesRequestAmino): _47.QueryAllowancesRequest;
                toAmino(message: _47.QueryAllowancesRequest): _47.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _47.QueryAllowancesRequestAminoMsg): _47.QueryAllowancesRequest;
                toAminoMsg(message: _47.QueryAllowancesRequest): _47.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _47.QueryAllowancesRequestProtoMsg): _47.QueryAllowancesRequest;
                toProto(message: _47.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _47.QueryAllowancesRequest): _47.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _47.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryAllowancesResponse;
                fromPartial(object: Partial<_47.QueryAllowancesResponse>): _47.QueryAllowancesResponse;
                fromAmino(object: _47.QueryAllowancesResponseAmino): _47.QueryAllowancesResponse;
                toAmino(message: _47.QueryAllowancesResponse): _47.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _47.QueryAllowancesResponseAminoMsg): _47.QueryAllowancesResponse;
                toAminoMsg(message: _47.QueryAllowancesResponse): _47.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _47.QueryAllowancesResponseProtoMsg): _47.QueryAllowancesResponse;
                toProto(message: _47.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _47.QueryAllowancesResponse): _47.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _47.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_47.QueryAllowancesByGranterRequest>): _47.QueryAllowancesByGranterRequest;
                fromAmino(object: _47.QueryAllowancesByGranterRequestAmino): _47.QueryAllowancesByGranterRequest;
                toAmino(message: _47.QueryAllowancesByGranterRequest): _47.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _47.QueryAllowancesByGranterRequestAminoMsg): _47.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _47.QueryAllowancesByGranterRequest): _47.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _47.QueryAllowancesByGranterRequestProtoMsg): _47.QueryAllowancesByGranterRequest;
                toProto(message: _47.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _47.QueryAllowancesByGranterRequest): _47.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _47.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_47.QueryAllowancesByGranterResponse>): _47.QueryAllowancesByGranterResponse;
                fromAmino(object: _47.QueryAllowancesByGranterResponseAmino): _47.QueryAllowancesByGranterResponse;
                toAmino(message: _47.QueryAllowancesByGranterResponse): _47.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _47.QueryAllowancesByGranterResponseAminoMsg): _47.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _47.QueryAllowancesByGranterResponse): _47.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _47.QueryAllowancesByGranterResponseProtoMsg): _47.QueryAllowancesByGranterResponse;
                toProto(message: _47.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _47.QueryAllowancesByGranterResponse): _47.QueryAllowancesByGranterResponseProtoMsg;
            };
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _45.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.BasicAllowance;
                fromPartial(object: Partial<_45.BasicAllowance>): _45.BasicAllowance;
                fromAmino(object: _45.BasicAllowanceAmino): _45.BasicAllowance;
                toAmino(message: _45.BasicAllowance): _45.BasicAllowanceAmino;
                fromAminoMsg(object: _45.BasicAllowanceAminoMsg): _45.BasicAllowance;
                toAminoMsg(message: _45.BasicAllowance): _45.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _45.BasicAllowanceProtoMsg): _45.BasicAllowance;
                toProto(message: _45.BasicAllowance): Uint8Array;
                toProtoMsg(message: _45.BasicAllowance): _45.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _45.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.PeriodicAllowance;
                fromPartial(object: Partial<_45.PeriodicAllowance>): _45.PeriodicAllowance;
                fromAmino(object: _45.PeriodicAllowanceAmino): _45.PeriodicAllowance;
                toAmino(message: _45.PeriodicAllowance): _45.PeriodicAllowanceAmino;
                fromAminoMsg(object: _45.PeriodicAllowanceAminoMsg): _45.PeriodicAllowance;
                toAminoMsg(message: _45.PeriodicAllowance): _45.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _45.PeriodicAllowanceProtoMsg): _45.PeriodicAllowance;
                toProto(message: _45.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _45.PeriodicAllowance): _45.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _45.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.AllowedMsgAllowance;
                fromPartial(object: Partial<_45.AllowedMsgAllowance>): _45.AllowedMsgAllowance;
                fromAmino(object: _45.AllowedMsgAllowanceAmino): _45.AllowedMsgAllowance;
                toAmino(message: _45.AllowedMsgAllowance): _45.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _45.AllowedMsgAllowanceAminoMsg): _45.AllowedMsgAllowance;
                toAminoMsg(message: _45.AllowedMsgAllowance): _45.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _45.AllowedMsgAllowanceProtoMsg): _45.AllowedMsgAllowance;
                toProto(message: _45.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _45.AllowedMsgAllowance): _45.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _45.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.Grant;
                fromPartial(object: Partial<_45.Grant>): _45.Grant;
                fromAmino(object: _45.GrantAmino): _45.Grant;
                toAmino(message: _45.Grant): _45.GrantAmino;
                fromAminoMsg(object: _45.GrantAminoMsg): _45.Grant;
                toAminoMsg(message: _45.Grant): _45.GrantAminoMsg;
                fromProtoMsg(message: _45.GrantProtoMsg): _45.Grant;
                toProto(message: _45.Grant): Uint8Array;
                toProtoMsg(message: _45.Grant): _45.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
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
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _162.MsgClientImpl;
            QueryClientImpl: typeof _149.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _52.QueryProposalRequest): Promise<_52.QueryProposalResponse>;
                proposals(request: _52.QueryProposalsRequest): Promise<_52.QueryProposalsResponse>;
                vote(request: _52.QueryVoteRequest): Promise<_52.QueryVoteResponse>;
                votes(request: _52.QueryVotesRequest): Promise<_52.QueryVotesResponse>;
                params(request: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                deposit(request: _52.QueryDepositRequest): Promise<_52.QueryDepositResponse>;
                deposits(request: _52.QueryDepositsRequest): Promise<_52.QueryDepositsResponse>;
                tallyResult(request: _52.QueryTallyResultRequest): Promise<_52.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _134.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _53.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _53.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _53.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _53.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _53.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _53.MsgSubmitProposal;
                    };
                    vote(value: _53.MsgVote): {
                        typeUrl: string;
                        value: _53.MsgVote;
                    };
                    voteWeighted(value: _53.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _53.MsgVoteWeighted;
                    };
                    deposit(value: _53.MsgDeposit): {
                        typeUrl: string;
                        value: _53.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _53.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _53.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _53.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _53.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _53.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _53.MsgSubmitProposal;
                    };
                    vote(value: _53.MsgVote): {
                        typeUrl: string;
                        value: _53.MsgVote;
                    };
                    voteWeighted(value: _53.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _53.MsgVoteWeighted;
                    };
                    deposit(value: _53.MsgDeposit): {
                        typeUrl: string;
                        value: _53.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _53.MsgSubmitProposal) => _53.MsgSubmitProposalAmino;
                    fromAmino: (object: _53.MsgSubmitProposalAmino) => _53.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _53.MsgVote) => _53.MsgVoteAmino;
                    fromAmino: (object: _53.MsgVoteAmino) => _53.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _53.MsgVoteWeighted) => _53.MsgVoteWeightedAmino;
                    fromAmino: (object: _53.MsgVoteWeightedAmino) => _53.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _53.MsgDeposit) => _53.MsgDepositAmino;
                    fromAmino: (object: _53.MsgDepositAmino) => _53.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _53.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgSubmitProposal;
                fromPartial(object: Partial<_53.MsgSubmitProposal>): _53.MsgSubmitProposal;
                fromAmino(object: _53.MsgSubmitProposalAmino): _53.MsgSubmitProposal;
                toAmino(message: _53.MsgSubmitProposal): _53.MsgSubmitProposalAmino;
                fromAminoMsg(object: _53.MsgSubmitProposalAminoMsg): _53.MsgSubmitProposal;
                toAminoMsg(message: _53.MsgSubmitProposal): _53.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _53.MsgSubmitProposalProtoMsg): _53.MsgSubmitProposal;
                toProto(message: _53.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _53.MsgSubmitProposal): _53.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _53.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_53.MsgSubmitProposalResponse>): _53.MsgSubmitProposalResponse;
                fromAmino(object: _53.MsgSubmitProposalResponseAmino): _53.MsgSubmitProposalResponse;
                toAmino(message: _53.MsgSubmitProposalResponse): _53.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _53.MsgSubmitProposalResponseAminoMsg): _53.MsgSubmitProposalResponse;
                toAminoMsg(message: _53.MsgSubmitProposalResponse): _53.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _53.MsgSubmitProposalResponseProtoMsg): _53.MsgSubmitProposalResponse;
                toProto(message: _53.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _53.MsgSubmitProposalResponse): _53.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _53.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgVote;
                fromPartial(object: Partial<_53.MsgVote>): _53.MsgVote;
                fromAmino(object: _53.MsgVoteAmino): _53.MsgVote;
                toAmino(message: _53.MsgVote): _53.MsgVoteAmino;
                fromAminoMsg(object: _53.MsgVoteAminoMsg): _53.MsgVote;
                toAminoMsg(message: _53.MsgVote): _53.MsgVoteAminoMsg;
                fromProtoMsg(message: _53.MsgVoteProtoMsg): _53.MsgVote;
                toProto(message: _53.MsgVote): Uint8Array;
                toProtoMsg(message: _53.MsgVote): _53.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _53.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.MsgVoteResponse;
                fromPartial(_: Partial<_53.MsgVoteResponse>): _53.MsgVoteResponse;
                fromAmino(_: _53.MsgVoteResponseAmino): _53.MsgVoteResponse;
                toAmino(_: _53.MsgVoteResponse): _53.MsgVoteResponseAmino;
                fromAminoMsg(object: _53.MsgVoteResponseAminoMsg): _53.MsgVoteResponse;
                toAminoMsg(message: _53.MsgVoteResponse): _53.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _53.MsgVoteResponseProtoMsg): _53.MsgVoteResponse;
                toProto(message: _53.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _53.MsgVoteResponse): _53.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _53.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgVoteWeighted;
                fromPartial(object: Partial<_53.MsgVoteWeighted>): _53.MsgVoteWeighted;
                fromAmino(object: _53.MsgVoteWeightedAmino): _53.MsgVoteWeighted;
                toAmino(message: _53.MsgVoteWeighted): _53.MsgVoteWeightedAmino;
                fromAminoMsg(object: _53.MsgVoteWeightedAminoMsg): _53.MsgVoteWeighted;
                toAminoMsg(message: _53.MsgVoteWeighted): _53.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _53.MsgVoteWeightedProtoMsg): _53.MsgVoteWeighted;
                toProto(message: _53.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _53.MsgVoteWeighted): _53.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _53.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_53.MsgVoteWeightedResponse>): _53.MsgVoteWeightedResponse;
                fromAmino(_: _53.MsgVoteWeightedResponseAmino): _53.MsgVoteWeightedResponse;
                toAmino(_: _53.MsgVoteWeightedResponse): _53.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _53.MsgVoteWeightedResponseAminoMsg): _53.MsgVoteWeightedResponse;
                toAminoMsg(message: _53.MsgVoteWeightedResponse): _53.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _53.MsgVoteWeightedResponseProtoMsg): _53.MsgVoteWeightedResponse;
                toProto(message: _53.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _53.MsgVoteWeightedResponse): _53.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _53.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgDeposit;
                fromPartial(object: Partial<_53.MsgDeposit>): _53.MsgDeposit;
                fromAmino(object: _53.MsgDepositAmino): _53.MsgDeposit;
                toAmino(message: _53.MsgDeposit): _53.MsgDepositAmino;
                fromAminoMsg(object: _53.MsgDepositAminoMsg): _53.MsgDeposit;
                toAminoMsg(message: _53.MsgDeposit): _53.MsgDepositAminoMsg;
                fromProtoMsg(message: _53.MsgDepositProtoMsg): _53.MsgDeposit;
                toProto(message: _53.MsgDeposit): Uint8Array;
                toProtoMsg(message: _53.MsgDeposit): _53.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _53.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.MsgDepositResponse;
                fromPartial(_: Partial<_53.MsgDepositResponse>): _53.MsgDepositResponse;
                fromAmino(_: _53.MsgDepositResponseAmino): _53.MsgDepositResponse;
                toAmino(_: _53.MsgDepositResponse): _53.MsgDepositResponseAmino;
                fromAminoMsg(object: _53.MsgDepositResponseAminoMsg): _53.MsgDepositResponse;
                toAminoMsg(message: _53.MsgDepositResponse): _53.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _53.MsgDepositResponseProtoMsg): _53.MsgDepositResponse;
                toProto(message: _53.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _53.MsgDepositResponse): _53.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _51.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _52.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryProposalRequest;
                fromPartial(object: Partial<_52.QueryProposalRequest>): _52.QueryProposalRequest;
                fromAmino(object: _52.QueryProposalRequestAmino): _52.QueryProposalRequest;
                toAmino(message: _52.QueryProposalRequest): _52.QueryProposalRequestAmino;
                fromAminoMsg(object: _52.QueryProposalRequestAminoMsg): _52.QueryProposalRequest;
                toAminoMsg(message: _52.QueryProposalRequest): _52.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _52.QueryProposalRequestProtoMsg): _52.QueryProposalRequest;
                toProto(message: _52.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _52.QueryProposalRequest): _52.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _52.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryProposalResponse;
                fromPartial(object: Partial<_52.QueryProposalResponse>): _52.QueryProposalResponse;
                fromAmino(object: _52.QueryProposalResponseAmino): _52.QueryProposalResponse;
                toAmino(message: _52.QueryProposalResponse): _52.QueryProposalResponseAmino;
                fromAminoMsg(object: _52.QueryProposalResponseAminoMsg): _52.QueryProposalResponse;
                toAminoMsg(message: _52.QueryProposalResponse): _52.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _52.QueryProposalResponseProtoMsg): _52.QueryProposalResponse;
                toProto(message: _52.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _52.QueryProposalResponse): _52.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _52.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryProposalsRequest;
                fromPartial(object: Partial<_52.QueryProposalsRequest>): _52.QueryProposalsRequest;
                fromAmino(object: _52.QueryProposalsRequestAmino): _52.QueryProposalsRequest;
                toAmino(message: _52.QueryProposalsRequest): _52.QueryProposalsRequestAmino;
                fromAminoMsg(object: _52.QueryProposalsRequestAminoMsg): _52.QueryProposalsRequest;
                toAminoMsg(message: _52.QueryProposalsRequest): _52.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _52.QueryProposalsRequestProtoMsg): _52.QueryProposalsRequest;
                toProto(message: _52.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _52.QueryProposalsRequest): _52.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _52.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryProposalsResponse;
                fromPartial(object: Partial<_52.QueryProposalsResponse>): _52.QueryProposalsResponse;
                fromAmino(object: _52.QueryProposalsResponseAmino): _52.QueryProposalsResponse;
                toAmino(message: _52.QueryProposalsResponse): _52.QueryProposalsResponseAmino;
                fromAminoMsg(object: _52.QueryProposalsResponseAminoMsg): _52.QueryProposalsResponse;
                toAminoMsg(message: _52.QueryProposalsResponse): _52.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _52.QueryProposalsResponseProtoMsg): _52.QueryProposalsResponse;
                toProto(message: _52.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _52.QueryProposalsResponse): _52.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _52.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryVoteRequest;
                fromPartial(object: Partial<_52.QueryVoteRequest>): _52.QueryVoteRequest;
                fromAmino(object: _52.QueryVoteRequestAmino): _52.QueryVoteRequest;
                toAmino(message: _52.QueryVoteRequest): _52.QueryVoteRequestAmino;
                fromAminoMsg(object: _52.QueryVoteRequestAminoMsg): _52.QueryVoteRequest;
                toAminoMsg(message: _52.QueryVoteRequest): _52.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _52.QueryVoteRequestProtoMsg): _52.QueryVoteRequest;
                toProto(message: _52.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _52.QueryVoteRequest): _52.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _52.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryVoteResponse;
                fromPartial(object: Partial<_52.QueryVoteResponse>): _52.QueryVoteResponse;
                fromAmino(object: _52.QueryVoteResponseAmino): _52.QueryVoteResponse;
                toAmino(message: _52.QueryVoteResponse): _52.QueryVoteResponseAmino;
                fromAminoMsg(object: _52.QueryVoteResponseAminoMsg): _52.QueryVoteResponse;
                toAminoMsg(message: _52.QueryVoteResponse): _52.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _52.QueryVoteResponseProtoMsg): _52.QueryVoteResponse;
                toProto(message: _52.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _52.QueryVoteResponse): _52.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _52.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryVotesRequest;
                fromPartial(object: Partial<_52.QueryVotesRequest>): _52.QueryVotesRequest;
                fromAmino(object: _52.QueryVotesRequestAmino): _52.QueryVotesRequest;
                toAmino(message: _52.QueryVotesRequest): _52.QueryVotesRequestAmino;
                fromAminoMsg(object: _52.QueryVotesRequestAminoMsg): _52.QueryVotesRequest;
                toAminoMsg(message: _52.QueryVotesRequest): _52.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _52.QueryVotesRequestProtoMsg): _52.QueryVotesRequest;
                toProto(message: _52.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _52.QueryVotesRequest): _52.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _52.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryVotesResponse;
                fromPartial(object: Partial<_52.QueryVotesResponse>): _52.QueryVotesResponse;
                fromAmino(object: _52.QueryVotesResponseAmino): _52.QueryVotesResponse;
                toAmino(message: _52.QueryVotesResponse): _52.QueryVotesResponseAmino;
                fromAminoMsg(object: _52.QueryVotesResponseAminoMsg): _52.QueryVotesResponse;
                toAminoMsg(message: _52.QueryVotesResponse): _52.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _52.QueryVotesResponseProtoMsg): _52.QueryVotesResponse;
                toProto(message: _52.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _52.QueryVotesResponse): _52.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _52.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryParamsRequest;
                fromPartial(object: Partial<_52.QueryParamsRequest>): _52.QueryParamsRequest;
                fromAmino(object: _52.QueryParamsRequestAmino): _52.QueryParamsRequest;
                toAmino(message: _52.QueryParamsRequest): _52.QueryParamsRequestAmino;
                fromAminoMsg(object: _52.QueryParamsRequestAminoMsg): _52.QueryParamsRequest;
                toAminoMsg(message: _52.QueryParamsRequest): _52.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _52.QueryParamsRequestProtoMsg): _52.QueryParamsRequest;
                toProto(message: _52.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _52.QueryParamsRequest): _52.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _52.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryParamsResponse;
                fromPartial(object: Partial<_52.QueryParamsResponse>): _52.QueryParamsResponse;
                fromAmino(object: _52.QueryParamsResponseAmino): _52.QueryParamsResponse;
                toAmino(message: _52.QueryParamsResponse): _52.QueryParamsResponseAmino;
                fromAminoMsg(object: _52.QueryParamsResponseAminoMsg): _52.QueryParamsResponse;
                toAminoMsg(message: _52.QueryParamsResponse): _52.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _52.QueryParamsResponseProtoMsg): _52.QueryParamsResponse;
                toProto(message: _52.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _52.QueryParamsResponse): _52.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _52.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryDepositRequest;
                fromPartial(object: Partial<_52.QueryDepositRequest>): _52.QueryDepositRequest;
                fromAmino(object: _52.QueryDepositRequestAmino): _52.QueryDepositRequest;
                toAmino(message: _52.QueryDepositRequest): _52.QueryDepositRequestAmino;
                fromAminoMsg(object: _52.QueryDepositRequestAminoMsg): _52.QueryDepositRequest;
                toAminoMsg(message: _52.QueryDepositRequest): _52.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _52.QueryDepositRequestProtoMsg): _52.QueryDepositRequest;
                toProto(message: _52.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _52.QueryDepositRequest): _52.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _52.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryDepositResponse;
                fromPartial(object: Partial<_52.QueryDepositResponse>): _52.QueryDepositResponse;
                fromAmino(object: _52.QueryDepositResponseAmino): _52.QueryDepositResponse;
                toAmino(message: _52.QueryDepositResponse): _52.QueryDepositResponseAmino;
                fromAminoMsg(object: _52.QueryDepositResponseAminoMsg): _52.QueryDepositResponse;
                toAminoMsg(message: _52.QueryDepositResponse): _52.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _52.QueryDepositResponseProtoMsg): _52.QueryDepositResponse;
                toProto(message: _52.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _52.QueryDepositResponse): _52.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _52.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryDepositsRequest;
                fromPartial(object: Partial<_52.QueryDepositsRequest>): _52.QueryDepositsRequest;
                fromAmino(object: _52.QueryDepositsRequestAmino): _52.QueryDepositsRequest;
                toAmino(message: _52.QueryDepositsRequest): _52.QueryDepositsRequestAmino;
                fromAminoMsg(object: _52.QueryDepositsRequestAminoMsg): _52.QueryDepositsRequest;
                toAminoMsg(message: _52.QueryDepositsRequest): _52.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _52.QueryDepositsRequestProtoMsg): _52.QueryDepositsRequest;
                toProto(message: _52.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _52.QueryDepositsRequest): _52.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _52.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryDepositsResponse;
                fromPartial(object: Partial<_52.QueryDepositsResponse>): _52.QueryDepositsResponse;
                fromAmino(object: _52.QueryDepositsResponseAmino): _52.QueryDepositsResponse;
                toAmino(message: _52.QueryDepositsResponse): _52.QueryDepositsResponseAmino;
                fromAminoMsg(object: _52.QueryDepositsResponseAminoMsg): _52.QueryDepositsResponse;
                toAminoMsg(message: _52.QueryDepositsResponse): _52.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _52.QueryDepositsResponseProtoMsg): _52.QueryDepositsResponse;
                toProto(message: _52.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _52.QueryDepositsResponse): _52.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _52.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryTallyResultRequest;
                fromPartial(object: Partial<_52.QueryTallyResultRequest>): _52.QueryTallyResultRequest;
                fromAmino(object: _52.QueryTallyResultRequestAmino): _52.QueryTallyResultRequest;
                toAmino(message: _52.QueryTallyResultRequest): _52.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _52.QueryTallyResultRequestAminoMsg): _52.QueryTallyResultRequest;
                toAminoMsg(message: _52.QueryTallyResultRequest): _52.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _52.QueryTallyResultRequestProtoMsg): _52.QueryTallyResultRequest;
                toProto(message: _52.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _52.QueryTallyResultRequest): _52.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _52.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryTallyResultResponse;
                fromPartial(object: Partial<_52.QueryTallyResultResponse>): _52.QueryTallyResultResponse;
                fromAmino(object: _52.QueryTallyResultResponseAmino): _52.QueryTallyResultResponse;
                toAmino(message: _52.QueryTallyResultResponse): _52.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _52.QueryTallyResultResponseAminoMsg): _52.QueryTallyResultResponse;
                toAminoMsg(message: _52.QueryTallyResultResponse): _52.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _52.QueryTallyResultResponseProtoMsg): _52.QueryTallyResultResponse;
                toProto(message: _52.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _52.QueryTallyResultResponse): _52.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _51.VoteOption;
            voteOptionToJSON(object: _51.VoteOption): string;
            proposalStatusFromJSON(object: any): _51.ProposalStatus;
            proposalStatusToJSON(object: _51.ProposalStatus): string;
            VoteOption: typeof _51.VoteOption;
            VoteOptionSDKType: typeof _51.VoteOption;
            VoteOptionAmino: typeof _51.VoteOption;
            ProposalStatus: typeof _51.ProposalStatus;
            ProposalStatusSDKType: typeof _51.ProposalStatus;
            ProposalStatusAmino: typeof _51.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _51.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.WeightedVoteOption;
                fromPartial(object: Partial<_51.WeightedVoteOption>): _51.WeightedVoteOption;
                fromAmino(object: _51.WeightedVoteOptionAmino): _51.WeightedVoteOption;
                toAmino(message: _51.WeightedVoteOption): _51.WeightedVoteOptionAmino;
                fromAminoMsg(object: _51.WeightedVoteOptionAminoMsg): _51.WeightedVoteOption;
                toAminoMsg(message: _51.WeightedVoteOption): _51.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _51.WeightedVoteOptionProtoMsg): _51.WeightedVoteOption;
                toProto(message: _51.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _51.WeightedVoteOption): _51.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _51.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.TextProposal;
                fromPartial(object: Partial<_51.TextProposal>): _51.TextProposal;
                fromAmino(object: _51.TextProposalAmino): _51.TextProposal;
                toAmino(message: _51.TextProposal): _51.TextProposalAmino;
                fromAminoMsg(object: _51.TextProposalAminoMsg): _51.TextProposal;
                toAminoMsg(message: _51.TextProposal): _51.TextProposalAminoMsg;
                fromProtoMsg(message: _51.TextProposalProtoMsg): _51.TextProposal;
                toProto(message: _51.TextProposal): Uint8Array;
                toProtoMsg(message: _51.TextProposal): _51.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _51.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.Deposit;
                fromPartial(object: Partial<_51.Deposit>): _51.Deposit;
                fromAmino(object: _51.DepositAmino): _51.Deposit;
                toAmino(message: _51.Deposit): _51.DepositAmino;
                fromAminoMsg(object: _51.DepositAminoMsg): _51.Deposit;
                toAminoMsg(message: _51.Deposit): _51.DepositAminoMsg;
                fromProtoMsg(message: _51.DepositProtoMsg): _51.Deposit;
                toProto(message: _51.Deposit): Uint8Array;
                toProtoMsg(message: _51.Deposit): _51.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _51.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.Proposal;
                fromPartial(object: Partial<_51.Proposal>): _51.Proposal;
                fromAmino(object: _51.ProposalAmino): _51.Proposal;
                toAmino(message: _51.Proposal): _51.ProposalAmino;
                fromAminoMsg(object: _51.ProposalAminoMsg): _51.Proposal;
                toAminoMsg(message: _51.Proposal): _51.ProposalAminoMsg;
                fromProtoMsg(message: _51.ProposalProtoMsg): _51.Proposal;
                toProto(message: _51.Proposal): Uint8Array;
                toProtoMsg(message: _51.Proposal): _51.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _51.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.TallyResult;
                fromPartial(object: Partial<_51.TallyResult>): _51.TallyResult;
                fromAmino(object: _51.TallyResultAmino): _51.TallyResult;
                toAmino(message: _51.TallyResult): _51.TallyResultAmino;
                fromAminoMsg(object: _51.TallyResultAminoMsg): _51.TallyResult;
                toAminoMsg(message: _51.TallyResult): _51.TallyResultAminoMsg;
                fromProtoMsg(message: _51.TallyResultProtoMsg): _51.TallyResult;
                toProto(message: _51.TallyResult): Uint8Array;
                toProtoMsg(message: _51.TallyResult): _51.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _51.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.Vote;
                fromPartial(object: Partial<_51.Vote>): _51.Vote;
                fromAmino(object: _51.VoteAmino): _51.Vote;
                toAmino(message: _51.Vote): _51.VoteAmino;
                fromAminoMsg(object: _51.VoteAminoMsg): _51.Vote;
                toAminoMsg(message: _51.Vote): _51.VoteAminoMsg;
                fromProtoMsg(message: _51.VoteProtoMsg): _51.Vote;
                toProto(message: _51.Vote): Uint8Array;
                toProtoMsg(message: _51.Vote): _51.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _51.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.DepositParams;
                fromPartial(object: Partial<_51.DepositParams>): _51.DepositParams;
                fromAmino(object: _51.DepositParamsAmino): _51.DepositParams;
                toAmino(message: _51.DepositParams): _51.DepositParamsAmino;
                fromAminoMsg(object: _51.DepositParamsAminoMsg): _51.DepositParams;
                toAminoMsg(message: _51.DepositParams): _51.DepositParamsAminoMsg;
                fromProtoMsg(message: _51.DepositParamsProtoMsg): _51.DepositParams;
                toProto(message: _51.DepositParams): Uint8Array;
                toProtoMsg(message: _51.DepositParams): _51.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _51.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.VotingParams;
                fromPartial(object: Partial<_51.VotingParams>): _51.VotingParams;
                fromAmino(object: _51.VotingParamsAmino): _51.VotingParams;
                toAmino(message: _51.VotingParams): _51.VotingParamsAmino;
                fromAminoMsg(object: _51.VotingParamsAminoMsg): _51.VotingParams;
                toAminoMsg(message: _51.VotingParams): _51.VotingParamsAminoMsg;
                fromProtoMsg(message: _51.VotingParamsProtoMsg): _51.VotingParams;
                toProto(message: _51.VotingParams): Uint8Array;
                toProtoMsg(message: _51.VotingParams): _51.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _51.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.TallyParams;
                fromPartial(object: Partial<_51.TallyParams>): _51.TallyParams;
                fromAmino(object: _51.TallyParamsAmino): _51.TallyParams;
                toAmino(message: _51.TallyParams): _51.TallyParamsAmino;
                fromAminoMsg(object: _51.TallyParamsAminoMsg): _51.TallyParams;
                toAminoMsg(message: _51.TallyParams): _51.TallyParamsAminoMsg;
                fromProtoMsg(message: _51.TallyParamsProtoMsg): _51.TallyParams;
                toProto(message: _51.TallyParams): Uint8Array;
                toProtoMsg(message: _51.TallyParams): _51.TallyParamsProtoMsg;
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
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _150.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                inflation(request?: _56.QueryInflationRequest): Promise<_56.QueryInflationResponse>;
                annualProvisions(request?: _56.QueryAnnualProvisionsRequest): Promise<_56.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _135.LCDQueryClient;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _56.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _56.QueryInflationRequest;
                fromPartial(_: Partial<_56.QueryInflationRequest>): _56.QueryInflationRequest;
                fromAmino(_: _56.QueryInflationRequestAmino): _56.QueryInflationRequest;
                toAmino(_: _56.QueryInflationRequest): _56.QueryInflationRequestAmino;
                fromAminoMsg(object: _56.QueryInflationRequestAminoMsg): _56.QueryInflationRequest;
                toAminoMsg(message: _56.QueryInflationRequest): _56.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _56.QueryInflationRequestProtoMsg): _56.QueryInflationRequest;
                toProto(message: _56.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _56.QueryInflationRequest): _56.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _56.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryInflationResponse;
                fromPartial(object: Partial<_56.QueryInflationResponse>): _56.QueryInflationResponse;
                fromAmino(object: _56.QueryInflationResponseAmino): _56.QueryInflationResponse;
                toAmino(message: _56.QueryInflationResponse): _56.QueryInflationResponseAmino;
                fromAminoMsg(object: _56.QueryInflationResponseAminoMsg): _56.QueryInflationResponse;
                toAminoMsg(message: _56.QueryInflationResponse): _56.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _56.QueryInflationResponseProtoMsg): _56.QueryInflationResponse;
                toProto(message: _56.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _56.QueryInflationResponse): _56.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _56.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _56.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_56.QueryAnnualProvisionsRequest>): _56.QueryAnnualProvisionsRequest;
                fromAmino(_: _56.QueryAnnualProvisionsRequestAmino): _56.QueryAnnualProvisionsRequest;
                toAmino(_: _56.QueryAnnualProvisionsRequest): _56.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _56.QueryAnnualProvisionsRequestAminoMsg): _56.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _56.QueryAnnualProvisionsRequest): _56.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryAnnualProvisionsRequestProtoMsg): _56.QueryAnnualProvisionsRequest;
                toProto(message: _56.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryAnnualProvisionsRequest): _56.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _56.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_56.QueryAnnualProvisionsResponse>): _56.QueryAnnualProvisionsResponse;
                fromAmino(object: _56.QueryAnnualProvisionsResponseAmino): _56.QueryAnnualProvisionsResponse;
                toAmino(message: _56.QueryAnnualProvisionsResponse): _56.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _56.QueryAnnualProvisionsResponseAminoMsg): _56.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _56.QueryAnnualProvisionsResponse): _56.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryAnnualProvisionsResponseProtoMsg): _56.QueryAnnualProvisionsResponse;
                toProto(message: _56.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryAnnualProvisionsResponse): _56.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _55.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.Minter;
                fromPartial(object: Partial<_55.Minter>): _55.Minter;
                fromAmino(object: _55.MinterAmino): _55.Minter;
                toAmino(message: _55.Minter): _55.MinterAmino;
                fromAminoMsg(object: _55.MinterAminoMsg): _55.Minter;
                toAminoMsg(message: _55.Minter): _55.MinterAminoMsg;
                fromProtoMsg(message: _55.MinterProtoMsg): _55.Minter;
                toProto(message: _55.Minter): Uint8Array;
                toProtoMsg(message: _55.Minter): _55.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _55.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.Params;
                fromPartial(object: Partial<_55.Params>): _55.Params;
                fromAmino(object: _55.ParamsAmino): _55.Params;
                toAmino(message: _55.Params): _55.ParamsAmino;
                fromAminoMsg(object: _55.ParamsAminoMsg): _55.Params;
                toAminoMsg(message: _55.Params): _55.ParamsAminoMsg;
                fromProtoMsg(message: _55.ParamsProtoMsg): _55.Params;
                toProto(message: _55.Params): Uint8Array;
                toProtoMsg(message: _55.Params): _55.ParamsProtoMsg;
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
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _151.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _136.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _58.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryParamsRequest;
                fromPartial(object: Partial<_58.QueryParamsRequest>): _58.QueryParamsRequest;
                fromAmino(object: _58.QueryParamsRequestAmino): _58.QueryParamsRequest;
                toAmino(message: _58.QueryParamsRequest): _58.QueryParamsRequestAmino;
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
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _57.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ParameterChangeProposal;
                fromPartial(object: Partial<_57.ParameterChangeProposal>): _57.ParameterChangeProposal;
                fromAmino(object: _57.ParameterChangeProposalAmino): _57.ParameterChangeProposal;
                toAmino(message: _57.ParameterChangeProposal): _57.ParameterChangeProposalAmino;
                fromAminoMsg(object: _57.ParameterChangeProposalAminoMsg): _57.ParameterChangeProposal;
                toAminoMsg(message: _57.ParameterChangeProposal): _57.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _57.ParameterChangeProposalProtoMsg): _57.ParameterChangeProposal;
                toProto(message: _57.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _57.ParameterChangeProposal): _57.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _57.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ParamChange;
                fromPartial(object: Partial<_57.ParamChange>): _57.ParamChange;
                fromAmino(object: _57.ParamChangeAmino): _57.ParamChange;
                toAmino(message: _57.ParamChange): _57.ParamChangeAmino;
                fromAminoMsg(object: _57.ParamChangeAminoMsg): _57.ParamChange;
                toAminoMsg(message: _57.ParamChange): _57.ParamChangeAminoMsg;
                fromProtoMsg(message: _57.ParamChangeProtoMsg): _57.ParamChange;
                toProto(message: _57.ParamChange): Uint8Array;
                toProtoMsg(message: _57.ParamChange): _57.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _163.MsgClientImpl;
            QueryClientImpl: typeof _152.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                signingInfo(request: _60.QuerySigningInfoRequest): Promise<_60.QuerySigningInfoResponse>;
                signingInfos(request?: _60.QuerySigningInfosRequest): Promise<_60.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _137.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _62.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _62.MsgUnjail): {
                        typeUrl: string;
                        value: _62.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _62.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _62.MsgUnjail): {
                        typeUrl: string;
                        value: _62.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _62.MsgUnjail) => _62.MsgUnjailAmino;
                    fromAmino: (object: _62.MsgUnjailAmino) => _62.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _62.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgUnjail;
                fromPartial(object: Partial<_62.MsgUnjail>): _62.MsgUnjail;
                fromAmino(object: _62.MsgUnjailAmino): _62.MsgUnjail;
                toAmino(message: _62.MsgUnjail): _62.MsgUnjailAmino;
                fromAminoMsg(object: _62.MsgUnjailAminoMsg): _62.MsgUnjail;
                toAminoMsg(message: _62.MsgUnjail): _62.MsgUnjailAminoMsg;
                fromProtoMsg(message: _62.MsgUnjailProtoMsg): _62.MsgUnjail;
                toProto(message: _62.MsgUnjail): Uint8Array;
                toProtoMsg(message: _62.MsgUnjail): _62.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _62.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.MsgUnjailResponse;
                fromPartial(_: Partial<_62.MsgUnjailResponse>): _62.MsgUnjailResponse;
                fromAmino(_: _62.MsgUnjailResponseAmino): _62.MsgUnjailResponse;
                toAmino(_: _62.MsgUnjailResponse): _62.MsgUnjailResponseAmino;
                fromAminoMsg(object: _62.MsgUnjailResponseAminoMsg): _62.MsgUnjailResponse;
                toAminoMsg(message: _62.MsgUnjailResponse): _62.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _62.MsgUnjailResponseProtoMsg): _62.MsgUnjailResponse;
                toProto(message: _62.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _62.MsgUnjailResponse): _62.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _61.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.ValidatorSigningInfo;
                fromPartial(object: Partial<_61.ValidatorSigningInfo>): _61.ValidatorSigningInfo;
                fromAmino(object: _61.ValidatorSigningInfoAmino): _61.ValidatorSigningInfo;
                toAmino(message: _61.ValidatorSigningInfo): _61.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _61.ValidatorSigningInfoAminoMsg): _61.ValidatorSigningInfo;
                toAminoMsg(message: _61.ValidatorSigningInfo): _61.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _61.ValidatorSigningInfoProtoMsg): _61.ValidatorSigningInfo;
                toProto(message: _61.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _61.ValidatorSigningInfo): _61.ValidatorSigningInfoProtoMsg;
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
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _60.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QuerySigningInfoRequest;
                fromPartial(object: Partial<_60.QuerySigningInfoRequest>): _60.QuerySigningInfoRequest;
                fromAmino(object: _60.QuerySigningInfoRequestAmino): _60.QuerySigningInfoRequest;
                toAmino(message: _60.QuerySigningInfoRequest): _60.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _60.QuerySigningInfoRequestAminoMsg): _60.QuerySigningInfoRequest;
                toAminoMsg(message: _60.QuerySigningInfoRequest): _60.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _60.QuerySigningInfoRequestProtoMsg): _60.QuerySigningInfoRequest;
                toProto(message: _60.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _60.QuerySigningInfoRequest): _60.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _60.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QuerySigningInfoResponse;
                fromPartial(object: Partial<_60.QuerySigningInfoResponse>): _60.QuerySigningInfoResponse;
                fromAmino(object: _60.QuerySigningInfoResponseAmino): _60.QuerySigningInfoResponse;
                toAmino(message: _60.QuerySigningInfoResponse): _60.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _60.QuerySigningInfoResponseAminoMsg): _60.QuerySigningInfoResponse;
                toAminoMsg(message: _60.QuerySigningInfoResponse): _60.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _60.QuerySigningInfoResponseProtoMsg): _60.QuerySigningInfoResponse;
                toProto(message: _60.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _60.QuerySigningInfoResponse): _60.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _60.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QuerySigningInfosRequest;
                fromPartial(object: Partial<_60.QuerySigningInfosRequest>): _60.QuerySigningInfosRequest;
                fromAmino(object: _60.QuerySigningInfosRequestAmino): _60.QuerySigningInfosRequest;
                toAmino(message: _60.QuerySigningInfosRequest): _60.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _60.QuerySigningInfosRequestAminoMsg): _60.QuerySigningInfosRequest;
                toAminoMsg(message: _60.QuerySigningInfosRequest): _60.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _60.QuerySigningInfosRequestProtoMsg): _60.QuerySigningInfosRequest;
                toProto(message: _60.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _60.QuerySigningInfosRequest): _60.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _60.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QuerySigningInfosResponse;
                fromPartial(object: Partial<_60.QuerySigningInfosResponse>): _60.QuerySigningInfosResponse;
                fromAmino(object: _60.QuerySigningInfosResponseAmino): _60.QuerySigningInfosResponse;
                toAmino(message: _60.QuerySigningInfosResponse): _60.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _60.QuerySigningInfosResponseAminoMsg): _60.QuerySigningInfosResponse;
                toAminoMsg(message: _60.QuerySigningInfosResponse): _60.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _60.QuerySigningInfosResponseProtoMsg): _60.QuerySigningInfosResponse;
                toProto(message: _60.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _60.QuerySigningInfosResponse): _60.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _59.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.SigningInfo;
                fromPartial(object: Partial<_59.SigningInfo>): _59.SigningInfo;
                fromAmino(object: _59.SigningInfoAmino): _59.SigningInfo;
                toAmino(message: _59.SigningInfo): _59.SigningInfoAmino;
                fromAminoMsg(object: _59.SigningInfoAminoMsg): _59.SigningInfo;
                toAminoMsg(message: _59.SigningInfo): _59.SigningInfoAminoMsg;
                fromProtoMsg(message: _59.SigningInfoProtoMsg): _59.SigningInfo;
                toProto(message: _59.SigningInfo): Uint8Array;
                toProtoMsg(message: _59.SigningInfo): _59.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _59.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.ValidatorMissedBlocks;
                fromPartial(object: Partial<_59.ValidatorMissedBlocks>): _59.ValidatorMissedBlocks;
                fromAmino(object: _59.ValidatorMissedBlocksAmino): _59.ValidatorMissedBlocks;
                toAmino(message: _59.ValidatorMissedBlocks): _59.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _59.ValidatorMissedBlocksAminoMsg): _59.ValidatorMissedBlocks;
                toAminoMsg(message: _59.ValidatorMissedBlocks): _59.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _59.ValidatorMissedBlocksProtoMsg): _59.ValidatorMissedBlocks;
                toProto(message: _59.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _59.ValidatorMissedBlocks): _59.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _59.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MissedBlock;
                fromPartial(object: Partial<_59.MissedBlock>): _59.MissedBlock;
                fromAmino(object: _59.MissedBlockAmino): _59.MissedBlock;
                toAmino(message: _59.MissedBlock): _59.MissedBlockAmino;
                fromAminoMsg(object: _59.MissedBlockAminoMsg): _59.MissedBlock;
                toAminoMsg(message: _59.MissedBlock): _59.MissedBlockAminoMsg;
                fromProtoMsg(message: _59.MissedBlockProtoMsg): _59.MissedBlock;
                toProto(message: _59.MissedBlock): Uint8Array;
                toProtoMsg(message: _59.MissedBlock): _59.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _164.MsgClientImpl;
            QueryClientImpl: typeof _153.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _65.QueryValidatorsRequest): Promise<_65.QueryValidatorsResponse>;
                validator(request: _65.QueryValidatorRequest): Promise<_65.QueryValidatorResponse>;
                validatorDelegations(request: _65.QueryValidatorDelegationsRequest): Promise<_65.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _65.QueryValidatorUnbondingDelegationsRequest): Promise<_65.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _65.QueryDelegationRequest): Promise<_65.QueryDelegationResponse>;
                unbondingDelegation(request: _65.QueryUnbondingDelegationRequest): Promise<_65.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _65.QueryDelegatorDelegationsRequest): Promise<_65.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _65.QueryDelegatorUnbondingDelegationsRequest): Promise<_65.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _65.QueryRedelegationsRequest): Promise<_65.QueryRedelegationsResponse>;
                delegatorValidators(request: _65.QueryDelegatorValidatorsRequest): Promise<_65.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _65.QueryDelegatorValidatorRequest): Promise<_65.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _65.QueryHistoricalInfoRequest): Promise<_65.QueryHistoricalInfoResponse>;
                pool(request?: _65.QueryPoolRequest): Promise<_65.QueryPoolResponse>;
                params(request?: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _138.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _67.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _67.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _67.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _67.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _67.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _67.MsgCreateValidator): {
                        typeUrl: string;
                        value: _67.MsgCreateValidator;
                    };
                    editValidator(value: _67.MsgEditValidator): {
                        typeUrl: string;
                        value: _67.MsgEditValidator;
                    };
                    delegate(value: _67.MsgDelegate): {
                        typeUrl: string;
                        value: _67.MsgDelegate;
                    };
                    beginRedelegate(value: _67.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _67.MsgBeginRedelegate;
                    };
                    undelegate(value: _67.MsgUndelegate): {
                        typeUrl: string;
                        value: _67.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _67.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _67.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _67.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _67.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _67.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _67.MsgCreateValidator): {
                        typeUrl: string;
                        value: _67.MsgCreateValidator;
                    };
                    editValidator(value: _67.MsgEditValidator): {
                        typeUrl: string;
                        value: _67.MsgEditValidator;
                    };
                    delegate(value: _67.MsgDelegate): {
                        typeUrl: string;
                        value: _67.MsgDelegate;
                    };
                    beginRedelegate(value: _67.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _67.MsgBeginRedelegate;
                    };
                    undelegate(value: _67.MsgUndelegate): {
                        typeUrl: string;
                        value: _67.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _67.MsgCreateValidator) => _67.MsgCreateValidatorAmino;
                    fromAmino: (object: _67.MsgCreateValidatorAmino) => _67.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _67.MsgEditValidator) => _67.MsgEditValidatorAmino;
                    fromAmino: (object: _67.MsgEditValidatorAmino) => _67.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _67.MsgDelegate) => _67.MsgDelegateAmino;
                    fromAmino: (object: _67.MsgDelegateAmino) => _67.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _67.MsgBeginRedelegate) => _67.MsgBeginRedelegateAmino;
                    fromAmino: (object: _67.MsgBeginRedelegateAmino) => _67.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _67.MsgUndelegate) => _67.MsgUndelegateAmino;
                    fromAmino: (object: _67.MsgUndelegateAmino) => _67.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _67.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgCreateValidator;
                fromPartial(object: Partial<_67.MsgCreateValidator>): _67.MsgCreateValidator;
                fromAmino(object: _67.MsgCreateValidatorAmino): _67.MsgCreateValidator;
                toAmino(message: _67.MsgCreateValidator): _67.MsgCreateValidatorAmino;
                fromAminoMsg(object: _67.MsgCreateValidatorAminoMsg): _67.MsgCreateValidator;
                toAminoMsg(message: _67.MsgCreateValidator): _67.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _67.MsgCreateValidatorProtoMsg): _67.MsgCreateValidator;
                toProto(message: _67.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _67.MsgCreateValidator): _67.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _67.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_67.MsgCreateValidatorResponse>): _67.MsgCreateValidatorResponse;
                fromAmino(_: _67.MsgCreateValidatorResponseAmino): _67.MsgCreateValidatorResponse;
                toAmino(_: _67.MsgCreateValidatorResponse): _67.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _67.MsgCreateValidatorResponseAminoMsg): _67.MsgCreateValidatorResponse;
                toAminoMsg(message: _67.MsgCreateValidatorResponse): _67.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _67.MsgCreateValidatorResponseProtoMsg): _67.MsgCreateValidatorResponse;
                toProto(message: _67.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _67.MsgCreateValidatorResponse): _67.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _67.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgEditValidator;
                fromPartial(object: Partial<_67.MsgEditValidator>): _67.MsgEditValidator;
                fromAmino(object: _67.MsgEditValidatorAmino): _67.MsgEditValidator;
                toAmino(message: _67.MsgEditValidator): _67.MsgEditValidatorAmino;
                fromAminoMsg(object: _67.MsgEditValidatorAminoMsg): _67.MsgEditValidator;
                toAminoMsg(message: _67.MsgEditValidator): _67.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _67.MsgEditValidatorProtoMsg): _67.MsgEditValidator;
                toProto(message: _67.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _67.MsgEditValidator): _67.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _67.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.MsgEditValidatorResponse;
                fromPartial(_: Partial<_67.MsgEditValidatorResponse>): _67.MsgEditValidatorResponse;
                fromAmino(_: _67.MsgEditValidatorResponseAmino): _67.MsgEditValidatorResponse;
                toAmino(_: _67.MsgEditValidatorResponse): _67.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _67.MsgEditValidatorResponseAminoMsg): _67.MsgEditValidatorResponse;
                toAminoMsg(message: _67.MsgEditValidatorResponse): _67.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _67.MsgEditValidatorResponseProtoMsg): _67.MsgEditValidatorResponse;
                toProto(message: _67.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _67.MsgEditValidatorResponse): _67.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _67.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgDelegate;
                fromPartial(object: Partial<_67.MsgDelegate>): _67.MsgDelegate;
                fromAmino(object: _67.MsgDelegateAmino): _67.MsgDelegate;
                toAmino(message: _67.MsgDelegate): _67.MsgDelegateAmino;
                fromAminoMsg(object: _67.MsgDelegateAminoMsg): _67.MsgDelegate;
                toAminoMsg(message: _67.MsgDelegate): _67.MsgDelegateAminoMsg;
                fromProtoMsg(message: _67.MsgDelegateProtoMsg): _67.MsgDelegate;
                toProto(message: _67.MsgDelegate): Uint8Array;
                toProtoMsg(message: _67.MsgDelegate): _67.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _67.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.MsgDelegateResponse;
                fromPartial(_: Partial<_67.MsgDelegateResponse>): _67.MsgDelegateResponse;
                fromAmino(_: _67.MsgDelegateResponseAmino): _67.MsgDelegateResponse;
                toAmino(_: _67.MsgDelegateResponse): _67.MsgDelegateResponseAmino;
                fromAminoMsg(object: _67.MsgDelegateResponseAminoMsg): _67.MsgDelegateResponse;
                toAminoMsg(message: _67.MsgDelegateResponse): _67.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _67.MsgDelegateResponseProtoMsg): _67.MsgDelegateResponse;
                toProto(message: _67.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _67.MsgDelegateResponse): _67.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _67.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgBeginRedelegate;
                fromPartial(object: Partial<_67.MsgBeginRedelegate>): _67.MsgBeginRedelegate;
                fromAmino(object: _67.MsgBeginRedelegateAmino): _67.MsgBeginRedelegate;
                toAmino(message: _67.MsgBeginRedelegate): _67.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _67.MsgBeginRedelegateAminoMsg): _67.MsgBeginRedelegate;
                toAminoMsg(message: _67.MsgBeginRedelegate): _67.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _67.MsgBeginRedelegateProtoMsg): _67.MsgBeginRedelegate;
                toProto(message: _67.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _67.MsgBeginRedelegate): _67.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _67.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_67.MsgBeginRedelegateResponse>): _67.MsgBeginRedelegateResponse;
                fromAmino(object: _67.MsgBeginRedelegateResponseAmino): _67.MsgBeginRedelegateResponse;
                toAmino(message: _67.MsgBeginRedelegateResponse): _67.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _67.MsgBeginRedelegateResponseAminoMsg): _67.MsgBeginRedelegateResponse;
                toAminoMsg(message: _67.MsgBeginRedelegateResponse): _67.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _67.MsgBeginRedelegateResponseProtoMsg): _67.MsgBeginRedelegateResponse;
                toProto(message: _67.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _67.MsgBeginRedelegateResponse): _67.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _67.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgUndelegate;
                fromPartial(object: Partial<_67.MsgUndelegate>): _67.MsgUndelegate;
                fromAmino(object: _67.MsgUndelegateAmino): _67.MsgUndelegate;
                toAmino(message: _67.MsgUndelegate): _67.MsgUndelegateAmino;
                fromAminoMsg(object: _67.MsgUndelegateAminoMsg): _67.MsgUndelegate;
                toAminoMsg(message: _67.MsgUndelegate): _67.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _67.MsgUndelegateProtoMsg): _67.MsgUndelegate;
                toProto(message: _67.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _67.MsgUndelegate): _67.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _67.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgUndelegateResponse;
                fromPartial(object: Partial<_67.MsgUndelegateResponse>): _67.MsgUndelegateResponse;
                fromAmino(object: _67.MsgUndelegateResponseAmino): _67.MsgUndelegateResponse;
                toAmino(message: _67.MsgUndelegateResponse): _67.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _67.MsgUndelegateResponseAminoMsg): _67.MsgUndelegateResponse;
                toAminoMsg(message: _67.MsgUndelegateResponse): _67.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _67.MsgUndelegateResponseProtoMsg): _67.MsgUndelegateResponse;
                toProto(message: _67.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _67.MsgUndelegateResponse): _67.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _66.BondStatus;
            bondStatusToJSON(object: _66.BondStatus): string;
            BondStatus: typeof _66.BondStatus;
            BondStatusSDKType: typeof _66.BondStatus;
            BondStatusAmino: typeof _66.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _66.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.HistoricalInfo;
                fromPartial(object: Partial<_66.HistoricalInfo>): _66.HistoricalInfo;
                fromAmino(object: _66.HistoricalInfoAmino): _66.HistoricalInfo;
                toAmino(message: _66.HistoricalInfo): _66.HistoricalInfoAmino;
                fromAminoMsg(object: _66.HistoricalInfoAminoMsg): _66.HistoricalInfo;
                toAminoMsg(message: _66.HistoricalInfo): _66.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _66.HistoricalInfoProtoMsg): _66.HistoricalInfo;
                toProto(message: _66.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _66.HistoricalInfo): _66.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _66.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.CommissionRates;
                fromPartial(object: Partial<_66.CommissionRates>): _66.CommissionRates;
                fromAmino(object: _66.CommissionRatesAmino): _66.CommissionRates;
                toAmino(message: _66.CommissionRates): _66.CommissionRatesAmino;
                fromAminoMsg(object: _66.CommissionRatesAminoMsg): _66.CommissionRates;
                toAminoMsg(message: _66.CommissionRates): _66.CommissionRatesAminoMsg;
                fromProtoMsg(message: _66.CommissionRatesProtoMsg): _66.CommissionRates;
                toProto(message: _66.CommissionRates): Uint8Array;
                toProtoMsg(message: _66.CommissionRates): _66.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _66.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Commission;
                fromPartial(object: Partial<_66.Commission>): _66.Commission;
                fromAmino(object: _66.CommissionAmino): _66.Commission;
                toAmino(message: _66.Commission): _66.CommissionAmino;
                fromAminoMsg(object: _66.CommissionAminoMsg): _66.Commission;
                toAminoMsg(message: _66.Commission): _66.CommissionAminoMsg;
                fromProtoMsg(message: _66.CommissionProtoMsg): _66.Commission;
                toProto(message: _66.Commission): Uint8Array;
                toProtoMsg(message: _66.Commission): _66.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _66.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Description;
                fromPartial(object: Partial<_66.Description>): _66.Description;
                fromAmino(object: _66.DescriptionAmino): _66.Description;
                toAmino(message: _66.Description): _66.DescriptionAmino;
                fromAminoMsg(object: _66.DescriptionAminoMsg): _66.Description;
                toAminoMsg(message: _66.Description): _66.DescriptionAminoMsg;
                fromProtoMsg(message: _66.DescriptionProtoMsg): _66.Description;
                toProto(message: _66.Description): Uint8Array;
                toProtoMsg(message: _66.Description): _66.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _66.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Validator;
                fromPartial(object: Partial<_66.Validator>): _66.Validator;
                fromAmino(object: _66.ValidatorAmino): _66.Validator;
                toAmino(message: _66.Validator): _66.ValidatorAmino;
                fromAminoMsg(object: _66.ValidatorAminoMsg): _66.Validator;
                toAminoMsg(message: _66.Validator): _66.ValidatorAminoMsg;
                fromProtoMsg(message: _66.ValidatorProtoMsg): _66.Validator;
                toProto(message: _66.Validator): Uint8Array;
                toProtoMsg(message: _66.Validator): _66.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _66.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.ValAddresses;
                fromPartial(object: Partial<_66.ValAddresses>): _66.ValAddresses;
                fromAmino(object: _66.ValAddressesAmino): _66.ValAddresses;
                toAmino(message: _66.ValAddresses): _66.ValAddressesAmino;
                fromAminoMsg(object: _66.ValAddressesAminoMsg): _66.ValAddresses;
                toAminoMsg(message: _66.ValAddresses): _66.ValAddressesAminoMsg;
                fromProtoMsg(message: _66.ValAddressesProtoMsg): _66.ValAddresses;
                toProto(message: _66.ValAddresses): Uint8Array;
                toProtoMsg(message: _66.ValAddresses): _66.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _66.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.DVPair;
                fromPartial(object: Partial<_66.DVPair>): _66.DVPair;
                fromAmino(object: _66.DVPairAmino): _66.DVPair;
                toAmino(message: _66.DVPair): _66.DVPairAmino;
                fromAminoMsg(object: _66.DVPairAminoMsg): _66.DVPair;
                toAminoMsg(message: _66.DVPair): _66.DVPairAminoMsg;
                fromProtoMsg(message: _66.DVPairProtoMsg): _66.DVPair;
                toProto(message: _66.DVPair): Uint8Array;
                toProtoMsg(message: _66.DVPair): _66.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _66.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.DVPairs;
                fromPartial(object: Partial<_66.DVPairs>): _66.DVPairs;
                fromAmino(object: _66.DVPairsAmino): _66.DVPairs;
                toAmino(message: _66.DVPairs): _66.DVPairsAmino;
                fromAminoMsg(object: _66.DVPairsAminoMsg): _66.DVPairs;
                toAminoMsg(message: _66.DVPairs): _66.DVPairsAminoMsg;
                fromProtoMsg(message: _66.DVPairsProtoMsg): _66.DVPairs;
                toProto(message: _66.DVPairs): Uint8Array;
                toProtoMsg(message: _66.DVPairs): _66.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _66.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.DVVTriplet;
                fromPartial(object: Partial<_66.DVVTriplet>): _66.DVVTriplet;
                fromAmino(object: _66.DVVTripletAmino): _66.DVVTriplet;
                toAmino(message: _66.DVVTriplet): _66.DVVTripletAmino;
                fromAminoMsg(object: _66.DVVTripletAminoMsg): _66.DVVTriplet;
                toAminoMsg(message: _66.DVVTriplet): _66.DVVTripletAminoMsg;
                fromProtoMsg(message: _66.DVVTripletProtoMsg): _66.DVVTriplet;
                toProto(message: _66.DVVTriplet): Uint8Array;
                toProtoMsg(message: _66.DVVTriplet): _66.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _66.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.DVVTriplets;
                fromPartial(object: Partial<_66.DVVTriplets>): _66.DVVTriplets;
                fromAmino(object: _66.DVVTripletsAmino): _66.DVVTriplets;
                toAmino(message: _66.DVVTriplets): _66.DVVTripletsAmino;
                fromAminoMsg(object: _66.DVVTripletsAminoMsg): _66.DVVTriplets;
                toAminoMsg(message: _66.DVVTriplets): _66.DVVTripletsAminoMsg;
                fromProtoMsg(message: _66.DVVTripletsProtoMsg): _66.DVVTriplets;
                toProto(message: _66.DVVTriplets): Uint8Array;
                toProtoMsg(message: _66.DVVTriplets): _66.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _66.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Delegation;
                fromPartial(object: Partial<_66.Delegation>): _66.Delegation;
                fromAmino(object: _66.DelegationAmino): _66.Delegation;
                toAmino(message: _66.Delegation): _66.DelegationAmino;
                fromAminoMsg(object: _66.DelegationAminoMsg): _66.Delegation;
                toAminoMsg(message: _66.Delegation): _66.DelegationAminoMsg;
                fromProtoMsg(message: _66.DelegationProtoMsg): _66.Delegation;
                toProto(message: _66.Delegation): Uint8Array;
                toProtoMsg(message: _66.Delegation): _66.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _66.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.UnbondingDelegation;
                fromPartial(object: Partial<_66.UnbondingDelegation>): _66.UnbondingDelegation;
                fromAmino(object: _66.UnbondingDelegationAmino): _66.UnbondingDelegation;
                toAmino(message: _66.UnbondingDelegation): _66.UnbondingDelegationAmino;
                fromAminoMsg(object: _66.UnbondingDelegationAminoMsg): _66.UnbondingDelegation;
                toAminoMsg(message: _66.UnbondingDelegation): _66.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _66.UnbondingDelegationProtoMsg): _66.UnbondingDelegation;
                toProto(message: _66.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _66.UnbondingDelegation): _66.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _66.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.UnbondingDelegationEntry;
                fromPartial(object: Partial<_66.UnbondingDelegationEntry>): _66.UnbondingDelegationEntry;
                fromAmino(object: _66.UnbondingDelegationEntryAmino): _66.UnbondingDelegationEntry;
                toAmino(message: _66.UnbondingDelegationEntry): _66.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _66.UnbondingDelegationEntryAminoMsg): _66.UnbondingDelegationEntry;
                toAminoMsg(message: _66.UnbondingDelegationEntry): _66.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _66.UnbondingDelegationEntryProtoMsg): _66.UnbondingDelegationEntry;
                toProto(message: _66.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _66.UnbondingDelegationEntry): _66.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _66.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.RedelegationEntry;
                fromPartial(object: Partial<_66.RedelegationEntry>): _66.RedelegationEntry;
                fromAmino(object: _66.RedelegationEntryAmino): _66.RedelegationEntry;
                toAmino(message: _66.RedelegationEntry): _66.RedelegationEntryAmino;
                fromAminoMsg(object: _66.RedelegationEntryAminoMsg): _66.RedelegationEntry;
                toAminoMsg(message: _66.RedelegationEntry): _66.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _66.RedelegationEntryProtoMsg): _66.RedelegationEntry;
                toProto(message: _66.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _66.RedelegationEntry): _66.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _66.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Redelegation;
                fromPartial(object: Partial<_66.Redelegation>): _66.Redelegation;
                fromAmino(object: _66.RedelegationAmino): _66.Redelegation;
                toAmino(message: _66.Redelegation): _66.RedelegationAmino;
                fromAminoMsg(object: _66.RedelegationAminoMsg): _66.Redelegation;
                toAminoMsg(message: _66.Redelegation): _66.RedelegationAminoMsg;
                fromProtoMsg(message: _66.RedelegationProtoMsg): _66.Redelegation;
                toProto(message: _66.Redelegation): Uint8Array;
                toProtoMsg(message: _66.Redelegation): _66.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _66.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Params;
                fromPartial(object: Partial<_66.Params>): _66.Params;
                fromAmino(object: _66.ParamsAmino): _66.Params;
                toAmino(message: _66.Params): _66.ParamsAmino;
                fromAminoMsg(object: _66.ParamsAminoMsg): _66.Params;
                toAminoMsg(message: _66.Params): _66.ParamsAminoMsg;
                fromProtoMsg(message: _66.ParamsProtoMsg): _66.Params;
                toProto(message: _66.Params): Uint8Array;
                toProtoMsg(message: _66.Params): _66.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _66.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.DelegationResponse;
                fromPartial(object: Partial<_66.DelegationResponse>): _66.DelegationResponse;
                fromAmino(object: _66.DelegationResponseAmino): _66.DelegationResponse;
                toAmino(message: _66.DelegationResponse): _66.DelegationResponseAmino;
                fromAminoMsg(object: _66.DelegationResponseAminoMsg): _66.DelegationResponse;
                toAminoMsg(message: _66.DelegationResponse): _66.DelegationResponseAminoMsg;
                fromProtoMsg(message: _66.DelegationResponseProtoMsg): _66.DelegationResponse;
                toProto(message: _66.DelegationResponse): Uint8Array;
                toProtoMsg(message: _66.DelegationResponse): _66.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _66.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.RedelegationEntryResponse;
                fromPartial(object: Partial<_66.RedelegationEntryResponse>): _66.RedelegationEntryResponse;
                fromAmino(object: _66.RedelegationEntryResponseAmino): _66.RedelegationEntryResponse;
                toAmino(message: _66.RedelegationEntryResponse): _66.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _66.RedelegationEntryResponseAminoMsg): _66.RedelegationEntryResponse;
                toAminoMsg(message: _66.RedelegationEntryResponse): _66.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _66.RedelegationEntryResponseProtoMsg): _66.RedelegationEntryResponse;
                toProto(message: _66.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _66.RedelegationEntryResponse): _66.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _66.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.RedelegationResponse;
                fromPartial(object: Partial<_66.RedelegationResponse>): _66.RedelegationResponse;
                fromAmino(object: _66.RedelegationResponseAmino): _66.RedelegationResponse;
                toAmino(message: _66.RedelegationResponse): _66.RedelegationResponseAmino;
                fromAminoMsg(object: _66.RedelegationResponseAminoMsg): _66.RedelegationResponse;
                toAminoMsg(message: _66.RedelegationResponse): _66.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _66.RedelegationResponseProtoMsg): _66.RedelegationResponse;
                toProto(message: _66.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _66.RedelegationResponse): _66.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _66.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Pool;
                fromPartial(object: Partial<_66.Pool>): _66.Pool;
                fromAmino(object: _66.PoolAmino): _66.Pool;
                toAmino(message: _66.Pool): _66.PoolAmino;
                fromAminoMsg(object: _66.PoolAminoMsg): _66.Pool;
                toAminoMsg(message: _66.Pool): _66.PoolAminoMsg;
                fromProtoMsg(message: _66.PoolProtoMsg): _66.Pool;
                toProto(message: _66.Pool): Uint8Array;
                toProtoMsg(message: _66.Pool): _66.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _65.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryValidatorsRequest;
                fromPartial(object: Partial<_65.QueryValidatorsRequest>): _65.QueryValidatorsRequest;
                fromAmino(object: _65.QueryValidatorsRequestAmino): _65.QueryValidatorsRequest;
                toAmino(message: _65.QueryValidatorsRequest): _65.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _65.QueryValidatorsRequestAminoMsg): _65.QueryValidatorsRequest;
                toAminoMsg(message: _65.QueryValidatorsRequest): _65.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _65.QueryValidatorsRequestProtoMsg): _65.QueryValidatorsRequest;
                toProto(message: _65.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _65.QueryValidatorsRequest): _65.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _65.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryValidatorsResponse;
                fromPartial(object: Partial<_65.QueryValidatorsResponse>): _65.QueryValidatorsResponse;
                fromAmino(object: _65.QueryValidatorsResponseAmino): _65.QueryValidatorsResponse;
                toAmino(message: _65.QueryValidatorsResponse): _65.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _65.QueryValidatorsResponseAminoMsg): _65.QueryValidatorsResponse;
                toAminoMsg(message: _65.QueryValidatorsResponse): _65.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _65.QueryValidatorsResponseProtoMsg): _65.QueryValidatorsResponse;
                toProto(message: _65.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _65.QueryValidatorsResponse): _65.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _65.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryValidatorRequest;
                fromPartial(object: Partial<_65.QueryValidatorRequest>): _65.QueryValidatorRequest;
                fromAmino(object: _65.QueryValidatorRequestAmino): _65.QueryValidatorRequest;
                toAmino(message: _65.QueryValidatorRequest): _65.QueryValidatorRequestAmino;
                fromAminoMsg(object: _65.QueryValidatorRequestAminoMsg): _65.QueryValidatorRequest;
                toAminoMsg(message: _65.QueryValidatorRequest): _65.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _65.QueryValidatorRequestProtoMsg): _65.QueryValidatorRequest;
                toProto(message: _65.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _65.QueryValidatorRequest): _65.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _65.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryValidatorResponse;
                fromPartial(object: Partial<_65.QueryValidatorResponse>): _65.QueryValidatorResponse;
                fromAmino(object: _65.QueryValidatorResponseAmino): _65.QueryValidatorResponse;
                toAmino(message: _65.QueryValidatorResponse): _65.QueryValidatorResponseAmino;
                fromAminoMsg(object: _65.QueryValidatorResponseAminoMsg): _65.QueryValidatorResponse;
                toAminoMsg(message: _65.QueryValidatorResponse): _65.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _65.QueryValidatorResponseProtoMsg): _65.QueryValidatorResponse;
                toProto(message: _65.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _65.QueryValidatorResponse): _65.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _65.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_65.QueryValidatorDelegationsRequest>): _65.QueryValidatorDelegationsRequest;
                fromAmino(object: _65.QueryValidatorDelegationsRequestAmino): _65.QueryValidatorDelegationsRequest;
                toAmino(message: _65.QueryValidatorDelegationsRequest): _65.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _65.QueryValidatorDelegationsRequestAminoMsg): _65.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _65.QueryValidatorDelegationsRequest): _65.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _65.QueryValidatorDelegationsRequestProtoMsg): _65.QueryValidatorDelegationsRequest;
                toProto(message: _65.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _65.QueryValidatorDelegationsRequest): _65.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _65.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_65.QueryValidatorDelegationsResponse>): _65.QueryValidatorDelegationsResponse;
                fromAmino(object: _65.QueryValidatorDelegationsResponseAmino): _65.QueryValidatorDelegationsResponse;
                toAmino(message: _65.QueryValidatorDelegationsResponse): _65.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _65.QueryValidatorDelegationsResponseAminoMsg): _65.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _65.QueryValidatorDelegationsResponse): _65.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _65.QueryValidatorDelegationsResponseProtoMsg): _65.QueryValidatorDelegationsResponse;
                toProto(message: _65.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _65.QueryValidatorDelegationsResponse): _65.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _65.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_65.QueryValidatorUnbondingDelegationsRequest>): _65.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _65.QueryValidatorUnbondingDelegationsRequestAmino): _65.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _65.QueryValidatorUnbondingDelegationsRequest): _65.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _65.QueryValidatorUnbondingDelegationsRequestAminoMsg): _65.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _65.QueryValidatorUnbondingDelegationsRequest): _65.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _65.QueryValidatorUnbondingDelegationsRequestProtoMsg): _65.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _65.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _65.QueryValidatorUnbondingDelegationsRequest): _65.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _65.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_65.QueryValidatorUnbondingDelegationsResponse>): _65.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _65.QueryValidatorUnbondingDelegationsResponseAmino): _65.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _65.QueryValidatorUnbondingDelegationsResponse): _65.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _65.QueryValidatorUnbondingDelegationsResponseAminoMsg): _65.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _65.QueryValidatorUnbondingDelegationsResponse): _65.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _65.QueryValidatorUnbondingDelegationsResponseProtoMsg): _65.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _65.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _65.QueryValidatorUnbondingDelegationsResponse): _65.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _65.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryDelegationRequest;
                fromPartial(object: Partial<_65.QueryDelegationRequest>): _65.QueryDelegationRequest;
                fromAmino(object: _65.QueryDelegationRequestAmino): _65.QueryDelegationRequest;
                toAmino(message: _65.QueryDelegationRequest): _65.QueryDelegationRequestAmino;
                fromAminoMsg(object: _65.QueryDelegationRequestAminoMsg): _65.QueryDelegationRequest;
                toAminoMsg(message: _65.QueryDelegationRequest): _65.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _65.QueryDelegationRequestProtoMsg): _65.QueryDelegationRequest;
                toProto(message: _65.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _65.QueryDelegationRequest): _65.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _65.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryDelegationResponse;
                fromPartial(object: Partial<_65.QueryDelegationResponse>): _65.QueryDelegationResponse;
                fromAmino(object: _65.QueryDelegationResponseAmino): _65.QueryDelegationResponse;
                toAmino(message: _65.QueryDelegationResponse): _65.QueryDelegationResponseAmino;
                fromAminoMsg(object: _65.QueryDelegationResponseAminoMsg): _65.QueryDelegationResponse;
                toAminoMsg(message: _65.QueryDelegationResponse): _65.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _65.QueryDelegationResponseProtoMsg): _65.QueryDelegationResponse;
                toProto(message: _65.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _65.QueryDelegationResponse): _65.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _65.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_65.QueryUnbondingDelegationRequest>): _65.QueryUnbondingDelegationRequest;
                fromAmino(object: _65.QueryUnbondingDelegationRequestAmino): _65.QueryUnbondingDelegationRequest;
                toAmino(message: _65.QueryUnbondingDelegationRequest): _65.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _65.QueryUnbondingDelegationRequestAminoMsg): _65.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _65.QueryUnbondingDelegationRequest): _65.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _65.QueryUnbondingDelegationRequestProtoMsg): _65.QueryUnbondingDelegationRequest;
                toProto(message: _65.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _65.QueryUnbondingDelegationRequest): _65.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _65.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_65.QueryUnbondingDelegationResponse>): _65.QueryUnbondingDelegationResponse;
                fromAmino(object: _65.QueryUnbondingDelegationResponseAmino): _65.QueryUnbondingDelegationResponse;
                toAmino(message: _65.QueryUnbondingDelegationResponse): _65.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _65.QueryUnbondingDelegationResponseAminoMsg): _65.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _65.QueryUnbondingDelegationResponse): _65.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _65.QueryUnbondingDelegationResponseProtoMsg): _65.QueryUnbondingDelegationResponse;
                toProto(message: _65.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _65.QueryUnbondingDelegationResponse): _65.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _65.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_65.QueryDelegatorDelegationsRequest>): _65.QueryDelegatorDelegationsRequest;
                fromAmino(object: _65.QueryDelegatorDelegationsRequestAmino): _65.QueryDelegatorDelegationsRequest;
                toAmino(message: _65.QueryDelegatorDelegationsRequest): _65.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _65.QueryDelegatorDelegationsRequestAminoMsg): _65.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _65.QueryDelegatorDelegationsRequest): _65.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _65.QueryDelegatorDelegationsRequestProtoMsg): _65.QueryDelegatorDelegationsRequest;
                toProto(message: _65.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _65.QueryDelegatorDelegationsRequest): _65.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _65.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_65.QueryDelegatorDelegationsResponse>): _65.QueryDelegatorDelegationsResponse;
                fromAmino(object: _65.QueryDelegatorDelegationsResponseAmino): _65.QueryDelegatorDelegationsResponse;
                toAmino(message: _65.QueryDelegatorDelegationsResponse): _65.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _65.QueryDelegatorDelegationsResponseAminoMsg): _65.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _65.QueryDelegatorDelegationsResponse): _65.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _65.QueryDelegatorDelegationsResponseProtoMsg): _65.QueryDelegatorDelegationsResponse;
                toProto(message: _65.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _65.QueryDelegatorDelegationsResponse): _65.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _65.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_65.QueryDelegatorUnbondingDelegationsRequest>): _65.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _65.QueryDelegatorUnbondingDelegationsRequestAmino): _65.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _65.QueryDelegatorUnbondingDelegationsRequest): _65.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _65.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _65.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _65.QueryDelegatorUnbondingDelegationsRequest): _65.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _65.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _65.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _65.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _65.QueryDelegatorUnbondingDelegationsRequest): _65.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _65.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_65.QueryDelegatorUnbondingDelegationsResponse>): _65.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _65.QueryDelegatorUnbondingDelegationsResponseAmino): _65.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _65.QueryDelegatorUnbondingDelegationsResponse): _65.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _65.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _65.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _65.QueryDelegatorUnbondingDelegationsResponse): _65.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _65.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _65.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _65.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _65.QueryDelegatorUnbondingDelegationsResponse): _65.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _65.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryRedelegationsRequest;
                fromPartial(object: Partial<_65.QueryRedelegationsRequest>): _65.QueryRedelegationsRequest;
                fromAmino(object: _65.QueryRedelegationsRequestAmino): _65.QueryRedelegationsRequest;
                toAmino(message: _65.QueryRedelegationsRequest): _65.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _65.QueryRedelegationsRequestAminoMsg): _65.QueryRedelegationsRequest;
                toAminoMsg(message: _65.QueryRedelegationsRequest): _65.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _65.QueryRedelegationsRequestProtoMsg): _65.QueryRedelegationsRequest;
                toProto(message: _65.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _65.QueryRedelegationsRequest): _65.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _65.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryRedelegationsResponse;
                fromPartial(object: Partial<_65.QueryRedelegationsResponse>): _65.QueryRedelegationsResponse;
                fromAmino(object: _65.QueryRedelegationsResponseAmino): _65.QueryRedelegationsResponse;
                toAmino(message: _65.QueryRedelegationsResponse): _65.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _65.QueryRedelegationsResponseAminoMsg): _65.QueryRedelegationsResponse;
                toAminoMsg(message: _65.QueryRedelegationsResponse): _65.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _65.QueryRedelegationsResponseProtoMsg): _65.QueryRedelegationsResponse;
                toProto(message: _65.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _65.QueryRedelegationsResponse): _65.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _65.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_65.QueryDelegatorValidatorsRequest>): _65.QueryDelegatorValidatorsRequest;
                fromAmino(object: _65.QueryDelegatorValidatorsRequestAmino): _65.QueryDelegatorValidatorsRequest;
                toAmino(message: _65.QueryDelegatorValidatorsRequest): _65.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _65.QueryDelegatorValidatorsRequestAminoMsg): _65.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _65.QueryDelegatorValidatorsRequest): _65.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _65.QueryDelegatorValidatorsRequestProtoMsg): _65.QueryDelegatorValidatorsRequest;
                toProto(message: _65.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _65.QueryDelegatorValidatorsRequest): _65.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _65.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_65.QueryDelegatorValidatorsResponse>): _65.QueryDelegatorValidatorsResponse;
                fromAmino(object: _65.QueryDelegatorValidatorsResponseAmino): _65.QueryDelegatorValidatorsResponse;
                toAmino(message: _65.QueryDelegatorValidatorsResponse): _65.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _65.QueryDelegatorValidatorsResponseAminoMsg): _65.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _65.QueryDelegatorValidatorsResponse): _65.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _65.QueryDelegatorValidatorsResponseProtoMsg): _65.QueryDelegatorValidatorsResponse;
                toProto(message: _65.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _65.QueryDelegatorValidatorsResponse): _65.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _65.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_65.QueryDelegatorValidatorRequest>): _65.QueryDelegatorValidatorRequest;
                fromAmino(object: _65.QueryDelegatorValidatorRequestAmino): _65.QueryDelegatorValidatorRequest;
                toAmino(message: _65.QueryDelegatorValidatorRequest): _65.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _65.QueryDelegatorValidatorRequestAminoMsg): _65.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _65.QueryDelegatorValidatorRequest): _65.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _65.QueryDelegatorValidatorRequestProtoMsg): _65.QueryDelegatorValidatorRequest;
                toProto(message: _65.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _65.QueryDelegatorValidatorRequest): _65.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _65.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_65.QueryDelegatorValidatorResponse>): _65.QueryDelegatorValidatorResponse;
                fromAmino(object: _65.QueryDelegatorValidatorResponseAmino): _65.QueryDelegatorValidatorResponse;
                toAmino(message: _65.QueryDelegatorValidatorResponse): _65.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _65.QueryDelegatorValidatorResponseAminoMsg): _65.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _65.QueryDelegatorValidatorResponse): _65.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _65.QueryDelegatorValidatorResponseProtoMsg): _65.QueryDelegatorValidatorResponse;
                toProto(message: _65.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _65.QueryDelegatorValidatorResponse): _65.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _65.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_65.QueryHistoricalInfoRequest>): _65.QueryHistoricalInfoRequest;
                fromAmino(object: _65.QueryHistoricalInfoRequestAmino): _65.QueryHistoricalInfoRequest;
                toAmino(message: _65.QueryHistoricalInfoRequest): _65.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _65.QueryHistoricalInfoRequestAminoMsg): _65.QueryHistoricalInfoRequest;
                toAminoMsg(message: _65.QueryHistoricalInfoRequest): _65.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _65.QueryHistoricalInfoRequestProtoMsg): _65.QueryHistoricalInfoRequest;
                toProto(message: _65.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _65.QueryHistoricalInfoRequest): _65.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _65.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_65.QueryHistoricalInfoResponse>): _65.QueryHistoricalInfoResponse;
                fromAmino(object: _65.QueryHistoricalInfoResponseAmino): _65.QueryHistoricalInfoResponse;
                toAmino(message: _65.QueryHistoricalInfoResponse): _65.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _65.QueryHistoricalInfoResponseAminoMsg): _65.QueryHistoricalInfoResponse;
                toAminoMsg(message: _65.QueryHistoricalInfoResponse): _65.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _65.QueryHistoricalInfoResponseProtoMsg): _65.QueryHistoricalInfoResponse;
                toProto(message: _65.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _65.QueryHistoricalInfoResponse): _65.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _65.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.QueryPoolRequest;
                fromPartial(_: Partial<_65.QueryPoolRequest>): _65.QueryPoolRequest;
                fromAmino(_: _65.QueryPoolRequestAmino): _65.QueryPoolRequest;
                toAmino(_: _65.QueryPoolRequest): _65.QueryPoolRequestAmino;
                fromAminoMsg(object: _65.QueryPoolRequestAminoMsg): _65.QueryPoolRequest;
                toAminoMsg(message: _65.QueryPoolRequest): _65.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _65.QueryPoolRequestProtoMsg): _65.QueryPoolRequest;
                toProto(message: _65.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _65.QueryPoolRequest): _65.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _65.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryPoolResponse;
                fromPartial(object: Partial<_65.QueryPoolResponse>): _65.QueryPoolResponse;
                fromAmino(object: _65.QueryPoolResponseAmino): _65.QueryPoolResponse;
                toAmino(message: _65.QueryPoolResponse): _65.QueryPoolResponseAmino;
                fromAminoMsg(object: _65.QueryPoolResponseAminoMsg): _65.QueryPoolResponse;
                toAminoMsg(message: _65.QueryPoolResponse): _65.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _65.QueryPoolResponseProtoMsg): _65.QueryPoolResponse;
                toProto(message: _65.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _65.QueryPoolResponse): _65.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _65.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.QueryParamsRequest;
                fromPartial(_: Partial<_65.QueryParamsRequest>): _65.QueryParamsRequest;
                fromAmino(_: _65.QueryParamsRequestAmino): _65.QueryParamsRequest;
                toAmino(_: _65.QueryParamsRequest): _65.QueryParamsRequestAmino;
                fromAminoMsg(object: _65.QueryParamsRequestAminoMsg): _65.QueryParamsRequest;
                toAminoMsg(message: _65.QueryParamsRequest): _65.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _65.QueryParamsRequestProtoMsg): _65.QueryParamsRequest;
                toProto(message: _65.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _65.QueryParamsRequest): _65.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _65.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryParamsResponse;
                fromPartial(object: Partial<_65.QueryParamsResponse>): _65.QueryParamsResponse;
                fromAmino(object: _65.QueryParamsResponseAmino): _65.QueryParamsResponse;
                toAmino(message: _65.QueryParamsResponse): _65.QueryParamsResponseAmino;
                fromAminoMsg(object: _65.QueryParamsResponseAminoMsg): _65.QueryParamsResponse;
                toAminoMsg(message: _65.QueryParamsResponse): _65.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _65.QueryParamsResponseProtoMsg): _65.QueryParamsResponse;
                toProto(message: _65.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _65.QueryParamsResponse): _65.QueryParamsResponseProtoMsg;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _64.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.LastValidatorPower;
                fromPartial(object: Partial<_64.LastValidatorPower>): _64.LastValidatorPower;
                fromAmino(object: _64.LastValidatorPowerAmino): _64.LastValidatorPower;
                toAmino(message: _64.LastValidatorPower): _64.LastValidatorPowerAmino;
                fromAminoMsg(object: _64.LastValidatorPowerAminoMsg): _64.LastValidatorPower;
                toAminoMsg(message: _64.LastValidatorPower): _64.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _64.LastValidatorPowerProtoMsg): _64.LastValidatorPower;
                toProto(message: _64.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _64.LastValidatorPower): _64.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _63.AuthorizationType;
            authorizationTypeToJSON(object: _63.AuthorizationType): string;
            AuthorizationType: typeof _63.AuthorizationType;
            AuthorizationTypeSDKType: typeof _63.AuthorizationType;
            AuthorizationTypeAmino: typeof _63.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _63.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.StakeAuthorization;
                fromPartial(object: Partial<_63.StakeAuthorization>): _63.StakeAuthorization;
                fromAmino(object: _63.StakeAuthorizationAmino): _63.StakeAuthorization;
                toAmino(message: _63.StakeAuthorization): _63.StakeAuthorizationAmino;
                fromAminoMsg(object: _63.StakeAuthorizationAminoMsg): _63.StakeAuthorization;
                toAminoMsg(message: _63.StakeAuthorization): _63.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _63.StakeAuthorizationProtoMsg): _63.StakeAuthorization;
                toProto(message: _63.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _63.StakeAuthorization): _63.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _63.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.StakeAuthorization_Validators;
                fromPartial(object: Partial<_63.StakeAuthorization_Validators>): _63.StakeAuthorization_Validators;
                fromAmino(object: _63.StakeAuthorization_ValidatorsAmino): _63.StakeAuthorization_Validators;
                toAmino(message: _63.StakeAuthorization_Validators): _63.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _63.StakeAuthorization_ValidatorsAminoMsg): _63.StakeAuthorization_Validators;
                toAminoMsg(message: _63.StakeAuthorization_Validators): _63.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _63.StakeAuthorization_ValidatorsProtoMsg): _63.StakeAuthorization_Validators;
                toProto(message: _63.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _63.StakeAuthorization_Validators): _63.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _68.SignMode;
                signModeToJSON(object: _68.SignMode): string;
                SignMode: typeof _68.SignMode;
                SignModeSDKType: typeof _68.SignMode;
                SignModeAmino: typeof _68.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _68.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.SignatureDescriptors;
                    fromPartial(object: Partial<_68.SignatureDescriptors>): _68.SignatureDescriptors;
                    fromAmino(object: _68.SignatureDescriptorsAmino): _68.SignatureDescriptors;
                    toAmino(message: _68.SignatureDescriptors): _68.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _68.SignatureDescriptorsAminoMsg): _68.SignatureDescriptors;
                    toAminoMsg(message: _68.SignatureDescriptors): _68.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _68.SignatureDescriptorsProtoMsg): _68.SignatureDescriptors;
                    toProto(message: _68.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _68.SignatureDescriptors): _68.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _68.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.SignatureDescriptor;
                    fromPartial(object: Partial<_68.SignatureDescriptor>): _68.SignatureDescriptor;
                    fromAmino(object: _68.SignatureDescriptorAmino): _68.SignatureDescriptor;
                    toAmino(message: _68.SignatureDescriptor): _68.SignatureDescriptorAmino;
                    fromAminoMsg(object: _68.SignatureDescriptorAminoMsg): _68.SignatureDescriptor;
                    toAminoMsg(message: _68.SignatureDescriptor): _68.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _68.SignatureDescriptorProtoMsg): _68.SignatureDescriptor;
                    toProto(message: _68.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _68.SignatureDescriptor): _68.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _68.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_68.SignatureDescriptor_Data>): _68.SignatureDescriptor_Data;
                    fromAmino(object: _68.SignatureDescriptor_DataAmino): _68.SignatureDescriptor_Data;
                    toAmino(message: _68.SignatureDescriptor_Data): _68.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _68.SignatureDescriptor_DataAminoMsg): _68.SignatureDescriptor_Data;
                    toAminoMsg(message: _68.SignatureDescriptor_Data): _68.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _68.SignatureDescriptor_DataProtoMsg): _68.SignatureDescriptor_Data;
                    toProto(message: _68.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _68.SignatureDescriptor_Data): _68.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _68.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_68.SignatureDescriptor_Data_Single>): _68.SignatureDescriptor_Data_Single;
                    fromAmino(object: _68.SignatureDescriptor_Data_SingleAmino): _68.SignatureDescriptor_Data_Single;
                    toAmino(message: _68.SignatureDescriptor_Data_Single): _68.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _68.SignatureDescriptor_Data_SingleAminoMsg): _68.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _68.SignatureDescriptor_Data_Single): _68.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _68.SignatureDescriptor_Data_SingleProtoMsg): _68.SignatureDescriptor_Data_Single;
                    toProto(message: _68.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _68.SignatureDescriptor_Data_Single): _68.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _68.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_68.SignatureDescriptor_Data_Multi>): _68.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _68.SignatureDescriptor_Data_MultiAmino): _68.SignatureDescriptor_Data_Multi;
                    toAmino(message: _68.SignatureDescriptor_Data_Multi): _68.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _68.SignatureDescriptor_Data_MultiAminoMsg): _68.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _68.SignatureDescriptor_Data_Multi): _68.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _68.SignatureDescriptor_Data_MultiProtoMsg): _68.SignatureDescriptor_Data_Multi;
                    toProto(message: _68.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _68.SignatureDescriptor_Data_Multi): _68.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _154.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _69.SimulateRequest): Promise<_69.SimulateResponse>;
                getTx(request: _69.GetTxRequest): Promise<_69.GetTxResponse>;
                broadcastTx(request: _69.BroadcastTxRequest): Promise<_69.BroadcastTxResponse>;
                getTxsEvent(request: _69.GetTxsEventRequest): Promise<_69.GetTxsEventResponse>;
                getBlockWithTxs(request: _69.GetBlockWithTxsRequest): Promise<_69.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _139.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _70.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Tx;
                fromPartial(object: Partial<_70.Tx>): _70.Tx;
                fromAmino(object: _70.TxAmino): _70.Tx;
                toAmino(message: _70.Tx): _70.TxAmino;
                fromAminoMsg(object: _70.TxAminoMsg): _70.Tx;
                toAminoMsg(message: _70.Tx): _70.TxAminoMsg;
                fromProtoMsg(message: _70.TxProtoMsg): _70.Tx;
                toProto(message: _70.Tx): Uint8Array;
                toProtoMsg(message: _70.Tx): _70.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _70.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.TxRaw;
                fromPartial(object: Partial<_70.TxRaw>): _70.TxRaw;
                fromAmino(object: _70.TxRawAmino): _70.TxRaw;
                toAmino(message: _70.TxRaw): _70.TxRawAmino;
                fromAminoMsg(object: _70.TxRawAminoMsg): _70.TxRaw;
                toAminoMsg(message: _70.TxRaw): _70.TxRawAminoMsg;
                fromProtoMsg(message: _70.TxRawProtoMsg): _70.TxRaw;
                toProto(message: _70.TxRaw): Uint8Array;
                toProtoMsg(message: _70.TxRaw): _70.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _70.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.SignDoc;
                fromPartial(object: Partial<_70.SignDoc>): _70.SignDoc;
                fromAmino(object: _70.SignDocAmino): _70.SignDoc;
                toAmino(message: _70.SignDoc): _70.SignDocAmino;
                fromAminoMsg(object: _70.SignDocAminoMsg): _70.SignDoc;
                toAminoMsg(message: _70.SignDoc): _70.SignDocAminoMsg;
                fromProtoMsg(message: _70.SignDocProtoMsg): _70.SignDoc;
                toProto(message: _70.SignDoc): Uint8Array;
                toProtoMsg(message: _70.SignDoc): _70.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _70.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.TxBody;
                fromPartial(object: Partial<_70.TxBody>): _70.TxBody;
                fromAmino(object: _70.TxBodyAmino): _70.TxBody;
                toAmino(message: _70.TxBody): _70.TxBodyAmino;
                fromAminoMsg(object: _70.TxBodyAminoMsg): _70.TxBody;
                toAminoMsg(message: _70.TxBody): _70.TxBodyAminoMsg;
                fromProtoMsg(message: _70.TxBodyProtoMsg): _70.TxBody;
                toProto(message: _70.TxBody): Uint8Array;
                toProtoMsg(message: _70.TxBody): _70.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _70.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.AuthInfo;
                fromPartial(object: Partial<_70.AuthInfo>): _70.AuthInfo;
                fromAmino(object: _70.AuthInfoAmino): _70.AuthInfo;
                toAmino(message: _70.AuthInfo): _70.AuthInfoAmino;
                fromAminoMsg(object: _70.AuthInfoAminoMsg): _70.AuthInfo;
                toAminoMsg(message: _70.AuthInfo): _70.AuthInfoAminoMsg;
                fromProtoMsg(message: _70.AuthInfoProtoMsg): _70.AuthInfo;
                toProto(message: _70.AuthInfo): Uint8Array;
                toProtoMsg(message: _70.AuthInfo): _70.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _70.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.SignerInfo;
                fromPartial(object: Partial<_70.SignerInfo>): _70.SignerInfo;
                fromAmino(object: _70.SignerInfoAmino): _70.SignerInfo;
                toAmino(message: _70.SignerInfo): _70.SignerInfoAmino;
                fromAminoMsg(object: _70.SignerInfoAminoMsg): _70.SignerInfo;
                toAminoMsg(message: _70.SignerInfo): _70.SignerInfoAminoMsg;
                fromProtoMsg(message: _70.SignerInfoProtoMsg): _70.SignerInfo;
                toProto(message: _70.SignerInfo): Uint8Array;
                toProtoMsg(message: _70.SignerInfo): _70.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _70.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.ModeInfo;
                fromPartial(object: Partial<_70.ModeInfo>): _70.ModeInfo;
                fromAmino(object: _70.ModeInfoAmino): _70.ModeInfo;
                toAmino(message: _70.ModeInfo): _70.ModeInfoAmino;
                fromAminoMsg(object: _70.ModeInfoAminoMsg): _70.ModeInfo;
                toAminoMsg(message: _70.ModeInfo): _70.ModeInfoAminoMsg;
                fromProtoMsg(message: _70.ModeInfoProtoMsg): _70.ModeInfo;
                toProto(message: _70.ModeInfo): Uint8Array;
                toProtoMsg(message: _70.ModeInfo): _70.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _70.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.ModeInfo_Single;
                fromPartial(object: Partial<_70.ModeInfo_Single>): _70.ModeInfo_Single;
                fromAmino(object: _70.ModeInfo_SingleAmino): _70.ModeInfo_Single;
                toAmino(message: _70.ModeInfo_Single): _70.ModeInfo_SingleAmino;
                fromAminoMsg(object: _70.ModeInfo_SingleAminoMsg): _70.ModeInfo_Single;
                toAminoMsg(message: _70.ModeInfo_Single): _70.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _70.ModeInfo_SingleProtoMsg): _70.ModeInfo_Single;
                toProto(message: _70.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _70.ModeInfo_Single): _70.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _70.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.ModeInfo_Multi;
                fromPartial(object: Partial<_70.ModeInfo_Multi>): _70.ModeInfo_Multi;
                fromAmino(object: _70.ModeInfo_MultiAmino): _70.ModeInfo_Multi;
                toAmino(message: _70.ModeInfo_Multi): _70.ModeInfo_MultiAmino;
                fromAminoMsg(object: _70.ModeInfo_MultiAminoMsg): _70.ModeInfo_Multi;
                toAminoMsg(message: _70.ModeInfo_Multi): _70.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _70.ModeInfo_MultiProtoMsg): _70.ModeInfo_Multi;
                toProto(message: _70.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _70.ModeInfo_Multi): _70.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _70.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Fee;
                fromPartial(object: Partial<_70.Fee>): _70.Fee;
                fromAmino(object: _70.FeeAmino): _70.Fee;
                toAmino(message: _70.Fee): _70.FeeAmino;
                fromAminoMsg(object: _70.FeeAminoMsg): _70.Fee;
                toAminoMsg(message: _70.Fee): _70.FeeAminoMsg;
                fromProtoMsg(message: _70.FeeProtoMsg): _70.Fee;
                toProto(message: _70.Fee): Uint8Array;
                toProtoMsg(message: _70.Fee): _70.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _69.OrderBy;
            orderByToJSON(object: _69.OrderBy): string;
            broadcastModeFromJSON(object: any): _69.BroadcastMode;
            broadcastModeToJSON(object: _69.BroadcastMode): string;
            OrderBy: typeof _69.OrderBy;
            OrderBySDKType: typeof _69.OrderBy;
            OrderByAmino: typeof _69.OrderBy;
            BroadcastMode: typeof _69.BroadcastMode;
            BroadcastModeSDKType: typeof _69.BroadcastMode;
            BroadcastModeAmino: typeof _69.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _69.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.GetTxsEventRequest;
                fromPartial(object: Partial<_69.GetTxsEventRequest>): _69.GetTxsEventRequest;
                fromAmino(object: _69.GetTxsEventRequestAmino): _69.GetTxsEventRequest;
                toAmino(message: _69.GetTxsEventRequest): _69.GetTxsEventRequestAmino;
                fromAminoMsg(object: _69.GetTxsEventRequestAminoMsg): _69.GetTxsEventRequest;
                toAminoMsg(message: _69.GetTxsEventRequest): _69.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _69.GetTxsEventRequestProtoMsg): _69.GetTxsEventRequest;
                toProto(message: _69.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _69.GetTxsEventRequest): _69.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _69.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.GetTxsEventResponse;
                fromPartial(object: Partial<_69.GetTxsEventResponse>): _69.GetTxsEventResponse;
                fromAmino(object: _69.GetTxsEventResponseAmino): _69.GetTxsEventResponse;
                toAmino(message: _69.GetTxsEventResponse): _69.GetTxsEventResponseAmino;
                fromAminoMsg(object: _69.GetTxsEventResponseAminoMsg): _69.GetTxsEventResponse;
                toAminoMsg(message: _69.GetTxsEventResponse): _69.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _69.GetTxsEventResponseProtoMsg): _69.GetTxsEventResponse;
                toProto(message: _69.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _69.GetTxsEventResponse): _69.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _69.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.BroadcastTxRequest;
                fromPartial(object: Partial<_69.BroadcastTxRequest>): _69.BroadcastTxRequest;
                fromAmino(object: _69.BroadcastTxRequestAmino): _69.BroadcastTxRequest;
                toAmino(message: _69.BroadcastTxRequest): _69.BroadcastTxRequestAmino;
                fromAminoMsg(object: _69.BroadcastTxRequestAminoMsg): _69.BroadcastTxRequest;
                toAminoMsg(message: _69.BroadcastTxRequest): _69.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _69.BroadcastTxRequestProtoMsg): _69.BroadcastTxRequest;
                toProto(message: _69.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _69.BroadcastTxRequest): _69.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _69.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.BroadcastTxResponse;
                fromPartial(object: Partial<_69.BroadcastTxResponse>): _69.BroadcastTxResponse;
                fromAmino(object: _69.BroadcastTxResponseAmino): _69.BroadcastTxResponse;
                toAmino(message: _69.BroadcastTxResponse): _69.BroadcastTxResponseAmino;
                fromAminoMsg(object: _69.BroadcastTxResponseAminoMsg): _69.BroadcastTxResponse;
                toAminoMsg(message: _69.BroadcastTxResponse): _69.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _69.BroadcastTxResponseProtoMsg): _69.BroadcastTxResponse;
                toProto(message: _69.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _69.BroadcastTxResponse): _69.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _69.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.SimulateRequest;
                fromPartial(object: Partial<_69.SimulateRequest>): _69.SimulateRequest;
                fromAmino(object: _69.SimulateRequestAmino): _69.SimulateRequest;
                toAmino(message: _69.SimulateRequest): _69.SimulateRequestAmino;
                fromAminoMsg(object: _69.SimulateRequestAminoMsg): _69.SimulateRequest;
                toAminoMsg(message: _69.SimulateRequest): _69.SimulateRequestAminoMsg;
                fromProtoMsg(message: _69.SimulateRequestProtoMsg): _69.SimulateRequest;
                toProto(message: _69.SimulateRequest): Uint8Array;
                toProtoMsg(message: _69.SimulateRequest): _69.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _69.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.SimulateResponse;
                fromPartial(object: Partial<_69.SimulateResponse>): _69.SimulateResponse;
                fromAmino(object: _69.SimulateResponseAmino): _69.SimulateResponse;
                toAmino(message: _69.SimulateResponse): _69.SimulateResponseAmino;
                fromAminoMsg(object: _69.SimulateResponseAminoMsg): _69.SimulateResponse;
                toAminoMsg(message: _69.SimulateResponse): _69.SimulateResponseAminoMsg;
                fromProtoMsg(message: _69.SimulateResponseProtoMsg): _69.SimulateResponse;
                toProto(message: _69.SimulateResponse): Uint8Array;
                toProtoMsg(message: _69.SimulateResponse): _69.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _69.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.GetTxRequest;
                fromPartial(object: Partial<_69.GetTxRequest>): _69.GetTxRequest;
                fromAmino(object: _69.GetTxRequestAmino): _69.GetTxRequest;
                toAmino(message: _69.GetTxRequest): _69.GetTxRequestAmino;
                fromAminoMsg(object: _69.GetTxRequestAminoMsg): _69.GetTxRequest;
                toAminoMsg(message: _69.GetTxRequest): _69.GetTxRequestAminoMsg;
                fromProtoMsg(message: _69.GetTxRequestProtoMsg): _69.GetTxRequest;
                toProto(message: _69.GetTxRequest): Uint8Array;
                toProtoMsg(message: _69.GetTxRequest): _69.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _69.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.GetTxResponse;
                fromPartial(object: Partial<_69.GetTxResponse>): _69.GetTxResponse;
                fromAmino(object: _69.GetTxResponseAmino): _69.GetTxResponse;
                toAmino(message: _69.GetTxResponse): _69.GetTxResponseAmino;
                fromAminoMsg(object: _69.GetTxResponseAminoMsg): _69.GetTxResponse;
                toAminoMsg(message: _69.GetTxResponse): _69.GetTxResponseAminoMsg;
                fromProtoMsg(message: _69.GetTxResponseProtoMsg): _69.GetTxResponse;
                toProto(message: _69.GetTxResponse): Uint8Array;
                toProtoMsg(message: _69.GetTxResponse): _69.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _69.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_69.GetBlockWithTxsRequest>): _69.GetBlockWithTxsRequest;
                fromAmino(object: _69.GetBlockWithTxsRequestAmino): _69.GetBlockWithTxsRequest;
                toAmino(message: _69.GetBlockWithTxsRequest): _69.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _69.GetBlockWithTxsRequestAminoMsg): _69.GetBlockWithTxsRequest;
                toAminoMsg(message: _69.GetBlockWithTxsRequest): _69.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _69.GetBlockWithTxsRequestProtoMsg): _69.GetBlockWithTxsRequest;
                toProto(message: _69.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _69.GetBlockWithTxsRequest): _69.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _69.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_69.GetBlockWithTxsResponse>): _69.GetBlockWithTxsResponse;
                fromAmino(object: _69.GetBlockWithTxsResponseAmino): _69.GetBlockWithTxsResponse;
                toAmino(message: _69.GetBlockWithTxsResponse): _69.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _69.GetBlockWithTxsResponseAminoMsg): _69.GetBlockWithTxsResponse;
                toAminoMsg(message: _69.GetBlockWithTxsResponse): _69.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _69.GetBlockWithTxsResponseProtoMsg): _69.GetBlockWithTxsResponse;
                toProto(message: _69.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _69.GetBlockWithTxsResponse): _69.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _155.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _71.QueryCurrentPlanRequest): Promise<_71.QueryCurrentPlanResponse>;
                appliedPlan(request: _71.QueryAppliedPlanRequest): Promise<_71.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _71.QueryUpgradedConsensusStateRequest): Promise<_71.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _71.QueryModuleVersionsRequest): Promise<_71.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _140.LCDQueryClient;
            Plan: {
                typeUrl: string;
                encode(message: _72.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.Plan;
                fromPartial(object: Partial<_72.Plan>): _72.Plan;
                fromAmino(object: _72.PlanAmino): _72.Plan;
                toAmino(message: _72.Plan): _72.PlanAmino;
                fromAminoMsg(object: _72.PlanAminoMsg): _72.Plan;
                toAminoMsg(message: _72.Plan): _72.PlanAminoMsg;
                fromProtoMsg(message: _72.PlanProtoMsg): _72.Plan;
                toProto(message: _72.Plan): Uint8Array;
                toProtoMsg(message: _72.Plan): _72.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _72.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_72.SoftwareUpgradeProposal>): _72.SoftwareUpgradeProposal;
                fromAmino(object: _72.SoftwareUpgradeProposalAmino): _72.SoftwareUpgradeProposal;
                toAmino(message: _72.SoftwareUpgradeProposal): _72.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _72.SoftwareUpgradeProposalAminoMsg): _72.SoftwareUpgradeProposal;
                toAminoMsg(message: _72.SoftwareUpgradeProposal): _72.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _72.SoftwareUpgradeProposalProtoMsg): _72.SoftwareUpgradeProposal;
                toProto(message: _72.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _72.SoftwareUpgradeProposal): _72.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _72.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_72.CancelSoftwareUpgradeProposal>): _72.CancelSoftwareUpgradeProposal;
                fromAmino(object: _72.CancelSoftwareUpgradeProposalAmino): _72.CancelSoftwareUpgradeProposal;
                toAmino(message: _72.CancelSoftwareUpgradeProposal): _72.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _72.CancelSoftwareUpgradeProposalAminoMsg): _72.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _72.CancelSoftwareUpgradeProposal): _72.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _72.CancelSoftwareUpgradeProposalProtoMsg): _72.CancelSoftwareUpgradeProposal;
                toProto(message: _72.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _72.CancelSoftwareUpgradeProposal): _72.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _72.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.ModuleVersion;
                fromPartial(object: Partial<_72.ModuleVersion>): _72.ModuleVersion;
                fromAmino(object: _72.ModuleVersionAmino): _72.ModuleVersion;
                toAmino(message: _72.ModuleVersion): _72.ModuleVersionAmino;
                fromAminoMsg(object: _72.ModuleVersionAminoMsg): _72.ModuleVersion;
                toAminoMsg(message: _72.ModuleVersion): _72.ModuleVersionAminoMsg;
                fromProtoMsg(message: _72.ModuleVersionProtoMsg): _72.ModuleVersion;
                toProto(message: _72.ModuleVersion): Uint8Array;
                toProtoMsg(message: _72.ModuleVersion): _72.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _71.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _71.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_71.QueryCurrentPlanRequest>): _71.QueryCurrentPlanRequest;
                fromAmino(_: _71.QueryCurrentPlanRequestAmino): _71.QueryCurrentPlanRequest;
                toAmino(_: _71.QueryCurrentPlanRequest): _71.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _71.QueryCurrentPlanRequestAminoMsg): _71.QueryCurrentPlanRequest;
                toAminoMsg(message: _71.QueryCurrentPlanRequest): _71.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _71.QueryCurrentPlanRequestProtoMsg): _71.QueryCurrentPlanRequest;
                toProto(message: _71.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _71.QueryCurrentPlanRequest): _71.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _71.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_71.QueryCurrentPlanResponse>): _71.QueryCurrentPlanResponse;
                fromAmino(object: _71.QueryCurrentPlanResponseAmino): _71.QueryCurrentPlanResponse;
                toAmino(message: _71.QueryCurrentPlanResponse): _71.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _71.QueryCurrentPlanResponseAminoMsg): _71.QueryCurrentPlanResponse;
                toAminoMsg(message: _71.QueryCurrentPlanResponse): _71.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _71.QueryCurrentPlanResponseProtoMsg): _71.QueryCurrentPlanResponse;
                toProto(message: _71.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _71.QueryCurrentPlanResponse): _71.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _71.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_71.QueryAppliedPlanRequest>): _71.QueryAppliedPlanRequest;
                fromAmino(object: _71.QueryAppliedPlanRequestAmino): _71.QueryAppliedPlanRequest;
                toAmino(message: _71.QueryAppliedPlanRequest): _71.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _71.QueryAppliedPlanRequestAminoMsg): _71.QueryAppliedPlanRequest;
                toAminoMsg(message: _71.QueryAppliedPlanRequest): _71.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _71.QueryAppliedPlanRequestProtoMsg): _71.QueryAppliedPlanRequest;
                toProto(message: _71.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _71.QueryAppliedPlanRequest): _71.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _71.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_71.QueryAppliedPlanResponse>): _71.QueryAppliedPlanResponse;
                fromAmino(object: _71.QueryAppliedPlanResponseAmino): _71.QueryAppliedPlanResponse;
                toAmino(message: _71.QueryAppliedPlanResponse): _71.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _71.QueryAppliedPlanResponseAminoMsg): _71.QueryAppliedPlanResponse;
                toAminoMsg(message: _71.QueryAppliedPlanResponse): _71.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _71.QueryAppliedPlanResponseProtoMsg): _71.QueryAppliedPlanResponse;
                toProto(message: _71.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _71.QueryAppliedPlanResponse): _71.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _71.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_71.QueryUpgradedConsensusStateRequest>): _71.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _71.QueryUpgradedConsensusStateRequestAmino): _71.QueryUpgradedConsensusStateRequest;
                toAmino(message: _71.QueryUpgradedConsensusStateRequest): _71.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _71.QueryUpgradedConsensusStateRequestAminoMsg): _71.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _71.QueryUpgradedConsensusStateRequest): _71.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _71.QueryUpgradedConsensusStateRequestProtoMsg): _71.QueryUpgradedConsensusStateRequest;
                toProto(message: _71.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _71.QueryUpgradedConsensusStateRequest): _71.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _71.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_71.QueryUpgradedConsensusStateResponse>): _71.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _71.QueryUpgradedConsensusStateResponseAmino): _71.QueryUpgradedConsensusStateResponse;
                toAmino(message: _71.QueryUpgradedConsensusStateResponse): _71.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _71.QueryUpgradedConsensusStateResponseAminoMsg): _71.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _71.QueryUpgradedConsensusStateResponse): _71.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _71.QueryUpgradedConsensusStateResponseProtoMsg): _71.QueryUpgradedConsensusStateResponse;
                toProto(message: _71.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _71.QueryUpgradedConsensusStateResponse): _71.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _71.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_71.QueryModuleVersionsRequest>): _71.QueryModuleVersionsRequest;
                fromAmino(object: _71.QueryModuleVersionsRequestAmino): _71.QueryModuleVersionsRequest;
                toAmino(message: _71.QueryModuleVersionsRequest): _71.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _71.QueryModuleVersionsRequestAminoMsg): _71.QueryModuleVersionsRequest;
                toAminoMsg(message: _71.QueryModuleVersionsRequest): _71.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryModuleVersionsRequestProtoMsg): _71.QueryModuleVersionsRequest;
                toProto(message: _71.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryModuleVersionsRequest): _71.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _71.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_71.QueryModuleVersionsResponse>): _71.QueryModuleVersionsResponse;
                fromAmino(object: _71.QueryModuleVersionsResponseAmino): _71.QueryModuleVersionsResponse;
                toAmino(message: _71.QueryModuleVersionsResponse): _71.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _71.QueryModuleVersionsResponseAminoMsg): _71.QueryModuleVersionsResponse;
                toAminoMsg(message: _71.QueryModuleVersionsResponse): _71.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryModuleVersionsResponseProtoMsg): _71.QueryModuleVersionsResponse;
                toProto(message: _71.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryModuleVersionsResponse): _71.QueryModuleVersionsResponseProtoMsg;
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
                    createVestingAccount(value: _73.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _73.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _73.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _73.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _73.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _73.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _73.MsgCreateVestingAccount) => _73.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _73.MsgCreateVestingAccountAmino) => _73.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _74.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.BaseVestingAccount;
                fromPartial(object: Partial<_74.BaseVestingAccount>): _74.BaseVestingAccount;
                fromAmino(object: _74.BaseVestingAccountAmino): _74.BaseVestingAccount;
                toAmino(message: _74.BaseVestingAccount): _74.BaseVestingAccountAmino;
                fromAminoMsg(object: _74.BaseVestingAccountAminoMsg): _74.BaseVestingAccount;
                toAminoMsg(message: _74.BaseVestingAccount): _74.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _74.BaseVestingAccountProtoMsg): _74.BaseVestingAccount;
                toProto(message: _74.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _74.BaseVestingAccount): _74.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _74.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.ContinuousVestingAccount;
                fromPartial(object: Partial<_74.ContinuousVestingAccount>): _74.ContinuousVestingAccount;
                fromAmino(object: _74.ContinuousVestingAccountAmino): _74.ContinuousVestingAccount;
                toAmino(message: _74.ContinuousVestingAccount): _74.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _74.ContinuousVestingAccountAminoMsg): _74.ContinuousVestingAccount;
                toAminoMsg(message: _74.ContinuousVestingAccount): _74.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _74.ContinuousVestingAccountProtoMsg): _74.ContinuousVestingAccount;
                toProto(message: _74.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _74.ContinuousVestingAccount): _74.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _74.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.DelayedVestingAccount;
                fromPartial(object: Partial<_74.DelayedVestingAccount>): _74.DelayedVestingAccount;
                fromAmino(object: _74.DelayedVestingAccountAmino): _74.DelayedVestingAccount;
                toAmino(message: _74.DelayedVestingAccount): _74.DelayedVestingAccountAmino;
                fromAminoMsg(object: _74.DelayedVestingAccountAminoMsg): _74.DelayedVestingAccount;
                toAminoMsg(message: _74.DelayedVestingAccount): _74.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _74.DelayedVestingAccountProtoMsg): _74.DelayedVestingAccount;
                toProto(message: _74.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _74.DelayedVestingAccount): _74.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _74.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.Period;
                fromPartial(object: Partial<_74.Period>): _74.Period;
                fromAmino(object: _74.PeriodAmino): _74.Period;
                toAmino(message: _74.Period): _74.PeriodAmino;
                fromAminoMsg(object: _74.PeriodAminoMsg): _74.Period;
                toAminoMsg(message: _74.Period): _74.PeriodAminoMsg;
                fromProtoMsg(message: _74.PeriodProtoMsg): _74.Period;
                toProto(message: _74.Period): Uint8Array;
                toProtoMsg(message: _74.Period): _74.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _74.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.PeriodicVestingAccount;
                fromPartial(object: Partial<_74.PeriodicVestingAccount>): _74.PeriodicVestingAccount;
                fromAmino(object: _74.PeriodicVestingAccountAmino): _74.PeriodicVestingAccount;
                toAmino(message: _74.PeriodicVestingAccount): _74.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _74.PeriodicVestingAccountAminoMsg): _74.PeriodicVestingAccount;
                toAminoMsg(message: _74.PeriodicVestingAccount): _74.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _74.PeriodicVestingAccountProtoMsg): _74.PeriodicVestingAccount;
                toProto(message: _74.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _74.PeriodicVestingAccount): _74.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _74.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.PermanentLockedAccount;
                fromPartial(object: Partial<_74.PermanentLockedAccount>): _74.PermanentLockedAccount;
                fromAmino(object: _74.PermanentLockedAccountAmino): _74.PermanentLockedAccount;
                toAmino(message: _74.PermanentLockedAccount): _74.PermanentLockedAccountAmino;
                fromAminoMsg(object: _74.PermanentLockedAccountAminoMsg): _74.PermanentLockedAccount;
                toAminoMsg(message: _74.PermanentLockedAccount): _74.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _74.PermanentLockedAccountProtoMsg): _74.PermanentLockedAccount;
                toProto(message: _74.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _74.PermanentLockedAccount): _74.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _73.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.MsgCreateVestingAccount;
                fromPartial(object: Partial<_73.MsgCreateVestingAccount>): _73.MsgCreateVestingAccount;
                fromAmino(object: _73.MsgCreateVestingAccountAmino): _73.MsgCreateVestingAccount;
                toAmino(message: _73.MsgCreateVestingAccount): _73.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _73.MsgCreateVestingAccountAminoMsg): _73.MsgCreateVestingAccount;
                toAminoMsg(message: _73.MsgCreateVestingAccount): _73.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _73.MsgCreateVestingAccountProtoMsg): _73.MsgCreateVestingAccount;
                toProto(message: _73.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _73.MsgCreateVestingAccount): _73.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _73.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _73.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_73.MsgCreateVestingAccountResponse>): _73.MsgCreateVestingAccountResponse;
                fromAmino(_: _73.MsgCreateVestingAccountResponseAmino): _73.MsgCreateVestingAccountResponse;
                toAmino(_: _73.MsgCreateVestingAccountResponse): _73.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _73.MsgCreateVestingAccountResponseAminoMsg): _73.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _73.MsgCreateVestingAccountResponse): _73.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _73.MsgCreateVestingAccountResponseProtoMsg): _73.MsgCreateVestingAccountResponse;
                toProto(message: _73.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _73.MsgCreateVestingAccountResponse): _73.MsgCreateVestingAccountResponseProtoMsg;
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
                        accounts(request?: _7.QueryAccountsRequest): Promise<_7.QueryAccountsResponse>;
                        account(request: _7.QueryAccountRequest): Promise<_7.QueryAccountResponse>;
                        params(request?: _7.QueryParamsRequest): Promise<_7.QueryParamsResponse>;
                        moduleAccountByName(request: _7.QueryModuleAccountByNameRequest): Promise<_7.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _11.QueryGrantsRequest): Promise<_11.QueryGrantsResponse>;
                        granterGrants(request: _11.QueryGranterGrantsRequest): Promise<_11.QueryGranterGrantsResponse>;
                        granteeGrants(request: _11.QueryGranteeGrantsRequest): Promise<_11.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _16.QueryBalanceRequest): Promise<_16.QueryBalanceResponse>;
                        allBalances(request: _16.QueryAllBalancesRequest): Promise<_16.QueryAllBalancesResponse>;
                        spendableBalances(request: _16.QuerySpendableBalancesRequest): Promise<_16.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _16.QueryTotalSupplyRequest): Promise<_16.QueryTotalSupplyResponse>;
                        supplyOf(request: _16.QuerySupplyOfRequest): Promise<_16.QuerySupplyOfResponse>;
                        params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
                        denomMetadata(request: _16.QueryDenomMetadataRequest): Promise<_16.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _16.QueryDenomsMetadataRequest): Promise<_16.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _20.ConfigRequest): Promise<_20.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _27.GetNodeInfoRequest): Promise<_27.GetNodeInfoResponse>;
                            getSyncing(request?: _27.GetSyncingRequest): Promise<_27.GetSyncingResponse>;
                            getLatestBlock(request?: _27.GetLatestBlockRequest): Promise<_27.GetLatestBlockResponse>;
                            getBlockByHeight(request: _27.GetBlockByHeightRequest): Promise<_27.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _27.GetLatestValidatorSetRequest): Promise<_27.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _27.GetValidatorSetByHeightRequest): Promise<_27.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _39.QueryParamsRequest): Promise<_39.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _39.QueryValidatorOutstandingRewardsRequest): Promise<_39.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _39.QueryValidatorCommissionRequest): Promise<_39.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _39.QueryValidatorSlashesRequest): Promise<_39.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _39.QueryDelegationRewardsRequest): Promise<_39.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _39.QueryDelegationTotalRewardsRequest): Promise<_39.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _39.QueryDelegatorValidatorsRequest): Promise<_39.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _39.QueryDelegatorWithdrawAddressRequest): Promise<_39.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _39.QueryCommunityPoolRequest): Promise<_39.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _43.QueryEvidenceRequest): Promise<_43.QueryEvidenceResponse>;
                        allEvidence(request?: _43.QueryAllEvidenceRequest): Promise<_43.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _47.QueryAllowanceRequest): Promise<_47.QueryAllowanceResponse>;
                        allowances(request: _47.QueryAllowancesRequest): Promise<_47.QueryAllowancesResponse>;
                        allowancesByGranter(request: _47.QueryAllowancesByGranterRequest): Promise<_47.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _52.QueryProposalRequest): Promise<_52.QueryProposalResponse>;
                        proposals(request: _52.QueryProposalsRequest): Promise<_52.QueryProposalsResponse>;
                        vote(request: _52.QueryVoteRequest): Promise<_52.QueryVoteResponse>;
                        votes(request: _52.QueryVotesRequest): Promise<_52.QueryVotesResponse>;
                        params(request: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                        deposit(request: _52.QueryDepositRequest): Promise<_52.QueryDepositResponse>;
                        deposits(request: _52.QueryDepositsRequest): Promise<_52.QueryDepositsResponse>;
                        tallyResult(request: _52.QueryTallyResultRequest): Promise<_52.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                        inflation(request?: _56.QueryInflationRequest): Promise<_56.QueryInflationResponse>;
                        annualProvisions(request?: _56.QueryAnnualProvisionsRequest): Promise<_56.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                        signingInfo(request: _60.QuerySigningInfoRequest): Promise<_60.QuerySigningInfoResponse>;
                        signingInfos(request?: _60.QuerySigningInfosRequest): Promise<_60.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _65.QueryValidatorsRequest): Promise<_65.QueryValidatorsResponse>;
                        validator(request: _65.QueryValidatorRequest): Promise<_65.QueryValidatorResponse>;
                        validatorDelegations(request: _65.QueryValidatorDelegationsRequest): Promise<_65.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _65.QueryValidatorUnbondingDelegationsRequest): Promise<_65.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _65.QueryDelegationRequest): Promise<_65.QueryDelegationResponse>;
                        unbondingDelegation(request: _65.QueryUnbondingDelegationRequest): Promise<_65.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _65.QueryDelegatorDelegationsRequest): Promise<_65.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _65.QueryDelegatorUnbondingDelegationsRequest): Promise<_65.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _65.QueryRedelegationsRequest): Promise<_65.QueryRedelegationsResponse>;
                        delegatorValidators(request: _65.QueryDelegatorValidatorsRequest): Promise<_65.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _65.QueryDelegatorValidatorRequest): Promise<_65.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _65.QueryHistoricalInfoRequest): Promise<_65.QueryHistoricalInfoResponse>;
                        pool(request?: _65.QueryPoolRequest): Promise<_65.QueryPoolResponse>;
                        params(request?: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _69.SimulateRequest): Promise<_69.SimulateResponse>;
                        getTx(request: _69.GetTxRequest): Promise<_69.GetTxResponse>;
                        broadcastTx(request: _69.BroadcastTxRequest): Promise<_69.BroadcastTxResponse>;
                        getTxsEvent(request: _69.GetTxsEventRequest): Promise<_69.GetTxsEventResponse>;
                        getBlockWithTxs(request: _69.GetBlockWithTxsRequest): Promise<_69.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _71.QueryCurrentPlanRequest): Promise<_71.QueryCurrentPlanResponse>;
                        appliedPlan(request: _71.QueryAppliedPlanRequest): Promise<_71.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _71.QueryUpgradedConsensusStateRequest): Promise<_71.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _71.QueryModuleVersionsRequest): Promise<_71.QueryModuleVersionsResponse>;
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
