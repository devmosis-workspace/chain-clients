import * as _10 from "./auth/v1beta1/auth";
import * as _11 from "./auth/v1beta1/genesis";
import * as _12 from "./auth/v1beta1/query";
import * as _13 from "./authz/v1beta1/authz";
import * as _14 from "./authz/v1beta1/event";
import * as _15 from "./authz/v1beta1/genesis";
import * as _16 from "./authz/v1beta1/query";
import * as _17 from "./authz/v1beta1/tx";
import * as _18 from "./bank/v1beta1/authz";
import * as _19 from "./bank/v1beta1/bank";
import * as _20 from "./bank/v1beta1/genesis";
import * as _21 from "./bank/v1beta1/query";
import * as _22 from "./bank/v1beta1/tx";
import * as _23 from "./base/abci/v1beta1/abci";
import * as _24 from "./base/kv/v1beta1/kv";
import * as _25 from "./base/node/v1beta1/query";
import * as _26 from "./base/query/v1beta1/pagination";
import * as _27 from "./base/reflection/v1beta1/reflection";
import * as _28 from "./base/reflection/v2alpha1/reflection";
import * as _29 from "./base/snapshots/v1beta1/snapshot";
import * as _30 from "./base/store/v1beta1/commit_info";
import * as _31 from "./base/store/v1beta1/listening";
import * as _32 from "./base/tendermint/v1beta1/query";
import * as _33 from "./base/v1beta1/coin";
import * as _34 from "./capability/v1beta1/capability";
import * as _35 from "./capability/v1beta1/genesis";
import * as _36 from "./crisis/v1beta1/genesis";
import * as _37 from "./crisis/v1beta1/tx";
import * as _38 from "./crypto/ed25519/keys";
import * as _39 from "./crypto/multisig/keys";
import * as _40 from "./crypto/secp256k1/keys";
import * as _41 from "./crypto/secp256r1/keys";
import * as _42 from "./distribution/v1beta1/distribution";
import * as _43 from "./distribution/v1beta1/genesis";
import * as _44 from "./distribution/v1beta1/query";
import * as _45 from "./distribution/v1beta1/tx";
import * as _46 from "./evidence/v1beta1/evidence";
import * as _47 from "./evidence/v1beta1/genesis";
import * as _48 from "./evidence/v1beta1/query";
import * as _49 from "./evidence/v1beta1/tx";
import * as _50 from "./feegrant/v1beta1/feegrant";
import * as _51 from "./feegrant/v1beta1/genesis";
import * as _52 from "./feegrant/v1beta1/query";
import * as _53 from "./feegrant/v1beta1/tx";
import * as _54 from "./genutil/v1beta1/genesis";
import * as _55 from "./gov/v1beta1/genesis";
import * as _56 from "./gov/v1beta1/gov";
import * as _57 from "./gov/v1beta1/query";
import * as _58 from "./gov/v1beta1/tx";
import * as _59 from "./mint/v1beta1/genesis";
import * as _60 from "./mint/v1beta1/mint";
import * as _61 from "./mint/v1beta1/query";
import * as _62 from "./params/v1beta1/params";
import * as _63 from "./params/v1beta1/query";
import * as _64 from "./slashing/v1beta1/genesis";
import * as _65 from "./slashing/v1beta1/query";
import * as _66 from "./slashing/v1beta1/slashing";
import * as _67 from "./slashing/v1beta1/tx";
import * as _68 from "./staking/v1beta1/authz";
import * as _69 from "./staking/v1beta1/genesis";
import * as _70 from "./staking/v1beta1/query";
import * as _71 from "./staking/v1beta1/staking";
import * as _72 from "./staking/v1beta1/tx";
import * as _73 from "./tx/signing/v1beta1/signing";
import * as _74 from "./tx/v1beta1/service";
import * as _75 from "./tx/v1beta1/tx";
import * as _76 from "./upgrade/v1beta1/query";
import * as _77 from "./upgrade/v1beta1/upgrade";
import * as _78 from "./vesting/v1beta1/tx";
import * as _79 from "./vesting/v1beta1/vesting";
import * as _142 from "./auth/v1beta1/query.lcd";
import * as _143 from "./authz/v1beta1/query.lcd";
import * as _144 from "./bank/v1beta1/query.lcd";
import * as _145 from "./base/node/v1beta1/query.lcd";
import * as _146 from "./base/tendermint/v1beta1/query.lcd";
import * as _147 from "./distribution/v1beta1/query.lcd";
import * as _148 from "./evidence/v1beta1/query.lcd";
import * as _149 from "./feegrant/v1beta1/query.lcd";
import * as _150 from "./gov/v1beta1/query.lcd";
import * as _151 from "./mint/v1beta1/query.lcd";
import * as _152 from "./params/v1beta1/query.lcd";
import * as _153 from "./slashing/v1beta1/query.lcd";
import * as _154 from "./staking/v1beta1/query.lcd";
import * as _155 from "./tx/v1beta1/service.lcd";
import * as _156 from "./upgrade/v1beta1/query.lcd";
import * as _157 from "./auth/v1beta1/query.rpc.Query";
import * as _158 from "./authz/v1beta1/query.rpc.Query";
import * as _159 from "./bank/v1beta1/query.rpc.Query";
import * as _160 from "./base/node/v1beta1/query.rpc.Service";
import * as _161 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _162 from "./distribution/v1beta1/query.rpc.Query";
import * as _163 from "./evidence/v1beta1/query.rpc.Query";
import * as _164 from "./feegrant/v1beta1/query.rpc.Query";
import * as _165 from "./gov/v1beta1/query.rpc.Query";
import * as _166 from "./mint/v1beta1/query.rpc.Query";
import * as _167 from "./params/v1beta1/query.rpc.Query";
import * as _168 from "./slashing/v1beta1/query.rpc.Query";
import * as _169 from "./staking/v1beta1/query.rpc.Query";
import * as _170 from "./tx/v1beta1/service.rpc.Service";
import * as _171 from "./upgrade/v1beta1/query.rpc.Query";
import * as _172 from "./authz/v1beta1/tx.rpc.msg";
import * as _173 from "./bank/v1beta1/tx.rpc.msg";
import * as _174 from "./crisis/v1beta1/tx.rpc.msg";
import * as _175 from "./distribution/v1beta1/tx.rpc.msg";
import * as _176 from "./evidence/v1beta1/tx.rpc.msg";
import * as _177 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _178 from "./gov/v1beta1/tx.rpc.msg";
import * as _179 from "./slashing/v1beta1/tx.rpc.msg";
import * as _180 from "./staking/v1beta1/tx.rpc.msg";
import * as _181 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _157.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _12.QueryAccountsRequest): Promise<_12.QueryAccountsResponse>;
                account(request: _12.QueryAccountRequest): Promise<_12.QueryAccountResponse>;
                params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                moduleAccountByName(request: _12.QueryModuleAccountByNameRequest): Promise<_12.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _142.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _12.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryAccountsRequest;
                fromPartial(object: Partial<_12.QueryAccountsRequest>): _12.QueryAccountsRequest;
                fromAmino(object: _12.QueryAccountsRequestAmino): _12.QueryAccountsRequest;
                toAmino(message: _12.QueryAccountsRequest): _12.QueryAccountsRequestAmino;
                fromAminoMsg(object: _12.QueryAccountsRequestAminoMsg): _12.QueryAccountsRequest;
                toAminoMsg(message: _12.QueryAccountsRequest): _12.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _12.QueryAccountsRequestProtoMsg): _12.QueryAccountsRequest;
                toProto(message: _12.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _12.QueryAccountsRequest): _12.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _12.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryAccountsResponse;
                fromPartial(object: Partial<_12.QueryAccountsResponse>): _12.QueryAccountsResponse;
                fromAmino(object: _12.QueryAccountsResponseAmino): _12.QueryAccountsResponse;
                toAmino(message: _12.QueryAccountsResponse): _12.QueryAccountsResponseAmino;
                fromAminoMsg(object: _12.QueryAccountsResponseAminoMsg): _12.QueryAccountsResponse;
                toAminoMsg(message: _12.QueryAccountsResponse): _12.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _12.QueryAccountsResponseProtoMsg): _12.QueryAccountsResponse;
                toProto(message: _12.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _12.QueryAccountsResponse): _12.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _12.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryAccountRequest;
                fromPartial(object: Partial<_12.QueryAccountRequest>): _12.QueryAccountRequest;
                fromAmino(object: _12.QueryAccountRequestAmino): _12.QueryAccountRequest;
                toAmino(message: _12.QueryAccountRequest): _12.QueryAccountRequestAmino;
                fromAminoMsg(object: _12.QueryAccountRequestAminoMsg): _12.QueryAccountRequest;
                toAminoMsg(message: _12.QueryAccountRequest): _12.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _12.QueryAccountRequestProtoMsg): _12.QueryAccountRequest;
                toProto(message: _12.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _12.QueryAccountRequest): _12.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _12.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryAccountResponse;
                fromPartial(object: Partial<_12.QueryAccountResponse>): _12.QueryAccountResponse;
                fromAmino(object: _12.QueryAccountResponseAmino): _12.QueryAccountResponse;
                toAmino(message: _12.QueryAccountResponse): _12.QueryAccountResponseAmino;
                fromAminoMsg(object: _12.QueryAccountResponseAminoMsg): _12.QueryAccountResponse;
                toAminoMsg(message: _12.QueryAccountResponse): _12.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _12.QueryAccountResponseProtoMsg): _12.QueryAccountResponse;
                toProto(message: _12.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _12.QueryAccountResponse): _12.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _12.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.QueryParamsRequest;
                fromPartial(_: Partial<_12.QueryParamsRequest>): _12.QueryParamsRequest;
                fromAmino(_: _12.QueryParamsRequestAmino): _12.QueryParamsRequest;
                toAmino(_: _12.QueryParamsRequest): _12.QueryParamsRequestAmino;
                fromAminoMsg(object: _12.QueryParamsRequestAminoMsg): _12.QueryParamsRequest;
                toAminoMsg(message: _12.QueryParamsRequest): _12.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _12.QueryParamsRequestProtoMsg): _12.QueryParamsRequest;
                toProto(message: _12.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _12.QueryParamsRequest): _12.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _12.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryParamsResponse;
                fromPartial(object: Partial<_12.QueryParamsResponse>): _12.QueryParamsResponse;
                fromAmino(object: _12.QueryParamsResponseAmino): _12.QueryParamsResponse;
                toAmino(message: _12.QueryParamsResponse): _12.QueryParamsResponseAmino;
                fromAminoMsg(object: _12.QueryParamsResponseAminoMsg): _12.QueryParamsResponse;
                toAminoMsg(message: _12.QueryParamsResponse): _12.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _12.QueryParamsResponseProtoMsg): _12.QueryParamsResponse;
                toProto(message: _12.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _12.QueryParamsResponse): _12.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _12.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_12.QueryModuleAccountByNameRequest>): _12.QueryModuleAccountByNameRequest;
                fromAmino(object: _12.QueryModuleAccountByNameRequestAmino): _12.QueryModuleAccountByNameRequest;
                toAmino(message: _12.QueryModuleAccountByNameRequest): _12.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _12.QueryModuleAccountByNameRequestAminoMsg): _12.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _12.QueryModuleAccountByNameRequest): _12.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _12.QueryModuleAccountByNameRequestProtoMsg): _12.QueryModuleAccountByNameRequest;
                toProto(message: _12.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _12.QueryModuleAccountByNameRequest): _12.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _12.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_12.QueryModuleAccountByNameResponse>): _12.QueryModuleAccountByNameResponse;
                fromAmino(object: _12.QueryModuleAccountByNameResponseAmino): _12.QueryModuleAccountByNameResponse;
                toAmino(message: _12.QueryModuleAccountByNameResponse): _12.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _12.QueryModuleAccountByNameResponseAminoMsg): _12.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _12.QueryModuleAccountByNameResponse): _12.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _12.QueryModuleAccountByNameResponseProtoMsg): _12.QueryModuleAccountByNameResponse;
                toProto(message: _12.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _12.QueryModuleAccountByNameResponse): _12.QueryModuleAccountByNameResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _10.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _10.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _11.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.GenesisState;
                fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
                fromAmino(object: _11.GenesisStateAmino): _11.GenesisState;
                toAmino(message: _11.GenesisState): _11.GenesisStateAmino;
                fromAminoMsg(object: _11.GenesisStateAminoMsg): _11.GenesisState;
                toAminoMsg(message: _11.GenesisState): _11.GenesisStateAminoMsg;
                fromProtoMsg(message: _11.GenesisStateProtoMsg): _11.GenesisState;
                toProto(message: _11.GenesisState): Uint8Array;
                toProtoMsg(message: _11.GenesisState): _11.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _10.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.BaseAccount;
                fromPartial(object: Partial<_10.BaseAccount>): _10.BaseAccount;
                fromAmino(object: _10.BaseAccountAmino): _10.BaseAccount;
                toAmino(message: _10.BaseAccount): _10.BaseAccountAmino;
                fromAminoMsg(object: _10.BaseAccountAminoMsg): _10.BaseAccount;
                toAminoMsg(message: _10.BaseAccount): _10.BaseAccountAminoMsg;
                fromProtoMsg(message: _10.BaseAccountProtoMsg): _10.BaseAccount;
                toProto(message: _10.BaseAccount): Uint8Array;
                toProtoMsg(message: _10.BaseAccount): _10.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _10.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.ModuleAccount;
                fromPartial(object: Partial<_10.ModuleAccount>): _10.ModuleAccount;
                fromAmino(object: _10.ModuleAccountAmino): _10.ModuleAccount;
                toAmino(message: _10.ModuleAccount): _10.ModuleAccountAmino;
                fromAminoMsg(object: _10.ModuleAccountAminoMsg): _10.ModuleAccount;
                toAminoMsg(message: _10.ModuleAccount): _10.ModuleAccountAminoMsg;
                fromProtoMsg(message: _10.ModuleAccountProtoMsg): _10.ModuleAccount;
                toProto(message: _10.ModuleAccount): Uint8Array;
                toProtoMsg(message: _10.ModuleAccount): _10.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _10.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.Params;
                fromPartial(object: Partial<_10.Params>): _10.Params;
                fromAmino(object: _10.ParamsAmino): _10.Params;
                toAmino(message: _10.Params): _10.ParamsAmino;
                fromAminoMsg(object: _10.ParamsAminoMsg): _10.Params;
                toAminoMsg(message: _10.Params): _10.ParamsAminoMsg;
                fromProtoMsg(message: _10.ParamsProtoMsg): _10.Params;
                toProto(message: _10.Params): Uint8Array;
                toProtoMsg(message: _10.Params): _10.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _172.MsgClientImpl;
            QueryClientImpl: typeof _158.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _16.QueryGrantsRequest): Promise<_16.QueryGrantsResponse>;
                granterGrants(request: _16.QueryGranterGrantsRequest): Promise<_16.QueryGranterGrantsResponse>;
                granteeGrants(request: _16.QueryGranteeGrantsRequest): Promise<_16.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _143.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _17.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _17.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _17.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _17.MsgGrant): {
                        typeUrl: string;
                        value: _17.MsgGrant;
                    };
                    exec(value: _17.MsgExec): {
                        typeUrl: string;
                        value: _17.MsgExec;
                    };
                    revoke(value: _17.MsgRevoke): {
                        typeUrl: string;
                        value: _17.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _17.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _17.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _17.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _17.MsgGrant): {
                        typeUrl: string;
                        value: _17.MsgGrant;
                    };
                    exec(value: _17.MsgExec): {
                        typeUrl: string;
                        value: _17.MsgExec;
                    };
                    revoke(value: _17.MsgRevoke): {
                        typeUrl: string;
                        value: _17.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _17.MsgGrant) => _17.MsgGrantAmino;
                    fromAmino: (object: _17.MsgGrantAmino) => _17.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _17.MsgExec) => _17.MsgExecAmino;
                    fromAmino: (object: _17.MsgExecAmino) => _17.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _17.MsgRevoke) => _17.MsgRevokeAmino;
                    fromAmino: (object: _17.MsgRevokeAmino) => _17.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _17.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgGrant;
                fromPartial(object: Partial<_17.MsgGrant>): _17.MsgGrant;
                fromAmino(object: _17.MsgGrantAmino): _17.MsgGrant;
                toAmino(message: _17.MsgGrant): _17.MsgGrantAmino;
                fromAminoMsg(object: _17.MsgGrantAminoMsg): _17.MsgGrant;
                toAminoMsg(message: _17.MsgGrant): _17.MsgGrantAminoMsg;
                fromProtoMsg(message: _17.MsgGrantProtoMsg): _17.MsgGrant;
                toProto(message: _17.MsgGrant): Uint8Array;
                toProtoMsg(message: _17.MsgGrant): _17.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _17.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgExecResponse;
                fromPartial(object: Partial<_17.MsgExecResponse>): _17.MsgExecResponse;
                fromAmino(object: _17.MsgExecResponseAmino): _17.MsgExecResponse;
                toAmino(message: _17.MsgExecResponse): _17.MsgExecResponseAmino;
                fromAminoMsg(object: _17.MsgExecResponseAminoMsg): _17.MsgExecResponse;
                toAminoMsg(message: _17.MsgExecResponse): _17.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _17.MsgExecResponseProtoMsg): _17.MsgExecResponse;
                toProto(message: _17.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _17.MsgExecResponse): _17.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _17.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgExec;
                fromPartial(object: Partial<_17.MsgExec>): _17.MsgExec;
                fromAmino(object: _17.MsgExecAmino): _17.MsgExec;
                toAmino(message: _17.MsgExec): _17.MsgExecAmino;
                fromAminoMsg(object: _17.MsgExecAminoMsg): _17.MsgExec;
                toAminoMsg(message: _17.MsgExec): _17.MsgExecAminoMsg;
                fromProtoMsg(message: _17.MsgExecProtoMsg): _17.MsgExec;
                toProto(message: _17.MsgExec): Uint8Array;
                toProtoMsg(message: _17.MsgExec): _17.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _17.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgGrantResponse;
                fromPartial(_: Partial<_17.MsgGrantResponse>): _17.MsgGrantResponse;
                fromAmino(_: _17.MsgGrantResponseAmino): _17.MsgGrantResponse;
                toAmino(_: _17.MsgGrantResponse): _17.MsgGrantResponseAmino;
                fromAminoMsg(object: _17.MsgGrantResponseAminoMsg): _17.MsgGrantResponse;
                toAminoMsg(message: _17.MsgGrantResponse): _17.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _17.MsgGrantResponseProtoMsg): _17.MsgGrantResponse;
                toProto(message: _17.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _17.MsgGrantResponse): _17.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _17.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgRevoke;
                fromPartial(object: Partial<_17.MsgRevoke>): _17.MsgRevoke;
                fromAmino(object: _17.MsgRevokeAmino): _17.MsgRevoke;
                toAmino(message: _17.MsgRevoke): _17.MsgRevokeAmino;
                fromAminoMsg(object: _17.MsgRevokeAminoMsg): _17.MsgRevoke;
                toAminoMsg(message: _17.MsgRevoke): _17.MsgRevokeAminoMsg;
                fromProtoMsg(message: _17.MsgRevokeProtoMsg): _17.MsgRevoke;
                toProto(message: _17.MsgRevoke): Uint8Array;
                toProtoMsg(message: _17.MsgRevoke): _17.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _17.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgRevokeResponse;
                fromPartial(_: Partial<_17.MsgRevokeResponse>): _17.MsgRevokeResponse;
                fromAmino(_: _17.MsgRevokeResponseAmino): _17.MsgRevokeResponse;
                toAmino(_: _17.MsgRevokeResponse): _17.MsgRevokeResponseAmino;
                fromAminoMsg(object: _17.MsgRevokeResponseAminoMsg): _17.MsgRevokeResponse;
                toAminoMsg(message: _17.MsgRevokeResponse): _17.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _17.MsgRevokeResponseProtoMsg): _17.MsgRevokeResponse;
                toProto(message: _17.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _17.MsgRevokeResponse): _17.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _16.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryGrantsRequest;
                fromPartial(object: Partial<_16.QueryGrantsRequest>): _16.QueryGrantsRequest;
                fromAmino(object: _16.QueryGrantsRequestAmino): _16.QueryGrantsRequest;
                toAmino(message: _16.QueryGrantsRequest): _16.QueryGrantsRequestAmino;
                fromAminoMsg(object: _16.QueryGrantsRequestAminoMsg): _16.QueryGrantsRequest;
                toAminoMsg(message: _16.QueryGrantsRequest): _16.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _16.QueryGrantsRequestProtoMsg): _16.QueryGrantsRequest;
                toProto(message: _16.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _16.QueryGrantsRequest): _16.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _16.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryGrantsResponse;
                fromPartial(object: Partial<_16.QueryGrantsResponse>): _16.QueryGrantsResponse;
                fromAmino(object: _16.QueryGrantsResponseAmino): _16.QueryGrantsResponse;
                toAmino(message: _16.QueryGrantsResponse): _16.QueryGrantsResponseAmino;
                fromAminoMsg(object: _16.QueryGrantsResponseAminoMsg): _16.QueryGrantsResponse;
                toAminoMsg(message: _16.QueryGrantsResponse): _16.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _16.QueryGrantsResponseProtoMsg): _16.QueryGrantsResponse;
                toProto(message: _16.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _16.QueryGrantsResponse): _16.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _16.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_16.QueryGranterGrantsRequest>): _16.QueryGranterGrantsRequest;
                fromAmino(object: _16.QueryGranterGrantsRequestAmino): _16.QueryGranterGrantsRequest;
                toAmino(message: _16.QueryGranterGrantsRequest): _16.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _16.QueryGranterGrantsRequestAminoMsg): _16.QueryGranterGrantsRequest;
                toAminoMsg(message: _16.QueryGranterGrantsRequest): _16.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _16.QueryGranterGrantsRequestProtoMsg): _16.QueryGranterGrantsRequest;
                toProto(message: _16.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _16.QueryGranterGrantsRequest): _16.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _16.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_16.QueryGranterGrantsResponse>): _16.QueryGranterGrantsResponse;
                fromAmino(object: _16.QueryGranterGrantsResponseAmino): _16.QueryGranterGrantsResponse;
                toAmino(message: _16.QueryGranterGrantsResponse): _16.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _16.QueryGranterGrantsResponseAminoMsg): _16.QueryGranterGrantsResponse;
                toAminoMsg(message: _16.QueryGranterGrantsResponse): _16.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _16.QueryGranterGrantsResponseProtoMsg): _16.QueryGranterGrantsResponse;
                toProto(message: _16.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _16.QueryGranterGrantsResponse): _16.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _16.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_16.QueryGranteeGrantsRequest>): _16.QueryGranteeGrantsRequest;
                fromAmino(object: _16.QueryGranteeGrantsRequestAmino): _16.QueryGranteeGrantsRequest;
                toAmino(message: _16.QueryGranteeGrantsRequest): _16.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _16.QueryGranteeGrantsRequestAminoMsg): _16.QueryGranteeGrantsRequest;
                toAminoMsg(message: _16.QueryGranteeGrantsRequest): _16.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _16.QueryGranteeGrantsRequestProtoMsg): _16.QueryGranteeGrantsRequest;
                toProto(message: _16.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _16.QueryGranteeGrantsRequest): _16.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _16.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_16.QueryGranteeGrantsResponse>): _16.QueryGranteeGrantsResponse;
                fromAmino(object: _16.QueryGranteeGrantsResponseAmino): _16.QueryGranteeGrantsResponse;
                toAmino(message: _16.QueryGranteeGrantsResponse): _16.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _16.QueryGranteeGrantsResponseAminoMsg): _16.QueryGranteeGrantsResponse;
                toAminoMsg(message: _16.QueryGranteeGrantsResponse): _16.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _16.QueryGranteeGrantsResponseProtoMsg): _16.QueryGranteeGrantsResponse;
                toProto(message: _16.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _16.QueryGranteeGrantsResponse): _16.QueryGranteeGrantsResponseProtoMsg;
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
            EventGrant: {
                typeUrl: string;
                encode(message: _14.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventGrant;
                fromPartial(object: Partial<_14.EventGrant>): _14.EventGrant;
                fromAmino(object: _14.EventGrantAmino): _14.EventGrant;
                toAmino(message: _14.EventGrant): _14.EventGrantAmino;
                fromAminoMsg(object: _14.EventGrantAminoMsg): _14.EventGrant;
                toAminoMsg(message: _14.EventGrant): _14.EventGrantAminoMsg;
                fromProtoMsg(message: _14.EventGrantProtoMsg): _14.EventGrant;
                toProto(message: _14.EventGrant): Uint8Array;
                toProtoMsg(message: _14.EventGrant): _14.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _14.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventRevoke;
                fromPartial(object: Partial<_14.EventRevoke>): _14.EventRevoke;
                fromAmino(object: _14.EventRevokeAmino): _14.EventRevoke;
                toAmino(message: _14.EventRevoke): _14.EventRevokeAmino;
                fromAminoMsg(object: _14.EventRevokeAminoMsg): _14.EventRevoke;
                toAminoMsg(message: _14.EventRevoke): _14.EventRevokeAminoMsg;
                fromProtoMsg(message: _14.EventRevokeProtoMsg): _14.EventRevoke;
                toProto(message: _14.EventRevoke): Uint8Array;
                toProtoMsg(message: _14.EventRevoke): _14.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _13.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.GenericAuthorization;
                fromPartial(object: Partial<_13.GenericAuthorization>): _13.GenericAuthorization;
                fromAmino(object: _13.GenericAuthorizationAmino): _13.GenericAuthorization;
                toAmino(message: _13.GenericAuthorization): _13.GenericAuthorizationAmino;
                fromAminoMsg(object: _13.GenericAuthorizationAminoMsg): _13.GenericAuthorization;
                toAminoMsg(message: _13.GenericAuthorization): _13.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _13.GenericAuthorizationProtoMsg): _13.GenericAuthorization;
                toProto(message: _13.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _13.GenericAuthorization): _13.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _13.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.Grant;
                fromPartial(object: Partial<_13.Grant>): _13.Grant;
                fromAmino(object: _13.GrantAmino): _13.Grant;
                toAmino(message: _13.Grant): _13.GrantAmino;
                fromAminoMsg(object: _13.GrantAminoMsg): _13.Grant;
                toAminoMsg(message: _13.Grant): _13.GrantAminoMsg;
                fromProtoMsg(message: _13.GrantProtoMsg): _13.Grant;
                toProto(message: _13.Grant): Uint8Array;
                toProtoMsg(message: _13.Grant): _13.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _13.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.GrantAuthorization;
                fromPartial(object: Partial<_13.GrantAuthorization>): _13.GrantAuthorization;
                fromAmino(object: _13.GrantAuthorizationAmino): _13.GrantAuthorization;
                toAmino(message: _13.GrantAuthorization): _13.GrantAuthorizationAmino;
                fromAminoMsg(object: _13.GrantAuthorizationAminoMsg): _13.GrantAuthorization;
                toAminoMsg(message: _13.GrantAuthorization): _13.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _13.GrantAuthorizationProtoMsg): _13.GrantAuthorization;
                toProto(message: _13.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _13.GrantAuthorization): _13.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _18.SendAuthorization | _68.StakeAuthorization | _13.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _173.MsgClientImpl;
            QueryClientImpl: typeof _159.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _21.QueryBalanceRequest): Promise<_21.QueryBalanceResponse>;
                allBalances(request: _21.QueryAllBalancesRequest): Promise<_21.QueryAllBalancesResponse>;
                spendableBalances(request: _21.QuerySpendableBalancesRequest): Promise<_21.QuerySpendableBalancesResponse>;
                totalSupply(request?: _21.QueryTotalSupplyRequest): Promise<_21.QueryTotalSupplyResponse>;
                supplyOf(request: _21.QuerySupplyOfRequest): Promise<_21.QuerySupplyOfResponse>;
                params(request?: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
                denomMetadata(request: _21.QueryDenomMetadataRequest): Promise<_21.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _21.QueryDenomsMetadataRequest): Promise<_21.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _144.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _22.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _22.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _22.MsgSend): {
                        typeUrl: string;
                        value: _22.MsgSend;
                    };
                    multiSend(value: _22.MsgMultiSend): {
                        typeUrl: string;
                        value: _22.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _22.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _22.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _22.MsgSend): {
                        typeUrl: string;
                        value: _22.MsgSend;
                    };
                    multiSend(value: _22.MsgMultiSend): {
                        typeUrl: string;
                        value: _22.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _22.MsgSend) => _22.MsgSendAmino;
                    fromAmino: (object: _22.MsgSendAmino) => _22.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _22.MsgMultiSend) => _22.MsgMultiSendAmino;
                    fromAmino: (object: _22.MsgMultiSendAmino) => _22.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _22.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MsgSend;
                fromPartial(object: Partial<_22.MsgSend>): _22.MsgSend;
                fromAmino(object: _22.MsgSendAmino): _22.MsgSend;
                toAmino(message: _22.MsgSend): _22.MsgSendAmino;
                fromAminoMsg(object: _22.MsgSendAminoMsg): _22.MsgSend;
                toAminoMsg(message: _22.MsgSend): _22.MsgSendAminoMsg;
                fromProtoMsg(message: _22.MsgSendProtoMsg): _22.MsgSend;
                toProto(message: _22.MsgSend): Uint8Array;
                toProtoMsg(message: _22.MsgSend): _22.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _22.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.MsgSendResponse;
                fromPartial(_: Partial<_22.MsgSendResponse>): _22.MsgSendResponse;
                fromAmino(_: _22.MsgSendResponseAmino): _22.MsgSendResponse;
                toAmino(_: _22.MsgSendResponse): _22.MsgSendResponseAmino;
                fromAminoMsg(object: _22.MsgSendResponseAminoMsg): _22.MsgSendResponse;
                toAminoMsg(message: _22.MsgSendResponse): _22.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _22.MsgSendResponseProtoMsg): _22.MsgSendResponse;
                toProto(message: _22.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _22.MsgSendResponse): _22.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _22.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MsgMultiSend;
                fromPartial(object: Partial<_22.MsgMultiSend>): _22.MsgMultiSend;
                fromAmino(object: _22.MsgMultiSendAmino): _22.MsgMultiSend;
                toAmino(message: _22.MsgMultiSend): _22.MsgMultiSendAmino;
                fromAminoMsg(object: _22.MsgMultiSendAminoMsg): _22.MsgMultiSend;
                toAminoMsg(message: _22.MsgMultiSend): _22.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _22.MsgMultiSendProtoMsg): _22.MsgMultiSend;
                toProto(message: _22.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _22.MsgMultiSend): _22.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _22.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.MsgMultiSendResponse;
                fromPartial(_: Partial<_22.MsgMultiSendResponse>): _22.MsgMultiSendResponse;
                fromAmino(_: _22.MsgMultiSendResponseAmino): _22.MsgMultiSendResponse;
                toAmino(_: _22.MsgMultiSendResponse): _22.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _22.MsgMultiSendResponseAminoMsg): _22.MsgMultiSendResponse;
                toAminoMsg(message: _22.MsgMultiSendResponse): _22.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _22.MsgMultiSendResponseProtoMsg): _22.MsgMultiSendResponse;
                toProto(message: _22.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _22.MsgMultiSendResponse): _22.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _21.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryBalanceRequest;
                fromPartial(object: Partial<_21.QueryBalanceRequest>): _21.QueryBalanceRequest;
                fromAmino(object: _21.QueryBalanceRequestAmino): _21.QueryBalanceRequest;
                toAmino(message: _21.QueryBalanceRequest): _21.QueryBalanceRequestAmino;
                fromAminoMsg(object: _21.QueryBalanceRequestAminoMsg): _21.QueryBalanceRequest;
                toAminoMsg(message: _21.QueryBalanceRequest): _21.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _21.QueryBalanceRequestProtoMsg): _21.QueryBalanceRequest;
                toProto(message: _21.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _21.QueryBalanceRequest): _21.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _21.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryBalanceResponse;
                fromPartial(object: Partial<_21.QueryBalanceResponse>): _21.QueryBalanceResponse;
                fromAmino(object: _21.QueryBalanceResponseAmino): _21.QueryBalanceResponse;
                toAmino(message: _21.QueryBalanceResponse): _21.QueryBalanceResponseAmino;
                fromAminoMsg(object: _21.QueryBalanceResponseAminoMsg): _21.QueryBalanceResponse;
                toAminoMsg(message: _21.QueryBalanceResponse): _21.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _21.QueryBalanceResponseProtoMsg): _21.QueryBalanceResponse;
                toProto(message: _21.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _21.QueryBalanceResponse): _21.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _21.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryAllBalancesRequest;
                fromPartial(object: Partial<_21.QueryAllBalancesRequest>): _21.QueryAllBalancesRequest;
                fromAmino(object: _21.QueryAllBalancesRequestAmino): _21.QueryAllBalancesRequest;
                toAmino(message: _21.QueryAllBalancesRequest): _21.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _21.QueryAllBalancesRequestAminoMsg): _21.QueryAllBalancesRequest;
                toAminoMsg(message: _21.QueryAllBalancesRequest): _21.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _21.QueryAllBalancesRequestProtoMsg): _21.QueryAllBalancesRequest;
                toProto(message: _21.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _21.QueryAllBalancesRequest): _21.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _21.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryAllBalancesResponse;
                fromPartial(object: Partial<_21.QueryAllBalancesResponse>): _21.QueryAllBalancesResponse;
                fromAmino(object: _21.QueryAllBalancesResponseAmino): _21.QueryAllBalancesResponse;
                toAmino(message: _21.QueryAllBalancesResponse): _21.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _21.QueryAllBalancesResponseAminoMsg): _21.QueryAllBalancesResponse;
                toAminoMsg(message: _21.QueryAllBalancesResponse): _21.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _21.QueryAllBalancesResponseProtoMsg): _21.QueryAllBalancesResponse;
                toProto(message: _21.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _21.QueryAllBalancesResponse): _21.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _21.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_21.QuerySpendableBalancesRequest>): _21.QuerySpendableBalancesRequest;
                fromAmino(object: _21.QuerySpendableBalancesRequestAmino): _21.QuerySpendableBalancesRequest;
                toAmino(message: _21.QuerySpendableBalancesRequest): _21.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _21.QuerySpendableBalancesRequestAminoMsg): _21.QuerySpendableBalancesRequest;
                toAminoMsg(message: _21.QuerySpendableBalancesRequest): _21.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _21.QuerySpendableBalancesRequestProtoMsg): _21.QuerySpendableBalancesRequest;
                toProto(message: _21.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _21.QuerySpendableBalancesRequest): _21.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _21.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_21.QuerySpendableBalancesResponse>): _21.QuerySpendableBalancesResponse;
                fromAmino(object: _21.QuerySpendableBalancesResponseAmino): _21.QuerySpendableBalancesResponse;
                toAmino(message: _21.QuerySpendableBalancesResponse): _21.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _21.QuerySpendableBalancesResponseAminoMsg): _21.QuerySpendableBalancesResponse;
                toAminoMsg(message: _21.QuerySpendableBalancesResponse): _21.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _21.QuerySpendableBalancesResponseProtoMsg): _21.QuerySpendableBalancesResponse;
                toProto(message: _21.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _21.QuerySpendableBalancesResponse): _21.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _21.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_21.QueryTotalSupplyRequest>): _21.QueryTotalSupplyRequest;
                fromAmino(object: _21.QueryTotalSupplyRequestAmino): _21.QueryTotalSupplyRequest;
                toAmino(message: _21.QueryTotalSupplyRequest): _21.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _21.QueryTotalSupplyRequestAminoMsg): _21.QueryTotalSupplyRequest;
                toAminoMsg(message: _21.QueryTotalSupplyRequest): _21.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _21.QueryTotalSupplyRequestProtoMsg): _21.QueryTotalSupplyRequest;
                toProto(message: _21.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _21.QueryTotalSupplyRequest): _21.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _21.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_21.QueryTotalSupplyResponse>): _21.QueryTotalSupplyResponse;
                fromAmino(object: _21.QueryTotalSupplyResponseAmino): _21.QueryTotalSupplyResponse;
                toAmino(message: _21.QueryTotalSupplyResponse): _21.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _21.QueryTotalSupplyResponseAminoMsg): _21.QueryTotalSupplyResponse;
                toAminoMsg(message: _21.QueryTotalSupplyResponse): _21.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _21.QueryTotalSupplyResponseProtoMsg): _21.QueryTotalSupplyResponse;
                toProto(message: _21.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _21.QueryTotalSupplyResponse): _21.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _21.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QuerySupplyOfRequest;
                fromPartial(object: Partial<_21.QuerySupplyOfRequest>): _21.QuerySupplyOfRequest;
                fromAmino(object: _21.QuerySupplyOfRequestAmino): _21.QuerySupplyOfRequest;
                toAmino(message: _21.QuerySupplyOfRequest): _21.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _21.QuerySupplyOfRequestAminoMsg): _21.QuerySupplyOfRequest;
                toAminoMsg(message: _21.QuerySupplyOfRequest): _21.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _21.QuerySupplyOfRequestProtoMsg): _21.QuerySupplyOfRequest;
                toProto(message: _21.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _21.QuerySupplyOfRequest): _21.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _21.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QuerySupplyOfResponse;
                fromPartial(object: Partial<_21.QuerySupplyOfResponse>): _21.QuerySupplyOfResponse;
                fromAmino(object: _21.QuerySupplyOfResponseAmino): _21.QuerySupplyOfResponse;
                toAmino(message: _21.QuerySupplyOfResponse): _21.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _21.QuerySupplyOfResponseAminoMsg): _21.QuerySupplyOfResponse;
                toAminoMsg(message: _21.QuerySupplyOfResponse): _21.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _21.QuerySupplyOfResponseProtoMsg): _21.QuerySupplyOfResponse;
                toProto(message: _21.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _21.QuerySupplyOfResponse): _21.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _21.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.QueryParamsRequest;
                fromPartial(_: Partial<_21.QueryParamsRequest>): _21.QueryParamsRequest;
                fromAmino(_: _21.QueryParamsRequestAmino): _21.QueryParamsRequest;
                toAmino(_: _21.QueryParamsRequest): _21.QueryParamsRequestAmino;
                fromAminoMsg(object: _21.QueryParamsRequestAminoMsg): _21.QueryParamsRequest;
                toAminoMsg(message: _21.QueryParamsRequest): _21.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _21.QueryParamsRequestProtoMsg): _21.QueryParamsRequest;
                toProto(message: _21.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _21.QueryParamsRequest): _21.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _21.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryParamsResponse;
                fromPartial(object: Partial<_21.QueryParamsResponse>): _21.QueryParamsResponse;
                fromAmino(object: _21.QueryParamsResponseAmino): _21.QueryParamsResponse;
                toAmino(message: _21.QueryParamsResponse): _21.QueryParamsResponseAmino;
                fromAminoMsg(object: _21.QueryParamsResponseAminoMsg): _21.QueryParamsResponse;
                toAminoMsg(message: _21.QueryParamsResponse): _21.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _21.QueryParamsResponseProtoMsg): _21.QueryParamsResponse;
                toProto(message: _21.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _21.QueryParamsResponse): _21.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _21.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_21.QueryDenomsMetadataRequest>): _21.QueryDenomsMetadataRequest;
                fromAmino(object: _21.QueryDenomsMetadataRequestAmino): _21.QueryDenomsMetadataRequest;
                toAmino(message: _21.QueryDenomsMetadataRequest): _21.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _21.QueryDenomsMetadataRequestAminoMsg): _21.QueryDenomsMetadataRequest;
                toAminoMsg(message: _21.QueryDenomsMetadataRequest): _21.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _21.QueryDenomsMetadataRequestProtoMsg): _21.QueryDenomsMetadataRequest;
                toProto(message: _21.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _21.QueryDenomsMetadataRequest): _21.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _21.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_21.QueryDenomsMetadataResponse>): _21.QueryDenomsMetadataResponse;
                fromAmino(object: _21.QueryDenomsMetadataResponseAmino): _21.QueryDenomsMetadataResponse;
                toAmino(message: _21.QueryDenomsMetadataResponse): _21.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _21.QueryDenomsMetadataResponseAminoMsg): _21.QueryDenomsMetadataResponse;
                toAminoMsg(message: _21.QueryDenomsMetadataResponse): _21.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _21.QueryDenomsMetadataResponseProtoMsg): _21.QueryDenomsMetadataResponse;
                toProto(message: _21.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _21.QueryDenomsMetadataResponse): _21.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _21.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_21.QueryDenomMetadataRequest>): _21.QueryDenomMetadataRequest;
                fromAmino(object: _21.QueryDenomMetadataRequestAmino): _21.QueryDenomMetadataRequest;
                toAmino(message: _21.QueryDenomMetadataRequest): _21.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _21.QueryDenomMetadataRequestAminoMsg): _21.QueryDenomMetadataRequest;
                toAminoMsg(message: _21.QueryDenomMetadataRequest): _21.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _21.QueryDenomMetadataRequestProtoMsg): _21.QueryDenomMetadataRequest;
                toProto(message: _21.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _21.QueryDenomMetadataRequest): _21.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _21.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_21.QueryDenomMetadataResponse>): _21.QueryDenomMetadataResponse;
                fromAmino(object: _21.QueryDenomMetadataResponseAmino): _21.QueryDenomMetadataResponse;
                toAmino(message: _21.QueryDenomMetadataResponse): _21.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _21.QueryDenomMetadataResponseAminoMsg): _21.QueryDenomMetadataResponse;
                toAminoMsg(message: _21.QueryDenomMetadataResponse): _21.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _21.QueryDenomMetadataResponseProtoMsg): _21.QueryDenomMetadataResponse;
                toProto(message: _21.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _21.QueryDenomMetadataResponse): _21.QueryDenomMetadataResponseProtoMsg;
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
            Balance: {
                typeUrl: string;
                encode(message: _20.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Balance;
                fromPartial(object: Partial<_20.Balance>): _20.Balance;
                fromAmino(object: _20.BalanceAmino): _20.Balance;
                toAmino(message: _20.Balance): _20.BalanceAmino;
                fromAminoMsg(object: _20.BalanceAminoMsg): _20.Balance;
                toAminoMsg(message: _20.Balance): _20.BalanceAminoMsg;
                fromProtoMsg(message: _20.BalanceProtoMsg): _20.Balance;
                toProto(message: _20.Balance): Uint8Array;
                toProtoMsg(message: _20.Balance): _20.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _19.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.Params;
                fromPartial(object: Partial<_19.Params>): _19.Params;
                fromAmino(object: _19.ParamsAmino): _19.Params;
                toAmino(message: _19.Params): _19.ParamsAmino;
                fromAminoMsg(object: _19.ParamsAminoMsg): _19.Params;
                toAminoMsg(message: _19.Params): _19.ParamsAminoMsg;
                fromProtoMsg(message: _19.ParamsProtoMsg): _19.Params;
                toProto(message: _19.Params): Uint8Array;
                toProtoMsg(message: _19.Params): _19.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _19.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.SendEnabled;
                fromPartial(object: Partial<_19.SendEnabled>): _19.SendEnabled;
                fromAmino(object: _19.SendEnabledAmino): _19.SendEnabled;
                toAmino(message: _19.SendEnabled): _19.SendEnabledAmino;
                fromAminoMsg(object: _19.SendEnabledAminoMsg): _19.SendEnabled;
                toAminoMsg(message: _19.SendEnabled): _19.SendEnabledAminoMsg;
                fromProtoMsg(message: _19.SendEnabledProtoMsg): _19.SendEnabled;
                toProto(message: _19.SendEnabled): Uint8Array;
                toProtoMsg(message: _19.SendEnabled): _19.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _19.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.Input;
                fromPartial(object: Partial<_19.Input>): _19.Input;
                fromAmino(object: _19.InputAmino): _19.Input;
                toAmino(message: _19.Input): _19.InputAmino;
                fromAminoMsg(object: _19.InputAminoMsg): _19.Input;
                toAminoMsg(message: _19.Input): _19.InputAminoMsg;
                fromProtoMsg(message: _19.InputProtoMsg): _19.Input;
                toProto(message: _19.Input): Uint8Array;
                toProtoMsg(message: _19.Input): _19.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _19.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.Output;
                fromPartial(object: Partial<_19.Output>): _19.Output;
                fromAmino(object: _19.OutputAmino): _19.Output;
                toAmino(message: _19.Output): _19.OutputAmino;
                fromAminoMsg(object: _19.OutputAminoMsg): _19.Output;
                toAminoMsg(message: _19.Output): _19.OutputAminoMsg;
                fromProtoMsg(message: _19.OutputProtoMsg): _19.Output;
                toProto(message: _19.Output): Uint8Array;
                toProtoMsg(message: _19.Output): _19.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _19.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.Supply;
                fromPartial(object: Partial<_19.Supply>): _19.Supply;
                fromAmino(object: _19.SupplyAmino): _19.Supply;
                toAmino(message: _19.Supply): _19.SupplyAmino;
                fromAminoMsg(object: _19.SupplyAminoMsg): _19.Supply;
                toAminoMsg(message: _19.Supply): _19.SupplyAminoMsg;
                fromProtoMsg(message: _19.SupplyProtoMsg): _19.Supply;
                toProto(message: _19.Supply): Uint8Array;
                toProtoMsg(message: _19.Supply): _19.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _19.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.DenomUnit;
                fromPartial(object: Partial<_19.DenomUnit>): _19.DenomUnit;
                fromAmino(object: _19.DenomUnitAmino): _19.DenomUnit;
                toAmino(message: _19.DenomUnit): _19.DenomUnitAmino;
                fromAminoMsg(object: _19.DenomUnitAminoMsg): _19.DenomUnit;
                toAminoMsg(message: _19.DenomUnit): _19.DenomUnitAminoMsg;
                fromProtoMsg(message: _19.DenomUnitProtoMsg): _19.DenomUnit;
                toProto(message: _19.DenomUnit): Uint8Array;
                toProtoMsg(message: _19.DenomUnit): _19.DenomUnitProtoMsg;
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
            SendAuthorization: {
                typeUrl: string;
                encode(message: _18.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.SendAuthorization;
                fromPartial(object: Partial<_18.SendAuthorization>): _18.SendAuthorization;
                fromAmino(object: _18.SendAuthorizationAmino): _18.SendAuthorization;
                toAmino(message: _18.SendAuthorization): _18.SendAuthorizationAmino;
                fromAminoMsg(object: _18.SendAuthorizationAminoMsg): _18.SendAuthorization;
                toAminoMsg(message: _18.SendAuthorization): _18.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _18.SendAuthorizationProtoMsg): _18.SendAuthorization;
                toProto(message: _18.SendAuthorization): Uint8Array;
                toProtoMsg(message: _18.SendAuthorization): _18.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _23.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.TxResponse;
                    fromPartial(object: Partial<_23.TxResponse>): _23.TxResponse;
                    fromAmino(object: _23.TxResponseAmino): _23.TxResponse;
                    toAmino(message: _23.TxResponse): _23.TxResponseAmino;
                    fromAminoMsg(object: _23.TxResponseAminoMsg): _23.TxResponse;
                    toAminoMsg(message: _23.TxResponse): _23.TxResponseAminoMsg;
                    fromProtoMsg(message: _23.TxResponseProtoMsg): _23.TxResponse;
                    toProto(message: _23.TxResponse): Uint8Array;
                    toProtoMsg(message: _23.TxResponse): _23.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _23.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.ABCIMessageLog;
                    fromPartial(object: Partial<_23.ABCIMessageLog>): _23.ABCIMessageLog;
                    fromAmino(object: _23.ABCIMessageLogAmino): _23.ABCIMessageLog;
                    toAmino(message: _23.ABCIMessageLog): _23.ABCIMessageLogAmino;
                    fromAminoMsg(object: _23.ABCIMessageLogAminoMsg): _23.ABCIMessageLog;
                    toAminoMsg(message: _23.ABCIMessageLog): _23.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _23.ABCIMessageLogProtoMsg): _23.ABCIMessageLog;
                    toProto(message: _23.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _23.ABCIMessageLog): _23.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _23.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.StringEvent;
                    fromPartial(object: Partial<_23.StringEvent>): _23.StringEvent;
                    fromAmino(object: _23.StringEventAmino): _23.StringEvent;
                    toAmino(message: _23.StringEvent): _23.StringEventAmino;
                    fromAminoMsg(object: _23.StringEventAminoMsg): _23.StringEvent;
                    toAminoMsg(message: _23.StringEvent): _23.StringEventAminoMsg;
                    fromProtoMsg(message: _23.StringEventProtoMsg): _23.StringEvent;
                    toProto(message: _23.StringEvent): Uint8Array;
                    toProtoMsg(message: _23.StringEvent): _23.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _23.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.Attribute;
                    fromPartial(object: Partial<_23.Attribute>): _23.Attribute;
                    fromAmino(object: _23.AttributeAmino): _23.Attribute;
                    toAmino(message: _23.Attribute): _23.AttributeAmino;
                    fromAminoMsg(object: _23.AttributeAminoMsg): _23.Attribute;
                    toAminoMsg(message: _23.Attribute): _23.AttributeAminoMsg;
                    fromProtoMsg(message: _23.AttributeProtoMsg): _23.Attribute;
                    toProto(message: _23.Attribute): Uint8Array;
                    toProtoMsg(message: _23.Attribute): _23.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _23.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.GasInfo;
                    fromPartial(object: Partial<_23.GasInfo>): _23.GasInfo;
                    fromAmino(object: _23.GasInfoAmino): _23.GasInfo;
                    toAmino(message: _23.GasInfo): _23.GasInfoAmino;
                    fromAminoMsg(object: _23.GasInfoAminoMsg): _23.GasInfo;
                    toAminoMsg(message: _23.GasInfo): _23.GasInfoAminoMsg;
                    fromProtoMsg(message: _23.GasInfoProtoMsg): _23.GasInfo;
                    toProto(message: _23.GasInfo): Uint8Array;
                    toProtoMsg(message: _23.GasInfo): _23.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _23.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.Result;
                    fromPartial(object: Partial<_23.Result>): _23.Result;
                    fromAmino(object: _23.ResultAmino): _23.Result;
                    toAmino(message: _23.Result): _23.ResultAmino;
                    fromAminoMsg(object: _23.ResultAminoMsg): _23.Result;
                    toAminoMsg(message: _23.Result): _23.ResultAminoMsg;
                    fromProtoMsg(message: _23.ResultProtoMsg): _23.Result;
                    toProto(message: _23.Result): Uint8Array;
                    toProtoMsg(message: _23.Result): _23.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _23.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.SimulationResponse;
                    fromPartial(object: Partial<_23.SimulationResponse>): _23.SimulationResponse;
                    fromAmino(object: _23.SimulationResponseAmino): _23.SimulationResponse;
                    toAmino(message: _23.SimulationResponse): _23.SimulationResponseAmino;
                    fromAminoMsg(object: _23.SimulationResponseAminoMsg): _23.SimulationResponse;
                    toAminoMsg(message: _23.SimulationResponse): _23.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _23.SimulationResponseProtoMsg): _23.SimulationResponse;
                    toProto(message: _23.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _23.SimulationResponse): _23.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _23.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.MsgData;
                    fromPartial(object: Partial<_23.MsgData>): _23.MsgData;
                    fromAmino(object: _23.MsgDataAmino): _23.MsgData;
                    toAmino(message: _23.MsgData): _23.MsgDataAmino;
                    fromAminoMsg(object: _23.MsgDataAminoMsg): _23.MsgData;
                    toAminoMsg(message: _23.MsgData): _23.MsgDataAminoMsg;
                    fromProtoMsg(message: _23.MsgDataProtoMsg): _23.MsgData;
                    toProto(message: _23.MsgData): Uint8Array;
                    toProtoMsg(message: _23.MsgData): _23.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _23.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.TxMsgData;
                    fromPartial(object: Partial<_23.TxMsgData>): _23.TxMsgData;
                    fromAmino(object: _23.TxMsgDataAmino): _23.TxMsgData;
                    toAmino(message: _23.TxMsgData): _23.TxMsgDataAmino;
                    fromAminoMsg(object: _23.TxMsgDataAminoMsg): _23.TxMsgData;
                    toAminoMsg(message: _23.TxMsgData): _23.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _23.TxMsgDataProtoMsg): _23.TxMsgData;
                    toProto(message: _23.TxMsgData): Uint8Array;
                    toProtoMsg(message: _23.TxMsgData): _23.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _23.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.SearchTxsResult;
                    fromPartial(object: Partial<_23.SearchTxsResult>): _23.SearchTxsResult;
                    fromAmino(object: _23.SearchTxsResultAmino): _23.SearchTxsResult;
                    toAmino(message: _23.SearchTxsResult): _23.SearchTxsResultAmino;
                    fromAminoMsg(object: _23.SearchTxsResultAminoMsg): _23.SearchTxsResult;
                    toAminoMsg(message: _23.SearchTxsResult): _23.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _23.SearchTxsResultProtoMsg): _23.SearchTxsResult;
                    toProto(message: _23.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _23.SearchTxsResult): _23.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _24.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.Pairs;
                    fromPartial(object: Partial<_24.Pairs>): _24.Pairs;
                    fromAmino(object: _24.PairsAmino): _24.Pairs;
                    toAmino(message: _24.Pairs): _24.PairsAmino;
                    fromAminoMsg(object: _24.PairsAminoMsg): _24.Pairs;
                    toAminoMsg(message: _24.Pairs): _24.PairsAminoMsg;
                    fromProtoMsg(message: _24.PairsProtoMsg): _24.Pairs;
                    toProto(message: _24.Pairs): Uint8Array;
                    toProtoMsg(message: _24.Pairs): _24.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _24.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.Pair;
                    fromPartial(object: Partial<_24.Pair>): _24.Pair;
                    fromAmino(object: _24.PairAmino): _24.Pair;
                    toAmino(message: _24.Pair): _24.PairAmino;
                    fromAminoMsg(object: _24.PairAminoMsg): _24.Pair;
                    toAminoMsg(message: _24.Pair): _24.PairAminoMsg;
                    fromProtoMsg(message: _24.PairProtoMsg): _24.Pair;
                    toProto(message: _24.Pair): Uint8Array;
                    toProtoMsg(message: _24.Pair): _24.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _160.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _25.ConfigRequest): Promise<_25.ConfigResponse>;
                };
                LCDQueryClient: typeof _145.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _25.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _25.ConfigRequest;
                    fromPartial(_: Partial<_25.ConfigRequest>): _25.ConfigRequest;
                    fromAmino(_: _25.ConfigRequestAmino): _25.ConfigRequest;
                    toAmino(_: _25.ConfigRequest): _25.ConfigRequestAmino;
                    fromAminoMsg(object: _25.ConfigRequestAminoMsg): _25.ConfigRequest;
                    toAminoMsg(message: _25.ConfigRequest): _25.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _25.ConfigRequestProtoMsg): _25.ConfigRequest;
                    toProto(message: _25.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _25.ConfigRequest): _25.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _25.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.ConfigResponse;
                    fromPartial(object: Partial<_25.ConfigResponse>): _25.ConfigResponse;
                    fromAmino(object: _25.ConfigResponseAmino): _25.ConfigResponse;
                    toAmino(message: _25.ConfigResponse): _25.ConfigResponseAmino;
                    fromAminoMsg(object: _25.ConfigResponseAminoMsg): _25.ConfigResponse;
                    toAminoMsg(message: _25.ConfigResponse): _25.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _25.ConfigResponseProtoMsg): _25.ConfigResponse;
                    toProto(message: _25.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _25.ConfigResponse): _25.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _26.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.PageRequest;
                    fromPartial(object: Partial<_26.PageRequest>): _26.PageRequest;
                    fromAmino(object: _26.PageRequestAmino): _26.PageRequest;
                    toAmino(message: _26.PageRequest): _26.PageRequestAmino;
                    fromAminoMsg(object: _26.PageRequestAminoMsg): _26.PageRequest;
                    toAminoMsg(message: _26.PageRequest): _26.PageRequestAminoMsg;
                    fromProtoMsg(message: _26.PageRequestProtoMsg): _26.PageRequest;
                    toProto(message: _26.PageRequest): Uint8Array;
                    toProtoMsg(message: _26.PageRequest): _26.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _26.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.PageResponse;
                    fromPartial(object: Partial<_26.PageResponse>): _26.PageResponse;
                    fromAmino(object: _26.PageResponseAmino): _26.PageResponse;
                    toAmino(message: _26.PageResponse): _26.PageResponseAmino;
                    fromAminoMsg(object: _26.PageResponseAminoMsg): _26.PageResponse;
                    toAminoMsg(message: _26.PageResponse): _26.PageResponseAminoMsg;
                    fromProtoMsg(message: _26.PageResponseProtoMsg): _26.PageResponse;
                    toProto(message: _26.PageResponse): Uint8Array;
                    toProtoMsg(message: _26.PageResponse): _26.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _27.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _27.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_27.ListAllInterfacesRequest>): _27.ListAllInterfacesRequest;
                    fromAmino(_: _27.ListAllInterfacesRequestAmino): _27.ListAllInterfacesRequest;
                    toAmino(_: _27.ListAllInterfacesRequest): _27.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _27.ListAllInterfacesRequestAminoMsg): _27.ListAllInterfacesRequest;
                    toAminoMsg(message: _27.ListAllInterfacesRequest): _27.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _27.ListAllInterfacesRequestProtoMsg): _27.ListAllInterfacesRequest;
                    toProto(message: _27.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _27.ListAllInterfacesRequest): _27.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _27.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_27.ListAllInterfacesResponse>): _27.ListAllInterfacesResponse;
                    fromAmino(object: _27.ListAllInterfacesResponseAmino): _27.ListAllInterfacesResponse;
                    toAmino(message: _27.ListAllInterfacesResponse): _27.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _27.ListAllInterfacesResponseAminoMsg): _27.ListAllInterfacesResponse;
                    toAminoMsg(message: _27.ListAllInterfacesResponse): _27.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _27.ListAllInterfacesResponseProtoMsg): _27.ListAllInterfacesResponse;
                    toProto(message: _27.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _27.ListAllInterfacesResponse): _27.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _27.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.ListImplementationsRequest;
                    fromPartial(object: Partial<_27.ListImplementationsRequest>): _27.ListImplementationsRequest;
                    fromAmino(object: _27.ListImplementationsRequestAmino): _27.ListImplementationsRequest;
                    toAmino(message: _27.ListImplementationsRequest): _27.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _27.ListImplementationsRequestAminoMsg): _27.ListImplementationsRequest;
                    toAminoMsg(message: _27.ListImplementationsRequest): _27.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _27.ListImplementationsRequestProtoMsg): _27.ListImplementationsRequest;
                    toProto(message: _27.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _27.ListImplementationsRequest): _27.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _27.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.ListImplementationsResponse;
                    fromPartial(object: Partial<_27.ListImplementationsResponse>): _27.ListImplementationsResponse;
                    fromAmino(object: _27.ListImplementationsResponseAmino): _27.ListImplementationsResponse;
                    toAmino(message: _27.ListImplementationsResponse): _27.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _27.ListImplementationsResponseAminoMsg): _27.ListImplementationsResponse;
                    toAminoMsg(message: _27.ListImplementationsResponse): _27.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _27.ListImplementationsResponseProtoMsg): _27.ListImplementationsResponse;
                    toProto(message: _27.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _27.ListImplementationsResponse): _27.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _28.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.AppDescriptor;
                    fromPartial(object: Partial<_28.AppDescriptor>): _28.AppDescriptor;
                    fromAmino(object: _28.AppDescriptorAmino): _28.AppDescriptor;
                    toAmino(message: _28.AppDescriptor): _28.AppDescriptorAmino;
                    fromAminoMsg(object: _28.AppDescriptorAminoMsg): _28.AppDescriptor;
                    toAminoMsg(message: _28.AppDescriptor): _28.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _28.AppDescriptorProtoMsg): _28.AppDescriptor;
                    toProto(message: _28.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _28.AppDescriptor): _28.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _28.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.TxDescriptor;
                    fromPartial(object: Partial<_28.TxDescriptor>): _28.TxDescriptor;
                    fromAmino(object: _28.TxDescriptorAmino): _28.TxDescriptor;
                    toAmino(message: _28.TxDescriptor): _28.TxDescriptorAmino;
                    fromAminoMsg(object: _28.TxDescriptorAminoMsg): _28.TxDescriptor;
                    toAminoMsg(message: _28.TxDescriptor): _28.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _28.TxDescriptorProtoMsg): _28.TxDescriptor;
                    toProto(message: _28.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _28.TxDescriptor): _28.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _28.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.AuthnDescriptor;
                    fromPartial(object: Partial<_28.AuthnDescriptor>): _28.AuthnDescriptor;
                    fromAmino(object: _28.AuthnDescriptorAmino): _28.AuthnDescriptor;
                    toAmino(message: _28.AuthnDescriptor): _28.AuthnDescriptorAmino;
                    fromAminoMsg(object: _28.AuthnDescriptorAminoMsg): _28.AuthnDescriptor;
                    toAminoMsg(message: _28.AuthnDescriptor): _28.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _28.AuthnDescriptorProtoMsg): _28.AuthnDescriptor;
                    toProto(message: _28.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _28.AuthnDescriptor): _28.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _28.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.SigningModeDescriptor;
                    fromPartial(object: Partial<_28.SigningModeDescriptor>): _28.SigningModeDescriptor;
                    fromAmino(object: _28.SigningModeDescriptorAmino): _28.SigningModeDescriptor;
                    toAmino(message: _28.SigningModeDescriptor): _28.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _28.SigningModeDescriptorAminoMsg): _28.SigningModeDescriptor;
                    toAminoMsg(message: _28.SigningModeDescriptor): _28.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _28.SigningModeDescriptorProtoMsg): _28.SigningModeDescriptor;
                    toProto(message: _28.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _28.SigningModeDescriptor): _28.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _28.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.ChainDescriptor;
                    fromPartial(object: Partial<_28.ChainDescriptor>): _28.ChainDescriptor;
                    fromAmino(object: _28.ChainDescriptorAmino): _28.ChainDescriptor;
                    toAmino(message: _28.ChainDescriptor): _28.ChainDescriptorAmino;
                    fromAminoMsg(object: _28.ChainDescriptorAminoMsg): _28.ChainDescriptor;
                    toAminoMsg(message: _28.ChainDescriptor): _28.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _28.ChainDescriptorProtoMsg): _28.ChainDescriptor;
                    toProto(message: _28.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _28.ChainDescriptor): _28.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _28.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.CodecDescriptor;
                    fromPartial(object: Partial<_28.CodecDescriptor>): _28.CodecDescriptor;
                    fromAmino(object: _28.CodecDescriptorAmino): _28.CodecDescriptor;
                    toAmino(message: _28.CodecDescriptor): _28.CodecDescriptorAmino;
                    fromAminoMsg(object: _28.CodecDescriptorAminoMsg): _28.CodecDescriptor;
                    toAminoMsg(message: _28.CodecDescriptor): _28.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _28.CodecDescriptorProtoMsg): _28.CodecDescriptor;
                    toProto(message: _28.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _28.CodecDescriptor): _28.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _28.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.InterfaceDescriptor;
                    fromPartial(object: Partial<_28.InterfaceDescriptor>): _28.InterfaceDescriptor;
                    fromAmino(object: _28.InterfaceDescriptorAmino): _28.InterfaceDescriptor;
                    toAmino(message: _28.InterfaceDescriptor): _28.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _28.InterfaceDescriptorAminoMsg): _28.InterfaceDescriptor;
                    toAminoMsg(message: _28.InterfaceDescriptor): _28.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _28.InterfaceDescriptorProtoMsg): _28.InterfaceDescriptor;
                    toProto(message: _28.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _28.InterfaceDescriptor): _28.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _28.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_28.InterfaceImplementerDescriptor>): _28.InterfaceImplementerDescriptor;
                    fromAmino(object: _28.InterfaceImplementerDescriptorAmino): _28.InterfaceImplementerDescriptor;
                    toAmino(message: _28.InterfaceImplementerDescriptor): _28.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _28.InterfaceImplementerDescriptorAminoMsg): _28.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _28.InterfaceImplementerDescriptor): _28.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _28.InterfaceImplementerDescriptorProtoMsg): _28.InterfaceImplementerDescriptor;
                    toProto(message: _28.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _28.InterfaceImplementerDescriptor): _28.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _28.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_28.InterfaceAcceptingMessageDescriptor>): _28.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _28.InterfaceAcceptingMessageDescriptorAmino): _28.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _28.InterfaceAcceptingMessageDescriptor): _28.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _28.InterfaceAcceptingMessageDescriptorAminoMsg): _28.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _28.InterfaceAcceptingMessageDescriptor): _28.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _28.InterfaceAcceptingMessageDescriptorProtoMsg): _28.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _28.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _28.InterfaceAcceptingMessageDescriptor): _28.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _28.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.ConfigurationDescriptor;
                    fromPartial(object: Partial<_28.ConfigurationDescriptor>): _28.ConfigurationDescriptor;
                    fromAmino(object: _28.ConfigurationDescriptorAmino): _28.ConfigurationDescriptor;
                    toAmino(message: _28.ConfigurationDescriptor): _28.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _28.ConfigurationDescriptorAminoMsg): _28.ConfigurationDescriptor;
                    toAminoMsg(message: _28.ConfigurationDescriptor): _28.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _28.ConfigurationDescriptorProtoMsg): _28.ConfigurationDescriptor;
                    toProto(message: _28.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _28.ConfigurationDescriptor): _28.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _28.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.MsgDescriptor;
                    fromPartial(object: Partial<_28.MsgDescriptor>): _28.MsgDescriptor;
                    fromAmino(object: _28.MsgDescriptorAmino): _28.MsgDescriptor;
                    toAmino(message: _28.MsgDescriptor): _28.MsgDescriptorAmino;
                    fromAminoMsg(object: _28.MsgDescriptorAminoMsg): _28.MsgDescriptor;
                    toAminoMsg(message: _28.MsgDescriptor): _28.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _28.MsgDescriptorProtoMsg): _28.MsgDescriptor;
                    toProto(message: _28.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _28.MsgDescriptor): _28.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _28.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _28.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_28.GetAuthnDescriptorRequest>): _28.GetAuthnDescriptorRequest;
                    fromAmino(_: _28.GetAuthnDescriptorRequestAmino): _28.GetAuthnDescriptorRequest;
                    toAmino(_: _28.GetAuthnDescriptorRequest): _28.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _28.GetAuthnDescriptorRequestAminoMsg): _28.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _28.GetAuthnDescriptorRequest): _28.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _28.GetAuthnDescriptorRequestProtoMsg): _28.GetAuthnDescriptorRequest;
                    toProto(message: _28.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _28.GetAuthnDescriptorRequest): _28.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _28.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_28.GetAuthnDescriptorResponse>): _28.GetAuthnDescriptorResponse;
                    fromAmino(object: _28.GetAuthnDescriptorResponseAmino): _28.GetAuthnDescriptorResponse;
                    toAmino(message: _28.GetAuthnDescriptorResponse): _28.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _28.GetAuthnDescriptorResponseAminoMsg): _28.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _28.GetAuthnDescriptorResponse): _28.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _28.GetAuthnDescriptorResponseProtoMsg): _28.GetAuthnDescriptorResponse;
                    toProto(message: _28.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _28.GetAuthnDescriptorResponse): _28.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _28.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _28.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_28.GetChainDescriptorRequest>): _28.GetChainDescriptorRequest;
                    fromAmino(_: _28.GetChainDescriptorRequestAmino): _28.GetChainDescriptorRequest;
                    toAmino(_: _28.GetChainDescriptorRequest): _28.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _28.GetChainDescriptorRequestAminoMsg): _28.GetChainDescriptorRequest;
                    toAminoMsg(message: _28.GetChainDescriptorRequest): _28.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _28.GetChainDescriptorRequestProtoMsg): _28.GetChainDescriptorRequest;
                    toProto(message: _28.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _28.GetChainDescriptorRequest): _28.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _28.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_28.GetChainDescriptorResponse>): _28.GetChainDescriptorResponse;
                    fromAmino(object: _28.GetChainDescriptorResponseAmino): _28.GetChainDescriptorResponse;
                    toAmino(message: _28.GetChainDescriptorResponse): _28.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _28.GetChainDescriptorResponseAminoMsg): _28.GetChainDescriptorResponse;
                    toAminoMsg(message: _28.GetChainDescriptorResponse): _28.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _28.GetChainDescriptorResponseProtoMsg): _28.GetChainDescriptorResponse;
                    toProto(message: _28.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _28.GetChainDescriptorResponse): _28.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _28.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _28.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_28.GetCodecDescriptorRequest>): _28.GetCodecDescriptorRequest;
                    fromAmino(_: _28.GetCodecDescriptorRequestAmino): _28.GetCodecDescriptorRequest;
                    toAmino(_: _28.GetCodecDescriptorRequest): _28.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _28.GetCodecDescriptorRequestAminoMsg): _28.GetCodecDescriptorRequest;
                    toAminoMsg(message: _28.GetCodecDescriptorRequest): _28.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _28.GetCodecDescriptorRequestProtoMsg): _28.GetCodecDescriptorRequest;
                    toProto(message: _28.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _28.GetCodecDescriptorRequest): _28.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _28.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_28.GetCodecDescriptorResponse>): _28.GetCodecDescriptorResponse;
                    fromAmino(object: _28.GetCodecDescriptorResponseAmino): _28.GetCodecDescriptorResponse;
                    toAmino(message: _28.GetCodecDescriptorResponse): _28.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _28.GetCodecDescriptorResponseAminoMsg): _28.GetCodecDescriptorResponse;
                    toAminoMsg(message: _28.GetCodecDescriptorResponse): _28.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _28.GetCodecDescriptorResponseProtoMsg): _28.GetCodecDescriptorResponse;
                    toProto(message: _28.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _28.GetCodecDescriptorResponse): _28.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _28.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _28.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_28.GetConfigurationDescriptorRequest>): _28.GetConfigurationDescriptorRequest;
                    fromAmino(_: _28.GetConfigurationDescriptorRequestAmino): _28.GetConfigurationDescriptorRequest;
                    toAmino(_: _28.GetConfigurationDescriptorRequest): _28.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _28.GetConfigurationDescriptorRequestAminoMsg): _28.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _28.GetConfigurationDescriptorRequest): _28.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _28.GetConfigurationDescriptorRequestProtoMsg): _28.GetConfigurationDescriptorRequest;
                    toProto(message: _28.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _28.GetConfigurationDescriptorRequest): _28.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _28.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_28.GetConfigurationDescriptorResponse>): _28.GetConfigurationDescriptorResponse;
                    fromAmino(object: _28.GetConfigurationDescriptorResponseAmino): _28.GetConfigurationDescriptorResponse;
                    toAmino(message: _28.GetConfigurationDescriptorResponse): _28.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _28.GetConfigurationDescriptorResponseAminoMsg): _28.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _28.GetConfigurationDescriptorResponse): _28.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _28.GetConfigurationDescriptorResponseProtoMsg): _28.GetConfigurationDescriptorResponse;
                    toProto(message: _28.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _28.GetConfigurationDescriptorResponse): _28.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _28.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _28.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_28.GetQueryServicesDescriptorRequest>): _28.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _28.GetQueryServicesDescriptorRequestAmino): _28.GetQueryServicesDescriptorRequest;
                    toAmino(_: _28.GetQueryServicesDescriptorRequest): _28.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _28.GetQueryServicesDescriptorRequestAminoMsg): _28.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _28.GetQueryServicesDescriptorRequest): _28.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _28.GetQueryServicesDescriptorRequestProtoMsg): _28.GetQueryServicesDescriptorRequest;
                    toProto(message: _28.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _28.GetQueryServicesDescriptorRequest): _28.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _28.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_28.GetQueryServicesDescriptorResponse>): _28.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _28.GetQueryServicesDescriptorResponseAmino): _28.GetQueryServicesDescriptorResponse;
                    toAmino(message: _28.GetQueryServicesDescriptorResponse): _28.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _28.GetQueryServicesDescriptorResponseAminoMsg): _28.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _28.GetQueryServicesDescriptorResponse): _28.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _28.GetQueryServicesDescriptorResponseProtoMsg): _28.GetQueryServicesDescriptorResponse;
                    toProto(message: _28.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _28.GetQueryServicesDescriptorResponse): _28.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _28.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _28.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_28.GetTxDescriptorRequest>): _28.GetTxDescriptorRequest;
                    fromAmino(_: _28.GetTxDescriptorRequestAmino): _28.GetTxDescriptorRequest;
                    toAmino(_: _28.GetTxDescriptorRequest): _28.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _28.GetTxDescriptorRequestAminoMsg): _28.GetTxDescriptorRequest;
                    toAminoMsg(message: _28.GetTxDescriptorRequest): _28.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _28.GetTxDescriptorRequestProtoMsg): _28.GetTxDescriptorRequest;
                    toProto(message: _28.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _28.GetTxDescriptorRequest): _28.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _28.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_28.GetTxDescriptorResponse>): _28.GetTxDescriptorResponse;
                    fromAmino(object: _28.GetTxDescriptorResponseAmino): _28.GetTxDescriptorResponse;
                    toAmino(message: _28.GetTxDescriptorResponse): _28.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _28.GetTxDescriptorResponseAminoMsg): _28.GetTxDescriptorResponse;
                    toAminoMsg(message: _28.GetTxDescriptorResponse): _28.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _28.GetTxDescriptorResponseProtoMsg): _28.GetTxDescriptorResponse;
                    toProto(message: _28.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _28.GetTxDescriptorResponse): _28.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _28.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.QueryServicesDescriptor;
                    fromPartial(object: Partial<_28.QueryServicesDescriptor>): _28.QueryServicesDescriptor;
                    fromAmino(object: _28.QueryServicesDescriptorAmino): _28.QueryServicesDescriptor;
                    toAmino(message: _28.QueryServicesDescriptor): _28.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _28.QueryServicesDescriptorAminoMsg): _28.QueryServicesDescriptor;
                    toAminoMsg(message: _28.QueryServicesDescriptor): _28.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _28.QueryServicesDescriptorProtoMsg): _28.QueryServicesDescriptor;
                    toProto(message: _28.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _28.QueryServicesDescriptor): _28.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _28.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.QueryServiceDescriptor;
                    fromPartial(object: Partial<_28.QueryServiceDescriptor>): _28.QueryServiceDescriptor;
                    fromAmino(object: _28.QueryServiceDescriptorAmino): _28.QueryServiceDescriptor;
                    toAmino(message: _28.QueryServiceDescriptor): _28.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _28.QueryServiceDescriptorAminoMsg): _28.QueryServiceDescriptor;
                    toAminoMsg(message: _28.QueryServiceDescriptor): _28.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _28.QueryServiceDescriptorProtoMsg): _28.QueryServiceDescriptor;
                    toProto(message: _28.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _28.QueryServiceDescriptor): _28.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _28.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.QueryMethodDescriptor;
                    fromPartial(object: Partial<_28.QueryMethodDescriptor>): _28.QueryMethodDescriptor;
                    fromAmino(object: _28.QueryMethodDescriptorAmino): _28.QueryMethodDescriptor;
                    toAmino(message: _28.QueryMethodDescriptor): _28.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _28.QueryMethodDescriptorAminoMsg): _28.QueryMethodDescriptor;
                    toAminoMsg(message: _28.QueryMethodDescriptor): _28.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _28.QueryMethodDescriptorProtoMsg): _28.QueryMethodDescriptor;
                    toProto(message: _28.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _28.QueryMethodDescriptor): _28.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _29.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.Snapshot;
                    fromPartial(object: Partial<_29.Snapshot>): _29.Snapshot;
                    fromAmino(object: _29.SnapshotAmino): _29.Snapshot;
                    toAmino(message: _29.Snapshot): _29.SnapshotAmino;
                    fromAminoMsg(object: _29.SnapshotAminoMsg): _29.Snapshot;
                    toAminoMsg(message: _29.Snapshot): _29.SnapshotAminoMsg;
                    fromProtoMsg(message: _29.SnapshotProtoMsg): _29.Snapshot;
                    toProto(message: _29.Snapshot): Uint8Array;
                    toProtoMsg(message: _29.Snapshot): _29.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _29.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.Metadata;
                    fromPartial(object: Partial<_29.Metadata>): _29.Metadata;
                    fromAmino(object: _29.MetadataAmino): _29.Metadata;
                    toAmino(message: _29.Metadata): _29.MetadataAmino;
                    fromAminoMsg(object: _29.MetadataAminoMsg): _29.Metadata;
                    toAminoMsg(message: _29.Metadata): _29.MetadataAminoMsg;
                    fromProtoMsg(message: _29.MetadataProtoMsg): _29.Metadata;
                    toProto(message: _29.Metadata): Uint8Array;
                    toProtoMsg(message: _29.Metadata): _29.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _29.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.SnapshotItem;
                    fromPartial(object: Partial<_29.SnapshotItem>): _29.SnapshotItem;
                    fromAmino(object: _29.SnapshotItemAmino): _29.SnapshotItem;
                    toAmino(message: _29.SnapshotItem): _29.SnapshotItemAmino;
                    fromAminoMsg(object: _29.SnapshotItemAminoMsg): _29.SnapshotItem;
                    toAminoMsg(message: _29.SnapshotItem): _29.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _29.SnapshotItemProtoMsg): _29.SnapshotItem;
                    toProto(message: _29.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _29.SnapshotItem): _29.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _29.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.SnapshotStoreItem;
                    fromPartial(object: Partial<_29.SnapshotStoreItem>): _29.SnapshotStoreItem;
                    fromAmino(object: _29.SnapshotStoreItemAmino): _29.SnapshotStoreItem;
                    toAmino(message: _29.SnapshotStoreItem): _29.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _29.SnapshotStoreItemAminoMsg): _29.SnapshotStoreItem;
                    toAminoMsg(message: _29.SnapshotStoreItem): _29.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _29.SnapshotStoreItemProtoMsg): _29.SnapshotStoreItem;
                    toProto(message: _29.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _29.SnapshotStoreItem): _29.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _29.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.SnapshotIAVLItem;
                    fromPartial(object: Partial<_29.SnapshotIAVLItem>): _29.SnapshotIAVLItem;
                    fromAmino(object: _29.SnapshotIAVLItemAmino): _29.SnapshotIAVLItem;
                    toAmino(message: _29.SnapshotIAVLItem): _29.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _29.SnapshotIAVLItemAminoMsg): _29.SnapshotIAVLItem;
                    toAminoMsg(message: _29.SnapshotIAVLItem): _29.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _29.SnapshotIAVLItemProtoMsg): _29.SnapshotIAVLItem;
                    toProto(message: _29.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _29.SnapshotIAVLItem): _29.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _29.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_29.SnapshotExtensionMeta>): _29.SnapshotExtensionMeta;
                    fromAmino(object: _29.SnapshotExtensionMetaAmino): _29.SnapshotExtensionMeta;
                    toAmino(message: _29.SnapshotExtensionMeta): _29.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _29.SnapshotExtensionMetaAminoMsg): _29.SnapshotExtensionMeta;
                    toAminoMsg(message: _29.SnapshotExtensionMeta): _29.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _29.SnapshotExtensionMetaProtoMsg): _29.SnapshotExtensionMeta;
                    toProto(message: _29.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _29.SnapshotExtensionMeta): _29.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _29.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_29.SnapshotExtensionPayload>): _29.SnapshotExtensionPayload;
                    fromAmino(object: _29.SnapshotExtensionPayloadAmino): _29.SnapshotExtensionPayload;
                    toAmino(message: _29.SnapshotExtensionPayload): _29.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _29.SnapshotExtensionPayloadAminoMsg): _29.SnapshotExtensionPayload;
                    toAminoMsg(message: _29.SnapshotExtensionPayload): _29.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _29.SnapshotExtensionPayloadProtoMsg): _29.SnapshotExtensionPayload;
                    toProto(message: _29.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _29.SnapshotExtensionPayload): _29.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _31.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.StoreKVPair;
                    fromPartial(object: Partial<_31.StoreKVPair>): _31.StoreKVPair;
                    fromAmino(object: _31.StoreKVPairAmino): _31.StoreKVPair;
                    toAmino(message: _31.StoreKVPair): _31.StoreKVPairAmino;
                    fromAminoMsg(object: _31.StoreKVPairAminoMsg): _31.StoreKVPair;
                    toAminoMsg(message: _31.StoreKVPair): _31.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _31.StoreKVPairProtoMsg): _31.StoreKVPair;
                    toProto(message: _31.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _31.StoreKVPair): _31.StoreKVPairProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _30.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.CommitInfo;
                    fromPartial(object: Partial<_30.CommitInfo>): _30.CommitInfo;
                    fromAmino(object: _30.CommitInfoAmino): _30.CommitInfo;
                    toAmino(message: _30.CommitInfo): _30.CommitInfoAmino;
                    fromAminoMsg(object: _30.CommitInfoAminoMsg): _30.CommitInfo;
                    toAminoMsg(message: _30.CommitInfo): _30.CommitInfoAminoMsg;
                    fromProtoMsg(message: _30.CommitInfoProtoMsg): _30.CommitInfo;
                    toProto(message: _30.CommitInfo): Uint8Array;
                    toProtoMsg(message: _30.CommitInfo): _30.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _30.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.StoreInfo;
                    fromPartial(object: Partial<_30.StoreInfo>): _30.StoreInfo;
                    fromAmino(object: _30.StoreInfoAmino): _30.StoreInfo;
                    toAmino(message: _30.StoreInfo): _30.StoreInfoAmino;
                    fromAminoMsg(object: _30.StoreInfoAminoMsg): _30.StoreInfo;
                    toAminoMsg(message: _30.StoreInfo): _30.StoreInfoAminoMsg;
                    fromProtoMsg(message: _30.StoreInfoProtoMsg): _30.StoreInfo;
                    toProto(message: _30.StoreInfo): Uint8Array;
                    toProtoMsg(message: _30.StoreInfo): _30.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _30.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.CommitID;
                    fromPartial(object: Partial<_30.CommitID>): _30.CommitID;
                    fromAmino(object: _30.CommitIDAmino): _30.CommitID;
                    toAmino(message: _30.CommitID): _30.CommitIDAmino;
                    fromAminoMsg(object: _30.CommitIDAminoMsg): _30.CommitID;
                    toAminoMsg(message: _30.CommitID): _30.CommitIDAminoMsg;
                    fromProtoMsg(message: _30.CommitIDProtoMsg): _30.CommitID;
                    toProto(message: _30.CommitID): Uint8Array;
                    toProtoMsg(message: _30.CommitID): _30.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _161.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _32.GetNodeInfoRequest): Promise<_32.GetNodeInfoResponse>;
                    getSyncing(request?: _32.GetSyncingRequest): Promise<_32.GetSyncingResponse>;
                    getLatestBlock(request?: _32.GetLatestBlockRequest): Promise<_32.GetLatestBlockResponse>;
                    getBlockByHeight(request: _32.GetBlockByHeightRequest): Promise<_32.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _32.GetLatestValidatorSetRequest): Promise<_32.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _32.GetValidatorSetByHeightRequest): Promise<_32.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _146.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _32.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_32.GetValidatorSetByHeightRequest>): _32.GetValidatorSetByHeightRequest;
                    fromAmino(object: _32.GetValidatorSetByHeightRequestAmino): _32.GetValidatorSetByHeightRequest;
                    toAmino(message: _32.GetValidatorSetByHeightRequest): _32.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _32.GetValidatorSetByHeightRequestAminoMsg): _32.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _32.GetValidatorSetByHeightRequest): _32.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _32.GetValidatorSetByHeightRequestProtoMsg): _32.GetValidatorSetByHeightRequest;
                    toProto(message: _32.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _32.GetValidatorSetByHeightRequest): _32.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _32.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_32.GetValidatorSetByHeightResponse>): _32.GetValidatorSetByHeightResponse;
                    fromAmino(object: _32.GetValidatorSetByHeightResponseAmino): _32.GetValidatorSetByHeightResponse;
                    toAmino(message: _32.GetValidatorSetByHeightResponse): _32.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _32.GetValidatorSetByHeightResponseAminoMsg): _32.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _32.GetValidatorSetByHeightResponse): _32.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _32.GetValidatorSetByHeightResponseProtoMsg): _32.GetValidatorSetByHeightResponse;
                    toProto(message: _32.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _32.GetValidatorSetByHeightResponse): _32.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _32.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_32.GetLatestValidatorSetRequest>): _32.GetLatestValidatorSetRequest;
                    fromAmino(object: _32.GetLatestValidatorSetRequestAmino): _32.GetLatestValidatorSetRequest;
                    toAmino(message: _32.GetLatestValidatorSetRequest): _32.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _32.GetLatestValidatorSetRequestAminoMsg): _32.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _32.GetLatestValidatorSetRequest): _32.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _32.GetLatestValidatorSetRequestProtoMsg): _32.GetLatestValidatorSetRequest;
                    toProto(message: _32.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _32.GetLatestValidatorSetRequest): _32.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _32.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_32.GetLatestValidatorSetResponse>): _32.GetLatestValidatorSetResponse;
                    fromAmino(object: _32.GetLatestValidatorSetResponseAmino): _32.GetLatestValidatorSetResponse;
                    toAmino(message: _32.GetLatestValidatorSetResponse): _32.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _32.GetLatestValidatorSetResponseAminoMsg): _32.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _32.GetLatestValidatorSetResponse): _32.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _32.GetLatestValidatorSetResponseProtoMsg): _32.GetLatestValidatorSetResponse;
                    toProto(message: _32.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _32.GetLatestValidatorSetResponse): _32.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _32.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.Validator;
                    fromPartial(object: Partial<_32.Validator>): _32.Validator;
                    fromAmino(object: _32.ValidatorAmino): _32.Validator;
                    toAmino(message: _32.Validator): _32.ValidatorAmino;
                    fromAminoMsg(object: _32.ValidatorAminoMsg): _32.Validator;
                    toAminoMsg(message: _32.Validator): _32.ValidatorAminoMsg;
                    fromProtoMsg(message: _32.ValidatorProtoMsg): _32.Validator;
                    toProto(message: _32.Validator): Uint8Array;
                    toProtoMsg(message: _32.Validator): _32.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _32.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_32.GetBlockByHeightRequest>): _32.GetBlockByHeightRequest;
                    fromAmino(object: _32.GetBlockByHeightRequestAmino): _32.GetBlockByHeightRequest;
                    toAmino(message: _32.GetBlockByHeightRequest): _32.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _32.GetBlockByHeightRequestAminoMsg): _32.GetBlockByHeightRequest;
                    toAminoMsg(message: _32.GetBlockByHeightRequest): _32.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _32.GetBlockByHeightRequestProtoMsg): _32.GetBlockByHeightRequest;
                    toProto(message: _32.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _32.GetBlockByHeightRequest): _32.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _32.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_32.GetBlockByHeightResponse>): _32.GetBlockByHeightResponse;
                    fromAmino(object: _32.GetBlockByHeightResponseAmino): _32.GetBlockByHeightResponse;
                    toAmino(message: _32.GetBlockByHeightResponse): _32.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _32.GetBlockByHeightResponseAminoMsg): _32.GetBlockByHeightResponse;
                    toAminoMsg(message: _32.GetBlockByHeightResponse): _32.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _32.GetBlockByHeightResponseProtoMsg): _32.GetBlockByHeightResponse;
                    toProto(message: _32.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _32.GetBlockByHeightResponse): _32.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _32.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _32.GetLatestBlockRequest;
                    fromPartial(_: Partial<_32.GetLatestBlockRequest>): _32.GetLatestBlockRequest;
                    fromAmino(_: _32.GetLatestBlockRequestAmino): _32.GetLatestBlockRequest;
                    toAmino(_: _32.GetLatestBlockRequest): _32.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _32.GetLatestBlockRequestAminoMsg): _32.GetLatestBlockRequest;
                    toAminoMsg(message: _32.GetLatestBlockRequest): _32.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _32.GetLatestBlockRequestProtoMsg): _32.GetLatestBlockRequest;
                    toProto(message: _32.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _32.GetLatestBlockRequest): _32.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _32.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.GetLatestBlockResponse;
                    fromPartial(object: Partial<_32.GetLatestBlockResponse>): _32.GetLatestBlockResponse;
                    fromAmino(object: _32.GetLatestBlockResponseAmino): _32.GetLatestBlockResponse;
                    toAmino(message: _32.GetLatestBlockResponse): _32.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _32.GetLatestBlockResponseAminoMsg): _32.GetLatestBlockResponse;
                    toAminoMsg(message: _32.GetLatestBlockResponse): _32.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _32.GetLatestBlockResponseProtoMsg): _32.GetLatestBlockResponse;
                    toProto(message: _32.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _32.GetLatestBlockResponse): _32.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _32.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _32.GetSyncingRequest;
                    fromPartial(_: Partial<_32.GetSyncingRequest>): _32.GetSyncingRequest;
                    fromAmino(_: _32.GetSyncingRequestAmino): _32.GetSyncingRequest;
                    toAmino(_: _32.GetSyncingRequest): _32.GetSyncingRequestAmino;
                    fromAminoMsg(object: _32.GetSyncingRequestAminoMsg): _32.GetSyncingRequest;
                    toAminoMsg(message: _32.GetSyncingRequest): _32.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _32.GetSyncingRequestProtoMsg): _32.GetSyncingRequest;
                    toProto(message: _32.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _32.GetSyncingRequest): _32.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _32.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.GetSyncingResponse;
                    fromPartial(object: Partial<_32.GetSyncingResponse>): _32.GetSyncingResponse;
                    fromAmino(object: _32.GetSyncingResponseAmino): _32.GetSyncingResponse;
                    toAmino(message: _32.GetSyncingResponse): _32.GetSyncingResponseAmino;
                    fromAminoMsg(object: _32.GetSyncingResponseAminoMsg): _32.GetSyncingResponse;
                    toAminoMsg(message: _32.GetSyncingResponse): _32.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _32.GetSyncingResponseProtoMsg): _32.GetSyncingResponse;
                    toProto(message: _32.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _32.GetSyncingResponse): _32.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _32.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _32.GetNodeInfoRequest;
                    fromPartial(_: Partial<_32.GetNodeInfoRequest>): _32.GetNodeInfoRequest;
                    fromAmino(_: _32.GetNodeInfoRequestAmino): _32.GetNodeInfoRequest;
                    toAmino(_: _32.GetNodeInfoRequest): _32.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _32.GetNodeInfoRequestAminoMsg): _32.GetNodeInfoRequest;
                    toAminoMsg(message: _32.GetNodeInfoRequest): _32.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _32.GetNodeInfoRequestProtoMsg): _32.GetNodeInfoRequest;
                    toProto(message: _32.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _32.GetNodeInfoRequest): _32.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _32.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.GetNodeInfoResponse;
                    fromPartial(object: Partial<_32.GetNodeInfoResponse>): _32.GetNodeInfoResponse;
                    fromAmino(object: _32.GetNodeInfoResponseAmino): _32.GetNodeInfoResponse;
                    toAmino(message: _32.GetNodeInfoResponse): _32.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _32.GetNodeInfoResponseAminoMsg): _32.GetNodeInfoResponse;
                    toAminoMsg(message: _32.GetNodeInfoResponse): _32.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _32.GetNodeInfoResponseProtoMsg): _32.GetNodeInfoResponse;
                    toProto(message: _32.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _32.GetNodeInfoResponse): _32.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _32.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.VersionInfo;
                    fromPartial(object: Partial<_32.VersionInfo>): _32.VersionInfo;
                    fromAmino(object: _32.VersionInfoAmino): _32.VersionInfo;
                    toAmino(message: _32.VersionInfo): _32.VersionInfoAmino;
                    fromAminoMsg(object: _32.VersionInfoAminoMsg): _32.VersionInfo;
                    toAminoMsg(message: _32.VersionInfo): _32.VersionInfoAminoMsg;
                    fromProtoMsg(message: _32.VersionInfoProtoMsg): _32.VersionInfo;
                    toProto(message: _32.VersionInfo): Uint8Array;
                    toProtoMsg(message: _32.VersionInfo): _32.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _32.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.Module;
                    fromPartial(object: Partial<_32.Module>): _32.Module;
                    fromAmino(object: _32.ModuleAmino): _32.Module;
                    toAmino(message: _32.Module): _32.ModuleAmino;
                    fromAminoMsg(object: _32.ModuleAminoMsg): _32.Module;
                    toAminoMsg(message: _32.Module): _32.ModuleAminoMsg;
                    fromProtoMsg(message: _32.ModuleProtoMsg): _32.Module;
                    toProto(message: _32.Module): Uint8Array;
                    toProtoMsg(message: _32.Module): _32.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _33.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Coin;
                fromPartial(object: Partial<_33.Coin>): _33.Coin;
                fromAmino(object: _33.CoinAmino): _33.Coin;
                toAmino(message: _33.Coin): _33.CoinAmino;
                fromAminoMsg(object: _33.CoinAminoMsg): _33.Coin;
                toAminoMsg(message: _33.Coin): _33.CoinAminoMsg;
                fromProtoMsg(message: _33.CoinProtoMsg): _33.Coin;
                toProto(message: _33.Coin): Uint8Array;
                toProtoMsg(message: _33.Coin): _33.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _33.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.DecCoin;
                fromPartial(object: Partial<_33.DecCoin>): _33.DecCoin;
                fromAmino(object: _33.DecCoinAmino): _33.DecCoin;
                toAmino(message: _33.DecCoin): _33.DecCoinAmino;
                fromAminoMsg(object: _33.DecCoinAminoMsg): _33.DecCoin;
                toAminoMsg(message: _33.DecCoin): _33.DecCoinAminoMsg;
                fromProtoMsg(message: _33.DecCoinProtoMsg): _33.DecCoin;
                toProto(message: _33.DecCoin): Uint8Array;
                toProtoMsg(message: _33.DecCoin): _33.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _33.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.IntProto;
                fromPartial(object: Partial<_33.IntProto>): _33.IntProto;
                fromAmino(object: _33.IntProtoAmino): _33.IntProto;
                toAmino(message: _33.IntProto): _33.IntProtoAmino;
                fromAminoMsg(object: _33.IntProtoAminoMsg): _33.IntProto;
                toAminoMsg(message: _33.IntProto): _33.IntProtoAminoMsg;
                fromProtoMsg(message: _33.IntProtoProtoMsg): _33.IntProto;
                toProto(message: _33.IntProto): Uint8Array;
                toProtoMsg(message: _33.IntProto): _33.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _33.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.DecProto;
                fromPartial(object: Partial<_33.DecProto>): _33.DecProto;
                fromAmino(object: _33.DecProtoAmino): _33.DecProto;
                toAmino(message: _33.DecProto): _33.DecProtoAmino;
                fromAminoMsg(object: _33.DecProtoAminoMsg): _33.DecProto;
                toAminoMsg(message: _33.DecProto): _33.DecProtoAminoMsg;
                fromProtoMsg(message: _33.DecProtoProtoMsg): _33.DecProto;
                toProto(message: _33.DecProto): Uint8Array;
                toProtoMsg(message: _33.DecProto): _33.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _35.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.GenesisOwners;
                fromPartial(object: Partial<_35.GenesisOwners>): _35.GenesisOwners;
                fromAmino(object: _35.GenesisOwnersAmino): _35.GenesisOwners;
                toAmino(message: _35.GenesisOwners): _35.GenesisOwnersAmino;
                fromAminoMsg(object: _35.GenesisOwnersAminoMsg): _35.GenesisOwners;
                toAminoMsg(message: _35.GenesisOwners): _35.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _35.GenesisOwnersProtoMsg): _35.GenesisOwners;
                toProto(message: _35.GenesisOwners): Uint8Array;
                toProtoMsg(message: _35.GenesisOwners): _35.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _34.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.Capability;
                fromPartial(object: Partial<_34.Capability>): _34.Capability;
                fromAmino(object: _34.CapabilityAmino): _34.Capability;
                toAmino(message: _34.Capability): _34.CapabilityAmino;
                fromAminoMsg(object: _34.CapabilityAminoMsg): _34.Capability;
                toAminoMsg(message: _34.Capability): _34.CapabilityAminoMsg;
                fromProtoMsg(message: _34.CapabilityProtoMsg): _34.Capability;
                toProto(message: _34.Capability): Uint8Array;
                toProtoMsg(message: _34.Capability): _34.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _34.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.Owner;
                fromPartial(object: Partial<_34.Owner>): _34.Owner;
                fromAmino(object: _34.OwnerAmino): _34.Owner;
                toAmino(message: _34.Owner): _34.OwnerAmino;
                fromAminoMsg(object: _34.OwnerAminoMsg): _34.Owner;
                toAminoMsg(message: _34.Owner): _34.OwnerAminoMsg;
                fromProtoMsg(message: _34.OwnerProtoMsg): _34.Owner;
                toProto(message: _34.Owner): Uint8Array;
                toProtoMsg(message: _34.Owner): _34.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _34.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.CapabilityOwners;
                fromPartial(object: Partial<_34.CapabilityOwners>): _34.CapabilityOwners;
                fromAmino(object: _34.CapabilityOwnersAmino): _34.CapabilityOwners;
                toAmino(message: _34.CapabilityOwners): _34.CapabilityOwnersAmino;
                fromAminoMsg(object: _34.CapabilityOwnersAminoMsg): _34.CapabilityOwners;
                toAminoMsg(message: _34.CapabilityOwners): _34.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _34.CapabilityOwnersProtoMsg): _34.CapabilityOwners;
                toProto(message: _34.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _34.CapabilityOwners): _34.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _174.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _37.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _37.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _37.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _37.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _37.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _37.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _37.MsgVerifyInvariant) => _37.MsgVerifyInvariantAmino;
                    fromAmino: (object: _37.MsgVerifyInvariantAmino) => _37.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _37.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.MsgVerifyInvariant;
                fromPartial(object: Partial<_37.MsgVerifyInvariant>): _37.MsgVerifyInvariant;
                fromAmino(object: _37.MsgVerifyInvariantAmino): _37.MsgVerifyInvariant;
                toAmino(message: _37.MsgVerifyInvariant): _37.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _37.MsgVerifyInvariantAminoMsg): _37.MsgVerifyInvariant;
                toAminoMsg(message: _37.MsgVerifyInvariant): _37.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _37.MsgVerifyInvariantProtoMsg): _37.MsgVerifyInvariant;
                toProto(message: _37.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _37.MsgVerifyInvariant): _37.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _37.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _37.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_37.MsgVerifyInvariantResponse>): _37.MsgVerifyInvariantResponse;
                fromAmino(_: _37.MsgVerifyInvariantResponseAmino): _37.MsgVerifyInvariantResponse;
                toAmino(_: _37.MsgVerifyInvariantResponse): _37.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _37.MsgVerifyInvariantResponseAminoMsg): _37.MsgVerifyInvariantResponse;
                toAminoMsg(message: _37.MsgVerifyInvariantResponse): _37.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _37.MsgVerifyInvariantResponseProtoMsg): _37.MsgVerifyInvariantResponse;
                toProto(message: _37.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _37.MsgVerifyInvariantResponse): _37.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _36.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.GenesisState;
                fromPartial(object: Partial<_36.GenesisState>): _36.GenesisState;
                fromAmino(object: _36.GenesisStateAmino): _36.GenesisState;
                toAmino(message: _36.GenesisState): _36.GenesisStateAmino;
                fromAminoMsg(object: _36.GenesisStateAminoMsg): _36.GenesisState;
                toAminoMsg(message: _36.GenesisState): _36.GenesisStateAminoMsg;
                fromProtoMsg(message: _36.GenesisStateProtoMsg): _36.GenesisState;
                toProto(message: _36.GenesisState): Uint8Array;
                toProtoMsg(message: _36.GenesisState): _36.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
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
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _39.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.LegacyAminoPubKey;
                fromPartial(object: Partial<_39.LegacyAminoPubKey>): _39.LegacyAminoPubKey;
                fromAmino(object: _39.LegacyAminoPubKeyAmino): _39.LegacyAminoPubKey;
                toAmino(message: _39.LegacyAminoPubKey): _39.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _39.LegacyAminoPubKeyAminoMsg): _39.LegacyAminoPubKey;
                toAminoMsg(message: _39.LegacyAminoPubKey): _39.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _39.LegacyAminoPubKeyProtoMsg): _39.LegacyAminoPubKey;
                toProto(message: _39.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _39.LegacyAminoPubKey): _39.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _40.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.PubKey;
                fromPartial(object: Partial<_40.PubKey>): _40.PubKey;
                fromAmino(object: _40.PubKeyAmino): _40.PubKey;
                toAmino(message: _40.PubKey): _40.PubKeyAmino;
                fromAminoMsg(object: _40.PubKeyAminoMsg): _40.PubKey;
                toAminoMsg(message: _40.PubKey): _40.PubKeyAminoMsg;
                fromProtoMsg(message: _40.PubKeyProtoMsg): _40.PubKey;
                toProto(message: _40.PubKey): Uint8Array;
                toProtoMsg(message: _40.PubKey): _40.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _40.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.PrivKey;
                fromPartial(object: Partial<_40.PrivKey>): _40.PrivKey;
                fromAmino(object: _40.PrivKeyAmino): _40.PrivKey;
                toAmino(message: _40.PrivKey): _40.PrivKeyAmino;
                fromAminoMsg(object: _40.PrivKeyAminoMsg): _40.PrivKey;
                toAminoMsg(message: _40.PrivKey): _40.PrivKeyAminoMsg;
                fromProtoMsg(message: _40.PrivKeyProtoMsg): _40.PrivKey;
                toProto(message: _40.PrivKey): Uint8Array;
                toProtoMsg(message: _40.PrivKey): _40.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _41.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.PubKey;
                fromPartial(object: Partial<_41.PubKey>): _41.PubKey;
                fromAmino(object: _41.PubKeyAmino): _41.PubKey;
                toAmino(message: _41.PubKey): _41.PubKeyAmino;
                fromAminoMsg(object: _41.PubKeyAminoMsg): _41.PubKey;
                toAminoMsg(message: _41.PubKey): _41.PubKeyAminoMsg;
                fromProtoMsg(message: _41.PubKeyProtoMsg): _41.PubKey;
                toProto(message: _41.PubKey): Uint8Array;
                toProtoMsg(message: _41.PubKey): _41.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _41.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.PrivKey;
                fromPartial(object: Partial<_41.PrivKey>): _41.PrivKey;
                fromAmino(object: _41.PrivKeyAmino): _41.PrivKey;
                toAmino(message: _41.PrivKey): _41.PrivKeyAmino;
                fromAminoMsg(object: _41.PrivKeyAminoMsg): _41.PrivKey;
                toAminoMsg(message: _41.PrivKey): _41.PrivKeyAminoMsg;
                fromProtoMsg(message: _41.PrivKeyProtoMsg): _41.PrivKey;
                toProto(message: _41.PrivKey): Uint8Array;
                toProtoMsg(message: _41.PrivKey): _41.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _175.MsgClientImpl;
            QueryClientImpl: typeof _162.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _44.QueryParamsRequest): Promise<_44.QueryParamsResponse>;
                validatorOutstandingRewards(request: _44.QueryValidatorOutstandingRewardsRequest): Promise<_44.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _44.QueryValidatorCommissionRequest): Promise<_44.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _44.QueryValidatorSlashesRequest): Promise<_44.QueryValidatorSlashesResponse>;
                delegationRewards(request: _44.QueryDelegationRewardsRequest): Promise<_44.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _44.QueryDelegationTotalRewardsRequest): Promise<_44.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _44.QueryDelegatorValidatorsRequest): Promise<_44.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _44.QueryDelegatorWithdrawAddressRequest): Promise<_44.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _44.QueryCommunityPoolRequest): Promise<_44.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _147.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _45.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _45.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _45.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _45.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _45.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _45.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _45.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _45.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _45.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _45.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _45.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _45.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _45.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _45.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _45.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _45.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _45.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _45.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _45.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _45.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _45.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _45.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _45.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _45.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _45.MsgSetWithdrawAddress) => _45.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _45.MsgSetWithdrawAddressAmino) => _45.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _45.MsgWithdrawDelegatorReward) => _45.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _45.MsgWithdrawDelegatorRewardAmino) => _45.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _45.MsgWithdrawValidatorCommission) => _45.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _45.MsgWithdrawValidatorCommissionAmino) => _45.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _45.MsgFundCommunityPool) => _45.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _45.MsgFundCommunityPoolAmino) => _45.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _45.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_45.MsgSetWithdrawAddress>): _45.MsgSetWithdrawAddress;
                fromAmino(object: _45.MsgSetWithdrawAddressAmino): _45.MsgSetWithdrawAddress;
                toAmino(message: _45.MsgSetWithdrawAddress): _45.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _45.MsgSetWithdrawAddressAminoMsg): _45.MsgSetWithdrawAddress;
                toAminoMsg(message: _45.MsgSetWithdrawAddress): _45.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _45.MsgSetWithdrawAddressProtoMsg): _45.MsgSetWithdrawAddress;
                toProto(message: _45.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _45.MsgSetWithdrawAddress): _45.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _45.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _45.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_45.MsgSetWithdrawAddressResponse>): _45.MsgSetWithdrawAddressResponse;
                fromAmino(_: _45.MsgSetWithdrawAddressResponseAmino): _45.MsgSetWithdrawAddressResponse;
                toAmino(_: _45.MsgSetWithdrawAddressResponse): _45.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _45.MsgSetWithdrawAddressResponseAminoMsg): _45.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _45.MsgSetWithdrawAddressResponse): _45.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _45.MsgSetWithdrawAddressResponseProtoMsg): _45.MsgSetWithdrawAddressResponse;
                toProto(message: _45.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _45.MsgSetWithdrawAddressResponse): _45.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _45.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_45.MsgWithdrawDelegatorReward>): _45.MsgWithdrawDelegatorReward;
                fromAmino(object: _45.MsgWithdrawDelegatorRewardAmino): _45.MsgWithdrawDelegatorReward;
                toAmino(message: _45.MsgWithdrawDelegatorReward): _45.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _45.MsgWithdrawDelegatorRewardAminoMsg): _45.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _45.MsgWithdrawDelegatorReward): _45.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _45.MsgWithdrawDelegatorRewardProtoMsg): _45.MsgWithdrawDelegatorReward;
                toProto(message: _45.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _45.MsgWithdrawDelegatorReward): _45.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _45.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _45.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_45.MsgWithdrawDelegatorRewardResponse>): _45.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _45.MsgWithdrawDelegatorRewardResponseAmino): _45.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _45.MsgWithdrawDelegatorRewardResponse): _45.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _45.MsgWithdrawDelegatorRewardResponseAminoMsg): _45.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _45.MsgWithdrawDelegatorRewardResponse): _45.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _45.MsgWithdrawDelegatorRewardResponseProtoMsg): _45.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _45.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _45.MsgWithdrawDelegatorRewardResponse): _45.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _45.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_45.MsgWithdrawValidatorCommission>): _45.MsgWithdrawValidatorCommission;
                fromAmino(object: _45.MsgWithdrawValidatorCommissionAmino): _45.MsgWithdrawValidatorCommission;
                toAmino(message: _45.MsgWithdrawValidatorCommission): _45.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _45.MsgWithdrawValidatorCommissionAminoMsg): _45.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _45.MsgWithdrawValidatorCommission): _45.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _45.MsgWithdrawValidatorCommissionProtoMsg): _45.MsgWithdrawValidatorCommission;
                toProto(message: _45.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _45.MsgWithdrawValidatorCommission): _45.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _45.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _45.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_45.MsgWithdrawValidatorCommissionResponse>): _45.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _45.MsgWithdrawValidatorCommissionResponseAmino): _45.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _45.MsgWithdrawValidatorCommissionResponse): _45.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _45.MsgWithdrawValidatorCommissionResponseAminoMsg): _45.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _45.MsgWithdrawValidatorCommissionResponse): _45.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _45.MsgWithdrawValidatorCommissionResponseProtoMsg): _45.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _45.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _45.MsgWithdrawValidatorCommissionResponse): _45.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _45.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.MsgFundCommunityPool;
                fromPartial(object: Partial<_45.MsgFundCommunityPool>): _45.MsgFundCommunityPool;
                fromAmino(object: _45.MsgFundCommunityPoolAmino): _45.MsgFundCommunityPool;
                toAmino(message: _45.MsgFundCommunityPool): _45.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _45.MsgFundCommunityPoolAminoMsg): _45.MsgFundCommunityPool;
                toAminoMsg(message: _45.MsgFundCommunityPool): _45.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _45.MsgFundCommunityPoolProtoMsg): _45.MsgFundCommunityPool;
                toProto(message: _45.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _45.MsgFundCommunityPool): _45.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _45.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _45.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_45.MsgFundCommunityPoolResponse>): _45.MsgFundCommunityPoolResponse;
                fromAmino(_: _45.MsgFundCommunityPoolResponseAmino): _45.MsgFundCommunityPoolResponse;
                toAmino(_: _45.MsgFundCommunityPoolResponse): _45.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _45.MsgFundCommunityPoolResponseAminoMsg): _45.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _45.MsgFundCommunityPoolResponse): _45.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _45.MsgFundCommunityPoolResponseProtoMsg): _45.MsgFundCommunityPoolResponse;
                toProto(message: _45.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _45.MsgFundCommunityPoolResponse): _45.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _44.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.QueryParamsRequest;
                fromPartial(_: Partial<_44.QueryParamsRequest>): _44.QueryParamsRequest;
                fromAmino(_: _44.QueryParamsRequestAmino): _44.QueryParamsRequest;
                toAmino(_: _44.QueryParamsRequest): _44.QueryParamsRequestAmino;
                fromAminoMsg(object: _44.QueryParamsRequestAminoMsg): _44.QueryParamsRequest;
                toAminoMsg(message: _44.QueryParamsRequest): _44.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryParamsRequestProtoMsg): _44.QueryParamsRequest;
                toProto(message: _44.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryParamsRequest): _44.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _44.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryParamsResponse;
                fromPartial(object: Partial<_44.QueryParamsResponse>): _44.QueryParamsResponse;
                fromAmino(object: _44.QueryParamsResponseAmino): _44.QueryParamsResponse;
                toAmino(message: _44.QueryParamsResponse): _44.QueryParamsResponseAmino;
                fromAminoMsg(object: _44.QueryParamsResponseAminoMsg): _44.QueryParamsResponse;
                toAminoMsg(message: _44.QueryParamsResponse): _44.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryParamsResponseProtoMsg): _44.QueryParamsResponse;
                toProto(message: _44.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryParamsResponse): _44.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _44.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_44.QueryValidatorOutstandingRewardsRequest>): _44.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _44.QueryValidatorOutstandingRewardsRequestAmino): _44.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _44.QueryValidatorOutstandingRewardsRequest): _44.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _44.QueryValidatorOutstandingRewardsRequestAminoMsg): _44.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _44.QueryValidatorOutstandingRewardsRequest): _44.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryValidatorOutstandingRewardsRequestProtoMsg): _44.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _44.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryValidatorOutstandingRewardsRequest): _44.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _44.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_44.QueryValidatorOutstandingRewardsResponse>): _44.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _44.QueryValidatorOutstandingRewardsResponseAmino): _44.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _44.QueryValidatorOutstandingRewardsResponse): _44.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _44.QueryValidatorOutstandingRewardsResponseAminoMsg): _44.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _44.QueryValidatorOutstandingRewardsResponse): _44.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryValidatorOutstandingRewardsResponseProtoMsg): _44.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _44.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryValidatorOutstandingRewardsResponse): _44.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _44.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_44.QueryValidatorCommissionRequest>): _44.QueryValidatorCommissionRequest;
                fromAmino(object: _44.QueryValidatorCommissionRequestAmino): _44.QueryValidatorCommissionRequest;
                toAmino(message: _44.QueryValidatorCommissionRequest): _44.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _44.QueryValidatorCommissionRequestAminoMsg): _44.QueryValidatorCommissionRequest;
                toAminoMsg(message: _44.QueryValidatorCommissionRequest): _44.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _44.QueryValidatorCommissionRequestProtoMsg): _44.QueryValidatorCommissionRequest;
                toProto(message: _44.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _44.QueryValidatorCommissionRequest): _44.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _44.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_44.QueryValidatorCommissionResponse>): _44.QueryValidatorCommissionResponse;
                fromAmino(object: _44.QueryValidatorCommissionResponseAmino): _44.QueryValidatorCommissionResponse;
                toAmino(message: _44.QueryValidatorCommissionResponse): _44.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _44.QueryValidatorCommissionResponseAminoMsg): _44.QueryValidatorCommissionResponse;
                toAminoMsg(message: _44.QueryValidatorCommissionResponse): _44.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _44.QueryValidatorCommissionResponseProtoMsg): _44.QueryValidatorCommissionResponse;
                toProto(message: _44.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _44.QueryValidatorCommissionResponse): _44.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _44.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_44.QueryValidatorSlashesRequest>): _44.QueryValidatorSlashesRequest;
                fromAmino(object: _44.QueryValidatorSlashesRequestAmino): _44.QueryValidatorSlashesRequest;
                toAmino(message: _44.QueryValidatorSlashesRequest): _44.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _44.QueryValidatorSlashesRequestAminoMsg): _44.QueryValidatorSlashesRequest;
                toAminoMsg(message: _44.QueryValidatorSlashesRequest): _44.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _44.QueryValidatorSlashesRequestProtoMsg): _44.QueryValidatorSlashesRequest;
                toProto(message: _44.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _44.QueryValidatorSlashesRequest): _44.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _44.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_44.QueryValidatorSlashesResponse>): _44.QueryValidatorSlashesResponse;
                fromAmino(object: _44.QueryValidatorSlashesResponseAmino): _44.QueryValidatorSlashesResponse;
                toAmino(message: _44.QueryValidatorSlashesResponse): _44.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _44.QueryValidatorSlashesResponseAminoMsg): _44.QueryValidatorSlashesResponse;
                toAminoMsg(message: _44.QueryValidatorSlashesResponse): _44.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _44.QueryValidatorSlashesResponseProtoMsg): _44.QueryValidatorSlashesResponse;
                toProto(message: _44.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _44.QueryValidatorSlashesResponse): _44.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _44.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_44.QueryDelegationRewardsRequest>): _44.QueryDelegationRewardsRequest;
                fromAmino(object: _44.QueryDelegationRewardsRequestAmino): _44.QueryDelegationRewardsRequest;
                toAmino(message: _44.QueryDelegationRewardsRequest): _44.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _44.QueryDelegationRewardsRequestAminoMsg): _44.QueryDelegationRewardsRequest;
                toAminoMsg(message: _44.QueryDelegationRewardsRequest): _44.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryDelegationRewardsRequestProtoMsg): _44.QueryDelegationRewardsRequest;
                toProto(message: _44.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryDelegationRewardsRequest): _44.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _44.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_44.QueryDelegationRewardsResponse>): _44.QueryDelegationRewardsResponse;
                fromAmino(object: _44.QueryDelegationRewardsResponseAmino): _44.QueryDelegationRewardsResponse;
                toAmino(message: _44.QueryDelegationRewardsResponse): _44.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _44.QueryDelegationRewardsResponseAminoMsg): _44.QueryDelegationRewardsResponse;
                toAminoMsg(message: _44.QueryDelegationRewardsResponse): _44.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryDelegationRewardsResponseProtoMsg): _44.QueryDelegationRewardsResponse;
                toProto(message: _44.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryDelegationRewardsResponse): _44.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _44.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_44.QueryDelegationTotalRewardsRequest>): _44.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _44.QueryDelegationTotalRewardsRequestAmino): _44.QueryDelegationTotalRewardsRequest;
                toAmino(message: _44.QueryDelegationTotalRewardsRequest): _44.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _44.QueryDelegationTotalRewardsRequestAminoMsg): _44.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _44.QueryDelegationTotalRewardsRequest): _44.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryDelegationTotalRewardsRequestProtoMsg): _44.QueryDelegationTotalRewardsRequest;
                toProto(message: _44.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryDelegationTotalRewardsRequest): _44.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _44.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_44.QueryDelegationTotalRewardsResponse>): _44.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _44.QueryDelegationTotalRewardsResponseAmino): _44.QueryDelegationTotalRewardsResponse;
                toAmino(message: _44.QueryDelegationTotalRewardsResponse): _44.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _44.QueryDelegationTotalRewardsResponseAminoMsg): _44.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _44.QueryDelegationTotalRewardsResponse): _44.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryDelegationTotalRewardsResponseProtoMsg): _44.QueryDelegationTotalRewardsResponse;
                toProto(message: _44.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryDelegationTotalRewardsResponse): _44.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _44.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_44.QueryDelegatorValidatorsRequest>): _44.QueryDelegatorValidatorsRequest;
                fromAmino(object: _44.QueryDelegatorValidatorsRequestAmino): _44.QueryDelegatorValidatorsRequest;
                toAmino(message: _44.QueryDelegatorValidatorsRequest): _44.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _44.QueryDelegatorValidatorsRequestAminoMsg): _44.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _44.QueryDelegatorValidatorsRequest): _44.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryDelegatorValidatorsRequestProtoMsg): _44.QueryDelegatorValidatorsRequest;
                toProto(message: _44.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryDelegatorValidatorsRequest): _44.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _44.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_44.QueryDelegatorValidatorsResponse>): _44.QueryDelegatorValidatorsResponse;
                fromAmino(object: _44.QueryDelegatorValidatorsResponseAmino): _44.QueryDelegatorValidatorsResponse;
                toAmino(message: _44.QueryDelegatorValidatorsResponse): _44.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _44.QueryDelegatorValidatorsResponseAminoMsg): _44.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _44.QueryDelegatorValidatorsResponse): _44.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryDelegatorValidatorsResponseProtoMsg): _44.QueryDelegatorValidatorsResponse;
                toProto(message: _44.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryDelegatorValidatorsResponse): _44.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _44.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_44.QueryDelegatorWithdrawAddressRequest>): _44.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _44.QueryDelegatorWithdrawAddressRequestAmino): _44.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _44.QueryDelegatorWithdrawAddressRequest): _44.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _44.QueryDelegatorWithdrawAddressRequestAminoMsg): _44.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _44.QueryDelegatorWithdrawAddressRequest): _44.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _44.QueryDelegatorWithdrawAddressRequestProtoMsg): _44.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _44.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _44.QueryDelegatorWithdrawAddressRequest): _44.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _44.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_44.QueryDelegatorWithdrawAddressResponse>): _44.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _44.QueryDelegatorWithdrawAddressResponseAmino): _44.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _44.QueryDelegatorWithdrawAddressResponse): _44.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _44.QueryDelegatorWithdrawAddressResponseAminoMsg): _44.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _44.QueryDelegatorWithdrawAddressResponse): _44.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _44.QueryDelegatorWithdrawAddressResponseProtoMsg): _44.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _44.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _44.QueryDelegatorWithdrawAddressResponse): _44.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _44.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_44.QueryCommunityPoolRequest>): _44.QueryCommunityPoolRequest;
                fromAmino(_: _44.QueryCommunityPoolRequestAmino): _44.QueryCommunityPoolRequest;
                toAmino(_: _44.QueryCommunityPoolRequest): _44.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _44.QueryCommunityPoolRequestAminoMsg): _44.QueryCommunityPoolRequest;
                toAminoMsg(message: _44.QueryCommunityPoolRequest): _44.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _44.QueryCommunityPoolRequestProtoMsg): _44.QueryCommunityPoolRequest;
                toProto(message: _44.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _44.QueryCommunityPoolRequest): _44.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _44.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_44.QueryCommunityPoolResponse>): _44.QueryCommunityPoolResponse;
                fromAmino(object: _44.QueryCommunityPoolResponseAmino): _44.QueryCommunityPoolResponse;
                toAmino(message: _44.QueryCommunityPoolResponse): _44.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _44.QueryCommunityPoolResponseAminoMsg): _44.QueryCommunityPoolResponse;
                toAminoMsg(message: _44.QueryCommunityPoolResponse): _44.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _44.QueryCommunityPoolResponseProtoMsg): _44.QueryCommunityPoolResponse;
                toProto(message: _44.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _44.QueryCommunityPoolResponse): _44.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _43.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_43.DelegatorWithdrawInfo>): _43.DelegatorWithdrawInfo;
                fromAmino(object: _43.DelegatorWithdrawInfoAmino): _43.DelegatorWithdrawInfo;
                toAmino(message: _43.DelegatorWithdrawInfo): _43.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _43.DelegatorWithdrawInfoAminoMsg): _43.DelegatorWithdrawInfo;
                toAminoMsg(message: _43.DelegatorWithdrawInfo): _43.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _43.DelegatorWithdrawInfoProtoMsg): _43.DelegatorWithdrawInfo;
                toProto(message: _43.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _43.DelegatorWithdrawInfo): _43.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _43.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_43.ValidatorOutstandingRewardsRecord>): _43.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _43.ValidatorOutstandingRewardsRecordAmino): _43.ValidatorOutstandingRewardsRecord;
                toAmino(message: _43.ValidatorOutstandingRewardsRecord): _43.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _43.ValidatorOutstandingRewardsRecordAminoMsg): _43.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _43.ValidatorOutstandingRewardsRecord): _43.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _43.ValidatorOutstandingRewardsRecordProtoMsg): _43.ValidatorOutstandingRewardsRecord;
                toProto(message: _43.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _43.ValidatorOutstandingRewardsRecord): _43.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _43.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_43.ValidatorAccumulatedCommissionRecord>): _43.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _43.ValidatorAccumulatedCommissionRecordAmino): _43.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _43.ValidatorAccumulatedCommissionRecord): _43.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _43.ValidatorAccumulatedCommissionRecordAminoMsg): _43.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _43.ValidatorAccumulatedCommissionRecord): _43.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _43.ValidatorAccumulatedCommissionRecordProtoMsg): _43.ValidatorAccumulatedCommissionRecord;
                toProto(message: _43.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _43.ValidatorAccumulatedCommissionRecord): _43.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _43.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_43.ValidatorHistoricalRewardsRecord>): _43.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _43.ValidatorHistoricalRewardsRecordAmino): _43.ValidatorHistoricalRewardsRecord;
                toAmino(message: _43.ValidatorHistoricalRewardsRecord): _43.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _43.ValidatorHistoricalRewardsRecordAminoMsg): _43.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _43.ValidatorHistoricalRewardsRecord): _43.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _43.ValidatorHistoricalRewardsRecordProtoMsg): _43.ValidatorHistoricalRewardsRecord;
                toProto(message: _43.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _43.ValidatorHistoricalRewardsRecord): _43.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _43.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_43.ValidatorCurrentRewardsRecord>): _43.ValidatorCurrentRewardsRecord;
                fromAmino(object: _43.ValidatorCurrentRewardsRecordAmino): _43.ValidatorCurrentRewardsRecord;
                toAmino(message: _43.ValidatorCurrentRewardsRecord): _43.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _43.ValidatorCurrentRewardsRecordAminoMsg): _43.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _43.ValidatorCurrentRewardsRecord): _43.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _43.ValidatorCurrentRewardsRecordProtoMsg): _43.ValidatorCurrentRewardsRecord;
                toProto(message: _43.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _43.ValidatorCurrentRewardsRecord): _43.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _43.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_43.DelegatorStartingInfoRecord>): _43.DelegatorStartingInfoRecord;
                fromAmino(object: _43.DelegatorStartingInfoRecordAmino): _43.DelegatorStartingInfoRecord;
                toAmino(message: _43.DelegatorStartingInfoRecord): _43.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _43.DelegatorStartingInfoRecordAminoMsg): _43.DelegatorStartingInfoRecord;
                toAminoMsg(message: _43.DelegatorStartingInfoRecord): _43.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _43.DelegatorStartingInfoRecordProtoMsg): _43.DelegatorStartingInfoRecord;
                toProto(message: _43.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _43.DelegatorStartingInfoRecord): _43.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _43.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_43.ValidatorSlashEventRecord>): _43.ValidatorSlashEventRecord;
                fromAmino(object: _43.ValidatorSlashEventRecordAmino): _43.ValidatorSlashEventRecord;
                toAmino(message: _43.ValidatorSlashEventRecord): _43.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _43.ValidatorSlashEventRecordAminoMsg): _43.ValidatorSlashEventRecord;
                toAminoMsg(message: _43.ValidatorSlashEventRecord): _43.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _43.ValidatorSlashEventRecordProtoMsg): _43.ValidatorSlashEventRecord;
                toProto(message: _43.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _43.ValidatorSlashEventRecord): _43.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _42.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.Params;
                fromPartial(object: Partial<_42.Params>): _42.Params;
                fromAmino(object: _42.ParamsAmino): _42.Params;
                toAmino(message: _42.Params): _42.ParamsAmino;
                fromAminoMsg(object: _42.ParamsAminoMsg): _42.Params;
                toAminoMsg(message: _42.Params): _42.ParamsAminoMsg;
                fromProtoMsg(message: _42.ParamsProtoMsg): _42.Params;
                toProto(message: _42.Params): Uint8Array;
                toProtoMsg(message: _42.Params): _42.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _42.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_42.ValidatorHistoricalRewards>): _42.ValidatorHistoricalRewards;
                fromAmino(object: _42.ValidatorHistoricalRewardsAmino): _42.ValidatorHistoricalRewards;
                toAmino(message: _42.ValidatorHistoricalRewards): _42.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _42.ValidatorHistoricalRewardsAminoMsg): _42.ValidatorHistoricalRewards;
                toAminoMsg(message: _42.ValidatorHistoricalRewards): _42.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _42.ValidatorHistoricalRewardsProtoMsg): _42.ValidatorHistoricalRewards;
                toProto(message: _42.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _42.ValidatorHistoricalRewards): _42.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _42.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.ValidatorCurrentRewards;
                fromPartial(object: Partial<_42.ValidatorCurrentRewards>): _42.ValidatorCurrentRewards;
                fromAmino(object: _42.ValidatorCurrentRewardsAmino): _42.ValidatorCurrentRewards;
                toAmino(message: _42.ValidatorCurrentRewards): _42.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _42.ValidatorCurrentRewardsAminoMsg): _42.ValidatorCurrentRewards;
                toAminoMsg(message: _42.ValidatorCurrentRewards): _42.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _42.ValidatorCurrentRewardsProtoMsg): _42.ValidatorCurrentRewards;
                toProto(message: _42.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _42.ValidatorCurrentRewards): _42.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _42.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_42.ValidatorAccumulatedCommission>): _42.ValidatorAccumulatedCommission;
                fromAmino(object: _42.ValidatorAccumulatedCommissionAmino): _42.ValidatorAccumulatedCommission;
                toAmino(message: _42.ValidatorAccumulatedCommission): _42.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _42.ValidatorAccumulatedCommissionAminoMsg): _42.ValidatorAccumulatedCommission;
                toAminoMsg(message: _42.ValidatorAccumulatedCommission): _42.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _42.ValidatorAccumulatedCommissionProtoMsg): _42.ValidatorAccumulatedCommission;
                toProto(message: _42.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _42.ValidatorAccumulatedCommission): _42.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _42.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_42.ValidatorOutstandingRewards>): _42.ValidatorOutstandingRewards;
                fromAmino(object: _42.ValidatorOutstandingRewardsAmino): _42.ValidatorOutstandingRewards;
                toAmino(message: _42.ValidatorOutstandingRewards): _42.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _42.ValidatorOutstandingRewardsAminoMsg): _42.ValidatorOutstandingRewards;
                toAminoMsg(message: _42.ValidatorOutstandingRewards): _42.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _42.ValidatorOutstandingRewardsProtoMsg): _42.ValidatorOutstandingRewards;
                toProto(message: _42.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _42.ValidatorOutstandingRewards): _42.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _42.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.ValidatorSlashEvent;
                fromPartial(object: Partial<_42.ValidatorSlashEvent>): _42.ValidatorSlashEvent;
                fromAmino(object: _42.ValidatorSlashEventAmino): _42.ValidatorSlashEvent;
                toAmino(message: _42.ValidatorSlashEvent): _42.ValidatorSlashEventAmino;
                fromAminoMsg(object: _42.ValidatorSlashEventAminoMsg): _42.ValidatorSlashEvent;
                toAminoMsg(message: _42.ValidatorSlashEvent): _42.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _42.ValidatorSlashEventProtoMsg): _42.ValidatorSlashEvent;
                toProto(message: _42.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _42.ValidatorSlashEvent): _42.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _42.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.ValidatorSlashEvents;
                fromPartial(object: Partial<_42.ValidatorSlashEvents>): _42.ValidatorSlashEvents;
                fromAmino(object: _42.ValidatorSlashEventsAmino): _42.ValidatorSlashEvents;
                toAmino(message: _42.ValidatorSlashEvents): _42.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _42.ValidatorSlashEventsAminoMsg): _42.ValidatorSlashEvents;
                toAminoMsg(message: _42.ValidatorSlashEvents): _42.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _42.ValidatorSlashEventsProtoMsg): _42.ValidatorSlashEvents;
                toProto(message: _42.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _42.ValidatorSlashEvents): _42.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _42.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.FeePool;
                fromPartial(object: Partial<_42.FeePool>): _42.FeePool;
                fromAmino(object: _42.FeePoolAmino): _42.FeePool;
                toAmino(message: _42.FeePool): _42.FeePoolAmino;
                fromAminoMsg(object: _42.FeePoolAminoMsg): _42.FeePool;
                toAminoMsg(message: _42.FeePool): _42.FeePoolAminoMsg;
                fromProtoMsg(message: _42.FeePoolProtoMsg): _42.FeePool;
                toProto(message: _42.FeePool): Uint8Array;
                toProtoMsg(message: _42.FeePool): _42.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _42.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_42.CommunityPoolSpendProposal>): _42.CommunityPoolSpendProposal;
                fromAmino(object: _42.CommunityPoolSpendProposalAmino): _42.CommunityPoolSpendProposal;
                toAmino(message: _42.CommunityPoolSpendProposal): _42.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _42.CommunityPoolSpendProposalAminoMsg): _42.CommunityPoolSpendProposal;
                toAminoMsg(message: _42.CommunityPoolSpendProposal): _42.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _42.CommunityPoolSpendProposalProtoMsg): _42.CommunityPoolSpendProposal;
                toProto(message: _42.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _42.CommunityPoolSpendProposal): _42.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _42.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.DelegatorStartingInfo;
                fromPartial(object: Partial<_42.DelegatorStartingInfo>): _42.DelegatorStartingInfo;
                fromAmino(object: _42.DelegatorStartingInfoAmino): _42.DelegatorStartingInfo;
                toAmino(message: _42.DelegatorStartingInfo): _42.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _42.DelegatorStartingInfoAminoMsg): _42.DelegatorStartingInfo;
                toAminoMsg(message: _42.DelegatorStartingInfo): _42.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _42.DelegatorStartingInfoProtoMsg): _42.DelegatorStartingInfo;
                toProto(message: _42.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _42.DelegatorStartingInfo): _42.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _42.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.DelegationDelegatorReward;
                fromPartial(object: Partial<_42.DelegationDelegatorReward>): _42.DelegationDelegatorReward;
                fromAmino(object: _42.DelegationDelegatorRewardAmino): _42.DelegationDelegatorReward;
                toAmino(message: _42.DelegationDelegatorReward): _42.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _42.DelegationDelegatorRewardAminoMsg): _42.DelegationDelegatorReward;
                toAminoMsg(message: _42.DelegationDelegatorReward): _42.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _42.DelegationDelegatorRewardProtoMsg): _42.DelegationDelegatorReward;
                toProto(message: _42.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _42.DelegationDelegatorReward): _42.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _42.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_42.CommunityPoolSpendProposalWithDeposit>): _42.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _42.CommunityPoolSpendProposalWithDepositAmino): _42.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _42.CommunityPoolSpendProposalWithDeposit): _42.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _42.CommunityPoolSpendProposalWithDepositAminoMsg): _42.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _42.CommunityPoolSpendProposalWithDeposit): _42.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _42.CommunityPoolSpendProposalWithDepositProtoMsg): _42.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _42.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _42.CommunityPoolSpendProposalWithDeposit): _42.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _176.MsgClientImpl;
            QueryClientImpl: typeof _163.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _48.QueryEvidenceRequest): Promise<_48.QueryEvidenceResponse>;
                allEvidence(request?: _48.QueryAllEvidenceRequest): Promise<_48.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _148.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _49.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _49.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _49.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _49.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _49.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _49.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _49.MsgSubmitEvidence) => _49.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _49.MsgSubmitEvidenceAmino) => _49.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _49.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgSubmitEvidence;
                fromPartial(object: Partial<_49.MsgSubmitEvidence>): _49.MsgSubmitEvidence;
                fromAmino(object: _49.MsgSubmitEvidenceAmino): _49.MsgSubmitEvidence;
                toAmino(message: _49.MsgSubmitEvidence): _49.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _49.MsgSubmitEvidenceAminoMsg): _49.MsgSubmitEvidence;
                toAminoMsg(message: _49.MsgSubmitEvidence): _49.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _49.MsgSubmitEvidenceProtoMsg): _49.MsgSubmitEvidence;
                toProto(message: _49.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _49.MsgSubmitEvidence): _49.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _49.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_49.MsgSubmitEvidenceResponse>): _49.MsgSubmitEvidenceResponse;
                fromAmino(object: _49.MsgSubmitEvidenceResponseAmino): _49.MsgSubmitEvidenceResponse;
                toAmino(message: _49.MsgSubmitEvidenceResponse): _49.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _49.MsgSubmitEvidenceResponseAminoMsg): _49.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _49.MsgSubmitEvidenceResponse): _49.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _49.MsgSubmitEvidenceResponseProtoMsg): _49.MsgSubmitEvidenceResponse;
                toProto(message: _49.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _49.MsgSubmitEvidenceResponse): _49.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _48.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryEvidenceRequest;
                fromPartial(object: Partial<_48.QueryEvidenceRequest>): _48.QueryEvidenceRequest;
                fromAmino(object: _48.QueryEvidenceRequestAmino): _48.QueryEvidenceRequest;
                toAmino(message: _48.QueryEvidenceRequest): _48.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _48.QueryEvidenceRequestAminoMsg): _48.QueryEvidenceRequest;
                toAminoMsg(message: _48.QueryEvidenceRequest): _48.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _48.QueryEvidenceRequestProtoMsg): _48.QueryEvidenceRequest;
                toProto(message: _48.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _48.QueryEvidenceRequest): _48.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _48.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryEvidenceResponse;
                fromPartial(object: Partial<_48.QueryEvidenceResponse>): _48.QueryEvidenceResponse;
                fromAmino(object: _48.QueryEvidenceResponseAmino): _48.QueryEvidenceResponse;
                toAmino(message: _48.QueryEvidenceResponse): _48.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _48.QueryEvidenceResponseAminoMsg): _48.QueryEvidenceResponse;
                toAminoMsg(message: _48.QueryEvidenceResponse): _48.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _48.QueryEvidenceResponseProtoMsg): _48.QueryEvidenceResponse;
                toProto(message: _48.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _48.QueryEvidenceResponse): _48.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _48.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_48.QueryAllEvidenceRequest>): _48.QueryAllEvidenceRequest;
                fromAmino(object: _48.QueryAllEvidenceRequestAmino): _48.QueryAllEvidenceRequest;
                toAmino(message: _48.QueryAllEvidenceRequest): _48.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _48.QueryAllEvidenceRequestAminoMsg): _48.QueryAllEvidenceRequest;
                toAminoMsg(message: _48.QueryAllEvidenceRequest): _48.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _48.QueryAllEvidenceRequestProtoMsg): _48.QueryAllEvidenceRequest;
                toProto(message: _48.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _48.QueryAllEvidenceRequest): _48.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _48.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_48.QueryAllEvidenceResponse>): _48.QueryAllEvidenceResponse;
                fromAmino(object: _48.QueryAllEvidenceResponseAmino): _48.QueryAllEvidenceResponse;
                toAmino(message: _48.QueryAllEvidenceResponse): _48.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _48.QueryAllEvidenceResponseAminoMsg): _48.QueryAllEvidenceResponse;
                toAminoMsg(message: _48.QueryAllEvidenceResponse): _48.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _48.QueryAllEvidenceResponseProtoMsg): _48.QueryAllEvidenceResponse;
                toProto(message: _48.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _48.QueryAllEvidenceResponse): _48.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _46.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Equivocation;
                fromPartial(object: Partial<_46.Equivocation>): _46.Equivocation;
                fromAmino(object: _46.EquivocationAmino): _46.Equivocation;
                toAmino(message: _46.Equivocation): _46.EquivocationAmino;
                fromAminoMsg(object: _46.EquivocationAminoMsg): _46.Equivocation;
                toAminoMsg(message: _46.Equivocation): _46.EquivocationAminoMsg;
                fromProtoMsg(message: _46.EquivocationProtoMsg): _46.Equivocation;
                toProto(message: _46.Equivocation): Uint8Array;
                toProtoMsg(message: _46.Equivocation): _46.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _177.MsgClientImpl;
            QueryClientImpl: typeof _164.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _52.QueryAllowanceRequest): Promise<_52.QueryAllowanceResponse>;
                allowances(request: _52.QueryAllowancesRequest): Promise<_52.QueryAllowancesResponse>;
                allowancesByGranter(request: _52.QueryAllowancesByGranterRequest): Promise<_52.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _149.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _53.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _53.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _53.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _53.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _53.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _53.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _53.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _53.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _53.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _53.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _53.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _53.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _53.MsgGrantAllowance) => _53.MsgGrantAllowanceAmino;
                    fromAmino: (object: _53.MsgGrantAllowanceAmino) => _53.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _53.MsgRevokeAllowance) => _53.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _53.MsgRevokeAllowanceAmino) => _53.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _53.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgGrantAllowance;
                fromPartial(object: Partial<_53.MsgGrantAllowance>): _53.MsgGrantAllowance;
                fromAmino(object: _53.MsgGrantAllowanceAmino): _53.MsgGrantAllowance;
                toAmino(message: _53.MsgGrantAllowance): _53.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _53.MsgGrantAllowanceAminoMsg): _53.MsgGrantAllowance;
                toAminoMsg(message: _53.MsgGrantAllowance): _53.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _53.MsgGrantAllowanceProtoMsg): _53.MsgGrantAllowance;
                toProto(message: _53.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _53.MsgGrantAllowance): _53.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _53.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_53.MsgGrantAllowanceResponse>): _53.MsgGrantAllowanceResponse;
                fromAmino(_: _53.MsgGrantAllowanceResponseAmino): _53.MsgGrantAllowanceResponse;
                toAmino(_: _53.MsgGrantAllowanceResponse): _53.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _53.MsgGrantAllowanceResponseAminoMsg): _53.MsgGrantAllowanceResponse;
                toAminoMsg(message: _53.MsgGrantAllowanceResponse): _53.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _53.MsgGrantAllowanceResponseProtoMsg): _53.MsgGrantAllowanceResponse;
                toProto(message: _53.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _53.MsgGrantAllowanceResponse): _53.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _53.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgRevokeAllowance;
                fromPartial(object: Partial<_53.MsgRevokeAllowance>): _53.MsgRevokeAllowance;
                fromAmino(object: _53.MsgRevokeAllowanceAmino): _53.MsgRevokeAllowance;
                toAmino(message: _53.MsgRevokeAllowance): _53.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _53.MsgRevokeAllowanceAminoMsg): _53.MsgRevokeAllowance;
                toAminoMsg(message: _53.MsgRevokeAllowance): _53.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _53.MsgRevokeAllowanceProtoMsg): _53.MsgRevokeAllowance;
                toProto(message: _53.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _53.MsgRevokeAllowance): _53.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _53.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_53.MsgRevokeAllowanceResponse>): _53.MsgRevokeAllowanceResponse;
                fromAmino(_: _53.MsgRevokeAllowanceResponseAmino): _53.MsgRevokeAllowanceResponse;
                toAmino(_: _53.MsgRevokeAllowanceResponse): _53.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _53.MsgRevokeAllowanceResponseAminoMsg): _53.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _53.MsgRevokeAllowanceResponse): _53.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _53.MsgRevokeAllowanceResponseProtoMsg): _53.MsgRevokeAllowanceResponse;
                toProto(message: _53.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _53.MsgRevokeAllowanceResponse): _53.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _50.BasicAllowance | _50.PeriodicAllowance | _50.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _52.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryAllowanceRequest;
                fromPartial(object: Partial<_52.QueryAllowanceRequest>): _52.QueryAllowanceRequest;
                fromAmino(object: _52.QueryAllowanceRequestAmino): _52.QueryAllowanceRequest;
                toAmino(message: _52.QueryAllowanceRequest): _52.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _52.QueryAllowanceRequestAminoMsg): _52.QueryAllowanceRequest;
                toAminoMsg(message: _52.QueryAllowanceRequest): _52.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _52.QueryAllowanceRequestProtoMsg): _52.QueryAllowanceRequest;
                toProto(message: _52.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _52.QueryAllowanceRequest): _52.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _52.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryAllowanceResponse;
                fromPartial(object: Partial<_52.QueryAllowanceResponse>): _52.QueryAllowanceResponse;
                fromAmino(object: _52.QueryAllowanceResponseAmino): _52.QueryAllowanceResponse;
                toAmino(message: _52.QueryAllowanceResponse): _52.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _52.QueryAllowanceResponseAminoMsg): _52.QueryAllowanceResponse;
                toAminoMsg(message: _52.QueryAllowanceResponse): _52.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _52.QueryAllowanceResponseProtoMsg): _52.QueryAllowanceResponse;
                toProto(message: _52.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _52.QueryAllowanceResponse): _52.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _52.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryAllowancesRequest;
                fromPartial(object: Partial<_52.QueryAllowancesRequest>): _52.QueryAllowancesRequest;
                fromAmino(object: _52.QueryAllowancesRequestAmino): _52.QueryAllowancesRequest;
                toAmino(message: _52.QueryAllowancesRequest): _52.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _52.QueryAllowancesRequestAminoMsg): _52.QueryAllowancesRequest;
                toAminoMsg(message: _52.QueryAllowancesRequest): _52.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _52.QueryAllowancesRequestProtoMsg): _52.QueryAllowancesRequest;
                toProto(message: _52.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _52.QueryAllowancesRequest): _52.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _52.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryAllowancesResponse;
                fromPartial(object: Partial<_52.QueryAllowancesResponse>): _52.QueryAllowancesResponse;
                fromAmino(object: _52.QueryAllowancesResponseAmino): _52.QueryAllowancesResponse;
                toAmino(message: _52.QueryAllowancesResponse): _52.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _52.QueryAllowancesResponseAminoMsg): _52.QueryAllowancesResponse;
                toAminoMsg(message: _52.QueryAllowancesResponse): _52.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _52.QueryAllowancesResponseProtoMsg): _52.QueryAllowancesResponse;
                toProto(message: _52.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _52.QueryAllowancesResponse): _52.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _52.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_52.QueryAllowancesByGranterRequest>): _52.QueryAllowancesByGranterRequest;
                fromAmino(object: _52.QueryAllowancesByGranterRequestAmino): _52.QueryAllowancesByGranterRequest;
                toAmino(message: _52.QueryAllowancesByGranterRequest): _52.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _52.QueryAllowancesByGranterRequestAminoMsg): _52.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _52.QueryAllowancesByGranterRequest): _52.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _52.QueryAllowancesByGranterRequestProtoMsg): _52.QueryAllowancesByGranterRequest;
                toProto(message: _52.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _52.QueryAllowancesByGranterRequest): _52.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _52.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_52.QueryAllowancesByGranterResponse>): _52.QueryAllowancesByGranterResponse;
                fromAmino(object: _52.QueryAllowancesByGranterResponseAmino): _52.QueryAllowancesByGranterResponse;
                toAmino(message: _52.QueryAllowancesByGranterResponse): _52.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _52.QueryAllowancesByGranterResponseAminoMsg): _52.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _52.QueryAllowancesByGranterResponse): _52.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _52.QueryAllowancesByGranterResponseProtoMsg): _52.QueryAllowancesByGranterResponse;
                toProto(message: _52.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _52.QueryAllowancesByGranterResponse): _52.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _50.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.BasicAllowance;
                fromPartial(object: Partial<_50.BasicAllowance>): _50.BasicAllowance;
                fromAmino(object: _50.BasicAllowanceAmino): _50.BasicAllowance;
                toAmino(message: _50.BasicAllowance): _50.BasicAllowanceAmino;
                fromAminoMsg(object: _50.BasicAllowanceAminoMsg): _50.BasicAllowance;
                toAminoMsg(message: _50.BasicAllowance): _50.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _50.BasicAllowanceProtoMsg): _50.BasicAllowance;
                toProto(message: _50.BasicAllowance): Uint8Array;
                toProtoMsg(message: _50.BasicAllowance): _50.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _50.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.PeriodicAllowance;
                fromPartial(object: Partial<_50.PeriodicAllowance>): _50.PeriodicAllowance;
                fromAmino(object: _50.PeriodicAllowanceAmino): _50.PeriodicAllowance;
                toAmino(message: _50.PeriodicAllowance): _50.PeriodicAllowanceAmino;
                fromAminoMsg(object: _50.PeriodicAllowanceAminoMsg): _50.PeriodicAllowance;
                toAminoMsg(message: _50.PeriodicAllowance): _50.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _50.PeriodicAllowanceProtoMsg): _50.PeriodicAllowance;
                toProto(message: _50.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _50.PeriodicAllowance): _50.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _50.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.AllowedMsgAllowance;
                fromPartial(object: Partial<_50.AllowedMsgAllowance>): _50.AllowedMsgAllowance;
                fromAmino(object: _50.AllowedMsgAllowanceAmino): _50.AllowedMsgAllowance;
                toAmino(message: _50.AllowedMsgAllowance): _50.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _50.AllowedMsgAllowanceAminoMsg): _50.AllowedMsgAllowance;
                toAminoMsg(message: _50.AllowedMsgAllowance): _50.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _50.AllowedMsgAllowanceProtoMsg): _50.AllowedMsgAllowance;
                toProto(message: _50.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _50.AllowedMsgAllowance): _50.AllowedMsgAllowanceProtoMsg;
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
        };
    }
    namespace genutil {
        const v1beta1: {
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
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _178.MsgClientImpl;
            QueryClientImpl: typeof _165.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _57.QueryProposalRequest): Promise<_57.QueryProposalResponse>;
                proposals(request: _57.QueryProposalsRequest): Promise<_57.QueryProposalsResponse>;
                vote(request: _57.QueryVoteRequest): Promise<_57.QueryVoteResponse>;
                votes(request: _57.QueryVotesRequest): Promise<_57.QueryVotesResponse>;
                params(request: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                deposit(request: _57.QueryDepositRequest): Promise<_57.QueryDepositResponse>;
                deposits(request: _57.QueryDepositsRequest): Promise<_57.QueryDepositsResponse>;
                tallyResult(request: _57.QueryTallyResultRequest): Promise<_57.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _150.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _58.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _58.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _58.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _58.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _58.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _58.MsgSubmitProposal;
                    };
                    vote(value: _58.MsgVote): {
                        typeUrl: string;
                        value: _58.MsgVote;
                    };
                    voteWeighted(value: _58.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _58.MsgVoteWeighted;
                    };
                    deposit(value: _58.MsgDeposit): {
                        typeUrl: string;
                        value: _58.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _58.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _58.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _58.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _58.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _58.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _58.MsgSubmitProposal;
                    };
                    vote(value: _58.MsgVote): {
                        typeUrl: string;
                        value: _58.MsgVote;
                    };
                    voteWeighted(value: _58.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _58.MsgVoteWeighted;
                    };
                    deposit(value: _58.MsgDeposit): {
                        typeUrl: string;
                        value: _58.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _58.MsgSubmitProposal) => _58.MsgSubmitProposalAmino;
                    fromAmino: (object: _58.MsgSubmitProposalAmino) => _58.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _58.MsgVote) => _58.MsgVoteAmino;
                    fromAmino: (object: _58.MsgVoteAmino) => _58.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _58.MsgVoteWeighted) => _58.MsgVoteWeightedAmino;
                    fromAmino: (object: _58.MsgVoteWeightedAmino) => _58.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _58.MsgDeposit) => _58.MsgDepositAmino;
                    fromAmino: (object: _58.MsgDepositAmino) => _58.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _58.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.MsgSubmitProposal;
                fromPartial(object: Partial<_58.MsgSubmitProposal>): _58.MsgSubmitProposal;
                fromAmino(object: _58.MsgSubmitProposalAmino): _58.MsgSubmitProposal;
                toAmino(message: _58.MsgSubmitProposal): _58.MsgSubmitProposalAmino;
                fromAminoMsg(object: _58.MsgSubmitProposalAminoMsg): _58.MsgSubmitProposal;
                toAminoMsg(message: _58.MsgSubmitProposal): _58.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _58.MsgSubmitProposalProtoMsg): _58.MsgSubmitProposal;
                toProto(message: _58.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _58.MsgSubmitProposal): _58.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _58.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_58.MsgSubmitProposalResponse>): _58.MsgSubmitProposalResponse;
                fromAmino(object: _58.MsgSubmitProposalResponseAmino): _58.MsgSubmitProposalResponse;
                toAmino(message: _58.MsgSubmitProposalResponse): _58.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _58.MsgSubmitProposalResponseAminoMsg): _58.MsgSubmitProposalResponse;
                toAminoMsg(message: _58.MsgSubmitProposalResponse): _58.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _58.MsgSubmitProposalResponseProtoMsg): _58.MsgSubmitProposalResponse;
                toProto(message: _58.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _58.MsgSubmitProposalResponse): _58.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _58.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.MsgVote;
                fromPartial(object: Partial<_58.MsgVote>): _58.MsgVote;
                fromAmino(object: _58.MsgVoteAmino): _58.MsgVote;
                toAmino(message: _58.MsgVote): _58.MsgVoteAmino;
                fromAminoMsg(object: _58.MsgVoteAminoMsg): _58.MsgVote;
                toAminoMsg(message: _58.MsgVote): _58.MsgVoteAminoMsg;
                fromProtoMsg(message: _58.MsgVoteProtoMsg): _58.MsgVote;
                toProto(message: _58.MsgVote): Uint8Array;
                toProtoMsg(message: _58.MsgVote): _58.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _58.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.MsgVoteResponse;
                fromPartial(_: Partial<_58.MsgVoteResponse>): _58.MsgVoteResponse;
                fromAmino(_: _58.MsgVoteResponseAmino): _58.MsgVoteResponse;
                toAmino(_: _58.MsgVoteResponse): _58.MsgVoteResponseAmino;
                fromAminoMsg(object: _58.MsgVoteResponseAminoMsg): _58.MsgVoteResponse;
                toAminoMsg(message: _58.MsgVoteResponse): _58.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _58.MsgVoteResponseProtoMsg): _58.MsgVoteResponse;
                toProto(message: _58.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _58.MsgVoteResponse): _58.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _58.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.MsgVoteWeighted;
                fromPartial(object: Partial<_58.MsgVoteWeighted>): _58.MsgVoteWeighted;
                fromAmino(object: _58.MsgVoteWeightedAmino): _58.MsgVoteWeighted;
                toAmino(message: _58.MsgVoteWeighted): _58.MsgVoteWeightedAmino;
                fromAminoMsg(object: _58.MsgVoteWeightedAminoMsg): _58.MsgVoteWeighted;
                toAminoMsg(message: _58.MsgVoteWeighted): _58.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _58.MsgVoteWeightedProtoMsg): _58.MsgVoteWeighted;
                toProto(message: _58.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _58.MsgVoteWeighted): _58.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _58.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_58.MsgVoteWeightedResponse>): _58.MsgVoteWeightedResponse;
                fromAmino(_: _58.MsgVoteWeightedResponseAmino): _58.MsgVoteWeightedResponse;
                toAmino(_: _58.MsgVoteWeightedResponse): _58.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _58.MsgVoteWeightedResponseAminoMsg): _58.MsgVoteWeightedResponse;
                toAminoMsg(message: _58.MsgVoteWeightedResponse): _58.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _58.MsgVoteWeightedResponseProtoMsg): _58.MsgVoteWeightedResponse;
                toProto(message: _58.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _58.MsgVoteWeightedResponse): _58.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _58.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.MsgDeposit;
                fromPartial(object: Partial<_58.MsgDeposit>): _58.MsgDeposit;
                fromAmino(object: _58.MsgDepositAmino): _58.MsgDeposit;
                toAmino(message: _58.MsgDeposit): _58.MsgDepositAmino;
                fromAminoMsg(object: _58.MsgDepositAminoMsg): _58.MsgDeposit;
                toAminoMsg(message: _58.MsgDeposit): _58.MsgDepositAminoMsg;
                fromProtoMsg(message: _58.MsgDepositProtoMsg): _58.MsgDeposit;
                toProto(message: _58.MsgDeposit): Uint8Array;
                toProtoMsg(message: _58.MsgDeposit): _58.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _58.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.MsgDepositResponse;
                fromPartial(_: Partial<_58.MsgDepositResponse>): _58.MsgDepositResponse;
                fromAmino(_: _58.MsgDepositResponseAmino): _58.MsgDepositResponse;
                toAmino(_: _58.MsgDepositResponse): _58.MsgDepositResponseAmino;
                fromAminoMsg(object: _58.MsgDepositResponseAminoMsg): _58.MsgDepositResponse;
                toAminoMsg(message: _58.MsgDepositResponse): _58.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _58.MsgDepositResponseProtoMsg): _58.MsgDepositResponse;
                toProto(message: _58.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _58.MsgDepositResponse): _58.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _56.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _57.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryProposalRequest;
                fromPartial(object: Partial<_57.QueryProposalRequest>): _57.QueryProposalRequest;
                fromAmino(object: _57.QueryProposalRequestAmino): _57.QueryProposalRequest;
                toAmino(message: _57.QueryProposalRequest): _57.QueryProposalRequestAmino;
                fromAminoMsg(object: _57.QueryProposalRequestAminoMsg): _57.QueryProposalRequest;
                toAminoMsg(message: _57.QueryProposalRequest): _57.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _57.QueryProposalRequestProtoMsg): _57.QueryProposalRequest;
                toProto(message: _57.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _57.QueryProposalRequest): _57.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _57.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryProposalResponse;
                fromPartial(object: Partial<_57.QueryProposalResponse>): _57.QueryProposalResponse;
                fromAmino(object: _57.QueryProposalResponseAmino): _57.QueryProposalResponse;
                toAmino(message: _57.QueryProposalResponse): _57.QueryProposalResponseAmino;
                fromAminoMsg(object: _57.QueryProposalResponseAminoMsg): _57.QueryProposalResponse;
                toAminoMsg(message: _57.QueryProposalResponse): _57.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _57.QueryProposalResponseProtoMsg): _57.QueryProposalResponse;
                toProto(message: _57.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _57.QueryProposalResponse): _57.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _57.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryProposalsRequest;
                fromPartial(object: Partial<_57.QueryProposalsRequest>): _57.QueryProposalsRequest;
                fromAmino(object: _57.QueryProposalsRequestAmino): _57.QueryProposalsRequest;
                toAmino(message: _57.QueryProposalsRequest): _57.QueryProposalsRequestAmino;
                fromAminoMsg(object: _57.QueryProposalsRequestAminoMsg): _57.QueryProposalsRequest;
                toAminoMsg(message: _57.QueryProposalsRequest): _57.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _57.QueryProposalsRequestProtoMsg): _57.QueryProposalsRequest;
                toProto(message: _57.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _57.QueryProposalsRequest): _57.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _57.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryProposalsResponse;
                fromPartial(object: Partial<_57.QueryProposalsResponse>): _57.QueryProposalsResponse;
                fromAmino(object: _57.QueryProposalsResponseAmino): _57.QueryProposalsResponse;
                toAmino(message: _57.QueryProposalsResponse): _57.QueryProposalsResponseAmino;
                fromAminoMsg(object: _57.QueryProposalsResponseAminoMsg): _57.QueryProposalsResponse;
                toAminoMsg(message: _57.QueryProposalsResponse): _57.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _57.QueryProposalsResponseProtoMsg): _57.QueryProposalsResponse;
                toProto(message: _57.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _57.QueryProposalsResponse): _57.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _57.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryVoteRequest;
                fromPartial(object: Partial<_57.QueryVoteRequest>): _57.QueryVoteRequest;
                fromAmino(object: _57.QueryVoteRequestAmino): _57.QueryVoteRequest;
                toAmino(message: _57.QueryVoteRequest): _57.QueryVoteRequestAmino;
                fromAminoMsg(object: _57.QueryVoteRequestAminoMsg): _57.QueryVoteRequest;
                toAminoMsg(message: _57.QueryVoteRequest): _57.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _57.QueryVoteRequestProtoMsg): _57.QueryVoteRequest;
                toProto(message: _57.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _57.QueryVoteRequest): _57.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _57.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryVoteResponse;
                fromPartial(object: Partial<_57.QueryVoteResponse>): _57.QueryVoteResponse;
                fromAmino(object: _57.QueryVoteResponseAmino): _57.QueryVoteResponse;
                toAmino(message: _57.QueryVoteResponse): _57.QueryVoteResponseAmino;
                fromAminoMsg(object: _57.QueryVoteResponseAminoMsg): _57.QueryVoteResponse;
                toAminoMsg(message: _57.QueryVoteResponse): _57.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _57.QueryVoteResponseProtoMsg): _57.QueryVoteResponse;
                toProto(message: _57.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _57.QueryVoteResponse): _57.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _57.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryVotesRequest;
                fromPartial(object: Partial<_57.QueryVotesRequest>): _57.QueryVotesRequest;
                fromAmino(object: _57.QueryVotesRequestAmino): _57.QueryVotesRequest;
                toAmino(message: _57.QueryVotesRequest): _57.QueryVotesRequestAmino;
                fromAminoMsg(object: _57.QueryVotesRequestAminoMsg): _57.QueryVotesRequest;
                toAminoMsg(message: _57.QueryVotesRequest): _57.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _57.QueryVotesRequestProtoMsg): _57.QueryVotesRequest;
                toProto(message: _57.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _57.QueryVotesRequest): _57.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _57.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryVotesResponse;
                fromPartial(object: Partial<_57.QueryVotesResponse>): _57.QueryVotesResponse;
                fromAmino(object: _57.QueryVotesResponseAmino): _57.QueryVotesResponse;
                toAmino(message: _57.QueryVotesResponse): _57.QueryVotesResponseAmino;
                fromAminoMsg(object: _57.QueryVotesResponseAminoMsg): _57.QueryVotesResponse;
                toAminoMsg(message: _57.QueryVotesResponse): _57.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _57.QueryVotesResponseProtoMsg): _57.QueryVotesResponse;
                toProto(message: _57.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _57.QueryVotesResponse): _57.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _57.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryParamsRequest;
                fromPartial(object: Partial<_57.QueryParamsRequest>): _57.QueryParamsRequest;
                fromAmino(object: _57.QueryParamsRequestAmino): _57.QueryParamsRequest;
                toAmino(message: _57.QueryParamsRequest): _57.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _57.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryDepositRequest;
                fromPartial(object: Partial<_57.QueryDepositRequest>): _57.QueryDepositRequest;
                fromAmino(object: _57.QueryDepositRequestAmino): _57.QueryDepositRequest;
                toAmino(message: _57.QueryDepositRequest): _57.QueryDepositRequestAmino;
                fromAminoMsg(object: _57.QueryDepositRequestAminoMsg): _57.QueryDepositRequest;
                toAminoMsg(message: _57.QueryDepositRequest): _57.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _57.QueryDepositRequestProtoMsg): _57.QueryDepositRequest;
                toProto(message: _57.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _57.QueryDepositRequest): _57.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _57.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryDepositResponse;
                fromPartial(object: Partial<_57.QueryDepositResponse>): _57.QueryDepositResponse;
                fromAmino(object: _57.QueryDepositResponseAmino): _57.QueryDepositResponse;
                toAmino(message: _57.QueryDepositResponse): _57.QueryDepositResponseAmino;
                fromAminoMsg(object: _57.QueryDepositResponseAminoMsg): _57.QueryDepositResponse;
                toAminoMsg(message: _57.QueryDepositResponse): _57.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _57.QueryDepositResponseProtoMsg): _57.QueryDepositResponse;
                toProto(message: _57.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _57.QueryDepositResponse): _57.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _57.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryDepositsRequest;
                fromPartial(object: Partial<_57.QueryDepositsRequest>): _57.QueryDepositsRequest;
                fromAmino(object: _57.QueryDepositsRequestAmino): _57.QueryDepositsRequest;
                toAmino(message: _57.QueryDepositsRequest): _57.QueryDepositsRequestAmino;
                fromAminoMsg(object: _57.QueryDepositsRequestAminoMsg): _57.QueryDepositsRequest;
                toAminoMsg(message: _57.QueryDepositsRequest): _57.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _57.QueryDepositsRequestProtoMsg): _57.QueryDepositsRequest;
                toProto(message: _57.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _57.QueryDepositsRequest): _57.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _57.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryDepositsResponse;
                fromPartial(object: Partial<_57.QueryDepositsResponse>): _57.QueryDepositsResponse;
                fromAmino(object: _57.QueryDepositsResponseAmino): _57.QueryDepositsResponse;
                toAmino(message: _57.QueryDepositsResponse): _57.QueryDepositsResponseAmino;
                fromAminoMsg(object: _57.QueryDepositsResponseAminoMsg): _57.QueryDepositsResponse;
                toAminoMsg(message: _57.QueryDepositsResponse): _57.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _57.QueryDepositsResponseProtoMsg): _57.QueryDepositsResponse;
                toProto(message: _57.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _57.QueryDepositsResponse): _57.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _57.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryTallyResultRequest;
                fromPartial(object: Partial<_57.QueryTallyResultRequest>): _57.QueryTallyResultRequest;
                fromAmino(object: _57.QueryTallyResultRequestAmino): _57.QueryTallyResultRequest;
                toAmino(message: _57.QueryTallyResultRequest): _57.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _57.QueryTallyResultRequestAminoMsg): _57.QueryTallyResultRequest;
                toAminoMsg(message: _57.QueryTallyResultRequest): _57.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _57.QueryTallyResultRequestProtoMsg): _57.QueryTallyResultRequest;
                toProto(message: _57.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _57.QueryTallyResultRequest): _57.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _57.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryTallyResultResponse;
                fromPartial(object: Partial<_57.QueryTallyResultResponse>): _57.QueryTallyResultResponse;
                fromAmino(object: _57.QueryTallyResultResponseAmino): _57.QueryTallyResultResponse;
                toAmino(message: _57.QueryTallyResultResponse): _57.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _57.QueryTallyResultResponseAminoMsg): _57.QueryTallyResultResponse;
                toAminoMsg(message: _57.QueryTallyResultResponse): _57.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _57.QueryTallyResultResponseProtoMsg): _57.QueryTallyResultResponse;
                toProto(message: _57.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _57.QueryTallyResultResponse): _57.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _56.VoteOption;
            voteOptionToJSON(object: _56.VoteOption): string;
            proposalStatusFromJSON(object: any): _56.ProposalStatus;
            proposalStatusToJSON(object: _56.ProposalStatus): string;
            VoteOption: typeof _56.VoteOption;
            VoteOptionSDKType: typeof _56.VoteOption;
            VoteOptionAmino: typeof _56.VoteOption;
            ProposalStatus: typeof _56.ProposalStatus;
            ProposalStatusSDKType: typeof _56.ProposalStatus;
            ProposalStatusAmino: typeof _56.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _56.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.WeightedVoteOption;
                fromPartial(object: Partial<_56.WeightedVoteOption>): _56.WeightedVoteOption;
                fromAmino(object: _56.WeightedVoteOptionAmino): _56.WeightedVoteOption;
                toAmino(message: _56.WeightedVoteOption): _56.WeightedVoteOptionAmino;
                fromAminoMsg(object: _56.WeightedVoteOptionAminoMsg): _56.WeightedVoteOption;
                toAminoMsg(message: _56.WeightedVoteOption): _56.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _56.WeightedVoteOptionProtoMsg): _56.WeightedVoteOption;
                toProto(message: _56.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _56.WeightedVoteOption): _56.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _56.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.TextProposal;
                fromPartial(object: Partial<_56.TextProposal>): _56.TextProposal;
                fromAmino(object: _56.TextProposalAmino): _56.TextProposal;
                toAmino(message: _56.TextProposal): _56.TextProposalAmino;
                fromAminoMsg(object: _56.TextProposalAminoMsg): _56.TextProposal;
                toAminoMsg(message: _56.TextProposal): _56.TextProposalAminoMsg;
                fromProtoMsg(message: _56.TextProposalProtoMsg): _56.TextProposal;
                toProto(message: _56.TextProposal): Uint8Array;
                toProtoMsg(message: _56.TextProposal): _56.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _56.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Deposit;
                fromPartial(object: Partial<_56.Deposit>): _56.Deposit;
                fromAmino(object: _56.DepositAmino): _56.Deposit;
                toAmino(message: _56.Deposit): _56.DepositAmino;
                fromAminoMsg(object: _56.DepositAminoMsg): _56.Deposit;
                toAminoMsg(message: _56.Deposit): _56.DepositAminoMsg;
                fromProtoMsg(message: _56.DepositProtoMsg): _56.Deposit;
                toProto(message: _56.Deposit): Uint8Array;
                toProtoMsg(message: _56.Deposit): _56.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _56.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Proposal;
                fromPartial(object: Partial<_56.Proposal>): _56.Proposal;
                fromAmino(object: _56.ProposalAmino): _56.Proposal;
                toAmino(message: _56.Proposal): _56.ProposalAmino;
                fromAminoMsg(object: _56.ProposalAminoMsg): _56.Proposal;
                toAminoMsg(message: _56.Proposal): _56.ProposalAminoMsg;
                fromProtoMsg(message: _56.ProposalProtoMsg): _56.Proposal;
                toProto(message: _56.Proposal): Uint8Array;
                toProtoMsg(message: _56.Proposal): _56.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _56.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.TallyResult;
                fromPartial(object: Partial<_56.TallyResult>): _56.TallyResult;
                fromAmino(object: _56.TallyResultAmino): _56.TallyResult;
                toAmino(message: _56.TallyResult): _56.TallyResultAmino;
                fromAminoMsg(object: _56.TallyResultAminoMsg): _56.TallyResult;
                toAminoMsg(message: _56.TallyResult): _56.TallyResultAminoMsg;
                fromProtoMsg(message: _56.TallyResultProtoMsg): _56.TallyResult;
                toProto(message: _56.TallyResult): Uint8Array;
                toProtoMsg(message: _56.TallyResult): _56.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _56.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Vote;
                fromPartial(object: Partial<_56.Vote>): _56.Vote;
                fromAmino(object: _56.VoteAmino): _56.Vote;
                toAmino(message: _56.Vote): _56.VoteAmino;
                fromAminoMsg(object: _56.VoteAminoMsg): _56.Vote;
                toAminoMsg(message: _56.Vote): _56.VoteAminoMsg;
                fromProtoMsg(message: _56.VoteProtoMsg): _56.Vote;
                toProto(message: _56.Vote): Uint8Array;
                toProtoMsg(message: _56.Vote): _56.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _56.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.DepositParams;
                fromPartial(object: Partial<_56.DepositParams>): _56.DepositParams;
                fromAmino(object: _56.DepositParamsAmino): _56.DepositParams;
                toAmino(message: _56.DepositParams): _56.DepositParamsAmino;
                fromAminoMsg(object: _56.DepositParamsAminoMsg): _56.DepositParams;
                toAminoMsg(message: _56.DepositParams): _56.DepositParamsAminoMsg;
                fromProtoMsg(message: _56.DepositParamsProtoMsg): _56.DepositParams;
                toProto(message: _56.DepositParams): Uint8Array;
                toProtoMsg(message: _56.DepositParams): _56.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _56.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.VotingParams;
                fromPartial(object: Partial<_56.VotingParams>): _56.VotingParams;
                fromAmino(object: _56.VotingParamsAmino): _56.VotingParams;
                toAmino(message: _56.VotingParams): _56.VotingParamsAmino;
                fromAminoMsg(object: _56.VotingParamsAminoMsg): _56.VotingParams;
                toAminoMsg(message: _56.VotingParams): _56.VotingParamsAminoMsg;
                fromProtoMsg(message: _56.VotingParamsProtoMsg): _56.VotingParams;
                toProto(message: _56.VotingParams): Uint8Array;
                toProtoMsg(message: _56.VotingParams): _56.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _56.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.TallyParams;
                fromPartial(object: Partial<_56.TallyParams>): _56.TallyParams;
                fromAmino(object: _56.TallyParamsAmino): _56.TallyParams;
                toAmino(message: _56.TallyParams): _56.TallyParamsAmino;
                fromAminoMsg(object: _56.TallyParamsAminoMsg): _56.TallyParams;
                toAminoMsg(message: _56.TallyParams): _56.TallyParamsAminoMsg;
                fromProtoMsg(message: _56.TallyParamsProtoMsg): _56.TallyParams;
                toProto(message: _56.TallyParams): Uint8Array;
                toProtoMsg(message: _56.TallyParams): _56.TallyParamsProtoMsg;
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
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _166.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                inflation(request?: _61.QueryInflationRequest): Promise<_61.QueryInflationResponse>;
                annualProvisions(request?: _61.QueryAnnualProvisionsRequest): Promise<_61.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _151.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _61.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _61.QueryParamsRequest;
                fromPartial(_: Partial<_61.QueryParamsRequest>): _61.QueryParamsRequest;
                fromAmino(_: _61.QueryParamsRequestAmino): _61.QueryParamsRequest;
                toAmino(_: _61.QueryParamsRequest): _61.QueryParamsRequestAmino;
                fromAminoMsg(object: _61.QueryParamsRequestAminoMsg): _61.QueryParamsRequest;
                toAminoMsg(message: _61.QueryParamsRequest): _61.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _61.QueryParamsRequestProtoMsg): _61.QueryParamsRequest;
                toProto(message: _61.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _61.QueryParamsRequest): _61.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _61.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryParamsResponse;
                fromPartial(object: Partial<_61.QueryParamsResponse>): _61.QueryParamsResponse;
                fromAmino(object: _61.QueryParamsResponseAmino): _61.QueryParamsResponse;
                toAmino(message: _61.QueryParamsResponse): _61.QueryParamsResponseAmino;
                fromAminoMsg(object: _61.QueryParamsResponseAminoMsg): _61.QueryParamsResponse;
                toAminoMsg(message: _61.QueryParamsResponse): _61.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _61.QueryParamsResponseProtoMsg): _61.QueryParamsResponse;
                toProto(message: _61.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _61.QueryParamsResponse): _61.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _61.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _61.QueryInflationRequest;
                fromPartial(_: Partial<_61.QueryInflationRequest>): _61.QueryInflationRequest;
                fromAmino(_: _61.QueryInflationRequestAmino): _61.QueryInflationRequest;
                toAmino(_: _61.QueryInflationRequest): _61.QueryInflationRequestAmino;
                fromAminoMsg(object: _61.QueryInflationRequestAminoMsg): _61.QueryInflationRequest;
                toAminoMsg(message: _61.QueryInflationRequest): _61.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _61.QueryInflationRequestProtoMsg): _61.QueryInflationRequest;
                toProto(message: _61.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _61.QueryInflationRequest): _61.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _61.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryInflationResponse;
                fromPartial(object: Partial<_61.QueryInflationResponse>): _61.QueryInflationResponse;
                fromAmino(object: _61.QueryInflationResponseAmino): _61.QueryInflationResponse;
                toAmino(message: _61.QueryInflationResponse): _61.QueryInflationResponseAmino;
                fromAminoMsg(object: _61.QueryInflationResponseAminoMsg): _61.QueryInflationResponse;
                toAminoMsg(message: _61.QueryInflationResponse): _61.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _61.QueryInflationResponseProtoMsg): _61.QueryInflationResponse;
                toProto(message: _61.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _61.QueryInflationResponse): _61.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _61.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _61.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_61.QueryAnnualProvisionsRequest>): _61.QueryAnnualProvisionsRequest;
                fromAmino(_: _61.QueryAnnualProvisionsRequestAmino): _61.QueryAnnualProvisionsRequest;
                toAmino(_: _61.QueryAnnualProvisionsRequest): _61.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _61.QueryAnnualProvisionsRequestAminoMsg): _61.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _61.QueryAnnualProvisionsRequest): _61.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _61.QueryAnnualProvisionsRequestProtoMsg): _61.QueryAnnualProvisionsRequest;
                toProto(message: _61.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _61.QueryAnnualProvisionsRequest): _61.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _61.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_61.QueryAnnualProvisionsResponse>): _61.QueryAnnualProvisionsResponse;
                fromAmino(object: _61.QueryAnnualProvisionsResponseAmino): _61.QueryAnnualProvisionsResponse;
                toAmino(message: _61.QueryAnnualProvisionsResponse): _61.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _61.QueryAnnualProvisionsResponseAminoMsg): _61.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _61.QueryAnnualProvisionsResponse): _61.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _61.QueryAnnualProvisionsResponseProtoMsg): _61.QueryAnnualProvisionsResponse;
                toProto(message: _61.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _61.QueryAnnualProvisionsResponse): _61.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _60.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.Minter;
                fromPartial(object: Partial<_60.Minter>): _60.Minter;
                fromAmino(object: _60.MinterAmino): _60.Minter;
                toAmino(message: _60.Minter): _60.MinterAmino;
                fromAminoMsg(object: _60.MinterAminoMsg): _60.Minter;
                toAminoMsg(message: _60.Minter): _60.MinterAminoMsg;
                fromProtoMsg(message: _60.MinterProtoMsg): _60.Minter;
                toProto(message: _60.Minter): Uint8Array;
                toProtoMsg(message: _60.Minter): _60.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _60.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.Params;
                fromPartial(object: Partial<_60.Params>): _60.Params;
                fromAmino(object: _60.ParamsAmino): _60.Params;
                toAmino(message: _60.Params): _60.ParamsAmino;
                fromAminoMsg(object: _60.ParamsAminoMsg): _60.Params;
                toAminoMsg(message: _60.Params): _60.ParamsAminoMsg;
                fromProtoMsg(message: _60.ParamsProtoMsg): _60.Params;
                toProto(message: _60.Params): Uint8Array;
                toProtoMsg(message: _60.Params): _60.ParamsProtoMsg;
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
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _167.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _63.QueryParamsRequest): Promise<_63.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _152.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _63.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryParamsRequest;
                fromPartial(object: Partial<_63.QueryParamsRequest>): _63.QueryParamsRequest;
                fromAmino(object: _63.QueryParamsRequestAmino): _63.QueryParamsRequest;
                toAmino(message: _63.QueryParamsRequest): _63.QueryParamsRequestAmino;
                fromAminoMsg(object: _63.QueryParamsRequestAminoMsg): _63.QueryParamsRequest;
                toAminoMsg(message: _63.QueryParamsRequest): _63.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _63.QueryParamsRequestProtoMsg): _63.QueryParamsRequest;
                toProto(message: _63.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _63.QueryParamsRequest): _63.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _63.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryParamsResponse;
                fromPartial(object: Partial<_63.QueryParamsResponse>): _63.QueryParamsResponse;
                fromAmino(object: _63.QueryParamsResponseAmino): _63.QueryParamsResponse;
                toAmino(message: _63.QueryParamsResponse): _63.QueryParamsResponseAmino;
                fromAminoMsg(object: _63.QueryParamsResponseAminoMsg): _63.QueryParamsResponse;
                toAminoMsg(message: _63.QueryParamsResponse): _63.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _63.QueryParamsResponseProtoMsg): _63.QueryParamsResponse;
                toProto(message: _63.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _63.QueryParamsResponse): _63.QueryParamsResponseProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _62.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.ParameterChangeProposal;
                fromPartial(object: Partial<_62.ParameterChangeProposal>): _62.ParameterChangeProposal;
                fromAmino(object: _62.ParameterChangeProposalAmino): _62.ParameterChangeProposal;
                toAmino(message: _62.ParameterChangeProposal): _62.ParameterChangeProposalAmino;
                fromAminoMsg(object: _62.ParameterChangeProposalAminoMsg): _62.ParameterChangeProposal;
                toAminoMsg(message: _62.ParameterChangeProposal): _62.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _62.ParameterChangeProposalProtoMsg): _62.ParameterChangeProposal;
                toProto(message: _62.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _62.ParameterChangeProposal): _62.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _62.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.ParamChange;
                fromPartial(object: Partial<_62.ParamChange>): _62.ParamChange;
                fromAmino(object: _62.ParamChangeAmino): _62.ParamChange;
                toAmino(message: _62.ParamChange): _62.ParamChangeAmino;
                fromAminoMsg(object: _62.ParamChangeAminoMsg): _62.ParamChange;
                toAminoMsg(message: _62.ParamChange): _62.ParamChangeAminoMsg;
                fromProtoMsg(message: _62.ParamChangeProtoMsg): _62.ParamChange;
                toProto(message: _62.ParamChange): Uint8Array;
                toProtoMsg(message: _62.ParamChange): _62.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _179.MsgClientImpl;
            QueryClientImpl: typeof _168.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                signingInfo(request: _65.QuerySigningInfoRequest): Promise<_65.QuerySigningInfoResponse>;
                signingInfos(request?: _65.QuerySigningInfosRequest): Promise<_65.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _153.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _67.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _67.MsgUnjail): {
                        typeUrl: string;
                        value: _67.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _67.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _67.MsgUnjail): {
                        typeUrl: string;
                        value: _67.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _67.MsgUnjail) => _67.MsgUnjailAmino;
                    fromAmino: (object: _67.MsgUnjailAmino) => _67.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _67.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgUnjail;
                fromPartial(object: Partial<_67.MsgUnjail>): _67.MsgUnjail;
                fromAmino(object: _67.MsgUnjailAmino): _67.MsgUnjail;
                toAmino(message: _67.MsgUnjail): _67.MsgUnjailAmino;
                fromAminoMsg(object: _67.MsgUnjailAminoMsg): _67.MsgUnjail;
                toAminoMsg(message: _67.MsgUnjail): _67.MsgUnjailAminoMsg;
                fromProtoMsg(message: _67.MsgUnjailProtoMsg): _67.MsgUnjail;
                toProto(message: _67.MsgUnjail): Uint8Array;
                toProtoMsg(message: _67.MsgUnjail): _67.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _67.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.MsgUnjailResponse;
                fromPartial(_: Partial<_67.MsgUnjailResponse>): _67.MsgUnjailResponse;
                fromAmino(_: _67.MsgUnjailResponseAmino): _67.MsgUnjailResponse;
                toAmino(_: _67.MsgUnjailResponse): _67.MsgUnjailResponseAmino;
                fromAminoMsg(object: _67.MsgUnjailResponseAminoMsg): _67.MsgUnjailResponse;
                toAminoMsg(message: _67.MsgUnjailResponse): _67.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _67.MsgUnjailResponseProtoMsg): _67.MsgUnjailResponse;
                toProto(message: _67.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _67.MsgUnjailResponse): _67.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _66.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.ValidatorSigningInfo;
                fromPartial(object: Partial<_66.ValidatorSigningInfo>): _66.ValidatorSigningInfo;
                fromAmino(object: _66.ValidatorSigningInfoAmino): _66.ValidatorSigningInfo;
                toAmino(message: _66.ValidatorSigningInfo): _66.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _66.ValidatorSigningInfoAminoMsg): _66.ValidatorSigningInfo;
                toAminoMsg(message: _66.ValidatorSigningInfo): _66.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _66.ValidatorSigningInfoProtoMsg): _66.ValidatorSigningInfo;
                toProto(message: _66.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _66.ValidatorSigningInfo): _66.ValidatorSigningInfoProtoMsg;
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
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _65.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QuerySigningInfoRequest;
                fromPartial(object: Partial<_65.QuerySigningInfoRequest>): _65.QuerySigningInfoRequest;
                fromAmino(object: _65.QuerySigningInfoRequestAmino): _65.QuerySigningInfoRequest;
                toAmino(message: _65.QuerySigningInfoRequest): _65.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _65.QuerySigningInfoRequestAminoMsg): _65.QuerySigningInfoRequest;
                toAminoMsg(message: _65.QuerySigningInfoRequest): _65.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _65.QuerySigningInfoRequestProtoMsg): _65.QuerySigningInfoRequest;
                toProto(message: _65.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _65.QuerySigningInfoRequest): _65.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _65.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QuerySigningInfoResponse;
                fromPartial(object: Partial<_65.QuerySigningInfoResponse>): _65.QuerySigningInfoResponse;
                fromAmino(object: _65.QuerySigningInfoResponseAmino): _65.QuerySigningInfoResponse;
                toAmino(message: _65.QuerySigningInfoResponse): _65.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _65.QuerySigningInfoResponseAminoMsg): _65.QuerySigningInfoResponse;
                toAminoMsg(message: _65.QuerySigningInfoResponse): _65.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _65.QuerySigningInfoResponseProtoMsg): _65.QuerySigningInfoResponse;
                toProto(message: _65.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _65.QuerySigningInfoResponse): _65.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _65.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QuerySigningInfosRequest;
                fromPartial(object: Partial<_65.QuerySigningInfosRequest>): _65.QuerySigningInfosRequest;
                fromAmino(object: _65.QuerySigningInfosRequestAmino): _65.QuerySigningInfosRequest;
                toAmino(message: _65.QuerySigningInfosRequest): _65.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _65.QuerySigningInfosRequestAminoMsg): _65.QuerySigningInfosRequest;
                toAminoMsg(message: _65.QuerySigningInfosRequest): _65.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _65.QuerySigningInfosRequestProtoMsg): _65.QuerySigningInfosRequest;
                toProto(message: _65.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _65.QuerySigningInfosRequest): _65.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _65.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QuerySigningInfosResponse;
                fromPartial(object: Partial<_65.QuerySigningInfosResponse>): _65.QuerySigningInfosResponse;
                fromAmino(object: _65.QuerySigningInfosResponseAmino): _65.QuerySigningInfosResponse;
                toAmino(message: _65.QuerySigningInfosResponse): _65.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _65.QuerySigningInfosResponseAminoMsg): _65.QuerySigningInfosResponse;
                toAminoMsg(message: _65.QuerySigningInfosResponse): _65.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _65.QuerySigningInfosResponseProtoMsg): _65.QuerySigningInfosResponse;
                toProto(message: _65.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _65.QuerySigningInfosResponse): _65.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _64.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.SigningInfo;
                fromPartial(object: Partial<_64.SigningInfo>): _64.SigningInfo;
                fromAmino(object: _64.SigningInfoAmino): _64.SigningInfo;
                toAmino(message: _64.SigningInfo): _64.SigningInfoAmino;
                fromAminoMsg(object: _64.SigningInfoAminoMsg): _64.SigningInfo;
                toAminoMsg(message: _64.SigningInfo): _64.SigningInfoAminoMsg;
                fromProtoMsg(message: _64.SigningInfoProtoMsg): _64.SigningInfo;
                toProto(message: _64.SigningInfo): Uint8Array;
                toProtoMsg(message: _64.SigningInfo): _64.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _64.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.ValidatorMissedBlocks;
                fromPartial(object: Partial<_64.ValidatorMissedBlocks>): _64.ValidatorMissedBlocks;
                fromAmino(object: _64.ValidatorMissedBlocksAmino): _64.ValidatorMissedBlocks;
                toAmino(message: _64.ValidatorMissedBlocks): _64.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _64.ValidatorMissedBlocksAminoMsg): _64.ValidatorMissedBlocks;
                toAminoMsg(message: _64.ValidatorMissedBlocks): _64.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _64.ValidatorMissedBlocksProtoMsg): _64.ValidatorMissedBlocks;
                toProto(message: _64.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _64.ValidatorMissedBlocks): _64.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _64.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MissedBlock;
                fromPartial(object: Partial<_64.MissedBlock>): _64.MissedBlock;
                fromAmino(object: _64.MissedBlockAmino): _64.MissedBlock;
                toAmino(message: _64.MissedBlock): _64.MissedBlockAmino;
                fromAminoMsg(object: _64.MissedBlockAminoMsg): _64.MissedBlock;
                toAminoMsg(message: _64.MissedBlock): _64.MissedBlockAminoMsg;
                fromProtoMsg(message: _64.MissedBlockProtoMsg): _64.MissedBlock;
                toProto(message: _64.MissedBlock): Uint8Array;
                toProtoMsg(message: _64.MissedBlock): _64.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _180.MsgClientImpl;
            QueryClientImpl: typeof _169.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _70.QueryValidatorsRequest): Promise<_70.QueryValidatorsResponse>;
                validator(request: _70.QueryValidatorRequest): Promise<_70.QueryValidatorResponse>;
                validatorDelegations(request: _70.QueryValidatorDelegationsRequest): Promise<_70.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _70.QueryValidatorUnbondingDelegationsRequest): Promise<_70.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _70.QueryDelegationRequest): Promise<_70.QueryDelegationResponse>;
                unbondingDelegation(request: _70.QueryUnbondingDelegationRequest): Promise<_70.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _70.QueryDelegatorDelegationsRequest): Promise<_70.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _70.QueryDelegatorUnbondingDelegationsRequest): Promise<_70.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _70.QueryRedelegationsRequest): Promise<_70.QueryRedelegationsResponse>;
                delegatorValidators(request: _70.QueryDelegatorValidatorsRequest): Promise<_70.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _70.QueryDelegatorValidatorRequest): Promise<_70.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _70.QueryHistoricalInfoRequest): Promise<_70.QueryHistoricalInfoResponse>;
                pool(request?: _70.QueryPoolRequest): Promise<_70.QueryPoolResponse>;
                params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _154.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _72.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _72.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _72.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _72.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _72.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _72.MsgCreateValidator): {
                        typeUrl: string;
                        value: _72.MsgCreateValidator;
                    };
                    editValidator(value: _72.MsgEditValidator): {
                        typeUrl: string;
                        value: _72.MsgEditValidator;
                    };
                    delegate(value: _72.MsgDelegate): {
                        typeUrl: string;
                        value: _72.MsgDelegate;
                    };
                    beginRedelegate(value: _72.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _72.MsgBeginRedelegate;
                    };
                    undelegate(value: _72.MsgUndelegate): {
                        typeUrl: string;
                        value: _72.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _72.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _72.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _72.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _72.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _72.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _72.MsgCreateValidator): {
                        typeUrl: string;
                        value: _72.MsgCreateValidator;
                    };
                    editValidator(value: _72.MsgEditValidator): {
                        typeUrl: string;
                        value: _72.MsgEditValidator;
                    };
                    delegate(value: _72.MsgDelegate): {
                        typeUrl: string;
                        value: _72.MsgDelegate;
                    };
                    beginRedelegate(value: _72.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _72.MsgBeginRedelegate;
                    };
                    undelegate(value: _72.MsgUndelegate): {
                        typeUrl: string;
                        value: _72.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _72.MsgCreateValidator) => _72.MsgCreateValidatorAmino;
                    fromAmino: (object: _72.MsgCreateValidatorAmino) => _72.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _72.MsgEditValidator) => _72.MsgEditValidatorAmino;
                    fromAmino: (object: _72.MsgEditValidatorAmino) => _72.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _72.MsgDelegate) => _72.MsgDelegateAmino;
                    fromAmino: (object: _72.MsgDelegateAmino) => _72.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _72.MsgBeginRedelegate) => _72.MsgBeginRedelegateAmino;
                    fromAmino: (object: _72.MsgBeginRedelegateAmino) => _72.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _72.MsgUndelegate) => _72.MsgUndelegateAmino;
                    fromAmino: (object: _72.MsgUndelegateAmino) => _72.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _72.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgCreateValidator;
                fromPartial(object: Partial<_72.MsgCreateValidator>): _72.MsgCreateValidator;
                fromAmino(object: _72.MsgCreateValidatorAmino): _72.MsgCreateValidator;
                toAmino(message: _72.MsgCreateValidator): _72.MsgCreateValidatorAmino;
                fromAminoMsg(object: _72.MsgCreateValidatorAminoMsg): _72.MsgCreateValidator;
                toAminoMsg(message: _72.MsgCreateValidator): _72.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _72.MsgCreateValidatorProtoMsg): _72.MsgCreateValidator;
                toProto(message: _72.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _72.MsgCreateValidator): _72.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _72.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _72.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_72.MsgCreateValidatorResponse>): _72.MsgCreateValidatorResponse;
                fromAmino(_: _72.MsgCreateValidatorResponseAmino): _72.MsgCreateValidatorResponse;
                toAmino(_: _72.MsgCreateValidatorResponse): _72.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _72.MsgCreateValidatorResponseAminoMsg): _72.MsgCreateValidatorResponse;
                toAminoMsg(message: _72.MsgCreateValidatorResponse): _72.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _72.MsgCreateValidatorResponseProtoMsg): _72.MsgCreateValidatorResponse;
                toProto(message: _72.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _72.MsgCreateValidatorResponse): _72.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _72.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgEditValidator;
                fromPartial(object: Partial<_72.MsgEditValidator>): _72.MsgEditValidator;
                fromAmino(object: _72.MsgEditValidatorAmino): _72.MsgEditValidator;
                toAmino(message: _72.MsgEditValidator): _72.MsgEditValidatorAmino;
                fromAminoMsg(object: _72.MsgEditValidatorAminoMsg): _72.MsgEditValidator;
                toAminoMsg(message: _72.MsgEditValidator): _72.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _72.MsgEditValidatorProtoMsg): _72.MsgEditValidator;
                toProto(message: _72.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _72.MsgEditValidator): _72.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _72.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _72.MsgEditValidatorResponse;
                fromPartial(_: Partial<_72.MsgEditValidatorResponse>): _72.MsgEditValidatorResponse;
                fromAmino(_: _72.MsgEditValidatorResponseAmino): _72.MsgEditValidatorResponse;
                toAmino(_: _72.MsgEditValidatorResponse): _72.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _72.MsgEditValidatorResponseAminoMsg): _72.MsgEditValidatorResponse;
                toAminoMsg(message: _72.MsgEditValidatorResponse): _72.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _72.MsgEditValidatorResponseProtoMsg): _72.MsgEditValidatorResponse;
                toProto(message: _72.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _72.MsgEditValidatorResponse): _72.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _72.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgDelegate;
                fromPartial(object: Partial<_72.MsgDelegate>): _72.MsgDelegate;
                fromAmino(object: _72.MsgDelegateAmino): _72.MsgDelegate;
                toAmino(message: _72.MsgDelegate): _72.MsgDelegateAmino;
                fromAminoMsg(object: _72.MsgDelegateAminoMsg): _72.MsgDelegate;
                toAminoMsg(message: _72.MsgDelegate): _72.MsgDelegateAminoMsg;
                fromProtoMsg(message: _72.MsgDelegateProtoMsg): _72.MsgDelegate;
                toProto(message: _72.MsgDelegate): Uint8Array;
                toProtoMsg(message: _72.MsgDelegate): _72.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _72.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _72.MsgDelegateResponse;
                fromPartial(_: Partial<_72.MsgDelegateResponse>): _72.MsgDelegateResponse;
                fromAmino(_: _72.MsgDelegateResponseAmino): _72.MsgDelegateResponse;
                toAmino(_: _72.MsgDelegateResponse): _72.MsgDelegateResponseAmino;
                fromAminoMsg(object: _72.MsgDelegateResponseAminoMsg): _72.MsgDelegateResponse;
                toAminoMsg(message: _72.MsgDelegateResponse): _72.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _72.MsgDelegateResponseProtoMsg): _72.MsgDelegateResponse;
                toProto(message: _72.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _72.MsgDelegateResponse): _72.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _72.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgBeginRedelegate;
                fromPartial(object: Partial<_72.MsgBeginRedelegate>): _72.MsgBeginRedelegate;
                fromAmino(object: _72.MsgBeginRedelegateAmino): _72.MsgBeginRedelegate;
                toAmino(message: _72.MsgBeginRedelegate): _72.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _72.MsgBeginRedelegateAminoMsg): _72.MsgBeginRedelegate;
                toAminoMsg(message: _72.MsgBeginRedelegate): _72.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _72.MsgBeginRedelegateProtoMsg): _72.MsgBeginRedelegate;
                toProto(message: _72.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _72.MsgBeginRedelegate): _72.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _72.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_72.MsgBeginRedelegateResponse>): _72.MsgBeginRedelegateResponse;
                fromAmino(object: _72.MsgBeginRedelegateResponseAmino): _72.MsgBeginRedelegateResponse;
                toAmino(message: _72.MsgBeginRedelegateResponse): _72.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _72.MsgBeginRedelegateResponseAminoMsg): _72.MsgBeginRedelegateResponse;
                toAminoMsg(message: _72.MsgBeginRedelegateResponse): _72.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _72.MsgBeginRedelegateResponseProtoMsg): _72.MsgBeginRedelegateResponse;
                toProto(message: _72.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _72.MsgBeginRedelegateResponse): _72.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _72.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgUndelegate;
                fromPartial(object: Partial<_72.MsgUndelegate>): _72.MsgUndelegate;
                fromAmino(object: _72.MsgUndelegateAmino): _72.MsgUndelegate;
                toAmino(message: _72.MsgUndelegate): _72.MsgUndelegateAmino;
                fromAminoMsg(object: _72.MsgUndelegateAminoMsg): _72.MsgUndelegate;
                toAminoMsg(message: _72.MsgUndelegate): _72.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _72.MsgUndelegateProtoMsg): _72.MsgUndelegate;
                toProto(message: _72.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _72.MsgUndelegate): _72.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _72.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgUndelegateResponse;
                fromPartial(object: Partial<_72.MsgUndelegateResponse>): _72.MsgUndelegateResponse;
                fromAmino(object: _72.MsgUndelegateResponseAmino): _72.MsgUndelegateResponse;
                toAmino(message: _72.MsgUndelegateResponse): _72.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _72.MsgUndelegateResponseAminoMsg): _72.MsgUndelegateResponse;
                toAminoMsg(message: _72.MsgUndelegateResponse): _72.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _72.MsgUndelegateResponseProtoMsg): _72.MsgUndelegateResponse;
                toProto(message: _72.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _72.MsgUndelegateResponse): _72.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _71.BondStatus;
            bondStatusToJSON(object: _71.BondStatus): string;
            BondStatus: typeof _71.BondStatus;
            BondStatusSDKType: typeof _71.BondStatus;
            BondStatusAmino: typeof _71.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _71.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.HistoricalInfo;
                fromPartial(object: Partial<_71.HistoricalInfo>): _71.HistoricalInfo;
                fromAmino(object: _71.HistoricalInfoAmino): _71.HistoricalInfo;
                toAmino(message: _71.HistoricalInfo): _71.HistoricalInfoAmino;
                fromAminoMsg(object: _71.HistoricalInfoAminoMsg): _71.HistoricalInfo;
                toAminoMsg(message: _71.HistoricalInfo): _71.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _71.HistoricalInfoProtoMsg): _71.HistoricalInfo;
                toProto(message: _71.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _71.HistoricalInfo): _71.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _71.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.CommissionRates;
                fromPartial(object: Partial<_71.CommissionRates>): _71.CommissionRates;
                fromAmino(object: _71.CommissionRatesAmino): _71.CommissionRates;
                toAmino(message: _71.CommissionRates): _71.CommissionRatesAmino;
                fromAminoMsg(object: _71.CommissionRatesAminoMsg): _71.CommissionRates;
                toAminoMsg(message: _71.CommissionRates): _71.CommissionRatesAminoMsg;
                fromProtoMsg(message: _71.CommissionRatesProtoMsg): _71.CommissionRates;
                toProto(message: _71.CommissionRates): Uint8Array;
                toProtoMsg(message: _71.CommissionRates): _71.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _71.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Commission;
                fromPartial(object: Partial<_71.Commission>): _71.Commission;
                fromAmino(object: _71.CommissionAmino): _71.Commission;
                toAmino(message: _71.Commission): _71.CommissionAmino;
                fromAminoMsg(object: _71.CommissionAminoMsg): _71.Commission;
                toAminoMsg(message: _71.Commission): _71.CommissionAminoMsg;
                fromProtoMsg(message: _71.CommissionProtoMsg): _71.Commission;
                toProto(message: _71.Commission): Uint8Array;
                toProtoMsg(message: _71.Commission): _71.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _71.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Description;
                fromPartial(object: Partial<_71.Description>): _71.Description;
                fromAmino(object: _71.DescriptionAmino): _71.Description;
                toAmino(message: _71.Description): _71.DescriptionAmino;
                fromAminoMsg(object: _71.DescriptionAminoMsg): _71.Description;
                toAminoMsg(message: _71.Description): _71.DescriptionAminoMsg;
                fromProtoMsg(message: _71.DescriptionProtoMsg): _71.Description;
                toProto(message: _71.Description): Uint8Array;
                toProtoMsg(message: _71.Description): _71.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _71.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Validator;
                fromPartial(object: Partial<_71.Validator>): _71.Validator;
                fromAmino(object: _71.ValidatorAmino): _71.Validator;
                toAmino(message: _71.Validator): _71.ValidatorAmino;
                fromAminoMsg(object: _71.ValidatorAminoMsg): _71.Validator;
                toAminoMsg(message: _71.Validator): _71.ValidatorAminoMsg;
                fromProtoMsg(message: _71.ValidatorProtoMsg): _71.Validator;
                toProto(message: _71.Validator): Uint8Array;
                toProtoMsg(message: _71.Validator): _71.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _71.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.ValAddresses;
                fromPartial(object: Partial<_71.ValAddresses>): _71.ValAddresses;
                fromAmino(object: _71.ValAddressesAmino): _71.ValAddresses;
                toAmino(message: _71.ValAddresses): _71.ValAddressesAmino;
                fromAminoMsg(object: _71.ValAddressesAminoMsg): _71.ValAddresses;
                toAminoMsg(message: _71.ValAddresses): _71.ValAddressesAminoMsg;
                fromProtoMsg(message: _71.ValAddressesProtoMsg): _71.ValAddresses;
                toProto(message: _71.ValAddresses): Uint8Array;
                toProtoMsg(message: _71.ValAddresses): _71.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _71.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.DVPair;
                fromPartial(object: Partial<_71.DVPair>): _71.DVPair;
                fromAmino(object: _71.DVPairAmino): _71.DVPair;
                toAmino(message: _71.DVPair): _71.DVPairAmino;
                fromAminoMsg(object: _71.DVPairAminoMsg): _71.DVPair;
                toAminoMsg(message: _71.DVPair): _71.DVPairAminoMsg;
                fromProtoMsg(message: _71.DVPairProtoMsg): _71.DVPair;
                toProto(message: _71.DVPair): Uint8Array;
                toProtoMsg(message: _71.DVPair): _71.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _71.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.DVPairs;
                fromPartial(object: Partial<_71.DVPairs>): _71.DVPairs;
                fromAmino(object: _71.DVPairsAmino): _71.DVPairs;
                toAmino(message: _71.DVPairs): _71.DVPairsAmino;
                fromAminoMsg(object: _71.DVPairsAminoMsg): _71.DVPairs;
                toAminoMsg(message: _71.DVPairs): _71.DVPairsAminoMsg;
                fromProtoMsg(message: _71.DVPairsProtoMsg): _71.DVPairs;
                toProto(message: _71.DVPairs): Uint8Array;
                toProtoMsg(message: _71.DVPairs): _71.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _71.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.DVVTriplet;
                fromPartial(object: Partial<_71.DVVTriplet>): _71.DVVTriplet;
                fromAmino(object: _71.DVVTripletAmino): _71.DVVTriplet;
                toAmino(message: _71.DVVTriplet): _71.DVVTripletAmino;
                fromAminoMsg(object: _71.DVVTripletAminoMsg): _71.DVVTriplet;
                toAminoMsg(message: _71.DVVTriplet): _71.DVVTripletAminoMsg;
                fromProtoMsg(message: _71.DVVTripletProtoMsg): _71.DVVTriplet;
                toProto(message: _71.DVVTriplet): Uint8Array;
                toProtoMsg(message: _71.DVVTriplet): _71.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _71.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.DVVTriplets;
                fromPartial(object: Partial<_71.DVVTriplets>): _71.DVVTriplets;
                fromAmino(object: _71.DVVTripletsAmino): _71.DVVTriplets;
                toAmino(message: _71.DVVTriplets): _71.DVVTripletsAmino;
                fromAminoMsg(object: _71.DVVTripletsAminoMsg): _71.DVVTriplets;
                toAminoMsg(message: _71.DVVTriplets): _71.DVVTripletsAminoMsg;
                fromProtoMsg(message: _71.DVVTripletsProtoMsg): _71.DVVTriplets;
                toProto(message: _71.DVVTriplets): Uint8Array;
                toProtoMsg(message: _71.DVVTriplets): _71.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _71.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Delegation;
                fromPartial(object: Partial<_71.Delegation>): _71.Delegation;
                fromAmino(object: _71.DelegationAmino): _71.Delegation;
                toAmino(message: _71.Delegation): _71.DelegationAmino;
                fromAminoMsg(object: _71.DelegationAminoMsg): _71.Delegation;
                toAminoMsg(message: _71.Delegation): _71.DelegationAminoMsg;
                fromProtoMsg(message: _71.DelegationProtoMsg): _71.Delegation;
                toProto(message: _71.Delegation): Uint8Array;
                toProtoMsg(message: _71.Delegation): _71.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _71.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.UnbondingDelegation;
                fromPartial(object: Partial<_71.UnbondingDelegation>): _71.UnbondingDelegation;
                fromAmino(object: _71.UnbondingDelegationAmino): _71.UnbondingDelegation;
                toAmino(message: _71.UnbondingDelegation): _71.UnbondingDelegationAmino;
                fromAminoMsg(object: _71.UnbondingDelegationAminoMsg): _71.UnbondingDelegation;
                toAminoMsg(message: _71.UnbondingDelegation): _71.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _71.UnbondingDelegationProtoMsg): _71.UnbondingDelegation;
                toProto(message: _71.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _71.UnbondingDelegation): _71.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _71.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.UnbondingDelegationEntry;
                fromPartial(object: Partial<_71.UnbondingDelegationEntry>): _71.UnbondingDelegationEntry;
                fromAmino(object: _71.UnbondingDelegationEntryAmino): _71.UnbondingDelegationEntry;
                toAmino(message: _71.UnbondingDelegationEntry): _71.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _71.UnbondingDelegationEntryAminoMsg): _71.UnbondingDelegationEntry;
                toAminoMsg(message: _71.UnbondingDelegationEntry): _71.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _71.UnbondingDelegationEntryProtoMsg): _71.UnbondingDelegationEntry;
                toProto(message: _71.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _71.UnbondingDelegationEntry): _71.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _71.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.RedelegationEntry;
                fromPartial(object: Partial<_71.RedelegationEntry>): _71.RedelegationEntry;
                fromAmino(object: _71.RedelegationEntryAmino): _71.RedelegationEntry;
                toAmino(message: _71.RedelegationEntry): _71.RedelegationEntryAmino;
                fromAminoMsg(object: _71.RedelegationEntryAminoMsg): _71.RedelegationEntry;
                toAminoMsg(message: _71.RedelegationEntry): _71.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _71.RedelegationEntryProtoMsg): _71.RedelegationEntry;
                toProto(message: _71.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _71.RedelegationEntry): _71.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _71.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Redelegation;
                fromPartial(object: Partial<_71.Redelegation>): _71.Redelegation;
                fromAmino(object: _71.RedelegationAmino): _71.Redelegation;
                toAmino(message: _71.Redelegation): _71.RedelegationAmino;
                fromAminoMsg(object: _71.RedelegationAminoMsg): _71.Redelegation;
                toAminoMsg(message: _71.Redelegation): _71.RedelegationAminoMsg;
                fromProtoMsg(message: _71.RedelegationProtoMsg): _71.Redelegation;
                toProto(message: _71.Redelegation): Uint8Array;
                toProtoMsg(message: _71.Redelegation): _71.RedelegationProtoMsg;
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
            DelegationResponse: {
                typeUrl: string;
                encode(message: _71.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.DelegationResponse;
                fromPartial(object: Partial<_71.DelegationResponse>): _71.DelegationResponse;
                fromAmino(object: _71.DelegationResponseAmino): _71.DelegationResponse;
                toAmino(message: _71.DelegationResponse): _71.DelegationResponseAmino;
                fromAminoMsg(object: _71.DelegationResponseAminoMsg): _71.DelegationResponse;
                toAminoMsg(message: _71.DelegationResponse): _71.DelegationResponseAminoMsg;
                fromProtoMsg(message: _71.DelegationResponseProtoMsg): _71.DelegationResponse;
                toProto(message: _71.DelegationResponse): Uint8Array;
                toProtoMsg(message: _71.DelegationResponse): _71.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _71.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.RedelegationEntryResponse;
                fromPartial(object: Partial<_71.RedelegationEntryResponse>): _71.RedelegationEntryResponse;
                fromAmino(object: _71.RedelegationEntryResponseAmino): _71.RedelegationEntryResponse;
                toAmino(message: _71.RedelegationEntryResponse): _71.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _71.RedelegationEntryResponseAminoMsg): _71.RedelegationEntryResponse;
                toAminoMsg(message: _71.RedelegationEntryResponse): _71.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _71.RedelegationEntryResponseProtoMsg): _71.RedelegationEntryResponse;
                toProto(message: _71.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _71.RedelegationEntryResponse): _71.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _71.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.RedelegationResponse;
                fromPartial(object: Partial<_71.RedelegationResponse>): _71.RedelegationResponse;
                fromAmino(object: _71.RedelegationResponseAmino): _71.RedelegationResponse;
                toAmino(message: _71.RedelegationResponse): _71.RedelegationResponseAmino;
                fromAminoMsg(object: _71.RedelegationResponseAminoMsg): _71.RedelegationResponse;
                toAminoMsg(message: _71.RedelegationResponse): _71.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _71.RedelegationResponseProtoMsg): _71.RedelegationResponse;
                toProto(message: _71.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _71.RedelegationResponse): _71.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _71.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Pool;
                fromPartial(object: Partial<_71.Pool>): _71.Pool;
                fromAmino(object: _71.PoolAmino): _71.Pool;
                toAmino(message: _71.Pool): _71.PoolAmino;
                fromAminoMsg(object: _71.PoolAminoMsg): _71.Pool;
                toAminoMsg(message: _71.Pool): _71.PoolAminoMsg;
                fromProtoMsg(message: _71.PoolProtoMsg): _71.Pool;
                toProto(message: _71.Pool): Uint8Array;
                toProtoMsg(message: _71.Pool): _71.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _70.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryValidatorsRequest;
                fromPartial(object: Partial<_70.QueryValidatorsRequest>): _70.QueryValidatorsRequest;
                fromAmino(object: _70.QueryValidatorsRequestAmino): _70.QueryValidatorsRequest;
                toAmino(message: _70.QueryValidatorsRequest): _70.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _70.QueryValidatorsRequestAminoMsg): _70.QueryValidatorsRequest;
                toAminoMsg(message: _70.QueryValidatorsRequest): _70.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _70.QueryValidatorsRequestProtoMsg): _70.QueryValidatorsRequest;
                toProto(message: _70.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _70.QueryValidatorsRequest): _70.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _70.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryValidatorsResponse;
                fromPartial(object: Partial<_70.QueryValidatorsResponse>): _70.QueryValidatorsResponse;
                fromAmino(object: _70.QueryValidatorsResponseAmino): _70.QueryValidatorsResponse;
                toAmino(message: _70.QueryValidatorsResponse): _70.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _70.QueryValidatorsResponseAminoMsg): _70.QueryValidatorsResponse;
                toAminoMsg(message: _70.QueryValidatorsResponse): _70.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _70.QueryValidatorsResponseProtoMsg): _70.QueryValidatorsResponse;
                toProto(message: _70.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _70.QueryValidatorsResponse): _70.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _70.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryValidatorRequest;
                fromPartial(object: Partial<_70.QueryValidatorRequest>): _70.QueryValidatorRequest;
                fromAmino(object: _70.QueryValidatorRequestAmino): _70.QueryValidatorRequest;
                toAmino(message: _70.QueryValidatorRequest): _70.QueryValidatorRequestAmino;
                fromAminoMsg(object: _70.QueryValidatorRequestAminoMsg): _70.QueryValidatorRequest;
                toAminoMsg(message: _70.QueryValidatorRequest): _70.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _70.QueryValidatorRequestProtoMsg): _70.QueryValidatorRequest;
                toProto(message: _70.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _70.QueryValidatorRequest): _70.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _70.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryValidatorResponse;
                fromPartial(object: Partial<_70.QueryValidatorResponse>): _70.QueryValidatorResponse;
                fromAmino(object: _70.QueryValidatorResponseAmino): _70.QueryValidatorResponse;
                toAmino(message: _70.QueryValidatorResponse): _70.QueryValidatorResponseAmino;
                fromAminoMsg(object: _70.QueryValidatorResponseAminoMsg): _70.QueryValidatorResponse;
                toAminoMsg(message: _70.QueryValidatorResponse): _70.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _70.QueryValidatorResponseProtoMsg): _70.QueryValidatorResponse;
                toProto(message: _70.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _70.QueryValidatorResponse): _70.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _70.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_70.QueryValidatorDelegationsRequest>): _70.QueryValidatorDelegationsRequest;
                fromAmino(object: _70.QueryValidatorDelegationsRequestAmino): _70.QueryValidatorDelegationsRequest;
                toAmino(message: _70.QueryValidatorDelegationsRequest): _70.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _70.QueryValidatorDelegationsRequestAminoMsg): _70.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _70.QueryValidatorDelegationsRequest): _70.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _70.QueryValidatorDelegationsRequestProtoMsg): _70.QueryValidatorDelegationsRequest;
                toProto(message: _70.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _70.QueryValidatorDelegationsRequest): _70.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _70.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_70.QueryValidatorDelegationsResponse>): _70.QueryValidatorDelegationsResponse;
                fromAmino(object: _70.QueryValidatorDelegationsResponseAmino): _70.QueryValidatorDelegationsResponse;
                toAmino(message: _70.QueryValidatorDelegationsResponse): _70.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _70.QueryValidatorDelegationsResponseAminoMsg): _70.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _70.QueryValidatorDelegationsResponse): _70.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _70.QueryValidatorDelegationsResponseProtoMsg): _70.QueryValidatorDelegationsResponse;
                toProto(message: _70.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _70.QueryValidatorDelegationsResponse): _70.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _70.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_70.QueryValidatorUnbondingDelegationsRequest>): _70.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _70.QueryValidatorUnbondingDelegationsRequestAmino): _70.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _70.QueryValidatorUnbondingDelegationsRequest): _70.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _70.QueryValidatorUnbondingDelegationsRequestAminoMsg): _70.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _70.QueryValidatorUnbondingDelegationsRequest): _70.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _70.QueryValidatorUnbondingDelegationsRequestProtoMsg): _70.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _70.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _70.QueryValidatorUnbondingDelegationsRequest): _70.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _70.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_70.QueryValidatorUnbondingDelegationsResponse>): _70.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _70.QueryValidatorUnbondingDelegationsResponseAmino): _70.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _70.QueryValidatorUnbondingDelegationsResponse): _70.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _70.QueryValidatorUnbondingDelegationsResponseAminoMsg): _70.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _70.QueryValidatorUnbondingDelegationsResponse): _70.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _70.QueryValidatorUnbondingDelegationsResponseProtoMsg): _70.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _70.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _70.QueryValidatorUnbondingDelegationsResponse): _70.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _70.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryDelegationRequest;
                fromPartial(object: Partial<_70.QueryDelegationRequest>): _70.QueryDelegationRequest;
                fromAmino(object: _70.QueryDelegationRequestAmino): _70.QueryDelegationRequest;
                toAmino(message: _70.QueryDelegationRequest): _70.QueryDelegationRequestAmino;
                fromAminoMsg(object: _70.QueryDelegationRequestAminoMsg): _70.QueryDelegationRequest;
                toAminoMsg(message: _70.QueryDelegationRequest): _70.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _70.QueryDelegationRequestProtoMsg): _70.QueryDelegationRequest;
                toProto(message: _70.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _70.QueryDelegationRequest): _70.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _70.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryDelegationResponse;
                fromPartial(object: Partial<_70.QueryDelegationResponse>): _70.QueryDelegationResponse;
                fromAmino(object: _70.QueryDelegationResponseAmino): _70.QueryDelegationResponse;
                toAmino(message: _70.QueryDelegationResponse): _70.QueryDelegationResponseAmino;
                fromAminoMsg(object: _70.QueryDelegationResponseAminoMsg): _70.QueryDelegationResponse;
                toAminoMsg(message: _70.QueryDelegationResponse): _70.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _70.QueryDelegationResponseProtoMsg): _70.QueryDelegationResponse;
                toProto(message: _70.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _70.QueryDelegationResponse): _70.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _70.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_70.QueryUnbondingDelegationRequest>): _70.QueryUnbondingDelegationRequest;
                fromAmino(object: _70.QueryUnbondingDelegationRequestAmino): _70.QueryUnbondingDelegationRequest;
                toAmino(message: _70.QueryUnbondingDelegationRequest): _70.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _70.QueryUnbondingDelegationRequestAminoMsg): _70.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _70.QueryUnbondingDelegationRequest): _70.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _70.QueryUnbondingDelegationRequestProtoMsg): _70.QueryUnbondingDelegationRequest;
                toProto(message: _70.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _70.QueryUnbondingDelegationRequest): _70.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _70.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_70.QueryUnbondingDelegationResponse>): _70.QueryUnbondingDelegationResponse;
                fromAmino(object: _70.QueryUnbondingDelegationResponseAmino): _70.QueryUnbondingDelegationResponse;
                toAmino(message: _70.QueryUnbondingDelegationResponse): _70.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _70.QueryUnbondingDelegationResponseAminoMsg): _70.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _70.QueryUnbondingDelegationResponse): _70.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _70.QueryUnbondingDelegationResponseProtoMsg): _70.QueryUnbondingDelegationResponse;
                toProto(message: _70.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _70.QueryUnbondingDelegationResponse): _70.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _70.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_70.QueryDelegatorDelegationsRequest>): _70.QueryDelegatorDelegationsRequest;
                fromAmino(object: _70.QueryDelegatorDelegationsRequestAmino): _70.QueryDelegatorDelegationsRequest;
                toAmino(message: _70.QueryDelegatorDelegationsRequest): _70.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _70.QueryDelegatorDelegationsRequestAminoMsg): _70.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _70.QueryDelegatorDelegationsRequest): _70.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _70.QueryDelegatorDelegationsRequestProtoMsg): _70.QueryDelegatorDelegationsRequest;
                toProto(message: _70.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _70.QueryDelegatorDelegationsRequest): _70.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _70.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_70.QueryDelegatorDelegationsResponse>): _70.QueryDelegatorDelegationsResponse;
                fromAmino(object: _70.QueryDelegatorDelegationsResponseAmino): _70.QueryDelegatorDelegationsResponse;
                toAmino(message: _70.QueryDelegatorDelegationsResponse): _70.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _70.QueryDelegatorDelegationsResponseAminoMsg): _70.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _70.QueryDelegatorDelegationsResponse): _70.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _70.QueryDelegatorDelegationsResponseProtoMsg): _70.QueryDelegatorDelegationsResponse;
                toProto(message: _70.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _70.QueryDelegatorDelegationsResponse): _70.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _70.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_70.QueryDelegatorUnbondingDelegationsRequest>): _70.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _70.QueryDelegatorUnbondingDelegationsRequestAmino): _70.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _70.QueryDelegatorUnbondingDelegationsRequest): _70.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _70.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _70.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _70.QueryDelegatorUnbondingDelegationsRequest): _70.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _70.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _70.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _70.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _70.QueryDelegatorUnbondingDelegationsRequest): _70.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _70.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_70.QueryDelegatorUnbondingDelegationsResponse>): _70.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _70.QueryDelegatorUnbondingDelegationsResponseAmino): _70.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _70.QueryDelegatorUnbondingDelegationsResponse): _70.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _70.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _70.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _70.QueryDelegatorUnbondingDelegationsResponse): _70.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _70.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _70.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _70.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _70.QueryDelegatorUnbondingDelegationsResponse): _70.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _70.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryRedelegationsRequest;
                fromPartial(object: Partial<_70.QueryRedelegationsRequest>): _70.QueryRedelegationsRequest;
                fromAmino(object: _70.QueryRedelegationsRequestAmino): _70.QueryRedelegationsRequest;
                toAmino(message: _70.QueryRedelegationsRequest): _70.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _70.QueryRedelegationsRequestAminoMsg): _70.QueryRedelegationsRequest;
                toAminoMsg(message: _70.QueryRedelegationsRequest): _70.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _70.QueryRedelegationsRequestProtoMsg): _70.QueryRedelegationsRequest;
                toProto(message: _70.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _70.QueryRedelegationsRequest): _70.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _70.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryRedelegationsResponse;
                fromPartial(object: Partial<_70.QueryRedelegationsResponse>): _70.QueryRedelegationsResponse;
                fromAmino(object: _70.QueryRedelegationsResponseAmino): _70.QueryRedelegationsResponse;
                toAmino(message: _70.QueryRedelegationsResponse): _70.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _70.QueryRedelegationsResponseAminoMsg): _70.QueryRedelegationsResponse;
                toAminoMsg(message: _70.QueryRedelegationsResponse): _70.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _70.QueryRedelegationsResponseProtoMsg): _70.QueryRedelegationsResponse;
                toProto(message: _70.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _70.QueryRedelegationsResponse): _70.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _70.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_70.QueryDelegatorValidatorsRequest>): _70.QueryDelegatorValidatorsRequest;
                fromAmino(object: _70.QueryDelegatorValidatorsRequestAmino): _70.QueryDelegatorValidatorsRequest;
                toAmino(message: _70.QueryDelegatorValidatorsRequest): _70.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _70.QueryDelegatorValidatorsRequestAminoMsg): _70.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _70.QueryDelegatorValidatorsRequest): _70.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _70.QueryDelegatorValidatorsRequestProtoMsg): _70.QueryDelegatorValidatorsRequest;
                toProto(message: _70.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _70.QueryDelegatorValidatorsRequest): _70.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _70.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_70.QueryDelegatorValidatorsResponse>): _70.QueryDelegatorValidatorsResponse;
                fromAmino(object: _70.QueryDelegatorValidatorsResponseAmino): _70.QueryDelegatorValidatorsResponse;
                toAmino(message: _70.QueryDelegatorValidatorsResponse): _70.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _70.QueryDelegatorValidatorsResponseAminoMsg): _70.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _70.QueryDelegatorValidatorsResponse): _70.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _70.QueryDelegatorValidatorsResponseProtoMsg): _70.QueryDelegatorValidatorsResponse;
                toProto(message: _70.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _70.QueryDelegatorValidatorsResponse): _70.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _70.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_70.QueryDelegatorValidatorRequest>): _70.QueryDelegatorValidatorRequest;
                fromAmino(object: _70.QueryDelegatorValidatorRequestAmino): _70.QueryDelegatorValidatorRequest;
                toAmino(message: _70.QueryDelegatorValidatorRequest): _70.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _70.QueryDelegatorValidatorRequestAminoMsg): _70.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _70.QueryDelegatorValidatorRequest): _70.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _70.QueryDelegatorValidatorRequestProtoMsg): _70.QueryDelegatorValidatorRequest;
                toProto(message: _70.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _70.QueryDelegatorValidatorRequest): _70.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _70.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_70.QueryDelegatorValidatorResponse>): _70.QueryDelegatorValidatorResponse;
                fromAmino(object: _70.QueryDelegatorValidatorResponseAmino): _70.QueryDelegatorValidatorResponse;
                toAmino(message: _70.QueryDelegatorValidatorResponse): _70.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _70.QueryDelegatorValidatorResponseAminoMsg): _70.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _70.QueryDelegatorValidatorResponse): _70.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _70.QueryDelegatorValidatorResponseProtoMsg): _70.QueryDelegatorValidatorResponse;
                toProto(message: _70.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _70.QueryDelegatorValidatorResponse): _70.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _70.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_70.QueryHistoricalInfoRequest>): _70.QueryHistoricalInfoRequest;
                fromAmino(object: _70.QueryHistoricalInfoRequestAmino): _70.QueryHistoricalInfoRequest;
                toAmino(message: _70.QueryHistoricalInfoRequest): _70.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _70.QueryHistoricalInfoRequestAminoMsg): _70.QueryHistoricalInfoRequest;
                toAminoMsg(message: _70.QueryHistoricalInfoRequest): _70.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _70.QueryHistoricalInfoRequestProtoMsg): _70.QueryHistoricalInfoRequest;
                toProto(message: _70.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _70.QueryHistoricalInfoRequest): _70.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _70.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_70.QueryHistoricalInfoResponse>): _70.QueryHistoricalInfoResponse;
                fromAmino(object: _70.QueryHistoricalInfoResponseAmino): _70.QueryHistoricalInfoResponse;
                toAmino(message: _70.QueryHistoricalInfoResponse): _70.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _70.QueryHistoricalInfoResponseAminoMsg): _70.QueryHistoricalInfoResponse;
                toAminoMsg(message: _70.QueryHistoricalInfoResponse): _70.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _70.QueryHistoricalInfoResponseProtoMsg): _70.QueryHistoricalInfoResponse;
                toProto(message: _70.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _70.QueryHistoricalInfoResponse): _70.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _70.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _70.QueryPoolRequest;
                fromPartial(_: Partial<_70.QueryPoolRequest>): _70.QueryPoolRequest;
                fromAmino(_: _70.QueryPoolRequestAmino): _70.QueryPoolRequest;
                toAmino(_: _70.QueryPoolRequest): _70.QueryPoolRequestAmino;
                fromAminoMsg(object: _70.QueryPoolRequestAminoMsg): _70.QueryPoolRequest;
                toAminoMsg(message: _70.QueryPoolRequest): _70.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _70.QueryPoolRequestProtoMsg): _70.QueryPoolRequest;
                toProto(message: _70.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _70.QueryPoolRequest): _70.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _70.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryPoolResponse;
                fromPartial(object: Partial<_70.QueryPoolResponse>): _70.QueryPoolResponse;
                fromAmino(object: _70.QueryPoolResponseAmino): _70.QueryPoolResponse;
                toAmino(message: _70.QueryPoolResponse): _70.QueryPoolResponseAmino;
                fromAminoMsg(object: _70.QueryPoolResponseAminoMsg): _70.QueryPoolResponse;
                toAminoMsg(message: _70.QueryPoolResponse): _70.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _70.QueryPoolResponseProtoMsg): _70.QueryPoolResponse;
                toProto(message: _70.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _70.QueryPoolResponse): _70.QueryPoolResponseProtoMsg;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _69.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.LastValidatorPower;
                fromPartial(object: Partial<_69.LastValidatorPower>): _69.LastValidatorPower;
                fromAmino(object: _69.LastValidatorPowerAmino): _69.LastValidatorPower;
                toAmino(message: _69.LastValidatorPower): _69.LastValidatorPowerAmino;
                fromAminoMsg(object: _69.LastValidatorPowerAminoMsg): _69.LastValidatorPower;
                toAminoMsg(message: _69.LastValidatorPower): _69.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _69.LastValidatorPowerProtoMsg): _69.LastValidatorPower;
                toProto(message: _69.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _69.LastValidatorPower): _69.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _68.AuthorizationType;
            authorizationTypeToJSON(object: _68.AuthorizationType): string;
            AuthorizationType: typeof _68.AuthorizationType;
            AuthorizationTypeSDKType: typeof _68.AuthorizationType;
            AuthorizationTypeAmino: typeof _68.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _68.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.StakeAuthorization;
                fromPartial(object: Partial<_68.StakeAuthorization>): _68.StakeAuthorization;
                fromAmino(object: _68.StakeAuthorizationAmino): _68.StakeAuthorization;
                toAmino(message: _68.StakeAuthorization): _68.StakeAuthorizationAmino;
                fromAminoMsg(object: _68.StakeAuthorizationAminoMsg): _68.StakeAuthorization;
                toAminoMsg(message: _68.StakeAuthorization): _68.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _68.StakeAuthorizationProtoMsg): _68.StakeAuthorization;
                toProto(message: _68.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _68.StakeAuthorization): _68.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _68.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.StakeAuthorization_Validators;
                fromPartial(object: Partial<_68.StakeAuthorization_Validators>): _68.StakeAuthorization_Validators;
                fromAmino(object: _68.StakeAuthorization_ValidatorsAmino): _68.StakeAuthorization_Validators;
                toAmino(message: _68.StakeAuthorization_Validators): _68.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _68.StakeAuthorization_ValidatorsAminoMsg): _68.StakeAuthorization_Validators;
                toAminoMsg(message: _68.StakeAuthorization_Validators): _68.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _68.StakeAuthorization_ValidatorsProtoMsg): _68.StakeAuthorization_Validators;
                toProto(message: _68.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _68.StakeAuthorization_Validators): _68.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _73.SignMode;
                signModeToJSON(object: _73.SignMode): string;
                SignMode: typeof _73.SignMode;
                SignModeSDKType: typeof _73.SignMode;
                SignModeAmino: typeof _73.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _73.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.SignatureDescriptors;
                    fromPartial(object: Partial<_73.SignatureDescriptors>): _73.SignatureDescriptors;
                    fromAmino(object: _73.SignatureDescriptorsAmino): _73.SignatureDescriptors;
                    toAmino(message: _73.SignatureDescriptors): _73.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _73.SignatureDescriptorsAminoMsg): _73.SignatureDescriptors;
                    toAminoMsg(message: _73.SignatureDescriptors): _73.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _73.SignatureDescriptorsProtoMsg): _73.SignatureDescriptors;
                    toProto(message: _73.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _73.SignatureDescriptors): _73.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _73.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.SignatureDescriptor;
                    fromPartial(object: Partial<_73.SignatureDescriptor>): _73.SignatureDescriptor;
                    fromAmino(object: _73.SignatureDescriptorAmino): _73.SignatureDescriptor;
                    toAmino(message: _73.SignatureDescriptor): _73.SignatureDescriptorAmino;
                    fromAminoMsg(object: _73.SignatureDescriptorAminoMsg): _73.SignatureDescriptor;
                    toAminoMsg(message: _73.SignatureDescriptor): _73.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _73.SignatureDescriptorProtoMsg): _73.SignatureDescriptor;
                    toProto(message: _73.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _73.SignatureDescriptor): _73.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _73.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_73.SignatureDescriptor_Data>): _73.SignatureDescriptor_Data;
                    fromAmino(object: _73.SignatureDescriptor_DataAmino): _73.SignatureDescriptor_Data;
                    toAmino(message: _73.SignatureDescriptor_Data): _73.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _73.SignatureDescriptor_DataAminoMsg): _73.SignatureDescriptor_Data;
                    toAminoMsg(message: _73.SignatureDescriptor_Data): _73.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _73.SignatureDescriptor_DataProtoMsg): _73.SignatureDescriptor_Data;
                    toProto(message: _73.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _73.SignatureDescriptor_Data): _73.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _73.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_73.SignatureDescriptor_Data_Single>): _73.SignatureDescriptor_Data_Single;
                    fromAmino(object: _73.SignatureDescriptor_Data_SingleAmino): _73.SignatureDescriptor_Data_Single;
                    toAmino(message: _73.SignatureDescriptor_Data_Single): _73.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _73.SignatureDescriptor_Data_SingleAminoMsg): _73.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _73.SignatureDescriptor_Data_Single): _73.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _73.SignatureDescriptor_Data_SingleProtoMsg): _73.SignatureDescriptor_Data_Single;
                    toProto(message: _73.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _73.SignatureDescriptor_Data_Single): _73.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _73.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_73.SignatureDescriptor_Data_Multi>): _73.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _73.SignatureDescriptor_Data_MultiAmino): _73.SignatureDescriptor_Data_Multi;
                    toAmino(message: _73.SignatureDescriptor_Data_Multi): _73.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _73.SignatureDescriptor_Data_MultiAminoMsg): _73.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _73.SignatureDescriptor_Data_Multi): _73.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _73.SignatureDescriptor_Data_MultiProtoMsg): _73.SignatureDescriptor_Data_Multi;
                    toProto(message: _73.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _73.SignatureDescriptor_Data_Multi): _73.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _170.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _74.SimulateRequest): Promise<_74.SimulateResponse>;
                getTx(request: _74.GetTxRequest): Promise<_74.GetTxResponse>;
                broadcastTx(request: _74.BroadcastTxRequest): Promise<_74.BroadcastTxResponse>;
                getTxsEvent(request: _74.GetTxsEventRequest): Promise<_74.GetTxsEventResponse>;
                getBlockWithTxs(request: _74.GetBlockWithTxsRequest): Promise<_74.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _155.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _75.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.Tx;
                fromPartial(object: Partial<_75.Tx>): _75.Tx;
                fromAmino(object: _75.TxAmino): _75.Tx;
                toAmino(message: _75.Tx): _75.TxAmino;
                fromAminoMsg(object: _75.TxAminoMsg): _75.Tx;
                toAminoMsg(message: _75.Tx): _75.TxAminoMsg;
                fromProtoMsg(message: _75.TxProtoMsg): _75.Tx;
                toProto(message: _75.Tx): Uint8Array;
                toProtoMsg(message: _75.Tx): _75.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _75.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.TxRaw;
                fromPartial(object: Partial<_75.TxRaw>): _75.TxRaw;
                fromAmino(object: _75.TxRawAmino): _75.TxRaw;
                toAmino(message: _75.TxRaw): _75.TxRawAmino;
                fromAminoMsg(object: _75.TxRawAminoMsg): _75.TxRaw;
                toAminoMsg(message: _75.TxRaw): _75.TxRawAminoMsg;
                fromProtoMsg(message: _75.TxRawProtoMsg): _75.TxRaw;
                toProto(message: _75.TxRaw): Uint8Array;
                toProtoMsg(message: _75.TxRaw): _75.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _75.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.SignDoc;
                fromPartial(object: Partial<_75.SignDoc>): _75.SignDoc;
                fromAmino(object: _75.SignDocAmino): _75.SignDoc;
                toAmino(message: _75.SignDoc): _75.SignDocAmino;
                fromAminoMsg(object: _75.SignDocAminoMsg): _75.SignDoc;
                toAminoMsg(message: _75.SignDoc): _75.SignDocAminoMsg;
                fromProtoMsg(message: _75.SignDocProtoMsg): _75.SignDoc;
                toProto(message: _75.SignDoc): Uint8Array;
                toProtoMsg(message: _75.SignDoc): _75.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _75.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.TxBody;
                fromPartial(object: Partial<_75.TxBody>): _75.TxBody;
                fromAmino(object: _75.TxBodyAmino): _75.TxBody;
                toAmino(message: _75.TxBody): _75.TxBodyAmino;
                fromAminoMsg(object: _75.TxBodyAminoMsg): _75.TxBody;
                toAminoMsg(message: _75.TxBody): _75.TxBodyAminoMsg;
                fromProtoMsg(message: _75.TxBodyProtoMsg): _75.TxBody;
                toProto(message: _75.TxBody): Uint8Array;
                toProtoMsg(message: _75.TxBody): _75.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _75.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.AuthInfo;
                fromPartial(object: Partial<_75.AuthInfo>): _75.AuthInfo;
                fromAmino(object: _75.AuthInfoAmino): _75.AuthInfo;
                toAmino(message: _75.AuthInfo): _75.AuthInfoAmino;
                fromAminoMsg(object: _75.AuthInfoAminoMsg): _75.AuthInfo;
                toAminoMsg(message: _75.AuthInfo): _75.AuthInfoAminoMsg;
                fromProtoMsg(message: _75.AuthInfoProtoMsg): _75.AuthInfo;
                toProto(message: _75.AuthInfo): Uint8Array;
                toProtoMsg(message: _75.AuthInfo): _75.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _75.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.SignerInfo;
                fromPartial(object: Partial<_75.SignerInfo>): _75.SignerInfo;
                fromAmino(object: _75.SignerInfoAmino): _75.SignerInfo;
                toAmino(message: _75.SignerInfo): _75.SignerInfoAmino;
                fromAminoMsg(object: _75.SignerInfoAminoMsg): _75.SignerInfo;
                toAminoMsg(message: _75.SignerInfo): _75.SignerInfoAminoMsg;
                fromProtoMsg(message: _75.SignerInfoProtoMsg): _75.SignerInfo;
                toProto(message: _75.SignerInfo): Uint8Array;
                toProtoMsg(message: _75.SignerInfo): _75.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _75.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.ModeInfo;
                fromPartial(object: Partial<_75.ModeInfo>): _75.ModeInfo;
                fromAmino(object: _75.ModeInfoAmino): _75.ModeInfo;
                toAmino(message: _75.ModeInfo): _75.ModeInfoAmino;
                fromAminoMsg(object: _75.ModeInfoAminoMsg): _75.ModeInfo;
                toAminoMsg(message: _75.ModeInfo): _75.ModeInfoAminoMsg;
                fromProtoMsg(message: _75.ModeInfoProtoMsg): _75.ModeInfo;
                toProto(message: _75.ModeInfo): Uint8Array;
                toProtoMsg(message: _75.ModeInfo): _75.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _75.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.ModeInfo_Single;
                fromPartial(object: Partial<_75.ModeInfo_Single>): _75.ModeInfo_Single;
                fromAmino(object: _75.ModeInfo_SingleAmino): _75.ModeInfo_Single;
                toAmino(message: _75.ModeInfo_Single): _75.ModeInfo_SingleAmino;
                fromAminoMsg(object: _75.ModeInfo_SingleAminoMsg): _75.ModeInfo_Single;
                toAminoMsg(message: _75.ModeInfo_Single): _75.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _75.ModeInfo_SingleProtoMsg): _75.ModeInfo_Single;
                toProto(message: _75.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _75.ModeInfo_Single): _75.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _75.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.ModeInfo_Multi;
                fromPartial(object: Partial<_75.ModeInfo_Multi>): _75.ModeInfo_Multi;
                fromAmino(object: _75.ModeInfo_MultiAmino): _75.ModeInfo_Multi;
                toAmino(message: _75.ModeInfo_Multi): _75.ModeInfo_MultiAmino;
                fromAminoMsg(object: _75.ModeInfo_MultiAminoMsg): _75.ModeInfo_Multi;
                toAminoMsg(message: _75.ModeInfo_Multi): _75.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _75.ModeInfo_MultiProtoMsg): _75.ModeInfo_Multi;
                toProto(message: _75.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _75.ModeInfo_Multi): _75.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _75.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.Fee;
                fromPartial(object: Partial<_75.Fee>): _75.Fee;
                fromAmino(object: _75.FeeAmino): _75.Fee;
                toAmino(message: _75.Fee): _75.FeeAmino;
                fromAminoMsg(object: _75.FeeAminoMsg): _75.Fee;
                toAminoMsg(message: _75.Fee): _75.FeeAminoMsg;
                fromProtoMsg(message: _75.FeeProtoMsg): _75.Fee;
                toProto(message: _75.Fee): Uint8Array;
                toProtoMsg(message: _75.Fee): _75.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _74.OrderBy;
            orderByToJSON(object: _74.OrderBy): string;
            broadcastModeFromJSON(object: any): _74.BroadcastMode;
            broadcastModeToJSON(object: _74.BroadcastMode): string;
            OrderBy: typeof _74.OrderBy;
            OrderBySDKType: typeof _74.OrderBy;
            OrderByAmino: typeof _74.OrderBy;
            BroadcastMode: typeof _74.BroadcastMode;
            BroadcastModeSDKType: typeof _74.BroadcastMode;
            BroadcastModeAmino: typeof _74.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _74.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.GetTxsEventRequest;
                fromPartial(object: Partial<_74.GetTxsEventRequest>): _74.GetTxsEventRequest;
                fromAmino(object: _74.GetTxsEventRequestAmino): _74.GetTxsEventRequest;
                toAmino(message: _74.GetTxsEventRequest): _74.GetTxsEventRequestAmino;
                fromAminoMsg(object: _74.GetTxsEventRequestAminoMsg): _74.GetTxsEventRequest;
                toAminoMsg(message: _74.GetTxsEventRequest): _74.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _74.GetTxsEventRequestProtoMsg): _74.GetTxsEventRequest;
                toProto(message: _74.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _74.GetTxsEventRequest): _74.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _74.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.GetTxsEventResponse;
                fromPartial(object: Partial<_74.GetTxsEventResponse>): _74.GetTxsEventResponse;
                fromAmino(object: _74.GetTxsEventResponseAmino): _74.GetTxsEventResponse;
                toAmino(message: _74.GetTxsEventResponse): _74.GetTxsEventResponseAmino;
                fromAminoMsg(object: _74.GetTxsEventResponseAminoMsg): _74.GetTxsEventResponse;
                toAminoMsg(message: _74.GetTxsEventResponse): _74.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _74.GetTxsEventResponseProtoMsg): _74.GetTxsEventResponse;
                toProto(message: _74.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _74.GetTxsEventResponse): _74.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _74.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.BroadcastTxRequest;
                fromPartial(object: Partial<_74.BroadcastTxRequest>): _74.BroadcastTxRequest;
                fromAmino(object: _74.BroadcastTxRequestAmino): _74.BroadcastTxRequest;
                toAmino(message: _74.BroadcastTxRequest): _74.BroadcastTxRequestAmino;
                fromAminoMsg(object: _74.BroadcastTxRequestAminoMsg): _74.BroadcastTxRequest;
                toAminoMsg(message: _74.BroadcastTxRequest): _74.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _74.BroadcastTxRequestProtoMsg): _74.BroadcastTxRequest;
                toProto(message: _74.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _74.BroadcastTxRequest): _74.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _74.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.BroadcastTxResponse;
                fromPartial(object: Partial<_74.BroadcastTxResponse>): _74.BroadcastTxResponse;
                fromAmino(object: _74.BroadcastTxResponseAmino): _74.BroadcastTxResponse;
                toAmino(message: _74.BroadcastTxResponse): _74.BroadcastTxResponseAmino;
                fromAminoMsg(object: _74.BroadcastTxResponseAminoMsg): _74.BroadcastTxResponse;
                toAminoMsg(message: _74.BroadcastTxResponse): _74.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _74.BroadcastTxResponseProtoMsg): _74.BroadcastTxResponse;
                toProto(message: _74.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _74.BroadcastTxResponse): _74.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _74.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.SimulateRequest;
                fromPartial(object: Partial<_74.SimulateRequest>): _74.SimulateRequest;
                fromAmino(object: _74.SimulateRequestAmino): _74.SimulateRequest;
                toAmino(message: _74.SimulateRequest): _74.SimulateRequestAmino;
                fromAminoMsg(object: _74.SimulateRequestAminoMsg): _74.SimulateRequest;
                toAminoMsg(message: _74.SimulateRequest): _74.SimulateRequestAminoMsg;
                fromProtoMsg(message: _74.SimulateRequestProtoMsg): _74.SimulateRequest;
                toProto(message: _74.SimulateRequest): Uint8Array;
                toProtoMsg(message: _74.SimulateRequest): _74.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _74.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.SimulateResponse;
                fromPartial(object: Partial<_74.SimulateResponse>): _74.SimulateResponse;
                fromAmino(object: _74.SimulateResponseAmino): _74.SimulateResponse;
                toAmino(message: _74.SimulateResponse): _74.SimulateResponseAmino;
                fromAminoMsg(object: _74.SimulateResponseAminoMsg): _74.SimulateResponse;
                toAminoMsg(message: _74.SimulateResponse): _74.SimulateResponseAminoMsg;
                fromProtoMsg(message: _74.SimulateResponseProtoMsg): _74.SimulateResponse;
                toProto(message: _74.SimulateResponse): Uint8Array;
                toProtoMsg(message: _74.SimulateResponse): _74.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _74.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.GetTxRequest;
                fromPartial(object: Partial<_74.GetTxRequest>): _74.GetTxRequest;
                fromAmino(object: _74.GetTxRequestAmino): _74.GetTxRequest;
                toAmino(message: _74.GetTxRequest): _74.GetTxRequestAmino;
                fromAminoMsg(object: _74.GetTxRequestAminoMsg): _74.GetTxRequest;
                toAminoMsg(message: _74.GetTxRequest): _74.GetTxRequestAminoMsg;
                fromProtoMsg(message: _74.GetTxRequestProtoMsg): _74.GetTxRequest;
                toProto(message: _74.GetTxRequest): Uint8Array;
                toProtoMsg(message: _74.GetTxRequest): _74.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _74.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.GetTxResponse;
                fromPartial(object: Partial<_74.GetTxResponse>): _74.GetTxResponse;
                fromAmino(object: _74.GetTxResponseAmino): _74.GetTxResponse;
                toAmino(message: _74.GetTxResponse): _74.GetTxResponseAmino;
                fromAminoMsg(object: _74.GetTxResponseAminoMsg): _74.GetTxResponse;
                toAminoMsg(message: _74.GetTxResponse): _74.GetTxResponseAminoMsg;
                fromProtoMsg(message: _74.GetTxResponseProtoMsg): _74.GetTxResponse;
                toProto(message: _74.GetTxResponse): Uint8Array;
                toProtoMsg(message: _74.GetTxResponse): _74.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _74.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_74.GetBlockWithTxsRequest>): _74.GetBlockWithTxsRequest;
                fromAmino(object: _74.GetBlockWithTxsRequestAmino): _74.GetBlockWithTxsRequest;
                toAmino(message: _74.GetBlockWithTxsRequest): _74.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _74.GetBlockWithTxsRequestAminoMsg): _74.GetBlockWithTxsRequest;
                toAminoMsg(message: _74.GetBlockWithTxsRequest): _74.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _74.GetBlockWithTxsRequestProtoMsg): _74.GetBlockWithTxsRequest;
                toProto(message: _74.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _74.GetBlockWithTxsRequest): _74.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _74.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_74.GetBlockWithTxsResponse>): _74.GetBlockWithTxsResponse;
                fromAmino(object: _74.GetBlockWithTxsResponseAmino): _74.GetBlockWithTxsResponse;
                toAmino(message: _74.GetBlockWithTxsResponse): _74.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _74.GetBlockWithTxsResponseAminoMsg): _74.GetBlockWithTxsResponse;
                toAminoMsg(message: _74.GetBlockWithTxsResponse): _74.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _74.GetBlockWithTxsResponseProtoMsg): _74.GetBlockWithTxsResponse;
                toProto(message: _74.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _74.GetBlockWithTxsResponse): _74.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _171.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _76.QueryCurrentPlanRequest): Promise<_76.QueryCurrentPlanResponse>;
                appliedPlan(request: _76.QueryAppliedPlanRequest): Promise<_76.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _76.QueryUpgradedConsensusStateRequest): Promise<_76.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _76.QueryModuleVersionsRequest): Promise<_76.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _156.LCDQueryClient;
            Plan: {
                typeUrl: string;
                encode(message: _77.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.Plan;
                fromPartial(object: Partial<_77.Plan>): _77.Plan;
                fromAmino(object: _77.PlanAmino): _77.Plan;
                toAmino(message: _77.Plan): _77.PlanAmino;
                fromAminoMsg(object: _77.PlanAminoMsg): _77.Plan;
                toAminoMsg(message: _77.Plan): _77.PlanAminoMsg;
                fromProtoMsg(message: _77.PlanProtoMsg): _77.Plan;
                toProto(message: _77.Plan): Uint8Array;
                toProtoMsg(message: _77.Plan): _77.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _77.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_77.SoftwareUpgradeProposal>): _77.SoftwareUpgradeProposal;
                fromAmino(object: _77.SoftwareUpgradeProposalAmino): _77.SoftwareUpgradeProposal;
                toAmino(message: _77.SoftwareUpgradeProposal): _77.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _77.SoftwareUpgradeProposalAminoMsg): _77.SoftwareUpgradeProposal;
                toAminoMsg(message: _77.SoftwareUpgradeProposal): _77.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _77.SoftwareUpgradeProposalProtoMsg): _77.SoftwareUpgradeProposal;
                toProto(message: _77.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _77.SoftwareUpgradeProposal): _77.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _77.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_77.CancelSoftwareUpgradeProposal>): _77.CancelSoftwareUpgradeProposal;
                fromAmino(object: _77.CancelSoftwareUpgradeProposalAmino): _77.CancelSoftwareUpgradeProposal;
                toAmino(message: _77.CancelSoftwareUpgradeProposal): _77.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _77.CancelSoftwareUpgradeProposalAminoMsg): _77.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _77.CancelSoftwareUpgradeProposal): _77.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _77.CancelSoftwareUpgradeProposalProtoMsg): _77.CancelSoftwareUpgradeProposal;
                toProto(message: _77.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _77.CancelSoftwareUpgradeProposal): _77.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _77.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.ModuleVersion;
                fromPartial(object: Partial<_77.ModuleVersion>): _77.ModuleVersion;
                fromAmino(object: _77.ModuleVersionAmino): _77.ModuleVersion;
                toAmino(message: _77.ModuleVersion): _77.ModuleVersionAmino;
                fromAminoMsg(object: _77.ModuleVersionAminoMsg): _77.ModuleVersion;
                toAminoMsg(message: _77.ModuleVersion): _77.ModuleVersionAminoMsg;
                fromProtoMsg(message: _77.ModuleVersionProtoMsg): _77.ModuleVersion;
                toProto(message: _77.ModuleVersion): Uint8Array;
                toProtoMsg(message: _77.ModuleVersion): _77.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _76.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_76.QueryCurrentPlanRequest>): _76.QueryCurrentPlanRequest;
                fromAmino(_: _76.QueryCurrentPlanRequestAmino): _76.QueryCurrentPlanRequest;
                toAmino(_: _76.QueryCurrentPlanRequest): _76.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _76.QueryCurrentPlanRequestAminoMsg): _76.QueryCurrentPlanRequest;
                toAminoMsg(message: _76.QueryCurrentPlanRequest): _76.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _76.QueryCurrentPlanRequestProtoMsg): _76.QueryCurrentPlanRequest;
                toProto(message: _76.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _76.QueryCurrentPlanRequest): _76.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _76.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_76.QueryCurrentPlanResponse>): _76.QueryCurrentPlanResponse;
                fromAmino(object: _76.QueryCurrentPlanResponseAmino): _76.QueryCurrentPlanResponse;
                toAmino(message: _76.QueryCurrentPlanResponse): _76.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _76.QueryCurrentPlanResponseAminoMsg): _76.QueryCurrentPlanResponse;
                toAminoMsg(message: _76.QueryCurrentPlanResponse): _76.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _76.QueryCurrentPlanResponseProtoMsg): _76.QueryCurrentPlanResponse;
                toProto(message: _76.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _76.QueryCurrentPlanResponse): _76.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _76.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_76.QueryAppliedPlanRequest>): _76.QueryAppliedPlanRequest;
                fromAmino(object: _76.QueryAppliedPlanRequestAmino): _76.QueryAppliedPlanRequest;
                toAmino(message: _76.QueryAppliedPlanRequest): _76.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _76.QueryAppliedPlanRequestAminoMsg): _76.QueryAppliedPlanRequest;
                toAminoMsg(message: _76.QueryAppliedPlanRequest): _76.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _76.QueryAppliedPlanRequestProtoMsg): _76.QueryAppliedPlanRequest;
                toProto(message: _76.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _76.QueryAppliedPlanRequest): _76.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _76.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_76.QueryAppliedPlanResponse>): _76.QueryAppliedPlanResponse;
                fromAmino(object: _76.QueryAppliedPlanResponseAmino): _76.QueryAppliedPlanResponse;
                toAmino(message: _76.QueryAppliedPlanResponse): _76.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _76.QueryAppliedPlanResponseAminoMsg): _76.QueryAppliedPlanResponse;
                toAminoMsg(message: _76.QueryAppliedPlanResponse): _76.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _76.QueryAppliedPlanResponseProtoMsg): _76.QueryAppliedPlanResponse;
                toProto(message: _76.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _76.QueryAppliedPlanResponse): _76.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _76.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_76.QueryUpgradedConsensusStateRequest>): _76.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _76.QueryUpgradedConsensusStateRequestAmino): _76.QueryUpgradedConsensusStateRequest;
                toAmino(message: _76.QueryUpgradedConsensusStateRequest): _76.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _76.QueryUpgradedConsensusStateRequestAminoMsg): _76.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _76.QueryUpgradedConsensusStateRequest): _76.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _76.QueryUpgradedConsensusStateRequestProtoMsg): _76.QueryUpgradedConsensusStateRequest;
                toProto(message: _76.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _76.QueryUpgradedConsensusStateRequest): _76.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _76.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_76.QueryUpgradedConsensusStateResponse>): _76.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _76.QueryUpgradedConsensusStateResponseAmino): _76.QueryUpgradedConsensusStateResponse;
                toAmino(message: _76.QueryUpgradedConsensusStateResponse): _76.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _76.QueryUpgradedConsensusStateResponseAminoMsg): _76.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _76.QueryUpgradedConsensusStateResponse): _76.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _76.QueryUpgradedConsensusStateResponseProtoMsg): _76.QueryUpgradedConsensusStateResponse;
                toProto(message: _76.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _76.QueryUpgradedConsensusStateResponse): _76.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _76.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_76.QueryModuleVersionsRequest>): _76.QueryModuleVersionsRequest;
                fromAmino(object: _76.QueryModuleVersionsRequestAmino): _76.QueryModuleVersionsRequest;
                toAmino(message: _76.QueryModuleVersionsRequest): _76.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _76.QueryModuleVersionsRequestAminoMsg): _76.QueryModuleVersionsRequest;
                toAminoMsg(message: _76.QueryModuleVersionsRequest): _76.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _76.QueryModuleVersionsRequestProtoMsg): _76.QueryModuleVersionsRequest;
                toProto(message: _76.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _76.QueryModuleVersionsRequest): _76.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _76.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_76.QueryModuleVersionsResponse>): _76.QueryModuleVersionsResponse;
                fromAmino(object: _76.QueryModuleVersionsResponseAmino): _76.QueryModuleVersionsResponse;
                toAmino(message: _76.QueryModuleVersionsResponse): _76.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _76.QueryModuleVersionsResponseAminoMsg): _76.QueryModuleVersionsResponse;
                toAminoMsg(message: _76.QueryModuleVersionsResponse): _76.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _76.QueryModuleVersionsResponseProtoMsg): _76.QueryModuleVersionsResponse;
                toProto(message: _76.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _76.QueryModuleVersionsResponse): _76.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _181.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _78.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _78.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _78.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _78.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _78.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _78.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _78.MsgCreateVestingAccount) => _78.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _78.MsgCreateVestingAccountAmino) => _78.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _79.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.BaseVestingAccount;
                fromPartial(object: Partial<_79.BaseVestingAccount>): _79.BaseVestingAccount;
                fromAmino(object: _79.BaseVestingAccountAmino): _79.BaseVestingAccount;
                toAmino(message: _79.BaseVestingAccount): _79.BaseVestingAccountAmino;
                fromAminoMsg(object: _79.BaseVestingAccountAminoMsg): _79.BaseVestingAccount;
                toAminoMsg(message: _79.BaseVestingAccount): _79.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _79.BaseVestingAccountProtoMsg): _79.BaseVestingAccount;
                toProto(message: _79.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _79.BaseVestingAccount): _79.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _79.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.ContinuousVestingAccount;
                fromPartial(object: Partial<_79.ContinuousVestingAccount>): _79.ContinuousVestingAccount;
                fromAmino(object: _79.ContinuousVestingAccountAmino): _79.ContinuousVestingAccount;
                toAmino(message: _79.ContinuousVestingAccount): _79.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _79.ContinuousVestingAccountAminoMsg): _79.ContinuousVestingAccount;
                toAminoMsg(message: _79.ContinuousVestingAccount): _79.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _79.ContinuousVestingAccountProtoMsg): _79.ContinuousVestingAccount;
                toProto(message: _79.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _79.ContinuousVestingAccount): _79.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _79.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.DelayedVestingAccount;
                fromPartial(object: Partial<_79.DelayedVestingAccount>): _79.DelayedVestingAccount;
                fromAmino(object: _79.DelayedVestingAccountAmino): _79.DelayedVestingAccount;
                toAmino(message: _79.DelayedVestingAccount): _79.DelayedVestingAccountAmino;
                fromAminoMsg(object: _79.DelayedVestingAccountAminoMsg): _79.DelayedVestingAccount;
                toAminoMsg(message: _79.DelayedVestingAccount): _79.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _79.DelayedVestingAccountProtoMsg): _79.DelayedVestingAccount;
                toProto(message: _79.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _79.DelayedVestingAccount): _79.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _79.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.Period;
                fromPartial(object: Partial<_79.Period>): _79.Period;
                fromAmino(object: _79.PeriodAmino): _79.Period;
                toAmino(message: _79.Period): _79.PeriodAmino;
                fromAminoMsg(object: _79.PeriodAminoMsg): _79.Period;
                toAminoMsg(message: _79.Period): _79.PeriodAminoMsg;
                fromProtoMsg(message: _79.PeriodProtoMsg): _79.Period;
                toProto(message: _79.Period): Uint8Array;
                toProtoMsg(message: _79.Period): _79.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _79.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.PeriodicVestingAccount;
                fromPartial(object: Partial<_79.PeriodicVestingAccount>): _79.PeriodicVestingAccount;
                fromAmino(object: _79.PeriodicVestingAccountAmino): _79.PeriodicVestingAccount;
                toAmino(message: _79.PeriodicVestingAccount): _79.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _79.PeriodicVestingAccountAminoMsg): _79.PeriodicVestingAccount;
                toAminoMsg(message: _79.PeriodicVestingAccount): _79.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _79.PeriodicVestingAccountProtoMsg): _79.PeriodicVestingAccount;
                toProto(message: _79.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _79.PeriodicVestingAccount): _79.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _79.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.PermanentLockedAccount;
                fromPartial(object: Partial<_79.PermanentLockedAccount>): _79.PermanentLockedAccount;
                fromAmino(object: _79.PermanentLockedAccountAmino): _79.PermanentLockedAccount;
                toAmino(message: _79.PermanentLockedAccount): _79.PermanentLockedAccountAmino;
                fromAminoMsg(object: _79.PermanentLockedAccountAminoMsg): _79.PermanentLockedAccount;
                toAminoMsg(message: _79.PermanentLockedAccount): _79.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _79.PermanentLockedAccountProtoMsg): _79.PermanentLockedAccount;
                toProto(message: _79.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _79.PermanentLockedAccount): _79.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _78.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgCreateVestingAccount;
                fromPartial(object: Partial<_78.MsgCreateVestingAccount>): _78.MsgCreateVestingAccount;
                fromAmino(object: _78.MsgCreateVestingAccountAmino): _78.MsgCreateVestingAccount;
                toAmino(message: _78.MsgCreateVestingAccount): _78.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _78.MsgCreateVestingAccountAminoMsg): _78.MsgCreateVestingAccount;
                toAminoMsg(message: _78.MsgCreateVestingAccount): _78.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _78.MsgCreateVestingAccountProtoMsg): _78.MsgCreateVestingAccount;
                toProto(message: _78.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _78.MsgCreateVestingAccount): _78.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _78.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _78.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_78.MsgCreateVestingAccountResponse>): _78.MsgCreateVestingAccountResponse;
                fromAmino(_: _78.MsgCreateVestingAccountResponseAmino): _78.MsgCreateVestingAccountResponse;
                toAmino(_: _78.MsgCreateVestingAccountResponse): _78.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _78.MsgCreateVestingAccountResponseAminoMsg): _78.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _78.MsgCreateVestingAccountResponse): _78.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _78.MsgCreateVestingAccountResponseProtoMsg): _78.MsgCreateVestingAccountResponse;
                toProto(message: _78.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _78.MsgCreateVestingAccountResponse): _78.MsgCreateVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _172.MsgClientImpl;
                };
                bank: {
                    v1beta1: _173.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _174.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _175.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _176.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _177.MsgClientImpl;
                };
                gov: {
                    v1beta1: _178.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _179.MsgClientImpl;
                };
                staking: {
                    v1beta1: _180.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _181.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _12.QueryAccountsRequest): Promise<_12.QueryAccountsResponse>;
                        account(request: _12.QueryAccountRequest): Promise<_12.QueryAccountResponse>;
                        params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                        moduleAccountByName(request: _12.QueryModuleAccountByNameRequest): Promise<_12.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _16.QueryGrantsRequest): Promise<_16.QueryGrantsResponse>;
                        granterGrants(request: _16.QueryGranterGrantsRequest): Promise<_16.QueryGranterGrantsResponse>;
                        granteeGrants(request: _16.QueryGranteeGrantsRequest): Promise<_16.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _21.QueryBalanceRequest): Promise<_21.QueryBalanceResponse>;
                        allBalances(request: _21.QueryAllBalancesRequest): Promise<_21.QueryAllBalancesResponse>;
                        spendableBalances(request: _21.QuerySpendableBalancesRequest): Promise<_21.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _21.QueryTotalSupplyRequest): Promise<_21.QueryTotalSupplyResponse>;
                        supplyOf(request: _21.QuerySupplyOfRequest): Promise<_21.QuerySupplyOfResponse>;
                        params(request?: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
                        denomMetadata(request: _21.QueryDenomMetadataRequest): Promise<_21.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _21.QueryDenomsMetadataRequest): Promise<_21.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _25.ConfigRequest): Promise<_25.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _32.GetNodeInfoRequest): Promise<_32.GetNodeInfoResponse>;
                            getSyncing(request?: _32.GetSyncingRequest): Promise<_32.GetSyncingResponse>;
                            getLatestBlock(request?: _32.GetLatestBlockRequest): Promise<_32.GetLatestBlockResponse>;
                            getBlockByHeight(request: _32.GetBlockByHeightRequest): Promise<_32.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _32.GetLatestValidatorSetRequest): Promise<_32.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _32.GetValidatorSetByHeightRequest): Promise<_32.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _44.QueryParamsRequest): Promise<_44.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _44.QueryValidatorOutstandingRewardsRequest): Promise<_44.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _44.QueryValidatorCommissionRequest): Promise<_44.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _44.QueryValidatorSlashesRequest): Promise<_44.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _44.QueryDelegationRewardsRequest): Promise<_44.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _44.QueryDelegationTotalRewardsRequest): Promise<_44.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _44.QueryDelegatorValidatorsRequest): Promise<_44.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _44.QueryDelegatorWithdrawAddressRequest): Promise<_44.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _44.QueryCommunityPoolRequest): Promise<_44.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _48.QueryEvidenceRequest): Promise<_48.QueryEvidenceResponse>;
                        allEvidence(request?: _48.QueryAllEvidenceRequest): Promise<_48.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _52.QueryAllowanceRequest): Promise<_52.QueryAllowanceResponse>;
                        allowances(request: _52.QueryAllowancesRequest): Promise<_52.QueryAllowancesResponse>;
                        allowancesByGranter(request: _52.QueryAllowancesByGranterRequest): Promise<_52.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _57.QueryProposalRequest): Promise<_57.QueryProposalResponse>;
                        proposals(request: _57.QueryProposalsRequest): Promise<_57.QueryProposalsResponse>;
                        vote(request: _57.QueryVoteRequest): Promise<_57.QueryVoteResponse>;
                        votes(request: _57.QueryVotesRequest): Promise<_57.QueryVotesResponse>;
                        params(request: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                        deposit(request: _57.QueryDepositRequest): Promise<_57.QueryDepositResponse>;
                        deposits(request: _57.QueryDepositsRequest): Promise<_57.QueryDepositsResponse>;
                        tallyResult(request: _57.QueryTallyResultRequest): Promise<_57.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                        inflation(request?: _61.QueryInflationRequest): Promise<_61.QueryInflationResponse>;
                        annualProvisions(request?: _61.QueryAnnualProvisionsRequest): Promise<_61.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _63.QueryParamsRequest): Promise<_63.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                        signingInfo(request: _65.QuerySigningInfoRequest): Promise<_65.QuerySigningInfoResponse>;
                        signingInfos(request?: _65.QuerySigningInfosRequest): Promise<_65.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _70.QueryValidatorsRequest): Promise<_70.QueryValidatorsResponse>;
                        validator(request: _70.QueryValidatorRequest): Promise<_70.QueryValidatorResponse>;
                        validatorDelegations(request: _70.QueryValidatorDelegationsRequest): Promise<_70.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _70.QueryValidatorUnbondingDelegationsRequest): Promise<_70.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _70.QueryDelegationRequest): Promise<_70.QueryDelegationResponse>;
                        unbondingDelegation(request: _70.QueryUnbondingDelegationRequest): Promise<_70.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _70.QueryDelegatorDelegationsRequest): Promise<_70.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _70.QueryDelegatorUnbondingDelegationsRequest): Promise<_70.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _70.QueryRedelegationsRequest): Promise<_70.QueryRedelegationsResponse>;
                        delegatorValidators(request: _70.QueryDelegatorValidatorsRequest): Promise<_70.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _70.QueryDelegatorValidatorRequest): Promise<_70.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _70.QueryHistoricalInfoRequest): Promise<_70.QueryHistoricalInfoResponse>;
                        pool(request?: _70.QueryPoolRequest): Promise<_70.QueryPoolResponse>;
                        params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _74.SimulateRequest): Promise<_74.SimulateResponse>;
                        getTx(request: _74.GetTxRequest): Promise<_74.GetTxResponse>;
                        broadcastTx(request: _74.BroadcastTxRequest): Promise<_74.BroadcastTxResponse>;
                        getTxsEvent(request: _74.GetTxsEventRequest): Promise<_74.GetTxsEventResponse>;
                        getBlockWithTxs(request: _74.GetBlockWithTxsRequest): Promise<_74.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _76.QueryCurrentPlanRequest): Promise<_76.QueryCurrentPlanResponse>;
                        appliedPlan(request: _76.QueryAppliedPlanRequest): Promise<_76.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _76.QueryUpgradedConsensusStateRequest): Promise<_76.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _76.QueryModuleVersionsRequest): Promise<_76.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _142.LCDQueryClient;
                };
                authz: {
                    v1beta1: _143.LCDQueryClient;
                };
                bank: {
                    v1beta1: _144.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _145.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _146.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _147.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _148.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _149.LCDQueryClient;
                };
                gov: {
                    v1beta1: _150.LCDQueryClient;
                };
                mint: {
                    v1beta1: _151.LCDQueryClient;
                };
                params: {
                    v1beta1: _152.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _153.LCDQueryClient;
                };
                staking: {
                    v1beta1: _154.LCDQueryClient;
                };
                tx: {
                    v1beta1: _155.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _156.LCDQueryClient;
                };
            };
        }>;
    };
}
