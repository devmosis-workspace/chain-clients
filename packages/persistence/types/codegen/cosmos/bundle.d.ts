import * as _8 from "./auth/v1beta1/auth";
import * as _9 from "./auth/v1beta1/genesis";
import * as _10 from "./auth/v1beta1/query";
import * as _11 from "./authz/v1beta1/authz";
import * as _12 from "./authz/v1beta1/event";
import * as _13 from "./authz/v1beta1/genesis";
import * as _14 from "./authz/v1beta1/query";
import * as _15 from "./authz/v1beta1/tx";
import * as _16 from "./bank/v1beta1/authz";
import * as _17 from "./bank/v1beta1/bank";
import * as _18 from "./bank/v1beta1/genesis";
import * as _19 from "./bank/v1beta1/query";
import * as _20 from "./bank/v1beta1/tx";
import * as _21 from "./base/abci/v1beta1/abci";
import * as _22 from "./base/kv/v1beta1/kv";
import * as _23 from "./base/node/v1beta1/query";
import * as _24 from "./base/query/v1beta1/pagination";
import * as _25 from "./base/reflection/v1beta1/reflection";
import * as _26 from "./base/reflection/v2alpha1/reflection";
import * as _27 from "./base/snapshots/v1beta1/snapshot";
import * as _28 from "./base/store/v1beta1/commit_info";
import * as _29 from "./base/store/v1beta1/listening";
import * as _30 from "./base/store/v1beta1/snapshot";
import * as _31 from "./base/tendermint/v1beta1/query";
import * as _32 from "./base/v1beta1/coin";
import * as _33 from "./capability/v1beta1/capability";
import * as _34 from "./capability/v1beta1/genesis";
import * as _35 from "./crisis/v1beta1/genesis";
import * as _36 from "./crisis/v1beta1/tx";
import * as _37 from "./crypto/ed25519/keys";
import * as _38 from "./crypto/multisig/keys";
import * as _39 from "./crypto/secp256k1/keys";
import * as _40 from "./crypto/secp256r1/keys";
import * as _41 from "./distribution/v1beta1/distribution";
import * as _42 from "./distribution/v1beta1/genesis";
import * as _43 from "./distribution/v1beta1/query";
import * as _44 from "./distribution/v1beta1/tx";
import * as _45 from "./evidence/v1beta1/evidence";
import * as _46 from "./evidence/v1beta1/genesis";
import * as _47 from "./evidence/v1beta1/query";
import * as _48 from "./evidence/v1beta1/tx";
import * as _49 from "./feegrant/v1beta1/feegrant";
import * as _50 from "./feegrant/v1beta1/genesis";
import * as _51 from "./feegrant/v1beta1/query";
import * as _52 from "./feegrant/v1beta1/tx";
import * as _53 from "./genutil/v1beta1/genesis";
import * as _54 from "./gov/v1beta1/genesis";
import * as _55 from "./gov/v1beta1/gov";
import * as _56 from "./gov/v1beta1/query";
import * as _57 from "./gov/v1beta1/tx";
import * as _58 from "./mint/v1beta1/genesis";
import * as _59 from "./mint/v1beta1/mint";
import * as _60 from "./mint/v1beta1/query";
import * as _61 from "./params/v1beta1/params";
import * as _62 from "./params/v1beta1/query";
import * as _63 from "./slashing/v1beta1/genesis";
import * as _64 from "./slashing/v1beta1/query";
import * as _65 from "./slashing/v1beta1/slashing";
import * as _66 from "./slashing/v1beta1/tx";
import * as _67 from "./staking/v1beta1/authz";
import * as _68 from "./staking/v1beta1/genesis";
import * as _69 from "./staking/v1beta1/query";
import * as _70 from "./staking/v1beta1/staking";
import * as _71 from "./staking/v1beta1/tx";
import * as _72 from "./tx/signing/v1beta1/signing";
import * as _73 from "./tx/v1beta1/service";
import * as _74 from "./tx/v1beta1/tx";
import * as _75 from "./upgrade/v1beta1/query";
import * as _76 from "./upgrade/v1beta1/upgrade";
import * as _77 from "./vesting/v1beta1/tx";
import * as _78 from "./vesting/v1beta1/vesting";
import * as _158 from "./auth/v1beta1/query.lcd";
import * as _159 from "./authz/v1beta1/query.lcd";
import * as _160 from "./bank/v1beta1/query.lcd";
import * as _161 from "./base/node/v1beta1/query.lcd";
import * as _162 from "./base/tendermint/v1beta1/query.lcd";
import * as _163 from "./distribution/v1beta1/query.lcd";
import * as _164 from "./evidence/v1beta1/query.lcd";
import * as _165 from "./feegrant/v1beta1/query.lcd";
import * as _166 from "./gov/v1beta1/query.lcd";
import * as _167 from "./mint/v1beta1/query.lcd";
import * as _168 from "./params/v1beta1/query.lcd";
import * as _169 from "./slashing/v1beta1/query.lcd";
import * as _170 from "./staking/v1beta1/query.lcd";
import * as _171 from "./tx/v1beta1/service.lcd";
import * as _172 from "./upgrade/v1beta1/query.lcd";
import * as _173 from "./auth/v1beta1/query.rpc.Query";
import * as _174 from "./authz/v1beta1/query.rpc.Query";
import * as _175 from "./bank/v1beta1/query.rpc.Query";
import * as _176 from "./base/node/v1beta1/query.rpc.Service";
import * as _177 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _178 from "./distribution/v1beta1/query.rpc.Query";
import * as _179 from "./evidence/v1beta1/query.rpc.Query";
import * as _180 from "./feegrant/v1beta1/query.rpc.Query";
import * as _181 from "./gov/v1beta1/query.rpc.Query";
import * as _182 from "./mint/v1beta1/query.rpc.Query";
import * as _183 from "./params/v1beta1/query.rpc.Query";
import * as _184 from "./slashing/v1beta1/query.rpc.Query";
import * as _185 from "./staking/v1beta1/query.rpc.Query";
import * as _186 from "./tx/v1beta1/service.rpc.Service";
import * as _187 from "./upgrade/v1beta1/query.rpc.Query";
import * as _188 from "./authz/v1beta1/tx.rpc.msg";
import * as _189 from "./bank/v1beta1/tx.rpc.msg";
import * as _190 from "./crisis/v1beta1/tx.rpc.msg";
import * as _191 from "./distribution/v1beta1/tx.rpc.msg";
import * as _192 from "./evidence/v1beta1/tx.rpc.msg";
import * as _193 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _194 from "./gov/v1beta1/tx.rpc.msg";
import * as _195 from "./slashing/v1beta1/tx.rpc.msg";
import * as _196 from "./staking/v1beta1/tx.rpc.msg";
import * as _197 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _173.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _10.QueryAccountsRequest): Promise<_10.QueryAccountsResponse>;
                account(request: _10.QueryAccountRequest): Promise<_10.QueryAccountResponse>;
                params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                moduleAccountByName(request: _10.QueryModuleAccountByNameRequest): Promise<_10.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _158.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _10.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryAccountsRequest;
                fromPartial(object: Partial<_10.QueryAccountsRequest>): _10.QueryAccountsRequest;
                fromAmino(object: _10.QueryAccountsRequestAmino): _10.QueryAccountsRequest;
                toAmino(message: _10.QueryAccountsRequest): _10.QueryAccountsRequestAmino;
                fromAminoMsg(object: _10.QueryAccountsRequestAminoMsg): _10.QueryAccountsRequest;
                toAminoMsg(message: _10.QueryAccountsRequest): _10.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _10.QueryAccountsRequestProtoMsg): _10.QueryAccountsRequest;
                toProto(message: _10.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _10.QueryAccountsRequest): _10.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _10.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryAccountsResponse;
                fromPartial(object: Partial<_10.QueryAccountsResponse>): _10.QueryAccountsResponse;
                fromAmino(object: _10.QueryAccountsResponseAmino): _10.QueryAccountsResponse;
                toAmino(message: _10.QueryAccountsResponse): _10.QueryAccountsResponseAmino;
                fromAminoMsg(object: _10.QueryAccountsResponseAminoMsg): _10.QueryAccountsResponse;
                toAminoMsg(message: _10.QueryAccountsResponse): _10.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _10.QueryAccountsResponseProtoMsg): _10.QueryAccountsResponse;
                toProto(message: _10.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _10.QueryAccountsResponse): _10.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _10.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryAccountRequest;
                fromPartial(object: Partial<_10.QueryAccountRequest>): _10.QueryAccountRequest;
                fromAmino(object: _10.QueryAccountRequestAmino): _10.QueryAccountRequest;
                toAmino(message: _10.QueryAccountRequest): _10.QueryAccountRequestAmino;
                fromAminoMsg(object: _10.QueryAccountRequestAminoMsg): _10.QueryAccountRequest;
                toAminoMsg(message: _10.QueryAccountRequest): _10.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _10.QueryAccountRequestProtoMsg): _10.QueryAccountRequest;
                toProto(message: _10.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _10.QueryAccountRequest): _10.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _10.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryAccountResponse;
                fromPartial(object: Partial<_10.QueryAccountResponse>): _10.QueryAccountResponse;
                fromAmino(object: _10.QueryAccountResponseAmino): _10.QueryAccountResponse;
                toAmino(message: _10.QueryAccountResponse): _10.QueryAccountResponseAmino;
                fromAminoMsg(object: _10.QueryAccountResponseAminoMsg): _10.QueryAccountResponse;
                toAminoMsg(message: _10.QueryAccountResponse): _10.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _10.QueryAccountResponseProtoMsg): _10.QueryAccountResponse;
                toProto(message: _10.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _10.QueryAccountResponse): _10.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _10.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.QueryParamsRequest;
                fromPartial(_: Partial<_10.QueryParamsRequest>): _10.QueryParamsRequest;
                fromAmino(_: _10.QueryParamsRequestAmino): _10.QueryParamsRequest;
                toAmino(_: _10.QueryParamsRequest): _10.QueryParamsRequestAmino;
                fromAminoMsg(object: _10.QueryParamsRequestAminoMsg): _10.QueryParamsRequest;
                toAminoMsg(message: _10.QueryParamsRequest): _10.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _10.QueryParamsRequestProtoMsg): _10.QueryParamsRequest;
                toProto(message: _10.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _10.QueryParamsRequest): _10.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _10.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryParamsResponse;
                fromPartial(object: Partial<_10.QueryParamsResponse>): _10.QueryParamsResponse;
                fromAmino(object: _10.QueryParamsResponseAmino): _10.QueryParamsResponse;
                toAmino(message: _10.QueryParamsResponse): _10.QueryParamsResponseAmino;
                fromAminoMsg(object: _10.QueryParamsResponseAminoMsg): _10.QueryParamsResponse;
                toAminoMsg(message: _10.QueryParamsResponse): _10.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _10.QueryParamsResponseProtoMsg): _10.QueryParamsResponse;
                toProto(message: _10.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _10.QueryParamsResponse): _10.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _10.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_10.QueryModuleAccountByNameRequest>): _10.QueryModuleAccountByNameRequest;
                fromAmino(object: _10.QueryModuleAccountByNameRequestAmino): _10.QueryModuleAccountByNameRequest;
                toAmino(message: _10.QueryModuleAccountByNameRequest): _10.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _10.QueryModuleAccountByNameRequestAminoMsg): _10.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _10.QueryModuleAccountByNameRequest): _10.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _10.QueryModuleAccountByNameRequestProtoMsg): _10.QueryModuleAccountByNameRequest;
                toProto(message: _10.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _10.QueryModuleAccountByNameRequest): _10.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _10.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_10.QueryModuleAccountByNameResponse>): _10.QueryModuleAccountByNameResponse;
                fromAmino(object: _10.QueryModuleAccountByNameResponseAmino): _10.QueryModuleAccountByNameResponse;
                toAmino(message: _10.QueryModuleAccountByNameResponse): _10.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _10.QueryModuleAccountByNameResponseAminoMsg): _10.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _10.QueryModuleAccountByNameResponse): _10.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _10.QueryModuleAccountByNameResponseProtoMsg): _10.QueryModuleAccountByNameResponse;
                toProto(message: _10.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _10.QueryModuleAccountByNameResponse): _10.QueryModuleAccountByNameResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _8.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _8.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _9.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.GenesisState;
                fromPartial(object: Partial<_9.GenesisState>): _9.GenesisState;
                fromAmino(object: _9.GenesisStateAmino): _9.GenesisState;
                toAmino(message: _9.GenesisState): _9.GenesisStateAmino;
                fromAminoMsg(object: _9.GenesisStateAminoMsg): _9.GenesisState;
                toAminoMsg(message: _9.GenesisState): _9.GenesisStateAminoMsg;
                fromProtoMsg(message: _9.GenesisStateProtoMsg): _9.GenesisState;
                toProto(message: _9.GenesisState): Uint8Array;
                toProtoMsg(message: _9.GenesisState): _9.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _8.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.BaseAccount;
                fromPartial(object: Partial<_8.BaseAccount>): _8.BaseAccount;
                fromAmino(object: _8.BaseAccountAmino): _8.BaseAccount;
                toAmino(message: _8.BaseAccount): _8.BaseAccountAmino;
                fromAminoMsg(object: _8.BaseAccountAminoMsg): _8.BaseAccount;
                toAminoMsg(message: _8.BaseAccount): _8.BaseAccountAminoMsg;
                fromProtoMsg(message: _8.BaseAccountProtoMsg): _8.BaseAccount;
                toProto(message: _8.BaseAccount): Uint8Array;
                toProtoMsg(message: _8.BaseAccount): _8.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _8.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.ModuleAccount;
                fromPartial(object: Partial<_8.ModuleAccount>): _8.ModuleAccount;
                fromAmino(object: _8.ModuleAccountAmino): _8.ModuleAccount;
                toAmino(message: _8.ModuleAccount): _8.ModuleAccountAmino;
                fromAminoMsg(object: _8.ModuleAccountAminoMsg): _8.ModuleAccount;
                toAminoMsg(message: _8.ModuleAccount): _8.ModuleAccountAminoMsg;
                fromProtoMsg(message: _8.ModuleAccountProtoMsg): _8.ModuleAccount;
                toProto(message: _8.ModuleAccount): Uint8Array;
                toProtoMsg(message: _8.ModuleAccount): _8.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _8.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.Params;
                fromPartial(object: Partial<_8.Params>): _8.Params;
                fromAmino(object: _8.ParamsAmino): _8.Params;
                toAmino(message: _8.Params): _8.ParamsAmino;
                fromAminoMsg(object: _8.ParamsAminoMsg): _8.Params;
                toAminoMsg(message: _8.Params): _8.ParamsAminoMsg;
                fromProtoMsg(message: _8.ParamsProtoMsg): _8.Params;
                toProto(message: _8.Params): Uint8Array;
                toProtoMsg(message: _8.Params): _8.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _188.MsgClientImpl;
            QueryClientImpl: typeof _174.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _14.QueryGrantsRequest): Promise<_14.QueryGrantsResponse>;
                granterGrants(request: _14.QueryGranterGrantsRequest): Promise<_14.QueryGranterGrantsResponse>;
                granteeGrants(request: _14.QueryGranteeGrantsRequest): Promise<_14.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _159.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _15.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _15.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _15.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _15.MsgGrant): {
                        typeUrl: string;
                        value: _15.MsgGrant;
                    };
                    exec(value: _15.MsgExec): {
                        typeUrl: string;
                        value: _15.MsgExec;
                    };
                    revoke(value: _15.MsgRevoke): {
                        typeUrl: string;
                        value: _15.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _15.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _15.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _15.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _15.MsgGrant): {
                        typeUrl: string;
                        value: _15.MsgGrant;
                    };
                    exec(value: _15.MsgExec): {
                        typeUrl: string;
                        value: _15.MsgExec;
                    };
                    revoke(value: _15.MsgRevoke): {
                        typeUrl: string;
                        value: _15.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _15.MsgGrant) => _15.MsgGrantAmino;
                    fromAmino: (object: _15.MsgGrantAmino) => _15.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _15.MsgExec) => _15.MsgExecAmino;
                    fromAmino: (object: _15.MsgExecAmino) => _15.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _15.MsgRevoke) => _15.MsgRevokeAmino;
                    fromAmino: (object: _15.MsgRevokeAmino) => _15.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _15.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.MsgGrant;
                fromPartial(object: Partial<_15.MsgGrant>): _15.MsgGrant;
                fromAmino(object: _15.MsgGrantAmino): _15.MsgGrant;
                toAmino(message: _15.MsgGrant): _15.MsgGrantAmino;
                fromAminoMsg(object: _15.MsgGrantAminoMsg): _15.MsgGrant;
                toAminoMsg(message: _15.MsgGrant): _15.MsgGrantAminoMsg;
                fromProtoMsg(message: _15.MsgGrantProtoMsg): _15.MsgGrant;
                toProto(message: _15.MsgGrant): Uint8Array;
                toProtoMsg(message: _15.MsgGrant): _15.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _15.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.MsgExecResponse;
                fromPartial(object: Partial<_15.MsgExecResponse>): _15.MsgExecResponse;
                fromAmino(object: _15.MsgExecResponseAmino): _15.MsgExecResponse;
                toAmino(message: _15.MsgExecResponse): _15.MsgExecResponseAmino;
                fromAminoMsg(object: _15.MsgExecResponseAminoMsg): _15.MsgExecResponse;
                toAminoMsg(message: _15.MsgExecResponse): _15.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _15.MsgExecResponseProtoMsg): _15.MsgExecResponse;
                toProto(message: _15.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _15.MsgExecResponse): _15.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _15.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.MsgExec;
                fromPartial(object: Partial<_15.MsgExec>): _15.MsgExec;
                fromAmino(object: _15.MsgExecAmino): _15.MsgExec;
                toAmino(message: _15.MsgExec): _15.MsgExecAmino;
                fromAminoMsg(object: _15.MsgExecAminoMsg): _15.MsgExec;
                toAminoMsg(message: _15.MsgExec): _15.MsgExecAminoMsg;
                fromProtoMsg(message: _15.MsgExecProtoMsg): _15.MsgExec;
                toProto(message: _15.MsgExec): Uint8Array;
                toProtoMsg(message: _15.MsgExec): _15.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _15.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _15.MsgGrantResponse;
                fromPartial(_: Partial<_15.MsgGrantResponse>): _15.MsgGrantResponse;
                fromAmino(_: _15.MsgGrantResponseAmino): _15.MsgGrantResponse;
                toAmino(_: _15.MsgGrantResponse): _15.MsgGrantResponseAmino;
                fromAminoMsg(object: _15.MsgGrantResponseAminoMsg): _15.MsgGrantResponse;
                toAminoMsg(message: _15.MsgGrantResponse): _15.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _15.MsgGrantResponseProtoMsg): _15.MsgGrantResponse;
                toProto(message: _15.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _15.MsgGrantResponse): _15.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _15.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.MsgRevoke;
                fromPartial(object: Partial<_15.MsgRevoke>): _15.MsgRevoke;
                fromAmino(object: _15.MsgRevokeAmino): _15.MsgRevoke;
                toAmino(message: _15.MsgRevoke): _15.MsgRevokeAmino;
                fromAminoMsg(object: _15.MsgRevokeAminoMsg): _15.MsgRevoke;
                toAminoMsg(message: _15.MsgRevoke): _15.MsgRevokeAminoMsg;
                fromProtoMsg(message: _15.MsgRevokeProtoMsg): _15.MsgRevoke;
                toProto(message: _15.MsgRevoke): Uint8Array;
                toProtoMsg(message: _15.MsgRevoke): _15.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _15.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _15.MsgRevokeResponse;
                fromPartial(_: Partial<_15.MsgRevokeResponse>): _15.MsgRevokeResponse;
                fromAmino(_: _15.MsgRevokeResponseAmino): _15.MsgRevokeResponse;
                toAmino(_: _15.MsgRevokeResponse): _15.MsgRevokeResponseAmino;
                fromAminoMsg(object: _15.MsgRevokeResponseAminoMsg): _15.MsgRevokeResponse;
                toAminoMsg(message: _15.MsgRevokeResponse): _15.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _15.MsgRevokeResponseProtoMsg): _15.MsgRevokeResponse;
                toProto(message: _15.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _15.MsgRevokeResponse): _15.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _14.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryGrantsRequest;
                fromPartial(object: Partial<_14.QueryGrantsRequest>): _14.QueryGrantsRequest;
                fromAmino(object: _14.QueryGrantsRequestAmino): _14.QueryGrantsRequest;
                toAmino(message: _14.QueryGrantsRequest): _14.QueryGrantsRequestAmino;
                fromAminoMsg(object: _14.QueryGrantsRequestAminoMsg): _14.QueryGrantsRequest;
                toAminoMsg(message: _14.QueryGrantsRequest): _14.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _14.QueryGrantsRequestProtoMsg): _14.QueryGrantsRequest;
                toProto(message: _14.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _14.QueryGrantsRequest): _14.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _14.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryGrantsResponse;
                fromPartial(object: Partial<_14.QueryGrantsResponse>): _14.QueryGrantsResponse;
                fromAmino(object: _14.QueryGrantsResponseAmino): _14.QueryGrantsResponse;
                toAmino(message: _14.QueryGrantsResponse): _14.QueryGrantsResponseAmino;
                fromAminoMsg(object: _14.QueryGrantsResponseAminoMsg): _14.QueryGrantsResponse;
                toAminoMsg(message: _14.QueryGrantsResponse): _14.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _14.QueryGrantsResponseProtoMsg): _14.QueryGrantsResponse;
                toProto(message: _14.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _14.QueryGrantsResponse): _14.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _14.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_14.QueryGranterGrantsRequest>): _14.QueryGranterGrantsRequest;
                fromAmino(object: _14.QueryGranterGrantsRequestAmino): _14.QueryGranterGrantsRequest;
                toAmino(message: _14.QueryGranterGrantsRequest): _14.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _14.QueryGranterGrantsRequestAminoMsg): _14.QueryGranterGrantsRequest;
                toAminoMsg(message: _14.QueryGranterGrantsRequest): _14.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _14.QueryGranterGrantsRequestProtoMsg): _14.QueryGranterGrantsRequest;
                toProto(message: _14.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _14.QueryGranterGrantsRequest): _14.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _14.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_14.QueryGranterGrantsResponse>): _14.QueryGranterGrantsResponse;
                fromAmino(object: _14.QueryGranterGrantsResponseAmino): _14.QueryGranterGrantsResponse;
                toAmino(message: _14.QueryGranterGrantsResponse): _14.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _14.QueryGranterGrantsResponseAminoMsg): _14.QueryGranterGrantsResponse;
                toAminoMsg(message: _14.QueryGranterGrantsResponse): _14.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _14.QueryGranterGrantsResponseProtoMsg): _14.QueryGranterGrantsResponse;
                toProto(message: _14.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _14.QueryGranterGrantsResponse): _14.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _14.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_14.QueryGranteeGrantsRequest>): _14.QueryGranteeGrantsRequest;
                fromAmino(object: _14.QueryGranteeGrantsRequestAmino): _14.QueryGranteeGrantsRequest;
                toAmino(message: _14.QueryGranteeGrantsRequest): _14.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _14.QueryGranteeGrantsRequestAminoMsg): _14.QueryGranteeGrantsRequest;
                toAminoMsg(message: _14.QueryGranteeGrantsRequest): _14.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _14.QueryGranteeGrantsRequestProtoMsg): _14.QueryGranteeGrantsRequest;
                toProto(message: _14.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _14.QueryGranteeGrantsRequest): _14.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _14.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_14.QueryGranteeGrantsResponse>): _14.QueryGranteeGrantsResponse;
                fromAmino(object: _14.QueryGranteeGrantsResponseAmino): _14.QueryGranteeGrantsResponse;
                toAmino(message: _14.QueryGranteeGrantsResponse): _14.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _14.QueryGranteeGrantsResponseAminoMsg): _14.QueryGranteeGrantsResponse;
                toAminoMsg(message: _14.QueryGranteeGrantsResponse): _14.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _14.QueryGranteeGrantsResponseProtoMsg): _14.QueryGranteeGrantsResponse;
                toProto(message: _14.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _14.QueryGranteeGrantsResponse): _14.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _13.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.GenesisState;
                fromPartial(object: Partial<_13.GenesisState>): _13.GenesisState;
                fromAmino(object: _13.GenesisStateAmino): _13.GenesisState;
                toAmino(message: _13.GenesisState): _13.GenesisStateAmino;
                fromAminoMsg(object: _13.GenesisStateAminoMsg): _13.GenesisState;
                toAminoMsg(message: _13.GenesisState): _13.GenesisStateAminoMsg;
                fromProtoMsg(message: _13.GenesisStateProtoMsg): _13.GenesisState;
                toProto(message: _13.GenesisState): Uint8Array;
                toProtoMsg(message: _13.GenesisState): _13.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _12.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.EventGrant;
                fromPartial(object: Partial<_12.EventGrant>): _12.EventGrant;
                fromAmino(object: _12.EventGrantAmino): _12.EventGrant;
                toAmino(message: _12.EventGrant): _12.EventGrantAmino;
                fromAminoMsg(object: _12.EventGrantAminoMsg): _12.EventGrant;
                toAminoMsg(message: _12.EventGrant): _12.EventGrantAminoMsg;
                fromProtoMsg(message: _12.EventGrantProtoMsg): _12.EventGrant;
                toProto(message: _12.EventGrant): Uint8Array;
                toProtoMsg(message: _12.EventGrant): _12.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _12.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.EventRevoke;
                fromPartial(object: Partial<_12.EventRevoke>): _12.EventRevoke;
                fromAmino(object: _12.EventRevokeAmino): _12.EventRevoke;
                toAmino(message: _12.EventRevoke): _12.EventRevokeAmino;
                fromAminoMsg(object: _12.EventRevokeAminoMsg): _12.EventRevoke;
                toAminoMsg(message: _12.EventRevoke): _12.EventRevokeAminoMsg;
                fromProtoMsg(message: _12.EventRevokeProtoMsg): _12.EventRevoke;
                toProto(message: _12.EventRevoke): Uint8Array;
                toProtoMsg(message: _12.EventRevoke): _12.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _11.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.GenericAuthorization;
                fromPartial(object: Partial<_11.GenericAuthorization>): _11.GenericAuthorization;
                fromAmino(object: _11.GenericAuthorizationAmino): _11.GenericAuthorization;
                toAmino(message: _11.GenericAuthorization): _11.GenericAuthorizationAmino;
                fromAminoMsg(object: _11.GenericAuthorizationAminoMsg): _11.GenericAuthorization;
                toAminoMsg(message: _11.GenericAuthorization): _11.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _11.GenericAuthorizationProtoMsg): _11.GenericAuthorization;
                toProto(message: _11.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _11.GenericAuthorization): _11.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _11.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Grant;
                fromPartial(object: Partial<_11.Grant>): _11.Grant;
                fromAmino(object: _11.GrantAmino): _11.Grant;
                toAmino(message: _11.Grant): _11.GrantAmino;
                fromAminoMsg(object: _11.GrantAminoMsg): _11.Grant;
                toAminoMsg(message: _11.Grant): _11.GrantAminoMsg;
                fromProtoMsg(message: _11.GrantProtoMsg): _11.Grant;
                toProto(message: _11.Grant): Uint8Array;
                toProtoMsg(message: _11.Grant): _11.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _11.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.GrantAuthorization;
                fromPartial(object: Partial<_11.GrantAuthorization>): _11.GrantAuthorization;
                fromAmino(object: _11.GrantAuthorizationAmino): _11.GrantAuthorization;
                toAmino(message: _11.GrantAuthorization): _11.GrantAuthorizationAmino;
                fromAminoMsg(object: _11.GrantAuthorizationAminoMsg): _11.GrantAuthorization;
                toAminoMsg(message: _11.GrantAuthorization): _11.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _11.GrantAuthorizationProtoMsg): _11.GrantAuthorization;
                toProto(message: _11.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _11.GrantAuthorization): _11.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _16.SendAuthorization | _67.StakeAuthorization | _11.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _189.MsgClientImpl;
            QueryClientImpl: typeof _175.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _19.QueryBalanceRequest): Promise<_19.QueryBalanceResponse>;
                allBalances(request: _19.QueryAllBalancesRequest): Promise<_19.QueryAllBalancesResponse>;
                spendableBalances(request: _19.QuerySpendableBalancesRequest): Promise<_19.QuerySpendableBalancesResponse>;
                totalSupply(request?: _19.QueryTotalSupplyRequest): Promise<_19.QueryTotalSupplyResponse>;
                supplyOf(request: _19.QuerySupplyOfRequest): Promise<_19.QuerySupplyOfResponse>;
                params(request?: _19.QueryParamsRequest): Promise<_19.QueryParamsResponse>;
                denomMetadata(request: _19.QueryDenomMetadataRequest): Promise<_19.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _19.QueryDenomsMetadataRequest): Promise<_19.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _160.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _20.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _20.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _20.MsgSend): {
                        typeUrl: string;
                        value: _20.MsgSend;
                    };
                    multiSend(value: _20.MsgMultiSend): {
                        typeUrl: string;
                        value: _20.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _20.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _20.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _20.MsgSend): {
                        typeUrl: string;
                        value: _20.MsgSend;
                    };
                    multiSend(value: _20.MsgMultiSend): {
                        typeUrl: string;
                        value: _20.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _20.MsgSend) => _20.MsgSendAmino;
                    fromAmino: (object: _20.MsgSendAmino) => _20.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _20.MsgMultiSend) => _20.MsgMultiSendAmino;
                    fromAmino: (object: _20.MsgMultiSendAmino) => _20.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _20.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.MsgSend;
                fromPartial(object: Partial<_20.MsgSend>): _20.MsgSend;
                fromAmino(object: _20.MsgSendAmino): _20.MsgSend;
                toAmino(message: _20.MsgSend): _20.MsgSendAmino;
                fromAminoMsg(object: _20.MsgSendAminoMsg): _20.MsgSend;
                toAminoMsg(message: _20.MsgSend): _20.MsgSendAminoMsg;
                fromProtoMsg(message: _20.MsgSendProtoMsg): _20.MsgSend;
                toProto(message: _20.MsgSend): Uint8Array;
                toProtoMsg(message: _20.MsgSend): _20.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _20.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.MsgSendResponse;
                fromPartial(_: Partial<_20.MsgSendResponse>): _20.MsgSendResponse;
                fromAmino(_: _20.MsgSendResponseAmino): _20.MsgSendResponse;
                toAmino(_: _20.MsgSendResponse): _20.MsgSendResponseAmino;
                fromAminoMsg(object: _20.MsgSendResponseAminoMsg): _20.MsgSendResponse;
                toAminoMsg(message: _20.MsgSendResponse): _20.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _20.MsgSendResponseProtoMsg): _20.MsgSendResponse;
                toProto(message: _20.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _20.MsgSendResponse): _20.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _20.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.MsgMultiSend;
                fromPartial(object: Partial<_20.MsgMultiSend>): _20.MsgMultiSend;
                fromAmino(object: _20.MsgMultiSendAmino): _20.MsgMultiSend;
                toAmino(message: _20.MsgMultiSend): _20.MsgMultiSendAmino;
                fromAminoMsg(object: _20.MsgMultiSendAminoMsg): _20.MsgMultiSend;
                toAminoMsg(message: _20.MsgMultiSend): _20.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _20.MsgMultiSendProtoMsg): _20.MsgMultiSend;
                toProto(message: _20.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _20.MsgMultiSend): _20.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _20.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.MsgMultiSendResponse;
                fromPartial(_: Partial<_20.MsgMultiSendResponse>): _20.MsgMultiSendResponse;
                fromAmino(_: _20.MsgMultiSendResponseAmino): _20.MsgMultiSendResponse;
                toAmino(_: _20.MsgMultiSendResponse): _20.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _20.MsgMultiSendResponseAminoMsg): _20.MsgMultiSendResponse;
                toAminoMsg(message: _20.MsgMultiSendResponse): _20.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _20.MsgMultiSendResponseProtoMsg): _20.MsgMultiSendResponse;
                toProto(message: _20.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _20.MsgMultiSendResponse): _20.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _19.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryBalanceRequest;
                fromPartial(object: Partial<_19.QueryBalanceRequest>): _19.QueryBalanceRequest;
                fromAmino(object: _19.QueryBalanceRequestAmino): _19.QueryBalanceRequest;
                toAmino(message: _19.QueryBalanceRequest): _19.QueryBalanceRequestAmino;
                fromAminoMsg(object: _19.QueryBalanceRequestAminoMsg): _19.QueryBalanceRequest;
                toAminoMsg(message: _19.QueryBalanceRequest): _19.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _19.QueryBalanceRequestProtoMsg): _19.QueryBalanceRequest;
                toProto(message: _19.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _19.QueryBalanceRequest): _19.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _19.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryBalanceResponse;
                fromPartial(object: Partial<_19.QueryBalanceResponse>): _19.QueryBalanceResponse;
                fromAmino(object: _19.QueryBalanceResponseAmino): _19.QueryBalanceResponse;
                toAmino(message: _19.QueryBalanceResponse): _19.QueryBalanceResponseAmino;
                fromAminoMsg(object: _19.QueryBalanceResponseAminoMsg): _19.QueryBalanceResponse;
                toAminoMsg(message: _19.QueryBalanceResponse): _19.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _19.QueryBalanceResponseProtoMsg): _19.QueryBalanceResponse;
                toProto(message: _19.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _19.QueryBalanceResponse): _19.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _19.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryAllBalancesRequest;
                fromPartial(object: Partial<_19.QueryAllBalancesRequest>): _19.QueryAllBalancesRequest;
                fromAmino(object: _19.QueryAllBalancesRequestAmino): _19.QueryAllBalancesRequest;
                toAmino(message: _19.QueryAllBalancesRequest): _19.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _19.QueryAllBalancesRequestAminoMsg): _19.QueryAllBalancesRequest;
                toAminoMsg(message: _19.QueryAllBalancesRequest): _19.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _19.QueryAllBalancesRequestProtoMsg): _19.QueryAllBalancesRequest;
                toProto(message: _19.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _19.QueryAllBalancesRequest): _19.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _19.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryAllBalancesResponse;
                fromPartial(object: Partial<_19.QueryAllBalancesResponse>): _19.QueryAllBalancesResponse;
                fromAmino(object: _19.QueryAllBalancesResponseAmino): _19.QueryAllBalancesResponse;
                toAmino(message: _19.QueryAllBalancesResponse): _19.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _19.QueryAllBalancesResponseAminoMsg): _19.QueryAllBalancesResponse;
                toAminoMsg(message: _19.QueryAllBalancesResponse): _19.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _19.QueryAllBalancesResponseProtoMsg): _19.QueryAllBalancesResponse;
                toProto(message: _19.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _19.QueryAllBalancesResponse): _19.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _19.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_19.QuerySpendableBalancesRequest>): _19.QuerySpendableBalancesRequest;
                fromAmino(object: _19.QuerySpendableBalancesRequestAmino): _19.QuerySpendableBalancesRequest;
                toAmino(message: _19.QuerySpendableBalancesRequest): _19.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _19.QuerySpendableBalancesRequestAminoMsg): _19.QuerySpendableBalancesRequest;
                toAminoMsg(message: _19.QuerySpendableBalancesRequest): _19.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _19.QuerySpendableBalancesRequestProtoMsg): _19.QuerySpendableBalancesRequest;
                toProto(message: _19.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _19.QuerySpendableBalancesRequest): _19.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _19.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_19.QuerySpendableBalancesResponse>): _19.QuerySpendableBalancesResponse;
                fromAmino(object: _19.QuerySpendableBalancesResponseAmino): _19.QuerySpendableBalancesResponse;
                toAmino(message: _19.QuerySpendableBalancesResponse): _19.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _19.QuerySpendableBalancesResponseAminoMsg): _19.QuerySpendableBalancesResponse;
                toAminoMsg(message: _19.QuerySpendableBalancesResponse): _19.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _19.QuerySpendableBalancesResponseProtoMsg): _19.QuerySpendableBalancesResponse;
                toProto(message: _19.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _19.QuerySpendableBalancesResponse): _19.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _19.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_19.QueryTotalSupplyRequest>): _19.QueryTotalSupplyRequest;
                fromAmino(object: _19.QueryTotalSupplyRequestAmino): _19.QueryTotalSupplyRequest;
                toAmino(message: _19.QueryTotalSupplyRequest): _19.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _19.QueryTotalSupplyRequestAminoMsg): _19.QueryTotalSupplyRequest;
                toAminoMsg(message: _19.QueryTotalSupplyRequest): _19.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _19.QueryTotalSupplyRequestProtoMsg): _19.QueryTotalSupplyRequest;
                toProto(message: _19.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _19.QueryTotalSupplyRequest): _19.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _19.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_19.QueryTotalSupplyResponse>): _19.QueryTotalSupplyResponse;
                fromAmino(object: _19.QueryTotalSupplyResponseAmino): _19.QueryTotalSupplyResponse;
                toAmino(message: _19.QueryTotalSupplyResponse): _19.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _19.QueryTotalSupplyResponseAminoMsg): _19.QueryTotalSupplyResponse;
                toAminoMsg(message: _19.QueryTotalSupplyResponse): _19.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _19.QueryTotalSupplyResponseProtoMsg): _19.QueryTotalSupplyResponse;
                toProto(message: _19.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _19.QueryTotalSupplyResponse): _19.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _19.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QuerySupplyOfRequest;
                fromPartial(object: Partial<_19.QuerySupplyOfRequest>): _19.QuerySupplyOfRequest;
                fromAmino(object: _19.QuerySupplyOfRequestAmino): _19.QuerySupplyOfRequest;
                toAmino(message: _19.QuerySupplyOfRequest): _19.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _19.QuerySupplyOfRequestAminoMsg): _19.QuerySupplyOfRequest;
                toAminoMsg(message: _19.QuerySupplyOfRequest): _19.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _19.QuerySupplyOfRequestProtoMsg): _19.QuerySupplyOfRequest;
                toProto(message: _19.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _19.QuerySupplyOfRequest): _19.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _19.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QuerySupplyOfResponse;
                fromPartial(object: Partial<_19.QuerySupplyOfResponse>): _19.QuerySupplyOfResponse;
                fromAmino(object: _19.QuerySupplyOfResponseAmino): _19.QuerySupplyOfResponse;
                toAmino(message: _19.QuerySupplyOfResponse): _19.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _19.QuerySupplyOfResponseAminoMsg): _19.QuerySupplyOfResponse;
                toAminoMsg(message: _19.QuerySupplyOfResponse): _19.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _19.QuerySupplyOfResponseProtoMsg): _19.QuerySupplyOfResponse;
                toProto(message: _19.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _19.QuerySupplyOfResponse): _19.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _19.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.QueryParamsRequest;
                fromPartial(_: Partial<_19.QueryParamsRequest>): _19.QueryParamsRequest;
                fromAmino(_: _19.QueryParamsRequestAmino): _19.QueryParamsRequest;
                toAmino(_: _19.QueryParamsRequest): _19.QueryParamsRequestAmino;
                fromAminoMsg(object: _19.QueryParamsRequestAminoMsg): _19.QueryParamsRequest;
                toAminoMsg(message: _19.QueryParamsRequest): _19.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _19.QueryParamsRequestProtoMsg): _19.QueryParamsRequest;
                toProto(message: _19.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _19.QueryParamsRequest): _19.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _19.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryParamsResponse;
                fromPartial(object: Partial<_19.QueryParamsResponse>): _19.QueryParamsResponse;
                fromAmino(object: _19.QueryParamsResponseAmino): _19.QueryParamsResponse;
                toAmino(message: _19.QueryParamsResponse): _19.QueryParamsResponseAmino;
                fromAminoMsg(object: _19.QueryParamsResponseAminoMsg): _19.QueryParamsResponse;
                toAminoMsg(message: _19.QueryParamsResponse): _19.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _19.QueryParamsResponseProtoMsg): _19.QueryParamsResponse;
                toProto(message: _19.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _19.QueryParamsResponse): _19.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _19.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_19.QueryDenomsMetadataRequest>): _19.QueryDenomsMetadataRequest;
                fromAmino(object: _19.QueryDenomsMetadataRequestAmino): _19.QueryDenomsMetadataRequest;
                toAmino(message: _19.QueryDenomsMetadataRequest): _19.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _19.QueryDenomsMetadataRequestAminoMsg): _19.QueryDenomsMetadataRequest;
                toAminoMsg(message: _19.QueryDenomsMetadataRequest): _19.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _19.QueryDenomsMetadataRequestProtoMsg): _19.QueryDenomsMetadataRequest;
                toProto(message: _19.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _19.QueryDenomsMetadataRequest): _19.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _19.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_19.QueryDenomsMetadataResponse>): _19.QueryDenomsMetadataResponse;
                fromAmino(object: _19.QueryDenomsMetadataResponseAmino): _19.QueryDenomsMetadataResponse;
                toAmino(message: _19.QueryDenomsMetadataResponse): _19.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _19.QueryDenomsMetadataResponseAminoMsg): _19.QueryDenomsMetadataResponse;
                toAminoMsg(message: _19.QueryDenomsMetadataResponse): _19.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _19.QueryDenomsMetadataResponseProtoMsg): _19.QueryDenomsMetadataResponse;
                toProto(message: _19.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _19.QueryDenomsMetadataResponse): _19.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _19.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_19.QueryDenomMetadataRequest>): _19.QueryDenomMetadataRequest;
                fromAmino(object: _19.QueryDenomMetadataRequestAmino): _19.QueryDenomMetadataRequest;
                toAmino(message: _19.QueryDenomMetadataRequest): _19.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _19.QueryDenomMetadataRequestAminoMsg): _19.QueryDenomMetadataRequest;
                toAminoMsg(message: _19.QueryDenomMetadataRequest): _19.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _19.QueryDenomMetadataRequestProtoMsg): _19.QueryDenomMetadataRequest;
                toProto(message: _19.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _19.QueryDenomMetadataRequest): _19.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _19.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_19.QueryDenomMetadataResponse>): _19.QueryDenomMetadataResponse;
                fromAmino(object: _19.QueryDenomMetadataResponseAmino): _19.QueryDenomMetadataResponse;
                toAmino(message: _19.QueryDenomMetadataResponse): _19.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _19.QueryDenomMetadataResponseAminoMsg): _19.QueryDenomMetadataResponse;
                toAminoMsg(message: _19.QueryDenomMetadataResponse): _19.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _19.QueryDenomMetadataResponseProtoMsg): _19.QueryDenomMetadataResponse;
                toProto(message: _19.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _19.QueryDenomMetadataResponse): _19.QueryDenomMetadataResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _18.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.GenesisState;
                fromPartial(object: Partial<_18.GenesisState>): _18.GenesisState;
                fromAmino(object: _18.GenesisStateAmino): _18.GenesisState;
                toAmino(message: _18.GenesisState): _18.GenesisStateAmino;
                fromAminoMsg(object: _18.GenesisStateAminoMsg): _18.GenesisState;
                toAminoMsg(message: _18.GenesisState): _18.GenesisStateAminoMsg;
                fromProtoMsg(message: _18.GenesisStateProtoMsg): _18.GenesisState;
                toProto(message: _18.GenesisState): Uint8Array;
                toProtoMsg(message: _18.GenesisState): _18.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _18.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.Balance;
                fromPartial(object: Partial<_18.Balance>): _18.Balance;
                fromAmino(object: _18.BalanceAmino): _18.Balance;
                toAmino(message: _18.Balance): _18.BalanceAmino;
                fromAminoMsg(object: _18.BalanceAminoMsg): _18.Balance;
                toAminoMsg(message: _18.Balance): _18.BalanceAminoMsg;
                fromProtoMsg(message: _18.BalanceProtoMsg): _18.Balance;
                toProto(message: _18.Balance): Uint8Array;
                toProtoMsg(message: _18.Balance): _18.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _17.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Params;
                fromPartial(object: Partial<_17.Params>): _17.Params;
                fromAmino(object: _17.ParamsAmino): _17.Params;
                toAmino(message: _17.Params): _17.ParamsAmino;
                fromAminoMsg(object: _17.ParamsAminoMsg): _17.Params;
                toAminoMsg(message: _17.Params): _17.ParamsAminoMsg;
                fromProtoMsg(message: _17.ParamsProtoMsg): _17.Params;
                toProto(message: _17.Params): Uint8Array;
                toProtoMsg(message: _17.Params): _17.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _17.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.SendEnabled;
                fromPartial(object: Partial<_17.SendEnabled>): _17.SendEnabled;
                fromAmino(object: _17.SendEnabledAmino): _17.SendEnabled;
                toAmino(message: _17.SendEnabled): _17.SendEnabledAmino;
                fromAminoMsg(object: _17.SendEnabledAminoMsg): _17.SendEnabled;
                toAminoMsg(message: _17.SendEnabled): _17.SendEnabledAminoMsg;
                fromProtoMsg(message: _17.SendEnabledProtoMsg): _17.SendEnabled;
                toProto(message: _17.SendEnabled): Uint8Array;
                toProtoMsg(message: _17.SendEnabled): _17.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _17.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Input;
                fromPartial(object: Partial<_17.Input>): _17.Input;
                fromAmino(object: _17.InputAmino): _17.Input;
                toAmino(message: _17.Input): _17.InputAmino;
                fromAminoMsg(object: _17.InputAminoMsg): _17.Input;
                toAminoMsg(message: _17.Input): _17.InputAminoMsg;
                fromProtoMsg(message: _17.InputProtoMsg): _17.Input;
                toProto(message: _17.Input): Uint8Array;
                toProtoMsg(message: _17.Input): _17.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _17.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Output;
                fromPartial(object: Partial<_17.Output>): _17.Output;
                fromAmino(object: _17.OutputAmino): _17.Output;
                toAmino(message: _17.Output): _17.OutputAmino;
                fromAminoMsg(object: _17.OutputAminoMsg): _17.Output;
                toAminoMsg(message: _17.Output): _17.OutputAminoMsg;
                fromProtoMsg(message: _17.OutputProtoMsg): _17.Output;
                toProto(message: _17.Output): Uint8Array;
                toProtoMsg(message: _17.Output): _17.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _17.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Supply;
                fromPartial(object: Partial<_17.Supply>): _17.Supply;
                fromAmino(object: _17.SupplyAmino): _17.Supply;
                toAmino(message: _17.Supply): _17.SupplyAmino;
                fromAminoMsg(object: _17.SupplyAminoMsg): _17.Supply;
                toAminoMsg(message: _17.Supply): _17.SupplyAminoMsg;
                fromProtoMsg(message: _17.SupplyProtoMsg): _17.Supply;
                toProto(message: _17.Supply): Uint8Array;
                toProtoMsg(message: _17.Supply): _17.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _17.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.DenomUnit;
                fromPartial(object: Partial<_17.DenomUnit>): _17.DenomUnit;
                fromAmino(object: _17.DenomUnitAmino): _17.DenomUnit;
                toAmino(message: _17.DenomUnit): _17.DenomUnitAmino;
                fromAminoMsg(object: _17.DenomUnitAminoMsg): _17.DenomUnit;
                toAminoMsg(message: _17.DenomUnit): _17.DenomUnitAminoMsg;
                fromProtoMsg(message: _17.DenomUnitProtoMsg): _17.DenomUnit;
                toProto(message: _17.DenomUnit): Uint8Array;
                toProtoMsg(message: _17.DenomUnit): _17.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _17.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Metadata;
                fromPartial(object: Partial<_17.Metadata>): _17.Metadata;
                fromAmino(object: _17.MetadataAmino): _17.Metadata;
                toAmino(message: _17.Metadata): _17.MetadataAmino;
                fromAminoMsg(object: _17.MetadataAminoMsg): _17.Metadata;
                toAminoMsg(message: _17.Metadata): _17.MetadataAminoMsg;
                fromProtoMsg(message: _17.MetadataProtoMsg): _17.Metadata;
                toProto(message: _17.Metadata): Uint8Array;
                toProtoMsg(message: _17.Metadata): _17.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _16.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.SendAuthorization;
                fromPartial(object: Partial<_16.SendAuthorization>): _16.SendAuthorization;
                fromAmino(object: _16.SendAuthorizationAmino): _16.SendAuthorization;
                toAmino(message: _16.SendAuthorization): _16.SendAuthorizationAmino;
                fromAminoMsg(object: _16.SendAuthorizationAminoMsg): _16.SendAuthorization;
                toAminoMsg(message: _16.SendAuthorization): _16.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _16.SendAuthorizationProtoMsg): _16.SendAuthorization;
                toProto(message: _16.SendAuthorization): Uint8Array;
                toProtoMsg(message: _16.SendAuthorization): _16.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _21.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.TxResponse;
                    fromPartial(object: Partial<_21.TxResponse>): _21.TxResponse;
                    fromAmino(object: _21.TxResponseAmino): _21.TxResponse;
                    toAmino(message: _21.TxResponse): _21.TxResponseAmino;
                    fromAminoMsg(object: _21.TxResponseAminoMsg): _21.TxResponse;
                    toAminoMsg(message: _21.TxResponse): _21.TxResponseAminoMsg;
                    fromProtoMsg(message: _21.TxResponseProtoMsg): _21.TxResponse;
                    toProto(message: _21.TxResponse): Uint8Array;
                    toProtoMsg(message: _21.TxResponse): _21.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _21.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.ABCIMessageLog;
                    fromPartial(object: Partial<_21.ABCIMessageLog>): _21.ABCIMessageLog;
                    fromAmino(object: _21.ABCIMessageLogAmino): _21.ABCIMessageLog;
                    toAmino(message: _21.ABCIMessageLog): _21.ABCIMessageLogAmino;
                    fromAminoMsg(object: _21.ABCIMessageLogAminoMsg): _21.ABCIMessageLog;
                    toAminoMsg(message: _21.ABCIMessageLog): _21.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _21.ABCIMessageLogProtoMsg): _21.ABCIMessageLog;
                    toProto(message: _21.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _21.ABCIMessageLog): _21.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _21.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.StringEvent;
                    fromPartial(object: Partial<_21.StringEvent>): _21.StringEvent;
                    fromAmino(object: _21.StringEventAmino): _21.StringEvent;
                    toAmino(message: _21.StringEvent): _21.StringEventAmino;
                    fromAminoMsg(object: _21.StringEventAminoMsg): _21.StringEvent;
                    toAminoMsg(message: _21.StringEvent): _21.StringEventAminoMsg;
                    fromProtoMsg(message: _21.StringEventProtoMsg): _21.StringEvent;
                    toProto(message: _21.StringEvent): Uint8Array;
                    toProtoMsg(message: _21.StringEvent): _21.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _21.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.Attribute;
                    fromPartial(object: Partial<_21.Attribute>): _21.Attribute;
                    fromAmino(object: _21.AttributeAmino): _21.Attribute;
                    toAmino(message: _21.Attribute): _21.AttributeAmino;
                    fromAminoMsg(object: _21.AttributeAminoMsg): _21.Attribute;
                    toAminoMsg(message: _21.Attribute): _21.AttributeAminoMsg;
                    fromProtoMsg(message: _21.AttributeProtoMsg): _21.Attribute;
                    toProto(message: _21.Attribute): Uint8Array;
                    toProtoMsg(message: _21.Attribute): _21.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _21.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.GasInfo;
                    fromPartial(object: Partial<_21.GasInfo>): _21.GasInfo;
                    fromAmino(object: _21.GasInfoAmino): _21.GasInfo;
                    toAmino(message: _21.GasInfo): _21.GasInfoAmino;
                    fromAminoMsg(object: _21.GasInfoAminoMsg): _21.GasInfo;
                    toAminoMsg(message: _21.GasInfo): _21.GasInfoAminoMsg;
                    fromProtoMsg(message: _21.GasInfoProtoMsg): _21.GasInfo;
                    toProto(message: _21.GasInfo): Uint8Array;
                    toProtoMsg(message: _21.GasInfo): _21.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _21.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.Result;
                    fromPartial(object: Partial<_21.Result>): _21.Result;
                    fromAmino(object: _21.ResultAmino): _21.Result;
                    toAmino(message: _21.Result): _21.ResultAmino;
                    fromAminoMsg(object: _21.ResultAminoMsg): _21.Result;
                    toAminoMsg(message: _21.Result): _21.ResultAminoMsg;
                    fromProtoMsg(message: _21.ResultProtoMsg): _21.Result;
                    toProto(message: _21.Result): Uint8Array;
                    toProtoMsg(message: _21.Result): _21.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _21.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.SimulationResponse;
                    fromPartial(object: Partial<_21.SimulationResponse>): _21.SimulationResponse;
                    fromAmino(object: _21.SimulationResponseAmino): _21.SimulationResponse;
                    toAmino(message: _21.SimulationResponse): _21.SimulationResponseAmino;
                    fromAminoMsg(object: _21.SimulationResponseAminoMsg): _21.SimulationResponse;
                    toAminoMsg(message: _21.SimulationResponse): _21.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _21.SimulationResponseProtoMsg): _21.SimulationResponse;
                    toProto(message: _21.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _21.SimulationResponse): _21.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _21.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.MsgData;
                    fromPartial(object: Partial<_21.MsgData>): _21.MsgData;
                    fromAmino(object: _21.MsgDataAmino): _21.MsgData;
                    toAmino(message: _21.MsgData): _21.MsgDataAmino;
                    fromAminoMsg(object: _21.MsgDataAminoMsg): _21.MsgData;
                    toAminoMsg(message: _21.MsgData): _21.MsgDataAminoMsg;
                    fromProtoMsg(message: _21.MsgDataProtoMsg): _21.MsgData;
                    toProto(message: _21.MsgData): Uint8Array;
                    toProtoMsg(message: _21.MsgData): _21.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _21.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.TxMsgData;
                    fromPartial(object: Partial<_21.TxMsgData>): _21.TxMsgData;
                    fromAmino(object: _21.TxMsgDataAmino): _21.TxMsgData;
                    toAmino(message: _21.TxMsgData): _21.TxMsgDataAmino;
                    fromAminoMsg(object: _21.TxMsgDataAminoMsg): _21.TxMsgData;
                    toAminoMsg(message: _21.TxMsgData): _21.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _21.TxMsgDataProtoMsg): _21.TxMsgData;
                    toProto(message: _21.TxMsgData): Uint8Array;
                    toProtoMsg(message: _21.TxMsgData): _21.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _21.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.SearchTxsResult;
                    fromPartial(object: Partial<_21.SearchTxsResult>): _21.SearchTxsResult;
                    fromAmino(object: _21.SearchTxsResultAmino): _21.SearchTxsResult;
                    toAmino(message: _21.SearchTxsResult): _21.SearchTxsResultAmino;
                    fromAminoMsg(object: _21.SearchTxsResultAminoMsg): _21.SearchTxsResult;
                    toAminoMsg(message: _21.SearchTxsResult): _21.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _21.SearchTxsResultProtoMsg): _21.SearchTxsResult;
                    toProto(message: _21.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _21.SearchTxsResult): _21.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _22.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.Pairs;
                    fromPartial(object: Partial<_22.Pairs>): _22.Pairs;
                    fromAmino(object: _22.PairsAmino): _22.Pairs;
                    toAmino(message: _22.Pairs): _22.PairsAmino;
                    fromAminoMsg(object: _22.PairsAminoMsg): _22.Pairs;
                    toAminoMsg(message: _22.Pairs): _22.PairsAminoMsg;
                    fromProtoMsg(message: _22.PairsProtoMsg): _22.Pairs;
                    toProto(message: _22.Pairs): Uint8Array;
                    toProtoMsg(message: _22.Pairs): _22.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _22.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.Pair;
                    fromPartial(object: Partial<_22.Pair>): _22.Pair;
                    fromAmino(object: _22.PairAmino): _22.Pair;
                    toAmino(message: _22.Pair): _22.PairAmino;
                    fromAminoMsg(object: _22.PairAminoMsg): _22.Pair;
                    toAminoMsg(message: _22.Pair): _22.PairAminoMsg;
                    fromProtoMsg(message: _22.PairProtoMsg): _22.Pair;
                    toProto(message: _22.Pair): Uint8Array;
                    toProtoMsg(message: _22.Pair): _22.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _176.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _23.ConfigRequest): Promise<_23.ConfigResponse>;
                };
                LCDQueryClient: typeof _161.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _23.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _23.ConfigRequest;
                    fromPartial(_: Partial<_23.ConfigRequest>): _23.ConfigRequest;
                    fromAmino(_: _23.ConfigRequestAmino): _23.ConfigRequest;
                    toAmino(_: _23.ConfigRequest): _23.ConfigRequestAmino;
                    fromAminoMsg(object: _23.ConfigRequestAminoMsg): _23.ConfigRequest;
                    toAminoMsg(message: _23.ConfigRequest): _23.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _23.ConfigRequestProtoMsg): _23.ConfigRequest;
                    toProto(message: _23.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _23.ConfigRequest): _23.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _23.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.ConfigResponse;
                    fromPartial(object: Partial<_23.ConfigResponse>): _23.ConfigResponse;
                    fromAmino(object: _23.ConfigResponseAmino): _23.ConfigResponse;
                    toAmino(message: _23.ConfigResponse): _23.ConfigResponseAmino;
                    fromAminoMsg(object: _23.ConfigResponseAminoMsg): _23.ConfigResponse;
                    toAminoMsg(message: _23.ConfigResponse): _23.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _23.ConfigResponseProtoMsg): _23.ConfigResponse;
                    toProto(message: _23.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _23.ConfigResponse): _23.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _24.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.PageRequest;
                    fromPartial(object: Partial<_24.PageRequest>): _24.PageRequest;
                    fromAmino(object: _24.PageRequestAmino): _24.PageRequest;
                    toAmino(message: _24.PageRequest): _24.PageRequestAmino;
                    fromAminoMsg(object: _24.PageRequestAminoMsg): _24.PageRequest;
                    toAminoMsg(message: _24.PageRequest): _24.PageRequestAminoMsg;
                    fromProtoMsg(message: _24.PageRequestProtoMsg): _24.PageRequest;
                    toProto(message: _24.PageRequest): Uint8Array;
                    toProtoMsg(message: _24.PageRequest): _24.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _24.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.PageResponse;
                    fromPartial(object: Partial<_24.PageResponse>): _24.PageResponse;
                    fromAmino(object: _24.PageResponseAmino): _24.PageResponse;
                    toAmino(message: _24.PageResponse): _24.PageResponseAmino;
                    fromAminoMsg(object: _24.PageResponseAminoMsg): _24.PageResponse;
                    toAminoMsg(message: _24.PageResponse): _24.PageResponseAminoMsg;
                    fromProtoMsg(message: _24.PageResponseProtoMsg): _24.PageResponse;
                    toProto(message: _24.PageResponse): Uint8Array;
                    toProtoMsg(message: _24.PageResponse): _24.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _25.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _25.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_25.ListAllInterfacesRequest>): _25.ListAllInterfacesRequest;
                    fromAmino(_: _25.ListAllInterfacesRequestAmino): _25.ListAllInterfacesRequest;
                    toAmino(_: _25.ListAllInterfacesRequest): _25.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _25.ListAllInterfacesRequestAminoMsg): _25.ListAllInterfacesRequest;
                    toAminoMsg(message: _25.ListAllInterfacesRequest): _25.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _25.ListAllInterfacesRequestProtoMsg): _25.ListAllInterfacesRequest;
                    toProto(message: _25.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _25.ListAllInterfacesRequest): _25.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _25.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_25.ListAllInterfacesResponse>): _25.ListAllInterfacesResponse;
                    fromAmino(object: _25.ListAllInterfacesResponseAmino): _25.ListAllInterfacesResponse;
                    toAmino(message: _25.ListAllInterfacesResponse): _25.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _25.ListAllInterfacesResponseAminoMsg): _25.ListAllInterfacesResponse;
                    toAminoMsg(message: _25.ListAllInterfacesResponse): _25.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _25.ListAllInterfacesResponseProtoMsg): _25.ListAllInterfacesResponse;
                    toProto(message: _25.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _25.ListAllInterfacesResponse): _25.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _25.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.ListImplementationsRequest;
                    fromPartial(object: Partial<_25.ListImplementationsRequest>): _25.ListImplementationsRequest;
                    fromAmino(object: _25.ListImplementationsRequestAmino): _25.ListImplementationsRequest;
                    toAmino(message: _25.ListImplementationsRequest): _25.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _25.ListImplementationsRequestAminoMsg): _25.ListImplementationsRequest;
                    toAminoMsg(message: _25.ListImplementationsRequest): _25.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _25.ListImplementationsRequestProtoMsg): _25.ListImplementationsRequest;
                    toProto(message: _25.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _25.ListImplementationsRequest): _25.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _25.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.ListImplementationsResponse;
                    fromPartial(object: Partial<_25.ListImplementationsResponse>): _25.ListImplementationsResponse;
                    fromAmino(object: _25.ListImplementationsResponseAmino): _25.ListImplementationsResponse;
                    toAmino(message: _25.ListImplementationsResponse): _25.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _25.ListImplementationsResponseAminoMsg): _25.ListImplementationsResponse;
                    toAminoMsg(message: _25.ListImplementationsResponse): _25.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _25.ListImplementationsResponseProtoMsg): _25.ListImplementationsResponse;
                    toProto(message: _25.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _25.ListImplementationsResponse): _25.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _26.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.AppDescriptor;
                    fromPartial(object: Partial<_26.AppDescriptor>): _26.AppDescriptor;
                    fromAmino(object: _26.AppDescriptorAmino): _26.AppDescriptor;
                    toAmino(message: _26.AppDescriptor): _26.AppDescriptorAmino;
                    fromAminoMsg(object: _26.AppDescriptorAminoMsg): _26.AppDescriptor;
                    toAminoMsg(message: _26.AppDescriptor): _26.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _26.AppDescriptorProtoMsg): _26.AppDescriptor;
                    toProto(message: _26.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _26.AppDescriptor): _26.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _26.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.TxDescriptor;
                    fromPartial(object: Partial<_26.TxDescriptor>): _26.TxDescriptor;
                    fromAmino(object: _26.TxDescriptorAmino): _26.TxDescriptor;
                    toAmino(message: _26.TxDescriptor): _26.TxDescriptorAmino;
                    fromAminoMsg(object: _26.TxDescriptorAminoMsg): _26.TxDescriptor;
                    toAminoMsg(message: _26.TxDescriptor): _26.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _26.TxDescriptorProtoMsg): _26.TxDescriptor;
                    toProto(message: _26.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _26.TxDescriptor): _26.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _26.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.AuthnDescriptor;
                    fromPartial(object: Partial<_26.AuthnDescriptor>): _26.AuthnDescriptor;
                    fromAmino(object: _26.AuthnDescriptorAmino): _26.AuthnDescriptor;
                    toAmino(message: _26.AuthnDescriptor): _26.AuthnDescriptorAmino;
                    fromAminoMsg(object: _26.AuthnDescriptorAminoMsg): _26.AuthnDescriptor;
                    toAminoMsg(message: _26.AuthnDescriptor): _26.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _26.AuthnDescriptorProtoMsg): _26.AuthnDescriptor;
                    toProto(message: _26.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _26.AuthnDescriptor): _26.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _26.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.SigningModeDescriptor;
                    fromPartial(object: Partial<_26.SigningModeDescriptor>): _26.SigningModeDescriptor;
                    fromAmino(object: _26.SigningModeDescriptorAmino): _26.SigningModeDescriptor;
                    toAmino(message: _26.SigningModeDescriptor): _26.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _26.SigningModeDescriptorAminoMsg): _26.SigningModeDescriptor;
                    toAminoMsg(message: _26.SigningModeDescriptor): _26.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _26.SigningModeDescriptorProtoMsg): _26.SigningModeDescriptor;
                    toProto(message: _26.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _26.SigningModeDescriptor): _26.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _26.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.ChainDescriptor;
                    fromPartial(object: Partial<_26.ChainDescriptor>): _26.ChainDescriptor;
                    fromAmino(object: _26.ChainDescriptorAmino): _26.ChainDescriptor;
                    toAmino(message: _26.ChainDescriptor): _26.ChainDescriptorAmino;
                    fromAminoMsg(object: _26.ChainDescriptorAminoMsg): _26.ChainDescriptor;
                    toAminoMsg(message: _26.ChainDescriptor): _26.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _26.ChainDescriptorProtoMsg): _26.ChainDescriptor;
                    toProto(message: _26.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _26.ChainDescriptor): _26.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _26.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.CodecDescriptor;
                    fromPartial(object: Partial<_26.CodecDescriptor>): _26.CodecDescriptor;
                    fromAmino(object: _26.CodecDescriptorAmino): _26.CodecDescriptor;
                    toAmino(message: _26.CodecDescriptor): _26.CodecDescriptorAmino;
                    fromAminoMsg(object: _26.CodecDescriptorAminoMsg): _26.CodecDescriptor;
                    toAminoMsg(message: _26.CodecDescriptor): _26.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _26.CodecDescriptorProtoMsg): _26.CodecDescriptor;
                    toProto(message: _26.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _26.CodecDescriptor): _26.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _26.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.InterfaceDescriptor;
                    fromPartial(object: Partial<_26.InterfaceDescriptor>): _26.InterfaceDescriptor;
                    fromAmino(object: _26.InterfaceDescriptorAmino): _26.InterfaceDescriptor;
                    toAmino(message: _26.InterfaceDescriptor): _26.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _26.InterfaceDescriptorAminoMsg): _26.InterfaceDescriptor;
                    toAminoMsg(message: _26.InterfaceDescriptor): _26.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _26.InterfaceDescriptorProtoMsg): _26.InterfaceDescriptor;
                    toProto(message: _26.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _26.InterfaceDescriptor): _26.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _26.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_26.InterfaceImplementerDescriptor>): _26.InterfaceImplementerDescriptor;
                    fromAmino(object: _26.InterfaceImplementerDescriptorAmino): _26.InterfaceImplementerDescriptor;
                    toAmino(message: _26.InterfaceImplementerDescriptor): _26.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _26.InterfaceImplementerDescriptorAminoMsg): _26.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _26.InterfaceImplementerDescriptor): _26.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _26.InterfaceImplementerDescriptorProtoMsg): _26.InterfaceImplementerDescriptor;
                    toProto(message: _26.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _26.InterfaceImplementerDescriptor): _26.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _26.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_26.InterfaceAcceptingMessageDescriptor>): _26.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _26.InterfaceAcceptingMessageDescriptorAmino): _26.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _26.InterfaceAcceptingMessageDescriptor): _26.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _26.InterfaceAcceptingMessageDescriptorAminoMsg): _26.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _26.InterfaceAcceptingMessageDescriptor): _26.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _26.InterfaceAcceptingMessageDescriptorProtoMsg): _26.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _26.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _26.InterfaceAcceptingMessageDescriptor): _26.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _26.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.ConfigurationDescriptor;
                    fromPartial(object: Partial<_26.ConfigurationDescriptor>): _26.ConfigurationDescriptor;
                    fromAmino(object: _26.ConfigurationDescriptorAmino): _26.ConfigurationDescriptor;
                    toAmino(message: _26.ConfigurationDescriptor): _26.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _26.ConfigurationDescriptorAminoMsg): _26.ConfigurationDescriptor;
                    toAminoMsg(message: _26.ConfigurationDescriptor): _26.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _26.ConfigurationDescriptorProtoMsg): _26.ConfigurationDescriptor;
                    toProto(message: _26.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _26.ConfigurationDescriptor): _26.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _26.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.MsgDescriptor;
                    fromPartial(object: Partial<_26.MsgDescriptor>): _26.MsgDescriptor;
                    fromAmino(object: _26.MsgDescriptorAmino): _26.MsgDescriptor;
                    toAmino(message: _26.MsgDescriptor): _26.MsgDescriptorAmino;
                    fromAminoMsg(object: _26.MsgDescriptorAminoMsg): _26.MsgDescriptor;
                    toAminoMsg(message: _26.MsgDescriptor): _26.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _26.MsgDescriptorProtoMsg): _26.MsgDescriptor;
                    toProto(message: _26.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _26.MsgDescriptor): _26.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _26.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _26.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_26.GetAuthnDescriptorRequest>): _26.GetAuthnDescriptorRequest;
                    fromAmino(_: _26.GetAuthnDescriptorRequestAmino): _26.GetAuthnDescriptorRequest;
                    toAmino(_: _26.GetAuthnDescriptorRequest): _26.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _26.GetAuthnDescriptorRequestAminoMsg): _26.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _26.GetAuthnDescriptorRequest): _26.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _26.GetAuthnDescriptorRequestProtoMsg): _26.GetAuthnDescriptorRequest;
                    toProto(message: _26.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _26.GetAuthnDescriptorRequest): _26.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _26.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_26.GetAuthnDescriptorResponse>): _26.GetAuthnDescriptorResponse;
                    fromAmino(object: _26.GetAuthnDescriptorResponseAmino): _26.GetAuthnDescriptorResponse;
                    toAmino(message: _26.GetAuthnDescriptorResponse): _26.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _26.GetAuthnDescriptorResponseAminoMsg): _26.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _26.GetAuthnDescriptorResponse): _26.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _26.GetAuthnDescriptorResponseProtoMsg): _26.GetAuthnDescriptorResponse;
                    toProto(message: _26.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _26.GetAuthnDescriptorResponse): _26.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _26.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _26.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_26.GetChainDescriptorRequest>): _26.GetChainDescriptorRequest;
                    fromAmino(_: _26.GetChainDescriptorRequestAmino): _26.GetChainDescriptorRequest;
                    toAmino(_: _26.GetChainDescriptorRequest): _26.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _26.GetChainDescriptorRequestAminoMsg): _26.GetChainDescriptorRequest;
                    toAminoMsg(message: _26.GetChainDescriptorRequest): _26.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _26.GetChainDescriptorRequestProtoMsg): _26.GetChainDescriptorRequest;
                    toProto(message: _26.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _26.GetChainDescriptorRequest): _26.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _26.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_26.GetChainDescriptorResponse>): _26.GetChainDescriptorResponse;
                    fromAmino(object: _26.GetChainDescriptorResponseAmino): _26.GetChainDescriptorResponse;
                    toAmino(message: _26.GetChainDescriptorResponse): _26.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _26.GetChainDescriptorResponseAminoMsg): _26.GetChainDescriptorResponse;
                    toAminoMsg(message: _26.GetChainDescriptorResponse): _26.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _26.GetChainDescriptorResponseProtoMsg): _26.GetChainDescriptorResponse;
                    toProto(message: _26.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _26.GetChainDescriptorResponse): _26.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _26.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _26.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_26.GetCodecDescriptorRequest>): _26.GetCodecDescriptorRequest;
                    fromAmino(_: _26.GetCodecDescriptorRequestAmino): _26.GetCodecDescriptorRequest;
                    toAmino(_: _26.GetCodecDescriptorRequest): _26.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _26.GetCodecDescriptorRequestAminoMsg): _26.GetCodecDescriptorRequest;
                    toAminoMsg(message: _26.GetCodecDescriptorRequest): _26.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _26.GetCodecDescriptorRequestProtoMsg): _26.GetCodecDescriptorRequest;
                    toProto(message: _26.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _26.GetCodecDescriptorRequest): _26.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _26.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_26.GetCodecDescriptorResponse>): _26.GetCodecDescriptorResponse;
                    fromAmino(object: _26.GetCodecDescriptorResponseAmino): _26.GetCodecDescriptorResponse;
                    toAmino(message: _26.GetCodecDescriptorResponse): _26.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _26.GetCodecDescriptorResponseAminoMsg): _26.GetCodecDescriptorResponse;
                    toAminoMsg(message: _26.GetCodecDescriptorResponse): _26.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _26.GetCodecDescriptorResponseProtoMsg): _26.GetCodecDescriptorResponse;
                    toProto(message: _26.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _26.GetCodecDescriptorResponse): _26.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _26.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _26.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_26.GetConfigurationDescriptorRequest>): _26.GetConfigurationDescriptorRequest;
                    fromAmino(_: _26.GetConfigurationDescriptorRequestAmino): _26.GetConfigurationDescriptorRequest;
                    toAmino(_: _26.GetConfigurationDescriptorRequest): _26.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _26.GetConfigurationDescriptorRequestAminoMsg): _26.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _26.GetConfigurationDescriptorRequest): _26.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _26.GetConfigurationDescriptorRequestProtoMsg): _26.GetConfigurationDescriptorRequest;
                    toProto(message: _26.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _26.GetConfigurationDescriptorRequest): _26.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _26.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_26.GetConfigurationDescriptorResponse>): _26.GetConfigurationDescriptorResponse;
                    fromAmino(object: _26.GetConfigurationDescriptorResponseAmino): _26.GetConfigurationDescriptorResponse;
                    toAmino(message: _26.GetConfigurationDescriptorResponse): _26.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _26.GetConfigurationDescriptorResponseAminoMsg): _26.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _26.GetConfigurationDescriptorResponse): _26.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _26.GetConfigurationDescriptorResponseProtoMsg): _26.GetConfigurationDescriptorResponse;
                    toProto(message: _26.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _26.GetConfigurationDescriptorResponse): _26.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _26.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _26.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_26.GetQueryServicesDescriptorRequest>): _26.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _26.GetQueryServicesDescriptorRequestAmino): _26.GetQueryServicesDescriptorRequest;
                    toAmino(_: _26.GetQueryServicesDescriptorRequest): _26.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _26.GetQueryServicesDescriptorRequestAminoMsg): _26.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _26.GetQueryServicesDescriptorRequest): _26.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _26.GetQueryServicesDescriptorRequestProtoMsg): _26.GetQueryServicesDescriptorRequest;
                    toProto(message: _26.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _26.GetQueryServicesDescriptorRequest): _26.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _26.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_26.GetQueryServicesDescriptorResponse>): _26.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _26.GetQueryServicesDescriptorResponseAmino): _26.GetQueryServicesDescriptorResponse;
                    toAmino(message: _26.GetQueryServicesDescriptorResponse): _26.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _26.GetQueryServicesDescriptorResponseAminoMsg): _26.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _26.GetQueryServicesDescriptorResponse): _26.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _26.GetQueryServicesDescriptorResponseProtoMsg): _26.GetQueryServicesDescriptorResponse;
                    toProto(message: _26.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _26.GetQueryServicesDescriptorResponse): _26.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _26.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _26.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_26.GetTxDescriptorRequest>): _26.GetTxDescriptorRequest;
                    fromAmino(_: _26.GetTxDescriptorRequestAmino): _26.GetTxDescriptorRequest;
                    toAmino(_: _26.GetTxDescriptorRequest): _26.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _26.GetTxDescriptorRequestAminoMsg): _26.GetTxDescriptorRequest;
                    toAminoMsg(message: _26.GetTxDescriptorRequest): _26.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _26.GetTxDescriptorRequestProtoMsg): _26.GetTxDescriptorRequest;
                    toProto(message: _26.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _26.GetTxDescriptorRequest): _26.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _26.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_26.GetTxDescriptorResponse>): _26.GetTxDescriptorResponse;
                    fromAmino(object: _26.GetTxDescriptorResponseAmino): _26.GetTxDescriptorResponse;
                    toAmino(message: _26.GetTxDescriptorResponse): _26.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _26.GetTxDescriptorResponseAminoMsg): _26.GetTxDescriptorResponse;
                    toAminoMsg(message: _26.GetTxDescriptorResponse): _26.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _26.GetTxDescriptorResponseProtoMsg): _26.GetTxDescriptorResponse;
                    toProto(message: _26.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _26.GetTxDescriptorResponse): _26.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _26.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.QueryServicesDescriptor;
                    fromPartial(object: Partial<_26.QueryServicesDescriptor>): _26.QueryServicesDescriptor;
                    fromAmino(object: _26.QueryServicesDescriptorAmino): _26.QueryServicesDescriptor;
                    toAmino(message: _26.QueryServicesDescriptor): _26.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _26.QueryServicesDescriptorAminoMsg): _26.QueryServicesDescriptor;
                    toAminoMsg(message: _26.QueryServicesDescriptor): _26.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _26.QueryServicesDescriptorProtoMsg): _26.QueryServicesDescriptor;
                    toProto(message: _26.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _26.QueryServicesDescriptor): _26.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _26.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.QueryServiceDescriptor;
                    fromPartial(object: Partial<_26.QueryServiceDescriptor>): _26.QueryServiceDescriptor;
                    fromAmino(object: _26.QueryServiceDescriptorAmino): _26.QueryServiceDescriptor;
                    toAmino(message: _26.QueryServiceDescriptor): _26.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _26.QueryServiceDescriptorAminoMsg): _26.QueryServiceDescriptor;
                    toAminoMsg(message: _26.QueryServiceDescriptor): _26.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _26.QueryServiceDescriptorProtoMsg): _26.QueryServiceDescriptor;
                    toProto(message: _26.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _26.QueryServiceDescriptor): _26.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _26.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.QueryMethodDescriptor;
                    fromPartial(object: Partial<_26.QueryMethodDescriptor>): _26.QueryMethodDescriptor;
                    fromAmino(object: _26.QueryMethodDescriptorAmino): _26.QueryMethodDescriptor;
                    toAmino(message: _26.QueryMethodDescriptor): _26.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _26.QueryMethodDescriptorAminoMsg): _26.QueryMethodDescriptor;
                    toAminoMsg(message: _26.QueryMethodDescriptor): _26.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _26.QueryMethodDescriptorProtoMsg): _26.QueryMethodDescriptor;
                    toProto(message: _26.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _26.QueryMethodDescriptor): _26.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _27.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.Snapshot;
                    fromPartial(object: Partial<_27.Snapshot>): _27.Snapshot;
                    fromAmino(object: _27.SnapshotAmino): _27.Snapshot;
                    toAmino(message: _27.Snapshot): _27.SnapshotAmino;
                    fromAminoMsg(object: _27.SnapshotAminoMsg): _27.Snapshot;
                    toAminoMsg(message: _27.Snapshot): _27.SnapshotAminoMsg;
                    fromProtoMsg(message: _27.SnapshotProtoMsg): _27.Snapshot;
                    toProto(message: _27.Snapshot): Uint8Array;
                    toProtoMsg(message: _27.Snapshot): _27.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _27.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.Metadata;
                    fromPartial(object: Partial<_27.Metadata>): _27.Metadata;
                    fromAmino(object: _27.MetadataAmino): _27.Metadata;
                    toAmino(message: _27.Metadata): _27.MetadataAmino;
                    fromAminoMsg(object: _27.MetadataAminoMsg): _27.Metadata;
                    toAminoMsg(message: _27.Metadata): _27.MetadataAminoMsg;
                    fromProtoMsg(message: _27.MetadataProtoMsg): _27.Metadata;
                    toProto(message: _27.Metadata): Uint8Array;
                    toProtoMsg(message: _27.Metadata): _27.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _27.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.SnapshotItem;
                    fromPartial(object: Partial<_27.SnapshotItem>): _27.SnapshotItem;
                    fromAmino(object: _27.SnapshotItemAmino): _27.SnapshotItem;
                    toAmino(message: _27.SnapshotItem): _27.SnapshotItemAmino;
                    fromAminoMsg(object: _27.SnapshotItemAminoMsg): _27.SnapshotItem;
                    toAminoMsg(message: _27.SnapshotItem): _27.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _27.SnapshotItemProtoMsg): _27.SnapshotItem;
                    toProto(message: _27.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _27.SnapshotItem): _27.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _27.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.SnapshotStoreItem;
                    fromPartial(object: Partial<_27.SnapshotStoreItem>): _27.SnapshotStoreItem;
                    fromAmino(object: _27.SnapshotStoreItemAmino): _27.SnapshotStoreItem;
                    toAmino(message: _27.SnapshotStoreItem): _27.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _27.SnapshotStoreItemAminoMsg): _27.SnapshotStoreItem;
                    toAminoMsg(message: _27.SnapshotStoreItem): _27.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _27.SnapshotStoreItemProtoMsg): _27.SnapshotStoreItem;
                    toProto(message: _27.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _27.SnapshotStoreItem): _27.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _27.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.SnapshotIAVLItem;
                    fromPartial(object: Partial<_27.SnapshotIAVLItem>): _27.SnapshotIAVLItem;
                    fromAmino(object: _27.SnapshotIAVLItemAmino): _27.SnapshotIAVLItem;
                    toAmino(message: _27.SnapshotIAVLItem): _27.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _27.SnapshotIAVLItemAminoMsg): _27.SnapshotIAVLItem;
                    toAminoMsg(message: _27.SnapshotIAVLItem): _27.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _27.SnapshotIAVLItemProtoMsg): _27.SnapshotIAVLItem;
                    toProto(message: _27.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _27.SnapshotIAVLItem): _27.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _27.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_27.SnapshotExtensionMeta>): _27.SnapshotExtensionMeta;
                    fromAmino(object: _27.SnapshotExtensionMetaAmino): _27.SnapshotExtensionMeta;
                    toAmino(message: _27.SnapshotExtensionMeta): _27.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _27.SnapshotExtensionMetaAminoMsg): _27.SnapshotExtensionMeta;
                    toAminoMsg(message: _27.SnapshotExtensionMeta): _27.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _27.SnapshotExtensionMetaProtoMsg): _27.SnapshotExtensionMeta;
                    toProto(message: _27.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _27.SnapshotExtensionMeta): _27.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _27.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_27.SnapshotExtensionPayload>): _27.SnapshotExtensionPayload;
                    fromAmino(object: _27.SnapshotExtensionPayloadAmino): _27.SnapshotExtensionPayload;
                    toAmino(message: _27.SnapshotExtensionPayload): _27.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _27.SnapshotExtensionPayloadAminoMsg): _27.SnapshotExtensionPayload;
                    toAminoMsg(message: _27.SnapshotExtensionPayload): _27.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _27.SnapshotExtensionPayloadProtoMsg): _27.SnapshotExtensionPayload;
                    toProto(message: _27.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _27.SnapshotExtensionPayload): _27.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _30.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.SnapshotItem;
                    fromPartial(object: Partial<_30.SnapshotItem>): _30.SnapshotItem;
                    fromAmino(object: _30.SnapshotItemAmino): _30.SnapshotItem;
                    toAmino(message: _30.SnapshotItem): _30.SnapshotItemAmino;
                    fromAminoMsg(object: _30.SnapshotItemAminoMsg): _30.SnapshotItem;
                    toAminoMsg(message: _30.SnapshotItem): _30.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _30.SnapshotItemProtoMsg): _30.SnapshotItem;
                    toProto(message: _30.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _30.SnapshotItem): _30.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _30.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.SnapshotStoreItem;
                    fromPartial(object: Partial<_30.SnapshotStoreItem>): _30.SnapshotStoreItem;
                    fromAmino(object: _30.SnapshotStoreItemAmino): _30.SnapshotStoreItem;
                    toAmino(message: _30.SnapshotStoreItem): _30.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _30.SnapshotStoreItemAminoMsg): _30.SnapshotStoreItem;
                    toAminoMsg(message: _30.SnapshotStoreItem): _30.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _30.SnapshotStoreItemProtoMsg): _30.SnapshotStoreItem;
                    toProto(message: _30.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _30.SnapshotStoreItem): _30.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _30.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.SnapshotIAVLItem;
                    fromPartial(object: Partial<_30.SnapshotIAVLItem>): _30.SnapshotIAVLItem;
                    fromAmino(object: _30.SnapshotIAVLItemAmino): _30.SnapshotIAVLItem;
                    toAmino(message: _30.SnapshotIAVLItem): _30.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _30.SnapshotIAVLItemAminoMsg): _30.SnapshotIAVLItem;
                    toAminoMsg(message: _30.SnapshotIAVLItem): _30.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _30.SnapshotIAVLItemProtoMsg): _30.SnapshotIAVLItem;
                    toProto(message: _30.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _30.SnapshotIAVLItem): _30.SnapshotIAVLItemProtoMsg;
                };
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _29.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.StoreKVPair;
                    fromPartial(object: Partial<_29.StoreKVPair>): _29.StoreKVPair;
                    fromAmino(object: _29.StoreKVPairAmino): _29.StoreKVPair;
                    toAmino(message: _29.StoreKVPair): _29.StoreKVPairAmino;
                    fromAminoMsg(object: _29.StoreKVPairAminoMsg): _29.StoreKVPair;
                    toAminoMsg(message: _29.StoreKVPair): _29.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _29.StoreKVPairProtoMsg): _29.StoreKVPair;
                    toProto(message: _29.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _29.StoreKVPair): _29.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _29.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.BlockMetadata;
                    fromPartial(object: Partial<_29.BlockMetadata>): _29.BlockMetadata;
                    fromAmino(object: _29.BlockMetadataAmino): _29.BlockMetadata;
                    toAmino(message: _29.BlockMetadata): _29.BlockMetadataAmino;
                    fromAminoMsg(object: _29.BlockMetadataAminoMsg): _29.BlockMetadata;
                    toAminoMsg(message: _29.BlockMetadata): _29.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _29.BlockMetadataProtoMsg): _29.BlockMetadata;
                    toProto(message: _29.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _29.BlockMetadata): _29.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _29.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_29.BlockMetadata_DeliverTx>): _29.BlockMetadata_DeliverTx;
                    fromAmino(object: _29.BlockMetadata_DeliverTxAmino): _29.BlockMetadata_DeliverTx;
                    toAmino(message: _29.BlockMetadata_DeliverTx): _29.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _29.BlockMetadata_DeliverTxAminoMsg): _29.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _29.BlockMetadata_DeliverTx): _29.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _29.BlockMetadata_DeliverTxProtoMsg): _29.BlockMetadata_DeliverTx;
                    toProto(message: _29.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _29.BlockMetadata_DeliverTx): _29.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _28.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.CommitInfo;
                    fromPartial(object: Partial<_28.CommitInfo>): _28.CommitInfo;
                    fromAmino(object: _28.CommitInfoAmino): _28.CommitInfo;
                    toAmino(message: _28.CommitInfo): _28.CommitInfoAmino;
                    fromAminoMsg(object: _28.CommitInfoAminoMsg): _28.CommitInfo;
                    toAminoMsg(message: _28.CommitInfo): _28.CommitInfoAminoMsg;
                    fromProtoMsg(message: _28.CommitInfoProtoMsg): _28.CommitInfo;
                    toProto(message: _28.CommitInfo): Uint8Array;
                    toProtoMsg(message: _28.CommitInfo): _28.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _28.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.StoreInfo;
                    fromPartial(object: Partial<_28.StoreInfo>): _28.StoreInfo;
                    fromAmino(object: _28.StoreInfoAmino): _28.StoreInfo;
                    toAmino(message: _28.StoreInfo): _28.StoreInfoAmino;
                    fromAminoMsg(object: _28.StoreInfoAminoMsg): _28.StoreInfo;
                    toAminoMsg(message: _28.StoreInfo): _28.StoreInfoAminoMsg;
                    fromProtoMsg(message: _28.StoreInfoProtoMsg): _28.StoreInfo;
                    toProto(message: _28.StoreInfo): Uint8Array;
                    toProtoMsg(message: _28.StoreInfo): _28.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _28.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.CommitID;
                    fromPartial(object: Partial<_28.CommitID>): _28.CommitID;
                    fromAmino(object: _28.CommitIDAmino): _28.CommitID;
                    toAmino(message: _28.CommitID): _28.CommitIDAmino;
                    fromAminoMsg(object: _28.CommitIDAminoMsg): _28.CommitID;
                    toAminoMsg(message: _28.CommitID): _28.CommitIDAminoMsg;
                    fromProtoMsg(message: _28.CommitIDProtoMsg): _28.CommitID;
                    toProto(message: _28.CommitID): Uint8Array;
                    toProtoMsg(message: _28.CommitID): _28.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _177.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _31.GetNodeInfoRequest): Promise<_31.GetNodeInfoResponse>;
                    getSyncing(request?: _31.GetSyncingRequest): Promise<_31.GetSyncingResponse>;
                    getLatestBlock(request?: _31.GetLatestBlockRequest): Promise<_31.GetLatestBlockResponse>;
                    getBlockByHeight(request: _31.GetBlockByHeightRequest): Promise<_31.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _31.GetLatestValidatorSetRequest): Promise<_31.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _31.GetValidatorSetByHeightRequest): Promise<_31.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _162.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _31.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_31.GetValidatorSetByHeightRequest>): _31.GetValidatorSetByHeightRequest;
                    fromAmino(object: _31.GetValidatorSetByHeightRequestAmino): _31.GetValidatorSetByHeightRequest;
                    toAmino(message: _31.GetValidatorSetByHeightRequest): _31.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _31.GetValidatorSetByHeightRequestAminoMsg): _31.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _31.GetValidatorSetByHeightRequest): _31.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _31.GetValidatorSetByHeightRequestProtoMsg): _31.GetValidatorSetByHeightRequest;
                    toProto(message: _31.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _31.GetValidatorSetByHeightRequest): _31.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _31.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_31.GetValidatorSetByHeightResponse>): _31.GetValidatorSetByHeightResponse;
                    fromAmino(object: _31.GetValidatorSetByHeightResponseAmino): _31.GetValidatorSetByHeightResponse;
                    toAmino(message: _31.GetValidatorSetByHeightResponse): _31.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _31.GetValidatorSetByHeightResponseAminoMsg): _31.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _31.GetValidatorSetByHeightResponse): _31.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _31.GetValidatorSetByHeightResponseProtoMsg): _31.GetValidatorSetByHeightResponse;
                    toProto(message: _31.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _31.GetValidatorSetByHeightResponse): _31.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _31.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_31.GetLatestValidatorSetRequest>): _31.GetLatestValidatorSetRequest;
                    fromAmino(object: _31.GetLatestValidatorSetRequestAmino): _31.GetLatestValidatorSetRequest;
                    toAmino(message: _31.GetLatestValidatorSetRequest): _31.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _31.GetLatestValidatorSetRequestAminoMsg): _31.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _31.GetLatestValidatorSetRequest): _31.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _31.GetLatestValidatorSetRequestProtoMsg): _31.GetLatestValidatorSetRequest;
                    toProto(message: _31.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _31.GetLatestValidatorSetRequest): _31.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _31.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_31.GetLatestValidatorSetResponse>): _31.GetLatestValidatorSetResponse;
                    fromAmino(object: _31.GetLatestValidatorSetResponseAmino): _31.GetLatestValidatorSetResponse;
                    toAmino(message: _31.GetLatestValidatorSetResponse): _31.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _31.GetLatestValidatorSetResponseAminoMsg): _31.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _31.GetLatestValidatorSetResponse): _31.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _31.GetLatestValidatorSetResponseProtoMsg): _31.GetLatestValidatorSetResponse;
                    toProto(message: _31.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _31.GetLatestValidatorSetResponse): _31.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _31.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.Validator;
                    fromPartial(object: Partial<_31.Validator>): _31.Validator;
                    fromAmino(object: _31.ValidatorAmino): _31.Validator;
                    toAmino(message: _31.Validator): _31.ValidatorAmino;
                    fromAminoMsg(object: _31.ValidatorAminoMsg): _31.Validator;
                    toAminoMsg(message: _31.Validator): _31.ValidatorAminoMsg;
                    fromProtoMsg(message: _31.ValidatorProtoMsg): _31.Validator;
                    toProto(message: _31.Validator): Uint8Array;
                    toProtoMsg(message: _31.Validator): _31.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _31.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_31.GetBlockByHeightRequest>): _31.GetBlockByHeightRequest;
                    fromAmino(object: _31.GetBlockByHeightRequestAmino): _31.GetBlockByHeightRequest;
                    toAmino(message: _31.GetBlockByHeightRequest): _31.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _31.GetBlockByHeightRequestAminoMsg): _31.GetBlockByHeightRequest;
                    toAminoMsg(message: _31.GetBlockByHeightRequest): _31.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _31.GetBlockByHeightRequestProtoMsg): _31.GetBlockByHeightRequest;
                    toProto(message: _31.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _31.GetBlockByHeightRequest): _31.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _31.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_31.GetBlockByHeightResponse>): _31.GetBlockByHeightResponse;
                    fromAmino(object: _31.GetBlockByHeightResponseAmino): _31.GetBlockByHeightResponse;
                    toAmino(message: _31.GetBlockByHeightResponse): _31.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _31.GetBlockByHeightResponseAminoMsg): _31.GetBlockByHeightResponse;
                    toAminoMsg(message: _31.GetBlockByHeightResponse): _31.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _31.GetBlockByHeightResponseProtoMsg): _31.GetBlockByHeightResponse;
                    toProto(message: _31.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _31.GetBlockByHeightResponse): _31.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _31.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _31.GetLatestBlockRequest;
                    fromPartial(_: Partial<_31.GetLatestBlockRequest>): _31.GetLatestBlockRequest;
                    fromAmino(_: _31.GetLatestBlockRequestAmino): _31.GetLatestBlockRequest;
                    toAmino(_: _31.GetLatestBlockRequest): _31.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _31.GetLatestBlockRequestAminoMsg): _31.GetLatestBlockRequest;
                    toAminoMsg(message: _31.GetLatestBlockRequest): _31.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _31.GetLatestBlockRequestProtoMsg): _31.GetLatestBlockRequest;
                    toProto(message: _31.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _31.GetLatestBlockRequest): _31.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _31.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.GetLatestBlockResponse;
                    fromPartial(object: Partial<_31.GetLatestBlockResponse>): _31.GetLatestBlockResponse;
                    fromAmino(object: _31.GetLatestBlockResponseAmino): _31.GetLatestBlockResponse;
                    toAmino(message: _31.GetLatestBlockResponse): _31.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _31.GetLatestBlockResponseAminoMsg): _31.GetLatestBlockResponse;
                    toAminoMsg(message: _31.GetLatestBlockResponse): _31.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _31.GetLatestBlockResponseProtoMsg): _31.GetLatestBlockResponse;
                    toProto(message: _31.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _31.GetLatestBlockResponse): _31.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _31.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _31.GetSyncingRequest;
                    fromPartial(_: Partial<_31.GetSyncingRequest>): _31.GetSyncingRequest;
                    fromAmino(_: _31.GetSyncingRequestAmino): _31.GetSyncingRequest;
                    toAmino(_: _31.GetSyncingRequest): _31.GetSyncingRequestAmino;
                    fromAminoMsg(object: _31.GetSyncingRequestAminoMsg): _31.GetSyncingRequest;
                    toAminoMsg(message: _31.GetSyncingRequest): _31.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _31.GetSyncingRequestProtoMsg): _31.GetSyncingRequest;
                    toProto(message: _31.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _31.GetSyncingRequest): _31.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _31.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.GetSyncingResponse;
                    fromPartial(object: Partial<_31.GetSyncingResponse>): _31.GetSyncingResponse;
                    fromAmino(object: _31.GetSyncingResponseAmino): _31.GetSyncingResponse;
                    toAmino(message: _31.GetSyncingResponse): _31.GetSyncingResponseAmino;
                    fromAminoMsg(object: _31.GetSyncingResponseAminoMsg): _31.GetSyncingResponse;
                    toAminoMsg(message: _31.GetSyncingResponse): _31.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _31.GetSyncingResponseProtoMsg): _31.GetSyncingResponse;
                    toProto(message: _31.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _31.GetSyncingResponse): _31.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _31.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _31.GetNodeInfoRequest;
                    fromPartial(_: Partial<_31.GetNodeInfoRequest>): _31.GetNodeInfoRequest;
                    fromAmino(_: _31.GetNodeInfoRequestAmino): _31.GetNodeInfoRequest;
                    toAmino(_: _31.GetNodeInfoRequest): _31.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _31.GetNodeInfoRequestAminoMsg): _31.GetNodeInfoRequest;
                    toAminoMsg(message: _31.GetNodeInfoRequest): _31.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _31.GetNodeInfoRequestProtoMsg): _31.GetNodeInfoRequest;
                    toProto(message: _31.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _31.GetNodeInfoRequest): _31.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _31.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.GetNodeInfoResponse;
                    fromPartial(object: Partial<_31.GetNodeInfoResponse>): _31.GetNodeInfoResponse;
                    fromAmino(object: _31.GetNodeInfoResponseAmino): _31.GetNodeInfoResponse;
                    toAmino(message: _31.GetNodeInfoResponse): _31.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _31.GetNodeInfoResponseAminoMsg): _31.GetNodeInfoResponse;
                    toAminoMsg(message: _31.GetNodeInfoResponse): _31.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _31.GetNodeInfoResponseProtoMsg): _31.GetNodeInfoResponse;
                    toProto(message: _31.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _31.GetNodeInfoResponse): _31.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _31.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.VersionInfo;
                    fromPartial(object: Partial<_31.VersionInfo>): _31.VersionInfo;
                    fromAmino(object: _31.VersionInfoAmino): _31.VersionInfo;
                    toAmino(message: _31.VersionInfo): _31.VersionInfoAmino;
                    fromAminoMsg(object: _31.VersionInfoAminoMsg): _31.VersionInfo;
                    toAminoMsg(message: _31.VersionInfo): _31.VersionInfoAminoMsg;
                    fromProtoMsg(message: _31.VersionInfoProtoMsg): _31.VersionInfo;
                    toProto(message: _31.VersionInfo): Uint8Array;
                    toProtoMsg(message: _31.VersionInfo): _31.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _31.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.Module;
                    fromPartial(object: Partial<_31.Module>): _31.Module;
                    fromAmino(object: _31.ModuleAmino): _31.Module;
                    toAmino(message: _31.Module): _31.ModuleAmino;
                    fromAminoMsg(object: _31.ModuleAminoMsg): _31.Module;
                    toAminoMsg(message: _31.Module): _31.ModuleAminoMsg;
                    fromProtoMsg(message: _31.ModuleProtoMsg): _31.Module;
                    toProto(message: _31.Module): Uint8Array;
                    toProtoMsg(message: _31.Module): _31.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _32.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.Coin;
                fromPartial(object: Partial<_32.Coin>): _32.Coin;
                fromAmino(object: _32.CoinAmino): _32.Coin;
                toAmino(message: _32.Coin): _32.CoinAmino;
                fromAminoMsg(object: _32.CoinAminoMsg): _32.Coin;
                toAminoMsg(message: _32.Coin): _32.CoinAminoMsg;
                fromProtoMsg(message: _32.CoinProtoMsg): _32.Coin;
                toProto(message: _32.Coin): Uint8Array;
                toProtoMsg(message: _32.Coin): _32.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _32.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.DecCoin;
                fromPartial(object: Partial<_32.DecCoin>): _32.DecCoin;
                fromAmino(object: _32.DecCoinAmino): _32.DecCoin;
                toAmino(message: _32.DecCoin): _32.DecCoinAmino;
                fromAminoMsg(object: _32.DecCoinAminoMsg): _32.DecCoin;
                toAminoMsg(message: _32.DecCoin): _32.DecCoinAminoMsg;
                fromProtoMsg(message: _32.DecCoinProtoMsg): _32.DecCoin;
                toProto(message: _32.DecCoin): Uint8Array;
                toProtoMsg(message: _32.DecCoin): _32.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _32.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.IntProto;
                fromPartial(object: Partial<_32.IntProto>): _32.IntProto;
                fromAmino(object: _32.IntProtoAmino): _32.IntProto;
                toAmino(message: _32.IntProto): _32.IntProtoAmino;
                fromAminoMsg(object: _32.IntProtoAminoMsg): _32.IntProto;
                toAminoMsg(message: _32.IntProto): _32.IntProtoAminoMsg;
                fromProtoMsg(message: _32.IntProtoProtoMsg): _32.IntProto;
                toProto(message: _32.IntProto): Uint8Array;
                toProtoMsg(message: _32.IntProto): _32.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _32.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.DecProto;
                fromPartial(object: Partial<_32.DecProto>): _32.DecProto;
                fromAmino(object: _32.DecProtoAmino): _32.DecProto;
                toAmino(message: _32.DecProto): _32.DecProtoAmino;
                fromAminoMsg(object: _32.DecProtoAminoMsg): _32.DecProto;
                toAminoMsg(message: _32.DecProto): _32.DecProtoAminoMsg;
                fromProtoMsg(message: _32.DecProtoProtoMsg): _32.DecProto;
                toProto(message: _32.DecProto): Uint8Array;
                toProtoMsg(message: _32.DecProto): _32.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _34.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.GenesisOwners;
                fromPartial(object: Partial<_34.GenesisOwners>): _34.GenesisOwners;
                fromAmino(object: _34.GenesisOwnersAmino): _34.GenesisOwners;
                toAmino(message: _34.GenesisOwners): _34.GenesisOwnersAmino;
                fromAminoMsg(object: _34.GenesisOwnersAminoMsg): _34.GenesisOwners;
                toAminoMsg(message: _34.GenesisOwners): _34.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _34.GenesisOwnersProtoMsg): _34.GenesisOwners;
                toProto(message: _34.GenesisOwners): Uint8Array;
                toProtoMsg(message: _34.GenesisOwners): _34.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _33.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Capability;
                fromPartial(object: Partial<_33.Capability>): _33.Capability;
                fromAmino(object: _33.CapabilityAmino): _33.Capability;
                toAmino(message: _33.Capability): _33.CapabilityAmino;
                fromAminoMsg(object: _33.CapabilityAminoMsg): _33.Capability;
                toAminoMsg(message: _33.Capability): _33.CapabilityAminoMsg;
                fromProtoMsg(message: _33.CapabilityProtoMsg): _33.Capability;
                toProto(message: _33.Capability): Uint8Array;
                toProtoMsg(message: _33.Capability): _33.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _33.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Owner;
                fromPartial(object: Partial<_33.Owner>): _33.Owner;
                fromAmino(object: _33.OwnerAmino): _33.Owner;
                toAmino(message: _33.Owner): _33.OwnerAmino;
                fromAminoMsg(object: _33.OwnerAminoMsg): _33.Owner;
                toAminoMsg(message: _33.Owner): _33.OwnerAminoMsg;
                fromProtoMsg(message: _33.OwnerProtoMsg): _33.Owner;
                toProto(message: _33.Owner): Uint8Array;
                toProtoMsg(message: _33.Owner): _33.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _33.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.CapabilityOwners;
                fromPartial(object: Partial<_33.CapabilityOwners>): _33.CapabilityOwners;
                fromAmino(object: _33.CapabilityOwnersAmino): _33.CapabilityOwners;
                toAmino(message: _33.CapabilityOwners): _33.CapabilityOwnersAmino;
                fromAminoMsg(object: _33.CapabilityOwnersAminoMsg): _33.CapabilityOwners;
                toAminoMsg(message: _33.CapabilityOwners): _33.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _33.CapabilityOwnersProtoMsg): _33.CapabilityOwners;
                toProto(message: _33.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _33.CapabilityOwners): _33.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _190.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _36.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _36.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _36.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _36.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _36.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _36.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _36.MsgVerifyInvariant) => _36.MsgVerifyInvariantAmino;
                    fromAmino: (object: _36.MsgVerifyInvariantAmino) => _36.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _36.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.MsgVerifyInvariant;
                fromPartial(object: Partial<_36.MsgVerifyInvariant>): _36.MsgVerifyInvariant;
                fromAmino(object: _36.MsgVerifyInvariantAmino): _36.MsgVerifyInvariant;
                toAmino(message: _36.MsgVerifyInvariant): _36.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _36.MsgVerifyInvariantAminoMsg): _36.MsgVerifyInvariant;
                toAminoMsg(message: _36.MsgVerifyInvariant): _36.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _36.MsgVerifyInvariantProtoMsg): _36.MsgVerifyInvariant;
                toProto(message: _36.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _36.MsgVerifyInvariant): _36.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _36.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _36.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_36.MsgVerifyInvariantResponse>): _36.MsgVerifyInvariantResponse;
                fromAmino(_: _36.MsgVerifyInvariantResponseAmino): _36.MsgVerifyInvariantResponse;
                toAmino(_: _36.MsgVerifyInvariantResponse): _36.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _36.MsgVerifyInvariantResponseAminoMsg): _36.MsgVerifyInvariantResponse;
                toAminoMsg(message: _36.MsgVerifyInvariantResponse): _36.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _36.MsgVerifyInvariantResponseProtoMsg): _36.MsgVerifyInvariantResponse;
                toProto(message: _36.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _36.MsgVerifyInvariantResponse): _36.MsgVerifyInvariantResponseProtoMsg;
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
        };
    }
    namespace crypto {
        const ed25519: {
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
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _38.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.LegacyAminoPubKey;
                fromPartial(object: Partial<_38.LegacyAminoPubKey>): _38.LegacyAminoPubKey;
                fromAmino(object: _38.LegacyAminoPubKeyAmino): _38.LegacyAminoPubKey;
                toAmino(message: _38.LegacyAminoPubKey): _38.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _38.LegacyAminoPubKeyAminoMsg): _38.LegacyAminoPubKey;
                toAminoMsg(message: _38.LegacyAminoPubKey): _38.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _38.LegacyAminoPubKeyProtoMsg): _38.LegacyAminoPubKey;
                toProto(message: _38.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _38.LegacyAminoPubKey): _38.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _39.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.PubKey;
                fromPartial(object: Partial<_39.PubKey>): _39.PubKey;
                fromAmino(object: _39.PubKeyAmino): _39.PubKey;
                toAmino(message: _39.PubKey): _39.PubKeyAmino;
                fromAminoMsg(object: _39.PubKeyAminoMsg): _39.PubKey;
                toAminoMsg(message: _39.PubKey): _39.PubKeyAminoMsg;
                fromProtoMsg(message: _39.PubKeyProtoMsg): _39.PubKey;
                toProto(message: _39.PubKey): Uint8Array;
                toProtoMsg(message: _39.PubKey): _39.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _39.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.PrivKey;
                fromPartial(object: Partial<_39.PrivKey>): _39.PrivKey;
                fromAmino(object: _39.PrivKeyAmino): _39.PrivKey;
                toAmino(message: _39.PrivKey): _39.PrivKeyAmino;
                fromAminoMsg(object: _39.PrivKeyAminoMsg): _39.PrivKey;
                toAminoMsg(message: _39.PrivKey): _39.PrivKeyAminoMsg;
                fromProtoMsg(message: _39.PrivKeyProtoMsg): _39.PrivKey;
                toProto(message: _39.PrivKey): Uint8Array;
                toProtoMsg(message: _39.PrivKey): _39.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
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
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _191.MsgClientImpl;
            QueryClientImpl: typeof _178.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _43.QueryParamsRequest): Promise<_43.QueryParamsResponse>;
                validatorOutstandingRewards(request: _43.QueryValidatorOutstandingRewardsRequest): Promise<_43.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _43.QueryValidatorCommissionRequest): Promise<_43.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _43.QueryValidatorSlashesRequest): Promise<_43.QueryValidatorSlashesResponse>;
                delegationRewards(request: _43.QueryDelegationRewardsRequest): Promise<_43.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _43.QueryDelegationTotalRewardsRequest): Promise<_43.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _43.QueryDelegatorValidatorsRequest): Promise<_43.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _43.QueryDelegatorWithdrawAddressRequest): Promise<_43.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _43.QueryCommunityPoolRequest): Promise<_43.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _163.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _44.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _44.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _44.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _44.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _44.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _44.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _44.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _44.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _44.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _44.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _44.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _44.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _44.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _44.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _44.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _44.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _44.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _44.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _44.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _44.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _44.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _44.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _44.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _44.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _44.MsgSetWithdrawAddress) => _44.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _44.MsgSetWithdrawAddressAmino) => _44.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _44.MsgWithdrawDelegatorReward) => _44.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _44.MsgWithdrawDelegatorRewardAmino) => _44.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _44.MsgWithdrawValidatorCommission) => _44.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _44.MsgWithdrawValidatorCommissionAmino) => _44.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _44.MsgFundCommunityPool) => _44.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _44.MsgFundCommunityPoolAmino) => _44.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _44.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_44.MsgSetWithdrawAddress>): _44.MsgSetWithdrawAddress;
                fromAmino(object: _44.MsgSetWithdrawAddressAmino): _44.MsgSetWithdrawAddress;
                toAmino(message: _44.MsgSetWithdrawAddress): _44.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _44.MsgSetWithdrawAddressAminoMsg): _44.MsgSetWithdrawAddress;
                toAminoMsg(message: _44.MsgSetWithdrawAddress): _44.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _44.MsgSetWithdrawAddressProtoMsg): _44.MsgSetWithdrawAddress;
                toProto(message: _44.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _44.MsgSetWithdrawAddress): _44.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _44.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_44.MsgSetWithdrawAddressResponse>): _44.MsgSetWithdrawAddressResponse;
                fromAmino(_: _44.MsgSetWithdrawAddressResponseAmino): _44.MsgSetWithdrawAddressResponse;
                toAmino(_: _44.MsgSetWithdrawAddressResponse): _44.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _44.MsgSetWithdrawAddressResponseAminoMsg): _44.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _44.MsgSetWithdrawAddressResponse): _44.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _44.MsgSetWithdrawAddressResponseProtoMsg): _44.MsgSetWithdrawAddressResponse;
                toProto(message: _44.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _44.MsgSetWithdrawAddressResponse): _44.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _44.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_44.MsgWithdrawDelegatorReward>): _44.MsgWithdrawDelegatorReward;
                fromAmino(object: _44.MsgWithdrawDelegatorRewardAmino): _44.MsgWithdrawDelegatorReward;
                toAmino(message: _44.MsgWithdrawDelegatorReward): _44.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _44.MsgWithdrawDelegatorRewardAminoMsg): _44.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _44.MsgWithdrawDelegatorReward): _44.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _44.MsgWithdrawDelegatorRewardProtoMsg): _44.MsgWithdrawDelegatorReward;
                toProto(message: _44.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _44.MsgWithdrawDelegatorReward): _44.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _44.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_44.MsgWithdrawDelegatorRewardResponse>): _44.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _44.MsgWithdrawDelegatorRewardResponseAmino): _44.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _44.MsgWithdrawDelegatorRewardResponse): _44.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _44.MsgWithdrawDelegatorRewardResponseAminoMsg): _44.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _44.MsgWithdrawDelegatorRewardResponse): _44.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _44.MsgWithdrawDelegatorRewardResponseProtoMsg): _44.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _44.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _44.MsgWithdrawDelegatorRewardResponse): _44.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _44.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_44.MsgWithdrawValidatorCommission>): _44.MsgWithdrawValidatorCommission;
                fromAmino(object: _44.MsgWithdrawValidatorCommissionAmino): _44.MsgWithdrawValidatorCommission;
                toAmino(message: _44.MsgWithdrawValidatorCommission): _44.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _44.MsgWithdrawValidatorCommissionAminoMsg): _44.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _44.MsgWithdrawValidatorCommission): _44.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _44.MsgWithdrawValidatorCommissionProtoMsg): _44.MsgWithdrawValidatorCommission;
                toProto(message: _44.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _44.MsgWithdrawValidatorCommission): _44.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _44.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_44.MsgWithdrawValidatorCommissionResponse>): _44.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _44.MsgWithdrawValidatorCommissionResponseAmino): _44.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _44.MsgWithdrawValidatorCommissionResponse): _44.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _44.MsgWithdrawValidatorCommissionResponseAminoMsg): _44.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _44.MsgWithdrawValidatorCommissionResponse): _44.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _44.MsgWithdrawValidatorCommissionResponseProtoMsg): _44.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _44.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _44.MsgWithdrawValidatorCommissionResponse): _44.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _44.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgFundCommunityPool;
                fromPartial(object: Partial<_44.MsgFundCommunityPool>): _44.MsgFundCommunityPool;
                fromAmino(object: _44.MsgFundCommunityPoolAmino): _44.MsgFundCommunityPool;
                toAmino(message: _44.MsgFundCommunityPool): _44.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _44.MsgFundCommunityPoolAminoMsg): _44.MsgFundCommunityPool;
                toAminoMsg(message: _44.MsgFundCommunityPool): _44.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _44.MsgFundCommunityPoolProtoMsg): _44.MsgFundCommunityPool;
                toProto(message: _44.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _44.MsgFundCommunityPool): _44.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _44.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_44.MsgFundCommunityPoolResponse>): _44.MsgFundCommunityPoolResponse;
                fromAmino(_: _44.MsgFundCommunityPoolResponseAmino): _44.MsgFundCommunityPoolResponse;
                toAmino(_: _44.MsgFundCommunityPoolResponse): _44.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _44.MsgFundCommunityPoolResponseAminoMsg): _44.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _44.MsgFundCommunityPoolResponse): _44.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _44.MsgFundCommunityPoolResponseProtoMsg): _44.MsgFundCommunityPoolResponse;
                toProto(message: _44.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _44.MsgFundCommunityPoolResponse): _44.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _43.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _43.QueryParamsRequest;
                fromPartial(_: Partial<_43.QueryParamsRequest>): _43.QueryParamsRequest;
                fromAmino(_: _43.QueryParamsRequestAmino): _43.QueryParamsRequest;
                toAmino(_: _43.QueryParamsRequest): _43.QueryParamsRequestAmino;
                fromAminoMsg(object: _43.QueryParamsRequestAminoMsg): _43.QueryParamsRequest;
                toAminoMsg(message: _43.QueryParamsRequest): _43.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _43.QueryParamsRequestProtoMsg): _43.QueryParamsRequest;
                toProto(message: _43.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryParamsRequest): _43.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _43.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryParamsResponse;
                fromPartial(object: Partial<_43.QueryParamsResponse>): _43.QueryParamsResponse;
                fromAmino(object: _43.QueryParamsResponseAmino): _43.QueryParamsResponse;
                toAmino(message: _43.QueryParamsResponse): _43.QueryParamsResponseAmino;
                fromAminoMsg(object: _43.QueryParamsResponseAminoMsg): _43.QueryParamsResponse;
                toAminoMsg(message: _43.QueryParamsResponse): _43.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _43.QueryParamsResponseProtoMsg): _43.QueryParamsResponse;
                toProto(message: _43.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryParamsResponse): _43.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _43.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_43.QueryValidatorOutstandingRewardsRequest>): _43.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _43.QueryValidatorOutstandingRewardsRequestAmino): _43.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _43.QueryValidatorOutstandingRewardsRequest): _43.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _43.QueryValidatorOutstandingRewardsRequestAminoMsg): _43.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _43.QueryValidatorOutstandingRewardsRequest): _43.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _43.QueryValidatorOutstandingRewardsRequestProtoMsg): _43.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _43.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryValidatorOutstandingRewardsRequest): _43.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _43.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_43.QueryValidatorOutstandingRewardsResponse>): _43.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _43.QueryValidatorOutstandingRewardsResponseAmino): _43.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _43.QueryValidatorOutstandingRewardsResponse): _43.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _43.QueryValidatorOutstandingRewardsResponseAminoMsg): _43.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _43.QueryValidatorOutstandingRewardsResponse): _43.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _43.QueryValidatorOutstandingRewardsResponseProtoMsg): _43.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _43.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryValidatorOutstandingRewardsResponse): _43.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _43.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_43.QueryValidatorCommissionRequest>): _43.QueryValidatorCommissionRequest;
                fromAmino(object: _43.QueryValidatorCommissionRequestAmino): _43.QueryValidatorCommissionRequest;
                toAmino(message: _43.QueryValidatorCommissionRequest): _43.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _43.QueryValidatorCommissionRequestAminoMsg): _43.QueryValidatorCommissionRequest;
                toAminoMsg(message: _43.QueryValidatorCommissionRequest): _43.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _43.QueryValidatorCommissionRequestProtoMsg): _43.QueryValidatorCommissionRequest;
                toProto(message: _43.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _43.QueryValidatorCommissionRequest): _43.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _43.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_43.QueryValidatorCommissionResponse>): _43.QueryValidatorCommissionResponse;
                fromAmino(object: _43.QueryValidatorCommissionResponseAmino): _43.QueryValidatorCommissionResponse;
                toAmino(message: _43.QueryValidatorCommissionResponse): _43.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _43.QueryValidatorCommissionResponseAminoMsg): _43.QueryValidatorCommissionResponse;
                toAminoMsg(message: _43.QueryValidatorCommissionResponse): _43.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _43.QueryValidatorCommissionResponseProtoMsg): _43.QueryValidatorCommissionResponse;
                toProto(message: _43.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _43.QueryValidatorCommissionResponse): _43.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _43.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_43.QueryValidatorSlashesRequest>): _43.QueryValidatorSlashesRequest;
                fromAmino(object: _43.QueryValidatorSlashesRequestAmino): _43.QueryValidatorSlashesRequest;
                toAmino(message: _43.QueryValidatorSlashesRequest): _43.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _43.QueryValidatorSlashesRequestAminoMsg): _43.QueryValidatorSlashesRequest;
                toAminoMsg(message: _43.QueryValidatorSlashesRequest): _43.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _43.QueryValidatorSlashesRequestProtoMsg): _43.QueryValidatorSlashesRequest;
                toProto(message: _43.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _43.QueryValidatorSlashesRequest): _43.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _43.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_43.QueryValidatorSlashesResponse>): _43.QueryValidatorSlashesResponse;
                fromAmino(object: _43.QueryValidatorSlashesResponseAmino): _43.QueryValidatorSlashesResponse;
                toAmino(message: _43.QueryValidatorSlashesResponse): _43.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _43.QueryValidatorSlashesResponseAminoMsg): _43.QueryValidatorSlashesResponse;
                toAminoMsg(message: _43.QueryValidatorSlashesResponse): _43.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _43.QueryValidatorSlashesResponseProtoMsg): _43.QueryValidatorSlashesResponse;
                toProto(message: _43.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _43.QueryValidatorSlashesResponse): _43.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _43.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_43.QueryDelegationRewardsRequest>): _43.QueryDelegationRewardsRequest;
                fromAmino(object: _43.QueryDelegationRewardsRequestAmino): _43.QueryDelegationRewardsRequest;
                toAmino(message: _43.QueryDelegationRewardsRequest): _43.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _43.QueryDelegationRewardsRequestAminoMsg): _43.QueryDelegationRewardsRequest;
                toAminoMsg(message: _43.QueryDelegationRewardsRequest): _43.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _43.QueryDelegationRewardsRequestProtoMsg): _43.QueryDelegationRewardsRequest;
                toProto(message: _43.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryDelegationRewardsRequest): _43.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _43.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_43.QueryDelegationRewardsResponse>): _43.QueryDelegationRewardsResponse;
                fromAmino(object: _43.QueryDelegationRewardsResponseAmino): _43.QueryDelegationRewardsResponse;
                toAmino(message: _43.QueryDelegationRewardsResponse): _43.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _43.QueryDelegationRewardsResponseAminoMsg): _43.QueryDelegationRewardsResponse;
                toAminoMsg(message: _43.QueryDelegationRewardsResponse): _43.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _43.QueryDelegationRewardsResponseProtoMsg): _43.QueryDelegationRewardsResponse;
                toProto(message: _43.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryDelegationRewardsResponse): _43.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _43.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_43.QueryDelegationTotalRewardsRequest>): _43.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _43.QueryDelegationTotalRewardsRequestAmino): _43.QueryDelegationTotalRewardsRequest;
                toAmino(message: _43.QueryDelegationTotalRewardsRequest): _43.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _43.QueryDelegationTotalRewardsRequestAminoMsg): _43.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _43.QueryDelegationTotalRewardsRequest): _43.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _43.QueryDelegationTotalRewardsRequestProtoMsg): _43.QueryDelegationTotalRewardsRequest;
                toProto(message: _43.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryDelegationTotalRewardsRequest): _43.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _43.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_43.QueryDelegationTotalRewardsResponse>): _43.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _43.QueryDelegationTotalRewardsResponseAmino): _43.QueryDelegationTotalRewardsResponse;
                toAmino(message: _43.QueryDelegationTotalRewardsResponse): _43.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _43.QueryDelegationTotalRewardsResponseAminoMsg): _43.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _43.QueryDelegationTotalRewardsResponse): _43.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _43.QueryDelegationTotalRewardsResponseProtoMsg): _43.QueryDelegationTotalRewardsResponse;
                toProto(message: _43.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryDelegationTotalRewardsResponse): _43.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _43.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_43.QueryDelegatorValidatorsRequest>): _43.QueryDelegatorValidatorsRequest;
                fromAmino(object: _43.QueryDelegatorValidatorsRequestAmino): _43.QueryDelegatorValidatorsRequest;
                toAmino(message: _43.QueryDelegatorValidatorsRequest): _43.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _43.QueryDelegatorValidatorsRequestAminoMsg): _43.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _43.QueryDelegatorValidatorsRequest): _43.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _43.QueryDelegatorValidatorsRequestProtoMsg): _43.QueryDelegatorValidatorsRequest;
                toProto(message: _43.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryDelegatorValidatorsRequest): _43.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _43.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_43.QueryDelegatorValidatorsResponse>): _43.QueryDelegatorValidatorsResponse;
                fromAmino(object: _43.QueryDelegatorValidatorsResponseAmino): _43.QueryDelegatorValidatorsResponse;
                toAmino(message: _43.QueryDelegatorValidatorsResponse): _43.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _43.QueryDelegatorValidatorsResponseAminoMsg): _43.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _43.QueryDelegatorValidatorsResponse): _43.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _43.QueryDelegatorValidatorsResponseProtoMsg): _43.QueryDelegatorValidatorsResponse;
                toProto(message: _43.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryDelegatorValidatorsResponse): _43.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _43.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_43.QueryDelegatorWithdrawAddressRequest>): _43.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _43.QueryDelegatorWithdrawAddressRequestAmino): _43.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _43.QueryDelegatorWithdrawAddressRequest): _43.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _43.QueryDelegatorWithdrawAddressRequestAminoMsg): _43.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _43.QueryDelegatorWithdrawAddressRequest): _43.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _43.QueryDelegatorWithdrawAddressRequestProtoMsg): _43.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _43.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _43.QueryDelegatorWithdrawAddressRequest): _43.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _43.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_43.QueryDelegatorWithdrawAddressResponse>): _43.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _43.QueryDelegatorWithdrawAddressResponseAmino): _43.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _43.QueryDelegatorWithdrawAddressResponse): _43.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _43.QueryDelegatorWithdrawAddressResponseAminoMsg): _43.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _43.QueryDelegatorWithdrawAddressResponse): _43.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _43.QueryDelegatorWithdrawAddressResponseProtoMsg): _43.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _43.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _43.QueryDelegatorWithdrawAddressResponse): _43.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _43.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _43.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_43.QueryCommunityPoolRequest>): _43.QueryCommunityPoolRequest;
                fromAmino(_: _43.QueryCommunityPoolRequestAmino): _43.QueryCommunityPoolRequest;
                toAmino(_: _43.QueryCommunityPoolRequest): _43.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _43.QueryCommunityPoolRequestAminoMsg): _43.QueryCommunityPoolRequest;
                toAminoMsg(message: _43.QueryCommunityPoolRequest): _43.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _43.QueryCommunityPoolRequestProtoMsg): _43.QueryCommunityPoolRequest;
                toProto(message: _43.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _43.QueryCommunityPoolRequest): _43.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _43.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_43.QueryCommunityPoolResponse>): _43.QueryCommunityPoolResponse;
                fromAmino(object: _43.QueryCommunityPoolResponseAmino): _43.QueryCommunityPoolResponse;
                toAmino(message: _43.QueryCommunityPoolResponse): _43.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _43.QueryCommunityPoolResponseAminoMsg): _43.QueryCommunityPoolResponse;
                toAminoMsg(message: _43.QueryCommunityPoolResponse): _43.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _43.QueryCommunityPoolResponseProtoMsg): _43.QueryCommunityPoolResponse;
                toProto(message: _43.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _43.QueryCommunityPoolResponse): _43.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _42.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_42.DelegatorWithdrawInfo>): _42.DelegatorWithdrawInfo;
                fromAmino(object: _42.DelegatorWithdrawInfoAmino): _42.DelegatorWithdrawInfo;
                toAmino(message: _42.DelegatorWithdrawInfo): _42.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _42.DelegatorWithdrawInfoAminoMsg): _42.DelegatorWithdrawInfo;
                toAminoMsg(message: _42.DelegatorWithdrawInfo): _42.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _42.DelegatorWithdrawInfoProtoMsg): _42.DelegatorWithdrawInfo;
                toProto(message: _42.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _42.DelegatorWithdrawInfo): _42.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _42.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_42.ValidatorOutstandingRewardsRecord>): _42.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _42.ValidatorOutstandingRewardsRecordAmino): _42.ValidatorOutstandingRewardsRecord;
                toAmino(message: _42.ValidatorOutstandingRewardsRecord): _42.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _42.ValidatorOutstandingRewardsRecordAminoMsg): _42.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _42.ValidatorOutstandingRewardsRecord): _42.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _42.ValidatorOutstandingRewardsRecordProtoMsg): _42.ValidatorOutstandingRewardsRecord;
                toProto(message: _42.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _42.ValidatorOutstandingRewardsRecord): _42.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _42.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_42.ValidatorAccumulatedCommissionRecord>): _42.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _42.ValidatorAccumulatedCommissionRecordAmino): _42.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _42.ValidatorAccumulatedCommissionRecord): _42.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _42.ValidatorAccumulatedCommissionRecordAminoMsg): _42.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _42.ValidatorAccumulatedCommissionRecord): _42.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _42.ValidatorAccumulatedCommissionRecordProtoMsg): _42.ValidatorAccumulatedCommissionRecord;
                toProto(message: _42.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _42.ValidatorAccumulatedCommissionRecord): _42.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _42.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_42.ValidatorHistoricalRewardsRecord>): _42.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _42.ValidatorHistoricalRewardsRecordAmino): _42.ValidatorHistoricalRewardsRecord;
                toAmino(message: _42.ValidatorHistoricalRewardsRecord): _42.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _42.ValidatorHistoricalRewardsRecordAminoMsg): _42.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _42.ValidatorHistoricalRewardsRecord): _42.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _42.ValidatorHistoricalRewardsRecordProtoMsg): _42.ValidatorHistoricalRewardsRecord;
                toProto(message: _42.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _42.ValidatorHistoricalRewardsRecord): _42.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _42.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_42.ValidatorCurrentRewardsRecord>): _42.ValidatorCurrentRewardsRecord;
                fromAmino(object: _42.ValidatorCurrentRewardsRecordAmino): _42.ValidatorCurrentRewardsRecord;
                toAmino(message: _42.ValidatorCurrentRewardsRecord): _42.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _42.ValidatorCurrentRewardsRecordAminoMsg): _42.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _42.ValidatorCurrentRewardsRecord): _42.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _42.ValidatorCurrentRewardsRecordProtoMsg): _42.ValidatorCurrentRewardsRecord;
                toProto(message: _42.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _42.ValidatorCurrentRewardsRecord): _42.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _42.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_42.DelegatorStartingInfoRecord>): _42.DelegatorStartingInfoRecord;
                fromAmino(object: _42.DelegatorStartingInfoRecordAmino): _42.DelegatorStartingInfoRecord;
                toAmino(message: _42.DelegatorStartingInfoRecord): _42.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _42.DelegatorStartingInfoRecordAminoMsg): _42.DelegatorStartingInfoRecord;
                toAminoMsg(message: _42.DelegatorStartingInfoRecord): _42.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _42.DelegatorStartingInfoRecordProtoMsg): _42.DelegatorStartingInfoRecord;
                toProto(message: _42.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _42.DelegatorStartingInfoRecord): _42.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _42.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_42.ValidatorSlashEventRecord>): _42.ValidatorSlashEventRecord;
                fromAmino(object: _42.ValidatorSlashEventRecordAmino): _42.ValidatorSlashEventRecord;
                toAmino(message: _42.ValidatorSlashEventRecord): _42.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _42.ValidatorSlashEventRecordAminoMsg): _42.ValidatorSlashEventRecord;
                toAminoMsg(message: _42.ValidatorSlashEventRecord): _42.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _42.ValidatorSlashEventRecordProtoMsg): _42.ValidatorSlashEventRecord;
                toProto(message: _42.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _42.ValidatorSlashEventRecord): _42.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _41.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.Params;
                fromPartial(object: Partial<_41.Params>): _41.Params;
                fromAmino(object: _41.ParamsAmino): _41.Params;
                toAmino(message: _41.Params): _41.ParamsAmino;
                fromAminoMsg(object: _41.ParamsAminoMsg): _41.Params;
                toAminoMsg(message: _41.Params): _41.ParamsAminoMsg;
                fromProtoMsg(message: _41.ParamsProtoMsg): _41.Params;
                toProto(message: _41.Params): Uint8Array;
                toProtoMsg(message: _41.Params): _41.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _41.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_41.ValidatorHistoricalRewards>): _41.ValidatorHistoricalRewards;
                fromAmino(object: _41.ValidatorHistoricalRewardsAmino): _41.ValidatorHistoricalRewards;
                toAmino(message: _41.ValidatorHistoricalRewards): _41.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _41.ValidatorHistoricalRewardsAminoMsg): _41.ValidatorHistoricalRewards;
                toAminoMsg(message: _41.ValidatorHistoricalRewards): _41.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _41.ValidatorHistoricalRewardsProtoMsg): _41.ValidatorHistoricalRewards;
                toProto(message: _41.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _41.ValidatorHistoricalRewards): _41.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _41.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.ValidatorCurrentRewards;
                fromPartial(object: Partial<_41.ValidatorCurrentRewards>): _41.ValidatorCurrentRewards;
                fromAmino(object: _41.ValidatorCurrentRewardsAmino): _41.ValidatorCurrentRewards;
                toAmino(message: _41.ValidatorCurrentRewards): _41.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _41.ValidatorCurrentRewardsAminoMsg): _41.ValidatorCurrentRewards;
                toAminoMsg(message: _41.ValidatorCurrentRewards): _41.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _41.ValidatorCurrentRewardsProtoMsg): _41.ValidatorCurrentRewards;
                toProto(message: _41.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _41.ValidatorCurrentRewards): _41.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _41.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_41.ValidatorAccumulatedCommission>): _41.ValidatorAccumulatedCommission;
                fromAmino(object: _41.ValidatorAccumulatedCommissionAmino): _41.ValidatorAccumulatedCommission;
                toAmino(message: _41.ValidatorAccumulatedCommission): _41.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _41.ValidatorAccumulatedCommissionAminoMsg): _41.ValidatorAccumulatedCommission;
                toAminoMsg(message: _41.ValidatorAccumulatedCommission): _41.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _41.ValidatorAccumulatedCommissionProtoMsg): _41.ValidatorAccumulatedCommission;
                toProto(message: _41.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _41.ValidatorAccumulatedCommission): _41.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _41.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_41.ValidatorOutstandingRewards>): _41.ValidatorOutstandingRewards;
                fromAmino(object: _41.ValidatorOutstandingRewardsAmino): _41.ValidatorOutstandingRewards;
                toAmino(message: _41.ValidatorOutstandingRewards): _41.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _41.ValidatorOutstandingRewardsAminoMsg): _41.ValidatorOutstandingRewards;
                toAminoMsg(message: _41.ValidatorOutstandingRewards): _41.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _41.ValidatorOutstandingRewardsProtoMsg): _41.ValidatorOutstandingRewards;
                toProto(message: _41.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _41.ValidatorOutstandingRewards): _41.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _41.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.ValidatorSlashEvent;
                fromPartial(object: Partial<_41.ValidatorSlashEvent>): _41.ValidatorSlashEvent;
                fromAmino(object: _41.ValidatorSlashEventAmino): _41.ValidatorSlashEvent;
                toAmino(message: _41.ValidatorSlashEvent): _41.ValidatorSlashEventAmino;
                fromAminoMsg(object: _41.ValidatorSlashEventAminoMsg): _41.ValidatorSlashEvent;
                toAminoMsg(message: _41.ValidatorSlashEvent): _41.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _41.ValidatorSlashEventProtoMsg): _41.ValidatorSlashEvent;
                toProto(message: _41.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _41.ValidatorSlashEvent): _41.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _41.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.ValidatorSlashEvents;
                fromPartial(object: Partial<_41.ValidatorSlashEvents>): _41.ValidatorSlashEvents;
                fromAmino(object: _41.ValidatorSlashEventsAmino): _41.ValidatorSlashEvents;
                toAmino(message: _41.ValidatorSlashEvents): _41.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _41.ValidatorSlashEventsAminoMsg): _41.ValidatorSlashEvents;
                toAminoMsg(message: _41.ValidatorSlashEvents): _41.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _41.ValidatorSlashEventsProtoMsg): _41.ValidatorSlashEvents;
                toProto(message: _41.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _41.ValidatorSlashEvents): _41.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _41.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.FeePool;
                fromPartial(object: Partial<_41.FeePool>): _41.FeePool;
                fromAmino(object: _41.FeePoolAmino): _41.FeePool;
                toAmino(message: _41.FeePool): _41.FeePoolAmino;
                fromAminoMsg(object: _41.FeePoolAminoMsg): _41.FeePool;
                toAminoMsg(message: _41.FeePool): _41.FeePoolAminoMsg;
                fromProtoMsg(message: _41.FeePoolProtoMsg): _41.FeePool;
                toProto(message: _41.FeePool): Uint8Array;
                toProtoMsg(message: _41.FeePool): _41.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _41.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_41.CommunityPoolSpendProposal>): _41.CommunityPoolSpendProposal;
                fromAmino(object: _41.CommunityPoolSpendProposalAmino): _41.CommunityPoolSpendProposal;
                toAmino(message: _41.CommunityPoolSpendProposal): _41.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _41.CommunityPoolSpendProposalAminoMsg): _41.CommunityPoolSpendProposal;
                toAminoMsg(message: _41.CommunityPoolSpendProposal): _41.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _41.CommunityPoolSpendProposalProtoMsg): _41.CommunityPoolSpendProposal;
                toProto(message: _41.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _41.CommunityPoolSpendProposal): _41.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _41.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.DelegatorStartingInfo;
                fromPartial(object: Partial<_41.DelegatorStartingInfo>): _41.DelegatorStartingInfo;
                fromAmino(object: _41.DelegatorStartingInfoAmino): _41.DelegatorStartingInfo;
                toAmino(message: _41.DelegatorStartingInfo): _41.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _41.DelegatorStartingInfoAminoMsg): _41.DelegatorStartingInfo;
                toAminoMsg(message: _41.DelegatorStartingInfo): _41.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _41.DelegatorStartingInfoProtoMsg): _41.DelegatorStartingInfo;
                toProto(message: _41.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _41.DelegatorStartingInfo): _41.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _41.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.DelegationDelegatorReward;
                fromPartial(object: Partial<_41.DelegationDelegatorReward>): _41.DelegationDelegatorReward;
                fromAmino(object: _41.DelegationDelegatorRewardAmino): _41.DelegationDelegatorReward;
                toAmino(message: _41.DelegationDelegatorReward): _41.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _41.DelegationDelegatorRewardAminoMsg): _41.DelegationDelegatorReward;
                toAminoMsg(message: _41.DelegationDelegatorReward): _41.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _41.DelegationDelegatorRewardProtoMsg): _41.DelegationDelegatorReward;
                toProto(message: _41.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _41.DelegationDelegatorReward): _41.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _41.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_41.CommunityPoolSpendProposalWithDeposit>): _41.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _41.CommunityPoolSpendProposalWithDepositAmino): _41.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _41.CommunityPoolSpendProposalWithDeposit): _41.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _41.CommunityPoolSpendProposalWithDepositAminoMsg): _41.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _41.CommunityPoolSpendProposalWithDeposit): _41.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _41.CommunityPoolSpendProposalWithDepositProtoMsg): _41.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _41.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _41.CommunityPoolSpendProposalWithDeposit): _41.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _192.MsgClientImpl;
            QueryClientImpl: typeof _179.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _47.QueryEvidenceRequest): Promise<_47.QueryEvidenceResponse>;
                allEvidence(request?: _47.QueryAllEvidenceRequest): Promise<_47.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _164.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _48.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _48.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _48.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _48.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _48.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _48.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _48.MsgSubmitEvidence) => _48.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _48.MsgSubmitEvidenceAmino) => _48.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _48.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.MsgSubmitEvidence;
                fromPartial(object: Partial<_48.MsgSubmitEvidence>): _48.MsgSubmitEvidence;
                fromAmino(object: _48.MsgSubmitEvidenceAmino): _48.MsgSubmitEvidence;
                toAmino(message: _48.MsgSubmitEvidence): _48.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _48.MsgSubmitEvidenceAminoMsg): _48.MsgSubmitEvidence;
                toAminoMsg(message: _48.MsgSubmitEvidence): _48.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _48.MsgSubmitEvidenceProtoMsg): _48.MsgSubmitEvidence;
                toProto(message: _48.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _48.MsgSubmitEvidence): _48.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _48.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_48.MsgSubmitEvidenceResponse>): _48.MsgSubmitEvidenceResponse;
                fromAmino(object: _48.MsgSubmitEvidenceResponseAmino): _48.MsgSubmitEvidenceResponse;
                toAmino(message: _48.MsgSubmitEvidenceResponse): _48.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _48.MsgSubmitEvidenceResponseAminoMsg): _48.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _48.MsgSubmitEvidenceResponse): _48.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _48.MsgSubmitEvidenceResponseProtoMsg): _48.MsgSubmitEvidenceResponse;
                toProto(message: _48.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _48.MsgSubmitEvidenceResponse): _48.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _47.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryEvidenceRequest;
                fromPartial(object: Partial<_47.QueryEvidenceRequest>): _47.QueryEvidenceRequest;
                fromAmino(object: _47.QueryEvidenceRequestAmino): _47.QueryEvidenceRequest;
                toAmino(message: _47.QueryEvidenceRequest): _47.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _47.QueryEvidenceRequestAminoMsg): _47.QueryEvidenceRequest;
                toAminoMsg(message: _47.QueryEvidenceRequest): _47.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _47.QueryEvidenceRequestProtoMsg): _47.QueryEvidenceRequest;
                toProto(message: _47.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _47.QueryEvidenceRequest): _47.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _47.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryEvidenceResponse;
                fromPartial(object: Partial<_47.QueryEvidenceResponse>): _47.QueryEvidenceResponse;
                fromAmino(object: _47.QueryEvidenceResponseAmino): _47.QueryEvidenceResponse;
                toAmino(message: _47.QueryEvidenceResponse): _47.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _47.QueryEvidenceResponseAminoMsg): _47.QueryEvidenceResponse;
                toAminoMsg(message: _47.QueryEvidenceResponse): _47.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _47.QueryEvidenceResponseProtoMsg): _47.QueryEvidenceResponse;
                toProto(message: _47.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _47.QueryEvidenceResponse): _47.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _47.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_47.QueryAllEvidenceRequest>): _47.QueryAllEvidenceRequest;
                fromAmino(object: _47.QueryAllEvidenceRequestAmino): _47.QueryAllEvidenceRequest;
                toAmino(message: _47.QueryAllEvidenceRequest): _47.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _47.QueryAllEvidenceRequestAminoMsg): _47.QueryAllEvidenceRequest;
                toAminoMsg(message: _47.QueryAllEvidenceRequest): _47.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _47.QueryAllEvidenceRequestProtoMsg): _47.QueryAllEvidenceRequest;
                toProto(message: _47.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _47.QueryAllEvidenceRequest): _47.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _47.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_47.QueryAllEvidenceResponse>): _47.QueryAllEvidenceResponse;
                fromAmino(object: _47.QueryAllEvidenceResponseAmino): _47.QueryAllEvidenceResponse;
                toAmino(message: _47.QueryAllEvidenceResponse): _47.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _47.QueryAllEvidenceResponseAminoMsg): _47.QueryAllEvidenceResponse;
                toAminoMsg(message: _47.QueryAllEvidenceResponse): _47.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _47.QueryAllEvidenceResponseProtoMsg): _47.QueryAllEvidenceResponse;
                toProto(message: _47.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _47.QueryAllEvidenceResponse): _47.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _45.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.Equivocation;
                fromPartial(object: Partial<_45.Equivocation>): _45.Equivocation;
                fromAmino(object: _45.EquivocationAmino): _45.Equivocation;
                toAmino(message: _45.Equivocation): _45.EquivocationAmino;
                fromAminoMsg(object: _45.EquivocationAminoMsg): _45.Equivocation;
                toAminoMsg(message: _45.Equivocation): _45.EquivocationAminoMsg;
                fromProtoMsg(message: _45.EquivocationProtoMsg): _45.Equivocation;
                toProto(message: _45.Equivocation): Uint8Array;
                toProtoMsg(message: _45.Equivocation): _45.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _193.MsgClientImpl;
            QueryClientImpl: typeof _180.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _51.QueryAllowanceRequest): Promise<_51.QueryAllowanceResponse>;
                allowances(request: _51.QueryAllowancesRequest): Promise<_51.QueryAllowancesResponse>;
                allowancesByGranter(request: _51.QueryAllowancesByGranterRequest): Promise<_51.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _165.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _52.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _52.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _52.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _52.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _52.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _52.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _52.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _52.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _52.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _52.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _52.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _52.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _52.MsgGrantAllowance) => _52.MsgGrantAllowanceAmino;
                    fromAmino: (object: _52.MsgGrantAllowanceAmino) => _52.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _52.MsgRevokeAllowance) => _52.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _52.MsgRevokeAllowanceAmino) => _52.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _52.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.MsgGrantAllowance;
                fromPartial(object: Partial<_52.MsgGrantAllowance>): _52.MsgGrantAllowance;
                fromAmino(object: _52.MsgGrantAllowanceAmino): _52.MsgGrantAllowance;
                toAmino(message: _52.MsgGrantAllowance): _52.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _52.MsgGrantAllowanceAminoMsg): _52.MsgGrantAllowance;
                toAminoMsg(message: _52.MsgGrantAllowance): _52.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _52.MsgGrantAllowanceProtoMsg): _52.MsgGrantAllowance;
                toProto(message: _52.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _52.MsgGrantAllowance): _52.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _52.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_52.MsgGrantAllowanceResponse>): _52.MsgGrantAllowanceResponse;
                fromAmino(_: _52.MsgGrantAllowanceResponseAmino): _52.MsgGrantAllowanceResponse;
                toAmino(_: _52.MsgGrantAllowanceResponse): _52.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _52.MsgGrantAllowanceResponseAminoMsg): _52.MsgGrantAllowanceResponse;
                toAminoMsg(message: _52.MsgGrantAllowanceResponse): _52.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _52.MsgGrantAllowanceResponseProtoMsg): _52.MsgGrantAllowanceResponse;
                toProto(message: _52.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _52.MsgGrantAllowanceResponse): _52.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _52.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.MsgRevokeAllowance;
                fromPartial(object: Partial<_52.MsgRevokeAllowance>): _52.MsgRevokeAllowance;
                fromAmino(object: _52.MsgRevokeAllowanceAmino): _52.MsgRevokeAllowance;
                toAmino(message: _52.MsgRevokeAllowance): _52.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _52.MsgRevokeAllowanceAminoMsg): _52.MsgRevokeAllowance;
                toAminoMsg(message: _52.MsgRevokeAllowance): _52.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _52.MsgRevokeAllowanceProtoMsg): _52.MsgRevokeAllowance;
                toProto(message: _52.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _52.MsgRevokeAllowance): _52.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _52.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_52.MsgRevokeAllowanceResponse>): _52.MsgRevokeAllowanceResponse;
                fromAmino(_: _52.MsgRevokeAllowanceResponseAmino): _52.MsgRevokeAllowanceResponse;
                toAmino(_: _52.MsgRevokeAllowanceResponse): _52.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _52.MsgRevokeAllowanceResponseAminoMsg): _52.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _52.MsgRevokeAllowanceResponse): _52.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _52.MsgRevokeAllowanceResponseProtoMsg): _52.MsgRevokeAllowanceResponse;
                toProto(message: _52.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _52.MsgRevokeAllowanceResponse): _52.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _49.BasicAllowance | _49.PeriodicAllowance | _49.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _51.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryAllowanceRequest;
                fromPartial(object: Partial<_51.QueryAllowanceRequest>): _51.QueryAllowanceRequest;
                fromAmino(object: _51.QueryAllowanceRequestAmino): _51.QueryAllowanceRequest;
                toAmino(message: _51.QueryAllowanceRequest): _51.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _51.QueryAllowanceRequestAminoMsg): _51.QueryAllowanceRequest;
                toAminoMsg(message: _51.QueryAllowanceRequest): _51.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _51.QueryAllowanceRequestProtoMsg): _51.QueryAllowanceRequest;
                toProto(message: _51.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _51.QueryAllowanceRequest): _51.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _51.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryAllowanceResponse;
                fromPartial(object: Partial<_51.QueryAllowanceResponse>): _51.QueryAllowanceResponse;
                fromAmino(object: _51.QueryAllowanceResponseAmino): _51.QueryAllowanceResponse;
                toAmino(message: _51.QueryAllowanceResponse): _51.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _51.QueryAllowanceResponseAminoMsg): _51.QueryAllowanceResponse;
                toAminoMsg(message: _51.QueryAllowanceResponse): _51.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _51.QueryAllowanceResponseProtoMsg): _51.QueryAllowanceResponse;
                toProto(message: _51.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _51.QueryAllowanceResponse): _51.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _51.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryAllowancesRequest;
                fromPartial(object: Partial<_51.QueryAllowancesRequest>): _51.QueryAllowancesRequest;
                fromAmino(object: _51.QueryAllowancesRequestAmino): _51.QueryAllowancesRequest;
                toAmino(message: _51.QueryAllowancesRequest): _51.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _51.QueryAllowancesRequestAminoMsg): _51.QueryAllowancesRequest;
                toAminoMsg(message: _51.QueryAllowancesRequest): _51.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _51.QueryAllowancesRequestProtoMsg): _51.QueryAllowancesRequest;
                toProto(message: _51.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _51.QueryAllowancesRequest): _51.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _51.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryAllowancesResponse;
                fromPartial(object: Partial<_51.QueryAllowancesResponse>): _51.QueryAllowancesResponse;
                fromAmino(object: _51.QueryAllowancesResponseAmino): _51.QueryAllowancesResponse;
                toAmino(message: _51.QueryAllowancesResponse): _51.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _51.QueryAllowancesResponseAminoMsg): _51.QueryAllowancesResponse;
                toAminoMsg(message: _51.QueryAllowancesResponse): _51.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _51.QueryAllowancesResponseProtoMsg): _51.QueryAllowancesResponse;
                toProto(message: _51.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _51.QueryAllowancesResponse): _51.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _51.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_51.QueryAllowancesByGranterRequest>): _51.QueryAllowancesByGranterRequest;
                fromAmino(object: _51.QueryAllowancesByGranterRequestAmino): _51.QueryAllowancesByGranterRequest;
                toAmino(message: _51.QueryAllowancesByGranterRequest): _51.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _51.QueryAllowancesByGranterRequestAminoMsg): _51.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _51.QueryAllowancesByGranterRequest): _51.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _51.QueryAllowancesByGranterRequestProtoMsg): _51.QueryAllowancesByGranterRequest;
                toProto(message: _51.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _51.QueryAllowancesByGranterRequest): _51.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _51.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_51.QueryAllowancesByGranterResponse>): _51.QueryAllowancesByGranterResponse;
                fromAmino(object: _51.QueryAllowancesByGranterResponseAmino): _51.QueryAllowancesByGranterResponse;
                toAmino(message: _51.QueryAllowancesByGranterResponse): _51.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _51.QueryAllowancesByGranterResponseAminoMsg): _51.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _51.QueryAllowancesByGranterResponse): _51.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _51.QueryAllowancesByGranterResponseProtoMsg): _51.QueryAllowancesByGranterResponse;
                toProto(message: _51.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _51.QueryAllowancesByGranterResponse): _51.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _49.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.BasicAllowance;
                fromPartial(object: Partial<_49.BasicAllowance>): _49.BasicAllowance;
                fromAmino(object: _49.BasicAllowanceAmino): _49.BasicAllowance;
                toAmino(message: _49.BasicAllowance): _49.BasicAllowanceAmino;
                fromAminoMsg(object: _49.BasicAllowanceAminoMsg): _49.BasicAllowance;
                toAminoMsg(message: _49.BasicAllowance): _49.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _49.BasicAllowanceProtoMsg): _49.BasicAllowance;
                toProto(message: _49.BasicAllowance): Uint8Array;
                toProtoMsg(message: _49.BasicAllowance): _49.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _49.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.PeriodicAllowance;
                fromPartial(object: Partial<_49.PeriodicAllowance>): _49.PeriodicAllowance;
                fromAmino(object: _49.PeriodicAllowanceAmino): _49.PeriodicAllowance;
                toAmino(message: _49.PeriodicAllowance): _49.PeriodicAllowanceAmino;
                fromAminoMsg(object: _49.PeriodicAllowanceAminoMsg): _49.PeriodicAllowance;
                toAminoMsg(message: _49.PeriodicAllowance): _49.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _49.PeriodicAllowanceProtoMsg): _49.PeriodicAllowance;
                toProto(message: _49.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _49.PeriodicAllowance): _49.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _49.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.AllowedMsgAllowance;
                fromPartial(object: Partial<_49.AllowedMsgAllowance>): _49.AllowedMsgAllowance;
                fromAmino(object: _49.AllowedMsgAllowanceAmino): _49.AllowedMsgAllowance;
                toAmino(message: _49.AllowedMsgAllowance): _49.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _49.AllowedMsgAllowanceAminoMsg): _49.AllowedMsgAllowance;
                toAminoMsg(message: _49.AllowedMsgAllowance): _49.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _49.AllowedMsgAllowanceProtoMsg): _49.AllowedMsgAllowance;
                toProto(message: _49.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _49.AllowedMsgAllowance): _49.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _49.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.Grant;
                fromPartial(object: Partial<_49.Grant>): _49.Grant;
                fromAmino(object: _49.GrantAmino): _49.Grant;
                toAmino(message: _49.Grant): _49.GrantAmino;
                fromAminoMsg(object: _49.GrantAminoMsg): _49.Grant;
                toAminoMsg(message: _49.Grant): _49.GrantAminoMsg;
                fromProtoMsg(message: _49.GrantProtoMsg): _49.Grant;
                toProto(message: _49.Grant): Uint8Array;
                toProtoMsg(message: _49.Grant): _49.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _53.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.GenesisState;
                fromPartial(object: Partial<_53.GenesisState>): _53.GenesisState;
                fromAmino(object: _53.GenesisStateAmino): _53.GenesisState;
                toAmino(message: _53.GenesisState): _53.GenesisStateAmino;
                fromAminoMsg(object: _53.GenesisStateAminoMsg): _53.GenesisState;
                toAminoMsg(message: _53.GenesisState): _53.GenesisStateAminoMsg;
                fromProtoMsg(message: _53.GenesisStateProtoMsg): _53.GenesisState;
                toProto(message: _53.GenesisState): Uint8Array;
                toProtoMsg(message: _53.GenesisState): _53.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _194.MsgClientImpl;
            QueryClientImpl: typeof _181.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _56.QueryProposalRequest): Promise<_56.QueryProposalResponse>;
                proposals(request: _56.QueryProposalsRequest): Promise<_56.QueryProposalsResponse>;
                vote(request: _56.QueryVoteRequest): Promise<_56.QueryVoteResponse>;
                votes(request: _56.QueryVotesRequest): Promise<_56.QueryVotesResponse>;
                params(request: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                deposit(request: _56.QueryDepositRequest): Promise<_56.QueryDepositResponse>;
                deposits(request: _56.QueryDepositsRequest): Promise<_56.QueryDepositsResponse>;
                tallyResult(request: _56.QueryTallyResultRequest): Promise<_56.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _166.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _57.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _57.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _57.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _57.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _57.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _57.MsgSubmitProposal;
                    };
                    vote(value: _57.MsgVote): {
                        typeUrl: string;
                        value: _57.MsgVote;
                    };
                    voteWeighted(value: _57.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _57.MsgVoteWeighted;
                    };
                    deposit(value: _57.MsgDeposit): {
                        typeUrl: string;
                        value: _57.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _57.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _57.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _57.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _57.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _57.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _57.MsgSubmitProposal;
                    };
                    vote(value: _57.MsgVote): {
                        typeUrl: string;
                        value: _57.MsgVote;
                    };
                    voteWeighted(value: _57.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _57.MsgVoteWeighted;
                    };
                    deposit(value: _57.MsgDeposit): {
                        typeUrl: string;
                        value: _57.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _57.MsgSubmitProposal) => _57.MsgSubmitProposalAmino;
                    fromAmino: (object: _57.MsgSubmitProposalAmino) => _57.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _57.MsgVote) => _57.MsgVoteAmino;
                    fromAmino: (object: _57.MsgVoteAmino) => _57.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _57.MsgVoteWeighted) => _57.MsgVoteWeightedAmino;
                    fromAmino: (object: _57.MsgVoteWeightedAmino) => _57.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _57.MsgDeposit) => _57.MsgDepositAmino;
                    fromAmino: (object: _57.MsgDepositAmino) => _57.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _57.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgSubmitProposal;
                fromPartial(object: Partial<_57.MsgSubmitProposal>): _57.MsgSubmitProposal;
                fromAmino(object: _57.MsgSubmitProposalAmino): _57.MsgSubmitProposal;
                toAmino(message: _57.MsgSubmitProposal): _57.MsgSubmitProposalAmino;
                fromAminoMsg(object: _57.MsgSubmitProposalAminoMsg): _57.MsgSubmitProposal;
                toAminoMsg(message: _57.MsgSubmitProposal): _57.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _57.MsgSubmitProposalProtoMsg): _57.MsgSubmitProposal;
                toProto(message: _57.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _57.MsgSubmitProposal): _57.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _57.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_57.MsgSubmitProposalResponse>): _57.MsgSubmitProposalResponse;
                fromAmino(object: _57.MsgSubmitProposalResponseAmino): _57.MsgSubmitProposalResponse;
                toAmino(message: _57.MsgSubmitProposalResponse): _57.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _57.MsgSubmitProposalResponseAminoMsg): _57.MsgSubmitProposalResponse;
                toAminoMsg(message: _57.MsgSubmitProposalResponse): _57.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _57.MsgSubmitProposalResponseProtoMsg): _57.MsgSubmitProposalResponse;
                toProto(message: _57.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _57.MsgSubmitProposalResponse): _57.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _57.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgVote;
                fromPartial(object: Partial<_57.MsgVote>): _57.MsgVote;
                fromAmino(object: _57.MsgVoteAmino): _57.MsgVote;
                toAmino(message: _57.MsgVote): _57.MsgVoteAmino;
                fromAminoMsg(object: _57.MsgVoteAminoMsg): _57.MsgVote;
                toAminoMsg(message: _57.MsgVote): _57.MsgVoteAminoMsg;
                fromProtoMsg(message: _57.MsgVoteProtoMsg): _57.MsgVote;
                toProto(message: _57.MsgVote): Uint8Array;
                toProtoMsg(message: _57.MsgVote): _57.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _57.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.MsgVoteResponse;
                fromPartial(_: Partial<_57.MsgVoteResponse>): _57.MsgVoteResponse;
                fromAmino(_: _57.MsgVoteResponseAmino): _57.MsgVoteResponse;
                toAmino(_: _57.MsgVoteResponse): _57.MsgVoteResponseAmino;
                fromAminoMsg(object: _57.MsgVoteResponseAminoMsg): _57.MsgVoteResponse;
                toAminoMsg(message: _57.MsgVoteResponse): _57.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _57.MsgVoteResponseProtoMsg): _57.MsgVoteResponse;
                toProto(message: _57.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _57.MsgVoteResponse): _57.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _57.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgVoteWeighted;
                fromPartial(object: Partial<_57.MsgVoteWeighted>): _57.MsgVoteWeighted;
                fromAmino(object: _57.MsgVoteWeightedAmino): _57.MsgVoteWeighted;
                toAmino(message: _57.MsgVoteWeighted): _57.MsgVoteWeightedAmino;
                fromAminoMsg(object: _57.MsgVoteWeightedAminoMsg): _57.MsgVoteWeighted;
                toAminoMsg(message: _57.MsgVoteWeighted): _57.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _57.MsgVoteWeightedProtoMsg): _57.MsgVoteWeighted;
                toProto(message: _57.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _57.MsgVoteWeighted): _57.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _57.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_57.MsgVoteWeightedResponse>): _57.MsgVoteWeightedResponse;
                fromAmino(_: _57.MsgVoteWeightedResponseAmino): _57.MsgVoteWeightedResponse;
                toAmino(_: _57.MsgVoteWeightedResponse): _57.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _57.MsgVoteWeightedResponseAminoMsg): _57.MsgVoteWeightedResponse;
                toAminoMsg(message: _57.MsgVoteWeightedResponse): _57.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _57.MsgVoteWeightedResponseProtoMsg): _57.MsgVoteWeightedResponse;
                toProto(message: _57.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _57.MsgVoteWeightedResponse): _57.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _57.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgDeposit;
                fromPartial(object: Partial<_57.MsgDeposit>): _57.MsgDeposit;
                fromAmino(object: _57.MsgDepositAmino): _57.MsgDeposit;
                toAmino(message: _57.MsgDeposit): _57.MsgDepositAmino;
                fromAminoMsg(object: _57.MsgDepositAminoMsg): _57.MsgDeposit;
                toAminoMsg(message: _57.MsgDeposit): _57.MsgDepositAminoMsg;
                fromProtoMsg(message: _57.MsgDepositProtoMsg): _57.MsgDeposit;
                toProto(message: _57.MsgDeposit): Uint8Array;
                toProtoMsg(message: _57.MsgDeposit): _57.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _57.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.MsgDepositResponse;
                fromPartial(_: Partial<_57.MsgDepositResponse>): _57.MsgDepositResponse;
                fromAmino(_: _57.MsgDepositResponseAmino): _57.MsgDepositResponse;
                toAmino(_: _57.MsgDepositResponse): _57.MsgDepositResponseAmino;
                fromAminoMsg(object: _57.MsgDepositResponseAminoMsg): _57.MsgDepositResponse;
                toAminoMsg(message: _57.MsgDepositResponse): _57.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _57.MsgDepositResponseProtoMsg): _57.MsgDepositResponse;
                toProto(message: _57.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _57.MsgDepositResponse): _57.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _55.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _56.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryProposalRequest;
                fromPartial(object: Partial<_56.QueryProposalRequest>): _56.QueryProposalRequest;
                fromAmino(object: _56.QueryProposalRequestAmino): _56.QueryProposalRequest;
                toAmino(message: _56.QueryProposalRequest): _56.QueryProposalRequestAmino;
                fromAminoMsg(object: _56.QueryProposalRequestAminoMsg): _56.QueryProposalRequest;
                toAminoMsg(message: _56.QueryProposalRequest): _56.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _56.QueryProposalRequestProtoMsg): _56.QueryProposalRequest;
                toProto(message: _56.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _56.QueryProposalRequest): _56.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _56.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryProposalResponse;
                fromPartial(object: Partial<_56.QueryProposalResponse>): _56.QueryProposalResponse;
                fromAmino(object: _56.QueryProposalResponseAmino): _56.QueryProposalResponse;
                toAmino(message: _56.QueryProposalResponse): _56.QueryProposalResponseAmino;
                fromAminoMsg(object: _56.QueryProposalResponseAminoMsg): _56.QueryProposalResponse;
                toAminoMsg(message: _56.QueryProposalResponse): _56.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _56.QueryProposalResponseProtoMsg): _56.QueryProposalResponse;
                toProto(message: _56.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _56.QueryProposalResponse): _56.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _56.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryProposalsRequest;
                fromPartial(object: Partial<_56.QueryProposalsRequest>): _56.QueryProposalsRequest;
                fromAmino(object: _56.QueryProposalsRequestAmino): _56.QueryProposalsRequest;
                toAmino(message: _56.QueryProposalsRequest): _56.QueryProposalsRequestAmino;
                fromAminoMsg(object: _56.QueryProposalsRequestAminoMsg): _56.QueryProposalsRequest;
                toAminoMsg(message: _56.QueryProposalsRequest): _56.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryProposalsRequestProtoMsg): _56.QueryProposalsRequest;
                toProto(message: _56.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryProposalsRequest): _56.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _56.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryProposalsResponse;
                fromPartial(object: Partial<_56.QueryProposalsResponse>): _56.QueryProposalsResponse;
                fromAmino(object: _56.QueryProposalsResponseAmino): _56.QueryProposalsResponse;
                toAmino(message: _56.QueryProposalsResponse): _56.QueryProposalsResponseAmino;
                fromAminoMsg(object: _56.QueryProposalsResponseAminoMsg): _56.QueryProposalsResponse;
                toAminoMsg(message: _56.QueryProposalsResponse): _56.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryProposalsResponseProtoMsg): _56.QueryProposalsResponse;
                toProto(message: _56.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryProposalsResponse): _56.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _56.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryVoteRequest;
                fromPartial(object: Partial<_56.QueryVoteRequest>): _56.QueryVoteRequest;
                fromAmino(object: _56.QueryVoteRequestAmino): _56.QueryVoteRequest;
                toAmino(message: _56.QueryVoteRequest): _56.QueryVoteRequestAmino;
                fromAminoMsg(object: _56.QueryVoteRequestAminoMsg): _56.QueryVoteRequest;
                toAminoMsg(message: _56.QueryVoteRequest): _56.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _56.QueryVoteRequestProtoMsg): _56.QueryVoteRequest;
                toProto(message: _56.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _56.QueryVoteRequest): _56.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _56.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryVoteResponse;
                fromPartial(object: Partial<_56.QueryVoteResponse>): _56.QueryVoteResponse;
                fromAmino(object: _56.QueryVoteResponseAmino): _56.QueryVoteResponse;
                toAmino(message: _56.QueryVoteResponse): _56.QueryVoteResponseAmino;
                fromAminoMsg(object: _56.QueryVoteResponseAminoMsg): _56.QueryVoteResponse;
                toAminoMsg(message: _56.QueryVoteResponse): _56.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _56.QueryVoteResponseProtoMsg): _56.QueryVoteResponse;
                toProto(message: _56.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _56.QueryVoteResponse): _56.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _56.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryVotesRequest;
                fromPartial(object: Partial<_56.QueryVotesRequest>): _56.QueryVotesRequest;
                fromAmino(object: _56.QueryVotesRequestAmino): _56.QueryVotesRequest;
                toAmino(message: _56.QueryVotesRequest): _56.QueryVotesRequestAmino;
                fromAminoMsg(object: _56.QueryVotesRequestAminoMsg): _56.QueryVotesRequest;
                toAminoMsg(message: _56.QueryVotesRequest): _56.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _56.QueryVotesRequestProtoMsg): _56.QueryVotesRequest;
                toProto(message: _56.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _56.QueryVotesRequest): _56.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _56.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryVotesResponse;
                fromPartial(object: Partial<_56.QueryVotesResponse>): _56.QueryVotesResponse;
                fromAmino(object: _56.QueryVotesResponseAmino): _56.QueryVotesResponse;
                toAmino(message: _56.QueryVotesResponse): _56.QueryVotesResponseAmino;
                fromAminoMsg(object: _56.QueryVotesResponseAminoMsg): _56.QueryVotesResponse;
                toAminoMsg(message: _56.QueryVotesResponse): _56.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _56.QueryVotesResponseProtoMsg): _56.QueryVotesResponse;
                toProto(message: _56.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _56.QueryVotesResponse): _56.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _56.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryParamsRequest;
                fromPartial(object: Partial<_56.QueryParamsRequest>): _56.QueryParamsRequest;
                fromAmino(object: _56.QueryParamsRequestAmino): _56.QueryParamsRequest;
                toAmino(message: _56.QueryParamsRequest): _56.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _56.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryDepositRequest;
                fromPartial(object: Partial<_56.QueryDepositRequest>): _56.QueryDepositRequest;
                fromAmino(object: _56.QueryDepositRequestAmino): _56.QueryDepositRequest;
                toAmino(message: _56.QueryDepositRequest): _56.QueryDepositRequestAmino;
                fromAminoMsg(object: _56.QueryDepositRequestAminoMsg): _56.QueryDepositRequest;
                toAminoMsg(message: _56.QueryDepositRequest): _56.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _56.QueryDepositRequestProtoMsg): _56.QueryDepositRequest;
                toProto(message: _56.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _56.QueryDepositRequest): _56.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _56.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryDepositResponse;
                fromPartial(object: Partial<_56.QueryDepositResponse>): _56.QueryDepositResponse;
                fromAmino(object: _56.QueryDepositResponseAmino): _56.QueryDepositResponse;
                toAmino(message: _56.QueryDepositResponse): _56.QueryDepositResponseAmino;
                fromAminoMsg(object: _56.QueryDepositResponseAminoMsg): _56.QueryDepositResponse;
                toAminoMsg(message: _56.QueryDepositResponse): _56.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _56.QueryDepositResponseProtoMsg): _56.QueryDepositResponse;
                toProto(message: _56.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _56.QueryDepositResponse): _56.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _56.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryDepositsRequest;
                fromPartial(object: Partial<_56.QueryDepositsRequest>): _56.QueryDepositsRequest;
                fromAmino(object: _56.QueryDepositsRequestAmino): _56.QueryDepositsRequest;
                toAmino(message: _56.QueryDepositsRequest): _56.QueryDepositsRequestAmino;
                fromAminoMsg(object: _56.QueryDepositsRequestAminoMsg): _56.QueryDepositsRequest;
                toAminoMsg(message: _56.QueryDepositsRequest): _56.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryDepositsRequestProtoMsg): _56.QueryDepositsRequest;
                toProto(message: _56.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryDepositsRequest): _56.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _56.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryDepositsResponse;
                fromPartial(object: Partial<_56.QueryDepositsResponse>): _56.QueryDepositsResponse;
                fromAmino(object: _56.QueryDepositsResponseAmino): _56.QueryDepositsResponse;
                toAmino(message: _56.QueryDepositsResponse): _56.QueryDepositsResponseAmino;
                fromAminoMsg(object: _56.QueryDepositsResponseAminoMsg): _56.QueryDepositsResponse;
                toAminoMsg(message: _56.QueryDepositsResponse): _56.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryDepositsResponseProtoMsg): _56.QueryDepositsResponse;
                toProto(message: _56.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryDepositsResponse): _56.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _56.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryTallyResultRequest;
                fromPartial(object: Partial<_56.QueryTallyResultRequest>): _56.QueryTallyResultRequest;
                fromAmino(object: _56.QueryTallyResultRequestAmino): _56.QueryTallyResultRequest;
                toAmino(message: _56.QueryTallyResultRequest): _56.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _56.QueryTallyResultRequestAminoMsg): _56.QueryTallyResultRequest;
                toAminoMsg(message: _56.QueryTallyResultRequest): _56.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _56.QueryTallyResultRequestProtoMsg): _56.QueryTallyResultRequest;
                toProto(message: _56.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _56.QueryTallyResultRequest): _56.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _56.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.QueryTallyResultResponse;
                fromPartial(object: Partial<_56.QueryTallyResultResponse>): _56.QueryTallyResultResponse;
                fromAmino(object: _56.QueryTallyResultResponseAmino): _56.QueryTallyResultResponse;
                toAmino(message: _56.QueryTallyResultResponse): _56.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _56.QueryTallyResultResponseAminoMsg): _56.QueryTallyResultResponse;
                toAminoMsg(message: _56.QueryTallyResultResponse): _56.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _56.QueryTallyResultResponseProtoMsg): _56.QueryTallyResultResponse;
                toProto(message: _56.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _56.QueryTallyResultResponse): _56.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _55.VoteOption;
            voteOptionToJSON(object: _55.VoteOption): string;
            proposalStatusFromJSON(object: any): _55.ProposalStatus;
            proposalStatusToJSON(object: _55.ProposalStatus): string;
            VoteOption: typeof _55.VoteOption;
            VoteOptionSDKType: typeof _55.VoteOption;
            VoteOptionAmino: typeof _55.VoteOption;
            ProposalStatus: typeof _55.ProposalStatus;
            ProposalStatusSDKType: typeof _55.ProposalStatus;
            ProposalStatusAmino: typeof _55.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _55.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.WeightedVoteOption;
                fromPartial(object: Partial<_55.WeightedVoteOption>): _55.WeightedVoteOption;
                fromAmino(object: _55.WeightedVoteOptionAmino): _55.WeightedVoteOption;
                toAmino(message: _55.WeightedVoteOption): _55.WeightedVoteOptionAmino;
                fromAminoMsg(object: _55.WeightedVoteOptionAminoMsg): _55.WeightedVoteOption;
                toAminoMsg(message: _55.WeightedVoteOption): _55.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _55.WeightedVoteOptionProtoMsg): _55.WeightedVoteOption;
                toProto(message: _55.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _55.WeightedVoteOption): _55.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _55.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.TextProposal;
                fromPartial(object: Partial<_55.TextProposal>): _55.TextProposal;
                fromAmino(object: _55.TextProposalAmino): _55.TextProposal;
                toAmino(message: _55.TextProposal): _55.TextProposalAmino;
                fromAminoMsg(object: _55.TextProposalAminoMsg): _55.TextProposal;
                toAminoMsg(message: _55.TextProposal): _55.TextProposalAminoMsg;
                fromProtoMsg(message: _55.TextProposalProtoMsg): _55.TextProposal;
                toProto(message: _55.TextProposal): Uint8Array;
                toProtoMsg(message: _55.TextProposal): _55.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _55.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.Deposit;
                fromPartial(object: Partial<_55.Deposit>): _55.Deposit;
                fromAmino(object: _55.DepositAmino): _55.Deposit;
                toAmino(message: _55.Deposit): _55.DepositAmino;
                fromAminoMsg(object: _55.DepositAminoMsg): _55.Deposit;
                toAminoMsg(message: _55.Deposit): _55.DepositAminoMsg;
                fromProtoMsg(message: _55.DepositProtoMsg): _55.Deposit;
                toProto(message: _55.Deposit): Uint8Array;
                toProtoMsg(message: _55.Deposit): _55.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _55.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.Proposal;
                fromPartial(object: Partial<_55.Proposal>): _55.Proposal;
                fromAmino(object: _55.ProposalAmino): _55.Proposal;
                toAmino(message: _55.Proposal): _55.ProposalAmino;
                fromAminoMsg(object: _55.ProposalAminoMsg): _55.Proposal;
                toAminoMsg(message: _55.Proposal): _55.ProposalAminoMsg;
                fromProtoMsg(message: _55.ProposalProtoMsg): _55.Proposal;
                toProto(message: _55.Proposal): Uint8Array;
                toProtoMsg(message: _55.Proposal): _55.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _55.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.TallyResult;
                fromPartial(object: Partial<_55.TallyResult>): _55.TallyResult;
                fromAmino(object: _55.TallyResultAmino): _55.TallyResult;
                toAmino(message: _55.TallyResult): _55.TallyResultAmino;
                fromAminoMsg(object: _55.TallyResultAminoMsg): _55.TallyResult;
                toAminoMsg(message: _55.TallyResult): _55.TallyResultAminoMsg;
                fromProtoMsg(message: _55.TallyResultProtoMsg): _55.TallyResult;
                toProto(message: _55.TallyResult): Uint8Array;
                toProtoMsg(message: _55.TallyResult): _55.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _55.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.Vote;
                fromPartial(object: Partial<_55.Vote>): _55.Vote;
                fromAmino(object: _55.VoteAmino): _55.Vote;
                toAmino(message: _55.Vote): _55.VoteAmino;
                fromAminoMsg(object: _55.VoteAminoMsg): _55.Vote;
                toAminoMsg(message: _55.Vote): _55.VoteAminoMsg;
                fromProtoMsg(message: _55.VoteProtoMsg): _55.Vote;
                toProto(message: _55.Vote): Uint8Array;
                toProtoMsg(message: _55.Vote): _55.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _55.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.DepositParams;
                fromPartial(object: Partial<_55.DepositParams>): _55.DepositParams;
                fromAmino(object: _55.DepositParamsAmino): _55.DepositParams;
                toAmino(message: _55.DepositParams): _55.DepositParamsAmino;
                fromAminoMsg(object: _55.DepositParamsAminoMsg): _55.DepositParams;
                toAminoMsg(message: _55.DepositParams): _55.DepositParamsAminoMsg;
                fromProtoMsg(message: _55.DepositParamsProtoMsg): _55.DepositParams;
                toProto(message: _55.DepositParams): Uint8Array;
                toProtoMsg(message: _55.DepositParams): _55.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _55.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.VotingParams;
                fromPartial(object: Partial<_55.VotingParams>): _55.VotingParams;
                fromAmino(object: _55.VotingParamsAmino): _55.VotingParams;
                toAmino(message: _55.VotingParams): _55.VotingParamsAmino;
                fromAminoMsg(object: _55.VotingParamsAminoMsg): _55.VotingParams;
                toAminoMsg(message: _55.VotingParams): _55.VotingParamsAminoMsg;
                fromProtoMsg(message: _55.VotingParamsProtoMsg): _55.VotingParams;
                toProto(message: _55.VotingParams): Uint8Array;
                toProtoMsg(message: _55.VotingParams): _55.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _55.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.TallyParams;
                fromPartial(object: Partial<_55.TallyParams>): _55.TallyParams;
                fromAmino(object: _55.TallyParamsAmino): _55.TallyParams;
                toAmino(message: _55.TallyParams): _55.TallyParamsAmino;
                fromAminoMsg(object: _55.TallyParamsAminoMsg): _55.TallyParams;
                toAminoMsg(message: _55.TallyParams): _55.TallyParamsAminoMsg;
                fromProtoMsg(message: _55.TallyParamsProtoMsg): _55.TallyParams;
                toProto(message: _55.TallyParams): Uint8Array;
                toProtoMsg(message: _55.TallyParams): _55.TallyParamsProtoMsg;
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
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _182.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                inflation(request?: _60.QueryInflationRequest): Promise<_60.QueryInflationResponse>;
                annualProvisions(request?: _60.QueryAnnualProvisionsRequest): Promise<_60.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _167.LCDQueryClient;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _60.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _60.QueryInflationRequest;
                fromPartial(_: Partial<_60.QueryInflationRequest>): _60.QueryInflationRequest;
                fromAmino(_: _60.QueryInflationRequestAmino): _60.QueryInflationRequest;
                toAmino(_: _60.QueryInflationRequest): _60.QueryInflationRequestAmino;
                fromAminoMsg(object: _60.QueryInflationRequestAminoMsg): _60.QueryInflationRequest;
                toAminoMsg(message: _60.QueryInflationRequest): _60.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _60.QueryInflationRequestProtoMsg): _60.QueryInflationRequest;
                toProto(message: _60.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _60.QueryInflationRequest): _60.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _60.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryInflationResponse;
                fromPartial(object: Partial<_60.QueryInflationResponse>): _60.QueryInflationResponse;
                fromAmino(object: _60.QueryInflationResponseAmino): _60.QueryInflationResponse;
                toAmino(message: _60.QueryInflationResponse): _60.QueryInflationResponseAmino;
                fromAminoMsg(object: _60.QueryInflationResponseAminoMsg): _60.QueryInflationResponse;
                toAminoMsg(message: _60.QueryInflationResponse): _60.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _60.QueryInflationResponseProtoMsg): _60.QueryInflationResponse;
                toProto(message: _60.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _60.QueryInflationResponse): _60.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _60.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _60.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_60.QueryAnnualProvisionsRequest>): _60.QueryAnnualProvisionsRequest;
                fromAmino(_: _60.QueryAnnualProvisionsRequestAmino): _60.QueryAnnualProvisionsRequest;
                toAmino(_: _60.QueryAnnualProvisionsRequest): _60.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _60.QueryAnnualProvisionsRequestAminoMsg): _60.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _60.QueryAnnualProvisionsRequest): _60.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryAnnualProvisionsRequestProtoMsg): _60.QueryAnnualProvisionsRequest;
                toProto(message: _60.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryAnnualProvisionsRequest): _60.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _60.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_60.QueryAnnualProvisionsResponse>): _60.QueryAnnualProvisionsResponse;
                fromAmino(object: _60.QueryAnnualProvisionsResponseAmino): _60.QueryAnnualProvisionsResponse;
                toAmino(message: _60.QueryAnnualProvisionsResponse): _60.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _60.QueryAnnualProvisionsResponseAminoMsg): _60.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _60.QueryAnnualProvisionsResponse): _60.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryAnnualProvisionsResponseProtoMsg): _60.QueryAnnualProvisionsResponse;
                toProto(message: _60.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryAnnualProvisionsResponse): _60.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _59.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.Minter;
                fromPartial(object: Partial<_59.Minter>): _59.Minter;
                fromAmino(object: _59.MinterAmino): _59.Minter;
                toAmino(message: _59.Minter): _59.MinterAmino;
                fromAminoMsg(object: _59.MinterAminoMsg): _59.Minter;
                toAminoMsg(message: _59.Minter): _59.MinterAminoMsg;
                fromProtoMsg(message: _59.MinterProtoMsg): _59.Minter;
                toProto(message: _59.Minter): Uint8Array;
                toProtoMsg(message: _59.Minter): _59.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _59.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.Params;
                fromPartial(object: Partial<_59.Params>): _59.Params;
                fromAmino(object: _59.ParamsAmino): _59.Params;
                toAmino(message: _59.Params): _59.ParamsAmino;
                fromAminoMsg(object: _59.ParamsAminoMsg): _59.Params;
                toAminoMsg(message: _59.Params): _59.ParamsAminoMsg;
                fromProtoMsg(message: _59.ParamsProtoMsg): _59.Params;
                toProto(message: _59.Params): Uint8Array;
                toProtoMsg(message: _59.Params): _59.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _58.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.GenesisState;
                fromPartial(object: Partial<_58.GenesisState>): _58.GenesisState;
                fromAmino(object: _58.GenesisStateAmino): _58.GenesisState;
                toAmino(message: _58.GenesisState): _58.GenesisStateAmino;
                fromAminoMsg(object: _58.GenesisStateAminoMsg): _58.GenesisState;
                toAminoMsg(message: _58.GenesisState): _58.GenesisStateAminoMsg;
                fromProtoMsg(message: _58.GenesisStateProtoMsg): _58.GenesisState;
                toProto(message: _58.GenesisState): Uint8Array;
                toProtoMsg(message: _58.GenesisState): _58.GenesisStateProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _183.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _168.LCDQueryClient;
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
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _61.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.ParameterChangeProposal;
                fromPartial(object: Partial<_61.ParameterChangeProposal>): _61.ParameterChangeProposal;
                fromAmino(object: _61.ParameterChangeProposalAmino): _61.ParameterChangeProposal;
                toAmino(message: _61.ParameterChangeProposal): _61.ParameterChangeProposalAmino;
                fromAminoMsg(object: _61.ParameterChangeProposalAminoMsg): _61.ParameterChangeProposal;
                toAminoMsg(message: _61.ParameterChangeProposal): _61.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _61.ParameterChangeProposalProtoMsg): _61.ParameterChangeProposal;
                toProto(message: _61.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _61.ParameterChangeProposal): _61.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _61.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.ParamChange;
                fromPartial(object: Partial<_61.ParamChange>): _61.ParamChange;
                fromAmino(object: _61.ParamChangeAmino): _61.ParamChange;
                toAmino(message: _61.ParamChange): _61.ParamChangeAmino;
                fromAminoMsg(object: _61.ParamChangeAminoMsg): _61.ParamChange;
                toAminoMsg(message: _61.ParamChange): _61.ParamChangeAminoMsg;
                fromProtoMsg(message: _61.ParamChangeProtoMsg): _61.ParamChange;
                toProto(message: _61.ParamChange): Uint8Array;
                toProtoMsg(message: _61.ParamChange): _61.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _195.MsgClientImpl;
            QueryClientImpl: typeof _184.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                signingInfo(request: _64.QuerySigningInfoRequest): Promise<_64.QuerySigningInfoResponse>;
                signingInfos(request?: _64.QuerySigningInfosRequest): Promise<_64.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _169.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _66.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _66.MsgUnjail): {
                        typeUrl: string;
                        value: _66.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _66.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _66.MsgUnjail): {
                        typeUrl: string;
                        value: _66.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _66.MsgUnjail) => _66.MsgUnjailAmino;
                    fromAmino: (object: _66.MsgUnjailAmino) => _66.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _66.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.MsgUnjail;
                fromPartial(object: Partial<_66.MsgUnjail>): _66.MsgUnjail;
                fromAmino(object: _66.MsgUnjailAmino): _66.MsgUnjail;
                toAmino(message: _66.MsgUnjail): _66.MsgUnjailAmino;
                fromAminoMsg(object: _66.MsgUnjailAminoMsg): _66.MsgUnjail;
                toAminoMsg(message: _66.MsgUnjail): _66.MsgUnjailAminoMsg;
                fromProtoMsg(message: _66.MsgUnjailProtoMsg): _66.MsgUnjail;
                toProto(message: _66.MsgUnjail): Uint8Array;
                toProtoMsg(message: _66.MsgUnjail): _66.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _66.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _66.MsgUnjailResponse;
                fromPartial(_: Partial<_66.MsgUnjailResponse>): _66.MsgUnjailResponse;
                fromAmino(_: _66.MsgUnjailResponseAmino): _66.MsgUnjailResponse;
                toAmino(_: _66.MsgUnjailResponse): _66.MsgUnjailResponseAmino;
                fromAminoMsg(object: _66.MsgUnjailResponseAminoMsg): _66.MsgUnjailResponse;
                toAminoMsg(message: _66.MsgUnjailResponse): _66.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _66.MsgUnjailResponseProtoMsg): _66.MsgUnjailResponse;
                toProto(message: _66.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _66.MsgUnjailResponse): _66.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _65.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorSigningInfo;
                fromPartial(object: Partial<_65.ValidatorSigningInfo>): _65.ValidatorSigningInfo;
                fromAmino(object: _65.ValidatorSigningInfoAmino): _65.ValidatorSigningInfo;
                toAmino(message: _65.ValidatorSigningInfo): _65.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _65.ValidatorSigningInfoAminoMsg): _65.ValidatorSigningInfo;
                toAminoMsg(message: _65.ValidatorSigningInfo): _65.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _65.ValidatorSigningInfoProtoMsg): _65.ValidatorSigningInfo;
                toProto(message: _65.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _65.ValidatorSigningInfo): _65.ValidatorSigningInfoProtoMsg;
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
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _64.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QuerySigningInfoRequest;
                fromPartial(object: Partial<_64.QuerySigningInfoRequest>): _64.QuerySigningInfoRequest;
                fromAmino(object: _64.QuerySigningInfoRequestAmino): _64.QuerySigningInfoRequest;
                toAmino(message: _64.QuerySigningInfoRequest): _64.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _64.QuerySigningInfoRequestAminoMsg): _64.QuerySigningInfoRequest;
                toAminoMsg(message: _64.QuerySigningInfoRequest): _64.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _64.QuerySigningInfoRequestProtoMsg): _64.QuerySigningInfoRequest;
                toProto(message: _64.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _64.QuerySigningInfoRequest): _64.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _64.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QuerySigningInfoResponse;
                fromPartial(object: Partial<_64.QuerySigningInfoResponse>): _64.QuerySigningInfoResponse;
                fromAmino(object: _64.QuerySigningInfoResponseAmino): _64.QuerySigningInfoResponse;
                toAmino(message: _64.QuerySigningInfoResponse): _64.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _64.QuerySigningInfoResponseAminoMsg): _64.QuerySigningInfoResponse;
                toAminoMsg(message: _64.QuerySigningInfoResponse): _64.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _64.QuerySigningInfoResponseProtoMsg): _64.QuerySigningInfoResponse;
                toProto(message: _64.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _64.QuerySigningInfoResponse): _64.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _64.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QuerySigningInfosRequest;
                fromPartial(object: Partial<_64.QuerySigningInfosRequest>): _64.QuerySigningInfosRequest;
                fromAmino(object: _64.QuerySigningInfosRequestAmino): _64.QuerySigningInfosRequest;
                toAmino(message: _64.QuerySigningInfosRequest): _64.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _64.QuerySigningInfosRequestAminoMsg): _64.QuerySigningInfosRequest;
                toAminoMsg(message: _64.QuerySigningInfosRequest): _64.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _64.QuerySigningInfosRequestProtoMsg): _64.QuerySigningInfosRequest;
                toProto(message: _64.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _64.QuerySigningInfosRequest): _64.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _64.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QuerySigningInfosResponse;
                fromPartial(object: Partial<_64.QuerySigningInfosResponse>): _64.QuerySigningInfosResponse;
                fromAmino(object: _64.QuerySigningInfosResponseAmino): _64.QuerySigningInfosResponse;
                toAmino(message: _64.QuerySigningInfosResponse): _64.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _64.QuerySigningInfosResponseAminoMsg): _64.QuerySigningInfosResponse;
                toAminoMsg(message: _64.QuerySigningInfosResponse): _64.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _64.QuerySigningInfosResponseProtoMsg): _64.QuerySigningInfosResponse;
                toProto(message: _64.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _64.QuerySigningInfosResponse): _64.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _63.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.SigningInfo;
                fromPartial(object: Partial<_63.SigningInfo>): _63.SigningInfo;
                fromAmino(object: _63.SigningInfoAmino): _63.SigningInfo;
                toAmino(message: _63.SigningInfo): _63.SigningInfoAmino;
                fromAminoMsg(object: _63.SigningInfoAminoMsg): _63.SigningInfo;
                toAminoMsg(message: _63.SigningInfo): _63.SigningInfoAminoMsg;
                fromProtoMsg(message: _63.SigningInfoProtoMsg): _63.SigningInfo;
                toProto(message: _63.SigningInfo): Uint8Array;
                toProtoMsg(message: _63.SigningInfo): _63.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _63.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.ValidatorMissedBlocks;
                fromPartial(object: Partial<_63.ValidatorMissedBlocks>): _63.ValidatorMissedBlocks;
                fromAmino(object: _63.ValidatorMissedBlocksAmino): _63.ValidatorMissedBlocks;
                toAmino(message: _63.ValidatorMissedBlocks): _63.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _63.ValidatorMissedBlocksAminoMsg): _63.ValidatorMissedBlocks;
                toAminoMsg(message: _63.ValidatorMissedBlocks): _63.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _63.ValidatorMissedBlocksProtoMsg): _63.ValidatorMissedBlocks;
                toProto(message: _63.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _63.ValidatorMissedBlocks): _63.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _63.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MissedBlock;
                fromPartial(object: Partial<_63.MissedBlock>): _63.MissedBlock;
                fromAmino(object: _63.MissedBlockAmino): _63.MissedBlock;
                toAmino(message: _63.MissedBlock): _63.MissedBlockAmino;
                fromAminoMsg(object: _63.MissedBlockAminoMsg): _63.MissedBlock;
                toAminoMsg(message: _63.MissedBlock): _63.MissedBlockAminoMsg;
                fromProtoMsg(message: _63.MissedBlockProtoMsg): _63.MissedBlock;
                toProto(message: _63.MissedBlock): Uint8Array;
                toProtoMsg(message: _63.MissedBlock): _63.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _196.MsgClientImpl;
            QueryClientImpl: typeof _185.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _69.QueryValidatorsRequest): Promise<_69.QueryValidatorsResponse>;
                validator(request: _69.QueryValidatorRequest): Promise<_69.QueryValidatorResponse>;
                validatorDelegations(request: _69.QueryValidatorDelegationsRequest): Promise<_69.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _69.QueryValidatorUnbondingDelegationsRequest): Promise<_69.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _69.QueryDelegationRequest): Promise<_69.QueryDelegationResponse>;
                unbondingDelegation(request: _69.QueryUnbondingDelegationRequest): Promise<_69.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _69.QueryDelegatorDelegationsRequest): Promise<_69.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _69.QueryDelegatorUnbondingDelegationsRequest): Promise<_69.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _69.QueryRedelegationsRequest): Promise<_69.QueryRedelegationsResponse>;
                delegatorValidators(request: _69.QueryDelegatorValidatorsRequest): Promise<_69.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _69.QueryDelegatorValidatorRequest): Promise<_69.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _69.QueryHistoricalInfoRequest): Promise<_69.QueryHistoricalInfoResponse>;
                pool(request?: _69.QueryPoolRequest): Promise<_69.QueryPoolResponse>;
                params(request?: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _170.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _71.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _71.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _71.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _71.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _71.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _71.MsgCreateValidator): {
                        typeUrl: string;
                        value: _71.MsgCreateValidator;
                    };
                    editValidator(value: _71.MsgEditValidator): {
                        typeUrl: string;
                        value: _71.MsgEditValidator;
                    };
                    delegate(value: _71.MsgDelegate): {
                        typeUrl: string;
                        value: _71.MsgDelegate;
                    };
                    beginRedelegate(value: _71.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _71.MsgBeginRedelegate;
                    };
                    undelegate(value: _71.MsgUndelegate): {
                        typeUrl: string;
                        value: _71.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _71.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _71.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _71.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _71.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _71.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _71.MsgCreateValidator): {
                        typeUrl: string;
                        value: _71.MsgCreateValidator;
                    };
                    editValidator(value: _71.MsgEditValidator): {
                        typeUrl: string;
                        value: _71.MsgEditValidator;
                    };
                    delegate(value: _71.MsgDelegate): {
                        typeUrl: string;
                        value: _71.MsgDelegate;
                    };
                    beginRedelegate(value: _71.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _71.MsgBeginRedelegate;
                    };
                    undelegate(value: _71.MsgUndelegate): {
                        typeUrl: string;
                        value: _71.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _71.MsgCreateValidator) => _71.MsgCreateValidatorAmino;
                    fromAmino: (object: _71.MsgCreateValidatorAmino) => _71.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _71.MsgEditValidator) => _71.MsgEditValidatorAmino;
                    fromAmino: (object: _71.MsgEditValidatorAmino) => _71.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _71.MsgDelegate) => _71.MsgDelegateAmino;
                    fromAmino: (object: _71.MsgDelegateAmino) => _71.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _71.MsgBeginRedelegate) => _71.MsgBeginRedelegateAmino;
                    fromAmino: (object: _71.MsgBeginRedelegateAmino) => _71.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _71.MsgUndelegate) => _71.MsgUndelegateAmino;
                    fromAmino: (object: _71.MsgUndelegateAmino) => _71.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _71.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.MsgCreateValidator;
                fromPartial(object: Partial<_71.MsgCreateValidator>): _71.MsgCreateValidator;
                fromAmino(object: _71.MsgCreateValidatorAmino): _71.MsgCreateValidator;
                toAmino(message: _71.MsgCreateValidator): _71.MsgCreateValidatorAmino;
                fromAminoMsg(object: _71.MsgCreateValidatorAminoMsg): _71.MsgCreateValidator;
                toAminoMsg(message: _71.MsgCreateValidator): _71.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _71.MsgCreateValidatorProtoMsg): _71.MsgCreateValidator;
                toProto(message: _71.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _71.MsgCreateValidator): _71.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _71.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _71.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_71.MsgCreateValidatorResponse>): _71.MsgCreateValidatorResponse;
                fromAmino(_: _71.MsgCreateValidatorResponseAmino): _71.MsgCreateValidatorResponse;
                toAmino(_: _71.MsgCreateValidatorResponse): _71.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _71.MsgCreateValidatorResponseAminoMsg): _71.MsgCreateValidatorResponse;
                toAminoMsg(message: _71.MsgCreateValidatorResponse): _71.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _71.MsgCreateValidatorResponseProtoMsg): _71.MsgCreateValidatorResponse;
                toProto(message: _71.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _71.MsgCreateValidatorResponse): _71.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _71.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.MsgEditValidator;
                fromPartial(object: Partial<_71.MsgEditValidator>): _71.MsgEditValidator;
                fromAmino(object: _71.MsgEditValidatorAmino): _71.MsgEditValidator;
                toAmino(message: _71.MsgEditValidator): _71.MsgEditValidatorAmino;
                fromAminoMsg(object: _71.MsgEditValidatorAminoMsg): _71.MsgEditValidator;
                toAminoMsg(message: _71.MsgEditValidator): _71.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _71.MsgEditValidatorProtoMsg): _71.MsgEditValidator;
                toProto(message: _71.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _71.MsgEditValidator): _71.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _71.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _71.MsgEditValidatorResponse;
                fromPartial(_: Partial<_71.MsgEditValidatorResponse>): _71.MsgEditValidatorResponse;
                fromAmino(_: _71.MsgEditValidatorResponseAmino): _71.MsgEditValidatorResponse;
                toAmino(_: _71.MsgEditValidatorResponse): _71.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _71.MsgEditValidatorResponseAminoMsg): _71.MsgEditValidatorResponse;
                toAminoMsg(message: _71.MsgEditValidatorResponse): _71.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _71.MsgEditValidatorResponseProtoMsg): _71.MsgEditValidatorResponse;
                toProto(message: _71.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _71.MsgEditValidatorResponse): _71.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _71.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.MsgDelegate;
                fromPartial(object: Partial<_71.MsgDelegate>): _71.MsgDelegate;
                fromAmino(object: _71.MsgDelegateAmino): _71.MsgDelegate;
                toAmino(message: _71.MsgDelegate): _71.MsgDelegateAmino;
                fromAminoMsg(object: _71.MsgDelegateAminoMsg): _71.MsgDelegate;
                toAminoMsg(message: _71.MsgDelegate): _71.MsgDelegateAminoMsg;
                fromProtoMsg(message: _71.MsgDelegateProtoMsg): _71.MsgDelegate;
                toProto(message: _71.MsgDelegate): Uint8Array;
                toProtoMsg(message: _71.MsgDelegate): _71.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _71.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _71.MsgDelegateResponse;
                fromPartial(_: Partial<_71.MsgDelegateResponse>): _71.MsgDelegateResponse;
                fromAmino(_: _71.MsgDelegateResponseAmino): _71.MsgDelegateResponse;
                toAmino(_: _71.MsgDelegateResponse): _71.MsgDelegateResponseAmino;
                fromAminoMsg(object: _71.MsgDelegateResponseAminoMsg): _71.MsgDelegateResponse;
                toAminoMsg(message: _71.MsgDelegateResponse): _71.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _71.MsgDelegateResponseProtoMsg): _71.MsgDelegateResponse;
                toProto(message: _71.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _71.MsgDelegateResponse): _71.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _71.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.MsgBeginRedelegate;
                fromPartial(object: Partial<_71.MsgBeginRedelegate>): _71.MsgBeginRedelegate;
                fromAmino(object: _71.MsgBeginRedelegateAmino): _71.MsgBeginRedelegate;
                toAmino(message: _71.MsgBeginRedelegate): _71.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _71.MsgBeginRedelegateAminoMsg): _71.MsgBeginRedelegate;
                toAminoMsg(message: _71.MsgBeginRedelegate): _71.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _71.MsgBeginRedelegateProtoMsg): _71.MsgBeginRedelegate;
                toProto(message: _71.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _71.MsgBeginRedelegate): _71.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _71.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_71.MsgBeginRedelegateResponse>): _71.MsgBeginRedelegateResponse;
                fromAmino(object: _71.MsgBeginRedelegateResponseAmino): _71.MsgBeginRedelegateResponse;
                toAmino(message: _71.MsgBeginRedelegateResponse): _71.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _71.MsgBeginRedelegateResponseAminoMsg): _71.MsgBeginRedelegateResponse;
                toAminoMsg(message: _71.MsgBeginRedelegateResponse): _71.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _71.MsgBeginRedelegateResponseProtoMsg): _71.MsgBeginRedelegateResponse;
                toProto(message: _71.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _71.MsgBeginRedelegateResponse): _71.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _71.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.MsgUndelegate;
                fromPartial(object: Partial<_71.MsgUndelegate>): _71.MsgUndelegate;
                fromAmino(object: _71.MsgUndelegateAmino): _71.MsgUndelegate;
                toAmino(message: _71.MsgUndelegate): _71.MsgUndelegateAmino;
                fromAminoMsg(object: _71.MsgUndelegateAminoMsg): _71.MsgUndelegate;
                toAminoMsg(message: _71.MsgUndelegate): _71.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _71.MsgUndelegateProtoMsg): _71.MsgUndelegate;
                toProto(message: _71.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _71.MsgUndelegate): _71.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _71.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.MsgUndelegateResponse;
                fromPartial(object: Partial<_71.MsgUndelegateResponse>): _71.MsgUndelegateResponse;
                fromAmino(object: _71.MsgUndelegateResponseAmino): _71.MsgUndelegateResponse;
                toAmino(message: _71.MsgUndelegateResponse): _71.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _71.MsgUndelegateResponseAminoMsg): _71.MsgUndelegateResponse;
                toAminoMsg(message: _71.MsgUndelegateResponse): _71.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _71.MsgUndelegateResponseProtoMsg): _71.MsgUndelegateResponse;
                toProto(message: _71.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _71.MsgUndelegateResponse): _71.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _70.BondStatus;
            bondStatusToJSON(object: _70.BondStatus): string;
            BondStatus: typeof _70.BondStatus;
            BondStatusSDKType: typeof _70.BondStatus;
            BondStatusAmino: typeof _70.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _70.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.HistoricalInfo;
                fromPartial(object: Partial<_70.HistoricalInfo>): _70.HistoricalInfo;
                fromAmino(object: _70.HistoricalInfoAmino): _70.HistoricalInfo;
                toAmino(message: _70.HistoricalInfo): _70.HistoricalInfoAmino;
                fromAminoMsg(object: _70.HistoricalInfoAminoMsg): _70.HistoricalInfo;
                toAminoMsg(message: _70.HistoricalInfo): _70.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _70.HistoricalInfoProtoMsg): _70.HistoricalInfo;
                toProto(message: _70.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _70.HistoricalInfo): _70.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _70.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.CommissionRates;
                fromPartial(object: Partial<_70.CommissionRates>): _70.CommissionRates;
                fromAmino(object: _70.CommissionRatesAmino): _70.CommissionRates;
                toAmino(message: _70.CommissionRates): _70.CommissionRatesAmino;
                fromAminoMsg(object: _70.CommissionRatesAminoMsg): _70.CommissionRates;
                toAminoMsg(message: _70.CommissionRates): _70.CommissionRatesAminoMsg;
                fromProtoMsg(message: _70.CommissionRatesProtoMsg): _70.CommissionRates;
                toProto(message: _70.CommissionRates): Uint8Array;
                toProtoMsg(message: _70.CommissionRates): _70.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _70.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Commission;
                fromPartial(object: Partial<_70.Commission>): _70.Commission;
                fromAmino(object: _70.CommissionAmino): _70.Commission;
                toAmino(message: _70.Commission): _70.CommissionAmino;
                fromAminoMsg(object: _70.CommissionAminoMsg): _70.Commission;
                toAminoMsg(message: _70.Commission): _70.CommissionAminoMsg;
                fromProtoMsg(message: _70.CommissionProtoMsg): _70.Commission;
                toProto(message: _70.Commission): Uint8Array;
                toProtoMsg(message: _70.Commission): _70.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _70.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Description;
                fromPartial(object: Partial<_70.Description>): _70.Description;
                fromAmino(object: _70.DescriptionAmino): _70.Description;
                toAmino(message: _70.Description): _70.DescriptionAmino;
                fromAminoMsg(object: _70.DescriptionAminoMsg): _70.Description;
                toAminoMsg(message: _70.Description): _70.DescriptionAminoMsg;
                fromProtoMsg(message: _70.DescriptionProtoMsg): _70.Description;
                toProto(message: _70.Description): Uint8Array;
                toProtoMsg(message: _70.Description): _70.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _70.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Validator;
                fromPartial(object: Partial<_70.Validator>): _70.Validator;
                fromAmino(object: _70.ValidatorAmino): _70.Validator;
                toAmino(message: _70.Validator): _70.ValidatorAmino;
                fromAminoMsg(object: _70.ValidatorAminoMsg): _70.Validator;
                toAminoMsg(message: _70.Validator): _70.ValidatorAminoMsg;
                fromProtoMsg(message: _70.ValidatorProtoMsg): _70.Validator;
                toProto(message: _70.Validator): Uint8Array;
                toProtoMsg(message: _70.Validator): _70.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _70.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.ValAddresses;
                fromPartial(object: Partial<_70.ValAddresses>): _70.ValAddresses;
                fromAmino(object: _70.ValAddressesAmino): _70.ValAddresses;
                toAmino(message: _70.ValAddresses): _70.ValAddressesAmino;
                fromAminoMsg(object: _70.ValAddressesAminoMsg): _70.ValAddresses;
                toAminoMsg(message: _70.ValAddresses): _70.ValAddressesAminoMsg;
                fromProtoMsg(message: _70.ValAddressesProtoMsg): _70.ValAddresses;
                toProto(message: _70.ValAddresses): Uint8Array;
                toProtoMsg(message: _70.ValAddresses): _70.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _70.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.DVPair;
                fromPartial(object: Partial<_70.DVPair>): _70.DVPair;
                fromAmino(object: _70.DVPairAmino): _70.DVPair;
                toAmino(message: _70.DVPair): _70.DVPairAmino;
                fromAminoMsg(object: _70.DVPairAminoMsg): _70.DVPair;
                toAminoMsg(message: _70.DVPair): _70.DVPairAminoMsg;
                fromProtoMsg(message: _70.DVPairProtoMsg): _70.DVPair;
                toProto(message: _70.DVPair): Uint8Array;
                toProtoMsg(message: _70.DVPair): _70.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _70.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.DVPairs;
                fromPartial(object: Partial<_70.DVPairs>): _70.DVPairs;
                fromAmino(object: _70.DVPairsAmino): _70.DVPairs;
                toAmino(message: _70.DVPairs): _70.DVPairsAmino;
                fromAminoMsg(object: _70.DVPairsAminoMsg): _70.DVPairs;
                toAminoMsg(message: _70.DVPairs): _70.DVPairsAminoMsg;
                fromProtoMsg(message: _70.DVPairsProtoMsg): _70.DVPairs;
                toProto(message: _70.DVPairs): Uint8Array;
                toProtoMsg(message: _70.DVPairs): _70.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _70.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.DVVTriplet;
                fromPartial(object: Partial<_70.DVVTriplet>): _70.DVVTriplet;
                fromAmino(object: _70.DVVTripletAmino): _70.DVVTriplet;
                toAmino(message: _70.DVVTriplet): _70.DVVTripletAmino;
                fromAminoMsg(object: _70.DVVTripletAminoMsg): _70.DVVTriplet;
                toAminoMsg(message: _70.DVVTriplet): _70.DVVTripletAminoMsg;
                fromProtoMsg(message: _70.DVVTripletProtoMsg): _70.DVVTriplet;
                toProto(message: _70.DVVTriplet): Uint8Array;
                toProtoMsg(message: _70.DVVTriplet): _70.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _70.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.DVVTriplets;
                fromPartial(object: Partial<_70.DVVTriplets>): _70.DVVTriplets;
                fromAmino(object: _70.DVVTripletsAmino): _70.DVVTriplets;
                toAmino(message: _70.DVVTriplets): _70.DVVTripletsAmino;
                fromAminoMsg(object: _70.DVVTripletsAminoMsg): _70.DVVTriplets;
                toAminoMsg(message: _70.DVVTriplets): _70.DVVTripletsAminoMsg;
                fromProtoMsg(message: _70.DVVTripletsProtoMsg): _70.DVVTriplets;
                toProto(message: _70.DVVTriplets): Uint8Array;
                toProtoMsg(message: _70.DVVTriplets): _70.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _70.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Delegation;
                fromPartial(object: Partial<_70.Delegation>): _70.Delegation;
                fromAmino(object: _70.DelegationAmino): _70.Delegation;
                toAmino(message: _70.Delegation): _70.DelegationAmino;
                fromAminoMsg(object: _70.DelegationAminoMsg): _70.Delegation;
                toAminoMsg(message: _70.Delegation): _70.DelegationAminoMsg;
                fromProtoMsg(message: _70.DelegationProtoMsg): _70.Delegation;
                toProto(message: _70.Delegation): Uint8Array;
                toProtoMsg(message: _70.Delegation): _70.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _70.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.UnbondingDelegation;
                fromPartial(object: Partial<_70.UnbondingDelegation>): _70.UnbondingDelegation;
                fromAmino(object: _70.UnbondingDelegationAmino): _70.UnbondingDelegation;
                toAmino(message: _70.UnbondingDelegation): _70.UnbondingDelegationAmino;
                fromAminoMsg(object: _70.UnbondingDelegationAminoMsg): _70.UnbondingDelegation;
                toAminoMsg(message: _70.UnbondingDelegation): _70.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _70.UnbondingDelegationProtoMsg): _70.UnbondingDelegation;
                toProto(message: _70.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _70.UnbondingDelegation): _70.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _70.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.UnbondingDelegationEntry;
                fromPartial(object: Partial<_70.UnbondingDelegationEntry>): _70.UnbondingDelegationEntry;
                fromAmino(object: _70.UnbondingDelegationEntryAmino): _70.UnbondingDelegationEntry;
                toAmino(message: _70.UnbondingDelegationEntry): _70.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _70.UnbondingDelegationEntryAminoMsg): _70.UnbondingDelegationEntry;
                toAminoMsg(message: _70.UnbondingDelegationEntry): _70.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _70.UnbondingDelegationEntryProtoMsg): _70.UnbondingDelegationEntry;
                toProto(message: _70.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _70.UnbondingDelegationEntry): _70.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _70.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.RedelegationEntry;
                fromPartial(object: Partial<_70.RedelegationEntry>): _70.RedelegationEntry;
                fromAmino(object: _70.RedelegationEntryAmino): _70.RedelegationEntry;
                toAmino(message: _70.RedelegationEntry): _70.RedelegationEntryAmino;
                fromAminoMsg(object: _70.RedelegationEntryAminoMsg): _70.RedelegationEntry;
                toAminoMsg(message: _70.RedelegationEntry): _70.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _70.RedelegationEntryProtoMsg): _70.RedelegationEntry;
                toProto(message: _70.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _70.RedelegationEntry): _70.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _70.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Redelegation;
                fromPartial(object: Partial<_70.Redelegation>): _70.Redelegation;
                fromAmino(object: _70.RedelegationAmino): _70.Redelegation;
                toAmino(message: _70.Redelegation): _70.RedelegationAmino;
                fromAminoMsg(object: _70.RedelegationAminoMsg): _70.Redelegation;
                toAminoMsg(message: _70.Redelegation): _70.RedelegationAminoMsg;
                fromProtoMsg(message: _70.RedelegationProtoMsg): _70.Redelegation;
                toProto(message: _70.Redelegation): Uint8Array;
                toProtoMsg(message: _70.Redelegation): _70.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _70.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Params;
                fromPartial(object: Partial<_70.Params>): _70.Params;
                fromAmino(object: _70.ParamsAmino): _70.Params;
                toAmino(message: _70.Params): _70.ParamsAmino;
                fromAminoMsg(object: _70.ParamsAminoMsg): _70.Params;
                toAminoMsg(message: _70.Params): _70.ParamsAminoMsg;
                fromProtoMsg(message: _70.ParamsProtoMsg): _70.Params;
                toProto(message: _70.Params): Uint8Array;
                toProtoMsg(message: _70.Params): _70.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _70.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.DelegationResponse;
                fromPartial(object: Partial<_70.DelegationResponse>): _70.DelegationResponse;
                fromAmino(object: _70.DelegationResponseAmino): _70.DelegationResponse;
                toAmino(message: _70.DelegationResponse): _70.DelegationResponseAmino;
                fromAminoMsg(object: _70.DelegationResponseAminoMsg): _70.DelegationResponse;
                toAminoMsg(message: _70.DelegationResponse): _70.DelegationResponseAminoMsg;
                fromProtoMsg(message: _70.DelegationResponseProtoMsg): _70.DelegationResponse;
                toProto(message: _70.DelegationResponse): Uint8Array;
                toProtoMsg(message: _70.DelegationResponse): _70.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _70.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.RedelegationEntryResponse;
                fromPartial(object: Partial<_70.RedelegationEntryResponse>): _70.RedelegationEntryResponse;
                fromAmino(object: _70.RedelegationEntryResponseAmino): _70.RedelegationEntryResponse;
                toAmino(message: _70.RedelegationEntryResponse): _70.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _70.RedelegationEntryResponseAminoMsg): _70.RedelegationEntryResponse;
                toAminoMsg(message: _70.RedelegationEntryResponse): _70.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _70.RedelegationEntryResponseProtoMsg): _70.RedelegationEntryResponse;
                toProto(message: _70.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _70.RedelegationEntryResponse): _70.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _70.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.RedelegationResponse;
                fromPartial(object: Partial<_70.RedelegationResponse>): _70.RedelegationResponse;
                fromAmino(object: _70.RedelegationResponseAmino): _70.RedelegationResponse;
                toAmino(message: _70.RedelegationResponse): _70.RedelegationResponseAmino;
                fromAminoMsg(object: _70.RedelegationResponseAminoMsg): _70.RedelegationResponse;
                toAminoMsg(message: _70.RedelegationResponse): _70.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _70.RedelegationResponseProtoMsg): _70.RedelegationResponse;
                toProto(message: _70.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _70.RedelegationResponse): _70.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _70.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Pool;
                fromPartial(object: Partial<_70.Pool>): _70.Pool;
                fromAmino(object: _70.PoolAmino): _70.Pool;
                toAmino(message: _70.Pool): _70.PoolAmino;
                fromAminoMsg(object: _70.PoolAminoMsg): _70.Pool;
                toAminoMsg(message: _70.Pool): _70.PoolAminoMsg;
                fromProtoMsg(message: _70.PoolProtoMsg): _70.Pool;
                toProto(message: _70.Pool): Uint8Array;
                toProtoMsg(message: _70.Pool): _70.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _69.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryValidatorsRequest;
                fromPartial(object: Partial<_69.QueryValidatorsRequest>): _69.QueryValidatorsRequest;
                fromAmino(object: _69.QueryValidatorsRequestAmino): _69.QueryValidatorsRequest;
                toAmino(message: _69.QueryValidatorsRequest): _69.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _69.QueryValidatorsRequestAminoMsg): _69.QueryValidatorsRequest;
                toAminoMsg(message: _69.QueryValidatorsRequest): _69.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _69.QueryValidatorsRequestProtoMsg): _69.QueryValidatorsRequest;
                toProto(message: _69.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _69.QueryValidatorsRequest): _69.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _69.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryValidatorsResponse;
                fromPartial(object: Partial<_69.QueryValidatorsResponse>): _69.QueryValidatorsResponse;
                fromAmino(object: _69.QueryValidatorsResponseAmino): _69.QueryValidatorsResponse;
                toAmino(message: _69.QueryValidatorsResponse): _69.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _69.QueryValidatorsResponseAminoMsg): _69.QueryValidatorsResponse;
                toAminoMsg(message: _69.QueryValidatorsResponse): _69.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _69.QueryValidatorsResponseProtoMsg): _69.QueryValidatorsResponse;
                toProto(message: _69.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _69.QueryValidatorsResponse): _69.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _69.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryValidatorRequest;
                fromPartial(object: Partial<_69.QueryValidatorRequest>): _69.QueryValidatorRequest;
                fromAmino(object: _69.QueryValidatorRequestAmino): _69.QueryValidatorRequest;
                toAmino(message: _69.QueryValidatorRequest): _69.QueryValidatorRequestAmino;
                fromAminoMsg(object: _69.QueryValidatorRequestAminoMsg): _69.QueryValidatorRequest;
                toAminoMsg(message: _69.QueryValidatorRequest): _69.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _69.QueryValidatorRequestProtoMsg): _69.QueryValidatorRequest;
                toProto(message: _69.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _69.QueryValidatorRequest): _69.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _69.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryValidatorResponse;
                fromPartial(object: Partial<_69.QueryValidatorResponse>): _69.QueryValidatorResponse;
                fromAmino(object: _69.QueryValidatorResponseAmino): _69.QueryValidatorResponse;
                toAmino(message: _69.QueryValidatorResponse): _69.QueryValidatorResponseAmino;
                fromAminoMsg(object: _69.QueryValidatorResponseAminoMsg): _69.QueryValidatorResponse;
                toAminoMsg(message: _69.QueryValidatorResponse): _69.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _69.QueryValidatorResponseProtoMsg): _69.QueryValidatorResponse;
                toProto(message: _69.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _69.QueryValidatorResponse): _69.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _69.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_69.QueryValidatorDelegationsRequest>): _69.QueryValidatorDelegationsRequest;
                fromAmino(object: _69.QueryValidatorDelegationsRequestAmino): _69.QueryValidatorDelegationsRequest;
                toAmino(message: _69.QueryValidatorDelegationsRequest): _69.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _69.QueryValidatorDelegationsRequestAminoMsg): _69.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _69.QueryValidatorDelegationsRequest): _69.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _69.QueryValidatorDelegationsRequestProtoMsg): _69.QueryValidatorDelegationsRequest;
                toProto(message: _69.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _69.QueryValidatorDelegationsRequest): _69.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _69.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_69.QueryValidatorDelegationsResponse>): _69.QueryValidatorDelegationsResponse;
                fromAmino(object: _69.QueryValidatorDelegationsResponseAmino): _69.QueryValidatorDelegationsResponse;
                toAmino(message: _69.QueryValidatorDelegationsResponse): _69.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _69.QueryValidatorDelegationsResponseAminoMsg): _69.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _69.QueryValidatorDelegationsResponse): _69.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _69.QueryValidatorDelegationsResponseProtoMsg): _69.QueryValidatorDelegationsResponse;
                toProto(message: _69.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _69.QueryValidatorDelegationsResponse): _69.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _69.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_69.QueryValidatorUnbondingDelegationsRequest>): _69.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _69.QueryValidatorUnbondingDelegationsRequestAmino): _69.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _69.QueryValidatorUnbondingDelegationsRequest): _69.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _69.QueryValidatorUnbondingDelegationsRequestAminoMsg): _69.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _69.QueryValidatorUnbondingDelegationsRequest): _69.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _69.QueryValidatorUnbondingDelegationsRequestProtoMsg): _69.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _69.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _69.QueryValidatorUnbondingDelegationsRequest): _69.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _69.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_69.QueryValidatorUnbondingDelegationsResponse>): _69.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _69.QueryValidatorUnbondingDelegationsResponseAmino): _69.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _69.QueryValidatorUnbondingDelegationsResponse): _69.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _69.QueryValidatorUnbondingDelegationsResponseAminoMsg): _69.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _69.QueryValidatorUnbondingDelegationsResponse): _69.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _69.QueryValidatorUnbondingDelegationsResponseProtoMsg): _69.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _69.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _69.QueryValidatorUnbondingDelegationsResponse): _69.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _69.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryDelegationRequest;
                fromPartial(object: Partial<_69.QueryDelegationRequest>): _69.QueryDelegationRequest;
                fromAmino(object: _69.QueryDelegationRequestAmino): _69.QueryDelegationRequest;
                toAmino(message: _69.QueryDelegationRequest): _69.QueryDelegationRequestAmino;
                fromAminoMsg(object: _69.QueryDelegationRequestAminoMsg): _69.QueryDelegationRequest;
                toAminoMsg(message: _69.QueryDelegationRequest): _69.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _69.QueryDelegationRequestProtoMsg): _69.QueryDelegationRequest;
                toProto(message: _69.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _69.QueryDelegationRequest): _69.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _69.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryDelegationResponse;
                fromPartial(object: Partial<_69.QueryDelegationResponse>): _69.QueryDelegationResponse;
                fromAmino(object: _69.QueryDelegationResponseAmino): _69.QueryDelegationResponse;
                toAmino(message: _69.QueryDelegationResponse): _69.QueryDelegationResponseAmino;
                fromAminoMsg(object: _69.QueryDelegationResponseAminoMsg): _69.QueryDelegationResponse;
                toAminoMsg(message: _69.QueryDelegationResponse): _69.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _69.QueryDelegationResponseProtoMsg): _69.QueryDelegationResponse;
                toProto(message: _69.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _69.QueryDelegationResponse): _69.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _69.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_69.QueryUnbondingDelegationRequest>): _69.QueryUnbondingDelegationRequest;
                fromAmino(object: _69.QueryUnbondingDelegationRequestAmino): _69.QueryUnbondingDelegationRequest;
                toAmino(message: _69.QueryUnbondingDelegationRequest): _69.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _69.QueryUnbondingDelegationRequestAminoMsg): _69.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _69.QueryUnbondingDelegationRequest): _69.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _69.QueryUnbondingDelegationRequestProtoMsg): _69.QueryUnbondingDelegationRequest;
                toProto(message: _69.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _69.QueryUnbondingDelegationRequest): _69.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _69.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_69.QueryUnbondingDelegationResponse>): _69.QueryUnbondingDelegationResponse;
                fromAmino(object: _69.QueryUnbondingDelegationResponseAmino): _69.QueryUnbondingDelegationResponse;
                toAmino(message: _69.QueryUnbondingDelegationResponse): _69.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _69.QueryUnbondingDelegationResponseAminoMsg): _69.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _69.QueryUnbondingDelegationResponse): _69.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _69.QueryUnbondingDelegationResponseProtoMsg): _69.QueryUnbondingDelegationResponse;
                toProto(message: _69.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _69.QueryUnbondingDelegationResponse): _69.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _69.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_69.QueryDelegatorDelegationsRequest>): _69.QueryDelegatorDelegationsRequest;
                fromAmino(object: _69.QueryDelegatorDelegationsRequestAmino): _69.QueryDelegatorDelegationsRequest;
                toAmino(message: _69.QueryDelegatorDelegationsRequest): _69.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _69.QueryDelegatorDelegationsRequestAminoMsg): _69.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _69.QueryDelegatorDelegationsRequest): _69.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _69.QueryDelegatorDelegationsRequestProtoMsg): _69.QueryDelegatorDelegationsRequest;
                toProto(message: _69.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _69.QueryDelegatorDelegationsRequest): _69.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _69.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_69.QueryDelegatorDelegationsResponse>): _69.QueryDelegatorDelegationsResponse;
                fromAmino(object: _69.QueryDelegatorDelegationsResponseAmino): _69.QueryDelegatorDelegationsResponse;
                toAmino(message: _69.QueryDelegatorDelegationsResponse): _69.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _69.QueryDelegatorDelegationsResponseAminoMsg): _69.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _69.QueryDelegatorDelegationsResponse): _69.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _69.QueryDelegatorDelegationsResponseProtoMsg): _69.QueryDelegatorDelegationsResponse;
                toProto(message: _69.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _69.QueryDelegatorDelegationsResponse): _69.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _69.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_69.QueryDelegatorUnbondingDelegationsRequest>): _69.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _69.QueryDelegatorUnbondingDelegationsRequestAmino): _69.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _69.QueryDelegatorUnbondingDelegationsRequest): _69.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _69.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _69.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _69.QueryDelegatorUnbondingDelegationsRequest): _69.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _69.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _69.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _69.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _69.QueryDelegatorUnbondingDelegationsRequest): _69.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _69.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_69.QueryDelegatorUnbondingDelegationsResponse>): _69.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _69.QueryDelegatorUnbondingDelegationsResponseAmino): _69.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _69.QueryDelegatorUnbondingDelegationsResponse): _69.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _69.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _69.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _69.QueryDelegatorUnbondingDelegationsResponse): _69.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _69.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _69.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _69.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _69.QueryDelegatorUnbondingDelegationsResponse): _69.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _69.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryRedelegationsRequest;
                fromPartial(object: Partial<_69.QueryRedelegationsRequest>): _69.QueryRedelegationsRequest;
                fromAmino(object: _69.QueryRedelegationsRequestAmino): _69.QueryRedelegationsRequest;
                toAmino(message: _69.QueryRedelegationsRequest): _69.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _69.QueryRedelegationsRequestAminoMsg): _69.QueryRedelegationsRequest;
                toAminoMsg(message: _69.QueryRedelegationsRequest): _69.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _69.QueryRedelegationsRequestProtoMsg): _69.QueryRedelegationsRequest;
                toProto(message: _69.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _69.QueryRedelegationsRequest): _69.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _69.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryRedelegationsResponse;
                fromPartial(object: Partial<_69.QueryRedelegationsResponse>): _69.QueryRedelegationsResponse;
                fromAmino(object: _69.QueryRedelegationsResponseAmino): _69.QueryRedelegationsResponse;
                toAmino(message: _69.QueryRedelegationsResponse): _69.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _69.QueryRedelegationsResponseAminoMsg): _69.QueryRedelegationsResponse;
                toAminoMsg(message: _69.QueryRedelegationsResponse): _69.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _69.QueryRedelegationsResponseProtoMsg): _69.QueryRedelegationsResponse;
                toProto(message: _69.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _69.QueryRedelegationsResponse): _69.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _69.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_69.QueryDelegatorValidatorsRequest>): _69.QueryDelegatorValidatorsRequest;
                fromAmino(object: _69.QueryDelegatorValidatorsRequestAmino): _69.QueryDelegatorValidatorsRequest;
                toAmino(message: _69.QueryDelegatorValidatorsRequest): _69.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _69.QueryDelegatorValidatorsRequestAminoMsg): _69.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _69.QueryDelegatorValidatorsRequest): _69.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _69.QueryDelegatorValidatorsRequestProtoMsg): _69.QueryDelegatorValidatorsRequest;
                toProto(message: _69.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _69.QueryDelegatorValidatorsRequest): _69.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _69.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_69.QueryDelegatorValidatorsResponse>): _69.QueryDelegatorValidatorsResponse;
                fromAmino(object: _69.QueryDelegatorValidatorsResponseAmino): _69.QueryDelegatorValidatorsResponse;
                toAmino(message: _69.QueryDelegatorValidatorsResponse): _69.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _69.QueryDelegatorValidatorsResponseAminoMsg): _69.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _69.QueryDelegatorValidatorsResponse): _69.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _69.QueryDelegatorValidatorsResponseProtoMsg): _69.QueryDelegatorValidatorsResponse;
                toProto(message: _69.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _69.QueryDelegatorValidatorsResponse): _69.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _69.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_69.QueryDelegatorValidatorRequest>): _69.QueryDelegatorValidatorRequest;
                fromAmino(object: _69.QueryDelegatorValidatorRequestAmino): _69.QueryDelegatorValidatorRequest;
                toAmino(message: _69.QueryDelegatorValidatorRequest): _69.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _69.QueryDelegatorValidatorRequestAminoMsg): _69.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _69.QueryDelegatorValidatorRequest): _69.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _69.QueryDelegatorValidatorRequestProtoMsg): _69.QueryDelegatorValidatorRequest;
                toProto(message: _69.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _69.QueryDelegatorValidatorRequest): _69.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _69.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_69.QueryDelegatorValidatorResponse>): _69.QueryDelegatorValidatorResponse;
                fromAmino(object: _69.QueryDelegatorValidatorResponseAmino): _69.QueryDelegatorValidatorResponse;
                toAmino(message: _69.QueryDelegatorValidatorResponse): _69.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _69.QueryDelegatorValidatorResponseAminoMsg): _69.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _69.QueryDelegatorValidatorResponse): _69.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _69.QueryDelegatorValidatorResponseProtoMsg): _69.QueryDelegatorValidatorResponse;
                toProto(message: _69.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _69.QueryDelegatorValidatorResponse): _69.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _69.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_69.QueryHistoricalInfoRequest>): _69.QueryHistoricalInfoRequest;
                fromAmino(object: _69.QueryHistoricalInfoRequestAmino): _69.QueryHistoricalInfoRequest;
                toAmino(message: _69.QueryHistoricalInfoRequest): _69.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _69.QueryHistoricalInfoRequestAminoMsg): _69.QueryHistoricalInfoRequest;
                toAminoMsg(message: _69.QueryHistoricalInfoRequest): _69.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _69.QueryHistoricalInfoRequestProtoMsg): _69.QueryHistoricalInfoRequest;
                toProto(message: _69.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _69.QueryHistoricalInfoRequest): _69.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _69.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_69.QueryHistoricalInfoResponse>): _69.QueryHistoricalInfoResponse;
                fromAmino(object: _69.QueryHistoricalInfoResponseAmino): _69.QueryHistoricalInfoResponse;
                toAmino(message: _69.QueryHistoricalInfoResponse): _69.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _69.QueryHistoricalInfoResponseAminoMsg): _69.QueryHistoricalInfoResponse;
                toAminoMsg(message: _69.QueryHistoricalInfoResponse): _69.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _69.QueryHistoricalInfoResponseProtoMsg): _69.QueryHistoricalInfoResponse;
                toProto(message: _69.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _69.QueryHistoricalInfoResponse): _69.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _69.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _69.QueryPoolRequest;
                fromPartial(_: Partial<_69.QueryPoolRequest>): _69.QueryPoolRequest;
                fromAmino(_: _69.QueryPoolRequestAmino): _69.QueryPoolRequest;
                toAmino(_: _69.QueryPoolRequest): _69.QueryPoolRequestAmino;
                fromAminoMsg(object: _69.QueryPoolRequestAminoMsg): _69.QueryPoolRequest;
                toAminoMsg(message: _69.QueryPoolRequest): _69.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _69.QueryPoolRequestProtoMsg): _69.QueryPoolRequest;
                toProto(message: _69.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _69.QueryPoolRequest): _69.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _69.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryPoolResponse;
                fromPartial(object: Partial<_69.QueryPoolResponse>): _69.QueryPoolResponse;
                fromAmino(object: _69.QueryPoolResponseAmino): _69.QueryPoolResponse;
                toAmino(message: _69.QueryPoolResponse): _69.QueryPoolResponseAmino;
                fromAminoMsg(object: _69.QueryPoolResponseAminoMsg): _69.QueryPoolResponse;
                toAminoMsg(message: _69.QueryPoolResponse): _69.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _69.QueryPoolResponseProtoMsg): _69.QueryPoolResponse;
                toProto(message: _69.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _69.QueryPoolResponse): _69.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _69.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _69.QueryParamsRequest;
                fromPartial(_: Partial<_69.QueryParamsRequest>): _69.QueryParamsRequest;
                fromAmino(_: _69.QueryParamsRequestAmino): _69.QueryParamsRequest;
                toAmino(_: _69.QueryParamsRequest): _69.QueryParamsRequestAmino;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _68.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.LastValidatorPower;
                fromPartial(object: Partial<_68.LastValidatorPower>): _68.LastValidatorPower;
                fromAmino(object: _68.LastValidatorPowerAmino): _68.LastValidatorPower;
                toAmino(message: _68.LastValidatorPower): _68.LastValidatorPowerAmino;
                fromAminoMsg(object: _68.LastValidatorPowerAminoMsg): _68.LastValidatorPower;
                toAminoMsg(message: _68.LastValidatorPower): _68.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _68.LastValidatorPowerProtoMsg): _68.LastValidatorPower;
                toProto(message: _68.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _68.LastValidatorPower): _68.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _67.AuthorizationType;
            authorizationTypeToJSON(object: _67.AuthorizationType): string;
            AuthorizationType: typeof _67.AuthorizationType;
            AuthorizationTypeSDKType: typeof _67.AuthorizationType;
            AuthorizationTypeAmino: typeof _67.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _67.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.StakeAuthorization;
                fromPartial(object: Partial<_67.StakeAuthorization>): _67.StakeAuthorization;
                fromAmino(object: _67.StakeAuthorizationAmino): _67.StakeAuthorization;
                toAmino(message: _67.StakeAuthorization): _67.StakeAuthorizationAmino;
                fromAminoMsg(object: _67.StakeAuthorizationAminoMsg): _67.StakeAuthorization;
                toAminoMsg(message: _67.StakeAuthorization): _67.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _67.StakeAuthorizationProtoMsg): _67.StakeAuthorization;
                toProto(message: _67.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _67.StakeAuthorization): _67.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _67.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.StakeAuthorization_Validators;
                fromPartial(object: Partial<_67.StakeAuthorization_Validators>): _67.StakeAuthorization_Validators;
                fromAmino(object: _67.StakeAuthorization_ValidatorsAmino): _67.StakeAuthorization_Validators;
                toAmino(message: _67.StakeAuthorization_Validators): _67.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _67.StakeAuthorization_ValidatorsAminoMsg): _67.StakeAuthorization_Validators;
                toAminoMsg(message: _67.StakeAuthorization_Validators): _67.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _67.StakeAuthorization_ValidatorsProtoMsg): _67.StakeAuthorization_Validators;
                toProto(message: _67.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _67.StakeAuthorization_Validators): _67.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _72.SignMode;
                signModeToJSON(object: _72.SignMode): string;
                SignMode: typeof _72.SignMode;
                SignModeSDKType: typeof _72.SignMode;
                SignModeAmino: typeof _72.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _72.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.SignatureDescriptors;
                    fromPartial(object: Partial<_72.SignatureDescriptors>): _72.SignatureDescriptors;
                    fromAmino(object: _72.SignatureDescriptorsAmino): _72.SignatureDescriptors;
                    toAmino(message: _72.SignatureDescriptors): _72.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _72.SignatureDescriptorsAminoMsg): _72.SignatureDescriptors;
                    toAminoMsg(message: _72.SignatureDescriptors): _72.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _72.SignatureDescriptorsProtoMsg): _72.SignatureDescriptors;
                    toProto(message: _72.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _72.SignatureDescriptors): _72.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _72.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.SignatureDescriptor;
                    fromPartial(object: Partial<_72.SignatureDescriptor>): _72.SignatureDescriptor;
                    fromAmino(object: _72.SignatureDescriptorAmino): _72.SignatureDescriptor;
                    toAmino(message: _72.SignatureDescriptor): _72.SignatureDescriptorAmino;
                    fromAminoMsg(object: _72.SignatureDescriptorAminoMsg): _72.SignatureDescriptor;
                    toAminoMsg(message: _72.SignatureDescriptor): _72.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _72.SignatureDescriptorProtoMsg): _72.SignatureDescriptor;
                    toProto(message: _72.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _72.SignatureDescriptor): _72.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _72.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_72.SignatureDescriptor_Data>): _72.SignatureDescriptor_Data;
                    fromAmino(object: _72.SignatureDescriptor_DataAmino): _72.SignatureDescriptor_Data;
                    toAmino(message: _72.SignatureDescriptor_Data): _72.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _72.SignatureDescriptor_DataAminoMsg): _72.SignatureDescriptor_Data;
                    toAminoMsg(message: _72.SignatureDescriptor_Data): _72.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _72.SignatureDescriptor_DataProtoMsg): _72.SignatureDescriptor_Data;
                    toProto(message: _72.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _72.SignatureDescriptor_Data): _72.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _72.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_72.SignatureDescriptor_Data_Single>): _72.SignatureDescriptor_Data_Single;
                    fromAmino(object: _72.SignatureDescriptor_Data_SingleAmino): _72.SignatureDescriptor_Data_Single;
                    toAmino(message: _72.SignatureDescriptor_Data_Single): _72.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _72.SignatureDescriptor_Data_SingleAminoMsg): _72.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _72.SignatureDescriptor_Data_Single): _72.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _72.SignatureDescriptor_Data_SingleProtoMsg): _72.SignatureDescriptor_Data_Single;
                    toProto(message: _72.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _72.SignatureDescriptor_Data_Single): _72.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _72.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_72.SignatureDescriptor_Data_Multi>): _72.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _72.SignatureDescriptor_Data_MultiAmino): _72.SignatureDescriptor_Data_Multi;
                    toAmino(message: _72.SignatureDescriptor_Data_Multi): _72.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _72.SignatureDescriptor_Data_MultiAminoMsg): _72.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _72.SignatureDescriptor_Data_Multi): _72.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _72.SignatureDescriptor_Data_MultiProtoMsg): _72.SignatureDescriptor_Data_Multi;
                    toProto(message: _72.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _72.SignatureDescriptor_Data_Multi): _72.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _186.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _73.SimulateRequest): Promise<_73.SimulateResponse>;
                getTx(request: _73.GetTxRequest): Promise<_73.GetTxResponse>;
                broadcastTx(request: _73.BroadcastTxRequest): Promise<_73.BroadcastTxResponse>;
                getTxsEvent(request: _73.GetTxsEventRequest): Promise<_73.GetTxsEventResponse>;
                getBlockWithTxs(request: _73.GetBlockWithTxsRequest): Promise<_73.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _171.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _74.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.Tx;
                fromPartial(object: Partial<_74.Tx>): _74.Tx;
                fromAmino(object: _74.TxAmino): _74.Tx;
                toAmino(message: _74.Tx): _74.TxAmino;
                fromAminoMsg(object: _74.TxAminoMsg): _74.Tx;
                toAminoMsg(message: _74.Tx): _74.TxAminoMsg;
                fromProtoMsg(message: _74.TxProtoMsg): _74.Tx;
                toProto(message: _74.Tx): Uint8Array;
                toProtoMsg(message: _74.Tx): _74.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _74.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.TxRaw;
                fromPartial(object: Partial<_74.TxRaw>): _74.TxRaw;
                fromAmino(object: _74.TxRawAmino): _74.TxRaw;
                toAmino(message: _74.TxRaw): _74.TxRawAmino;
                fromAminoMsg(object: _74.TxRawAminoMsg): _74.TxRaw;
                toAminoMsg(message: _74.TxRaw): _74.TxRawAminoMsg;
                fromProtoMsg(message: _74.TxRawProtoMsg): _74.TxRaw;
                toProto(message: _74.TxRaw): Uint8Array;
                toProtoMsg(message: _74.TxRaw): _74.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _74.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.SignDoc;
                fromPartial(object: Partial<_74.SignDoc>): _74.SignDoc;
                fromAmino(object: _74.SignDocAmino): _74.SignDoc;
                toAmino(message: _74.SignDoc): _74.SignDocAmino;
                fromAminoMsg(object: _74.SignDocAminoMsg): _74.SignDoc;
                toAminoMsg(message: _74.SignDoc): _74.SignDocAminoMsg;
                fromProtoMsg(message: _74.SignDocProtoMsg): _74.SignDoc;
                toProto(message: _74.SignDoc): Uint8Array;
                toProtoMsg(message: _74.SignDoc): _74.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _74.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.TxBody;
                fromPartial(object: Partial<_74.TxBody>): _74.TxBody;
                fromAmino(object: _74.TxBodyAmino): _74.TxBody;
                toAmino(message: _74.TxBody): _74.TxBodyAmino;
                fromAminoMsg(object: _74.TxBodyAminoMsg): _74.TxBody;
                toAminoMsg(message: _74.TxBody): _74.TxBodyAminoMsg;
                fromProtoMsg(message: _74.TxBodyProtoMsg): _74.TxBody;
                toProto(message: _74.TxBody): Uint8Array;
                toProtoMsg(message: _74.TxBody): _74.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _74.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.AuthInfo;
                fromPartial(object: Partial<_74.AuthInfo>): _74.AuthInfo;
                fromAmino(object: _74.AuthInfoAmino): _74.AuthInfo;
                toAmino(message: _74.AuthInfo): _74.AuthInfoAmino;
                fromAminoMsg(object: _74.AuthInfoAminoMsg): _74.AuthInfo;
                toAminoMsg(message: _74.AuthInfo): _74.AuthInfoAminoMsg;
                fromProtoMsg(message: _74.AuthInfoProtoMsg): _74.AuthInfo;
                toProto(message: _74.AuthInfo): Uint8Array;
                toProtoMsg(message: _74.AuthInfo): _74.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _74.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.SignerInfo;
                fromPartial(object: Partial<_74.SignerInfo>): _74.SignerInfo;
                fromAmino(object: _74.SignerInfoAmino): _74.SignerInfo;
                toAmino(message: _74.SignerInfo): _74.SignerInfoAmino;
                fromAminoMsg(object: _74.SignerInfoAminoMsg): _74.SignerInfo;
                toAminoMsg(message: _74.SignerInfo): _74.SignerInfoAminoMsg;
                fromProtoMsg(message: _74.SignerInfoProtoMsg): _74.SignerInfo;
                toProto(message: _74.SignerInfo): Uint8Array;
                toProtoMsg(message: _74.SignerInfo): _74.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _74.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.ModeInfo;
                fromPartial(object: Partial<_74.ModeInfo>): _74.ModeInfo;
                fromAmino(object: _74.ModeInfoAmino): _74.ModeInfo;
                toAmino(message: _74.ModeInfo): _74.ModeInfoAmino;
                fromAminoMsg(object: _74.ModeInfoAminoMsg): _74.ModeInfo;
                toAminoMsg(message: _74.ModeInfo): _74.ModeInfoAminoMsg;
                fromProtoMsg(message: _74.ModeInfoProtoMsg): _74.ModeInfo;
                toProto(message: _74.ModeInfo): Uint8Array;
                toProtoMsg(message: _74.ModeInfo): _74.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _74.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.ModeInfo_Single;
                fromPartial(object: Partial<_74.ModeInfo_Single>): _74.ModeInfo_Single;
                fromAmino(object: _74.ModeInfo_SingleAmino): _74.ModeInfo_Single;
                toAmino(message: _74.ModeInfo_Single): _74.ModeInfo_SingleAmino;
                fromAminoMsg(object: _74.ModeInfo_SingleAminoMsg): _74.ModeInfo_Single;
                toAminoMsg(message: _74.ModeInfo_Single): _74.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _74.ModeInfo_SingleProtoMsg): _74.ModeInfo_Single;
                toProto(message: _74.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _74.ModeInfo_Single): _74.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _74.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.ModeInfo_Multi;
                fromPartial(object: Partial<_74.ModeInfo_Multi>): _74.ModeInfo_Multi;
                fromAmino(object: _74.ModeInfo_MultiAmino): _74.ModeInfo_Multi;
                toAmino(message: _74.ModeInfo_Multi): _74.ModeInfo_MultiAmino;
                fromAminoMsg(object: _74.ModeInfo_MultiAminoMsg): _74.ModeInfo_Multi;
                toAminoMsg(message: _74.ModeInfo_Multi): _74.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _74.ModeInfo_MultiProtoMsg): _74.ModeInfo_Multi;
                toProto(message: _74.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _74.ModeInfo_Multi): _74.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _74.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.Fee;
                fromPartial(object: Partial<_74.Fee>): _74.Fee;
                fromAmino(object: _74.FeeAmino): _74.Fee;
                toAmino(message: _74.Fee): _74.FeeAmino;
                fromAminoMsg(object: _74.FeeAminoMsg): _74.Fee;
                toAminoMsg(message: _74.Fee): _74.FeeAminoMsg;
                fromProtoMsg(message: _74.FeeProtoMsg): _74.Fee;
                toProto(message: _74.Fee): Uint8Array;
                toProtoMsg(message: _74.Fee): _74.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _73.OrderBy;
            orderByToJSON(object: _73.OrderBy): string;
            broadcastModeFromJSON(object: any): _73.BroadcastMode;
            broadcastModeToJSON(object: _73.BroadcastMode): string;
            OrderBy: typeof _73.OrderBy;
            OrderBySDKType: typeof _73.OrderBy;
            OrderByAmino: typeof _73.OrderBy;
            BroadcastMode: typeof _73.BroadcastMode;
            BroadcastModeSDKType: typeof _73.BroadcastMode;
            BroadcastModeAmino: typeof _73.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _73.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.GetTxsEventRequest;
                fromPartial(object: Partial<_73.GetTxsEventRequest>): _73.GetTxsEventRequest;
                fromAmino(object: _73.GetTxsEventRequestAmino): _73.GetTxsEventRequest;
                toAmino(message: _73.GetTxsEventRequest): _73.GetTxsEventRequestAmino;
                fromAminoMsg(object: _73.GetTxsEventRequestAminoMsg): _73.GetTxsEventRequest;
                toAminoMsg(message: _73.GetTxsEventRequest): _73.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _73.GetTxsEventRequestProtoMsg): _73.GetTxsEventRequest;
                toProto(message: _73.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _73.GetTxsEventRequest): _73.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _73.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.GetTxsEventResponse;
                fromPartial(object: Partial<_73.GetTxsEventResponse>): _73.GetTxsEventResponse;
                fromAmino(object: _73.GetTxsEventResponseAmino): _73.GetTxsEventResponse;
                toAmino(message: _73.GetTxsEventResponse): _73.GetTxsEventResponseAmino;
                fromAminoMsg(object: _73.GetTxsEventResponseAminoMsg): _73.GetTxsEventResponse;
                toAminoMsg(message: _73.GetTxsEventResponse): _73.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _73.GetTxsEventResponseProtoMsg): _73.GetTxsEventResponse;
                toProto(message: _73.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _73.GetTxsEventResponse): _73.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _73.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.BroadcastTxRequest;
                fromPartial(object: Partial<_73.BroadcastTxRequest>): _73.BroadcastTxRequest;
                fromAmino(object: _73.BroadcastTxRequestAmino): _73.BroadcastTxRequest;
                toAmino(message: _73.BroadcastTxRequest): _73.BroadcastTxRequestAmino;
                fromAminoMsg(object: _73.BroadcastTxRequestAminoMsg): _73.BroadcastTxRequest;
                toAminoMsg(message: _73.BroadcastTxRequest): _73.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _73.BroadcastTxRequestProtoMsg): _73.BroadcastTxRequest;
                toProto(message: _73.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _73.BroadcastTxRequest): _73.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _73.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.BroadcastTxResponse;
                fromPartial(object: Partial<_73.BroadcastTxResponse>): _73.BroadcastTxResponse;
                fromAmino(object: _73.BroadcastTxResponseAmino): _73.BroadcastTxResponse;
                toAmino(message: _73.BroadcastTxResponse): _73.BroadcastTxResponseAmino;
                fromAminoMsg(object: _73.BroadcastTxResponseAminoMsg): _73.BroadcastTxResponse;
                toAminoMsg(message: _73.BroadcastTxResponse): _73.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _73.BroadcastTxResponseProtoMsg): _73.BroadcastTxResponse;
                toProto(message: _73.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _73.BroadcastTxResponse): _73.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _73.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.SimulateRequest;
                fromPartial(object: Partial<_73.SimulateRequest>): _73.SimulateRequest;
                fromAmino(object: _73.SimulateRequestAmino): _73.SimulateRequest;
                toAmino(message: _73.SimulateRequest): _73.SimulateRequestAmino;
                fromAminoMsg(object: _73.SimulateRequestAminoMsg): _73.SimulateRequest;
                toAminoMsg(message: _73.SimulateRequest): _73.SimulateRequestAminoMsg;
                fromProtoMsg(message: _73.SimulateRequestProtoMsg): _73.SimulateRequest;
                toProto(message: _73.SimulateRequest): Uint8Array;
                toProtoMsg(message: _73.SimulateRequest): _73.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _73.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.SimulateResponse;
                fromPartial(object: Partial<_73.SimulateResponse>): _73.SimulateResponse;
                fromAmino(object: _73.SimulateResponseAmino): _73.SimulateResponse;
                toAmino(message: _73.SimulateResponse): _73.SimulateResponseAmino;
                fromAminoMsg(object: _73.SimulateResponseAminoMsg): _73.SimulateResponse;
                toAminoMsg(message: _73.SimulateResponse): _73.SimulateResponseAminoMsg;
                fromProtoMsg(message: _73.SimulateResponseProtoMsg): _73.SimulateResponse;
                toProto(message: _73.SimulateResponse): Uint8Array;
                toProtoMsg(message: _73.SimulateResponse): _73.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _73.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.GetTxRequest;
                fromPartial(object: Partial<_73.GetTxRequest>): _73.GetTxRequest;
                fromAmino(object: _73.GetTxRequestAmino): _73.GetTxRequest;
                toAmino(message: _73.GetTxRequest): _73.GetTxRequestAmino;
                fromAminoMsg(object: _73.GetTxRequestAminoMsg): _73.GetTxRequest;
                toAminoMsg(message: _73.GetTxRequest): _73.GetTxRequestAminoMsg;
                fromProtoMsg(message: _73.GetTxRequestProtoMsg): _73.GetTxRequest;
                toProto(message: _73.GetTxRequest): Uint8Array;
                toProtoMsg(message: _73.GetTxRequest): _73.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _73.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.GetTxResponse;
                fromPartial(object: Partial<_73.GetTxResponse>): _73.GetTxResponse;
                fromAmino(object: _73.GetTxResponseAmino): _73.GetTxResponse;
                toAmino(message: _73.GetTxResponse): _73.GetTxResponseAmino;
                fromAminoMsg(object: _73.GetTxResponseAminoMsg): _73.GetTxResponse;
                toAminoMsg(message: _73.GetTxResponse): _73.GetTxResponseAminoMsg;
                fromProtoMsg(message: _73.GetTxResponseProtoMsg): _73.GetTxResponse;
                toProto(message: _73.GetTxResponse): Uint8Array;
                toProtoMsg(message: _73.GetTxResponse): _73.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _73.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_73.GetBlockWithTxsRequest>): _73.GetBlockWithTxsRequest;
                fromAmino(object: _73.GetBlockWithTxsRequestAmino): _73.GetBlockWithTxsRequest;
                toAmino(message: _73.GetBlockWithTxsRequest): _73.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _73.GetBlockWithTxsRequestAminoMsg): _73.GetBlockWithTxsRequest;
                toAminoMsg(message: _73.GetBlockWithTxsRequest): _73.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _73.GetBlockWithTxsRequestProtoMsg): _73.GetBlockWithTxsRequest;
                toProto(message: _73.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _73.GetBlockWithTxsRequest): _73.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _73.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_73.GetBlockWithTxsResponse>): _73.GetBlockWithTxsResponse;
                fromAmino(object: _73.GetBlockWithTxsResponseAmino): _73.GetBlockWithTxsResponse;
                toAmino(message: _73.GetBlockWithTxsResponse): _73.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _73.GetBlockWithTxsResponseAminoMsg): _73.GetBlockWithTxsResponse;
                toAminoMsg(message: _73.GetBlockWithTxsResponse): _73.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _73.GetBlockWithTxsResponseProtoMsg): _73.GetBlockWithTxsResponse;
                toProto(message: _73.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _73.GetBlockWithTxsResponse): _73.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _187.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _75.QueryCurrentPlanRequest): Promise<_75.QueryCurrentPlanResponse>;
                appliedPlan(request: _75.QueryAppliedPlanRequest): Promise<_75.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _75.QueryUpgradedConsensusStateRequest): Promise<_75.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _75.QueryModuleVersionsRequest): Promise<_75.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _172.LCDQueryClient;
            Plan: {
                typeUrl: string;
                encode(message: _76.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Plan;
                fromPartial(object: Partial<_76.Plan>): _76.Plan;
                fromAmino(object: _76.PlanAmino): _76.Plan;
                toAmino(message: _76.Plan): _76.PlanAmino;
                fromAminoMsg(object: _76.PlanAminoMsg): _76.Plan;
                toAminoMsg(message: _76.Plan): _76.PlanAminoMsg;
                fromProtoMsg(message: _76.PlanProtoMsg): _76.Plan;
                toProto(message: _76.Plan): Uint8Array;
                toProtoMsg(message: _76.Plan): _76.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _76.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_76.SoftwareUpgradeProposal>): _76.SoftwareUpgradeProposal;
                fromAmino(object: _76.SoftwareUpgradeProposalAmino): _76.SoftwareUpgradeProposal;
                toAmino(message: _76.SoftwareUpgradeProposal): _76.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _76.SoftwareUpgradeProposalAminoMsg): _76.SoftwareUpgradeProposal;
                toAminoMsg(message: _76.SoftwareUpgradeProposal): _76.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _76.SoftwareUpgradeProposalProtoMsg): _76.SoftwareUpgradeProposal;
                toProto(message: _76.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _76.SoftwareUpgradeProposal): _76.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _76.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_76.CancelSoftwareUpgradeProposal>): _76.CancelSoftwareUpgradeProposal;
                fromAmino(object: _76.CancelSoftwareUpgradeProposalAmino): _76.CancelSoftwareUpgradeProposal;
                toAmino(message: _76.CancelSoftwareUpgradeProposal): _76.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _76.CancelSoftwareUpgradeProposalAminoMsg): _76.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _76.CancelSoftwareUpgradeProposal): _76.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _76.CancelSoftwareUpgradeProposalProtoMsg): _76.CancelSoftwareUpgradeProposal;
                toProto(message: _76.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _76.CancelSoftwareUpgradeProposal): _76.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _76.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.ModuleVersion;
                fromPartial(object: Partial<_76.ModuleVersion>): _76.ModuleVersion;
                fromAmino(object: _76.ModuleVersionAmino): _76.ModuleVersion;
                toAmino(message: _76.ModuleVersion): _76.ModuleVersionAmino;
                fromAminoMsg(object: _76.ModuleVersionAminoMsg): _76.ModuleVersion;
                toAminoMsg(message: _76.ModuleVersion): _76.ModuleVersionAminoMsg;
                fromProtoMsg(message: _76.ModuleVersionProtoMsg): _76.ModuleVersion;
                toProto(message: _76.ModuleVersion): Uint8Array;
                toProtoMsg(message: _76.ModuleVersion): _76.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _75.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_75.QueryCurrentPlanRequest>): _75.QueryCurrentPlanRequest;
                fromAmino(_: _75.QueryCurrentPlanRequestAmino): _75.QueryCurrentPlanRequest;
                toAmino(_: _75.QueryCurrentPlanRequest): _75.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _75.QueryCurrentPlanRequestAminoMsg): _75.QueryCurrentPlanRequest;
                toAminoMsg(message: _75.QueryCurrentPlanRequest): _75.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _75.QueryCurrentPlanRequestProtoMsg): _75.QueryCurrentPlanRequest;
                toProto(message: _75.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _75.QueryCurrentPlanRequest): _75.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _75.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_75.QueryCurrentPlanResponse>): _75.QueryCurrentPlanResponse;
                fromAmino(object: _75.QueryCurrentPlanResponseAmino): _75.QueryCurrentPlanResponse;
                toAmino(message: _75.QueryCurrentPlanResponse): _75.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _75.QueryCurrentPlanResponseAminoMsg): _75.QueryCurrentPlanResponse;
                toAminoMsg(message: _75.QueryCurrentPlanResponse): _75.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _75.QueryCurrentPlanResponseProtoMsg): _75.QueryCurrentPlanResponse;
                toProto(message: _75.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _75.QueryCurrentPlanResponse): _75.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _75.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_75.QueryAppliedPlanRequest>): _75.QueryAppliedPlanRequest;
                fromAmino(object: _75.QueryAppliedPlanRequestAmino): _75.QueryAppliedPlanRequest;
                toAmino(message: _75.QueryAppliedPlanRequest): _75.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _75.QueryAppliedPlanRequestAminoMsg): _75.QueryAppliedPlanRequest;
                toAminoMsg(message: _75.QueryAppliedPlanRequest): _75.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _75.QueryAppliedPlanRequestProtoMsg): _75.QueryAppliedPlanRequest;
                toProto(message: _75.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _75.QueryAppliedPlanRequest): _75.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _75.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_75.QueryAppliedPlanResponse>): _75.QueryAppliedPlanResponse;
                fromAmino(object: _75.QueryAppliedPlanResponseAmino): _75.QueryAppliedPlanResponse;
                toAmino(message: _75.QueryAppliedPlanResponse): _75.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _75.QueryAppliedPlanResponseAminoMsg): _75.QueryAppliedPlanResponse;
                toAminoMsg(message: _75.QueryAppliedPlanResponse): _75.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _75.QueryAppliedPlanResponseProtoMsg): _75.QueryAppliedPlanResponse;
                toProto(message: _75.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _75.QueryAppliedPlanResponse): _75.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _75.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_75.QueryUpgradedConsensusStateRequest>): _75.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _75.QueryUpgradedConsensusStateRequestAmino): _75.QueryUpgradedConsensusStateRequest;
                toAmino(message: _75.QueryUpgradedConsensusStateRequest): _75.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _75.QueryUpgradedConsensusStateRequestAminoMsg): _75.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _75.QueryUpgradedConsensusStateRequest): _75.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _75.QueryUpgradedConsensusStateRequestProtoMsg): _75.QueryUpgradedConsensusStateRequest;
                toProto(message: _75.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _75.QueryUpgradedConsensusStateRequest): _75.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _75.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_75.QueryUpgradedConsensusStateResponse>): _75.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _75.QueryUpgradedConsensusStateResponseAmino): _75.QueryUpgradedConsensusStateResponse;
                toAmino(message: _75.QueryUpgradedConsensusStateResponse): _75.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _75.QueryUpgradedConsensusStateResponseAminoMsg): _75.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _75.QueryUpgradedConsensusStateResponse): _75.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _75.QueryUpgradedConsensusStateResponseProtoMsg): _75.QueryUpgradedConsensusStateResponse;
                toProto(message: _75.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _75.QueryUpgradedConsensusStateResponse): _75.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _75.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_75.QueryModuleVersionsRequest>): _75.QueryModuleVersionsRequest;
                fromAmino(object: _75.QueryModuleVersionsRequestAmino): _75.QueryModuleVersionsRequest;
                toAmino(message: _75.QueryModuleVersionsRequest): _75.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _75.QueryModuleVersionsRequestAminoMsg): _75.QueryModuleVersionsRequest;
                toAminoMsg(message: _75.QueryModuleVersionsRequest): _75.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _75.QueryModuleVersionsRequestProtoMsg): _75.QueryModuleVersionsRequest;
                toProto(message: _75.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _75.QueryModuleVersionsRequest): _75.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _75.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_75.QueryModuleVersionsResponse>): _75.QueryModuleVersionsResponse;
                fromAmino(object: _75.QueryModuleVersionsResponseAmino): _75.QueryModuleVersionsResponse;
                toAmino(message: _75.QueryModuleVersionsResponse): _75.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _75.QueryModuleVersionsResponseAminoMsg): _75.QueryModuleVersionsResponse;
                toAminoMsg(message: _75.QueryModuleVersionsResponse): _75.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _75.QueryModuleVersionsResponseProtoMsg): _75.QueryModuleVersionsResponse;
                toProto(message: _75.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _75.QueryModuleVersionsResponse): _75.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _197.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _77.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _77.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _77.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _77.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _77.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _77.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _77.MsgCreateVestingAccount) => _77.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _77.MsgCreateVestingAccountAmino) => _77.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _78.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.BaseVestingAccount;
                fromPartial(object: Partial<_78.BaseVestingAccount>): _78.BaseVestingAccount;
                fromAmino(object: _78.BaseVestingAccountAmino): _78.BaseVestingAccount;
                toAmino(message: _78.BaseVestingAccount): _78.BaseVestingAccountAmino;
                fromAminoMsg(object: _78.BaseVestingAccountAminoMsg): _78.BaseVestingAccount;
                toAminoMsg(message: _78.BaseVestingAccount): _78.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _78.BaseVestingAccountProtoMsg): _78.BaseVestingAccount;
                toProto(message: _78.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _78.BaseVestingAccount): _78.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _78.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.ContinuousVestingAccount;
                fromPartial(object: Partial<_78.ContinuousVestingAccount>): _78.ContinuousVestingAccount;
                fromAmino(object: _78.ContinuousVestingAccountAmino): _78.ContinuousVestingAccount;
                toAmino(message: _78.ContinuousVestingAccount): _78.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _78.ContinuousVestingAccountAminoMsg): _78.ContinuousVestingAccount;
                toAminoMsg(message: _78.ContinuousVestingAccount): _78.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _78.ContinuousVestingAccountProtoMsg): _78.ContinuousVestingAccount;
                toProto(message: _78.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _78.ContinuousVestingAccount): _78.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _78.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.DelayedVestingAccount;
                fromPartial(object: Partial<_78.DelayedVestingAccount>): _78.DelayedVestingAccount;
                fromAmino(object: _78.DelayedVestingAccountAmino): _78.DelayedVestingAccount;
                toAmino(message: _78.DelayedVestingAccount): _78.DelayedVestingAccountAmino;
                fromAminoMsg(object: _78.DelayedVestingAccountAminoMsg): _78.DelayedVestingAccount;
                toAminoMsg(message: _78.DelayedVestingAccount): _78.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _78.DelayedVestingAccountProtoMsg): _78.DelayedVestingAccount;
                toProto(message: _78.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _78.DelayedVestingAccount): _78.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _78.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Period;
                fromPartial(object: Partial<_78.Period>): _78.Period;
                fromAmino(object: _78.PeriodAmino): _78.Period;
                toAmino(message: _78.Period): _78.PeriodAmino;
                fromAminoMsg(object: _78.PeriodAminoMsg): _78.Period;
                toAminoMsg(message: _78.Period): _78.PeriodAminoMsg;
                fromProtoMsg(message: _78.PeriodProtoMsg): _78.Period;
                toProto(message: _78.Period): Uint8Array;
                toProtoMsg(message: _78.Period): _78.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _78.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.PeriodicVestingAccount;
                fromPartial(object: Partial<_78.PeriodicVestingAccount>): _78.PeriodicVestingAccount;
                fromAmino(object: _78.PeriodicVestingAccountAmino): _78.PeriodicVestingAccount;
                toAmino(message: _78.PeriodicVestingAccount): _78.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _78.PeriodicVestingAccountAminoMsg): _78.PeriodicVestingAccount;
                toAminoMsg(message: _78.PeriodicVestingAccount): _78.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _78.PeriodicVestingAccountProtoMsg): _78.PeriodicVestingAccount;
                toProto(message: _78.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _78.PeriodicVestingAccount): _78.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _78.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.PermanentLockedAccount;
                fromPartial(object: Partial<_78.PermanentLockedAccount>): _78.PermanentLockedAccount;
                fromAmino(object: _78.PermanentLockedAccountAmino): _78.PermanentLockedAccount;
                toAmino(message: _78.PermanentLockedAccount): _78.PermanentLockedAccountAmino;
                fromAminoMsg(object: _78.PermanentLockedAccountAminoMsg): _78.PermanentLockedAccount;
                toAminoMsg(message: _78.PermanentLockedAccount): _78.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _78.PermanentLockedAccountProtoMsg): _78.PermanentLockedAccount;
                toProto(message: _78.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _78.PermanentLockedAccount): _78.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _77.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgCreateVestingAccount;
                fromPartial(object: Partial<_77.MsgCreateVestingAccount>): _77.MsgCreateVestingAccount;
                fromAmino(object: _77.MsgCreateVestingAccountAmino): _77.MsgCreateVestingAccount;
                toAmino(message: _77.MsgCreateVestingAccount): _77.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _77.MsgCreateVestingAccountAminoMsg): _77.MsgCreateVestingAccount;
                toAminoMsg(message: _77.MsgCreateVestingAccount): _77.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _77.MsgCreateVestingAccountProtoMsg): _77.MsgCreateVestingAccount;
                toProto(message: _77.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _77.MsgCreateVestingAccount): _77.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _77.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_77.MsgCreateVestingAccountResponse>): _77.MsgCreateVestingAccountResponse;
                fromAmino(_: _77.MsgCreateVestingAccountResponseAmino): _77.MsgCreateVestingAccountResponse;
                toAmino(_: _77.MsgCreateVestingAccountResponse): _77.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _77.MsgCreateVestingAccountResponseAminoMsg): _77.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _77.MsgCreateVestingAccountResponse): _77.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _77.MsgCreateVestingAccountResponseProtoMsg): _77.MsgCreateVestingAccountResponse;
                toProto(message: _77.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _77.MsgCreateVestingAccountResponse): _77.MsgCreateVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _188.MsgClientImpl;
                };
                bank: {
                    v1beta1: _189.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _190.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _191.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _192.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _193.MsgClientImpl;
                };
                gov: {
                    v1beta1: _194.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _195.MsgClientImpl;
                };
                staking: {
                    v1beta1: _196.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _197.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _10.QueryAccountsRequest): Promise<_10.QueryAccountsResponse>;
                        account(request: _10.QueryAccountRequest): Promise<_10.QueryAccountResponse>;
                        params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                        moduleAccountByName(request: _10.QueryModuleAccountByNameRequest): Promise<_10.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _14.QueryGrantsRequest): Promise<_14.QueryGrantsResponse>;
                        granterGrants(request: _14.QueryGranterGrantsRequest): Promise<_14.QueryGranterGrantsResponse>;
                        granteeGrants(request: _14.QueryGranteeGrantsRequest): Promise<_14.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _19.QueryBalanceRequest): Promise<_19.QueryBalanceResponse>;
                        allBalances(request: _19.QueryAllBalancesRequest): Promise<_19.QueryAllBalancesResponse>;
                        spendableBalances(request: _19.QuerySpendableBalancesRequest): Promise<_19.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _19.QueryTotalSupplyRequest): Promise<_19.QueryTotalSupplyResponse>;
                        supplyOf(request: _19.QuerySupplyOfRequest): Promise<_19.QuerySupplyOfResponse>;
                        params(request?: _19.QueryParamsRequest): Promise<_19.QueryParamsResponse>;
                        denomMetadata(request: _19.QueryDenomMetadataRequest): Promise<_19.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _19.QueryDenomsMetadataRequest): Promise<_19.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _23.ConfigRequest): Promise<_23.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _31.GetNodeInfoRequest): Promise<_31.GetNodeInfoResponse>;
                            getSyncing(request?: _31.GetSyncingRequest): Promise<_31.GetSyncingResponse>;
                            getLatestBlock(request?: _31.GetLatestBlockRequest): Promise<_31.GetLatestBlockResponse>;
                            getBlockByHeight(request: _31.GetBlockByHeightRequest): Promise<_31.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _31.GetLatestValidatorSetRequest): Promise<_31.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _31.GetValidatorSetByHeightRequest): Promise<_31.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _43.QueryParamsRequest): Promise<_43.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _43.QueryValidatorOutstandingRewardsRequest): Promise<_43.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _43.QueryValidatorCommissionRequest): Promise<_43.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _43.QueryValidatorSlashesRequest): Promise<_43.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _43.QueryDelegationRewardsRequest): Promise<_43.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _43.QueryDelegationTotalRewardsRequest): Promise<_43.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _43.QueryDelegatorValidatorsRequest): Promise<_43.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _43.QueryDelegatorWithdrawAddressRequest): Promise<_43.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _43.QueryCommunityPoolRequest): Promise<_43.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _47.QueryEvidenceRequest): Promise<_47.QueryEvidenceResponse>;
                        allEvidence(request?: _47.QueryAllEvidenceRequest): Promise<_47.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _51.QueryAllowanceRequest): Promise<_51.QueryAllowanceResponse>;
                        allowances(request: _51.QueryAllowancesRequest): Promise<_51.QueryAllowancesResponse>;
                        allowancesByGranter(request: _51.QueryAllowancesByGranterRequest): Promise<_51.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _56.QueryProposalRequest): Promise<_56.QueryProposalResponse>;
                        proposals(request: _56.QueryProposalsRequest): Promise<_56.QueryProposalsResponse>;
                        vote(request: _56.QueryVoteRequest): Promise<_56.QueryVoteResponse>;
                        votes(request: _56.QueryVotesRequest): Promise<_56.QueryVotesResponse>;
                        params(request: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                        deposit(request: _56.QueryDepositRequest): Promise<_56.QueryDepositResponse>;
                        deposits(request: _56.QueryDepositsRequest): Promise<_56.QueryDepositsResponse>;
                        tallyResult(request: _56.QueryTallyResultRequest): Promise<_56.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                        inflation(request?: _60.QueryInflationRequest): Promise<_60.QueryInflationResponse>;
                        annualProvisions(request?: _60.QueryAnnualProvisionsRequest): Promise<_60.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                        signingInfo(request: _64.QuerySigningInfoRequest): Promise<_64.QuerySigningInfoResponse>;
                        signingInfos(request?: _64.QuerySigningInfosRequest): Promise<_64.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _69.QueryValidatorsRequest): Promise<_69.QueryValidatorsResponse>;
                        validator(request: _69.QueryValidatorRequest): Promise<_69.QueryValidatorResponse>;
                        validatorDelegations(request: _69.QueryValidatorDelegationsRequest): Promise<_69.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _69.QueryValidatorUnbondingDelegationsRequest): Promise<_69.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _69.QueryDelegationRequest): Promise<_69.QueryDelegationResponse>;
                        unbondingDelegation(request: _69.QueryUnbondingDelegationRequest): Promise<_69.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _69.QueryDelegatorDelegationsRequest): Promise<_69.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _69.QueryDelegatorUnbondingDelegationsRequest): Promise<_69.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _69.QueryRedelegationsRequest): Promise<_69.QueryRedelegationsResponse>;
                        delegatorValidators(request: _69.QueryDelegatorValidatorsRequest): Promise<_69.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _69.QueryDelegatorValidatorRequest): Promise<_69.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _69.QueryHistoricalInfoRequest): Promise<_69.QueryHistoricalInfoResponse>;
                        pool(request?: _69.QueryPoolRequest): Promise<_69.QueryPoolResponse>;
                        params(request?: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _73.SimulateRequest): Promise<_73.SimulateResponse>;
                        getTx(request: _73.GetTxRequest): Promise<_73.GetTxResponse>;
                        broadcastTx(request: _73.BroadcastTxRequest): Promise<_73.BroadcastTxResponse>;
                        getTxsEvent(request: _73.GetTxsEventRequest): Promise<_73.GetTxsEventResponse>;
                        getBlockWithTxs(request: _73.GetBlockWithTxsRequest): Promise<_73.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _75.QueryCurrentPlanRequest): Promise<_75.QueryCurrentPlanResponse>;
                        appliedPlan(request: _75.QueryAppliedPlanRequest): Promise<_75.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _75.QueryUpgradedConsensusStateRequest): Promise<_75.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _75.QueryModuleVersionsRequest): Promise<_75.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _158.LCDQueryClient;
                };
                authz: {
                    v1beta1: _159.LCDQueryClient;
                };
                bank: {
                    v1beta1: _160.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _161.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _162.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _163.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _164.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _165.LCDQueryClient;
                };
                gov: {
                    v1beta1: _166.LCDQueryClient;
                };
                mint: {
                    v1beta1: _167.LCDQueryClient;
                };
                params: {
                    v1beta1: _168.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _169.LCDQueryClient;
                };
                staking: {
                    v1beta1: _170.LCDQueryClient;
                };
                tx: {
                    v1beta1: _171.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _172.LCDQueryClient;
                };
            };
        }>;
    };
}
